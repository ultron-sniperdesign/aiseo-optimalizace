# Publikační kontrola — přepis videa a podcastu

Datum: 17. 9. 2026. Nový článek, řádek 117. Cílová URL: https://aiseo-optimalizace.cz/blog/prepis-videa-a-podcastu-pro-ai/

## Hotové kontroly před publikací

- Title 56 znaků, seoTitle 45 (samostatný horní limit), description po revizi 135 znaků, answer 50 slov.
- Kategorie tutorial; 5 kroků HowTo, 6 FAQ, 6 H2 se span.hl a strong.
- C2: 0 zásadních, 1 drobný TIP přijat. C3: 12 připomínek přijato. C5: dvě fáze dokončeny, 3 drobné připomínky přijaty; konečný verdikt PUBLIKOVAT, všech 16 bodů ověřeno, 0 nevyřešených a 0 nových nálezů. Vypořádání po jednotlivých položkách v samostatném souboru.
- Mechanický checker po úpravách: 1 849 slov, 275 aktivních pravidel, 0 nálezů. Slovník v70 beze změny.
- Kompletní `npm run build` po třech opravách C5 úspěšný; Astro check: 0 errors, 0 warnings, 3 existující hints v komponentách RichLayout/Answer/Figure. Pagefind dokončen.
- Produkční HTML: 6 platných JSON-LD (Organization, WebSite, BreadcrumbList, Article, HowTo, FAQPage), správný canonical a seoTitle. Listing a sitemap obsahují novou URL.
- Obrázek přes open-ai-api-core/image.py: gpt-image-2, 1536×1024, high, API 5 823 tokenů (335 vstup, 5 488 výstup). Stylová preambule z IMAGE_GUIDE, scéna přehrávač + mikrofon → členěný dokument s ověřenými řádky. Nadpis „PŘEPIS NA WEB“, podtitul „Od nahrávky k ověřenému textu“. Vše významné v horních dvou třetinách. Ořez 1200×669 vizuálně zkontrolován, diakritika a kompozice v pořádku.
- Odvozeniny JPG 1200×800/77 903 B a WebP/38 356 B; PNG po kontrole odstraněn. Žádná archivní kopie.
- Vizuálně lokálně ověřen hero a karta výpisu při desktopové šířce, mobil 375×812: nadpis, obrázek a porovnávací tabulka, žádný vodorovný přesah stránky.
- Statický MDX: pouze existující komponenty a konstantní data. Cílená kontrola vzorů spouštění kódu, injekcí, uživatelských vstupů, síťových volání a secrets bez nálezu; žádný nový obslužný kód nebo endpoint. Security-review: 0 critical/high/medium/low ve změně.
- Interní odkaz `/blog/ai-seo-content/`, u kterého měl auditor problém s webovým nástrojem, nezávisle ověřen HTTP 200.
- Před publikací fetch origin/main: 0 commitů rozdílu. Změny jiných prací nepřibírány.

## Publikováno a ověřeno

- Publikační commit `094378c701a0b36b2e38c71708294c6547e4bbba`, push na main úspěšný.
- CI [35179124969](https://github.com/ultron-sniperdesign/aiseo-optimalizace/actions/runs/35179124969): success, build-and-deploy 1m11s, včetně produkčního smoke testu.
- Živě HTTP 200: článek (110 344 B), JPG (77 903 B), WebP (38 356 B), výpis blogu a sitemap-0.xml. Článek uveden ve výpisu i sitemapě.
- Živě ověřeno všech 6 JSON-LD, canonical a všechny tři poslední opravy C5.
- Očima ověřen živý desktopový nadpis a celý hero; mobilní karta ve výpisu má čitelný nadpis, ilustraci i popis bez ořezu. Obrázek je skutečně načtený. Mobilní článek a tabulka byly ověřeny již lokálně před publikací.
- Bing Webmaster Tools → URL Submission → Submit URLs: ručně odeslána nová URL, potvrzena v seznamu `Today at 05:44`, kvóta 98 → 97. Jde o přijetí URL, nikoli důkaz indexace. IndexNow nezapínán.
- Obsahový plán: pouze řádek 117, E = ano, F = publikovaná URL; ostatní řádky beze změny. Nové téma v A5 nepřidáno.
- CI upozorňuje na Node 20 runtime v akcích checkout/setup-node; běh dokončen úspěšně. Jde o existující konfiguraci mimo publikační scope, neupravována.

Hotový článek: https://aiseo-optimalizace.cz/blog/prepis-videa-a-podcastu-pro-ai/
