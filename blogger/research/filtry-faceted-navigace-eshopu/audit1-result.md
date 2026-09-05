## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je nadprůměrně opatrný a většinu zadání drží správně, ale má několik míst, která jsou pro publikaci riziková: hlavně frontmatter `answer`, nepřesné vysvětlení kombinace `robots.txt + noindex`, absolutní tvrzení „není problém obsahu“ a faktická nepřesnost u `nofollow`.

---

## 1. Blokující nálezy

1. [BLOCKER] **Krátká odpověď zkresluje, co Google dokumentuje jako dvě cesty**

   **Citace:**

   > `answer: "Filtrované adresy jsou pro roboty problém rozpočtu procházení, ne obsahu. Google dokumentuje dvě cesty: buď procházení filtrů zakážete v robots.txt, nebo je filtrujete přes fragment URL, který se neprochází vůbec. Canonical a nofollow označuje za dlouhodobě méně účinné. Vlastní stránku si zaslouží jen doložená poptávka."`

   **Problém:**  
   Podle dodaného ověření Google nerámuje „dvě cesty“ jako `robots.txt` vs. fragment URL. Primární rozdělení je: pokud filtrované URL nepotřebujete potenciálně indexovat, zabraňte jejich procházení; pokud je potřebujete, dodržte best practices a počítejte s nákladem. Fragment URL je technické řešení, které obecně nevytváří samostatně procházené/indexované URL, ne druhá hlavní strategie vedle `robots.txt`.

   Navíc věta „ne obsahu“ je příliš absolutní. Dokument Googlu řeší hlavně procházení, ale u indexovatelných filtrovaných/kategoriálních stránek je užitečný vlastní obsah stále podstatný.

   **Návrh opravy frontmatter `answer`:**

   > `answer: "Faceted navigace je filtrování výpisů, které může vytvářet velké množství URL. Google téma rámuje hlavně jako správu procházení: nepotřebné filtrované adresy je vhodné neprocházet, potřebné musí mít čistou strukturu URL a počítat s náklady. Canonical a nofollow jsou podle dokumentace dlouhodobě méně účinné než přímé omezení procházení."`

   Tím zůstane odpověď samostatná, fakticky přesnější a v rozsahu cca 40–60 slov.

2. [BLOCKER] **Chybné tvrzení, že `robots.txt + noindex` dává „žádný signál“**

   **Citace 1:**

   > `Kombinace zákaz plus noindex tedy nedává silnější signál, ale žádný.`

   **Citace 2:**

   > `Kombinace nedává silnější signál, ale žádný — crawler pravidlo neuvidí. Vyberte jedno.`

   **Problém:**  
   To je fakticky nepřesné. Kombinace nedává účinný `noindex`, protože vyhledávací robot stránku kvůli `robots.txt` neuvidí. Ale zákaz v `robots.txt` stále funguje jako zákaz procházení. Není to „žádný signál“; je to pouze nefunkční indexační signál `noindex`.

   **Návrh opravy:**

   > `Kombinace zákaz v robots.txt plus noindex nedává silnější indexační signál. Robots.txt může zastavit procházení, ale vyhledávací robot kvůli tomu neuvidí meta značku noindex, takže adresa se může dál objevit ve výsledcích bez načteného obsahu.`

   A v chybě 01:

   > `Zákaz v robots.txt zastaví procházení, ale zároveň zabrání tomu, aby vyhledávací robot viděl noindex. Pokud chcete odstranit stránku z indexu přes noindex, nesmí být blokovaná v robots.txt.`

3. [BLOCKER] **Nepřesné vysvětlení `nofollow`: náklad na procházení nemusí vzniknout až po stažení cílové stránky**

   **Citace:**

   > `Druhé dva jsou jen doporučení, které robot může vzít v potaz až poté, co stránku stáhl — takže náklad na procházení už vznikl.`

   **Problém:**  
   U `rel=canonical` to sedí: Google musí stránku stáhnout, aby canonical viděl. U `rel=nofollow` ne. `nofollow` je atribut na odkazu a vyhledávací robot ho vidí na odkazující stránce před případným procházením cílové filtrované URL. Problém `nofollow` podle dokumentace není primárně „až po stažení“, ale křehkost: musí být na každém odkazu na danou URL.

   **Návrh opravy:**

   > `Canonical se vyhodnocuje až po stažení stránky, takže náklad na procházení už vznikl. Nofollow funguje jinak: je to signál na odkazu, ale je křehký, protože musí být na každém odkazu vedoucím na danou filtrovanou adresu. Proto ho Google označuje za dlouhodobě méně účinný než přímé omezení procházení.`

4. [BLOCKER] **Absolutní rámování „nejde o obsah“ odporuje části zadání o tenkých stránkách**

   **Citace 1:**

   > `Filtry nejsou problém obsahu, ale rozpočtu`

   **Citace 2:**

   > `Není to tedy otázka kvality obsahu na filtrované stránce.`

   **Citace 3:**

   > `Filtry jsou problém rozpočtu procházení, ne kvality obsahu`

   **Problém:**  
   Zadání výslovně říká, že filtrované/faceted URL můžou vytvořit tisíce tenkých stránek. Google dokumentace k faceted navigaci sice primárně řeší procházení, ale článek nesmí popřít obsahový problém u stránek, které se rozhodnete zpřístupnit/indexovat. Aktuální formulace zní příliš kategoricky.

   **Návrh opravy titulku sekce:**

   > `Filtry jsou hlavně problém procházení`

   **Návrh opravy věty:**

   > `V dokumentaci Googlu je to primárně otázka procházení a spotřeby zdrojů. Pokud ale z některé kombinace uděláte indexovatelnou stránku, musí mít i vlastní užitečný obsah — jinak snadno vznikne tenká nebo duplicitní stránka.`

---

## 2. Doporučení

1. [WARNING] **SEO titulek posouvá téma zpět k indexaci, i když zadání chce důsledně oddělit procházení vs. indexaci**

   **Citace:**

   > `seoTitle: "Filtry a faceted navigace e-shopu: co indexovat (2026)"`

   **Problém:**  
   Titulek je délkou v pořádku, ale „co indexovat“ je přesně citlivé místo zadání. Článek má stát na správě procházení a až sekundárně vysvětlit oborovou praxi pro vlastní stránky.

   **Návrh opravy:**

   > `seoTitle: "Filtry a faceted navigace: co procházet v AI éře"`

   Nebo přesněji s rokem:

   > `seoTitle: "Filtry a faceted navigace: procházení URL v roce 2026"`

   Poznámka: cílové klíčové slovo obsahuje „AI“, ale v aktuálním `seoTitle` není.

2. [WARNING] **Cílové klíčové slovo není dobře pokryté v titulku, slug ani úvodu**

   **Citace:**

   > Cílové klíčové slovo: `filtry faceted navigace ai`  
   > `slug: "filtry-faceted-navigace-eshopu"`  
   > první H2: `Filtry nejsou problém obsahu, ale rozpočtu`

   **Problém:**  
   Článek řeší AI až později. Pro AEO/GEO citovatelnost by první část měla jasně říct, jak se téma týká AI éry, ale bez spekulací o AI crawl budgetu.

   **Návrh opravy slug:**

   > `slug: "filtry-faceted-navigace-ai"`

   **Návrh doplnění do prvního odstavce:**

   > `V AI éře to neznamená, že máte spekulovat o rozpočtu AI robotů. Znamená to, že důležité stránky musí být normálně dostupné, prolinkované a srozumitelné, zatímco nekonečné kombinace filtrů nemají zbytečně zatěžovat procházení.`

3. [WARNING] **Chybí vysvětlení pojmu „faceted navigace“ na začátku článku**

   **Citace:**

   > `Filtry nejsou problém obsahu, ale rozpočtu`

   **Problém:**  
   Článek používá pojem v titulku a SEO titulku, ale první tělo článku ho nedefinuje. Pro AI citovatelnost má prvních cca 100 slov fungovat samostatně a začínat definicí, ne až příkladem „patnáct zaškrtávátek“.

   **Návrh opravy úvodu:**

   > `Faceted navigace je filtrování výpisu produktů podle parametrů, například barvy, velikosti, ceny nebo značky. Pokud každá kombinace vytvoří vlastní URL, může e-shop vyrobit tisíce až prakticky nekonečně mnoho adres. Google to v dokumentaci řeší hlavně jako problém procházení: roboti mohou zbytečně stahovat velké množství málo užitečných URL a pomaleji objevovat důležité stránky.`

4. [WARNING] **Příliš absolutní tvrzení „každou z nich musí robot stáhnout“**

   **Citace:**

   > `a každou z nich musí robot stáhnout, aby zjistil, že ji nepotřebuje`

   **Problém:**  
   To platí jen pro adresy, které robot objeví a rozhodne se procházet. Vlastní měření v zadání naopak ukazuje, že u řady Shoptet kategorií na filtrované adresy ani nevedou odkazy.

   **Návrh opravy:**

   > `a pokud jsou tyto adresy pro robota objevitelně odkazované, může jich stáhnout velké množství, než vyhodnotí, že nejsou užitečné.`

5. [WARNING] **Formulace „nic navíc“ u zákazu procházení je přehnaná**

   **Citace:**

   > `Co to stojí: nic navíc; roboti se dovnitř nedostanou`

   **Problém:**  
   `robots.txt` snižuje procházení obsahu, ale „nic navíc“ je moc absolutní. Vyhledávací robot stále může URL znát, vyhodnocovat pravidla, případně se adresa může objevit ve výsledcích bez načteného obsahu.

   **Návrh opravy:**

   > `výrazně menší náklad na procházení obsahu; robot nemá načítat blokované filtrované URL`

6. [WARNING] **Sekce o 404 opomíjí výjimku pro single-page aplikace**

   **Citace:**

   > `Kombinace filtrů bez výsledků → 404`

   **Problém:**  
   Dodaná ověřená fakta výslovně uvádějí výjimku: single-page app. Článek teď uvádí pravidlo absolutně.

   **Návrh opravy:**

   > `U běžně serverově obsluhovaných URL má kombinace filtrů bez výsledků vrátit 404 přímo na dané adrese. Dokumentace uvádí výjimku pro single-page aplikace, kde se chování může řešit jinak podle implementace.`

7. [WARNING] **Zakázaný slovník: „crawler“ bez nahrazení**

   **Citace 1:**

   > `jinak ho crawler nikdy neuvidí`

   **Citace 2:**

   > `crawler pravidlo neuvidí`

   **Problém:**  
   Podle brand pravidel má být místo „crawler“ použito „vyhledávací robot“, pokud není pojem vysvětlený.

   **Návrh opravy:**

   > `jinak ho vyhledávací robot nikdy neuvidí`

   > `vyhledávací robot pravidlo neuvidí`

8. [WARNING] **Tvrzení o `robots.txt` u AI robotů je zjednodušené**

   **Citace:**

   > `Pravidla v robots.txt platí pro každého robota, který soubor respektuje — a jméno robota v něm musíte uvést.`

   **Problém:**  
   Není nutné vždy uvést konkrétní jméno robota, protože existuje i obecná skupina `User-agent: *`. Přesnější je říct, že pravidlo musí robota zasáhnout buď přes konkrétní user-agent, nebo přes wildcard.

   **Návrh opravy:**

   > `Pravidla v robots.txt platí pro roboty, kteří soubor respektují. Musí na ně dopadat buď obecná skupina User-agent: *, nebo konkrétní skupina s jejich user-agent názvem.`

9. [WARNING] **„Není zdroj pro nikoho“ je příliš absolutní**

   **Citace:**

   > `stránka, na kterou nevede odkaz a která je zakázaná, není zdroj pro nikoho`

   **Problém:**  
   Pokud je stránka zakázaná v `robots.txt`, robot ji nemá procházet. Ale „na kterou nevede odkaz“ samo o sobě neznamená, že nemůže být objevena jinak, například ze sitemap, z externího odkazu nebo z historické znalosti URL. Formulace je navíc příliš kategorická pro AI část.

   **Návrh opravy:**

   > `Stránka, která není normálně prolinkovaná a zároveň je blokovaná v robots.txt, není spolehlivě dostupný zdroj pro vyhledávače ani pro AI systémy, které pravidla robots.txt respektují.`

10. [WARNING] **Závěr o sitemapě je moc kategorický pro všechny parametrické URL**

   **Citace:**

   > `Parametrické a filtrované adresy tam nemají co dělat.`

   **Problém:**  
   Obecně je to dobré pravidlo pro běžné kombinace filtrů. Ale pokud by firma záměrně vytvořila kanonickou indexovatelnou vstupní stránku, není problém samotná přítomnost parametru, ale zda jde o kanonickou URL s užitečným obsahem. Článek sice doporučuje převést takové stránky do cesty, ale věta je pořád absolutní.

   **Návrh opravy:**

   > `Běžné parametrické a filtrované varianty do sitemapy nepatří. Do sitemapy dávejte jen kanonické adresy, které opravdu chcete indexovat — ideálně samostatné vstupní stránky, ne nahodilé kombinace filtrů.`

11. [WARNING] **Vlastní měření Shoptetu je použité příliš zeširoka**

   **Citace:**

   > `na téhle platformě je tedy rozhodnutí předvolené za vás`

   **Problém:**  
   Vlastní měření je cenné, ale vzorek 47 e-shopů / 46 kategorií nedokazuje stav celé platformy a všech šablon/úprav. Navíc formulace „předvolené za vás“ může vést k falešnému pocitu bezpečí.

   **Návrh opravy:**

   > `V našem měření Shoptetu to u většiny kontrolovaných kategorií vypadalo jako výchozí chování. Neplatí to ale automaticky pro každou šablonu a každou úpravu, proto to ověřte na vlastním webu.`

12. [TIP] **Upřesnit nesoulad „47 e-shopů“ vs. „43 ze 46 kategorií“**

   **Citace:**

   > `vlastní měření 47 e-shopů na Shoptetu`  
   > `43 ze 46 kategorií`

   **Problém:**  
   Není to nutně chyba, ale čtenář může tápat, proč se jednou mluví o 47 e-shopech a podruhé o 46 kategoriích.

   **Návrh opravy do zdrojové poznámky nebo závorky:**

   > `Vlastní měření 47 e-shopů na Shoptetu; pro kontrolu odkazů na filtrované adresy bylo vyhodnotitelných 46 kategorií.`

13. [TIP] **FAQ odpověď „Mám filtrované adresy zakázat, nebo nechat indexovat?“ směšuje crawl a index**

   **Citace:**

   > `Mám filtrované adresy zakázat, nebo nechat indexovat?`

   **Problém:**  
   Odpověď je věcně slušná, ale otázka sama vrací čtenáře k dichotomii „zakázat vs. indexovat“. Přesnější by bylo oddělit procházení a vlastní vstupní stránky.

   **Návrh opravy otázky:**

   > `Mám filtrované adresy pustit k procházení?`

   A odpověď nechat jen mírně upravit:

   > `Výchozí volba je nepouštět vyhledávací roboty do běžných kombinací filtrů. Pokud některá kombinace odpovídá reálné poptávce, nedělejte z ní náhodnou filtrovanou URL, ale samostatnou kanonickou stránku s vlastním obsahem a normálním odkazem.`

14. [TIP] **Meta description je dobrá délkou, ale může lépe pokrýt AI bez spekulace**

   **Citace:**

   > `description: "Filtry umí vyrobit nekonečný prostor adres. Co k nim Google dokumentuje, čím je zavřít a kdy si filtrovaná stránka zaslouží vlastní stránku."`

   **Problém:**  
   Délka je v pořádku. Chybí ale vazba na cílové klíčové slovo s „AI“.

   **Návrh opravy:**

   > `description: "Filtry a faceted navigace v AI éře: co Google říká o procházení URL, kdy použít robots.txt a kdy vytvořit vlastní stránku."`

---

## 3. Co je v pořádku

- Článek správně odděluje dokumentaci Googlu od oborové praxe v sekci **„Co v dokumentaci není“**.
- Citované zdroje jsou relevantní, datované a odpovídají roku publikace 2026.
- CTA je konkrétní a vede na produkty: **AI SEO Wireframe Pack 1 490 Kč** a **AI SEO audit 3 600 Kč**.
- FAQ obsahuje reálné otázky a většinou samostatně srozumitelné odpovědi.
- Interní odkazy jsou tematicky relevantní a dobře pokrývají související články bez zjevné kanibalizace.
- Zákaz slibů typu „garantujeme pozice“ nebo „AI vás začne doporučovat“ je dodržen.
- Část o tom, že Google dokumentace k faceted navigaci neřeší AI roboty, je správně opatrná.