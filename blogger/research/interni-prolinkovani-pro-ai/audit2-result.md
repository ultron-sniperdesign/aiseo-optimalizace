**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže je druhé, nezávislé posouzení aktuální verze. Oproti 1. kolu je článek výrazně lepší a hlavní blokery zjevně zmizely. Zbývá ale několik konkrétních problémů, z toho jeden na hraně blockeru kvůli věcné přesnosti postupu.

---

## Nálezy

### [BLOCKER] Postup hledání osiřelých stránek je stále popsaný příliš zkratkovitě a může být fakticky zavádějící
> **„Porovnejte seznam adres z webu, ze sitemap a z procházení webu.“**  
> **„Porovnejte adresy z webu, sitemap a procházení.“**  
> **„Porovnejte adresy z webu, sitemap a procházení a najděte stránky, na které nevede žádný interní odkaz.“**

**Problém:**  
Tohle je lepší než v první verzi, ale pořád to směšuje dvě různé věci:

1. **seznam známých URL**  
2. **důkaz, že na URL nevede žádný interní odkaz**

Pouhé porovnání URL ze sitemapy, webu a crawleru **samo o sobě spolehlivě neprokáže osiřelost**. Najde kandidáty a nesoulady, ale ne definitivní seznam všech osiřelých stránek. Například:
- URL může být v sitemapě, ale interní odkaz na ni existuje jen v části webu, kterou crawler minul kvůli JS, formuláři, nofollow, podmínkám renderingu apod.
- „seznam adres z webu“ není jasně definovaný zdroj
- bez logiky „zdroj URL“ vs. „nalezeno interním procházením z interních odkazů“ je návod pro tutorial zbytečně vágní

**Návrh opravy:**  
Zpřesnit všude stejnou formulací ve smyslu:
- nejdřív si vytvořte **seznam všech důležitých URL** z CMS/exportu, sitemap a dalších zdrojů
- pak ho porovnejte s URL, které se podařilo **najít interním procházením přes odkazy**
- URL, které jsou v seznamu známých stránek, ale nejsou dosažitelné interním procházením, jsou **kandidáti na osiřelé stránky** a je potřeba je ověřit

Stačí krátce, ale metodicky přesně. U tutorialu je to důležité.

---

### [WARNING] Jeden výrok je pořád příliš silný vzhledem k nejistotě mechaniky
> **„AI systémy skládají odpověď z kusů obsahu.“**

**Problém:**  
Jako zjednodušení je to použitelné, ale je to formulováno příliš kategoricky. Ne všechny AI systémy a ne všechny odpovědi fungují stejně; někde jde o vyhledání, někde sumarizaci, někde generaci bez explicitně dohledatelného „skládání z kusů obsahu“. V článku, který si dává pozor na overclaimy, je to zbytečně tvrdé.

**Návrh opravy:**  
Změkčit například na:
- „Mnohé AI systémy při odpovědích pracují s nalezenými částmi obsahu…“
- „V AI odpovědích často pomáhá, když jsou vztahy mezi stránkami čitelné…“

---

### [WARNING] Místy se přece jen přehání jistota u „důležitosti“ stránek
> **„…které stránky jsou důležitější.“**  
> **„…struktura odkazů naznačuje, co spolu souvisí a které stránky jsou v rámci webu důležitější.“**

**Problém:**  
Už je to zmírněné oproti minulé verzi, ale pořád by bylo bezpečnější držet stejný slovník napříč článkem. „Důležitější“ zní jako poměrně pevný signál, zatímco jinde správně píšete „naznačuje prioritu“ nebo „pomáhá odhadnout“.

**Návrh opravy:**  
Sjednotit na bezpečnější formulaci:
- „…pomáhají odhadnout, co spolu souvisí a které stránky mají v rámci webu vyšší prioritu.“
- nebo „…naznačují, které stránky web považuje za klíčové.“

---

### [WARNING] FAQ odpověď nezačíná definicí v nejčistší možné podobě
> **Q: „Co je interní prolinkování?“**  
> **A: „Jsou to odkazy mezi stránkami vlastního webu.“**

**Problém:**  
Není to vyloženě špatně, ale po opravě `answer` a úvodu je FAQ slabší článek v řetězu. Odpověď začíná zájmenem „Jsou to…“, což je méně samostatné a méně citovatelné než přímá definice. U cíle „tutorial + AI citovatelnost“ je škoda to nenechat stejně čisté jako nahoře.

**Návrh opravy:**  
Začít stejně přímo:
- „Interní prolinkování je propojování stránek vlastního webu pomocí interních odkazů.“

Pak může následovat zbytek odpovědi.

---

### [WARNING] Anglicismus „Check-listový“ problém tu není, ale zůstává jeden cizí termín bez českého ukotvení v textu
> **„Search Console“**

**Problém:**  
Technický název je povolený, to je v pořádku. Ale v tutorialu by se při prvním výskytu hodilo jasněji ukotvit, že jde o nástroj Google, jinak je to pro část čtenářů zbytečně zkratkovité.

**Návrh opravy:**  
Při prvním výskytu:
- „Google Search Console…“
nebo
- „nástroj Google Search Console…“

To není stylistická kosmetika, ale lepší srozumitelnost.

---

### [TIP] „Odkaz z textu > odkaz z patičky“ je zkratka, která může působit příliš absolutně
> **„Odkaz z textu > odkaz z patičky“**

**Problém:**  
V kontextu článku je jasné, co tím myslíte, ale symbol „>“ z toho dělá téměř pravidlo bez výjimek. Přitom výše správně píšete „bývá užitečnější“.

**Návrh opravy:**  
Přepsat shrnutí do stejné opatrnosti jako zbytek článku:
- „Odkaz z textu bývá užitečnější než odkaz z patičky — protože nese jasnější kontext.“

---

### [TIP] „Test pěti stránek“ působí lehce nahodile
> **„Vezměte pět nejdůležitějších stránek a spočítejte kliky od úvodní.“**

**Problém:**  
Není to faktická chyba, ale číslo pět působí arbitrárně. U tutorialu je lepší buď vysvětlit, proč právě pět, nebo použít otevřenější formulaci.

**Návrh opravy:**  
Například:
- „Vezměte několik nejdůležitějších stránek a spočítejte kliky od úvodní.“
- nebo „Začněte pěti nejdůležitějšími stránkami…“ pokud chcete číslo zachovat jako praktický start, ne univerzální pravidlo.

---

### [TIP] Interní odkaz na článek se slugem „pillar-content“ mírně kazí konzistenci slovníku
> **„…[jak strukturovat pilířový obsah](/blog/jak-strukturovat-pillar-content/)“**

**Problém:**  
V textu je terminologie už počeštěná a vysvětlená správně, ale URL s „pillar-content“ připomíná původní anglicismus. Není to chyba článku samotného, spíš drobná obsahová nekonzistence webu.

**Návrh opravy:**  
Pokud je to možné na úrovni webu, zvážit časem český slug. Pokud ne, neblokuje publikaci.

---

### [TIP] Meta description je v pořádku, title je funkční, ale lehce přesahuje ideální délku
> **title: „Interní prolinkování pro AI: jak propojit obsah“**

**Problém:**  
Titulek je dobrý a klíčové slovo je vepředu. Jen je pravděpodobně lehce nad ideálním rozsahem 50–60 znaků.

**Návrh opravy:**  
Není nutné za každou cenu, ale lze zkrátit, například:
- „Interní prolinkování pro AI: jak na něj“
- „Interní prolinkování pro AI: praktický návod“

---

### [TIP] CTA je správně konkrétní, ale jedna formulace už lehce sklouzává k příliš jistému výsledku
> **„AI SEO audit za 9 990 Kč projde web, odhalí osiřelé a slabě propojené stránky…“**

**Problém:**  
„Odhalí“ zní dost definitivně, zvlášť když sám článek správně vysvětluje, že detekce osiřelých stránek závisí na porovnání zdrojů a není to vždy úplně triviální.

**Návrh opravy:**  
Změkčit na:
- „pomůže odhalit osiřelé a slabě propojené stránky…“
- nebo „ukáže kandidáty na osiřelé a slabě propojené stránky…“

---

## Krátké potvrzení toho, co je teď dobře

- `answer` i první odstavec už **fungují jako samostatná definice** a začínají správně definicí.  
- Oprava kolem **Search Console a skutečně osiřelých stránek** jde správným směrem.  
- Zmizel nevysvětlený **hub-and-spoke** a nahrazení je v pořádku.  
- Tón je většinou věcný, bez tvrdého prodeje a bez zakázaných superlativů.  
- CTA už míří na konkrétní produkty, což odpovídá zadání.  
- Aktualizační ukotvení k datu **11. 7. 2026** je v článku jasné.

---

## Shrnutí

Článek je po prvním kole výrazně silnější. K publikaci mu ale ještě doporučuji dopracovat hlavně **metodickou přesnost u hledání osiřelých stránek** a lehce **zmírnit pár vět o AI mechanice a „důležitosti“ stránek**. Pak bude obsahově bezpečný i pro tutorial formát.