# Research — seo-pro-seznam-cz (run 10 série 10 runů, 26. 11. 2026)

Řádek plánu: `seo pro seznam cz` — „SEO pro Seznam.cz v roce 2026: co je stejné jako u Googlu a co Seznam dělá jinak
(SeznamBot, Seznam Webmaster, IndexNow, Firmy.cz)“, kategorie **tutorial**. Přeskočený řádek: `jak vypnout gemini v telefonu`
(pokyn žádá ověřit každý krok na zařízení s Androidem — vlákno to nesplní; poznámka do sloupce C při uzávěru).
Pokyn: ověřit v nápovědě JavaScript, rychlost, kanonické adresy a IndexNow; kolize se `seznam-cz-ai-vyhledavani`
(sekce „SEO pro Seznam.cz a Seznam AI“), podíl → `podil-seznamu-v-ceskem-vyhledavani`, IndexNow → `bing-seo-pro-ai`.

## Co je ověřeno a čím (Z16)

| Vrstva | Čím | Datum |
|---|---|---|
| **Dokumentace** | Nápověda Seznam Vyhledávání (o-seznam.cz/napoveda/vyhledavani/, datum poslední změny ze sitemapy nápovědy): SeznamBot (13. 7. 2026), Technické podmínky — řazení a Seznam AI (22. 9. 2026), Robots.txt, Kanonické URL, Protokol HTTPS (13. 12. 2024), Sitemap.xml, RSS kanály, Přesměrování URL, Přesměrování webu, Nofollow, Odstraňování stránek (21. 10. 2024), Protokol IndexNow (10. 2. 2025), Meta tag robots (22. 4. 2026), Zakázání tvorby snippetů (4. 6. 2026), Zákaz tvorby AI odpovědí (22. 9. 2026), Seznam Webmaster (10. 12. 2025), Optimalizace (21. 10. 2024), Optimalizační minimum (16. 12. 2025), Zakázané a nevhodné techniky (21. 10. 2024), Strukturovaná data (7. 11. 2024), Struktura výsledku (22. 9. 2026), Nejčastější dotazy (12. 8. 2025). Google Search Central: robots.txt (aktualizace 23. 10. 2026), robots meta tag a X-Robots-Tag (24. 3. 2026), Googlebot (3. 2. 2026), podporované a nepodporované meta značky (10. 12. 2025), základy JavaScript SEO (4. 3. 2026), kanonické adresy (10. 7. 2026), SEO Starter Guide (10. 12. 2025), blokování indexace noindex (10. 12. 2025), sitemapy (8. 7. 2026), přesměrování (16. 11. 2026), úvod ke strukturovaným datům (10. 12. 2025, doplněno po auditu 1). indexnow.org: FAQ a searchengines.json (načteno 26. 11. 2026). | 26. 11. 2026 |
| **Rozhraní** | — (do Seznam Webmasteru jsem se nepřihlašoval, výsledky vyhledávání Seznamu jsem neprocházel; funkce popisuji podle nápovědy) | — |
| **Měření** | — | — |
| **Nelze ověřit** | (1) jestli SeznamBot vykresluje obsah generovaný JavaScriptem — nápověda to neříká (jen: JS přesměrování nedoporučuje, rozpoznané bere jako 302; indexer ignoruje obsah `<script>` a `<style>`; ověřovací meta značka vložená skriptem v Seznam Webmasteru nefunguje); (2) který limit velikosti HTML platí — Nejčastější dotazy (12. 8. 2025): 1 MB (1 048 576 bajtů), Optimalizační minimum (16. 12. 2025): 4 MiB zdrojového kódu; (3) rozhraní Seznam Webmasteru; (4) váha jednotlivých parametrů řazení. | — |

## Teze z plánu proti zdrojům

| Teze / pokyn | Zjištění | Co píšu |
|---|---|---|
| Seznam Webmaster: ověření meta značkou nebo souborem, index, chyby | potvrzeno: `<meta name="seznam-wmt" …>` v `<head>` domovské stránky nebo soubor `seznam-wmt-<kód>.txt` v kořeni; grafy navštívených, zaindexovaných, přesměrovaných a chybových stránek; API; beta | potvrzeno |
| strukturovaná data schema.org včetně FAQ, Open Graph | potvrzeno: rozšířené snippety článkové, eventové, produktové, receptové, diskuzní, FAQ, filmy a seriály, návody, videa; Open Graph hlavně pro obrázkové náhledy | potvrzeno |
| zákaz AI odpovědí (Seznam-Extended, AI, MachineLearning, nosnippet) | potvrzeno; nosnippet vypne i úryvky ve Vyhledávání | potvrzeno |
| indexnow.org uvádí koncový bod Seznam.cz | potvrzeno; Seznam má i vlastní stránku nápovědy „Protokol IndexNow“ | potvrzeno, primárně podle nápovědy Seznamu |
| ⛔ ověřit JavaScript | nápověda nepopisuje vykreslování JS; jen přesměrování a `<script>` | „nápověda neříká“ |
| ⛔ ověřit rychlost | Request-rate v robots.txt (min. 1 dokument / 30 s, časové okno); limit velikosti 1 MB × 4 MiB | potvrzeno + rozpor přiznán |
| ⛔ ověřit kanonické adresy | kanonický odkaz sám na sebe ignoruje; napříč doménami i relativní ano; odmítne u nepodobného obsahu; ne na přesměrování ani URL s cookie; interně jako 301 | potvrzeno |
| podíl Seznamu 13,07 % (StatCounter říjen 2026) | znovu jsem neověřoval | číslo nepoužívám, odkaz na článek o podílu |

## Podmínky

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| X-Robots-Tag | SeznamBot se hlavičkou neřídí, stáhne celou URL | Google ji podporuje (i pro PDF, obrázky) | — | Seznam: Meta tag robots; Google: robots meta tag |
| Request-rate | direktiva v robots.txt; nejnižší podporované nastavení 1 dokument za 30 s (nižší hodnoty se převedou na minimum), maximum podle výkonu a zatížení SeznamBota; lze časové okno, **mimo něj návrat k výchozímu chování**; nejde o záruku dosažené rychlosti | Google: pole jako crawl-delay nepodporuje (jen user-agent, allow, disallow, sitemap) | — | Seznam: Robots.txt; Google: robots.txt |
| Kanonický odkaz | na sebe ignorován; na jinou URL interně obdobně jako 301 (bez přesměrování návštěvníka); jen u obsahově podobných stránek; **cíl musí mít porovnatelný obsah, nemá být přesměrováním ani vyžadovat cookie** | Google doporučuje kanonický odkaz i na kanonické stránce samotné | ignorován i v situacích popsaných v článku o kanonickém linku | Seznam: Kanonické URL, Přesměrování URL; Google: kanonické adresy |
| Velikost HTML | 1 MB = 1 048 576 bajtů (FAQ, 12. 8. 2025) × 4 MiB výsledného zdrojového kódu (Optimalizační minimum, 16. 12. 2025); rozpor z podkladů nerozhodnutelný | Google: prvních 2 MB podporovaného typu souboru pro Google Search, 64 MB u PDF, **z nekomprimovaných dat**, předá jen staženou část; prostředky zvlášť; jiní roboti Googlu jiné limity | — | Seznam: Nejčastější dotazy, Optimalizační minimum; Google: Googlebot |
| JavaScript | vykreslování nepopsáno (nelze ověřit); JS přesměrování nedoporučeno, rozpoznané = 302 | Google: procházení, vykreslení, indexace; k vykreslení řadí stránky se stavem 200 bez zákazu indexace (ne záruka vykreslení každé URL) | — | Seznam: Přesměrování URL, Nejčastější dotazy; Google: JavaScript SEO |
| IndexNow | **klíč: soubor `<klíč>.txt` v kořeni, klíč i v každém požadavku jako parametr `key` (GET v adrese, POST v těle JSON), jen klíč v UTF-8 bez BOM/HTML/dat navíc, veřejně dostupný, klíč v požadavku odpovídá souboru; ve složce `keyLocation` a jen adresy z té složky a podadresářů**; jen informace pro algoritmy; vybrané URL do výsledků do týdne; ostatní vyhledávače informovány po ověření klíče; bez limitu, operativní omezení (429); POST nejvýš 10 000 URL; klíč 8–128 znaků, UTF-8, kořen (doporučeno) nebo složka s `keyLocation`; klíč v cache nejvýš 24 h | Google mezi vyhledávači protokolu není (searchengines.json: Bing, Yandex, Seznam, Naver, Yep, Internet Archive, Amazonbot) | testovací prostředí není | Seznam: Protokol IndexNow; indexnow.org |
| Přidat stránku do hledání (Webmaster) | indexovatelná stránka zařazena se zpožděním několika minut; limitované API až 500 URL denně | — | — | Seznam: Protokol IndexNow (FAQ) |
| Meta značky jen pro Seznam | `<meta name="seznambot" content="nosnippet">` a `nofeaturedsnippet` (specializovaná nápověda); obecná stránka Meta tag robots zápis `name="SeznamBot"` odmítá (příklad s `index`) → nápověda nejednotná, nevyvozovat pravidlo podle velikosti písmen; **nosnippet zakáže i náhled, zobrazená strukturovaná data a vybraný úryvek, zůstane titulek a odkaz, text se dál používá pro relevanci**; `data-nosnippet` na `div`/`span`/`section` s daty, interní použití dat pokračuje | — | — | Seznam: Zakázání tvorby snippetů, Meta tag robots |
| Sitemapy | nejvýš 50 MB nekomprimovaně **a současně** nejvýš 50 000 URL; Seznam: URL z jednoho webserveru, absolutní adresa v robots.txt (až 100 odkazů), dynamická sitemapa s Content-Type application/xml; priority jen pro procházení | Google: stejné limity 50 MB nekomprimovaně / 50 000 URL | — | Seznam: Sitemap.xml; Google: sitemapy |
| Ověření v Seznam Webmasteru | meta `seznam-wmt` v `<head>` domovské stránky nebo soubor `seznam-wmt-<kód>.txt` v kořeni; robot musí mít přístup; platí jen poslední vygenerovaný kód; značka vložená skriptem nepodporována; soubor ponechat (opakované ověřování); http a https zvlášť, ověření http selže při přesměrování na https | — | — | Seznam: Seznam Webmaster |
| Strukturovaná data | schema.org pomáhá pochopit obsah; u podporovaných typů může umožnit rozšířený výsledek; Google: všechny povinné vlastnosti a pravidla typu, samotný zápis nezaručuje zobrazení; Seznam: výčet podporovaných rozšířených snippetů, Open Graph pro náhledy | — | — | — | Google: úvod ke strukturovaným datům; Seznam: Strukturovaná data |
| Kódování | iso-8859-2, windows-1250, utf-8, utf-16; deklarace ve stránce; jiné kódování → do indexu se nedostane | — | — | Seznam: Optimalizační minimum |
| `<script>`, `<style>` | chybějící uzavírací značka → indexer nevidí následující text (i u `<script />`) | — | — | Seznam: Nejčastější dotazy |
| Přesměrování 302 | robot několik dní zkouší návrat obsahu 200; **ve výsledcích může zvolit zdrojovou i cílovou URL**; meta refresh do 7 s a rozpoznané JS přesměrování = 302; meta refresh delší než 7 s = ne přesměrování, stránka se normálně indexuje | — | „chování se může změnit“ | Seznam: Přesměrování URL |
| Nedostupnost | **u konkrétní stránky** vyřazení po třech po sobě jdoucích zjištěních nedostupnosti v několikadenních intervalech; 404 se opakovaně ověřuje, 410 se dál neověřuje a stránka se označí k odstranění (rychleji, ne okamžitě) | — | — | Seznam: Nejčastější dotazy, Odstraňování stránek |
| Řazení | strojové učení, anotace podle zveřejněných pravidel, modely cca jednou za 3 měsíce; hlavní parametry: slova z dotazu v dokumentu a odkazech, grafové algoritmy nad odkazy a zpětné odkazy, zpětná vazba (kliky), shoda jazyka, informace o dotazu, informace o dokumentu (jazyk, statistiky HTML prvků, http/https, velikost, komprimovaná velikost, kódy reklamních systémů) | Sklik řazení přirozených výsledků neovlivňuje | — | Seznam: Technické podmínky |
| Featured snippet | jeden výsledek z prvních deseti; studie Seznamu: **průměrná** proklikovost cca +7 % (datum a metodika neuvedeny, ne prognóza pro web); vypnutí `nofeaturedsnippet` | — | — | Seznam: Struktura výsledku, Zakázání tvorby snippetů |
| Osnova a rychlé odkazy | osnova z vnitřních odkazů na kotvy (nezaručeno, odkazy podle dotazu); rychlé odkazy z odkazů na domovské stránce **na dokumenty téže domény druhé úrovně, podle přínosu uživatelům** | — | — | Seznam: Struktura výsledku |
| Firmy.cz | registrace = kvalitní zpětný odkaz (tip nápovědy); popisek výsledku se doplní z firemního zápisu, když dotaz na stránce chybí; zápis v katalogu nezaručuje přirozené výsledky | — | — | Seznam: Optimalizační minimum, Struktura výsledku, Nejčastější dotazy |
| Seznam AI | výstup z více zdrojů, zejména výsledků Seznam Vyhledávání, služeb Seznamu a zdrojů jazykového modelu (**podíly neuvedeny**); při čerpání z výsledků pravidla řazení příslušného typu výsledků; reklamní informace jen při relevanci k dotazu, výstup nelze přímo koupit; výběr podle relevance, aktuálnosti, jazykové a věcné souvislosti, dostupnosti a kvality zdroje, dostupnosti strukturovaných nebo ověřených dat a technické možnosti využití; pořadí nemusí odpovídat výsledkům; může zahrnout sponzorované informace, platba zahrnutí nezaručuje | — | — | Seznam: Technické podmínky |
| HTTPS | přechod jako změna domény, možný pokles pozic; při závislosti na návštěvnosti doporučuje přechod odložit | stránka z 13. 12. 2024 | — | Seznam: Protokol HTTPS |
| meta keywords | Seznam nebere ohled | Google nepoužívá | — | Seznam: Nejčastější dotazy; Google: meta značky |

## Interní odkazy

- `/blog/podil-seznamu-v-ceskem-vyhledavani/` — podíl Seznamu (ve frontě bez vady).
- `/blog/bing-seo-pro-ai/` — IndexNow obecně (fronta: odbaveno).
- `/blog/seznam-extended-opt-out/` — odhlášení ze Seznam AI (fronta: odbaveno; otevřený řádek 93 se týká `seznam-asistent-sellma`).
- `/blog/javascript-a-ai-roboti/` — JavaScript a roboti (fronta: odbaveno).
- Vynechán `seznam-cz-ai-vyhledavani`: tvrdí „Podle čeho asistent z indexu vybírá konkrétní stránky, Seznam nepopisuje“,
  ale Technické podmínky (22. 9. 2026) kritéria výběru Seznam AI uvádějí → zapsáno do `REFRESH_QUEUE.md` jako vada.

## Audit 1 (Codex, 26. 11. 2026)

Verdikt OPRAVIT PŘED PUBLIKACÍ: 16 blockerů, 4 varování, 1 tip — převážně vynechané podmínky a popis rozhraní bez
testu. Všechny nálezy ověřeny proti `zdroje/` a přijaty; vypořádání `vyporadani.md`, plné znění `audit1-result.md`.
