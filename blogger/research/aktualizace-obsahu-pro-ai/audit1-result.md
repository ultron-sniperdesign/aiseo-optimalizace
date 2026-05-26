## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je koncepčně dobrý: drží se tématu, má správné CTA, titulek i meta description jsou v požadovaných délkách a `answer` má cca 49 slov, začíná definicí a dává samostatný smysl. Před publikací ale potřebuje opravit několik věcných a formulačních míst — hlavně nepodložené číselné tvrzení, vágní „podle dostupných analýz“ a několik příliš silných formulací.

---

## Nálezy a opravy

### [BLOCKER] Nepodložené konkrétní číslo v `stats`

**Problémové místo:**

```yaml
stats:
  - value: "30–90 dní"
    label: "okno, kdy bývá obsah v AI odpovědích citovaný nejčastěji"
```

**Problém:**  
Tohle je velmi konkrétní kvantifikace a zároveň silné tvrzení „nejčastěji“. V zadání je uvedeno, že sporná konkrétní čísla mají být záměrně jen kvalitativní / hedgovaná. Tady je číslo prezentované jako fakt bez zdroje, bez platformy a bez typu dotazu.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj a vymezit platnost, nebo tvrzení změkčit.

Bez zdroje doporučuji např.:

```yaml
- value: "týdny až měsíce"
  label: "typické okno čerstvosti u témat citlivých na aktuálnost"
```

Nebo:

```yaml
- value: "30–90 dní"
  label: "orientační okno uváděné v některých analýzách; liší se podle tématu a platformy"
```

Ideálně ale přidat zdroj přímo v článku.

---

### [BLOCKER] Vágní odkazování na „dostupné analýzy“ bez uvedení zdrojů

**Problémové místo:**

> „podle dostupných analýz bývá nejčastěji citovaný materiál aktualizovaný v posledních týdnech až měsících“

A dále:

> „Podle dostupných analýz má nejsilnější vazbu na čerstvost Perplexity…“

**Problém:**  
Tvrzení stojí na externích analýzách, ale žádná není uvedená. Článek přitom sám doporučuje uvádět „zdroj a rok“ u čísel a faktů. Bez zdrojů působí článek méně důvěryhodně a hůř citovatelně pro AI.

**Návrh opravy:**  
Doplnit konkrétní zdroje přímo do textu, ideálně s rokem. Například formulací typu:

> „Podle veřejných analýz z let 2025–2026 se u dotazů citlivých na aktuálnost častěji objevují nověji aktualizované zdroje; efekt je ale rozdílný podle platformy a tématu.“

A následně odkázat na konkrétní analýzu / studii / dokumentaci. Nestačí „podle dostupných analýz“.

---

### [WARNING] Meta description používá příliš silné „rozhoduje“

**Problémové místo:**

```yaml
description: "Proč čerstvost obsahu rozhoduje o citacích v AI vyhledávání..."
```

**Problém:**  
„Rozhoduje“ je silné a kauzální. Čerstvost je jeden ze signálů, ne samostatný rozhodující faktor. V textu se přitom správně říká, že čerstvost nenahrazuje kvalitu.

**Návrh opravy:**

```yaml
description: "Proč čerstvost obsahu ovlivňuje citace v AI vyhledávání, jak často aktualizovat a co konkrétně měnit — a proč pouhá změna data nestačí."
```

Délka zůstane v limitu a claim bude bezpečnější.

---

### [WARNING] Tvrzení o Google AI Overviews je v těle příliš kategorické

**Problémové místo:**

> „Google AI Overviews má z této trojice na čerstvost nejmenší důraz — citace sledují spíš věkový profil klasických výsledků.“

**Problém:**  
V FAQ je tvrzení uvedené jako „Podle dostupných analýz“, ale v hlavním textu je formulované jako jistý fakt. Navíc se může lišit podle typu dotazu, země a podoby AI výsledku.

**Návrh opravy:**

> „Podle dostupných analýz se u Google AI Overviews čerstvost projevuje slaběji než u Perplexity; u mnoha dotazů citace více kopírují autoritu a věkový profil klasických výsledků.“

Ještě lépe: přidat zdroj.

---

### [WARNING] Směšování Google AI Overviews a Google AI Mode

**Problémové místo:**

> „Navazuje na platformové návody … [Google AI Mode](/blog/google-ai-mode/).“

A dále sekce:

> „Google AI Overviews má z této trojice…“

**Problém:**  
Článek v textu porovnává Google AI Overviews, ale interně odkazuje na článek „Google AI Mode“. V roce 2026 už je potřeba tyto pojmy rozlišovat. AI Overviews a AI Mode nejsou totéž a freshness chování nelze automaticky přenášet mezi oběma formáty.

**Návrh opravy:**  
Buď sjednotit terminologii, nebo explicitně vysvětlit vztah:

> „V části o Googlu rozlišujeme AI Overviews a AI Mode; v obou případech se čerstvost může projevit jinak než u Perplexity.“

A upravit odkazový text např.:

> „[Google AI Mode a AI výsledky v Googlu](/blog/google-ai-mode/)“

---

### [WARNING] Formulace „Google nezohledňuje změnu data“ je moc široká

**Problémové místo:**

```yaml
answer: "... ne jen změna data — tu samotnou Google nezohledňuje."
```

A:

> „změna data bez reálné úpravy obsahu nepřináší žádný přínos“

**Problém:**  
Smysl je správný, ale „Google nezohledňuje“ může znít absolutně. Přesnější je říct, že samotná změna data není náhradou za reálnou aktualizaci a nepřináší ranking/SEO přínos. Google může datum zobrazovat nebo používat v jiných kontextech, problém je falešná aktualizace.

**Návrh opravy v `answer`:**

> „Klíčová je ale skutečná aktualizace hodnoty, ne jen změna data — samotné přepsání data není signálem reálné čerstvosti a podle Googlu nepřináší SEO přínos.“

**Návrh opravy v textu:**

> „Podle vyjádření zástupců Googlu samotné přepsání data bez reálné úpravy obsahu nepřináší SEO přínos a může působit klamavě.“

---

### [WARNING] FAQ slibuje příliš jednoznačný přínos pro klasické SEO

**Problémové místo:**

> „Ano, smysluplná aktualizace pomáhá oběma. Aktuální, úplnější a lépe strukturovaný obsah lépe odpovídá záměru uživatele, což je signál i pro klasické vyhledávání.“

**Problém:**  
„Ano, pomáhá“ je příliš jisté. Aktualizace může pomoct, ale nemusí — záleží na dotazu, konkurenci, kvalitě změny a technickém stavu webu. Také „odpovídá záměru uživatele“ není nutně přímý ranking signál ve smyslu jednoduché příčiny.

**Návrh opravy:**

> „Může pomoct i klasickému SEO v Googlu, pokud aktualizace reálně zlepší přesnost, úplnost a použitelnost stránky. Aktuálnější a lépe strukturovaný obsah může lépe odpovídat záměru uživatele. Důležité je, aby šlo o skutečné zlepšení hodnoty, ne jen o formální změnu data.“

---

### [WARNING] Tabulka kadence je méně konkrétní než FAQ a zadání

**Problémové místo:**

```jsx
{ icon: "⏱️", label: "Orientační interval", left: "Zhruba každé 2–3 měsíce", right: "Spíš jednou za delší dobu" },
```

**Problém:**  
FAQ správně uvádí „2–3 měsíce“ a „3–6 měsíců“. Tabulka ale u druhého sloupce říká jen „spíš jednou za delší dobu“, což je vágní a méně užitečné. Navíc směšuje „většinu obsahu“ a „evergreen / autoritativní“ do jedné kategorie.

**Návrh opravy:**  
Buď tabulku rozšířit na tři sloupce, nebo zpřesnit pravý sloupec.

Jednodušší oprava:

```jsx
right: "U běžného obsahu zhruba 3–6 měsíců; u evergreen témat podle změn v oboru"
```

Případně přidat řádek:

```jsx
{ icon: "🧭", label: "Kdy dřív", left: "Při změně dat, nástrojů nebo pravidel", right: "Při zastarání příkladů, odkazů nebo definic" }
```

---

### [WARNING] „Vysoká recency váha v AI“ je žargon a zároveň moc široké tvrzení

**Problémové místo:**

```jsx
{ icon: "🎯", label: "Proč", left: "Vysoká recency váha v AI", right: "Hodnotu drží autorita a úplnost" }
```

**Problém:**  
„Recency váha“ je anglicko-český žargon. Navíc „v AI“ je příliš obecné — čerstvost nemá stejnou váhu ve všech AI vyhledávačích ani ve všech tématech.

**Návrh opravy:**

```jsx
left: "Vyšší váha aktuálnosti u dotazů, kde se fakta rychle mění"
```

A pravý sloupec:

```jsx
right: "Větší roli má přesnost, autorita a úplnost"
```

---

### [WARNING] „Perplexity má nejsilnější vazbu“ potřebuje zdroj nebo opatrnější formulaci

**Problémové místo:**

> „Perplexity má na čerstvost nejsilnější vazbu — udržuje průběžně aktualizovaný index a nový obsah dokáže citovat během dní.“

**Problém:**  
Směr tvrzení odpovídá zadání, ale v článku chybí opora. „Nejsilnější vazba“ je srovnávací claim. Bez zdroje je zranitelný.

**Návrh opravy:**

> „Podle dostupných veřejných analýz má z porovnávaných platforem nejsilnější vazbu na čerstvost Perplexity. Díky práci s průběžně aktualizovaným indexem může nový nebo aktualizovaný obsah citovat už během dní.“

A doplnit zdroj.

---

### [TIP] Slangové „Bumpněte“ neodpovídá věcnému brand voice

**Problémové místo:**

```yaml
- name: "Bumpněte datum jen po reálné změně"
```

**Problém:**  
„Bumpněte“ je slang/anglicismus. Pro vzdělávací a věcný tón je lepší čeština.

**Návrh opravy:**

```yaml
- name: "Změňte datum jen po reálné úpravě"
```

Nebo:

```yaml
- name: "Posuňte datum až po skutečné aktualizaci"
```

---

### [TIP] Keyword „recency ai vyhledávání“ je v pořádku jako varianta, ale v textu raději česky

**Problémové místo:**

```yaml
- "recency ai vyhledávání"
```

A:

> „Vysoká recency váha v AI“

**Problém:**  
V keywords může být anglická varianta kvůli vyhledávání. V běžném textu ale „recency váha“ působí žargonově.

**Návrh opravy:**  
V keywords ponechat, pokud je to cílená varianta. V článku používat:

> „aktuálnost“, „čerstvost“, „váha čerstvosti“

---

### [TIP] První část článku je citovatelná, ale šla by ještě víc zahustit fakty

**Dobré místo:**

> „Aktualizace obsahu pro AI je pravidelná revize…“

**Hodnocení:**  
Úvod splňuje požadavek: začíná definicí, prvních cca 100 slov dává samostatný smysl a není to vata. To je dobré.

**Možné drobné zlepšení:**  
Do prvních 100 slov přidat jemné rozlišení platforem:

> „Efekt je nejsilnější u Perplexity, slabší u ChatGPT podle typu dotazu a obvykle méně výrazný u Google AI Overviews.“

Tím se zvýší faktická hustota úvodu.

---

### [TIP] CTA je konkrétní a odpovídá zadání

**Dobré místo:**

> „pomůže [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Pro plán na míru je tu produktový [AI SEO audit za 9 990 Kč](/audit/).“

**Hodnocení:**  
CTA je konkrétní, vede na produkty a nepadá do generického „kontaktujte nás“. To je v pořádku.

**Volitelná úprava:**  
Pokud má být CTA ještě ostřejší, doplnit rozdíl mezi produkty:

> „Pack se hodí, když chcete postupovat sami podle šablon. Audit zvolte, když potřebujete prioritizovaný plán pro konkrétní web.“

---

### [TIP] SEO metadata jsou převážně v pořádku

**Dobré místo:**

```yaml
title: "Aktualizace obsahu pro AI: jak často a co měnit 2026"
description: "Proč čerstvost obsahu rozhoduje..."
slug: "aktualizace-obsahu-pro-ai"
```

**Hodnocení:**  
Titulek má cca 52 znaků, klíčové slovo je vepředu, slug je smysluplný. Meta description je v požadované délce. Nutná je jen výše uvedená úprava slova „rozhoduje“ na „ovlivňuje“.

---

## Shrnutí priorit oprav

1. Opravit nebo ozdrojovat stat `30–90 dní`.  
2. Doplnit konkrétní zdroje k „dostupným analýzám“ a k tvrzením o Perplexity / ChatGPT / Google AI Overviews.  
3. Změkčit overclaimy: „rozhoduje“, „Google nezohledňuje“, „Ano, pomáhá“.  
4. Sjednotit Google AI Overviews vs Google AI Mode.  
5. Nahradit žargon „recency váha“ a slang „bumpněte“.