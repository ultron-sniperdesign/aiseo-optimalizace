# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Doověření C5b, 26. 11. 2026. Posouzen je celý `clanek-po-c5.mdx`, nikoli jen popis změn ve `vyporadani-po-c5.md`; podkladem jsou dodané soubory ve `zdroje/` a `research-po-c5.md`. Bez vyhledávání na webu a bez hodnocení stylistiky.

**Z 21 původních nálezů oprava 20 obstojí, oprava nálezu 8 neobstojí.** Níže zůstává jeden [BLOCKER] navazující na nález 8 a jeden nový [BLOCKER] v odrážce o strukturovaných datech; nový `answer` a CTA z hlediska požadované věcné kontroly obstojí.

## Doověření původních nálezů

| Nález z auditu 1 | Oprava | Důvod se zdrojem |
|---|---|---|
| **1 — Rozhraní bez testu** | **OBSTOJÍ** | `clanek-po-c5.mdx:43,119,123,133,137` připisuje popis nápovědě a přiznává neověřené rozhraní; dokumentované metriky a metody nevydává za vlastní pozorování obrazovek. Obsah odpovídá `zdroje/seznam-seznam-webmaster.txt:6–23,45–52` a `zdroje/seznam-vysledky-vyhledavani_struktura-vysledku.txt:23,28`; vrstva UI zůstává prázdná na `research-po-c5.md:14`. |
| **2 — Rozpoznávání obrázků** | **OBSTOJÍ** | `clanek-po-c5.mdx:51` už netvrdí, že Google nedokáže rozpoznat obsah obrázku, ale pouze popisuje pomoc alternativního textu a společné doporučení obrázky popsat. To dokládají `zdroje/google-starter.txt:567–580` a `zdroje/seznam-optimalizace_optimalizacni-minimum.txt:137–140`; původní kategorické tvrzení jinde nezůstalo. |
| **3 — JavaScript a „šest rozdílů“** | **OBSTOJÍ** | `clanek-po-c5.mdx:60–62,76–82,190` výslovně označuje vykreslování SeznamBotem za neobjasněné a nevydává jej za prokázanou neschopnost, zatímco účast Googlu v IndexNow omezuje na stav konkrétního seznamu. Odpovídá to `zdroje/seznam-nejcastejsi-dotazy.txt:53`, `zdroje/seznam-seznambot_presmerovani-url.txt:15–16,29`, `zdroje/google-js.txt:350–369` a `zdroje/indexnow-searchengines.json.txt:3–11`. |
| **4 — Request-rate** | **OBSTOJÍ** | `clanek-po-c5.mdx:73` zachovává minimum nastavení, převod nižší hodnoty, maximum závislé na výkonu a zatížení i výchozí chování mimo časové okno a neslibuje dosaženou rychlost. Zkrácená připomínka v Checklistu na `clanek-po-c5.mdx:178` tyto podmínky nepopírá; dokladem je `zdroje/seznam-seznambot_robots-txt.txt:77–95`. |
| **5 — Kanonický odkaz** | **OBSTOJÍ** | Tabulka na `clanek-po-c5.mdx:74` i Checklist na `clanek-po-c5.mdx:180` zachovávají obsahovou podobnost, obsah cíle, zákaz směrování na přesměrování či URL vyžadující cookie a ignorování odkazu na sebe. Interní obdoba 301 i doporučení Googlu odpovídají `zdroje/seznam-seznambot_kanonicke-url.txt:19–26`, `zdroje/seznam-seznambot_presmerovani-url.txt:16,30` a `zdroje/google-canonical.txt:400–401`. |
| **6 — Sitemapy** | **OBSTOJÍ** | FAQ 1 na `clanek-po-c5.mdx:25` a odrážka na `clanek-po-c5.mdx:54` uvádějí současně oba stropy a velikost po dekompresi; požadavek jednoho webserveru a oznámení absolutní adresou jsou připsány Seznamu. Podmínky odpovídají `zdroje/seznam-seznambot_sitemap-xml.txt:9–16` a `zdroje/google-sitemap.txt:396–401`. |
| **7 — Googlebot 2 MB** | **OBSTOJÍ** | `clanek-po-c5.mdx:75` zachovává 2 MB pro podporovaný soubor a 64 MB pro PDF, nekomprimovaná data, posouzení pouze stažené části, samostatné prostředky i odlišné limity jiných robotů. To odpovídá hlavnímu textu `zdroje/google-googlebot.txt:366–375`. |
| **8 — Soubor a předání klíče IndexNow** | **NEOBSTOJÍ** | `clanek-po-c5.mdx:152–154` správně popisuje soubor, obsah, kódování i `keyLocation` a rozsah složky, ale v celém článku chybí pokyn poslat také samotný parametr `key` odpovídající souboru na webu. Jde o podmínku požadavku doloženou v `zdroje/seznam-seznambot_protokol-indexnow.txt:7,23–27,37–39,92–95`, která je stále uvedena v `research-po-c5.md:40`; přesná oprava je pod tabulkou. |
| **9 — Předání IndexNow a limity** | **OBSTOJÍ** | Krok 5 na `clanek-po-c5.mdx:145`, postup na `clanek-po-c5.mdx:154–155` a FAQ na `clanek-po-c5.mdx:27,31` odlišují oznámení od indexace, limit jedné dávky od operativních omezení a podmiňují předání dalším účastníkům ověřením klíče; týden platí jen pro URL vybrané k indexaci. Dokládá to `zdroje/seznam-seznambot_protokol-indexnow.txt:7,143–168`; chybějící parametr klíče je samostatně posouzen u nálezu 8. |
| **10 — Ověření Webmasteru** | **OBSTOJÍ** | `clanek-po-c5.mdx:133` zachovává obě metody, přístup robota, poslední platný kód, nepodporované vložení skriptem, zachování souboru i překážku přesměrování při ověření HTTP. Odpovídá `zdroje/seznam-seznam-webmaster.txt:15–23,51–52` a je výslovně podáno jako obsah nápovědy. |
| **11 — nosnippet a data-nosnippet** | **OBSTOJÍ** | FAQ na `clanek-po-c5.mdx:33` obsahuje celé pravidlo `Disallow: /` pro zákaz celého webu, odlišuje meta značku konkrétní stránky a spolu s `clanek-po-c5.mdx:173` uvádí všechny vytčené účinky `nosnippet`. Označení prvku obsahujícího data i pokračující interní použití na `clanek-po-c5.mdx:90` odpovídají `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:25–39,138` a zákaz AI odpovídá `zdroje/seznam-seznambot_zakaz-tvorby-ai-odpovedi-z-vaseho-webu.txt:6–24`. |
| **12 — Meta refresh a 302** | **OBSTOJÍ** | `clanek-po-c5.mdx:91,182` zachovává hranici nejvýš sedmi sekund, odlišné zacházení s delším meta refresh, možnost ponechat původní URL i několikadenní ověřování návratu stavu 200 s výhradou možné změny chování. Podkladem je `zdroje/seznam-seznambot_presmerovani-url.txt:26–32`; původní bezvýjimečný převod každého meta refresh na 302 už v Checklistu není. |
| **13 — Převaha vyhledávání mezi zdroji Seznam AI** | **OBSTOJÍ** | Nadpis, text i závěr na `clanek-po-c5.mdx:159,163,169,190` označují vyhledávání za jeden ze zdrojů, nepřidávají neznámé podíly a vztahují přínos SEO k cestě přes výsledky vyhledávání bez záruky citace. To odpovídá `zdroje/seznam-technicke-podminky.txt:27–30`; `answer` na `clanek-po-c5.mdx:5` tvrzení o AI nepřidává. |
| **14 — Reklamní zdroje a řazení v Seznam AI** | **OBSTOJÍ** | `clanek-po-c5.mdx:165` uvádí pravidla řazení příslušného typu výsledků, nezaručené zachování pořadí, relevanci reklamních informací i nemožnost přímo koupit výstup. Podmínky jsou v souladu s `zdroje/seznam-technicke-podminky.txt:28–29`. |
| **15 — Osnova a rychlé odkazy** | **OBSTOJÍ** | `clanek-po-c5.mdx:119` připisuje popis nápovědě, negarantuje osnovu a zachovává výběr podle dotazu i podmínku stejné domény druhé úrovně a přínosu uživateli pro rychlé odkazy. Odpovídá `zdroje/seznam-vysledky-vyhledavani_struktura-vysledku.txt:23,28`. |
| **16 — meta name="seznambot"** | **OBSTOJÍ** | `clanek-po-c5.mdx:89` otevřeně popisuje nejednotnost obecné a specializované nápovědy a nevymýšlí pravidlo podle velikosti písmen; pro zákaz indexace doporučuje `name="robots"`. Odpovídá `zdroje/seznam-seznambot_meta-tag-robots.txt:28–34` a `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:11–25,139–143`. |
| **17 — Studie a 7 %** | **OBSTOJÍ** | `clanek-po-c5.mdx:115` připisuje údaj studii uvedené Seznamem, zachovává průměrnou proklikovost a říká, že datum a metodika nejsou uvedeny a číslo není předpovědí pro konkrétní web. To je síla tvrzení, kterou unese `zdroje/seznam-seznambot_zakazani-tvorby-snippetu.txt:149–150`; text už z čísla nedělá obecný účinek pro rok 2026. |
| **18 — Nedostupnost** | **OBSTOJÍ** | `clanek-po-c5.mdx:92` mluví o konkrétní stránce, třech po sobě jdoucích zjištěních a správně odlišuje ověřování 404 od označení k odstranění po 410, bez příslibu okamžitého zmizení. Dokládají to `zdroje/seznam-nejcastejsi-dotazy.txt:48–49` a `zdroje/seznam-seznambot_odstranovani-stranek.txt:17–20`. |
| **19 — Přidání hlavní stránky** | **OBSTOJÍ** | `clanek-po-c5.mdx:27` zachovává „by měl“, podmínku alespoň jednoho odkazu na každou stránku a odlišuje objevení od indexace. Znění odpovídá `zdroje/seznam-nejcastejsi-dotazy.txt:5–8,44–45`; ani FAQ 4 na `clanek-po-c5.mdx:31` už neslibuje automatické objevení. |
| **20 — „Většina práce hotová“** | **OBSTOJÍ** | `clanek-po-c5.mdx:5,25,41,45–47,190` uvádí společná konkrétní doporučení a neslibuje nedoložený podíl hotové práce či úspor. Společný základ dokládají `zdroje/google-starter.txt:418–430,463–480,502–580`, `zdroje/seznam-optimalizace_optimalizacni-minimum.txt:19–49,80–118,137–150` a pro strukturovaná data `zdroje/google-structured-data.txt:345–353,474–479` spolu s `zdroje/seznam-strukturovana-data.txt:5–10`; samostatný nový problém odrážky na řádku 56 je níže. |
| **21 — Rozpor 1 MB × 4 MiB** | **OBSTOJÍ** | `clanek-po-c5.mdx:75,81–82` uvádí přesné bajty, data obou stránek a nerozhodnutý rozpor; `clanek-po-c5.mdx:181` lze v tomto kontextu číst jako kontrolní doporučení nižší hranice, nikoli jako tvrzení, že vyšší limit byl vyvrácen. Odpovídá `zdroje/seznam-nejcastejsi-dotazy.txt:1,50–51` a `zdroje/seznam-optimalizace_optimalizacni-minimum.txt:1,111`. |

## Zbývající a nové [BLOCKER]

### B1 — [BLOCKER] V postupu IndexNow chybí předání klíče v požadavku (nedořešený nález 8)

**Citace:** `clanek-po-c5.mdx:152`: „Do veřejně dostupného souboru v UTF-8 vložte pouze klíč […]“; `clanek-po-c5.mdx:154`: „Na `search.seznam.cz/indexnow` je posílejte jednotlivě metodou GET, nebo nejvýš 10 000 v jednom požadavku POST.“

**Důvod:** Vytvoření souboru nestačí: klíč musí přijít i v požadavku a odpovídat souboru. Zkrácený krok 5 pouze odkazuje na tento postup a ani FAQ chybějící podmínku nedoplňuje; v `research-po-c5.md:40` přitom zůstává zachycena.

**Zdroj:** `zdroje/seznam-seznambot_protokol-indexnow.txt:7,10,23–27,37–39,69–82,92–95`; požadovaný `key` je uveden u GET i POST a nesoulad klíče je důvodem odmítnutí. Stejnou vazbu uvádí `zdroje/indexnow-faq.txt:431`.

**Přesné doplnění za krok 1 na řádku 152:**

> Klíč přiložte také ke každému požadavku jako parametr `key`: u GET v adrese požadavku, u POST v těle JSON. Jeho hodnota musí odpovídat klíči v souboru na webu.

Ponechat stávající podmínku `keyLocation` a omezení na složku i podadresáře v následujícím kroku.

### B2 — [BLOCKER] Společné doporučení strukturovaných dat zamlčuje podmínky rozšířeného výsledku (nový nález)

**Citace:** `clanek-po-c5.mdx:56`: „**Strukturovaná data** podle slovníku schema.org, ze kterých vznikají rozšířené výsledky.“

**Důvod:** Věta spojuje použití slovníku schema.org se vznikem rozšířených výsledků bez podmínky podporovaného typu a správné implementace. Nově dodaná dokumentace Googlu popisuje možnost rozšířeného výsledku, vyžaduje povinné vlastnosti a dodržení pravidel konkrétního typu; samotný soulad se schema.org tyto podmínky nenahrazuje. Obecné společné doporučení v `answer` a úvodu tento problém nemá, protože vznik rozšířeného výsledku neslibuje; Checklist na řádku 183 používá odpovídající „mohl“ pro Seznam.

**Zdroj:** `zdroje/google-structured-data.txt:351–353,474–479,487–502,525–535`; na straně Seznamu použití a výčet podporovaných rozšíření dokládá `zdroje/seznam-strukturovana-data.txt:38–60`.

**Přesné nové znění celé odrážky na řádku 56:**

> **Strukturovaná data** podle slovníku schema.org pomáhají vyhledávačům pochopit obsah. U podporovaných typů mohou umožnit rozšířený výsledek; pro Google musí obsahovat všechny povinné vlastnosti a splňovat pravidla příslušného typu. Samotný zápis podle schema.org zobrazení rozšířeného výsledku nezaručuje.

## Doplňkové kontroly

| Kontrola | Výsledek | Důvod se zdrojem |
|---|---|---|
| **Nový answer, `clanek-po-c5.mdx:5`** | **OBSTOJÍ** | Definice SEO jako úpravy pro dohledatelnost není zárukou výsledku a společná doporučení včetně strukturovaných dat mají podklad v `zdroje/google-starter.txt:345–360,418–430,502–580`, `zdroje/google-structured-data.txt:345–353,474–479` a `zdroje/seznam-strukturovana-data.txt:5–10`. Ignorování X-Robots-Tag a kanonického odkazu na sebe, podpora Request-rate a možnost hlásit URL odpovídají `zdroje/seznam-seznambot_meta-tag-robots.txt:31–32`, `zdroje/seznam-seznambot_kanonicke-url.txt:19`, `zdroje/seznam-seznambot_robots-txt.txt:77–95` a `zdroje/seznam-seznambot_protokol-indexnow.txt:7–8`; answer neslibuje rychlost ani indexaci. |
| **CTA, `clanek-po-c5.mdx:192` — pouze blocker** | **OBSTOJÍ** | Název AI SEO Wireframe Pack, podklady pro sedm typů stránek, anotace, šablony, příklady strukturovaných dat a návod podle CMS odpovídají `zdroje/pack.ts:93–98,344–348`; cenu 1 490 Kč včetně DPH dokládá `zdroje/pack.ts:205`. CTA neslibuje v ceně implementaci ani zaručené zobrazení rozšířených výsledků. |

**Aktuálnost a podmínky:** Článek zachovává stav k 26. 11. 2026 na `clanek-po-c5.mdx:43,194`; nový Google doklad má podle `zdroje/google-structured-data.txt:1` aktualizaci 10. 12. 2025, tedy nikoli datum po rozhodném dni. Tabulka podmínek na `research-po-c5.md:33–55` je přítomná a doplněná; shoda předávaného klíče je v ní uvedena, ale nedostala se do konečného postupu, zatímco podmínky způsobilosti pro rozšířené výsledky Googlu v ní samostatně zachyceny nejsou. Tvrzení vypořádání, že všechny původní položky jsou uzavřené (`vyporadani-po-c5.md:47`), proto pro finální soubor neplatí u nálezu 8.
