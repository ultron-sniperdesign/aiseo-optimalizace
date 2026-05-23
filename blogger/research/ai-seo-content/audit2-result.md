## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z velké části vidět: tón je umírněnější, zakázané termíny se téměř nevyskytují, CTA je konkrétní a krátká odpověď splňuje formát. Zůstávají ale absolutní formulace ve FAQ/frontmatteru a několik nedoložených generalizací o tom, co AI „často cituje“.

---

## Nálezy

### [BLOCKER] Ve FAQ zůstal původní overclaim „necituje / ano“

**Citace:**

```yaml
a: "... Obecné fráze se necitují, konkrétní a doložitelná fakta ano."
```

**Problém:**  
Tohle je absolutní tvrzení. Navíc jde přesně proti deklarované opravě v zadání, kde mělo být „citují hůř / mají větší šanci“.

**Návrh opravy:**

```yaml
a: "... Obecné fráze se citují hůř; konkrétní a doložitelná fakta mají větší šanci obstát jako použitelný zdroj."
```

---

### [WARNING] HowTo název stále slibuje výsledek místo šance

**Citace:**

```yaml
howto:
  name: "Jak psát obsah, který AI cituje"
```

**Problém:**  
Formulace „který AI cituje“ zní jako jistý výsledek. Bezpečnější je „citovatelný“ nebo „který může AI snáz použít“.

**Návrh opravy:**

```yaml
name: "Jak psát citovatelný obsah pro AI systémy"
```

nebo:

```yaml
name: "Jak psát obsah, který mohou AI systémy snáz citovat"
```

---

### [WARNING] Frontmatter stats obsahuje příliš silný claim

**Citace:**

```yaml
- value: "Q&A"
  label: "formát, který AI snadno cituje"
```

**Problém:**  
„Který AI snadno cituje“ je příliš jisté a nedoložené. Q&A může být vhodný formát, ale ne garantovaně citovaný.

**Návrh opravy:**

```yaml
- value: "Q&A"
  label: "formát vhodný pro krátké odpovědi"
```

nebo:

```yaml
- value: "Q&A"
  label: "formát, který usnadňuje extrakci odpovědi"
```

---

### [WARNING] Nedoložená generalizace „konzistentní napříč platformami i obory“

**Citace:**

> Konkrétní čísla z analýz berte jako orientační — směr je ale konzistentní napříč platformami i obory.

**Problém:**  
Tvrzení „konzistentní napříč platformami i obory“ je široké a bez zdroje. V článku nejsou uvedené konkrétní analýzy, platformy ani obory.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj/poznámku k metodice, nebo formulaci zúžit:

> V praxi se tento směr opakuje u více typů dotazů; konkrétní čísla z veřejných analýz je ale potřeba brát jako orientační.

Ještě bezpečnější:

> Berte to jako praktické pravidlo pro úpravu textu, ne jako univerzálně změřený algoritmický faktor.

---

### [WARNING] „Nejčastější rozdíl“ je silné tvrzení bez opory

**Citace:**

> Nejčastější rozdíl mezi citovaným a přehlíženým obsahem je hustota faktů — kolik ověřitelných tvrzení připadá na délku textu.

**Problém:**  
„Nejčastější rozdíl“ implikuje měření nebo analýzu. Bez dat je to příliš silné.

**Návrh opravy:**

> Jeden z prakticky nejviditelnějších rozdílů mezi použitelnou a slabou pasáží je hustota faktů — kolik ověřitelných tvrzení připadá na délku textu.

nebo:

> Pro citovatelnost bývá důležitá hustota faktů — tedy kolik ověřitelných tvrzení připadá na délku textu.

---

### [WARNING] „Hutnější obsah bývá citován častěji“ potřebuje zdroj nebo zmírnění

**Citace:**

> Hutnější obsah bývá citován častěji než obecný — fakta dávají AI co citovat.

**Problém:**  
Bez zdroje jde o zobecnění. Je lepší mluvit o „vyšší použitelnosti jako zdroj“, ne přímo o frekvenci citací.

**Návrh opravy:**

> Hutnější obsah se snáz používá jako zdroj než obecné fráze — konkrétní fakta dávají AI systémům jasnější materiál pro odpověď.

---

### [WARNING] Formulace „AI nemá důvod citovat“ je zbytečně antropomorfní a kategorická

**Citace:**

> AI nemá důvod citovat sté převyprávění téhož. Dejte mu fakt, který jinde není:

**Problém:**  
Zní to jako popis motivace AI. Navíc „nemá důvod“ je absolutní. V brand voice je vhodnější věcnější formulace.

**Návrh opravy:**

> Převyprávění běžně dostupných informací má menší šanci odlišit se jako zdroj. Silnější je fakt, srovnání nebo postup, který jinde není:

---

### [WARNING] FAQ „vlastní data výrazně pomáhají“ je silnější, než článek dokládá

**Citace:**

```yaml
a: "Nemusíte, ale výrazně to pomáhá. Vlastní číslo, srovnání nebo pojmenovaný postup dávají AI důvod citovat právě vás..."
```

**Problém:**  
„Výrazně pomáhá“ a „dávají AI důvod citovat právě vás“ jsou nedoložené a příliš prodejní/jisté.

**Návrh opravy:**

```yaml
a: "Nemusíte, ale vlastní data často pomáhají odlišit pasáž od obecných shrnutí. Vlastní číslo, srovnání nebo pojmenovaný postup může zvýšit šanci, že bude text použitelný jako konkrétní zdroj."
```

---

### [WARNING] FAQ „které formáty AI často cituje“ působí jako změřený fakt

**Citace:**

```yaml
q: "Které formáty obsahu AI často cituje?"
a: "Mezi často citované formáty patří přehledné seznamy, tabulky a srovnávací články..."
```

**Problém:**  
„Často cituje / často citované“ opět implikuje měření. Pokud nechcete doplnit zdroj, je lepší mluvit o formátech, ze kterých se odpověď snáz extrahuje.

**Návrh opravy:**

```yaml
q: "Které formáty obsahu se AI systémům dobře zpracovávají?"
a: "Dobře použitelné bývají přehledné seznamy, tabulky a srovnávací články typu „X vs Y“. Mají jasnou strukturu, ze které se snáz vytáhne konkrétní odpověď."
```

---

### [WARNING] SEO title je pravděpodobně pod požadovanou délkou

**Citace:**

```yaml
title: "AI SEO content: jak psát citovatelný obsah pro AI"
```

**Problém:**  
Titulek má přibližně 49 znaků, tedy těsně pod požadovaným rozmezím 50–60 znaků. Klíčové slovo je správně na začátku, ale délka nesedí.

**Návrh opravy:**  
Například:

```yaml
title: "AI SEO content: 4 principy citovatelného obsahu pro AI"
```

Tento návrh drží klíčové slovo vepředu a je v doporučené délce.

---

### [TIP] Meta description je v pořádku, ale je na horní hraně

**Citace:**

```yaml
description: "Jak psát obsah pro AI éru, aby ho ChatGPT, Perplexity a AI Overviews mohly snáze pochopit a citovat: krátká odpověď, hustota faktů, data a zdroje."
```

**Hodnocení:**  
Délka je v limitu 70–160 znaků a claim je bezpečně formulovaný přes „mohly snáze“. Není nutná oprava.

**Volitelná úprava pro větší údernost:**

```yaml
description: "Jak psát AI SEO content: krátká odpověď, hustota faktů, vlastní data a zdroje, aby AI systémy obsah snáz pochopily."
```

---

### [TIP] Krátká odpověď splňuje požadavek

**Citace:**

```yaml
answer: "AI SEO obsah je text psaný tak, aby ho AI systémy..."
```

**Hodnocení:**  
Dobré. Má cca 56 slov, začíná definicí, dává samostatný smysl a neobsahuje negaci na začátku. Prvních cca 100 slov těla také funguje jako samostatná odpověď.

**Bez nutné opravy.**

---

### [TIP] CTA je konkrétní a odpovídá zadání

**Citace:**

> připravili jsme [AI SEO Wireframe Pack](/pack/): praktický pracovní rámec se šablonami textů a strukturovanými daty za 1 490 Kč.  
> ... [AI SEO audit na míru](/audit/) za 9 990 Kč.

**Hodnocení:**  
Dobré. Závěr směřuje na konkrétní produkty i ceny. Není to generické „kontaktujte nás“.

**Bez nutné opravy.**

---

### [TIP] Brand voice a zakázané termíny jsou převážně v pořádku

**Hodnocení:**  
V článku nejsou problémové výrazy typu „schema markup“, „answer block“, „hub-and-spoke“, „crawler/bot“ bez kontextu ani „backlink profil“. Použití „praktický pracovní rámec“ v CTA je správné.

**Pozor pouze na:**  
Výše uvedené formulace typu „AI nemá důvod“, „AI cituje“, „často citované“ — nejde o zakázané termíny, ale o zbytečně jisté claimy.

---

## Shrnutí

Článek je blízko publikaci, ale ještě neprošel. Největší problém je, že se část původních absolutních formulací vrátila ve FAQ a frontmatteru. Po změkčení claimů typu „AI cituje“, „necituje / ano“, „často citované“ a po úpravě titulku na 50–60 znaků bude verze vhodná k publikaci.