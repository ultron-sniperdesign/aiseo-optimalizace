Verdikt: **připravené k publikaci**.

V tomhle kole **nevidím žádnou BLOCKING ani MAJOR vadu**. Opravy z prvního auditu drží: absolutní tvrzení jsou kvalifikovaná, číslo **14,05 %** je konzistentně zasazené do zdroje/období/metody a článek dává i praktickou odpověď, nejen metodický rozklad.

Níže jen **2 MINOR** k doladění.

---

## Shrnutí kontroly podle zadání

### 1) Absolutní tvrzení bez kvalifikace „veřejně“
**V pořádku.** Klíčové formulace jsou kvalifikované:

- „**ani jedno z veřejně dostupných měření** nepočítá, kolik lidí kde hledalo“
- „**Počet hledání na českých vyhledávačích veřejně nikdo neměří.**“
- „Správné číslo pro otázku ‚kolik lidí kde hledá‘ **veřejně neexistuje**.“

To je po opravě metodicky obhajitelné.

### 2) Je 14,05 % vždy se zdrojem, obdobím a tím, co měří?
**Prakticky ano.** V kritických místech ano:

- `stats`: „**podíl Seznamu v datech StatCounteru za červenec 2026**“
- FAQ: „**V datech StatCounteru za červenec 2026** měl Seznam 14,05 procenta…“
- perex/answer: navázáno na vysvětlení, že StatCounter měří prokliky
- hlavní text: „**StatCounter měří prokliky** … za červenec 2026 vychází Seznam na 14,05 %“

Nejde o situaci, kde by číslo viselo samo bez kontextu.

### 3) Dostane čtenář konkrétní odpověď na otázku z titulku?
**Ano.** Článek neuhýbá do čisté epistemologie; odpověď je:

- veřejně dostupné zdroje **neměří počet hledání**,
- pokud ale někdo chce používané veřejné číslo, pak **StatCounter za červenec 2026 dává Seznamu 14,05 % prokliků ve svém vzorku**.

To odpovídá slibu „**Záleží, co vlastně měříte**“.

### 4) Není „měřte si vlastní data“ prázdná rada?
**Ne.** Má to aspoň základní postup:

- podívat se v analytice na návštěvy ze Seznamu vs. Googlu,
- doplnit konverze,
- rozdělit podle typu dotazu,
- u cizího čísla uvést zdroj/období/metodu.

To už není prázdná fráze.

---

## MINOR

### MINOR 1 — drobná nekonzistence v přesnosti formulace o NetMonitoru/SPIR
**Citace:**
- „Nabízí se **NetMonitor od SPIR**, protože je to česká měna pro návštěvnost.“
- „…takže se jejich návštěvnost **podle SPIR** modeluje z českého softwarového PC panelu Gemius a z panelů sousedních trhů.“

**Problém:**
V podkladu je opora přes **MediaGuru** referující změnu v NetMonitoru/SPIR. Text to podává jako přímé tvrzení „podle SPIR“, což může být pravda, ale v rámci přísné auditní stopy je o chlup čistší držet formulaci blíž doloženému řetězci.

**Návrh:**
Změnit třeba na:
- „…takže se jejich návštěvnost **v projektu NetMonitor podle popisu citovaného MediaGurem** modeluje…“
  
nebo úsporně:
- „…takže se jejich návštěvnost **v NetMonitoru modeluje** z českého softwarového PC panelu Gemius a z panelů sousedních trhů.“

Tím se zmenší riziko, že připisujete přesnou formulaci jinému primárnímu zdroji, než který byl reálně ověřen.

---

### MINOR 2 — závěrečné „Žádné z těch čísel neměří hledání“ je srozumitelné, ale lehce moc plošné
**Citace:**
- „**Žádné z těch čísel neměří hledání.** Měří prokliky nebo zásah, a to jsou jiné veličiny.“

**Problém:**
Smysl je jasný a v kontextu článku správný, ale věta může působit moc absolutně vůči všem číslům zmíněným v oboru obecně, nejen vůči číslům rozebíraným v článku. Formálně je opora v textu pro **veřejně dostupná měření, která tu rozebíráte**.

**Návrh:**
Lehce zpřesnit:
- „**Žádné z veřejně používaných čísel, která tu rozebírám, neměří přímo hledání.**“
  
nebo:
- „**Ta čísla, která se tu nejčastěji citují, neměří přímo hledání.**“

Není to nutná oprava, spíš dotažení tónu do stejné přesnosti jako ve zbytku textu.

---

## Co jsem kontroloval jako potenciálně rizikové a vyšlo dobře

### MDX / struktura
Nevidím rozbitou syntaxi. Frontmatter i importy dávají smysl, komponenty jsou korektně uzavřené, `Checklist` má validně zapsané `items={[ ... ]}`.

### Vnitřní konzistence čísel
Konzistentní všude:
- **Seznam 14,05 %**
- **Google 81,07 %**
- **Bing 3,72 %**
- období: **červenec 2026**
- odečet: **18. 8. 2026**

### Metodický výklad
Je konzistentní:
- StatCounter = **page views / prokliky ve vzorku webů s kódem**, bez vážení
- NetMonitor = **reach / RU / čas**, u velkých zahraničních platforem modelování
- z toho neplyne „podíl na hledání“

### Odpověď v titulku vs. obsah
Sedí. Není to clickbaitový titulek bez odpovědi.

---

## Závěr

**Ano, článek je připravený k publikaci.**

Pokud chcete publikovat hned, šel bych s tím ven i bez dalších zásahů.  
Pokud chcete poslední mikrodočištění, upravil bych jen tyto dvě drobnosti:

1. zjemnit „podle SPIR“ u modelování NetMonitoru,
2. zpřesnit závěrečné „Žádné z těch čísel…“ na méně plošnou formulaci.

Jinak **0 BLOCKING, 0 MAJOR, 2 MINOR**.