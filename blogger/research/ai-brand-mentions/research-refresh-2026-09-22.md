# Refresh — `ai-brand-mentions` (22. 9. 2026)

Typ runu: **refresh jednoho článku** (kadence 2 + 1 + 1). Vybráno z „Otevřené kandidáty“
v `REFRESH_QUEUE.md` (zápis 17. 9. 2026). Proč právě tenhle ze čtyř kandidátů na jeden článek:
**19 článků na něj odkazuje** (nejvíc z kandidátů), `updated` **24. 5. 2026** je nejstarší
a vada je konkrétní a doložitelná — ne stáří.

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co v tom runu stojí | Co z toho smí být v článku |
|---|---|---|
| **Dokumentace** | Google Search Central, AI features (akt. 2025-12-10, čteno 21. 9. 2026): pro Přehled od AI ani režim AI **nejsou další požadavky nad běžnou způsobilost ve Vyhledávání** a není potřeba zvláštní značení | „Google k funkcím s AI nedokumentuje žádný signál zmínek“ |
| **Recenzovaný / veřejný výzkum** | **arXiv 2609.16304**, Malthouse, Lee, Yang, Pal, Feng: *Evaluating Brand Retrieval and Ranking in Large Language Model Recommendations*, podáno **14. 9. 2026**. Design a výsledky níž | konkrétní čísla a formulace **se jmenovaným zdrojem a datem**, vždy jako souvislost, ne příčina |
| **Měření** | žádné vlastní měření tohohle tématu v tomhle runu; korpus má měření jiných věcí (Profound/5W/LLM Pulse cituje `ai-citace-reddit`, dvě nesouměřitelná procenta rozebírá `pr-pro-ai-citace`) | odkaz na vlastní článek, který zdroj jmenuje — ne převzaté číslo bez jmenovatele |
| **Rozhraní (UI)** | **prázdné** — nic v tomhle článku o rozhraní netvrdíme | nic |
| **Nelze ověřit** | (a) kolik citací v AI odpovědích míří mimo web značky — veřejná čísla nejsou souměřitelná; (b) jestli zmínka o značce **způsobí** doporučení nebo citaci; (c) jak to celé funguje v češtině a na českém trhu — studie je na anglických dotazech a globálních značkách | nic; v článku to musí být řečeno jako nedoložené |

## Studie, na které refresh stojí (arXiv 2609.16304)

**Design.** Šest komerčních modelů (GPT-5.5 a GPT-5.4 Mini, Gemini 3.1 Pro Preview a Gemini 2.5
Flash, Claude Opus 4.7 a Claude Sonnet 4.6) × pět kategorií nákupu s vyšší mírou zvažování
(akumulátorové vrtačky, plavby, krmivo pro kočky, kávovary, turistické bundy).
Dotazy jen na kategorii: **40 opakování na model a kategorii = 1 200 seznamů doporučení**.
Dotazy podle potřeby: 100 scénářů × 6 modelů × 2 opakování = **1 200 seznamů**.
Každý dotaz jako **samostatné bezstavové volání API s vypnutým webovým vyhledáváním**.
Konkurenční sady sestaveny **nezávisle na modelech** z Kantar BrandZ a Statista — schválně,
aby seznam značek nepocházel z výstupů modelu.

**Výsledky, které jsou pro článek podstatné.**

1. **Etablované značky chybí úplně.** V několika kategoriích dostaly velké, běžně známé značky
   **nulový počet doporučení** (studie je jmenuje; v článku je nejmenujeme podle Z2 — pointa je
   ta nula, ne jméno).
2. **Popularita značky prominenci nevysvětluje.** „Limited evidence that recommendation prominence
   follows conventional brand popularity“; jasná souvislost mezi salience z BrandZ a MRR vyšla
   jen u jedné kategorie z pěti (plavby).
3. **Co souvisí, když se signály posuzují společně:** nejsilnější **zájem ve vyhledávání** (Google),
   druhá **online konverzace o značce** (Brandwatch). Zmínky v médiích, výdaje na reklamu
   a zobrazení Wikipedie měly při společném posouzení **minimální predikční hodnotu**.
4. **Kontext dotazu mění, které značky se vytáhnou** — „contextualizing users' goals and constraints
   changes which brands are retrieved“.

**Limity, které autoři píšou sami.** „These relationships are observational, therefore, they should
guide testing rather than be interpreted as causal evidence.“ Dál: třístupňový postup potřebuje
ověření na větším a náhodně vybraném vzorku značek, a čerstvé session bez historie konverzace
nemusí odpovídat reálnému používání.

**Co studie NEMĚŘILA a co se z ní tedy nesmí vyvozovat:** neměřila **citace zdrojů ve webovém
vyhledávání** — webové vyhledávání bylo vypnuté. Měří, co model o značkách v kategorii vrátí
sám ze sebe. Náš článek je o zmínkách na cizích webech, takže tohle rozlišení musí být v textu
výslovně, ne v poznámce.

## Vady článku k odbavení (stav před refreshem)

| # | Vada | Kde |
|---|---|---|
| 1 | „podle veřejných analýz z let 2025–2026“ **6× bez jediného jmenovaného zdroje** | `answer`, 3× FAQ, úvod, sekce o zmínkách vs. odkazech |
| 2 | **Příčinné formulace** — „AI to může vyhodnotit jako signál důvěry“, „zmínky mohou být silným signálem“ | sekce 2 a 4, FAQ |
| 3 | Tvrzení, že **citace často míří mimo domény značek** — veřejná čísla nejsou souměřitelná (vlastní článek `pr-pro-ai-citace` to dokládá) | `answer`, úvod, FAQ |
| 4 | **Starý název auditu** („AI SEO audit“) 2× včetně CTA — porušení Z4 | závěr |
| 5 | **Ceny bez rozlišení DPH** (Pack 1 490 Kč včetně, audit 3 600 Kč bez) | CTA |
| 6 | **H2 bez závazného formátu** (žádný `hl`, žádná pointa) — 8 nadpisů | celý článek |
| 7 | **Hub bez vlastního clusteru:** odkazuje na 19 článků dovnitř, ale ven jen na 4, a nezná `co-rozhoduje-o-ai-citaci`, `pr-pro-ai-citace`, `ai-citace-reddit`, `linkedin-pro-ai-citace`, `seo-vs-ai-citace-platformy`, `organization-schema-pro-znacku` | závěr, tělo |
| 8 | „Reddit hlavně u Perplexity“ bez zdroje, přitom vlastní článek zdroje jmenuje | FAQ, sekce 3 |

## Interní odkazy (ověřené podle B2 — přečteno, ne převzato z plánu)

| Odkaz | Proč | Kontrola |
|---|---|---|
| `/blog/co-rozhoduje-o-ai-citaci/` | studie *What Gets Cited* (252 000 pokusů, 6 modelů) — jmenovaný zdroj o tom, co rozhoduje mezi dvěma zdroji | přečteno, studii jmenuje v textu |
| `/blog/pr-pro-ai-citace/` | rozebírá, proč se agregovaná procenta citací nedají porovnat (5W Trade Press AI Index 68 % vs. Evertune nad 200 mil. promptů) | přečteno, oba zdroje jmenuje |
| `/blog/ai-citace-reddit/` | pozice Redditu — v těle jmenuje Profound (~680 mil. citací), LLM Pulse, 5W Citation Source Index 2026 | přečteno; `answer` je vágnější než tělo, ale zdroje jmenované jsou |
| `/blog/organization-schema-pro-znacku/` | konzistentní identita značky ve strukturovaných datech | přečteno dřív, bez nálezu |
| `/blog/e-e-a-t-pro-ai/`, `/blog/linkedin-pro-ai-citace/`, `/blog/seo-vs-ai-citace-platformy/` | zbytek clusteru důvěryhodnosti a citací | v korpusu, tituly ověřené |

## Poznámka k nástrojům

Marketing Miner v tomhle runu nepouštěn — refresh nemění cílové klíčové slovo ani titulek,
takže hledanost nerozhoduje. Případné nové cílení by bylo samostatné rozhodnutí.
