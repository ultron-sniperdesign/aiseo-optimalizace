# Research — Pomáhá schema markup AI citacím? (Ahrefs test)

**Slug:** `schema-markup-ai-citace-test`
**Kategorie:** **analysis** (bez howto → 4/4) · **Tagy:** strukturovana-data + strategie
**Řádek plánu:** `schema markup ai citace test`
**Datum:** 2026-07-25

---

## 🔴 JÁDRO: korelace 3× vs kauzalita nula — učebnicový příklad

Zadání: *„Ahrefs studie (květen 2026) na 1 885 stránkách naměřila u schema markup
nulový až mírně záporný efekt na citace v Google AI Overviews (kolem −4,6 %)."*

**Nejsilnější příběh není „schema nefunguje", ale PROČ to tak dlouho vypadalo, že
funguje:** citované stránky mají schema 3× častěji → vypadá to jako příčina → kauzální
test ale ukáže nulu. **Schema je marker kvalitních webů, ne příčina citací.**

Konsoliduje téma, na které jsem narazil ve 3 článcích (organization-schema, URL, CWV),
ale nikde ho nedal celé. Tenhle je ten hub.

---

## Kolizní kontrola (2026-07-25)

| Existující článek | Co má | Hranice |
|---|---|---|
| `strukturovana-data-pro-ai` | typy, JSON-LD, validace, časté chyby — **NE studie/kauzalitu** | rodič „jak na schema"; tenhle je „co říká evidence" |
| `organization-schema-pro-znacku` | Organization + zmínka Search Atlas | jeden typ; tady celý evidence obrázek |
| `konec-faq-rich-results` | FAQ rich results deprecation | jiný aspekt schématu |
| `aeo-geo-je-porad-seo` | Google guide (bez speciálního schématu) | primární zdroj, odkázat |
| `pr-pro-ai-citace` | 680M citací syntéza, korelace vs jmenovatel | příbuzná skepse k číslům |

→ **Studie schema→citace nikdo neřeší jako téma.** `strukturovana-data-pro-ai` má H2
typy/validace/chyby, žádná evidence sekce. Čistý spoke.

## ✅ OVĚŘENO — Ahrefs kauzální studie (2026-07-25, web search)

**Korelační fáze:**
- analýza **6 milionů URL**
- citované stránky měly JSON-LD **skoro 3× častěji** než necitované
- → vypadá to, že schema = citace

**Kauzální fáze (tohle je pointa):**
- **1 885 stránek**, které přidaly JSON-LD mezi **srpnem 2025 a březnem 2026**
- ke každé **3 kontrolní URL z jiných domén** s podobnou úrovní citací, ale bez schématu
- celkem **4 000 kontrolních stránek**
- měřeno napříč Google AI Overviews, AI Mode, ChatGPT
- **výsledek: žádný významný nárůst citací na žádné platformě.** U Google AI Overviews
  dokonce **−4,6 % pokles** citací u ošetřených stránek oproti kontrole (statisticky notable)

**Klíčový výklad (Ahrefs):** vysoká korelace není kauzalita — AI systémy preferují
**dobře udržované, autoritativní weby, které schema už tak mají.** Schema je příznak
kvalitního webu, ne příčina citace.

## ✅ DOPLŇUJÍCÍ EVIDENCE (z předchozích runů, ověřeno)
- **Search Atlas:** pokrytí schématem vs výskyt v odpovědích OpenAI/Gemini/Perplexity,
  5 pásem → rozdělení viditelnosti prakticky totožné (žádná korelace).
- **Google guide 15. 5. 2026:** „není žádné speciální schema.org značkování, které
  potřebujete přidat" pro AI funkce.
- ⚠️ Search Atlas i Ahrefs jsou dodavatelé nástrojů — ale Ahrefs udělal kauzální
  (ne jen korelační) test, což je metodicky silnější. Přiznat, ale nepodkopávat.

## ✅ K ČEMU SCHEMA POŘÁD SLOUŽÍ (poctivá druhá strana — NESMÍ chybět)
Článek nesmí sklouznout do „schema je k ničemu". Schema má doložené jiné využití:
- **Klasické rich results** — hvězdičky (Review/AggregateRating), cena/dostupnost
  (Product), recept, event. To je o vzhledu v SERP, ne o AI citaci.
  ⚠️ ALE: FAQ a HowTo rich results Google 2026 osekal (viz konec-faq-rich-results).
- **Strojová čitelnost a rozlišení identity** — Organization/Person pomáhají strojům
  správně pochopit, kdo jste (viz organization-schema).
- **Konzistence** — schema nutí sladit data s viditelným textem.
→ Vzkaz: **dělejte schema, kde má doložený smysl (rich results, identita), ne jako
páku na AI citace.** To není rozpor s ostatními články webu, je to jejich upřesnění.

## Struktura (analysis, bez howto)
1. Krátká odpověď (schema AI citacím prokazatelně nepomáhá; korelace klame)
2. Proč to vypadalo, že pomáhá (korelace 3×) — a proč je to past
3. Co ukázal kauzální test (1 885 / 4 000 / −4,6 %) — CompareTable korelace × kauzalita
4. Proč korelace klame: schema je marker kvality, ne příčina (Insight key)
5. Druhá strana: k čemu schema pořád slouží (rich results, identita) — NE citace
6. Co s tím dělat (rozhodnutí: dělej schema kde má SERP/identita smysl)
7. Chyby (MistakeGrid 4×)
8. Závěr = rozhodnutí

## ⛔ NETVRDIT
- že schema je k ničemu (má doložené jiné využití)
- že −4,6 % znamená „schema škodí citacím" (je to blízko nuly / statistický šum směrem dolů,
  hlavní zjištění je NULOVÝ přínos, ne škoda) — formulovat opatrně
- že to platí i pro český trh jako změřený fakt (studie mezinárodní)
- že Ahrefs/Search Atlas jsou nezaujatí (jsou to dodavatelé) — ale Ahrefs = kauzální test
- vlastní čísla
- že ostatní články webu (co doporučují schema) jsou špatně — schema má jiný účel

## Hranice
- **Neřeší, jak schema nasadit** → [strukturovana-data-pro-ai](/blog/strukturovana-data-pro-ai/)
- **Neřeší Organization detailně** → [organization-schema-pro-znacku](/blog/organization-schema-pro-znacku/)
- **Neřeší FAQ rich results konec** → [konec-faq-rich-results](/blog/konec-faq-rich-results/)
- **Neřeší, co říká Google guide** → [aeo-geo-je-porad-seo](/blog/aeo-geo-je-porad-seo/)
- **Neumí říct český stav** — studie jsou mezinárodní

## Brand voice
- „schema markup" → **strukturovaná data / schema (značkování)**; „causal" → **kauzální**
- „correlation" → **korelace**; „control group" → **kontrolní skupina**
- čísla česky: 6 milionů, 1 885, 4 000, −4,6 %, 3×
- answer 40–60 slov, začíná definicí/odpovědí

## Interní odkazy (ověřeno 2026-07-25, všech 5 existuje)
`/blog/strukturovana-data-pro-ai/` · `/blog/organization-schema-pro-znacku/` ·
`/blog/konec-faq-rich-results/` · `/blog/aeo-geo-je-porad-seo/` · `/blog/jak-ai-cituje-zdroje/`

## CTA
Žádná prodejní. De-hype článek o tom, že jeden „trik" nefunguje — prodejní CTA by
byla mimo. Závěr = rozhodnutí, kdy schema ano (rich results, identita) a kdy ne (citace).
