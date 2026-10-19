# Vypořádání auditů: cachování pro AI roboty

**Článek:** `src/content/articles/cachovani-pro-ai-roboty.mdx`
**Datum:** 19. 10. 2026

## C2 — faktický audit

| Nález | Stav | Vypořádání |
|---|---|---|
| F1 — Podmínky `stale-while-revalidate` | Opraveno | Doplněny direktivy a nastavení Cloudflare, které obnovu na pozadí vypínají, i doporučení použít Edge Cache TTL pro jinou dobu platnosti na CDN. |
| F2 — Cílení konkrétního robota v tarifu Free | Opraveno | Text výslovně říká, že `Verified Bot` je pouze ano/ne, nerozlišuje provozovatele, počítá se po IP a plošné pravidlo může zasáhnout vyhledávače. Doplněn tarif Business pro `User-Agent` a zdrojovou IP. |
| F3 — HTTP 429 a doporučení Googlu | Opraveno | FAQ i tělo oddělují vlastní ochranu serveru od nouzového postupu Googlu. Doplněno několik hodin, nejvýše 1–2 dny, dopad na celý hostname, objevování i aktualizace URL. |
| F4 — Rozdíl `DYNAMIC` a `BYPASS` | Opraveno | V těle i FAQ je `DYNAMIC` popsán jako nezpůsobilost už při požadavku včetně pravidla `Bypass cache`; `BYPASS` jako následný zákaz uložení odpovědí původu nebo konfigurací při jejich zpracování. |

## C3 — jazykový audit

| Nález | Stav | Vypořádání |
|---|---|---|
| J1 — Titulek v první osobě a dvojznačné „platit za ně“ | Opraveno | Titulek nyní jmenuje AI roboty a vyšší náklady: „AI roboty nechci blokovat, ale nechci kvůli nim platit víc“. |
| J2 — SEO titulek sliboval odstranění drahého provozu | Opraveno | Změněn na „AI roboti s menší zátěží serveru: cache před blokací“. |
| J3 — Požadavek „spouští databázi“ | Opraveno | V odpovědi se nyní píše o opakovaném zpracování požadavku; checklist mluví o opakovaném zaměstnání aplikace a databáze. |
| J4 — Robot webu „dělá drahou práci“ | Opraveno | Úvod popisuje, že požadavky robota web zatěžují. |
| J5 — Překrývající se možnosti a nevysvětlené CDN | Opraveno | Úvod rozlišuje CDN s kopií, cache na původním serveru a aplikaci; při prvním výskytu vysvětluje distribuční síť i mezipaměť. |
| J6 — „Co se stane za doménou“ | Opraveno | Nahrazeno konkrétní otázkou, která vrstva požadavek vyřídí. |
| J7 — „Zásah CDN“ | Opraveno | Obě místa nyní popisují vyřízení požadavku z cache CDN. |
| J8 — Neurčité popisky tabulky | Opraveno | Tabulka používá „Bez cache a CDN“ a výslovně říká, že cache sama počet požadavků nesníží. |
| J9 — Smíchání dvou funkcí do nastavení | Opraveno | Text varuje před současným nasazením bez odděleného měření. |
| J10 — Abstraktní prostor procházení a kopie URL | Opraveno | Text radí odstranit odkazy nebo omezit procházení a mluví o obsluze nechtěných URL. |
| J11 — „Cache doplněk“ a „poznat zásah“ | Opraveno | Použit „doplněk pro cache“ a konkrétní ověření odpovědi ze stránkové cache. |
| J12 — Vyprázdnění po změně obsahu | Opraveno | Checklist formuluje požadované chování a odstranil „náhodné vypršení“. |
| J13 — Server „platí přenos“ | Opraveno | Text rozlišuje odesílání dat serverem a započítání přenosu do nákladů hostingu. |
| J14 — HTML „odchází z CDN“ a je „způsobilé“ | Opraveno | Text mluví o doručení HTML CDN a povolení ukládání pravidlem Cache Rule. |
| J15 — Cache „obsluhuje HTML“ | Opraveno | FAQ se ptá, zda HTML přišlo z cache; odpověď mluví o vyřízení požadavku. |
| J16 — Nejasný podmět u vyřazení URL | Opraveno | Tělo výslovně uvádí, že URL může vyřadit Google; FAQ je nově přepracováno podle faktického auditu. |
| J17 — Nahromaděná jmenná vazba | Opraveno | FAQ používá slovesnou formulaci o ukládání HTML na okraji sítě a omezení frekvence požadavků. |
| J18 — Nadměrné sloveso „cachovat“ | Opraveno | Běžný text používá „ukládat do cache“; podstatné jméno cache a klíčová slova zůstala. |
| J19 — Nesouřadné srovnání článku s cenou | Opraveno | Porovnává se doba platnosti článku a stránky s cenou či dostupností. |
| J20 — „Krátce stará hodnota“ | Opraveno | Nahrazeno zpožděním aktualizace. |
| J21 — „Požádejte o URL“ | Opraveno | Krok nyní říká „Načtěte ji dvakrát“. |
| J22 — Zhuštěný popis obnovy | Opraveno | Popsáno zobrazení nové verze po vyprázdnění cache nebo skončení platnosti. |
| J23 — „Levné doručení“ a „uříznout návštěvnost“ | Opraveno | Text jmenuje kapacitu a náklady a používá neutrální „omezit“. |
| J24 — `User-Agent` jako „název“ | Opraveno | Text mluví o hodnotě hlavičky a napodobitelném identifikačním řetězci. |
| J25 — Nahuštěný popis tarifů Cloudflare | Opraveno | Tarif Free a jeho podmínky jsou rozepsány v celých větách; Business je pojmenován jako tarif. |
| J26 — Metafora ventilu a počitadla | Opraveno | Doplněno průběžné počítání a možnost průchodu několika požadavků nad limit. |
| J27 — Neurčitá „cesta zpět“ | Opraveno | Text doporučuje možnost pravidlo rychle vypnout. |
| J28 — Interní poznámka o hledanosti | Opraveno | Věta byla z finálního článku odstraněna. |
| J29 — Robot si „zavádí chování“ | Opraveno | Podpora `crawl-delay` je připsána provozovatelům robotů. |
| J30 — „Zahodit cookie“ a množné číslo | Opraveno | Text popisuje ignorování rozdílů mezi soubory cookie a terminologii sjednocuje. |
| J31 — „Nejnižší účinná vrstva“ | Opraveno | Nadpis doporučuje nejjednodušší účinné opatření. |
| J32 — „Nárazové množství“ a „odstínit server“ | Opraveno | Tabulka používá nárůst počtu požadavků a konkrétně popisuje nedoručení požadavku na původní server. |
| J33 — „Nechat omezení na provoz“ | Opraveno | Text doporučuje použít omezení jen na problémovou část provozu. |
| J34 — Cache „chrání rozpočet“ | Opraveno | Závěr podmíněně říká, že cache může snížit provozní náklady. |

Všechny citované problematické formulace byly po úpravě znovu vyhledány v celém článku; žádná nezůstala.
