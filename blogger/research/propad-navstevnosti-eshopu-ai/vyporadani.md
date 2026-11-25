# Vypořádání auditů — propad-navstevnosti-eshopu-ai (Z18)

## Kolo 1 — fakta a aktuálnost (Codex, vlákno auditora 01a2150f-75c1-7722-b726-9a1702755cf7, 26. 11. 2026)

Verdikt auditora: OPRAVIT PŘED PUBLIKACÍ — 10× BLOCKER, 6× WARNING. Auditor nezávisle přepočítal všechna čísla MEGA DETAIL
(sedí). Plný výstup: `audit1-result.md`. Z17: kontrolní grep na „neukáže“, „funguje až od června“, „od června 2026 přesouvá“,
„nikdo nedoložil“, „Nejčastěji citované“, „z výroků, ne z měření“, „zdaleka nevyrovnávají“, „s AI odpověďmi ji spojit nejde“,
„sezónou to nevysvětlíte“, „Na sezónu to nevypadá“, „beze změny“, „Teprve když“, „se nepromítne vůbec“, „proto jiné číslo“,
„u českých e-shopů v roce 2026“ → 0 výskytů.

| # | Nález | Rozhodnutí | Co se změnilo |
|---|---|---|---|
| 1 | BLOCKER — „Search Console neukáže, u kterých dotazů se Přehled od AI zobrazil“ bez ověření UI | ✅ zapracováno jinak | Opřeno o dokumentaci místo UI: Search Console podle [dokumentace Googlu](https://developers.google.com/search/docs/appearance/ai-features) počítá zobrazení a kliky z Přehledu od AI a režimu AI do celkového výkonu ve vyhledávání na webu, takže z exportu podle zařízení a stránek jeho příspěvek neoddělíme. Krok Stepperu: „V datech Search Console oddělte…“. Nový řádek tabulky podmínek. |
| 2 | BLOCKER — červen 2026 jako start kanálu AI Assistant v GA4 | ✅ zapracováno | Checklist i krok 4: „Google ho oznámil 13. 5. 2026, na našem e-shopu má první relace v červnu“. |
| 3 | BLOCKER — výklad měření bez parametrů URL a podmínky „neplacený“ | ✅ zapracováno | Insight a FAQ 3: zdroj AI se pozná z odkazující adresy nebo označení v URL; mobilní aplikace připsané Marketing Mineru; „neplacené prokliky z Přehledu od AI a režimu AI“; samostatně dohledaná návštěva se zaznamená, vazbu na doporučení nepoznáte. |
| 4 | BLOCKER — úvod, `answer` a FAQ zobecňují vzorky | ✅ zapracováno | `answer`: „u sledovaných českých e-shopů“, „Shoptet uvádí průměrný podíl kolem 0,3 % návštěv na své platformě“, „u více než stovky e-shopů s doplňkem Marketing Mineru“, „podhodnocená“. Úvod: „u jimi sledovaných českých e-shopů“. FAQ 1 s výhradami a „celý český trh nepopisují“. +62 % vztaženo k počtu obchodů. |
| 5 | BLOCKER — Marketing Miner: průměry skupin, odhad 2–3× u jiné metriky | ✅ zapracováno | „průměr čtvrtiny nejviditelnějších 1,9 %, desetiny 3 %; počet i podíl objednávek od ledna do července dvojnásobné“; výhrada „skutečné návštěvy a tržby z AI firma odhaduje na dvoj- až trojnásobek“. |
| 6 | BLOCKER — APEK bez způsobu sběru; rozdíl 50 × 31 % kauzálně | ✅ zapracováno | APEK: „internetový průzkum, 1 504 respondentů“, „už nějak využili“; Shoptet 31 %: „jiné šetření s jinou otázkou, velikost vzorku zdroj neuvádí; bez metodiky rozdíl proti APEK nevysvětlíme“. |
| 7 | BLOCKER — srovnání konverzí bez období, kanálu a počtu nákupů | ✅ zapracováno | Text i FAQ 4: 15. 6.–30. 9. 2026, kanál AI Assistant × organické vyhledávání, nákupy na relaci, jen vstupy na produkt, 26 a 31 nákupů jednoho e-shopu. U Shoptetu doplněno, že období a definici nového zákazníka neuvádí. |
| 8 | BLOCKER — meziroční srovnání sezónnost nevylučuje | ✅ zapracováno | Krok 1: „Rozdílný vývoj dvou let ukazuje, že se neopakuje stejný průběh, sezónní vliv ale sám nevylučuje.“ Příklad: celková čísla obou období a „podíl sezónnosti na poklesu z této řady neurčíme“. |
| 9 | BLOCKER — pokles zobrazení produktů jako vyloučení AI | ✅ zapracováno | „U ostatních adres klesla zobrazení o 43 %, zatímco míra prokliku vzrostla …; tuhle změnu tedy nižší míra prokliku nevysvětluje. Bez podrobnějšího rozkladu ale neoddělíme změnu poptávky, skladby dotazů, stránek a pozic ani případnou souvislost s AI.“ Název skupiny podle exportu: „ostatní: produkty, kategorie, jazykové verze“. |
| 10 | BLOCKER — „AI asistenti ztrátu zdaleka nevyrovnávají“ | ✅ zapracováno | „Přírůstek doměřených relací ze zdrojů AI (279) tak početně odpovídá asi 9 % úbytku organických relací. Celý vliv AI to nevyjadřuje …; organika navíc sama obsahuje neplacené prokliky z AI funkcí Googlu.“ Insight přepsán stejně. |
| 11 | WARNING — přehled aktualizací neúplný k 26. 11. | ✅ zapracováno | Checklist: spamová 24. 3. pro březen, jádrová 10. 11. a položka December 2026 core update od 24. 11.; „Souběh v čase sám dopad na váš web nedokazuje.“ `research.md`: opravené délky spamových aktualizací. |
| 12 | WARNING — „nenašel jsem“ → „nikdo nedoložil“; „nejčastěji citované“ | ✅ zapracováno | „Jeden z citovaných údajů…“; nadpis „výrok bez zveřejněných dat“; „Veřejné české měření … jsem v podkladech k 26. 11. 2026 nenašel. To není důkaz nulového vlivu ani důkaz, že takové podklady neexistují.“ |
| 13 | WARNING — průměrné pozice nejsou kontrolou stejných dotazů | ✅ zapracováno | Tabulka „mobil mírně hůř, počítač lépe“; odstavec „Jde ale o souhrnné údaje, ve kterých se může měnit skladba dotazů a stránek — kontrolou stejných výsledků vyhledávání to není.“ Krok 2 se srovnatelností. |
| 14 | WARNING — 417 × 418 relací AI Assistant v podkladech | ❌ nezapracováno do článku | Článek číslo 417 neuvádí; počítá se součtem zdrojů 423, který auditor potvrdil. Rozdíl jedné relace mezi dvěma dotazy GA4 (souhrn kanálu × rozpis zdrojů) závěr nemění; zapsán do tabulky podmínek v `research.md`. |
| 15 | WARNING — +62 % nesouhlasí přesně s 11 600 / 7 100 | ❌ nezapracováno do článku | Článek uvádí údaj s atribucí („podle Shoptetu meziročně o 62 % víc“), nevydává ho za vlastní výpočet; rozdíl 62 × 63,4 % je ve zdroji (nejspíš zaokrouhlené počty) a smysl věty nemění. Zapsáno do `research.md`. |
| 16 | WARNING — pokles CTR jako nutná podmínka pro AI viditelnost | ✅ zapracováno | „Pokles míry prokliku u informačních stránek při srovnatelných pozicích je důvod prověřit změny ve výsledcích vyhledávání včetně AI odpovědí, ne důkaz jejich vlivu. Jestli vás AI odpovědi zmiňují, má ale smysl sledovat bez ohledu na to, odkud se vzal pokles.“ Konec `answer`: „Ze samotného poklesu organiky vliv AI určit nejde.“ |
| — | Tabulka podmínek a rozpory v research | ✅ zapracováno | ChatGPT „přes 90 %“ ve zdroji je (opraveno), délky spamových aktualizací, Marketing Miner (průměry skupin, 2–3× pro návštěvy a tržby), konverze MEGA DETAIL (období, kanál, počty), GA4 (parametr URL, oznámení × první data), nový řádek AI funkce v Search Console. |

**Zásadní nálezy pro C5b:** 1, 3, 4, 5, 7, 8, 9, 10.

## Kolo 2 — jazyk, struktura, SEO, CTA a kontrola vypořádání (Codex, vlákno 01a21518-f51b-7452-be22-f318891aeebf, 26. 11. 2026)

Verdikt auditora: OPRAVIT PŘED PUBLIKACÍ — 3× BLOCKER (zbytky nálezů kola 1: 4, 7, 12), 8× WARNING. Kontrola vypořádání:
11 ze 14 zapracovaných uzavřeno, 3 otevřené; nezapracování nálezů 14 a 15 auditor přijal. Plný výstup: `audit2-result.md`.
Z17: grep na „nejčastěji citovan“, „organik“, „škrtat“, „Ze samotného poklesu to“, „Z výroku jednatele“, „jak poznat, jestli“,
„Jak vliv AI“ → 0 výskytů. Článek přepsán celý (opravy se dotkly většiny sekcí).

| # | Nález | Rozhodnutí | Co se změnilo |
|---|---|---|---|
| 1 | BLOCKER — vzorky v `answer`, H2 a závěru (zbytek nálezu 4) | ✅ zapracováno | `answer` podle návrhu auditora (začíná definicí, Přehled od AI a část Gemini, doplněk pro Shoptet, „příčinu poklesu … neurčují“, 59 slov); H2 „Návštěvy a objednávky z AI — ve sledovaných vzorcích průměrně desetiny procenta“; závěr „U e-shopů sledovaných Shoptetem a Marketing Minerem …“. |
| 2 | BLOCKER — FAQ o konverzích bez kanálu a metriky (zbytek nálezu 7) | ✅ zapracováno | FAQ 4 podle návrhu (AI Assistant, nákupy na relaci, vstup na produkt, 26 a 31 nákupů, organické vyhledávání zahrnuje AI funkce Googlu); odstavec v těle přepsán stejně a oddělen od údajů Shoptetu. |
| 3 | BLOCKER — „Čtyři nejčastěji citovaná česká čísla“ (zbytek nálezu 12) | ✅ zapracováno | „Následující čtyři české údaje měří různé věci.“ Kontrolní grep teď hledá kořen bez ohledu na rod a velikost písmen. |
| 4 | WARNING — popis a návod slibují určení vlivu AI | ✅ zapracováno | `description` (144 znaků), poslední věta úvodu a H2 „Propad návštěvnosti e-shopu — pět kontrol před závěrem o vlivu AI“ podle návrhu. |
| 5 | WARNING — FAQ 2 a 5 bez předmětu | ✅ zapracováno | Obě odpovědi pojmenují předmět v první větě. |
| 6 | WARNING — FAQ o GA4 v jednom souvětí | ✅ zapracováno | Rozděleno do čtyř vět bez ztráty podmínek. |
| 7 | WARNING — položka Checklistu jako chronologie | ✅ zapracováno | Položka zkrácena na úkon; data aktualizací v novém H3 „Aktualizace Googlu k 26. 11. 2026“ hned za Checklistem. |
| 8 | WARNING — Stepper: krok 1 bez slovesa, krok 4 bez úkonu | ✅ zapracováno | Krok 1 a krok 4 (titulek i popis) podle návrhu. |
| 9 | WARNING — 127slovný odstavec, kostrbaté vazby | ✅ zapracováno | Rozbor rozdělen do H3 „Články: …“, „Ostatní stránky: …“ a navíc „Přírůstek ze zdrojů AI proti úbytku z vyhledávání“; věta o souhrnných údajích podle návrhu. |
| 10 | WARNING — slang „organika“ | ✅ zapracováno | Všechny výskyty nahrazeny („návštěvy z organického vyhledávání“, „organické návštěvnosti“…); H2 „Pokles organické návštěvnosti — pět dalších vysvětlení k prověření“. Pozn.: regex slovníku skloňované tvary nechytá — kandidát na rozšíření pravidla. |
| 11 | WARNING — „nejdřív měřit, pak škrtat“ | ✅ zapracováno | H2 „AI viditelnost e-shopu — sledovat zmínky má smysl i bez prokázané příčiny poklesu“. |
| — | Zbytky v `research.md` (ř. 15 tvrzení o rozhraní, ř. 27 „z výroku, ne z měření“) | ✅ zapracováno | Obě místa přepsána. |

**Jazykový průchod (C6):** `jazyk-check.py` 0 nálezů po kole 2.

## C5b — doověření zásadních oprav (vlákno auditora kola 1, 26. 11. 2026)

Poslané nálezy 1, 3, 4, 5, 7, 8, 9, 10 a 12: **8 OBSTOJÍ, nález 4 NEOBSTOJÍ v celém rozsahu**, nový blocker žádný.
Plný výstup: `c5b-result.md`.

| Nález | Rozhodnutí | Co se změnilo |
|---|---|---|
| 4 — úvodní věta: „přímé návštěvy a objednávky … rostou“ (doložen je růst počtu obchodů s návštěvami z AI a počtu i podílu objednávek, ne návštěv) | ✅ zapracováno **doslovně zněním auditora z C5b** | „Podle dat Shoptetu a Marketing Mineru dosahují průměrné doměřené podíly přímých návštěv a objednávek z AI asistentů u jimi sledovaných českých e-shopů v roce 2026 desetin procenta.“ Grep na „rost…“ v článku: žádný další výskyt; růst počtu obchodů (Shoptet) a počtu i podílu objednávek (Marketing Miner) zůstává rozlišen v tabulce. Další kolo neposílám — jde o text, který auditor sám navrhl jako opravu tohoto nálezu (strop „jedno kolo navíc“ dodržen). |
