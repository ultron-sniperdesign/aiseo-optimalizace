# Research — refresh `jak-vypnout-ai-overview` (31. 10. 2026)

**Typ runu:** refresh jednoho článku (kadence 2 + 1 + 1, run 3: po refreshi 21. 10. vyšly 22. a 23. 10.
dva nové články, viz `stav.sh`). **Proč tenhle:** Refresh 1 z revize plánu 30. 10. 2026
(`REVIZE_PLANU_2026-10-30.md`, příloha B) a nejklikanější článek webu. Článek z 29. 4. 2026, naposledy
upraven 9. 9. 2026 (názvy Microsoftu), research složku do dneška neměl.

**Titulek se nemění** — článek je z měření titulků vyloučený, `title` ani `seoTitle` nesahám (zadání revize).
Mění se `description`, `answer`, FAQ, tělo, `keywords` a `updated`. Obrázek se nepřegenerovává.
**Audity jdou přes Codex** (rozhodnutí uživatele 30. 10. 2026, `blogger/CLAUDE.md` § VI).

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum |
|---|---|---|
| **Dokumentace** | Přehled od AI je „základní funkce Vyhledávání Google, stejně jako informační panely. Funkce nelze vypnout.“ Po vyhledávání jde vybrat **filtr Web**, který ukáže jen textové odkazy bez Přehledu od AI. | nápověda Vyhledávání Google, odpověď 14901683, cs i en, načteno 31. 10. 2026 |
| | Search Labs: přepínač se jmenuje **„AI ve Vyhledávání“ / „AI in Search“** a jeho vypnutím se uživatel **odhlásí z experimentů** (testovací prostředí, e-maily o nových experimentech). O vypnutí Přehledu od AI nápověda nemluví. Experiment „AI Overviews and more“, na kterém stála Metoda 1 článku, v nápovědě není. | tamtéž, oddíl „Funkce AI ve Vyhledávání v Labs“ |
| | Režim AI: nápověda žádnou volbu vypnutí neuvádí; Search Labs u něj slouží jen k přihlášení do experimentu „AI Mode“. Česko a čeština jsou v seznamu podporovaných. | odpověď 16011537 (en), načteno 31. 10. 2026 |
| | **Přepínač Search generative AI v Search Console** (Nastavení → Search generative AI): volby Include (výchozí), Exclude, Inherit from parent. Platí pro Přehled od AI, režim AI a generativní funkce v Discover. Nastavuje se **po vlastnostech**, podřízená vlastnost (např. URL-prefix `…/blog/`) může mít vlastní volbu. Vyřazený web z těchto funkcí nedostane žádnou návštěvnost ani zobrazení; obsah jiných webů v nich zůstává a „může vypadat podobně“. Není to signál pro řazení jinde ve vyhledávání, netýká se tréninku (na to Google-Extended), vyřazení obvykle za 1–2 dny, část obsahu později. „As of August 31, 2026“ dostupný všem webům na světě. | support.google.com/webmasters/answer/16908024 (en), načteno 31. 10. 2026 |
| | Stránka „Control what you share“ vede přepínač jako ovládání s rozsahem **site-wide**; po stránkách a částech textu odkazuje na robots meta, `data-nosnippet` a `X-Robots-Tag`. Last updated 2026-10-21. | developers.google.com/search/docs/crawling-indexing/control-what-you-share |
| | `nosnippet` platí pro všechny formy výsledků „(web search, Google Images, Discover, AI Overviews, AI Mode)“ a zabrání použití obsahu jako přímého vstupu pro Přehled od AI a režim AI. `max-snippet` omezí, kolik obsahu může jít do Přehledu od AI a režimu AI. `data-nosnippet` jen na prvcích `span`, `div`, `section`; nepřidávat ho JavaScriptem. Last updated 2026-03-24. | developers.google.com/search/docs/crawling-indexing/robots-meta-tag |
| | Stránka o AI funkcích jmenuje k omezení obsahu `nosnippet`, `data-nosnippet`, `max-snippet` a `noindex` (last updated 2025-12-10, přepínač tam ještě není). | developers.google.com/search/docs/appearance/ai-features |
| | Preferované zdroje v režimu AI a v Přehledu od AI vyžadují, aby web byl v Search Console **zahrnutý** do generativních funkcí; způsobilá je jen doména nebo subdoména, ne podadresář. Last updated 2026-09-18. | developers.google.com/search/docs/appearance/preferred-sources |
| | **DuckDuckGo**: Search Assist je ve výchozím stavu na frekvenci **„sometimes“** (volby often / sometimes / on-demand / never v nastavení vyhledávání). Varianta **noai.duckduckgo.com** vypne všechny AI funkce a filtruje obrázky z AI; k dispozici i doplněk pro Chrome a Firefox. | DuckDuckGo Help Pages: `results/ai-assisted-answers`, `ai-features/about-noaiduckduckgocom`, načteno 31. 10. 2026 |
| | **Seznam**: nápověda Vyhledávání popisuje tři prvky s jazykovým modelem ve výsledcích (přímá odpověď modelu, sumarizace výsledků, sumarizace trendujících témat). Vypínač pro uživatele neuvádí, jen pro majitele webu („pokud si nepřejete, aby Seznam používal váš web jako zdroj“). | o-seznam.cz/napoveda/vyhledavani/vysledky-vyhledavani/vychytavky/, načteno 31. 10. 2026 |
| **Měření** | **Brave Search**: stránka nápovědy poslaná 31. 10. 2026 návštěvníkovi bez cookies (IP v Praze) nese ve výchozím nastavení `summarizer:true`; volba „Answer with AI“ má popis „Make AI-powered answers appear automatically for some searches“. AI odpovědi tedy **nejsou ve výchozím stavu vypnuté**, jak tvrdil článek. Nápověda Brave „AI in Brave Search“ (datum 5. 8. 2025) popisuje AI Answers a Ask Brave. | search.brave.com/help/ai, vlastní stažení 31. 10. 2026 |
| | GSC článku, 1. 8.–29. 10. 2026, dotazy podle zobrazení: „jak vypnout ai v google“ 1 302 / 9 kliků / poz. 7,2; „jak vypnout ai na google“ 1 002 / 3 / 7,6; „jak vypnout ai“ 551 / 2 / 8,5; **„jak vypnout ai v telefonu“ 452 / 0 / 9,4**; „jak vypnout google ai“ 411 / 0 / 7,0; **„jak vypnout režim ai“ 386 / 2 / 6,6**; „jak zrušit režim ai“ 357 / 0 / 7,7; „jak vypnout přehled od ai“ 274 / 0 / 8,0; „jak vypnout režim ai google“ 259 / 0 / 6,8; „jak vypnout ai overview“ 188 / 0 / 5,0. **Anglický název funkce hledá menšina** — článek nese obecné české dotazy. | MCP Search Console, vlastnost aiseo-optimalizace.cz |
| | Na dotazy obsahující „vypnout“ ukazuje Google z celého webu **jen tenhle článek** (+ 1 zobrazení `rezim-ai-google`) a v SERPu nabízí odkazy na jeho kotvy (`#metoda-1-search-labs…` 657 zobrazení, `#metoda-4-mobil…` 575). Nekanibalizuje se tedy s návodem k režimu AI — ten na „vypnout“ téměř nerankuje. | tamtéž, dimenze page |
| **Sekundární** | `&udm=14` Google nedokumentuje. Test třetí strany 17. 10. 2026 (google.de, odhlášený Chrome): parametr dál funguje, kliknutí na filtr Web dnes zapisuje do adresy `udm=web`. Search Labs v Německu podle téhož testu není. | test aktualizovaný 17. 10. 2026 (zdroj nejmenuji, sekundární) |
| | Bing: operátor `-ai` a doplněk Microsoft Bing AI Search Choice (Chrome, Edge, preview, nastaví Bing jako výchozí; u Chrome i nové karty). Oznámil šéf vyhledávání Microsoftu na LinkedInu 5. 6. 2026. | PPC Land, 6. 6. 2026; v článku od 9. 9. 2026, znovu neověřováno u Microsoftu |
| **Nelze ověřit** | Cokoli, co uživatel „uvidí ve svém Googlu“ (do přihlášeného Googlu se nedostanu, `/search` je v robots.txt zakázané): kde přesně je filtr Web v mobilní aplikaci, jestli se volba drží, jestli `&udm=14` funguje na google.cz. V článku proto jen to, co říká nápověda, a u `udm=14` výslovně „neoficiální“. | — |
| **Rozhraní (UI)** | **prázdné** — žádný přihlášený Google, Search Console tohoto typu, prohlížeč ani zařízení jsem neviděl. Všechny postupy v článku jsou podle nápověd a jsou tak i uvedené. | — |

## Ověření po 1. auditu (31. 10. 2026, 6 agentů, primární zdroje)

Kolo 1 (Codex) chtělo nedoložené postupy pro Safari, Edge a Firefox škrtnout. Místo škrtání
jsem je nechal ověřit u výrobců. Data a citace: `overeni.json` ve scratchpadu runu, shrnutí:

| Tvrzení | Verdikt | Zdroj (načteno 31. 10. 2026) |
|---|---|---|
| Přehled od AI spuštěn v Česku 20. 5. 2025 | potvrzeno | blog.google/intl/cs-cz/…/google-spousti-v-cesku-prehledy-od-ai/ (20. 5. 2025); globální oznámení Česko nejmenuje |
| Přepínač doplněn do „Control what you share“ 21. 10. 2026 | potvrzeno, ale jako „existing option“ | developers.google.com/search/updates, záznam October 21 |
| Přehled výkonu v generativní AI: jen zobrazení; Přehled od AI + režim AI dohromady, Discover zvlášť; dimenze stránky, země, dny, zařízení; kliky v běžném přehledu u typu Web; bez dost zobrazení se přehled neukáže | potvrzeno (kliky nápověda výslovně nevylučuje, jen je neuvádí; Google slibuje další metriky) | support.google.com/webmasters/answer/16984139 (en, cs), blog Search Central 3. 6. 2026 |
| Google-Extended: trénink budoucích modelů Gemini + grounding v aplikacích Gemini a Vertex AI; neovlivňuje Vyhledávání; token v robots.txt | potvrzeno; nápověda Search Console navíc říká, že omezuje i trénink modelů pro AI funkce Vyhledávání | developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers (Last updated 2026-10-30) |
| Bing AI Search Choice: od Microsoft Corporation v Chrome Web Store (1.0.0.3, 6. 6. 2026) i Edge Add-ons; přepínač AI odpovědí v Bingu; nastaví Bing jako výchozí; Chrome verze i nová karta | potvrzeno; „preview“ jen v červnovém oznámení, obchody ho k 31. 10. neoznačují | Chrome Web Store, Edge Add-ons |
| operátor `-ai` v Bingu | **nelze ověřit primárně** (jen komentář šéfa vyhledávání Microsoftu podle PPC Land) | — |
| Edge: výchozí vyhledávač v Ochrana osobních údajů, hledání a služby → Hledání a připojené služby → Adresní řádek a vyhledávání; přidání vyhledávače = jednou na něm hledat z adresního řádku; ruční `%s` nápověda nepopisuje | potvrzeno | support.microsoft.com/…/change-your-default-search-engine-in-microsoft-edge (29. 7. 2026) |
| Edge Copilot: tlačítko na `edge://settings/appearance/copilotAndSidebar`; nová karta a čtení kontextu v Nastavení → Copilot a AI | potvrzeno (stará cesta „Nastavení → Copilot a postranní panel“ byla nepřesná) | learn.microsoft.com troubleshoot (12. 3. 2026), support.microsoft.com Copilot v Edgi (14. 8. 2026) |
| Firefox od 140: Nastavení → Vyhledávání → přidat vyhledávač s adresou s `%s` | potvrzeno (release notes 140); popisky od 152 jiné; výchozí vyhledávač odvozený z kódu | firefox.com/…/140.0/releasenotes; support.mozilla.org vrací ochranu proti robotům, neobcházeno |
| Safari: vyhledávač jen ze seznamu Applu; vlastní adresu nápověda nepopisuje; iOS 18.2+ Nastavení → Hledání → Vyhledávač, iOS 17 Nastavení → Safari → Vyhledávač | potvrzeno / částečně (absence ≠ zákaz) | support.apple.com/cs-cz/guide/iphone/iphb719b43de |
| Nápověda Googlu pro iPhone: „Funkce nelze vypnout“, filtr Web | potvrzeno | answer/14901683?hl=cs&co=GENIE.Platform=iOS (vlastní stažení) |
| Vstup do režimu AI: google.com/ai, tlačítko na google.com, aplikace Google; z Přehledu od AI jen na mobilu | potvrzeno | answer/16011537 (en), answer/14901683 (cs) |

## Tabulka podmínek (za jakých okolností tvrzení platí)

| Tvrzení v článku | Podmínka, bez které neplatí |
|---|---|
| Filtr Web ukáže výsledky bez Přehledu od AI | volí se po hledání; jestli se drží u dalších dotazů, nápověda neuvádí |
| `udm=14` | neoficiální; doložený jen test jiného webu na google.de, odhlášený Chrome, 17. 10. 2026; výchozí vyhledávač prohlížeče platí jen pro hledání z adresního řádku |
| Postup v Chromu | Chrome na počítači; profil hosta v některých zemích ne; spravovaný prohlížeč může řídit administrátor |
| Firefox | od verze 140; adresa musí mít `%s`; spravovaná instalace může přidávání zakázat |
| DuckDuckGo Search Assist zapnutý | výchozí frekvence „sometimes“ podle nápovědy |
| noai.duckduckgo.com | filtr obrázků z AI „as best we can“, ne záruka |
| Brave Search AI odpovědi zapnuté | jeden vzorek dat stránky 31. 10. 2026 (návštěvník bez nastavení, data `country:"us"`), ne ověření všech prostředí |
| Bing doplněk | Chrome a Edge; zároveň nastaví Bing jako výchozí; nová karta jen ve verzi pro Chrome |
| Přepínač v Search Console | po vlastnostech; podřízená vlastnost může mít vlastní volbu (mění vlastník); neplatí pro Merchant Center a Ads; obsah dál slouží Vyhledávání jako celku; 1–2 dny, část déle |
| Preferovaný zdroj | ztráta jen v Přehledu od AI a režimu AI, ne v Top Stories |
| `nosnippet`, `max-snippet`, `data-nosnippet` | robot musí mít přístup a změnu zpracovat (dny až měsíce); `max-snippet` neplatí při zvlášť uděleném povolení (licence, strukturovaná data); strukturovaná data v `data-nosnippet` zůstávají použitelná; `max-snippet` s kladným číslem úryvek jen zkrátí |
| Režim AI bez vypínače | v nápovědě jsme volbu nenašli (ne výslovné tvrzení Googlu); přechod z Přehledu od AI jen na mobilu |

## Vady staré verze (stav 9. 9. 2026)

| # | Místo | Vada | Doklad |
|---|---|---|---|
| 1 | answer, úvodní box, Metoda 1, Metoda 4, FAQ 1–3, tabulka, souhrn, persony | **Search Labs jako způsob, jak Přehled od AI vypnout** — experiment „AI Overviews and more in Search“ v nápovědě není; přepínač „AI ve Vyhledávání“ jen odhlásí z experimentů | nápověda 14901683 |
| 2 | Metoda 3, tabulka, souhrn, FAQ 1 | **DuckDuckGo „zapíná se ručně“, Brave „ve výchozím nastavení vypnutá“** — obojí neplatí | DDG nápověda, Brave měření |
| 3 | answer, Metoda 5, FAQ 4 | **Chybí přepínač v Search Console** (všem webům od 31. 8., v dokumentaci od 21. 10.) | 16908024, Control what you share |
| 4 | Metoda 5, FAQ 4 | `data-nosnippet` „podle dokumentace také omezit použití v AI Overviews“ — specifikace atributu AI nezmiňuje; oporou je stránka o AI funkcích, která ho jmenuje mezi ovládáními | robots-meta, ai-features |
| 5 | cílení | článek řeší „AI Overviews“, lidé hledají „AI v Google“, „režim AI“, „v telefonu“; režim AI článek skoro nezmiňuje | GSC výše |
| 6 | celý text | „AI Overviews“ a „AIO“ jako název funkce (blok oprav 10. 10. ho vede), anglicismy (publishers, non-brand, SERP, featured snippets, intent, power user) | `REFRESH_QUEUE.md`, `JAZYK_SLOVNIK.md` |
| 7 | „Kde si nechat poradit“ | „nabízíme 3 typy auditu“ (Z4: jeden Audit AI viditelnosti) a tvrzení o klientech („typicky jsme zjistili…“) bez dokladu | Z4, kořenový CLAUDE.md § VI |
| 8 | Ecosia / Startpage / Mojeek | tvrzení bez ověření; Seznam jako česká alternativa chybí úplně | — |
| 9 | H2 | část nadpisů bez povinného formátu `hl` + `strong` | kořenový CLAUDE.md § VI |

## Rozhodnutí o obsahu

- **Těžiště na uživatele, ne na vydavatele.** Dotazy jsou uživatelské; část pro majitele webu zůstává,
  ale zkrácená a s odkazem na `blokovat-ai-odpovedi-gsc` (ten je v `REFRESH_QUEUE.md` jako Refresh 4).
- **Režim AI krátce + odkaz** na `rezim-ai-google#jak-rezim-ai-vypnout-zrusit-nebo-odstranit` — návod
  k režimu AI nese kliky rodiny a nesahá se na něj (kořenový CLAUDE.md, backlog).
- **Gemini v telefonu jen rozlišit**, nepsat návod — je to řádek `jak vypnout gemini v telefonu` v plánu
  (pořadí 6). Do jeho sloupce C zapsat zjištění z GSC: „jak vypnout ai v telefonu“ 452 zobrazení přistává
  na tomhle článku.
- **Kotvy se změní** (Google je nabízí v SERPu). Bez náhrady to nejde, nadpisy jsou chybné; nové kotvy
  Google převezme.
- **UK povinnost CMA (3. 12. 2026) sem nepatří** — patří do refreshe `blokovat-ai-odpovedi-gsc`.
- CTA: Audit AI viditelnosti pro majitele webu, kteří zvažují vyřazení (nejdřív změřit, o co přijdou).
