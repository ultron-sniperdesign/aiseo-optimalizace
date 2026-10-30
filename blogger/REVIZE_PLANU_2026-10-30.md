# Revize obsahového plánu — 30. 10. 2026

**Zadání (uživatel, 30. 10. 2026):** projít celý blogový plán a zhodnotit, jestli čekající
články jsou ještě aktuální; udělat research aktuální situace AI vyhledávání na českém
internetu, trhu a trendů; plán podle toho aktualizovat a přeprioritizovat; použít vlastní
data z GSC a GA. Blog se trhu zhruba měsíc nevěnoval.

**Rozsah:** 149 volných řádků proti 192 publikovaným článkům.

**Metoda:**

1. Vlastní data: GSC aiseo-optimalizace.cz (dotazy září proti říjnu, stránky za říjen),
   GA4 vlastního e-shopu megadetail.cz (kanály, AI asistenti, vstupní stránky), Marketing
   Miner (hledanost 74 pojmů v ČR). GA4 tohoto webu jen jako výhrada, viz níž.
2. Research trhu v pěti oblastech (Google, Seznam a český ekosystém, ostatní AI platformy,
   adopce a studie, regulace a infrastruktura): 123 zjištění s datem a zdrojem, přednost
   primárním zdrojům. Plný výpis zjištění se zdroji: `REVIZE_PLANU_2026-10-30-research.md`.
3. Hodnocení všech 149 řádků proti researchi a publikovaným článkům (čtyři dávky), pak
   kritik, který napadl 17 verdiktů a navrhl pořadí a nová témata.
4. **Skeptické ověření všech 63 navržených uzávěrů** v textu cílových článků (pět
   ověřovatelů, výchozí pozice „neobstojí“). Obstálo 56, sedm se změnilo — viz § 5.

Celkem 15 agentů (strop Z1). Plán přeřazen fyzicky: **první volný řádek = nejvyšší priorita**,
obě větve tak dál berou první volný řádek a dostanou to nejdůležitější.

**Výhrady k metodě:**

- Webové hledání narazilo na limit (200 dotazů na tah sdílených všemi agenty). Část bodů
  byla ověřena jen načtením známých URL, část zůstala neověřená — vždy je to napsané přímo
  v poznámce řádku („neověřeno“, „jen sekundárně“). Před psaním ověřit, ne převzít.
- Stránky nápovědy OpenAI vracely HTTP 403; údaje o reklamě v ChatGPT jsou ze
  sekundárních zdrojů (TNW, SER, česká agentura).
- **GA4 aiseo-optimalizace.cz není od 22.–23. 9. 2026 srovnatelný se zářím** (Consent Mode v2:
  organika 218 → 31 relací, placené sociální sítě 0). Trendy tohoto webu jsem četl z GSC.

---

## 1. Souhrn

| Kontrola | Výsledek |
|---|---|
| Volné řádky před revizí | 149 (všechny přidané v září a říjnu 2026) |
| Uzavřeno jako SLOUČENO do publikovaného článku | **40** |
| Uzavřeno jako SLOUČENO do jiného volného řádku | **11** |
| Uzavřeno jako ZRUŠENO | **8** |
| Zůstává otevřených z původních | 90 (z toho 10 s přepsaným tématem nebo titulkem) |
| Nové řádky | **7** |
| Volných řádků po revizi | **97** |
| Kandidáti na refresh publikovaných článků | 43 článků (příloha B), pořadí prvních 16 v REFRESH_QUEUE |

**Hlavní zjištění:** plán nezestárl stářím (nejstarší řádek má šest týdnů), ale
**sousedstvím a trhem**. Blog za září a říjen vydal desítky článků, které velkou část
čekajících témat už pokryly — proto 40 sloučení. A trh se za měsíc posunul tak, že několik
témat musí jít dopředu, protože se týkají českých e-shopů hned (DMA v EHP, reklama
v ChatGPT, agentní nakupování na Zboží.cz).

## 2. Co se na trhu změnilo (výběr s dopadem na ČR)

| Datum | Co | Platí v ČR? | Zdroj |
|---|---|---|---|
| 23. 7. / 8. 9. / 18. 9. 2026 | Pokuta EK podle DMA (460 mil. € za vyhledávání). Google v EHP přestavěl výsledky: bloky srovnávačů a dodavatelů u produktů, hotelů, místních firem. Kolem 16.–18. 9. v EHP prakticky zmizely bezplatné produktové výpisy (data DE/FR/BE/SE/NL, za ČR nikdo) | ano (EHP) | developers.google.com/search/docs/appearance/aggregator-features; seroundtable.com/google-drops-free-product-listings-eea-42113.html |
| 24. 8. / 31. 8. 2026 | Reklama v ChatGPT ve 31 evropských trzích včetně ČR (jen Free a Go), Ads Manager otevřený | ano | thenextweb.com/news/chatgpt-ads-expand-31-european-markets (stránka OpenAI 403) |
| 31. 8. 2026 | Zboží.cz testuje agentní nakupování na standardu UCP („Připravit nákup“). Zatím e-shopy na Shopify, Shoptet v pilotu, Upgates v žádném zdroji | ano | blog.seznam.cz/2026/08/seznam-cz-spousti-agentni-nakupovani-za-pomoci-ai/ |
| 31. 8. / 21. 10. 2026 | Přepínač „Search generative AI“ v Search Console pro všechny weby; 21. 10. zařazen do dokumentace „Control what you share“ | ano | support.google.com/webmasters/answer/16908024 |
| září 2026 | Search Console: typ vyhledávání „multimodální“ (Lens, Zakroužkuj a vyhledej) i v hlavním přehledu výkonu | ano | developers.google.com/search/blog/2026/09/web-multimodal-in-sc |
| 15. 9. 2026 | Cloudflare: nové výchozí hodnoty pro nové domény; **víceúčeloví roboti (i Googlebot) se posuzují podle nejpřísnějšího pravidla** — blokace Trainingu je může zablokovat | ano (weby za CF) | blog.cloudflare.com/content-independence-day-ai-options/ |
| 1. 10. 2026 | Seznam Nákupy: chybějící parametry kritické / důležité / doplňkové; kritické rozhodují o filtrovaném vyhledávání; statistiky od 9. 10. jen ve Skliku | ano | blog.seznam.cz/2026/10/novinky-v-seznam-nakupech-… |
| 15. 10. 2026 | Seznam AI propojeno se Sreality, do konce roku Mapy.com, Kupi.cz, Sauto.cz; „vyšší statisíce“ uživatelů týdně (rozhovor 22. 10.: přes 300 tisíc) | ano | blog.seznam.cz/2026/10/seznam-ai-propojuje-… |
| stav nápovědy 30. 10. | Seznam AI podle nápovědy běží na **SeLLMa + Gemma**; dva naše články uvádějí SeLLMa + OpenAI přes Azure | ano | o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/ |
| 15. 10. 2026 | Google: víc odkazů v textu AI odpovědí, karusely článků s preferovanými zdroji, náhledy u odkazů; dostupnost v češtině neuvedena | neověřeno | blog.google/…/updates-ai-mode-overviews-explore-web/ |
| 15. 10. 2026 | Universal Cart (UCP) jen v USA; nákup „Buy“ přes UCP jen USA, Kanada, Austrálie; AI přehledy v Merchant Center jen anglicky v 5 zemích | ne | blog.google/…/universal-cart-launch/; support.google.com/merchants/answer/16837055 |
| 28. 10. 2026 | Reklamy v režimu AI v dalších 10 zemích, z EU žádná; v ČR jen reklamy nad a pod Přehledem od AI | ne | blog.google/products/ads-commerce/ads-in-ai-mode-global/ |
| 2. 8. 2026 | AI Act čl. 50 (chatbot musí ohlásit, že je AI; deepfake označit). Omnibus 2026/1744 odložil jen vysoce rizikové systémy. Český adaptační zákon chybí | ano | digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force |
| 4. 9. 2026 | Apple: dokumentace Applebota — data krmí AI odpovědi Siri a Apple Search, nosnippet je z nich vyřadí. Siri AI na iPhonu v EU kvůli DMA není | dokumentace ano, Siri AI ne | support.apple.com/en-us/119829 |
| 13. 10. 2026 | Bing Webmaster Tools: Topics Portfolio (beta) — dotazy, kde jsou citováni jiní a vy ne | ano (globální) | blogs.bing.com/webmaster/2026/10/… |
| 15. 10. 2026 | Shoptet (Reshoper, přes MediaGuru): z AI 0,3 % návštěv e-shopů, ChatGPT přes 90 %, AI návštěvy konvertují o 29 % lépe; e-shopy se strukturovanými daty mají o polovinu víc AI návštěv (korelace) | ano | mediaguru.cz/ai-privadi-na-e-shopy-0-3-navstev-… |
| 9/2026 | StatCounter ČR, prokliky z AI chatbotů: ChatGPT 74,7 %, Gemini 15,9 %, Copilot 4,2 %, Perplexity 3,9 %, Claude 0,9 % | ano | gs.statcounter.com/ai-chatbot-market-share/all/czech-republic |
| 9/2026 | Průzkumy: ui42/Ipsos — 51,9 % použilo AI při nákupu, doporučení věří 22,3 %, přes AI nakoupila asi 3 %; APEK — 50 % online nakupujících; NMS — dvě třetiny Čechů aspoň občas | ano | ui42.cz/ecommerce-barometr-2026; feedit.cz (APEK); echo24.cz (NMS) |
| 29. 9. / 28. 10. 2026 | ChatGPT přes 1,2 mld. týdně (DevDay, sekundárně); aplikace Gemini přes 1 mld. měsíčně (Alphabet Q3) | globálně | the-decoder.com; blog.google (Alphabet Q3) |

## 3. Vlastní data

**GSC aiseo-optimalizace.cz.** Zobrazení rostou (červenec ~150–300/den → září–říjen
~700–2 100/den), kliky zůstávají v jednotkách. Říjen (1.–28.): /ai-mode/ 15 405 zobrazení
a 7 kliků, jak-vypnout-ai-overview 3 691 a 45 (nejklikanější článek), rezim-ai-google
1 034 a 14. Nové rostoucí dotazy: „seo katalogy“ 433 ← 29 (pozice 8 s local-seo-cesko-2026,
hledanost vrcholí v prosinci 3 600), „základy seo“ 110 ← 7, „ai seo“ 76 ← 8, dotazy na
zrušení režimu AI, a poprvé „jak vypnout gemini“. Přibývají dotazy ve tvaru promptu.

**Marketing Miner, hledanost v ČR** (řada zřejmě 10/2025 → 9/2026, duben 2026 je výpadek
v datech): gemini 208 k → 694 k (3,3×), claude 21 k → 154 k (7×), režim ai 3,3 k → 37 k,
perplexity 60 k → 18 k (−70 %), chatgpt atlas 15 k → 170, ai act 1 200/měs (srpen 1 800),
jak vypnout gemini 320/měs. Hledanost není používání (viz hledanost-neni-adopce): v proklicích
na české weby drží Perplexity 3,85 %, víc než Claude (0,9 %).

**GA4 megadetail.cz, 1.–29. 10. 2026** (vlastní e-shop, čísla smí ven):

| Ukazatel | Hodnota |
|---|---|
| Kanál AI asistentů — relace | 374 z 15 816 (**2,4 %**; Shoptet uvádí průměr 0,3 %) |
| Kanál AI asistentů — objednávky | 14 ze 124 (**11 %**; Marketing Miner uvádí průměr 0,6 %, horní desetina 3 %) |
| Kanál AI asistentů — tržby | 11 831 z 135 637 Kč (8,7 %) |
| Podle zdroje | chatgpt.com 346 relací / 13 objednávek, gemini.google.com 28 / 1, claude.ai 1 / 0 |
| Vstupní stránky z AI | produkt 50 %, kategorie a články 26 %, homepage 9 %, košík 7 % |
| Týdenní průběh | 39–88 relací týdně od srpna, týden 19.–25. 10.: 154 |
| Organic Shopping (bezplatné výpisy) | 0–3 relace týdně už od srpna — zmizení výpisů se z GA4 ověřit nedá |

Výhrady: malý vzorek (14 objednávek), e-shop agentura záměrně optimalizuje pro AI, kanál
AI asistentů v GA4 nemá data před cca 7. 6. 2026 a zpětně nedoplňuje. **Údaj Similarwebu,
že 62 % prokliků z ChatGPT přistane na homepage, na megadetail nesedí (9 %).**

## 4. Nové pořadí a podmínky

Prvních 19 řádků plánu po revizi (celé pořadí v příloze A). Důvody a podmínky jsou přímo
ve sloupci C každého řádku, souhrn v `blogger/PRIORITA_2026-10-30.md`.

1. `agregatorova jednotka ve vyhledavani` — DMA v EHP, největší letošní změna výsledků pro české e-shopy (sloučen `dma rozhodnuti a ai odpovedi`).
2. `reklama v ai odpovedich` — reklama v ChatGPT v ČR od 24. 8., Google jen nad a pod Přehledem od AI, Sklik v Seznam AI (sloučen `chatgpt sponsored agents reklamy`).
3. `propad navstevnosti ceskych eshopu z ai` — pět českých čísel z podzimu + data megadetail.
4. `agentni nakupovani zbozi cz` — psát po Upgates verze 37 (začátek listopadu); sloučeny `univerzalni kosik google pro eshopy` a `protokoly pro nakupni agenty ucp acp`.
5. `ai act pro weby od srpna 2026` — čl. 50 platí, hledanost 1 200/měs.
6. `jak vypnout gemini v telefonu` 🆕 — 320 hledání/měs, návody na vypnutí nesou nejvíc kliků webu.
7. `parametry nabidek zbozi cz podle dulezitosti`
8. `pravidla platforem pro ai obsah v reklame` — přepsáno na produktové fotky a popisky z AI v Merchant Center.
9. `ai souhrny recenzi` — Firmy.cz má AI souhrn hodnocení s podmínkami (sloučen `zbozi cz shrnuje recenze pres ai`).
10. `recenze za odmenu strukturovana data`
11. `kategorie produktu ve strukturovanych datech`
12. `podil chatgpt na ai navstevnosti` — jmenovatele (Shoptet, StatCounter, megadetail).
13. `ai funkce shoptet upgates` 🆕 — po Upgates verze 37.
14. `cesky vzorek dotazu s ai prehledem` — měřit mimo spamovou aktualizaci 24. 9.–8. 10.
15. `kolik ceskych eshopu je pro ai neviditelnych`
16. `generovani souboru ve vyhledavani` — přepsáno na „co z novinek režimu AI v Česku není“ (sloučeny `canvas v rezimu ai`, `sesity v rezimu ai`).
17. `kolik cechu pouziva ai` — **nepsat před vydáním dat ČSÚ za 2026**, jinak přeskočit.
18. `kde je vase publikum ai` — sloučen `vyplati se jeste perplexity`.
19. `ai agenti v google hledani` — přepsáno na sledování cen v režimu AI; před psaním vyzkoušet v češtině (sloučen `informacni agenti v google search`).

## 5. Uzávěry, které ověření změnilo

| Řádek | Navrženo | Po ověření | Proč |
|---|---|---|---|
| `geo jako pipeline ne zebricek` | zrušit | sloučeno do `kriticky pohled na geo vyzkum` jako povinná sekce | řetěz kroků (přeřazení, věrnost, chování) v korpusu chybí — praktický obsah existuje |
| `vyplati se jeste perplexity` | sloučit do perplexity-seo | sloučeno do `kde je vase publikum ai` | perplexity-seo je návod, otázku „vyplatí se“ nemá |
| `neaktualni udaje v mapach a ai odpovedi` | sloučit do `rozporne udaje o firme` | sloučeno do otviraci-doba-a-aktualni-data | řádky se ptají na různé věci; zbývá duplicitní záznam a zrušená pobočka (refresh) |
| `lide se ptaji ai na doporuceni` | sloučit do `propad…` | **zůstává** | jiná otázka čtenáře (doporučení dodavatele, ne dopad na návštěvnost) |
| `google zavola firme za uzivatele` | sloučit | **zůstává** | publikovaný článek na něj odkazuje jako na budoucí text; nápověda Business Profile mechaniku popisuje |
| `google ai contribution pilot` | sloučit do vydelavat-na-ai-robotech | **zůstává** | cílový článek pilot nezmiňuje a tvrdí opak („u žádného provozovatele nedoloženo“) |
| `apple business pro siri` | sloučit s `applebot…` | **zůstává** | jiné publikum (návod pro firmu proti rozhodnutí správce webu) |

Celý seznam uzávěrů je v příloze A (T2); každý uzavřený řádek má ve sloupci C důvod
a původní zadání (`… || Původní zadání: …`), takže se dá vrátit.

## 6. Nové řádky (A5)

| Řádek | Proč teď |
|---|---|
| `jak vypnout gemini v telefonu` | přechod z Asistenta na Gemini od 4. 9. 2026 je nevratný; 320 hledání/měs; v GSC poprvé dotazy na vypnutí Gemini |
| `ai funkce shoptet upgates` | „AI Readiness“ v Shoptetu je jen editor llms.txt (snadno se zamění s auditem); Upgates verze 37 začátkem listopadu |
| `google sdileni dat z vyhledavani dma` | vzorky dat od 16. 11. 2026; článek o DSA slíbil samostatný text k DMA |
| `chatgpt nakupni vysledky cesky eshop` | organické nákupní výsledky z feedů jen v USA, v EHP rozhoduje procházený web (zvážit jako refresh nakupovani-pres-ai) |
| `robots txt procentove kodovani cest` | Google 23. 10. 2026 doporučil procentové kódování cest; čeština s diakritikou, měřitelné z hotových vzorků |
| `data shoptetu ai navstevy` | první velký český vzorek k obsahovým faktorům AI návštěv (korelace) |
| `vyhrada vytezovani ai soudy` | BGH vyhlásí rozsudek 17. 12. 2026; psát až po něm |

## 7. Refreshe a bloky oprav

Pořadí refreshů (prvních 16) je zapsané v `blogger/REFRESH_QUEUE.md` → „Otevřené kandidáty“.
Na prvních místech jsou věcné chyby v publikovaných článcích:

1. **jak-vypnout-ai-overview** — nejklikanější článek webu, chybí oficiální přepínač v Search Console. Z měření titulků je vyloučený; titulek neměnit.
2. **cloudflare-ai-bot-blocking** — 15. 9. v budoucím čase; chybí, že blokace Trainingu může zablokovat Googlebot.
3. **seznam-cz-ai-vyhledavani**, pak **seznam-asistent-sellma** — model podle nápovědy SeLLMa + Gemma, zdroje, Sreality.
4. **blokovat-ai-odpovedi-gsc** — „nasazuje se po dávkách“ neplatí, CMA zákaz penalizace obsahuje; druhý zásah po 3. 12. 2026.

Kandidáti na blok oprav (jedna plošná vada napříč korpusem): starý název „Seznam Asistent“
jako aktuální název (hlavně jak-se-dostat-do-ai-odpovedi 7×, test-viditelnosti-v-ai,
recenze-srovnavace-pro-ai), stav návrhů AIPREF (content-signals-rizeni-ai-botu,
ai-crawler-robots-txt), zastaralá čísla trhu (900 mil. uživatelů ChatGPT, rozpětí 13–60 %
u Přehledů od AI).

## 8. Úkoly mimo blogger

- **Uživatel:** porovnat v Merchant Center bezplatné výpisy megadetail.cz před a po 16. 9. 2026 (GA4 to neukáže). Bez toho stojí řádek o DMA jen na datech z DE, FR, BE, SE a NL.
- **Admin:** spamová aktualizace Googlu 24. 9.–8. 10. 2026 je rušivý vliv pro přeměření titulků (2. 11.) i rodiny „režim AI“ (31. 10.).
- **Admin:** zvážit tlačítko preferovaných zdrojů Googlu na webu (dokumentace 20. 8. 2026, publisher.js).
- **Admin:** /llms.txt webu nesmí být nikde prezentovaný jako faktor pro Google (průvodce Googlu z 15. 6. a 10. 7. 2026).

---

## Příloha A — pořadí a uzávěry

### A1 — Pořadí volných řádků po revizi

| # | Řádek | Pracovní titulek | Priorita |
|---|---|---|---|
| 1 | `agregatorova jednotka ve vyhledavani` | Google v EU po DMA: bloky srovnávačů a dodavatelů a zmizelé bezplatné výpisy — co to znamená pro český e-shop | 1 |
| 2 | `reklama v ai odpovedich` | Reklama v AI odpovědích v Česku: co je placené (ChatGPT, Google, Seznam AI) a co zůstává organické | 1 |
| 3 | `propad navstevnosti ceskych eshopu z ai` | Co AI dělá s návštěvností českých e-shopů: data z podzimu 2026 (Shoptet, Marketing Miner, APEK, ui42) a proč propad organiky nejde automaticky přičíst AI | 1 |
| 4 | `agentni nakupovani zbozi cz` | Agentní nakupování na Zboží.cz: kdo se zapojí a co musí e-shop umět | 1 |
| 5 | `ai act pro weby od srpna 2026` | AI Act od 2. 8. 2026: co ukládá webům a e-shopům | 2 |
| 6 | `jak vypnout gemini v telefonu` 🆕 | Gemini místo Asistenta Google: jak ho v telefonu s Androidem omezit nebo vypnout a co se vrátit nedá | 2 |
| 7 | `parametry nabidek zbozi cz podle dulezitosti` | Parametry ve feedu pro Zboží.cz — které vyplnit jako první | 2 |
| 8 | `pravidla platforem pro ai obsah v reklame` | Produktové fotky a popisky z AI v Merchant Center: označení IPTC DigitalSourceType, co ho cestou na web smaže a co hrozí za hromadné generování | 2 |
| 9 | `ai souhrny recenzi` | AI souhrny recenzí — co je v nich a co s tím firma zmůže | 2 |
| 10 | `recenze za odmenu strukturovana data` | Recenze za odměnu ve strukturovaných datech — nové pravidlo Googlu pro hodnocení | 2 |
| 11 | `kategorie produktu ve strukturovanych datech` | Kategorie produktu ve strukturovaných datech — vlastní typ i kategorie Googlu | 2 |
| 12 | `podil chatgpt na ai navstevnosti` | Kolik z AI návštěvnosti nese ChatGPT a co s tím dělat | 2 |
| 13 | `ai funkce shoptet upgates` 🆕 | AI funkce v Shoptetu a Upgates: „AI Readiness“ je jen editor llms.txt a MCP server slouží ke správě e-shopu. Co z toho pomáhá viditelnosti v AI | 2 |
| 14 | `cesky vzorek dotazu s ai prehledem` | Vlastní český vzorek: u kterých dotazů se AI přehled objevil | 2 |
| 15 | `kolik ceskych eshopu je pro ai neviditelnych` | Je 91 % českých e-shopů pro AI neviditelných? Co to číslo měří | 2 |
| 16 | `generovani souboru ve vyhledavani` | Novinky režimu AI z podzimu 2026, které v Česku nejsou: sešity, generování souborů, interaktivní vizuály, Universal Cart a reklamy v odpovědích | 2 |
| 17 | `kolik cechu pouziva ai` | Kolik Čechů používá AI — co měří ČSÚ, Eurostat a průzkumy agentur | 2 |
| 18 | `kde je vase publikum ai` | Kterou AI používá vaše cílovka — a proč na tom závisí strategie | 3 |
| 19 | `ai agenti v google hledani` | Sledování cen a dostupnosti v režimu AI: co od 28. 9. 2026 hlídá za zákazníka, co z toho plyne pro e-shop a co z agentů ohlášených na I/O 2026 v Česku není | 3 |
| 20 | `brief pro ai seo dodavatele` | Jak zadat AI SEO dodavateli — co si připravit před poptávkou | 3 |
| 21 | `localbusiness pro ai` | LocalBusiness pro AI — pobočka, otevírací doba a lokální dotazy | 3 |
| 22 | `rozporne udaje o firme` | Když se údaje o vaší firmě napříč weby neshodují | 3 |
| 23 | `stranka o nas a kontakt pro duveru` | Stránka O nás a kontakt: trust signály, které čtou hodnotitelé i AI | 3 |
| 24 | `technicky problem nebo pokles obsahu` | Klesá vám stránka? Než ji přepíšete, vylučte technickou příčinu | 3 |
| 25 | `kriticky pohled na geo vyzkum` | Co GEO výzkum zatím doložil a co ne — kritický přehled | 3 |
| 26 | `lide se ptaji ai na doporuceni` | Když si zákazník nechá doporučit dodavatele od AI | 3 |
| 27 | `ctr benchmarky uz neplati` | CTR benchmarky podle pozice: proč už neplatí | 3 |
| 28 | `drobne pismo v gsc exportu` | Drobné písmo v Search Console: čím export mění čísla | 3 |
| 29 | `cloudflare wallets identita ai agenta` | Podepsaní agenti: jak se Google-Agent a agent ChatGPT prokazují webu (Web Bot Auth) a jak je e-shop pozná a ověří v logu | 3 |
| 30 | `ktery model stoji za ai odpovedi` | Za AI odpovědí nestojí jeden model: co to znamená pro kolísání | 3 |
| 31 | `vlastni ai obrazky v obsahu` | Máte v článcích AI obrázky? Kdy je přiznat a kdy to nikoho nezajímá | 3 |
| 32 | `metodika podilu zminek se lisi` | Podíl zmínek v AI: proč čísla ze dvou nástrojů nesedí | 3 |
| 33 | `firemni profil misto webu v ai` | Když AI ukáže firemní profil místo webu: co z toho firma ovlivní | 3 |
| 34 | `robots txt ktery zestarl` | Robots.txt, který zestárl: kolik robotů přibylo od doby, co jste ho psali | 3 |
| 35 | `podminene pozadavky a zatez robotu` | Umí váš web říct robotovi „nic nového"? Měření hlaviček | 3 |
| 36 | `roboti v robots txt ktere nikdo nedokumentuje` | Koho vlastně blokujete? User-agenty v českých robots.txt bez dokumentace | 3 |
| 37 | `google sam radi ptat se vickrat` | Google sám radí ptát se víckrát a ověřovat jinde. Co z toho plyne | 3 |
| 38 | `co je jen pro platici u google ai funkci` | AI funkce Googlu za předplatným: koho se dosah týká | 3 |
| 39 | `koncentrace citaci na malo domen` | Míří většina AI citací na pár set domén? Co to číslo měří | 3 |
| 40 | `ai funkce a firemni google ucty` | Které AI funkce na firemním Google účtu nefungují | 3 |
| 41 | `kupovane zminky pro ai` | Kupované zmínky pro AI: co o nich Google doslova píše a kde začíná porušení pravidel proti spamu | 3 |
| 42 | `reporty v ceske search console` | Který report v Search Console co ukazuje — česky a bez záměn | 3 |
| 43 | `strankovani a ai viditelnost` | Stránkování kategorie a AI: co se děje se stranou 2 a dál | 3 |
| 44 | `crawl budget sdilena kapacita` | Sdílená kapacita procházení a 304 v dokumentaci Googlu: co tam stojí a co je jen výklad o AI robotech | 3 |
| 45 | `anomalie dat v gsc ai reportu` | Propad v přehledu generativní AI? Nejdřív zkontrolujte anomálie dat v Search Console | 3 |
| 46 | `co chatgpt ze stranky opravdu otevre` | Nalezená, nebo přečtená: kdy ChatGPT stránku opravdu otevře | 3 |
| 47 | `kontrola adresy url co google videl` | Kontrola adresy URL: jak zjistit, co z vaší stránky Google opravdu stáhl | 3 |
| 48 | `alt text jak psat` | Alt text v roce 2026: jak ho psát pro čtenáře, Google i AI | 3 |
| 49 | `konkurencni sada nezavisle na modelu` | Nenechte si seznam konkurentů napsat modelem, který měříte | 3 |
| 50 | `konverzacni atributy merchant center` | Konverzační atributy v Merchant Center — co poslat Googlu pro odpovědi v režimu AI | 3 |
| 51 | `multimodalni vyhledavani v search console` | Multimodální vyhledávání v reportu AI Search Console — co znamená typ „Web: multimodal“ | 3 |
| 52 | `kolik behu potrebuje mereni ai viditelnosti` | Kolik dotazů a běhů potřebuje měření AI viditelnosti, aby nebylo šumem | 3 |
| 53 | `model pripsani a kanal relace v ga4` | Proč se konverze z AI liší podle reportu — kanál relace a model připsání v GA4 | 3 |
| 54 | `jednotky a zkratky v parametrech produktu` | Jednotky a zkratky v parametrech produktu — jak je zapsat, aby je pochopil zákazník, feed i AI | 3 |
| 55 | `nesoulad strukturovanych dat s textem` | Strukturovaná data v rozporu s textem — jak nesoulad najít a co hrozí | 3 |
| 56 | `cloudflare openai discovery pilot` | Cloudflare pomáhá OAI-SearchBotu objevovat stránky — co o pilotu víme | 3 |
| 57 | `google sdileni dat z vyhledavani dma` 🆕 | Google v EU licencuje data z vyhledávání konkurentům: kdo je dostane, odkdy a co to může znamenat pro Seznam a AI vyhledávače | 3 |
| 58 | `chatgpt nakupni vysledky cesky eshop` 🆕 | Proč se český e-shop neukáže v nákupních výsledcích ChatGPT: organický feed funguje jen v USA, v EHP rozhoduje procházený web | 3 |
| 59 | `robots txt procentove kodovani cest` 🆕 | Diakritika a zvláštní znaky v robots.txt: Google 23. 10. 2026 doporučil procentové kódování cest. Kolik českých webů to má jinak | 3 |
| 60 | `data shoptetu ai navstevy` 🆕 | Strukturovaná data ano, dlouhé popisy ne? Co ukázala data Shoptetu o e-shopech s návštěvami z AI a co z nich neplyne | 3 |
| 61 | `fakticka presnost pro ai` | Faktická přesnost obsahu v době, kdy ji AI zkresluje | 4 |
| 62 | `google quality rater guidelines` | Co jsou Google Quality Rater Guidelines a co z nich plyne pro český web | 4 |
| 63 | `mobilni web pro ai vyhledavani` | Mobilní verze webu a AI vyhledávání — hraje roli? | 4 |
| 64 | `rozpocet casu na ai seo` | Kolik času AI SEO reálně zabere — týdenní rozpočet pro malý tým | 4 |
| 65 | `ai odpovedi na firemnim profilu` | AI odpovídá za vaši firmu na profilu — co s tím zmůžete | 4 |
| 66 | `presnost lokalnich udaju v ai` | Jak často se AI plete v údajích o firmě — a co je doložené | 4 |
| 67 | `applebot a apple viditelnost` | Applebot podle dokumentace ze 4. 9. 2026: co krmí Siri a Apple Search, jak ho omezit (nosnippet vs. Applebot-Extended) a co z toho v Česku platí | 4 |
| 68 | `ai roboti chodi z usa` | AI roboti chodí z amerických datacenter — co to mění | 4 |
| 69 | `ai obsah o seo v ai odpovedich` | Když AI radí o SEO podle článků psaných AI | 4 |
| 70 | `kdo jeste bezi na bingu` | Kdo všechno běží na Bingu, aniž byste to věděli | 4 |
| 71 | `skore citovatelnosti obsahu` | Nástroje dávají obsahu skóre citovatelnosti. Platí? | 4 |
| 72 | `jak pripojit content credentials` | Jak k fotce připojit Content Credentials (a jestli to má dnes smysl) | 4 |
| 73 | `search profiles pro vydavatele` | Search profiles: vlastní prostor vydavatele ve výsledcích Googlu | 4 |
| 74 | `soft 404 a stroje` | Co vrátí české weby na neexistující adresu (měření) | 4 |
| 75 | `posila nekdo hlavicku content-usage` | Posílá už někdo hlavičku Content-Usage? (měření 80 domén) | 4 |
| 76 | `sentiment jako metrika ai viditelnosti` | Sentiment v AI odpovědích: co ta metrika měří a co ne | 4 |
| 77 | `generativni ui ve vyhledavani` | Když Google z vašeho obsahu postaví rozhraní, ne odkaz | 4 |
| 78 | `google zavola firme za uzivatele` | Když Google zavolá vaší firmě místo zákazníka | 4 |
| 79 | `ceske ekvivalenty dotazu kam na a napady na` | Dotazy typu kam na a nápady na: jak to vypadá česky | 4 |
| 80 | `mesic na mesic neni mezirocne` | Měsíc na měsíc není meziročně: past v růstových číslech | 4 |
| 81 | `netmonitor jako zdroj pro ai viditelnost` | Co se dá (a nedá) vyčíst z NetMonitoru pro AI viditelnost | 4 |
| 82 | `google ai contribution pilot` | Google zkouší platit webům za podíl na AI odpovědi: co je AI contribution pilot | 4 |
| 83 | `json-ld escapovani entit` | Google čte JSON-LD jen s jedním průchodem: dvojitě escapované entity už nerozbalí | 4 |
| 84 | `manipulace ai doporuceni prompt injection` | Může nalezená stránka manipulovat doporučení AI? | 4 |
| 85 | `mapa obrazku v sitemape` | Mapa obrázků v sitemapě — kdy má smysl a co do ní patří | 4 |
| 86 | `produkty z webu bez feedu merchant center` | Produkty do Merchant Center bez feedu — co Google převezme ze strukturovaných dat webu | 4 |
| 87 | `panelova data o ai vyhledavani` | Panelová data o AI vyhledávání — proč Similarweb a Datos dávají jiná čísla | 4 |
| 88 | `ukoncena pole v exportu search console` | Ukončená pole v exportu Search Console — proč FAQ a HowTo tiše ukazují nulu | 4 |
| 89 | `standard spir user-agent ai machinelearning` | User-agent AI a MachineLearning: český standard pro výhradu vytěžování textů a dat | 4 |
| 90 | `seznam webmaster a ai viditelnost` | Seznam Webmaster: co ukáže o webu a co o Seznam AI ne | 4 |
| 91 | `apple business pro siri` | Apple Business: jak spravovat údaje firmy pro Mapy a Siri | 4 |
| 92 | `obsah pro ai cena za polozku` | Kolik stojí obsah pro AI u e-shopu: krátké odpovědi, FAQ a popisy po kusech | 4 |
| 93 | `vyhrada vytezovani ai soudy` 🆕 | Výhrada proti vytěžování pro AI po rozsudku BGH: proč nestačí věta v obchodních podmínkách a co z toho plyne pro robots.txt | 4 |
| 94 | `ai seo checklist zdarma` | Ke stažení: jednostránkový AI SEO checklist zdarma | 5 |
| 95 | `co maji ceske weby na well-known` | Co mají české weby v adresáři /.well-known/ (měření) | 5 |
| 96 | `isaccessibleforfree placeny obsah` | Strukturovaná data pro placený obsah — isAccessibleForFree v praxi | 5 |
| 97 | `definedterm strukturovana data` | DefinedTerm a DefinedTermSet — strukturovaná data pro slovník pojmů: co z nich Google čte | 5 |

### A2 — Uzávěry


### Sloučeno do publikovaného článku (40)

| Řádek | Kam | 
|---|---|
| `rok v titulku obsahu` | sezonni-obsah-pro-ai |
| `kdy prestat investovat do ai seo` | roi-ai-seo |
| `kdy uz na to sam nestacis` | ai-seo-zdarma |
| `migrace url bez ztraty` | ai-friendly-url-struktura |
| `korelace vs kauzalita seo` | jak-cist-studie-o-ai-viditelnosti |
| `entitni autorita pro chatgpt` | ai-brand-mentions |
| `ktere typy obsahu ai cituje` | format-obsahu-podle-zameru-dotazu |
| `rusene typy strukturovanych dat` | strukturovana-data-pro-ai |
| `kde se meri ai viditelnost` | reportovani-ai-viditelnosti |
| `kadence refreshe obsahu` | aktualizace-obsahu-pro-ai |
| `britska pravidla pro ai vyhledavani` | blokovat-ai-odpovedi-gsc |
| `zmena vychoziho nastaveni robotu zari 2026` | cloudflare-ai-bot-blocking |
| `licencovana data v ai odpovedich` | yelp-licencuje-data-openai |
| `odkazovani na zdroje v clanku` | odkazovani-na-zdroje-v-obsahu |
| `co se pta ai kdyz hleda` | bing-ai-performance-report |
| `stejny dotaz jine mesto` | volatilita-ai-odpovedi |
| `proc ai nema poradi` | volatilita-ai-odpovedi |
| `ai prepisuje titulky` | generativni-ai-v-discoveru |
| `ai overviews u lokalnich dotazu` | local-seo-cesko-2026 |
| `cloudflare monetization gateway` | vydelavat-na-ai-robotech |
| `ipv6 a overovani ai robotu` | kdo-publikuje-ip-rozsahy |
| `jak stare jsou seznamy ip rozsahu` | kdo-publikuje-ip-rozsahy |
| `seznam asistent ve vysledcich` | seznam-cz-ai-vyhledavani |
| `co gsc o ai dotazech neukazuje` | gsc-ai-segmenty-mereni |
| `google rika ze llms txt ignoruje` | llms-txt-navod |
| `krok nula pred rucnim testem` | test-viditelnosti-v-ai |
| `gemini a vykreslovani javascriptu` | javascript-a-ai-roboti |
| `rezervacni platformy jako vstupenka do ai` | agentni-rezervace-v-ai-mode |
| `top stories uvnitr ai prehledu` | preferovane-zdroje-google |
| `co meri sledovana klicova slova` | jak-casto-se-zobrazuje-ai-prehled |
| `neaktualni udaje v mapach a ai odpovedi` | otviraci-doba-a-aktualni-data |
| `vstupni bod hledani na nove karte` | ai-mode-jako-vychozi-rezim |
| `chrome taby jako vstup dotazu` | nove-vstupy-do-vyhledavani |
| `kdyz se oznameni a napoveda rozchazeji` | jak-overit-dostupnost-ai-funkce |
| `profilepage autorska stranka` | person-data-pro-autora |
| `bing citation share` | bing-ai-performance-report |
| `dotaz na kategorii vs na potrebu` | srovnani-s-konkurenci-v-ai |
| `konverze z malych kanalu intervaly` | ai-navstevnost-konverze |
| `navstevy ze seznamu v ga4 utm` | ai-sumarizace-a-vydavatele |
| `sklik inzeraty v seznam ai` | seznam-cz-ai-vyhledavani |

### Zrušeno (8)

| Řádek | Kam | 
|---|---|
| `merchant center ai report` | reportovani-ai-viditelnosti |
| `francouzsky model ai a vydavatele` | blokovat-ai-odpovedi-gsc |
| `preskocit ai prehled` | — |
| `vydavatele zvazuji blokovat google` | blokovat-ai-odpovedi-gsc |
| `bing top source sekce` | bing-ai-performance-report |
| `sesity v rezimu ai` | — |
| `seo 2.0 search everywhere optimization` | aeo-geo-je-porad-seo |
| `google ugc fresh data program` | — |

### Sloučeno do jiného volného řádku (11)

| Řádek | Kam | 
|---|---|
| `vyplati se jeste perplexity` | `kde je vase publikum ai` |
| `geo jako pipeline ne zebricek` | `kriticky pohled na geo vyzkum` |
| `dma rozhodnuti a ai odpovedi` | `agregatorova jednotka ve vyhledavani` |
| `univerzalni kosik google pro eshopy` | `agentni nakupovani zbozi cz` |
| `informacni agenti v google search` | `ai agenti v google hledani` |
| `zastarala strukturovana data` | `nesoulad strukturovanych dat s textem` |
| `signaly cerstvosti misto crawlovani` | `cloudflare openai discovery pilot` |
| `protokoly pro nakupni agenty ucp acp` | `agentni nakupovani zbozi cz` |
| `zbozi cz shrnuje recenze pres ai` | `ai souhrny recenzi` |
| `canvas v rezimu ai` | `generovani souboru ve vyhledavani` |
| `chatgpt sponsored agents reklamy` | `reklama v ai odpovedich` |

## Příloha B — doplňky k refreshům podle článku

Z hodnocení řádků (`hodnotitel`) a ze skeptického ověření uzávěrů (`řádek …`). Každý bod je podklad pro refresh, ne hotová oprava — před zápisem do článku ověřit u zdroje (B2) a projít Z17.

### bing-ai-performance-report (5)
- [řádek `co se pta ai kdyz hleda`] Spojit s otevřenou položkou REFRESH_QUEUE z 3. 10. 2026 pro bing-ai-performance-report (vzorek přisouzený celému reportu, chybějící červnové novinky Citation Share, Intents, Topics a Compare). Doplnit Topics Portfolio (beta, 13. 10. 2026): seskupení grounding queries do témat a Top Opportunity Queries, tedy dotazy, kde jsou citované jiné weby a váš ne. Objemy citací jsou jen v rozpětích. Jako praktický krok to navázat na tři kroky práce s grounding queries.
- [řádek `bing citation share`] (1) Citation Share podle blogu z 16. 6.: definice a jmenovatel, pozorovací metrika, konkurenty nezobrazuje. Přepsat answer, FAQ „Jsou ta čísla úplná?“, řádek „Srovnání“ v CompareTable a chybu 01. (2) Doplnit Intents, Topics a Compare (16. 6.). (3) Topics Portfolio beta (13. 10.): Topic Size, Sites Cited, Queries a Top Opportunity Queries / Opportunity Queries, tedy dotazy, kde citují jiné weby a vás ne (objemy jsou uvedené jako rozsahy). (4) Vzorek se podle blogu z 10. 2. týká grounding queries, ne celého reportu (REFRESH_QUEUE ř. 83). Nápovědu bing.com/webmasters/help/ai-performance-9f8e7d6c vykresluje JavaScript, proto citovat blogy.
- [hodnotitel] Článek (29. 8. 2026) v odpovědi i ve FAQ tvrdí, že z reportu nejde počítat podíl vůči konkurenci. Bing 13. 10. 2026 přidal betu Topics Portfolio. Ukazuje velikost tématu (přibližný počet citací všech webů), počet citovaných webů a dotazy, u kterých jsou citované jiné weby a váš ne. Zobrazuje se jen u webů s dostatkem dat. https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/
- [hodnotitel] Článek (updated 29. 8. 2026) staví na tom, že z reportu nejde srovnávat s konkurencí a jde jen o grounding queries po URL. Bing 13. 10. 2026 přidal Topics Portfolio (beta): seskupuje grounding queries do témat, ukazuje velikost tématu, počet citovaných webů a Top Opportunity Queries, kde jsou citované jiné weby a váš ne, s objemy v rozpětích. Srovnávací tabulka Bing vs. Google tím zastarala. https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/
- [hodnotitel] Answer, FAQ a CompareTable tvrdí, že z reportu „nejde počítat podíl vůči konkurenci“. Bing 13. 10. 2026 přidal betu Topics Portfolio: velikost tématu (přibližné citace všech webů), počet citovaných webů a Top Opportunity Queries, tedy dotazy, kde jsou citováni jiní a web ne. Zobrazí se jen při dostatku dat. Přesné procento podílu blog neuvádí, srovnání s ostatními weby ale už jde. https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/

### seznam-cz-ai-vyhledavani (4)
- [řádek `seznam asistent ve vysledcich`] Ověřeno 30. 10.: (1) nápověda Časté dotazy dnes uvádí „kombinaci našeho vlastního velkého jazykového modelu SeLLMa a open-source modelu Gemma“, ne OpenAI přes Azure. Opravit answer, úvod, FAQ i sekci o modelech. (2) Mezi zdroji nápověda dnes vyjmenovává Počasí.cz, Firmy.cz, Sreality.cz, jízdní řády a Sport.cz. Věta „nápověda z nich uvádí jen Počasí.cz“ neplatí. (3) Blog Seznamu 15. 10. 2026: propojení se Sreality, do konce roku Mapy.com, Kupi.cz, Sauto.cz a Horoskopy, „vyšší statisíce uživatelů“ týdně. Neplatí tím Mistake 05 a FAQ „bez zveřejněných čísel o tom, kolik lidí ji používá“. (4) Nápověda pořád píše „betaverze pro omezený počet uživatelů“. (5) Doplnit odkaz na bing-seo-pro-ai: Seznam přijímá IndexNow (pokyn řádku). Věta o zdrojích pod odpovědí v článku už je.
- [hodnotitel] Odpověď nahoře i tělo článku tvrdí „podle nápovědy“, že Seznam AI kombinuje SeLLMa s modely OpenAI přes Azure a odpovídá z indexu Vyhledávání a Počasí.cz. Nápověda k 30. 10. 2026 uvádí SeLLMa s modelem Gemma a mezi zdroji i Firmy, Sreality, jízdní řády a Sport.cz. Seznam 15. 10. 2026 ohlásil propojení se Sreality a do konce roku s Mapy.com, Kupi.cz a Sauto.cz. Nápověda nemá datum, takže jistota je střední. https://o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/ https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/
- [hodnotitel] Odpověď, FAQ i tělo tvrdí, že Seznam AI „podle nápovědy“ kombinuje SeLLMa s modely OpenAI přes Microsoft Azure. Nápověda Seznam AI dnes uvádí SeLLMa + open-source Gemma a OpenAI nezmiňuje. Článek také píše, že nápověda zmiňuje jen index Vyhledávání a Počasí.cz a Firmy.cz se Sreality se „připojí postupně“. Nápověda dnes mezi zdroji vyjmenovává i Firmy.cz, Sreality.cz, jízdní řády a Sport.cz a Seznam 15. 10. 2026 oznámil propojení se Sreality. https://o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/ https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/
- [hodnotitel] Answer, FAQ i úvod tvrdí, že Seznam AI „kombinuje vlastní model SeLLMa s modely OpenAI přes Microsoft Azure“ a že podle nápovědy odpovídá z indexu Vyhledávání a z Počasí.cz, přičemž Firmy.cz, Sreality aj. se připojí „postupně“. Nápověda k 30. 10. 2026 uvádí kombinaci SeLLMa a open-source modelu Gemma, OpenAI nezmiňuje. Jako zdroje dnes jmenuje Firmy.cz, Sreality.cz, jízdní řády a Sport.cz. Tisková zpráva z 15. 10. 2026 hlásí nové propojení se Sreality a do konce roku Mapy.com, Kupi.cz a Sauto.cz. https://o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/ https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/

### gsc-ai-segmenty-mereni (4)
- [řádek `co gsc o ai dotazech neukazuje`] Do gsc-ai-segmenty-mereni přidat sekci o tom, kde v GSC data z AI Mode jsou. Podle answer/7042828 se navazující otázka v AI Mode počítá jako nový dotaz, klik na externí odkaz v AI Mode i v AI přehledu se počítá jako klik a AI přehled zabírá jednu pozici. Podle developers.google.com/search/docs/appearance/ai-features jde o „Performance report, within the Web search type“. Doplnit typ vyhledávání v AI reportu „Web: text-based“ a „Web: multimodal“ (Lens, Circle to Search), ověřeno v answer/16984139. Článek na Bing vůbec neodkazuje, takže přidat odkaz na bing-ai-performance-report kvůli grounding queries. Formulaci „z reportu nevyčtete návštěvnost“ zpřesnit: kliky z AI ploch jsou v klasickém reportu, jen neoddělené.
- [hodnotitel] Článek (17. 9. 2026) nezmiňuje nový multimodální typ vyhledávání v přehledu výkonu a v přehledu generativní AI (září 2026, Lens, Zakroužkuj a vyhledej, nahrané obrázky). Ten mění srovnání typu Web se starším obdobím. Nezmiňuje ani výpadek logování zobrazení za 13.–17. 8. 2026. https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- [hodnotitel] Článek (updated 17. 9. 2026) popisuje dimenze reportu, ale nezná nový typ vyhledávání Multimodální (Lens, Zakroužkuj a vyhledej, nahraný obrázek) ze září 2026. Ten je v přehledu výkonu i v reportu generativní AI a mění srovnání typu Web se starším obdobím. Grep na „multimod“ v článku nic nenašel. Primární příspěvek Googlu jsem přes WebFetch nenačetl, údaj je z research. https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc https://support.google.com/webmasters/answer/16984139?hl=en
- [hodnotitel] FAQ i text (stav k 5. 9.) uvádějí, že rozpady v reportu generativní AI jsou „jen podle stránek, zemí, data a zařízení“. Nápověda Search Console dnes uvádí i filtr typu vyhledávání „Web: text-based“ a „Web: multimodal“ (Lens, Circle to Search, nahraný obrázek, hledání obrázkem v Chromu). Google v září 2026 přidal multimodální typ i do hlavního přehledu výkonu. https://support.google.com/webmasters/answer/16984139?hl=en https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc

### blokovat-ai-odpovedi-gsc (3)
- [řádek `britska pravidla pro ai vyhledavani`] Refresh blokovat-ai-odpovedi-gsc, ideálně po 3. 12. 2026. (1) Větu „v tiskové zprávě to není, takže to tady netvrdím“ nahradit bodem 9 oznámení CMA a uvést, že jde o britskou povinnost, ne o nárok českého webu. (2) Místo jedné lhůty dát 3. 12. 2026 (hlavní ovládání) a 3. 3. 2027 (ovládání po adresářích a stránkách). (3) CMA požaduje ovládání pro trénink i pro podkládání odpovědí (bod 3); přepínač Googlu řeší jen podkládání, trénink jde přes Google-Extended. Opravit formulaci „dolaďování modelů“. (4) FAQ o dostupnosti („po dávkách“) aktualizovat: přepínač je od 31. 8. 2026 u všech webů. (5) Volitelně doplnit stížnost francouzské Alliance de la presse z 11. 8. 2026 jako evropský protějšek.
- [hodnotitel] Článek (31. 7. 2026) píše, že přepínač se nasazuje po dávkách, a zákaz odvety z britského rozhodnutí výslovně netvrdí. Od 31. 8. 2026 je přepínač u všech webů. Plné znění oznámení CMA zákaz penalizace odhlášených vydavatelů v řazení obsahuje, s účinností od 3. 12. 2026 a ovládáním po stránkách od 3. 3. 2027. https://blog.google/products-and-platforms/products/search/new-opportunities-control-and-insights-for-website-owners/ https://assets.publishing.service.gov.uk/media/6a1ec73a59fb7a60f827f64e/Publisher_CR_Notice.pdf
- [hodnotitel] Článek (updated 31. 7. 2026) tvrdí, že nápověda „pořád mluví o části majitelů webů“ a jde o nasazování po dávkách. Google 31. 8. 2026 přepínač spustil pro všechny weby na světě a 21. 10. 2026 ho přidal do dokumentace „Control what you share“. Chybí i to, že vyřazení vypne preferované zdroje v AI funkcích. Kontrolu po stránkách dál neoznámil, v UK ji CMA vyžaduje od 3. 3. 2027. https://blog.google/products-and-platforms/products/search/new-opportunities-control-and-insights-for-website-owners/ https://support.google.com/webmasters/answer/16908024?hl=en

### vydelavat-na-ai-robotech (3)
- [řádek `cloudflare monetization gateway`] Refresh vydelavat-na-ai-robotech: (1) Čekací listinu a pět partnerů nahradit stavem beta k 30. 9. 2026 (Cloudflare pracuje přímo s kupci a s vydavateli, kteří se přihlásí). Projde se answer, FAQ, tabulky, chyba 01 a shrnutí. (2) Způsobilost podle tarifů a zemí netvrdit. „Jen USA“ v primárním zdroji není, takže ověřit v dokumentaci, jinak vynechat. (3) Ř. 121 opravit souběžně s cloudflare-ai-bot-blocking: u domén s blokovaným Trainingem, včetně starého Block AI bots, se od 15. 9. blokují i Googlebot, Bingbot a Applebot. (4) Vyplacené částky znovu dohledat; když nejsou, závěr „není doložený příjem“ ponechat.
- [hodnotitel] Odpověď a FAQ tvrdí, že Monetization Gateway je na čekací listině a Pay Per Use se testuje s pěti partnery. Cloudflare 30. 9. 2026 oznámil, že Pay Per Use je v betě (nabídky v dashboardu Monetize → Pay Per Use) a Monetization Gateway „also in beta as of today“. https://blog.cloudflare.com/pay-per-use/
- [hodnotitel] Odpověď a FAQ uvádějí, že Monetization Gateway je na čekací listině a že Pay Per Use Cloudflare testuje s pěti partnery. Cloudflare 30. 9. 2026 oznámil, že Pay Per Use je „now in beta“ a Monetization Gateway „also in beta as of today“. Do refreshe zároveň patří AI contribution pilot Googlu (řádek `google ai contribution pilot`). https://blog.cloudflare.com/pay-per-use/ https://www.seroundtable.com/google-al-contribution-pilot-42076.html

### ai-nakupni-agenti (3)
- [hodnotitel] Článek (11. 7. 2026) píše, že v Česku jde zatím spíš o přípravu, a Zboží.cz ani UCP nezmiňuje. Od 31. 8. 2026 Seznam na Zboží.cz testuje agentní nakupování („Připravit nákup“, dokončení dvěma kliky) na standardu UCP. Zatím jsou zapojené e-shopy na Shopify, Shoptet je v přípravě a Seznam chce do konce roku řádově tisíce e-shopů. https://blog.seznam.cz/2026/08/seznam-cz-spousti-agentni-nakupovani-za-pomoci-ai/ https://www.lupa.cz/clanky/umela-inteligence-se-chysta-nakupovat-za-cechy-seznam-chce-do-konce-roku-dostat-agenty-k-tisicum-e-shopu/
- [hodnotitel] Článek (updated 11. 7. 2026) tvrdí, že nákupní funkce AI jsou převážně anglické a v Česku jde jen o přípravu. Agentní nakupování v češtině ale běží: Seznam od 31. 8. 2026 testuje na Zboží.cz nákup „dvěma kliky“ na standardu UCP (Shopify, Shoptet v přípravě). UCP ani Zboží.cz článek nezmiňuje. https://blog.seznam.cz/2026/08/seznam-cz-spousti-agentni-nakupovani-za-pomoci-ai/ https://ucp.dev/
- [hodnotitel] FAQ „Nakupuje se přes AI agenty v Česku už teď?“ odpovídá, že nákupní funkce jsou „převážně anglicky“, a článek (updated 11. 7.) Zboží.cz ani UCP nezmiňuje. Seznam od 31. 8. 2026 testuje na Zboží.cz agentní nakupování v češtině na UCP (nákup dvěma kliky, objednávka u obchodníka). Zatím se týká e-shopů na Shopify, Shoptet má pilot s prvními obchodníky (MediaGuru 20. 10.). https://blog.seznam.cz/2026/08/seznam-cz-spousti-agentni-nakupovani-za-pomoci-ai/ https://www.mediaguru.cz/ai-privadi-na-e-shopy-0-3-navstev-jejich-konverze-jsou-ale-vyssi

### ai-search-trendy-cesko-2026 (3)
- [hodnotitel] Odpověď i „5 čísel“ stojí na 900 milionech týdenních uživatelů ChatGPT (27. 2. 2026). Na DevDay 29. 9. 2026 OpenAI uvedlo přes 1,2 miliardy (sekundárně). Podle Similarwebu ChatGPT od léta podíl znovu získává (září 56,4 %) a Gemini (25 %) klesá čtvrtý měsíc. Chybí česká data StatCounteru o proklicích z AI chatbotů za září 2026 (ChatGPT 74,7 %, Gemini 15,9 %). Chybí i čerstvé české průzkumy (NMS, ui42/Ipsos) vedle Deloitte. https://the-decoder.com/chatgpt-now-reaches-1-2-billion-people-every-week-openai-says/ https://officechai.com/ai/geminis-traffic-share-falls-for-fourth-straight-month-as-chatgpt-regains-ground-similarweb-data/
- [hodnotitel] Odpověď, FAQ i sekce uvádějí „přes 900 milionů týdenních uživatelů ChatGPT (OpenAI, 27. 2. 2026)“. Na DevDay 29. 9. 2026 OpenAI uvedla přes 1,2 miliardy týdně (zatím ze sekundárního zdroje). Pro ČR navíc existují data StatCounteru o proklicích z AI chatbotů za září 2026 (ChatGPT 74,66 %, Gemini 15,85 %, Copilot 4,23 %), která v článku chybí. https://the-decoder.com/chatgpt-now-reaches-1-2-billion-people-every-week-openai-says/ https://gs.statcounter.com/ai-chatbot-market-share/all/czech-republic
- [hodnotitel] Odpověď, FAQ i oddíl o ChatGPT uvádějí „přes 900 milionů týdenních uživatelů (OpenAI, 27. 2. 2026)“. OpenAI na DevDay 29. 9. 2026 podle zpráv uvedlo přes 1,2 miliardy. Rozpětí 13–60 % u AI přehledů zastaralo stejně jako v jak-casto-se-zobrazuje-ai-prehled. Pro ČR jsou nově k dispozici data StatCounteru o proklicích z AI (9/2026). https://the-decoder.com/chatgpt-now-reaches-1-2-billion-people-every-week-openai-says/ https://gs.statcounter.com/ai-chatbot-market-share/all/czech-republic

### reportovani-ai-viditelnosti (2)
- [řádek `merchant center ai report`] reportovani-ai-viditelnosti (nebo gsc-ai-segmenty-mereni): jedna věta, že Merchant Center má report AI performance insights (podíl hlasu v AI Mode a AI Overviews), ale jen pro anglické dotazy a účty z AU, CA, IN, NZ a US, jen organicky a s pevně danými konkurenty. Český e-shop ho k 30. 10. 2026 neuvidí. Zdroj support.google.com/merchants/answer/17200695.
- [řádek `kde se meri ai viditelnost`] reportovani-ai-viditelnosti: krátká sekce „Proč se čísla z různých zdrojů neshodnou“. Obsah: jiná definice (zobrazení v GSC, citace v Bingu, zmínka či citace v trackeru), jiný vzorek dotazů a jiné pokrytí platforem s odkazem na tabulku v kolik-stoji-ai-seo, jiné trhy. Přidat Merchant Center AI performance insights jako nedostupné pro ČR (viz řádek `merchant center ai report`). K Bingu doplnit Topics portfolio (beta 13. 10. 2026, přibližná čísla, malé weby uvidí méně nebo nic, Microsoft je označuje za orientační). Řadit ke vzorkům.

### cloudflare-ai-bot-blocking (2)
- [řádek `zmena vychoziho nastaveni robotu zari 2026`] PRIORITNÍ refresh cloudflare-ai-bot-blocking. (1) Převést do minulého času: co se 15. 9. změnilo a co teď zkontrolovat. (2) Jmenovitě uvést Googlebot, Bingbot a Applebot jako víceúčelové roboty, kteří u domény s blokovaným Trainingem skončí zablokovaní. Platí to i pro starý přepínač Block AI bots. (3) Přepsat box „Žádná panika“: výchozí hodnoty se netýkají stávajících domén, posuzování víceúčelových robotů ano. Návod: zkontrolovat Security settings a v logu ověřit, že Googlebot dostává 200. (4) V dokumentaci nebo změnovém logu Cloudflare ověřit, že se změna 15. 9. opravdu nasadila v ohlášené podobě. Stejnou větu („Existující doméně se 15. září nic samo nepřepne“) má i vydelavat-na-ai-robotech, řádek 121, opravit souběžně.
- [hodnotitel] Článek mluví o 15. 9. 2026 v budoucím čase a tvrdí, že existující doméně se nic samo nepřepne. Datum minulo. Podle Cloudflare se od 15. 9. víceúčeloví roboti (Googlebot, Bingbot, Applebot) posuzují podle všech svých chování, takže u existující domény s blokovaným Trainingem mohou být zablokovaní i oni. Od 30. 9. 2026 navíc běží beta Pay Per Use. https://blog.cloudflare.com/content-independence-day-ai-options/ https://blog.cloudflare.com/pay-per-use/

### test-viditelnosti-v-ai (2)
- [řádek `krok nula pred rucnim testem`] V test-viditelnosti-v-ai přejmenovat „Seznam Asistent (k červnu 2026 v beta verzi)“ na Seznam AI a zapsat aktuální stav (FAQ, tabulka platforem, shrnutí). Do Kroku 0 doplnit nové plochy Bingu: Citation Share a Intents/Topics z června 2026 má už reportovani-ai-viditelnosti, Topics Portfolio z 13. 10. 2026 jsem neověřoval, ověřit u blogs.bing.com. U GSC zmínit typ vyhledávání Web: multimodal.
- [hodnotitel] Krok „Kdo se zobrazuje místo vás“ radí vypsat značky, které AI zmiňuje, a brát je jako „jasný seznam, s kým soutěžíte“. Studie arXiv 2609.16304 (14. 9. 2026, po poslední aktualizaci článku 2. 9.) sestavuje konkurenční sady záměrně nezávisle na měřených modelech. Zjistila, že etablované značky v některých kategoriích dostávají nulový počet doporučení, takže seznam odvozený z výstupu modelu je zkreslený. Doplnit, že sada pro měření má vzniknout mimo měřený model. https://arxiv.org/abs/2609.16304

### preferovane-zdroje-google (2)
- [řádek `top stories uvnitr ai prehledu`] Do preferovane-zdroje-google doplnit oznámení z 15. 10. 2026: karusely aktuálních článků v Režimu AI a v Přehledu od AI se rozšiřují globálně a zvýrazňují preferované zdroje. Uživatelů funkce je podle Googlu „more than 7x“ víc než na začátku roku. Revidovat rozlišení „U Hlavních událostí jde o četnost, u AI prostředí o rozpoznatelnost“, protože v AI plochách teď je karusel podobný Hlavním událostem. Pořád ale nepsat, že preferovaný zdroj je vybírán častěji. Dostupnost v ČR ověřit, oznámení zemi nejmenuje. Další odkazové plochy ze stejného oznámení (inline odkazy, sekce oficiálního webu, související články s náhledy) patří do refreshe navrhy-kam-dal-v-ai-odpovedi.
- [hodnotitel] FAQ tvrdí, že dokumentace pro vydavatele mluví hlavně o Hlavních událostech. Dokumentace (aktualizace 18. 9. 2026) dnes výslovně uvádí platnost v režimu AI a v Přehledech od AI „in all languages and locales where those features are available“ s podmínkou zařazení webu v přepínači Search Console. Způsobilé jsou jen domény a subdomény. Chybí vlastní tlačítko (publisher.js, 20. 8. 2026) a karusely aktuálních článků s preferovanými zdroji (15. 10. 2026). https://developers.google.com/search/docs/appearance/preferred-sources https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/

### jak-casto-se-zobrazuje-ai-prehled (2)
- [řádek `co meri sledovana klicova slova`] Rozpětí 13–60 % zastaralo. Seroundtable 26. 10. 2026 titulkuje „over 80% of Google searches“, přitom data jsou Semrush Sensor (vzorek neuveden), SE Ranking „82.5% of US brand searches“ (jen značkové dotazy) a seoClarity „over 62% of queries“, podle oboru 55–84 %. Je to přesný příklad tvrzení řádku, titulek „searches“ nad daty ze sledovaných dotazů, a hodí se jako nový případ. Aktualizovat rozpětí, datum odečtu i answer.
- [hodnotitel] Popis, odpověď i FAQ tvrdí, že publikované hodnoty se pohybují od 13 do 60 %. Souhrn z 26. 10. 2026 uvádí podle Semrush, SE Ranking a seoClarity přes 80 % (SE Ranking 82,5 % u značkových dotazů, seoClarity 55–84 % podle odvětví; USA). Rozpětí je potřeba rozšířit. Zdroj je sekundární, takže s výhradou. https://www.seroundtable.com/over-80-of-google-searches-have-ai-overviews-42372.html

### seznam-asistent-sellma (2)
- [hodnotitel] FAQ i časová osa končí tím, že veřejně není jasné, zda dočasné použití modelů OpenAI přes Azure trvá. Nápověda Seznam AI k 30. 10. 2026 uvádí kombinaci SeLLMa a open-source modelu Gemma. Doplnit jako další bod časové osy s výhradou, že nápověda není datovaná. https://o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/
- [hodnotitel] FAQ a časová osa uvádějí SeLLMa + dočasně OpenAI přes Azure (11/2025) a píšou, že „veřejně není jednoznačné, jestli ten dočasný stav trvá“. Nápověda Seznam AI dnes uvádí kombinaci SeLLMa a open-source modelu Gemma, OpenAI nezmiňuje. Asistent se navíc jmenuje Seznam AI. https://o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/

### co-vypne-ktery-opt-out (2)
- [hodnotitel] Řádek Applebot-Extended neuvádí, že Apple 4. 9. 2026 doplnil do dokumentace Applebota: meta tag nosnippet zajistí, že data stránky Apple nepoužije jako kontext pro AI odpovědi v Siri a Apple Search. Applebot-Extended řeší jen trénink. https://support.apple.com/en-us/119829
- [hodnotitel] Sekce „Applebot-Extended nevypne Siri ani Spotlight“ zná jen Applebot-Extended (trénink). Apple ve své nápovědě (publikováno 4. 9. 2026) uvádí, že data Applebota dávají kontext a odkazy AI odpovědím v Siri a v Search a že meta nosnippet je z tohoto AI výstupu vyřadí. Tahle páka v tabulce opt-outů chybí. https://support.apple.com/en-us/119829

### roi-ai-seo (1)
- [řádek `kdy prestat investovat do ai seo`] roi-ai-seo: za sekci „Jak z výsledku udělat rozhodnutí“ přidat krátkou sekci „Kdy zastavit“. (1) Utopené náklady: dosavadní investice není argument pro pokračování, rozhoduje přínos další koruny (věta z rozpocet ř. 94). (2) Kanál, nebo nabídka: když AI návštěvy chodí a nekonvertují, nebo AI značku zmiňuje a nedoporučuje, je problém spíš v nabídce. Když se značka po stanovené době v odpovědích vůbec neobjeví, je to signál proti kanálu. (3) Odkaz na kritérium předem v ai-seo-agentura-sluzby.

### ai-seo-zdarma (1)
- [řádek `kdy uz na to sam nestacis`] ai-seo-zdarma, sekce „Kde bezplatná cesta naráží na strop“: doplnit čtvrtý řádek „Opakující se technické problémy“. Stejná chyba se vrací po úpravě šablony nebo platformy, a strop tak není nástroj, ale vývojářská kapacita. K tomu jednu větu s jednoduchým přepočtem času na peníze s odkazem na kolik-stoji-ai-seo. Zachovat dnešní tón, ne pobídku k objednávce.

### ai-friendly-url-struktura (1)
- [řádek `migrace url bez ztraty`] ai-friendly-url-struktura (updated 23. 7.): ke znakům v URL doplnit zdroj a datum, tedy Google 23. 10. 2026 upřesnil oddělování slov spojovníky proti podtržítkům. Přesné znění ověřit na stránce URL structure. ai-seo-migrace-redesign, krok „Nasaďte trvalá přesměrování“: doplnit past, kdy přesměrování řešené stránkou s meta refresh (statické generátory, některé hostingy) vrací 200, nese noindex a signál se nepřenese. Kontrola stavového kódu přes curl, skutečné 301 musí dát server. Jako zdroj vlastní měření webu z 10. 10. 2026.

### ai-brand-mentions (1)
- [řádek `entitni autorita pro chatgpt`] ai-brand-mentions: (1) jednou větou vysvětlit pojem entitní autorita a propojit ho se seo-vs-ai-citace-platformy. Zachovat výhradu, že vliv u ChatGPT je odvozený z nízkého překryvu, ne změřený mechanismus. (2) Do sekce „Citace a doporučení nejsou totéž“ přidat Semrush AI Visibility Index z 13. 10. 2026 (UK a US, leden až červenec 2026): z top 100 zmiňovaných značek bylo jen 36,7–45,3 i mezi top 100 citovanými doménami. Uvést, že nejde o česká data. Při refreshi seo-vs-ai-citace-platformy zvážit, jestli FAQ „kterou ChatGPT zohledňuje víc“ netvrdí víc, než studie dokládá.

### format-obsahu-podle-zameru-dotazu (1)
- [řádek `ktere typy obsahu ai cituje`] format-obsahu-podle-zameru-dotazu: vedle odstavce o AIVO (ř. 86) přidat jeden odstavec s rozložením typů citovaného obsahu. Nejdřív dohledat primární zdroj a jmenovatel, a když se to nepodaří, data nepoužít. Výhrada: vychýlené obory (VPN, kyberbezpečnost, martech), trhy US a Indie, číst jako strukturu. K tomu Shoptet z 20. 10. 2026: dlouhé produktové popisy AI návštěvám nepomáhají, jde o korelaci.

### strukturovana-data-pro-ai (1)
- [řádek `rusene typy strukturovanych dat`] strukturovana-data-pro-ai (stav k 4. 9. 2026): přidat krátkou sekci „Když Google typ ruší“ se vzorcem dosluhování podle časové osy FAQ a HowTo, se seznamem zrušení v roce 2026 (Practice Problem 6. 1., FAQ 8. 5. a 15. 6.) a se změnou VideoObject (creator 24. 9.). Doplnit, co dělat při zmizení reportu v Search Console (odkaz na konec-faq-rich-results), a rutinu čtvrtletní kontroly changelogu a galerie. Citát Muellera jen s primárním zdrojem, jinak vynechat.

### aktualizace-obsahu-pro-ai (1)
- [řádek `kadence refreshe obsahu`] aktualizace-obsahu-pro-ai, sekce „Jak často aktualizovat“: doplnit matici rychlost tématu × obchodní hodnota (rychlé a cenné stránky čtvrtletně, pomalé a málo cenné při kontrole jednou ročně apod.). Sjednotit intervaly s tabulkou v caste-chyby-v-seo-2026-update, nebo rozdíl vysvětlit. Údaj 90–120 dní jen s primárním zdrojem. Až vyjde řádek `technicky problem nebo pokles obsahu`, odkázat na něj kvůli signálům dosluhování.

### yelp-licencuje-data-openai (1)
- [řádek `licencovana data v ai odpovedich`] Do sekce „Co to znamená pro Česko“ doplnit, že Seznam AI podle své nápovědy čerpá i z Firmy.cz. Odpověď se tedy může opírat o firemní profil, ne o web firmy, a profil na Firmy.cz je to, co firma ovlivní. Rozlišit to od licence (jde o vlastní službu, ne o nákup dat). Mapy.cz ani Zboží.cz nápověda nejmenuje, netvrdit je.

### odkazovani-na-zdroje-v-obsahu (1)
- [řádek `odkazovani na zdroje v clanku`] Do odkazovani-na-zdroje-v-obsahu, nejlépe do H2 o umístění odkazu, doplnit krátký odstavec. Od 27. 5. 2026 může Google u výsledku ukázat, že článek odkazuje na zdroj se štítkem „vysoce citovaný“. Odkázat na /blog/vysoce-citovany-stitek-google/, štítek znovu nevysvětlovat a nepřeslibovat dopad na hodnocení (Google nic takového neuvedl).

### volatilita-ai-odpovedi (1)
- [řádek `proc ai nema poradi`] Refresh volatilita-ai-odpovedi: (1) Do FAQ „proč se odpovědi liší“ dát, co o nedeterminismu výslovně píše dokumentace provozovatele (např. OpenAI k vzorkování a teplotě). Ověřit u zdroje a oddělit od dovozeného. Netvrdit nic o vnitřním fungování bez dokladu. (2) Doplnit zjištění SparkToro a Gumshoe o pořadí (1 : 1 000) a odkázat na /blog/reportovani-ai-viditelnosti/ a /blog/share-of-model-metrika/ jako na to, co sledovat místo pozice.

### generativni-ai-v-discoveru (1)
- [řádek `ai prepisuje titulky`] Drobný refresh generativni-ai-v-discoveru: do části o titulcích doplnit, že dokumentace Googlu k title links (poslední aktualizace 10. 12. 2025) AI titulky nezmiňuje, se stavem k datu refreshe. Při refreshi ověřit, jestli Google mezitím nezavedl označení přepisu nebo odhlášení. Nízká priorita, lze spojit s jiným zásahem.

### kdo-publikuje-ip-rozsahy (1)
- [řádek `jak stare jsou seznamy ip rozsahu`] Refresh potřebuje přednost, článek teď tvrdí neplatný fakt. Změřil jsem 30. 10. 2026: applebot.json má creationTime 2026-09-15 a 24 prefixů (článek píše 27. 10. 2023, 12 prefixů, 1 019 dní), bingbot.json pořád 2024-01-03 a 28 prefixů. Udělat nový odečet všech 13 souborů a přidat sloupec se změnou proti 11. 8. Přepsat odstavec o Applebotu, rozptyl „1 019 dní“ v checklistu i v MistakeGrid, FAQ a description („skoro o tři roky“). Výhradu, že starý soubor nevypovídá o kvalitě, zachovat.

### llms-txt-navod (1)
- [řádek `google rika ze llms txt ignoruje`] V answer, úvodu a boxu llms-txt-navod nahradit „podle veřejných vyjádření“ citací průvodce (ověřeno 30. 10., stránka „Last updated 2026-07-10“): „You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search“ a „will neither harm nor help… Google Search ignores them“. Sladit datum: článek píše „od června 2026“, primární stránka nese aktualizaci 10. 7. 2026, takže uvádět datum ze stránky. K vývojářským nástrojům doplnit coding agenty, jak chce pokyn.

### javascript-a-ai-roboti (1)
- [řádek `gemini a vykreslovani javascriptu`] Doplnit do javascript-a-ai-roboti: primární dokumentace neříká, že Gemini spouští JavaScript. Doložené je jen, že grounding čerpá z indexu Vyhledávání. Proto obsah, který se do indexu dostal až po vykreslení Googlebotem, může do groundingu vstoupit. Je to řetěz dvou dokumentovaných kroků, ne tvrzení Googlu, a tak to napsat. U živých fetcherů (Google-Agent, Google-GeminiNotebook) vykreslování popsané není.

### agentni-rezervace-v-ai-mode (1)
- [řádek `rezervacni platformy jako vstupenka do ai`] Ověřit, jestli v ČR běží Rezervace přes Google (Actions Center, dřív Reserve with Google). Česká stránka google.com/maps/reserve?hl=cs existuje, ale přesměrovala na souhlas s cookies a nečetl jsem ji. Bookio (CZ/SK systém) uvádí tlačítko „Book“ ve Vyhledávání a Mapách, zemi ale neuvádí. Pokud se to potvrdí, doplnit do agentni-rezervace-v-ai-mode, že je to dnes jediný doložený kanál, kterým česká provozovna napojí dostupnost na Google. Jasně označit, že jde o rezervace v Mapách a Vyhledávání, ne o AI Mode.

### ai-mode-jako-vychozi-rezim (1)
- [řádek `vstupni bod hledani na nove karte`] V ai-mode-jako-vychozi-rezim rozšířit sekci o vstupech o Chrome: tlačítko Režim AI na nové kartě (oznámeno 5. 11. 2025, v ČR podle screenshotu z 25. 8. 2026 nasazené) a režim AI v adresním řádku (USA do konce září 2026, další jazyky „v týdnech“). Ověřit stav pro ČR k datu refreshe. Rozebrat, co to dělá s tezí „vstup vyžaduje akci uživatele“: tření klesá, akce zůstává. Dopad na provoz nikdo nezveřejnil. Opravit zastaralé „Pro Česko to ověřené nemáme“ v rezim-ai-google (odstavec u Chromu i FAQ).

### nove-vstupy-do-vyhledavani (1)
- [řádek `chrome taby jako vstup dotazu`] „Google nic nového nepopsal“ neplatí úplně. Nápověda Gemini v Chromu (support.google.com/gemini/answer/16283624, čteno 30. 10.) uvádí „Gemini in Chrome uses content from your current browser tab“, na počítači sdílení až 10 karet a „This shares the page content from the tabs you share“. Je to ale postranní Gemini, ne vstup do Režimu AI. Do nove-vstupy-do-vyhledavani doplnit: co je doložené k obsahu karet (s tím rozlišením), co ne (jestli web dostane požadavek, jak se obsah zpracuje u Režimu AI), a že to v logu ani analytice nepoznáte. To poslední označit jako vyvození a odkázat na ai-mode-vedle-sebe-v-chrome a ai-prohlizece-atlas-comet.

### person-data-pro-autora (1)
- [řádek `profilepage autorska stranka`] Do person-data-pro-autora přidat sekci ProfilePage. (1) Kdy ho dát na autorskou stránku: Google výslovně jmenuje stránku „O mně“ na blogu, autorskou stránku zpravodajského webu a stránku zaměstnance; nevhodná je homepage e-shopu. (2) Povinné je mainEntity (Person nebo Organization) s name; doporučené jsou dateCreated a dateModified, u osoby alternateName, identifier, image, sameAs, description a interactionStatistic. (3) Příklad JSON-LD, kde mainEntity nese stejné @id jako author v Article. Neslibovat rozšířený výsledek, dokumentace mluví jen o Discussions and Forums. Odlišit od Search profiles (řádek `search profiles pro vydavatele`). Spojit s kandidátem REFRESH_QUEUE ř. 94.

### (bez cílového článku — doplněk z rušeného řádku) (1)
- [řádek `sesity v rezimu ai`] Do tabulky v jak-overit-dostupnost-ai-funkce (sekce „Pět funkcí, na kterých to ukážu“, updated 20. 8.) přidat řádek: „Sešity v režimu AI — oznámení z 19. 8. 2026 výslovně vylučuje EHP; česká nápověda existuje, dostupnost neuvádí → ne“. Je to přesně případ, na kterém článek ukazuje, že přeložená nápověda dostupnost nedokládá.

### ai-navstevnost-konverze (1)
- [řádek `konverze z malych kanalu intervaly`] Do ai-navstevnost-konverze přidat krátký box „Jak si interval spočítat“: Wilsonův interval na příkladu 26 z 408 (vzorec do tabulky nebo kalkulačka). K tomu pravidlo pro srovnání dvou kanálů: překryv intervalů ještě neznamená, že rozdíl není, a oddělené intervaly při desítkách konverzí nejsou obecný závěr. Pro srovnání dvou podílů slouží test dvou proporcí (jako p = 0,794 u Amsive). Psát bez statistického žargonu.

### ai-sumarizace-a-vydavatele (1)
- [řádek `navstevy ze seznamu v ga4 utm`] Ověřit podle nápovědy GA4 „Default channel group“ a podle seznamu kategorií zdrojů, kam spadne source www.seznam.cz s medium seznam_distribuce: Organic Search, pokud je www.seznam.cz na seznamu vyhledávačů, jinak Referral nebo Unassigned. Výsledek napsat do H2 o UTM. Doporučit vlastní skupinu kanálů s pravidlem utm_campaign = asistent|aifunkce|trending_topics → „Seznam AI“ a odkázat na sekci o vlastní skupině kanálů v ai-navstevnost-konverze. Volitelně doplnit zbylé hodnoty utm_campaign (hp_box, novinky, sbrowser, lide).

### jak-vypnout-ai-overview (1)
- [hodnotitel] Odpověď nahoře i „Metoda 5 — Pro vlastní web“ uvádějí jen nosnippet a data-nosnippet. Chybí přepínač „Search generative AI“ v Search Console, který je od 31. 8. 2026 dostupný všem webům. Google ho 21. 10. 2026 zařadil do dokumentace „Control what you share“. Platí pro celý web a vypne i generativní funkce v Discover a preferované zdroje v AI funkcích. Je to nejklikanější článek webu (45 kliků v říjnu). https://support.google.com/webmasters/answer/16908024?hl=en https://developers.google.com/search/docs/crawling-indexing/control-what-you-share

### zbozi-cz-pro-ai (1)
- [hodnotitel] Článek byl aktualizován 11. 10. 2026, ale nezmiňuje agentní nakupování na Zboží.cz (UCP, od 31. 8. 2026). Chybí i novinky Seznam Nákupů z 1. 10. 2026: chybějící parametry se dělí na kritické, důležité a doplňkové, kritické rozhodují o zobrazení ve filtrovaném vyhledávání a statistiky kampaní jsou od 9. 10. jen ve Skliku. https://blog.seznam.cz/2026/08/seznam-cz-spousti-agentni-nakupovani-za-pomoci-ai/ https://blog.seznam.cz/2026/10/novinky-v-seznam-nakupech-prehlednejsi-statistiky-elektronicke-doruceni-a-chytrejsi-parametry/

### firmy-cz-pro-ai (1)
- [hodnotitel] Článek (19. 7. 2026) používá starý název Seznam Asistent a nezmiňuje AI „Souhrn hodnocení“ na detailu firmy. Ten se podle nápovědy zobrazuje jen u firem s aspoň 10 textovými hodnoceními po 40+ znacích a obnovuje se každých 14 dní. Chybí také propojení Seznam AI se Sreality z 15. 10. 2026, které rozšiřuje použití dat z Firmy.cz. https://napoveda.firmy.cz/firemni-profil/recenze/ https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/

### rozpocet-seo-vs-ai-viditelnost (1)
- [hodnotitel] FAQ i sekce „Placená reklama v AI má mít vlastní řádek rozpočtu“ zmiňují jen test Sponsored Agents v USA s poznámkou, že nejde o důkaz dostupnosti v Česku. Chybí, že běžná reklama v ChatGPT běží v ČR od 24. 8. 2026 (tarify Free a Go) a samoobslužný Ads Manager je otevřený od 31. 8. 2026. Čtenář tak může nabýt dojmu, že reklama v ChatGPT v ČR není. https://openai.com/index/chatgpt-ads-expands-across-europe/ https://thenextweb.com/news/chatgpt-ads-expand-31-european-markets

### ai-generovany-obsah-viditelnost (1)
- [hodnotitel] Článek (11. 7. 2026) nezohledňuje aktualizaci pokynů Googlu k obsahu z generativní AI z 1. 10. 2026. Ta ukládá ručně ověřit fakta i v titulcích, meta popisech, strukturovaných datech a alt textech a odkazuje na oddíly 4.6.5 a 4.6.6 pokynů pro hodnotitele. U e-shopů navíc Merchant Center vyžaduje u obrázků z AI metadata IPTC DigitalSourceType a označení produktových dat z AI. https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

### content-signals-rizeni-ai-botu (1)
- [hodnotitel] Oddíl „Dvě věci, se kterými se to plete“ tvrdí, že slovníkový draft AIPREF je z dubna 2026 s expirací v říjnu a že doprovodný draft o připojení preferencí „propadl bez nové revize“. Neplatí to: draft-ietf-aipref-attach-05 vyšel 19. 8. 2026 (expirace 20. 2. 2027) a draft-ietf-aipref-vocab-08 14. 9. 2026 (expirace 18. 3. 2027). Oba jsou aktivní Internet-Drafty. https://datatracker.ietf.org/doc/draft-ietf-aipref-attach/ https://datatracker.ietf.org/doc/draft-ietf-aipref-vocab/

### ai-crawler-robots-txt (1)
- [hodnotitel] FAQ i oddíl o AIPREF uvádějí dvě kategorie (train-ai a search) a expiraci slovníkového draftu v říjnu 2026. vocab-08 (14. 9. 2026) má tři kategorie, přibyla ai-use, a vyprší 18. 3. 2027. attach-05 (19. 8. 2026) je aktivní a IESG state je prázdný, takže srpnový milník splněn nebyl. https://datatracker.ietf.org/doc/draft-ietf-aipref-vocab/ https://datatracker.ietf.org/doc/draft-ietf-aipref-attach/

### co-ai-seo-nezvladne (1)
- [hodnotitel] Bod 6 tvrdí, že Google „shánění umělých zmínek ve svém průvodci řadí ke spamovému chování“. Průvodce optimalizací pro generativní AI (aktualizace 10. 7. 2026, tedy platný i v den vydání článku) to v oddílu „Mythbusting generative AI search“ označuje jen za „isn't as helpful as it might seem“. Spam zmiňuje až u obsahu tvořeného hlavně kvůli manipulaci odpovědí. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

### local-seo-cesko-2026 (1)
- [hodnotitel] Seznam míst pro konzistentní NAP uvádí „Apple Maps / Apple Business Connect“. Apple Business Connect skončil spuštěním Apple Business 14. 4. 2026 a data se do něj převedla automaticky. https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/
