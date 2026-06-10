## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je celkově dobře zaměřený, nekanibalizuje `/audit/`, má správný slug, aktuální `updated`, dobrý titulek i meta description. Věcný základ odpovídá zadání. Před publikací ale opravte několik přehnaných / nedoložených formulací, zpřesněte citovatelnost FAQ a doplňte zdrojové odkazy k hlavním faktům.

---

## Nálezy a návrhy oprav

### [BLOCKER] Nedoložené tvrzení o ChatGPT „retrieval vzorcích“

> „ChatGPT oficiálně nepotvrzeno; v retrieval vzorcích se objevují korelace, ale není to deklarovaná podpora.“

Problém: „retrieval vzorce“ a „korelace“ zní jako naměřené zjištění, ale článek neuvádí zdroj ani metodiku. V kontextu zadání je ChatGPT pouze „nepotvrzeno, ale pozorovatelně“, což je potřeba formulovat opatrněji. Takhle to působí jako nedoložený fakt.

**Návrh opravy:**

> „ChatGPT / OpenAI podporu oficiálně nepotvrdil. Pokud llms.txt testujete, berte výsledky pouze jako orientační pozorování, ne jako deklarovanou podporu.“

Stejně upravit i ve frontmatteru:

> `label: "potvrzená podpora u Claude a Perplexity; ChatGPT nepotvrzeno, Google ne"`

---

### [WARNING] Chybí zdrojové odkazy u klíčových faktických tvrzení

> „Anthropic Claude oficiálně podporuje od ledna 2026…“  
> „Perplexity podporuje od poloviny 2025…“  
> „Gary Illyes z Googlu v červenci 2025 potvrdil…“  
> „Google v dubnu 2026 přesto přidal jeho kontrolu do Chrome Lighthouse…“

Problém: Jde o konkrétní časově vázaná tvrzení. Bez odkazů na dokumentaci / veřejná vyjádření jsou hůř ověřitelná a snižují důvěryhodnost článku, zvlášť u tématu „kdo podporuje / nepodporuje“.

**Návrh opravy:**  
Doplnit do sekce „Současný stav podpory v roce 2026“ krátkou větu a 3–4 externí odkazy:

> „Níže uvedený stav vychází z dokumentace Anthropic, oznámení / dokumentace Perplexity, veřejných vyjádření Garyho Illyese a Johna Muellera a změn v Lighthouse z dubna 2026.“

Případně doplnit odkazy přímo do položek checklistu.

---

### [WARNING] „Hodnota je prokazatelná“ je příliš silný claim

> „Pokud cílíte na uživatele Claude nebo Perplexity … hodnota je prokazatelná.“

Problém: Podpora neznamená automaticky měřitelný obchodní přínos. „Prokazatelná hodnota“ je silnější než bezpečný claim. Vhodnější je formulace „může mít hodnotu“ nebo „má oporu v deklarované podpoře“.

**Návrh opravy:**

> „Pokud cílíte na uživatele Claude nebo Perplexity, llms.txt může mít smysl, protože tyto nástroje jeho podporu deklarují.“

---

### [WARNING] Absolutní tvrzení: „llms.txt vám nepomůže“ pro Google

> „pokud je váš primární kanál Google, llms.txt vám nepomůže“

Problém: Věcně směřuje správně, ale formulace je příliš absolutní. Přesnější je říct, že nejde o podporovaný signál pro Google vyhledávání / AI Overviews.

**Návrh opravy:**

> „Pokud je vaším primárním kanálem Google, neočekávejte od llms.txt přímý přínos pro klasické vyhledávání ani AI Overviews.“

---

### [WARNING] Přehnané tvrzení o robots.txt a AI

> „Kdo respektuje: Všechny seriózní vyhledávací nástroje a AI“

Problém: Robots.txt je zavedený standard, ale „všechny seriózní … a AI“ je příliš absolutní. U AI vyhledávacích robotů se respektování liší podle provozovatele.

**Návrh opravy v tabulce:**

> „Běžné vyhledávače ho typicky respektují; u AI vyhledávacích robotů záleží na konkrétním provozovateli.“

A ve FAQ:

> „Robots.txt je standardizovaný a široce respektovaný běžnými vyhledávači; u AI vyhledávacích robotů se praxe liší.“

---

### [WARNING] „AI ho hledají jen tam“ je příliš kategorické

> „AI ho hledají jen tam, stejně jako robots.txt.“

Problém: Specifikace předpokládá umístění v kořeni domény, ale tvrzení „AI ho hledají jen tam“ je příliš jisté a obecné.

**Návrh opravy:**

> „Podle návrhu llms.txt má být soubor dostupný v kořeni domény, tedy na `/llms.txt`. Pokud ho dáte jinam, nemůžete spoléhat na to, že ho AI nástroje najdou.“

---

### [WARNING] FAQ odpověď začíná nesamostatným „Ne.“

> Q: „Podporuje Google llms.txt?“  
> A: „Ne. Gary Illyes z Googlu…“

Problém: FAQ odpovědi mají být sebestačné a dobře citovatelné. Samostatně vytažená odpověď začínající „Ne.“ ztrácí kontext.

**Návrh opravy:**

> „Google llms.txt nepodporuje. Gary Illyes z Googlu v červenci 2025 uvedl, že Google podporu neplánuje; John Mueller ho přirovnal k diskreditovanému keywords meta tagu…“

---

### [WARNING] FAQ „Kde llms.txt umístit?“ není na začátku plně sebestačné

> „Do kořene domény, na adresu vasedomena.cz/llms.txt.“

Problém: Pro AI citaci je lepší, aby odpověď začínala předmětem, ne zkratkou.

**Návrh opravy:**

> „llms.txt umístěte do kořene domény, typicky na adresu `https://vasedomena.cz/llms.txt`. Pokud máte samostatnou subdoménu, například dokumentaci, zvažte i `https://docs.vasedomena.cz/llms.txt`.“

---

### [WARNING] První odstavec neříká konkrétně, kdo podporuje a kdo ne

> „…v roce 2026 získal částečnou podporu napříč AI platformami.“

Problém: Prvních ~100 slov má fungovat jako samostatná odpověď. Definice je dobrá, ale „napříč AI platformami“ je vágní. Lepší je hned uvést Claude, Perplexity a Google.

**Návrh opravy první části:**

> „V roce 2026 ho oficiálně podporuje Claude a Perplexity, zatímco Google podporu odmítá a neplánuje.“

Tím se zvýší citovatelnost a hustota faktů hned na začátku.

---

### [TIP] Frontmatter `answer` je dobrý rozsahem, ale obsahuje zbytečné anglicismy

> „linkuje…“  
> „nice-to-have, ne must-have“

Pozitivum: `answer` má 52 slov, začíná definicí a dává samostatný smysl. Splňuje požadavek 40–60 slov.

Problém: Anglicismy nejsou zakázané, ale brand voice má být srozumitelná a věcná. „linkuje“ a „nice-to-have / must-have“ působí méně česky.

**Návrh opravy:**

> „llms.txt je navržený standard od Jeremyho Howarda — Markdown soubor v kořeni domény, který odkazuje na nejdůležitější obsah webu s krátkými popisy. V roce 2026 ho oficiálně podporuje Anthropic Claude a Perplexity; Google podporu odmítl. Pro většinu webů je to užitečný doplněk, ne nutnost — smysl dává hlavně u dokumentace a komplexních webů.“

---

### [TIP] Nahradit žargon „spec“ českou formulací

> „komunitně řízený spec“

Problém: Není zakázané, ale tón má být srozumitelný. „Spec“ je zbytečný technický slang.

**Návrh opravy:**

> „komunitně řízená specifikace“

---

### [TIP] Nahradit další anglicismy v těle článku

> „AI users pro research“  
> „quality check“  
> „ranking faktor“

Problém: Nejsou zakázané, ale oslabují konzistentní český brand voice.

**Návrhy oprav:**

- „AI users pro research“ → „uživatele AI nástrojů při rešerši“
- „quality check“ → „kontrola kvality“
- „ranking faktor“ → „signál pro řazení výsledků“

---

### [TIP] „Chrome Lighthouse“ je mírně nepřesné označení

> „Google v dubnu 2026 přesto přidal jeho kontrolu do Chrome Lighthouse…“

Problém: Přesnější je mluvit o Lighthouse; v Chrome DevTools je používán, ale název „Chrome Lighthouse“ může být matoucí.

**Návrh opravy:**

> „Google v dubnu 2026 přidal kontrolu llms.txt do Lighthouse, tedy jako kontrolu kvality, ne jako signál pro řazení výsledků.“

---

### [TIP] CTA je relevantní, ale šlo by lépe rozlišit Pack vs Audit

> „Pokud chcete posoudit… pomůže produktový AI SEO audit za 9 990 Kč… Pokud chcete postupovat sami… použijte AI SEO Wireframe Pack…“

Pozitivum: CTA je konkrétní, vede na produkty a není jen „kontaktujte nás“. Splňuje požadavek.

Drobné vylepšení: Ujasnit, kdy zvolit Audit a kdy Pack.

**Návrh opravy:**

> „Chcete rozhodnout, jestli llms.txt dává smysl právě pro váš web? Zvolte [AI SEO audit za 9 990 Kč](/audit/). Chcete si připravit strukturu obsahu a podklady sami? Použijte [AI SEO Wireframe Pack za 1 490 Kč](/pack/).“

---

## Co je v pořádku

- Titulek má cca 53 znaků, začíná cílovým klíčovým slovem a odpovídá obsahu.
- Meta description má vhodnou délku a jasně shrnuje článek.
- Slug `llms-txt-navod` je smysluplný.
- `updated: "2026-06-09"` odpovídá aktuálnímu datu v zadání.
- Základní odlišení llms.txt od robots.txt je správné.
- CTA míří na konkrétní produkty: Audit 9 990 Kč a Pack 1 490 Kč.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ nebo „backlink profil“ se v článku nevyskytují.