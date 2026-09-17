## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je tematicky dobrý, má relevantní zdroje, správné CTA a většinou drží bezpečný tón. Před publikací ale potřebuje opravit několik věcných zkratek: hlavně absolutní tvrzení o AI systémech, testování přes zdrojový kód a formulaci hranice maskování. Tyto zkratky mohou čtenáře navést k chybnému technickému závěru.

---

## Nálezy

### [BLOCKER] Nedoložené zobecnění na „systémy s AI“

**Problémové místo:**

> „U systémů s AI je to stejné, jen bez dokumentace.“

**Proč je to problém:**  
Dodané podklady k OpenAI říkají pouze to, že dokumentace popisuje identity `OAI-SearchBot`, `GPTBot` a `ChatGPT-User` a **nepíše nic o přihlašování ani obsahu za bránou**. To nestačí na tvrzení, že „u systémů s AI je to stejné“. Navíc `ChatGPT-User` je vyvolaný uživatelem a OpenAI výslovně uvádí, že u něj pravidla `robots.txt` nemusí platit. Článek musí rozlišit automatické procházení, trénink, vyhledávání a uživatelem vyvolané otevření stránky.

**Návrh opravy:**

> „U AI systémů je bezpečné počítat s tím, že automaticky procházející roboti se sami nepřihlásí a formulář nevyplní. Dokumentace OpenAI ale k obsahu za bránou ani k přihlašování žádné pravidlo neuvádí; popisuje jen různé identity robotů a zvlášť uživatelem vyvolané otevření stránky.“

---

### [BLOCKER] Chybný závěr z testu bez JavaScriptu / zdrojového kódu

**Problémové místo:**

> „Stáhněte stránku bez prohlížeče, odhlášeně a bez JavaScriptu — třeba příkazem curl nebo v prohlížeči přes zobrazení zdrojového kódu. Co v něm není, to nemá ani stroj.“

**Proč je to problém:**  
Tohle je technicky nepravdivé. Google umí stránku vykreslit a Search Console ukazuje i vykreslenou verzi přes Google-InspectionTool. Obsah, který není v původním HTML ani v `curl`, může být po vykreslení JavaScriptu viditelný pro Google. Test přes `curl` je užitečný jako konzervativní kontrola, ale není důkaz toho, co „nemá ani stroj“.

**Návrh opravy:**

> „Stáhněte stránku odhlášeně bez JavaScriptu, například přes `curl`, a berte to jako konzervativní kontrolu základního HTML. Pak výsledek porovnejte se Search Console a vykreslenou verzí stránky. Pokud podstata není ani v HTML, ani ve vykreslené verzi, nemá ji Google z dané stránky odkud vzít.“

---

### [BLOCKER] Nepřesná hranice maskování — chybí záměr manipulovat a klamat

**Problémové místo:**

> „Vidí robot totéž co člověk s přístupem? Jinak jste u maskování, ne u brány podle pravidel.“

**Proč je to problém:**  
Google definuje maskování jako předkládání jiného obsahu uživatelům a vyhledávačům **se záměrem manipulovat hodnocením a uvést uživatele v omyl**. Ne každá odlišnost automaticky znamená maskování. Může jít také jen o technicky nepřístupný obsah, špatně nastavenou bránu nebo obsah, který se nebude dobře indexovat. Vynechaná podmínka záměru dělá větu nepřesnou.

**Návrh opravy:**

> „Dostává Google stejný obsah jako člověk, který má k materiálu přístup? Pokud ne, nejde o bránu podle pravidel. A pokud web zároveň ukazuje vyhledávači jinou verzi se záměrem manipulovat hodnocením nebo klamat uživatele, dostává se do rizika maskování.“

---

### [WARNING] Krátká odpověď nezačíná definicí, ale negativním tvrzením

**Problémové místo:**

> `answer: "Obsah za formulářem, registrací nebo přihlášením systémy, které web procházejí samy, nepřečtou — ..."`

**Proč je to problém:**  
Délka je v pořádku, ale pravidlo pro citovatelnost říká, že krátká odpověď má začínat definicí, ne negací. Aktuální answer začíná rovnou tím, co systémy nepřečtou.

**Návrh opravy:**

> „Obsah za formulářem je část webu dostupná až po registraci, přihlášení nebo odeslání údajů. Systémy, které web procházejí samy, ji obvykle nepřečtou: nemají přihlašovací údaje a formuláře nevyplňují. Google bránu nepovažuje za maskování jen při splnění svých podmínek. Podstata proto patří veřejně.“

---

### [WARNING] Absolutní tvrzení o citacích v AI odpovědích

**Problémové místo:**

> „Firma, která má nejlepší materiál schovaný za e-mailem, pak v odpovědích AI není citovaná z vlastního zdroje — citovaný je ten, kdo o tématu napsal veřejně.“

**Proč je to problém:**  
Je to příliš absolutní. Článek nemůže garantovat, kdo bude nebo nebude citovaný. AI systém může citovat veřejnou landing page, jiný zdroj, starší kopii, agregátor nebo vůbec nikoho. Bezpečný claim má být „snižuje šanci“, ne jistota.

**Návrh opravy:**

> „Firma, která má klíčový materiál schovaný za e-mailem, snižuje šanci, že AI odpověď použije její vlastní zdroj. Častěji se pak opře o veřejné stránky, které stejnou otázku vysvětlují dostupně.“

---

### [WARNING] Google link guidance je formulovaná příliš absolutně

**Problémové místo:**

> „Google k procházení odkazů uvádí, že běžně projde jen odkaz zapsaný jako `<a href>` a že odkazy v jiných podobách jeho prohledávače nezpracují.“

**Proč je to problém:**  
Primární zdroj říká „Generally, Google can only crawl…“ a „Most links in other formats won’t be parsed…“. Článek správně uvádí podstatu, ale ztrácí důležité zmírnění „obecně“ a „většina“. To je přesně typ podmínky, která má u tvrzení o Google zůstat.

**Návrh opravy:**

> „Google uvádí, že obecně dokáže procházet odkaz tehdy, když je zapsaný jako prvek `<a>` s atributem `href`. Většinu odkazů v jiných formátech jeho vyhledávací roboti nevyparsují a nevytěží.“

---

### [WARNING] Závěr „stránka po formuláři prakticky neexistuje“ potřebuje podmínky

**Problémové místo:**

> „Stránka, na kterou se dostanete až po odeslání formuláře, tedy pro něj prakticky neexistuje.“

**Proč je to problém:**  
Pokud URL existuje a je odkazovaná jinde, Google ji může najít. Problém je spíš v tom, že bez přístupu neuvidí obsah za bránou nebo dostane jen formulář/upoutávku. Současná formulace směšuje dohledatelnost URL a dostupnost obsahu.

**Návrh opravy:**

> „Pokud se URL vytvoří až po odeslání formuláře a není nikde běžně odkazovaná, Google ji nemusí najít. A pokud se na dostupné adrese bez přístupu zobrazí jen formulář nebo upoutávka, nemá z ní obsah za bránou.“

---

### [WARNING] Strukturovaná data jsou místy prezentovaná jako jisté „odlišení“

**Problémová místa:**

> „... vlastností `isAccessibleForFree`, kterými bránu od maskování odliší.“

> „U placeného obsahu existují strukturovaná data, kterými se brána od maskování odliší.“

**Proč je to problém:**  
Google říká, že strukturovaná data **pomáhají** odlišit placený obsah od maskování. Neznamená to automatickou garanci bezproblémové indexace ani automatické „odlišení“ v každém případě.

**Návrh opravy:**

> „... strukturovaná data s vlastností `isAccessibleForFree`, která Googlu pomáhají bránu od maskování odlišit.“

A ve shrnutí:

> „U placeného obsahu existují strukturovaná data, která Googlu pomáhají poznat, která část stránky je za bránou.“

---

### [WARNING] Flexible Sampling čísla jsou správná, ale formulace má být přesnější

**Problémové místo:**

> „u zpravodajského obsahu doporučuje zpřístupnit šest až deset článků na uživatele za měsíc, jako výchozí bod deset.“

**Proč je to problém:**  
Zdroj přesněji říká, že u většiny **denních zpravodajských vydavatelů** Google očekává hodnotu mezi 6 a 10 články měsíčně a jako výchozí bod doporučuje 10 článků měsíčně pro uživatele z Google Search. Článek to má skoro správně, ale „doporučuje šest až deset“ je mírné zjednodušení.

**Návrh opravy:**

> „U většiny denních zpravodajských vydavatelů Google očekává měsíční limit mezi 6 a 10 články na uživatele; jako výchozí bod pro testování doporučuje 10 článků měsíčně pro uživatele z Google Search.“

---

### [WARNING] Vymyšlené absolutní číslo „nula leadů a nula citací“

**Problémové místo:**

> „Získáte tak nulu leadů a nulu citací.“

**Proč je to problém:**  
Web nechce vymyšlená čísla. „Nula“ je zde rétorická zkratka, ale v auditovaném obsahu působí jako nedoložený výsledek. Navíc je to zbytečně tvrdé a prodejní.

**Návrh opravy:**

> „Snížíte tím šanci na leady i na citace, protože veřejná stránka nenabízí dostatečný důvod k odevzdání e-mailu ani dost obsahu pro odpověď.“

---

### [WARNING] SEO: `title` má jen 41 znaků, i když `seoTitle` je v pořádku

**Problémové místo:**

> `title: "Obsah za formulářem: co z něj AI nepřečte"`

**Proč je to problém:**  
Zadané pravidlo říká titulek 50–60 znaků s klíčovým slovem vepředu. `seoTitle` má vhodnou délku a klíčové slovo na začátku, ale hlavní `title` je krátký. Pokud se `title` používá jako H1 nebo v kartách článku, je slabší a méně konkrétní.

**Návrh opravy například:**

> `title: "Obsah za formulářem a AI: co systémy nepřečtou"`

Nebo:

> `title: "Obsah za formulářem: co AI neuvidí a co zveřejnit"`

---

### [TIP] Zmírnit hyperbolu „nejlepší materiál na trhu“

**Problémová místa:**

> „Firma, která má nejlepší materiál schovaný za e-mailem...“

> „Za bránou může být ten nejlepší materiál na trhu.“

**Proč je to problém:**  
Nejde o zakázaný claim o značce, ale „nejlepší“ je zbytečně marketingové a absolutní. Brand voice má vysvětlovat, ne tlačit.

**Návrh opravy:**

> „Firma, která má důležitý materiál schovaný za e-mailem...“

> „Za bránou může být velmi užitečný materiál. Pro stroj ale zůstane nedostupný, pokud veřejná část nenese podstatu.“

---

### [TIP] U `ChatGPT-User` doplnit, co z toho neplyne

**Problémové místo:**

> „U robotů vyvolaných uživatelem navíc OpenAI uvádí, že pravidla v souboru robots.txt ‚nemusí platit‘, protože akci spustil člověk...“

**Proč je to problém:**  
Věta je zdrojově správná, ale čtenář si ji může špatně vyložit tak, že ChatGPT-User umí obejít formulář nebo přihlášení. To zdroj neříká.

**Návrh doplnění:**

> „To ale neznamená, že by dokumentace slibovala přihlášení, vyplnění formuláře nebo přístup k neveřejnému obsahu.“

---

### [TIP] CTA je věcně správné, ale může přesněji popsat Pack

**Problémové místo:**

> „AI SEO Wireframe Pack za 1 490 Kč ukazuje na drátěných modelech, co má být na veřejné stránce a v jakém pořadí...“

**Hodnocení:**  
Název i cena odpovídají zadání. CTA míří na Pack, což je u tutoriálu v pořádku. Doporučuji jen zpřesnit, že jde o PDF a sedm typů stránek, aby claim přesně odpovídal produktu.

**Návrh opravy:**

> „[AI SEO Wireframe Pack za 1 490 Kč](/pack/) je PDF se 7 drátěnými modely stránek. Ukáže, co má být na veřejné stránce a v jakém pořadí — od prodejní stránky po článek na blogu.“

---

## Co je v pořádku

- `seoTitle` má klíčové slovo na začátku a vhodnou délku.  
- `description` má 142 znaků, je konkrétní a nepřehání.  
- Slug `obsah-za-formularem-a-ai` je smysluplný.  
- Interní odkazy jsou relevantní: ceny, chatbot, roboti vyvolaní uživatelem, test viditelnosti.  
- CTA vede na konkrétní produkt s kanonickým názvem a cenou.  
- Článek správně rozlišuje veřejnou podstatu a chráněnou formu; to je pro B2B weby i e-shopy prakticky použitelné.