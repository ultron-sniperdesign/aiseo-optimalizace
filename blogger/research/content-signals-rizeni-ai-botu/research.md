# Research — content signals rizeni ai botu (PRIORITA B)

**Řádek plánu:** `content signals rizeni ai botu` · „Content Signals: řízení AI botů podle účelu, ne podle jména" · `tutorial` · cíl vydání do 8. 9. 2026 · run 2. 9. 2026
**Podklad:** `_source/_keyword-research/trend-ai-vyhledavani-20260902/insights.md`. Pravidlo série: fakta u primárního zdroje (Cloudflare, provozovatelé botů).

## Ověření u zdroje — co sedí, co je jinak než ve shrnutí

| Tvrzení ze shrnutí | Primární zdroj | Výsledek |
|---|---|---|
| Cloudflare rozšířil robots.txt o Content Signals (účel místo jména) | Cloudflare blog *Content Signals Policy*, **24. 9. 2025**: syntaxe `Content-Signal: search=yes, ai-train=no` ve skupině `User-Agent: *`; tři signály: **search** („building a search index and providing search results (e.g., returning hyperlinks and short excerpts"), **ai-input** („inputting content into one or more AI models (e.g., retrieval augmented generation, grounding"), **ai-train** („training or fine-tuning AI models"); neuvedený signál = „neither grants nor restricts permission"; licence CC0 | **sedí, ale není to novinka roku 2026** — politika je z 24. 9. 2025; ve shrnutí to nebylo datované |
| nasazeno na ~3,8 mil. domén | tamtéž: „Cloudflare customers have already turned on our managed robots.txt feature for over 3.8 million domains" s výchozím `search=yes, ai-train=no` (bez `ai-input`) | **sedí** — číslo je ze září 2025, novější Cloudflare neuvádí |
| míří ke standardizaci do IETF AIPREF | Cloudflare blog zmiňuje AIPREF; IETF: `draft-ietf-aipref-vocab-06` (28. 4. 2026, expirace 30. 10. 2026, Proposed Standard track; kategorie `train-ai`, `search`), `draft-ietf-aipref-attach-04` (28. 10. 2025, propadlý, milník IESG srpen 2026 bez nové revize) | **sedí s upřesněním**: AIPREF má **jiný slovník** (`Content-Usage: train-ai=n`) než Content Signals — nejsou to totéž |
| — (nové oproti shrnutí) | Cloudflare blog *Your site, your rules*, **1. 7. 2026**: nový parametr **`use=`** — `immediate` („interact, but store and reuse nothing"), `reference` (výchozí; „index, excerpt, and link back"), `full` („summarize and reproduce"); příklad `Content-Signal: search=yes,ai-train=no,use=reference`; „bots that reproduce in full cannot have the Verified status"; „the values of content use signal a website owner's preference, rather than issuing blocks directly" | **doplnit** — shrnutí to nemělo |
| — | Cloudflare docs *Managed robots.txt*, aktualizace **3. 8. 2026**: injektuje `Content-signal: search=yes, ai-train=no, use=reference` pod `User-Agent: *`; „Cloudflare will prepend our managed robots.txt before your existing robots.txt, combining both into a single response"; „robots.txt compliance is voluntary" | **doplnit** — praktické chování managed verze |
| tréninkový ≠ vyhledávací robot | OpenAI docs *Bots*: „OAI-SearchBot is used to surface websites in search results in ChatGPT's search features. Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links."; „Disallowing GPTBot indicates a site's content should not be used in training generative AI foundation models."; ChatGPT-User: „robots.txt rules may not apply". Anthropic (7. 4. 2026): ClaudeBot — „collecting web content that could potentially contribute to their training"; Claude-SearchBot — „improve search result quality for users"; Claude-User — dotazy uživatelů; „Anthropic's Bots respect 'do not crawl' signals by honoring industry standard directives in robots.txt." | **sedí** |
| — (klíčové, ve shrnutí chybí) | **Kdo Content Signals respektuje:** OpenAI ani Anthropic je ve své dokumentaci nezmiňují. John Mueller (Google) na Redditu, dle Search Engine Roundtable 6. 7. 2026: direktiva má „no effects whatsoever for any crawler or LLM" a „just adds bloat & future maintenance"; neví o žádném crawleru ani LLM, který by ji potvrdil. Vymáhání existuje jen uvnitř Cloudflare: Verified Bots, které signály ignorují nebo obsah reprodukují celý, mohou přijít o status | **nejdůležitější věta článku** — Content Signals je dnes jazyk pro vyjádření preference, ne přepínač |
| — | Vlastní robots.txt webu (živě 2. 9. 2026): řídí přístup jmény (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Google-Extended…), Content Signals nepoužívá | vlastní příklad pro poctivost |

## Úhel (tutorial)

Content Signals je **doplněk** jmen v robots.txt, ne náhrada — a k 2. 9. 2026 ho žádný velký provozovatel botů veřejně nepotvrdil. Návod tedy: (1) proč jména nestačí (trénink ≠ vyhledávání, každý provozovatel má dva až tři roboty a nové přibývají), (2) co Content Signals umí vyjádřit a jak přesně se zapisuje, (3) jak to zkombinovat se jmény tak, aby web povolil citace a omezil trénink, (4) co se stane, když to nikdo nečte (nic — a proto je to bezpečné přidat, ale nebezpečné na to spoléhat), (5) jak ověřit, že se nerozbila indexace.

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `ai-crawler-robots-txt` (admin 2. 9. doplnil odstavec o Content Signals + varování k AIPREF) | základ: jména robotů, tabulka, Google-Extended, AIPREF | odkázat jako základ; nepřepisovat tabulku botů ani AIPREF; tady jen syntaxe a praxe Content Signals |
| `cloudflare-ai-bot-blocking` | Cloudflare bot management: kategorie Search/Agent/Training, změna od 15. 9. 2026 | jiná vrstva (nastavení v Cloudflare, ne v robots.txt); jedna věta + odkaz |
| `vydelavat-na-ai-robotech` | pay-per-crawl | mimo téma; nezmiňovat |
| `roboti-vyvolani-uzivatelem` | fetchery spouštěné uživatelem (robots.txt neplatí) | odkaz u ChatGPT-User / Claude-User |
| `llms-txt-navod`, `llms-txt-falesne-pozitivni` | llms.txt | jedna věta: Mueller ve stejném vlákně odmítl i llms.txt |

## Struktura článku

1. Krátká odpověď.
2. Proč řízení podle jmen nestačí (dva až tři roboti na provozovatele; nové přibývají; user-agent se dá zfalšovat).
3. Co Content Signals je: tři signály + `use=`, přesná syntaxe, neuvedený = neutrální, CC0.
4. Kdo to čte — poctivě: nikdo z velkých to nepotvrdil; Cloudflare vymáhá jen u Verified Bots.
5. Návod: robots.txt, který povolí citace a omezí trénink — jména + Content Signals dohromady (ukázka).
6. Ověření: že se nerozbila indexace (robots.txt tester, GSC Indexování stránek, logy, `curl`).
7. Vztah k AIPREF (jiný slovník, draft) a k nastavení v Cloudflare — jen odkazy.
8. Časté chyby.

## Limity
- Nepsat, že Content Signals nahrazuje jména. Nepsat, že „funguje" — funguje jako vyjádření preference.
- Čísla: 3,8 mil. je ze září 2025; uvést s datem.
- Datovat stav (2. 9. 2026): podpora provozovatelů se může změnit.
