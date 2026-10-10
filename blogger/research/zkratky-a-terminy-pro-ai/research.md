# Research — zkratky a odborné termíny pro AI

**Řádek plánu:** `zkratky a odborne terminy pro ai` (ř. 144) · **Datum:** 2026-10-10
**Kategorie:** tutorial (sloupec D) · **Tagy:** obsah, strategie · **Slug:** `zkratky-a-terminy-pro-ai`

> **Kolizní kontrola (Z10):** `pasazova-optimalizace-obsahu` (18. 7. 2026) už má pravidlo „zkratku rozepsat
> při prvním použití v sekci“ (ř. 59, 96, 131–133, příklady CTR a GSC) — jako jeden ze šesti bodů pasážového
> psaní. **Nepokrývá:** víceznačné zkratky, odborné termíny bez zkratky, kdy zkratku nerozepisovat, české vs.
> anglické rozepsání, odkaz do slovníku a jeden název pro pojem napříč webem. Řádek proto nesloučen —
> nový článek drží tyhle části a na pasážový článek odkazuje místo opakování základního pravidla.
>
> **Teze z plánu (sloupec C):** „zkratka rozepsaná jen v úvodu stránky je pro vytrženou pasáž
> nesrozumitelná; totéž platí pro interní názvy a žargon.“ **Ověřeno:** Google řadí jednotlivé pasáže (2020),
> systémy, které text dělí na úseky, kontext úvodu ztrácejí (Anthropic 2024), a vlastní měření webu ukazuje,
> jak často rozepsání v sekci chybí. **Nedoloženo:** jak často to konkrétní AI asistent pochopí špatně —
> měření srozumitelnosti pro model jsme nedělali, článek to netvrdí.

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum načtení |
|---|---|---|
| **Dokumentace** | Google *A Guide to Google Search Ranking Systems* (Last updated 2025-12-10): „Passage ranking is an AI system we use to identify individual sections or "passages" of a web page to better understand how relevant a page is to a search.“ — **pasáže kvůli relevanci celé stránky, ne samostatné indexování.** Blog 15. 10. 2020 původně psal „index … individual passages“, 17. 2. 2021 přepsáno (Wayback) → v článku nic o indexování pasáží | developers.google.com/search/docs/appearance/ranking-systems-guide#passage-ranking-system, 10. 10. 2026 |
| | Google *Optimizing your website for generative AI features on Google Search* (Last updated 2026-07-10), mythbusting: „There's no requirement to break your content into tiny pieces for AI to better understand it. Google systems are able to understand the nuance of multiple topics on a page and show the relevant piece to users.“ a „You don't need to write in a specific way just for generative AI search.“ Tamtéž: „'AEO' stands for 'answer engine optimization' and 'GEO' for 'generative engine optimization'.“ → **článek výslovně říká, že rozepisování není požadavek Googlu** | developers.google.com/search/docs/fundamentals/ai-optimization-guide, 10. 10. 2026 |
| | Google *SEO Starter Guide* (Last updated 2025-12-10), „Expect your readers' search terms“: odborník a začátečník hledají jinými slovy (charcuterie × cheese board); „don't worry if you don't anticipate every variation“ | developers.google.com/search/docs/fundamentals/seo-starter-guide#expect-search-terms, 10. 10. 2026 |
| | Anthropic *Introducing Contextual Retrieval* (19. 9. 2024): tradiční RAG dělí dokumenty na úseky; úsek bez kontextu (příklad: tržby „vzrostly o 3 %“ bez firmy a období); doplněný kontext — míra selhání vyhledání (1 − recall@20) **5,7 % → 3,7 %** (contextual embeddings, −35 %), → 2,9 % (+BM25, −49 %), → 1,9 % (+reranking, −67 %). Vlastní testy Anthropicu, ne Google/ChatGPT. Bez otevřené licence → v článku jen parafráze | anthropic.com/engineering/contextual-retrieval, 10. 10. 2026 |
| | W3C WCAG 2.2 (Recommendation 12. 12. 2024): SC 3.1.4 Abbreviations (**AAA**) „A mechanism for identifying the expanded form or meaning of abbreviations is available.“; SC 3.1.3 Unusual Words (AAA); AAA se jako politika pro celý web nedoporučuje (5.2.1 Note 2). Understanding 3.1.4: výjimka jen pro zkratky, které „become part of the language“; jednotka je **stránka** — G102 při prvním výskytu (G97 plný tvar těsně před/za, G55 odkaz na definici), při více významech na stránce u každého výskytu. **„V každé sekci“ ve WCAG není** → v článku podáno jako naše přísnější pravidlo. H28 (`abbr`) jen **advisory** — `title` mnoho user agentů přístupně nezpřístupňuje | w3.org/TR/WCAG22/; w3.org/WAI/WCAG22/Understanding/abbreviations.html; …/Techniques/general/G97, G55, G102; …/Techniques/html/H28 — 10. 10. 2026 |
| | Celní správa ČR: „Oprávněný hospodářský subjekt (AEO)“ — status podle celního kodexu Unie (nařízení (EU) č. 952/2013, čl. 38–39). Evropská komise: *Authorised Economic Operator (AEO) programme* | celnisprava.gov.cz/cz/clo/e-customs/opravneny-hospodarsky-subjekt-aeo/Stranky/default.aspx; taxation-customs.ec.europa.eu/customs/authorised-economic-operator/programme_en — 10. 10. 2026 |
| | Bing Webmaster Guidelines §16: „Use clear and consistent naming for people, organizations, products, and locations“; §15: „Facts and definitions are explicit; Key statements do not rely on implied content“ (§15 se týká celé stránky, ne pasáže) | bing.com/webmasters/help/webmaster-guidelines-30fba23a, 10. 10. 2026 (ověřil agent v prohlížeči) |
| | **Interní záznamy webu:** pravidlo „rozepsat zkratku při prvním použití v sekci“ publikováno v `pasazova-optimalizace-obsahu` (frontmatter `published: "2026-07-18"`); kořenový `CLAUDE.md` § VI: „grep na ‚AI SEO audit‘ minul variantu **‚SEO a AI audit‘**, která byla v pěti sekcích“ (přejmenování služby, 16. 9. 2026); `REFRESH_QUEUE.md` (odbavené 26. 9. 2026): starý název v blogu 120 výskytů v 89 článcích → 0 | repo, 10. 10. 2026 |
| **Rozhraní (UI)** | **prázdné** — žádné tvrzení o rozhraní | — |
| **Měření** | **Vlastní web (185 článků, 10. 10. 2026):** sekce se zkratkou bez rozepsání ani odkazu na vysvětlení — podrobně níž | skript ve scratchpadu, metodika níž |
| | **Názvosloví na vlastním webu:** „AI Overview(s)“ 76 článků / 450 výskytů, „Přehled od AI“ 25 / 88; jen anglicky 62 článků (59 vydáno před 5. 9. 2026, kdy revize sekcí stanovila český název; 11 z nich od té doby aktualizováno); AIO ve smyslu funkce Googlu („Google AIO“, „AIO panel“, „AIO audit“…) v 9 článcích, přestože glosář říká „Na tomto webu držíme první význam“ | grep, tabulka níž |
| | **Marketing Miner + Google Suggest (10. 10. 2026, cs):** kolize významů — „aeo certifikát“ 30/měs (celní status), „aio pc“ 50/měs (počítač vše v jednom), Suggest „llm“ → „llm titul“ (právnický titul LL.M.). Holé zkratky: aio 530, aeo 270, geo 1 500, gsc 1 500, ctr 930, serp 260, llm 3 800, rag 1 300 hledání/měs. Suggest u holých zkratek doplňuje hlavně jiná slova se stejným začátkem (aion, aeon, george, serpentiny) — to je shoda prefixu, **jako doklad víceznačnosti se nepoužívá**. | výstupy MM mimo repo |
| **Nelze ověřit** | (a) jak často konkrétní AI asistent zkratku v pasáži pochopí špatně — test jsme nedělali; (b) jestli značka `<abbr>` pomáhá vyhledávačům nebo AI — dokumentaci Googlu ani Bingu k tomu nemáme; (c) jakou část hledání holé zkratky „aio“ tvoří který význam — nástroj to nerozliší. | — |

---

## Vlastní měření — zkratky bez vysvětlení v sekci (10. 10. 2026)

**Metoda:** každý článek rozdělený na sekce — krátká odpověď (`answer`), každá otázka + odpověď FAQ,
úvod před prvním H2 a každý úsek pod H2 (bez importů a bloků kódu). Sekce se počítá jako „bez vysvětlení“,
když obsahuje zkratku a zároveň v ní **není** rozepsání (vzorec níž) **ani odkaz** na zkratce do slovníku
nebo na příslušnou sekci (`/slovnik/`, `/geo/`, `/aeo/`, `/aio/`, `/seo/`, `/blog/`).

| Zkratka | Rozepsání (vzorec) | Článků | Sekcí se zkratkou | Bez vysvětlení | % |
|---|---|---|---|---|---|
| GSC | Search Console | 27 | 77 | 40 | 52 |
| CTR | míra prokliku / proklikovost / click-through | 18 | 53 | 45 | 85 |
| SERP | stránka s výsledky / výsledky vyhledávání | 13 | 38 | 38 | 100 |
| GEO | Generative Engine Optimization / generativní optimalizace | 25 | 103 | 70 | 68 |
| AEO | Answer Engine Optimization / optimalizace pro odpovědi | 24 | 95 | 64 | 67 |
| AIO | AI Optimization / AI Overview / Přehled od AI | 20 | 94 | 39 | 41 |
| E-E-A-T | zkušenost / odbornost / autoritativnost / důvěryhodnost | 22 | 52 | 13 | 25 |
| *součet dvojic* | | | *512* | *309* | *60* |

**Ruční kontrola vzorku:** 31 označených sekcí (každá ~10. z 309, pevný krok) — **29 skutečných, 2 falešné
poplachy** (odkaz na pilíř `/seo-vs-geo-vs-aeo-vs-aio/`, který vzorec nepočítal; checklist E-E-A-T se
složkami v jiném znění). Vyřazeno z měření: **LLM** (vzorec chytal názvy produktů „LLM Pulse“, „Website
LLMs.txt“) a **RAG** (sekce „Co je RAG“ vysvětluje význam vlastními slovy bez rozepsání zkratky).
**Jedinečné sekce (sekce s víc zkratkami jen jednou):** aspoň jednu ze sedmi zkratek má **307 sekcí v 68 článcích**, aspoň jednu nevysvětlenou **201 sekcí (65 %) ve 39 článcích** — krátká odpověď 9 z 12, FAQ **47 z 67**, úvod 4 z 7, sekce pod H2 141 z 221. Tabulka po zkratkách výš počítá dvojice zkratka–sekce (součet 512/309 proto **není** počet sekcí). **V článku: řádky po zkratkách + souhrnný řádek 307 / 201 / 65 % a výsledek kontroly vzorku.**

Postřehy ze vzorku: „Google AIO“, „Měsíční manuální AIO audit“, „AIO výskyt atribut“ — AIO ve smyslu
Přehledu od AI; na jiných místech „AIO jako deštník“ — tentýž web, dva významy.

---

## Navazující články (B2)

Přečteno celé (agent, 10. 10. 2026):

| Článek | Verdikt | Proč |
|---|---|---|
| `pasazova-optimalizace-obsahu` | **odkaz** | čistý; pravidlo o zkratkách jen v základu → odkázat, neopakovat |
| `jak-pojmenovat-sluzbu-pro-ai` | **odkaz** | čistý, zdroje primární; jeho ř. 117 „názvy nemusí být doslova stejné“ platí pro jednu stránku — naše pravidlo podat jako přísnější celowebové, ne jako rozpor |
| sekce `/aio/` | **odkaz** | ř. 71: „Když jde o funkci Googlu, píšeme celým jménem „Přehled od AI““ |
| `aio-vs-geo` | **bez odkazu** | Google funkce jmenuje jen anglicky („AI Overviews“ 14×, „Přehled od AI“ 0×) proti pravidlu webu → fronta |
