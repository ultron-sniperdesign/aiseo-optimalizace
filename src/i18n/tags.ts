/**
 * Tagy / tematické clustery blogu — PŘEKLADOVÁ DATA (fork přeloží).
 *
 * `id` je stabilní klíč používaný ve frontmatteru článků (`tags: [...]`) —
 * NIKDY se nepřekládá ani nemění (změna = rozbité přiřazení článků).
 * `slug` je URL část za /blog/tema/ — fork ji přeloží spolu s labely.
 *
 * Přiřazení: každý článek má 1–3 tagy. Tag = čtenářské téma (průřezové),
 * ne formát — formát drží `category` (tutorial/analysis/…).
 */

export interface BlogTag {
  /** Stabilní id do frontmatteru. Nepřekládat. */
  id: string;
  /** URL slug: /blog/tema/<slug>/ */
  slug: string;
  /** Krátký label do chipu. */
  label: string;
  /** H1 tag stránky. */
  title: string;
  /** Meta description + lead tag stránky (70–160 znaků). */
  description: string;
}

/** Základ URL tag stránek (fork přeloží: /blog/topic/ apod.). */
export const TAG_BASE = "/blog/tema/";

export const BLOG_TAGS: BlogTag[] = [
  {
    id: "strategie",
    slug: "strategie",
    label: "Strategie a základy",
    title: "Strategie a základy AI SEO",
    description:
      "Jak přemýšlet o viditelnosti v AI vyhledávání: disciplíny SEO/GEO/AEO/AIO, priority, ceny a rozhodování, kam investovat čas a rozpočet.",
  },
  {
    id: "ai-platformy",
    slug: "ai-platformy",
    label: "AI platformy",
    title: "AI platformy: ChatGPT, Perplexity, Gemini a AI Mode",
    description:
      "Jak jednotlivé AI vyhledávače vybírají a citují zdroje — ChatGPT, Perplexity, Gemini, Bing, Seznam i Google AI Mode — a jak se v nich zobrazit.",
  },
  {
    id: "technicke-zaklady",
    slug: "technicke-zaklady",
    label: "Technika webu",
    title: "Technické základy pro AI viditelnost",
    description:
      "Crawlery, robots.txt, llms.txt, rychlost, migrace a redakční systémy — technická vrstva, bez které AI váš obsah nenajde ani nepřečte.",
  },
  {
    id: "strukturovana-data",
    slug: "strukturovana-data",
    label: "Strukturovaná data",
    title: "Strukturovaná data (schema.org) pro AI",
    description:
      "JSON-LD v praxi: Article, Person, FAQPage, VideoObject a další typy strukturovaných dat, které pomáhají AI systémům pochopit váš web.",
  },
  {
    id: "obsah",
    slug: "obsah",
    label: "Obsah",
    title: "Obsah, který AI cituje",
    description:
      "Psaní a struktura citovatelného obsahu: answer blocky, pillar content, srovnání, aktualizace a interní prolinkování pro AI éru vyhledávání.",
  },
  {
    id: "duveryhodnost",
    slug: "duveryhodnost",
    label: "Důvěryhodnost a značka",
    title: "Důvěryhodnost, E-E-A-T a značka v AI",
    description:
      "Jak si AI ověřuje, komu věřit: E-E-A-T, zmínky o značce, autorské profily, Wikipedia, LinkedIn, YouTube a obrana proti chybným informacím.",
  },
  {
    id: "eshopy",
    slug: "eshopy",
    label: "E-shopy",
    title: "AI SEO pro e-shopy a produkty",
    description:
      "Produktové stránky, texty kategorií, ceny, nákupní AI agenti a platformy Upgates či Shoptet — co rozhoduje o viditelnosti e-shopu v AI.",
  },
  {
    id: "mereni",
    slug: "mereni",
    label: "Měření a data",
    title: "Měření AI návštěvnosti a viditelnosti",
    description:
      "GA4 segmenty, Search Console, Share of Model, zero-click éra a reálná data z praxe — jak měřit, co AI vyhledávání vašemu webu přináší.",
  },
  {
    id: "audit-nastroje",
    slug: "audit-nastroje",
    label: "Audity a nástroje",
    title: "Audity a nástroje pro AI SEO",
    description:
      "Co kontrolovat při auditu AI viditelnosti, jaké nástroje na to existují a jak si stav webu otestovat vlastními silami krok za krokem.",
  },
];

/** Stabilní seznam id pro Zod enum v content.config.ts. */
export const TAG_IDS = BLOG_TAGS.map((t) => t.id);

/** Lookup mapy pro šablony. */
export const tagById = new Map(BLOG_TAGS.map((t) => [t.id, t]));
export const tagBySlug = new Map(BLOG_TAGS.map((t) => [t.slug, t]));
