# Refresh research — javascript-a-ai-roboti (13. 8. 2026)

Typ: **refresh** (kadence 2:1 — po `text-bez-javascriptu-mereni` a `roboti-vyvolani-uzivatelem`).
Fronta `REFRESH_QUEUE.md` je odbavená; cíl vybraný podle konkrétní vady.

## Vada, kvůli které jsem článek otevřel

V `answer`, ve `stats`, ve FAQ i v těle stálo, že jde o **„jediné veřejné měření, které existuje"**. To je tvrzení o světě, které nemám jak doložit — smím říct jen „jediné, které jsem našel". Je to přesně ta vada, na kterou mě auditoři upozorňovali u tří jiných článků (přeskok z „nenašel jsem" na „neexistuje").

## Co jsem ověřil

Hledal jsem znovu **13. 8. 2026**, jestli existuje novější veřejné měření, které roboty a JavaScript testuje. **Nenašel jsem.** Texty z roku 2026, na které jsem narazil, se po rozkliknutí odkazují na totéž měření Vercelu a MERJ ze 17. 12. 2024 — často bez uvedení data.

Objevují se u nich i čísla, která v tom měření nedohledám (například „klientsky vykreslený obsah je neviditelný pro zhruba 70 % AI robotů"). Ta nepřebírám.

## Co refresh přidal

1. **Datum opakovaného hledání** — čtenář vidí, že stáří dat je hlídané, ne přehlédnuté.
2. **Vlastní česká data** z měření 12. 8. 2026: 80 domén, porovnatelných 66, hlavní text v serverovém HTML u všech 66. Článek do té doby neměl žádná vlastní data. ⛔ Uvedeno s brzdou: neměří chování robotů, ale co posílá server; o cizím webu negarantuje nic.
3. **Past s kódováním** do postupu ověření — windows-1250 dekódované jako UTF-8 vypadá jako chybějící text. Vlastní chyba z minulého runu.
4. **Sekce „Kdy zasahovat hned a kdy to počká"** s tabulkou priorit a minimální ukázkou HTML (prázdný `<div id="app">` vs. obsah v HTML). Z auditu 2 — článek uměl říct, jak ověřovat, ale ne co je kritické.
5. **Box „Rychlá odpověď"** hned pod úvod. Z auditu 2 — první konkrétní postup byl až ve čtvrté sekci.

## Co refresh záměrně NEDĚLÁ

- **Nedělí článek na tři**, jak navrhoval auditor 2. Přesun českého měření do boxu a zkrácení metodických detailů řeší většinu té námitky bez roztrhání textu; rozdělení je věc samostatného rozhodnutí, ne refreshe.
- Nemění slug, `published` ani strukturu hlavních H2 kromě jedné nové sekce.
- Nepřegeneruje OG obrázek (titulek se nemění).

## Zdroje

- měření Vercel + MERJ, 17. 12. 2024 (jediné veřejné, které jsem k tématu našel)
- opakované hledání 13. 8. 2026 — bez novějšího nálezu
- vlastní měření 80 domén, 12. 8. 2026 → [text-bez-javascriptu-mereni](/blog/text-bez-javascriptu-mereni/)
