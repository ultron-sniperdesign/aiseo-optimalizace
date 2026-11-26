# Vypořádání auditů — seo-pro-seznam-cz

## Audit 1 (Codex, osa fakta, 26. 11. 2026) — OPRAVIT PŘED PUBLIKACÍ

16 blockerů, 4 varování, 1 tip. Každý nález jsem ověřil proti `zdroje/` (nápověda Seznamu, Google Search Central,
indexnow.org) a všechny přijímám. Kde auditor navrhl znění, převzal jsem ho doslovně nebo jen s úpravou slovosledu
a podmětu. Místa níže jsem po opravě prošel grepem v `clanek.mdx` (poučení z runu 9).

| # | Závažnost | Nález | Verdikt | Co se změnilo (kde v článku) |
|---|---|---|---|---|
| 1 | BLOCKER | Popis grafů a postupu v rozhraní bez UI testu | přijato | Stepper kroky 2 a 3 připsané nápovědě zněním auditora („Nápověda pro přidání webu uvádí…“, „Nápověda Seznam Webmasteru popisuje metriky…“); věta nad Stepperem „rozhraní nástroje jsem neověřoval“; osnova a rychlé odkazy připsané nápovědě (nález 15); úvod: „výsledky vyhledávání Seznamu jsem neprocházel; co popisuji, je obsah nápovědy“ |
| 2 | BLOCKER | „robot z obrázku sám nepozná“ nedoloženo pro Google | přijato | odrážka v sekci „Co platí stejně“ zněním auditora („pomáhají vyhledávačům pochopit obsah… doporučují výstižně popsat“) |
| 3 | BLOCKER | Nedoložené vykreslování JS mezi „prokázanými rozdíly“ | přijato | H2 „rozdíly podle dokumentace“ místo „šest rozdílů“; úvod tabulky zněním auditora; řádek „JavaScript (u Seznamu nedoloženo)“; IndexNow vpravo „V seznamu účastníků na indexnow.org (searchengines.json) není“; závěr zněním auditora (doložené rozdíly zvlášť, velikost a JS jako neobjasněné) |
| 4 | BLOCKER | Request-rate bez maxima a návratu k výchozímu chování | přijato doslovně | levá buňka tabulky zněním auditora |
| 5 | BLOCKER | Kanonizace bez podmínek cíle | přijato doslovně | levá buňka tabulky zněním auditora (label „Kanonický odkaz“) |
| 6 | BLOCKER | Sitemapy: nekomprimovaná velikost, oba stropy současně | přijato | odrážka „Sitemapa“ zněním auditora (+ jeden webserver, absolutní adresa, priority); FAQ 1 „nejvýš 50 MB po dekompresi a nejvýš 50 000 adres v jednom souboru“ |
| 7 | BLOCKER | Googlebot 2 MB bez stavu po dekompresi | přijato | pravá buňka „Velikost HTML“ zněním auditora (nekomprimovaná data, jen stažená část, prostředky zvlášť, jiní roboti jiné limity) |
| 8 | BLOCKER | IndexNow: název a obsah souboru s klíčem, keyLocation | přijato | Stepper krok 5 zněním auditora (`<klíč>.txt`, jen klíč, UTF-8 bez BOM/HTML, veřejně dostupný; složka → keyLocation a jen adresy z ní) |
| 9 | BLOCKER | Předání dalším vyhledávačům podmíněné; dávka ≠ limit tempa | přijato | Stepper krok 5 zněním auditora (10 000 v jednom POST, operativní omezení a 429, 200 = předání, ne indexace, informování po ověření klíče) |
| 10 | BLOCKER | Ověření Webmasteru: poslední kód, přístup robota, http → https | přijato | Stepper krok 2 zněním auditora |
| 11 | BLOCKER | nosnippet zamlčuje část účinků | přijato | FAQ 5 a sekce Seznam AI zněním auditora (celý web přes robots.txt × stránka přes meta; zakáže úryvek, náhled, strukturovaná data i vybraný úryvek; zůstane titulek a odkaz); `data-nosnippet` jako samostatná odrážka s interním používáním dat |
| 12 | BLOCKER | Checklist: každý meta refresh jako 302 | přijato | položka „Přesměrování“ zněním auditora (do 7 s = 302, může ponechat původní URL; delší = běžná indexace); odrážka o 302 doplněna o volbu URL a upozornění na možnou změnu chování |
| 13 | BLOCKER | Převaha výsledků vyhledávání v Seznam AI nedoložena | přijato | druhý odstavec sekce Seznam AI zněním auditora („jedním ze zdrojů… podíl neuvádějí… relevantní pro cestu… citaci nezaručuje“); závěr „pro Seznam AI je SEO relevantní tam, kde AI využívá výsledky vyhledávání“ |
| 14 | BLOCKER | Reklamní zdroje bez podmínky relevance, chybí pravidlo řazení | přijato doslovně | konec prvního odstavce sekce Seznam AI zněním auditora |
| 15 | BLOCKER | Rychlé odkazy a osnova bez podmínek | přijato doslovně | konec sekce o řazení zněním auditora |
| 16 | WARNING | Rozpor meta name="seznambot" nevysvětlen | přijato | odrážka „Meta značky s názvem seznambot“ zněním auditora (nejednotná nápověda, žádné pravidlo podle velikosti písmen, pro noindex `name="robots"`) |
| 17 | WARNING | 7 % jako obecný účinek v roce 2026 | přijato | „odkazuje na vlastní studii… průměrná proklikovost přibližně o 7 % vyšší… datum ani metodiku stránka neuvádí… není předpovědí pro konkrétní web“ |
| 18 | WARNING | Nedostupnost popsána pro celý web | přijato | odrážka „Nedostupnost a zrušené stránky“ zněním auditora (konkrétní stránka, 404 ověřuje, 410 označí k odstranění) |
| 19 | BLOCKER | Přidání homepage jako záruka objevení stránek | přijato doslovně | FAQ 2 zněním auditora („by měl… pokud na každou vede alespoň jeden odkaz… objevení nezaručuje indexaci“) |
| 20 | WARNING | „Většina práce hotová“ nedoloženo | přijato | úvod zněním auditora („sdílí řadu základních doporučení… zvlášť prověřit technická pravidla SeznamBota“); `answer` „sdílí s Googlem řadu základních doporučení“; FAQ 1 „Řada základních doporučení je společná“ |
| 21 | TIP | Rozpor 1 MB × 4 MiB s jednotkami a daty | přijato | levá buňka „Velikost HTML“ s daty stránek a „1 048 576 bajtů“; Insight „nejde rozhodnout… opatrnou volbou je držet HTML pod nižší hranicí“ |

**Doplněno nad rámec nálezů:** strukturovaná data jsou v `answer`, úvodu a v odrážce „Co platí stejně“ jako společné
doporučení — Starter Guide je v těle nezmiňuje, proto přidán zdroj `google-structured-data.txt` (úvod Googlu ke
strukturovaným datům, aktualizace 10. 12. 2025: slovník schema.org, JSON-LD). Pravá buňka „JavaScript“ doplněna o to,
že Google k vykreslení řadí stránky se stavem 200 bez zákazu indexace (`google-js.txt`, ř. 362), aby nezněla jako záruka.
Research doplněn o pět dokumentů Googlu v Z16 a o řádky Sitemapy a Ověření v Seznam Webmasteru.

**Z17 grep po opravách** (celý soubor, Pythonem): „z obrázku sám nepozná“, „šest rozdílů“, „Nejméně 1 dokument“, „ale jen
u obsahově podobných“, „50 MB nebo 50 000“, „soubor s klíčem“, „předá ostatním“, „ověřují zvlášť“, „vypne úryvek“,
„Grafy ukazují“, „Přihlaste se“, „zvedá proklikovost“, „Nedostupný web“, „ostatní robot najde“, „většinu práce“,
„prověří kontrolní formulář“, „čerpá zejména“, „výchozím bodem“ — 0 výskytů. `jazyk-check` 0, `kontrola-komponent` 0,
`answer` 49 slov.

## Audit 2 (Codex, osa jazyk a struktura + kontrola vypořádání, 26. 11. 2026) — OPRAVIT PŘED PUBLIKACÍ

0 blockerů, 7 varování, 2 tipy. Kontrola vypořádání: všech 21 položek kola 1 zapracováno, žádná nezůstala.

| # | Závažnost | Nález | Verdikt | Co se změnilo |
|---|---|---|---|---|
| 1 | WARNING | `answer` nezačíná definicí, úvod schovává rozdíly | přijato (úvod s úpravou) | `answer` doslovně zněním auditora (50 slov); úvod pojmenuje rozdíly (X-Robots-Tag, kanonický odkaz, Request-rate) a praktický důsledek (noindex v HTML, hlášení změn) — bez první věty s definicí, aby lead podle šablony `answer` prohluboval a neopakoval |
| 2 | WARNING | FAQ 1 bez předmětu | přijato doslovně | FAQ 1 zněním auditora |
| 3 | WARNING | Tři H2 málo konkrétní | přijato doslovně | „SEO pro Seznam a Google — společná doporučení pro obsah a přístup robotů“, „Seznam AI — vyhledávání je jedním ze zdrojů, SEO citaci nezaručí“, „SEO pro Seznam.cz — prověřte technická pravidla a hlaste změny stránek“ |
| 4 | WARNING | Dlouhé buňky CompareTable | přijato doslovně | Request-rate, kanonický odkaz a obě buňky velikosti HTML zněním auditora (podmínky zachované) |
| 5 | WARNING | Krok 5 Stepperu příliš dlouhý | přijato doslovně | `desc` kroku 5 zkrácený; pod Stepperem H3 „Jak nastavit a používat IndexNow“ se čtyřmi kroky zněním auditora |
| 6 | WARNING | Dlouhé odstavce v řazení a Seznam AI | přijato | H3 „Titulek a úryvky výsledku“, „Osnova a rychlé odkazy“, „Zdroje odpovědí Seznam AI“, „Kdy může pomoci SEO pro Seznam“, „Jak zakázat použití obsahu v Seznam AI“; text beze změny, jen rozdělený |
| 7 | WARNING | Technické pojmy bez vysvětlení | přijato doslovně | věta před tabulkou (SeznamBot, Request-rate, kanonický odkaz); „Část vyhledávače, která zpracovává obsah pro index“ místo „Indexer“; API ve FAQ 2 a v kroku 3 vysvětlené |
| 8 | TIP | CTA s dlouhým výčtem | přijato s úpravou | znění auditora + vazba na článek („včetně strukturovaných dat pro rozšířené úryvky“) a „Obsahuje podklady pro sedm typů stránek“ (Pack nejsou hotové stránky); obsah podle `pack.ts` |
| 9 | TIP | Opakované „podle nápovědy“ | přijato doslovně | dvě vsuvky v seznamu pravidel z nápovědy vypuštěny |

Po opravách: `jazyk-check` 0, `kontrola-komponent` 0, `answer` 50 slov, všech 7 H2 s `hl` i `strong`, 5 H3 prostý text.

## C5b (auditor 1, navázané vlákno, 26. 11. 2026)

20 z 21 oprav kola 1 **OBSTOJÍ**; nový `answer` i CTA obstály. **B1 (nedořešený nález 8):** v postupu IndexNow chyběl
parametr `key` v požadavku → doplněno doslova zněním auditora za krok 1 („Klíč přiložte také ke každému požadavku jako
parametr `key`…“). **B2 (nový):** odrážka „Strukturovaná data … ze kterých vznikají rozšířené výsledky“ slibovala výsledek
bez podmínek → nahrazena doslova zněním auditora (podporované typy, povinné vlastnosti u Googlu, zápis nezaručuje
zobrazení). Tabulka podmínek doplněna o řádek Strukturovaná data a o `key` u IndexNow. Cílené ověření: `c5b-2-result.md`.
