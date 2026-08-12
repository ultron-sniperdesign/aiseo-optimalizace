# Refresh research — local-seo-cesko-2026 (12. 8. 2026)

Typ: **refresh** (kadence 2:1 — po co-vypne-ktery-opt-out a gptbot-bez-oai-searchbot).
Fronta `REFRESH_QUEUE.md` je celá odbavená; cíl vybraný podle **konkrétních vad**, které jsem si u tohohle článku zapsal dřív a neopravil.

## Čtyři vady k opravě

### 1. Nedoložený podíl Seznamu (FAQ + § Seznam Firmy)
V článku: „má ~14 % podíl na CZ vyhledávání. Pro lokální dotazy je podíl reálně vyšší — Seznam je u řady oborů (řemesla, gastro, lékaři) v některých regionech dominantní."

Ověřeno: jedno číslo neexistuje. Veřejné zdroje se rozcházejí — 11,5 %, 12,6 %, ~11–15 %, u placeného vyhledávání se uvádí ~25 %. Rozdíl je v metodice i v tom, co se měří (organic vs. paid, panel vs. měření prohlížeče).

**Náš vlastní článek [seznam-cz-ai-vyhledavani](/blog/seznam-cz-ai-vyhledavani/) to už uvádí správně** („~11–15 % podle veřejných dat 2024–2025"). Local SEO článek je jediné místo na webu s osamoceným „14 %" — sjednotit a odkázat.

⛔ Věta o „dominanci v některých regionech a oborech" nemá zdroj vůbec. Buď ji doložit, nebo vyhodit. → **vyhodit** a nahradit návodem, jak si to změřit ve vlastní analytice.

### 2. Recenze popsané jako ranking signál včetně nedoložených sub-signálů
V článku je seznam pěti věcí, které „Google obvykle sleduje": počet, průměr, **frekvence nových recenzí, sentiment v textu, odpovědi majitele**.

Ověřeno v nápovědě Googlu k lokálnímu hodnocení: uvádí tři faktory — **relevance, vzdálenost, významnost (prominence)**. K recenzím říká, že víc recenzí a lepší hodnocení může lokálnímu hodnocení pomoct a že významnost vychází mimo jiné z počtu recenzí. **Frekvenci, sentiment ani odpovědi majitele jako hodnoticí signál neuvádí.**

→ Rozdělit na „co je v nápovědě" a „co je oborová praxe bez opory v dokumentaci". Nemazat — jen přestat vydávat druhé za první.

Stejná vada je v FAQ: „reagovat na všechny recenze — Google vidí aktivní profil jako kvalitnější".

Bonus z téže stránky: **„There's no way to request or pay for a better local ranking on Google."** Stojí za zmínku u sekce o premium zápisech a agenturách.

### 3. „GBP Insights" — název, který v UI není
Článek ho používá **5×** (tabulka měření + strategická poznámka). Nápověda Googlu dnes popisuje sekci jako **Performance / Přehled výkonu**, se záložkou „Performance" v profilu.

Metriky podle nápovědy: Interactions, **Searches** (vyhledávací dotazy, kterými lidé firmu našli), Views, Directions, Calls, Website clicks, Messages, Bookings, Products/Menus/Offers. „Only metrics that apply to your business appear."

→ Přejmenovat, srovnat názvy metrik s dokumentací a **doplnit Searches** — bezplatný zdroj dat, který v článku chybí. (Je to potřetí, co v článku chybí bezplatný oficiální report; stejnou vadu jsem opravoval v pěti jiných článcích.)

### 4. Anonymní režim jako náhrada rank trackingu
V článku: „měsíční manuální kontrola Local pack pozic přes incognito a změnu polohy v Chrome DevTools".

Ověřeno v nápovědě Googlu k tomu, proč se výsledky liší: jmenuje **čas, polohu, jazyk, typ zařízení a personalizaci**. O anonymním režimu nepíše nic.

Podstatné je, že **poloha je samostatný faktor** — anonymní okno ji nemění. U lokálního dotazu je přitom poloha to hlavní. Takže: anonymní režim vypne přihlášení a historii, ale lokální výsledky pořád zůstávají navázané na polohu.

⛔ **Netvrdit, že „Google říká, že incognito nefunguje"** — dokumentace o něm nemluví vůbec. Formulovat jako: dokumentace jmenuje polohu jako faktor, anonymní režim polohu nemění.

## Co refresh NEDĚLÁ

- Neruší sekci o měření Whitesparku ani její limitní box — ty jsou v pořádku a mají uvedený limit (americká data, květen 2025, výskyt ≠ dopad).
- Nemění slug, published ani strukturu H2.
- Nepřegeneruje OG obrázek (titulek se nemění).

## Zdroje

- nápověda Googlu k lokálnímu hodnocení (relevance / vzdálenost / významnost, recenze, „nelze si zaplatit lepší pozici"), čteno 12. 8. 2026
- nápověda Google Business Profile — Performance a seznam metrik, čteno 12. 8. 2026
- nápověda Google Search — proč se výsledky liší (čas, poloha, jazyk, zařízení, personalizace), čteno 12. 8. 2026
- vlastní článek /blog/seznam-cz-ai-vyhledavani/ (rozsah 11–15 % podle veřejných dat 2024–2025)
