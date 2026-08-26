## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po úpravách výrazně opatrnější a CTA je dobré. Přesto má několik věcných a citačních slabin: hlavně příliš široký titul vůči obsahu zaměřenému na ChatGPT, nedoložený údaj o poplatcích a několik vět, které z doporučení AI dělají téměř jistotu.

---

## Nálezy a opravy

### [BLOCKER] Nedoložený finanční údaj o poplatcích

**Citace:**

> „Odvětvové přehledy z let 2025–2026 uvádějí u agentních nákupů poplatek řádově v jednotkách procent z transakce, s platebním zpracováním víc.“

**Problém:**  
Jde o finanční údaj, který může ovlivnit obchodní rozhodnutí e-shopu. V článku ale není uveden žádný konkrétní odvětvový přehled, autor, datum ani odkaz. Poznámka „nejde o primární zdroj“ nestačí.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj, nebo pasáž odstranit / zjemnit.

Bez zdroje doporučuji:

> „Veřejně potvrzený jednotný ceník pro tyto modely není k dispozici. Poplatky proto nepočítejte podle obecných odhadů, ale ověřujte u konkrétní platformy a platebního partnera.“

---

### [WARNING] Titulek je širší než skutečný rozsah článku

**Citace:**

> `title: "Nakupování přes AI: proč se pokladna vrátila na weby"`  
> `seoTitle: "Nakupování přes AI 2026: pokladna se vrátila na weby"`

**Problém:**  
Titulek tvrdí obecný trend „nakupování přes AI“, ale článek řeší primárně ChatGPT / OpenAI Instant Checkout. To může působit jako zobecnění na celý trh AI nákupů.

**Návrh opravy:**  
Zúžit titul na ChatGPT, ale zachovat klíčové slovo vepředu.

Například:

```yaml
title: "Nakupování přes AI: proč ChatGPT posílá nákup na web"
seoTitle: "Nakupování přes AI 2026: ChatGPT posílá nákup na web"
```

SEO titulek má cca 58 znaků a drží klíčové slovo vepředu.

---

### [WARNING] Meta description tvrdí posun příliš definitivně

**Citace:**

> `description: "OpenAI v březnu 2026 přesunul nákup z ChatGPT zpět k obchodníkům. Co to znamená pro e-shopy, produktová data a měření konverzí."`

**Problém:**  
„Přesunul nákup z ChatGPT zpět k obchodníkům“ zní jako plošný a finální stav. Přitom článek sám správně říká, že ACP a vybrané integrace běží dál.

**Návrh opravy:**

```yaml
description: "ChatGPT v roce 2026 u většiny obchodníků posílá dokončení nákupu na web. Dopady na produktová data, feedy a měření konverzí."
```

Délka je v pořádku a claim je přesnější.

---

### [WARNING] Krátká odpověď nezačíná definicí a má nevyjasněnou zkratku ACP

**Citace:**

> `answer: "U ChatGPT se v roce 2026 pro většinu obchodníků prosadil model „objev v AI, nákup na webu“ ... Agentní platby ani protokol ACP tím neskončily ..."`

**Problém:**  
Požadavek pro citovatelnost: krátká odpověď 40–60 slov má začínat definicí. Tady začíná kontextem „U ChatGPT…“. Navíc zkratka ACP není v odpovědi vysvětlená, takže sama o sobě není plně sebestačná.

**Návrh opravy:**

```yaml
answer: "Nakupování přes AI v roce 2026 u ChatGPT nejčastěji znamená model „objev v AI, nákup na webu“. Podle zpravodajství OpenAI v březnu 2026 přesunula dokončení nákupu u většiny obchodníků z chatu do propojených aplikací a na weby obchodníků. Agentní platby ani Agentic Commerce Protocol tím neskončily."
```

Má definici, je samostatná a drží se bezpečného claimu.

---

### [WARNING] První odstavec opakuje problém krátké odpovědi

**Citace:**

> „U ChatGPT se v roce 2026 pro většinu obchodníků prosadil model „objev v AI, nákup na webu“.“

**Problém:**  
Prvních cca 100 slov těla článku má fungovat jako samostatná odpověď. Věta je srozumitelná, ale nezačíná definicí tématu „nakupování přes AI“.

**Návrh opravy první věty:**

> **Nakupování přes AI v roce 2026 u ChatGPT nejčastěji znamená model „objev v AI, nákup na webu“.**

Zbytek odstavce může zůstat podobný.

---

### [WARNING] Statistika „řádově tucet obchodníků“ potřebuje přesnější zdroj

**Citace:**

> „podle prezidenta Shopify používal nativní pokladnu v ChatGPT **řádově tucet obchodníků**“

**Problém:**  
Je to hlavní číslo článku a zároveň součást frontmatter `stats`. „Podle prezidenta Shopify“ nestačí — chybí jméno, kontext výroku a odkaz / citovaný zdroj.

**Návrh opravy:**  
Doplnit konkrétní zdroj přímo do věty.

Například:

> „Podle vyjádření prezidenta Shopify citovaného v Search Engine Land používalo nativní pokladnu v ChatGPT řádově tucet obchodníků…“

Pokud zdroj neříká přesně „používalo“, ale například „bylo zapojeno / aktivních“, upravit sloveso podle originálu.

---

### [WARNING] „Do doporučení se dostane ten…“ je příliš jisté tvrzení

**Citace FAQ:**

> „Do doporučení se dostane ten, o kom má systém spolehlivé údaje.“

**Problém:**  
To je overclaim. Spolehlivá data mohou zvýšit šanci, ale negarantují, že se produkt dostane do AI doporučení.

**Návrh opravy:**

> „Větší šanci má produkt, u kterého systém najde spolehlivé údaje: úplný název, cenu, dostupnost a identifikátor produktu konzistentně na webu i ve feedu.“

---

### [WARNING] Další overclaim u produktových dat

**Citace:**

> „Rozpor mezi nimi je důvod produkt vynechat.“

**Problém:**  
Příliš kategorické. AI / vyhledávací systémy mohou produkt vynechat, ale není vhodné tvrdit, že rozpor je automatický důvod.

**Návrh opravy:**

> „Rozpor mezi nimi může snížit důvěru v produktová data a tím i šanci, že systém produkt použije v doporučení.“

---

### [WARNING] Formulace „AI vybírá, co vůbec nabídne“ je příliš zjednodušující

**Citace:**

> „Prakticky se těžiště přesunulo o krok dřív — do fáze, kdy AI vybírá, co vůbec nabídne.“

**Problém:**  
Věta působí, jako by AI byla jediný rozhodovací mechanismus nákupního procesu. Bezpečnější je mluvit o výběru kandidátů / doporučení.

**Návrh opravy:**

> „Prakticky se těžiště přesunulo o krok dřív — do fáze, kdy AI vybírá kandidáty do odpovědi nebo doporučení.“

---

### [WARNING] Věta „Role AI … rozhoduje, jestli se do nabídky dostanete“ přehání vliv AI

**Citace:**

> „Role AI při výběru zboží zůstala — a právě ta rozhoduje, jestli se do nabídky dostanete.“

**Problém:**  
Tvrzení je příliš absolutní. Do nabídky se produkt může dostat přes více kanálů a AI doporučení je jen jeden z nich.

**Návrh opravy:**

> „Role AI při výběru zboží zůstala — a může výrazně ovlivnit, jestli se váš produkt objeví mezi doporučenými možnostmi.“

---

### [WARNING] „Investice do kvality dat přežije každou takovou změnu“ je absolutní claim

**Citace:**

> „Investice do kvality dat přežije každou takovou změnu.“

**Problém:**  
„Každou“ je zbytečně silné. V brand voice má obsah vysvětlovat, ne slibovat univerzální jistotu.

**Návrh opravy:**

> „Investice do kvality dat dává smysl i při změnách konkrétních protokolů a integrací.“

---

### [WARNING] „AI kanál je jen další zdroj návštěv“ je nepřesné

**Citace:**

> „Když nákup končí doma, je „AI kanál“ jen další zdroj návštěv.“

**Problém:**  
Z pohledu analytiky částečně ano, ale AI může ovlivnit výběr produktu ještě před klikem, někdy bez prokliku a někdy se ztraceným referrerem. Věta zjednodušuje roli AI.

**Návrh opravy:**

> „Z pohledu dokončení objednávky se AI chová jako další zdroj návštěv. Před klikem ale může ovlivnit, které produkty zákazník vůbec zvažuje.“

---

### [WARNING] „Podle vlastního vyjádření“ potřebuje primární zdroj

**Citace:**

> „OpenAI podle vyjádření uvedl, že první verze **nenabídla dostatečnou flexibilitu**…“

**Problém:**  
Tvrdíte „podle vyjádření“, ale ve zdrojích není uveden samostatný primární zdroj OpenAI k březnové změně. Navíc gramaticky by bylo vhodnější „OpenAI uvedla“.

**Návrh opravy:**  
Buď doplnit odkaz na konkrétní vyjádření OpenAI, nebo změnit formulaci na sekundární zdroj:

> „Podle CNBC OpenAI uvedla, že první verze nenabídla obchodníkům dostatečnou flexibilitu…“

---

### [WARNING] Časová osa má vágní položku o Shopify

**Citace:**

> „u Shopify se ohlašovalo, že se má přidat velká část obchodníků — reálně jich naskočil zlomek.“

**Problém:**  
„Velká část obchodníků“ je neurčité. Pokud šlo jen o určitou skupinu obchodníků, region nebo eligible merchants, je potřeba to zpřesnit.

**Návrh opravy:**

> „U Shopify se původně komunikovalo širší zapojení vybraných obchodníků; podle pozdějších zpráv se do nativní pokladny reálně zapojil jen zlomek z nich.“

Ještě lepší: doplnit přesný rozsah podle zdroje.

---

### [TIP] H2 „Časová osa“ je málo popisná pro AI citace

**Citace:**

> `## Časová osa`

**Problém:**  
Struktura je logická, ale tento nadpis sám o sobě neříká, čeho se časová osa týká. Pro citovatelnost a strojové pochopení je lepší konkrétnější H2.

**Návrh opravy:**

> `## Časová osa: Instant Checkout v ChatGPT 2025–2026`

---

### [TIP] Slovo „půl roku provozu“ může být přesnější

**Citace:**

> „Půl roku provozu ukázalo, kde je hranice.“

**Problém:**  
Je to čitelné, ale z hlediska přesnosti je lepší navázat na konkrétní období září 2025–březen 2026. Navíc nemuselo jít o plošný provoz u všech partnerů.

**Návrh opravy:**

> „Období od spuštění v září 2025 do změny plánu v březnu 2026 ukázalo, kde byly limity první verze.“

---

### [TIP] Formulace „Čísla mluví jasně“ je trochu publicistická

**Citace:**

> „Čísla mluví jasně…“

**Problém:**  
Není to zásadní chyba, ale článek má mít věcný tón. Navíc následuje jen jedno číslo, nikoli širší sada dat.

**Návrh opravy:**

> „Reálné využití bylo podle dostupných zpráv nízké…“

---

### [TIP] FAQ je dobré, ale jedna odpověď by měla zůstat opatrnější

**Citace:**

> „Model se ustálil na tom, že člověk produkt objeví v AI odpovědi a koupí ho na webu obchodníka.“

**Problém:**  
V kontextu ChatGPT dobré, ale bez upřesnění to může znít jako tvrzení pro celý trh.

**Návrh opravy:**

> „U ChatGPT se pro většinu obchodníků ustálil model, kdy člověk produkt objeví v AI odpovědi a nákup dokončí na webu obchodníka.“

---

### [TIP] Slug je použitelný, ale širší než článek

**Citace:**

> `slug: "nakupovani-pres-ai"`

**Problém:**  
Slug je krátký a smysluplný, ale článek je konkrétně o ChatGPT a změně nákupního modelu v roce 2026. Pokud web plánuje obecný pilíř „nakupování přes AI“, tento slug mu může překážet.

**Návrh opravy:**  
Pokud má být článek analytická aktualita:

```yaml
slug: "nakupovani-pres-ai-chatgpt-2026"
```

Pokud má být pilířový článek k celému tématu, pak je potřeba rozšířit obsah mimo ChatGPT.

---

## Co je v pořádku

- CTA je konkrétní a vede na správné produkty: **AI SEO audit 3 600 Kč**, **návod zdarma**, **AI SEO Wireframe Pack 1 490 Kč**.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ se v publikovatelném textu nepoužívají.
- Meta description má vhodnou délku.
- SEO titulek má vhodnou délku a klíčové slovo je vepředu.
- Interní odkazy jsou relevantní: produktové stránky, GTIN/feed, AI agenti, AI Mode.
- Aktuálnost je ukotvená k roku 2026 a na konci je uveden stav k 26. 8. 2026.