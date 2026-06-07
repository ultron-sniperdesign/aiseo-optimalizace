## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po obsahové stránce blízko publikaci: drží se tématu, má dobré CTA, správně řeší konec FAQ rich results a frontmatter `answer` má vhodnou délku i definici. Před publikací ale vyžaduje opravy kvůli riziku nesouladu strukturovaných dat s viditelným obsahem, několika overclaimům a SEO titulku mimo doporučenou délku.

---

## Nálezy a cílené opravy

### [BLOCKER] HowTo strukturovaná data nemusí odpovídat viditelnému obsahu

**Problémové místo:**

```yaml
howto:
  name: "Jak nasadit strukturovaná data pro AI v roce 2026"
  steps:
    - name: "Vyberte relevantní typy"
...
```

V těle článku není samostatný viditelný krokový postup se stejnými kroky. Pokud šablona z frontmatteru generuje `HowTo` strukturovaná data, ale kroky nejsou na stránce reálně viditelné pro uživatele, porušuje to pravidlo „strukturovaná data musí odpovídat viditelnému textu“.

**Návrh opravy:**

Buď:

- přidat do těla článku viditelnou sekci typu `## Postup: jak nasadit strukturovaná data pro AI` se 4 kroky odpovídajícími frontmatteru,

nebo:

- negenerovat `HowTo` strukturovaná data z tohoto frontmatteru.

---

### [BLOCKER] FAQPage strukturovaná data musí být prokazatelně viditelná na stránce

**Problémové místo:**

```yaml
faq:
  - q: "Jaká strukturovaná data nasadit pro AI vyhledávání?"
...
```

FAQ je ve frontmatteru, ale v dodaném těle článku není viditelná FAQ sekce. Pokud ji layout automaticky nevypisuje uživatelům, nesmí se z ní generovat `FAQPage`.

**Návrh opravy:**

Ověřit šablonu. Pokud FAQ není renderovaná na stránce, doplnit viditelnou sekci `## Časté otázky ke strukturovaným datům pro AI` se stejnými otázkami a odpověďmi, nebo vypnout generování `FAQPage`.

---

### [WARNING] Titulek je příliš dlouhý pro zadané SEO kritérium

**Problémové místo:**

```yaml
title: "Strukturovaná data pro AI 2026: které typy nasadit a jak je ověřit"
```

Titulek má cca 67 znaků. Zadání požaduje 50–60 znaků a klíčové slovo vepředu. Klíčové slovo vepředu je správně, délka ne.

**Návrh opravy:**

Zkrátit například na:

```yaml
title: "Strukturovaná data pro AI: typy a validace 2026"
```

Tím zůstane hlavní KW na začátku a titulek bude kompaktnější.

---

### [WARNING] Příliš silné tvrzení o tom, že AI nástroje JSON-LD „přečtou bez problémů“

**Problémové místo:**

> **Google, Bing i AI nástroje** (ChatGPT, Perplexity, Claude) ho přečtou bez problémů.

Tvrzení „přečtou bez problémů“ zní jako garance. U AI nástrojů záleží na dostupnosti stránky, indexaci, režimu nástroje, použitém zdroji a konkrétním dotazu.

**Návrh opravy:**

Změnit na opatrnější formulaci:

> Google a Bing JSON-LD běžně podporují a AI nástrojům může tento formát usnadnit strojové čtení obsahu, pokud mají ke stránce přístup.

---

### [WARNING] Nedoložené „podle dostupných analýz“ bez čísla nebo zdroje

**Problémové místo:**

> Podle dostupných analýz se stránky s validními strukturovanými daty v AI shrnutích objevují častěji než stránky bez nich.

Tvrzení je hedgované, ale bez konkrétního benchmarku, časového ukotvení nebo čísla působí vágně. V zadání jsou uvedeny benchmarkové hodnoty 2025–2026, ale článek je nevyužívá.

**Návrh opravy:**

Buď doplnit přesnější, stále opatrnou formulaci:

> Benchmarky z let 2025–2026 naznačují, že stránky s validními FAQ/HowTo/QAPage strukturovanými daty se v AI shrnutích mohou objevovat přibližně o 20–30 % častěji. Nejde ale o garanci citace.

Nebo tvrzení odstranit, pokud nechcete uvádět zdroj.

---

### [WARNING] Manuální test v ChatGPT/Perplexity je popsán jako potvrzení citace

**Problémové místo:**

> Žádný validátor totiž nepotvrdí, že vás AI začne citovat — to potvrdí jen reálná zkouška.

Reálná zkouška v ChatGPT nebo Perplexity není důkaz trvalé citovatelnosti. Výsledek je proměnlivý podle dotazu, času, dostupnosti webu, personalizace, režimu prohlížení a zdrojů nástroje.

**Návrh opravy:**

Změnit na:

> Žádný validátor nepotvrdí, že vás AI začne citovat. Ruční dotaz v ChatGPT nebo Perplexity berte jen jako orientační kontrolu toho, zda nástroj stránku najde a jak z ní interpretuje fakta.

---

### [WARNING] Formulace „nezvedá pozice“ zaměňuje rich results a ranking

**Problémové místo:**

> Existující FAQPage markup je neškodný a stále validuje, ale nezvedá pozice ve výsledcích vyhledávání.

FAQ rich results se týkaly rozšířeného zobrazení výsledku, ne přímé garance pozic. Formulace „nezvedá pozice“ je nepřesná.

**Návrh opravy:**

Změnit na:

> Existující FAQPage strukturovaná data jsou neškodná a mohou dál validovat, ale po 7. 5. 2026 už v Googlu nepřinášejí FAQ rozšířený výsledek ani samostatný SERP benefit.

---

### [WARNING] Extra data o Search Console/API nejsou doložená

**Problémové místo:**

> Search Console FAQ filtr končí v červnu 2026 a podpora v API v srpnu 2026.

Toto je velmi konkrétní faktické tvrzení. V zadání je pevně uvedeno odebrání FAQ rich results 7. 5. 2026, ale nezdrojuje se zde konec filtru a API. Pokud tato data nejsou ověřená z veřejného zdroje, článek riskuje faktickou chybu.

**Návrh opravy:**

Buď doplnit zdroj v článku, nebo zjednodušit na bezpečnou verzi:

> Google odebral FAQ rich results 7. 5. 2026. Navazující reporty a API podpora se podle oznámení Googlu postupně vypínají.

---

### [WARNING] Používá se nevhodné slovo „markup“ místo srozumitelnějšího českého výrazu

**Problémová místa:**

> falešný markup nezachrání nic  
> Existující FAQPage markup je neškodný  
> samotný markup citaci nezajistí  
> celý markup pro vyhledávače znehodnotit

Zadání výslovně zakazuje „schema markup“ a preferuje slovník kolem „strukturovaných dat“. I samotné „markup“ je zbytečný anglicismus a zhoršuje srozumitelnost.

**Návrh opravy:**

Nahradit:

- „falešný markup“ → „nepravdivá strukturovaná data“
- „FAQPage markup“ → „FAQPage strukturovaná data“
- „samotný markup“ → „samotná strukturovaná data“
- „celý markup“ → „konkrétní blok strukturovaných dat“

---

### [WARNING] V článku chybí konkrétní JSON-LD ukázka, přesto slibuje praktický zápis

**Problémové místo:**

> Tento návod ukazuje, **které typy nasadit v roce 2026**, **jak je správně napsat v JSON-LD**...

V textu je vysvětleno, že JSON-LD patří do `<script type="application/ld+json">`, ale chybí ukázka reálného zápisu. Pro editorial „tutorial (+ howto)“ je to slabé.

**Návrh opravy:**

Doplnit krátkou praktickou ukázku, ideálně jen jednu základní pro `Article` a případně druhou pro `FAQPage`. Nemusí být dlouhá, ale měla by ukázat:

- `@context`
- `@type`
- `headline`
- `author`
- `datePublished`
- `dateModified`
- `mainEntity` u FAQ pouze pokud je FAQ viditelná na stránce

---

### [WARNING] „Drobná chyba může celý markup znehodnotit“ je přehnané

**Problémové místo:**

> Drobná chyba v JSON-LD může celý markup pro vyhledávače znehodnotit.

To může být pravda u konkrétního nevalidního bloku, ale ne nutně u všech strukturovaných dat na stránce. Formulace zbytečně dramatizuje.

**Návrh opravy:**

Změnit na:

> Chyba v JSON-LD může zneplatnit konkrétní blok strukturovaných dat nebo zabránit jeho správnému zpracování.

---

### [WARNING] Otázka „Jaký je nejlepší formát“ naráží na zakázaný superlativ

**Problémové místo:**

```yaml
q: "Jaký je nejlepší formát strukturovaných dat?"
```

Zadání zakazuje formulace typu „nejlepší“. Tady nejde o agresivní marketingový claim, ale i tak je bezpečnější použít neutrální formulaci.

**Návrh opravy:**

Změnit otázku na:

```yaml
q: "Jaký formát strukturovaných dat se doporučuje pro AI vyhledávání?"
```

---

### [TIP] „SERP lift“ a „zvedání v SERPu“ nejsou vhodné pro brand voice

**Problémová místa:**

> neprodukuje zvedání v SERPu  
> markup pro SERP lift už nepomáhá

Působí to jako interní SEO slang. Zadání chce věcný, srozumitelný tón.

**Návrh opravy:**

Nahradit například:

- „neprodukuje zvedání v SERPu“ → „nepřináší FAQ rozšířený výsledek v Googlu“
- „markup pro SERP lift“ → „FAQPage kvůli lepšímu zobrazení ve výsledcích“

---

### [TIP] „strict validaci“ a „property“ jsou zbytečné anglicismy

**Problémová místa:**

> validator.schema.org pro strict validaci  
> neexistující property

**Návrh opravy:**

Nahradit:

- „strict validaci“ → „přísnější kontrolu struktury“
- „property“ → „vlastnosti“

---

### [TIP] Datum změny FAQ rich results ve statistikách zpřesnit

**Problémové místo:**

```yaml
- value: "5/2026"
  label: "Google odebral FAQ rich results; FAQPage markup je dnes hlavně pro strukturu obsahu"
```

V článku správně uvádíte 7. 5. 2026. Ve statistikách je jen měsíc a znovu se používá „markup“.

**Návrh opravy:**

```yaml
- value: "7. 5. 2026"
  label: "Google odebral FAQ rich results; FAQPage strukturovaná data dnes slouží hlavně AI a uživatelům"
```

---

### [TIP] „dnes“ je lepší ukotvit k roku 2026

**Problémová místa:**

> JSON-LD je dnes preferovaný formát  
> Hodnota FAQPage je dnes hlavně...

V aktuálním článku to není kritická chyba, protože `updated` je 2026-06-07. Pro evergreen obsah je ale přesnější ukotvení.

**Návrh opravy:**

Použít:

- „v roce 2026“
- „po 7. 5. 2026“
- „od května 2026“

---

## Co je v pořádku

- `answer` má 48 slov, začíná definicí a samostatně dává smysl.
- Meta description má vhodnou délku a odpovídá obsahu.
- Slug `strukturovana-data-pro-ai` je smysluplný.
- CTA je konkrétní a vede na produkty: Audit 9 990 Kč i Pack 1 490 Kč.
- Článek správně odlišuje strukturovaná data od širší AI/GEO optimalizace a nekopíruje auditní landing page.