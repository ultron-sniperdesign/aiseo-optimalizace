**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku.

---

## 1) Věcná správnost

### [BLOCKER] Nedoložené a pravděpodobně smyšlené názvy AI agentů
> „…modely jako **ChatGPT Agent, Claude Browser, Perplexity Browse a Gemini Pro**…“

**Problém:** Tyto názvy jsou problematické nebo nedoložené jako stabilní oficiální produkty v uvedené podobě. „Gemini Pro“ je navíc spíš název modelové řady než agentického prohlížeče. U článku, který se tváří jako tutorial s oporou ve veřejné dokumentaci, je to zbytečně riskantní.

**Návrh opravy:**  
Nahradit obecnější formulací, např.:
- „…AI agenty a nástroje, které umí stránku číst a někdy i provádět akce v prohlížeči…“
- nebo „…podle dostupné dokumentace pro agentické procházení webu…“

Pokud chcete uvádět konkrétní značky, pouze ty, které doložíte oficiálním zdrojem a pod správným názvem.

---

### [BLOCKER] Přehnané tvrzení o tom, že agent „klikne na souřadnice“
> „Pro agenta je to ještě citlivější — **klikne na souřadnice, ale element je už jinde** = nesplněná akce.“

**Problém:** To je technicky zjednodušené až zavádějící. Ne všichni agenti pracují tímto způsobem a článek jinde sám zdůrazňuje význam accessibility tree. Tvrzení je příliš kategorické.

**Návrh opravy:**  
Změnit na bezpečnější formulaci:
- „Nestabilní layout může ztížit provedení akce, protože se cílové prvky během načítání mění nebo posouvají.“
- případně „může zvýšit riziko, že agent i uživatel vyhodnotí stránku hůř nebo akci nedokončí“.

---

### [WARNING] Tvrzení o „PageSpeed Insights ji zdědil do dvou týdnů a Chrome 150 DevTools následuje“ je nejasné a jazykově i věcně slabé
> „PageSpeed Insights ji zdědil do dvou týdnů a **Chrome 150 DevTools následuje**.“

**Problém:** Formulace „následuje“ nedává v češtině smysl a není jasné, zda už se to stalo, nebo teprve stane. K datu `updated: 2026-06-11` musí být časová osa ukotvená. Navíc z kontextu zadání plyne, že PSI už převzalo a Chrome 150 DevTools má následovat, ale text to říká nepřesně.

**Návrh opravy:**  
- „Lighthouse 13.3 vyšel 7. května 2026. Podle dostupné dokumentace se nová kategorie objevila v PageSpeed Insights během následujících dvou týdnů; integrace v Chrome 150 DevTools na to navazuje.“
- Ještě lepší: uvést opatrně „podle veřejné dokumentace z května 2026“.

---

### [WARNING] „Google zatím sbírá data“ je spekulace bez opory
> „Důvod: standardy pro web určený AI agentům se ještě vyvíjejí a **Google zatím sbírá data** místo toho, aby určoval definitivní pořadí.“

**Problém:** První část je v pořádku. Druhá část připisuje Googlu motivaci, kterou v článku nedokládáte.

**Návrh opravy:**  
- „Důvod podle dostupné dokumentace není popsaný jako klasické vážené skóre; audit zatím pracuje s podílem splněných kontrol.“
- nebo „Kategorie je nová a audit proto používá jednodušší vyhodnocení typu pass/fail.“

---

### [WARNING] „Každý check je actionable“ je zbytečný anglicismus a lehký overclaim
> „…**každý check je actionable** — řekne přesně, co chybí.“

**Problém:** Jednak brand voice, jednak to nemusí vždy „přesně“ říct vše potřebné pro opravu.

**Návrh opravy:**  
- „Každá kontrola ukazuje, co chybí a kde začít s opravou.“
- nebo „Výstup je praktický: u každé kontroly vidíte, co neprošlo.“

---

### [WARNING] llms.txt popsáno příliš definitivně
> „Lighthouse kontroluje jeho přítomnost a základní strukturu. **Pokud chybí, audit selže.**“
>
> „…stačí vytvořit **jeden statický markdown soubor** a nahrát ho do rootu webu.“

**Problém:** „selže“ je asi v pořádku pro konkrétní check, ale ne pro celý audit; a „markdown soubor“ je terminologicky sporné, pokud se jmenuje `.txt`. Formálně jde o textový soubor se strukturou, ne „markdown soubor“ jako jistota.

**Návrh opravy:**  
- „Lighthouse kontroluje přítomnost a základní strukturu souboru llms.txt. Pokud soubor chybí, neprojde příslušná kontrola.“
- „Ve většině případů stačí vytvořit statický textový soubor llms.txt v rootu webu.“

---

### [WARNING] Accessibility tree jako „primary data model pro AI agenty“ není v článku dotažené a místy se rozchází se zadáním
> „AI agenti se při čtení stránky spoléhají na **accessibility tree**…“

**Problém:** Zadání výslovně upozorňuje, že accessibility tree je primary data model pro AI agenty a Lighthouse kontroluje subset auditů. V článku to je jen naznačené. Zároveň část o „Tab order a focus management“ může být nad rámec toho, co tato nová kategorie skutečně kontroluje, pokud to není doložené.

**Návrh opravy:**  
- Doplnit větu: „Podle dostupné dokumentace je accessibility tree pro agentické čtení stránky klíčový datový model.“
- U „Tab order a focus management“ změkčit: „může souviset s použitelností, ale Lighthouse se zde soustředí hlavně na names and labels a ARIA.“

---

### [WARNING] „Lighthouse SEO kategorii kontroluje základní strukturovaná data“ je příliš obecné
> „**Lighthouse SEO kategorii kontroluje základní strukturovaná data**, ale ne hlubší optimalizaci pro AI.“

**Problém:** Formulace je nepřesná. Lighthouse má omezené SEO audity, ale tohle zní, jako by dělal relevantní audit strukturovaných dat jako takových. To může čtenáře zmást.

**Návrh opravy:**  
- „Lighthouse není plnohodnotný validátor strukturovaných dat a neřeší jejich hlubší návrh pro vyhledávání ani AI systémy.“
- Zároveň použít povolený termín „strukturovaná data“, ne „podle schématu“.

---

### [TIP] Doba běhu „30–60 s“ je silně kontextová
> `stats.value: "30–60 s"`  
> „Klikněte Analyze page load a počkejte 30 až 60 sekund“

**Problém:** Není to vyloženě chybně, ale je to velmi orientační a závislé na zařízení i stránce.

**Návrh opravy:**  
- „typicky desítky sekund“
- nebo „často 30 až 60 sekund, podle výkonu počítače a složitosti stránky“

---

## 2) Brand voice a slovník

### [BLOCKER] Opakované použití zakázaného termínu „strukturovaná data podle schématu“
> „**Strukturovaná data podle schématu**…“

**Problém:** Podle zadání se má používat pouze **„strukturovaná data“**.

**Návrh opravy:**  
- Všude nahradit za „strukturovaná data“.

---

### [WARNING] Nadbytečné anglicismy a nepočeštěné termíny
> „default config“, „device“, „mode“, „check“, „fail checky“, „actionable“, „live URL“, „debug“, „re-run“, „frontend protokol“, „pass ratio“

**Problém:** Článek je srozumitelný, ale na tento web je slovník zbytečně anglický. Zadání výslovně chce češtinu místo anglicismů.

**Návrh opravy:**  
Konkrétní náhrady:
- „default config“ → „výchozí nastavení“
- „device“ → „zařízení“
- „mode“ → „režim“
- „check“ → „kontrola“
- „fail checky“ → „neúspěšné kontroly“
- „live URL“ → „veřejná adresa“ nebo „nasazená stránka“
- „debug“ → „diagnostika“
- „re-run“ → „opakované spuštění auditu“
- „pass ratio“ → „podíl splněných kontrol“

---

### [WARNING] „AIO“ není v článku problém, ale „Google AI Overviews“ by mělo být plně rozepsané při první zmínce
> „…musíte měřit v ChatGPT, Perplexity, **Google AI Overviews**.“

**Problém:** Tady je to vlastně správně. Jen potvrzuji: rozepsání je v souladu se zadáním.

**Návrh opravy:**  
Bez nutné změny.

---

### [TIP] „AI-readiness“ v titulku a textu je pro CZ publikum hraniční
> `title: "Lighthouse pro AI-readiness: nová kategorie 2026"`

**Problém:** Není to zakázané, ale působí polovičatě česko-anglicky.

**Návrh opravy:**  
Zvážit českou variantu:
- „Lighthouse pro připravenost webu na AI: nová kategorie 2026“
- nebo lépe kvůli KW viz SEO nálezy níže.

---

## 3) Citovatelnost pro AI

### [WARNING] `answer` je věcně dobrý, ale je příliš dlouhý na zadaných 40–60 slov
> `answer: "Lighthouse 13.3 přidal v květnu 2026...`

**Problém:** Odpověď má zhruba 46–55 slov? Ve skutečnosti je na hraně až lehce přes podle tokenizace a navíc obsahuje dost detailů najednou. Formálně je ale spíš delší. Hlavní problém je, že první odstavec těla je ještě delší a méně kompaktní než by měl být.

**Návrh opravy:**  
Zkrátit na 40–60 slov a zachovat definici na začátku. Např.:
- „Lighthouse Agentic Browsing je nová kategorie v Lighthouse 13.3 z května 2026. Kontroluje čtyři oblasti důležité pro práci AI agentů se stránkou: llms.txt, WebMCP, accessibility tree a stabilitu rozvržení (CLS). Výstup není 0–100, ale podíl splněných kontrol.“

---

### [WARNING] Prvních ~100 slov těla není ideální jako samostatná „krátká odpověď“
> „V květnu 2026 přidal Google do Lighthouse novou kategorii — Agentic Browsing… Není to ranking faktor v běžném SEO…“

**Problém:** Začátek je slušný, ale druhá věta začíná vymezením negací a abstrakcí místo hustoty faktů. Zadání chce, aby prvních cca 100 slov fungovalo jako samostatná odpověď.

**Návrh opravy:**  
První odstavec přeformulovat do kompaktní definice:
- co to je,
- od kdy,
- co kontroluje,
- jaké má skórování,
- kde to spustit.

---

### [TIP] FAQ je kvalitní a většinou sebestačné
> FAQ sekce jako celek

**Hodnocení:** Dobrá práce. Otázky jsou reálné a odpovědi převážně dávají smysl i samostatně.

**Dílčí oprava:** Jen vyčistit názvy produktů/agentů a anglicismy podle ostatních nálezů.

---

## 4) SEO

### [WARNING] Title není ideálně postavený pro cílové KW a délku
> `title: "Lighthouse pro AI-readiness: nová kategorie 2026"`

**Problém:** Titulek nezačíná cílovým dotazem a „AI-readiness“ je jazykově slabší. Pro KW z briefu by bylo lepší dostat dopředu „Lighthouse Agentic Browsing“ nebo „Lighthouse AI check“. Současná délka je zhruba přijatelná, ale relevance pro dotaz je jen střední.

**Návrh opravy:**  
Např.:
- „Lighthouse Agentic Browsing: AI check v roce 2026“
- „Lighthouse AI check: Agentic Browsing krok za krokem“
- „Lighthouse Agentic Browsing: jak udělat AI check“

---

### [TIP] Meta description je v limitu a je použitelný
> `description: "Lighthouse 13.3 přidal v roce 2026..."`

**Hodnocení:** Délkově pravděpodobně v pořádku, informativní.

**Možná oprava:** Jen stylisticky zpřesnit:
- „Lighthouse 13.3 přidal v roce 2026 kategorii Agentic Browsing. Zjistěte, co kontroluje a jak web upravit pro lepší práci AI agentů.“

---

### [WARNING] Chybí interní odkaz na relevantní obsah o llms.txt, přesto ho článek slibuje
> „Pro detail je samostatný návod o llms.txt.“

**Problém:** V textu je explicitně řečeno, že detail existuje, ale není zde odkaz. To je konkrétní SEO i UX vada tohoto článku.

**Návrh opravy:**  
Doplnit interní odkaz na skutečný článek o llms.txt. Pokud ještě neexistuje, větu odstranit.

---

### [WARNING] CTA odkazuje na audit, přestože brief říká, že článek nemá konkurovat /audit/
> „[AI SEO audit za 9 990 Kč](/audit/) spustí Lighthouse…“

**Problém:** Sekundární CTA na audit je v pořádku, ale formulace je už dost servisní a může tutorial zbytečně posouvat směrem ke službě, které nemá konkurovat. Primární CTA na Pack je správně, ale mělo by být ještě jasněji dominantní.

**Návrh opravy:**  
- Nechat Pack jako první a výrazně konkrétnější.
- Audit zkrátit jako sekundární variantu pro složitější weby.
- Doplnit případně odkaz na relevantní pilířový obsah, ne jen komerční stránku.

---

## 5) Aktuálnost k roku 2026

### [WARNING] Některé formulace nejsou časově ukotvené dost přesně
> „V roce 2026 je standard stále experimentální…“
>
> „Stará rozšíření do Chrome už nejsou doporučovaná.“

**Problém:** U prvního je to ještě v pořádku. U druhého chybí opora a časový rámec „podle dokumentace k 2026“. V článku, který stojí na novince z května 2026, je lepší podobné soudy ukotvit.

**Návrh opravy:**  
- „Podle veřejné dokumentace k červnu 2026…“
- „K červnu 2026 je doporučená cesta DevTools, PageSpeed Insights nebo Lighthouse CLI.“

---

### [TIP] `updated: "2026-06-11"` sedí a článek se většinou drží roku 2026
**Hodnocení:** To je v pořádku.

---

## 6) CTA

### [WARNING] CTA je relevantní, ale produkt Pack by měl být ještě konkrétněji navázaný na obsah článku
> „AI SEO Wireframe Pack za 1 490 Kč obsahuje checklisty pro technický AI-readiness audit…“

**Problém:** Primární směr je správně, ale z textu není úplně jasné, co přesně čtenář dostane právě pro tento use case „Lighthouse Agentic Browsing“.

**Návrh opravy:**  
Upřesnit benefit na obsah článku:
- „…obsahuje checklist pro Lighthouse Agentic Browsing, vzor llms.txt, seznam kontrol pro accessibility tree a postup prioritizace oprav.“
- Audit nechat jako sekundární volbu jednou větou.

---

## 7) Další konkrétní jazykové a obsahové vady

### [WARNING] „Inspect“ bez českého vysvětlení
> „…zvolte Inspect (nebo F12).“

**Problém:** Pro část cílovky to bude srozumitelné, ale v českém tutorialu je lepší dodat český ekvivalent.

**Návrh opravy:**  
- „…zvolte Inspect / Prozkoumat, nebo stiskněte F12.“

---

### [WARNING] „PageSpeed Insights auditovat pouze veřejné URL“
> „PageSpeed Insights auditovat pouze veřejné URL.“

**Problém:** Gramatická chyba.

**Návrh opravy:**  
- „PageSpeed Insights umí auditovat pouze veřejné URL.“
- lépe česky: „PageSpeed Insights umí auditovat pouze veřejně dostupné adresy.“

---

### [WARNING] „history odběhů“
> „…Interaktivní report přímo v DevTools, **history odběhů**“

**Problém:** Jazykově špatně.

**Návrh opravy:**  
- „historie měření“
- nebo „historie předchozích spuštění“

---

### [WARNING] „pre-load fontů“
> „…Explicit width/height u obrázků, **pre-load fontů**.“

**Problém:** Zbytečný anglicismus a navíc ne zcela přesná forma.

**Návrh opravy:**  
- „přednačtení fontů“
- nebo konkrétněji „rezervace místa pro média a správné načítání fontů“

---

### [WARNING] „programmatic means / programmatic name“ zůstalo nepřeložené
> „…čte programatickým prostředkem…“
>
> „…musí mít čitelné **programmatic name**…“

**Problém:** Působí kostrbatě a nedokončeně přeloženě.

**Návrh opravy:**  
- „strojově“ místo „programatickým prostředkem“
- „programově rozpoznatelné pojmenování“ nebo prostě „čitelný název / popisek prvku“

---

### [TIP] Pozitivní: závěr nepřehání a správně neguje garance
> „100 % pass v této kategorii nezaručuje…“

**Hodnocení:** To je správně a v souladu s briefem. Zachovat.

---

## Shrnutí priorit oprav

1. **Odstranit nebo opravit nedoložené názvy agentů a spekulativní tvrzení.**  
2. **Vyčistit anglicismy a zakázané termíny, hlavně „strukturovaná data podle schématu“.**  
3. **Zpřesnit formulace kolem PSI / Chrome 150 / důvodů scoringu.**  
4. **Doplnit skutečný interní odkaz na llms.txt návod, nebo slib odstranit.**  
5. **Upravit title blíž k cílovému KW a posílit první odstavec jako samostatnou odpověď.**  
6. **Zkonkrétnit CTA na Pack 1 490 Kč pro tento konkrétní use case.**

Když tyto body opravíte, článek bude výrazně bezpečnější a silnější pro publikaci.