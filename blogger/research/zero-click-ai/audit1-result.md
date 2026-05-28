## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je celkově dobře zaměřený, odlišuje se od opt-out článku a CTA směřuje na konkrétní produkty. Má ale několik věcných a formulačních vad, hlavně kolem interpretace dat v Google Search Console a definice „špatného“ zero-clicku.

---

## Nálezy a cílené opravy

### [BLOCKER] Rozpor: článek tvrdí, že v GSC jsou kliky z AI segmentů vidět zvlášť

**Problémové místo:**

> „V nich uvidíte impressions, kliky a CTR zvlášť.“

Toto je v FAQ u otázky „Jak měřit zero-click v Google Search Console?“.

**Proč je to problém:**  
V zadání je výslovně uvedeno důležité omezení: k roku 2026 nelze oddělit kliky z AI Overviews od klasického organiku v GSC. Článek to jinde správně říká, ale tato FAQ odpověď tomu odporuje.

**Návrh opravy:**

Nahraďte větu například:

> „V segmentech AI Mode a AI Overviews sledujte hlavně zobrazení a CTR. Kliky ale k roku 2026 nelze spolehlivě oddělit od klasického organického vyhledávání, proto je potřeba vyhodnocovat trend zobrazení, CTR a dotazů společně.“

---

### [WARNING] „Zapněte AI segmenty“ je nepřesné — nejde o zapnutí, ale o použití filtru

**Problémové místo:**

> `name: "Zapněte AI segmenty v GSC"`

a:

> „Google v polovině roku 2025 přidal do GSC samostatné AI segmenty.“

**Proč je to problém:**  
Segmenty se v GSC typicky „nezapínají“ jako funkce webu. Uživatel je vybere / použije ve filtru Search Appearance, pokud má dostupná data.

**Návrh opravy:**

Ve frontmatteru `howto` změnit:

> „Zapněte AI segmenty v GSC“

na:

> „Použijte AI segmenty v GSC“

A text kroku upravit na:

> „V Google Search Console otevřete Výkon → Search Appearance a vyberte segmenty AI Mode nebo AI Overviews, pokud jsou pro váš web dostupné. Sledujte hlavně zobrazení a CTR.“

---

### [WARNING] Špatně popsaný „špatný zero-click“ ve FAQ

**Problémové místo:**

> „Špatný zero-click je čistě informační návštěva bez brand stopy.“

**Proč je to problém:**  
To není přesné. Čistě informační dotaz bez konverzního potenciálu může být spíš přijatelná nebo nízkoriziková ztráta. Podle zadání je „bad zero-click“ hlavně ztráta hodnotné návštěvy nebo dotazu s obchodním/konverzním potenciálem bez brand visibility.

**Návrh opravy:**

Přepište část FAQ například takto:

> „Špatný zero-click nastává ve chvíli, kdy AI nebo rozšířený výsledek převezme odpověď u dotazu s obchodní hodnotou a uživatel nevidí značku ani neklikne na web. Typicky jde o porovnání, výběr dodavatele, cenu, recenze nebo dotazy blízko konverzi.“

---

### [WARNING] Tvrzení o „vypnutí AI Overviews na úrovni webu“ je příliš zjednodušené

**Problémové místo:**

> „Vypnutí Google AI Overviews na úrovni webu jde řešit…“

**Proč je to problém:**  
Formulace může vyznít, jako by existoval jednoduchý přepínač „vypnout AIO pro web“. Bez vysvětlení je to věcně zavádějící. V praxi jde spíš o omezení zobrazování obsahu přes pravidla pro náhledy/snippety, která mají vedlejší dopady.

**Návrh opravy:**

Nahradit například:

> „AI Overviews nejde pro web jednoduše vypnout samostatným přepínačem. Lze ale omezovat, jak Google používá obsah v náhledech a odpovědích, což může mít dopad i na klasické výsledky. Proto má pro většinu webů smysl nejdřív měřit dopad a teprve potom řešit omezení.“

Tím se článek zároveň lépe odliší od návodu `jak-vypnout-ai-overview`.

---

### [WARNING] Vágní odkaz na „dostupné analýzy“ bez uvedení zdroje

**Problémové místo:**

> „Podíl zero-click dotazů v Googlu roste — podle dostupných analýz z let 2025–2026 se v roce 2026 blíží dvěma třetinám dotazů.“

a:

> „CTR pozic v organiku u dotazů s AIO podle analýz citelně klesá…“

**Proč je to problém:**  
Tvrzení jsou v zásadě v souladu se zadáním, ale v článku nejsou doložená. U číselného trendu typu „blíží dvěma třetinám“ je potřeba uvést alespoň zdroj nebo formulaci ještě více zjemnit.

**Návrh opravy:**

Buď doplnit konkrétní zdroj do textu, například:

> „Podle analýz zero-click vyhledávání publikovaných v letech 2025–2026…“

a přidat odkaz na zdroj,

nebo formulaci zjemnit:

> „Různé analýzy z let 2025–2026 ukazují, že zero-click podíl v Googlu dlouhodobě roste a u části trhů se přibližuje dvěma třetinám dotazů.“

---

### [WARNING] Signál „rostou impressions, klesá CTR“ není sám o sobě důkaz zero-clicku

**Problémové místo:**

> „rostoucí impressions a klesající CTR u dotazu je typický signál zero-click.“

**Proč je to problém:**  
Je to užitečný signál, ale může ho způsobit i změna pozice, sezónnost, změna titulku, jiný SERP layout nebo změna záměru dotazu. Článek to částečně koriguje v „Častých chybách“, ale v metodické části by měl být přesnější.

**Návrh opravy:**

Upravit na:

> „Rostoucí impressions a klesající CTR u dotazu je možný signál zero-clicku. Ověřte ho proti průměrné pozici, sezónnosti, změnám titulku/popisku a tomu, zda se u dotazu zobrazuje AI Overview.“

---

### [WARNING] Anglické výrazy zhoršují srozumitelnost brand voice

**Problémová místa:**

> „brand visibility“

> „branded queries“

> „branded search“

> „AI mentions“

> „vendor dotazy“

> „top-of-funnel“

**Proč je to problém:**  
Nejde o zakázané termíny, ale článek má být věcný a srozumitelný. Tady se zbytečně míchá čeština s angličtinou, což oslabuje vzdělávací tón.

**Návrh opravy:**

Doporučené náhrady:

- „brand visibility“ → „viditelnost značky“
- „branded queries“ → „značkové dotazy“
- „branded search“ → „vyhledávání značky“
- „AI mentions“ → „zmínky v AI odpovědích“
- „vendor dotazy“ → „dotazy na dodavatele, alternativy a ceny“
- „top-of-funnel“ → „horní část nákupní cesty“

Příklad opravy:

> „Měřte i nepřímé metriky — vyhledávání značky, zmínky v AI odpovědích, kvalitu konverzí, ne jen objem návštěv.“

---

### [TIP] H2 „Jak velký je problém“ je slabší pro SEO i citovatelnost

**Problémové místo:**

> `## Jak velký je problém`

**Proč je to problém:**  
Nadpis je obecný a neobsahuje hlavní téma. V článku s cílovými KW „zero-click ai“ a „ai overviews ctr“ je škoda nevyužít H2 lépe.

**Návrh opravy:**

Změnit například na:

> `## Jak velký je zero-click problém u AI Overviews`

nebo:

> `## Jak AI Overviews mění CTR a zero-click podíl`

---

### [TIP] CTA je správně produktové, ale doporučuji jasněji určit primární akci

**Problémové místo:**

> „pomůže produktový AI SEO audit za 9 990 Kč… Pokud chcete postupovat sami podle hotové předlohy, je tu AI SEO Wireframe Pack…“

**Co je dobře:**  
CTA není generické „kontaktujte nás“ a vede na konkrétní produkty s cenou. To splňuje zadání.

**Doporučené zpřesnění:**

Protože článek je o měření dopadu a kompenzaci, primární CTA by měl být audit. Pack může být sekundární.

Možná úprava:

> „Chcete vědět, které dotazy vám kvůli AI Overviews ztrácí prokliky a kde má smysl kompenzace? Objednejte si AI SEO audit za 9 990 Kč. Pokud chcete postupovat sami podle předlohy, využijte AI SEO Wireframe Pack za 1 490 Kč.“

---

### [TIP] Frontmatter `answer` je dobrý a splňuje požadavky

**Kontrola:**

> „Zero-click vyhledávání je situace…“

**Hodnocení:**  
Krátká odpověď má cca 53 slov, začíná definicí, dává samostatný smysl a obsahuje důležité omezení GSC. To je v pořádku.

Pouze drobná možná úprava pro bezpečnější claim:

> „AI Overviews tento podíl u řady dotazů zvyšují.“

místo:

> „AI Overviews tento podíl zvyšují.“

Není nutné, ale je to opatrnější formulace.

---

### [TIP] SEO metadata jsou v pořádku

**Kontrola:**

- Titulek: cca 55 znaků, klíčové slovo je na začátku.
- Meta description: cca 152 znaků, v doporučeném rozsahu.
- Slug: `zero-click-ai` je krátký a smysluplný.
- Interní odkazy: relevantní — opt-out článek, měření SEO výkonu, E-E-A-T, brand mentions, SEO pro AI, audit, pack.

Bez zásadní opravy.

---

## Shrnutí priorit oprav

Před publikací opravit hlavně:

1. FAQ tvrzení, že v GSC jsou „kliky zvlášť“ u AI segmentů.  
2. Nepřesnou formulaci kolem „vypnutí AI Overviews“.  
3. Definici špatného zero-clicku.  
4. Doplnit zdroje nebo zjemnit tvrzení o dvou třetinách zero-click dotazů a poklesu CTR.  
5. Zčeštit anglické marketingové výrazy.