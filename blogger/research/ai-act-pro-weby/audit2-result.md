# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit článku `ai-act-pro-weby`, kolo 2, stav k **26. 11. 2026**. **2 nálezy [BLOCKER], 4 nálezy [WARNING].** Kontrola zahrnuje jazyk, strukturu, citovatelnost, SEO, CTA a vypořádání všech 13 nálezů prvního kola. Věcný audit se neopakuje; právní podklady byly použity ke kontrole vypořádání a tří výslovně zadaných doplnění. Čísla řádků odkazují na dodaný `clanek.mdx` před případnými dalšími úpravami.

Rozhodující problém: `vyporadani.md` tvrdí, že krátká odpověď obsahuje výjimku pro kontrolovaný AI text i redakční odpovědnost, ale skutečný `answer` je neobsahuje. U chatbotu v komponentě `Checklist` chybí vypořádáním slíbený odkaz na další výjimku. Většina ostatních oprav prvního kola sedí. Text však po opravách opakuje podrobná právní pravidla a čtyřsloupcová tabulka ztěžuje společné čtení povinnosti a výjimek.

## Nálezy a cílené opravy

### 1. [BLOCKER] V `answer` zůstala neúplná povinnost pro AI text; vypořádání neodpovídá souboru

**Místo a citace — ř. 5:**

> „Kdo AI profesně používá, musí zveřejnit umělé vytvoření nebo úpravu deepfaku i AI textu k informování veřejnosti o záležitostech veřejného zájmu. Povinnosti mají výjimky.“

**Problém:** Jde o zbytek nálezu č. 1 prvního kola. Chybí kombinace **(lidský přezkum nebo redakční kontrola) a redakční odpovědnost fyzické nebo právnické osoby**. Vypořádání přitom výslovně tvrdí, že byla doplněna do `answer` a že deepfake má vlastní větu. Ani jedno v ř. 5 neplatí. Obecné „Povinnosti mají výjimky“ samostatně citovanou povinnost dostatečně nevymezuje a nenahrazuje slíbenou opravu. U dalších zákonných výjimek také chybí vypořádáním slíbený odkaz na přehled; to zasahuje nález č. 3 prvního kola.

Odpověď má **60 slov**, takže délkový limit splňuje. Nezačíná však požadovanou definicí: „Webů a e-shopů se…“ pouze vymezuje publikum. Do limitu není nutné vtěsnat celý test zřejmosti a všechny výjimky. Bezpečnější je definovat předpis a rozsah článku, bez neúplných kategorických příkazů.

**Přesné nové znění celého pole `answer` — 54 slov:**

```yaml
answer: "AI Act je nařízení EU o umělé inteligenci. Pro weby a e-shopy upravuje článek 50 od 2. 8. 2026 transparentnost při komunikaci s AI a označování vybraného obsahu vytvořeného nebo manipulovaného AI. Konkrétní povinnosti závisejí na roli poskytovatele či zavádějícího subjektu, druhu použití a zákonných výjimkách. Jejich dopad na svůj web prověřte s právníkem."
```

**Podklad kontroly:** `audit1-vysledek.md`, nálezy 1 a 3; `vyporadani.md`, řádky tabulky 1 a 3; `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 4. Podmínka už je správně uvedena v `research.md`, v tabulce článku, v těle, ve FAQ 2 a v položce „AI texty“; na těchto místech ji znovu nehlásím.

### 2. [BLOCKER] U chatbotu v `Checklist` chybí vypořádáním slíbené zachování další výjimky

**Místo a citace — ř. 92, vlastnost `desc`:**

> „Kdo je poskytovatel a jak se lidé dozví, že komunikují s AI, není-li to zřejmé přiměřeně informované, pozorné a obezřetné osobě při zohlednění okolností a kontextu použití. Informace má zaznít jasně a rozlišitelně nejpozději při první interakci.“

**Problém:** Test zřejmosti je opraven správně. Položka ale zachovává pouze tuto výjimku a nemá ani odkaz na zvláštní zákonnou výjimku pro trestní účely a její omezení. `vyporadani.md` u nálezu č. 3 tvrdí, že souhrny v Checklistu odkazují na další výjimky podle tabulky. Odkazy v jiných položkách se týkají jejich vlastních situací; tuto položku neopravují. Jde o nedokončené vypořádání nálezu č. 3, nikoli nový faktický audit.

**Přesné nové znění celé položky:**

```jsx
{ title: "Chatbot nebo AI asistent na webu", desc: "Prověřit, kdo je poskytovatelem a jak se lidé dozví, že komunikují s AI, není-li to zřejmé přiměřeně informované, pozorné a obezřetné osobě při zohlednění okolností a kontextu použití. Zvláštní zákonnou výjimku pro trestní účely a její omezení uvádí přehled povinností výše u odstavce 1. Pokud informační povinnost platí, informace má zaznít jasně a rozlišitelně nejpozději při první interakci." },
```

**Podklad kontroly:** `audit1-vysledek.md`, nález 3; `vyporadani.md`, řádek tabulky 3; `zdroje/aiact-cs-vyber.txt:10`, čl. 50 odst. 1. Úplná výjimka i návrat povinnosti u veřejného hlášení trestných činů už v ř. 51 a ve FAQ 1 jsou. Jejich text není potřeba měnit.

### 3. [WARNING] Dlouhé buňky tabulky oddělují povinnost od jejích podmínek; dva řádky mají také vadnou větnou stavbu

**Místo a citace — ř. 49–55:**

> „Odstavec | Kdo | Co | Výjimky a omezení“

Řádek 52 začíná:

> „Systém vytvářející syntetický zvukový, obrazový, video nebo textový obsah zajistí, aby jeho výstupy byly označeny…“

**Problém:** Ve čtvrtém sloupci mají jednotlivé buňky 36–61 slov. Na mobilu, kde se podle zadání tabulka posouvá vodorovně, čtenář obtížně spojuje povinnost s celou výjimkou. Krácení výjimek by vracelo chyby prvního kola. V řádku 52 navíc gramaticky „zajistí“ označení samotný systém, přestože sloupec „Kdo“ správně uvádí poskytovatele.

V ř. 55 je druhá vadná vazba: „U systému vytvářejícího nebo manipulujícího text…“. Slovesa se nemohou o předmět „text“ podělit v tomto tvaru; nařízení používá „s takovým textem manipuluje“.

**Cílená oprava struktury:** Místo tabulky použít pět bloků pod H3. Každý ponechá roli, povinnost a úplné výjimky přímo pod sebou. Není potřeba krátit právní podmínky. Přesné nové nadpisy:

```md
### Odstavec 1: komunikace s AI
### Odstavec 2: strojově čitelné označování
### Odstavec 3: rozpoznávání emocí a biometrická kategorizace
### Odstavec 4: deepfake
### Odstavec 4: text o záležitostech veřejného zájmu
```

H3 mají zůstat prostým textem. Pod každým použít role a texty příslušného řádku; věty ze sloupce „Výjimky a omezení“ přesunout **beze změny** do samostatného odstavce. Například přesné nové znění druhého bloku, včetně opravy podmětu:

```md
### Odstavec 2: strojově čitelné označování

**Kdo:** Poskytovatel systému AI vytvářejícího syntetický obsah.

**Povinnost:** Poskytovatel systému vytvářejícího syntetický zvukový, obrazový, video nebo textový obsah zajistí, aby jeho výstupy byly označeny ve strojově čitelném formátu a zjistitelné jako uměle vytvořené nebo manipulované.

**Výjimky a lhůta:** Neplatí v rozsahu, v jakém systém plní asistenční funkci pro standardní editaci nebo podstatně nemění vstupní údaje poskytnuté zavádějícím subjektem či jejich sémantiku (stačí jedna z obou podmínek). Neplatí ani tam, kde je to zákonem povoleno k odhalování, prevenci, vyšetřování nebo stíhání trestných činů. U systémů uvedených na trh před 2. 8. 2026 mají poskytovatelé požadavky splnit do 2. 12. 2026.
```

U ostatních bloků bude `Kdo: Poskytovatel` pro odstavec 1 a `Kdo: Zavádějící subjekt` pro odstavce 3 a 4. Za označením „Povinnost“ zachovat stávající znění sloupce „Co“, pouze u textového bloku ř. 55 opravit vazbu tímto přesným zněním:

> Zavádějící subjekt systému AI, který vytváří text zveřejněný za účelem informování veřejnosti o záležitostech veřejného zájmu nebo s takovým textem manipuluje, uvede, že text byl uměle vytvořen nebo s ním bylo manipulováno.

Za označením „Výjimky a omezení“ ponechat celé stávající znění posledního sloupce každého z těchto čtyř řádků. Zachovat i navazující společné odstavce o technické proveditelnosti a formě informování z ř. 57 a 59.

**Navazující přesné úpravy odkazů na přehled:**

- V ř. 41 nahradit „které shrnuje tabulka níž“ za „které shrnuje přehled níže“ — pokud nebude celý odstavec nahrazen podle nálezu 4.
- V ř. 93 nahradit „Další výjimky shrnuje tabulka výše.“ za „Další výjimky shrnuje přehled výše.“
- V ř. 94 nahradit „jiná výjimka z tabulky výše“ za „jiná výjimka z přehledu výše“.
- V ř. 110 nahradit „další výjimky podle tabulky výše“ za „další výjimky podle přehledu výše“ — pokud nebude celé shrnutí nahrazeno podle nálezu 4.

Tato úprava má zachovat alternativu **nebo**, sémantiku vstupních údajů, zjistitelnost manipulace, všechny trestní výjimky včetně jejich rozdílů a úplný zvláštní režim tvůrčích děl.

### 4. [WARNING] Úvod a závěr opakují dlouhý právní výklad místo stručné orientace a dalšího kroku

**Místo a citace — ř. 39 a 110:**

> „Poskytovatel systému AI určeného k přímé interakci s lidmi, typicky chatbota, zajistí, aby lidé byli vyrozuměni…“

> „Poskytovatel chatbota zajistí, aby lidé věděli, že komunikují s AI, není-li to zřejmé přiměřeně informované, pozorné a obezřetné osobě při zohlednění okolností a kontextu použití…“

**Problém:** První odstavec má 111 slov a je celý tučně. V mechanicky vymezených prvních 100 slovech se věta o výjimce pro AI text teprve rozepisuje; redakční odpovědnost přijde až za touto hranicí a odkaz na další výjimky až v dalším odstavci. Nejde o nový věcný nález k úvodu: oprava prvního kola je v celém souvětí přítomná. Pro samostatnou krátkou odpověď je však výklad příliš roztažený. Shrnutí má dalších 161 slov a opakuje podmínky, které už čtenář dostal. Celý test zřejmosti se v souboru objevuje šestkrát.

**Přesné nové znění úvodu místo ř. 39 a 41:**

> AI Act je evropské nařízení o umělé inteligenci. Jeho článek 50 se použije od 2. 8. 2026 a upravuje transparentnost při komunikaci s AI, označování vybraného syntetického obsahu a informování o rozpoznávání emocí či biometrické kategorizaci. Konkrétní povinnosti závisejí na roli poskytovatele nebo zavádějícího subjektu, způsobu použití a zákonných výjimkách. Úplné podmínky uvádí přehled níže.
>
> Nejprve si ujasněte, jak AI na webu používáte a kdo systém poskytuje. Dopad na svůj web potom prověřte s právníkem; tento článek individuální právní posouzení nenahrazuje.

Nevyznačovat celý první odstavec tučně. Odstavec o zdrojích a stavu k 26. 11. 2026 v ř. 43 může zůstat.

**Přesné nové znění shrnutí místo ř. 110:**

> Dopad článku 50 AI Actu na váš web závisí na vaší roli, způsobu použití systému a zákonných výjimkách. Projděte kontrolní seznam a s právníkem ověřte, které povinnosti se na vás vztahují. Poskytovatelé systémů vytvářejících syntetický obsah, které byly uvedeny na trh před 2. 8. 2026, mají splnit požadavky čl. 50 odst. 2 do 2. 12. 2026. Vybraná pravidla kapitoly III pro vysoce rizikové systémy mají nová data použitelnosti v letech 2027 a 2028; rozsah odkladu a přechodný režim popisuje část o Omnibusu.

Tyto souhrny neukládají jednotlivé povinnosti bez podmínek. Úplné testy zřejmosti a výjimky mají zůstat v podrobném přehledu a sebestačných FAQ. FAQ 1 nekrátit vynecháváním obezřetnosti, okolností, kontextu či trestní výjimky.

### 5. [WARNING] Jeden H2 má rozpadlou vazbu a závěrečný H2 nepojmenovává hlavní téma dostatečně konkrétně

**Místo a citace — ř. 89:**

> „Co si web a e-shop prověřit — kontrolní seznam, ne právní rada“

**Problém:** Vazba „co si web a e-shop prověřit“ postrádá sloveso pro podmět; přirozeně by bylo například „co si má provozovatel prověřit“. V nadpisu navíc chybí AI Act. Upozornění na povahu článku už poskytují úvod, `Insight`, název Checklistu i závěrečná poznámka; H2 může přímo ukázat čtenářův další krok.

**Přesné nové znění:**

```md
## <span class="hl">AI Act pro weby a e-shopy</span> — <strong>co prověřit s právníkem</strong>
```

**Druhé místo — ř. 108:**

> „Shrnutí: od srpna 2026 platí transparentnost“

„Transparentnost“ bez pojmenování předpisu je pro čtenáře skenujícího nadpisy příliš obecná. Nadpis má sdělit, co si má z právě přečteného výkladu odnést.

**Přesné nové znění:**

```md
## <span class="hl">Článek 50 AI Actu</span> — <strong>ověřte svou roli, použití a výjimky</strong>
```

Oba návrhy zachovávají požadované `<span class="hl">` i `<strong>`. Datované vymezení českého dozoru v ř. 100 ponechat: jde o správnou opravu nálezu 10 prvního kola.

### 6. [WARNING] FAQ 2 začíná závislou odpovědí a nepojmenovává předpis

**Místo a citace — ř. 27:**

> „Ne každý. Článek 50 odst. 4 se týká textu…“

**Problém:** „Ne každý“ potřebuje otázku nad sebou a následující věta neříká, kterého předpisu se článek 50 týká. Právní podmínky v dalším textu jsou již opravené správně; tento nález je nemění. Stačí pojmenovat téma a předpis přímo na začátku odpovědi.

**Přesné nové znění celé odpovědi:**

> Označování článků napsaných s pomocí AI upravuje článek 50 odst. 4 AI Actu. Týká se textu, který systém AI vytvoří nebo s ním manipuluje a který je zveřejněn za účelem informování veřejnosti o záležitostech veřejného zájmu. U takového textu zavádějící subjekt uvede, že byl uměle vytvořen nebo s ním bylo manipulováno. Výjimka se uplatní, pokud text prošel lidským přezkumem nebo redakční kontrolou a současně za zveřejnění nese redakční odpovědnost fyzická nebo právnická osoba; další výjimka se týká použití povoleného zákonem k odhalování, prevenci, vyšetřování nebo stíhání trestných činů. Konkrétní případ je třeba posoudit podle nařízení a okolností zveřejnění se zohledněním pokynů Komise; individuální právní posouzení tento článek neposkytuje.

## Co vyhovuje

- **SEO:** `seoTitle` má **49 znaků**, začíná „AI Act pro weby“ a splňuje limit 60. `description` má **159 znaků** a splňuje rozmezí 70–160. Její výčet témat nepředstírá úplný seznam povinností. Délku `title` neposuzuji, protože `seoTitle` existuje. Slug `ai-act-pro-weby` je smysluplný a klíčová slova nejsou násilně opakovaná.
- **Nadpisy:** Všech sedm stávajících H2 obsahuje `<span class="hl">` i `<strong>`. H3 v původním souboru nejsou; nejde samo o sobě o vadu. Jejich doplnění výše řeší konkrétní problém s tabulkou.
- **Interní odkazy:** Odkazy na chatbot a DSA tematicky odpovídají odstavcům, produktový odkaz míří na `/audit/` a odkaz na autora podporuje dohledatelnost odpovědnosti za obsah. Popisky odkazů neobsahují cenu. Konkrétní důvod přidávat další pilířový či produktový odkaz zde není.
- **CTA — ř. 112:** Název **Audit AI viditelnosti**, cena **3 600 Kč bez DPH**, zjištění o výskytu značky v AI odpovědích, přístup robotů, obsahové mezery, priority podle dopadu a náročnosti, výstup do **pěti pracovních dní od úhrady** i schůzka **30–60 minut** odpovídají `zdroje/audit.ts`, zejména `serviceJsonLd`, `hero`, `deliverable` a `processSteps`. CTA neslibuje právní audit, implementaci ani garantované citace. Přechod „Pokud vedle pravidel řešíte i…“ dostatečně vysvětluje souvislost produktu s článkem. Opravu CTA nepožaduji.
- **Tón a slovník:** Nenalezeny zakázané prodejní sliby, manipulativní naléhavost ani uvedené zakázané výrazy v textu pro čtenáře. „Chatbot“ není samostatné nevysvětlené označení vyhledávacího robota. Názvy komponent `Insight` a `Checklist`, YAML/JSX uvozovky a cesty importů nejsou jazykovou vadou. České uvozovky není nutné doplňovat tam, kde text přímou citaci neobsahuje. Právní výrazy jako „zavádějící subjekt“, „použitelnost“, „redakční odpovědnost“ a „manipulovaný“ své opodstatnění mají; jejich nahrazování volnými synonymy zde nedoporučuji.

## Stav vypořádání kola 1

Prověřen celý soubor včetně `description`, `answer`, pěti FAQ, tabulky, úvodu, shrnutí a vlastností komponent `Checklist` a `Insight`. Stav níže platí pro dodaný článek, nikoli pro navržené opravy v tomto reportu.

| Nález kola 1 | Stav | Výsledek kontroly |
|---|---|---|
| 1 — kontrola a redakční odpovědnost, oddělení deepfaku | **Nedokončeno** | Úvod ř. 39, FAQ 2 ř. 27, textový řádek přehledu ř. 55, Checklist ř. 94 a shrnutí ř. 110 podmínku obsahují. `answer` ř. 5 ji neobsahuje a stále spojuje deepfake a text do jedné povinnosti. Viz blocker 1 tohoto kola. |
| 2 — test zřejmosti u chatbotu | **Zapracováno** | Informovanost, pozornost, obezřetnost i okolnosti a kontext jsou v `answer`, úvodu, FAQ 1, přehledu, Checklistu i shrnutí. Staré zkrácené testy nenalezeny. |
| 3 — trestní výjimky a jejich omezení | **Nedokončeno** | Přehled ř. 51–55 i FAQ 1 a 2 obsahují příslušné výjimky; odst. 1 má návrat povinnosti u veřejného hlášení a odst. 3 nepřidává stíhání. Úvod a shrnutí odkazují na další výjimky. `answer` má pouze obecnou větu a chatbot v Checklistu odkaz nemá. Viz blockery 1 a 2. |
| 4 — alternativy odst. 2, vlastní generátor a proveditelnost | **Zapracováno** | Ř. 52 zachovává „nebo“, sémantiku i vysvětlení, že stačí jedna alternativa; ř. 57 technickou proveditelnost a hlediska řešení; ř. 95 podmíněné prověření role, výstupů, výjimek a lhůty. Gramatickou vadu podmětu ř. 52 řeší nález 3 tohoto kola. |
| 5 — manipulovaný obsah a zjistitelnost | **Zapracováno** | Ř. 52 má strojovou čitelnost i zjistitelnost vytvoření nebo manipulace. Úvod, FAQ 2 a 5, oba řádky odst. 4, Checklist a shrnutí zahrnují i manipulaci; definice ř. 59 obsahuje subjekty i alternativu „autentický nebo pravdivý“. `answer` používá významově srozumitelnou „úpravu“. |
| 6 — tvůrčí díla a programy | **Zapracováno** | Ř. 54 a 93 uvádějí úplný výčet, zachovávají zveřejnění existence obsahu a podmínku nebránit zobrazení nebo užívání díla. |
| 7 — rozsah odkladu a starší vysoce rizikové systémy | **Zapracováno** | FAQ 3 ř. 29 a ř. 75 vymezují oddíly kapitoly III, výjimku čl. 6 odst. 5 i vazby na přílohy. Ř. 77 obsahuje přechodný režim. Shrnutí ř. 110 mluví o vybraných pravidlech a odkazuje na rozsah. Starý plošný výrok nezůstal. |
| 8 — vazba AI Actu na DSA | **Zapracováno** | Ř. 106 popisuje propojený dozor, příslušné systémy i omezení pro zavádějící subjekty. Výrok o neexistenci souvislosti nenalezen. |
| 9 — unijní a národní dozor a sankce | **Zapracováno** | Ř. 102 rozlišuje rámec nařízení, národní orgány, Úřad pro AI a evropského inspektora ochrany údajů. Původní přisouzení celého rámce členským státům nezůstalo. |
| 10 — datovaný stav českého dozoru | **Zapracováno** | H2 ř. 100 odkazuje na zprávu ze 4. 8. 2026; FAQ 4 a ř. 104 používají „tehdy“ a přiznávají neověřený listopadový stav. Starý přítomný čas v nadpisu nezůstal. |
| 11 — čtyři skupiny, dvě role | **Zapracováno** | H2 ř. 45 i ř. 47 rozlišují skupiny povinností a rozdělují odstavce mezi dvě role. Výrok „každou pro jinou roli“ nezůstal. |
| 12 — platnost, použitelnost a datum uvedení na trh | **Zapracováno** | FAQ 3 a ř. 73 rozlišují vstup v platnost a použitelnost; přechodná lhůta je vázaná na uvedení na trh před 2. 8. 2026. Staré „před srpnem“ ani „účinné od 27. 7.“ nezůstalo. |
| 13 — nařízení versus výkladové pokyny | **Zapracováno** | FAQ 2, `Insight` ř. 68, ř. 87 a shrnutí ř. 110 vycházejí z nařízení a okolností a pokyny zohledňují jako výklad. Původní výrok, že rozhodují pokyny, nezůstal. |

**Výsledek: 11 nálezů plně vypořádáno, 2 pouze částečně.** Vypořádání žádný nález neodmítá, takže není žádný důvod nezapracování k přijetí či odmítnutí. Údaj „answer 60 slov“ sedí; údaj o doplnění redakční odpovědnosti a samostatné věty o deepfaku do `answer` nesedí.

### Tři doplnění nad rámec prvního kola

| Doplnění | Kontrola proti dodanému zdroji |
|---|---|
| Nové znění čl. 50 odst. 7 | **V rozsahu tvrzení článku doloženo.** Ř. 85 odpovídá `zdroje/omnibus-cs.txt:289–290`: posouzení dostatečnosti kodexů pro odst. 2 a 4 a možnost stanovit společná pravidla prováděcím aktem. Článek netvrdí, že kodex automaticky zaručuje soulad. |
| Kdo kodex nedodržuje | **Doloženo.** Ř. 85 a FAQ 5 odpovídají větě o alternativních, rovnocenně přiměřených prostředcích v `zdroje/ec-guide.txt:67`. Vypořádání odkazuje na ř. 66, ale v dodané kopii je rozhodná věta na ř. 67; jde o nepřesnost odkazu v podkladu, nikoli vadu článku. |
| Nové zákazy čl. 5 | **V rozsahu tvrzení článku doloženo.** Ř. 79 uvádí písm. ba) a bb) společně s odst. 1a a 1b a datum 2. 12. 2026. To odpovídá `zdroje/omnibus-cs.txt:194–209` a změně čl. 113 na ř. 572. Věcný rozsah zákazů článek nevykládá, proto nepřidává nový neúplný výklad podmínek. |

### Meze kontroly a nejasnosti

Audit proběhl pouze nad dodanými soubory, bez webového vyhledávání, externího API a bez změn článku či podkladů. Použit byl dodaný `JAZYK_SLOVNIK.md` verze 74 a kontextová redakční kontrola. Mechanický checker uvedený ve skillu `cestina-audit` nebyl v dostupných instalacích skillu nalezen; jeho dřívější výsledek „0“ z vypořádání zde nevydávám za nově provedenou kontrolu.

Šablona stránky ani běžící web nejsou součástí dodávky: skutečný vzhled na mobilu, vykreslení FAQ a funkčnost cílových interních URL nebyly ověřeny. Nález k tabulce vychází z dodaného MDX a výslovného popisu vodorovného posunu v zadání. Aktuální český adaptační stav a konkrétní výklad rolí ve finálním PDF pokynů zůstávají omezeními podkladů známými už z prvního kola; článek je přiznává a tento audit je znovu neotevírá.
