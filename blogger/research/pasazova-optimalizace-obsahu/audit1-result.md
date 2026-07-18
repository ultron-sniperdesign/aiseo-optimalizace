Níže je přísný audit podle zadaných pravidel, včetně testu „zakrytím“ po H2 sekcích.

---

## Test zakrytím po sekcích (H2)

### `## Co pasáž rozbije`
**Obstojí samostatně:** ano, s výhradou.  
Sekce sama říká, co rozbije samostatnost pasáže, a tabulka má caption. Smysl drží i bez okolí.

### `## Test zakrytím`
**Obstojí samostatně:** ano.  
Definuje test hned v první větě, nepotřebuje kontext.

### `## Postup`
**Obstojí samostatně:** spíš ano.  
Stepper je srozumitelný i vytržený, ale nadpis „Postup“ je slabší než standard, který článek sám učí.

### `## Před a po`
**Obstojí samostatně:** ano.  
Ukázka je uvedená, problém i přepis jsou srozumitelné.

### `## Čeho se vyvarovat`
**Obstojí samostatně:** ano.  
Výčet chyb je samonosný, navazující varování také.

### `## Kde je hranice`
**Obstojí samostatně:** částečně.  
První a třetí blok obstojí. Druhý blok obsahuje interní odkaz „Co k tomu patří obsahově…“, ale stále dává smysl i bez prokliku. Není to BLOKER.

### `## Co si odnést`
**Obstojí samostatně:** ne úplně.  
Shrnutí funguje, ale poslední odstavec obsahuje více navazujících interních odkazů na jiné články. Smysl sice neztrácí, ale jako ukázka „samostatné pasáže“ je nejslabší.

---

## Nálezy

### [BLOKER] `## Postup`
**Citace:** `## Postup`  
**Proč:** Článek učí, že „nadpis má nést otázku, na kterou úsek odpovídá, nebo konkrétní tvrzení“. Samotný nadpis „Postup“ je přesně typ neurčitého nadpisu, proti kterému text vystupuje. To je přímý rozpor mezi poučkou a provedením.  
**Návrh:** Přejmenovat na konkrétní otázku nebo tvrzení, např. `Jak přepsat nesamostatnou pasáž` nebo `Postup přepisu po jednotlivých krocích`.

### [BLOKER] `## Co si odnést`
**Citace:** `Jak se úseky skládají do odpovědi, rozebírá [jak AI cituje zdroje]...; širší postup pak [jak se zobrazit v AI Mode]...`  
**Proč:** Zvláštní požadavek říká, že pokud sekce sama porušuje pravidla, která hlásá, je to BLOKER. Závěrečná sekce má obstát sama; místo toho končí dvěma navazujícími odkazy na okolní obsah. Nejde o klasické „jak jsme psali výše“, ale funkčně je sekce opřená o další kontext a jako vzor samostatné pasáže je slabá.  
**Návrh:** Buď odkazy odstranit, nebo před ně dát plně samostatné shrnutí bez závislosti na nich. Např. nejdřív uzavřít pointu a teprve potom odděleně přidat „Související čtení“.

### [WARNING] Úvod
**Citace:** `Jak takové skládání funguje, rozebírá [query fan-out](/blog/query-fan-out-ai-mode/).`  
**Proč:** Není to BLOKER, ale oslabuje vlastní úhel článku. V úvodu se rychle odchází k mechanismu z jiného textu, přestože zadání říká, že tenhle článek má stát na řemesle úseku, ne na opakování mechanismu.  
**Návrh:** Zkrátit na jednu neutrální větu bez rozvádění nebo odkaz přesunout až do závěrečného „souvisejícího čtení“.

### [WARNING] Kanibalizace s existujícími články
**Citace:**  
- `Nezaručuje citaci. Je to řemeslo, které zvyšuje šanci na použitelnost úseku...`  
- `Co k tomu patří obsahově, rozebírají [čtyři principy citovatelného obsahu]...`  
- úvodní zmínka o `query fan-out`  
**Proč:** Článek má vlastní úhel díky testu zakrytím a ukázce před/po, to je dobře. Ale na několika místech se dotýká už existujících témat: citovatelnost a mechanismus skládání odpovědi. Zatím to ještě není těžká kanibalizace, spíš hraniční přesah.  
**Návrh:** Držet se důsledně řemeslného rámce: co se rozbije, jak to poznat, jak přepsat. Mechanismus i „citovatelnost“ nechat jen jako stručné odkazy bez mezivýkladu.

### [WARNING] `## Před a po`
**Citace:** `Změnilo se pět věcí: nadpis nese otázku...`  
**Proč:** Výčet pěti změn nesedí přesně s vlastním zněním článku. Nový nadpis není otázka, ale tvrzení/časová podmínka (`Kdy se vyplatí přejít na roční platbu`). To by ještě šlo, protože článek připouští i „konkrétní tvrzení“, jenže věta explicitně říká „nadpis nese otázku“. To není přesné.  
**Návrh:** Přepsat na `Změnilo se pět věcí: nadpis je konkrétní a nese téma sekce...` nebo skutečně změnit nadpis ukázky na otázku.

### [WARNING] `## Před a po`
**Citace:** `Tenhle úsek je závislý úplně na všem kolem sebe:`  
**Proč:** Hyperbola. Není to faktická chyba, ale zbytečně přestřelené. Přísný text o řemesle působí věrohodněji bez absolutních formulací.  
**Návrh:** `Tenhle úsek je silně závislý na okolním kontextu:`

### [DOPORUČENÍ] `## Test zakrytím`
**Citace:** `U delších návodů se obvykle ukáže, že první dvě třetiny textu obstojí a problémy se kupí ke konci...`  
**Proč:** Není to statistika ani tvrzení o AI, takže to není BLOKER. Je to ale zobecnění bez opory. U auditního stylu bych byl opatrnější.  
**Návrh:** Změkčit na `Často se ukáže...` nebo `Častý vzorec je...`

### [DOPORUČENÍ] `description`
**Citace:** `AI i čtenáři berou ze stránky jednotlivé úseky.`  
**Proč:** Smysl je jasný, ale formulace „berou“ je hovorová a trochu mechanická. U odbornějšího článku lze zpřesnit.  
**Návrh:** `AI systémy i čtenáři často pracují jen s jednotlivými úseky stránky.`

### [DOPORUČENÍ] `faq`
**Citace:** `Důvod je praktický: ze stránky se často použije jen část... nebo systém skládající odpověď.`  
**Proč:** FAQ je v pořádku, ale lehce opakuje úvod a answer. To samo nevadí, jen je text už dost nasycen stejnou tezí.  
**Návrh:** V FAQ víc akcentovat diagnostiku a přepis, méně znovu vysvětlovat motivaci.

### [KOSMETIKA] Anglicismy / terminologie
**Citace:** `CTR` v ukázce, později `Míra prokliku (CTR)`  
**Proč:** Tohle je v pořádku; zkratka je rozepsaná v „po“ verzi. Anglicismy jsou většinou uhlídané. Jediná lehká výjimka je `query fan-out` v odkazu, ale jde o název jiného článku.  
**Návrh:** Bez nutné opravy. Jen pokud chcete být důslední, použít v okolní větě český opis typu `mechanismus rozkladu dotazu`.

### [KOSMETIKA] `answer`
**Citace:** `Psaní po pasážích znamená...`  
**Proč:** Splňuje požadavek: začíná definicí a má přibližně 49 slov.  
**Návrh:** Bez výhrad.

---

## Kontrola tvrdých podmínek

### 1. Slib výsledku
**Výsledek:** splněno.  
Nenašel jsem slib citace ani pozice. Formulace `zvyšuje šanci` a `ne přepínač viditelnosti` jsou v pořádku.

### 2. Nedoložená tvrzení o chování AI
**Výsledek:** splněno s menší opatrností.  
Nejsou tam čísla ani tvrzení typu „AI preferuje X“. Text stojí hlavně na řemesle. Jen některá zobecnění (`ze stránky se často použije jen kousek`, `obvykle ukáže`) je lepší držet méně absolutně.

### 3. Kanibalizace
**Výsledek:** přiměřené, ale hlídat.  
Vlastní úhel existuje: řemeslo na úrovni úseku + test zakrytím + před/po. Přesahy do mechanismu a citovatelnosti jsou zatím spíš okrajové.

### 4. Protiváha proti přehnané samostatnosti
**Výsledek:** splněno.  
Varování je dost silné a opakované na správných místech.

### 5. Ukázka před/po
**Výsledek:** skoro splněno.  
„Po“ verze je skutečně lepší podle kritérií článku. Jediný problém je nepřesnost ve větě `nadpis nese otázku`, protože příklad není otázka.

### 6. Anglicismy
**Výsledek:** převážně splněno.  
Terminologie je převážně česky.

### 7. answer 40–60 slov, začíná definicí
**Výsledek:** splněno.

---

## VERDIKT
**OPRAVIT PŘED PUBLIKACÍ**

### 4 prioritní zásahy
1. **Přejmenovat H2 `Postup`** na konkrétní otázku nebo tvrzení.  
2. **Upravit H2 `Co si odnést`**, aby sekce sama obstála bez opírání o další články; související odkazy oddělit od samotného shrnutí.  
3. **Opravit větu `Změnilo se pět věcí: nadpis nese otázku...`**, protože neodpovídá vlastní ukázce.  
4. **Změkčit několik zobecnění** (`obvykle`, `úplně na všem`, případně úvodní odkaz na query fan-out stáhnout do pozadí), aby článek působil přísněji a méně rozkročeně do jiných témat.