/**
 * PER-MUTACE: texty a cíle kontextového CTA vkládaného doprostřed článku.
 *
 * Proč to existuje (GA4 2026-08-01): do 90 % délky stránky doscrolluje jen
 * zhruba každý devátý návštěvník, takže CTA na konci článku většina čtenářů
 * nikdy neuvidí. Tenhle blok se vkládá výš, po druhém H2.
 *
 * Vkládá ho `src/lib/rehype-inline-cta.mjs` — do MDX se nic ručně nepíše.
 * Fork přeloží texty a upraví `href` na vlastní URL produktů.
 */

/** Kolik H2 musí článek mít, aby se CTA vůbec vložilo (krátké články přeskočíme). */
export const MIN_HEADINGS = 4;

/** Po kolikátém H2 se blok vloží. */
export const INSERT_AFTER_HEADING = 2;

/**
 * Dlouhé stránky dostanou druhé CTA. Sekce mají 7+ H2 a přes 2 000 slov —
 * jediný blok po druhém H2 je pro ně málo, spodní polovina textu zůstává
 * bez nabídky. Druhý blok NESMÍ opakovat tentýž cíl, jinak čtenář vidí
 * dvakrát totéž; proto se použije druhá varianta (audit → Pack a naopak).
 */
export const SECOND_INSERT_MIN_HEADINGS = 7;
export const SECOND_INSERT_AFTER_HEADING = 5;

/**
 * Cíl podle `category` ve frontmatteru — stejné rozdělení, jaké má
 * blogger/ARTICLE_TEMPLATE.md: analysis/case-study → audit, ostatní → Pack.
 */
export const INLINE_CTA = {
  audit: {
    categories: ["analysis", "case-study"],
    label: "Chcete to posoudit na svém webu?",
    text: "AI SEO audit projde vaše stránky ve třech vrstvách a vrátí prioritní seznam úprav.",
    linkText: "Prohlédnout audit",
    href: "/audit/",
  },
  pack: {
    categories: ["tutorial", "defensive"],
    label: "Chcete to udělat podle předlohy?",
    text: "AI SEO Wireframe Pack má hotové wireframy a šablony textů pro klíčové typy stránek.",
    linkText: "Prohlédnout Pack",
    href: "/pack/",
  },
};

/** Fallback, když kategorie nesedí do žádné skupiny. */
export const DEFAULT_VARIANT = "audit";

/** Druhá varianta k dané první (pro druhý blok na dlouhé stránce). */
export const ALTERNATE_VARIANT = { audit: "pack", pack: "audit" };
