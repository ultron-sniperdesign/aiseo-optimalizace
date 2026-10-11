#!/usr/bin/env python3
"""
kontrola-komponent.py — vlastnosti komponent, které článek předává, ale komponenta je nečte.

Proč: překlep v názvu vlastnosti build nezastaví a hodnota se tiše nevykreslí.
`<Mistake number="01">` místo `num="01"` nechalo prázdné číslo u 78 karet ve 26 článcích
a `<CompareTable leftTitle rightTitle>` prázdná záhlaví sloupců (odbaveno blokem oprav
10. 10. 2026). Kontrola vykreslení textu (Z13) to nechytí, protože nadpis i text karty
se vykreslí — chybí jen to, co nesla zahozená vlastnost. Stejně tiše se zahodí vlastnost,
kterou komponenta v typu má, ale šablona ji nikde nepoužije: `label` u kroků `Stepper`
takhle nasbíral 219 výskytů ve 43 článcích, než si toho někdo všiml (odbaveno 11. 10. 2026).

Použití (cesty k článkům jsou relativní k aktuální složce, komponenty si skript najde sám):
  python3 blogger/kontrola-komponent.py src/content/articles/<slug>.mdx
  python3 blogger/kontrola-komponent.py src/content/articles/*.mdx
  python3 blogger/kontrola-komponent.py --komponenty      # přehled za komponenty, bez článků

Hlásí:
  - vlastnost, kterou komponenta v `Props` nemá            → tiše se zahodí
  - vlastnost, kterou v `Props` má, ale šablona ji nikde nepoužije → typ ji přijme, nevykreslí se
  - chybějící povinnou vlastnost (deklarovaná bez `?`)      → komponenta dostane undefined
  - klíč položky v poli (`steps`, `items`, `rows`…), který typ položky nemá, klíč, který
    typ má, ale šablona ho nepoužije, a chybějící povinný klíč položky
  - import z `components/blocks/`, který skript nepřečetl  → komponenta by se nekontrolovala
  S `--komponenty` vypíše deklarace, které šablona nepoužije, i když je zatím žádný článek
  nepředává — kontrola po přidání vlastnosti do typu.

Typy čte přímo ze zdrojů v `src/components/blocks/`, takže nová komponenta ani nová
vlastnost nepotřebuje úpravu skriptu. Komponenta bez `Props` nečte žádnou vlastnost.
Co šablona skutečně používá, zjišťuje pomocník `kontrola-komponent-sablony.mjs` (node):
komponentu převede překladačem Astro do TSX (jako `astro check`) a projde ji TypeScriptem.
Vlastnost je použitá, když se čte její lokální jméno z destrukturování `Astro.props`
(i ve výchozí hodnotě jiné vlastnosti) nebo `Astro.props.x`. U klíčů položek je únik
výchozí stav: klíč se prohlásí za nepoužitý, jen když kód s položkou nedělá nic jiného než
čtení klíčů (`x.klíč`, `x["klíč"]`, destrukturování, `"klíč" in x`), vykreslení, porovnání
a testy. Odchází-li položka nebo objekt celý — do proměnné, jako argument funkce, rozbalením,
v atributu komponenty, přes dynamický klíč — klíče té komponenty se nekontrolují; řetězec
nebo číslo předané dál kontrolu nevypne (rozhoduje deklarovaný typ). Jméno v typu, komentáři
ani v obyčejném řetězci se nepočítá. Když node nebo překladač chybí, tahle jedna kontrola
se přeskočí s upozorněním.

Vědomé meze — tohle skript NEchytí:
  - klíč, jehož jméno kód čte i jinde (jiná proměnná nebo klíč jiného typu téhož jména) —
    počítá se jako použitý; skript radši nález vynechá, než aby hlásil falešný;
  - nepoužité vlastnosti u komponenty, která `Astro.props` nebo `Astro` předává celé,
    a nepoužité klíče položek u komponenty, kde položka nebo objekt odchází celý (viz výš)
    — tam použití nevidí, takže radši nehlásí nic;
  - komponenty, které překladač Astro nebo TypeScript nepřečte — `--komponenty` je vypíše
    jako „nekontrolováno“ s důvodem;
  - typy importované odjinud (`import type { FaqItem } …`) a dědění z neznámého typu —
    tam se kontrola cizích vlastností vypne, aby nevznikaly falešné nálezy;
  - hodnoty předané proměnnou (`steps={kroky}`) — kontroluje jen zapsané literály.
  Falešný nález naopak dá ukázka komponenty v řádkovém kódu v textu (`<Mistake …>`);
  bloky kódu ``` a ~~~ přeskakuje.

Návratový kód: 0 = bez nálezů, 1 = nálezy, 2 = některý soubor nešel přečíst
(u `--komponenty` i tehdy, když rozbor šablon nejde spustit).
"""

import functools
import json
import os
import re
import shutil
import subprocess
import sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOCKS = os.path.join(ROOT, "src", "components", "blocks")
HELPER = os.path.join(ROOT, "blogger", "kontrola-komponent-sablony.mjs")
HELPER_TIMEOUT = 180  # s — překladač Astro je WebAssembly, první spuštění trvá déle
KEY_PATHS_MAX = 5000  # víc klíčů má jen rekurzivní typ — komponentu pak nekontrolujeme
UNCHECKED_SEEN = {}   # komponenty z článků, u kterých nešlo zjistit, co šablona čte → upozornění

IMPORT_RE = re.compile(
    r"^import\s+(\w+)\s+from\s+[\"'](?:~|\.\./\.\.)/components/blocks/(\w+)\.astro[\"'];?[ \t]*\r?$",
    re.M,
)
ANY_BLOCK_IMPORT_RE = re.compile(r"^[ \t]*import\b[^\n]*components/blocks/[^\n]*$", re.M)
FRONTMATTER_RE = re.compile(r"\A---[ \t]*\r?\n(.*?)\r?\n---[ \t]*(?:\r?\n|\Z)", re.S)
FENCE_RE = re.compile(r"^\s*(`{3,}|~{3,})(.*)$")
IDENT_RE = re.compile(r"(?:[^\W\d]|\$)[\w$]*")
ATTR_NAME_RE = re.compile(r"(?:[^\W\d]|[_:])[-\w:.]*")
MEMBER_START_RE = re.compile(r"\s*(?:readonly\s+)?[\"']?(?:[^\W\d]|\$)[\w$]*[\"']?\s*\??\s*:")
MEMBER_RE = re.compile(r"(?:readonly\s+)?[\"']?((?:[^\W\d]|\$)[\w$]*)[\"']?\s*(\?)?\s*:\s*(.+)", re.S)
DECL_START_RE = re.compile(r"\s*(?:export\s+)?(?:interface|type|const|let|var|import|function|class)\b")
INTERFACE_RE = re.compile(r"\binterface\s+(\w+)\s*(?:<[^>{;]*>)?\s*(?:extends\s+([^{;]*))?\{")
TYPE_RE = re.compile(r"\btype\s+(\w+)\s*(?:<[^>=;]*>)?\s*=")
REST_RE = re.compile(r"\.\.\.\s*\w+\s*\}\s*=\s*Astro\.props")
OPEN = "*"  # klíč tvaru: typ přijímá libovolné vlastnosti (index signature, neznámý předek)


# ---------- lexikální pomůcky (řetězce a komentáře se přeskakují) ----------

def skip_string(src, i):
    """JS řetězec od uvozovky na src[i]; vrátí index za koncovou uvozovkou."""
    q, i, n = src[i], i + 1, len(src)
    while i < n:
        if src[i] == "\\":
            i += 2
            continue
        if src[i] == q:
            return i + 1
        i += 1
    return n


def skip_comment(src, i):
    """Index za JS komentářem, který začíná na src[i], jinak None."""
    if src.startswith("//", i):
        j = src.find("\n", i)
        return len(src) if j < 0 else j
    if src.startswith("/*", i):
        j = src.find("*/", i + 2)
        return len(src) if j < 0 else j + 2
    return None


def balanced(src, i, open_ch, close_ch):
    """Index za párovou závorkou k src[i] == open_ch."""
    depth, n = 0, len(src)
    while i < n:
        c = src[i]
        if c in "\"'`":
            i = skip_string(src, i)
            continue
        if c == "/":
            j = skip_comment(src, i)
            if j is not None:
                i = j
                continue
        if c == open_ch:
            depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    return n


def strip_comments(src):
    out, i, n = [], 0, len(src)
    while i < n:
        c = src[i]
        if c in "\"'`":
            j = skip_string(src, i)
            out.append(src[i:j])
            i = j
            continue
        if c == "/":
            j = skip_comment(src, i)
            if j is not None:
                out.append(" ")
                i = j
                continue
        out.append(c)
        i += 1
    return "".join(out)


def bracket_delta(text, i):
    c = text[i]
    if c in "{[(" or (c == "<" and text[i + 1:i + 2] != "="):
        return 1
    if c in "}])" or (c == ">" and text[i - 1:i] != "="):
        return -1
    return 0


def split_top(body, seps):
    """Rozdělí text podle oddělovačů na nejvyšší úrovni závorek."""
    parts, cur, depth, i = [], [], 0, 0
    while i < len(body):
        c = body[i]
        if c in "\"'`":
            j = skip_string(body, i)
            cur.append(body[i:j])
            i = j
            continue
        depth += bracket_delta(body, i)
        if depth == 0 and c in seps:
            parts.append("".join(cur))
            cur = []
        else:
            cur.append(c)
        i += 1
    parts.append("".join(cur))
    return [p.strip() for p in parts if p.strip()]


# ---------- typy komponent ----------

def parse_members(body):
    """`name?: typ; …` → {name: (volitelná, typ)}. Člen bez `;` končí novým řádkem se jménem
    dalšího členu, ale jen na nejvyšší úrovni — víceřádkový vnořený typ se nerozdělí."""
    parts, cur, depth, i, n = [], [], 0, 0, len(body)
    while i < n:
        c = body[i]
        if c in "\"'`":
            j = skip_string(body, i)
            cur.append(body[i:j])
            i = j
            continue
        depth += bracket_delta(body, i)
        if depth == 0 and (c in ";," or (c == "\n" and MEMBER_START_RE.match(body, i + 1))):
            parts.append("".join(cur))
            cur = []
        else:
            cur.append(c)
        i += 1
    parts.append("".join(cur))
    members = {}
    for part in (p.strip() for p in parts):
        if part.startswith("["):
            members[OPEN] = (True, "")
            continue
        m = MEMBER_RE.fullmatch(part)
        if m:
            members[m.group(1)] = (bool(m.group(2)), m.group(3).strip())
    return members


def alias_end(fm, i):
    """Konec pravé strany `type X = …` — `;` nebo řádek, kde začíná další deklarace."""
    depth, n = 0, len(fm)
    while i < n:
        c = fm[i]
        if c in "\"'`":
            i = skip_string(fm, i)
            continue
        depth += bracket_delta(fm, i)
        if depth == 0 and (c == ";" or (c == "\n" and DECL_START_RE.match(fm, i + 1))):
            break
        i += 1
    return i


def read_alias(fm, i):
    """Pravá strana `type X = …` — do `;` nebo do řádku, kde začíná další deklarace."""
    return fm[i:alias_end(fm, i)].strip()


def merge(shapes, required_if_any):
    """Sloučí tvary. U průniku typů (`&`) je klíč povinný, když je povinný v kterémkoli tvaru;
    u sjednocení (`|`) jen tehdy, když je povinný ve všech."""
    out = {}
    for s in shapes:
        for k, (opt, t) in s.items():
            if k not in out:
                out[k] = (opt, t)
            else:
                prev = out[k][0]
                out[k] = ((prev and opt) if required_if_any else (prev or opt), out[k][1])
    if not required_if_any:
        for k in list(out):
            if any(k not in s for s in shapes):
                out[k] = (True, out[k][1])
    return out


_SHAPES = {}


def shape_of(type_str, decls, depth=0):
    """Tvar objektu, který typ popisuje ({klíč: (volitelný, typ)}), nebo None u skaláru.
    Výsledek se pamatuje (komponenta, typ, hloubka) — řetěz `extends` s opakovanými předky
    by se jinak počítal exponenciálně. Vrácený slovník se nemění, jen čte."""
    key = (id(decls), type_str, depth)
    if key not in _SHAPES:
        _SHAPES[key] = _shape_of(type_str, decls, depth)
    return _SHAPES[key]


def _shape_of(type_str, decls, depth):
    if depth > 8:
        return None
    t = type_str.strip()
    while t.startswith("(") and t.endswith(")") and balanced(t, 0, "(", ")") == len(t):
        t = t[1:-1].strip()
    if t.endswith("[]"):
        return shape_of(t[:-2], decls, depth + 1)
    if t.startswith("{"):
        return parse_members(t[1:balanced(t, 0, "{", "}") - 1])
    for sep, required_if_any in (("|", False), ("&", True)):
        alts = split_top(t, sep)
        if len(alts) > 1:
            shapes = [s for s in (shape_of(a, decls, depth + 1) for a in alts) if s is not None]
            if not shapes:
                return None
            return shapes[0] if len(shapes) == 1 else merge(shapes, required_if_any)
    m = re.fullmatch(r"(\w+)\s*<(.+)>", t, re.S)
    if m:
        name, inner = m.groups()
        if name in ("Array", "ReadonlyArray", "Readonly"):
            return shape_of(inner, decls, depth + 1)
        if name == "Partial":
            s = shape_of(inner, decls, depth + 1)
            return None if s is None else {k: (True, v[1]) for k, v in s.items()}
        if name == "Record":
            return {OPEN: (True, "")}
        return None
    if t in decls:
        kind, val, bases = decls[t]
        if kind == "alias":
            return shape_of(val, decls, depth + 1)
        shapes = [val]
        for b in bases:
            s = shape_of(b, decls, depth + 1)
            shapes.append(s if s is not None else {OPEN: (True, "")})
        return merge(shapes, True) if len(shapes) > 1 else val
    return None


# ---------- co šablona komponenty skutečně používá ----------

def node_binary():
    """`node` jen z absolutních položek PATH — relativní položka by spustila soubor `node`
    z kořene projektu (cwd)."""
    search = os.pathsep.join(d for d in os.environ.get("PATH", "").split(os.pathsep) if os.path.isabs(d))
    return shutil.which("node", path=search) if search else None


def run_helper(paths):
    """Spustí pomocníka na komponentách: ({cesta: rozbor}, None), nebo (None, důvod)."""
    node = node_binary()
    if node is None:
        return None, "node nejde spustit (není v PATH)"
    try:
        proc = subprocess.run([node, HELPER, *paths], capture_output=True, encoding="utf-8",
                              errors="replace", timeout=HELPER_TIMEOUT, cwd=ROOT, check=False)
    except subprocess.TimeoutExpired:
        return None, f"pomocník nedoběhl do {HELPER_TIMEOUT} s"
    except (OSError, subprocess.SubprocessError) as exc:
        return None, f"node nejde spustit ({exc.__class__.__name__})"
    try:
        data = json.loads(proc.stdout) if proc.stdout.strip() else None
    except ValueError:
        data = None
    if isinstance(data, dict):
        return data, None          # i při nenulovém kódu: selhané položky nesou `retry`
    lines = [ln.strip() for ln in (proc.stderr or "").splitlines() if ln.strip()]
    telling = [ln for ln in lines if re.match(r"(?:\w*Error\b[^:]*|panic):", ln)] or lines
    if proc.returncode != 0:
        return None, "pomocník skončil chybou: " + (telling[0][:160] if telling else f"kód {proc.returncode}")
    return None, "pomocník nevrátil platný JSON"


@functools.lru_cache(maxsize=None)
def template_usage():
    """Rozbor šablon z `kontrola-komponent-sablony.mjs`: ({komponenta: rozbor}, None),
    nebo (None, důvod), když nejde spustit — pak se kontrola nepoužitých vlastností
    přeskočí a ostatní kontroly běží dál.

    Šablonu čte překladač Astro (stejný jako `astro check`) a TypeScript. Vlastní lexer
    v Pythonu na to nestačil: regulární výraz s uvozovkou, vnořený šablonový řetězec
    nebo apostrof v textu uvnitř výrazu ho rozhodily a vznikaly falešné nálezy.
    Překladač (Go ve WebAssembly) umí na rozbitém vstupu zpanikařit a shodit celý proces;
    pak se komponenty projdou každá zvlášť, ať jedna rozbitá nevypne kontrolu ostatních."""
    try:
        names = sorted(f for f in os.listdir(BLOCKS)
                       if f.endswith(".astro") and os.path.isfile(os.path.join(BLOCKS, f)))
    except OSError as exc:
        return None, f"složka komponent nejde přečíst ({exc.__class__.__name__})"
    paths = [os.path.join(BLOCKS, f) for f in names]
    data, err = run_helper(paths)
    if data is None and err.startswith(("node nejde spustit", "pomocník nedoběhl")):
        return None, err   # bez node nebo při zaseknutí nemá smysl zkoušet komponenty po jedné
    data = data or {}
    retry = [p for p in paths if not isinstance(data.get(p), dict) or data[p].get("retry")]
    for path in retry:                      # každá zvlášť — pád překladače nesmí vzít ostatní
        one, one_err = run_helper([path])
        data[path] = (one or {}).get(path) or {"ok": False, "why": [one_err or "rozbor chybí"]}
    if paths and not any(isinstance(v, dict) and v.get("ok") for v in data.values()):
        return None, err or "rozbor nevrátil žádnou komponentu"
    return {os.path.basename(k)[:-len(".astro")]: v for k, v in data.items() if isinstance(v, dict)}, None


def is_array_type(t):
    bare = t.strip()
    return bare.endswith("[]") or bare.startswith(("Array<", "ReadonlyArray<"))


def path_label(name, obj_path, props, decls):
    """Cesta k objektu ve výpisu podle typů: steps[], cta, rows[].cells[]."""
    label, t = name, props[name][1]
    for key in obj_path:
        if is_array_type(t):
            label += "[]"
        member = (shape_of(t, decls) or {}).get(key)
        label += "." + key
        t = member[1] if member else ""
    return label + ("[]" if is_array_type(t) else "")


def owner(path):
    """Vlastnost, pod kterou klíč leží: `steps[].label` → steps."""
    return path.split(".", 1)[0].split("[", 1)[0]


def key_paths(props, decls):
    """Klíče položek dosažitelné z `Props`: {klíč: [(cesta, typ)]}, např. label → steps[].label.
    Typ, který už na cestě je (rekurze `Node.children: Node[]`), se znovu nerozbaluje;
    nad KEY_PATHS_MAX klíčů vrátí None (rekurzivní typ, který cyklus neodhalil)."""
    out, count = {}, 0
    todo = [(p, t, ()) for p, (_opt, t) in props.items() if p != OPEN]
    while todo:
        path, t, chain = todo.pop()
        core = re.sub(r"\s+|\[\]|^(?:Readonly)?Array<|^ReadonlyArray<|>$", "", t)
        if core in chain or path.count(".") > 8:
            continue
        is_array = is_array_type(t)
        for k, (_opt, kt) in (shape_of(t, decls) or {}).items():
            if k == OPEN:
                continue
            count += 1
            if count > KEY_PATHS_MAX:
                return None
            kp = f"{path}{'[]' if is_array else ''}.{k}"
            out.setdefault(k, []).append((kp, kt))
            todo.append((kp, kt, chain + (core,)))
    return out


def unused_names(name, props, decls, paths):
    """Deklarované vlastnosti a klíče položek, které kód komponenty nikde nečte:
    (vlastnosti, klíče, None), nebo (∅, ∅, důvod), když se komponenta nekontroluje.

    Klíče položek se nesledují, když položka nebo objekt odchází celý (rozbalení, argument
    funkce mimo komponentu, atribut vložené komponenty, dynamický klíč) — tam použití nevidíme.
    Řetězec nebo číslo předané funkci nevadí, o tom rozhoduje deklarovaný typ."""
    usage, err = template_usage()
    if usage is None:
        return set(), set(), err
    u = usage.get(name)
    if not u or not u.get("ok"):
        return set(), set(), "; ".join((u or {}).get("why") or []) or "rozbor chybí"
    used, direct = set(u.get("used") or []), set(u.get("direct") or [])
    patterns = u.get("props") or {}
    unused_props = set()
    if not u.get("topOpen"):
        for p in props:
            if p == OPEN or p in direct:
                continue
            locals_ = patterns.get(p, [])
            if locals_ is None:            # vnořený vzor { cta: { href } } — bere se jako použitá
                continue
            if not any(loc in used for loc in locals_):
                unused_props.add(p)
    if u.get("itemOpen"):
        return unused_props, set(), None
    local_prop = {loc: p for p, locals_ in patterns.items() if locals_ for loc in locals_}
    if u.get("wholeItems"):                     # položka odchází celá — klíče nesledujeme
        return unused_props, set(), None
    leaving = [local_prop.get(n) for n in u.get("whole") or []] + list(u.get("wholeProps") or [])
    for p in leaving:
        if p is None or p not in props or shape_of(props[p][1], decls) is not None:
            return unused_props, set(), None
    for k in u.get("wholeKeys") or []:
        if any(shape_of(kt, decls) is not None for _path, kt in paths.get(k, [])):
            return unused_props, set(), None
    unused_keys = {k for k, entries in paths.items()
                   if k not in used and not all(owner(path) in unused_props for path, _t in entries)}
    return unused_props, unused_keys, None


@functools.lru_cache(maxsize=None)
def component_info(name):
    path = os.path.join(BLOCKS, name + ".astro")
    if not os.path.isfile(path):
        return None
    with open(path, encoding="utf-8") as fh:
        src = fh.read()
    m = FRONTMATTER_RE.match(src)
    fm = strip_comments(m.group(1)) if m else ""
    decls = {}
    for m in INTERFACE_RE.finditer(fm):
        end = balanced(fm, m.end() - 1, "{", "}")
        bases = split_top(m.group(2) or "", ",")
        decls[m.group(1)] = ("obj", parse_members(fm[m.end():end - 1]), bases)
    for m in TYPE_RE.finditer(fm):
        decls[m.group(1)] = ("alias", read_alias(fm, m.end()), [])
    props = (shape_of("Props", decls) or {}) if "Props" in decls else {}
    paths = key_paths(props, decls)
    if paths is None:
        paths, unused_props, unused_keys = {}, set(), set()
        unchecked = f"typ má přes {KEY_PATHS_MAX} vnořených klíčů (rekurzivní typ?)"
    else:
        unused_props, unused_keys, unchecked = unused_names(name, props, decls, paths)
    return {"props": props, "decls": decls, "rest": bool(REST_RE.search(fm)), "paths": paths,
            "unused_props": unused_props, "unused_keys": unused_keys, "unchecked": unchecked}


# ---------- čtení článku ----------

def blank_code_fences(src):
    """Obsah bloků ``` a ~~~ nahradí mezerami — ukázky kódu nezkreslí nálezy a čísla řádků sedí.
    Blok zavírá jen tentýž znak, aspoň stejně dlouhý, bez info řetězce (jako CommonMark)."""
    out, fence = [], None
    for line in src.split("\n"):
        m = FENCE_RE.match(line)
        if fence is None:
            if m and not (m.group(1)[0] == "`" and "`" in m.group(2)):
                fence = m.group(1)
                out.append(" " * len(line))
            else:
                out.append(line)
            continue
        if m and m.group(1)[0] == fence[0] and len(m.group(1)) >= len(fence) and not m.group(2).strip():
            fence = None
        out.append(" " * len(line))
    return "\n".join(out)


def parse_attrs(src, i):
    """Vlastnosti tagu od pozice za jeho jménem: [(jméno, hodnota, je_výraz, offset, offset_hodnoty)].
    Řetězec v atributu JSX nezná escape sekvence, končí první stejnou uvozovkou."""
    attrs, n = [], len(src)
    while i < n:
        while i < n and src[i].isspace():
            i += 1
        if i >= n or src[i] == ">" or src.startswith("/>", i):
            break
        if src[i] == "{":  # {...spread}
            j = balanced(src, i, "{", "}")
            attrs.append(("...", src[i + 1:j - 1], True, i, i + 1))
            i = j
            continue
        m = ATTR_NAME_RE.match(src, i)
        if not m:
            i += 1
            continue
        name, start = m.group(0), i
        i = m.end()
        while i < n and src[i].isspace():
            i += 1
        if i < n and src[i] == "=":
            i += 1
            while i < n and src[i].isspace():
                i += 1
            if i < n and src[i] in "\"'":
                j = src.find(src[i], i + 1)
                j = n if j < 0 else j
                attrs.append((name, src[i + 1:j], False, start, i + 1))
                i = j + 1
            elif i < n and src[i] == "{":
                j = balanced(src, i, "{", "}")
                attrs.append((name, src[i + 1:j - 1], True, start, i + 1))
                i = j
        else:
            attrs.append((name, None, False, start, start))
    return attrs


def literal_objects(expr):
    """Objektové literály ve výrazu: [(cesta, {klíč: offset}, offset_objektu, otevřený)].
    Cesta = klíče rodičů; otevřený = obsahuje `...rozbalení` nebo počítaný klíč."""
    stack, objects, i, n = [], [], 0, len(expr)

    def add_key(top, key, at):
        top["keys"].setdefault(key, at)
        top["cur"], top["expect"] = key, False

    while i < n:
        c = expr[i]
        top = stack[-1] if stack else None
        if c == "/":
            j = skip_comment(expr, i)
            if j is not None:
                i = j
                continue
        if c in "\"'`":
            j = skip_string(expr, i)
            if top and top["kind"] == "{" and top["expect"]:
                k = j
                while k < n and expr[k].isspace():
                    k += 1
                if k < n and expr[k] == ":":
                    add_key(top, expr[i + 1:j - 1], i)
                    i = k + 1
                    continue
            i = j
            continue
        if top and top["kind"] == "{" and top["expect"]:
            if expr.startswith("...", i):
                top["open"], top["expect"] = True, False
                i += 3
                continue
            if c == "[":  # počítaný klíč [x]: … — klíč neznáme, objekt bereme jako otevřený
                top["open"], top["expect"] = True, False
                i = balanced(expr, i, "[", "]")
                continue
        if c in "{[(":
            if top and top["kind"] == "{" and top["cur"] is not None:
                path = top["path"] + (top["cur"],)
            else:
                path = top["path"] if top else ()
            node = {"kind": c, "path": path, "expect": c == "{", "cur": None,
                    "keys": {}, "at": i, "open": False}
            stack.append(node)
            if c == "{":
                objects.append(node)
            i += 1
            continue
        if c in "}])":
            if stack:
                stack.pop()
            i += 1
            continue
        if c == "," and top and top["kind"] == "{":
            top["expect"], top["cur"] = True, None
            i += 1
            continue
        if top and top["kind"] == "{" and top["expect"]:
            m = IDENT_RE.match(expr, i)
            if m:
                k = m.end()
                while k < n and expr[k].isspace():
                    k += 1
                if k < n and expr[k] == ":":
                    add_key(top, m.group(0), i)
                    i = k + 1
                    continue
                if k < n and expr[k] in ",}":  # zkrácený zápis { title }
                    add_key(top, m.group(0), i)
                    top["cur"] = None
                    i = k
                    continue
                i = m.end()
                continue
        i += 1
    return [(o["path"], o["keys"], o["at"], o["open"]) for o in objects]


def resolve_path(shape, path, decls):
    for key in path:
        if not shape or key not in shape:
            return None
        shape = shape_of(shape[key][1], decls)
    return shape


def check_file(path):
    with open(path, encoding="utf-8") as fh:
        src = blank_code_fences(fh.read())
    findings, tags = [], 0

    def line_of(offset):
        return src.count("\n", 0, offset) + 1

    imported, known = {}, set()
    for m in IMPORT_RE.finditer(src):
        imported[m.group(1)] = (m.group(2), m.start())
        known.add(m.start())
    for m in ANY_BLOCK_IMPORT_RE.finditer(src):
        line_start = src.rfind("\n", 0, m.start()) + 1
        if m.start() not in known and line_start not in known:
            findings.append((line_of(m.start()), "import", "nerozpoznaný import", m.group(0).strip()[:90],
                             "zapiš `import X from \"~/components/blocks/X.astro\";` na samostatný řádek"))

    for local, (comp, at) in imported.items():
        info = component_info(comp)
        if info is None:
            findings.append((line_of(at), local, "neznámá komponenta", comp,
                             f"soubor src/components/blocks/{comp}.astro neexistuje"))
            continue
        if info["unchecked"]:
            UNCHECKED_SEEN[comp] = info["unchecked"]
        props, decls = info["props"], info["decls"]
        open_props = OPEN in props or info["rest"]
        readable = ", ".join(k for k in props if k != OPEN) or "žádnou vlastnost"
        for m in re.finditer(r"<" + re.escape(local) + r"(?=[\s/>])", src):
            tags += 1
            attrs = parse_attrs(src, m.end())
            names = {a[0] for a in attrs}
            for name, value, is_expr, off, voff in attrs:
                if name == "...":
                    continue
                if name not in props:
                    if not open_props:
                        findings.append((line_of(off), local, "nečtená vlastnost", name, f"komponenta čte: {readable}"))
                    continue
                if name in info["unused_props"]:
                    findings.append((line_of(off), local, "vlastnost v typu, kterou šablona nepoužije", name,
                                     "typ ji přijme, šablona ji nikde nevykreslí — hodnota se tiše zahodí"))
                if not is_expr or value is None:
                    continue
                base = shape_of(props[name][1], decls)
                if base is None:
                    continue
                for obj_path, keys, oat, obj_open in literal_objects(value):
                    shape = resolve_path(base, obj_path, decls)
                    if shape is None:
                        continue
                    where = path_label(name, obj_path, props, decls)
                    allowed = ", ".join(k for k in shape if k != OPEN)
                    if OPEN not in shape:
                        for key, koff in keys.items():
                            if key not in shape:
                                findings.append((line_of(voff + koff), local, "nečtený klíč položky",
                                                 f"{where}.{key}", f"položka čte: {allowed}"))
                    for key, koff in keys.items():
                        if key in shape and key in info["unused_keys"] and name not in info["unused_props"]:
                            findings.append((line_of(voff + koff), local, "klíč v typu, který šablona nepoužije",
                                             f"{where}.{key}",
                                             "typ ho přijme, šablona ho nikde nevykreslí — hodnota se tiše zahodí"))
                    if not obj_open:
                        for key, (optional, _t) in shape.items():
                            # povinný klíč, který šablona nepoužije, se nevyžaduje — článek by jinak neprošel nikdy
                            if key != OPEN and not optional and key not in keys and key not in info["unused_keys"]:
                                findings.append((line_of(voff + oat), local, "chybí povinný klíč položky",
                                                 f"{where}.{key}", f"položka čte: {allowed}"))
            if "..." not in names:
                for key, (optional, _t) in props.items():
                    if key != OPEN and not optional and key not in names and key not in info["unused_props"]:
                        findings.append((line_of(m.start()), local, "chybí povinná vlastnost", key,
                                         f"komponenta čte: {readable}"))
    return findings, tags


def safe(text):
    """Řídicí znaky z obsahu článku vypíše jako escape sekvence, ne do terminálu."""
    return "".join(ch if ch.isprintable() else repr(ch)[1:-1] for ch in str(text))


def report_components():
    """Přehled za komponenty: co mají v typu a šablona nepoužije — i když to žádný článek nepředává."""
    usage, err = template_usage()
    if usage is None:
        print(f"kontrola nepoužitých vlastností nejde spustit: {safe(err)}", file=sys.stderr)
        return 2
    found, errors, unchecked = 0, 0, []
    names = sorted(f[:-len(".astro")] for f in os.listdir(BLOCKS)
                   if f.endswith(".astro") and os.path.isfile(os.path.join(BLOCKS, f)))
    for name in names:
        try:
            info = component_info(name)
        except (OSError, UnicodeDecodeError) as exc:
            errors += 1
            print(f"src/components/blocks/{safe(name)}.astro · soubor nešel přečíst: {safe(exc)}", file=sys.stderr)
            continue
        if info is None:
            continue
        if info["unchecked"]:
            unchecked.append((name, info["unchecked"]))
            continue
        unused = sorted(info["unused_props"]) + sorted(
            path for k in info["unused_keys"] for path, _t in info["paths"][k]
            if owner(path) not in info["unused_props"])
        if unused:
            found += len(unused)
            print(f"src/components/blocks/{safe(name)}.astro · v typu, ale šablona nepoužije: {safe(', '.join(unused))}")
    for name, why in unchecked:
        print(f"src/components/blocks/{safe(name)}.astro · nekontrolováno: {safe(why)}")
    print(f"\n== {len(names)} komponent · {found} deklarací, které šablona nepoužije"
          + (f" · {len(unchecked)} nekontrolováno" if unchecked else "")
          + (f" · {errors} nešlo přečíst" if errors else ""))
    return 2 if errors else (1 if found else 0)


def main(argv):
    files = [a for a in argv if not a.startswith("-")]
    if "--komponenty" in argv:
        if files:
            print("--komponenty se spouští bez článků (kontroluje komponenty, ne články)", file=sys.stderr)
            return 2
        return report_components()
    if not files:
        print(__doc__.strip())
        return 2
    total, tags_total, errors, summary = 0, 0, 0, Counter()
    for f in files:
        try:
            findings, tags = check_file(f)
        except (OSError, UnicodeDecodeError) as exc:
            errors += 1
            print(f"{safe(f)} · soubor nešel přečíst: {safe(exc)}", file=sys.stderr)
            continue
        tags_total += tags
        for line, comp, kind, what, hint in sorted(findings):
            total += 1
            summary[(comp, kind, what)] += 1
            print(f"{safe(f)}:{line} · <{comp}> · {kind} „{safe(what)}“ · {safe(hint)}")
    print(f"\n== {len(files) - errors} souborů · {tags_total} použití komponent · {total} nálezů"
          + (f" · {errors} nešlo přečíst" if errors else ""))
    for (comp, kind, what), cnt in summary.most_common():
        print(f"   {cnt:>4}× <{comp}> {kind} „{safe(what)}“")
    if component_info.cache_info().currsize:
        usage, err = template_usage()
        if usage is None:
            print(f"⚠ vlastnosti v typu, které šablona nepoužije, se nekontrolovaly: {safe(err)}", file=sys.stderr)
        else:
            for comp, why in sorted(UNCHECKED_SEEN.items()):
                print(f"⚠ <{comp}>: vlastnosti v typu, které šablona nepoužije, se nekontrolovaly — {safe(why)}",
                      file=sys.stderr)
    return 2 if errors else (1 if total else 0)


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
