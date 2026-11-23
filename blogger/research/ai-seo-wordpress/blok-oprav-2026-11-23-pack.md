# Blok oprav 23. 11. 2026 — CTA Packu slibuje obsah, který Pack nemá

**Typ runu:** blok oprav (série 10 runů zadaná Kamilem 22. 11. 2026, run 5; audity přes nezávislé Claude subagenty,
Codex do 24. 11. 15:01 v limitu). **Vada:** CTA u odkazu na `/pack/` popisovala AI SEO Wireframe Pack jako balík, ve
kterém jsou šablony a checklisty mimo jeho obsah — llms.txt, robots.txt, nastavení SEO pluginu, WooCommerce, autorská
stránka a Person se sameAs, šablony průzkumu a případové studie, checklist měření, Lighthouse, sada testovacích dotazů,
checklisty pro Reddit a LinkedIn, „platformová specifika“, glosář nebo ověření šancí na Wikipedii. Nález z bloku CTA
auditu (run 3), fronta `REFRESH_QUEUE.md` 23. 11.; stejný typ vady jako CTA v `seznam-cz-ai-vyhledavani` (refresh 14. 10.).

## Doklad

| Druh | Co | Zdroj, načteno 23. 11. 2026 |
|---|---|---|
| Dokumentace (vlastní web) | FAQ „Co konkrétně Pack obsahuje?“: sedm typů stránek (homepage, produkt, kategorie, blog článek, blog výpis, prodejní landing, kontakt) — ke každému anotovaný wireframe, šablony textů a ukázky strukturovaných dat; krok-za-krokem návod aplikace; vše v master PDF (85 stran) | `src/content/pages/pack.ts` ř. 87–118 (revize stránky 20. 9. 2026) |
| Dokumentace (vlastní web) | `deliverables`: 7 wireframů s anotacemi; šablony textů (titulek, meta popisek, nadpisy, text, časté dotazy); ukázky strukturovaných dat Product, FAQPage, Article, BreadcrumbList, LocalBusiness, Organization; návod aplikace podle CMS (Upgates, Shoptet, WordPress, custom); anti-pattern checklist | `pack.ts` ř. 344–350 |
| Dokumentace (vlastní web) | typy stránek: produkt (Product s nabídkou a hodnocením, FAQ, související produkty), kategorie (CollectionPage, ItemList, filtry), blog článek (krátká odpověď 40–60 slov, FAQPage, **informace o autorovi**), blog výpis (filtry, stránkování, prolinkování), prodejní landing, kontakt (NAP, LocalBusiness); první kapitola s principy SEO/GEO/AEO, osmá o nasazení | `pack.ts` ř. 119–200, 262–276, 334 |
| Dokumentace (vlastní web) | srovnání Pack × audit: „Master PDF 85 stran + 9 jednotlivých kapitol“, cena 1 490 Kč včetně DPH | `src/content/pages/audit.ts` ř. 411–428 |

## Postup (Z12: hledáno podle entity)

- Všechny zmínky Packu v článcích: odkaz `/pack/`, „Wireframe Pack“ a samostatné „Pack/Packu/Packem/Packy“ — **87 řádků
  v 84 článcích**. U každé zmínky přečtena věta, která popisuje obsah Packu, a porovnána s výčtem v `pack.ts`.
  Cena: všude 1 490 Kč včetně DPH, správně.
- Po opravě i šířeji (poučení z bloku CTA auditu): zmínky bez názvu a odkazu („naše PDF / náš návod obsahuje…“) —
  žádné; věta nad každým CTA Packu — odkazy na článek „praktický checklist SEO pro AI“, ne na obsah Packu.
- **Pravidlo bloku:** opravuje se tvrzení, že Pack obsahuje (a) typ stránky mimo sedm typů (autorská stránka, srovnávací
  článek, průzkum, případová studie), (b) výstup, který výčet nemá (šablona llms.txt nebo robots.txt, checklist měření,
  pluginu, WooCommerce, Lighthouse, komunitních platforem, platformových specifik, sada dotazů, záznamová tabulka,
  glosář, ověření šancí na Wikipedii), (c) strukturovaná data mimo výčet (Person se sameAs). **Zpřísněno po auditu kola 1:**
  podrobnost u sedmi typů zůstává, jen když jde dohledat v `pack.ts` (krátká odpověď, filtry kategorie, informace o autorovi
  v článku, kapitola k produktové stránce, interní prolinkování) — „pasážová struktura“ ani „checklist polí“ ne;
  formulace o použití nesmí stát pod otázkou, která slibuje kanál nebo výsledek, který Pack neřeší (LinkedIn, video).
  Kontroluje se i úvodní otázka nad CTA a u článků o konkrétních strukturovaných datech, jestli „ukázky strukturovaných
  dat“ nesvádí k typu mimo výčet (ImageObject, Person). Text odkazu „Stáhněte AI SEO Wireframe Pack“ (2 články) obsah
  netvrdí, zůstává.
- **`updated` se neposouvá** — obchodní text CTA, ne obsah článku (precedent `fddc6dc`, blok CTA auditu `4a20a8d`).

## Opravená místa (23 článků po kole 1)

| Článek | Bylo (Pack „obsahuje“) | Je |
|---|---|---|
| `ai-seo-wordpress` ř. 196 | checklist SEO pluginu, vzor llms.txt, šablonu robots.txt, kontrolní seznam pro WooCommerce | wireframy, šablony textů a ukázky strukturovaných dat pro sedm typů stránek; přiložený návod je krok za krokem použije v libovolném redakčním systému včetně WordPressu |
| `autorsky-profil-pro-ai` ř. 203 | wireframe autorské stránky, Person se sameAs, checklist identity | (otázka „mít autora správně uvedeného v každém článku“) wireframe blogového článku s informacemi o autorovi, Article a Organization; Person se sameAs a autorskou stránku podle tohoto návodu |
| `person-data-pro-autora` ř. 195 | návrhy stránek včetně autorského profilu | (otázka „kromě dat o autorovi připravit i zbytek webu“) sedm typů stránek včetně blogového článku s informacemi o autorovi, Organization; Person data podle příkladu v článku |
| `originalni-data-pro-ai` ř. 197 | šablony pro benchmark, průzkum, případovou studii | (otázka „zveřejnit na stránce se strukturou, která pomáhá AI obsah lépe pochopit“) wireframe blogového článku s krátkou odpovědí, šablony textů, Article |
| `gsc-ai-segmenty-mereni` ř. 239 | checklist měření AI viditelnosti (GSC, GA4, UTM) | (otázka „vedle měření připravit i stránky, ze kterých může AI čerpat odpovědi“) wireframy, šablony textů, strukturovaná data pro sedm typů stránek |
| `lighthouse-ai-check` ř. 232 | checklist Lighthouse, vzor llms.txt, kontroly accessibility tree | (otázka „po technických opravách upravit i obsah a strukturu hlavních typů stránek“) wireframy, šablony, strukturovaná data; kontroly Agentic Browsing podle článku |
| `test-viditelnosti-v-ai` ř. 258 | sada typů dotazů, záznamová tabulka, checklist | stránku některého ze sedmi základních typů nebo krátké odpovědi na ní doplníte podle Packu (wireframe, šablony textů, strukturovaná data) |
| `ai-citace-reddit` ř. 197 | checklisty pro Reddit a LinkedIn | posílit vlastní web, ze kterého může AI citovat: wireframy, šablony textů, strukturovaná data |
| `jak-ai-cituje-zdroje` ř. 209 | checklist univerzálního základu i platformových specifik | „strukturou stránek a strukturovanými daty, tedy dvěma složkami univerzálního základu, které řešíte přímo na vlastním webu“ |
| `aeo-geo-je-porad-seo` ř. 176 | checklist pro Google Search Central, AEO/GEO šablony mimo Google | wireframy a šablony textů pro sedm typů stránek, ukázky strukturovaných dat a checklist nejčastějších chyb |
| `stredni-cast-trychtyre-ai` ř. 146 | wireframy srovnávacího a rozhodovacího obsahu | wireframy produktové a prodejní stránky, blogového článku a dalších typů; „jejich struktura pomáhá AI lépe pochopit obsah“ |
| `informacni-obsah-v-ai-ere` ř. 156 | struktura rozhodovacího i informačního obsahu | struktura blogového článku i prodejní stránky |
| `ceske-nazvy-ai-funkci-google` ř. 136 | úvodní kapitola s glosářem | (otázka „píše texty webu víc lidí a potřebujete, aby se drželi stejné předlohy“) sedm drátěných modelů a šablony textů |
| `znacka-na-wikipedii-pro-ai` ř. 203 | ověří, jestli značka splňuje podmínky pro Wikipedii | (otázka „web připravený tak, aby z něj AI o značce čerpala správné údaje“) pro sedm typů stránek wireframy, šablony textů a strukturovaná data včetně Organization; šance na Wikipedii podle kritérií v článku |
| `produktove-stranky-pro-ai` ř. 189 (po kole 1) | checklist polí, na kterých u AI záleží | kapitola k produktové stránce s wireframem, vzory strukturovaných dat Product a Offer a checklistem nejčastějších chyb |
| `query-fan-out-ai-mode` ř. 194, `rag-ai-vyhledavani` ř. 162 (po kole 1) | wireframy s pasážovou strukturou | pro sedm typů stránek wireframy a šablony textů včetně vzorů krátkých odpovědí (totéž `rag-ai-vyhledavani`) |
| `filtry-faceted-navigace-eshopu` ř. 159 (po kole 1) | včetně toho, co má být odkaz a co ovládací prvek | audit přesunut hned za otázku; Pack: struktura stránek kategorií a produktů včetně výpisu s filtry, odkaz × ovládací prvek podle článku |
| `ai-generovany-obsah-viditelnost` ř. 153 (po kole 1) | místo pro vlastní data a autora | „začít hotovou strukturou“: návrhy sedmi typů stránek včetně blogového článku s krátkou odpovědí a informacemi o autorovi |
| `linkedin-pro-ai-citace` ř. 188, `youtube-pro-ai-viditelnost` ř. 171 (po kole 1) | otázka slibovala citace z LinkedInu / z videa | otázka o obsahu na webu, ze kterého vyjdete i v LinkedIn článcích / popisech videí (totéž `youtube-pro-ai-viditelnost`); wireframy a šablony krátkých odpovědí |
| `llms-txt-navod` ř. 142 (po kole 1) | „hotová předloha“ v návodu k llms.txt | „sami upravit obsah a strukturu stránek podle hotové předlohy“ |
| `imageobject-strukturovana-data` ř. 216 (po kole 1) | „včetně strukturovaných dat“ v článku o ImageObject | „(Product, Article a další)“ + samostatná věta „ImageObject k nim doplníte podle tohoto článku“ |

Po opravách: Z17 grep na všechny opravené formulace prázdný (shody v `stredni-cast-trychtyre-ai` ř. 3 a 117 jsou
vlastní téma článku), `jazyk-check.py` 0 nálezů ve 14 článcích, `kontrola-komponent.py` 0 (184 použití), build
v pořádku, odkazy na `/pack/` vykreslené, žádné syrové značky.

## Vypořádání auditu kola 1 (fakta)

Audit: `blok-oprav-2026-11-23-pack-audit1-result.md` — 2 BLOCKER, 1 WARNING, 5 TIP. Seznamy obsahu ve všech 14 místech
podle auditora na `pack.ts` sedí; chyba byla v úvodních otázkách a v hranici pravidla.

### Zapracováno

| # | Nález | Oprava |
|---|---|---|
| 1 | `lighthouse-ai-check` — otázka „opravy promítnout do šablon“ vracela llms.txt a accessibility | „Chcete po technických opravách srovnat i obsah a strukturu hlavních typů stránek? … samotné kontroly Agentic Browsing opravíte podle postupu v tomto článku.“ |
| 2 | `person-data-pro-autora` — otázka slibovala Person data | „Chcete po autorovi připravit i zbytek webu? … Person data autora doplníte podle příkladu v tomto článku.“ |
| 3 | hranice pravidla propouštěla stejnou vadu | pravidlo zpřísněno (podrobnost dohledatelná v `pack.ts`, otázka bez kanálu, který Pack neřeší, „ukázky strukturovaných dat“ v článcích o konkrétním typu); opraveno všech 8 míst, která auditor jmenoval (query-fan-out a rag v jedné odrážce), a navíc `imageobject-strukturovana-data`; celý korpus znovu prošel slovníkem `pack.ts` — žádné další |
| 4 | `ai-seo-wordpress` — WordPress jen v `deliverables` | „…a krok-za-krokem návod, jak je aplikovat na libovolný redakční systém včetně WordPressu“; nesoulad v `pack.ts` (FAQ zmiňuje instrukce jen pro Upgates a Shoptet, Organization jen v `deliverables`) předán adminovi přes board |
| 5 | `autorsky-profil-pro-ai` — „ukázky strukturovaných dat“ svádí k Person | „…(mimo jiné Article a Organization); Person data se sameAs a samostatnou autorskou stránku doplníte podle tohoto článku“ |
| 6 | `jak-ai-cituje-zdroje` — univerzální základ je širší než Pack | „Pokud chcete začít strukturou stránek a strukturovanými daty, tedy tou částí univerzálního základu, kterou máte na vlastním webu…“ |
| 7 | `test-viditelnosti-v-ai` — srovnávací stránka mezi sedmi typy není | „Pokud chybí některý ze sedmi základních typů stránek nebo krátké odpovědi na nich, doplníte je podle…“ |
| 8 | účinek „kterou AI dobře čte“ bez dokladu | `stredni-cast-trychtyre-ai` a `originalni-data-pro-ai` podle `pack.ts` „pomáhá AI lépe pochopit obsah“; `originalni-data` „(mimo jiné Article)“; stejné obraty v dalších CTA jsou formulace účinku, ne obsahu — mimo vadu bloku |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 8 (část) | sjednotit účinek „AI dobře čte“ ve všech CTA | jiná vada (tvrzení o účinku, ne o obsahu Packu); `pack.ts` sám říká „pomáhá … AI lépe pochopit obsah“ |

Po opravách: `jazyk-check.py` 0 nálezů ve 23 článcích, `kontrola-komponent.py` 0 (294 použití), build v pořádku,
vykreslení bez vad, odkazy na `/pack/` všude.

## C5b — cílené ověření kola 1

`blok-oprav-2026-11-23-pack-c5b-result.md`: auditor kola 1 ověřil jedno kolo navíc oba BLOCKERy, zpřísněné pravidlo
s 9 nově opravenými místy a tipy 4–7 — **vše OBSTOJÍ**, nový zásadní nález není. Připomínky k záznamu (počet míst,
tabulka se znění mezistavu) a předání nesouladu v `pack.ts` adminovi zapracovány při uzávěru.

## Vypořádání auditu kola 2 (jazyk, struktura)

Audit: `blok-oprav-2026-11-23-pack-audit2-result.md` — 0 BLOCKER, 8 WARNING, 12 TIP. Kolo 1 vypořádané, zbytek opravené
vady v žádném z 23 souborů.

### Zapracováno

| # | Nález | Oprava |
|---|---|---|
| 1 | `youtube-pro-ai-viditelnost` — „která“ se vázalo k vzdálené „struktuře“ | „…obsahuje wireframy a šablony krátkých odpovědí pro sedm typů stránek; jejich struktura pomáhá AI lépe pochopit obsah.“ |
| 2 | `ceske-nazvy-ai-funkci-google` — otázka se četla jako potřeba víc autorů | „Píše texty webu víc lidí a potřebujete, aby se drželi stejné předlohy?“ |
| 3 | `test-viditelnosti-v-ai` — dvakrát „chybí“, „doplníte je“ × „některý“ | „Stránku některého ze sedmi základních typů nebo krátké odpovědi na ní doplníte podle … Packu, který ke každému z těch typů obsahuje…“ |
| 4 | `person-data-pro-autora` — „po autorovi“ | „Chcete kromě dat o autorovi připravit i zbytek webu?“ |
| 5 | `filtry-faceted-navigace-eshopu` — na diagnostickou otázku odpovídal Pack | audit hned za otázkou, Pack druhý: „Kdo chce stránky kategorií a produktů stavět podle hotové předlohy, najde jejich strukturu včetně výpisu s filtry v … Packu…“ |
| 6 | `gsc-ai-segmenty-mereni` — otázka nenavazovala na měření | „Chcete vedle měření připravit i stránky, ze kterých může AI čerpat odpovědi?“ |
| 7 | `ai-seo-wordpress` — kalk „krok-za-krokem návod“, „aplikovat na systém“ | „…pro sedm typů stránek. Přiložený návod ukazuje, jak je krok za krokem použít v libovolném redakčním systému včetně WordPressu.“ |
| 8 | „anti-pattern“ bez vysvětlení | `aeo-geo-je-porad-seo` a `produktove-stranky-pro-ai` „checklist nejčastějších chyb“ (`pack.ts`: „čemu se vyhnout u každého typu stránky“) |
| 9–18 | jazykové tipy | `ai-generovany-obsah` „začít hotovou strukturou … obsahuje“; `autorsky-profil` „mít autora správně uvedeného“, „wireframe blogového článku“, „podle tohoto návodu“; `stredni-cast` „; jejich struktura pomáhá…“; `originalni-data` „wireframe blogového článku“; `jak-ai-cituje` „dvěma složkami univerzálního základu, které řešíte přímo na vlastním webu“; `lighthouse` „upravit“; `query-fan-out` a `rag` „obsahuje pro sedm typů stránek wireframy a šablony textů včetně vzorů krátkých odpovědí“; `znacka-na-wikipedii` slovosled; `imageobject` samostatná věta o ImageObject; `linkedin` „wireframy a šablony krátkých odpovědí“ |
| 19 | mimo blok, ale tatáž věta jako W8 | `produktove-stranky-pro-ai` „s wireframem, vzory strukturovaných dat Product a Offer“ |
| 20 | tabulka v záznamu | srovnána s finálním zněním |
| — | zbytek účinku „AI dobře čte“ mimo blok | `share-of-model-metrika` ř. 176 zapsáno do `REFRESH_QUEUE.md` |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| — | — | zapracováno vše |

Třetí kolo není potřeba: kolo 2 nemělo BLOCKER, zásadní nálezy kola 1 obstály v C5b a změny po kole 2 jsou jazykové
(doslovná znění auditora), fakta o obsahu Packu nemění. Po opravách `jazyk-check.py` 0 nálezů ve 23 článcích,
`kontrola-komponent.py` 0 (294 použití), build v pořádku, vykreslení bez vad.
