# Rešerše: jazykové mutace pro AI
Datum: 2026-09-15. Nový tutorial; první volný řádek plánu (110), C nevyžaduje update.

## Záměr a hranice
Český web přidávající němčinu: samostatné adresy, obsah pro konkrétní trh, dvojice hreflang/canonical, data, kontrola výsledku. Nepřisuzovat hreflang doložený přímý vliv na citace ChatGPT, Perplexity ani Seznamu. Ukázky example.com jsou smyšlené a označené. Počet opakování testu je redakční doporučení.

## A: široká rešerše a duplicity
Prohledány trendy Seznam Asistent, AI funkce Googlu, Bing AI Performance. Primární zdroje:
- https://blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/ (téma už pokryto).
- https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/ (související funkce už pokryty).
- https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c (nové členění Citation Share, Intents, Topics, Compare; kandidát do plánu pouze po kontrole širšího existujícího článku).
Sken title/slug/tags/H2 článků uložen do dočasného souboru, názvy všech 165 článků zkontrolovány. Hledání hreflang/vícejazy/jazykov v metadatech a sekcích/pilíři neukázalo specializovaný návod. Jedna zmínka hreflang v těle jak-strukturovat-pillar-content není samostatný návod. Blízké texty přečtené: strukturovana-data-pro-ai a test-viditelnosti-v-ai; navážeme odkazy a nebudeme přepisovat jejich obecnou metodiku.

## B: Marketing Miner a návrhy
Marketing Miner search-volume-data, jazyk cs, 6 vstupů, 5 výsledků, 18 kreditů:
| Dotaz | Hledanost vrácená API | Meziroční změna API |
|---|---:|---:|
| hreflang | 140 | -29 % |
| jazykové mutace | 50 | -15 % |
| vícejazyčný web | 10 | +9 % |
| mezinárodní seo | 10 | 0 % |
| ai seo | 130 | +34 % |
Seznam asistent chyběl ve výsledku; neznamená nulovou poptávku. Hodnoty jsou odhad nástroje, nejsou metriky našeho webu. Hreflang měsíce 90–200; malý objem, z toho nelze dělat silný sezónní závěr.
Suggestions pro hreflang, všechny čtyři typy: 114 vrácených, 95 po deduplikaci, 40 kreditů. Relevantní: hreflang checker 20, test hreflang 10, wordpress hreflang 10; technické anglické varianty slouží k pochopení záměru, ne k nacpání keywords. Extrémní YoY 999900 u malých frází nepoužito.
Google Suggest pro cs: hreflang tag checker, hreflang google documentation, hreflang tags meaning, hreflang tag generator; jazykové mutace shoptet, wordpress jazykové mutace. FAQ odvozené z těchto záměrů a chyb z dokumentace, nikoli vydávané za naměřené rostoucí dotazy.
Google Trends: první běh selhal kvůli chybějícímu pytrends; doověření v dočasném prostředí úspěšné: Trends CZ, 5 let, u hreflang vrací rising query „hreflang checker“. Časová řada hreflang je prázdná, takže souhrnné avg=0 je chybějící údaj, ne nulový zájem. U ostatních cílených frází jsou řady řídké; žádný silný trend z nich nevyvozuji. FAQ a postup kontroly odpovídají záměru checker/tester. Hrubá data zůstávají v /tmp/aiseo-hreflang-kw mimo repo. Celkem MM 58 kreditů.

## Primární technické zdroje (otevřeno a čteno 2026-09-15)
1. https://developers.google.com/search/docs/specialty/international/localized-versions — plné URL, obousměrné a vlastní odkazy, kódy jazyků/regionů, x-default, tři rovnocenné implementace, různé domény. Google neurčuje jazyk podle lang/hreflang. Neimplikuje účinek v cizích AI systémech.
2. https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites — oddělené URL, viditelný jazyk, riziko cookies a automatických přesměrování, specifika regionálních duplicit.
3. https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls — canonical je preference u duplicit; s hreflang stejný jazyk, pokud existuje.
4. https://developers.google.com/search/docs/appearance/ai-features — indexovaná stránka způsobilá pro snippet; žádné dodatečné technické podmínky a žádná garance zařazení.
5. https://schema.org/inLanguage — jazyk obsahu, kódy BCP 47, CreativeWork (tedy i WebPage).
6. https://www.w3.org/International/questions/qa-html-language-declarations — lang a zpracování obsahu včetně asistivních technologií.
7. https://developers.google.com/search/docs/appearance/structured-data/sd-policies — soulad dat a viditelného obsahu (auditor případně ověří samostatně).

## Poznámky k obsahu konkurence
České hledání hreflang/canonical vrací mj. starší technický ebook Taste https://taste.cz/ke-stazeni/taste-ochutnejte-technicke-seo.pdf. Ve výsledku je stará cesta k reportu Mezinárodní cílení v Search Console; nepřebírat navigaci ze starých návodů. V tomto článku učíme kontrolu HTML a skutečných URL. Žádná tvrzení nečerpáme ze sekundární diskuse nebo Redditu.

## Redakční rozhodnutí
seoTitle výslovně slibuje propojení mutací, obsah tento slib plní. Pět H2, ukázky HTML a JSON, tři typy komponent, FAQ ve frontmatteru pro společný layout. CTA Pack bez nedoložených tvrzení o jeho obsahu. Článek nebude tvrdit, že strukturovaná data nebo hreflang vynutí českou citaci.

## Uzávěr bloku A
Přečten i existující bing-ai-performance-report: Citation Share chybí a článek uvádí nemožnost podílu vůči ostatním. Přidán jeden nový řádek s výslovným UPDATE existujícího článku, nikoli nová duplicitní publikace. Stav trhu ověřen proti Microsoft nápovědě; dostupnost pro jednotlivý účet není ověřena.
