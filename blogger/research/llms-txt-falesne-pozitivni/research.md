# Research — 52 webů „má" llms.txt, obsah mají tři

Datum měření: **11. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `http 200 neni doklad existence souboru`

Téma vzniklo z **vlastní chyby v předchozím runu**: při hledání dokumentace ByteDance vrátila adresa `bytedance.com/en/bots.json` **HTTP 200**. Kdybych se spolehl na stavový kód, napsal bych, že soubor existuje. V hlavičkách ale bylo `Content-Type: text/html` — web vrací 200 na libovolnou cestu.

Otázka do měření: **jak často to platí a co to dělá s tvrzeními typu „web má llms.txt"?**

## Metodika

80 českých domén — **33 zpravodajských a oborových webů** a **47 e-shopů** z dřívějších měření. Každé doméně jsem poslal dva požadavky:

1. `/aiseo-neexistuje-<hash>.txt` — cesta odvozená z názvu domény, která nemůže existovat. Očekává se **404**.
2. `/llms.txt` — soubor, o kterém se mluví v souvislosti s AI.

U obou jsem zaznamenal **stavový kód, `Content-Type` a délku těla** a u těla ověřil, jestli nezačíná jako HTML. Staženo 80 z 80.

## Nález 1 — pět webů vrací 200 na soubor, který neexistuje

| Odpověď na neexistující soubor | Počet z 80 |
|---|---|
| 404 (správně) | 74 |
| **200** | **5** |
| 406 | 1 |

Všech pět odpovědí s kódem 200 mělo `Content-Type: text/html` a tělo začínalo jako HTML stránka. Je to tedy klasický **soft 404**: server nenašel nic, ale odpoví, jako by našel.

Všech pět je ze skupiny médií; mezi 47 e-shopy se to nestalo ani jednou.

## Nález 2 — trychtýř 52 → 47 → 3

Když se na `/llms.txt` zeptáte a počítáte jen stavové kódy:

| Kritérium | Počet z 80 |
|---|---|
| `/llms.txt` vrací **200** | **52** |
| …a není to HTML (odečteno 5 soft 404) | 47 |
| …a soubor **není prázdný** | **3** |

**44 z těch 47 souborů má nulovou délku.** Jsou to `text/plain`, vrací 200, projdou kontrolou typu obsahu — a jsou prázdné.

## Nález 3 — každá skupina selhává jinak

Tohle je jádro článku:

| Skupina | N | soft 404 | `/llms.txt` = 200 | z toho HTML | z toho prázdné | **s obsahem** |
|---|---|---|---|---|---|---|
| Média | 33 | 5 | 5 | 5 | 0 | **0** |
| E-shopy (jedna platforma) | 47 | 0 | 47 | 0 | 44 | **3** |
| **Celkem** | **80** | **5** | **52** | **5** | **44** | **3** |

- **U médií** je všech pět „nálezů" jen soft 404. **Ani jedno médium z 33 llms.txt reálně nemá.**
- **U e-shopů** soubor servíruje platforma všem — jenže u 44 ze 47 je prázdný. Obsah do něj doplnili tři provozovatelé.

Ta druhá porucha je zajímavější, protože **poráží i tu zjevnou opravu**: kontrola `Content-Type` prázdný soubor odhalí. Musíte se dívat na délku, případně na obsah.

Odpovídá to i dřívějšímu [měření robots.txt na Shoptetu](/blog/shoptet-robots-txt-ai-roboti/), kde `/llms.txt` vrátilo 200 u 47 ze 47 e-shopů a 44 z nich bylo prázdných. Jde tedy o **výchozí chování platformy**, ne o 44 nezávislých rozhodnutí — a v článku to musí být takhle formulované.

## Nález 4 — kontext: Google říká, že tyhle soubory ignoruje

V AI optimization guide (`developers.google.com/search/docs/fundamentals/ai-optimization-guide`, na stránce **naposledy aktualizováno 10. 7. 2026**) Google uvádí:

> „You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities), as Google Search itself doesn't use them."

> „Doing so will neither harm nor help your site's visibility or rankings in Google Search, as Google Search ignores them."

⚠️ Přehledy třetích stran uvádějí u téhle aktualizace datum 15. 6. 2026. **Beru datum ze stránky samotné** (10. 7. 2026).

Pro článek to slouží jako kontext, ne jako pointa: pointa je o měření, ne o tom, jestli llms.txt dělat.

## Co článek udělá

1. Ukáže trychtýř 52 → 47 → 3 a obě příčiny odděleně.
2. Dá postup, jak testovat existenci souboru správně (kontrolní cesta, `Content-Type`, délka, obsah).
3. Rozšíří to za llms.txt: totéž platí pro ověřovací soubory, `ads.txt`, sitemapy i klíč IndexNow.
4. Přizná můj vlastní near-miss jako důvod, proč jsem to měřil.

## Limity

- Jeden odečet, 11. 8. 2026.
- Vzorky nejsou náhodné: 33 médií je ruční seznam, 47 e-shopů je z jedné platformy — proto se výsledky uvádějí odděleně a **prázdný soubor se přisuzuje platformě, ne trhu**.
- Četl jsem jen první 4 kB těla; u tří souborů s obsahem to stačí na rozlišení „prázdný / neprázdný", ne na posouzení kvality obsahu.
- Netestoval jsem, jestli kterýkoli AI systém tyhle soubory čte. To článek netvrdí.
- Jednotlivé weby se nejmenují.

## Zdroje

- vlastní měření: `soft404_results.json` (80 domén × 2 požadavky), `soft404_summary.json`
- `developers.google.com/search/docs/fundamentals/ai-optimization-guide` (čteno 11. 8. 2026)
- vlastní dřívější měření Shoptetu (`shoptet-robots-txt-ai-roboti`)
