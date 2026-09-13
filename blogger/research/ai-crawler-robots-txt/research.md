# Research — AI roboti a robots.txt (slug: ai-crawler-robots-txt)

**Datum:** 2026-05-24 · **Kategorie:** tutorial (+ howto) · **Run:** devátý ostrý dle CONTENT_WORKFLOW.md

## Pozicování / odlišení
- Odlišit od `jak-vypnout-ai-overview` (Google AIO ve výsledcích) — tenhle = přístup robotů k webu napříč AI službami.
- Tutorial + howto, robots.txt ukázky, poctivě o llms.txt.

## Klíčová fakta (WebSearch 2026-05)
- OpenAI: GPTBot (trénink), OAI-SearchBot (vyhledávání/citace), ChatGPT-User (na vyžádání).
- Anthropic: ClaudeBot (trénink), Claude-User (na vyžádání), Claude-SearchBot (kvalita vyhledávání).
- Perplexity: PerplexityBot (sběr dat/odpovědi), Perplexity-User.
- Google-Extended: ovládá trénink Gemini; **blokace NEovlivní pozice v Google Search** (řeší Googlebot).
- CCBot (Common Crawl), Bytespider (ByteDance) — Bytespider ~90 % AI crawler trafficu 2024, **ignoruje robots.txt**.
- robots.txt = dobrovolná žádost, ne zámek → pro tvrdé blokování server/firewall/CDN.
- **llms.txt NENÍ access control**; podle dostupných info nemá k 2026 materiální efekt na AI retrieval.

## Interní linky
/blog/chatgpt-seo/, /blog/jak-vypnout-ai-overview/, /blog/ai-seo-audit/, /blog/seo-pro-ai/, /pack/, /audit/.

## Zdroje (WebSearch)
- robotstxt.com/ai, paulcalvano AI bots and robots.txt, soar.sh ai-bots-robots-txt-guide, almcorp Anthropic three-bot, docs.perplexity.ai crawlers, momentic AI search crawlers, nohacks AI user-agent landscape 2026

---

# Refresh 13. 9. 2026 — role AI robotů napříč korpusem

**Spouštěč:** předaná oprava B5 z revize webu (`_source/_keyword-research/revize-sekci-20260905/CHECKLIST.md`, z revize `/geo/` 7. 9. 2026): hub řadil `Claude-User` k `ChatGPT-User`, jako by se na něj robots.txt nemusel vztahovat; token `anthropic-ai` mimo oficiální dokumentaci.

## Metoda
1. **Ověření u primárních zdrojů** — šest nezávislých agentů (Anthropic 2× z opačných stran, OpenAI, Perplexity, Google, Apple/Common Crawl/Amazon/Meta), jen WebFetch a jen dokumentace provozovatele. Klíčové citace pak ještě jednou ručně v prohlížeči (13. 9. 2026).
2. **Audit 19 článků**, které roboty zmiňují, proti ověřeným faktům → 96 nálezů.
3. **Protiprověření** — každý nález tři skeptici s pokynem nález vyvrátit; přežil jen s aspoň 2 hlasy ze 3. **60 přežilo, 36 vyvráceno.**
4. Opravy 13 navazujících článků: editor na soubor → nezávislý recenzent diffu → doladění. Hub přepsaný ručně.
5. Závěrečná kontrola všech 15 diffů čerstvým pohledem + 2 skeptici na blokující nálezy (1 potvrzený, opraven).
6. 2× audit gpt-5.5 na hub, jazykový průchod gpt-5.4 na všechny změny, checker 0 ve všech 15 souborech.

## Ověřená fakta (doslovně, 13. 9. 2026)
## Anthropic — support.claude.com, „Does Anthropic crawl data from the web…", aktualizováno 7. 4. 2026
- Tři roboti:
  - **ClaudeBot** = trénink. „When a site restricts ClaudeBot access, it signals that the site's future materials should be excluded from our AI model training datasets."
  - **Claude-SearchBot** = vyhledávání. „Disabling Claude-SearchBot on your site prevents our system from indexing your content for search optimization, which may reduce your site's visibility and accuracy in user search results."
  - **Claude-User** = načtení stránky na dotaz uživatele. „Claude-User allows site owners to control which sites can be accessed through these user-initiated requests. Disabling Claude-User on your site prevents our system from retrieving your content in response to a user query, which may reduce your site's visibility for user-directed web search."
- Pro všechny tři: „Anthropic's Bots respect "do not crawl" signals by honoring industry standard directives in robots.txt." Žádnou výjimku pro Claude-User stránka neuvádí.
- Tokeny `anthropic-ai` a `Claude-Web` v aktuální oficiální dokumentaci **nejsou**. Oficiální oznámení o vyřazení jsme nenašli → neříkat „jsou vyřazené", říkat „v aktuální dokumentaci Anthropicu nejsou".
- Podporuje nestandardní Crawl-delay; blokování podle IP nedoporučuje (roboti pak nepřečtou robots.txt).

## OpenAI — developers.openai.com/api/docs/bots
- **GPTBot** = trénink. „It is used to crawl content that may be used in training our generative AI foundation models. Disallowing GPTBot indicates a site's content should not be used in training generative AI foundation models."
- **OAI-SearchBot** = vyhledávání. „OAI-SearchBot is used to surface websites in search results in ChatGPT's search features. Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links. To help ensure your site appears in search results, we recommend allowing OAI-SearchBot…"
- **ChatGPT-User** = načtení na dotaz uživatele. „ChatGPT-User is not used for crawling the web in an automatic fashion. Because these actions are initiated by a user, robots.txt rules may not apply. ChatGPT-User is not used to determine whether content may appear in Search. Please use OAI-SearchBot in robots.txt for managing Search opt outs and automatic crawl."
- **OAI-AdsBot** = kontrola bezpečnosti stránek podaných jako reklama v ChatGPT; „OAI-AdsBot is not used to train generative AI foundation models."
- OpenAI zveřejňuje **čtyři** soubory s IP rozsahy: searchbot.json, adsbot.json, gptbot.json, chatgpt-user.json.

## Perplexity — docs.perplexity.ai (stránka o crawlerech)
- **PerplexityBot** = vyhledávání („designed to surface and link websites in search results on Perplexity. It is not used to crawl content for AI foundation models."), doporučují ho povolit.
- **Perplexity-User** = načtení na dotaz uživatele; web už uvádí, že robots.txt „obvykle ignoruje" — tuto formulaci neměnit.

## Google — google-common-crawlers, aktualizováno 14. 7. 2026
- „Google-Extended is a standalone product token that web publishers can use to manage whether content Google crawls from their sites may be used for **training future generations of Gemini models** that power Gemini Apps and Vertex AI API for Gemini **and for grounding** (providing content from the Google Search index to the model at prompt time to improve factuality and relevancy) **in Gemini Apps and Grounding with Google Search on Vertex AI**. Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."
- Google-Extended **nemá vlastní user agent** — je to řídicí token, ne robot.
- Google-Extended **neřídí** Přehled od AI ani režim AI ve Vyhledávání Google (na ty má Google samostatné nastavení v Search Console).
- User-triggered fetchers (aktualizováno 19. 8. 2026): **devět** (Chrome Web Store, Feedfetcher, Gemini Notebook, Google-Agent, Google Messages, Google Pinpoint, Google Publisher Center, Google Read Aloud, Google Site Verifier). „Because the fetch was requested by a user, these fetchers generally ignore robots.txt rules."

## Apple — support.apple.com/en-us/119829
- „Web publishers can opt-out from having their content used to train generative foundation models by disallowing Applebot-Extended in the robots.txt file." Obsah zůstává dohledatelný přes Spotlight, Siri a Safari.

## Amazon — developer.amazon.com/amazonbot
- „Amazonbot is used to improve our products and services. This helps us provide more accurate information to customers and may be used to train Amazon AI models."

## Obecně
- robots.txt jen zakazuje: robot, kterému žádné pravidlo nic nezakazuje, přístup má. `Allow` je potřeba jen tam, kde je v souboru širší zákaz.
- O citacích ve vyhledávání ChatGPT rozhoduje **OAI-SearchBot**, v Claude **Claude-SearchBot** (a načtení na dotaz **Claude-User**), v Perplexity **PerplexityBot**. **GPTBot a ClaudeBot slouží k tréninku** a o zobrazení ve vyhledávání nerozhodují.
- Žádný z tokenů GPTBot, ClaudeBot, PerplexityBot, Google-Extended neřídí doporučené úryvky ani Přehled od AI ve Vyhledávání Google.

Navíc ověřeno v prohlížeči: Amazon — `Amzn-SearchBot` „does not crawl content for generative AI model training“, `Amzn-User` „may not follow all robots.txt directives“; Perplexity — `Perplexity-User` „Since a user requested the fetch, this fetcher generally ignores robots.txt rules.“; Meta — `Meta-ExternalAgent` „crawls the web for use cases such as training foundation AI models or improving products by indexing content directly“; Common Crawl — „open repository of web crawl data that is universally accessible and analyzable by anyone“.

## Třída vady, kterou sweep odhalil (širší než B5)
Web na řadě míst **radil povolit tréninkové roboty GPTBot a ClaudeBot „kvůli citacím“ a vynechával vyhledávací roboty**, které o citacích skutečně rozhodují (OAI-SearchBot, Claude-SearchBot). Nejhorší `ai-seo-wordpress` (10 míst, včetně „aktuální vyhledávací robot Anthropicu je ClaudeBot“), `geo-optimalizace` (ukázka robots.txt s `anthropic-ai`, GPTBot jako robot vyhledávání ChatGPT), `ai-seo-audit`, `aio-strategie` (povolení tokenů jako krok k doporučeným úryvkům a AIO). Druhá třída: **Google-Extended popsaný jen jako trénink**, přestože řídí i podkládání odpovědí v aplikacích Gemini.

## Co jsem vědomě neměnil
- Tabulky počtů webů s pravidlem pro `anthropic-ai` (měření) — je to naměřený stav cizích souborů, ne doporučení.
- „Bing index“ u ChatGPT v `geo-optimalizace` (tabulka platforem) — jiná otázka než role robotů; korpus ji řešil 8. 8. v `bing-seo-pro-ai`.
- `jak-strukturovat-pillar-content` má `answer` 98 slov (limit 40–60) — starší vada mimo rozsah.
- HowTo JSON-LD z `howto` v hubu — vede se jako otevřený kandidát z 4. 9. (61 článků).
