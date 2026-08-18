# Deník AI SEO optimalizace MEGA DETAIL — evidence pro case study

> **Účel:** dlouhodobá evidence zásahů na megadetail.cz a měřicích snapshotů,
> aby šla budoucí čísla přiřadit ke konkrétním změnám („co jsme udělali → co se
> stalo"). Zdroj pravdy pro aktualizace case study
> (`blogger/.../case-study-megadetail-ai-navstevnost`), `/ai-viditelnost/`
> landing a `src/i18n/proof.ts`.
>
> **Workflow:** uživatel hlásí změny na megadetail.cz do chatu → admin session
> je zapíše sem (datum, fáze, popis, očekávaný dopad). Snapshoty měření
> přidáváme kvartálně (další: **říjen 2026**, Q3 data) nebo po významném zásahu
> (min. 4 týdny odstupu na projevení).
>
> **Poctivost (závazná):** vždy „zobrazení" (impressions), nikdy „návštěvy";
> atribuci formulovat opatrně — korelace se zásahem ≠ příčina (sezónnost,
> změny Google, růst AI Mode). Case study přiznává atribuční limity.

---

## 1) Baseline — výchozí stav PŘED cílenou optimalizací

Zafixováno, s tímto se budou všechna další čísla srovnávat:

| Metrika | Hodnota | Období | Zdroj |
|---|---|---|---|
| Zobrazení ve funkcích s generativní AI Googlu | **200 018** | 18. 5. – 15. 7. 2026 (2 měsíce) | GSC beta report „Funkce s generativní AI", megadetail.cz |
| Denní tempo zobrazení | ~3 400/den (křivka rostoucí, peak ~4 500) | dtto | dtto |
| Top zobrazované stránky v AI | 10/10 edukativní články (0 produktových) | dtto | dtto, záložka Stránky |
| Návštěvy z AI nástrojů | **1 867** (z toho ~90 % ChatGPT) | 12 měsíců do 07/2026 | GA4 megadetail.cz |
| Konverze návštěv z ChatGPT | **~4×** vyšší než Google organic | dtto | GA4 (míra klíčových událostí relace) |
| Tržba na návštěvu z AI | **~3×** vyšší než Google organic | dtto | GA4 |

Screenshoty baseline: `public/ai-viditelnost/gsc-report.png`, `public/ai-viditelnost/gsc-stranky.png`
(neupravené výřezy GSC). Plná metodika v case study článku.

---

## 2) Deník zásahů na megadetail.cz

Formát: jeden řádek na zásah. „Fáze" = vrstva AI SEO dle metodiky webu
(technika / obsah / strukturovaná data / důvěryhodnost / měření).

> Přesné rozsahy zásahů chodí přes `HLASENI.md` (schránka, do které píše
> vlákno provádějící úpravy — uživatel mu jednou za čas vloží připravený
> prompt). Admin hlášení přebírá sem a v HLASENI.md je označí `✅ převzato`.

| Datum | Fáze | Co se změnilo (konkrétně, vč. rozsahu) | Očekávaný dopad | Měřit od |
|---|---|---|---|---|
| 2026-08-10 – 08-12 | obsah | **Import textů do 196 kategorií** z připraveného dokumentu (267 sekcí, 17 dávek; 234/267 přesná shoda H1↔kategorie; 1× GPT audit proti sortimentu). Struktura: max 2 H2 nad produkty, zbytek pod. Bez FAQ a strukturovaných dat. | růst citovatelnosti kategorií v AI + klasické SEO | 2026-09-09 (+4 týdny) |
| 2026-08-12 | obsah | **7 značkových stránek** (SWAG, OneWax, Magic Bucket, Mentos, Maxton Design, Snappy Grip, MTM Hydro): lead 253–320 zn. nad produkty + 4× H2 pod (1 100–1 436 zn.); 40 interních odkazů ověřeno živě. 4 značky blokované (0 produktů / neaktivní). | dtto | 2026-09-09 |
| 2026-08-12 | obsah | **Auto Finesse: 24 prázdných kategorií** dostalo text + **8 částečných doplněno** (selektivní zápis, stávající texty nepřepsány). 51 z 52 sekcí dokumentu nasazeno. | dtto | 2026-09-09 |
| 2026-08-13 – 08-16 | obsah | **20 kategorií psaných od nuly** plnou pipeline (keyword research → rešerše → draft → 2× GPT audit → validace odkazů → živý render). 5× H2 (2 nad / 3 pod produkty), 346–431 slov (Ø 384). U 5 doplněn chybějící H1, u 2 i title + meta description. Bez FAQ a strukturovaných dat. | dtto; kvalitnější vzorek pro srovnání „import vs od nuly" | 2026-09-14 |

**Stav kategorií k 2026-08-16:** 1 047 z 1 381 produktových kategorií CZ má text
(mezikrok 2026-08-12: 1 027/1 382). Baseline před začátkem prací nebyl změřen —
u kategorií se srovnává od mezikroku, ne od nuly. Bez textu zbývá 334, z toho
110 evergreen (89 s produkty = lze psát hned); zbytek sezónní/akční (104),
satelit Praha (56), dárkové sady (51), technické (14). Definice „má text" viz
HLASENI.md (description_text nebo text_pod_produkty).

> Pozn. pro budoucí zásahy: žádná z vln zatím NEnasadila FAQ bloky ani
> strukturovaná data na kategoriích — to je samostatný budoucí zásah
> (až přijde, měřit odděleně od textové vlny).

<!-- ŠABLONA řádku:
| 2026-MM-DD | obsah | Doplněny answer bloky na 40 nejnavštěvovanějších článků | růst citací/zobrazení článků v AI Overviews | 2026-MM-DD (+4 týdny) |
-->

## 3) Měřicí snapshoty

Stejné metriky jako baseline, stejná metodika — přidávat NOVÝ sloupec/blok,
staré nikdy nepřepisovat (case study potřebuje časovou řadu).

| Snapshot | Období | Zobrazení v gen. AI (GSC) | Návštěvy z AI (GA4) | Konverze vs organic | Pozn. |
|---|---|---|---|---|---|
| Baseline | 18. 5. – 15. 7. 2026 | 200 018 | 1 867 / 12 měs | ~4× | před optimalizací |
| Q3 2026 | _(plán: říjen 2026)_ | | | | společně s kvartálním reportem |

### 3b) Zmínky a citace v ChatGPT (nástroj „měření AI viditelnosti", jen openai)

Sada 32 stálých promptů přes API s web searchem; volatilní mezi běhy — číst
jako vzorek, trend až z řady běhů. Runs v `Tools/měření AI viditelnosti/runs/`.

| Běh | Zmínka značky | Citace domény | První v odpovědi | SoV vs 4 konkurenti | Pozn. |
|---|---|---|---|---|---|
| 2026-08-07 | 33 % | 33 % | — | 33 % | |
| 2026-08-12 | 28 % | 25 % | 19 % | 43 % | GA4: 245 AI sessions/30 d (220 ChatGPT) |
| 2026-08-18 | 41 % | 34 % | 34 % | 65 % | GA4: 246 AI sessions/30 d; první běh PO vlnách textů kategorií (10.–16. 8.) — pohyb nahoru napříč metrikami, ale 1 běh ≠ trend, potvrdit dalšími běhy |

## 4) Kam se čísla propisují (při každé aktualizaci projít vše)

1. `src/i18n/proof.ts` — ProofStrip napříč webem
2. `src/content/pages/ai-viditelnost.ts` + screenshoty v `public/ai-viditelnost/`
3. case study článek (vlastní blogger; admin jen data-driven refresh)
4. `src/content/pages/sluzby.ts` — heroShot (stylizovaná GSC karta)
5. Ecomail/kampaně — hlásí se Sáře (vizuály s číslem)
