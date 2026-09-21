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
- Nikdy necommitovat macOS soubory `Icon`.
- Co se z `research/<slug>/` commituje, určuje **Z18** v `CONTENT_WORKFLOW.md` (jedno místo).
  Meziprodukty (`*-brief.md`, `_*.md`) jsou od 21. 9. 2026 v `.gitignore`, takže `git status`
  zůstává čitelný — je to jediná pojistka proti stažení cizí rozdělané práce.
- **Slug po publikaci se nikdy nemění.** `updated:` nikdy v budoucnosti.
- Žádné secrets v textu, promptu ani logu. Příkaz na kontrolu před commitem je v `README.md` („Co NIKDY nedělat“).

---

## III — Kadence a výběr tématu

- **Kadence 2 + 1 + 1 (od 17. 9. 2026):** nový článek · nový článek · **refresh jednoho článku** ·
  **blok oprav** (jedna plošná vada napříč korpusem). Refresh není dávka článků a oprava není refresh —
  rozhodnutí uživatele 17. 9. 2026, protože se to dřív mísilo a nebylo poznat, co run je.
  Plošnou vadu nalezenou během jiného runu **zapiš do fronty a pokračuj**.
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

Jedno pravidlo, jedno místo — tady jen rozcestník:

- **Závazná pravidla Z1–Z15** (strop na ověřování, jména, Pack, název auditu, kdo co píše,
  obrázek, zápis do plánu, souběh, čísla z GA4, kolizní kontrola, uzávěr, bloky oprav,
  kontrola vykreslení, přednost AI Mode — splněno, neviditelná data) → `CONTENT_WORKFLOW.md`,
  sekce před blokem A.
- **Struktura článku, krátká odpověď, H2, FAQ, CTA, názvosloví** → `CONTENT_WORKFLOW.md` blok C
  a `ARTICLE_TEMPLATE.md`.
- **Frontmatter, co hlídá build, publikace a ověření** → `README.md`.
- **Obrázek** → `IMAGE_GUIDE.md`. **Jazyk** → `JAZYK_SLOVNIK.md` a `jazyk-check.py`.

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
- **Pole `stats` a `howto` se nepoužívají** (od 20. 9. 2026, pravidlo Z15) — nic je nevykreslovalo.
  Před přidáním nového pole frontmatteru ověř grepem, že ho šablona čte.
- **IndexNow při lokálním buildu vrací 403** — normální, v CI projde.
- **`ugrep` spadne na `mismatched [ ]`** u regexu se závorkami; na složitější hledání python.
- Ukázky JSON-LD v článku se dají ověřit přes `validator.schema.org/validate`
  (POST, pole `html`) — použito 15. 9. 2026, 0 chyb.
- **Agenti a workflow:** strop je pravidlo Z1 v `CONTENT_WORKFLOW.md`.

---

## VII — Aktuální stav

**Čísla se tady nedrží.** Zastarají do jednoho runu — 17. 9. 2026 tu stálo 172 článků
a slovník v70, o tři dny později to bylo 175 a v71. Změřený stav vypíše:

```bash
bash blogger/stav.sh
```

Vypíše počet článků, řádky a první volný řádek plánu, verzi a počet pravidel slovníku,
délku obou front, posledních 8 zásahů do blogu (z nich se čte pozice v kadenci 2 + 1 + 1)
a jestli lokální větev nezaostává za `origin/main`.

**Co je otevřené** patří do `REFRESH_QUEUE.md` (vady k refreshi a kandidáti) a do
`obsahovy-plan.csv` (témata). Ne sem — jinak to tu leží po odbavení dál. Jediná výjimka
je trvalý stav souběhu:

- **Blog píšou dvě blogger větve** (pravidlo Z5): tahle a Codex (`Content Workflow Codex.md`,
  jeho run-book — `CONTENT_WORKFLOW.md` nenahrazuje). Admin session dělá jen refreshe
  podložené daty. Před každým runem `git fetch` a `git log origin/main` (Z8, Z10).
- **Nejbližší blok oprav** je přejmenování auditu do blogu (Z4) — starý název je
  v 90 článcích, 125 výskytech.

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
