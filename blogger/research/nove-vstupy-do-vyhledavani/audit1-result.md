## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je poctivě opřený o primární zdroje a správně hlídá nepřímou dostupnost pro Česko. Před publikací ale potřebuje opravit několik míst, kde buď nedodržuje zadání, tvrdí víc než citace, nebo zbytečně leze do témat sousedních článků.

---

# 1. Blokující nálezy

## 1) [BLOCKER] Cílové klíčové slovo se v článku prakticky nepoužívá

**Problémové místo:**

```yaml
title: "Čím se dnes zadává dotaz: pole, hlas a kamera"
seoTitle: "Nové vstupy do vyhledávání Google 2026: pole, hlas, kamera"
slug: "nove-vstupy-do-vyhledavani"
```

Cílové klíčové slovo je **„intelligent search box a search live“**, ale není v titulku, SEO titulku, slug ani v úvodní odpovědi. Článek tím neplní zadání a bude hůř cílit dotaz, pro který má vzniknout.

**Návrh opravy:**

- `seoTitle`:  
  **„Intelligent Search box a Search Live v Google 2026“**

- `title`:  
  **„Intelligent Search box a Search Live: pole, hlas a kamera“**

- `slug`:  
  **`intelligent-search-box-search-live`**

- Do první věty těla i `answer` doplnit oba názvy.

---

## 2) [BLOCKER] Nadpis tvrdí víc než doložená citace: pole „dotaz dopisuje“

**Problémové místo:**

```mdx
## Pole, které dotaz dopisuje
```

Doložená citace říká:

> „helps you formulate your question with AI-powered suggestions that go beyond autocomplete“

To znamená, že pole **pomáhá formulovat otázku pomocí návrhů**, ne že dotaz samo „dopisuje“. „Dopisuje“ zní silněji a může implikovat automatické dokončování celého dotazu.

**Návrh opravy:**

```mdx
## Pole, které pomáhá formulovat dotaz
```

Případně:

```mdx
## Intelligent Search box: víc prostoru a návrhy formulace
```

---

## 3) [BLOCKER] Dostupnost Search Live je na několika místech formulovaná silněji, než dovoluje doklad

Článek sice později správně vysvětluje nepřímé doložení přes Režim AI, ale některé samostatně čitelné části jsou příliš zkratkovité.

**Problémová místa:**

```yaml
stats:
  - value: "200+"
    label: "zemí a území, kde je Search Live dostupný (od března 2026)"
```

```mdx
Search Live přidal hlasovou konverzaci s kamerou a je dostupný všude, kde je Režim AI.
```

```mdx
Search Live je od března 2026 ve víc než 200 zemích a územích
```

```mdx
Search Live je od března 2026 ve víc než 200 zemích a územích, navázaný na dostupnost Režimu AI — a v té je Česko i čeština.
```

Podle zadání je dostupnost pro Česko doložená **nepřímo**. Proto by každá krátká formulace měla nést vazbu na Režim AI, jinak samostatně vyznívá jako přímý seznam dostupnosti Search Live.

**Návrh opravy:**

Upravit všechna zkratkovitá místa na variantu typu:

> Search Live Google popisuje jako dostupný ve všech regionech a jazycích, kde je dostupný Režim AI. Google zároveň uvádí Režim AI ve více než 200 zemích a územích. Pro Česko je dostupnost doložená nepřímo přes seznam Režimu AI, ne vlastním seznamem Search Live.

Konkrétně `stats` změnit například na:

```yaml
- value: "200+"
  label: "zemí a území s Režimem AI, na který je dostupnost Search Live navázaná"
```

---

## 4) [BLOCKER] Článek porušuje zadání tím, že se vrací k délce dotazů

Zadání výslovně říká:

> Článek NESMÍ uvádět čísla o délce dotazů ani přepisovat přechod AI přehled → Režim AI.

Článek sice neuvádí statistická čísla, ale pracuje s formulacemi, které téma délky dotazů posouvají do článku určeného pro jiný URL.

**Problémová místa:**

```mdx
Z „lyžařské boty“ se stane popis situace s podmínkami a omezeními.
```

```mdx
Delší a konkrétnější zadání. Když pole pomáhá formulovat, dorazí popis situace místo dvou slov.
```

```mdx
Mění se délka a konkrétnost dotazu, ne požadavky na stránku.
```

```mdx
Delší zadání se stejně rozdělí — mechanismus popisuje [query fan-out](/blog/query-fan-out-ai-mode/).
```

„Místo dvou slov“ je konkrétní číselná ilustrace délky dotazu a „delší zadání“ opakovaně otevírá téma, které má patřit do `/blog/delsi-dotazy-v-ai-mode/`.

**Návrh opravy:**

Zúžit formulace na **konkrétnost a kontext**, ne délku:

- místo:

  > Delší a konkrétnější zadání.

  použít:

  > Konkrétnější zadání s více kontextem.

- místo:

  > dorazí popis situace místo dvou slov

  použít:

  > může přijít dotaz popsaný jako konkrétní situace

- místo:

  > Mění se délka a konkrétnost dotazu

  použít:

  > Mění se míra kontextu, který uživatel do vyhledávání předává.

- větu o query fan-out zkrátit na odkaz bez vysvětlování mechanismu:

  > Souvislost s rozkladem dotazu řeší samostatný článek o [rozpadu dotazu na podotázky](/blog/query-fan-out-ai-mode/).

---

## 5) [BLOCKER] „Odkazová plocha zůstává“ je příliš silný závěr

**Problémové místo:**

```mdx
Odkazová plocha zůstává — mění se cesta, kterou k ní dotaz dojde.
```

Doložené citace říkají:

- u nového pole:  
  > „You'll continue to get a range of results from Search…“
- u Search Live:  
  > „with helpful web links on your screen to keep exploring“

To dokládá, že odkazy jsou dál součástí prostředí. Nedokládá to ale rozsah „odkazové plochy“, její stabilitu ani dopad na prokliky.

**Návrh opravy:**

```mdx
Google u obou funkcí uvádí, že odkazy zůstávají součástí vyhledávací zkušenosti. Neříká ale nic o tom, jak se změní jejich viditelnost, pořadí ani míra prokliků.
```

---

# 2. Doporučení

## 1) [WARNING] Krátká odpověď by měla začínat definicí cílového tématu

**Současné znění:**

```yaml
answer: "Google v roce 2026 změnil vstupní stranu vyhledávání..."
```

Je dlouhé správně, má cca 47 slov a dává smysl samostatně. Pro AI citovatelnost ale nezačíná definicí cílového pojmu a neobsahuje hlavní keyword „Intelligent Search box“.

**Návrh opravy:**

```yaml
answer: "Intelligent Search box a Search Live jsou nové vstupy do Vyhledávání Google v roce 2026. Intelligent Search box podle Googlu rozšiřuje pole, pomáhá formulovat dotaz a přijímá text, obrázky, soubory, videa i karty prohlížeče. Search Live umožňuje hlasovou konverzaci s kamerou a odkazy na weby zůstávají součástí prostředí."
```

---

## 2) [WARNING] SEO titulek je délkově v pořádku, ale nezačíná klíčovým slovem

**Problémové místo:**

```yaml
seoTitle: "Nové vstupy do vyhledávání Google 2026: pole, hlas, kamera"
```

Délka je dobrá, ale cílové klíčové slovo není vepředu. Pro článek cílený na „intelligent search box a search live“ je to slabé.

**Návrh opravy:**

```yaml
seoTitle: "Intelligent Search box a Search Live v Google 2026"
```

Meta description je použitelná, ale také by měla obsahovat oba názvy:

```yaml
description: "Intelligent Search box napovídá formulaci a bere více vstupů. Search Live přidává hlas a kameru. Co je doložené pro rok 2026?"
```

---

## 3) [WARNING] Nadpis „Změnila se vstupní strana“ je obecný, cílový pojem chybí hned v H2

**Problémové místo:**

```mdx
## Změnila se vstupní strana
```

První H2 je čitelná, ale pro SEO/GEO slabá. AI i vyhledávač by měly v prvním nadpisu vidět, že jde o Intelligent Search box a Search Live.

**Návrh opravy:**

```mdx
## Intelligent Search box a Search Live mění vstup do vyhledávání
```

---

## 4) [WARNING] Některé interpretační věty jsou příliš kategorické

**Problémová místa:**

```mdx
Nic z toho nevyžaduje nový formát ani nový soubor na webu.
```

```mdx
vyhrávají stránky, které odpovídají na konkrétní otázku
```

```mdx
Odpověď na stránce proto musí obstát i bez sdílené znalosti.
```

Tón je jinak věcný, ale tato místa sklouzávají k absolutním závěrům. Google tyto požadavky přímo neuvádí.

**Návrh opravy:**

- místo:

  > Nic z toho nevyžaduje nový formát ani nový soubor na webu.

  použít:

  > Z doložených oznámení neplyne požadavek na nový formát stránky. Prakticky dává smysl zpřesnit existující sekce a odpovědi.

- místo:

  > vyhrávají stránky

  použít:

  > větší šanci na relevanci mají stránky

- místo:

  > musí obstát

  použít:

  > měla by být srozumitelná i bez znalosti toho, co uživatel ukázal kamerou nebo připojil jako vstup

---

## 5) [WARNING] Viditelný anglicismus „query fan-out“ zbytečně ruší český tón

**Problémové místo:**

```mdx
mechanismus popisuje [query fan-out](/blog/query-fan-out-ai-mode/)
```

Není to zakázaný termín z brand seznamu, ale zadání výslovně chce češtinu bez zbytečných anglicismů.

**Návrh opravy:**

```mdx
mechanismus popisuje článek o [rozpadu dotazu na podotázky](/blog/query-fan-out-ai-mode/)
```

URL může zůstat, anchor text by měl být česky.

---

## 6) [WARNING] Sekce o modelu je fakticky použitelná, ale pro článek má nízkou hodnotu

**Problémové místo:**

```mdx
Technicky za tím podle březnového souhrnu Googlu stojí hlasový model Gemini 3.1 Flash Live. Pro práci s obsahem z toho ale nic neplyne — je to informace o tom, proč konverzace působí plynule, ne o tom, jak se vybírají zdroje.
```

Model je podle dodaného researche ověřený, ale zadání upozorňuje, že sekundární přehledy se v modelu rozcházejí. Tady je zdroj primární, takže nejde o faktickou chybu. Přesto je věta „pro práci s obsahem z toho nic neplyne“ příliš absolutní.

**Návrh opravy:**

```mdx
Google u Search Live uvádí model Gemini 3.1 Flash Live. Pro tento článek je důležité hlavně to, že jde o hlasovou konverzaci s kamerou a odkazy na obrazovce; samotný název modelu neříká, podle čeho se vybírají zdroje.
```

---

## 7) [TIP] Úvodní odstavec je dobrý pro AI, ale mohl by nést přímější citovatelnost

Prvních cca 100 slov funguje samostatně. Chybí ale jasné oddělení: „co je doložené“ vs. „co z toho plyne“.

**Návrh opravy:**

Po první tučné odpovědi přidat jednu větu:

```mdx
Doložené jsou funkce vstupu a dostupnost navázaná na Režim AI; Google nezveřejnil čísla o používání ani dopad na prokliky.
```

To pomůže AI citaci i lidskému čtenáři.

---

## 8) [TIP] CTA je správně konkrétní, ale lépe by navazovalo na téma „krátkých odpovědí“

**Současné CTA:**

```mdx
[AI SEO audit za 3 600 Kč](/audit/) projde strukturu obsahu, krátké odpovědi i doložitelnost...
```

To je v pořádku. Pro tento článek by ale šlo ještě zpřesnit návaznost na vstupy a konkrétní dotazy.

**Návrh drobné úpravy:**

```mdx
[AI SEO audit za 3 600 Kč](/audit/) ověří, jestli vaše stránky odpovídají na konkrétní situační dotazy, mají použitelné krátké odpovědi a stojí na doložitelných tvrzeních.
```

---

# 3. Co je v pořádku

- Článek používá primární zdroje: blog.google a nápovědu Vyhledávání Google.
- Dostupnost pro Česko je v hlavní vysvětlující sekci správně označená jako **nepřímá přes Režim AI**.
- FAQ otázky jsou reálné a odpovědi jsou většinou samostatně srozumitelné.
- Neobsahuje zakázané prodejní formulace typu „garantujeme #1“ nebo „AI vás zaručeně začne doporučovat“.
- CTA vede na konkrétní produkt s cenou, ne na obecné „kontaktujte nás“.
- Interní odkazy na související články jsou relevantní; je potřeba jen zkrátit pasáže, které do nich obsahově přetékají.