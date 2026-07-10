# Research — Jak ChatGPT, Perplexity a Google AI vybírají a citují zdroje

**Datum:** 2026-06-11
**Cílová kategorie:** analysis
**Slug:** `jak-ai-cituje-zdroje`
**Cílové KW:** jak ai cituje zdroje / jak ai vybira zdroje / ai citace rozdily / chatgpt perplexity citace

## 1. Kontext — proč to řešit

- Každá AI platforma cituje **jinak**. Optimalizace na jednu ≠ optimalizace na druhou.
- Analýza 680 mil. citací napříč ChatGPT, Google AI Overviews a Perplexity: **jen 11 % domén cituje ChatGPT i Perplexity současně**. Každá platforma má fundamentálně jinou citační logiku. (Profound, 2026 — marketingový zdroj, hedge)
- Pro tvůrce: nestačí "být dobrý", je potřeba rozumět, co která platforma preferuje.

## 2. ChatGPT — encyklopedický, Wikipedia-shaped

- **Preferuje Wikipedia** (~47,9 % top zdrojů), encyklopedický, faktický obsah.
- **Cituje méně viditelně** — extrahuje hlouběji z vybraných zdrojů, silná komprese při syntéze.
- **Citace jen při zapnutém web search** — a i tak méně konzistentně než Perplexity.
- **Charakteristika obsahu, který cituje:** faktický, dobře strukturovaný, encyklopedický, s jasnými definicemi.
- **Autorita > čerstvost** (na rozdíl od Perplexity).

## 3. Perplexity — čerstvost + Reddit

- **Vždy cituje s číslovanými odkazy** — default, nelze vypnout.
- **Nejvíc citací per odpověď** — průměr ~21,87 citací (nejvíc ze všech platforem).
- **Preferuje Reddit** (~46,7 % citací) a **velmi čerstvý obsah**.
- **Čerstvost je nejsilnější signál:**
  - Obsah aktualizovaný za posledních 30 dní = ~3,2× vyšší šance na citaci.
  - Perplexity cituje obsah z posledních 30 dní ~82% mírou.
  - Stránka stará 14 dní poráží stránku starou 8 měsíců v 70%+ head-to-head.
  - Rok v titulku ("2026") zvyšuje citace ~o 30 %.
- **RAG pipeline se 6 fázemi:** dokument musí projít semantickou relevancí, čerstvostí, strukturální kvalitou, autoritou, engagementem než získá citaci.

## 4. Google AI Overviews — Search index + autorita

- **Staví na Google Search indexu** obohaceném o signály autority.
- **Klesající závislost na top-10 organic:**
  - Polovina 2025: 76 % AI Overview citací z top-10 organic.
  - Začátek 2026: ~38 % (Ahrefs), až 17 % (BrightEdge).
  - Roste vliv: semantic completeness, strukturovaná data, E-E-A-T, multimodální obsah — nezávisle na pozici v rankingu.
- **RAG nad Search indexem** (viz Google guide květen 2026).
- **Charakteristika:** kombinuje klasické SEO signály + AI výběr; pozice v SERP už není záruka.

## 5. Claude — autorita + intelektuální poctivost

- **Preferuje autoritu a intelektuální poctivost.**
- Méně web search než Perplexity/ChatGPT, ale roste.
- Charakteristika: kvalitní, vyvážený, nuancovaný obsah.

## 6. Gemini — Google ekosystém

- Napojený na Google index a Knowledge Graph.
- Konverzační, různá míra odkazů.

## 7. Srovnávací tabulka (jádro článku)

| Platforma | Hlavní signál | Cituje s odkazy? | Preferovaný typ zdroje | Poznámka |
|---|---|---|---|---|
| ChatGPT | Autorita, encyklopedičnost | Někdy (jen web search) | Wikipedia, faktický obsah | Silná komprese, méně citací |
| Perplexity | Čerstvost | Vždy, číslované | Reddit, velmi čerstvý obsah | Nejvíc citací; 30 dní klíčové |
| Google AI Overviews | Search index + autorita + E-E-A-T | Ano, s odkazy | Web index, strukturovaná data | Klesá závislost na top-10 |
| Claude | Autorita, poctivost | Méně často | Kvalitní vyvážený obsah | Roste |
| Gemini | Google ekosystém | Různě | Google index + Knowledge Graph | Konverzační |

## 8. Praktické důsledky pro tvůrce

### Univerzální (funguje napříč)
- **Kvalitní, faktický, unikátní obsah** — základ všude.
- **Strukturovaná data** — pomáhá extrakci napříč platformami.
- **Jasná struktura** — nadpisy, krátké úseky, definice.
- **Autorita značky a autora** — E-E-A-T.

### Platformově specifické
- **Pro ChatGPT:** encyklopedický, faktický, dobře strukturovaný; Wikipedia/Wikidata přítomnost.
- **Pro Perplexity:** čerstvost (aktualizovat, rok v titulku), přítomnost na Redditu.
- **Pro Google AI Overviews:** klasické SEO + strukturovaná data + E-E-A-T; nespoléhat jen na pozici.
- **Pro Claude:** vyvážený, poctivý, kvalitní obsah.

### Klíčový závěr
- **Nestačí optimalizovat na jednu platformu** (jen 11 % překryv domén).
- Diverzifikovat: kvalitní obsah + čerstvost + strukturovaná data + off-page (Reddit, Wikipedia) + autorita.

## 9. CZ specifika

- Testovat citace **v každé platformě samostatně** (viz test-viditelnosti-v-ai).
- Pro CZ trh doplnit **Seznam Asistent** (od května 2026 beta, český kontext).
- Čeština: rok v titulku funguje i česky ("2026").

## 10. Odlišení od platformových článků

- Tento článek = **srovnávací přehled** citační logiky napříč platformami (hub).
- Propojuje: chatgpt-seo, perplexity-seo, google-ai-mode (platformové návody).
- Odlišit: tady ne "jak na jednu", ale "jak se liší a co to znamená".

## 11. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec"
- "garantujeme" → "může zvýšit", "podle analýz"
- "bot/crawler" → "vyhledávací robot"
- "AIO" → "Google AI Overviews"
- "RAG" → "Retrieval-augmented generation (RAG)" s vysvětlením
- "head-to-head" → "přímé srovnání"
- "semantic completeness" → "sémantická úplnost"
- "reranker" → "přeřazovací model" / vysvětlit
- "engagement" → "míra zapojení uživatelů"
- "Wikipedia-shaped" → "encyklopedicky laděný"
- Marketingová čísla (47,9 %, 46,7 %, 3,2×, 82 %, 30 %, 11 %, 76→38→17 %) → HEDGE "podle dostupných analýz"

## 12. CTA pozice

- Analysis → **primárně Audit 9 990 Kč** (posoudí, jak vás cituje každá platforma).
- Sekundárně **Pack 1 490 Kč** (DIY checklist pro citovatelnost napříč platformami).
- Transparentní: Sniperdesign dělá AI audity napříč platformami.
