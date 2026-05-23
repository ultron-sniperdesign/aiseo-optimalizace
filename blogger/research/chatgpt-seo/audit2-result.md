## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou výrazně lepší, ale článek stále obsahuje několik věcných zkratů a nedoložených čísel. Největší problém je, že se v části textu dál plete role `GPTBot` s vyhledávací citovatelností v ChatGPT Search. Druhý zásadní problém: článek pracuje s „analýzami 2025–2026“, „šesti signály“ a „dvěma třetinami AI citací“, ale bez konkrétních zdrojů.

---

## Nálezy

### [BLOCKER] `GPTBot` je pořád prezentovaný jako součást způsobilosti pro citace

**Problémové místo:**

> `answer: "... technická způsobilost (povolený GPTBot, indexace v Bingu) ..."`

> `stats: ... "gptbot"`

> `## Krok 1: Buďte vůbec způsobilí (GPTBot + Bing)`

> `howto: "V souboru robots.txt neblokujte relevantní vyhledávací roboty OpenAI (vedle GPTBota hlavně OAI-SearchBot a ChatGPT-User)..."`

**Proč je to problém:**

Oprava po 1. auditu sice v textu vysvětluje rozdíl mezi `GPTBot`, `OAI-SearchBot` a `ChatGPT-User`, ale frontmatter, howto i nadpis dál podsouvají, že „povolený GPTBot“ je technická podmínka pro citace v ChatGPT s vyhledáváním. To je zavádějící.

`GPTBot` je primárně robot pro tréninkové účely. Pro dohledatelnost v ChatGPT Search jsou relevantnější `OAI-SearchBot` a případně `ChatGPT-User` pro načtení na vyžádání. Povolení `GPTBot` samo o sobě nezajišťuje citace v ChatGPT Search.

**Návrh opravy:**

Ve frontmatteru změnit answer například takto:

> „Technická způsobilost znamená hlavně neblokovat relevantní vyhledávací roboty OpenAI, zejména OAI-SearchBot, a ověřit dohledatelnost webu ve vyhledávacích indexech včetně Bingu.“

Nadpis změnit:

> `## Krok 1: Buďte dohledatelní pro OpenAI vyhledávání a Bing`

Howto krok změnit:

> „V robots.txt zkontrolujte hlavně pravidla pro OAI-SearchBot a načítání obsahu přes ChatGPT-User. GPTBot je primárně určený pro tréninkové účely, proto jeho povolení samo o sobě neznamená, že vás ChatGPT Search bude citovat.“

---

### [BLOCKER] Nedoložený číselný claim „dvě třetiny AI citací“

**Problémové místo:**

> „podle analýz pochází **zhruba dvě třetiny AI citací z cizích zdrojů**, ne z vlastního webu.“

**Proč je to problém:**

Jde o konkrétní číselné tvrzení, ale článek neuvádí zdroj, metodiku, vzorek, typ AI odpovědí, jazyk ani období. V podobě „podle analýz“ je to pro odborný článek slabé a může působit jako vymyšlená statistika.

**Návrh opravy:**

Buď doplnit konkrétní zdroj:

> „Podle [název analýzy, rok, odkaz] pocházela ve sledovaném vzorku většina citovaných zdrojů z externích webů, ne z vlastního webu značky.“

Nebo claim změkčit bez čísla:

> „V řadě analýz AI citací se opakuje, že externí zdroje — recenze, oborové weby, srovnávače a diskuse — hrají významnou roli. Nestačí proto optimalizovat jen vlastní web.“

---

### [WARNING] Frontmatter `stats` vrací zpět overclaim „6 faktorů, podle kterých ChatGPT vybírá zdroje“

**Problémové místo:**

```yaml
stats:
  - value: "6"
    label: "faktorů, podle kterých ChatGPT vybírá zdroje"
```

**Proč je to problém:**

V těle článku už správně píšete:

> „Nejde o oficiální algoritmus...“

Ale `stats` stále tvrdí, že jde o „faktory, podle kterých ChatGPT vybírá zdroje“. To působí jako znalost algoritmu, kterou nemáte doloženou.

**Návrh opravy:**

Změnit label na:

> „signálů, které v analýzách často souvisejí s citacemi“

Nebo:

> „oblastí, které mohou ovlivnit citovatelnost v ChatGPT“

---

### [WARNING] Nadpis „Jak ChatGPT vybírá, koho cituje“ slibuje víc, než článek může doložit

**Problémové místo:**

> `## Jak ChatGPT vybírá, koho cituje`

**Proč je to problém:**

Nadpis naznačuje, že znáte mechanismus výběru citací. V textu pak správně říkáte, že nejde o oficiální algoritmus. Nadpis by měl být opatrnější.

**Návrh opravy:**

> `## Signály, které s citacemi v ChatGPT často souvisejí`

Nebo:

> `## Co podle analýz zvyšuje šanci na citaci v ChatGPT`

---

### [WARNING] Claim o Bingu je stále příliš jistý

**Problémové místo:**

> „ChatGPT s vyhledáváním patří mezi nástroje, které pro živé výsledky využívají i index Bingu.“

> „bez dohledatelnosti v Bingu se ChatGPT k vašemu obsahu dostává hůř.“

**Proč je to problém:**

Bing je relevantní zdroj a kontrola v Bing Webmaster Tools dává smysl. Formulace ale pořád zní příliš jistě: jako by bylo jasné, kdy a jak přesně ChatGPT Search používá Bing index. Pokud k tomu nemáte aktuální veřejný zdroj pro rok 2026, je lepší formulaci změkčit.

**Návrh opravy:**

> „Bing je důležitý kontrolní zdroj pro dohledatelnost v AI vyhledávání. Proto má smysl ověřit indexaci v Bing Webmaster Tools, odeslat sitemapu a odstranit technické překážky.“

A místo:

> „bez dohledatelnosti v Bingu se ChatGPT k vašemu obsahu dostává hůř“

použít:

> „pokud web není dohledatelný ani v Bingu, může to snížit šanci, že se dostane do zdrojů používaných AI vyhledáváním.“

---

### [WARNING] Chybí konkrétní zdroje k „veřejným analýzám z let 2025–2026“

**Problémové místo:**

> „Ve veřejných analýzách z let 2025–2026 se opakuje zhruba šest signálů...“

> „Podle analýz z let 2025–2026 se výsledky v Googlu a citace v ChatGPT překrývají jen z menší části...“

**Proč je to problém:**

Článek se opírá o externí analýzy, ale žádnou nejmenuje. U vzdělávacího obsahu v AI/SEO tématu je to slabina věcné důvěryhodnosti i citovatelnosti.

**Návrh opravy:**

Doplnit krátkou sekci nebo poznámku typu:

> „Zdroje k trendům citací: [konkrétní studie / analýza / nástroj], [rok], [odkaz]. Čísla se liší podle trhu, jazyka a typu dotazu.“

Pokud zdroje nechcete uvádět, změkčit formulace:

> „V dostupných oborových pozorováních se často opakují tyto oblasti...“

A odstranit konkrétnější tvrzení typu „jen z menší části“, pokud není doložené.

---

### [WARNING] „Čerstvost zvyšuje šanci na citaci“ je v howto formulované příliš obecně

**Problémové místo:**

```yaml
text: "Pravidelně testujte dotazy v ChatGPT, sledujte podíl zmínek a klíčové stránky aktualizujte — čerstvost zvyšuje šanci na citaci."
```

**Proč je to problém:**

V těle článku už je formulace opatrnější:

> „u dotazů, kde záleží na aktuálnosti, může pravidelně obnovovaný obsah zvýšit šanci na citaci.“

Howto je ale kategorické. Ne u všech dotazů rozhoduje čerstvost.

**Návrh opravy:**

> „Pravidelně testujte dotazy v ChatGPT, sledujte podíl zmínek a u témat, kde záleží na aktuálnosti, kontrolujte data, ceny, nástroje a FAQ.“

---

### [WARNING] Statistika „30 dní“ může působit jako univerzální doporučení

**Problémové místo:**

```yaml
- value: "30 dní"
  label: "doporučený cyklus aktualizace klíčových stránek"
```

**Proč je to problém:**

V těle článku je to vysvětlené lépe jako „měsíční kontrola“ u nejdůležitějších stránek. Ve frontmatteru ale „doporučený cyklus aktualizace“ zní, jako by každou klíčovou stránku bylo nutné aktualizovat každých 30 dní. To není univerzálně pravda.

**Návrh opravy:**

> `label: "měsíční kontrola nejdůležitějších stránek"`

Nebo:

> `label: "praktický interval pro kontrolu klíčových stránek"`

---

### [WARNING] „ChatGPT dává přednost zdrojům...“ zní jako znalost interní preference

**Problémové místo:**

> „ChatGPT dává přednost zdrojům, které v daném tématu publikují konzistentně a dají se rozpoznat jako důvěryhodná entita.“

**Proč je to problém:**

Smysl je správný, ale formulace tvrdí, že znáte preferenci systému. Bez zdroje je bezpečnější mluvit o tom, co se v citacích častěji objevuje.

**Návrh opravy:**

> „V citacích ChatGPT se častěji objevují zdroje, které v daném tématu publikují konzistentně a dají se rozpoznat jako důvěryhodná entita.“

Nebo opatrněji:

> „Konzistentní tematický obsah a jasná identita značky mohou zvýšit šanci, že AI systém web vyhodnotí jako relevantní zdroj.“

---

### [WARNING] „Dlouhodobě rozhoduje nejvíc“ je nedoložený superlativ

**Problémové místo:**

> „Ale dlouhodobě rozhoduje nejvíc.“

**Proč je to problém:**

Tvrzení se týká zmínek mimo vlastní web. Je pravděpodobné, že jsou důležité, ale „rozhoduje nejvíc“ je nedoložený absolutní claim.

**Návrh opravy:**

> „Dlouhodobě ale patří mezi nejsilnější signály důvěryhodnosti.“

Nebo:

> „U konkurenčních dotazů může být právě externí potvrzení značky rozdílem mezi zmínkou a ignorováním.“

---

### [TIP] `answer` má dobrou strukturu, ale obsahuje problematický výraz „povolený GPTBot“

**Problémové místo:**

```yaml
answer: "... technická způsobilost (povolený GPTBot, indexace v Bingu) ..."
```

**Co je dobře:**

- Má 59 slov, tedy splňuje rozsah 40–60 slov.
- Začíná definicí.
- Dává samostatný smysl.
- Obsahuje bezpečnostní větu „Zaručit citaci nelze...“

**Co opravit:**

Nahradit „povolený GPTBot“ přesnější formulací:

> „technická způsobilost, tedy dostupnost pro relevantní vyhledávací roboty OpenAI a dohledatelnost ve vyhledávacích indexech“

---

### [TIP] FAQ je použitelné, ale dvě odpovědi začínají slabě nebo negativně

**Problémové místo:**

> „Neřešte jen GPTBot.“

> „Nestačí, i když pomáhají.“

**Proč je to problém:**

Není to formální blocker, ale pro citovatelnost je lepší, když FAQ odpovědi začínají samostatnou přímou větou, ne negací nebo imperativem.

**Návrh opravy:**

U otázky „Které roboty OpenAI mám pustit na web?“:

> „Pro ChatGPT s vyhledáváním jsou nejdůležitější pravidla pro OAI-SearchBot a načítání obsahu přes ChatGPT-User. GPTBot je primárně určený pro tréninkové účely, proto ho neberte jako hlavní signál citovatelnosti v ChatGPT Search.“

U otázky „Stačí dobré pozice v Googlu?“:

> „Dobré pozice v Googlu mohou pomoci, ale samy o sobě citace v ChatGPT nezajišťují. Překryv mezi výsledky v Googlu a citacemi v ChatGPT se podle oborových analýz liší podle tématu, jazyka a typu dotazu.“

---

### [TIP] SEO základ je v pořádku

**Co je dobře:**

- Titulek má cca 55 znaků a začíná klíčovým slovem „ChatGPT SEO“.
- Meta description je pod 160 znaků a shrnuje obsah.
- Slug `chatgpt-seo` je smysluplný.
- H2 struktura je logická.
- Interní odkazy jsou relevantní: `/blog/ai-seo-audit/`, `/aeo/`, pillar content, `/pack/`, `/audit/`.
- CTA vede na konkrétní produkty a ceny: Pack 1 490 Kč, audit 9 990 Kč.

**Drobná úprava:**

Po opravě nadpisu „Jak ChatGPT vybírá...“ bude SEO i věcná přesnost silnější.

---

### [TIP] CTA je konkrétní a odpovídá zadání

**Problémové místo:** žádné zásadní.

**Co je dobře:**

> „AI SEO Wireframe Pack... za 1 490 Kč“

> „AI SEO audit na míru... za 9 990 Kč“

CTA není generické „kontaktujte nás“ a nenese přehnaný slib typu „zaručíme citace“. To je v pořádku.

---

## Shrnutí nutných oprav před publikací

Před publikací bych opravil hlavně:

1. Všude odstranit dojem, že `GPTBot` je hlavní technická podmínka pro citace v ChatGPT Search.  
2. Přeformulovat `stats` u „6 faktorů“ na „6 signálů“.  
3. Doplnit zdroje k analýzám 2025–2026, nebo výrazně změkčit tvrzení.  
4. Odstranit nebo doložit claim „dvě třetiny AI citací“.  
5. Změkčit formulace o Bingu, pokud nemáte aktuální veřejný zdroj.  
6. Upravit howto a frontmatter, protože právě tyto části budou často používané pro strukturované výstupy.