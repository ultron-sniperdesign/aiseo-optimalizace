# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit článku `seo-pro-seznam-cz`, kolo 1: věcná správnost a aktuálnost pro rok 2026, stav k **26. 11. 2026**. Kontrolován frontmatter i tělo `clanek.mdx`, brief `research.md` a dodané soubory ve `zdroje/`. Web nebyl vyhledáván ani otevírán. Ostatní osy nejsou předmětem tohoto kola; CTA je posouzeno pouze proti obsahu produktu.

Článek má rozsáhlé primární podklady, ale některé závěry jsou silnější než doklad a některé praktické postupy vynechávají rozhodující podmínky. Označení [BLOCKER] u vynechaných podmínek a neověřeného popisu rozhraní odpovídá pravidlům tohoto kola. Neznamená, že je prokázán opačný stav platformy. U tabulky a kontrolního seznamu uvádím i podmínky vysvětlené jinde v článku, pokud jejich samostatná formulace znovu zobecňuje pravidlo bez výjimky.

## Nálezy

### 1. [BLOCKER] Popis grafů a postupu v rozhraní nemá doklad z rozhraní

**Místo a citace:** `clanek.mdx:117`: „Přihlaste se […] přidejte web a ověřte ho […]“; `clanek.mdx:121`: „Grafy ukazují, kolik stránek robot navštívil […] Nástroj je v betě […].“

**Vada:** `research.md:14` výslovně nechává vrstvu Rozhraní prázdnou. Podle pravidel tohoto kola nelze dokumentací doložit, co čtenář v aktuálním rozhraní uvidí. Přiznání netestování na řádcích 43 a 161 je správné, ale neodstraňuje konkrétní kategorický popis grafů ani postup podávaný jako ověřená obsluha. Dokumentace naopak stačí k výslovně připsanému popisu dokumentovaných možností a API.

**Zdroj:** `research.md:13–16`; `zdroje/seznam-seznam-webmaster.txt:5–23,45–52`, [Seznam Webmaster](https://o-seznam.cz/napoveda/vyhledavani/seznam-webmaster/), poslední změna 10. 12. 2025.

**Navržené nové znění kroku o statistikách:**

> Nápověda Seznam Webmasteru popisuje metriky navštívených, indexovaných, přesměrovaných a chybových stránek. U API uvádí vzorek až 1 000 chybových URL a možnost dotázat se na konkrétní URL. Nápověda službu označuje jako beta verzi a upozorňuje na možné výpadky dat. Aktuální podobu rozhraní ani dostupnost těchto přehledů jsem neověřoval.

U ověřování změnit úvod na: „Nápověda pro přidání webu uvádí přihlášení Seznam účtem a dvě metody ověření…“ Pokračovat dokumentovanými technickými podmínkami, nikoli popisem aktuálních obrazovek nebo ovládacích prvků. Stejně zacházet s popisem osnovy a rychlých odkazů na řádku 105: připsat jej nápovědě, nikoli vlastnímu pozorování.

### 2. [BLOCKER] Tvrzení, že robot nepozná obsah obrázku, není doloženo pro Google

**Místo a citace:** `clanek.mdx:47–51`: „Tyhle zásady stojí v nápovědě Seznamu i v dokumentaci Googlu […] robot z obrázku sám nepozná, co na něm je.“

**Vada:** Seznam takové obecné tvrzení ve svém Optimalizačním minimu skutečně má. Dodaný Google Starter Guide však říká, že alternativní a okolní text pomáhá Googlu obrázek pochopit. Netvrdí, že Google bez textu obsah obrázku rozpoznat nedokáže. Doporučení popisovat obrázky je společné; deklarovaná neschopnost robotů společně doložena není. Z chybějícího dokladu zároveň nevyvozuji konkrétní úroveň obrazového rozpoznávání Googlu.

**Zdroj:** `zdroje/seznam-optimalizace_optimalizacni-minimum.txt:137–140`, [Optimalizační minimum](https://o-seznam.cz/napoveda/vyhledavani/optimalizace/optimalizacni-minimum/); `zdroje/google-starter.txt:557–580`, [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

**Navržené nové znění:**

> Nadpisy, popisný text odkazů a alternativní text obrázků pomáhají vyhledávačům pochopit obsah a jeho souvislosti. Nápověda Seznamu i dokumentace Googlu doporučují obrázky výstižně popsat.

### 3. [BLOCKER] Neznámé vykreslování JavaScriptu je zařazeno mezi prokázané rozdíly

**Místo a citace:** `clanek.mdx:59–61`: „šest rozdílů proti Googlu […] V těchto bodech se […] liší“; `clanek.mdx:73`: „Jestli vykresluje obsah z JavaScriptu, nápověda neříká“; `clanek.mdx:157`: „místa, kde se pravidla rozcházejí […] obsah, který vzniká až v JavaScriptu“.

**Vada:** Samotná levá buňka je opatrná a správná. Nadřazené tvrzení a závěr ale z nedoložené schopnosti dělají doložený rozdíl. Zdroj Googlu vykreslování popisuje; dodaná nápověda Seznamu neposkytuje srovnatelnou odpověď. To není důkaz, že Seznam nevykresluje. Obdobně absence Googlu v `searchengines.json` dokládá stav tohoto seznamu, nikoli sama o sobě kategorické tvrzení o všech možných způsobech podpory IndexNow.

**Zdroj:** `research.md:16,26,39`; `zdroje/seznam-seznambot_presmerovani-url.txt:14–16,29`; `zdroje/seznam-nejcastejsi-dotazy.txt:53`; `zdroje/google-js.txt:350–369`, [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics); `zdroje/indexnow-searchengines.json.txt:3–11`, [seznam účastníků IndexNow](https://www.indexnow.org/searchengines.json).

**Navržené nové znění uvedení tabulky:**

> Následující tabulka srovnává dokumentovaná pravidla obou vyhledávačů a označuje také místa, kde podklady nestačí k určení rozdílu. U SeznamBota není z dodané nápovědy možné určit, zda vykresluje obsah vytvářený JavaScriptem.

**Navržená oprava závěru:**

> Zkontrolujte doložené rozdíly u X-Robots-Tag, Request-rate a kanonických odkazů. Zvlášť posuďte velikost HTML, u níž si nápověda Seznamu odporuje, a obsah závislý na JavaScriptu, jehož vykreslování SeznamBotem podklady neobjasňují. Jako opatrné technické doporučení proto hlavní obsah posílejte už v HTML ze serveru.

Označení „šest rozdílů“ upravit tak, aby neslibovalo šest prokázaných rozdílů v chování.

### 4. [BLOCKER] Request-rate postrádá omezení maxima a návrat k výchozímu chování

**Místo a citace:** `clanek.mdx:70`: „Čte direktivu Request-rate, třeba 100/15m. Nejméně 1 dokument za 30 sekund, platnost lze omezit na časové okno.“

**Vada:** Minimum je uvedeno správně, ale formulace může znít jako zaručená dosažená rychlost. Zdroj stanoví minimum nastavení, automatický převod nižších hodnot na minimum a maximum závislé na výkonu a zatížení robota. Časové okno také není zákaz stahování ve zbývajícím čase: robot se vrací k výchozímu chování. Maximum už brief na `research.md:36` zachycuje, článek jej nepřebírá; návrat mimo okno chybí i v tabulce podmínek.

**Zdroj:** `zdroje/seznam-seznambot_robots-txt.txt:77–95`, [Robots.txt](https://o-seznam.cz/napoveda/vyhledavani/seznambot/robots-txt/).

**Navržené nové znění levé buňky:**

> Podporuje Request-rate, např. 100/15m. Nejnižší podporované nastavení je 1 dokument za 30 sekund; nižší rychlost převede na toto minimum. Maximum omezuje výkon a zatížení SeznamBota. Pravidlo lze omezit časovým oknem, mimo něž se robot vrací k výchozímu chování. Nejde o záruku dosažené rychlosti.

### 5. [BLOCKER] Kanonizace v tabulce zamlčuje podmínky dostupného cílového obsahu

**Místo a citace:** `clanek.mdx:71`: „Kanonický odkaz na jinou adresu bere jako přesměrování 301, ale jen u obsahově podobných stránek.“

**Vada:** Podobnost je nutná, ale popis přijatelného cíle zůstává neúplný. Cíl musí mít vlastní obsah k porovnání, nemá být přesměrováním a nemá vyžadovat cookie, které robot nepodporuje. Řádek 147 tyto podmínky z velké části uvádí správně; srovnávací tabulka je má obsahovat také, nebo na ně přímo upozornit. Nejde o skutečné přesměrování návštěvníka.

**Zdroj:** `zdroje/seznam-seznambot_kanonicke-url.txt:19–26`, [Kanonické URL](https://o-seznam.cz/napoveda/vyhledavani/seznambot/kanonicke-url/); `zdroje/seznam-seznambot_presmerovani-url.txt:16,30`, [Přesměrování URL](https://o-seznam.cz/napoveda/vyhledavani/seznambot/presmerovani-url/).

**Navržené nové znění levé buňky:**

> Kanonický odkaz sám na sebe ignoruje. Odkaz na jinou URL interně zpracovává obdobně jako 301, bez přesměrování návštěvníka. Nepřijme jej, pokud stránky nepovažuje za dostatečně obsahově podobné. Cíl musí obsahovat porovnatelný obsah; nemá být přesměrováním ani vyžadovat cookie.

### 6. [BLOCKER] Limity sitemap neříkají, že jde o nekomprimovanou velikost a dva současné stropy

**Místo a citace:** `clanek.mdx:25,54`: „sitemapy do 50 MB nebo 50 000 adres“ / „nejvýš 50 MB nebo 50 000 adres na soubor“.

**Vada:** Chybí rozhodující podmínka, že se velikost počítá po dekompresi. Samotné „nebo“ navíc může být vyloženo jako volba jednoho limitu; soubor nesmí překročit ani jeden. Pro Seznam nápověda navíc omezuje obsah jedné sitemapy na URL z jednoho webserveru. Poslední podmínku nelze automaticky vydávat za shodné omezení Googlu, jehož dokumentace popisuje i odesílání sitemap pro více webů.

**Zdroj:** `zdroje/seznam-seznambot_sitemap-xml.txt:9–16`, [Sitemap.xml](https://o-seznam.cz/napoveda/vyhledavani/seznambot/sitemap-xml/); `zdroje/google-sitemap.txt:391–411`, [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

**Navržené nové znění:**

> Pro oba vyhledávače platí nejvýš 50 MB v nekomprimovaném stavu a současně nejvýš 50 000 URL v jedné sitemapě. Překročení kteréhokoli limitu vyžaduje rozdělení. Nápověda Seznamu dále požaduje URL z jednoho webserveru; umístění sitemapy oznamte absolutní adresou v robots.txt.

V FAQ zkrátit na: „sitemapy nejvýš 50 MB po dekompresi a nejvýš 50 000 URL v jednom souboru“.

### 7. [BLOCKER] U velikostního limitu Googlebotu chybí stav po dekompresi

**Místo a citace:** `clanek.mdx:72`: „Pro Vyhledávání stáhne prvních 2 MB podporovaného souboru, u PDF 64 MB.“

**Vada:** Hodnoty i vymezení na Vyhledávání odpovídají hlavnímu textu dodaného zdroje. Chybí však, že limit platí pro nekomprimovaná data; velikost přeneseného gzip souboru tedy nestačí. Pro technické srovnání velikostí je tato podmínka podstatná. Zdroj také odděluje stahování HTML a odkazovaných prostředků a varuje, že jiní roboti Googlu mohou mít jiné limity.

**Zdroj:** `zdroje/google-googlebot.txt:366–375`, [Googlebot](https://developers.google.com/search/docs/crawling-indexing/googlebot), aktualizace 3. 2. 2026. Řádek 410 obsahuje souhrnná metadata se starší hodnotou 15 MB; pro zdejší závěr je rozhodující hlavní text na řádcích 366–373. Čísla v článku proto nenavrhuji měnit na 15 MB.

**Navržené nové znění pravé buňky:**

> Googlebot pro Google Search stáhne prvních 2 MB podporovaného souboru, u PDF prvních 64 MB; limit se počítá z nekomprimovaných dat. K posouzení indexace předá jen staženou část. Odkazované prostředky stahuje zvlášť; jiní roboti Googlu mohou mít odlišné limity.

### 8. [BLOCKER] Postup IndexNow nestačí ke správnému vytvoření a umístění klíče

**Místo a citace:** `clanek.mdx:129`: „Na web umístěte soubor s klíčem (8 až 128 znaků […] kódování UTF-8, nejlépe v kořeni) a posílejte adresy […].“

**Vada:** „Soubor s klíčem“ neříká povinný název v doporučené variantě ani přesný obsah. Klíč v kořeni musí být dostupný jako `<klíč>.txt`; soubor nesmí obsahovat HTML, BOM ani další data. Nabídnutá alternativa mimo kořen vyžaduje `keyLocation` v každém požadavku a podle nápovědy Seznamu dovoluje hlásit jen URL z daného adresáře a jeho podadresářů. Bez těchto podmínek doporučený postup může vést k odmítnutí požadavku.

**Zdroj:** `zdroje/seznam-seznambot_protokol-indexnow.txt:9–30`, [Protokol IndexNow](https://o-seznam.cz/napoveda/vyhledavani/seznambot/protokol-indexnow/); `zdroje/indexnow-faq.txt:145–166`, [IndexNow FAQ](https://www.indexnow.org/faq).

**Navržené nové znění konfigurační části:**

> Vygenerujte klíč o 8–128 znacích ze znaků a–z, A–Z, 0–9 a pomlčky. Do veřejně dostupného souboru v UTF-8 bez BOM, HTML a dalších dat vložte pouze klíč. V doporučené variantě soubor pojmenujte `<klíč>.txt` a uložte jej do kořene webu. Pokud jej uložíte do složky, přidejte ke každému požadavku parametr `keyLocation`; podle nápovědy Seznamu pak můžete hlásit jen URL z této složky a jejích podadresářů. Klíč v požadavku musí odpovídat souboru na webu.

### 9. [BLOCKER] Předání IndexNow dalším vyhledávačům není bezpodmínečné; dávka není limit tempa

**Místo a citace:** `clanek.mdx:129`: „až 10 000 najednou požadavkem POST […] oznámení předá ostatním zapojeným vyhledávačům“.

**Vada:** Předání ostatním je v nápovědě vázáno na ověření klíče. Chybí také rozlišení maxima URL v jednom požadavku od operativního omezování požadavků, které může skončit HTTP 429. Podmínky ověření a omezení už brief na `research.md:40` zná. Správné upozornění „stažení ani indexaci nezaručuje“ ponechat, stejně jako podmínku algoritmického výběru u lhůty do týdne.

**Zdroj:** `zdroje/seznam-seznambot_protokol-indexnow.txt:7,64–66,143–168`, [Protokol IndexNow](https://o-seznam.cz/napoveda/vyhledavani/seznambot/protokol-indexnow/). Obecný FAQ protokolu na `zdroje/indexnow-faq.txt:414–419` popisuje limity jednotlivých účastníků, ale neopravňuje vymyslet konkrétní denní kvótu pro Seznam.

**Navržené nové znění provozní části:**

> URL posílejte jednotlivě metodou GET nebo nejvýš 10 000 URL v jednom požadavku POST. Seznam neuvádí celkový početní limit této služby, ale při velkém množství požadavků současně ji operativně omezuje; odpověď HTTP 429 znamená překročení počtu požadavků z IP adresy. HTTP 200 potvrzuje předání informace, nikoli stažení nebo indexaci. URL vybrané algoritmy k indexaci se podle nápovědy dostanou do výsledků do týdne. Ostatní zapojené vyhledávače Seznam informuje po ověření klíče.

### 10. [BLOCKER] Dokumentovaný postup ověření Webmasteru vynechává platnost kódu a překážku přesměrování HTTP

**Místo a citace:** `clanek.mdx:117`: „ověřte ho meta značkou […] nebo souborem […] Verze webu na http a https se ověřují zvlášť.“

**Vada:** Při opakovaném generování platí pouze poslední kód; nový zneplatňuje předchozí. Samotné „ověřují zvlášť“ také neříká, že ověření HTTP selže, pokud se ověřovací požadavek přesměruje na HTTPS. Ověřovací soubor nebo stránka musejí být přístupné robotovi. To jsou podmínky úspěchu právě popsaného postupu, nikoli volitelné doplňky. Netvrdím, že chybí samotná podmínka indexovatelnosti pro přidání stránky: tu FAQ i krok na řádku 125 uvádějí správně.

**Zdroj:** `zdroje/seznam-seznam-webmaster.txt:15–23,51–52`, [Seznam Webmaster](https://o-seznam.cz/napoveda/vyhledavani/seznam-webmaster/).

**Navržené nové znění technických podmínek, s připsáním nápovědě podle nálezu 1:**

> Nápověda pro ověření požaduje meta značku `seznam-wmt` přímo v `<head>` domovské stránky, nebo soubor `seznam-wmt-<kód>.txt` v kořeni webu. Robot musí mít k příslušné stránce či souboru přístup. Použijte poslední vygenerovaný kód; vytvoření nového zneplatní předchozí. Vložení značky skriptem není podporováno a ověřovací soubor má na webu zůstat kvůli opakovaným kontrolám. HTTP a HTTPS vyžadují vlastní ověřovací údaje; ověření HTTP se nezdaří, pokud se požadavek přesměruje na HTTPS.

### 11. [BLOCKER] Doporučení nosnippet zatajuje významnou část jeho účinků

**Místo a citace:** `clanek.mdx:33,86,140`: „zároveň vypne textový úryvek“ / „vypne úryvek“.

**Vada:** Jako popis vedlejších účinků doporučeného zákazu Seznam AI je to neúplné. Podle nápovědy `nosnippet` odstraní také náhled, zobrazování strukturovaných dat, například ceny a hodnocení produktu, a možnost vytvoření vybraného úryvku. Zůstává titulek a odkaz; text se dál používá například pro relevanci. Čtenář e-shopu proto rozhoduje o širší změně než o pouhém zmizení popisku. Meta značka se navíc zapisuje do konkrétní stránky, zatímco uvedené pravidlo `Disallow: /` míří na celý web.

**Zdroj:** `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:8–27`, [Zakázání tvorby snippetů](https://o-seznam.cz/napoveda/vyhledavani/seznambot/zakazani-tvorby-snippetu/); `zdroje/seznam-seznambot_zakaz-tvorby-ai-odpovedi-z-vaseho-webu.txt:6–24`, [Zákaz tvorby AI odpovědí](https://o-seznam.cz/napoveda/vyhledavani/seznambot/zakaz-tvorby-ai-odpovedi-z-vaseho-webu/).

**Navržené nové znění:**

> Pro zákaz používání celého webu jako zdroje AI odpovědí Seznam podle nápovědy respektuje v robots.txt kteroukoli z položek `Seznam-Extended`, `AI` nebo `MachineLearning` s pravidlem `Disallow: /`; stačí jedna. Druhou dokumentovanou možností je `<meta name="seznambot" content="nosnippet">` v hlavičce příslušné stránky. Ta zároveň zakáže textový úryvek, náhled, zobrazování strukturovaných dat i tvorbu vybraného úryvku. Podle nápovědy zůstává titulek a odkaz; text se dál může používat pro výpočet relevance.

U `data-nosnippet` na řádku 86 zpřesnit: „Označte jím prvek `div`, `span` nebo `section`, který obsahuje příslušná strukturovaná data; jejich interní používání tím podle nápovědy nekončí.“ Viz tentýž zdroj, řádky 39 a 138.

### 12. [BLOCKER] Kontrolní seznam bez výjimky převádí každý meta refresh na 302

**Místo a citace:** `clanek.mdx:149`: „Meta refresh a rozpoznané přesměrování JavaScriptem Seznam zpracuje jako 302.“

**Vada:** Pro meta refresh delší než sedm sekund to podle zdroje neplatí: stránka není považována za přesměrovanou a normálně se indexuje. Řádek 87 výjimku uvádí správně, ale shrnující kontrolní seznam ji znovu ruší. U 302 je navíc užitečné doplnit podstatný následek: Seznam může ve výsledcích zvolit původní i cílovou URL. Několikadenní ověřování návratu HTTP 200 je popis dokumentovaného chování, které zdroj výslovně připouští změnit.

**Zdroj:** `zdroje/seznam-seznambot_presmerovani-url.txt:25–32`, [Přesměrování URL](https://o-seznam.cz/napoveda/vyhledavani/seznambot/presmerovani-url/).

**Navržené nové znění položky:**

> Trvalé přesuny řešte serverovým stavem 301 na odpovídající novou stránku. Seznam podle nápovědy zpracuje meta refresh se zpožděním nejvýš sedm sekund a rozpoznané přesměrování JavaScriptem jako 302; ve výsledcích tak může ponechat i původní URL. Při delším meta refresh stránku nepovažuje za přesměrovanou a normálně ji indexuje.

K řádku 87 lze doplnit: „U 302 podle nápovědy robot několik dnů ověřuje návrat HTTP 200; Seznam upozorňuje, že se toto chování může změnit.“

### 13. [BLOCKER] Z výčtu zdrojů Seznam AI vzniká nedoložená převaha výsledků vyhledávání

**Místo a citace:** `clanek.mdx:140`: „Protože Seznam AI čerpá zejména z výsledků Seznam Vyhledávání, je klasické SEO […] výchozím bodem i pro AI odpovědi“; obdobný závěr `clanek.mdx:157`.

**Vada:** Technické podmínky uvádějí více zdrojů, zejména trojici: výsledky vyhledávání, obsah služeb Seznamu a zdroje jazykového modelu. Neurčují jejich podíly ani převahu prvního zdroje. Řádek 138 tuto trojici shrnuje správně, řádek 140 ji významově zužuje. Není doloženo, že klasické SEO tvoří nutný nebo hlavní začátek každé cesty do Seznam AI. Není ale doložena ani nulová role SEO.

**Zdroj:** `zdroje/seznam-technicke-podminky.txt:27–30`, [Technické podmínky](https://o-seznam.cz/napoveda/vyhledavani/technicke-podminky/), poslední změna 22. 9. 2026; `research.md:15–16` neobsahuje vlastní měření podílů zdrojů.

**Navržené nové znění:**

> Výsledky Seznam Vyhledávání patří mezi zdroje Seznam AI vedle obsahu služeb Seznamu a zdrojů jazykového modelu. Technické podmínky jejich vzájemný podíl neuvádějí. SEO pro Seznam je proto relevantní pro tu cestu, při níž AI využívá výsledky vyhledávání; samo o sobě citaci nezaručuje.

Stejnou podmíněnost promítnout do poslední věty na řádku 157.

### 14. [BLOCKER] U Seznam AI chybí podmínka pro reklamní zdroje a pravidlo řazení převzatých výsledků

**Místo a citace:** `clanek.mdx:138`: „Pořadí odkazů nemusí odpovídat výsledkům vyhledávání a do odpovědi se mohou dostat i informace ze sponzorovaných výsledků; samotná platba za reklamu zahrnutí podle Seznamu nezaručuje.“

**Vada:** Relevantnost je dříve uvedena jako obecné hlavní kritérium. Technické podmínky však u sponzorovaných a jiných reklamních informací přidávají výslovnou podmínku relevance k dotazu; konkrétní reklamní věta ji nemá. Zdroj také výslovně uvádí, že při čerpání z výsledků vyhledávání se uplatní pravidla řazení příslušného typu výsledků, i když výsledné pořadí odkazů AI nemusí zachovat. Pouhé „pořadí nemusí odpovídat“ tuto vazbu nevyjadřuje. Samotný výčet kritérií výběru zdrojů na řádku 138 je jinak úplný.

**Zdroj:** `zdroje/seznam-technicke-podminky.txt:28–30`, [Technické podmínky](https://o-seznam.cz/napoveda/vyhledavani/technicke-podminky/).

**Navržené nové znění závěru odstavce:**

> Pokud Seznam AI vychází z výsledků Seznam Vyhledávání, uplatní se pravidla řazení příslušného typu výsledků. Odkazy však AI nemusí převzít ve stejném pořadí. Do výstupu může zahrnout také informace ze sponzorovaných výsledků nebo jiného reklamního obsahu, pokud jsou relevantní k dotazu. Platba za reklamu jejich zahrnutí nezaručuje a výstup Seznam AI nelze přímo ovlivnit ani koupit.

### 15. [BLOCKER] Rychlé odkazy nemají být libovolné odkazy z homepage; osnova není zaručená

**Místo a citace:** `clanek.mdx:105`: „Osnovu výsledku skládá z vnitřních odkazů na kotvy ve stránce a rychlé odkazy z odkazů na domovské stránce.“

**Vada:** U rychlých odkazů chybí podmínka stejné domény druhé úrovně a výběru podle přínosu uživateli. Nestačí tedy umístit na homepage libovolný odkaz. U osnovy jsou kotvy předpokladem možného zobrazení, nikoli jeho zárukou; zdroj ji výslovně odmítá a výběr váže na dotaz. Podmínku nezaručené osnovy už brief uvádí na `research.md:49`. Popis současně musí zůstat připsaný nápovědě, protože výsledky nebyly prohlíženy.

**Zdroj:** `zdroje/seznam-vysledky-vyhledavani_struktura-vysledku.txt:6,22–28`, [Struktura výsledku](https://o-seznam.cz/napoveda/vyhledavani/vysledky-vyhledavani/struktura-vysledku/).

**Navržené nové znění:**

> Podle nápovědy mohou vnitřní odkazy na kotvy ve zdrojovém HTML umožnit zobrazení osnovy výsledku; její zobrazení zaručeno není a odkazy se vybírají podle dotazu. Rychlé odkazy Seznam vybírá z odkazů na domovské stránce, které vedou na dokumenty téže domény druhé úrovně a jsou pro uživatele nejpřínosnější.

### 16. [WARNING] Rozpor kolem meta name="seznambot" je citován, ale není vysvětlen

**Místo a citace:** `clanek.mdx:86`: „`<meta name="seznambot" content="nosnippet">` […] Zápis `<meta name="SeznamBot" content="index">` naopak Seznam nepodporuje.“

**Vada:** Oba příklady mají podklad, proto není správné označit podporu `nosnippet` za vymyšlenou. Obecná stránka Meta tag robots ale odmítá zápis s `name="SeznamBot"`, zatímco novější specializované stránky přímo používají `name="seznambot"`. Z těchto ukázek nelze vyvodit, že podporu určuje velikost písmen v názvu, ani že se tento název obecně hodí pro `index` či `noindex`. Článek má rozpor pojmenovat stejně otevřeně jako u velikosti HTML.

**Zdroj:** `zdroje/seznam-seznambot_meta-tag-robots.txt:34`, [Meta tag robots](https://o-seznam.cz/napoveda/vyhledavani/seznambot/meta-tag-robots/), změna 22. 4. 2026; `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:11–25,139–150`, [Zakázání tvorby snippetů](https://o-seznam.cz/napoveda/vyhledavani/seznambot/zakazani-tvorby-snippetu/), změna 4. 6. 2026; `zdroje/seznam-seznambot_zakaz-tvorby-ai-odpovedi-z-vaseho-webu.txt:18–24`, změna 22. 9. 2026.

**Navržené nové znění:**

> Specializovaná nápověda uvádí `<meta name="seznambot" content="nosnippet">` a pro zákaz vybraného úryvku hodnotu `nofeaturedsnippet`. Obecná stránka Meta tag robots přitom zápis s `name="SeznamBot"` odmítá a ukazuje příklad s hodnotou `index`. Nápověda tak není v obecném popisu podpory tohoto názvu jednotná. Z příkladů nevyvozuji pravidlo podle velikosti písmen; pro zákaz indexace použijte dokumentovaný `<meta name="robots" content="noindex">`.

### 17. [WARNING] Údaj o 7 % je doložen jako tvrzení nápovědy, ne jako obecný účinek v roce 2026

**Místo a citace:** `clanek.mdx:105`: „podle jeho studie zvedá proklikovost stránky zhruba o 7 %“.

**Vada:** Číslo si autor nevymyslel a zdroj je konkrétní. Článek však vynechává „průměrnou“ proklikovost a přítomným časem zobecňuje tvrzení studie na aktuální účinek. Dodaná stránka neuvádí datum, vzorek ani metodiku studie; datum změny stránky není datem měření. Vrstva Měření v briefu je prázdná. Nelze doplnit závěr pro rok 2026 ani převést procenta na procentní body.

**Zdroj:** `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:149–150`, [Zakázání tvorby snippetů](https://o-seznam.cz/napoveda/vyhledavani/seznambot/zakazani-tvorby-snippetu/), změna stránky 4. 6. 2026; `research.md:15`.

**Navržené nové znění:**

> Seznam v nápovědě odkazuje na vlastní studii a uvádí přibližně o 7 % vyšší průměrnou proklikovost při vytvoření vybraného úryvku. Dodaná stránka neuvádí datum ani metodiku studie; tento údaj proto nelze brát jako předpověď výsledku konkrétního webu v roce 2026.

Alternativou je číslo vypustit. Nežádám doplnit nové měření ani dohledat blíže neurčenou studii; konkrétním doložitelným zdrojem zůstává uvedená nápověda.

### 18. [WARNING] Opakovaná nedostupnost je popsána pro celý web místo jednotlivé URL

**Místo a citace:** `clanek.mdx:88`: „Nedostupný web vyřadí až po třech neúspěšných pokusech po sobě […]. Zrušenou stránku vyřadí rychleji stav 410 než 404.“

**Vada:** Zdroj popisuje opakované stahování konkrétní stránky. Věta o webu může vyvolat dojem jedné společné lhůty pro odstranění celého webu. Srovnání 410 a 404 je správné; stojí za zpřesnění, že 410 znamená označení k odstranění bez dalšího ověřování stavu, nikoli zaručené okamžité zmizení z výsledků.

**Zdroj:** `zdroje/seznam-nejcastejsi-dotazy.txt:48–49`, [Nejčastější dotazy](https://o-seznam.cz/napoveda/vyhledavani/nejcastejsi-dotazy/); `zdroje/seznam-seznambot_odstranovani-stranek.txt:12–20`, [Odstraňování stránek](https://o-seznam.cz/napoveda/vyhledavani/seznambot/odstranovani-stranek/).

**Navržené nové znění:**

> Nedostupnou stránku podle nápovědy SeznamBot zkouší stáhnout opakovaně v několikadenních intervalech a z výsledků ji vyřadí po třech po sobě jdoucích zjištěních nedostupnosti. Stav 404 několikrát ověřuje. Po zjištění 410 jej dál neověřuje a stránku rovnou označí k odstranění, které proto proběhne rychleji než u 404.

### 19. [BLOCKER] Přidání homepage není zárukou objevení ostatních stránek

**Místo a citace:** `clanek.mdx:27`: „stačí přidat hlavní stránku a ostatní robot najde po odkazech“.

**Vada:** Zdroj používá podmíněné „by měl“ a výslovně požaduje alespoň jeden odkaz na každou stránku. Článek z toho dělá jistý následek. Odkaz na homepage neřeší nedostupné nebo nepropojené podstránky a objevení navíc není totéž co indexace.

**Zdroj:** `zdroje/seznam-nejcastejsi-dotazy.txt:5–8,18–19,44–45`, [Nejčastější dotazy](https://o-seznam.cz/napoveda/vyhledavani/nejcastejsi-dotazy/).

**Navržené nové znění:**

> Podle nápovědy obvykle stačí přidat hlavní stránku; ostatní by měl robot objevit po odkazech, pokud na každou vede alespoň jeden odkaz. Samotné objevení URL nezaručuje její indexaci.

### 20. [WARNING] „Většina práce hotová“ není doložený rozsah úspor

**Místo a citace:** `clanek.mdx:41`: „Kdo má web připravený pro Google, má většinu práce pro Seznam hotovou.“

**Vada:** Shoda konkrétních základních doporučení je doložena. Podklady ale neměří podíl hotové práce ani rozsah úspor a neznají konkrétní implementaci čtenářova webu. Výrok je příliš široký zejména pro weby spoléhající na X-Robots-Tag nebo obsah vytvářený JavaScriptem. Nejde o požadavek dodat procento; takové číslo není v podkladech doloženo.

**Zdroj:** `research.md:15–16`; společné zásady dokládají `zdroje/seznam-optimalizace_optimalizacni-minimum.txt:19–49,80–118,137–150` a `zdroje/google-starter.txt:418–430,463–480,502–580`.

**Navržené nové znění:**

> SEO pro Seznam a Google sdílí řadu základních doporučení: výstižné titulky, srozumitelné adresy, užitečný obsah a popisné odkazy. U konkrétního webu je potřeba zvlášť prověřit technická pravidla SeznamBota.

### 21. [TIP] Rozpor 1 MB × 4 MiB doplnit přesnými jednotkami a daty obou stránek

**Místo a citace:** `clanek.mdx:72,79`: „na jednom místě 1 MB, na jiném 4 MiB“ / „držet HTML stránky pod 1 MB“.

**Posouzení:** Samotný rozpor i opatrné doporučení jsou přiznány správně. Zdroj nazývá hodnotu „1 MB“, ale zároveň ji definuje jako 1 048 576 bajtů. Doplnění zabrání dojmu, že se porovnává přesný desetinný megabajt s binárními MiB. Novější datum stránky se 4 MiB samo o sobě nedokazuje, že starší pravidlo bylo oficiálně zrušeno.

**Zdroj:** `zdroje/seznam-nejcastejsi-dotazy.txt:1,50–51`, [Nejčastější dotazy](https://o-seznam.cz/napoveda/vyhledavani/nejcastejsi-dotazy/), změna 12. 8. 2025; `zdroje/seznam-optimalizace_optimalizacni-minimum.txt:1,111`, [Optimalizační minimum](https://o-seznam.cz/napoveda/vyhledavani/optimalizace/optimalizacni-minimum/), změna 16. 12. 2025.

**Navržené nové znění:**

> Nejčastější dotazy, změněné 12. 8. 2025, uvádějí limit „1 MB“ a výslovně jej definují jako 1 048 576 bajtů. Optimalizační minimum, změněné 16. 12. 2025, uvádí 4 MiB výsledného zdrojového kódu. Z těchto podkladů nelze rozpor rozhodnout. Opatrnou volbou je držet HTML pod nižší uvedenou hranicí.

## Co je v pořádku

- **Klíčové technické rozdíly mají podklady obou stran.** Nepodpora X-Robots-Tag SeznamBotem proti podpoře u Googlu, Request-rate proti seznamu podporovaných polí Google robots.txt a ignorování kanonického odkazu na sebe proti jeho doporučení u Googlu jsou doloženy. Google doklady jsou ve složce skutečně přítomné; nelze tvrdit, že celé srovnání nemá zdroje.
- **Společné zásady jsou z velké části ověřené.** Titulky a popisky, čitelné URL, nadpisy, popisný text odkazů, noindex při povoleném stahování, meta keywords a rozpoznání jazyka z textu mají odpovídající doklady. Výjimkou je kategorická věta o nerozpoznávání obrázků.
- **Řazení přirozených výsledků je shrnuto věrně.** `clanek.mdx:96–103` zachovává všech šest skupin hlavních parametrů z `zdroje/seznam-technicke-podminky.txt:8–15`, včetně obou velikostí dokumentu a kódů reklamních systémů. Neuvádí vymyšlené váhy. Také nezávislost přirozeného řazení na reklamě ve Skliku odpovídá řádku 25 zdroje.
- **Výčet kritérií výběru zdrojů Seznam AI na řádku 138 odpovídá technickým podmínkám z 22. 9. 2026.** Není správné požadovat tvrzení, že Seznam kritéria vůbec nepopisuje. Opravu vyžaduje následné přisouzení převahy výsledkům vyhledávání a doplnění uvedených podmínek.
- **Článek správně odlišuje IndexNow od garantovaného přidání indexovatelné stránky přes Webmaster.** Minuty, denní kvóta, API až 500 URL denně, nezaručené stažení/indexace u IndexNow a týden pouze pro algoritmicky vybrané URL mají přímý doklad v nápovědě IndexNow na řádcích 7 a 168. Není důvod vymýšlet další číselnou kvótu rozhraní. Vlastní stránka nápovědy Seznamu pro IndexNow existuje v dodaných podkladech a JSON uvádí Seznam mezi účastníky.
- **Aktuálnost je převážně ukotvena správně.** V dodaných zdrojích nejsou použita data aktualizace pozdější než 26. 11. 2026. Datum přehledu SeznamBot 13. 7. 2026, změny dokumentace AI 22. 9. 2026 i výslovně přiznané stáří stránky HTTPS 13. 12. 2024 odpovídají hlavičkám. Samotné stáří stránky neprokazuje neplatnost jejího obsahu. Staré doporučení odkládat HTTPS článek nepřebírá. Přiznává jak neověřené vykreslování JavaScriptu, tak rozpor limitů HTML.
- **CTA nemá zjištěný blocker proti produktu.** `clanek.mdx:159` odpovídá `zdroje/pack.ts:93–98,205,344–348`: AI SEO Wireframe Pack, sedm uvedených typů stránek, anotace, šablony textů, ukázky strukturovaných dat včetně Product/Article/FAQPage, návod podle CMS a cena 1 490 Kč včetně DPH. Článek neslibuje samostatný audit Seznamu ani implementaci v ceně Packu.

## Co chybí nebo je příliš neurčité v tabulce podmínek

Tabulka **nechybí**: je na `research.md:33–53`. Nejde tedy o případ absence podmínek v briefu. Její slabinou je neúplný rozsah některých řádků a přenos pouze části známých podmínek do článku.

| Oblast v briefu | Konkrétní doplnění podmínky | Dohledatelný podklad v dodaných souborech |
|---|---|---|
| Request-rate, ř. 36 | Mimo uvedené časové okno návrat k výchozímu chování; minimum je podporované nastavení, nikoli záruka dosaženého počtu stažení. Maximum a převod na minimum už tabulka obsahuje. | `zdroje/seznam-seznambot_robots-txt.txt:90–95` |
| Kanonický odkaz, ř. 37 | Výjimky rozepsat: dostupný obsah cíle k porovnání, cíl nemá být přesměrování ani vyžadovat cookie. Odkaz na blíže neurčené „situace popsané v článku“ je pro kontrolu přenosu podmínek nedostatečný. | `zdroje/seznam-seznambot_kanonicke-url.txt:21–26` |
| Sitemapy, samostatný řádek chybí | Oba stropy současně, velikost po dekompresi, pro Seznam URL jednoho webserveru, absolutní adresa oznámení; u dynamické sitemapy požadovaný Content-Type. Neslučovat specifika Seznamu automaticky s Googlem. | `zdroje/seznam-seznambot_sitemap-xml.txt:9–16`; `zdroje/google-sitemap.txt:391–411` |
| Velikost Googlebotu, ř. 38 | Limity počítány z nekomprimovaných dat, prostředky se stahují samostatně a jiní roboti Googlu mohou mít jiné limity. U Seznamu doplnit explicitní bajtovou definici nižší hodnoty. | `zdroje/google-googlebot.txt:366–375`; `zdroje/seznam-nejcastejsi-dotazy.txt:51` |
| JavaScript, ř. 39 | Na straně Googlu nejde o záruku vykreslení každé URL: povolené stahování stránky a prostředků, HTTP stav, noindex a možné selhání vykreslení. Na straně Seznamu nadále ponechat „nelze ověřit“. | `zdroje/google-js.txt:358–369`; `zdroje/google-redirects.txt:502–507` |
| IndexNow, ř. 40 | Název souboru `<klíč>.txt` v kořeni, pouze klíč bez HTML/BOM/dat navíc, veřejná dostupnost, odpovídající klíč v požadavku; u umístění ve složce nejen `keyLocation`, ale i omezení na tuto složku a podadresáře. Ověření před předáním dalším účastníkům, cache do 24 hodin, 429 a limit 10 000 URL v POST už tabulka uvádí. | `zdroje/seznam-seznambot_protokol-indexnow.txt:7,10–20,29–30` |
| Ověření Webmasteru, vlastní řádek chybí | Jen poslední vygenerovaný kód, robotovi přístupný soubor/stránka, nepodporované vložení skriptem, zachování souboru a překážka přesměrování HTTP na HTTPS při ověření HTTP. | `zdroje/seznam-seznam-webmaster.txt:15–23,51–52` |
| Meta značky a zákaz AI, ř. 24 a 42 | Plné účinky nosnippet: také náhled, zobrazená strukturovaná data a vybraný úryvek; pokračující interní použití textu. Pojmenovat nejednotnost obecné a specializované nápovědy, neodvozovat ji z velikosti písmen. Pro `data-nosnippet` doplnit umístění kolem příslušných dat a pokračující interní použití. | `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:25–39,138–143`; `zdroje/seznam-seznambot_meta-tag-robots.txt:34` |
| 302 a meta refresh, ř. 45 | U 302 může být zvolena zdrojová i cílová URL; meta refresh nad sedm sekund znamená běžnou indexaci stránky. Několikadenní test návratu HTTP 200 i upozornění na možnou změnu chování už tabulka zachycuje. | `zdroje/seznam-seznambot_presmerovani-url.txt:25–32` |
| Nedostupnost, ř. 46 | Pravidlo opakovaných pokusů se vztahuje na konkrétní stránku; 404 se opakovaně ověřuje, 410 se dál neověřuje a stránka se označí k odstranění. Nejde o doloženou okamžitou lhůtu odstranění. | `zdroje/seznam-nejcastejsi-dotazy.txt:49`; `zdroje/seznam-seznambot_odstranovani-stranek.txt:17–20` |
| Vybraný úryvek, ř. 48 | Údaj studie se týká průměrné proklikovosti. Datum a metodika studie v dodané stránce nejsou uvedeny; neprezentovat jej jako měření tohoto webu nebo prognózu pro rok 2026. | `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:150` |
| Osnova a rychlé odkazy, ř. 49 | Výběr osnovy podle dotazu; rychlé odkazy jen na dokumenty stejné domény druhé úrovně a podle uživatelského přínosu. Nezaručené zobrazení osnovy už tabulka má. | `zdroje/seznam-vysledky-vyhledavani_struktura-vysledku.txt:23,28` |
| Seznam AI, ř. 51 | Neznámé podíly jednotlivých zdrojů; použití pravidel příslušného typu výsledků při čerpání z vyhledávání; reklamní informace jen při relevanci k dotazu a výstup nelze přímo koupit. Výčet hlavních kritérií a nezaručené zachování pořadí už tabulka obsahuje. | `zdroje/seznam-technicke-podminky.txt:27–30` |

Soupis dokumentace Z16 na `research.md:13` navíc nezachycuje všechny skutečně dodané Google doklady: doplnit `google-starter.txt` a `google-noindex.txt` s aktualizací 10. 12. 2025, `google-sitemap.txt` s aktualizací 8. 7. 2026 a `google-redirects.txt` s aktualizací 16. 11. 2026. Jejich nepřítomnost v soupisu není nepřítomností dokladu ve složce.

## Nejasnosti, které podklady nerozhodují

Rozhraní Seznam Webmasteru ani současná podoba výsledků nebyly ověřeny; dokumentaci nelze povýšit na UI test. Zůstává nerozhodnuté vykreslování JavaScriptu SeznamBotem, platný jednotný limit HTML a přesný obecný rozsah podpory `meta name="seznambot"` mimo výslovně dokumentované příklady. Neznáme váhy parametrů řazení, podíly zdrojů Seznam AI, číselnou kvótu ručního přidávání v rozhraní ani metodiku a datum studie o 7% změně proklikovosti. Žádná z těchto mezer neprokazuje nulovou schopnost, nulový vliv nebo neexistenci podpory. Pro opravu článku stačí uvedená omezení otevřeně přiznat; nedoplňovat odhady.
