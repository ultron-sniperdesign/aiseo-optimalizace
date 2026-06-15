**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k této verzi článku. Opravy z 1. auditu jsou z velké části zapracované, ale pořád zůstává několik věcných nejistot, pár zakázaných/nevhodných termínů a několik míst, kde článek tvrdí víc, než je bezpečné.

---

## Nálezy

### 1) [BLOCKER] Neověřené a příliš konkrétní tvrzení o verzi, datu a „výchozím nastavení“
**Citace:**
- `description: "Lighthouse 13.3 přidal v roce 2026 kategorii Agentic Browsing."`
- `answer: "Lighthouse Agentic Browsing je nová kategorie v Lighthouse 13.3 z května 2026."`
- `stats.label: "verze Lighthouse z 7. května 2026 — Agentic Browsing ve výchozím nastavení"`
- `**Lighthouse Agentic Browsing je nová kategorie v Google Lighthouse, zařazená do výchozího nastavení od verze 13.3 z 7. května 2026.**`

**Problém:**
Tohle je stále velmi tvrdé tvrzení. V článku sice používáte formulaci „podle dostupné dokumentace“ u PSI/Chrome, ale ne u samotného klíčového claimu, že:
1. kategorie vznikla přesně v Lighthouse 13.3,
2. stalo se to 7. května 2026,
3. byla „ve výchozím nastavení“.

Pokud nemáte v článku jasně opřené o zdroj, je to pořád zbytečně definitivní. U nových funkcí bývá rozdíl mezi: release note, feature flag, experiment, rollout v UI a „defaultně dostupné“.

**Návrh opravy:**
Změkčit všechny hlavní claimy do bezpečné podoby, např.:
- „Podle veřejně dostupné dokumentace a sledování vydání se kategorie Agentic Browsing objevila v Lighthouse 13.3 v květnu 2026.“
- „V dostupných verzích rozhraní se od května 2026 začala objevovat jako samostatná kategorie.“
- Vyhnout se formulaci „ve výchozím nastavení“, pokud to nemáte 100% ověřené pro všechny cesty spuštění.

---

### 2) [BLOCKER] Zakázaný nebo nepočeštěný slovník v `answer`
**Citace:**
- `answer: "... s konkrétními pass/fail signály."`

**Problém:**
V zadání je výslovně požadováno nahradit anglicismy typu check, fail checky apod. Termín „pass/fail signály“ jde proti tomu. Navíc `answer` je klíčový AI citovatelný blok, takže by měl být terminologicky čistý.

**Návrh opravy:**
Nahradit například:
- „... ale podíl splněných kontrol s konkrétními signály úspěšná / neúspěšná kontrola.“
nebo lépe:
- „... ale podíl splněných kontrol a u každé z nich jasně ukáže, zda prošla nebo neprošla.“

---

### 3) [BLOCKER] Přetrvává termín „AI agenti“ bez vysvětlení v řadě míst
**Citace:**
- `description: "... pro lepší práci AI agentů."`
- `"... důležité pro práci AI agentů se stránkou"`
- `"... jak dobře je web připravený pro AI agenty"`
- `"... které AI agenti používají reálně"`
- `"... že o vás AI bude citovat"` / `"... AI agenty"`

**Problém:**
V kontextu brand voice je vhodné vysvětlovat, ne zavádět módní zkratku jako samozřejmost. V úvodu sice jednou vysvětlení je („nástroje, které umí stránku přečíst strojově...“), ale dál už článek často sklouzává k neukotvenému „AI agenti“. Není to blocker sám o sobě vždy, ale v tomto textu je to jeden z nosných termínů, takže by měl být terminologicky konzistentní a srozumitelný.

**Návrh opravy:**
Po prvním vysvětlení používat spíš:
- „nástroje, které umí stránku číst strojově a někdy na ní provádět akce“
- nebo „agentické nástroje“
- případně nechat „AI agenti“, ale méně často a vždy po předchozím ukotvení.

---

### 4) [WARNING] „Lepší práce AI agentů“ v meta description je lehce overclaim
**Citace:**
- `description: "Lighthouse 13.3 přidal v roce 2026 kategorii Agentic Browsing. Zjistěte, co kontroluje a jak web upravit pro lepší práci AI agentů."`

**Problém:**
„Jak web upravit pro lepší práci AI agentů“ je marketingově srozumitelné, ale pořád naznačuje přímý efekt. Bezpečnější je formulovat to jako „pro lepší strojové pochopení stránky“ nebo „pro vyšší šanci, že nástroje stránku správně přečtou“.

**Návrh opravy:**
Např.:
- „Zjistěte, co kontroluje a jak web upravit, aby nástroje stránku lépe přečetly strojově.“
- nebo „... jak web upravit pro lepší strojové pochopení obsahu.“

---

### 5) [WARNING] FAQ odpověď o llms.txt tvrdí víc, než je jisté
**Citace:**
- `a: "Lighthouse kontroluje jeho přítomnost a základní strukturu."`
- `"... ve většině případů stačí vytvořit statický textový soubor llms.txt v rootu webu."`

**Problém:**
„Základní strukturu“ je pořád neurčité tvrzení, které může být interpretováno jako standardizovaná validace. Pokud Lighthouse jen kontroluje přítomnost a několik jednoduchých podmínek, je to potřeba říct přesněji. Druhá část („ve většině případů stačí...“) je praktická, ale bez podmínky může být zavádějící.

**Návrh opravy:**
- „Lighthouse podle dostupného chování kontroluje přítomnost souboru a základní strojovou čitelnost, není to plnohodnotný validátor jeho kvality.“
- „U jednoduchého webu často stačí statický textový soubor v rootu; u větších webů je vhodné řešit i obsah a aktualizaci.“

---

### 6) [WARNING] WebMCP je popsáno příliš definitivně jako ustálený protokol
**Citace:**
- `WebMCP (Web Model Context Protocol) je frontendový protokol...`
- `WebMCP funguje v prohlížeči návštěvníka...`

**Problém:**
Když o pár vět dál sami píšete, že je standard „stále experimentální“, je první definice zbytečně kategorická. U experimentálních věcí je lepší psát „označení pro přístup / návrh / experimentální protokol“, pokud nejde o široce ustálený standard.

**Návrh opravy:**
- „WebMCP se v dostupné dokumentaci popisuje jako experimentální protokol / způsob, jak web nabídne agentovi konkrétní akce.“
- Omezit tón „je to hotová a ustálená věc“.

---

### 7) [WARNING] „AI agenti je používají reálně“ je neprokazatelné zobecnění
**Citace:**
- `Ignorovat neúspěšné kontroly s tím, že „není to ranking faktor“ — AI agenti je používají reálně.`

**Problém:**
Tohle je přesně typ věty, která zní jistěji, než dovolují důkazy. U llms.txt, WebMCP nebo konkrétní podmnožiny accessibility kontrol nelze bez odkazu tvrdit univerzálně, že je „AI agenti používají reálně“. To je příliš široké.

**Návrh opravy:**
- „... protože tyto signály mohou nástrojům pomoci stránku lépe přečíst nebo na ní spolehlivěji provést akci.“
- nebo „... protože souvisejí s tím, jak nástroje stránku čtou strojově.“

---

### 8) [WARNING] „Je velmi pravděpodobné, že má problém i s AI viditelností“ je příliš silná inference
**Citace:**
- `Lighthouse Agentic Browsing je vstupní brána — pokud zde web nesplňuje základní kontroly, je velmi pravděpodobné, že má problém i s šířeji pojatou AI viditelností.`

**Problém:**
To je pořád silný kauzální skok. Technické neúspěšné kontroly mohou signalizovat problém, ale „velmi pravděpodobné“ je přehnané, zvlášť když hned vedle správně říkáte, že váha kategorie v reálném chování AI agentů není dokumentovaná.

**Návrh opravy:**
- „... může to naznačovat slabší technickou připravenost pro širší AI viditelnost.“
- nebo „... je to signál, že stojí za to prověřit i širší AI viditelnost.“

---

### 9) [WARNING] Titulek je obsahově dobrý, ale mimo doporučenou délku
**Citace:**
- `title: "Lighthouse Agentic Browsing: AI check v roce 2026"`

**Problém:**
Podle zadání má být titulek 50–60 znaků s klíčovým slovem vepředu. Tento title má spíš kolem 49 znaků a hlavní cílové KW `lighthouse ai check` není úplně vepředu; vepředu je varianta `Lighthouse Agentic Browsing`.

To není kritické, ale pro audit podle zadání je to stále nesplněné přesně.

**Návrh opravy:**
Zvážit variantu s hlavním KW vepředu a délkou 50–60 znaků, např.:
- `Lighthouse AI check: Agentic Browsing v roce 2026`
Pokud nechcete měnit prioritu KW, alespoň dopočítat délku na 50+.

---

### 10) [WARNING] Meta description je na hraně relevance a mohla by lépe pokrýt hlavní KW
**Citace:**
- `description: "Lighthouse 13.3 přidal v roce 2026 kategorii Agentic Browsing. Zjistěte, co kontroluje a jak web upravit pro lepší práci AI agentů."`

**Problém:**
Délka je v pořádku, ale meta nepoužívá hlavní kombinaci `lighthouse ai check` ani `ai readiness audit`. Pokud je to cílové KW, description může být relevantnější.

**Návrh opravy:**
Např.:
- „Lighthouse AI check v roce 2026: co kontroluje Agentic Browsing, jak audit spustit a co opravit pro lepší strojové pochopení webu.“

---

### 11) [TIP] V `answer` i prvním odstavci je zbytečně anglické „pass/fail“ a „CLI“ bez drobného vysvětlení
**Citace:**
- `pass/fail signály`
- `... nebo přes Lighthouse CLI`

**Problém:**
U API/terminalových věcí to není chyba, ale text je jinak pečlivě počeštěný. Tady ještě zůstává pár míst, kde by šel tón uhladit.

**Návrh opravy:**
- „prošla / neprošla“
- „přes Lighthouse CLI (příkazová řádka)“ při prvním výskytu

---

### 12) [TIP] „Screen readery“ ve FAQ zůstaly v angličtině, přestože jinde jsou počeštěné
**Citace:**
- `"... stejnou strukturu, kterou používají screen readery pro nevidomé uživatele."`

**Problém:**
Jinde máte správně „čtečka obrazovky“. Tady je nekonzistence.

**Návrh opravy:**
- „... kterou používají čtečky obrazovky pro nevidomé uživatele.“

---

### 13) [TIP] Slovo „checky“ se ještě jednou vrací
**Citace:**
- `"... některé checky (WebMCP) v roce 2026 ještě nemají smysl pro většinu webů."`

**Problém:**
Je to přímo proti sjednocenému slovníku po opravách.

**Návrh opravy:**
- „... některé kontroly (například WebMCP)...“

---

### 14) [TIP] „Inspekt“/Inspect je vysvětlené dobře, ale `Analyze page load` zůstává bez českého rámce
**Citace:**
- `Klikněte Analyze page load...`

**Problém:**
Není to zásadní, ale když už počešťujete ostatní ovládací prvky, bylo by konzistentní dodat, že jde o název tlačítka v rozhraní.

**Návrh opravy:**
- „Klikněte na tlačítko Analyze page load...“

---

### 15) [TIP] Chybí interní odkaz na vlastní produkt/službu dřív než až v CTA
**Citace:**
- Interní odkaz v těle je jen na `/blog/llms-txt-navod/`
- Produktové odkazy až v závěru: `/pack/`, `/audit/`

**Problém:**
SEO osa v zadání chce interní odkazy na relevantní sekce / pilíř / produkty. Tady produktový odkaz existuje, ale jen v CTA na konci. U tutorialu by dávalo smysl jeden přirozený interní odkaz na audit nebo pack vložit už do sekce „pořadí oprav“ nebo „co audit neukáže“.

**Návrh opravy:**
Přidat 1 nenásilný interní odkaz v těle, např.:
- u „není to kompletní AI SEO audit“ odkázat na `/audit/`
- nebo u prioritizace oprav zmínit `/pack/`

---

### 16) [TIP] FAQ je funkční a citovatelnější než minule, ale 1.–2. odpověď by šly ještě víc zhutnit
**Citace:**
- `Co je Lighthouse Agentic Browsing audit?`
- `Jak se Agentic Browsing skóre liší od klasického Lighthouse?`

**Problém:**
Odpovědi už jsou použitelné, ale místy přidávají vatou navíc („vedle Performance, Accessibility...“), místo aby začaly co nejpřímočařeji definicí a rozdílem.

**Návrh opravy:**
Ne přepisovat celé, jen zkrátit první větu:
- „Lighthouse Agentic Browsing je nová kategorie auditu, která hodnotí technickou připravenost stránky pro strojové čtení a agentické akce.“
- druhou FAQ začít rovnou:
- „Agentic Browsing nepoužívá skóre 0–100, ale podíl splněných kontrol.“

---

## Co je naopak už v pořádku
- CTA je konečně konkrétní a směřuje na **Pack 1 490 Kč** i **Audit 9 990 Kč**.
- Zakázané „schema markup“ je opravené na **strukturovaná data**.
- Tvrdé a přehnané claimy typu „garance“ v článku nejsou.
- První odstavec je výrazně lepší pro AI citovatelnost než v předchozí verzi.
- Oprava formulace kolem CLS a posouvání prvků je věcně bezpečnější.
- Doplnění nejistoty kolem váhy kategorie v reálném chování nástrojů je správný směr.

---

## Shrnutí
Druhá verze je **výrazně lepší než původní**, ale ještě bych ji nepouštěl ven bez úprav. Hlavní problém už není tón, ale **příliš definitivní tvrzení u nového a rychle se měnícího tématu**. Nejvíc bych opravil:

1. tvrdé tvrzení o `Lighthouse 13.3 / 7. 5. 2026 / ve výchozím nastavení`,
2. zbytky anglicismů `pass/fail`, `checky`, `screen readery`,
3. věty typu „AI agenti je používají reálně“ a „je velmi pravděpodobné“.

Po těchto úpravách bude článek publikovatelný.