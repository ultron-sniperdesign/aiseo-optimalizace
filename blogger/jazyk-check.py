#!/usr/bin/env python3
"""Mechanicky projede text proti slovniku hlidanych vyrazu.

Pouziti:
    python3 check.py <soubor.mdx> [--slovnik blogger/JAZYK_SLOVNIK.md] [--uroven ⛔]

Pravidla se ctou z radku tabulek ve slovniku:
| uroven | `regex` | nahrada | proc | odkud |
Regex MUSI byt v zpetnych apostrofech (kvuli znaku | uvnitr alternaci).
Radky s ✅ jsou whitelist a nehlasi se.
"""
import argparse, re, sys, os

ROW = re.compile(r'^\|\s*(⛔|⚠️|✅)\s*\|\s*`(.+?)`\s*\|(.*)$')
CODE_FENCE = re.compile(r'^```')
INLINE_CODE = re.compile(r'`[^`]*`')
URL = re.compile(r'https?://\S+|\]\([^)]*\)|/blog/[a-z0-9-]+/|/slovnik/[a-z0-9-]+/')
JSX = re.compile(r'</?[A-Z][A-Za-z]*')
JSXATTR = re.compile(r'\b[a-zA-Z]+=(?=["\{])')   # nazvy atributu (fix=, tone=, title=)
HTMLVAL = re.compile(r'\b(class|id|style|href|src|rel|aria-\w+)="[^"]*"')
ICONVAL = re.compile(r'\b(icon|tone|variant|key|slug)\s*[:=]\s*"[^"]*"')   # technicke hodnoty, ne text
# radek, ktery anglicky termin VYSVETLUJE, se neaudituje (clanek ho uvadi jako cizi slovo)
ZKRATKA = re.compile(r'\b[A-Z][A-Za-z-]{1,6}\s*\([A-Z][^)]{3,60}\)')   # rozepsana zkratka: SEO (Search Engine Optimization)
ORIGINAL = re.compile(r'\((?:v [A-Za-zěščřžýáíéúůň]+ )?[A-Z][A-Za-z][A-Za-z ]{2,40}\)')   # cesky termin s anglickym originalem v zavorce
CITUJE = re.compile(r'v angličtin|anglicky|v zahraničí|pod názv|anglick(ý|ého|ém) (termín|název|výraz)|zkratk[ay] z angli')   # hodnoty technickych atributu

def load_rules(path):
    rules, section = [], '?'
    for line in open(path, encoding='utf-8'):
        m = re.match(r'^##\s+\d*\.?\s*(.+)$', line.strip())
        if m:
            section = m.group(1).strip(); continue
        m = ROW.match(line.rstrip())
        if not m:
            continue
        level, rx, rest = m.group(1), m.group(2), m.group(3)
        cells = [c.strip() for c in rest.strip().strip('|').split('|')]
        repl = cells[0] if cells else ''
        why  = cells[1] if len(cells) > 1 else ''
        src  = cells[2] if len(cells) > 2 else ''
        try:
            compiled = re.compile(rx, re.IGNORECASE)
        except re.error as e:
            print(f'!! nevalidni regex: {rx} ({e})', file=sys.stderr); continue
        rules.append(dict(level=level, rx=compiled, raw=rx, repl=repl,
                          why=why, src=src, section=section))
    return rules

def mask(line):
    line = INLINE_CODE.sub(lambda m: ' ' * len(m.group(0)), line)
    line = URL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = JSX.sub(lambda m: ' ' * len(m.group(0)), line)   # nazvy komponent nejsou text pro ctenare
    line = HTMLVAL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = ICONVAL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = ZKRATKA.sub(lambda m: ' ' * len(m.group(0)), line)
    line = ORIGINAL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = JSXATTR.sub(lambda m: ' ' * len(m.group(0)), line)
    line = CITACE_EN.sub(lambda m: ' ' * len(m.group(0)) if _je_anglicka(m.group(0)) else m.group(0), line)
    return line


# citace v anglictine uvnitr ceskych uvozovek — doklad, ne styl (§ 8 slovniku)
CITACE_EN = re.compile(r'„[^„“\n]{15,400}“')
def _je_anglicka(txt):
    if len(txt.split()) < 4:
        return False
    return not re.search(r'[ěščřžýáíéúůňťďó]', txt, re.I)

TECH_KEYS = re.compile(r'^\s*(slug|published|updated|category|variant|tags|keywords|seoTitle|image|og|howto|faq|stats|-)\s*:?\s*$')
TEXT_KEY  = re.compile(r'^\s*-?\s*(title|seoTitle|description|answer|label|a|q|desc|text|value)\s*:\s*')

def body_lines(text):
    """Vrati (cislo_radku, text) pro telo clanku + textova pole frontmatteru.

    Frontmatter se neaudituje cely — jen pole, ktera ctenar vidi (answer,
    description, FAQ, popisky statu). Technicke klice (slug, tags, keywords)
    se preskakuji, protoze tam anglicka klicova slova patri.
    """
    lines = text.split('\n')
    start = 0
    if lines and lines[0].strip() == '---':
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                start = i + 1
                for j in range(1, i):
                    if TEXT_KEY.match(lines[j]) and not TECH_KEYS.match(lines[j]):
                        yield j + 1, lines[j]
                break
    in_code = False
    in_dont = False
    for n in range(start, len(lines)):
        raw = lines[n]
        if CODE_FENCE.match(raw.strip()):
            in_code = not in_code; continue
        # <Dont> bloky jsou zamerne odstrasujici ukazky — auditovat je nema smysl
        if '<Dont>' in raw:
            in_dont = True
        if '</Dont>' in raw:
            in_dont = False; continue
        if in_code or in_dont or raw.lstrip().startswith('import '):
            continue
        yield n + 1, raw

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('soubor')
    ap.add_argument('--slovnik', default='blogger/JAZYK_SLOVNIK.md')
    ap.add_argument('--uroven', default=None)
    ap.add_argument('--strucne', action='store_true', help='jen souhrn')
    args = ap.parse_args()

    if not os.path.exists(args.slovnik):
        sys.exit(f'slovnik nenalezen: {args.slovnik}')
    rules = [r for r in load_rules(args.slovnik) if r['level'] != '✅']
    if args.uroven:
        rules = [r for r in rules if r['level'] == args.uroven]

    text = open(args.soubor, encoding='utf-8').read()
    hits, words = [], 0
    for n, raw in body_lines(text):
        line = mask(raw)
        words += len(line.split())
        quoted = raw.lstrip().startswith('>') or '*„' in raw or '“*' in raw
        if CITUJE.search(raw):   # veta vysvetluje anglicky termin — neni to vada
            continue
        for r in rules:
            for m in r['rx'].finditer(line):
                hits.append((n, r, m.group(0), raw.strip(), quoted))

    # ⚠️ pravidla znamenaji "vysvetli pri prvnim pouziti" — staci prvni vyskyt na pravidlo
    seen, folded, skipped = set(), [], {}
    for h in hits:
        r = h[1]
        if r['level'] == '⚠️':
            if r['raw'] in seen:
                skipped[r['raw']] = skipped.get(r['raw'], 1) + 1
                continue
            seen.add(r['raw'])
        folded.append(h)
    hits_all, hits = hits, folded

    print(f'== {os.path.basename(args.soubor)} · {words} slov · pravidel: {len(rules)}')
    order = {'⛔': 0, '⚠️': 1}
    if not args.strucne:
        for n, r, found, ctx, quoted in sorted(hits, key=lambda h: (order[h[1]['level']], h[0])):
            flag = ' [citace?]' if quoted else ''
            more = skipped.get(r['raw'])
            extra = f' (+{more - 1}x dal v textu)' if more else ''
            print(f'{r["level"]} r.{n}{flag}{extra} · {r["section"]}')
            print(f'    nalezeno: {found!r}  ->  {r["repl"]}')
            print(f'    kontext : {ctx[:150]}')
    hard = sum(1 for h in hits_all if h[1]['level'] == '⛔')
    per1000 = len(hits_all) / words * 1000 if words else 0
    print(f'-- celkem {len(hits_all)} nalezu ({hard}x ⛔, {len(hits)} k reseni) · {per1000:.1f} na 1000 slov')

if __name__ == '__main__':
    main()
