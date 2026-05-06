# Content System — Multi-Agent Article Pipeline

> **Status:** Spec phase (no code yet). MVP scope locked. Implementation runs locally via Claude Code.
> **Goal:** Produce articles that match senior consultant voice, contain proprietary insights, pass evidence-based scrutiny, and avoid AI-content tells.

## What this folder is

This is the **design + governance layer** for our article production system. Articles themselves live in `src/content/articles/`. This folder holds:

- **Architecture spec** — how 9 agents + 4 cross-cutting layers compose into a pipeline
- **Quality frameworks** — what passes, what fails, how to grade
- **Prompts** — exact instructions per agent (one file per agent)
- **Library format** — how to write reusable insights

It does NOT hold:
- Article content (→ `src/content/articles/`)
- Per-article working state (→ `_pipeline/<topic-slug>/`, gitignored)
- Insights themselves (→ `_source/insights/`)

## Files in this folder

| File | Purpose | Used by |
|---|---|---|
| `agentic-article-pipeline-spec.md` | Main spec — 9 steps + 4 layers, state, modes, costs, phases | Anyone running pipeline |
| `critique-framework.md` | 12-point adversarial review rubric | Step 7 (Adversarial Critic, OpenAI) |
| `quality-framework.md` | Tier 1 formal + Tier 2 qualitative compliance checks | Step 9 (Quality & Compliance Checker, Claude) |
| `insight-library-format.md` | Folder layout + frontmatter schema for `_source/insights/` | Step 3 (Original Insight Agent) + humans writing insights |
| `prompts/01-strategist.md` | Topic + Business Angle Strategist | Step 1 |
| `prompts/02-research.md` | Web research with WebSearch + WebFetch | Step 2 |
| `prompts/03-original-insight.md` | Library retrieval + human interview | Step 3 |
| `prompts/04-challenge.md` | OpenAI Challenger (anti-consensus) | Step 4 |
| `prompts/05-reconciler.md` | Fact reconciliation + Evidence Scoring | Step 5 |
| `prompts/06-drafter.md` | Outline + section-by-section drafting | Step 6 |
| `prompts/07-critic.md` | OpenAI 12-point Adversarial Critic | Step 7 |
| `prompts/08-senior-editor.md` | Editorial pass with Contrarian Preservation | Step 8 |
| `prompts/09-quality-compliance.md` | Tier 1 + Tier 2 final gate | Step 9 |

## Pipeline at a glance

```
Step 1: Strategist          (Claude)   → topic-brief.md
Step 2: Research            (Claude)   → research-notes.md, sources.md
Step 3: Original Insight    (Claude)   → insights-applied.md  [+ human interview]
Step 4: Challenger          (OpenAI #1)→ challenge-report.md
Step 5: Reconciler          (Claude)   → reconciled-facts.md, evidence-map.md
Step 6: Drafter             (Claude)   → draft-v1.mdx
Step 7: Adversarial Critic  (OpenAI #2)→ critique.md           [12 points]
Step 8: Senior Editor       (Claude)   → draft-v2.mdx, decisions-log.md
Step 9: Quality & Compliance(Claude)   → compliance-report.md  [pass/fail]
                                       ↓
                                  Human review → publish
```

**Cross-cutting layers** (apply across multiple steps):
- **A. Evidence Scoring** — every claim tagged High/Medium/Low/Very Low confidence
- **B. Novelty Tracking** (Phase 2) — SERP overlap analysis pre-publish
- **C. Voice Register** — SEO-first vs Insight-first mode, set in topic brief
- **D. Contrarian Preservation** — Senior Editor must defend kept contrarian claims via 3-question test

## Core principles

1. **No agent shall know that previous agents approved the output.** Each gets a clean slate to avoid validation cascade / rating inflation.
2. **OpenAI is adversarial, not parallel researcher.** Used 2× per article (Step 4 Challenger, Step 7 Critic). Challenger doesn't see our research; Critic doesn't see prior critiques.
3. **Senior consultant voice, not marketing copy.** No fear framing, no hype, no "v dnešní digitální éře". Observational over authoritative.
4. **Evidence-based wording.** Absolute claims need High confidence sources. Hedged claims OK with Medium. Speculative claims clearly marked.
5. **Contrarian claims preserved through 3-question test.** Editor cannot remove contrarian content unless it's factually wrong / unsupported / ad hominem.

## Quick start (when prompts are written)

```bash
# 1. Pick topic, write brief
cat > _pipeline/<topic-slug>/00-input.yaml <<EOF
topic: "Jak měřit AI citation share"
mode: insight-first        # or seo-first, or auto
priority: standard         # standard (~$0.90) or high-value (~$1.80)
EOF

# 2. Run Step 1 (Strategist) — Claude reads prompt + 00-input.yaml
# Output: 01-topic-brief.md

# 3. Continue through Step 9, each step reads previous outputs (per spec)
# At Step 4 + Step 7: switch to OpenAI

# 4. After Step 9 pass: human review, publish to src/content/articles/
```

(Actual orchestration TBD — Phase 1 is manual step-by-step. Phase 3 may add CLI runner.)

## Implementation phases

| Phase | Scope | Status |
|---|---|---|
| **Spec** | This folder — design docs, prompts, frameworks | 🔄 in progress |
| **MVP (Phase 1)** | 9 steps + Evidence Scoring + Voice Register + Contrarian Preservation; manual orchestration via Claude Code; 1 article per week | ⏳ next |
| **Phase 2** | Add Novelty Gate (SERP overlap check); insight-library populated with 10+ entries; 2 articles per week | ⏳ later |
| **Phase 3** | CLI runner / cron; cost telemetry dashboard; calibration analysis | ⏳ later |

**Explicit non-goals for now:**
- No automation before manual flow proves quality
- No CMS / UI — all markdown files
- No multi-language (CZ only for now)

## Reading order for new readers

1. Start here (`README.md`)
2. Read `agentic-article-pipeline-spec.md` — full architecture
3. Skim `critique-framework.md` and `quality-framework.md` — what "good" looks like
4. Skim `insight-library-format.md` — what differentiates our content
5. Read prompts in order `01-…` → `09-…` to see how each agent operates

## Related files outside this folder

| Path | Purpose |
|---|---|
| `_source/insights/` | Insight library content (case studies, observations, etc.) |
| `_source/sniperdesign/agency-positioning.md` | Brand voice + positioning reference |
| `src/content/articles/` | Published articles (output of pipeline) |
| `src/content/articles/caste-chyby-v-seo-2026-rewrite.mdx` | Gold-standard example — senior consultant voice |
| `src/content/articles/jak-strukturovat-pillar-content/...` | Gold-standard — instructional / framework |
| `CLAUDE.md` | Project recovery doc — VPS, deploy, conventions |
