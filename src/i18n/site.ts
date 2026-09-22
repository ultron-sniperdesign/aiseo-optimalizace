/**
 * Site config + locale — per-mutace hodnoty pro BaseLayout (lang, locale,
 * název webu, meta author, breadcrumb root, Organization/WebSite schema).
 *
 * Součást i18n vrstvy. EN/DE/PL fork přepíše tento soubor (NEsahá do
 * BaseLayout.astro — to je sdílená šablona). Drží na jednom místě vše, co
 * se liší per doména/jazyk: jazykové kódy, název domény, identitu provozovatele.
 *
 * POZN.: tracking ID (GA4, GSC, Meta Pixel) jsou build-time env vars (GH
 * Secrets), ne tady. Org identita (Sniper Design / CPU s.r.o.) je sdílená
 * agentura — fork ji typicky ponechá, ale `description` přeloží.
 */

export const site = {
  /** <html lang> */
  lang: "cs",
  /** og:locale */
  locale: "cs_CZ",
  /** WebSite schema inLanguage */
  inLanguage: "cs-CZ",
  /** Název webu — WebSite schema name + og:site_name */
  name: "aiseo-optimalizace.cz",
  /**
   * Brand logo (Header + Footer) — název rozdělený na 3 barevné spany
   * (strong = accent/bold, rest = ink, tld = faint). Per-mutace: fork přepíše
   * split pro vlastní doménu (např. EN „seoforai.net" → strong:"seofor", rest:"ai", tld:".net").
   * Spojení strong+rest+tld musí dát `name`.
   */
  brand: { strong: "aiseo", rest: "-optimalizace", tld: ".cz" },
  /** meta author (AI attribution signál) */
  author: "Kamil ze Sniper Design",
  /** Breadcrumb root (position 1) */
  breadcrumbRoot: "Úvod",

  /** Organization (publisher) — agentura, sdílená; description přeloží fork. */
  org: {
    name: "Sniper Design",
    alternateName: "CPU s.r.o.",
    description:
      "Edukativní průvodce AI SEO — viditelností webu v AI vyhledávání (SEO, GEO, AEO, AIO, Přehled od AI a režim AI). Produkt agentury Sniper Design (CPU s.r.o.).",
    sameAs: [
      "https://www.sniperdesign.cz/",
      "https://www.megadetail.cz/",
      "https://marketplace.upgates.cz/agencies/sniper-design/",
      "https://partneri.shoptet.cz/profesionalove/sniper-design/",
      "https://www.youtube.com/channel/UCgg_pplVfiWhtkULnMHVpOw",
      "https://www.linkedin.com/company/sniper-design",
      "https://www.instagram.com/sniperdesign_cz/",
      "https://www.facebook.com/SniperDesign.cz",
    ],
    /**
     * Kontaktní údaje provozovatele. Do 16. 9. 2026 je držel jen Service
     * na /audit/ ve vlastní, ručně psané kopii Organization — Google tak
     * dostával dva subjekty se stejným jménem a bez vazby. Teď je nese
     * `/#publisher` a prodejní stránky na něj odkazují přes `@id`.
     */
    email: "aiseo-optimalizace@sniperdesign.cz",
    telephone: "+420 775 181 634",
    address: {
      /**
       * Dle ARES (IČO 08125163): obec Praha, část obce Malešice, PSČ 10800.
       * Do 22. 9. 2026 bylo v `addressLocality` napsané „Praha 10 — Malešice“,
       * tedy obec, správní obvod i část obce v jednom poli — stroj z toho
       * nepřečte město. Část obce patří k ulici, město stojí samostatně.
       */
      streetAddress: "Akademická 663/5, Malešice",
      addressLocality: "Praha",
      postalCode: "108 00",
      addressCountry: "CZ",
    },
  },
};
