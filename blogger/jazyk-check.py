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
ORIGINAL_LC = re.compile(r'\(([a-z][a-z0-9 /-]{2,40})\)')   # glosa malymi pismeny: „podíl zmínek (share of voice)"
TZV = re.compile(r'tzv\.\s+[^,.;:)\n]{2,40}')   # „…(podil zmineni, tzv. share of voice)" — termin za „tzv." je uvedeny originál, ne vada
CITUJE = re.compile(r'v angličtin|anglicky|v zahraničí|pod názv|anglick(ý|ého|ém|é) (termín|název|výraz|verzi)|v originále|zkratk[ay] z angli')   # hodnoty technickych atributu

# Vyjimka zapsana v KONTROLOVANEM SOUBORU, ne ve slovniku. Tvar (MDX komentar,
# do vykreslene stranky nejde):
#   {/* jazyk-vyjimka: `Přehled(y|ech|ů|ům) od AI` — článek je o tvarech názvů v nápovědě */}
# Regex musi byt presne ten ze slovniku, duvod je povinny. Pravidlo se NEVYPINA:
# jeho nalezy se odlozi do samostatneho souhrnu, aby bylo videt, co se potlacilo a proc.
# Dopsano 21. 9. 2026: clanek o nazvoslovi musi citovat tvar, ktery pravidlo hlida
# (ceske-nazvy-ai-funkci-google, 13 nalezu na vlastni tema). Dokladat to slugem
# u globalniho pravidla znamenalo, ze ten seznam roste s kazdym dalsim clankem.
# POZOR na re.M: bez nej `$` znamena konec CELEHO textu, ne konec radku — marker
# ve frontmatteru se pak nenasel a checker o tom ani nemukl (naměřeno 21. 9. 2026
# pri zavadeni mechanismu). Proto je tu i pojistka NEPRECTENY_MARKER niz.
VYJIMKA = re.compile(r'jazyk-vyjimka:\s*`([^`]+)`(?:\s*[—–-]+\s*(.+?))?\s*(?:\*/\}|-->|$)', re.M)


def nacti_vyjimky(text, rules):
    znama = {r['raw'] for r in rules}
    ok, chyby = {}, []
    nalezeno = 0
    for m in VYJIMKA.finditer(text):
        nalezeno += 1
        rx, duvod = m.group(1).strip(), (m.group(2) or '').strip()
        if rx not in znama:
            chyby.append(f'vyjimka `{rx}` neodpovida zadnemu pravidlu ve slovniku — prepis, nebo jina verze pravidla?')
        elif len(duvod) < 10:
            chyby.append(f'vyjimka `{rx}` nema duvod — bez duvodu se neuplatni')
        else:
            ok[rx] = duvod
    # marker v souboru je, ale nepodarilo se ho precist — nikdy to nesmi projit mlcky
    zminek = text.count('jazyk-vyjimka:')
    if zminek > nalezeno:
        chyby.append(f'{zminek - nalezeno}x marker `jazyk-vyjimka:` ve spatnem tvaru '
                     '(cekam: jazyk-vyjimka: `regex ze slovniku` — duvod)')
    return ok, chyby


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
    line = LINK_LABEL.sub(lambda m: ' ' * len(m.group(0)) if _je_anglicka(m.group(1), 2) else m.group(0), line)
    line = URL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = JSX.sub(lambda m: ' ' * len(m.group(0)), line)   # nazvy komponent nejsou text pro ctenare
    line = HTMLVAL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = ICONVAL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = ZKRATKA.sub(lambda m: ' ' * len(m.group(0)), line)
    line = ORIGINAL.sub(lambda m: ' ' * len(m.group(0)), line)
    line = ORIGINAL_LC.sub(lambda m: ' ' * len(m.group(0)) if _je_anglicka(m.group(1), 2) else m.group(0), line)
    line = TZV.sub(lambda m: ' ' * len(m.group(0)), line)
    line = JSXATTR.sub(lambda m: ' ' * len(m.group(0)), line)
    line = CITACE_EN.sub(lambda m: ' ' * len(m.group(0)) if _je_anglicka(m.group(0)) else m.group(0), line)
    return line


# citace v anglictine uvnitr ceskych uvozovek — doklad, ne styl (§ 8 slovniku)
CITACE_EN = re.compile(r'„[^„“\n]{15,400}“')
# anglicky nazev zdroje jako popisek odkazu: [Title of the source](https://…) — doklad, ne styl
LINK_LABEL = re.compile(r'\[([^\]\n]{8,200})\]\(https?://\S+?\)(?=[\s.,;·)]|$)')
def _je_anglicka(txt, min_slov=4):
    if len(txt.split()) < min_slov:
        return False
    return not re.search(r'[ěščřžýáíéúůňťďó]', txt, re.I)

TECH_KEYS = re.compile(r'^\s*(slug|published|updated|category|variant|tags|keywords|seoTitle|image|og|howto|faq|stats|-)\s*:?\s*$')
TEXT_KEY  = re.compile(r'^\s*-?\s*(title|seoTitle|description|answer|label|a|q|desc|text|value)\s*:\s*')
# Radky datovych modulu (*.ts), ktere nejsou proza pro ctenare:
#   id / slug / href  – identifikatory a URL, nikdy se nevypisuji jako text
#   updated / published – ISO datum, ctenari se ukazuje pres toLocaleDateString
#   aka – pole ALTERNATIVNICH nazvu vcetne anglickych, ktere lide hledaji.
#         Prave proto tam patri "answer block" nebo "schema markup": slovnik je
#         zaznamenava, aby heslo na ne bylo k nalezeni — neznamena to, ze je
#         web pouziva. Auditovat je znamena mazat presne ty synonyma, kvuli
#         kterym heslo existuje.
# Ostatni pole (term, def, long, label) se auditují normalne.
DATA_KEYS = re.compile(r'^\s*(id|slug|href|updated|published|aka)\s*:\s*')

# Nazev vlastnosti v datovem modulu je kod, ne text pro ctenare. Bez tohohle
# hlasil checker `intro:` jako anglicismus (revize homepage 8. 9. 2026),
# prestoze cesky text je az za dvojteckou. Klic proto z radku odstrizneme
# a auditujeme jen jeho hodnotu — narozdil od DATA_KEYS, kde se zahazuje
# cely radek. Plati JEN pro .ts/.js moduly: v MDX by stejny vzor schoval
# realny nalez v proze typu "Fix: udelejte X".
TS_PROP_KEY = re.compile(r'^(\s*)([A-Za-z_$][A-Za-z0-9_$]*)(\s*:)')
# Totez pro deklarace: `export const sniperDesign = {` je nazev promenne.
TS_DECL = re.compile(r'\b(const|let|var|function|interface|type)\s+([A-Za-z_$][A-Za-z0-9_$]*)')

# Sablona .astro: kod uvnitr markupu neni text pro ctenare. Do 14. 9. 2026
# checker hlasil `type="submit"` a `class="pop__submit"` jako anglicismus
# „submit“, `{p.deliverable.title}` jako „deliverable“ a vyvojarske poznamky
# v HTML komentarich (<!-- content based on active pill -->) jako prozu.
# Maskujeme: vyrazy {…} (i vnorene a neuzavrene na konci radku), radky
# s arrow funkci bez markupu, hodnoty technickych atributu a HTML komentare.
# Textove atributy (alt, title, placeholder, props komponent jako eyebrow=)
# zustavaji — ty ctenar vidi.
ASTRO_EXPR = re.compile(r'\{[^{}\n]*\}')
ASTRO_OPEN_EXPR = re.compile(r'\{[^{}\n]*$')
ASTRO_ATTR = re.compile(r'\b(?:type|name|for|target|method|action|autocomplete|role|loading|decoding|fetchpriority|width|height|viewBox|fill|stroke(?:-[a-z]+)?|d|tabindex|xmlns|srcset|sizes|media|lang|dir|image|as|kind|data-[\w-]+)="[^"]*"')
ASTRO_COMMENT = re.compile(r'<!--.*?-->')

def _blank(m):
    return ' ' * len(m.group(0))

def mask_astro(raw):
    raw = ASTRO_COMMENT.sub(_blank, raw)
    prev = None
    while prev != raw:
        prev = raw
        raw = ASTRO_EXPR.sub(_blank, raw)
    raw = ASTRO_OPEN_EXPR.sub(_blank, raw)
    raw = ASTRO_ATTR.sub(_blank, raw)
    if '=>' in raw and '<' not in raw:
        raw = ' ' * len(raw)
    return raw

def body_lines(text, is_module=False, is_astro=False):
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
    in_astro_block = False
    in_astro_comment = False
    for n in range(start, len(lines)):
        raw = lines[n]
        # V .astro souborech jsou <style> a <script> kód, ne text pro čtenáře —
        # bez tohohle checker hlásil CSS klíčová slova (solid, outline, content:)
        # jako anglicismy: 169 falešných nálezů v index.astro, 8 v Faq.astro (13. 9. 2026).
        if is_astro:
            st = raw.lstrip()
            if re.match(r'<(style|script)\b', st):
                in_astro_block = not re.search(r'</(style|script)>', st)
                continue
            if in_astro_block:
                if re.search(r'</(style|script)>', st):
                    in_astro_block = False
                continue
            # víceřádkový HTML komentář
            if in_astro_comment:
                if '-->' in raw:
                    in_astro_comment = False
                    raw = raw[raw.index('-->') + 3:]
                else:
                    continue
            if '<!--' in raw and '-->' not in raw[raw.index('<!--'):]:
                in_astro_comment = True
                raw = raw[:raw.index('<!--')]
            raw = mask_astro(raw)
        if CODE_FENCE.match(raw.strip()):
            in_code = not in_code; continue
        # <Dont> bloky jsou zamerne odstrasujici ukazky — auditovat je nema smysl
        if '<Dont>' in raw:
            in_dont = True
        if '</Dont>' in raw:
            in_dont = False; continue
        if in_code or in_dont or raw.lstrip().startswith('import '):
            continue
        if 'jazyk-vyjimka:' in raw:   # marker vyjimky neni text pro ctenare
            continue
        if DATA_KEYS.match(raw):
            continue
        if is_module:
            raw = TS_PROP_KEY.sub(lambda m: m.group(1) + ' ' * len(m.group(2)) + m.group(3), raw)
            raw = TS_DECL.sub(lambda m: m.group(1) + ' ' + ' ' * len(m.group(2)), raw)
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
    slug = os.path.basename(args.soubor).removesuffix('.mdx')
    # pravidlo muze mit v posledni bunce marker [skip:slug1,slug2] — pro ten clanek se nehlasi
    rules = [r for r in rules
             if slug not in [x.strip() for m in re.findall(r'\[skip:([^\]]+)\]', r['why'] + ' ' + r['src']) for x in m.split(',')]]
    vyjimky, vyjimky_chyby = nacti_vyjimky(text, rules)
    hits, potlacene, words = [], [], 0
    is_module = args.soubor.endswith(('.ts', '.js', '.mjs'))
    is_astro = args.soubor.endswith('.astro')
    for n, raw in body_lines(text, is_module, is_astro):
        line = mask(raw)
        words += len(line.split())
        quoted = raw.lstrip().startswith('>') or '*„' in raw or '“*' in raw
        if CITUJE.search(raw):   # veta vysvetluje anglicky termin — neni to vada
            continue
        for r in rules:
            for m in r['rx'].finditer(line):
                zapis = (n, r, m.group(0), raw.strip(), quoted)
                (potlacene if r['raw'] in vyjimky else hits).append(zapis)

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
    for ch in vyjimky_chyby:
        print(f'!! {ch}')
    for rx, duvod in vyjimky.items():
        kolik = sum(1 for h in potlacene if h[1]['raw'] == rx)
        print(f'~  vyjimka v souboru · `{rx}` · {kolik}x potlaceno · {duvod}')
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
    tail = f' · {len(potlacene)} potlaceno vyjimkou v souboru' if potlacene else ''
    print(f'-- celkem {len(hits_all)} nalezu ({hard}x ⛔, {len(hits)} k reseni) · {per1000:.1f} na 1000 slov{tail}')

if __name__ == '__main__':
    main()
