# Research — AI SEO na WordPressu

**Datum:** 2026-06-11
**Cílová kategorie:** tutorial
**Slug:** `ai-seo-wordpress`
**Cílové KW:** ai seo wordpress / wordpress pro ai vyhledávání / wordpress llms.txt / wordpress robots.txt ai

## 1. Kontext

- WordPress = nejrozšířenější CMS na světě (~40 % všech webů 2026).
- Přechod na AI vyhledávání znamená pro WP weby několik **konkrétních úprav**, které lze ve většině případů řešit pluginy nebo přes existující SEO pluginy.
- Cíl článku: praktický návod pro CZ majitele WordPress webu nebo malou agenturu — co a v jakém pořadí udělat.

## 2. AI crawler user-agents 2026 (kritické)

Hlavní AI crawlery, které je v robots.txt potřeba řešit:

- **GPTBot** (OpenAI training)
- **OAI-SearchBot** (OpenAI live search — POZOR: NENÍ totéž jako GPTBot!)
- **ClaudeBot** (Anthropic — Claude-Web a anthropic-ai už neaktivní)
- **PerplexityBot** (Perplexity)
- **Google-Extended** (Google DeepMind training)
- **Meta-ExternalAgent** (Meta AI)

Plus standardní:
- **Googlebot** (běžné SEO)
- **Bingbot** (běžné SEO + Bing AI = Copilot)

## 3. WordPress SEO plugin landscape 2026

Hlavní 4 pluginy:

| Plugin | Pro AI éru |
|---|---|
| **Yoast SEO** | Strukturovaná data (Organization, Article, Product, FAQPage), XML sitemap, robots.txt editor (free), Schema graph |
| **Rank Math** | Schema generator (Article, FAQ, HowTo), AI integration, robots.txt editor, free plán štědrý |
| **SEOPress** | Schema, robots.txt, Google Tag Manager integration, GDPR friendly |
| **All in One SEO (AIOSEO)** | Schema generator, robots.txt editor, redirect manager |

Pro AI SEO 2026 **všechny 4 fungují**. Konkrétní výběr záleží na preferenci.

## 4. llms.txt pluginy pro WordPress

- **Website LLMs.txt** (30 K active installs, 4,7 rating, mart 2026 update). Integrace s Yoast, Rank Math, SEOPress, AIOSEO. Automaticky generuje a aktualizuje llms.txt.
- **LLMs.txt and LLMs-Full.txt Generator** — alternativa, generuje plnou verzi s URL.
- **LLMagnet — AIO GEO AEO SEO Optimizer** — all-in-one s analytics dashboardem pro AI bot traffic.

## 5. Co konkrétně dělat (kroky)

### Krok 1: SEO plugin už máte
Pokud máte funkční SEO plugin (Yoast, Rank Math, SEOPress, AIOSEO) a strukturovaná data fungují, AI SEO základ máte. Pokud ne, nainstalovat jakýkoliv z těchto pluginů.

### Krok 2: llms.txt
Instalace pluginu Website LLMs.txt (nejjednodušší cesta) nebo manuální vytvoření `llms.txt` v rootu domény. Verifikace přes `curl -I https://vasweb.cz/llms.txt` → 200.

### Krok 3: robots.txt pro AI crawlery
Default WordPress robots.txt je minimální. Pro AI SEO:
- Povolit GPTBot, ClaudeBot, PerplexityBot, Google-Extended (cílíme na citace v AI odpovědích).
- Blokovat Bytespider (~90 % AI crawler traffic, často ignoruje robots.txt anyway).
- Blokovat admin: `/wp-admin/`, `/wp-login.php`, parametry typu `?s=` (interní vyhledávání).

**Šablona pro AI SEO WordPress robots.txt:**
```
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /?s=
Disallow: /search/
Allow: /wp-admin/admin-ajax.php

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Bytespider
Disallow: /

Sitemap: https://vasweb.cz/sitemap_index.xml
```

### Krok 4: Strukturovaná data
SEO plugin obvykle automaticky generuje:
- **Article** (na blogových postech)
- **Organization** (na homepage)
- **WebSite** (search action)
- **BreadcrumbList**

Manuálně doplnit:
- **FAQPage** — FAQ blok na produktové/service stránce.
- **Product** + **Offer** + **AggregateRating** — pro e-shopy (WooCommerce).
- **Person** — autorské stránky (pro E-E-A-T signál).

### Krok 5: Performance & Core Web Vitals
- Cache plugin: **WP Rocket** (paid), **W3 Total Cache**, **LiteSpeed Cache** (free), **WP Super Cache**.
- Image optimization: **ShortPixel**, **Imagify**, **Smush**.
- Cíle: LCP < 2,5 s, INP < 200 ms, CLS < 0,1.
- Hosting kvalita = největší dopad (managed WordPress hosting jako Kinsta, WP Engine, nebo CZ Wedos/Forpsi managed WP).

### Krok 6: CDN a WAF
- **Cloudflare** (free tier) — od 2024 má **Block AI Bots toggle**, který **přepisuje robots.txt**. Pokud máte zapnutý, AI crawlery nedostanou nic.
- **Pro AI SEO doporučení:** vypnout Cloudflare Block AI Bots a místo toho použít granular robots.txt.
- **AWS CloudFront, Fastly, Bunny CDN** — vlastní pravidla.

### Krok 7: Accessibility tree (pro Lighthouse Agentic Browsing)
- Každý `<button>`, `<a>`, `<input>` musí mít text nebo `aria-label`.
- WordPress výchozí témata (Twenty Twenty-Four+) tohle splňují, ale custom temata často ne.
- Plugin: **WP Accessibility** nebo manuální audit.

## 6. WooCommerce specifika

WooCommerce (~28 % všech e-shopů na světě) má další konkrétní AI SEO úkoly:

- **Product schema** — WooCommerce + SEO plugin automaticky. Doplnit Offer, AggregateRating.
- **FAQ na produktu** — manuální blok nebo plugin (např. **Yoast WooCommerce SEO**).
- **Kategoriové texty** — top + bottom intro s konkrétními informacemi (ne jen produkty).
- **Recenze** — Trusted Shops, Heureka, Google reviews + integrace zpět na produkt (Review schema).

## 7. Co dělat pro AI viditelnost mimo plugin

- **Pravidelná aktualizace obsahu** (Lighthouse: stránky bez aktualizace v čtvrtletním rozsahu mají vyšší riziko ztráty AI citací).
- **Konkrétní čísla, statistiky, vlastní data** — AI cituje primární zdroje.
- **Krátké citovatelné úseky** 50–150 slov.
- **Author entity** — autorská stránka s LinkedIn, foto, bio = E-E-A-T signál.

## 8. CZ specifika

- **WordPress je v CZ silný** — odhadem 35–40 % CZ webů.
- **Hosting:** Wedos, Forpsi, WebSupport, Hosting CZ, Active 24 — všichni mají managed WordPress.
- **CZ SEO pluginy nejsou** — používají se mezinárodní (Yoast atd.).
- **Český jazyk** v llms.txt a obsahu funguje pro CZ dotazy v AI, ale anglická Wikipedia/Reddit/atd. jsou pro mezinárodní dotazy důležitější.

## 9. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec"
- "garantujeme" → "může zvýšit"
- "bot/crawler" → "vyhledávací robot" nebo specifický název (GPTBot, ClaudeBot)
- "AIO" → "Google AI Overviews"
- "plugin" → ponechat (standardní WP termín)
- "toggle" → "přepínač"
- "WAF" → "firewall na úrovni aplikace (WAF)" při prvním výskytu

## 10. CTA pozice

- Tutorial → **primárně Pack 1 490 Kč** (DIY šablony, checklist pro WP AI SEO setup).
- Sekundárně **Audit 9 990 Kč** (profesionální audit + plán pro váš konkrétní WP web).
- Transparentní zmínka Sniperdesign + Upgates Gold partner — Sniperdesign primárně Upgates, ne WordPress, ale podobné principy platí.
