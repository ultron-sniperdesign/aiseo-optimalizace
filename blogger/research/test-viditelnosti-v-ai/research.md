# Research — refresh `test-viditelnosti-v-ai`

Datum: **11. 8. 2026** · typ: refresh · původní článek: published 2026-06-11, updated 2026-08-03, 1 788 slov

Poslední řádek z `REFRESH_QUEUE.md` k opakované vadě „chybí bezplatné oficiální reporty". Vybraný sweepem korpusu 10. 8. 2026.

## Nález — článek o testování AI viditelnosti neuvádí dva oficiální reporty

Grep: „AI Performance" 0×, „Generativní AI funkce" 0×, „Search Console" 0×.

Přitom článek na dvou místech výslovně řeší, čím měřit zdarma:

- FAQ **„Potřebuju placený nástroj, nebo stačí ruční test?"** — jmenuje bezplatné nástroje třetích stran (Ahrefs AI Visibility Checker, Semrush AI Search Visibility Checker), oficiální reporty ne.
- Sekce **„Automatizace: kdy má smysl nástroj"** — třívrstvý seznam zdarma / freemium / placené, opět jen třetí strany.

Časová osa: **Bing AI Performance běží od 10. 2. 2026**, **Generativní AI funkce v Search Console od 3. 6. 2026**. Článek vyšel 11. 6. a byl aktualizovaný 3. 8. Oba reporty tedy existovaly už při vydání i při poslední aktualizaci.

Popáté a naposledy tatáž vada; předchozí čtyři jsou `seo-nastroje-2026`, `aio-strategie`, `caste-chyby-v-seo-2026-update` a `ai-seo-nastroje`.

## Klíčové rozlišení, na kterém refresh stojí

**Reporty ruční test nenahrazují. Odpovídají na jinou otázku.**

| | Na co odpoví | Na co neodpoví |
|---|---|---|
| **Ruční test** (obsah článku) | „Objevím se u konkrétního dotazu?" — jediná cesta u ChatGPT a Perplexity | jak často se to děje v reálném provozu; vzorek je 3–5 opakování rukou |
| **Generativní AI funkce (GSC)** | „Dostávají moje URL vůbec imprese v AI plochách Googlu?" | dotazy ani prokliky; **neoddělí AI Mode od AI Overviews** |
| **AI Performance (Bing)** | citace v Copilotu a AI shrnutích + **grounding queries** | Microsoft sám uvádí, že jde o **vzorek**; nepokrývá ChatGPT ani Perplexity |

Nejostřejší úhel pro článek: **článek radí testovat Google AI Overviews ručně 3–5×, přitom Search Console má pro tutéž plochu reálná data o impresích.** Query-level test nenahradí (dotazy report nedává), ale odpovídá na tu úplně první otázku ze čtvrtého kroku — „neobjevuju se vůbec?" — a to daty místo ručního vzorku.

⛔ **Čeho se vyvarovat.** Poučení z refreshe `ai-seo-nastroje` (Run107), kde mě oba auditoři varovali před opačným extrémem: reporty nesmí vyznít jako náhrada testu. Ruční test má u ChatGPT a Perplexity **monopol** — oficiální report tam neexistuje.

## Další drobnosti k opravě

- „stav k červnu 2026" u seznamu nástrojů a „k červnu 2026" u Seznam Asistenta — článek byl aktualizovaný v srpnu, datace nesedí.
- Sekce „Pokud se neobjevujete vůbec" má čtyři kroky diagnostiky; první ověření přes GSC tam logicky patří jako nultý krok (jsou vůbec nějaké imprese?).
- Chybí odkazy na `gsc-ai-segmenty-mereni` a `bing-ai-performance-report`.

## Limity

- Ceny a funkce nástrojů třetích stran jsem v tomhle refreshi znovu neověřoval; zůstává původní výhrada „ověřte u poskytovatele".
- Data o obou reportech vycházejí z dřívějších ověření u primárních zdrojů (Bing Webmaster Blog 2/2026, nápověda Search Console), viz vlastní články.
- Stav Seznam Asistenta jsem v tomhle běhu neověřoval; formulace zůstane hedgovaná.

## Zdroje

- vlastní sweep korpusu 10. 8. 2026 (`REFRESH_QUEUE.md`)
- vlastní články `bing-ai-performance-report`, `gsc-ai-segmenty-mereni`, `ai-seo-nastroje` (po refreshi 10. 8.)
