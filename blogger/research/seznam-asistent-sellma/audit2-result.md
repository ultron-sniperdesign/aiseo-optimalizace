[BLOKER] **Hlavní nález je vidět, ale ne dost brzo a ne dost „užitkově“.**  
> „**Seznam-Extended je robot, kterým Seznam sbírá obsah pro své AI služby včetně Seznam Asistenta.** Řídí se robots.txt, takže ho lze odmítnout.“  
>  
> „Odhlášení vypadá přesně tak, jak byste čekali:“  
> ```  
> User-agent: Seznam-Extended
> Disallow: /
> ```

**Proč:** Hlavní hodnota pro vaše publikum není „Seznam má AI robota“, ale „zkontrolujte si robots.txt, pravděpodobně vám tam chybí konkrétní řádek / konkrétní rozhodnutí“. Článek to říká, ale až po úvodu a s důrazem na existenci robota, ne na akci čtenáře. Pro netechnického majitele webu je silnější užitková formulace než objevová formulace.

**Konkrétní návrh:**  
Hned po perexu nebo jako první věta v prvním H2 dejte tvrdý takeaway. Např.:  
- „Pokud řešíte AI roboty jen přes GPTBot a spol., v `robots.txt` vám nejspíš chybí kontrola pro `Seznam-Extended`.“  
- Nebo ještě lépe krátký box typu „Co zkontrolovat hned teď“.  
Tím se článek ukotví v praktické hodnotě a neskončí jako zajímavost o Seznamu.

---

[WARNING] **Článek má jedno dobré jádro, ale obaluje ho pěti směry najednou. Drží to jen tak tak.**  
> „Tenhle text je hlubší pohled na Asistenta.“  
>  
> Sekce: „Robot“, „my to taky nemáme“, „zdroje dat“, „jaký model“, „co z toho má vydavatel“, „časté chyby“, „hranice“, „co si odnést“

**Proč:** Máte tu minimálně pět linií:  
1. existence a blokace robota,  
2. důsledek opt-outu,  
3. zdroje dat,  
4. model SeLLMa / OpenAI / Azure,  
5. monetizace vydavatelů.  

To už není „jeden spoke do hloubky“, ale malý rozcestník. Nejpevnější linka je jasná: **Seznam-Extended existuje, dá se blokovat, ale něco to stojí.** Druhá nejsilnější: **viditelnost v Asistentovi nestojí jen na webu, ale na ekosystému Seznamu.** Model i monetizace jsou proti tomu slabší odbočky.

**Konkrétní návrh:**  
Zkraťte a přeuspořádejte do 3 bloků:  
1. **Co je Seznam-Extended a co s ním uděláte v robots.txt**  
2. **Co zablokování znamená pro návštěvnost a proč je to rozhodnutí za celý web**  
3. **Kde se bere viditelnost v Asistentovi: vlastní web vs. Zboží/Firmy a další zdroje**  

Model dejte jako krátkou podsekci nebo poznámku. Monetizaci vyhoďte nebo přesuňte jinam. Jinak článek slibuje jednu věc a průběžně odbíhá.

---

[DOPORUČENÍ] **Sekce o monetizaci vydavatelů je pro tohle publikum spíš odbočka.**  
> „## Co z toho má vydavatel“  
>  
> „Týká se to tedy hlavně webů, které v Newsfeedu už jsou.“  
>  
> „Pro e-shop nebo firemní web z něj nic neplyne.“

**Proč:** Tohle si článek vyvrací sám. Pokud z toho pro e-shop nebo firemní web nic neplyne, proč tomu věnujete samostatný H2? U publika „majitelé webů a e-shopů, spíš netechničtí“ je to zbytečné rozbití tempa. Zvlášť ve spoke článku.

**Konkrétní návrh:**  
Buď:  
- sekci úplně vyhoďte,  

nebo:  
- smrskněte do jedné věty v části „Kde má článek hranice“: „Monetizace přes Newsfeed se týká hlavně vydavatelů, proto ji tu nerozebíráme.“  

Samostatný H2 si to neobhájí.

---

[WARNING] **Pasáž „my to taky neměli“ je hraniční: trochu lidská, ale moc slabá na vlastní sekci.**  
> „## Přiznáme se: my to taky nemáme“  
>  
> „Při psaní tohohle článku jsme si pustili vlastní `robots.txt` — a `Seznam-Extended` jsme tam taky neměli.“

**Proč:** Jako drobný moment důvěryhodnosti to funguje. Jako samostatná sekce je to vata. Neříká nic nového kromě „taky jsme na to zapomněli“. Čtenář z toho nemá víc než potvrzení, že jde o snadno přehlédnutelnou věc.

**Konkrétní návrh:**  
Převést do jedné věty v závěru první sekce nebo do insightu. Např.:  
- „Není to okrajová chyba — při kontrole jsme zjistili, že tenhle user-agent často chybí i v pečlivě spravovaných `robots.txt`.“  
To samé bez sebereferenčního nafouknutí.

---

[DOPORUČENÍ] **CompareTable je na tři věty zbytečně těžká forma.**  
> `<CompareTable caption="Co Seznam o modelu uvedl a kdy" ... />`

**Proč:** Pro netechnické publikum tabulka zvyšuje kognitivní zátěž tam, kde stačí prosté shrnutí. Navíc řeší vedlejší věc. Tabulka dává smysl, když porovnáváte varianty pro rozhodnutí. Tady jen chronologicky říkáte: dřív tvrdili A, pak B, závěr je nejasný.

**Konkrétní návrh:**  
Nahradit třemi krátkými odrážkami:  
- v listopadu 2025: vlastní model + dočasně OpenAI přes Azure,  
- cíl: běžet čistě na vlastních modelech,  
- v květnu 2026: veřejně zmiňují už jen SeLLMu.  

A hned pod to jednu větu: „Pro praxi je to vedlejší; důležitější jsou zdroje dat a opt-out.“

---

[KOSMETIKA] **Insight bloky sedí, MistakeGrid spíš opakuje než posouvá.**  
> „<Insight tone="warning"> … konec návštěv z tohoto kanálu.“  
>  
> „<Insight tone="key"> … vlastní služby Seznamu.“  
>  
> „## Časté chyby“

**Proč:** Oba Insighty mají funkci: první zdůrazňuje cenu opt-outu, druhý převádí seznam zdrojů do důsledku pro byznys. To je v pořádku. MistakeGrid ale už znovu přepisuje totéž, co bylo řečeno výš. U kratšího článku to působí jako šablonová výplň.

**Konkrétní návrh:**  
Pokud chcete zkracovat, škrtal bych MistakeGrid dřív než Insighty. Případně nechat jen 2 chyby:  
- řešit jen globální roboty,  
- blokovat Seznam-Extended bez rozmyslu.  
Zbylé dvě jsou spíš přeformulované shrnutí.

---

[WARNING] **Nadpisy H2 jsou nevyrovnané: někde konkrétní, někde mlhavé nebo zbytečně osobní.**  
> „## Robot, který vám čte web“  
> „## Přiznáme se: my to taky nemáme“  
> „## Jaký model Seznam veřejně přiznal“  
> „## Co z toho má vydavatel“  
> „## Kde má tenhle článek hranice“

**Proč:** V analysis článku pro majitele webů mají H2 pomáhat skenování. Nejlepší je „Odkud Asistent bere data“ — přesné a čitelné. Nejslabší je „Přiznáme se…“, to je spíš newsletterový tón než informační struktura. „Jaký model Seznam veřejně přiznal“ je kostrbaté. „Kde má tenhle článek hranice“ je interně poctivé, ale čtenářsky slabé.

**Konkrétní návrh:**  
Přejmenovat tvrději a užitkově:  
- „Jak zablokovat Seznam-Extended v robots.txt“  
- „Co zablokování stojí“  
- „Z jakých zdrojů Asistent čerpá“  
- „Co o modelu víme — a proč to není podstatné“  
- „Co tenhle článek neřeší“  

Taková struktura je jasnější a drží těžiště.

---

[WARNING] **Titulek funguje na zvědavost, ale hraničí s clickbaitem a málo prodává užitek.**  
> „Seznam Asistent má vlastního AI robota. Znáte ho?“

**Proč:** Ano, titulek je srozumitelný. Ale „Znáte ho?“ je laciný háček a nic neříká o dopadu pro čtenáře. U odbornějšího webu bych čekal méně magazínový tón a víc konkrétní benefit. Zvlášť když největší hodnota článku je v robots.txt a důsledcích opt-outu.

**Konkrétní návrh:**  
Silnější varianty:  
- „Seznam-Extended: AI robot Seznamu, který vám možná chybí v robots.txt“  
- „Seznam má AI robota Seznam-Extended. Co to znamená pro váš web“  
- „Jak blokovat Seznam AI: user-agent Seznam-Extended a jeho důsledky“  

Nemusíte být za každou cenu „sexy“. Tady vyhrává přesnost.

---

[KOSMETIKA] **Čeština je většinou čistá, ale místy zbytečně mluvená nebo natažená.**  
> „Pokud vám to zní povědomě, není to náhoda.“  
>  
> „Odhlášení vypadá přesně tak, jak byste čekali“  
>  
> „Tady je potřeba být opatrný“  
>  
> „Berte to jako to, čím to je“

**Proč:** To nejsou chyby, ale v součtu to dělá lehce „blogerský“ nános. U analysis formátu by textu prospěla větší věcnost a méně vycpávkových obratů. „Berte to jako to, čím to je“ je navíc stylisticky neobratné.

**Konkrétní návrh:**  
Zkrátit a zpřesnit:  
- „Podobný kompromis jsme popsali i u Googlu a Cloudflare.“  
- „Odhlášení v robots.txt vypadá takto:“  
- „Veřejná vyjádření se liší v čase.“  
- „Je to číslo dodavatele o vlastní službě; pro e-shop nebo firemní web je nepoužitelné.“

---

[DOPORUČENÍ] **CTA navazuje jen napůl. Není agresivní, ale je moc široké vůči tomu, co článek řeší.**  
> „Chcete vědět, jestli vás české i globální AI nástroje vůbec zmiňují, a co s tím? **AI SEO audit** … včetně robots.txt.“

**Proč:** Článek je hodně konkrétní: Seznam-Extended, opt-out, zdroje viditelnosti v Asistentovi. CTA pak skočí do širokého „české i globální AI nástroje“. Není to přilepený prodeják, ale je to krok stranou.

**Konkrétní návrh:**  
Navázat přímo na rozhodnutí, které článek otevírá:  
- „Nevíte, jestli Seznam-Extended a další AI roboti na webu řešíte správně? V AI SEO auditu projdeme robots.txt, indexaci i to, odkud vás AI nástroje skutečně berou.“  
Tím CTA naváže na problém, ne na obecné portfolio.

---

[WARNING] **Vnitřní logika je skoro v pořádku, ale máte tu drobný rozpor v tom, co je hlavní téma článku.**  
> „Tenhle text je hlubší pohled na Asistenta.“  
>  
> „Pokud si robots.txt ladíte podle článků o GPTBotovi, chybí vám tam řádek…“  
>  
> „A pokud vám jde hlavně o to být v odpovědích vidět, začněte jinde než u robots.txt…“

**Proč:** Jednou prodáváte článek jako „hlubší pohled na Asistenta“, ale nejsilnější a nejpraktičtější linka je ve skutečnosti **správa přístupu AI robota a zdroje viditelnosti**. To není chyba faktická, ale poziční. Čtenář může čekat víc o fungování Asistenta samotného, dostane spíš SEO/robots rozhodování. To je potřeba přiznat přesněji.

**Konkrétní návrh:**  
Už v úvodu vymezit:  
- „Tenhle text neřeší Seznam jako tržní kanál, ale jednu praktickou věc: jak Seznam AI čte weby, jak ho zablokujete a kde se bere viditelnost v Asistentovi.“  
To sjednotí očekávání se skutečným obsahem.

---

[DOPORUČENÍ] **Hub-and-spoke hranice je většinou uhlídaná, ale modelová sekce do hubu skoro přetéká.**  
> „Jakou roli má Seznam jako kanál… je v hlavním článku“  
>  
> „Jaký model Seznam veřejně přiznal“

**Proč:** Zdrojové kanály a robots.txt ještě drží spoke o Asistentovi. Model už je spíš podpůrná zajímavost. Pokud máte samostatný hub o Seznamu jako kanálu a optimalizaci, modelová chronologie je přesně ta část, která s rozhodnutím majitele webu moc nehýbe.

**Konkrétní návrh:**  
Buď model stáhnout na 2–3 věty bez tabulky, nebo přesunout do FAQ / poznámky pod čarou ve stylu „pro úplnost“. V hlavním těle zabírá moc pozornosti na malý přínos.

---

## VERDIKT: **OPRAVIT PŘED PUBLIKACÍ**

Ne kvůli faktům, ale kvůli řemeslu. Článek má hodnotný nález, jen mu nepomáhá struktura. Teď je to dobrý objev zabalený do příliš mnoha vedlejších větví.

### 4 prioritní zásahy
1. **Přitvrdit hlavní takeaway hned nahoře:** čtenář musí do 10 vteřin pochopit, že jde o `Seznam-Extended` v `robots.txt` a cenu jeho blokace.  
2. **Vyhodit nebo drasticky zkrátit sekci o monetizaci vydavatelů.** Pro cílovku je to odbočka.  
3. **Sloučit/zkrotit vedlejší sekce:** „my to taky nemáme“ zkrátit na větu, modelovou tabulku převést na stručný odstavec.  
4. **Přepsat H2 a ideálně i titulek do konkrétnější, užitkové podoby.** Méně „Znáte ho?“, víc „co s tím máte udělat“.