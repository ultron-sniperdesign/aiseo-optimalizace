/**
 * Rehype plugin: vloží kontextové CTA doprostřed článku (po druhém H2).
 *
 * Proč: GA4 (2026-08-01) ukázala, že do 90 % délky stránky doscrolluje jen
 * ~11 % návštěv — CTA na konci článku většina čtenářů nikdy neuvidí.
 *
 * Pravidla:
 * - soubory z `src/content/articles/`, `src/content/sections/` a `src/content/pillar/`
 *   (sekce do 5. 9. 2026 neměly žádné CTA nad patičkou — první nabídka byla až
 *   pod celým textem, kam podle GA4 dojde ~11 % návštěv),
 * - jen články s aspoň MIN_HEADINGS nadpisy H2 (krátké texty by blok rozbil),
 * - varianta se vybírá podle `category` ve frontmatteru (audit × Pack),
 * - článek, který na cílovou URL odkazuje už v prvních dvou sekcích, blok
 *   nedostane — nemá smysl nabízet totéž dvakrát pár řádků po sobě,
 * - vloží se maximálně jednou.
 *
 * Texty a URL jsou v `src/i18n/inline-cta.mjs` (per-mutace překlad).
 */
import {
  INLINE_CTA,
  MIN_HEADINGS,
  INSERT_AFTER_HEADING,
  DEFAULT_VARIANT,
  SECOND_INSERT_MIN_HEADINGS,
  SECOND_INSERT_AFTER_HEADING,
  ALTERNATE_VARIANT,
} from "../i18n/inline-cta.mjs";

/** Vybere variantu CTA podle kategorie článku. */
function pickVariant(category) {
  for (const [key, cfg] of Object.entries(INLINE_CTA)) {
    if (cfg.categories.includes(category)) return key;
  }
  return DEFAULT_VARIANT;
}

/** Posbírá href všech odkazů v uzlu (rekurzivně). */
function collectHrefs(node, out = []) {
  if (node.type === "element" && node.tagName === "a") {
    const href = node.properties?.href;
    if (typeof href === "string") out.push(href);
  }
  (node.children ?? []).forEach((c) => collectHrefs(c, out));
  return out;
}

/** Sestaví hast uzly bloku. */
function buildCta(cfg) {
  return {
    type: "element",
    tagName: "aside",
    properties: { className: ["inline-cta"] },
    children: [
      {
        type: "element",
        tagName: "p",
        properties: { className: ["inline-cta__label"] },
        children: [{ type: "text", value: cfg.label }],
      },
      {
        type: "element",
        tagName: "p",
        properties: { className: ["inline-cta__text"] },
        children: [{ type: "text", value: cfg.text }],
      },
      {
        type: "element",
        tagName: "a",
        properties: { className: ["inline-cta__link"], href: cfg.href },
        children: [
          { type: "text", value: cfg.linkText },
          {
            type: "element",
            tagName: "span",
            properties: { "aria-hidden": "true" },
            children: [{ type: "text", value: " →" }],
          },
        ],
      },
    ],
  };
}

export default function rehypeInlineCta() {
  return (tree, file) => {
    const path = String(file?.history?.[0] ?? file?.path ?? "");
    // Sekce a pilíř jsou dlouhé hubové stránky bez vlastní CTA logiky.
    // Blog má CTA odjakživa jedno; druhý blok mu vědomě nepřidáváme, aby se
    // konverzní vrstva 139 článků neměnila bez podkladu z dat.
    const isLongForm =
      path.includes("/content/sections/") || path.includes("/content/pillar/");
    const inScope = path.includes("/content/articles/") || isLongForm;
    if (!inScope) return;

    const frontmatter = file?.data?.astro?.frontmatter ?? {};
    const cfg = INLINE_CTA[pickVariant(frontmatter.category)];
    if (!cfg) return;

    const children = tree.children ?? [];
    const headingIdx = children
      .map((n, i) => (n.type === "element" && n.tagName === "h2" ? i : -1))
      .filter((i) => i !== -1);

    if (headingIdx.length < MIN_HEADINGS) return;

    // Kandidáti na vložení: první vždy, druhý jen u dlouhých stránek.
    // Skládáme sestupně podle indexu, aby první splice neposunul druhý.
    const plan = [];
    const firstAt = headingIdx[INSERT_AFTER_HEADING];
    if (firstAt !== undefined) plan.push({ at: firstAt, cfg });

    if (isLongForm && headingIdx.length >= SECOND_INSERT_MIN_HEADINGS) {
      const secondAt = headingIdx[SECOND_INSERT_AFTER_HEADING];
      const altKey = ALTERNATE_VARIANT[pickVariant(frontmatter.category)];
      const altCfg = INLINE_CTA[altKey];
      if (secondAt !== undefined && altCfg) plan.push({ at: secondAt, cfg: altCfg });
    }

    for (const step of plan.sort((a, b) => b.at - a.at)) {
      // Odkazuje text na cíl už nad místem vložení? Pak blok vynecháme —
      // nemá smysl nabízet totéž pár řádků po odkazu.
      const hrefsAbove = children.slice(0, step.at).flatMap((n) => collectHrefs(n));
      if (hrefsAbove.some((h) => h.startsWith(step.cfg.href))) continue;
      children.splice(step.at, 0, buildCta(step.cfg));
    }
  };
}
