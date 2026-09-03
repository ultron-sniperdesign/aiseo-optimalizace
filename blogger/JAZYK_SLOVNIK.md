# JAZYK_SLOVNIK.md — hlídané výrazy

> **Verze: 59** · založeno 2026-08-23 · poslední změna 2026-09-02 (výjimky Content Signals a Content API for Shopping) · audituje skill `cestina-audit`
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

⛔ **Zavedená oborová mluva není anglicismus.** Když se výraz běžně používá i v českém prostředí oboru (marketing, vývoj, produkt), patří na úroveň ✅ — přísnost má mířit na kalky, strojové obraty a texty opsané z anglických stránek. Rozhodnuto 23. 8. 2026 u výrazů *industry-standard, best practice, benchmark, deploy, dashboard, use case*.

⛔ **Citace jsou z auditu vyňaté.** Doslovná anglická věta z oznámení výrobce je doklad, ne styl.

---

## 1. Anglicismy a kalky

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\bmarket share\b` | podíl na trhu | má přesnou českou náhradu, kterou web jinde používá | seed 2026-08-23 |
| ⛔ | `(?<!dark )(?<!dark AI )\btraffic\w*` | návštěvnost | „traffic“ v české větě je kalk, včetně skloňování („trafficu“). **Výjimka:** „dark traffic“ / „dark AI traffic“ — pojmenovaný jev, který článek uvádí v uvozovkách a vysvětluje | seed 2026-08-23, výjimka case-study-megadetail 2026-08-26 |
| ⛔ | `\binsight(y|ů|ům)?\b` | poznatky, zjištění | agenturní žargon bez přidané informace | seed 2026-08-23 |
| ⛔ | `(?<!mixed )(?<!Helpful )(?<!AI SEO )\bcontent\b(?! (marketing|management|update|[Cc]redentials|Signals?|API))(?!-(Type|Length|Encoding|Security|Signal|Usage))` | obsah | jednoslovná náhrada existuje. **Nehlásí:** „mixed content“, „Helpful Content Update“, **„Content Credentials“ (název standardu C2PA)**, názvy HTTP hlaviček, **„Content Signals“ / `Content-Signal` (politika Cloudflare) a `Content-Usage` (draft IETF AIPREF), **„Content API for Shopping“ (název rozhraní Googlu)** a **„AI SEO content“ — cílová fráze a slug článku `ai-seo-content`, mění se jen se slugem** | seed 2026-08-23, doplněno jak-poznat-ai-obrazek 2026-08-26, AI SEO content 2026-08-29, Content Signals 2026-09-02, Content API 2026-09-02 |
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
| ⛔ | `(?<!merchant )\blisting(em|u|y|ů)?\b` | výpis produktů | e-shopový slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bcustom\w*\b(?![ ]?(Editor|Fields?|Post|Taxonom))` | na míru, vlastní | rozlezlý agenturní slang. **Výjimka:** názvy funkcí produktů („Schema Custom Editor“ v AIOSEO, „Custom Fields“ ve WordPressu) — vlastní jména rozhraní | seo-pro-eshopy-ai-era-2026 2026-08-23, výjimka ai-seo-wordpress 2026-08-25 |
| ⛔ | `\bfocus\b` | zaměření | totéž | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bformat\b` | formát | nečeský pravopis, ne termín | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ✅ | `\bbest practice(s)?\b` | — | **Rozhodnutí uživatele 23. 8. 2026:** v marketingu a vývoji zavedený výraz, v českém prostředí běžný. Nehlásit. | seo-pro-eshopy-ai-era-2026 2026-08-23 |
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
| ⚠️ | `\bv produkci\b` | na živém webu, v ostrém provozu | kalk z „in production“; u vývojářů běžné, u majitele webu ne | strukturovana-data-pro-ai 2026-08-24 |
| ⚠️ | `\b(zůst\w+|nezůst\w+|zůstal\w*) v abstraktu\b` | jen v obecné rovině | kostrbatá vazba „zůstat v abstraktu“. **Pozor:** „v abstraktu studie“ je odborný význam (shrnutí článku), ten se nehlásí | kolik-stoji-ai-seo 2026-08-25, zúženo co-rozhoduje-o-ai-citaci 2026-08-26 |
| ⚠️ | `\bcenov\w+ kotv\w+` | orientační cena, číslo pro srovnání | kalk z „price anchor“; v české větě marketingový žargon | kolik-stoji-ai-seo 2026-08-25 |
| ⛔ | `\broot úrov\w+` | v kořeni domény, na kořenové úrovni | kalk z „root level“; česky nepřirozené | llms-txt-navod 2026-08-25 |
| ⚠️ | `\blinkovan\w+` | odkazovaný | mechanický překlad „linked“; česky se odkazuje, nelinkuje | llms-txt-navod 2026-08-25 |
| ⚠️ | `\b[a-zá-ž.]+ check\b` | kontrola X, ověření X | anglicko-český slepenec typu „llms.txt check“; česky se popíše funkce | llms-txt-navod 2026-08-25 |
| ⚠️ | `\b\d+[–-]\d+ stránkov\w+` | web o jedné až třech stránkách | číselný slepenec s přídavným jménem; česky se rozepíše | llms-txt-navod 2026-08-25 |
| ⛔ | `\bout-of-the-?box\b` | hotové v základu, bez úprav | anglicismus, navíc marketingově neurčitý | ai-seo-upgates-shoptet 2026-08-24 |
| ✅ | `\buse case(s)?\b` | — | **Rozhodnutí uživatele 23. 8. 2026:** v marketingu a vývoji zavedený výraz, v českém prostředí běžný. Nehlásit. | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bDIY checklist\b` | kontrolní seznam, který zvládnete sami | slepenec | ai-seo-audit 2026-08-24 |
| ⚠️ | `\bztrat\w+ krok s\b` | přestanete zachycovat změny | publicistické klišé | ai-seo-audit 2026-08-24 |
| ⚠️ | `\bpřipravili jsme\b` | k dispozici je | prodejní tón ve věcném textu | ai-seo-audit 2026-08-24 |
| ⛔ | `\b90-?day\b` | plán na 90 dní, devadesátidenní | hybrid, byl i v titulku | aio-strategie 2026-08-23 |
| ✅ | `\bAIO Maturity Model\b` | — | **název vlastního frameworku webu** (uvádí se s ™). Jméno se nepřekládá; obecné použití „maturity level“ ano. **Rozhodnutí uživatele 24. 8. 2026: název zůstává anglicky.** Obecná spojení („maturity level“) se překládají, název ne. | aio-strategie 2026-08-24 |
| ⛔ | `(?<!AIO )\bmaturity\s?(model|level|score)?\w*\b` | zralost, úroveň zralosti | hybrid; pozor, „maturity level" a „maturity levelu" unikly první verzi pravidla mířené jen na „maturity model" | aio-strategie 2026-08-24 |
| ⛔ | `\borg chart\b` | rozdělení rolí | anglicismus | aio-strategie 2026-08-23 |
| ⛔ | `\bsocial listening\b` | sledování sociálních sítí | anglicismus | aio-strategie 2026-08-23 |
| ⚠️ | `\bcross-funkční\b` | mezioborový | zdomácnělý hybrid, ale česky je to srozumitelnější | aio-strategie 2026-08-23 |
| ⛔ | `\bOS-?level\b` | na úrovni operačního systému | hybrid | ai-search-trendy-cesko-2026 2026-08-23 |
| ⛔ | `\bknowledge-heavy\b` | postavený na odborném obsahu | hybrid | ai-search-trendy-cesko-2026 2026-08-23 |
| ⛔ | `\bgrowth hack\w*\b` | trik | marketingový slang | ai-search-trendy-cesko-2026 2026-08-23 |
| ⛔ | `\btopic cluster\w*\b` | tematický shluk článků | hybrid | ai-search-trendy-cesko-2026 2026-08-23 |
| ⛔ | `\bcontent angles\b` | návrhy témat | hybrid | ai-search-trendy-cesko-2026 2026-08-23 |
| ⛔ | `\banswer engine(s)?\b(?! Optimization)` | odpovídací systém | mimo název disciplíny Answer Engine Optimization | aeo-optimalizace-v-praxi 2026-08-23 |
| ⛔ | `\bcontent-driven\b|\bcontent base\b|\bcontent tým\b` | postavený na obsahu, obsahová základna, obsahový tým | hybridy | aeo-optimalizace-v-praxi 2026-08-23 |
| ⛔ | `\bAI presence\b|\bAIO presence\b` | viditelnost v AI, výskyt v AIO | hybrid | aeo-optimalizace-v-praxi 2026-08-23 |
| ⛔ | `\bbrand awareness\b` | známost značky | hybrid | aeo-optimalizace-v-praxi 2026-08-23 |
| ⛔ | `\bguest post farm\w*\b` | farmy hostovaných článků | hybrid | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⛔ | `\blink exchange(s)?\b` | výměna odkazů | anglicismus | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⛔ | `\bfact[‑-]?density\b` | hustota faktů | produktový slang | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⛔ | `\bcontent depth\b` | hloubka obsahu | hybrid | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⚠️ | `\bresearch[‑-]?driven\b` | opřený o výzkum | samotný „research“ je ✅, ale spřežka s pomlčkou je stále hybrid | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⛔ | `\brecovery\b` | obnovení výkonu | anglicismus | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⛔ | `\bmerge\b|\bmergnout\b` | sloučit | pracovní slang | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⛔ | `\bgatekeeper\b` | vstupní podmínka | anglicismus | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⚠️ | `\bcontent gap\b` | mezery v obsahu | ⛔ pozor na pád: „obsahové gap“ je špatně, je potřeba přeformulovat celou vazbu | caste-chyby-v-seo-2026-update 2026-08-23 |
| ⛔ | `\bbottleneck\b` | hlavní omezení, úzké hrdlo | anglicismus | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bcredit-?based\b` | účtovaný po kreditech | ceníkový žargon z anglických stránek nástrojů | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bpull report\b` | spuštění reportu | produktový slang | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bcustom pricing\b` | individuální cena | totéž | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bbest value\b` | nejlepší poměr ceny a výkonu | reklamní klišé | seo-nastroje-2026 2026-08-23 |
| ✅ | `\bindustry-?standard\b` | — | **Rozhodnutí uživatele 23. 8. 2026:** v marketingu a vývoji je to běžně používaný výraz i v Česku, nejde o reklamní klišé. Původně jsem ho zařadil jako ⛔, chybně. Nehlásit. | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bdifficulty score\b` | skóre obtížnosti | popis funkce převzatý z cizího webu | seo-nastroje-2026 2026-08-23 |
| ✅ | `\bdeploy\w*\b` | — | **Rozhodnutí uživatele 23. 8. 2026:** v marketingu a vývoji zavedený výraz, v českém prostředí běžný. Nehlásit. | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\boverkill\b` | zbytečně robustní řešení | anglicismus | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bAI (Search )?[Vv]isibility\b(?! ?(Checker|Tracker|Index))` | viditelnost v AI | web sám používá české „AI viditelnost“. **Výjimka:** názvy nástrojů („Ahrefs AI Visibility Checker“, „Semrush AI Search Visibility Checker“) — vlastní jména | seo-nastroje-2026 2026-08-23, zúženo test-viditelnosti-v-ai 2026-08-25 |
| ⛔ | `\bsetup\b` | nastavení | anglicismus v instrukci | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bsubmit\b` | odeslat | totéž | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bmention rate\b|\bsources cited\b` | míra zmínek, citované zdroje | popisy metrik z anglických nástrojů | seo-nastroje-2026 2026-08-23 |
| ✅ | `\bdashboard\w*\b` | — | **Rozhodnutí uživatele 23. 8. 2026:** v marketingu a vývoji zavedený výraz, v českém prostředí běžný. Nehlásit. Platí i pro tvar „dashboarding“. | seo-nastroje-2026 2026-08-23 |
| ⚠️ | `\bFortune 500\b` | největší nadnárodní firmy | kulturně cizí zkratka, u prvního výskytu vysvětlit | seo-nastroje-2026 2026-08-23 |
| ⚠️ | `\betablovan\w* hráč\b` | zavedený nástroj | PR klišé | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bsession(s)?\b` | relace | české GA4 používá „relace“ | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\bstakeholder(a|e|em|ům|y)?\b` | příjemce reportu | manažerský anglicismus | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\bdefaultn(í|ího|ím|ích)\b` | výchozí | počeštěný tvar zakázaného „default“ | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\bgrowth\b` | růst | jednoslovný anglicismus | mereni-seo-vykonu-2026 2026-08-23 |
| ✅ | `\bdashboarding\b` | — | **Rozhodnutí uživatele 23. 8. 2026:** v marketingu a vývoji zavedený výraz, v českém prostředí běžný. Nehlásit. | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\bsolid\b` | slušný, dobrý | anglické hodnocení v české větě | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\bhealthy\b` | zdravý vývoj | totéž | mereni-seo-vykonu-2026 2026-08-23 |
| ✅ | `\bbenchmark(y|em|u|ů)?\b` | — | **Rozhodnutí uživatele 23. 8. 2026:** v marketingu a vývoji zavedený výraz, v českém prostředí běžný. Nehlásit. | mereni-seo-vykonu-2026 2026-08-23 |
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
| ⛔ | `\bshare\b(?! of (voice|model|search))` | podíl | „share dotazů“ místo „podíl dotazů“. **Výjimka:** názvy metrik Share of Model / Voice / Search | jak-vypnout-ai-overview 2026-08-23, zúženo share-of-model-metrika 2026-08-26 |
| ⚠️ | `\b(?-i:share of voice)\b` | podíl zmínek | odborný termín. **Hlásí se jen v malých písmenech** — „Share of Voice“ velkými je název metriky (viz `share-of-model-metrika`), `(?-i:…)` vypne ignorování velikosti jen pro tenhle výraz | seed 2026-08-23, zúženo 2026-08-26 |
| ⛔ | `\bmaster switch\b` | hlavní vypínač | anglicismus s přesnou českou náhradou | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bdefault\b(?!-)` | výchozí | web sám jinde píše „výchozí model“, „výchozí režim“ | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bsearch engine(s)?\b(?! Land| Journal| Roundtable| Watch)` | vyhledávač | mimo doslovné popisky rozhraní prohlížeče a **názvy publikací** (Search Engine Land, Journal, Roundtable) | jak-vypnout-ai-overview 2026-08-23, upřesněno u článku 8 |
| ⛔ | `\bbrowser\b` | prohlížeč | v české větě zbytečné | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bsearch bar\b` | vyhledávací pole | mimo doslovné popisky rozhraní | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bbackup\b` | záloha, záložní varianta | běžné slovo, není důvod k angličtině | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bhard limit\b` | pevný limit | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bweb owner\b` | provozovatel webu | role se v češtině pojmenovat dá | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bprivacy-first\b` | zaměřený na soukromí | anglická nálepka místo popisu | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\btest-first\b` | nejdřív otestovat, pak nasadit | módní kalk | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bimpressions\b` | zobrazení | česká Search Console používá „zobrazení“. **Pozor na rozdíl:** vada je *anglické* „impressions“ v české větě, ne počeštěné „imprese“ (viz ✅ níže) | jak-vypnout-ai-overview 2026-08-23, upřesněno 2026-08-25 |
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
| ✅ | `\bunikátn\w+` | — | **Rozhodnutí uživatele 25. 8. 2026:** „unikátní“ je běžné české slovo. Vata je až prázdný nárok („unikátní řešení“ bez doložení), ne slovo samo | revize 2026-08-25 |
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
| ⛔ | `\bschema markup\w*` | strukturovaná data | anglický termín tam, kde web používá české „strukturovaná data“. **Výjimka `[skip:schema-markup-ai-citace-test,jak-cist-studie-o-ai-viditelnosti]`:** ten článek termín sám rozebírá a má ho v titulku i v klíčových slovech | seed 2026-08-23, výjimka 2026-08-26 |
| ⛔ | `\bhub-and-spoke\w*\b` | prolinkování mezi stránkami | glosář v CLAUDE.md § X | seed 2026-08-23 |

## 6. Typografie a interpunkce

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `„[^„“\n<>=]{0,160}"` | zavřít českou uvozovkou “ | opakovaná chyba, rozbíjí i MDX a Python. Regex vylučuje `<>=`, aby nematchoval uvozovky HTML atributů — plošná náhrada bez téhle pojistky rozbila `class="hl"` | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\d%(?![ ]?[\wá-ž])` | mezera před % (25 %) | česká sazba. **Regex vynechává přídavné jméno** („100% podíl“, „50% nárůst“) — dřív je hlásil jako chybu; nástroj nedokáže rozlišit „50 % webů“ od „50% nárůstu“, proto raději mlčí | seed 2026-08-23, zúženo lighthouse-ai-check 2026-08-25 |
| ⛔ | `\w\s-\s\w` | pomlčka – | spojovník mezi slovy místo pomlčky (odrážky a složeniny se nehlásí) | seed 2026-08-23 |
| ⛔ | `\b\d{4}-\d{2}-\d{2}\b(?![^<]*>)` | české datum (23. 8. 2026) | anglický formát data v textu | seed 2026-08-23 |

## 7. Míchání jazyků v jednom sousloví

| Úroveň | Regex | Náhrada | Proč | Odkud |
|---|---|---|---|---|
| ⛔ | `\bbusiness (problém|case|model)\b` | obchodní problém; **v B2B kontextu „interní zdůvodnění nákupu"** | anglicko-český hybrid. ⛔ Náhrada závisí na kontextu: „business case" u nákupního procesu není „obchodní problém", ale podklad pro schválení nákupu | jak-vypnout-ai-overview 2026-08-23, upřesněno u článku 30 |
| ⛔ | `\bweb-?only\b` | jen na webu, režim jen s weby | polovičatý slepenec | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bquery-?level\b` | na úrovni dotazů | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\baccount-?specific\b` | pro konkrétní účet | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bAI (Answer feature|summaries)\b` | funkce AI odpovědí, shrnutí od AI | anglický název funkce v české větě, když nejde o oficiální název v rozhraní | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bGoogle features\b` | funkce Googlu | totéž | jak-vypnout-ai-overview 2026-08-23 |
| ⛔ | `\bvendor report(u|em)?\b|\bvendor-?collected\b` | report dodavatele, sesbíraný dodavatelem | hybrid | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bmainstream volb\w*\b` | nejčastější volba | hybrid | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bmanagement úrovn\w*\b` | úroveň vedení | hybrid | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bactive Ads účet\b` | aktivní účet v Google Ads | hybrid | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bbusiness model(u|em)?\b` | obchodní model | hybrid | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\brevenue attribution\b` | přiřazení tržeb | hybrid | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bSEO tool\b` | SEO nástroj | hybrid | seo-nastroje-2026 2026-08-23 |
| ⛔ | `\bbrand recognition\b` | znalost značky | hybrid | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\b(team|management) view\b` | pohled pro tým, pohled pro vedení | hybrid | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\bmature web\b` | zavedený web | hybrid | mereni-seo-vykonu-2026 2026-08-23 |
| ⛔ | `\bbrand-conscious\b` | značkově orientovaný | hybrid | mereni-seo-vykonu-2026 2026-08-23 |
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
| ⚠️ | `\bbrand (mention(s)?|zmínk\w+)\b` | zmínka o značce | web má článek se slugem ai-brand-mentions a používá to jako termín — u prvního výskytu vysvětlit česky, nenahrazovat všude | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\branking tracking\b` | sledování pozic | dvojitý slang | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bcitation monitoring\b` | sledování citací | totéž | jak-strukturovat-pillar-content 2026-08-23 |
| ⛔ | `\bcitation (hook|rate)\b` | místo vhodné k citaci, míra citování | agenturní slang | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\bbrand exposure\b` | viditelnost značky | totéž | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ⛔ | `\blong[‑-]?form\b` | dlouhý, rozsáhlý | polovičatý hybrid | seo-pro-eshopy-ai-era-2026 2026-08-23 |
| ✅ | `\bresearch\w*\b` | — | **Rozhodnutí uživatele 24. 8. 2026:** „research“ je v češtině běžně užívané slovo (research fáze, dělat research). Nehlásit. Platí i pro spojení „research fáze“ a pro sloveso „researchovat“. | seo-pro-eshopy-ai-era-2026 2026-08-23, přehodnoceno 2026-08-24 |
| ⛔ | `\bvendor compare\b` | porovnání dodavatelů | anglicismus | ai-seo-b2b 2026-08-24 |
| ✅ | `\bvendor shortlist\b|\bshortlist\w*\b` | — | článek termín **sám definuje** („Vendor shortlist je užší výběr dodavatelů…“) a má ho v titulku i klíčových slovech; je to zavedený termín B2B nákupu | ai-seo-b2b 2026-08-24 |
| ✅ | `\btransparentn\w+` | — | „transparentní ceník / nabídka“ je zavedená česká obchodní mluva (transparentní účet, transparentní výběrové řízení), ne kalk | kolik-stoji-ai-seo 2026-08-25 |
| ✅ | `\bseparátní\w*` | — | **Rozhodnutí uživatele 25. 8. 2026:** „separátní“ je relativně normální české slovo, ne latinismus k odstranění | kolik-stoji-ai-seo 2026-08-25 |
| ✅ | `\bdohledan\w+` | — | **Rozhodnutí uživatele 25. 8. 2026:** „dohledaný“ je běžné české slovo (dohledat zdroj), ne strojový obrat | revize 2026-08-25 |
| ✅ | `\bvolatil\w+` | — | „volatilita/volatilní“ je v češtině zavedené (i mimo finance) a čtenáři srozumitelné; vada by byl až prázdný žargon | ai-citace-reddit 2026-08-25 |
| ✅ | `\bimpres\w+` | — | počeštěné „imprese“ je zavedená česká mluva SEO i PPC. Navíc v článku o Search Console je „zobrazení“ obsazené významem *pohled na data* („zobrazení Search“) — plošná náhrada by vyrobila dvojznačnost | gsc-ai-segmenty-mereni 2026-08-25 |
| ✅ | `\bklik\w+` | — | „klik / kliky / kliků“ je běžná česká podoba; UI píše „kliknutí“, ale text není citace rozhraní | gsc-ai-segmenty-mereni 2026-08-25 |
| ✅ | `\bplatformov\w+` | — | „platformová specifika“ je běžné české tvoření (platformové řešení); vada by byl až telegrafický „plus“ mezi podstatnými jmény, ne přídavné jméno | jak-ai-cituje-zdroje 2026-08-25 |
| ✅ | `\b(frontend|backend)\w*` | — | „frontendový protokol“, „na backendu“ je zavedená česká mluva vývojářů, ne slepenec | lighthouse-ai-check 2026-08-25 |
| ✅ | `\bobsahov\w+ strategi\w+` | — | **Rozhodnutí uživatele 25. 8. 2026:** „obsahová strategie“ je běžně používaný výraz, ne kulhavá vazba | lighthouse-ai-check 2026-08-25 |
| ✅ | `\bcílov\w+ skupin\w+|\bcílovk\w+` | — | **Rozhodnutí uživatele 25. 8. 2026:** „cílová skupina“ (i hovorová „cílovka“) je běžně užívaný výraz | seznam-cz-ai-vyhledavani 2026-08-25 |
| ✅ | `\bfiguruj\w+` | — | **Rozhodnutí uživatele 25. 8. 2026:** „figurovat“ je běžné české slovo, ne úřední balast | seznam-cz-ai-vyhledavani 2026-08-25 |
| ✅ | `\bmonitoring\w*` | — | v češtině zdomácnělé (monitoring médií, monitoring provozu); ne kalk | test-viditelnosti-v-ai 2026-08-25 |
| ⚠️ | `\b(základ|obsah|SEO|struktura) plus \w` | a k tomu, doplněné o | telegrafické „plus“ místo spojky je anglický styl; česky se doplňuje | jak-ai-cituje-zdroje 2026-08-25 |
| ⛔ | `(?<!CI/)\b\w+ pipeline\b` | řetězec, proces | anglické jádro v českém sousloví („publikační pipeline“, „Node pipeline“). **Nehlásí** „CI/CD pipeline“ — zavedený termín vývojářů | jak-poznat-ai-obrazek 2026-08-26 |
| ⛔ | `\bv videu\b|\bv vyhledávání\b|\bv webu\b` | ve videu, ve vyhledávání, na webu | chybí vokalizace předložky před souhláskovou skupinou | videoobject-strukturovana-data 2026-08-26 |
| ⚠️ | `\bnativní (pokladn\w+|checkout\w*|aplikac\w+)` | vestavěný, přímo v platformě | kalk z „native“ v produktovém významu | nakupovani-pres-ai 2026-08-26 |
| ⚠️ | `\bcílicí\w*` | cílený | mechanicky odvozené příčestí | kdyz-si-ai-mode-neni-jisty 2026-08-26 |
| ⚠️ | `\bgenerativní AI funkc\w+` | funkce s generativní AI | anglický slovosled přívlastku; česká Search Console i web používají „funkce s generativní AI“. **Výjimka `[skip:generativni-ai-v-discoveru]`:** ten článek cituje formulaci z nápovědy Googlu | co-vypne-ktery-opt-out 2026-08-26 |
| ✅ | `\bvyvolan\w+ uživatelem\b` | — | **Oprava vlastního rozhodnutí (26. 8. 2026):** nejdřív jsem to měnil na „spuštěný uživatelem“, jenže web má vlastní zavedený termín — článek `roboti-vyvolani-uzivatelem` ho má v titulku i ve slugu. Sjednoceno zpátky na „vyvolaní uživatelem“ | overovani-ai-robotu 2026-08-26, revidováno 2026-08-26 |
| ⚠️ | `\bsedí na (zveřejněn|publikovan)\w+ rozsah\w*` | spadá do rozsahu | rozbitá vazba | overovani-ai-robotu 2026-08-26 |
| ⚠️ | `\bzodpovídá \w*otázk\w+` | odpovídá na otázku | chybná valence slovesa | platform-properties-search-console 2026-08-26 |
| ⛔ | `\bkredencial\w*` | doložitelná kvalifikace | neustálený přepis „credentials“ | ymyl-obsah-pro-ai 2026-08-26 |
| ⛔ | `\bnehypeov\w+|\bhypeov\w+` | střízlivý, bez marketingové omáčky | počeštěné „hype“ s českou příponou | core-web-vitals-pro-ai 2026-08-26 |
| ⛔ | `\b\w*crouluj\w*|\bcrawluj\w*` | projít, stáhnout stránku | počeštěné sloveso z „crawl“ | core-web-vitals-pro-ai 2026-08-26 |
| ⚠️ | `\bznačka nevyšla\b|\bnevyšl\w+ v odpovědi\b` | značka se neobjevila | překladový obrat | ai-seo-zdarma 2026-08-26 |
| ⚠️ | `\bstandard důvěry\b` | nároky na důvěryhodnost | kalk „standard of trust“ | ymyl-obsah-pro-ai 2026-08-26 |
| ⛔ | `\bprokliká(ní|vání)\b` | klikání v rozhraní | počeštěné podstatné jméno ze slovesa, zní nečesky | produktovy-feed-gtin 2026-08-26 |
| ⚠️ | `\budržovat \w+ živ\w+|\budržujte \w+ živ\w+` | udržovat aktivní | kalk z „keep alive“ | recenze-srovnavace-pro-ai 2026-08-26 |
| ⚠️ | `\bz definice\b` | ze své podstaty | nalepený obrat z angličtiny („by definition“) | produktovy-feed-gtin 2026-08-26 |
| ⚠️ | `\bsilně závislý na\b` | hodně závisí na | překlad „heavily dependent on“ | pasazova-optimalizace-obsahu 2026-08-26 |
| ⛔ | `\bpovrch(?:u|y|ů|em|ích|ům)?\b` | prostředí, místo ve vyhledávání | kalk z „surface“ v produktové angličtině Googlu. **Nehlásí** „povrchní / povrchně“ — to je jiné slovo | ai-mode-a-eshopy 2026-08-26, zúženo 2026-08-26 |
| ✅ | `\bploch\w+` | — | „plocha“ jako překlad *surface* česky **funguje** (reklamní plocha, zobrazovací plocha) — na rozdíl od „povrchu“. Ponecháno záměrně | 2026-08-26 |
| ⛔ | `\bbrand search\w*|\bbrand voice\b` | vyhledávání značky, hlas značky | hybridní slepence s anglickým „brand“ | case-study-megadetail 2026-08-26 |
| ⚠️ | `\bcelowebov\w+` | pro celý web | mechanicky odvozené přídavné jméno | blokovat-ai-odpovedi-gsc 2026-08-26 |
| ⚠️ | `\bvygenerování(mi|ch)\b|jednotliv\w+ vygenerování\b` | odpověď, běh | nominalizace v množném čísle („mezi jednotlivými vygenerováními“). **Nehlásí** běžné „k vygenerování obrázku“ | ai-mode-a-eshopy 2026-08-26, zúženo ai-obrazky-v-ai-prehledech 2026-08-26 |
| ⚠️ | `\bzaktualiz\w+` | aktualizovat | zdvojená předpona u převzatého slovesa | mereni-ai-mode-limity 2026-08-26 |
| ⚠️ | `\bservír\w+ (odpověď|obsah|výsledk\w+)|\b(odpověď|obsah) se servír\w+` | podávat, zobrazovat | publicistický převod z „served“ | nahradi-ai-mode-vyhledavani 2026-08-26 |
| ⚠️ | `\bkonvertující návštěv\w+` | návštěvy, které konvertují | doslovný převod „converting visits“ | blokovat-ai-odpovedi-gsc 2026-08-26 |
| ⚠️ | `\bdobr\w+ zkušenost se stránkou\b` | aby se stránka dobře používala | kalk z „page experience“ | jak-se-zobrazit-v-ai-mode 2026-08-26 |
| ⛔ | `\bbackground \w+ů?\b` | na pozadí, podkladový | anglický přívlastek v české vazbě („background dotazů“) | query-fan-out-ai-mode 2026-08-26 |
| ⛔ | `\be-commerce (AI )?SEO\b` | AI SEO pro e-shopy | řetězení anglických výrazů v české větě | kategorie-texty-pro-ai 2026-08-26 |
| ⚠️ | `\bkategorijn\w+` | stránky kategorií | mechanicky odvozené přídavné jméno | kategorie-texty-pro-ai 2026-08-26 |
| ⚠️ | `\bkanonick\w+ profil\w*` | hlavní profil | „kanonický“ je zavedený u URL, u profilu autora je to kalk | person-data-pro-autora 2026-08-26 |
| ⛔ | `\bSniperdesign\b` | Sniper Design | název značky se píše **dvěma slovy** (10× v `src/i18n/`); **výjimka:** URL a účty na sítích (`facebook.com/SniperDesign.cz`) | ai-nakupni-agenti 2026-08-26 |
| ⛔ | `\bodpovědní\w* engin\w*` | odpovědní systémy | mechanický překlad „answer engines“; web i slovník používají „odpovědní systémy“ | seznam-cz-ai-vyhledavani 2026-08-25 |
| ⚠️ | `\bzvyklý vstup\b|\bvstup do internetu\b` | vstupní brána na internet | nepřirozená vazba | seznam-cz-ai-vyhledavani 2026-08-25 |
| ⛔ | `\bpočítá\w* za (origináln|kvalitn|dobr)\w+` | považuje se za, počítá se jako | nečeská vazba „počítat za“ ve významu „považovat za“ | originalni-data-pro-ai 2026-08-25 |
| ⛔ | `\bnež by \w+ potenciál odpovídal\w*` | než by odpovídalo jejich potenciálu | obrácený slovosled rozbíjí vazbu — potenciál ničemu „neodpovídá“ | originalni-data-pro-ai 2026-08-25 |
| ⚠️ | `\bzískává vyšší šanci stát se\b` | zvyšuje se šance, že se stane | překladový obrat; česky se šance zvyšuje, nezískává | originalni-data-pro-ai 2026-08-25 |
| ⚠️ | `\bvýzkumn\w+ materiál\w*` | studie, datový podklad | vágní úřední sousloví | originalni-data-pro-ai 2026-08-25 |
| ⚠️ | `\bsprávn\w+ formát\w* pro\b` | formát vhodný pro | vágní nárok („správný“ bez doložení čím) | originalni-data-pro-ai 2026-08-25 |
| ⛔ | `\baccessibility (skóre|audit\w*|kontrol\w*)\b` | skóre / audity přístupnosti | hybridní slepenec. **Výjimka:** `accessibility tree` a název kategorie „Accessibility“ v Lighthouse — vlastní jména | lighthouse-ai-check 2026-08-25 |
| ⛔ | `\bbooking web\w*|\bbooking\b(?! ?\.com)` | rezervační web, rezervace | polopřeložený slepenec | lighthouse-ai-check 2026-08-25 |
| ⛔ | `\bagent akc\w+|\b\w+ akc(e|emi|ích) agent\w*` | akce, které provádí agent | anglický přívlastek bez skloňování | lighthouse-ai-check 2026-08-25 |
| ⚠️ | `\blistov\w+ stránk\w+` | stránka s výpisem | doslovný převod „listing page“ | lighthouse-ai-check 2026-08-25 |
| ⚠️ | `\bpreview\b` | náhled | anglické slovo v české větě; **výjimka:** názvy kanálů a produktů (Chrome Canary, Preview build) | lighthouse-ai-check 2026-08-25 |
| ⛔ | `\blive search\b|\bsearch agent\b` | vyhledávací robot, stahování v reálném čase | kus anglické dokumentace v české větě | ai-seo-wordpress 2026-08-25 |
| ⚠️ | `\bkategoriov\w+ text\w*` | texty kategorií | kostrbaté přídavné jméno místo přivlastňovací vazby | ai-seo-wordpress 2026-08-25 |
| ⚠️ | `\bbio\b(?![ ]?[(-])` | medailonek, profil autora | eliptický převod z angličtiny („krátká bio“ navíc neshoduje rod); česky je to medailonek. **Výjimka:** „bio“ ve významu biopotravin a v názvech (BIO, bio-) | ai-seo-wordpress 2026-08-25, rozšířeno autorsky-profil-pro-ai 2026-08-25 |
| ⚠️ | `\btheme update\b|\bsecurity plugin\w*` | aktualizace šablony, bezpečnostní plugin | hybridní slepenec — anglická vazba s českou koncovkou | ai-seo-wordpress 2026-08-25 |
| ⛔ | `\bpromov(at|uje|ala?|ovat)\b` | propagovat | slangový kalk z „promote“; česky se propaguje | ai-citace-reddit 2026-08-25 |
| ⚠️ | `\balgoritmick\w+ posun\w*` | změna algoritmu | doslovný převod „algorithmic shift“ | ai-citace-reddit 2026-08-25 |
| ⚠️ | `\b(Splňte|Splníte) to přes\b` | toho dosáhnete čím | kalk z „through“; česky se cíle dosahuje, ne „přes“ | ai-citace-reddit 2026-08-25 |
| ⛔ | `\bblog post\w*` | článek na blogu, blogový článek | anglicismus tam, kde čeština má běžné slovo | aeo-geo-je-porad-seo 2026-08-25 |
| ⚠️ | `\bguide\b(?! *`)` | průvodce | anglické slovo v české větě („Google guide“, „ve svém guide“); **výjimka:** URL a klíčová slova | aeo-geo-je-porad-seo 2026-08-25 |
| ⚠️ | `\bfundamentáln\w+ (SEO|obsah\w*)` | základy SEO, základní | publicistický kalk z „fundamental“ | aeo-geo-je-porad-seo 2026-08-25 |
| ⚠️ | `\bjak \w+ [A-Z][\w ]+ podmínky, tak` | jak podmínky pro X, tak Y | rozpadlá vazba „jak…, tak…“ s anglickým slovosledem | aeo-geo-je-porad-seo 2026-08-25 |
| ⛔ | `\breviewer\w*` | posuzovatel, recenzent | anglicismus pro roli, působí jako interní slang | znacka-na-wikipedii-pro-ai 2026-08-25 |
| ⚠️ | `\bnative advertising\b` | nativní reklama | česká podoba je zavedená, anglická v české větě ne | znacka-na-wikipedii-pro-ai 2026-08-25 |
| ⚠️ | `\beditorální\w*` | redakční | tvar mimo českou normu (kalk z „editorial“) | znacka-na-wikipedii-pro-ai 2026-08-25 |
| ⚠️ | `(?<!AEO )(?<!AEO Answer )\bcoverage\b` | mediální pokrytí, pokrytí tématu | anglické slovo v české větě. **Výjimka:** vlastní název metriky **„AEO Coverage Score™“** (rámec webu, má vlastní sekci i klíčové slovo) a názvy funkcí („coverage report“ v GSC, „merchant listings“ u Google) — vlastní jména rozhraní | znacka-na-wikipedii-pro-ai 2026-08-25 |
| ⚠️ | `(?<!merchant )\blisting\w*` | zápis v katalogu, výpis produktů | dvojí význam — v e-shopu výpis produktů, v katalozích zápis. **Nehlásí** „merchant listing(s)“ = oficiální název typu výsledku u Google | znacka-na-wikipedii-pro-ai 2026-08-25, zúženo shoptet-produktova-pole-google 2026-08-26 |
| ⚠️ | `\bwireframe \w+ (šablon\w+|sad\w+)` | wireframy, šablony | anglické přívlastkové postavení („wireframe šablony“) je slepenec; česky se skloňuje | znacka-na-wikipedii-pro-ai 2026-08-25 |
| ✅ | `\bPack\b` | — | krátký název produktu **AI SEO Wireframe Pack**, ustálený napříč webem (4 články) — vlastní jméno, ne anglicismus | znacka-na-wikipedii-pro-ai 2026-08-25 |
| ✅ | `\btop\w*` | — | **Rozhodnutí uživatele 26. 8. 2026:** „top“ je běžný výraz — „top 10“, „top zdroje“, „TOP stránky“. Dřívější ⚠️ pravidlo na „top stránky / top kategorie“ zrušeno | znacka-na-wikipedii-pro-ai 2026-08-25, rozšířeno 2026-08-26 |
| ✅ | `\bbenefit\w*` | — | **Rozhodnutí uživatele 26. 8. 2026:** „benefit“ je v češtině normální výraz (benefity zaměstnancům, benefit produktu) | 2026-08-26 |
| ✅ | `\bplaybook\w*|\btracker\w*|\bretainer\w*|\bškálov\w+` | — | zavedená česká agenturní a technická mluva; opakovaně potvrzeno rozhodnutími uživatele o téže třídě výrazů | 2026-08-26 |
| ✅ | `\bautoconfirmed\b|\bPaid\b|\binstance of\b` | — | názvy oprávnění, šablon a polí Wikipedie/Wikidat — vlastní jména rozhraní (§ 8) | znacka-na-wikipedii-pro-ai 2026-08-25 |
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
| Názvy publikací (Search Engine Land) a **texty odkazů citující titulek vlastního článku** | titulek se cituje tak, jak zní — měnit ho by znamenalo měnit slug |
| **Záporné příklady citované v textu** (např. „v dnešní digitální éře“ → prázdný marketingový jazyk) | článek je uvádí právě proto, že jsou špatné. Checker je hlásit bude — u každého takového nálezu se rozhoduje ručně. |
| **Titulek a nadpis, které jsou zároveň cílovým klíčovým slovem** (např. „AI SEO content“ u článku se slugem `ai-seo-content`) | titulek nese hledaný výraz a slug se po publikaci nemění; přepsat titulek by znamenalo rozejít se se slugem i s tím, co lidé hledají |
| **Věta, která anglický termín vysvětluje** („v angličtině *AI brand mentions*“, „v zahraničí je potkáte pod názvy *AI visibility tracker*“) | článek termín uvádí jako cizí slovo, ne ho používá. Checker takové řádky od článku 15 přeskakuje (hledá „v angličtině“, „v zahraničí“, „pod názvem“ apod.). |
| **Názvy technických identifikátorů** (`Content-Usage`, `Google-Extended`) | jsou to řetězce z protokolu, ne text |
| **Anglický originál v závorce za českým termínem** („ve výchozí skupině kanálů (Default Channel Group)“) | je to **správná forma** — čtenář dostane český výraz i to, co uvidí v anglickém rozhraní. Checker závorku maskuje od článku 29. |
| **Rozepsané zkratky** („SEO (Search Engine Optimization)“, „GEO (Generative Engine Optimization)“) | závorka zkratku **vysvětluje**; je to služba čtenáři, ne anglicismus. Checker je od článku 21 maskuje. |
| **Obsah bloků `<Dont>`** | jsou to záměrné odstrašující ukázky („V dnešní digitální éře je důležité…“). Opravit je znamená zničit smysl příkladu. Checker je od článku 9 přeskakuje. |
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

4. **Kontrola kontextu je povinná u každé náhrady.** ⛔ **Pozor na náhrady uvnitř pádových vazeb.** Náhrada `organic traffic` → `organická návštěvnost` vyrobila ve třech článcích tvar **„organická návštěvnostu"** (zbylá koncovka po „trafficu"). Chytila to až kontrola diffu. Po každé náhradě podstatného jména projeď `grep` na okolní tvary.

   **Hotový kontrolní příkaz na pády po předložkách** (najde „pro krátká odpověď“, „bez hustota faktů“ apod.):
   ```
   grep -rnE "(bez|na|pro|s|se|do|od|k|ke|podle) (hustota faktů|krátká odpověď|organická návštěvnost|výchozí stav|míra citování|podíl citací)" src/content/articles/
   ``` Dávkovou náhradou se připraví návrh; před commitem se `git diff` čte řádek po řádku a každá změněná věta se přečte celá. Kontroluje se **pád, číslo a rod**, **význam v daném textu** a jestli nejde o citaci, popisek rozhraní nebo vlastní jméno.

   ⛔ Doklad, proč: náhrada `use case` → `scénář použití` vyrobila větu „P1 podle **scénář použití**" a byla živě na webu. Regex pád neupraví.

5. **Žádná dávková náhrada nesmí sáhnout na řádky `import`, `export` a frontmatter klíče.** Před zápisem si vždy vypiš, kolik řádků se změní, a zkontroluj, jestli mezi nimi nejsou technické.


**Rozlišení názvu od kalku velikostí písmen.** Checker porovnává bez ohledu na velikost, takže „Share of Model“ (název metriky) a „share dotazů“ (kalk) spadnou pod stejné pravidlo. Když je rozdíl právě ve velikosti, napiš do regexu `(?-i:…)` — uvnitř té skupiny se velikost **respektuje**. Použito u `share of voice`. Pozor: v tabulce se roury `|` píšou **bez zpětného lomítka**, jinak z alternace vznikne literál a pravidlo přestane fungovat (stalo se 26. 8. 2026).

**Výjimka pro jeden článek.** Když je termín vadou obecně, ale v jednom článku je to téma („schema markup“ v `schema-markup-ai-citace-test`, „Share of Model“ v `share-of-model-metrika`), napiš do pravidla marker `[skip:slug]` (víc slugů odděl čárkou). Checker pravidlo pro ten soubor vynechá, jinde platí dál.