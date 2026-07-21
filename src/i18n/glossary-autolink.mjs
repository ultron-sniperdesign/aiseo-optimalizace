/**
 * Registr pojmů pro automatické prolinkování v MDX obsahu (wikipedizace).
 * PŘEKLADOVÁ DATA — fork si nastaví vlastní patterny a slugy.
 *
 * Plain ESM (.mjs), protože se importuje v astro.config pipeline
 * (rehype plugin), kam TS moduly nedosáhnou.
 *
 * Pravidla výběru: jen NESKLOŇOVANÉ výrazy (zkratky, anglicismy) —
 * česká víceslovná hesla (strukturovaná data, halucinace…) se skloňují
 * a exact-match by je trefil jen někdy; ta linkujeme ručně.
 * Delší patterny MUSÍ být před kratšími (AI SEO před SEO).
 */
export const GLOSSARY_LINKS = [
  { pattern: "AI SEO", slug: "ai-seo" },
  { pattern: "AI Overviews", slug: "ai-overviews" },
  { pattern: "AI Mode", slug: "ai-mode" },
  { pattern: "query fan-out", slug: "query-fan-out" },
  { pattern: "llms.txt", slug: "llms-txt" },
  { pattern: "E-E-A-T", slug: "e-e-a-t" },
  { pattern: "zero-click", slug: "zero-click" },
  { pattern: "GEO", slug: "geo" },
  { pattern: "AEO", slug: "aeo" },
  { pattern: "AIO", slug: "aio" },
  { pattern: "LLM", slug: "llm" },
  { pattern: "RAG", slug: "rag" },
  { pattern: "CTR", slug: "ctr" },
  { pattern: "GA4", slug: "ga4" },
];

/** Základ URL detailu hesla (fork přeloží dle vlastní TAG struktury). */
export const GLOSSARY_BASE = "/slovnik/";
