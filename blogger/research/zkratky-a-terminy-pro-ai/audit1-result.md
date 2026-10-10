## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Fakticky je článek většinově dobře ukotvený: správně neříká, že Google pasáže samostatně indexuje; rozlišuje vlastní redakční pravidlo od požadavku Googlu; u Anthropicu uvádí, že nejde o Google ani ChatGPT; data vlastního měření většinou sedí. Před publikací ale opravte několik tvrzení, kde je závěr silnější než podklad nebo kde chybí důležitá podmínka.

---

## Nálezy

### [BLOCKER] Tvrzení o tom, co Google „ukáže“ uživateli, stojí jen na dokumentaci, ne na ověření rozhraní

**Citace:**

> „…že uživatelům sám ukáže část stránky, která k dotazu sedí.“

A ve FAQ / checklistu podobně:

> „Sekce se může číst bez úvodu — z odkazu, jako část stránky ve výsledcích…“

**Problém:**  
V briefu je u **Rozhraní (UI)** výslovně prázdno. Podklad je jen dokumentace Googlu. V tomto kole platí pravidlo: tvrzení o tom, co uživatel **uvidí na obrazovce**, se nesmí opírat o dokumentaci. Google dokumentace říká, že systémy umí pochopit více témat na stránce a zobrazit relevantní část, ale článek to nesmí převést do ověřeného UI tvrzení.

**Návrh opravy:**  
Přeformulovat bez tvrzení o konkrétním zobrazení:

> „Google v průvodci uvádí, že jeho systémy umí pracovat i se stránkou, která pokrývá více témat, a dokážou posoudit relevantní část obsahu. Z toho ale neplyne požadavek dělit text na malé části ani psát zvlášť pro generativní AI.“

A místo:

> „jako část stránky ve výsledcích“

použít bezpečnější:

> „protože část textu může být čtená nebo citovaná samostatně, bez úvodu stránky.“

---

### [BLOCKER] Tvrzení „FAQ se zobrazuje samostatně“ je nedoložené UI tvrzení

**Citace:**

> „Každá odpověď FAQ a krátká odpověď — Zobrazují se samostatně.“

A dále:

> „Odpověď FAQ se zobrazuje samostatně.“

**Problém:**  
Není doloženo rozhraním. Navíc obecně nelze tvrdit, že se FAQ odpověď samostatně zobrazuje ve výsledcích vyhledávání nebo jiných platformách. Brief nemá UI ověření a pro rok 2026 není doložené, že by toto platilo obecně.

**Návrh opravy:**  
Změnit na redakční pravidlo bez UI slibu:

> „Každou odpověď FAQ a krátkou odpověď pište tak, aby dávala smysl i samostatně.“

A v chybě 04:

> „Odpověď FAQ může čtenář nebo nástroj zpracovávat odděleně od zbytku článku.“

---

### [BLOCKER] Bing guideline je rozšířená za hranici toho, co opravdu říká

**Citace:**

> „Bing ve svých pokynech pro správce webů výslovně žádá jasné a jednotné pojmenování lidí, organizací, produktů a míst. Pro obsah to znamená: každý pojem má jeden hlavní název…“

**Problém:**  
První věta odpovídá Bing Webmaster Guidelines §16. Druhá věta ale rozšiřuje podmínku z „people, organizations, products, and locations“ na **každý pojem**. To už Bing výslovně neříká. Jako vlastní redakční pravidlo je to v pořádku, ale nesmí to vyznít jako požadavek Bingu.

**Návrh opravy:**

> „Bing ve svých pokynech výslovně doporučuje jasné a jednotné pojmenování lidí, organizací, produktů a míst. My stejné pravidlo rozšiřujeme i na důležité pojmy v obsahu: každý pojem má mít jeden hlavní název…“

---

### [WARNING] U Anthropicu chybí přesné vymezení metriky a varianty testu

**Citace:**

> „Když do úseků doplnil chybějící kontext, klesl v jeho testech podíl nenalezených relevantních úseků z 5,7 na 3,7 %.“

**Problém:**  
Směr tvrzení je správný, ale chybí přesnější podmínka z podkladů: jde o **míru selhání vyhledání, 1 − recall@20**, konkrétně u varianty **contextual embeddings**. Článek správně dodává, že nejde o Google ani ChatGPT, ale metrika by měla být pojmenovaná přesněji.

**Návrh opravy:**

> „U varianty contextual embeddings klesla v jeho testech míra selhání vyhledání relevantního úseku, tedy 1 − recall@20, z 5,7 na 3,7 %. Jsou to testy Anthropicu na vlastních systémech, ne měření Googlu ani ChatGPT.“

---

### [WARNING] WCAG: „každé zkratky“ je příliš absolutní bez výjimky pro zkratky běžného jazyka

**Citace:**

> „Pravidla přístupnosti WCAG 2.2 chtějí na nejvyšší úrovni AAA, aby šlo zjistit plný tvar každé zkratky.“

**Problém:**  
WCAG 2.2 SC 3.1.4 je úroveň **AAA** a skutečně řeší mechanismus pro zjištění rozšířeného tvaru nebo významu zkratek. Podklady ale uvádějí důležitou podmínku: výjimku pro zkratky, které se staly součástí jazyka. Formulace „každé zkratky“ je proto moc absolutní.

**Návrh opravy:**

> „WCAG 2.2 na úrovni AAA požaduje mechanismus, kterým lze zjistit rozšířený tvar nebo význam zkratky; výjimkou jsou zkratky, které se už staly součástí běžného jazyka.“

---

### [WARNING] U `<abbr>` je nedoložené historizující „už jen“

**Citace:**

> „Značku `<abbr>` s atributem `title` vede W3C už jen jako doporučenou techniku…“

A ve FAQ:

> „…vede W3C v pravidlech přístupnosti už jen jako doporučenou techniku…“

**Problém:**  
Podklad říká, že H28 je **advisory technique** a že `title` mnoho user agentů přístupně nezpřístupňuje. Slova „už jen“ ale naznačují historickou změnu nebo degradaci techniky, kterou podklady nedokládají.

**Návrh opravy:**

> „Značku `<abbr>` s atributem `title` vede W3C jako doporučenou, tedy advisory, techniku…“

---

### [WARNING] AIO jako „AI Optimization“ je potřeba jasně označit jako interní význam webu

**Citace:**

> „AIO znamená jednak zastřešující rámec AI Optimization, jednak Přehled od AI, tedy Google AI Overviews.“

**Problém:**  
Podklady dokládají, že na tomto webu se AIO používá jako **AI Optimization** a zároveň se v některých článcích používalo pro Google AI Overviews. Není ale doloženo, že „AIO = AI Optimization“ je obecně ustálený význam mimo tento web. Formulace může znít jako obecná definice.

**Návrh opravy:**

> „Na našem webu používáme AIO jako zkratku pro zastřešující rámec AI Optimization. Zároveň se ale AIO v praxi často používá i jako zkratka pro Google AI Overviews, tedy Přehled od AI.“

---

### [WARNING] Metodika měření je v článku zjednodušená víc, než dovolují podklady

**Citace:**

> „Všech 185 článků jsme 10. 10. 2026 rozdělili na sekce: krátkou odpověď, každou odpověď FAQ, úvod a každý úsek pod nadpisem.“

**Problém:**  
Brief říká přesněji: krátká odpověď, každá otázka + odpověď FAQ, úvod před prvním H2 a každý úsek pod **H2**. „Pod nadpisem“ je širší a může zahrnovat i jiné úrovně nadpisů.

**Návrh opravy:**

> „…úvod před prvním H2 a každý úsek pod H2.“

---

### [WARNING] Popis započítaných odkazů v měření je širší než skutečná metodika

**Citace:**

> „…ani odkaz na zkratce do slovníku nebo na stránku, která ji vysvětluje.“

**Problém:**  
Brief říká, že skript počítal odkazy na zkratce do vybraných cest: `/slovnik/`, `/geo/`, `/aeo/`, `/aio/`, `/seo/`, `/blog/`. Ruční kontrola dokonce odhalila falešný poplach, protože odkaz na pilíř `/seo-vs-geo-vs-aeo-vs-aio/` vzorec nepočítal. Tvrzení „na stránku, která ji vysvětluje“ je tedy metodicky širší než skutečné měření.

**Návrh opravy:**

> „…ani odkaz na zkratce do slovníku nebo do vybraných vysvětlujících sekcí webu, které skript počítal.“

Případně doplnit poznámku:

> „Ruční kontrola ukázala dva falešné poplachy, mimo jiné kvůli odkazu, který vzorec nezapočítal.“

---

### [WARNING] „Dvě třetiny sekcí se zkratkou“ zobecňuje výsledek jen ze sedmi sledovaných zkratek

**Citace:**

> „Měření ukazuje, že ho dvě třetiny sekcí se zkratkou neplní.“

**Problém:**  
Měření se týká sedmi sledovaných zkratek: GSC, CTR, SERP, GEO, AEO, AIO, E-E-A-T. Ne všech zkratek na webu. Hodnota 65 % je v pořádku, ale závěr musí zůstat omezený na sledovaný vzorek.

**Návrh opravy:**

> „Měření ukazuje, že pravidlo neplní 65 % sekcí, které obsahují aspoň jednu ze sedmi sledovaných zkratek.“

---

### [WARNING] Tvrzení o publikaci pravidla v červenci 2026 není v podkladech doložené

**Citace:**

> „Pravidlo ‚rozepsat zkratku v každé sekci‘ jsme na tomhle webu publikovali v červenci 2026.“

**Problém:**  
V dodaném briefu není ověřovací podklad pro datum „červenec 2026“. Jde o konkrétní historické tvrzení o vlastním webu, takže má být doložené interním článkem nebo frontmatterem.

**Návrh opravy:**  
Buď doložit konkrétním interním článkem, pokud existuje, například odkazovaným článkem:

> `/blog/pasazova-optimalizace-obsahu/`

jen pokud má skutečně `published` v červenci 2026 a obsahuje toto pravidlo.

Nebo formulaci oslabit:

> „Pravidlo ‚rozepsat zkratku v každé sekci‘ jsme si na webu stanovili dříve, ale měření ukazuje, že ho bez kontroly nedodržujeme konzistentně.“

---

### [WARNING] Tvrzení o přejmenování služby a vynechané variantě je silnější než doložený podklad

**Citace:**

> „Druhá zkušenost je z přejmenování placené služby v září 2026: hledání podle jednoho tvaru starého názvu minulo variantu ‚SEO a AI audit‘, která zůstala v pěti sekcích webu.“

**Problém:**  
Brief dokládá, že varianta „SEO a AI audit“ zůstala v pěti sekcích a že bylo opraveno 120 výskytů v 89 článcích. Nedokládá ale konkrétní procesní tvrzení „hledání podle jednoho tvaru starého názvu minulo variantu…“. To může být pravda, ale v podkladech není ověřené.

**Návrh opravy:**

> „Druhá zkušenost je z přejmenování placené služby v září 2026: varianta ‚SEO a AI audit‘ zůstala ještě v pěti sekcích webu. V blogu jsme pak starý název opravili ve 120 výskytech v 89 článcích.“

---

### [TIP] E-E-A-T: „autorita“ je méně přesné než „autoritativnost“

**Citace:**

> „E-E-A-T (zkušenost, odbornost, autorita, důvěryhodnost)“

**Problém:**  
V podkladech je uvedeno „zkušenost / odbornost / autoritativnost / důvěryhodnost“. „Autorita“ je srozumitelné, ale méně přesné než „autoritativnost“, která lépe odpovídá „Authoritativeness“.

**Návrh opravy:**

> „E-E-A-T (zkušenost, odbornost, autoritativnost, důvěryhodnost)“

---

### [TIP] Některé formulace o čtenáři jsou zbytečně absolutní

**Citace:**

> „Kdo přijde do prostřední sekce, úvod nevidí.“

A:

> „kdo do sekce přijde z odkazu nebo z obsahu stránky, úvod nevidí.“

**Problém:**  
Uživatel úvod technicky může vidět po posunutí stránky nahoru. Věcně jde spíš o to, že ho nemusí číst nebo nemusí být v aktuálním kontextu.

**Návrh opravy:**

> „Kdo přijde rovnou do prostřední sekce, úvod nemusí číst ani mít v aktuálním kontextu.“

---

## Aktuálnost k roku 2026

Bez zásadního problému. Článek pracuje s datem 10. 10. 2026, neobsahuje neukotvené „letos“ ani „příští rok“ a hlavní externí podklady odpovídají briefu: Google AI guide z 10. 7. 2026, Google ranking systems guide s aktuálním vymezením passage ranking, WCAG 2.2, Anthropic 2024 i vlastní měření k 10. 10. 2026.