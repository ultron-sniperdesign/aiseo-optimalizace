# Research — Kódování stránky a stroje, které ji čtou

Datum měření: **13. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `kodovani stranky a stroje`

Vznik: při [měření textu bez JavaScriptu](/blog/text-bez-javascriptu-mereni/) mi skript nahlásil u dvou zpravodajských webů chybějící obsah. Nechyběl — servery posílají stránku ve windows-1250 a já ji dekódoval natvrdo jako UTF-8. Chtěl jsem vědět, jak časté to je a jestli za to weby můžou.

## Metodika

Stejných **80 domén** (33 médií, 47 e-shopů). U každé homepage a z ní:

1. `charset` v hlavičce `Content-Type` — to, co dostane klient, který čte jen hlavičky.
2. `<meta charset>` v HTML — to, co dostane klient, který čte jen tělo.
3. Shodu obou deklarací.
4. Jestli tělo **skutečně jde dekódovat** podle vlastní deklarace.
5. Jestli je tělo platné UTF-8 (co uvidí nástroj, který deklarace ignoruje).
6. Doplňkově: **pozice `<meta charset>` v dokumentu** — specifikace HTML žádá deklaraci v prvních 1024 bajtech.

Kontrola smysluplnosti: **všech 80 domén má na homepage českou diakritiku**, takže špatné čtení by bylo na čem poznat.

## Výsledek

| Zjištění | Počet z 80 |
|---|---|
| deklaruje `charset` v hlavičce | **79** |
| deklaruje `<meta charset>` v HTML | **80** |
| hlavička a meta si odporují | **0** |
| tělo jde dekódovat podle vlastní deklarace | **80** |
| posílá platné UTF-8 | 75 |
| **posílá windows-1250** | **5** |
| deklarace `<meta charset>` až za 1024 B | 3 |

Rozpad podle deklarace v hlavičce: `utf-8` 74, `windows-1250` 5, bez hlavičky 1.

## Nález: chyba byla na straně čtenáře, ne webů

**Všech pět webů ve windows-1250 to deklaruje správně — a to na obou místech.** Nikdo v celém vzorku neposílá něco jiného, než co o sobě tvrdí.

Tři weby mají `<meta charset>` až za hranicí 1024 bajtů (na pozicích 1153, 2225 a 2225 B). U všech tří ale kódování deklaruje i hlavička, takže žádný čtenář nezůstane bez informace. Medián pozice napříč vzorkem je **101 B**.

Jeden web nemá `charset` v hlavičce vůbec, ale jeho `<meta charset>` je na 368. bajtu — tedy v pořádku.

**Závěr: v tomhle vzorku nemá chybu ani jeden web. Chybu měl můj nástroj.**

## Co z toho plyne pro čtenáře

- Kdo píše nebo používá nástroj, který čte stránky strojově, musí **respektovat deklaraci**. Natvrdo UTF-8 je chyba, která se projeví jen na části webů — a vypadá jako chybějící obsah.
- Kdo provozuje web: deklarovat na obou místech a mít `<meta charset>` hned v hlavičce dokumentu je levná pojistka.
- ⛔ **Netvrdit, že windows-1250 vadí konkrétnímu AI robotovi.** Neměřil jsem chování robotů. Vím jen, že špatně napsaný nástroj z toho udělá nesmysl — což jsem si předvedl sám.

## Limity

- Jeden odečet, 13. 8. 2026, **jen homepage** každé domény. Podstránky mohou mít jiné nastavení.
- Vzorek není náhodný: 33 médií ruční seznam, 47 e-shopů z jedné platformy.
- Měřím deklaraci a dekódovatelnost, ne to, co s tím udělá konkrétní robot.
- Pozici `<meta charset>` měřím jako pozici prvního výskytu značky v bajtech, ne po parsování dokumentu.

## Zdroje

- vlastní měření: `charset.py`, `charset.json`, `charset_pos.json` (80 domén)
- specifikace HTML — požadavek na deklaraci kódování v prvních 1024 bajtech
- předchozí měření, ze kterého chyba vzešla: [text-bez-javascriptu-mereni](/blog/text-bez-javascriptu-mereni/)
