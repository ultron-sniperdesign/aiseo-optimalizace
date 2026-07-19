# Research — Firmy.cz pro AI viditelnost

**Slug:** `firmy-cz-pro-ai`
**Kategorie:** tutorial (howto → 5/5 JSON-LD) · **Tagy:** ai-platformy + strategie
**Řádek plánu:** `firmy cz pro ai` — 4. místo po datové prioritizaci
**Datum:** 2026-07-19

---

## Zadání říká „role v AI éře je nejasná". UŽ NENÍ.

To je hlavní přínos článku. Seznam v květnu 2026 **jmenovitě uvedl Firmy.cz mezi zdroji dat
Seznam Asistenta**. Z domněnky „katalog možná něco dělá" je doložený vstup do AI odpovědí.

⚠️ Zároveň platí: **být jmenovaným zdrojem ≠ být zobrazen.** Tohle musí článek říct nahlas.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE

### Firmy.cz jako zdroj Seznam Asistenta (blog.seznam.cz, květen 2026)
DOSLOVA: *„V současné době nástroj využívá data z Vyhledávání, zpravodajských webů, Zboží.cz,
Počasí.cz, **Firmy.cz**, Sport.cz, Jízdních řádů a TV programu."*

### firmy.cz (fetch 2026-07-19, aktuální)
- CTA **„Přidat firmu"** / **„Přidat svou firmu"**
- DOSLOVA: *„Registrace je zdarma a zabere jen pár minut"*
- DOSLOVA: *„Více než 750 tisíc ověřených firem"* (vlastní číslo Seznamu o vlastní službě)
- Profil zobrazuje: název, kategorii, adresu s mapou, hodnocení (např. „4,9 Fantastické"),
  počet recenzí i souhrn recenzí, otevírací dobu, kontakt, fotky a popis

### Seznam naplno (placený tarif, nápověda Seznamu)
- Oproti bezplatné verzi firma zobrazuje **logo, otevírací dobu, graf portfolia firmy, fotky,
  hodnocení, akční nabídky a události**
- DOSLOVA: *„All this data is obtained from the company listing on Firmy.cz"* (anglická verze
  nápovědy) → data pro rozšířené zobrazení se berou právě ze zápisu na Firmy.cz

### Kontext ze sesterského článku (ověřeno v předchozím runu)
- AI robot Seznamu = `Seznam-Extended`, odhlášení přes robots.txt
  → [seznam-asistent-sellma](/blog/seznam-asistent-sellma/)

---

## ⛔ NETVRDIT
- **že zápis na Firmy.cz zajistí zobrazení v Asistentovi** — je to jmenovaný zdroj, ne záruka
- **konkrétní ceny Seznam naplno** — neověřeno u primárního zdroje
- **čísla „5× telefon, 5× e-mail, 25 služeb, max 7 sociálních sítí"** — objevila se jen
  v souhrnu vyhledávání, ne v přímo načtené stránce → NEUVÁDĚT
- **že Firmy.cz ovlivňuje lokální výsledky v Googlu** — jiný ekosystém, neřešeno
- **750 tisíc firem jako nezávisle ověřené číslo** — je to údaj Seznamu o vlastní službě
- **podíl Firmy.cz na trhu ani návštěvnost** — nemáme
- **že souhrny recenzí generuje AI** — na stránce je vidět souhrn, mechanismus doložený není

---

## Odlišení od existujících článků (ověřeno 2026-07-19)

| Článek | Co pokrývá | Překryv |
|---|---|---|
| `local-seo-cesko-2026` (5. 5.) | Local SEO obecně, šest pilířů, NAP, Google | Firmy.cz jen **2×** — v seznamu citací a v seznamu nástrojů. **Žádný překryv.** |
| `seznam-cz-ai-vyhledavani` (hub) | Seznam jako kanál, pozice na trhu | Firmy.cz jako **jeden krok** Stepperu. Doplnit odkaz sem. |
| `seznam-asistent-sellma` (dnes) | Asistent, robot, zdroje dat | Firmy.cz zmíněné jako **jeden z osmi zdrojů**. Tenhle článek jde do toho jednoho. |

→ Prostor pro hloubku je volný.

---

## Jádro článku

**Firmy.cz přestal být jen katalog pro lidi.** Je to jmenovaný datový vstup do AI odpovědí
českého vyhledávače. Pro lokální firmu to mění kalkulaci: profil, který jste roky brali jako
„jeden zápis navíc", je teď jedním z osmi zdrojů, ze kterých Asistent skládá odpověď.

Praktický důsledek: **údaje o firmě žijí na víc místech naráz** (web, Firmy.cz, mapy) a když
se rozejdou, systém si vybere — a vy nevíte který. To je stejná logika jako u
[strukturovaných dat](/blog/strukturovana-data-pro-ai/) a [produktového feedu](/blog/produktovy-feed-gtin/).

## Postup (→ howto, 5 kroků)

1. **Zjistěte, jestli zápis vůbec existuje a je váš** — spousta firem v katalogu je, aniž by
   o tom věděly. Převzetí zápisu je první krok, ne založení nového (jinak vzniknou duplicity).
2. **Doplňte údaje, které odpovídají na otázky** — adresa, otevírací doba, kontakt, popis,
   obor. Ne marketingové fráze; věcné údaje, na které se lidé ptají.
3. **Sjednoťte údaje s webem** — název, adresa a telefon musí říkat totéž na webu i v zápisu.
   Rozpor je horší než chybějící údaj.
4. **Řešte recenze** — profil je zobrazuje i sumarizuje. Odpovídání na ně je vidět.
   Detailně [recenze a hodnocení pro AI](/blog/recenze-a-hodnoceni-pro-ai/).
5. **Zvažte placený tarif až nakonec** — bezplatný zápis pokryje základ. Seznam naplno rozšiřuje
   zobrazení (logo, fotky, akční nabídky, události), ale data si stejně bere ze zápisu.
   Nejdřív mít správný zápis, pak zvažovat rozšíření.

## Chyby (→ MistakeGrid 4×)
1. **Založit nový zápis místo převzetí existujícího** — vzniknou duplicity a rozporné údaje.
2. **Cpát klíčová slova do názvu firmy** — název má být název; je to i proti smyslu katalogu
   ověřených firem.
3. **Nechat zápis zastarat** — otevírací doba a kontakt jsou přesně ty údaje, kvůli kterým
   tam lidé (a systémy) chodí.
4. **Čekat, že zápis sám zařídí zobrazení v Asistentovi** — jmenovaný zdroj není záruka.

## Hranice článku
- **Neřeší Local SEO obecně** → [local-seo-cesko-2026](/blog/local-seo-cesko-2026/)
- **Neuvádí ceny** placených tarifů — neověřeno
- **Neslibuje zobrazení v AI odpovědích**
- **Neřeší Google Business Profile** — jiný ekosystém

## Brand voice
- Publikum: lokální firma (kavárna, autoservis, advokát, řemeslník) i menší e-shop s provozovnou.
- Anglicismy → česky: „listing" → **zápis/profil**, „claim" → **převzít zápis**.
  Povolené: Firmy.cz, Seznam Asistent, Seznam naplno, NAP.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-19, všech 9 existuje)
`/blog/local-seo-cesko-2026/` · `/blog/seznam-cz-ai-vyhledavani/` · `/blog/seznam-asistent-sellma/` ·
`/blog/recenze-a-hodnoceni-pro-ai/` · `/blog/strukturovana-data-pro-ai/` · `/blog/test-viditelnosti-v-ai/` ·
`/blog/ai-search-trendy-cesko-2026/` · `/blog/jak-ai-cituje-zdroje/` · `/blog/mereni-ai-mode-limity/`

## CTA
Audit 9 990 + Pack 1 490. Bez slibu zobrazení.
