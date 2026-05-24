## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z velké části správným směrem: vlastní web už není shazovaný, CTA je konkrétní, zakázané termíny typu „schema markup“ se nevyskytují a první odpověď má dobrou délku i strukturu. Článek ale pořád stojí na několika nedoložených tvrzeních a místy znovu sklouzává k overclaimům typu „AI preferuje“ nebo „pro AI je důležitější“.

---

## Nálezy

### [BLOCKER] Opakované odkazy na „veřejné analýzy 2025–2026“ bez konkrétního zdroje

**Citace:**

> „Podle analýz z let 2025–2026 míří citace v AI odpovědích často mimo vlastní doménu značky.“

> „Podle veřejných analýz z let 2025–2026 míří citace v AI odpovědích často na třetí strany, nejen na domény značek.“

> „Podle veřejných analýz z let 2025–2026 proto citace v AI odpovědích často míří na cizí weby…“

**Problém:**  
Tvrzení je ústřední argument článku, ale není doložené žádným konkrétním zdrojem, názvem studie, autorem, datem ani odkazem. Formulace „podle veřejných analýz“ sama o sobě nestačí — čtenář ani auditor neví, o které analýzy jde.

**Návrh opravy:**  
Doplnit do těla článku konkrétní zdroje, ideálně hned za první výskyt tvrzení. Například formou krátké věty:

> „Tento trend popisují například veřejné analýzy [název zdroje, měsíc/rok] a [název zdroje, měsíc/rok]; výsledky se liší podle platformy, jazyka a oboru.“

Pokud konkrétní zdroje nechcete uvádět, tvrzení je potřeba oslabit:

> „V praxi se u části AI odpovědí objevují citace třetích stran, nejen vlastní domény značek.“

---

### [WARNING] Meta description slibuje, že zmínky „pomáhají AI ověřit důvěryhodnost značky“

**Citace:**

> `description: "Jak zmínky o značce na cizích webech pomáhají AI ověřit důvěryhodnost značky — a jak je získávat férově, bez spamu."`

**Problém:**  
„Ověřit důvěryhodnost značky“ je příliš silné. AI systém typicky neověřuje důvěryhodnost značky ve smyslu faktické garance; spíš porovnává, jak je značka popisována napříč zdroji, a může z toho odvozovat užitečnost nebo relevanci citace.

**Návrh opravy:**

> „Jak zmínky o značce na cizích webech pomáhají AI lépe pochopit značku — a jak je získávat férově, bez spamu.“

Nebo přesněji:

> „Jak zmínky o značce na cizích webech mohou posílit důvěru v AI odpovědích — a jak je získávat férově.“

---

### [WARNING] Nadpis „Proč AI dává přednost cizím zdrojům“ je příliš absolutní

**Citace:**

> `## Proč AI dává přednost cizím zdrojům`

**Problém:**  
Nadpis tvrdí obecnou preferenci AI pro cizí zdroje. To není univerzálně pravda — záleží na dotazu, platformě, typu odpovědi, dostupnosti dat, autoritě vlastního webu i oboru.

**Návrh opravy:**

> `## Proč AI často cituje i cizí zdroje`

Nebo:

> `## Proč jsou pro AI důležité i externí zdroje`

---

### [WARNING] Nadpis „Které zdroje AI preferuje“ opět zobecňuje chování AI

**Citace:**

> `## Které zdroje AI preferuje`

**Problém:**  
„Preferuje“ zní jako obecné pravidlo napříč AI vyhledávači. Přitom článek sám správně říká, že se mix liší podle platformy, tématu a jazyka.

**Návrh opravy:**

> `## Které zdroje se v AI citacích často objevují`

Tato formulace je přesnější a odpovídá zbytku textu.

---

### [WARNING] Tvrzení „pro AI je důležitější, že se o vás mluví“ je overclaim

**Citace:**

> „Honit odkazy místo zmínek — pro AI je důležitější, že se o vás mluví.“

**Problém:**  
Tohle znovu zavádí hierarchii „zmínky > odkazy“, kterou předchozí oprava měla odstranit. Navíc není doložené, že zmínky jsou obecně důležitější než odkazy. Bezpečnější je říct, že u AI odpovědí mohou hrát roli i samotné zmínky.

**Návrh opravy:**

> „Honit jen odkazy — u AI odpovědí může hrát roli i samotná zmínka o značce, kontext a zdroj, kde se objevuje.“

---

### [WARNING] „AI systémy hledají shodu napříč nezávislými zdroji“ je moc obecné

**Citace:**

> „AI systémy hledají shodu napříč nezávislými zdroji.“

**Problém:**  
Jako zjednodušení je to srozumitelné, ale formulace zní jako popis univerzálního mechanismu všech AI systémů. To není doložené a u různých platforem se chování liší.

**Návrh opravy:**

> „U odpovědí s citacemi se AI systémy často opírají o více zdrojů a mohou zvýhodnit informace, které se konzistentně objevují na důvěryhodných externích webech.“

---

### [WARNING] Seznam zdrojů potřebuje přesnější kvalifikaci podle oboru a jazyka

**Citace:**

> „Komunitní platformy — Reddit, Quora, Stack Overflow…“

> „Wikipedia — encyklopedický, často citovaný zdroj.“

> „Recenze a srovnávače — nezávislé hodnocení produktu.“

**Problém:**  
Seznam je použitelný, ale pořád působí moc univerzálně. Například Stack Overflow dává smysl hlavně u technických dotazů, Quora a Reddit budou v češtině často méně relevantní než lokální katalogy, média a srovnávače. „Nezávislé hodnocení“ u recenzních webů také nemusí být vždy pravda.

**Návrh opravy:**

- U Stack Overflow doplnit omezení:

> „Stack Overflow u technických a vývojářských témat“

- U recenzí upravit:

> „Recenze a srovnávače — pokud jsou transparentní, reálné a nejde o skrytou reklamu.“

- U komunit dodat:

> „U českých dotazů může být jejich váha nižší než u angličtiny.“

Část o českých dotazech už v článku je — dobré. Jen by měla více ovlivnit i samotný seznam.

---

### [WARNING] „AI rozpozná původní kontext“ je příliš jisté

**Citace:**

> „originální čísla a srovnání zvyšují šanci, že vás jiné weby uvedou jako zdroj a že AI rozpozná původní kontext.“

**Problém:**  
První část je bezpečná. Druhá část slibuje, že AI rozpozná původní kontext, což není jisté. AI může citovat agregátor, médium nebo komunitní diskuzi místo původního zdroje.

**Návrh opravy:**

> „originální čísla a srovnání zvyšují šanci, že vás jiné weby uvedou jako zdroj a že AI lépe pochopí původní kontext.“

Nebo opatrněji:

> „…a mohou AI pomoci spojit téma s vaší značkou jako původním zdrojem.“

---

### [WARNING] „Provozovatelé spam poznají“ je příliš absolutní

**Citace:**

> „Spam v diskuzích a falešné recenze — komunita i provozovatelé je poznají a značce uškodí.“

**Problém:**  
Směr je správný, ale „poznají“ je absolutní. Ne vždy spam odhalí okamžitě, ale riziko poškození reputace je reálné.

**Návrh opravy:**

> „Spam v diskuzích a falešné recenze — komunita i provozovatelé je často odhalí a značce mohou uškodit.“

---

### [TIP] Ve stats zůstalo slovo „konsenzus“, i když zadání říká nahradit ho „shodou napříč zdroji“

**Citace:**

```yaml
- value: "konsenzus"
  label: "shoda napříč zdroji = signál důvěry pro AI"
```

**Problém:**  
V zadání je výslovně uvedeno, že „consensus“ byl nahrazen za „shoda napříč zdroji“. Ve frontmatteru ale zůstává český „konsenzus“. Není to zakázaný termín z obecného slovníku, ale je to zbytečný žargon a nesoulad s deklarovanou opravou.

**Návrh opravy:**

```yaml
- value: "shoda"
  label: "shoda napříč zdroji může být signál důvěry pro AI"
```

Ještě lepší je změkčit i label:

```yaml
- value: "shoda"
  label: "konzistentní informace napříč zdroji mohou AI pomoci"
```

---

### [TIP] „third-party zdroje“ ve keywords je zbytečný hybrid

**Citace:**

```yaml
- "third-party zdroje"
```

**Problém:**  
Česko-anglický hybrid působí méně přirozeně. V článku používáte „třetí strany“ a „cizí zdroje“, což je srozumitelnější.

**Návrh opravy:**

```yaml
- "zdroje třetích stran"
```

Nebo:

```yaml
- "externí zdroje pro AI"
```

---

### [TIP] Formulace v answeru „shodu o značce“ je jazykově neohrabaná

**Citace:**

> „pomáhají ověřit shodu o značce napříč nezávislými zdroji“

**Problém:**  
„Shoda o značce“ nezní přirozeně. Lepší je „shoda v informacích o značce“ nebo „konzistentní informace o značce“.

**Návrh opravy:**

> „pomáhají ověřit shodu v informacích o značce napříč externími zdroji“

Nebo bezpečněji:

> „pomáhají AI porovnat, zda se informace o značce opakují konzistentně napříč externími zdroji.“

Pozor jen na délku answeru — stále má zůstat v rozmezí 40–60 slov.

---

### [TIP] „Off-page“ je vysvětlené, ale pořád by šlo víc počeštit

**Citace:**

> „Tohle je off-page vrstva AI viditelnosti…“

> „Off-page pro AI je dlouhodobá práce…“

**Problém:**  
Termín je v článku vysvětlený, takže nejde o zásadní chybu. Pro brand voice by ale bylo srozumitelnější používat český popis a anglický termín jen jednou.

**Návrh opravy:**

První výskyt ponechat:

> „Tohle je externí, off-page vrstva AI viditelnosti…“

Další výskyty zjednodušit:

> „Externí viditelnost pro AI je dlouhodobá práce…“

---

## Co je v pořádku

- **Title:** „Zmínky o značce…“ má klíčové slovo vepředu a délku přibližně v doporučeném rozsahu.  
- **Meta description:** délka je v pořádku, jen je potřeba změkčit „ověřit důvěryhodnost“.  
- **Answer:** má cca 50 slov, začíná definicí a dává samostatný smysl.  
- **Lead:** prvních ~100 slov funguje jako samostatná odpověď.  
- **Interní odkazy:** jsou relevantní a nekanibalizují produktový audit.  
- **CTA:** závěr směřuje na konkrétní produkty — Pack 1 490 Kč a Audit 9 990 Kč.  
- **Aktuálnost:** datum 2026-05-24 je ukotvené, nejsou tam neukotvená „letos / příští rok“.