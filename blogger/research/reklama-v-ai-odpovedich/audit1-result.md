**VERDIKT: OPRAVIT PŘED PUBLIKACÍ.**

Audit os 1 a 5 pro stav k **25. 11. 2026**. Posuzován je dodaný `clanek.mdx`, včetně frontmatteru a textů komponent, proti `research.md` a přiloženým zdrojům. Web nebyl použit. Řádky odkazují na původní soubory v této složce; článek ani podklady nebyly upraveny. Nálezy stejné vady na více místech jsou sloučeny.

Nejzávažnější problém je v hlavním příslibu článku: přenos UTM není důkaz, že GA4 zachová ruční médium před automatickým `ai-assistant`. Research tuto nejistotu zná, publikovaný text ji mění v jistotu. Další překážkou jsou vynechané podmínky platforem a tvrzení o skutečné podobě rozhraní při prázdné vrstvě UI.

**1. [BLOCKER] Přenos UTM článek zaměňuje za ověřené rozlišení placených a neplacených relací v GA4.**

- **Citace:** `clanek.mdx:108`: „Pokud se parametry přenesou, liší se placené a neplacené relace z ChatGPT … médiem: `cpc` proti `ai-assistant`.“ Stejný příslib má FAQ v `clanek.mdx:31`: „Placené oddělíte tak, že … dáte vlastní parametry UTM…“
- **Zdroj:** `research.md:13`, „Nelze ověřit“, bod 2, výslovně uvádí neznámou přednost ručního média vůči přiřazení `ai-assistant` i neznámé zařazení reklamního prokliku bez UTM. `zdroje/oai-basics.txt:45` dokládá přenos statických parametrů při kliknutí. `zdroje/ga4-channels-en.txt:252–254` a `zdroje/ga4-channels-cs.txt:250–252` popisují automatické médium podle odkazující stránky, ale souběh s ručním médiem nerozhodují. Pravidla placených kanálů jsou v `zdroje/ga4-channels-en.txt:214–235`.
- **Vada:** Zachovaný parametr v URL a výsledná dimenze relace jsou dvě různé věci. Shoda `cpc` s regulárním výrazem platí, ale neprokazuje, že právě toto médium GA4 pro relaci použije. Nelze ani předem určit konkrétní placený kanál jen z média; některá pravidla vyžadují také kategorii zdroje. Neprokázaná přednost UTM se nesmí změnit ani v opačné tvrzení, že je GA4 vždy přepíše.
- **Konkrétní nové znění místo odstavce na ř. 108:**

  > Médium `cpc` odpovídá regulárnímu výrazu používanému v pravidlech placených kanálů GA4. OpenAI uvádí, že statické UTM při prokliku přetrvají. Z dostupných podkladů ale nevíme, zda GA4 při rozpoznaném AI referreru zachová ruční médium, ani jak zařadí reklamní proklik bez UTM. Na skutečných relacích proto ověřte zdroj, médium, kampaň i výsledný kanál; samotný přenos parametrů oddělení návštěv nedokazuje.

  **FAQ na ř. 31:**

  > Reklamní odkazy označte vlastními UTM, například médiem `cpc`, a jejich skutečné zpracování ověřte v GA4. OpenAI dokládá přenos parametrů při kliknutí; z dodané nápovědy GA4 ale nelze určit jejich přednost vůči automatickému médiu `ai-assistant`. Zařazení prokliku z reklamy bez UTM nemáme ověřené.

  **Kontrolní krok na ř. 112:**

  > U prvních skutečných relací ověřte výsledný zdroj, médium, kampaň a kanál. Zkontrolujte zachování UTM při přesměrování. Pokud parametry přetrvají, ale GA4 vykáže `ai-assistant`, nepovažujte to automaticky za chybu přesměrování: přednost těchto způsobů přiřazení nemáme ověřenou.

**2. [BLOCKER] Správná čísla GA4 nejsou důkazem, že šlo o neplacené návštěvy.**

- **Citace:** `clanek.mdx:102`: „Relace s placeným médiem … v datech nejsou. Pro neplacené prokliky tedy kanál funguje.“ Dále `clanek.mdx:87` přiřazuje kanál AI Assistant organické straně srovnání a `clanek.mdx:137` přes jeho návštěvy vyhodnocuje organickou viditelnost.
- **Zdroj:** `zdroje/ga4-megadetail-export.txt:1–6`: 672 relací AI Assistant, 4 Unassigned, 2 Referral, žádné placené médium. `zdroje/ga4-channels-en.txt:252–254` definuje kanál médiem a referrerem, nikoli ověřením, zda uživatel klikl na reklamu. `research.md:13` přiznává neznámé zařazení reklamních kliknutí bez UTM.
- **Vada:** Součet **678 sedí** a sedí i rozpad. Export ale neobsahuje nezávislý důkaz placeného či neplaceného původu každého kliknutí. „Není placené médium“ není totéž jako „nebyla reklama“. Zároveň nelze tvrdit, že těchto 672 relací reklamu skutečně obsahuje — to rovněž doloženo není.
- **Konkrétní nové znění posledního závěru z měření na ř. 102:**

  > Export tedy potvrzuje, že GA4 rozpoznal většinu relací ze zdroje `chatgpt.com` jako AI Assistant. Samotná absence placeného média nedokazuje, že všechny relace byly neplacené; jejich reklamní původ tento export samostatně neověřuje.

  **Buňka organického měření na ř. 87:**

  > U AI asistentů sledujte zdroj, médium a kanál AI Assistant; samotný kanál není důkazem neplaceného původu. Neplacené prokliky z Přehledu od AI a režimu AI Google zahrnuje do Organic Search.

  **Věta na ř. 137:**

  > Organickou viditelnost sledujte přes zmínky a citace a přes návštěvy, u kterých dokážete odlišit reklamní původ. Samotný součet kanálu AI Assistant toto rozlišení nezaručuje.

**3. [BLOCKER] Podmínky zobrazování reklam v ChatGPT jsou neúplné a místy podané jako plošné pravidlo.**

- **Citace:** `clanek.mdx:25`: „Reklamu vidí uživatelé tarifů Free a Go…“; `clanek.mdx:56` a `clanek.mdx:60`: „jen pro tarify Free a Go“; `clanek.mdx:62`: „OpenAI ji neukazuje ani účtům, které patří lidem mladším 18 let.“ Zjednodušení je také v `answer`, `clanek.mdx:5`.
- **Zdroj:** `zdroje/oai-help-ads.txt:15–17`: postupné zavádění způsobilým uživatelům, možnost reklam i bez přihlášení, vyloučení účtů **identifikovaných** jako mladší 18 let. Ř. 53–60: žádné reklamy u citlivých témat a v dočasných chatech. Ř. 96–99: bezreklamní varianta Free a regionální/způsobilostní omezení. Tabulka `research.md:34` obsahuje část výjimek, ale citlivá témata ani nepřihlášené zkušenosti neuvádí.
- **Vada:** Free/Go není záruka zobrazení. Slovo „jen“ navíc bez vysvětlení vylučuje nepřihlášené použití, které současná nápověda připouští a které tělo článku samo zmiňuje. OpenAI neprohlašuje, že vždy pozná skutečný věk; podmínkou je identifikace účtu. V hlavním odstavci zcela chybí výjimka citlivého obsahu.
- **Konkrétní nové znění příslušné části ř. 62:**

  > Podle nápovědy OpenAI mohou reklamy dostávat způsobilí uživatelé Free a Go v podporovaných regionech; nápověda počítá i s nepřihlášeným použitím. Plus, Pro, Business, Enterprise a Edu jsou bez reklam. OpenAI vylučuje účty, které identifikuje jako patřící osobám mladším 18 let, dočasné chaty a citlivý obsah, například osobní zdraví, duševní zdraví nebo politiku. Zobrazení u konkrétního českého uživatele či dotazu nemáme ověřené.

  **Místo „jen pro tarify Free a Go“ na ř. 56 a 60:**

  > Dokumentovaná dostupnost pro způsobilé Free/Go a také nepřihlášené použití, s výjimkami podle nápovědy.

  **FAQ na ř. 25, věta o publiku:**

  > Nápověda připouští reklamu pro způsobilé Free/Go i nepřihlášené použití, s omezeními podle regionu, rozpoznaného věku a obsahu konverzace; dočasné chaty a bezreklamní varianty jsou vyloučené.

  Stejnou podmíněnost musí zachovat i samostatný `answer` na ř. 5. Výjimku citlivých témat nelze odbýt tím, že se někde později mluví o relevanci.

**4. [BLOCKER] Bezreklamní varianta zdarma neplatí pro všechny uživatele a samotný placený tarif reklamu nevylučuje.**

- **Citace:** `clanek.mdx:62`: „kdo ji nechce, může přejít na placený tarif nebo zvolit bezplatnou variantu bez reklam s nižšími limity“.
- **Zdroj:** `zdroje/oai-help-ads.txt:63–64`, `96–99`, `107–111` a především `139–140`: Ads-Free je volba tarifu **Free**, uživatel Go musí přejít na Free nebo na tarif bez reklam. Free Ads-Free omezuje zprávy i některé nástroje. Dostupnost ovládání závisí na regionu a způsobilosti.
- **Vada:** Go je placený tarif, který článek sám řadí mezi reklamní. Bez upřesnění je rada přejít „na placený tarif“ zavádějící. Ads-Free nelze nabízet uživateli Go jako přímou volbu jeho stávajícího tarifu.
- **Konkrétní nové znění:**

  > OpenAI popisuje bezreklamní předplatné Plus nebo Pro a pro způsobilé uživatele Free také variantu Ads-Free s nižšími limity zpráv a omezeným přístupem k některým nástrojům. Ads-Free je volba Free; uživatel Go musí pro tuto variantu přejít na Free, případně zvolit předplatné bez reklam. Dostupnost volby závisí na regionu a způsobilosti.

**5. [BLOCKER] Dostupný Ads Manager není bezpodmínečná možnost inzerovat pro každou českou firmu.**

- **Citace:** `clanek.mdx:25`: „Česko je mezi zeměmi, kde si firma reklamu koupí sama.“ `clanek.mdx:64` uvádí sídlo fakturované firmy jako podmínku, ale nepřipojuje omezení nabídky a schválení reklamy.
- **Zdroj:** `zdroje/oai-help-availability.txt:17–20` a `59–60`: vytvoření účtu a samoobslužný přístup jsou různé věci; rozhoduje sídlo právnické osoby, která inzeruje a je fakturována. `zdroje/oai-create-ads.txt:19`: reklama, obrázky i cílová stránka musí splňovat inzertní zásady a reklama může být zamítnuta. `zdroje/oai-help-ads.txt:55–56`: citlivé/regulované obory mají přísná kritéria, politická reklama je aktuálně nepovolená. `research.md:36` výjimku oborů sám eviduje a slibuje obecnou zmínku v článku; ta v něm není.
- **Vada:** Země v seznamu dokládá přístup, nikoli způsobilost každé nabídky nebo schválení konkrétní reklamy. Samostatná FAQ navíc vynechává i podmínku fakturované právnické osoby.
- **Konkrétní doplnění na ř. 64:**

  > Dostupnost Ads Manageru sama neznamená povolení každé nabídky: reklama, její podklady i cílová stránka musí projít pravidly a kontrolou OpenAI. Některé regulované obory mají další kritéria a politická reklama není podle aktuální nápovědy povolená.

  **FAQ na ř. 25, věta o samoobsluze:**

  > Česko je v seznamu samoobslužné dostupnosti. Inzerující a fakturovaná právnická osoba musí sídlit v dostupné zemi a konkrétní nabídka i reklama musí splnit zásady OpenAI.

  Ze sekundárního zdroje nepřebírat jako aktuální primární pravidlo konkrétní zákazy zdravotních, finančních či právních služeb mimo USA. Úplné aktuální znění těchto zásad ve složce není; výše navržená obecná formulace stojí na přiložené primární nápovědě.

**6. [BLOCKER] Automatická způsobilost kampaní Google je zaměněna za účast bez podmínek přiřazování.**

- **Citace:** `clanek.mdx:72`: „Tam, kde reklamy v AI funkcích běží, se jich automaticky účastní stávající kampaně ve vyhledávání, v Nákupech a maximálně výkonné kampaně…“
- **Zdroj:** `zdroje/gads-cs.txt:47`, `51–61`, `70` a `85`; souběžně `zdroje/gads-en.txt:47`, `51–61`. Nápověda říká automatickou **způsobilost**, relevanci a aukci. Přesná a frázová shoda se uplatní při přímém komerčním záměru dotazu, nikoli při kontextovém přiřazování k obecným průzkumným otázkám. AI Max, volná shoda, Shopping a Performance Max mohou využít oba způsoby. Existující omezení kampaní dále platí.
- **Vada:** Článek vynechal podmínku, která mění skutečný dosah kampaně. Čtenář s přesnou nebo frázovou shodou by mohl očekávat stejnou způsobilost pro kontextové dotazy jako u ostatních způsobů cílení. Tuto podmínku nemá ani `research.md:39`.
- **Konkrétní nové znění místo uvedené věty:**

  > V podporovaných zemích a jazycích jsou stávající kampaně ve vyhledávání, v Nákupech a Performance Max automaticky způsobilé; konkrétní účast závisí na relevanci, cílení a aukci. Přesná a frázová shoda je způsobilá pro dotazy s přímým komerčním záměrem, ne pro kontextové přiřazování k širším průzkumným otázkám. AI Max, volná shoda, Shopping a Performance Max mohou využít i kontextové přiřazování. Omezení účtu a kampaně zůstávají v platnosti.

**7. [BLOCKER] Jedno pravidlo dostupnosti Google zakrývá rozdíly mezi zeměmi, režimy a formáty. Research navíc chybně popisuje zdroj.**

- **Citace:** `clanek.mdx:29` a `clanek.mdx:72`: reklamy „přímo v Přehledu od AI a v režimu AI … v angličtině v USA a ve vybraných anglicky mluvících zemích“; obdobně `clanek.mdx:58` a `131`. `research.md:22`: „Aktuální nápověda Google Ads počet zemí neuvádí…“
- **Zdroj:** `zdroje/gads-cs.txt:92–97` a `zdroje/gads-en.txt:92–97`: konkrétní seznam **12 zemí**, u Indonésie **pouze Přehled od AI**, u Pákistánu **pouze textové reklamy**, jazyk angličtina. Zdroj zároveň upozorňuje, že seznam nemusí být úplný. Ř. 94 vymezuje standardní reklamy nad/pod Přehledem od AI na země a jazyky, kde je dostupný samotný Přehled.
- **Vada:** Nenavrhuji doplnit číslo 12 do článku — není pro jeho smysl nutné. Vynechané výjimky ale dělají z obecné věty o obou AI funkcích příliš široké pravidlo. Research nesmí předstírat, že konkrétní seznam neexistuje. Také formulace „vybrané trhy s reklamami v angličtině“ je přesnější než výklad celé země jako anglicky mluvící.
- **Konkrétní nové znění pasáže na ř. 72, s obdobnou opravou FAQ na ř. 29:**

  > Nápověda Google uvádí reklamy uvnitř AI funkcí v angličtině v USA a na dalších vybraných trzích. Dostupnost není stejná pro obě funkce a všechny formáty: Indonésie je uvedena jen pro Přehled od AI a Pákistán jen pro textové reklamy. Google upozorňuje, že seznam zemí nemusí být úplný. Češtinu nápověda mezi podporovanými jazyky těchto umístění neuvádí; standardní reklamy nad Přehledem od AI nebo pod ním popisuje ve všech zemích a jazycích, kde je dostupný samotný Přehled.

  **Nové znění zjištění v `research.md:22`:**

  > Obecná část nápovědy mluví o USA a vybraných trzích, FAQ však jmenuje 12 zemí. Seznam nemusí být úplný; Indonésie má pouze Přehled od AI, Pákistán pouze textové reklamy a uvedeným jazykem je angličtina.

**8. [BLOCKER] Doporučení k OAI-SearchBotovi vynechává přísnější znění druhé nápovědy a zvláštní povinnost pro produktové obrázky.**

- **Citace:** `clanek.mdx:143`: „povolte robota OAI-AdsBot … OpenAI k tomu doporučuje povolit i OAI-SearchBot“.
- **Zdroj:** `zdroje/oai-crawlers-adv.txt:13–14`, `21–26` a `62–67`: OAI-AdsBot povinný, OAI-SearchBot doporučený; **u produktových feedů také povolit OAI-SearchBot k URL produktových obrázků**, včetně přístupu přes ochranu hostitele. Naproti tomu `zdroje/oai-create-ads.txt:33` říká, že cílové stránky **nesmějí blokovat OAI-AdsBot ani OAI-SearchBot**. Rozdíl znění zná `research.md:37`.
- **Vada:** Tvrzení o pouhém doporučení má vlastní doklad, ale zamlčuje konfliktní přísnější požadavek téže platformy. Článek čtenáři nevysvětlí, proč splnění mírnějšího pokynu nemusí stačit podle druhé stránky. U feedových obrázků navíc doporučení skutečně nestačí. Z podkladů nelze svévolně určit, že jedna stránka druhou ruší.
- **Konkrétní nové znění:**

  > Pro inzerci povolte OAI-AdsBot a ověřte robots.txt i firewall/CDN na cílové stránce, potřebných podkladech a všech hostitelích přesměrování. Pokyny pro roboty označují OAI-SearchBot za doporučený, ale návod k tvorbě reklam požaduje neblokovat oba roboty; bezpečný postup je zpřístupnit potřebné reklamní URL oběma. U produktových feedů pokyny výslovně vyžadují přístup OAI-SearchBota také k URL produktových obrázků. Samotné zpřístupnění schválení reklamy nezaručuje.

  Text na ř. 156 o řetězci přesměrování je správný. Doplnění má zachovat i to, že blokovat může autentizace, CAPTCHA nebo prohlížečová výzva, nikoli pouze robots.txt.

**9. [BLOCKER] U Seznamu chybí výjimka výkaznictví produktových nabídek, přestože ji research eviduje.**

- **Citace:** `clanek.mdx:68`: „V asistentovi se zobrazují i nabídky Seznam Nákupů.“ `clanek.mdx:118`: „Výkon Skliku v Seznam AI je … součástí statistik kampaně a sestavy, samostatná statistika plochy zatím není.“ FAQ v `clanek.mdx:35` mluví obecně o „výkonu reklamních ploch v asistentovi“.
- **Zdroj:** `zdroje/sklik-ai.txt:19–22`: pro inzeráty vyhledávacích a Chytrých kampaní platí společné statistiky kampaně/sestavy bez samostatné plochy; **imprese a prokliky nabídek Seznam Nákupů se počítají do „Produkt – doporučené nabídky“**. Výjimka je i v `research.md:41`.
- **Vada:** Věta o statistikách vyhledávacích/Chytrých kampaní je sama o sobě správná. Článek však přidal další placený typ a při odpovědi, kde hledat jeho výkon, neřekl, že patří jinam. U článku o oddělení návštěv a měření jde o věcnou výjimku, nikoli o stylistické rozšíření. Není tím doložen samostatný report výkonu Seznam AI pro produktové nabídky.
- **Konkrétní doplnění na ř. 118 a obdobně do FAQ na ř. 35:**

  > Absence samostatné statistiky Seznam AI se zde týká inzerátů z vyhledávacích a Chytrých kampaní. Pro nabídky Seznam Nákupů nápověda uvádí jiné zařazení: jejich imprese a prokliky se započítávají do „Produkt – doporučené nabídky“. Z této informace nelze vyvodit, že v této kategorii oddělíte samotný Seznam AI od ostatních ploch.

**10. [BLOCKER] Neověřená podoba obrazovky je na několika místech uvedena jako skutečný stav. Dokumentace není ověření UI.**

- **Citace:** `clanek.mdx:5`: „v ChatGPT pod odpovědí … v Seznam AI, kde jsou pod odpovědí…“; tabulka `clanek.mdx:56–57` uvádí umístění a konkrétní nadpis sekce jako přímou vlastnost rozhraní; `clanek.mdx:64`: „Reklama má název inzerenta, titulek, popis, obrázek a cílovou stránku.“ Bez atribuce je také umístění v `clanek.mdx:84` a `160`.
- **Zdroj:** `research.md:11`, vrstva Rozhraní: **prázdná**, žádná služba nebyla vizuálně ověřena; totéž přiznává `clanek.mdx:48`. Umístění a prvky popisuje pouze dokumentace: `zdroje/oai-help-ads.txt:23–24`, `zdroje/oai-basics.txt:12–20`, `zdroje/sklik-ai.txt:16–17`. Proměnlivost podoby Seznam výslovně uvádí na ř. 23, Google v `zdroje/gads-cs.txt:48`.
- **Vada:** Nejde o důkaz, že dokumentované umístění je chybné. Jde o nesoulad síly dokladu a formulace: autor nemá vlastní doklad, co český uživatel skutečně uvidí. Obecná transparentní poznámka na ř. 48 nezmění kategorickou větu v samostatném `answer` nebo tabulce na pozorování. Podle přísnějšího pravidla Z16 v zadání je to blocker. Výslovně připsané popisy dokumentace na ř. 62, 68 a 72 neposuzuji jako autorovo pozorování obrazovky.
- **Konkrétní nové znění základní informace:**

  > Přehled porovnává dostupnost a pravidla reklamy podle dokumentace provozovatelů k 25. 11. 2026. Skutečné zobrazení ani podobu reklam v českém rozhraní autor neověřil.

  **Na ř. 64 místo tvrzení o skutečných prvcích reklamy:**

  > Návod OpenAI pro standardní reklamy uvádí název inzerenta, logo, titulek, popis, cílovou stránku a obrazové podklady; skutečnou podobu české reklamy jsme neověřili.

  U tabulky výslovně označit sloupec jako **„Umístění popisované dokumentací, bez ověření UI“** a konkrétní popisy připsat příslušné nápovědě. V `answer` a závěru odstranit příslib konkrétního zobrazení; ponechat dokumentovanou dostupnost služeb. Samotné slovo „podle“ nepostačuje tam, kde by výsledná věta dál slibovala, co konkrétní uživatel uvidí.

**11. [BLOCKER] „Reklama vám zajistí místo“ slibuje doručení, které platformy nezaručují.**

- **Citace:** `clanek.mdx:95`: „Reklama vám zajistí místo pod odpovědí…“
- **Zdroj:** `zdroje/oai-basics.txt:37–38`: relevance a výslovné upozornění, že kontextová vodítka nezaručují doručení v konkrétních konverzacích. `zdroje/oai-help-ads.txt:28–29`: mezi způsobilými reklamami rozhoduje více faktorů včetně relevance a nabídky. `zdroje/sklik-ai.txt:14–17`: splnění kritérií; `zdroje/gads-cs.txt:51`: relevance a aukce.
- **Vada:** Jinde článek aukci popisuje správně, ale zde dává bezpodmínečný slib. Reklamní kampaň ani rozpočet nezajišťují konkrétní zobrazení, natož univerzální polohu pod odpovědí u všech popsaných formátů.
- **Konkrétní nové znění:**

  > Reklamní kampaň vám může získat placené umístění podle pravidel služby, způsobilosti a výsledku aukce. Nezajišťuje zmínku ani citaci v nezávislé odpovědi; podle provozovatelů její obsah nákup reklamy neovlivňuje.

**12. [BLOCKER] Zkratka pro organickou způsobilost vynechává úryvky Googlu a zákazy AI odpovědí Seznamu.**

- **Citace:** `clanek.mdx:85`, buňka „Jak se tam dostanete“: „Dostupný a indexovaný web s obsahem, který na otázku odpovídá.“ `clanek.mdx:144`: „Pro neplacené odpovědi držte web dostupný robotovi OAI-SearchBot a indexovaný v Googlu i na Seznamu.“
- **Zdroj:** Pro Google přímo `zdroje/google-ai-features.txt:372–386`: indexace **a způsobilost k zobrazení s úryvkem**, technické požadavky a zásady Vyhledávání, bez záruky zobrazení. Pro Seznam `zdroje/clanek-webu-seznam-cz-ai-vyhledavani.mdx:120–121` popisuje navíc zákazy přes Seznam-Extended, AI, MachineLearning a `nosnippet` pro SeznamBota. Ř. 142 obsahuje konkrétní odkaz na [nápovědu zákazu tvorby AI odpovědí](https://o-seznam.cz/napoveda/vyhledavani/seznambot/zakaz-tvorby-ai-odpovedi-z-vaseho-webu/).
- **Vada:** Indexace sama není úplná podmínka způsobilosti. U Googlu je správné upřesnění na ř. 92, tabulka a praktický krok ho ale vypouštějí. U Seznamu podmínky zákazu AI odpovědí článek neuvádí vůbec; chybějí i v tabulce podmínek. **Mez dokladu:** primární text této nápovědy Seznamu není ve složce; tato část nálezu se opírá o přiložený interní článek s konkrétním primárním odkazem, nikoli o nově ověřenou nápovědu. Nejde o tvrzení, že autor primární stránku v tomto auditu otevřel.
- **Konkrétní nové znění praktického kroku na ř. 144:**

  > Pro ChatGPT ověřte přístup OAI-SearchBota. Pro Google kontrolujte indexaci, způsobilost k úryvku a splnění zásad Vyhledávání. U Seznamu vedle indexace zkontrolujte také zákazy tvorby AI odpovědí popsané v odkazovaném článku o Seznamu. Splnění podmínek zmínku ani citaci nezaručuje.

  **Buňka na ř. 85:**

  > Dostupný obsah splňující podmínky konkrétní služby pro vyhledávání a použití v AI odpovědích; samotná indexace nestačí. Zobrazení není zaručené.

**13. [WARNING] Přesně dvě služby jsou doloženy jen v rámci vybraného srovnání, ne pro celý český trh.**

- **Citace:** `clanek.mdx:5`: „se v Česku … kupuje na dvou místech“; `clanek.mdx:46`: „si v Česku … koupíte ve dvou službách“.
- **Zdroj:** `research.md:10` a dodané primární zdroje pokrývají OpenAI, Google a Seznam. **Bez zdroje ve složce:** vyčerpávající soupis všech služeb nabízejících reklamu českým firmám.
- **Vada:** Z přehledu tří provozovatelů vzniká tvrzení o celém trhu. Nenavrhuji přidávat další platformu bez konkrétního dokladu ani netvrdím, že určitě existuje třetí taková služba. Stačí zúžit rozsah na skutečně prověřovanou trojici.
- **Konkrétní nové znění úvodní teze:**

  > Ze tří služeb porovnávaných v tomto článku dokumentují k 25. 11. 2026 dostupnost reklamy u AI odpovědí českým inzerentům ChatGPT a Seznam AI. Google v přiložené nápovědě češtinu pro reklamy uvnitř AI funkcí neuvádí; popisuje standardní reklamy nad Přehledem od AI nebo pod ním.

  Platí spolu s upřesněním podmínek dostupnosti v nálezech 3–7 a s oddělením dokumentace od UI v nálezu 10.

**14. [WARNING] Dodatečná oprava dat je kategoricky vyloučená bez dokladu; ani vlastní skupina kanálů není univerzální záchrana.**

- **Citace:** `clanek.mdx:160`: „dodatečně to v datech nespravíte“; `clanek.mdx:114`: „Relace, které skončí mimo kanál AI Assistant, zachytí vlastní skupina kanálů.“
- **Zdroj:** `zdroje/ga4-channels-en.txt:205–275` obsahuje pravidla podle dostupného zdroje, média a kampaně; `278–280` odlišuje neměnnou výchozí skupinu od upravitelné primární skupiny. `zdroje/ga4-megadetail-export.txt:3–5` ukazuje konkrétní relace s identifikovatelným zdrojem i mimo AI Assistant. **Bez zdroje ve složce:** univerzální nemožnost jakéhokoli dodatečného rozlišení; přiložené podklady takovou větu neobsahují.
- **Vada:** Není doloženo, že žádná zpětná analýza nemůže pomoci, ani že přeskupení kanálů doplní chybějící identifikaci původu. Vlastní pravidlo lze postavit jen nad rozpoznatelnými údaji; samotným přejmenováním skupiny nevznikne informace o kliknutí na reklamu. To je mez odvozená z pravidel klasifikace, nikoli zde provedený test vlastní skupiny.
- **Konkrétní nové znění závěru na ř. 160:**

  > Placené odkazy označujte už při založení kampaně a ověřte zpracování v analytice. Bez rozlišujícího údaje nemusí být zpětné oddělení reklamních a neplacených návštěv spolehlivé.

  **Konec kroku na ř. 114:**

  > Vlastní skupina kanálů může seskupit relace, u kterých zůstal rozpoznatelný zdroj nebo jiný rozlišující údaj. Sama neodhalí reklamní původ neoznačené návštěvy.

**Co je v pořádku**

- Čísla MEGA DETAIL, období a rozpad relací souhlasí s exportem: **678 = 672 + 4 + 2** (`zdroje/ga4-megadetail-export.txt:1–6`). Vadu tvoří až interpretace neplaceného původu.
- Evropské rozšíření koncem srpna a samoobslužný Ads Manager od **31. 8. 2026** odpovídají `zdroje/oai-europe.txt:30–35`; česká dostupnost je doložena v `zdroje/oai-help-availability.txt:59–60`. Článek správně nestaví přesné spuštění na agenturním datu 24. 8. Říjnové rozšíření na 89 zemí (`zdroje/oai-26.txt:33`) srpnovou historickou informaci nevyvrací a není nutné ho do článku přidávat.
- Kanál AI Assistant a datum oznámení **13. 5. 2026** mají primární doklad (`zdroje/ga4-whatsnew.txt:140–146`). Vyloučení Přehledu od AI a režimu AI z tohoto kanálu a jejich zařazení do Organic Search sedí (`zdroje/ga4-channels-en.txt:78–93`). Text správně neslibuje samostatné oddělení těchto dvou funkcí v GA4.
- Primární nápověda skutečně uvádí maximálně dva inzeráty Skliku, zdroj ve vyhledávacích/Chytrých kampaních, nemožnost samostatně cílit či vyloučit plochu a společné statistiky (`zdroje/sklik-ai.txt:15–23`). Tyto věcné údaje nejsou vyvráceny; nálezy míří na podmínky, produktovou výjimku a úroveň ověření UI.
- Sponsored Agents jsou správně uvedeni jako **test s vybranými inzerenty v USA oznámený 16. 9. 2026**, s oddělením od původní konverzace a nezávislých odpovědí (`zdroje/oai-sponsored.txt:18`, `33–40`). Zdroj nedokládá současnou českou dostupnost; článek ji neslibuje.
- Vysvětlení od AI, jejich původ v Gemini a nemožnost je ručně napsat, upravit, schválit nebo vypnout odpovídají `zdroje/gads-cs.txt:64–67`. Jsou to doprovodné texty v některých umístěních, nikoli část nadpisu či popisu reklamy. Článek u nich správně používá možnost „může“; „hranice … se stírá nejvíc“ je autorův úsudek, ne měřený výsledek.
- Upozornění na reklamní kontrolní roboty s UTM, možné započítání v cizí analytice a neúčtování těchto návštěv odpovídá `zdroje/oai-basics.txt:47`. Seznam metrik Ads Manageru má doklad na ř. 43; pro interpretaci konverzí je potřeba nastavené měření podle ř. 44. Text neslibuje aktualizaci statistik v reálném čase, proto mu nevytýkám neuvedená zpoždění.
- OAI-SearchBot, GPTBot a navigační výjimka odpovídají `zdroje/oai-bots.md:5`, `11` a `23`. Text je správně vztahuje k odpovědím **vyhledávání**, nikoli ke všem možným zmínkám značky v ChatGPT.
- Tvrzení o neovlivňování nezávislých odpovědí je připsáno provozovatelům, nikoli vydáváno za vlastní experiment (`zdroje/oai-help-ads.txt:20–22`; `zdroje/gads-cs.txt:90–91`; `zdroje/sklik-ai.txt:12`). Oddělení od Sponsored Agents je zachované.
- Produktové reklamy z feedu a ceny za proklik jsou na ř. 132–133 uvedeny jako **zářijové zkušenosti**, nikoli jako listopadové primární údaje. Historický stav feedů k **24. 9. 2026** i řádové ceny „jednotky až desítky korun“ odpovídají `zdroje/ppcone-cz.txt:14`, `51`, `110–114` a `142–144`. Článek z nich nedělá garantovanou českou cenu ani aktuální zákaz feedů. Jména osob, agentur a e-shopů z tohoto zdroje nepřebírá.
- Text je ukotven datem **25. 11. 2026**, neobsahuje neukotvené „letos“ nebo „příští rok“. Srpnové a zářijové údaje nejsou samy o sobě zastaralým tvrzením, pokud jsou výslovně historické. Starší únorové omezení testu na přihlášené dospělé v USA (`zdroje/oai-testing.txt:44–45`) nepoužívám jako protidůkaz k novější nápovědě, která již popisuje nepřihlášené použití.
- **CTA bez blockeru:** název Audit AI viditelnosti, cena **3 600 Kč bez DPH**, rozsah, prioritní seznam a konzultace 30–60 minut odpovídají `zdroje/audit.ts:61–70`, `83–87`, `99–100` a `326–327`. Lhůta pěti pracovních dní patří k výstupu; samotná schůzka se podle `zdroje/audit.ts:354–362` domlouvá podle termínu klienta. Jako rozpor produktu CTA neoznačuji. Jiné osy CTA nebyly hodnoceny.

**Co chybí nebo je potřeba opravit v tabulce podmínek**

Tabulka **existuje** (`research.md:30–42`); není však úplná a některé uvedené podmínky se do článku vůbec nepřenesly.

| Řádek tabulky | Konkrétní doplnění nebo oprava | Podklad ve složce |
|---|---|---|
| ChatGPT a publikum (`research.md:34`) | Nepřihlášené použití; způsobilost a region; vyloučení citlivého obsahu; u nezletilých přesně „účty identifikované jako pod 18 let“. | `oai-help-ads.txt:15–17`, `53–60` |
| Volba bez reklam (`research.md:34`) | Ads-Free jen pro Free, podmínky regionu/způsobilosti, nižší počet zpráv i omezení nástrojů; Go vyžaduje změnu tarifu. | `oai-help-ads.txt:96–111`, `139–140` |
| Přístup inzerenta (`research.md:36`) | Oddělit sídlo fakturované právnické osoby od schválení nabídky/reklamy. Obecnou oborovou výjimku převést do článku; detailní zákazy mimo USA nevydávat za ověřený primární stav. | `oai-help-availability.txt:17–20`; `oai-create-ads.txt:19`; `oai-help-ads.txt:55–56` |
| Roboti (`research.md:37`) | Zachovat a vysvětlit rozdíl „doporučeno“ versus „nesmí blokovat oba“; doplnit povinný přístup OAI-SearchBota k produktovým obrázkům feedu a přístup bez přihlášení/CAPTCHA/výzev. | `oai-crawlers-adv.txt:13–14`, `21–26`; `oai-create-ads.txt:33` |
| UTM (`research.md:38`) | Zapsat neověřenou přednost ručního média a neověřené zařazení reklam bez UTM přímo sem, nejen do „Nelze ověřit“. Přenos parametrů, výsledné médium a klasifikace kanálu jsou samostatné kroky. | `research.md:13`; `oai-basics.txt:45–47`; `ga4-channels-en.txt:214–254` |
| Reklamy Google (`research.md:39`) | Přesná/frázová shoda pouze pro přímý komerční dotaz; odlišit kontextové přiřazování. Dostupnost podle konkrétní funkce a formátu: Indonésie pouze Přehled, Pákistán pouze text. Seznam zemí není zaručeně úplný. | `gads-cs.txt:51–61`, `92–97` |
| AI Assistant (`research.md:40`) | Přidat, že kanál není důkazem neplaceného původu; bez rozlišujícího údaje vlastní skupina neprokáže reklamní původ návštěvy. | `ga4-channels-en.txt:252–275`; `research.md:13` |
| Organická způsobilost — nový řádek | Google: indexace, způsobilost k úryvku, technické požadavky a zásady; ChatGPT Search: OAI-SearchBot a navigační výjimka. U Seznamu oddělit indexaci od zákazů AI použití a uvést mez primárního dokladu. | `google-ai-features.txt:372–386`; `oai-bots.md:11`; interní článek o Seznamu `120–142` |
| Výklad zdrojů Seznam AI — nový řádek | Seznam zdrojů podle přiloženého interního článku ukazuje podklady, které měl model k dispozici, ne nutně podklady skutečně použité v odpovědi. Pro audit organické viditelnosti nezaměňovat dostupný zdroj s prokázaným použitím textu. | `clanek-webu-seznam-cz-ai-vyhledavani.mdx:73`, `167–168`; primární text FAQ ve složce chybí |
| Sklik (`research.md:41`) | Produktová výjimka statistik i proměnlivost podoby už jsou v tabulce; je nutné je převést do článku, nikoli je znovu dohledávat. | `sklik-ai.txt:20–23` |
| Vysvětlení od AI — nový řádek | Jen některá umístění, nejsou součástí nadpisu/popisu reklamy, mohou doprovázet skupinu reklam; inzerent je nemůže ručně schvalovat ani vypnout. | `gads-cs.txt:64–67` |
| Výkaznictví OpenAI — nový řádek | U konverzí nutnost nastavit měření. Pokud by článek později tvrdil okamžitou dostupnost dat, připojit rozdílnou obnovu metrik a možné zpoždění výdajů; nyní okamžitost neslibuje. | `oai-basics.txt:43–47` |

**Nejasnosti a meze tohoto auditu**

- Zadání obsahuje přísné pravidlo „UI nelze dokládat dokumentací“ a později připouští to, co výslovně říká dokumentace; stejnou výjimku si zapisuje research. Pro verdikt používám přísnější rozlišení: žádné tvrzení o skutečně ověřené obrazovce bez UI dokladu. Výslovná informace o tom, co popisuje nápověda, není prezentována jako vlastní pozorování. Konkrétní návrh opravy je v nálezu 10; další screenshot nebo test si nevymýšlím.
- Přednost UTM vůči `ai-assistant`, klasifikace reklamního prokliku bez UTM a aktuální doručování feedových reklam v Česku zůstávají **neověřené**. Není to důkaz nulového doručování ani důkaz, že UTM nefungují.
- Primární nápovědy k zákazům AI odpovědí a výkladu zdrojů Seznamu nejsou mezi staženými texty. Přiložený interní článek k nim obsahuje konkrétní dohledatelné odkazy; bez webu jsem jejich aktuální primární znění nepotvrdil. U ostatních uvedených nálezů jsou podklady přímo v dodaných souborech, případně je nedoloženost výslovně označena.
- Neověřoval jsem celý český reklamní trh ani nedodané interní články. Nevyvozuji z jejich nepřiložení, že neexistují, a nevytýkám jejich odkazy jako nefunkční. Nevznáším požadavek na žádné nové číslo, statistiku nebo neurčitý „zdroj“.
