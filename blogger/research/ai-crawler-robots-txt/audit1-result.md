## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je prakticky použitelný a má dobrou strukturu tutorialu, ale před publikací potřebuje opravit několik věcných a formulačních rizik. Největší problémy: příliš absolutní formulace kolem citovatelnosti a Google-Extended, nepřesné označení Google-Extended jako „robot“, nedoložené tvrzení o Bytespideru, příliš dlouhá meta description a slabší technická přesnost u „tvrdého blokování“.

---

## Nálezy a návrhy oprav

### [BLOCKER] Google-Extended je prezentovaný jako robot, i když jde hlavně o řídicí token v robots.txt

**Problémové místo:**

> `Google-Extended | Google | trénink generativních modelů (ne indexace)`

a opakovaně:

> „Kteří AI roboti dnes chodí na web“

**Proč je to problém:**  
Google-Extended není běžný vyhledávací robot typu Googlebot. Google ho dokumentuje jako samostatný produktový token pro `robots.txt`, kterým vlastník webu řídí využití obsahu pro určité generativní AI produkty. Formulace „chodí na web“ je u Google-Extended zavádějící.

**Návrh opravy:**  
V tabulce a textu odlišit „roboty“ od „řídicích tokenů v robots.txt“.

Např. upravit řádek:

> `Google-Extended | Google | token v robots.txt pro řízení využití obsahu v generativních AI produktech Google; nejde o klasického robota pro indexaci`

A nadpis tabulky změnit např. na:

> „Kteří AI roboti a řídicí tokeny se v robots.txt řeší“

---

### [BLOCKER] Tvrzení o Google-Extended je příliš absolutní

**Problémové místo:**

> „Můžete tedy klidně zakázat Google-Extended a zůstat v Google Search beze změny.“

**Proč je to problém:**  
Bezpečné je říct, že podle dokumentace Google nemá Google-Extended vliv na běžné procházení, indexaci a pozice v Google Search. Formulace „zůstat beze změny“ je ale příliš absolutní — výsledky ve vyhledávání mohou ovlivňovat jiné faktory.

**Návrh opravy:**

> „Podle dokumentace Google blokace Google-Extended neřídí běžné procházení, indexaci ani hodnocení v Google Search; ty zajišťuje Googlebot. Neznamená to ale garanci, že se výkon ve vyhledávání nikdy nezmění z jiných důvodů.“

---

### [BLOCKER] Nedoložené a příliš silné tvrzení o Bytespideru

**Problémové místo:**

> „Někteří roboti pravidla ignorují — například Bytespider podle dat z roku 2024 tvořil většinu AI crawler trafficu a pravidla často nedodržoval.“

**Proč je to problém:**  
Tvrzení je konkrétní a reputačně citlivé. Bez uvedení zdroje, metodiky a přesného rozsahu je nedoložitelné. Navíc „většinu AI crawler trafficu“ může platit jen pro konkrétní dataset, ne obecně pro celý web.

**Návrh opravy:**  
Doplnit zdroj přímo v textu nebo formulaci zjemnit.

Např.:

> „Podle veřejně citovaných dat z roku 2024 z vybraných datasetů patřil Bytespider mezi nejaktivnější AI roboty a u části měření se objevovalo časté nerespektování pravidel robots.txt.“

Ještě lépe přidat odkaz na zdroj do věty nebo sekce „Zdroje“.

---

### [WARNING] Meta description je příliš dlouhá

**Problémové místo:**

```yaml
description: "Jak přes robots.txt řídit přístup AI robotů (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended) — kdy je povolit, kdy omezit a kde robots.txt nestačí."
```

**Proč je to problém:**  
Meta description má cca 180+ znaků, tedy je nad doporučeným rozsahem 70–160 znaků. Ve výsledcích vyhledávání se pravděpodobně zkrátí.

**Návrh opravy:**  
Zkrátit, zachovat hlavní KW a benefit.

Např.:

```yaml
description: "Robots.txt pro AI roboty: jak povolit citace, omezit trénink a kdy použít server nebo firewall."
```

---

### [WARNING] Cílové klíčové slovo „robots.txt pro AI“ není v titulku dostatečně vpředu

**Problémové místo:**

```yaml
title: "AI roboti a robots.txt: povolte nebo omezte přístup AI"
```

**Co je dobře:**  
Titulek má vhodnou délku, cca 54 znaků.

**Proč je to problém:**  
Cílové KW je „ai crawler / robots.txt pro ai“. Titulek začíná „AI roboti“, ale přesnější výraz „robots.txt pro AI“ není vpředu.

**Návrh opravy:**  
Např.:

```yaml
title: "Robots.txt pro AI roboty: povolit, nebo omezit?"
```

Nebo:

```yaml
title: "Robots.txt pro AI: jak řídit přístup robotů"
```

---

### [WARNING] Termín „AI crawler traffic“ porušuje brand slovník

**Problémové místo:**

> „Bytespider podle dat z roku 2024 tvořil většinu AI crawler trafficu…“

**Proč je to problém:**  
Ve slovníku je zakázané používat „crawler/bot“ bez kontextu. Zde je navíc zbytečný anglicismus „traffic“.

**Návrh opravy:**

> „Bytespider podle dat z roku 2024 tvořil významnou část návštěvnosti od AI robotů…“

Případně:

> „…významnou část provozu od vyhledávacích a AI robotů…“

---

### [WARNING] „User-agent“ ve frontmatteru není vysvětlený

**Problémové místo:**

```yaml
text: "Z logů serveru nebo statistik zjistěte, jaké AI user-agenty se na web připojují..."
```

**Proč je to problém:**  
„User-agent“ je technický termín. Pro tutorial je vhodné ho vysvětlit jako identifikátor robota.

**Návrh opravy:**

```yaml
text: "Z logů serveru nebo statistik zjistěte, jaké identifikátory robotů (user-agenty) se na web připojují..."
```

---

### [WARNING] „Pusťte vyhledávací roboty = budete citovaní“ je příliš silný claim

**Problémové místo:**

> „Pokud chcete být citovaní v AI odpovědích, nechte projít hlavně vyhledávací roboty.“

a ve FAQ:

> „Pokud chcete být citovaní v ChatGPT a Perplexity, vyhledávací roboty pusťte.“

**Proč je to problém:**  
Povolení robota nezaručuje citaci. Jen zvyšuje šanci, že služba stránku najde nebo načte. Citovatelnost závisí také na kvalitě obsahu, autoritě, dostupnosti stránky, rychlosti, duplicitách a konkrétním AI systému.

**Návrh opravy:**

> „Pokud chcete zvýšit šanci, že vás AI nástroje najdou a případně ocitují, nechte projít vyhledávací roboty.“

A ve FAQ:

> „Pokud chcete zvýšit šanci na citace v nástrojích typu ChatGPT Search nebo Perplexity, obvykle dává smysl pustit jejich vyhledávací roboty.“

---

### [WARNING] „Zakázat používání obsahu pro trénink“ přes robots.txt je formulované příliš silně

**Problémové místo:**

> „Pokud nechcete, aby se váš obsah používal k tréninku modelů, zakažte tréninkové roboty…“

**Proč je to problém:**  
robots.txt je dobrovolný signál. Slušní provozovatelé ho mohou respektovat, ale nejde o technickou ani právní garanci, že obsah nebude nikdy použit k tréninku.

**Návrh opravy:**

> „Pokud chcete dát provozovatelům AI služeb signál, že si nepřejete využití obsahu pro trénink, omezte známé tréninkové roboty v robots.txt. Pro skutečné omezení přístupu kombinujte robots.txt s pravidly na serveru, CDN nebo firewallu.“

---

### [WARNING] „Spolehlivé blokování podle user-agentu“ je technicky slabé

**Problémové místo:**

> „Pro spolehlivé blokování je potřeba zásah na úrovni serveru, firewallu nebo CDN (blokace podle user-agentu nebo IP).“

**Proč je to problém:**  
Blokace podle user-agentu není spolehlivá, protože se dá snadno podvrhnout. Blokace podle IP je silnější, ale vyžaduje udržování rozsahů, ověřování a monitoring.

**Návrh opravy:**

> „Tvrdší blokování řešte na úrovni serveru, firewallu nebo CDN. Samotný user-agent lze podvrhnout, proto je vhodné kombinovat pravidla s ověřením IP rozsahů, rate limitingem a monitoringem logů.“

---

### [WARNING] Chybí praktická část „jak ověřit“, i když howto ji slibuje

**Problémové místo:**

```yaml
- name: "Ověřte a doplňte tvrdé blokování"
  text: "Otestujte robots.txt..."
```

V těle článku ale konkrétní ověření není.

**Proč je to problém:**  
Editorial je „tutorial (+ howto)“. Článek říká, co nastavit, ale neukazuje praktické ověření. Chybí např. kontrola dostupnosti `/robots.txt`, práce s logy, test pravidel nebo minimální kontrolní checklist.

**Návrh opravy:**  
Doplnit krátkou H2/H3 sekci, např.:

> „Jak ověřit nastavení robots.txt“

A v ní konkrétně:

- otevřít `https://domena.cz/robots.txt`,
- zkontrolovat, že soubor vrací HTTP 200,
- ověřit, že pravidla nejsou v konfliktu s `User-agent: *`,
- zkontrolovat logy serveru po nasazení,
- u tvrdší blokace sledovat 403/429 odpovědi a falešné blokace.

---

### [WARNING] Chybí upozornění, že robots.txt neslouží k ochraně soukromého obsahu

**Problémové místo:**

> „robots.txt je dobrovolná žádost, ne technická zábrana.“

**Co je dobře:**  
Základní varování je správně.

**Co chybí:**  
Důležitá praktická věc: `Disallow` nechrání soukromá data, nezabraňuje přímému přístupu na URL a může dokonce citlivé cesty zviditelnit.

**Návrh opravy:**  
Doplnit odrážku:

> „Nedávejte do robots.txt citlivé nebo neveřejné URL jako náhradu zabezpečení. Soubor je veřejný a `Disallow` nebrání přímému přístupu na stránku.“

---

### [WARNING] Tabulka míchá účely robotů příliš zjednodušeně

**Problémové místo:**

> `PerplexityBot | Perplexity | sběr dat pro odpovědi`

> `CCBot | Common Crawl | veřejný archiv webu (zdroj pro trénink LLM)`

**Proč je to problém:**  
Účely robotů se mění a jednotlivé služby rozlišují crawling pro indexaci, trénink, citace nebo načtení na vyžádání. U CCBot je přesnější říct, že Common Crawl vytváří veřejný webový dataset, který může být používán mimo jiné pro trénink modelů — ne že CCBot sám je „AI robot“ provozovaný kvůli LLM.

**Návrh opravy:**  
Upravit popisy opatrněji:

> `PerplexityBot | Perplexity | procházení webu pro indexaci a odpovědi služby Perplexity podle dokumentace provozovatele`

> `CCBot | Common Crawl | tvorba veřejného webového datasetu; data mohou být následně využívána i pro trénink modelů`

---

### [WARNING] Frontmatter `stats` obsahuje diskutabilní claim „0 Kč“

**Problémové místo:**

```yaml
- value: "0 Kč"
  label: "úprava robots.txt je zdarma"
```

**Proč je to problém:**  
Samotný soubor nevyžaduje licenci, ale úprava může stát čas vývojáře, agentury nebo administrátora. V kontextu webu prodávajícího audit/pack může působit jako zjednodušený marketingový claim.

**Návrh opravy:**

```yaml
- value: "bez licence"
  label: "robots.txt je veřejný textový soubor"
```

Nebo:

```yaml
- value: "nízká náročnost"
  label: "základní úprava bývá technicky jednoduchá"
```

---

### [WARNING] Nadpis „Chci být citovatelný“ je příliš absolutní

**Problémové místo:**

> „## Chci být citovatelný: pusťte vyhledávací roboty“

**Proč je to problém:**  
Působí jako přímý vztah příčina → výsledek. Brand voice má používat bezpečné claimy typu „může zvýšit šanci“.

**Návrh opravy:**

> „## Chci zvýšit šanci na citace: pusťte vyhledávací roboty“

---

### [WARNING] FAQ odpověď u llms.txt začíná negací a je méně citovatelná

**Problémové místo:**

```yaml
a: "Ne jako řízení přístupu. llms.txt je návrh formátu..."
```

**Proč je to problém:**  
FAQ má být sebestačné a dobře citovatelné. Odpověď začínající „Ne“ je méně vhodná pro AI citaci než definice.

**Návrh opravy:**

```yaml
a: "llms.txt je návrh formátu pro popis důležitého obsahu webu pro AI nástroje, ne nástroj na řízení přístupu. Podle dostupných informací ho velcí roboti k roku 2026 spolehlivě nepoužívají. Pro blokování používejte robots.txt, serverová pravidla nebo firewall."
```

---

### [TIP] Krátká odpověď ve frontmatteru je dobrá, ale lze ji zpřesnit

**Problémové místo:**

```yaml
answer: "Přístup AI robotů řídíte hlavně přes soubor robots.txt..."
```

**Co je dobře:**  
Má cca 40–60 slov, začíná definicí/praktickou odpovědí a dává smysl samostatně.

**Co zlepšit:**  
Slova „povolíte nebo zakážete“ jsou trochu silná, protože robots.txt není vynutitelný zámek.

**Návrh opravy:**

> „Robots.txt pro AI je veřejný soubor v kořeni webu, kterým dáváte robotům jako GPTBot, OAI-SearchBot, ClaudeBot nebo PerplexityBot pravidla pro procházení. Rozlišujte roboty pro trénink, vyhledávání a načtení na vyžádání. Robots.txt je ale žádost, ne zámek; tvrdší blokování řešte na serveru, CDN nebo firewallu.“

---

### [TIP] Prvních 100 slov těla funguje dobře

**Pozitivní nález:**  
Úvod jasně říká, co článek řeší, a dobře odlišuje téma od Google AI Overviews:

> „Pozor na záměnu: tohle není o vypínání Google AI Overviews…“

**Drobné zlepšení:**  
Do prvního odstavce lze přidat přesnější cílový výraz „robots.txt pro AI“, aby úvod lépe odpovídal KW.

Např.:

> „Tento návod ukazuje, jak nastavit robots.txt pro AI roboty…“

---

### [TIP] Interní odkazy a CTA jsou splněné

**Pozitivní nález:**  
Článek obsahuje relevantní interní odkazy:

- `/blog/jak-vypnout-ai-overview/`
- `/blog/chatgpt-seo/`
- `/blog/ai-seo-audit/`
- `/blog/seo-pro-ai/`
- `/pack/`
- `/audit/`

CTA je konkrétní a směřuje na produkty:

> „AI SEO Wireframe Pack za 1 490 Kč“  
> „AI SEO audit za 9 990 Kč“

To odpovídá zadání. Není potřeba měnit.

---

### [TIP] Slug je smysluplný

**Pozitivní nález:**

```yaml
slug: "ai-crawler-robots-txt"
```

Slug je krátký, relevantní a obsahuje obě důležité části tématu. Pokud chcete víc lokalizovat na české KW, alternativou by bylo `robots-txt-pro-ai`, ale stávající slug je použitelný.

---

## Shrnutí priorit oprav

Před publikací opravit hlavně:

1. Zpřesnit Google-Extended — není klasický robot a claim o Google Search nesmí být absolutní.  
2. Doplnit zdroj nebo zjemnit tvrzení o Bytespideru.  
3. Zkrátit meta description.  
4. Změkčit sliby kolem citovatelnosti: „může zvýšit šanci“, ne „budete citovaní“.  
5. Doplnit praktickou sekci ověření nastavení robots.txt.  
6. Upozornit, že robots.txt nechrání soukromý obsah a user-agent blokace není spolehlivá.