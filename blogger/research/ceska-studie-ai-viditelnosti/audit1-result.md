## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je nadprůměrně poctivý v oddělení dubnové studie, červencového průzkumu, zahraničního čísla 11 % i vlastních dat. Přesto má jednu faktickou vadu, kterou bych před publikací opravil, a několik míst, kde je potřeba zpřesnit zdroje nebo ubrat z absolutních formulací.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Přidané tvrzení k červencovému průzkumu není doložené v dodaném researchi

**Citace:**

> „počet objednávek přivedených AI asistenty **a jejich podíl na všech objednávkách** se od ledna zdvojnásobily.“

**Problém:**  
V ověřených faktech je uvedeno pouze:

> „objednávky z AI asistentů se od ledna zdvojnásobily“

Research nedokládá, že se zdvojnásobil také **podíl na všech objednávkách**. To je rozšíření tvrzení nad rámec dodaného zdroje. U článku, který má být právě o poctivém oddělování datasetů, je to potřeba opravit.

**Návrh opravy:**

```md
- počet objednávek přivedených AI asistenty se od ledna zdvojnásobil.
```

Pokud Protext ČTK opravdu uvádí i podíl na všech objednávkách, doplnit přesnou citaci a formulaci podle zdroje:

```md
- počet objednávek přivedených AI asistenty se od ledna zdvojnásobil; podle tiskové zprávy se změnil také jejich podíl na objednávkách [přesná formulace zdroje].
```

---

# 2. Doporučení

## 1. [WARNING] Příliš široké tvrzení o tom, že všechna dřívější veřejná čísla byla jen americká nebo globální

**Citace:**

> „čímž vznikl údaj, který dosud chyběl: dřív byla všechna veřejná čísla o AI viditelnosti z amerických nebo globálních vzorků.“

**Problém:**  
Tohle je silné historické tvrzení. Dodaný research podporuje, že jde o první české měření se zveřejněnou metodikou, ale nedokládá kompletní audit „všech veřejných čísel“ předtím. Riziko: přehnaný claim.

**Návrh opravy:**

```md
čímž vznikl veřejně popsaný český vzorek s metodikou; do té doby se v debatě častěji opíralo o americké nebo globální analýzy.
```

Nebo ještě bezpečněji:

```md
čímž vznikl veřejně popsaný český vzorek s metodikou, který v předchozích globálních debatách o AI viditelnosti chyběl.
```

---

## 2. [WARNING] „V přehledech o studii“ je vágní a může působit jako nedoložené obvinění

**Citace:**

> „V přehledech o studii se objevuje tvrzení, že shoda citovaných domén mezi ChatGPT a Perplexity je jen kolem 11 %.“

**Problém:**  
Není jasné, v jakých přehledech. Článek zároveň nechce kanibalizovat metodickou kritiku ani rozebírat sekundární chyby. Formulace je věcně pochopitelná, ale zdrojově měkká.

**Návrh opravy:**

```md
Pokud narazíte na tvrzení, že shoda citovaných domén mezi ChatGPT a Perplexity je jen kolem 11 %, nepatří k této české studii.
```

Tím se vyhnete nedoloženému „v přehledech“ a zachováte hlavní pointu.

---

## 3. [WARNING] U některých čísel chybí přímo v místě výskytu zdroj nebo datum

**Citace:**

> „Ukázala, že AI pracuje s 3 až 5 značkami na odpověď…“

> „AI zužuje výběr na 3 až 5 značek na odpověď…“

> `stats: value: "3–5" label: "značek, se kterými AI podle studie v průměru pracuje v jedné odpovědi"`

**Problém:**  
Zadání vyžaduje: „u každého čísla zdroj, metodika a datum sběru“. Článek má zdroje dole a v tabulce je jednou uvedeno MediaGuru 18. 5. 2026, ale frontmatter, krátká odpověď a shrnutí číslo 3–5 uvádějí bez plného ukotvení.

**Návrh opravy ve shrnutí:**

```md
- Podle Marketing Mineru / MediaGuru 18. 5. 2026 AI v odpovědi pracuje v průměru se 3 až 5 značkami; měření proběhlo v dubnu 2026 na 100 000 promptů ve 4 nástrojích.
```

**Návrh opravy ve `stats`:**

```yaml
- value: "3–5"
  label: "značek v jedné odpovědi podle MM / MediaGuru 18. 5. 2026; měření duben 2026"
```

Krátkou odpověď bych nemusel prodlužovat, protože je na hraně 59 slov, ale číslo 3–5 by mělo být hned v následujícím odstavci zdrojově ukotvené.

---

## 4. [WARNING] Meta description je pravděpodobně delší než doporučených 160 znaků

**Citace:**

```yaml
description: "Marketing Miner změřil 100 000 promptů ve 4 AI nástrojích z českých IP. Co data ukázala o koncentraci značek a rozdílech mezi nástroji — a jaké číslo k nim nepatří."
```

**Problém:**  
Popis je obsahově dobrý, ale je zhruba nad hranicí 160 znaků. Zadání chce 70–160 znaků.

**Návrh opravy:**

```yaml
description: "Marketing Miner měřil v dubnu 2026 AI viditelnost v ČR. Co ukázalo 400 000 měření, proč nestačí jeden nástroj a odkud není 11 %."
```

---

## 5. [TIP] Hlavní titulek by měl lépe nést cílové klíčové slovo

**Citace:**

```yaml
title: "První česká data o AI viditelnosti: 400 000 měření"
seoTitle: "Česká studie AI viditelnosti: 400 000 měření (2026)"
```

**Problém:**  
SEO title je v pořádku: klíčové slovo je vepředu a délka je vhodná. Hlavní `title` ale nezačíná cílovým výrazem „česká studie AI viditelnosti“. Není to blokující, ale pro konzistenci a citovatelnost bych sjednotil.

**Návrh opravy:**

```yaml
title: "Česká studie AI viditelnosti: 400 000 měření"
seoTitle: "Česká studie AI viditelnosti: 400 000 měření (2026)"
```

---

## 6. [WARNING] Formulace „studie potvrzuje“ je místy silnější než data dovolují

**Citace:**

> „Studie potvrzuje čtyři věci, které tento web doporučuje…“

> „AI SEO audit za 3 600 Kč použije stejný princip, jaký potvrdila česká studie…“

**Problém:**  
Studie nepodává důkaz, že doporučení webu jsou obecně správná. Její metodika je s nimi v souladu a podporuje je, ale „potvrzuje“ může působit jako silnější autorizační claim.

**Návrh opravy:**

```md
Studie je v souladu se čtyřmi zásadami, které tento web doporučuje…
```

A v CTA:

```md
AI SEO audit za 3 600 Kč vychází z podobných zásad: reálné dotazy, oddělené nástroje, měření bez historie účtu a samostatné vyhodnocení výsledků.
```

---

## 7. [WARNING] CTA slibuje „všech čtyřech nástrojích“ — ověřit proti skutečnému rozsahu produktu

**Citace:**

> „Chcete vědět, jak je na tom váš web ve všech čtyřech nástrojích…?“

**Problém:**  
Pokud AI SEO audit za 3 600 Kč opravdu měří ChatGPT, Gemini, Perplexity a AI přehledy Googlu, je to v pořádku. Pokud ne, je to produktový overclaim.

**Návrh opravy, pokud audit neměří všechny čtyři:**

```md
Chcete vědět, jak je na tom váš web v hlavních AI nástrojích, které pro váš obor dávají smysl?
```

Pokud měří všechny čtyři, ponechat, ale doporučuji zpřesnit:

```md
…ve všech čtyřech sledovaných prostředích — ChatGPT, Gemini, Perplexity a AI přehledech Googlu…
```

---

## 8. [TIP] Statistika „0 údajů o překryvu“ může AI i čtenáře zmást

**Citace:**

```yaml
- value: "0"
  label: "údajů o překryvu citovaných domén mezi nástroji — studie ho neuvádí"
```

**Problém:**  
Obsahově je pointa správná, ale jako karta se statistikou může „0“ vypadat jako naměřený výsledek studie. Přitom jde o absenci veřejně uvedené metriky.

**Návrh opravy:**

```yaml
- value: "neuvedeno"
  label: "překryv citovaných domén mezi nástroji studie veřejně neuvádí"
```

---

## 9. [TIP] U vlastního měření doplnit datum předchozího běhu nebo vypustit změnu „o devět bodů“

**Citace:**

> „…podíl zmínek mezi sledovanými subjekty 16 %; ten podíl se proti předchozímu běhu změnil o devět procentních bodů dolů.“

**Problém:**  
Vlastní data jsou správně oddělená, ale změna mezi běhy není plně ukotvená: chybí datum předchozího běhu a výchozí hodnota 25 % je jen v researchi, ne v článku.

**Návrh opravy:**

```md
…podíl zmínek mezi sledovanými subjekty 16 %. V předchozím běhu [datum] byl tento podíl 25 %, tedy o devět procentních bodů výš.
```

Nebo jednodušeji:

```md
…podíl zmínek mezi sledovanými subjekty 16 %. Uvádím to jako doklad, že vlastní měření je potřeba opakovat, ne jako srovnání se studií.
```

---

## 10. [TIP] U komentáře o SEO investicích doplnit přesnější atribuci

**Citace:**

> „Vydavatel studie v komentáři uvádí, že AI viditelnost ne vždy odpovídá tržnímu podílu značky…“

**Problém:**  
Tvrzení je v souladu s researchem, ale „v komentáři“ je neurčité. Lepší je uvést médium a datum.

**Návrh opravy:**

```md
Podle komentáře Marketing Mineru citovaného MediaGuru 18. 5. 2026 AI viditelnost ne vždy odpovídá tržnímu podílu značky…
```

---

# 3. Co je v pořádku

- **11% překryv domén není chybně přiřazen Marketing Mineru.** Článek správně říká, že jde o zahraniční analýzu citací, ne o českou studii.
- **Dubnová studie a červencový průzkum jsou oddělené.** U průzkumu je správně uvedeno datum 6.–29. 7. 2026, n = 871 a publikum Marketing Mineru.
- **Článek nepíše „66 % českých firem“.** Správně mluví o respondentech průzkumu a výslovně upozorňuje, že nejde o reprezentativní vzorek českých firem.
- **Nejsou uvedené značky z žebříčků.** Objevují se jen názvy nástrojů a zdrojů, což je v pořádku.
- **Vlastní čísla 7 %, 7 %, 16 % jsou jasně oddělená** a vztahují se pouze k vlastnímu webu.
- **Krátká odpověď ve frontmatteru je dobrá:** má samostatný smysl, začíná definicí, drží se kolem 40–60 slov a obsahuje hlavní fakta.
- **Interní odkazy jsou relevantní a nekanibalizují hlavní téma.** Článek odkazuje na metodickou kritiku i vlastní test, ale nepřebírá jejich roli.
- **CTA je konkrétní a vede na produkt za 3 600 Kč**, ne na obecné „kontaktujte nás“.
- **Zakázané formulace a slovník se nevyskytují.** Tón je věcný, vysvětlující a bez manipulativní urgence.