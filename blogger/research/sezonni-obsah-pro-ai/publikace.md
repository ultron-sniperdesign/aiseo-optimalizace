# Publikační kontrola — sezónní obsah a AI

Datum: 17. 9. 2026. Nový článek, řádek 118. Cílová URL: https://aiseo-optimalizace.cz/blog/sezonni-obsah-pro-ai/

## Hotové kontroly před publikací

- Title 52 znaků, seoTitle 52, description 140 znaků, answer 46 slov; kategorie analysis, 6 FAQ a 6 H2 se `span.hl` i `strong`.
- Marketing Miner: 80 kreditů suggestions + 36 kreditů search volume. Čísla jsou v textu označena jako modelované odhady; dva pokusy o Google Trends skončily HTTP 429, proto z nich článek nevyvozuje trendová tvrzení.
- C2: 6 nálezů, z toho dva zásadní; všechny zapracovány a zásadní opravy doověřeny v jediném kole C5b. C3: 21 nálezů, všechny zapracovány. C5: dvě fáze, tři další nálezy zapracovány; konečný verdikt PUBLIKOVAT, ověřeno 30/30 bodů, 0 nevyřešených.
- Mechanický checker: 1 853 slov, 275 aktivních pravidel, 0 nálezů. Slovník v70 beze změny. SHA-256 auditované verze: `50b32fe419ef247729bcfb49163f1a65a8b2482bb3eeaef1fa34aa1ba180857d`.
- Kompletní `npm run build` úspěšný; Astro check: 0 errors, 0 warnings, 3 existující hints v komponentách RichLayout/Answer/Figure. Pagefind dokončen.
- Produkční HTML: 5 platných JSON-LD, FAQPage, správný canonical a seoTitle. Listing a sitemap obsahují novou URL.
- Obrázek vygenerován přes OpenAI Images API, model gpt-image-2, 1536×1024, high, 5 860 tokenů (372 vstup, 5 488 výstup). Nadpis „SEZÓNNÍ OBSAH“, podtitul „Jedna URL, každý rok aktuální“. Ořez vizuálně zkontrolován; diakritika, kompozice a čitelnost jsou v pořádku.
- Odvozeniny JPG 1200×800/69 kB a WebP 1536×1024/41 kB; pracovní PNG odstraněn, žádná archivní kopie.
- Lokálně vizuálně ověřen hero na desktopu 1440×900, článek na mobilu 390×844 a desktopová karta ve výpisu. Dlouhý popisek SourceCard byl zkrácen; po opravě žádný prvek článku na mobilu nepřetéká.
- Statický MDX používá existující komponenty a konstantní data. Cílená kontrola skriptů, obslužných atributů, `javascript:` URL, `set:html`, uživatelských vstupů a secrets bez nálezu; žádný nový kód, endpoint ani závislost.
- Starší článek `/blog/aktualizace-obsahu-pro-ai/` obsahuje nedoložené intervaly a zobecnění čerstvosti. Nový článek na něj neodkazuje; starší soubor nebyl změněn a nález je určen refresh nástroji.
- Obsahový průzkum A5 přidal řádek 340 pro nové téma „Sponsored Agents v ChatGPT Ads — co znamenají pro firmy“, stav `ne`.

## Publikováno a ověřeno

- Publikační commit `c277122aad05c2a92b563cb9e558329e68b2e84b` byl odeslán na `main`.
- CI [35181134847](https://github.com/ultron-sniperdesign/aiseo-optimalizace/actions/runs/35181134847): success; build-and-deploy 1m13s včetně produkčního smoke testu. Jediné upozornění se týká existující migrace GitHub Actions z Node.js 20 na 24, běh dokončen úspěšně.
- Živě HTTP 200: článek (110 690 B), JPG (70 813 B), WebP (42 120 B), výpis blogu a sitemap-0.xml. Článek je ve výpisu i sitemapě.
- Živě ověřeno 5 platných JSON-LD, FAQPage, canonical, nastavení Search generative AI v textu a odstranění interního odkazu na starší článek čekající na refresh.
- Očima ověřen živý desktopový a mobilní hero; obrázek je načtený a žádný prvek článku na mobilu nepřetéká. Karta ve výpisu má čitelný obrázek, nadpis i popis.
- Bing Webmaster Tools byl otevřen na správném webu a kvóta před odesláním byla 97 URL. Automatické schválení odmítlo vyplnění i odeslání veřejné URL jako samostatnou externí stavovou změnu bez nového oprávnění; URL proto v tomto běhu odeslána nebyla. IndexNow zůstal vypnutý.
- Obsahový plán: jen řádek 118 uzavřen hodnotami `ano` a publikovanou URL; přeskočený řádek 115 zůstal beze změny. A5 přidal nový řádek 340 ve stavu `ne`.
