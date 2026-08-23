# Research — Jaký podíl má Seznam v českém vyhledávání (23. 8. 2026)

Řádek plánu: `jaky podil ma seznam v ceskem vyhledavani` (přidán 18. 8. 2026, když se při refreshi trendů ukázalo, že článek roky nesl „Google 95 %+, Seznam ~4 %").

## Kolizní kontrola

| Existující článek | Překryv | Jak se liší |
|---|---|---|
| `seznam-cz-ai-vyhledavani` | nese stat „~11–15 %" a „Google ~79–82 %" | řeší **roli Seznamu a Asistenta** a kdy do něj investovat, ne **metodiku čísel** |
| `local-seo-cesko-2026` | zmiňuje rozsah podílu | lokální viditelnost |
| `ai-search-trendy-cesko-2026` | opravená čísla StatCounteru (18. 8. 2026) | přehled trendů, jedna odrážka |
| **metodika: proč se čísla rozcházejí** | ✅ **nepokryto** | |

⛔ Článek nesmí opakovat doporučení „kdy investovat do Seznamu" — to má `seznam-cz-ai-vyhledavani`.

## Jádro: tři zdroje měří tři různé věci

### 1) StatCounter Global Stats — měří **prokliky**, ne dotazy

Z jejich vlastního FAQ (čteno 23. 8. 2026), doslovné citace:

- „we calculate our Global Stats on the basis of **more than 3 billion page views per month**"
- „Our tracking code is installed on **more than 1 million sites** globally"
- „To accurately measure usage, we have to base our stats on **page views (and not unique visitors)**"
- „**We do not impose artificial weightings** on our stats - this is a conscious and deliberate decision."
- „stats are subject to quality assurance testing and **revision for 45 days** from publication"
- podíl vyhledávačů: uživatel klikne ve výsledcích na web, a **pokud ten web má nainstalovaný jejich kód, proklik se započítá**

⛔ Z toho plynou tři věci, které se v citacích čísel ztrácejí:
1. Neměří se **dotazy**, ale **prokliky, které dorazily na weby ve vzorku**.
2. Vzorek je **samovýběr** webů, které si kód nainstalovaly, a **neváží se**.
3. **Hledání bez prokliku je neviditelné** — což je přesně to, co AI odpovědi vyrábějí. Čím víc odpovědí bez kliknutí, tím míň o hledání takové měření vypovídá.

### 2) NetMonitor / SPIR — měří **zásah webů**, ne vyhledávání

Podle MediaGuru (6. 3. 2025): Netmonitor od 6. 3. 2025 zveřejňuje data i za „velmi velké online platformy" (VLOP) a „velmi velké online vyhledávače" (VLOSE) — Google, Meta, Microsoft. Ty se měření neúčastní jako čeští provozovatelé, takže jejich návštěvnost je **„modelována na základě dat z českého softwarového PC panelu Gemius a údajů z panelů sousedních trhů"**.

Metriky: reální uživatelé, **reach**, čas strávený. Zjištění: nejvyšší zásah má Meta, druhý Google, třetí Seznam.

⛔ **Podíl na vyhledávání se z toho určit nedá** — reach webu není počet hledání.

### 3) Nástrojové a agenturní odhady

Pracují s vlastními databázemi klíčových slov nebo s vlastní klientskou základnou. Vzorek je jejich, ne trh.

## Čísla, která mám ověřená

| Zdroj | Období | Google | Seznam | Bing |
|---|---|---|---|---|
| StatCounter (odečteno 18. 8. 2026) | červenec 2026 | **81,07 %** | **14,05 %** | **3,72 %** |

Ostatní kolující hodnoty („95 %+ a 4 %", „10–12 %", „12,61 %") jsem k primárnímu měření s uvedeným obdobím a metodou **nedohledal**.

## Vlastní pozorování k citační smyčce

Při hledání podkladů k tomuhle článku mi vyhledávání vrátilo jako jeden ze zdrojů **náš vlastní článek** `seznam-cz-ai-vyhledavani` s rozsahem „11–15 %". Číslo, které jsme sami odněkud převzali, se nám vrátilo jako doklad. ⛔ V článku uvést jako varování před řetězením citací, ne jako sebemrskačství — a nepoužívat vlastní text jako zdroj.

## Co článek NESMÍ tvrdit

- ⛔ Že správné číslo je 14,05 %. Je to jeden zdroj, jedna metoda, jeden měsíc.
- ⛔ Že StatCounter měří špatně. Měří poctivě něco jiného, než co se z něj cituje.
- ⛔ Že podíl Seznamu roste nebo klesá — na trend potřebuju časovou řadu z jednoho zdroje, a tu jsem nedělal.

## Praktický výstup pro čtenáře

Tržní podíl je pro rozhodování slabší číslo než **vlastní data**: kolik návštěv a konverzí vám reálně přijde ze Seznamu a z Googlu. To si každý změří sám a je to jeho trh, ne průměr.
