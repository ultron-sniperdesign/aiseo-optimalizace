## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je fakticky velmi dobře připravený a většina časové osy sedí se zdroji v briefu. Před publikací ale potřebuje opravit několik formulací, které vynechávají podmínky platnosti tvrzení o Googlu / AI nástrojích nebo jsou silnější než dostupné doklady.

---

## Nálezy

### [BLOCKER] Chybí podmínka „autoritativní“ u omezení FAQ rich results v roce 2023

**Problémové místo:**

> „Od srpna 2023 je Google ukazoval jen známým vládním a zdravotnickým webům…“

Stejná zkratka se opakuje vícekrát, např.:

> „FAQ rich results jen pro známé vládní a zdravotnické weby…“

> „od srpna 2023 je pravidelně ukazoval jen známým vládním a zdravotnickým webům“

**Problém:**

Google v oznámení z 8. 8. 2023 nepsal jen „well-known government and health websites“, ale **„well-known, authoritative government and health websites“**. Brief tuto podmínku výslovně uvádí. Vynechání „autoritativní“ zužuje podmínku a dělá tvrzení nepřesným.

**Návrh opravy:**

Všude sjednotit na:

> „známé a autoritativní vládní a zdravotnické weby“

Příklad opravené věty:

> „Od srpna 2023 je Google pravidelně zobrazoval jen známým a autoritativním vládním a zdravotnickým webům; ostatním webům se už nezobrazovaly pravidelně.“

---

### [BLOCKER] Tvrzení „nevyužitá strukturovaná data neškodí“ vynechává důležitou podmínku souladu s viditelným obsahem

**Problémové místo:**

> „FAQPage zůstává platný typ schema.org a nevyužitá strukturovaná data podle Googlu neškodí.“

A také:

> „FAQPage zůstává platný typ schema.org a nevyužitá strukturovaná data podle Googlu Vyhledávání neškodí — jen už nic nezobrazí.“

A ve shrnutí:

> „FAQPage zůstává platný typ schema.org a nevyužitá strukturovaná data podle Googlu neškodí.“

**Problém:**

Výrok Googlu z roku 2023 platí pro **Vyhledávání Google** a jen za předpokladu, že strukturovaná data **odpovídají viditelnému obsahu stránky**. Obecné pokyny Googlu ke strukturovaným datům říkají, že se nemá označovat obsah, který čtenář na stránce nevidí, a že strukturovaná data musí věrně reprezentovat obsah stránky.

Článek tuto podmínku později vysvětluje, ale v klíčových samostatně citovatelných formulacích chybí. U tvrzení o cizí platformě je vynechaná podmínka blocker.

**Návrh opravy:**

V klíčových výskytech doplnit podmínku přímo do věty.

Například:

> „FAQPage zůstává platný typ schema.org. Pokud strukturovaná data odpovídají viditelnému obsahu stránky, Google už v roce 2023 uvedl, že jejich ponechání Vyhledávání neškodí; u FAQ už ale nezpůsobí žádný rozšířený výsledek.“

Ve shrnutí:

> „FAQPage zůstává platný typ schema.org; podle Googlu nevyužitá strukturovaná data Vyhledávání neškodí, pokud věrně odpovídají viditelnému obsahu stránky.“

---

### [BLOCKER] Tvrzení o převzetí viditelného textu AI nástrojem je příliš široké bez podmínek

**Problémové místo:**

> „Ten čte člověk a vyhledávač i nástroj AI ho mohou ze stránky převzít stejně jako jakýkoli jiný text.“

**Problém:**

Věta je formulovaná obecně pro „nástroj AI“. Dostupné doklady unesou spíš slabší závěr: viditelný text je pro čtenáře a vyhledávání základní obsah stránky; AI nástroj s ním může pracovat **jen pokud** stránku umí a smí načíst, má k ní přístup, není blokovaný technickými pravidly a daný systém ji skutečně použije jako zdroj.

Brief navíc výslovně upozorňuje, že není doloženo, zda FAQPage čtou AI asistenti, a že u OpenAI / Perplexity / Anthropic nemáme oficiální doklad o schema.org / FAQPage. Věta by neměla vytvářet dojem, že jakýkoli AI nástroj si viditelný text běžně převezme.

**Návrh opravy:**

Změkčit a doplnit podmínky:

> „Viditelný text otázek a odpovědí je obsah, který čte člověk a se kterým může pracovat vyhledávač. AI nástroj ho může využít jen tehdy, pokud stránku skutečně načte, má k ní přístup a její použití neblokují technická pravidla. Z dostupné dokumentace neplyne, že by mu FAQPage dával zvláštní výhodu.“

---

### [WARNING] „Dokumentace neuvádí“ je u AI firem silnější formulace než „v dokumentaci jsme nenašli“

**Problémové místo:**

> „Že by je Google nebo nástroje AI dál k něčemu používaly, dokumentace neuvádí.“

A ve frontmatteru:

> „Že by je Google nebo nástroje AI dál k něčemu používaly, dokumentace neuvádí.“

**Problém:**

U Googlu a Bingu článek pracuje s konkrétními dokumenty. U OpenAI, Perplexity a Anthropicu je ale stav v briefu vedený jako **nenalezeno**, tedy nikoli prokázané „dokumentace neuvádí“ v absolutním smyslu. Brief výslovně říká: psát „jsme nenašli“, ne „neuvádějí / nečtou“.

Článek to později dělá správně:

> „V jejich dokumentaci jsme o schema.org nic nenašli“

Ale úvodní a answer formulace jsou silnější.

**Návrh opravy:**

Nahradit přesnější formulací:

> „V kontrolované dokumentaci Googlu, Bingu, OpenAI, Perplexity a Anthropicu jsme nenašli doklad, že by FAQPage po konci rich results dával zvláštní výhodu ve vyhledávání nebo AI odpovědích.“

Nebo kratší varianta:

> „Doklad, že by FAQPage po konci rich results dál pomáhal Googlu nebo AI nástrojům, jsme v kontrolované dokumentaci nenašli.“

---

### [WARNING] Formulace „FAQPage … jen už nic nezobrazí“ může být bez kontextu příliš zkratkovitá

**Problémové místo:**

> „FAQPage zůstává platný typ schema.org a nevyužitá strukturovaná data podle Googlu Vyhledávání neškodí — jen už nic nezobrazí.“

**Problém:**

V kontextu článku je zřejmé, že jde o **FAQ rich result ve Vyhledávání Google**. Samostatně citovaná věta ale může znít, že FAQPage „nezobrazí nic“ obecně nebo že nikdy nemá žádný výstup v žádném systému.

Podklady unesou přesnější závěr: Google FAQ rich results od 7. 5. 2026 ve Vyhledávání Google nezobrazuje; dokumentace nedokládá jiný přínos FAQPage pro Google AI funkce ani AI nástroje.

**Návrh opravy:**

> „… u FAQPage už ale ve Vyhledávání Google nevznikne FAQ rich result.“

Nebo:

> „… pro FAQPage už ale Google ve výsledcích Vyhledávání nezobrazuje rozšířený výsledek.“

---

### [WARNING] „Konec i pro vládní a zdravotnické weby“ je věcně správný, ale doporučuji doplnit rozsah „ve Vyhledávání Google“

**Problémové místo:**

> „7. 5. 2026 | FAQ rich results se nezobrazují vůbec (changelog 8. 5.) | konec i pro vládní a zdravotnické weby“

**Problém:**

Podklad z changelogu říká: „This feature will no longer appear in Google Search starting May 7, 2026.“ Tvrzení v článku je v zásadě správné, ale tabulka je velmi úsporná a neříká výslovně, že jde o **Google Search**.

**Návrh opravy:**

> „FAQ rich results se ve Vyhledávání Google od 7. 5. 2026 nezobrazují vůbec…“

A ve významu:

> „Konec FAQ rich resultu ve Vyhledávání Google i pro známé a autoritativní vládní a zdravotnické weby.“

---

### [TIP] Časová osa reportu, testu a API je správně opatrná

**Dobře:**

> „červen 2026 | ohlášené odebrání FAQ reportu, typu zobrazení a podpory v testu rozšířených výsledků | přesné datum Google nezveřejnil“

> „srpen 2026 | ohlášený konec podpory FAQ v rozhraní Search Console API“

To odpovídá briefu: Google ohlásil červen a srpen 2026, ale skutečné datum provedení nezveřejnil. Článek to nepíše jako jistě provedený krok, což je správně.

---

### [TIP] HowTo část drží správný rozsah vlastního měření

**Dobře:**

> „V článcích tohoto blogu jsme 20. 9. 2026 zrušili pole, ze kterého šablona generovala strukturovaná data HowTo — 318 kroků v 63 článcích.“

Článek správně mluví o **článcích blogu**, ne o celém webu. Tím nepřekračuje podklad, podle kterého mimo blog zůstává HowTo JSON-LD na dalších 9 stránkách.

---

### [TIP] CTA tvrzení o podporovaných typech strukturovaných dat sedí

**Kontrolované místo:**

> „… strukturovaná data pro rozšířené výsledky, která Google dál podporuje — produkt, organizaci, drobečkovou navigaci a článek …“

Podle galerie podporovaných typů Google Search jsou mezi podporovanými typy Product, Organization, Breadcrumb i Article; FAQ a HowTo tam nejsou. Věcně v pořádku.

---

### [TIP] Aktuálnost k roku 2026 je celkově dobrá

Článek pracuje s konkrétními daty, má stav k 11. 10. 2026 a nepoužívá neukotvené formulace typu „letos“ nebo „příští rok“. Refresh proti původní verzi správně stahuje nedoložené tvrzení, že Google FAQPage dál používá k porozumění stránce nebo že ho zpracovávají AI systémy.