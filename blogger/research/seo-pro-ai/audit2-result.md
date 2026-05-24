## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z velké části zapracované dobře: titulek, slug, interní odkazy, CTA na konkrétní produkty i většina formulací kolem Bingu, AI Overviews a strukturovaných dat jsou výrazně přesnější. Zůstává ale několik problémů: hlavně mírné overclaimy, zbytkový žargon, nedoložené časové tvrzení a nejednotná práce s „výchozím měřením“.

---

## Nálezy

### [WARNING] Meta description a answer stále slibují výsledek příliš silně

**Citace:**

> „…aby web našly a citovaly ChatGPT, Perplexity i Google AI Overviews.“

> „SEO pro AI je praktický postup, jak připravit web tak, aby ho našly a citovaly AI vyhledávače…“

**Problém:**  
Formulace „aby ho našly a citovaly“ zní jako příslib výsledku. U AI citací nelze garantovat, že web bude nalezen nebo citován. Bezpečnější brand claim je „může zvýšit šanci“, „pomáhá AI lépe pochopit obsah“.

**Návrh opravy:**

Meta description např.:

> „Praktický checklist SEO pro AI éru: čím začít, co nastavit a v jakém pořadí, aby měl web vyšší šanci být dohledatelný a citovaný v AI odpovědích.“

Answer např.:

> „SEO pro AI je praktický postup, jak připravit web tak, aby ho AI nástroje a klasické vyhledávače snáz našly, pochopily a případně citovaly…“

---

### [WARNING] V článku zůstalo slovo „baseline“

**Citace:**

> „…zapište si baseline, ke kterému se budete vracet.“

> „**Přeskočit měření** — bez baseline nepoznáte, co funguje.“

**Problém:**  
V zadání je uvedeno, že „baseline“ mělo být nahrazeno výrazem „výchozí měření“. V těle i FAQ zůstává anglicismus. Navíc „baseline, ke kterému“ je gramaticky neobratné.

**Návrh opravy:**

> „…zapište si výchozí měření, ke kterému se budete vracet.“

> „**Přeskočit měření** — bez výchozího měření nepoznáte, co funguje.“

---

### [WARNING] Zůstává zakázaný / nevhodný žargon „crawlerů“

**Citace:**

> „…nejsou možnosti odděleného omezení stejné jako blokace AI crawlerů…“

**Problém:**  
Slovo „crawler“ je v brand slovníku nevhodné, pokud není vysvětlené. V článku už jinak používáte správnější „vyhledávací roboti AI služeb“, takže tady jde o nekonzistenci.

**Návrh opravy:**

> „…nejsou možnosti odděleného omezení stejné jako blokace vyhledávacích robotů AI služeb…“

---

### [WARNING] Časové tvrzení „podle dostupných pozorování“ není doložené

**Citace:**

> „Technické fixy … se podle dostupných pozorování projeví řádově v týdnech, obsahové úpravy obvykle za 1–3 měsíce.“

> „Podle dostupných pozorování se technické změny … vyplatí zkontrolovat po několika týdnech…“

**Problém:**  
„Podle dostupných pozorování“ zní jako odkaz na data nebo studii, ale žádný zdroj není uveden. Navíc FAQ formulace „se projeví“ je silnější než bezpečný claim. Lepší je držet se toho, že jde o interval pro kontrolu, ne očekávaný výsledek.

**Návrh opravy:**

Ve FAQ:

> „Technické změny má smysl zkontrolovat zhruba po 2–8 týdnech, obsahové úpravy obvykle vyhodnocujte po 1–3 měsících. Nejde o garanci výsledků, ale o praktický interval pro měření.“

V těle:

> „Jako pracovní interval si nastavte kontrolu technických změn po několika týdnech a vyhodnocení obsahových úprav po 1–3 měsících.“

---

### [WARNING] FAQ zjednodušuje kontrolu strukturovaných dat přes Google nástroj

**Citace:**

> „Test rozšířených výsledků na strukturovaná data…“

**Problém:**  
Test rozšířených výsledků nekontroluje obecně všechna strukturovaná data, ale hlavně typy podporované Googlem pro rozšířené výsledky. V těle článku je to vysvětlené správně, ve FAQ se přesnost ztrácí.

**Návrh opravy:**

> „Validátor Schema.org použijte na obecnou kontrolu strukturovaných dat; Test rozšířených výsledků se hodí pro typy, které Google podporuje.“

---

### [WARNING] E-E-A-T je použité bez vysvětlení

**Citace:**

> „…uvádějte zdroje a doložte zkušenost (E-E-A-T).“

> „**Doložitelnost** — uvádějte zdroje a ukažte zkušenost (E-E-A-T).“

**Problém:**  
E-E-A-T je odborná zkratka bez vysvětlení. Pro vzdělávací článek je lepší ji krátce rozvést, jinak působí jako žargon.

**Návrh opravy:**

> „…uvádějte zdroje a ukažte zkušenost, odbornost, autoritu a důvěryhodnost.“

Případně při prvním výskytu:

> „…ukažte zkušenost, odbornost, autoritu a důvěryhodnost — tedy principy známé jako E-E-A-T.“

---

### [WARNING] HowTo krok s Google AI Overviews potřebuje caveat k dostupnosti a personalizaci

**Citace:**

> „…ručně ověřte, jestli a jak vás zmiňují ChatGPT, Perplexity a Google AI Overviews.“

**Problém:**  
Google AI Overviews se nezobrazují u všech dotazů, mohou se lišit podle lokality, jazyka, zařízení, přihlášení a personalizace. V zadání bylo správně řešeno, že AI Overviews nelze jednoduše oddělit od běžných výsledků; tady by bylo vhodné měření ukotvit přesněji.

**Návrh opravy:**

> „…ručně ověřte, jestli a jak vás zmiňují ChatGPT, Perplexity a u dotazů, kde se zobrazí, také Google AI Overviews. Uložte přesné znění dotazu, datum, jazyk/lokalitu, nástroj a screenshot; ideálně měřte bez personalizace.“

---

### [TIP] Viditelná „krátká odpověď“ v těle článku není úplně čistá

**Citace:**

> „SEO pro AI je praktický postup… Tenhle článek není další konceptuální přehled — ten najdete…“

**Problém:**  
Frontmatter `answer` má 58 slov a splňuje požadavek 40–60 slov. Pokud ho šablona skutečně renderuje nahoře, je to v pořádku. Pokud ne, první viditelný blok článku není ideální krátká odpověď: po definici rychle přechází do navigační poznámky „ten najdete v pilíři…“.

**Návrh opravy:**  
Ověřit, že se pole `answer` renderuje jako samostatný blok nahoře. Pokud ne, vložit do těla článku hned pod H1 samostatný odstavec 40–60 slov bez interní navigace.

---

### [TIP] CTA je konkrétní, ale časový claim „během odpoledne“ bych zjemnil

**Citace:**

> „…se kterým si během odpoledne připravíte první návrh struktury pro klíčové stránky.“

**Problém:**  
Je to výrazně lepší než původní slib, ale stále jde o časové očekávání. U různě velkých webů a týmů to nemusí platit.

**Návrh opravy:**

> „…který vám pomůže připravit první návrh struktury pro klíčové stránky rychleji a systematičtěji.“

Nebo opatrnější varianta:

> „…se kterým si u menšího webu často připravíte první návrh struktury během jednoho pracovního bloku.“

---

### [TIP] FAQ odpověď „Pro koho má SEO pro AI největší smysl?“ je částečně neobratná

**Citace:**

> „Kdy víc řešit klasické pozice a kdy citace v AI rozebírá srovnání SEO vs GEO.“

**Problém:**  
Věta je gramaticky těžkopádná a v samotném FAQ není jasné, zda „srovnání SEO vs GEO“ bude odkaz. FAQ odpovědi mají být sebestačné.

**Návrh opravy:**

> „Obecně: klasické pozice řešte dál u transakčních a lokálních dotazů; AI citace mají větší prioritu u poradenských, B2B a informačních témat s delší rozhodovací fází.“

Odkaz na srovnání nechat jen v těle článku mimo FAQ, případně ho v šabloně renderovat jako skutečný link.

---

### [TIP] „AI SEO audit“ v HowTo může lehce kanibalizovat produktový audit

**Citace:**

> „Udělejte AI SEO audit: zjistěte pozice a návštěvnost…“

**Problém:**  
Zadání říká, že článek nemá kanibalizovat `/audit/`. Výraz „AI SEO audit“ je relevantní, ale v HowTo kroku může působit jako totéž co placený produkt. V těle je to řešeno odkazem na blogový návod, ale ve frontmatteru tento kontext chybí.

**Návrh opravy:**

> „Udělejte jednoduché výchozí měření: zjistěte pozice, návštěvnost a ručně ověřte zmínky v AI nástrojích.“

Placený audit pak zůstane jako navazující CTA na konci.

---

## Co je v pořádku

- Titulek má cca 51 znaků, klíčové slovo „SEO pro AI“ je na začátku.  
- Slug `seo-pro-ai` je smysluplný.  
- Meta description je délkou v pořádku, jen potřebuje zjemnit claim.  
- Struktura H2 odpovídá praktickému checklistu.  
- Interní odkazy jsou relevantní a nepůsobí náhodně.  
- CTA směřuje na konkrétní produkty: Pack 1 490 Kč a Audit 9 990 Kč.  
- Opravy kolem Bingu, Anthropic user-agentů, Google AI Overviews a strukturovaných dat jsou oproti původní verzi výrazně přesnější.