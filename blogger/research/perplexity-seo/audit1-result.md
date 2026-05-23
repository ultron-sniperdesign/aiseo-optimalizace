## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrý základ: jasný informační intent, relevantní interní odkazy, konkrétní CTA na Pack i audit, bezpečné hlavní sdělení „citaci nelze zaručit“ a velmi dobrý frontmatter `answer` — má cca 55 slov, začíná definicí a dává samostatný smysl.

Před publikací ale vyžaduje opravy kvůli několika příliš absolutním nebo nedoloženým tvrzením, nekonzistenci „4 pilíře vs. 5 kroků“ a drobnému SEO problému v titulku.

---

## Nálezy a doporučené opravy

### [BLOCKER] Nedoložené odkazování na „veřejné analýzy 2025–2026“

**Problémové místo:**

> „Podle veřejných analýz z let 2025–2026 ovlivňuje citace v Perplexity několik faktorů…“

> „Podle analýz dává smysl interval zhruba každé 2–3 měsíce…“

> „podle pozorování bývá rychlé — řádově dny, ne měsíce.“

**Problém:**  
Text se opírá o „analýzy“ a „pozorování“, ale neuvádí žádný konkrétní zdroj. U článku o AI vyhledávání je to slabé jak věcně, tak pro citovatelnost. Čtenář ani AI nemají jak ověřit, odkud tvrzení pochází.

**Návrh opravy:**  
Doplnit 2–4 konkrétní odkazy přímo do textu nebo do krátké sekce „Zdroje a poznámka k datům“. Pokud zdroje doplnit nechcete, změkčit formulace:

```md
Z dostupných oborových pozorování a testů vyplývá, že u Perplexity může hrát výraznou roli relevance, aktuálnost, struktura obsahu a důvěryhodnost zdroje. Přesné váhy Perplexity veřejně neuvádí, proto je berte jako praktické hypotézy, ne jako potvrzené ranking faktory.
```

---

### [BLOCKER] Příliš absolutní tvrzení o tom, že Perplexity cituje „každou odpověď“

**Problémové místo:**

> „Perplexity se od ostatních nástrojů liší tím, že každou odpověď otevřeně opírá o citované zdroje — buď jste mezi nimi, nebo ne.“

**Problém:**  
„Každou odpověď“ je příliš absolutní. Perplexity typicky pracuje se zdroji a citacemi, ale podle režimu, dotazu nebo typu odpovědi nemusí být tvrzení „každou“ bezpečné. Druhá část „buď jste mezi nimi, nebo ne“ navíc působí zbytečně tvrdě a zjednodušuje realitu.

**Návrh opravy:**

```md
Perplexity u vyhledávacích odpovědí typicky zobrazuje citované zdroje, takže je často vidět, z jakých webů odpověď vychází. Pro značky to znamená, že nestačí být dohledatelné — obsah musí být dostatečně konkrétní, aktuální a důvěryhodný, aby měl šanci mezi citovanými zdroji být.
```

---

### [WARNING] Nekonzistence: článek slibuje 4 pilíře, ale uvádí 5 kroků

**Problémové místo:**

> „Perplexity SEO: čtyři pilíře citací v Perplexity“

> „Stojí na čtyřech pilířích…“

Následně ale struktura obsahuje:

> „Krok 1…“ až „Krok 5: Buďte věcně přítomní na Redditu“

**Problém:**  
Čtenář dostane rámec „4 pilíře“, ale pak článek nabízí 5 kroků. Reddit je spíš distribuční / reputační taktika uvnitř pilíře „shoda napříč zdroji“, ne samostatný pátý pilíř.

**Návrh opravy:**  
Buď změnit framing na „4 pilíře + 1 praktická taktika“, nebo Reddit přesunout pod Krok 4 jako H3.

Doporučená varianta:

```md
## Perplexity SEO: čtyři pilíře a jedna praktická taktika

...

## Krok 4: Vytvořte shodu napříč zdroji

### Praktická taktika: buďte věcně přítomní na Redditu
```

Tím zůstane zachovaný silný argument Redditu, ale nerozbije se struktura článku.

---

### [WARNING] Tvrzení o rychlosti citací „řádově dny, ne měsíce“ je příliš silné

**Problémové místo:**

> „U dobře strukturovaného a aktuálního obsahu to podle pozorování bývá rychlé — řádově dny, ne měsíce.“

> „nový kvalitní obsah se může do citací dostat krátce po publikaci.“

**Problém:**  
I když je formulace částečně změkčená („podle pozorování“, „může“), „řádově dny, ne měsíce“ zní jako téměř očekávatelný výsledek. U klientského obsahu to může vyvolat nerealistické očekávání.

**Návrh opravy:**

```md
U části dobře strukturovaného a aktuálního obsahu se citace mohou objevit rychle, někdy v řádu dní. Nelze to ale garantovat — záleží na tématu, konkurenci zdrojů, jazyce dotazu a tom, zda Perplexity daný obsah vůbec vyhodnotí jako vhodný zdroj.
```

---

### [WARNING] „Perplexity upřednostňuje aktuální obsah“ je formulováno příliš plošně

**Problémové místo:**

> „Perplexity upřednostňuje aktuální obsah.“

> „Tohle je u Perplexity nejvýraznější pilíř.“

**Problém:**  
Aktuálnost je důležitá hlavně u témat, kde se informace mění: ceny, nástroje, trendy, legislativa, produktové funkce, srovnání. U evergreen témat nemusí být čerstvost hlavní faktor.

**Návrh opravy:**

```md
U témat, kde se informace rychle mění, může mít aktuálnost výrazný vliv na šanci být citovaným zdrojem. Typicky jde o ceny, nástroje, srovnání, produktové funkce, trendy nebo data vázaná na konkrétní rok.
```

---

### [WARNING] Absolutní formulace „bez shody napříč zdroji citace nepřijde“

**Problémové místo:**

> „Spoléhat jen na vlastní web — bez shody napříč zdroji citace nepřijde.“

**Problém:**  
„Citace nepřijde“ je příliš absolutní. Citace může přijít i z vlastního webu, pokud je stránka velmi relevantní, dobře strukturovaná a autoritativní. Bez externích zmínek je pouze menší pravděpodobnost.

**Návrh opravy:**

```md
Spoléhat jen na vlastní web — bez konzistentních zmínek jinde je citace méně pravděpodobná, hlavně u konkurenčních nebo hodnoticích dotazů.
```

---

### [WARNING] Formulace „než ji s jistotou doporučí“ zbytečně přehání jistotu AI

**Problémové místo:**

> „Perplexity i další AI hledají shodu o vaší značce napříč více nezávislými zdroji, než ji s jistotou doporučí.“

**Problém:**  
AI nástroje značky „s jistotou“ nedoporučují v lidském smyslu. Navíc jde o neověřitelný vnitřní proces modelu/systému.

**Návrh opravy:**

```md
Perplexity i další AI nástroje mohou lépe vyhodnotit důvěryhodnost značky, když se o ní konzistentně píše napříč více nezávislými zdroji.
```

---

### [WARNING] Tvrzení o Redditu potřebuje zdroj nebo přesnější formulaci

**Problémové místo:**

> „Perplexity cituje komunitní obsah častěji než jiné nástroje.“

> „Výrazně častěji než jinde se v citacích objevuje komunitní obsah, typicky Reddit.“

> „Proč Perplexity tak často cituje Reddit?“

**Problém:**  
Tohle může být pravda podle konkrétních analýz, ale v článku není uvedeno podle jakých. „Tak často“ a „výrazně častěji“ jsou silné komparativy.

**Návrh opravy:**  
Buď dodat konkrétní zdroj, nebo změkčit:

```md
V některých typech dotazů se v citacích Perplexity objevuje i komunitní obsah, například Reddit. Dává smysl ho brát jako doplňkový reputační kanál — ne jako místo pro spam nebo umělé promo.
```

A FAQ otázku upravit na:

```md
q: "Proč se v citacích Perplexity objevuje Reddit?"
```

---

### [WARNING] „Autorita domény“ je nepřesný a nedoložený pojem

**Problémové místo:**

> „…relevance obsahu, jeho umístění a struktura, autorita domény, čerstvost, rozmanitost zdrojů a strukturovaná data.“

**Problém:**  
„Autorita domény“ zní jako konkrétní ranking faktor, ale Perplexity veřejně nepotvrzuje, že používá metriky typu Domain Authority. Bez vysvětlení to může být zavádějící.

**Návrh opravy:**

```md
…relevance obsahu, přehledná struktura stránky, důvěryhodnost a známost zdroje, aktuálnost, rozmanitost zdrojů a strojově čitelná struktura obsahu.
```

---

### [WARNING] Strukturovaná data jsou popsána jako příliš přímý signál pro Perplexity

**Problémové místo:**

> „Strukturovaná data pomáhají Perplexity i dalším nástrojům rozpoznat typ obsahu, autora a organizaci.“

**Problém:**  
Strukturovaná data jsou správné doporučení, ale není bezpečné tvrdit, že Perplexity je přímo používá konkrétním způsobem. Lepší je formulovat je jako pomoc pro strojovou čitelnost a širší vyhledávací ekosystém.

**Návrh opravy:**

```md
Strukturovaná data pomáhají vyhledávačům a AI ekosystému lépe pochopit typ obsahu, autora, organizaci a vztahy mezi stránkami. Sama o sobě citaci v Perplexity nezajistí, ale zlepšují strojovou čitelnost webu.
```

---

### [WARNING] Doporučení k Rich Results Testu je potřeba zpřesnit

**Problémové místo:**

> „Ověřte je v Testu rozšířených výsledků (Rich Results Test) a ve validátoru strukturovaných dat Schema.org.“

**Problém:**  
Google Rich Results Test neověřuje všechny typy strukturovaných dat stejně a neznamená, že stránka získá rozšířený výsledek. U FAQPage a HowTo je navíc viditelnost v Googlu omezená. Pro rok 2026 je potřeba formulovat přesněji.

**Návrh opravy:**

```md
Syntaxi ověřte ve Schema.org validatoru. Google Rich Results Test používejte jen pro typy, které Google aktuálně podporuje v rozšířených výsledcích. Validní strukturovaná data neznamenají automaticky lepší pozici ani citaci, ale snižují riziko, že stroje obsah špatně pochopí.
```

---

### [WARNING] Titulek má 49 znaků, požadavek je 50–60

**Problémové místo:**

```yaml
title: "Perplexity SEO: jak získat citace v Perplexity AI"
```

**Problém:**  
Titulek má přibližně 49 znaků. Klíčové slovo je správně vepředu, ale nesplňuje požadovaný rozsah 50–60 znaků.

**Návrh opravy:**

```yaml
title: "Perplexity SEO: citace v Perplexity AI krok za krokem"
```

Tento návrh má cca 53 znaků, drží cílové KW na začátku a odpovídá tutorial intentu.

---

### [TIP] Meta description je délkově v pořádku, ale poslední věta může znít moc výsledkově

**Problémové místo:**

```yaml
description: "Optimalizace pro Perplexity AI krok za krokem: čerstvost obsahu, citovatelná struktura, strukturovaná data a shoda napříč zdroji. Jak se dostat do citací."
```

**Hodnocení:**  
Délka cca 153 znaků je v pořádku. Obsahově je popis relevantní. Slabší je formulace „Jak se dostat do citací“, která může znít jako příslib výsledku.

**Návrh opravy:**

```yaml
description: "Optimalizace pro Perplexity AI krok za krokem: čerstvost obsahu, citovatelná struktura, strukturovaná data a shoda napříč zdroji."
```

Nebo:

```yaml
description: "Perplexity SEO krok za krokem: jak zvýšit šanci na citace pomocí aktuálního obsahu, strukturovaných dat a shody napříč zdroji."
```

---

### [TIP] Anglické termíny „Recency boost“ a „consensus signál“ zhoršují srozumitelnost

**Problémové místo:**

> „Recency boost“

> „consensus signál“

> „Vytvořte shodu napříč zdroji (consensus)“

**Problém:**  
Nejde o zakázané termíny, ale pro brand voice webu je lepší věcná čeština. „Consensus signál“ působí jako interní žargon.

**Návrh opravy:**

```md
- **Zvýhodnění aktuálnosti** — u témat, kde se informace mění, může mít aktuální obsah navrch.
- **Transparentní citace** — odpovědi často ukazují zdroje, ze kterých vycházejí.
- **Shoda napříč zdroji** — Perplexity může porovnávat informace z více nezávislých webů, včetně komunitních diskuzí.
```

A ve FAQ:

```md
takzvaný signál shody — tedy konzistentní informace o značce napříč více nezávislými zdroji
```

---

### [TIP] Překlep / nevhodný tvar „ve své nice“

**Problémové místo:**

> „Vyplatí se proto být ve své nice přítomní i v diskuzích…“

**Problém:**  
„Nice“ je neobratný počeštěný tvar z „niche“. Pro srozumitelný tón použít raději „obor“, „téma“ nebo „segment“.

**Návrh opravy:**

```md
Vyplatí se proto být ve svém oboru přítomní i v relevantních diskuzích.
```

---

### [TIP] FAQ je dobré, ale jedna odpověď obsahuje nejasné „jinde“

**Problémové místo:**

> „Výrazně častěji než jinde se v citacích objevuje komunitní obsah, typicky Reddit.“

**Problém:**  
„Jinde“ není samostatně jasné. FAQ odpověď má být sebestačná, protože ji může AI citovat mimo kontext článku.

**Návrh opravy:**

```md
Perplexity u vyhledávacích odpovědí typicky zobrazuje citované zdroje. Ve srovnání s obecnými chatboty proto více záleží na tom, zda je váš obsah dohledatelný, aktuální a vhodný jako zdroj. U některých dotazů se mezi zdroji objevují i komunitní weby, například Reddit.
```

---

### [TIP] CTA je konkrétní a odpovídá zadání, jen bych změkčil „během jednoho odpoledne“

**Problémové místo:**

> „…se kterým začnete během jednoho odpoledne.“

**Hodnocení:**  
CTA je jinak velmi dobré: vede na konkrétní produkt Pack za 1 490 Kč i Audit za 9 990 Kč, ne na generické „kontaktujte nás“.

**Riziko:**  
„Během jednoho odpoledne“ je drobný produktový claim. Není zakázaný, ale může být příliš konkrétní pro různé typy webů.

**Návrh opravy:**

```md
…se kterým si připravíte první návrh struktury a šablon bez toho, abyste začínali od prázdné stránky.
```

---

## Shrnutí priorit oprav

1. Doplnit zdroje k analýzám 2025–2026, nebo změkčit všechna tvrzení založená na „analýzách“.  
2. Opravit absolutní formulace: „každou odpověď“, „citace nepřijde“, „s jistotou doporučí“, „dny, ne měsíce“.  
3. Sjednotit strukturu: 4 pilíře vs. 5 kroků.  
4. Upravit titulek na 50–60 znaků.  
5. Zpřesnit pasáž o strukturovaných datech a validaci.  
6. Počeštit „Recency boost“, „consensus signál“ a opravit „nice“.