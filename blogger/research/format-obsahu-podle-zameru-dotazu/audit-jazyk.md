# Jazykový audit: Formát obsahu podle záměru dotazu

Datum auditu: 23. 10. 2026
Auditovaný soubor: `src/content/articles/format-obsahu-podle-zameru-dotazu.mdx`
Tonalita porovnána s: `marketing/05-messaging-a-tonalita.md`

## Verdikt

Článek je věcný, srozumitelně vystavěný a většinou odpovídá edukativnímu hlasu značky. Nestraší, netriumfuje a neslibuje pozice ani citace. Před publikací ale doporučuji jazykovou úpravu: našel jsem 15 míst úrovně **[WARNING]** a 6 míst úrovně **[TIP]**. Nejčastěji jde o nevysvětlený anglicismus `brief`, anglické kalky, vágní pojmenování a věty, které tvrdí víc nebo přesněji, než jejich formulace unese.

V běžném textu jsem nenašel chybu v českých uvozovkách, pomlčkách ani zápisu procent. Rovné uvozovky ve frontmatteru a JSX jsou syntaxe, nikoli typografická chyba. Výraz `search intent` je pouze v poli `keywords`; cílená kontrola slovníku potvrzuje, že jednotné číslo se toleruje, a v tomto metadatovém poli proto nejde o nález.

## Nálezy

1. **[WARNING]** „Formát obsahu podle záměru dotazu — kdy seznam, kdy návod, kdy stránka“
   - **Problém:** Titulek staví vedle sebe seznam jako vnitřní formát, návod jako typ obsahu a neurčitou „stránku“. Článek přitom správně vysvětluje, že typ stránky a formát uvnitř stránky jsou dvě různé úrovně. Titulek tedy rozmělňuje vlastní hlavní myšlenku.
   - **Konkrétní přeformulování:** „Formát obsahu podle záměru dotazu — kdy krátká odpověď, návod, srovnání nebo prodejní stránka“

2. **[WARNING]** „Jednoduchý fakt potřebuje přímou odpověď, postup kroky, výběr srovnání a nákup produktovou nebo servisní stránku. […] U smíšeného dotazu určete hlavní úlohu a vedlejší potřeby připojte.“
   - **Problém:** První věta je příliš telegramatická a spojuje nestejné vazby. „Nákup potřebuje stránku“ zní mechanicky, „servisní stránka“ je v tomto významu kalk z angličtiny a „potřeby připojte“ neříká, kam ani za jaké podmínky.
   - **Konkrétní přeformulování:** „Jednoduchý fakt vyřeší přímá odpověď, postup zpřehlední kroky, výběr usnadní srovnání a nákup dokončí produktová stránka nebo stránka služby. Výsledky vyhledávání vám pomohou záměr ověřit, ale nejsou předlohou k opsání. U smíšeného dotazu určete hlavní úlohu a slučitelné vedlejší potřeby zohledněte na stejné stránce.“

3. **[WARNING]** „Pravidlo před briefem“, „výchozí brief“, „jeden brief“, „Do briefu napište“, „obsahový brief“
   - **Problém:** `Brief` je opakovaný a nevysvětlený anglicismus. V edukativním článku, který má podle tonalitního dokumentu mluvit bez žargonu, je české „zadání“ přesnější a stejně krátké. Ve slovníku pro něj zatím není pravidlo; opakování v pěti místech z něj dělá vhodného kandidáta k budoucímu doplnění.
   - **Konkrétní přeformulování:** „Pravidlo před zadáním“, „výchozí zadání“, „jedno zadání“, „Do zadání napište“ a „obsahové zadání“.

4. **[TIP]** „Záměr tedy neurčuje délku ani komponentu. Určuje **výsledek návštěvy**.“
   - **Problém:** „Výsledek návštěvy“ je abstraktní a může znamenat obchodní výsledek, chování v analytice i odpověď, kterou člověk získá.
   - **Konkrétní přeformulování:** „Záměr tedy neurčuje délku ani komponentu. Určuje, **co má člověk na stránce vyřešit**.“

5. **[TIP]** „Rozhodovací matice formátů ukazuje, **co použít a čím neplýtvat**“
   - **Problém:** Vazba „čím neplýtvat“ předjímá zdroj, kterým se plýtvá, ale následující tabulka jmenuje nevhodné formáty. Nadpis proto není významově přesný.
   - **Konkrétní přeformulování:** „Rozhodovací matice formátů ukazuje, **co použít a co bývá zbytečné**“

6. **[WARNING]** „Odstranit tření a dát na stránku údaje potřebné k dokončení akce“
   - **Problém:** „Odstranit tření“ je produktový kalk z anglického `remove friction`. Bez kontextu neříká, jaké překážky má autor odstranit.
   - **Konkrétní přeformulování:** „Odstranit překážky při dokončení akce a uvést všechny potřebné údaje“

7. **[WARNING]** „seznam nebo kurátorovaný přehled“
   - **Problém:** „Kurátorovaný“ působí jako převzatý marketingový žargon a nevysvětluje, v čem se přehled liší od obyčejného seznamu.
   - **Konkrétní přeformulování:** „seznam nebo ručně vybraný přehled“

8. **[TIP]** „Zpřístupnit správný cíl; nový blogový článek obvykle nepomůže“
   - **Problém:** „Správný cíl“ je vágní: může jít o stránku, provozovnu i dokončení úkolu.
   - **Konkrétní přeformulování:** „Usnadnit cestu na hledanou stránku, do pobočky nebo ke kontaktním údajům; nový blogový článek obvykle nepomůže“

9. **[WARNING]** „Ověřit konkrétní produkt nebo službu a jednat | produktová, servisní, cenová nebo rezervační stránka“
   - **Problém:** Sloveso „jednat“ nepojmenovává požadovanou akci a „servisní stránka“ v češtině spíše označuje stránku servisu či oprav než stránku služby.
   - **Konkrétní přeformulování:** „Ověřit konkrétní produkt nebo službu a objednat ji či poslat poptávku | produktová, cenová či rezervační stránka nebo stránka služby“

10. **[TIP]** „několikatisícový článek před nabídkou“
    - **Problém:** Není jasné, zda jde o tisíce slov, znaků nebo korun.
    - **Konkrétní přeformulování:** „článek o několika tisících slovech před samotnou nabídkou“

11. **[WARNING]** „U číslovaných seznamů existuje i malé měření na citacích v ChatGPT, podle kterého se jejich zastoupení výrazně měnilo se záměrem dotazu.“
    - **Problém:** „Malé měření“ a „měření na citacích“ jsou nepřirozené vazby. „Měnilo se záměrem“ navíc zní, jako by šlo o časovou změnu, ačkoli věta popisuje rozdíl mezi záměry.
    - **Konkrétní přeformulování:** „Menší analýza citací v ChatGPT také zjistila, že zastoupení číslovaných seznamů se výrazně lišilo podle záměru dotazu.“

12. **[WARNING]** „Použijte češtinu, českou lokalitu a stejné zařízení, které je pro publikum podstatné. Zapište typy stránek, jejich úhel a prvky výsledků.“
    - **Problém:** „Stejné zařízení“ nemá ve větě žádný protějšek, se kterým by se mělo shodovat. „Použijte češtinu“ neříká, zda jde o jazyk dotazu či rozhraní, a „úhel“ je kalk z anglického `angle`.
    - **Konkrétní přeformulování:** „Hledejte česky, nastavte českou lokalitu a použijte zařízení, na kterém obvykle hledá vaše cílové publikum. Zapište si typy stránek, způsob zpracování tématu a zvláštní prvky ve výsledcích.“

13. **[WARNING]** „Vyhledávač ukazuje svůj odhad a současnou nabídku webu.“
    - **Problém:** „Nabídka webu“ může znamenat nabídku jednoho webu, ačkoli kontext mluví o celé sadě dostupných výsledků. Spojení zároveň zbytečně personifikuje vyhledávač.
    - **Konkrétní přeformulování:** „Výsledky odrážejí odhad vyhledávače i to, jaké stránky jsou nyní na webu k dispozici.“

14. **[WARNING]** „jaké podklady tvrzení unesou“
    - **Problém:** Metafora „podklady unesou tvrzení“ je kostrbatá a obrací přirozenou vazbu: autor tvrzení dokládá podklady.
    - **Konkrétní přeformulování:** „jakými podklady jednotlivá tvrzení doložíte“

15. **[WARNING]** „Jsou důkazem toho, co Google v danou chvíli považuje za užitečné pro daný dotaz, ne zákazem přinést lepší odpověď nebo vlastní zkušenost.“
    - **Problém:** Výsledky nejsou jednoznačný „důkaz“ a spojení „ne zákazem přinést“ je syntakticky těžké. Formulace je jistější, než dovoluje proměnlivá povaha výsledků.
    - **Konkrétní přeformulování:** „Ukazují, co Google v danou chvíli považuje za užitečné pro daný dotaz. Neznamená to však, že nesmíte nabídnout lepší odpověď nebo přidat vlastní zkušenost.“

16. **[WARNING]** „jednotlivé úlohy vedou ke stejnému cíli a mohou se obsloužit bez vzájemného překážení“
    - **Problém:** Pasivní „úlohy se obslouží“ a podstatné jméno „překážení“ působí úředně a nepřirozeně.
    - **Konkrétní přeformulování:** „jednotlivé úlohy vedou ke stejnému cíli a lze je splnit na jedné stránce, aniž si její části navzájem překážejí“

17. **[TIP]** „všechny tři informace vedou k poptávce“
    - **Problém:** Věta přisuzuje třem informacím přímý obchodní účinek, který text nedokládá. V edukativním hlasu stačí popsat jejich roli v rozhodování.
    - **Konkrétní přeformulování:** „všechny tři informace pomáhají návštěvníkovi rozhodnout se, zda poslat poptávku“

18. **[WARNING]** „není předepsané zvláštní psaní, drobení textu ani speciální strukturovaná data“ / „není potřeba zvláštní způsob psaní, drobení textu na malé části nebo speciální strukturovaná data. Doporučuje běžný základ“
    - **Problém:** V první pasáži je „zvláštní psaní“ neúplné, „drobení“ je hodnotící a hovorové a „doporučuje běžný základ“ není přirozená česká vazba. Stejná myšlenka se ve frontmatteru a těle podává dvěma různě kostrbatými způsoby.
    - **Konkrétní přeformulování:** „není předepsaný zvláštní způsob psaní, dělení textu na krátké úseky ani zvláštní strukturovaná data“ a v těle navázat: „Doporučuje držet se běžných zásad: původního hodnotného obsahu, srozumitelného členění, popisných nadpisů a důležitých informací v textové podobě.“

19. **[TIP]** „formát slouží člověku a jeho úloze, ne domnělé technické chuti modelu“
    - **Problém:** „Technická chuť modelu“ je nápadná personifikace, která na okamžik opouští věcný edukativní tón a zastírá, že jde o domnělé technické požadavky.
    - **Konkrétní přeformulování:** „formát slouží člověku a jeho úloze, ne domnělým technickým požadavkům modelu“

20. **[WARNING]** „zda člověk po přečtení získá dost k dosažení svého cíle a zda jeho zkušenost bude uspokojivá“
    - **Problém:** „Získá dost“ neříká, čeho má být dost, a „jeho zkušenost bude uspokojivá“ je doslovně působící kalk z anglického `satisfying experience`.
    - **Konkrétní přeformulování:** „zda člověk po přečtení získá dost informací k dosažení svého cíle a zda bude s výsledkem spokojený“

21. **[WARNING]** „Audit AI viditelnosti […] projde obsahové mezery i technickou připravenost a dá vám prioritní seznam úprav“
    - **Problém:** „Projít obsahové mezery“ je nepřirozená vazba a „obsahové mezery“ jsou bez vysvětlení vágní. „Prioritní seznam“ může znamenat důležitý seznam, nikoli seznam seřazený podle priority. Nabídka je jinak konkrétní a cenou ani termínem nepřehání.
    - **Konkrétní přeformulování:** „Audit AI viditelnosti za 3 600 Kč bez DPH prověří, která důležitá témata na webu chybějí, i jeho technickou připravenost. Do pěti pracovních dnů od úhrady dostanete seznam úprav seřazený podle priority.“

## Soulad s tonalitou

- Edukativní část převážně plní zadání „věcný, srozumitelný, vysvětluje“.
- Text nepoužívá strach, naléhání, triumfální superlativy ani garance výsledků.
- Anglické názvy kategorií z pokynů Googlu a názvy zdrojů jsou vlastní názvy či doklady; nepovažuji je za stylistickou vadu.
- Závěrečné obchodní CTA je konkrétní a střídmé. Potřebuje jazykové zpřesnění, nikoli změnu nabídky nebo zmírnění doložených parametrů.
- Největší odchylkou od hlasu „bez žargonu“ je opakovaný výraz `brief`; největší srozumitelnostní slabinou jsou vágní či kalkované vazby jako „odstranit tření“, „jejich úhel“, „podklady tvrzení unesou“ a „technická chuť modelu“.
