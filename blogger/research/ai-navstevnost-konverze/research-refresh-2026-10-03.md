# Refresh research — ai-navstevnost-konverze

**Datum refreshe:** 2026-10-03 · **Původně:** 2026-05-30 (nikdy neaktualizováno) · **Run:** refresh v kadenci 2 + 1 + 1
**Proč tenhle článek:** otevřený kandidát v REFRESH_QUEUE od 15. 9. 2026 (tvrzení bez zdroje a vnitřní rozpor)
+ 3. 10. 2026 sem sloučen řádek plánu `atribuce ai navstevy` (Z10). Search Console 1. 7.–30. 9. 2026:
**2 zobrazení, 0 kliků, pozice 11,5** — článek prakticky není vidět. Ostatní kandidáti mají také
jednotky zobrazení (bing 10, produktove-stranky 12), data výběr nerozhodují; rozhodla závažnost vad,
stáří a čerstvě ověřené zdroje z runu `reportovani-ai-viditelnosti`.

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum načtení |
|---|---|---|
| **Dokumentace** | GA4 *Default channel group*: kanál AI Assistant (příklady ChatGPT, Gemini, Deepseek, Copilot, Grok; „It excludes Google's AI Overviews and AI Mode“); pravidlo medium „ai-assistant“ / kampaň „(ai-assistant)“ při shodě referreru se seznamem; Organic Search „including Google's AI Overviews and AI Mode“; Direct; Unassigned | support.google.com/analytics/answer/9756891, 3. 10. 2026 |
| | GA4 *What's new* 13. 5. 2026 — „New AI Assistant traffic measurement“ (příklady ChatGPT, Gemini, Claude) | …/answer/9164320, 3. 10. 2026 |
| | GA4 *Scopes of traffic-source dimensions* — relační rozměry „paid and organic channels last click“; „Sessions initiated by direct entrance are attributed to the UTM values for that user.“ | …/answer/11080067, 3. 10. 2026 |
| | GA4 *Custom channel groups* — lze použít zpětně; pořadí kanálů rozhoduje („first channel whose definition it matches“); limity 2 vlastní skupiny (standardní služba), 50 kanálů; Googlem uvedený příklad kanálu „AI assistants“ s regulárním výrazem `^.*ai|.*\.openai.*|…` | …/answer/13051316, 3. 10. 2026 |
| | OpenAI *Publishers and Developers – FAQ*: „ChatGPT automatically includes the UTM parameter utm_source=chatgpt.com in referral URLs“ (curl/WebFetch 403, ověřeno v prohlížeči) | help.openai.com/en/articles/12627856, 3. 10. 2026 |
| | Kaiser & Schulze, *Marketing Science* (2026): tisková zpráva Frankfurt School 22. 6. 2026 — 973 e-shopů, > 20 mld. USD, 8/2024–7/2025, provoz z LLM < 0,2 %, konverze a tržba na relaci nad placenými sociálními sítěmi, pod ostatními kanály, v čase rostou, přínos u složitých produktů. Z článku samotného (načteno 29. 8. 2026 v runu `za-jak-dlouho-se-projevi-ai-seo`, 3. 10. INFORMS 403): organické vyhledávání o 13 % vyšší pravděpodobnost konverze, v části kontrolních výpočtů nevýznamné | frankfurt-school.de/…/chatgpt-in-online-ohopping, 3. 10. 2026 |
| | Orbit Media: 97 GA4 účtů B2B / sběr poptávek, 1. 7. 2025–30. 6. 2026, 28,9 mil. relací; AI 0,5 % návštěv; „3x more likely to convert into leads than other organic traffic sources“; AI identifikovaná podle zdroje a média + „AI Assistant“ (od poloviny května 2026) | orbitmedia.com/blog/conversion-rates-ai-search/, 3. 10. 2026 |
| | Amsive (3. 9. 2025): 54 webů, 6 měsíců GA4; organické 4,60 %, LLM 4,87 %, párový t-test p = 0,794 | amsive.com/insights/seo/does-llm-traffic-convert-…, 3. 10. 2026 |
| | Ahrefs: vlastní web (16. 6. 2025) — AI 0,5 % návštěv, 12,1 % registrací, „23x“; studie ~82 tis. webů (24. 6. 2025, květen–červen 2025) — návštěvníci z AI o 4,1 % častěji odejdou než z vyhledávání, méně stránek na čas relace | ahrefs.com/blog/ai-search-traffic-conversions-ahrefs/, …/ai-traffic-quality-study/, 3. 10. 2026 |
| **Rozhraní (UI)** | **prázdné.** Do GA4 rozhraní jsem se nedíval — data jsou z Data API (MCP google-analytics, služba MEGA DETAIL). Článek proto nepíše, kde co v menu najdete. | — |
| **Měření** | **MEGA DETAIL (vlastní e-shop, čísla volně použitelná), GA4 Data API, výchozí skupina kanálů relace, 3. 10. 2026** — viz § 2. Nákupy = `ecommercePurchases`, míra = nákupy / relace. Search Console aiseo-optimalizace.cz 1. 7.–30. 9. 2026 (výběr článku). | MCP google-analytics, google-search-console |
| **Nelze ověřit** | (a) úplný seznam asistentů, které GA4 rozpozná (nezveřejněn; v PDF zdrojů ke kanálům AI asistenti nejsou); (b) proč GA4 v naší službě přiděloval „ai-assistant“ až od týdne 24 (8.–14. 6.), ne od 13. 5. — vidíme jen data; (c) kolik návštěv z aplikací AI přijde bez referreru i bez parametru — v datech nerozlišitelné od jiných přímých vstupů; (d) jestli se náš rozdíl v konverzi přenese na jiné e-shopy — jeden obchod, 26 nákupů. | — |

---

## 1. Co bylo v původním textu špatně (a co s tím)

| Původně | Problém | V refreshi |
|---|---|---|
| „Podle dostupných analýz často konvertuje lépe“ (answer, H2, odstavce, FAQ) | žádný zdroj; studie se rozcházejí | čtyři zdroje s výsledky oběma směry + vlastní data a jak srovnávat |
| „Vyšší podíl B2B uživatelů u Perplexity a Claude“ | bez zdroje | vypuštěno |
| „AI nástroje přepošlou bez referreru → GA4 to dá do Direct“, „značná část“ | bez zdroje; zjednodušené — relace bez zdroje dostane dřívější nepřímý zdroj uživatele | přesný mechanismus podle nápovědy GA4; podíl se netvrdí |
| FAQ „funguje automaticky pro všechny účty“ × tělo „u účtů, kde dokáže rozpoznat“ | vnitřní rozpor; v naší službě kanál začal až kolem 8. 6. | datum ohlášení + vlastní zjištění o zpoždění |
| „Najdete ho v Akvizice → Kanály“ | tvrzení o UI bez ověření | vypuštěno, popis podle nápovědy |
| „UTM přežijí přechod lépe než referrer“ | bez zdroje | nahrazeno doloženým: ChatGPT přidává utm_source=chatgpt.com (OpenAI) |
| „Konverzní hodnota se mezi ChatGPT, Perplexity… výrazně liší“ | bez zdroje | vypuštěno |
| H2 bez `hl` + `strong` | formát webu | všechny H2 přepsány |

## 2. Měření MEGA DETAIL (GA4, 3. 10. 2026)

**Časová řada (ISO týdny, relace ze zdrojů AI):** týdny 18–23 (do 7. 6.) chatgpt.com jen jako „(not set)“
(12–60 / týden) a „referral“ (3–12 / týden), **žádné „ai-assistant“**. Od týdne 24 (8.–14. 6.) převažuje
chatgpt.com / ai-assistant (23, 19, 38, 34… až 80 / týden), „(not set)“ mizí. perplexity.ai: referral
v týdnech 21–25, ai-assistant od týdne 25. copilot.com / (not set) se objevuje i po nasazení.

**15. 6.–30. 9. 2026 (kanál už běží):**

| Kanál | Relace | Nákupy | Nákupy / relace | 95% Wilson |
|---|---:|---:|---:|---|
| AI Assistant | 794 | 32 | 4,03 % | 2,87–5,63 % |
| Paid Search | 7 743 | 163 | 2,11 % | 1,81–2,45 % |
| Direct | 7 936 | 127 | 1,60 % | 1,35–1,90 % |
| Organic Search | 42 789 | 100 | 0,23 % | 0,19–0,28 % |

- Relace ze zdrojů AI celkem 838, z toho **794 v AI Assistant, 44 (5,3 %) mimo**: gemini / (not set) 13,
  perplexity / (not set) 13, copilot.com / (not set) 8, chatgpt.com / referral 5, chatgpt.com / (none) 3,
  perplexity.ai / referral 2. Celé období 13. 5.–30. 9.: 1 072 relací, 254 mimo kanál (většinou do 7. 6.).
- **Vstup na produkt (`/p/`):** AI Assistant 408 z 794 (51 %), Organic 1 355 z 42 789 (3,2 %),
  Direct 1 878 z 7 936 (23,7 %), Paid Search 544 z 7 743 (7,0 %).
- **Jen relace se vstupem na produkt:** AI Assistant 26 / 408 = 6,37 % (4,39–9,17 %), Organic 31 / 1 355
  = 2,29 % (1,62–3,23 %), Direct 39 / 1 878 = 2,08 %, Paid Search 7 / 544 = 1,29 %.
- **Poměr AI : Organic** — všechny relace 17,2×, jen vstup na produkt 2,8×. Intervaly se nepřekrývají,
  rozdíl tedy nejspíš existuje, ale jeho velikost z 26 nákupů neurčíme.
- ⛔ Starší čísla z case study (1 867 návštěv / 12 měsíců, „~4×“ proti Google organic) mají jinou definici
  a období — do refreshe nejdou, aby se nemíchala.

## 3. Podmínky (B3)

| Tvrzení | Podmínky | Konzistence | Výjimky | Zdroj |
|---|---|---|---|---|
| Kanál AI Assistant | referrer ze seznamu Googlu, nebo medium „ai-assistant“ | ohlášeno 13. 5. 2026; v naší službě od ~8. 6. | AI Overviews a AI Mode = Organic Search | 9756891, 9164320, vlastní data |
| Relace bez zdroje | žádný referrer, žádné UTM | připíše se poslednímu nepřímému zdroji uživatele | Direct jen bez dřívějšího zdroje | 11080067 |
| utm_source=chatgpt.com | odkaz z výsledků ChatGPT | zdroj chatgpt.com i bez referreru | bez média → pravidla kanálů nesplní, „Nepřiřazeno“ (u nás před 8. 6.) | OpenAI FAQ, vlastní data |
| Vlastní skupina kanálů | max. 2 vlastní skupiny (standardní služba), 50 kanálů | první shodný kanál vyhrává | lze zpětně | 13051316 |

## 4. Klíčová slova a FAQ

Marketing Miner (3. 10. 2026, run `reportovani-ai-viditelnosti`): „ga4 ai assistant“, „ai návštěvnost“ bez dat.
FAQ podle praxe a dat: kde najít návštěvy z ChatGPT · patří Přehled od AI do AI Assistant · proč chatgpt.com
v Nepřiřazeno · konvertují návštěvy z AI lépe · jak nastavit vlastní kanál · srovnání s obdobím před kanálem.

## 5. Odkazy (B2)

ANO: `reportovani-ai-viditelnosti`, `za-jak-dlouho-se-projevi-ai-seo` (studie konverzí, auditováno),
`mereni-ai-mode-limity`, `hodnota-navstevy-z-ai`. NE: `case-study-megadetail-ai-navstevnost` (otevřený
kandidát — souhrn jako AI Overviews), `bing-ai-performance-report` (otevřený kandidát).
