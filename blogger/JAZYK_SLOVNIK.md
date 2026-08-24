# JAZYK_SLOVNIK.md — hlídané výrazy

> **Verze: 6** · založeno 2026-08-23 · poslední změna 2026-08-23 (článek 5/147) · audituje skill `cestina-audit`
>
> Jediný zdroj pravdy pro jazykový audit článků. Čte ho člověk i `blogger/jazyk-check.py`
> (tentýž skript má skill `cestina-audit` v `~/.claude/skills/cestina-audit/scripts/`).
> Pravidla přibývají **článek po článku** — každé má povinně důvod a původ.

## Jak číst tabulky

| Sloupec | Význam |
|---|---|
| **Úroveň** | ⛔ nikdy · ⚠️ jen s vysvětlením u prvního výskytu · ✅ zavedené, neřešit |
| **Regex** | co hledá `check.py` (Python, `re.IGNORECASE`). MUSÍ být v zpětných apostrofech — jinak tabulka rozseká alternace na znaku \| |
| **Náhrada** | čím to nahradit, nebo co s tím |
| **Proč** | bez důvodu se pravidlo nezapisuje |
| **Odkud** | slug článku a datum, kde se to poprvé objevilo |

⛔ **Citace jsou z auditu vyňaté.** Doslovná anglická věta z oznámení výrobce je doklad, ne styl.

---

## 1. Anglicismy a kalky

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\bmarket share\b` | podíl na trhu | má přesnou českou náhradu, kterou web jinde používá | seed 2026-08-23 |
| ⛔ | `\btraffic\b` | návštěvnost | totéž; „traffic“ v české větě je čirý kalk | seed 2026-08-23 |
| ⛔ | `\binsight(y|ů|ům)?\b` | poznatky, zjištění | agenturní žargon bez přidané informace | seed 2026-08-23 |
| ⛔ | `(?<!mixed )(?<!Helpful )\bcontent\b(?! (marketing|management|update))` | obsah | jednoslovná náhrada existuje; „mixed content“ je technický termín HTTPS a hlásit se nemá | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bkomprehenzivní\b` | ucelený, souhrnný | otrocký překlad comprehensive | seed 2026-08-23 |
| ⛔ | `\brecentnost\b` | čerstvost, aktuálnost | kalk z recency, čeština to má | seed 2026-08-23 |
| ⛔ | `\beffort(u|em)?\b` | pracnost, náročnost | agenturní slang s přesnou českou náhradou | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\borganic traffic(u|em)?\b` | organická návštěvnost | totéž | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\borganik(u|em)?\b` | organická návštěvnost | zkomolenina, ne termín | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bdeliverable(s)?\b` | výstup | projektová angličtina | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bhandover\b` | předání | totéž | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bcost(u|em)?\b` | náklady | jednoslovný anglicismus | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bintent(y|ů|ům|ech)\b` | záměry hledajících | „intenty“ je slang; jednotné „search intent“ se toleruje jako ⚠️ | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\btie[‑-]?breaker\b` | rozhodne až mezi vyrovnanými výsledky | anglicismus | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bintro\b` | úvod | zbytečný anglicismus i v nadpisu | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\blisting(em|u|y|ů)?\b` | výpis produktů | e-shopový slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bcustom\w*\b` | na míru, vlastní | rozlezlý agenturní slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bfocus\b` | zaměření | totéž | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bformat\b` | formát | nečeský pravopis, ne termín | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bbest practice(s)?\b` | osvědčený postup | anglicismus s přesnou náhradou | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\btrade[‑-]?off(y|ů|ům)?\b` | kompromis | manažerský slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bclick[‑-]?through\b` | proklik | mimo ustálenou zkratku CTR | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bscope\b` | rozsah, zadání | projektový slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bpresence\b` | výskyt, přítomnost | nepřeložený výraz v české větě | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\borganic search\b` | organické vyhledávání | totéž | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bcontent manager\b` | správce obsahu | role se dá pojmenovat česky | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\btime[‑-]to[‑-]result\b` | doba do prvních výsledků | manažerský slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\breview(uje|ovat|oval|ují|ovala)\b` | vyhodnocovat, kontrolovat | počeštěné anglické sloveso | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bna škálu\b` | ve velkém rozsahu, napříč katalogem | kalk z at scale | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bbasic audit\b` | základní audit | totéž | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bdirect link\b` | přímý odkaz | anglicismus | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bduplicates\b` | duplicity | anglické slovo v české větě | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\breinstate\b` | obnovit profil | projektový slang | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\blink building\b` | budování odkazů | zavedené, ale přeložitelné | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\blanding pages\b` | vstupní stránky | množné číslo anglicky uprostřed české věty | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bblueprint(u|em|y)?\b` | osnova, schéma | anglicismus i v titulku | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\boutline\b` | osnova, struktura | redakční žargon | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bwall of text\b` | jednolitá stěna textu | nepřeložený slang | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bnext steps\b` | další kroky | anglicismus ve výčtu | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `(?<!core )(?<!Core )(?<!Content )(?<!Google )\b(update|updatem|updatu|updated|outdated)\b` | aktualizace, zastaralý | počeštěný i nepřeložený tvar; **názvy aktualizací Googlu** (core update, Helpful Content Update) jsou vlastní jména a hlásit se nemají | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\btimestamp\b` | datum aktualizace | technicismus v běžné větě | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bstep-by-step\b` | krok za krokem | anglicismus | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bbroken\b` | rozbitý, neplatný | hovorový anglicismus | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bthought leadership\b` | oborová autorita | marketingový žargon | jak-strukturovat-pillar-content 2026-08-23 |
| ⚠️ | `\bevergreen\b` | nadčasový | obsahový žargon | jak-strukturovat-pillar-content 2026-08-23 |
| ⚠️ | `\bniche\b` | úzký segment, nika | anglicismus, v marketingu zdomácnělý | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⚠️ | `\broadmap(a|u|ou|y)?\b` | plán kroků | web ho používá napříč texty, ale u laika je lepší česky | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⚠️ | `\bproduktovk(a|y|ám|ách|ek|ou)\b` | produktová stránka | interní slang, pro laika neprůhledný | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⚠️ | `\bfix(ů|y|em)?\b` | oprava, úprava | vývojářský slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⚠️ | `\btop (problém|kategori|produktovk|stránk)` | hlavní, nejdůležitější | reklamní zkratka; „top 10“ u pozic ve výsledcích je ✅ | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ✅ | `\btop \d+\b` | — | u pozic ve výsledcích vyhledávání zavedené (top 10 = první stránka) | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⚠️ | `\bmoney page(s)?\b` | hlavní prodejní stránky | agenturní slang, u laika nesrozumitelný | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\bproof points\b` | důkazy důvěryhodnosti | totéž | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\bexact match\b` | přesná shoda | při prvním výskytu vysvětlit | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\bkeyword stuffing\b` | přehnané opakování klíčových slov | zavedený termín, ale pro laika mlha | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\bproxy (indikátor|signál)` | nepřímý ukazatel, nepřímý signál | kalk | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\bfield data\b` | data z reálného provozu | kalk z PSI terminologie | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\bpillar\b` | pilířová stránka | web termín používá v URL i v titulcích, ale v běžné větě ho vysvětli | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\brollout\b` | postupné zpřístupňování | u oznámení výrobců se hodí, ale první výskyt vysvětlit | seed 2026-08-23 |
| ⚠️ | `\blanding page\b` | prodejní stránka | zavedené v oboru, ale ne u laika | seed 2026-08-23 |
| ⛔ | `\bshare\b(?! of voice)` | podíl | „share dotazů“ místo „podíl dotazů“ — kalk, který projde i tam, kde je market share pokrytý | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bshare of voice\b` | podíl zmínek | odborný termín, první výskyt vysvětlit | seed 2026-08-23 |
| ⛔ | `\bmaster switch\b` | hlavní vypínač | anglicismus s přesnou českou náhradou | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bdefault\b(?!-)` | výchozí | web sám jinde píše „výchozí model“, „výchozí režim“ | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bsearch engine(s)?\b` | vyhledávač | mimo doslovné popisky rozhraní prohlížeče | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bbrowser\b` | prohlížeč | v české větě zbytečné | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bsearch bar\b` | vyhledávací pole | mimo doslovné popisky rozhraní | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bbackup\b` | záloha, záložní varianta | běžné slovo, není důvod k angličtině | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bhard limit\b` | pevný limit | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bweb owner\b` | provozovatel webu | role se v češtině pojmenovat dá | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bprivacy-first\b` | zaměřený na soukromí | anglická nálepka místo popisu | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\btest-first\b` | nejdřív otestovat, pak nasadit | módní kalk | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bimpressions\b` | zobrazení | česká Search Console používá „zobrazení“ | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bbaseline\b(?! měření)` | výchozí stav, výchozí metriky | v textu pro čtenáře; v interních poznámkách projektu se toleruje | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bpublisher(ů|i|y|em)?\b` | vydavatel | běžný český termín existuje | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bopt-?in\b` | volitelné, zapíná se ručně | u ovládání robotů je opt-in/opt-out zavedený pár (web má články se slugem opt-out), jinde nahradit | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bleadgen\b` | sběr poptávek | agenturní zkratka, u laika nesrozumitelná | jak-vypnout-ai-overview 2026-08-23 |
| ✅ | `\bbrand(ov|ý|ové|ových)?\b` | — | „brandový dotaz“ je v českém marketingu zavedené | jak-vypnout-ai-overview 2026-08-23 |
| ✅ | `\bsnippet\b` | — | zavedené v SEO i v české nápovědě Googlu | jak-vypnout-ai-overview 2026-08-23 |
| ✅ | `\bSEO\b` | — | zavedená zkratka, jádro oboru | seed 2026-08-23 |
| ✅ | `\be-?shop\b` | — | v češtině běžnější než internetový obchod | seed 2026-08-23 |
| ✅ | `\bcrawler\b` | — | web má vlastní články s tímhle termínem v titulku | seed 2026-08-23 |
| ✅ | `\bprompt\b` | — | zavedené, česká náhrada by mátla | seed 2026-08-23 |
| ✅ | `\bsnippet\b` | — | zavedené v SEO, náhrada „úryvek“ se používá souběžně | seed 2026-08-23 |

## 2. Strojové a AI obraty

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\bnení binární definice\b` | není to otázka ano, nebo ne | kalk | local-seo-cesko-2026 2026-08-23 |
| ⚠️ | `\blokálně orientovan\w*\b` | místní | strojová vazba | local-seo-cesko-2026 2026-08-23 |
| ⚠️ | `\brozeznateln\w* značk\w*\b` | známá značka | doslovný překlad | local-seo-cesko-2026 2026-08-23 |
| ⚠️ | `\bvalidac[ei] přínosu\b` | ověření přínosu | manažerský kalk | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `je důležité (poznamenat|zmínit|si uvědomit)` | vypustit, nebo říct věc rovnou | typický výplňkový obrat generovaného textu | seed 2026-08-23 |
| ⛔ | `v dnešní (digitální )?(době|éře)` | vypustit | prázdná kulisa | seed 2026-08-23 |
| ⛔ | `hraje (klíčovou|zásadní|důležitou) roli` | konkrétně co dělá | nic neříká, jen zvyšuje důležitost | seed 2026-08-23 |
| ⛔ | `v neposlední řadě` | vypustit | výplň bez informace | seed 2026-08-23 |
| ⛔ | `posouvá .{0,20}na (novou úroveň|vyšší level)` | konkrétní změna | marketingová fráze | seed 2026-08-23 |
| ⛔ | `stojí za (zmínku|povšimnutí), že` | říct to rovnou | výplň | seed 2026-08-23 |
| ⛔ | `nezbytn(ý|ým) nástroj` | konkrétně k čemu slouží | superlativ bez opory | seed 2026-08-23 |

## 3. Marketingová vata

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\brevolučn(í|ě)\b` | vypustit nebo doložit | hodnotící superlativ, web ho zakazuje v tonalitě | seed 2026-08-23 |
| ⛔ | `\bunikátní\b` | jedinečný, nebo doložit čím | nadužívané, obvykle nepravdivé | seed 2026-08-23 |
| ⛔ | `\bšpičkov(ý|á|é|ých)\b` | vypustit | hodnocení bez měřítka | seed 2026-08-23 |
| ⚠️ | `\bzásadním způsobem\b` | výrazně, nebo číslo | často zakrývá, že chybí data | seed 2026-08-23 |

## 4. Nepřirozená syntax

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `provádět (optimalizaci|analýzu|kontrolu)` | optimalizovat, analyzovat, kontrolovat | nominalizace místo slovesa | seed 2026-08-23 |
| ⛔ | `dochází k (nárůstu|poklesu|zvýšení|snížení)` | roste, klesá | úřední pasivum | seed 2026-08-23 |
| ⚠️ | `bylo (zjištěno|prokázáno|ukázáno)` | kdo to zjistil | pasivum zakrývá zdroj, což je u tohohle webu problém | seed 2026-08-23 |

## 5. Glosář projektu (termíny, které web sám odmítá)

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\banswer block\w*\b` | krátká odpověď | glosář v CLAUDE.md § X. Regex musí pokrýt **skloňované tvary** („answer blockem“) — bez toho unikl výskyt v článku 4 | seed 2026-08-23, rozšířeno 2026-08-23 |
| ⛔ | `\bschema markup\w*\b` | strukturovaná data | glosář v CLAUDE.md § X | seed 2026-08-23 |
| ⛔ | `\bhub-and-spoke\w*\b` | prolinkování mezi stránkami | glosář v CLAUDE.md § X | seed 2026-08-23 |

## 6. Typografie a interpunkce

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `„[^„“\n<>=]{0,160}"` | zavřít českou uvozovkou “ | opakovaná chyba, rozbíjí i MDX a Python. Regex vylučuje `<>=`, aby nematchoval uvozovky HTML atributů — plošná náhrada bez téhle pojistky rozbila `class="hl"` | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\d%` | mezera před % (25 %) | česká sazba; výjimka jen v přídavném jméně (25% podíl) | seed 2026-08-23 |
| ⛔ | `\w\s-\s\w` | pomlčka – | spojovník mezi slovy místo pomlčky (odrážky a složeniny se nehlásí) | seed 2026-08-23 |
| ⛔ | `\b\d{4}-\d{2}-\d{2}\b(?![^<]*>)` | české datum (23. 8. 2026) | anglický formát data v textu | seed 2026-08-23 |

## 7. Míchání jazyků v jednom sousloví

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\bbusiness (problém|case|model)\b` | obchodní problém | anglicko-český hybrid | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bweb-?only\b` | jen na webu, režim jen s weby | polovičatý slepenec | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bquery-?level\b` | na úrovni dotazů | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\baccount-?specific\b` | pro konkrétní účet | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bAI (Answer feature|summaries)\b` | funkce AI odpovědí, shrnutí od AI | anglický název funkce v české větě, když nejde o oficiální název v rozhraní | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bGoogle features\b` | funkce Googlu | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bper-?pobočkov\w*\b` | stránky pro jednotlivé pobočky | anglicko-český slepenec | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bservice-?area\b` | firma s obsluhovaným územím | totéž | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bservice\+lokalit\w*\b` | stránky typu služba + lokalita | interní zkratka | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bgrid-?based\b` | mřížkový | popis, ne název produktu | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bgeo-?modifikovan\w*\b` | dotaz s uvedenou lokalitou | hybrid | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bsingle-?location\b` | s jednou provozovnou | hybrid | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bmulti-?pobočkov\w*\b` | s víc pobočkami | hybrid | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bfree verze\b` | bezplatná verze | hybrid | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\breview GBP\b|\bmap ranking check\b` | kontrola GBP, kontrola pozic v mapách | anglické sloveso s českou zkratkou | local-seo-cesko-2026 2026-08-23 |
| ⚠️ | `\bpremium (varianta|verze|listing\w*)\b` | placená varianta, placené zápisy | anglický přívlastek | local-seo-cesko-2026 2026-08-23 |
| ⛔ | `\bbody text(u|em)?\b` | hlavní text | hybrid | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bAI engine(s)?\b` | AI nástroj, AI systém | hybrid, není to název produktu | jak-strukturovat-pillar-content 2026-08-23 |
| ⚠️ | `\bbrand mention(s)?\b` | zmínka o značce | web má článek se slugem ai-brand-mentions a používá to jako termín — u prvního výskytu vysvětlit česky, nenahrazovat všude | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\branking tracking\b` | sledování pozic | dvojitý slang | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bcitation monitoring\b` | sledování citací | totéž | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bcitation (hook|rate)\b` | místo vhodné k citaci, míra citování | agenturní slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bbrand exposure\b` | viditelnost značky | totéž | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\blong[‑-]?form\b` | dlouhý, rozsáhlý | polovičatý hybrid | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bresearch fáz(e|i|í|e)\b` | fáze zvažování | hybrid, v článku 3 pětkrát | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\brecommendation\b` | doporučení | anglické slovo u názvu služby | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bintent coverage\b` | pokrytí záměrů | dvojitý kalk | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bbuying[- ]journey\b|\bbuyer'?s? journey\b` | fáze nákupního rozhodování | slepenec | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bcontent freshness\b` | aktuálnost obsahu | totéž | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\boffer fit\b` | soulad nabídky s trhem | nesrozumitelné v české větě | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\bgap analýz(a|y|ou|u)\b` | analýza mezer | hybrid | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\binbound intern` | příchozí interní odkazy | hybrid | seo-audit-co-kontrolovat 2026-08-23 |
| ⛔ | `\b(kickoff|debrief|discovery) call\b` | úvodní / závěrečný hovor | firemní slang | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\branking faktor\b` | faktor hodnocení | poloviční překlad, v oboru zavedený | seo-audit-co-kontrolovat 2026-08-23 |
| ⚠️ | `\bbrand vs\.? non-?brand\b` | brandové vs. nebrandové dotazy | při prvním výskytu rozepsat | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bquery mix(u|em)?\b` | skladba dotazů | žargon | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bcluster URL\b` | skupina URL | žargon | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\bseed dotaz(u|em)?\b` | výchozí dotaz | žargon | jak-vypnout-ai-overview 2026-08-23 |
| ⚠️ | `\brising queries\b` | rychle rostoucí dotazy | název sloupce v Trends, ale v české větě vysvětlit | jak-vypnout-ai-overview 2026-08-23 |

## 8. Co se NEauditovalo (výjimky)

| Co | Proč |
|---|---|
| Doslovné popisky rozhraní (`Settings → Search engine → Manage search engines`, `Add a Search Engine`) | jsou to skutečné položky menu v anglickém prohlížeči; překlad by čtenáře poslal hledat něco, co tam není. **Piš je do zpětných apostrofů** — checker je pak přeskočí a čtenář je odliší od běžného textu |
| Anglické citace ze zdrojů | doklad, ne styl |
| Názvy funkcí a produktů (Search Labs, AI Overviews, DuckAssist) | vlastní jména |
| Direktivy a parametry (`data-nosnippet`, `&udm=14`, `max-snippet`) | kód |

## 9. Pojistky proti poškození kódu

⛔ **Normalizaci uvozovek NIKDY nepouštěj plošně přes celý soubor.** Dvakrát to rozbilo kód:

| Kdy | Co se stalo |
|---|---|
| `jak-vypnout-ai-overview` 2026-08-23 | regex `„…"` sáhl na uvozovku HTML atributu → `class="hl“` |
| `seo-audit-co-kontrolovat` 2026-08-23 | tentýž regex sebral **uzavírací uvozovku JSX prop** `desc: "…"` → MDX se nepřeložilo |

**Povinný postup:**
1. Regex musí být `„[^„“\n<>=]{0,160}"` (vylučuje `<>=`).
2. Řádky s JSX prop (`title:`, `desc:`, `text:`, `label=`) opravovat **ručně, jeden po druhém**, ne dávkově.
3. **Po každé dávce úprav `npm run build`** — build je jediná pojistka, která tuhle třídu chyb chytí.

| `jak-strukturovat-pillar-content` 2026-08-23 | dávkové obalení názvů komponent do zpětných apostrofů zasáhlo i `import` řádky (`import \`Stepper\` from …`) |

4. **Žádná dávková náhrada nesmí sáhnout na řádky `import`, `export` a frontmatter klíče.** Před zápisem si vždy vypiš, kolik řádků se změní, a zkontroluj, jestli mezi nimi nejsou technické.
