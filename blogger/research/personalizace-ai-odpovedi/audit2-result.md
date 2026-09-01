## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po zmírnění pořád užitečný: jasně říká, že účet je proměnná testu, odděluje proměnlivost od personalizace a netvrdí, že Google „klame“. CTA je konkrétní a interní odkazy dávají smysl. Přesto zůstává několik formulací, které jsou moc absolutní nebo mohou znít jako rozpor Googlu.

K „taky“: odmítnutí připomínky je oprávněné. V tomhle kontextu to není vada brand voice.

---

## Nálezy

### [BLOCKER] Absolutní tvrzení „nikdo nezveřejnil / neexistuje“ je nedoložitelné

**Citace:**

```md
- value: "0"
  label: "zveřejněných čísel o tom, jak moc se odpovědi mezi lidmi liší"
```

```md
"Veřejné číslo k tomu neexistuje. Google žádné nezveřejnil..."
```

```md
**Číslo o tom, jak moc se odpovědi mezi lidmi liší, nikdo nezveřejnil.**
```

**Problém:**  
„Nikdo“ a „neexistuje“ nejde obhájit bez rešerše všech veřejných zdrojů. Článek má doložené jen to, že číslo nezveřejnil Google v uvedených zdrojích a že autor nemá vlastní měření.

**Návrh opravy:**

```md
Google k tomu v citovaných zdrojích nezveřejňuje oficiální číslo. Vlastní měření nemáme, proto neuvádíme procento rozdílu mezi účty.
```

A ve statistikách:

```md
- value: "0"
  label: "oficiálních čísel Googlu v citovaných zdrojích o rozdílech mezi účty"
```

---

### [WARNING] Nadpis může pořád znít jako „Google si protiřečí“

**Citace:**

```md
## Co Google říká — dvakrát a jinak
```

**Problém:**  
Text následně správně vysvětluje, že nejde o spor, ale nadpis sám o sobě naznačuje rozpor nebo nekonzistenci Googlu.

**Návrh opravy:**

```md
## Dva zdroje Googlu, dva různé rozsahy
```

nebo:

```md
## Co Google uvádí pro různé části funkce
```

---

### [WARNING] Definice personalizace a proměnlivosti je příliš kategorická

**Citace:**

```md
Proměnlivost znamená, že stejný člověk dostane při opakování jiný výsledek. Personalizace znamená, že dva lidé dostanou jiný výsledek ve stejné chvíli.
```

**Problém:**  
Personalizace ani proměnlivost nezaručuje jiný výsledek pokaždé. Přesnější je „může dostat“. Jinak článek po předchozím zmírnění znovu zavádí silnější tvrzení.

**Návrh opravy:**

```md
Proměnlivost znamená, že stejný člověk může při opakování dostat jiný výsledek. Personalizace znamená, že dva lidé mohou ve stejné chvíli dostat jiný výsledek kvůli historii a nastavení účtu.
```

Totéž upravit i v FAQ.

---

### [WARNING] „Anonymní okno odstraní historii“ je nepřesné

**Citace:**

```md
Anonymní okno odstraní historii, ne region, jazyk ani proměnlivost.
```

**Problém:**  
Anonymní okno neznamená obecné „odstranění historie“. Spíš omezuje lokální historii, cookies/session a přihlášení, ale neřeší všechny signály. Pokud se uživatel v anonymním okně přihlásí, účetní historie může znovu vstupovat do hry.

**Návrh opravy:**

```md
Anonymní okno omezuje lokální historii a běžně oddělí test od přihlášeného účtu. Neodstraní ale region, jazyk, aktuální kontext ani proměnlivost odpovědí.
```

Upravit na obou místech, kde se věta opakuje.

---

### [WARNING] „Podmínkou personalizace“ je moc široké

**Citace:**

```md
Podmínkou personalizace je věk nad 18 let a zapnutá historie a personalizovaná doporučení.
```

**Problém:**  
Z článku plyne, že podmínky se vztahují ke konkrétní funkci popsané v nápovědě, ne nutně ke všem podobám personalizace v celém Googlu.

**Návrh opravy:**

```md
Podmínkou této funkce podle nápovědy je věk nad 18 let, zapnutá historie a personalizovaná doporučení.
```

nebo ještě přesněji:

```md
U paměti v Režimu AI nápověda uvádí věk nad 18 let, zapnutou historii a personalizovaná doporučení.
```

---

### [WARNING] „ChatGPT a Perplexity nemají oficiální report“ potřebuje upřesnit pro koho a k čemu

**Citace:**

```md
u ChatGPT a Perplexity k tomu navíc neexistuje oficiální report provozovatele
```

**Problém:**  
„Report“ je neurčité. Může znít, že platformy nemají žádné analytické/reportovací výstupy. Článek ale myslí oficiální přehled viditelnosti webu/značky pro provozovatele webu.

**Návrh opravy:**

```md
u ChatGPT a Perplexity k tomu navíc k 1. 9. 2026 není veřejně dostupný oficiální přehled viditelnosti webu od provozovatele služby.
```

Ještě lepší česky bez anglicismu:

```md
oficiální přehled viditelnosti
```

místo:

```md
report
```

---

### [TIP] SEO title je v pořádku, ale hlavní `title` je krátký

**Citace:**

```md
title: "Personalizace AI odpovědí: test závisí na účtu"
seoTitle: "Personalizace AI odpovědí: co platí v Česku (2026)"
```

**Problém:**  
`seoTitle` splňuje rozsah zhruba 50–60 znaků. `title` má přibližně 46 znaků. Pokud se `title` používá jako H1 nebo `<title>`, je kratší než požadavek.

**Návrh opravy:**

```md
title: "Personalizace AI odpovědí: proč test závisí na účtu"
```

Tím se zachová význam i klíčové slovo na začátku.

---

### [TIP] „Osobní inteligence je funkce Režimu AI“ může být moc zúžené vůči zbytku článku

**Citace:**

```md
Osobní inteligence je funkce Režimu AI...
```

a později:

```md
o Personal Intelligence šířeji, včetně připojení Gmailu a Fotek
```

**Problém:**  
Článek sám říká, že pod stejným názvem je víc dílčích funkcí. Úvodní definice může působit užší než pozdější výklad.

**Návrh opravy:**

```md
Osobní inteligence je označení pro personalizační funkce v Režimu AI; nápověda Googlu u paměti uvádí využití předchozího vyhledávání a aktivity uložené v historii.
```

Pozor: odpověď má teď ideálních 49 slov. Po úpravě hlídat limit 40–60 slov.

---

### [TIP] Drobný anglicismus: „report“

**Citace:**

```md
Do reportu napište...
```

**Problém:**  
Není to zakázaný termín, ale článek jinak drží srozumitelnou češtinu. „Report“ lze snadno nahradit.

**Návrh opravy:**

```md
Do výstupu napište...
```

nebo:

```md
Do protokolu testu napište...
```

---

## Krátké potvrzení

- Krátká odpověď ve frontmatteru je sebestačná a má správnou délku.  
- Rok 2026 je ukotvený konkrétním datem, nejsou tam neukotvená „letos/příští rok“.  
- CTA splňuje zadání: vede na konkrétní produkt za 3 600 Kč.  
- Opravy nezavedly dojem, že Google klame; jen nadpis „dvakrát a jinak“ bych zjemnil, aby to nebylo nutné dovysvětlovat až pod ním.