# aiseo-pack-webhook

Cloudflare Worker — bridge mezi Stripe (`checkout.session.completed`)
a Ecomail (subscribe + trigger autoresponder).

## Co to dělá

1. Stripe pošle webhook po dokončené platbě za AI SEO Wireframe Pack
2. Worker ověří Stripe podpis (HMAC-SHA256)
3. Vytáhne customer e-mail + jméno z checkout session
4. **Krok A**: `POST /lists/{ECOMAIL_LIST_ID}/subscribe` s tagem `pack-paid`
   a `trigger_autoresponders: false` → kontakt v listu + tag, **bez**
   spuštění autorespondérů
5. **Krok B**: `POST /pipelines/{ECOMAIL_PIPELINE_ID}/trigger` s `{email}` →
   explicitně spustí paid delivery automation (A2)

### Proč 2 calls místo tag-trigger automation

Empiricky ověřeno 2026-05-16: `trigger_autoresponders: false` v subscribe
suppressuje **všechny** trigger evaluations (nejen "subscribed" trigger pro
free flow, ale i "tag added" trigger). To je důsledek toho, že Ecomail
podle všeho interpretuje subscribe-with-tag jako atomic operation.

Bez `trigger_autoresponders: false` by se ale free flow autoresponder (A1,
trigger=subscribed) zavolal pro každého paid zákazníka, který přišel rovnou
přes platbu bez free signup → duplicit e-mailů.

Řešení: explicitní `POST /pipelines/{id}/trigger` mimo subscribe logiku.
Funguje pro nové i existující kontakty.

## Lokální dev

```bash
cd worker
npm install
npx wrangler dev          # localhost:8787
```

## Deploy

Jednorázový setup (vyžaduje Cloudflare účet):

```bash
cd worker
npm install
npx wrangler login        # otevře browser, přihlas se k CF
```

Nastavit secrets (NIKDY do gitu):

```bash
npx wrangler secret put STRIPE_WEBHOOK_SECRET
# vlož: whsec_... (ze Stripe Dashboard → Developers → Webhooks → tvůj endpoint → "Reveal" signing secret)

npx wrangler secret put ECOMAIL_API_KEY
# vlož: API klíč z Ecomail (Nastavení → API)
```

Upravit `wrangler.toml`:

- `ECOMAIL_LIST_ID` — ID Ecomail listu, do kterého worker přidává kontakty
  (např. nový list „Pack zákazníci")

Deploy:

```bash
npx wrangler deploy
# vrátí URL: https://aiseo-pack-webhook.<your-cf-subdomain>.workers.dev
```

## Stripe webhook setup

V Stripe Dashboard:

1. Developers → Webhooks → Add endpoint
2. URL: `https://aiseo-pack-webhook.<your-cf-subdomain>.workers.dev`
3. Events to send: jen `checkout.session.completed`
4. Reveal signing secret → uložit jako `STRIPE_WEBHOOK_SECRET` secret (viz výše)
5. Test: Send test webhook → mělo by vrátit 200 OK

## Ecomail setup

**Architektura: jeden list (sdílený s free flow), tag `pack-paid` na paid zákazníky.**

Důvod: zákazník je v Ecomailu jen jednou, žádné duplicity. Free i paid
flow běží jako oddělené automatizace nad stejným listem, segmentované přes
trigger:

- Free flow: form na `/navod-zdarma/` → POST na Ecomail subscribe endpoint
  → kontakt přidán do listu (bez tagu) → automation A1 (trigger = subscribed)
  → e-mail s free PDF
- Paid flow: Stripe → tento worker → subscribe + tag `pack-paid` s
  `trigger_autoresponders: false` (A1 se nezavolá) → automation A2
  (trigger = tag added) → e-mail s paid Pack download linky

V Ecomail dashboardu:

1. **List**: použít existující list, do kterého chodí leady z `/navod-zdarma/`
   (typicky ID 12 „Lead — Návod zdarma"). **Není potřeba zakládat nový.**
2. Vložit ID listu do `wrangler.toml` jako `ECOMAIL_LIST_ID`
3. Vytvořit **automation A2**:
   - Trigger: "Kontaktu byl přidán tag" → tag `pack-paid`
   - E-mail: download linky na master PDF + jednotlivé kapitoly
4. API klíč: Nastavení → API → vygenerovat → uložit jako `ECOMAIL_API_KEY` secret

## Tail (live logs)

```bash
cd worker
npx wrangler tail
```

Zobrazí console.log + console.error v reálném čase.

## Co worker NEDĚLÁ

- Negeneruje fakturu (Stripe ji posílá v payment receipt automaticky, nebo
  napojit Stripe Invoicing / český fakturační systém)
- Nehostuje PDF (PDFs jsou statické soubory v `public/_review/` nebo
  `public/pack/download/`, Ecomail e-mail je linkuje přímo)
- Negeneruje signed URL — kdokoli s linkem může stáhnout. Pro v1 OK,
  později lze nahradit signed URLs (R2 + Worker route).
