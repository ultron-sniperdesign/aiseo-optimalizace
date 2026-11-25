# Research — propad-navstevnosti-eshopu-ai (run 7 série 10 runů, 26. 11. 2026)

Řádek plánu: `propad navstevnosti ceskych eshopu z ai` — „Co AI dělá s návštěvností českých e-shopů: data z podzimu 2026
(Shoptet, Marketing Miner, APEK, ui42) a proč propad organiky nejde automaticky přičíst AI“. Sloupec D prázdný →
**analysis** (rozbor dat, ne návod; doplnit do D při uzávěru). První volný řádek `agregatorova jednotka ve vyhledavani`
zůstává přeskočený (podmínky splní jen uživatel, poznámka ve sloupci C z runu 6).

## Co je ověřeno a čím (Z16)

| Vrstva | Čím | Datum |
|---|---|---|
| **Dokumentace** | Stavový panel Vyhledávání Google — historie aktualizací hodnocení (status.search.google.com, ranking updates); nápověda GA4 Default channel group (kanál AI Assistant, čteno v runu 6). Česká média jako sekundární zdroj dat třetích stran: MediaGuru 20. 10. 2026 (data Shoptetu z konference Reshoper), MediaGuru 13. 8. 2026 a Lupa 10. 8. 2026 (data Marketing Mineru), Lupa 25. 9. 2026 (APEK E-commerce Study 2026), MediaGuru 20. 6. 2025 (výrok o propadech „až o 30–40 %“). | 26. 11. 2026 |
| **Rozhraní** | — (do Search Console ani GA4 jsem se nedíval v rozhraní; data jsou z API) | — |
| **Měření** | **GA4 e-shopu MEGA DETAIL** (vlastní, čísla smí ven), Data API: měsíční relace, objednávky a tržby podle výchozí skupiny kanálů 11/2024–11/2026; zdroje AI (chatgpt, gemini, perplexity, claude, copilot) v říjnu 2025 a 2026. **Search Console MEGA DETAIL** (`https://www.megadetail.cz/`, vyhledávání na webu): kliky, zobrazení, CTR a pozice podle zařízení za 10/2025, 5/2026 a 10/2026; kliky a zobrazení podle stránek za 10/2025 a 10/2026, rozdělené na články (`/a/`), domovskou stránku a ostatní (produkty, kategorie, jazykové verze). | 26. 11. 2026 |
| **Nelze ověřit** | (1) u kterých dotazů e-shopu se v říjnu zobrazoval Přehled od AI — v exportu podle zařízení a stránek tento údaj není a Search Console podle dokumentace Googlu počítá AI funkce do celkového výkonu „Web“ (tvrzení o dokumentaci a exportu, ne o rozhraní; opraveno po auditu 2); (2) příčina poklesu míry prokliku u článků (Přehled od AI × skladba dotazů × jiné prvky ve výsledcích); (3) data Shoptetu a Marketing Mineru — vidím jen to, co citují média, ne metodiku ani vzorek v detailu; (4) zahraniční „průměrný pokles −25 %“ z článku MediaGuru 2025 — bez zdroje; (5) údaj z pokynu „ui42/Ipsos 51,9 %, důvěra 22,3 %“ — **nenalezen** (2 hledání), nepoužívám. | — |

**Nástroje:** Marketing Miner pro hledanost nespouštěn — téma je analýza dat, ne cílení na hledaný dotaz; GSC webu aiseo-optimalizace.cz pro „propad návštěvnosti“ bez dat (téma bez vlastní historie). Prázdná data nejsou nulová poptávka.

## Teze z plánu proti zdrojům (B1)

| Teze v pokynu | Zjištění | Co píšu |
|---|---|---|
| Shoptet (Reshoper 15. 10.) 0,3 % návštěv z AI, z toho ChatGPT přes 90 % | MediaGuru 20. 10. 2026: ~0,3 % návštěv e-shopů na Shoptetu přímo z AI, počet obchodů s takovými návštěvami +62 % meziročně, u některých až 15 %; čísla mohou být podhodnocená (bez Přehledů od AI, část Gemini jako přímý vstup); konverze +29 % proti průměru, +50 % proti organice; 76 % nových zákazníků. Podíl ChatGPT „přes 90 % měřitelné AI návštěvnosti“ **ve zdroji je** (opraveno po auditu 1 — napoprvé přehlédnuto); +62 % uvádí Shoptet pro počet obchodů s návštěvami z AI (11 600 proti 7 100, přepočet dá 63,4 % — rozdíl ve zdroji) | 0,3 % jako průměrný podíl a výhrady; +62 % s atribucí Shoptetu; ChatGPT >90 % v článku nepotřebuji |
| Marketing Miner (Lupa 10. 8.) 0,6 % objednávek | Potvrzeno: červenec 2026, 100+ e-shopů s doplňkem MM pro Shoptet — průměrný e-shop 0,6 % objednávek z AI, čtvrtina nejviditelnějších 1,9 %, desetina 3 %, některé až 5 %; počet objednávek i podíl od ledna dvojnásobné; měřené = spodní hranice, skutečnost odhadují na 2–3× | potvrzeno |
| ui42/Ipsos (9/2026) AI při nákupu 51,9 %, důvěra 22,3 % | Nenalezeno. Nejblíž: APEK E-commerce Study 2026 (září, 1 504 respondentů, internetový sběr ResSolution) — 50 % online nakupujících použilo AI při výběru zboží nebo obchodu; průzkum Shoptetu (léto 2026) 31 % používá AI před nákupem | APEK 50 % a Shoptet 31 % s rozdílem otázek |
| Pokles organiky megadetailu 5→10/2026 je sezónnost, ne doložený vliv AI | **Nepotvrzeno.** Meziročně: organika 10/2025 12 210 relací → 10/2026 9 243 (−24 %); v roce 2025 organika od května do listopadu rostla, v roce 2026 klesala — stejný průběh to není. Search Console 10/2025 → 10/2026: kliky −24 %, zobrazení +10 %, pozice mobil 5,5 → 5,7, desktop 11,2 → 6,1; u článků zobrazení +22 %, CTR 3,80 % → 2,35 %; u produktů a kategorií zobrazení −43 %. Od konce března do začátku října 2026 dvě jádrové a tři spamové aktualizace Googlu | „ani sezónnost, ani AI z dat jednoznačně neplyne“ — rozbor jako příklad metody |
| Ověřit, odkud jsou „desítky procent propadu“ | MediaGuru 20. 6. 2025: jednatel české SEO agentury po spuštění Přehledů od AI v češtině — „u některých e-shopů pokles až o 30–40 %“; zahraniční „−25 %“ bez zdroje. Zveřejněná česká data o propadech kvůli AI jsem nenašel | „výrok bez zveřejněných dat“, bez jmen (Z2; formulace upravena po auditu 1 a 2) |
| Kanál v GA4 nemá data před cca 7. 6. 2026 | MEGA DETAIL: AI Assistant 0 relací do 5/2026, 93 v 6/2026; v 10/2025 byly návštěvy z chatgpt.com v Unassigned (87) a Referral (50) | meziroční srovnání kanálu nejde, jen podle zdroje |

## Podmínky u tvrzení o cizích platformách a datech

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| AI přivádí ~0,3 % návštěv e-shopů | jen e-shopy na Shoptetu, jen přímé prokliky z nástrojů AI, data Shoptetu citovaná médiem | — | podhodnocení: Přehled od AI není zahrnut, část Gemini jako přímý vstup; u některých obchodů až 15 % | MediaGuru 20. 10. 2026 (Reshoper) |
| Průměrný e-shop 0,6 % objednávek z AI | 100+ e-shopů s doplňkem Marketing Mineru pro Shoptet, červenec 2026, doměřené přímé prokliky; 1,9 % a 3 % jsou **průměry** čtvrtiny a desetiny nejviditelnějších; počet i podíl objednávek leden → červenec dvojnásobné | — | spodní hranice; návštěvy z mobilních aplikací často jako přímé (podle MM); odhad 2–3× se týká **návštěv a tržeb**, ne podílu objednávek | Lupa 10. 8. 2026; MediaGuru 13. 8. 2026 |
| 50 % online nakupujících použilo AI | APEK E-commerce Study 2026, 1 504 respondentů, internetový sběr | jiná otázka než průzkum Shoptetu (31 % „před nákupem používají“) | „nějakým způsobem“, hlavně jako rádce | Lupa 25. 9. 2026 |
| Návštěvy z AI konvertují lépe | data Shoptetu: +29 % proti průměru, +50 % proti organice, 76 % nových zákazníků (období a definici zdroj neuvádí) | srovnání závisí na vstupní stránce: MEGA DETAIL 15. 6.–30. 9. 2026, kanál AI Assistant proti Organic Search, nákupy na relaci — celé kanály ~17×, jen vstup na produkt ~2,8× (26 a 31 nákupů) | organika zahrnuje neplacené prokliky z AI funkcí Googlu | MediaGuru 20. 10. 2026; `ai-navstevnost-konverze` |
| Aktualizace Googlu 2026 | stavový panel: jádrové 27. 3. (~12 dní), 21. 5. (~12 dní), 10. 11. (~14 dní); spamové 24. 3. (19 h 30 min), 24. 6. (2 dny 1 h), 18. 8. (2 dny 16 h), 24. 9. (13 dní 16 h) — opraveno po auditu 1; 24. 11. „December 2026 core update“ | — | aktualizace neznamená dopad na konkrétní web | status.search.google.com (ranking) |
| Kanál AI Assistant | odkazující stránka na seznamu AI asistentů (zdroj může zůstat i v parametru URL); **oznámeno 13. 5. 2026**, u MEGA DETAIL první relace v červnu (pozorování jednoho účtu) | — | neplacené prokliky z Přehledu od AI a režimu AI v Organic Search; dřívější návštěvy z AI v jiných kanálech; rozdíl 417 × 418 relací mezi dvěma dotazy GA4 (souhrn kanálu × rozpis zdrojů) | GA4 Default channel group, What's new |
| AI funkce v Search Console | zobrazení a kliky z Přehledu od AI a režimu AI se podle dokumentace Googlu počítají do celkového výkonu, typ vyhledávání „Web“ | — | v exportu podle zařízení a stránek je samostatně oddělit nejde (tvrzení o dokumentaci a exportu, ne o rozhraní) | developers.google.com/search/docs/appearance/ai-features |

## Data MEGA DETAIL (vlastní e-shop)

GA4, výchozí skupina kanálů, relace (objednávky):

| Měsíc | Organic Search | AI Assistant | zdroje AI celkem (chatgpt, gemini, perplexity, claude) |
|---|---|---|---|
| 10/2025 | 12 210 (35) | 0 (kanál neexistoval) | 144 (6) — chatgpt.com 87 Unassigned + 50 Referral |
| 10/2026 | 9 243 (22) | 417 (14) | 423 (14) — chatgpt.com 389 AI Assistant + 2 Unassigned, gemini 28, perplexity 3, claude 1 |

Průběh organiky (relace): 1/2025 2 292 → 11/2025 13 743 (růst) · 1/2026 15 777 · 3/2026 17 751 (vrchol) · 5/2026 15 044 · 7/2026 13 469 · 9/2026 10 137 · 10/2026 9 243. Listopad 2026 je neúplný (do 25. 11.), nesrovnávat.

Search Console (web), říjen:

| | 10/2025 | 10/2026 | změna |
|---|---|---|---|
| kliky | 9 993 | 7 586 | −24 % |
| zobrazení | 304 429 | 334 685 | +10 % |
| CTR | 3,28 % | 2,27 % | −1,0 b. |
| pozice mobil / desktop | 5,5 / 11,2 | 5,7 / 6,1 | — |

Po stránkách (součty po stránkách se od celku liší): články `/a/` kliky 8 922 → 6 722 (−25 %), zobrazení 234 656 → 286 124 (+22 %), CTR 3,80 % → 2,35 %; produkty, kategorie a jazykové verze kliky 925 → 741 (−20 %), zobrazení 91 962 → 52 743 (−43 %); domovská stránka kliky 193 → 140, zobrazení 8 956 → 5 388. Květen 2026: kliky 11 951, zobrazení 411 005, CTR 2,91 %.

## Interní odkazy (otevřeno a ověřeno ve frontě refreshů)

- `/blog/ai-navstevnost-konverze/` — kanál AI Assistant, konverze po srovnání vstupních stránek (fronta: ✅ odbaveno).
- `/blog/propady-navstevnosti-vydavatelu/` — proč čísla o propadech měří různé věci (ve frontě bez nálezu).
- `/blog/reklama-v-ai-odpovedich/` — placené × neplacené návštěvy z AI (run 6).
- **Vynechány:** `case-study-megadetail-ai-navstevnost` (otevřený kandidát 3. 10. 2026: souhrn generativní AI vydávaný za AI Overviews), `zero-click-ai` (otevřený kandidát 14. 10. 2026: Pew jako „8 % uživatelů“).

## FAQ — odkud otázky jsou

Vrstva 4 (praxe): otázky, které klade e-shop při poklesu návštěvnosti — kolik AI přivádí, jestli za propad může AI, proč je návštěvnost z AI v GA4 podhodnocená, jestli návštěvy z AI konvertují lépe, jak poznat vliv Přehledu od AI v Search Console. Trends ani Marketing Miner nespuštěny (viz Nástroje).
