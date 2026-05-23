## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrou informační strukturu, bezpečný základní tón a vhodný DIY intent. **Nepublikoval bych ho ale bez oprav**, protože obsahuje několik silných číselných tvrzení bez zdroje, jednu problematickou technickou pasáž k AI robotům a budoucí datum aktualizace.

---

## Nálezy

### [BLOCKER] Budoucí datum aktualizace

> `updated: "2026-05-24"`

Aktuální datum pro audit je 2026-05-23. Článek nesmí být označen jako aktualizovaný v budoucnosti.

**Návrh opravy:**  
Změnit na:

```yaml
updated: "2026-05-23"
```

nebo publikovat až po uvedeném datu.

---

### [BLOCKER] Silná statistická tvrzení bez zdrojů

> `+527 % růst návštěvnosti z AI vyhledávání (YoY)`  
> `78 % firem nemá v AI odpovědích žádnou viditelnost`  
> `50 %+ hledání v Googlu ukáže AI Overview`

Tato čísla jsou výrazná, marketingově nosná a čtenář je bude vnímat jako fakta. V článku ale není uvedeno, **odkud pocházejí, pro jaký trh, vzorek, období ani metodiku**. Bez toho jsou nedoložitelná a mohou působit zavádějícím dojmem.

Zvlášť tvrzení „50 %+ hledání v Googlu ukáže AI Overview“ je citlivé: výskyt AI Overviews se výrazně liší podle země, jazyka, typu dotazu, zařízení a oboru.

**Návrh opravy:**  
Ke každému číslu doplnit zdroj a kontext, např.:

- název studie / nástroje,
- rok,
- trh nebo jazyk,
- typ dotazů,
- odkaz na zdroj.

Pokud zdroj nemáte, čísla odstranit nebo změkčit:

> „U části informačních dotazů Google zobrazuje AI Overviews a podíl se podle oboru a trhu výrazně liší.“

---

### [BLOCKER] Neověřené zdrojové podíly pro ChatGPT, Perplexity a Google AI Overviews

> `ChatGPT | encyklopedický obsah, Wikipedia (~48 % top citací)`  
> `Perplexity | komunitní obsah, Reddit (~47 %); ~22 citací na odpověď`  
> `Google AI Overviews | YouTube a multimédia (~23 %) + klasické organické zdroje`

Tabulka působí jako přesná srovnávací analýza, ale chybí zdroj, metodika a období. Navíc taková čísla bývají velmi proměnlivá podle dotazu, jazyka, země a typu tématu.

**Návrh opravy:**  
Buď doplnit přesný zdroj a formulaci omezit:

> „V jedné analýze z roku 2025 se u sledovaného vzorku dotazů často objevovaly tyto typy zdrojů…“

nebo tabulku převést na kvalitativní doporučení bez procent:

| Platforma | Co při auditu sledovat |
|---|---|
| ChatGPT | zda odpověď uvádí značky, weby a zdroje relevantní pro obor |
| Perplexity | jaké zdroje cituje přímo v odpovědi |
| Google AI Overviews | zda se zobrazí AI Overview a které stránky jsou citované |

---

### [BLOCKER] Problematická formulace k Google-Extended a citovatelnosti

> `V souboru robots.txt zkontrolujte, že nevědomky neblokujete roboty, na kterých záleží:`  
> `Google-Extended (Google pro trénink a AI funkce)`

Tahle část je technicky zjednodušená až zavádějící. `Google-Extended` není běžný vyhledávací robot pro indexaci webu jako Googlebot. Slouží jako kontrolní token pro využití obsahu v určitých AI produktech Googlu, ne jako jednoduché pravidlo „povolit = budete citovatelní v AI Overviews“.

Také u OpenAI a dalších platforem je rozdíl mezi roboty pro trénink, vyhledávání, uživatelské načítání a citování. Povolení robota **nezaručuje** citaci.

**Návrh opravy:**  
Přeformulovat na přesnější a bezpečnější variantu:

> „V `robots.txt` ověřte, že omylem neblokujete relevantní vyhledávací roboty a AI-related user agenty. Rozlišujte ale mezi roboty pro indexaci, trénink a živé načítání obsahu. Povolení přístupu samo o sobě nezaručuje citaci, pouze odstraňuje technickou překážku.“

U Google-Extended doplnit poznámku:

> „`Google-Extended` je kontrola využití obsahu pro některé AI funkce Googlu; není to totéž jako klasická indexace pro Google Search.“

---

### [WARNING] „Zadejte dotazy do Google AI Overviews“ není přesné

> `zadejte je do ChatGPT, Perplexity a Google AI Overviews`

Google AI Overviews není samostatný vyhledávač ani nástroj, do kterého se přímo zadávají dotazy. Uživatel zadává dotaz do Googlu a AI Overview se může, ale nemusí zobrazit.

**Návrh opravy:**  
Upravit ve frontmatteru i v těle:

> „Zadejte dotazy do ChatGPT, Perplexity a do Googlu. U Googlu zaznamenejte, zda se pro dotaz zobrazí AI Overview a které zdroje cituje.“

---

### [WARNING] „Až 28 % nejcitovanějších stránek v ChatGPT…“ bez zdroje a s nejasnou metrikou

> `Až 28 % nejcitovanějších stránek v ChatGPT nemá žádnou organickou viditelnost v Googlu.`

Tvrzení je zajímavé, ale bez zdroje je nedoložitelné. Navíc v článku se metrika střídá:

> `nemá žádnou organickou viditelnost v klasickém Googlu`  
> `nemá v Googlu žádný organický provoz`

Viditelnost a provoz nejsou totéž.

**Návrh opravy:**  
Sjednotit metriku a doplnit zdroj. Například:

> „Podle [zdroj, rok] mělo ve sledovaném vzorku až 28 % často citovaných URL v ChatGPT nulovou nebo velmi nízkou organickou viditelnost v Googlu.“

Pokud zdroj nemáte, změkčit:

> „Některé analýzy ukazují, že stránky citované v AI odpovědích nemusí zároveň patřit mezi nejsilnější výsledky v klasickém organickém vyhledávání.“

---

### [WARNING] Tvrzení o llms.txt je příliš kategorické

> `podle dat z roku 2025 ho velcí roboti prakticky nenavštěvují`

Bez uvedení zdroje je to silné technické tvrzení. Navíc situace kolem `llms.txt` se může rychle měnit a v roce 2026 může být stav jiný podle konkrétních platforem.

**Návrh opravy:**  
Doplnit zdroj a zjemnit:

> „Podle dostupných analýz z roku 2025 nebylo plošné využívání `llms.txt` velkými AI platformami prokázané. V roce 2026 ho proto berte jako doplněk, ne jako hlavní prioritu.“

---

### [WARNING] Nepodložené tvrzení o vlivu strukturovaných dat na přesnost odpovědí

> `u modelů se přesnost odpovědí opřených o strukturovaná data v testech zvedla zhruba z 16 % na 54 %`

Číslo je velmi konkrétní, ale není uvedeno, v jakém testu, na jakých modelech, na jakém typu dat a v jakém roce. Bez zdroje je to problematické.

**Návrh opravy:**  
Buď doplnit zdroj, nebo nahradit bezpečnější formulací:

> „Strukturovaná data pomáhají vyhledávačům a AI systémům lépe pochopit typ obsahu, autora, organizaci, produkt nebo FAQ. Nezaručují citaci, ale snižují riziko špatné interpretace stránky.“

---

### [WARNING] Příliš silný slib u krátké odpovědi nahoře

> `Z téhle pasáže AI nejčastěji cituje.`

Tvrzení je absolutní a není doložené. AI systémy mohou citovat z úvodu, tabulek, FAQ, titulku, metadat nebo jiných částí stránky podle dotazu.

**Návrh opravy:**  
Změnit na bezpečnější formulaci:

> „Tahle pasáž zvyšuje šanci, že AI systém rychle pochopí hlavní odpověď stránky a použije ji jako zdroj.“

---

### [WARNING] Doporučení „odpověď v prvních ~200 slovech“ není sladěné s pravidlem webu

> `Odpověď v prvních ~200 slovech.`

V zadání auditu je uvedeno, že **prvních zhruba 100 slov těla má fungovat jako samostatná odpověď**. Článek sám toto pravidlo v úvodu splňuje poměrně dobře, ale metodické doporučení v textu a v howto kroku říká 200 slov.

**Návrh opravy:**  
Sjednotit doporučení:

> „Odpověď v prvních ~100 slovech. Hlavní dotaz stránky zodpovězte hned v úvodu; další kontext rozveďte v následujících odstavcích.“

Případně:

> „Odpověď v prvních 100–200 slovech, ideálně už v prvním odstavci.“

---

### [WARNING] Formulace „nikdo je necituje, protože…“ přehání příčinu

> `nikdo je necituje, protože na to jejich web není připravený`

Tvrzení zjednodušuje důvody, proč značka není citovaná v AI odpovědích. Důvodem může být slabá autorita značky, nedostatek zmínek z jiných webů, absence nezávislých zdrojů, malá poptávka, nevhodný typ dotazů nebo omezená dostupnost dat.

**Návrh opravy:**  
Změnit na:

> „Často je AI systémy necitují mimo jiné proto, že web nemá dostatečně srozumitelný, strukturovaný a ověřitelný obsah.“

---

### [WARNING] „Buď jste mezi nimi vy, nebo konkurence“ je zbytečně nátlakové

> `Buď jste mezi nimi vy, nebo místo vás konkurence.`

Tón se posouvá k manipulačnímu strachu. Není to extrémní, ale pro edukativní brand voice je vhodnější věcnější formulace.

**Návrh opravy:**  
Například:

> „Pokud se vaše značka mezi citovanými zdroji neobjevuje, je užitečné zjistit, které zdroje AI systémy preferují a proč.“

---

### [WARNING] Závěrečné CTA neuvádí cenu auditu na míru

> `[AI SEO audit na míru](/audit/) přímo pro váš web`

CTA správně odkazuje na Pack i audit a nekanibalizuje přehnaně landing page. Chybí ale cena u auditu, zatímco zadání uvádí konkrétní produkt **AI SEO audit na míru za 9 990 Kč**.

**Návrh opravy:**  
Doplnit stručně bez tvrdého prodeje:

> „Pokud nechcete řešit implementaci sami, dává smysl navázat [AI SEO auditem na míru](/audit/) za 9 990 Kč přímo pro váš web.“

---

### [TIP] Meta title je v pořádku

> `title: "AI SEO audit webu: co kontrolovat pro viditelnost v AI"`

Titulek má přibližně 53 znaků, klíčové slovo je na začátku a odpovídá informačnímu intentu. Bez nutné opravy.

---

### [TIP] Meta description je v pořádku délkou i intentem

> `description: "Praktický AI SEO audit krok za krokem: zjistěte, jestli vás citují ChatGPT, Perplexity a Google AI Overviews — a co na webu opravit pro lepší viditelnost."`

Popis je v rozumné délce, obsahuje klíčové slovo a jasně říká, co čtenář získá. Pouze po opravě výše doporučuji upravit část o Google AI Overviews:

> „…zjistěte, jestli vás zmiňují ChatGPT, Perplexity a Google AI Overviews…“

nebo přesněji:

> „…zjistěte, jestli vás zmiňují ChatGPT, Perplexity a AI odpovědi v Googlu…“

---

### [TIP] Frontmatter `answer` splňuje požadavek na krátkou odpověď

> `answer: "AI SEO audit je strukturovaná kontrola..."`

Odpověď má přibližně 53 slov, začíná definicí a dává samostatný smysl. To je v souladu s požadavkem na citovatelnost pro AI.

---

### [TIP] První odstavec těla je použitelný jako samostatná odpověď

> `AI SEO audit projde pět vrstev...`

Úvod rychle vysvětluje proces, rozsah i praktický výstup. Je věcný a dobře použitelný pro AEO/GEO styl. Jen bych zvážil zjemnění formulace:

> `většinu během jednoho odpoledne`

na:

> „první průchod většinou zvládnete během jednoho odpoledne“

aby to nepůsobilo jako univerzální slib pro velké weby.

---

### [TIP] Použití názvu „Schema Markup Validator“ je hraniční vůči slovníku webu

> `Schema Markup Validator`

V obecném textu je zakázaný termín „schema markup“, ale tady jde o název nástroje. Přesto bych ho pro konzistenci doplnil českým vysvětlením.

**Návrh opravy:**

> „Ověřte to v Testu rozšířených výsledků a ve validátoru strukturovaných dat Schema.org.“

Případně:

> „…ve validátoru strukturovaných dat Schema.org, tedy nástroji Schema Markup Validator.“

---

### [TIP] Interní odkazy jsou relevantní

Odkazy na SEO audit, SEO/GEO/AEO/AIO průvodce, omezení AI Overview, pilířový obsah, GEO, Pack a Audit dávají smysl a odpovídají tématu. Slug `ai-seo-audit` je také vhodný.

---