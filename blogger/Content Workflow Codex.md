# Content workflow pro Codex — research → draft → audit → publish

> **Pro koho:** blogger session běžící v **Codexu**. Vlastní celý obsahový pipeline
> od výzkumu tématu po publikaci a uzávěr v obsahovém plánu.
>
> **Vztah ke `CONTENT_WORKFLOW.md`:** ten je pro Claude Code a volá skripty
> v `~/.claude/skills/`. Tenhle dokument je jeho **codexová varianta** — stejné bloky
> A–D, ale audity dělají **subagenti místo volání OpenAI API**.
>
> **Autorita při rozporu:** v nástrojových cestách a v tom, co Codex umí sám, platí
> **tenhle dokument**. V obsahových pravidlech (struktura článku, tonalita, metadata)
> platí `CONTENT_WORKFLOW.md`. **Pravidla obrázků jsou od 15. 9. 2026 v obou verzích
> shodná** — do repa jde `.jpg` a `.webp`, PNG je pracovní mezikrok a maže se.
> **Rozsah podle zadání uživatele:** Codex v této variantě **píše a publikuje pouze
> nové články**. Refreshe a aktualizace již publikovaných článků dělá jiný nástroj.
> Codex je neprovádí ani jako vedlejší opravu při psaní. Pokyny k refreshům,
> aktualizacím a kadenci 2:1 ze společných dokumentů se v této variantě nepoužívají.
>
> **Ostatní dokumenty** (společné pro obě varianty):
> - `blogger/README.md` — mechanika publikace (frontmatter, build, commit, deploy).
> - `blogger/ARTICLE_TEMPLATE.md` — šablona článku.
> - `blogger/IMAGE_GUIDE.md` — featured / OG image (blok D2).
> - `blogger/obsahovy-plan.csv` — fronta témat. **Velký soubor, prohledávej grepem.**
> - `blogger/JAZYK_SLOVNIK.md` + `jazyk-check.py` — jazyková kontrola (blok C6).
> - `marketing/05-messaging-a-tonalita.md` — brand voice + zakázaný slovník.
> - `docs/section-page-standard.md` — komponenty pro blok D1.
>
> **Režim provozu:** plná autonomie. Jediný lidský dotyk je závěrečný report URL (D5).
> Roli recenzenta plní **auditorští subagenti**, ne uživatel.
>
> **1 run = 1 nový publikovaný článek.**
> Aktualizace existujícího článku není cílem ani náhradním výsledkem běhu.

---

## ⚠️ Než začneš: nenačítej složku plošně

`blogger/` má 9 MB a 760 souborů. **Načtení celé složky naplní kontextové okno dřív,
než se dostaneš k práci** (ověřeno 14. 9. 2026 — session spadla na
„ran out of room in the model's context window" a nešla ani zkomprimovat).

| Soubor | Jak s ním |
|---|---|
| `README.md`, `ARTICLE_TEMPLATE.md`, tenhle soubor | Přečti celé, dohromady ~45 kB |
| `IMAGE_GUIDE.md` | Přečti až v bloku D2 |
| `CONTENT_WORKFLOW.md` (25 kB) | **Nečti celý.** Je to Claude varianta; platí z ní jen obsahová pravidla (struktura článku, tonalita, metadata) a i ta jsou shrnutá tady. Otevři **cíleně grepem**, když tenhle dokument něco neřeší |
| `marketing/05-messaging-a-tonalita.md` (10 kB) | Přečti celý **před C1**. Brand voice a zakázaný slovník, bez toho nenapíšeš draft |
| `docs/section-page-standard.md` (10 kB) | Přečti až v bloku **D1**, když sázíš komponenty |
| `auditor-system.md` (2 kB) | Přečti **před C2**. System prompt pro auditorské subagenty |
| `obsahovy-plan.csv` (213 kB) | **Jen grep**, nikdy celé |
| `JAZYK_AUDIT_LOG.md` (123 kB), `REFRESH_QUEUE.md` (51 kB), `JAZYK_SLOVNIK.md` (58 kB) | **Jen grep** |
| `research/` — **cizí podsložky** (8,5 MB, 164 z minulých runů) | **Nečti je**, ani plošně ani namátkou. Jen konkrétní soubor, na který tě někdo pošle |
| `research/<slug>/` — **složka tvého runu** | **Sem zapisuješ** podklady a audity (B3, C2–C5). To je tvoje pracovní složka, omezení výš se jí netýká |
| `PRIORITA_*.md`, `PLAN_KOLIZE_*.md`, `REVIZE_PLANU_*.md` | Archiv, pro běžný run nepotřebné |

---

## 🧰 Nástroje — co má Codex sám a co volá ven

| Účel | Jak v Codexu |
|---|---|
| Trend & téma research | **Vlastní web search** |
| Audit obsahu (C2–C5) | **Subagenti** — viz blok C. Žádné volání OpenAI API, Codex je OpenAI |
| Jazyková kontrola, mechanická část | `python3 blogger/jazyk-check.py` — lokální skript, běží přímo |
| Keyword research + Trends | **Marketing Miner API + Google Trends** — hotový venv, příkaz v A2. Nic neinstaluj |
| Featured / OG image | **OpenAI Images API** — volání ven, viz D2. Codex sám obrázky negeneruje |
| Design komponenty | `docs/section-page-standard.md` → `src/components/blocks/*.astro` |
| Publikace | `npm run build` → git → CI, viz `blogger/README.md` |

> **Pozor na dvě věci, které se vydávají za totéž.** Audity textu jdou přes subagenty,
> protože Codex text umí sám. **Obrázek a keyword data ale přes API jít musí** — Codex
> je nevygeneruje ani nezjistí. Nesnaž se je „vyřešit subagentem", nemá čím.

---

## BLOK A — Údržba obsahového plánu (start každého runu)

Cíl: udržet `blogger/obsahovy-plan.csv` živý a najít, na čem pracovat.

- **A0 — Ověř souběh před výběrem:** na začátku každého runu spusť `git fetch origin`
  a prohlédni `git log --oneline HEAD..origin/main`. Pokud má vzdálená větev nové
  commity, nejdřív si je prohlédni a synchronizuj pracovní větev; teprve potom čti
  sdílený plán. Obě blogger větve vybírají z jedné fronty a řádek mohl mezitím převzít
  někdo jiný.

- **A1 — Trend research (širokozáběr):** web search napříč tématem → aktuální trendy, nové dotazy, co řeší konkurence. Zkratky *AI SEO · GEO · AEO · AIO* jsou jen jedním z okruhů, ne celý záběr. Reálné pokrytí webu (podle tagů, k 15. 9. 2026):

  | Okruh | Co pod něj patří |
  |---|---|
  | **AI platformy** | ChatGPT, Perplexity, Gemini, Claude, Copilot, **Seznam a jeho asistent** — chování, citace, změny v produktech |
  | **Vyhledávání s AI** | Google AI Mode / režim AI, AI Overviews, jak se mění SERP |
  | **Přístup robotů** | robots.txt, llms.txt, GPTBot a spol., opt-out, Content Signals, ověřování robotů podle IP |
  | **Citovatelnost** | krátká odpověď, hustota faktů, FAQ, co AI reálně cituje |
  | **Technické základy** | strukturovaná data (schema.org, Person, knowsAbout), rychlost, dostupnost obsahu |
  | **Důvěryhodnost** | autorství, E-E-A-T, doložená tvrzení |
  | **E-shopy** | produktová data pro AI, Shoptet, Upgates, feedy |
  | **Měření** | viditelnost v AI, návštěvnost z AI, vyhodnocení dopadu |

  **Seznam je nejčastější pojem celého korpusu** — český kontext má přednost před překladem globálních témat. Okruhy ber jako výchozí mapu, ne uzavřený výčet; nové jevy (nový robot, nová funkce vyhledávače, nová platforma) jsou vítané téma i když do tabulky nezapadají.
- **A2 — Marketing Miner + Google Trends:** doplň hledanost, návrhy a **Google Trends** (rising queries = včasné signály). SERP / konkurenční obsah jen u témat, kde to dává smysl.

  **Prostředí je hotové — nezakládej venv a nic neinstaluj.** Venv skillu má `pytrends`, `pandas`, `requests` i `python-dotenv`; token se načte sám z `.env` skillu, nemusí být v shellu. Ověřeno 15. 9. 2026:

  ```bash
  ~/.claude/skills/marketing-miner-api/.venv/bin/python \
    ~/.claude/skills/marketing-miner-api/scripts/research_enrich.py \
    --keywords-file <složka>/keywords.csv --top 10 --enrich trends --geo CZ
  ```

  Vstup je CSV se sloupcem `keyword`. Skript si cesty doplní sám, jde spustit z libovolného adresáře. Dvě varování na startu (LibreSSL, pandas `FutureWarning`) jsou neškodná — na výsledek nemají vliv. Výstup: `enrichment_trends.json` + `enrichment.md` vedle vstupního CSV. Zbylé enrichery (`suggest,wikipedia,youtube`) a ostatní skripty skillu běží přes stejný Python.

  **⚠️ Rising queries u málo hledaných spojení lžou — filtruj je.** Google k víceslovným dotazům s nízkou hledaností přimíchává nesouvisející výrazy a tváří se, že rostou. Změřeno 15. 9. 2026 na `ai seo` (CZ): vrátilo `books, pasta, vegetables, movies, museums` — žádné s tématem nesouvisí. U `e-shop`, `shoptet`, `chatgpt`, `seo` i `ai` přitom vrací data správně. Neexistující výraz vrátí prázdno, takže **šum nepoznáš podle toho, že chybí data — poznáš ho jen podle obsahu**.

  Pravidlo: **rising query, která nesdílí ani slovo se seed keywordem a není jeho známé synonymum, je šum → zahoď ji.** Když je takových víc než polovina, Trends pro to keyword nepoužívej vůbec a do `research.md` napiš, že data nebyla použitelná. Nikdy nepřebírej řádek „Souhrnně rostou" z `enrichment.md` bez téhle kontroly — skript ho skládá z nefiltrovaného výstupu.
- **A3 — Porovnání s webem a kolizní kontrola:** k 15. 9. 2026 je v `src/content/articles/` **165 článků**, načíst je celé nejde. Kontrolu udělej **před hloubkovou rešerší**, ne až po draftu:
  1. **Sken metadat všech článků s názvy souborů** — bez nich nepoznáš, ke kterému článku nález patří:
     ```bash
     grep -H "^title:\|^slug:\|^tags:" src/content/articles/*.mdx
     ```
  2. **Prohledej názvy souborů i celé články klíčovými slovy řádku.** Samotný titul nemusí
     překryv odhalit. Začni názvy a cíleným hledáním, například:
     ```bash
     rg --files src/content/articles | rg -i '<téma|synonymum>'
     rg -il '<klíčové slovo|synonymum>' src/content/articles src/content/sections src/content/pillar
     ```
  3. **H2 filtruj na téma, nedumpuj celý web.** Neomezený výpis má 1 076 unikátních nadpisů a 50 kB (měřeno 17. 9. 2026) — je to tři čtvrtiny celého skenu a nejmíň užitečná část. Cílený filtr na jedno téma vyjde na jednotky kB:
     ```bash
     grep -H "^## " src/content/articles/*.mdx | grep -i "<téma>"
     ```
  4. **Celé čti jen obsahově blízké kandidáty** — typicky 2–5 článků, ne 165.

  Tím zkontroluješ celý web a nezahltíš kontext. Přidej i pilíř a sekce (`src/content/sections|pillar/`).
- **A4 — Porovnání s tabulkou:** grepni `obsahovy-plan.csv` na řádky `Publikováno = ne` → nepřidávej, co už čeká.
- **A5 — Zápis 1 nového řádku** do `obsahovy-plan.csv` (změna z 15. 9. 2026 — dřív dva). Vyplň A–E (**D = kategorie** ze čtveřice `tutorial`/`analysis`/`defensive`/`case-study`, E = `ne`), F nech prázdné. Důvod: dvě témata na jeden publikovaný článek frontu soustavně nafukují; k 15. 9. 2026 v ní čeká 145 položek proti 192 publikovaným. **Přidávej podle hodnoty tématu, ne pro splnění kvóty** — když v daném běhu nenajdeš nic, co by stálo za zařazení, nepřidávej nic a napiš to do reportu.

  Plán má vždy **šest sloupců**. Čti ho s `newline=''` a zapisuj přes
  `csv.writer(..., lineterminator='\r\n')`; neskládej řádek ručně. Po každé změně
  ověř, že všechny parsované řádky mají šest polí a počet fyzických `CRLF` odpovídá
  počtu řádků vrácených `csv.reader`:

  ```python
  import csv
  from pathlib import Path

  plan = Path("blogger/obsahovy-plan.csv")
  with plan.open(newline="", encoding="utf-8") as f:
      rows = list(csv.reader(f))
  raw = plan.read_bytes()
  assert all(len(row) == 6 for row in rows)
  assert raw.count(b"\r\n") == len(rows)
  ```

  **U analytických témat rozlišuj tři věci a nepiš je do jedné věty:**
  1. **Otázka**, kterou má článek zodpovědět → sloupec B (Téma).
  2. **Teze k ověření** → sloupec C, uveď ji návěštím **`Teze:`**, ne `Data:`.
  3. **Doložená skutečnost** → sloupec C jako **`Data:`**, ale jen když k ní máš zdroj
     nebo vlastní měření, a ten zdroj rovnou uveď.

  Návěští `Data:` u nedoloženého tvrzení je past pro toho, kdo bude řádek zpracovávat —
  vezme ho jako hotové zadání a postaví na něm článek.
  - Přidávej jen témata pro **nový článek bez obsahové duplicity**. Pokud zjištění patří do aktualizace existujícího článku, zapiš nález a jeho URL do `research/<slug>/research.md` a závěrečného projektového záznamu podle D5; článek neupravuj a nezakládej jeho duplicitní náhradu.
- **A6 — CZ-ukotvení:** kde to dává smysl, ukotvi title/answer geograficky („v Česku", „pro český trh"). Z měření: ChatGPT u obecných dotazů cituje globální EN zdroje.

---

## BLOK B — Výběr tématu a hloubkový research

- **B1 — Výběr tématu:** po A0 znovu ověř, že kandidátní řádek má stále
  `Publikováno = ne`. Dočasná výjimka z běžného pořadí: dokud je otevřený řádek
  **`osobni inteligence cesky nazev`**, vyber ho před ostatními tématy k novému článku.
  Po jeho uzavření tuhle výjimku z dokumentu smaž. Jinak vezmi **první volný řádek pro
  nový článek**, který po kontrole Pokynů a překryvu s webem nevyžaduje aktualizaci
  existujícího obsahu.

  > **Nejdřív přečti sloupec C (Pokyny).** Řádky s pokynem *refresh / update / aktualizovat existující / nepsat nový* **přeskoč a ponech beze změny**, včetně stavu publikace a URL. Patří jinému nástroji; neoznačuj je jako hotové. Stejně postupuj, pokud až kontrola překryvu ukáže, že téma vyžaduje aktualizaci existujícího článku. Důvod přeskočení zapiš do podkladů svého běhu a pokračuj dalším způsobilým řádkem. Pokud žádný nezbývá, oznam nedostatek témat pro nový článek; nenahrazuj úkol refreshem ani duplicitou.

  > **Pokyn v plánu je teze k ověření, ne doložený fakt.** Sloupec C u 218 z 338 řádků
  > začíná návěštím „Data:" a rovnou tvrdí závěr (ověřeno 17. 9. 2026; návěští „Teze:"
  > mají jen 2 řádky). To návěští neznamená, že je tvrzení doložené — znamená, že ho
  > někdo považoval za pravděpodobné, když řádek zakládal.
  >
  > **Teze z plánu proto vždy ověř v B2 a piš závěr podle zdrojů, ne podle plánu.**
  > Když ji zdroje nepotvrdí, uprav závěr článku a **rozdíl zapiš do `research.md`** — jinak se
  > stejná neověřená teze vrátí příště v dalším řádku.
  >
  > **Pozor na záměnu „nedoloženo" za „prokázaně nulové".** Že se nenašla univerzální
  > hodnota, neznamená, že daná věc nemá vliv. Formuluj to, co zdroje unesou: *nemáme
  > doložený univerzální počet slov* není totéž jako *na délce nezáleží*. Tahle záměna
  > je nejčastější vada zděděná z plánu.
- **B2 — Hloubkový research tématu:** cílený web search (fakta, zdroje, co pokrývají konkurenti) + cílená analýza KW na Marketing Mineru (hledanost, long-tail, sezónnost, rising queries pro FAQ — u úzkých témat bývají prázdné, náhrady viz C1).
  > **Měřený vzorek anonymizuj.** V publikovaném článku nejmenuj konkrétní e-shopy,
  > média ani osoby, které jsi identifikoval ve veřejně dostupných souborech měření.
  > Popiš typ subjektu a zjištění. Stejně anonymně popiš cizí web a jeho tvrzení, když
  > je v článku vyvracíš. Toto omezení se netýká autora nebo vydavatele záměrně citovaného
  > zdroje, pokud se do rešerše nedostal jen přes soubor měřeného vzorku.
  >
  > **Číslo z GA4 bez kanálu nepoužívej.** Většinu provozu webu tvoří placené kampaně
  > na Facebooku a Instagramu. Každou metriku z GA4 proto rozpadni alespoň podle
  > kanálu a v textu řekni, zda jde o placenou, organickou nebo celkovou návštěvnost.
  > Když segmentaci nemáš, agregované číslo do článku nedávej.
  > **Navazující článek z plánu je kandidát na odkaz, ne povinný odkaz.** Než na něj
  > odkážeš, **otevři ho a přečti**. Když v něm najdeš nedoložené tvrzení, **odkaz
  > vynech** — interní odkaz je doporučení a nemá vést na text, který bys sám nenapsal.
  > Nález zapiš do tabulky „Otevřené kandidáty" v `REFRESH_QUEUE.md` a **článek neopravuj**;
  > refreshe dělá jiný nástroj. Vzor: 17. 9. 2026 měl nový text o délce obsahu odkazovat
  > na `aktualizace-obsahu-pro-ai`, ten má ale v dlaždicích intervaly „30–90 dní" se
  > zdrojem uvedeným jen jako „analýzy". Odkaz vypuštěn, nález předán.

- **B3 — Uložení podkladů:** kurátorovaný záznam ulož do `blogger/research/<slug>/research.md` (cílové KW, long-tail, Trends, poznámky o konkurenci, **zdroje s URL**). Hrubé dumpy do repa nedávej. Složka `research/` je mimo `src/` a `public/`, nedeployuje se.

  > **Když nástroj selže, zapiš to — nedopočítávej a nezamlčuj.** Do `research.md` patří
  > jednotný řádek: **který nástroj · kolik pokusů · jaká chyba · která tvrzení proto
  > nelze použít**. Příklad z 17. 9. 2026: *Google Trends — 2 pokusy, oba HTTP 429
  > (rate limit); sezónnost a rising queries proto v článku netvrdíme.*
  >
  > Selhání nástroje **není důvod zastavit článek**, když téma unesou jiné zdroje. Je to
  > ale důvod nepsat závěry, které se o chybějící data opíraly. **Nedostupná data nejsou
  > nulová poptávka** — stejné pravidlo jako u prázdných rising queries v A2.

  > **U tvrzení o cizí platformě ulož do `research.md` přehled podmínek.** Shrnutí
  > dokumentace snadno zachytí hlavní podmínku a tiše zahodí vedlejší — a chybějící
  > podmínka z článku udělá nepravdu, i když je zbytek správně. Tabulka to drží
  > pohromadě pro tebe i pro auditory:
  >
  > | Tvrzení | Podmínky | **Konzistence** | Výjimky | Primární zdroj |
  > |---|---|---|---|---|
  > | Stránka může být použita v AI funkcích Googlu | indexace · způsobilost k úryvku · **zahrnutí webu** (nastavení *Search generative AI* v Search Console) | — | zobrazení není zaručené | odkaz na aktuální dokumentaci |
  > | `alternateName` u `Organization` pomůže s alternativním názvem značky | platná strukturovaná data | **název v `Organization` se musí shodovat s názvem webu** | — | odkaz na aktuální dokumentaci |
  >
  > **Sloupec „Konzistence" je tam schválně.** Doporučení platformy často nestojí jen na
  > tom, co uděláš na té stránce, ale na tom, co musí souhlasit **jinde na webu**. To
  > není podmínka ani výjimka a v tabulce bez tohoto sloupce nemělo kam — proto se
  > požadavek na shodu názvů v běhu 17. 9. 2026 ztratil. Prázdná buňka znamená, že jsi
  > konzistenční požadavky hledal a žádné nejsou.
  >
  > Řádek ten příklad ukazuje i s vadou, která ho vyvolala: první rešerše (17. 9. 2026)
  > zachytila indexaci a úryvek, ale zahrnutí webu vynechala. Našel to až auditor faktů.
  >
  > **Vyplň všechny čtyři sloupce.** Prázdné „Výjimky" znamenají, že jsi je hledal a
  > žádné nejsou — ne že jsi na ně zapomněl.

  > **Zdroje si zapisuj pečlivě.** Auditor faktů v bloku C je dostane jako výchozí bod — nevidí tvou historii hledání. **Vlastní zdroje si ale dohledá sám** (viz C2), takže tvůj výběr ho neomezuje.

---

## BLOK C — Draft a audit přes subagenty

> **Proč subagenti.** Jedno vlákno nemůže text napsat a zároveň ho nezaujatě zkontrolovat —
> zná svoje úmysly a čte je do textu i tam, kde nejsou. Proto audit dělá **samostatný agent
> s odděleným kontextem**, který nevidí, jak článek vznikal. Codex to podporuje nativně
> ([dokumentace](https://developers.openai.com/codex/subagents), GA od března 2026):
> každý subagent má vlastní kontextové okno, system prompt i oprávnění.
>
> **Mez, se kterou počítej:** subagenti běží na stejném modelu jako ty, takže **sdílejí
> část slepých skvrn**. Proto mají povinnost opírat nálezy o ověřitelný zdroj, ne o dojem.
> Nález bez zdroje nebo bez citované pasáže se nezapracovává.

**Strop ověřování v běžném runu:** použij tři auditorské subagenty z C2, C3 a C5.
Zásadní opravy vrať podle C5b agentovi, který nález našel; nezakládej kvůli nim další
role. Výzkum, data ani obrázek nerozděluj mezi další agenty. Limity kol a eskalace v
C5b platí i tehdy, když by další kontrola byla levná — po jejich vyčerpání už opakování
nezvyšuje jistotu úměrně času.

### C1 — První verze článku

Podle `blogger/ARTICLE_TEMPLATE.md` + `blogger/README.md`:

- Frontmatter: **8 povinných polí** — `title`, `description`, `answer`, `slug`, `category`, **`tags`**, `updated`, `keywords`. (`tags` se dřív v dokumentaci nepočítalo; ověřeno proti `src/content.config.ts` 15. 9. 2026, má je všech 165 článků.) Plus **`variant: "rich"`**, které schéma nevynucuje, ale bez něj se nevykreslí rich layout. `keywords` z B2.

  **Pole `howto` a `stats` nepoužívej.** `howto` vytvářelo jen neviditelná strukturovaná
  data a `stats` žádná šablona nevykreslovala; obě byla 20. 9. 2026 z korpusu odstraněna.
  Kroky patří do viditelného `Stepper`u, čísla do viditelného textu nebo komponenty.
  Před přidáním jakéhokoli jiného pole frontmatteru nejdřív prohledej `src/pages/`,
  `src/components/` a `src/layouts/` a ověř, že se hodnota skutečně vykreslí čtenáři.

  **`category` = sloupec D tabulky.** Schéma zná jen `tutorial`, `analysis`, `defensive`, `case-study` (`z.enum` v `src/content.config.ts`) — jiná hodnota shodí build. Sloupec D nese kategorii **od 16. 9. 2026**; do té doby se jmenoval „Typ" a měl `článek` ve všech 338 řádcích (nulová informace). Naplněn byl ze značek `Kategorie:` v Pokynech. Pořadí:
  1. **Hodnota ve sloupci D** — vyplněná u 276 z 338 řádků (analysis 145, tutorial 130, case-study 1).
  2. **Když je D prázdné** (62 řádků, z toho 46 reálně k napsání), urči kategorii podle obsahu — tabulka „Kategorie — co kam patří" v `README.md`. Orientačně: krok-za-krokem postup = `tutorial` (kroky ve viditelném `Stepper`u), měření / trend / rozbor dat = `analysis`, „jak omezit/vypnout" = `defensive`, konkrétní klient s čísly = `case-study`. Volbu zdůvodni v `research.md` a **zvolenou hodnotu rovnou doplň do sloupce D**, ať ji příští běh neřeší znovu.
  3. Sloupec C (Pokyny) u některých řádků nese starší značku `Kategorie: …` i s kontextem (např. „tutorial (+ howto schema)"). **Přednost má sloupec D**; značka v Pokynech je historická poznámka a odstraněné pole se podle ní neobnovuje.
  **Formát H2 je závazný pro celý web.** Každý H2 nese `<span class="hl">klíčový pojem</span>` **i** `<strong>pointu</strong>` a prostý text mezi tím; H3 zůstávají prostý text. Plné znění v `CLAUDE.md` § VI, vzory nahoře v `ARTICLE_TEMPLATE.md`. Stav k 16. 9. 2026: sekce a pilíř 100 %, **blog jen 142 z 1 359 H2** — u nových článků to drž od začátku, retrofit starých je jiná práce.

- Tělo: `answer` (40–60 slov, sebestačná) → lead → 3–6 H2 sekcí (fakta z B2) → **FAQ** (z rising queries) → CTA na konkrétní produkt (tutorial/defensive → Pack nebo Free PDF; analysis/case-study → Audit). **Název a cenu produktu přečti před psaním CTA v `src/content/pages/{pack,audit,navod-zdarma}.ts`** — je to jediný zdroj pravdy. Nabídky se přejmenovávají (audit 16. 9. 2026) a opsaný název z dokumentace znamená druhé nasazení.

  **Produktová terminologie:** Pack pokrývá sedm typů stránek; osmá obsahová kapitola
  je návod na nasazení. Dodávka obsahuje devět dílčích PDF a jeden souhrnný dokument.
  Audit se jmenuje **Audit AI viditelnosti**. Staré označení „AI SEO audit" ani jiné
  zkratky v CTA nepoužívej; mimo CTA smí stát jen jako výslovný kontrast ke klasickému
  SEO auditu. Aktuální název a cenu přesto vždy ověř v datových modulech.

  **Když Trends mlčí — FAQ stojí na stupňovaném zdroji, ne na jednom.** Rising queries
  jsou u úzkých českých témat běžně prázdné. Změřeno 17. 9. 2026: `geo optimalizace`,
  `aeo optimalizace` i `llms txt` vrátily **0 rising queries**. Google Suggest to
  zachrání jen někdy — `llms txt` dal 10 návrhů, `geo optimalizace` vrátil jen sám
  sebe a `aeo optimalizace` nic. Ber první neprázdnou vrstvu:
  1. **Rising queries** z Trends (po filtru na šum, viz A2).
  2. **Google Suggest** (`--enrich suggest`) a „people also ask" v SERP.
  3. **FAQ konkurence** na stejné téma.
  4. **Doložené praktické problémy** — co se reálně řešilo v zakázkách, v měřeních
     nebo v předchozích článcích. Tahle vrstva nezávisí na žádném nástroji a u
     nejužších témat bývá jediná dostupná.

  **Prázdná data nejsou nulový zájem.** Znamenají, že to nástroj neměří — u českých
  odborných spojení je to normální stav, ne signál o tématu. Nedělej z toho závěr a
  nevyhazuj kvůli tomu řádek z plánu.

  **U každé otázky si poznač, odkud je** (Trends / Suggest / SERP / konkurence / praxe)
  a zapiš to do `research.md`. Bez toho nejde poznat, jestli FAQ stojí na datech, nebo na dojmu.
- Brand voice + zakázaný slovník dle `marketing/05-messaging-a-tonalita.md`.
- **Vazba na aktuální rok:** kde to dává smysl, ukotvi titulek / obsah / `keywords` na aktuální rok. Rok zjisti z dnešního data.
- **Design komponenty rovnou tady, ne až v bloku D** (změna z 15. 9. 2026): rozbij text komponentami podle `docs/section-page-standard.md` — výčet a pravidla v **D1**. Důvod: při převodu odstavce do tabulky nebo kroků se ztrácejí výhrady („podle dokumentace", „většinou"), které se do buňky nevejdou. **Auditoři musí vidět text v podobě, která půjde ven**, ne polotovar.

### C2 — Auditor faktů (subagent, běží souběžně s C3)

Spusť subagenta, který **nevidí historii tvorby**. Dostane jen:

1. Finální text článku.
2. `blogger/research/<slug>/research.md` (zdroje z B3).
3. Kontextový rámec (viz níže).
4. Systémový prompt z `blogger/auditor-system.md`.

Zadání pro auditora faktů:

> Ověř věcnou správnost. U každého tvrzení, čísla, data a odkazu na zdroj zkontroluj,
> jestli sedí a jestli je doložené. Hledej nepodložené sliby a overclaimy.
> Zvlášť si všímej tvrzení o tom, co která AI platforma dělá — ta zastarávají nejrychleji.
>
> **Hledej si vlastní zdroje.** Podklady z `research.md` ber jako výchozí bod, ne jako
> hranici. Ověřuj proti zdrojům, které si najdeš sám — v podkladech chybí přesně to,
> co autor přehlédl. **Aktivně hledej protidůkaz:** nesnaž se tvrzení potvrdit, snaž se
> ho vyvrátit. Když se ti to nepodaří, tvrzení obstálo.
>
> **Formát každého nálezu:** citovaná pasáž → v čem je problém → důkaz (URL nebo citace
> zdroje) → doporučená oprava → **je nález zásadní, nebo drobný?** Zásadní = chybné číslo,
> neplatné tvrzení o platformě, nedoložený slib. **Nález bez důkazu neuváděj.**
>
> Text needituj, jen reportuj.

Pro C2 i C5 platí dvě pojistky proti falešným nálezům:

- Pokud auditor požaduje doplnit číslo, statistiku nebo zdroj, musí zároveň navrhnout
  konkrétní dohledatelný zdroj. Obecný požadavek „doplňte data" není nález.
- Délku titulku pro výsledek vyhledávání posuzuje podle `seoTitle`. Když `seoTitle`
  existuje, délku `title` neposuzuje; bez `seoTitle` je pro kontrolu relevantní `title`.

Výstup ulož do `blogger/research/<slug>/audit-fakta.md`.

### C3 — Jazykový auditor (subagent, běží souběžně s C2)

Druhý subagent, taky bez historie tvorby. Dostane text, `marketing/05-messaging-a-tonalita.md`
a pokyn, jak si **cíleně grepnout** `JAZYK_SLOVNIK.md` (ne načítat celý, má 58 kB).

Zadání:

> Zkontroluj češtinu, srozumitelnost a soulad s tonalitou. Hledej zakázaný žargon,
> kostrbaté vazby, vatu, nejednoznačné formulace a místa, kde věta slibuje víc, než říká.
>
> **Formát nálezu:** citovaná pasáž → v čem je problém → návrh přeformulování.
> Text needituj.

Výstup do `blogger/research/<slug>/audit-jazyk.md`.

### C4 — Zapracování nálezů

Projdi oba audity a u **každého nálezu** zapiš, jak jsi ho vyřešil:

| Stav | Kdy |
|---|---|
| **Opraveno** | Nález platí, text upraven |
| **Odmítnuto** | Nález neplatí — **připiš doložený důvod**, ne „nesouhlasím" |

Záznam ulož do `blogger/research/<slug>/vyporadani.md`. Slouží jako vstup pro C5.

> **„Opraveno" zapiš až po kontrole celého souboru.** Oprava výrazu nebo opakovaného
> tvrzení skoro nikdy nesedí jen na jednom místě — stejná formulace bývá v nadpisu,
> v tabulce, v `answer`, ve `faq` i v propsech komponent. Projeď celý `.mdx`
> **včetně frontmatteru**:
>
> ```bash
> grep -n -i "<opravovaný výraz>" src/content/articles/<slug>.mdx
> ```
>
> Když některý výskyt zůstává záměrně, uveď ho ve `vyporadani.md` i s důvodem. Nezkontrolovaný
> výskyt je horší než neopravený nález — vypořádání pak tvrdí nepravdu.

> **Auditor neurčuje, rozhoduješ ty** — ale odmítnutí musí být doložené stejně jako nález.

### C5 — Závěrečný auditor (subagent, nový, nepodílel se)

Třetí subagent. **Nesmí to být žádný z předchozích dvou.** Dostane systémový prompt
z `blogger/auditor-system.md`, kontextový rámec a obě pojistky uvedené za C2. Postupuje
ve dvou krocích:

1. **Nejdřív posoudí opravený text samostatně**, bez znalosti předchozích nálezů — aby nebyl zaujatý tím, co už se řešilo. Hledá, co oběma předchozím uniklo.
2. **Teprve pak dostane** `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md` a ověří, jestli jsou nálezy skutečně vypořádané a jestli odmítnutí obstojí.

Výstup do `blogger/research/<slug>/audit-final.md`.

### C5b — Doověření zásadních oprav (od 15. 9. 2026)

U nálezů označených jako **zásadní** nestačí je označit za opravené — **opravu musí ověřit auditor**.

- **Rozsah:** jen zásadní nálezy (chybné číslo, neplatné tvrzení o platformě, nedoložený slib). Stylistika a formulace se nedoověřují.
- **Jak:** pošli opravenou pasáž zpět auditorovi faktů s otázkou, jestli oprava obstojí. Stačí pasáž a kontext, ne celý článek.
> **Před předáním auditorovi dokonči všechny související editace.** Během ověřování
> kontrolovanou pasáž **neupravuj** — auditor by posuzoval stav, který už neplatí, a
> vrátil by nález na něco, co je mezitím opravené. Když je změna během ověřování
> nezbytná, ověřování zruš, změnu dokonči a pošli novou verzi.

- **Strop se počítá na nález, ne na článek — ale článek má vlastní strop.**
  - **Doověření téhož zásadního nálezu: jedno kolo navíc.** Když oprava ani po něm
    neobstojí, eskaluj do vlákna na člověka.
  - **Nový zásadní nález závěrečného auditora** není další kolo téhož — oprav ho a nech
    **jednou cíleně ověřit tím auditorem, který ho našel**.
  - **Ověření dokončené stylistické náhrady není kolo faktického auditu.**
  - **Globální strop: nejvýš dva nové zásadní nálezy po C5 odbav sám. Třetí eskaluj**,
    i když je nový a i kdyby byla oprava triviální. Tři nové zásadní nálezy po třech
    auditech neznamenají tři nehody, ale že s článkem je něco systémově špatně —
    a to je informace pro člověka, ne důvod k dalšímu kolu.

### C6 — Jazyková kontrola strojem (POVINNÁ, před buildem)

```bash
python3 blogger/jazyk-check.py src/content/articles/<slug>.mdx --slovnik blogger/JAZYK_SLOVNIK.md
```

1. **Cíl je 0 nálezů** (⛔ i ⚠️). Nejčastější vada korpusu: česká uvozovka `„` zavřená rovnou `"`.
2. **Kontrola kontextu u každé náhrady** — pád, číslo, rod, význam v tomhle textu. Slovník navrhuje slovo, ne tvar.
3. **Nový nález → pravidlo jen když je strojově rozpoznatelný.** Zapiš řádek do `JAZYK_AUDIT_LOG.md` u **každého** nálezu. Do `JAZYK_SLOVNIK.md` ale přidej regex jen tehdy, projde-li testem:

     > Poznám tu vadu spolehlivě **bez toho, abych rozuměl zbytku věty**?

     - **Ano** → pravidlo do slovníku (úroveň, regex, náhrada, důvod, původ). Typicky: anglicismus s českou náhradou, typografická vada, konkrétní fráze marketingové vaty.
     - **Ne** → **žádný regex**, jen záznam v auditním logu. Typicky: vada, o které rozhoduje význam věty, doloženost tvrzení nebo to, co je kolem. Mechanické zobecnění by začalo hlásit i správnou češtinu a checker by se stal nedůvěryhodným.

     Regex piš s hranicí slova `\b`, ať nechytá delší slova — drží to 299 z 313 současných pravidel (ověřeno 17. 9. 2026). Když vada závisí na kontextu, ale chceš na ni upozorňovat, patří na úroveň **⚠️** (řeší se u prvního výskytu), ne **⛔**. **A zúži ji na ten kontext** — plošný zákaz jednoho slova označí i správnou češtinu (pravidlo proti kalku *surface* hlásilo „povrch, na který se používá čistič"). K takovému pravidlu připiš do sloupce Proč **protipříklad** `Nechytá: «správné použití»`. Slovník i článek jdou **v jednom commitu**.

> Tenhle krok je mechanický a **subagentem se nenahrazuje** — je to skript proti slovníku.

### Kontextový rámec pro auditory (vkládá se do zadání C2 a C5)

> Toto je marketingový a vzdělávací článek pro web **aiseo-optimalizace.cz** — edukativní web
> o AI éře vyhledávání (SEO/GEO/AEO/AIO). Web informuje o tématu a zároveň nabízí ke koupi
> **AI SEO Wireframe Pack** (sedm typů stránek + návod na nasazení; devět dílčích PDF
> a souhrnný dokument) a **Audit AI viditelnosti** — **aktuální cenu a znění vždy ověř
> v `src/content/pages/pack.ts` a `audit.ts`**, ne odsud. Provozovatel:
> Sniper Design (Zlatý partner Upgates od 2016, vlastní e-shop MEGA DETAIL).
> Auditor hodnotí: věcnou správnost, soulad s brand voice (žádný zakázaný žargon, žádný overclaim),
> citovatelnost pro AI (answer block, hustota faktů, FAQ), SEO (`seoTitle` do 60 znaků;
> když existuje, neposuzuj délku `title`; description 70–160; struktura),
> relevanci CTA. Aktuální rok je <doplň>, podle něj posuzuj aktuálnost.
> Vrať konkrétní seznam oprav s důkazy, ne obecnosti. Požadavek na nové číslo,
> statistiku nebo zdroj uváděj jen spolu s konkrétním dohledatelným zdrojem.

---

## BLOK D — Design, featured image, publikace, uzávěr

- **D1 — Design optimalizace** — **dělá se už v C1, před audity** (změna z 15. 9. 2026). Tady zůstává referenční popis a kontrola, že je hotová. Podle `docs/section-page-standard.md` rozbij „wall of text" komponentami z `src/components/blocks/` (`DoDont`, `Stepper`, `Insight`, `Mistake`/`MistakeGrid`, `Persona`/`PersonaGrid`, `CompareTable`, `SourceCard`, `PromptList`…). Vizuální landmark min. každých 200–300 slov.
  - Článek je proto **`.mdx`** + `variant: "rich"` ve frontmatteru.
  - Importy v hlavičce MDX za frontmatterem: `import X from "../../components/blocks/X.astro";`
- **D2 — Featured / OG image** (POVINNÁ — bez ní 404 na kartě i heru). Plný postup: `blogger/IMAGE_GUIDE.md`.

  > **Tohle Codex sám neudělá** — obrázek se generuje voláním OpenAI Images API, model `gpt-image-2`, `--size 1536x1024`, `--quality high`. Klíč `OPENAI_API_KEY` je v `~/.zshenv`. Použít jde i hotový skript `~/.claude/skills/open-ai-api-core/scripts/image.py` — je to obyčejný Python soubor, spustíš ho přímo.

  - Prompt = **doslovně převzatá** konstantní stylová preambule z `IMAGE_GUIDE.md` §5 + scéna k tématu + **CZ text vlevo nahoře** + pojistky předepsané guidem. Preambuli neskládej z paměti a nepřidávej vlastní zákazy.
  - **Kompozice:** důležitý obsah do horních **~84 %** — zobrazení ořízne spodních ~16 %.
  - ⛔ **Do promptu NIKDY `no text` / `no letters`** — CZ nadpis je povinná součást stylu. Na tomhle spadly runy 51–62, 81–86 i 120–121.
  - **Zkontroluj vygenerovaný obrázek na ořezu**, ne na originálu (postup v `IMAGE_GUIDE.md` §6 krok 3).
  - **Vyrob `.jpg` (1200×800) + `.webp`** — to jsou jediné dva soubory, které jdou do repa.
  - **PNG smaž** (`rm public/og/<slug>.png`) — je to pracovní mezikrok, šablona na něj nesahá.
- **D3 — Publikace** (dle `blogger/README.md`):
  - `npm run build` (validace frontmatteru + komponent)
  - **Ověř vykreslení použitých komponent v `dist/`.** Z článku si vypiš každý typ
    importované komponenty a pro každou vyber alespoň jeden její skutečný, jedinečný
    textový řetězec. Po buildu ho najdi v `dist/blog/<slug>/index.html` přes přesnou
    shodu. Samotný úspěšný build nestačí: překlep v názvu vlastnosti může text tiše
    zahodit. Kontrola prázdného `Stepper`u z D1 zůstává navíc.
  - **Těsně před commitem znovu** proveď `git fetch origin` a prohlédni
    `git log --oneline HEAD..origin/main`. Když přibyly změny, nejdřív je sluč se svou
    prací, znovu ověř zvolený řádek plánu a zopakuj build i kontroly, kterých se dotkly.
  - `git add` JEN vlastní soubory, **nikdy `-A`**. Úplný výčet toho, co run smí commitovat:
    - `src/content/articles/<slug>.mdx` — článek
    - `public/og/<slug>.jpg` a `public/og/<slug>.webp` — **vyjmenuj oba, nepoužívej hvězdičku** (`public/og/<slug>.*` by přibalilo zakázané `.png`)
    - `public/blog/<slug>/` — jen když má článek obrázky v textu
    - `blogger/research/<slug>/` — podklady a audity tvého runu (B3, C2–C5)
    - `blogger/JAZYK_AUDIT_LOG.md` — řádek z C6, přidává se **vždy**
    - `blogger/JAZYK_SLOVNIK.md` — jen když v C6 vzniklo nové pravidlo
    - `blogger/obsahovy-plan.csv` — **NE v publikačním commitu.** Uzávěr jde samostatným commitem až po zeleném CI, viz níže
    - `blogger/REFRESH_QUEUE.md` — **jen zápis nálezu** do tabulky „Otevřené kandidáty".
      Refresh existujícího článku neděláš, ale nález o něm zapsat smíš a máš.

    Nic jiného. **`.png` do commitu nepatří.**
  - commit `Blog: …` → `git push origin main` → CI ~1–2 min
  - verifikace: `curl -sSI .../blog/<slug>/` → 200, **`curl -sSI .../og/<slug>.jpg` → 200**, listing `/blog/`, sitemap, JSON-LD (≥ 2); **mobilní kontrola na 375 px ve dvou krocích, viz níže**.; očima karta + hero

  **Mobilní kontrola (375 px) — dva kroky, nezaměňovat.**

  **1. Strojově změř přesah.** Nespoléhej na oko, přesah je měřitelný. V náhledu
  nastav viewport na **375 px** (ne 390) a spusť v konzoli:

  ```js
  (() => {
    const vw = document.documentElement.clientWidth;
    const klipuje = el => ['auto','scroll','hidden','clip'].includes(getComputedStyle(el).overflowX);
    const bad = [];
    document.querySelectorAll('main *').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || (r.right <= vw + 1 && r.left >= -1)) return;
      let p = el.parentElement, orezano = false;
      while (p && p !== document.documentElement) { if (klipuje(p)) { orezano = true; break; } p = p.parentElement; }
      if (!orezano) bad.push({ tag: el.tagName.toLowerCase(), cls: (el.className||'').toString().slice(0,45) });
    });
    return { strankaScrollujeVodorovne: document.documentElement.scrollWidth > vw, pretekajicich: bad.length, nalez: bad.slice(0,5) };
  })()
  ```

  Musí vrátit `pretekajicich: 0` a `strankaScrollujeVodorovne: false`. **Ověřeno
  17. 9. 2026** oběma směry: na čistém článku vrací 0, na nasimulovaném dlouhém
  `linkLabel` v `SourceCard` vadu chytí. Klipující předky přeskakuje schválně —
  široká tabulka ve scrollovacím obalu není vada.

  **2. Teprve pak projdi článek okem.** Nejdřív si **vypiš použité typy bloků** a
  každý zkontroluj v čitelné velikosti shora dolů. Oko řeší to, co skript neumí
  posoudit: čitelnost, ořez obrázků, zalomení nadpisů, pořadí prvků.
  **Celostránkový zmenšený snímek ani šířka dokumentu vizuální kontrolu nenahrazují.**

  Do reportu piš **jen skutečně provedené kontroly**. Po dokončení vrať viewport zpět.

  Když přeteče komponenta a ne tvůj text, **neobcházej to zkrácením obsahu** — zapiš
  nález do `cross-session/aiseo-optimalizace.md` pro vývojovou session.
- **D4 — Uzávěr tabulky:** v `obsahovy-plan.csv` nastav `Publikováno = ano` a `URL` **jen u právě publikovaného nového článku**. Přeskočené ani další tematicky příbuzné řádky neměň. Zápis a kontrolu CRLF proveď stejně jako v A5. Commituj.

  > **Pořadí je závazné, uzávěr jde až nakonec.**
  > 1. Commitni článek, obrázky, rešerši a audity. **Bez `obsahovy-plan.csv`.**
  > 2. Pushni, počkej na **zelené CI** a ověř živou stránku (D3).
  > 3. Teprve pak nastav `Publikováno = ano` + URL a udělej **samostatný commit uzávěru**.
  >
  > Důvod: ve sloučeném commitu tabulka tvrdí `ano` dřív, než CI doběhne — a když
  > nasazení spadne, zůstane v plánu nepublikovaný článek označený jako publikovaný.
  > Řádek plánu je evidence, ne předpověď.
- **D5 — Report:** vlož URL nového článku do vlákna. Po netriviálním researchi krátký záznam do `cross-session/aiseo-optimalizace.md`.

---

## 📊 Legenda obsahového plánu (`obsahovy-plan.csv`)

| Sloupec | Název | Obsah |
|---|---|---|
| A | Klíčové slovo | Hlavní cílové klíčové slovo |
| B | Téma | Téma / rozšířená klíčová slova / zadání |
| C | Pokyny | Varování (kanibalizace, update vs. nový) — **vždy přečíst v B1** |
| D | Kategorie | `tutorial` · `analysis` · `defensive` · `case-study` → jde přímo do `category` frontmatteru. **Prázdné = urči podle obsahu a rovnou doplň** (viz C1). Přejmenováno z „Typ“ 16. 9. 2026 — dřív bylo ve všech řádcích `článek` a nic neneslo |
| E | Publikováno | Default `ne`; po publikaci `ano` |
| F | URL | Po publikaci doplnit |

---

## 🚫 Pravidla a hranice (no-go)

- **Edituji:** `src/content/articles/<slug>.mdx`, `public/blog/<slug>/`, `public/og/<slug>.jpg` + `.webp`, `blogger/obsahovy-plan.csv`, `blogger/research/<slug>/`. Importuji (ne edituji) komponenty z `src/components/blocks/`.
- **NESahám** na `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/content/sections|pillar/`, `_source/`, `worker/`, `astro.config.mjs`, `package.json`, `.github/`, `CLAUDE.md`.
- **Neaktualizuji již publikované články.** Refreshe řeší jiný nástroj; související nález pouze doložím v podkladech a projektovém záznamu.
- **Neuzavírám jiné řádky plánu** jen proto, že je nový článek částečně pokrývá. Codex
  uzavírá výhradně řádek právě publikovaného článku; slučování a bloky oprav patří druhé větvi.
- **Slug po publikaci NIKDY neměnit.** `updated:` nikdy v budoucnosti.
- **Žádné secrets** v textu, promptu, logu ani gitu.
- **Žádné `--no-verify`, `--force`, `--no-check`.**
- **Auditor neurčuje, rozhoduji já** — ale odmítnutí nálezu musí být doložené.
- **Jeden subagent nedělá dvě role.** Autor neaudituje, auditor faktů nedělá závěrečné posouzení.

---

## ✅ Per-run checklist

- [ ] Nenačetl jsem `blogger/` plošně ani **cizí podsložky** `research/` (do vlastní `research/<slug>/` zapisovat mám)
- [ ] Start: `git fetch origin` + kontrola nových commitů proti `origin/main`
- [ ] A: trend research → **1 nový řádek** v `obsahovy-plan.csv` (nebo žádný, když nic nestojí za zařazení); **duplicity kontrolovány dvoukrokově**; šest sloupců a CRLF ověřeny
- [ ] B: vybrán prioritní, jinak první volný řádek **pro nový článek**, **přečten sloupec C**, stav ověřen po fetchi, názvy i text korpusu prohledány, řádky pro refresh přeskočeny beze změny, research + KW, **zdroje zapsané v `research.md`**
- [ ] C1: draft s answer + FAQ + CTA, **8 povinných polí včetně `tags`**, `variant: "rich"`, **bez `howto` a `stats`**, design komponenty hotové, brand voice OK
- [ ] **C1b: titulek pro SERP** — `seoTitle` do 60 znaků, nebo vědomé rozhodnutí, že stačí `title`
- [ ] C2 + C3: **dva samostatní subagenti** (fakta, jazyk), nálezy s důkazy a **označením zásadní/drobný**; auditor faktů měl pokyn hledat vlastní zdroje a protidůkazy
- [ ] C4: vypořádání každého nálezu zapsané v `vyporadani.md`, odmítnutí doložená
- [ ] C5: **třetí subagent** — nejdřív samostatné posouzení, pak kontrola vypořádání
- [ ] **C5b: zásadní nálezy doověřeny** (max 1 kolo navíc, pak eskalace na člověka)
- [ ] **C6: `jazyk-check.py` na 0 nálezů** + případná nová pravidla do slovníku
- [ ] D1: design komponenty hotové **už před audity** (v C1), `.mdx` + `variant: rich`, žádný wall of text
- [ ] D2: featured image z doslovné preambule §5, `.jpg` + `.webp` (CZ text v horních ~84 %, zkontrolováno na ořezu), **PNG smazané**
- [ ] D3: `npm run build` OK + text každé použité komponenty nalezen v `dist/` → druhý fetch a kontrola souběhu → jmenovité stagování → commit → push → CI → curl 200 (článek i `og/<slug>.jpg`)
- [ ] D4: jen vlastní řádek tabulky `E = ano`, `F = URL`; šest sloupců a CRLF znovu ověřeny
- [ ] D5: URL do vlákna
