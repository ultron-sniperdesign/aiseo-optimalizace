# Insight Library — Format & Conventions

> **Used by:** Step 3 (Original Insight Agent, Claude) for retrieval; humans (you) for write.
> **Location:** `_source/insights/<category>/<slug>.md`
> **Purpose:** Persistent repository of proprietary observations, case studies, contrarian opinions, and data points that differentiate our content from generic SERP consensus.
> **Key principle:** Library starts empty but structured. Every insight has frontmatter metadata. Not every insight may be published (client confidentiality).

## Why a library at all

Generic AI agents tend to produce "summary of public consensus" content. Our differentiation comes from:
- Patterns we observe across audits
- Contrarian opinions we hold and can defend
- Concrete numbers from real engagements
- Edge cases that contradict generic best practices

If these live only in conversation history, they get lost. The library makes them addressable, taggable, and reusable across articles.

## Folder structure

```
_source/insights/
├── case-studies/         # Anonymized client outcomes with concrete numbers
├── observations/         # "In audits we see X" — recurring patterns
├── contrarian-opinions/  # Positions that disagree with industry consensus
├── data-points/          # Specific numbers from our work (CTR, ranking shifts, costs)
├── client-patterns/      # Patterns by business type (B2B SaaS, e-shop, local service)
├── mistakes/             # What didn't work — failed experiments, wrong predictions
└── frameworks/           # Our own proprietary models (audit checklists, decision matrices)
```

### Category guide

| Category | When to add | Example |
|---|---|---|
| `case-studies/` | Client engagement with measurable outcome (anonymized) | "B2B SaaS klient: pillar content + 18 spokes → 240 % organic traffic za 9 měsíců" |
| `observations/` | Pattern seen 3+ times across audits | "V e-shopech s > 1 000 produktů typicky chybí category page meta description" |
| `contrarian-opinions/` | Position we'd defend against industry consensus | "Core Web Vitals nejsou ranking faktor v praxi — testováno na 30 doménách" |
| `data-points/` | Specific number from our work, citable | "Průměrné CTR pro pozici 3 v CZ: 7.2 % (n=180 SERPs, vlastní data 2025)" |
| `client-patterns/` | Pattern specific to business type | "Lokální advokát: 60 % konverzí z GMB, ne z webu — SEO priorita = GMB optimalizace" |
| `mistakes/` | Hypothesis we held that turned out wrong | "Předpoklad 2024: schema markup zlepší ranking. Realita: zlepšuje CTR přes rich results, ne ranking." |
| `frameworks/` | Reusable model / matrix / checklist | "5-vrstvý audit framework (technical → content → links → brand → conversion)" |

## Frontmatter schema

Every insight `.md` file must have YAML frontmatter:

```yaml
---
title: "Pillar content + spokes architektura — B2B SaaS výsledky"
slug: pillar-spokes-b2b-saas-results
category: case-studies
tags: [pillar-content, content-clusters, b2b-saas, organic-traffic]
industry: [b2b-saas, consulting]
source: "Vlastní engagement Q1–Q3 2025, anonymizováno"
confidence: high              # high | medium | low
can_publish: true             # true | false
anonymization_needed: true    # true if client data not yet stripped
created_at: 2026-04-15
last_used: null               # populated by Original Insight agent when retrieved
contexts_relevant_to:
  - "AI citation"
  - "Content clusters"
  - "Pillar strategy"
  - "B2B SaaS SEO"
related_insights:
  - observations/cluster-density-correlation
  - data-points/pillar-traffic-curve
---
```

### Field reference

| Field | Required | Type | Notes |
|---|---|---|---|
| `title` | yes | string | Human-readable, ideally < 80 chars |
| `slug` | yes | string | kebab-case, matches filename without `.md` |
| `category` | yes | enum | One of 7 folder names |
| `tags` | yes | array | Lowercase, kebab-case, 3–8 tags |
| `industry` | recommended | array | If insight is industry-specific (otherwise omit) |
| `source` | yes | string | "Vlastní engagement", "Audit klienta X", "Public study Y", "Pozorováno na N doménách" |
| `confidence` | yes | enum | `high` (n ≥ 10 cases / primary data), `medium` (3–9 cases / industry consensus), `low` (single case / hypothesis) |
| `can_publish` | yes | bool | If false, agent may use insight for direction but must NOT quote |
| `anonymization_needed` | yes | bool | If true, client identifying details must be stripped before publishing |
| `created_at` | yes | date | ISO 8601 |
| `last_used` | optional | date | Updated by Original Insight agent |
| `contexts_relevant_to` | recommended | array | Free-text descriptions of article topics where this fits |
| `related_insights` | optional | array | Slug paths to related entries |

## Anonymization rules

If `anonymization_needed: true`, the following must be stripped before content reaches an article:

1. **Client name** — replace with role: "B2B SaaS klient", "lokální e-shop", "consulting firma"
2. **Specific URLs** — replace with descriptive: "klientský pillar článek o X"
3. **Exact revenue / traffic numbers** — round or convert to ratios:
   - Bad: "z 1 247 návštěv na 4 891"
   - Good: "trojnásobek organické návštěvnosti za 9 měsíců"
4. **Tools / vendors named that could identify client** — generalize:
   - Bad: "klient používal HubSpot Marketing Hub Enterprise"
   - Good: "klient používal enterprise marketing automation"
5. **Time-period combined with industry could identify** — coarsen:
   - Bad: "Q3 2024 redesign českého fintech startupu"
   - Good: "fintech startup, polovina 2024"

When in doubt: ask the human (you) before publishing. Better to keep `can_publish: false` than leak.

## Example insights

### Example 1: case-studies/pillar-spokes-b2b-saas-results.md

```markdown
---
title: "Pillar + spokes architektura zvedla organic traffic 3× za 9 měsíců"
slug: pillar-spokes-b2b-saas-results
category: case-studies
tags: [pillar-content, content-clusters, b2b-saas, organic-traffic, internal-linking]
industry: [b2b-saas]
source: "Vlastní engagement, anonymizováno"
confidence: high
can_publish: true
anonymization_needed: false   # already stripped
created_at: 2026-04-15
contexts_relevant_to:
  - "Content clusters"
  - "Pillar strategy"
  - "AI citation pro B2B"
---

## Kontext

B2B SaaS klient v segmentu data analytics, ARR ~$2M, organic byl 12 % traffic mixu. Cíl: zvednout organic na 30 % a snížit závislost na paid.

## Co jsme udělali

1. Identifikovali 1 hlavní pillar topic ("data observability") + 18 spoke témat
2. Pillar napsali jako ~5 000 word průvodce (FAQ, schema, decision matrix)
3. Spokes po 1 200–2 000 slov, každý cílený na konkrétní intent
4. Internal linking: každý spoke 3–5× linkuje pillar, pillar linkuje všechny spokes
5. Cadence: 1 spoke / týden po dobu 4 měsíců

## Výsledek

- Měsíc 0 → 9: organic traffic 3.2×
- Pillar sám: 8 % všech organic vstupů, průměrná pozice na hlavní KW se posunula z 12 → 4
- AI citace (GPT, Perplexity): 6 nezávislých citací během měsíce 6–9
- Conversion rate na pillar: 4.1 % (vs site avg 1.8 %)

## Proč to fungovalo

- Topical authority signál pro Google (široké pokrytí jednoho tématu)
- Internal linking distribuoval link equity z pillar na spokes
- Pillar byl dostatečně detailní pro AI scraping (citation-friendly struktura)

## Kdy NEpoužívat

- Pokud doména má < 50 stránek total → pillar/spokes ratio rozkmitá site architecture
- Pokud topic je commodity (cena/srovnání) → SERP dominují aggregátory, pillar nestačí
```

### Example 2: contrarian-opinions/cwv-not-ranking-factor.md

```markdown
---
title: "Core Web Vitals nejsou v praxi ranking faktor (jen tie-breaker)"
slug: cwv-not-ranking-factor
category: contrarian-opinions
tags: [core-web-vitals, ranking-factors, technical-seo, page-experience]
source: "Pozorováno na 30 doménách 2024–2025"
confidence: medium
can_publish: true
anonymization_needed: false
created_at: 2026-04-20
contexts_relevant_to:
  - "SEO mýty"
  - "Technical SEO priority"
  - "Page experience"
---

## Konsenzus, se kterým nesouhlasíme

Většina SEO obsahu prezentuje Core Web Vitals (LCP, CLS, INP) jako "must-have ranking faktor". Náš pohled: jsou tie-breaker, ne primární signál.

## Důkazní základ

Sledovali jsme 30 domén v období 2024–2025:
- 12× výrazné zlepšení CWV bez měřitelného dopadu na pozice
- 3× regrese CWV (zhoršení) bez poklesu pozic
- 2× případy, kdy stránka s "poor" CWV stále rankovala #1 na primární KW

## Co ale CWV ovlivňují

- CTR na SERPu (rychlejší = více kliknutí)
- Conversion rate na stránce
- Bounce rate / engagement signály

To jsou nepřímé dopady, ne přímý ranking faktor.

## Citace pro článek

> "Google sám CWV označuje jako 'one of many signals'. V naší praxi vidíme dopad na CTR a engagement, ne na primární ranking. Investovat do CWV pod 'good' threshold má rapidně klesající ROI."

## Kdy ALE CWV řešit prioritně

- E-commerce s vysokým bounce na mobile (zde CWV koreluje s conversion, ne s rankingem)
- Konkurence v top 3 má všichni "good" CWV → tie-breaker zafunguje proti vám
```

### Example 3: data-points/ctr-by-position-cz.md

```markdown
---
title: "Průměrné CTR podle pozice na CZ SERPech (2025)"
slug: ctr-by-position-cz
category: data-points
tags: [ctr, serp, czech-market, ranking-positions]
source: "Vlastní data — 180 SERPs, 8 vertikál, 2025 H1"
confidence: high
can_publish: true
anonymization_needed: false
created_at: 2026-04-22
contexts_relevant_to:
  - "Ranking strategy"
  - "ROI kalkulace"
  - "Pozice 1 vs pozice 3 hodnota"
---

## Data

| Pozice | Průměrné CTR (CZ) | n |
|---|---|---|
| 1 | 21.4 % | 180 |
| 2 | 11.1 % | 180 |
| 3 | 7.2 % | 180 |
| 4 | 4.8 % | 180 |
| 5 | 3.6 % | 180 |
| 6–10 | 1.2–2.4 % | 180 |

## Metodologie

- 180 SERP queries z 8 vertikál (e-commerce, B2B SaaS, lokální služby, finance, zdraví, vzdělávání, real estate, media)
- Period: leden–červen 2025
- Source: kombinace GSC našich klientů + vzorek 3rd party SERP API
- Mobile + desktop combined
- AI Overview přítomnost: ano u 38 % queries — započítáno (CTR pro pozici 1 pod AIO klesá ~30 %)

## Použití v článcích

Pro ROI argumentaci: posun z pozice 5 → 3 ≈ 2× traffic. Posun z pozice 3 → 1 ≈ 3× traffic.
```

## How agents query the library

### Step 3 (Original Insight Agent) retrieval workflow

1. Agent receives: topic from Step 1 (Strategist), business context, target audience
2. Agent extracts query tags from topic (e.g., "AI citation B2B" → tags `ai-citation`, `b2b-saas`, `content-strategy`)
3. Agent reads `_source/insights/*/` and filters by:
   - `tags` overlap with query tags (≥ 2 matches)
   - `can_publish: true` (unless using as direction-only)
   - `industry` match if topic is industry-specific
4. Agent returns top 3–5 candidates ranked by `confidence` and tag overlap
5. Agent presents candidates to human (interview step) — "tyto insighty jsem našel, který chceš použít / kombinovat / žádný"
6. Human selects → agent updates `last_used` field

### Retrieval anti-patterns

- **Don't dump all matching insights** into article — pick 1–2 highest signal
- **Don't use `can_publish: false` insights as direct quotes** — only as direction
- **Don't combine insights from same client** unless explicitly anonymized cross-engagement

## Maintenance

### When to add an insight

- After client engagement closes (case study material)
- After audit reveals pattern seen 3+ times (observation)
- When you'd otherwise say "I disagree with the consensus on X" (contrarian opinion)
- When you cite a specific number from your work in an article (data point — capture for reuse)

### When to retire an insight

- Source data no longer applies (e.g., Google algo change invalidates pattern)
- Better insight covers same ground
- Confidence dropped (e.g., contrarian opinion was wrong, move to `mistakes/`)

### Quarterly review (suggested)

Once per quarter: scan `last_used` field. Insights not used in 6 months → flag for review (still relevant? still accurate?).

## What this library is NOT

- **Not a CMS** — markdown files, no DB, no UI
- **Not a knowledge base for clients** — internal only, never published verbatim
- **Not a replacement for fresh research** — Step 2 (Research) still runs WebSearch every article
- **Not auto-populated** — insights are written by humans (you), agent only reads
