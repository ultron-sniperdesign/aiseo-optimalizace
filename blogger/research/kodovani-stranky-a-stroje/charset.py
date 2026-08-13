# -*- coding: utf-8 -*-
"""Jak weby deklarují kódování stránky — a jestli to sedí s tím, co posílají.

Pro každou doménu stáhne homepage a zjistí:
 1) charset v hlavičce Content-Type (co dostane klient, který čte jen hlavičky)
 2) <meta charset> v HTML (co dostane klient, který čte jen tělo)
 3) jestli se ty dvě deklarace shodují
 4) jestli jde tělo skutečně dekódovat jako to, co deklaruje
 5) jestli obsahuje česká písmena s diakritikou (kontrola, že test má na čem selhat)

Vzniklo z vlastní chyby: skript, který dekódoval natvrdo UTF-8, hlásil
u dvou webů chybějící text. Text tam byl, jen ve windows-1250.
"""
import json, re, sys, urllib.request, gzip, io

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36')
# česká písmena, která v ASCII nejsou — na nich je poznat rozsypané kódování
CZ = 'ěščřžýáíéúůňťďóĚŠČŘŽÝÁÍÉÚŮŇŤĎÓ'


def norm_cs(x):
    if not x:
        return None
    x = x.strip().strip('"\'').lower()
    alias = {'utf8': 'utf-8', 'utf-8': 'utf-8',
             'windows-1250': 'windows-1250', 'cp1250': 'windows-1250',
             'win-1250': 'windows-1250', 'iso-8859-2': 'iso-8859-2',
             'iso8859-2': 'iso-8859-2', 'latin2': 'iso-8859-2',
             'iso-8859-1': 'iso-8859-1', 'windows-1252': 'windows-1252'}
    return alias.get(x, x)


def get(url, timeout=25):
    req = urllib.request.Request(url, headers={'User-Agent': UA,
                                               'Accept-Language': 'cs,en;q=0.8'})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        b = r.read(3000000)
        if b[:2] == b'\x1f\x8b':
            b = gzip.GzipFile(fileobj=io.BytesIO(b)).read()
        return b, dict(r.headers), r.status


def main():
    doms = json.load(open(sys.argv[1]))
    out = []
    for i, d in enumerate(doms, 1):
        d = d.replace('https://', '').replace('http://', '').strip('/')
        rec = {'domain': d}
        try:
            body, hdrs, code = get('https://%s/' % d)
        except Exception as e:
            rec['error'] = str(e)[:50]
            out.append(rec)
            print('%3d %-26s CHYBA %s' % (i, d, rec['error']))
            continue

        ct = hdrs.get('Content-Type', '') or hdrs.get('content-type', '')
        m = re.search(r'(?i)charset\s*=\s*([\w\-]+)', ct)
        head_cs = norm_cs(m.group(1)) if m else None

        head_bytes = body[:4000]
        m2 = re.search(rb'(?i)<meta[^>]+charset\s*=\s*["\']?([\w\-]+)', head_bytes)
        if not m2:
            m2 = re.search(rb'(?i)<meta[^>]+content\s*=\s*["\'][^"\']*charset\s*=\s*([\w\-]+)',
                           head_bytes)
        meta_cs = norm_cs(m2.group(1).decode('ascii', 'ignore')) if m2 else None

        declared = head_cs or meta_cs
        rec.update({'http': code, 'header_charset': head_cs, 'meta_charset': meta_cs,
                    'bytes': len(body)})

        # shoda deklarací (jen když jsou obě)
        if head_cs and meta_cs:
            rec['deklarace_shoda'] = (head_cs == meta_cs)
        else:
            rec['deklarace_shoda'] = None

        # dekóduje se to jako deklarované?
        rec['dekodovatelne_dle_deklarace'] = None
        if declared:
            try:
                txt = body.decode(declared)
                rec['dekodovatelne_dle_deklarace'] = True
            except Exception:
                rec['dekodovatelne_dle_deklarace'] = False
                txt = body.decode(declared, 'replace')
        else:
            txt = body.decode('utf-8', 'replace')

        # je to vůbec platné UTF-8? (co uvidí nástroj, který nečte deklarace)
        try:
            body.decode('utf-8')
            rec['je_utf8'] = True
        except Exception:
            rec['je_utf8'] = False

        rec['ma_diakritiku'] = any(c in txt for c in CZ)
        out.append(rec)
        print('%3d %-26s hlavička=%-12s meta=%-12s utf8=%-5s diakritika=%s' %
              (i, d, head_cs or '—', meta_cs or '—', rec['je_utf8'], rec['ma_diakritiku']))
        json.dump(out, open('charset.json', 'w'), ensure_ascii=False, indent=1)
    json.dump(out, open('charset.json', 'w'), ensure_ascii=False, indent=1)
    print('\nuloženo charset.json')


if __name__ == '__main__':
    main()
