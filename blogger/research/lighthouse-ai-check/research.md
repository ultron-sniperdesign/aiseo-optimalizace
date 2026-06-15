# Research — Lighthouse a AI-readiness audit

**Datum:** 2026-06-11
**Cílová kategorie:** tutorial
**Slug:** `lighthouse-ai-check`
**Cílové KW:** lighthouse ai check / lighthouse agentic browsing / ai readiness audit / lighthouse llms.txt

## 1. Co je Lighthouse Agentic Browsing

- **Nová kategorie** v Google Lighthouse vedle Performance, Accessibility, Best Practices, SEO.
- Měří, **jak dobře je web připravený pro AI agenty** (modely jako ChatGPT Agent, Claude Browser, Perplexity Browse, Gemini Pro).
- **Lighthouse 13.3** (released 7. května 2026) — Agentic Browsing v default config.
- **PageSpeed Insights** zdědil do 2 týdnů, **Chrome 150 DevTools** následuje.

## 2. 4 oblasti, které audit kontroluje

### a) llms.txt
- Strojově čitelný souhrn obsahu v rootu domény (`/llms.txt`).
- Lighthouse kontroluje **přítomnost a základní strukturu**.
- Pokud chybí, fail v této kategorii.

### b) WebMCP
- WebMCP = **frontend protokol** pro AI agenty (na rozdíl od backend MCP serverů).
- Umožňuje webu nabídnout AI agentovi **konkrétní akce** (přidej do košíku, odešli formulář, vyhledej produkt).
- Lighthouse kontroluje, jestli web implementuje WebMCP endpointy.
- Stále vyvíjející se standard — 2026 spíš experimentální.

### c) Accessibility tree
- AI agenti se spoléhají na **accessibility tree** jako primary data model.
- Lighthouse kontroluje **konkrétní subset accessibility auditů** kritických pro stroje:
  - **Names and labels** — každý interactive element musí mít programmatic name (button, link, input).
  - ARIA atributy (role, label, describedby).
  - Tab order a focus management.

### d) Cumulative Layout Shift (CLS)
- Pro agenty **kriticky důležitý** — agent klikne na element, ale ten se mezitím posunul = chyba.
- Lighthouse měří **stejnou metriku CLS jako u Performance**, ale ve Agentic Browsing váženě jinak.
- Cíl: **CLS < 0,1** (stejně jako u standardní Core Web Vitals).

## 3. Jak skórování funguje

- **Nepoužívá** klasické 0-100 weighted score jako Performance/SEO.
- Místo toho: **fractional pass ratio** — kolik z N checků prošlo (např. „3 of 4 checks passed").
- Důvod: standardy pro agentic web stále vyvíjející, Google zatím sbírá data.
- **Pass/fail signaly** jsou actionable — řeknou ti, co konkrétně opravit.

## 4. Jak spustit Lighthouse audit

### Chrome DevTools (doporučená cesta)
1. Otevřít stránku v Chrome.
2. Pravé tlačítko → "Inspect" → tab Lighthouse.
3. Vybrat kategorie (zaškrtnout Agentic Browsing).
4. Vybrat device (mobile / desktop).
5. Click "Analyze page load".
6. 30–60 s běh, výstup report s pass/fail checky.

**Výhody:** funguje na local sites, authenticated pages, dev environment.

### PageSpeed Insights (web nástroj)
1. Jít na `https://pagespeed.web.dev/`.
2. Vložit URL.
3. Click Analyze.
4. Výstup: stejné Lighthouse, ale pouze public URL.

### CLI (CI/CD pipeline)
```bash
npm install -g lighthouse
lighthouse https://example.com --output html --output-path ./report.html
```

## 5. Co optimalizovat (priority)

### Priorita 1: llms.txt
- Snadná oprava, vysoký dopad.
- 5 minut implementace (statický markdown soubor).
- Existující článek: [llms.txt návod](https://aiseo-optimalizace.cz/blog/llms-txt-navod/).

### Priorita 2: accessibility tree (names and labels)
- Druhá nejlevnější oprava.
- Každé `<button>`, `<a>`, `<input>` musí mít text nebo `aria-label`.
- Audit ARIA atributů, role, focus management.
- Pomáhá i pro klasické accessibility skóre + standard SEO.

### Priorita 3: CLS optimalizace
- Vyřešit layout shift kvůli pomalu načítaným elementům, fontům, images bez `width/height`.
- Cíl: CLS < 0,1.
- Stejná optimalizace jako pro standardní Core Web Vitals.

### Priorita 4: WebMCP (volitelné, pokročilé)
- Implementace náročnější — backend + frontend protokol.
- 2026 stále experimentální — málo agentů ho podporuje.
- Smysl má pro **e-shopy, SaaS aplikace, booking weby** — kde agent může reálně provádět akce.

## 6. Klasická Lighthouse kategorie zůstávají

I když Agentic Browsing přibyla, **tradiční kategorie zůstávají rovnocenně důležité**:

- **Performance** (LCP <2,5 s, INP <200 ms, CLS <0,1) — Core Web Vitals.
- **Accessibility** — širší než jen agentic accessibility tree subset.
- **Best Practices** — HTTPS, modern API, console errors.
- **SEO** — meta tags, structured data, mobile-friendly.

AI crawlery (GPTBot, ClaudeBot, Google AI Overview crawler) **používají podobné signály jako klasické SEO**, ale s důrazem na clean parsable text.

## 7. CZ specifika

- **Český web v 2026 typicky nemá llms.txt** ani agentic browsing optimalizaci — relativně rychlý "win".
- **Frameworky:** Astro, Next.js, Nuxt — všechny zvládnou llms.txt + accessibility tree dobře.
- **CMS:** Upgates / Shoptet — strukturovaná data a accessibility tree řešitelné přes šablony.
- **Pro malé firmy:** Lighthouse Agentic Browsing audit je **levný a rychlý** — 1 hodina práce dá obvykle pass na 2-3 ze 4 checků.

## 8. Praktický postup pro CZ firmu

### Týden 1: Audit současného stavu
1. Spustit Lighthouse audit (DevTools + PageSpeed Insights) na homepage, kategorii a produktové stránce.
2. Zaznamenat výsledky všech 5 kategorií (Performance, Accessibility, Best Practices, SEO, Agentic Browsing).
3. Identifikovat fail checky v Agentic Browsing.

### Týden 2: Implementace llms.txt
1. Vytvořit `/llms.txt` v rootu domény.
2. Strukturovaný markdown souhrn obsahu webu.
3. Test Lighthouse re-run.

### Týden 3: Accessibility tree opravy
1. Audit ARIA labels v DevTools (Accessibility tab).
2. Doplnit chybějící names na interactive elements.
3. Test screen reader (VoiceOver, NVDA).

### Týden 4: CLS optimalizace
1. Identifikovat zdroje layout shift (Performance tab v DevTools).
2. Doplnit explicit `width/height` na images.
3. Předem reservovat místo pro lazy-loaded contentu.
4. Pre-load důležité fonty.

### Volitelné: WebMCP
Implementace na základě reálné potřeby (e-shop, booking, SaaS).

## 9. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec", "přístup"
- "garantujeme" → "může zvýšit", "často"
- "bot/crawler" → "vyhledávací robot" / "AI robot"
- "AIO" → "Google AI Overviews"
- "endpoint" → "rozhraní"
- "agentic web" → "web pro AI agenty"
- "default config" → "výchozí nastavení"
- "weighted score" → "vážené skóre"
- "fractional pass ratio" → "podíl úspěšných checků"
- "pass/fail" → "úspěšný/neúspěšný"

## 10. CTA pozice

- Tutorial → **primárně Pack 1 490 Kč** (DIY šablony, checklist pro Lighthouse audit + AI readiness).
- Sekundárně **Audit 9 990 Kč** (profesionální Lighthouse + AI audit s plánem priorit).
- Transparentní zmínka — Sniperdesign + Upgates Gold partner.
