# -*- coding: utf-8 -*-
"""Vrací web 200 i na soubor, který neexistuje?

Pro každou doménu si vyžádá:
  1) náhodnou cestu .txt, která nemůže existovat  → očekává se 404
  2) /llms.txt                                     → zajímá nás, jestli je pravý
Zaznamená stavový kód, Content-Type a délku, aby šlo poznat HTML fallback.
"""
import json, sys, time, urllib.request, urllib.parse, hashlib

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')


def probe(url, timeout=20):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            body = r.read(4096)
            return {'http': r.status,
                    'ctype': (r.headers.get('Content-Type') or '').split(';')[0].strip().lower(),
                    'bytes': len(body),
                    'looks_html': body[:600].lower().lstrip().startswith((b'<!doctype', b'<html'))
                                  or b'<html' in body[:600].lower()}
    except urllib.error.HTTPError as e:
        return {'http': e.code, 'ctype': (e.headers.get('Content-Type') or '').split(';')[0].strip().lower()
                if e.headers else '', 'bytes': 0, 'looks_html': None}
    except Exception as e:
        return {'error': str(e)[:60]}


def main():
    doms = json.load(open(sys.argv[1]))
    doms = [d if isinstance(d, str) else d.get('url') or d.get('domain') for d in doms]
    doms = [urllib.parse.urlparse(d).netloc or d.split('/')[0] for d in doms]
    seen, out = set(), []
    for i, dom in enumerate(doms, 1):
        if dom in seen:
            continue
        seen.add(dom)
        # cesta, která nemůže existovat — deterministicky odvozená z domény
        token = hashlib.sha1(dom.encode()).hexdigest()[:16]
        rec = {'domain': dom}
        rec['ghost'] = probe('https://%s/aiseo-neexistuje-%s.txt' % (dom, token))
        time.sleep(0.2)
        rec['llms'] = probe('https://%s/llms.txt' % dom)
        g = rec['ghost']
        flag = ''
        if g.get('http') == 200:
            flag = ' ← 200 na neexistující soubor'
        print('%3d/%d %-30s ghost:%s %-10s %-5s | llms:%s%s' % (
            i, len(doms), dom, g.get('http', g.get('error', '?')), g.get('ctype', ''),
            'HTML' if g.get('looks_html') else '', rec['llms'].get('http', '?'), flag))
        out.append(rec)
        time.sleep(0.3)
    json.dump(out, open(sys.argv[2], 'w'), ensure_ascii=False, indent=1)
    print('\nuloženo %s (%d domén)' % (sys.argv[2], len(out)))


if __name__ == '__main__':
    main()
