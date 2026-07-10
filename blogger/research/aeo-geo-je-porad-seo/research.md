# Research — AEO/GEO je pořád SEO (Google AI optimization guide 2026)

**Datum:** 2026-06-11
**Cílová kategorie:** analysis
**Slug:** `aeo-geo-je-porad-seo`
**Cílové KW:** aeo geo seo / google ai optimization guide / oficialni google ai navod / ai search seo

## 1. Co Google 15. května 2026 vydal

- **Datum publikace:** 15. května 2026.
- **Poslední update:** 29. června 2026 (podle dostupných zdrojů).
- **URL:** `developers.google.com/search/docs/fundamentals/ai-optimization-guide`
- **Nová sekce:** „Generative AI fundamentals" v Search Central dokumentaci.
- **Název:** „Optimizing your website for generative AI features on Google Search".
- Blog post: `developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing`.

## 2. Klíčové věty Googlu

Otázka: „Je SEO stále relevantní pro generativní AI vyhledávání?"

Odpověď Googlu: **„In short, yes!"**

Konkrétní citace z guide:
- „The same index and quality signals that earn rankings are what earn citations in AI answers."
- „AEO stands for answer engine optimization and GEO for generative engine optimization. These are both terms you may see used to describe work specifically focused on improving visibility in AI search experiences. From Google Search's perspective, optimizing for generative AI search is optimizing for the search experience, and thus still SEO."

## 3. Co Google explicitně říká, že NEMUSÍTE dělat

- **NEmusíte vytvářet nové machine-readable soubory** (žádný „AI text file").
- **NEmusíte přidávat speciální markup nebo Markdown** pro AI Overviews.
- **NEmusíte speciální strukturovaná data** pro AI Overviews / AI Mode.
- **NEmusíte lámat obsah na krátké úseky** („no requirement to break your content into tiny pieces").
- **Není „ideal page length"** — Google explicitně říká, že jeho systémy nemají ideální délku stránky.
- **NEmusíte psát specifickým způsobem** jen pro AI search.

## 4. Co Google říká, že MUSÍTE dělat

Technické požadavky pro zobrazení jako supporting link v AI Overviews / AI Mode:
1. **Stránka musí být indexovaná.**
2. **Stránka musí být eligible pro zobrazení v Search s snippetem.**
3. **Splnit Search technical requirements.**

Obsahové doporučení:
- **Valuable, unique, non-commodity content** (unikátní obsah, ne shovel-ware).
- **People-first content** (helpful content update principles).
- **Unique point of view** (vlastní úhel pohledu).
- **Organizace obsahu** pomáhající čtenářům (nadpisy, obrázky, video).

## 5. Jak Google technicky vysvětluje AI Overviews

**RAG (Retrieval-augmented generation):**
- Google AI Overviews a AI Mode používají RAG.
- Znamená to: LLM při generování odpovědi retrieval z **standardního Search indexu** čerpá relevantní čerstvé stránky.
- Kvalita, čerstvost a relevance = **stejný scoring systém** jako klasické Search rankings.
- Pro publisher = pokud stránka rankuje v běžném Google Search, může se objevit i v AI Overviews.

## 6. Co Google říká vs. praxe (kritický pohled)

### Google má pravdu v tom, že:
- Pro **Google AI Overviews / AI Mode** je to SEO. Fundamentální ranking signály (kvalita, autorita, technický stav, čerstvost) fungují stejně.
- **Není nutné implementovat llms.txt, WebMCP nebo custom AI markup**, aby stránka byla v Google AI Overviews vidět.
- **Není třeba speciálně psát pro AI Overviews.** Kvalitní SEO obsah funguje.

### Google ale NEMLUVÍ o:
- **ChatGPT (OpenAI)** — Google nemá kontrolu nad tím, co OpenAI/ChatGPT preferuje. GPTBot má vlastní pravidla.
- **Perplexity, Claude, Gemini konkurenti** — každý má vlastní citační logiku.
- **Reddit, Wikipedia, LinkedIn** = ale ostatní AI systémy (nejen Google) je vážou výrazně silněji než klasické SEO (viz analýzy Profound, LLM Pulse).
- **Off-page brand mentions** — pro AI citace mimo Google jsou často důležitější než klasické backlinks.
- **llms.txt** — Google to nedoporučuje, ale některé experimentální nástroje (Lighthouse Agentic Browsing, ChatGPT plugin) ho podle dostupné dokumentace kontrolují.

### Nuance:
Google je v pozici **výrobce vyhledávače** — jeho návod platí pro **jeho vlastní AI features**. Ale AI ekosystém je širší. **AEO/GEO praxe** (llms.txt, listy s konkrétními čísly, FAQ struktura, brand entity, off-page mentions) může pomoct **v citacích mimo Google** — a to Google z podstaty věci nemůže potvrdit ani vyvrátit.

## 7. Interpretace pro CZ tvůrce

**Když cílíte primárně na Google AI Overviews:**
- Klasické SEO stačí. Fundamentály (rychlost, mobilní zobrazení, strukturovaná data pro rich results, kvalitní obsah, autorita) = funguje.
- Speciální llms.txt / WebMCP / AI-specifický markup **není nutný** podle Googlu.

**Když cílíte i na ChatGPT, Perplexity, Claude, Gemini:**
- Google návod nekryje. Praxe ukazuje, že tyto systémy citují odlišně (více Reddit, Wikipedia, LinkedIn).
- **AEO/GEO praxe** (krátké citovatelné úseky, FAQ, konkrétní čísla, brand entity) může pomoct.
- Vyplatí se **testovat** v každém systému samostatně.

**Pragmatický závěr:**
- Google má pravdu, že fundamentální SEO je základ.
- AEO/GEO ale není buzz — jsou to konkrétní taktiky, které pomáhají v širším AI ekosystému mimo Google.
- **Neřešit oboje jako protiklad**: dobré SEO + AEO/GEO taktiky = redundantní pojistka.

## 8. Co Google guide NEDOPORUČUJE explicitně (ale AEO/GEO komunita ano)

| AEO/GEO taktika | Google guide říká | Reálný stav |
|---|---|---|
| llms.txt | Není nutný | Funguje jako signál pro některé nástroje mimo Google |
| Speciální AI markup | Není nutný | Použití existujícího schema.org typu FAQPage, HowTo funguje pro rich results i AI |
| Ideal page length | Neexistuje | Krátké 50-150 slov úseky se citují AI mimo Google výrazně častěji (podle analýz) |
| Speciální psaní pro AI | Není nutné | Otázky/odpovědi (FAQ struktura) v praxi zvyšují citovatelnost |
| Krátké úseky obsahu | Není nutné | Pro ChatGPT/Perplexity funguje častěji |

## 9. Metodické poznámky

- **Nezaměňovat AEO/GEO s black-hat.** AEO/GEO praxe je legitimní SEO, jen s důrazem na AI-friendly formát.
- **Google guide je aktualizovaný** — 29. června 2026 už měl update. Konkrétní věty se mohou měnit.
- **Google vs. reality gap** — Google z principu podceňuje význam mimo-google AI systémů, protože nad nimi nemá kontrolu.

## 10. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec", "přístup"
- "garantujeme" → "může pomoci", "často"
- "bot/crawler" → "vyhledávací robot"
- "AIO" → "Google AI Overviews"
- "RAG" → "Retrieval-augmented generation (RAG)" při prvním výskytu
- "supporting link" → "podpůrný odkaz"
- "eligible" → "splňuje podmínky"
- "shovel-ware" → "obsah bez přidané hodnoty"
- "commodity content" → "obsah, který se dá najít kdekoliv"

## 11. CTA pozice

- Analysis → **primárně Audit 9 990 Kč** (posoudí, jestli váš web splňuje Google i mimo-google požadavky).
- Sekundárně **Pack 1 490 Kč** (DIY checklisty pro SEO + AEO/GEO).
- Transparentní pozice: Sniperdesign nedělá čistě „AEO/GEO buzzword" — dělá kvalitní SEO s ohledem na AI ekosystém.
