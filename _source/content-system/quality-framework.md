# Quality & Compliance Framework

> **Used by:** Step 9 (Quality & Compliance Checker, Claude)
> **Purpose:** Verify article meets formal standards AND qualitative bar before human review.
> **Key principle:** Two-tier check — formal (deterministic) + qualitative (LLM judgment with rubric).

## Overview

Quality Checker is the final automated gate before human review. It does NOT generate content — it validates.

If checks pass → article moves to human review.
If checks fail → return to Senior Editor with specific failures listed (max 3 retries, then hard stop).

## Tier 1: Formal compliance (deterministic)

These checks can be automated with regex/parsing. No LLM judgment required.

### 1.1 Word count
- Article body: **1 700–3 500 words** (excluding frontmatter, code blocks, table content)
- Outside this range: flag for review (some categories OK with shorter; pillar should not be < 2 500)

### 1.2 Answer block
- Position: directly after H1, before any H2
- Word count: **40–60 words** (strict)
- First sentence pattern: should match "X is …" or "X provides …" or similar definitional structure
- HTML class `answer__text` present

### 1.3 FAQ section
- Count: **6–10 questions** (strict)
- Per question: 50–120 words in answer
- Each question genuine (not "Q: When was this article written? A: …")
- Answer doesn't duplicate body content verbatim

### 1.4 Schema markup
Required JSON-LD types:
- `Article` (with headline, description, datePublished, dateModified, inLanguage, keywords)
- `FAQPage` (with mainEntity array of Question/Answer pairs)
- `HowTo` (only if article has step-by-step guide; with name + step array)

### 1.5 Fact-density
- Target: **≥ 3 facts per 100 words** (numbers, dates, percentages, named tools, named studies, specific examples)
- Calculation: count of regex matches `[0-9]+ ?%`, `[0-9]{4}`, `\$[0-9]+`, named entities, named tools / total words × 100

### 1.6 MDX syntax
- Valid frontmatter (parsed by Zod schema)
- Valid JSX components (Insight, Compare, Stepper, Checklist, etc.)
- All component imports declared
- No bare `<` characters that break MDX parsing

### 1.7 Internal linking
- Minimum 3 internal links (excluding self)
- Internal links use absolute paths starting with `/`
- No broken internal references (referenced slug exists in collection)

### 1.8 OG image
- Convention: `public/og/<slug>.png` exists
- Size: 1200×630 or 1200×669 (proportional to NanoBanana output)

## Tier 2: Qualitative checks (LLM judgment with rubric)

These require LLM evaluation, but with structured rubric to reduce variance.

### 2.1 Information gain assessment

**Question:** Does this article add information not easily available in top SERP?

**Rubric:**
- **Pass:** Article has at least 2 of the following:
  - Original case study or data point not in top SERP
  - Counter-argument or contrarian view supported by evidence
  - Concrete example with specific numbers/contexts
  - Synthesis that reframes existing knowledge
- **Marginal:** 1 of the above present
- **Fail:** None of the above; article is "better summary" of consensus

**Compliance behavior:** Pass = continue. Marginal = warn but continue. Fail = back to Drafter with specific instruction.

### 2.2 Business intent clarity

**Question:** Is the strategic purpose of the article clear to a senior reader?

**Rubric:**
- **Pass:** Reader can answer in one sentence: "This article is for X audience to do Y, supporting Z business goal."
- **Marginal:** Audience and topic clear, business goal implicit
- **Fail:** Reads as generic SEO content with no strategic positioning

### 2.3 Voice register match

**Question:** Does article match the declared mode (SEO-first or Insight-first)?

**SEO-first checks:**
- Tone is informational, not opinion-driven
- Schema rigor is high (HowTo where applicable, fact-tables, numbered steps)
- Cross-links to related cluster articles present
- CTR-optimized title (specific, contains primary KW)

**Insight-first checks:**
- Tone is opinion-driven, with clear stance
- At least one contrarian or non-obvious claim
- Less formulaic structure (OK to skip steps if topic doesn't require them)
- Cross-links to thought leadership pieces, not just clusters

**Fail criteria for either mode:** Article reads as the other mode.

### 2.4 Fear marketing absence

**Question:** Does article avoid fear marketing framing?

**Specific patterns to flag:**
- "Tichý propad ... který nikdo nevidí"
- "Žerou váš ranking"
- "Pokutu od Googlu"
- "Kdo nedělá X, umře / ztratí / zaostane"
- "Ztrácíte tu část publika..."
- Apocalyptic framing of trends

**Compliance behavior:** Any 2+ instances = fail, return to Senior Editor with list.

### 2.5 Buzzword usage

**Question:** Are technical terms (GEO, AEO, fact-density, citation share, etc.) defined on first use and used consistently?

**Rubric:**
- **Pass:** Each technical term defined on first use (in answer block, body, or FAQ); subsequent uses are concise references
- **Fail:** Term appears 5+ times without definition; reader must already know what it means

### 2.6 Brand voice consistency

**Question:** Does article match the brand voice extracted from gold-standard articles?

**Gold-standard reference articles** (use these as voice training data):
- `/blog/seo-audit-co-kontrolovat/` — observational, structured, audit-language
- `/blog/jak-strukturovat-pillar-content/` — instructional, framework-oriented
- `/blog/caste-chyby-v-seo-2026-rewrite/` — senior consultant voice, nuanced

**Voice attributes to match:**
- Czech language with selective English technical terms
- Observational over authoritative ("v auditech vidíme" vs "platí, že")
- Concrete > abstract (specific tools, prices, numbers > general claims)
- Acknowledgment of limits and trade-offs
- No corporate hedging ("v dnešní digitální éře...")

## Cross-cutting layer validations

### Layer A: Evidence Scoring validation

**Check:** All factual claims in body have implicit confidence level matching their wording.

**Rules:**
- Absolute claims ("je", "musí", "vždy") → must be backed by High confidence source (primary study, official documentation, own data)
- Hedged claims ("obvykle", "typicky", "v auditech vidíme") → can be backed by Medium confidence (industry consensus, repeated observation)
- Speculative claims ("možná", "lze předpokládat") → can be backed by Low confidence (single source, AI inference)

**Compliance check:** For each absolute claim in article, verify `evidence-map.md` (from Reconciler) has High confidence source. If mismatch → flag.

### Layer B: Novelty Tracking (Phase 2)

**Check:** Per-section novelty score from Drafter is integrated into final score.

**Compliance behavior:**
- Score ≥ 60 % → pass
- Score 30–60 % → pass with note in compliance report
- Score < 30 % → fail, back to Drafter

### Layer C: Voice Register

**Check:** Article matches declared mode (see 2.3 above).

### Layer D: Contrarian Preservation

**Check:** Audit `decisions-log.md`:
- Are there any contrarian preservation entries?
- Does final article still contain those contrarian claims?
- If decisions-log says "preserved" but draft-v2.mdx no longer contains the claim → flag (something went wrong in editor)

## Output structure (Compliance Checker must produce)

```markdown
# Compliance Report — <article-title>

## Tier 1: Formal compliance

| Check | Result | Notes |
|---|---|---|
| Word count (1 700–3 500) | ✅ 2 487 | — |
| Answer block (40–60 slov) | ✅ 52 | — |
| FAQ count (6–10) | ✅ 8 | — |
| Schema markup | ✅ | Article + FAQPage present |
| Fact-density (≥ 3/100 words) | ✅ 4.2 | — |
| MDX syntax | ✅ | — |
| Internal linking (≥ 3) | ✅ 5 | — |
| OG image | ⚠ MISSING | `/og/<slug>.png` not found |

## Tier 2: Qualitative checks

| Check | Result | Notes |
|---|---|---|
| Information gain | ✅ Pass | Original case study + contrarian view present |
| Business intent | ✅ Pass | Clear: B2B SaaS audience, thought leadership goal |
| Voice register (Insight-first) | ✅ Pass | Opinion-driven, contrarian claims preserved |
| Fear marketing | ✅ Pass | No flagged patterns |
| Buzzword definitions | ⚠ Marginal | "fact-density" used 7× without definition |
| Brand voice consistency | ✅ Pass | Matches gold-standard reference articles |

## Cross-cutting layers

| Layer | Result |
|---|---|
| A. Evidence Scoring | ✅ All claims tagged |
| B. Novelty (if Phase 2) | ✅ 67 % |
| C. Voice Register | ✅ Insight-first match |
| D. Contrarian Preservation | ✅ 2 preservations, both intact in final |

## Decision

- [x] Pass with notes — proceed to human review
- [ ] Marginal — proceed but flag for editor attention
- [ ] Fail — return to Senior Editor with the following items:

[If failed: bulleted list of specific failures with locations]

## Required actions before publish

1. Generate OG image at `/og/<slug>.png` (NanoBanana skill)
2. Define "fact-density" on first use (currently jumps to usage)

## Compliance metadata

- Iteration: 1 of 3 max
- Run timestamp: 2026-05-06T14:23:11Z
- Review duration: ~45 s
```

## Iteration logic

### Pass scenarios
- All Tier 1 ✅ + all Tier 2 ✅ → **Pass**, proceed to human
- Tier 1 ✅ + ≤ 2 Tier 2 ⚠ Marginal → **Pass with notes**, proceed to human with notes
- Anything else → **Fail**

### Fail scenarios
- Iteration 1 fail → Return to Senior Editor with specific list
- Iteration 2 fail → Return to Senior Editor with stronger instruction ("these issues persist")
- Iteration 3 fail → Hard stop, flag for human investigation

### Anti-pattern: Senior Editor "fixing" by removing
If Senior Editor responds to Compliance fail by **removing** the problematic content (vs reformulating), Compliance Checker should:
- Compare draft-v2 to draft-v1
- If Senior Editor removed > 30 % of content vs reformulated → flag (editor is over-cutting instead of fixing)

## What this framework does NOT check

- **SEO ranking prediction** — out of scope; we don't predict rankings, only ensure article is well-structured for ranking attempt
- **AI citation prediction** — out of scope; we ensure GEO-friendly structure but can't predict actual citations
- **Conversion rate** — out of scope; tracked post-publish via GA4, not pre-publish
- **Originality vs published external content** — Tier 2 Information Gain checks novelty vs SERP, but doesn't check plagiarism (assumed not an issue with LLM-generated content)
