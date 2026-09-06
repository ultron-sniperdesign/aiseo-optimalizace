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
| **Scope** | Vývoj a údržba obsahového webu `aiseo-optimalizace.cz` + komerčního produktu **AI SEO Wireframe Pack** (placený digitální produkt 1 490 Kč, dodávaný přes Stripe + Cloudflare Worker + Ecomail). Lokální kód, build, deploy na sdílenou Forpsi VPS. Vlastní service user, vlastní DNS, vlastní GitHub repo. |
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
| Service user | `aiseo-optimalizace` (uid 993, gid 984, nologin, home `/srv/apps/aiseo-optimalizace`) | `id aiseo-optimalizace` 2026-04-29 03:35 |
| Group membership ultronu | `aiseo-optimalizace` (gid 984) | `id ultron` 2026-04-29 03:34 |
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
| Stav | ✅ live, oba A-záznamy na `80.211.223.175`, LE cert valid |

### SSH

| Položka | Hodnota |
|---|---|
| Privátní klíč (lokál) | `~/.ssh/aiseo-optimalizace_claude` (ed25519, mode 600) |
| Veřejný klíč | `~/.ssh/aiseo-optimalizace_claude.pub` (fingerprint `SHA256:Fsy1BsDXBRBeuNl03I2aMgvu/0BCidegtCQ8KaMHf10`) |
| SSH alias | `aiseo-optimalizace-vps` (v `~/.ssh/config`) |
| Stav klíče na VPS | ✅ nahraný `~ultron/.ssh/authorized_keys` jako záznam #7 |

### GitHub

| Položka | Hodnota |
|---|---|
| Org | `ultron-sniperdesign` |
| Repo | `ultron-sniperdesign/aiseo-optimalizace` (public) |
| Secrets | `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_PRIVATE_KEY`, `PUBLIC_GSC_VERIFICATION`, `PUBLIC_GA4_MEASUREMENT_ID` |
| Workflow | `.github/workflows/deploy.yml` — build + rsync na VPS, symlink switch |
| Stav | ✅ live |

### Tech stack (web)

| Vrstva | Volba | Verze |
|---|---|---|
| Static site generator | Astro | `^5.1.1` |
| Styling | Tailwind CSS přes `@tailwindcss/vite` | `^4.0.0` |
| Content layer | Astro Content Collections (`pillar`, `sections`, `articles`) | součást Astro 5 |
| MDX podpora | `@astrojs/mdx` | `^4.0.3` |
| Sitemap | `@astrojs/sitemap` | `^3.2.1` |
| TypeScript | strict, paths `~/*` → `src/*` | `^5.7.2` |
| Node | `>=20.0.0` | `.nvmrc` = `20` |

### Cloudflare (Workers)

| Položka | Hodnota | Ověřeno |
|---|---|---|
| Account ID | `3f243ec350dfcb03f53ae93eaa886468` | wrangler oauth response 2026-05-16 |
| workers.dev subdomain | `aiseo-optimalizace` | API PUT /accounts/{id}/workers/subdomain 2026-05-16 |
| Worker name | `aiseo-pack-webhook` | wrangler deploy log |
| Worker URL | `https://aiseo-pack-webhook.aiseo-optimalizace.workers.dev` | curl HEAD 200 2026-05-16 |
| OAuth login | `~/Library/Preferences/.wrangler/config/default.toml` — ✅ obnoveno 2026-08-09 přes ultron@sniperdesign.cz (POZOR: účet info@sniperdesign.cz je JINÝ CF účet bez přístupu k workeru). | `wrangler whoami` 2026-08-09 → ultron@, account 3f243ec |
| Worker zdroj | `worker/` v projektu (TypeScript, žádný Stripe SDK — vlastní HMAC verify) | |

### Stripe (LIVE mode)

| Položka | Hodnota | Stav |
|---|---|---|
| Account display name | „AI SEO TEST" | (interní label, Stripe Dashboard top-left) |
| Legal entity | **CPU s.r.o.** | (faktury jdou pod tímto názvem) |
| Mode | **LIVE** (no `test_` prefix v URL) | aktivní prodej |
| Product | „AI SEO Wireframe Pack" — One-off, 1 490 Kč CZK | Product catalog |
| Payment Link URL | `https://buy.stripe.com/4gM9AU8Km1wm6vY4Hw0VO00` | linkovaný z `/pack/` landing (3 CTA) |
| Success URL | `https://aiseo-optimalizace.cz/pack/dekujeme/` | redirect po platbě |
| Webhook endpoint | `https://aiseo-pack-webhook.aiseo-optimalizace.workers.dev` | „aiseo-optimalizace PRO PDF", Active |
| Webhook event | jen `checkout.session.completed` | minimalizace nepotřebných eventů |
| Webhook signing secret | uložený v CF Worker secret `STRIPE_WEBHOOK_SECRET` | NIKDY do gitu/CLAUDE.md |
| Webhook destination ID | `we_1TXpEmJzEHGGPKs6kdgifn9l` | |

### Ecomail (delivery)

| Položka | Hodnota |
|---|---|
| Workspace | `sniperdesign.ecomailapp.cz` |
| Účet | `info@sniperdesign.cz` |
| List ID | **`12`** — „aiseo-optimalizace.cz" (sdílený list pro free leads + paid customers) |
| Tag pro paid | `pack-paid` (worker přidává po Stripe platbě) |
| Automation A1 (free) | `pipeline_id: 44016` — „aiseo-optimalizace.cz - nový kontakt zdarma PDF". Trigger = `subscribed`. Pošle e-mail s free PDF |
| Automation A2 (paid) | `pipeline_id: 44112` — „aiseo-optimalizace.cz - Placené PDF". Trigger = tag `pack-paid` přidán. Pošle e-mail s download linky 9 PDFs + master. **Dedup: „Pouze jednou per email"** |
| Free subscribe endpoint (public) | `https://sniperdesign.ecomailapp.cz/public/subscribe/12/04d9c95424b2f28aaece6f953bb0e4aa` — používá `EmailCapture.astro` komponenta |
| API endpoint (paid) | `https://api2.ecomailapp.cz/lists/12/subscribe` + `https://api2.ecomailapp.cz/pipelines/44112/trigger` (worker volá oba) |
| API klíč | uložený v CF Worker secret `ECOMAIL_API_KEY` |

### AI SEO Wireframe Pack (produkt)

| Položka | Hodnota |
|---|---|
| Cena | **1 490 Kč** jednorázově (LIVE Stripe Payment Link) |
| Formát | 9 PDF souborů + master PDF (vše v `public/_review/`, blokované v `robots.txt` pro bots) |
| Master PDF | `pack-master-v1.pdf` (85 stran, 29.7 MB) — kompletní dokument |
| Kapitoly | 00 Úvod a glosář · 01 Homepage · 02 Produkt · 03 Kategorie · 04 Blog článek · 05 Blog výpis · 06 Prodejní landing · 07 Kontakt · 08 Aplikace |
| Verze | v8 (kap. 01), v7 (kap. 02), v4 (kap. 03+04), v3 (kap. 05+06+07+08), v2 (kap. 00), v1 (master) |
| Zdroj | `_source/products/pack/pack-XX-NAME.html` (Astro static HTML stránkované A4 přes CSS `@page`) |
| Render | Chrome headless `--print-to-pdf` + `--virtual-time-budget=8000` + `dangerouslyDisableSandbox: true` (jinak fonty nedostanou cas načíst) |
| Auditováno | všech 8 obsahových kapitol + úvodní část GPT-5.5 přes `~/.claude/skills/open-ai-api-core/`, 11+ fixů aplikovaných |

### Build artefakt (web)

| Položka | Hodnota |
|---|---|
| Dev server | `npm run dev` → `http://localhost:4321` (Astro default) nebo `4323` (pomocí `.claude/launch.json`) |
| Build out | `dist/` (statický HTML + CSS + assets) |
| Stránky (aktuálně live) | **Pilíř + sekce (7):** `/`, `/seo/`, `/geo/`, `/aeo/`, `/aio/`, **`/ai-mode/`**, `/prakticky-postup/`, `/rozhodovaci-matice/`, `/seo-vs-geo-vs-aeo-vs-aio/`. **Huby:** **`/zacnete-tady/`** (vstupní cesta), **`/slovnik/`** (46+ pojmů), **`/serie/ai-seo-pro-eshopy/`**, **`/blog/tema/<slug>/`** (9 tag stránek), `/ai-viditelnost/` (200k landing), `/autor/kamil/`. **Produkt/funnel:** `/pack/`+`/pack/dekujeme/`, `/audit/`+`/audit/dekujeme/`, `/navod-zdarma/`+`/navod-zdarma/dekujeme/`, `/sluzby/`. **Utility:** `/kontakt/`, `/gdpr/`, `/rss.xml`, **`/llms.txt` (generovaný endpointem)**. **Blog:** `/blog/` + **141 článků** `/blog/<slug>/` (Blogger session). **Slovník:** 60+ hesel s vlastními detaily `/slovnik/<heslo>/`. **/sluzby/** = prodejní landing s poptávkovým formulářem (CF Worker) + GA4/Pixel konverzemi. Celkem **247 routes** (k 2026-08-17). |

---

## III — Mapa souborů

### Lokální (projekt root)

```
aiseo-optimalizace.cz/
├── _source/                              # Source materiály pro Claude (mimo build, mimo TS scope)
│   ├── draft_pillar_seo_geo_aeo_aio.md
│   ├── mind-map.png
│   ├── case-study-megadetail/            # evidence pro case study (DENIK.md zásahy+snapshoty, HLASENI.md schránka megadetail vlákna, PROMPT-HLASENI.md)
│   ├── sniperdesign/agency-positioning.md
│   └── products/
│       ├── pack/                         # AI SEO Wireframe Pack zdroj
│       │   ├── pack.html                 #   úvodní část (kap. 00, 5 stran)
│       │   ├── pack-01-homepage.html     #   kap. 01–08, každá samostatný HTML s @page CSS
│       │   ├── pack-02-produkt.html
│       │   ├── pack-03-kategorie.html
│       │   ├── pack-04-blog-clanek.html
│       │   ├── pack-05-blog-vypis.html
│       │   ├── pack-06-prodejni-landing.html
│       │   ├── pack-07-kontaktni-stranka.html
│       │   ├── pack-08-aplikace.html
│       │   └── output/                   #   gitignored, render artefakty
│       ├── email-pack-paid.html          # v1 paid delivery e-mail (ref)
│       └── email-pack-paid-v2.html       # v2 po GPT-5.5 auditu (LIVE v Ecomail A2)
├── public/                               # Statické assety
│   ├── robots.txt                            # AI crawlers Allow, /_review/ Disallow
│   ├── fonts/                                # self-host Geist + JBM
│   ├── og/                                   # OG images per stránka
│   ├── pack/preview/                         # hero PNG náhledy pro /pack/ landing
│   ├── screenshots/                          # snímky obrazovky do obsahu (Figure.astro); chybějící soubor se v produkci nevykreslí, zadání v _source/snimky-rezim-ai.md
│   ├── sniperdesign/                         # Kumbh Sans fonts (sekce 06)
│   └── _review/                              # produkční PDFs Packu (11 souborů, blocked v robots.txt)
│       ├── pack-master-v1.pdf
│       ├── pack-00-uvod-v2.{html,pdf}
│       ├── pack-01-homepage-v8.{html,pdf}
│       ├── pack-02-produkt-v7.{html,pdf}
│       ├── pack-03-kategorie-v4.{html,pdf}
│       ├── pack-04-blog-clanek-v4.{html,pdf}
│       ├── pack-05-blog-vypis-v3.{html,pdf}
│       ├── pack-06-prodejni-landing-v3.{html,pdf}
│       ├── pack-07-kontaktni-stranka-v3.{html,pdf}
│       ├── pack-08-aplikace-v3.{html,pdf}
│       └── free-homepage-final.{html,pdf}    # free PDF (Ecomail A1 link)
├── src/
│   ├── components/                       # Header, Footer, EmailCapture, MockupPage, article/, blocks/, sniperdesign/
│   ├── content/
│   │   ├── pillar/ sections/ articles/       # dlouhý obsah (MDX) — per-mutace přeložit
│   │   └── pages/*.ts                        # DATOVÉ MODULY landing/thank-you/audit/pack/index/sluzby/contact/privacy — per-mutace přeložit
│   ├── i18n/                             # I18N VRSTVA — per-mutace přeložit (viz MUTATIONS.md)
│   │   ├── strings.ts                        # chrome: Header/Footer/EmailCapture (nav, legal, labely, tagy/série UI)
│   │   ├── sniperdesign.ts                   # agency promo: BigContact/SmallContact
│   │   ├── site.ts                           # locale/schema/identita: lang, og:locale, název webu, Organization
│   │   ├── author.ts                         # autor entita (byline/AuthorBox/autorská stránka/Person @id)
│   │   ├── proof.ts                          # ProofStrip (200k trust komponenta)
│   │   ├── tags.ts                           # registr 9 blog témat (id stabilní, slug/label přeložit)
│   │   ├── series.ts                         # registr sérií článků (AI SEO pro e-shopy, 8 dílů)
│   │   └── llms.ts                           # texty pro generovaný /llms.txt
│   ├── layouts/BaseLayout.astro              # SEO meta + JSON-LD + Header/Footer (čte site.ts)
│   ├── pages/
│   │   ├── index.astro                       # Homepage
│   │   ├── [slug].astro                      # Dynamic route ze sections
│   │   ├── seo-vs-geo-vs-aeo-vs-aio.astro    # Pillar
│   │   ├── blog/                             # blog index + dynamic [slug] + tema/[tema] (tag stránky)
│   │   ├── serie/[serie].astro               # landing série (registr i18n/series.ts)
│   │   ├── zacnete-tady.astro                # vstupní hub (data: content/pages/zacnete-tady.ts)
│   │   ├── slovnik.astro                     # slovník pojmů (data: content/pages/slovnik.ts)
│   │   ├── llms.txt.ts                       # generovaný llms.txt endpoint (97+ odkazů)
│   │   ├── rss.xml.ts                        # RSS feed
│   │   ├── navod-zdarma/{index,dekujeme}.astro   # free PDF landing + thank-you
│   │   └── pack/
│   │       ├── index.astro                   # Pack landing — Stripe Payment Link LIVE
│   │       └── dekujeme.astro                # post-payment thank-you (Stripe success URL)
│   ├── styles/global.css                     # Tailwind 4 + design tokens (oklch)
│   └── content.config.ts                     # Collection schema (Zod)
├── worker/                               # Cloudflare Worker (Stripe → Ecomail bridge)
│   ├── src/index.ts                          # TypeScript handler — HMAC verify + 2 Ecomail API calls
│   ├── wrangler.toml                         # ECOMAIL_LIST_ID=12, ECOMAIL_PIPELINE_ID=44112
│   ├── package.json + tsconfig.json
│   ├── README.md                             # deploy návod + flow popis
│   └── .gitignore                            # .wrangler/, node_modules/, .dev.vars
├── .github/workflows/deploy.yml          # Astro build → rsync VPS (worker se deployuje samostatně přes wrangler)
├── astro.config.mjs
├── package.json
├── README.md
├── MUTATIONS.md                          # fork guide pro jazykové mutace (co přeložit, co nesahat, server)
└── CLAUDE.md                             # tento soubor
```

### Externí pointery

| Co | Kde |
|---|---|
| Globální VPS runbook | `cross-vps/VPS_ONBOARDING.md` |
| CLAUDE.md guidelines | `cross-vps/CLAUDE_MD_GUIDELINES.md` |
| Servisní board | `cross-session/server-admin.md` |
| Per-projekt board | `cross-session/aiseo-optimalizace.md` |
| Mutace — global board | `cross-session/aiseo-global.md` (koordinace globálních změn napříč jazykovými mutacemi) |
| Fork guide (mutace) | `MUTATIONS.md` (v projektu) |
| Memory pointers | `~/.claude/projects/-Users-ultroncloudehome-Desktop-Ultron-DISK-SNIPER-DESIGN-ULTRON-SNIPER-DESIGN-aiseo-optimalizace-cz/memory/` |
| Schválený onboarding plán | `~/.claude/plans/lively-coalescing-lake.md` |
| Wrangler OAuth config | `~/Library/Preferences/.wrangler/config/default.toml` (token + refresh + scopes) |

> **i18n / mutace model (k 2026-05-23):** Tento CZ projekt je **kanonický, vlastník design systému (role „A")**. Jazykové mutace = **samostatné forky** na vlastních doménách, jeden jazyk uvnitř (žádné locale-keying). Veškerý překladový text/config je externalizovaný do dat: `src/content/pages/*.ts`, `src/i18n/{strings,sniperdesign,site}.ts`, `src/content/**/*.mdx`. Fork = kopie + překlad těchto dat; do `.astro`/CSS/komponent se NESAHÁ. Změny design systému dělá A a mutace je přebírají přes `cross-session/aiseo-global.md`. Plný postup: `MUTATIONS.md`.

---

## IV — Sdílené resources

| Zdroj | Vlastník akcí | Stav |
|---|---|---|
| `~ultron/.ssh/authorized_keys` | sd-server-admin | klíč #7 (`claude@aiseo-optimalizace`) |
| `/etc/caddy/Caddyfile` | sd-server-admin reviewuje souběh; já edituju vlastní blok | apex + www bloky live |
| `/srv/apps/aiseo-optimalizace/` | já (vlastní service user) | live, mode 2775 |
| GitHub repo `ultron-sniperdesign/aiseo-optimalizace` | sd-server-admin (gh CLI auth jen tam) | live |
| DNS Forpsi pro `aiseo-optimalizace.cz` + www | uživatel (admin Forpsi) | propnuté |
| **Cloudflare account** | uživatel (CF account login) + já (přes wrangler OAuth token v `~/Library/Preferences/.wrangler/`) | live |
| **CF Workers subdomain** `aiseo-optimalizace.workers.dev` | jednorázová account-level akce, neměnit | live |
| **Stripe account** „AI SEO TEST" / CPU s.r.o. | uživatel (Stripe Dashboard login) | LIVE mode aktivní |
| **Stripe Payment Link** `buy.stripe.com/4gM9AU...` | uživatel vytvořil, já paste do landing | live |
| **Stripe Webhook endpoint** (LIVE) | uživatel vytvořil, signing secret uložen v CF Worker secret | live |
| **Ecomail list 12** (sdílený free + paid) | uživatel | live, 3+ subscribers |
| **Ecomail automation A1** (free, pipeline 44016) | uživatel | live |
| **Ecomail automation A2** (paid, pipeline 44112) | uživatel vytvořil, paste HTML šablony z `_source/products/email-pack-paid-v2.html` | live |
| Caddy globální e-mail (LE) | nepřepisovat — globální `ultron@sniperdesign.cz` | (info, žádná akce) |

---

## V — Postupy

### Lokální vývoj (Astro web)

```bash
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"
npm run dev      # http://localhost:4321 (Astro default)
# nebo přes .claude/launch.json: astro-dev na portu 4323
npm run build    # astro check + astro build → dist/
npm run preview  # preview produkčního buildu
```

### SSH na VPS

```bash
ssh aiseo-optimalizace-vps                # interaktivní shell
ssh aiseo-optimalizace-vps "<příkaz>"     # one-shot
ssh -O exit aiseo-optimalizace-vps 2>/dev/null || true   # zavřít master
```

⚠️ Pokud `id` neukáže group `aiseo-optimalizace`, zavři SSH master (`ssh -O exit`) a otevři znovu.

### CF Worker — deploy

```bash
cd worker
npm install                                        # jednorázově
npx wrangler login                                 # jednorázově (OAuth, browser)
npx wrangler deploy                                # deploy aktuálního src/index.ts
npx wrangler tail --format pretty                  # live logy (běží do Ctrl+C)
npx wrangler whoami                                # ověření auth + account ID
```

### CF Worker — update secret

Secret se NIKDY nedává do gitu (ani do `wrangler.toml`):

```bash
cd worker
echo "<value>" | npx wrangler secret put STRIPE_WEBHOOK_SECRET
echo "<value>" | npx wrangler secret put ECOMAIL_API_KEY
# vars (public, OK v gitu): ECOMAIL_LIST_ID, ECOMAIL_PIPELINE_ID, EXPECTED_PRODUCT_ID v wrangler.toml
```

### CF subdomain — registrace (jednorázová)

Pokud `wrangler deploy` selže s „You need to register a workers.dev subdomain":

```bash
TOKEN=$(grep '^oauth_token' ~/Library/Preferences/.wrangler/config/default.toml | sed 's/.*= "//;s/"$//')
curl -X PUT \
  "https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/workers/subdomain" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"subdomain":"<name>"}'
# JEDNORÁZOVÁ + permanent — výběr subdomény nelze měnit zdarma
```

### Stripe webhook — simulovaný test (bez reálné platby)

Worker neví, kdo poslal — jen ověří HMAC podpis. Můžu simulovat webhook lokálně:

```python
# python3 — simuluje POST z Stripe na worker, signed s WHSEC
import hmac, hashlib, time, json, urllib.request

SECRET = "<whsec_...>"            # ze Stripe Dashboard
ENDPOINT = "https://aiseo-pack-webhook.aiseo-optimalizace.workers.dev"
EMAIL = "test@example.com"

ts = int(time.time())
payload = {
    "id": f"evt_test_{ts}",
    "type": "checkout.session.completed",
    "data": {"object": {
        "id": f"cs_test_simulated_{ts}",
        "payment_status": "paid",
        "customer_email": EMAIL,
        "customer_details": {"email": EMAIL, "name": "Test"},
        "metadata": {}
    }}
}
body = json.dumps(payload, separators=(',', ':'))
sig = hmac.new(SECRET.encode(), f"{ts}.{body}".encode(), hashlib.sha256).hexdigest()
req = urllib.request.Request(
    ENDPOINT, data=body.encode(), method="POST",
    headers={
        "Content-Type": "application/json",
        "stripe-signature": f"t={ts},v1={sig}",
        "User-Agent": "Stripe/1.0 (+https://stripe.com/docs/webhooks)",  # důležité, CF blokuje Python UA s 1010
    }
)
print(urllib.request.urlopen(req, timeout=15).read().decode())
```

### PDF render workflow (kapitoly Packu)

```bash
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"

# Render jedné kapitoly:
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --virtual-time-budget=8000 \
  --print-to-pdf="_source/products/pack/output/pack-XX-name.pdf" \
  --print-to-pdf-no-header \
  "file:///Users/ultroncloudehome/Desktop/Ultron%20DISK/SNIPER%20DESIGN%20ULTRON/SNIPER%20DESIGN/aiseo-optimalizace.cz/_source/products/pack/pack-XX-name.html"

# Důležité:
# - --virtual-time-budget=8000 dá Chrome ~8 s na fetch fontů (jinak fallback fonts)
# - PŘI VOLÁNÍ PŘES Bash tool: nastavit dangerouslyDisableSandbox: true (network sandbox blokuje Google Fonts)
# - Verifikace: pdffonts <pdf> | grep -ic geist  → mělo by být > 10 (Geist embedded)

# Master PDF (dedup intro):
mkdir -p /tmp/pack-master-build
for ch in 01-homepage-v8 02-produkt-v7 03-kategorie-v4 04-blog-clanek-v4 \
          05-blog-vypis-v3 06-prodejni-landing-v3 07-kontaktni-stranka-v3 08-aplikace-v3; do
  src="public/_review/pack-${ch}.pdf"
  for p in 06 07 08 09 10 11 12 13 14 15; do
    pdfseparate -f $((10#$p)) -l $((10#$p)) "$src" "/tmp/pack-master-build/tmp-${p}.pdf"
  done
  pdfunite /tmp/pack-master-build/tmp-{06,07,08,09,10,11,12,13,14,15}.pdf \
           "/tmp/pack-master-build/kap-${ch%%-*}.pdf"
  rm /tmp/pack-master-build/tmp-*.pdf
done
pdfunite public/_review/pack-00-uvod-v2.pdf \
         /tmp/pack-master-build/kap-{01,02,03,04,05,06,07,08}.pdf \
         public/_review/pack-master-v1.pdf
```

### PDF audit (GPT-5.5)

```bash
# Sestavit brief s textovým přepisem stran + zadání → poslat na chat.py
python3 ~/.claude/skills/open-ai-api-core/scripts/chat.py \
  --system "Jsi přísný nezávislý auditor placených digitálních produktů. ..." \
  --input-file /tmp/audit-kapitola-XX.md \
  --model gpt-5.5 \
  --max-tokens 8000 \
  --output /tmp/audit-result.md \
  --verbose
# Pozor: gpt-5.5 nepodporuje --temperature 0.3, jen default (1.0)
```

### Manuální deploy fallback web (sekce 6.5 runbooku)

Pokud GitHub Actions selže:

```bash
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"
npm run build
REL="$(date -u +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD 2>/dev/null || echo manual)"
ssh aiseo-optimalizace-vps "mkdir -p /srv/apps/aiseo-optimalizace/releases/$REL/dist"
rsync -az --delete --exclude '.env' --exclude 'Icon' --exclude '.DS_Store' \
  dist/ "aiseo-optimalizace-vps:/srv/apps/aiseo-optimalizace/releases/$REL/dist/"
ssh aiseo-optimalizace-vps "cd /srv/apps/aiseo-optimalizace && ln -sfn releases/$REL current.new && mv -Tf current.new current && ls -1t releases | tail -n +6 | xargs -r -I{} rm -rf releases/{}"
```

### Audit klíčů na VPS (měsíční Režim A)

```bash
ssh aiseo-optimalizace-vps "awk '{print \$NF}' ~/.ssh/authorized_keys | sort | uniq -c"
# K 2026-07-18: 14 unikátních (audit 2026-05-24: 13; rostoucí počet sourozeneckých projektů na sdíleném VPS:
# aiseo, aiseo-en, geo-seo, blogcounter, brainycal, geotestzdarma, sniperdesign-web, ai-agentura…).
# Drift z původních 7 je očekávaný (víc sessions). Doporučení: dedikovaný klíč-audit přes sd-server-admin
# (namapovat každý záznam na vlastníka, zrušit osiřelé) — viz cross-session/server-admin.md.
```

### Před risky operací

1. `cross-session/server-admin.md` — paralelní práce?
2. `cross-session/aiseo-optimalizace.md` — vlastní rozdělané operace?
3. Heads-up do server-admin boardu (formát v2: `# 🟠 …` + `>` + `---`)
4. Provedení
5. Záznam výsledku do per-projekt boardu

---

## VI — Pravidla a rizika

### No-go akce (pro tuto session)

- **Žádné editace `/srv/apps/<jiný-projekt>/`** — to není moje doména.
- **Žádné password auth pokusy** — server odmítne (`PasswordAuthentication no`).
- **Žádné secrets** v repo, v boardech, v CLAUDE.md, v memory. Stripe webhook secret + Ecomail API key jen v CF Worker secret.
- **Žádné force-push na main**, žádné `--no-verify`, žádné `git reset --hard` bez explicitní žádosti uživatele.
- **Žádné mazání souborů z `_source/`** — source-of-truth pro Pack obsah + pillar.
- **Žádný `wrangler deploy` bez review diff** — Worker prochází přes LIVE Stripe webhooky, regression je $$$.
- **Žádná manipulace s `public/_review/` PDFs** — jsou linkované z LIVE Ecomail A2 e-mailu, smazání = 404 pro paid zákazníky.

### Rizika specifická pro tento projekt

- **macOS Finder `Icon\r`** — Excludováno v `.gitignore`. Pokud se objeví v `.git/refs/heads/Icon`, vyřešit dle log entry 2026-04-27.
- **Caddy je sdílený** — před reloadem heads-up do `server-admin.md`. Reload dělá sd-server-admin.
- **Tailwind 4 + Vite plugin Type mismatch** — `astro.config.mjs` má `/** @type {any} */` cast. Funkčně OK.
- **`set:html` + Astro scoped CSS — KRITICKÉ pro datové moduly** — obsah vložený přes `set:html` (datové moduly `src/content/pages/*.ts`) NEdostane Astro scope atribut (`data-astro-cid-*`). Scoped pravidlo `.X strong { color: violet }` se kompiluje na `.X[cid] strong[cid]` → vložený `<strong>` bez atributu NEMATCHNE → ztratí styl (violet nadpisy zčernají, odkazy ztratí styl). **Fix: obal potomka v `:global()`** → `.X :global(strong)` (rodič zůstane scoped, potomek matchne i bez atributu, žádný leak). Platí pro `strong`, `a`, `em`, `small`, `code` uvnitř set:html. Po refaktoru VŽDY vizuálně ověř barvy v prohlížeči (`getComputedStyle`), ne jen počty prvků — regrese 2026-05-22.
- **Nadpisy H2 mají povinné formátování — platí pro celý web** — čtenář stránku skenuje po nadpisech, takže holý text v H2 je chyba, ne volba. Každý H2 v sekcích, pilíři i v článcích nese **obojí, ne jen jedno** (78 z 79 nadpisů sekcí a pilíře to tak má): `<span class="hl">klíčový pojem</span>` (entita nebo téma, dostane barvu disciplíny přes `h2 .hl` v `global.css`), `<strong>pointa</strong>` (to, co čtenáře zastaví, `font-weight: 600`) a prostý text, který větu drží pohromadě. Příklad: `## Jak <span class="hl">režim AI</span> funguje — <strong>query fan-out</strong>`. **H3 zůstávají prostý text.** Stejný jazyk používají i rich titulky v `strings.ts` (`sectionFaqTitleHtml`, `relatedTitleHtml`). Stav k 2026-09-06: 7 sekcí + pilíř 100 %, **blog jen 174 z 1 337 H2** (24 ze 163 článků) — retrofit blogu je editorská práce pro blogger session, nedá se skriptovat.
- **Paleta značky Sniper Design je v `global.css`** (od 2026-09-06) — `--sd-deep`, `--sd-deeper`, `--sd-violet`, `--sd-magenta`, `--sd-gold`, `--sd-gold-deep`, `--sd-paper`, `--font-agency`. Používá ji `/audit/`, `/kontakt/`, oba Sniper Design kontaktní bloky a kontextové CTA v článcích. `audit/index.astro`, `kontakt.astro` a `sniperdesign/*Contact.astro` mají zatím vlastní identické kopie — při zásahu do nich je smaž a nech globální. **Nová komerční plocha má nosit tuhle paletu**, ne obecný modrý accent, jinak splyne s obsahem.
- **Dvě šířky obsahu — závazné pravidlo (od 2026-09-05)** — v `global.css` jsou tokeny `--w-read` (40rem, čitelné měřítko textu) a `--w-wide` (okraj obsahového rámu). **Text drží `--w-read`, všechno ostatní — tabulky, srovnání, datové bloky — `--w-wide`.** Levý okraj je společný, liší se jen pravý. Nezavádět třetí šířku: `/ai-mode/` mělo před opravou čtyři pravé okraje (770 / 978 / 1090 / 1353 px při 1440 px viewportu), po opravě dva (770 / 1295). Karta krátké odpovědi je výjimka: sahá na `--w-wide` a text v ní tu šířku využívá — štítek „Stručná definice" je nad textem, ne vedle něj. Hotovo v `src/pages/[slug].astro` (7 sekcí). **Zbývá** pilíř, blogové layouty (`RichLayout`, `blog/[slug]`) a datové stránky — každý má zatím vlastní šířky. Po zásahu do layoutu změř pravé okraje v prohlížeči, ne odhadem.
- **Markdownové tabulky se na mobilu ořezávaly** — `.article__prose table` má `width: 100%` + `overflow: hidden`, takže tabulka širší než sloupec textu neměla scroll a sloupce za okrajem nešly zobrazit vůbec (naměřeno 2026-09-05 na `/ai-mode/`: 525 px v kontejneru 335 px, stránka horizontálně nescrollovala). Fix: rehype plugin `rehypeScrollableTables` v `astro.config.mjs` obaluje každou tabulku do `div.table-wrap`, CSS v `global.css` (`overflow-x: auto`, pod 720 px `min-width: 34rem`). **Nové tabulky v MDX nepotřebují nic navíc**, wrapper se doplní při buildu. Po zásahu do tabulek ověř při 375 px, že `document.documentElement.scrollWidth === innerWidth`.
- **PDF render bez fontů** — pokud `dangerouslyDisableSandbox: true` chybí při Chrome `--print-to-pdf`, Google Fonts se nestáhnou a Chrome dá fallback (Menlo / Times). Verifikuj `pdffonts | grep -ic geist > 10`.
- **CF Worker — Stripe LIVE webhook regression risk** — každý `wrangler deploy` jde rovnou na LIVE traffic. Žádný staging. Mitigace: typecheck `npx tsc --noEmit` před deploy + simulovaný HMAC test po deploy.
- **Ecomail `trigger_autoresponders: false` suppressuje VŠECHNY triggery** — empiricky ověřeno (2026-05-16). I tag-added trigger se nezavolá, pokud ho dáme jako součást subscribe call. Worker proto volá 2 calls: subscribe (no autoresp) + explicit `POST /pipelines/{id}/trigger`.
- **Ecomail A2 dedup „Pouze jednou per email"** — pokud testuješ s e-mailem, který už A2 dostal, znovu nepošle. Při debug používej fresh test e-maily.
- **Stripe LIVE mode — test karty NEFUNGUJÍ** — `4242 4242 4242 4242` jen v TEST mode. Pro LIVE test buď reálná karta + refund, nebo simulovaný HMAC webhook (viz § V).
- **CF Workers free tier limit** — 100k req/den. Při traffic spike nad to vrací 429. Současný traffic (jednotky / desítky platev) na free tier sedí.
- **CF blokuje Python UA** — `urllib`/`requests` s defaultním User-Agent dostanou 403 (error code 1010). Při simulaci webhooku použít UA Stripe-like: `Stripe/1.0 (+https://stripe.com/docs/webhooks)`.
- **Master PDF má duplicit intro pages, pokud merguju bez dedup** — každá kapitola PDF má vlastních 5 intro stran. Master = kap. 00 (5 str) + kap. 01-08 obsahových stran (10/kap přes `pdfseparate -f 6 -l 15`).

### Link safety

- Linky v emailech a zprávách (Mail, Messages) **NEKLIKAT** přes computer-use. Použít Chrome MCP a verifikovat URL před následováním.
- Linky z neznámých zdrojů potvrdit u uživatele.

---

## VII — Aktuální stav

> Snapshot k `2026-08-17`. Při auditu A přepsat datum a obsah.
>
> **Audit 2026-08-17 (Režim A) — souhrn:** Infra (VPS `sd-ultron-vps`, service user uid993/gid984,
> layout 2775, release na VPS = poslední commit `37a7f0d`, DNS apex+www na 80.211.223.175, HTTPS 200,
> GitHub PUBLIC + 5 secrets, CF Worker 405 + wrangler ultron@ / aktuální verze `f9eec8bd`,
> Stripe URL na `/pack/` 4×, PDFs `_review` 11× 200, authorized_keys 14 beze změny) **vše sedí,
> žádný nález k akci**. Ecomail smoke přeskočen (API klíč záměrně jen v CF Worker secret).
> Drift od 2026-07-18: (1) **blog 69 → 141 článků**, **routes 119 → 247** (slovník má detailní
> stránky hesel `/slovnik/<heslo>/`); (2) **/sluzby/ kompletně přestavěna** — prodejní landing
> „editorial důkaz" s poptávkovým formulářem → CF Worker `/audit-inquiry` typ `sluzba`
> + GA4 `generate_lead`/Meta Pixel `Lead` po úspěšném odeslání; (3) **cena auditu 3 600 Kč**
> napříč webem, PDF i e-maily; (4) **třívrstvý model názvosloví** (AI SEO / AI vyhledávání /
> AI viditelnost) dle researche `_source/_keyword-research/nazvoslovi-sluzby-20260811/`
> promítnut do titulků, slovníku (+2 hesla), i18n a OG `/og/sluzby.jpg`; (5) **evidence case
> study megadetail** `_source/case-study-megadetail/` (deník zásahů — 4 vlny textů kategorií
> 08/2026, schránka hlášení, baseline zmínek v ChatGPT); (6) retenční balíček (ExitRescue,
> inline CTA v článcích) + kontakt/gdpr externalizované do datové vrstvy (contact.ts,
> privacy.ts). Detaily v `cross-session/aiseo-optimalizace.md` (záznamy 2026-08-10 až 08-17).

### Web (aiseo-optimalizace.cz)

| Co | Stav | Detail |
|---|---|---|
| Pillar průvodce | ✅ live | `/seo-vs-geo-vs-aeo-vs-aio/`, ~3000 slov, FAQ + JSON-LD |
| 6 sekcí | ✅ live | SEO/GEO/AEO/AIO/Praktický postup/Rozhodovací matice, každá ~1300 slov |
| Defenzivní článek | ✅ live | `/jak-vypnout-ai-overview/`, HowTo + FAQPage schema |
| Blog článek pro e-shopy | ✅ live | `/seo-pro-eshopy-ai-era-2026/`, ~2600 slov |
| Free lead magnet | ✅ live | `/navod-zdarma/` + Ecomail A1 → e-mail s `free-homepage-final.pdf` |
| Lighthouse | ✅ launch-ready | A11y 100, P 92-100, BP/SEO 100 |
| Self-host fonts | ✅ live | Geist + JBM v `public/fonts/`, Kumbh Sans v `public/sniperdesign/fonts/` |
| OG images | ✅ live | 9 unikátních PNG + WebP, favicon SVG + PNG 32 + apple-touch 180 |
| GSC + GA4 | ✅ live | GA4 `G-BG0FVWG0YH`, GSC verified, oba přes `PUBLIC_*` env Secrets |

### AI SEO Wireframe Pack (komerční produkt)

| Co | Stav | Detail |
|---|---|---|
| 9 PDFs + master | ✅ schválené | všech 8 obsahových kapitol + úvod + master 85 stran, GPT-5.5 auditované |
| /_review/ produkční PDFs | ✅ live, 11 souborů | path je v robots.txt Disallow, ale veřejně dostupný |
| `/pack/` landing | ✅ live | Stripe Payment Link aktivní, 3 CTA, reálné hero PDF náhledy v `public/pack/preview/` |
| `/pack/dekujeme/` | ✅ live | success URL pro Stripe redirect |
| Stripe Product + Payment Link | ✅ LIVE | „AI SEO Wireframe Pack" 1 490 Kč CZK, `https://buy.stripe.com/4gM9AU8Km1wm6vY4Hw0VO00` |
| Stripe webhook endpoint | ✅ LIVE | „aiseo-optimalizace PRO PDF" Active, `checkout.session.completed` jen |
| CF Worker `aiseo-pack-webhook` | ✅ live | Version `f9eec8bd` (2026-08-09): + /audit-inquiry typ=sluzba šablony, oprava ceny auditu v auto-reply (3 600) |
| Ecomail list 12 + tag `pack-paid` | ✅ live | sdílený s free flow |
| Ecomail A2 (pipeline 44112) | ✅ live | trigger=tag pack-paid, paste-nutá HTML šablona z `email-pack-paid-v2.html`, dedup pouze jednou |
| End-to-end test | ✅ done | 5 API testů (Ecomail) + 2 simulované Stripe HMAC webhooky → e-mail dorazil do `info@`, `kamil@sniperdesign.cz` |

### Backlog (známé následující úkoly)

- **Revize sekcí 9/2026 — rozpracovaná** — zdroj `_source/_keyword-research/revize-sekci-20260905/` (necommitováno, obsahuje GSC exporty). Pracovní evidence: `CHECKLIST.md` (20 stránek + 7 globálních oprav + část B pro bloggera), počítadlo `polozky.csv` (723 položek, 691 k práci), přepočet `python3 stav.py`. Rozhodnutí uživatele 2026-09-05: AIO = „Přehledy od AI“ (datum v ČR 20. 5. 2025), cookie lišta odložena, `/cenik/` zamítnut, `/nastroje/ai-check/` odložen.
- ~~**Audit landing URL swap**~~ — ČÁSTEČNĚ (audit 2026-05-24): `/pack/` a `/pack/dekujeme/` odkazují na `/audit/`. **Neplatí pro celý web** — revize 2026-09-05 našla `sniperdesign.cz/audity` v 18 souborech (sekce, pilíř, 10 článků, `contact.ts`); vede se jako G2 v CHECKLIST.md. E-mail šablona `email-pack-paid-v2.html` stále neověřena (mimo web).
- **Vyhodnotit přejmenování rodiny „režim AI" — 3. 10. 2026** (4 týdny od zásahu 5. 9.). Baseline, kritéria úspěchu a postup: `_source/_keyword-research/revize-sekci-20260905/_evidence/mereni-rezim-ai-20260905.md`. Rodina `/ai-mode/` + `rezim-ai-google` + `ai-mode-cesky` = 14 429 impresí / 28 kliků za 90 d; `/ai-mode/` mělo 1 276 impresí a 0 kliků na pozici 6,1. Přesměrování NEbylo nasazeno — zvažovat až podle dat.
- **Série díl 9+10** — až blogger vydá „Recenze a hodnocení pro AI" a „Produktový feed a GTIN" (v obsahovém plánu), přidat slugy do `src/i18n/series.ts` parts a smazat z planned.
- **Další běh měření AI viditelnosti ~20. 8. 2026** — oba configy (aiseo-optimalizace, megadetail) beze změny promptů, výsledek do deníku § 3b + Freelo 31576165. Pokud po 20. 8. neproběhl (kontrola: nejnovější složka v `Tools/měření AI viditelnosti/runs/`), PŘIPOMENOUT uživateli.
- **Datový check ~25. 8. 2026** — vyhodnocení srpnových zásahů: CTR refreshe (/ai-mode/, jak-vypnout-ai-overview, pripadova-studie), pozice „ai viditelnost", generate_lead lead_type=sluzba, dopad ExitRescue/inline CTA.
- **Kvartální datový report** — říjen 2026 (Q3 data): refresh case study + proof.ts + ai-viditelnost.ts + screenshoty najednou; společně s Q3 snapshotem deníku megadetail (`_source/case-study-megadetail/DENIK.md`).
- **Stažitelné checklisty (lead magnets)** — ODLOŽENO uživatelem 2026-07-18 („jiné PDF zatím vytvářet nechci") — nenavrhovat, dokud sám neotevře.
- **Reálný kartový test celé chain** — volitelné, ověření že Stripe checkout UI + redirect + dekujeme stránka chodí end-to-end. Drobný 1.5 % fee zůstane při refundu.
- **Stripe Tax (DPH)** — pokud CPU s.r.o. plátce DPH a chce automatické DPH na fakturách
- **Faktura via Stripe vs. vlastní fakturační systém** — momentálně faktura vystavená samostatně mimo Stripe

### Recovery & operations

| Co | Stav |
|---|---|
| SSH klíč na VPS | ✅ klíč #7 v authorized_keys |
| Service user + layout | ✅ `/srv/apps/aiseo-optimalizace/`, mode 2775 |
| GitHub repo + Actions | ✅ deploy.yml live, CI ~1-2 min |
| Caddy bloky (apex + www) | ✅ live |
| HTTPS + LE cert | ✅ valid (90 dní, autorenew) |
| Per-projekt board | ✅ live, `cross-session/aiseo-optimalizace.md` |
| Servisní fronta | ✅ prázdná |
| CLAUDE.md | ✅ audit Režim A 2026-07-18 (snapshot, pages 119 routes, blog 69, obsahová infrastruktura, wrangler OAuth nález, key drift 13→14) |

---

## VIII — Údržba souboru (B + A)

> **Závazný režim** dle `cross-vps/CLAUDE_MD_GUIDELINES.md` § 7.

### Režim B — průběžně, automaticky

Kdykoli udělám akci se strukturálním dopadem, aktualizuji odpovídající sekci CLAUDE.md **v tomtéž tahu**:

| Co se stalo | Co updatuju |
|---|---|
| Vznikl GitHub repo / nový vendor (CF, Stripe, ...) | § II Klíčová fakta, § IV Sdílené resources, § VII Aktuální stav |
| Přibyl Caddy blok | § IV, § VII |
| Změnil se Astro / Tailwind major upgrade | § II Tech stack |
| Přidal se nový postup (Stripe webhook, PDF render, ...) | § V Postupy |
| Změnila se baseline klíčů na VPS / Worker secrets | § II, § IV |
| Nové gotcha | § VI Rizika |
| Nový produkt nebo deliverable (Pack, e-mail šablona, ...) | § II, § III, § VII |
| Worker code změna se strukturálním dopadem | § II Cloudflare, § V Worker postupy, § VI Worker rizika |

Žádné výmysly. Při nejistotě ověř (ssh, gh, dig, ls, `wrangler tail`, curl) nebo vynech.

### Režim A — měsíční audit na trigger uživatele

Když uživatel řekne *„audit CLAUDE.md vs realita"*:

1. `ssh aiseo-optimalizace-vps "<verifikace § II hodnot>"`
2. `gh repo view ultron-sniperdesign/aiseo-optimalizace`
3. `dig +short aiseo-optimalizace.cz www.aiseo-optimalizace.cz`
4. `cd worker && npx wrangler whoami` + `npx wrangler deployments list`
5. `curl -sSI https://aiseo-pack-webhook.aiseo-optimalizace.workers.dev` (smoke worker)
6. `curl -sS -H "Key: <api>" https://api2.ecomailapp.cz/lists/12` (smoke Ecomail)
7. `curl -s https://aiseo-optimalizace.cz/pack/ | grep -oE 'buy\.stripe\.com/[a-zA-Z0-9_]+'` (smoke Stripe URL na landing)
8. Projít log v `cross-session/aiseo-optimalizace.md` od posledního mtime CLAUDE.md
9. Zaznamenat snapshot diff
10. Přepsat datumy „k YYYY-MM-DD" na nový datum
11. Log do `cross-session/aiseo-optimalizace.md` ve formátu „Audit CLAUDE.md vs realita 2026-MM-DD: …"

Příští audit: **2026-09-17** (měsíční kadence od auditu 2026-08-17).

---

## IX — Recovery procedure

Když budoucí Claude session vstoupí do tohoto projektu:

```bash
# 1. Cd do projektu
cd "/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz"

# 2. Přečti tento CLAUDE.md
cat CLAUDE.md

# 3. Přečti hlavní runbook (referenční)
cat "../cross-vps/VPS_ONBOARDING.md"

# 4. Přečti per-projekt board pro nejnovější stav
cat "../cross-session/aiseo-optimalizace.md"

# 5. Přečti servisní board
tail -100 "../cross-session/server-admin.md"

# 6. Ověř SSH alias funguje
ssh aiseo-optimalizace-vps "hostname && whoami && id"

# 7. Ověř layout na VPS
ssh aiseo-optimalizace-vps "ls -la /srv/apps/aiseo-optimalizace/ && stat -c '%a %U:%G' /srv/apps/aiseo-optimalizace"

# 8. Ověř GitHub repo + Secrets
gh repo view ultron-sniperdesign/aiseo-optimalizace
gh secret list --repo ultron-sniperdesign/aiseo-optimalizace

# 9. Ověř DNS + HTTPS
dig +short aiseo-optimalizace.cz
curl -sSI https://aiseo-optimalizace.cz | head -1

# 10. Ověř Pack landing + Stripe URL
curl -s https://aiseo-optimalizace.cz/pack/ | grep -oE 'buy\.stripe\.com/[a-zA-Z0-9_]+'
# očekávaně: https://buy.stripe.com/4gM9AU8Km1wm6vY4Hw0VO00 (3× — hero, sticky, final CTA)

# 11. Ověř CF Worker
curl -sSI https://aiseo-pack-webhook.aiseo-optimalizace.workers.dev | head -2
# očekávaně: HTTP/2 405 (GET není dovolen, jen POST)
cd worker
npx wrangler whoami
# očekávaně: e-mail uživatele + account ID 3f243ec350dfcb03f53ae93eaa886468

# 12. Ověř produkční PDFs Packu
for f in pack-master-v1 pack-00-uvod-v2 pack-01-homepage-v8 pack-02-produkt-v7 \
         pack-03-kategorie-v4 pack-04-blog-clanek-v4 pack-05-blog-vypis-v3 \
         pack-06-prodejni-landing-v3 pack-07-kontaktni-stranka-v3 pack-08-aplikace-v3 \
         free-homepage-final; do
  curl -sSI "https://aiseo-optimalizace.cz/_review/$f.pdf" | head -1
done
# očekávaně: 11× HTTP/2 200

# 13. Lokální build smoke test
nvm use 20 2>/dev/null || true
npm install --no-audit --no-fund
npm run build
```

Pokud kterýkoli krok selže, **NEdomýšlej**:
- Mrkni do log v `cross-session/aiseo-optimalizace.md` na poslední záznam
- Mrkni do servisní fronty v `server-admin.md`
- Pokud nejasné, otázka uživateli (formát v2: `# 🟠 Dotaz pro tebe` + `>` + `---`)

Pokud `~/.claude/projects/.../memory/MEMORY.md` neexistuje, vytvoř ho z guidelines § 7.

---

## X — Glosář (lokální)

| Pojem | Význam |
|---|---|
| **Pillar** | hlavní průvodce ~3000 slov s FAQ + schema, slug `/seo-vs-geo-vs-aeo-vs-aio/` |
| **Sekce** | jedna ze 6 hlubokých subpages (SEO, GEO, AEO, AIO, Praktický postup, Rozhodovací matice) |
| **Krátká odpověď** (dříve „answer block") | 40–60 slov definice nahoře v článku/produktu, do které AI scrapery čerpají citaci. Tučně. |
| **Prolinkování mezi stránkami** (hub-and-spoke) | obsahová architektura — pillar = hub, 6 sekcí = spokes. Křížové prolinkování. |
| **Service user** | unprivileged Linux uživatel `aiseo-optimalizace` (uid 993, gid 984, nologin), vlastník `/srv/apps/aiseo-optimalizace/` |
| **AIO** | dva významy: (a) Google AI Overviews funkce, (b) AI Optimization deštník nad SEO+GEO+AEO. V Packu používáme jen význam (a). |
| **Pack** | „AI SEO Wireframe Pack" — komerční placený produkt, 1 490 Kč jednorázově. 9 PDFs + master 85 stran. |
| **Master PDF** | `pack-master-v1.pdf` — kompletní dokument se všemi 9 kapitolami v jednom souboru (85 stran). Dedup intro: kap. 00 (5 str) + obsahové strany kap. 01-08 (10/kap přes `pdfseparate -f 6 -l 15`). |
| **CF Worker** | Cloudflare Worker `aiseo-pack-webhook` — JS/TS serverless funkce na `aiseo-pack-webhook.aiseo-optimalizace.workers.dev`. Přijme Stripe webhook, ověří HMAC, zavolá Ecomail API. |
| **Stripe Payment Link** | URL `https://buy.stripe.com/...`, kterou Stripe vygeneruje z Product → klik na ní = redirect na hostovaný checkout. Žádný backend potřeba u publishera. |
| **Webhook signing secret** | `whsec_...` ze Stripe Dashboard. Worker s tím ověřuje HMAC-SHA256 podpisu `stripe-signature` headeru. NIKDY do gitu. |
| **Ecomail List ID** | číslo (12) seznamu kontaktů. Sdílený mezi free leads a paid customers, rozlišení přes tag. |
| **Ecomail Pipeline ID** | číslo (44016, 44112) konkrétní automation. Worker volá `POST /pipelines/{id}/trigger` pro explicit spuštění. |
| **trigger_autoresponders** | flag v Ecomail `subscribe` API. `true` = spustit „subscribed" autoresponder. `false` = NESPUŠTĚT žádné triggers (i tag-added!) — proto worker volá explicit pipeline trigger jako 2. call. |
| **A1, A2** | interní názvy: A1 = free pack autoresponder (pipeline 44016), A2 = paid pack delivery automation (pipeline 44112) |
| **Strukturovaná data** (dříve „schema markup") | strojově čitelné JSON-LD podklady (Product, FAQPage, Article, ...) pro vyhledávače a AI. V Packu jsou ukázky pro vývojáře. |
