# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit článku `seo-pro-seznam-cz`, **kolo 2 ze dvou**, stav k **26. 11. 2026**. Předmětem je jazyk, struktura, citovatelnost, SEO, CTA a ověření vypořádání prvního kola. Řádky níže odkazují na dodaný `clanek.mdx`.

**Výsledek: 0 blockerů, 7 varování a 2 tipy.** Všech 21 přijatých položek prvního kola má odpovídající opravu. Důvodem tohoto verdiktu jsou redakční nedostatky: krátká odpověď nezačíná definicí, první FAQ spoléhá na otázku a důležité instrukce se ztrácejí v souvislých technických odstavcích. Nejde o opakování věcného auditu.

## Nálezy

### 1. [WARNING] Krátká odpověď nezačíná definicí a úvod těla odkazuje na nepojmenované rozdíly

**Místo a citace:** ř. 5: „SEO pro Seznam.cz sdílí s Googlem řadu základních doporučení…“; ř. 41: „hlavičku, kterou nečte, pravidla, která čte navíc“.

**Vada:** `answer` má správných **49 slov** a nezačíná negací. Jeho první věta ale popisuje shodu s Googlem, místo aby definovala SEO pro Seznam.cz. Úvod těla stejnou shodu opakuje a konkrétní rozdíly schovává za „hlavičku“ a „pravidla“. V prvních přibližně 100 slovech pak místo pojmenování rozdílů přibývá metodická poznámka. Čtenář dostane téma, ale ne úplnou samostatnou odpověď na příslib titulku.

**Přesné nové znění `answer` — 50 slov:**

> SEO pro Seznam.cz je úprava webu pro dohledatelnost ve vyhledávání Seznamu. S Googlem sdílí doporučení pro titulky, adresy, obsah, odkazy a strukturovaná data. SeznamBot podle nápovědy ignoruje X-Robots-Tag i kanonický odkaz sám na sebe a podporuje Request-rate v robots.txt. Nové a změněné stránky lze hlásit přes Seznam Webmaster nebo IndexNow.

**Přesné nové znění prvního odstavce těla, ř. 41:**

> SEO pro Seznam.cz je úprava webu pro dohledatelnost ve vyhledávání Seznamu. S Googlem sdílí doporučení pro výstižné titulky, srozumitelné adresy, užitečný obsah, popisné odkazy a strukturovaná data. Podle nápovědy SeznamBot ignoruje hlavičku **X-Robots-Tag** i kanonický odkaz sám na sebe a v robots.txt podporuje **Request-rate**. Zákaz indexace nastavte značkou **noindex** v HTML a ponechte stahování povolené. Nové a změněné stránky hlaste přes Seznam Webmaster nebo IndexNow.

Metodickou poznámku na ř. 43 zachovat za tímto odstavcem. Náhrada netvrdí, že společná doporučení představují většinu hotové práce; oprava nálezu 20 z prvního kola zůstává zachovaná.

### 2. [WARNING] První odpověď FAQ není bez otázky plně sebestačná

**Místo a citace:** ř. 25: „Řada základních doporučení je společná: nápověda Seznamu i dokumentace Googlu radí…“

**Vada:** Úvodní výrok nepojmenovává, pro jakou činnost jsou doporučení společná. Předmět „SEO pro Seznam.cz a Google“ doplňuje až otázka. Dlouhý výčet navíc spojuje obsahová doporučení, zákaz indexace a číselné limity do jedné věty. Ostatní čtyři odpovědi své téma pojmenovávají dostatečně; plošný přepis FAQ není potřeba.

**Přesné nové znění první odpovědi FAQ:**

> SEO pro Seznam.cz a Google sdílí doporučení pro výstižné titulky a popisky, srozumitelné adresy, nadpisy, popisný text odkazů a alternativní text obrázků. Zákaz indexace značkou noindex funguje při povoleném stahování. Sitemapa smí mít nejvýš 50 MB po dekompresi a současně 50 000 adres v jednom souboru. SeznamBot podle nápovědy ignoruje X-Robots-Tag a kanonický odkaz sám na sebe; v robots.txt podporuje Request-rate. Změny lze Seznamu hlásit přes Seznam Webmaster nebo IndexNow. Vykreslování obsahu z JavaScriptu nápověda Seznamu nepopisuje.

Zůstávají oba současné limity sitemapy, stav po dekompresi, povolené stahování u `noindex` i přiznaná neznalost vykreslování JavaScriptu. Jde o sebestačnost a členění odpovědi, nikoli o obnovení nálezů 6 nebo 20 z prvního kola.

### 3. [WARNING] Tři H2 při skenování neříkají dost konkrétně téma nebo závěr

**Místo a citace:** ř. 45: „Co platí stejně jako u Googlu — společná doporučení“; ř. 140: „co z toho plyne pro AI odpovědi“; ř. 159: „co si odnést“.

**Vada:** První H2 nepojmenovává Seznam. Nadpis sekce Seznam AI a závěrečný H2 místo pointy nabízejí obecný příslib shrnutí. Zbývající H2 jsou použitelné: pojmenovávají SeznamBota, řazení výsledků, nástroje nebo kontrolní seznam. Požadované značky `<span class="hl">` a `<strong>` jsou ve všech sedmi H2 přítomné a správně uzavřené.

**Přesné nové znění tří H2:**

```mdx
## SEO pro Seznam a Google — <span class="hl">společná doporučení</span> pro <strong>obsah a přístup robotů</strong>

## Seznam AI — <span class="hl">vyhledávání je jedním ze zdrojů</span>, <strong>SEO citaci nezaručí</strong>

## SEO pro Seznam.cz — <span class="hl">prověřte technická pravidla</span> a <strong>hlaste změny stránek</strong>
```

Nadpis srovnávací tabulky nevracet k „šesti rozdílům“: neznámé vykreslování JavaScriptu zůstává výslovně označené jako nedoložené.

### 4. [WARNING] Tři řádky CompareTable se obtížně porovnávají kvůli délce a složitým vazbám

**Místo a citace:** ř. 71: „Nejnižší podporované nastavení je 1 dokument za 30 sekund, nižší rychlost převede na toto minimum; maximum omezuje výkon a zatížení…“; ř. 72: „Nepřijme ho, pokud stránky nepovažuje za dostatečně obsahově podobné…“; ř. 73: „limit se počítá z nekomprimovaných dat a k posouzení indexace jde jen stažená část“.

**Vada:** Opravené podmínky jsou potřeba, ale v úzkých buňkách se ztrácí hlavní rozdíl. U kanonického odkazu lze odstranit dvojí zápor; u limitů oddělit limit, následek a výjimku. U velikosti Seznamu je prostor ke zkrácení malý: data obou dokumentů, jednotky i definici bajtů zachovat.

**Přesné náhrady hodnot vlastností; ostatní vlastnosti řádků ponechat:**

**Request-rate — `left`:**

> Podporuje Request-rate, např. 100/15m. Minimum nastavení je 1 dokument za 30 sekund; nižší hodnotu zvýší na minimum. Maximum závisí na výkonu a zatížení SeznamBota. Mimo zadané časové okno platí výchozí chování. Nastavení nezaručuje dosaženou rychlost.

**Kanonický odkaz — `left`:**

> Odkaz sám na sebe ignoruje. Odkaz na jinou adresu přijme jen při dostatečné obsahové podobnosti. Interně jej zpracuje obdobně jako 301, bez přesměrování návštěvníka. Cíl musí mít porovnatelný obsah; nemá být přesměrováním ani vyžadovat cookie.

**Velikost HTML — `left`:**

> Nejčastější dotazy (změna 12. 8. 2025): 1 MB = 1 048 576 bajtů. Optimalizační minimum (změna 16. 12. 2025): 4 MiB výsledného zdrojového kódu. Obě stránky uvádějí, že větší dokument robot ignoruje.

**Velikost HTML — `right`:**

> Googlebot pro Google Search stáhne prvních 2 MB podporovaného souboru, u PDF prvních 64 MB. Limity platí pro nekomprimovaná data. K posouzení indexace předá jen staženou část. Odkazované prostředky stahuje zvlášť; jiní roboti Googlu mohou mít jiné limity.

Tím zůstává minimum i převod nižšího nastavení, omezení maxima, návrat mimo okno, absence záruky, podmínky cíle kanonického odkazu i všechny doplněné podmínky Googlebotu. Není vhodné zkrátit buňky jen na čísla nebo odstranit navazující `Insight` s přiznaným rozporem limitů Seznamu.

### 5. [WARNING] Pátý krok Stepperu obsahuje celý technický návod v jednom odstavci

**Místo a citace:** ř. 133: „Vygenerujte klíč o 8 až 128 znacích…“ až „ostatní zapojené vyhledávače Seznam informuje po ověření klíče“.

**Vada:** Krok mísí čtyři odlišné úkoly: přípravu klíče, alternativní umístění, odeslání adres a vyhodnocení odpovědi. Podmínky jsou zapracované správně; jejich škrtání by obnovilo blockery 8 a 9. Řešením je přenést podrobnosti do krátkého členěného postupu bezprostředně pod komponentou, před větu s odkazem na Bing. Nenavrhuji vkládat Markdown do `desc`, jehož vykreslování zde nelze ověřit.

**Přesné nové znění `desc` kroku 5; `title` zachovat:**

> IndexNow slouží k hlášení nových a změněných adres. Stažení ani indexaci nezaručuje. Nastavení klíče, odesílání a význam odpovědí popisuje následující postup.

**Přesné nové znění podrobného postupu pod Stepperem:**

```mdx
### Jak nastavit a používat IndexNow

1. **Připravte klíč.** Vygenerujte 8 až 128 znaků z a–z, A–Z, 0–9 a pomlčky. Do veřejně dostupného souboru v UTF-8 vložte pouze klíč, bez značky pořadí bajtů (BOM), HTML a dalších dat. Doporučené umístění je kořen webu a název `<klíč>.txt`.
2. **Při umístění ve složce přidejte parametr.** Každý požadavek musí obsahovat `keyLocation`. Hlásit pak lze jen adresy z této složky a jejích podadresářů.
3. **Odešlete adresy.** Na `search.seznam.cz/indexnow` je posílejte jednotlivě metodou GET, nebo nejvýš 10 000 v jednom požadavku POST. Celkový limit Seznam neuvádí; velké množství současných požadavků může operativně omezit odpovědí 429.
4. **Rozlišujte přijetí a indexaci.** Odpověď 200 potvrzuje předání informace, nikoli stažení nebo indexaci. Adresy, které algoritmy vyberou k indexaci, se do výsledků dostanou do týdne. Ostatní zapojené vyhledávače Seznam informuje po ověření klíče.
```

H3 je prostý text. Podrobný postup musí zůstat přímo u přehledu kroků; nepřenášet jeho podmínky pouze na odkazovaný článek.

### 6. [WARNING] Část o podobě výsledků a část o Seznam AI skrývají důležité odpovědi uvnitř dlouhých odstavců

**Místo a citace:** ř. 107 spojuje „Reklama ve Skliku…“, „Vybraný úryvek…“, „osnovy“ a „Rychlé odkazy“; ř. 142–144 spojují zdroje Seznam AI, jejich řazení, reklamní obsah, hranice účinku SEO a zákaz použití obsahu.

**Vada:** Čtenář hledající zákaz Seznam AI nebo vysvětlení rychlých odkazů nemá pod H2 žádný orientační bod. Ani jedna z těchto sekcí dosud nemá H3. Opravené podmínky lze zachovat doslova a změnit pouze členění.

**Přesná úprava ř. 107:**

- Větu začínající „Reklama ve Skliku…“ ponechat jako samostatný odstavec po výčtu parametrů.
- Před větu „Titulek i úryvek výsledku vznikají automaticky…“ vložit H3 `### Titulek a úryvky výsledku`.
- Větou „**Vybraný úryvek** (featured snippet)…“ začít nový odstavec. Ponechat v něm i omezení údaje o 7 %: chybějící datum a metodiku, průměrnou proklikovost a zákaz chápat jej jako předpověď.
- Před „Podle nápovědy mohou vnitřní odkazy…“ vložit H3 `### Osnova a rychlé odkazy`. Pod ním ponechat obě věty včetně nezaručené osnovy, výběru podle dotazu a stejné domény druhé úrovně u rychlých odkazů.

**Přesná úprava ř. 142–144:**

- Před ř. 142 vložit H3 `### Zdroje odpovědí Seznam AI`.
- Před „Pokud vychází z výsledků Seznam Vyhledávání…“ udělat nový odstavec. Zachovat návaznou reklamní větu se všemi jejími podmínkami.
- Před ř. 144 vložit H3 `### Kdy může pomoci SEO pro Seznam`.
- Před „Kdo nechce, aby Seznam jeho web používal…“ vložit H3 `### Jak zakázat použití obsahu v Seznam AI` a začít nový odstavec. Zachovat všechny účinky `nosnippet` i odkaz na podrobnosti.

Všechny nové H3 jsou prostý text. Tato úprava žádné věcné tvrzení nepřepisuje ani nemaže.

### 7. [WARNING] Několik technických pojmů nemá pro částečně technického čtenáře vysvětlení

**Místo a citace:** ř. 5 a 41: „SeznamBot“, „Request-rate“; ř. 72: „Kanonický odkaz“; ř. 86: „Indexer jejich obsah ignoruje“; ř. 27: „přes API až 500 adres denně“.

**Vada:** Názvy direktiv a hlaviček musejí zůstat přesné. Chybí však krátký český výklad toho, co čtenář nastavuje. Samotný vzor `100/15m` vysvětlení rychlosti nenahrazuje. „Indexer“ je v textu osamocený technický výraz. API je ve FAQ součástí praktické informace o kvótě, přesto jeho význam odpověď neobjasňuje.

**Přesné nové znění vysvětlení před CompareTable, za stávající odstavec na ř. 62:**

> SeznamBot je vyhledávací robot Seznamu. Direktiva Request-rate v robots.txt slouží k nastavení rychlosti procházení webu. Kanonický odkaz označuje preferovanou adresu u stránek se stejným nebo podobným obsahem.

**Přesná lokální náhrada na ř. 86:**

> Část vyhledávače, která zpracovává obsah pro index, jejich obsah ignoruje; když chybí uzavírací značka nebo je zapsaná jako `<script />`, nevidí ani text za ní.

**Přesné nové znění poslední věty FAQ 2, ř. 27:**

> Po ověření webu v Seznam Webmasteru zařadí funkce Přidat stránku do hledání indexovatelnou stránku do indexu se zpožděním několika minut; má denní kvótu, přes rozhraní API pro automatické odesílání až 500 adres denně.

Pro první výskyt API v těle, v kroku 3 na ř. 125, nahradit začátek druhé věty „U API uvádí…“ zněním „U rozhraní API pro automatické získávání dat uvádí…“. Veřejné FAQ a tělo tak zůstávají srozumitelné i při samostatném čtení. BOM je vysvětleno v návrhu nálezu 5; identifikátory `keyLocation`, GET, POST ani názvy hlaviček nepřekládat.

### 8. [TIP] CTA má správný produkt i cenu, ale dlouhý soupis oslabuje výzvu k dalšímu kroku

**Místo a citace:** ř. 163: „Strukturovaná data, která Seznam čte pro rozšířené úryvky, mají vzor v **[AI SEO Wireframe Packu](/pack/)**: sedm typů stránek (homepage, produkt, kategorie, článek, výpis článků, prodejní landing a kontakt)…“

**Posouzení:** Obsah Packu i cena odpovídají `zdroje/pack.ts`; tento faktický závěr prvního kola potvrzuji a neotevírám znovu. Cena je správně mimo odkaz. Výzva je ale nepřímá a věta pokračuje úplným katalogem sedmi typů stránek. „Mají vzor v Packu“ je navíc méně přirozené než přímé pojmenování použití. Tento tip není podmínkou publikace.

**Přesné nové znění CTA:**

> Při úpravě produktů, kategorií nebo článků můžete použít **[AI SEO Wireframe Pack](/pack/)**. Obsahuje sedm typů stránek s návrhy rozložení, šablonami textů a ukázkami strukturovaných dat včetně produktů, článků a častých dotazů. Součástí je návod aplikace podle redakčního systému. Pack stojí **1 490 Kč včetně DPH**.

Návrh neslibuje nastavení Seznam Webmasteru, IndexNow, implementaci ani konkrétní pozice. CTA také není nutné měnit na jiný produkt.

### 9. [TIP] Opakování odkazu na nápovědu lze mírně omezit tam, kde je zdroj už jednoznačný

**Místo a citace:** ř. 83: „Další pravidla z nápovědy Seznamu…“; ř. 88: „data ale podle nápovědy dál používá interně“; ř. 89: „Robot podle nápovědy několik dní ověřuje…“.

**Posouzení:** Opakování většinou chrání přesné připsání tvrzení zdroji a není samo o sobě vadou. Nemazat ho z krátké odpovědi, samostatných FAQ, výhrad ke schopnostem JavaScriptu ani z popisu neověřeného rozhraní. V seznamu uvedeném výslovně jako pravidla z nápovědy lze dvě vsuvky vypustit. Tento tip není podmínkou publikace.

**Přesné lokální náhrady:**

- Ř. 88: „rozšířený úryvek pak Seznam neukáže, data ale podle nápovědy dál používá interně“ → „rozšířený úryvek pak Seznam neukáže, data ale dál používá interně“.
- Ř. 89: „Robot podle nápovědy několik dní ověřuje“ → „Robot několik dní ověřuje“.

Ponechat nadřazené uvedení na ř. 83 a na ř. 89 výslovné upozornění, že se popsané chování může změnit. Hromadné nahrazení „podle nápovědy“ napříč souborem by bylo nevhodné.

## Co je v pořádku

- **SEO:** `seoTitle` má **51 znaků**, začíná „SEO pro Seznam.cz“ a splňuje limit 60. `description` má **159 znaků**, tedy splňuje 70–160. Protože `seoTitle` existuje, délku `title` neposuzuji. Slug `seo-pro-seznam-cz` je výstižný.
- **Odkazy:** Odkazy na podíl Seznamu, JavaScript a roboty, Bing a odhlášení ze Seznam AI souvisejí s konkrétními pasážemi. Odkaz na Pack má název produktu a neobsahuje cenu. Není důvod přidávat obecný pilíř jen kvůli počtu interních odkazů; research navíc vysvětluje, proč byl jeden související článek vědomě vynechán.
- **Tón:** Text neslibuje pozice ani jisté AI doporučení, nepoužívá manipulativní naléhavost a přiznává hranice podkladů. Zakázané obraty typu „schema markup“, „answer block“, „hub-and-spoke“ nebo nevysvětlený „framework“ se v čtenářském textu nevyskytují. Názvy komponent, direktiv, hlaviček, produktů a dokumentů nejsou jazykový nález.
- **Typografie:** Nenalezeny chybné rovné uvozovky v próze; rovné uvozovky ve frontmatteru, JSX a HTML atributu jsou syntaxe. Zápis „7 %“ má mezeru. Nenavrhuji plošnou normalizaci uvozovek.
- **Použitelnost:** Stepper i závěrečný Checklist dávají čtenáři konkrétní postup a kontrolované stavy. Není potřeba přidávat další obecný seznam SEO doporučení. Náprava spočívá hlavně v rozdělení technických detailů a vysvětlení několika pojmů.

## Omezení a nejasnosti

Audit proběhl pouze nad dodanými soubory. Mechanický checker skillu `cestina-audit`, spuštěný s místním `JAZYK_SLOVNIK.md` **v74**, vrátil **0 nálezů při 276 pravidlech**. Následovala ruční jazyková a strukturální kontrola včetně řetězců ve vlastnostech komponent. Text nebyl odeslán do externího API. Článek, slovník, vypořádání ani podklady se neměnily.

`05-messaging-a-tonalita.md` uvádí u Packu „bez DPH“, ale kanonický produktový podklad `zdroje/pack.ts` výslovně stanoví **1 490 Kč včetně DPH**. Podle priority zadané pro tento běh přijímám údaj článku; rozpor podkladů není vadou článku. Pro jiné produkty nejsou dodány jejich kanonické moduly, jejich přidání do CTA však článek nepotřebuje.

Nejsou dodány implementace komponent, vykreslená stránka ani celý web. Nelze potvrdit skutečný vzhled tabulky na mobilu, způsob zobrazení frontmatteru ani dostupnost cílových interních URL. To není tvrzení o jejich nefunkčnosti. Návrh přesunu IndexNow proto používá běžný MDX pod komponentou a nepředpokládá podporu formátování uvnitř `desc`. Web nebyl vyhledáván ani otevírán a fakta nebyla znovu auditována.

## Stav vypořádání kola 1

Zkontrolováno **všech 21 řádků** `vyporadani.md`, nejen vyjmenovaná místa oprav. Kontrola zahrnula `description`, `answer`, všech pět FAQ, H2, tělo, obě strany `CompareTable`, všechny kroky `Stepper`, položky `Checklist` i obsah a vlastnosti `Insight`. Níže jsou čísla původních nálezů, nikoli nové nálezy tohoto kola.

| Nález kola 1 | Stav a konkrétní kontrola v aktuálním článku |
|---|---|
| 1 — neověřené rozhraní | **Zapracováno.** Ř. 43 a 111 přiznávají neověření; kroky 2–3 na ř. 121 a 125 popisují nápovědu, nikoli vlastní průchod rozhraním. Osnova a rychlé odkazy jsou připsány nápovědě na ř. 107. Kategorické „Grafy ukazují“ nezůstalo. |
| 2 — rozpoznávání obrázků | **Zapracováno.** Ř. 51 popisuje pomoc textových údajů s pochopením obrázku. Tvrzení „robot z obrázku sám nepozná“ v souboru nezůstalo. |
| 3 — nedoložený rozdíl JavaScriptu | **Zapracováno.** Ř. 60–62 a 74 přiznávají meze srovnání; ř. 80 a 161 je zachovávají. Google je u IndexNow vymezen seznamem účastníků na ř. 75. „Šest rozdílů“ nezůstalo. |
| 4 — Request-rate | **Zapracováno.** Ř. 71 obsahuje minimum nastavení, převod nižší hodnoty, omezení maxima výkonem a zatížením, návrat mimo okno a absenci záruky rychlosti. Další zmínky nezavádějí opačné pravidlo. |
| 5 — cíl kanonického odkazu | **Zapracováno.** Ř. 72 obsahuje podobnost i porovnatelný obsah, vyloučení přesměrování a cookie i absenci přesměrování návštěvníka. Checklist na ř. 151 podmínky cíle nepopírá. |
| 6 — sitemapy | **Zapracováno.** FAQ 1 na ř. 25 uvádí oba stropy a stav po dekompresi; ř. 54 současnost limitů, nekomprimovanou velikost a specifika Seznamu. Staré „50 MB nebo 50 000“ nezůstalo. |
| 7 — velikost pro Googlebot | **Zapracováno.** Ř. 73 obsahuje nekomprimovaná data, jen staženou část pro posouzení indexace, samostatné prostředky a odlišné limity jiných robotů. |
| 8 — soubor klíče IndexNow | **Zapracováno.** Ř. 133 uvádí název, pouze klíč, UTF-8 bez BOM/HTML/dat navíc, veřejnou dostupnost, `keyLocation` i omezení složky a podadresářů. |
| 9 — předání a tempo IndexNow | **Zapracováno.** Ř. 133 rozlišuje dávku 10 000 v POST, operativní omezení a 429, význam 200 a informování dalších účastníků po ověření klíče. FAQ 4 a krok 5 nezaměňují oznámení s jistou indexací. |
| 10 — ověření Webmasteru | **Zapracováno.** Ř. 121 obsahuje poslední platný kód, přístup robota, nevhodnost vložení skriptem, ponechání souboru a problém ověření HTTP při přesměrování na HTTPS. |
| 11 — účinky nosnippet | **Zapracováno.** FAQ 5 na ř. 33 a doporučení na ř. 144 vypisují úryvek, náhled, strukturovaná data, vybraný úryvek i zachovaný titulek a odkaz. FAQ rozlišuje celý web a příslušnou stránku. Ř. 88 zachovává interní použití dat u `data-nosnippet`; ř. 87 už neobsahuje neúplné „vypne úryvek“. |
| 12 — meta refresh | **Zapracováno.** Checklist na ř. 153 vymezuje nejvýš 7 sekund, rozpoznané JS přesměrování a možnost ponechání původní adresy. Ř. 89 popisuje delší interval, test návratu 200 i možnost změny chování. |
| 13 — převaha vyhledávání v Seznam AI | **Zapracováno.** Ř. 144 nezná vzájemné podíly zdrojů a omezuje účinek SEO na cestu přes vyhledávání. Závěr na ř. 161 omezení zachovává. Ř. 142 jmenuje celou trojici zdrojů, nikoli převahu vyhledávání. |
| 14 — reklamní zdroje Seznam AI | **Zapracováno.** Ř. 142 obsahuje relevanci reklamní informace, pravidla řazení příslušného typu výsledků, možné odlišné pořadí a nezaručené zahrnutí platbou; výstup nelze přímo koupit. |
| 15 — osnova a rychlé odkazy | **Zapracováno.** Ř. 107 obsahuje nezaručené zobrazení osnovy, výběr podle dotazu a u rychlých odkazů stejnou doménu druhé úrovně i přínos uživateli. |
| 16 — nejednotná podpora seznambot | **Zapracováno.** Ř. 87 výslovně pojmenovává nejednotnost dokumentace a doporučuje pro zákaz indexace `robots` s `noindex`. Rozdíl nevykládá jako pravidlo založené na velikosti písmen. |
| 17 — údaj 7 % | **Zapracováno.** Ř. 107 přisuzuje údaj studii Seznamu, zachovává průměrnou proklikovost, chybějící datum a metodiku i výhradu vůči předpovědi pro konkrétní web. |
| 18 — nedostupnost stránky | **Zapracováno.** Ř. 90 se vztahuje ke konkrétní stránce, rozlišuje opakované ověřování 404 a označení k odstranění při 410; neslibuje okamžité odstranění. |
| 19 — objevení podstránek | **Zapracováno.** FAQ 2 na ř. 27 říká „by měl“, požaduje odkaz na každou stránku a odlišuje objevení od indexace. FAQ 4 na ř. 31 používá „může najít“, nikoli jistotu. |
| 20 — většina práce hotová | **Zapracováno.** `answer`, FAQ 1, úvod, první H2 i závěr mluví o společných doporučeních. Nedoložené množství hotové práce ani úspor nezůstalo. |
| 21 — rozpor jednotek HTML | **Zapracováno.** Ř. 73 uvádí data obou dokumentů i 1 048 576 bajtů; `Insight` na ř. 80 a závěr na ř. 161 ponechávají rozpor nerozhodnutý. Limit v Checklistu je součástí uvedené opatrné varianty, nikoli nové tvrzení o vyřešeném rozporu. |

**Uzavření kola 1:** všech **16 blockerů, 4 varování a 1 tip** je vypořádáno. Žádná položka není označena jako nezapracovaná, takže není žádný odmítací důvod k posouzení. Vyřešené věcné vady znovu neotevírám; při redakčních úpravách je nutné zachovat podmínky uvedené výše.
