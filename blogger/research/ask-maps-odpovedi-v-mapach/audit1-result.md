## Verdikt

Článek je **fakticky disciplinovaný a ve většině klíčových míst drží hranici mezi doloženým a nedoloženým**. Nenašel jsem žádnou zjevnou **BLOCKING** chybu typu vymyšlené číslo, datum nebo přímý rozpor s dodaným research podkladem.

Níže uvádím jen **reálné vady a rizika formulace**. Kde je něco v pořádku, říkám to výslovně.

---

## Co je v pořádku

### 1) Rozdíl „Google to nezmiňuje“ vs. „Google to nepoužívá“ je držený dobře
Tohle je nejsilnější stránka textu. Kritická místa jsou ošetřená správně, např.:

- „**mezi podklady, které Google u Ask Maps jmenuje, není web provozovny**“
- „**Netvrdím, že web nehraje roli — Google jen v souvislosti s touhle funkcí o webu nepíše.**“
- „**Web provozovny nezmiňuje. Že by ho nepoužíval, z toho ale neplyne**“

To odpovídá podkladu.

### 2) Dostupnost v Česku je podaná poctivě
Text správně neříká ani „v Česku to běží“, ani „v Česku to není“. Naopak opakovaně drží formulaci „**doložit neumím** / **Česko jmenované není** / **vlastní test jsem nedělal**“. To je správně.

### 3) Frontmatter, answer, FAQ a tělo jsou převážně konzistentní
Hlavní teze se shodují:
- Ask Maps = konverzační vrstva v Mapách
- podklady, které Google výslovně jmenuje = místa, recenze, snímky
- Česko není v oznámeních výslovně jmenované
- z veřejných zdrojů neplyne dopad na návštěvnost

### 4) Článek je užitečný i bez „nového úkolu“
Ano. Užitečnost stojí na tom, že **vymezuje plochu**: nejde primárně o web, ale o profil místa / recenze / fotky. Pro cílovku je to praktická orientace, i když závěr je střízlivý.

---

## Nálezy

# MAJOR

### 1) Příliš silné tvrzení o tom, z čeho Ask Maps „odpovědi staví“
**Vadná pasáž:**
- title/description/answer i tělo opakují formulace typu:
  - „**Mapy Google umí konverzační odpovědi nad profily míst a recenzemi.**“
  - „**Odpovědi staví podle Googlu nad databází míst, recenzemi a snímky**“
  - „**Podklady jsou profil místa, recenze a snímky**“

**Problém:**
Podklad říká, že Google jmenuje:
- databázi 300M+ places
- recenze od 500M+ contributors
- Street View a letecké snímky

To **opravňuje říct, že jde o jmenované podklady**, ale ne úplně čistě tvrdit, že odpovědi jsou „nad profily míst“. „Profil místa“ je už vaše interpretace databáze places. Je rozumná, ale je to interpretace, ne přímá citace.

Navíc formulace „**podklady jsou**“ může znít uzavřeněji, než dovoluje zdroj. Bezpečnější je „**Google jako podklady jmenuje**“.

**Návrh opravy:**
- místo „Podklady jsou profil místa, recenze a snímky“
  použít:
  - „**Google jako podklady jmenuje databázi míst, recenze přispěvatelů a snímky.**“
- místo „Mapy Google umí konverzační odpovědi nad profily míst a recenzemi“
  použít:
  - „**Google u Ask Maps výslovně uvádí databázi míst, recenze a snímky jako podklady odpovědí.**“

---

### 2) V jedné pasáži se zbytečně posouvá „places database“ na konkrétní prvky profilu firmy
**Vadná pasáž:**
> „**Přes 300 milionů záznamů: adresa, kategorie, otevírací doba, atributy. Tuhle část za vás spravuje profil firmy, ne redakční systém.**“

**Problém:**
Research neobsahuje výčet „adresa, kategorie, otevírací doba, atributy“ jako citované části databáze Ask Maps. To jsou sice typické položky firemního profilu / místa v Mapách, ale tady už jde o **dovozování nad rámec zdroje**.

Není to vyloženě nesmysl, ale je to už interpretace, která se tváří pevněji, než je podloženo.

**Návrh opravy:**
- bezpečněji:
  - „**Přes 300 milionů záznamů o místech. V praxi sem typicky patří údaje spravované v profilu firmy, ne obsah vašeho webu.**“
- nebo ještě přísněji:
  - „**Google mluví o databázi přes 300 milionů míst; detaily struktury těchto záznamů v oznámení nerozepisuje.**“

---

### 3) Formulace o recenzích jako materiálu, „ze kterého odpověď skládá věty“, je o krok dál než zdroj
**Vadná pasáž:**
> „**Text recenzí je materiál, ze kterého odpověď skládá věty o atmosféře nebo obsluze.**“

a dále:

> „**Práce s nimi je práce s materiálem, ze kterého se odpověď skládá.**“

**Problém:**
Google podle podkladu uvádí recenze jako jeden ze zdrojů. Ale konkrétní tvrzení, že z nich model skládá věty o „atmosféře nebo obsluze“, už je **vlastní čtení mechanismu**. Může být pravdivé, ale v článku to není explicitně odlišené od doloženého.

**Návrh opravy:**
- „**Recenze Google výslovně jmenuje mezi podklady odpovědí. Pro provozovnu to znamená, že nejde jen o reputaci pro lidi, ale i o vstup do této plochy.**“
- případně přiznat interpretaci:
  - „**Lze čekat, že recenze budou ovlivňovat i slovní charakteristiky v odpovědi, ale Google ten mechanismus veřejně nerozepisuje.**“

---

### 4) Tvrzení o „konverzační odpovědi bez seznamu výsledků“ je už zobecnění
**Vadná pasáž:**
> „**Konverzační odpověď nemá seznam výsledků, ve kterém by si člověk všiml rozporu. Chybný údaj se v ní podá jako fakt.**“

**Problém:**
Podklad říká, že Ask Maps odpovídá konverzačně a nabídne mapu s vybranými místy. Nevidím ale v dodaných podkladech oporu pro kategorické tvrzení, že tam **není seznam výsledků** nebo že chyba bude podaná „jako fakt“. To je plausibilní interpretace UX, ale ne doložené tvrzení.

První polovina je spíš zobecnění, druhá už je silná implikace o chování systému.

**Návrh opravy:**
- „**Konverzační forma odpovědi dává menší prostor k porovnání více variant než klasický seznam výsledků. I proto dává smysl držet klíčové údaje v profilu místa přesně.**“
- nebo:
  - „**Pokud Ask Maps odpověď shrne jednou větou, uživatel si rozpor nemusí všimnout tak snadno jako v klasickém seznamu.**“

---

# MINOR

### 5) Description je lehce tvrdší než tělo
**Vadná pasáž:**
> „**Mapy Google umí konverzační odpovědi nad profily míst a recenzemi. Web provozovny mezi jmenovanými podklady není a Česko mezi jmenovanými zeměmi taky ne.**“

**Problém:**
„nad profily míst“ je opět interpretace místo přesnějšího „Google jmenuje databázi míst“. Není to velká chyba, ale description je metadata a mělo by být co nejpřesnější.

**Návrh opravy:**
- „**Ask Maps jsou konverzační odpovědi v Mapách Google. Google mezi jejich podklady jmenuje databázi míst, recenze a snímky; web provozovny nezmiňuje a Česko mezi jmenovanými zeměmi není.**“

---

### 6) Stat „0 zmínek o webu provozovny“ je srozumitelná, ale trochu efektní
**Vadná pasáž:**
> `value: "0"`  
> `label: "zmínek o webu provozovny mezi podklady, které Google u Ask Maps jmenuje"`

**Problém:**
Fakticky to sedí na research, ale stylově to může působit tvrději, než článek jinak působí. „0“ vypadá jako metrika, přitom jde jen o absenci zmínky ve dvou oznámeních a nápovědě.

**Návrh opravy:**
- buď nechat, pokud chcete úderný frontmatter,
- nebo zmírnit:
  - `value: "nezmíněn"`
  - `label: "web provozovny mezi podklady, které Google u Ask Maps výslovně jmenuje"`

---

### 7) FAQ „Místo seznamu podniků odpoví … větou“ je příliš konkrétní
**Vadná pasáž:**
> „**Místo seznamu podniků odpoví na složitější dotaz větou a nabídne mapu s vybranými místy.**“

**Problém:**
„větou“ je zbytečně konkrétní. Podklad mluví o conversational experience; forma může být různě dlouhá.

**Návrh opravy:**
- „**Místo klasického seznamu podniků vrátí konverzační odpověď a nabídne mapu s vybranými místy.**“

---

### 8) „Ověřovat to za Googla nebudu“ je stylisticky ostřejší než zbytek textu
**Vadná pasáž:**
> „**Dostupnost pro Česko doložená není. Česká nápověda existuje, seznam zemí ne. Ověřovat to za Googla nebudu.**“

**Problém:**
Není to faktická chyba, ale tónově je to o něco expresivnější než zbytek článku, který je jinak věcný a střízlivý.

**Návrh opravy:**
- „**Dostupnost pro Česko doložená není. Česká nápověda existuje, seznam zemí ne. Bez výslovného seznamu zemí nebo vlastního testu to dál netvrdím.**“

---

## Odpovědi na zvlášť ověřované body

### Je rozdíl mezi „Google to nezmiňuje" a „Google to nepoužívá" držený všude, kde má být?
**Ano, převážně ano.**  
Jediné riziko je v pasážích, kde se z „Google jmenuje databázi míst / recenze / snímky“ stává stručnější „podklady jsou profil místa, recenze a snímky“. To bych zpřesnil, ale není to hrubé porušení.

### Neslibuje titulek nebo description něco, co článek nedodá?
**Titulek ne. Description lehce přitvrzuje formulaci**, viz nález č. 5, ale věcně se pořád drží tématu článku.

### Je pasáž o dostupnosti v Česku poctivá?
**Ano.**  
Čtenář by neměl odcházet s dojmem jistoty ani jedním směrem. To je zvládnuté dobře.

### Sedí answer, stats a FAQ na tělo?
**Ano, s drobnými výhradami.**
- answer: sedí
- stats: sedí, jen „0“ je lehce efektní
- FAQ: sedí, jen „odpoví větou“ bych zmírnil

### Je článek užitečný pro provozovnu, když hlavní sdělení je „nový úkol z toho neplyne"?
**Ano.**  
Užitečnost je v tom, že:
1. vymezuje, že nejde primárně o web,
2. říká, co má smysl držet přesně,
3. brání přehnaným závěrům o návštěvnosti a „nových AI SEO povinnostech“.

To je pro cílovku hodnotné.

---

## Celkové hodnocení

- **BLOCKING:** 0
- **MAJOR:** 4
- **MINOR:** 4

## Doporučení
Článek **publikovat po drobném zpřesnění formulací**, hlavně tam, kde se:
- „Google jmenuje“ mění na „takto to určitě funguje“,
- „databáze míst“ mění na konkrétní pole profilu bez opory v citaci,
- konverzační forma překlápí do příliš jistých tvrzení o UX a dopadu chyb.