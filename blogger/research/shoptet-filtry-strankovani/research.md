# Research — filtry a stránkování na Shoptetu

**Řádek plánu:** `shoptet filtry url canonical` — BLOK „Shoptet a AI viditelnost" 4/5
**Datum měření:** 2026-08-08 · **Kategorie:** analysis · **Tagy:** eshopy, technicke-zaklady

---

## 1. Otázka

Filtrované a parametrické adresy jsou u e-shopů klasický zdroj tenkých stránek. Zajímalo mě,
jak je Shoptet ošetřuje — a jestli je vůbec ošetřuje.

⛔ **Zásadní omezení, které si článek sám nastavil:** filtrované adresy **nefetchuju**.
Výchozí robots.txt je zakazuje a po dílu 2 (o čtení robots.txt) a dílu 3 (kde jsem ze stejného
důvodu vynechal feedy v `/export/`) by bylo pokrytecké je stahovat. Měřím jen to, co je povolené:
kategorii, stránkování a sitemapu.

---

## 2. ⛔ Chyba v prvním průchodu — a její oprava

První verze měřicího skriptu načítala robots.txt pod špatným klíčem (`robots` místo
`robots_text`), takže seznam zákazů vyšel prázdný a **filtrování kandidátů podle robots.txt
vůbec neproběhlo**. Skript tedy mohl při hledání kategorie sáhnout na cesty, které robots.txt
zakazuje (typicky `/kosik/`, `/login/`, `/vyhledavani/`).

Chybu jsem našel při kontrole výstupu — u všech 47 e-shopů vyšlo „0 pravidel Disallow", což
je proti dílu 2 nemožné. Opraveno a **celé měření zopakováno**; čísla v článku pocházejí až
z opraveného průchodu, kde se načetlo 40 pravidel u 36 e-shopů a 39–76 u upravených souborů.
Patří to do metodiky článku — série stojí na tom, že se robots.txt respektuje.

---

## 3. Vzorek a metodika

**47 Shoptet e-shopů** (stejný vzorek jako díl 2: 31 ze ShopRoku 2025, 7 z dílu 1, 9 dem).
Kategorie nalezena u **46 z nich**.

U každého e-shopu:

1. robots.txt (převzatý z měření dílu 2) → seznam pravidel `Disallow` ze skupiny `User-agent: *`
2. homepage → odkazy, které robots.txt **nezakazuje** → první stránka s třídou `type-category`
3. na kategorii: `rel=canonical`, `meta robots`, `rel=next`/`rel=prev`, filtrové parametry,
   počet checkboxů, odkazy s filtrovým parametrem
4. stránka 2 (jen pokud ji robots.txt daného e-shopu nezakazuje): tytéž značky + titulek
5. sitemapa: kolik adres obsahuje `?` a kolik `strana-`

---

## 4. ⛔ Výsledky

### 4.1 Kategorie, strana 1 — čistá

| Zjištění | Počet |
|---|---|
| `rel=canonical` přítomný | **46 / 46** |
| canonical míří sám na sebe | **46 / 46** |
| `meta robots` = `index,follow` | **46 / 46** |
| `rel=next` na další stranu | 31 / 46 |

### 4.2 ⛔ Stránkování — bez canonicalu, plně indexovatelné

31 ze 46 kategorií mělo druhou stranu. **Jeden e-shop ji má zakázanou vlastním pravidlem
`Disallow: /*strana-*`** (týž obchod, který si v dílu 2 upravoval robots.txt) — u něj jsem
stránku 2 nestahoval. Zbylých 30:

| Zjištění na straně 2 | Počet |
|---|---|
| **má `rel=canonical`** | **0 / 30** |
| `meta robots` = `index,follow` | **30 / 30** |
| `rel=prev` na předchozí stranu | 30 / 30 |
| titulek se liší od strany 1 (`… Strana 2`) | 30 / 30 |

Strana 1 tedy canonical má, strana 2 nemá **žádný**. Není to canonical na stranu 1 —
je to absence značky.

### 4.3 Sitemapa neobsahuje ani filtry, ani stránkování

| Zjištění | Počet |
|---|---|
| e-shopů se čitelnou sitemapou | 39 |
| sitemapa obsahuje adresu s `?` | **0 / 39** |
| sitemapa obsahuje adresu se `strana-` | **0 / 39** |

### 4.4 Filtrové adresy: zakázané v robots.txt a **neodkazované**

Výchozí robots.txt (40 pravidel) blokuje mimo jiné `?priceMax`, `?priceMin`, `?parameterId`,
`?order`, `?availabilityId`, `?manufacturerId`, `?stock`, `?pv*`, `?dd*`.

Co je v HTML kategorie:

| Parametr | Na kolika kategoriích ze 46 |
|---|---|
| `order=` | 43 |
| `priceMin` / `priceMax` | 39 |
| `stock=` | 39 |
| `manufacturerId` | 32 |
| `dd[]` | 29 |
| `pv[]` | 22 |

**A teď to podstatné:** filtry jsou **formulářové prvky, ne odkazy**.

| Zjištění | Počet |
|---|---|
| kategorií **bez jediného `<a>` odkazu s filtrovým parametrem** | **43 / 46** |
| kategorií s odkazy | 3 (1, 6 a 1 odkaz) |
| checkboxů na kategorii | min 0 · medián 15 · **max 437** |
| hodnot filtrů (`pv` + `dd`) | min 0 · medián 6 · **max 399** |

Filtrovaný prostor je tedy velký (na jedné kategorii až 437 checkboxů), ale robot na něj
nemá jak narazit — nevede tam odkaz a robots.txt ho navíc zakazuje.

---

## 5. Ověřeno u primárního zdroje

**Google, „Block search indexing with noindex":**
> „If the page is blocked by a robots.txt file or the crawler can't access the page, the
> crawler will never see the `noindex` rule, and the page can still appear in search results,
> for example if other pages link to it."

Z toho plynou dvě věci pro Shoptet:

1. **Dávat `noindex` na filtrované adresy nemá smysl** — robots.txt je zakazuje, takže by
   se to pravidlo nikdy nepřečetlo.
2. Zakázaná adresa se pořád může objevit ve výsledcích, **pokud na ni něco odkazuje**.
   Na Shoptetu na ni ve vzorku nic neodkazuje (43/46), takže je to riziko malé — ale
   platí, že kdo si filtry prolinkuje vlastní úpravou šablony, tuhle ochranu si zruší.

---

## 6. ⛔ Limity

1. **47 e-shopů, jedna kategorie na e-shop.** Jiná kategorie může mít jiné filtry i jiný
   počet stran.
2. **Jeden den**, 8. 8. 2026.
3. **Filtrované adresy jsem nefetchoval**, takže netvrdím nic o tom, co je na nich za značky —
   jen to, co o nich říká robots.txt a odkazová struktura.
4. Neměřil jsem, jestli jsou stránkované adresy skutečně v indexu Googlu; měřil jsem, co
   e-shop vydává.
5. Absence canonicalu na straně 2 **není sama o sobě chyba** — Google od roku 2019 nepoužívá
   `rel=next`/`prev` jako indexační signál a stránkované stránky bere jako samostatné.
   ⛔ NETVRDIT, že jde o vadu; jde o rozhodnutí, které za majitele udělala platforma.

---

## 7. Teze článku

> Filtry na Shoptetu jsou ošetřené dvakrát: výchozí robots.txt je zakazuje a na kategorii
> na ně stejně nevede odkaz — jsou to formulářová zaškrtávátka, ne odkazy (43 ze 46 kategorií
> nemá ani jeden filtrový odkaz). Zato stránkování ošetřené není vůbec: strana 2 nemá
> `rel=canonical` (0 ze 30), je `index,follow`, není v sitemapě a robots.txt ji nezakazuje.
> Riziko tedy neleží tam, kde ho většina návodů hledá.

---

## 8. Zdroje

- **vlastní měření 8. 8. 2026** — 47 e-shopů, surová data `out-filters-1b.json`,
  `out-filters-2b.json`, `out-filterlinks.json`, souhrny `tabulka4.txt`, `tabulka4b.txt`
- Google Search Central — Block search indexing with noindex (interakce robots.txt a noindex)
- vlastní články: díly 1–3 bloku, `ai-friendly-url-struktura`, `kategorie-texty-pro-ai`
