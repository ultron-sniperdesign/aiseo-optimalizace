Verdikt: **připravené k publikaci**.

Po druhé kontrole **nevidím žádnou BLOCKING ani MAJOR vadu**. Opravy z prvního auditu jsou promítnuté a článek je **vnitřně konzistentní, metodicky použitelný a opatrný v závěrech**.

Níže jen drobné MINOR poznámky.

---

## Shrnutí kontroly podle zadání

### 1) Konzistence po přidání šestého kroku
Ano, **drží**.

- V článku je správně:
  > `## Šest kroků`

- Samotný Stepper má skutečně 6 kroků.
- Nenašel jsem v těle článku zbytek po staré verzi typu „pět kroků“ ve vztahu k metodě článku.

Poznámka: v YAML/frontmatter a perexových metrikách zůstává správně „pět“ pouze u **počtu příkladů/funkcí**, ne u kroků:
> `label: "funkcí, na kterých je metoda v článku předvedená — s výsledkem ano, částečně i ne"`

To je v pořádku.

---

### 2) Logika pořadí kroků
Ano, **pořadí je logické a průchozí bez vracení**.

Sekvence:
1. oznámení,
2. typ formulace,
3. nápověda,
4. kontrola jazyka nápovědy,
5. podmínky přístupu,
6. vlastní test

dává smysl. Krok 5 správně brání tomu, aby čtenář špatně interpretoval negativní test bez kontroly účtu/platformy/verze/experimentu.

---

### 3) Závěry vs. podklad
Nevidím závěr, který by podklad **neunesl**.

Naopak oceňuju, že článek opakovaně drží důležité omezení:
> `Když v něm je Česko a čeština, máte veřejně doloženou dostupnost — ne ale automaticky stejný stav pro každý účet a zařízení.`

a:
> `Pak z veřejných zdrojů odpověď nedostanete a rozhodne jen vlastní test. Ten ale platí pro jeden účet, jednu zemi a jeden okamžik`

To přesně řeší předchozí problém s příliš absolutním výkladem.

---

### 4) Redundance checklistu po přidání kroku 5
**Není problematicky redundantní.**

Krok 5 říká **co je nutné zkontrolovat před interpretací testu**. Checklist pak říká **co si při testu zaznamenat**. Překryv je věcný, ale funkční, ne škodlivý.

---

# MINOR nálezy

## MINOR 1 — jedna absolutní formulace je o chlup silnější, než unese zbytek textu
### Citace
V perexovém boxu:
> `„Dostupnost AI funkce v Česku rozhoduje výslovný seznam zemí a jazyků v nápovědě, ne oznámení a ne to, že nápověda existuje v češtině. Když seznam chybí, dostupnost z veřejných zdrojů doložit nejde.“`

### Problém
Většina článku je metodicky přesná a připouští, že veřejná opora může být i **nepřímá přes odkaz na jinou funkci**:
> `Search Live ... rozhoduje nápověda AI Mode ... doloženo přes odkaz`

Takže formulace „rozhoduje výslovný seznam ... v nápovědě“ je prakticky pravdivá, ale mírně zjednodušuje: v některých případech rozhoduje seznam **v nápovědě referenční funkce**, ne nutně přímo u té posuzované.

### Návrh
Změnit třeba na:
- `Dostupnost AI funkce v Česku veřejně dokládá výslovný seznam zemí a jazyků v relevantní nápovědě...`
  
nebo:
- `... v nápovědě dané funkce nebo funkce, na kterou její dostupnost výslovně odkazuje ...`

---

## MINOR 2 — drobná terminologická nekonzistence mezi „výslovný seznam“ a „seznam zemí a jazyků“
### Citace
Např.:
> `Rozhoduje, jestli nápověda obsahuje výslovný seznam zemí a jazyků`

vs.
> `Rozhoduje seznam zemí a jazyků v nápovědě.`

vs.
> `seznam, kde je Česko`

### Problém
Nejde o faktickou chybu, ale místy se střídá:
- „výslovný seznam zemí a jazyků“
- „seznam zemí“
- „seznam, kde je Česko“

U textu o metodice je lepší držet jeden termín co nejpřesněji.

### Návrh
Standardizovat na jednu podobu, ideálně:
- `výslovný seznam zemí a jazyků`

A jen tam, kde je to skutečně potřeba, zkracovat.

---

## MINOR 3 — formulace „nápověda říká, jak to je“ je stylisticky silná vůči vlastním limitům článku
### Citace
V závěru:
> `Oznámení říká, jak to bylo v den vydání; nápověda říká, jak to je.`

### Problém
Je to pěkně úderné, ale zbytek článku správně uvádí limity:
> `Nápovědy se mění bez oznámení. Ověření platí ke dni, kdy jste ho udělali`
a
> `ne ale automaticky stejný stav pro každý účet a zařízení`

Tedy nápověda není čisté „jak to je“ bez dalšího; spíš „nejlepší veřejný stav, který máte k dispozici“.

### Návrh
Mírně změkčit, např.:
- `Oznámení říká, jak to bylo v den vydání; nápověda obvykle nejlépe ukazuje aktuální veřejně popsaný stav.`
- nebo kratší:
  `Oznámení říká, jak to bylo v den vydání; nápověda je obvykle nejlepší veřejný zdroj aktuálního stavu.`

---

## MINOR 4 — drobná redundance mezi krokem 5 a checklistem u „přihlášení / typ účtu“
### Citace
Krok 5:
> `Rozhodovat může typ účtu ... přihlášení, platforma, verze aplikace nebo to, že je funkce vedená jako experiment.`

Checklist:
> `Přihlášení ... na jakém typu účtu`
  
a:
> `Zařízení a prohlížeč`

### Problém
Jak píšu výš, není to metodická vada. Jen je tu malé opakování stejné informace v krátkém odstupu.

### Návrh
Není nutné měnit. Pokud chcete text ještě učesat, můžete checklist uvést explicitně jako:
- `Tohle jsou údaje z kroku 5 a 6, které si při testu zapište.`

Tím se překryv změní z redundance na záměr.

---

# Co je naopak opravené správně

Tohle výslovně potvrzuju jako bezvadné:

- **Přidání kontroly podmínek přístupu** je správně a dostatečně konkrétní.
- Nezůstal tu starý absolutní závěr typu „když je v seznamu, je hotovo“.
- U „nedoloženo“ je článek konzistentně opatrný:
  > `Nedoloženo není nedostupné`
- Název chromové funkce je v článku konzistentní:
  > `Rozdělené zobrazení v AI Mode v Chromu`
- Stat s nulou je opravený správně:
  > `co o dostupnosti dokazuje samotný překlad nápovědy do češtiny`

---

# Závěr

**Ano, článek je připravený k publikaci.**

Pokud chcete být úplně pedantští, upravil bych hlavně **MINOR 1** a **MINOR 3**. Nejsou to ale vady, které by bránily vydání.