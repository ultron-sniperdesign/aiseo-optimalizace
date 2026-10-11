# Research — Zboží.cz jako zdroj pro Seznam AI (dřív Seznam Asistent)

**Řádek plánu:** `zbozi cz pro ai` (ř. 153) · **Datum:** 2026-10-11
**Kategorie:** tutorial (sloupec D) · **Tagy:** eshopy, ai-platformy · **Slug:** `zbozi-cz-pro-ai`

> **Kolizní kontrola (Z10):** web Zboží.cz zmiňuje v šesti článcích, ale **párování nabídek ani požadavky
> feedu mimo varianty nepokrývá nikde** (hledáno „párov“, „spárov“, „katalogová karta“). Varianty
> a `ITEMGROUP_ID` už má `varianty-produktu-pro-ai` — neopakovat, odkázat. Výčet zdrojů Asistenta už
> mají `seznam-asistent-sellma`, `firmy-cz-pro-ai` a `recenze-srovnavace-pro-ai` — tady jde o e-shop.
> Hranice proti řádkům plánu: **259** (Asistent ve výsledcích Seznamu, IndexNow, beta) a **298** (AI
> souhrny recenzí na Zboží.cz) — v článku nanejvýš odkaz jednou větou.
>
> **Teze z plánu (sloupec C):** „Seznam uvádí Zboží.cz mezi zdroji dat Seznam Asistenta.“ **Ověřeno
> s výhradou:** tisková zpráva z 25. 5. 2026 ano, nápověda Seznam AI ne (vede Zboží.cz jako budoucí
> vertikálu). Konkrétnější doložená cesta: **nabídky Seznam Nákupy (placené, z XML feedu Zboží.cz) se
> v Seznam AI zobrazují od května 2026.** Pokyn „NESLIBOVAT zobrazení“ dodržen — jak AI nabídky vybírá,
> Seznam nepopisuje.

---

## Co je ověřeno a čím (Z16)

Zdroje Seznamu nemají otevřenou licenci → v článku jen parafráze, žádné delší citace. Stránky nápovědy
nemají datum na stránce; „WP mod“ = časové razítko „modified“ z veřejného WordPress API daného webu
(může odrážet i přejmenování, ne obsahovou revizi). Texty stažené 11. 10. 2026 jsou ve scratchpadu
(`zbozi/text/`), klíčové pasáže jsem ověřil přímo v nich.

| Druh dokladu | Co | Odkaz + datum |
|---|---|---|
| **Dokumentace** | Tisková zpráva *Seznam Asistent je dostupný všem přihlášeným uživatelům* (25. 5. 2026): nástroj „v současné době“ využívá data z Vyhledávání, zpravodajských webů, **Zboží.cz**, Počasí.cz, Firmy.cz, Sport.cz, Jízdních řádů a TV programu; beta pro všechny přihlášené | blog.seznam.cz/2026/05/seznam-asistent-je-dostupny-vsem-prihlasenym-uzivatelum/, načteno 11. 10. 2026 |
| | Nápověda *Seznam AI — Nejčastější dotazy* (WP mod 4. 9. 2026): „v první verzi“ napojená jen data z webového a zpravodajského indexu Vyhledávání a z Počasí.cz → **rozpor s tiskovou zprávou** | o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/ (stará adresa /napoveda/asistent/ přesměrovává), 11. 10. 2026 |
| | Nápověda *Beta verze* (WP mod 26. 8. 2026): Zboží.cz „pro nákupní rady a vyhledávání produktů“ mezi vertikálami, které se **postupně připojí** | o-seznam.cz/napoveda/seznam-ai/beta-verze/, 11. 10. 2026 |
| | Nápověda *Sklik inzeráty v Seznam AI* (WP mod 4. 9. 2026): **nabídky ze Seznam Nákupů se v Seznam AI zobrazují**, uživatel si může vybrat nabídku konkrétního e-shopu; imprese a prokliky se ve statistikách počítají do **„Produkt – doporučené nabídky“**. Na plochy v Seznam AI nejde zvlášť cílit ani je vyloučit (věta se týká textových inzerátů) | o-seznam.cz/napoveda/seznam-ai/sklik-inzeraty-v-seznam-ai/, 11. 10. 2026 |
| | Blog *Novinka v Seznam AI: Pod odpověďmi se zobrazují inzeráty z Skliku* (25. 6. 2026, upraveno 9. 10. 2026): nabídky Seznam Nákupů v Seznam AI **„od května letošního roku“** | blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/, 11. 10. 2026 |
| | **Název:** nápověda i titulek asistent.seznam.cz = „Seznam AI“; tisková zpráva z května a dokumentace Skliku = „Seznam Asistent“. Oficiální oznámení přejmenování nenalezeno → v článku „Seznam AI (dřív Seznam Asistent)“, bez data přejmenování | stav 11. 10. 2026 |
| | *Registrace provozovny* (WP mod 11. 8. 2026): provozovna nutná pro Seznam Nákupy a výpis na Zboží.cz; jen internetové obchody; podmínky (IČO, kontakty, košík/objednávkový formulář, obchodní podmínky…); postup Sklik → Nastavení → Provozovny → Přidat provozovnu (IČ, název, URL webu, URL feedu); **registrace zdarma, nabídky se zobrazují jen s dobitým kreditem, proklik se platí podle ceníku**; propojení s Firmy.cz | napoveda.sklik.cz/inzerce-nakupy/registrace-provozovny/, 11. 10. 2026 |
| | *Ceník Inzerce Nákupy* (WP mod 1. 4. 2026): platba za proklik ze Seznam Peněženky, aukční princip; **dynamický minimální ceník** podle kategorie a cenových pásem (od 1. 4. 2026) | napoveda.sklik.cz/inzerce-nakupy/cenik-inzerce-nakupy/; blog.seznam.cz 16. 3. 2026, 11. 10. 2026 |
| | *Specifikace feedu* (WP mod 29. 9. 2026): **povinné** SHOP, SHOPITEM, PRODUCTNAME, DESCRIPTION, URL, PRICE_VAT, DELIVERY_DATE, IMGURL, EPREL_ID (u kategorií s energetickým štítkem); feed bez povinných tagů nejde použít; doporučené tagy zvyšují pravděpodobnost zobrazení ve výsledcích hledání; šablona názvu VÝROBCE ŘADA OZNAČENÍ KÓD BARVA [JINÉ]; CATEGORYTEXT musí odpovídat číselníku (max. 10), strom kategorií categories.json | napoveda.sklik.cz/reklamy/xml-feed/specifikace/, 11. 10. 2026 |
| | *XML feed* (WP mod 18. 3. 2026): duplicita = shodný PRODUCTNAME a ITEM_ID; stahování 1× až 12× denně; **feedy pro Heureku a Google nákupy nepodporuje** | napoveda.sklik.cz/reklamy/xml-feed/, 11. 10. 2026 |
| | *Párování nabídek* (WP mod 19. 2. 2026): hlavní faktory **PRODUCTNAME, EAN, MANUFACTURER, PRODUCTNO**; pravidla názvu (bez ©®™, dárky do EXTRA_MESSAGE); párovací nástroj, ruční kontrola, **zpracování do 48 hodin**; důvody zamítnutí: neodpovídá produktu (shoda všech parametrů), nabídka je obecná, duplicitní nabídka | napoveda.sklik.cz/inzerce-nakupy/parovani-nabidek/, 11. 10. 2026 |
| | *Pravidla pro internetové obchody* (WP mod 31. 8. 2026): údaje ve feedu pravdivé a shodné s webem, cena v Kč s DPH shodná s webem; každá nabídka jednou; URL nesmí vést na úvodní stránku ani na výběr bez určené varianty (2.9); **2.11: Seznam si vyhrazuje právo použít informace z XML pro své služby a služby partnerů** | napoveda.sklik.cz/pravidla/pravidla-a-podminky-zbozi-cz/pravidla-pro-internetove-obchody/, 11. 10. 2026 |
| | *Technické podmínky* (WP mod 25. 6. 2026): faktory řazení na Zboží.cz při textovém hledání — shoda s dotazem, shoda kategorie, cenová výhodnost, doprava a osobní odběr, dostupnost, kvalita obchodu podle hodnocení, předchozí zájem uživatelů, nabízená cena za proklik; doporučené nabídky na detailu produktu vyžadují hodnocení obchodu nad 70 % (při více než 5 hodnoceních) | napoveda.sklik.cz/pravidla/pravidla-a-podminky-zbozi-cz/technicke-podminky-zbozi-cz/, 11. 10. 2026 |
| | Nápověda *Zákaz tvorby AI odpovědí z vašeho webu* (WP mod 22. 9. 2026): Seznam-Extended / AI / MachineLearning v robots.txt nebo `nosnippet` pro SeznamBot → stránky se v AI odpovědích nepoužijí. **Vztah k nabídkám z feedu nepopisuje** | o-seznam.cz/napoveda/vyhledavani/seznambot/zakaz-tvorby-ai-odpovedi-z-vaseho-webu/, 11. 10. 2026 |
| | **Doplněno při psaní (11. 10. 2026, ověřeno v textech ve scratchpadu):** | |
| | *Ceník Inzerce Nákupy*: skutečná cena za proklik podle aukce (nejnižší částka pro udržení pozice, nejméně ceníková); **bezplatné zobrazení produktů (free listing) Inzerce Nákupy nenabízí** — jen parafráze | napoveda.sklik.cz/inzerce-nakupy/cenik-inzerce-nakupy/ |
| | Blog *Nový ceník pro Seznam Nákupy* (16. 3. 2026): od 1. 4. 2026 minimální CPC podle kategorie a rozšířeného počtu cenových pásem | blog.seznam.cz/2026/03/novy-cenik-pro-seznam-nakupy-vice-detailu-a-presnejsi-cpc/ |
| | Blog *Seznam Nákupy už jen pohodlně s Sklikem* (19. 8. 2025): od 15. září 2025 inzerce v Seznam Nákupech jen přes kampaně ve Skliku | blog.seznam.cz/2025/08/seznam-nakupy-uz-jen-pohodlne-s-sklikem/ |
| | Nápověda *Seznam Nákupy (dříve kampaň Zboží.cz)*: kampaň Nákupy se u propojených účtů vytváří automaticky; zobrazení na Zboží.cz, ve vyhledávání Seznam.cz, na Obrázky.cz a Sbazar.cz; Centrum prodejce = dříve Administrace Zboží.cz | napoveda.sklik.cz/kampane-a-sestavy/typy-kampani/seznam_nakupy/ |
| | Nápověda *Inzerce Nákupy*: v Centru prodejce zůstává mimo jiné diagnostika feedu, frekvence stahování a **párovací nástroj** | napoveda.sklik.cz/inzerce-nakupy/ |
| | *Registrace provozovny* — doplňky: podmínky zahraničních obchodů (web v češtině, ceny v Kč, možnosti reklamace, ceny dopravy do ČR…); po vytvoření provozovny jde rovnou založit kampaň Nákupy; nabídky „během pár hodin“, na Zboží.cz s funkčním feedem a kreditem asi za 4 hodiny; pak ověření podle pravidel, při nedostatcích výzva k opravě; **propojení se zápisem na Firmy.cz 1–5 pracovních dní** (propisuje název, adresu, logo, výdejní místa); kontrola propojení v Centru prodejce | napoveda.sklik.cz/inzerce-nakupy/registrace-provozovny/ |
| | *XML feed* — doplňky: feed stahuje Centrum prodejce; nepodporované i feedy pro Facebook; odkaz na validátor | napoveda.sklik.cz/reklamy/xml-feed/ |
| | *Specifikace feedu* — doplňky: „XML feed bez povinných tagů není možné pro inzerci Nákupy použít“; DESCRIPTION česky bez reklamních textů obchodu; URL bez diakritiky, unikátní i pro varianty; PRICE_VAT včetně DPH a poplatků; DELIVERY_DATE = doba od přijetí objednávky do expedice; IMGURL bez vodoznaků, log obchodů a reklamních nápisů; EPREL_ID v daných kategoriích; EAN/PRODUCTNO/MANUFACTURER/CATEGORYTEXT/ITEMGROUP_ID/ITEM_ID doporučené; **ITEM_ID stálé i při změně názvu/URL, při změně na jiný výrobek (i barva, velikost) změnit, aby se nabídka odpárovala**. Věta o zařazení „samostatných nabídek“ do výpisu kategorie jen s CATEGORYTEXT **v článku není**: stránka *Kde se inzerce Nákupů zobrazuje* vede výpis samostatných nabídek v kategorii jako plochu „do 11. 1. 2024“ | napoveda.sklik.cz/reklamy/xml-feed/specifikace/; napoveda.sklik.cz/inzerce-nakupy/kde-se-inzerce-nakupu-zobrazuje/ |
| | *Pravidla pro internetové obchody* — doplněk: za porušení pravidel postih podle Smluvních podmínek | (viz výš) |
| | *Technické podmínky* — doporučené nabídky na detailu produktu: průměrné hodnocení obchodu nad 70 % (při více než 5 hodnoceních) a bez drahých položek se zájmem pod 5 % | (viz výš) |
| | **Název v dokumentaci Skliku:** stránka *Vyhledávací síť* („textové reklamy … také v Seznam Asistentovi“) a *Smluvní podmínky* (definice „Seznam Asistent“); titulky stránek nápovědy Seznam AI končí „Nápověda Seznam Asistent“, texty používají „Seznam AI“ | napoveda.sklik.cz/zaciname-inzerovat/vyhledavaci-sit/; napoveda.sklik.cz/pravidla/smluvni-podminky-pro-inzerenty/ |
| | Blog *Nové kategorie a parametry od října 2026* (5. 10. 2026) — Seznam na blogu vydává přehledy změn kategorií a parametrů (použito jen obecně v závěru); strom kategorií je podle specifikace „průběžně aktualizovaný“ | blog.seznam.cz (odkaz v souvisejících článcích blogu z 25. 6. 2026) |
| **Rozhraní (UI)** | **prázdné** — do Seznam AI jsem dotazy nezadával a do Centra prodejce ani Skliku se nepřihlašuji. Snímek na blogu (25. 6. 2026) ukazuje karty produktů s cenami a panel „Sponzorované nabídky“ — **jen ilustrace Seznamu, v textu ho jako popis rozhraní nepoužívám** | — |
| **Měření** | **Marketing Miner (11. 10. 2026, cs):** zbozi.cz 19 000/měs (meziročně −7 %), zboží 20 000, zbozi feed 50 (+51 %), zbozi cz registrace 10, xml feed zbozi 10; „seznam asistent“ a „seznam ai“ bez dat | výstupy mimo repo (jen pro výběr a keywords, do textu ne) |
| **Nelze ověřit** | (a) **jak Seznam AI vybírá a řadí nabídky** — zda rozhoduje párování, hodnocení, cena za proklik; (b) zda se v Seznam AI může objevit obchod bez placených Seznam Nákupů; (c) zda jde nabídky ze Seznam AI vyloučit; (d) zda blokace Seznam-Extended v robots.txt ovlivní nabídky z feedu; (e) zda Seznam AI čte strukturovaná data z produktových stránek; (f) datum přejmenování na Seznam AI; (g) zda pro Seznam AI platí podmínky doporučených nabídek z detailu produktu (hodnocení nad 70 %) — imprese se počítají do položky stejného jména, víc nápověda neříká | — |

---

## Podmínky u tvrzení o Seznamu (B3)

| Tvrzení v článku | Za jakých podmínek platí | Doklad |
|---|---|---|
| Zboží.cz je mezi zdroji Seznam AI | **tisková zpráva z 25. 5. 2026**; nápověda (4. 9. 2026) ho mezi napojenými službami nevede a beta stránka ho řadí mezi budoucí — psát jako rozpor s daty, ne jako hotovou věc | blog 25. 5.; nápověda FAQ, Beta verze |
| Nabídky Seznam Nákupy v Seznam AI | **od května 2026** podle nápovědy a blogu; jde o **placené** nabídky z kampaně Nákupy, statistiky v „Produkt – doporučené nabídky“; **jak se vybírají, Seznam nepopisuje** | nápověda Sklik inzeráty v Seznam AI; blog 25. 6. |
| Registrace zdarma, zobrazení za kredit | registrace provozovny zdarma; nabídky se zobrazují jen s dobitým kreditem v Peněžence a proklik se platí podle ceníku (aukce, dynamický minimální ceník od 1. 4. 2026) | Registrace provozovny; Ceník |
| Povinné tagy feedu | podle specifikace k 29. 9. 2026; EPREL_ID jen u kategorií s energetickým štítkem | Specifikace feedu |
| Párování | hlavní faktory PRODUCTNAME, EAN, MANUFACTURER, PRODUCTNO — **„hlavní faktory“, ne úplný algoritmus**; ruční kontrola požadavků do 48 h | Párování nabídek |
| Řazení na Zboží.cz | **faktory řazení na srovnávači Zboží.cz**, ne v Seznam AI — nepřenášet | Technické podmínky |
| Seznam smí data z feedu použít jinde | pravidlo 2.11 — **vyhrazené právo**, ne popis, co se s daty děje | Pravidla 2.11 |
| Formát feedu | feedy pro Heureku a Google nákupy nepodporuje — potřeba vlastní formát Zboží.cz | XML feed |

---

## Navazující články (B2) — prověrka agentem 11. 10. 2026

| Článek | Verdikt | Proč / kam |
|---|---|---|
| `produktovy-feed-gtin` | **odkaz** | čistý (zdroje Google); Zboží.cz výslovně nepokrývá → odkaz na identifikátor, ne na Zboží.cz; kotva `#proc-je-identifikator-dulezitejsi-nez-vypada` |
| `varianty-produktu-pro-ai` | **odkaz** | čistý, 3. 10. 2026; varianty a ITEMGROUP_ID na Zboží.cz → `#feedy-jedna-skupina-ctyri-zapisy` |
| `firmy-cz-pro-ai` | **odkaz** | čistý; tentýž výčet zdrojů z pohledu lokální firmy → `#co-se-zmenilo` |
| `seznam-asistent-sellma` | **jen konkrétní část** | výčet zdrojů `#z-jakych-zdroju-asistent-cerpa`; zbytek článku přeceňuje Seznam-Extended (rozpor s `seznam-extended-opt-out`) |
| `seznam-extended-opt-out` | **odkaz** | nejopatrnější článek o Seznamu; jen pokud zmíním robots.txt → `#jak-se-rozhodnout` |
| `recenze-srovnavace-pro-ai` | **neodkazovat teď** | kauzální tvrzení bez opory, „dnes ráno“ (ř. 133) → fronta |
| `seznam-cz-ai-vyhledavani` | **neodkazovat** | FAQ v rozporu s tělem, Heureka jako služba Seznamu, **nepravdivé tvrzení o obsahu Packu** (ř. 211) → fronta, vysoká priorita |

---

## Odkud jsou otázky FAQ (C1)

Trends k těmto dotazům nic nemá (úzké téma, viz C1). Google Suggest 11. 10. 2026 (cs) vrátil
u „zbozi feed“ mimo jiné *zbozi feed specifikace*, *zbozi cz specifikace feedu*, *zbozi cz xml feed*,
u „zbozi cz registrace“ *zbozi cz registrace eshopu*, u „seznam ai“ *seznam ai asistent*.

| Otázka | Odkud |
|---|---|
| Je Zboží.cz pro e-shop zdarma? | Suggest (*registrace eshopu*) + vlastní FAQ v nápovědě Registrace provozovny („Je registrace e-shopu zdarma?“) |
| Jak se e-shop dostane do Seznam AI? | téma řádku plánu (sloupec C) |
| Kde najdu specifikaci feedu pro Zboží.cz? | Suggest (*zbozi feed specifikace*, *zbozi cz specifikace feedu*) |
| Musí mít produkty EAN? | vlastní volba podle dokumentace — specifikace vede EAN jako doporučený, párování ho řadí mezi hlavní údaje |
| Můžu poslat feed pro Heureku nebo Google? | vlastní volba podle dokumentace — nápověda XML feed to řeší výslovnou větou |
| Špatně napárovaná nabídka | vlastní volba podle dokumentace — nápověda Párování nabídek má k tomu celou sekci |
| Ovlivní Seznam-Extended nabídky? | navazuje na náš článek `seznam-extended-opt-out`; doklad neexistuje a odpověď to říká |

