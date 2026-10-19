# C3 — jazykový audit: Cache a omezení frekvence pro AI roboty

**Auditovaný soubor:** `src/content/articles/cachovani-pro-ai-roboty.mdx`
**Tonalita:** `marketing/05-messaging-a-tonalita.md`
**Datum:** 19. 10. 2026
**Stav:** doporučeny úpravy před publikací; článek nebyl editován

## Celkové hodnocení

Článek je věcný, praktický a opatrný v technických tvrzeních. Dobře odděluje účinek cache od omezení požadavků, nestraší a u odpovědí `429` výslovně omezuje platnost doporučení Googlu. Tím odpovídá edukativnímu hlasu značky.

Největší jazykový dluh není v anglicismech, ale v několika doslovně technických vazbách: „zásah CDN“, „URL způsobilá pro cache“, „požadavek skončí u hotové kopie“ nebo „přenos dat platí server“. Čtenář význam odvodí, ale text v těchto místech zní jako převod dokumentace. Několik vět má také nejasný podmět nebo slibuje výsledek šířeji, než článek ve skutečnosti dokládá.

Typografie je jinak čistá: české uvozovky, pomlčky, zápis ceny i zápisy stavových kódů jsou v pořádku. Anglické názvy hlaviček, direktiv, plánů a stavů Cloudflare jsou oprávněné technické názvy.

## Terminologické rozhodnutí

### Cache, cachování a mezipaměť

Přirozený plný český termín je **„ukládání do mezipaměti“**, podstatné jméno **„mezipaměť“**. Tak jej soustavně používá i česká technická dokumentace Microsoftu: [Pokyny k ukládání do mezipaměti](https://learn.microsoft.com/cs-cz/azure/architecture/best-practices/caching) a [Ukládání do mezipaměti v .NET](https://learn.microsoft.com/cs-cz/dotnet/core/extensions/caching).

V článku pro provozovatele webů ale není vhodné nahrazovat každé „cache“ slovem „mezipaměť“. Spojení **„plnostránková cache“** je krátké, v oboru srozumitelné a článek jeho funkci vysvětluje. Doporučená konvence:

- při prvním výskytu napsat **„mezipaměť (cache)“** nebo **„hotová kopie v cache“**;
- dále ponechat podstatné jméno **„cache“**;
- v souvislém textu omezit sloveso **„cachovat“** a psát raději **„ukládat do cache“**, **„obsloužit z cache“** nebo **„povolit ukládání do cache“**;
- klíčové slovo `cachování pro AI roboty` a slug není třeba kvůli jazykovému auditu měnit.

Ve slovníku není pro `cache`, `cachování` ani `mezipaměť` pravidlo. Není důvod zavádět mechanický zákaz; volba závisí na větě.

### Rate limiting

Pro tento text je nejpřirozenější termín **„omezení frekvence požadavků“**. Je přesnější než samotné „omezení frekvence“, protože hned říká, čeho se limit týká. Pro méně technické místo lze použít také **„omezení počtu požadavků za určitý čas“**.

České technické zdroje používají více variant: Microsoft překládá `rate limiting` jako [omezení rychlosti](https://learn.microsoft.com/cs-cz/nuget/api/rate-limits) i jako [omezení četnosti volání](https://learn.microsoft.com/cs-cz/azure/api-management/rate-limit-policy). „Omezení frekvence požadavků“ proto není chyba; pro webové roboty je významově názornější než obecné „omezení rychlosti“. Anglické `rate limiting` stačí ponechat v klíčovém slově a v názvu citovaného zdroje.

### Crawler, bot a robot

Článek správně používá převážně **„AI robot“**. Cílená kontrola slovníku potvrdila, že `crawler` je veden jako zavedený oborový termín (✅), takže jeho výskyt v klíčovém slově a názvech zdrojů není vada. Do běžných vět jej není potřeba vracet.

## Nálezy k úpravě

### 1. Titulek mluví za čtenáře a „platit za roboty“ má dvojí význam

> „Roboty nechci blokovat, ale platit za ně taky ne“

**Problém:** První osoba může fungovat jako citace potřeby čtenáře, ale bez uvozovek působí jako hlas autora. „Platit za ně“ navíc může znamenat platbu provozovateli robotů, zatímco článek řeší vyšší náklady serveru.

**Návrh:** „AI roboty nechci blokovat, ale nechci kvůli nim platit víc“

### 2. SEO titulek slibuje odstranění drahého provozu

> „AI roboti bez drahého provozu: cache místo blokace“

**Problém:** „Bez drahého provozu“ zní jako jistý výsledek. Článek dokládá možné snížení zátěže a nákladů, nikoli beznákladový provoz. „Cache místo blokace“ také zjednodušuje vlastní doporučení článku, které připouští pozdější cílené omezení.

**Návrh:** „AI roboti s menší zátěží serveru: cache před blokací“

### 3. Požadavek nespouští databázi

> „…může zabránit tomu, aby každý z nich znovu spouštěl aplikaci a databázi.“

**Problém:** Databáze obvykle běží už před požadavkem; požadavek vyvolá práci aplikace a dotazy do databáze. Formulace je technicky i jazykově nepřesná.

**Návrh:** „…může zabránit tomu, aby aplikace a databáze znovu zpracovávaly každý požadavek.“

Stejnou úpravu potřebuje popis v checklistu:

> „Opakovaný požadavek nemá pokaždé spouštět celou aplikaci a databázi.“

**Návrh:** „Opakovaný požadavek nemá pokaždé znovu zaměstnat aplikaci a databázi.“

### 4. Úvod přisuzuje drahou práci robotovi

> „AI robot nemusí dostat zákaz, aby webu přestal dělat drahou práci.“

**Problém:** Robot nedělá práci „webu“; jeho požadavky nutí web práci vykonat. Vazba zní nepřirozeně a hned v první větě zbytečně zpomaluje porozumění.

**Návrh:** „AI robot nemusí dostat zákaz, aby jeho požadavky přestaly web zbytečně zatěžovat.“

### 5. „Kde požadavek skončí“ míchá překrývající se možnosti

> „Rozhoduje, kde jeho požadavek skončí: u hotové kopie, na CDN, nebo až v aplikaci…“

**Problém:** Hotová kopie může ležet právě na CDN, takže první dvě možnosti nejsou souřadné. Střídání „u / na / v“ navíc působí kostrbatě. Zkratka CDN se v textu při prvním výskytu nevysvětluje.

**Návrh:** „Rozhoduje, která vrstva požadavek vyřídí: distribuční síť (CDN) s hotovou kopií, cache na původním serveru, nebo až aplikace, která znovu sáhne do databáze.“

### 6. „Co se stane za doménou“ je neurčité

> „Rozdíl je v tom, co se stane za doménou.“

**Problém:** Doména není hranice systému a věta neříká, co má čtenář sledovat. Jde o výplň mezi dvěma konkrétními odstavci.

**Návrh:** „Rozdíl je v tom, která vrstva požadavek vyřídí.“

### 7. „Zásah CDN“ je doslovný technický převod

> „Při zásahu CDN se server vůbec neosloví.“

> „Při zásahu CDN tam druhý požadavek nemá přibýt.“

**Problém:** České „zásah“ zde není přirozený protějšek anglického `cache hit`. Čtenář může výraz chápat jako zásah či změnu nastavení provedenou CDN.

**Návrh 1:** „Když požadavek vyřídí CDN z cache, původní server se vůbec neosloví.“

**Návrh 2:** „Když druhý požadavek vyřídí CDN z cache, v logu původního serveru nemá přibýt další záznam.“

### 8. Tabulka má neurčité popisky

> „Bez ochranné vrstvy“

> „Také se sám od sebe nemění“

**Problém:** Cache není v textu zavedena jako „ochranná vrstva“. U druhé věty musí čtenář dohledat, že podmětem je počet požadavků.

**Návrh:** „Bez cache a CDN“ a „Cache sama počet požadavků nesníží“.

### 9. Cache a omezení frekvence se běžně „nemíchají do jednoho nastavení“

> „Když je smícháte do jednoho nastavení, nepoznáte…“

**Problém:** Jde o dvě odlišné funkce a často i dvě různá pravidla. Myšlenkou je, že se nemají nasadit současně bez samostatného měření.

**Návrh:** „Když obě změny nasadíte najednou a nebudete je měřit odděleně, nepoznáte, zda jste webu odlehčili, nebo robota odřízli.“

### 10. „Prostor, který robot objevuje“ a „vyrábění kopií URL“ znějí strojově

> „…začněte jejich odstraněním z prostoru, který robot objevuje. Cache by jinak jen levněji vyráběla další kopie URL…“

**Problém:** První věta je abstraktní převod pojmu `crawl space`. Cache navíc nevyrábí kopie URL; ukládá nebo doručuje obsah pro jednotlivé URL.

**Návrh:** „…začněte tím, že odstraníte odkazy na tyto adresy nebo jejich procházení výslovně omezíte. Cache by jinak jen levněji obsluhovala další URL, které nechcete poskytovat vůbec.“

### 11. „Cache doplněk“ a „poznat zásah“ jsou kostrbaté vazby

> „…hledejte plnostránkovou cache v hostingu, platformě či cache doplňku.“

> „…jak u ní poznáte zásah.“

**Problém:** „Cache doplněk“ je anglický slovosled. Druhá věta opakuje nejasný „zásah“.

**Návrh:** „…hledejte plnostránkovou cache v nastavení hostingu, platformy nebo doplňku pro cache. Pokud ji v administraci nenajdete, zeptejte se podpory, zda server používá vlastní stránkovou cache a jak ověříte, že z ní odpověď skutečně přišla.“

### 12. Změna obsahu sama cache „nevyprázdní“ ve všech systémech

> „Změna obsahu cache vyprázdní nebo obnoví“

> „…bez ručního čekání na náhodné vypršení.“

**Problém:** Titulek zní jako obecné tvrzení, ačkoli jde o požadované chování, které má čtenář ověřit. „Ruční čekání“ a „náhodné vypršení“ jsou nepřirozené; vypršení není náhodné, jen může nastat v nevhodnou dobu.

**Návrh:** „Po změně obsahu se cache vyprázdní nebo obnoví“ / „Po publikaci musí být nová verze dostupná, aniž musíte čekat na vypršení platnosti staré kopie.“

### 13. Server přenos dat „neplatí“

> „Tahle vrstva snižuje práci aplikace, ale přenos dat pořád platí původní server.“

**Problém:** Náklady platí provozovatel a data odesílá server. Personifikace zde zamlžuje praktický rozdíl mezi serverovou cache a CDN.

**Návrh:** „Tato vrstva snižuje práci aplikace, ale data stále odesílá původní server a jejich přenos se může dál započítávat do nákladů hostingu.“

### 14. „Z CDN odchází celý článek“ a „HTML způsobilé“ kopírují jazyk dokumentace

> „Samotné zapojení CDN ještě neznamená, že z ní odchází celý článek.“

> „Veřejné HTML musíte označit jako způsobilé pomocí Cache Rule…“

**Problém:** První věta je obrazná, ale nepřesná. Druhá převádí `eligible for caching` příliš doslovně a navíc staví anglický název funkce do středu české věty bez vysvětlení.

**Návrh:** „Samotné zapojení CDN ještě neznamená, že CDN doručuje také HTML článku. Ukládání veřejného HTML musíte povolit pravidlem Cache Rule nebo odpovídajícím nastavením jiné CDN.“

Obdobně ve FAQ:

> „DYNAMIC znamená, že URL nebyla pro cache způsobilá.“

**Návrh:** „DYNAMIC znamená, že se odpověď podle nastavení neměla uložit do cache.“

### 15. „Cloudflare cache obsloužila HTML“ obrací přirozenou vazbu

> „Jak poznám, že HTML opravdu obsloužila Cloudflare cache?“

**Problém:** Obsluhuje se požadavek; HTML se doručuje. Stejná vazba je v odpovědi „pokud kopii obslouží plnostránková cache“.

**Návrh otázky:** „Jak poznám, že HTML opravdu přišlo z cache Cloudflare?“

U související odpovědi:

> „Ano, pokud kopii obslouží plnostránková cache nebo CDN.“

**Návrh:** „Ano, pokud požadavek vyřídí plnostránková cache nebo CDN.“

### 16. Chybí podmět, který URL vyřadí

> „Google doporučuje 429 či 503 jen krátkodobě; při několika dnech může URL z výsledků vyřadit.“

**Problém:** Po středníku je nejasné, co trvá několik dní a kdo URL vyřadí. Věta může být při rychlém čtení pochopena tak, že URL sama něco vyřadí.

**Návrh:** „Google doporučuje vracet 429 či 503 jen krátkodobě; pokud tento stav trvá několik dní, může Google URL z výsledků vyřadit.“

### 17. „Cache HTML na okraji sítě“ je nahuštěná jmenná vazba

> „Pro cache HTML na okraji sítě nebo cílené omezení frekvence obvykle potřebujete CDN…“

**Problém:** Tři podstatná jména za sebou znějí jako interní technická poznámka. Je to navíc vhodné místo pro plný název omezení.

**Návrh:** „Chcete-li ukládat HTML do cache na okraji sítě nebo cíleně omezovat frekvenci požadavků, obvykle potřebujete CDN či zásah podpory hostingu.“

### 18. Sloveso „cachovat“ není nutné tlačit do čtenářského textu

> „Smím cachovat košík, účet a přihlášené stránky?“

> „Cloudflare … HTML ani JSON standardně necachuje.“

> „Nezapínejte plošně ‚cachovat vše‘ bez výjimek.“

**Problém:** „Cachovat“ je v technických týmech běžné, ale pro širší cílovou skupinu je méně přirozené než vazba se slovem cache. Není potřeba je zakazovat všude; v těchto třech místech má stejně krátkou českou náhradu.

**Návrh:** „Smím ukládat do cache košík, účet a přihlášené stránky?“ / „Cloudflare … HTML ani JSON standardně do cache neukládá.“ / „Nezapínejte plošně pravidlo typu Cache Everything (‚uložit vše do cache‘) bez výjimek.“

### 19. Srovnání článku s cenou není souřadné

> „Článek může snést delší interval než cena nebo skladová dostupnost.“

**Problém:** Článek se porovnává s údajem, nikoli s jiným typem stránky či obsahu. „Interval“ navíc není sám o sobě pojmenován.

**Návrh:** „Pro článek lze nastavit delší dobu platnosti cache než pro stránku s cenou nebo skladovou dostupností.“

### 20. „Krátce stará hodnota“ není přirozené české spojení

> „Nepoužívejte to u údaje, kde je i krátce stará hodnota problém.“

**Problém:** Jde o doslovnou konstrukci a zájmeno „to“ odkazuje přes celou předchozí větu.

**Návrh:** „Tuto direktivu nepoužívejte u údajů, u nichž vadí i krátké zpoždění aktualizace.“

### 21. „Požádejte o URL“ může znamenat, že si ji máte od někoho vyžádat

> „Požádejte o ni dvakrát.“

**Problém:** V technické angličtině se URL `requestuje`, v češtině však člověk běžně „požádá o URL“ někoho jiného. Krok má být jednoznačný.

**Návrh:** „Odešlete na tuto URL dva požadavky.“ nebo jednoduše „Načtěte tuto URL dvakrát.“

### 22. Popis obnovy cache je příliš zhuštěný

> „…nová verze propíše podle nastaveného vyprázdnění nebo doby platnosti.“

**Problém:** „Nastavené vyprázdnění“ není přirozené spojení a není jasné, zda jde o ruční, automatickou nebo událostí vyvolanou obnovu.

**Návrh:** „Po publikaci zkontrolujte, že se nová verze zobrazí po vyprázdnění cache nebo po skončení nastavené doby platnosti.“

### 23. „Levné doručení“ a „uříznout návštěvnost“ snižují přesnost

> „…zatěžuje i levné doručení…“

> „…nesmí uříznout běžnou návštěvnost…“

**Problém:** První spojení není konkrétní: může jít o cenu, kapacitu nebo počet požadavků. „Uříznout“ je na edukativní text zbytečně hrubé a není potřeba pro srozumitelnost.

**Návrh:** „Omezení frekvence má smysl, když cache nestačí: jeden zdroj posílá tolik požadavků, že i doručení z cache překračuje dostupnou kapacitu nebo zvyšuje náklady.“ / „Práh musí vycházet z logu vašeho webu a nesmí omezit běžné návštěvníky ani roboty, které chcete pustit.“

### 24. `User-Agent` není jen „název“

> „Neomezujte podle samotného názvu v `User-Agent`. Ten si může napsat kdokoli.“

**Problém:** Hlavička obsahuje identifikační řetězec, nikoli pouze název. Zájmeno „ten“ může odkazovat na název i na hlavičku.

**Návrh:** „Neomezujte provoz jen podle hodnoty hlavičky `User-Agent`. Tento identifikační řetězec může napodobit kdokoli.“

### 25. Popis tarifů Cloudflare je gramaticky i významově nahuštěný

> „…uvádí na Free plánu jedno pravidlo, desetisekundové okno a jen pole cesta a ověřený robot. Cílení podle `User-Agent` je v tabulce dostupnosti až od Business.“

**Problém:** Přirozené je „v tarifu Free“. „Pole cesta a ověřený robot“ vypadá jako nepřeložené názvy sloupců a neříká, jak se používají. U Business chybí opěrné podstatné jméno.

**Návrh:** „Podle dokumentace z 25. srpna 2026 nabízí tarif Free jedno pravidlo s desetisekundovým oknem; podmínku lze založit jen na cestě URL nebo příznaku ověřeného robota. Cílení podle `User-Agent` uvádí tabulka dostupnosti až u tarifu Business.“

### 26. „Přesný ventil“ a „počitadlo se projeví“ jsou nejasné metafory

> „Navíc nejde o přesný ventil: několik nadlimitních požadavků může projít, než se počitadlo projeví.“

**Problém:** Metafora ventilu nepomáhá vysvětlit distribuované počítání požadavků. Počitadlo se samo „neprojevuje“.

**Návrh:** „Omezení navíc není absolutně přesné: kvůli průběžnému počítání může projít ještě několik požadavků nad nastavený limit.“

### 27. „Mějte cestu zpět“ je vágní provozní rada

> „…sledujte chyby a mějte cestu zpět.“

**Problém:** Čtenář neví, zda si má připravit zálohu, jiné pravidlo, nebo možnost návratu konfigurace.

**Návrh:** „…sledujte chyby a připravte si možnost pravidlo rychle vypnout.“

### 28. Věta o hledanosti odhaluje interní postup a nepomáhá argumentu

> „Dotazy na `crawl-delay` byly jedinou částí tématu, pro kterou nástroje našly měřitelnou českou hledanost.“

**Problém:** Čtenáři nepomáhá rozhodnout, zda `crawl-delay` použít. „Nástroje našly“ je neurčité a věta působí jako poznámka z rešerše ponechaná ve finálním článku.

**Návrh:** Větu vypustit. Odstavec může začít přímo: „Řádek `crawl-delay` v robots.txt není univerzální ovladač rychlosti.“ Pokud je hledanost pro argument důležitá: „Přestože lidé `crawl-delay` hledají, nejde o univerzální způsob řízení rychlosti robotů.“

### 29. „Jiný robot si může zavést vlastní chování“ neříká, zda pokyn podporuje

> „Jiný robot si může zavést vlastní chování…“

**Problém:** Vazba je neurčitá a zní, jako by robot své chování měnil sám. Jde o implementaci provozovatele.

**Návrh:** „Jiní provozovatelé robotů mohou `crawl-delay` podporovat po svém, ale bez aktuální dokumentace nevíte, zda robot pokyn čte ani jak jej vykládá.“

### 30. „Zahodit cookie“ je hovorové a technicky nejasné

> „…může vrátit neplatný stav, zahodit cookie nebo zpřístupnit obsah určený jiné relaci.“

**Problém:** Není jasné, zda cache soubor cookie smaže, ignoruje, nebo nezahrne do klíče cache. Pro čtenáře je důležitý následek: dostane společnou kopii bez správného rozlišení uživatele.

**Návrh:** „Příliš široké pravidlo může vrátit neplatný stav, ignorovat rozdíly mezi soubory cookie nebo zpřístupnit obsah určený jiné relaci.“

V ostatních větách sjednotit anglické množné číslo:

> „stránky závislé na cookies“ / „bez přihlášení, cookies a osobního obsahu“

**Návrh:** „stránky závislé na souborech cookie“ / „bez přihlášení, souborů cookie a osobního obsahu“.

### 31. „Nejnižší účinná vrstva“ je konzultantská abstrakce

> „Pro váš web zvolte nejnižší účinnou vrstvu“

**Problém:** Čtenář ještě neví, podle čeho je vrstva „nižší“. Pointou sekce je začít nejjednodušším opatřením, které pro daný web stačí.

**Návrh:** „Pro svůj web zvolte nejjednodušší účinné opatření“

### 32. Dvě položky rozhodovací tabulky znějí nepřirozeně

> „nárazové množství požadavků“

> „CDN použít, pokud potřebujete odstínit původní server“

**Problém:** Přirozené je „nárazový nárůst počtu“. „Odstínit server“ je technická metafora bez vysvětlení.

**Návrh:** „Když log ukazuje drahý přenos nebo nárazový nárůst počtu požadavků“ / „CDN použít, pokud potřebujete zabránit tomu, aby každý požadavek dorazil na původní server, a hosting to neumí“.

### 33. „Provoz, který zůstává problémem“ má nejasnou vazbu

> „Omezení frekvence nechte na provoz, který zůstává problémem i potom.“

**Problém:** Vazba „nechat něco na provoz“ se čte jako odložení na dobu provozu, nikoli jako cílení pravidla na část návštěvnosti.

**Návrh:** „Omezení frekvence použijte jen na tu část provozu, která zůstává problémem i poté.“

### 34. Cache „nechrání rozpočet“ sama a bez podmínek

> „Cache chrání provozní rozpočet…“

**Problém:** Jde o marketingovou personifikaci a lehký příslib výsledku. Článek správně vysvětluje, že záleží na umístění cache a cenovém modelu hostingu či CDN.

**Návrh:** „Cache může snížit náklady na provoz, ale sama neudělá stránku srozumitelnější pro vyhledávače ani AI.“

## Místa, která není potřeba měnit

- **„Plnostránková cache“** — po krátkém vysvětlení je srozumitelný oborový termín; mechanická náhrada za „plnostránkovou mezipaměť“ by zněla hůř.
- **`CF-Cache-Status`, `MISS`, `HIT`, `DYNAMIC`, `BYPASS`, `Age`, `Cache-Control`, `stale-while-revalidate`, `Retry-After`, `User-Agent`** — jde o přesné názvy hlaviček, direktiv a stavů.
- **`crawl-delay`** — je direktiva, kterou nelze překládat.
- **`429`, `503` a „HTTP 429“** — technické zápisy jsou použity správně a hned dostávají praktický kontext.
- **„crawler“ v klíčových slovech a názvech zdrojů** — cílená kontrola `JAZYK_SLOVNIK.md` jej vede jako zavedený oborový termín.
- **Prodejní odstavec** — uvádí konkrétní obsah a cenu bez garance výsledku. „Master PDF“ odpovídá schválenému produktovému slovníku v tonalitě značky.

## Doporučené pořadí úprav

1. Opravit nejasné podměty a technickou nepřesnost: nálezy 3, 5, 7, 12, 13, 16, 22, 24–26 a 30.
2. Sjednotit terminologii cache a omezení frekvence: nálezy 11, 14, 15, 17–18.
3. Uhladit strojové a abstraktní vazby: nálezy 4, 6, 9–10, 19–21, 27–29 a 31–34.
4. Nakonec rozhodnout o titulcích: nálezy 1–2. SEO titul může zachovat slovo „cache“, ale měl by zmírnit příslib výsledku.
