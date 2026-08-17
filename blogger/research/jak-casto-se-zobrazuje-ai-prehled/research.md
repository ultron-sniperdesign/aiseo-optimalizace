# Research — jak-casto-se-zobrazuje-ai-prehled (17. 8. 2026)

Řádek: `jak casto se zobrazuje ai prehled`. Priorita AI Mode / AI přehledy, kadence: nový článek.

## Hlavní nález: číslo na našem vlastním webu nemá oporu v odkazovaném zdroji

Článek `ai-search-trendy-cesko-2026` (aktualizován 4. 8. 2026) uvádí mezi „5 čísly, která musíte znát":

> **25,1 % Google SERPs** obsahuje AI Overview panel ([Semrush, 2025](https://www.semrush.com/blog/ai-overviews-study/)) — nárůst z 13,1 % v březnu 2025

**Ověřeno 17. 8. 2026 na té odkazované stránce:**

| Co studie skutečně je | Údaj |
|---|---|
| vzorek | 200 000 klíčových slov (100 tis. mobil + 100 tis. desktop, US databáze Semrush) |
| období měření | **1.–10. 9. 2024** |
| publikováno | 22. 7. 2025 |
| co analyzuje | **jen klíčová slova, která AI přehled aspoň jednou spustila** |
| podíl napříč všemi hledáními | **neuvádí** |

⛔ Ta studie tedy **neobsahuje** tvrzení „25,1 % Google SERPs obsahuje AI Overview panel". Analyzuje vlastnosti dotazů, u kterých se přehled objevil, ne prevalenci napříč vyhledáváním. Jestli Semrush to číslo zveřejnil někde jinde, nedohledal jsem — a to je přesně to, co se v článku nesmí tvrdit.

→ **Nutná oprava v `ai-search-trendy-cesko-2026`.** Nelze nechat stát citaci, u které jsem právě zjistil, že odkazovaný zdroj ji nenese.

## Jak široký je rozptyl publikovaných čísel

Z přehledů a agregátorů (2026, vše sekundární, u žádného jsem nedohledal primární report):

| Uváděná hodnota | Komu se připisuje |
|---|---|
| 25,11 % dotazů (vzorek 21,9 mil. hledání) | neuvedený agregát |
| 34,5 % průměrné pokrytí trhu, peak 47 % v lednu 2026 | tentýž agregát |
| 43 % hledání | Similarweb (URL, kterou jsem zkusil, vrátila 404) |
| 48–50 % sledovaných hledání (z ~31 % rok předtím) | přehledy 2026 |
| **13 % až 60 %** jako rozsah napříč studiemi | přiznávají samy přehledy |

## Proč se rozcházejí — důvody, které přehledy samy uvádějí

1. **Jiný vzorek dotazů.** Studie na e-shopových dotazech najde přehledů málo, studie na how-to hodně.
2. **Sledovaná klíčová slova ≠ všechna hledání.** Nástroje měří na svém vzorku.
3. **Zařízení a přihlášení.** Uvádí se, že Google zobrazoval přehledy častěji přihlášeným a jinak na mobilu. ⛔ neověřeno u Googlu.
4. **Různá období.** Meziroční skoky jsou velké, takže rok starý údaj neplatí.
5. **Metoda.** Od přímého odečtu po nákup partnerských dat.

## Co Google sám uvádí

⛔ **Nic.** Podíl dotazů s AI přehledem Google veřejně nezveřejňuje — na rozdíl od údajů o uživatelích AI Mode (viz `miliarda-uzivatelu-ai-mode`). V nápovědě jen říká, že se přehled objeví, když systémy vyhodnotí, že generativní AI pomůže (viz `kdyz-si-ai-mode-neni-jisty`).

## Co z toho NEPLYNE

- ⛔ Že jsou ta čísla vymyšlená. Můžou být korektní na svém vzorku.
- ⛔ Že platí pro Česko. Všechno je US.
- ⛔ Že jde vybrat „správné" číslo. Bez jednotné definice jmenovatele není co srovnávat.

## Kolizní kontrola

- `ai-search-trendy-cesko-2026` — nese to sporné číslo. **Opravit v tomhle runu**, ne psát proti němu.
- `zero-click-ai` — 68 % bez prokliku (SparkToro) je jiná metrika, nemíchat.
- `jak-cist-studie-o-ai-viditelnosti` — obecná metodika, odkázat.
- `propady-navstevnosti-vydavatelu` — už správně říká, že dopad závisí na tom, u kolika dotazů se přehled objeví. Navázat.
