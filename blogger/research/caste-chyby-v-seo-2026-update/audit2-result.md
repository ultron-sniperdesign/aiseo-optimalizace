Níž jsou jen zbylé problémy po zapracování prvního auditu.

---

## 1. Zbylá nedoložená kvantifikace / normativní tvrzení

### A) Frontmatter `faq` — „typicky několik“, „3+ roky“, „typicky po Google core update“
**Místo:**
```yaml
- q: "Kolik chyb v SEO si typicky majitel webu neuvědomuje?"
  a: "V auditech, které v Sniper Design opakovaně děláme, najdeme typicky několik z těchto 12 chyb na webech, které běží 3+ roky ... Klient si jich obvykle neuvědomí, dokud nepřijde znatelný propad organic trafficu — typicky po Google core update."
```

**Problém:**  
Je to směs interní zkušenosti a zobecnění bez opory. „3+ roky“ i „typicky po core update“ zní jako pravidlo.

**Doporučení:**  
Přepsat na měkčí interní zkušenost bez pseudobenchmarku, např.:
> „V našich auditech se na zavedenějších webech často opakuje kombinace technických chyb, slabého interního prolinkování a nesouladu obsahu se search intentem. Majitelé webů si jich často všimnou až ve chvíli, kdy výkon začne zřetelně slábnout.“

---

### B) Frontmatter `faq` — tenký obsah: „top 10“, „10–20 KW“
**Místo:**
```yaml
(1) průměrná délka článku výrazně kratší než top 10 v SERPu
...
(3) ... každá stránka rankuje na 1–2 KW místo 10–20
```

**Problém:**  
„Top 10“ je v pořádku jako kontrolní sada SERPu, ale „1–2 KW místo 10–20“ je pořád nedoložená kvantifikace podaná jako diagnostický signál.

**Doporučení:**  
> „... stránka rankuje jen na malý počet relevantních dotazů oproti konkurenci“

---

### C) Frontmatter `faq` — backlinky: „s vysokou přesností“
**Místo:**
```yaml
Google Penguin (2012) a dnešní SpamBrain je rozpoznávají s vysokou přesností...
```

**Problém:**  
„S vysokou přesností“ je nedoložené tvrzení o schopnosti systému.

**Doporučení:**  
> „... je často dokážou rozpoznat podle opakujících se vzorců ...“

---

### D) Frontmatter `faq` — technické minimum: příliš absolutní formulace
**Místo:**
```yaml
"Jaké je dnes minimum technického SEO, které musí web zvládnout?"
a: "Sedm bodů: ..."
```

**Problém:**  
„musí web zvládnout“ + přesný sedmibodový seznam působí jako univerzální norma. U menších webů nebo atypických implementací to není vždy takto rigidní.

**Doporučení:**  
Stačí změkčit rámec:
> „Praktické technické minimum, které se vyplatí zkontrolovat: ...“

---

### E) Frontmatter `faq` — E-E-A-T: „Google používá pro hodnocení důvěryhodnosti obsahu“
**Místo:**
```yaml
Google používá pro hodnocení důvěryhodnosti obsahu
```

**Problém:**  
Zkratka. Přesnější je, že jde o koncept z Quality Rater Guidelines a algoritmy se snaží některé aspekty kvality aproximovat. V těle to máte přesněji, ve FAQ zjednodušeněji.

**Rozpor s tělem:**  
Tělo, bod 8:
> „není přímý ranking faktor ... koncept z Search Quality Rater Guidelines ... algoritmicky se Google snaží aproximovat“

**Doporučení:**  
Sjednotit s tělem.

---

### F) Frontmatter `faq` — AI citovatelnost: příliš jisté tvrzení
**Místo:**
```yaml
Pokud váš obsah není citovatelný v AI nástrojích (chybí FAQ schema, answer block, strukturovaná data), tato část publika vás nikdy neobjeví.
```

**Problém:**  
„nikdy“ je přestřelené a kauzalita je moc přímá. Citovatelnost nezávisí jen na těchto prvcích.

**Doporučení:**  
> „... snižujete šanci, že se v těchto odpovědních systémech objevíte.“

---

### G) Frontmatter `faq` — orphan pages: zůstal starý problém s „alespoň 3“
**Místo:**
```yaml
Fix: zajistit, aby každá důležitá stránka měla alespoň 3 interní linky...
```

**Problém:**  
Tohle měl první audit opravit i ve FAQ a neopraveno zůstalo. V těle už je správně „praktická heuristika“, ale FAQ to pořád podává jako normu.

**Rozpor s tělem:**  
Tělo, bod 4:
> „Praktická heuristika ... není to Googlem stanovená norma“

**Doporučení:**  
> „Fix: zajistit, aby každá důležitá stránka měla několik relevantních interních odkazů; praktická heuristika bývají aspoň tři cesty z jiných souvisejících stránek.“

---

### H) Tělo — úvod: „přes desítky signálů“
**Místo:**
> „algoritmus skóruje obsah holisticky přes desítky signálů“

**Problém:**  
Tohle bylo v prvním auditu výslovně označeno a pořád to zůstalo.

**Doporučení:**  
> „algoritmy hodnotí obsah kombinací více signálů“

---

### I) Tělo — bod 6: „5–15 % traffic share v některých vertikálách“, „pod 5 %“
**Místo:**
> „odhady Similarwebu a SparkToro z roku 2025 ukazovaly 5–15 % traffic share v některých vertikálách ... v běžných CZ e-shopech tehdy typicky pod 5 %“

**Problém:**  
Čísla se sice nově rámují jako odhady a historický obrázek, ale v článku nejsou doložená konkrétním zdrojem. Požadavek byl odstranit nedoložená čísla; tady se jen přesunula do opatrnější věty.

**Doporučení:**  
Buď doplnit konkrétní zdroj, nebo čísla úplně vyhodit:
> „AI search už v některých segmentech představuje měřitelnou část poptávky, ale podíl se výrazně liší podle trhu a oboru.“

---

### J) Tělo — bod 6: „40–60 slov definice nahoře v článku“
**Místo:**
> „Answer block (40–60 slov definice nahoře v článku) — typický citation source“

**Problém:**  
Přesný rozsah je heuristika podaná skoro jako norma.

**Doporučení:**  
> „krátký odpovědní blok na začátku článku“

---

### K) Tělo — bod 8: zůstalo původní přestřelení
**Místo:**
> „Šest signálů, které pomáhají Google aproximovat důvěryhodnost“

**Problém:**  
Tohle první audit výslovně chtěl změkčit. Neopraveno.

**Doporučení:**  
> „Šest praktických prvků, které často posilují důvěryhodnost webu a mohou pomáhat i vyhledávačům při jejím vyhodnocení“

---

### L) Tělo — bod 8: „Pro YMYL obory jsou tyto signály kritické“
**Místo:**
> „Pro YMYL obory jsou tyto signály kritické — algoritmické aproximace důvěryhodnosti váží silně.“

**Problém:**  
Příliš kategorické. Směr ano, formulace jako pravidlo ne.

**Doporučení:**  
> „U YMYL oborů mívají tyto prvky výrazně větší význam než u běžných témat.“

---

### M) Tělo — bod 9: „Minimum pro reportování v 2026“
**Místo:**
> „Minimum pro reportování v 2026:“

**Problém:**  
Zase norma. Zvlášť u položek jako scroll depth nebo AI citation share nadstavba.

**Doporučení:**  
> „Praktický základ reportingu v roce 2026:“

---

### N) Tělo — bod 11: „nejvíc podceňovaný faktor“
**Místo:**
> „Toto je v 2026 možná nejvíc podceňovaný faktor.“

**Problém:**  
Silné hodnoticí tvrzení bez opory. „možná“ to trochu tlumí, ale pořád je to marketingově přestřelené.

**Doporučení:**  
> „Toto patří k často podceňovaným oblastem.“

---

### O) Tělo — závěr služby: „typicky řešíme 4 věci“
**Místo:**
> „V SEO auditu typicky řešíme 4 věci, které odlišují náš přístup od běžného checklist auditu“

**Problém:**  
Ne vadí jako číslo samo o sobě, ale je to interní self-claim bez problému jen pokud zůstane marketingový blok. V auditním textu to nepůsobí rušivě, ale „odlišují náš přístup“ je reklamní formulace, ne věcné doporučení.

**Doporučení:**  
Spíš stylistická poznámka než chyba. Pokud má článek být poradenský, tenhle odstavec je nejméně neutrální.

---

## 2. Vnitřní rozpory po opravách

### P) FAQ vs tělo — orphan pages
**Místa:**
- FAQ:
  > „každá důležitá stránka měla alespoň 3 interní linky“
- Tělo, bod 4:
  > „Praktická heuristika ... není to Googlem stanovená norma“

**Problém:**  
Neopravený rozpor mezi frontmatterem a tělem.

---

### Q) FAQ vs tělo — E-E-A-T
**Místa:**
- FAQ:
  > „Google používá pro hodnocení důvěryhodnosti obsahu“
- Tělo:
  > „není přímý ranking faktor ... koncept z Search Quality Rater Guidelines“

**Problém:**  
FAQ je zjednodušenější a jistější než tělo. Není to tvrdý rozpor, ale po opravách působí jako nekonzistence v přesnosti.

---

## 3. Nová nesrozumitelnost / stylistické škody po opravách

### R) Frontmatter `answer` — „v 2026“
**Místo:**
```yaml
answer: "Aktualizovaný seznam častých SEO chyb v 2026: ..."
```

**Problém:**  
Česky přirozeněji „v roce 2026“ nebo bez předložky „pro rok 2026“.

---

### S) Frontmatter `faq` — AI odpověď: „reportem ... reportem“
**Místo:**
```yaml
... v Search Console reportem Generativní AI funkce a v Bing Webmaster Tools reportem AI Performance ...
```

**Problém:**  
Kostrbaté. Lepší:
> „v Google Search Console report Generativní AI funkce a v Bing Webmaster Tools report AI Performance“

---

### T) Tělo — „single trigger penalty“
**Místo:**
> „Google nereaguje na single trigger penalty“

**Problém:**  
Zbytečný anglicismus a navíc nepřesná zkratka. Přirozeněji:
> „Google dnes méně funguje stylem jedné zjevné penalizace za jeden prohřešek“

---

### U) Tělo — „AIO defenzivita (data-nosnippet pro dlouhé how-to)“
**Místo:**
> „AIO defenzivita (data-nosnippet pro dlouhé how-to)“

**Problém:**  
Bez vysvětlení je to zkratkovité a pro část čtenářů nesrozumitelné. Pokud už to tam má být, chtělo by to aspoň jednu vysvětlující větu nebo odkaz.

---

## 4. Věcné chyby / sporné formulace

### V) „Google crawlery“
**Místo:**
> „Google crawlery ji najdou jen přes sitemap“

**Problém:**  
U orphan page to není úplně přesné. Mohou ji najít i jinak: externí odkaz, historická URL, feed, interní vyhledávání, JS artefakty apod. Smysl věty je jasný, ale formulace je příliš úzká.

**Doporučení:**  
> „Bez interních odkazů ji Google často objevuje hůř a hůř chápe její význam v rámci webu.“

---

### W) „žádné 4xx/5xx chyby v Coverage reportu“
**Místo:**
- FAQ technické minimum
- Checklist technického minima

**Problém:**  
Absolutní „žádné“ je prakticky přestřelené. Na větších webech se 404 mohou objevovat legitimně. Důležité je, aby se netýkaly klíčových URL a nevznikaly systémově.

**Doporučení:**  
> „bez kritických 4xx/5xx chyb na důležitých URL“

---

### X) „Google to vidí jako freshness signal“
**Místa:**
- FAQ aktualizace
- Tělo bod 10

**Problém:**  
Formulace je moc jistá hlavně u `dateModified v schema + datum v textu`. Lepší je neimplikovat, že samotná změna datumu něco zajistí.

**Doporučení:**  
> „pomáhá to vyhledávači rozpoznat, že obsah prošel aktualizací, ale samo o sobě to nestačí bez reálných změn v obsahu“

---

## 5. Nezměkl text moc?

Ne. Konkrétnost zůstala. Pořád radí:
- co kontrolovat v technice,
- jak hledat orphan pages,
- jak porovnat intent,
- jak začít s AI měřením zdarma,
- jak prioritizovat podle typu businessu.

Problém není měkkost, ale to, že na několika místech pořád zůstávají staré „pseudo-přesné“ heuristiky a FAQ je místy tvrdší než tělo.

---

## Priorita oprav

### Kritické
1. **FAQ orphan pages — „alespoň 3 interní linky“**  
2. **Úvod — „přes desítky signálů“**  
3. **Bod 8 — „Šest signálů,