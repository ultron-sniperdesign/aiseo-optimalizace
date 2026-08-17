1. **VÝZNAMNÝ — nezdrojované a rychle stárnoucí tvrzení o „dvou změnách výchozího modelu“**
   - **Citace:** `stats → "Gemini" / "rodina modelů, na které AI Mode staví; výchozí model se od prosince 2025 měnil dvakrát"`
   - **Problém:** Je to konkrétní historické tvrzení bez data odečtu a bez zdroje. U hubu navíc zbytečně přebírá detail, který má podle zadání řešit navázaný článek.
   - **Návrh:** Zkrátit na obecné tvrzení a odkázat do clusteru: „AI Mode staví na modelech rodiny Gemini; podrobnosti k tomu, co Google označoval jako výchozí model, se mění v čase, proto je rozebírá samostatný článek …“

2. **VÝZNAMNÝ — rozcestník částečně kanibalizuje a zároveň mate titulky odkazovaných článků**
   - **Citace:** tabulka `Kam dál podle toho, co řešíte`, řádek `Je to nově výchozí režim vyhledávání? | [výchozí je model, ne režim](/blog/ai-mode-jako-vychozi-rezim/)`
   - **Problém:** Hub tu už sám vysvětluje interpretační pointu („výchozí je model, ne režim“), místo aby jen rozcestil. Anchor navíc koriguje premise otázky, ale slug článku říká něco jiného; to zvyšuje riziko nesouladu mezi hubem a clusterem.
   - **Návrh:** Přepsat na neutrální rozcestník bez vlastní teze, např. „Co Google označil za výchozí a co ne“ nebo „AI Mode jako výchozí režim? Kontext a formulace Googlu“.

3. **DROBNÝ — rozcestník není čistý rozcestník, část odkazů už je v textu výše**
   - **Citace:** tabulka `Kam dál podle toho, co řešíte` vs. dřívější odkazy v těle na `/blog/ai-mode-cesky/`, `/blog/kdyz-si-ai-mode-neni-jisty/`, `/blog/ai-mode-vs-ai-overviews/`
   - **Problém:** Nová tabulka částečně zdvojuje odkazy, které už čtenář dostal v kontextu. Tím klesá její užitečnost; působí víc jako seznam interních linků než orientační rozcestník.
   - **Návrh:** Nechat v tabulce jen články, které se v těle neodkazují, nebo u již použitých odkazů přidat nový užitek („kde jsou data“, „kde je praktický postup“, „kde jsou limity“).

4. **VÝZNAMNÝ — hub stále nepokrývá cluster čistě a úplně**
   - **Citace:** text a tabulka odkazují na `ai-mode-cesky`, `ai-mode-vs-ai-overviews`, `jak-se-zobrazit-v-ai-mode`, `kdyz-si-ai-mode-neni-jisty`, `delsi-dotazy-v-ai-mode`, `miliarda-uzivatelu-ai-mode`, `agentni-rezervace-v-ai-mode`, `mereni-ai-mode-limity`; chybí explicitní odkaz na zadaný clusterový článek `ai-mode-jako-vychozi-rezim` v běžném textu mimo tabulku.
   - **Problém:** Formálně je sice doplněn do tabulky, ale jako hub by článek měl mít aspoň jeden kontextový odkaz i v těle, ne jen v závěrečném seznamu.
   - **Návrh:** Do pasáže o modelu / dostupnosti vložit jednu větu s kontextovým odkazem na článek o tom, co Google označoval za výchozí.

5. **DROBNÝ — formulace dostupnosti je přesná ve FAQ a úvodu, ale ve stats ztrácí datum odečtu**
   - **Citace:** `stats → "Česko i čeština jsou podle nápovědy mezi podporovanými"`
   - **Problém:** V textu a FAQ je správně uvedeno „čteno 17. srpna 2026“, ale ve stats datum chybí. U dostupnosti je datum zásadní.
   - **Návrh:** Doplnit i do stats stručné datum: „… podle nápovědy Googlu (čteno 17. 8. 2026)“.

6. **VÝZNAMNÝ — zůstává několik tvrzení bez zdroje a bez časového ukotvení**
   - **Citace:** `„Obvykle se zobrazuje jako samostatná záložka ve vyhledávání a v aplikaci Google.“`
   - **Problém:** „Obvykle“ je vágní, neříká podle čeho, kde a kdy. U refreshe zaměřeného na dostupnost je to slabé místo.
   - **Návrh:** Buď doložit primárním zdrojem / vlastním testem s datem a podmínkami, nebo změkčit a přesněji vymezit: „Google ho uvádí jako samostatný režim; konkrétní umístění rozhraní se může lišit podle účtu, zařízení a aplikace.“

7. **DROBNÝ — článek si místy protiřečí v míře jistoty kolem měření dopadu**
   - **Citace:** FAQ `„Proto je rozumné sledovat dopad v Search Console…“` vs. tabulka `„Proč se podíl nedá změřit | limity měření“`
   - **Problém:** Není to vyložený rozpor, ale bez dovysvětlení to může znít jako „měřte dopad“ a zároveň „nejde to změřit“. Hub by měl ten rámec sjednotit.
   - **Návrh:** V FAQ doplnit jednu větu: „Měřit lze jen nepřímé signály a celkový dopad, ne přesný podíl AI Mode jako samostatného kanálu.“

8. **VÝZNAMNÝ — hub už přebírá část obsahu článku o nejistotě AI Mode víc, než je nutné**
   - **Citace:** `„nápověda uvádí, že bez dost vysoké jistoty nabídne AI Mode místo odpovědi sadu odkazů na web“`
   - **Problém:** Samotné doplnění je správně, ale už obsahuje hlavní pointu specializovaného článku. U hubu stačí stručné rámování a poslat dál.
   - **Návrh:** Zkrátit na jednu větu typu: „AI Mode nevrací vždy AI odpověď; při nižší jistotě může přepnout do linkovější podoby výsledku. Podrobnosti a limity rozebírám zde …“

9. **DROBNÝ — frontmatter/metadata a tělo nejsou úplně sladěné v tematickém slibu**
   - **Citace:** `description: "rozdíl proti AI Overviews, princip query fan-out a úpravy obsahu..."` vs. tělo nově přidává dostupnost v Česku, nejistotu odpovědi, měření dopadu a cluster rozcestník.
   - **Problém:** Po refreshi je článek širší než metadata. Není to chyba faktická, ale hub se obsahově posunul a metadata to nereflektují.
   - **Návrh:** Upravit description tak, aby zahrnula i českou dostupnost / fungování výsledku, nebo naopak držet tělo těsněji u původního tutorial scope.

10. **DROBNÝ — hygiene / process nález mimo článek zůstává nevyřešený**
   - **Citace:** `Hygiena REFRESH_QUEUE … Doplnit HOTOVO.`
   - **Problém:** Není součástí článku, ale je to explicitně zadaný refresh úkol a podle podkladů není v dodaném výstupu nijak promítnut.
   - **Návrh:** V rámci uzavření refreshe odškrtnout `local-seo-cesko-2026`, `javascript-a-ai-roboti`, `ai-crawler-robots-txt` jako HOTOVO v REFRESH_QUEUE.