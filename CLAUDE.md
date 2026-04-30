# CLAUDE.md — aiseo-optimalizace

> Recovery dokument pro session-tag `aiseo-optimalizace`. Žádné výmysly, každý fakt ověřený dle `cross-vps/CLAUDE_MD_GUIDELINES.md` § 8.
>
> **Pravidla pro tvorbu a údržbu** tohoto souboru: `cross-vps/CLAUDE_MD_GUIDELINES.md`. Tento CLAUDE.md je referenční implementace pro tento projekt.

---

## I — Identita session

| Položka | Hodnota |
|---|---|
| **Session-tag** | `aiseo-optimalizace` |
| **Role** | project session (vývoj produktu, ne ops) |
| **Scope** | Vývoj a údržba obsahového webu `aiseo-optimalizace.cz`. Lokální kód, build, deploy do `/srv/apps/aiseo-optimalizace/` na sdílené Forpsi VPS. Vlastní service user, vlastní service, vlastní DNS A-záznamy, vlastní GitHub repo. |
| **NEdělá** | Žádné servisní úkony na sdílených zdrojích cizích projektů. Žádné sudo akce za jiné sessions. Žádné cizí systemd unity. |
| **Fallback / ops** | `sd-server-admin` přes `cross-session/server-admin.md` — SSH klíče, sudo akce, instalace balíčků, GitHub repo bootstrap, sdílené Caddyfile editace, audit shared resources. |

---

## II — Klíčová fakta

### VPS

| Položka | Hodnota | Ověřeno |
|---|---|---|
| Provider | Forpsi.com (VPS) | runbook 1 |
| IP | `80.211.223.175` | runbook 1 |
| Hostname | `sd-ultron-vps` | `ssh aiseo-optimalizace-vps "hostname"` 2026-04-29 03:08 |
| OS | Ubuntu 24.04 | runbook 1 |
| Sudo user | `ultron` (sudoers `NOPASSWD: ALL`) | runbook 1 |
| Service user | `aiseo-optimalizace` (uid 993, gid 984, nologin, home `/srv/apps/aiseo-optimalizace`) | `id aiseo-optimalizace` 2026-04-29 03:35 (sd-server-admin) |
| Group membership ultronu | `aiseo-optimalizace` (gid 984) | `id ultron` 2026-04-29 03:34 — `…,984(aiseo-optimalizace)` |
| Layout | `/srv/apps/aiseo-optimalizace/` mode 2775 (setgid) | `stat -c '%a'` 2026-04-29 03:34 → `2775` |
| Reverse proxy | Caddy, jediný `/etc/caddy/Caddyfile` (sdílený) | runbook 1 |
| Password auth | **vypnuté** — pouze publickey | runbook 1 |
| **Port** | **žádný** — Astro static, Caddy serveruje z `current/dist/` | volba projektu (precedent bc-landing) |

### Doména

| Položka | Hodnota |
|---|---|
| Apex | `aiseo-optimalizace.cz` |
| Subdoména www | `www.aiseo-optimalizace.cz` (301 → apex) |
| DNS provider | Forpsi (panel u uživatele) |
| TLS | Let's Encrypt přes Caddy, e-mail `ultron@sniperdesign.cz` (globální Caddy direktiva) |
| **Stav** | DNS A-záznamy ⏳ pending — ke dni `2026-04-29 03:40` ještě nezadané |

### SSH

| Položka | Hodnota |
|---|---|
| Privátní klíč (lokál) | `~/.ssh/aiseo-optimalizace_claude` (ed25519, mode 600) |
| Veřejný klíč | `~/.ssh/aiseo-optimalizace_claude.pub` (fingerprint `SHA256:Fsy1BsDXBRBeuNl03I2aMgvu/0BCidegtCQ8KaMHf10`) |
| SSH alias | `aiseo-optimalizace-vps` (v `~/.ssh/config`) |
| Stav klíče na VPS | ✅ nahraný `~ultron/.ssh/authorized_keys` jako záznam #7, sd-server-admin 2026-04-29 03:05 |

### GitHub

| Položka | Hodnota |
|---|---|
| Org | `ultron-sniperdesign` |
| Repo | `ultron-sniperdesign/aiseo-optimalizace` |
| **Stav** | ⏳ pending — ke dni `2026-04-29 03:40` repo neexistuje, request půjde na sd-server-admin po prvním lokálním commitu |

### Tech stack

| Vrstva | Volba | Verze (k 2026-04-29) |
|---|---|---|
| Static site generator | Astro | `^5.1.1` |
| Styling | Tailwind CSS přes `@tailwindcss/vite` | `^4.0.0` |
| Content layer | Astro Content Collections (`pillar`, `sections`) | součást Astro 5 |
| MDX podpora | `@astrojs/mdx` | `^4.0.3` |
| Sitemap | `@astrojs/sitemap` | `^3.2.1` |
| TypeScript | strict, paths `~/*` → `src/*` | `^5.7.2` |
| Node | `>=20.0.0` (matchuje VPS / GH Actions) | `.nvmrc` = `20` |

### Build artefakt

| Položka | Hodnota | Ověřeno |
|---|---|---|
| Dev server | `npm run dev` → `http://localhost:4321` | Astro default |
| Build out | `dist/` (statický HTML + CSS + assets) | `npm run build` 2026-04-29 03:40 ✅ |
| Build čas | 8 stránek za ~600 ms | `npm run build` log 2026-04-29 03:40 |
| Stránky | `/`, `/seo/`, `/geo/`, `/aeo/`, `/aio/`, `/prakticky-postup/`, `/rozhodovaci-matice/`, `/seo-vs-geo-vs-aeo-vs-aio/` + `/sitemap-index.xml` | build log |

---

## III — Mapa souborů

### Lokální (projekt root)

```
aiseo-optimalizace.cz/
├── _source/                          # Source materiály pro Claude (mimo build, mimo TS scope)
│   ├── draft_pillar_seo_geo_aeo_aio.md   # ~3000 slov pillar draft
│   └── mind-map.png                       # IA / menu mapa
├── public/                           # Statické assety (robots.txt, og, favicon)
│   └── robots.txt                         # AI crawlers explicitně Allow
├── src/
│   ├── components/                   # Header.astro, Footer.astro
│   ├── content/
│   │   ├── pillar/                        # 1 entry: seo-vs-geo-vs-aeo-vs-aio.md
│   │   └── sections/                      # 6 entries: seo, geo, aeo, aio, prakticky-postup, rozhodovaci-matice
│   ├── layouts/
│   │   └── BaseLayout.astro               # SEO meta + JSON-LD + Header/Footer wrapper
│   ├── pages/
│   │   ├── index.astro                    # Homepage (hub na 6 sekcí)
│   │   ├── [slug].astro                   # Dynamic route ze sections collection
│   │   └── seo-vs-geo-vs-aeo-vs-aio.astro # Pillar render
│   ├── styles/
│   │   └── global.css                     # Tailwind 4 import + design tokens (oklch)
│   └── content.config.ts                  # Collection schema (Zod)
├── .github/workflows/                # ⏳ deploy.yml přijde ve fázi D
├── astro.config.mjs                  # site, integrations (mdx, sitemap, tailwind via vite)
├── package.json                      # name "aiseo-optimalizace"
├── tsconfig.json                     # extends astro/tsconfigs/strict
├── .gitignore                        # dist, node_modules, .env, Icon, .claude, …
├── .nvmrc                            # 20
├── README.md                         # vývojářský úvod
└── CLAUDE.md                         # tento soubor
```

### Externí pointery

| Co | Kde |
|---|---|
| Globální VPS runbook | `cross-vps/VPS_ONBOARDING.md` (sekce 4 SSH, 5 setup, 6 GH Actions, 9 known gotchas) |
| CLAUDE.md guidelines | `cross-vps/CLAUDE_MD_GUIDELINES.md` (§ 3 povinné sekce, § 7 režim B+A údržby, § 8 ověření faktů) |
| Servisní board | `cross-session/server-admin.md` (requesty na sd-server-admin) |
| Per-projekt board | `cross-session/aiseo-optimalizace.md` (vlastní log této session) |
| Memory pointers (lokální) | `~/.claude/projects/-Users-ultroncloudehome-Desktop-Ultron-DISK-SNIPER-DESIGN-ULTRON-SNIPER-DESIGN-aiseo-optimalizace-cz/memory/` |
| Schválený plán onboardingu | `~/.claude/plans/lively-coalescing-lake.md` |

---

## IV — Sdílené resources

| Zdroj | Vlastník akcí | Stav k 2026-04-29 |
|---|---|---|
| `~ultron/.ssh/authorized_keys` | sd-server-admin | 7 řádků, můj klíč #7 (`claude@aiseo-optimalizace`) |
| `/etc/caddy/Caddyfile` | sd-server-admin reviewuje souběh; já edituju vlastní blok | můj blok ⏳ — přidá se až po prvním deployi a propagaci DNS (precedent bc-landing 2026-04-28 03:25) |
| `/srv/apps/aiseo-optimalizace/` | já (vlastní service user) | ✅ vytvořeno 2026-04-29 03:32, mode 2775, owner aiseo-optimalizace |
| GitHub repo `ultron-sniperdesign/aiseo-optimalizace` | sd-server-admin (gh CLI auth jen tam) | ⏳ neexistuje, request půjde po prvním commitu |
| DNS Forpsi pro `aiseo-optimalizace.cz` + www | uživatel (admin Forpsi) | ⏳ A-záznamy nezadané |
| Caddy globální e-mail (LE) | nepřepisovat — globální `ultron@sniperdesign.cz` | (info, žádná akce) |

---

## V — Postupy

### Lokální vývoj

```bash
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"
npm run dev      # http://localhost:4321
npm run build    # astro check + astro build → dist/
npm run preview  # preview produkčního buildu
```

### SSH na VPS

```bash
ssh aiseo-optimalizace-vps                        # interaktivní shell
ssh aiseo-optimalizace-vps "<příkaz>"             # one-shot
ssh -O exit aiseo-optimalizace-vps 2>/dev/null || true   # zavřít master pokud běží
```

⚠️ Pokud `id` neukáže group `aiseo-optimalizace`, zavři SSH master (`ssh -O exit`) a otevři znovu — `usermod -aG` se v existující session neprojeví. (Známo z runbooku 5.1, ověřeno 2026-04-29 03:34.)

### Manuální deploy fallback (sekce 6.5 runbooku)

Pokud GitHub Actions selže (známé flaky body: ssh-keyscan, network IO):

```bash
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"
npm run build
REL="$(date -u +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD 2>/dev/null || echo manual)"

ssh aiseo-optimalizace-vps "mkdir -p /srv/apps/aiseo-optimalizace/releases/$REL/dist"
rsync -az --delete \
  --exclude '.env' --exclude 'Icon' --exclude '.DS_Store' \
  dist/ "aiseo-optimalizace-vps:/srv/apps/aiseo-optimalizace/releases/$REL/dist/"

ssh aiseo-optimalizace-vps "
  cd /srv/apps/aiseo-optimalizace
  ln -sfn releases/$REL current.new
  mv -Tf current.new current
  ls -1t releases | tail -n +6 | xargs -r -I{} rm -rf releases/{}
"
# žádný systemctl restart — Caddy file_server čte z `current/dist/`, symlink switch je dost
```

### Audit klíčů na VPS (volá se v měsíčním auditu A)

```bash
ssh aiseo-optimalizace-vps "awk '{print \$NF}' ~/.ssh/authorized_keys | sort | uniq -c"
```

Očekávaný výstup: 7 unikátních záznamů (5 sessions + 1 user kotva + 1 repo deploy klíč), pokud sd-server-admin v boardu logu nehlásí jinak.

### Před risky operací (Caddy reload, sudo na shared, …)

1. Mrkni do `cross-session/server-admin.md` — paralelní práce?
2. Mrkni do `cross-session/aiseo-optimalizace.md` — vlastní rozdělané operace?
3. Heads-up do server-admin boardu (formát v2: `# 🟠 …` + `>` + `---`)
4. Provedení
5. Záznam výsledku do per-projekt boardu (pokud se týká jen mě) nebo server-admin boardu (pokud kříží projekty)

---

## VI — Pravidla a rizika

### No-go akce (pro tuto session)

- **Žádné editace `/srv/apps/<jiný-projekt>/`** — to není moje doména.
- **Žádný `systemctl restart` cizí služby** — leda na vlastní `aiseo-optimalizace.service` (zatím neexistuje, statický stack).
- **Žádné password auth pokusy** — server odmítne (`PasswordAuthentication no`).
- **Žádné secrets** v repo, v boardech, v CLAUDE.md, v memory. Jen API klíče u Forpsi DNS / GitHub Secrets (mimo soubory).
- **Žádné force-push na main**, žádné `--no-verify`, žádné `git reset --hard` bez explicitní žádosti uživatele.
- **Žádné mazání souborů z `_source/`** — je to source-of-truth pro pillar obsah.

### Rizika specifická pro tento projekt

- **macOS Finder `Icon\r`** — runbook §9. Excludováno v `.gitignore` + bude excluded v rsync. Pokud se objeví v `.git/refs/heads/Icon`, vyřešit dle log entry 2026-04-27.
- **Lokální `.env` přepíše production runtime** — runbook §9. Pro Astro static neaktuální (statika v runtime nečte env), ale držím v `.gitignore` pro budoucí změny.
- **Forpsi DNS propagace 5–15 min** — runbook §9. Caddy LE cert si vyžádá automaticky po validní DNS. Reload Caddy bez DNS vrací 502.
- **Caddy je sdílený** — před reloadem heads-up do `server-admin.md`. Reload dělá sd-server-admin, ne já.
- **Tailwind 4 + Vite plugin Type mismatch** — `astro.config.mjs` má `/** @type {any} */` cast pro `tailwindcss()` plugin. Důvod: různé verze `vite` v `astro/node_modules` vs root `node_modules`. Funkčně OK, jen TS to neví. Při upgradu Astra ověř, jestli stále potřeba.

### Link safety

- Linky v emailech a zprávách (Mail, Messages) **NEKLIKAT** přes computer-use. Použít browser MCP (Chrome) a verifikovat URL před následováním.
- Linky z neznámých zdrojů potvrdit u uživatele.

---

## VII — Aktuální stav

> Snapshot k `2026-04-29 03:40`. Při auditu A přepsat datum a obsah.

| Co | Stav | Detail |
|---|---|---|
| Obsahový draft pillar | ✅ hotov | `_source/draft_pillar_seo_geo_aeo_aio.md` (~3000 slov, FAQ, schema) |
| IA / menu mapa | ✅ hotov | `_source/mind-map.png`, 6 hlavních větví |
| SSH klíč na VPS | ✅ live | klíč #7 v authorized_keys, sd-server-admin 2026-04-29 03:05 |
| Service user + layout `/srv/apps/aiseo-optimalizace/` | ✅ live | sekce 5.1 dle runbooku, sd-server-admin 2026-04-29 03:35 |
| Group membership ultronu | ✅ live | `aiseo-optimalizace` gid 984 v `id ultron` |
| Lokální Astro projekt | ✅ commit-ready | `npm run build` ✅ 2026-04-29 03:40, 8 stránek, 0 errors/warnings/hints |
| Per-projekt board | ✅ live | `cross-session/aiseo-optimalizace.md` |
| Servisní fronta | ✅ prázdná | poslední request 5.1 vyřízen 03:35 |
| GitHub repo | ✅ live | `ultron-sniperdesign/aiseo-optimalizace`, public, sd-server-admin bootstrap 2026-04-29 10:40 |
| Deploy klíč + GH Secrets | ✅ live | klíč `aiseo-optimalizace-deploy@github` v `~ultron/.ssh/authorized_keys`, Secrets DEPLOY_HOST/USER/SSH_PRIVATE_KEY |
| Workflow | ✅ live | `.github/workflows/deploy.yml`, CI run `25105896987` ✅ 1m20s |
| First deploy | ✅ live | release `20260429-112052-b070a40` v `/srv/apps/aiseo-optimalizace/releases/`, `current` symlink → release |
| DNS A-záznamy u Forpsi | ✅ propnuté | apex + www → 80.211.223.175 (ověřeno 8.8.8.8 + 1.1.1.1) |
| Caddy bloky (apex + www) | ✅ live | sd-server-admin reload 2026-04-29 ~14:50, backup `Caddyfile.bak-1777462724` |
| HTTPS smoke test live | ✅ pass | viz tabulka níže |
| LE cert | ✅ valid | `CN=aiseo-optimalizace.cz`, issuer Let's Encrypt E8, valid `2026-04-29` → `2026-07-28` (90 dní, Caddy autorenew) |

**Smoke test 2026-04-29 17:04 (externí HTTPS):**

| URL | HTTP | Pozn. |
|---|---|---|
| `https://aiseo-optimalizace.cz/` | 200 | HSTS, X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, content-length 12981 |
| `/seo/`, `/geo/`, `/aeo/`, `/aio/`, `/prakticky-postup/`, `/rozhodovaci-matice/` | 200 | všech 6 sekcí |
| `/seo-vs-geo-vs-aeo-vs-aio/` | 200 | pillar průvodce |
| `/sitemap-index.xml` + `/sitemap-0.xml` | 200 | sitemap-0 obsahuje 8 URLs |
| `/robots.txt` | 200 | obsahuje explicit Allow pro GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended |
| `https://www.aiseo-optimalizace.cz/` | 301 → apex | redirect-only blok |
| Plné pillar tělo (~3000 slov) v `src/content/pillar/` | ✅ live | commit `193acdb`, CI run `25118569513` ✅, pillar HTML 37 KB, 7 FAQ + FAQPage JSON-LD |
| Plné rozšíření 6 sekcí (~1300 slov každá) | ✅ live | commit `2a823d7`, CI run `25132281814` ✅, deploy `20260429-203210-2a823d7`, sekce 20–28 KB HTML |
| Defenzivní článek `/jak-vypnout-ai-overview/` | ✅ live | commit `c81c9f3`, ~2200 slov, HowTo schema (5 kroků) + FAQPage (6 otázek), 27 KB HTML, deploy `20260429-212419-c81c9f3` |
| Astro redirect `/seo-a-geo/` → pillar | ✅ live | client-side meta refresh + canonical + noindex (sitemap exclude) |
| GSC + GA4 sloty v BaseLayout | ✅ ready | env vars `PUBLIC_GSC_VERIFICATION` + `PUBLIC_GA4_MEASUREMENT_ID` v Secrets |
| GA4 tracking | ⏳ rolling out | ID `G-BG0FVWG0YH` (uživatel 2026-04-29 23:35), request u sd-server-admin pro Secret nastavení |
| GSC verification | ✅ verified | token `BpVWR260qQusVvlwhefuHC5pRVh0Mo4N5o9nzdbSKts`. Secret přidán sd-server-admin 2026-04-30, re-deploy `4070e3d` ✅, GSC ownership verified uživatelem 2026-04-30. |
| Articles content collection | ✅ live | extensible pro budoucí case studies pod `src/content/articles/` |
| CLAUDE.md | ✅ live | tento soubor, založen 2026-04-29 03:40 |

---

## VIII — Údržba souboru (B + A)

> **Závazný režim** dle `cross-vps/CLAUDE_MD_GUIDELINES.md` § 7. Týž režim, který má `sd-server-admin`.

### Režim B — průběžně, automaticky

Kdykoli udělám akci se strukturálním dopadem (viz tabulka triggerů v guidelines § 7), aktualizuji odpovídající sekci CLAUDE.md **v tomtéž tahu**:

| Co se stalo | Co updatuju |
|---|---|
| Vznikl GitHub repo | § II GitHub, § VII Aktuální stav, § IV Sdílené resources |
| Přibyl Caddy blok | § IV Sdílené resources, § VII |
| Změnil se Astro / Tailwind major upgrade | § II Tech stack |
| Přidal se nový postup (např. Stripe webhook) | § V Postupy |
| Změnila se baseline klíčů na VPS | § IV, § VII |
| Nové gotcha | § VI Rizika |

Žádné výmysly. Při nejistotě ověř (ssh, gh, dig, ls) nebo vynech.

### Režim A — měsíční audit na trigger uživatele

Když uživatel řekne *„audit CLAUDE.md vs realita"*:

1. `ssh aiseo-optimalizace-vps "<verifikace § II hodnot>"`
2. `gh repo view ultron-sniperdesign/aiseo-optimalizace`
3. `dig +short aiseo-optimalizace.cz www.aiseo-optimalizace.cz`
4. Projít log v `cross-session/aiseo-optimalizace.md` od posledního mtime CLAUDE.md
5. Zaznamenat snapshot diff
6. Přepsat datumy „k YYYY-MM-DD" na nový datum **i když obsah se nezměnil**
7. Log do `cross-session/aiseo-optimalizace.md` ve formátu „Audit CLAUDE.md vs realita 2026-MM-DD: …"

Příští audit: **2026-05-29** (měsíční kadence od dnešního založení).

---

## IX — Recovery procedure

Když budoucí Claude session vstoupí do tohoto projektu (zmizelo konverzační vlákno, restart, nový thread):

```bash
# 1. Cd do projektu
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"

# 2. Přečti tento CLAUDE.md
cat CLAUDE.md

# 3. Přečti hlavní runbook (referenční, pro kontext sdílené VPS)
cat "../cross-vps/VPS_ONBOARDING.md"

# 4. Přečti per-projekt board pro nejnovější stav
cat "../cross-session/aiseo-optimalizace.md"

# 5. Přečti servisní board (známo, co dělala ops session)
tail -100 "../cross-session/server-admin.md"

# 6. Ověř SSH alias funguje
ssh aiseo-optimalizace-vps "hostname && whoami && id"
# očekávaně: sd-ultron-vps, ultron, groups: …984(aiseo-optimalizace)…

# 7. Ověř layout na VPS
ssh aiseo-optimalizace-vps "ls -la /srv/apps/aiseo-optimalizace/ && stat -c '%a %U:%G' /srv/apps/aiseo-optimalizace"
# očekávaně: releases/, shared/, current (po prvním deployi), 2775 aiseo-optimalizace:aiseo-optimalizace

# 8. Ověř GitHub repo (až vznikne)
gh repo view ultron-sniperdesign/aiseo-optimalizace 2>&1
gh secret list --repo ultron-sniperdesign/aiseo-optimalizace 2>&1

# 9. Ověř DNS (až bude propnuté)
dig +short aiseo-optimalizace.cz
dig +short www.aiseo-optimalizace.cz
# očekávaně: obě 80.211.223.175

# 10. Ověř HTTPS (až bude live)
curl -sSI https://aiseo-optimalizace.cz | head -1
# očekávaně: HTTP/2 200

# 11. Lokální build smoke test
nvm use 20 2>/dev/null || true
npm install --no-audit --no-fund
npm run build
# očekávaně: 0 errors, 8+ stránek
```

Pokud kterýkoli krok selže, **NEdomýšlej**. Místo toho:
- Mrkni do log v `cross-session/aiseo-optimalizace.md` na poslední záznam
- Mrkni do servisní fronty v `server-admin.md` — je něco rozpracované?
- Pokud nejasné, otázka uživateli (formát v2: `# 🟠 Dotaz pro tebe` + `>` + `---`)

Pokud `~/.claude/projects/-Users-ultroncloudehome-Desktop-Ultron-DISK-SNIPER-DESIGN-ULTRON-SNIPER-DESIGN-aiseo-optimalizace-cz/memory/MEMORY.md` neexistuje, vytvoř ho z guidelines § 7 a doplň pointer na `feedback_communication_style.md`.

---

## X — Glosář (lokální)

| Pojem | Význam |
|---|---|
| **Pillar** | hlavní průvodce ~3000 slov s FAQ + schema, slug `/seo-vs-geo-vs-aeo-vs-aio/` |
| **Sekce** | jedna ze 6 hlubokých subpages (SEO, GEO, AEO, AIO, Praktický postup, Rozhodovací matice) |
| **Answer block** | 40–60 slov definice nahoře v článku, do kterého AI scrapery čerpají citaci. Tučně. |
| **Hub-and-spoke** | obsahová architektura — pillar = hub, 6 sekcí = spokes. Křížové prolinkování. |
| **Service user** | unprivileged Linux uživatel `aiseo-optimalizace` (uid 993, gid 984, nologin), vlastník `/srv/apps/aiseo-optimalizace/` |
| **AIO** | dva významy: (a) Google AI Overviews funkce, (b) AI Optimization deštník nad SEO+GEO+AEO |
