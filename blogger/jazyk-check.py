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
    return line

def body_lines(text):
    """Vrati (cislo_radku, text) pro telo clanku bez frontmatteru a bez kodu."""
    lines = text.split('\n')
    start = 0
    if lines and lines[0].strip() == '---':
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                start = i + 1; break
    in_code = False
    for n in range(start, len(lines)):
        raw = lines[n]
        if CODE_FENCE.match(raw.strip()):
            in_code = not in_code; continue
        if in_code or raw.lstrip().startswith('import '):
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
        for r in rules:
            for m in r['rx'].finditer(line):
                hits.append((n, r, m.group(0), raw.strip(), quoted))

    print(f'== {os.path.basename(args.soubor)} · {words} slov · pravidel: {len(rules)}')
    order = {'⛔': 0, '⚠️': 1}
    if not args.strucne:
        for n, r, found, ctx, quoted in sorted(hits, key=lambda h: (order[h[1]['level']], h[0])):
            flag = ' [citace?]' if quoted else ''
            print(f'{r["level"]} r.{n}{flag} · {r["section"]}')
            print(f'    nalezeno: {found!r}  ->  {r["repl"]}')
            print(f'    kontext : {ctx[:150]}')
    hard = sum(1 for h in hits if h[1]['level'] == '⛔')
    per1000 = len(hits) / words * 1000 if words else 0
    print(f'-- celkem {len(hits)} nalezu ({hard}x ⛔) · {per1000:.1f} na 1000 slov')

if __name__ == '__main__':
    main()
