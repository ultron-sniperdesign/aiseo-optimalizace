# Research — jak se dostat do ai odpovedi

**Řádek plánu:** `jak se dostat do ai odpovedi` → rozcestníkový hub přes všechny kanály
**Datum:** 2026-07-28 · **Kategorie:** tutorial

---

## 1. Kolizní kontrola

Ověřeno kolizní revizí 2026-07-27 (skupina D — „psát, ověřeno") i v `REFRESH_QUEUE.md`,
kde je hub veden jako **nový článek k frontě**. Na webu žádný rozcestník neexistuje
(`ls src/content/articles/ | grep -iE 'jak-se-dostat|rozcestnik|hub'` → nic).

**Cílové články ověřeny, že existují a mají použitelné krátké odpovědi:**

| Kanál | Cílový článek |
|---|---|
| Google AI Overviews | `aeo-optimalizace-v-praxi` |
| Google AI Mode | `google-ai-mode` + `ai-mode-vs-ai-overviews` |
| ChatGPT | `chatgpt-seo` |
| Perplexity | `perplexity-seo` |
| Seznam Asistent | `seznam-cz-ai-vyhledavani` + `firmy-cz-pro-ai` |

⚠️ **Zadání v plánu odkazovalo na neexistující slugy** `jak-se-zobrazit-v-ai-mode`
a `seznam-asistent-sellma`. Skutečné jsou `google-ai-mode` a `seznam-cz-ai-vyhledavani`.

---

## 2. Hlavní riziko formátu — a jak se řešilo

**První audit dal tvrdý verdikt:** *„V této podobě je to spíš interní distribuční uzel
než užitečný samostatný článek. Přidaná hodnota je malá, protože nepřináší rozhodovací
rámec ani metodické vyjasnění nejistot."*

To je u rozcestníků hlavní past: komprese pěti existujících článků nikomu nepomůže.
Článek proto dostal čtyři věci, které **v žádném z detailních návodů nejsou**:

1. **Rozlišení citace / zmínka / skryté použití** — tři různé věci, které se běžně pletou.
2. **Zdůvodnění výběru pětice** včetně toho, proč ne Copilot, Gemini a Claude.
3. **Rozhodovací tabulka „kde začít podle typu firmy"** (lokál / e-shop / B2B / obsahový web) —
   otázka, na kterou kanálové návody z principu neodpovídají.
4. **Limity ručního testu** — volatilita mezi pokusy, personalizace, geolokace,
   nutnost ukládat screenshoty a citované URL.

Plus u každého kanálu **2–3 okamžité kontrolní body přímo v textu**, ne jen odkaz dál.

Po přepracování druhý audit verdikt změnil na: *„většinově obstojí jako samostatný
rozcestník s vlastní hodnotou. Není to už jen interní uzel."*

---

## 3. Co se muselo zjemnit

| Původní tvrzení | Problém | Výsledek |
|---|---|---|
| „devět desetin práce je společných" | exaktní číslo bez opory | „většina práce" + přiznání, že to nikdo neměřil |
| „5 kanálů, které v Česku prakticky rozhodují" | neobhájený výběr | „které řeší většina firem jako první" + sekce proč zrovna těchhle pět |
| „bez toho nepomůže žádná další práce" | univerzální mechanika | doplněny meta robots, X-Robots-Tag, login wall, JS |
| „tuhle část přebírají všechny kanály" | pseudo-recept | „formát, který se dobře extrahuje, ne záruka" |
| „cesta vede přes Bing, ne Google" | sugeruje jedinou bránu | „podstatnou roli hraje" + OpenAI výběr nepopisuje |
| „Perplexity klade nadprůměrný důraz na čerstvost" | nepřiznaná spekulace | „opakovaně se ukazuje" + pozorovaná tendence, ne pravidlo |
| „podmínky, bez kterých se tam nedostanete" | absolutní | „typické předpoklady — bez nich bývá šance výrazně menší" |
| pořadí kanálů v tabulce (1. / 2. / 3.) | zní jako měření | „kde často dává smysl začít" + výslovně zkušenostní odhad |

---

## 4. Zdroje

Článek nestaví na nové rešerši — skládá se z už publikovaných a auditovaných článků
na webu. Jediné vlastní číslo je odkaz na náš test na 15 českých dotazech
(z `chatgpt-seo`), uvedený i s limity vzorku.
