# Research — Značka na Wikipedii pro AI citace

**Datum:** 2026-06-11
**Cílová kategorie:** tutorial
**Slug:** `znacka-na-wikipedii-pro-ai`
**Cílové KW:** wikipedia ai citace / wikipedia pro ai / značka na wikipedii / wikipedia notabilita firma

## 1. Kontext (proč to vůbec řešit)

- **Wikipedia je daleko nejcitovanější doménou napříč všemi velkými AI modely.** Analýza ~680 mil. AI citací (Profound, 2026) zjistila, že **Wikipedia tvoří zhruba 47,9 % top-10 citovaných zdrojů ChatGPT**. Podobná dominance se opakuje u Claude, Perplexity, Gemini i Google AI Overviews. (Zdroj: Profound 2026, Trade Press AI Index 2026.)
- **Top 15 domén pokrývá ~68 % všech AI citací** napříč studiemi 08/2024–05/2026 (Trade Press AI Index 2026). Wikipedia je v tom top 15 vždy.
- **Reddit je v některých analýzách citován ještě častěji než Wikipedia** (~40 % frekvence napříč modely), ale Reddit funguje jinak — komunitní obsah, nekontrolovatelný. Wikipedia se naopak řídí formálními pravidly a má encyklopedický status, který AI modely vnímají jako vyšší důvěryhodnost faktů o entitách.
- **Pro značky to znamená:** dostat se na Wikipedii = pravděpodobnost být citovaný v AI odpovědích výrazně roste. Ale dostat se tam ≠ napsat si svojí stránku.

## 2. Notabilita — kdo má a kdo nemá nárok

Klíčové pravidlo: **Wikipedia:Notability (organizations and companies)** (zkratka **WP:NCORP**).

- Subjekt musí být "the subject of significant coverage in multiple reliable secondary sources that are independent of the subject."
- "Significant coverage" = **podstatná, přímá diskuse o firmě**, ne jen mention v passing.
- "Reliable secondary sources" = velká média s editorální nezávislostí (WSJ, Financial Times, Bloomberg, Reuters, BBC, Forbes editorial; pro CZ realisticky Hospodářské noviny, E15, Lupa, CzechCrunch, Forbes CZ, Týden, MF Dnes).
- "Independent" = **žádné PR zprávy, sponzorovaný obsah, vlastní blog, vlastní case studies.**

**Informální benchmark pro firmy 2026:**
- Minimum: **3–5 podstatných nezávislých článků** v médiích s editorální nezávislostí.
- Realistický benchmark: **10+ podstatných referencí** před tím, než článek vůbec submitovat (jinak velká šance na deletion).
- **Wikipedia je "lagging indicator" notability** — funguje až POTÉ, co o firmě píší nezávislá média, ne před tím.

**Co se NEpočítá:**
- Vlastní press releases (i když je převzala ČTK/PR servery).
- Sponzorované články, native advertising.
- Listing v databázích (firmy.cz, Crunchbase atd.).
- Mentions v passing ("…včetně XY a YZ…").
- Vlastní blog, vlastní YouTube kanál.
- Sociální sítě.

## 3. Konflikt zájmů (COI) — povinné disclosure

**Wikipedia:Conflict of Interest (WP:COI)** + **Wikimedia Foundation Terms of Use**:

- **Kdokoli, kdo dostává náhradu** za editování (zaměstnanec, agentura, freelance copywriter najatý firmou) **MUSÍ disclosure**: na uživatelské stránce, na talk stránce článku, NEBO v edit summary.
- Wikipedie **silně doporučuje** lidem s COI **NEEDITOVAT přímo článek**, ale:
  1. Vytvořit draft přes **Articles for Creation (AfC)** review queue.
  2. Použít **talk page** k navrhování změn a nechat nezávislé editory provést samotnou editaci.
- **Sankce:** v roce 2025 bylo blokováno **400+ účtů** za nedisclosed paid editing. Wikipedia má aktivní counter-vandalism tým a pattern detection.
- **Právní rámec:** US FTC Endorsement Guidelines (firmy musí transparentně označovat placený obsah online).

**Praktický důsledek pro CZ firmy:**
- Najmout copywritera s pokyny "napiš mi Wikipedii stránku" bez disclosure = porušení Wikimedia ToU + potenciální FTC issue.
- Cesta s nižším rizikem: použít **AfC submission** s plnou disclosure a nechat článek projít review.

## 4. Praktický postup (krok za krokem)

### Krok 1 — Audit notability PŘED čímkoli jiným
- Vyhledat v Google: `"<jméno firmy>" -site:vlastnidomena.cz -inurl:tiskovazprava`.
- Sesbírat reálné nezávislé články (ne PR zprávy, ne vlastní content).
- **Pokud máte <3 podstatných nezávislých článků**: STOP. Wikipedie nebude přidána, nebo bude smazaná. Místo toho investovat do PR.

### Krok 2 — Účet a edit history
- Založit registrovaný účet.
- **NE okamžitě napsat svoji firmu** — Wikipedia algoritmicky detekuje "single-purpose accounts".
- Udělat **10+ drobných legitimních editů** v jiných (NIJAK NESOUVISEJÍCÍCH) článcích za období **alespoň 4 dnů** → účet získá status **autoconfirmed** a získá víc důvěry.

### Krok 3 — Disclosure COI
- Pokud editujete za zaměstnání/za peníze → **MUSÍTE** na vlastní userpage napsat disclosure: koho zastupujete, na čí účet editujete.
- Doporučená šablona: `{{Paid|user=<vaše jméno>|employer=<firma>|client=<firma>}}` na userpage.

### Krok 4 — Draft přes AfC (ne přímý článek)
- Použít **Articles for Creation** = Wikipedia má speciální review queue pro nové články od COI editorů.
- Vytvoří se draft v namespace **Draft:**, který nezávislí reviewer schválí nebo zamítne.
- Schválení trvá týdny až měsíce (volunteer editors).

### Krok 5 — Encyklopedický styl
- **NEUVÁDĚT:** "leader v oboru", "inovativní", "nejlepší", "vyhrál cenu" (pokud není podloženo).
- **UVÁDĚT:** ověřitelná fakta s citacemi (datum založení, sídlo, zakladatel, počet zaměstnanců, ověřitelné finanční údaje).
- Každý meaningful claim **musí mít citation** [1] na nezávislý zdroj.
- Tón: neutrální, popisný, ne marketingový.

### Krok 6 — Údržba a fact-checking
- Wikipedia článek je **veřejně editovatelný**. Konkurence může přidat negativní fakta (pokud jsou podložená nezávislými zdroji).
- Sledovat **watchlist** stránky a reagovat na podstatné chyby, ale **nikdy nesmazávat negativní fakta jen proto, že jsou negativní**.

## 5. Wikidata — strukturovaný sourozenec

- **Wikidata** je strukturovaná databáze faktů o entitách, kterou Wikipedia (a další projekty) používá.
- AI modely Wikidata čtou jako **autoritativní zdroj strojově čitelných faktů** o firmě/osobě/produktu.
- Mít položku ve Wikidata = lepší pochopení "co/kdo je tato entita" napříč LLM.
- **Nižší bariéra notability** než u Wikipedie — položky můžou existovat i bez Wikipedia článku, pokud existují nezávislé reference.
- Kombinace **Wikipedia článek + Wikidata položka** je podle průmyslových analýz "single highest-leverage investment" pro AI viditelnost značky.

## 6. Kdy to NEDÁVÁ smysl

- **Malé lokální firmy bez nezávislé press coverage** → realistická šance se na Wikipedii dostat je téměř nulová.
- **B2B SaaS startup pre-Series-A** → většinou bez dostatečného coverage.
- **Affiliate weby / SEO weby** → Wikipedia notabilita pro tyto entity prakticky neexistuje.
- **Lokální e-shopy, kavárny, restaurace** → s výjimkou ikonických či historických.

V těchto případech **lepší alternativy** než Wikipedia:
- Investovat do PR a získání 3–5 podstatných nezávislých článků (dlouhodobě dostat se do top 15 zdrojů, které AI cituje).
- Wikidata položka (nižší bariéra).
- Strukturovaná data na vlastním webu (Organization schema.org).
- Aktivní přítomnost na Redditu, LinkedInu, YouTube (kde AI také cituje).

## 7. CZ specifika

- **cs.wikipedia.org** má vlastní pravidla notability — podobná logika, ale méně přísná pro CZ firmy (lokální významnost).
- AI modely jsou primárně trénované na **en.wikipedia.org**. Pro AI viditelnost se anglická Wikipedia počítá víc.
- Pro CZ firmy s mezinárodní ambicí: cíl by měl být **en.wiki článek** (nebo aspoň en.wiki Wikidata položka).
- Realistický odhad: <5 % českých firem splňuje notability pro en.wiki, ~15 % pro cs.wiki.

## 8. Praktické krátké odpovědi (pro answer/FAQ)

**Pomáhá Wikipedia AI citacím?** ANO — Wikipedia tvoří ~47,9 % top-10 citovaných zdrojů ChatGPT a podobně vysoká čísla mají i ostatní modely. Mít encyklopedický článek = výrazně vyšší šance být citovaný.

**Můžu si napsat svojí Wikipedia stránku?** Teoreticky ano, ale je to silně nedoporučované. COI editing musí být disclosed, doporučená cesta je AfC submission. Bez disclosure = riziko blokace účtu a smazání článku.

**Kolik nezávislých zdrojů potřebuju?** Minimum 3–5 podstatných článků z médií s editorální nezávislostí; realisticky 10+ kvalitních referencí pro vyšší šanci na schválení.

**Co když nemám dost nezávislého coverage?** Wikipedia nebude. Investujte raději do PR a Wikidata položky.

**Je to one-time práce nebo údržba?** Údržba — článek je veřejně editovatelný, mění se v čase, je třeba ho monitorovat.

## 9. Brand voice notes

- "schema markup" → **"strukturovaná data"**
- "framework" → **"přístup", "metoda"**
- "garantujeme" → **"může zvýšit šanci", "často", "obvykle"**
- "bot/crawler" → **"vyhledávací robot"**
- "page" jako anglicismus → **"stránka"**
- "article" → **"článek"**
- Nepoužívat "boutique/mid-market/enterprise/snapshot/single audit/entry trackery/pass-through/add-on" → češtinu
- "AIO" → rozepsat na "Google AI Overviews"

## 10. CTA pozice

- Tutorial → **primární CTA: Pack 1 490 Kč** (DIY šablony, lépe sedí jako "naučte se to sami")
- Sekundární CTA: **Audit 9 990 Kč** (pokud chcete profesionálně posoudit AI viditelnost značky včetně Wikipedia stavu).
- Transparentní zmínka, že Sniperdesign je Zlatý partner Upgates a sám má/nemá Wikipedia článek (uvést realisticky, ne overclaim).
