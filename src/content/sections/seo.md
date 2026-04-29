---
title: "SEO — Search Engine Optimization (klasické vyhledávání)"
description: "Co je SEO? Optimalizace stránky pro pozice v Googlu a Seznamu. On-page, technické a off-page faktory + proč zůstává základem všeho ostatního."
answer: "SEO (Search Engine Optimization) je optimalizace webové stránky tak, aby se zobrazovala na vysokých pozicích v organických výsledcích vyhledávačů jako Google nebo Seznam. Cílem klasického SEO je modrý odkaz v top 10 výsledcích — ideálně v top 3, protože ty získávají většinu kliků."
slug: "seo"
order: 1
abbr: "SEO"
updated: "2026-04-29"
faq:
  - q: "Je v roce 2026 klasické SEO ještě důležité?"
    a: "Ano. SEO zůstává základem — pokud Google vaši stránku neumí dobře načíst, indexovat a porozumět jí, ani GEO, AEO ani AIO nezafunguje. SEO je předpokladem pro všechny ostatní AI-orientované disciplíny."
  - q: "Jaké jsou hlavní rankingové faktory pro Google v roce 2026?"
    a: "On-page (title, meta, struktura H1–H6, schema markup), obsahové (relevance ke KW, hloubka pokrytí), technické (rychlost, mobile-first, Core Web Vitals) a off-page (zpětné odkazy z autoritních domén, brand mentions, E-E-A-T signály)."
  - q: "Co znamená E-E-A-T a proč je důležité?"
    a: "E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness. Google používá tyto signály ke kontrole kvality obsahu, hlavně u YMYL témat (zdraví, finance, právo). Pro autora to znamená: prokázané zkušenosti, expertní pověření, citace v autoritních zdrojích a transparentní informace o autorovi."
  - q: "Jaký je rozdíl mezi SEO a SEM?"
    a: "SEO (Search Engine Optimization) je organická optimalizace — neplatíte za umístění, zarobíte si ho kvalitou. SEM (Search Engine Marketing) zahrnuje SEO i placené reklamy (Google Ads, Sklik). Když uživatel mluví o SEM, obvykle myslí placené kampaně."
  - q: "Funguje SEO i pro Seznam.cz?"
    a: "Ano, ale s odlišnostmi. Seznam má vlastní algoritmus a preferuje české domény, .cz TLD, kvalitní české zpětné odkazy a Sklik integraci. Hlavní principy on-page SEO ale fungují stejně. Pro většinu CZ projektů stačí dobrý Google SEO + sledování Seznam Webmasteru."
---

## Co je SEO

**SEO (Search Engine Optimization) je optimalizace webové stránky tak, aby se zobrazovala na vysokých pozicích v organických výsledcích vyhledávačů jako Google nebo Seznam.**

SEO funguje na principu **rankingových algoritmů** — Google hodnotí stránky podle stovek faktorů a řadí je v SERPu (Search Engine Results Page). Cílem klasického SEO je modrý odkaz v top 10 výsledcích, ideálně v top 3, protože ty získávají většinu kliků (top pozice typicky 30–40 % CTR, pozice 5+ pod 5 %).

I v roce 2026 zůstává SEO **základem všeho ostatního**: pokud Google vaši stránku neumí dobře načíst, indexovat a porozumět jí, žádná z dalších disciplín ([GEO](/geo/), [AEO](/aeo/), [AIO](/aio/)) nezafunguje. AI engines totiž stejně jako Google indexují web — pokud vás Google neuvidí, ChatGPT vás nezacituje.

## Klíčové signály SEO

### On-page faktory

- **Title tag** — 50–60 znaků, primární klíčové slovo na začátku, brand na konci
- **Meta description** — 150–160 znaků, slouží jako „reklama" v SERPu (vliv na CTR, ne na ranking)
- **Struktura H1–H6** — jeden H1 per stránka, hierarchická H2/H3 odpovídající struktuře tématu
- **Interní prolinkování** — předává „link juice" mezi stránkami, pomáhá crawlerům najít hluboko zanořené stránky
- **Schema markup** — strukturovaná data v JSON-LD (Article, FAQPage, HowTo, Product, Organization)
- **URL slug** — krátký, popisný, bez stop slov (`/seo-vs-geo/`, ne `/page?id=42`)

### Obsahové faktory

- **Relevance ke klíčovému slovu** — search intent musí sedět (informační, transakční, navigační)
- **Hloubka pokrytí tématu** — pillar content (~3 000 slov) má lepší šanci než tenký článek (~500 slov)
- **Čtenářský komfort** — krátké odstavce, podnadpisy, bullet listy, vizuály
- **Originalita** — přidaná hodnota oproti existujícím top 10 výsledkům (jiný úhel, vlastní data, případové studie)

### Technické faktory

- **Rychlost načítání** — Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- **Mobile-first design** — Google indexuje mobilní verzi primárně, desktop sekundárně
- **Indexovatelnost** — funkční `robots.txt`, sitemap, kanonické URL, žádné `noindex` na cílových stránkách
- **HTTPS** — TLS certifikát je rankingový signál od 2014, dnes nezbytné minimum
- **Strukturovaná data** — schema.org JSON-LD, Open Graph, Twitter Cards

### Off-page faktory

- **Zpětné odkazy z autoritních domén** — Domain Rating (Ahrefs), Domain Authority (Moz)
- **Brand mentions** — i bez odkazu Google rozpoznává brand jako entity
- **E-E-A-T signály** — Experience, Expertise, Authoritativeness, Trustworthiness
- **Lokální signály** (pro CZ) — citace v českých médiích, .cz odkazy, Seznam Firmy

## Praktický postup SEO pro nový web

### Krok 1 — Keyword research

Použijte **Marketing Miner**, **Ahrefs** nebo **Google Keyword Planner** pro zmapování klíčových slov v oboru. Pro každý cluster:

- Primární KW (vysoká hledanost, střední konkurence)
- 3–5 souvisejících long-tail KW
- Search intent (informační vs. transakční)

### Krok 2 — Information architecture

Postavte **pillar + cluster strukturu**:

- 1 pillar stránka pokrývající široké téma (~3 000 slov)
- 5–10 cluster stránek na užší podtémata (~800–1 500 slov)
- Vzájemné prolinkování pillar ↔ clusters

Tento web sám je příklad: pillar [SEO vs. GEO vs. AEO vs. AIO](/seo-vs-geo-vs-aeo-vs-aio/) + 6 sekcí jako clusters.

### Krok 3 — On-page SEO checklist

Pro každou stránku:

1. ✅ Title tag s primárním KW (50–60 znaků)
2. ✅ Meta description (150–160 znaků)
3. ✅ H1 obsahuje primární KW
4. ✅ H2/H3 hierarchie odpovídá struktuře
5. ✅ Interní linky na související pillar/cluster
6. ✅ Schema markup (Article + FAQPage pro Q&A sekce)
7. ✅ Open Graph + Twitter Cards
8. ✅ Canonical URL
9. ✅ Image alt texty (přístupnost + ranking)

### Krok 4 — Technical audit

Použijte **Google Search Console** + **Screaming Frog** nebo **Ahrefs Site Audit**:

- Žádné 4xx/5xx chyby na hlavních stránkách
- Sitemap submitted v GSC
- Core Web Vitals v zelené zóně
- Mobile usability bez chyb
- Indexovatelnost — všechny canonical pages indexovatelné

### Krok 5 — Off-page (link building)

V první fázi (0–6 měsíců) místo agresivního link buildingu **buduje brand**:

- Hostujte se na podcastech ve vašem oboru
- Pište guest posts na autoritních CZ blogách
- Zapojte se do Reddit/Quora vláken (bez spamu)
- Dejte do Seznam Firmy + Google Business Profile (i pro online business)

## Kdy SEO samo o sobě stačí

SEO je dostatečný, pokud:

- **Web je nový** (do 12 měsíců) — nemá smysl optimalizovat pro AI Overviews, když Google ještě stránku ani neumí pořádně rankovat
- **Hlavní traffic kanál je organic search** — typicky B2C e-shopy, lokální služby
- **KPI tým měří podle organic traffic + konverzí** — AI metriky (citation share) zatím nejsou součástí standardu
- **Konkurence v SERPu má slabou backlinkovou strukturu** — můžete se rychle prosadit jen kvalitou obsahu

## Kdy přidat AEO, GEO, AIO

Jakmile máte **20+ článků v top 10 organicky** a Google Search Console ukazuje rostoucí impressions ale klesající CTR (klasický signál „AIO odpověď kradne kliknutí"), je čas rozšířit strategii o [AEO](/aeo/) (FAQ schema, krátké odpovědi) a později o [GEO](/geo/) (citovatelnost v ChatGPT/Perplexity).

Detailní rozhodovací rámec najdete v sekci [Rozhodovací matice](/rozhodovaci-matice/).

## Časté chyby v SEO 2026

1. **Keyword stuffing** — opakování KW do nesmyslu. Google to penalizuje od 2012, dnes je to crash test pro AI engines (necitují obsah, který „znějí" uměle).
2. **Tenký obsah** — stránka s 200 slovy nemá v roce 2026 žádnou šanci proti pillar content.
3. **Ignorování technického SEO** — pomalá stránka = horší ranking + horší konverze.
4. **Žádný interní link building** — orphan pages se neindexují, nepředávají autoritu.
5. **Spammy backlinks** — koupené odkazy z PBN, link farms. Penalty od Google Penguin (2012) až po dnešní Spam Brain.

## Měření SEO výkonu

| Metrika | Zdroj | Frekvence |
|---|---|---|
| Pozice klíčových slov | Marketing Miner / Ahrefs / SE Ranking | týdně |
| Organic traffic | Google Analytics 4 / Plausible | denně |
| Click-through rate (CTR) | Google Search Console | týdně |
| Backlinks (DR/UR) | Ahrefs / Semrush | měsíčně |
| Core Web Vitals | Google Search Console / PageSpeed Insights | měsíčně |
| Indexovatelnost | Google Search Console (Coverage report) | měsíčně |

V CZ kontextu je **Marketing Miner nejdostupnější nástroj** — má kompletní data o hledanosti, AIO presence (atribut `ai_overviews`) a SERP features pro česká KW.
