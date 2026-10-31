# Vypořádání auditů — refresh `jak-vypnout-ai-overview` (31. 10. 2026)

Audity přes Codex (rozhodnutí 30. 10. 2026). Kolo 1 = fakta a tvrzení (`auditor-osa-fakta.md`),
kolo 2 = jazyk, struktura, SEO, čtenářská hodnota a kontrola tohoto vypořádání.
Výsledky auditů: `audit1-result.md`, `audit2-result.md` v této složce.

## Kolo 1 — fakta (Codex, vlákno `01a192b3-5873-7622-8dfc-ff01ad0bc1b7`)

**Verdikt: OPRAVIT PŘED PUBLIKACÍ, 25 nálezů (15 BLOCKER, 10 WARNING).**
Než jsem nálezy, které chtěly postupy škrtnout (4, 13, 21, 22), zapracoval, nechal jsem sporná
tvrzení ověřit u výrobců (6 agentů, primární zdroje, tabulka v `research.md`). Po každé opravě
grep přes celý soubor včetně frontmatteru (Z17).

### Zapracováno

| # | Nález | Co se změnilo |
|---|---|---|
| 1 | dokumentace vydávaná za rozhraní | FAQ „Nápověda Search Console popisuje přepínač…“, „uvidíte Přehled od AI dál“ → „Samotná změna prohlížeče Přehled od AI nevypne“; nová věta v úvodu, že postupy jsou podle nápověd a rozhraní se může lišit; přehled v GSC teď s atribucí „podle jeho nápovědy“ |
| 2 | `udm=14` bez podmínek | test jiného webu = google.de, odhlášený Chrome, 17. 10.; „pro český Google ani google.com vlastní ověření nemáme“; výchozí vyhledávač platí jen pro hledání z adresního řádku; „natrvalo“ pryč (nadpis „Natrvalo“ → „Předvolba“, shrnutí, persona) |
| 3 | Chrome bez podmínek | „Chrome na počítači“, profil hosta, administrátor (nápověda Chromu) |
| 4 | Safari, Edge, Firefox bez dokladu | **místo škrtnutí ověřeno u výrobců**: Firefox od 140 (release notes), Edge podle nápovědy Microsoftu (přidání hledáním z adresního řádku, cesta k výchozímu vyhledávači, ruční `%s` výslovně „nápověda nepopisuje“), Safari jen seznam Applu, `udm=14` jen rozšířením třetí strany, „nezkoušeli jsme“; iPhone cesty podle nápovědy Applu (iOS 18.2+, iOS 17). FAQ o Edgi: cesta opravena podle Microsoftu (tlačítko na `edge://settings/appearance/copilotAndSidebar`, nová karta a čtení kontextu v Copilot a AI) |
| 5 | režim AI „podle nápovědy nejde vypnout“ | „V nápovědě jsme volbu vypnutí nenašli“; „sám se nespustí“ pryč; nadpis „vypínač nápověda neuvádí“; description, answer, FAQ, shrnutí |
| 6 | přechod z Přehledu od AI do režimu AI bez podmínky | „na mobilu, tam, kde jsou dostupné obě funkce“; doplněny vstupy google.com/ai, tlačítko, aplikace Google |
| 7 | DuckDuckGo filtr obrázků | „jak nejlépe to jde, odfiltrování všech zaručené není“ |
| 8 | „vyřadí celý web“ | nadpis „po vlastnostech, ne po stránkách“; nový bod o podřízených vlastnostech a vlastníkovi; Merchant Center, Ads a Vyhledávání jako celek; FAQ doplněno o mezipaměť |
| 9 | preferovaný zdroj v tabulce | „nemůže být preferovaným zdrojem v Přehledu od AI a režimu AI“, popisek souvisejícího odkazu zúžen |
| 10 | direktivy bez přístupu robota | nový odstavec: přístup, robots.txt, zpracování dny až měsíce, kontrola adresy URL; FAQ „jakmile je Google načte a zpracuje“; Stepper „od chvíle, kdy Google změnu prokazatelně zpracoval“ |
| 11 | výjimky `max-snippet`, strukturovaná data | věta o zvlášť uděleném povolení; strukturovaná data v `data-nosnippet` zůstávají použitelná |
| 12 | `max-snippet` vždy bez úryvku | rozlišeno `0` a kladné číslo, v tabulce samostatný řádek |
| 13 | metriky přehledu generativní AI | **ověřeno** v nápovědě 16984139: jen zobrazení, Přehled od AI + režim AI dohromady, Discover zvlášť, dimenze; „kliky ani pozici nápověda neuvádí“, Google slibuje další metriky; oficiální název „Přehled výkonu v generativní AI“ |
| 14 | prázdný přehled = nemáte co vypínat | „Když se přehled nezobrazí, web podle nápovědy obvykle nemá dost zobrazení. To neznamená, že se obsah vůbec neobjevuje.“ Shrnutí „může stát návštěvnost“ |
| 15 | filtr Web u každého dotazu | „Jestli vám zůstane i u dalších dotazů, nápověda neuvádí“, „jen“ pryč |
| 16 | iPhone bez souboru | variantu pro iPhone jsem stáhl (`co=GENIE.Platform=iOS`): stejné znění, tvrzení zůstává |
| 17 | Brave zobecněný | „jeden vzorek, ne ověření všech zemí a zařízení“; z FAQ 1 vypuštěno, ve shrnutí „v našem vzorku“, tabulka „podle popisu nastavení“ |
| 18 | Seznam ve shrnutí | „nápověda Seznamu vypínač pro uživatele neuvádí“ |
| 19 | Bing ze sekundární zprávy | doplněk **ověřen v obou obchodech** (Microsoft Corporation, popis, výchozí vyhledávač, nová karta jen Chrome); „preview“ pryč; `-ai` „podle červnových zpráv, v nápovědě Bingu není“; „přepínač v nastavení Bingu není“ a „natrvalo“ vypuštěny; název „Copilot Search“ pro AI odpovědi ve výsledcích vypuštěn |
| 20 | `data-nosnippet` a JavaScript | přesně podle specifikace (existující prvky × nově vytvářené) |
| 21 | řádek Google-Extended | **ověřeno** v dokumentaci prohledávačů (30. 10. 2026): trénink budoucích modelů Gemini a grounding v aplikacích Gemini a Vertex AI, rozsah „pravidlo v robots.txt (celý web nebo vybrané cesty)“ |
| 22 | data bez dokladu | **ověřeno**: 20. 5. 2025 (český blog Googlu, doplněn do zdrojů), 21. 10. 2026 changelog — formulace „doplnil mezi existující možnosti“ |
| 23 | „Gemini (dřív Asistent Google)“ | závorka vypuštěna ve všech třech místech |
| 24 | hosts: škody bez dokladu | „doklad, že by blokace Přehled od AI odstranila, nemáme“; tvrzení o rozbití služeb pryč |
| 25 | historie v Mojí aktivitě | doplněno: jen přihlášená hledání, agregovaná anonymizovaná data, hledání bez přihlášení, starou historii nesmaže |

### Nezapracováno + důvod

| # | Návrh auditora | Proč ne |
|---|---|---|
| 4 (část) | odstranit odkaz/postup pro Firefox, protože nápověda Mozilly nebyla přečtena | postup je teď doložen poznámkami k vydání Firefoxu 140 (primární zdroj Mozilly). Na nápovědu Mozilly se v textu už neodkazuje — vrací ochranu proti robotům, kterou neobcházím |
| 22 (část) | vypustit datum spuštění v ČR | datum je doložené primárně (blog Googlu Česko) a je to užitečný kontext pro český dotaz; zůstává se zdrojem |
| 1 (část) | u každého kroku psát „neověřili jsme rozhraní“ | jedna věta v úvodu pro celý článek + atribuce „podle nápovědy“ u konkrétních postupů; opakovat to u každého kroku by návod znečitelnilo |

### Jazykový průchod

- Mechanický (`jazyk-check.py`, slovník v74): po úpravách 1 nález — název článku Googlu „Přehledy od AI“
  v textu odkazu ve zdrojích; přepsáno na „oznámení spuštění v Česku“. Výsledek 0 nálezů.
- `kontrola-komponent.py`: 0 nálezů.
- LLM průchod: v kole 2 (osa jazyk a struktura).

## Kolo 2 — jazyk, struktura, SEO + kontrola kola 1 (Codex, vlákno `01a192c6-bded-7152-b8ec-da0d58b6a7de`)

**Verdikt: OPRAVIT PŘED PUBLIKACÍ, 14 nálezů (5 BLOCKER, 8 WARNING, 1 TIP).** Z 25 položek kola 1 přijato
22, částečně 3 (č. 2, 4, 6) — zbytky ve FAQ a krátké odpovědi, viz blockery 1–3.

### Zapracováno

| # | Nález | Co se změnilo |
|---|---|---|
| 1 | `udm=14` bez podmínek ve FAQ, answer, shrnutí, personě | z `answer` odstraněn; FAQ 1 s oběma podmínkami (adresní řádek, test na německém Googlu, bez vlastního ověření pro český); shrnutí bod 3 podmíněný; persona zrušena; úvodní tabulka „neoficiálně“ |
| 2 | FAQ režimu AI bez podmínky obou funkcí | „pokud jsou v dané zemi a jazyce dostupné obě funkce“ (FAQ i tělo) |
| 3 | Safari: „takže jen přes rozšíření“, DuckDuckGo „podle nápovědy vyberete“ | „nápověda Applu nepopisuje; některá rozšíření nabízejí přesměrování, s udm=14 netestováno“; „Pokud v nabídce máte DuckDuckGo…“ |
| 4 | chybějící podmínky prohlížečů | Firefox: správce může přidávání zakázat; Edge: odstavec vypuštěn (sám končil tím, že ruční `%s` nápověda nepopisuje); doplněk Bingu a tlačítko Copilota „na počítači“ (FAQ, tabulka, odrážka) |
| 5 | přehled výkonu bez výjimky Search Labs | „Data z experimentů v Search Labs Search Console nezahrnuje.“ |
| 6 | H2 bez `hl` | všech 14 H2 má `hl` + `strong`; obecné nadpisy přepsány na téma a pointu (telefon, vyhledávač, vyřazení webu, audit, další návody, shrnutí) |
| 7 | answer nezačíná definicí, míchá čtenáře | začíná „Přehled od AI je shrnutí od umělé inteligence nad výsledky Googlu…“, „na počítači ani na telefonu“, věta pro majitele webu přesunuta do úvodní tabulky (rozcestník) |
| 8 | úvod oddaluje postup | filtr Web a režim AI v prvním odstavci; tabulka s odkazy na kotvy všech částí (ověřeno proti `dist/`); telefon hned za filtrem Web; „Vyberte, kterou funkci chcete omezit“; opakování „tenhle návod vám nepomůže“ pryč; datum spuštění přesunuto k odkazu a do zdrojů |
| 9 | FAQ začínají „Ne.“ / „Není.“ | všechny odpovědi začínají pojmenovaným tvrzením |
| 10 | část pro majitele přerušuje uživatelskou cestu | uživatelské shrnutí (4 body) před částí pro majitele; `PersonaGrid` a `AntiPersona` odstraněny; volby přepínače v jednom odstavci; `max-snippet` a `data-nosnippet` jako dvě odrážky s jednou ukázkou kódu; Stepper 5 → 4 kroky; „co nedělat“ jednou větou |
| 11 | zkratky a technické obraty | description bez „GSC“; „vlastnost“ vysvětlena ve FAQ i v textu; „direktivy úryvků“ → „pravidla, kterými Googlu omezíte úryvky a použití textu“; „robot musí … stránku znovu projít a změnu zpracovat“; „Porovnání možností omezení obsahu“ |
| 12 | „Co nefunguje“ zahrnuje rozšíření | nadpis „Search Labs, historie, hosts — na tyhle rady nespoléhejte“; karta o rozšířeních přesunuta jako upozornění k neoficiálním možnostem |
| 13 | CTA přes nenávratnou ztrátu | „Zvažujete vyřazení vlastního webu z AI odpovědí? Audit AI viditelnosti zkontroluje… a navrhne pořadí úprav.“ |
| 14 | zdroje v jednom bloku | čtyři skupiny (Google pro uživatele, prohlížeče, jiné vyhledávače, vlastní web), datum jednou |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 1 (část) | vypustit `udm=14` i z meta description | `seoTitle` (měnit se nesmí) slibuje „3 funkční způsoby“ a description je vyjmenovává; část čtenářů hledá přímo „&udm=14“ (GSC 27 + 8 + 6 zobrazení). V description výslovně „neoficiální“. Posláno k posouzení v C5b |
| 10 (část) | přesunout technické příklady a měření do specializovaného článku | run je refresh jednoho článku; `blokovat-ai-odpovedi-gsc` čeká ve frontě (Refresh 4) a do něj patří případný přesun. Zde zhuštěno, podmínky zachovány |
| 14 (část) | odkázat na sekundární test `udm=14` | cizí weby citované jako test nejmenujeme; v textu je výslovně „test jiného webu“ |

### Jazykový průchod

- Mechanický (`jazyk-check.py`, v74): 0 nálezů po kole 2. `kontrola-komponent.py`: 0 nálezů (5 použití komponent).
- LLM průchod (kolo 2 proti `JAZYK_SLOVNIK.md` a tónu značky): zakázané výrazy v próze nenašel; anglické názvy
  rozhraní a doplňků ponechány jako názvy.

## C5b — kontrola po kole 2 (stejné vlákno auditora)

**Verdikt: OPRAVIT, 1 BLOCKER, 0 nových věcných vad.** Blockery 2–5 kola 2 vyřešené, odchylky 2 (část pro
majitele zůstává, zhuštěná) a 3 (bez odkazu na sekundární test) přijaté, odchylka 1 přijatá jen s jinou formulací:
„neoficiální“ neomezuje slib funkčnosti.

| Zbývající nález | Oprava |
|---|---|
| meta description „Pomůže … neoficiální adresa s &udm=14“ | „Pomůže filtr Web nebo jiný vyhledávač, zkusit lze i neoficiální &udm=14.“ (147 znaků) |
| ř. 65 „pomůže neoficiální adresa s udm=14“ | „Neoficiální možnost, jak ho mít předvolený, popisuje část o adrese s udm=14, včetně toho, jak omezeně je ověřená.“ |

Po opravě: `jazyk-check.py` 0, `kontrola-komponent.py` 0, build v pořádku, texty všech komponent a všech sedm
kotev odkazů v `dist/` ověřeny. Třetí kolo jsem nespouštěl: zbývající nález byl jediná formulace s přesně
navrženou opravou.
