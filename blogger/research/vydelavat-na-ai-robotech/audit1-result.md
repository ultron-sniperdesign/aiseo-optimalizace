1. **„Od loňska k tomu existuje i nástroj a v červenci 2026 přibyl další, výrazně širší.“**  
   **Problém:** Nejasné a věcně nedotažené. Research rozlišuje **Pay Per Crawl** a **Monetization Gateway / Pay Per Use**, ale věta neříká, co je „nástroj“ a co je „další“. Čtenář nepozná, zda jde o dvě cloudflarovské funkce, nebo o obecný tržní vývoj.  
   **Konkrétní oprava:**  
   „Cloudflare už dříve představilo model **Pay Per Crawl**. V červenci 2026 k němu přidalo širší **Monetization Gateway**, které nemá mířit jen na crawlery, ale na **jakýkoli placený přístup k obsahu, API, datasetům nebo MCP nástrojům**.“

2. **„Starší Pay Per Crawl uměl účtovat robotům za procházení obsahu.“**  
   **Problém:** Tohle je silnější, než co máte v podkladu. Research u Monetization Gateway cituje rozdíl „instead of only charging crawlers for content...“, ale nikde tady nedokládáte, že Pay Per Crawl bylo reálně dostupné, nasazené a „umělo“ to v praktickém smyslu. U článku, který stojí na přísném rozlišení oznámení vs. realita, je to nekonzistentní.  
   **Konkrétní oprava:**  
   „Pay Per Crawl bylo Cloudflarem popsané jako model, který **míří na zpoplatnění přístupu crawlerů k obsahu**. Nové Monetization Gateway je podle Cloudflare širší: má umožnit účtovat **jakémukoli klientovi za jakýkoli chráněný asset**.“

3. **„Celý mechanismus stojí na jednom čísle… 402 Payment Required.“ / stat: „402 — stavový kód HTTP, na kterém celý mechanismus stojí“**  
   **Problém:** Zjednodušení až k nepřesnosti. Podle research je mechanika **protokol x402 nad HTTP 402**. Není to jen „o jednom čísle“, ale o kombinaci status kódu, platebních metadat a opakování requestu s dokladem. U odborného textu je lepší neshazovat roli x402.  
   **Konkrétní oprava:**  
   „Mechanismus používá **HTTP 402 Payment Required jako signalizační stavový kód** a nad ním protokol **x402**, který popisuje cenu, přijímané aktivum, platební adresu a předání dokladu o platbě.“

4. **FAQ: „402 je stavový kód, který je v HTTP od začátku vyhrazený pro ‚vyžadována platba‘…“**  
   **Problém:** Jazyková i věcná neobratnost. „vyžadována platba“ je kostrbaté; navíc „od začátku“ je příliš volné. V článku jinak dbáte na přesnost, tady sklouzáváte k popularizačnímu zjednodušení bez opory v research.  
   **Konkrétní oprava:**  
   „402 je HTTP stavový kód **Payment Required**, tedy kód vyhrazený pro situace, kdy server podmiňuje vydání obsahu platbou. Protokol x402 na něm staví konkrétní způsob, jak server sdělí cenu a jak klient po zaplacení požadavek zopakuje.“

5. **„Platba jde přímo mezi peněženkami odesílatele a příjemce, bez prostředníka uprostřed.“**  
   **Problém:** Tvrzení je zbytečně absolutní. Research říká „vypořádání peer-to-peer přímo do peněženky prodávajícího“, což není totéž jako kategorické „bez prostředníka uprostřed“ v každém technickém a provozním kroku. Můžete tím slibovat něco o architektuře a nákladech, co zdroj výslovně neříká.  
   **Konkrétní oprava:**  
   „Cloudflare popisuje vypořádání jako **peer-to-peer přímo do peněženky prodávajícího**.“

6. **„Nepotřebujete přihlášení, předplatné ani smlouvu.“**  
   **Problém:** Nedoložené zesílení. Research nic takového necituje. To, že mechanika funguje přes 402/x402, ještě nedokládá, že není potřeba žádná smlouva, onboarding, KYC, podmínky použití, technická registrace nebo jiný vztah mezi stranami.  
   **Konkrétní oprava:**  
   „Model je navržený tak, aby **technicky nevyžadoval klasické předplatné pro každý jednotlivý přístup**. To ale neznamená, že kolem něj nejsou další provozní, právní nebo účetní podmínky.“

7. **„Pro stroje, které mezi sebou obchodují bez lidí, je to zhruba ideální model“**  
   **Problém:** Hodnotící soud bez opory. Research mluví o technické eleganci, ne o „ideálním modelu“. To už je vlastní teze, která by chtěla argument nebo zmírnění.  
   **Konkrétní oprava:**  
   „Pro automatizované přístupy je to **technicky přirozený model**, protože spojuje požadavek, cenu a platbu do jednoho toku.“

8. **CompareTable: „Placení se testuje s pěti jmenovanými partnery.“**  
   **Problém:** Směšujete dvě různé věci: **Monetization Gateway** a **Pay Per Use**. Research říká, že partneři jsou jmenovaní v tiskové zprávě u **Pay Per Use**, zatímco **Monetization Gateway** má waitlist. V tabulce ale před tím mluvíte obecně o „jak to je podle Cloudflare“ a čtenář může získat dojem, že těch pět partnerů jsou uživatelé Monetization Gateway.  
   **Konkrétní oprava:**  
   „Monetization Gateway je **na čekací listině**. Samotné **placení za užití obsahu (Pay Per Use)** Cloudflare podle tiskové zprávy **testuje s pěti jmenovanými partnery**.“

9. **Description: „Cloudflare staví infrastrukturu, aby AI platily za obsah.“**  
   **Problém:** Přehnané zúžení i personifikace. Research výslovně říká, že Monetization Gateway má umožnit zpoplatnit **jakýkoli asset a jakéhokoli calleru**, nejen AI. Tímhle si podřezáváte přesnost hned v meta popisu.  
   **Konkrétní oprava:**  
   „Cloudflare staví infrastrukturu pro **placený přístup k obsahu, API, datasetům a dalším zdrojům**, kterou lze použít i proti AI crawlerům a agentům.“

10. **Answer: „Cloudflare je má na čekací listině nebo v testu s hrstkou partnerů…“**  
    **Problém:** Zase směšování produktů a stavů. „Je má“ odkazuje na „nástroje“, ale z research plyne, že jeden je na waitlistu a jiný v partner testu. V krátké odpovědi to pak zní, jako by šlo o jeden a tentýž program.  
    **Konkrétní oprava:**  
    „Cloudflare má dnes **Monetization Gateway na čekací listině** a související model **Pay Per Use testuje s několika partnery**.“

11. **FAQ: „Nástroj na to sice existuje, ale je na čekací listině a placení se testuje jen s několika zahraničními partnery.“**  
    **Problém:** Stejná chyba jako výše, jen v nejcitovanější části článku. FAQ bývá čtenější než tělo a tady opět nerozlišujete mezi waitlistem a partner testem různých věcí.  
    **Konkrétní oprava:**  
    „Cloudflare má dnes **Monetization Gateway na čekací listině** a model **Pay Per Use testuje s několika zahraničními partnery**. Pro běžný web to zatím není běžně dostupný zdroj příjmu.“

12. **„Kdyby velcí provozovatelé AI plošně platili, byla by to velká zpráva a věděli bychom o ní.“**  
    **Problém:** To už je domněnka, ne ověřený závěr. Zadání správně varuje před opačným přestřelením skepse. Víte jen, že **není doloženo**, že platí. Nevíte, že by se to nutně veřejně vědělo.  
    **Konkrétní oprava:**  
    „U žádného velkého provozovatele AI se mi nepodařilo **doložit**, že by přes x402 nebo související model Cloudflare takto platil.“

13. **„…jsou to spíš menší hráči a vydavatelé než ti, kteří na webu procházejí nejvíc.“**  
    **Problém:** Nedoložené srovnání. O některých jmenovaných subjektech lze těžko bez dat tvrdit, kdo „prochází web nejvíc“. Navíc mezi partnery jsou i vydavatelé a platformy, ne čistě AI crawlery.  
    **Konkrétní oprava:**  
    „Mezi jmenovanými partnery jsou **vydavatelé, platformy i AI firmy**, ale v materiálech se neobjevuje doložené zapojení největších provozovatelů generativního vyhledávání.“

14. **Stat: „0 — zveřejněných částek, které by kdokoli za obsah reálně dostal“**  
    **Problém:** Příliš absolutní. Research říká, že se nepodařilo zjistit „jestli existuje jediný zveřejněný případ vyplacené částky“. To není totéž jako univerzální „0“. Nula v infoboxu působí jako tvrdý audit celého trhu, ne stavu vašeho ověření.  
    **Konkrétní oprava:**  
    „0 — **částek dohledaných v materiálech Cloudflare nebo ve veřejně ověřitelných případech, které jsem při přípravě článku našel**.“

15. **„Pro český web z ní ale dnes neplyne žádný příjem“ / „Pro běžný český web z toho dnes neplyne žádný příjem.“**  
    **Problém:** Moc tvrdé. V research stojí opatrnější teze, ale i ta je na hraně. Správně víte, že **není doložený** příjem a není to dostupné široce. Nevíte ale, že z toho „žádný příjem“ neplyne nikomu v Česku.  
    **Konkrétní oprava:**  
    „Pro běžný český web z toho dnes **není doložený reálný příjem ani běžně dostupný způsob nasazení**.“

16. **FAQ: „Ve stablecoinech, tedy v kryptoměnách navázaných na dolar.“**  
    **Problém:** Příliš úzké. Research uvádí Open USD a USDC, ale obecně mluví o stablecoinech; navázání „na dolar“ sedí pro tyto příklady, ne jako definice všeho.  
    **Konkrétní oprava:**  
    „Ve **stablecoinech**; Cloudflare jako příklady uvádí **Open USD a USDC**.“

17. **„Pro českou firmu to znamená účetní a daňovou otázku navíc…“ / „Odpověď může celou úvahu ukončit.“**  
    **Problém:** Prakticky užitečné, ale zbytečně kategorické a bez opory. Článek se má držet doložitelných věcí; tady už podsouváte výsledek účetního posouzení.  
    **Konkrétní oprava:**  
    „Pro českou firmu to otevírá **účetní, daňové a interní compliance otázky**, které je rozumné vyjasnit dřív než technické nastavení.“

18. **„Monetization Gateway má otevřenou čekací listinu. Není to zapnutelná funkce.“**  
    **Problém:** Druhá věta je interpretace silnější než zdroj. Waitlist znamená omezenou dostupnost, ale ne nutně, že to „není zapnutelná funkce“ pro nikoho.  
    **Konkrétní oprava:**  
    „Monetization Gateway má otevřenou čekací listinu, takže **nejde o obecně dostupnou funkci pro všechny zákazníky Cloudflare**.“

19. **„Kdo si chce nechat otevřená vrátka, může se na čekací listinu přihlásit. Stojí to jen chvíli a nezavazuje to k ničemu.“**  
    **Problém:** Druhá věta není doložená. Možná je prakticky pravděpodobná, ale v research není.  
    **Konkrétní oprava:**  
    „Kdo si chce nechat otevřená vrátka, může se na čekací listinu přihlásit. **Samo o sobě to ještě neznamená, že službu dostane k běžnému použití hned nebo v dohledné době.**“

20. **„Jednotlivý český web sám o sobě páku nemá.“**  
    **Problém:** Příliš absolutní zobecnění. To může být často pravda, ale není to v research doložené a existují výjimky: silné vertikální databáze, unikátní obsah, právní exkluzivita.  
    **Konkrétní oprava:**  
    „Jednotlivý český web má **obvykle slabší vyjednávací pozici**, pokud nenabízí opravdu unikátní a těžko nahraditelný obsah.“

21. **„U textu, který se dá nahradit deseti podobnými, cena k ničemu nevede — model prostě vezme některý z těch ostatních.“**  
    **Problém:** To je ekonomická hypotéza podaná jako jistota. Rozumná, ale nedoložená.  
    **Konkrétní oprava:**  
    „U snadno nahraditelného obsahu je **riziko**, že zpoplatnění povede spíš k obejití než k platbě.“

22. **„To je dnes jediná páka, která opravdu funguje.“**  
    **Problém:** Přestřelené. Blokování je jistě praktičtější než monetizace, ale „jediná páka“ je moc silné. Máte i robots.txt, licenční vyjednávání, technické throttlingy, právní podmínky, různé vrstvy přístupu.  
    **Konkrétní oprava:**  
    „To je dnes **nejpraktičtější a nejdostupnější páka** pro většinu webů.“

23. **Jazyk: „hudba budoucnosti“, „otevřená vrátka“, „něco, co se stane bez vás“, „bere“, „nosí zpátky“**  
    **Problém:** Článek míří na marketéry a majitele webů, takže civilnost je v pořádku, ale místy to padá do klišé a polohovorovosti. U analytického textu to oslabuje přesnost.  
    **Konkrétní oprava:**  
    - „hudba budoucnosti“ → „zatím ne běžně použitelná věc“  
    - „otevřená vrátka“ → „možnost do budoucna“  
    - „něco, co se stane bez vás“ → „změna, která se u části účtů aplikuje automaticky“  
    - „bere“ → „čerpá obsah bez prokazatelné návratnosti“  
    - „nosí zpátky“ → „přivádí zpětnou návštěvnost nebo jinou hodnotu“

24. **Nedotažené místo: chybí explicitní rozhodovací rámec, který zadání požadovalo.**  
    **Problém:** V textu je rozumný závěr „komu to dává smysl a komu ne“, ale není přetavený do rychlého rozhodovacího rámce. To snižuje praktickou hodnotu.  
    **Konkrétní oprava:** Přidejte krátký box typu:  
    **Dává smysl sledovat waitlist, pokud:**  
    - prodáváte data, API nebo unikátní odborný obsah,  
    - AI crawleři vám berou drahý obsah a nepřinášejí návratnost,  
    - jste schopni řešit stablecoinové platby interně.  
    **Nedává smysl to řešit teď,