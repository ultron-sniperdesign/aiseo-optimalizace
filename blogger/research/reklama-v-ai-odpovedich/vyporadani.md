# Vypořádání auditů — reklama-v-ai-odpovedich (Z18)

## Kolo 1 — fakta a aktuálnost (Codex, vlákno auditora 01a214e9-d331-72a1-bbbd-54f1d19a88b1, 25.–26. 11. 2026)

Verdikt auditora: OPRAVIT PŘED PUBLIKACÍ — 12× BLOCKER, 2× WARNING. Plný výstup: `audit1-result.md`.
Každá oprava dohledána v celém souboru včetně `answer`, `faq` a vlastností komponent (Z17; kontrolní grep na „jen pro tarify“, „zajistí“, „dodatečně“, „dvou místech“, „kanál funguje“, „anglicky mluvící“, „automaticky účastní“, „doporučuje povolit“, „Vidí ji“, „nespravíte“, „ve dvou službách“ → 0 výskytů).

| # | Nález | Rozhodnutí | Co se změnilo |
|---|---|---|---|
| 1 | BLOCKER — přenos UTM zaměněn za ověřené rozlišení v GA4 | ✅ zapracováno | Odstavec o UTM: GA4 přednost ručního média před `ai-assistant` nedokumentuje, zařazení prokliku bez UTM neznámé; regex placených kanálů jen jako shoda, výsledek ukážou první relace. Krok Stepperu „Ověřte, jak GA4 prokliky zařadil“ (médium ai-assistant při zachovaných UTM „nemusí jít o chybu“). FAQ 4 přepsaná. |
| 2 | BLOCKER — čísla GA4 nejsou důkaz neplaceného původu | ✅ zapracováno | Věta „Pro neplacené prokliky tedy kanál funguje“ nahrazena: rozpoznávání zdroje funguje, kanál třídí podle odkazující stránky, absence placeného média nedokazuje, že mezi relacemi není neoznačená reklama. CompareTable „Kde to uvidíte“: „Kanál sám neplacený původ nedokazuje.“ Rozpočtová sekce: „neplacené návštěvy z AI“ místo „návštěvy z kanálu AI Assistant“. |
| 3 | BLOCKER — neúplné podmínky zobrazování reklam v ChatGPT | ✅ zapracováno | H3 ChatGPT: postupné zavádění způsobilým uživatelům Free a Go ve vybraných regionech, nepřihlášení, účty **identifikované** jako pod 18 let, dočasné chaty, citlivá témata (osobní a duševní zdraví, politika). Tabulka, FAQ 1 a `answer` („může zobrazit“) upraveny. |
| 4 | BLOCKER — Ads-Free jen pro Free, Go je placený tarif s reklamou | ✅ zapracováno | „Uživatel tarifu Free může přejít na variantu bez reklam…; kdo platí Go, musí se kvůli ní vrátit na Free, nebo přejít na Plus či Pro.“ |
| 5 | BLOCKER — dostupný Ads Manager ≠ povolení každé nabídky | ✅ zapracováno | Doplněno: reklama, obrázky i cílová stránka musí splnit zásady, regulované obory přísnější kritéria, politická reklama zatím zakázaná. FAQ 1 doplněna o sídlo firmy a zásady. Konkrétní oborové zákazy mimo USA ze sekundárního zdroje nepřebírám. |
| 6 | BLOCKER — automatická způsobilost kampaní Google bez podmínek přiřazování | ✅ zapracováno | „automaticky způsobilé a o zobrazení rozhoduje relevance a aukce; přesná a frázová shoda se uplatní jen u dotazů s jasným nákupním záměrem“. Výčet AI Max a volné shody vynechán — článek není návod na PPC. |
| 7 | BLOCKER — dostupnost Google: výčet 12 zemí, výjimky, research chybně | ✅ zapracováno | Článek: „jen v angličtině a ve 12 vyjmenovaných zemích, mezi nimi USA, Kanada, Austrálie a Indie; žádná není v EU a u dvou platí jen část formátů; seznam nemusí být úplný“; standardní reklamy nad a pod Přehledem od AI „ve všech zemích a jazycích, kde Přehled od AI funguje“. Tabulka, FAQ 3 a odrážka v sekci o testech. `research.md`: řádek tezí opraven (přehlédnutá FAQ nápovědy). |
| 8 | BLOCKER — OAI-SearchBot: přísnější znění návodu k reklamám, obrázky feedu | ✅ zapracováno | DoDont: zpřístupnit cílové stránky oběma robotům (návod k tvorbě reklam chce neblokovat oba), firewall, CDN, přesměrování; u produktového feedu OAI-SearchBot i na adresy obrázků. Odstavec za DoDont: přihlášení, CAPTCHA, kontrola prohlížeče; přístup robotů schválení nezaručuje. |
| 9 | BLOCKER — Seznam Nákupy ve statistikách jinde | ✅ zapracováno | Měřicí odstavec a FAQ 6: nabídky Seznam Nákupů v kategorii „Produkt – doporučené nabídky“; oddělení Seznam AI v ní nápověda neuvádí. H3 Seznam doplněna o průběžné testování podoby ploch. |
| 10 | BLOCKER — podoba rozhraní bez ověření UI | ✅ zapracováno | Metodický odstavec: „umístění a podobu reklam proto popisuji podle dokumentace“; sloupec tabulky „Umístění podle dokumentace“; `answer` „podle dokumentace provozovatelů“; prvky reklamy „podle návodu pro inzerenty“; CompareTable „Podle dokumentace pod odpovědí…“; patička „podobu reklam v rozhraní neověřoval“. Označení „Sponzorováno“ a „Sponzorované výsledky“ zůstávají s výslovným odkazem na nápovědu. |
| 11 | BLOCKER — „Reklama vám zajistí místo“ | ✅ zapracováno | „Reklama může získat placené místo u odpovědi…“ (tučná věta i Insight). |
| 12 | BLOCKER — organická způsobilost bez úryvku Googlu a zákazů Seznamu | ✅ zapracováno | CompareTable „Jak se tam dostanete“: přístup robota, indexace, u Googlu způsobilost k úryvku, bez záruky. Odstavec: Seznam AI mimo jiné z indexu Vyhledávání, web může tvorbu AI odpovědí zakázat (odkaz na článek o Seznamu). DoDont: přístup OAI-SearchBot, indexace a úryvek v Googlu, zákaz AI odpovědí na Seznamu. Primární nápovědu Seznamu k zákazu jsem v tomto běhu nečetl — opírám se o refresh z 23. 11. 2026, v článku bez detailu tokenů. |
| 13 | WARNING — „dvě místa“ jako tvrzení o celém trhu | ✅ zapracováno | Úvod: „Ze tří služeb, které tu srovnávám…“; shrnutí „Ze tří srovnávaných služeb…“; `answer` „podle dokumentace provozovatelů“ bez „na dvou místech“. |
| 14 | WARNING — „dodatečně to v datech nespravíte“, vlastní skupina kanálů | ✅ zapracováno | Shrnutí: „bez rozlišujícího údaje nemusí jít reklamní a neplacené návštěvy zpětně spolehlivě oddělit“. Krok Stepperu: vlastní skupina seskupí relace s rozpoznatelným zdrojem, reklamní původ neoznačené návštěvy neodhalí. |
| — | Tabulka podmínek (závěr auditu) | ✅ zapracováno | `research.md`: tabulka podmínek přepsaná — publikum ChatGPT, Ads-Free, schválení reklamy, roboti, přednost UTM, přiřazování Googlu, nové řádky organická způsobilost, vysvětlení od AI, výkaznictví OpenAI. |

**Zásadní nálezy pro C5b** (doověření auditorem kola 1): 1, 2, 3, 5, 7, 8 — neplatná nebo neúplná tvrzení o platformách a o měření.

Datum publikace posunuto na 26. 11. 2026 (`published`, `updated`); zdroje zůstávají ve stavu k 25. 11. 2026.

## Kolo 2 — jazyk, struktura, SEO, CTA a kontrola vypořádání (Codex, vlákno 01a214f5-65f9-75e1-bdf0-0ba7d598deb3, 26. 11. 2026)

Verdikt auditora: OPRAVIT PŘED PUBLIKACÍ — 4× BLOCKER (všechny jsou zbytky nálezů kola 1: 3, 4, 7, 10), 6× WARNING, 2× TIP.
Kontrola vypořádání: 10 ze 14 nálezů kola 1 vypořádáno, 4 částečně. Plný výstup: `audit2-result.md`.
Z17: kontrolní grep na „Podle OpenAI ne“, „tvarovat“, „zmíněn“, „část formátů“, „nic nenastavuje“, „hlídejte“, „Zatím ne“, „jen anglicky“, „vydává“, „koupit nejde“, „12 vyjmenovaných“ → 0 výskytů.

| # | Nález | Rozhodnutí | Co se změnilo |
|---|---|---|---|
| 1 | BLOCKER — publikum ChatGPT v FAQ 1 a `answer` neúplné (zbytek nálezu 3) | ✅ zapracováno | FAQ 1: region a způsobilost, nepřihlášení, bez reklam v tarifech Plus–Edu, ve variantě Free bez reklam, v dočasných chatech, u citlivých témat a u účtů identifikovaných jako pod 18 let. `answer` přepsaná na definici (53 slov) bez výčtu tarifů: „Podmínky zobrazení se liší podle služby.“ H3: „ChatGPT: pod odpovědí, pro Free, Go i nepřihlášené“. |
| 2 | BLOCKER — Ads-Free bez regionu a způsobilosti (zbytek nálezu 4) | ✅ zapracováno | „Způsobilý uživatel tarifu Free může v regionech, kde OpenAI reklamy testuje, zvolit variantu bez reklam…“ |
| 3 | BLOCKER — Google: funkce × formát, neúplnost seznamu (zbytek nálezu 7) | ✅ zapracováno | H3 Google: Indonésie jen Přehled od AI, Pákistán jen textové reklamy, seznam nemusí být úplný. Tabulka: „uvnitř AI funkcí nápověda uvádí jen angličtinu a vybrané země mimo EU“. FAQ 3 přepsaná. Odrážka: „Reklama uvnitř AI funkcí Googlu (v angličtině na vybraných trzích mimo EU)“. |
| 4 | BLOCKER — shrnutí bez atribuce dokumentaci (zbytek nálezu 10) | ✅ zapracováno | „Podle dokumentace tří srovnávaných služeb nabízejí k listopadu 2026 reklamu u AI odpovědi pro Česko ChatGPT a Seznam AI; Google pro češtinu popisuje standardní reklamy…“ |
| 5 | WARNING — FAQ 2, 5, 6 začínají holým záporem | ✅ zapracováno | Odpovědi pojmenují předmět hned v první větě. Vazba „tvarovat, řadit ani měnit“ → „ovlivnit, seřadit ani upravit“ v FAQ i v těle. |
| 6 | WARNING — H2 slibují jiný obsah | ✅ zapracováno (třetí zkráceně) | „Měření návštěv z AI — UTM označí kampaň, zařazení v GA4 ověřte“; „Reklamní formáty a ceny v AI — zahraniční testy a české zkušenosti“; „Rozpočet na reklamu a AI viditelnost — vyhodnocujte je zvlášť“ (návrh auditora zkrácen, pointa stejná). |
| 7 | WARNING — opakované atribuce, dlouhé odstavce | ✅ zapracováno | Odstavec o Seznam AI rozdělen na dva, atribuce jednou na začátku; měřicí odstavec rozdělen na Google / Seznam / odkaz. „Inzerent nic nenastavuje“ → „Pro tuhle plochu se nic zvlášť nenastavuje“. |
| 8 | WARNING — úvod s vloženou větou | ✅ zapracováno jinak | Návrh auditora začínal „Článek srovnává…“ — metavěta by oslabila prvních 100 slov pro citaci. Úvod přepsán bez vsuvky: „Ze tří velkých služeb s AI odpověďmi nabízejí pro Česko placené místo přímo pod odpovědí podle své dokumentace k listopadu 2026 ChatGPT a Seznam AI…“; „těžší, než se zdá“ vypuštěno. |
| 9 | WARNING — 4. krok Stepperu přikazuje nemožné | ✅ zapracováno | „Zkontrolujte i návštěvy mimo kanál AI Assistant“ s výhradou k vlastní skupině kanálů. |
| 10 | WARNING — „hlídejte nastavení zákazu“ dvojznačné | ✅ zapracováno | „…a že jste na Seznamu nezakázali použití obsahu k tvorbě AI odpovědí“. |
| 11 | TIP — „zmíněný článek“ | ✅ zapracováno | Přímý odkaz na článek o Seznamu a AI vyhledávání. |
| 12 | TIP — CTA: lhůta dokumentu × termín schůzky | ✅ zapracováno | „…dostanete do pěti pracovních dní od úhrady a projdeme ho spolu na online schůzce na 30–60 minut v termínu podle vašich možností“ (audit.ts: krok 03 a 04, „Online, 30–60 minut“, „podle vašeho termínu“). |
| — | Nejasnost názvu `audit1-result.md` × `audit1-vysledek.md` | — | V repu se výstup auditu jmenuje `audit1-result.md` (konvence předchozích runů), ve složce Codexu `audit1-vysledek.md`; obsah je totožný. |

**Jazykový průchod (C6):** `jazyk-check.py` 0 nálezů po kole 2; LLM průchod viz `JAZYK_AUDIT_LOG.md`.

## C5b — doověření zásadních oprav (vlákno auditora kola 1, 26. 11. 2026)

Poslané nálezy 1, 2, 3, 4, 5, 7, 8 a 10 (včetně zbytků z kola 2): **všech osm OBSTOJÍ**. Plný výstup: `c5b-result.md`.

| Nový nález | Rozhodnutí | Co se změnilo |
|---|---|---|
| BLOCKER — FAQ 4: „Neplacené prokliky z odpovědí ChatGPT řadí GA4 do kanálu AI Assistant“ vynechává podmínku rozpoznané odkazující stránky | ✅ zapracováno (1. nový zásadní nález po C5, strop dvou nepřekročen) | „GA4 automaticky nastaví médium ai-assistant a kampaň (ai-assistant), když rozpozná odkazující stránku ze seznamu AI asistentů, který vede Google; samotný kanál neplacený původ návštěvy nedokazuje.“ Tělo (odstavec o kanálu) podmínku už mělo. Posláno jednou cíleně ověřit tomu, kdo nález našel. |

**Úpravy po C5b bez změny faktů (jazykový průchod C6):** úvodní věta přeskládaná bez vsuvky („Placené místo přímo pod AI
odpovědí nabízejí … dvě ze tří velkých služeb: ChatGPT a Seznam AI.“) · „formát s více obrázky během generování obrázků“ →
„formát s více snímky, který se zobrazí během tvorby obrázku“ (opakování) · „nic zvlášť nenastavuje … zvlášť cílit“ → „nic
samostatně nenastavuje“ · „způsobilost jeho reklam“ (dvojznačné „jeho“) → „jestli jsou reklamy téhož webu v aukci způsobilé“ ·
tučné zvýraznění čísel MEGA DETAIL v rámci jedné věty · vypuštěn odkaz na `mereni-ai-mode-limity` (otevřená vada ve frontě
refreshů, pravidlo B2).

**Cílené ověření FAQ 4** (týž auditor, 26. 11. 2026): **OBSTOJÍ** — `c5b-2-result.md`. Audity uzavřené.
