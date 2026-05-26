## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z větší části správným směrem, ale článek pořád obsahuje několik problémů: zůstala naznačená kauzalita mezi ChatGPT a přidáním Experience, ve frontmatteru zůstaly neopravené anglicismy a overclaim „AI sama nevymyslí“, a některá tvrzení o AI citacích jsou bez zdroje.

---

## Nálezy

### [BLOCKER] Zůstává kauzalita „kvůli AI přibylo druhé E“

**Problémové místo:**

> „proč kvůli AI přibylo „druhé E"“

a H2:

> „Proč Google přidal „druhé E" v době nástupu AI“

a `stats`:

> `rok, kdy Google přidal Experience — týdny po spuštění ChatGPT`

**Problém:**  
V těle je sice doplněno „nejde o oficiálně potvrzenou reakci“, ale jinde článek pořád rámuje přidání Experience jako důsledek AI/ChatGPT. To je věcně rizikové. Google přidal Experience v prosinci 2022, časově krátce po spuštění ChatGPT, ale oficiální kauzalita potvrzená není.

**Návrh opravy:**

- V úvodu změnit na:

> „proč je druhé E důležité v době nástupu generovaného obsahu“

- H2 změnit na:

> „Proč je Experience důležité v době nástupu AI obsahu“

- `stats` změnit na:

```yaml
- value: "2022"
  label: "rok, kdy Google přidal Experience do E-A-T"
```

Případně:

```yaml
label: "Google přidal Experience v prosinci 2022; souvislost s ChatGPT oficiálně nepotvrdil"
```

---

### [BLOCKER] Ve frontmatteru zůstaly neopravené anglicismy a overclaim

**Problémové místo v `howto`:**

```yaml
text: "Doplňte first-person důkazy: vlastní data, konkrétní příklady, čísla a to, co se nepovedlo. Tohle AI sama nevymyslí."
```

a v chybách:

```astro
<Mistake num="02" title="Odbornost bez zkušenosti" fix="Doplňte first-person důkazy.">
```

**Problém:**  
Po 1. auditu měly být „first-person“ formulace odstraněny, ale zůstaly ve frontmatteru a komponentě. Navíc „Tohle AI sama nevymyslí“ je přehnané — AI si podobné detaily může vygenerovat nebo halucinovat, jen je nemá z vlastní praxe.

**Návrh opravy:**

Ve frontmatteru:

```yaml
text: "Doplňte důkazy z vlastní praxe: vlastní data, konkrétní příklady, čísla a to, co se nepovedlo. Hodnotu mají tehdy, když vycházejí z reálné zkušenosti."
```

V komponentě:

```astro
<Mistake num="02" title="Odbornost bez zkušenosti" fix="Doplňte důkazy z vlastní praxe.">
```

---

### [BLOCKER] Tvrzení o vyšší šanci na citaci v AI je bez zdroje

**Problémové místo ve FAQ:**

> „Podle dostupných analýz může mít obsah s uvedeným autorem, zdroji a transparentním webem vyšší šanci stát se citovaným než anonymní a nedoložený text.“

**Problém:**  
„Podle dostupných analýz“ je nedoložené. Pokud článek tvrdí vztah mezi autorem/zdroji/transparentností a citovaností v AI systémech, musí uvést konkrétní zdroj, metodiku nebo formulaci zjemnit tak, aby nezněla jako ověřený fakt.

**Návrh opravy — varianta se zdrojem:**

> „Některé analýzy citovanosti v AI vyhledávání naznačují korelaci mezi transparentními zdroji, autorstvím a vyšší šancí na citaci; nejde ale o garantovaný ranking mechanismus.“

A doplnit konkrétní odkaz na použitou analýzu.

**Návrh opravy — bez zdroje:**

> „Obsah s uvedeným autorem, zdroji a transparentním webem může být pro AI systémy snáze vyhodnotitelný než anonymní a nedoložený text.“

---

### [WARNING] „Google podle něj ladí algoritmy“ je příliš zjednodušující

**Problémové místo:**

> „Je to koncept z Quality Rater Guidelines, podle kterého hodnotitelé posuzují kvalitu a Google podle něj ladí algoritmy.“

a v těle:

> „… podle kterého hodnotitelé posuzují výsledky a Google ladí své systémy.“

**Problém:**  
Quality Rater Guidelines slouží hodnotitelům kvality vyhledávání. Hodnocení neovlivňuje přímo pořadí konkrétních stránek. Formulace „Google podle něj ladí algoritmy“ je srozumitelná, ale může působit jako příliš přímý vztah.

**Návrh opravy:**

> „Je to koncept z Google Search Quality Rater Guidelines, podle kterého hodnotitelé posuzují kvalitu výsledků. Google tato hodnocení používá k vyhodnocování změn ve svých systémech, ne jako přímé skóre konkrétní stránky.“

---

### [WARNING] „Google Quality Rater Guidelines“ není nejpřesnější název

**Problémové místo ve frontmatteru `answer`:**

> „koncept z Google Quality Rater Guidelines“

a FAQ:

> „koncept z Quality Rater Guidelines“

**Problém:**  
Oficiálně se dokument jmenuje **Google Search Quality Rater Guidelines** / **Search Quality Rater Guidelines**. Současná formulace je pochopitelná, ale méně přesná.

**Návrh opravy:**

V `answer`:

> „koncept z Google Search Quality Rater Guidelines“

Ve FAQ:

> „koncept z Google Search Quality Rater Guidelines“

---

### [WARNING] Overclaim: „hlavní rozlišovací prvek“

**Problémové místo:**

> „A protože web zaplavil AI obsah, jsou tyhle signály důvěry dnes hlavní rozlišovací prvek.“

a ve FAQ:

> „záplava AI obsahu udělala z doložené lidské zkušenosti a důvěry hlavní rozlišovací prvek.“

**Problém:**  
„Hlavní rozlišovací prvek“ je silné tvrzení bez opory. V kontextu E-E-A-T je vhodnější pravděpodobnostní formulace.

**Návrh opravy:**

> „S rostoucím množstvím generovaného obsahu mohou být signály důvěry jedním z klíčových způsobů, jak odlišit doložený obsah z praxe od zaměnitelných textů.“

Ve FAQ:

> „S rostoucím množstvím generovaného obsahu roste význam doložené lidské zkušenosti, transparentnosti a důvěry.“

---

### [WARNING] „AI systémy mají větší důvod pracovat se zdroji…“ je vágní a personifikuje AI

**Problémové místo:**

> „AI systémy mají větší důvod pracovat se zdroji, které vykazují jasné signály důvěryhodnosti.“

**Problém:**  
Formulace je intuitivní, ale vágní. „Mají větší důvod“ připisuje AI systémům záměr. Lepší je popsat praktický mechanismus: transparentní zdroje jsou snáze vyhodnotitelné.

**Návrh opravy:**

> „Transparentní, podepsaný a ozdrojovaný obsah se AI systémům i vyhledávačům snáze vyhodnocuje než anonymní text bez doložení.“

---

### [WARNING] FAQ odpověď k ranking faktoru pořád říká „skóre, které by Google počítal“

**Problémové místo:**

> „Ne, není to přímý ranking faktor ani skóre, které by Google počítal.“

**Problém:**  
Bezpečnější formulace je „Google veřejně neuvádí žádné samostatné E-E-A-T skóre“. Současná věta může znít, jako by Google vůbec nepočítal žádné interní signály kvality, což nelze tvrdit.

**Návrh opravy:**

> „Ne, E-E-A-T není jeden přímý ranking faktor a Google veřejně neuvádí žádné samostatné E-E-A-T skóre. Jde o koncept kvality, ke kterému se mohou vztahovat různé signály důvěryhodnosti.“

---

### [WARNING] Chybí odkazy na primární zdroje u klíčových tvrzení

**Problémové místo:**

> „Google ho popisuje i v dokumentaci k užitečnému a důvěryhodnému obsahu.“

a:

> „Google přidal Experience v prosinci 2022…“

a:

> „Podle Googlu Trust…“

**Problém:**  
Článek je o důvěryhodnosti, ale u nejdůležitějších faktických tvrzení nemá odkazy na primární zdroje. To oslabuje právě E-E-A-T, které článek doporučuje.

**Návrh opravy:**  
Doplnit 2–3 externí odkazy, ideálně:

- Google Search Quality Rater Guidelines,
- Google Search Central: helpful, reliable, people-first content,
- Google Search Central blog k přidání „Experience“ do E-E-A-T.

Stačí krátce v textu, např.:

> „Google to popisuje v Search Quality Rater Guidelines a v dokumentaci k užitečnému, spolehlivému obsahu.“

---

### [WARNING] Frontmatter `answer` je dobrý, ale obsahuje anglicismus „ranking faktor“

**Problémové místo:**

```yaml
answer: "... Není to přímý ranking faktor ani skóre ..."
```

**Problém:**  
„Ranking faktor“ není mezi výslovně zakázanými termíny, ale v brand voice působí méně česky. Článek jinak míří na srozumitelný výklad.

**Návrh opravy:**

> „Není to přímý hodnoticí faktor ani samostatné skóre…“

Nebo kompromis pro SEO publikum:

> „Není to jeden přímý ranking faktor ani samostatné skóre…“

---

### [WARNING] Meta description obsahuje „ranking skóre“

**Problémové místo:**

```yaml
description: "... bez mýtů o ranking skóre."
```

**Problém:**  
Opět nejde o zakázaný termín, ale je to zbytečný anglicismus. Navíc „ranking skóre“ není úplně přirozená čeština.

**Návrh opravy:**

```yaml
description: "Co je E-E-A-T, proč na něm v AI vyhledávání záleží a jak doložit zkušenost, odbornost a důvěru pro Google i AI — bez mýtů o skóre."
```

Pozor: zachovat délku do 160 znaků.

---

### [WARNING] Formulace „Bez doloženého autora má obsah slabší signál důvěry pro AI i Google“ je moc absolutní

**Problémové místo:**

```astro
Bez doloženého autora má obsah slabší signál důvěry pro AI i Google.
```

**Problém:**  
U některých typů obsahu autorství nemusí být zásadní. Silnější význam má hlavně u odborného, poradenského, zdravotního, finančního nebo jiného citlivého obsahu.

**Návrh opravy:**

> „U odborného nebo poradenského obsahu může anonymní autorství oslabit důvěru. Jmenovaný autor s kvalifikací pomáhá doložit odpovědnost a zkušenost.“

---

### [TIP] Titulek, slug, CTA a struktura jsou v pořádku

**Dobře:**

- Titulek má cca 55 znaků a klíčové slovo je vpředu.
- Meta description je v přijatelném rozsahu, jen doporučuji upravit „ranking skóre“.
- Slug `e-e-a-t-pro-ai` je smysluplný.
- H2 struktura je logická.
- Interní odkazy jsou relevantní: AI obsah, brand mentions, aktualizace obsahu, SEO pro AI, audit, pack.
- CTA vede na konkrétní produkty: Audit 9 990 Kč a Pack 1 490 Kč.

---

### [TIP] Krátká odpověď splňuje požadavek 40–60 slov

**Dobře:**

Frontmatter `answer` má přibližně 50 slov, začíná definicí a dává samostatný smysl. Po jazykové úpravě „ranking faktor“ → „hodnoticí faktor“ bude vhodná i pro AI citování.

---

### [TIP] Aktuálnost je převážně v pořádku

**Dobře:**

- `updated: "2026-05-26"` odpovídá zadání.
- Článek nepoužívá neukotvené „letos“ ani „příští rok“.
- Rok 2022 je použit správně u přidání Experience.

**Drobná úprava:**  
Větu:

> „jsou tyhle signály důvěry dnes…“

lze zpřesnit na:

> „v roce 2026 jsou tyto signály důvěry…“

Není nutné, ale pomůže aktuálnosti.