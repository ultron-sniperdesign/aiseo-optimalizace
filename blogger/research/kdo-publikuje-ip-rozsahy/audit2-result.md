1. **Střední — frontmatter `description` je v jedné části silnější, než co text měří**
   - **Citace:** `description: "Prošel jsem 13 provozovatelů. Osm dává strojově čitelný soubor, Amazon HTML stránku, u čtyř jsem seznam nenašel. A stáří se liší skoro o tři roky."`
   - **Problém:** Druhá věta je v pořádku, ale první půlka „Osm dává strojově čitelný soubor, Amazon HTML stránku“ zní jako vlastnost provozovatelů obecně, zatímco v těle je metodicky přesnější formulace „v tomhle měření jsem našel“. Není to vyloženě chyba, ale po opravách v těle je metadata o chlup kategoric­kej­ší než článek.
   - **Návrh:** Sjednotit s tělem, např. „U osmi jsem našel strojově čitelný soubor, u Amazonu HTML stránku…“

2. **Nízká — v úvodu je lehké metodické zkratkování mezi „provozovatelé“ a „soubory“**
   - **Citace:** „Tak jsem si prošel třináct provozovatelů a osmnáct souborů… Osm ho má ve strojově čitelné podobě…“
   - **Problém:** Metodický odstavec to pak vysvětlí dobře, ale tahle věta před vysvětlením může na první čtení mást: měření je postavené nad 18 kandidátními adresami / 13 nalezenými soubory u 8 provozovatelů, ne prostě nad „18 soubory“ jako danými entitami od začátku.
   - **Návrh:** Drobná úprava na „…prošel třináct provozovatelů a osmnáct kandidátních adres souborů…“

3. **Nízká — Meta je teď podaná fér, jen jedna formulace je těsně u hrany interpretace**
   - **Citace:** „Kdo chce to doporučení splnit, musí si o podklad napsat.“
   - **Problém:** Oproti původní verzi je to výrazně lepší a v zásadě sedí. Jen „musí“ je o něco silnější než doložené minimum: z textu plyne, že v dokumentaci je odkaz na kontaktní e-mail a veřejný seznam v ní není. To velmi pravděpodobně znamená, že si o podklad musí napsat, ale pořád je to krok interpretace navíc.
   - **Návrh:** Pokud chcete být úplně přísný, změnit na „podle té dokumentace si o podklad musí napsat“ nebo „veřejně dostupný podklad z ní nezíská jinak než přes kontakt“.

4. **Nízká — sebereflexe už není přeplácaná, ale dvě vrstvy opravy říkají podobnou věc**
   - **Citace:** sekce „Amazon publikuje. Skoro jsem napsal, že ne“, box „Oprava dvou mých starších tvrzení“ a závěrečné „Tři chyby…“
   - **Problém:** Už to nepůsobí přehnaně, protože každá část má jinou funkci: metodické poučení, oprava staršího textu, praktické chyby. Přesto se motiv „hledal jsem špatně / konvence není dokumentace“ opakuje na hraně únosnosti.
   - **Návrh:** Není nutný zásah. Pokud by se mělo krátit, začal bych lehkým zestručněním boxu „Oprava dvou mých starších tvrzení“, ne metodické sekce o Amazonu.

5. **Bez nálezu — hlavní riziko „nenašel jsem“ → „neexistuje / nepublikuje“ je po opravách zvládnuté**
   - **Citace:** „Nenalezený znamená, že jsem na těch adresách takový soubor nedostal; nic víc.“ / „U všech čtyř platí, že jsem seznam nenašel — netvrdím, že neexistuje.“ / „…nenašli jste ho — a to je něco jiného než že neexistuje.“
   - **Posouzení:** Tohle je teď konzistentní v metodice, FAQ, těle i shrnutí. Překlopení jsem v článku už nenašel.

6. **Bez nálezu — metodický odstavec už nese pointu článku**
   - **Citace:** „Sestavil jsem 18 kandidátních adres… část z dokumentace… část z konvence… Za nalezený jsem počítal jen… platný JSON… Nenalezený znamená… nic víc. Amazon do těch osmnácti kandidátů… nepatřil…“
   - **Posouzení:** To podstatné tam teď je: co byl vzorek, jak vznikl, co je kriterium nálezu, co znamená nenález, proč je Amazon mimo osmnáctku. Na metodickou pointu článku to stačí.

7. **Bez nálezu — čísla drží pohromadě**
   - **Citace a kontrola:**
     - **13 z 18**: tabulka má 13 nalezených strojově čitelných souborů, metodika vysvětluje 18 kandidátních adres.
     - **8 provozovatelů**: Google, OpenAI, Anthropic, Perplexity, Apple, Microsoft, Common Crawl, DuckDuckGo.
     - **2 512 prefixů**: součet tabulky sedí.
     - **1 019 dní**: odpovídá Applebotu v tabulce i textu.
     - **1 IPv6 mimo Google**: odpovídá CCBotu v tabulce i FAQ/checklistu.
   - **Posouzení:** Vnitřně konzistentní.

8. **Bez nálezu — frontmatter a tělo si teď zásadně neprotiřečí**
   - **Citace:** `answer`, `description`, FAQ, Shrnutí.
   - **Posouzení:** Po věcné stránce sedí: 8 strojově čitelných, Amazon zvlášť, 4 nenalezené, stáří 0 až 1 019 dní. Jediná drobnost je stylistická tvrdost `description` z bodu 1, ne věcný rozpor.

## Verdikt

Druhé kolo dopadlo dobře. Hlavní metodická chyba z prvního auditu je opravená a už se mi nepodařilo najít místo, kde by text z „nenašel jsem“ znovu sjížděl do „neexistuje“ nebo „nepublikuje“ u těch problematických případů. Metodika je už dost jasná na to, aby unesla pointu článku, Meta je podaná férově a čísla drží.

Za mě jen **drobné dočištění formulací v `description` a případně jedné větě o Metě**. Jinak je text po opravách publikovatelný.