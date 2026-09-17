# Jazykový audit C3: Srovnání s konkurencí v AI

**Auditovaný soubor:** `src/content/articles/srovnani-s-konkurenci-v-ai.mdx`
**Referenční dokument:** `marketing/05-messaging-a-tonalita.md`
**Datum auditu:** 17. 9. 2026
**Zásah do článku:** žádný

## Verdikt

Článek je věcný, užitečný a v hlavní argumentaci velmi dobře hlídá overclaim. Důsledně odděluje opravu faktu od změny doporučení, upozorňuje na omezení malého počtu testů a neslibuje pořadí v AI odpovědích. Oslovení čtenáře je téměř všude konzistentní a prodejní závěr je střízlivý.

Před publikací doporučuji jazykovou korekturu. Text obsahuje dvě nesporné mluvnické chyby („model dokáže vybavit“, „za stejné metody“), jednu chybnou vazbu („kam věnovat čas“), několik kalků z angličtiny a technickou větu o podmínkách Googlu, která odporuje požadavku brand voice vysvětlovat „indexaci“ běžnou češtinou. Další nálezy jsou hlavně otázkou přesnosti referentů a přirozené češtiny, nikoli změny argumentace.

## Metoda

- Přečten byl celý článek včetně frontmatteru, FAQ, tabulek, checklistů a CTA.
- Přečten byl celý dokument `marketing/05-messaging-a-tonalita.md`.
- Slovník `blogger/JAZYK_SLOVNIK.md` nebyl čten celý. Byl pouze cíleně prohledán podle podezřelých výrazů a vazeb: `indexace`, `první/třetí strana`, `běh`, `přepsání dotazu`, `volání přes API`, `obsahové mezery`, `detail nabídky`, `testovaná sada`, `primárně za účelem` a několika dalších přesných spojení.
- Cílené hledání neodhalilo existující pravidlo pro níže popsané kalky. „Běh“ se ve slovníku objevuje jako doporučená náhrada v jiném kontextu, není tedy zakázaný; zde jde o srozumitelnost a terminologickou jednotnost článku.
- Mechanický checker nebyl spuštěn, protože by načetl celý slovník a porušil zadání tohoto auditu.

## Nálezy k opravě před publikací

### 1. Answer zaměňuje srovnání za doporučení a střídá perspektivu

> „Srovnání s konkurencí v AI je doporučení vytvořené pro konkrétní dotaz a podmínky. Firma může ověřit uvedená fakta, opravit vlastní údaje a doložit rozdíly, které zákazník řeší. Výsledek závisí také na platformě, zdrojích a kontextu uživatele. Jedna odpověď neprokazuje trvalé pořadí ani účinek změny webu; před rozhodnutím potřebujete opakované srovnatelné testy.“

**Problém:** Srovnání není samo o sobě doporučení, ale může být jeho součástí nebo výsledkem odpovědi. Od obecné „firmy“ text v poslední větě přechází k přímému „potřebujete“. Vazba „rozdíly, které zákazník řeší“ je vágní a nepřirozená.

**Návrh:** „Výsledek srovnání s konkurencí v AI vzniká pro konkrétní dotaz a podmínky. Můžete ověřit uvedená fakta, opravit vlastní údaje a doložit rozdíly, podle kterých se zákazník rozhoduje. Výsledek závisí také na platformě, použitých zdrojích a situaci uživatele. Jedna odpověď neprokazuje trvalé pořadí ani účinek změny webu; před rozhodnutím potřebujete opakované srovnatelné testy.“

### 2. „Doložit chybnou cenu“ vyjadřuje jiný krok, než text zamýšlí

> „Chybnou cenu můžete doložit a opravit.“

**Problém:** Věta říká, že čtenář doloží chybnou cenu. Smyslem je doložit cenu správnou a opravit chybný údaj.

**Návrh:** „Správnou cenu můžete doložit a chybný údaj opravit.“

### 3. Technická věta je těžko srozumitelná a používá zakázanou „indexaci“ bez vysvětlení

> „K tomu, aby se stránka mohla zobrazit v AI funkcích Vyhledávání, potřebuje **indexaci, způsobilost k úryvku a zahrnutí webu v nastavení Search generative AI v Search Console**.“

**Problém:** Výčet kombinuje tři různé mluvnické konstrukce. „Způsobilost k úryvku“ je překladový kalk a bez znalosti dokumentace není srozumitelná. Brand voice výslovně žádá nahradit nevysvětlenou „indexaci“ popisem „zařazení stránky do výsledků vyhledávání“.

**Návrh:** „Stránka se v AI funkcích Vyhledávání může zobrazit jen tehdy, když ji Google zařadil do indexu, smí z ní zobrazit úryvek a web je zahrnutý v nastavení Search generative AI v Search Console.“ Pokud má nastavení oficiální český název, použít ten.

### 4. Chybí zvratné zájmeno

> „Ty mohou ověřit, zda ji model vůbec dokáže vybavit…“

**Problém:** Sloveso ve významu „vzpomenout si“ vyžaduje zvratné zájmeno. Současná věta je mluvnicky chybná.

**Návrh:** „Ty mohou ověřit, zda si model značku vůbec vybaví…“

### 5. Chybná pádová vazba

> „Za stejné metody roste četnost výskytů.“

**Problém:** „Za stejné metody“ v tomto významu není správná česká vazba.

**Návrh:** „Při použití stejné metody roste četnost výskytů.“ Ještě konkrétnější varianta: „Při stejném postupu se značka objevuje častěji.“

### 6. Chybná vazba slovesa „věnovat“

> „Pro rozhodnutí, kam věnovat čas, je to použitelnější…“

**Problém:** Čas věnujeme **něčemu**, nikoli „kam“.

**Návrh:** „Pro rozhodnutí, čemu věnovat čas, je to použitelnější…“

## Doporučené úpravy přirozenosti a srozumitelnosti

### 7. „Včas“ v titulku vytváří neurčitou naléhavost

> „Srovnání s konkurencí v AI: co ověřit a co změnit včas“

**Problém:** Článek žádnou lhůtu ani okamžik, po kterém je pozdě, neurčuje. „Včas“ proto působí jako marketingová naléhavost bez opory a neodpovídá věcnému hlasu A.

**Návrh:** „Srovnání s konkurencí v AI: co ověřit a co změnit“ nebo konkrétněji „Srovnání s konkurencí v AI: jak ověřit výsledek a co změnit na webu“.

### 8. Opravená cena je z definice správná

> „Opravená cena může být správná, přestože AI dál doporučuje jinou nabídku.“

**Problém:** Spojení „opravená cena může být správná“ je tautologické a zároveň naznačuje, že opravená cena může zůstat chybná. Z kontextu plyne, že se změnil údaj v odpovědi AI.

**Návrh:** „AI už může uvádět správnou cenu, přestože dál doporučuje jinou nabídku.“

### 9. Nejasné zájmeno na začátku odpovědi FAQ

> „To určujte podle označení konkrétní plochy.“

**Problém:** „To“ odkazuje na celou otázku a nutí čtenáře rekonstruovat, co má určovat. Rozkaz „určujte“ navíc působí úředně.

**Návrh:** „Sponzorovaný výsledek poznáte podle označení konkrétní plochy.“

### 10. Nejednoznačné „jiné doporučení“

> „Odlišné požadavky zákazníka mohou vysvětlit jiné doporučení.“

**Problém:** Není jasné, vůči čemu je doporučení „jiné“. V předchozí větě není popsáno žádné výchozí doporučení.

**Návrh:** „Odlišné požadavky zákazníků mohou vést k rozdílným doporučením.“

### 11. „Ověřit sklad“ není přesné

> „Ověřte přesnou variantu výrobku, sklad, čas objednávky a podmínky dopravy.“

**Problém:** Ověřuje se skladová dostupnost nebo počet kusů, ne „sklad“ jako místo.

**Návrh:** „Ověřte přesnou variantu výrobku, skladovou dostupnost, čas objednávky a podmínky dopravy.“

### 12. Konkurent sám „nevyhovuje rozpočtu“

> „Konkurent vyhovuje nižšímu rozpočtu.“

**Problém:** Význam se dá odhadnout, ale vazba je zkratkovitá: rozpočtu vyhovuje nabídka nebo cena, ne firma jako taková.

**Návrh:** „Konkurent nabízí variantu, která se vejde do nižšího rozpočtu.“

### 13. Infinitivní pokyn porušuje jednotné vykání

> „Jaké konkrétní důkazy by hodnocení podpořily; bez nich ho nepřebírat jako fakt.“

**Problém:** Okolní pokyny čtenáři vykají. Infinitiv „nepřebírat“ mezi nimi působí jako interní poznámka nebo úřední pokyn.

**Návrh:** „Jaké konkrétní důkazy by hodnocení podpořily; bez nich ho nepřebírejte jako fakt.“

### 14. Dvakrát chybí výslovný předmět úvahy

> „‚Firma je horší‘ potřebuje nejdřív definovat, v čem a pro koho. Přepsat vlastní web tak, aby všude hlásal prvenství, tento rozdíl neřeší.“

**Problém:** Tvrzení samo nic „nepotřebuje“; definovat je musí autor nebo čtenář. „Tento rozdíl“ nemá jednoznačný jmenný referent, protože předchozí věty rozdíl výslovně nepojmenovaly.

**Návrh:** „U tvrzení ‚Firma je horší‘ nejdřív určete, v čem a pro koho je horší. Přepsání webu tak, aby všude hlásal prvenství, nevyřeší rozdíl mezi ověřitelným údajem a obecným soudem.“

### 15. Nepřirozené spojení „staví srovnání z recenzí“

> „Tvrzení, že AI staví srovnání hlavně z recenzí…“

**Problém:** Jde o kalk z anglického „builds a comparison“. Česky se srovnání zakládá na podkladech nebo sestavuje z podkladů.

**Návrh:** „Tvrzení, že AI zakládá srovnání hlavně na recenzích…“

### 16. Anglický slovosled a nepřeložený oborový žargon

> „U nákupních výsledků ChatGPT dokumentace zmiňuje produktová data od první i třetí strany a další obsah.“

**Problém:** „ChatGPT dokumentace“ kopíruje anglické řazení přívlastku. „Data od první a třetí strany“ jsou doslovný překlad `first-party/third-party data`, který běžnému čtenáři nevysvětlí, kdo data poskytuje.

**Návrh:** „Dokumentace ChatGPT u nákupních výsledků zmiňuje produktová data od obchodníka, data od dalších poskytovatelů a další obsah.“

### 17. Chybí předložka „od“

> „…může pracovat s veřejnými produktovými informacemi a údaji zapojených obchodníků.“

**Problém:** Genitiv „údaji obchodníků“ může znamenat údaje o obchodnících i údaje, které jim patří. Zde jde o data poskytnutá obchodníky.

**Návrh:** „…může pracovat s veřejnými produktovými informacemi a údaji od zapojených obchodníků.“

### 18. Neopravuje se nabídka a „doporučený vítěz“ je nadbytečné spojení

> „Oprava vlastní nabídky tak má konkrétní smysl, i když nemáte důkaz, že změní doporučeného vítěze.“

**Problém:** Podle předchozí věty se opravují chyby v ceně a dostupnosti, tedy údaje o nabídce. „Doporučený vítěz“ zdvojuje stejný význam a zní jako překlad metriky ze studie.

**Návrh:** „Opravit údaje o vlastní nabídce proto dává smysl, i když nemáte důkaz, že to změní doporučení.“

### 19. Seznam „neoznámil inzeráty“

> „Seznam v červnu 2026 oznámil inzeráty pod odpověďmi Asistenta…“

**Problém:** Sloveso „oznámit“ se přirozeně pojí s informací nebo vedlejší větou, ne přímo s „inzeráty“.

**Návrh:** „Seznam v červnu 2026 oznámil, že pod odpověďmi Asistenta začne zobrazovat inzeráty označené jako **Sponzorované výsledky**.“ Pokud byly v tu dobu už spuštěné: „Seznam v červnu 2026 představil inzeráty…“

### 20. Nadpis používá nepřirozené „držte podmínky“ a nejasný „test konkurence“

> „Pro test konkurence držte podmínky — jméno v dotazu mění otázku“

**Problém:** „Držet podmínky“ je kalk; česky podmínky zachováváme nebo udržujeme stejné. „Test konkurence“ může znamenat test prováděný konkurencí i test konkurenta.

**Návrh:** „Při srovnání s konkurencí zachovejte stejné podmínky — jméno v dotazu mění otázku.“ Zachovat stávající HTML prvky `<span class="hl">` a `<strong>`.

### 21. Dotaz nic „nedodal“ a „spontánní objevení“ je metrický kalk

> „Dotaz ‚porovnej obchod A a obchod B‘ už obě jména dodal. Druhý může odhalit chybné informace o firmě, ale jeho výsledek nesmí být započítaný jako spontánní objevení značky.“

**Problém:** Dotaz jména obsahuje; sloveso „dodal“ mu přisuzuje jednání. „Spontánní objevení značky“ je doslovný překlad odborné metriky a bez vysvětlení zní nepřirozeně. Pasivum „nesmí být započítaný“ větu dále zatěžuje.

**Návrh:** „Dotaz ‚porovnej obchod A a obchod B‘ už obsahuje obě jména. Může odhalit chybné informace o firmě, ale nemůžete ho počítat jako případ, kdy AI značku nabídla bez nápovědy.“

### 22. „Volání přes API“ je kalk a API není vysvětlené

> „Používala samostatná volání přes API bez webového vyhledávání.“

**Problém:** „Volání“ je doslovný překlad `API calls`. Pro netechnické publikum navíc zkratka API zůstává bez vysvětlení, ačkoli právě tato věta popisuje důležité omezení studie.

**Návrh:** „Modelům zadávala jednotlivé dotazy přes programové rozhraní (API), bez webového vyhledávání.“

### 23. Neparalelní kategorie a kostrbatá vazba „souvislost doporučení se zájmem“

> „Autoři rozlišují běžné požadavky od diagnostických dotazů… Souvislost doporučení se zájmem ve vyhledávání a internetovými diskusemi je v práci pozorovaná…“

**Problém:** „Požadavky“ a „dotazy“ jsou zde dvě označení stejné jednotky, což zbytečně sugeruje rozdíl. Druhá věta je kalk z anglického `association of recommendations with search interest`; v češtině je přirozená vazba „souvislost mezi“.

**Návrh:** „Autoři rozlišují běžné dotazy od diagnostických dotazů… Práce pozoruje souvislost mezi doporučením značky, zájmem ve vyhledávání a internetovými diskusemi, nedokládá však příčinný vztah.“

### 24. „Běh“ není v článku zavedený a evidence je popsána nejasně

> „Co uložit pro každý běh“

> „Počet výskytů zapisujte s počtem provedených běhů.“

**Problém:** „Běh“ je v technickém měření použitelný termín, ale článek do této chvíle mluví o testech a opakováních. Druhá věta neříká, jak mají být dvě čísla zapsána, a čtenář z ní nemusí pochopit jmenovatel.

**Návrh:** Nadpis „Co uložit pro každý test“ a věta „Uveďte, v kolika z kolika testů se značka objevila.“

### 25. „Přepsání dotazu“ je kalk a podmínky se nedrží

> „…paměť může ovlivnit přepsání dotazu a lokalita vyhledávání. Tyto podmínky proto zaznamenejte a držte stejné při opakování.“

**Problém:** „Přepsání dotazu“ mechanicky překládá `query rewriting`. „Paměť může ovlivnit lokalita“ není zamýšlené čtení, ale souřadné spojení dvou různých vlivů je syntakticky těžké. Opakuje se nepřirozená vazba „držet podmínky“.

**Návrh:** „Dokumentace uvádí, že paměť může ovlivnit, jak ChatGPT dotaz pro vyhledávání přeformuluje; výsledek může ovlivnit také poloha použitá při vyhledávání. Tyto podmínky zaznamenejte a při opakování je zachovejte stejné.“

### 26. „Orientační záznam“ neříká konkrétně, co malá série dovoluje tvrdit

> „Malá série poskytne orientační záznam pro další kontrolu, nikoli přesný podíl doporučení mezi všemi zákazníky.“

**Problém:** „Orientační záznam pro další kontrolu“ je vágní nominalizace. Článek jinak přesně rozlišuje, co data znamenají a co ne.

**Návrh:** „Malý počet opakování popíše jen výsledky této konkrétní série; neurčí podíl doporučení mezi všemi zákazníky.“

### 27. „Detail nabídky“ je interní e-commerce zkratka

> „Zkontrolujte, zda údaje souhlasí na detailu nabídky…“

**Problém:** „Detail“ jako samostatné označení stránky je oborová zkratka. V edukativním textu pro firmy je přirozenější pojmenovat stránku.

**Návrh:** „Zkontrolujte, zda údaje souhlasí na stránce s detailem nabídky…“ U produktu lze použít „na produktové stránce“.

### 28. „Přiznané meze“ působí překladově

> „Přiznané meze“

**Problém:** Česky se meze či omezení spíš uvádějí nebo otevřeně popisují. „Přiznané meze“ zní jako doslovný překlad `acknowledged limitations`.

**Návrh:** „Meze srovnání“ nebo konkrétněji „Co srovnání neříká“.

### 29. Dvě kostrbaté věty o opravě cizího zdroje

> „U cizího zdroje doložte přesné chybné tvrzení a aktuální podklad. Opravu si řeší jeho vydavatel…“

**Problém:** „U cizího zdroje“ nevyjadřuje jasně podmínku, že jste v něm našli chybu. „Opravu si řeší“ je hovorová, lehce odbytná vazba a není jasné, zda vydavatel opravu provede, nebo o ní rozhodne.

**Návrh:** „Pokud chybu najdete v cizím zdroji, doložte přesné tvrzení a aktuální podklad. O případné opravě rozhoduje vydavatel zdroje; vaše obchodní hodnocení převzít nemusí.“

### 30. Byrokratická nominalizace a chybná vazba „manipulace pořadí“

> „…vytváření stránek pro varianty dotazů primárně za účelem manipulace pořadí nebo generativních odpovědí…“

**Problém:** „Primárně za účelem“ je těžkopádné. V češtině se manipuluje **s pořadím**, nikoli „pořadí“ bez předložky. Stejnou vazbu je vhodné použít i u generativních odpovědí.

**Návrh:** „Google navíc výslovně uvádí, že stránky vytvářené hlavně kvůli manipulaci s pořadím nebo generativními odpověďmi porušují zásady proti hromadnému vytváření obsahu.“

### 31. „Testovaná sada“ je neurčitá

> „Pozorujete změnu v testované sadě…“

**Problém:** Není řečeno, zda jde o sadu dotazů, odpovědí, značek nebo opakování. V témže řádku tabulky lze použít výraz, který článek už vysvětlil.

**Návrh:** „V této sérii testů pozorujete změnu; samotné srovnání před a po neurčuje příčinu.“

### 32. Nepřirozená vazba „původ z AI“

> „…objednávky či poptávky, u kterých původ z AI skutečně doložíte.“

**Problém:** „Původ z AI“ je substantivní zkratka. Není jasné, zda AI objednávku vytvořila, doporučila značku, nebo přivedla návštěvníka.

**Návrh:** „…objednávky či poptávky, u nichž dokážete doložit, že zákazníka přivedl AI nástroj.“

### 33. „Obsahové mezery vůči konkurenci“ jsou interní marketingový žargon

> „…zahrnuje kontrolu technické dostupnosti, obsahových mezer vůči konkurenci a návrh úprav podle priority.“

**Problém:** `Content gap` je zavedený výraz mezi SEO specialisty, ale „obsahová mezera vůči konkurenci“ není pro běžného zákazníka konkrétní. CTA má říct, co audit skutečně najde.

**Návrh:** „…zahrnuje kontrolu technické dostupnosti, míst, kde vám ve srovnání s konkurencí chybí potřebný obsah, a návrh úprav seřazený podle priority.“

## Co je v pořádku a neměnit bez dalšího důvodu

- **Vykání:** Kromě infinitivního „nepřebírat“ je přímé oslovení jednotné. Střídání s obecnými popisy funkcí a studií je přirozené.
- **Overclaim:** Text nikde neslibuje změnu pořadí ani kauzalitu po úpravě webu. Formulace „může“, „neprokazuje“, „nemáte důkaz“ a „pozorovaná, nikoli doložená jako příčina“ odpovídají požadované opatrnosti.
- **Prodejní CTA:** Cena, rozsah i omezení jsou konkrétní; věta „bez záruky konkrétního pořadí“ dobře uzavírá očekávání. Upravit doporučuji jen „obsahové mezery“.
- **Termíny:** Názvy produktů, rozhraní, studie a oficiální označení „Sponzorované výsledky“ je správné ponechat. Anglický název studie není jazyková vada.
- **Tón:** Převládá edukativní hlas A. Text nevytváří strach, netlačí na okamžitý nákup a místo obecných slibů používá konkrétní příklady.

## Doporučené pořadí opravy

1. Opravit body 1–6; obsahují významovou nebo mluvnickou chybu a technickou větu v rozporu s brand voice.
2. Opravit body 15–25; jde o nejviditelnější kalky z angličtiny a terminologické přepínání.
3. Projít zbylé body při jedné redakční korektuře; nemění argumentaci, pouze zpřesňují češtinu a referenty.
4. Po zásahu znovu zkontrolovat frontmatterové uvozovky a spustit projektový build, protože některé návrhy zasahují text uvnitř JSX atributů komponent.
