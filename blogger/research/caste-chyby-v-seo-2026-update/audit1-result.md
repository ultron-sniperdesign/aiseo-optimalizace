Níže jen nálezy. Cituju místo a dávám návrh opravy.

---

## 1. Pořád zůstala formulace, která vede k placenému dřív než k free zdroji

### A) Frontmatter `faq` — AI éra
**Místo:**
```yaml
- q: "Jaké je největší ignorování AI éry, které dnes vidíme?"
  a: "... Minimum: měřit AI citation share přes Otterly nebo Marketing Miner Brand Radar."
```

**Problém:**  
Tohle je přesně stará vada. Ve frontmatteru pořád říkáš jako „minimum“ placený tracking, přestože v těle už správně uvádíš GSC + Bing zdarma jako první krok.

**Rozpor s tělem:**  
V bodu 6 píšeš:
> „Měření začněte tím, co nic nestojí… Search Console… Bing Webmaster Tools…“

**Návrh opravy:**
```yaml
a: "Měřit jen pozice klíčových slov v Googlu a říkat 'jsme #3 na primary KW, jsme dobří' je dnes krátkozraké. Část poptávky prochází AI plochami — Google AI přehledy a AI Mode, ChatGPT, Perplexity, Gemini a Copilot. Pro český trh nemáme tvrdá souhrnná data o podílu trafficu podle oborů. Minimum je začít bezplatnými oficiálními reporty: v Google Search Console report Generativní AI funkce a v Bing Webmaster Tools AI Performance, pokud jsou pro váš web dostupné. Citation tracking přes Otterly nebo Marketing Miner dává smysl až jako nadstavba."
```

---

## 2. Opačný směr: v textu už free zdroje nepřeceňuješ, ale jedno místo je formulované neobratně

### B) Bod 9 — „pokud je pro váš web máte“
**Místo:**
> „Imprese v reportu Generativní AI funkce v GSC a v Bing AI Performance (měsíčně, zdarma — pokud je pro váš web máte)“

**Problém:**  
Jazykově rozbité a významově nejasné. Není jasné, zda myslíš dostupnost reportu, způsobilost webu nebo prostě to, že data nemusí být naplněná.

**Návrh opravy:**
> „Imprese v reportu Generativní AI funkce v GSC a v Bing AI Performance (měsíčně, zdarma — pokud jsou tyto reporty pro váš web dostupné a mají naplněná data)“

Ještě lepší:
> „Imprese z oficiálních AI reportů v GSC a Bing Webmaster Tools (měsíčně). Berte je jako základní orientaci: ukazují jen část reality a nenahrazují citation tracking.“

---

## 3. Vnitřní rozpor mezi FAQ a tělem u AI měření

### C) Frontmatter FAQ vs tělo
**Místa:**
- Frontmatter FAQ:  
  > „Minimum: měřit AI citation share přes Otterly nebo Marketing Miner Brand Radar.“
- Tělo, bod 6:  
  > „Měření začněte tím, co nic nestojí…“
- Tělo, bod 9:  
  > „AI citation share… až jako nadstavba, ne první krok“

**Problém:**  
Přímý rozpor. FAQ je přísnější a horší než tělo. To je přesně typ vady, kterou jsi chtěl kontrolovat.

**Návrh opravy:**  
Sjednotit FAQ s bodem 6/9. Viz návrh v bodu 1A.

---

## 4. Zbylá nedoložená nebo přestřelená čísla / tvrzení

### D) Úvod — „algoritmus skóruje obsah holisticky přes desítky signálů“
**Místo:**
> „algoritmus skóruje obsah holisticky přes desítky signálů“

**Problém:**  
„Desítky signálů“ je obecně plausibilní, ale v tomhle znění je to tvrzení bez opory. Navíc to zní, jako by šlo o známý a kvantifikovaný počet.

**Návrh opravy:**
> „algoritmy hodnotí obsah kombinací více signálů“
nebo
> „Google hodnotí obsah kombinací mnoha signálů, ne jedním izolovaným pravidlem“

---

### E) Úvod — „Google jich uvolňuje 2–4× ročně“
**Místo:**
> „core update (Google jich uvolňuje 2–4× ročně)“

**Problém:**  
Konkrétní frekvence je proměnlivá a bez zdroje. Není to zásadní chyba, ale je to zbytečně přesné.

**Návrh opravy:**
> „core update (Google je vydává opakovaně během roku)“

---

### F) Úvod — „organic traffic neklesne… ale pomalu o 5–10 % každé čtvrtletí“
**Místo:**
> „pomalu o 5–10 % každé čtvrtletí“

**Problém:**  
Číslo bez zdroje. Vypadá jako univerzální kvantifikace dopadu SEO chyb, což neobhájíš.

**Návrh opravy:**
> „ale může se plíživě zhoršovat v čase“
nebo
> „ale může klesat pozvolna a dlouho to vypadá jako sezónnost“

---

### G) Bod 4 — „alespoň 3 interní linky“
**Místo:**
> „každá důležitá stránka by měla mít alespoň 3 interní linky“

**Problém:**  
Tohle je interní heuristika, ne obecné pravidlo. V článku je to podané jako norma.

**Návrh opravy:**
> „každá důležitá stránka by měla mít víc než jeden relevantní interní odkaz; v praxi se často osvědčí aspoň několik cest z jiných souvisejících stránek“

Pokud chceš zachovat číslo:
> „praktická heuristika: u důležitých stránek mířit alespoň na 3 relevantní interní odkazy“

Stejně opravit i frontmatter FAQ k orphan pages:
```yaml
Fix: zajistit, aby každá důležitá stránka měla několik relevantních interních odkazů; praktická heuristika jsou alespoň 3.
```

---

### H) Bod 6 — „trend roste meziročně dvouciferně“
**Místo:**
> „trend roste meziročně dvouciferně“

**Problém:**  
Nedoložené číslo. „Dvouciferně“ je pořád kvantifikace. Pokud to není explicitně podložené ve zdroji, pryč.

**Návrh opravy:**
> „trend je meziročně rostoucí“
nebo
> „podíl AI ploch roste, ale tempo se liší podle trhu a oboru“

---

### I) Bod 8 — „Šest signálů, které pomáhají Google aproximovat důvěryhodnost“
**Místo:**
> „Šest signálů, které pomáhají Google aproximovat důvěryhodnost:“

**Problém:**  
Formulace je moc jistá. U některých bodů (např. LinkedIn link autora, Trustpilot, Reddit mentions) jde spíš o rozumné proxy než o doložené signály v tomhle konkrétním tvaru.

**Návrh opravy:**
> „Šest praktických prvků, které často posilují důvěryhodnost webu a mohou pomáhat i vyhledávačům při jejím vyhodnocení:“

---

### J) Bod 10 — „typicky meziročně klesá organic traffic o 10–20 %“
**Místo:**
> „Bez updatů typicky meziročně klesá organic traffic o 10–20 %“

**Problém:**  
Nedoložené číslo. Působí jako benchmark napříč weby.

**Návrh opravy:**
> „Bez updatů evergreen obsah často postupně ztrácí výkon“
nebo
> „Bez updatů evergreen obsah na řadě webů postupně ztrácí organický výkon, zvlášť když konkurence obsah průběžně obnovuje“

Stejná chyba je i ve frontmatter FAQ:
```yaml
Pokud obsah neaktualizujete 24+ měsíců, organic traffic typicky meziročně klesá o 10–20 %.
```
Opravit stejně.

---

### K) Bod 11 — „ChatGPT a Perplexity mnohem ochotněji citují rozpoznatelné brandy“
**Místo:**
> „ChatGPT a Perplexity mnohem ochotněji citují rozpoznatelné brandy než neznámé domény“

**Problém:**  
Silné tvrzení bez opory. Směr může být pravděpodobný, ale „mnohem ochotněji“ je nepodložené.

**Návrh opravy:**
> „rozpoznatelné brandy mohou mít v AI systémech výhodu, protože se častěji objevují v citovaných zdrojích, zmínkách a odkazech“

---

### L) Bod 12 — „lokální e-shop nepotřebuje řešit AI citation share“
**Místo:**
> „Ve skutečnosti malý lokální e-shop nepotřebuje řešit AI citation share…“

**Problém:**  
Příliš absolutní. Lepší je „typicky nebývá první priorita“.

**Návrh opravy:**
> „Ve skutečnosti malý lokální e-shop obvykle nepotřebuje řešit AI citation share jako první prioritu…“

---

### M) Anti-checklist — „Screaming Frog / Ahrefs Site Audit ukáže 0“
**Místo:**
> „Žádné orphan pages (Screaming Frog / Ahrefs Site Audit ukáže 0)“

**Problém:**  
Absolutní nula je zbytečně tvrdá a nástrojově problematická formulace. U větších webů nebo při specifickém nasazení to není realistický standard.

**Návrh opravy:**
> „Žádné důležité orphan pages; kritické stránky mají interní odkazy a orphan výjimky jsou vědomě pod kontrolou“

---

### N) „Den 5: Audit content — najít stránky pod 800 slov…“
**Místo:**
> „najít stránky pod 800 slov u strategických témat“

**Problém:**  
Tohle jde proti vlastnímu textu výš, kde správně píšeš, že počet slov není mechanické pravidlo. Tady se k němu vracíš jako filtru.

**Vnitřní rozpor:**  
Bod 2 říká:
> „Google nikdy neoznačil minimální počet slov“
a
> „ne mechanicky podle počtu slov“

Pak v akčním plánu:
> „najít stránky pod 800 slov“

**Návrh opravy:**
> „Audit content — najít strategické stránky, které nepokrývají intent, chybí jim podtémata nebo výrazně zaostávají za konkurencí v úplnosti odpovědi“

Pokud chceš ponechat word count jen jako pomocný filtr:
> „pomocně si vyfiltrovat i neobvykle krátké stránky u strategických témat, ale hodnotit je hlavně podle intentu a úplnosti“

---

### O) Sniper Design box — „citation share v ChatGPT/Perplexity/Google AIO“
**Místo:**
> „AI viditelnost jako součást — citation share v ChatGPT/Perplexity/Google AIO, ne jen klasické pozice“

**Problém:**  
Po refresi tu znovu chybí zmínka o free oficiálních reportech jako první vrstvě měření. Není to explicitně „plaťte dřív“, ale navazuje to na starou chybu a marketingově to znovu sklouzává rovnou k pokročilé metrice.

**Návrh opravy:**
> „AI viditelnost jako součást — od bezplatných oficiálních reportů v GSC/Bing po citation tracking v ChatGPT, Perplexity a Google AI plochách“

---

## 5. Otevřený box: srozumitelný, ale jedna věta mate

### P) Otevřený box — „mohl platit za data, k nimž měl zdarma aspoň částečný přístup“
**Místo:**
> „Kdo se jím řídil, mohl platit za data, k nimž měl zdarma aspoň částečný přístup.“

**Problém:**  
Věcně přibližně sedí, ale může se číst tak, že free reporty jsou ekvivalent placených dat a jen „částečně dostupné“. Přitom sám správně zdůrazňuješ, že nejde o náhradu citation trackingu.

**Návrh opravy:**
> „Kdo se jím řídil, mohl sáhnout po placeném trackingu dřív, než vyčerpal bezplatné oficiální reporty, které už tehdy nabízely základní orientaci.“

To líp drží hierarchii:
1. free reporty = první krok,
2. placený tracking = nadstavba.

---

## 6. AI Mode: refresh ho doplnil jen napůl

### Q) Hlavní text bodu 6
**Místo:**
> „AI search roste…“
> „Search Console… AI Overviews od AI Mode neoddělí…“

**Problém:**  
AI Mode se sice objeví, ale spíš bokem. V research jsi sám napsal, že článek ho nezmiňoval vůbec. Po refresi je zmíněný technicky, ne významově. U bodu „Ignorování AI éry“ by bylo vhodné explicitně pojmenovat, že nejde jen o AI Overviews, ale i o AI Mode jako samostatnou plochu / typ interakce.

**Návrh doplnění jedné věty do úvodu bodu 6:**
> „Nejde už jen o AI Overviews v klasickém výsledkovém rozhraní, ale i o AI Mode a externí odpovědní systémy typu ChatGPT nebo Perplexity.“

To stačí.

---

## 7. Další menší rozpory mezi frontmatterem a tělem

### R) Frontmatter `description`
**Místo:**
```yaml
description: "Aktualizovaný přehled SEO chyb 2026 — keyword stuffing, intent mismatch, technický dluh, ignorování brandu. Formulace zmírněné, přidaná prioritizace."
```

**Problém:**  
Po refresi jsi hlavně opravoval AI měření a FAQ rich results kontext. Description to vůbec nereflektuje. Není to věcná chyba, ale je to nedokončený refresh na úrovni metadat.

**Návrh opravy:**
```yaml
description: "Aktualizovaný přehled SEO chyb 2026 — 12 omylů od keyword stuffingu po chybné měření. Doplněné bezplatné AI reporty v GSC/Bing, zmírněná tvrzení a přidaná prioritizace."
```

---

## Shrnutí priorit oprav

### Nutné opravit hned
1. **Frontmatter FAQ o AI éře** — pořád radí placený tracking jako minimum.
2. **Akční plán „pod 800 slov“** — přímý rozpor s tělem.
3. **Nedoložená čísla:**  
   - 5–10 % každé čtvrtletí  
   - 10–20 % meziročně u evergreenu  
   - dvouciferný růst trendu  
   - 2–4 core updaty ročně  
4. **„alespoň 3 interní linky“** změnit na heuristiku, ne normu.
5. **Otevřený box** zpřesnit, aby neimplikoval zaměnitelnost free reportů a citation trackingu.

### Doporučené
6. Posílit explicitní zmínku o **AI Mode** v bodu 6.
7. Zjemnit silná tvrzení u **E-E-A-T / trust signalů** a **brand citací v AI**.
8. Dotáhnout metadata (`description`) a marketingový box Sniper Design, aby reflektovaly novou hierarchii měření.

Když chceš, udělám ti v dalším kroku rovnou **patch diff po blocích**: frontmatter, bod 6, bod 9, bod 10, anti-checklist a sekce „Co dělat tento týden“.