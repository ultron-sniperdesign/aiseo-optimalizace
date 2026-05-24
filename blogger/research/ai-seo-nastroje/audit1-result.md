## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je celkově dobře strukturovaný, má použitelnou krátkou odpověď, rozumné CTA a nepůsobí jako žebříček „nejlepších“ nástrojů. Před publikací ale potřebuje zpřesnit několik věcných tvrzení, hlavně kolem toho, co přesně AI SEO nástroje měří a jak označuje ChatGPT / Perplexity / Google AI Overviews.

---

## Nálezy a doporučené opravy

### [BLOCKER] Nepřesná hlavní definice: „AI vyhledávače“ a citace napříč platformami

**Citace:**

> „AI SEO nástroje sledují, jestli a jak často vás zmiňují a citují AI vyhledávače jako ChatGPT, Perplexity a Google AI Overviews.“

Stejná formulace je ve frontmatteru v `answer` i v prvním odstavci těla.

**Problém:**

- Google AI Overviews není samostatný „AI vyhledávač“, ale AI vrstva / funkce ve výsledcích Googlu.
- ChatGPT ne vždy funguje jako vyhledávač a ne vždy uvádí citace URL; záleží na režimu, přístupu k webu a konkrétním produktu.
- Tohle je hlavní definice článku a zároveň citovatelná odpověď, takže nepřesnost se bude šířit dál.

**Návrh opravy:**

Změnit formulaci ve frontmatteru i v úvodu například na:

> „AI SEO nástroje sledují, jestli a jak často se značka objevuje v AI odpovědích a asistentech, například v Perplexity, ChatGPT s webovým vyhledáváním nebo v Google AI Overviews ve výsledcích Googlu.“

A dále:

> „Podle platformy měří zmínky, citované zdroje, vývoj v čase a srovnání s konkurencí.“

---

### [WARNING] Tvrzení „citace konkrétních URL“ je příliš obecné

**Citace:**

> „Citace — které konkrétní URL AI uvádí jako zdroj odpovědi.“

A ve FAQ:

> „Hlavní metrikou je podíl zmínek (share of voice) a citace konkrétních URL.“

**Problém:**

Ne všechny AI platformy a nástroje pracují s citacemi URL stejně. Perplexity a Google AI Overviews typicky zdroje ukazují, ChatGPT jen v některých režimech. Některé nástroje mohou měřit spíš zmínky značky než plnohodnotné citace URL.

**Návrh opravy:**

Doplnit kvalifikaci:

> „Citace / zdroje — tam, kde je platforma uvádí, sledují nástroje konkrétní URL použité jako zdroj odpovědi.“

Ve FAQ:

> „Hlavní metrikou bývá podíl zmínek; u platforem, které uvádějí zdroje, také citace konkrétních URL.“

---

### [WARNING] Tabulka zjednodušuje vztah Google vs AI Overviews

**Citace:**

| Hledisko | Klasické SEO nástroje | AI SEO nástroje |
|---|---|---|
| Kde | Google, Seznam | ChatGPT, Perplexity, AI Overviews |

**Problém:**

AI Overviews jsou součást Googlu, takže řádek „Google, Seznam“ vs „AI Overviews“ vytváří falešně ostré oddělení. Lepší je odlišit klasické výsledky od AI odpovědí.

**Návrh opravy:**

Řádek upravit na:

| Hledisko | Klasické SEO nástroje | AI SEO nástroje |
|---|---|---|
| Kde | klasické výsledky Googlu a Seznamu | AI odpovědi v asistentech a vyhledávání, např. Perplexity, ChatGPT s vyhledáváním, Google AI Overviews |

---

### [WARNING] „Data o objemu dotazů“ u enterprise nástrojů je nedoložený overclaim

**Citace:**

> „robustnější platformy s hlubokým benchmarkem konkurence a daty o objemu dotazů“

**Problém:**

U AI odpovědí a promptů neexistuje stejně transparentní a standardizovaný objem dotazů jako u klasického keyword research. Některé platformy mohou pracovat s odhady, klastry témat nebo importovanými search daty, ale formulace „data o objemu dotazů“ působí jako jistota.

**Návrh opravy:**

Změnit na opatrnější formulaci:

> „robustnější platformy pro srovnání s konkurencí, práci s větším množstvím témat a odhady poptávky po dotazech“

Nebo:

> „…a někdy i s odhadovanou poptávkou po tématech.“

---

### [WARNING] AirOps je sporný příklad mezi měřicími enterprise nástroji

**Citace:**

> „například Profound, AirOps nebo LLM Pulse“

**Problém:**

Profound a podobné nástroje dávají v kontextu měření AI viditelnosti smysl. AirOps je ale primárně spojovaný spíš s obsahovými / workflow procesy pro AI a marketing, ne nutně jako čistý tracker AI viditelnosti. V seznamu „enterprise měřicích nástrojů“ může být zavádějící.

**Návrh opravy:**

Buď AirOps odstranit:

> „například Profound nebo LLM Pulse“

Nebo ho jasně oddělit:

> „Pro samotné měření se používají například Profound nebo LLM Pulse; nástroje typu AirOps patří spíš do navazující práce s obsahem a workflow.“

---

### [WARNING] Ruční měření je prezentované jako dostačující příliš jistě

**Citace:**

> „Na start a malý web stačí ruční měření: projděte 15–20 zákaznických dotazů v ChatGPT a Perplexity a zapisujte zmínky…“

A ve FAQ:

> „Ano, základ ano. Projděte ručně 15–20 zákaznických dotazů…“

**Problém:**

Ruční měření je užitečné, ale výsledky AI odpovědí mohou kolísat podle formulace dotazu, času, lokace, historie účtu, režimu vyhledávání a platformy. „Stačí“ zní příliš definitivně. Navíc článek má být analysis, ne tutorial; imperativ „projděte, zapisujte, nastavte“ už lehce sklouzává k návodu.

**Návrh opravy:**

Změkčit a udělat z toho analytické doporučení:

> „Na start a malý web obvykle stačí orientační ruční kontrola menší sady zákaznických dotazů v ChatGPT a Perplexity. Výsledek berte jako vstupní obrázek, ne jako přesné měření.“

Ve FAQ:

> „Ano, orientačně. Malý web si může ručně zkontrolovat vzorek zákaznických dotazů a sledovat, zda se značka objevuje v odpovědích. Přesnost je nižší než u placeného trackeru, protože AI odpovědi se mohou měnit.“

---

### [WARNING] GA4 zmínka je příliš zjednodušená

**Citace:**

> „v GA4 si nastavte sledování návštěv z AI platforem“

**Problém:**

GA4 ukáže jen návštěvy, které opravdu přijdou na web a nesou rozpoznatelný referrer / zdroj. Nezachytí zmínky bez prokliku, odpovědi bez citace ani situace, kdy referrer chybí nebo je zkreslený. Pro článek o AI viditelnosti je potřeba jasně říct, že GA4 je jen doplňkový signál.

**Návrh opravy:**

> „GA4 může doplnit pohled o návštěvy z AI platforem, ale nezachytí zmínky bez prokliku. Pro měření AI viditelnosti je proto jen podpůrný signál.“

---

### [WARNING] Věta „bez obsahu v AI odpovědích nemá tracker co sledovat“ je nepřesná

**Citace:**

> „Platit dřív, než je co měřit — bez obsahu v AI odpovědích nemá tracker co sledovat.“

**Problém:**

Tracker může sledovat i nulovou viditelnost, konkurenci, zdroje, které AI cituje místo vás, a vývoj v čase. Problém není, že „nemá co sledovat“, ale že návratnost placeného nástroje může být nízká, pokud zatím nejsou témata, obsah nebo obchodní priorita.

**Návrh opravy:**

> „Platit dřív, než znáte výchozí stav — pokud zatím nemáte jasná témata, obsah ani sledované dotazy, placený tracker může mít nízkou návratnost.“

Nebo:

> „I nulová viditelnost je informace, ale na malém webu ji často levněji zjistíte ručně.“

---

### [WARNING] „Podíl zmínek“ je definovaný až moc úzce

**Citace:**

> „Podíl zmínek (share of voice) — kolik z testovaných dotazů zmiňuje vás versus konkurenci.“

**Problém:**

To je použitelná zjednodušená definice, ale některé nástroje mohou počítat share of voice jinak: podle počtu odpovědí, výskytů značek, citovaných zdrojů, vážení dotazů nebo platforem. Současná definice může vyvolat dojem jednotné metriky napříč nástroji.

**Návrh opravy:**

> „Podíl zmínek (share of voice) — zjednodušeně, jak často se ve sledovaném vzorku dotazů objevujete vy versus konkurence. Přesný výpočet se může lišit podle nástroje.“

---

### [WARNING] Příliš jisté tvrzení o „hlavní hodnotě“ AI viditelnosti

**Citace:**

> „Hodnotit AI jen podle návštěv — hlavní hodnota je zmínka, často bez prokliku.“

**Problém:**

Směr je správný, ale „hlavní hodnota je zmínka“ je příliš kategorické. Pro některé weby bude hodnota v návštěvě, leadu, citaci zdroje, posílení značky nebo kombinaci. Bez měření dopadu na byznys je to overclaim.

**Návrh opravy:**

> „Hodnotit AI jen podle návštěv — zmínka bez prokliku může mít hodnotu pro značku, ale je potřeba ji číst vedle návštěv, leadů a citací zdrojů.“

---

### [WARNING] Český trh: Marketing Miner Brand Radar je prezentovaný jako „praktická volba“ bez podmínky

**Citace:**

> „Pro CZ trh nabízí sledování přítomnosti v AI odpovědích Marketing Miner přes funkci Brand Radar, což je praktická volba, pokud už Marketing Miner používáte na klasický keyword research.“

**Problém:**

Formulace je mírně hodnoticí. Není to zakázané, ale u neutrálního přehledu nástrojů by měla být opatrnější. Navíc „keyword research“ je zbytečný anglicismus.

**Návrh opravy:**

> „Pro CZ trh je jednou z možností Marketing Miner s funkcí Brand Radar, zejména pokud už Marketing Miner používáte na analýzu klíčových slov. I tady je vhodné ověřit pokrytí na vlastních dotazech.“

---

### [TIP] Doplnit viditelné ukotvení aktuálnosti k datu

**Citace:**

Frontmatter:

> `updated: "2026-05-24"`

Text:

> „Ceny i funkce se rychle mění — ověřte aktuální stav přímo u nástroje.“

**Hodnocení:**

Frontmatter je správně aktuální. V samotném textu ale čtenář nemusí datum vidět, přitom článek stojí na rychle se měnících nástrojích a orientačních cenách.

**Návrh opravy:**

Do úvodu nebo před sekci s úrovněmi doplnit jednu větu:

> „Stav přehledu je k 24. 5. 2026; ceny a funkce nástrojů se mohou měnit.“

---

### [TIP] Brand voice: zredukovat zbytečné anglicismy

**Citace:**

> „trackery“, „enterprise“, „benchmarkem“, „keyword research“, „top výsledcích“

**Problém:**

Nejde o zakázané termíny, ale článek má být srozumitelný a věcný. Anglicismy jsou v tématu běžné, přesto by šly místy nahradit bez ztráty přesnosti.

**Návrh opravy:**

- „trackery“ → „sledovací nástroje“ nebo při prvním výskytu „trackery / sledovací nástroje“
- „enterprise“ → „firemní / enterprise úroveň“ nebo „nástroje pro větší firmy“
- „benchmark konkurence“ → „srovnání s konkurencí“
- „keyword research“ → „analýza klíčových slov“
- „obsah v top výsledcích“ → „obsah ve viditelných výsledcích“

---

### [TIP] CTA je konkrétní a odpovídá zadání, jen bych změkčil kauzalitu

**Citace:**

> „Když chcete obsah převést na citovatelný — krátká odpověď, fakta, strukturovaná data — pomůže AI SEO Wireframe Pack…“

**Hodnocení:**

CTA je dobré: vede na konkrétní produkty, uvádí ceny a není jen generické „kontaktujte nás“. Není agresivní.

**Riziko:**

„Převést na citovatelný“ může znít jako příliš silný příslib, že úprava automaticky povede k citacím v AI.

**Návrh opravy:**

> „Když chcete obsah upravit tak, aby byl pro AI odpovědi srozumitelnější a lépe citovatelný — krátká odpověď, fakta, strukturovaná data — pomůže AI SEO Wireframe Pack…“

Nebo bezpečněji:

> „…může pomoct AI systémům lépe pochopit obsah.“

---

## Co je v článku dobře

- Titulek začíná cílovým klíčovým slovem a má přijatelnou délku.
- Meta description je v rozumném rozsahu a jasně popisuje obsah.
- Slug `ai-seo-nastroje` je smysluplný.
- Krátká odpověď má vhodnou délku a začíná definicí, ne negací.
- Prvních zhruba 100 slov funguje jako samostatné shrnutí tématu.
- H2/H3 struktura je logická.
- Článek se vyhýbá zakázaným formulacím typu „garantujeme #1“ nebo „AI vás zaručeně začne doporučovat“.
- CTA vede na konkrétní produkty: Pack 1 490 Kč a Audit 9 990 Kč.