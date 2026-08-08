1. **[STŘEDNÍ] Frontmatter `title` → titulek je mírně nadsazený a může působit clickbaitově / eticky neukotveně → navržené znění:**  
   Problém: „**Sám jsem se vydával za pět**“ je sice opřené o text, že autor poslal požadavky pod jmény pěti robotů, ale formulace je expresivní a bez upřesnění může evokovat něco širšího než pouhé nastavení `User-Agent`. Navíc článek pracuje s podvrženým UA vůči cizím webům; to samo o sobě není nutně neetické, ale v titulku by mělo být zřejmé, že šlo jen o test hlavičky z běžné IP, nikoli o plnohodnotné „vydávání se“ za cizí infrastrukturu.  
   **Navržené znění:**  
   - „Blokujete AI robota podle jména? Poslal jsem požadavky s user-agentem pěti robotů“  
   nebo stručněji  
   - „Blokujete AI robota podle jména? Otestoval jsem pět podvržených user-agentů“

2. **[STŘEDNÍ] Perex / `description` / `answer` / úvodní teze → tvrzení „ověřit se to dá jen proti IP rozsahům“ je silnější, než unesou data i primární zdroje → navržené znění:**  
   Problém: V článku i frontmatteru je opakovaně formulace typu „**ověřit robota jde jen proti seznamu IP rozsahů provozovatele, u Googlu navíc reverzním DNS**“. To je moc absolutní. Už část B sama říká, že u Googlu existují **dvě** dokumentované cesty: DNS i porovnání s rozsahy. „Jen proti IP rozsahům“ je tedy v rozporu s primárním zdrojem, pokud není omezeno na ne-Google provozovatele.  
   **Navržené znění:**  
   - `description`: „… Ověření se u většiny provozovatelů opírá o oficiální seznamy IP rozsahů, u Googlu je navíc dokumentované i přes reverzní a zpětný DNS.“  
   - `answer`: „… Ověření robota se u většiny provozovatelů opírá o seznam IP rozsahů; u Googlu lze navíc použít reverzní a zpětný DNS.“

3. **[STŘEDNÍ] Úvod těla: „A přesto mě 47 webů obsloužilo jako AI robota.“ → tvrzení silnější než data → navržené znění:**  
   Problém: Z dat plyne, že 47 webů vrátilo HTTP 200 na homepage při požadavku s podvrženým UA z běžné IP. Z toho ale neplyne, že weby autora „**obsloužily jako AI robota**“ v nějakém silnějším smyslu; jen neodlišily / neblokovaly požadavek na základě identity robota.  
   **Navržené znění:**  
   - „A přesto všech 47 webů na takový požadavek odpovědělo.“  
   případně  
   - „A přesto ani jeden z 47 webů ten požadavek neodmítl jen proto, že user-agent neseděl k IP.“

4. **[STŘEDNÍ] Sekce „Jmenovka není průkaz“ → „Ověřit robota jde jen podle toho, odkud přišel.“ → příliš absolutní formulace → navržené znění:**  
   Problém: Tvrzení je širší, než dokládá článek. Článek ve skutečnosti ukazuje, že **samotný user-agent nestačí** a že dostupná praktická metoda je obvykle ověření podle IP / u Googlu DNS. Formulace „jen podle toho, odkud přišel“ je příliš kategorická a ignoruje, že se objevují i jiné mechanismy (v článku zmíněné Web Bot Auth, byť zatím nevyzrálé).  
   **Navržené znění:**  
   - „Samotný user-agent nestačí. V dnes běžně dostupné praxi se ověření opírá hlavně o zdrojovou IP adresu a u Googlu i o DNS.“

5. **[DROBNÁ] Frontmatter `stats[1]` → „8–1056“ není nekorektní, ale je nejasné, co přesně srovnává → navržené znění:**  
   Problém: V datech je minimum 4 (Perplexity-User), ne 8. Hodnota 8–1056 sedí jen pokud autor implicitně myslí „jednotlivé provozovatele“ a bere minimum z agregovanějších položek, ne ze všech 10 souborů. Label ale mluví o „**jednotlivých provozovatelích**“, zatímco tabulka je po souborech/zdrojích. To je nejasné a může mást.  
   **Navržené znění:**  
   - pokud chce srovnávat všech 10 souborů: „4–1 056“ / „rozsah počtu prefixů v 10 oficiálních souborech“  
   - pokud chce srovnávat značky/služby: „8–1 056“ / „rozsah počtu prefixů v publikovaných seznamech jednotlivých služeb, které jsem porovnával“

6. **[DROBNÁ] Frontmatter `stats[2]` a FAQ o IPv6 → číselně sedí, ale formulace „1 z 5 provozovatelů“ zamlčuje, že Google má tři separátní seznamy → navržené znění:**  
   Problém: Není to faktická chyba; s částí A je to konzistentní. Jen je vhodné být přesnější, protože článek jinde pracuje s „deseti soubory“.  
   **Navržené znění:**  
   - „IPv6 zveřejňuje jen 1 z 5 sledovaných provozovatelů — Google, a to ve všech třech svých seznamech.“

7. **[KRITICKÁ] Úvod článku: výčet „pěti AI robotů — GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot a CCBot“ → rozpor s podklady a pravděpodobná věcná chyba → navržené znění:**  
   Problém: V části B je výslovně uvedeno, že dřívější článek testoval user-agenty **pěti AI robotů**, ale v části A mezi měřenými oficiálními seznamy CCBot vůbec není. CCBot navíc není v tomto článku mezi „pěti provozovateli“, proti nimž autor ověřuje rozsahy. Jestli dřívější článek skutečně pracoval s CCBotem, pak zde spojení „pět AI robotů“ koliduje s rámcem článku „OpenAI, Anthropic, Perplexity, Google, Apple“. Pokud CCBot nebyl součástí těch 47/47, je to přímá chyba; pokud byl, je potřeba vysvětlit, proč se zde řeší jen 4 z těch 5 UA z předchozího testu a proč Apple naopak v měření rozsahů je, ale v testu UA nefiguruje.  
   **Navržené znění:**  
   - pokud v původním testu opravdu byl CCBot: „… pod jmény pěti robotů — GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot a CCBot. Tento článek ale ověřuje IP seznamy jen u provozovatelů, kteří je pro své AI roboty publikují v dnes dohledatelné dokumentaci.“  
   - pokud to má být konzistentní s tímto článkem: upravit výčet na roboty, které skutečně odpovídají zkoumaným seznamům.

8. **[STŘEDNÍ] „Provozovatelé kvůli tomu zveřejňují seznamy svých IP rozsahů. Vzal jsem je všechny…“ → „všechny“ je příliš široké → navržené znění:**  
   Problém: Autor vzal deset souborů od pěti vybraných provozovatelů, ne „všechny“ seznamy všech relevantních AI robotů na webu. Absolutní „všechny“ je zbytečně silné.  
   **Navržené znění:**  
   - „Vzal jsem všechny oficiální seznamy od pěti provozovatelů, které v článku srovnávám.“

9. **[STŘEDNÍ] Sekce „Co jsem naměřil“ → „Pokud vám robot přijde přes IPv6, proti těmhle souborům ho neověříte.“ → příliš kategorické → navržené znění:**  
   Problém: Data A ukazují, že mimo Google nejsou v seznamech IPv6 prefixy. To opravňuje tvrdit, že ho **neověříte proti těmto konkrétním seznamům**. Neopravňuje to obecnější tvrzení bez dovětku, protože mohou existovat jiné ověřovací cesty nebo pozdější změny.  
   **Navržené znění:**  
   - „Pokud vám robot mimo Google přijde přes IPv6, proti těmto zveřejněným seznamům ho typicky neověříte.“

10. **[DROBNÁ] „Stáří se liší v řádu let“ → stylisticky na hraně přesnosti → navržené znění:**  
    Problém: Z dat vyplývá rozdíl mezi 2023-10-27 a 2026-08-07, tedy necelé tři roky; formulace je obhajitelná, ale přesnější by bylo mluvit o rozdílu „od dnů po téměř tři roky“ nebo „od měsíců po roky“.  
    **Navržené znění:**  
    - „Stáří se liší od aktualizace v den měření po soubor starý bezmála tři roky.“

11. **[STŘEDNÍ] „Robot, který jde na váš web proto, že se ho někdo na něco zeptal, chodí z mnohem širší sítě.“ → kauzální interpretace nad rámec dat → navržené znění:**  
    Problém: Data ukazují, že seznamy „user-triggered“ mají více prefixů než crawlerové seznamy. Neprokazují ale příčinu ani reálné chování v terénu; autor sám v limitech píše, že měřil, co provozovatelé zveřejňují, ne odkud roboti opravdu chodí.  
    **Navržené znění:**  
    - „V publikovaných seznamech mají user-triggered roboti výrazně širší adresní rozsahy než crawlerové boty.“  
    případně  
    - „To naznačuje širší síť pro požadavky vyvolané uživatelem, ale sám jsem reálný provoz z těch rozsahů netestoval.“

12. **[DROBNÁ] Insight o Anthropicu → „Dostal jsem 404“ sedí s podklady, ale chybí explicitní oddělení vlastního omylu od stavu světa → navržené znění:**  
    Problém: V zásadě správně, jen je lepší zdůraznit, že šlo o chybný odhad autora, ne nestandardnost dokumentace jako takové.  
    **Navržené znění:**  
    - „Když jsem adresu zkusil odhadnout jako `anthropic.com/claudebot.json`, dostal jsem 404. Správný soubor je až v dokumentaci na `claude.com/crawling/bots.json`.“

13. **[STŘEDNÍ] Sekce „Jak ověření probíhá“ → „Dál to jde dvěma cestami a nejsou zaměnitelné.“ → částečně nepřesné vůči primárním zdrojům → navržené znění:**  
    Problém: U Googlu ano, jsou dvě dokumentované cesty. U ostatních podklad B garantuje jen IP seznamy. Formulace vypadá, jako by dvě cesty byly obecný rámec pro všechny.  
    **Navržené znění:**  
    - „Dál jsou v praxi dvě cesty, ale neplatí pro všechny stejně: u všech pěti můžete pracovat se seznamem IP rozsahů, u Googlu navíc s reverzním a zpětným DNS.“

14. **[KRITICKÁ] Sekce „Ověřování a blokování nejsou totéž“ + FAQ „Má smysl blokovat AI roboty podle IP?“ → hrozí, že článek normativně doporučuje IP blokaci, kterou data sama neunesou → navržené znění:**  
    Problém: Zadání výslovně chce hlídat, zda není závěr o blokaci podle IP podán jako doporučení, které data neunesou. Tělo je na hraně: „**Ověřit, že požadavek opravdu přišel od provozovatele, dává smysl vždycky**“ je ještě obhajitelné jako provozní zásada. Ale ve spojení s checklistem a tezí „Vezměte IP, ne jméno“ může text čtenáře posouvat k představě, že IP je spolehlivý rozhodovací základ i pro akci. Primární zdroj B u Anthropicu naopak výslovně varuje, že IP blokace nemusí fungovat správně ani trvale garantovat opt-out. Článek to sice zmiňuje, ale doporučovací tón je stále silný.  
    **Navržené znění:**  
    - „Pro vyhodnocení logů dává smysl ověřit, zda IP sedí na publikovaný rozsah. Neznamená to ale automaticky, že podle stejné IP máte i blokovat: aspoň Anthropic výslovně upozorňuje, že taková blokace nemusí fungovat spolehlivě a může zabránit i načtení `robots.txt`.“  
    - V checklistu změnit „Vezměte IP, ne jméno“ na „Pro ověření berte IP, ne samotné jméno“.

15. **[STŘEDNÍ] Mistake 01 „Sám jsem pod pěti jmény prošel 47 weby ze 47.“ → příliš silné „prošel“ → navržené znění:**  
    Problém: Z podkladů plyne „všech 47 vrátilo 200“, ne že autor „prošel“ ve smyslu autentizace, klasifikace nebo zvláštního režimu.  
    **Navržené znění:**  
    - „Sám jsem pod pěti podvrženými user-agenty dostal odpověď 200 od 47 webů ze 47.“

16. **[DROBNÁ] Checklist „Když je adresa IPv6, počítejte s tím, že ji nedohledáte“ → formulace je moc definitivní → navržené znění:**  
    Problém: V rámci článku by mělo být jasné, že jde o nedohledání **v těchto seznamech**, ne obecně.  
    **Navržené znění:**  
    - „Když je adresa IPv6, počítejte s tím, že ji mimo Google v těchto zveřejněných seznamech často nedohledáte.“

17. **[DROBNÁ] Limity měření → chybí explicitní etická poznámka k podvrženým user-agentům na cizí weby → navržené znění:**  
    Problém: Zadání se ptá i na etický problém. Článek sice technicky korektně přiznává limit „testoval jsem jen řetězec user-agenta z běžné IP“, ale neříká nic o tom, že šlo o minimalistický test jedné homepage a že cílem nebylo obcházet ochrany nebo vyvolávat zátěž. To by eticky ukotvilo postup a omezilo dojem, že článek legitimizuje spoofing jako běžnou praxi.  
    **Navržené znění:**  
    - doplnit do limitů: