# Blok oprav 23. 11. 2026 — popis Auditu AI viditelnosti v rozporu s `audit.ts` (hlavně slib měření)

**Typ runu:** blok oprav (série 10 runů zadaná Kamilem 22. 11. 2026, run 3; pořadí přeskládané 23. 11. — audity přes
nezávislé Claude subagenty, Codex do 24. 11. 15:01 v limitu). **Vada:** CTA a nabídkové sekce článků, které odkazují na
`/audit/`, slibují u Auditu AI viditelnosti měření nebo práci s daty klienta (nastavení měření, propojení Search Console
a GA4, reporting, tracking a KPI dashboard, logy, data z vyhledávání, systematické sledování). Měření z auditu
16. 9. 2026 záměrně vypadlo a prodává ho Monitoring AI viditelnosti. Ve stejných CTA se audit místy jmenoval jinak
(„AEO audit“, „AIO konzultace“, „auditní balíčky“) a sliboval výstupy, které nemá, nebo schůzku 60 minut místo 30–60.
Nález z refreshe `cloudflare-ai-bot-blocking` (auditor kola 1 ho tam hlásil jako BLOCKER), fronta `REFRESH_QUEUE.md` 23. 11.

## Doklad

| Druh | Co | Zdroj, načteno 23. 11. 2026 |
|---|---|---|
| Dokumentace (vlastní web) | vrstvy auditu: 01 Viditelnost v AI dnes (zmínky a citace, kdo místo vás, z jakých stránek AI čerpá, výchozí stav), 02 Technická připravenost, 03 Obsah a obsahové mezery, 04 Důvěryhodnost a zmínky; komentář: „Měření jako samostatná vrstva vědomě NENÍ (rozhodnutí uživatele 16. 9. 2026) — měření prodává /sluzby/monitoring-ai/, audit je jednorázový snímek“ | `src/content/pages/audit.ts` ř. 227–279 (revize stránky 16. 9. 2026) |
| Dokumentace (vlastní web) | jak se měří výchozí stav: zmínky v ChatGPT vlastním nástrojem, Přehled od AI přes Marketing Miner, Perplexity, Claude a Gemini ručně na sadě dotazů | `audit.ts` ř. 289–294 |
| Dokumentace (vlastní web) | výstup: kritická zjištění, prioritní tabulka (dopad × náročnost × kdo), technické problémy, obsahové mezery, doporučení pro citovatelnost, 30denní akční plán, meeting 30–60 minut; výstup do 5 pracovních dní od úhrady | `audit.ts` ř. 296–330, 339–364 |
| Dokumentace (vlastní web) | FAQ: audit je jednorázový snímek a plán, monitoring je měsíční služba; implementace není součástí, navazující úpravy lze nacenit | `audit.ts` ř. 490–507 |
| Dokumentace (vlastní web) | Monitoring AI viditelnosti: měsíční služba, ChatGPT vlastním nástrojem, Přehled od AI přes Marketing Miner, zobrazení ze Search Console (Funkce s generativní AI) a z Bingu, návštěvy a konverze z GA4, report každý měsíc | `dist/sluzby/monitoring-ai/index.html` (stránka aktualizovaná 14. 9. 2026) |

## Postup (Z12: hledáno podle entity)

- Všechny zmínky Auditu AI viditelnosti v článcích: odkaz `/audit/` a tvary „Audit/u/em AI viditelnosti“ — **150 řádků ve 112
  článcích**. Každý řádek s odkazem na audit porovnán s `audit.ts`; řádky se slovy o měření (měř-, GA4, Search Console,
  report, sledov-, data…) ručně (54), ostatní podle věty za odkazem (96) a výčty pod nimi (starší sekce „Kde si nechat
  poradit“). Hledány i jiné názvy v textu odkazu na `/audit/` a délka schůzky.
- **Pravidlo bloku:** opravuje se jen text, který popisuje audit **v rozporu** s `audit.ts` (měření a data klienta, jiný
  název, výstupy, které audit nemá, délka schůzky). **Slib, který vyžaduje přístup do systémů nebo účtů klienta (logy,
  nastavení CDN, Search Console, GA4), je rozpor stejně jako měření** (upřesněno po auditu kola 1). Co `audit.ts`
  nevyjmenovává, ale nevylučuje (feed, přesměrování, interní prolinkování), zůstává. **Kontroluje se celá nabídková
  sekce včetně úvodní věty a úvodní otázky**, ne jen věta s odkazem na `/audit/`. Snímek výchozího stavu zmínek je v souladu s produktem a zůstává
  (`ai-navstevnost-konverze`, `hledanost-neni-adopce`, `reportovani-ai-viditelnosti`).
- **Kde čtenář chce měření**, slib se přesunul na Monitoring AI viditelnosti (`/sluzby/monitoring-ai/`, bez ceny — cena
  na stránce není); jinak CTA popisuje, co audit dělá podle `audit.ts`.
- **`updated` se neposouvá:** jde o obchodní text CTA, ne o obsah článku — stejně jako blok s názvem placené služby
  (26. 9. 2026, `fddc6dc`, 89 článků) a technické bloky (`30375b5`, `6fc7e7a`).

## Opravená místa (24 článků po kole 2)

| Článek | Bylo | Je |
|---|---|---|
| `ai-roboti-zatez-webu` ř. 115 | „projde měření, viditelnost i technické nastavení“ | „projde přístup AI robotů podle účelu i to, co o vás dnes říkají AI odpovědi“ |
| `blokovat-ai-odpovedi-gsc` ř. 182 | „začít měřením… projde, co z vašich dat opravdu jde vyčíst“ | průběžné měření = Monitoring (zmínky + Search Console + GA4); audit ukáže výchozí stav a z jakých stránek AI čerpá |
| `gsc-ai-segmenty-mereni` ř. 239 | audit „propojí data ze Search Console, GA4 i ručního testu“ | průběžně Monitoring s měsíčním reportem; audit dá výchozí stav a prioritní seznam úprav |
| `mereni-ai-mode-limity` ř. 161 | audit „projde nastavení měření“ | Monitoring spojí zmínky v ChatGPT a v Přehledu od AI, Search Console a GA4 a pošle report; audit ukáže výchozí stav viditelnosti v AI odpovědích, proti kterému půjde měřit posun |
| `nahradi-ai-mode-vyhledavani` ř. 171 | „projde viditelnost, obsah i měření… co z vašich dat plyne“ | „co o vás dnes říkají AI odpovědi, technickou připravenost i obsah… prioritní seznam úprav“ |
| `ai-seo-b2b` ř. 30 (FAQ) | „Pro systematické sledování pomáhá Audit…“ | „Výchozí stav změří Audit…, na systematické sledování slouží nástroje… nebo Monitoring“ |
| `roi-ai-seo` ř. 159 | audit jako krok pro nastavení měření | Monitoring pro průběžné měření; audit „jednorázový snímek: výchozí stav a prioritní seznam úprav“ |
| `informacni-obsah-v-ai-ere` ř. 156 | audit „projde obsah proti datům z vyhledávání“ (poptávka, zobrazení) | audit projde obsah z pohledu AI odpovědí (krátké odpovědi, aktuálnost, obsahové mezery) |
| `content-signals-rizeni-ai-botu` ř. 192 | audit „projde logy, robots.txt i nastavení CDN“ | „projde robots.txt i přístup AI robotů podle účelu“ |
| `aeo-optimalizace-v-praxi` ř. 450–458 | „AEO audit“, AEO Coverage Score, přepis 3 odpovědí, nastavení reportingu v Search Console, bezplatný průchod 5 stránek | Audit AI viditelnosti: výchozí stav, krátké odpovědi, strukturovaná data, obsahové mezery, prioritní tabulka, 30denní plán, meeting 30–60 minut |
| `aio-strategie` ř. 365–372 | „AIO konzultace“: 60min call, RACI, plán na 90 dní, tracking a KPI dashboard, AIO Maturity self-assessment zdarma | začít Auditem AI viditelnosti, navazující úpravy nacenit; výstupy podle `audit.ts`; věta o strategickém rámci pro tým pryč |
| `ai-search-trendy-cesko-2026` ř. 421–426 | „manuální audit top 30 oborových KW“, shortlist 10–20 URL, plán na 90 dní | metoda podle `audit.ts` (vlastní nástroj, Marketing Miner, ručně), z jakých stránek AI čerpá, prioritní tabulka a 30denní plán |
| `geo-optimalizace` ř. 418 | „projdeme všech 7 kroků GEO playbooku“, „přepis top 20 stránek“ | výchozí stav citací, technika, obsah, důvěryhodnost, co řešit jako první |
| `seo-pro-eshopy-ai-era-2026` ř. 199 | „Strukturované auditní balíčky“ | „Audit AI viditelnosti za 3 600 Kč bez DPH — vrstvy, prioritní seznam úprav a meeting 30–60 minut“ |
| `knowsabout-strukturovana-data` ř. 197 | „60minutovou konzultaci“ | „meeting v délce 30–60 minut“ |
| `za-jak-dlouho-se-projevi-ai-seo` ř. 206 | „Na 60minutové konzultaci“ | „Na meetingu v délce 30–60 minut“ |
| `ai-seo-wordpress` ř. 196 (po kole 1) | audit „zkontroluje … konfiguraci CDN“ | „zkontroluje strukturovaná data, robots.txt i přístup AI robotů“ |
| `ai-seo-b2b` ř. 133, `ai-seo-upgates-shoptet` ř. 153, `e-e-a-t-pro-ai` ř. 166, `llms-txt-navod` ř. 142, `zero-click-ai` ř. 168, `aktualizace-obsahu-pro-ai` ř. 122, `claude-gemini-seo` ř. 126, `srovnavaci-clanky-pro-ai` ř. 121 (po kole 2) | „produktový [Audit AI viditelnosti]“ — čte se jako jiný druh auditu (zbytek bloku z 26. 9.) | „[Audit AI viditelnosti]“ |

Po opravách: grep celého korpusu (Z17) na všechny opravené formulace u auditu prázdný; tytéž obraty zůstaly jen mimo audit
(vlastní postupy článků, konzultace přes `/kontakt/` — např. „projdeme to nad vaším konkrétním webem“ u Strategické
konzultace v `seo-pro-eshopy-ai-era-2026` ř. 203, ve frontě). `jazyk-check.py` 0 nálezů v 16 článcích, `kontrola-komponent.py` 0 (181 použití), build
v pořádku, v HTML žádné nové syrové značky, odkazy na `/sluzby/monitoring-ai/` vykreslené.

## Mimo blok (zapsáno do fronty)

- CTA Packu v `gsc-ai-segmenty-mereni` ř. 239 tvrdí „checklist měření AI viditelnosti — Generative AI report, GA4 a UTM“;
  `pack.ts` nic takového neuvádí → kandidát na blok „CTA Packu slibuje obsah, který Pack nemá“.
- `ai-search-trendy-cesko-2026` ř. 114: `**…**` ve vlastnosti `CompareTable` se vykresluje doslova (na živém webu už dnes).
- Konzultace přes `/kontakt/` („60min konzultace“, „První konzultace nezávazná“) — neověřeno, není to audit.
- Feed, přesměrování, interní prolinkování v CTA auditu — `audit.ts` je nevyjmenovává; ověřit u Kamila, jestli je audit
  e-shopu kontroluje. (Nastavení CDN je podle upřesněného pravidla rozpor a v CTA je opravené.)

## Rozšířené hledání po kole 1 (Z12)

Auditor ukázal, že hledání podle odkazu a názvu nenašlo nepropojenou větu „*Transparentně: AI audity děláme s měřením…*“
(`gsc-ai-segmenty-mereni` ř. 241). Proto znovu celý korpus:
- vzor `audit[^.]{0,80}(měř|GA4|Search Console|report|sledov|logy|logů|vašich dat|CDN)` a obráceně — 35 shod v 19 článcích;
  kromě opraveného ř. 241 jde o postupy pro čtenáře (ruční audit vzorku dotazů, místní audit, ceník trhu) nebo o snímek
  výchozího stavu, který s produktem sedí;
- všechny věty „Transparentně:“ o auditech — zbývá `jak-ai-cituje-zdroje` ř. 211 („AI audity děláme s reálným testem
  napříč platformami“), s `audit.ts` v souladu (test výchozího stavu, bez dat klienta), ponecháno;
- dvě neprázdné věty nad každým CTA s `/audit/`, i přes oddělovač `---` — sliby měření u auditu jen tři místa, která
  našel auditor (`ai-roboti-zatez-webu` ř. 111, `za-jak-dlouho-se-projevi-ai-seo` ř. 204, úvodní otázka
  `informacni-obsah-v-ai-ere` ř. 156); ostatní věty radí měřit čtenáři.

## Vypořádání auditu kola 1 (fakta)

Audit: `blok-oprav-2026-11-23-audit1-result.md` — 3 BLOCKER, 6 WARNING, 3 TIP.

### Zapracováno

| # | Nález | Oprava |
|---|---|---|
| 1 | `gsc-ai-segmenty-mereni` ř. 241 „AI audity děláme s měřením napříč vrstvami (Search Console, GA4, ruční test)“ | první věta vypuštěna; korpus doprohledán (viz výš) |
| 2 | `blokovat-ai-odpovedi-gsc` ř. 182 — Monitoring „řeší“, co článek označuje za neměřitelné | „k rámcovému odhadu vám pomůže průběžné měření … Přínos samotných AI odpovědí Googlu ale neoddělí ani on — z běžně dostupných dat to nejde.“ |
| 3 | `ai-roboti-zatez-webu` ř. 111 „jak to propsat do měření“ v úvodu nabídky | „ale nebudete vědět, co pustit a co omezit, je to přesně chvíle…“ |
| 4 | `informacni-obsah-v-ai-ere` ř. 156 — úvodní otázka chce data klienta | „Nevíte, jestli má AI ve vašich článcích co citovat?“ |
| 5 | `za-jak-dlouho-se-projevi-ai-seo` ř. 204 „změříme to na vašich datech“ | „ukážou to až vaše vlastní data“ |
| 6 | rozsah Monitoringu (zmínky jen v ChatGPT a Přehledu od AI) | `ai-seo-b2b` ř. 30, `mereni-ai-mode-limity` ř. 161, `gsc-ai-segmenty-mereni` ř. 239, `blokovat-ai-odpovedi-gsc` ř. 182 — „zmínky v ChatGPT a v Přehledu od AI“ |
| 7 | `aeo-optimalizace-v-praxi` ř. 450 — „kombinovaný AI viditelnostní audit“ jako druhý název, naznačená implementace, ROI | „AEO playbook se nejlépe škáluje podle priorit napříč webem … kde má AEO největší dopad, pomůže [Audit AI viditelnosti]…“ |
| 8 | `ai-search-trendy-cesko-2026` ř. 428 — nezávazná konzultace jako bezplatný průchod auditem | „První [konzultace](/kontakt/) nezávazná.“ |
| 9 | pravidlo bloku a CDN | pravidlo upřesněno (systémy a účty klienta = rozpor; celá nabídková sekce); doplněna oprava `ai-seo-wordpress` ř. 196 („konfiguraci CDN“ → „přístup AI robotů“); položka fronty rozdělena |
| 10 | `ai-search-trendy-cesko-2026` ř. 423 | „Perplexity, Claude a Gemini ručně“ |
| 11 (část) | `mereni-ai-mode-limity` ř. 161 | „Výchozí stav, proti kterému půjde měřit posun, ukáže…“ (formulace z `audit.ts`) |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 11 (část) | „to dnes neumí nikdo“ (`mereni-ai-mode-limity`) | převzatá věta mimo vadu bloku; auditor sám řadí do příštího refreshe — zapsáno do fronty |
| 12 | `geo-optimalizace` jmenuje postup pro čtenáře „Audit AI viditelnosti“ (ř. 143, 398); vlastní rámce „u klientů“ (aeo, aio, geo) | mimo blok (nejde o popis placeného produktu u odkazu); zapsáno do `REFRESH_QUEUE.md` |

Po opravách: `jazyk-check.py` 0 nálezů v 17 článcích, `kontrola-komponent.py` 0 (194 použití), build v pořádku,
Z17 grep na všechny opravené formulace prázdný.

## C5b — cílené ověření oprav kola 1

Výsledek: `blok-oprav-2026-11-23-c5b-result.md`. Auditor kola 1 (pokračování v jeho kontextu) ověřil jedno kolo navíc
BLOCKERy #1–3, warningy #4–9 a závěr o `jak-ai-cituje-zdroje` ř. 211 — vše OBSTOJÍ, nový zásadní nález není. Jediná
připomínka (sekce „Mimo blok“ ještě uváděla CDN k ověření) opravena podle návrhu. Zbytek řádku 211 v `jak-ai-cituje-zdroje`
(který auditor neměl) mluví o původu čísel v článku, ne o auditu — závěr platí. Nález mimo blok (CTA Packu v
`ai-seo-wordpress` ř. 196) je už v kandidátovi „CTA Packu slibuje obsah, který Pack nemá“.

## Vypořádání auditu kola 2 (jazyk, struktura)

Audit: `blok-oprav-2026-11-23-audit2-result.md` — 0 BLOCKER, 6 WARNING, 10 TIP. Všech 11 řádků „Zapracováno“ z kola 1
auditor ověřil v textu, zbytek opravené vady v témže souboru nenašel; důvody nezapracovaných bodů přijal.

### Zapracováno

| # | Nález | Oprava |
|---|---|---|
| 1 | `aio-strategie` ř. 365 — dvojtečka věšela výčet na navazující úpravy | dvojtečka hned za nabídkou auditu; „Navazující úpravy vám po auditu můžeme nacenit.“ přesunuto před „První konzultace nezávazná.“ |
| 2 | `aio-strategie` ř. 367 — „ji“ se vázalo k tabulce | „prioritní tabulku úprav (u každé dopad, náročnost a kdo ji má řešit)“ |
| 3 | `ai-search-trendy-cesko-2026` ř. 423 — výčet metody se četl jako seznam nástrojů | „…vlastním nástrojem a Přehled od AI přes Marketing Miner; Perplexity, Claude a Gemini kontrolujeme ručně na sadě dotazů…“ |
| 4 | `nahradi-ai-mode-vyhledavani` ř. 171 — vedlejší věta a jména jako předmět jednoho slovesa | „projde, co o vás dnes říkají AI odpovědi, zkontroluje technickou připravenost i obsah…“ |
| 5 | „výchozí stav“ bez upřesnění vedle dat klienta | `roi-ai-seo` „výchozí stav viditelnosti v AI odpovědích“; `mereni-ai-mode-limity` „Výchozí stav viditelnosti v AI odpovědích, proti kterému půjde měřit posun…“ |
| 6 | tučně audit, ne Monitoring | `mereni-ai-mode-limity`, `blokovat-ai-odpovedi-gsc` — **Monitoring AI viditelnosti** tučně |
| 7 | `ai-roboti-zatez-webu` ř. 115 strnulé | „projde, které vyhledávací a které tréninkové AI roboty k webu pouštíte, i to, co o vás dnes říkají AI odpovědi, a pojmenuje, podle čeho se rozhodnout“ |
| 8 | `ai-seo-wordpress` dvě „a“ | „robots.txt i přístup AI robotů a navrhne…“ |
| 9 | `ai-seo-b2b` FAQ „změří … měří“ | „Výchozí stav ukáže [Audit AI viditelnosti]…“ |
| 10 | `geo-optimalizace` ř. 418 „vlastní audit, [Audit…]“ | „nebo nemáte kapacitu projít web sami, [Audit AI viditelnosti]…“ |
| 11 | `roi-ai-seo` „s měsíčním reportem“ vedle varování před měsíčním oknem | „Monitoring…, který měří každý měsíc, ale vývoj hodnotí za delší období“ (stránka monitoringu: hodnotí se trend, doporučuje aspoň 6 měsíců) |
| 12 | `aeo-optimalizace-v-praxi` ř. 450 rozbitý souběh | „AEO playbook se nejlépe škáluje jako postup podle priorit napříč webem — ne jako jednorázová úprava 5 stránek.“ |
| 13 | úřední „meeting v délce 30–60 minut“ | `knowsabout-strukturovana-data` „Součástí je meeting na 30–60 minut.“; `za-jak-dlouho-se-projevi-ai-seo` „Na meetingu (30–60 minut)…“ |
| 14 | `za-jak-dlouho-se-projevi-ai-seo` úvodní otázka s obráceným smyslem | „Nevíte, jestli má AI na vašem webu vůbec z čeho vybírat?“ |
| 15 (část) | „produktový [Audit AI viditelnosti]“ (`ai-seo-b2b` ř. 133) — auditor dal mimo blok | **zapracováno jako součást vady bloku** (audit popsaný jako jiný druh): Z12 našel totéž v 8 článcích, opraveno ve všech (tabulka výš) |
| 16 | záznam po kole 1 nedotažený | řádek `mereni-ai-mode-limity` v tabulce oprav; poznámka o CDN v sekci „Mimo blok“ (už po C5b); věta o Z17 upřesněna |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 15 (část) | nadpis „Kde si nechat poradit nebo implementaci“ (4 články) a gramatika `aeo-optimalizace-v-praxi` ř. 453–454 | mimo vadu bloku (jazyk nadpisů a textu mimo popis auditu); zapsáno do `REFRESH_QUEUE.md` jako jazykový kandidát |

Třetí kolo není potřeba: kolo 2 nemělo BLOCKER a zásadní nálezy kola 1 obstály v C5b; změny po kole 2 jsou doslovná
znění auditora nebo odstranění slova „produktový“ (stylistická náhrada, ne nové tvrzení). Po opravách
`jazyk-check.py` 0 nálezů ve 24 článcích, `kontrola-komponent.py` 0 (260 použití), build v pořádku, vykreslení bez vad.
