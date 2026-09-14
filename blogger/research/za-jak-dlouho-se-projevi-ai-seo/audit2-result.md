## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po 1. auditu výrazně lepší: nemá tvrdý prodejní tón, krátká odpověď splňuje délku i samostatnost, CTA vede na konkrétní produkty a většina tvrzení je dobře ukotvená. Publikaci bych ale ještě nepustil bez několika přesných oprav — hlavně kvůli nejasnosti mezi „dvěma úseky“ a „třemi prodlevami“ a kvůli několika formulacím, které zjednodušují měření víc, než článek sám později připouští.

---

## Nálezy

### [WARNING] „Dva úseky“ a „tři prodlevy“ jsou pořád částečně nesouměřitelné

**Problémové místo:**

> „Prodleva, za kterou se AI SEO projeví v poptávkách, má dva úseky: než se obsah dostane do odpovědí AI a než se zákazník rozhodne poptat.“

a později:

> „Při měření se snadno pletou tři různé prodlevy. Na otázku z titulku odpovídají první dvě, třetí ukazuje obchodní dopad:  
> Úprava webu → zmínka nebo zobrazení v AI  
> První návštěva z AI → poptávka  
> Poptávka → uzavřený obchod“

**Proč je to problém:**  
Druhý „úsek“ v úvodu zní jako **zmínka v AI → poptávka**, ale ve třech prodlevách se měří jako **první návštěva z AI → poptávka**. To není totéž. Zmínka v AI může vést k brand searchi, přímé návštěvě, telefonátu nebo poptávce bez prokliku. Článek to později řeší, ale úvodní model je pořád trochu posunutý.

**Návrh opravy:**  
V answeru i v hlavním vysvětlení rozlišit „reálnou cestu“ a „měřitelný zástupný bod“.

Např. upravit answer na:

> „Prodleva, za kterou se AI SEO projeví v poptávkách, má dvě části: než se obsah objeví nebo začne zobrazovat v odpovědích AI a než z tohoto kontaktu vznikne poptávka. V analytice druhou část často měříte jen nepřímo — od první rozpoznané návštěvy z AI, značkového hledání nebo odpovědi ve formuláři.“

Tím se odstraní rozpor mezi „AI zmínkou“ a „návštěvou z AI“.

---

### [WARNING] Tvrzení „Změřit ji jde jen na vlastních datech — v Search Console, v GA4, v CRM…“ slibuje víc, než nástroje umí

**Problémové místo:**

> „Změřit ji jde jen na vlastních datech — v Search Console, v GA4, v CRM a otázkou ve formuláři.“

**Proč je to problém:**  
Celou prodlevu „AI odpověď → poptávka“ tyto nástroje přímo nezměří. Search Console ukáže jen část Googlu a podle článku neukazuje kliky v přehledu výkonu v generativní AI. GA4 zachytí jen rozpoznané návštěvy. CRM a formulář doplní poptávku, ale pořád jde o skládání důkazů, ne jedno měření.

**Návrh opravy:**  
Změnit z „změřit“ na přesnější „poskládat odhad / sledovat v několika bodech“.

Např.:

> „Spolehlivé veřejné číslo jsme nenašli. Na vlastních datech si ale můžete prodlevu odhadnout po částech — ze zobrazení v Search Console, návštěv v GA4, dat v CRM a odpovědi ve formuláři.“

---

### [WARNING] Formulace „GA4 připíše poptávku nejvýš 90 dní zpátky“ je příliš absolutní

**Problémové místo:**

> „Co z prodlevy vyčtete v GA4 — poptávku připíše nejvýš 90 dní zpátky“

a ve shrnutí:

> „GA4 připíše poptávku nejvýš 90 dní zpátky…“

**Proč je to problém:**  
V článku správně vysvětlujete, že jde o hloubku pohledu u atribučních tras / běžných klíčových událostí. Zkratka v H2 a shrnutí ale může znít, jako by GA4 nikdy neuměl pracovat s delší historií uživatele. Přitom níže sami píšete o dimenzi „První uživatel – zdroj“, která původní zdroj může nést dál, pokud GA4 uživatele pozná.

**Návrh opravy:**  
Zpřesnit H2 i shrnutí:

> „Co z prodlevy vyčtete v GA4 — atribuční trasy vidí běžně nejvýš 90 dní zpátky“

A ve shrnutí:

> „Atribuční trasy v GA4 u běžných klíčových událostí pracují výchozí hloubkou pohledu 90 dní; delší rozhodování musíte doplnit CRM, formulářem nebo uživatelskými přehledy.“

---

### [WARNING] „GEO funnel velocity nemá vzorec“ je moc široké tvrzení

**Problémové místo:**

> „‚GEO funnel velocity‘ nemá vzorec.“

**Proč je to problém:**  
V textu korektně píšete, že **konkrétní článek Demand Local vzorec neuvádí**. Shrnutí to ale zobecňuje na celý pojem. To je zbytečně silný claim a může být napadnutelný, pokud někdo jiný vzorec použil nebo si ho interně definuje.

**Návrh opravy:**  
Zúžit tvrzení:

> „U citovaného použití ‚GEO funnel velocity‘ jsme nenašli zveřejněný vzorec.“

Nebo:

> „‚GEO funnel velocity‘ zatím nepůsobí jako ustálená metrika se zveřejněným standardním vzorcem.“

Druhá varianta je opatrnější a pořád srozumitelná.

---

### [WARNING] „Tři studie s popsanou metodikou“ může být terminologicky přestřelené

**Problémové místo:**

> „…tvrdí tři studie s popsanou metodikou tři různé věci:“

V tabulce jsou pak:

> „Kaiser a Schulze, Marketing Science 2026“  
> „Orbit Media, 2026“  
> „Amsive, 2025“

**Proč je to problém:**  
Kaiser a Schulze působí jako akademická studie, ale Orbit Media a Amsive jsou spíš datové analýzy / oborové reporty. Slovo „studie“ není zakázané, ale může zbytečně zvyšovat autoritu marketingových blogových analýz.

**Návrh opravy:**  
Změnit na přesnější formulaci:

> „…ukazují tři veřejné analýzy s popsaným vzorkem tři různé věci:“

A v tabulce případně:

- „Kaiser a Schulze, akademická studie / Marketing Science 2026“
- „Orbit Media, datová analýza 97 webů“
- „Amsive, datová analýza 54 webů“

Tím zůstane claim silný, ale přesnější.

---

### [WARNING] „Recenzovaná studie“ potřebuje explicitnější oporu nebo měkčí formulaci

**Problémové místo:**

> „Recenzovaná studie 973 e-shopů s daty ze srpna 2024 až července 2025…“

**Proč je to problém:**  
Pokud je studie skutečně publikovaná v Marketing Science, je to v pořádku, ale čtenář se to dozví jen nepřímo z tabulky a zdrojů. Pokud jde o working paper, preprint nebo accepted manuscript, „recenzovaná“ by bylo nepřesné.

**Návrh opravy:**  
Buď doložit přímo v textu:

> „Studie publikovaná v Marketing Science na vzorku 973 e-shopů…“

Nebo změkčit:

> „Akademická studie na vzorku 973 e-shopů…“

Bez ověření publikačního statusu je druhá varianta bezpečnější.

---

### [WARNING] „Přehled AI Performance v Bing Webmaster Tools“ — pozor na stav „public preview“

**Problémové místo:**

> „…přehled AI Performance v Bing Webmaster Tools, který od února 2026 počítá citace v Copilotu a v AI shrnutích Bingu.“

**Proč je to problém:**  
Ve zdrojích uvádíte Bing Webmaster Blog z 10. 2. 2026 s názvem „Public Preview“. Pokud je přehled stále ve veřejném preview, mělo by to být v článku řečeno. Jinak formulace působí jako plně stabilní produkt pro všechny účty.

**Návrh opravy:**  
Pokud je k 15. 9. 2026 stále v preview:

> „…přehled AI Performance v Bing Webmaster Tools, spuštěný v únoru 2026 jako veřejné preview…“

Pokud už není v preview, doplnit zdroj nebo aktualizovanou větu ve zdrojích.

---

### [WARNING] První H2 začíná negativním claimem, i když answer už je opravený

**Problémové místo:**

> „Doložené číslo pro rychlost AI SEO jsme nenašli — kolují hlavně odhady bez metodiky“

**Proč je to problém:**  
Požadavek na krátkou odpověď je splněný, ale první viditelný mezititulek článku pořád vede negací. Pro čtenáře i AI citaci je silnější začít definicí nebo rozkladem problému, až potom říct, že obecné číslo chybí.

**Návrh opravy:**  
Např.:

> „Rychlost AI SEO tvoří dva kroky — obecné doložené číslo jsme nenašli“

Nebo:

> „Rychlost AI SEO závisí na cestě do AI odpovědi a na rozhodování zákazníka“

Druhá varianta je věcnější a lépe odpovídá požadavku na samostatnou odpověď v úvodu.

---

### [TIP] Meta description je v limitu, ale stylisticky kostrbatá

**Problémové místo:**

> „Obecné číslo, za jak dlouho se AI SEO promítne do poptávek, jsme doložené nenašli.“

**Proč je to problém:**  
Není to blokující a délka je v pořádku, ale slovosled „jsme doložené nenašli“ zní nepřirozeně.

**Návrh opravy:**

> „Doložené obecné číslo, za jak dlouho se AI SEO promítne do poptávek, jsme nenašli. Z čeho se prodleva skládá a jak ji měřit v GA4, Search Console a CRM.“

---

### [TIP] CTA je dobré, ale Audit má mít jasnější vazbu na téma prodlevy

**Problémové místo:**

> „AI SEO audit za 3 600 Kč projde web v technice, obsahu a důvěryhodnosti a dá vám prioritní seznam úprav s odhadem dopadu.“

**Co je dobře:**  
CTA je konkrétní, uvádí produkt i cenu a neslibuje garantovaný výsledek.

**Návrh drobného zpřesnění:**  
Doplnit jednu větu, která CTA přímo propojí s tématem článku:

> „Součástí výstupu může být i doporučení, které ukazatele sledovat jako první podle typu webu a délky vašeho obchodního cyklu.“

Pozor: nepsat „nastavíme měření“ ani „zjistíme přesnou dobu“, pokud to audit skutečně nedělá.

---

### [TIP] Interní odkazy jsou silné, ale jeden text odkazu obsahuje technický výraz z URL kontextu

**Problémové místo:**

> „viz [robots.txt pro AI roboty](/blog/ai-crawler-robots-txt/)“

**Hodnocení:**  
Text odkazu je v pořádku, protože používá „AI roboty“, ne zakázané „crawler“ bez kontextu. Slug obsahuje „crawler“, což není problém v těle článku. Není nutná oprava.

---

## Krátké potvrzení toho, co je v pořádku

- `seoTitle` má 60 znaků a klíčové slovo je vepředu.  
- `description` je v limitu 70–160 znaků, jen potřebuje uhladit slovosled.  
- `answer` má přibližně správnou délku, začíná definicí a je samostatně srozumitelný.  
- Zakázané formulace typu garance, „lídr“, „č. 1“ nebo manipulativní urgency jsem nenašel.  
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ se v článku nevyskytují.  
- CTA vede na konkrétní produkty: AI SEO audit za 3 600 Kč a AI SEO Wireframe Pack za 1 490 Kč.  
- Aktuálnost je ukotvená k roku 2026; nevidím neukotvené „letos / příští rok“.