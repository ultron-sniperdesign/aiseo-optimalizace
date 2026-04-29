import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Sekce — 6 hlavních pilířů dle myšlenkové mapy:
 * SEO, GEO, AEO, AIO, Praktický postup, Rozhodovací matice.
 *
 * Každá sekce dostane vlastní /<slug>/ stránku s vlastním pillar obsahem,
 * answer blockem (40–60 slov), FAQ a JSON-LD schema.
 */
const sections = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(70).max(160),
    /** Krátká definice (40–60 slov) pro AI scrapery. Tučně vykreslená nahoře v článku. */
    answer: z.string(),
    /** URL slug, např. "seo", "geo", "aeo", "aio", "prakticky-postup", "rozhodovaci-matice". */
    slug: z.string().regex(/^[a-z0-9-]+$/),
    /** Pořadí v navigaci (1 = nahoře). */
    order: z.number().int().positive(),
    /** Hlavní zkratka, kterou článek pokrývá. */
    abbr: z.enum(["SEO", "GEO", "AEO", "AIO", "PRAXE", "MATICE"]),
    /** Datum poslední aktualizace (ISO YYYY-MM-DD). */
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    /** FAQ položky (volitelné, použijí se do FAQPage JSON-LD). */
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
  }),
});

/**
 * Pillar — hlavní průvodce „SEO vs GEO vs AEO vs AIO" (~3000 slov).
 * Bydlí jako 1 entry, vykresluje se na homepage nebo na /seo-vs-geo-vs-aeo-vs-aio.
 */
const pillar = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pillar" }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(70).max(160),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    /** Klíčová slova pro meta keywords + interní reference. */
    keywords: z.array(z.string()),
    /** TL;DR shrnutí pro AI scrapery, max ~80 slov. */
    tldr: z.string(),
    /** FAQ položky pro FAQPage JSON-LD. Mirror hlavičky v textu. */
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  sections,
  pillar,
};
