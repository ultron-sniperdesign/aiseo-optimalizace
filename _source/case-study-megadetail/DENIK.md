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
| 2026-08-16 – 08-18 | obsah | **55 kategorií psaných od nuly** (stejná pipeline; 2. audit hlídá poměr informace:produkt). Délka Ø 2 338 zn. (měřeno na 45), 2–4 ověřené interní odkazy/kategorii. Bez FAQ a strukturovaných dat. | dtto | 2026-09-16 |
| 2026-08-17 – 08-18 | technika/obsah | **Jazyková oprava patvarů** „čistící/leštící/sušící/ředící" → spisovné „-icí": 216 záznamů kategorií (horní hranice), 722 náhrad napříč name/H1/title/description/texty; zbytkový výskyt v CZ = 0. `seo_url` beze změny. | konzistence a důvěryhodnost textů (kvalitativní signál) | 2026-09-16 |
| 2026-08-16 – 08-18 | obsah/metadata | **Metadata kategorií**: doplněno 8× chybějící H1, 8× title+description; opraveny 4 vadné hodnoty (vč. názvu značky „Cleante"→„Cleantle"); 2× H1/title rozšířen o hlavní hledaný tvar („tepovače" 9 500/měs, „rozmrazovač skel" 1 400/měs). | zachycení reálných dotazů + oprava entit značek | 2026-09-16 |
| 2026-08-18 – 08-20 | obsah | **55 kategorií od nuly** (Ø 2 212 zn.), z toho **30 lokálních landingů „značka + Praha"** + obecná „Autokosmetika Praha" (31/31 má text; ověřené provozní údaje prodejny). Metadata: 35× H1, 6× title+description. Bez FAQ/schema. | lokální AI viditelnost (Praha) + dokončení evergreen fronty | 2026-09-17 |
| 2026-08-24 | obsah/metadata | **Plošný audit H1 celé CZ** (1 434 kategorií, 403 nálezů) → **313 přepsaných `name_h1`** dle pravidla „z nadpisu jednoznačný sortiment" (180 návrhů před schválením ověřeno proti reálným produktům). `name` i `seo_url` beze změny. Pozn.: přepis mohl přepsat i H1 doplněné vlnami 16.–20. 8. — H1 zásah datovat k 24. 8. | čitelnost kategorií pro AI i SERP | 2026-09-21 |
| 2026-08-24 – 08-25 | technika/katalog | Oprava `type_of_items` (NEW-412: 94 produktů zviditelněno); **1 372 zařazení produktů** (900 unikátních) do 16 prázdných kategorií; **5 kategorií od nuly** (Ø 2 202 zn.). Diagnóza prázdných kategorií (archived_yn / type_of_items / nezařazeno). | prázdné kategorie přestávají být slepé uličky pro crawl i AI | 2026-09-22 |
| 2026-08-24 – 08-25 | obsah (produkty) | **Produktové texty** (nová vrstva, pole short/long_description): **Meguiar's komplet 256/256** (206 nových), **ADBL 145/223**, SCANGRIP 6; **14 oprav názvů produktů**; sken 4 758 karet: vlastní texty bez zmínek konkurence, 88 dodavatelských karet se zmínkami (Escape6/Ahifi/„výhradní dovozce") — 6 přepsáno hned. Bez FAQ/schema. | citovatelnost produktových karet + očista od dodavatelských textů | 2026-09-22 |
| 08/2026 (přesná data u aktivace draftů) | obsah (blog) | **13 nových blogových článků** (AUTO BLOG/MEGA aktuality; answer block 40–60 slov, FAQ, CTA, 2× GPT audit, ověřené odkazy; 12× brandový cover). Stav: 4 aktivní, 9 draftů čeká na aktivaci. Baseline blogu ~295 aktivních článků. #359 „Jak nás začal doporučovat ChatGPT" odkazuje na aiseo case study. | posílení vrstvy, která už dnes nese top 10 v gen. AI (edukativní obsah) | po aktivaci draftů +4 týdny |

**Stav kategorií k 2026-08-25:** 1 194 z 1 361 má text (řada: 1 027 → 1 047 →
1 102 → 1 191 → 1 194; jmenovatel 1 381 → 1 361). **Produktové texty k 25. 8.:**
měřeno 1 135 z 4 758 aktivních karet (+151 po měření, odvozeně ~1 286). **Blog:**
+13 článků (4 aktivní / 9 draft), baseline ~295.

> ⚠️ Známé nesrovnalosti mezi vlákny (nedopočítávat, jen evidovat): (a) 20. 8.
> +89 v čitateli při 55 vlastních textech — ~34 kategorií psal někdo jiný nebo
> šlo o zpožděný snapshot; (b) 25. 8. jmenovatel −20, doloženo 8 smazání, ~12
> bez záznamu; (c) H1 z vln 16.–20. 8. mohly být přepsány plošným auditem 24. 8.
> Od hlášení 25. 8. platí zpřísněná pravidla (role v nadpisu, vlastník metriky,
> zákaz dopočtů) — viz hlavička HLASENI.md.

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
