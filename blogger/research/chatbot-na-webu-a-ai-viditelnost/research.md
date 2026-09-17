# Chatbot na webu a AI viditelnost — podklady

Datum ověření: 17. 9. 2026. Nový článek, slug `chatbot-na-webu-a-ai-viditelnost`, kategorie `analysis` podle sloupce D. První způsobilý nepublikovaný řádek 114. Stav repa před prací čistý. Neprovádíme refreshe.

## Rozdíl proti zadání

Sloupec C označuje tvrzení za „Data“ a uzavírá, že odpovědi zamčené v chatbotu nemohou být citované. Tento absolutní závěr nepřebíráme. Google nedělá interakce při procházení, ale existují AI agenti s ovládáním klávesnice a myši. Služby navíc umějí odděleně publikovat FAQ nebo veřejné stránky. Znalost v interní databázi, text vytvořený po otázce, veřejně načitatelná stránka a skutečná citace jsou odlišné stavy. O rozporu uživatel informován.

## A — kontrola témat

Proveden sken názvů, slugů a tagů všech 167 MDX článků a tematický filtr H2 v článcích, sekcích a pilíři. Podrobně čteny javascript-a-ai-roboti a rag-ai-vyhledavani. První je technický návod na dostupnost textu a renderování; druhý princip dohledání podkladů. Nový článek řeší rozhodnutí majitele webu: interní znalost chatbotu versus veřejná publikace a dvě různá měření. Technické návody neopakuje, odkazuje na ně. V plánu čeká samostatný text o gated content (řádek 121), proto nerozšiřovat na paywally a přihlášení obecně. WebMCP i obchodní protokoly už mají vlastní pokrytí/frontu.

Široký trendový průchod: Seznam Asistent (zpřístupnění přihlášeným a reklama Sklik), AI funkce Google, aktuální Cloudflare rozdělení účelů robotů, strukturovaná data a autorství, e-shopové/agentní protokoly, citace a experimenty s prokliky. Nový unikátní řádek nepřidán: relevantní věci patří do existujícího pokrytí nebo již čekají ve frontě.

Nálezy pro jiný nástroj, bez úpravy starých článků:
- Cloudflare 15. 9. 2026: https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/ — ověřit aktuální podobu rozdělení účelů proti https://aiseo-optimalizace.cz/blog/cloudflare-ai-bot-blocking/; plán řádek 279 už označuje překryv. Nepřebírat dřívější sekundární zkratku „všechny weby s reklamou“.
- Nové experimentální práce https://arxiv.org/abs/2608.04831 a https://arxiv.org/abs/2608.18352 jsou kandidáti pro následné posouzení metodiky v existujícím https://aiseo-optimalizace.cz/blog/zero-click-ai/; nebyly plně analyzovány a článek z nich nečerpá.
- https://blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/ a https://blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/ — existující tematické pokrytí; žádné nové duplicitní zadání.

## B — klíčová slova

Marketing Miner, jazyk cs, 17. 9. 2026: suggestions pro `chatbot na web` a `chatbot`, všechny čtyři typy (80 kreditů); přesná hledanost pro 10 dotazů (30 kreditů). Celkem 110 kreditů podle CLI. U širokého seedu 290 unikátních návrhů, úzký seed vrátil jen sám sebe. Hledanost: chatbot na web 30 (meziročně +112 %, historický peak 2025-08); chatbot 5900 (-8 %); ai chatbot 10000 (+17 %); chatbot zdarma 400 (-62 %); znalostní báze 60 (+21 %). Pět dalších dotazů bez vráceného záznamu: chatbot na webu, chatbot pro eshop, ai viditelnost, seznam asistent, webmcp. Chybějící údaj není nulová poptávka.

Široké dotazy míří hlavně na použití/aplikace a bezplatné nástroje, nikoli na viditelnost firem. Do článku se čísla o hledanosti nedávají; nelze je vydávat za poptávku po přesném analytickém tématu. Hlavní KW chatbot na web, podpůrné chatbot a SEO, chatbot pro e-shop, AI viditelnost, veřejná znalostní báze, obsah chatbotu Google, chatbot na webu 2026.

Google Suggest pro 8 seedů: chatbot co to je; chatbot na web; chatbot website integration; chatbot pro eshop/eshop; znalostní báze; seo chatbot. Žádný přímo naměřený dotaz o indexaci odpovědí. `seoul chatbot` a seznamy asistentů poslanců/soudců jsou jiný záměr, vyřazeny. YouTube převážně implementace (n8n, HTML/CSS/JavaScript) a obecné AI aplikace. Wikipedia chatbot 19 949 zobrazení za 12 měsíců, pouze doplňkový signál; WebMCP chybně přiřazen Web Map Service, zcela vyřazeno. YouTube WebMCP vracel nesouvisející CPGET/CP Plus, vyřazeno.

Trends: první průchod 8 seedů CZ, today 5-y, zastaven u prvního dotazu na HTTP 429; nejde o nulové rising queries. Druhý pokus po odstupu na hlavní 2 dotazy a today 12-m, výsledek doplněn níže. Nekopírujeme automatické závěry. Surová data v /tmp/aiseo-chatbot-20260917, do repa jen tento kurátorovaný záznam a insights.md.

## Primární zdroje a přesné meze

1. Google, Fix lazy-loaded content, aktualizace 10. 12. 2025, čteno 17. 9. 2026. https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading — Google Search neinteraguje se stránkou, nedávat důležitý obsah za akce; kontrola vykresleného HTML v URL Inspection. Odvození autora: nelze čekat, že Google položí v chatu obchodní otázku. Neznamená „Google neumí JS“.
2. Google AI features and your website. https://developers.google.com/search/docs/appearance/ai-features — supporting link v AI Overviews/Mode vyžaduje indexed a snippet eligible, bez záruky procházení/indexace/zobrazení. Týká se konkrétně Googlu, ne všech AI systémů.
3. Intercom content types, 19. 2. 2026. https://www.intercom.com/help/en/articles/9357928-overview-of-content-types-and-when-to-use-them — internal articles lze využít pro Fin, nelze je zařadit do veřejného Help Center; public articles mají jiné publikační možnosti. Dokumentace dodavatele, nikoli vlastní test instalace.
4. Intercom public articles, 31. 7. 2026. https://www.intercom.com/help/en/articles/9357931-create-and-manage-public-articles — unlisted vytvoří vlastní URL, není vyhledatelné v Help Center ani indexované vyhledávači dle dokumentace; Fin smí využít obsah, ale bez zdrojového odkazu. Zařazení do collection a správná audience jsou další kroky. Nesmíme tvrdit, že každá URL je vhodná pro indexaci.
5. Intercom prevent indexing, 23. 4. 2025. https://www.intercom.com/help/en/articles/5145271-prevent-search-engines-indexing-your-help-center — Help Center na vlastní doméně může mít vypnuté vyhledávání; obsah dál využitelný v Messengeru.
6. Anthropic computer use. https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool — screenshot, mouse/keyboard control; důkaz proti absolutní neschopnosti AI interagovat. Není důkaz rutinního indexování chatů ani citací.
7. ChatReact Knowledge Base. https://www.chatreact.ai/docs/en/knowledge-base — import webových stránek do znalostní báze, dokumenty, pravidla, FAQ. Směr web → znalosti chatbotu. Re-crawl existuje; aktualizace webu není automaticky aktuálnost každé kopie.
8. ChatReact FAQ Management. https://www.chatreact.ai/docs/en/faqs — samostatná publikace FAQ a embeddable FAQ widget, generování návrhů na vyžádání, nikoli automaticky z každého chatu. Je to skutečná výjimka proti větě „chatbotové služby nic veřejně nepublikují“. SEO tvrzení dodavatele ani slib rich snippets nepřebíráme jako prokázaný výsledek. Implementaci v konkrétním e-shopu jsme neměřili.
9. FlowHunt česká dokumentace: https://www.flowhunt.io/cs/knowledge-base/skip-indexing-content/ — terminologie interní indexace. Pouze související podklad, z článku neodvozujeme vlastnosti všech poskytovatelů.

## Konkurence a FAQ původ

Česká prezentace ChatReact https://www.chatreact.ai/cs spojuje chatbot, FAQ a zákaznickou podporu; dokumentace zvlášť popisuje zdroje a publikování. FlowHunt česká znalostní báze řeší zpracování zdrojů. Prostor pro náš článek: oddělit význam interního indexu od veřejného dohledání a dát majiteli webu rozhodovací tabulku. Nehodnotíme kvalitu poskytovatelů, nesestavujeme nákupní žebříček.

Trends pro přesné téma bez použitelných rising queries; Suggest má jen obecné dotazy. Otázky jsou redakčně formulované, netvrdíme že nástroje vrátily jejich přesné znění:
1. „Pomůže chatbot na webu se SEO?“ — Suggest `seo chatbot`, konkurenční ChatReact FAQ Management SEO claims; odpověď odděluje publikaci od chatu.
2. „Přečte Google odpověď, která vznikne až po dotazu do chatu?“ — doložený praktický problém v Google lazy-loading dokumentaci a našem článku javascript-a-ai-roboti, aplikovaný na chat. Ne údaj o četnosti dotazu.
3. „Je znalostní báze chatbotu automaticky veřejná?“ — Suggest znalostní báze + Intercom content types/public articles.
4. „Je rozbalovací FAQ stejný problém jako chatbot?“ — konkurence ChatReact FAQ widget (accordion) + Google rozlišení načtení a interakce; otázka o skutečné technické variantě.
5. „Máme z konverzací automaticky vytvářet veřejné články?“ — dodavatelská dokumentace ChatReact FAQ suggestions/review, redakční doporučení; nevydávat za měření zakázek.
6. „Jak oddělit přínos chatbotu od AI viditelnosti?“ — praktické oddělení importu/publikace v Intercom a ChatReact; autorský návrh měření, ne převzatá statistika.

## Redakční rozhodnutí

Žádné univerzální „AI neumí číst chat“, žádný příslib vyšších pozic/delšího času na webu jako ranking faktoru. Modelový e-shop s náhradním dílem je výslovně hypotetický, bez vymyšlených klientských výsledků. Neprovádíme audit konkrétního dodavatele ani experiment s indexací. Doporučené rozhodovací a měřicí tabulky jsou syntéza autora. CTA podle aktuálního src/content/pages/audit.ts: Audit AI viditelnosti, 3 600 Kč bez DPH / 4 356 Kč s DPH. Dokumenty marketingu obsahují starší popis konzultace, nepřebírán. Titulek/seoTitle do 60 znaků; letos = 2026.

### Opakování Trends dokončeno

Druhý průchod uspěl: CZ, **today 12-m**, 2 seedy. `chatbot`: rising lmsys chatbot arena, chatbot app development, what is a chatbot, chatbot development, claude chatbot, chatbot app, chatbot arena (tematicky platné, ale nesledují dostupnost obsahu); Claude/Janitor AI jsou související produkty, ne otázky k publikaci obsahu. `new york times` vyřazeno jako nesouvisející. `chatbot na web`: žádné rising/top queries, časová řada řídká (jediný relativní vrchol); nelze interpretovat jako nulový zájem. FAQ proto postupuje k Suggest a dokumentovaným problémům.

Pozor na souhrn skriptu: nadpis stále tvrdí 5 let i při explicitním today 12-m a avg_recent_12mo používá poslední body týdenní řady místo spolehlivého ročního souhrnu. Ani tento automatický průměr, ani chybné období nepřebíráme. Zdroj období je parametr požadavku a skutečné datumy řady (2025-09 až 2026-09). Skript skillu mimo scope neupravován.

## Doplnění z nezávislého auditu

Google-Agent: https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers#google-agent — na požadavek uživatele prochází a provádí akce. Nezaměňovat s běžným Googlebotem. Primární dokumentace otevřena i editorem. Zahrnuto v konečném článku jako další výjimka, bez slibu indexace výstupů.
