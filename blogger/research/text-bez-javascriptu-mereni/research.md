# Research — Kolik českých webů nedá robotovi text bez JavaScriptu

Datum měření: **12. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `necitelne weby pro gptbota mereni`

Vznik: trend research 12. 8. 2026 narazil na tvrzení, které přehledy opisují — že velká část nejnavštěvovanějších webů je pro GPTBota nečitelná a část je „temná" pro všechny AI roboty. Primární zdroj s popsanou metodikou jsem nedohledal. Místo přebírání čísla jsem si stejnou otázku změřil na českém vzorku.

## Otázka

Je hlavní text stránky v HTML, které vrátí server, nebo ho dodělá až prohlížeč? Roboti ChatGPT, Claude a Perplexity podle [dřívějšího článku](/blog/javascript-a-ai-roboti/) JavaScript nespouštějí — co jim tedy z českých webů zbude?

## Metodika (finální verze)

Stejných **80 domén** jako u [měření opt-outů](/blog/gptbot-bez-oai-searchbot/) — 33 médií a 47 e-shopů.

1. Adresa stránky **ze sitemapy webu** (robots.txt → `Sitemap:`, jinak `/sitemap.xml`), ne z odkazů na homepage. Sitemapa je seznam, který web sám nabízí vyhledávačům — opakovatelnější a férovější výběr. Beru adresu ze středu seznamu, ne první ani poslední.
2. Tu stránku stáhnu dvakrát: **prostým HTTP klientem** (žádný JavaScript) a **vykreslenou v Chrome** (`--dump-dom`).
3. Z vykresleného DOMu vezmu **tři nejdelší odstavce, které vypadají jako obsah**, a hledám jejich začátek v syrovém HTML.

## Výsledek

| Krok | Počet |
|---|---|
| změřených domén | 80 |
| vyřazeno z měřicích důvodů | 14 |
| — bez použitelné sitemapy | 4 |
| — prohlížeč dostal míň textu než HTTP klient (zeď) | 4 |
| — přesměrování jinam než na měřenou adresu | 2 |
| — bez odstavců ≥120 znaků | 2 |
| — chyba vykreslení / stránka nedostupná | 2 |
| **porovnatelných** | **66** |
| hlavní text nalezen v serverovém HTML | **66** |
| **prokazatelně chybějící hlavní text** | **0** |

## ⚠️ Hlavní nález není to číslo — je to cesta k němu

Automatické měření hlásilo chybějící obsah **třikrát a pokaždé špatně**:

| Kolo | Metoda | Hlásilo „chybí" | Po ruční kontrole |
|---|---|---|---|
| 1 | poměr počtu slov raw / DOM | poměry i **přes 100 %** | metrika nedávala smysl |
| 2 | nejdelší odstavec z DOMu | **15 z 80** | 0 pravých |
| 3 | + filtr boilerplate, kontrola přesměrování a objemu | **8 z 80** | 0 pravých |

Čtyři třídy falešných nálezů:

1. **Lišta se souhlasem.** Nejdelší odstavec na stránce byl text o zpracování údajů, který přidá až nástroj na souhlas. V syrovém HTML pochopitelně není. U dvou webů měl vykreslený DOM přes 10 000 slov proti 550 v syrovém HTML — celý ten rozdíl byla lišta.
2. **Hlášky místo obsahu.** „Váš CSRF token pravděpodobně vypršel" (čtyři weby na jedné e-shopové platformě) a text ze stránky 404.
3. **Kód v odstavci.** Jeden web měl v `<p>` kus JavaScriptu — 4 391 znaků, s přehledem nejdelší „odstavec" na stránce.
4. **Odstavec, který není hlavní text.** Marketingový blurb načtený JavaScriptem, zatímco vlastní obsah stránky v serverovém HTML byl.

## ⛔ Vlastní chyba: kódování

Dva weby (zpravodajské) vycházely jako „text chybí". Nechyběl. Servery posílají **windows-1250** a můj skript dekódoval natvrdo jako UTF-8 — text se rozsypal a porovnání selhalo z čistě kódovacích důvodů.

Po opravě (Content-Type → `<meta charset>` → utf-8 → cp1250) oba případy přeskočily na „text v HTML je".

**Falešně pozitivní nález z vlastní chyby vypadá úplně stejně jako nález pravý.** Kdybych se na ty případy nepodíval ručně, publikoval bych „u dvou velkých českých médií chybí text v serverovém HTML" — a byla by to lež.

## Co z toho plyne pro čtení cizích čísel

Když někdo publikuje „X % webů je pro AI nečitelných", jsou to tři otázky:

- Jak poznali, že obsah chybí — a kolik z toho byly lišty se souhlasem a chybové hlášky?
- Kolik nálezů ověřili ručně?
- Co se stalo s weby, kde měření samo selhalo — vypadly, nebo se počítají jako „nečitelné"?

U mého měření je odpověď: 14 z 80 vypadlo a **nepočítám je jako nic**. Kdybych je počítal jako „nečitelné", měl bych titulek „17,5 % českých webů je pro AI nečitelných" — a bylo by to nepoctivé.

## Limity

- Jeden odečet, 12. 8. 2026, **jedna stránka na doménu**. Neříká nic o zbytku webu.
- Vzorky nejsou náhodné: 33 médií ruční seznam, 47 e-shopů z jedné platformy.
- Chrome není robot OpenAI. Měřím, **co je v serverovém HTML**, ne co s tím který robot udělá.
- Vykreslení má rozpočet 9 sekund; co se načte později, nevidím.
- Test je „je začátek odstavce v syrovém HTML" — částečně načtený obsah nepozná.
- ⛔ **Nejmenovat konkrétní měřené weby.** Popisovat třídy případů, ne domény.

## Zdroje

- vlastní měření: `js_body.py`, `js_body.json` (80 domén)
- [javascript-a-ai-roboti](/blog/javascript-a-ai-roboti/) — které roboty JavaScript spouštějí
- [jak-cist-studie-o-ai-viditelnosti](/blog/jak-cist-studie-o-ai-viditelnosti/) — metodika čtení cizích čísel
