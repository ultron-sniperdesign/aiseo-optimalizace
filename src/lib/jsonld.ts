/**
 * Sdílené JSON-LD buildery — jeden zdroj pravdy pro strukturovaná data.
 *
 * Cíl: FAQ (a další struktury) definovat v datovém modulu jen jednou
 * a generovat z nich jak HTML, tak JSON-LD. Dnes byly FAQ na některých
 * stránkách duplicitní (zvlášť v JSON-LD, zvlášť v HTML).
 */

import type { FaqItem } from "~/content/pages/_types";
import { author } from "~/i18n/author";

/**
 * Person autor pro Article JSON-LD (blog / sekce / pillar).
 *
 * Odkazuje přes @id na kanonickou entitu na autorské stránce
 * (`/autor/kamil/#person` — plná verze s sameAs/knowsAbout tam).
 * Kompaktní inline kopie nese name/url/image, aby byla čitelná i pro
 * parsery, které @id graf nespojují. Fallbacky: bez author.url se @id/url
 * vynechá, bez author.photo se vynechá image.
 */
export function buildPersonRef(siteOrigin: string): Record<string, unknown> {
  return {
    "@type": "Person",
    ...(author.url
      ? {
          "@id": `${siteOrigin}${author.url}#person`,
          url: `${siteOrigin}${author.url}`,
        }
      : {}),
    name: author.name,
    ...(author.photo ? { image: `${siteOrigin}${author.photo}` } : {}),
    worksFor: { "@id": `${siteOrigin}/#publisher` },
  };
}

/**
 * FAQ odpověď jako čistá věta pro JSON-LD.
 *
 * Odpovědi ve frontmatteru nesou mini markdown (odkaz, tučné, code) — čtenář
 * ho v HTML dostane vykreslený, ale do `acceptedAnswer.text` patří text, ne
 * jeho zápis. Bez tohohle kroku četly stroje „...rozpad nákladů](/blog/...)...".
 * Zjištěno 7. 9. 2026 na /geo/, kde takhle odcházelo 8 z 10 odpovědí.
 *
 * JEDINÉ místo, kde se to řeší — všechny stránky, které staví FAQPage ručně,
 * tuhle funkci importují, aby oprava nezůstala jen v části šablon.
 */
export function faqPlainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

/**
 * FAQ odpověď jako HTML pro čtenáře — protějšek `faqPlainText`.
 *
 * Odpovědi ve frontmatteru nesou mini markdown (tučné, inline kód, odkaz).
 * Tahle funkce ho vykreslí; nejdřív ale escapuje `&`, `<` a `>`, takže se
 * z obsahu nedá propašovat vlastní značka. Plný markdown záměrně neumí —
 * tyhle tři vzory jsou všechno, co v FAQ používáme.
 *
 * Proč to sedí tady a ne v šabloně: funkce existovala ve dvou identických
 * kopiích (`[slug].astro`, `seo-vs-geo-vs-aeo-vs-aio.astro`) a `RichLayout`
 * ji neměl vůbec — vykresloval `{item.a}` jako holý text, takže čtenář viděl
 * zpětné apostrofy. Naměřeno 9. 9. 2026: **13 odpovědí na 10 blogových
 * stránkách**, z toho 4 na `jak-vypnout-ai-overview` (nejčtenější článek webu),
 * kde se takhle rozbil i parametr `&udm=14`, který má čtenář opsat.
 */
export function renderFaqMarkdown(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_, label, href) => `<a href="${href}">${label}</a>`,
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

/** Postaví schema.org FAQPage z pole FAQ položek. */
export function buildFaqJsonLd(faq: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqPlainText(item.a),
      },
    })),
  };
}
