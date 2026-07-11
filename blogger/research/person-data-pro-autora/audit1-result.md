**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

- [BLOKER] **„slug: `person-schema-pro-autora`“** → V brand slovníku je zakázané „schema markup“, a i když je to ve slugu, zbytečně to míchá anglicismus do URL. Navrhuji změnit na **`person-strukturovana-data-pro-autora`** nebo kratší **`person-data-pro-autora`**.

- [BLOKER] **„Nechávat data v rozporu s bylinou na stránce.“** → „bylina“ je chybný překlad; v zadání sice stojí „byline→bylina“, ale v češtině to v článku působí vadně a nesrozumitelně. Navrhuji nahradit za **„podpisem autora / řádkem s autorem na stránce“**.

- [DOPORUČENÍ] **„Person data technicky deklarují důvěryhodnost autora, kterou AI i Google váží“** a **„Person je technická vrstva E-E-A-T“** → To je významově přestřelené. Strukturovaná data **neprokazují** důvěryhodnost sama o sobě; spíš pomáhají systémy autora a jeho signály lépe pochopit. Navrhuji změkčit na: **„Person data pomáhají AI i Googlu lépe pochopit, kdo je autorem a s jakými signály odbornosti ho spojit.“**

- [DOPORUČENÍ] **„Dvě vlastnosti rozhodují o tom, jestli data reálně pomůžou.“** → „rozhodují“ je zbytečně absolutní. Navrhuji: **„Dvě vlastnosti mívají v praxi největší význam…“**

- [DOPORUČENÍ] **„sameAs je to hlavní, co dělá z autora rozpoznatelnou entitu.“** → Příliš absolutní. `sameAs` je důležité, ale ne jediné. Navrhuji: **„sameAs patří k nejdůležitějším vlastnostem pro odlišení autora od jmenovců.“**

- [DOPORUČENÍ] **„Čím autoritativnější profily, tím líp AI a Google autora odliší od jmenovců.“** → Smysl sedí, ale formulace je moc přímočará a nedoložená. Navrhuji hedge: **„Obecně platí, že důvěryhodné a dobře udržované profily mohou odlišení autora usnadnit.“**

- [DOPORUČENÍ] **„Google a AI ho sloučí do jedné entity“ / „aby ho stroje sloučily do jedné entity“** → Věcně je to jako zjednodušení přijatelné, ale stále moc jisté. Navrhuji: **„zvýší šanci, že si systémy jednotlivé zmínky spojí s jedním autorem“** nebo **„pomůže konzistentnímu propojení autora napříč stránkami“**.

- [DOPORUČENÍ] **„V éře AI, kde váží důvěryhodnost autora (E-E-A-T), tato data technicky deklarují, kdo obsah píše a proč mu věřit.“** → Druhá část je overclaim; „proč mu věřit“ data sama neříkají. Navrhuji: **„…technicky popisují, kdo obsah píše, a doplňují signály, které mohou důvěryhodnost autora podpořit.“**

- [DOPORUČENÍ] **„~40 % vyšší citace v AI odpovědích… (studie GEO, orientačně)“** → Dobře, že je tam „orientačně“, ale chybí přesnější hedge i zdrojové ukotvení v textu článku. Navrhuji upravit label na: **„podle vybraných studií GEO orientačně vyšší citace…“** a v těle aspoň jednou výslovně uvést, že jde o **orientační zjištění z konkrétních studií, ne univerzální efekt**.

- [KOSMETIKA] **Titulek: „Person: strukturovaná data pro autora 2026“** → Splňuje limit i klíčové slovo je vepředu. **OK.**

- [KOSMETIKA] **Description: „Person strukturovaná data (JSON-LD) říkají AI a Googlu, kdo je autor…“** → Délka i relevance sedí. **OK.**

- [KOSMETIKA] **`answer` field**: „Person je typ strukturovaných dat, kterým strojově popíšete autora…“ → Začíná definicí, je samostatně pochopitelný a drží se tématu. **OK.**

- [KOSMETIKA] **První odstavec článku**: „Person je typ strukturovaných dat…“ → Splňuje požadavek na samostatnou definici. **OK.**

- [DOPORUČENÍ] **„AI modely i Google chápou svět přes entity a vztahy mezi nimi, ne jen přes klíčová slova.“** → Jako popularizační zkratka přijatelné, ale je to široké tvrzení. Navrhuji mírné zpřesnění: **„Vyhledávače i některé AI systémy při interpretaci obsahu pracují i s entitami a vztahy mezi nimi, ne jen s klíčovými slovy.“**

- [DOPORUČENÍ] **JSON-LD ukázka** → Technicky je **korektní jako zjednodušený příklad** pro `Person`. Sedí `@context`, `@type`, `@id`, `name`, `url`, `sameAs`, `knowsAbout`, `worksFor`. Pro tutorial ale chybí druhá půlka tvrzení ze zadání: **že `Article` odkazuje na autora přes `author/@id` a na vydavatele přes `publisher`**. Navrhuji doplnit **krátký druhý snippet `Article`**, např. s `author: {"@id": "..."}` a `publisher: {"@type":"Organization","name":"..."}`.

- [DOPORUČENÍ] **„V článku pak na autora jen odkážete přes ten samý `@id`…“** → Samo o sobě správně, ale bez ukázky zůstává nedotažené. Navrhuji doplnit konkrétní mini-příklad:
  **`"author": { "@id": "https://vasweb.cz/#autor-jan-novak" }`**  
  a ideálně i
  **`"publisher": { "@type": "Organization", "name": "Vaše firma s.r.o." }`**.

- [DOPORUČENÍ] **„sameAs … ideálně LinkedIn, Wikidata a osobní web.“** → Věcně použitelné, ale „osobní web“ bývá často totéž co `url`; u `sameAs` to nemusí být chyba, jen je dobré netvářit se, že je to vždy ideální. Navrhuji: **„například LinkedIn, Wikidata a další veřejné profily, které autora skutečně reprezentují“**.

- [KOSMETIKA] **Interní odkazy** na `/blog/e-e-a-t-pro-ai/`, `/blog/autorsky-profil-pro-ai/`, `/blog/linkedin-pro-ai-citace/`, `/blog/znacka-na-wikipedii-pro-ai/`, `/blog/test-viditelnosti-v-ai/` → Tematicky dávají smysl a podporují tutorial. **OK.**

- [DOPORUČENÍ] **„analýz k létu 2026“** v transparentní poznámce → Je to v souladu s `updated: 2026-07-11`, ale formulace je lehce vágní. Navrhuji přesněji: **„…vychází z veřejné dokumentace Schema.org a analýz dostupných k 11. 7. 2026“**.

- [KOSMETIKA] **CTA** s konkrétními produkty **Pack 1 490 Kč / Audit 9 990 Kč** → Splňuje zadání a není generické. **OK.**

- [DOPORUČENÍ] **„AI i Google“ opakovaně napříč textem** → Stylově už je to na hraně marketingové zkratky. Není to chyba, ale pro věcnější tón bych místy střídal s **„vyhledávače a AI systémy“** nebo **„Google a další systémy pracující s obsahem“**.

Shrnutí: základ článku je dobrý, technická logika `Person` / `sameAs` / `@id` sedí a příklad JSON-LD je jako ukázka použitelný. Před publikací ale opravte hlavně **přestřelené formulace o důvěryhodnosti a entitním „sloučení“**, **vadný výraz „bylina“** a **doplňte konkrétní `Article` snippet**, aby tutorial opravdu pokryl celé tvrzení z anotace.