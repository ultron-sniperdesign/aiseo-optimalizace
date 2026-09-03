# Research — hasmerchantreturnpolicy schema

**Řádek plánu:** `hasmerchantreturnpolicy schema` · „hasMerchantReturnPolicy — proč ChatGPT preferuje e-shopy s deklarovanou vrátkou" · `tutorial` · run 2. 9. 2026
**Slug článku:** `deklarace-vraceni-zbozi`

## Hlavní zjištění: premisa řádku se u zdroje nepotvrdila

Řádek tvrdí: *„ChatGPT shopping odpovědi silně preferují produkty s explicitně deklarovanou return policy; přidání dává měřitelný visibility boost."*

**Nápověda OpenAI k nákupnímu výzkumu v ChatGPT (`help.openai.com/en/articles/12911370`, čteno v prohlížeči 2. 9. 2026, „Updated: před 5 dny") nic takového neuvádí.** Co uvádí:

| Fakt | Doslovné znění | Ověřeno |
|---|---|---|
| Z čeho ChatGPT při nákupním výzkumu čerpá | „merchant product data provided through the Agentic Commerce Protocol (ACP)", „publicly available product information", „other relevant retail sources" | 2. 9. 2026 |
| Jak vybírá | „Results are organic and based on publicly available retail sites — reading product pages directly, citing sources, and avoiding low-quality or spammy sites." | 2. 9. 2026 |
| Blokovaný přístup | „some retailers block automated access to their sites… shopping research will either skip those sources or rely on other sites" | 2. 9. 2026 |
| Vrácení zboží | zmíněno **jen jako rada uživateli**: „Read the retailer's return and warranty policies if they matter to your purchase." Jako signál výběru produktů **nefiguruje** | 2. 9. 2026 |

**Závěr pro článek:** tvrzení „ChatGPT preferuje e-shopy s deklarovanou vrátkou" nemá oporu v dokumentaci provozovatele. Titulek řádku proto nepoužívám. Důvod deklarovat vrácení je jiný a doložitelný — Google.

## Co je doložené (Google)

Zdroj: Google Search Central, *Merchant return policy (MerchantReturnPolicy) structured data*, last updated **2025-12-10**.

| Fakt | Doslovné znění / hodnota |
|---|---|
| Status | **doporučená**, ne povinná vlastnost; Google „can use this information", zobrazení negarantuje |
| Dvě úrovně zápisu | organizační (`Organization` / `OnlineStore` → `hasMerchantReturnPolicy`) a produktová (`MerchantReturnPolicy` uvnitř `Offer`) |
| Přednost zdrojů (od nejsilnějšího) | Content API for Shopping → nastavení v Merchant Center nebo Search Console → produktová strukturovaná data → organizační strukturovaná data |
| Povinné vlastnosti | `applicableCountry` + `returnPolicyCategory`, **nebo** `merchantReturnLink` |
| `returnPolicyCategory` — povolené hodnoty | `MerchantReturnFiniteReturnWindow`, `MerchantReturnNotPermitted`, `MerchantReturnUnlimitedWindow` |
| Doporučené vlastnosti | `merchantReturnDays` (povinná u FiniteReturnWindow), `returnFees`, `returnMethod`, `returnShippingFeesAmount`, `returnLabelSource`, `itemCondition`, `refundType`, `restockingFee`, `returnPolicyCountry`, sezonní `returnPolicySeasonalOverride` |

## Vlastní data — a to je hlavní hák článku

Z našeho měření v `shoptet-produktova-pole-google` (8. 8. 2026): vlastnost `hasMerchantReturnPolicy` **se neobjevila ani u jednoho z 38 měřených e-shopů**. Google ji uvádí jako doporučenou; napříč různými obchody a šablonami chyběla vždy. Je to tedy pole, které je zadarmo, dokumentované — a v měřeném vzorku ho nemá nikdo.

## Český kontext

Zákon č. 89/2012 Sb., § 1829: spotřebitel může u smlouvy uzavřené distančním způsobem odstoupit **do 14 dnů** bez udání důvodu; lhůta se u zboží počítá od převzetí. Pro e-shop to znamená, že hodnota, kterou má do dat zapsat, je u většiny obchodů daná zákonem — nevymýšlí se. ⚠️ V článku uvést jako kontext, ne jako právní radu; delší lhůty a výjimky (např. zboží na míru) neřešit do hloubky.

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `produktove-stranky-pro-ai` | zmiňuje `hasMerchantReturnPolicy` ve statistice, jednom kroku a FAQ — **s nedoloženou premisou „ChatGPT preferuje"** | tady celý návod + oprava té premisy; v refreshi zvážit sladění (zapsat do fronty) |
| `shoptet-produktova-pole-google` | měření 38 e-shopů, 0× vlastnost | přebírám jako hák, neopakuji metodiku |
| `produktovy-feed-gtin` | identifikátory a feed | jiná vlastnost, jen odkaz |
| `nakupovani-pres-ai` | proč se pokladna vrátila na weby | kontext, odkaz |
| `strukturovana-data-pro-ai` | typy a validace obecně | odkaz na validaci |

## Struktura článku

1. Krátká odpověď.
2. Co to je a proč o tom mluvit (0 z 38).
3. Co Google doopravdy říká — doporučená, dvě úrovně, přednost Merchant Center.
4. Co říká OpenAI — a co v jeho dokumentaci není.
5. Návod: minimální zápis a plná verze (JSON-LD), české hodnoty.
6. Kam to zapsat: Merchant Center vs. markup.
7. Ověření.
8. Časté chyby.

## Limity
- Netvrdit vliv na ChatGPT; dokumentace to neuvádí.
- Netvrdit „visibility boost" — Google zobrazení negarantuje.
- Právní část jen jako kontext s odkazem na zákon, žádná právní rada.
- Neslibovat rich result; merchant listings mají vlastní podmínky.
