# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit článku `ai-act-pro-weby`, kolo 1: věcná správnost a aktuálnost k **26. 11. 2026**. Posouzeno výhradně podle dodaných souborů, bez webového vyhledávání. Článek ani podklady nebyly upraveny. Odkazy na řádky se vztahují k původním souborům; u právních výňatků může jeden řádek obsahovat celý článek nařízení.

Rozhodující vady: neúplné podmínky výjimek z čl. 50, záměna alternativních výjimek za souběžné, příliš široké tvrzení o odkladu pravidel pro vysoce rizikové systémy a popření doložené vazby AI Actu na DSA. Upozornění „nejde o právní radu“ tyto vady neodstraňuje.

## Nálezy

### 1. [BLOCKER] V úvodu chybí redakční odpovědnost jako další podmínka výjimky pro AI text

**Místo a citace:** `clanek.mdx:5`: „…musí označit deepfake a AI text zveřejněný k informování veřejnosti o věcech veřejného zájmu, pokud neprošel lidskou nebo redakční kontrolou.“ Stejná zkratka je v `clanek.mdx:39`; `clanek.mdx:97` mluví pouze o textu „bez redakční kontroly“.

**Problém:** Samotný lidský přezkum nebo redakční kontrola k této výjimce nestačí. Současně musí za zveřejnění nést redakční odpovědnost fyzická nebo právnická osoba. Shrnutí navíc opomíjí lidský přezkum jako alternativu k redakční kontrole. V řádku 5 může společné zakončení věty mylně vztáhnout výjimku pro text také na deepfake. Pozdější správná FAQ odpověď nespraví nesprávnou samostatně čitelnou odpověď a úvod.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 4, druhá část. Podmínka odpovědnosti je správně zachycena i v `research.md:35`.

**Konkrétní nové znění části o textech, použít v řádcích 5, 39 a 97:**

> Zavádějící subjekt uvede umělý původ nebo úpravu AI textu zveřejněného za účelem informování veřejnosti o záležitostech veřejného zájmu. Výjimka se uplatní, pokud obsah prošel lidským přezkumem nebo redakční kontrolou a současně za zveřejnění nese redakční odpovědnost fyzická nebo právnická osoba; další výjimka se týká použití povoleného zákonem pro odhalování, prevenci, vyšetřování nebo stíhání trestných činů.

Část o deepfacích oddělit do vlastní věty podle nálezů 3, 5 a 6. Výjimku z označení AI textu na deepfake nevztahovat.

### 2. [BLOCKER] Úvod a závěr mění podmíněnou povinnost u chatbotu v bezvýjimečnou

**Místo a citace:** `clanek.mdx:39` a `clanek.mdx:97`: „poskytovatel chatbota musí zajistit, aby člověk věděl, že komunikuje s AI“. `clanek.mdx:49`: „když je to zřejmé přiměřeně informované a pozorné osobě“.

**Problém:** Samostatné úvodní a závěrečné tvrzení vynechává výjimku zřejmosti. Tabulka pak zkracuje její právní test: chybí obezřetnost a zohlednění okolností a kontextu použití. Nejde o to, zda je použití AI zřejmé samotnému provozovateli nebo libovolnému návštěvníkovi. Podmínka v jiné části článku neopravuje kategorické tvrzení v úvodu.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 1; `research.md:31` obsahuje jen část testu.

**Konkrétní nové znění části o chatbotu:**

> Poskytovatel systému AI určeného k přímé interakci s lidmi zajistí jeho návrh a vývoj tak, aby dotčené osoby byly vyrozuměny, že komunikují s AI. To neplatí, je-li tato skutečnost zřejmá přiměřeně informované, pozorné a obezřetné osobě při zohlednění okolností a kontextu použití. Zvláštní zákonnou výjimku pro trestní řízení a její omezení uvádí tabulka níže.

Ve výjimce v tabulce uvést celý test a zároveň doplnění z nálezu 3. Ve FAQ `clanek.mdx:25` nahradit neurčité „pokud to není zřejmé“ stejným testem.

### 3. [BLOCKER] Výjimky pro trestní řízení chybějí nebo jsou rozšířeny na jakékoli „vymáhání práva“

**Místo a citace:** `clanek.mdx:49`, `clanek.mdx:50` a `clanek.mdx:52` příslušné zákonné výjimky neuvádějí. `clanek.mdx:51` uvádí jako celou výjimku „vymáhání práva“. Stejná zkratka nebo mezera je v `research.md:31` až `research.md:35`.

**Problém:** Výjimka není obecné osvobození všeho, co souvisí s vymáháním práva. Jednotlivé odstavce mají odlišné podmínky. U odst. 1 navíc existuje výjimka z výjimky pro systémy dostupné veřejnosti k hlášení trestných činů. U odst. 3 zákonný výčet na rozdíl od některých dalších odstavců neuvádí stíhání. Formulace „Hlavní výjimky“ neopravňuje vypustit výjimky, pokud článek současně tvrdí povinnost obecně.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 1 až 4.

**Konkrétní nové znění doplňků ke čtyřem řádkům tabulky:**

- **Odst. 1:** „Povinnost se s výhradou příslušných záruk práv a svobod třetích stran nevztahuje na systémy AI ze zákona oprávněné odhalovat trestné činy, předcházet jim, vyšetřovat je nebo stíhat. Výjimka se neuplatní, jsou-li systémy dostupné veřejnosti k hlášení trestných činů.“
- **Odst. 2:** „Povinnost se neuplatní také v případech, kdy je to zákonem povoleno k odhalování, prevenci, vyšetřování nebo stíhání trestných činů.“
- **Odst. 3:** „Výjimka se týká systémů pro biometrickou kategorizaci nebo rozpoznávání emocí, kterým zákon umožňuje odhalovat trestné činy, předcházet jim nebo je vyšetřovat, s výhradou příslušných záruk práv a svobod třetích stran a v souladu s právem Unie.“
- **Odst. 4, deepfake i text:** „Povinnost se nevztahuje na použití povolené zákonem k odhalování, prevenci, vyšetřování nebo stíhání trestných činů.“

Tyto podmínky doplnit i do tabulky v researchi. U kategorických souhrnů v `clanek.mdx:5`, `clanek.mdx:25`, `clanek.mdx:27`, `clanek.mdx:39`, `clanek.mdx:81`, `clanek.mdx:82` a `clanek.mdx:97` výslovně zachovat příslušné výjimky nebo formulovat tvrzení jako povinnost za podmínek daného odstavce, s odkazem na opravený přehled.

### 4. [BLOCKER] Dvě alternativní výjimky z označování jsou sloučeny do jedné; seznam pak ukládá povinnost každému vlastnímu generátoru

**Místo a citace:** `clanek.mdx:50`: „asistenční funkce pro běžnou editaci, která podstatně nemění vstup“. `clanek.mdx:84`: „Pokud ho vyvíjíte a provozujete pod svým jménem, týká se vás i strojově čitelné označování podle čl. 50 odst. 2.“

**Problém:** Čl. 50 odst. 2 používá **nebo**: asistenční funkce pro standardní editaci je jedna alternativa, nepodstatná změna vstupních údajů nebo jejich sémantiky další. Článek z nich dělá souběžnou podmínku a zužuje výjimku. Řádek 84 navíc nepodmiňuje závěr povahou výstupů ani zákonnými výjimkami a bez těchto podmínek už dává konkrétnímu čtenáři závěr o jeho povinnosti. Požadavky na technická řešení mají také výslovný rámec technické proveditelnosti.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 2. Lhůta pro starší systémy: `zdroje/omnibus-cs.txt:566`, nový čl. 111 odst. 4. Také `research.md:32` nesprávně používá čárku místo jednoznačného rozlišení alternativ a neuvádí sémantiku.

**Konkrétní nové znění výjimky v tabulce:**

> Povinnost se neuplatní v rozsahu, v jakém systém plní asistenční funkci pro standardní editaci **nebo** podstatně nemění vstupní údaje poskytnuté zavádějícím subjektem či jejich sémantiku; zvlášť platí zákonná výjimka pro trestní řízení. U systémů uvedených na trh před 2. 8. 2026 mají poskytovatelé splnit čl. 50 odst. 2 do 2. 12. 2026.

**Konkrétní nové znění položky v řádku 84:**

> Vlastní generátor obsahu: Prověřit, zda jste jeho poskytovatelem, zda systém vytváří syntetický zvukový, obrazový, video nebo textový obsah a zda se neuplatní některá z výjimek čl. 50 odst. 2. U systémů uvedených na trh před 2. 8. 2026 zohlednit lhůtu do 2. 12. 2026.

**Doplnit za tabulku:**

> Poskytovatelé mají zajistit účinná, interoperabilní, robustní a spolehlivá technická řešení, pokud je to technicky proveditelné, se zohledněním zvláštností a omezení obsahu, nákladů na provádění a obecně uznávaného stavu technologií.

### 5. [BLOCKER] Popis označování nepokrývá obsah upravený AI, ačkoli na něj předpis výslovně dopadá

**Místo a citace:** `clanek.mdx:50`: „označit strojově čitelně jako uměle vytvořené“. `clanek.mdx:52`: „zveřejnit, že deepfake je uměle vytvořený; uvést, že AI vytvořila text“. `clanek.mdx:82`: „Pak je potřeba zveřejnit, že je uměle vytvořený.“

**Problém:** Nařízení výslovně zahrnuje vytváření **i manipulaci** s obsahem. U deepfaku nejde jen o zcela nový obrázek nebo video, ale také o úpravu existujícího obsahu. Také u textu může jít o AI manipulaci s původně lidským textem. Pro upravený obsah navíc nemusí být pravdivé sdělení, že jej AI „vytvořila“. U odst. 2 chybí vedle strojově čitelného označení výslovně požadovaná zjistitelnost původu či manipulace.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 2 a 4; `zdroje/ec-faq-cop.txt:51` a `zdroje/ec-faq-cop.txt:52`. Definice deepfaku: `zdroje/aiact-cs-vyber.txt:7`.

**Konkrétní nové znění sloupce „Co“ u odst. 2:**

> Poskytovatel systému vytvářejícího syntetický zvukový, obrazový, video nebo textový obsah zajistí, aby jeho výstupy byly označeny ve strojově čitelném formátu a zjistitelné jako uměle vytvořené nebo manipulované.

**Konkrétní nové znění sloupce „Co“ u odst. 4:**

> Zavádějící subjekt systému AI, který vytváří deepfake nebo s ním manipuluje, zveřejní, že obsah byl uměle vytvořen nebo manipulován. U systému vytvářejícího nebo manipulujícího text zveřejněný za účelem informování veřejnosti o záležitostech veřejného zájmu uvede umělé vytvoření či manipulaci s textem.

K oběma řádkům připojit výjimky podle nálezů 1, 3, 4 a 6. Stejné rozlišení vytvoření a manipulace zachovat ve FAQ `clanek.mdx:27`, v úvodu, seznamu a shrnutí.

**Přesné nové znění definice pro `clanek.mdx:54`, na kterou lze odkázat z řádku 82:**

> Deepfake je podle čl. 3 bodu 60 obrazový, zvukový nebo video obsah vytvořený nebo manipulovaný AI, který se podobá existujícím osobám, objektům, místům, subjektům či událostem a mohl by se dané osobě nepravdivě jevit jako autentický nebo pravdivý.

### 6. [BLOCKER] Zvláštní režim pro tvůrčí a fiktivní díla je neúplný a neříká, co musí upozornění zachovat

**Místo a citace:** `clanek.mdx:52`: „u zjevně uměleckých a satirických děl jen vhodné upozornění“.

**Problém:** Zákon vedle uměleckých a satirických uvádí také tvůrčí, fiktivní a obdobná díla nebo programy. Jde o omezenou podobu zveřejnění informace, nikoli úplné osvobození od transparentnosti. Povinné zveřejnění existence vytvořeného či manipulovaného obsahu má být provedeno tak, aby nebránilo zobrazení nebo užívání díla. To v článku i v researchi chybí.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 4, část o deepfacích. Podpůrně `zdroje/ec-faq-cop.txt:52`. Neúplný podklad: `research.md:34`.

**Konkrétní nové znění:**

> Je-li deepfake součástí zjevně uměleckého, tvůrčího, satirického, fiktivního či obdobného díla nebo programu, povinnost se omezuje na zveřejnění existence uměle vytvořeného nebo manipulovaného obsahu vhodným způsobem, který nebrání zobrazení nebo užívání díla.

### 7. [BLOCKER] Odklad se popisuje jako odklad všech povinností vysoce rizikových systémů

**Místo a citace:** `clanek.mdx:29`: „posunulo povinnosti pro vysoce rizikové systémy z přílohy III na 2. 12. 2027 a z přílohy I na 2. 8. 2028“. Obdobně `clanek.mdx:68`; `clanek.mdx:97`: „Vysoce rizikové systémy se posunuly na roky 2027 a 2028.“

**Problém:** Data odpovídají primárnímu textu, rozsah tvrzení nikoli. Nový čl. 113 písm. c) jmenuje **kapitolu III oddíly 1, 2 a 3, s výjimkou čl. 6 odst. 5**, a systémy klasifikované podle příslušného odstavce čl. 6 a přílohy. Neodkládá veškeré povinnosti těchto systémů; například relevantní povinnosti čl. 50 tím obecně odloženy nejsou. Pro starší systémy je navíc potřeba odlišit přechodný režim čl. 111 odst. 2. Samotná příslušnost k příloze nemá být podána jako univerzální výrok o odložení celého předpisu.

**Zdroj:** `zdroje/omnibus-cs.txt:576` až `zdroje/omnibus-cs.txt:580`, změna čl. 113; anglické znění `zdroje/omnibus-en.txt:617` až `zdroje/omnibus-en.txt:621`. Přechodný režim: `zdroje/omnibus-cs.txt:562`. `research.md:24` rozsah odkladu rovněž nerozlišuje.

**Konkrétní nové znění pro FAQ a hlavní výklad:**

> Omnibus posunul použitelnost kapitoly III oddílů 1, 2 a 3 AI Actu, s výjimkou čl. 6 odst. 5: pro systémy klasifikované jako vysoce rizikové podle čl. 6 odst. 2 a přílohy III na 2. 12. 2027 a podle čl. 6 odst. 1 a přílohy I na 2. 8. 2028. Nejde o odklad všech povinností těchto systémů.

**Navazující věta k přechodnému režimu:**

> Pro starší vysoce rizikové systémy obsahuje čl. 111 odst. 2 zvláštní režim. U systémů mimo jeho odstavec 1 uvedených na trh nebo do provozu před příslušným datem použitelnosti kapitoly III se uplatnění nařízení váže na významné změny jejich návrhu po tomto datu, aniž je dotčen článek 5. Poskytovatelé a zavádějící subjekty vysoce rizikových systémů určených pro orgány veřejné moci mají v každém případě přijmout nezbytné kroky ke splnění příslušných požadavků a povinností do 2. 8. 2030.

**Krátká náhrada závěrečné věty:**

> Vybraná pravidla kapitoly III pro vysoce rizikové systémy mají nová data použitelnosti v letech 2027 a 2028; rozsah odkladu a přechodný režim popisuje část o Omnibusu.

### 8. [BLOCKER] Tvrzení, že AI Act nesouvisí s označením podle DSA, odporuje přímo Omnibusu

**Místo a citace:** `clanek.mdx:93`: „AI Act nesouvisí s tím, že Evropská komise podle nařízení o digitálních službách zařadila ChatGPT mezi velmi velké vyhledávače…“

**Problém:** Jde o různé předpisy, ale Omnibus mezi nimi výslovně vytváří vazbu. Nový čl. 75 odst. 1 písm. b) váže výlučnou příslušnost Úřadu pro AI na systémy, které představují označené velmi velké platformy či vyhledávače podle DSA nebo jsou do nich integrovány. Výrok o neexistenci souvislosti je proto věcně nesprávný. Dodaný interní článek není primárním dokladem samotného rozhodnutí o označení ChatGPT; tento omezený důkaz není důvod tvrdit, že k označení nedošlo.

**Zdroj:** `zdroje/omnibus-cs.txt:384` až `zdroje/omnibus-cs.txt:397`, zejména řádky 395–397; bod odůvodnění 32 v `zdroje/omnibus-cs.txt:85`. Interní kontext: `zdroje/clanek-webu-chatgpt-jako-vyhledavac-dsa.mdx:43` a jeho seznam zdrojů na řádku 137.

**Konkrétní nové znění bez nutnosti nově dokládat rozhodnutí o ChatGPT:**

> AI Act a nařízení o digitálních službách (DSA) jsou různé předpisy, ale jejich dozor je propojený. Podle čl. 75 odst. 1 písm. b) AI Actu ve znění Omnibusu má Úřad pro AI výlučnou příslušnost pro systémy AI, které představují velmi velké platformy či vyhledávače označené podle DSA nebo jsou do nich integrovány. Tato příslušnost se vztahuje na jejich poskytovatele; na zavádějící subjekty jen tehdy, jsou-li zároveň poskytovatelem nebo součástí stejného podniku. Souvislosti označení ChatGPT podle DSA rozebírá [samostatný článek](/blog/chatgpt-jako-vyhledavac-dsa/).

### 9. [BLOCKER] Dozor a sankce nejsou ponechány pouze členským státům

**Místo a citace:** `clanek.mdx:91`: „AI Act platí přímo, dozor a sankce ale upravují členské státy.“

**Problém:** Takto postavené tvrzení přesouvá celý rámec dozoru a sankcí na státy. Přímo použitelné unijní nařízení však určuje i dozorové pravomoci na úrovni EU a sankční rámec. Omnibus upravuje výlučnou příslušnost Úřadu pro AI a jeho pravomoc ukládat sankce. Členské státy stanovují pravidla v mezích AI Actu. Není správné dovozovat z neověřeného stavu českého adaptačního zákona, že na úrovni EU není dozor nebo sankční mechanismus.

**Zdroj:** `zdroje/omnibus-cs.txt:384` až `zdroje/omnibus-cs.txt:397`, nový čl. 75 odst. 1; `zdroje/omnibus-cs.txt:460` až `zdroje/omnibus-cs.txt:473`, čl. 75c; `zdroje/omnibus-cs.txt:549`, nové znění čl. 99 odst. 1. Stránka Komise rozlišuje národní orgány, Úřad pro AI a evropského inspektora ochrany údajů: `zdroje/ec-guide.txt:64`.

**Konkrétní nové znění:**

> AI Act je přímo použitelný a stanoví také rámec dozoru a sankcí. Část pravomocí vykonávají vnitrostátní orgány, u vymezených systémů má výlučnou příslušnost Úřad pro AI. Členské státy stanovují pravidla pro sankce a další donucovací opatření v souladu s podmínkami nařízení. Stav české adaptační úpravy se v použitých podkladech podařilo doložit jen ke 4. 8. 2026.

### 10. [WARNING] Nadpis podává srpnový stav českého adaptačního zákona jako současný

**Místo a citace:** `clanek.mdx:89`: „adaptační zákon je v legislativním procesu“. V `clanek.mdx:31` a `clanek.mdx:91` je podklad naopak správně připsán zprávě ze 4. 8. 2026 a přiznáno, že platný zákon nebyl v použitých zdrojích nalezen.

**Problém:** Srpnový sekundární zdroj nedokládá legislativní stav k 26. 11. 2026. Nadpis je silnější než důkaz i než vlastní tělo článku. Nedohledání platného předpisu není důkazem jeho neexistence, nezměněného stavu návrhu ani neexistence dozoru. Formulace o ČTÚ a ÚOOÚ lze zachovat jen jako obsah datované zprávy o zamýšlené úpravě.

**Zdroj:** `zdroje/epravo-odklad.txt:58` a `zdroje/epravo-odklad.txt:78`; výslovné omezení rešerše v `research.md:14` a `research.md:25`.

**Konkrétní nové znění nadpisu:**

> Český dozor: co uváděla zpráva ze 4. 8. 2026

**Konkrétní nové znění odpovědi a příslušné části odstavce:**

> Podle zprávy epravo.cz ze 4. 8. 2026 tehdy český adaptační zákon procházel legislativním procesem. Dozor měl podle popisované úpravy vykonávat primárně ČTÚ a v oblasti ochrany osobních údajů ÚOOÚ. Aktuální stav české adaptační úpravy a rozdělení národních kompetencí k 26. 11. 2026 nemám v použitých podkladech ověřeny.

Tato oprava nevyžaduje doplnění nedohledaného čísla předpisu ani tvrzení, že zákon neexistuje.

### 11. [WARNING] Čtyři skupiny povinností nemají každá jiného adresáta

**Místo a citace:** `clanek.mdx:45`: „Obsahuje čtyři povinnosti, každou pro jinou roli“.

**Problém:** Tabulka správně ukazuje dvě role: odst. 1 a 2 míří na poskytovatele, odst. 3 a 4 na zavádějící subjekty. Věta tvrdí čtyři odlišné role. Je to věcný rozpor, nikoli stylistická připomínka; ve článku, jehož hlavním tématem je rozlišení odpovědných rolí, je potřeba jej odstranit.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 1 až 4; rozdělení poskytovatelů a zavádějících subjektů také `zdroje/ec-guide.txt:56` až `zdroje/ec-guide.txt:62`.

**Konkrétní nové znění:**

> Článek 50 rozlišuje čtyři skupiny povinností: odstavce 1 a 2 pro poskytovatele a odstavce 3 a 4 pro zavádějící subjekty.

### 12. [WARNING] Zaměňují se vstup v platnost a použitelnost; závěr nepřesně vymezuje starší systémy

**Místo a citace:** `clanek.mdx:29`: „Nařízení 2026/1744, účinné od 27. 7. 2026“; `clanek.mdx:68`: „je účinné od 27. 7. 2026“. `clanek.mdx:97`: „u systémů na trhu před srpnem do 2. 12. 2026“.

**Problém:** Datum 27. 7. 2026 je podle dodaného textu správně vypočtené datum **vstupu v platnost** Omnibusu. Článek má při vysvětlování několika různých termínů použít přesný pojem a odlišit jej od použitelnosti novelizovaných ustanovení. Stejně tak srpen 2026 není vstupem AI Actu v platnost; jde o datum použitelnosti příslušných pravidel. „Před srpnem“ navíc v závěru vylučuje 1. 8. 2026, ačkoli zákonné přechodné období zahrnuje systémy uvedené na trh **před 2. 8. 2026**. Rozhoduje uvedení na trh, nikoli neurčité stáří systému.

**Zdroj:** `zdroje/omnibus-cs.txt:8`, vyhlášení 24. 7. 2026; `zdroje/omnibus-cs.txt:710`, vstup v platnost třetím dnem po vyhlášení; `zdroje/omnibus-cs.txt:566`, podmínka přechodného období. Dřívější vstup AI Actu v platnost potvrzuje `zdroje/omnibus-cs.txt:23`; obecnou použitelnost uvádí `zdroje/aiact-cs-vyber.txt:13`.

**Konkrétní nové znění k Omnibusu:**

> Nařízení (EU) 2026/1744 bylo vyhlášeno 24. 7. 2026 a vstoupilo v platnost 27. 7. 2026. Data použitelnosti jednotlivých novelizovaných povinností se liší.

**Konkrétní nové znění k termínu čl. 50:**

> Článek 50 se použije od 2. 8. 2026; poskytovatelé systémů vytvářejících syntetický obsah, které byly uvedeny na trh před 2. 8. 2026, mají splnit požadavky jeho odstavce 2 do 2. 12. 2026.

### 13. [WARNING] Výkladové pokyny jsou místy podány jako zdroj rozhodující o povinnosti

**Místo a citace:** `clanek.mdx:63`: „…rozhoduje znění pokynů, okolnosti a výklad dozorového orgánu.“ `clanek.mdx:27`: „Zda váš text pod tuto povinnost spadá, posoudí pokyny Komise a právník.“

**Problém:** Podmínky povinnosti stanoví nařízení. Stránka Komise představuje pokyny jako výklad rozsahu a praktického uplatnění povinností, ne jako náhradu právního textu. Autor navíc podle `research.md:14` nečetl finální PDF a konkrétní výklad role e-shopu nemá ověřen. Lze doložit, že pokyny role a výjimky rozebírají; nelze se na nečtený obsah odvolávat jako na provedené posouzení konkrétního případu. V obecném odkazu na existenci a témata pokynů v řádcích 60 a 76 samostatnou vadu nenacházím.

**Zdroj:** `zdroje/aiact-cs-vyber.txt:10`, podmínky čl. 50; `zdroje/ec-guide.txt:50`, `zdroje/ec-guide.txt:51` a `zdroje/ec-guide.txt:66`; omezení dokladu `research.md:14`.

**Konkrétní nové znění upozornění v řádku 63:**

> Povinnosti a výjimky stanoví AI Act. Pokyny Komise vysvětlují jejich rozsah a uplatnění. Zda konkrétní text nebo systém do působnosti pravidel spadá, vyžaduje posouzení okolností podle nařízení se zohledněním příslušného výkladu. Tento článek takové individuální právní posouzení neposkytuje.

**Konkrétní nové znění poslední věty FAQ v řádku 27:**

> Konkrétní případ je třeba posoudit podle nařízení a okolností zveřejnění se zohledněním pokynů Komise; individuální právní posouzení tento článek neposkytuje.

## Co je v pořádku

- **Základní rozdělení rolí v tabulce:** čl. 50 odst. 1 a 2 poskytovatel, odst. 3 a 4 zavádějící subjekt. Definice obou rolí v `clanek.mdx:58` odpovídají dodanému výňatku v rozsahu systémů AI; samotné používání hotového nástroje článek obecně nezaměňuje za poskytování systému. Problematický je až kategorický závěr v seznamu, viz nález 4.
- **Základní data:** použitelnost čl. 50 od 2. 8. 2026, vyhlášení Omnibusu 24. 7. 2026, vstup v platnost 27. 7. 2026, lhůta do 2. 12. 2026 pouze pro čl. 50 odst. 2 u vymezených starších systémů a data 2. 12. 2027 / 2. 8. 2028. V hlavním výkladu není odklad čl. 50 odst. 2 chybně rozšířen na všechny povinnosti transparentnosti.
- **Nové zákazy:** údaj v `clanek.mdx:70`, že se od 2. 12. 2026 použijí dva nové zákazy čl. 5, odpovídá `zdroje/omnibus-cs.txt:194` až `zdroje/omnibus-cs.txt:209` a `zdroje/omnibus-cs.txt:572`. Jde o nová písmena ba) a bb), společně s podmínkami v odstavcích 1a a 1b. Článek jejich věcný rozsah nepopisuje, proto mu nepřisuzuji nepřesnosti v jejich obsahu.
- **Kodex:** datum zveřejnění 10. 6. 2026 je výslovně doloženo v `zdroje/ec-faq-cop.txt:65`, nikoli jen datem aktualizace stránky. Dobrovolnost, rozdělení oddílů mezi čl. 50 odst. 2 a 4 i volitelná ikona ve třech variantách odpovídají `zdroje/ec-faq-cop.txt:49` až `zdroje/ec-faq-cop.txt:53`. Článek nepřisuzuje kodexu garanci splnění povinností.
- **Pokyny a síla dokladu:** existence a obecný obsah pokynů jsou doloženy stránkou Komise. Článek správně nevydává aktualizaci stránky 25. 11. 2026 za datum vydání pokynů a nepřebírá přesné datum z advokátního blogu jako primárně ověřené.
- **Rozhraní a měření:** vrstvy jsou v `research.md:12` a `research.md:13` prázdné. V auditovaném článku nejsou tvrzení o skutečně pozorovaném rozhraní cizí služby ani vlastní naměřená čísla. Popis volitelné ikony je popis dokumentace kodexu, nikoli tvrzení, co návštěvník konkrétní platformy uvidí na obrazovce. Blocker za záměnu dokumentace a pozorování UI zde nevzniká.
- **CTA, pouze kontrola blockeru:** produkt existuje v `zdroje/audit.ts`. Název, cena 3 600 Kč bez DPH, rozsah, seznam podle dopadu a náročnosti, výstup do pěti pracovních dní od úhrady a schůzka 30–60 minut odpovídají zejména řádkům 61, 83–99, 129, 307, 362 a 522. Blocker proti dodanému produktovému podkladu nenacházím. Marketingová tvrzení samotné produktové stránky tento audit neposuzuje.

## Co chybí v tabulce podmínek a co zůstává neověřené

Tabulka **existuje** v `research.md:29` až `research.md:37`, ale nezachycuje všechny rozhodné podmínky. Před další kontrolou doplnit:

| Řádek v researchi | Chybějící nebo nepřesná podmínka |
|---|---|
| 31 — interakce s AI | Celý test zřejmosti: informovanost, pozornost, obezřetnost, okolnosti a kontext. Přesné podmínky zákonné výjimky pro trestní řízení včetně záruk a návratu povinnosti u veřejného hlášení trestných činů. |
| 32 — strojové označování | Alternativní vztah standardní editace **nebo** nepodstatné změny vstupních údajů či sémantiky; výjimka pro použití povolené zákonem pro vymezené trestní účely; označení i zjistitelnost umělého vytvoření/manipulace; technická proveditelnost a další hlediska technických řešení. Přechodná lhůta je časový režim, nikoli trvalá věcná výjimka. |
| 33 — emoce a biometrie | Přesný rozsah zákonem umožněného odhalování, prevence a vyšetřování, záruky práv třetích stran a soulad s právem Unie. U osobních údajů neuvádět jen GDPR: odstavec podle potřeby odkazuje i na nařízení 2018/1725 a směrnici 2016/680. |
| 34 — deepfake | Výjimka pro zákonem povolené trestní účely; vytváření i manipulace; plná definice včetně podobnosti subjektům a zdání autenticity **nebo pravdivosti**. Úplný výčet tvůrčích režimů a programů, zachování zveřejnění informace a podmínka nebránit zobrazení nebo užívání díla. |
| 35 — text | Výslovně zahrnout text manipulovaný AI a přesně rozepsat zákonem povolené trestní účely. Kombinace lidského přezkumu/redakční kontroly **a** redakční odpovědnosti je zde už správně a musí se zachovat v článku. |
| Nový řádek — odklad kapitoly III | Oddíly 1–3, výjimka čl. 6 odst. 5, vazba klasifikace na čl. 6 odst. 1 nebo 2 a přílohy; přechodný režim čl. 111 odst. 2. Zdroj: `zdroje/omnibus-cs.txt:562` a řádky 576–580. |
| Nový řádek — dozor a DSA | Vazba čl. 75 odst. 1 písm. b) na označené VLOP/VLOSE nebo integrované systémy; odlišení poskytovatele a zavádějícího subjektu v témže podniku. Zdroj: `zdroje/omnibus-cs.txt:384` až řádek 397. |
| Nový řádek — nové zákazy | Pro samotný údaj o datu stačí odkaz na čl. 113. Pokud se doplní vysvětlení zákazů, zachytit písmena ba), bb) **společně** s podmínkami odst. 1a a 1b; nepopsat je jako zákaz všech generátorů příslušného obsahu. Zdroj: `zdroje/omnibus-cs.txt:194` až řádek 209 a řádek 572. |

**Meze podkladů:** K dispozici není finální PDF pokynů ani aktuální primární doklad českého legislativního stavu k 26. 11. 2026. Nelze proto potvrdit konkrétní výklad pro e-shop s cizím chatbotem ani aktuální stav adaptačního zákona; nelze z toho dovozovat ani opačný závěr. Obecný popis témat pokynů lze doložit stránkou Komise. `zdroje/ec-faq-gl.txt:86` nese aktualizaci 26. 9. 2025 a popisuje přípravu pokynů a kodexu; není dokladem jejich finálního stavu v listopadu 2026. Také FAQ kodexu obsahuje starší formulace o budoucím vydání pokynů a v řádku 64 nevymezuje přechodné období tak přesně jako nový čl. 111 odst. 4; pro rozsah odkladu je rozhodný primární právní text. Není důvod přebírat širší formulaci FAQ proti němu.

Pro opravy výše postačují konkrétní dodané primární pasáže; není potřeba vymýšlet statistiku, číslo předpisu ani nedoložené datum. Zbývající nejistoty má článek přiznat v navrženém rozsahu. Jazyk, SEO, citovatelnost a ostatní části CTA náležejí druhému kolu.
