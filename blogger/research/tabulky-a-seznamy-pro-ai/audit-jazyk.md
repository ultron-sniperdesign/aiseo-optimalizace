# Jazykový audit: Tabulky a seznamy pro AI

Auditovaný soubor: `src/content/articles/tabulky-a-seznamy-pro-ai.mdx`
Referenční tonalita: `marketing/05-messaging-a-tonalita.md`
Datum auditu: 26. září 2026

## Verdikt

**OPRAVIT PŘED PUBLIKACÍ.**

Článek jako celek odpovídá edukativnímu hlasu značky: je věcný, praktický, nestraší a opakovaně správně odděluje lepší zpracování obsahu od nedoloženého slibu lepších pozic či citací. Závěrečné produktové doporučení je konkrétní a nepřebíjí odbornou část. Nenašel jsem velkohubé tvrzení ani typografickou chybu, která by bránila publikaci.

Před publikací je však potřeba opravit několik významových a syntaktických vad. Ve FAQ se kvůli chybnému podmětu tvrdí, že se „vztahy“ přizpůsobují obrazovkám. Nadpis připisuje dokazování samotné AI místo výzkumu. Pasáž o studiích obsahuje několik kalků z anglického odborného stylu a místy se čte jako strojový překlad. Další obraty jsou srozumitelné až po domyšlení, například „jiné podstatné pořadí“, „tabulka má stát sama“ nebo „jediná kopie informace“.

Slovník byl podle zadání prohledán jen cíleně. Výraz `benchmark` je v něm výslovně veden jako zavedený oborový termín na úrovni ✅, proto jej neoznačuji za chybu. Tvary `proskenovat`, `skenování` a `skenuje` ve slovníku zachycené nejsou; v tomto článku ale tvoří zbytečnou anglickou stopu a mají přirozené české náhrady.

## Zásadní nálezy

### 1. Nepřirozené „jiné podstatné pořadí“ ve stručné odpovědi i úvodu (ř. 5 a 48)

> „Tabulka se hodí pro porovnání více položek podle stejných vlastností, odrážky pro rovnocenný výčet a číslovaný seznam pro kroky nebo jiné podstatné pořadí.“

**Problém:** „Podstatné pořadí“ není přirozené české spojení a zájmeno „jiné“ nemá jasný protějšek. Pointou je, že změna pořadí mění význam. Protože věta stojí ve frontmatteru i v hlavním textu, kostrbatost se opakuje na dvou nejviditelnějších místech.

**Konkrétní přeformulování:** „Tabulka se hodí pro porovnání více položek podle stejných vlastností, odrážky pro rovnocenný výčet a číslovaný seznam pro kroky nebo jiný výčet, u něhož záleží na pořadí.“

### 2. Struktura nepomáhá lidem „zachovat vztahy“ (ř. 5 a 48)

> „Správná struktura pomáhá lidem i strojům zachovat vztahy mezi údaji, ale sama nezaručuje citaci v AI.“

**Problém:** Věta obrací významové role. Vztahy mezi údaji zachovává struktura; lidem a strojům pomáhá tyto vztahy pochopit. Současná formulace zní mechanicky a nutí čtenáře domyslet správný vztah mezi podmětem a předmětem.

**Konkrétní přeformulování:** „Správná struktura zachovává vztahy mezi údaji a pomáhá je pochopit lidem i strojům, sama však nezaručuje citaci v odpovědi AI.“

### 3. Ve FAQ se obrazovkám přizpůsobují „vztahy“, ne obrázek (ř. 34)

> „V obrázku nejsou vztahy mezi hlavičkami a buňkami běžně dostupné jako HTML a hůř se přizpůsobují menším obrazovkám i pomocným technologiím.“

**Problém:** Gramatickým podmětem druhé části jsou „vztahy“, takže věta tvrdí, že se vztahy hůře přizpůsobují obrazovkám a pomocným technologiím. Zamýšleným podmětem je obrázek tabulky. Spojení „přizpůsobovat se pomocným technologiím“ je navíc významově nepřesné; jde o dostupnost obsahu pro jejich uživatele.

**Konkrétní přeformulování:** „V obrázku nejsou vztahy mezi hlavičkami a buňkami dostupné jako v HTML. Obrázek tabulky se navíc hůře přizpůsobuje menším obrazovkám a jeho obsah je hůře dostupný uživatelům pomocných technologií.“

### 4. Kalk „tabulka má stát sama“ (ř. 79)

> „Tabulka má stát sama i ve chvíli, kdy čtenář přeskočí odstavec před ní.“

**Problém:** Jde o doslovný kalk z anglického *stand on its own*. Česky se přirozeně říká, že má být něco srozumitelné samo o sobě.

**Konkrétní přeformulování:** „Tabulka má být srozumitelná sama o sobě, i když čtenář přeskočí odstavec před ní.“

### 5. Ceny „neplatí měsíčně“ (ř. 79)

> „Věta ‚Srovnání tarifů‘ je slabá, pokud není jasné, zda ceny zahrnují DPH, platí měsíčně, nebo za celý rok.“

**Problém:** Sloveso „platit“ zde nevyjadřuje měsíční či roční účtování. Navíc vzniká nečistá řada: první část řeší DPH, další dvě délku období.

**Konkrétní přeformulování:** „Věta ‚Srovnání tarifů‘ je slabá, pokud není jasné, zda ceny zahrnují DPH a zda jde o měsíční, nebo roční částky.“

### 6. Nepřesné pojmenování W3C jako iniciativy (ř. 92)

> „Světová iniciativa pro přístupnost webu W3C doporučuje používat tabulky pro data s logickými vztahy v mřížce.“

**Problém:** W3C je konsorcium, nikoli „Světová iniciativa pro přístupnost webu“. Web Accessibility Initiative je jeho iniciativa označovaná zkratkou WAI. Současná věta míchá název organizace a její iniciativy a zároveň působí jako nepřirozený překlad anglického názvu.

**Konkrétní přeformulování:** „Iniciativa konsorcia W3C pro přístupnost webu (WAI) doporučuje používat tabulky pro data s logickými vztahy v mřížce.“

### 7. Nadpis připisuje dokazování samotné AI (ř. 162)

> „Co AI skutečně dokládá — struktura není záruka citace“

**Problém:** Podle gramatické stavby něco dokládá AI. Následující část však shrnuje, co dokládají výzkumné studie o práci modelů s tabulkami. Nadpis proto mění původce důkazu a je významově nejednoznačný.

**Konkrétní přeformulování:** „Co výzkum skutečně dokládá — struktura není záruka citace.“ V MDX zachovat povinné formátování například jako `## Co <span class="hl">výzkum skutečně dokládá</span> — <strong>struktura není záruka citace</strong>`.

### 8. Odstavec o studiích kopíruje anglickou větnou stavbu (ř. 164)

> „Studie *Table Meets LLM* porovnávala několik textových zápisů tabulek u GPT‑3.5 a GPT‑4. V jejím nastavení vyšel nejlépe HTML zápis doplněný vysvětlením formátu a ukázkou. Novější benchmark TabVerse držel obsah stejný napříč HTML, Markdownem, LaTeXem a obrazem; strukturovaný text obecně překonal vykreslené obrázky, ale rozdíl závisel na modelu a úloze.“

**Problém:** Vazba „u GPT“ je neurčitá, „vyšel nejlépe HTML zápis“ má nepřirozený slovosled a spojení „držel obsah stejný napříč“ i „text překonal obrázky“ doslova kopírují anglický odborný styl. Není jasné, zda se porovnával formát, model, nebo přesnost odpovědí.

**Konkrétní přeformulování:** „Studie *Table Meets LLM* porovnávala několik textových zápisů tabulek při práci s modely GPT‑3.5 a GPT‑4. V daném nastavení si nejlépe vedl zápis v HTML doplněný vysvětlením formátu a ukázkou. Novější benchmark TabVerse použil stejné tabulky ve formátech HTML, Markdown, LaTeX a jako obrázky. Modely si obecně vedly lépe se strukturovaným textem než s obrázky, výsledek se však lišil podle modelu a úlohy.“

### 9. „Odpovědi nad tabulkami“ a „výsledek podporuje text“ (ř. 172)

> „TabVerse měří odpovědi nad stejnými tabulkami v různých formátech. Nezkoumá pořadí webů ve vyhledávání ani četnost citací. Výsledek proto podporuje sémantický text místo obrázku tabulky, ale nepodporuje slib, že HTML tabulka přinese lepší pozici nebo citaci.“

**Problém:** „Odpovědi nad tabulkami“ je technický kalk a neříká, co se skutečně měří. Také „výsledek podporuje text“ je neobratná vazba. Zájmeno „výsledek“ v jednotném čísle navíc zastírá, že jde o výsledky více úloh a modelů.

**Konkrétní přeformulování:** „TabVerse měří přesnost odpovědí na otázky ke stejným tabulkám v různých formátech. Nezkoumá pořadí webů ve vyhledávání ani četnost citací. Výsledky proto mluví ve prospěch textového zápisu se zachovanou strukturou oproti obrázku tabulky; nedokládají však, že HTML tabulka přinese lepší pozici nebo častější citaci.“

### 10. „Jediná kopie informace“ je doslovný kalk (ř. 202)

> „Barva, ikona ani tučné písmo nemají nést jedinou kopii informace.“

**Problém:** Čeština o významu jako o „jediné kopii informace“ běžně nemluví. Obrat připomíná doslovný překlad technického pravidla a zbytečně komplikuje jednoduchou zásadu.

**Konkrétní přeformulování:** „Důležitá informace nesmí být vyjádřena pouze barvou, ikonou nebo tučným písmem.“

## Drobnější nálezy

### 11. „Rovnocenné znaky“ nejsou v kontextu jednoznačné (ř. 54)

> „Potřebuje člověk porovnat ceny ve stejném měsíci, projít kroky v daném pořadí, nebo jen rychle přečíst několik rovnocenných znaků?“

**Problém:** „Znak“ může znamenat písmeno, symbol i charakteristickou vlastnost. V odstavci o odrážkách se myslí rovnocenné body či vlastnosti.

**Konkrétní přeformulování:** „Potřebuje člověk porovnat ceny za stejné období, projít kroky v daném pořadí, nebo jen rychle přečíst několik rovnocenných bodů?“

### 12. Opakované anglické „skenování“ textu (ř. 63, 158 a 199)

> „Proskenovat výhody, podmínky nebo kontrolní otázky“
>
> „Takový bod zůstane srozumitelný i při rychlém skenování.“
>
> „Směs názvů, příkazů a dlouhých odstavců se špatně skenuje.“

**Problém:** Všechny tři tvary přebírají anglické *scan* ve významu rychlého čtení. Český text má přesnější a přirozené náhrady; opakování navíc vytváří nápadnou anglickou stopu v jinak civilním výkladu.

**Konkrétní přeformulování:** „Rychle projít výhody, podmínky nebo kontrolní otázky“; „Takový bod zůstane srozumitelný i při rychlém pročtení“; „Směs názvů, příkazů a dlouhých odstavců se špatně prochází.“

### 13. „Nejrychlejší test je převod“ neříká, co se převádí (ř. 69)

> „Nejrychlejší test je převod.“

**Problém:** „Převod“ zůstává bez předmětu i cíle. Jeho význam čtenář pochopí až z následujících otázek.

**Konkrétní přeformulování:** „Nejrychlejší je zkusit obsah převést do jiného formátu.“

### 14. Postup ani priorita se „nerozbijí“ (ř. 131)

> „Jestli by se postup nebo priorita rozbily, jde o číslovaný seznam.“

**Problém:** Sloveso „rozbít“ zde působí jako technický kalk a není jasné, co znamená „rozbitá priorita“. Smyslem je změna významu po prohození položek.

**Konkrétní přeformulování:** „Jestli by prohození položek narušilo postup nebo změnilo pořadí priorit, jde o číslovaný seznam.“

### 15. Nejasná „hranice“ a nepřirozené „připouští“ (ř. 175)

> „Pro Google je hranice ještě jasnější. Jeho průvodce optimalizací pro generativní funkce doporučuje přehledné odstavce, sekce a nadpisy a připouští sémantické HTML jako dobrou praxi pro lidi a pomocné technologie. Současně uvádí, že není potřeba zvláštní AI značení…“

**Problém:** Není řečeno, o jakou hranici jde. Sloveso „připouští“ naznačuje zdráhavé svolení, přestože se popisuje doporučená praxe. „AI značení“ je zkratkovitý hybrid a může znamenat značku vytvořenou AI i značení určené pro AI.

**Konkrétní přeformulování:** „V doporučení Googlu je závěr ještě jasnější. Jeho průvodce optimalizací pro generativní funkce doporučuje přehledné odstavce, sekce a nadpisy a uvádí sémantické HTML jako dobrou praxi pro lidi i pomocné technologie. Současně říká, že není potřeba zvláštní značení určené pro AI, Markdown ani přepisování obsahu do speciálního formátu.“

### 16. „Hodnoticí trik“ a „odpovídání nad tabulkou“ (ř. 178)

> „Tabulka, odrážky ani číslované kroky nejsou hodnoticí trik. […] Pokud někdo slibuje opak, měl by ukázat měření pořadí nebo citací, ne jen test odpovídání modelu nad vloženou tabulkou.“

**Problém:** „Hodnoticí trik“ je vágní a „odpovídání modelu nad tabulkou“ znovu kopíruje anglickou technickou vazbu. Čtenář má domýšlet, že jde o zlepšení hodnocení stránky a o otázky položené k předložené tabulce.

**Konkrétní přeformulování:** „Tabulka, odrážky ani číslované kroky nejsou prostředkem k lepšímu hodnocení stránky. […] Pokud někdo slibuje opak, měl by ukázat měření pořadí nebo citací, nejen test, jak model odpovídá na otázky z předložené tabulky.“

### 17. „Pište souběžnou stavbou“ není přirozený pokyn (ř. 199)

> „Položky pod jedním uvozením pište souběžnou stavbou.“

**Problém:** Instrumentál „souběžnou stavbou“ je kostrbatý. Redakční zásadu lze říct přímoji a bez abstraktního podstatného jména.

**Konkrétní přeformulování:** „Položky pod jedním uvozením formulujte stejnou větnou stavbou.“

### 18. Přesný časový slib a neurčité „bez nástroje“ (ř. 208)

> „Před publikací udělejte čtyři testy — bez nástroje a za pět minut“

**Problém:** Jednotné číslo „bez nástroje“ působí, jako by článek měl na mysli jeden konkrétní nástroj. „Za pět minut“ je přesný slib, který text nijak nedokládá a u složitější tabulky nemusí platit.

**Konkrétní přeformulování:** „Před publikací udělejte čtyři rychlé testy — bez zvláštních nástrojů.“ Pokud je časový údaj pro rytmus nadpisu důležitý: „…bez zvláštních nástrojů, přibližně za pět minut.“

### 19. Abstraktní „forma má nést skutečný vztah“ (ř. 225)

> „Co si z tabulek a seznamů odnést — forma má nést skutečný vztah“

**Problém:** „Skutečný vztah“ může znamenat vztah mezi lidmi, údaji i částmi stránky. Následující odstavec mluví konkrétně o zachování vztahů mezi údaji; nadpis by měl pojmenovat totéž.

**Konkrétní přeformulování:** „Co si z tabulek a seznamů odnést — formát má zachovat vztahy mezi údaji.“ V MDX zachovat formátování například jako `## Co si z <span class="hl">tabulek a seznamů</span> odnést — <strong>formát má zachovat vztahy mezi údaji</strong>`.

### 20. Neurčitý „výsledek“ a abstraktní „hodnota informace“ (ř. 229)

> „O výsledku dál rozhoduje hodnota, přesnost a dohledatelnost informace.“

**Problém:** Není jasné, zda „výsledek“ znamená pozici, zobrazení, nebo citaci. „Hodnota informace“ je marketingově vágní; v kontextu jde o její užitečnost. Jednotné číslo „informace“ navíc působí úředně.

**Konkrétní přeformulování:** „O případné citaci dál rozhoduje užitečnost, přesnost a dohledatelnost informací.“

## Shrnutí tonality

- **Edukativní hlas:** odpovídá zadání; text vysvětluje a dává konkrétní rozhodovací pravidla.
- **Strach a tlak:** bez nálezu.
- **Marketingová vata:** bez zásadního nálezu; jedinou výraznější abstrakci tvoří závěrečná „hodnota informace“.
- **Přehnané sliby:** hlavní odborné tvrzení je správně ohraničené. Článek výslovně neztotožňuje sémantickou strukturu s lepší pozicí či citací. Zmírnit doporučuji jen přesný příslib kontroly „za pět minut“.
- **Odborné termíny:** HTML prvky a názvy studií mají v textu jasnou funkci. `benchmark` je podle projektového slovníku povolený oborový termín. Nejasné nejsou termíny samy, ale anglické vazby kolem nich.
- **Typografie:** bez samostatného nálezu; české uvozovky, pomlčky, nezlomitelné spojovníky v názvech modelů i zápis ceny jsou v auditovaném textu použité konzistentně.
