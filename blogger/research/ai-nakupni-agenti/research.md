# Research — AI nákupní agenti a e-shopy

**Datum:** 2026-07-11
**Cílová kategorie:** analysis
**Slug:** `ai-nakupni-agenti`
**Cílové KW:** ai nákupní agenti / agentní nákupy / ai a e-shopy / chatgpt nakupování

## 1. Definice (krátká odpověď)

- **AI nákupní agent** = AI systém, který za uživatele hledá, porovnává a případně i objedná produkt.
- Rozdíl proti klasickému vyhledávání: uživatel nedostane seznam e-shopů, ale **výběr** — často už zúžený na pár možností.
- Pro e-shop to znamená: nejde jen o pozici, ale o to, **jestli je produkt strojově srozumitelný natolik, aby ho agent uměl zařadit do porovnání**.

## 2. Co je reálné a co je zatím hype (KRITICKÉ — hedge)

Ověřitelné k létu 2026:
- **ChatGPT má nákupní funkce** (produktové výběry, srovnání, odkazy do e-shopů).
- **Perplexity** experimentovalo s nákupem (Buy with Pro / Shopping hub).
- **Google AI Mode** má nákupní vrstvu napojenou na Merchant Center / Shopping Graph.
- **Agentic Commerce Protocol** (OpenAI + Stripe, 2025) — otevřený protokol pro nákup uvnitř asistenta.

Co NENÍ ověřené (a nesmí se tvrdit):
- že je agentní nakupování v ČR běžně dostupné a používané,
- jaký objem prodejů přes agenty prochází,
- přesná mechanika, jak konkrétní agent produkty vybírá a řadí,
- že „shopping agenti čtou data jinak než Googlebot" — to je hypotéza, ne doložený fakt.

→ Článek musí být **analýza s otevřeným koncem**, ne návod na „jak vyhrát u agentů".

## 3. Co se mění pro e-shop (logika, ne mechanika)

- **Ze seznamu na výběr** — agent obvykle nabídne pár možností. Být šestý na stránce Googlu byla šance; nebýt ve výběru je nula.
- **Strojová čitelnost roste na váze** — agent nemůže „prolistovat" e-shop jako člověk; potřebuje data, ne dojem.
- **Chybějící pole = riziko vypadnutí** — bez ceny, dostupnosti nebo identifikátoru je produkt pro porovnání hůř použitelný.
- **Značka a reference** — agent i uživatel řeší důvěryhodnost prodejce, ne jen cenu.

## 4. Datová pole, na kterých záleží (Product / Offer)

Ta, která obvykle nesou nejvíc informace pro porovnání:
- `name` — jednoznačný název (ne interní kód)
- `brand` — značka
- `gtin` (`gtin13`/EAN) nebo `mpn` — identifikátor, který spojí ten samý produkt napříč weby
- `offers` → `price`, `priceCurrency`, `availability` — cena, měna, dostupnost
- `image`, `description` — vizuál a popis
- `aggregateRating` / `review` — hodnocení (jen skutečná!)
- `shippingDetails`, `hasMerchantReturnPolicy` — doprava a vrácení (pro srovnání celkové ceny a rizika)

Pozn.: **`gtin` je pro srovnávání zásadní** — bez něj je těžší poznat, že jde o stejný produkt jako u konkurence.

## 5. Feed vs. strukturovaná data na stránce

- Dvě různé cesty: **strukturovaná data na stránce** (JSON-LD) a **produktový feed** (např. do Merchant Center).
- Nejsou to alternativy — obojí popisuje stejný produkt, jen pro jiné odběratele.
- Kritické: **musí být v souladu**. Rozdílná cena na stránce a ve feedu = problém důvěry i technický nesoulad.

## 6. Nejčastější chyby

- **Cena/dostupnost jen v HTML, ne ve strukturovaných datech** (nebo naopak).
- **Chybějící GTIN/značka** — produkt nejde spojit s konkurencí.
- **Nesoulad feed ↔ stránka** — jiná cena, jiná dostupnost.
- **Vymyšlená hodnocení** — riziko, a ne jen reputační.
- **Blokace AI robotů v robots.txt** a zároveň očekávání, že se produkt objeví v AI odpovědích. Rozpor.
- **Optimalizace na agenta místo na zákazníka** — agenti se mění, zákazník ne.

## 7. Co s tím dnes prakticky dělat (bez slibů)

1. Doplnit a zkontrolovat produktová strukturovaná data (viz produktove-stranky-pro-ai).
2. Sjednotit feed a stránku.
3. Doplnit GTIN/značku, kde chybí.
4. Nechat AI roboty projít (pokud chci být v odpovědích) — viz ai-crawler-robots-txt.
5. Sledovat, jestli návštěvnost z AI roste (gsc-ai-segmenty-mereni, ai-navstevnost-konverze).
6. Nepřestavovat e-shop kvůli něčemu, co v ČR zatím nemá objem.

## 8. CZ specifika

- Agentní nakupování je zatím převážně US/EN záležitost; v ČR **nelze počítat s objemem**.
- Upgates/Shoptet: strukturovaná data řeší šablona/doplněk — viz ai-seo-upgates-shoptet.
- České e-shopy mají často feed do Zboží/Heureka — logika „kvalitní datová vrstva" je stejná, jen odběratel jiný.
- Doporučení: dělat to, co dává smysl i bez agentů (čistá data), ne sázet na hype.

## 9. Brand voice notes

- „shopping agent" → **nákupní agent**; „agentic commerce" → **agentní nakupování** (originál jednou v závorce); „feed" → **produktový feed** (zavedené); „checkout" → **dokončení objednávky**; „hype" → **humbuk / přehnaná očekávání**; „merchant" → **prodejce**.
- Technické názvy ponechat: Product, Offer, GTIN, MPN, JSON-LD, Merchant Center, ChatGPT, Perplexity, Google AI Mode, Agentic Commerce Protocol.
- **Hedge tvrdě**: žádná čísla o objemu, žádné „agenti čtou data jinak" jako fakt, žádné sliby. Rozlišit ověřené vs. spekulace.
- Answer + první odstavec = samostatná definice.

## 10. Interní odkazy (ověřeno, existují)

- `produktove-stranky-pro-ai` (produktová data — párový)
- `strukturovana-data-pro-ai` (obecně)
- `ai-seo-upgates-shoptet` (CZ platformy)
- `seo-pro-eshopy-ai-era-2026` (e-shop kontext)
- `zero-click-ai` (výběr místo seznamu)
- `jak-ai-cituje-zdroje` (proč čitelnost)
- `kategorie-texty-pro-ai` (kategorie)

## 11. CTA pozice

- Analysis → primárně **Audit 9 990 Kč** (kontrola produktových dat a souladu feed ↔ stránka).
- Sekundárně **Pack 1 490 Kč** (struktura produktové a kategoriové stránky).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Schema.org — Product, Offer, availability, gtin, aggregateRating, shippingDetails
- OpenAI + Stripe — Agentic Commerce Protocol (2025)
- Google — AI Mode / Shopping Graph, Merchant Center
- Perplexity — nákupní funkce (Buy with Pro)
