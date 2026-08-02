/**
 * Rehype plugin: vloží kontextové CTA doprostřed článku (po druhém H2).
 *
 * Proč: GA4 (2026-08-01) ukázala, že do 90 % délky stránky doscrolluje jen
 * ~11 % návštěv — CTA na konci článku většina čtenářů nikdy neuvidí.
 *
 * Pravidla:
 * - jen soubory z `src/content/articles/` (pilíř a sekce mají vlastní CTA logiku),
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
    if (!path.includes("/content/articles/")) return;

    const frontmatter = file?.data?.astro?.frontmatter ?? {};
    const cfg = INLINE_CTA[pickVariant(frontmatter.category)];
    if (!cfg) return;

    const children = tree.children ?? [];
    const headingIdx = children
      .map((n, i) => (n.type === "element" && n.tagName === "h2" ? i : -1))
      .filter((i) => i !== -1);

    if (headingIdx.length < MIN_HEADINGS) return;

    const insertAt = headingIdx[INSERT_AFTER_HEADING];
    if (insertAt === undefined) return;

    // Odkazuje článek na cíl už nad místem vložení? Pak blok vynecháme.
    const above = children.slice(0, insertAt);
    const hrefsAbove = above.flatMap((n) => collectHrefs(n));
    if (hrefsAbove.some((h) => h.startsWith(cfg.href))) return;

    children.splice(insertAt, 0, buildCta(cfg));
  };
}
