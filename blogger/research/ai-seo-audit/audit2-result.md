## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jdou správným směrem: tón je výrazně méně agresivní, CTA je konkrétní, struktura článku je logická a `updated: "2026-05-24"` je v pořádku. Stále ale zůstávají věcné a citační problémy — hlavně přesná čísla bez konkrétních zdrojů, nepřesnost kolem `Google-Extended` a několik vět, které znějí jako kauzální jistota, i když jde jen o zvýšení šance.

---

## Nálezy

### [BLOCKER] Přesná čísla ve `stats` nejsou konkrétně ozdrojovaná

**Citace:**

```yaml
stats:
  - value: "+527 %"
    label: "růst zájmu o AI vyhledávání (analýzy 2025)"
  - value: "78 %"
    label: "firem zatím bez viditelnosti v AI odpovědích"
```

**Problém:**  
Čísla `+527 %` a `78 %` vypadají velmi přesně, ale článek neuvádí konkrétní zdroj, metodiku, trh, období ani definici metriky. Obecné „analýzy 2025“ nestačí. Pokud se tyto hodnoty zobrazí jako stat dlaždice, působí jako tvrdý fakt.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj přímo do textu / poznámky, např. „podle [název studie, měsíc 2025]“, nebo čísla odstranit / zjemnit.

Možná bezpečnější varianta:

```yaml
stats:
  - value: "rychlý růst"
    label: "zájmu o AI vyhledávání podle veřejných analýz 2025–2026"
  - value: "většina firem"
    label: "zatím nemá systematicky měřenou viditelnost v AI odpovědích"
```

Nebo ponechat přesná čísla jen tehdy, pokud bude jasně uvedeno: kdo je změřil, na jakém vzorku, v jaké zemi a co přesně znamenají.

---

### [BLOCKER] Tabulka se zdroji ChatGPT / Perplexity / AIO uvádí přesná procenta bez zdroje

**Citace:**

> ChatGPT | encyklopedický obsah, Wikipedia (~48 % top citací)  
> Perplexity | komunitní obsah, Reddit (~47 %); ~22 citací na odpověď  
> Google AI Overviews | YouTube a multimédia (~23 %) + klasické organické zdroje

**Problém:**  
Jde o velmi konkrétní tvrzení. Bez odkazu na konkrétní analýzu je nelze ověřit. Navíc se tyto podíly výrazně liší podle jazyka, oboru, země, typu dotazu a nastavení platformy. U ChatGPT je navíc důležité rozlišit běžný model, ChatGPT Search / browsing a odpovědi bez citací.

**Návrh opravy:**  
Doplnit konkrétní zdroj a vymezit metodiku, nebo tabulku přeformulovat bez procent.

Bezpečnější verze:

> Ve veřejných analýzách z let 2025–2026 se opakovaně ukazuje, že jednotlivé AI platformy čerpají z různých typů zdrojů. ChatGPT se u části dotazů opírá o autoritativní a encyklopedické zdroje, Perplexity často zobrazuje více citací napříč webem a Google AI Overviews kombinuje klasické organické výsledky, multimédia a další zdroje. Konkrétní podíly se ale výrazně liší podle trhu a dotazu.

Pokud chcete procenta zachovat, přidejte pod tabulku konkrétní poznámku typu:

> Zdroj: [název studie], [měsíc 2025], vzorek [x] dotazů, trh [US/EN/…].

---

### [BLOCKER] `Google-Extended` je v HowTo pořád nepřesně zařazen mezi „AI roboty“ pro citovatelnost

**Citace:**

```yaml
- name: "Zkontrolujte přístup AI robotů"
  text: "V souboru robots.txt ověřte, že neblokujete GPTBot, ClaudeBot, PerplexityBot ani Google-Extended, pokud chcete být citovatelní."
```

A v textu:

> Google-Extended (řízení využití obsahu pro některé AI funkce Googlu)

**Problém:**  
V těle článku je nuance lepší, ale ve strukturovaném HowTo zůstává zavádějící formulace. `Google-Extended` není běžný indexovací robot a jeho povolení/blokace nelze jednoduše spojovat s citovatelností v Google AI Overviews. Tvrzení „neblokujte Google-Extended, pokud chcete být citovatelní“ je příliš silné.

**Návrh opravy:**  
Upravit HowTo krok tak, aby nerozšiřoval nepřesnost do strukturovaných dat.

Navržená verze:

```yaml
- name: "Zkontrolujte přístup AI a vyhledávacích robotů"
  text: "V souboru robots.txt ověřte, že omylem neblokujete relevantní user agenty jako GPTBot, ClaudeBot nebo PerplexityBot. Google-Extended posuzujte samostatně: slouží ke kontrole využití obsahu v některých AI produktech Googlu a jeho povolení samo o sobě citaci nezaručuje."
```

---

### [WARNING] V článku zůstává kauzální overclaim „blokujete roboty → nikdo vás necituje“

**Citace:**

> **Omylem blokovat AI roboty** v robots.txt a pak se divit, že vás nikdo necituje.

**Problém:**  
Tohle je stále příliš absolutní. Blokace může snížit šanci na načtení nebo využití obsahu, ale neplatí jednoduše, že „nikdo necituje“. Navíc různé platformy mohou čerpat přes jiné indexy, vyhledávání nebo partnerské zdroje.

**Návrh opravy:**

> **Omylem blokovat AI a vyhledávací roboty** v robots.txt a tím snižovat šanci, že AI systémy obsah najdou, pochopí nebo použijí jako zdroj.

---

### [WARNING] „Nástroje s živým vyhledáváním posuzují relevanci hlavně podle úvodu stránky“ je nedoložené

**Citace:**

> Nástroje s živým vyhledáváním posuzují relevanci hlavně podle úvodu stránky.

**Problém:**  
Tohle zní jako znalost interního rankingového / retrieval mechanismu. Bez zdroje je to nepodložené. Praktická rada je správná — hlavní odpověď má být nahoře — ale důvod by měl být formulován opatrněji.

**Návrh opravy:**

> Úvod stránky je důležitý, protože rychle nastavuje téma, entitu a hlavní odpověď. Když hlavní sdělení schováte až níž, snižujete šanci, že ho vyhledávací nebo AI systém správně vyhodnotí jako relevantní.

---

### [WARNING] Strukturovaná data jsou místy popsána příliš široce

**Citace:**

> Strukturovaná data jsou strojově čitelný popis obsahu stránky — díky nim AI nemusí hádat, co je nadpis, co cena, co autor nebo co častý dotaz.

**Problém:**  
„Co je nadpis“ běžně vyplývá hlavně z HTML struktury (`h1`, `h2`…), ne ze strukturovaných dat. Strukturovaná data pomáhají explicitně popsat typ entity, autora, produkt, cenu, FAQ apod., ale neměla by suplovat základní HTML semantiku.

**Návrh opravy:**

> Strukturovaná data jsou strojově čitelný popis obsahu stránky — pomáhají vyhledávačům a AI systémům lépe rozpoznat typ stránky, autora, organizaci, produkt, cenu, dostupnost nebo časté dotazy. Základní HTML strukturu ale nenahrazují.

---

### [WARNING] Tvrzení o „výrazném zvýšení přesnosti“ díky strukturovaným datům není doložené

**Citace:**

> …v některých testech z roku 2025 se přesnost odpovědí opřených o strukturovaná data výrazně zvýšila.

**Problém:**  
Tvrzení je konkrétní, ale bez odkazu na test. Slovo „výrazně“ je hodnotící a může působit jako nepodložený claim.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj, nebo změkčit:

> Strukturovaná data mohou snížit riziko chybné interpretace stránky a pomáhají systémům lépe rozlišit, jaký typ informací stránka obsahuje.

---

### [WARNING] „FAQPage“ může vyvolat chybný dojem, že automaticky pomůže ve výsledcích Googlu

**Citace:**

> **FAQPage** tam, kde reálně odpovídáte na časté dotazy

A:

> Ověřte to v **Testu rozšířených výsledků**…

**Problém:**  
FAQ strukturovaná data dávají smysl pro strojové porozumění, ale Google od roku 2023 výrazně omezil zobrazování FAQ rich results pro většinu webů. Článek to nemusí rozebírat dlouze, ale měl by zabránit dojmu, že FAQPage automaticky přinese rozšířený výsledek.

**Návrh opravy:**  
Doplnit krátkou větu:

> FAQPage používejte jen tam, kde stránka skutečně obsahuje otázky a odpovědi; u většiny webů dnes nezaručuje rozšířený výsledek v Googlu, ale stále může pomoci se strojovým pochopením obsahu.

---

### [WARNING] Oficiální název „Schema Markup Validator“ zůstal ve frontmatteru a FAQ

**Citace:**

```yaml
text: "Otestujte Article, FAQPage, Organization a drobečkovou navigaci přes Test rozšířených výsledků a Schema Markup Validator."
```

A:

> Test rozšířených výsledků a Schema Markup Validator na strukturovaná data…

**Problém:**  
V brand slovníku je zakázané „schema markup“ → používat „strukturovaná data“. V těle článku už je to opravené jako „validátor strukturovaných dat Schema.org“, ale ve frontmatteru a FAQ zůstala anglická formulace. Pokud jde o oficiální název nástroje, dá se uvést, ale lépe česky a bez posilování zakázaného termínu.

**Návrh opravy:**

Ve frontmatteru:

```yaml
text: "Otestujte Article, FAQPage, Organization a BreadcrumbList přes Test rozšířených výsledků a validátor strukturovaných dat Schema.org."
```

Ve FAQ:

> …Test rozšířených výsledků, validátor strukturovaných dat Schema.org a kontrola souboru robots.txt.

---

### [WARNING] „ChatGPT, Perplexity a Google AI Overviews“ jsou označeny jako „AI vyhledávače“ bez nuance

**Citace:**

```yaml
answer: "AI SEO audit je strukturovaná kontrola toho, jak dobře váš web chápou a citují AI vyhledávače — ChatGPT, Perplexity a Google AI Overviews."
```

**Problém:**  
Perplexity a Google AI Overviews lze takto zjednodušeně chápat, ale ChatGPT není vždy vyhledávač a ne vždy pracuje s živým webem nebo citacemi. Záleží na režimu, plánu, připojení k webu a typu odpovědi.

**Návrh opravy:**  
Nepřepisovat celý článek, jen zpřesnit definici:

> AI SEO audit je strukturovaná kontrola toho, jak dobře váš web chápou a případně citují AI odpovědní systémy a vyhledávací funkce — například ChatGPT s webovým vyhledáváním, Perplexity a Google AI Overviews.

Pozor na délku `answer`: po této úpravě znovu zkontrolovat 40–60 slov.

---

### [WARNING] Claim „za odpoledne“ může být u větších webů přehnaný

**Citace:**

> AI SEO audit za odpoledne: pět vrstev, které projdete

A:

> první průchod většinou zvládnete na vlastním webu během jednoho odpoledne

A CTA:

> …návodem za 1 490 Kč, který aplikujete během odpoledne.

**Problém:**  
Pro malý web nebo základní průchod je to realistické. Pro větší web, e‑shop, vícejazyčný web nebo web s technickým dluhem je „během odpoledne“ přehnané. Může působit jako marketingový overpromise.

**Návrh opravy:**  
Změkčit kontextem:

> Základní průchod na menším nebo středním webu většinou zvládnete během jednoho odpoledne.

V CTA:

> …který vám pomůže začít během jednoho odpoledne.

---

### [WARNING] „Roční rytmus jako u klasického SEO“ je zbytečné zobecnění

**Citace:**

> Roční rytmus jako u klasického SEO je tu příliš pomalý.

**Problém:**  
Není pravda, že klasické SEO audity se obecně dělají ročně. U větších nebo rychle rostoucích webů se kontrolují častěji. Věta zbytečně staví AI audit proti SEO auditu a přehání rozdíl.

**Návrh opravy:**

> Pokud AI viditelnost aktivně řešíte, roční kontrola bývá příliš pomalá; základní srovnání dotazů a citací dává smysl opakovat častěji.

---

### [TIP] Frontmatter `answer` je dobrý, ale po zpřesnění ChatGPT si pohlídejte délku

**Citace:**

```yaml
answer: "AI SEO audit je strukturovaná kontrola..."
```

**Hodnocení:**  
Aktuální odpověď má přibližně 53 slov, začíná definicí a dává samostatný smysl. To je dobře.

**Pozor:**  
Pokud upravíte formulaci kvůli ChatGPT / webovému vyhledávání, udržte ji v rozsahu 40–60 slov.

---

### [TIP] Prvních ~100 slov těla funguje dobře jako samostatná odpověď

**Citace:**

> AI SEO audit projde pět vrstev v logickém pořadí…

**Hodnocení:**  
Úvod je věcný, konkrétní a rychle říká, co audit obsahuje. Pro citovatelnost je to použitelné. Jen doporučuji doplnit jednu definiční větu typu:

> AI SEO audit je kontrola připravenosti webu na citace a zmínky v AI odpovědích.

Tím bude úvod ještě samostatnější.

---

### [TIP] SEO základ je v pořádku

**Kontrola:**

- `title`: „AI SEO audit webu: co kontrolovat pro viditelnost v AI“ — cca 54 znaků, klíčové slovo je vepředu. V pořádku.
- `description`: cca 156 znaků, vejde se do 70–160 znaků. V pořádku.
- `slug`: `ai-seo-audit` — smysluplný a přesný.
- H2 struktura: logická.
- Interní odkazy: relevantní, nekanibalizují zjevně `/audit/`.
- CTA: vede na Pack za 1 490 Kč i audit za 9 990 Kč. V pořádku.

---

### [TIP] Aktuálnost je celkově zvládnutá

**Hodnocení:**  
`updated: "2026-05-24"` odpovídá zadání a není problém. Text nepoužívá neukotvené „letos“ / „příští rok“. Roky 2025–2026 jsou použité relativně opatrně.

**Podmínka:**  
U všech konkrétních čísel a studií ale doplnit zdroje nebo čísla odstranit. Bez toho je aktuálnost formální, ne věcně ověřitelná.