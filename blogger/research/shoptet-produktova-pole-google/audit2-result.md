1. **[VYSOKÁ] Frontmatter `description` a `answer` → rozpor v terminologii a zbytečně silné tvrzení → navržené znění**
   - Problém: V perexu a answer střídáš „doporučená pole“, „deklaraci vrácení zboží“, „gtin13“ a místy to zní tvrději než tělo. Navíc „pole gtin13 chybí skoro třetině“ je v pořádku, ale `answer` už je stylisticky přetížený výčtem a ztrácí hlavní pointu. Tělo říká jasněji: povinné minimum všichni, mezery jsou hlavně v doporučených a část z nich není v rukou e-shopaře.
   - Konkrétní navržené znění:
     - `description: "Měření 38 e-shopů na Shoptetu proti dokumentaci Googlu: povinné vlastnosti splňuje každý, ale mezi doporučenými chybí hlavně návratová politika, variantační provázání a u části obchodů i EAN."`
     - `answer: "Na vzorku 38 produkčních e-shopů Shoptet plní povinné vlastnosti pro merchant listings ve všech případech. Slabší je to u doporučených vlastností: nikde se neobjevila hasMerchantReturnPolicy, u variant chybí ProductGroup, isVariantOf i inProductGroupWithID a EAN (`gtin13`) mělo 27 z 38 obchodů."`

2. **[VYSOKÁ] Nadpis „Doporučené: díry nejsou náhodné“ + úvod odstavce → zbytečný hedging brzdí sdělení → navržené znění**
   - Problém: Po auditu je text opatrný správně, ale tady už je skoro až přibrzděný. „pravděpodobně“, „nejspíš“, „zřejmě“ v rychlém sledu oslabují pointu. Stačí jednou přiznat, že jde o interpretační rozdělení, a pak mluvit přímočařeji.
   - Konkrétní navržené znění:
     - `Tady je rozdíl vidět. Pro přehled jsem doporučené vlastnosti rozdělil do tří praktických skupin podle toho, co má typicky v ruce platforma a co majitel katalogu. Není to výsledek měření původu dat, jen užitečný způsob čtení výsledků.`

3. **[VYSOKÁ] Tabulky v části „Doporučené“ → majitel e-shopu si neodnese dost konkrétní akci přímo u dat → navržené znění**
   - Problém: Akce je až dole v checklistu. U analytického článku je lepší dát praktický závěr už tam, kde čtenář vidí čísla. Jinak si z tabulek odnese spíš „Shoptet má díry“ než „co mám udělat já dnes“.
   - Konkrétní navržené znění:
     - Za prostřední tabulku vložit krátký odstavec:
       - `Prakticky z toho pro majitele e-shopu plynou tři priority: doplnit EAN, zkontrolovat značku a nepředpokládat, že variantové parametry převezmou strukturovaná data samy. To jsou tři věci, které můžete ovlivnit hned.`
     - Za spodní tabulku vložit:
       - `Naopak nulové hodnoty u návratové politiky a variantového provázání nejsou dobrý kandidát na pátrání v administraci. Tady je užitečnější vědět, že jde spíš o limit výchozí implementace než o chybu katalogu.`

4. **[STŘEDNÍ] „Tohle je nudná část a je to dobře.“ → zbytečná vata, zpomaluje tempo → navržené znění**
   - Problém: Věta není špatně, ale po ní následuje skutečné sdělení. Můžeš jít rovnou k věci.
   - Konkrétní navržené znění:
     - `V měřeném vzorku splnil povinné minimum každý e-shop, aniž by pro to musel cokoli dělat. \`priceSpecification\` nemá nikdo, ale Google ho uvádí jen jako alternativu k \`price\`, takže povinnost je splněná i bez něj.`

5. **[VYSOKÁ] Část „Varianty se nezapisují tak, jak Google doporučuje“ → hlavní praktický dopad je schovaný až ve třetím odstavci → navržené znění**
   - Problém: Tohle je jedna z nejsilnějších částí článku, ale rozjíždí se opatrně a pointa přichází pozdě. Potřebuješ hned v první větě říct, co je problém.
   - Konkrétní navržené znění:
     - `U variant je slabina nejčitelnější: Shoptet je ve vzorku zapisoval jako více objektů \`Offer\` pod jedním produktem, ne pomocí prvků, které Google doporučuje pro variantní produkty.`
     - Dál:
       - `Šest z 38 e-shopů mělo na produktové stránce víc než jednu nabídku — dvě, tři, čtyři a v jednom případě dvanáct. Z měření můžu doložit jen přítomnost více objektů \`Offer\` na jedné stránce; v praxi to typicky odpovídá variantám téhož produktu.`
     - A závěr zostřit:
       - `Praktický důsledek je jednoduchý: stroj dostane jeden produkt s více cenami, ale bez doporučeného provázání variant a bez atributů jako \`size\` nebo \`color\`.`

6. **[VYSOKÁ] Část „Dvě čísla, která si musím opravit sám“ → oprava vlastních čísel je obsahově důležitá, ale je utopená příliš pozdě → navržené znění**
   - Problém: Ptáš se správně na umístění. Ano, teď se trochu ztrácí uprostřed. Je to redakčně cenné gesto, ale pro běžného čtenáře je to už vedlejší kolej po variantách. Lepší je krátký signál dát už do vzorku a plné vysvětlení nechat níž.
   - Konkrétní navržené znění:
     - Do sekce „Vzorek“ doplnit na konec:
       - `Tohle rozšíření zároveň opravuje dva závěry z prvního dílu: EAN v produkčních obchodech nevychází tak nízko a produkt v JSON-LD se přece jen v části vzorku objevuje. Detaily uvádím níž.`
     - Současný nadpis přejmenovat na údernější:
       - `## Co opravuje větší vzorek`
     - První větu zkrátit:
       - `Větší a čistší vzorek opravuje dvě čísla z prvního dílu.`

7. **[STŘEDNÍ] Insight „Rozdíl mezi nedbalostí a dírou“ → nadbytečné ohrazení v poslední větě → navržené znění**
   - Problém: Poslední dvě věty dělají v zásadě totéž. Stačí jedna opatrná formulace, ne dvě.
   - Konkrétní navržené znění:
     - `Že deklaraci vrácení zboží nemá ani jeden z 38 obchodů napříč různými šablonami a velikostmi, silně naznačuje limit výchozí implementace, ne selhání jednotlivých majitelů. Měření samo ale neověřuje, jestli to nejde doplnit úpravou šablony nebo doplňkem.`

8. **[STŘEDNÍ] FAQ „Proč nikdo nemá deklaraci vrácení zboží?“ → FAQ je delší a opatrnější než tělo, ztrácí tah → navržené znění**
   - Problém: Odpověď je přesná, ale zbytečně rozvětvená. FAQ má být rychlé.
   - Konkrétní navržené znění:
     - `Vlastnost hasMerchantReturnPolicy se neobjevila ani u jednoho z 38 e-shopů. To spíš ukazuje na limit výchozí implementace Shoptetu než na chybu jednotlivých majitelů. Z měření ale neplyne, že ji nejde doplnit úpravou šablony nebo doplňkem.`

9. **[STŘEDNÍ] FAQ „Kolik e-shopů má vyplněný EAN?“ ↔ tělo → terminologická nejednotnost `EAN` / `gtin13` / `EAN-13` → navržené znění**
   - Problém: V těle i frontmatteru se to dá pochopit, ale střídání názvů je zbytečně rušivé. Stačí jednou ukotvit: EAN v datech jako `gtin13`.
   - Konkrétní navržené znění:
     - V textu i FAQ držet formulaci:
       - `EAN (ve strukturovaných datech jako \`gtin13\`)`
     - Např. FAQ:
       - `Dvacet sedm z třiceti osmi. Měřil jsem přítomnost EANu, který se ve vzorku zapisoval jako vlastnost \`gtin13\`. Když ho máte vyplněný v katalogu, propíše se do dat.`

10. **[STŘEDNÍ] Sekce „Identita značky: skoro všude, ale bez loga“ → lehce vybočuje a rozbíjí spád po silné pasáži o opravách čísel → navržené znění**
    - Problém: Obsahově dává smysl, ale strukturou působí jako menší odbočka před závěrečnými doporučeními. Pomohlo by ji explicitně označit jako vedlejší zjištění, nebo ji posunout níž.
    - Konkrétní navržené znění:
      - Změna nadpisu:
        - `## Vedlejší zjištění: identita firmy v JSON-LD`
      - První věta:
        - `Tohle už neleží přímo v merchant listing požadavcích, ale stojí za krátkou poznámku.`

11. **[VYSOKÁ] Checklist „Co s tím jde udělat dnes“ → poslední bod není akce, ale smíření se stavem → navržené znění**
    - Problém: U checklistu čekáš akční body. „Nesrovnávat se s tím, co platforma nedělá“ je spíš mentální rámec než úkol.
    - Konkrétní navržené znění:
      - Nahradit poslední bod:
        - `{ title: "Oddělit vlastní backlog od limitů platformy", desc: "EAN, značka a text produktů řešte hned. Návratovou politiku a variantové provázání si poznamenejte jako téma pro doplněk, šablonu nebo dotaz na platformu." }`

12. **[STŘEDNÍ] Sekce „Tři chyby, které z měření plynou“ → druhá chyba je formulovaná negativně, ale chybí konkrétní další krok → navržené znění**
    - Problém: Dobře pojmenovává omyl, ale nevede k akci.
    - Konkrétní navržené znění:
      - U Mistake 02 doplnit závěr:
        - `Nemá smysl je hledat v administraci — buď je doplní platforma, nebo doplněk či zásah do šablony. Pokud je potřebujete řešit, je to technický úkol pro vývoj nebo dotaz na podporu, ne práce v katalogu.`

13. **[NÍZKÁ] „Bez těch tří prvků nedostává stroj varianty v podobě, kterou Google pro variantní produkty doporučuje“ → těžkopádná formulace → navržené znění**
    - Problém: Smysl sedí, ale věta je dlouhá.
    - Konkrétní navržené znění:
      - `Bez těchto tří prvků nedostává stroj varianty v doporučené podobě. Vidí jeden produkt s několika cenami.`

14. **[NÍZKÁ] „V dalších navážu filtry a parametrickými adresami a blogovým modulem.“ → jazyková neobratnost v závěru → navržené znění**
    - Problém: Chybí předložka a závěr tím působí uspěchaně.
    - Konkrétní navržené znění:
      - `V dalších dílech navážu filtry, parametrickými adresami a blogovým modulem.`
      - nebo lépe:
        - `V dalších dílech navážu tématy filtrů, parametrických adres a blogového modulu.`

15. **[NÍZKÁ] Frontmatter `stats` ↔ tělo → v pořádku, ale třetí statistika může být srozumitelnější → navržené znění**
    - Problém: Fakticky sedí, jen je zbytečně dlouhá a technická.
    - Konkrétní navržené znění:
      - `label: "měřených e-shopů s vyplněným EANem ve strukturovaných datech"`


### 3 nejdůležitější věci
1. **Zostři hlavní sdělení v frontmatteru a v úvodu doporučených vlastností** — text je přesný, ale místy už moc opatrný a ztrácí razanci.
2. **Přitáhni praktickou akci blíž k tabulkám** — EAN, značka, text variant dát čtenáři do ruky hned, ne až v checklistu dole.
3. **Opravu vlastních dvou čísel avizuj už ve vzorku a samotnou sekci přejmenuj** — teď je cenná, ale zapadá uprostřed textu.