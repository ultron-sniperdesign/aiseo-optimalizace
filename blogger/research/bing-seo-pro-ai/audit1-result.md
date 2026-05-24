## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je dobře zaměřený, má jasný tutorialový účel, konkrétní CTA a většinou drží bezpečný tón „indexace ≠ citace“. Před publikací ale potřebuje opravit několik věcných overclaimů kolem vztahu ChatGPT ↔ Bing a IndexNow, jednu jazykovou chybu a SEO nedotažení cílového klíčového slova v titulku/H1.

---

## Nálezy a doporučené opravy

### [BLOCKER] Příliš silné tvrzení, že ChatGPT čerpá „převážně“ z Bingu

**Problémové místo:**

> „ChatGPT s webovým vyhledáváním čerpá živé výsledky převážně z indexu Bingu.“

Stejné nebo podobné tvrzení je ve frontmatteru `answer`, ve FAQ i v úvodu článku.

**Proč je to problém:**  
Vztah ChatGPT Search / webového vyhledávání a Bingu je veřejně popisovaný, ale formulace „převážně“ je silná a může být nedoložitelná bez konkrétního zdroje. Navíc OpenAI používá i vlastní vyhledávací a procházecí infrastrukturu. Bez citace nebo opatrnější formulace to působí jako faktická jistota.

**Návrh opravy:**

Použít konzistentně opatrnější formulaci:

> „Podle dostupných informací může ChatGPT s webovým vyhledáváním využívat výsledky a signály z Bingu, proto je indexace v Bingu důležitá pro dohledatelnost webu v AI vyhledávání.“

Ve frontmatteru `answer` upravit první větu například na:

> „Bing SEO pro AI znamená zajistit, aby byl web dohledatelný v indexu Bingu, který může podle dostupných informací patřit mezi zdroje využívané ChatGPT při webovém vyhledávání.“

---

### [BLOCKER] „Vstupní podmínka dohledatelnosti“ je formulováno příliš absolutně

**Problémové místo:**

> „Indexace v Bingu je vstupní podmínka dohledatelnosti, ne záruka citace.“

**Proč je to problém:**  
Věta je sice doplněná bezpečným „ne záruka citace“, ale „vstupní podmínka“ zní jako nutná podmínka. To může být nepřesné, protože AI systémy mohou web objevit i jinými cestami: vlastními vyhledávacími roboty, odkazy z jiných webů, externími zdroji nebo uživatelským procházením.

**Návrh opravy:**

Změkčit na:

> „Indexace v Bingu je důležitá technická vrstva dohledatelnosti, ne záruka citace.“

Nebo:

> „Indexace v Bingu může zvýšit šanci, že bude web při AI vyhledávání dohledatelný; sama o sobě ale nezaručuje citaci.“

Tuto opravu promítnout do `answer`, úvodu, FAQ i závěrečných částí.

---

### [BLOCKER] IndexNow je prezentovaný jako příliš jistá cesta k rychlejší indexaci

**Problémové místo:**

> „Oznámení proběhne v řádu sekund, takže se obsah dostane do indexu rychleji (řádově hodiny místo dní).“

**Proč je to problém:**  
IndexNow rychle oznamuje změnu URL, ale nezaručuje procházení, zařazení do indexu ani konkrétní čas. Ve FAQ je to později zmírněno, ale v hlavním textu je tvrzení příliš jisté.

**Návrh opravy:**

> „Oznámení proběhne v řádu sekund. Bing díky tomu může nový nebo změněný obsah objevit rychleji, ale samotné zařazení do indexu a čas zobrazení ve výsledcích nelze garantovat.“

Ve frontmatteru `stats` také upravit label:

Původně:

> `label: "IndexNow umí oznámit nový obsah Bingu"`

Lépe:

> `label: "IndexNow umí rychle oznámit změněné URL Bingu"`

---

### [WARNING] Titulek splňuje délku, ale necílí přesně hlavní KW „bing seo pro ai“

**Problémové místo:**

```yaml
title: "Bing pro AI: proč na něm záleží pro ChatGPT a jak na to"
```

**Proč je to problém:**  
Titulek má vhodnou délku, ale cílové KW je „bing seo pro ai / indexace v Bingu“. V titulku chybí slovo „SEO“, takže hlavní fráze není vepředu.

**Návrh opravy:**

Například:

```yaml
title: "Bing SEO pro AI: indexace v Bingu krok za krokem"
```

Tento návrh drží klíčové slovo vepředu a odpovídá tutorialovému záměru článku.

---

### [WARNING] H1 také neobsahuje hlavní klíčové slovo v plné podobě

**Problémové místo:**

```md
## Bing pro AI: proč na něm záleží a jak se do něj dostat
```

**Proč je to problém:**  
H1/H2 nadpis na začátku článku opakuje „Bing pro AI“, ale ne „Bing SEO pro AI“. U článku cíleného na konkrétní KW je to slabší signál.

**Návrh opravy:**

```md
## Bing SEO pro AI: proč řešit indexaci v Bingu
```

Nebo:

```md
## Bing SEO pro AI: jak dostat web do indexu Bingu
```

---

### [WARNING] Krátká odpověď má správnou délku, ale nezačíná definicí cílového pojmu

**Problémové místo:**

```yaml
answer: "ChatGPT s webovým vyhledáváním čerpá živé výsledky převážně z indexu Bingu..."
```

**Proč je to problém:**  
Délka je v pořádku — přibližně 53 slov. Odpověď je srozumitelná a samostatná, ale podle požadavku má začínat definicí. Teď začíná tvrzením o ChatGPT a navíc obsahuje problematické „převážně“.

**Návrh opravy:**

```yaml
answer: "Bing SEO pro AI je technické nastavení webu tak, aby byl dohledatelný v indexu Bingu a mohl se snáz objevit při AI vyhledávání. Základní kroky jsou ověřit web v Bing Webmaster Tools, odeslat sitemapu a zapnout IndexNow. Indexace může zvýšit šanci na dohledatelnost, ale nezaručuje citaci v ChatGPT."
```

---

### [WARNING] Frontmatter `stats` obsahuje zjednodušený claim bez opatrné formulace

**Problémové místo:**

```yaml
stats:
  - value: "Bing"
    label: "index, ze kterého čerpá ChatGPT s vyhledáváním"
```

**Proč je to problém:**  
Opět to tvrdí vztah Bing ↔ ChatGPT jako jistý a výlučný. U „stat“ boxů bývá formulace ještě výraznější než v textu, proto je potřeba být přesný.

**Návrh opravy:**

```yaml
stats:
  - value: "Bing"
    label: "důležitý index pro dohledatelnost při AI vyhledávání"
```

Nebo opatrněji:

```yaml
stats:
  - value: "Bing"
    label: "index, který může být podle dostupných informací zdrojem pro webové vyhledávání v ChatGPT"
```

První varianta je marketingově čistší a méně riziková.

---

### [WARNING] FAQ obsahuje silný claim „Bing je důležitější vstupní bránou než Google“

**Problémové místo:**

```yaml
a: "Protože ChatGPT s webovým vyhledáváním čerpá živé výsledky převážně z indexu Bingu. Pokud váš web v Bingu není, ChatGPT ho při hledání hůř najde. Bing je tak pro ChatGPT důležitější vstupní bránou než Google."
```

**Proč je to problém:**  
„Důležitější než Google“ je srovnávací claim, který by potřeboval jasný zdroj. Bez něj působí jako přehnané tvrzení.

**Návrh opravy:**

```yaml
a: "Protože Bing může být podle dostupných informací důležitým zdrojem pro webové vyhledávání v ChatGPT. Pokud web v Bingu chybí, může tím vzniknout technická překážka dohledatelnosti. Neznamená to opustit Google, ale přidat Bing jako další důležitý kanál."
```

---

### [WARNING] Chybí ukotvení tvrzení k datu u volatilního tématu

**Problémové místo:**

> „U AI je to jinak: ChatGPT při webovém vyhledávání podle dostupných informací využívá index Bingu.“

**Proč je to problém:**  
Téma se rychle mění. Frontmatter má `updated: "2026-05-24"`, což je správně, ale přímo v textu by bylo vhodné uvést časové ukotvení. Jinak může článek vypadat jako nadčasové tvrzení o infrastruktuře ChatGPT.

**Návrh opravy:**

Přidat do úvodu nebo první sekce:

> „Stav k 24. 5. 2026: veřejně dostupné informace ukazují, že Bing zůstává důležitým zdrojem pro dohledatelnost obsahu v části AI vyhledávání. Proto má smysl řešit indexaci v Bingu vedle Googlu.“

---

### [WARNING] IndexNow není jen „protokol od Microsoftu“ v plném kontextu

**Problémové místo:**

> „IndexNow je protokol od Microsoftu…“

**Proč je to problém:**  
IndexNow je spojený s Microsoft Bingem, ale jde o otevřený protokol podporovaný více vyhledávači a platformami. „Od Microsoftu“ je zjednodušení. Není fatální, ale u technického tutorialu je vhodné přesnější znění.

**Návrh opravy:**

> „IndexNow je otevřený protokol podporovaný Bingem, kterým web rychle oznamuje nové, změněné nebo smazané URL.“

---

### [WARNING] Kontrola přes `site:` je prezentovaná jako ověření indexace, ale je jen orientační

**Problémové místo:**

> „Vyhledejte `site:vasedomena.cz` přímo v Bingu a ověřte, že se stránky zobrazují.“

**Proč je to problém:**  
Operátor `site:` je užitečný orientační test, ale nemusí ukazovat úplný ani přesný stav indexace. Primární kontrolou mají být Bing Webmaster Tools.

**Návrh opravy:**

> „Vyhledejte `site:vasedomena.cz` přímo v Bingu jako orientační kontrolu. Přesnější stav indexace sledujte v Bing Webmaster Tools.“

---

### [WARNING] Interní odkaz u IndexNow míří pravděpodobně na méně přesnou stránku

**Problémové místo:**

```md
[IndexNow](/blog/ai-crawler-robots-txt/)
```

**Proč je to problém:**  
Anchor text „IndexNow“ slibuje stránku o IndexNow, ale URL podle slugu vypadá jako článek o AI crawlerech a `robots.txt`. Pokud článek opravdu není primárně o IndexNow, je to slabší interní relevance.

**Návrh opravy:**

- Pokud existuje samostatný článek o IndexNow, odkázat na něj.
- Pokud neexistuje, změnit anchor text tak, aby odpovídal cíli:

```md
Více k technickému zpřístupnění webu pro AI vyhledávání řeší článek o [AI vyhledávacích robotech a robots.txt](/blog/ai-crawler-robots-txt/).
```

---

### [WARNING] V článku je překlep / slovakismus

**Problémové místo:**

> „slabý obsah lepším nezrobí“

**Proč je to problém:**  
„Nezrobí“ je ve standardní češtině nevhodné. V technickém vzdělávacím článku to snižuje důvěryhodnost.

**Návrh opravy:**

> „slabý obsah lepším neudělá“

Nebo ještě přesněji:

> „slabý obsah kvalitnějším neudělá“

---

### [TIP] Slovo „sitemapa“ je srozumitelné, ale v technickém kontextu sjednotit s „XML sitemapou“

**Problémové místo:**

V textu se střídá:

> „sitemapu“  
> „XML sitemapa“  
> „sitemapy“

**Proč je to drobnost:**  
Není to chyba, ale u tutorialu pomůže terminologická konzistence.

**Návrh opravy:**

Při prvním výskytu:

> „XML sitemapa, tedy soubor se seznamem důležitých URL webu…“

Dále používat jednotně „XML sitemapa“ nebo „sitemap“.

---

### [TIP] Keyword `oai-searchbot` je ve frontmatteru, ale článek ho vůbec nepokrývá

**Problémové místo:**

```yaml
keywords:
  - "oai-searchbot"
```

**Proč je to problém:**  
Pokud je keyword uvedený, ale text ho nevysvětluje, může působit jako nevyužitý nebo zavádějící signál. Navíc u tématu ChatGPT a dohledatelnosti by krátká zmínka dávala smysl.

**Návrh opravy:**

Buď keyword odstranit, nebo přidat krátkou bezpečnou poznámku do sekce „Co Bing a IndexNow neudělají“:

> „Bing neřeší všechno: zároveň zkontrolujte, že v `robots.txt` zbytečně neblokujete relevantní vyhledávací roboty, například OAI-SearchBot, pokud chcete umožnit dohledatelnost obsahu pro AI vyhledávání.“

Pozor: pokud se přidá, vysvětlit pojem jako „vyhledávací robot“, ne jen technický název.

---

### [TIP] Prvních ~100 slov je použitelných jako samostatná odpověď, ale může být ještě hutnější

**Problémové místo:**

Úvod je dobrý, ale začíná claimem o ChatGPT a až poté říká, co se čtenář naučí.

**Co je dobře:**  
Úvod jasně vysvětluje problém, kroky i limit „indexace není citace“. To je pro AI citovatelnost dobré.

**Návrh zlepšení:**

Po úpravě overclaimu může první odstavec znít například:

> „Bing SEO pro AI znamená dostat web do indexu Bingu a odstranit technickou překážku dohledatelnosti v AI vyhledávání. Podle dostupných informací může ChatGPT při webovém vyhledávání využívat Bing jako jeden z důležitých zdrojů. Tento návod ukazuje tři kroky: ověření webu v Bing Webmaster Tools, odeslání XML sitemapy a zapnutí IndexNow.“

---

### [TIP] CTA je konkrétní a v zásadě splňuje zadání

**Místo:**

> „Když chcete celý web připravit na AI vyhledávání, pomůže [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Pro plán na míru je tu produktový [AI SEO audit za 9 990 Kč](/audit/).“

**Hodnocení:**  
Dobře: CTA není generické „kontaktujte nás“, vede na konkrétní produkty a uvádí ceny.

**Drobný návrh opravy:**  
Vzhledem k tutorialu bych zvýraznil volbu podle potřeby:

> „Pokud chcete nastavení promítnout do struktury webu a obsahu, použijte [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Pokud potřebujete zkontrolovat indexaci, technické překážky a AI viditelnost celého webu, objednejte [AI SEO audit](/audit/) za 9 990 Kč.“

---

## Shrnutí hlavních oprav před publikací

1. Změkčit všechny formulace „ChatGPT čerpá převážně z Bingu“.  
2. Nahradit „vstupní podmínka“ méně absolutním „důležitá technická vrstva / může zvýšit šanci“.  
3. U IndexNow jasně oddělit rychlé oznámení URL od samotné indexace.  
4. Upravit title a H1 tak, aby začínaly „Bing SEO pro AI“.  
5. Opravit „nezrobí“.  
6. Zpřesnit `stats`, FAQ a úvod kvůli citovatelnosti a věcné opatrnosti.