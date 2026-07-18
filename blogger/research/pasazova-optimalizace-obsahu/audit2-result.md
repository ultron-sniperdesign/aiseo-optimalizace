[BLOKER] `answer: "…Každá sekce má vlastní nadpis s otázkou…"`  
Proč: Článek po opravách sám používá i tvrzení, ne jen otázky: `## Co pasáž rozbije`, `## Test zakrytím`, `## Co si odnést`. To je přímý rozpor s vlastní poučkou i se změnou, kterou popisujete výše („nadpis konkrétně pojmenuje téma sekce“).  
Návrh: V `answer` změnit na „Každá sekce má vlastní nadpis, který konkrétně pojmenuje téma sekce, a odpověď v první větě…“

[BLOKER] `stats[2]: value: "nadpis = otázka" / label: "…nadpis má nést otázku…"`  
Proč: Stejný rozpor, navíc v pomocném výčtu. Článek už to sám nedodržuje a ani dodržovat nechce; správně pracuje s otázkou **nebo** konkrétním tvrzením.  
Návrh: Přepsat třeba na `value: "nadpis = téma"` a label „„Další informace“ neřekne nic; nadpis má konkrétně pojmenovat téma sekce.“

[BLOKER] `## Kde má tenhle přístup hranice` → `Nezaručuje citaci. … Co k tomu patří obsahově, rozebírají [čtyři principy citovatelného obsahu]...`  
Proč: Podle zvláštního požadavku má každá H2 obstát vytržená. Tahle sekce stále v jednom svém bodě opírá význam o jiný článek. Není to už tak špatné jako minule, protože základní pointu řekne, ale vlastní test zakrytím tu kulhá: odstavec končí odkazem jako nosičem dalšího vysvětlení přímo uvnitř sekce místo mimo ni. Když ji vytrhnu, stále funguje, ale článek si tu znovu sahá po přesně tom typu opory „mimo úsek“, proti kterému vystupuje. Ve 2. kole bych to ještě držel jako BLOKER právě kvůli požadavku na sebekonzistenci.  
Návrh: Buď tu větu utnout po „ne přepínač viditelnosti.“, nebo doplnit jedno samostatné vysvětlení bez odkazu, a odkazy nechat až pod sekcí jako oddělené „Související čtení“.

[WARNING] `## Jak nesamostatnou pasáž přepsat` / Stepper item `title: "Nadpis nese otázku"`  
Proč: Tady je zbytek staré formulace, která už nekoresponduje s textem ani s ukázkou „před/po“. V samotném `text` je to opravené správně („otázka… nebo konkrétní tvrzení“), ale title říká užší a nepřesnou verzi.  
Návrh: Přepsat title na „Nadpis konkrétně pojmenuje téma“ nebo „Nadpis nese otázku nebo tvrzení“.

[WARNING] `## Ukázka: před a po přepisu` → `Změnilo se pět věcí…`  
Proč: Výčet teď v zásadě sedí, ale „podmět je pojmenovaný“ je v ukázce trochu nečisté pojmenování změny. Původní věta měla neurčitá zájmena a nejasný referent; nová verze hlavně specifikuje subjekt i objekt rozhodnutí (`roční platba`, `tarif Standard`, `službu`). Není to chyba, spíš lehké zploštění.  
Návrh: Zpřesnit na „nejasné odkazy a zájmena nahradí pojmenované entity“ nebo „je jasně pojmenované, čeho a čeho se tvrzení týká“.

[WARNING] `## Co si odnést` → `systém si vezme jeden úsek a použije ho v odpovědi`  
Proč: Není to nedoložená statistika ani tvrdé tvrzení o mechanice konkrétního modelu, takže ne BLOKER. Ale formulace je dost kategorická. Bez zdroje by byla bezpečnější měkčí verze, zvlášť když jste jinde správně zjemňovali.  
Návrh: „systém může pracovat jen s jedním úsekem“ nebo „často pracuje jen s jedním úsekem“.

[DOPORUČENÍ] Test zakrytím po H2 sekcích  
Proč: Většina H2 už obstojí dobře:
- `Co pasáž rozbije` obstojí,
- `Test zakrytím` obstojí,
- `Jak nesamostatnou pasáž přepsat` obstojí,
- `Ukázka: před a po přepisu` obstojí,
- `Čeho se vyvarovat` obstojí,
- `Co si odnést` obstojí.
Nejslabší je právě `Kde má tenhle přístup hranice`, protože do ní znovu vstupuje interní odkaz jako součást výkladu.  
Návrh: Po opravě výše bude sebekonzistence dobrá.

[DOPORUČENÍ] `description: "AI systémy i čtenáři často pracují jen s částí stránky…"`  
Proč: Funkční a věcně v pořádku. Jen stylisticky by „pracují“ u čtenářů mohlo působit technicky.  
Návrh: Není nutné. Případně „AI systémy i čtenáři se často dostanou jen k části stránky…“

[KOSMETIKA] `Většinou stačí…` v insightu pod „Čeho se vyvarovat“  
Proč: Máte výše zjemněno „obvykle se ukáže“ → „častý vzorec je“, ale tady „Většinou stačí“ je podobně široké. Není to problém, jen stylistická nekonzistence v míře opatrnosti.  
Návrh: „Často stačí…“

[KOSMETIKA] Anglicismy  
Proč: `CTR` a CTA nejsou v textu jako problém, CTA se tu navíc fakticky nevyskytuje v článku, jen ve vašem zadání. `Stepper`, `CompareTable` apod. jsou implementační názvy komponent, ne součást publikovaného textu. Neřešil bych.  
Návrh: Bez zásahu.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Shrnutí: Oproti 1. kolu je to výrazně lepší a většina dřívějších rozporů je skutečně pryč. Zůstávají ale ještě dva skutečné seberozpory: článek na několika místech stále tvrdí „nadpis = otázka“, ačkoliv sám správně používá i tvrzení; a sekce o hranicích přístupu si ještě jednou bere oporu z jiného článku uvnitř H2, což při vašem explicitním testu zakrytím pořád není čisté. Po těchto opravách bych pustil.