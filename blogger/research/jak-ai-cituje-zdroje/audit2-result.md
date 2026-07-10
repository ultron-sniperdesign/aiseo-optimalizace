**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou jen konkrétní nálezy k tomuto článku. Oproti 1. auditu je text výrazně lepší, ale ještě v něm zůstává několik věcných a citačních problémů a pár míst, kde sklouzává k příliš jistým formulacím.

---

## Nálezy

### [BLOCKER] FAQ 1 stále nezačíná definicí, ale negací
**Citace:**
> **Citují všechny AI platformy zdroje stejně?**  
> „AI platformy zdroje necitují stejným způsobem, protože…“

**Problém:**  
V zadání je výslovně požadavek, aby krátká odpověď začínala definicí, ne negací. Tohle je sice obsahově správně, ale formálně stále začíná zápornou konstrukcí.

**Návrh opravy:**  
Začít přímo kladným vymezením, např.:
> „AI platformy zdroje citují rozdílně, protože každá upřednostňuje jiné signály…“

---

### [BLOCKER] „Perplexity: čerstvost je král“ je zbytečně absolutní a neodpovídá opatrnému tónu zbytku textu
**Citace:**
> `## Perplexity: čerstvost je král`

**Problém:**  
Nadpis je marketingově zkratkovitý a absolutizuje jeden faktor. V těle článku přitom správně píšete opatrněji, že čerstvost je „nejsilnější signál“ nebo že na ni klade „větší důraz“. Nadpis je silnější než podklad.

**Návrh opravy:**  
Změnit na věcnější variantu, např.:
> `## Perplexity: silný důraz na čerstvost`  
nebo  
> `## Perplexity: čerstvost patří k hlavním signálům`

---

### [BLOCKER] Tvrzení o „trojnásobné šanci na citaci za posledních 30 dní“ je stále příliš konkrétní bez dostatečné opory v textu
**Citace:**
> „Podle dostupných analýz 2026 má obsah aktualizovaný za posledních 30 dní **zhruba trojnásobnou šanci na citaci**.“

a ve stats:
> `~3× vyšší šance na citaci u Perplexity, pokud je obsah aktualizovaný za posledních 30 dní`

**Problém:**  
Hedge „zhruba“ a „orientačně“ pomáhá, ale pořád jde o velmi konkrétní a snadno napadnutelný údaj. Protože článek neuvádí zdroj, metodiku ani kontext vzorku, čtenář dostává číslo s přesností, která v textu není obhájená. U takto konkrétní metriky je to pořád na hraně overclaimu.

**Návrh opravy:**  
Buď:
- přidat konkrétní zdroj a metodické omezení přímo do textu, nebo
- číslo zjemnit na kvalitativní závěr:
> „Podle veřejných analýz 2026 patří čerstvost u Perplexity k nejsilnějším signálům a nově aktualizovaný obsah bývá citovaný častěji.“

Pokud chcete ponechat číslo, připište ke stejné větě jasné omezení:
> „…v jedné z veřejných marketingových analýz nad vlastním vzorkem.“

---

### [WARNING] „Čerstvá stránka běžně poráží starší stránku“ je příliš jisté tvrzení
**Citace:**
> „Čerstvá stránka běžně poráží starší stránku na stejné téma v přímém srovnání.“

**Problém:**  
„běžně poráží“ zní jako obecné pravidlo. U srovnání tohoto typu záleží na dotazu, autoritě, typu tématu i kvalitě textu. Bez zdroje a podmínek je to příliš kategorické.

**Návrh opravy:**  
> „Ve veřejných analýzách se u Perplexity opakovaně ukazuje, že čerstvá stránka může mít proti starší výhodu i na stejném tématu.“

---

### [WARNING] „Pomáhá i viditelný rok v titulku“ může podporovat mechanické SEO doporučení bez dostatečné opory
**Citace:**
> „Pomáhá i **viditelný rok v titulku** (například ‚2026‘).“

**Problém:**  
Tvrzení je plausibilní u témat citlivých na aktuálnost, ale takto podané zní obecně. Hrozí, že z toho čtenář vyvodí univerzální mechaniku „přidej rok a budeš citovaný“.

**Návrh opravy:**  
> „U témat citlivých na aktuálnost může pomoci i viditelný rok v titulku (například ‚2026‘), pokud odpovídá skutečně aktualizovanému obsahu.“

---

### [WARNING] U Google AIO je kombinace Ahrefs/BrightEdge stále riziková bez přesnějšího vysvětlení, co přesně procenta měří
**Citace:**
> „…pokles zhruba ze **76 % v roce 2025** na přibližně **38 % (Ahrefs)** nebo **17 % (BrightEdge)** v roce 2026; čísla se liší metodikou, směr je ale stejný.“

**Problém:**  
Lepší než dřív, ale stále hrozí matení: není jasné, zda obě studie měří stejnou věc stejným způsobem. Čtenář může nabýt dojmu, že jde o přímé srovnání jedné metriky v čase, i když to zřejmě budou různé datasety a definice „shody s top 10“.

**Návrh opravy:**  
Přesněji oddělit směr od čísel:
> „Ve veřejných studiích z roku 2026 se uvádí nižší podíl překryvu s top 10 organických výsledků než dříve, ale konkrétní čísla se výrazně liší podle metodiky a vzorku (např. Ahrefs a BrightEdge uvádějí odlišné hodnoty). Směr je tedy orientační, ne přímo srovnatelná časová řada.“

---

### [WARNING] „Roste vliv strukturovaných dat a E-E-A-T“ je podané příliš přímočaře jako kauzální vztah
**Citace:**
> „Roste vliv **strukturovaných dat, E-E-A-T**…“

**Problém:**  
U Google není snadné takto přímo dokázat samostatný „vliv“ těchto signálů na citaci v AI Overviews. Zvlášť u E-E-A-T nejde o formální metriku, ale o hodnoticí rámec. Formulace by měla být opatrnější.

**Návrh opravy:**  
> „Ve veřejných rozborech se častěji objevují weby se silnými signály důvěryhodnosti, jasnou strukturou a dobře popsanými entitami; pomoci mohou i strukturovaná data.“

Případně minimálně:
> „roste význam signálů důvěryhodnosti a jasně strojově čitelného obsahu“

---

### [WARNING] „Pomáhají strukturovaná data, úplnost obsahu a signály důvěryhodnosti“ je stále lehce kauzální
**Citace:**
> „Pomáhají strukturovaná data, úplnost obsahu a signály důvěryhodnosti.“

**Problém:**  
Stejný problém jako výše. U „pomáhají“ je to ještě přijatelné, ale „úplnost obsahu“ navíc znovu zavádí termín, který je vágní, i když dříve opravený v delší formulaci.

**Návrh opravy:**  
> „Vyšší šanci mívá obsah s jasnou strukturou, strukturovanými daty a důvěryhodnostními signály.“

Nebo:
> „Pomoci může obsah, který pokrývá téma souvisle, má jasnou strukturu a dobře popsaného autora či značku.“

---

### [WARNING] „Perplexity uvádí zdroje obvykle s číslovanými odkazy jako výchozí chování“ je pořád příliš sebejisté
**Citace:**
> „Zdroje uvádí obvykle s číslovanými odkazy **jako výchozí chování**…“

**Problém:**  
„výchozí chování“ zní jako jistota o produktu, ne jako pozorování z veřejných analýz. Přitom režimy a UI se mohou měnit.

**Návrh opravy:**  
> „Ve většině veřejně dostupných rozhraní a testů uvádí zdroje obvykle s číslovanými odkazy…“

---

### [WARNING] Claude a Gemini jsou v tabulce i strategii příliš obecné a bez opory vůči zbytku článku
**Citace:**
> `Claude — Autorita a vyváženost`  
> `Gemini — Ekosystém Googlu`

a dále:
> „Pro Claude vyvážený, poctivý a kvalitní obsah. Pro Gemini pomáhá napojení na ekosystém Googlu a znalostní vazby mezi entitami.“

**Problém:**  
Článek je primárně o ChatGPT, Perplexity a Google AI Overviews i podle description. Claude a Gemini jsou zde zmíněné velmi stručně a spekulativně. U Gemini je „napojení na ekosystém Googlu“ navíc vágní a může znít jako nepodložená domněnka.

**Návrh opravy:**  
Buď:
- Claude a Gemini z tabulky vyhodit a držet se tří hlavních platforem, nebo
- explicitně označit, že jde jen o orientační doplnění s menší evidencí:
> „U Claude a Gemini je veřejných srovnávacích dat méně, proto berte následující charakteristiku jen orientačně.“

U Gemini zjemnit:
> „U Gemini se pravděpodobně projevují signály z širšího ekosystému Googlu a práce s entitami, ale veřejná data jsou omezená.“

---

### [TIP] H1/title je obsahově v pořádku, ale délka 47 znaků je spíš pod doporučením než ideální
**Citace:**
> `title: "Jak AI cituje zdroje: srovnání platforem 2026"`

**Problém:**  
Není to chyba. Jen připomínám, že podle zadané osy jste chtěli 50–60 znaků s klíčovým slovem vepředu. Klíčové slovo vepředu je splněné, délka je lehce pod doporučením.

**Návrh opravy:**  
Pokud chcete doladit:
> „Jak AI cituje zdroje: srovnání AI platforem 2026“

Ale není to nutné, pokud vám současný title vyhovuje.

---

### [TIP] Meta description je funkční, ale mohla by lépe pokrýt druhé klíčové slovo „jak AI vybírá zdroje“
**Citace:**
> `description: "Jak AI vybírá a cituje zdroje? Srovnání ChatGPT, Perplexity a Google AI Overviews a dopad na obsah, který chce být citovaný."`

**Problém:**  
Není to chyba. Description splňuje délku i smysl. Jen druhá část „obsah, který chce být citovaný“ zní lehce neohrabaně.

**Návrh opravy:**  
Např.:
> „Jak AI vybírá a cituje zdroje? Srovnání ChatGPT, Perplexity a Google AI Overviews a dopad na obsah, který chce získat AI citace.“

---

### [TIP] Chybí interní odkaz z CTA / těla na „test AI viditelnosti“, který text opakovaně zmiňuje
**Citace:**
> „Postup podrobně rozebíráme v článku o testu AI viditelnosti.“

a ve Stepperu:
> „Praktický postup rozebíráme v článku o testu AI viditelnosti.“

**Problém:**  
Text odkaz slibuje, ale v markdownu není vidět konkrétní link jako u ostatních článků. Pokud odkaz ve výsledném renderu nevzniká automaticky, je to slabina interního prolinkování.

**Návrh opravy:**  
Doplnit explicitní interní odkaz stejně jako u ostatních:
> `[testu AI viditelnosti](/blog/test-ai-viditelnosti/)`

---

### [TIP] Závěrečné CTA je správně produktové, ale je zbytečně dlouhé a nese dvě akce najednou
**Citace:**
> „AI SEO audit za 9 990 Kč… Pokud chcete citovatelnost napříč platformami řešit sami, AI SEO Wireframe Pack za 1 490 Kč…“

**Problém:**  
CTA splňuje zadání, to je plus. Jen současně prodává Audit i Pack a obě nabídky mají skoro stejnou váhu. To může oslabit konverzní jasnost závěru.

**Návrh opravy:**  
Nechat jednu hlavní akci a druhou jako sekundární:
- hlavní CTA: Audit 9 990 Kč
- sekundární věta: „Pro samostatnou práci je tu Pack za 1 490 Kč.“

---

## Krátké potvrzení toho, co je už dobře

- **Zakázaný slovník** je z většiny opravený dobře.  
- **„Index Vyhledávání Google“** je správně.  
- **Úvodní answer** je už použitelný a dává samostatný smysl.  
- **CTA** už není generické „kontaktujte nás“, ale vede na konkrétní produkty.  
- **Hlavní overclaimy z 1. verze** byly většinou rozumně zmírněné.

---

## Shrnutí
Článek je po opravách výrazně lepší, ale **ještě bych ho nepouštěl ven bez finálního dočištění**. Hlavní problém už není hrubá chyba, ale **pár zbylých příliš jistých formulací u Perplexity a Google AI Overviews** a **FAQ odpověď, která stále formálně nezačíná definicí**. Po těchto cílených úpravách bude text publish-ready.