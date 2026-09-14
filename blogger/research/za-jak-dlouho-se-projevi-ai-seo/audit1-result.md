## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je poctivě postavený, dobře pracuje s limity měření a nemá tvrdé prodejní sliby. Před publikací bych ale opravil několik míst, kde text tvrdí víc, než lze doložit, a zpřesnil logiku měření pro čtenáře bez analytického vzdělání.

---

## Nálezy a opravy

### [BLOCKER] Univerzální tvrzení „nemá nikdo / nikdo nedoložil“ je příliš silné

**Citace:**

> `description: "Veřejně doložené číslo, za jak dlouho se AI SEO promítne do poptávek, nemá nikdo."`

> `answer: "Obecné číslo, za jak dlouho se práce na AI SEO projeví v poptávkách, nikdo veřejně nedoložil."`

> `## Veřejné číslo pro ... nemá nikdo — ...`

> `Obecné číslo nikdo veřejně nedoložil.`

**Problém:**  
Tvrzení „nemá nikdo“ a „nikdo veřejně nedoložil“ je absolutní. I když jste při rešerši žádné číslo nenašli, bezpečnější a věcně přesnější formulace je „nenašli jsme“ nebo „není známé obecně použitelné veřejně doložené číslo“. Jinak článek sám dělá overclaim, přestože před overclaimy varuje.

**Návrh opravy:**

- Description upravit například na:

> „Veřejně doložené obecně použitelné číslo jsme nenašli. Z čeho se prodleva skládá a jak ji změřit v GA4, Search Console a CRM.“

- H2 upravit například na:

> „Veřejně doložené číslo pro rychlost AI SEO jsme nenašli — kolují hlavně odhady bez metodiky“

- FAQ/answer upravit z „nikdo veřejně nedoložil“ na:

> „Veřejně doložené obecně použitelné číslo jsme nenašli.“

---

### [WARNING] Krátká odpověď má správnou délku, ale nezačíná definicí

**Citace:**

> `answer: "Obecné číslo, za jak dlouho se práce na AI SEO projeví v poptávkách, nikdo veřejně nedoložil..."`

**Problém:**  
Frontmatter `answer` má cca 50 slov, což splňuje požadovaných 40–60 slov. Nezačíná ale definicí/samostatnou odpovědí, nýbrž negací dostupnosti čísla. Pro citovatelnost v AI je lepší začít vysvětlením, co se vlastně měří.

**Návrh opravy:**

> `answer: "Prodleva AI SEO v poptávkách je doba mezi úpravou obsahu, jeho objevením v odpovědích AI a rozhodnutím zákazníka poptat. Veřejně doložené obecně použitelné číslo jsme nenašli. Měřit ji jde jen na vlastních datech — v Search Console, GA4, CRM a otázkou ve formuláři."`

Tato verze začíná definicí, drží samostatný smysl a zůstává v bezpečném claimu.

---

### [WARNING] Prvních ~100 slov těla článku je spíš varování než samostatná odpověď

**Citace:**

> **„Kdo vám slíbí, že se práce na AI viditelnosti projeví v poptávkách za tři týdny, opírá se o číslo, za kterým zatím nestojí zveřejněné měření.“**

**Problém:**  
Úvod je věcně užitečný, ale pro AI citovatelnost nezačíná přímou odpovědí na dotaz „za jak dlouho se AI SEO projeví v poptávkách“. Začíná konfrontačním varováním. Lepší je nejdřív definovat prodlevu a až potom varovat před nepodloženými sliby.

**Návrh opravy:**  
První odstavec otočit tak, aby začínal odpovědí:

> „Prodleva AI SEO v poptávkách má dvě části: dobu, než se obsah dostane do odpovědí AI, a dobu, než se zákazník rozhodne poptat. Veřejně doložené obecně použitelné číslo jsme nenašli. Pokud někdo slibuje tři týdny bez vzorku, období a metodiky, jde o odhad, ne o naměřenou hodnotu.“

---

### [WARNING] Míchají se tři různé prodlevy: zásah → AI viditelnost, AI návštěva → poptávka, poptávka → obchod

**Citace:**

> `Prodleva má dva úseky — cesta do odpovědi AI a rozhodování zákazníka`

> `Zapište výchozí stav a datum zásahu...`

> `Po celém cyklu spočítejte medián dní od poptávky do objednávky...`

**Problém:**  
Čtenář se může ztratit v tom, co přesně má měřit. Nadpis a úvod slibují „za jak dlouho se AI SEO projeví v poptávkách“, ale postup pak částečně měří i dobu od poptávky do objednávky a sales velocity. To je relevantní, ale není to totéž.

**Návrh opravy:**  
Před sekci „Jak si prodlevu spočítat sami“ vložit krátké rozlišení:

> „Nepleťte tři prodlevy:  
> 1. **zásah → zobrazení/zmínka v AI**,  
> 2. **první návštěva nebo kontakt z AI → poptávka**,  
> 3. **poptávka → uzavřený obchod**.  
> První dvě odpovídají na otázku, kdy se AI SEO projeví v poptávkách. Třetí ukazuje obchodní dopad a patří do výpočtu sales velocity.“

Tím se výrazně zlepší srozumitelnost pro majitele firmy/e-shopu.

---

### [WARNING] FAQ k ChatGPT mluví o „odpovědích ChatGPT“, ale zdrojová lhůta se týká výsledků vyhledávání

**Citace:**

> `q: "Za jak dlouho se web dostane do odpovědí ChatGPT?"`

> `OpenAI žádnou lhůtu nezveřejňuje. Uvádí jen, že po změně souboru robots.txt může trvat zhruba 24 hodin, než se to promítne do výsledků vyhledávání. Podmínkou je povolený robot OAI-SearchBot.`

**Problém:**  
Odpověď správně říká, že OpenAI lhůtu nezveřejňuje. Poslední věta ale může vyznít tak, že OAI-SearchBot je obecná podmínka pro „odpovědi ChatGPT“. Přesnější je omezit tvrzení na výsledky vyhledávání v ChatGPT, protože běžné odpovědi modelu a vyhledávací výsledky nejsou totéž.

**Návrh opravy:**

> „OpenAI nezveřejňuje lhůtu, za jak dlouho se web objeví v odpovědích ChatGPT. U výsledků vyhledávání v ChatGPT uvádí jen to, že po změně robots.txt může trvat zhruba 24 hodin, než se změna projeví. Pro tento typ vyhledávání musí být povolený OAI-SearchBot.“

---

### [WARNING] Title ve frontmatteru je kratší než požadovaných 50–60 znaků

**Citace:**

> `title: "Za jak dlouho se AI SEO projeví v poptávkách"`

**Problém:**  
`seoTitle` má 60 znaků a je v pořádku. `title` má ale podle zadání jen cca 44 znaků, tedy pod cílovým rozsahem 50–60 znaků. Pokud se jako HTML `<title>` používá `seoTitle`, není to kritické. Pokud se někde používá `title`, je krátký.

**Návrh opravy:**  
Buď potvrdit, že HTML title bere `seoTitle`, nebo upravit `title` například na:

> `title: "Za jak dlouho se AI SEO projeví v poptávkách a datech"`

Nebo sjednotit s `seoTitle`, pokud design snese delší nadpis.

---

### [TIP] Slug je smysluplný, ale neobsahuje „poptávky“

**Citace:**

> `slug: "za-jak-dlouho-se-projevi-ai-seo"`

**Problém:**  
Slug je pochopitelný, ale článek cílí konkrétně na „projeví v poptávkách“. Slug tuto část vynechává. Není to zásadní chyba, ale před publikací lze zvolit přesnější variantu.

**Návrh opravy:**

> `slug: "za-jak-dlouho-se-ai-seo-projevi-v-poptavkach"`

Pokud už by byl článek publikovaný a zaindexovaný, neměnit bez přesměrování.

---

### [TIP] Nadpis a úvod používají tvrdší formulace, než je potřeba pro brand voice

**Citace:**

> `nemá nikdo — kolují jen tvrzení bez dat`

> `Kdo vám slíbí...`

**Problém:**  
Tón je pořád věcný, ale místy zní lehce konfrontačně. Web má vysvětlovat, ne tvrdě vymezovat trh. Stačí zmírnit absolutní formulace a držet se metodiky.

**Návrh opravy:**

> „Veřejně doložené číslo jsme nenašli — pozor na odhady bez metodiky“

a v úvodu:

> „Pokud někdo uvádí pevnou lhůtu, ptejte se na vzorek, období a metodiku.“

To zachová kritičnost bez zbytečné ostrosti.

---

### [TIP] FAQ u konverzí je věcně dobré, ale jedna věta je neúplná

**Citace:**

> `Ve vzorku 97 webů pro B2B a sběr poptávek od Orbit Media se návštěvy z AI měnily na poptávku třikrát častěji...`

**Problém:**  
Není hned jasné, třikrát častěji než co. V těle článku je to uvedeno přesněji: „než přímé návštěvy a organické vyhledávání“.

**Návrh opravy:**

> „Ve vzorku 97 webů pro B2B a sběr poptávek od Orbit Media se návštěvy z AI měnily na poptávku třikrát častěji než přímé návštěvy a organické vyhledávání.“

---

### [TIP] V části o vlastních dotazech na AI chybí krátké upozornění na nereprezentativnost

**Citace:**

> `Opakované vlastní dotazy v ChatGPT, Gemini nebo Copilotu...`

**Problém:**  
Vlastní dotazy jsou praktické, ale nejsou reprezentativní měření trhu. Článek později odkazuje na volatilitu odpovědí AI, ale u samotného kroku by pomohla krátká brzda očekávání.

**Návrh opravy v popisu kroku:**

> „Opakované vlastní dotazy v ChatGPT, Gemini nebo Copilotu berte jako orientační kontrolu, ne jako reprezentativní měření všech uživatelů.“

---

### [TIP] CTA je relevantní, ale může přesněji navázat na problém článku

**Citace:**

> `AI SEO audit za 3 600 Kč projde web v technice, obsahu a důvěryhodnosti a dá vám prioritní seznam úprav s odhadem dopadu. Na 60minutové konzultaci se můžete doptat i na to, co po úpravách sledovat.`

**Hodnocení:**  
CTA splňuje zadání: vede na konkrétní produkt, uvádí cenu i obsah auditu. Nejde o generické „kontaktujte nás“.

**Doporučené zpřesnění:**  
Protože článek je hlavně o měření prodlevy, přidejte jednu větu, která přímo naváže na téma:

> „Součástí konzultace může být i doporučení, které signály po úpravách sledovat jako první: zobrazení v generativní AI, značkové dotazy, návštěvy z AI nebo poptávky.“

Pozor jen, ať to neslibuje kompletní implementaci analytiky, pokud ji audit reálně neobsahuje.

---

## Co je v pořádku

- Zakázané výrazy typu „schema markup“, „answer block“, „hub-and-spoke“ nebo „backlink profil“ se v článku nevyskytují.  
- Nejsou zde zakázané sliby typu „garantujeme #1“ ani „AI vás zaručeně začne doporučovat“.  
- `seoTitle` má 60 znaků a klíčové téma je na začátku.  
- `description` má vhodnou délku, jen potřebuje zmírnit absolutní tvrzení.  
- Interní odkazy jsou relevantní a vedou na související články/slovník/produkty.  
- CTA odpovídá nabídce auditu i Packu a uvádí ceny.