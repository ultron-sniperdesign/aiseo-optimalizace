**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

## Nálezy

### [BLOCKER] Title je moc dlouhý a klíčové slovo není dost vpředu
**Citace:**  
`title: "Autor jako signál důvěry pro AI: návod na author entity"`

**Problém:**  
Title má zhruba 61 znaků bez rezervy a hlavní KW `autorsky profil pro ai` v něm vůbec není. Pro SEO osu neplní zadání „klíčové slovo vepředu“.

**Návrh opravy:**  
Zkraťte a přesuňte hlavní KW na začátek, například:  
- `Autorský profil pro AI: jak vybudovat author entity`  
- `Autorský profil pro AI: autor jako signál důvěry`

---

### [WARNING] Description používá nejasný termín „Person data“
**Citace:**  
`description: "AI i Google ověřují, kdo obsah napsal. Jak vybudovat autorskou entitu — bylinu, autorskou stránku, Person data a sameAs — aby vás AI citovala."`

**Problém:**  
„Person data“ není v češtině přirozené ani dost vysvětlující. V brand voice máte používat srozumitelný slovník. Navíc článek jinde správně používá „strukturovaná data typu Person“.

**Návrh opravy:**  
Upravte na:  
`AI i Google ověřují, kdo obsah napsal. Naučte se postavit autorský profil pro AI: bylina, autorská stránka, strukturovaná data Person a sameAs.`

---

### [WARNING] V textu opakovaně používáte anglicismus „bylina“, který není pro CZ čtenáře srozumitelný
**Citace:**  
- `...viditelné bylině...`
- `Nahraďte každou generickou bylinu...`
- `Jméno musí být všude stejné.`

**Problém:**  
V zadání je výslovně upozornění na počeštění místo anglicismů. „Bylina“ je doslovný přepis *byline* a v češtině působí rušivě. Čtenář spíš čeká „podpis autora“, „řádek s autorem“ nebo „uvedení autora u článku“.

**Návrh opravy:**  
Nahradit konzistentně:
- „viditelná bylina“ → „viditelně uvedený autor“ nebo „podpis autora u článku“
- „generická bylina“ → „generické označení autora“
- v answer i FAQ totéž

---

### [WARNING] Prvních ~100 slov těla nezačíná definicí, ale tezí
**Citace:**  
`AI systémy i Google se posunuly od klíčových slov k entitám — a jednou z nich je autor...`

**Problém:**  
Podle pravidla citovatelnosti má první blok těla fungovat jako samostatná odpověď a začínat definicí, ne rámovacím tvrzením. Teď úvod začíná trendovým výrokem, ne vysvětlením pojmu.

**Návrh opravy:**  
Začněte jednou jasnou definicí ve stylu:  
„Autorská entita je konkrétní osoba, kterou AI a vyhledávače dokážou jednoznačně spojit s obsahem díky jménu autora, autorské stránce, strukturovaným datům typu Person a ověřeným profilům sameAs.“  
Až potom doplňte, proč to pomáhá.

---

### [WARNING] Některá tvrzení o chování Google/AI jsou formulována příliš jistě bez opory
**Citace:**  
- `AI systémy i Google se posunuly od klíčových slov k entitám`
- `Nezajímá je jen, co je napsané, ale i kdo to napsal...`
- `Autor je jedním z klíčových nositelů těchto signálů.`

**Problém:**  
Směr je věrohodný, ale formulace zní příliš definitivně. U části tvrzení není jasné, zda jde o oficiální dokumentaci, nebo inferenci z analýz. To je problém ve věcné správnosti.

**Návrh opravy:**  
Změkčit formulace:
- „stále více pracují s entitami“
- „vedle obsahu mohou brát v úvahu i to, kdo jej publikoval“
- „autor může být jedním z nositelů těchto signálů“

---

### [BLOCKER] Chybí explicitní hedge u klíčových marketingových čísel ve stats
**Citace:**  
```yaml
stats:
  - value: "2+"
    label: "ověřené externí profily v sameAs, od kterých podle analýz začíná měřitelný efekt"
  - value: "5–12"
    label: "verifikovaných URL ve funkčních sameAs seznamech v polovině 2026"
  - value: "5+"
    label: "publikovaných článků na téma, které pomáhají budovat tematickou autoritu autora"
  - value: "3–6 měs."
    label: "typický horizont, než se autorská entita začne projevovat na citacích (podle dostupných analýz)"
```

**Problém:**  
Stats vypadají jako tvrdá doporučení nebo benchmark. Přitom podle zadání jde o marketingové analýzy, které je nutné výrazně hedgovat. Nejproblematičtější je `2+` a `5–12` jako skoro normativní pravidlo.

**Návrh opravy:**  
Přepsat labely tak, aby bylo zřejmé, že nejde o obecně platné minimum:
- `v některých analýzách hranice, od které bývá vidět efekt`
- `častý rozsah u analyzovaných profilů, ne pevné pravidlo`
- `orientační horizont podle marketingových analýz, ne garance`

---

### [WARNING] „Minimum dva profily“ je místy podané jako pravidlo, ne orientační doporučení
**Citace:**  
- `sameAs se dvěma a více ověřenými profily`
- `Minimum jsou dva ověřené externí profily`
- `Minimum dva; funkční seznamy mívají 5 až 12.`

**Problém:**  
Zadání říká, že 2+ je marketingový poznatek, ne oficiální standard schema.org ani Google. Tady to zní jako pevné pravidlo.

**Návrh opravy:**  
Upravit na:  
- „praktické minimum podle dostupných analýz bývají dva ověřené profily“  
- „u některých autorů funguje i menší počet, důležitější než počet je jednoznačnost a kvalita profilů“

---

### [WARNING] Věta o „měřitelném efektu“ může být overclaim
**Citace:**  
`podle analýz od nich začíná měřitelný efekt`

**Problém:**  
„Začíná měřitelný efekt“ implikuje kauzalitu a opakovatelnost. To je silnější tvrzení, než dovolují marketingové analýzy.

**Návrh opravy:**  
Nahradit například:  
`podle některých analýz se od této úrovně častěji objevuje zlepšení`  
nebo  
`u části sledovaných webů se od této úrovně častěji ukazoval rozdíl`

---

### [WARNING] „Google Rich Results Test“ není ideální validační doporučení pro Person
**Citace:**  
- `Ověřte v Google Rich Results Test.`
- `Autorská stránka by měla mít vlastní Person strukturovaná data. Ověřte v Google Rich Results Test nebo ve validátoru strukturovaných dat schema.org`

**Problém:**  
Rich Results Test neověřuje vše jako obecný validator a Person nemusí být samostatně „rich result“ cíl. Jako univerzální doporučení je to nepřesné.

**Návrh opravy:**  
Změnit pořadí a formulaci:
- „Ověřte syntaxi a vazby ve validátoru schema.org nebo v nástroji pro kontrolu strukturovaných dat; v Google Rich Results Test si pak zkontrolujte, že značky neobsahují chyby tam, kde je Google zpracovává.“

---

### [WARNING] „Vlastní web“ v sameAs je sporné doporučení
**Citace:**  
`Vhodné profily: LinkedIn (minimum pro B2B autory v Česku), Wikidata, ORCID u akademiků, odborné registry, vlastní web, univerzitní stránka.`

**Problém:**  
`sameAs` má sloužit hlavně k propojení na jiné jednoznačné identity. „Vlastní web“ může být validní jen pokud jde o jinou oficiální osobní doménu autora, ne o tentýž web, kde autor už má `url`. Bez vysvětlení je to zavádějící.

**Návrh opravy:**  
Upřesnit:
- „oficiální osobní web autora na jiné doméně“  
a vypustit to, pokud jde o stejný web.

---

### [BLOCKER] Výrok o spam risku u stock fotky a AI tváře je příliš kategorický
**Citace:**  
- `Fake autoři se stock foto (spam risk)`
- `Stock foto nebo vygenerovaná tvář riskuje snížení důvěryhodnosti pod pravidly proti spamu.`
- `Vymyšlení autoři s fotkou z fotobanky nebo vygenerovanou tváří riskují snížení důvěryhodnosti pod pravidly Googlu proti spamu.`

**Problém:**  
Tohle je nejspornější věcný bod v článku. Pokud je problém „fake autor“, je problém falešná identita, ne samotná stock fotka. Formulace teď skoro tvrdí, že stock foto samo o sobě spadá pod spam pravidla, což je nedoložené.

**Návrh opravy:**  
Rozlišit dvě věci:
- `Falešný autor vydávaný za reálnou osobu je důvěryhodnostní problém.`
- `Stock fotka nebo generovaný portrét samy o sobě nepomáhají ověřitelnosti a u expertního obsahu mohou vyvolávat pochybnosti, pokud nejde o skutečnou identitu autora.`

---

### [WARNING] „Jan Novák“ vs „Jan M. Novák“ jako jistý nesoulad je příliš absolutní
**Citace:**  
`„Jan Novák“ versus „Jan M. Novák“ je pro AI nesoulad, který oslabuje entitu.`

**Problém:**  
Prakticky může jít o tutéž osobu a systémy to nemusí vyhodnotit fatálně. Správný princip je konzistence, ne tvrzení, že každá varianta automaticky oslabuje entitu.

**Návrh opravy:**  
`Takový rozdíl může zbytečně zhoršit jednoznačnost identity. Používejte pokud možno stejnou podobu jména na webu, v datech i na externích profilech.`

---

### [WARNING] „Silné E-E-A-T signály mohou převážit i nad samotnou pozicí“ je velmi silné tvrzení
**Citace:**  
`Silné E-E-A-T signály mohou podle některých analýz převážit i nad samotnou pozicí ve výsledcích — stránka s nižší pozicí a silným autorem bývá citovaná častěji než stránka na první pozici se slabým autorem.`

**Problém:**  
Tohle je spekulativní a bez zdroje snadno přehnané. Zvlášť druhá část zní jako pravidlo. V zadání sice padá číslo 2,3×, ale výslovně s varováním na hedging.

**Návrh opravy:**  
`Některé marketingové analýzy naznačují, že u citací v AI odpovědích nemusí rozhodovat jen klasická pozice ve výsledcích, ale i síla důvěryhodnostních signálů včetně autora. Nejde však o univerzální pravidlo.`

---

### [WARNING] Chybí explicitní zmínka, že AIO = Google AI Overviews při prvním použití zkratek v kontextu
**Citace:**  
V textu je jen `Google AI Overviews`, ale zadání chtělo hlídat rozepsání AIO.

**Problém:**  
Není to zásadní chyba, ale článek cílí i na KW `author entity` a AI SEO publikum; zkratka AIO se v textu neobjevuje, což je vlastně dobře. Jen by bylo vhodné nikde ji pak dodatečně nezavádět bez vysvětlení.

**Návrh opravy:**  
Bez nutnosti větší změny. Jen zachovat plný tvar `Google AI Overviews` a nepřidávat osamocenou zkratku.

---

### [TIP] FAQ je obsahově dobré, ale místy zbytečně opakuje stejné fráze
**Citace:**  
Např. odpovědi 1, 2, 4 a 6 opakují téměř stejné věty o „dohledatelné identitě“, „přesně jako bylina“ a „podle dostupných analýz“.

**Problém:**  
Citovatelnost FAQ je solidní, ale opakování snižuje informační hustotu.

**Návrh opravy:**  
U FAQ zkrátit duplicity a v každé odpovědi nechat jeden nový praktický detail:
- u `sameAs` doplnit, že odkazy mají být funkční a veřejně dostupné,
- u `jak dlouho` doplnit, že bez publikační kontinuity se efekt nemusí projevit.

---

### [WARNING] V FAQ i těle používáte „AI odpovědi/citace“ bez krátkého vymezení
**Citace:**  
- `šance na citace v AI odpovědích`
- `začne projevovat na citacích`
- `míra citací v Google AI Overviews`

**Problém:**  
Není úplně jasné, co přesně znamená „citace“: odkaz v AI Overviews, zmínka zdroje, cited card? U odborného tutorialu by bylo lepší pojem jednou vymezit.

**Návrh opravy:**  
Při prvním výskytu doplnit krátké vysvětlení, např.:  
`„citací“ v tomto článku myslíme zařazení stránky mezi zdroje, které AI odpověď odkazuje nebo z nich vychází.`

---

### [WARNING] Chybí interní odkaz na související pilíř `e-e-a-t-pro-ai`
**Citace:**  
V textu se E-E-A-T řeší, ale bez interního odkazu.

**Problém:**  
Podle kontextu článek doplňuje širší koncept `e-e-a-t-pro-ai`. Tohle je přesně relevantní interní link, který tady chybí. Nejde o obecnou radu; týká se tohoto konkrétního článku a jeho role v obsahovém stromu.

**Návrh opravy:**  
V sekci „Proč to funguje“ vložit odkaz na pilíř, např.  
`E‑E‑A‑T podrobněji vysvětlujeme v článku [E‑E‑A‑T pro AI](/e-e-a-t-pro-ai/).`

---

### [TIP] CTA je věcně správně, ale může být těsněji svázaná s tutorial intentem
**Citace:**  
`AI SEO Wireframe Pack za 1 490 Kč... obsahuje wireframe šablonu autorské stránky...`

**Problém:**  
CTA už míří správně primárně na Pack a sekundárně na Audit, což je dobře. Jen první věta zní lehce prodejněji než zbytek článku.

**Návrh opravy:**  
Změkčit první větu:  
`Pokud si chcete autorské stránky a strukturovaná data připravit interně, [AI SEO Wireframe Pack za 1 490 Kč](/pack/) obsahuje...`

---

### [TIP] Slug je v pořádku
**Citace:**  
`slug: "autorsky-profil-pro-ai"`

**Problém:**  
Žádný. Smysluplný, krátký, obsahuje hlavní KW.

**Návrh opravy:**  
Bez změny.

---

### [TIP] Answer pole je funkční a splňuje délku i definici
**Citace:**  
`Autorská entita je konkrétní osoba...`

**Problém:**  
V zásadě žádný. Je to jedna z lepších částí článku: začíná definicí, dává smysl samostatně a drží faktickou hustotu.

**Návrh opravy:**  
Jen drobně sjednotit slovník:
- `viditelné bylině` → `viditelně uvedeném autorovi` / `podpisu autora`

---

### [WARNING] „Tematická autorita“ je ponechaná bez vysvětlení
**Citace:**  
`Buduje tematickou autoritu...`
`Rostoucí publikační historií na dané téma (tematická autorita).`

**Problém:**  
Není to zakázaný termín, ale je to odborný žargon. U tutorialu pro širší publikum by měl být jednou dovysvětlen.

**Návrh opravy:**  
Při prvním použití přidat krátké vysvětlení:  
`tematickou autoritu, tedy opakovaně doloženou odbornost autora v jednom okruhu témat`

---

### [WARNING] „AI i Google ověřují“ zní jako přímé ověřování identity, což může být zavádějící
**Citace:**  
`AI i Google ověřují, kdo obsah napsal.`

**Problém:**  
To je silně zjednodušené. Systémy spíš pracují se signály identity, konzistence a zdrojů; nejde o formální ověření ve smyslu identity checku.

**Návrh opravy:**  
`AI systémy a Google se snaží lépe rozpoznat, kdo obsah napsal a zda je autor konzistentně dohledatelný napříč webem a profily.`

---

### [WARNING] „Lékař... mají výrazně vyšší důvěryhodnost“ je formulováno moc jistě
**Citace:**  
`Lékař s dohledatelnou registrací v ČLK, advokát s profilem v ČAK nebo finanční poradce registrovaný u ČNB mají u těchto témat výrazně vyšší důvěryhodnost...`

**Problém:**  
Princip sedí, ale „mají“ a „výrazně vyšší“ je příliš kategorické bez zdroje. Správnější je „mohou působit důvěryhodněji“ nebo „poskytují silnější ověřitelné signály“.

**Návrh opravy:**  
`...poskytují u těchto témat silnější ověřitelné signály důvěryhodnosti než autor bez dohledatelných dokladů.`

---

### [TIP] Transparentní dovětek na konci je dobrý
**Citace:**  
`Konkrétní čísla o dopadu autorské entity v tomto článku pocházejí z veřejných marketingových analýz 2026, ne z oficiální dokumentace vyhledávačů...`

**Problém:**  
Žádný. To je správně a pomáhá to korigovat overclaimy.

**Návrh opravy:**  
Bez změny; jen bych stejný hedge promítl i do problematických vět výše, ne až do dovětku.

---

## Krátké shrnutí oprav před publikací
Největší problémy jsou:
1. **SEO title**  
2. **anglicismus „bylina“**  
3. **příliš tvrdé formulace u sameAs, E-E-A-T a časového efektu**  
4. **sporné tvrzení o stock fotkách a spam pravidlech**  
5. **chybějící interní odkaz na pilíř E-E-A-T**  
6. **úvod těla nezačíná definicí**

Po těchto úpravách bude článek výrazně bezpečnější věcně i silnější pro citovatelnost.