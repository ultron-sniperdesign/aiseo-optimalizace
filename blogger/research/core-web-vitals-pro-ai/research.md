# Research — Core Web Vitals pro AI viditelnost

**Slug:** `core-web-vitals-pro-ai`
**Kategorie:** tutorial (howto → 5/5) · **Tagy:** technicke-zaklady + mereni
**Řádek plánu:** `core web vitals pro ai`
**Datum:** 2026-07-24

---

## 🔴 JÁDRO: CWV nejsou zvláštní AI signál — ale jeden reálný mechanismus existuje

Zadání: *„Core Web Vitals 2026 pro AI viditelnost — INP, LCP, CLS."*

Stejný vzorec jako u URL: **pro CWV jako samostatný AI signál není opora.** ALE tady
je na rozdíl od URL jeden **konkrétní, měřitelný, nehype mechanismus**:
**AI crawleři mají krátký timeout (typicky 1–5 s)** → moc pomalá stránka se nemusí
stihnout procroulovat, a co se neprocrouluje, to nemá jak být citováno.

Poctivá teze: **honěte CWV kvůli základu (procrolovatelnost + lidský UX), ne kvůli
„AI edge".** Zapadá do webové filozofie (AEO/GEO je pořád SEO) i do čerstvého Google
guide (15. 5. 2026): „stránka musí být indexovaná a způsobilá k zobrazení se snippetem;
žádné další požadavky".

---

## Kolizní kontrola (2026-07-24)

CWV je napříč webem jako **audit odrážka / metrika**, ale **otázku „ovlivňují CWV
AI citace" neřeší nikdo jako téma.**

| Existující článek | Co má | Hranice |
|---|---|---|
| `mereni-seo-vykonu-2026` | CWV jako 1 z 8 metrik + „tie-breaker, ne rozhodující" (pro klasický ranking) | **měření/benchmark** — odkázat |
| `lighthouse-ai-check` | Lighthouse Agentic Browsing (jiný nástroj), měří i výkon | nástroj, ne otázka „vliv na AI" |
| `seo-audit-co-kontrolovat`, `ai-seo-wordpress`, `ai-seo-zdarma` | CWV jako položka | zmínky |

→ Volné téma: **specificky otázka „záleží CWV pro AI citace + co reálně dělat".**
Uvnitř odkazovat na mereni-seo-vykonu (měření) a robots.txt/URL cluster.

## ✅ OVĚŘENÁ FAKTA (2026-07-24, web search)

### Co jsou CWV a prahy 2026
- **LCP** (Largest Contentful Paint) — „dobré" pod **2,5 s**
- **INP** (Interaction to Next Paint) — „dobré" pod **200 ms** (200–500 ms zlepšit, >500 špatné)
- **CLS** (Cumulative Layout Shift) — „dobré" pod **0,1**
- Měří se na **75. percentilu reálných uživatelů Chrome za 28 dní**
- **INP plně nahradil FID v březnu 2024** — měří celý životní cyklus interakce, ne jen vstupní zpoždění

### Vliv na AI (poctivý crux)
- **Žádná AI platforma (Google, OpenAI, Microsoft, Perplexity) CWV jako faktor pro
  výběr zdrojů do generativních odpovědí nepotvrdila.**
- **Lednová studie 2026:** jen slabé korelace CWV s AI viditelností —
  LCP −0,12 až −0,18, CLS −0,05 až −0,09 (blízko nuly).
- **Reálný nepřímý mechanismus #1:** AI crawleři běží na krátkých timeoutech
  (**typicky 1–5 s**) → příliš pomalá stránka se nemusí správně procroulovat.
- **Reálný nepřímý mechanismus #2:** rychlý web = lepší UX a engagement signály;
  měkký, nepřímý, netvrdit jako faktor citace.

### Google guide (15. 5. 2026, ověřeno minulý run)
- „Stránka musí být indexovaná a způsobilá zobrazit se ve Vyhledávání se snippetem.
  Žádné další požadavky ani zvláštní optimalizace." → CWV je součást klasického
  základu (použitelnost/způsobilost), ne zvláštní AI páka.

## Struktura (tutorial, howto 5 kroků)
1. Krátká odpověď (co jsou CWV + že nejsou zvláštní AI signál, ale pomalý web se neprocrouluje)
2. Co CWV jsou a prahy (CompareTable LCP/INP/CLS + hodnoty)
3. Ovlivňují AI? Poctivě: skoro nulová korelace + žádné potvrzení (Insight key)
4. Jeden reálný mechanismus: crawler timeout 1–5 s (Insight warning)
5. Postup (howto: změř zdarma → přečti 3 metriky → priorita procrolovatelnost → oprav nejhorší → překontroluj)
6. Kolik stačí (nehonit 100/100; „dobré" prahy = cíl)
7. Chyby (MistakeGrid 4×)
8. Závěr = rozhodnutí (pomalý web oprav; rychlý neřeš donekonečna)

## Howto (5 kroků)
1. **Změřte zdarma** — PageSpeed Insights (reálná data + lab), Search Console report CWV.
2. **Přečtěte tři metriky** — LCP, INP, CLS; cíl jsou „dobré" prahy, ne 100/100.
3. **Priorita: ať se stránka vůbec stihne načíst** — kvůli crawler timeoutu je nejhorší extrémně pomalá stránka.
4. **Opravte nejhorší jednu věc** — obvykle velké obrázky (LCP) nebo těžký JS (INP).
5. **Překontrolujte s odstupem** — data jsou z 28 dní, změna se projeví postupně.

## Chyby (MistakeGrid 4×)
1. **Honit CWV kvůli „AI edge"** — korelace blízko nuly, žádné potvrzení; dělejte to kvůli základu.
2. **Optimalizovat na 100/100** — „dobré" prahy stačí, nad to klesající ROI.
3. **Ignorovat extrémně pomalý web** — jediné, co je u AI reálně rizikové (crawler timeout).
4. **Řešit lab skóre místo reálných dat** — rozhoduje 75. percentil reálných uživatelů, ne jedna lab hodnota.

## ⛔ NETVRDIT
- že CWV jsou AI ranking faktor (nikdo nepotvrdil)
- že dobré CWV zvýší citace (korelace blízko nuly)
- konkrétní čísla korelace jako český stav (studie mezinárodní) — uvádět jako „studie"
- že crawler timeout je přesně X s pro konkrétní bota (typicky 1–5 s, obecně)
- že se vyplatí honit 100/100

## Hranice
- **Neřeší měření SEO výkonu obecně** → [mereni-seo-vykonu-2026](/blog/mereni-seo-vykonu-2026/)
- **Neřeší Lighthouse Agentic Browsing** → [lighthouse-ai-check](/blog/lighthouse-ai-check/)
- **Neřeší, proč je to pořád SEO** → [aeo-geo-je-porad-seo](/blog/aeo-geo-je-porad-seo/)
- **Neřeší procházení robotem** → [ai-crawler-robots-txt](/blog/ai-crawler-robots-txt/)
- **Neučí hloubkovou performance optimalizaci** — jen kam ji u AI zaměřit

## Brand voice
- „Core Web Vitals" nechat (zavedený termín), zkratky LCP/INP/CLS poprvé rozepsat
- „crawler timeout" → **časový limit robota**; „render" → **vykreslení**
- čísla česky: 2,5 s, 200 ms, 0,1, 75. percentil, 28 dní, 1–5 s
- answer 40–60 slov, začíná definicí

## Interní odkazy (ověřeno 2026-07-24, všech 5 existuje)
`/blog/mereni-seo-vykonu-2026/` · `/blog/lighthouse-ai-check/` · `/blog/aeo-geo-je-porad-seo/` ·
`/blog/ai-crawler-robots-txt/` · `/blog/ai-friendly-url-struktura/`

## CTA
Žádná prodejní. De-hype článek („nehoňte kvůli AI") — prodejní CTA by to podkopala.
Závěr = rozhodnutí pomalý × rychlý web.
