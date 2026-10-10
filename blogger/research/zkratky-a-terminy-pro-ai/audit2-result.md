## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Faktické vypořádání z 1. kola v zásadě sedí: označené formulace typu „ve výsledcích vyhledávání“, „FAQ se zobrazuje“, „dvě třetiny“ nebo „úvod nevidí“ v textu nezůstaly. Důvody u nezapracovaných W11 a W12 přijímám, protože brief uvádí konkrétní interní oporu.

Článek ale v aktuální verzi porušuje vlastní hlavní pravidlo: nerozepisuje zkratky v každé samostatné sekci, FAQ ani komponentách. To je pro tento konkrétní článek zásadní problém důvěryhodnosti.

---

## Nálezy

### [BLOCKER] Článek sám nedodržuje pravidlo „zkratku rozepsat v každé sekci“

**Problémová místa:**

> „vidí „GSC“ nebo „AEO“ bez vysvětlení.“

> „U systémů, které odpovídají z dokumentů po úsecích (anglicky RAG)…“

> „Každá odpověď FAQ a krátká odpověď“

> „do sekcí webu o SEO, GEO, AEO a AIO“

> „AIO je rámec i funkce Googlu, AEO je i celní status.“

> „Odpověď FAQ může čtenář i nástroj AI zpracovat odděleně…“

Článek výslovně radí rozepisovat zkratky při prvním použití v každé sekci, ale sám to nedělá v úvodu, FAQ, checklistu, tabulkové metodice ani v komponentách „chyby“. To je zvlášť problematické, protože jde o hlavní tezi článku.

**Návrh opravy:**

Projít celý soubor po sekcích a při prvním výskytu rozepsat zejména:

- Google Search Console (GSC)
- Answer Engine Optimization (AEO)
- AI Optimization (AIO)
- Generative Engine Optimization (GEO)
- optimalizace pro vyhledávače (SEO)
- stránka s výsledky vyhledávání (SERP)
- míra prokliku (CTR)
- Web Content Accessibility Guidelines (WCAG)
- retrieval-augmented generation (RAG) / generování odpovědi nad dohledanými úseky
- často kladené otázky (FAQ)

Konkrétní opravy například:

- Úvod:  
  **Místo:** „vidí „GSC“ nebo „AEO“ bez vysvětlení.“  
  **Navrhnout:** „vidí „Google Search Console (GSC)“ nebo „Answer Engine Optimization (AEO)“ bez vysvětlení.“

- RAG sekce:  
  **Místo:** „U systémů, které odpovídají z dokumentů po úsecích (anglicky RAG)…“  
  **Navrhnout:** „U systémů typu retrieval-augmented generation (RAG), tedy generování odpovědi nad dohledanými úseky dokumentů…“

- Checklist:  
  **Místo:** „Každá odpověď FAQ a krátká odpověď“  
  **Navrhnout:** „Každá odpověď v často kladených otázkách (FAQ) a krátká odpověď“

- Metodika měření:  
  **Místo:** „do sekcí webu o SEO, GEO, AEO a AIO“  
  **Navrhnout:** „do sekcí webu o optimalizaci pro vyhledávače (SEO), Generative Engine Optimization (GEO), Answer Engine Optimization (AEO) a AI Optimization (AIO)“

Stejnou kontrolu je potřeba udělat i ve frontmatteru `faq`, v tabulce a ve vlastnostech komponent `Checklist` / `Mistake`.

---

### [WARNING] Odpovědi ve FAQ nejsou sebestačné bez otázky

**Problémová místa:**

> `a: "Při prvním použití v každé sekci ano…"`

> `a: "Zkratky, které vaši čtenáři znají lépe než plný název…"`

> `a: "Plný název a hned za ním zkratku v závorce…"`

> `a: "Jen jako doplněk."`

Odpovědi začínají zkratkou, elipsou nebo reakcí na otázku. Pokud je nástroj AI nebo vyhledávač převezme samostatně, nedávají plný smysl bez otázky.

**Návrh opravy:**

Přepsat začátky odpovědí tak, aby každá odpověď stála sama:

- **Místo:** „Při prvním použití v každé sekci ano…“  
  **Navrhnout:** „Zkratku rozepište při prvním použití v každé sekci, pokud ji nezná každý z vašich čtenářů…“

- **Místo:** „Zkratky, které vaši čtenáři znají lépe než plný název…“  
  **Navrhnout:** „Nerozepisujte zkratky, které vaši čtenáři znají lépe než plný název, například DPH nebo PDF…“

- **Místo:** „Plný název a hned za ním zkratku v závorce…“  
  **Navrhnout:** „Zkratku při prvním použití zapište jako plný název a hned za něj zkratku v závorce, například Google Search Console (GSC)…“

- **Místo:** „Jen jako doplněk.“  
  **Navrhnout:** „Značka `<abbr>` v HTML je jen doplněk, ne náhrada rozepsání zkratky přímo v textu.“

---

### [WARNING] Krátká odpověď nezačíná definicí

**Problémové místo:**

> `answer: "Zkratku rozepište při prvním použití v každé sekci…"`

Krátká odpověď má 45 slov, takže délkově vyhovuje. Nezačíná ale definicí, nýbrž pokynem. Zadání pro citovatelnost říká, že krátká odpověď má začínat definicí, ne negací ani rovnou instrukcí.

**Návrh opravy:**

Například:

> `answer: "Zkratka je zkrácený zápis výrazu, který má čtenář v dané sekci pochopit i bez úvodu stránky. Při prvním použití v každé sekci ji rozepište, zkratky s více významy rozepisujte vždy, odborný termín vysvětlete jednou větou a pro každý pojem držte na celém webu jediný název."`

Má 47 slov a dává samostatný smysl.

---

### [WARNING] Úvodní věta má nepřirozenou syntaxi

**Problémové místo:**

> „Kdo přijde rovnou do prostřední sekce — z odkazu, z obsahu stránky, nebo jako nástroj AI, který si vzal jen jeden úsek —, vidí „GSC“ nebo „AEO“ bez vysvětlení.“

Spojení „kdo přijde … jako nástroj AI“ zní, jako by návštěvníkem byl nástroj AI. Navíc je zde typograficky těžkopádná čárka po vložené pomlčce: „—,“.

**Návrh opravy:**

> „Kdo přijde rovnou do prostřední sekce — z odkazu, z obsahu stránky nebo přes nástroj umělé inteligence, který pracuje jen s jedním úsekem — uvidí zkratky jako Google Search Console (GSC) nebo Answer Engine Optimization (AEO) bez vysvětlení.“

Tím se zároveň opraví i nerozepsané zkratky v úvodu.

---

### [WARNING] V článku se míchají pojmy „sekce“, „pasáž“ a „úsek“ bez jasného vymezení

**Problémová místa:**

> „zkratku rozepište při prvním použití v každé sekci“

> „Proč zkratka z úvodu do pasáže nedojde“

> „který si vzal jen jeden úsek“

> „odpovídají z dokumentů po úsecích“

> „každý úsek pod nadpisem H2“

Text používá „sekce“, „pasáž“ a „úsek“ téměř jako synonyma. Pro odborníka je pointa srozumitelná, ale pro cílového čtenáře — autor obsahu, marketér, majitel webu — to může působit neukotveně.

**Návrh opravy:**

Na začátku článku doplnit jednu větu, která pojmy sjednotí:

> „V tomhle článku říkáme sekce části stránky pod jedním nadpisem H2; slova pasáž a úsek používáme obecně pro část textu, kterou může člověk nebo nástroj umělé inteligence číst samostatně.“

Případně v celém článku důsledně používat „sekce“ a „úsek“ nechat jen tam, kde se mluví o systémech RAG.

---

### [WARNING] Jeden H2 neříká výsledek, jen slibuje měření

**Problémové místo:**

> `## Kolik <span class="hl">sekcí bez vysvětlení</span> má náš web — <strong>vlastní měření</strong>`

H2 je srozumitelný, ale pro skenování by měl nést pointu. Tady čtenář zjistí výsledek až v textu pod nadpisem. V článku, který stojí na vlastním měření, je lepší dát hlavní číslo už do nadpisu.

**Návrh opravy:**

> `## Náš web má <span class="hl">201 sekcí bez vysvětlení zkratky</span> — <strong>vlastní měření</strong>`

Nebo kratší varianta:

> `## Ve 201 sekcích <span class="hl">zkratka chybí vysvětlení</span>`

---

### [TIP] CTA je relevantní, ale link text ohýbá kanonický název produktu

**Problémové místo:**

> „Wireframy a šablony textů pro sedm typů stránek najdete v **[AI SEO Wireframe Packu](/pack/)** — PDF návodu za **1 490 Kč včetně DPH**.“

CTA směřuje na správný produkt a cena je mimo text odkazu, což je dobře. Jen link text mění kanonický název produktu přidáním české koncovky „Packu“.

**Návrh opravy:**

> „Wireframy a šablony textů pro sedm typů stránek najdete v produktu **[AI SEO Wireframe Pack](/pack/)**. Jde o PDF návod za **1 490 Kč včetně DPH**.“

Tím zůstane název produktu přesný a cena dál mimo odkaz.

---

### [TIP] SEO metadata jsou v pořádku

- `seoTitle`: 53 znaků, klíčové slovo „Zkratky v textu“ je na začátku.
- `description`: přibližně 150 znaků, odpovídá obsahu a je v limitu 70–160 znaků.
- `slug`: `zkratky-a-terminy-pro-ai` je srozumitelný a odpovídá tématu.
- Interní odkazy jsou relevantní: pasážová optimalizace, AIO, pojmenování služby, produkt Pack.

Bez nutné opravy.