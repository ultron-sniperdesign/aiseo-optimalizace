# Research — refresh `caste-chyby-v-seo-2026-update`

**Typ runu:** refresh (2:1 kadence, Run97)
**Datum:** 2026-08-04
**Článek:** `/blog/caste-chyby-v-seo-2026-update/` · published 2026-05-06 · updated 2026-05-06
**Rozsah:** 2 640 slov, category analysis

---

## 1. Proč tenhle článek

Nejstarší `updated` ze všech 116 článků, nikdy nerefreshováno. Na rozdíl od minulých refreshů
tady **nejsou žádné neexistující funkce** — grep na `Search Appearance`, `FAQ rich`,
`featured snippet` vrací nulu. Vada je jiná a týká se dvou z dvanácti chyb.

---

## 2. ⛔ Hlavní nález — článek radí platit za to, co je od června zdarma

### Chyba 6 „Ignorování AI éry"

Sekce „Co lze udělat bez extra nákladu" vyjmenuje FAQ schema, krátkou odpověď, strukturovaná
data a fact-density. Měření pak odbude větou:

> „**Měření citation share** přes Otterly nebo Marketing Miner Brand Radar je **rozšiřující
> metrika**…"

### Chyba 9 „Žádné měření kromě pozic"

Seznam „minimum pro reportování v 2026" obsahuje:

> „AI citation share (Otterly, měsíčně)"

### Co v obou chybí

| Co existuje | Od kdy | Cena |
|---|---|---|
| **Report Generativní AI funkce** v Search Console | 3. 6. 2026 | zdarma |
| **Bing AI Performance report** | 10. 2. 2026 | zdarma |

Bingový report byl dostupný **tři měsíce před vydáním článku** — díra tam byla od začátku,
stejně jako u `seo-nastroje-2026` a `aio-strategie`. Je to potřetí, co se tahle vada
v korpusu opakuje: **placený tracking doporučený dřív než bezplatný oficiální zdroj.**

⚠️ Zároveň nepřehánět: oba reporty mají tvrdé limity (jen imprese, jen část webů, AI Overviews
neoddělí od AI Mode). Nejsou náhradou citation trackingu, jsou první krok, který nic nestojí.

---

## 3. Druhý nález — 0 zmínek o AI Mode

Článek o SEO chybách roku 2026 nezmiňuje AI Mode ani jednou. V sekci o AI éře mluví
o „AI search" obecně.

---

## 4. Třetí nález — nedatovaná čísla

> „odhady (Similarweb, Sparktoro 2025) ukazují **5–15 % traffic share v některých
> vertikálách**"

Zdroj je uvedený, rok taky, ale věta je v přítomném čase a čte se jako aktuální stav.
Datovat výrazněji a doplnit odkaz na vlastní článek s novějším přehledem.

---

## 5. Čtvrtý nález — FAQ schema bez kontextu

Chyba 6 doporučuje FAQPage JSON-LD mezi kroky „bez extra nákladu". Samo o sobě to platí dál,
ale od **7. 5. 2026** už z něj nevzejde rozšířený výsledek ve Vyhledávání. Bez té věty čtenář
čeká efekt, který nepřijde. (Vlastní článek `konec-faq-rich-results` to popisuje.)

---

## 6. Co refresh udělá

1. Do chyby 6 i chyby 9 doplní **bezplatné oficiální reporty** jako první krok, s jejich limity.
2. Doplní **AI Mode** tam, kde článek mluví o AI ploše obecně.
3. Zvýrazní **dataci** odhadu podílu AI trafficu a odkáže na novější přehled.
4. K FAQPage doplní větu o konci rozšířeného výsledku.
5. Otevřený box s přiznáním, že článek radil placené dřív než bezplatné.
6. `updated` → 2026-08-04, titulek beze změny → **OG negenerovat**.

---

## 7. Zdroje

- vlastní ověřené články: `gsc-ai-segmenty-mereni` (report Generativní AI funkce, ověřeno
  proti nápovědě 2. 8. 2026), `bing-ai-performance-report` (Bing, 10. 2. 2026),
  `konec-faq-rich-results` (7. 5. 2026), `ai-mode-vs-ai-overviews`,
  `ai-search-trendy-cesko-2026` (novější přehled podílů)
