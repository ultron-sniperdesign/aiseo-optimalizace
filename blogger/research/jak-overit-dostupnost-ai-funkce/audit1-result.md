Verdikt: **článek je věcně velmi solidní, ale má 2 MAJOR vady a 3 MINOR připomínky. BLOCKING chybu nevidím.**

---

## Shrnutí auditu

### Co je v pořádku
- Metoda odpovídá podkladu a drží hlavní princip: **oznámení + nápověda, rozhoduje výslovný seznam zemí/jazyků**.
- Rozdíl **„nedoloženo“ vs. „nedostupné“** je v článku držený dobře a opakovaně.
- Tabulka pěti příkladů je **v zásadě přesná** a nepřekračuje podklad.
- Článek není jen popis autorovy práce; ve většině částí je použitelný i jako návod pro čtenáře.

---

# Nálezy

## MAJOR 1 — V kroku 5 chybí explicitní kontrola podmínek přístupu typu Labs / typ účtu / rollout gate

### Vadná pasáž
> **„Když nic nerozhodne, rozhodne vlastní test“**  
> „A i ten platí pro jeden účet, jednu zemi a jeden okamžik. Zapište si datum, zařízení a jestli jste byli přihlášení.“

a také:

> **„Pět kroků“**  
> v krocích není zmíněno, že funkce může být podmíněná zvláštním zapnutím, typem účtu nebo jinou vstupní podmínkou přístupu.

### Proč je to problém
V zadání výslovně chceš ověřit, zda metoda není neúplná např. o **účet, Labs, verzi aplikace**. Podklad sice jmenuje hlavně „jeden účet, jednu zemi, jeden okamžik“, ale článek už sám níže správně doplňuje:

> „část funkcí na firemních účtech Workspace nefunguje.“

To znamená, že **podmínky přístupu nejsou jen detail testu, ale součást metody ověřování**. Pokud je čtenář nezkontroluje, může dojít ke špatnému závěru „není to v Česku“, přestože mu chybí jen správný typ účtu / zapnutí experimentu / aktuální aplikace.

To není BLOCKING, protože článek to částečně zachytí v checklistu, ale v samotných **5 krocích** to chybí a jde o prakticky důležitou mezeru.

### Návrh opravy
Doplnit do kroku 5 nebo vložit samostatný mezikrok, např.:

> **Než uděláte vlastní test, zkontrolujte podmínky přístupu.**  
> U některých funkcí rozhoduje typ účtu, přihlášení, verze aplikace, platforma nebo to, jestli je funkce vedená jako experiment (např. Labs). Negativní výsledek bez této kontroly není průkazný.

Případně upravit krok 5 takto:

> „Když nic nerozhodne, rozhodne vlastní test — ale až po kontrole podmínek přístupu: typ účtu, přihlášení, platforma, verze aplikace a případné zapnutí experimentu.“

---

## MAJOR 2 — Tvrzení „Když ho má, je hotovo“ je zbytečně silné a metodicky moc absolutní

### Vadná pasáž
> **„Klíčové je, jestli nápověda má seznam zemí a jazyků. Když ho má, je hotovo.“**

### Proč je to problém
Podklad říká:

> „Rozhoduje, jestli obsahuje **výslovný seznam zemí a jazyků**…“

To článek vystihuje správně. Ale formulace **„je hotovo“** je příliš definitivní. V kontextu zbytku textu sice asi znamená „pro otázku veřejně doložitelné dostupnosti“, jenže bez dovětku může čtenář pochopit, že tím je vyřešeno vše: účet, platforma, rollout, funkčnost v praxi.

To je v napětí s pozdějšími výhradami:
- „Metoda odpoví jen na otázku dostupnosti, ne na to, jak dobře funkce v češtině funguje.“
- „část funkcí na firemních účtech Workspace nefunguje.“
- „Desktop a mobil jsou dva různé testy.“

### Návrh opravy
Zpřesnit větu, např.:

> „Klíčové je, jestli nápověda má výslovný seznam zemí a jazyků. **Když v něm je Česko a čeština, máte veřejně doloženou dostupnost — ne ale automaticky stejný stav pro každý účet a každé zařízení.**“

---

## MINOR 1 — FAQ používá jiný název funkce než tabulka, což může mást

### Vadná pasáž
V FAQ:
> „U funkce **Zeptat se Map** i u **Režimu AI v Chromu** je česká nápověda…“

V těle/tabulce:
> „**Rozdělené zobrazení v AI Mode v Chromu**“

### Proč je to problém
Nejde o faktickou chybu, ale o **terminologickou nekonzistenci**. Čtenář může nabýt dojmu, že jde o dvě různé funkce v Chromu:
- jednou „Režim AI v Chromu“
- podruhé „Rozdělené zobrazení v AI Mode v Chromu“

Podklad přitom mluví konkrétně o:
> **„Rozdělené zobrazení v AI Mode v Chromu“**

### Návrh opravy
Sjednotit název ve FAQ na totéž označení jako v tabulce, např.:

> „U funkce Zeptat se Map i u **rozděleného zobrazení v AI Mode v Chromu** je česká nápověda…“

---

## MINOR 2 — Stat `value: "0"` je sice obhajitelný, ale bez kontextu působí lehce rétoricky

### Vadná pasáž
> `value: "0"`  
> `label: "co dokazuje česká verze nápovědy o dostupnosti funkce"`

### Proč je to problém
Obsahově to sedí na podklad:

> „Česká verze nápovědy dokazuje jen to, že existuje přeložený řetězec.“

Tedy o **dostupnosti** sama o sobě skutečně nedokazuje nic. Problém je spíš prezentační: samotná nula bez dovětku může působit jako zkratka nebo slogan. Není to faktická chyba, ale je to lehce matoucí, protože čtenář může přehlédnout klíčové omezení „sama o sobě“.

### Návrh opravy
Zpřesnit label, například:

- `label: "co sama česká verze nápovědy dokazuje o dostupnosti funkce"`
- nebo
- `label: "co o dostupnosti dokazuje samotný překlad nápovědy"`

Tím se odstraní možnost přehnaného čtení.

---

## MINOR 3 — V části o formulacích je věta „výčet je úplný“ o chlup silnější, než co podklad přímo říká

### Vadná pasáž
> *„available in the U.S. and India“* | **„výčet je úplný — jinde v den vydání funkce nebyla“**

### Proč je to problém
Podklad uvádí tento typ formulace jen jako:
> „výčet zemí („in the U.S. and India")“

Z toho se běžně dá rozumně číst, že jde o explicitně vyjmenované dostupné země. Ale slovo **„úplný“** už je interpretace navíc. Ve většině PR textů bude prakticky správná, jen není v podkladu výslovně opřená.

Není to MAJOR, protože jde o vysvětlující zkratku a zbytek článku je opatrný. Ale jako auditor bych tu formulaci zjemnil.

### Návrh opravy
Místo:
> „výčet je úplný — jinde v den vydání funkce nebyla“

raději:
> „oznámení výslovně jmenuje jen tyto země; pro jiné země z něj dostupnost nevyčtete“

To je metodicky přesnější a lépe ladí s celým článkem.

---

# Kontrola zvlášť podle zadání

## 1) Je metoda úplná?
**Skoro ano, ale ne úplně.**

Chybí mi v samotných krocích explicitní kontrola:
- typu účtu,
- případného experimentálního režimu / vstupní podmínky,
- verze aplikace / platformy.

Článek to **částečně napravuje** až v checklistu:
> „část funkcí na firemních účtech Workspace nefunguje.“
> „Desktop a mobil jsou dva různé testy.“

To je dobře, ale pro návod by to mělo být výslovně součástí metody, ne až poznámka bokem.

## 2) Sedí tabulka pěti příkladů přesně na podklad?
**Ano, v zásadě sedí.**

### Přesné a v pořádku
- **AI Mode ve vyhledávání** → „ano, doloženo“ odpovídá podkladu.
- **Search Live** → „ano, doloženo přes odkaz“ odpovídá podkladu.
- **Ask Maps** → „nedoloženo“ odpovídá podkladu.
- **Rozdělené zobrazení v AI Mode v Chromu** → „nedoloženo“ odpovídá podkladu.

### Mírná poznámka
- **Propojené aplikace v AI Mode**  
  Článek píše:
  > „Gmail a Fotky bez omezení, ale u Kalendáře stojí „only available in the US in English““

  Podklad říká:
  > „nearly 200 countries and territories across 98 languages — no subscription required“
  > „Connecting to Google Calendar is only available in the US in English“
  > „⚠️ částečně — Gmail a Fotky ano, Kalendář ne“

  Tady bych jen stylisticky zjemnil „bez omezení“, protože podklad explicitně nedokládá „bez omezení“ ve smyslu všech možných omezení; dokládá dostupnost v širokém geograficko-jazykovém rozsahu. Ale závěr **„částečně“** je správný.

Doporučená úprava:
> „Gmail a Fotky jsou podle oznámení dostupné široce, ale u Kalendáře stojí…“

## 3) Je rozdíl „nedoloženo vs. nedostupné“ držený všude?
**Ano.**
Tohle je silná stránka článku. Nevidím místo, kde by text sklouzl k tvrzení, že „nedoloženo“ znamená „v Česku není“.

## 4) Stat `value: "0"` — srozumitelný, nebo matoucí?
**Spíš lehce matoucí než chybný.**
Obsahově obhajitelné, ale doporučuji doplnit „sama o sobě“ / „samotná česká verze“, viz MINOR 2.

## 5) Není článek jen popisem toho, co dělá autor, místo návodu použitelného pro čtenáře?
**Ne.**
Je to použitelný návod:
- má jasné kroky,
- vysvětluje typické formulace,
- uvádí příklady,
- přidává checklist pro vlastní test.

Jen bych posílil univerzální použitelnost doplněním kontroly podmínek přístupu přímo do metodiky.

---

# Doporučené opravy v kostce

1. **Doplnit do 5 kroků kontrolu podmínek přístupu**  
   (typ účtu, platforma, verze aplikace, případný experiment/Labs).

2. **Zjemnit absolutní formulaci**
   > „Když ho má, je hotovo.“
   na něco jako
   > „…máte veřejně doloženou dostupnost.“

3. **Sjednotit název chromové funkce**
   mezi FAQ a tabulkou.

4. **Zpřesnit stat s nulou**
   přidáním „sama o sobě“.

5. **Zjemnit „výčet je úplný“**
   na metodicky opatrnější formulaci.

---

## Celkový závěr
**Publikovatelný po menších úpravách.**  
Fakticky je článek pevný, tabulka příkladů sedí a klíčové rozlišení mezi **doloženým**, **nedoloženým** a **vlastním testem** je zpracované správně. Největší slabina je, že samotná metodika v pěti krocích ještě neumí čtenáře dost explicitně upozornit na **podmínky přístupu** mimo geolokaci a jazyk.