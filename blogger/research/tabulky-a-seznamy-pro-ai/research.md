# Rešerše: Tabulky a seznamy pro AI

Datum rešerše: 2026-09-26
Řádek plánu: 143
Klíčové slovo: `tabulky a seznamy pro ai`
Navržený slug: `tabulky-a-seznamy-pro-ai`
Kategorie: `tutorial` (určeno přímo ve sloupci D obsahového plánu)

## Vymezení a kolize

Jde o nový článek o **formátování uvnitř stránky**: kdy použít datovou tabulku, odrážkový seznam, číslovaný postup a souvislou větu; jak zachovat vztahy mezi údaji v textu i HTML; jak formát otestovat bez okolního kontextu.

Nejbližší existující texty byly přečtené celé nebo cíleně zkontrolované:

- `/blog/pasazova-optimalizace-obsahu/` uvádí tabulku bez popisku jako jeden z šesti problémů pasáže. Nový článek tuto dílčí poznámku rozvíjí do rozhodovacího návodu pro čtyři formáty.
- `/blog/listicly-top-n-pro-ai/` řeší celý článek ve formátu žebříčku Top-N a malou studii citací v ChatGPT. Nový článek žebříčky neřeší; číslovaný seznam používá jen pro pořadí kroků nebo pořadí, jehož změna mění význam.
- `/blog/ai-seo-content/` uvádí seznamy a tabulky jako přehledné formáty, ale nevysvětluje volbu mezi nimi ani sémantický HTML zápis.
- `/blog/jak-strukturovat-pillar-content/` doporučuje komponenty a tabulky v dlouhém průvodci. Neřeší jejich vnitřní stavbu.

Slug ani hlavní titulek v korpusu neexistují. Hlavní hranice článku: žádné tvrzení, že tabulka nebo seznam samy zvyšují pořadí či zaručují citaci.

### Přeskočené řádky před výběrem

- Řádek 136 `varianty produktu pro ai`: jádro pokrývají `/blog/dostupnost-a-skladovost-pro-ai/` a `/blog/shoptet-produktova-pole-google/` včetně vlastních URL variant, `ProductGroup`, `hasVariant`, `variesBy`, `productGroupID` a variantových polí produktového feedu. Patří do refreshe nebo sloučení, ne do nového článku.
- Řádek 139 `atribuce ai navstevy`: mechanismus chybějícího zdroje, přímé návštěvnosti, UTM a AI referral už řeší `/blog/ai-navstevnost-konverze/` a související texty o měření.
- Řádek 140 `reportovani ai viditelnosti klientovi`: hlavní tezi fakt versus domněnka, meze jednotlivých zdrojů a formulace obhajitelných tvrzení už přímo pokrývá `/blog/mereni-ai-mode-limity/`; nástroje a metodiku doplňují další články o GSC, ručním testu a Share of Model.
- Řádek 141 `hledanost terminu vs adopce`: stejnou tezi uvádí `/blog/nahradi-ai-mode-vyhledavani/` ve FAQ, těle i seznamu chyb.
- Řádek 142 `rozpocet seo vs ai 2026`: rozdělení rozpočtu, společné základy a okamžik pro placené měření už konkrétně pokrývá `/rozhodovaci-matice/`, `/aio/` a `/blog/kolik-stoji-ai-seo/`.

## Rozdíl proti tezi z plánu

Plán tvrdí, že se přehledy ze stránek „přebírají často“. Pro univerzální frekvenci tohoto jevu nebyl nalezen primární zdroj a článek ji nebude opakovat jako fakt. Doložitelné je užší tvrzení: modely dokážou se strukturovanými tabulkami pracovat, ale výsledek závisí na modelu, úloze a formátu; ani správná tabulka nezaručuje citaci ve vyhledávání.

## Rešerše klíčových slov

Marketing Miner, čeština, 2026-09-26:

- Návrhy pro pět seedů (`jak psát tabulku`, `tabulka v textu`, `odrážkový seznam`, `seznam v textu`, `přehledná tabulka`) stály 200 kreditů.
- Tři seedy nevrátily žádný návrh. `jak psát tabulku` vrátil dvě úzké varianty s 10 hledáními měsíčně; `přehledná tabulka` vrátila tři nerelevantní dotazy na anglické časy a sportovní či kalendářní tabulky.
- Přesná hledanost patnácti formulací stála 45 kreditů. Data měla jen dvě: `html tabulka` 90 hledání měsíčně, meziročně −42 %, a `jak psát odrážky` 20 hledání měsíčně, meziročně −48 %.
- Třináct úzkých formulací včetně hlavního dotazu nemělo data. To znamená, že je nástroj neměří, ne nulový zájem.

Google Trends pro obecné seedy `tabulka` a `seznam` vrátil sportovní tabulky a značku Seznam.cz. Podle filtru z workflow nesouvisejí s tématem a nepoužijí se. U `odrážky`, `html tabulka` a `jak psát odrážky` nebyly použitelné rising queries. Sezónnost se proto v článku netvrdí.

Google Suggest poskytl použitelné formulace `odrážky v textu`, `odrážky a velká písmena`, `html tabulka`, `html tabulka generátor`, `tabulka html kód` a `jak psát odrážky`. YouTube Suggest byl převážně o Excelu, Wordu a nesouvisejících významech; pro článek se nepoužije. Wikipedia měla u slova `odrážky` chybné přiřazení k článku „Odrůvky“, proto se ani tento výstup nepoužije.

## Hlavní zjištění z primárních zdrojů

### Google Search

Zdroj: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

- Google doporučuje obsah pro čtenáře členit do odstavců, sekcí a nadpisů, které usnadňují orientaci.
- Dokonale sémantické HTML není podmínka pro pochopení stránky Googlem. Sémantický zápis je přesto vhodný pro čtenáře a pomocné technologie.
- Pro generativní funkce Googlu není potřeba zvláštní AI značení ani Markdown. Google výslovně odmítá potřebu přepisovat obsah do speciálního formátu jen pro AI.
- Správná struktura nezaručuje procházení, zařazení stránky do výsledků ani zobrazení v odpovědi.

### W3C Web Accessibility Initiative

Zdroje:

- https://www.w3.org/WAI/tutorials/tables/
- https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships
- https://www.w3.org/WAI/WCAG22/Techniques/html/H51

- Datová tabulka je určena pro údaje s logickými vztahy v řádcích a sloupcích; tabulka není určena pro rozvržení stránky.
- Hlavičkové buňky mají být zapsané jako `<th>`, datové jako `<td>`. U složitějších tabulek je potřeba vztahy vyjádřit pomocí `scope`, případně `id` a `headers`.
- `<caption>` pojmenovává celkové téma tabulky a je užitečný ve většině případů.
- WCAG 1.3.1 požaduje, aby informace, struktura a vztahy sdělené vzhledem šly určit programově nebo byly dostupné textem. To se týká tabulek, seznamů i nadpisů.
- Složitější tabulka není automaticky špatná, ale vyžaduje složitější přiřazení hlaviček. Pro běžný redakční obsah je bezpečnější rozdělit více nezávislých vztahů do několika jednoduchých tabulek.

### HTML seznamy

Zdroje:

- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol

- `<ul>` je neuspořádaný seznam: pořadí položek nemění význam.
- `<ol>` je uspořádaný seznam: pořadí je podstatné. Praktický test z dokumentace MDN: prohoďte dvě položky; pokud se změnil význam, použijte `<ol>`, jinak `<ul>`.
- Odrážky a čísla nemají nahrazovat vztah mezi dvěma rozměry. Pokud čtenář potřebuje najít průsečík položky a vlastnosti, jde o tabulkový vztah.

### Výzkum porozumění tabulkám u jazykových modelů

Zdroje:

- Microsoft Research / WSDM 2024, *Table Meets LLM*: https://www.microsoft.com/en-us/research/wp-content/uploads/2023/12/wsdm24-SUC.pdf
- TabVerse, preprint z 8. 6. 2026: https://arxiv.org/abs/2606.09578

- Studie *Table Meets LLM* testovala úlohy porozumění tabulce u GPT-3.5 a GPT-4 s různými textovými zápisy. V daném nastavení dosáhl nejvyššího souhrnného výsledku HTML s vysvětlením formátu a ukázkou; výkon ale výrazně závisel na promptu, úloze a modelu.
- TabVerse drží obsah tabulek stejný napříč HTML, Markdownem, LaTeXem a obrazovým vykreslením. Autoři uvádějí, že strukturovaný text obecně překonal obraz, HTML bývalo nejrobustnějším textovým formátem, ale velikost rozdílu závisela na modelu a úloze.
- Tyto práce měří porozumění modelu tabulce v laboratorním zadání. Neměří pořadí ve vyhledávání ani pravděpodobnost citace stránky. V článku proto poslouží jen jako důkaz, že reprezentace ovlivňuje práci modelu s tabulkou, ne jako SEO recept.

## Podmínky tvrzení podle zdrojů

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Tabulka uchová vztahy mezi řádky, sloupci a hlavičkami | Skutečný `<table>`; hlavičky `<th>`; datové buňky `<td>`; u složitých tabulek explicitní vazby | Viditelná hlavička musí odpovídat skutečnému významu buněk | Složitá záhlaví vyžadují `scope`, případně `id` a `headers` | W3C Tables Tutorial; H51 |
| Odrážkový seznam vyjadřuje rovnocenné položky | Pořadí položek nemění význam; HTML `<ul><li>` | Všechny položky mají patřit pod stejné uvození | Pokud pořadí mění význam, patří do `<ol>` | MDN `<ul>` |
| Číslovaný seznam vyjadřuje pořadí | Kroky, pořadí priority nebo jiné významové pořadí; HTML `<ol><li>` | Čísla v textu a skutečné pořadí položek se nesmí rozcházet | Žebříček Top-N je samostatný publikační formát a článek ho neřeší | MDN `<ol>` |
| Strukturovaný obsah může být pro model snazší než obrázek tabulky | Výsledek závisí na modelu, úloze, promptu a formátu; práce testují laboratorní úlohy | Srovnávané reprezentace musí nést stejný obsah | Nejde o důkaz lepšího pořadí ani citace ve vyhledávání | Table Meets LLM; TabVerse |
| Sémantické HTML pomáhá zachovat vztahy pro pomocné technologie | Stránka musí být dostupná a HTML musí vztahy skutečně vyjadřovat | Význam ve vizuálu a v kódu musí být shodný | Google nevyžaduje dokonale validní HTML a zvládne i nedokonalý web | W3C; Google AI optimization guide |
| Správná tabulka nebo seznam zaručí citaci v AI | — | — | Takové tvrzení zdroje nepodporují; splnění technických doporučení zobrazení nezaručuje | Google AI optimization guide |

## FAQ a původ otázek

1. **Kdy použít tabulku a kdy seznam?** — hlavní záměr tématu + W3C/MDN.
2. **Má být postup číslovaný, nebo odrážkový?** — MDN `<ul>` a `<ol>` + Google Suggest `jak psát odrážky`.
3. **Potřebuje tabulka nadpis nebo popisek?** — W3C `<caption>` + praktická otázka z existujícího článku o pasážích.
4. **Musím tabulku zopakovat i v běžném textu?** — praktický redakční problém; odpověď: ne opisovat vše, ale v textu uvést závěr a důležité výjimky.
5. **Pomáhají tabulky k citaci v ChatGPT nebo režimu AI?** — bezpečnostní námitka; Google žádnou záruku ani zvláštní formát neuvádí, studie měří porozumění, ne citace.
6. **Je obrázek tabulky dostačující?** — W3C vyžaduje programově určitelné vztahy; TabVerse rozlišuje strukturovaný text a obraz.

## Redakční rozhodnutí a meze

- Nepsat, že „AI miluje tabulky“ nebo že tabulka zvyšuje pravděpodobnost citace o konkrétní hodnotu.
- Nezaměňovat sémantické HTML za strukturovaná data podle schema.org. Článek řeší běžné prvky HTML, ne JSON-LD.
- Vysvětlit, že hlavní užitek je pro čtenáře a přístupnost; strojová čitelnost je důsledek zachovaných vztahů.
- Uvést rozhodovací test: průsečík dvou rozměrů → tabulka; rovnocenné položky → odrážky; pořadí mění význam → číslovaný seznam; jedna myšlenka → věta/odstavec.
- Ukázat jednoduchý HTML vzor s `<caption>`, `<th scope="col">`, `<th scope="row">` a `<td>`.
- Nepřebírat žebříčky Top-N; odkázat na samostatný článek `/blog/listicly-top-n-pro-ai/`.
- CTA: tutorial → AI SEO Wireframe Pack. Aktuální datový modul `src/content/pages/pack.ts` uvádí sedm typů stránek, osmá obsahová kapitola je návod na nasazení a cena 1 490 Kč je konečná včetně DPH.
- V široké trendové rešerši nevznikl další natolik hodnotný a nekolidující námět, aby se přidával nový řádek. Novinka OpenAI o kampaních z produktových feedů je příliš blízko čekajícímu řádku 340 o ChatGPT Ads a do plánu se nepřidává.
