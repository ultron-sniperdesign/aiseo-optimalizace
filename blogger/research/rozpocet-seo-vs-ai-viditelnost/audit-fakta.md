# Audit faktů: Rozpočet SEO a AI viditelnosti

## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek stojí na relevantních primárních zdrojích a hlavní teze o společném základu SEO a funkcí Googlu s generativní AI je doložená. Před publikací je ale potřeba doplnit podmínky tří měřicích zdrojů. Bez nich text vytváří dojem, že reporty dávají každému webu úplný nebo automaticky dostupný obraz.

Souhrn: **2 zásadní nálezy, 1 drobný nález**.

## Nálezy

### 1. [BLOCKER — zásadní] Search Console report není automaticky použitelný pro každý web

**Citovaná pasáž:**

> „Přehled výkonu v generativní AI v Search Console slučuje zobrazení v Přehledu od AI a režimu AI.“

> „Lze začít s měřením AI viditelnosti bez placeného nástroje? Ano. Search Console nabízí zobrazení v Přehledu od AI a režimu AI…“

> „Zobrazení v Googlu: Trend v reportu generativní AI po stránkách a zemích…“

**Problém:** Text prezentuje samostatný report jako obecně dostupný výchozí zdroj. Google sice uvádí globální zavedení od 31. 8. 2026, zároveň ale výslovně upozorňuje, že se report konkrétní vlastnosti nemusí zobrazit: ne všechny vlastnosti k němu mají přístup během postupného zavádění, web nemusí mít dost zobrazení nebo může být z generativních funkcí vyloučen. Report navíc nezahrnuje experimenty v Search Labs. Tyto podmínky jsou správně zachycené v `research.md`, ale v článku chybějí.

**Důkaz:** Google Search Console Help uvádí jak globální rollout, tak důvody, proč report nemusí být vidět, a vyloučení Search Labs: <https://support.google.com/webmasters/answer/16984139?hl=en>

**Doporučená oprava:** U prvního popisu reportu doplnit například: „Pokud se report vlastnosti zobrazuje a web získal dost zobrazení, slučuje data z Přehledu od AI a režimu AI; nezahrnuje Search Labs.“ Ve FAQ změnit absolutní „Search Console nabízí“ na podmíněné „Search Console může nabídnout“ a uvést, že bez dostatečných zobrazení se report nemusí zobrazit. V kontrolním seznamu označit tento zdroj jako podmíněný.

### 2. [BLOCKER — zásadní] Kanál AI Assistant v GA4 není úplný soupis návštěv z AI

**Citovaná pasáž:**

> „GA4 má ve výchozí skupině kanálů AI Assistant pro zdroje jako ChatGPT, Gemini, DeepSeek, Copilot nebo Grok.“

> „Pokud web měří poptávku či nákup, lze u relací z AI Assistant sledovat i konverzi a hodnotu.“

> „Jak měřit, jestli se investice do AI vyplatila? Spojte více zdrojů: … relace a konverze kanálu AI Assistant v GA4…“

**Problém:** Existence kanálu i vyloučení funkcí Googlu jsou popsány správně, ale chybí rozhodující podmínka při vyhodnocení návratnosti: GA4 zařadí relaci do AI Assistant pouze tehdy, když médium odpovídá `ai-assistant`; automaticky ho nastaví, jen když referrer odpovídá seznamu rozpoznaných AI asistentů. Návštěva bez předaného nebo rozpoznaného referreru proto v tomto kanálu být nemusí. Čísla z AI Assistant jsou měřená část návštěv, ne úplný počet návštěv z AI. Podmínku obsahuje i tabulka v `research.md`, do článku se však nepropsala.

**Důkaz:** Oficiální definice GA4 říká, že kanál vyžaduje médium `ai-assistant` a automatická klasifikace závisí na referreru ze seznamu AI asistentů; nevyhovující návštěvy se řídí jinými pravidly kanálů: <https://support.google.com/analytics/answer/9756891?hl=en>

**Doporučená oprava:** Za popis kanálu doplnit například: „Kanál zachytí jen relace, které GA4 podle referreru nebo média `ai-assistant` správně rozpozná; část návštěv bez referreru může skončit jinde, proto nejde o úplný soupis provozu z AI.“ Stejnou výhradu stručně přenést do FAQ o měření návratnosti a do položky „Návštěvy a obchod“.

### 3. [WARNING — drobný] Bing AI Performance má užší rozsah, než naznačuje zkratka „citace v Bingu“

**Citovaná pasáž:**

> „Bing Webmaster Tools doplňuje citace a citované stránky.“

> „Citace v Bingu: Počet citací a citované stránky…“

> „Bing Webmaster Tools ukazuje citace.“

**Problém:** Metriky a jejich interpretace jsou popsány správně, ale článek neuvádí rozsah ani stav funkce. Microsoft ji vydal jako veřejný náhled a data pokrývají podporovaná prostředí: Microsoft Copilot, AI souhrny v Bingu a vybrané partnerské integrace. Nejde o soupis citací ze všech AI služeb ani nutně ze všech prostředí Microsoftu.

**Důkaz:** Oznámení Microsoftu popisuje veřejný náhled a jmenuje pokryté plochy; zároveň potvrzuje, že dotazy jsou jen vzorek a citace neznamenají pořadí ani umístění: <https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/>

**Doporučená oprava:** Při první zmínce napsat například: „Veřejný náhled AI Performance v Bing Webmaster Tools ukazuje citace a citované stránky v podporovaných prostředích Microsoftu — Copilotu, AI souhrnech Bingu a vybraných partnerských integracích.“ V dalších zkratkách používat „citace v podporovaných prostředích Microsoftu“.

## Ověřeno bez nálezu

- Google skutečně uvádí stejné základní postupy SEO pro Přehled od AI a režim AI, požadavek indexace a způsobilosti k úryvku, absenci zvláštního souboru či zvláštního typu strukturovaných dat a žádnou záruku procházení, indexace ani zobrazení: <https://developers.google.com/search/docs/appearance/ai-features>.
- Samostatný report Search Console skutečně slučuje zobrazení z Přehledu od AI a režimu AI a nabízí rozdělení podle stránky, země, data a zařízení; dokumentace v něm uvádí pouze zobrazení, ne samostatné kliky, míru prokliku, pozici ani dimenzi dotazu: <https://support.google.com/webmasters/answer/16984139?hl=en>.
- GA4 skutečně řadí ChatGPT, Gemini, DeepSeek, Copilot a Grok mezi příklady zdrojů kanálu AI Assistant a Přehled od AI s režimem AI řadí do Organic Search: <https://support.google.com/analytics/answer/9756891?hl=en>.
- Bing správně popisuje počet citací jako metriku bez informace o pořadí či umístění a grounding queries jako vzorek: <https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/>.
- OpenAI článek vyšel 16. 9. 2026 a uvádí Sponsored Agents jako test u vybraných inzerentů v USA po kliknutí na reklamu v ChatGPT: <https://openai.com/index/reimagining-advertising-with-ai/>.
- CTA používá kanonický název **Audit AI viditelnosti** a cenu **3 600 Kč bez DPH** podle `src/content/pages/audit.ts`. Kanonický **AI SEO Wireframe Pack** stojí **1 490 Kč včetně DPH** podle `src/content/pages/pack.ts`; článek jeho cenu netvrdí.
- `seoTitle` má 38 znaků, popis 141 znaků a krátká odpověď 50 slov. Všechny tři hodnoty splňují limity auditorského zadání; posuzován byl `seoTitle`, nikoli `title`.
- Externí odkazy na Google, Microsoft a OpenAI vedou na odpovídající primární zdroje. Odkaz na `/audit/` vede na živou stránku se shodným názvem a cenou. U dvou interních blogových odkazů nebyla zjištěna věcná kolize s jejich popisem.

## Doověření zásadních oprav

Doověřeno proti stejným primárním zdrojům po zapracování oprav v článku. Kontrolována byla pouze místa související s F1 a F2: první popis zdroje, odpověď ve FAQ a příslušná položka v kontrolním seznamu.

### F1 — Search Console: OBSTÁLO

- První popis nově podmiňuje použití tím, že se report u vlastnosti zobrazuje a web získal dost zobrazení.
- Výslovně uvádí, že report nezahrnuje Search Labs a nemusí být vidět u webu s malým počtem zobrazení ani u webu vyloučeného z generativních funkcí.
- FAQ používá podmíněné „může Search Console nabídnout“ a připomíná potřebu dostatečných zobrazení.
- Kontrolní seznam začíná podmínkou „Pokud je report dostupný“ a uvádí společná data Přehledu od AI a režimu AI bez Search Labs.

Formulace odpovídají podmínkám oficiální dokumentace: <https://support.google.com/webmasters/answer/16984139?hl=en>. **F1 je uzavřený bez zbytkového zásadního nálezu.**

### F2 — GA4 AI Assistant: OBSTÁLO

- První popis nově říká, že kanál zachytí jen relace rozpoznané podle odkazujícího zdroje nebo média `ai-assistant` a že část návštěv bez předaného zdroje může skončit jinde.
- Případné konverze a hodnotu správně vztahuje pouze k rozpoznaným relacím.
- FAQ mluví o „rozpoznaných relacích a konverzích“ a zároveň upozorňuje, že žádný zdroj sám nepokrývá celý přínos.
- Kontrolní seznam znovu omezuje metriku na rozpoznané relace a uvádí možné zařazení návštěv bez zdroje jinam; správně ponechává Přehled od AI a režim AI v organickém vyhledávání.

Formulace odpovídají pravidlům výchozí skupiny kanálů GA4: <https://support.google.com/analytics/answer/9756891?hl=en>. **F2 je uzavřený bez zbytkového zásadního nálezu.**

### Verdikt doověření

**Obě zásadní opravy F1 a F2 obstály. Po tomto cíleném kole nezůstává žádný zásadní nález z původního auditu.**
