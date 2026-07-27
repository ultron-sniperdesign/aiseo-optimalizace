**BLOKERY**

1. **Neauditovatelnost datové sekce trvá.**  
   Autor sice přiznal limity, ale pořád chce, aby čtenář uvěřil interpretaci, aniž by mohl ověřit vstup. To je pro text, který staví na „našem měření“, zásadní slabina.  
   Citace:
   - „**Tohle není výzkum trhu, ale malý interní snapshot: patnáct dotazů, jeden obor, jeden den, jeden běh.**“
   - „**Zveřejnit všech 15 dotazů s citovanými doménami zatím nechceme**“ — to sice není v článku, ale plyne z vašeho zadání; v článku místo toho stojí:
   - „**Metodika, ať je to ověřitelné**“
   - „**Zapisovali jsme citované domény v pořadí, ve kterém je nástroj uvedl.**“

   Problém: nazvat to „ověřitelné“ je moc silné. Bez seznamu dotazů a výstupů to **není ověřitelné**, jen částečně popsané. To je bloker, protože článek stojí na vlastních datech.

2. **Některé praktické rady jsou pořád silnější než doložená data v článku.**  
   Text se opírá o malý interní test, ale místy přechází do normativních doporučení, která z toho testu neplynou.  
   Citace:
   - „**Na začátek každé sekce dejte přímou odpověď v 1–2 větách s konkrétními fakty, čísly a názvy nástrojů.**“
   - „**Obsah, který ChatGPT cituje, má společný rys: odpověď je hned na začátku, ne schovaná v polovině textu.**“
   - „**Dlouhodobě ale patří mezi nejsilnější signály důvěryhodnosti.**“

   Problém: z popsaného měření 15 dotazů tohle nevyplývá. Možná je to rozumné expertní doporučení, ale pak to musí být označeno jako **oborová praxe / hypotéza / heuristika**, ne jako něco, co článek „ukázal“.

3. **Střet zájmu je přiznaný, ale pořád funkčně slouží jako prodejní most.**  
   Disclosure už není skrytý, to je zlepšení. Ale pořád tu máte strukturu: vlastní měření → vlastní zásah v datech → vlastní produkty.  
   Citace:
   - „**Ten jediný český zásah byl náš vlastní web.**“
   - „**Nejlepší kontrola je udělat si stejný test na svém webu a svých dotazech.**“
   - „**Pokud pak chcete rámec, jak to přenést na celý web, máme AI SEO Wireframe Pack… [a] AI SEO audit na míru…**“

   Problém: disclosure není alibi sám o sobě. U textu, kde jediný pozitivní případ je autor, zůstává obchodní motivace velmi vysoká. Není to automaticky neetické, ale je to pořád **střet, který oslabuje důvěryhodnost hlavní teze**.

---

**VAROVÁNÍ**

1. **Autor místy přehedgoval tak, že oslabuje použitelnost — ale ne všude.**  
   Některé formulace už jsou na hraně „nic z toho neplyne“.  
   Citace:
   - „**Je to ale hypotéza z jednoho pozorování, ne doložená příčina.**“
   - „**v našich datech je to jediná doložená cesta dovnitř, ne pravidlo.**“
   - „**u nich máte reálnou šanci.**“

   Tady vzniká vnitřní napětí: jednou je to jen hypotéza z jednoho pozorování, jindy „jediná doložená cesta dovnitř“, a pak už „reálná šance“. To je rétoricky kluzké. Autor se snaží být opatrný, ale pořád si nechává dost pevnosti na to, aby z toho šly udělat praktické závěry.

2. **„Nejdůležitější“ bylo odstraněno, ale zbyly podobně silné ekvivalenty.**  
   Citace:
   - „**Tohle je krok, který v návodech přeložených z angličtiny nenajdete — a v našem testu to byla jediná společná vlastnost úspěšného dotazu.**“

   To je opatrnější než dřív, ale pořád to nese velkou implikaci. U **jednoho úspěšného případu** je „jediná společná vlastnost úspěšného dotazu“ skoro tautologie, ne robustní poznatek.

3. **„Vynutit vyhledávání“ je užitečné, ale podané příliš absolutně.**  
   Citace:
   - „**Bez explicitního pokynu k vyhledání odpovídal ChatGPT v našem testu z natrénovaných dat a webové zdroje neuváděl.**“
   - stats: „**bez pokynu k vyhledání odpovídal ChatGPT v našem testu z tréninku a bez zdrojů**“

   Tohle je v pořádku jako lokální pozorování. Ale ve stat bloku to zní skoro jako produktová vlastnost systému. Chybí tam stejná brzda jako jinde: že jde o jejich konkrétní testovací nastavení.

4. **Faktická jistota kolem crawlerů a Bing vazby potřebuje opatrnost.**  
   Citace:
   - „**OpenAI rozlišuje robota pro trénink (`GPTBot`) a roboty pro vyhledávání a načtení na vyžádání (`OAI-SearchBot`, `ChatGPT-User`).**“
   - „**Bing dává smysl kontrolovat jako praktický signál dohledatelnosti webu**“

   Směr je plausibilní a opatrnější než dřív, ale text místy splývá mezi:
   - co OpenAI/Bing veřejně deklarují,
   - co je odvozená praxe,
   - co je autorova heuristika.  
   To by chtělo jasněji oddělit.

5. **„Google AI Mode“ je časově a regionálně citlivé označení.**  
   Citace:
   - „**Stejné dotazy v Google AI Mode: 5 z 15**“
   - „**na stejných patnácti dotazech se náš web objevil pětkrát v Google AI Mode a jednou v ChatGPT**“

   Neříkám, že je to nutně špatně, ale je to terminologie závislá na konkrétním rollout stavu. Pokud článek míří evergreenově, tohle rychle zastarává nebo bude nejasné podle trhu.

---

**DOPORUČENÍ**

1. **Přestaňte tvrdit, že metodika je ověřitelná, když není.**  
   Nahraďte:
   - „**Metodika, ať je to ověřitelné**“  
   třeba něčím jako:  
   - „Metodika, ať je jasné, jak jsme postupovali“  
   nebo  
   - „Metodika pro orientační zopakování postupu“.

2. **Tvrdší doporučení explicitně označte jako heuristiku, ne závěr z měření.**  
   U pasáží:
   - „**Obsah, který ChatGPT cituje, má společný rys: odpověď je hned na začátku**“
   - „**Na začátek každé sekce dejte přímou odpověď…**“
   - „**Dlouhodobě ale patří mezi nejsilnější signály důvěryhodnosti.**“  
   doplňte formulace typu:
   - „vycházíme z oborové praxe“
   - „je to pracovní heuristika“
   - „náš malý test to sám o sobě nedokazuje“.

3. **Vyřešte rozpor mezi „hypotéza“ a „reálná šance“.**  
   Nejproblematičtější dvojice:
   - „**Je to ale hypotéza z jednoho pozorování, ne doložená příčina.**“
   - „**u nich máte reálnou šanci.**“

   Buďte konzistentní. Pokud je to jen hypotéza, nepište „reálnou šanci“ bez opory. Lepší by bylo:
   - „u nich může být šance vyšší“
   - „v našem snapshotu to byl jediný typ dotazu, kde se české weby objevily“.

4. **Disclosure střetu zájmu posuňte ještě o krok dál.**  
   Současné:
   - „**Ten jediný český zásah byl náš vlastní web.**“  
   je dobrý začátek. Přidejte ale i důsledek, např.:
   - „To zvyšuje riziko, že si z výsledku vybíráme interpretaci příznivou pro náš byznys.“  
   To by bylo poctivější než jen konstatování.

5. **CTA je už snesitelnější, ale pořád bych ho zkrátil nebo odpojil od datové sekce.**  
   Teď je lepší než dřív, protože začíná:
   - „**Než cokoli koupíte, udělejte si vlastní baseline**“  
   To je plus. Přesto bych úplně smazal cenovky z tohoto článku, nebo je přesunul do odděleného boxu mimo hlavní argument. U textu s vlastním měřením a vlastním zásahem v datech působí:
   - „**za 1 490 Kč**“
   - „**za 9 990 Kč**“
   zbytečně obchodně agresivně.

6. **Doplňte, co přesně znamená „z oboru AI SEO“.**  
   Citace:
   - „**Dotazů: 15, česky, z oboru AI SEO.**“

   To je moc vágní. Bez zveřejnění všech 15 dotazů aspoň uveďte rámec:
   - informační vs. transakční,
   - B2B/B2C,
   - obecné vs. lokální,
   - kolik jich obsahovalo lokalizaci.  
   Jinak si autor nechává příliš velký prostor pro cherry-picking.

7. **Zvažte smazání nejslabší věty v článku.**  
   Za nejslabší považuji:
   - „**v našich datech je to jediná doložená cesta dovnitř, ne pravidlo.**“

   Proč: „doložená cesta dovnitř“ zní silněji a kauzálněji, než co unese jeden pozitivní případ. To bych smazal nebo změnil na:
   - „v našem jediném pozitivním případu byl dotaz geograficky ukotvený“.

---

**Fakta / možné zastarávání**

- Nic zde nekřičí jako zjevně nepravdivé, ale více tvrzení je **praktická inference**, ne tvrdý fakt:
  - role `OAI-SearchBot` / `ChatGPT-User`,
  - význam Bingu,
  - váha structured data,
  - vztah mezi odpovědí nahoře a citovatelností.  
  U všech by pomohlo rozlišit „co víme z dokumentace“ vs. „co doporučujeme z praxe“.

---

**Vnitřní logika a rozpory**

- Hlavní rozpor je mezi vysokou opatrností a stále poměrně sebevědomými doporučeními.
- Nejviditelnější napětí:
  - „**Tohle není výzkum trhu…**“
  - versus
  - „**Tohle je krok, který v návodech přeložených z angličtiny nenajdete**“
  - a
  - „**u nich máte reálnou šanci**“.

  Jinými slovy: autor říká „berte to jen jako indicii“, ale zároveň z toho staví dost konkrétní návod. To není nutně nepoctivé, ale musí to být jasněji přiznané jako **heuristický playbook**, ne datový závěr.

---

**Verdikt**

**Blokery jsou stále 3:**
1. neauditovatelnost vlastního měření,
2. pár tvrzení silnějších než vlastní data,
3. přetrvávající střet zájmu napojený na CTA.

Oproti minulé verzi je to **výrazně poctivější**. Ale není to ještě čisté. Největší problém už není přepálený závěr; teď je to spíš **směs poctivě omezených dat a příliš hladce navazujících expertních doporučení**, která z těch dat sama neplynou.