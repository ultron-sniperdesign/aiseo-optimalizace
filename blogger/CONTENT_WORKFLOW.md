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
>
> **Režim provozu:** plná autonomie. Jediný lidský dotyk je závěrečný report URL
> do vlákna (D4). Roli „recenzenta" během tvorby plní OpenAI auditor (BLOK C), ne uživatel.
>
> **1 run = 1 publikovaný článek.**

---

## 🧰 Nástroje a cesty (ověřeno 2026-05-18)

| Účel | Skill / nástroj | Cesta / volání |
|---|---|---|
| Trend & téma research | `WebSearch` (built-in) | klasický vyhledávací research |
| Keyword research + Trends | `marketing-miner-api` | `~/.claude/skills/marketing-miner-api/` · env `MARKETING_MINER_API_TOKEN` |
| Audit obsahu | `open-ai-api-core` | `~/.claude/skills/open-ai-api-core/scripts/chat.py` · env `OPENAI_API_KEY` (v `.env` skillu) |
| Featured / OG image | `open-ai-api-core` | `~/.claude/skills/open-ai-api-core/scripts/image.py` · `gpt-image-2` → `public/og/<slug>.png` · viz `IMAGE_GUIDE.md` |
| Design komponenty | `docs/section-page-standard.md` | `src/components/blocks/*.astro` |
| Publikace | viz `blogger/README.md` | `npm run build` → git → CI |

> ❌ **NEpoužívat** `open-ai-api-clanky-md` / `*-faq-produkty-md` / `*-md-texty` — to jsou
> MEGA DETAIL skilly se zadrátovaným promptem. Draft píšu **já přímo**; OpenAI Core slouží jen k **auditu**.

---

## BLOK A — Údržba obsahového plánu (start každého runu)

Cíl: udržet `blogger/obsahovy-plan.csv` živý a najít, na čem pracovat.

- **A1 — Trend research (širokozáběr):** `WebSearch` na okruh *SEO pro AI · AI SEO · GEO SEO · AEO · AIO* a přidružená témata → aktuální trendy, nové dotazy, co řeší konkurence.
- **A2 — Marketing Miner + Google Trends:** doplň hledanost, návrhy a **Google Trends** (rising queries = včasné signály). Detaily v `~/.claude/skills/marketing-miner-api/SKILL.md`. SERP / konkurenční obsah jen u témat, kde to dává smysl (komerční/konkurenční).
- **A3 — Porovnání s webem:** projdi 12 článků v `src/content/articles/` + pilíř/sekce → vyřaď duplicity, najdi mezery.
- **A4 — Porovnání s tabulkou:** projdi `obsahovy-plan.csv` (řádky `Publikováno = ne`) → nepřidávej, co už čeká.
- **A5 — Zápis ≥ 2 nových řádků** do `obsahovy-plan.csv` (formát sloupců viz legenda níže). Vyplň A–E (E = `ne`), F nech prázdné.
- **A6 — Refresh kadence 2:1 (od 2026-07-21):** po každých **2 nových článcích** odbav **1 refresh** z `blogger/REFRESH_QUEUE.md` (postup i priority tam). Důvod: baseline citací ukázala, že AI Mode/ChatGPT citují čerstvý obsah — starší články padají z citací na freshness.
- **A7 — CZ-ukotvení (od 2026-07-21):** kde to dává smysl, ukotvi title/answer geograficky („v Česku", „pro český trh"). Z měření: ChatGPT u obecných dotazů cituje globální EN zdroje — český web se do citací dostane právě CZ-specifickou formulací.

---

## BLOK B — Výběr tématu a hloubkový research

- **B1 — Výběr tématu:** vezmi **první volný řádek** (`Publikováno = ne`). **Nejdřív přečti sloupec C (Pokyny)** — některé řádky mají varování (kanibalizace, „updatovat existující místo nového", riziko překryvu s pilířem). Pokud pokyn říká *nepsat / updatovat existující*, vyřeš řádek podle něj (např. UPDATE `geo-optimalizace.mdx` + bump `updated:`), ne slepě nový článek. Když řádek vyústí v „nepsat", nastav `E` smysluplně a přejdi na další volný.
- **B2 — Hloubkový research tématu:** cílený `WebSearch` na vybrané téma (fakta, zdroje, co pokrývají konkurenti) + cílená analýza KW na **Marketing Miner** (přesná hledanost, long-tail, sezónnost, rising queries pro FAQ).
- **B3 — Uložení podkladů:** kurátorovaný záznam runu ulož do `blogger/research/<slug>/research.md` (cílové KW, long-tail, highlighty z Trends, poznámky o konkurenci, zdroje) — commituje se jako stopa rozhodnutí. **Hrubé dumpy z Marketing Mineru** (kandidátní CSV, JSON) nech v `output/` skillu, do repa nedávej. Složka `blogger/research/` je mimo `src/` a `public/` → nedeployuje se.

---

## BLOK C — Draft a dvoukolová audit smyčka

- **C1 — První verze článku** podle `blogger/ARTICLE_TEMPLATE.md` + `blogger/README.md`:
  - Frontmatter: 7 povinných polí, `category` ze sloupce D tabulky, `keywords` z B2.
  - Tělo: `answer` (40–60 slov, sebestačná) → lead → 3–6 H2 sekcí (fakta z B2) → **FAQ** (z rising queries / „people also ask") → CTA na konkrétní produkt (tutorial/defensive → Pack nebo Free PDF; analysis/case-study → Audit).
  - Brand voice + zakázaný slovník dle `marketing/05-messaging-a-tonalita.md`.
  - **Vazba na aktuální rok:** kde to dává smysl, ukotvi titulek / obsah / `keywords` na aktuální rok (např. „…2026"); aktuální rok zjisti z dnešního data. Při aktualizaci staršího článku bumpni rok i `updated:`.
- **C2 — Audit #1 (OpenAI Core):** sestav brief = celý článek + **kontextový rámec** (viz blok níže, vč. aktuálního roku) → pošli auditorovi (system prompt = kanonický `blogger/auditor-system.md`, sdílený napříč runy):

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

### Kontextový rámec pro auditora (vkládá se do briefu)

> Toto je marketingový a vzdělávací článek pro web **aiseo-optimalizace.cz** — edukativní web
> o AI éře vyhledávání (SEO/GEO/AEO/AIO). Web informuje o tématu a zároveň nabízí ke koupi
> **AI SEO Wireframe Pack** (PDF návod, 1 490 Kč) a **AI SEO audit** (9 990 Kč). Provozovatel:
> Sniperdesign (Zlatý partner Upgates od 2016, vlastní e-shop MEGA DETAIL).
> Auditor hodnotí: věcnou správnost, soulad s brand voice (žádný zakázaný žargon, žádný overclaim),
> citovatelnost pro AI (answer block, hustota faktů, FAQ), SEO (titulek, description 70–160, struktura),
> relevanci CTA. Uveď aktuální rok (např. 2026), podle kterého má auditor hodnotit aktuálnost.
> Vrať konkrétní seznam oprav, ne obecnosti.

---

## BLOK D — Design, featured image, publikace, uzávěr

- **D1 — Design optimalizace** (PŘED publikací — jeden deploy): podle `docs/section-page-standard.md` rozbij „wall of text" komponentami z `src/components/blocks/` (`DoDont`, `Stepper`, `Insight`, `Mistake`/`MistakeGrid`, `Persona`/`PersonaGrid`, `CompareTable`, `SourceCard`, `PromptList`…). Vizuální landmark min. každých 200–300 slov.
  - Článek je proto **`.mdx`** (kvůli importu komponent) + `variant: "rich"` ve frontmatteru.
  - Importy v hlavičce MDX za frontmatterem: `import X from "../../components/blocks/X.astro";`
- **D2 — Featured / OG image** (POVINNÁ — bez ní 404 na kartě i heru). Plný postup: `blogger/IMAGE_GUIDE.md`. V kostce:
  - Generuj přes `open-ai-api-core` / `image.py`, **model `gpt-image-2`**, `--size 1536x1024`, `--quality high`, `--output "public/og/<slug>.png"`. (NE difúzní modely — komolí češtinu.)
  - Prompt = konstantní stylová preambule (flat vektor, indigo/navy, světlé pozadí, sparkles) + scéna k tématu + **CZ text vlevo nahoře** (hlavní KW + podtitul, správná diakritika). Šablona v `IMAGE_GUIDE.md` §5.
  - **Kompozice:** důležitý obsah do horních **~84 %** — zobrazení ořízne spodních ~16 %.
  - `--prompt` do **jednoduchých** uvozovek, uvnitř žádný apostrof.
  - ⛔ **Do promptu NIKDY `no text` / `no letters`** — CZ nadpis je povinná součást stylu. (Runy 51–62 na tomhle spadly: vznikla série tmavých abstraktních obrázků bez textu, přegenerováno 2026-07-27.)
  - **Zkontroluj** vygenerovaný PNG (Read): čitelný a správně napsaný CZ text + kompozice; jinak uprav prompt a regeneruj.
  - **Vyrob `.jpg` (1200×800) + `.webp` odvozeniny** — šablona sahá na `.jpg` (hero + og:image) a `.webp`, na `.png` nikde. Příkaz v `IMAGE_GUIDE.md` §2b. Volitelnou master kopii do `_source/_blog-images/` **přeskakuji** — mimo blogger scope.
- **D3 — Publikace** (dle `blogger/README.md`):
  - `npm run build` (validace frontmatteru + komponent)
  - `git add` JEN vlastní soubory: `src/content/articles/<slug>.mdx` + **`public/og/<slug>.{png,jpg,webp}`** (povinně všechny tři) + případně `public/blog/<slug>/` — nikdy `-A`
  - commit `Blog: …` (obrázek jde se článkem) → `git push origin main` → CI ~1–2 min
  - verifikace: `curl -sSI .../blog/<slug>/` → 200, **`curl -sSI .../og/<slug>.png` → 200**, listing `/blog/`, sitemap, JSON-LD (≥ 2), IndexNow v CI logu; očima karta + hero (text obrázku se neusekne)
- **D4 — Uzávěr tabulky:** v `obsahovy-plan.csv` u řádku nastav `Publikováno = ano` a `URL = https://aiseo-optimalizace.cz/blog/<slug>/`. Commituj (`Blog: obsahový plán — <slug> publikováno`).
- **D5 — Report:** vlož URL nového článku do vlákna ke kontrole obsahu. Po netriviálním researchi krátký záznam do `cross-session/aiseo-optimalizace.md`.

---

## 📊 Legenda obsahového plánu (`obsahovy-plan.csv`)

| Sloupec | Název | Obsah |
|---|---|---|
| A | Klíčové slovo | Hlavní cílové klíčové slovo nového obsahu |
| B | Téma | Téma / rozšířená klíčová slova / rozšířené zadání |
| C | Pokyny | Doplňující pokyny, varování (kanibalizace, update vs. nový) — **vždy přečíst v B1** |
| D | Typ (kategorie/článek) | Většinou „článek"; mapuje na `category` frontmatteru |
| E | Publikováno (ano/ne) | Default `ne`; po publikaci `ano` |
| F | URL | Po publikaci doplnit `https://aiseo-optimalizace.cz/blog/<slug>/` |

---

## 🚫 Pravidla a hranice (no-go)

- **Edituji v rámci tohoto pipelinu:** `src/content/articles/<slug>.mdx`, `public/blog/<slug>/`, `public/og/<slug>.png`, `blogger/obsahovy-plan.csv`, `blogger/research/<slug>/`. Importuji (ne edituji) existující komponenty z `src/components/blocks/`.
- **NESahám** na `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/content/sections|pillar/`, `_source/`, `worker/`, `astro.config.mjs`, `package.json`, `.github/`, `CLAUDE.md`. Když potřebuju novou komponentu → eskalace na hlavní vlákno.
- **Slug po publikaci NIKDY neměnit.** `updated:` nikdy v budoucnosti.
- **Žádné secrets** (API klíče z env, nikdy do textu/promptu/logu/gitu).
- **Žádné `--no-verify`, `--force`, `--no-check`.**
- **Auditor neurčuje, rozhoduji já** — ale ignorovat ho jen s důvodem.

---

## ✅ Per-run checklist

- [ ] A: trend research → ≥ 2 nové řádky v `obsahovy-plan.csv`
- [ ] B: vybrán první volný řádek, **přečten sloupec C**, hloubkový research + KW
- [ ] C1: draft s answer + FAQ + CTA, brand voice OK
- [ ] C2–C5: 2 kola OpenAI auditu zapracována (`--max-tokens` ≥ 5000)
- [ ] D1: design komponenty, `.mdx` + `variant: rich`, žádný wall of text
- [ ] D2: featured image `public/og/<slug>.png` (gpt-image-2, 1536×1024, CZ text v horních ~84 %, zkontrolováno)
- [ ] D3: `npm run build` OK → commit (článek + OG image) → push → CI → curl 200 (článek i `og/<slug>.png`)
- [ ] D4: tabulka `E = ano`, `F = URL`
- [ ] D5: URL do vlákna + (volitelně) záznam do per-projekt boardu
