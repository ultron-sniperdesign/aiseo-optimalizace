1. **Blokující**  
   **Citace:** `faq -> "Jak se z AI Mode vrátím na klasické výsledky?" ... "V praxi bývá k dispozici přepnutí zpět na kartu Vše"`  
   **Problém:** Zadání výslovně říká, že nápověda návrat ani vypnutí neřeší a nemá se domýšlet postup. Tady se postup podsouvá.  
   **Návrh opravy:**  
   `Nápověda to neuvádí. Jak se vrátit na klasické výsledky nebo AI Mode vypnout, z podkladu k 13. 8. 2026 nedoložím.`

2. **Vážné**  
   **Citace:** `answer: "AI Mode je režim vyhledávání, ve kterém Google místo seznamu odkazů složí odpověď"`  
   **Problém:** Přehání. Podklad uvádí i případy, kdy AI Mode místo odpovědi nabídne sadu odkazů při nízké jistotě. Frontmatter to zjednodušuje tak, že to zní bezvýjimečně.  
   **Návrh opravy:**  
   `AI Mode je režim vyhledávání, ve kterém Google často skládá odpověď a může přidat odkazy na weby; při nižší jistotě může ukázat i samotnou sadu odkazů.`

3. **Vážné**  
   **Citace:** `faq -> "Na jednoduché navigační dotazy je to zbytečně těžký nástroj."`  
   **Problém:** To není doložené nápovědou. Podklad říká, na co je AI Mode určený, ale neříká, že je na navigační dotazy „zbytečně těžký nástroj“. To je autorský úsudek bez testu.  
   **Návrh opravy:**  
   `Podle nápovědy je určený hlavně pro otázky, které by dřív vyžadovaly víc hledání, například zkoumání nového tématu nebo porovnání možností.`

4. **Vážné**  
   **Citace:** `Nedává smysl: navigační dotazy typu jména webu, rychlé faktické ověření, hledání konkrétní stránky. Na to je seznam odkazů rychlejší.`  
   **Problém:** Nedoložené srovnání rychlosti a vhodnosti. Nápověda tohle explicitně netvrdí a článek není test funkce.  
   **Návrh opravy:**  
   `Google v nápovědě vyzdvihuje hlavně složitější otázky a porovnávání možností. U jiných typů dotazů dokumentace konkrétní doporučení neuvádí.`

5. **Vážné**  
   **Citace:** `Je tedy zabudovaná hranice, pod kterou Google raději odkáže, než odpoví.`  
   **Problém:** Formulace „zabudovaná hranice“ zní techničtěji a jistěji, než unese podklad. Nápověda jen říká „in some cases“ a „if there's not high enough confidence“.  
   **Návrh opravy:**  
   `Nápověda říká, že v některých případech AI Mode při nižší jistotě nabídne místo odpovědi sadu odkazů.`

6. **Vážné**  
   **Citace:** `Zkuste stejnou otázku jinak ... odpovědi se opravdu liší.`  
   **Problém:** Podklad dovoluje říct, že Google doporučuje ptát se ve více variantách. Tvrzení „odpovědi se opravdu liší“ už je zkušenost z testu, který autor podle limitů nedělal.  
   **Návrh opravy:**  
   `Zkuste stejnou otázku jinak, protože Google sám doporučuje položit dotaz ve více variantách.`

7. **Vážné**  
   **Citace:** `<Insight ...> "Různé formulace téže otázky vedou k různým odpovědím."` a `Mistake 03: "Různé formulace dají různé výsledky."`  
   **Problém:** Zase posun od rady v nápovědě k nedoloženému faktickému tvrzení.  
   **Návrh opravy:**  
   `Google doporučuje zkusit více variant otázky, aby uživatel dostal co nejlepší odpověď.`

8. **Vážné**  
   **Citace:** `<Insight tone="aio"... "Druhá rada platí i pro majitele webů"> ... "Kdo si ověřuje, jestli ho AI zmiňuje..."`  
   **Problém:** Skluz k SEO publiku uprostřed uživatelského vysvětlováku. Zadání chce text pro běžného uživatele Googlu; tohle rozbíjí cílení.  
   **Návrh opravy:** Celý insight odstranit, nebo přesunout jen do závěrečné sekce s odkazy pro majitele webů. Např.:  
   `Pokud řešíte vlastní web, podrobnosti k měření a viditelnosti najdete v navazujících článcích níže.`

9. **Drobné**  
   **Citace:** `Rozdělí si přitom váš dotaz na podotázky a hledá na každou zvlášť`  
   **Problém:** Volnější parafráze proti podkladu, který mluví o rozdělení na subtopics a současném hledání. „Na každou zvlášť“ může znít sekvenčně.  
   **Návrh opravy:**  
   `Rozdělí otázku na dílčí témata a vyhledává je současně.`

10. **Drobné**  
   **Citace:** `Co Google sám nepíše — třeba jak se vrátit zpátky.` a v těle `nebo ho vypnout`  
   **Problém:** Frontmatter/description zmiňuje jen návrat, tělo řeší i vypnutí. Není to rozpor, ale description neodpovídá plnému obsahu.  
   **Návrh opravy:**  
   `description: "Česko i čeština jsou v seznamu podporovaných. Co AI Mode umí, jak se k němu dostat a co o něm Google sám nepíše — třeba jak se vrátit na klasické výsledky nebo ho vypnout."`

11. **Drobné**  
   **Citace:** `To je dobrá rada, ne formalita.` a `To je rada od provozovatele, ne od skeptika.`  
   **Problém:** Vata a hodnotící dovětek bez informační hodnoty.  
   **Návrh opravy:** Obojí zkrátit. Např.:  
   `Google sám píše, že AI Mode nemá vždycky pravdu, a radí důležité informace ověřovat na víc místech a položit dotaz ve víc variantách.`

12. **Drobné**  
   **Citace:** `Otevřete google.com/ai ... Nic dalšího zapínat nemusíte.`  
   **Problém:** Zní absolutně. Podklad říká, že Labs není potřeba; neříká, že „nic dalšího“ nikdy není potřeba v konkrétním zařízení, účtu či aplikaci.  
   **Návrh opravy:**  
   `Otevřete google.com/ai nebo klikněte na tlačítko AI Mode ve výsledcích. Podle nápovědy k tomu není potřeba přihlášení do Labs.`