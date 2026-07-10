**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k této verzi. Opravy z 1. auditu jsou z velké části zapracované správně, ale stále zůstává několik věcných, slovníkových a SEO problémů.

---

## Nálezy

### [BLOCKER] Zakázaný / nedoporučený termín „nedeterminovanost“
> `Kvůli nedeterminovanosti dotazy opakujte třikrát až pětkrát.`  
> `label: "kolikrát opakovat každý dotaz kvůli nedeterminovanosti AI odpovědí"`  
> `AI odpovědi jsou nedeterministické`  
> `Opakujte třikrát až pětkrát kvůli nedeterminovanosti`

**Problém:** V kontextu zadání už mělo být vysvětleno lidsky jako „AI odpovědi nejsou pokaždé stejné“. V článku sice jednou vysvětlení je, ale termín se dál opakuje ve frontmatteru, FAQ i shrnutí. To zhoršuje srozumitelnost a brand voice.

**Návrh opravy:**  
Všude nahradit formulacemi typu:
- „protože AI odpovědi nejsou pokaždé stejné“
- „protože se odpovědi i citované zdroje mohou lišit“
- „kvůli proměnlivosti odpovědí“

Např. `answer` upravit na:
- „… a každý dotaz opakujete třikrát až pětkrát, protože AI odpovědi nejsou pokaždé stejné.“

---

### [BLOCKER] Zůstal zakázaný anglicismus „off-page“
> `Neviditelnost řešte obsahem, kontrolou robots.txt a off-page zmínkami.`  
> `Analyzujte, čím je konkurent silnější — obsah, recenze, autorita, off-page zmínky`

**Problém:** V zadání bylo výslovně uvedeno nahrazovat „off-page“ formulací „zmínky a odkazy z jiných webů“. Tady zůstal dvakrát.

**Návrh opravy:**  
Nahradit:
- „off-page zmínkami“ → „zmínkami a odkazy z jiných webů“
- „obsah, recenze, autorita, off-page zmínky“ → „obsah, recenze, důvěryhodnost a zmínky či odkazy z jiných webů“

---

### [WARNING] Frontmatter `answer` je příliš dlouhá a méně úderná pro AI citaci
> `answer: "AI viditelnost otestujete tak, že sestavíte 15 až 20 dotazů... Kvůli nedeterminovanosti dotazy opakujte třikrát až pětkrát."`

**Problém:** Odpověď sice začíná definicí implicitně postupem, ale pro „krátkou odpověď“ není ideální. Je delší, nabobtnalá a obsahuje termín „nedeterminovanost“. Měla by být 40–60 slov a sama o sobě perfektně citovatelná.

**Návrh opravy:**  
Zkrátit a začít definicí:
- „Test AI viditelnosti je ruční kontrola, zda a kde se vaše značka objevuje v odpovědích AI nástrojů. Stačí 15 až 20 reálných dotazů zákazníků spustit v ChatGPT, Perplexity a Google AI Overviews, u každého zapsat zmínku, pozici, konkurenci a zdroje a test několikrát zopakovat.“

---

### [WARNING] Titulek pravděpodobně neodpovídá deklarované délce a je na hraně SEO formátu
> `title: "Jak zjistit AI viditelnost: test za hodinu 2026"`

**Problém:** V kontextu je uvedeno „47 znaků“, ale reálně je titulek delší. Nejde o kritický problém sám o sobě, ale je vidět nesoulad mezi tvrzením a skutečností. Navíc cílové KW je spíš „jak zjistit ai viditelnost“ / „test ai viditelnost“, takže titulku by prospělo ještě čistší začlenění.

**Návrh opravy:**  
Buď ponechat, ale opravit interní poznámku mimo článek, nebo zvážit SEO čistší variantu:
- „Jak zjistit AI viditelnost za hodinu [2026]“
- „Test AI viditelnosti: jak ji zjistit za hodinu“

Pokud zůstane stávající, není to fatální, ale deklarace délky je chybná.

---

### [WARNING] Meta description je jazykově slabší a obsahuje nepřirozené spojení
> `Zjistěte, jak otestovat AI viditelnost a kontrolu AI citací v ChatGPT, Perplexity a Google AI Overviews. Praktický postup za hodinu, zvládnete sami.`

**Problém:** „otestovat AI viditelnost a kontrolu AI citací“ je stylisticky neobratné. Působí jako slepená klíčová slova, ne přirozený jazyk.

**Návrh opravy:**  
Upravit na plynulejší popis:
- „Zjistěte, jak za hodinu ověřit AI viditelnost a zjistit, jestli vás cituje ChatGPT, Perplexity nebo Google AI Overviews. Praktický postup krok za krokem.“

---

### [WARNING] Nejednotná metodika „pozice“ mezi frontmatterem a tělem
> `answer: "...na jaké pozici..."`  
> `zaznamenáte, jestli se objevíte, kde a kdo je místo vás`  
> `kde v odpovědi jste (nahoře, uprostřed, dole)`  
> `1. místo / 2. až 3. místo / 4. a další / nezmíněno`

**Problém:** V zadání mělo být sjednoceno na „1. místo / 2.-3. / 4.+ / nezmíněno“. V článku ale ještě přežívá starší logika „nahoře, uprostřed, dole“ ve `howto` frontmatteru. To je metodický rozpor.

**Návrh opravy:**  
V `howto.steps` změnit:
- `kde v odpovědi jste (nahoře, uprostřed, dole)`  
na
- `kde se objeví první zmínka (1. místo / 2.–3. místo / 4. a další / nezmíněno)`

---

### [WARNING] Přetrvává příliš silné tvrzení o časové náročnosti
> `Zvládnete to za hodinu a bez placeného nástroje.`  
> `Ruční test zvládnete zhruba za hodinu.`  
> `Praktický postup za hodinu, zvládnete sami.`

**Problém:** „Za hodinu“ je použitelné jako orientační claim, ale při 15–20 dotazech × 3 platformy × 3–5 opakování jde reálně o 135 až 300 spuštění. To může být za hodinu zvládnutelné jen u velmi zjednodušeného postupu nebo malé sady dotazů. Tvrzení je na hraně přehánění.

**Návrh opravy:**  
Změkčit:
- „základní test zvládnete přibližně za hodinu“
- „první orientační test může zabrat asi hodinu; důkladnější kontrola déle“
- případně dodat podmínku: „u menší sady dotazů a tří hlavních platforem“

---

### [WARNING] Nepřesnost u formulace „ChatGPT a Gemini personalizují“
> `ChatGPT a Gemini personalizují podle historie.`

**Problém:** V kontextu bylo opraveno na opatrnější formulaci, ale v sekci chyb se vrátila stará verze. Je příliš kategorická.

**Návrh opravy:**  
Nahradit:
- „Přihlášený účet může výsledky ovlivnit historií, pamětí nebo dalšími personalizačními signály.“
- nebo stručně: „Přihlášený účet může odpovědi ovlivnit.“

---

### [WARNING] Věcně příliš jisté tvrzení o bezplatných checkerech „napříč platformami“
> `Ahrefs AI Visibility Checker, Semrush AI Search Visibility Checker, Search-visibility.ai — rychlá jednorázová kontrola napříč platformami.`  
> `Existují i bezplatné nástroje bez registrace ... které rychle projdou víc platforem najednou.`

**Problém:** To je přesně typ tvrzení, které je potřeba držet opatrně. Rozsah platforem, hloubka kontroly i limity těchto nástrojů se liší a mění. „Napříč platformami“ a „projdou víc platforem najednou“ může být u některých nepřesné.

**Návrh opravy:**  
Změkčit:
- „umožňují rychlou orientační kontrolu“
- „podporované platformy a rozsah výstupů se liší“
- „některé umí porovnat více AI prostředí nebo typů odpovědí“

Např.:
- „… rychlá orientační kontrola; podporované platformy a rozsah výstupů se liší.“

---

### [WARNING] „Google AI Overviews ... uvádí odkazy v běžném vyhledávání“ je zjednodušené
> `Uvádí odkazy v běžném vyhledávání`

**Problém:** Není to vyloženě špatně, ale je to zjednodušené až hrubé. AI Overviews se nezobrazují u všech dotazů a podoba odkazu / zdrojů se liší podle typu výsledku a rozhraní.

**Návrh opravy:**  
Upřesnit:
- „mohou zobrazit odkazy a zdroje přímo ve výsledcích vyhledávání“
- případně „u části dotazů“

---

### [TIP] První odstavec těla je dobrý, ale šel by ještě víc „citovatelně“
> `Test AI viditelnosti je ruční kontrola toho, zda a kde se vaše značka objevuje...`

**Pozitivní:** Oprava úvodu je správná. Začíná definicí a dává smysl samostatně.

**Návrh jemné úpravy:**  
Můžete jen zkrátit poslední dvě věty, aby prvních ~100 slov bylo ještě hutnější:
- méně „Tento návod ukazuje…“
- více konkrétní metodiky

Není nutné, ale pomohlo by to.

---

### [TIP] FAQ je použitelná, ale dvě odpovědi jsou zbytečně podobné hlavnímu textu
> FAQ 1 a 2 prakticky kopírují formulace z článku

**Problém:** Nejde o chybu, spíš o nevyužitý potenciál. FAQ pro AI je lepší, když každá odpověď přidá jiný úhel nebo rozhodovací kritérium.

**Návrh opravy:**  
Např. u otázky „Proč mám každý dotaz opakovat víckrát?“ doplnit praktické minimum:
- „Pokud máte málo času, opakujte alespoň tři nejdůležitější kategoriové dotazy.“
To zvýší užitečnost bez přepisování článku.

---

### [TIP] CTA je už výrazně lepší a splňuje zadání
> `AI SEO Wireframe Pack za 1 490 Kč`  
> `AI SEO audit za 9 990 Kč`

**Pozitivní:** CTA už není generické, míří na konkrétní produkty a navazuje na obsah článku. To je v pořádku.

**Jediná drobnost k úvaze:**  
Větě
> `další kroky (obsah, strukturovaná data, zmínky mimo web) posoudíme v AI SEO auditu`
by pro neutrálnější tón pomohlo:
- „můžeme posoudit v AI SEO auditu“

Není nutné, jen lehké změkčení brand voice.

---

### [TIP] Slug je v pořádku, ale neodpovídá přesně hlavnímu KW
> `slug: "test-viditelnosti-v-ai"`

**Pozitivní:** Slug je srozumitelný a smysluplný.

**Poznámka:** Pokud řešíte čistě SEO shodu s cílovým KW, o něco bližší by bylo něco jako:
- `jak-zjistit-ai-viditelnost`
- `test-ai-viditelnosti`

Není to blocker. Současný slug je publikovatelný.

---

## Shrnutí k opravenosti po 1. auditu

**Co je už vyřešeno dobře:**
- úvod konečně začíná definicí,
- zjemnily se největší overclaimy,
- Google AI Overviews je pojmenované správně,
- přibyla časová kotva k červnu 2026,
- CTA už míří na konkrétní nabídky,
- interní odkaz na `/audit/` je doplněný,
- zakázané „prompty“ byly nahrazené „dotazy“.

**Co ještě brání publikaci bez další úpravy:**
1. zůstal zakázaný termín **off-page**,
2. zůstal odborný a opakovaný termín **nedeterminovanost / nedeterministické**,
3. metodika pozice není všude sjednocená,
4. pár tvrzení je stále moc jistých nebo zjednodušených,
5. „za hodinu“ je potřeba formulovat opatrněji.

Pokud chceš, můžu v dalším kroku udělat **jen stručný patch list po řádcích/frontmatter polích**, co přesně kde změnit, bez přepisování celého článku.