# Research — refresh `ai-seo-nastroje`

Datum: **10. 8. 2026** · typ: refresh · původní článek: published 2026-05-24, updated 2026-07-28, 1 214 slov

Vybráno sweepem celého korpusu z 10. 8. 2026 na opakovanou vadu „chybí bezplatné oficiální reporty". Ve sweepu vyšel jako **nejsilnější zbylý výskyt**: nejvyšší hustota měřicí slovní zásoby (60) a zároveň 16 zmínek placených nástrojů.

## Nález 1 — žebřík „zdarma → trackery → enterprise" má prázdný první stupeň

Článek je postavený na třech úrovních a **úroveň „zdarma" obsahuje jen ruční projití dotazů a GA4 jako podpůrný signál**. Grep: „AI Performance" 0×, „generativní AI" 0×.

Chybí tedy oba oficiální bezplatné zdroje:

| Report | Spuštěn | Co dává, co ruční měření nedá |
|---|---|---|
| Bing **AI Performance** | 10. 2. 2026 — **tři měsíce před vydáním článku** | citace v Copilotu a AI shrnutích + **grounding queries**, tedy fráze, kterými si AI podklad hledala |
| Search Console **Generativní AI funkce** | 3. 6. 2026 — deset dní po vydání, ale **dva měsíce před posledním refreshem 28. 7.** | imprese URL v AI Overviews a v AI Mode |

**Podstatné:** u Bingu nejde o zastarání, díra tam byla od začátku. A u Search Console nejde o „nestihli jsme to" — článek byl 28. 7. refreshovaný a report už dva měsíce běžel.

Praktický dopad je tady horší než u předchozích čtyř výskytů: **tohle je článek o tom, čím měřit.** Čtenář, který si podle něj vybíral, dostal na bezplatné úrovni jen ruční práci a byl posunut k placeným trackerům dřív, než bylo nutné.

## Nález 2 — srovnávací tabulka staví dichotomii, která už neplatí

`CompareTable` má řádek „Příklady": vlevo (klasické SEO) `Search Console, Ahrefs, Marketing Miner`, vpravo (AI SEO) `Otterly, Profound, Brand Radar`.

Jenže **Search Console i Bing Webmaster Tools dnes měří obojí** — mají vlastní reporty o AI viditelnosti. Rozdělení „klasické nástroje měří pozice, AI nástroje měří zmínky" tím přestalo být čisté a tabulka čtenáře aktivně vede k tomu, aby v Search Console AI data nehledal.

## Nález 3 — FAQ o bezplatném měření odpovídá špatně

> **„Dá se AI viditelnost měřit zdarma?"** — „Ano, orientačně. Projděte ručně 15–20 zákaznických dotazů… V GA4 sledujte návštěvy z AI platforem…"

To je dnes neúplná odpověď na přímou otázku. Správně tam patří oba oficiální reporty jako první volba a ruční měření až jako doplněk toho, co reporty nepokrývají (ChatGPT a Perplexity vlastní report o vaší viditelnosti nenabízejí).

## Nález 4 — nesouhlasné datování aktuálnosti

V těle stojí „**Stav je k květnu 2026**", ale článek byl naposledy aktualizovaný **28. 7. 2026**. Čtenář tedy čte, že data jsou o dva měsíce starší, než ve skutečnosti jsou — a po tomhle refreshi by to bylo o tři.

## Co refresh udělá

1. Otevřená oprava: bezplatná úroveň neobsahovala oba oficiální reporty; u Bingu díra od začátku, u GSC přežila i červencový refresh.
2. Přepsat úroveň 1 z „zdarma a ručně" na „zdarma: oficiální reporty + ruční doplnění", s limity obou.
3. Opravit `CompareTable` — Search Console patří do obou sloupců.
4. Přepsat FAQ o bezplatném měření a `stats` „0 Kč".
5. Aktualizovat datování na 10. 8. 2026.
6. Doplnit odkazy na `gsc-ai-segmenty-mereni`, `bing-ai-performance-report` a na hub `seo-pro-ai`.

## Čeho se vyvarovat

Poučení z refreshe `seo-pro-ai` (Run105), kde mě auditor chytil při **překlopení do opačného extrému**: reporty nesmí vyznít jako kompletní řešení měření. Musí jít s nimi jejich limity:

- GSC dává **jen imprese** — žádné dotazy ani prokliky — a **neoddělí AI Mode od AI Overviews**.
- Microsoft u svého reportu sám uvádí, že jde o **vzorek** a že citace neindikují pozici ani autoritu.
- Ani jeden nepokrývá ChatGPT a Perplexity — tam ruční měření nebo placený nástroj zůstává jedinou cestou.

Právě to poslední je důvod, proč článek o placených nástrojích neztrácí smysl: **reporty nahrazují část bezplatné úrovně, ne celý žebřík.**

## Limity

- Ceny a pokrytí platforem jsem v tomhle refreshi znovu neověřoval; zůstávají s původní výhradou „ověřte v aktuálním ceníku".
- Data o obou reportech pocházejí z dřívějších ověření u primárních zdrojů (Bing Webmaster Blog 2/2026, nápověda Search Console), viz `bing-ai-performance-report` a `gsc-ai-segmenty-mereni`.

## Zdroje

- vlastní sweep korpusu 10. 8. 2026
- vlastní články `bing-ai-performance-report`, `gsc-ai-segmenty-mereni`, `seo-pro-ai` (po refreshi z 10. 8.)
