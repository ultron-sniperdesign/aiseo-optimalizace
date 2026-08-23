Níže je přísný faktický audit pouze proti dodanému podkladu.

# Verdikt

Článek je **věcně velmi dobře ukotvený** a ve většině klíčových bodů drží zadání i podklad.  
**Nenašel jsem BLOCKING chybu.**  
Našel jsem **2 MAJOR** a **3 MINOR** připomínky, hlavně k formulacím, které jsou o něco silnější, než co podklad výslovně unese.

---

# Co je v pořádku

## 1) StatCounter je popsán korektně
Článek mu **nepřipisuje „špatné měření“**, naopak správně rozlišuje, že měří něco jiného, než se z něj často vyvozuje.

V pořádku jsou zejména tyto pasáže:
- „**StatCounter měří prokliky** ze svého vzorku webů…“
- „**Měří poctivě to, co deklarují.**“
- „…měří se **doručené prokliky, ne dotazy**“
- „vzorek se **nedováží** na strukturu populace“
- „data se **45 dní od zveřejnění revidují**“

To odpovídá podkladu:
- page views, not unique visitors
- no artificial weightings
- sample of sites with installed code
- revision for 45 days
- započtení prokliku při dopadu na web s jejich kódem

## 2) NetMonitor / SPIR je popsán férově
V pořádku:
- „…data i za velké zahraniční platformy“
- „…jejich návštěvnost podle SPIR **modeluje** z českého softwarového PC panelu Gemius a z panelů sousedních trhů“
- „**To je zásah webu, ne počet hledání.**“

To sedí na podklad:
- jde o modelovanou návštěvnost VLOP/VLOSE
- metriky jsou reální uživatelé, reach, čas
- z toho **nelze určit podíl na vyhledávání**

## 3) Článek neujíždí do tématu „kdy investovat do Seznamu“
Zadaný zákaz je dodržen. Text zůstává u:
- metodiky čísel,
- rozdílu mezi měřeními,
- práce s vlastními daty.

To je v souladu se zadáním a nekanibalizuje článek `seznam-cz-ai-vyhledavani`.

## 4) Citační smyčka je použitá přiměřeně
Pasáž není sebestředná; funguje jako obecné varování před řetězením citací. To odpovídá podkladu.

---

# Nálezy

## MAJOR 1 — Příliš absolutní tvrzení, že „žádný z nich neměří počet hledání“

### Vadná pasáž
Frontmatter `answer`:
> „…protože **žádný z nich neměří počet hledání**.“

Úvod:
> „…a **žádné z nich neměří, kolik lidí kde hledalo**.“

Insight:
> „…protože **žádný z nich nepočítá hledání**.“

### Proč je to problém
Podklad bezpečně dokládá:
- StatCounter neměří dotazy/hledání, ale prokliky.
- NetMonitor neměří vyhledávání, ale zásah webů.
- agenturní/nástrojové odhady pracují s vlastním vzorkem.

Podklad ale mluví o:
> „**Nikdo veřejně neměří počet hledání** na českých vyhledávačích.“

To je užší a přesnější tvrzení než absolutní „žádný z nich“. V textu se místy směšují:
- konkrétní diskutované zdroje,
- a obecné tvrzení o tom, že nikdo veřejně neměří hledání.

To není zásadní věcná chyba, ale formulace je **silnější než opora v podkladu**.

### Návrh opravy
Zpřesnit na jednu z variant:
- „…protože **veřejně dostupné zdroje, které se v debatě běžně citují, neměří počet hledání**.“
- „…protože **StatCounter ani NetMonitor neměří počet hledání**.“
- „…protože **veřejně dostupné zdroje k českému trhu nepočítají počet hledání, ale jiné veličiny**.“

---

## MAJOR 2 — Stat `value: "0"` je zbytečně absolutní a hůř obhajitelný než text těla

### Vadná pasáž
Frontmatter `stats`:
```yaml
- value: "0"
  label: "zdrojů, které by měřily počet hledání na českých vyhledávačích"
```

### Proč je to problém
Podklad říká:
> „**Nikdo veřejně neměří počet hledání** na českých vyhledávačích.“

Stat „0 zdrojů“ převádí opatrné tvrzení do **tvrdého kvantifikovaného výroku**, který zní definitivněji.  
Problém je dvojí:

1. **Chybí kvalifikace „veřejně“**.  
   Bez ní tvrzení znamená, že takový zdroj neexistuje vůbec, což podklad nedokládá.

2. Ve statistikách se podobné zkratky čtou jako „ověřený exaktní údaj“, ale tady jde spíš o **stav veřejně dohledatelných zdrojů**, ne o spočítanou veličinu.

### Návrh opravy
Nejbezpečnější varianty:
```yaml
- value: "0"
  label: "veřejně dohledaných zdrojů, které by přímo měřily počet hledání na českých vyhledávačích"
```
nebo raději bez čísla:
```yaml
- value: "veřejně nikdo"
  label: "kdo přímo měří počet hledání na českých vyhledávačích"
```
Případně stat úplně odstranit; je to nejslabší prvek frontmatteru.

---

## MINOR 1 — „Zhoršuje to“ je hodnoticí zkratka; přesnější je „ještě víc omezuje vypovídací hodnotu“

### Vadná pasáž
FAQ:
> „**Zhoršuje to.** Když uživatel dostane odpověď a nikam neklikne…“

### Proč je to problém
Podklad říká:
> „Čím víc odpovědí bez kliknutí, tím míň o hledání takové měření vypovídá.“

To je přesné. „Zhoršuje to“ je srozumitelné, ale trochu zkratkovité: může působit, že AI „kazí měření“, místo aby šlo o to, že **měření založené na proklikách postihuje menší část vyhledávacího chování**.

### Návrh opravy
Např.:
> „**Ještě víc to omezuje vypovídací hodnotu takového měření.** Když uživatel dostane odpověď a nikam neklikne…“

---

## MINOR 2 — U NetMonitoru bych doplnil, že jde o návštěvnost/užití platforem, ne nutně jen „webů“

### Vadná pasáž
FAQ:
> „NetMonitor měří **zásah webů** z panelu…“

Tělo:
> „**To je zásah webu**, ne počet hledání.“

### Proč je to problém
Není to vyloženě chybně, ale podklad mluví o:
- datech za velmi velké online platformy a vyhledávače,
- modelované návštěvnosti,
- metrikách reach / RU / čas.

Formulace „zásah webů“ a „zásah webu“ je trochu užší než realita, protože se bavíte i o platformách typu Google/Meta/Microsoft. V článku to čtenář sice pochopí správně, ale lze to zpřesnit.

### Návrh opravy
Např.:
- „NetMonitor měří **zásah a návštěvnost webů a platforem**…“
- „**To je zásah platformy / služby, ne počet hledání.**“

---

## MINOR 3 — Citační smyčka je v zásadě v pořádku, ale jedna věta může působit příliš zobecňujícím dojmem

### Vadná pasáž
> „**Tak vzniká většina „známých“ čísel v oboru**: jednou se odhad zaokrouhlí, podruhé se ztratí období…“

### Proč je to problém
Podklad dovoluje uvést vlastní zkušenost jako varování:
> „uvést jako varování před řetězením citací, ne jako sebemrskačství“

To článek plní. Jen formulace „většina známých čísel v oboru“ je už širší generalizace, pro kterou v podkladu není přímá opora. Jako rétorika funguje, jako auditovaná faktická věta je to o chlup silnější, než by musela být.

### Návrh opravy
Změkčit:
- „**Takhle často vznikají** ‚známá‘ čísla v oboru…“
- „**Tímhle způsobem se část těchto čísel šíří dál**…“

---

# Drobné ověření jednotlivých bodů ze zadání

## „Je popis metodiky StatCounteru přesný proti citacím v podkladu?“
**Ano.**  
Nevidím posun významu ani podsunutou kritiku. Článek správně rozlišuje:
- page views vs. unique visitors,
- nevážený samovýběrový vzorek,
- proklik na web s kódem,
- revize 45 dní.

## „Nepřipisuje mu článek chybu, kterou nedělá?“
**Ne.**  
Naopak explicitně říká:
> „Nic z toho není výtka. Měří poctivě to, co deklarují.“

## „Je popis NetMonitoru férový?“
**Ano.**  
Je korektně popsán jako:
- panel + model,
- návštěvnost/zásah,
- nikoli měření vyhledávání.

## „Sedí stat `value: "0"`?“
**Spíš ne v této podobě.**  
Věcně míří správným směrem, ale bez slova **„veřejně“** je to příliš absolutní. To je můj hlavní praktický zásah.

## „Není pasáž o citační smyčce sebestředná nebo matoucí?“
**Ne, v zásadě je v pořádku.**  
Jen bych zmírnil větu o „většině známých čísel v oboru“.

## „Neopakuje článek to, co má jiný text o Seznamu?“
**Ne.**  
Drží se metodiky a interpretace čísel.

---

# Doporučené opravy v kostce

## Nutné
1. Zpřesnit absolutní tvrzení typu „žádný z nich neměří počet hledání“ na:
   - „StatCounter ani NetMonitor…“
   - nebo „veřejně dostupné zdroje…“

2. Upravit stat:
```yaml
- value: "0"
  label: "veřejně dohledaných zdrojů, které by přímo měřily počet hledání na českých vyhledávačích"
```
nebo stat odstranit.

## Vhodné
3. „Zhoršuje to“ nahradit přesnější formulací o omezení vypovídací hodnoty.
4. U NetMonitoru mluvit spíš o „webech a platformách/službách“ než jen o „webech“.
5. Zmírnit „Tak vzniká většina známých čísel v oboru“.

---

# Závěr

**Celkově: publikovatelné po menších úpravách.**  
Faktická kostra je správně, článek dobře drží rozdíl mezi:
- prokliky,
- zásahem,
- a skutečným počtem hledání.

Nejslabší místo je **příliš absolutní formulování neexistence zdrojů měřících hledání** a z toho plynoucí stat **„0“** bez kvalifikace „veřejně“. To doporučuji upravit před vydáním.