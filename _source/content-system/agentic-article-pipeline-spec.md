# Agentic Article Pipeline — Spec

> **Status:** specification (no code yet). After spec is stable, build orchestrator.
> **Owner:** aiseo-optimalizace.cz content system
> **Last update:** 2026-05-06

## 1. Purpose

Multi-agent pipeline for producing **strategic, fact-validated, voice-consistent articles** for `aiseo-optimalizace.cz/blog/`. Goal is not "AI content workflow" but **editorial operating system** that produces content competitive with senior human consultants.

Pipeline addresses three failure modes of typical AI content:

1. **Consensus convergence** — AI summarizing internet consensus without information gain.
2. **Generic AI tone** — corporate, hedged, no edge, no opinion.
3. **Hallucinated confidence** — absolute claims without evidence backing.

## 2. Core principles

### 2.1 Challenge over duplicate research
- One model (Claude) does primary research; second model (OpenAI) acts as **adversarial challenger**, not parallel researcher. Two researchers with similar training corpora converge to similar consensus; one researcher + one adversarial critic breaks that consensus.

### 2.2 Original Insight is non-negotiable
- Without proprietary insight (case studies, edge cases, contrarian opinions, own data) every article converges to "better summary of internet". Insight Library + mid-pipeline interview ensure this is captured.

### 2.3 Contrarian Preservation
- Pipeline must NOT auto-soften unconsensual but factually correct claims. Senior Editor follows explicit 3-question test (factually wrong / unsupported / ad hominem) before accepting any "soften this contrarian claim" critique.

### 2.4 Anti-validation cascade (system-wide)
- **No agent shall know that previous agents approved the output**, unless required for that agent's task.
- Critic receives draft as "first draft", not as "result of validated pipeline".
- This prevents rating inflation (LLM tendency to validate prior LLM output).

### 2.5 Auditable decisions
- Every Senior Editor accept/reject/partial decision logged in `decisions-log.md` with explicit reasoning. This is editorial memory, not just debug output.

### 2.6 Mode-aware processing
- Two operating modes: **SEO-first** (intent + SERP alignment) and **Insight-first** (positioning + authority). Default automatic via heuristic; manual override possible per article.

## 3. Pipeline overview

### 3.1 Vertical flow — 9 steps

```
1. Strategist (Claude)
   └→ brief.md (topic, KW cluster, intent, audience, business angle, mode)
                    ↓
2. Research (Claude + WebSearch + WebFetch)
   └→ research.md (SERP analysis, facts, sources)
                    ↓
3. Original Insight (Claude + Insight Library + human interview)
   └→ insights.md (case studies, edge cases, proprietary data)
                    ↓
4. Challenge Research (OpenAI #1)
   └→ challenge.md (assumption challenges, hype detection, missing perspectives)
                    ↓
5. Reconciler (Claude + WebSearch fact-check)
   └→ research-final.md (with Evidence Scoring per claim)
                    ↓
6. Drafter (Claude — outline + section-by-section)
   └→ draft-v1.mdx + outline.md
                    ↓
[Phase 2: Novelty Gate (Claude + WebFetch top 5 SERP)]
   └→ novelty-score.md
   ── Score < 30 % → reject, back to Drafter
   ── Score 30–60 % → continue with warning
   ── Score ≥ 60 % → continue
                    ↓
7. Adversarial Critic (OpenAI #2)
   └→ critique.md (12-point framework, severity-tagged)
                    ↓
8. Senior Editor (Claude + Contrarian Preservation Rule)
   └→ draft-v2.mdx + decisions-log.md
                    ↓
9. Quality & Compliance Checker (Claude)
   └→ final.mdx OR back to Senior Editor (max 3 retries)
                    ↓
              [Human review]
                    ↓
        git commit → publish
```

### 3.2 Horizontal cross-cutting layers — 4

These do NOT add LLM calls. They are constraints in existing agents' prompts + validation in Compliance.

| Layer | Where | Purpose |
|---|---|---|
| **A. Evidence Scoring** | Reconciler (assigns), Drafter (uses), Compliance (validates) | Map source confidence to wording intensity |
| **B. Novelty Tracking** | Drafter (running score), Novelty Gate (hard check), Compliance (final) | Ensure article is differentiated from top SERP |
| **C. Voice Register** | Strategist (sets mode), Drafter, Senior Editor, Compliance | Mode-specific tone (SEO-first vs Insight-first) |
| **D. Contrarian Preservation** | Senior Editor (explicit rule), decisions-log audit | Prevent auto-soften of contrarian-but-correct claims |

## 4. State management

### 4.1 Per-article working directory

```
_pipeline/
  <topic-slug>/
    01-strategist/
      brief.md                # Strategy + business angle
      mode-decision.md        # SEO-first vs Insight-first reasoning
    02-research/
      research.md             # SERP + facts
      sources.md              # Cited sources with confidence pre-tags
    03-original-insight/
      pulled-from-library.md  # What library provided
      interview-questions.md  # 3 questions for human
      interview-answers.md    # User responses
      insights.md             # Final integrated insights
    04-challenge/
      challenge-prompt.md     # What was sent to OpenAI
      challenge.md            # OpenAI response
    05-reconciler/
      reconciler-notes.md     # How conflicts were resolved
      research-final.md       # Final research with Evidence Scoring
      evidence-map.md         # claim → confidence + source
    06-drafter/
      outline.md              # Article structure
      sections/               # Per-section drafts (resumable)
        section-01-intro.md
        section-02-...md
      draft-v1.mdx            # Assembled full draft
    06.5-novelty/             # Phase 2 only
      novelty-score.md
      serp-comparison.md
    07-critic/
      critic-prompt.md
      critique.md             # 12-point framework output
    08-editor/
      decisions-log.md        # Per-critique accept/reject/partial + reasoning
      draft-v2.mdx
    09-compliance/
      compliance-report.md    # Formal + qualitative checks
      final.mdx               # Ready for human review
    metadata.yaml             # Topic metadata, timing, costs
```

### 4.2 Artifact copying

After Compliance pass, `final.mdx` is copied to `src/content/articles/<slug>.mdx`. The `_pipeline/<topic>/` directory is preserved in git for audit (gitignored binaries, but markdowns kept).

## 5. Mode switching (SEO-first vs Insight-first)

### 5.1 Heuristic rules in Strategist

```yaml
SEO-first when:
  - category: tutorial | návod | how-to | "co je X"
  - intent: informational | transactional
  - audience: searcher looking for specific answer
  - SERP: clear winner format to align with
  - strategic value: organic traffic + conversions

Insight-first when:
  - category: analysis | opinion | trend | defensive
  - intent: navigational | brand | exploratory
  - audience: industry professionals, decision makers
  - SERP: no clear winner / sparse / opinion-driven
  - strategic value: thought leadership + brand authority
```

### 5.2 Manual override

Topic queue YAML supports explicit mode:

```yaml
topic: "Nejčastější chyby v SEO v roce 2026"
mode: auto                # heuristic decides
# OR:
mode: insight-first       # force this mode
mode_reason: "Strategický článek, chceme obsadit názor, ne jen rankovat."
```

### 5.3 Mode propagation

Strategist sets mode in `brief.md`. Drafter, Senior Editor, Quality Checker receive **mode-specific prompts** (separate prompt versions per mode in `prompts/`).

## 6. OpenAI usage limits

- **Maximum 2 OpenAI calls per standard article** (Step 4 Challenge + Step 7 Critic).
- **Maximum 4 OpenAI calls per high-value article** (Phase 2 adds parallel research + 2nd editor pass).
- All other agents = Claude.

Rationale: cost balance + bias diversity. More OpenAI calls = increasingly correlated outputs (same model family).

## 7. Cost & time estimates

### 7.1 Per article (standard, MVP)

| Step | Agent | ~Tokens (in/out) | ~Cost |
|---|---|---|---|
| 1 | Strategist | 2k / 1k | $0.02 |
| 2 | Research + 15× WebSearch | 10k / 5k | $0.15 |
| 3 | Original Insight | 2k / 1k | $0.02 |
| 4 | Challenge (OpenAI gpt-5-mini) | 8k / 3k | $0.05 |
| 5 | Reconciler | 8k / 3k | $0.08 |
| 6 | Drafter (outline + sections) | 5k / 8k | $0.20 |
| 7 | Critic (OpenAI gpt-5-mini) | 8k / 2k | $0.04 |
| 8 | Senior Editor | 10k / 8k | $0.25 |
| 9 | Compliance | 8k / 2k | $0.08 |
| **Total** | — | — | **~$0.90** |

For daily cadence: ~$27/month.

### 7.2 High-value article (Phase 2)

Add 2 more OpenAI calls (parallel research + editor 2nd pass): **~$1.80 per article**. Used for ~20 % of articles.

### 7.3 Time per article

Wall-clock time depends on parallelism. Sequential: ~10–15 minutes (LLM calls + retries). Parallelized (Step 2 + Step 4 in parallel): ~6–8 minutes.

Human time: ~8 minutes per article (Strategist approval + interview + final eyeball).

## 8. Iteration logic & quality gates

### 8.1 Compliance retry loop

If Quality Checker (Step 9) fails:
- **Retry 1:** Back to Senior Editor with specific failures listed
- **Retry 2:** If still fails, back to Senior Editor with stronger instruction
- **Retry 3:** Hard stop, flag for human

### 8.2 Halucination red flags

If Senior Editor rejects **>80 % of critique points** in a single article → **flag for human review** (likely Critic hallucination or prompt drift).

### 8.3 Novelty gate (Phase 2)

If Novelty Score < 30 %:
- **Reject draft**, return to Drafter with specific instructions: "Sections X, Y, Z just repeat consensus. Find unique angle or remove."
- Drafter retries section-by-section until score ≥ 30 % OR 3 attempts → flag for human.

### 8.4 Drafter MDX syntax errors

If Drafter outputs invalid MDX (broken JSX, schema mismatch):
- **Retry 1** with error details in prompt
- **Retry 2:** flag for human

## 9. Human-in-the-loop checkpoints

Three explicit pause points where pipeline waits for user input:

1. **After Step 1 (Strategist)** — review brief, approve direction. ~30 seconds.
2. **During Step 3 (Original Insight)** — answer 3 interview questions. ~3 minutes.
3. **After Step 9 (Compliance pass)** — final eyeball before commit. ~5 minutes.

Total user time: ~8 minutes per article.

## 10. Implementation phases

### Phase 1 — MVP (recommended start)

**Scope:** 9 steps + Layers A, C, D (Evidence Scoring, Voice Register, Contrarian Preservation).

**Deferred:** Layer B (Novelty Gate), High-value tier, Cron automation.

**Time estimate:** ~3 weeks of work.

**What to test:** Voice consistency, fact accuracy, Senior Editor decision quality, contrarian preservation in practice.

### Phase 2 — Add Novelty Gate + High-value tier

**Scope:** Layer B (Novelty Gate before Critic), High-value tier (parallel research + 2nd editor pass for strategic articles).

**Time estimate:** +1 week.

**Trigger to start:** After 10–20 articles produced via Phase 1, with quality patterns observable.

### Phase 3 — Automation

**Scope:** Cron schedule, topic queue from `_source/content-system/topics-queue.yaml`, auto-deploy with Slack notification for human review.

**Time estimate:** +1 week.

**Trigger to start:** Phase 2 stable, quality consistency proven.

## 11. Success metrics

### 11.1 Per-article quality metrics

- Word count: 1 700–3 500 (depending on category)
- Answer block: 40–60 words ✅
- FAQ: 6–10 questions ✅
- Schema: Article + FAQPage + (HowTo if applicable) ✅
- Fact-density: ≥ 3 facts per 100 words ✅
- Evidence Scoring coverage: 100 % of factual claims tagged
- Novelty score (Phase 2): ≥ 60 % preferred

### 11.2 Pipeline quality metrics

- **Senior Editor critique acceptance rate:** target 30–70 % (low = critic too lenient or editor too defensive; high = critic finding real issues that editor accepts)
- **Compliance first-pass success:** target ≥ 70 % (higher means Drafter quality is good)
- **Human eyeball reject rate:** target < 10 % (higher means automation has gap)
- **Contrarian Preservation activations:** track per article, ensure pipeline doesn't homogenize

### 11.3 Output quality metrics (over time, after publish)

- Time to first AI citation (ChatGPT/Perplexity)
- Brand search volume trend
- SEO ranking trajectory for primary KW
- Time on page, scroll depth (engagement)

## 12. Repository structure

```
_source/content-system/
  agentic-article-pipeline-spec.md   # This file
  critique-framework.md              # 12-point Critic framework
  quality-framework.md               # Formal + qualitative + Evidence Scoring
  insight-library-format.md          # Library categories + frontmatter
  README.md                          # Navigation hub
  prompts/
    01-strategist.md
    02-research.md
    03-original-insight.md
    04-challenge.md                  # OpenAI #1 prompt
    05-reconciler.md
    06-drafter.md                    # Includes outline + section-by-section
    07-critic.md                     # OpenAI #2 prompt
    08-senior-editor.md              # Includes Contrarian Preservation Rule
    09-quality-compliance.md
  topics-queue.yaml                  # Phase 3: source of "what to write next"

_source/insights/
  case-studies/
  observations/
  contrarian-opinions/
  data-points/
  client-patterns/
  mistakes/
  frameworks/

_pipeline/                           # Per-article working directories
  <slug>/
    01-strategist/
    ...
  .gitignore                         # Binary outputs ignored, markdowns kept
```

## 13. Out of scope (explicitly)

What this pipeline does NOT do:

- **Image generation** — separate skill (NanoBanana), called after final article approved.
- **Translation** — articles are CZ-only.
- **Internal link auto-insertion** — Drafter writes prose; internal links are manually verified in human review or via separate Compliance check.
- **Social media post generation** — separate process, not part of pipeline.
- **A/B testing of variants** — out of scope for v1.
- **Topic discovery** — Phase 3 has YAML queue, but choosing what to write is human decision.

## 14. Open design questions (for future iteration)

These are intentionally NOT decided in v1 spec:

- **Cross-article consistency** — when 3 articles cover similar topic, how to ensure no contradiction? (Phase 4 idea: "claim graph" tracking what each article asserts.)
- **Insight Library auto-extraction** — currently manual. Could LLM extract insights from old articles into library?
- **Adversarial Critic specialization** — currently one Critic with 12 bodů. Could be split into 3 specialized critics (fact-check, voice-check, novelty-check).
- **Multi-language** — adapter pattern if EN translation becomes priority.

---

**Next document to read:** `critique-framework.md` for Adversarial Critic spec, `quality-framework.md` for Compliance spec, `insight-library-format.md` for library setup.
