## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou výrazně lepší: zakázané „schema markup“ apod. jsou pryč, `answer` má správnou délku a začíná definicí, CTA vede na konkrétní produkty, interní odkazy dávají smysl. Přesto zůstávají **věcné overclaimy a nedoložená data**, kvůli kterým bych článek zatím nepouštěl.

---

## Nálezy

### [BLOCKER] Nedoložené tvrzení o konci FAQ rich results k 7. 5. 2026

**Citace:**

> „Google odebral FAQ rich results 7. 5. 2026; navazující reporty a API podpora se podle oznámení Googlu postupně vypínají.“

Stejné tvrzení je ve `stats`, FAQ, `<Insight>` i v části „Časté chyby“.

**Problém:**  
Jde o velmi konkrétní faktické tvrzení s přesným datem a dopadem na Search Console/API. V článku ale není uveden žádný zdroj. Bez odkazu na oficiální Google Search Central changelog / dokumentaci / oznámení je to nedoložitelné. Navíc Google už FAQ rich results výrazně omezil dříve; přesné tvrzení „odebral 7. 5. 2026“ musí být doložené.

**Návrh opravy:**  
Buď doplnit přímý zdroj do textu, např.:

> Podle oznámení Google Search Central z 7. 5. 2026 Google odstranil FAQ rozšířené výsledky a navazující reporty postupně vypíná.

A ideálně přidat odkaz.

Nebo pokud zdroj nemáte, změkčit:

> Google FAQ rozšířené výsledky v posledních letech výrazně omezil a v roce 2026 s nimi pro běžné weby nelze počítat jako se zdrojem lepšího zobrazení ve výsledcích.

---

### [BLOCKER] Nedoložený benchmark „20–30 % častěji“ pro AI shrnutí

**Citace:**

> „Benchmarky z let 2025–2026 naznačují, že stránky s validními strukturovanými daty se v AI shrnutích mohou objevovat o 20–30 % častěji než stránky bez nich — není to ale garance citace.“

A ve FAQ:

> „Benchmarky z let 2025–2026 naznačují, že stránky s validními FAQ, HowTo a QAPage strukturovanými daty se v AI shrnutích mohou objevovat přibližně o 20–30 % častěji…“

**Problém:**  
Číslo 20–30 % je konkrétní kvantitativní claim. Bez uvedení zdroje, metodiky, vzorku a definice „AI shrnutí“ působí jako vymyšlený nebo marketingově přestřelený údaj. Hedge „není to garance“ nestačí.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj a metodiku, nebo číslo odstranit.

Bez zdroje doporučená formulace:

> Dostupné testy a praxe z let 2025–2026 naznačují, že validní strukturovaná data mohou zvýšit šanci, že AI nástroje obsah správně pochopí a použijí. Nejde ale o samostatný faktor, který by citaci zajistil.

Ve FAQ také odstranit „QAPage“, pokud ho článek dále nevysvětluje.

---

### [WARNING] Overclaim: „JSON-LD preferovaný napříč Google, Bing i AI nástroji“

**Citace:**

> „JSON-LD — preferovaný formát strukturovaných dat napříč Google, Bing i AI nástroji“

> „JSON-LD je preferovaný formát napříč Google, Bing i AI nástroji.“

> „Je to formát, který v roce 2026 preferují Google, Bing i AI nástroje včetně ChatGPT a Perplexity.“

**Problém:**  
Google JSON-LD pro strukturovaná data doporučuje. Bing ho podporuje. U ChatGPT, Perplexity nebo Claude ale nelze bezpečně tvrdit, že „preferují JSON-LD“ jako oficiální formát. AI nástrojům může JSON-LD usnadnit strojové čtení, pokud se ke stránce dostanou, ale není to deklarovaná preference všech AI systémů.

**Návrh opravy napříč článkem:**  

Nahraďte formulace typu:

> „preferovaný napříč Google, Bing i AI nástroji“

za:

> „Google JSON-LD pro podporované typy strukturovaných dat doporučuje, Bing ho podporuje a AI nástrojům může usnadnit strojové čtení obsahu, pokud mají ke stránce přístup.“

Ve `stats` změnit label například na:

> „doporučený formát pro Google a běžně podporovaná cesta pro strukturovaná data“

---

### [WARNING] Zůstalo zakázané / nežádoucí slovo „strict“

**Citace ve frontmatteru `howto`:**

> „Použijte validator.schema.org pro strict validaci…“

**Problém:**  
Po 1. auditu mělo být odstraněno. Navíc „strict validace“ je zbytečný anglicismus a není úplně přesné: validator.schema.org kontroluje syntaxi a soulad se Schema.org, ne „strict“ validitu pro Google rozšířené výsledky.

**Návrh opravy:**

> „Použijte validator.schema.org pro kontrolu syntaxe a souladu se Schema.org a Google Rich Results Test pro podporu rozšířených výsledků.“

---

### [WARNING] „Existující FAQPage strukturovaná data jsou neškodná“ je příliš absolutní

**Citace:**

> „Existující FAQPage strukturovaná data jsou neškodná a mohou dál validovat…“

**Problém:**  
FAQPage strukturovaná data jsou neškodná pouze tehdy, pokud odpovídají viditelnému obsahu, nejsou spamová a dávají smysl pro stránku. Absolutní tvrzení „jsou neškodná“ může být zavádějící.

**Návrh opravy:**

> „Existující FAQPage strukturovaná data mohou zůstat v pořádku, pokud přesně odpovídají viditelnému FAQ na stránce. Po tomto datu ale nelze počítat s FAQ rozšířeným výsledkem v Googlu.“

---

### [WARNING] „žádný samostatný SERP benefit“ je nepřesné a žargonové

**Citace:**

> „…už v Googlu nepřinášejí FAQ rozšířený výsledek ani samostatný SERP benefit.“

**Problém:**  
„SERP benefit“ je marketingový žargon. Navíc „žádný samostatný benefit“ je příliš široké tvrzení — bezpečnější je držet se konkrétního dopadu: nezobrazí FAQ rozšířený výsledek.

**Návrh opravy:**

> „…už v Googlu nelze počítat s FAQ rozšířeným výsledkem. Smysl mohou mít hlavně pro lepší strukturu obsahu pro uživatele a strojové čtení.“

---

### [WARNING] Neaktuální / neukotvené „dnes“ zůstalo v textu

**Citace:**

> „FAQPage strukturovaná data dnes slouží hlavně AI a uživatelům“

> „Hodnota FAQPage je dnes hlavně v jasnější struktuře obsahu…“

**Problém:**  
Zadání výslovně požaduje obsah ukotvený k roku 2026 a bez neukotveného „dnes“. Článek má datum 2026-06-07, proto je lepší časově přesná formulace.

**Návrh opravy:**

> „V červnu 2026 slouží FAQPage strukturovaná data hlavně ke zpřehlednění obsahu pro uživatele a ke strojové čitelnosti.“

Nebo:

> „Po 7. 5. 2026 má FAQPage hodnotu hlavně v jasnější struktuře obsahu…“

---

### [WARNING] „6 typů tvoří jádro pro AI“ působí jako oficiální standard

**Citace:**

> „6 typů — Article, FAQPage, HowTo, Product, Organization a BreadcrumbList tvoří jádro pro AI“

> „Pro většinu webů stačí začít jádrem šesti typů…“

**Problém:**  
„Jádro pro AI“ není oficiální sada typů od Googlu, Bingu ani AI nástrojů. Jako praktické doporučení je to v pořádku, ale musí být jasné, že jde o redakční/praktický výběr pro běžné weby, ne standard.

**Návrh opravy:**

> „6 praktických typů — Article, FAQPage, HowTo, Product, Organization a BreadcrumbList jako základ pro většinu webů“

A v textu:

> „Pro většinu webů je praktické začít těmito šesti typy a doplňovat další podle konkrétního obsahu.“

---

### [WARNING] QAPage je zmíněný jen ve FAQ a bez kontextu

**Citace:**

> „…stránky s validními FAQ, HowTo a QAPage strukturovanými daty…“

**Problém:**  
QAPage není v článku vysvětlený ani uvedený v hlavním seznamu typů. Pro běžný web navíc QAPage není totéž co FAQPage — hodí se pro stránky, kde uživatelé pokládají otázky a odpovědi, typicky diskusní / komunitní formát. Tady působí jako náhodně přidaný typ kvůli benchmarku.

**Návrh opravy:**  
Buď QAPage odstranit:

> „…stránky s validními FAQPage a HowTo strukturovanými daty…“

Nebo doplnit vysvětlení do části se specifickými typy:

> „QAPage používejte jen u stránek, kde uživatelé reálně pokládají otázky a odpovědi, ne jako náhradu za FAQ.“

---

### [WARNING] Meta description slibuje „nasadit pro citace v AI“

**Citace:**

> „Jaká strukturovaná data v JSON-LD nasadit pro citace v AI…“

**Problém:**  
„Pro citace v AI“ může znít jako příslib výsledku. Článek uvnitř správně říká, že strukturovaná data citaci negarantují. Meta description by měla být stejně opatrná.

**Návrh opravy:**

> „Jaká strukturovaná data v JSON-LD pomáhají AI lépe pochopit obsah, co se mění u FAQ výsledků a jak je validovat.“

Délka zůstane v SEO limitu.

---

### [TIP] Titulek je v pořádku, ale není 49 znaků

**Citace:**

> `title: "Strukturovaná data pro AI: typy a validace v roce 2026"`

**Hodnocení:**  
Titulek má přibližně 54 znaků, ne 49, ale to nevadí. Splňuje požadovaný rozsah 50–60 znaků a klíčové slovo je na začátku.

**Návrh:**  
Není nutná změna.

---

### [TIP] `answer` je dobrý, jen bych změkčil poslední větu

**Citace:**

> „Musí ale odpovídat viditelnému textu — nepravdivá strukturovaná data nezachrání nic.“

**Hodnocení:**  
Délka cca 50 slov je správně. Začíná definicí a dává smysl samostatně. Poslední formulace je lehce expresivní.

**Návrh jemnější opravy:**

> „Musí ale odpovídat viditelnému textu — nepravdivá strukturovaná data mohou být vyhodnocená jako spam a důvěryhodnosti stránky nepomohou.“

---

### [TIP] Ukázka JSON-LD pro Article je použitelná, ale měla by být označená jako zjednodušená

**Citace:**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titulek článku",
  "author": { "@type": "Person", "name": "Jméno autora" },
  "datePublished": "2026-06-07",
  "dateModified": "2026-06-07",
  "image": "https://example.com/og/clanek.png"
}
```

**Problém:**  
Jako krátká ukázka je v pořádku. Pokud ale článek působí jako návod k nasazení, chybí upozornění, že produkční zápis často doplňuje např. `mainEntityOfPage`, `publisher`, případně `description`.

**Návrh doplnění jedné věty před ukázku:**

> „Toto je zjednodušená ukázka; v produkci obvykle doplňte i `mainEntityOfPage`, `publisher` a další pole podle typu stránky.“

---

### [TIP] Ruční kontrola v ChatGPT / Perplexity je dobře ošetřená, ale zpřesnil bych podmínku přístupu

**Citace:**

> „Ruční dotaz v ChatGPT nebo Perplexity berte jen jako orientační kontrolu toho, zda nástroj stránku najde a jak z ní interpretuje fakta.“

**Hodnocení:**  
Je dobře, že článek říká „orientační kontrola“ a neslibuje citaci. Ještě přesnější by bylo dodat, že výsledek závisí na tom, zda má nástroj webový přístup / index / browsing.

**Návrh opravy:**

> „Ruční dotaz v ChatGPT nebo Perplexity berte jen jako orientační kontrolu — a jen u režimů, které mají přístup k webu nebo aktuálnímu indexu.“

---

### [TIP] CTA je v pořádku

**Citace:**

> „…pomůže produktový AI SEO audit za 9 990 Kč… Pokud chcete postupovat sami podle hotové předlohy, použijte AI SEO Wireframe Pack za 1 490 Kč.“

**Hodnocení:**  
Splňuje zadání. CTA není generické, vede na konkrétní produkty a není agresivní.

**Návrh:**  
Beze změny.

---

### [TIP] Interní odkazy jsou relevantní

**Citace:**

> `[obsah pro AI éru](/blog/ai-seo-content/)`  
> `[praktický checklist SEO pro AI](/blog/seo-pro-ai/)`  
> `[E-E-A-T pro AI](/blog/e-e-a-t-pro-ai/)`

**Hodnocení:**  
Odkazy dávají smysl a pomáhají zasadit technické téma do širšího celku. Nekanibalizují audit.

**Návrh:**  
Beze změny.