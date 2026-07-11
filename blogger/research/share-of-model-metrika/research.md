# Research — Share of Model (SoM) jako metrika AI viditelnosti

**Datum:** 2026-07-11
**Cílová kategorie:** analysis
**Slug:** `share-of-model-metrika`
**Cílové KW:** share of model / podíl zmínek v ai / ai share of voice / měření ai viditelnosti značky

## 1. Definice (krátká odpověď)

- **Share of Model (SoM)** = jak často a jak výrazně vás daný AI model zmíní napříč relevantními dotazy — v poměru ke konkurentům.
- Je to obdoba **Share of Voice (SoV)** z klasického marketingu, ale pro odpovědi AI (ChatGPT, Perplexity, Gemini, Google AI Overviews) místo reklamy nebo pozic ve vyhledávání.
- Orientačně: `SoM = zmínky vaší značky / všechny zmínky značek v sadě AI odpovědí` (nejlépe zvlášť per model).
- Není to přesné číslo — odpovědi AI se liší běh od běhu, takže SoM je **směrový ukazatel trendu**, ne exaktní metrika.

## 2. Proč vzniká (kontext)

- V klasickém vyhledávání existuje **žebříček** výsledků → měřilo se pořadí, podíl na kliknutích, viditelnost.
- V AI odpovědi je často **jedna syntetizovaná odpověď** — žádný žebříček. Pozice ztrácí výpovědní hodnotu.
- Co nově rozhoduje: **jste v odpovědi zmíněni vůbec?** Jak výrazně? V jakém kontextu (doporučení vs. jen okrajová zmínka)? S citací zdroje, nebo bez?
- Proto vzniká nová metrika: podíl na zmínkách v modelech = Share of Model.

## 3. SoM vs. příbuzné metriky

- **Share of Voice (SoV)** — podíl na viditelnosti v kanálu (reklama, organické pozice). SoM je jeho „AI verze".
- **Share of Search** (Les Binet) — podíl značky na vyhledávacích dotazech jako proxy poptávky. Jiné než SoM (to měří zmínky v odpovědích, ne poptávku).
- **Mention rate / míra zmínek** — jak často vás model zmíní; SoM to dává do poměru s konkurencí.
- Vztah k [ai-brand-mentions](/blog/ai-brand-mentions/) (zmínky značky) a [test-viditelnosti-v-ai](/blog/test-viditelnosti-v-ai/) (měření vlastní viditelnosti).

## 4. Jak SoM orientačně změřit (DIY / ruční test)

1. **Sada dotazů** — 10–30 reálných otázek, které cílový zákazník klade v dané kategorii (ne brandové; typu „nejlepší X pro Y", „jak vyřešit Z").
2. **Spustit napříč modely** — ChatGPT, Perplexity, Gemini, Copilot; ideálně i s českým zněním dotazu.
3. **Zaznamenat zmínky** — u každé odpovědi: byla zmíněna vaše značka? Konkurenti? Kdo je citovaný jako zdroj?
4. **Spočítat podíl** — vaše zmínky / všechny zmínky značek; zvlášť per model a pak průměr.
5. **Opakovat pravidelně** — odpovědi kolísají, proto stejné dotazy měřit periodicky (např. měsíčně) a sledovat **trend**, ne jednorázové číslo.

## 5. Proč čísla brát s rezervou (KRITICKÉ pro hedge)

- **Nedeterminismus** — stejný dotaz dá pokaždé trochu jinou odpověď (teplota modelu). → měřit víc opakování.
- **Personalizace / region / účet** — výsledky se liší podle lokace, historie, přihlášení.
- **Modely se mění** — update modelu může SoM ze dne na den posunout.
- **Malý vzorek = šum** — pár dotazů nestačí; i tak je to jen odhad.
- **Zmínka ≠ citace ≠ doporučení** — rozlišovat úrovně (okrajová zmínka vs. aktivní doporučení se zdrojem).
- Závěr: SoM je **orientační a směrový**, ne přesný. Nikde neslibovat „X % SoM = Y prodejů".

## 6. Co SoM ovlivňuje (co s ním dělat)

- **Být citace-hodný** — autoritativní, strukturovaný obsah, který [AI ráda cituje](/blog/jak-ai-cituje-zdroje/).
- **Zmínky třetích stran** — recenze, oborové seznamy, Reddit, Wikipedia; pro LLM často váží víc než vlastní stránky.
- **Jasná entita značky** — konzistentní popis firmy napříč webem (strukturovaná data, Wikidata).
- **Přítomnost na zdrojích, kterým modely věří** — kategorie-specifické autority.
- Souvisí se [zero-click](/blog/zero-click-ai/) realitou: když nejste v odpovědi, jste neviditelní bez ohledu na pozici v Googlu.

## 7. Nástroje (zmínit obecně, bez schvalování konkrétního)

- Existují placené nástroje na sledování AI viditelnosti a SoM (Profound, Peec AI, Otterly, Ahrefs Brand Radar aj.).
- Pro start stačí ruční test (viz bod 4) — levné, transparentní, dostatečné pro trend.
- Viz přehled [AI SEO nástrojů](/blog/ai-seo-nastroje/).

## 8. CZ specifika

- Měřit **českými dotazy** — chování modelů v CZ se liší od EN.
- Menší objemy dotazů → ještě větší šum; spíš kvalitativní snímky + periodické opakování.
- Sledovat i český kontext (Seznam, česká média jako zdroje).

## 9. Napojení na měření

- SoM je „off-site" pohled (co říká model). Doplnit „on-site" daty: [AI segmenty v GSC](/blog/gsc-ai-segmenty-mereni/) a [návštěvnost/konverze z AI](/blog/ai-navstevnost-konverze/).
- SoM = leading indikátor viditelnosti; traffic/konverze = výsledek.

## 10. Brand voice notes

- „Share of Voice" / „Share of Model" ponechat jako termíny (téma), vysvětlit česky („podíl na zmínkách v AI modelech").
- „tracking" → sledování / měření; „mention rate" → míra zmínek; „prompt" → dotaz / zadání; „benchmark" → srovnání; „leading indicator" → předstihový ukazatel.
- Čísla VŽDY hedge — SoM je směrový. Žádné konkrétní sliby.
- Answer + první odstavec = samostatná definice.

## 11. Interní odkazy (ověřeno, existují)

- `test-viditelnosti-v-ai` (měření vlastní AI viditelnosti — párový)
- `ai-brand-mentions` (zmínky značky v AI)
- `jak-ai-cituje-zdroje` (proč a jak AI cituje)
- `zero-click-ai` (kontext: viditelnost bez prokliku)
- `gsc-ai-segmenty-mereni` (on-site měření AI segmentů)
- `ai-navstevnost-konverze` (návštěvnost a konverze z AI)
- `ai-seo-nastroje` (nástroje)
- `perplexity-seo` (jeden z modelů)

## 12. CTA pozice

- Analysis → primárně **Audit 9 990 Kč** (audit posoudí i konkurenční AI viditelnost a kde chybíte v odpovědích).
- Sekundárně **Pack 1 490 Kč** (struktura obsahu, který se lépe cituje).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Koncept Share of Voice → Share of Model (GEO/AEO diskuze 2025–2026)
- Les Binet — Share of Search jako proxy poptávky (odlišení)
- Princeton GEO study (kontext: co zvyšuje citace)
- Praxe nástrojů na AI brand tracking (Profound, Peec AI, Otterly, Ahrefs Brand Radar)
