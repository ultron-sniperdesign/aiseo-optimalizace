## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z větší části zapracované dobře: titulek je v limitu, hlavní `answer` má samostatný smysl a CTA vede na konkrétní produkty. Zůstávají ale 2 zásadní problémy: nepřesné vysvětlení Google-Extended a výskyt zakázaného slovníku „schema“.

---

## Nálezy

### [BLOCKER] Nepřesné tvrzení o Google-Extended

> „Google-Extended není běžný vyhledávací robot, ale pravidlo pro využití obsahu v AI funkcích Google.“

Problém: formulace je pořád příliš široká. Google-Extended není vyhledávací robot, ale ani obecné pravidlo pro všechny „AI funkce Google“. Podle dokumentace Google slouží hlavně k řízení využití obsahu pro Gemini Apps a Vertex AI generativní API. Neřídí běžné indexování ve Vyhledávání a nelze ho prezentovat jako přímé nastavení pro AI Overviews / AI výsledky ve Vyhledávání.

**Návrh opravy:**

> Google-Extended není vyhledávací robot, ale produktový token v robots.txt, kterým Google umožňuje řídit využití obsahu pro některé AI produkty, například Gemini Apps a Vertex AI. Neřídí běžné indexování ve Vyhledávání a nemá se zaměňovat s Googlebotem ani s přímým nastavením zobrazení v AI výsledcích.

Opravit na obou místech: ve FAQ i v kroku 5.

---

### [BLOCKER] Zůstal zakázaný termín „schema“

> „Některé automatické signály (canonical, schema) se snadno rozbijí.“

Problém: „schema“ je podle zadání zakázaný slovník. Navíc „canonical“ je pro běžného čtenáře také zbytečně technický bez českého vysvětlení.

**Návrh opravy:**

> Některé automatické signály, například kanonická URL nebo strukturovaná data, se snadno rozbijí.

---

### [WARNING] Zůstává nevhodné „schéma“ místo „strukturovaná data“

> „Shoptet je víc out-of-the-box, ale na nižších tarifech bývá editace šablon a doplňování schématu omezenější.“

Problém: i když nejde o přesný výraz „schema markup“, článek už jinde správně používá „strukturovaná data“. Tady je terminologie nekonzistentní a mimo slovník značky.

**Návrh opravy:**

> Shoptet je víc out-of-the-box, ale na nižších tarifech bývá editace šablon a doplňování vlastních strukturovaných dat omezenější.

---

### [WARNING] Nepřesný název typu strukturovaných dat: „Breadcrumb“

> „Product, Breadcrumb, WebSite obvykle automaticky“

Problém: správný typ je `BreadcrumbList`, ne `Breadcrumb`. V článku se jinde používá správně `BreadcrumbList`, takže tabulka je nekonzistentní a technicky nepřesná.

**Návrh opravy v CompareTable:**

> Product, BreadcrumbList, WebSite obvykle automaticky

Opravit u Upgates i Shoptetu.

---

### [WARNING] Příliš silné claimy o recenzích a tom, jak je AI používá

> „AI ověřuje důvěryhodnost značky i mimo váš web.“

> „Bez nich AI značku špatně ověří.“

> „Tyto signály se promítají i do toho, jak AI nástroje značku zmiňují a jak ji zařazují mezi alternativy.“

Problém: směr je správný, ale formulace je moc jistá. AI nástroje mohou pracovat s externími zdroji, ale jejich konkrétní vážení není veřejné a liší se podle systému, dotazu i režimu vyhledávání. Tvrzení „promítají se“ a „bez nich špatně ověří“ působí jako prokázaný mechanismus.

**Návrh opravy:**

> Recenze ze třetích stran, například Heureka, Zboží nebo Google Recenze, mohou AI systémům s webovým vyhledáváním pomoct ověřit důvěryhodnost značky mimo její vlastní web. Nejsou zárukou citace, ale zvyšují množství nezávislých zdrojů, ze kterých může AI při odpovědi čerpat.

A v chybě 03 upravit na:

> AI systémy mohou důvěryhodnost značky ověřovat i mimo váš web.

---

### [WARNING] „Největší rezerva“ je nedoložený superlativ

> „obsah pro AI dotazy „X pro Y“ a „nejlepší X“ je největší rezerva u eshopů“

> „Tam je největší rezerva.“

> „FAQ je u eshopu největší citační rezerva.“

Problém: „největší rezerva“ je silný claim bez dat. Pokud nejde o zjištění z vlastních auditů a není to tak označené, působí to jako nepodložené zobecnění.

**Návrh opravy:**

- „je největší rezerva“ → „bývá častá rezerva“
- „Tam je největší rezerva.“ → „Tam často vzniká největší praktický prostor ke zlepšení.“
- „FAQ je u eshopu největší citační rezerva.“ → „FAQ bývá u eshopů častá citační rezerva.“

Pokud chcete ponechat silnější formulaci, doplnit zdroj typu:

> V našich auditech českých e-shopů se jako častá rezerva opakuje hlavně obsahová vrstva: FAQ, srovnání a recenze mimo web.

---

### [WARNING] Robots.txt v administraci je formulovaný místy moc absolutně

> „v admin obou platforem najdete robots.txt, meta a URL nastavení“

> „robots.txt a meta robots, editovatelné v admin v sekci Marketing nebo SEO podle platformy“

Problém: článek později správně říká „podle možností konkrétního tarifu a nastavení“, ale ve statistikách a checklistu je formulace absolutní. U podobných platforem se možnosti liší podle tarifu, šablony, doplňků a konkrétní implementace.

**Návrh opravy:**

Ve `stats`:

> v administraci obou platforem lze podle tarifu a nastavení řešit robots.txt, meta údaje a URL

V checklistu:

> robots.txt a meta robots: možnosti úprav se liší podle platformy, tarifu a konkrétního nastavení administrace.

---

### [WARNING] FAQPage je potřeba zasadit do reality Google výsledků

> „Co bývá potřeba doplnit ručně, je typ FAQPage tam, kde má skutečnou FAQ sekci — typicky produktové stránky a kategorie.“

> „Doplnění FAQ ve strukturovaných datech“

Problém: není špatně doplnit FAQPage ke skutečně viditelné FAQ sekci, ale článek může vyvolat dojem, že to přinese viditelné FAQ rich výsledky v Googlu. Google už FAQ rich results zobrazuje velmi omezeně, typicky pro autoritativní zdravotní a vládní weby. Pro AI citovatelnost je důležitější samotný viditelný obsah než očekávání rich výsledku.

**Návrh doplnění jedné věty u FAQPage:**

> FAQPage má smysl jen tam, kde je FAQ viditelná i pro uživatele. Nejde o garanci rich výsledku v Googlu; hlavní přínos je jasnější struktura obsahu.

---

### [WARNING] „AI cituje hlavně podle obsahu a důvěryhodnosti“ je příliš jisté

> „AI cituje hlavně podle obsahu a důvěryhodnosti.“

Problém: dobrý směr, ale claim je moc definitivní. AI systémy ne vždy citují, ne vždy používají webové vyhledávání a konkrétní výběr zdrojů je proprietární.

**Návrh opravy:**

> AI systémy potřebují srozumitelný obsah a ověřitelné zdroje; bez kvalitních popisů, FAQ, srovnání a externích recenzí se šance na zmínku nebo citaci obvykle snižuje.

---

### [TIP] Meta description je přesně na horní hraně

> `description: "Upgates i Shoptet mají technický základ SEO z velké části automaticky. Pro AI vyhledávání je potřeba doplnit obsahovou vrstvu — popisy, FAQ, recenze a srovnání."`

Meta description má přibližně 160 znaků, tedy je ještě v limitu. Pokud web nebo šablona přidává suffix značky, může se ve výsledcích zkrátit.

**Volitelná kratší verze:**

> Upgates i Shoptet mají technický SEO základ z velké části hotový. Pro AI vyhledávání doplňte popisy, FAQ, recenze a srovnání.

---

### [TIP] Drobné jazykové nečistoty: „v admin“

> „v admin obou platforem“

> „v admin Upgates nebo Shoptetu“

> „v admin (Marketing/SEO)“

Problém: hovorové a nekonzistentní. Pro brand voice bude čistší „v administraci“.

**Návrh opravy:**

- „v admin“ → „v administraci“
- „v admin Upgates nebo Shoptetu“ → „v administraci Upgates nebo Shoptetu“
- „v admin (Marketing/SEO)“ → „v administraci, typicky v části Marketing/SEO“

---

## Co je v pořádku

- `title` má cca 53 znaků a klíčové téma je na začátku — vyhovuje.
- `answer` má 43 slov, začíná definicí a dává samostatný smysl — vyhovuje.
- Prvních ~100 slov těla funguje jako samostatné shrnutí — vyhovuje.
- Interní odkazy jsou relevantní: SEO pro e-shopy, robots.txt pro AI, srovnávací články, E-E-A-T, brand mentions.
- CTA je konkrétní a vede na produkty: Audit 9 990 Kč a Pack 1 490 Kč — vyhovuje.
- Transparentnost ohledně partnerství s Upgates je doplněná a vhodná.