# Refresh research — mereni-seo-vykonu-2026

**Datum refreshe:** 2026-08-03 · **Původně vydáno:** 2026-05-03, `updated` 2026-05-06
**Stáří:** 3 měsíce, nikdy nerefreshováno — nejstarší cluster na webu.

**Jak byl vybrán:** fronta refreshů je odbavená, takže jsem projel všech 107 článků
a hledal ty s nejstarším `updated` a s tvrzeními o stavu. Tenhle vyhrál z jednoho důvodu:
**článek o měření SEO v roce 2026 nemá ani jednu zmínku o GSC AI reportu** (0 výskytů),
který Google spustil **3. 6. 2026 — měsíc po jeho vydání.** Titulek přitom slibuje
„nástroje od GSC po AI citation tracking".

---

## 1. ⛔ Nález č. 1 — publikovaná VĚCNÁ CHYBA, ne jen zastaralost

Článek v sekci „Měření v AI éře" tvrdí:

> „**AI Overview impact** — v některých účtech a rolloutech umožňuje GSC sledovat AI Overview
> ve Performance reportu (Search appearance). Pokud je dostupný, berte ho jako doplňkový
> kontext k výkonu, ne jako samostatný KPI."

**To není pravda a nikdy nebyla.** Dokumentace Googlu (*AI Features and Your Website*,
developers.google.com) doslova:

> „sites appearing in AI features (such as AI Overviews and AI Mode) are included
> in the overall search traffic in Search Console"

Data z AI funkcí jsou v reportu Výkon **započtená v celkových číslech, v typu vyhledávání Web**,
a **žádný filtr ani typ zobrazení, kterým by se daly oddělit, neexistuje.**

**Jak chyba nejspíš vznikla:** v září 2025 kolovaly screenshoty údajně nového filtru
„AI Overviews" v Search Console. John Mueller z Googlu je označil za vymyšlené — funkce
neexistovala ani nebyla v plánu. Formulace „v některých účtech a rolloutech" v mém článku
odpovídá přesně téhle falešné stopě.

---

## 2. Nález č. 2 — chybí to, co reálně existuje

Co článek neobsahuje a obsahovat má (vše ověřeno v Run82 u primárního zdroje, 2. 8. 2026):

| Fakt | Stav |
|---|---|
| **Generative AI features report** v Search Console | spuštěn **3. 6. 2026** |
| Co ukazuje | imprese, stránky, země, zařízení, datum |
| Co neukazuje | kliky, CTR, pozici, dotazy |
| AI Overviews vs AI Mode | **neoddělí je**, jsou v jednom čísle |
| Dostupnost | jen části webů, rollout začal v Británii; platí i k 2. 8. 2026 |

Vlastní článek k tomu už na webu je: `gsc-ai-segmenty-mereni` (refreshovaný 2. 8. 2026).
Tenhle článek na něj **nikde neodkazuje** — chybí prolinkování v obou směrech.

---

## 3. Nález č. 3 — nedatované ceny nástrojů

Článek uvádí konkrétní ceny: Otterly 29/99 USD, Profound 500+ USD, Ahrefs 29 USD,
SE Ranking 65 USD, AgencyAnalytics 59 USD, Marketing Miner Brand Radar 99 USD.
Všechny jsou z května 2026 a **nikde není napsáno, k jakému datu platí.**

Neověřuju je jednu po druhé — ceníky se mění průběžně a přesnost by stejně vydržela týdny.
**Správné řešení je datovat je a poslat čtenáře na ceník**, ne je aktualizovat a znovu
nedatovat.

---

## 4. Co NEDĚLÁM

- **Nepřepisuju strukturu.** Článek používá starší styl nadpisů s HTML značkami
  (`<strong>`, `<span class="hl">`). Sahat na to při refreshi je zbytečné riziko.
- **Neruším metriku #8 (AI citation share).** Je pořád platná, jen se k ní přidá nová vrstva.
- **Netvrdím, že GSC AI report nahrazuje citation tracking.** Pokrývá jen Google,
  ne ChatGPT/Perplexity/Claude.

---

## 5. Plán refreshe

1. **Opravit chybu** o Search appearance — otevřeně, ne tiše přepsat.
2. **Doplnit GSC AI report** do sekce „Měření v AI éře" + do FAQ + do zdrojů.
3. **Prolinkovat** na `/blog/gsc-ai-segmenty-mereni/`.
4. **Datovat ceny** nástrojů k květnu 2026 s pokynem ověřit si aktuální.
5. Bump `updated`, `published` nechat. Titulek se nemění → OG obrázek se negeneruje.

---

## 6. Zdroje

- developers.google.com/search/docs/appearance/ai-features — AI funkce jsou v celkových číslech, čteno 3. 8. 2026
- vlastní research `gsc-ai-segmenty-mereni/research-refresh-2026-08.md` — parametry reportu ověřené 2. 8. 2026
- seroundtable.com — Google filtr na AI Overviews nepřidal; falešné screenshoty ze září 2025 vyvrácené J. Muellerem
