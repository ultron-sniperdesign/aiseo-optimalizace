## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z velké části správným směrem: title má vhodnou délku, meta description je v limitu, `answer` má cca 53 slov a začíná definicí, CTA směřuje na konkrétní produkty. Stále ale zůstávají faktické overclaimy a nedostatečně doložené platformové výroky, hlavně kolem Perplexity / ChatGPT / Google AI Overviews a „30–90 dní“.

---

## Nálezy

### [BLOCKER] Nedoložené „veřejné analýzy“ a Ahrefs bez konkrétní citace

**Problémové místo:**

> „Podle veřejných analýz z let 2025–2026 se u témat citlivých na aktuálnost častěji objevují nověji aktualizované zdroje — rozsáhlý rozbor citací od Ahrefs například ukázal, že obsah citovaný AI bývá čerstvější než klasické organické výsledky.“

**Problém:**  
Tvrzení je klíčový důkaz článku, ale není uveden konkrétní název studie/analýzy, datum, odkaz ani rozsah. „Veřejné analýzy z let 2025–2026“ je pořád příliš vágní. Pro článek o AI citovatelnosti je to slabé místo — AI i čtenář potřebují ověřit zdroj.

**Návrh opravy:**  
Doplnit přesný zdroj přímo do textu, např.:

> „Podle analýzy Ahrefs z [měsíc/rok, název analýzy, odkaz], která porovnávala citované zdroje v AI odpovědích a klasických výsledcích, byly u části dotazů AI citace čerstvější než organické výsledky.“

Pokud přesný zdroj nelze doložit, změkčit:

> „Některé veřejné analýzy z let 2025–2026 naznačují, že u aktuálních témat se v AI odpovědích častěji objevují nověji aktualizované zdroje.“

---

### [BLOCKER] Platformové pořadí čerstvosti je podané příliš kategoricky

**Problémové místo:**

> „Efekt je přitom nejsilnější u Perplexity, u ChatGPT závisí na typu dotazu a u Google AI Overviews bývá slabší.“

A také FAQ:

> „Podle dostupných analýz má nejsilnější vazbu na čerstvost Perplexity… Google AI Overviews má z této trojice na čerstvost nejmenší důraz.“

**Problém:**  
Tohle zní jako obecně platné pořadí platforem. Bez konkrétní metodiky je to overclaim. Chování AI odpovědí se liší podle dotazu, země, personalizace, typu zdroje, zapnutého vyhledávání a konkrétní verze produktu.

**Návrh opravy:**  
Zarámovat to jako závěr z konkrétních dostupných analýz, ne jako obecné pravidlo:

> „V dostupných analýzách citací z let 2025–2026 vychází vazba na čerstvost nejsilněji u Perplexity. U ChatGPT se liší podle typu dotazu a zapojeného vyhledávání. U Google AI Overviews bývá v analyzovaných vzorcích slabší, ale chování AI Mode se může lišit.“

Stejnou formulaci upravit i ve FAQ a ve frontmatteru `stats`.

---

### [WARNING] Tvrzení o Perplexity indexu je potenciálně nepřesné

**Problémové místo:**

> „Perplexity má na čerstvost nejsilnější vazbu — udržuje průběžně aktualizovaný index a nový obsah dokáže citovat během dní.“

**Problém:**  
„Udržuje průběžně aktualizovaný index“ může být technicky nepřesné nebo nedoložené, pokud není vysvětleno, zda jde o vlastní index, webové vyhledávání, integraci vyhledávacích zdrojů nebo kombinaci. Zbytečně to otevírá faktickou zranitelnost.

**Návrh opravy:**

> „Perplexity má podle dostupných analýz silnou vazbu na aktuálnost, protože pracuje s průběžným dohledáváním webových zdrojů a u některých dotazů může citovat novější obsah rychleji než klasické organické výsledky.“

Pokud máte zdroj pro vlastní index Perplexity, doplnit odkaz.

---

### [WARNING] „Nový obsah dokáže citovat během dní“ je nedoložené konkrétní časové tvrzení

**Problémové místo:**

> „…nový obsah dokáže citovat během dní.“

**Problém:**  
Časový údaj „během dní“ je konkrétní a čtenář ho může chápat jako očekávání výkonu. Bez zdroje nebo testu je to příliš silné.

**Návrh opravy:**  
Buď doložit vlastním testem/analýzou, nebo změkčit:

> „…novější obsah se u některých dotazů může dostat do citací relativně rychle.“

Případně:

> „…v některých veřejných testech se nový nebo aktualizovaný obsah objevil v citacích v řádu dnů, ale nejde o garantované pravidlo.“

---

### [WARNING] Statistika „30–90 dní“ je pořád slabě ukotvená

**Problémové místo ve frontmatteru:**

```yaml
stats:
  - value: "30–90 dní"
    label: "orientační okno čerstvosti z analýz; liší se podle tématu a platformy"
```

**Problém:**  
V těle článku se „30–90 dní“ dál nevysvětluje. Pokud se tahle hodnota vykreslí jako vizuální stat karta, bude působit jako tvrdý benchmark, i když je označená jako orientační. Navíc není jasné, z jakých analýz pochází.

**Návrh opravy:**  
Buď hodnotu odstranit, nebo ji vysvětlit v sekci „Jak často aktualizovat“:

> „U rychle se měnících témat se v některých analýzách jako praktické orientační okno objevuje 30–90 dní. Nejde ale o univerzální pravidlo — u stabilních témat může být vhodný interval výrazně delší.“

A doplnit zdroj. Bez zdroje raději nepoužívat jako stat kartu.

---

### [WARNING] „Samotné přepsání data není signálem čerstvosti“ je příliš absolutní

**Problémové místo ve frontmatteru `answer`:**

> „…samotné přepsání data není signálem čerstvosti a podle Googlu SEO přínos nepřináší.“

**Problém:**  
Směr je správný, ale formulace „není signálem čerstvosti“ je absolutní. Bezpečnější je říct, že samotná změna data není důkazem skutečné aktualizace a podle Googlu sama o sobě nepřináší SEO přínos.

**Návrh opravy:**

> „Klíčová je ale skutečná aktualizace hodnoty — samotné přepsání data není důkazem reálné čerstvosti a podle vyjádření Googlu samo o sobě nepřináší SEO přínos.“

Stejně upravit i Insight:

> „…samotné přepsání data bez reálné úpravy obsahu samo o sobě nepřináší SEO přínos…“

---

### [WARNING] „Čerstvost je signál“ může znít jako potvrzený ranking signál pro AI

**Problémové místo:**

> „Čerstvost je signál, ne náhrada za kvalitu.“

**Problém:**  
Jako zkratka je to srozumitelné, ale u AI vyhledávání může „signál“ působit jako technické tvrzení o fungování ranking systému. To není veřejně přesně doložitelné napříč platformami.

**Návrh opravy:**

> „Čerstvost je faktor, který může zvýšit šanci na citaci, ne náhrada za kvalitu.“

Nebo:

> „Aktuálnost může pomoct, ale nenahrazuje kvalitu, přesnost a důvěryhodnost obsahu.“

---

### [WARNING] FAQ o Googlu přisuzuje Googlu „vnímání klamavé praktiky“

**Problémové místo:**

> „Google podle vyjádření svých zástupců nepřikládá změně data bez reálné úpravy obsahu žádný SEO přínos a může ji vnímat jako klamavou praktiku.“

**Problém:**  
„Může ji vnímat jako klamavou praktiku“ je silné tvrzení. Bez přesné citace konkrétního zástupce Googlu je bezpečnější formulovat to jako riziko vůči uživatelům, ne jako potvrzenou interpretaci Googlu.

**Návrh opravy:**

> „Podle vyjádření zástupců Googlu samotná změna data bez reálné úpravy obsahu sama o sobě nepřináší SEO přínos. Navíc může působit klamavě vůči uživatelům, pokud datum neodpovídá skutečné aktualizaci stránky.“

---

### [WARNING] Úvod stále příliš zobecňuje „AI vyhledávače upřednostňují čerstvý obsah“

**Problémové místo:**

> „AI vyhledávače u řady témat upřednostňují čerstvý obsah.“

**Problém:**  
Lepší než původní verze, ale pořád to zní jako systémové pravidlo. Bezpečnější je navázat na typ dotazu a pravděpodobnost citace.

**Návrh opravy:**

> „AI vyhledávače u témat citlivých na aktuálnost často častěji citují novější nebo nedávno aktualizované zdroje.“

Nebo ještě opatrněji:

> „U témat citlivých na aktuálnost může čerstvější obsah zvýšit šanci, že se stránka objeví mezi citovanými zdroji.“

---

### [TIP] Title je SEO v pořádku, ale jazykově kostrbatý

**Problémové místo:**

```yaml
title: "Aktualizace obsahu pro AI: jak často a co měnit 2026"
```

**Hodnocení:**  
Délka je dobrá a klíčové slovo je vepředu. Formulace „co měnit 2026“ ale působí nečesky.

**Návrh opravy:**

```yaml
title: "Aktualizace obsahu pro AI: jak často a co měnit v roce 2026"
```

Délkově by to mělo stále vyjít přibližně do doporučeného rozsahu.

---

### [TIP] H2 „Která AI nejvíc řeší čerstvost“ je hovorové a méně přesné

**Problémové místo:**

```markdown
## Která AI nejvíc řeší čerstvost
```

**Problém:**  
„Která AI“ je zkratkovité a méně profesionální. Článek jinak drží věcný tón.

**Návrh opravy:**

```markdown
## Které AI platformy nejvíc pracují s čerstvostí
```

Nebo:

```markdown
## Jak se liší čerstvost u Perplexity, ChatGPT a Google AI Overviews
```

---

### [TIP] Frontmatter keyword „recency ai vyhledávání“ je žargon

**Problémové místo:**

```yaml
- "recency ai vyhledávání"
- "freshness obsahu"
```

**Problém:**  
Není to zakázaný termín, ale pro brand voice je to méně srozumitelné. V článku se jinak snažíte používat „čerstvost“ a „aktuálnost“, což je lepší.

**Návrh opravy:**

```yaml
- "aktuálnost v AI vyhledávání"
- "čerstvost obsahu"
```

`content refresh` klidně ponechat, protože je cílové KW.

---

### [TIP] Gramatika: „stránky, které ztrácí“ → „ztrácejí“

**Problémové místo:**

> „Začněte u obsahu, který ztrácí pozice nebo návštěvy…“

A v Checklistu:

> „začněte u stránek, které ztrácí pozice nebo návštěvy…“

**Problém:**  
U „stránky“ je spisovně vhodnější „ztrácejí“. Navíc u AI článku by bylo užitečné zmínit i ztrátu citací, nejen pozic/návštěv.

**Návrh opravy:**

> „Začněte u stránek, které ztrácejí pozice, návštěvnost nebo citace, a u témat, kde se fakta rychle mění.“

---

### [TIP] CTA je v pořádku

**Místo:**

> „Když chcete celý web připravit na AI vyhledávání podle hotové předlohy, pomůže AI SEO Wireframe Pack za 1 490 Kč. Pro plán na míru je tu produktový AI SEO audit za 9 990 Kč.“

**Hodnocení:**  
Splňuje požadavek: nejde o generické „kontaktujte nás“, ale o konkrétní produkty a ceny. Tohle je po opravě v pořádku.

---

## Shrnutí

Opravy po 1. auditu výrazně zlepšily tón i bezpečnost claimů, ale článek ještě není publikačně čistý. Největší problém je stále dokazování: konkrétní platformové závěry stojí na vágních „veřejných analýzách“ a nejsou přímo zdrojované. Před publikací bych doplnil přesné odkazy na Ahrefs / Google vyjádření, změkčil pořadí platforem a odstranil nebo ukotvil stat „30–90 dní“.