# -*- coding: utf-8 -*-
"""Je hlavní text stránky v serverovém HTML, nebo ho dodělá až prohlížeč?

Výběr stránky: ze sitemapy webu (robots.txt → Sitemap:, jinak /sitemap.xml).
Sitemapa je seznam adres, které web sám nabízí vyhledávačům — férovější
a opakovatelnější výběr než procházení odkazů z homepage.

Pro vybranou adresu: syrové HTML (bez JS) vs. vykreslený DOM (Chrome headless).
Z vykresleného DOMu vezmu tři nejdelší odstavce, které vypadají jako obsah,
a hledám jejich začátek v syrovém HTML.

Tři pojistky proti falešným nálezům (první verze skriptu je neměla a hlásila
chybějící obsah tam, kde žádný nechyběl):
 1) filtr BOILER — vyhazuje lištu se souhlasem, hlášky o chybě a kód v <p>
 2) kontrola přesměrování — když prostý HTTP klient skončí na jiné adrese
    (typicky na stránce se souhlasem), případ neporovnávám
 3) kontrola objemu — když prohlížeč dostal výrazně míň textu než HTTP klient,
    narazil nejspíš na zeď a render nejde použít
"""
import json, re, subprocess, sys, urllib.request, html, gzip, io
from urllib.parse import urlparse

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
DROP = re.compile(r'(?is)<(script|style|template)\b.*?</\1\s*>')
TAGS = re.compile(r'(?s)<[^>]+>')
WS = re.compile(r'\s+')
SKIP = re.compile(r'(?i)\.(jpg|png|pdf|zip|gif|svg|webp|mp4|xml)$|'
                  r'(kontakt|prihlaseni|login|klient|ucet|kosik|cart|souhlas|cookie|gdpr|'
                  r'obchodni-podminky|ochrana-osobnich|zapomenute|registrace|mapa-stranek|'
                  r'doprava-a-platba|reklamace|o-nas|autor/|tag/|stitek/)')
BOILER = re.compile(r'(?i)cookie|souhlas|csrf|token|přihlá[sš]|personalizac|reklamn|'
                    r'zpracován[íi] osobn|ochran[ay] osobn|document\.|function *\(|=>|'
                    r'localStorage|addEventListener|omlouváme se|nebyla nalezena|'
                    r'vypršel|není dostupn|hlavní stránce|zálohovou fakturou')


def norm(s):
    return WS.sub(' ', html.unescape(s or '')).strip()


def text_of(doc):
    t = DROP.sub(' ', doc or '')
    t = re.sub(r'(?is)<!--.*?-->', ' ', t)
    return norm(TAGS.sub(' ', t))


def fetch(url, timeout=25):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': UA,
                                                   'Accept-Language': 'cs,en;q=0.8'})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            b = r.read(6000000)
            if b[:2] == b'\x1f\x8b':
                b = gzip.GzipFile(fileobj=io.BytesIO(b)).read()
            # POZOR: natvrdo utf-8 je chyba. Část českých webů posílá windows-1250
            # a text se pak rozsype na otazníky — porovnání s vykresleným DOMem
            # potom selže z čistě kódovacích důvodů a vypadá to jako chybějící obsah.
            cs = None
            ct = r.headers.get('Content-Type', '')
            m = re.search(r'(?i)charset=["\']?([\w-]+)', ct)
            if m:
                cs = m.group(1)
            if not cs:
                m = re.search(rb'(?i)<meta[^>]+charset=["\']?([\w-]+)', b[:4000])
                if m:
                    cs = m.group(1).decode('ascii', 'ignore')
            for enc in ([cs] if cs else []) + ['utf-8', 'cp1250']:
                try:
                    return b.decode(enc), r.status, r.geturl()
                except Exception:
                    continue
            return b.decode('utf-8', 'replace'), r.status, r.geturl()
    except Exception as e:
        return None, getattr(e, 'code', str(e)[:40]), url


def render(url):
    try:
        p = subprocess.run([CHROME, '--headless', '--disable-gpu', '--no-sandbox',
                            '--dump-dom', '--virtual-time-budget=9000', '--hide-scrollbars',
                            '--window-size=1280,2400', url], capture_output=True, timeout=75)
        out = p.stdout.decode('utf-8', 'replace')
        return out if len(out) > 500 else None
    except Exception:
        return None


def sitemap_urls(src, depth=0):
    srcs = []
    if depth == 0:
        rt, _, _ = fetch('https://%s/robots.txt' % src, 15)
        if rt:
            srcs += re.findall(r'(?im)^\s*sitemap\s*:\s*(\S+)', rt)[:3]
        srcs.append('https://%s/sitemap.xml' % src)
    else:
        srcs = [src]
    for s in srcs:
        x, code, _ = fetch(s, 25)
        if not x:
            continue
        if '<sitemapindex' in x[:3000].lower() and depth == 0:
            for k in re.findall(r'(?is)<loc>\s*([^<\s]+)\s*</loc>', x)[:4]:
                u = sitemap_urls(html.unescape(k), depth + 1)
                if u:
                    return u
            continue
        locs = [html.unescape(l) for l in re.findall(r'(?is)<loc>\s*([^<\s]+)\s*</loc>', x)]
        good = [l for l in locs
                if not SKIP.search(l) and len([p for p in urlparse(l).path.split('/') if p]) >= 1]
        if len(good) >= 3:
            return good
    return []


def content_ps(dom, n=3):
    """N nejdelších odstavců, které vypadají jako obsah stránky."""
    ps = []
    for m in re.finditer(r'(?is)<p\b[^>]*>(.*?)</p>', dom):
        x = norm(TAGS.sub(' ', m.group(1)))
        if len(x) >= 120 and not BOILER.search(x):
            ps.append(x)
    ps.sort(key=len, reverse=True)
    return ps[:n]


def main():
    doms = json.load(open(sys.argv[1]))
    out = []
    for i, d in enumerate(doms, 1):
        d = d.replace('https://', '').replace('http://', '').strip('/')
        rec = {'domain': d}
        locs = sitemap_urls(d)
        rec['sitemap_urls'] = len(locs)
        if not locs:
            rec['error'] = 'bez_sitemapy'
            out.append(rec); print('%3d %-26s bez použitelné sitemapy' % (i, d)); continue

        chosen = None
        order = [locs[len(locs) // 2 + k] for k in range(0, min(10, len(locs) - len(locs) // 2))]
        for u in order:
            h, c, real = fetch(u, 22)
            if h and c == 200 and len(text_of(h)) > 250:
                if urlparse(real).path.rstrip('/') != urlparse(u).path.rstrip('/'):
                    rec.setdefault('redirects', []).append(urlparse(real).path[:40])
                    continue
                chosen = (real, h); break
        if not chosen:
            rec['error'] = 'presmerovano' if rec.get('redirects') else 'stranka_nedostupna'
            out.append(rec)
            print('%3d %-26s %s' % (i, d, rec['error'])); continue

        url, raw_html = chosen
        rec['url'] = url
        dom_html = render(url)
        if not dom_html:
            rec['error'] = 'render'
            out.append(rec); print('%3d %-26s CHYBA render' % (i, d)); continue

        rec['raw_words'] = len(text_of(raw_html).split())
        rec['dom_words'] = len(text_of(dom_html).split())
        ps = content_ps(dom_html)
        rec['p_count'] = len(ps)
        rec['p_len'] = len(ps[0]) if ps else 0

        if rec['dom_words'] < 250 or rec['dom_words'] < 0.4 * rec['raw_words']:
            rec['verdict'] = 'render_nespolehlivy'
        elif not ps:
            rec['verdict'] = 'bez_odstavcu'
        else:
            raw_txt = norm(text_of(raw_html))
            hits = [norm(x[:150]) in raw_txt for x in ps]
            rec['probe'] = ps[0][:150]
            rec['hits'] = '%d/%d' % (sum(hits), len(hits))
            rec['verdict'] = 'v_html' if any(hits) else 'chybi_v_html'
        out.append(rec)
        print('%3d %-26s %-22s p=%4d raw=%5d dom=%5d %s' %
              (i, d, rec['verdict'] + ' ' + rec.get('hits', ''), rec['p_len'],
               rec['raw_words'], rec['dom_words'], urlparse(url).path[:30]))
        json.dump(out, open('js_body.json', 'w'), ensure_ascii=False, indent=1)
    json.dump(out, open('js_body.json', 'w'), ensure_ascii=False, indent=1)
    print('\nuloženo js_body.json')


if __name__ == '__main__':
    main()
