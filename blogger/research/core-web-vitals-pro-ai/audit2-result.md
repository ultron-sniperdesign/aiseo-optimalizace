1. **VAROVÁNÍ**  
   **Citace:** „`~0` … korelace CWV s AI viditelností byla ve studii z ledna 2026 blízko nuly“ / „měřená korelace je blízko nuly“  
   **Proč:** Je to už opatrné, ale pořád lehce zplošťuješ: není jasné, zda studie měřila přímo CWV, nebo „rychlost webu“ šířeji. V těle jednou píšeš „rychlost webu“, jinde „CWV“. To technický čtenář uvidí.  
   **Oprava:** Sjednotit formulaci na: „studie našla velmi slabou korelaci mezi metrikami rychlosti / technickou výkonností webu a AI viditelností“. Pokud studie nebyla přímo o CWV, nepsat „korelace CWV“.

2. **VAROVÁNÍ**  
   **Citace:** „typický časový limit AI robota — extrémně pomalá stránka se nemusí načíst“ / „zhruba jedna až pět“  
   **Proč:** Není to už absolutní, ale ve `stats` to pořád působí příliš tvrdě a exaktně. „Typický časový limit AI robota“ v boxu vypadá jako stabilní technický parametr napříč platformami.  
   **Oprava:** Ve `stats` změnit na něco měkčího: „řádově jednotky sekund“ a do labelu doplnit „liší se podle robota a situace“. Např. `value: "jednotky s"`.

3. **VAROVÁNÍ**  
   **Citace:** „Když se stránka nenačte do časového limitu robota, vypadne z citovatelných zdrojů úplně.“  
   **Proč:** To je nejsilnější zbytek overclaimu. „Úplně“ je moc silné: robot může získat část HTML, jinou URL, starší verzi, jiný fetch, jiný pipeline krok. Nevíš, že „vypadne úplně“.  
   **Oprava:** „… může být pro daný fetch nedostupná nebo se obsah nedostane celý do dalšího zpracování.“

4. **VAROVÁNÍ**  
   **Citace:** „AI roboti, kteří sbírají obsah pro ChatGPT, Perplexity nebo Google AI…“  
   **Proč:** Míchá se crawling, rendering, indexing a interní retrieval pipeline. Technický čtenář může namítnout, že ne každý cited output jde přímo z jednoho „AI robota“, který si stránku právě teď stáhl.  
   **Oprava:** Zpřesnit: „Systémy a crawlery, které obsah získávají a připravují pro další zpracování…“ Tím se vyhneš příliš jednoduchému modelu.

5. **DOPORUČENÍ**  
   **Citace:** „PageSpeed Insights ukáže laboratorní test vždy a reálná data tam, kde má stránka nebo doména dost dat z CrUX.“  
   **Proč:** Technicky v pořádku, ale chybí jedna důležitá nuance: PSI může ukázat URL-level i origin-level field data a to mění interpretaci.  
   **Oprava:** Krátce doplnit: „… reálná data na úrovni URL, případně celé domény/originu, když jich je dost.“

6. **DOPORUČENÍ**  
   **Citace:** „Tři metriky, které Google měří na 75. percentilu reálných uživatelů Chrome za 28 dní“  
   **Proč:** Přesnější je „hodnotí jako passing na 75. percentilu field dat“. „Google měří“ je srozumitelné, ale technicky hrubší, protože jde o CrUX dataset z Chrome uživatelů.  
   **Oprava:** „… hodnotí podle 75. percentilu reálných dat uživatelů Chrome v CrUX za 28 dní.“

7. **DOPORUČENÍ**  
   **Citace:** „u těžkých stránek závislých na JavaScriptu je stejné riziko, že se hlavní obsah nestihne vykreslit“  
   **Proč:** Dobrá teze, ale chtělo by to explicitně oddělit CWV vs renderability. Jinak si čtenář může odnést, že INP/LCP jsou zástupný test pro „AI-readiness“, což nechceš.  
   **Oprava:** Jedna věta navíc: „Tohle není totéž co Core Web Vitals: i web s přijatelnými CWV může mít pro robota problém, pokud klíčový obsah dodává pozdě JavaScript.“

8. **DOPORUČENÍ**  
   **Citace:** `answer` / závěr: „Jeden reálný důvod web zrychlit ale existuje: AI roboti mají krátký časový limit…“  
   **Proč:** Frontmatter i tělo pořád dávají timeoutu dominantní roli. Chybí druhá část mechanismu: ne jen timeout, ale obecně dostupnost HTML a vykreslení hlavního obsahu.  
   **Oprava:** Do `answer` i `description` doplnit „timeout nebo pozdní vykreslení hlavního obsahu“. Tím sladíš frontmatter s tělem.

9. **DOPORUČENÍ**  
   **Citace:** „Obvykle velké obrázky (LCP) nebo těžký JavaScript (INP).“  
   **Proč:** Pro technického čtenáře je to trochu moc generické. Hodnota článku je zatím hlavně de-hype, méně postup.  
   **Oprava:** Přidej 3 konkrétní priority:  
   - hero image: komprese, rozměry, preload jen pokud dává smysl  
   - omezit render-blocking a dlouhé JS tasky  
   - server/TTFB a SSR/prerender pro hlavní obsah  
   Stačí jednou větou u každého.

10. **DOPORUČENÍ**  
    **Citace:** „Rozhodnutí je proto jednoduché. Neplníte dobré prahy nebo se hlavní obsah zjevně načítá pomalu? Vyřešte to…“  
    **Proč:** Rozhodovací práh je lepší než dřív, ale ještě může být praktičtější. Teď míchá CWV thresholdy a „zjevně pomalé načítání“.  
    **Oprava:** Udělat mini decision rule:
    - plníte CWV a obsah je v HTML / objeví se rychle bez těžkého JS → dál pro AI neřešit  
    - neplníte CWV nebo je hlavní obsah pozdě vykreslený → opravit  
    - máte JS-heavy appku → ověřit fetch/render robota zvlášť

11. **DOPORUČENÍ — chybějící námitka**  
    **Citace:** chybí  
    **Proč:** Schází námitka, že CWV jsou uživatelské metriky z Chrome a nejsou metrikou crawler fetch/render výkonu. To je pro technického čtenáře zásadní pojistka proti zkratce „dobré CWV = robot v pohodě“.  
    **Oprava:** Přidat krátký odstavec: „Core Web Vitals měří zkušenost reálných návštěvníků, ne přímo to, co uvidí crawler. Jsou dobrý varovný signál, ale ne přímý test dostupnosti obsahu pro robota.“

12. **DOPORUČENÍ — nadbytečnost**  
    **Citace:** Opakování v `answer`, úvodu, FAQ, závěru: „žádná platforma nepotvrdila“, „korelace blízko nuly“, „nejde o 100/100“  
    **Proč:** Teze je jasná už po první třetině. Zbytek ji několikrát opakuje, místo aby přidal konkrétnější technickou diagnostiku.  
    **Oprava:** Zkrátit jeden z opakovaných bloků FAQ nebo závěr a místo toho doplnit mini checklist:
    - je hlavní obsah v initial HTML?  
    - bez JS je vidět aspoň podstata stránky?  
    - není LCP objekt přehnaně těžký?  
    - nejsou long tasks / přetížený main thread?  
    - má URL dost CrUX dat, nebo rozhodujete jen z labu?

**Shrnutí:** Bez blokeru. Článek je po přepisu věrohodný, ale pořád má dva zbytky přestřelení: příliš tvrdě podaný „1–5 s timeout“ a hlavně větu o „vypadnutí úplně z citovatelných zdrojů“. Největší přidaná hodnota teď chybí v jedné technické námitce: CWV nejsou přímý test crawlerové/renderovací dostupnosti. To bych doplnil nejdřív.