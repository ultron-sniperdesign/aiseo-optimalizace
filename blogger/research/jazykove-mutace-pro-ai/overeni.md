# Předpublikační kontrola

15. 9. 2026

- C2 fakta a C3 jazyk nezávislí subagenti; C5 nový subagent ve dvou oddělených krocích. Verdikt PUBLIKOVAT, všechny nálezy vypořádány. Zásadní nálezy žádné.
- C6 finální MDX: 1 454 slov dle checkeru, 275 pravidel, 0 nálezů. Počítadlo webu používá jiný rozsah (tělo bez některých dat).
- `npm run build` prošel: Astro check 0 errors / 0 warnings, 3 hints; 261 generovaných cest. Pagefind dokončen.
- Build HTML obsahuje 6 platných JSON-LD bloků (Organization, WebSite, BreadcrumbList, Article, HowTo, FAQPage). Žádný prázdný popis Stepperu.
- Nový slug je ve výpisu blogu a sitemapě. Všech 5 vlastních H2 obsahuje hl i strong.
- Obrázek: gpt-image-2 přes OpenAI Images API, high, 1536×1024, 5 849 tokenů. Prompt uložen v image-prompt.txt. Vizuálně ověřen ořez 1200×669: české texty celé a správně, objekty neuseknuté. Finální JPG 1200×800 a WebP. PNG nevstoupilo do public ani do gitu, bylo v /tmp.
- Prohlížeč: sestavený web přes lokální HTTP, karta i hero mají načtený WebP. Desktop 1280 px bez horizontálního přetečení. Mobilní šířka 375 px ověřena pro článek i výpis: document scrollWidth 360 px, žádné přetečení stránky. Tabulka se posouvá uvnitř wrapperu (šířka 320 px, obsah 544 px, overflow-x:auto). Hero načtené a titulek čitelný.
- Bezpečnostní kontrola dle security-review: statický MDX, známé komponenty, žádný nový script ani endpoint. Prohledány injection/XSS/deserializace/SQL/SSRF/credentials/crypto/auth/cookies/redirects/Actions/prototype/XXE vzory; 0 nálezů. Slovníkové regexy bez složitého zpětného prohledávání.
- IndexNow při lokálním buildu: odeslání 26 změněných URL skončilo HTTP 403. Pro publikaci nutné ověřit CI a skutečný stav, nelze tvrdit úspěšné odeslání jen podle hlášky submission complete.
- Cizí změny dokumentace a .astro-indexnow-cache.json ponechány mimo commit.

## Publikace

- Publikační commit `a9e151e90e10333f97f97b1bf36831cf3555f516`, CI run [34984624513](https://github.com/ultron-sniperdesign/aiseo-optimalizace/actions/runs/34984624513) úspěšný. Release `20260915-145356-a9e151e` aktivován 15. 9. 2026 ve 14:54 UTC.
- Živý článek https://aiseo-optimalizace.cz/blog/jazykove-mutace-pro-ai/ HTTP 200; JPG i WebP HTTP 200; slug přítomen ve výpisu i sitemap-0.xml; všech 6 JSON-LD bloků parsovatelných. V prohlížeči ověřen titulek, hero i karta s WebP.
- IndexNow: CI odeslalo 266 URL, odpověď 403. Následný POST jediné publikované URL s explicitním keyLocation také 403 (`UserForbiddedToAccessSite`). Veřejný ověřovací soubor vrací 200 a správný obsah. Přesnou příčinu odmítnutí neznáme, předáno do projektového boardu. Odeslání ani zaindexování netvrdíme; viz [oficiální dokumentace IndexNow](https://www.indexnow.org/documentation).
- D4: řádek `jazykove mutace pro ai` označen ano, doplněna veřejná URL.
