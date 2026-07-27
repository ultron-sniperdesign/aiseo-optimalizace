# Research — AEO vs. SEO (párový článek 3/3, priorita admin)

**Slug:** `aeo-vs-seo`
**Kategorie:** **analysis** (bez howto → 4/4) · **Tagy:** strategie + obsah
**Řádek plánu:** `aeo vs seo` — PRIORITA 3/3 (admin 2026-07-26)
**Datum:** 2026-07-27

---

## 📌 ZADÁNÍ ADMINA
- GSC: „aeo vs seo" 6 imp pozice 68; **„aeo seo" 9+7 imp pozice 11–18** (striking distance)
- Vzor a tón: **`seo-vs-geo`** (stejný formát dvojice s klasickým SEO)
- Klíčová teze dle zadání: AEO na SEO staví — do AI Overviews jdou stránky, které už rankují;
  rozdíl je formát (otázka v nadpisu + přímá odpověď 40–60 slov)
- Anti-kanibalizace: titulek + answer na párovou frázi, v úvodu odkaz na pilíř
- Interní odkazy: `/aeo/`, `/seo/`, `seo-vs-geo`, pilíř

---

## 🔴 KANIBALIZACE — NEJVYŠŠÍ ze všech tří párů

Teze ze zadání je **doslova už na webu**, a to na čtyřech místech:

| Kde | Co přesně tam je |
|---|---|
| **pilíř** H3 „SEO vs. AEO: jaký je rozdíl?" | „SEO cílí na pozice v klasických výsledcích (modré odkazy), AEO na to, aby vaši odpověď vyhledávač vytáhl do odpovědního boxu… **AEO přitom na SEO staví — do AI Overviews se dostávají typicky stránky, které už slušně rankují. Rozdíl je ve formátu: AEO chce jasně položenou otázku v nadpisu a přímou odpověď 40–60 slov hned pod ní.**" |
| **`aeo-geo-je-porad-seo`** (2 362 slov) | celý článek o Google guide 15. 5. 2026: *„From Google Search's perspective… still SEO"*, *„the same index and quality signals that earn rankings are what earn citations"*; H3 „AEO a GEO jsou z pohledu Googlu stále SEO" |
| **`aeo-optimalizace-v-praxi`** (4 887 slov) | H3 „**AEO vs SEO vs GEO — kde je hranice**" + kompletní jak-na-to (answer block, 5 typů otázek, schema cookbook, AEO Coverage Score, měření v GSC) |
| **`/aeo/`** sekce | H2 „AEO není projekt po milníku — **je to standard psaní**" + Mistake „Optimalizace pouze pro AIO bez pohledu na CTR" |

**A druhá vrstva, kterou jsem chtěl použít, je taky obsazená:**

| Téma | Kde už je |
|---|---|
| zero-click / bere box kliky? | **`zero-click-ai`** (celý článek: dobrý × špatný zero-click, měření, kompenzace) |
| kdy AIO embrace × kdy nosnippet | `rozhodovaci-matice` sekce + `jak-vypnout-ai-overview` (publisher metodika, snippet direktivy) |
| kdy vůbec přidat AEO jako disciplínu | `rozhodovaci-matice`: „Přidejte AEO, jakmile… máte 20+ článků v top 10" |

**→ „AEO staví na SEO, liší se formátem" + „box může sebrat klik" je POKRYTÉ. Zopakovat = duplicita.**

## ✅ CO JE VOLNÉ (jádro článku)

**Všechno výše je na úrovni webu / disciplíny. Nikde není rozhodnutí na úrovni JEDNÉ STRÁNKY.**
Přesně to je otázka z titulku zadání — „kdy hrát o odpovědní box a kdy o modré odkazy".

Volné jádro = **rozcestník per stránka**, postavený na dvou branách:

1. **Brána dosažitelnosti (kde web nic neříká prakticky):** AEO má tvrdou vstupenku —
   stránka musí být natolik vysoko, aby ji vyhledávač vůbec bral jako zdroj. Praktický
   důsledek, který nikde není napsaný: **než na stránce budete dělat AEO úpravy, podívejte
   se na její aktuální pozici.** Hluboko pod první stranou je AEO úprava investice do
   formátu bez šance na výdej; první práce je klasické SEO. (Web tvrdí „typicky stránky,
   které už rankují" — ale nikdy z toho neudělá pracovní krok.)
2. **Brána hodnoty:** typ dotazu rozhoduje, jestli je box výhra, nebo daň. Tady navazuji
   na `zero-click-ai` **odkazem**, nerozvádím to znovu.

**Druhá volná vrstva — anti-delta (nejvíc vlastní a nikde na webu není):**
**co vám AEO rady říkají změnit, a vy to měnit nemáte.** Tohle je opravdu neobsazené:
- zkracovat hloubkový průvodce do „extrahovatelné" podoby → přijdete o to, čím se stránka
  vůbec dostala nahoru (a tím i o vstupenku do boxu)
- zakládat samostatné „AEO stránky" vedle stránek, které už rankují → kanibalizace vlastního webu
- honit box na transakčních dotazech, kde se zobrazuje málo
- brát AEO jako samostatnou rozpočtovou položku (je to editační standard, ne projekt)

**Rámování celku:** SEO a AEO nejsou dvě volby, ale **dvě práce na téže stránce, které jdou
v pořadí.** Odpověď na „AEO vs. SEO" u drtivé většiny stránek zní: **obojí, ze stejné URL,
SEO první.** Fork je ta chyba.

## ✅ FAKTA (ověřená, konzistentní s webem)

- **Google guide 15. 5. 2026:** AEO i GEO jsou z pohledu Google Search stále SEO; AI Overviews
  a AI Mode staví **nad standardním Search indexem**, ne nad odděleným. Stejné signály kvality,
  které dávají pozice, dávají i citace. ⚠️ Nelze zjednodušit na prosté převzetí pořadí výsledků.
- **AEO formát (z `/aeo/` a `aeo-optimalizace-v-praxi`):** otázka v nadpisu, přímá odpověď
  40–60 slov hned pod ní, FAQPage/HowTo schema, strukturované odstavce.
- **AI Overviews:** funkce Google vyhledávače, generovaný souhrn nad organickými výsledky
  s odkazy na zdroje; v ČR aktivní od léta 2025, generuje Gemini. Není totéž co AI Mode.
- **Měření (z `gsc-ai-segmenty` / `mereni-ai-mode-limity`):** report generativních funkcí
  v Search Console od června 2026 ukazuje **zobrazení**, ne kliky ani dotazy; rollout omezený.
  Kliky z AIO nejdou v GSC oddělit od klasického organiku.
- **Rozhodovací matice (sekce, read-only):** AEO jako disciplínu přidávat, když má web
  20+ článků v top 10 a většina dotazů je informačních → **na to odkážu jako na site-level
  variantu téže otázky.**

## ⛔ NETVRDIT
- vlastní čísla o poklesu CTR kvůli AI Overviews (web má „35–60 %" jen jako ukázku formulace
  v `/geo/` Do/Dont — **nepřebírat jako fakt**)
- že AEO úpravy „dostanou" stránku do AI Overviews (žádná garance, výběr zdrojů není pořadí SERP)
- že existuje konkrétní pozice-práh (např. „top 10"), pod kterou AEO nefunguje — **žádný
  veřejný práh doložený není**; formulovat jako orientaci, ne jako pravidlo
- že AI Overviews = AI Mode
- že AEO je nová disciplína oddělená od SEO (Google explicitně říká opak)

## Struktura (analysis, bez howto)
1. Krátká odpověď — párová fráze „AEO vs. SEO", rozdíl cíle + že AEO na SEO staví
   + odkaz na pilíř jako kompletní srovnání všech čtyř
2. Odlišení hned v úvodu: **tahle stránka řeší rozhodnutí per stránka, ne definice**
3. Rozhodnutí na jedné stránce: dvě brány (dosažitelnost → hodnota) — CompareTable/Stepper
4. Čím se práce liší (SEO práce × AEO práce na téže URL) — CompareTable
5. **Co neměnit, i když to AEO rady doporučují** (anti-delta) — MistakeGrid / DoDont
6. Kdy je odpověď „ani jedno" (SEO minimum ještě není hotové) — warning Insight
7. Site-level varianta téže otázky → odkaz na `rozhodovaci-matice`
8. Co si z toho vzít

## Brand voice
- AEO = Answer Engine Optimization, SEO = Search Engine Optimization (obojí rozepsat)
- „odpovědní box" × „modré odkazy" — jazyk z titulku zadání, držet konzistentně
- answer 40–60 slov, **obsahuje frázi „AEO vs. SEO"**
- čísla česky, žádné prodejní CTA

## Interní odkazy (ověřeno 2026-07-27)
`/seo-vs-geo-vs-aeo-vs-aio/` (pilíř, v úvodu) · `/aeo/` · `/seo/` · `/rozhodovaci-matice/` ·
`/blog/seo-vs-geo/` · `/blog/geo-vs-aeo/` (párový sourozenec) · `/blog/aeo-geo-je-porad-seo/` ·
`/blog/zero-click-ai/` · `/blog/aeo-optimalizace-v-praxi/`

## ⚠️ RIZIKO K NAHLÁŠENÍ ADMINOVI
Fráze „aeo seo" (9+7 imp, pozice 11–18) nejspíš už drží **`aeo-optimalizace-v-praxi`**
(description doslova „Praktický průvodce SEO AEO"). Nový článek na stejnou frázi může
tu stránku kanibalizovat. Mitigace v článku: nový článek míří na **rozhodovací** dotaz
(„vs.", „kdy co"), `aeo-optimalizace-v-praxi` na **jak-na-to**, a odkazuje na něj jako na
implementaci. Po publikaci sledovat, jestli se pozice `aeo-optimalizace-v-praxi` nezhorší.

## CTA
Žádná prodejní. Závěr = rozhodnutí na konkrétní stránce.
