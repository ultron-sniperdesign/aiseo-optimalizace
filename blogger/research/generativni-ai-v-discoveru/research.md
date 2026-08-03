# Research — generativní AI v Discoveru

**Řádek plánu:** `generativni ai v discoveru`
**Datum:** 2026-08-03 · **Kategorie:** analysis · **Tagy:** mereni, obsah

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `gsc-ai-segmenty-mereni` | GSC AI report; Discover zmiňuje **jen jako „to druhé zobrazení"** a radí sledovat hlavně Search | **Téma volné.** Co Discover view dává a co ne, tam není. Prolinkovat. **Pozn.: má tam nepřesnost — viz §5.** |
| `bing-ai-performance-report` | Bing report | Sousedí, jiná platforma. |
| `mereni-seo-vykonu-2026` | Měření SEO | Sousedí. |

**Verdikt: téma volné.** Článek o Discoveru na webu není žádný.

---

## 2. Primární zdroj — nápověda Search Console pro Discover, ověřeno 3. 8. 2026

### ⛔ Hlavní nález: Google dává report o funkci, kterou nedefinuje

Stránka **nikde nepojmenovává**, které generativní AI funkce v Discoveru report pokrývá.
Mluví o „generative AI features in Discover" a dál nic. U Search verze přitom Google
funkce vyjmenoval (AI Overviews, AI Mode).

O tom, co uživatel vidí, se dozvíte jen tolik, že obsah se objeví
*„as a standard Discover card, or embedded in a carousel"*.

### Co report dává a co ne

| | Discover | Search (pro srovnání) |
|---|---|---|
| Metrika | imprese | imprese |
| Stránky | ano | ano |
| Země | ano | ano |
| Datum | ano | ano |
| **Zařízení** | **ne** | ano |
| Kliky, CTR, dotazy | ne | ne |

### Dostupnost

Stejná věta jako u Search verze: *„We're rolling out this report to a subset of website
owners, allowing for thorough testing before rolling it further."*
Navíc: nemusí se objevit, když web nemá dost impresí nebo neotevřel nastavení
způsobilosti pro generativní AI.

### Drobné písmo, které mění čísla

- data **nezahrnují experimenty Search Labs**
- tabulka má strop **1 000 řádků**
- **jedna imprese na výsledek za relaci** — ne za zobrazení
- hodnoty zobrazené jako `~` nebo `-` se **při exportu promění v nuly**

---

## 3. Co ta funkce nejspíš je — ale Google to neřekl

Tohle musí být v článku **jasně oddělené** od primárního zdroje.

Podle novinářských zdrojů (Nieman Lab, leden 2026, a navazující reportáže) Google
v Discoveru **testuje nahrazování titulků od vydavatele titulky vygenerovanými AI**.
Test se podle nich rozšířil i do klasických výsledků vyhledávání.

Doložený příklad selhání, který se opakuje napříč zdroji: nuancovaný text PC Gameru
byl zkrácen na **„BG3 players exploit children"** — čímž ztratil kontext i smysl.

Dál z těchto zdrojů:
- Google **neposkytl možnost se odhlásit**
- **neoznačuje**, kdy k přepisu došlo, takže se to pozná jen ruční kontrolou
- americká **News Media Alliance** po Googlu žádá transparentnost a opt-out

⛔ **V ověřené nápovědě Google ten report s přepisováním titulků nespojuje.** Že report měří právě
tohle, je pravděpodobné, ale nedoložené — a v článku to tak musí být napsané.

---

## 4. Teze článku

> Search Console má samostatné zobrazení pro generativní AI v Discoveru. Google v nápovědě
> nikde neuvádí, které funkce to jsou — dostanete tedy počty impresí u něčeho, co není
> definované. Podle novinářských zdrojů jde nejspíš o AI přepisování titulků, na které
> nemáte vliv a nepoznáte ho. Report navíc dává o jeden rozměr míň než Search verze.

---

## 5. Vedlejší nález — nepřesnost ve vlastním článku

`gsc-ai-segmenty-mereni` na dvou místech uvádí rozměry reportu jako „imprese, stránky,
země, **zařízení** a datum" pro obě zobrazení. **U Discoveru zařízení nejsou.**
FAQ toho článku to má správně („zařízení — jen u Search"), ale krátká odpověď a závěr ne.
Opravit v tomtéž běhu.

---

## 6. Zdroje

- support.google.com/webmasters/answer/16983858 — nápověda GSC, Generative AI performance report (Discover), čteno 3. 8. 2026
- support.google.com/webmasters/answer/16984139 — tatáž nápověda pro Search, pro srovnání rozměrů
- niemanlab.org, leden 2026 + navazující reportáže — AI přepisování titulků v Discoveru (sekundární)
- vlastní články: `gsc-ai-segmenty-mereni`, `bing-ai-performance-report`
