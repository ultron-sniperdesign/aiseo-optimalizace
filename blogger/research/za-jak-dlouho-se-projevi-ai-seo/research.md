# Research — Za jak dlouho se AI SEO projeví v poptávkách

**Run:** 14.–15. 9. 2026 · **Řádek plánu:** `geo funnel velocity` (analysis) · **Slug:** `za-jak-dlouho-se-projevi-ai-seo`
**Cílové KW:** za jak dlouho se projeví ai seo · geo funnel velocity · sales velocity · měření ai viditelnosti · atribuce návštěv z ai v ga4 · jak jste se o nás dozvěděli

## 1. Proč jiný úhel, než stojí v plánu

- **„GEO funnel velocity“ je termín z jednoho blogu dodavatele.** Přesné spojení jsme našli jen u Demand Local („20 GEO Funnel Velocity Statistics in 2026“, last updated 14. 5. 2026; firma prodává digitální reklamu autodealerům). Definice: „how quickly AI-influenced discovery becomes a qualified lead, meeting, or sale…“. Vzorec ani vlastní data článek nemá, jen vyjmenovává metriky a převzaté statistiky. Popis v obsahovém plánu byl téměř doslovný překlad jeho první věty.
- **Konkrétní čísla o rychlosti jsou bez dat.** FP Growth (23. 7. 2026): „AI-sourced leads typically close 10 to 20 percent faster…“, „Citation velocity changes precede pipeline changes by 1 to 3 weeks“ — bez zdroje; v tabulce téhož článku 6–12 týdnů, ve FAQ 4–8 týdnů. NP Digital (X, 15. 6. 2026, „62 % rychleji“) neověřitelné — čísla jen v obrázku, stránka za Cloudflare. **Nepoužito.**
- **Předobraz je zavedený:** sales velocity = příležitosti × průměrná hodnota × úspěšnost ÷ délka cyklu (Salesforce 12. 3. 2024, HubSpot 7. 5. 2025; Salesforce v příkladu „$1,250 per day“).
- **Poptávka v ČR (Marketing Miner, 14. 9. 2026):** geo funnel velocity / funnel velocity pod prahem; sales velocity 10, pipeline velocity 10; „za jak dlouho se projeví seo“ a 25 variant 0, Google Suggest je nedoplňuje. Kontext: ai seo 130 (+34 %), přehled od ai 130 (+169 %), konverzní trychtýř 170, atribuční model 150, jak se dostat do chatgpt 40. GSC webu (90 d): 0 dotazů s „jak dlouho“, „konverz“, „atribuc“.
- **Rozhodnutí:** česká otázka „za jak dlouho se AI SEO projeví v poptávkách“ (otázka kupujícího před auditem a přirozená formulace pro rozkladové dotazy AI); pojem vysvětlit jen jako vedlejší. Úspěch měřit zobrazeními a citacemi, ne návštěvností.

## 2. Mezera proti vlastnímu webu

Grep korpusu (články, sekce, pilíř): 0× „lookback“, „Jak jste se o nás“, „first user“, „prodejní cyklus“, „dny do“. Časová prodleva jen jako ilustrace bez metody (`hodnota-navstevy-z-ai` „za týden“, `ai-search-trendy-cesko-2026` „přes 3 dny“) a jako nedoložené měsíce v `geo-optimalizace`.
Hranice proti kanibalizaci: návratnost → `roi-ai-seo`, hodnota poptávky → `hodnota-navstevy-z-ai`, nastavení segmentu → `ai-navstevnost-konverze`, ztráta zdroje → otevřený řádek `atribuce ai navstevy` (tady jen jeden odstavec). Řádek `geo jako pipeline ne zebricek` řeší technický řetěz vyhledávání, ne časovou prodlevu — nekoliduje.

## 3. Ověřená fakta použitá v článku (primární zdroje, 14.–15. 9. 2026)

**Google / Search Console**
- SEO Starter Guide (10. 12. 2025): „Some changes might take effect in a few hours, others could take several months. In general, you likely want to wait a few weeks to assess…“
- AI features and your website (10. 12. 2025): podpůrný odkaz v AI Overviews / AI Mode jen pro stránku „indexed and eligible to be shown in Google Search with a snippet“; AI funkce se v Search Console počítají do typu Web.
- Průvodce optimalizací pro generativní AI (10. 7. 2026): web musí být zahrnutý do funkcí s generativní AI v Search Console; česká nápověda answer/16908024: zahrnutí je výchozí, ovládací prvek mají všechny weby od 31. 8. 2026.
- Do you need an SEO? (5. 6. 2026): „What kind of results do you expect to see, and in what timeframe? How do you measure your success?“ — odhad v měsících („four months to a year“) na stránce dnes není.
- Přehled výkonu v generativní AI (Vyhledávání), answer/16984139 (cs): „Od 31. srpna 2026 jsou tyto statistiky k dispozici pro všechny weby po celém světě.“ Jen zobrazení; dimenze stránky, země, zařízení, data; export. Od kdy sahá historie, Google neuvádí (sekundárně 18. 5. 2026).
- Filtr značkových dotazů: blog 20. 11. 2025, všem způsobilým webům 11. 3. 2026; „Tento filtr není k dispozici u dílčích služeb … ani u webů s nízkým počtem zobrazení.“

**Google Analytics 4** (nápověda, anglicky i cs; klíčové citace ověřeny i vlastním stažením 15. 9.)
- Atribuční trasy klíčových událostí (10595568): Reklamy → Klíčové události → Atribuční trasy klíčových událostí; metriky Dny do klíčové události, Kontaktní body do klíčové události; cesta jen u uživatelů, kteří klíčovou událost udělali. Definice metriky (9143382): „The number of days from when the ad interaction happened until the key event.“ — od kterého bodu, neuvádí.
- Hloubka pohledu (10597962): akviziční události 30 dní (7), ostatní 90 (30, 60); platí pro všechny modely; změna jen dopředu.
- První uživatel – zdroj: hodnota se nemění při návratu; změna atribučního modelu na ni nemá vliv (10597962, 11080067).
- Kanál AI Assistant (9164320, 13. 5. 2026; 9756891): podle referreru; „excludes Google's AI Overviews and AI Mode“ → Organic Search. Zpětnou platnost Google neuvádí (Loves Data: „historical AI traffic isn't reclassified“ — sekundární).
- Vlastní skupiny kanálů (13051316): „can be applied to your reports retroactively. It's not currently possible to use custom channel groups in the Key events paths report.“
- Klíčové události (13128484): „Marking an event as a key event affects reports from time of creation. It doesn't change historic data.“
- Kohorty (9670133): „Cohorts are based on the user's device data only. User-ID is not considered when creating a cohort.“
- Uchovávání dat (7667196): user-level 2 nebo 14 měsíců; „only affects explorations and funnel reports“ (česká verze chybně „přehledy konverzních cest“).
- Modelování chování (11161109): „If users do not grant consent … Analytics can't detect if the events are the action of the same user.“; podmínka mj. „at least 1,000 daily users sending events with analytics_storage='granted' for at least 7 of the previous 28 days“; nepodporuje „User explorer, cohort, and user lifetime explorations“.

**Ostatní**
- OpenAI bots: „For search results, please note it can take ~24 hours from a site's robots.txt update for our systems to adjust.“ OpenAI Help (29. 8. 2026): „ChatGPT automatically includes the UTM parameter utm_source=chatgpt.com in referral URLs“.
- Bing Webmaster Blog 10. 2. 2026: AI Performance (veřejná zkušební verze) — citace v Copilotu a AI shrnutích, bez prokliků.
- HubSpot: Original / Latest Traffic Source u kontaktu, obchody je přebírají („mirror these properties“); Days to close jen pro vlastní přehledy; kategorie AI Referrals.
- § 89 odst. 3 zák. č. 127/2005 Sb. (e-Sbírka): „předem prokazatelný souhlas“; změna zákonem č. 374/2021 Sb., čl. I bod 276, účinnost 1. 1. 2022; ÚOOÚ to uplatňuje na cookies (příkaz UOOU-02808/22-7).
- SparkToro (Rand Fishkin, 19. 9. 2023): tři vady otázky „How did you hear about us“ — paměť, který kontakt, lidé, kteří o vás neslyšeli.
- Konverze (jen jako důkaz rozptylu): Kaiser a Schulze, Marketing Science 45(4) 699–715 (2026): „Organic search modestly exceeds oLLM (coefficient: 0.121), translating to a 13% higher conversion likelihood“; v pěti kontrolních variantách nevýznamné; poslední klik. Orbit Media (97 B2B webů, 7/2025–6/2026, 28,9 mil. relací): AI 0,5 % návštěvnosti, „Three times more likely than direct or organic search“. Amsive (54 webů, 6 měsíců): 4,60 % vs 4,87 %, p = 0,794.

## 4. Co článek záměrně netvrdí
Žádné „typické“ číslo prodlevy (FP Growth, NP Digital, měsíce z `geo-optimalizace`); že AI zkracuje nákupní cyklus (6sense to AI nepřipisuje, a není to český údaj); že AI návštěvy obecně konvertují lépe nebo hůř; že kanál AI Assistant platí zpětně; „nastavte model prvního kliknutí“ (zrušen 11/2023); nic o tom, jak se proklik ze Seznam Asistenta zapíše v GA4 (neověřeno).

## 5. Audity a jazyk
- Audit 1 (gpt-5.5): 1 blocker — absolutní „nemá nikdo / nikdo nedoložil“ → „jsme nenašli“. Přijato i: answer začíná definicí, rozlišení tří prodlev, FAQ k ChatGPT zúžena na výsledky vyhledávání, doplnění u Orbit Media, orientační povaha vlastních dotazů. Odmítnuto: delší `title` (SERP bere `seoTitle` 60 znaků), změna slugu.
- Audit 2 (gpt-5.5): přijato zpřesnění „změřit“ → „odhadnout po částech“, „90 dní“ jen pro atribuční trasy, „vzorec jsme nenašli“, „analýzy s popsaným vzorkem“, časopis u Kaiser a Schulze, zkušební verze u Bingu. Odmítnuto: přepis prvního H2 (sekce je právě o chybějícím čísle) a věta k CTA (slibovala by víc, než audit obsahuje).
- C6: mechanicky 8 → 0 (slovník v68: výjimka `(?<!fp )` u „growth“), LLM gpt-5.4 5 nálezů, všechny přijaty.

## 6. Související zásah a nálezy mimo článek
- **`geo-optimalizace`** — sekce „Časový horizont“ a FAQ „Za jak dlouho budou výsledky?“ tvrdily 1–3 / 4–6 / 6–12 měsíců, „několikatýdenní zpoždění crawlu“ u ChatGPT a „AI nástroje nemají retargeting cyklus“ bez zdroje. Nahrazeno doložitelným stavem + odkaz na nový článek.
- Do `REFRESH_QUEUE.md` (otevřené kandidáty): zastaralé „report nemá každý web“ v 9 článcích; další časové odhady bez zdroje (`aeo-optimalizace-v-praxi` i v rozporu s `/aeo/`); tvrzení o konverzích bez zdroje v `ai-navstevnost-konverze`, `roi-ai-seo` „z AI nástrojů“ vs. ChatGPT, `stredni-cast-trychtyre-ai`.
- Pro admina (board): vlastnost GA4 `aiseo-optimalizace.cz` (MCP) má od 7/2026 39× `generate_lead`, ale 0 klíčových událostí — pokud jde o produkční vlastnost, přehled atribučních tras i konverze jsou prázdné a označení platí jen dopředu.

## 7. Proces
Ověřování proběhlo workflow se 125 agenty a druhým (47 agentů), které uživatel zastavil jako nepřiměřeně velké. Text, audity a C6 pak běžným postupem bez dalších agentů. Pravidlo pro příště je v paměti (`feedback_workflow_velikost`).
