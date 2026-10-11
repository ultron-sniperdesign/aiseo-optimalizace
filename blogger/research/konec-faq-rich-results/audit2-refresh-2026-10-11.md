## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po faktickém kole výrazně čistší. Krátká odpověď, CTA, hlavní SEO parametry i většina zapracování sedí. Před publikací ale zůstává jeden blocker z kontroly vypořádání: ve frontmatteru přežila silnější formulace, kterou mělo 1. kolo odstranit.

---

## Nálezy

### [BLOCKER] Vypořádání W1 není úplné: ve frontmatteru zůstalo silné „Google neříká“

**Problémové místo:**

```yaml
description: "Google ukončil FAQ rich results 7. 5. 2026 a v červnu smazal jejich dokumentaci. Co to znamená pro FAQPage, kdy ho nechat a co o něm Google neříká."
```

Vypořádání W1 tvrdí, že silnější formulace typu „dokumentace neuvádí“ byly změněny na „jsme v dokumentaci nenašli“. V těle článku to sedí, ale meta description stále tvrdí „co o něm Google neříká“. To je stejný problém v jiné podobě: z výsledku rešerše dělá obecné tvrzení o tom, co Google neříká.

**Návrh opravy:**

```yaml
description: "Google ukončil FAQ rich results 7. 5. 2026 a v červnu odstranil dokumentaci. Co to znamená pro FAQPage, kdy ho nechat a co jsme v dokumentaci nenašli."
```

Délka zůstane v limitu meta description a formulace bude sladěná s opraveným textem.

---

### [WARNING] Některé H2 nejsou dost samostatné pro skenování

**Problémová místa:**

```md
## <span class="hl">Časová osa</span> konce — <strong>od srpna 2023 do srpna 2026</strong>
```

```md
## <span class="hl">Nechat, nebo odstranit</span> — <strong>rozhoduje soulad a údržba</strong>
```

```md
## <span class="hl">Shrnutí</span> — <strong>o datech rozhoduje údržba, o FAQ čtenář</strong>
```

H2 mají pointu, ale u prvních dvou chybí klíčový pojem. Čtenář, který stránku jen skenuje, nemusí hned vidět, že jde o FAQ rich results / FAQPage. Brief pro toto kolo výslovně chce, aby H2 nesly klíčový pojem i pointu.

**Návrh opravy:**

```md
## <span class="hl">Časová osa FAQ rich results</span> — <strong>omezení 2023, konec 2026</strong>
```

```md
## <span class="hl">FAQPage nechat, nebo odstranit</span> — <strong>rozhoduje soulad s obsahem a údržba</strong>
```

```md
## <span class="hl">Shrnutí k FAQPage</span> — <strong>data podle údržby, FAQ podle čtenáře</strong>
```

---

### [WARNING] Jedna FAQ odpověď není úplně sebestačná bez otázky

**Problémové místo:**

```yaml
- q: "Co se stalo s FAQ reportem, testem a API v Search Console?"
  a: "Google při ukončení ohlásil, že v červnu 2026 odebere FAQ report..."
```

Odpověď začíná „při ukončení“, ale bez přečtení otázky není jasné, při ukončení čeho. FAQ odpovědi mají být čitelné samostatně.

**Návrh opravy:**

```yaml
a: "Při ukončení FAQ rich results Google ohlásil, že v červnu 2026 odebere FAQ report v Search Console, typ zobrazení FAQ v přehledu výkonu a podporu FAQ v testu rozšířených výsledků a v srpnu 2026 podporu v rozhraní Search Console API. Přesná data odebrání nezveřejnil. Nápověda Search Console k přehledu výkonu dnes vede FAQ rich results mezi ukončenými poli a v hromadném exportu dat mají u novějších dat prázdnou hodnotu."
```

---

### [TIP] Formulace „o schema.org nic nenašli“ je pro neodborníka méně srozumitelná a trochu uhýbá od slovníku webu

**Problémová místa:**

```md
V dokumentaci OpenAI, Perplexity ani Anthropicu jsme o schema.org nic nenašli.
```

```md
left: "V jejich dokumentaci jsme o schema.org nic nenašli"
```

„schema.org“ není zakázaný termín jako „schema markup“, ale web podle briefu drží pojem „strukturovaná data“. Pro neodborníka je lepší schema.org buď vysvětlit, nebo ho svázat se strukturovanými daty.

**Návrh opravy:**

```md
V dokumentaci OpenAI, Perplexity ani Anthropicu jsme nenašli zmínku o strukturovaných datech podle schema.org.
```

A v tabulce:

```md
left: "V jejich dokumentaci jsme nenašli zmínku o strukturovaných datech podle schema.org"
```

---

### [TIP] „HowTo“ by šlo při prvním výskytu v samostatné sekci přiblížit neodbornému čtenáři

**Problémové místo:**

```md
## <span class="hl">HowTo</span> skončil <strong>už v roce 2023</strong>

FAQ nejsou první případ. HowTo rich results Google...
```

Čtenář z oboru ví, co HowTo znamená. Majitel webu nebo správce obsahu bez SEO kontextu nemusí. Stačí krátké dovysvětlení v první větě sekce.

**Návrh opravy:**

```md
## <span class="hl">HowTo rich results</span> skončily <strong>už v roce 2023</strong>

FAQ nejsou první případ. HowTo rich results, tedy rozšířené výsledky pro návody krok za krokem, Google...
```

---

## Kontrola vypořádání z 1. kola

- **B1 autoritativní vládní a zdravotnické weby:** zapracování v textu sedí.
- **B2 podmínka souladu s obsahem u „neškodí“:** hlavní citovatelné věty podmínku mají; ponechané parafráze výroku z roku 2023 jsou kontextované. Bez nového nálezu.
- **B3 příliš široké tvrzení o převzetí AI:** oprava sedí, původní formulace v textu nezůstala.
- **W1 „dokumentace neuvádí“:** v těle opraveno, ale ve frontmatteru zůstalo „co o něm Google neříká“ — viz blocker výše.
- **W2 „jen už nic nezobrazí“ bez rozsahu:** oprava sedí.
- **W3 rozsah „ve Vyhledávání Google“:** oprava sedí.

---

## Co je v pořádku

- `seoTitle` má 55 znaků, klíčový pojem je na začátku.
- `description` je délkou v limitu, ale potřebuje opravit formulaci kvůli blockeru.
- Krátká odpověď má 58 slov, začíná definicí a dává samostatný smysl.
- Prvních zhruba 100 slov těla funguje jako samostatné shrnutí.
- Interní odkazy jsou relevantní k tématu.
- CTA směřuje na konkrétní produkt **Audit AI viditelnosti**, cena je mimo text odkazu a odpovídá briefu.