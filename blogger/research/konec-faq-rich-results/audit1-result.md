**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

- [BLOKER] `stats > "3 fáze" / "postupné vyřazení: rich results (květen), GSC report (červen), podpora v API (srpen 2026)"` → Ve frontmatteru to působí jako hotová, uzavřená časová osa. K 2026-07-11 je **srpen 2026 budoucnost**, takže formulaci změňte na: **„3 fáze — ukončení rozšířených výsledků (květen), odebrání reportu a testu (červen), avizovaný konec podpory v API (srpen 2026)“**.

- [BLOKER] `faq.a: "Podle avizované časové osy Googlu se v červnu 2026 odebírá FAQ report v Search Console i podpora v nástroji Rich Results Test..."` → U června 2026 je vhodnější minulý čas, protože jde o minulost. Návrh: **„...byl v červnu 2026 odebrán FAQ report v Search Console i podpora FAQ v nástroji Rich Results Test...“**. Zároveň druhou část nechte budoucí: **„v srpnu 2026 má skončit podpora ve Search Console API“**. Teď je věta časově smíchaná.

- [BLOKER] `“Rozšířený výsledek se nevrátí.”` → Absolutní tvrzení bez opory. Google může produktově změny přehodnotit. Změkčit na: **„Nic nenasvědčuje tomu, že by se FAQ rozšířené výsledky měly vrátit; ve veřejné dokumentaci Googlu je změna komunikovaná jako ukončení.“**

- [DOPORUČENÍ] `answer: "Google i AI systémy jako Perplexity ho dál čtou..."` → Fakticky v zásadě sedí, ale „Perplexity ho dál čtou“ je slabě doložitelné v této podobě. Lepší: **„FAQPage markup ale zůstává platný: Google ho podle veřejné dokumentace dál zpracovává k porozumění stránce a strukturované otázky s odpověďmi mohou být dobře čitelné i pro AI systémy.“** Neopírat se bez zdroje o konkrétní vendor claim.

- [DOPORUČENÍ] `faq.a: "Google potvrdil, že FAQ markup dál zpracovává..."` → Doplnit opatrnost: **„Podle veřejné dokumentace Google FAQ markup dál zpracovává pro porozumění stránce.“** Formulace „potvrdil“ je silnější než je nutné.

- [DOPORUČENÍ] `faq.a: "...čtou i AI systémy a jejich roboti, například u Perplexity nebo Copilotu."` → „například u Perplexity nebo Copilotu“ je bez přímého doložení nadsazené. Změna na: **„...mohou zpracovávat i AI systémy a jejich vyhledávací roboti.“** Pokud chcete uvádět značky, je vhodné je podložit.

- [KOSMETIKA] `stats: "0" / "dopadů na Vyhledávání, když nevyužitý markup na stránce zůstane (podle Googlu)"` → „0 dopadů“ je příliš absolutní. Návrh: **„bez přímého přínosu pro zobrazení FAQ ve výsledcích Vyhledávání; podle Googlu nevyužitý markup sám o sobě neškodí, pokud odpovídá obsahu“**.

- [DOPORUČENÍ] `title: "Konec FAQ rich results: co dělat v roce 2026"` → Délka je v normě a KW je vpředu, to je **OK**. Ale kvůli brand voice a srozumitelnosti zvažte počeštění termínu: **„Konec FAQ rozšířených výsledků: co dělat v roce 2026“** nebo kompromis **„Konec FAQ rich results (rozšířených výsledků): co dělat v roce 2026“**.

- [KOSMETIKA] `description: "Google 7. 5. 2026 zrušil FAQ rich results ve Vyhledávání..."` → Délka zřejmě sedí, ale slovo **„zrušil“** může být příliš tvrdé. Přesnější je **„ukončil zobrazování FAQ rozšířených výsledků ve Vyhledávání“**. Návrh: **„Google 7. 5. 2026 ukončil zobrazování FAQ rozšířených výsledků ve Vyhledávání. Co to znamená, proč FAQPage markup nechat a kdy ho naopak odstranit.“**

- [DOPORUČENÍ] `answer + první odstavec: "Google 7. května 2026 ukončil FAQ rich results..."` → Struktura je **v zásadě správně** a samostatně dává smysl. Doporučuji jen počeštit a definovat termín hned v první větě: **„FAQ rich results jsou rozšířené výsledky s rozklikávacími otázkami a odpověďmi ve Vyhledávání Google. Google jejich zobrazování 7. května 2026 ukončil, ale FAQPage markup zůstává platný...“** Tím ještě lépe splníte požadavek „začínat definicí“.

- [DOPORUČENÍ] `“FAQ rich results byly rozšířený výsledek”` → Gramaticky i terminologicky lépe: **„FAQ rich results byly typem rozšířeného výsledku“**.

- [KOSMETIKA] `“schema nikdy nebyla to hlavní”` a `“Schema nikdy nedělala tu práci...”` → Zakázaný/slabě vhodný slovník. Nahraďte **„schema“** za **„strukturovaná data“**. Např.: **„Klíčový nebyl samotný zápis strukturovaných dat, ale obsah.“**

- [DOPORUČENÍ] `“AI systémy ho parsují”` → Anglicismus. Nahraďte: **„AI systémy ho zpracovávají“** nebo **„AI systémy z něj umí číst strukturu otázek a odpovědí“**.

- [DOPORUČENÍ] `“čtou i roboti AI systémů”` → Bez kontextu je „roboti“ hraniční. Lepší: **„zpracovávat ho mohou i AI systémy a jejich vyhledávací roboti“**.

- [KOSMETIKA] `“do [krátkých citací](/blog/jak-ai-cituje-zdroje/)”` → Interní odkaz je tematicky **OK**, dává smysl.

- [KOSMETIKA] `[není potřeba žádná speciální strukturovaná data](/blog/aeo-geo-je-porad-seo/)` + `[strukturovaných datech pro AI](/blog/strukturovana-data-pro-ai/)` → Interní odkazy jsou **relevantní a dávají smysl**. Nález bez opravy.

- [DOPORUČENÍ] `“SERP dekoraci”` → Anglicismus. Nahraďte: **„dekoraci výsledků vyhledávání“**.

- [DOPORUČENÍ] `“AI viditelnost”` v tabulce → Není vyloženě problém, ale lze zpřesnit a počeštit bez buzzwordu: **„Čitelnost pro AI systémy“**.

- [DOPORUČENÍ] `“Jasně oddělené páry otázka–odpověď se dobře extrahují do AI odpovědí”` → „extrahují“ je technicistní. Vhodnější: **„...se dají snadno převzít do AI odpovědí“** nebo **„...AI z nich snadno přečte stručné odpovědi“**.

- [DOPORUČENÍ] `“Pro české AI Overviews i pro Seznam Asistenta dál pomáhá jasná struktura otázek a odpovědí.”` → Věcně možné, ale bez opory je to lehce široké tvrzení. Změkčit na: **„Jasná struktura otázek a odpovědí může pomáhat i v AI odpovědích a asistenčních rozhraních.“** Pokud chcete nechat konkrétní produkty, hodilo by se opřít se o zdroj nebo případovou zkušenost.

- [KOSMETIKA] `slug: "konec-faq-rich-results"` → Smysluplný, krátký, relevantní. **OK.**

- [KOSMETIKA] CTA na konci → Splňuje zadání velmi dobře: vede na **Audit 9 990 Kč** i **Pack 1 490 Kč** konkrétně. **OK.**

- [DOPORUČENÍ] `“Google 7. 5. 2026 ukončil FAQ rich results”` opakovaně v článku → Fakticky **OK**, ale kvůli konzistenci terminologie doporučuji první výskyt vždy ve tvaru: **„ukončil zobrazování FAQ rozšířených výsledků (FAQ rich results)“** a pak už používat zkráceně jednu variantu.

Shrnutí: článek je strukturou, CTA i interním prolinkováním povedený a hlavní teze jsou převážně správně. Před publikací ale opravte hlavně **časové ukotvení srpna 2026**, **několik absolutních tvrzení** a **anglicismy / nevhodný slovník**.