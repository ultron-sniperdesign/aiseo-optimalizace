# Research — Produktové stránky pro AI citace

**Datum:** 2026-06-11
**Cílová kategorie:** tutorial
**Slug:** `produktove-stranky-pro-ai`
**Cílové KW:** produktove stranky pro ai / produkt pro ai vyhledavani / product schema ai / eshop ai citace

## 1. Proč to řešit (kontext 2026)

- **AI Overviews rostou u nákupních dotazů.** V březnu 2026 se AI Overviews objevovaly u zhruba 14 % nákupních dotazů (nárůst z ~2,1 % v listopadu 2025). POZOR: marketingový zdroj, hedge.
- **Strukturovaná data jsou nejsilnější páka.** Podle analýz 65 % stránek citovaných Google AI Mode a 71 % citovaných ChatGPT má strukturovaná data. Bez nich AI nedokáže spolehlivě extrahovat cenu, dostupnost, hodnocení. (marketingová čísla, hedge)
- **Být citovatelná entita > být rankující URL.** U nákupních dotazů roste hodnota být zdrojem, ze kterého AI čerpá.

## 2. Klíčové strukturované datové typy

### Product + Offer + AggregateRating = základ
- **Product** — název, popis, obrázek, značka, GTIN.
- **Offer** — cena (price), měna (priceCurrency), dostupnost (availability).
- **AggregateRating** — průměrné hodnocení + počet recenzí.
- **Review** — jednotlivé recenze.

### Kritická pole pro AI (podle analýz)
AI platformy potřebují minimálně:
- **GTIN** (EAN/UPC kód produktu)
- **brand** (značka)
- **availability** (skladem/vyprodáno)
- **price** + **priceCurrency**
- **AggregateRating**

Bez těchto polí produkty podle analýz "neviditelné" pro AI nákupní dotazy.

### hasMerchantReturnPolicy — nový diferenciátor
- **ChatGPT shopping odpovědi silně preferují** produkty z e-shopů, které explicitně deklarují **return policy (vrácení zboží)** ve strukturovaných datech.
- Přidání `hasMerchantReturnPolicy` dává podle analýz **měřitelný visibility boost**.
- Toto je klíčový rozdíl 2026 — mnoho e-shopů to nemá.

## 3. Co AI potřebuje z produktové stránky

AI systémy musí umět **extrahovat, ověřit a znovupoužít** informace o produktu. Proto:

1. **Jasné atributy** — parametry produktu strukturovaně (tabulka, seznam), ne schované v marketingovém textu.
2. **Strukturovaná data** — Product + Offer + AggregateRating + Review + hasMerchantReturnPolicy.
3. **Query-aligned content** — obsah, který odpovídá na reálné dotazy ("je [produkt] vodotěsný?", "kolik váží [produkt]?").
4. **Konkrétní specifikace** — rozměry, materiál, hmotnost, kompatibilita.
5. **FAQ na produktu** — otázky, které kupci reálně kladou.
6. **Recenze** — reálné, s hodnocením, ideálně strukturované.

## 4. Praktický postup

### Krok 1: Strukturovaná data
- Product s name, description, image, brand, GTIN.
- Offer s price, priceCurrency, availability.
- AggregateRating + Review.
- hasMerchantReturnPolicy (nový, důležitý).
- Ověřit v Google Rich Results Test / validátoru schema.org.

### Krok 2: Jasné parametry
- Tabulka specifikací (rozměry, materiál, hmotnost, výkon...).
- Strukturovaně, ne v odstavci.

### Krok 3: Query-aligned obsah
- Přemýšlet, jak se lidé ptají AI na tento typ produktu.
- Odpovědět na to přímo v popisu / FAQ.

### Krok 4: FAQ na produktu
- 4–6 reálných otázek s krátkými odpověďmi.
- FAQPage strukturovaná data.

### Krok 5: Recenze
- Sbírat reálné recenze.
- Zobrazit na stránce (ne za přihlášením).
- Napojit AggregateRating.
- Integrace Heureka/Zboží.cz recenzí (CZ specific).

### Krok 6: Technika
- Rychlost (Core Web Vitals).
- Crawl hygiene — indexovatelnost, žádné blokace AI robotů.
- Čistá URL struktura.

## 5. CZ / Upgates specifika

- **Upgates** (Sniperdesign Gold partner) — nativně podporuje Product strukturovaná data, feed do Heureka/Zboží.cz/Google Shopping.
- **Heureka + Zboží.cz** — CZ srovnávače, recenze zpět na produkt.
- **GTIN/EAN** — u CZ e-shopů často chybí, přitom kritický pro AI.
- **hasMerchantReturnPolicy** — v Česku je 14denní vrácení ze zákona, deklarovat ve strukturovaných datech.
- Shoptet, WooCommerce, Upgates — všechny umí Product schema přes šablony/pluginy.

## 6. Nejčastější chyby

- **Žádná strukturovaná data** — AI nemůže spolehlivě extrahovat cenu/dostupnost/hodnocení z raw HTML.
- **Chybí GTIN/brand** — produkt neviditelný pro srovnávací AI dotazy.
- **Parametry jen v textu** — schované v marketingovém popisu, ne strukturovaně.
- **Recenze za přihlášením** — AI je nepřečte.
- **Chybí hasMerchantReturnPolicy** — ztráta ChatGPT shopping preference.
- **Nekonzistentní data** — jiná cena v schema než na stránce (Google penalizuje).
- **Prázdný nebo generický popis** — kopie od výrobce, žádná přidaná hodnota.

## 7. Co to přináší (hedged)

- Podle analýz stránky s kompletním Product schema mají vyšší CTR (uváděné +74 % při zobrazení cena+hodnocení+dostupnost — marketingové číslo, hedge).
- Rich results (hvězdičky, cena, dostupnost) v SERP zvyšují prokliky (uváděný 20-60 % lift při stejné pozici — hedge).
- Vyšší šance být citovaný v AI nákupních odpovědích.

## 8. Odlišení od seo-pro-eshopy (širší)

- Tento článek = **konkrétně produktová stránka** a strukturovaná data pro AI.
- seo-pro-eshopy-ai-era-2026 = širší e-shop strategie.
- Odlišit: tady technická + obsahová vrstva jedné produktové stránky.

## 9. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec"
- "garantujeme" → "může zvýšit", "podle analýz"
- "bot/crawler" → "vyhledávací robot" / "AI vyhledávací robot"
- "AIO" → "Google AI Overviews"
- "query-aligned" → "odpovídající reálným dotazům"
- "crawl hygiene" → "technická čistota indexace"
- "CTR" → "míra prokliku (CTR)"
- "visibility boost" → "nárůst viditelnosti"
- "GTIN" → ponechat, vysvětlit (EAN/čárový kód)
- "hasMerchantReturnPolicy" → ponechat (schema field), vysvětlit "deklarace pravidel pro vrácení zboží"

## 10. CTA pozice

- Tutorial → **primárně Pack 1 490 Kč** (kap. 02 Produkt = wireframe produktové stránky, strukturovaná data vzory).
- Sekundárně **Audit 9 990 Kč** (posoudí produktové stránky e-shopu).
- Transparentní: Sniperdesign + Upgates Gold partner — na Upgates řešíme produktová strukturovaná data + feedy rutinně.
