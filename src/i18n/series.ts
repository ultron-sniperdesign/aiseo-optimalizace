/**
 * Série článků — PŘEKLADOVÁ DATA (fork přeloží slugy, titulky, popisy).
 *
 * Série = ručně seřazená „mini-kurzová" cesta existujícími články
 * (na rozdíl od tagů, které jsou automatický výpis tématu). Členství
 * se odvozuje ze slugů v `parts` — žádný frontmatter navíc; článek
 * může být max. v jedné sérii (první nalezená vyhrává).
 *
 * Generuje: landing /serie/<slug>/, SeriesNav box na článcích
 * (díl X z N + předchozí/další) a promo banner na tag stránce
 * s odpovídajícím `promoTag`.
 */

export interface Series {
  /** Stabilní id (nepřekládat — interní klíč). */
  id: string;
  /** URL slug: /serie/<slug>/ */
  slug: string;
  /** Název série (H1 + SeriesNav box). */
  title: string;
  /** Krátký název do breadcrumb / promo chipů. */
  shortTitle: string;
  /** Meta description + lead landing stránky (70–160 znaků pro meta). */
  description: string;
  /** Delší úvod na landing stránce (1–2 věty nad rámec description). */
  intro: string;
  /** Slugy článků V POŘADÍ dílů. Slug musí existovat v articles collection. */
  parts: { slug: string; note: string }[];
  /** Připravované díly (zadané bloggerovi, zatím nevydané). */
  planned: string[];
  /** Tag id (z i18n/tags.ts), na jehož stránce se zobrazí promo série. */
  promoTag?: string;
}

export const SERIES_BASE = "/serie/";

export const SERIES: Series[] = [
  {
    id: "eshopy",
    slug: "ai-seo-pro-eshopy",
    title: "AI SEO pro e-shopy: kompletní série",
    shortTitle: "AI SEO pro e-shopy",
    description:
      "Osmidílná série pro provozovatele e-shopů: od kontextu přes produktové stránky, kategorie a strukturovaná data až po AI nákupní agenty a reálná čísla.",
    intro:
      "Díly na sebe navazují jako kurz — začněte prvním a projděte je popořadě. Každý díl je samostatný článek s konkrétním postupem; dohromady pokrývají celou cestu e-shopu k viditelnosti v AI odpovědích.",
    parts: [
      {
        slug: "seo-pro-eshopy-ai-era-2026",
        note: "Kontext na začátek: co se pro e-shopy mění, kolik to stojí a kde začít.",
      },
      {
        slug: "produktove-stranky-pro-ai",
        note: "Jádro e-shopu: jak upravit detail produktu, aby ho AI umělo přečíst a doporučit.",
      },
      {
        slug: "kategorie-texty-pro-ai",
        note: "Kategorie jako odpověď na otázku „jaký X vybrat“ — texty, které AI cituje.",
      },
      {
        slug: "ceny-na-webu-a-ai",
        note: "Proč „cena na dotaz“ škodí a jak dát srozumitelný cenový signál.",
      },
      {
        slug: "strukturovana-data-pro-ai",
        note: "Technický základ: Product, Offer a další JSON-LD typy + validace.",
      },
      {
        slug: "ai-seo-upgates-shoptet",
        note: "České platformy prakticky: co Upgates a Shoptet umí samy a co doplnit.",
      },
      {
        slug: "ai-nakupni-agenti",
        note: "Co přichází: agentní nakupování a produktová data, která rozhodnou.",
      },
      {
        slug: "case-study-megadetail-ai-navstevnost",
        note: "Reálná čísla z našeho e-shopu: objemy, konverze a co od AI kanálu čekat.",
      },
    ],
    planned: [
      "Recenze a hodnocení pro AI: jak z nich udělat citovatelný signál",
      "Produktový feed a GTIN: data, přes která vás najdou AI nákupní agenti",
    ],
    promoTag: "eshopy",
  },
];

/** Najde sérii a pozici dílu podle slugu článku (null = článek v žádné sérii). */
export function findSeriesPart(slug: string): { series: Series; index: number } | null {
  for (const s of SERIES) {
    const i = s.parts.findIndex((p) => p.slug === slug);
    if (i !== -1) return { series: s, index: i };
  }
  return null;
}

/** Série promovaná na tag stránce daného tag id. */
export function seriesForTag(tagId: string): Series | null {
  return SERIES.find((s) => s.promoTag === tagId) ?? null;
}
