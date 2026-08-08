# Research — produktová pole Shoptetu proti požadavkům Googlu

**Řádek plánu:** `shoptet strukturovana data` — BLOK „Shoptet a AI viditelnost" 3/5
**Datum měření:** 2026-08-08 · **Kategorie:** analysis · **Tagy:** eshopy, mereni

---

## 1. Čím se liší od dílu 1

Díl 1 měřil **13 produktových stránek** (z toho 7 na šablonových demech) a odpovídal
na otázku „v jakém formátu a která pole tam jsou". Tenhle díl měří **38 produkčních
e-shopů** a ptá se jinak: **jak naměřená pole obstojí proti tomu, co Google
dokumentuje jako povinné a doporučené.**

⛔ **Větší vzorek opravil dvě čísla z dílu 1** — viz § 4.

⛔ **Co jsem vědomě NEMĚŘIL:** produktové feedy v `/export/`. Shoptet je má, ale
robots.txt těch e-shopů cestu `/export/` zakazuje. Po dílu 2, kde je celý článek
o respektování robots.txt, by bylo pokrytecké ji ignorovat.

---

## 2. Primární zdroj — Google, merchant listing

Dokumentace Google Search, stránka pro merchant listing:

**`Product` — povinné:** `name`, `image`, `offers`
**`Product` — doporučené:** `aggregateRating`, `audience`, `brand.name`, `category`,
`color`, `description`, `gtin | gtin8 | gtin12 | gtin13 | gtin14 | isbn`,
`hasAdultConsideration`, `hasCertification`, `inProductGroupWithID`, `isVariantOf`,
`material`, `mpn`, `pattern`, `review`, `size`, `sku`, `subjectOf`

**`Offer` — povinné:** `price` nebo `priceSpecification.price`; `priceCurrency`
nebo `priceSpecification.priceCurrency`
**`Offer` — doporučené:** `availability`, `hasMerchantReturnPolicy`, `itemCondition`,
`priceValidUntil`, `shippingDetails`, `url`, `validFrom`, `validThrough`

**`OfferShippingDetails` — doporučené:** `shippingRate`, `shippingDestination`, `deliveryTime`
**`MerchantReturnPolicy` — doporučené:** `applicableCountry`, `returnPolicyCategory`,
`merchantReturnDays`, `returnMethod`, `returnFees`, `returnShippingFeesAmount`

---

## 3. Vzorek a metodika

**38 produkčních Shoptet e-shopů** — 31 z výsledků ShopRoku 2025 (viz díl 2) a 7 z dílu 1.
Šablonová dema jsem tentokrát vynechal, protože mají ukázková data a v dílu 1 zkreslila
čísla směrem dolů.

Produktovou stránku jsem u každého našel přes sitemapu (rovnoměrný odběr každé N-té
adresy, kontrola na řetězec `schema.org/Product`). **Úspěšnost 38 / 38.**

Měřeno vlastním parserem microdat (zásobník `itemscope`), plus JSON-LD bloky
a přímé hledání řetězců v HTML u polí, která microdata nemusí vystavit jako `itemprop`.

⛔ Jedna produktová adresa na e-shop. Jiný produkt může mít jiná pole.

---

## 4. ⛔ OPRAVY VLASTNÍCH ČÍSEL Z DÍLU 1

### 4.1 EAN: díl 1 uváděl 3 z 13 → na 38 produkčních e-shopech **27 z 38 (71 %)**

Díl 1 mí­chal do vzorku 7 šablonových dem s ukázkovými daty, kde EAN pochopitelně
chybí. Číslo „necelá čtvrtina" tedy popisovalo hlavně dema, ne praxi. **Na produkčních
e-shopech má EAN skoro tři čtvrtiny.**

### 4.2 Product v JSON-LD: díl 1 uváděl 0 z 13 → na 38 e-shopech **6 z 38**

Šest e-shopů `Product` v JSON-LD **má** — vedle microdat, ne místo nich. Tvrzení dílu 1
platilo pro jeho vzorek, ale jako obecná věta o platformě bylo příliš silné.
Všech šest je zároveň mezi e-shopy s upraveným robots.txt z dílu 2, takže to nejspíš
není výchozí stav platformy, ale doplněk nebo zásah do šablony. ⛔ Korelace na šesti
případech, ne důkaz.

**Obojí patří jako otevřená oprava i do článku dílu 1.**

---

## 5. ⛔ Výsledky — 38 e-shopů proti požadavkům Googlu

### 5.1 Povinné: splněno na 100 %

| Vlastnost | Kolik z 38 |
|---|---|
| `name` | 38 |
| `image` | 38 |
| `offers` | 38 |
| `price` | 38 |
| `priceCurrency` | 38 |

`priceSpecification` nemá nikdo (0 / 38), ale Google ho uvádí jako **alternativu**
k `price` — povinnost je tím splněná.

### 5.2 Doporučené u `Product`

| Vlastnost | Kolik z 38 | |
|---|---|---|
| `category` | **38** | 100 % |
| `description` | 35 | 92 % |
| `brand` | 33 | 87 % |
| `sku` | 30 | 79 % |
| `gtin*` | **27** | 71 % |
| `aggregateRating` | 18 | 47 % |
| `review` | 14 | 37 % |
| `mpn` | **0** | — |
| `color`, `size`, `material`, `pattern` | **0** | — |
| `audience`, `hasCertification`, `subjectOf`, `hasAdultConsideration` | **0** | — |
| `isVariantOf`, `inProductGroupWithID` | **0** | — |

### 5.3 Doporučené u `Offer`

| Vlastnost | Kolik z 38 | |
|---|---|---|
| `url` | **38** | 100 % |
| `shippingDetails` | **38** | 100 % |
| `itemCondition` | 37 | 97 % |
| `availability` | 36 | 95 % |
| `priceValidUntil` | 3 | 8 % |
| **`hasMerchantReturnPolicy`** | **0** | — |
| `validFrom`, `validThrough` | 0 | — |

`OfferShippingDetails` má `shippingRate` a `shippingDestination` u všech 38,
`deliveryTime` u 34.

### 5.4 Varianty

- víc než jedna nabídka na stránce: **6 / 38** (2×, 3×, 4× a jednou 12 nabídek)
- `ProductGroup`: **0 / 38**
- `isVariantOf`: **0 / 38**
- `inProductGroupWithID`: **0 / 38**

Shoptet tedy varianty vyjadřuje jako **víc objektů `Offer` pod jedním `Product`**,
ne strukturou, kterou Google pro varianty doporučuje.

### 5.5 JSON-LD `Organization`

Blok má **29 / 38** e-shopů. Co v něm je:

| Vlastnost | Kolik z 29 |
|---|---|
| `name`, `url` | 29 |
| `email` | 28 |
| `employee` | 28 |
| `sameAs` | 28 |
| `telephone` | 25 |
| **`logo`** | **2** |

`sameAs` u 28 z 29 je dobrá zpráva pro rozpoznání značky jako entity. `logo` u dvou
je naopak díra — Google ho u Organization uvádí jako doporučené.

### 5.6 Ostatní typy v microdatech

`BreadcrumbList`, `WebSite`, `SearchAction`, `Offer`, `OfferShippingDetails`,
`MonetaryAmount`, `DefinedRegion` u všech 38. `QuantitativeValue` 34,
`ShippingDeliveryTime` 34, `Brand` 33, `AggregateRating` 18, `Review` 14.
Jeden e-shop má `FAQPage`, jeden `ToyStore` v JSON-LD.

---

## 6. ⛔ Limity

1. **38 e-shopů, jedna produktová adresa na e-shop.** Jiný produkt může mít jiná pole
   (hlavně `gtin`, `brand`, `aggregateRating`).
2. Vzorek je vychýlený k větším obchodům (ShopRoku).
3. **Jeden den**, 8. 8. 2026.
4. **Neměřil jsem feedy** (robots.txt je zakazuje) ani administraci.
5. Neměřil jsem, jestli data projdou testem rozšířených výsledků — měřil jsem přítomnost
   vlastností, ne validaci.
6. ⛔ **NETVRDIT, že chybějící doporučené pole znamená horší viditelnost v AI.** Google
   je označuje jako doporučená pro merchant listings; jaký vliv mají na AI odpovědi,
   jsem neměřil.

---

## 7. Teze článku

> Povinná pole podle Googlu splňuje Shoptet u všech 38 měřených e-shopů. Doporučená
> jsou děravá a díry nejsou náhodné: co plyne z nastavení e-shopu, tam je (doprava
> 38/38, kategorie 38/38, dostupnost 36/38); co si musí vyplnit majitel, tam chybí
> u části (EAN 27/38, značka 33/38); a co platforma negeneruje vůbec, tam je nula —
> deklarace vrácení zboží 0/38, varianty přes ProductGroup 0/38, parametry jako barva
> a velikost 0/38. Při té příležitosti jsem si na větším vzorku opravil dvě vlastní
> čísla z prvního dílu.

---

## 8. Zdroje

- **vlastní měření 8. 8. 2026** — 38 e-shopů, surová data `out-fields-1.json`,
  `out-fields-2.json`, souhrn `tabulka3.txt`
- Google Search Central — Merchant listing (structured data): povinné a doporučené vlastnosti
- Google Search Central — Intro to structured data (podporované formáty)
- vlastní články: `shoptet-strukturovana-data-mereni` (díl 1),
  `shoptet-robots-txt-ai-roboti` (díl 2), `produktovy-feed-gtin`,
  `strukturovana-data-pro-ai`, `organization-schema-pro-znacku`
