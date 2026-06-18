**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou jen konkrétní nálezy k tomuto článku po 2. kole. Opravy jsou výrazně lepší než v minulé verzi, ale ještě zůstává několik věcných i slovníkových problémů a pár míst s příliš silným zjednodušením.

---

## Nálezy

### [BLOCKER] Zakázaný slovník: opakované použití „user-agent“
**Citace:**
- `label: "hlavních AI user-agentů a pravidlo Google-Extended..."`
- `Mezi ně patří GPTBot, OAI-SearchBot...`
- `Mít neblokované hlavní AI user-agenty...`
- `pravidla po jednotlivých user-agentech`

**Problém:**
V zadání je výslovně požadavek nahrazovat „crawler/bot“ kontextově, ale brand voice směřuje i k omezení zbytečného technického žargonu. „User-agent“ je pro běžného čtenáře zbytečně interní termín a v článku se opakuje velmi často. V části textu už máte lepší variantu „AI vyhledávací roboti“, ale není to sjednocené.

**Návrh opravy:**
Nahradit většinu výskytů:
- „AI user-agenty“ → „identifikátory AI vyhledávacích robotů“ nebo prostě „AI vyhledávací roboty“
- „pravidla po jednotlivých user-agentech“ → „pravidla pro jednotlivé AI vyhledávací roboty“

Tam, kde je technicky přesnější ponechat termín, doplnit krátké vysvětlení při prvním výskytu:
- „identifikátor user-agent, podle kterého robot poznáte v pravidlech robots.txt“

---

### [BLOCKER] Věcně nepřesné tvrzení o llms.txt: prezentováno skoro jako nutná součást
**Citace:**
- `Zahrnuje ... llms.txt ...`
- `Doplnit llms.txt — strojově čitelný souhrn obsahu webu v rootu domény.`
- `llms.txt plugin zajistí strojově čitelný souhrn obsahu pro AI modely.`

**Problém:**
llms.txt není zavedený standard s plošně potvrzeným využitím napříč hlavními AI systémy. Článek ho podává příliš kategoricky jako standardní součást „AI SEO základu“. To je overclaim. V roce 2026 lze obhájit, že **může pomoci s orientací** některých nástrojů a agentních workflow, ale ne že je to běžně uznaná nutnost.

**Návrh opravy:**
Změkčit formulace:
- „Doplnit llms.txt“ → „Zvážit llms.txt jako doplňkový orientační soubor pro AI systémy“
- „zajistí strojově čitelný souhrn obsahu pro AI modely“ → „vytvoří strojově čitelný přehled obsahu, který některé AI systémy nebo nástroje mohou využít“
- V úvodu přidat 1 větu: „llms.txt není univerzálně potvrzený standard pro všechny AI systémy, ale může zjednodušit orientaci v obsahu webu.“

---

### [BLOCKER] Nedoložené tvrzení o „hlavních AI vyhledávacích robotech 2026“
**Citace:**
- `5 + 1 hlavních AI user-agentů ... které je potřeba v roce 2026 řešit`
- `Patří mezi ně GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot a Meta-ExternalAgent.`

**Problém:**
Seznam je použit jako skoro definitivní a úplný. To je příliš silné. U těchto identifikátorů se v čase mění význam, účel i praktický dopad. U některých navíc není veřejně stejně dobře doložené, jak přesně souvisejí s citacemi v odpovědích. Formulace „je potřeba řešit“ a přesný počet „5 + 1“ působí jako uzavřený standard.

**Návrh opravy:**
Upravit na opatrnější jazyk:
- `5 + 1 hlavních... které je potřeba...` → `5 často řešených identifikátorů AI robotů + pravidlo Google-Extended, které se vyplatí zkontrolovat`
- `Patří mezi ně...` → `Mezi často řešené patří...`
- Do závěru doplnit, že seznam není definitivní a může se měnit.

---

### [WARNING] „Cloudflare ... v praxi přebíjí robots.txt“ je příliš absolutní a opakované
**Citace:**
- `v praxi může přebít vaše robots.txt`
- `v praxi přebíjí robots.txt`
- `CDN v praxi přebíjí robots.txt a blokuje hlavní AI vyhledávací roboty`

**Problém:**
První výskyt se správně změkčil na „může přebít“. Níže v článku se ale vrací tvrdší verze „přebíjí“. Technicky přesnější je říct, že **síťová blokace má přednost před tím, co by robots.txt dovoloval**, ne že „přebíjí robots.txt“ jako obecný standardní mechanismus.

**Návrh opravy:**
Sjednotit na:
- „může na úrovni CDN zablokovat přístup i tam, kde by robots.txt jinak neblokoval“
- nebo „blokace na úrovni CDN je v praxi silnější než pravidla v robots.txt“

---

### [WARNING] FAQ obsahuje věcně nejisté a nezdrojované tvrzení o neaktivitě identifikátorů
**Citace:**
- `Starší identifikátory Claude-Web a anthropic-ai už nejsou aktivní.`

**Problém:**
Tohle je konkrétní technické tvrzení, které je potřeba mít opravdu podložené. Bez zdroje je to zbytečně definitivní. Navíc i neaktivní starší identifikátory se mohou objevovat v historických návodech nebo logách.

**Návrh opravy:**
Změnit na:
- „V novější dokumentaci a praxi se obvykle řeší hlavně ClaudeBot; starší identifikátory Claude-Web a anthropic-ai se v aktuálních návodech objevují méně nebo historicky.“
Pokud chcete ponechat tvrdé tvrzení, doplňte zdroj.

---

### [WARNING] Tvrzení o Bytespider je silné a bez opory
**Citace:**
- `Bytespider (ByteDance) často ignoruje robots.txt — spolehlivá ochrana je až přes firewall nebo CDN.`
- `Bytespider je často obtěžující; lze zkusit blokovat, ale spolehlivá ochrana je až přes WAF.`

**Problém:**
Tohle je zkušenostní tvrzení, ale zní jako univerzální fakt. Bez zdroje nebo rámování „někteří správci webů uvádějí“ je to příliš kategorické.

**Návrh opravy:**
Změkčit:
- „Někteří správci webů uvádějí problémy s respektováním robots.txt; pokud to vidíte i ve svých logách, bývá účinnější blokace přes CDN nebo firewall.“
To je přesnější a auditovatelnější.

---

### [WARNING] „AI cituje…“ a „AI nemá co citovat“ jsou stále místy moc jisté
**Citace:**
- `Zaměřit obsah na krátké citovatelné úseky a otázky a odpovědi, které AI snáz cituje.`
- `AI cituje při dotazech „nejlepší X“ nebo „X pro Y“.`
- `Nechat prázdné kategorie bez textu — AI nemá co citovat.`

**Problém:**
Směr je správný, ale formulace jsou stále příliš deterministické. Ne všechny systémy „citují“ stejně a ne vždy jde o přímou citaci webu.

**Návrh opravy:**
Nahradit:
- `které AI snáz cituje` → `které se AI systémům snáz používají v odpovědích`
- `AI cituje při dotazech...` → `takový obsah může zvýšit šanci, že se stránka objeví v AI odpovědích u dotazů...`
- `AI nemá co citovat` → `AI systémy mají méně použitelného obsahu pro odpověď`

---

### [WARNING] Nepřesnost u Product / Offer / AggregateRating / Review
**Citace:**
- `Product s Offer u WooCommerce`
- `AggregateRating (recenze) — generuje SEO plugin automaticky, doplnit chybějící.`
- `Integrace recenzí ... přes strukturovaná data typu Review.`

**Problém:**
Tady se míchají typy a implementace:
- ne každý SEO plugin generuje vše „automaticky“
- recenze z externích systémů nelze bez dalšího bezpečně a správně značit tak, jak je formulováno
- `Review` vs `AggregateRating` je smíchané a může vést k chybné implementaci

**Návrh opravy:**
Upřesnit:
- „U produktů zkontrolujte Product a Offer; recenze a hodnocení doplňujte jen pokud je web skutečně zobrazuje a máte je správně napojené.“
- „AggregateRating se negeneruje vždy automaticky; ověřte ho v testu strukturovaných dat.“
- „externí recenze napojujte jen tehdy, když se propisují na produktovou stránku v souladu s pravidly vyhledávačů“

---

### [WARNING] „FAQPage na produktové nebo službové stránce“ může být zavádějící
**Citace:**
- `FAQPage (FAQ blok na produktové nebo službové stránce)`

**Problém:**
Technicky to lze, ale čtenář si z toho může odnést, že FAQPage má přidat všude bez ohledu na skutečný obsah. To může vést k mechanickému a nadbytečnému značení.

**Návrh opravy:**
Doplnit podmínku:
- „FAQPage přidejte tam, kde stránka opravdu obsahuje samostatnou sekci otázek a odpovědí.“

---

### [WARNING] SEO title je hraniční délkou a slabší v prioritě klíčového slova
**Citace:**
- `title: "AI SEO na WordPressu: praktický návod pro rok 2026"`

**Problém:**
Je to výrazně lepší než minule a formálně to projde. Ale cílové KW je „ai seo wordpress / wordpress llms.txt / wordpress robots.txt ai“. Titulek má klíčové spojení vpředu jen částečně a z hlediska přesného KW by šel ještě lépe sladit bez přepisu článku.

**Návrh opravy:**
Pokud nechcete měnit strukturu článku, stačí zvážit jemnou úpravu na:
- `AI SEO WordPress: praktický návod pro rok 2026`
nebo
- `AI SEO na WordPressu: llms.txt a robots.txt v roce 2026`

První je bližší cílovému KW, druhý lépe pokrývá varianty.

---

### [WARNING] Meta description je v pořádku délkou, ale chybí silnější vazba na cílové varianty
**Citace:**
- `Jak nastavit WordPress pro AI vyhledávání: llms.txt, robots.txt pro AI vyhledávací roboty, strukturovaná data a rychlost. Praktický návod pro CZ weby.`

**Problém:**
Description je použitelný, ale neobsahuje přesnější variantu „WordPress robots.txt AI“ ani zmínku o pluginu/Cloudflare, které jsou v článku důležité. Není to blocker, ale prostor ke zlepšení existuje.

**Návrh opravy:**
Např.:
- `Jak nastavit AI SEO na WordPressu: llms.txt, robots.txt pro AI vyhledávací roboty, strukturovaná data, Cloudflare a rychlost webu.`

---

### [WARNING] První odstavec je citovatelný, ale answer je na hraně přetížení výčtem
**Citace:**
- `answer: "AI SEO na WordPressu je nastavení webu tak, aby mu AI systémy lépe rozuměly..."`

**Problém:**
Formálně splňuje požadavek lépe než dřív. Jen poslední část je dost našlapaná seznamem prvků a končí „dobré Core Web Vitals“, což je pro samostatnou odpověď lehce technicistní. Není to špatně, ale answer by mohl být o něco přirozenější.

**Návrh opravy:**
Jen lehké zjednodušení:
- „AI SEO na WordPressu je úprava webu tak, aby AI systémy lépe pochopily jeho obsah a snáz ho použily v odpovědích. Typicky zahrnuje SEO plugin, strukturovaná data, kontrolu robots.txt, případně llms.txt a dobré Core Web Vitals.“

---

### [TIP] V textu zůstává drobná jazyková nekonzistence a překlep
**Citace:**
- `SEOPress — funkční bezplatný, placený pro pro funkce`

**Problém:**
Dvojité „pro“ snižuje důvěryhodnost.

**Návrh opravy:**
- `SEOPress — funkční bezplatný, placený pro pokročilejší funkce`

---

### [TIP] „Schema.org Validator“ v textu nevadí, ale je lepší sjednotit slovník kolem „strukturovaných dat“
**Citace:**
- `test přes Schema.org Validator nebo Google Rich Results Test`

**Problém:**
Není to zakázaný termín, ale kolem „Schema“ už v článku dříve byly anglicismy. Pro konzistenci brand voice je lepší držet se formulace „validátor strukturovaných dat“.

**Návrh opravy:**
- `test přes validátor strukturovaných dat Schema.org nebo Google Rich Results Test`

---

### [TIP] CTA je už dobré a konkrétní
**Citace:**
- `AI SEO Wireframe Pack za 1 490 Kč`
- `AI SEO audit za 9 990 Kč`

**Potvrzení:**
Tohle je opravené dobře. CTA je konkrétní, produktové a navazuje na obsah článku. Není potřeba měnit.

---

### [TIP] Transparentní dovětek je v pořádku, ale mohl by méně rozmělňovat WordPress fokus
**Citace:**
- `Naše hlavní specializace je e-shopová platforma Upgates... principy ... platí podobně pro WordPress, WooCommerce, Shoptet i jiné CMS`

**Problém:**
Není to chyba, jen to lehce oslabuje fokus článku na WordPress.

**Návrh opravy:**
Nechat, ale případně zkrátit na jednu větu:
- „Principy v článku platí i pro jiné CMS, ale konkrétní implementace se ve WordPressu řeší hlavně přes pluginy a nastavení šablony.“

---

## Shrnutí
Po prvním auditu je článek **výrazně lepší**: title, CTA, první odpověď i část slovníku se zlepšily. K publikaci ale ještě brání hlavně:

1. příliš kategorické podání **llms.txt** jako standardní nutnosti,  
2. příliš definitivní seznam „**5 + 1 hlavních**“ robotů,  
3. opakované technicistní použití **user-agent**,  
4. několik stále moc tvrdých formulací kolem **Cloudflare**, **Bytespider** a „AI cituje“.

Po těchto cílených úpravách by článek šel publikovat.