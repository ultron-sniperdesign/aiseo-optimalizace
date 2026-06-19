**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k této verzi článku.

---

## Nálezy

### [BLOCKER] Nedoložené a pravděpodobně příliš konkrétní tvrzení o SeLLMa a infrastruktuře
**Citace:**  
- „**70 miliard parametrů** (70B).“  
- „**Investice Seznamu přes 100 milionů Kč**, mimo jiné nákup výkonných grafických čipů NVIDIA H100.“  
- „**Dočasně doplněno komerčními modely OpenAI** přes Microsoft Azure (EU regiony).“  
- „**Dlouhodobý cíl:** provozovat asistenta výhradně na interních modelech ve vlastních datových centrech.“

**Problém:**  
Tohle jsou velmi konkrétní technické a investiční údaje. Pokud nejsou v článku opřené o veřejně dohledatelné zdroje Seznamu nebo důvěryhodná média, jsou nedoložitelné. Nejproblematičtější je věta o dočasném využití modelů OpenAI přes Azure a dlouhodobém cíli provozu ve vlastních datových centrech — to už není obecný kontext, ale interně působící tvrzení.

**Návrh opravy:**  
- U všech těchto bodů buď doplňte konkrétní zdroj přímo do textu / poznámky, nebo zmírněte formulaci.  
- Např.: „Podle veřejných vyjádření Seznamu stojí Asistent na modelu SeLLMa; veřejně citované informace mluví o 70 miliardách parametrů a investici přes 100 milionů Kč.“  
- Věty o OpenAI/Azure a „dlouhodobém cíli“ ponechte jen tehdy, pokud máte veřejně doložený zdroj. Jinak odstranit.

---

### [BLOCKER] Přehnaně konkrétní a nedoložené tvrzení o využití SeLLMy v dalších produktech
**Citace:**  
„Podle dostupných informací Seznam používá SeLLMu mimo jiné **pro AI shrnutí ve vybraných částech výsledků vyhledávání, v Asistentovi, v popiscích na Sreality.cz a při generování inzerátů ve Skliku**.“

**Problém:**  
I s úvodem „Podle dostupných informací“ jde o seznam konkrétních produkčních použití. Bez zdroje je to slabé a rizikové. Zvlášť „popisky na Sreality.cz“ a „generování inzerátů ve Skliku“ působí jako interní produktová informace.

**Návrh opravy:**  
- Buď doložit zdrojem, nebo zúžit na bezpečnější minimum:  
  „Podle veřejných vyjádření Seznam využívá tento model v Seznam Asistentovi a testuje jeho nasazení i v dalších částech svého ekosystému.“  
- Pokud chcete zachovat konkrétní produkty, přidejte citaci zdroje.

---

### [BLOCKER] FAQ používá zjevně nepřesný pojem „tržní podíl“, ale odpovídá o podílu ve vyhledávání
**Citace:**  
„**Jaký má Seznam.cz tržní podíl v roce 2026?**“  
Odpověď: „... drží Seznam.cz zhruba 11 až 15 procent českého organického vyhledávání...“

**Problém:**  
„Tržní podíl“ není totéž co podíl na organickém vyhledávání. Otázka slibuje širší obchodní metriku, odpověď řeší search share. To je věcně i citovatelnostně špatně.

**Návrh opravy:**  
Přejmenujte otázku na:  
- „Jaký má Seznam.cz podíl na českém vyhledávání v roce 2026?“  
nebo  
- „Jaký podíl má Seznam.cz v českém organickém vyhledávání?“

---

### [WARNING] Title neplní doporučenou délku 50–60 znaků
**Citace:**  
`title: "Seznam.cz a AI vyhledávání v Česku 2026"`

**Problém:**  
Je funkční a KW je vpředu, ale podle zadání má mít 50–60 znaků. Tento titul je spíš kratší.

**Návrh opravy:**  
Zvažte rozšíření bez ztráty srozumitelnosti, např.:  
- „Seznam.cz a AI vyhledávání v Česku: role v roce 2026“  
- „Seznam.cz a AI vyhledávání v Česku 2026: co čekat“

---

### [WARNING] Meta description je na hraně a zbytečně přetěžuje více témat
**Citace:**  
`description: "Seznam.cz uvedl vlastního asistenta s modelem SeLLMa. Jakou roli hraje vedle Googlu a ChatGPT a kdy do něj investovat čas a peníze."`

**Problém:**  
Description je použitelná, ale druhá věta zní lehce marketingově a je obsahově široká. „Kdy do něj investovat čas a peníze“ není špatně, ale pro analytický článek by šla zvolit přesnější formulace.

**Návrh opravy:**  
Např.:  
„Seznam.cz uvedl vlastního asistenta Seznam Asistent. Článek shrnuje jeho roli vedle Googlu, podíl ve vyhledávání a situace, kdy má pro firmy smysl.“

---

### [WARNING] V úvodu i v answer je příliš sebejistý odhad podílu pro rok 2026 z dat 2024–2025
**Citace:**  
- `answer: "Drží zhruba 11 až 15 procent organického vyhledávání v Česku..."`  
- „Seznam.cz si v Česku v roce 2026 dál drží roli významného menšinového vyhledávače — **zhruba 11 až 15 procent organického trhu**...“

**Problém:**  
V článku později správně uvádíte, že jde o veřejná data 2024–2025 a že bez novějších dat nelze potvrdit stabilizaci. Ale answer i opening to zjednodušují tak, že to vypadá jako pevný údaj pro rok 2026.

**Návrh opravy:**  
Změkčit formulaci hned v answer i v prvních 100 slovech:  
- „Podle veřejných dat z let 2024–2025 se Seznam pohybuje zhruba mezi 11 a 15 procenty českého organického vyhledávání...“  
To je přesnější a lépe citovatelné.

---

### [WARNING] Zakázaný nebo nevhodný anglicismus zůstal v textu
**Citace:**  
- „CZ search PPC trhu“  
- „Google organic“  
- „Sklik a Seznam organic mívají...“

**Problém:**  
Po předchozí korektuře v článku stále zůstaly anglicismy a hybridní obraty. To je proti požadovanému slovníku a snižuje důvěryhodnost.

**Návrh opravy:**  
Nahradit:  
- „CZ search PPC trhu“ → „českého trhu placeného vyhledávání“  
- „Google organic“ → „organického vyhledávání v Googlu“  
- „Seznam organic“ → „organického vyhledávání na Seznamu“

---

### [WARNING] „Globální AI vyhledávače“ je terminologicky nepřesné
**Citace:**  
„... globální AI vyhledávače (**ChatGPT, Perplexity, Claude**) ...“

**Problém:**  
Claude není typický „AI vyhledávač“ ve stejném smyslu jako Perplexity nebo vyhledávací vrstva Googlu. Tohle je věcně zjednodušené.

**Návrh opravy:**  
Rozlišit kategorie:  
- „globální AI asistenti a vyhledávací nástroje (např. ChatGPT, Perplexity, Claude)“  
nebo  
- „globální AI ekosystém“

---

### [WARNING] Tvrzení o Google AI Overviews v češtině je třeba mít jisté, jinak zmírnit
**Citace:**  
„V roce 2026 jsou Google AI Overviews rozšířené ve více než 200 zemích a 40+ jazycích (**česky včetně**) ...“

**Problém:**  
Počet zemí a jazyků může být v čase pravdivý, ale „česky včetně“ je konkrétní dostupnost, kterou je potřeba mít veřejně potvrzenou k datu 2026-06-11. Pokud takový zdroj nemáte, je to rizikové.

**Návrh opravy:**  
- Pokud máte zdroj, ponechat.  
- Pokud ne, upravit na: „... ve více než 200 zemích a 40+ jazycích; český trh už proto není v AI vrstvě izolovaný jen na lokální hráče.“

---

### [WARNING] Srovnání kvality modelů je formulované příliš definitivně
**Citace:**  
- „Špičkové modely (Claude Opus 4.x, GPT-5.x, Gemini 2.x) **výrazně větší a obecně kvalitnější**“  
- „Pokud Asistent začne dávat **výrazně horší odpovědi než ChatGPT**...“

**Problém:**  
„Obecně kvalitnější“ a „výrazně horší odpovědi“ jsou široké hodnotící soudy. U AI modelů je to silně závislé na úloze. Bez benchmarku nebo zdroje to sklouzává k dojmu.

**Návrh opravy:**  
- „... v obecných mezinárodních benchmarcích a šíři použití obvykle silnější“  
- „Pokud budou uživatelé odpovědi vnímat jako slabší než u zavedených globálních nástrojů...“

---

### [WARNING] Některé FAQ odpovědi nejsou dost samostatné a přesné pro AI citaci
**Citace:**  
„Mám pro Seznam optimalizovat web stejně jako pro Google? — **Z velké části ano.** Strukturovaná data, kvalitní obsah...“

**Problém:**  
FAQ je už slušné, ale první věta by měla sama nést definici odpovědi. „Z velké části ano“ bez zopakování otázky je pro citaci méně samostatné.

**Návrh opravy:**  
Začít plnou větou:  
„Web pro Seznam se ve většině základních principů optimalizuje podobně jako pro Google: důležité jsou strukturovaná data, kvalitní obsah, sitemap a technické zdraví.“

---

### [WARNING] „Jaký je nejlepší Z“ je v příkladech dotazů zbytečně problematické
**Citace:**  
„... zkuste dotazy relevantní k vašemu oboru (například **nejlepší X v Praze, recenze Y, jaký je nejlepší Z**).“

**Problém:**  
Není to velká chyba, ale používáte zakázaně působící superlativní slovník a navíc generický placeholder působí kostrbatě.

**Návrh opravy:**  
Např.:  
„... například cena X v Praze, recenze Y, srovnání Z“  
nebo  
„... nejlepší kavárna Praha 7 / recenze produktu Y / jak vybrat Z“ pokud chcete konkrétnější příklady.

---

### [WARNING] Doporučení denního rozpočtu je příliš konkrétní bez kontextu
**Citace:**  
„Začněte malým rozpočtem (**500 až 2 000 Kč denně**) na 30 dní...“

**Problém:**  
To už je taktický návrh, který nemusí sedět pro malé firmy ani dražší segmenty. Bez vysvětlení, že jde jen o orientační testovací rozsah, to působí jako univerzální doporučení.

**Návrh opravy:**  
„Začněte testovacím rozpočtem odpovídajícím vašemu oboru a ceně za klik; u části menších českých kampaní to bývají stovky až nižší tisíce korun denně.“

---

### [WARNING] „Firmy.cz ... jeden z prvních kontaktů“ a „Heureka ... jeden z prvních zdrojů recenzí“ jsou vágní obchodní claimy
**Citace:**  
- „Firmy.cz v Česku stále **jeden z prvních kontaktů**.“  
- „Heureka v Česku **jeden z prvních zdrojů recenzí**.“

**Problém:**  
Tohle je měkký overclaim. Není zásadní, ale bez dat je lepší popsat funkci než pořadí.

**Návrh opravy:**  
- „Firmy.cz je pro řadu lokálních dotazů stále důležitý firemní katalog.“  
- „Heureka je v české e-commerce stále důležitý zdroj recenzí a srovnání.“

---

### [TIP] V compare tabulce je „Google Knowledge Graph“ zkratkovité bez vysvětlení
**Citace:**  
„Google AI Overviews navíc Google Knowledge Graph“

**Problém:**  
Působí technicky a bez kontextu. Není to zakázaný termín, ale pro srozumitelnost by to chtělo dovysvětlit.

**Návrh opravy:**  
„... navíc vlastní znalostní databázi Googlu“  
To je srozumitelnější.

---

### [TIP] H2/H3 struktura je dobrá
**Citace:**  
Sekce „Tržní pozice...“, „Seznam Asistent a SeLLMa...“, „Kdy má Seznam.cz pro firmu smysl“, „Kdy Seznam.cz není priorita“, „Jak optimalizovat...“, „Co je v roce 2026 nejisté“.

**Potvrzení:**  
Tady je oprava povedená. Struktura je logická, dobře skenovatelná a odpovídá typu analytického článku.

---

### [TIP] CTA je už výrazně lepší a splňuje zadání
**Citace:**  
„[AI SEO audit za 9 990 Kč](/audit/) ... [AI SEO Wireframe Pack za 1 490 Kč](/pack/) ...“

**Potvrzení:**  
CTA je konkrétní, vede na produkt a není generické „kontaktujte nás“. To je v pořádku.

---

### [TIP] Transparentní disclosure na konci je správně, ale formulace „řešíme rutinně“ je lehce sebepropagační
**Citace:**  
„... technické napojení e-shopu na CZ ekosystém **řešíme rutinně**.“

**Problém:**  
Není to zakázané, ale v analytickém článku to mírně vybočuje do self-promo.

**Návrh opravy:**  
„... s technickým napojením e-shopu na český ekosystém máme dlouhodobou praktickou zkušenost.“

---

## Shrnutí
Opravy po prvním auditu jsou **viditelné a ve více bodech správné**: brand voice je klidnější, zakázaných formulací je méně, answer začíná definicí, CTA je konkrétní.  
Před publikací ale ještě potřebujete dočistit hlavně:

1. **nedoložená produktová a technická tvrzení o SeLLMa / Azure / Skliku / Sreality**,  
2. **pár zbylých anglicismů**,  
3. **přesnost formulací v FAQ a úvodu**,  
4. **příliš definitivní soudy o kvalitě modelů**.

Po těchto opravách bude článek výrazně bezpečnější.