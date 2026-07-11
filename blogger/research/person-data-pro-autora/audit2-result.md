**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

## Nálezy

### [BLOCKER] Overclaim: „sloučí autora do jedné entity“
> `answer`: „...stabilní @id, který u všech článků autora **sloučí do jedné entity**.“  
> Úvod: „...stabilní `@id`, který u všech článků **sloučí autora do jedné entity**.“  
> Stat: „1 @id — stabilní @id opakovaný ve všech článcích **sloučí autora do jedné entity**“  
> H2 / text: „...Když má autor na každé stránce jiný identifikátor, stroje ho **nesloučí do jedné entity**.“

Tohle je pořád formulované příliš deterministicky. `@id` nepůsobí jako záruka „sloučení“, jen dává silný konzistentní identifikátor, který **může zvýšit šanci**, že systémy autora správně propojí napříč stránkami.

**Návrh opravy:**  
Všude nahradit formulacemi typu:
- „...pomáhá systémy vést k tomu, aby autora spojily jako jednu entitu“
- „...zvyšuje šanci na konzistentní propojení autora napříč články“
- „...usnadňuje rozpoznání, že jde o stejného autora“

---

### [BLOCKER] Overclaim: „posílit jeho důvěryhodnost“
> `answer`: „...a posílit jeho důvěryhodnost (E-E-A-T).“  
> Úvod: „...a pomůžete tak Googlu i AI rozpoznat autora jako entitu a **posílit jeho důvěryhodnost**.“

Strukturovaná data sama o sobě důvěryhodnost „neposilují“; spíš ji **pomáhají strojům lépe vyhodnotit nebo pochopit**, pokud už je podložená obsahem a reputačními signály.

**Návrh opravy:**  
- „...a pomáhají AI i Googlu lépe pochopit, kdo je autorem a jaké signály odbornosti se k němu vážou.“
- případně „...mohou podpořit strojové vyhodnocení důvěryhodnosti autora.“

---

### [BLOCKER] Faktuálně sporné navázání E-E-A-T přímo na Person data
> FAQ: „V éře AI, kde váží důvěryhodnost autora (E-E-A-T), tato data technicky popisují, kdo obsah píše, a doplňují signály, které mohou důvěryhodnost autora podpořit.“  
> Text: „To je přesně signál, který u citací a doporučení váží.“

E-E-A-T není technická metrika ani něco, co by Person data sama „dodávala“. A věta o tom, že to je „přesně signál, který u citací a doporučení váží“, je bez zdroje příliš sebejistá.

**Návrh opravy:**  
- „...doplňují technický popis autora, který může pomoci systémům propojit obsah s dalšími signály o autorovi.“
- „...takový popis může zvýšit šanci, že systémy autora správně identifikují při interpretaci obsahu.“

---

### [WARNING] Anglicismus mimo povolené technické názvy: „wireframy“
> CTA: „...obsahuje **wireframy** stránek...“

V zadání nejsou wireframy mezi povolenými technickými názvy. Pro brand voice je to zbytečný anglicismus.

**Návrh opravy:**  
- „návrhy stránek“
- „osnovy stránek“
- případně „návrhy rozložení stránek“

---

### [WARNING] Title není ideálně SEO-formátovaný pro cílové KW
> `title`: `"Person: strukturovaná data pro autora 2026"`

Titulek je věcně v pořádku, ale pro zadaná KW by byl silnější výraz s přesnější shodou typu „Person schema autor / autor strukturovaná data / person json-ld“. Současná verze nezačíná nejhledanější českou formulací a „Person:“ na začátku může být slabší pro CTR.

**Návrh opravy:**  
Zachovat smysl, ale posunout KW dopředu, např.:
- „Autor strukturovaná data: Person JSON-LD 2026“
- „Person JSON-LD pro autora: sameAs a @id 2026“

---

### [WARNING] Meta description obsahuje lehký overclaim
> `description`: „...říkají AI a Googlu, kdo je autor.“

To je zjednodušení přijatelné v marketingu, ale v tomto článku už několikrát narážíte na přesnost. Lepší je méně absolutní formulace.

**Návrh opravy:**  
- „Person strukturovaná data (JSON-LD) pomáhají AI a Googlu lépe pochopit, kdo je autor...“

---

### [WARNING] `answer` a první odstavec ještě nejsou úplně ideální jako samostatná definice
> `answer`: „Person je typ strukturovaných dat, kterým strojově popíšete autora — jméno, roli, profily a oblasti expertízy. Pomáhá Googlu i AI rozpoznat autora jako entitu a posílit jeho důvěryhodnost (E-E-A-T)...“  
> První odstavec: „Person je typ strukturovaných dat, kterým strojově popíšete autora...“

Fungují dobře, ale kazí je dva problémy:
1. overclaim „posílit důvěryhodnost“
2. trochu moc rychlý skok do entity/E-E-A-T bez ukotvení, že jde hlavně o **technický popis autora pro vyhledávače a AI systémy**

**Návrh opravy:**  
První 40–60 slov by mělo stát samo o sobě zcela čistě:
- „Person je typ strukturovaných dat ze Schema.org, kterým strojově popíšete autora webového obsahu — jeho jméno, roli, profily a oblasti expertízy. Pomáhá AI i Googlu lépe pochopit, kdo obsah vytvořil, a propojit autora s jeho dalšími veřejnými profily a články.“

---

### [WARNING] Formulace „jednoznačně identifikují“ je místy moc silná
> FAQ / howto / text: „...URL profilů, které autora **jednoznačně identifikují**...“

V praxi mohou pomoci s identifikací, ale ne vždy „jednoznačně“, zejména u slabých nebo neudržovaných profilů.

**Návrh opravy:**  
- „...které autora pomáhají spolehlivě identifikovat“
- „...které identifikaci autora napomáhají“

---

### [WARNING] JSON-LD příklad `Article` je technicky příliš minimální pro tutorial
> ```json
> {
>   "@context": "https://schema.org",
>   "@type": "Article",
>   "headline": "Název článku",
>   "author": { "@id": "https://vasweb.cz/#autor-jan-novak" },
>   "publisher": { "@type": "Organization", "name": "Vaše firma s.r.o." }
> }
> ```

Není to vyloženě chyba, ale jako tutorial je ukázka hraničně osekaná. U `publisher` bývá v praxi vhodné mít samostatný objekt organizace, ideálně také s `@id` a často i `url`/`logo`. Jinak může čtenář získat dojem, že tohle je „doporučený plný stav“.

**Návrh opravy:**  
Doplnit krátkou větu pod snippet:
- „Jde o zjednodušený příklad. V praxi bývá vhodné mít i samostatně definovaného vydavatele (Organization), ideálně konzistentně napříč webem.“

---

### [WARNING] JSON-LD příklad `Person`: `sameAs` obsahuje i vlastní autorskou URL
> ```json
> "sameAs": [
>   "https://www.linkedin.com/in/jan-novak/",
>   "https://www.wikidata.org/wiki/Q000000",
>   "https://vasweb.cz/o-nas/jan-novak/"
> ]
> ```

To není nutně neplatné, ale je to matoucí. Vlastní profil na stejném webu se běžně uvádí spíš jako `url`; `sameAs` se typicky používá pro jiné veřejné profily nebo referenční identity. V tutorialu bych to takto nenechával bez vysvětlení.

**Návrh opravy:**  
Buď:
- odstranit autorskou URL ze `sameAs`, nebo
- přidat vysvětlení, že hlavní profil autora na vlastním webu patří primárně do `url`, zatímco `sameAs` míří hlavně na další veřejné profily.

---

### [TIP] `worksFor` může být fakticky nepřesné u externích autorů
> Tabulka / snippet: `jobTitle a worksFor` — „Pozice autora a organizace, pro kterou pracuje“

Není to chyba, ale jako návod by měl upozornit, že `worksFor` se hodí jen když je vztah pravdivý. U hostujících, freelance nebo externích autorů nemusí být správně.

**Návrh opravy:**  
Doplnit krátké upřesnění:
- „`worksFor` používejte jen tehdy, pokud autor pro danou organizaci skutečně pracuje nebo je s ní relevantně spojen.“

---

### [TIP] „AI ani Google autora těžko odliší“ je zbytečně silné
> „Bez odkazů na profily AI ani Google autora těžko odliší od jmenovců.“

Smysl je správný, ale opět moc absolutní.

**Návrh opravy:**  
- „Bez odkazů na profily může být pro AI i Google těžší odlišit autora od jmenovců.“

---

### [TIP] FAQ odpověď o českých autorech je užitečná, ale „Do sameAs dejte český LinkedIn profil autora“ zní příliš direktivně
> „Do sameAs dejte český LinkedIn profil autora...“

LinkedIn není povinný a ne každý autor ho má nebo potřebuje.

**Návrh opravy:**  
- „Do sameAs přidejte relevantní veřejné profily autora, typicky například LinkedIn; u známějších osob může dávat smysl i položka na Wikidatech, pokud existuje.“

---

### [TIP] CTA je správně konkrétní
> „AI SEO Wireframe Pack za 1 490 Kč... / AI SEO audit za 9 990 Kč...“

Tohle je v souladu se zadáním: konkrétní produkt i cena jsou uvedené. Jen opravit „wireframe“ anglicismus.

---

## Krátké potvrzení toho, co je teď dobře

- **Slug** je po opravě lepší a bez zakázaného „schema“.  
- **CTA** už je konkrétní a ne generické.  
- **Druhý snippet `Article`** je správný směr.  
- **Hedging u ~40 %** je výrazně bezpečnější než dřív.  
- **Interní odkazy** dávají smysl a podporují tutorialový kontext.  
- **FAQ** pokrývá reálné dotazy a většinou funguje samostatně.

## Shrnutí
Článek je po prvním kole výrazně lepší, ale pořád v něm zůstává několik **opakovaných deterministických tvrzení** hlavně kolem `@id`, „sloučení do entity“ a „posílení důvěryhodnosti“. To jsou pro mě před publikací hlavní opravy. Po změkčení těchto formulací a drobném vyčištění JSON-LD příkladu bude článek velmi blízko publikovatelnému stavu.