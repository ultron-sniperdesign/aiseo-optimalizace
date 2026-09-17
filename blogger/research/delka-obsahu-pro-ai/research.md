# Délka obsahu pro AI — podklady, 17. 9. 2026

## Výběr a hranice
První volný řádek 112: `delka obsahu pro ai`, D=analysis. Nový článek. Pokyn C o nulovém vlivu počtu slov je hypotéza, ne fakt. Sken metadat všech 166 článků + cílené H2 v článcích/sekcích/pilíři; celé čteny ai-seo-content a pasazova-optimalizace-obsahu. První pokrývá obecné zásady a hustotu faktů, druhý samostatnost pasáží. Nový text rozebírá měření délky a rozdíl mezi podílem mezi citovanými a pravděpodobností citace. Nevytváří další obecný návod na strukturu. Sekce rozhodovaci-matice řeší volbu podle záměru, ne metodiku studií délky.

## A — trendy a fronta
Prohledány Seznam Asistent/Sklik, Google generativní vyhledávání, Bing AI Performance, Cloudflare roboti. Nový řádek nepřidán: relevantní témata už web nebo fronta pokrývají. Cloudflare 15. 9. publikoval změny smíšených robotů: https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/ ; navazuje na https://blog.cloudflare.com/bot-preference-sync/ a červencové oznámení. Kolize ověřena v plánu (řádky 207,279; cloudflare-ai-bot-blocking). Předat jako zdroj pro nástroj aktualizací, existující články neměnit.
Seznam zdroje: https://blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/ a https://blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/ . Bing přehled https://blogs.bing.com/search ukazuje AI Performance novinky již z června, nejsou nové téma do fronty.

## B — hledanost a záměr
Marketing Miner 17. 9. 2026 cs, 7 vstupů, 3 výsledky, 21 kreditů. ai seo 130/měsíc, YoY +34 %; seo copywriting 280, +31 %; počet slov 2000, −19 %. Délka článku, délka textu, obsah pro ai, seznam asistent bez vrácených dat (nikoli nula). Návrhy pro délka článku: 4 typy, 40 kreditů, 0 výsledků. Celkem 61 kreditů. Široké počet slov má záměr počítadla; článek za něj nebude vydáván.
Trends + Suggest přes připravený venv, CZ, 5 let, pět dotazů: délka článku, délka textu, seo copywriting, ai seo, seznam asistent. U délky žádné rising queries; řídké/nesrovnatelné časové řady, nelze odvodit trend tématu. ai seo má ai for seo / surfer seo — tematicky souvisejí, ale nejsou o délce. Suggest délka textu míří na Excel a délku čtení; seznam asistent obsahuje i nesouvisející asistenty poslanců/soudců. Tyto návrhy nejsou FAQ našeho tématu. Hrubá data v /tmp/aiseo-delka-20260917, ne do repa.
Cílové fráze: délka obsahu pro AI; délka článku pro AI; kolik slov má mít článek; počet slov a SEO; krátký a dlouhý obsah; délka textu a AI citace.

## Primární zdroje a meze
1. Google, Creating helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — explicitně nemá preferovaný počet slov. Platí pro Google, nepřevádět na všechny platformy.
2. Google, AI optimization guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — nedoporučuje zvláštní chunking taktiky; srozumitelnost není univerzální délka úseku. Použít jen krátce jako mez, nikoli tvrzení o jiných platformách.
3. Ahrefs, 3. 12. 2025: https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/ — analyzovaných 174 048 citovaných stránek po extrakci; 53,4 % pod 1000 slov. Spearman 0,04 v metodice a sekci 2 je **délka vs POZICE CITACE**, ne pravděpodobnost citace. Úvod to zobecňuje nepřesně. Bez necitovaných kandidátů není míra úspěšnosti. Další vnitřní nesoulad: celkový medián1115 vs53,4% pod1000; medián nepoužít. Výběr získatelných stránek je omezení.
4. AirOps + Kevin Indig, 13. 4. 2026: https://www.airops.com/report/the-fan-out-effect-what-happens-between-a-query-and-a-citation — 16851dotazů, 3běhy,353799stránek; sleduje i nalezené necitované. Tabulka Word Count:500–999=>34,3%;5000+=>28,6%; vylučuje méně100slov. N tabulky jsou pozorování nad dotazy/stránkami/běhy, nelze vydávat jejich součet za unikátní stránky. Výzkum pozorovací, nikoli zásah se zkrácením téže stránky; neříká, že zkrácení zvýší šanci o rozdíl sazeb.
5. LumenGEO, Perplexity: https://lumengeo.co/blog/perplexity-cited-page-word-count — medián1748slov z954stránek,160komerčníchdotazů, US, citace2.7.2026,texty16.7.2026. Pouze popis vzorku, nikoli doporučený cíl. Sběr jediný snapshot, částstránek nezískaná. Metodika má nejasný jmenovatel69,9% (954/1369 vs /1385); procento pokrytí nepoužít.

## FAQ — původ každé otázky
Trends ani Suggest nedaly použitelný dotaz o vztahu délky a citací; použita vrstva konkurence a doložených metodických problémů.
- Kolik slov má mít článek pro AI? Ahrefs úvod polemizuje s požadavkem10000slov; Google otázka na preferred word count.
- Mají krátké články větší šanci na citaci? Ahrefs distribuce vs AirOps citation rate; vlastní vysvětlení rozdílného jmenovatele.
- Dokazuje korelace0,04 nulový vliv délky? Ahrefs sekce2 uvádí pozici citace; přímý metodický problém primárního zdroje.
- Mám zkrátit všechny dlouhé články? AirOps srovnání skupin vs chybějící experiment.
- Je1748slov ideální délka pro Perplexity? FAQ samotného LumenGEO a jejich metodika.
- Jak dlouhá má být krátká odpověď v úvodu? Vlastní redakční pravidlo40–60slov z workflow/šablony; explicitně není požadavek AI platformy.

## Redakční rozhodnutí
Tři studie nejsou společný žebříček. Čísla připsat zdrojům a vzorkům. Vlastní tabulka100stránek je **modelový početní příklad**, ne měření ani klientská data. Žádné měření českých AI citací v tomto běhu. CTA na audit bez vymyšlených dodávek či záruk. Jediný MDX zdroj v src/content/articles/delka-obsahu-pro-ai.mdx, bez záložní kopie draftu.

## Kontroly před publikací
- C2 a C5: PUBLIKOVAT, žádné zásadní nálezy. C3: dvě drobné opravy přijaty; C5 dva drobné tipy přijaty. Vypořádání v samostatném požadovaném reportu.
- Konečný checker: 1698 slov, 0 nálezů; answer50slov. Zpřesněn slovník v70 pro fyzický povrch vs digitální kalk.
- D2: gpt-image-2,1536×1024,high,5859tokenů. Český text „DÉLKA OBSAHU / Kolik slov potřebujete“, standardní preambule. Ořez1200×669 vizuálně OK. JPG1200×800+WebP1536×1024, PNG odstraněno po kontrole. Žádná masterkopie.
- npm run build dokončen s exit0 po poslední úpravě. 5JSON-LD; sitemap a listing obsahují slug; všechny texty Stepper/Checklist se vykreslily, žádné prázdné stp__desc. Finálníúvod ianswer ověřeny vdist.
- Pět externích zdrojů HTTP200; interní cíle existují vdist. Obsahová kontrola diff/secrets/injection podle security-review beználezu, žádné endpointy/skripty/přístupy přidány; regex bez vnořených opakování.
- Lokální náhled na127.0.0.1:4330: desktop1280px a mobil375px, hero načtené, ořez a českýtext celé, mobil bez vodorovného přetékání. Karta článku ve výpisu a odkaz funkční.
