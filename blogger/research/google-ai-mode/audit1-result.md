## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je celkově dobře postavený: titul i slug jsou použitelné, `answer` má správnou délku a začíná definicí, rozdíl AI Mode vs. AI Overviews je vysvětlený srozumitelně, CTA vede na konkrétní produkty. Před publikací bych ale opravil několik příliš absolutních formulací a jednu nepřesnost kolem strukturovaných dat / rozšířených výsledků.

---

## Nálezy

### [WARNING] Titulek a úvod slibují „dostat se do AI odpovědí“ příliš jistě

**Citace:**

> `title: "Google AI Mode: jak se dostat do AI odpovědí Googlu 2026"`

a v textu:

> „co konkrétně udělat s obsahem, aby vás Google v AI odpovědích citoval“

**Problém:**  
Formulace zní jako návod s výsledkem „uděláte X → Google vás bude citovat“. To je na hraně overclaimu. V zadání je správně uvedeno, že klasický organik ani struktura nejsou záruka citace. Brand voice má používat bezpečné claimy typu „může zvýšit šanci“.

**Návrh opravy:**

Titulek upravit například na:

> `Google AI Mode: jak zvýšit šanci na citace 2026`

nebo:

> `Google AI Mode: jak připravit obsah pro citace 2026`

V úvodu nahradit:

> „aby vás Google v AI odpovědích citoval“

za:

> „aby měl Google větší šanci váš obsah v AI odpovědích použít a citovat“

---

### [WARNING] Meta description je na horní hraně a obsahuje stejný overclaim

**Citace:**

> `description: "Google AI Mode je nový konverzační režim vyhledávání. Vysvětlíme rozdíl proti AI Overviews, co je query fan-out a jak připravit obsah, aby vás Google citoval."`

**Problém:**  
Délka je cca 158 znaků, tedy těsně pod limitem 160. To je technicky v pořádku, ale velmi snadno se může v šabloně nebo při zobrazení zkrátit. Zároveň „aby vás Google citoval“ opět působí příliš jistě.

**Návrh opravy:**

> `Google AI Mode: rozdíl proti AI Overviews, query fan-out a úpravy obsahu, které mohou zvýšit šanci na citace.`

---

### [WARNING] „Citace v odpovědi, nebo nic“ je příliš absolutní

**Citace:**

> „V AI Mode jste buď citovaní, nebo prakticky neviditelní, protože tu nejsou běžné pozice odkazů.“

a v tabulce:

> `right: "Citace v odpovědi, nebo nic"`

**Problém:**  
Tón je zbytečně dramatický a příliš binární. AI Mode sice omezuje význam klasických organických pozic, ale může obsahovat odkazy, zdrojové karty nebo jiné prvky. „Nebo nic“ je navíc lehce fear-based formulace.

**Návrh opravy:**

V FAQ:

> „V AI Mode má citace v odpovědi výrazně větší význam než klasická pozice odkazu, protože uživatel často pracuje přímo s konverzační odpovědí.“

V tabulce:

> `right: "Citace a zdrojové odkazy v odpovědi"`

nebo:

> `right: "Viditelnost hlavně přes citace v odpovědi"`

---

### [WARNING] „Výsledkovou stránku nahradí konverzací“ zjednodušuje fungování AI Mode

**Citace:**

> „AI Mode je samostatný režim, který výsledkovou stránku nahradí konverzací.“

**Problém:**  
Jako edukativní zkratka to funguje, ale fakticky je lepší být přesnější: AI Mode není jen „náhrada SERPu“, ale samostatné konverzační rozhraní s AI odpovědí, navazujícími dotazy a zdrojovými odkazy.

**Návrh opravy:**

> „AI Mode je samostatné konverzační rozhraní, kde AI odpověď a navazující otázky hrají větší roli než klasický seznam organických výsledků.“

---

### [WARNING] Strukturovaná data jsou popsána jako podpůrná správně, ale část o rozšířených výsledcích je zavádějící

**Citace:**

> „Strukturovaná data nejsou podle Googlu pro generativní odpovědi povinná, ale pomáhají strojové čitelnosti i klasickým rozšířeným výsledkům.“

**Problém:**  
První část je správně. Problém je „pomáhají … klasickým rozšířeným výsledkům“ bez omezení. FAQPage a HowTo mají v Googlu omezené / změněné zobrazování rozšířených výsledků a nelze naznačovat plošný přínos.

**Návrh opravy:**

> „Strukturovaná data nejsou podle Googlu pro generativní odpovědi povinná, ale mohou pomoct strojové čitelnosti obsahu a tam, kde je Google podporuje, i vybraným rozšířeným výsledkům. Musí odpovídat viditelnému obsahu a nejsou spínačem citace.“

---

### [WARNING] Doporučení „Article, FAQPage, HowTo“ potřebuje podmínku použití

**Citace:**

> „Nasaďte strukturovaná data (Article, FAQPage, HowTo) a sekci s častými otázkami.“

a:

> `desc: "Article, FAQPage, HowTo; musí odpovídat viditelnému textu na stránce."`

**Problém:**  
Správně uvádíte, že data musí odpovídat viditelnému textu. Chybí ale podmínka, že typ strukturovaných dat se má použít jen tehdy, když stránka daný obsah skutečně má. Jinak to může vést k nasazování HowTo/FAQPage mechanicky na každý článek.

**Návrh opravy:**

> „Použijte jen relevantní strukturovaná data: Article pro článek, FAQPage pro skutečně viditelné otázky a odpovědi, HowTo pouze tam, kde stránka obsahuje konkrétní postup krok za krokem.“

---

### [WARNING] „AI Mode cituje i mimo top 10“ je správný směr, ale formulace zní moc kategoricky

**Citace:**

> „AI Mode cituje i mimo top 10, pokud úsek lépe odpovídá na podotázku.“

a:

> „Citovaný úsek může pocházet i ze stránky, která není v klasickém organickém top 10.“

**Problém:**  
Druhá formulace je bezpečná. První v „Častých chybách“ zní obecněji a bez „může“. Vzhledem k tomu, že zadání výslovně říká neuvádět sporná čísla a nepřehánět vztah organiku a citací, doporučuji držet opatrnější modalitu všude.

**Návrh opravy:**

> „AI Mode může citovat i úsek mimo top 10, pokud lépe odpovídá na konkrétní podotázku.“

---

### [TIP] „AI robotům“ nahraďte přesnější formulací

**Citace:**

> „Jak technicky zpřístupnit web AI robotům řeší návod na robots.txt pro AI…“

**Problém:**  
Zakázané je hlavně „crawler/bot“ bez kontextu; „AI robotům“ není přímo zakázaný termín, ale je nejasný. Lepší je použít doporučený slovník.

**Návrh opravy:**

> „Jak technicky zpřístupnit web vyhledávacím robotům a AI systémům řeší návod na robots.txt pro AI…“

---

### [TIP] Slovo „nový“ v description může rychle zastarat

**Citace:**

> „Google AI Mode je nový konverzační režim vyhledávání.“

**Problém:**  
K datu 2026-05-25 je dostupnost v Česku od října 2025. „Nový“ ještě není vyloženě špatně, ale v evergreen článku rychle zastarává.

**Návrh opravy:**

> „Google AI Mode je konverzační režim vyhledávání…“

Bez „nový“.

---

### [TIP] „Gemini“ raději formulovat jako rodinu modelů

**Citace:**

> „Google AI Mode je konverzační režim vyhledávání postavený na modelu Gemini…“

a:

> `label: "model, na kterém Google AI Mode běží"`

**Problém:**  
Věcně odpovídá zadání. Pro větší odolnost vůči budoucím změnám bych ale nepsal „model“ v jednotném čísle. Google může používat různé verze / varianty Gemini.

**Návrh opravy:**

> „postavený na modelech rodiny Gemini“

a ve stats:

> `label: "rodina modelů, na které Google AI Mode staví"`

---

### [TIP] „organik“ je srozumitelný pro SEO publikum, ale méně pro vzdělávací článek

**Citace:**

> „Stavte na kvalitním organiku“

> „Kvalitní organik je základ…“

**Problém:**  
Není to zakázaný výraz, ale je to interní SEO slang. Pro vzdělávací tón bude čistší „organické vyhledávání“ nebo „klasické SEO“.

**Návrh opravy:**

> „Stavte na kvalitním organickém vyhledávání“

nebo:

> „Kvalitní klasické SEO je základ…“

---

### [TIP] CTA je správně konkrétní, ale může víc navázat na téma AI Mode

**Citace:**

> „Když chcete celý web připravit na AI vyhledávání podle hotové předlohy, pomůže AI SEO Wireframe Pack za 1 490 Kč. Pro plán na míru je tu produktový AI SEO audit za 9 990 Kč.“

**Hodnocení:**  
CTA splňuje zadání: vede na konkrétní produkty, ne na generické „kontaktujte nás“.

**Drobný návrh zlepšení:**

> „Pokud chcete podle tohoto návodu upravit strukturu klíčových stránek pro Google AI Mode, použijte AI SEO Wireframe Pack za 1 490 Kč. Pokud potřebujete zkontrolovat konkrétní web, navazuje na něj AI SEO audit za 9 990 Kč.“

---

## Co je v pořádku

- `answer` má 48 slov, začíná definicí a dává smysl samostatně.  
- Titulek má cca 56 znaků a klíčové slovo je na začátku.  
- Slug `google-ai-mode` je smysluplný.  
- Meta description je technicky v limitu, jen potřebuje zjemnit claim.  
- FAQ otázky jsou reálné a odpovědi jsou samostatně pochopitelné.  
- Rozdíl AI Mode vs. AI Overviews je vysvětlený dobře.  
- Tvrzení o dostupnosti pro české uživatele od října 2025 odpovídá zadání.  
- Nejsou použité zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani „backlink profil“.