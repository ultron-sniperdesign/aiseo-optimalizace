## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou částečně lepší, ale článek má stále zásadní věcný problém kolem Google Search Console a AI segmentů. Bez doložení nebo přeformulování by šel ven s potenciálně nepravdivým návodem.

---

## Nálezy

### [BLOCKER] Tvrzení o samostatných segmentech AI Mode a AI Overviews v GSC je nedoložené / pravděpodobně chybné

**Citace:**

> „V Google Search Console lze sledovat samostatné segmenty AI Mode a AI Overviews…“

> „GSC od poloviny 2025 zobrazuje AI Mode a AI Overviews zvlášť“

> „Google v polovině roku 2025 přidal do GSC samostatné AI segmenty.“

> „ve filtru najdete AI Mode a AI Overviews — impressions a CTR jsou tam zvlášť.“

**Problém:**  
Toto je klíčové tvrzení celého článku. Pokud není přesně doložené oficiální dokumentací Googlu nebo spolehlivým zdrojem, je to blocker. Navíc je formulované jako jistý návod, ne jako možnost závislá na dostupnosti reportu / trhu / účtu.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj a přesné znění, nebo tvrzení změkčit. Například:

> „Pokud má váš účet v Google Search Console dostupné samostatné zobrazení pro AI prvky, sledujte je odděleně. Pokud ne, pracujte s nepřímými signály: změnou impresí, CTR, pozice, typu dotazu a výskytem AI Overviews ve výsledcích.“

A ve `stats` změnit:

> „GSC od poloviny 2025 zobrazuje AI Mode a AI Overviews zvlášť“

na bezpečnější:

> „Dostupnost reportování AI prvků v GSC se může lišit; dopad AIO je nutné ověřovat i nepřímými signály.“

---

### [BLOCKER] Vnitřní rozpor: „CTR v AI segmentech“ vs. „kliky nejde oddělit“

**Citace:**

> „Sledujte hlavně zobrazení a CTR.“

> „Samostatně dokážete sledovat impressions a CTR v rámci segmentů AI Mode a AI Overviews, ale kliky z nich se na úrovni jednotlivého prokliku od klasických neoddělují.“

> „kliky z AIO se v reportech mísí s klasickým organikem“

**Problém:**  
CTR je odvozené z kliků a zobrazení. Pokud tvrdíte, že v segmentu lze sledovat samostatné CTR, implicitně tvrdíte, že systém umí pro tento segment přiřadit kliky. Zároveň článek říká, že kliky oddělit nejde. To je pro čtenáře matoucí a metodicky problematické.

**Návrh opravy:**  
Rozlišit dvě věci:

1. zda GSC vůbec nabízí samostatný filtr / vzhled vyhledávání pro AI prvky,  
2. zda lze spolehlivě připsat konkrétní klik AI Overview oproti běžnému organickému výsledku.

Bez jistoty doporučuji přeformulovat na:

> „Pokud GSC nabízí samostatný pohled na AI prvky, berte jeho CTR jako orientační metriku daného reportu, ne jako přesné oddělení každého prokliku z AI Overview. Pro vyhodnocení proto kombinujte impresi, CTR, pozici, typ dotazu a ruční kontrolu výsledků.“

---

### [BLOCKER] Nedoložená statistika „dvě třetiny zero-click dotazů“

**Citace:**

> „Podle dostupných analýz se v roce 2026 podíl zero-click dotazů blíží dvěma třetinám.“

> „různé analýzy z let 2025–2026 ukazují, že se u části trhů přibližuje dvěma třetinám dotazů.“

**Problém:**  
Číslo „dvě třetiny“ je výrazný faktický claim. Článek ale neuvádí zdroj, trh, metodiku ani typ vyhledávání. Bez toho je tvrzení slabé a může být zavádějící.

**Návrh opravy:**  
Doplnit konkrétní zdroj přímo do textu, ideálně s metodikou. Pokud zdroj doplnit nechcete, změnit na méně tvrdé:

> „Dostupné analýzy z let 2025–2026 ukazují vysoký podíl vyhledávání bez prokliku, v některých trzích a metodikách až kolem dvou třetin dotazů. Berte to jako orientační trend, ne univerzální benchmark.“

Ještě lépe přidat větu:

> „Výsledky se liší podle trhu, zařízení, typu dotazu a metodiky měření.“

---

### [WARNING] Přetrvávají anglicismy, které už měly být odstraněné

**Citace:**

> „branded dotazy“

> „branded search“

> „AI mentions“

> „uživatel si váš brand zafixuje“

> „ztráta trafficu“

**Problém:**  
V zadání je výslovně uvedeno, že anglicismy byly opraveny, ale ve FAQ a tabulce zůstaly. Tón pak působí méně srozumitelně a méně konzistentně s brand voice.

**Návrh opravy:**

- „branded dotazy“ → „značkové dotazy“
- „branded search“ → „vyhledávání značky“
- „AI mentions“ → „zmínky v AI odpovědích“
- „brand“ → „značka“
- „traffic“ → „návštěvnost“

Konkrétně ve FAQ 5 změnit:

> „branded dotazy… branded search, AI mentions“

na:

> „značkové dotazy… vyhledávání značky, zmínky v AI odpovědích“

A v tabulce:

> „Reálná ztráta trafficu i konverzí“

na:

> „Reálná ztráta návštěvnosti i konverzí“

---

### [WARNING] Úvod stále obsahuje příliš obecný overclaim o růstu zero-click kvůli AI Overviews

**Citace:**

> „S AI Overviews jeho podíl dál roste — uživatel často nemá důvod jít na web, protože odpověď má v boxu.“

**Problém:**  
Ve frontmatteru je oprava „u řady dotazů zvyšují“, ale v těle článku je tvrzení opět plošné. AI Overviews mohou zero-click zvyšovat u mnoha informačních dotazů, ale ne univerzálně a ne vždy.

**Návrh opravy:**

> „U řady dotazů mohou AI Overviews podíl zero-click vyhledávání zvyšovat — uživatel někdy dostane dostatečnou odpověď přímo ve výsledku a nemá důvod pokračovat na web.“

---

### [WARNING] „AI rozezná značku“ je zjednodušené a působí jako nepřesný mechanismus

**Citace:**

> „zmínky a recenze jsou jedním ze způsobů, jak AI ‚rozezná‘ značku.“

**Problém:**  
Formulace naznačuje příliš přímočarý mechanismus. AI systémy nefungují tak, že jednoduše „rozeznají značku“ jen díky zmínkám a recenzím. Bez vysvětlení to působí jako zkratka.

**Návrh opravy:**

> „Zmínky a recenze mohou pomoci posílit důvěryhodnost a dohledatelnost značky v ekosystému zdrojů, ze kterých AI odpovědi čerpají nebo které vyhledávače vyhodnocují.“

---

### [WARNING] „Být citovaný v AIO znamená viditelnost značky“ je moc absolutní

**Citace:**

> „být citovaný v AIO znamená viditelnost značky i bez prokliku.“

**Problém:**  
Viditelnost závisí na tom, jak je citace zobrazena, zda je značka viditelná, zda uživatel zdroj vůbec vnímá a jak vypadá rozhraní výsledku. Claim je lepší změkčit.

**Návrh opravy:**

> „Citace v AIO může zvýšit viditelnost značky i bez prokliku, pokud je zdroj nebo značka ve výsledku zřetelně uvedená.“

---

### [WARNING] FAQ odpověď o vypnutí AI Overviews odkazuje na návod, ale není odkaz

**Citace:**

> „Praktickou cestu, jak AI Overviews případně omezit a kdy to dává smysl, rozebírá samostatný návod.“

**Problém:**  
Ve FAQ je zmíněný samostatný návod, ale odpověď neobsahuje odkaz. V těle článku odkaz je, ale FAQ má být sebestačné.

**Návrh opravy:**  
Doplnit odkaz přímo do FAQ odpovědi:

> „Podrobněji to rozebírá návod [jak vypnout nebo omezit AI Overview](/blog/jak-vypnout-ai-overview/).“

---

### [WARNING] FAQ 5 stále používá tvrdé doporučení „obsah optimalizovaný pro citaci v AI“ bez vysvětlení

**Citace:**

> „obsah optimalizovaný pro citaci v AI“

**Problém:**  
Formulace je marketingově lákavá, ale neurčitá. Není jasné, co přesně má čtenář udělat. Navíc může znít jako slib, že optimalizace povede k citaci.

**Návrh opravy:**

> „obsah s jasnými definicemi, stručnými odpověďmi, ověřitelnými fakty, autorskou důvěryhodností a strukturovanými daty, který může zvýšit šanci na citaci v AI odpovědích.“

---

### [WARNING] První odstavec je citovatelný, ale potřebuje stejný hedge jako frontmatter answer

**Citace:**

> „S AI Overviews jeho podíl dál roste…“

**Problém:**  
Prvních ~100 slov má fungovat jako samostatná odpověď. To se daří strukturou i srozumitelností, ale faktický hedge je slabší než ve frontmatteru.

**Návrh opravy:**  
V prvním odstavci použít:

> „U řady dotazů mohou AI Overviews tento podíl zvyšovat…“

Tím bude úvod konzistentní s `answer`.

---

### [WARNING] How-to krok „Porovnání segmentů“ stojí na nedoložené dostupnosti AI segmentů

**Citace:**

> „kde se chová AI Overviews jinak než klasické výsledky — to je oblast k řešení.“

**Problém:**  
Tento krok je použitelný pouze tehdy, pokud má web skutečně dostupná data pro AI Overviews jako samostatný pohled. Jinak čtenář dostane návod, který nemusí jít provést.

**Návrh opravy:**

> „Pokud máte v GSC samostatný pohled na AI prvky, porovnejte ho s běžnými výsledky. Pokud ne, použijte ruční kontrolu SERPu, sledování dotazů s výskytem AIO a trend impresí, CTR a pozice.“

---

### [WARNING] „Good vs bad zero-click“ je srozumitelné, ale anglické označení ruší tón

**Citace:**

> „Roztřiďte good vs bad zero-click“

> „good vs bad“

**Problém:**  
Není to zakázaný termín, ale je zbytečně anglický a méně přístupný. V těle článku už máte český nadpis „Dobrý a špatný zero-click“, což je lepší.

**Návrh opravy:**

- „good vs bad zero-click“ → „dobrý a špatný zero-click“
- `stats` label „good vs bad“ → „dobrý vs. špatný dopad“

---

### [TIP] Meta description je v pořádku, ale je těsně delší a šlo by ji zostřit

**Citace:**

> „Zero-click roste i kvůli AI Overviews. Vysvětlíme, jak měřit dopad v Google Search Console, kdy je zero-click problém a jak ztrátu prokliků kompenzovat.“

**Hodnocení:**  
Délka je v doporučeném rozsahu, keyword je přítomné, popis odpovídá obsahu. Jen po opravě GSC claimu by neměla slibovat přesnější měření, než článek reálně poskytne.

**Možná oprava:**

> „Zero-click a AI Overviews: jak měřit dopad na CTR, poznat hodnotné ztráty prokliků a kompenzovat je přes značku a obsah.“

---

### [TIP] Titulek je SEO použitelný

**Citace:**

> `title: "Zero-click a AI Overviews 2026: jak měřit a kompenzovat"`

**Hodnocení:**  
Titulek je přibližně v dobré délce, začíná hlavním tématem a odpovídá záměru článku. Není potřeba zásadní oprava.

---

### [TIP] Slug je dobrý

**Citace:**

> `slug: "zero-click-ai"`

**Hodnocení:**  
Krátký, srozumitelný, obsahuje hlavní téma. Bez připomínky.

---

### [TIP] CTA je po opravě dostatečně konkrétní

**Citace:**

> „Pomůže produktový AI SEO audit za 9 990 Kč… AI SEO Wireframe Pack za 1 490 Kč.“

**Hodnocení:**  
CTA splňuje zadání: vede na konkrétní produkty, ne na obecné „kontaktujte nás“. Primární audit dává u tohoto analytického článku smysl.

**Drobná jazyková oprava:**

> „které dotazy vám kvůli AI Overviews ztrácí prokliky“

lépe:

> „u kterých dotazů kvůli AI Overviews ztrácíte prokliky“

---

## Shrnutí priorit oprav

1. **Ověřit nebo přeformulovat tvrzení o AI Mode / AI Overviews segmentech v GSC.**  
2. **Vyřešit rozpor mezi samostatným CTR a neoddělitelnými kliky.**  
3. **Doplnit zdroje ke statistikám zero-click / CTR, nebo čísla změkčit.**  
4. **Odstranit zbylé anglicismy ve FAQ a tabulce.**  
5. **Změkčit absolutní claimy o růstu zero-click a viditelnosti značky v AIO.**