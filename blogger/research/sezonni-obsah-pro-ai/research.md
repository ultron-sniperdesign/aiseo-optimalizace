# Rešerše — sezónní obsah pro AI

Datum: 17. 9. 2026. Cílový článek: nový článek z řádku 118 plánu. Pracovní slug: `sezonni-obsah-pro-ai`.

## Rozhodnutí o tématu a překryvy

- Řádek 115 `produktovy feed pro ai` byl přeskočen beze změny: záměr už pokrývá existující `/blog/produktovy-feed-gtin/`; refresh dělá jiný nástroj.
- První další způsobilý řádek je 118. Článek řeší životní cyklus opakované sezonní vstupní stránky. Neopakuje obecný postup aktualizace obsahu ani běžné texty kategorií.
- Přečteny celé blízké články `aktualizace-obsahu-pro-ai.mdx`, `informacni-obsah-v-ai-ere.mdx` a `ai-friendly-url-struktura.mdx`; cíleně zkontrolovány nadpisy a metadata celého korpusu, sekcí a pilíře.
- Rozpor pro refresh: `/blog/aktualizace-obsahu-pro-ai/` uvádí obecné intervaly 30–90 dní a pořadí platforem podle důrazu na čerstvost. Pro takto obecná čísla a žebříček nebyla v nynějších primárních zdrojích dostatečná opora. Nový článek je nepřebírá.

## Ověření teze z plánu

Doložené jádro teze je užší a přesnější: Google u opakovaných prodejních událostí výslovně doporučuje jednu opakovaně používanou URL bez roku. Google také říká, že jeho generativní funkce stojí na základních systémech Vyhledávání a na indexovaných, aktuálních stránkách. Není doložen zvláštní „AI bonus“ za sezonní stránku, za každoroční přepsání data ani za speciální AI značku. Závěr článku proto stojí na stabilní adrese, skutečně aktuálním obsahu, dostupnosti pro procházení a přesných údajích.

## Marketing Miner a hledané formulace

Volání 17. 9. 2026:

- Suggestions: `sezónní obsah` a `black friday`, všechny čtyři typy, 80 kreditů. První seed vrátil 0 návrhů, druhý 337 deduplikovaných návrhů.
- Search volume: 12 přesných dotazů, 36 kreditů; 8 mělo data, 4 chyběla. Celkem nominálně 116 kreditů.
- Vybrané hodnoty (průměrná měsíční hledanost v exportu, nikoli listopadový objem): `black friday` 13 000, `vánoční dárky` 5 600, `výprodej` 4 300, `povánoční výprodej` 580, `black friday 2026` 350, `black friday slevy` 290, `vánoční akce` 90, `vánoční nabídka` 20.
- Měsíční řada ukazuje sezonní špičku: `black friday` 110 000 v listopadu 2025 proti 880–1 900 v květnu až srpnu; `vánoční dárky` 26 000 v listopadu i prosinci; `povánoční výprodej` 5 100 v prosinci. Jde o data API Marketing Mineru, ne o odhad návštěvnosti konkrétní stránky.
- Google Suggest: užitečné formulace `black friday kdy`, `black friday 2026`, `povánoční výprodej 2026`; většina ostatních návrhů byla navigační na konkrétní obchody nebo produktové kategorie.
- YouTube Suggest byl převážně nerelevantní (píseň Black Friday, zahraniční obchody, DIY dárky). Wikipedia přiřadila `black friday` k události Black Friday 1910 a `výprodej` k seriálu Vyprávěj; obě shody jsou šum a nejsou použity.
- Google Trends selhal dvakrát na prvním dotazu s HTTP 429: nejprve 5 výrazů / 5 let, poté 2 výrazy / 12 měsíců. Nejsou proto tvrzeny křivky, regionální data ani rising queries. Chybějící Trends není nulový zájem.

## Záměr a návrh struktury

Hlavní záměr je rozhodovací: má e-shop každý rok založit novou adresu, nebo obnovit jednu stránku. Vedlejší záměry: co zobrazit mimo sezonu, kdy stránku znovu zapojit do navigace, jak zacházet s datem úpravy a kdy použít archiv nebo 404.

FAQ provenance:

1. „Má mít Black Friday každý rok novou URL?“ — primární dokumentace Google + Suggest s rokem.
2. „Může být rok v titulku, když není v URL?“ — praktický problém odvozený z doporučení stabilní URL a aktuálního obsahu.
3. „Co má být na stránce po skončení akce?“ — praktický problém + Google ecommerce guidance k prázdným kategoriím.
4. „Jak brzy stránku před sezonou zveřejnit?“ — primární doporučení Google vytvořit ji s předstihem; bez vymyšleného počtu dní.
5. „Stačí změnit datum aktualizace?“ — primární dokumentace Google k viditelnému datu a dateModified.
6. „Pomůže jedna URL i v AI odpovědích?“ — primární průvodce Google pro generativní funkce; odpověď bez garance.

## Primární zdroje

1. Google Search Central, Best practices for Black Friday and Cyber Monday pages: https://developers.google.com/search/blog/2020/10/best-practices-black-friday — vytvořit stránku včas, prolinkovat, používat opakovanou URL bez roku, aktualizovat obraz a požádat o nové projití po úpravě.
2. Google Search Central, Optimizing your website for generative AI features: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — AI Overviews a AI Mode stojí na základních systémech Vyhledávání; stránka musí být v indexu a způsobilá k úryvku; žádná zvláštní AI značka není potřeba.
3. Google Search Central, publication dates: https://developers.google.com/search/docs/appearance/publication-dates — viditelné datum a dateModified musí odpovídat skutečné publikaci či významné aktualizaci, ne datu popisované události.
4. Google Search Central, sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap — lastmod má odrážet poslední významnou změnu; Google ho používá, jen když je konzistentně a ověřitelně přesný.
5. Bing Webmaster Blog, sitemaps in AI-powered search: https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search — přesný lastmod pomáhá prioritizovat nové projití; negarantuje zobrazení v AI odpovědi.
6. Google Search Central, ecommerce URL structure: https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites — dlouhodobé stabilní URL, jedna canonical; u prázdné kategorie bez užitečného obsahu noindex, případně 404 po odstranění z navigace.
7. Google Merchant Center, sale price effective date: https://support.google.com/merchants/answer/6324460 — u sale_price lze uvést interval účinnosti s časem a časovým pásmem.
8. Google Search Central, ecommerce structure: https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure — důležité stránky mají být dosažitelné běžnými odkazy; vyhledávací robot běžně nevyplňuje interní vyhledávání.

## Konkurenční pokrytí

České výsledky k přesnému záměru byly slabé. Anglické články převážně opakují jedinou radu z Googlu: jedna URL bez roku a publikace s předstihem. Často bez opory tvrdí, že stránka musí zůstat indexovaná celý rok nebo že starší URL automaticky získává „autoritu“. Nový článek přidá rozhodovací rozlišení mezi opakovanou událostí, jednorázovou kampaní, užitečným archivem a prázdnou kategorií a oddělí doložené chování Vyhledávání od domněnek o AI.

## Široká trendová rešerše A1

Nový doložený kandidát byl přidán do plánu: OpenAI 16. 9. 2026 oznámilo test Sponsored Agents u vybraných inzerentů v USA a napojení ChatGPT Ads na HubSpot a Shopify. Zdroj: https://openai.com/index/reimagining-advertising-with-ai/ . Nový řádek výslovně zakazuje tvrdit plošnou dostupnost v Česku. Ostatní čerstvé nálezy byly už v plánu nebo patří k refreshi existujících článků.
