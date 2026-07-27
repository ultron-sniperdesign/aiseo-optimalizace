Níže tvrdý audit po přepisu. Verdikt: **jeden bloker už nevidím**, ale **kanibalizace není vyřešená dost**, takže text je stále na hraně samostatné existence. Terminologie kolem W3C je **většinou opravená správně**, ale zůstaly **2–3 formulace, které bych zpřesnil**. Největší problém už není faktická chyba, ale **informační výtěžnost vs. duplicita**.

# BLOKERY

**Žádný čistý faktický bloker už nevidím.**  
Tj. nevidím tu teď nic na úrovni „publikovat nelze, protože je tam zásadní nepravda jako minule“.

Ale:

## 1) Zúžení záběru stále není dost silné, aby to bylo bez debat samostatný článek
Natvrdo: **pořád to spíš vypadá jako odbočka / doplněk k `/blog/lighthouse-ai-check/` než jako nezávislý text s vlastní nekanibalizační hodnotou.**

Proč:

- Sám text přiznává, že **neřeší definici, audit ani implementaci**:
  > „Tenhle článek neopakuje definici, audit ani otázku, jestli to implementovat — zajímá ho úžeji: v jaké fázi standardizace návrh je, jak je podle dosavadní specifikace postavený a proč to zatím není implementační téma.“

- Jenže pak stejně znovu dělá:
  - stručnou definici,
  - stručné vysvětlení rozdílu proti dnešku,
  - praktický závěr „co dělat“,
  - odkaz na Lighthouse audit jako hlavní akční článek.

Tím vzniká text, který je **obsahově odvozený od staršího článku** a nepřináší dost „nového typu odpovědi“.  
Ano, zúžení je lepší než v první verzi. Ale **není brutální**. Brutální zúžení by znamenalo například:

- buď čistě **„status/spec update“** bez sekcí „Co má nahradit“, „Co s tím dnes dělat“, FAQ k implementační náročnosti apod.;
- nebo to **sloučit jako novou sekci / update box** do lighthouse článku.

Nejsilnější důkaz duplicity je, že text sám dvakrát deleguje hlavní užitek jinam:

> „Co WebMCP je a proč ho Lighthouse kontroluje, má Lighthouse Agentic Browsing.“

a

> „Kde se to dá zkontrolovat: kategorie Agentic Browsing v Lighthouse. Celý audit včetně pořadí oprav rozebírá Lighthouse AI check.“

To je legitimní interní linkování, ale zároveň to ukazuje, že **samostatný článek stojí hlavně na „stavu návrhu“ a ten je na plnou stopu pořád trochu málo**.

# VAROVÁNÍ

## 2) Terminologie kolem W3C je už převážně přesná, ale zůstávají formulace, které jsou terminologicky hrubší, než by měly být

### a) „vyvíjí se společně s Microsoftem na trati W3C“
Tohle je nejslabší formulace v celé opravě:

> „Google vydal náhled ve vývojářské verzi Chrome; vyvíjí se společně s Microsoftem na trati W3C.“

„**na trati W3C**“ je mlhavé a může znovu sugerovat formálnější status, než reálně má. Pokud je řeč o Community Group, napiš to přímo.  
Např. „v rámci diskuse ve W3C Web Machine Learning Community Group“ nebo „vedle diskuse v Community Group“.

Takhle je to stylisticky efektní, ale terminologicky nečisté.

### b) „navrhovaný webový standard“
Opakuje se v `description`, `answer` i perexu:

> „WebMCP je navrhovaný webový standard...“

To **není vyloženě špatně**, ale je to formulace na hraně, protože „webový standard“ v češtině snadno zní jako něco, co už je na standardizační dráze s vyšší formálností. Když současně velmi dbáš na rozlišení Community Group vs. standardizační trať, tohle je zbytečně volnější než zbytek textu.

Přesnější by bylo něco jako:
- „návrh technologie pro web“
- „návrh specifikace pro web“
- „navrhovaný mechanismus pro webové interakce agentů“

Neříkám, že „navrhovaný webový standard“ je chyba. Říkám, že **po minulé výtce sis jinde nasadil vyšší laťku přesnosti, než tady držíš**.

### c) „draft Community Group Report“
To je v zásadě v pořádku, ale pozor na české okolí:
> „Skupina publikovala draft zprávy s popisem navrhované specifikace.“

To už je méně přesné než předchozí anglický název. Doporučení: držet **jednu konzistentní formulaci**:
- „návrh Community Group Report“
- nebo „draft Community Group Report (pracovní návrh zprávy skupiny)“

Teď se to místy překlápí mezi názvem artefaktu a obecným „draft zprávy“, což oslabuje terminologickou čistotu.

## 3) Zůstává několik tvrzení silnějších, než podklad bezpečně unese

### a) „stránka sama nabídne AI agentovi konkrétní akce“
> „WebMCP je navrhovaný webový standard, kterým stránka sama nabídne AI agentovi konkrétní akce...“

Jako high-level zkratka dobré, ale slovo „**konkrétní akce**“ už zní dost definitivně a úplně hladce. Pokud návrh má deklarativní i imperativní část, možná bych to v perexu neformuloval tak hotově, jako by způsob expozice akcí byl už jasně ustálený a uzavřený.

### b) „Dnes agenti weby většinou obsluhují naslepo: udělají si obrázek stránky...“
> „Dnes agenti weby většinou obsluhují naslepo: udělají si obrázek stránky a simulují kliknutí...“

Tohle je **užitečná zkratka pro laiky**, ale je to přepálené, pokud má text stát na přesnosti. „Většinou“ bez opory a „udělají si obrázek stránky“ jako dominantní model je moc sebejisté. Různí agenti používají kombinace DOM, accessibility tree, screenshots, heuristik, browser automation.  
Lepší by bylo:
- „často“
- „v řadě dnešních scénářů“
- „často přes vizuální interpretaci a simulaci ovládání“

Teď je to příliš binární.

### c) „v deklarativním modelu“
> „Z toho čtou agenti už dnes, když stránku obsluhují naslepo, a bude to relevantní i v deklarativním modelu.“

„**bude to relevantní i v deklarativním modelu**“ je plausibilní, ale je to pořád predikce. Bez opory v textu/specu je to trochu silnější, než by muselo být.  
Bezpečnější:
- „pravděpodobně zůstane relevantní i při deklarativním přístupu“
- nebo „je rozumné čekat, že to zůstane relevantní...“

### d) „Práce odvedená dnes se může zahodit.“
> „Náhled ve vývojářské verzi se může změnit. Práce odvedená dnes se může zahodit.“

To je komunikativně silné, ale už skoro straší. Lepší by bylo:
- „může vyžadovat předělání“
Protože „zahodit“ implikuje nulovou přenositelnost. To nemusí být pravda.

## 4) Článek je pořád trochu až moc opatrný — a tím na hraně užitečnosti
Ptal ses přímo, jestli závěr „sledovat, neimplementovat, dělat přístupnost“ není prázdný.  
Verdikt: **na samostatný článek už skoro ano**.

Problém není, že ten závěr je špatně. Problém je, že:

- je správný,
- je bezpečný,
- ale je **tenký**.

Co si čtenář odnese nového navíc oproti jedné dobře napsané sekci ve starším článku?

Reálně jen toto:
1. nejde o formální W3C standardizační fázi, ale Community Group,
2. je to draft + Canary preview,
3. návrh má deklarativní a imperativní část,
4. proto dřívější intuice o náročnosti nemusí platit stejně pro obě části.

To je **jedno kvalitní update okno**, ne nutně plnohodnotný článek.

Jinými slovy: text není prázdný, ale **je obsahově spíš „spec status note“ než robustní článek**.

# DOPORUČENÍ

## 1) Pokud má zůstat samostatně, zúžit ho ještě víc
Buď samostatný text obhaj jako **čistý status update**, nebo ho nesnaž dělat „trochu explain, trochu action, trochu FAQ“. To je přesně to pásmo, kde vzniká kanibalizace.

Co bych nechal:
- úvodní vymezení,
- „Kde ten standard dnes je“,
- „Jak to podle návrhu vypadá“,
- krátký závěr.

Co bych vyhodil jako duplicitní / poloduplicitní:
- celé **„Co má nahradit“**,
- FAQ **„Čím se liší od toho, jak agenti weby obsluhují dnes?“**
- možná i FAQ **„Kde si ověřím, jak je na tom můj web?“**
- zkrátit **„Co s tím dnes dělat“** na 4–5 vět.

Tím z toho bude opravdu „stav návrhu a co z něj plyne“, ne druhý entry-point k témuž tématu.

## 2) Nebo natvrdo: sloučit do lighthouse článku
Když chceš můj přímý názor na bod 1:  
**Obsahově to pořád spíš patří jako výrazný update blok / nová sekce do `/blog/lighthouse-ai-check/`.**

Samostatný článek bych obhájil jen tehdy, pokud:
- cílíš na samostatné dotazy typu „is WebMCP a standard“, „WebMCP status“, „Community Group Report“,
- a upravíš text tak, aby byl výrazně méně překryvný.

Bez toho je to stále SEO/content fragmentace.

## 3) Zpřesnit konkrétní pasáže
Navržené opravy:

- místo  
  > „vyvíjí se společně s Microsoftem na trati W3C“  
  dát  
  **„Google a Microsoft návrh rozpracovávají v návaznosti na diskusi ve W3C Web Machine Learning Community Group.“**  
  nebo podobně.

- místo  
  > „WebMCP je navrhovaný webový standard“  
  dát  
  **„WebMCP je návrh specifikace pro web“**  
  / **„WebMCP je navrhovaný mechanismus pro webové interakce agentů“**

- místo  
  > „Dnes agenti weby většinou obsluhují naslepo“  
  dát  
  **„Dnes agenti weby často obsluhují nepřímo — přes vizuální interpretaci stránky a simulaci ovládání.“**

- místo  
  > „Práce odvedená dnes se může zahodit.“  
  dát  
  **„Práce odvedená dnes může vyžadovat předělání.“**

- místo  
  > „bude to relevantní i v deklarativním modelu“  
  dát  
  **„pravděpodobně to zůstane relevantní i při deklarativním přístupu“**

## 4) Největší přínos textu vytáhni víc dopředu
Nejhodnotnější věta v článku je fakticky tato myšlenka:

> „Pro imperativní půlku to platí. U deklarativní to podle dosavadního návrhu platit nemusí...“

To je skutečný nový insight. Ten bych vytáhl výš, klidně už do answer/perexu.  
Právě tohle dává článku důvod existovat vedle lighthouse textu.

Např. v answer:
- dnes jen říkáš status;
- lepší by bylo dodat i pointu, že **návrh není jen „implementace API“, ale i deklarativní vrstva, která může měnit odhad náročnosti**.

## 5) Co je nejslabší a co bych smazal
### Nejslabší sekce:
**„Co má nahradit“**

Proč:
- vysvětluje obecný princip, který už velmi pravděpodobně řeší starší článek;
- je to nejvíc „explainy“ část;
- má největší sklon k zjednodušení a přepálení.

Nejslabší konkrétní věta v ní:
> „Web o tom neví a nemá jak se vyjádřit“

To je moc absolutní. Web může mít různé technické a právní prostředky, jak interakci omezovat, strukturovat nebo signalizovat; pointa je spíš, že **nemá standardizovaný, nativní mechanismus tohoto typu**. Takhle napsané je to zbytečně černobílé.

**Co bych smazal jako první:**
1. sekci **„Co má nahradit“** celou,
2. FAQ **„Čím se liší od toho, jak agenti weby obsluhují dnes?“**
3. FAQ **„Kde si ověřím, jak je na tom můj web?“** — to už je čistý most do lighthouse článku a posiluje kanibalizaci.

---

# Shrnutí po bodech

## BLOKERY
- **Žádný faktický bloker už nevidím.**

## VAROVÁNÍ
- **Kanibalizace pořád není definitivně vyřešená.** Text je stále blíž „doplněk ke lighthouse článku“ než plně samostatný kus.
- **Terminologie W3C je už většinou správně**, ale „na trati W3C“ a opakované „navrhovaný webový standard“ jsou volnější, než by měly být.
- **Některé formulace jsou pořád moc silné**: „většinou obsluhují naslepo“, „práce se může zahodit“, „bude to relevantní“.
- **Užitečnost je hraniční**: článek něco říká, ale jako samostatný kus je pořád trochu tenký.

## DOPORUČENÍ
- Pokud má zůstat samostatně, **ještě víc oříznout** na čistý status/spec update