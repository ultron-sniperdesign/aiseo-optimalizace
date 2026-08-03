# Refresh research — seo-nastroje-2026

**Datum refreshe:** 2026-08-03 · **Původně vydáno:** 2026-05-03, `updated` 2026-05-06
**Stáří:** 3 měsíce, nikdy nerefreshováno.

**Jak byl vybrán:** fronta je odbavená, tak jsem projel nejstarší články bez refreshe
a hledal ty, kde od května něco konkrétního přibylo. Tenhle vyhrál z jednoho důvodu:
je to **průvodce nástroji s podtitulem „a AI érou"**, a přitom **nezmiňuje ani jeden
ze dvou oficiálních reportů o AI viditelnosti** (0 výskytů).

---

## 1. ⛔ Hlavní nález — chybí bezplatná oficiální vrstva

Článek má kategorii **7. AI éra — citation tracking** a doporučuje v ní výhradně
**placené nástroje**: Otterly ($29/měs), Profound, Marketing Miner Brand Radar.
Krátká odpověď dokonce radí: *„Pro AI citation tracking navíc Otterly AI ($29/měs)."*

Přitom existují **dva oficiální reporty zdarma**, oba ověřené v předchozích runech
přímo u výrobců:

| Report | Spuštěn | Co dává | Kde je v článku |
|---|---|---|---|
| **Bing AI Performance** | **10. 2. 2026** | citace v Copilotu a AI shrnutích, **grounding queries**, stránky, čas | **nikde** |
| **GSC Generative AI features** | **3. 6. 2026** | imprese v AI Overviews a AI Mode + Discover, stránky, země, zařízení, datum | **nikde** |

**Bing ten svůj měl skoro tři měsíce před vydáním článku.** To není zastarání —
to je díra, která tam byla od začátku.

**Reálný dopad na čtenáře:** kdo se článkem řídil, platil za AI tracking, aniž by věděl,
že oficiální bezplatný zdroj existuje. To je nejhorší druh chyby v článku o nástrojích.

---

## 2. Druhý nález — heslo Bing Webmaster Tools je neúplné

Článek popisuje Bing Webmaster Tools jako *„Bing/Copilot indexovatelnost, IndexNow protokol"*.
Od února 2026 tam ale je i **AI Performance**, tedy přesně to, co článek hledá o kategorii dál.

---

## 3. Co NEMĚNIT

- **Ceny neaktualizuji jednu po druhé.** Článek je má poctivě datované („ověřené ke 6. 5. 2026")
  a to je správný přístup; jen datum posunu a zdůrazním, že se mají ověřit u zdroje.
  Ověřovat osm ceníků a znovu je zafixovat by vydrželo týdny.
- **Nepřepisuji strukturu ani styl nadpisů** (starší formát s HTML značkami).
- **Netvrdím, že oficiální reporty nahrazují placené nástroje.** Nenahrazují:
  nepokrývají ChatGPT, Perplexity ani Claude a Bing přiznává vzorek.

---

## 4. Plán refreshe

1. Do kategorie **1. Vlastní data** doplnit obě oficiální AI vrstvy jako **první krok, zdarma**.
2. Do kategorie **7. AI éra** předřadit oficiální reporty před placené nástroje
   a jasně říct, co pokrývají a co ne.
3. Opravit heslo **Bing Webmaster Tools** o AI Performance.
4. Upravit **krátkou odpověď**, aby neposílala rovnou platit.
5. Posunout dataci cen a zdůraznit ověření u zdroje.
6. Prolinkovat na `/blog/bing-ai-performance-report/` a `/blog/gsc-ai-segmenty-mereni/`.
7. Bump `updated`, `published` nechat. Titulek beze změny → OG se negeneruje.

---

## 5. Zdroje

- vlastní research `bing-ai-performance-report/research.md` — parametry ověřené u Microsoftu 3. 8. 2026
- vlastní research `gsc-ai-segmenty-mereni/research-refresh-2026-08.md` — parametry ověřené u Googlu 2. 8. 2026
- vlastní články: `bing-ai-performance-report`, `gsc-ai-segmenty-mereni`
