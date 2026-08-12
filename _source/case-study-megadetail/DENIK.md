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

| Datum | Fáze | Co se změnilo (konkrétně, vč. rozsahu) | Očekávaný dopad | Měřit od |
|---|---|---|---|---|
| _(zatím žádný zásah zapsán — baseline je stav před optimalizací)_ | | | | |

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

## 4) Kam se čísla propisují (při každé aktualizaci projít vše)

1. `src/i18n/proof.ts` — ProofStrip napříč webem
2. `src/content/pages/ai-viditelnost.ts` + screenshoty v `public/ai-viditelnost/`
3. case study článek (vlastní blogger; admin jen data-driven refresh)
4. `src/content/pages/sluzby.ts` — heroShot (stylizovaná GSC karta)
5. Ecomail/kampaně — hlásí se Sáře (vizuály s číslem)
