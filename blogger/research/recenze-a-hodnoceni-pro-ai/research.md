# Research — Recenze a hodnocení pro AI

**Slug:** `recenze-a-hodnoceni-pro-ai`
**Kategorie:** tutorial (howto → 5/5) · **Tagy:** eshopy + duveryhodnost
**Řádek plánu:** `recenze eshop ai viditelnost` (ř. 123)
**Datum:** 2026-07-18
**⚠️ DÍL 9 SÉRIE „AI SEO pro e-shopy"** → po publikaci přidat slug do `parts` v `src/i18n/series.ts`
a smazat odpovídající položku z `planned`.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE
(Google Search Central — Review snippet, fetch 2026-07-18)

### Typy způsobilé pro hvězdičky v úryvku
Book, Course, Event, LocalBusiness, Movie, **Product**, Recipe, SoftwareApp
+ CreativeWorkSeason, CreativeWorkSeries, Episode, Game, MediaObject, MusicPlaylist,
MusicRecording, Organization.

### ⚠️⚠️ NEJDŮLEŽITĚJŠÍ NÁLEZ — pravidlo o vlastních recenzích
> „If the entity that's being reviewed controls the reviews about itself, their pages…
> are ineligible for star review feature."

Týká se **LocalBusiness a Organization**. Prakticky: e-shop, který si na vlastním webu označí
hodnocení **sám sebe**, není pro hvězdičky způsobilý. Legitimní cesta jsou recenze **produktů**,
které prodává (Product), ne recenze vlastní firmy.

Tohle je pointa článku — dělá se to špatně běžně.

### Povinné vlastnosti
**Review:** `author` (Person/Organization), `itemReviewed` (platný typ; vynechat, když je vnořený),
`reviewRating` s `ratingValue`, `itemReviewed.name` nebo `name` rodiče.
**AggregateRating:** `itemReviewed`, `itemReviewed.name`/`name`, `ratingValue`,
**aspoň jedno z** `ratingCount` / `reviewCount`.

### Další pravidla (doslovné formulace)
- Viditelnost: „Make sure the review content you mark up are readily available to users
  from the marked-up page." → označit jen to, co je na stránce vidět.
- „Don't aggregate reviews or ratings from other websites." → neagregovat cizí recenze.
- „Ratings must be sourced directly from users."
- Jméno autora kratší než 100 znaků.

---

## Druhá vrstva: proč jsou recenze cenné i mimo hvězdičky

Mechanismus (jde tvrdit, je to povaha věci):
- Recenze jsou **jediný text na produktové stránce, který nenapsal prodejce**. Tím se liší od popisu
  od výrobce, který má i konkurence — viz [ai-mode-a-eshopy](/blog/ai-mode-a-eshopy/).
- Obsahují **formulace zákazníků** — tedy jazyk, kterým se lidé ptají.
- Pokrývají **dílčí otázky**, na které popis nedosáhne (jak to sedí, jak dlouho vydrží, na co pozor).

⚠️ Hedgovat: nelze tvrdit „AI shrnuje recenze" jako doložený fakt o konkrétní platformě.
Formulace: „recenze bývají zdrojem konkrétních formulací o produktu" — mechanismus, ne slib.

---

## Postup (→ howto 5 kroků)

1. **Sbírejte recenze od skutečných zákazníků** — po nákupu, s ověřením objednávky.
   „Ratings must be sourced directly from users."
2. **Rozlište, co označujete** — recenze produktu (Product) ano; hodnocení vlastní firmy
   označené jako Organization/LocalBusiness je podle Googlu pro hvězdičky nezpůsobilé.
3. **Označte jen viditelné** — co je ve strukturovaných datech, musí být na stránce k přečtení.
4. **Doplňte povinné vlastnosti** — u AggregateRating `ratingValue` + `ratingCount`/`reviewCount`
   a `itemReviewed` s názvem; u Review navíc `author`.
5. **Vytěžte text, ne jen číslo** — souhrn opakujících se témat z recenzí jako samostatná pasáž
   (viz [pasazova-optimalizace-obsahu](/blog/pasazova-optimalizace-obsahu/)).

## Ukázka JSON-LD (do článku, ```json blok)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Leštěnka na lak Ultra Gloss 500 ml",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.6,
    "reviewCount": 128
  }
}
```

## Chyby (→ MistakeGrid 4×)

1. **Označit hodnocení vlastní firmy** — podle Googlu nezpůsobilé pro hvězdičky, když si recenze
   o sobě spravuje sám hodnocený subjekt.
2. **Přetahovat recenze z cizích webů** — Google výslovně zakazuje agregovat cizí recenze.
3. **Strukturovaná data bez viditelného obsahu** — označené hodnocení, které na stránce není.
4. **Falešné nebo vynucené recenze** — mimo pravidla i mimo důvěru; navíc je to podvod na zákazníkovi.

## Hranice článku

- **Nezaručí hvězdičky ani citaci.** Splnění podmínek dělá stránku způsobilou, ne zobrazenou.
- **Neřeší právní stránku** sbírání a zveřejňování recenzí (spotřebitelské právo, ověřenost).
- **Nedává česká čísla** o vlivu recenzí — veřejně doložená nejsou.

## Brand voice

- Sniper Design = Zlatý partner Upgates; e-commerce publikum. Bez vytahování.
- Anglicismy → česky: „review snippet" → **hvězdičky v úryvku / rozšířený výsledek s hodnocením**,
  „markup" → **strukturovaná data**. Povolené: schema.org, JSON-LD, Product, AggregateRating, Review.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno)

`/blog/produktove-stranky-pro-ai/` · `/blog/ai-nakupni-agenti/` · `/blog/strukturovana-data-pro-ai/` ·
`/blog/ai-mode-a-eshopy/` · `/blog/pasazova-optimalizace-obsahu/` · `/blog/e-e-a-t-pro-ai/`

## CTA

Audit 9 990 + Pack 1 490. Bez slibu hvězdiček.
