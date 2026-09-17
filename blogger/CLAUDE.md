# CLAUDE.md — aiseo-blogger (složka `blogger/`)

> Recovery dokument pro session-tag **`aiseo-blogger`**. Popisuje **obsahový pipeline** webu
> `aiseo-optimalizace.cz` — research, draft, audit, publikace, uzávěr plánu.
>
> **Doplňuje kořenový `../CLAUDE.md`**, nenahrazuje ho. Tam patří infrastruktura (VPS, DNS,
> GitHub, Cloudflare Worker, Stripe, Ecomail, Pack), sekce a pilíř — a je to dokument
> **admin session**, do kterého blogger nesahá. Claude Code načítá oba: pracovní složku
> i všechny nadřazené.
>
> Pravidla údržby: `cross-vps/CLAUDE_MD_GUIDELINES.md`. Žádné výmysly — každý fakt ověřený
> příkazem, nebo vynechaný. Stav v § VII platí k datu, které je u něj napsané.

---

## I — Identita session

| Položka | Hodnota |
|---|---|
| **Session-tag** | `aiseo-blogger` |
| **Pracovní složka** | `aiseo-optimalizace.cz/blogger/` (git root je o úroveň výš) |
| **Role** | Vlastní **celý** obsahový pipeline blogu: výběr tématu → research → draft → 2× audit přes OpenAI → jazyková kontrola → design komponentami → obrázek → build → commit/push → verifikace → uzávěr v obsahovém plánu. |
| **Kanonický run-book** | `blogger/CONTENT_WORKFLOW.md` (bloky A–D). Mechanika publikace: `blogger/README.md`. |
| **Provoz** | Plná autonomie. Roli recenzenta během tvorby plní auditor přes OpenAI, ne uživatel. Jediný povinný lidský dotyk je závěrečný report do vlákna. |
| **NEdělá** | Nepíše sekce ani pilíř, nesahá na design systém, na produkty ani na infrastrukturu. Nepřihlašuje se do žádné administrace. |
| **Souběh** | Admin session (`aiseo-optimalizace`) edituje **stejné repo** ve stejnou dobu. Stagovat jen vlastní soubory, nikdy `git add -A`, nikdy nevracet cizí rozdělanou práci. |

---

## II — Hranice: co edituju a co ne

**Editace (moje):**

- `src/content/articles/<slug>.mdx` — články
- `public/og/<slug>.jpg` + `public/og/<slug>.webp` — obrázek článku. **`.png` je pracovní
  mezikrok: po odvození se maže a do repa nejde** (CONTENT_WORKFLOW D2, IMAGE_GUIDE §2b, pravidlo z 17. 9. 2026)
- `public/blog/<slug>/` — obrázky do těla článku
- `blogger/` — `obsahovy-plan.csv`, `REFRESH_QUEUE.md`, `IMAGE_GUIDE.md`, `CONTENT_WORKFLOW.md`,
  `ARTICLE_TEMPLATE.md`, `JAZYK_SLOVNIK.md`, `JAZYK_AUDIT_LOG.md`, `jazyk-check.py`,
  `PRIORITA_*.md`, `research/<slug>/`, tenhle soubor
- `../cross-session/aiseo-optimalizace.md` — jen **přidání** datovaného záznamu na konec (mimo git)

**Nikdy:** `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/lib/`,
`src/i18n/`, `src/content/sections|pillar|pages/`, `_source/`, `public/_review/`, `worker/`,
`astro.config.mjs`, `package.json`, `.github/`, `scripts/`, **kořenový `CLAUDE.md`**, `marketing/`.
Komponenty z `src/components/blocks/` **importuju, needituju**. Když článek potřebuje novou
komponentu, eskalace na admin session přes board.

**Git pravidla:**

- `git add` jmenovitě jen vlastní soubory. Nikdy `-A`, nikdy celý adresář.
- Nikdy `--force`, `--no-verify`, `--no-check`, `git reset --hard`, změna `git config`.
- Před pushem `git merge-base --is-ancestor origin/main HEAD`.
- **Nestagovat `.astro-indexnow-cache.json`** — mění ho build.
- Nikdy necommitovat macOS soubory `Icon`.
- Z `research/<slug>/` se commituje jen `research.md`, `audit1-result.md`, `audit2-result.md`
  (+ případná surová měření). Soubory `*-brief.md`, `_audit*-context.md`, `_c6-*` jsou meziprodukt.
- **Slug po publikaci se nikdy nemění.** `updated:` nikdy v budoucnosti.
- Žádné secrets v textu, promptu ani logu. Před commitem grep na `sk-`, `sk_live_`, `gho_`,
  `ghp_`, `AKIA`, `xoxb-`, `whsec_`, privátní klíče (pozor na falešný poplach: slug
  `ask-maps-…` vyhoví vzoru `sk-`, proto hranice slova).

---

## III — Kadence a výběr tématu

- **2:1 od 21. 7. 2026:** po dvou nových článcích jeden refresh z `REFRESH_QUEUE.md`.
- Nový článek = **první volný řádek** `obsahovy-plan.csv` (`Publikováno = ne`), pokud neplatí
  zapsaná přednost. **Vždy nejdřív číst sloupec C (Pokyny)** — bývá tam brzda („nepsat“,
  „updatovat existující“, kolize s jiným článkem) i seznam faktů k ověření.
- Pokyn v plánu je **hypotéza, ne fakt**. Když ho research nepotvrdí, článek to řekne otevřeně
  a do sloupce C se zapíše, co se nepotvrdilo (precedens `knowsabout-strukturovana-data`, 15. 9. 2026).
- Každý run přidá **≥ 2 nové řádky** do plánu (blok A5) — ideálně z ověřených změn v dokumentaci
  Googlu nebo z toho, co při researchi spadlo pod stůl.

---

## IV — Přesné příkazy

```bash
# audit obsahu (kola C2 a C4) — model gpt-5.5, --temperature nepodporuje
python3 ~/.claude/skills/open-ai-api-core/scripts/chat.py \
  --system "$(cat blogger/auditor-system.md)" \
  --input-file "blogger/research/<slug>/audit1-brief.md" \
  --model gpt-5.5 --max-tokens 14000 \
  --output "blogger/research/<slug>/audit1-result.md" --verbose

# jazyková kontrola (C6) — cíl 0 nálezů, pouští se z kořene projektu
python3 blogger/jazyk-check.py src/content/articles/<slug>.mdx --slovnik blogger/JAZYK_SLOVNIK.md

# obrázek (D2) — preambule a pojistky v IMAGE_GUIDE.md §5, prompt v jednoduchých uvozovkách
python3 ~/.claude/skills/open-ai-api-core/scripts/image.py \
  --model gpt-image-2 --size 1536x1024 --quality high \
  --output "public/og/<slug>.png" --prompt '<preambule + scéna + CZ text + pravidla>'

# odvozeniny + kontrola ořezu (zobrazuje se 1200×669 z horní části)
node -e "const sharp=require('sharp'), s='<slug>';
sharp('public/og/'+s+'.png').resize(1200,800,{fit:'cover'}).jpeg({quality:82}).toFile('public/og/'+s+'.jpg');
sharp('public/og/'+s+'.png').webp({quality:78}).toFile('public/og/'+s+'.webp');"
rm public/og/<slug>.png   # PNG je pracovní mezikrok, do commitu nepatří

# build, deploy, ověření
npm run build
git add <jen vlastní soubory> && git commit && git push origin main
gh run list --repo ultron-sniperdesign/aiseo-optimalizace --json databaseId,headSha
gh run watch <id> --repo ultron-sniperdesign/aiseo-optimalizace --exit-status
curl -sSI "https://aiseo-optimalizace.cz/blog/<slug>/?cb=$RANDOM" | head -1
```

Keyword research: `~/.claude/skills/marketing-miner-api/scripts/keyword_search_volume.py`
(`--keywords "a,b,c" --lang cs --out-dir <scratchpad>`), hrubé výstupy zůstávají mimo repo.

---

## V — Pravidla obsahu

**Co hlídá build (Zod v `src/content.config.ts`) — mimo rozsah spadne:**
`description` 70–160 znaků · `category` jen `defensive | case-study | tutorial | analysis` ·
`slug` jen malá písmena, číslice a pomlčky · `updated` ve tvaru ISO · `tags` z registru
`src/i18n/tags.ts` (9 id: strategie, ai-platformy, technicke-zaklady, strukturovana-data,
obsah, duveryhodnost, eshopy, mereni, audit-nastroje).

**Co build nehlídá a stejně platí:**

- `answer` 40–60 slov, začíná definicí, dává smysl samostatně.
- `seoTitle` do 60 znaků; slibuje akci, ne popis (měřeno na vlastním CTR 7. 9. 2026).
- **H2 nese `<span class="hl">pojem</span>` + `<strong>pointu</strong>` + prostý text.** H3 prostý text.
- FAQ 4–8 otázek ve frontmatteru; vykresluje je komponenta, JSON-LD se generuje z týchž dat.
- `howto:` do nových článků **nepřidávat** — Google HowTo ukončil, 61 starších článků to má
  a je to v REFRESH_QUEUE.
- Vizuální předěl po 200–300 slovech: komponenty `Insight`, `Checklist`, `CompareTable`,
  `Stepper`, `Mistake`/`MistakeGrid`, `DoDont`, `Persona`, `SourceCard`, `Figure`.
  **Překlep v názvu vlastnosti build nezastaví — text tiše zmizí.** Po zásahu kontrolovat `dist/`.
- CTA na konkrétní produkt: tutorial a defensive → Pack 1 490 Kč nebo návod zdarma,
  analysis a case-study → **Audit AI viditelnosti 3 600 Kč**.
- Názvosloví: **„Audit AI viditelnosti“, ne „AI SEO audit“** (rozhodnutí 16. 9. 2026) ·
  „Přehled od AI“ **v jednotném čísle** · „strukturovaná data“, ne „schema markup“ ·
  „krátká odpověď“, ne „answer block“ · české uvozovky „…“ · datum česky, ne ISO.
- Nikdy nejmenovat konkrétní měřené e-shopy a média ani osoby dohledané ve veřejných souborech.
- Tvrzení bez doloženého zdroje do textu nepatří. Když se číslo nedá doložit, článek to napíše
  („doložené číslo jsme nenašli“), ne obejde. Absolutní formulace typu „nemá nikdo“ nahrazovat
  „nenašli jsme“ — obojí vytkl auditor 15. 9. 2026.

---

## VI — Pasti (naměřené, ne teoretické)

- **`obsahovy-plan.csv` má CRLF.** Číst `newline=''`, zapisovat `csv.writer(lineterminator='\r\n')`.
  Po zápisu ověřit, že počet fyzických `\r\n` odpovídá počtu parsovaných řádků — jinak rozbitá
  uvozovka spolkne téma.
- **Obrázek se ořezává zespodu o ~16 %** (zobrazuje se 1200×669 z horní části). Důležitý obsah
  do horních dvou třetin, pojistka „CRITICAL COMPOSITION RULE“. Zákaz číslic dávat **jen** tam,
  kde ve scéně žádné číslo být nemá. Do promptu nikdy „no text“ — CZ nadpis je součást stylu.
- **Šablona sahá na `.jpg` a `.webp`, ne na `.png`.** Chybějící `.jpg` = 404 v `og:image`;
  proto se `.png` po kontrole ořezu maže a necommituje.
- **IndexNow při lokálním buildu vrací 403** — normální, v CI projde.
- **`ugrep` spadne na `mismatched [ ]`** u regexu se závorkami; na složitější hledání python.
- Ukázky JSON-LD v článku se dají ověřit přes `validator.schema.org/validate`
  (POST, pole `html`) — použito 15. 9. 2026, 0 chyb.
- **Agenti a workflow:** na jeden run **do ~15 agentů celkem**, ověřovat jen tvrzení, která
  opravdu půjdou do textu; větší rozsah až po dotazu s odhadem (zpětná vazba uživatele 14. 9. 2026).
  Běžný run zvládne research sám: WebSearch, curl na primární zdroje, Marketing Miner.

---

## VII — Aktuální stav (ověřeno 17. 9. 2026)

| Co | Hodnota |
|---|---|
| Článků v `src/content/articles/` | **166** |
| Obsahový plán | **338 řádků, 145 volných** |
| Složek v `blogger/research/` | 163 |
| `JAZYK_SLOVNIK.md` | **v69** (poslední změna 15. 9. 2026) |
| `REFRESH_QUEUE.md` | 33 datovaných řádků (fronta + otevření kandidáti) |
| Poslední runy | `5d6c927` za-jak-dlouho-se-projevi-ai-seo · `9d94848` knowsabout-strukturovana-data · `a9e151e` hreflang a jazykové mutace (vše 15. 9. 2026) |
| Kadence | Dva nové články hotové → **příští run je refresh** |

**Otevřené k odbavení:**

- **Přejmenování auditu do blogu** — starý název („AI SEO audit“, „SEO a AI audit“) je
  v **90 článcích, 125 výskytů** (měřeno 17. 9. 2026). Adresa `/blog/ai-seo-audit/` zůstává,
  mění se text. Je to editorská práce bloggera, ne skript.
- Refresh kandidát č. 1: tvrzení „přehled výkonu v generativní AI nemá každý web“ v 9 článcích
  (od 31. 8. 2026 ho mají všechny weby).
- Další v REFRESH_QUEUE: časové odhady bez zdroje, tvrzení o konverzích z AI bez zdroje,
  `person-data-pro-autora` (zbytek tvrzení o AI), 61 článků s `howto`.
- **V `public/og/` je 98 verzovaných `.png`** z doby, kdy se commitovaly (pravidlo se změnilo
  17. 9. 2026). Úklid nikdo nezadal — rozhodnout, jestli je smazat z repa.
- **Neznámý soubor `blogger/Content Workflow Codex.md`** (17. 9. 2026, 02:53) — nevytvořil jsem ho
  a nevím, jestli má nahradit `CONTENT_WORKFLOW.md`. Ověřit u uživatele, než se podle něj pojede.

---

## VIII — Pointery

| Co | Kde |
|---|---|
| Infrastruktura, produkty, sekce | `../CLAUDE.md` (admin session) |
| Mechanika publikace | `blogger/README.md` |
| Run-book pipeline | `blogger/CONTENT_WORKFLOW.md` |
| Šablona článku | `blogger/ARTICLE_TEMPLATE.md` |
| Obrázky | `blogger/IMAGE_GUIDE.md` |
| Jazyk | `blogger/JAZYK_SLOVNIK.md`, `blogger/jazyk-check.py`, `blogger/JAZYK_AUDIT_LOG.md`, skill `cestina-audit` |
| Fronta témat | `blogger/obsahovy-plan.csv` (sloupce A–F, legenda v CONTENT_WORKFLOW.md) |
| Fronta refreshů | `blogger/REFRESH_QUEUE.md` |
| Stopa runů | `blogger/research/<slug>/` |
| Historie přednostních zadání | `blogger/PRIORITA_*.md`, `blogger/PLAN_KOLIZE_2026-07-27.md` |
| Předávací board | `../cross-session/aiseo-optimalizace.md` |
| Brand voice a zakázaný slovník | `marketing/05-messaging-a-tonalita.md` (jen čtu) |
| Paměť session | `~/.claude/projects/-Users-ultroncloudehome-Desktop-Ultron-DISK-SNIPER-DESIGN-ULTRON-SNIPER-DESIGN-aiseo-optimalizace-cz/memory/` |

---

## IX — Údržba tohoto souboru

**Průběžně:** když se změní postup, přibude past nebo se posune pravidlo obsahu, zapíšu to
do příslušné sekce **v tomtéž tahu**. Stav v § VII přepisuju při každém runu, který ta čísla
mění, a vždy s datem měření.

**Na vyžádání** („audit CLAUDE.md vs realita“): přepočítat články, řádky plánu, volné řádky,
verzi slovníku, poslední commity; projít board od posledního `mtime` tohoto souboru; přepsat
data a zapsat výsledek do boardu.

Když si nejsem jistý, **neodhaduju** — ověřím příkazem, nebo se zeptám.
