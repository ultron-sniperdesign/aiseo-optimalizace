# Kontroly publikace — chatbot-na-webu-a-ai-viditelnost

- Příprava 17.9.2026: 6 H2, všechna span.hl + strong; 6 FAQ; CTA aktuální Audit AI viditelnosti podle kanonického datového modulu.
- Jazyk po C4: 2004 slov podle checkeru (včetně metadat), 275 pravidel, 0 nálezů, v70 beze změny.
- Bezpečnostní kontrola nového MDX: statický obsah a existující komponenty; explicitní hledání příkazové/kódové/HTML injekce, deserializace, SQL, cest, SSRF, tajných klíčů, kryptografie, autentizace/CSRF/cookies, Actions, přesměrování, prototypů, regexů, XML a logování bez nálezů. Žádný nový runtime kód ani handler. 0 critical/high/medium/low.
- Obrázek gpt-image-2, 1536×1024 high, přesná preambule IMAGE_GUIDE. Nadpis CHATBOT NA WEBU, podtitul Odpověď v chatu, zdroj na webu. Vizuálně ověřen ořez1200×669, celé nápisy i oba panely. JPG1200×800 a WebP1536×1024; pracovní PNG smazáno. API hlásilo5816tokenů.
- Lokální náhled desktop1280 a mobil375: titulek, hero i obsah bez vodorovného přetékání celé stránky. Tabulky mají vlastní vodorovný posuvník, který je funkční součástí stávající komponenty. Článek ve výpisu blogu přítomen.
- Zdroje ověřeny nezávislým C2; 8 původních externích odkazů plus doplněný primární Google-Agent.

- První produkční build úspěšný (exit0), Astro0errors/0warnings/3hints ve stávajících komponentách. V HTML5platných JSON-LD bloků (Organization,WebSite,BreadcrumbList,Article,FAQPage), hero WebP přítomné, description aktuální.
- Desktopová karta ve výpisu vizuálně zkontrolována: oba české nápisy a celý motiv viditelné; nový článek první ve výpisu.
- Finální C6 po C5: 2001 slov, 0 nálezů. Druhý build po C5-02/03 exit0, validace beze změny. Mobilní karta také vizuálně ověřena celá; šířka dokumentu360px při viewport375px, bez přetékání stránky.
- C5 fáze2 uzavřena: PUBLIKOVAT,0otevřených nálezů; C5-01 auditor stáhl, všechny opravy ověřil. C5b bez zásadních nálezů není aktivní. Finální soubor shodný s auditem.

## Publikováno

- URL: https://aiseo-optimalizace.cz/blog/chatbot-na-webu-a-ai-viditelnost/
- Publikační commit: d8245cd. GitHub Actions35174595003 úspěšné, včetně upload/activate a HTTPS smoke testu.
- Veřejná kontrola17.9.2026: článek111796B, JPG86939B, WebP47438B, listing a sitemap-0.xml všeHTTP200. Slug v obou seznamech, canonical přesnáURL, og:image JPG. Pět platných JSON-LD bloků. Finální opravená formulace o základních podmínkách Googlu přítomná.
- Živý hero zkontrolován očima; odpovídá schválenému ořezu. Lokální karta a mobil ověřeny před publikací.
- Bing Webmaster Tools: správný web aiseo-optimalizace.cz → URL Submission → Submit URLs → odeslána jediná nováURL. Potvrzení v seznamu Submitted URLs: přesnáURL, Today at04:31; kvóta99→98. Odeslání přijato, samotné zařazení do indexu zatím netvrdíme. IndexNow nezapínán.
- Obsahový plán: změněn pouze řádek114, Eano,FpublikovanáURL. Nový řádek v tomto běhu nepřidán.
- CI informativně upozorňuje na starší Node20runtime akcí checkout/setup-node; nasazení úspěšné, workflow mimo scope neupravován.
