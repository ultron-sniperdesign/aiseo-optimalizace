**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

1. **[BLOCKER] Nedoložené a příliš široké tvrzení o „AI indexech“**
   - **Citace:** „**AI indexy se navíc srovnávají pomaleji než Google.**“ / „**AI indexy se po migraci obvykle srovnávají pomaleji než Google**“
   - **Problém:** Tvrzení je podané jako obecné pravidlo pro „AI systémy“, ale bez opory a bez upřesnění, o které služby jde. U různých systémů se zdrojová vrstva, frekvence obnovy i práce s URL liší. Takto formulované je to přehnané.
   - **Návrh opravy:** Změnit na opatrnější formulaci typu: „U některých AI služeb se změny po migraci mohou projevit později než v běžném vyhledávání a průběh se liší podle služby.“ Totéž sjednotit v `answer`, `stats`, tabulce, FAQ i závěrečné transparentní poznámce.

2. **[BLOCKER] Přehnané tvrzení o ztrátě pozic při 404**
   - **Citace:** „**smazaná adresa bez přesměrování znamená ztrátu pozic** i opory pro citace v AI“
   - **Problém:** 404 na původní URL často vede ke ztrátě signálů a propadu, ale „znamená“ je příliš absolutní. Navíc pokud je obsah záměrně odstraněn bez náhrady, nemusí být korektní očekávat zachování pozic.
   - **Návrh opravy:** „…může vést ke ztrátě signálů, propadu viditelnosti a ztrátě cíle pro dosavadní citace.“

3. **[BLOCKER] Nepřesnost kolem „citací v AI“ jako jednotného mechanismu**
   - **Citace:** „**AI systémy citují konkrétní adresy.**“
   - **Problém:** Ne všechny AI služby pracují stejně; některé zdroje zobrazují, jiné ne, některé odkazují na doménu, jiné na konkrétní URL. Tvrzení je moc univerzální.
   - **Návrh opravy:** „Mnohé AI služby při odpovědích zobrazují odkazy na konkrétní URL nebo zdrojové stránky. Když se adresa změní…“

4. **[BLOCKER] Anglicismus mimo povolený seznam**
   - **Citace:** „**checklisty**“, „**homepage**“, „**design**“ v části „Měnit adresy, design i obsah v jednom kroku.“
   - **Problém:** Zadání výslovně chce vše kromě povolených technických názvů česky.
   - **Návrh opravy:**  
     - „checklisty“ → „kontrolní seznamy“  
     - „homepage“ → „domovskou stránku“ / „úvodní stránku“  
     - „design“ → „vzhled webu“ nebo „grafiku a šablonu“

5. **[BLOCKER] Zakázané/slabě vhodné označení „roboti“ bez kontextu**
   - **Citace:** „**Web je živý, ale roboti se k němu nedostanou.**“
   - **Problém:** Podle zadání má být „crawler/bot“ bez kontextu nahrazeno výrazem „vyhledávací robot“. I když je zde česky „roboti“, je to zkratka bez kontextu.
   - **Návrh opravy:** „…ale vyhledávací roboti se k němu nedostanou.“

6. **[DOPORUČENÍ] Chybí důležitá technická nuance k robots.txt**
   - **Citace:** „Zkontrolujte robots.txt a kanonické adresy — z testovacího prostředí často zůstane zákaz procházení.“
   - **Problém:** Věcně správné, ale neúplné. Po migraci bývá stejně kritická i meta/directive `noindex`, nejen robots.txt. Článek se tváří jako praktický tutorial, ale tuto častou chybu opomíjí.
   - **Návrh opravy:** Doplnit vedle robots.txt i kontrolu `noindex` a kanonických adres směřujících omylem na testovací či staré URL.

7. **[DOPORUČENÍ] Nepřesné zjednodušení k 302**
   - **Citace:** „Použijte trvalé přesměrování 301, ne dočasné 302.“
   - **Problém:** Pro tutorial je to sice prakticky správné doporučení, ale příliš černobílé. Vyhledávače dnes umí některé dlouhodobé 302 interpretovat podobně jako trvalou změnu, byť to není vhodné spoléhat při migraci.
   - **Návrh opravy:** „Při trvalé migraci používejte 301. Dočasné 302 je pro tento případ nevhodné, protože může zdržet převzetí nové adresy.“

8. **[DOPORUČENÍ] Chybí explicitní zmínka o soft 404 u hromadného svedení na úvodní stránku**
   - **Citace:** „Hromadné svedení starých adres na úvodní stránku vyhledávače obvykle vyhodnotí jako chybu…“
   - **Problém:** Zadání výslovně upozorňuje na soft 404. Tady je to naznačeno, ale nepojmenováno. U tutorialu je škoda neříct přesně, co se děje.
   - **Návrh opravy:** Doplnit: „…a může to vyhodnotit jako soft 404 nebo nerelevantní přesměrování.“

9. **[DOPORUČENÍ] Chybí zmínka, že interní odkazy mají po spuštění mířit už přímo na nové URL**
   - **Citace:** V článku se řeší přesměrování, sitemap, robots.txt, ale ne interní odkazy.
   - **Problém:** V úvodu je sice uvedeno „interní odkazy“, ale samotný návod nekontroluje, zda po migraci nezůstaly odkazy vedoucí přes 301. To je pro tento konkrétní článek relevantní.
   - **Návrh opravy:** Přidat do checklistu nebo části „Po spuštění“ bod: „Zkontrolujte interní odkazy a navigaci, aby vedly přímo na nové adresy, ne přes přesměrování.“

10. **[DOPORUČENÍ] IndexNow/Bing je zmíněn jen okrajově, ale bez vyjasnění přínosu**
    - **Citace:** „Pokud jedete i na Bing, hodí se oznámit změny přes IndexNow…“
    - **Problém:** Formulace „hodí se“ je vágní. V kontextu zadání by bylo lepší přesně říct, co to dělá a co naopak nezaručuje.
    - **Návrh opravy:** „Pokud cílíte i na Bing, můžete změny URL oznámit přes IndexNow. Může to urychlit objevování změn v ekosystému Bingu, ale samo o sobě to negarantuje rychlé přepsání všech signálů.“

11. **[DOPORUČENÍ] „Návštěvnost z AI“ není v článku metodicky ukotvená**
    - **Citace:** „Zaznamenejte návštěvnost…“, „Návštěvnost z AI — jestli neklesla…“
    - **Problém:** U tutorialu to působí, jako by šlo o standardní snadno měřitelnou metriku. Ve skutečnosti záleží na konkrétní analytice a segmentaci referrerů. Bez vysvětlení je to lehce mlhavé.
    - **Návrh opravy:** Upřesnit „pokud ji měříte“ nebo „pomocí vlastních segmentů/referrerů“. Tím se sníží riziko přehnaného zjednodušení.

12. **[DOPORUČENÍ] První odstavec je dobrý, ale poslední věta ho oslabuje vatou**
    - **Citace:** „Tento návod shrnuje, co ohlídat před migrací, při ní a po ní — s důrazem na vrstvu, kterou klasické checklisty ještě neřeší.“
    - **Problém:** `answer` i první odstavec mají fungovat samostatně. První dvě věty fungují dobře, třetí je spíš promo k článku a přidává nejasné „vrstvu, kterou klasické checklisty ještě neřeší“.
    - **Návrh opravy:** Nahradit konkrétním faktem, například: „Po spuštění je potřeba zkontrolovat i to, zda staré adresy dál vedou na odpovídající obsah a zda nová verze nezablokovala procházení nebo indexaci.“

13. **[DOPORUČENÍ] SEO: title je na hraně délky a nezačíná hlavním klíčovým slovem**
    - **Citace:** `title: "Migrace a redesign webu: jak udržet AI viditelnost"`
    - **Problém:** Titulek je použitelný, ale pro cílové KW by bylo silnější mít na začátku „Migrace webu SEO“ nebo „Redesign webu SEO“. Současná verze míří víc na obecné téma než na hlavní dotaz.
    - **Návrh opravy:** Zvážit variantu typu „Migrace webu SEO: jak udržet AI viditelnost“ nebo „Redesign webu SEO: jak nepřijít o AI viditelnost“.

14. **[DOPORUČENÍ] SEO: slug neobsahuje hlavní dotaz**
    - **Citace:** `slug: "ai-seo-migrace-redesign"`
    - **Problém:** Slug je srozumitelný, ale méně přesně cílí na hlavní klíčová slova než by mohl.
    - **Návrh opravy:** Zvážit např. `migrace-webu-seo-redesign` nebo `migrace-webu-seo-ai-viditelnost`.

15. **[KOSMETIKA] Meta description je věcně dobrý**
    - **Citace:** `description: "Při migraci nebo redesignu webu hrozí ztráta pozic i citací v AI. Checklist: mapa URL, přesměrování 301, strukturovaná data, robots.txt a měření po spuštění."`
    - **Hodnocení:** Délka i obsah jsou v pořádku. Jen pozor na anglicismus „Checklist“.
    - **Návrh opravy:** „Při migraci nebo redesignu webu hrozí ztráta pozic i citací v AI. Co zkontrolovat: mapa URL, přesměrování 301, strukturovaná data, robots.txt a měření po spuštění.“

16. **[KOSMETIKA] FAQ je silná a většinou sebestačná**
    - **Citace:** zejména „Proč použít 301 a ne 302?“ a „Co zkontrolovat hned po spuštění?“
    - **Hodnocení:** FAQ je praktické, otázky jsou reálné a odpovědi samostatně dávají smysl. To je dobře.
    - **Návrh opravy:** Jen zpřesnit odpověď o rychlosti projevu v AI podle bodu 1 a doplnit `noindex` podle bodu 6.

17. **[KOSMETIKA] CTA je správně konkrétní**
    - **Citace:** závěr s „Pack za 1 490 Kč“ a „audit za 9 990 Kč“
    - **Hodnocení:** Splňuje zadání, není generický a navazuje na téma článku.
    - **Návrh opravy:** Není nutná, maximálně lehce zkrátit první větu pro větší údernost.

18. **[KOSMETIKA] Konzistence termínů**
    - **Citace:** střídání „pozice“, „viditelnost“, „indexace“, „citace“
    - **Problém:** Nejde o chybu, ale místy se míchají různé typy dopadu bez rozlišení.
    - **Návrh opravy:** U dvou až tří míst zpřesnit, zda jde o organické pozice, indexaci URL nebo odkazy/zdroje v AI odpovědích.

**Shrnutí:** Článek je obsahově nadprůměrně použitelný, technický základ je z velké části správně a CTA i struktura fungují. Před publikací ale potřebuje opravit hlavně příliš obecné výroky o „AI indexech“, několik absolutních formulací a anglicismy mimo povolený seznam. Po těchto úpravách bude publikovatelný.