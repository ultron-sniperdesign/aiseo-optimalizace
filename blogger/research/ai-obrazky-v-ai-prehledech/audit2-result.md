Níže jen to, co po opravách ještě zůstává problematické nebo nové.

## 1. Zbytky vydávání úsudku za zjištění

### A. Frontmatter `faq`: „Pozná uživatel, že je obrázek vygenerovaný?“
**Citace:**  
> „Netvrdíme proto, že Google takové obrázky neoznačuje; u obrázků ze svých modelů dlouhodobě mluví o neviditelném vodoznaku.“

**Problém:**  
„Pozná uživatel“ a „neviditelný vodoznak“ si významově nesedí. Odpověď uhýbá od otázky. Neviditelný vodoznak není něco, co uživatel „pozná“. Vzniká tím měkký logický šum: formálně opatrné, ale obsahově rozostřené.

**Lepší:**  
> „Z dostupných zdrojů nevíme, jestli je v rozhraní viditelně označený. Jeden zdroj neřeší ani metadata či jinou technickou formu označení.“

---

### B. Tělo: „Bez nich stroj neví, co na obrázku je. To platí pro vyhledávač i pro AI.“
**Citace:**  
> „Popisný název souboru a alt text — Bez nich stroj neví, co na obrázku je. To platí pro vyhledávač i pro AI.“

**Problém:**  
To je přestřelené a věcně slabé. Počítačové vidění samozřejmě umí obsah obrázku odhadovat i bez altu a názvu souboru. Alt a filename pomáhají interpretaci a zařazení, ale „neví“ je nepravda.

**Lepší:**  
> „Bez nich má stroj slabší signály o tom, co je na obrázku a v jakém kontextu ho chápat.“

---

### C. Tělo: „Popisek, okolní text a nadpis dávají obrázku význam, který ze samotného souboru nevyčte nikdo.“
**Citace:**  
> „…význam, který ze samotného souboru nevyčte nikdo.“

**Problém:**  
Zase příliš absolutní. Jednak „nikdo“, jednak směšuješ vizuální obsah a kontextový význam. Ze souboru lze vyčíst ledacos; nevyčte se spolehlivě celý redakční kontext.

**Lepší:**  
> „…doplňují význam a účel obrázku, který ze samotného vizuálu nemusí být zřejmý.“

---

### D. Tělo: „Krátce: přímo nijak.“
**Citace:**  
> „## Jak to měřit  
> Krátce: přímo nijak.“

**Problém:**  
Je to zkratka na hraně. O odstavec níž sám radíš sledovat trend, poznamenat si datum a koukat na obrazové výkony stránek. Tedy ne „nijak“, ale „ne přímo / ne izolovaně“. Současná formulace je efektní, ale vnitřně si odporuje s dalším textem.

**Lepší:**  
> „Přímo a čistě odděleně to z veřejných dat nezměříte.“

---

### E. Shrnutí: „Fotky konkrétních výrobků, míst a lidí model nenahradí.“
**Citace:**  
> „Fotky konkrétních výrobků, míst a lidí model nenahradí.“

**Problém:**  
To je návrat k přesně tomu typu kategorického soudu, který se jinde mírnil. V těle správně píšeš „obvykle nenahradí“, tady už ne. To je zbytečný rozpor mezi opatrnějším tělem a tvrdším shrnutím.

**Lepší:**  
> „…model obvykle nenahradí stejně dobře jako obecnou ilustraci.“  
nebo  
> „…jsou vůči nahrazení spíš odolnější.“

---

## 2. Vnitřní rozpory po zásazích

### F. „Pro české vyhledávání s tím dnes nelze počítat“ × „Testovat to na českých dotazech“
**Citace 1:**  
> „Pro běžné české vyhledávání s tím tedy dnes nelze počítat.“

**Citace 2:**  
> „Když to na českém dotazu nevidíte, není to důkaz, že funkce neexistuje.“

**Problém:**  
Ne přímý rozpor, ale zbytečně to míchá dvě roviny: jazyk rozhraní/funkce a geografie dostupnosti. Z research plyne „jen v angličtině“ a regiony navázané na AI Mode. Nevíme, zda český uživatel v podporovaném regionu při anglickém promptu funkci dostane; nevíme ani jak se chová český účet v nepodporovaném regionu. „Na českých dotazech“ je už dost konkrétní provozní rada, na kterou zdroje nestačí.

**Lepší:**  
> „Zpráva uvádí angličtinu; na českých dotazech proto není vhodné dostupnost funkce posuzovat.“

Tím netvrdíš víc, než víš.

---

### G. „Není zjevná zdrojová stránka“ × „Obrázkové vyhledávání dál vede na weby“
**Citace 1:**  
> „u obrázku vytvořeného od začátku není zjevná zdrojová stránka“

**Citace 2:**  
> „Obrázkové vyhledávání dál existuje a dál vede na weby.“

**Problém:**  
Není to rozpor, ale přechod mezi „AI přehledy“ a „obrázkové vyhledávání“ je místy příliš hladký. Pro běžného čtenáře může splývat, co je AI Overview, co je Google Images a co nová domovská stránka. Článek to většinou drží, ale v části „Co se tím nemění“ už to místy zní, jako by šlo o tentýž povrch.

**Doporučení:**  
V jedné větě explicitně oddělit:
> „Mění se jedna vrstva výsledků v Search, ne to, že Google Images jako kanál odkazů na weby dál funguje.“

---

## 3. Kde opatrnost sklouzla do prázdnoty

### H. Frontmatter `answer`
**Citace:**  
> „Zdroje neuvádějí, jak jsou takové obrázky označené ani jestli se u nich někam odkazuje.“

**Problém:**  
To je korektní, ale samo o sobě už málo užitečné. Krátká odpověď by měla vedle nevíme říct i to hlavní použitelné: že jde o obrázek vytvořený od začátku a proto u něj nelze čekat stejný typ zdrojového prokliku jako u existující fotky z webu. To v článku máš, ale `answer` je teď příliš defenzivní.

**Lepší:**  
> „…Obrázek nevzniká převzetím z konkrétní webové stránky, ale vytvořením od začátku; zdroje přitom neuvádějí, zda u výstupu Google zobrazuje nějaký odkaz.“

---

### I. Sekce „Jak to měřit“
**Citace:**  
> „Izolovat dopad zrovna téhle změny z veřejných dat nejde.“

**Problém:**  
Takto napsané je skoro slepá ulička. O odstavec níž už naštěstí dáváš praktický postup. Lepší by bylo ten praktický postup vytáhnout výš a tu nemožnost formulovat užším způsobem: nejde to izolovat čistě, ale jde sledovat indicie.

---

## 4. Věcné chyby nebo spornosti, které první audit neřešil

### J. „Report generativních AI funkcí vám nepomůže, protože kliky vůbec nedává.“
**Citace:**  
> „Report generativních AI funkcí vám nepomůže, protože kliky vůbec nedává.“

**Problém:**  
Formulace „nedává“ je hovorová a zároveň lehce klamavá: report kliky neukazuje / neposkytuje, ne že by „nedával“ kliky jako produkt. O kus níž už to máš přesněji v odkazu: „dává jen imprese“. Tady bych to srovnal.

**Lepší:**  
> „…protože neukazuje kliky, jen imprese.“

---

### K. „Pohání to nejnovější model řady Nano Banana.“
**Citace:**  
> „Pohání to nejnovější model řady Nano Banana.“

**Problém:**  
Pokud research říká jen „nejnovější model Nano Banana“, výraz „řady“ může být nechtěné domýšlení, že jde o explicitně pojmenovanou produktovou řadu. To je drobnost, ale zbytečná.

**Lepší:**  
> „Pohání to nejnovější model Nano Banana.“

---

### L. „Google to oznámil 14. července 2026…“
**Citace:**  
> „Google 14. července 2026 přidal do AI přehledů…“

**Problém:**  
Ze zdrojů máš jisté datum oznámení a reportáže, ne nutně datum skutečného plného spuštění. V textu sice máš „over the coming weeks“, ale ve frontmatteru a shrnutí se místy „oznámil“ mění na „přidal“. To je jemné, ale podstatné.

**Kde:**  
- `answer`: „přidal“
- `stats`: „datum oznámení“ — tady správně
- shrnutí: „přidal“

**Lepší:**  
Držet jednu rovinu:
> „Google 14. července 2026 oznámil / začal zavádět…“

---

## 5. Použitelnost po opravách

Text pořád použitelný je, ale na třech místech ztrácí ostrost:

1. **`answer`** je příliš obranná a málo říká, co je podstata změny.  
2. **„Krátce: přímo nijak“** zbytečně zplošťuje měření.  
3. **Shrnutí** znovu přitvrzuje do kategorických vět, které tělo předtím rozumně zmírnilo.

Jádro článku funguje tam, kde říká:
- co je doložené,
- co je odvození,
- které typy vizuálů jsou spíš ohrožené,
- a co se nemění v praxi.

Nejslabší jsou formulace, které chtějí být úderné a přitom přeskakují zpět do absolutna.

---

## 6. Titulek a krátká odpověď

### Titulek
Současný:
> „AI přehledy nově vytvářejí obrázky. Co to může změnit“

Je v zásadě v pořádku. Jen je dobré zvážit, zda do něj nedat Google a zavádění místo hotového stavu.

Lepší varianty:
- **Google začal zavádět generování obrázků v AI přehledech. Co to může změnit**
- **Google oznámil generování obrázků v AI přehledech. Co z toho plyne pro weby**

### Krátká odpověď
Současná `answer` je korektní, ale málo nosná. Navrhuju:

> **Google 14. července 2026 oznámil a začal zavádět generování obrázků v AI přehledech: uživatel zadá textový prompt a systém vytvoří obrázek od začátku. Při spuštění jde o angličtinu a regiony, kde už funguje tvorba obrázků v AI Mode. Pro weby je podstatné, že takový výstup nevychází z konkrétní webové fotky; zdroje přitom neuvádějí, zda je viditelně označený nebo zda u něj Google zobrazuje nějaký odkaz.**

Pokud chceš, udělám ještě **konkrétní redline návrh 10–15 přesných přepisů vět** přímo v pořadí článku.