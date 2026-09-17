# Faktický audit — Sezónní obsah a AI

**Auditováno:** 17. 9. 2026  
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Hlavní doporučení o jedné opakovaně používané URL je doložené a článek je převážně věcně přesný. Před publikací je potřeba opravit dvě prakticky významná místa: doplnit nový přepínač účasti v generativních funkcích Googlu a zúžit doporučení `noindex`/404 tak, aby nemohlo být použito jako běžný mimosezonní režim opakované stránky. Další čtyři nálezy zpřesňují atribuci, datum zdroje a povahu dat o hledanosti.

## Nálezy

### 1. [BLOCKER] Chybí nová podmínka účasti webu v generativních funkcích Googlu — **zásadní**

**Citovaná pasáž:**  
„Pro zobrazení v generativních funkcích musí být stránka zařazená do indexu a způsobilá k zobrazení s úryvkem.“  
FAQ: „Stránka proto musí být veřejně dostupná, aktuální a způsobilá k zobrazení ve výsledcích.“

**Problém:**  
Tvrzení uvádí jen podmínky na úrovni stránky. Aktuální dokumentace Googlu od roku 2026 přidává podmínku na úrovni webu: web musí být zahrnutý do generativních funkcí pomocí nastavení **Search generative AI** v Search Console. Google tento přepínač nasadil pro všechny weby 31. srpna 2026, tedy před datem publikace článku. Výchozí volba je zahrnutí, vlastník ale může web vyloučit; v takovém případě se jeho obsah nesmí použít jako odkaz ani podklad odpovědi, i kdyby stránka byla indexovaná, veřejná a způsobilá k úryvku.

**Důkaz:**  
- Google v průvodci požaduje indexaci, způsobilost k úryvku **a navíc** zahrnutí webu v ovládacím prvku Search generative AI: [Google Search Central — generative AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).  
- Nápověda Search Console uvádí globální nasazení k 31. 8. 2026, výchozí zahrnutí a účinek vyloučení: [Search generative AI control](https://support.google.com/webmasters/answer/16908024).

**Cílená oprava:**  
Za větu o indexaci doplnit: „Od 31. srpna 2026 musí mít web v Search Console také povolené zahrnutí v nastavení Search generative AI; výchozí volbou je zahrnutí. Vlastník ho však může vypnout, a tím zabránit odkazování i použití obsahu jako podkladu generativní odpovědi.“ Stejnou podmínku stručně doplnit do poslední FAQ odpovědi nebo ji formulovat tak, aby nevyjmenovávala neúplný seznam podmínek.

### 2. [WARNING] `noindex` a 404 jsou podané příliš blízko opakované sezonní stránce — **zásadní**

**Citovaná pasáž:**  
„U kategorie bez produktů Google připouští `noindex`; pokud ji web odstraní z navigace a nemá další účel, může vracet 404.“  
FAQ: „Prázdnou kategorii bez další role lze vyřadit z výsledků nebo odstranit.“

**Problém:**  
Samotné tvrzení je pravdivé, ale zdrojové doporučení Googlu je úzce podmíněné: týká se kategorie bez položek; 404 připouští tehdy, když web prázdnou kategorii automaticky odstraní i z procházení a vyhledávání. `noindex` přitom URL z výsledků odstraní úplně. To není vhodný běžný mimosezonní přepínač pro stránku akce, která se má vrátit. Google u dočasně nedostupné nabídky naopak doporučuje ponechat web online a upozorňuje, že návrat po odstranění z indexu může trvat. Následující odrážka článku sice říká, že vracející se akce má URL ponechat, varovný box a FAQ však mohou čtenáře dovést k dočasnému nasazování `noindex`/404 na tutéž opakovanou URL.

**Důkaz:**  
- Přesné omezení pro prázdnou kategorii: [Google Search Central — Ecommerce URL structure](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites).  
- `noindex` způsobí úplné vyřazení stránky z výsledků bez ohledu na odkazy: [Google Search Central — Block indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).  
- Pro dočasnou nedostupnost Google doporučuje zachovat web online a výslovně varuje před `noindex`, 404 a 410, protože návrat po odstranění z indexu může trvat: [Google Search Central — Temporarily pause or disable a website](https://developers.google.com/search/docs/crawling-indexing/pause-online-business).  
- Stránka s HTTP 200, ale jen prázdným obsahem nebo chybovou zprávou, může být vyhodnocena jako soft 404: [Google Search Central — Troubleshoot crawling errors](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors).

**Cílená oprava:**  
Rozdělit doporučení výslovně na dvě situace:  
1. „Akce se příští sezonu vrátí: URL ponechte s HTTP 200 a indexovatelnou; nabídněte užitečný mimosezonní obsah, stav akce a případně známý termín návratu. Nedělejte z ní prázdnou stránku ani dočasně nepřepínejte `noindex`.“  
2. „Kategorie je trvale prázdná a nemá budoucí ani informační roli: použijte `noindex`; pokud ji systém odstranil i z interního procházení a nemá náhradu, může vrátit 404/410.“  
Stejné rozlišení zkráceně přenést do FAQ.

### 3. [WARNING] FAQ přenáší definici významné změny z `lastmod` také na `dateModified` — **drobný**

**Citovaná pasáž:**  
FAQ: „Datum aktualizace má odpovídat významné změně hlavního obsahu, odkazů nebo strukturovaných dat. Stejně přesný má být údaj lastmod v sitemapě.“

**Problém:**  
Google skutečně požaduje, aby datum publikace/úpravy popisovalo publikaci nebo významnou aktualizaci stránky, nikoli datum události. Konkrétní výčet „hlavní obsah, strukturovaná data nebo odkazy“ však pochází z dokumentace k `lastmod` v sitemapě. Dokumentace k viditelnému datu a `dateModified` tento výčet nepoužívá. FAQ oba signály slévá do jednoho pravidla a přisuzuje definici jednoho signálu i druhému.

**Důkaz:**  
- Google u data na stránce mluví o publikaci či významné aktualizaci a zakazuje zaměnit ho za datum popisované události: [Google Search Central — publication dates](https://developers.google.com/search/docs/appearance/publication-dates).  
- Výčet hlavního obsahu, strukturovaných dat a odkazů je uveden u `lastmod`: [Google Search Central — build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

**Cílená oprava:**  
FAQ rozdělit: „Viditelné datum a `dateModified` změňte až po významné aktualizaci stránky. `lastmod` v sitemapě musí zachytit poslední významnou změnu; Google mezi příklady uvádí hlavní obsah, strukturovaná data a odkazy.“ Tím zůstane závěr stejný, ale atribuce bude přesná.

### 4. [WARNING] Doporučení Googlu k variantám dotazů je zobecněné bez podmínky účelu — **drobný**

**Citovaná pasáž:**  
„Google ve svém průvodci pro generativní vyhledávání doporučuje omezovat duplicity a nevyrábět samostatnou stránku pro každou variantu dotazu.“

**Problém:**  
První část je přesná. Druhá vynechává rozhodující podmínku zdroje: Google varuje před samostatným obsahem pro každou variantu dotazu, pokud se vyrábí primárně za účelem manipulace pořadí nebo generativních odpovědí. Nezakazuje samostatnou stránku pro každou variantu bez ohledu na její užitek nebo odlišný záměr. V kontextu téměř totožných ročních kopií závěr článku dává smysl, atribuce je ale širší než primární zdroj.

**Důkaz:**  
Google uvádí, že vytváření samostatného obsahu pro každou možnou variantu dotazu **primárně k manipulaci** pořadí nebo generativních odpovědí porušuje zásady proti škálovanému zneužívání obsahu; samostatně doporučuje snižovat duplicity: [Google Search Central — generative AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

**Cílená oprava:**  
Větu změnit na: „Google doporučuje omezovat duplicity a varuje před výrobou samostatné stránky pro každou variantu dotazu jen kvůli ovlivnění pořadí nebo generativních odpovědí.“ Následující větu o ročních kopiích lze ponechat.

### 5. [WARNING] Průvodce pro generativní vyhledávání nebyl zveřejněn v červenci 2026 — **drobný**

**Citovaná pasáž:**  
„Google v červenci 2026 výslovně uvedl, že AI Overviews a AI Mode používají jeho základní systémy Vyhledávání…“

**Problém:**  
Google nový průvodce oznámil a zveřejnil 15. května 2026. Samotná dokumentace uvádí poslední aktualizaci 10. července 2026, ale bez historie změn nelze doložit, že citované tvrzení přibylo právě v červenci. Formulace zaměňuje datum poslední úpravy dokumentu za datum, kdy Google tvrzení poprvé zveřejnil.

**Důkaz:**  
- Oznámení nového průvodce je datované 15. 5. 2026: [Google Search Central — A new resource for optimizing for generative AI](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing).  
- Průvodce uvádí „Last updated 2026-07-10 UTC“: [Google Search Central — generative AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

**Cílená oprava:**  
Použít „Google v průvodci zveřejněném v květnu 2026 a aktualizovaném 10. července 2026 uvádí…“ nebo datum úplně vypustit: „Google ve svém aktuálním průvodci uvádí…“

### 6. [TIP] Čísla Marketing Mineru jsou odhady hledanosti, ne pozorovaný počet hledání — **drobný**

**Citovaná pasáž:**  
„Marketing Miner 17. září 2026 uváděl u dotazu ‚black friday‘ průměrnou měsíční hledanost 13 000, ale měsíční řada za listopad 2025 měla 110 000 hledání. U ‚vánočních dárků‘ připadlo na listopad i prosinec po 26 000.“

**Problém:**  
Přesná čísla jsou v interní rešerši doložena výstupem API, ale bez API klíče je nelze nezávisle reprodukovat z veřejné stránky. Navíc Marketing Miner svou hledanost popisuje jako vypočtenou metriku kombinující historická clickstream data, Google Trends a Google Ads; průměr je počítán za posledních 12 měsíců. Slovo „hledání“ může působit jako přesný pozorovaný počet uskutečněných dotazů.

**Důkaz:**  
- Metodika Marketing Mineru: kombinace clickstream dat, Google Trends a Google Ads; API vrací modelovanou hledanost: [Marketing Miner — Hledanost klíčových slov API](https://help.marketingminer.com/cs/clanek/hledanost-klicovych-slov-api/).  
- Definice průměru za posledních 12 měsíců a měsíčních sloupců: [Marketing Miner — Hledanost klíčových slov](https://help.marketingminer.com/cs/clanek/hledanost-klicovych-slov/).

**Cílená oprava:**  
Napsat „Marketing Miner 17. září 2026 odhadoval průměrnou měsíční hledanost…; pro listopad 2025 uváděl měsíční odhad 110 000…“ a přidat odkaz na metodiku nebo krátkou poznámku, že jde o modelovanou hledanost, nikoli návštěvnost stránky ani přesný počet pozorovaných dotazů.

## Ověřeno bez nálezu

- **Jedna opakovaná URL:** Google výslovně doporučuje pro opakovanou událost tutéž smysluplnou URL bez roku, uvádí přesně příklad `/sale/black-friday` proti `/sale/2020/black-friday`, doporučuje stránku vytvořit včas, odkázat ji z domovské stránky, použít aktuální kvalitní obrázek a požádat o nové projití. Externí odkaz v článku je funkční a tvrzení podporuje: [Best practices for Black Friday and Cyber Monday pages](https://developers.google.com/search/blog/2020/10/best-practices-black-friday).
- **Přesměrování a odstranění:** Trvalé přesměrování je vhodné pro duplicitní/deaktivovanou stránku s jasným nástupcem; bez podobné náhrady je správně 404/410. Doporučení nepřesměrovávat mechanicky na úvodní stránku odpovídá tomuto rozlišení: [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects), [Troubleshoot crawling errors](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors).
- **Merchant Center:** `sale_price_effective_date` je interval začátku a konce podle ISO 8601 a podporuje čas i časové pásmo; bez pásma Google použije UTC. Cena a dostupnost ve feedu musí odpovídat cílové stránce. Tvrzení článku je správné: [Sale price effective date](https://support.google.com/merchants/answer/6324460?hl=en), [Mismatched product price](https://support.google.com/merchants/answer/12159029?hl=en), [Availability](https://support.google.com/merchants/answer/6324448?hl=en).
- **`lastmod`:** Google používá `lastmod`, pokud je konzistentně a ověřitelně přesný; významnou změnou může být hlavní obsah, strukturovaná data nebo odkazy. Bing uvádí, že přesný `lastmod` pomáhá prioritizovat nové projití a nemá být časem generování sitemapy. Tvrzení v hlavním textu jsou správná: [Google — build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Bing — sitemaps in AI-powered search](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search).
- **AI funkce Googlu:** Aktuální průvodce potvrzuje vazbu AI Overviews a AI Mode na základní systémy Vyhledávání a index, podmínku indexace a způsobilosti k úryvku, absenci zvláštního AI souboru či speciálních strukturovaných dat a skutečnost, že splnění podmínek nezaručuje zobrazení. Externí odkaz článku je funkční a obsahově relevantní: [Google — generative AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- **Prolinkování:** Google doporučuje, aby důležité stránky byly dosažitelné běžnými odkazy; robot obvykle nevyplňuje interní vyhledávací pole. Doporučení znovu zapojit sezonní stránku do webu je správné: [Help Google understand your ecommerce site structure](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure).
- **Metadata:** `seoTitle` má 51 znaků, description 140 znaků a krátká odpověď 46 slov. Splňují rozsahy z auditorského zadání. Slug odpovídá tématu; `published` i `updated` jsou ukotvené přesným datem 17. 9. 2026.
- **H2:** Všech šest H2 má logickou posloupnost a každý obsahuje požadovaný zvýrazněný pojem přes `<span class="hl">` i pointu přes `<strong>`.
- **CTA:** Název **Audit AI viditelnosti**, cena **3 600 Kč bez DPH**, prioritní seznam úprav i pokrytí techniky, obsahu a obsahových mezer odpovídají kanonickému modulu `src/content/pages/audit.ts`. Odkaz `/audit/` je vůči kanonickému produktu správný.

## Pořadí oprav před publikací

1. Doplnit Search generative AI control do sekce o Googlu a do FAQ.
2. Vymezit `noindex`/404 jen pro trvale prázdnou stránku bez návratu či užitečné role; u vracející se akce ponechat 200 a indexaci.
3. Oddělit formulaci pro `dateModified` od konkrétního výčtu změn pro `lastmod`.
4. Doplnit podmínku „primárně k manipulaci“ u variant dotazů.
5. Opravit květen/červenec u průvodce Googlu.
6. Označit čísla Marketing Mineru jako odhady a odkázat metodiku.

## Doověření C5b

Doověřeny byly pouze opravené pasáže F1 a F2 proti aktuálním primárním zdrojům Googlu. Článek nebyl upraven.

### F1 — **OBSTOJÍ BEZ VÝHRADY; zásadní nález je uzavřen**

Opravený hlavní text i FAQ přesně zachycují aktuální podmínky Googlu:

- AI Overviews a AI Mode jsou založené na základních systémech Vyhledávání a získávají relevantní aktuální stránky z indexu.
- Stránka musí být indexovaná a způsobilá k zobrazení ve Vyhledávání s úryvkem.
- Web musí být zahrnutý v nastavení **Search generative AI** v Search Console. Google přepínač globálně nasadil 31. 8. 2026, zahrnutí je výchozí volba a vlastník ho může vypnout.
- Google nepožaduje nový strojově čitelný „AI soubor“ ani speciální strukturovaná data pro generativní funkce.

**Primární důkazy:** [Google Search Central — generative AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Search Console Help — Search generative AI control](https://support.google.com/webmasters/answer/16908024).

Formulace „zvláštní sezónní soubor“ je konkrétní aplikací obecného stanoviska Googlu, že není potřeba vytvářet nové machine-readable/AI text files; není v rozporu se zdrojem. F1 nevyžaduje další opravu.

### F2 — **VĚCNĚ OBSTOJÍ; zásadní nález je uzavřen, doporučena jedna drobná korekce**

Nové rozlišení je v souladu s kombinací oficiálních doporučení:

- Google pro opakované události doporučuje tutéž opakovanou URL namísto nové adresy pro každý ročník.
- `noindex` po zpracování Googlem stránku z výsledků úplně odstraní; není vhodné ho podávat jako běžný dočasný mimosezonní přepínač vracející se stránky.
- U dočasné nedostupnosti Google obecně doporučuje zachovat web online a varuje před dočasným odstraňováním přes `noindex`, 404 nebo 410.
- Pro prázdnou kategorii bez užitečného obsahu Google připouští `noindex`; pokud ji systém odstranil i z interního procházení, připouští 404. Obecná dokumentace k odstraněným stránkám potvrzuje 404 nebo 410, pokud obsah nemá podobnou náhradu.
- Výslovný zákaz prázdné stránky je správný: HTTP 200 s prázdným hlavním obsahem či chybovou zprávou může Google vyhodnotit jako soft 404.

**Primární důkazy:** [Black Friday and Cyber Monday pages](https://developers.google.com/search/blog/2020/10/best-practices-black-friday), [Ecommerce URL structure](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites), [Block indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing), [Temporarily pause or disable a website](https://developers.google.com/search/docs/crawling-indexing/pause-online-business), [Troubleshoot crawling errors](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors).

**Drobná cílená korekce:** V odrážce nahradit „ponechte URL se stavem 200 a **v indexu**“ za „ponechte URL se stavem 200 a **indexovatelnou**“. Provozovatel může zajistit stav 200, odstranit `noindex` a umožnit procházení, ale Google výslovně negarantuje, že stránku skutečně ponechá v indexu. Box už používá přesnou formulaci „indexovatelnou“ a lze ji jen sjednotit v odrážce a FAQ.

Po této terminologické úpravě F2 obstojí bez výhrady. I bez ní je původní zásadní problém s použitím `noindex`/404 na vracející se sezonní URL odstraněn.
