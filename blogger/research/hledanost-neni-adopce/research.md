# Research — hledanost termínu není adopce

**Řádek plánu:** `hledanost terminu vs adopce` (ř. 141) · **Datum:** 2026-10-10
**Kategorie:** analysis (sloupec D) · **Tagy:** mereni, strategie · **Slug:** `hledanost-neni-adopce`

> **Teze z plánu (sloupec C, návěští „Data:“):** „růst hledanosti nového pojmu ukazuje zájem o slovo,
> ne rozšíření technologie mezi uživateli; obojí se v článcích i nabídkách běžně zaměňuje.“
> **Ověřeno:** první část ano — dokumentace (Trends, Plánovač) i vlastní data ukazují, že hledanost
> měří něco jiného než používání. **Druhou část („běžně se zaměňuje“) nedokládám** — měřený vzorek
> cizích článků a nabídek nemám a jmenovat je nesmím (Z2). Článek proto netvrdí, jak častá ta záměna
> je; jako příklad uvádí jen náš vlastní obsahový plán (ř. 123 „ai mode … +6 302 % YoY“ jako „Data:“).

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum načtení |
|---|---|---|
| **Dokumentace** | Google Trends Help *FAQ about Google Trends data*: každý bod „divided by the total searches of the geography and time range“, škálováno 0–100; jen vzorek hledání; málo hledané výrazy „appear as "0"“; opakovaná hledání téhož člověka v krátké době vyřazena; nepočítají se interní hledání AI Mode a AI Overviews; přidaný statistický šum; „not a scientific poll“, výkyv neznamená, že je téma „popular“ | support.google.com/trends/answer/4365533?hl=en, 10. 10. 2026 (CZ verze překládá „largely unfiltered“ chybně jako „nefiltrovaný“ — necitovat) |
| | Google Trends API (Search Central blog 24. 7. 2025): na webu se výsledky škálují 0–100 „every time you request data“ → hodnoty ze dvou dotazů nejsou srovnatelné | developers.google.com/search/blog/2025/07/trends-api, 10. 10. 2026 |
| | Google Ads Help *About Keyword Planner forecasts*: „Avg. monthly searches“ = průměr za zvolené období (výchozí 12 měsíců) pro „a keyword and its close variants“; „Your search volume statistics are rounded.“ | support.google.com/google-ads/answer/3022575 (en i cs), 10. 10. 2026 |
| | Google Ads API: avg_monthly_searches „Approximate number of monthly searches…“; API slučuje blízké varianty („car“ + „cars“ = jeden výsledek); „Google updates metrics such as search volume monthly based on the preceding month's search data.“ | developers.google.com/google-ads/api/reference/rpc/v25/KeywordPlanHistoricalMetrics (2026-07-22) a …/docs/keyword-planning/generate-historical-metrics (2026-10-06), 10. 10. 2026 |
| | **Nenalezeno v primární dokumentaci:** rozpětí místo čísel u účtů s malou útratou (jen SEJ 2016, sekundární) → v článku není | — |
| | Search Console Help *Generative AI performance report (Search)*: „includes impressions“ pro AI Overviews a AI Mode (jeden report, jen zobrazení); „As of August 31, 2026, we’ve rolled out these insights to all websites worldwide.“ | support.google.com/webmasters/answer/16984139, 10. 10. 2026 (poprvé 3. 10. 2026) |
| | GA4 Help *Default channel group*: AI Assistant = „sources like ChatGPT, Gemini, Deepseek, Copilot, or Grok“, vylučuje „Google's AI Overviews and AI Mode“; Organic Search „including Google's AI Overviews and AI Mode“. Kanál ohlášen 13. 5. 2026 (*What's new*, 9164320, ověřeno 3. 10. 2026) | support.google.com/analytics/answer/9756891, 10. 10. 2026 |
| | Search Console Help *What are impressions, position, and clicks?*: zobrazení = „How often someone saw a link to your site on Google“; počítá se, i když položka není odscrollovaná | support.google.com/webmasters/answer/7042828, 10. 10. 2026 |
| | Google (blog), 19. 5. 2026: „Now, it has surpassed a billion monthly active users globally“ (AI Mode); „AI Mode queries have more than doubled every quarter since launch.“ Definice MAU ani rozpad po zemích na stránce **nejsou** | blog.google/products-and-platforms/products/search/ai-mode-us-insights/, 10. 10. 2026 |
| | Alphabet, Q2 2025 CEO remarks (23. 7. 2025): „AI Overviews now has over 2 billion monthly users across more than 200 countries and territories and 40 languages.“ Definice „monthly users“ **není** | blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2025/, 10. 10. 2026 |
| | SparkToro (R. Fishkin, 9. 6. 2026 SELČ; byline 8. 6. US): „Only 0.34% of searches made their way to AI Mode from January–April 2026.“ **Data Similarweb** (ne Datos), **jen USA**, leden–duben 2026, počítače + mobilní prohlížeče (váženo ~2/3 mobil), **bez aplikace Google**; jmenovatel = vyhledávání na Googlu v panelu. Wayback 10. 6. 2026 má stejnou větu. Licence: odkaz na článek + uvést Similarweb | sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/, 10. 10. 2026 |
| | ČSÚ, VŠIT 2025 (tisková zpráva 402001-25 a publikace 062004-25, obě 11. 11. 2025): 31,5 % osob 16+ (tisková zpráva zaokrouhluje na 32 %) použilo za poslední 3 měsíce nástroje AI „určené pro vytváření textů, obrázků nebo kódu“; metodika: „Zahrnuje se používání těchto nástrojů i pro vyhledávání informací.“ 16–24 let 78,5 %. Šetření 2. čtvrtletí 2025, 5 788 osob. Výsledky 2026 slibuje ČSÚ „ke konci listopadu“ (TZ 402003-26) | csu.gov.cz/produkty/umelou-inteligenci-pouziva-tretina-populace; …/vyuzivani-informacnich-a-komunikacnich-technologii-v-domacnostech-a-mezi-osobami-gnzqheaxdo (tab. 5.8), 10. 10. 2026 |
| | Eurostat (zpráva 16. 12. 2025; dataset isoc_ai_iaiu, aktualizace 5. 6. 2026): 16–74 let, poslední 3 měsíce — **CZ 35,35 %, EU27 32,66 %** (zpráva: 32,7 %) | ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251216-3; API isoc_ai_iaiu, 10. 10. 2026 |
| | CVVM SOÚ AV ČR (TZ ai260622, 22. 6. 2026): „Používáte Vy osobně nějaký nástroj využívající umělou inteligenci?“ — aspoň někdy 72 %, aspoň jednou týdně 51 %, denně 21 %. Panel PNS, sběr 27. 3.–8. 4. 2026, N = 1 031, od 15 let, náhodný výběr, vážené | cvvm.soc.cas.cz/images/articles/files/6243/ai260622.pdf, 10. 10. 2026 |
| | Reuters Institute DNR 2026, Česko (16. 6. 2026): AI chatboty jako zdroj zpráv za poslední týden 9 % (+3 b.). YouGov online panel, N = 2 031, leden–únor 2026; reprezentuje online populaci | reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/czech-republic, 10. 10. 2026 |
| **Rozhraní (UI)** | **prázdné.** Do Google Ads, Trends ani Search Console se nepřihlašuji. Našeptávač Googlu níž je výstup veřejného endpointu, ne pohled do rozhraní. | — |
| **Měření** | **Marketing Miner (10. 10. 2026, cs):** 23 výrazů kolem AI, měsíční hodnoty září 2025 – srpen 2026 (pořadí měsíců ověřeno skokem „režim ai“ ze 100 na 3 300 v říjnu 2025, kdy funkce přišla do češtiny). Podrobnosti níž. | výstup v `~/.claude/skills/marketing-miner-api` (mimo repo), tabulka níž |
| | **Google Suggest (10. 10. 2026, hl=cs, gl=cz)** přes `research_enrich.py --enrich suggest`; robots.txt hostitele `suggestqueries.google.com` vrací 404 = bez omezení | tabulka níž |
| | **GA4 MEGA DETAIL (property 383481674, vlastní e-shop):** relace ze zdroje chatgpt.com po měsících 9/2025–9/2026 a relace po výchozích skupinách kanálů (Z9 — segmentováno podle kanálu) | tabulka níž |
| **Nelze ověřit** | (a) kolik lidí v Česku používá režim AI — Google čísla po zemích nezveřejňuje (stránka z 19. 5. 2026 jen „globally“); (b) jak velká část hledání „režim ai“ je zvědavost, zapínání nebo potíže — našeptávač ukazuje, že takové dotazy existují, ne jejich podíl; (c) jak Marketing Miner hledanost zaokrouhluje — vidíme jen výsledek (schody), metodiku jsme nehledali; (d) proč návštěvy z ChatGPT na MEGA DETAIL rostly — mohou za to změny na e-shopu i ve funkcích ChatGPT, příčinu netvrdíme; (e) jak častá je záměna hledanosti za adopci v cizích textech (viz teze nahoře). | — |

---

## Přehled podmínek u tvrzení o platformách (B3)

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Režim AI má přes miliardu MAU | globálně, k 19. 5. 2026 | — | MAU nedefinováno, žádný rozpad po zemích | blog.google 19. 5. 2026 |
| Přehledy od AI mají přes 2 miliardy uživatelů měsíčně | 200+ zemí a území, 40 jazyků, k 23. 7. 2025 | — | „monthly users“ nedefinováno | blog.google 23. 7. 2025 |
| 0,34 % vyhledávání šlo do režimu AI | USA, leden–duben 2026, počítače + mobilní prohlížeče | uvádět Similarweb jako poskytovatele dat | bez aplikace Google; jak se přechod do AI Mode detekoval, metodika neuvádí | SparkToro 9. 6. 2026 |
| GA4 kanál AI Assistant | od 13. 5. 2026; medium „ai-assistant“ podle seznamu Googlu | — | Přehled od AI a režim AI v kanálu nejsou (Organic Search); na naší property naskočil 8.–14. 6. 2026 | ověřeno v runu `ai-navstevnost-konverze` 3. 10. 2026 |

---

## Vlastní měření

### Marketing Miner — hledanost (cs, 10. 10. 2026), měsíce 9/2025 → 8/2026

| Výraz | Průměr | 9 | 10 | 11 | 12 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| režim ai | 16 000 | 100 | 3 300 | 9 200 | 9 200 | 14 000 | 14 000 | 21 000 | **0** | 25 000 | 31 000 | 31 000 | 37 000 |
| rezim ai | 11 000 | 70 | 2 300 | 6 300 | 6 300 | 9 400 | 9 400 | 14 000 | **0** | 17 000 | 21 000 | 21 000 | 26 000 |
| ai mode | 4 000 | 200 | 1 500 | 930 | 1 200 | 1 800 | 2 700 | 4 100 | **30** | 6 100 | 9 200 | 9 200 | 11 000 |
| ai režim | 1 300 | 10 | 300 | 670 | 820 | 1 200 | 1 200 | 1 500 | **0** | 1 800 | 2 200 | 2 700 | 2 700 |
| režim ai google | 990 | 10 | 240 | 560 | 830 | 1 200 | 940 | 1 200 | **0** | 1 800 | 1 800 | 1 800 | 1 500 |
| google ai mode | 630 | 240 | 940 | 370 | 370 | 300 | 450 | 450 | **30** | 680 | 940 | 1 200 | 1 500 |
| chatgpt | 3 184 000 | 3 952 000 | 3 952 000 | 3 952 000 | 3 237 000 | 3 952 000 | 3 237 000 | 3 952 000 | **1 768 000** | 3 237 000 | 2 647 000 | 2 164 000 | 2 164 000 |
| chat gpt | 1 571 000 | 1 211 000 | 1 816 000 | 1 816 000 | 1 489 000 | 1 816 000 | 1 489 000 | 1 816 000 | **2 719 000** | 1 489 000 | 1 211 000 | 992 000 | 992 000 |
| chatgpt cz | 19 000 | 33 000 | 27 000 | 27 000 | 22 000 | 22 000 | 22 000 | 18 000 | 12 000 | 12 000 | 9 800 | 9 800 | 9 800 |
| přehled od ai | 130 | 160 | 200 | 140 | 110 | 160 | 110 | 110 | **0** | 160 | 140 | 140 | 140 |
| ai overview = ai overviews | 390 | 450 | 450 | 300 | 300 | 450 | 300 | 450 | **160** | 300 | 360 | 670 | 550 |
| claude | 78 000 | 14 000 | 21 000 | 25 000 | 21 000 | 31 000 | 57 000 | 154 000 | **14 000** | 188 000 | 154 000 | 126 000 | 126 000 |

Ostatní měřené: gemini, gemini ai, perplexity, copilot, umělá inteligence, ai seo, chatgpt zdarma,
chat gpt zdarma, chatgpt login, chatgpt česky. Bez dat (MM nevrátil): jak vypnout režim ai, vypnout
režim ai, režim ai vypnout, jak vypnout ai mode, vypnout ai mode, ai mode vypnout, jak vypnout režim ai
v google, geo optimalizace.

**Zjištění použitá v článku:**
1. **Duben 2026 je vada dat:** 13 z 23 výrazů má v dubnu roční minimum (pod všemi ostatními měsíci),
   5 z nich nulu; 3 varianty ChatGPT (chat gpt, chat gpt zdarma, chatgpt login) naopak roční maximum.
   Sekce `/ai-mode/` (admin) to tvrdila už pro běh 5. 9. 2026 („duben a srpen … zjevné artefakty“).
2. **Sloučené varianty:** „ai overview“ a „ai overviews“ mají všech 12 hodnot totožných — jedna řada
   uvedená dvakrát. Jediná shodná dvojice z 23 výrazů.
3. **Schody:** „chat gpt“ má za 12 měsíců 5 různých hodnot (992 000 · 1 211 000 · 1 489 000 · 1 816 000
   · 2 719 000); sousední schody dělí zhruba 22 %. „chatgpt login“ 4 hodnoty, „copilot“ 4.
4. **Revize mezi běhy:** sekce `/ai-mode/` cituje běh 5. 9. 2026 — „režim ai“ 13 000, „rezim ai“ 8 900,
   „ai mode“ 3 100, „ai režim“ 1 000, „režim ai google“ 870, „google ai mode“ 520; srpen tehdy artefakt.
   10. 10. 2026: 16 000 / 11 000 / 4 000 / 1 300 / 990 / 630, srpen u „režim ai“ 37 000.
5. **„chatgpt“ + „chat gpt“ dohromady:** říjen 2025 – březen 2026 4,73–5,77 mil./měs., červenec
   a srpen 2026 3,16 mil. (nejnižší z roku). Září 2025 5,16 mil.

### Google Suggest (10. 10. 2026, hl=cs, gl=cz)

- **režim ai:** režim ai google · režim ai ve vyhledávání google · **režim ai zapnout** · režim ai mode ·
  režim ai chrome · režim ai gemini · **režim ai nefunguje**. „Vypnout“ dnes mezi návrhy **není** —
  tvrzení, že lidé hledají hlavně vypnutí, proto v článku není (plán ř. 75 ho měl ze Suggestu 26. 8.).
- **chatgpt:** chatgpt zdarma · chatgpt česky · **chatgpt com** · **chatgpt cz** · **chatgpt download** ·
  **chatgpt app** · chatgpt zdarma bez registrace · chatgpt go · chatgpt codex → navigační dotazy.
- **ai mode:** ai modely · ai models comparison · ai models · ai modelky · … (víceznačný začátek; v článku
  nepoužito — hledanost přesného výrazu to nedokládá).

### GA4 MEGA DETAIL — relace ze zdroje chatgpt.com (Europe/Prague)

| Měsíc | 9/25 | 10/25 | 11/25 | 12/25 | 1/26 | 2/26 | 3/26 | 4/26 | 5/26 | 6/26 | 7/26 | 8/26 | 9/26 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| relace | 117 | 137 | 141 | 96 | 108 | 92 | 130 | 208 | 222 | 143 | 195 | 217 | 259 |

**Kanál AI Assistant** (existuje od rolloutu 8.–14. 6. 2026): 6/26 93 (neúplný měsíc), 7/26 204, 8/26 244,
9/26 **277**. **Září 2026 všechny kanály = 17 971 relací** (Organic Search 10 137, Paid Search 2 452,
Direct 2 353, Paid Social 1 166, Cross-network 986, Referral 434, AI Assistant 277, Organic Social 93,
Unassigned 54, Organic Video 8, Paid Shopping 8, Organic Shopping 3) → **AI Assistant 1,54 %**.
Pozn.: únor 2026 má v Direct 45 895 relací (anomálie, pravděpodobně roboti) — proto v článku žádné
roční součty všech kanálů, jen září 2026.

**Interpretace v článku:** hledanost „chatgpt“ + „chat gpt“ byla nejnižší v létě 2026, návštěvy z ChatGPT
na MEGA DETAIL v srpnu a září 2026 nejvyšší. Příčinu netvrdíme (viz „Nelze ověřit“ d) — jen to, že dvě
metriky se hýbou různě.

---

## Navazující články (B2)

Přečteno celé (agent, 10. 10. 2026):

| Článek | Verdikt | Proč |
|---|---|---|
| `podil-seznamu-v-ceskem-vyhledavani` | **odkaz** | čistý; tabulka „tři otázky, které se pletou“ |
| `mereni-ai-mode-limity` | **odkaz jen k Search Console** | GA4 kanál AI Assistant nezmiňuje → pro GA4 odkaz na `ai-navstevnost-konverze` |
| `sest-kontrol-pred-zaverem` | **odkaz** | čistý, obecná metoda |
| `ai-navstevnost-konverze` | **odkaz** | refresh 3. 10. 2026 (moje ověření) |
| `reportovani-ai-viditelnosti` | **odkaz** | nový 3. 10. 2026 (moje ověření) |
| `nahradi-ai-mode-vyhledavani` | **bez odkazu** (přestože ho plán jmenuje) | ř. 92 odhaduje úmysl hledajících bez dat („svědčí to spíš o tom, že ho zatím neznají“); ř. 93/104 „podíl dotazů veřejně dostupný není“, přitom existuje panelový odhad SparkToro/Similarweb; ř. 134 „zavádí se postupně“ zastaralé → fronta |
| `miliarda-uzivatelu-ai-mode` | **bez odkazu** | ř. 74 „AI Overviews — Google samostatné uživatelské číslo neuvádí — nelze citovat, protože neexistuje“ — **vyvráceno** (Alphabet 23. 7. 2025: přes 2 mld měsíčně); ř. 64/102 MAU jako „doklad globální adopce“ → fronta |
| `ai-search-trendy-cesko-2026` | **bez odkazu** | řada nedoložených tvrzení a rozporů s jinými články (podrobně ve frontě) |
