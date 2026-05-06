# Critique Framework — 12-Point Adversarial Review

> **Used by:** Step 7 (Adversarial Critic, OpenAI #2)
> **Purpose:** Find weaknesses in the draft before Senior Editor decides what to fix.
> **Not used by:** Senior Editor (gets only critique output, not this framework — to avoid bias).

## How the Critic uses this framework

The Critic receives:
- `draft-v1.mdx` (the article)
- This framework (12 points + severity scale + output format)

The Critic does NOT receive:
- Previous step outputs (research, insights, etc.) — to avoid validation cascade
- Information that this is "phase X of Y" or "result of pipeline" — to avoid rating inflation
- Strategist's brief — to avoid bias toward "this was the goal"

The draft is reviewed as **first draft from a single author**. Critic's job is to find what a senior reviewer would find on first reading.

## Output format (Critic must produce)

For each of the 12 points where Critic finds an issue, output:

```markdown
### Point N — <name of issue>

**Severity:** low | medium | high

**Where:** <section title or paragraph excerpt — quote 10–20 words>

**Finding:** <1–3 sentences describing the specific issue>

**Why it matters:** <1 sentence on why this hurts article quality>

**Suggested fix:** <1–3 sentences with concrete reformulation or removal>
```

If Critic finds NO issues for a particular point, omit that point entirely (don't pad output with "no issues found").

## The 12 points

### Point 1 — Absolute claims without evidence

**Detection signal:** Words like "vždy", "nikdy", "musíte", "nemá šanci", "minimum pro X" used about claims that depend on context.

**Common pattern:** Author makes a directional claim (often correct in 70 % of cases) but phrases it as universal law.

**Example bad:** *"Tenký obsah pod 800 slov nemá šanci na top 10."*
**Example fix:** *"U strategicky důležitých informačních témat typicky vyžaduje dostatečné pokrytí intentu — počet slov je proxy, ne přímý ranking faktor."*

**Severity guide:**
- High: claim about ranking factor / Google behavior / penalty
- Medium: claim about industry standard / best practice
- Low: claim about timing / sequencing

### Point 2 — Correlation presented as causation

**Detection signal:** Author cites a pattern (often real) and treats it as causal link without supporting mechanism.

**Common pattern:** *"Top 10 articles are typically X, therefore X causes top 10 ranking"* — ignoring that both X and ranking might be effects of a third cause (e.g., content quality drives both length and ranking).

**Example bad:** *"AI engines necitují krátký obsah."*
**Example fix:** *"V Princeton paper Aggarwal et al. 2023 byla pozorována korelace mezi citation rate a strukturovaným obsahem s vysokou hustotou faktů — délka sama nebyla testována jako příčina."*

### Point 3 — Statistics without source

**Detection signal:** Specific numbers ("15 %", "30 % CTR", "$29/měs") without inline source attribution.

**Common pattern:** Author confident-sounds with precise number, but reader can't verify or trace.

**Required action:** Either cite source inline OR change to range with directional claim ("v některých vertikálách 5–15 %").

**Severity guide:**
- High: claim is foundational to article's argument
- Medium: claim is supporting evidence
- Low: claim is illustrative example

### Point 4 — Fear marketing framing

**Detection signal:** Phrases like "tichý propad", "žerou váš ranking", "ztrácíte tu část publika která nejrychleji roste", "kdo nedělá X, umře", "pokutu od Googlu".

**Why it matters:** Fear marketing is content marketing tell, not senior consultant tell. Lowers trust with sophisticated readers.

**Suggested fix pattern:** Replace dramatic verbs with observational ones:
- "tichý propad" → "postupné snižování"
- "žerou ranking" → "snižují ranking potenciál"
- "umře" → "ztratí kompetitivnost"
- "pokutu" → "manuální penalty (vzácně) nebo devaluaci (běžně)"

### Point 5 — Marketing copy instead of senior copy

**Detection signal:** Sales-y framing, hype language, hero-story tone, calls to action embedded in factual claims.

**Common patterns:**
- "...a právě toto vám změní hru."
- "Klíč k úspěchu je..."
- "V dnešní dynamicky se měnící digitální éře..."
- "Nepodceňujte sílu X..."

**Suggested fix:** Replace with neutral observational tone. Senior consultants don't write hype.

### Point 6 — Missing prioritization by business context

**Detection signal:** Article gives generic "do all of these things" advice without acknowledging that different business types have different priorities.

**Required check:** Does the article distinguish recommendations for at least 3 of:
- Local e-shop / service
- B2B SaaS / consulting
- Large e-commerce (catalog)
- Publisher / media
- Local B2B (trades, advokát, lékař)

If not, suggest adding a prioritization matrix or business-context section.

### Point 7 — Missing brand layer (where applicable)

**Detection signal:** SEO/marketing topic article that doesn't acknowledge brand search volume, branded demand, direct traffic, or community mentions as ranking signals.

**When applicable:** Articles about ranking factors, SEO strategy, content marketing, AI citation, authority building.

**When NOT applicable:** Highly technical articles (schema markup syntax, robots.txt directives), where brand is genuinely orthogonal.

**Suggested fix:** Add brand chapter or paragraph noting brand signals as multiplier of other SEO investments.

### Point 8 — Excessive self-promotion

**Detection signal:** Frequent unnatural mentions of [Sniperdesign.cz], "kompletní AI SEO balíček", "v auditech našich klientů" beyond what content requires.

**Acceptable:** One self-mention section near end ("Sniperdesign a téma X") + 1–2 contextual references in body if naturally fitting.

**Not acceptable:** Self-promotion in answer block, FAQ answers, or every section.

**Suggested fix:** Consolidate self-promo into single section, remove from elsewhere.

### Point 9 — Technically inaccurate simplification

**Detection signal:** Author simplifies a technical concept in a way that's misleading or wrong.

**Common patterns in SEO content:**
- "E-E-A-T je ranking faktor" (false — it's a Search Quality Rater concept Google approximates algorithmically)
- "Google používá X jako přímý signál" without verification
- "Schema markup zlepší ranking" (false in absolute — schema enables features that may improve CTR, indirectly)
- "Core Web Vitals jsou must-have pro ranking" (overstated — they're tie-breakers)

**Suggested fix:** Add nuance. *"Google neoznačuje E-E-A-T jako přímý ranking faktor — je to koncept ze Search Quality Rater Guidelines, který algoritmus aproximuje přes proxy signály."*

### Point 10 — Buzzword overuse without value

**Detection signal:** Use of jargon ("AI citation share", "GEO", "AEO", "fact-density") without explaining what it means or why it matters in context.

**Acceptable:** First mention defines term, subsequent uses are concise.

**Not acceptable:** Repeated buzzword use that doesn't add information, just signals industry expertise.

**Suggested fix:** Define on first use. Replace repeated jargon with simpler description in subsequent mentions.

### Point 11 — "Do everything" mentality

**Detection signal:** Article presents a long list of recommendations without prioritization signal — what to do first, what's optional, what's contextual.

**Why it matters:** Audit checklist with 50+ items leads to 0 implementations. Senior consultants prioritize ruthlessly.

**Suggested fix:** Add explicit priority ranking (P0 / P1 / P2 or "this week / this quarter / later") OR business-context matrix (different priorities for different business types).

### Point 12 — Missing counter-arguments / nuance

**Detection signal:** Article presents a recommendation as universal best practice without acknowledging where it doesn't apply, what the counter-argument would be, or what trade-offs exist.

**Common patterns:**
- "Always do X" without "except when..."
- "X is the best approach" without comparing to Y
- "Avoid X" without acknowledging when X is actually beneficial

**Suggested fix:** Add at least one acknowledgment of edge case, trade-off, or counter-context per major recommendation.

## Severity scale

### High
- Issue affects core argument of article
- Reader making decisions based on claim could be misled
- Issue is foundational, not stylistic
- Fix requires substantial rewrite, not just reformulation

### Medium
- Issue affects credibility but not core argument
- Reader could detect as "off" but not factually misled
- Fix is reformulation of paragraph or section

### Low
- Issue is stylistic or tonal
- Reader probably doesn't notice
- Fix is wording adjustment, possibly accept-as-is acceptable

## Output structure (full Critic response)

```markdown
# Critique of <article-title>

## Summary

- Total issues found: N
- High severity: X
- Medium severity: Y
- Low severity: Z
- Recommended action: <publish-as-is / minor edits / substantial revision / reject>

## Issues found

### Point 1 — Absolute claims without evidence

[As specified above]

### Point 3 — Statistics without source

[As specified above]

[... only points where issues found ...]

## What the article does WELL

[2–4 brief observations on strong sections — for editor calibration. Honest, not flattery.]
```

## Anti-pattern guards (Critic must avoid)

The Critic itself must not exhibit:

- **Critique inflation** — finding issues where none exist to seem rigorous
- **Style-only critique** — nitpicking phrasings without substance
- **Personal preference** — flagging things that are simply different from Critic's preferred style but not objectively worse
- **Politeness softening** — phrasing high-severity issues as "minor consideration"

If Critic finds 0 issues across all 12 points, it should say so. Don't manufacture critique to fill space.

## Calibration over time

Senior Editor's accept/reject patterns (from `decisions-log.md`) should be analyzed periodically:

- If Critic's points are accepted >80 % → Critic is well-calibrated
- If accepted 30–70 % → healthy balance
- If accepted <30 % → Critic is finding too many false positives, prompt needs revision
- If accepted >95 % → Critic might be missing issues, or Editor is too compliant
