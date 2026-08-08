1. **[KRITICKÁ] Frontmatter `answer` + úvodní perex → přisuzuje měřený závěr i Upgates → navržené znění:**  
   Problém: `answer` říká „Technický základ mají obě platformy z velké části hotový…“ a hned poté navazuje čísly ze Shoptetu. To je přesně typ smíchání, kdy čtenář snadno přisoudí datově podložený stav oběma platformám. U Upgates ale nemáte měření.  
   **Navržené znění:**  
   `answer: "Na Shoptetu jsme na 47 e-shopech ověřili, že technický základ pro AI SEO je z velké části hotový, jen jinak, než se obvykle popisuje: produktová data jdou v microdatech a povinné vlastnosti podle Googlu splňuje každý měřený obchod. Upgates jsme v tomto rozsahu neměřili, takže u něj vycházíme z dokumentace a praxe. U obou platforem pak platí, že práci navíc dělá hlavně obsah: citovatelné popisy, FAQ a recenze."`

2. **[KRITICKÁ] H1 + první věta článku → „Technický základ mají obě platformy…“ je silnější, než data unesou → navržené znění:**  
   Problém: Úvod staví obě platformy vedle sebe jako rovnocenně podložené. Insight sice později asymetrii vysvětluje, ale až ex post. Působí to jako alibi po příliš silném tvrzení.  
   **Navržené znění:**  
   `Technický základ má na změřeném vzorku Shoptet z velké části hotový — jen jinak, než se obvykle píše. U Upgates to v tomhle článku netvrdíme na základě měření, ale opíráme se jen o dokumentaci a praktickou zkušenost.`

3. **[VYSOKÁ] Frontmatter `description` → „Co doplnit obsahem, platí pro obě platformy“ je příliš plošné → navržené znění:**  
   Problém: Tohle může být pravda jako obecné doporučení, ale bez opory v měření Upgates zní kategoricky. Lepší je oddělit univerzální doporučení od datové části.  
   **Navržené znění:**  
   `description: "Shoptet jsme změřili na 47 e-shopech: technický základ je z větší části hotový, ale jinak, než se čeká. Upgates v tomto článku měřený nemáme; obsahová doporučení proto berte jako obecně platná pro e-shopy, ne jako výsledek měření obou platforem."`

4. **[VYSOKÁ] Sekce „AI SEO na Upgates a Shoptetu: kde je práce hotová a kde teprve začíná“ → titulkem sugeruje plnohodnotné srovnání → navržené znění:**  
   Problém: Nadpis a framing pořád slibují srovnávací článek o dvou platformách, ale ve skutečnosti jde primárně o refresh článku „Shoptet změřen, Upgates ne“. To je obsahově asymetrické.  
   **Navržené znění:**  
   `## AI SEO na Shoptetu a orientačně i na Upgates: co víme z měření a co jen z praxe`

5. **[VYSOKÁ] CompareTable „Upgates vs Shoptet“ → vedle sebe staví měřené a neměřené body bez dost silného rozlišení → navržené znění:**  
   Problém: Tabulka vizuálně sugeruje symetrické porovnání. Jen u jednoho řádku je „neměřili jsme“, jinde jsou u Upgates tvrzení („Větší volnost“, „Snadnější přes vlastní HTML“, „v administraci, možnosti podle tarifu“) bez zdroje a bez štítku „z praxe/dokumentace“.  
   **Navržené znění:**  
   - přejmenovat tabulku na: `Co víme o obou platformách: Shoptet z měření, Upgates z dokumentace a praxe`  
   - přepsat hodnoty u Upgates:  
     - `Editace šablon: "Podle dokumentace a praxe obvykle větší volnost; nemáme ověřeno na vzorku"`  
     - `Doplnění FAQ ve strukturovaných datech: "Pravděpodobně snazší přes vlastní HTML, ale bez měření na vzorku"`  
     - `robots.txt: "Možnosti podle tarifu a nastavení; bez vlastního měření"`  

6. **[VYSOKÁ] FAQ „Jak nastavit robots.txt v Upgates a Shoptetu pro AI roboty?“ → míchá přesnou instrukci pro Shoptet s vágním tvrzením pro Upgates → navržené znění:**  
   Problém: Otázka je položena pro obě platformy, ale odpověď je fakticky jen o Shoptetu. U Upgates je jen dovětek. To vytváří falešný dojem srovnatelného pokrytí.  
   **Navržené znění:**  
   `q: "Jak nastavit robots.txt na Shoptetu — a co v tomhle článku víme o Upgates?"`  
   `a: "Na Shoptetu je pole podle nápovědy ve Vzhled a Obsah → Editor → HTML kód, vložený text se přidává na konec souboru a limit je 8 192 znaků... U Upgates tady konkrétní postup nepopisujeme, protože jsme ho v rámci tohoto článku neměřili a neověřovali na vzorku veřejných e-shopů."`

7. **[VYSOKÁ] Věta „Technický základ je jen startovní čára. AI systémy potřebují…“ → obecně v pořádku, ale v článku funguje jako překlenutí od měření Shoptetu k doporučením pro obě platformy bez dost jasného přechodu → navržené znění:**  
   Problém: Čtenář může nabýt dojmu, že následující doporučení plynou z měření obou platforem.  
   **Navržené znění:**  
   `Technika je na změřeném Shoptetu jen startovní čára. Následující obsahová doporučení nejsou specificky změřená pro Upgates ani Shoptet; berte je jako obecná doporučení pro e-shopy, které chtějí být lépe použitelné pro AI vyhledávání.`

8. **[STŘEDNÍ] Checklist „Vyplní platforma… Tady nemáte co řešit.“ → tvrzení silnější než data unesou → navržené znění:**  
   Problém: Z měření víte, že pole byla ve výstupu přítomná. Nevíte vždy jistě, že „nemáte co řešit“ ve všech implementacích a situacích. Navíc sami o odstavec níž říkáte, že rozdělení podle původu dat je vaše interpretace.  
   **Navržené znění:**  
   `Vyplní platforma: kategorie, dopravné, adresa nabídky (38 z 38), stav zboží (37) a dostupnost (36). Ve změřeném vzorku to fungovalo většinou bez zásahu; u vlastního e-shopu je ale stejně dobré výstup zkontrolovat.`

9. **[STŘEDNÍ] FAQ „Z doporučených je skoro vždy kategorie, dopravné a dostupnost.“ → nepřesné vůči části A → navržené znění:**  
   Problém: V části A je dostupnost 36/38, stav zboží 37/38, popis 35/38. „Skoro vždy“ je neurčité a navíc zrovna opomíjí adresa nabídky 38/38, která do textu patří.  
   **Navržené znění:**  
   `Z doporučených byly ve vzorku vždy kategorie, dopravné a adresa nabídky (38 z 38), téměř vždy stav zboží (37 z 38) a dostupnost (36 z 38).`

10. **[STŘEDNÍ] „Filtry jsou ošetřené, stránkování ne.“ → část tvrzení není v části A explicitně doložená v této zkratce → navržené znění:**  
    Problém: V A máte pro kategorie a stránkování konkrétní čísla, ale o „filtrované adresy kryje robots.txt a většinou na ně ani nevede odkaz“ tu detailní oporu v tomto briefu nemáte. Možná je v odkazovaném dílu, ale v rámci tohoto auditu jde o tvrzení nad rámec dodaných dat.  
    **Navržené znění:**  
    `Kategorie a stránkování mají na Shoptetu smysluplný základ, ale ne bez výhrad. Na 46 z 46 kategorií jsme viděli self-canonical a index,follow; druhá strana kategorie naopak neměla rel=canonical ani u jednoho ze 30 měřených případů.`

11. **[STŘEDNÍ] „Kategorie to potřebuje o to víc, že o sortimentu ve strukturovaných datech nic neříká.“ → formulace je příliš absolutní → navržené znění:**  
    Problém: Podle A platí, že na 14 měřených kategoriích nebyl `ItemList/CollectionPage/Product`. Tvrzení „nic neříká“ je ale absolutní a může být čteno obecně pro všechny možné signály stránky.  
    **Navržené znění:**  
    `Kategorie to potřebuje o to víc, že v námi měřeném vzorku kategorií se o sortimentu nepropsala žádná užitečná strukturovaná data typu ItemList, CollectionPage ani Product.`

12. **[STŘEDNÍ] Sekce „Co dál: zasaďte AI SEO eshopu do celku“ → „Upgates i Shoptet jsou pro AI SEO použitelný základ.“ → nepodložené pro Upgates → navržené znění:**  
    Problém: Tohle je znovu datový závěr pro obě platformy, když u jedné žádná data nemáte.  
    **Navržené znění:**  
    `Shoptet je podle našeho měření pro AI SEO použitelný základ. U Upgates to v tomhle článku nehodnotíme na základě měření; prakticky ale i tam bude rozdíl dělat hlavně obsah a reputace.`

13. **[STŘEDNÍ] Frontmatter `stats` → celek je v zásadě správný, ale štítek „neměřeno“ u Upgates je slabší než zbytek čísel → navržené znění:**  
    Problém: Vedle tvrdých statistik působí „neměřeno“ jako kosmetické vyvážení. Chybí explicitní vysvětlení proč a co z toho plyne.  
    **Navržené znění:**  
    `label: "Upgates — v článku bez vlastního měření; závěry pro tuto platformu nejsou datové, ale opřené o dokumentaci a praxi"`  

14. **[STŘEDNÍ] FAQ „Proč je v článku změřený Shoptet a ne Upgates?“ → obranné, ale pozdní; asymetrie je sice přiznaná, stále však působí jako dodatečné krytí → navržené znění:**  
    Problém: Samotná FAQ je v pořádku, ale měla by být posunutá výš i do hlavního textu jako samostatná krátká sekce před jakýmkoli srovnáváním.  
    **Navržené znění do těla článku před CompareTable:**  
    `## Co v tomto článku srovnáváme — a co ne`  
    `Shoptet je v článku podložený vlastním měřením. U Upgates nepřidáváme čísla ani "stejné" závěry, protože jsme nesehnali srovnatelný vzorek veřejných e-shopů. Kde níž mluvíme o Upgates, jde o praktickou zkušenost a dokumentaci, ne o měření.`

15. **[STŘEDNÍ] „Práce navíc leží jinde: v obsahu a v pár polích, která platforma sama nevyplní.“ → u „platforma“ není jasné, že jde o Shoptet → navržené znění:**  
    Problém: V kontextu článku o dvou platformách se z jednotného čísla stává zdroj nejasnosti.  
    **Navržené znění:**  
    `Na změřeném Shoptetu leží práce navíc hlavně v obsahu a v několika polích, která se sama negenerují.`

16. **[NIŽŠÍ] Nekonzistence frontmatter vs tělo v míře jistoty o Upgates → frontmatter mluví jistěji než tělo → navržené znění:**  
    Problém: Tělo má aspoň varovný Insight, ale frontmatter je indexovatelný výtah a musí být ještě opatrnější než text. Teď je to naopak.  
    **Navržené znění:**  
    Sjednotit title/description/answer tak, aby žádný z těchto prvků netvrdil nic datového o Upgates. Např. title:  
    `AI SEO pro Shoptet 2026 + co obecně řešit i na Upgates: hotové vs. doplnit`

17. **[NIŽŠÍ] Článek je po refreshi stále obsahově tenký na srovnávací kus série → chybí konkrétní bloky, které by z něj udělaly silnější díl → navržené doplnění:**  
    Problém: Narostl jen z 1 023 na 1 135 slov, což je kosmetika. Jako refresh nejslabšího dílu série je to pořád tenké, protože velkou část délky zabírají disclaimery a rekapitulace Shoptetu. Chybí skutečná přidaná hodnota pro čtenáře, který přišel kvůli „Upgates a Shoptet“.  
    **Navržené doplnění:**  
    - samostatná sekce `Jak si Upgates ověřit bez našeho měření` s 5–7 kontrolními body: hledat Product v HTML/JSON-LD, ověřit robots.txt, canonical na kategoriích, indexace stránkování, přítomnost FAQ schema, kontrola značky/EAN/sku  
    - samostatná sekce `Co z měření Shoptetu je pravděpodobně přenositelné a co ne`  
    - konkrétní mini-audit postup pro obě platformy: produkt, kategorie, robots, recenze, FAQ  
    - explicitní „co nevíme“ box pro Upgates, aby text působil poctivěji a současně užitečněji

18. **[NIŽŠÍ] Chybí konkrétní vysvětlení, proč vůbec Upgates v článku zůstává, když není měřen → navržené znění:**  
    Problém: Bez této kotvy může článek působit jako SEO landing na druhou značku, ne jako poctivě omezené srovnání.  
    **Navržené znění do úvodu:**  
    `Upgates v článku necháváme proto, že čtenáři často řeší volbu mezi oběma platformami. Abychom ale nesimulovali přesnost, oddělujeme níž to, co víme z měření Shoptetu, od toho, co lze pro Upgates říct jen obecně.`

19. **[NIŽŠÍ] „Volba platformy není to, co rozhoduje o AI viditelnosti.“ → příliš silné a zbytečně široké → navržené znění:**  
    Problém: To už je obecný strategický soud bez opory v datech článku.  
    **Navržené znění:**  
    `Sam