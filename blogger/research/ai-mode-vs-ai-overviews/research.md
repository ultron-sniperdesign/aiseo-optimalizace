# Research — AI Mode vs. AI Overviews

**Slug:** `ai-mode-vs-ai-overviews`
**Kategorie:** analysis (bez howto → 4/4 JSON-LD)
**Řádek plánu:** `ai mode vs ai overviews`
**Datum:** 2026-07-17
**Pořadí:** téma 1/5 z uživatelem zadané AI Mode série

---

## Teze

Vypadají podobně a často říkají skoro totéž — ale **citují jiné zdroje** a chovají se jinak.
Proto se nedají brát jako jeden povrch: to, že jste v jednom, neznamená, že jste i v druhém.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE (ahrefs.com/blog/ai-overviews-vs-ai-mode/, fetch 2026-07-17)

Studie Ahrefs nad daty z Brand Radaru:

| Co | Hodnota |
|---|---|
| Vzorek — podobnost obsahu | 730 000 párů odpovědí |
| Vzorek — analýza citací | 540 000 párů dotazů |
| **Shoda citovaných URL** | **13,7 %** |
| Shoda u top-3 citací | 16,3 % |
| Sémantická podobnost (průměr) | 86 % |
| Párů nad 0,8 kosinové podobnosti | 89,7 % |
| Shoda na úrovni slov (Jaccard) | 16 % |
| Délka odpovědi AI Mode | ~4× delší než AI Overviews |
| Entity v odpovědi | AI Mode 3,3 vs. AI Overviews 1,3 |

**Období a trh: září 2025, USA.** ⚠️ Do článku VŽDY uvést — nejsou to česká ani aktuální data.

### ⚠️ LIMIT, KTERÝ STUDIE SAMA UVÁDÍ (musí být v článku!)
- Porovnává **jednotlivá vygenerování** AI Mode a AI Overviews, ne množiny zdrojů v čase.
- Dřívější výzkum ukázal, že **~45 % citací v AI Overviews se mezi generováními mění**.
- → „citation pools may overlap more than the snapshot indicates" — reálný překryv může být vyšší.
- Studie sama uzavírá jen tolik, že i když by víc zdrojů mohlo odpověď podepřít, oba povrchy
  v praxi často vyberou jiné.

**Formulace do článku:** ne „citují jen ze 13,7 % stejně", ale „v jednom velkém americkém snímku
z podzimu 2025 se citované adresy překrývaly zhruba z 14 %; studie sama upozorňuje, že jde o snímek
jednotlivých vygenerování a že se citace mezi běhy mění, takže skutečný překryv může být vyšší."

---

## Strukturální rozdíly (bezpečné, plyne z povahy produktů)

| | AI Overviews | AI Mode |
|---|---|---|
| Kde | shrnutí nahoře na běžné stránce s výsledky | samostatný konverzační režim |
| Organické výsledky vedle | ano, pod shrnutím | ne, odpověď stojí sama |
| Interakce | jednorázové shrnutí | konverzace, doptávání |
| Délka odpovědi | kratší | výrazně delší (studie ~4×) |
| Základ | AI vrstva nad vyhledáváním | modely rodiny Gemini |
| Query fan-out | používá | používá |

---

## ⛔ NEPOUŽÍVAT — nedoložená sekundární čísla

Z trend researche vyplavala, ale primární zdroj ani metodika neověřeny:
- „93 % relací v AI Mode končí bez kliknutí"
- „AI Overviews jsou u 48 % dotazů"
- „CTR padá o 34–61 %" / „58% propad CTR"
- „AI Mode používají jen ~2 % týdenních uživatelů"
- „fan-out spustí až 16 vyhledávání"

Poučení z runů #48 a #50: nedoložené tvrzení o třetí straně = BLOKER. Článek stojí na
mechanismu + JEDNÉ řádně ocitované studii s uvedeným limitem.

---

## Česko

Sekce `/ai-mode/` (na webu, jiné vlákno) uvádí, že AI Mode do Česka teprve přichází.
V článku hedgovat: dostupnost a podoba se liší podle trhu, účtu a fáze zavádění; americká data
nejde přenášet 1:1. Nekonkretizovat rollout, není doložitelný.

---

## Co to mění pro web (jádro praktické části)

1. **Nedají se měřit jako jedno.** Být citovaný v jednom neznamená být v druhém.
2. **Delší odpověď = víc prostoru pro zmínky.** AI Mode uvádí víc entit → víc příležitostí být zmíněn,
   ale i víc konkurentů v jedné odpovědi.
3. **Jeden test nic nedokazuje.** Když se citace mezi běhy mění, jedno měření je anekdota.
   → odkaz na test-viditelnosti-v-ai.
4. **Základ je společný.** Oba používají query fan-out; obsah, který jasně odpovídá na dílčí otázky,
   hraje pro oba. → odkaz na query-fan-out-ai-mode.

---

## Chyby (→ MistakeGrid 4×)

1. **Brát to jako jeden povrch** — „jsme v AI" nedává smysl; jde o dvě různá místa.
2. **Přenášet americká čísla na Česko** — jiný trh, jiná fáze zavádění, jiné jazykové podklady.
3. **Vyvozovat závěr z jednoho spuštění** — citace se mezi běhy mění.
4. **Optimalizovat „na AI Mode" zvlášť** — společný základ (fan-out, jasné odpovědi) je pořád tentýž;
   oddělené „triky" na jeden povrch jsou slib, který nikdo nedoloží.

## Hranice článku

- Neříká, jak se do některého z nich dostat (to je [google-ai-mode](/blog/google-ai-mode/) a další díly série).
- Nedává česká čísla — nejsou veřejně doložená.
- Neslibuje, že když budete v jednom, budete i v druhém. Studie ukazuje spíš opak.

## Interní odkazy (ověřeno 2026-07-17 — všechny existují)

- `/blog/google-ai-mode/` — hub: co to je + jak připravit obsah (⚠️ po publikaci zkrátit jeho H2
  „AI Mode vs. AI Overviews" na shrnutí + odkaz sem — hub-and-spoke, schválil uživatel)
- `/blog/query-fan-out-ai-mode/` — společný mechanismus
- `/blog/jak-vypnout-ai-overview/` — defenzivní pohled na AI Overviews
- `/blog/test-viditelnosti-v-ai/` — proč měřit opakovaně
- `/blog/gsc-ai-segmenty-mereni/` — měření v GSC
- `/ai-mode/` — sekce (pátá disciplína)

## CTA

Audit 9 990 + Pack 1 490. Bez slibu výsledku.
