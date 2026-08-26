## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po jazykové a strukturální stránce výrazně lepší: má dobrou krátkou odpověď, přirozený tón, relevantní interní odkazy i konkrétní CTA. Hlavní problém je ale věcný: celý článek stojí na „oznámení Googlu“, pro které není doložen primární zdroj, přesto text opakovaně mluví, jako by šlo o ověřené oficiální sdělení Googlu.

---

## Nálezy

### [BLOCKER] Nedoložený primární zdroj pro hlavní tvrzení článku

**Citace:**

> „Google v květnu 2026 oznámil pět úprav v tom, jak se odkazy v AI Overviews a v režimu AI zobrazují.“

**Problém:**  
Autor sám uvádí, že primární zdroj Googlu nedohledal. Přesto text opakovaně tvrdí „Google oznámil“. To je u hlavního pilíře článku příliš silné. Sekundární zdroje SEO Handbook a Nieman Lab mohou být použitelné, ale článek musí jasně rozlišovat mezi oficiálním zdrojem a převzatým zpravodajstvím.

**Návrh opravy:**  
Změnit formulaci v celém článku z „Google oznámil“ na opatrnější:

> „Podle přejímajících médií Google v květnu 2026 představil pět úprav…“

Nebo:

> „Sekundární zdroje z května 2026 popisují pět změn v zobrazování odkazů…“

Totéž upravit ve frontmatteru, FAQ, statistikách i shrnutí.

---

### [BLOCKER] Formulace „podle popisu Googlu“ není obhajitelná bez primárního zdroje

**Citace:**

> „podle popisu Googlu míří sekce na jiné úhly tématu; kritéria výběru Google nezveřejnil“

**Problém:**  
Pokud primární zdroj nebyl dohledán, nelze tvrdit „podle popisu Googlu“. To vytváří dojem ověření u původního zdroje, které ve skutečnosti neproběhlo.

**Návrh opravy:**  
Nahradit za:

> „Podle přejímajících médií má sekce ukazovat odkazy na jiné úhly tématu; konkrétní kritéria výběru nejsou veřejně popsaná.“

Upravit také ve `stats`, protože aktuální verze tam opakuje nedoložený claim.

---

### [BLOCKER] Frontmatter `answer` opakuje nedoložené „podle oznámení“

**Citace:**

> `answer: "Návrhy „kam dál“ jsou sekce na konci odpovědi v AI Overviews a v režimu AI, kde Google podle oznámení z května 2026 nabízí odkazy..."`

**Problém:**  
Krátká odpověď je jinak dobře napsaná: má 44 slov, začíná definicí a dává samostatný smysl. Věcně je ale postavená na nedoloženém „oznámení“.

**Návrh opravy:**  
Změnit na:

> `answer: "Návrhy „kam dál“ jsou sekce na konci odpovědi v AI Overviews a v režimu AI, kde mají podle sekundárních zdrojů z května 2026 vznikat odkazy na související články a rozbory jiných úhlů tématu. Míří tedy na dílčí podtéma, ne na obecný přehled jako hlavní citace."`

Pozor: po úpravě znovu zkontrolovat rozsah 40–60 slov.

---

### [WARNING] Příliš silné tvrzení, že jde o „jinou soutěž“

**Citace:**

> „Na rozdíl od hlavní citace se tam nesoutěží o obecný přehled, ale o konkrétní podtéma.“

**Problém:**  
Zní to kategoricky, jako by byl známý výběrový mechanismus Googlu. Ten ale článek sám přiznává jako nezveřejněný.

**Návrh opravy:**  

> „Na rozdíl od hlavní citace to podle popisu v přejímajících médiích může víc nahrávat konkrétním podtématům než obecným přehledům.“

Nebo stručněji:

> „Prakticky to může znamenat jiný typ soutěže: méně obecný přehled, více konkrétní podtéma.“

---

### [WARNING] Tabulka zjednodušuje rozdíl mezi hlavní citací a návrhem na konci

**Citace:**

> `left: "S velkými značkami a zavedenými weby", right: "S kýmkoli, kdo zpracoval právě tenhle úhel"`

**Problém:**  
To je příliš ostré rozdělení. I v návrzích na konci mohou rozhodovat autorita, relevance, důvěryhodnost a dostupnost obsahu. Menší weby tím automaticky nezískávají rovnou soutěž.

**Návrh opravy:**  

> `left: "Často se zavedenými zdroji k hlavnímu tématu", right: "S weby, které dobře pokryly konkrétní navazující úhel"`

Tím se zachová pointa, ale zmizí nepodložený kontrast.

---

### [WARNING] Tvrzení o menších webech je pořád marketingově silné

**Citace:**

> „Pro menší weby to může být schůdnější pole — váha značky tu nemusí rozhodovat tolik jako u hlavní citace, ale zaručené to není.“

**Problém:**  
Je dobře, že je claim změkčený. Stále ale naznačuje, že váha značky u této sekce hraje menší roli. To není doložené.

**Návrh opravy:**  

> „Pro menší weby to může být zajímavý typ obsahu k testování: konkrétní úhel se dá pokrýt lépe než obecné téma. Jakou roli má značka při výběru těchto odkazů, Google veřejně nepopisuje.“

---

### [WARNING] „Delší přehled nezvýší šanci“ je absolutní a nedoložené

**Citace:**

> „Delší „vše o tématu“ nezvýší šanci na návrh v závěru odpovědi.“

**Problém:**  
Nelze doložit, že delší přehled šanci nezvýší. Správná pointa je, že samotná délka nestačí a sekce může hledat odlišný úhel.

**Návrh opravy:**  

> „Delší „vše o tématu“ samo o sobě nemusí zvýšit šanci na návrh v závěru odpovědi. Pokud sekce opravdu míří na jiné úhly, důležitější je jasně vymezené podtéma.“

---

### [WARNING] „Skupina článků dává systému mapu úhlů“ je příliš mechanické

**Citace:**

> „Skupina článků, které na sebe odkazují, dává systému mapu úhlů, ze které může vybírat.“

**Problém:**  
To zní, jako by interní prolinkování přímo vytvářelo výběrovou mapu pro AI odpovědi. Bez znalosti mechanismu je to overclaim.

**Návrh opravy:**  

> „Skupina článků, které na sebe odkazují, pomáhá vyhledávači lépe pochopit vztahy mezi podtématy.“

To odpovídá bezpečnému claimu typu „pomáhá AI lépe pochopit obsah“.

---

### [WARNING] Měření „report funkcí s generativní AI“ je nejasné a nedoložené

**Citace:**

> „Search Console neukáže, ze které části odpovědi proklik přišel, a report funkcí s generativní AI dává podle naší zkušenosti jen zobrazení.“

**Problém:**  
Není jasné, o jaký konkrétní report jde. „Podle naší zkušenosti“ je přijatelné, ale u takto praktického tvrzení je potřeba přesnější vymezení, jinak čtenář neví, co má hledat.

**Návrh opravy:**  
Doplnit název nástroje/reportu, pokud existuje. Pokud ne, formulovat obecněji:

> „Dostupná data nerozlišují, zda proklik přišel z hlavní citace, nebo z návrhu pod odpovědí. V našich testech proto pracujeme hlavně se zobrazeními a ruční kontrolou konkrétních dotazů.“

Pokud jde o konkrétní funkci Search Console, uvést přesný název.

---

### [WARNING] FAQ odpověď na měření začíná negací a není ideální pro citovatelnost

**Citace:**

> „Přímo ne. Search Console neukazuje, ze které části odpovědi proklik přišel…“

**Problém:**  
FAQ má být sebestačné a vhodné pro AI citaci. Začátek „Přímo ne“ je méně vhodný než definující věta.

**Návrh opravy:**  

> „Měření návrhů na konci AI odpovědi je zatím nepřímé. Search Console nerozlišuje, zda proklik přišel z hlavní citace, nebo z návrhu pod odpovědí. Prakticky proto pomáhá opakovaný ruční test důležitých dotazů.“

---

### [WARNING] Zdrojová poznámka mluví o proklikovosti, ale článek žádná čísla o proklikovosti nerozebírá

**Citace:**

> „Údaje o dopadu na proklikovost pocházejí z přejímajících médií, ne z primární studie.“

**Problém:**  
V článku nejsou konkrétní údaje o dopadu na proklikovost. Poznámka proto působí buď jako zbytek po jiné verzi, nebo jako přiznání k datům, která v textu nejsou.

**Návrh opravy:**  
Buď odstranit větu, nebo ji zpřesnit:

> „Popis změn vychází ze sekundárních médií; primární zdroj Googlu se k datu aktualizace nepodařilo ověřit.“

---

### [WARNING] `stats` obsahují dlouhé a ne zcela vhodné texty

**Citace:**

```yaml
stats:
  - value: "5"
    label: "změn v zobrazování odkazů oznámil Google pro AI Overviews i režim AI v květnu 2026"
  - value: "1"
    label: "z nich míří na dílčí úhly tématu — návrhy na konci odpovědi"
  - value: "úhel"
    label: "podle popisu Googlu míří sekce na jiné úhly tématu; kritéria výběru Google nezveřejnil"
```

**Problém:**  
Stat boxy mají působit jako rychle ověřitelná fakta. Tady jsou dlouhé, částečně interpretační a znovu obsahují nedoložené „oznámil Google“ / „podle popisu Googlu“.

**Návrh opravy:**  

```yaml
stats:
  - value: "5"
    label: "změn v zobrazování odkazů popisují sekundární zdroje z května 2026"
  - value: "1"
    label: "změna se týká návrhů na související obsah pod odpovědí"
  - value: "ručně"
    label: "umístění v této sekci zatím nejde spolehlivě měřit samostatně"
```

---

### [WARNING] SEO titulek je v pořádku délkou, ale claim „nová šance“ je lehce nadsazený

**Citace:**

> `seoTitle: "Návrhy na konci AI odpovědi: nová šance pro menší weby"`

**Hodnocení:**  
Délka je dobrá, cca 54 znaků. Klíčové slovo je vpředu. Problém je spíš claim „nová šance pro menší weby“, protože opět stojí na nedoloženém předpokladu.

**Návrh opravy:**  

> `seoTitle: "Návrhy na konci AI odpovědi: co znamenají pro weby"`

Nebo pokud chcete zachovat menší weby:

> `seoTitle: "Návrhy na konci AI odpovědi: test pro menší weby"`

---

### [TIP] Meta description je dobrá, ale měla by zohlednit nejistotu zdroje

**Citace:**

> `description: "Google od května 2026 ukazuje na konci AI odpovědí odkazy na dílčí úhly tématu. Proč je to jiná soutěž než hlavní citace a co s tím udělat."`

**Hodnocení:**  
Délka je v limitu 70–160 znaků. Je srozumitelná. Jen znovu tvrdí věc přímo jako fakt od Googlu.

**Návrh opravy:**  

> `description: "Sekundární zdroje z května 2026 popisují odkazy na dílčí úhly tématu pod AI odpovědí. Co to může znamenat pro obsah webu."`

---

### [TIP] Prvních ~100 slov funguje dobře, po faktické úpravě bude citovatelné

**Citace:**

> „Návrhy „kam dál“ jsou sekce na konci odpovědi v AI Overviews a v režimu AI…“

**Hodnocení:**  
Dobře: začíná definicí, ne negací. Je srozumitelné i bez kontextu. Hustota faktů je slušná. Nutná je pouze úprava zdrojové jistoty: „podle oznámení“ → „podle sekundárních zdrojů“ / „podle přejímajících médií“.

---

### [TIP] FAQ otázky jsou reálné a užitečné

**Hodnocení:**  
FAQ pokrývá praktické otázky: co to je, rozdíl od citací, proč menší weby, jaký obsah, měření, Česko. To je dobré pro AEO/GEO. Doporučené opravy se týkají hlavně formulací u zdrojové jistoty a měření.

---

### [TIP] Interní odkazy jsou relevantní, jen závěrečný blok je trochu přehuštěný

**Citace:**

> „Souvislost s tím, jak se vůbec vybírají zdroje… Technické podmínky… Přehled kanálů… Čísla o dopadu…“

**Hodnocení:**  
Odkazy jsou tematicky relevantní a pomáhají prolinkování mezi stránkami. Závěr ale obsahuje čtyři odkazy za sebou v jednom bloku, což může působit jako interní rozcestník navíc po shrnutí.

**Návrh opravy:**  
Nechat maximálně 2–3 nejbližší odkazy přímo v závěru. Například ponechat:

- `/blog/co-rozhoduje-o-ai-citaci/`
- `/blog/jak-se-zobrazit-v-ai-mode/`
- `/blog/jak-se-dostat-do-ai-odpovedi/`

Odkaz na propady návštěvnosti je tematicky vzdálenější; pokud není nutný, přesunout jinam nebo odstranit.

---

### [TIP] CTA splňuje zadání

**Citace:**

> „AI SEO audit za 3 600 Kč… návod zdarma… AI SEO Wireframe Packu za 1 490 Kč“

**Hodnocení:**  
CTA je konkrétní a neomezuje se na „kontaktujte nás“. Obsahuje Audit 3 600 Kč, Free PDF i Pack 1 490 Kč. To je v souladu se zadáním.

**Drobný návrh:**  
Pokud má být preferovaný produkt Pack, zvažte pořadí:

> „Kdo chce začít sám, může použít návod zdarma a šablony v AI SEO Wireframe Packu za 1 490 Kč. Pokud chcete rychlejší prioritizaci, AI SEO audit za 3 600 Kč projde obsah i viditelnost v AI nástrojích.“

---

## Shrnutí nutných oprav

Před publikací upravit hlavně tyto body:

1. Všude změkčit „Google oznámil“ na „sekundární zdroje / přejímající média popisují“, pokud nebude dohledán primární zdroj.
2. Odstranit formulace „podle popisu Googlu“, které nejsou ověřené z primárního zdroje.
3. Změkčit absolutní tvrzení o tom, že návrhy jsou „jiná soutěž“ a že menší weby mají schůdnější pole.
4. Zpřesnit část o měření a název reportu.
5. Upravit `answer`, `description`, `stats` a FAQ tak, aby odpovídaly stejné úrovni jistoty jako zdroje.

Po těchto opravách je článek publikovatelný.