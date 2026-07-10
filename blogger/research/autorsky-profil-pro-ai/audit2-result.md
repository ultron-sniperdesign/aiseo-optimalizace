**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní zbývající problémy po opravách. Většina původních blockerů je skutečně vyřešená, ale několik míst ještě zůstává na hraně věcné přesnosti, zakázaného slovníku a citovatelnosti.

---

## Nálezy

### 1) [BLOCKER] Zakázaný termín „schema“ v cílovém slovníku
**Citace:**
- `keywords: "person schema autor"`
- FAQ: „Základ je typ Person podle schema.org...“
- Text: „podle schema.org“
- CTA: „vzor Person strukturovaných dat...“ je v pořádku, ale jinde se „schema“ objevuje opakovaně.

**Problém:**
V zadání je zakázané používat „schema markup“ a preferovaný slovník je „strukturovaná data“. Tady sice nepoužíváte přímo „schema markup“, ale opakované „schema.org“ a zejména keyword „person schema autor“ je v brand voice na hraně a v češtině působí cize. U KW to lze tolerovat jen jako technickou variantu, ale v těle článku by měl převažovat český výraz.

**Návrh opravy:**
- V textu všude preferovat „strukturovaná data typu Person“.
- „podle schema.org“ nechat jen tam, kde je to nutné technicky, ideálně jednou.
- Do `keywords` klidně ponechat variantu kvůli vyhledávání, ale v textu ji nepoužívat jako primární formulaci.

---

### 2) [BLOCKER] Přehnaně silné tvrzení o Google a AI bez opory
**Citace:**
- `description`: „AI i Google čím dál víc řeší, kdo obsah napsal.“
- Úvod: „AI systémy a Google se snaží lépe rozpoznat, kdo obsah napsal...“
- „AI systémy i Google při hodnocení důvěryhodnosti obsahu berou v úvahu E-E-A-T...“

**Problém:**
První dvě formulace jsou ještě přijatelné. Třetí je problémově formulovaná: E-E-A-T není veřejně popisováno jako přímý hodnoticí mechanismus použitelný jednotně pro „AI systémy i Google“. U Google jde o rámec z quality rater guidelines a širší signály, ne o jednoznačně potvrzený faktor v podobě, jak je zde napsáno. U „AI systémů“ je to navíc příliš široké zobecnění.

**Návrh opravy:**
Místo:
> „AI systémy i Google při hodnocení důvěryhodnosti obsahu berou v úvahu E-E-A-T...“

Použít něco jako:
> „Google i některé AI systémy se snaží pracovat se signály důvěryhodnosti obsahu. U Google se v této souvislosti často používá rámec E-E-A-T...“

Tím se odstraní nepřesné tvrzení, že všechny AI systémy „berou v úvahu E-E-A-T“.

---

### 3) [BLOCKER] Nedoložené kvazi-metriky v `stats` a v těle článku
**Citace:**
- `stats.value: "5+" / "3–6 měs." / "5–12"`
- `stats.label`: „u analyzovaných profilů v polovině 2026...“
- FAQ: „funkční seznamy v polovině 2026 mívají 5 až 12 URL“
- Tělo: „Praktické minimum bývají dva; funkční seznamy mívají 5 až 12.“

**Problém:**
Oprava „častý rozsah, ne norma“ pomohla, ale pořád jde o velmi konkrétní čísla bez zdroje a bez vysvětlení, z jakých analýz vycházejí. U edukativního článku jsou takto přesné počty riskantní, protože působí jako pravidlo nebo benchmark. „5 až 12 URL“ je obzvlášť problematické — v praxi je to arbitrární rozsah.

**Návrh opravy:**
- Pokud zdroj není přímo v článku odkazovaný, **vyhodit konkrétní rozsah 5–12 URL**.
- Nahradit obecněji:
  > „sameAs má obsahovat několik ověřených a veřejně dostupných profilů; důležitější než počet je jejich jednoznačnost a kvalita.“
- U 3–6 měsíců ponechat jen jako orientační příklad a ideálně doplnit „u části sledovaných webů“.

---

### 4) [WARNING] „reálné, ne stock“ je stále příliš kategorické
**Citace:**
- Howto: „portrétní foto (reálné, ne stock)“
- Checklist: `image`: „URL portrétní fotky autora (reálná, ne stock).“
- Stepper: „Stock foto nebo generovaný portrét samy o sobě nepomáhají ověřitelnosti...“

**Problém:**
Hlavní problém „stock foto spam claim“ jste opravil, ale v několika dalších částech stále zůstává příliš normativní „ne stock“. Věcně správnější je říct, že stock fotka nepomáhá potvrdit identitu autora; ne že je sama o sobě zakázaná nebo vždy špatně.

**Návrh opravy:**
- Přepsat z „reálné, ne stock“ na:
  > „fotka, která odpovídá skutečné identitě autora; stock fotografie identitu samy nepotvrzují“
- Tuto úpravu udělat konzistentně ve frontmatteru i těle.

---

### 5) [WARNING] „LinkedIn (minimum pro B2B autory v Česku)“ je neukotvené zobecnění
**Citace:**
- „LinkedIn (minimum pro B2B autory v Česku)“

**Problém:**
Tohle je příliš silné a bez opory. Pro řadu autorů může být relevantnější profesní registr, univerzitní profil, GitHub, ORCID apod. „Minimum pro B2B autory v Česku“ zní jako pravidlo.

**Návrh opravy:**
- Změnit na:
  > „LinkedIn bývá u B2B autorů v Česku často užitečný jako jeden z ověřitelných profilů“
- Tím zůstane doporučení, ale ne jako univerzální minimum.

---

### 6) [WARNING] „AI systémům žádný signál důvěry“ je absolutní formulace
**Citace:**
- Howto: „Anonymní autorství nedává AI systémům žádný signál důvěry.“
- Mistake 01: „...nedává AI systémům žádný signál autorské entity.“

**Problém:**
„Žádný signál“ je příliš absolutní. Stránka může nést jiné signály důvěryhodnosti než autora. Problém je spíš v tom, že anonymní autorství **nepřidává jasný autorský signál**.

**Návrh opravy:**
- Nahradit:
  > „nepřidává jasný autorský signál“
  nebo
  > „nepomáhá jednoznačně přiřadit obsah konkrétní osobě“

---

### 7) [WARNING] „Kompletní Person a Article strukturovaná data mívají výrazný dopad“ je stále overclaim
**Citace:**
- „Kompletní Person a Article strukturovaná data mívají podle některých analýz výrazný dopad na míru citací v Google AI Overviews.“

**Problém:**
I s hedgingem je „výrazný dopad“ moc silné. Navíc není jasné, zda jde o korelaci, nebo kauzalitu. U AI Overviews je to obzvlášť citlivé.

**Návrh opravy:**
- Změnit na:
  > „V některých marketingových analýzách se úplnější strukturovaná data častěji objevují u citovaných stránek. Jde ale o korelaci, ne potvrzenou přímou příčinu.“
  
To je přesnější a bezpečnější.

---

### 8) [WARNING] FAQ odpověď o čase stále působí příliš definitivně
**Citace:**
- „autoři s Person strukturovanými daty... začínají vykazovat zlepšení citací zhruba za tři až šest měsíců“

**Problém:**
Odstínění „podle marketingových analýz“ je dobré, ale celá věta je napsaná jako očekávatelný výsledek. U citovatelnosti je to příliš deterministické.

**Návrh opravy:**
- Přepsat na:
  > „u části sledovaných webů se rozdíl častěji ukazoval zhruba po třech až šesti měsících“
- a ponechat dovětek, že nejde o garanci.

---

### 9) [WARNING] „Čekat okamžitý efekt — autorská entita se buduje 3 až 6 měsíců“ v Do/Don’t je příliš tvrdé zjednodušení
**Citace:**
- `dontItems`: „Čekat okamžitý efekt — autorská entita se buduje 3 až 6 měsíců sérií obsahu.“

**Problém:**
V ostatních částech článku je to hedgované, tady se to zase mění na téměř pravidlo.

**Návrh opravy:**
- Změnit na:
  > „Čekat okamžitý efekt — u části webů se změny projeví až po delší době, často v řádu měsíců.“

---

### 10) [WARNING] „Nošný prvek“ u YMYL je srozumitelné, ale pořád dost silné
**Citace:**
- „Ověřitelná kvalifikace autora se tu stává nosným prvkem, ne doplňkem.“
- FAQ: „...je nosná.“

**Problém:**
U YMYL je směr správný, ale formulace je kategorická. Ne každé téma v těchto oblastech musí stát jen na kvalifikaci autora; důležité jsou i zdroje, editace, recenze odborníkem, instituční důvěryhodnost.

**Návrh opravy:**
- Změnit na:
  > „Ověřitelná kvalifikace autora tu často patří mezi nejsilnější signály důvěryhodnosti.“
  
---

### 11) [TIP] Meta description je na hraně stylu a zbytečně míchá AI a Google
**Citace:**
- `description`: „AI i Google čím dál víc řeší, kdo obsah napsal. Naučte se postavit autorský profil pro AI: podpis autora, autorská stránka, strukturovaná data Person a sameAs.“

**Problém:**
Délka je v pořádku, ale první věta je lehce bulvární a druhá je výčtová. Jde to věcněji a citovatelněji.

**Návrh opravy:**
Např.:
> „Zjistěte, jak postavit autorský profil pro AI: podpis autora, autorská stránka, strukturovaná data typu Person a ověřené profily sameAs.“

---

### 12) [TIP] „Co si z článku odnést“ obsahuje anglicismus „Person data“
**Citace:**
- „**Person data** potřebují name...“

**Problém:**
Tohle je zbytečný anglicismus a není v souladu s požadovaným slovníkem.

**Návrh opravy:**
- Nahradit:
  > „Strukturovaná data typu Person potřebují...“

---

### 13) [TIP] Citovatelnost úvodu je už dobrá, ale druhá věta je pořád trochu vatová
**Citace:**
- „AI systémy a Google se snaží lépe rozpoznat, kdo obsah napsal a jestli je autor konzistentně dohledatelný napříč webem a profily.“

**Problém:**
Úvod po opravě už splňuje definici a answer je použitelný. Pro ještě lepší „krátkou odpověď“ by druhá věta mohla být konkrétnější a méně obecná.

**Návrh opravy:**
- Místo obecného „snaží se lépe rozpoznat...“ spíš:
  > „Pomáhá jim k tomu viditelný podpis autora, autorská stránka a ověřitelné odkazy na profily mimo web.“
  
To zlepší samostatnou použitelnost prvních 100 slov.

---

### 14) [TIP] Chybí interní odkaz z praktické části na související produkt nebo pilíř
**Citace:**
- V článku je interní odkaz jen na `/blog/e-e-a-t-pro-ai/`
- Produktové odkazy jsou až v CTA

**Problém:**
Není to blocker, ale u tutorialu by pomohl ještě jeden interní odkaz z relevantního místa v těle, třeba z části o strukturovaných datech nebo z checklistu na produkt /pack/ nebo související článek o strukturovaných datech, pokud existuje. Zadání chtělo interní odkazy na relevantní sekce / pilíř / produkty.

**Návrh opravy:**
- Přidat 1 interní odkaz v těle tam, kde je přirozený kontext:
  - u „Person strukturovaná data“ → na článek o strukturovaných datech
  - u „autorská stránka“ → na /pack/ jako šablonu
- Nepřehánět, stačí jeden.

---

## Co je už po opravách v pořádku

- **Title** je teď SEO i významově výrazně lepší.
- **Slug** je smysluplný a odpovídá KW.
- **Úvod** už začíná definicí a funguje jako samostatná odpověď.
- **FAQ** je po zkrácení použitelnější a méně duplicitní.
- **CTA** je konkrétní, produktové a splňuje zadání.
- Oprava kolem **sameAs a osobního webu na jiné doméně** je správně.
- Oprava kolem **„Jan Novák“ vs „Jan M. Novák“** je už bezpečně formulovaná.
- Oprava kolem **Rich Results Test vs validátor schema.org** je věcně lepší než původní verze.

---

## Shrnutí k publikaci

Článek je po prvním kole oprav **výrazně lepší**, ale ještě bych ho **nepublikoval bez další úpravy**. Hlavní důvody:
1. zůstávají **příliš konkrétní a nezdrojované kvazi-benchmarky** (hlavně 5–12 URL, 3–6 měsíců jako téměř pravidlo),
2. místy jsou stále **silné kauzální formulace** o dopadu na citace,
3. objevují se drobné odchylky od požadovaného **slovníku a brand voice**.

Po zjemnění těchto míst bude článek publikačně použitelný.