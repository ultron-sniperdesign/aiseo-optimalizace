# Závěrečný nezávislý audit C5 — fáze 1

> **Aktualizace po fázi 2:** Konečný verdikt je **PUBLIKOVAT, 0 otevřených nálezů**. C5-01 byl stažen po přečtení přesnějšího pravidla pro `seoTitle`; C5-02 a C5-03 byly opraveny. Níže zůstává původní samostatný posudek jako záznam fáze 1. Úplné vypořádání a konečný verdikt jsou v dodatku „Fáze 2“ na konci souboru.

## VERDIKT: PUBLIKOVAT

**Zásadní nálezy: 0. Drobné nálezy: 3.** Článek může být publikován z hlediska věcné správnosti a redakčního obsahu. Doporučuji krátkou úpravu SEO titulku a dvě lokální stylistická zpřesnění níže. Nejde o nutnost měnit tezi článku nebo doplňovat další odborné kapitoly.

Datum kontroly: **17. 9. 2026**. Posuzovaná verze má `published` a `updated` nastavené na 2026-09-17 a končí CTA na Audit AI viditelnosti za 3 600 Kč bez DPH.

### Nezávislost a rozsah fáze 1

Před vytvořením tohoto posudku jsem četl pouze posuzovaný článek, `blogger/auditor-system.md` a povolený kanonický soubor nabídky `src/content/pages/audit.ts`. **Nečetl jsem `research.md`, `audit-fakta.md`, `audit-jazyk.md` ani `vyporadani.md`.** Věcnou kontrolu jsem provedl přímo proti primárním veřejným zdrojům uvedeným níže. Needitoval jsem článek.

Jde o obsahový audit zdrojového MDX. V této fázi jsem neprováděl build, vizuální kontrolu hotové stránky, kontrolu implementace komponent ani kontrolu existence cílů interních odkazů v repozitáři. Podle zadání jsem také nenačítal projektový jazykový slovník; potvrzení souladu se všemi jeho regexy tedy není součástí tohoto posudku.

## Konkrétní nálezy

### C5-01 — [WARNING] Drobné: SEO titulek je kratší než požaduje místní zadání

**Citace:** `seoTitle: "Chatbot na webu: pomůže vám s AI viditelností?"` (ř. 3).

**Důkaz:** Přímý počet znaků ve zdrojovém řetězci je **46**. `auditor-system.md` požaduje 50–60 znaků. Běžný `title` má 51 znaků a do intervalu se vejde, ale článek obsahuje také samostatný SEO titulek. Meta description má 144 znaků a požadovaný interval splňuje.

**Proč je to drobné:** Neexistuje zde doložená věcná chyba ani důkaz, že 46 znaků poškodí umístění. Jde o odchylku od konkrétního redakčního zadání, nikoli o technický limit Googlu. Stávající titulek má hlavní téma na začátku a srozumitelně popisuje obsah.

**Cílená oprava:** `Chatbot na webu: co udělat pro viditelnost v AI odpovědích` — **58 znaků**, hlavní klíčové spojení zůstává na začátku. Alternativně lze zachovat současnou otázku jako vědomou redakční výjimku; není důvod ji mechanicky vycpávat slovy.

**Závažnost:** drobný nález, neblokuje publikaci.

### C5-02 — [TIP] Drobné: bezprostředně se opakuje stejný příklad kliknutí

**Citace:** „Google v dokumentaci k dodatečnému načítání obsahu uvádí, že jeho vyhledávání neprovádí uživatelské akce na stránce, například kliknutí. Důležitý text proto nemá čekat na uživatelskou akci, například kliknutí.“ (ř. 71).

**Důkaz:** Dvě sousední věty opakují stejnou formulaci i stejný příklad. Druhá věta nepřidává nový mechanismus. Podklad je přitom správný: [Google — Fix lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) doporučuje načítání nezávislé na uživatelských akcích a uvádí, že Google Search se stránkou neinteraguje.

**Cílená oprava:** Druhou větu zkrátit na „Důležitý text proto načítejte bez čekání na zásah návštěvníka.“ Následující větu o zadání otázky do chatu ponechat; přináší podstatnou aplikaci pravidla.

**Závažnost:** drobný stylistický nález, neblokuje publikaci.

### C5-03 — [TIP] Drobné: spojení „další podmínka“ může znít jako zvláštní požadavek AI funkcí

**Citace:** „U odkazů v AI přehledech a režimu AI Google stanovuje ještě další podmínku: stránka musí být zařazená do jeho indexu a způsobilá pro zobrazení s textovým úryvkem.“ (ř. 79).

**Důkaz:** [Google — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), sekce Technical requirements for appearing in AI features, potvrzuje indexaci i způsobilost pro úryvek. Zároveň výslovně říká, že další technické požadavky nejsou. V kontextu článku lze slovo „další“ správně chápat jako další krok po pouhé dostupnosti; samostatně citovaná věta však může vyvolat dojem speciální podmínky nad rámec vyhledávání.

**Cílená oprava:** „Pro odkaz v AI přehledech nebo režimu AI musí stránka splnit základní podmínky Googlu: být zařazená do indexu a způsobilá pro zobrazení s textovým úryvkem.“ Zachovat bezprostředně následující větu, že splnění požadavků nezaručuje zobrazení.

**Závažnost:** drobné preventivní zpřesnění. Současná formulace nepředstavuje zásadní faktickou chybu.

## Věcná kontrola hlavních tvrzení

| Tvrzení nebo oblast | Nezávisle ověřený podklad | Výsledek |
|---|---|---|
| Chatbot na webu a výskyt firmy v externích AI odpovědích jsou odlišné výsledky. | Logické rozlišení dvou situací; tabulky používají odlišné zdroje a ukazatele. Článek netvrdí, že mezi nimi nemůže existovat nepřímá souvislost. | Bez nálezu. |
| Nahrání souboru do chatbotu samo nevytváří veřejnou stránku. | Podpírá je doložené oddělení interních a veřejných článků Intercomu. V úvodu je případ e-shopu výslovně modelový. | Bez nálezu; text neslibuje univerzální chování všech produktů. |
| ChatReact importuje vybrané webové stránky do znalostní báze. | [ChatReact — Knowledge Base](https://www.chatreact.ai/docs/en/knowledge-base), Website Crawler / Importing Your Website. Popsáno nalezení, výběr a import stránek. | Správně; článek nepřisuzuje importu opačný publikační účinek. |
| Interní index chatbotu není index Googlu. | Významové odlišení úložišť a účelu. Nevyvozuje se z něj, že chatbot musí používat jeden konkrétní typ technické databáze. | Bez nálezu. |
| Běžné procházení Googlem nevyvolává uživatelské interakce. | [Google — Fix lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading), Load content when it's visible in the viewport. | Správně. Aplikace na nepoložení otázky do chatu je viditelně označená jako praktický závěr. |
| Google může zpracovat text vykreslený pomocí JavaScriptu; zavřený FAQ panel není sám důkaz nedostupnosti. | Stejná dokumentace doporučuje kontrolu vykresleného HTML pomocí URL Inspection. Článek používá podmíněné „může být“, nikoli jistotu o konkrétní instalaci. | Správně a pro cílového čtenáře podstatné. |
| Odkaz v AI přehledech / režimu AI vyžaduje indexovanou stránku způsobilou pro úryvek. | [Google — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), Technical requirements. | Správně, pouze drobný návrh formulace C5-03. |
| Dostupnost ani splnění požadavků nezaručují indexaci a zobrazení. | Tentýž primární zdroj výslovně odmítá záruku procházení, indexace i zobrazení. | Správně; výhrada je přímo u tvrzení i v krátké odpovědi. |
| Claude vybavený computer use může ovládat myš a klávesnici. | [Anthropic — Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool), úvod a popis interakcí. | Správně. Text z možnosti interakce neodvozuje automatickou indexaci nebo pravidelné citování. |
| Google-Agent není totéž co běžný Googlebot. | [Google — List of Google user-triggered fetchers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers#google-agent), Google-Agent. Popsány akce na požadavek uživatele. | Správně a aktuálně doloženo. |
| Interní články Intercomu lze zpřístupnit Finovi, nelze je přidat do veřejného centra nápovědy. | [Intercom — Overview of content types](https://www.intercom.com/help/en/articles/9357928-overview-of-content-types-and-when-to-use-them), Internal articles, poznámky. | Správně. Sloveso „mohou“ nepředstírá automatické zapnutí pro Fin. |
| Unlisted článek má URL, podle dokumentace není ve vyhledávání centra ani indexovaný vyhledávači a Fin na něj nedává zdrojový odkaz. | [Intercom — Create and manage public articles](https://www.intercom.com/help/en/articles/9357931-create-and-manage-public-articles), Preview it in your Help Center a Keep an article private/unlisted. | Správně a přesně připsáno dodavateli. Nejde o nezávislý test konkrétního centra nápovědy, což článek ani netvrdí. |
| Na vlastní doméně Intercomu lze vypnout zobrazování centra nápovědy ve vyhledávačích. | [Intercom — Prevent search engines indexing your Help Center](https://www.intercom.com/help/en/articles/5145271-prevent-search-engines-indexing-your-help-center), nastavení Privacy. | Správně, podmínka vlastní domény je zachována. |
| ChatReact nabízí veřejně vložitelný prvek s FAQ vedle samotného chatu. | [ChatReact — FAQ Management](https://www.chatreact.ai/docs/en/faqs), Publishing a FAQ Widget. | Správně. Článek rozumně nepřebírá jako prokázaný výsledek dodavatelský příslib SEO. |
| Po změně webu může být potřeba obnovit zdroje chatbotu. | [ChatReact — Knowledge Base](https://www.chatreact.ai/docs/en/knowledge-base), Re-Crawling, popisuje samostatné obnovení stránky či webu. | Správně. Obecná formulace „může“ nepředstírá nutnost ručního kroku u každé služby. |
| Opakované otázky lze využít jako redakční podněty. | Článek označuje čtyři kroky za vlastní doporučený postup, nikoli existující automatickou funkci produktu. | Bez nálezu; navíc před založením článku ověřuje vhodnost doplnění existující stránky. |
| Počet konverzací není důkazem vyřešení požadavku ani externí AI viditelnosti. | Jednotlivé metriky zachycují odlišné události; text výslovně doporučuje definovat vyřešený dotaz. | Bez nálezu. |
| Růst citací po změně webu sám neprokazuje příčinu. | Správná metodická výhrada; článek nevydává pozorování za kontrolovaný experiment. | Bez nálezu. |
| Audit stojí 3 600 Kč bez DPH / 4 356 Kč s DPH a výstupem jsou priority pro konkrétní web. | Povolený kanonický soubor `src/content/pages/audit.ts`, sekce compare, deliverable a FAQ o fakturaci. | Shoda názvu, ceny i rozsahu. CTA neprodává správu chatbotu ani garantované citace. |

## Čeština a srozumitelnost

Text je převážně přirozený a srozumitelný českému provozovateli e-shopu. Není založený na zakázaných marketingových superlativech, strašení ani garancích. Odborná slova získávají význam z okolního vysvětlení: Googlebot je vyhledávací robot, FAQ jsou časté dotazy, HTML je kód stránky. Název režimu `unlisted` je v bezprostředně navazujících větách vysvětlen; není nutné jej přepisovat do neexistujícího názvu položky administrace.

V ruční kontrole jsem nenašel zakázané obraty jmenované v `auditor-system.md`. Jediný jasný místní stylistický nedostatek je opakování kliknutí v C5-02. Slovo „index“ je použito účelně k odstranění konkrétního nedorozumění. Výrazy „veřejná znalostní báze“, „obsahové mezery“ nebo „podklady“ zde mají konkrétní obsah a nepůsobí jako výplň.

Poznámky o modelovém příkladu, rozdílech mezi dodavateli a negarantovaných citacích přiměřeně vymezují platnost tvrzení. Nevnímal jsem je jako důvod text zkrátit: každý z těchto limitů odpovídá jinému reálnému riziku nepochopení.

## Citovatelnost a krátké odpovědi

- `answer` má **52 slov**, splňuje požadavek 40–60 slov.
- Začíná definicí chatbotu a AI viditelnosti, nikoli negací. Významově funguje samostatně.
- Obsahuje praktický krok i omezení: zveřejnit obecné odpovědi, ale nepovažovat dostupnost za jistotu citace.
- První dva odstavce těla vysvětlují základní rozdíl bez nutnosti číst další kapitoly. Modelová situace následně dává abstraktnímu rozlišení konkrétní příklad.
- Všech šest FAQ odpovídá otázkám, které skutečně souvisejí s rozhodnutím provozovatele. Odpovědi nejsou pouhé odkazy „viz výše“ a nevyžadují znalost modelového e-shopu.
- Výjimka s interaktivními AI nástroji brání zavádějícímu zkrácení na „AI nikdy nečte chat“. Pro sebestačnost citované věty u podmínek Googlu doporučuji pouze C5-03.

## SEO a struktura

| Prvek | Zjištění |
|---|---|
| Hlavní titulek | 51 znaků, klíčový výraz vepředu, odpovídá obsahu. |
| SEO titulek | 46 znaků; redakční odchylka popsaná jako C5-01. |
| Meta description | 144 znaků, věcně souhlasí s tématem a nic negarantuje. |
| Slug | Srozumitelný, bez časového údaje, který by zbytečně omezil použitelnost článku. |
| H2 | Šest hlavních oddílů vede od rozlišení zdrojů přes techniku a režimy publikace k praktickému postupu a měření. Každý H2 obsahuje `span.hl` i `strong`. |
| H3 | Jediný pododdíl „Výjimka: AI nástroj může s rozhraním pracovat“ logicky patří pod Googlebot. Prostý text odpovídá projektovému pravidlu pro H3. |
| Interní odkazy | Tři obsahově relevantní články (RAG, JavaScript a AI roboti, citování zdrojů) a konkrétní `/audit/`. Jejich technickou existenci tento audit neověřoval. |
| Klíčová slova | Hlavní výrazy jsou v titulcích i textu přirozeně. Není důvod požadovat mechanické použití všech variant z pole keywords. |
| Časové ukotvení | Datum ověření je výslovně 17. září 2026. Nejsou zde neukotvené obraty „letos“ či „příští rok“. |

## CTA a soulad s nabídkou

Závěrečný blok směřuje na **Audit AI viditelnosti**, obsahuje konkrétní cenu v obou režimech DPH a vysvětluje přínos odpovídající kanonické nabídce: obsahové a technické priority konkrétního webu. Přechod od vlastní kontroly jedné odpovědi k placenému auditu je tematicky přirozený.

Nenalezl jsem nepodložený příslib indexace, garantovaných doporučení nebo zásahu do chatbotu v ceně auditu. Dodatečná formulace o negarantovaných citacích je vhodná vzhledem k hlavnímu tématu. CTA je konkrétní, nikoli obecné „kontaktujte nás“.

## Co záměrně nepovažuji za závadu

1. Článek neuvádí procentní dopad chatbotu na SEO. Žádný takový výsledek neměří a procenta k jeho vysvětlujícímu účelu nejsou potřebná.
2. Netvrdí, že veřejná stránka je jediný možný zdroj všech AI služeb. Srovnávací tabulka mluví o zdrojích dostupných konkrétní službě a o veřejných stránkách jako příkladu při webovém hledání.
3. Nezaměňuje schopnost počítačového agenta vyplnit formulář s běžným procházením Googlebotem. Tato výjimka je výslovně ošetřena.
4. Neoznačuje každou rozbalovací FAQ sekci za neviditelnou. Právě naopak vysvětluje rozdíl mezi skrytím už načteného textu a vytvořením odpovědi až po dotazu.
5. Nezobecňuje režimy Intercomu na všechny chatboty a nepovažuje tvrzení ChatReact o vhodnosti pro SEO za nezávislý test instalace.
6. Nepotřebuje doplnit další obecné rady o strukturovaných datech, robots.txt nebo analytice. Detailnější rozbor by rozšiřoval zaměření článku; hlavní technické návaznosti už řeší kontextové odkazy.

## Předběžné rozhodnutí před fází 2

**Publikovat; doporučené drobné úpravy C5-01 až C5-03.** Nebyla nalezena zásadní faktická chyba, přehnaný slib ani nesoulad CTA s kanonickou nabídkou. Tento verdikt je výhradně výsledkem nezávislé fáze 1. Srovnání s předchozími posudky a jejich vypořádáním následuje až po jejich zpřístupnění.

---

# Fáze 2 — kontrola vypořádání a konečný verdikt

## KONEČNÝ VERDIKT: PUBLIKOVAT

**Otevřené zásadní nálezy: 0. Otevřené drobné nálezy: 0.** Vypořádání všech položek C2, C3 a samostatné fáze C5 odpovídá aktuálnímu článku. Odmítnutí C5-01 je doložené a oprávněné; tento vlastní nález stahuji.

Datum: **17. 9. 2026**. SHA-256 souboru článku při závěrečné kontrole:

```text
561a66939c7a18714b137547d3dde9fd66b1f0dcbe1cdc69703dc0a8d4e26e11
```

## Co bylo ve fázi 2 skutečně přečteno a ověřeno

Po uzavření nezávislé fáze 1 jsem přečetl celé `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md` ve složce článku a porovnal jednotlivé položky s aktuálním MDX. Cíleným `rg` jsem ověřil specifické požadavky pro `title` a `seoTitle` v `Content Workflow Codex.md` a `ARTICLE_TEMPLATE.md`. Kvůli F2 jsem navíc zkontroloval název, úvod a relevantní oddíly cílového `src/content/articles/jak-ai-cituje-zdroje.mdx`.

Primární zdroje pro věcnou správnost jsem nezávisle ověřil již ve fázi 1; dva nově změněné odstavce jejich význam nemění. Nepřebírám pouze závěr předchozího auditora. Ve fázi 2 jsem neopakoval build ani mechanický checker a neprováděl vizuální kontrolu; technické kontroly oznámené editorem nejsou moje vlastní měření. Článek jsem v žádné fázi neupravoval.

## Oprava vlastního nálezu C5-01

**Původní nález C5-01 stahuji jako nesprávnou aplikaci obecného pravidla.** Nejde o výjimku udělenou vadnému titulku ani o nevypořádaný stylistický kompromis.

Přesnější pravidla jsem nyní ověřil přímo:

- `Content Workflow Codex.md`, ř. 382: „C1b: titulek pro SERP — seoTitle do 60 znaků, nebo vědomé rozhodnutí, že stačí title“.
- `ARTICLE_TEMPLATE.md`, ř. 27: pro samostatný SEO titulek „do 60 znaků“.
- `ARTICLE_TEMPLATE.md`, ř. 222: titulek pro SERP do 60 znaků; primárně `seoTitle`, jinak `title`.
- `ARTICLE_TEMPLATE.md`, ř. 8: interval 50 až 60 znaků je uveden u hlavního `title`.

Aktuální `title` má **51 znaků**, `seoTitle` **46 znaků**. Obě pole splňují své konkrétní redakční pravidlo. Obecné zadání z `auditor-system.md` nelze bez dalšího rozšířit na minimální délku odlišného volitelného pole. Původní návrh prodloužení se proto nevyžaduje; současný titulek lze ponechat. Stejný důvod správně uzavírá stažený F1 z C2.

## C2 — ověření každého rozhodnutí faktického auditu

| ID | Rozhodnutí editora | Ověřený stav a důvod uzavření | Závěr C5 |
|---|---|---|---|
| F1 | Stažen auditorem, titulek nezměněn | Specifická pravidla i délky ověřeny výše. V C2 je samotné stažení zaznamenáno. | Správně uzavřeno; nejde o platný nález. |
| F2 | Opraven popis interního odkazu | Článek nyní slibuje „Rozdíly ve výběru a citování zdrojů mezi platformami“. Cíl má právě toto téma v úvodu a oddílech „Srovnání: podle čeho platformy vybírají zdroje“, jednotlivých platformách a překryvu citací. Neslibuje již rozbor zmínky, odkazu a návštěvy. | Oprava řeší celý původní nález. |
| F3 | Přijat dobrovolný tip | H2 jmenuje Googlebot a běžné procházení. První věta jej definuje jako vyhledávací robot Googlu. Samostatný odstavec uvádí Google-Agent a primární dokumentaci. Nevyvozuje z agenta automatickou indexaci. | Správně zapracováno. |

Kontrola F2 je kontrolou shody příslibu odkazu s tématem cíle, nikoli novým úplným věcným auditem historického článku. Aktuální nový text z cíle nepřebírá konkrétní čísla ani univerzální tvrzení o citačních preferencích.

## C3 — ověření všech jazykových oprav

Číslování J1–J12 ve vypořádání odpovídá nálezům 1–12 jazykového auditora. Všechny položky jsem zkontroloval v celých okolních větách, nikoli pouze jako přítomnost nového řetězce.

| ID | Konkrétní důkaz v aktuálním článku | Posouzení vypořádání |
|---|---|---|
| J1 | FAQ říká „Samotné vložení chatovacího okna ale nezaručuje lepší pozice ani citace v AI odpovědích.“ | Nepřirozená „doložená záruka“ odstraněna bez zesílení slibu. Uzavřeno. |
| J2 | Samostatná FAQ představuje „jeho AI asistent Fin“ ve větě o Intercomu. | Název má srozumitelný referent i bez těla článku. Uzavřeno. |
| J3 | Úvod říká, zda odpověď najdete „jen v chatu, nebo také na veřejné stránce“. | Metafora nahrazena konkrétním rozlišením. Uzavřeno. |
| J4 | „Tento popis importu nedokládá, že by se nové informace z chatbotu také zveřejnily…“ | Dokumentační důkaz je oddělen od schopností samotné služby. Uzavřeno. |
| J5 | Vybavený systém může „klikat nebo psát do formulářů“, srovnání se týká běžného procházení Googlem. | Konkrétní činnosti, správný aktér, zachované omezení tvrzení. Uzavřeno. |
| J6 | „Dokumentace Intercomu ukazuje rozdíl mezi podklady pro chatbot a veřejně publikovanými články.“ | Význam abstraktního rozdělení je vysvětlen přesně. Uzavřeno. |
| J7 | Unlisted je režim, článek má vlastní URL; závěr říká, že URL nedokládá nalezení vyhledávači. | Režim není ztotožněn s článkem, neurčité „tuto kontrolu“ i opakovaná věta o vytvoření URL zmizely. Uzavřeno. |
| J8 | Záhlaví „Kde má být informace dostupná“; objednávka „V zákaznickém účtu po přihlášení“. | Tabulka již neklasifikuje zákaznický účet jako veřejné místo. Uzavřeno. |
| J9 | První krok vybírá otázku „která se týká i dalších zákazníků“ a odděluje ji od okolností konkrétního případu. | Kritérium obecnosti vystihuje účel redakčního postupu. Uzavřeno. |
| J10 | Třetí krok jmenuje produktovou stránku, informace o dopravě, návod a časté dotazy. | Sourodé a prakticky použitelné cíle doplnění textu. Uzavřeno. |
| J11 | Odpověď má místo na webu a člověka pro aktualizaci; zvlášť se sleduje, zda stránku cituje externí AI služba. | Aktualizace je konkrétní a směr citování jednoznačný. Uzavřeno. |
| J12 | Závěr doporučuje publikovat odpovědi, které mají být dohledatelné mimo chat, na vhodných stránkách webu. | Nepředstírá obecnou nutnou podmínku veškeré dohledatelnosti firmy. Uzavřeno. |
| D1 | Popis používá „odpovědi na časté dotazy“; tělo vysvětluje FAQ a HTML při kontrole rozbalovací sekce. | Přesně přijatý rozsah doporučení. Není nutné překládat každý další výskyt běžné zkratky. Uzavřeno. |
| D2 | První H2 je „Podklady chatbotu mohou zůstat neveřejné“, se `span.hl` i `strong`. | Nadpis sděluje konkrétní pointu a zachovává projektové formátování. Uzavřeno. |
| D3 | FAQ uvádí kliknutí a odeslání otázky; odstavec o Googlu uvádí uživatelské akce a kliknutí. | Zpřesnění provedeno. Ponechané „Vyhledávání se stránkou neinteraguje“ v jiné FAQ není odmítnutá oprava: jazykový auditor tuto odbornou parafrázi výslovně připouštěl. Uzavřeno. |

### Rozhodnutí neměnit globální jazykový slovník

Vypořádání správně nevytváří plošné zákazy slov „interakce“, „opakovatelný“, „citace“ a podobných. Jazykový auditor označil tyto vady jako kontextové: nesprávný podmět, neurčitou vazbu nebo nevhodný význam v konkrétní větě. Všechna problematická místa v článku jsou opravena. Nezavedení obecného regexu proto není neprovedená oprava a nemá bránit uzavření C3.

## C5 — kontrola vlastních původních položek

| ID | Stav | Přímé ověření |
|---|---|---|
| C5-01 | **Staženo** | Odmítnutí editorem je doložené přesnějšími pravidly pro `seoTitle`. Původní odvození minima 50 bylo chybou auditu; viz samostatný dodatek výše. |
| C5-02 | **Opraveno** | Druhá věta nyní zní „Důležitý text proto načítejte bez čekání na zásah návštěvníka.“ Kliknutí se už neopakuje ve dvou sousedních větách. Původní praktický závěr o chatu zůstává. |
| C5-03 | **Opraveno** | Odstavec začíná „Pro odkaz v AI přehledech nebo režimu AI musí stránka splnit základní podmínky Googlu…“. Indexace, způsobilost pro úryvek i nezaručené zobrazení zůstávají zachovány. |

## Aktuální metadata a kontrola regrese významu

Aktuální přímý přepočet: **title 51 znaků; seoTitle 46 znaků; description 144 znaků; answer 52 slov**. Historická tabulka C2 uvádí u description 123 znaků, což odpovídá dřívější verzi před jazykovým rozvinutím FAQ; nejde o údaj o aktuálním souboru. Aktuální délka zůstává v rozsahu 70–160.

Po změnách zůstávají beze změny hlavní výhrady: modelový příklad není měření, režimy Intercomu nejsou univerzálním popisem všech služeb, dostupnost není záruka citace, běžný Googlebot není každý interaktivní nástroj a měření vlastního chatu nedokládá externí AI doporučení. Opravy neodstranily žádnou z potřebných podmínek, nepřidaly nové garance ani nerozšířily placenou nabídku nad její kanonický rozsah.

## Uzavření C5

**PUBLIKOVAT.** Všechny platné připomínky jsou vypořádané; odmítnutí minimální délky `seoTitle` je správné a vlastní C5-01 je stažen. Není zde zásadní nález vyžadující další opravné kolo. Původní fáze 1 zůstává zachována kvůli dohledatelnosti, její otevřené návrhy však nahrazuje tento konečný stav.
