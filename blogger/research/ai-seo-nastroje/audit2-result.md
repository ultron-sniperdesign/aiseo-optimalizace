## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou výrazně lepší: definice AI odpovědí je přesnější, CTA vede na konkrétní produkty, title/meta/slug jsou v zásadě v pořádku a zakázané termíny typu „schema markup“ se neobjevují. Přesto zůstávají problémy s citovatelností, ověřitelností nástrojů/cen a několika příliš obecnými tvrzeními.

---

## Nálezy

### [BLOCKER] `answer` je delší než požadovaných 40–60 slov

**Citace:**

> `answer: "AI SEO nástroje sledují, jestli a jak často se značka objevuje ... až sledujete víc dotazů a konkurenci."`

Má cca 64 slov. Zadání říká, že krátká odpověď má mít 40–60 slov. Obsahově je dobrá, ale je moc dlouhá.

**Návrh opravy:**

Zkraťte např. na:

> AI SEO nástroje sledují viditelnost značky v AI odpovědích a asistentech, například v Perplexity, ChatGPT s vyhledáváním nebo Google AI Overviews. Oproti klasickému SEO neměří hlavně pozice, ale podíl zmínek, citované zdroje a konkurenci napříč platformami. Ruční kontrola může stačit na start; placené nástroje pomáhají při více dotazech a pravidelném reportingu.

---

### [BLOCKER] Ceny, nástroje a funkce k roku 2026 nejsou doložené

**Citace:**

> `value: "od ~29 USD"`  
> **Otterly** `(orientačně od ~29 USD/měsíc)`  
> **Peec**, **Profound**, **LLM Pulse**  
> **Marketing Miner** s funkcí Brand Radar  
> `Stav je k květnu 2026; ceny a funkce nástrojů se rychle mění.`

Tvrzení jsou časově citlivá a vztahují se ke květnu 2026. Bez doložení veřejnými ceníky / produktovými stránkami jde o rizikové faktické claimy. Zvlášť cena „od ~29 USD“ a aktuální schopnosti Brand Radar / Peec / Profound / LLM Pulse musí být před publikací ověřené.

**Návrh opravy:**

Buď doplňte interně ověřené datum a zdroje, nebo tvrzení změkčete:

- místo:

> Otterly (orientačně od ~29 USD/měsíc)

použít:

> Otterly a podobné vstupní nástroje obvykle začínají v nižších desítkách USD měsíčně; přesnou cenu ověřte v aktuálním ceníku.

A do článku doplnit větu:

> Přehled vychází z veřejně dostupných informací ověřených k 24. 5. 2026; u cen a funkcí je nutné počítat s rychlými změnami.

Pokud cena není ověřená, odstranit ji i ze `stats`.

---

### [WARNING] Článek slibuje „variant rich / CompareTable“, ale neobsahuje skutečnou tabulku nástrojů

**Citace:**

> `variant: "rich"`  
> Kontext zadání: `variant rich (tabulka → CompareTable)`  
> V článku je pouze tabulka „Klasické SEO nástroje vs AI SEO nástroje“.

Tabulka je užitečná, ale nesrovnává konkrétní AI SEO nástroje. Pro článek s cílovým KW „ai seo nástroje“ a rich variantou chybí rychlý srovnávací přehled typu: nástroj / pro koho / co měří / orientační cenová úroveň / poznámka pro CZ.

**Návrh opravy:**

Pod sekci „Tři úrovně nástrojů“ přidat stručnou srovnávací tabulku, např.:

| Úroveň | Příklady | Pro koho | Co ověřit před výběrem |
|---|---|---|---|
| Ručně zdarma | ChatGPT, Perplexity, GA4 jako podpůrný signál | malý web, první orientace | že sledujete stejné dotazy a ukládáte výsledky |
| Vstupní sledovací nástroje | Otterly, Peec | desítky dotazů, konkurence | podpora češtiny, platformy, exporty |
| Firemní řešení | Profound, LLM Pulse | agentury, větší značky | cena, metodika výpočtu, pokrytí trhu |
| CZ možnost | Marketing Miner Brand Radar | české projekty | aktuální rozsah měření AI odpovědí |

Pozor: konkrétní názvy ponechat jen po ověření k 24. 5. 2026.

---

### [WARNING] Některá tvrzení zobecňují schopnosti všech AI SEO nástrojů

**Citace:**

> Bez ohledu na cenu sledují obvykle tyhle věci:  
> **Vývoj v čase a upozornění** — když vás konkurence předběhne nebo zmínky klesnou.  
> **Kontext a sentiment** — jak o vás AI mluví, ne jen jestli.

Ne všechny nástroje nutně mají upozornění, sentiment, stejnou metodiku nebo pokrytí všech platforem. „Bez ohledu na cenu“ je příliš silné.

**Návrh opravy:**

Změnit na:

> U placených nástrojů se nejčastěji potkáte s těmito funkcemi; rozsah se liší podle nástroje a tarifu:

A u bodů upravit:

> **Vývoj v čase a upozornění** — některé nástroje ukazují změny podílu zmínek a umí upozornit na výrazné výkyvy.  
> **Kontext a sentiment** — vybrané nástroje hodnotí, v jakém kontextu se značka objevuje; metodika se liší.

---

### [WARNING] „Citované zdroje“ jsou místy uvedené bez kvalifikace

**Citace:**

> místo pozic a odkazů sledují **podíl zmínek (share of voice), citované zdroje a konkurenci**  
> Hlavní otázka: `citují nás AI odpovědi?`

Část AI odpovědí značku zmíní bez zdroje, některé platformy citace neuvádějí vždy nebo je uvádějí odlišně. V FAQ je to kvalifikované dobře, ale v hlavním textu a tabulce zůstává zkratka.

**Návrh opravy:**

V leadu:

> sledují **podíl zmínek, případné citované zdroje a konkurenci**

V tabulce:

> Hlavní otázka: `zmiňují nebo citují nás AI odpovědi?`

---

### [WARNING] FAQ je místy příliš kategorické u ručního měření zdarma

**Citace:**

> Dokud sledujete pár dotazů, stačí ruční měření zdarma.  
> Dá se AI viditelnost měřit zdarma? Ano, základ ano. Projděte ručně 15–20 zákaznických dotazů v ChatGPT a Perplexity...

„Stačí“ je silnější než zbytek článku, který správně říká „orientační ruční kontrola“. Navíc ChatGPT/Perplexity nejsou „bez nástrojů“ — spíš bez specializovaného placeného trackeru. Některé funkce mohou být omezené účtem, tarifem nebo dostupností.

**Návrh opravy:**

> Dokud sledujete jen několik dotazů, může pro orientační start stačit ruční kontrola bez specializovaného placeného nástroje.

A ve FAQ:

> Projděte ručně 15–20 zákaznických dotazů v dostupných AI asistentech, například v ChatGPT s vyhledáváním a Perplexity, a zapisujte zmínky i zdroje tam, kde jsou uvedené.

---

### [WARNING] GA4 je správně oslabené, ale ve FAQ by mělo být ještě přesnější

**Citace:**

> v GA4 si nastavte sledování návštěv z AI platforem

V těle článku je správně uvedeno, že GA4 nezachytí zmínky bez prokliku. Ve FAQ ale věta může vyznít, že GA4 spolehlivě měří návštěvy z AI platforem. Přitom referral nemusí být vždy předán nebo se může propsat nepřesně.

**Návrh opravy:**

> V GA4 sledujte návštěvy z AI platforem jako podpůrný signál, pokud se referral propíše. Nezachytí zmínky bez prokliku a nemusí pokrýt všechny aplikace nebo režimy prohlížeče.

---

### [WARNING] CTA lehce přisuzuje strukturovaným datům vliv na citovatelnost v AI

**Citace:**

> Když chcete obsah upravit tak, aby byl pro AI srozumitelnější a lépe citovatelný — krátká odpověď, fakta, strukturovaná data — pomůže...

CTA je konkrétní a produktově správné, ale spojení „lépe citovatelný — strukturovaná data“ může naznačovat, že strukturovaná data přímo zvyšují citování v AI odpovědích. To není garantované.

**Návrh opravy:**

> Když chcete obsah upravit tak, aby byl srozumitelnější, lépe strukturovaný a snadněji použitelný v odpovědích — krátká odpověď, fakta, jasná struktura a strukturovaná data pro lepší popis obsahu — pomůže...

Nebo stručněji:

> ...aby byl srozumitelnější a lépe citovatelný: krátká odpověď, ověřitelná fakta, jasné nadpisy a vhodná strukturovaná data. Citaci to nezaručuje, ale pomáhá systémům obsah lépe pochopit.

---

### [WARNING] Skupinové tvrzení o klasických SEO nástrojích je nepřesné

**Citace:**

> Klasické nástroje (Google Search Console, Ahrefs, Marketing Miner) měří pozice, návštěvnost a odkazy.

Tohle platí jen obecně pro kategorii, ne pro každý uvedený nástroj stejně. GSC ukazuje dotazy, kliknutí, imprese, průměrnou pozici a omezeně odkazy; Ahrefs pracuje hlavně s odkazy, odhady návštěvnosti a klíčovými slovy; Marketing Miner má vlastní sadu funkcí. Věta je zjednodušená až nepřesná.

**Návrh opravy:**

> Klasické nástroje, jako Google Search Console, Ahrefs nebo Marketing Miner, pomáhají sledovat dotazy, pozice, návštěvnostní signály, odkazy a technické SEO; konkrétní rozsah se liší podle nástroje.

---

### [TIP] Nadměrné anglicismy: „trackery“, „enterprise“, „reporting“, „leadů“

**Citace:**

> vstupní trackery  
> enterprise  
> agenturní reporting  
> návštěv, leadů a citací

Nejde o zakázané termíny ze zadání, ale tón článku má být věcný a srozumitelný. U českého vzdělávacího článku je lepší držet češtinu.

**Návrh opravy:**

- `trackery` → `sledovací nástroje`
- `enterprise` → `firemní řešení` / `řešení pro větší firmy`
- `agenturní reporting` → `agenturní reporty` / `pravidelné výkaznictví`
- `leadů` → `poptávek` / `obchodních kontaktů`

`share of voice` může zůstat v závorce při prvním výskytu, protože český ekvivalent „podíl zmínek“ je uvedený.

---

### [TIP] Titulek a meta description jsou v pořádku, jen meta je na horní hraně

**Citace:**

> title: "AI SEO nástroje 2026: čím měřit a zlepšit viditelnost v AI"  
> description: "Přehled AI SEO nástrojů pro rok 2026: čím sledovat citace a podíl zmínek..."

Titulek má cca 58 znaků, klíčové slovo je vepředu, slug je smysluplný. Meta description je v limitu 70–160 znaků, ale blízko horní hraně.

**Návrh opravy volitelně:**

Zkrácená meta varianta:

> Přehled AI SEO nástrojů pro rok 2026: jak sledovat zmínky, citace v AI odpovědích a kdy dává smysl placený nástroj.

---

### [TIP] Prvních ~100 slov těla funguje dobře jako samostatná odpověď

**Citace:**

> AI SEO nástroje sledují, jestli a jak často se značka objevuje...

Tahle část je věcná, nezačíná negací a vysvětluje rozdíl proti klasickému SEO. Po drobném doplnění „případné citované zdroje“ bude vhodná i pro AI citování.

**Návrh opravy:**

Jen drobně změkčit:

> ...sledují **podíl zmínek, případné citované zdroje a konkurenci**.

---

### [TIP] FAQ jsou převážně dobré a odpovídají reálným otázkám

FAQ otázky jsou relevantní a odpovědi většinou dávají smysl samostatně. Největší opravy se týkají jen:

- zjemnit „stačí ruční měření zdarma“,
- doplnit limit GA4,
- u citací držet formulaci „tam, kde platforma zdroje uvádí“.

---

## Shrnutí priorit oprav

1. Zkrátit `answer` na 40–60 slov.  
2. Ověřit nebo změkčit všechny údaje o cenách, funkcích a dostupnosti nástrojů k 24. 5. 2026.  
3. Přidat skutečnou srovnávací tabulku AI SEO nástrojů, pokud má článek plnit rich/CompareTable variantu.  
4. Změkčit obecná tvrzení o citacích, sentimentu, upozorněních a ručním měření.  
5. Omezit anglicismy a zpřesnit CTA u strukturovaných dat.