# Research — varianty produktu pro AI

**Řádek plánu:** `varianty produktu pro ai` (ř. 136, první volný po runech Codexu 26.–27. 9.)
**Datum:** 2026-10-03 · **Kategorie:** tutorial (sloupec D) · **Tagy:** eshopy, strukturovana-data
**Slug:** `varianty-produktu-pro-ai`

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum načtení |
|---|---|---|
| **Dokumentace** | Google: Product variant structured data (`ProductGroup`, `hasVariant`, `variesBy`, `productGroupID`, technické zásady, jedna × víc stránek) | developers.google.com/search/docs/appearance/structured-data/product-variants — „Last updated 2026-09-08“, načteno 3. 10. 2026 |
| | Google: URL structure for ecommerce (adresa varianty = cesta nebo parametr; kanonická bez volitelného parametru; Google nepoužívá fragmenty) | …/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites — „Last updated 2025-12-10“, načteno 3. 10. 2026 |
| | Google: faceted navigation (ukázka `disallow: /*?*color=`, `/*?*size=`) | …/crawling-indexing/crawling-managing-faceted-navigation — „Last updated 2025-12-18“, načteno 3. 10. 2026 |
| | Google Search Central blog: podpora variant v datech od 20. 2. 2024; „doplní a vylepší feedy Merchant Center včetně automatických“; validace v reportech Search Console | developers.google.com/search/blog/2024/02/product-variants — načteno 3. 10. 2026 |
| | Merchant Center: `item_group_id` (6324507), `item_group_title` (17085146), `variant_option` (17085214), konverzační atributy (17085370) | support.google.com/merchants/answer/… — načteno 3. 10. 2026 |
| | Google blog: konverzační atributy globálně | blog.google/…/shopping-updates-google-marketing-live/ — 20. 5. 2026 |
| | OpenAI: Products feed reference (Stable) — `item_id`, `group_id`, `listing_has_variations`, `variant_dict`; profil kompatibilní s Googlem; standardní nahrání cílí na US | developers.openai.com/commerce/specs/feed — načteno 3. 10. 2026 |
| | Heureka: specifikace XML feedu (SHOPITEM na variantu, název, unikátní URL, fragmenty, ITEMGROUP_ID) | sluzby.heureka.cz/napoveda/xml-feed/ — načteno 3. 10. 2026 |
| | Zboží.cz: specifikace feedu (dnes na nápovědě Skliku) — unikátní URL i pro varianty, ITEMGROUP_ID doporučené | napoveda.sklik.cz/reklamy/xml-feed/specifikace/ — načteno 3. 10. 2026 |
| | Shoptet nápověda: Šablony variant, Přiřazení obrázků k variantám, Heureka XML feedy | podpora.shoptet.cz/… — načteno 3. 10. 2026 |
| | Upgates nápověda: Varianty produktu („Každá varianta má vlastní URL adresu…“) | upgates.cz/a/varianty — načteno 3. 10. 2026 |
| **Rozhraní (UI)** | **prázdné.** Do Merchant Center, Shoptetu ani Upgates se nepřihlašuji. Článek proto netvrdí nic o tom, co uvidíte v administraci — jen co říká nápověda a co je ve veřejném HTML. | — |
| **Měření** | (1) Shoptet, 38 produkčních e-shopů, 8. 8. 2026 (`research/shoptet-produktova-pole-google/`): 6 stránek s víc nabídkami, `ProductGroup` / `isVariantOf` / `inProductGroupWithID` 0×. (2) **Přeměření 3. 10. 2026** — viz § 4. (3) MEGA DETAIL (vlastní e-shop, Upgates), 3. 10. 2026 — viz § 4. (4) Marketing Miner + Google Suggest, 3. 10. 2026 — viz § 6. | vlastní skripty, scratchpad |
| **Nelze ověřit** | (a) jak AI Mode / Gemini `variant_option` skutečně používá — máme jen větu z nápovědy o účelu; (b) zda Shoptet předvolí variantu parametrem na všech šablonách a u variant se dvěma a třemi parametry (zkoušeny 2 stránky s jedním parametrem); (c) co generuje Upgates ve výchozí šabloně — MEGA DETAIL má vlastní šablonu; (d) co je v systémových feedech Shoptetu (`/export/` zakazuje robots.txt, nestahováno); (e) že by jeden přístup (jedna × víc stránek) měl lepší pozice — Google oba podporuje a nic takového neuvádí. | — |

---

## 1. Teze z plánu proti zdrojům

- **Plán:** „na jedné adrese se míchá víc nabídek s různou cenou i dostupností a stroj pak neví, co platí.“
  **Potvrzeno jen zčásti.** Měření ukazuje víc nabídek pod jedním produktem se stejnou URL
  (6/6 stránek, na jedné InStock i OutOfStock). Že stroj „neví, co platí“, nikde doloženo není —
  do článku jde jen to, co je vidět: stroj dostane několik cen a stavů bez adresy, která by
  je přiřadila ke konkrétní variantě. Google přitom adresu, která variantu předvolí, **požaduje**.
- **Plán:** „kdy dát variantě vlastní adresu a kdy ne.“ **Přeformulováno.** Podle Googlu musí
  jít předvolit adresou **každá** varianta v obou přístupech. Volí se jen mezi parametrem na
  jedné stránce a samostatnými stránkami; Google nepreferuje ani jedno. Kritéria volby
  v článku jsou **naše doporučení** a tak jsou označená.
- **Plán:** „jak sladit údaje mezi stránkou a feedem.“ Potvrzeno: Merchant Center vyžaduje
  shodu landing page s hodnotami varianty (title, variant_option, color, price, availability,
  image_link); OpenAI: „Neither representation reconciles conflicting values for you.“

---

## 2. Podmínky u tvrzení o platformách (B3)

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| `ProductGroup` dělá varianty způsobilé k zobrazení s informací o variantách v nákupních výsledcích | k tomu `Product` s povinnými vlastnostmi pro merchant listing; jedinečné ID varianty (`sku`/`gtin`); ID skupiny; u jedné stránky jediná kanonická URL skupiny; každá varianta předvolitelná vlastní URL | `productGroupID` a `inProductGroupWithID` se musí shodovat, když jsou obě; název varianty konkrétnější než název skupiny | zobrazení se nezaručuje (troubleshooting) | Google product-variants |
| Adresa varianty | cesta (`/t-shirt/green`) nebo parametr (`?color=green`) | u volitelného parametru kanonická = adresa bez parametru | fragment `#` Google nepoužívá (`#black` = `#white`) | Google URL structure |
| Víc stránek | každá stránka plné a samostatné značení; `ProductGroup` se opakuje na každé stránce | `ProductGroup` nemá kanonickou URL, varianty z jiných stránek jen s `url` | `url` u `ProductGroup` jen pro jednu stránku | Google product-variants |
| `item_group_id` | povinné pro bezplatné výpisy u variant; pro reklamy v Nákupech u variant v BR, FR, DE, JP, UK, US | stejná hodnota pro všechny varianty; jiné `id` u každé; landing page odpovídá hodnotám varianty | neposílat u produktů, které nejsou varianty (oblek sako + kalhoty, sada do koupelny); rodičovský SKU neposílat jako samostatný produkt; hodnotu neměnit | MC 6324507 |
| `item_group_title`, `variant_option` | volitelné, všechny země; posílat spolu s `item_group_id` | stejný titulek pro celou skupinu, jiný než titulky variant; stejná sada názvů `variant_option` ve skupině, jedinečná kombinace hodnot | — | MC 17085146, 17085214, 17085370 |
| OpenAI varianty | řádek na variantu: jiné `item_id`, společné `group_id` (≠ `item_id`), `listing_has_variations=true`, `variant_dict` | stejné názvy voleb ve skupině; atributy nahoře shodné s `variant_dict` | standardní nahrání cílí na US (CA, MX jen po nastavení trhu); profil kompatibilní s Googlem používá `item_group_id` a skládá `variant_dict` ze standardních atributů — `variant_option` v profilu neuvádí | OpenAI Products |
| Heureka | SHOPITEM na každou variantu; název rozlišuje parametry; URL unikátní pro každou variantu | — | varianty na jedné stránce: Heureka bere i fragment `#1`, `#2`; **ITEMGROUP_ID má v nápovědě dva rozsahy** (jen oblečení a obuv lišící se velikostí × velikosti, barvy, vzory, sady) | Heureka XML feed |
| Zboží.cz | každá nabídka včetně variant unikátní URL; ITEMGROUP_ID doporučené | varianta = stejný výrobce, řada, název, cenová hladina, liší se jedním parametrem | výjimka: variantní vazbu určil výrobce (16 GB stříbrný) | Sklik nápověda — specifikace feedu Zboží.cz |

---

## 3. Dva dokumenty Googlu, které se při mechanickém použití srazí

Ukázka pro filtry v dokumentaci o faceted navigation zakazuje `disallow: /*?*color=` a `/*?*size=`.
Ukázka adres variant v dokumentaci o variantách je `…/coat?size=small&color=green` — **tytéž parametry**.
A technická zásada u variant: předvolba vlastní URL „allows Google to crawl and identify each variant“.
→ Kdo převezme ukázku pro filtry doslova a varianty předvoluje stejným parametrem, zablokuje
i adresy variant. Do článku jako praktická past, s odkazem na náš článek o filtrech.

---

## 4. Měření 3. 10. 2026 (bez jmen, pravidlo Z2)

### 4.1 Shoptet — šest stránek s víc nabídkami ze vzorku 8. 8. 2026

| Stránka | Nabídek | Různých SKU | URL všech nabídek | Dostupnost | ProductGroup |
|---|---|---|---|---|---|
| 1 | 4 | 4 | = kanonická adresa produktu | InStock | ne |
| 2 | 3 | 3 | = kanonická | InStock | ne |
| 3 | 2 | 2 | = kanonická | InStock | ne |
| 4 | 2 | 2 | = kanonická | InStock | ne |
| 5 | 2 | 2 | = kanonická | InStock | ne |
| 6 | 12 | 12 | = kanonická | InStock i OutOfStock | ne |

Metoda: microdata, pro každý obor `schema.org/Offer` první `itemprop="url"`, `sku`, `availability`.

**Předvolba varianty adresou** (2 stránky, varianty s jedním parametrem): Shoptet ve výpisech
odkazuje na varianty adresou `…/produkt/?parameterValueId=<id hodnoty>` (nalezeno v HTML
widgetu s variantami). Po načtení takové adresy server vrátí HTML, ve kterém je hodnota ve
výběru předvybraná (stránka 1), resp. se doplní kód varianty a EAN (stránka 6, předtím
„Zvolte variantu“). **Kanonická adresa zůstává bez parametru**; `og:url` a drobečková navigace
parametr přebírají. Nápověda Shoptetu („Nabídka variant ve výpisu produktů“): „Každá zobrazená
varianta funguje i jako odkaz“ — jen u vyjmenovaných šablon.

**robots.txt všech 38 e-shopů:** žádné pravidlo na `parameterValueId` → adresy variant nejsou zakázané.

**Závěr pro článek:** Shoptet umí variantu adresou předvolit a kanonickou drží správně (přístup
„jedna stránka“). Chybí mu skupina ve strukturovaných datech a nabídky neodkazují na adresu
své varianty. Tvrzení držet na „u šesti měřených stránek“ / „na dvou zkoušených“.

### 4.2 MEGA DETAIL (vlastní e-shop, Upgates, vlastní šablona)

- 40 produktů rovnoměrně ze sitemapy (4 466 adres): 40/40 jeden `Product` s jedním `Offer`
  v JSON-LD, `ProductGroup` 0/40.
- Mikina (2 barvy × 4 velikosti) = **8 adres**, každá s vlastním názvem („… zelená velikost L“),
  SKU, cenou, dostupností a **vlastní kanonickou adresou**. Stránka nabízí blok „Vyberte variantu —
  Další varianty tohoto produktu“ s odkazy na ostatní velikosti (a u některých na druhou barvu).
- ⛔ První kontrola (regex na absolutní adresy) hlásila „bez odkazů na sourozence“ — **špatně**,
  odkazy jsou relativní. Opraveno druhou metodou na všech 8 stránkách. Do článku jde jen ověřená verze.
- Mezi odkazy jsou i adresy s českými slugy (`…-zelena-velka`, `…-cervena-mala`) — nezkoumáno,
  do článku nejde.
- **Závěr pro článek:** přístup „víc stránek“ — adresy i odkazy mezi variantami jsou, chybí
  skupina ve strukturovaných datech. Vlastní e-shop smíme jmenovat (CLAUDE.md, čísla z megadetail.cz).
  Nezobecňovat na Upgates — vlastní šablona.

---

## 5. Kanály v kostce (podklad pro tabulku v článku)

| Kanál | Skupina | Každá varianta | Pozor |
|---|---|---|---|
| Strukturovaná data (Google) | `ProductGroup` + `productGroupID` + `variesBy` + `hasVariant` | `Product` se `sku`/`gtin`, konkrétnějším názvem, `Offer` s `url` předvolby | jedna stránka: kanonická bez parametru; víc stránek: plné značení na každé |
| Merchant Center | `item_group_id` (+ `item_group_title`, `variant_option`) | vlastní `id`, `link` předvolby, `color`/`size`… | povinné pro bezplatné výpisy s variantami; rodiče neposílat |
| Heureka | `ITEMGROUP_ID` | vlastní SHOPITEM, název s parametry, unikátní URL | rozpor v rozsahu ITEMGROUP_ID; fragment `#` jí stačí, Googlu ne |
| Zboží.cz | `ITEMGROUP_ID` (doporučené) | unikátní URL | definice varianty: liší se jedním parametrem |
| OpenAI | `group_id` + `listing_has_variations` + `variant_dict` | vlastní `item_id`, `url` předvolby | standardní nahrání cílí na US; přímé feedy jen pro schválené partnery |

---

## 6. Klíčová slova (Marketing Miner, cs, 3. 10. 2026)

- **Bez dat (0/20):** varianty produktu, varianty produktů, produktové varianty, item_group_id,
  productgroup, ITEMGROUP_ID, shoptet varianty, upgates varianty, varianty produktu google… —
  **nedostupná data nejsou nulová poptávka**, článek se o hledanost neopírá.
- **Související s daty:** google merchant center 1 900 · merchant center 860 · varianty 300 (obecné,
  jiný význam) · strukturovaná data 170 · xml feed 110 · heureka feed 90 · heureka xml feed 70 ·
  shoptet feed 40 · canonical url 40 · kanonická url 20 · produktový feed 20.
- **Google Suggest:** „varianty produktu shoptet“, „eshop rychle varianty produktu“, „item group id
  google shopping / merchant center / meta“, „productgroup schema“.
- Trends nepouštěno — u spojení bez hledanosti by vrátily šum (A2).

## 7. FAQ — odkud je každá otázka

1. Musí mít každá varianta vlastní adresu? — praxe + Google technické zásady
2. Kam má vést kanonická adresa u variant? — Google URL structure + product-variants
3. Co je item_group_id? — Suggest („item group id merchant center“)
4. Jak jsou varianty řešené na Shoptetu? — Suggest („varianty produktu shoptet“) + měření
5. Stačí rozlišit variantu znakem # v adrese? — Heureka × Google, praxe
6. Platí item_group_id i pro Heureku a Zboží.cz? — praxe (CZ srovnávače)

## 8. Interní odkazy — rozhodnutí (B2)

- `dostupnost-a-skladovost-pro-ai` (Codex, 26. 9.) — přečteno; o variantách souhlasí, OpenAI
  má výhradu „jen schválení partneři“. **Odkaz ANO** (dostupnost po variantách).
- `shoptet-produktova-pole-google` — vlastní měření 8. 8. **Odkaz ANO.**
- `filtry-faceted-navigace-eshopu` — robots.txt × filtry, sedí s § 3. **Odkaz ANO.**
- `produktove-stranky-pro-ai` — **odkaz NE**: od 27. 9. v „Otevřených kandidátech“ (FAQ data).
- `shoptet-strukturovana-data-mereni` — microdata × JSON-LD na Shoptetu. Odkaz ANO, jen fakt.

## 9. Nález mimo téma → fronta

- **`<Mistake number=…>` místo `num=`** — komponenta čte `num`, takže číslo karty se nevykreslí
  (živě ověřeno na `/blog/ai-mode-cesky/`: prázdné `mistake__num`). **27 článků, 81 výskytů**, všechny
  vznikly 8.–23. 8. 2026, novější texty už mají `num`. Zapsat do REFRESH_QUEUE jako kandidáta na blok oprav.

## 10. Nové řádky do plánu (A5)

1. `konverzacni atributy merchant center` — v korpusu 0 zmínek o konverzačních atributech.
2. `produkty z webu bez feedu merchant center` — teze z blogu Googlu 2024 o automatických feedech.
