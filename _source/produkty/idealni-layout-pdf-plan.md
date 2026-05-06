# Produkt: "Ideální layout" — PDF mustr pro AI vyhledávání

> **Status:** PARKED. Vrátíme se k tomu po dokončení obsahových úprav webu.
> **Vznik plánu:** během audit session 2026-05-06 po dokončení GEO compliance fixů a sjednocení framingu napříč pillar/AEO/GEO/rozhodovaci-matice.

## Vize

Prodejný produkt (PDF) jako vlajkový lead-magnet i revenue stream pro web aiseo-optimalizace.cz a Sniperdesign. Mustr pro web stránku, která splňuje **SEO + GEO + AEO + AIO současně** — vizuální anatomie + code snippety + schema templates + anti-checklist.

---

## Otevřené otázky k rozhodnutí (nezodpovězené)

### 1. Co PDF obsahuje — 3 varianty

**A) Anatomie + ukázky kódu** (30–40 stran)
- Hero blueprint
- Answer block 40–60 slov
- H2 s accent bar
- FAQ schema JSON-LD
- HowTo schema
- robots.txt template
- Open Graph tags
- Code snippety připravené k copy-paste

**B) Kompletní template repository**
- PDF + .zip s Astro/HTML/MDX šablonou
- Zákazník si nasadí
- Vyšší cena, vyšší práce na podpoře

**C) Hybrid (osobní doporučení)**
- PDF s vizuální anatomií (do 25 stran)
- Odkaz na GitHub repo s template kódem
- Best of both worlds

### 2. Distribuce — 3 varianty

**A) Free leadgen**
- Download výměnou za email
- Newsletter pipeline
- Žádné revenue, jen budování seznamu

**B) Stripe Checkout** (osobní doporučení: $49)
- Paywall download
- $29 = impulse, $49 = serious tool, $99 = pro/agency, $299 = premium

**C) Tiered**
- Free PDF lite (10 stran teaser)
- Paid full PDF ($49)
- Paid template repo ($99)

### 3. Role na webu — 3 varianty

**A) Samostatná landing page** `/idealni-layout-pdf/`
- Vlastní hero, ukázky stran, CTA
- Vlastní messaging odlišný od edukativních sekcí

**B) Sekce v navigaci**
- Přidat **Layout** mezi SEO/GEO/AEO/AIO/Průvodce
- Navigation prominence

**C) Promo box** v existujících sekcích + dedikovaná landing
- Nejvyšší expozice, ale potřebuje obsah landing page i tak

### 4. Branding + cena (pokud paid)

- **Sniperdesign brand** — staví autoritu agentury, "produkt od agentury"
- **Neutrální aiseo-optimalizace** — produkt vázaný na web (ne agenturu)
- Cena: $/Kč je vliv na pozicování. Sweet spot: 1 200 Kč ($49) — impulse OK, vážný nástroj, nepotřebuje sales call

---

## Doporučená kombinace (z chatu 2026-05-06)

> **Hybrid C / Stripe paid 1 200 Kč ($49) / Samostatná LP + nav položka / Sniperdesign brand**

**Důvod:**
- PDF anatomie 25 stran je rychle prodejná (impulse buy, nepotřebuje agenturní sales call)
- $49 je sweet spot mezi "free freebie" a "premium tool"
- Sniperdesign brand staví autoritu agentury
- Samostatná LP umožní vlastní messaging odlišný od edukativních stránek
- Nav položka "Layout" zvyšuje discoverability

---

## Implementační poznámky (až bude rozhodnuto)

### Technický stack úvahy
- PDF generation: Astro skill `anthropic-skills:pdf` + canvas-design pro vizuální stránky
- Stripe Checkout: jednorázový payment, instant download link
- Landing page: nová Astro stránka v `src/pages/idealni-layout-pdf.astro` se stejným design systémem (TopicCard, Insight, atd.)
- OG image: NanoBanana — schematic mockup PDF stran

### Obsahové bloky PDF (návrh kapitol)
1. **Anatomie ideální stránky** — vizuální blueprint 5 vrstev (hero → answer block → H2 sekce → FAQ → schema)
2. **Hero zone** — H1, podtitul, breadcrumbs, OG meta
3. **Answer block** — pravidla pro 40–60 slovní definici, příklady, do/dont
4. **Body content** — pillar struktura 3 000 slov, H2 s accent bar, vizuální komponenty (Insight, Compare, Stepper, Checklist)
5. **FAQ sekce** — FAQPage schema, 6–10 otázek pravidlo, schema validace
6. **Schema markup library** — Article, FAQPage, HowTo, Organization, WebSite — connecté JSON-LD ready k copy-paste
7. **robots.txt + AI crawlers** — kompletní template s 8 boty
8. **Anti-checklist** — 10 chyb, kterých se vyhnout
9. **Měření a iterace** — GSC + GA4 + Otterly setup

### Cross-link pattern
- Všechny existující stránky na webu → CTA box "Stáhněte si PDF mustr" (cross-promo)
- Pillar `/seo-vs-geo-vs-aeo-vs-aio/` jako prime placement

### Marketing checklist
- [ ] Landing page s 5–7 sekcemi (hero, problem, solution preview, content list, testimonials, FAQ, CTA)
- [ ] Hero copy + screenshot mockupy PDF stran
- [ ] Stripe payment link nebo Checkout
- [ ] Email delivery (download link po platbě)
- [ ] OG image pro social sharing
- [ ] Cross-promo CTA na všech sekcích webu
- [ ] Newsletter sekvence (welcome + 3 nurture emaily)

---

## Dependence / Co dokončit před spuštěním produktu

- [x] Obsahový framing webu sjednocený (GEO mindset shift, AEO standard psaní) — DONE 2026-05-06
- [ ] Audit content kvality napříč zbývajícími sekcemi (pokračuje)
- [ ] Visuální polishing webu (probíhá iterativně)
- [ ] Konečné design systému stabilní (TopicCard, Insight, atd.)
- [ ] Decision na 4 otázky výše

---

## Návrh rolloutu (až bude odsouhlaseno)

**Týden 1:** Obsah PDF (text všech 9 kapitol)
**Týden 2:** Vizuální layout PDF (canvas-design + brand-guidelines)
**Týden 3:** Landing page + Stripe integration
**Týden 4:** Email automation + cross-promo CTA na webu + OG images
**Týden 5:** Soft launch (Sniperdesign newsletter), monitoring konverzí
**Týden 6+:** Public launch (LinkedIn, Twitter, oborové komunity)
