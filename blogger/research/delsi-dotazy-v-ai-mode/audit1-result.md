1. **BLOKUJÍCÍ — praktická doporučení jdou nad rámec doložených faktů**
   - **Citace:** „**Pro text z toho plynou tři věci:**“ a celý checklist:
     - „**Odpovídejte na celou otázku, ne na klíčové slovo**“
     - „**Pište úseky, které obstojí samy**“
     - „**Pokryjte i to, co z otázky plyne**“
     - „**Používejte formulace, kterými se lidé ptají**“
   - **Problém:** V podkladech je opora jen pro užší tvrzení: delší dotaz nese víc kontextu, může se rozpadat na více podotázek a soutěží se po pasážích. Z toho ale přímo neplyne zejména rada „používejte formulace, kterými se lidé ptají“ ani formulace „odpovídejte na celou otázku“ jako obecné pravidlo pro obsah. Autor sám v podkladech varuje před nepodloženými doporučeními.
   - **Návrh opravy:** Zúžit sekci na to, co je opřené:
     - „Z delšího dotazu plyne, že je užitečné mít v textu pasáže, které samostatně vysvětlují dílčí podotázky.“
     - U každé rady jasně označit, zda plyne z primárních zdrojů, nebo z navazujícího článku / interní metodiky. Neopřené body („Používejte formulace…“) vypustit nebo označit jako hypotézu k ověření.

2. **VÝZNAMNÝ — nepodložené tvrzení o sebevýběru a odlišném chování testerů**
   - **Citace:** „**První testeři byli sebevýběr** — lidé, kteří si funkci sami zapnuli, když byla nová. **Takoví se chovají jinak než průměr.**“
   - **Problém:** V ověřených faktech je jen „early testers (Labs)“. Není doloženo, že šlo o sebevýběr v přesném smyslu, ani že se „chovají jinak než průměr“. To může být plausibilní, ale v článku je to podané jako fakt.
   - **Návrh opravy:** Zmírnit na:
     - „Šlo o první testery v Labs, tedy jinou populaci než pozdější průměr uživatelů AI Mode.“
     - Pokud chcete zmínit možnou odlišnost chování, jen jako opatrnou interpretaci: „U raných testerů navíc nelze předpokládat stejný profil používání jako u pozdější širší populace.“

3. **VÝZNAMNÝ — vyvozování z nepřítomnosti dat ke „stylu textu“**
   - **Citace:** „**Číslo mluví o délce dotazu uživatele, ne o stylu vašeho textu.** Ty dvě věci se pletou pravidelně.“
   - **Problém:** První věta je v pořádku. Ale celá sekce „Co z toho neplyne“ místy sklouzává k silnějšímu závěru, než fakta unesou: z toho, že zdroje nic neříkají o stylu textu, neplyne, že styl textu s výsledky nesouvisí. Plyne jen to, že to z těchto zdrojů **nelze tvrdit**.
   - **Návrh opravy:** Přepsat důsledně do epistemicky správné podoby:
     - místo „Delší dotaz neznamená…“ → „Z uvedených zdrojů neplyne, že…“
     - místo „Doslovná shoda není to, co se v AI odpovědi vybírá.“ → vypustit nebo doložit jiným zdrojem.

4. **VÝZNAMNÝ — nepodložené technické tvrzení o mechanismu výběru**
   - **Citace:** „**Doslovná shoda není to, co se v AI odpovědi vybírá.**“
   - **Problém:** V ověřených faktech je opora pro query fan-out a pasážové soutěžení přes odkazované články, ale ne pro takto konkrétní negativní tvrzení o roli doslovné shody. To už je technická interpretace mechanismu.
   - **Návrh opravy:** Nahradit opatrnější formulací:
     - „Z delších dotazů samo o sobě neplyne, že máte mechanicky prodlužovat klíčové fráze v textu.“
     - Pokud chcete mluvit o doslovné shodě, doložit samostatným zdrojem.

5. **VÝZNAMNÝ — sekce „Jak si to ověřit u sebe“ obsahuje rady bez opory v uvedených zdrojích**
   - **Citace:** 
     - „**Podívejte se na délku dotazů**, na které vám chodí návštěvnost z vyhledávání. … jestli podíl delších formulací roste.“
     - „**Přečtěte si, co lidé píšou do hledání na vašem webu.**“
     - „**Porovnejte to se svými nadpisy.**“
   - **Problém:** Podklady výslovně říkají, že Search Console AI plochy neodděluje. Tato doporučení mohou být rozumná, ale nejsou opřená o primární fakta k tématu délky dotazů v AI Mode ani o vlastní měření autora.
   - **Návrh opravy:** Buď celou sekci vypustit, nebo ji jasně označit jako „nepřímé interní vodítko, ne ověření AI Mode“ a zkrátit na jednu větu:
     - „Přímo to u sebe neověříte; nanejvýš si můžete nepřímo projít delší formulace v organiku a ve vyhledávání na webu.“

6. **DROBNÝ — „tři věci“ neodpovídá počtu bodů**
   - **Citace:** „**Pro text z toho plynou tři věci:**“ následované čtyřmi body v checklistu.
   - **Problém:** Formální chyba, která snižuje důvěryhodnost.
   - **Návrh opravy:** Změnit na „čtyři věci“ nebo ubrat jeden bod.

7. **DROBNÝ — nejasné a potenciálně příliš silné tvrzení o rozkladu dotazu**
   - **Citace:** „Delší dotaz nese **víc kontextu**, a systém ho podle Googlu **rozloží na dílčí otázky, které řeší souběžně**…“
   - **Problém:** V podkladech je sice uvedeno, že z délky dotazu plyne více kontextu a viz query-fan-out-ai-mode, ale v tomto článku není vysvětleno, že jde o navazující mechanismus z jiného tématu, ne přímo o výrok z obou citovaných čísel o délce dotazu. Může to působit, že to říká tentýž zdroj.
   - **Návrh opravy:** Zpřesnit vazbu:
     - „Samo číslo o délce to ještě nedokazuje; v kombinaci s tím, jak Google jinde popisuje query fan-out, to naznačuje…“

8. **DROBNÝ — FAQ zbytečně rozšiřuje téma o další metriku a může tříštit fokus**
   - **Citace:** „Ze stejného příspěvku pochází i údaj o **miliardě měsíčně aktivních uživatelů AI Mode**…“
   - **Problém:** Není to chyba věcně, ale pro článek o délce dotazů je to odbočka. Podklady doporučují odkázat na samostatný článek, ne to rozvádět tady.
   - **Návrh opravy:** Zkrátit odpověď v FAQ jen na:
     - „Ze stejného příspěvku pocházejí i další relativní metriky; rozebírám je zvlášť v článku o miliardě uživatelů AI Mode.“

9. **DROBNÝ — kanibalizace s články o pasážích a query fan-out**
   - **Citace:** Celá sekce „**Co delší dotaz mění v obsahu**“ včetně detailních doporučení.
   - **Problém:** Podle kolizní kontroly má nový článek hlavně doplnit čísla a jejich rozsah; praktická část má odkazovat na `pasazova-optimalizace-obsahu` a `jak-se-zobrazit-v-ai-mode`. Tady už praktická část zabírá příliš prostoru a leze do kompetence těch článků.
   - **Návrh opravy:** Sekci zkrátit na 1 krátký odstavec:
     - „Praktický dopad není v počtu slov, ale v tom, že dotaz nese víc podmínek a obsah se může vybírat po pasážích. Co to znamená pro strukturu textu, řeším v…“
     - Nechat jen odkazy na navazující články.