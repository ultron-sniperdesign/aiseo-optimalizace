# Content workflow — research → draft → audit → publish

> **Pro koho:** blogger session (`aiseo-blogger`) s rozšířenou rolí — **vlastní celý
> obsahový pipeline** od výzkumu tématu po publikaci a uzávěr v obsahovém plánu.
>
> **Vztah k ostatním dokumentům:**
> - `blogger/README.md` — mechanika **publikace** (frontmatter, build, commit, deploy, verifikace). Tento dokument ji v BLOKu D používá, neopakuje.
> - `blogger/ARTICLE_TEMPLATE.md` — kopírovatelná šablona článku.
> - `blogger/obsahovy-plan.csv` — fronta témat (zdroj práce + evidence publikací).
> - `marketing/05-messaging-a-tonalita.md` — brand voice + zakázaný slovník.
> - `docs/section-page-standard.md` — komponenty pro design optimalizaci (BLOK D1).
> - `blogger/IMAGE_GUIDE.md` — featured / OG image (BLOK D2).
> - `blogger/JAZYK_SLOVNIK.md` + `blogger/jazyk-check.py` — jazyková kontrola (BLOK C6), skill `cestina-audit`.
>
> **Režim provozu:** plná autonomie. Jediný lidský dotyk je závěrečný report URL
> do vlákna (D4). Roli „recenzenta" během tvorby plní OpenAI auditor (BLOK C), ne uživatel.
>
> **1 run = 1 publikovaná změna na webu** — buď nový článek, nebo refresh existujícího podle kadence 2:1 (viz A6). Refresh je plnohodnotný run: má vlastní research, audit i uzávěr, jen místo nového souboru bumpne `updated:` u stávajícího.

---

## 🧰 Nástroje a cesty (ověřeno 2026-09-15)

> Při ověření 15. 9. 2026 existovaly všechny uvedené cesty, skripty i komponenty.

### Zásada u modelů: jedeme na nejnovějším

**Používáme vždy nejnovější dostupný model.** Starší verze držíme jen do doby, než se přechod ověří.

Aktuálně nasazené (stav k 15. 9. 2026, všechny ověřeny jako dostupné v API):

| Krok | Model |
|---|---|
| Audit obsahu (C2, C4) | `gpt-5.5` |
| Jazyková kontrola, LLM průchod (C6) | `gpt-5.4` |
| Featured / OG image (D2) | `gpt-image-2` |

**Když najdeš novější model, model v workflow neměň sám — napiš mi o to.** V žádosti uveď:

1. Který krok se týká a jaký model navrhuješ.
2. Co konkrétně by se zlepšilo (kvalita výstupu, cena, rychlost, delší kontext).
3. Jaké je riziko přechodu — u auditu se může změnit formát výstupu, u obrázku kvalita české diakritiky.

Aktuální seznam si zjistíš takto:

```bash
curl -s -H "Authorization: Bearer $OPENAI_API_KEY" https://api.openai.com/v1/models \
  | python3 -c "import sys,json;[print(m['id']) for m in sorted(json.load(sys.stdin)['data'],key=lambda x:x['id']) if m['id'].startswith(('gpt-5','gpt-6','gpt-image'))]"
```

| Účel | Skill / nástroj | Cesta / volání |
|---|---|---|
| Trend & téma research | `WebSearch` (built-in) | klasický vyhledávací research |
| Keyword research + Trends | `marketing-miner-api` | `~/.claude/skills/marketing-miner-api/` · venv i token hotové, viz A2 — **nic neinstalovat** |
| Audit obsahu | `open-ai-api-core` | `~/.claude/skills/open-ai-api-core/scripts/chat.py` · env `OPENAI_API_KEY` (v `.env` skillu) |
| Featured / OG image | `open-ai-api-core` | `~/.claude/skills/open-ai-api-core/scripts/image.py` · `gpt-image-2` → **do repa jde `public/og/<slug>.jpg` + `.webp`** · viz `IMAGE_GUIDE.md` |
| Design komponenty | `docs/section-page-standard.md` | `src/components/blocks/*.astro` |
| Publikace | viz `blogger/README.md` | `npm run build` → git → CI |

> ❌ **NEpoužívat** `open-ai-api-clanky-md` / `*-faq-produkty-md` / `*-md-texty` — to jsou
> MEGA DETAIL skilly se zadrátovaným promptem. Draft píšu **já přímo**; OpenAI Core slouží jen k **auditu**.

---

## BLOK A — Údržba obsahového plánu (start každého runu)

Cíl: udržet `blogger/obsahovy-plan.csv` živý a najít, na čem pracovat.

- **A1 — Trend research (širokozáběr):** `WebSearch` napříč tématem → aktuální trendy, nové dotazy, co řeší konkurence. Zkratky *AI SEO · GEO · AEO · AIO* jsou jen jedním z okruhů, ne celý záběr. Reálné pokrytí webu (podle tagů, k 15. 9. 2026):

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
- **A2 — Marketing Miner + Google Trends:** doplň hledanost, návrhy a **Google Trends** (rising queries = včasné signály). Detaily v `~/.claude/skills/marketing-miner-api/SKILL.md`. SERP / konkurenční obsah jen u témat, kde to dává smysl (komerční/konkurenční).

  **Prostředí je hotové — nezakládej venv a nic neinstaluj.** README skillu sice popisuje `python3 -m venv .venv`, ale to je jednorázový setup, který už proběhl. Venv má `pytrends`, `pandas`, `requests` i `python-dotenv`; token se načte sám z `.env` skillu. Ověřeno 15. 9. 2026:

  ```bash
  ~/.claude/skills/marketing-miner-api/.venv/bin/python \
    ~/.claude/skills/marketing-miner-api/scripts/research_enrich.py \
    --keywords-file <složka>/keywords.csv --top 10 --enrich trends --geo CZ
  ```

  Vstup je CSV se sloupcem `keyword`. Skript si cesty doplní sám, jde spustit z libovolného adresáře. Dvě varování na startu (LibreSSL, pandas `FutureWarning`) jsou neškodná.

  **⚠️ Rising queries u málo hledaných spojení lžou — filtruj je.** Google k víceslovným dotazům s nízkou hledaností přimíchává nesouvisející výrazy a tváří se, že rostou. Změřeno 15. 9. 2026 na `ai seo` (CZ): vrátilo `books, pasta, vegetables, movies, museums` — žádné s tématem nesouvisí. U `e-shop`, `shoptet`, `chatgpt`, `seo` i `ai` přitom vrací data správně. Neexistující výraz vrátí prázdno, takže **šum nepoznáš podle toho, že chybí data — poznáš ho jen podle obsahu**.

  Pravidlo: **rising query, která nesdílí ani slovo se seed keywordem a není jeho známé synonymum, je šum → zahoď ji.** Když je takových víc než polovina, Trends pro to keyword nepoužívej vůbec a do `research.md` napiš, že data nebyla použitelná. Nikdy nepřebírej řádek „Souhrnně rostou" z `enrichment.md` bez téhle kontroly — skript ho skládá z nefiltrovaného výstupu.
- **A3 — Porovnání s webem (dvoukrokově):** k 15. 9. 2026 je v `src/content/articles/` **165 článků**, načíst je celé nejde. Postupuj takto:
  1. **Sken metadat všech článků s názvy souborů** — bez nich nepoznáš, ke kterému článku nález patří:
     ```bash
     grep -H "^title:\|^slug:\|^tags:" src/content/articles/*.mdx
     ```
  2. **H2 filtruj na téma, nedumpuj celý web.** Neomezený výpis má 1 076 unikátních nadpisů a 50 kB (měřeno 17. 9. 2026) — je to tři čtvrtiny celého skenu a nejmíň užitečná část. Cílený filtr na jedno téma vyjde na jednotky kB:
     ```bash
     grep -H "^## " src/content/articles/*.mdx | grep -i "<téma>"
     ```
  3. **Celé čti jen obsahově blízké kandidáty** — ty, kde se překrývá téma nebo klíčové slovo. Typicky 2–5 článků, ne 165.

  Tím zkontroluješ celý web a nezahltíš kontext. Přidej i pilíř a sekce (`src/content/sections|pillar/`).
- **A4 — Porovnání s tabulkou:** projdi `obsahovy-plan.csv` (řádky `Publikováno = ne`) → nepřidávej, co už čeká.
- **A5 — Zápis ≥ 2 nových řádků** do `obsahovy-plan.csv` (formát sloupců viz legenda níže). Vyplň A–E (**D = kategorie** ze čtveřice `tutorial`/`analysis`/`defensive`/`case-study`, E = `ne`), F nech prázdné.

  **U analytických témat rozlišuj tři věci a nepiš je do jedné věty:**
  1. **Otázka**, kterou má článek zodpovědět → sloupec B (Téma).
  2. **Teze k ověření** → sloupec C, uveď ji návěštím **`Teze:`**, ne `Data:`.
  3. **Doložená skutečnost** → sloupec C jako **`Data:`**, ale jen když k ní máš zdroj
     nebo vlastní měření, a ten zdroj rovnou uveď.

  Návěští `Data:` u nedoloženého tvrzení je past pro toho, kdo bude řádek zpracovávat —
  vezme ho jako hotové zadání a postaví na něm článek.
- **A6 — Refresh kadence 2:1 (od 2026-07-21):** po každých **2 nových článcích** odbav **1 refresh** z `blogger/REFRESH_QUEUE.md` (postup i priority tam). Důvod: baseline citací ukázala, že AI Mode/ChatGPT citují čerstvý obsah — starší články padají z citací na freshness.

  > ⚠️ **Refreshe dělá výhradně tahle (Claude) větev** — rozhodnutí z 15. 9. 2026. Codexová varianta (`Content Workflow Codex.md`) je má vypnuté a píše jen nové články. Fronta v `REFRESH_QUEUE.md` tedy stojí a padá na tomhle bloku; když ho vynecháš, neodbaví ji nikdo jiný. K 15. 9. 2026 v ní čeká 57 položek.
- **A7 — CZ-ukotvení (od 2026-07-21):** kde to dává smysl, ukotvi title/answer geograficky („v Česku", „pro český trh"). Z měření: ChatGPT u obecných dotazů cituje globální EN zdroje — český web se do citací dostane právě CZ-specifickou formulací.

---

## BLOK B — Výběr tématu a hloubkový research

- **B1 — Výběr tématu:** vezmi **první volný řádek** (`Publikováno = ne`). K 15. 9. 2026 jich čeká 145 a **žádná mimořádná přednost neplatí** — jede se pořadí fronty.

  > **Nejdřív přečti sloupec C (Pokyny).** Některé řádky mají varování: kanibalizace, „updatovat existující místo nového", riziko překryvu s pilířem. Pokud pokyn říká *nepsat / updatovat existující*, vyřeš řádek podle něj (např. UPDATE `geo-optimalizace.mdx` + bump `updated:`), ne slepě nový článek. Když řádek vyústí v „nepsat", nastav `E` smysluplně a přejdi na další volný.

  > **Pokyn v plánu je teze k ověření, ne doložený fakt.** Sloupec C u 218 z 338 řádků
  > začíná návěštím „Data:" a rovnou tvrdí závěr (ověřeno 17. 9. 2026; návěští „Teze:"
  > mají jen 2 řádky). To návěští neznamená, že je tvrzení doložené — znamená, že ho
  > někdo považoval za pravděpodobné, když řádek zakládal.
  >
  > **Teze z plánu proto vždy ověř v B2 a piš závěr podle zdrojů, ne podle plánu.**
  > Když ji zdroje nepotvrdí, uprav závěr článku a **rozdíl zapiš do podkladů runu** — jinak se
  > stejná neověřená teze vrátí příště v dalším řádku.
  >
  > **Pozor na záměnu „nedoloženo" za „prokázaně nulové".** Že se nenašla univerzální
  > hodnota, neznamená, že daná věc nemá vliv. Formuluj to, co zdroje unesou: *nemáme
  > doložený univerzální počet slov* není totéž jako *na délce nezáleží*. Tahle záměna
  > je nejčastější vada zděděná z plánu.
  >
  > **Když přednost vznikne**, zapíše se sem jako samostatný odstavec s datem. Po splnění se odsud **maže** — historie zůstane v `blogger/PRIORITA_<datum>.md`. (Dvě splněné přednosti z 26. 8. a 2. 9. 2026 odsud odstraněny 15. 9. 2026.)
- **B2 — Hloubkový research tématu:** cílený `WebSearch` na vybrané téma (fakta, zdroje, co pokrývají konkurenti) + cílená analýza KW na **Marketing Miner** (přesná hledanost, long-tail, sezónnost, rising queries pro FAQ — u úzkých témat bývají prázdné, náhrady viz C1).
  > **Navazující článek z plánu je kandidát na odkaz, ne povinný odkaz.** Než na něj
  > odkážeš, **otevři ho a přečti**. Když v něm najdeš nedoložené tvrzení, **odkaz
  > vynech** — interní odkaz je doporučení a nemá vést na text, který bys sám nenapsal.
  > Nález zapiš do tabulky „Otevřené kandidáty" v `REFRESH_QUEUE.md` a **článek neopravuj**;
  > refreshe dělá jiný nástroj. Vzor: 17. 9. 2026 měl nový text o délce obsahu odkazovat
  > na `aktualizace-obsahu-pro-ai`, ten má ale v dlaždicích intervaly „30–90 dní" se
  > zdrojem uvedeným jen jako „analýzy". Odkaz vypuštěn, nález předán.

- **B3 — Uložení podkladů:** kurátorovaný záznam runu ulož do `blogger/research/<slug>/research.md` (cílové KW, long-tail, highlighty z Trends, poznámky o konkurenci, zdroje) — commituje se jako stopa rozhodnutí. **Hrubé dumpy z Marketing Mineru** (kandidátní CSV, JSON) nech v `output/` skillu, do repa nedávej. Složka `blogger/research/` je mimo `src/` a `public/` → nedeployuje se.

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

---

## BLOK C — Draft a dvoukolová audit smyčka

- **C1 — První verze článku** podle `blogger/ARTICLE_TEMPLATE.md` + `blogger/README.md`:
  - Frontmatter: **8 povinných polí** — `title`, `description`, `answer`, `slug`, `category`, **`tags`**, `updated`, `keywords`. (`tags` se dřív v dokumentaci nepočítalo, má je všech 165 článků; ověřeno proti `src/content.config.ts` 15. 9. 2026.) Plus **`variant: "rich"`**, které schéma nevynucuje, ale bez něj se nevykreslí rich layout. `keywords` z B2.

  **`category` = sloupec D tabulky.** Schéma zná jen `tutorial`, `analysis`, `defensive`, `case-study` (`z.enum` v `src/content.config.ts`) — jiná hodnota shodí build. Sloupec D nese kategorii **od 16. 9. 2026**; do té doby se jmenoval „Typ" a měl `článek` ve všech 338 řádcích (nulová informace). Naplněn byl ze značek `Kategorie:` v Pokynech. Pořadí:
  1. **Hodnota ve sloupci D** — vyplněná u 276 z 338 řádků (analysis 145, tutorial 130, case-study 1).
  2. **Když je D prázdné** (62 řádků, z toho 46 reálně k napsání), urči kategorii podle obsahu — tabulka „Kategorie — co kam patří" v `README.md`. Orientačně: krok-za-krokem postup = `tutorial` (+ pole `howto`), měření / trend / rozbor dat = `analysis`, „jak omezit/vypnout" = `defensive`, konkrétní klient s čísly = `case-study`. Volbu zdůvodni v podkladech runu a **zvolenou hodnotu rovnou doplň do sloupce D**, ať ji příští běh neřeší znovu.
  3. Sloupec C (Pokyny) u některých řádků nese starší značku `Kategorie: …` i s kontextem (např. „tutorial (+ howto schema)"). **Přednost má sloupec D**; značka v Pokynech je jen doplňující text.
    **Formát H2 je závazný pro celý web.** Každý H2 nese `<span class="hl">klíčový pojem</span>` **i** `<strong>pointu</strong>` a prostý text mezi tím; H3 zůstávají prostý text. Plné znění v `CLAUDE.md` § VI, vzory nahoře v `ARTICLE_TEMPLATE.md`. Stav k 16. 9. 2026: sekce a pilíř 100 %, **blog jen 142 z 1 359 H2** — u nových článků to drž od začátku, retrofit starých je jiná práce.

- Tělo: `answer` (40–60 slov, sebestačná) → lead → 3–6 H2 sekcí (fakta z B2) → **FAQ** (z rising queries / „people also ask") → CTA na konkrétní produkt (tutorial/defensive → Pack nebo Free PDF; analysis/case-study → Audit). **Název a cenu produktu přečti před psaním CTA v `src/content/pages/{pack,audit,navod-zdarma}.ts`** — je to jediný zdroj pravdy. Nabídky se přejmenovávají (audit 16. 9. 2026) a opsaný název z dokumentace znamená druhé nasazení.

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
  a zapiš to do podkladů runu. Bez toho nejde poznat, jestli FAQ stojí na datech, nebo na dojmu.
  - Brand voice + zakázaný slovník dle `marketing/05-messaging-a-tonalita.md`.
  - **Vazba na aktuální rok:** kde to dává smysl, ukotvi titulek / obsah / `keywords` na aktuální rok (např. „…2026"); aktuální rok zjisti z dnešního data. Při aktualizaci staršího článku bumpni rok i `updated:`.
  - **Design komponenty rovnou tady, ne až v bloku D** (změna z 15. 9. 2026): rozbij text komponentami podle `docs/section-page-standard.md` — postup a výčet v **D1**. Důvod: při převodu odstavce do tabulky nebo kroků se ztrácejí výhrady („podle dokumentace", „většinou"), které se do buňky nevejdou. **Auditor musí vidět text v podobě, která půjde ven**, ne polotovar.
- **C2 — Audit #1 (OpenAI Core):** sestav brief = celý článek **včetně komponent** + **kontextový rámec** (viz blok níže, vč. aktuálního roku) → pošli auditorovi (system prompt = kanonický `blogger/auditor-system.md`, sdílený napříč runy):

  > **Auditor si smí a má hledat vlastní zdroje** (změna z 15. 9. 2026). Nedávej mu jen svůj výběr z B3 — na tom by ověřil jen to, cos našel ty, a nenašel by, cos přehlédl. Do briefu napiš výslovně: *ověř tvrzení proti zdrojům, které si najdeš sám, a aktivně hledej protidůkaz — nesnaž se tvrzení potvrdit, snaž se ho vyvrátit.* Nález bez doloženého zdroje se nezapracovává.

  ```bash
  python3 ~/.claude/skills/open-ai-api-core/scripts/chat.py \
    --system "$(cat blogger/auditor-system.md)" \
    --input-file "blogger/research/<slug>/audit1-brief.md" \
    --model gpt-5.5 \
    --max-tokens 8000 \
    --output "blogger/research/<slug>/audit1-result.md" \
    --verbose
  ```
  > `gpt-5.5` NEpodporuje `--temperature` (nech default). `--max-tokens` min. 5000, doporučeno 8000 — reasoning tokeny se počítají do limitu, jinak hrozí oříznutá odpověď.
- **C3 — Oprava #1:** zapracuj audit + vlastní úsudek (auditor není absolutní — rozhoduješ ty).
- **C4 — Audit #2 (OpenAI Core):** pošli opravenou verzi, v briefu **uveď, že jde o verzi po 1. auditu** (přilož i shrnutí, co jsi změnil). Stejné volání, `audit2-*`.
- **C5 — Oprava #2:** zapracuj + vlastní úsudek → **finální text**.
  > **„Opraveno" zapiš až po kontrole celého souboru.** Oprava výrazu nebo opakovaného
  > tvrzení skoro nikdy nesedí jen na jednom místě — stejná formulace bývá v nadpisu,
  > v tabulce, v `answer`, ve `faq` i v propsech komponent. Projeď celý `.mdx`
  > **včetně frontmatteru**:
  >
  > ```bash
  > grep -n -i "<opravovaný výraz>" src/content/articles/<slug>.mdx
  > ```
  >
  > Když některý výskyt zůstává záměrně, uveď ho v podkladech runu i s důvodem. Nezkontrolovaný
  > výskyt je horší než neopravený nález — vypořádání pak tvrdí nepravdu.
- **C5b — Doověření zásadních oprav** (od 15. 9. 2026): u nálezů, které auditor označil za **zásadní** (chybné číslo, neplatné tvrzení o platformě, nedoložený slib), **nestačí je označit za opravené**. Pošli opravenou pasáž zpátky auditorovi s otázkou, jestli oprava obstojí.
  - **Rozsah:** jen zásadní nálezy, ne stylistika.
    > **Před předáním auditorovi dokonči všechny související editace.** Během ověřování
  > kontrolovanou pasáž **neupravuj** — auditor by posuzoval stav, který už neplatí, a
  > vrátil by nález na něco, co je mezitím opravené. Když je změna během ověřování
  > nezbytná, ověřování zruš, změnu dokonči a pošli novou verzi.

- **Strop se počítá na nález, ne na článek — ale článek má vlastní strop.**
  - **Doověření téhož zásadního nálezu: jedno kolo navíc.** Když oprava ani po něm
    neobstojí, eskaluj na člověka do vlákna.
  - **Nový zásadní nález závěrečného auditora** není další kolo téhož — oprav ho a nech
    **jednou cíleně ověřit tím auditorem, který ho našel**.
  - **Ověření dokončené stylistické náhrady není kolo faktického auditu.**
  - **Globální strop: nejvýš dva nové zásadní nálezy po C5 odbav sám. Třetí eskaluj**,
    i když je nový a i kdyby byla oprava triviální. Tři nové zásadní nálezy po třech
    auditech neznamenají tři nehody, ale že s článkem je něco systémově špatně —
    a to je informace pro člověka, ne důvod k dalšímu kolu.
- **C6 — Jazyková kontrola (POVINNÁ, před buildem):** finální text projeď skillem `cestina-audit`. Bez ní se článek nepublikuje.

  ```bash
  python3 blogger/jazyk-check.py src/content/articles/<slug>.mdx --slovnik blogger/JAZYK_SLOVNIK.md
  ```

  1. **Mechanický průchod** — cíl je **0 nálezů** (⛔ i ⚠️). Nejčastější vada celého korpusu: česká uvozovka `„` zavřená rovnou `"`.
  2. **LLM průchod** — článek + celý slovník na gpt-5.4 se zadáním z `SKILL.md` (obsahuje i výčet toho, **co vadou není** — zavedená oborová mluva, zdomácnělé latinismy, běžná česká odborná spojení, názvy nástrojů a metrik).
  3. **Kontrola kontextu u každé náhrady** — pád, číslo, rod, význam v tomhle textu. Slovník navrhuje slovo, ne tvar.
  4. **Nový nález → pravidlo jen když je strojově rozpoznatelný.** Zapiš řádek do `blogger/JAZYK_AUDIT_LOG.md` u **každého** nálezu. Do `blogger/JAZYK_SLOVNIK.md` ale přidej regex jen tehdy, projde-li testem:

     > Poznám tu vadu spolehlivě **bez toho, abych rozuměl zbytku věty**?

     - **Ano** → pravidlo do slovníku (úroveň, regex, náhrada, důvod, původ). Typicky: anglicismus s českou náhradou, typografická vada, konkrétní fráze marketingové vaty.
     - **Ne** → **žádný regex**, jen záznam v auditním logu. Typicky: vada, o které rozhoduje význam věty, doloženost tvrzení nebo to, co je kolem. Mechanické zobecnění by začalo hlásit i správnou češtinu a checker by se stal nedůvěryhodným.

     Regex piš s hranicí slova `\b`, ať nechytá delší slova — drží to 299 z 313 současných pravidel (ověřeno 17. 9. 2026). Když vada závisí na kontextu, ale chceš na ni upozorňovat, patří na úroveň **⚠️** (řeší se u prvního výskytu), ne **⛔**. **A zúži ji na ten kontext** — plošný zákaz jednoho slova označí i správnou češtinu (pravidlo proti kalku *surface* hlásilo „povrch, na který se používá čistič"). K takovému pravidlu připiš do sloupce Proč **protipříklad** `Nechytá: «správné použití»`. Slovník i článek jdou **v jednom commitu**.

  > Plný postup a pojistky: `~/.claude/skills/cestina-audit/SKILL.md`. Slovník i checker jsou tam symlinky na soubory v tomhle projektu — pravidla se přidávají jen tady.

### Kontextový rámec pro auditora (vkládá se do briefu)

> Toto je marketingový a vzdělávací článek pro web **aiseo-optimalizace.cz** — edukativní web
> o AI éře vyhledávání (SEO/GEO/AEO/AIO). Web informuje o tématu a zároveň nabízí ke koupi
> **AI SEO Wireframe Pack** (PDF návod, 1 490 Kč) a **Audit AI viditelnosti** (3 600 Kč) — **aktuální znění vždy ověř v `src/content/pages/pack.ts` a `audit.ts`**, ne odsud. Provozovatel:
> Sniper Design (Zlatý partner Upgates od 2016, vlastní e-shop MEGA DETAIL).
> Auditor hodnotí: věcnou správnost, soulad s brand voice (žádný zakázaný žargon, žádný overclaim),
> citovatelnost pro AI (answer block, hustota faktů, FAQ), SEO (titulek, description 70–160, struktura),
> relevanci CTA. Uveď aktuální rok (např. 2026), podle kterého má auditor hodnotit aktuálnost.
> Vrať konkrétní seznam oprav, ne obecnosti.

---

## BLOK D — Design, featured image, publikace, uzávěr

- **D1 — Design optimalizace** — **dělá se už v C1, před audity** (změna z 15. 9. 2026). Tady zůstává jen referenční popis a kontrola, že je hotová. Podle `docs/section-page-standard.md` rozbij „wall of text" komponentami z `src/components/blocks/` (`DoDont`, `Stepper`, `Insight`, `Mistake`/`MistakeGrid`, `Persona`/`PersonaGrid`, `CompareTable`, `SourceCard`, `PromptList`…). Vizuální landmark min. každých 200–300 slov.
  - Článek je proto **`.mdx`** (kvůli importu komponent) + `variant: "rich"` ve frontmatteru.
  - Importy v hlavičce MDX za frontmatterem: `import X from "../../components/blocks/X.astro";`
- **D2 — Featured / OG image** (POVINNÁ — bez ní 404 na kartě i heru). Plný postup: `blogger/IMAGE_GUIDE.md`. V kostce:
  - Generuj přes `open-ai-api-core` / `image.py`, **model `gpt-image-2`**, `--size 1536x1024`, `--quality high`, `--output "public/og/<slug>.png"`. (NE difúzní modely — komolí češtinu.)
  - ⚠️ **To PNG je jen pracovní mezikrok. Do repa NEPATŘÍ** — po odvození `.jpg` a `.webp` ho smaž (`rm public/og/<slug>.png`). Šablona na `.png` nikde nesahá. Rozhodnutí z 15. 9. 2026; 98 starších článků má PNG v repu z doby, kdy to pravidlo neplatilo — nevadí, nové se nepřidávají.
  - Prompt = konstantní stylová preambule (flat vektor, indigo/navy, světlé pozadí, sparkles) + scéna k tématu + **CZ text vlevo nahoře** (hlavní KW + podtitul, správná diakritika). Šablona v `IMAGE_GUIDE.md` §5.
  - **Kompozice:** důležitý obsah do horních **~84 %** — zobrazení ořízne spodních ~16 %.
  - `--prompt` do **jednoduchých** uvozovek, uvnitř žádný apostrof.
  - ⛔ **Do promptu NIKDY `no text` / `no letters`** — CZ nadpis je povinná součást stylu. (Runy 51–62 na tomhle spadly: vznikla série tmavých abstraktních obrázků bez textu, přegenerováno 2026-07-27.)
  - **Zkontroluj** vygenerovaný PNG (Read): čitelný a správně napsaný CZ text + kompozice; jinak uprav prompt a regeneruj.
  - **Vyrob `.jpg` (1200×800) + `.webp` odvozeniny** — to jsou jediné dva soubory, které jdou do repa. Šablona sahá na `.jpg` (hero + og:image) a `.webp`. Příkaz v `IMAGE_GUIDE.md` §2b. Volitelnou master kopii do `_source/_blog-images/` **přeskakuji** — mimo blogger scope.
- **D3 — Publikace** (dle `blogger/README.md`):
  - `npm run build` (validace frontmatteru + komponent)
  - `git add` JEN vlastní soubory, **nikdy `-A`**. Úplný výčet toho, co run smí commitovat:
    - `src/content/articles/<slug>.mdx` — článek
    - `public/og/<slug>.jpg` a `public/og/<slug>.webp` — **vyjmenuj oba, nepoužívej hvězdičku** (`public/og/<slug>.*` by přibalilo zakázané `.png`, viz D2)
    - `public/blog/<slug>/` — jen když má článek obrázky v textu
    - `blogger/research/<slug>/` — podklady a audity tvého runu (B3)
    - `blogger/JAZYK_AUDIT_LOG.md` — řádek z C6, přidává se **vždy**
    - `blogger/JAZYK_SLOVNIK.md` — jen když v C6 vzniklo nové pravidlo
    - `blogger/obsahovy-plan.csv` — **NE v publikačním commitu.** Uzávěr jde samostatným commitem až po zeleném CI, viz níže
    - `blogger/REFRESH_QUEUE.md` — jen u refresh runu (A6)

    Nic jiného. **`.png` do commitu nepatří.**
  - commit `Blog: …` (obrázek jde se článkem) → `git push origin main` → CI ~1–2 min
  - verifikace: `curl -sSI .../blog/<slug>/` → 200, **`curl -sSI .../og/<slug>.jpg` → 200**, listing `/blog/`, sitemap, JSON-LD (≥ 2); **mobilní kontrola na 375 px ve dvou krocích, viz níže**.; očima karta + hero (text obrázku se neusekne)

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
- **D4 — Uzávěr tabulky:** v `obsahovy-plan.csv` u řádku nastav `Publikováno = ano` a `URL = https://aiseo-optimalizace.cz/blog/<slug>/`. Commituj (`Blog: obsahový plán — <slug> publikováno`).

  > **Pořadí je závazné, uzávěr jde až nakonec.**
  > 1. Commitni článek, obrázky, rešerši a audity. **Bez `obsahovy-plan.csv`.**
  > 2. Pushni, počkej na **zelené CI** a ověř živou stránku (D3).
  > 3. Teprve pak nastav `Publikováno = ano` + URL a udělej **samostatný commit uzávěru**.
  >
  > Důvod: ve sloučeném commitu tabulka tvrdí `ano` dřív, než CI doběhne — a když
  > nasazení spadne, zůstane v plánu nepublikovaný článek označený jako publikovaný.
  > Řádek plánu je evidence, ne předpověď.
- **D5 — Report:** vlož URL nového článku do vlákna ke kontrole obsahu. Po netriviálním researchi krátký záznam do `cross-session/aiseo-optimalizace.md`.

---

## 📊 Legenda obsahového plánu (`obsahovy-plan.csv`)

| Sloupec | Název | Obsah |
|---|---|---|
| A | Klíčové slovo | Hlavní cílové klíčové slovo nového obsahu |
| B | Téma | Téma / rozšířená klíčová slova / rozšířené zadání |
| C | Pokyny | Doplňující pokyny, varování (kanibalizace, update vs. nový) — **vždy přečíst v B1** |
| D | Kategorie | `tutorial` · `analysis` · `defensive` · `case-study` → jde přímo do `category` frontmatteru. **Prázdné = urči podle obsahu a rovnou doplň** (viz C1). Přejmenováno z „Typ“ 16. 9. 2026 — dřív bylo ve všech řádcích `článek` a nic neneslo |
| E | Publikováno (ano/ne) | Default `ne`; po publikaci `ano` |
| F | URL | Po publikaci doplnit `https://aiseo-optimalizace.cz/blog/<slug>/` |

---

## 🚫 Pravidla a hranice (no-go)

- **Edituji v rámci tohoto pipelinu:** `src/content/articles/<slug>.mdx`, `public/blog/<slug>/`, `public/og/<slug>.jpg` + `.webp`, `blogger/obsahovy-plan.csv`, `blogger/research/<slug>/`. Importuji (ne edituji) existující komponenty z `src/components/blocks/`.
- **NESahám** na `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/content/sections|pillar/`, `_source/`, `worker/`, `astro.config.mjs`, `package.json`, `.github/`, `CLAUDE.md`. Když potřebuju novou komponentu → eskalace na hlavní vlákno.
- **Slug po publikaci NIKDY neměnit.** `updated:` nikdy v budoucnosti.
- **Žádné secrets** (API klíče z env, nikdy do textu/promptu/logu/gitu).
- **Žádné `--no-verify`, `--force`, `--no-check`.**
- **Auditor neurčuje, rozhoduji já** — ale ignorovat ho jen s důvodem.

---

## ✅ Per-run checklist

- [ ] A: trend research → ≥ 2 nové řádky v `obsahovy-plan.csv`; **duplicity kontrolovány dvoukrokově** (metadata všech → celé jen blízké)
- [ ] B: vybrán první volný řádek, **přečten sloupec C**, hloubkový research + KW
- [ ] C1: draft s answer + FAQ + CTA, **8 povinných polí včetně `tags`**, `variant: "rich"`, brand voice OK
- [ ] **C1b: titulek pro SERP** — `seoTitle` do 60 znaků, nebo vědomé rozhodnutí, že stačí `title`. Popis nestačí, rozhoduje slib akce (viz `ARTICLE_TEMPLATE.md`)
- [ ] C2–C5: 2 kola OpenAI auditu zapracována (`--max-tokens` ≥ 5000), **auditor měl pokyn hledat vlastní zdroje a protidůkazy**
- [ ] **C5b: zásadní nálezy doověřeny** auditorem (max 1 kolo navíc, pak eskalace)
- [ ] **C6: jazyková kontrola — `jazyk-check.py` na 0 nálezů + LLM průchod + případná nová pravidla do slovníku**
- [ ] D1: design komponenty hotové **už před audity** (v C1), `.mdx` + `variant: rich`, žádný wall of text
- [ ] D2: featured image `public/og/<slug>.jpg` + `.webp` (gpt-image-2, 1536×1024, CZ text v horních ~84 %, zkontrolováno) — **pracovní `.png` smazáno, do repa nejde**
- [ ] D3: `npm run build` OK → commit (článek + `.jpg` + `.webp`) → push → CI → curl 200 (článek i `og/<slug>.jpg`)
- [ ] D4: tabulka `E = ano`, `F = URL`
- [ ] D5: URL do vlákna + (volitelně) záznam do per-projekt boardu
