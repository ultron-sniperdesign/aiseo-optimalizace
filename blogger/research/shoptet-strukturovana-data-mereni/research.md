# Research — co Shoptet posílá strojům (vlastní měření)

**Řádek plánu:** `shoptet ai viditelnost` — BLOK „Shoptet a AI viditelnost" 1/5 (kotva)
**Datum měření:** 2026-08-08 · **Kategorie:** analysis · **Tagy:** eshopy, mereni

---

## 1. Proč tenhle článek

Blok o Shoptetu má stát na měření, ne na nápovědě. Kotva bloku odpovídá na otázku,
kterou si nikdo v češtině veřejně nezměřil: **co Shoptet e-shop reálně vydává směrem
ke strojům** — jaká strukturovaná data, co v robots.txt, jestli je obsah v HTML bez JS.

**Kolizní kontrola (grep přes 118 článků):**

- `ai-seo-upgates-shoptet` — jediný článek s Shoptetem jako tématem. Říká *co dělat*,
  ne *co platforma vydává*. Neuvádí formát strukturovaných dat.
- `strukturovana-data-pro-ai` — jediný článek, který zmiňuje microdata (2×), a to větou
  „Microdata a RDFa fungují také, ale doporučená cesta je JSON-LD". Neodporuje si to;
  tenhle článek na to navazuje platformovým měřením.
- `produktove-stranky-pro-ai`, `kategorie-texty-pro-ai`, `produktovy-feed-gtin` — obsahová
  doporučení, žádné měření platformy.

**Téma volné.**

⛔ **Vymezení vůči sniperdesign.cz** (rozhodnuto 2026-08-08): tady jen AI viditelnost.
Žádné klasické SEO na Shoptetu, žádná nabídka služby, žádný odkaz na `/seo-pro-eshop-shoptet`.

---

## 2. Metodika

### Vzorek

Dvě skupiny, každá s jiným účelem:

**A) 9 šablonových demo e-shopů Shoptetu** — Samba, Disco, Step, Classic, Waltz, Tango,
Techno, Soul, Pop. Adresy `*.shoptet.cz` z oficiálního katalogu šablon
(`shoptet.cz/sablony/`, tlačítko „Demo e-shop"). Účel: **výchozí výstup platformy bez
zásahu majitele**. Vzorek jsem nevybíral já — vybral ho Shoptet tím, které šablony nabízí.

**B) 6 produkčních e-shopů na vlastních doménách** — super-granule.cz, pesan-krmiva.cz,
husse.cz, bellas.cz, nutrition-shop.cz, brainmarket.cz. Účel: **jak to vypadá v praxi**,
včetně velkého e-shopu (brainmarket.cz, 6 215 URL v sitemapě) i malých.

Příslušnost k Shoptetu ověřena otiskem v HTML: `cdn.myshoptet.com` + JS objekt `Shoptet.`.
Kandidáty jsem sbíral vyhledáváním napříč obory (chovatelské potřeby, móda, doplňky stravy)
a testoval otiskem; z 20 testovaných domén jich 6 běželo na Shoptetu.

⛔ **Co vzorek NENÍ:** není to náhodný vzorek populace všech Shoptet e-shopů — veřejný
seznam takové populace neexistuje. Sondu do ID prostoru `NNNNNN.myshoptet.com` jsem zkusil
a **nefunguje**: adresy vrací 404 a po devíti požadavcích 429. Proto skupina A (výchozí
stav platformy) + skupina B (kontrola, jestli to v praxi vypadá stejně).

### Co jsem měřil

Vlastním skriptem (Python, `html.parser`), ne nástrojem třetí strany:

- **JSON-LD** — bloky `<script type="application/ld+json">`, naparsované, typy z `@type`
- **microdata** — parser se zásobníkem `itemscope`; `itemprop` se přiřazuje nejbližšímu
  obklopujícímu `itemscope`; hodnota z `content` / `href` / `src` / textu
- **robots.txt** — celý obsah, porovnání otiskem SHA-256 po normalizaci řádku `Sitemap:`
- **sitemap.xml** — HTTP status, počet `<loc>`
- **obsah bez JS** — počet slov v HTML po odstranění `<script>` a `<style>` a tagů

Produktové stránky u skupiny B jsem hledal přes sitemapu (rovnoměrný odběr každé N-té URL),
protože procházení odkazů z homepage vracelo jen kategorie.

**Prostředí:** macOS, Python 3, vlastní User-Agent `aiseo-research/1.0` s odkazem na web,
prodleva 1,2 s mezi požadavky.

---

## 3. ⛔ Výsledky

**15 e-shopů · 13 produktových stránek · 14 kategorií.**
(Demo Disco a Pop nevydaly při procházení produktovou stránku, demo Waltz kategorii.)

### 3.1 Formát strukturovaných dat

| Co | Kolik |
|---|---|
| Produktová stránka s **Product v JSON-LD** | **0 / 13** |
| Produktová stránka s **Product v microdatech** | **13 / 13** |
| Produktová stránka s JSON-LD `Organization` | 9 / 13 |
| Homepage s JSON-LD `Organization` | 11 / 15 |
| E-shop **bez jakéhokoli JSON-LD** | 4 / 15 (Waltz, Tango, Soul, super-granule.cz) |

Jediný JSON-LD, který se na Shoptetu objevuje, je blok `Organization` — a ani ten není
všude. **Veškerá produktová data jdou přes microdata.**

### 3.2 Která pole produktová microdata nesou

| `Product` | Kolik z 13 |
|---|---|
| name, url, image, category, identifier, productID, offers | **13 / 13** |
| description | 12 / 13 |
| manufacturer | 10 / 13 |
| brand | 10 / 13 |
| sku | 9 / 13 |
| aggregateRating | 5 / 13 |
| review | 4 / 13 |
| **gtin (jakýkoli)** | **3 / 13** — super-granule.cz, nutrition-shop.cz, brainmarket.cz |

| `Offer` | Kolik z 13 |
|---|---|
| price, priceCurrency, itemCondition, url, **shippingDetails** | **13 / 13** |
| availability | 12 / 13 |
| sku | 4 / 13 |
| warranty | 4 / 13 |
| **hasMerchantReturnPolicy** | **0 / 13** |
| **priceValidUntil** | **0 / 13** |

`shippingDetails` je nezvykle podrobný: vnořené `OfferShippingDetails` pro každého
dopravce zvlášť, se `shippingLabel` (Zásilkovna, PPL, Česká pošta…), `shippingRate`
→ `MonetaryAmount`, `shippingDestination` → `DefinedRegion` a `deliveryTime`
→ `ShippingDeliveryTime`.

### 3.3 Kategorie jsou pro stroje prázdné

Na **14 / 14** změřených kategoriích jsou v microdatech jen tyhle typy:
`BreadcrumbList`, `ListItem`, `WebSite`, `SearchAction`.

| Typ | Kolik ze 14 |
|---|---|
| ItemList | **0** |
| CollectionPage | **0** |
| Product (kterýkoli produkt ve výpisu) | **0** |

Kategorie tedy strojově neříká, jaké produkty obsahuje. Drobečková navigace ano, sortiment ne.

### 3.4 robots.txt je u všech patnácti stejný

Po normalizaci řádku `Sitemap:` mají **všech 15 e-shopů byte-identický robots.txt**
(jeden otisk SHA-256): 1 blok `User-agent: *`, **40 řádků `Disallow`**, žádné `Allow`.

**Zmínka o jakémkoli AI robotovi: 0.** Žádný GPTBot, ClaudeBot, PerplexityBot,
Google-Extended, CCBot, Bytespider ani Applebot-Extended. AI roboti tedy spadají pod
`User-agent: *` a mají přesně stejná pravidla jako Googlebot.

Co pravidla blokují: `/export/`, `/admin/`, `/api/`, `/action/`, filtrové parametry
(`?priceMax`, `?parameterId`, `?order`, `?pv*`, `?dd*`), `/vyhledavani/`, košík, přihlášení,
affiliate — a záložky `/*:diskuse`, `/*:dotaz`, `/*:klient-hodnoceni`, `/*:hlidat-cenu`,
`/*:moznosti-dopravy`.

⛔ **Nález k ověření:** `/*:klient-hodnoceni` (samostatná stránka hodnocení) je Disallow,
zatímco recenze v microdatech na produktové stránce jsou přístupné. To není rozpor —
jen dva různé zdroje téhož obsahu.

⛔ **Co z identity NEPLYNE:** neplyne z ní, že robots.txt nejde v administraci upravit.
Plyne z ní jen, že ani jeden z 15 e-shopů ho upravený nemá. Existující článek
`ai-seo-upgates-shoptet` tvrdí „editovatelné robots.txt" a v FAQ „v administraci obou
platforem můžete upravovat robots.txt" — **bez zdroje**. Ověřit u uživatele (dodá výstupy
z administrace) a případně opravit při refreshi na konci bloku.

### 3.5 Obsah je v HTML, JS není potřeba

Text produktové stránky po odstranění `<script>` a `<style>`: **400–3 371 slov, medián 580.**
Robot, který neumí JavaScript, obsah přečte.

---

## 4. ⛔ Limity — musí být v článku

1. **15 e-shopů není reprezentativní vzorek** desítek tisíc Shoptet e-shopů. Charakterizuje
   výchozí výstup platformy (skupina A) a ukazuje, že se v praxi chová stejně (skupina B).
2. **Jeden den, jedna verze platformy** (měřeno 8. 8. 2026). Shoptet šablony aktualizuje.
3. **Neměřil jsem placené šablony** z tržiště doplňků (Beryl, Titan, Merkur, Rubin, Opal,
   Adamin) — ty demo adresu v katalogu nemají.
4. **Neměřil jsem, co s tím dělají AI systémy.** Vím, co je v HTML. Nevím, jestli to
   ChatGPT nebo Perplexity čtou a jak to váží. ⛔ NETVRDIT, že „AI microdata nečte".
5. **Neměřil jsem administraci** — co jde a nejde nastavit. Uživatel dodá výstupy.
6. Produktová stránka je vždy jedna na e-shop. Jiný produkt může mít jiná pole
   (typicky `gtin` a `brand` závisí na tom, co má majitel vyplněné).

---

## 5. Co je ověřeno u primárního zdroje

**Google podporuje microdata.** Dokumentace Google Search („Intro to structured data
markup"): podporované formáty jsou JSON-LD, Microdata a RDFa; JSON-LD je *doporučený*
(„Google recommends using JSON-LD … as it's the easiest solution to implement and maintain
at scale"). Stránka neuvádí, že by microdata byla pro rozšířené výsledky vyloučená.

Takže: microdata nejsou chyba. Jsou to podporovaná, jen méně obvyklá data.

---

## 6. Teze článku

> Kdo na Shoptetu hledá strukturovaná data jako JSON-LD, nenajde je — a snadno usoudí,
> že tam žádná nejsou. Není to pravda. Shoptet posílá produktová data v microdatech,
> a v docela úplných: 13 ze 13 měřených produktů mělo Product, cenu, měnu, stav a dokonce
> podrobné dopravné. Chybí jinde: v datech kategorie (0 ze 14 mělo ItemList), v deklaraci
> vrácení zboží (0 ze 13) a v EAN (3 ze 13). A robots.txt je u všech patnácti e-shopů
> identický a o AI robotech nemá jediné slovo.

---

## 7. Zdroje

- **vlastní měření 8. 8. 2026** — 15 e-shopů, skript v `blogger/research/…/` (surová data
  `out-demo2.json`, `out-prod2.json`, `out-prod-products.json`, souhrn `tabulka.txt`)
- katalog šablon Shoptetu `shoptet.cz/sablony/` (zdroj vzorku A)
- Google Search Central — Intro to structured data markup (podporované formáty)
- vlastní články: `strukturovana-data-pro-ai`, `ai-seo-upgates-shoptet`,
  `produktove-stranky-pro-ai`, `kategorie-texty-pro-ai`, `ai-crawler-robots-txt`
