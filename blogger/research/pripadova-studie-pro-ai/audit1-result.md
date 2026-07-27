Níže tvrdý audit v režimu **hledám problémy, ne plusy**.

# BLOKERY

## 1. Silná kanibalizace s `/blog/originalni-data-pro-ai/`
Tohle **velmi snadno působí jako roztažení jedné odrážky do samostatné URL bez dost nového know-how**. Samotný kontext, který uvádíte, tomu bohužel nahrává.

### Duplicitní / překryvné pasáže
Nový článek opakuje jádro toho, co už nadřazený článek zjevně říká:

- **„Případová studie patří mezi typy originálních dat“**
- **„pro nejmenší firmy má obvykle nejlepší poměr výsledku k času“**
- **„Obecná pravidla o formátu publikace, délce citovatelných úseků a sběru dat má odkazovaný článek — tady se jimi nebudu opakovat.“**
- **„Formát publikace — krátká shrnutí, strukturovaná data, případně soubor s daty ke stažení — má originální data pro AI.“**

Tohle není jen interní provázání. Je to přímý signál, že nový text stojí na již existující tezi a jen ji rozepisuje. Pokud starší článek už obsahuje:

- případovou studii jako typ originálních dat,
- doporučený formát publikace,
- doporučení pro malé firmy,
- už i číslo o citovatelnosti krátkých úseků,

pak nový článek musí přinést **výrazně samostatnou expertizu**. Zde ji přináší jen částečně.

### Kde je skutečný nový přínos
Reálně nové a obhajitelné jsou jen tyto okruhy:

- souhlas klienta / co lze publikovat,
- atribuce a kontrafaktuál,
- anonymizace a její cena v důvěryhodnosti,
- kdy case study radši nepsat.

To je na samostatný článek **na hraně dostačující**, ale jen pokud se text očistí od všeho, co znovu vysvětluje obecné zásady z parent článku.

### Verdikt
**V současné podobě samostatné vydání neobhajuji bez úprav.**  
Není to vyloženě duplicitní stránka, ale **je nebezpečně blízko kanibalizačnímu satelitu** k `/blog/originalni-data-pro-ai/`.

### Konkrétní oprava
Zkraťte nebo vyhoďte pasáže, které jen znovu vysvětlují obecné principy “originálních dat”:

- vyhodit / zkrátit:
  - **„Případová studie patří mezi typy originálních dat…“**
  - **„pro nejmenší firmy má obvykle nejlepší poměr výsledku k času“**
  - závěr s odkazem na **„Formát publikace — krátká shrnutí, strukturovaná data…“**

Místo toho otevřít článek ostřeji:

> „Tenhle text neřeší, proč jsou případové studie jedním z typů originálních dat. To už je popsáno jinde. Řeší jen čtyři problémy, které jsou specifické právě pro case study: souhlas klienta, ověřitelnost čísel, přiznání alternativních vysvětlení a situace, kdy je lepší studii vůbec nevydávat.“

Tím se URL vymezí proti parent článku a sníží se kanibalizace.

---

## 2. Přepálená tvrzení o mechanismech AI
Největší problém textu. Autor **opakovaně vydává rozumnou heuristiku za téměř jistý mechanismus AI systémů**.

### Problematické citace
- **„Bez nich je to reklama, kterou AI systémy jako podklad neberou.“**
- **„AI systémy potřebují dohledatelný a konkrétní podklad, ne tvrzení o spokojenosti.“**
- **„Když jeden z nich chybí, tvrzení nejde ověřit — a to je přesně ten rozdíl, kvůli kterému AI systémy sáhnou po jiném zdroji.“**
- **„Pro AI systém je to tvrzení bez opory, pro čtenáře marketing.“**
- **„Anonymní studie bez konkrétních údajů nemá co nabídnout.“**  
  — pro čtenáře možná, ale pro “AI” je to zase podané příliš absolutně.

### Proč je to problém
Text **nedokládá**, že AI systémy mají explicitní pravidlo typu:

- bez absolutních čísel neberou,
- bez metodiky neberou,
- bez atribuce neberou.

Tohle jsou spíš **redakční zásady pro důvěryhodný zdroj**, ne prokázaný mechanismus systémů typu ChatGPT / vyhledávací AI / odpovědní engine.

Navíc sám web podle kontextu už pracuje s omezeným vlastním měřením citací. To **nestačí** na tak silné formulace.

### Konkrétní oprava
Všude změnit jazyk z deterministického na pravděpodobnostní.

Např.:

- místo:
  > „AI systémy jako podklad neberou.“

  dát:
  > „Bez nich text působí spíš jako reference než jako zdroj a má menší šanci, že ho AI systém nebo redaktor vyhodnotí jako oporu pro konkrétní tvrzení.“

- místo:
  > „AI systémy potřebují dohledatelný a konkrétní podklad“

  dát:
  > „Systémy generující odpovědi i lidští editoři obvykle lépe pracují s konkrétními a dohledatelnými tvrzeními než s obecnou marketingovou formulací.“

- místo:
  > „AI systémy sáhnou po jiném zdroji.“

  dát:
  > „V praxi je pravděpodobnější, že jako opora poslouží jiný zdroj, který uvádí srovnatelná čísla, období a metodiku.“

### Doporučení navíc
Přidat jednu explicitní větu o epistemické skromnosti:

> „Nejde o veřejně potvrzené interní pravidlo AI systémů. Je to praktická redakční heuristika: čím konkrétnější, ověřitelnější a méně promo text je, tím snáz se používá jako podklad.“

Tohle by mělo být v článku povinně.

---

## 3. Právní sekce je nebezpečně blízko právní radě a je neúplná
Sekce o souhlasu klienta je podaná příliš samozřejmě, jako by šlo o dostačující pravidlo. Nejde.

### Problematické citace
- **„Zeptejte se klienta, co smíte zveřejnit: jméno, čísla, období. Ideálně to mějte ošetřené už ve smlouvě.“**
- **„Bez souhlasu se čísla nepublikují ani anonymně, pokud by šel klient odvodit.“**
- **„A pozor na to, že anonymizace nestačí, pokud jde klient odvodit z kombinace oboru, velikosti a období.“**

### Co chybí
Minimálně:

- **NDA / smluvní mlčenlivost**
- **obchodní tajemství / důvěrné informace**
- **GDPR**, pokud čísla nebo popis případu obsahují osobní údaje nebo snadno reidentifikovatelná data
- rozlišení mezi:
  - souhlasem klienta jako obchodní praxí,
  - smluvním oprávněním,
  - zákonnou přípustností zveřejnění.

Teď to zní, jako že „když je souhlas, je to vyřešeno“. To může být **zavádějící**.

### Konkrétní oprava
Doplnit disclaimer a rozšířit sekci.

Navržené znění:

> „Tohle není právní rada. U klientských dat neřešíte jen marketingový souhlas, ale i smluvní mlčenlivost, NDA, případné obchodní tajemství a u osobních údajů také GDPR. Souhlas s publikací je praktické minimum, ne automatická záruka, že je zveřejnění po právní stránce v pořádku.“

A v how-to kroku nahradit:

- místo:
  > „Ideálně to mějte ošetřené už ve smlouvě.“

  dát:
  > „Ideálně to řešte už ve smlouvě nebo samostatném schválení publikace, a u citlivých dat si ověřte i závazky z NDA, mlčenlivosti a případné dopady na obchodní tajemství či GDPR.“

---

# VAROVÁNÍ

## 4. Vnitřní logika není úplně čistá: 6 bloků vs. 3 údaje vs. 3 úrovně anonymizace
Není to rozpadlé, ale **místy je to konstrukčně neuhlazené**.

### Konkrétní napětí
#### a) „Šest bloků“ není totéž co how-to kroky
Stepper i howto si jsou podobné, ale ne zcela stejné:

- Stepper má:
  - Výsledek
  - Výchozí stav
  - Zásah
  - Metodika
  - Atribuce
  - Co to nedokazuje

- Howto kroky mají:
  - souhlas
  - výsledek
  - výchozí stav
  - zásah
  - metodika
  - atribuce

Tedy:
- v jednom modelu je souhlas mimo strukturu,
- v druhém je součást postupu,
- a blok **„Co to nedokazuje“** v how-to chybí.

To není fatální, ale pro čtenáře je to zmatečné.

### Oprava
Sjednotit rámec na:
- **0. Souhlas a publikovatelnost**
- **1. Výsledek**
- **2. Výchozí stav**
- **3. Zásah**
- **4. Metodika**
- **5. Atribuce**
- **6. Limity / co to nedokazuje**

Pak tomu přizpůsobit i stats a howto.

#### b) „3 úrovně anonymizace“ nejsou úplně úrovně anonymizace
První bod:
- **„Jméno klienta a čísla“**

není anonymizace vůbec. Je to zveřejněná identita.

Takže nadpis:
- **„Tři úrovně anonymizace“**
je nepřesný.

### Oprava
Přejmenovat na:

> „Tři režimy zveřejnění případové studie“

nebo

> „Tři úrovně identifikovatelnosti“

To je přesnější.

---

## 5. Sebepropagace je přítomná a místy maskovaná jako důkaz
Nejsem přesvědčený, že je to poctivé oddělení metodiky od vlastního prodeje / vlastních výsledků.

### Problematické citace
- **„Přesně tak vznikla i naše případová studie o AI návštěvnosti; posuďte ji podle kritérií z tohohle článku.“**
- **„V našem testu citací v ChatGPT…“**
- implicitně i parent článek se zřejmě opírá o vlastní číslo **~2,3×**.

### Proč je to problém
Text se stylizuje do role metodického návodu, ale opakovaně si **podsouvá vlastní obsah jako referenční důkaz**. To není automaticky špatně, ale tady je riziko, že:

1. vlastní studie slouží jako interní promo,
2. vlastní “test citací” je použit jako argument o fungování AI,
3. čtenář nedostává dost jasnou informaci o limitech těchto interních pozorování.

### Oprava
Každý vlastní experiment nebo studii explicitně označit:

> „Je to naše interní pozorování, ne obecně potvrzené pravidlo.“

A promo odkaz změkčit nebo přesunout do boxu „Příklad“, ne do hlavního argumentu:

- místo:
  > „Přesně tak vznikla i naše případová studie…“

  dát:
  > „Jako ilustraci lze použít i naši vlastní studii, ale berte ji jako příklad formátu, ne jako důkaz obecného pravidla.“

---

## 6. „Případová studie tvrdí příčinnost“ je užitečné zjednodušení, ale přehání
### Problematická citace
- **„Případová studie má jeden problém, který ostatní typy dat nemají: tvrdí příčinnost.“**

To je moc ostré. I jiné typy obsahu mohou implicitně tlačit kauzalitu. A ne každá případová studie nutně tvrdí příčinnost stejně silně.

### Oprava
> „Případová studie často implicitně naznačuje příčinnost silněji než třeba prostý průzkum nebo dataset, a proto u ní víc záleží na popisu kontextu, měření a alternativních vysvětlení.“

---

# DOPORUČENÍ

## 7. Užitečnost je slušná, ale stále příliš obecná; chybí operativní minimum
Čtenář dostane principy, ale ne dost konkrétní pracovní pomůcku.

### Co chybí
#### a) Chybí minimální publikační checklist
Na konci by měl být velmi konkrétní seznam typu:

- mám souhlas / smluvní oprávnění,
- mám číslo před a po,
- mám období,
- mám zdroj metrik,
- mám 2–3 alternativní vysvětlení,
- mám větu o limitech,
- vím, co nesmím zveřejnit.

Teď je to rozptýlené po textu.

#### b) Chybí šablona jedné case study
Když článek prodává metodiku, měl by dát kostru, kterou lze copy-paste použít.

Např.:

> **Výsledek:**  
> Mezi [období] vzrostlo [metriku] z [x] na [y] (+[z] %), měřeno v [nástroj].
>
> **Výchozí stav:**  
> Před zásahem byl stav [x], problém byl [stručně].
>
> **Zásah:**  
> V [měsíc] jsme provedli [konkrétní změny].
>
> **Metodika:**  
> Data pocházejí z [zdroj], porovnáváme [období] se [srovnání].
>
> **Atribuce:**  
> Výsledek mohl ovlivnit také [sezónnost / kampaně / redesign].
>
> **Limity:**  
> Jde o [jeden web / krátké období / specifický obor].

To by zvýšilo užitečnost násobně.

#### c) Chybí hranice mezi „ověřitelné“ a „jen věrohodně popsané“
Text používá slovo **ověřitelné**, ale v mnoha případech čtenář ani AI čísla ve skutečnosti neověří; jen dostane lepší kontext.

### Oprava
Doplnit rozlišení:

> „Ve většině klientských studií nejde o plnou externí ověřitelnost, ale o vyšší auditovatelnost tvrzení: čtenář ví, co číslo znamená, odkud pochází a v jakém období bylo měřeno.“

To je přesnější než slib „ověřitelnosti“.

---

## 8. FAQ opakuje hlavní text a znovu tlačí nepodložené jistoty
FAQ je užitečné pro SEO plochu, ale redakčně je nafouknuté a znovu opakuje sporné tvrzení o AI.

### Problematické citace
- **„AI systémy potřebují dohledatelný a konkrétní podklad…“**
- **„Nejslabší je anonymní studie bez konkrétních čísel, která už pro AI ani pro čtenáře nemá skoro žádnou hodnotu.“**

To je znovu ten samý problém: jistota bez opory.

### Oprava
FAQ zkrátit a zmírnit:
- méně „AI potřebuje“,
- více „má větší šanci fungovat jako opora“.

---

## 9. Název a description jsou funkční, ale slibují víc, než text může prokázat
### Problematické prvky
- title: **„Případová studie, kterou AI použije jako zdroj“**
- description: **„Jak napsat případovou studii, ze které AI čerpá…“**
- answer: **„Bez nich je to reklama, kterou AI systémy jako podklad neberou.“**

Tohle je marketingově silné, ale auditorsky přepálené. Text nedokazuje, že AI “použije” nebo “nepoužije”.

### Oprava
Bezpečnější varianty:

- **Title:**  
  `Jak napsat případovou studii, která má šanci sloužit jako zdroj`
- **Description:**  
  `Co zvyšuje šanci, že se případová studie bude dát použít jako podklad: konkrétní čísla, metodika měření, limity a přiznaná atribuce.`
- **Answer:**  
  `Případová studie má