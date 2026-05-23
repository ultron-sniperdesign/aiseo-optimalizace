## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je dobře zaměřený na informační intent, má použitelnou strukturu, konkrétní CTA i bezpečný slovník bez zakázaných výrazů typu „schema markup“ nebo „answer block“. Před publikací ale potřebuje opravit hlavně **nedoložená tvrzení „podle analýz“**, několik **příliš jistých formulací o citování AI** a drobné nesoulady ve strukturovaných datech / viditelné krátké odpovědi.

---

## Nálezy a doporučené opravy

### [BLOCKER] Nedoložené odkazy na „analýzy AI citací z let 2025–2026“

**Problémové místo:**

> „Podle analýz AI citací z let 2025–2026 se opakují tři rysy citovaného obsahu…“

> „Podle analýz AI citací bývá hutnější obsah citován výrazně častěji než obecný.“

> „Podle analýz patří mezi nejcitovanější…“

Článek staví důvěryhodnost na analýzách, ale žádnou konkrétní analýzu nejmenuje ani nelinkuje. To je zvlášť problematické, protože článek sám doporučuje doložitelnost a zdroje. Bez zdrojů jsou tato tvrzení auditovatelná jen částečně a působí jako autoritativní, ale nepodložené claimy.

**Návrh opravy:**

Doplnit konkrétní zdroje přímo v textu nebo na konec článku do sekce „Zdroje a metodika“. Minimálně uvést:

- název analýzy,
- autora / firmu,
- rok nebo datum publikace,
- odkaz,
- co přesně z ní článek přebírá.

Např. formulace:

> „Vycházíme z veřejných analýz AI citací publikovaných v letech 2025–2026, zejména z [název zdroje, rok] a [název zdroje, rok]. Tyto analýzy sledují, jaké typy pasáží se objevují jako citace v AI odpovědích; uvedená čísla proto bereme jako orientační, ne jako garanci výsledku.“

Pokud zdroje nelze doplnit, oslabit tvrzení:

> „V praxi se u citovaných pasáží často opakují tři rysy…“

---

### [BLOCKER] Overclaim v titulku a metadescription: zní to jako příslib citací

**Problémové místo:**

```yaml
title: "AI SEO content: jak psát obsah, který AI cituje a používá"
description: "Jak psát obsah pro AI éru, aby vás citovaly ChatGPT, Perplexity i AI Overviews..."
```

Titulek i description naznačují, že při dodržení postupu bude AI obsah citovat. To je příliš silné. Bezpečnější brand voice má používat formulace typu „může zvýšit šanci“, „pomáhá AI lépe pochopit obsah“, „citovatelný pro AI“.

**Návrh opravy:**

Titulek zachovat s KW vepředu, ale oslabit slib:

```yaml
title: "AI SEO content: jak psát obsah citovatelný pro AI"
```

Nebo pokud chcete 50–60 znaků:

```yaml
title: "AI SEO content: jak psát citovatelný obsah pro AI"
```

Meta description upravit např.:

```yaml
description: "Jak psát obsah pro AI éru, aby ho ChatGPT, Perplexity a AI Overviews mohly snáze pochopit a citovat."
```

---

### [WARNING] Viditelná krátká odpověď v těle má jen cca 35 slov

**Problémové místo:**

> „AI SEO obsah je text psaný tak, aby ho AI vyhledávače snadno pochopily a citovaly. Stojí na čtyřech principech: odpověď hned na začátku, vysoká hustota faktů, originální data a pojmenované postupy a doložitelnost se zdroji.“

Frontmatter `answer` má 51 slov a splňuje požadavek 40–60 slov. Pokud se ale na webu nerenderuje přímo jako viditelná „krátká odpověď“, tělo článku požadavek nesplňuje.

**Návrh opravy:**

Buď zajistit, že se frontmatter `answer` skutečně zobrazí hned pod H1, nebo rozšířit první tučný blok v těle na 40–60 slov. Doporučená úprava zároveň oslabí overclaim:

> **AI SEO obsah je text psaný tak, aby ho AI systémy pro vyhledávání a odpovědi dokázaly snáz pochopit, zařadit a případně citovat.** Stojí na čtyřech principech: odpověď hned na začátku, vysoká hustota faktů, originální data nebo pojmenované postupy a doložitelnost se zdroji.

---

### [WARNING] Formulace „AI vyhledávače“ je místy nepřesná

**Problémové místo:**

> „AI SEO obsah je text psaný tak, aby ho AI vyhledávače snadno pochopily a citovaly.“

> „AI vyhledávače skládají odpověď z pasáží…“

ChatGPT, Perplexity a AI Overviews nejsou všechny totéž. Perplexity se chová jako AI vyhledávač, AI Overviews jsou součást Google vyhledávání, ChatGPT cituje zejména při práci s webovým vyhledáváním. Souhrnné označení „AI vyhledávače“ je srozumitelné, ale věcně zjednodušuje.

**Návrh opravy:**

Používat přesnější výraz:

> „AI systémy pro vyhledávání a odpovědi“

nebo:

> „AI odpovědní systémy jako ChatGPT s vyhledáváním, Perplexity nebo Google AI Overviews“

---

### [WARNING] Absolutní formulace „AI použije jako zdroj“

**Problémové místo ve frontmatteru:**

```yaml
answer: "...který AI použije jako zdroj."
```

To zní jistěji, než lze garantovat. AI může pasáž pochopit, vybrat, parafrázovat, použít bez citace, nebo nepoužít vůbec.

**Návrh opravy:**

```yaml
answer: "AI SEO obsah je text psaný tak, aby ho AI systémy pro vyhledávání a odpovědi snadno pochopily a mohly citovat. Stojí na čtyřech principech: odpověď hned na začátku, vysoká hustota faktů, originální data nebo pojmenované postupy a doložitelnost se zdroji. Cílem je zvýšit šanci, že z každé pasáže půjde vytáhnout konkrétní, ověřitelný kus použitelný jako zdroj."
```

---

### [WARNING] „Odměňují jiný obsah než klasické Google pozice“ je zjednodušující

**Problémové místo:**

> „Odměňují proto trochu jiný obsah než klasické Google pozice…“

To může vyznít, že AI vyhledávání funguje odděleně od klasického SEO. U AI Overviews a dalších systémů se ale často prolínají klasické vyhledávací signály, relevance, autorita domény, struktura obsahu i aktuálnost.

**Návrh opravy:**

> „Vedle klasických SEO signálů proto víc záleží na tom, jestli jde z textu rychle a ověřitelně vytáhnout konkrétní tvrzení.“

---

### [WARNING] Absolutní tvrzení „obecné fráze se necitují, konkrétní fakta ano“

**Problémové místo:**

> „Obecné fráze se necitují, konkrétní fakta ano.“

Tvrzení je příliš kategorické. Obecná pasáž se citovat může, jen má obvykle menší šanci než konkrétní, doložitelná pasáž.

**Návrh opravy:**

> „Obecné fráze se citují hůř; konkrétní a doložitelná fakta mají větší šanci stát se zdrojem odpovědi.“

Stejnou úpravu doporučuji i ve FAQ:

> „Obecné fráze se citují hůř, konkrétní a doložitelná fakta obvykle pomáhají víc.“

---

### [WARNING] H2 „Který formát se cituje nejvíc“ slibuje žebříček, ale text ho nedodává

**Problémové místo:**

```markdown
## Který formát se cituje nejvíc
```

Následující část neříká, který formát je první. Jen uvádí několik často citovaných formátů. To je obsahově bezpečnější, ale nadpis je silnější než data.

**Návrh opravy:**

Změnit H2 na:

```markdown
## Které formáty se citují častěji
```

A ve FAQ otázku upravit z:

> „Jaký formát obsahu AI cituje nejčastěji?“

na:

> „Které formáty obsahu AI často cituje?“

---

### [WARNING] HowTo má 5 kroků, článek prodává „4 principy“

**Problémové místo:**

```yaml
stats:
  - value: "4"
    label: "principy citovatelného obsahu"
howto:
  steps:
    - ...
    - ...
    - ...
    - ...
    - name: "Ukažte, kdo a proč to ví (zkušenost)"
```

Článek i H1 pracují se čtyřmi principy, ale strukturovaný HowTo má pět kroků. To není fatální, ale působí nekonzistentně a může to zhoršit srozumitelnost rich komponenty.

**Návrh opravy:**

Buď přiznat pátý krok v článku:

> „čtyři principy + kontrola zkušenosti“

nebo sloučit pátý krok do čtvrtého:

```yaml
- name: "Oddělte fakta od názoru, doložte zdroje a ukažte zkušenost"
  text: "Jasně rozlište ověřitelná tvrzení od interpretace, u dat uvádějte zdroj a doplňte autora, zkušenost a kontext. Doložitelný text se snáz použije jako citace."
```

---

### [WARNING] Claim „0 Kč základ zvládnete bez placených nástrojů“ není v těle vysvětlený

**Problémové místo ve frontmatteru:**

```yaml
stats:
  - value: "0 Kč"
    label: "základ zvládnete bez placených nástrojů"
```

Tento claim se může zobrazit jako vizuální prvek, ale článek nikde nevysvětluje, jak přesně základ zvládnout bez nástrojů. Je to pravděpodobně pravdivé, ale nepodložené v rámci článku.

**Návrh opravy:**

Doplnit jednu větu do části „Princip 2“ nebo „Co dál“:

> „Základní úpravy — krátkou odpověď, konkrétnější tvrzení, přehlednější seznamy a doplnění zdrojů — zvládnete i bez placených nástrojů; placené nástroje dávají smysl hlavně pro monitoring citací a větší audit webu.“

Nebo stat z frontmatteru odstranit.

---

### [WARNING] „AI systémy raději staví odpověď…“ je antropomorfní a nepřesné

**Problémové místo:**

> „AI systémy raději staví odpověď na tvrzeních, která jdou ověřit…“

AI systémy nic „raději“ nedělají v lidském smyslu. Vzdělávací tón může být zjednodušený, ale přesnější formulace bude věcnější.

**Návrh opravy:**

> „U systémů, které skládají odpovědi z vyhledaných pasáží, mají ověřitelná tvrzení větší šanci obstát jako zdroj.“

---

### [WARNING] FAQ odpověď o zdrojích je příliš jistá

**Problémové místo:**

> „Ano. Uvádění zdrojů u tvrzení signalizuje důvěryhodnost a usnadňuje ověření, což systémy stavějící odpovědi na vyhledaných pasážích oceňují.“

Problém je hlavně slovo „oceňují“. Bez přímého zdroje jde o interpretaci. Bezpečnější je „může pomoci“.

**Návrh opravy:**

> „Ano. Uvádění zdrojů u tvrzení usnadňuje ověření a může zvýšit důvěryhodnost pasáže. U systémů, které skládají odpovědi z vyhledaných zdrojů, pomáhá i jasné oddělení faktů od vlastní interpretace.“

---

### [TIP] E‑E‑A‑T je použité bez krátkého vysvětlení

**Problémové místo:**

> „Tohle je zároveň ukázka zkušenosti (E-E-A-T)…“

Pro odbornější čtenáře je zkratka jasná, ale článek je tutorial. Krátké vysvětlení zvýší srozumitelnost.

**Návrh opravy:**

> „Tohle je zároveň ukázka zkušenosti v rámci E‑E‑A‑T, tedy signálů zkušenosti, odbornosti, autority a důvěryhodnosti.“

---

### [TIP] U interního odkazu na pilíř je dobré sjednotit terminologii s článkem

**Problémové místo:**

> „Architekturu webu a propojení stránek řeší struktura pilířového obsahu…“

Obsahově je to správně a odlišuje copywritingovou vrstvu od architektury. Jen bych posílil, že tento článek neřeší celou AI SEO strategii, ale psaní konkrétních pasáží.

**Návrh opravy:**

> „Architekturu webu, prolinkování mezi stránkami a pilířové stránky řeší [struktura pilířového obsahu](/blog/jak-strukturovat-pillar-content/); tady řešíme copywritingovou vrstvu — jak napsat konkrétní pasáž tak, aby byla samostatně citovatelná.“

Pozor: správně je „prolinkování mezi stránkami“, ne zakázané „hub-and-spoke“.

---

### [TIP] CTA je konkrétní a vhodné, jen lze lépe oddělit Pack vs. Audit

**Problémové místo:**

> „Pack vám dá rámec, audit přesný plán pro váš web.“

CTA splňuje požadavek: vede na Pack 1 490 Kč i Audit 9 990 Kč, není generické. Jen poslední věta může být přesnější.

**Návrh opravy:**

> „Pack je vhodný, pokud chcete šablony a postup pro vlastní úpravy. Audit dává smysl, pokud chcete konkrétní seznam priorit a oprav pro váš web.“

---

## Krátké potvrzení toho, co je v pořádku

- Titulek má klíčové slovo **„AI SEO content“** na začátku a délkově je přibližně v požadovaném rozsahu.
- Meta description je délkově v pořádku, jen potřebuje oslabit slib citací.
- Slug `ai-seo-content` je smysluplný.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“, „backlink profil“ se v textu nevyskytují.
- CTA obsahuje konkrétní produkty i ceny: Pack 1 490 Kč a Audit 9 990 Kč.
- Datum `updated: "2026-05-23"` je vzhledem k zadání aktuální, nikoli budoucí.