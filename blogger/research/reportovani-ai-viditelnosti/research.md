# Research — jak reportovat AI viditelnost

**Řádek plánu:** `reportovani ai viditelnosti klientovi` (ř. 140) · **Datum:** 2026-10-03
**Kategorie:** tutorial (sloupec D) · **Tagy:** mereni, audit-nastroje · **Slug:** `reportovani-ai-viditelnosti`

> **Předcházející řádek `atribuce ai navstevy` (ř. 139) uzavřen jako SLOUČENO** do
> `ai-navstevnost-konverze` (Z10): sekce „Hlavní problém: měřitelnost AI návštěv“, „GA4 dostal
> nativní AI Assistant channel“ a „Jak měření doplnit“ pokrývají přesně to téma. Ten článek je
> od 15. 9. v REFRESH_QUEUE jako otevřený kandidát (tvrzení bez zdroje) — atribuce patří do jeho refreshe.

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum načtení |
|---|---|---|
| **Dokumentace** | Search Console: *Generative AI performance report (Search)* — jen zobrazení; AI Overviews + AI Mode v jednom; rozměry stránky / země / data / zařízení; typ vyhledávání *Web: text-based* × *Web: multimodal*; agregace podle služby v grafu; data v tichomořském čase; předběžná data; „As of August 31, 2026, we've rolled out these insights to all websites worldwide“ (a o kus níž „Not all properties have access… rolling out over time“) | support.google.com/webmasters/answer/16984139, 3. 10. 2026 |
| | Search Console: jak se počítají kliky a zobrazení u AI Mode a AI Overviews — klik na odkaz se počítá jako klik, zobrazení standardně; doplňující otázka v AI Mode = nový dotaz | support.google.com/webmasters/answer/7042828, 3. 10. 2026 |
| | Google Search Central: *AI features and your website* — weby v AI funkcích jsou v celkovém provozu Search Console, v reportu Výkon v typu „Web“ | developers.google.com/search/docs/appearance/ai-features, „Last updated 2025-12-10“, 3. 10. 2026 |
| | GA4: *Default channel group* — kanál **AI Assistant** („sources like ChatGPT, Gemini, Deepseek, Copilot, or Grok. It excludes Google's AI Overviews and AI Mode“); pravidlo: medium „ai-assistant“, kampaň „(ai-assistant)“, když referrer odpovídá seznamu AI asistentů; **Organic Search** „including Google's AI Overviews and AI Mode“; **Direct** = zdroj „(direct)“ a medium „(not set)“ / „(none)“ | support.google.com/analytics/answer/9756891, 3. 10. 2026 |
| | GA4: *What's new* — **13. 5. 2026** „New AI Assistant traffic measurement“ (příklady ChatGPT, Gemini, Claude) | support.google.com/analytics/answer/9164320, 3. 10. 2026 |
| | GA4: zveřejněný seznam zdrojů ke skupinám kanálů (PDF „GA4 Source Categories“) — kategorie jen SEARCH, SHOPPING, SOCIAL, VIDEO, **žádný AI asistent** | odkaz z 9756891, staženo 3. 10. 2026 |
| | GA4: *Scopes of traffic-source dimensions* — u relačních a uživatelských rozměrů model „paid and organic channels last click“; „Sessions initiated by direct entrance are attributed to the UTM values for that user.“ *Get started with attribution* — „Paid and organic last click: Ignores direct traffic…“, Direct jen když jiný zdroj na cestě není | support.google.com/analytics/answer/11080067 a 10596866, 3. 10. 2026 |
| | Bing: *Introducing AI Performance in Bing Webmaster Tools Public Preview* (10. 2. 2026) — Total Citations, Average Cited Pages, Grounding queries, page-level, trendy; **„sample of overall citation activity“ stojí jen u grounding queries** | blogs.bing.com/webmaster/February-2026/…, 3. 10. 2026 |
| | Bing: *New AI Visibility Insights…* (16. 6. 2026) — Intents, Topics, **Citation Share** („percentage of citations attributed to your site out of all citations… for that same grounding query“; „observational metric – not a ranking system… does not… represent traffic share“), Compare; preview globálně | blogs.bing.com/search/June-2026/…, 3. 10. 2026 |
| | SparkToro + Gumshoe (27. 1. 2026): 600 dobrovolníků, 12 promptů, ChatGPT / Claude / Google AI, 2 961 běhů; < 1 : 100, že dva běhy dají stejný seznam značek (ChatGPT, Google); pořadí ~1 : 1 000; viditelnost jako podíl odpovědí se zmínkou je použitelnější; otevřené otázky: kolik běhů, API × ruční zadání | sparktoro.com/blog/new-research-ais-are-highly-inconsistent…, 3. 10. 2026 |
| **Rozhraní (UI)** | **prázdné.** Do Search Console, GA4 ani Bing Webmaster Tools se nepřihlašuji. Článek proto netvrdí, kde co v rozhraní najdete — jen co říká nápověda. | — |
| **Měření** | **MEGA DETAIL (vlastní e-shop, čísla volně použitelná):** sada 32 stálých dotazů přes API OpenAI s vyhledáváním na webu, 4 běhy — zmínka značky 33 % (7. 8.), 28 % (12. 8.), 41 % (18. 8., první běh po vlnách textů kategorií 10.–16. 8.), 34 % (7. 9. 2026); podíl zmínek proti 4 konkurentům 65 → 69 % mezi 18. 8. a 7. 9., přičemž vlastních zmínek ubylo 13 → 11 a zmínek konkurence 7 → 5. Zdroj: `_source/case-study-megadetail/DENIK.md` § 3b a board 7. 9. 2026. Marketing Miner 3. 10. 2026: viz § 5. | DENIK § 3b, board |
| **Nelze ověřit** | (a) kolik návštěv z AI přijde bez zdroje a skončí v přímé návštěvnosti nebo u dřívějšího zdroje uživatele — oficiální údaj neexistuje; (b) úplný seznam asistentů, které GA4 rozpozná — nezveřejněn; (c) zda jsou data GSC reportu od konkrétního data — nápověda to neuvádí; (d) kolik běhů na dotaz stačí — SparkToro to vede jako otevřenou otázku; (e) zda odpovědi přes API odpovídají aplikaci — totéž; (f) jestli se data MEGA DETAIL dají přenést na jiný obor — nedá, jeden e-shop, jedna platforma. | — |

---

## 1. Teze z plánu proti zdrojům

- **Plán:** „snadno se reportují čísla, která nejdou doložit, nebo se souhrn vydává za konkrétní povrch.“
  **Potvrzeno dokumentací:** GSC slučuje AI Overviews a AI Mode do jednoho čísla; GA4 je obě řadí do
  Organic Search; Bing má vzorek u grounding queries. Vydávat souhrn za jeden povrch je tedy chyba,
  kterou nástroje samy svádějí udělat.
- **Plán:** „co uvést jako fakt, co jako indikaci a co vynechat.“ Rozpracováno do tří skupin:
  fakt (oficiální zdroj s obdobím a filtrem), vzorek (sledování dotazů s metodikou a rozpětím),
  mezera (co změřit nejde — uvést jako mezeru, ne jako číslo).
- **Pozor na vlastní korpus:** case study MEGA DETAIL nazývá zobrazení z reportu, který slučuje
  AI Overviews a AI Mode, „zobrazení v AI Overviews“ (H2, FAQ, odrážka) — přesně vada z teze.
  Na case study proto neodkazuju (B2) a předávám to adminovi (plánuje říjnový datový refresh).

---

## 2. Podmínky u tvrzení o platformách (B3)

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| GSC report AI ukazuje zobrazení | ověřená služba; dost zobrazení; web nevyloučený z AI funkcí | zobrazení = odkaz na web byl zobrazen ve funkci | žádné kliky, CTR, pozice ani dotazy; AI Overviews a AI Mode neoddělí; Search Labs se nezapočítávají | 16984139 |
| Kliky z AI funkcí jsou v reportu Výkon | typ vyhledávání „Web“ | počítají se podle stejných pravidel jako ostatní kliky | filtr, který by je oddělil, nápověda neuvádí | ai-features, 7042828 |
| GA4 kanál AI Assistant | referrer odpovídá Googlem vedenému seznamu asistentů, nebo medium „ai-assistant“ | od 13. 5. 2026 | AI Overviews a AI Mode jsou v Organic Search; návštěva bez referreru a bez parametrů = Direct | 9756891, 9164320 |
| Bing Citation Share | preview, grounding query | podíl citací webu ze všech citací u téže grounding query | není to pořadí ani podíl návštěvnosti, nezobrazuje konkurenty | blog 16. 6. 2026 |
| Vzorek dotazů | stálá sada dotazů, opakované běhy | stejná metodika mezi běhy | seznam značek se mezi běhy téměř vždy liší; pořadí ještě víc | SparkToro 27. 1. 2026 |

---

## 3. Vlastní příklad — co by bylo fikce

Report poslaný 18. 8. 2026 by mohl tvrdit: „Po textech kategorií vzrostly zmínky z 28 na 41 %.“
Další běh 7. 9. ukázal 34 %. Řada 33 · 28 · 41 · 34 % kolísá kolem ~34 %. Při 32 dotazech je jedna
zmínka 3,125 procentního bodu, takže rozdíl 28 → 41 % jsou čtyři zmínky.
Podíl zmínek 65 → 69 % vzrostl, i když našich zmínek ubylo (13 → 11) — konkurentů ubylo víc (7 → 5).
⛔ Jméno konkurenta z deníku do článku nejde (Z2).

---

## 4. Nálezy mimo téma → fronta / board

- **`bing-ai-performance-report`** (naše, akt. 29. 8. 2026): tvrdí, že vzorek je celý report
  a „celkový počet citací není počet, ale vzorek“ (FAQ, chyba 01) — Microsoft má poznámku o vzorku
  jen u grounding queries. Chybí červnové novinky (Citation Share, Intents, Topics, Compare),
  takže i věta „nedá se z něj počítat podíl vůči konkurenci“ je dnes zavádějící. → REFRESH_QUEUE.
- **`case-study-megadetail-ai-navstevnost`**: zobrazení z reportu AI Overviews + AI Mode nazvaná
  „AI Overviews“ (answer, FAQ, H2, odrážka). → board pro admina (Q3 refresh) + REFRESH_QUEUE.
- **Služba Monitoring AI viditelnosti** (`src/content/services/monitoring-ai.mdx`, admin):
  „měříte přímo efekt vlastních kroků“ × deník MEGA DETAIL „rozptyl mezi běhy je větší než
  jakýkoli zásah“. → board pro admina. CTA článku vede jen na Audit.

## 5. Klíčová slova (Marketing Miner, cs, 3. 10. 2026)

- S daty: reporting seo 60 · seo report 40 · share of voice 40 · ai visibility 20.
- Bez dat (16/20): ai viditelnost, měření ai viditelnosti, report ai viditelnosti, share of voice ai,
  ga4 ai assistant, search console ai… — nedostupná data nejsou nulová poptávka.
- Google Suggest: „seo report template“, „share of voice seo / meaning“, „ai visibility tracker / tools /
  checker“.

## 6. FAQ — odkud je otázka

1. Co má obsahovat report AI viditelnosti? — Suggest („seo report template“) + praxe
2. Dá se oddělit režim AI od Přehledu od AI? — praxe + dokumentace GSC
3. Kam v GA4 spadají návštěvy z Přehledu od AI a režimu AI? — dokumentace GA4
4. Proč nepsat pozici v ChatGPT? — SparkToro + praxe
5. Jak číst podíl zmínek (share of voice) v AI? — Suggest („share of voice seo“) + vlastní data
6. Kolikrát spustit dotaz? — SparkToro (otevřená otázka) + praxe

## 7. Interní odkazy (B2)

- ANO: `gsc-ai-segmenty-mereni` (akt. 17. 9., sedí s nápovědou včetně 31. 8.), `mereni-ai-mode-limity`
  (akt. 17. 9.), `test-viditelnosti-v-ai` (vady odbaveny 2. 9.), `share-of-model-metrika` (opatrný),
  `jak-cist-studie-o-ai-viditelnosti`.
- NE: `bing-ai-performance-report` (vada viz § 4), `case-study-megadetail-ai-navstevnost` (vada viz § 4),
  `ai-navstevnost-konverze` (otevřený kandidát od 15. 9.).
