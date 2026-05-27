# Research — claude gemini seo (slug: claude-gemini-seo)

**Kategorie:** tutorial · **Rok:** 2026 · **Run:** #16 · **Datum:** 2026-05-27

## Cílové KW
- claude gemini seo (hlavní)
- optimalizace pro claude
- optimalizace pro gemini
- jak se dostat do claude
- gemini citace
- claude citace
- ai platformy seo

## Pozice v obsahu webu
- Doplňuje platformovou sadu: chatgpt-seo + perplexity-seo + google-ai-mode + **tento (Claude + Gemini)** = úplná sada.
- Propojit s ai-crawler-robots-txt (řízení crawlerů), e-e-a-t-pro-ai (reputace), ai-brand-mentions (recenze/zmínky).
- Kategorie tutorial → CTA Pack + Audit.

## Klíčová fakta (WebSearch 2026-05-27, % hedovat jako "podle dostupných analýz")
- **Gemini** je „grounded" v Google Search — staví na tom, co Google indexuje a hodnotí; preferuje autoritativní/oficiální zdroje. Cesta k citaci: stránka, kterou Google umí procházet a hodnotit + extrahovatelné sekce + strukturovaná data + čerstvé zdroje.
- **Claude** (rámec Constitutional AI) podle analýz víc váží recenze a uživatelsky ověřený obsah → reputační signály u něj hrají větší roli (hedovat — korelace, ne potvrzený mechanismus).
- **Reddit** je podle souhrnných analýz nejcitovanější zdroj napříč AI (~40 %); top 15 domén ~68 % citací (hedovat).
- AI-citovaný obsah bývá ~25,7 % čerstvější než klasický organik (hedovat).
- Společný základ pro Claude i Gemini: crawlovatelnost, jasná struktura, extrahovatelné pasáže, strukturovaná data, čerstvost, důvěryhodnost.

## Crawlery (PŘESNĚ — ověřit, nedělat chybu)
- **Anthropic = 3 boti:** `ClaudeBot` (tréninkový crawler), `Claude-User` (načte stránku, když se uživatel na něco Clauda zeptá), `Claude-SearchBot` (webové vyhledávání Clauda). Všichni respektují robots.txt, čtou **jen HTML zdroj bez JS renderingu**.
- **Google-Extended:** řídí použití obsahu pro **Gemini (trénink/grounding)**, **NEOVLIVŇUJE** Search ranking. Indexaci a hodnocení dělá Googlebot. → Blokace Google-Extended = opt-out z Gemini, ale stránka pořád může rankovat ve Vyhledávání.
- Praktický důsledek: JS-heavy obsah, který se nevykreslí v HTML, AI crawlery nemusí vidět.

## Praktické kroky (jádro how-to)
1. **Crawlovatelné HTML** — důležitý obsah v HTML, ne jen v JS; rychlý a čistý web.
2. **Extrahovatelné pasáže + strukturovaná data** — jasné sekce, krátká odpověď, Article/FAQPage.
3. **Pro Gemini:** kvalitní klasické SEO (Gemini stojí na Google Search) + autoritativnost.
4. **Pro Claude:** reputace a recenze — zmínky, hodnocení, ověřitelná důvěra.
5. **Čerstvost a zdroje** u tvrzení.
6. **Řízení přístupu** v robots.txt vědomě (ClaudeBot, Google-Extended) — vědět, co blokace znamená.

## Co NEdělat / mýty
- Blokovat Google-Extended s vírou, že to ovlivní ranking — neovlivní (jen Gemini grounding/trénink).
- Spoléhat na JS-rendering — AI crawlery čtou hlavně HTML.
- Brát Claude/Gemini jako jednu věc — liší se v důrazech (Gemini ↔ Google Search/autorita, Claude ↔ reputace/recenze).

## FAQ kandidáti
- Jak se dostat do odpovědí Gemini?
- Jak se dostat do odpovědí Claude?
- Liší se optimalizace pro Claude a Gemini?
- Co je Google-Extended a mám ho blokovat?
- Které crawlery používá Claude?
- Vidí AI crawlery obsah načítaný JavaScriptem?

## Interní odkazy (ověřit 200 před publikací)
- /blog/chatgpt-seo/ · /blog/perplexity-seo/ · /blog/google-ai-mode/ (platformová sada)
- /blog/ai-crawler-robots-txt/ (řízení crawlerů) · /blog/e-e-a-t-pro-ai/ (reputace/důvěra)
- /blog/ai-brand-mentions/ (recenze/zmínky) · /blog/seo-pro-ai/ (hub) · /blog/ai-seo-audit/ (CTA)

## CTA
- tutorial → AI SEO Wireframe Pack (1 490 Kč) + AI SEO audit (9 990 Kč)

## Zdroje
- support.claude.com (Anthropic crawler docs), searchengineland.com, searchenginejournal.com (3 boti)
- Google dokumentace (Google-Extended vs Search ranking), yext.com (jak AI cituje), oltre.ai (Gemini citace)
- prnewswire/5W AI Platform Citation Source Index 2026 (Reddit #1, koncentrace zdrojů)
