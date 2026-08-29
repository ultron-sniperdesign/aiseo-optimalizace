# Research — „Otevírací doba a aktuální údaje" (26. 8. 2026)

## Zadání

Řádek plánu `otviraci doba a aktualni data`, kategorie `tutorial`. Časově citlivé údaje
(otevírací doba, svátky, dočasné uzavření) žijí **na webu, v katalogu i v mapách zároveň**.
Když se rozejdou, systém si vybere jeden — a majitel netuší který.

## Ověřená fakta

| Fakt | Zdroj | Datum |
|---|---|---|
| Google pro místní firmy doporučuje `openingHoursSpecification` (objekt s `dayOfWeek`, `opens`, `closes`) místo prostého textového `openingHours` | dokumentace Google Search Central k LocalBusiness | ověřeno 26. 8. 2026 |
| `openingHoursSpecification` umožňuje sezonní varianty přes `validFrom` a `validThrough` | tamtéž | 26. 8. 2026 |
| Pro svátky a dočasné změny existuje `specialOpeningHoursSpecification`, které **přebíjí** běžnou otevírací dobu | schema.org (návrh přijatý do slovníku), přehledy implementace | 26. 8. 2026 |
| Zavřeno o svátku se zapisuje jako `opens: 00:00` a `closes: 00:00` s daným `validFrom`/`validThrough` | přehledy implementace (Authority Networks aj.) — ⚠️ návod, ne primární dokumentace | 26. 8. 2026 |

## Co k tomu máme ověřeného z vlastního korpusu

- `firmy-cz-pro-ai` — katalog Firmy.cz jako zdroj údajů o firmě pro AI i vyhledávání.
- `local-seo-cesko-2026` — otevírací doba je tam jen položka checklistu („zkontrolovat včetně svátků"), ne samostatné téma → **doplňujeme, nekanibalizujeme**.
- `chybna-informace-o-firme-v-ai` — co dělat, když AI o firmě lže; tenhle text je **prevence** téhož problému u časově citlivých údajů.
- `ask-maps-odpovedi-v-mapach` — odpovědi v Mapách jako samostatná plocha.
- `organization-schema-pro-znacku` — identita firmy ve strukturovaných datech.

## Struktura článku (tutorial)

1. Krátká odpověď: proč se stará doba objeví v AI odpovědi.
2. Kde všude údaj žije (web, strukturovaná data, Google Business Profile, Firmy.cz, Mapy.cz, sociální sítě, agregátory).
3. Proč si systém vybere zrovna ten špatný (rozpor mezi zdroji, stáří, autorita zdroje).
4. Postup: jeden zdroj pravdy → pořadí aktualizace → svátky předem → kontrola.
5. Strukturovaná data prakticky: `openingHoursSpecification` + `specialOpeningHoursSpecification`.
6. Jak si ověřit, co o vás systémy říkají (ruční test v AI, v mapách, v katalogu).
7. Časté chyby.

## Hranice, které v textu držet

- Netvrdit, že strukturovaná data **zaručí** správný údaj v AI odpovědi — je to signál, ne
  přepínač. Google ani ostatní kritéria výběru nezveřejnili.
- Nevymýšlet čísla o tom, jak často se údaje rozcházejí; žádné vlastní měření k tomu nemáme.
- Neslibovat rychlost promítnutí změny — lhůty nikdo nezveřejňuje.
