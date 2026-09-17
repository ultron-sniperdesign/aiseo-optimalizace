# C3 — nezávislý jazykový audit

**Článek:** `src/content/articles/prepis-videa-a-podcastu-pro-ai.mdx`
**Datum:** 17. 9. 2026
**Rozsah:** celý článek včetně frontmatteru, FAQ a čtenářských textů v komponentách. Přečten celý `marketing/05-messaging-a-tonalita.md` a skill `cestina-audit/SKILL.md`. `JAZYK_SLOVNIK.md` prohledán pouze cíleně; zachycena verze 70. Cizí podsložky `research` nebyly čteny.
**Mechanická kontrola:** podle zadání 0 nálezů; v tomto auditu nebyla opakována. To není výsledek níže uvedeného redakčního čtení.
**Omezení:** jazykový a významový audit, nikoli nové ověřování externí dokumentace. Článek, slovník ani auditní log nebyly měněny. Čísla řádků odpovídají přečtenému stavu.

## Verdikt

**Před publikací doporučuji cílenou jazykovou revizi.** Text je převážně věcný, srozumitelný a odpovídá edukativní tonalitě webu. Není potřeba ho přepisovat celý. Slabiny jsou v několika zkratkovitých pokynech, ve dvou nesrozumitelných pojmenováních a v jedné opatrně znějící větě, která přesto předpokládá pozitivní výsledek.

**Celkem 12 nálezů:** 4 se střední prioritou (význam, splnění slibu nebo použitelnost pokynu), 8 s nižší prioritou (nepřirozená vazba, vágnost či nevysvětlené označení). Každý očíslovaný bod představuje jednu opravu či skupinu totožného problému; opakovaný výskyt ve frontmatteru není započítán jako samostatný nález. Žádný kritický nález. Všechny mají triáž **opravit**; není tím míněno, že každý nižší nález sám o sobě brání zveřejnění.

## Nálezy se střední prioritou

### 1. Opatrná formulace stále předpokládá nárůst

**Místo:** ř. 71.

> „Bez měření však nelze slíbit, o kolik zvýší návštěvnost nebo počet citací.“

**Problém:** „o kolik zvýší“ předpokládá, že zvýšení nastane. Nejasná je pouze jeho velikost. Věta navíc připouští čtení, že po měření už lze budoucí nárůst slíbit. To se rozchází s pozdější správnou výhradou, že nalezená citace sama nedokazuje účinek přepisu.

**Cílená oprava:** „Samotné zveřejnění přepisu nezaručuje vyšší návštěvnost ani více citací.“

**Triáž:** opravit. Jde o konkrétní význam této věty, ne o zákaz slovesa „zvýšit“.

### 2. Slíbené opravy češtiny neodpovídají hlavnímu obsahu návodu

**Místo:** description, ř. 4; úvod, ř. 59.

> „Opravy češtiny, ukázka úprav a kontrola dostupnosti pro vyhledávače i AI.“
>
> „…od kontroly češtiny po ověření, že je text dostupný.“

**Problém:** článek učí hlavně porovnání s nahrávkou, opravu chyb rozpoznávání řeči, zachování významu a publikaci. „Opravy češtiny“ mohou slibovat návod k pravopisu, interpunkci či úpravě mluvené syntaxe; ten zde není. Formulace v popisu navíc zahrnuje obecnou dostupnost „pro AI“, zatímco konkrétní technický kontrolní krok je zaměřen na Google. Není nutné přidávat novou sekci; stačí přesněji pojmenovat to, co článek skutečně poskytuje.

**Cílená oprava description:** „Jak z videa nebo podcastu připravit přepis pro web. Kontrola podle nahrávky, zachování významu a ověření, zda Google vidí text stránky.“

**Cílená oprava úvodu:** „Postup vás provede přípravou přepisu pro vlastní web: od porovnání s nahrávkou po kontrolu zveřejněného textu.“

**Triáž:** opravit. Nejde o tvrzení, že původní text neřeší vůbec žádnou jazykovou chybu; problém je v přesnosti slibu.

### 3. Doplnění informací z obrazu je označeno jako doplnění obrazu

**Místo:** název třetího kroku ř. 100; popisek modelové poznámky ř. 126; obdobně obecný název v howto ř. 29.

> „Rozlište mluvčí a doplňte obraz“
>
> „[Redakční doplnění obrazu: lektor ukazuje na tlačítko Uložit.]“
>
> „Doplňte kontext obrazu a mluvčích“

**Problém:** čtenář nemá doplnit obraz ani do obrazu zasáhnout. Má do textu dopsat informaci, kterou vidí pouze ve videu. První dva výskyty tedy označují jiný úkon. Třetí zůstává abstraktní právě tam, kde má stručně pojmenovat konkrétní krok.

**Cílené opravy:**

- Název kroku v těle: „Označte mluvčí a popište důležité dění v obraze“.
- Modelová poznámka: „[Redakční poznámka: lektor ukazuje na tlačítko Uložit.]“.
- Název howto: „Označte mluvčí a doplňte údaje z obrazu“.

**Triáž:** opravit. Slova lektora zůstávají beze změny; redakční poznámka není jeho citace.

### 4. Není řečeno, kam má být stránka zařazena

**Místo:** ř. 161.

> „…odkaz z přehledu epizod a stav zařazení URL v Google Search Console.“

**Problém:** „zařazení URL“ je nedokončená vazba. Spojení „v Google Search Console“ lze číst jako místo zařazení, přestože zde jde o nástroj pro kontrolu zařazení do indexu Googlu. Záměna je zvlášť nevhodná v seznamu konkrétních kontrol.

**Cílená oprava:** „Začněte tím, co lze přímo zkontrolovat: přesností textu, dostupností stránky a odkazem z přehledu epizod. V Google Search Console také ověřte, zda má Google stránku zařazenou ve svém indexu.“

**Triáž:** opravit. Rozdělení vět přiřadí nástroj ke správnému úkonu; výraz „index“ je zde vysvětlen vztahem ke Googlu a jde o standardní odborný termín.

## Nálezy s nižší prioritou

### 5. Místo nelze vrátit k poslechu

**Místo:** ř. 99.

> „Nejasné místo vraťte k poslechu; pokud mu nerozumíte, přiznejte to v textu.“

**Problém:** nepřirozená vazba „místo vraťte k poslechu“ převádí běžný pokyn na abstraktní manipulaci s místem. „Přiznejte to“ navíc čtenáři neříká, jak má nejistotu zaznamenat.

**Cílená oprava:** „Nejasné místo si poslechněte znovu. Pokud mu stále nerozumíte, označte ho v přepisu jako nesrozumitelné.“

**Triáž:** opravit. Jádrem nálezu je vazba, nikoli samotná slova „místo“ či „poslech“.

### 6. Věta o oddělení volby nástroje a kontroly nepřináší jasný pokyn

**Místo:** konec ř. 107.

> „Volbu nástroje oddělte od kontroly výsledku: automatický převod tuto práci neuzavírá.“

**Problém:** výběr nástroje a kontrola výsledku jsou už samy o sobě různé úkony; čtenář neví, jak je má ještě „oddělit“. „Tuto práci neuzavírá“ neurčitě odkazuje zpět. Zamýšlený smysl je z kontextu jasný: žádný zvolený nástroj nezbavuje člověka následné kontroly.

**Cílená oprava:** „Ať zvolíte kterýkoli nástroj, výsledný text porovnejte s nahrávkou.“

**Triáž:** opravit. Jedna přímá věta zachová celý praktický obsah původní formulace.

### 7. „Nepodstatné výplně“ jsou pro běžného čtenáře nedourčené

**Místo:** ř. 131.

> „U běžného webového obsahu připouští vynechání nepodstatných výplní.“

**Problém:** samotné „výplně“ mohou označovat různé části obsahu. V článku, který varuje před změnou významu přepisu, je potřeba uvést alespoň typický příklad, aby čtenář za výplň nepovažoval obsahově důležitou odbočku či váhání vyjadřující nejistotu.

**Cílená oprava:** „U běžného webového obsahu připouští vynechání nepodstatných zvuků váhání, například ‚ehm‘, pokud tím neutrpí význam sdělení.“

**Triáž:** opravit. Jde o srozumitelnost českého výkladu; konečné znění musí zůstat v mezích již ověřeného zdroje.

### 8. „Podrobnosti značení“ nevysvětlují, čeho se navazující návod týká

**Místo:** ř. 157.

> „Podrobnosti značení řeší samostatný návod k VideoObject.“

**Problém:** čtenář se zde poprvé setkává s VideoObject a obecné „značení“ mu nepomůže poznat téma odkazu. Projektová tonalita pro tuto oblast výslovně preferuje „strukturovaná data“ a technický název až jako doplnění. Samotný oficiální název VideoObject chybou není.

**Cílená oprava:** „Strukturovaná data pro video popisuje samostatný návod k VideoObject.“ Odkaz může zůstat na názvu VideoObject, případně zahrnout celé sousloví „strukturovaná data pro video“.

**Triáž:** opravit.

### 9. Štítek „Mez výsledku“ je nepřirozený a neříká, co box objasní

**Místo:** ř. 165.

> „Mez výsledku“

**Problém:** česká slova jednotlivě jsou v pořádku, ale spojení není běžným označením omezení interpretace pozorování. Box objasňuje, co z nalezené či nenalezené citace lze vyvozovat.

**Cílená oprava:** „Co z citace nepoznáte“.

**Triáž:** opravit. Není důvod zakazovat slovo „mez“ obecně.

### 10. Závěr nejasně střídá epizodu a její přepis

**Místo:** ř. 169.

> „V praxi začněte jednou epizodou, u které má přesné znění odpovědí hodnotu pro zákazníky. Zkontrolujte ji celou a použijte její strukturu jako vzor pro další záznamy.“

**Problém:** obě zájmena odkazují gramaticky k epizodě. Podle smyslu návodu ale má čtenář zkontrolovat přepis a dál použít jeho členění. „Struktura epizody jako vzor pro další záznamy“ může místo práce s textem vyznít jako rada k natáčení dalších dílů.

**Cílená oprava druhé věty:** „Její přepis celý porovnejte s nahrávkou a jeho členění použijte jako vzor pro přepisy dalších epizod.“

**Triáž:** opravit. První věta může zůstat.

### 11. Uchování vazby na záznam není konkrétní činnost

**Místo:** howto, ř. 26.

> „Vyjděte z titulků nebo z automatického přepisu konečné nahrávky. Uchovejte vazbu na původní záznam.“

**Problém:** čtenář neví, zda „vazba“ znamená odkaz, soubor, časové údaje nebo verzi nahrávky. V samostatném stručném návodu chybí konkrétní podoba kroku. Pro kontrolu textu je zde potřeba vědět, ke které nahrávce patří.

**Cílená oprava:** „Vyjděte z titulků nebo z automatického přepisu konečné verze nahrávky. K přepisu si poznamenejte odkaz na tuto nahrávku nebo název zvukového souboru.“

**Triáž:** opravit. Stejný princip odpovídá podrobnějšímu kroku v těle; neukládá povinné časování každého řádku.

### 12. Nadpis nesrozumitelně odděluje „výsledek publikace“ od citací

**Místo:** H2, ř. 159.

> „Výsledek publikace přepisu ověřujte odděleně od citací“

**Problém:** „výsledek publikace“ je příliš široký pojem; citace přece mohou být jedním z pozdějších výsledků. Sekce ve skutečnosti nejdřív odděluje kontrolu přesnosti a dostupnosti textu od následného sledování vyhledávání a AI odpovědí. Nadpis by měl tuto posloupnost říct přímo.

**Cílená oprava se zachováním povinného formátování H2:**

```md
## Nejprve zkontrolujte <span class="hl">zveřejněný přepis</span>, potom sledujte <strong>AI citace</strong>
```

**Triáž:** opravit. Ostatní H2 mají obě povinné značky; není důvod je plošně měnit.

## Kontroly bez nálezu a vědomě ponechané výrazy

- **Title: 56 znaků**, splňuje zadaných 50–60.
- **Samostatný seoTitle: 45 znaků**, splňuje horní limit 60. Spodní limit se na něj podle zadání nevztahuje; není důvod ho uměle prodlužovat.
- Původní description má **140 znaků**. Zjištěným problémem je přesnost obsahového slibu, nikoli délka.
- Všech **6 H2** obsahuje `span.hl` i `strong`. Návrh u bodu 12 toto pravidlo zachovává.
- Publikace i aktualizace uvádějí 17. 9. 2026. Bez jazykového nálezu; hodnoty jsem neměnil.
- **AI Overviews, Gemini API, YouTube, Beey, Google Search Console a VideoObject** jsou názvy produktů či standardů. Nehlásím je jako anglicismy. Pouze u VideoObject chybí čtenářsky užitečné pojmenování kategorie (bod 8).
- **HTML** je vysvětleno přímo ve větě jako běžný text stránky. Výraz „vykreslené HTML“ označuje relevantní technický výstup. Jeho nahrazení jen „viditelným textem“ by mohlo ztratit význam kontroly; nepožaduji takovou náhradu.
- **Redakční poznámka, časový kód, přepis řeči, strukturovaná data, vizuální informace, míra jistoty, tematické části** jsou v daném kontextu srozumitelná a zavedená spojení. Žádné samo o sobě není vadou.
- Obecné spojení **„nese část informace“** není důvod označit za kalk; v kontextu podmínky význam srozumitelně vysvětluje. Lze ho stylisticky zjednodušit, ale nepřidávám falešný nález jen kvůli jiné autorské preferenci.
- Modelová chybná věta „Tady ještě klikejte“ je záměrný příklad chyby přepisu. Neupravovat ji na jazykově přirozenější pokyn, protože by se ztratil smysl ukázky.
- České uvozovky v čtenářském textu jsou v pořádku. Rovné uvozovky v YAML/JSX jsou syntaxe, nikoli typografická chyba.
- CTA věcně uvádí produkt a konkrétní možnosti použití. Neříká, že Pack sám vytvoří přepis nebo zaručí citace. Jazykový zásah do CTA není potřebný; existenci a obsah produktu tento audit nově neověřuje.
- Opakování krátké definice ve frontmatteru a úvodu samo o sobě nepovažuji za duplicitu k odstranění; může být záměrem datového modelu stránky.

## Slovník a další postup

Podle zadání se slovník ani log neměnily. Cílené hledání neukázalo existující přímé pravidlo pro hlavní podezřelé vazby. **Nenavrhuji široké nové regexy** na „obraz“, „vazbu“, „mez“ či „výsledek“: jinde mohou být zcela správně.

Pokud se mají tyto zkušenosti zachytit do budoucna, nejvhodnějším kandidátem k ručnímu posouzení je úzká vazba „místo vraťte k poslechu“ → „místo si poslechněte znovu“. Ostatní nálezy jsou převážně závislé na významu konkrétní věty a patří k redakčnímu čtení, nikoli k plošnému nahrazování.

Po zapracování zkontrolovat zejména soulad description a úvodu s obsahem, shodu howto s viditelnými kroky a význam zájmen v závěru. Potom zopakovat mechanickou kontrolu. Tento audit potvrzuje, že **0 mechanických nálezů neznamená hotovou jazykovou revizi**.
