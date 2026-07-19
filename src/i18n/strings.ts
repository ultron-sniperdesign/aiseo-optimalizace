/**
 * Slovník UI stringů sdílených komponent (Header, Footer, EmailCapture).
 *
 * Jeden zdroj překladového textu pro „chrome" webu. Komponenty (.astro) jsou
 * SDÍLENÉ napříč mutacemi a vlastní je CZ kanonický projekt (vlastník design
 * systému „A"). Tento soubor se při forku do jiného jazyka PŘELOŽÍ — stejně
 * jako content/pages/*.ts. EN/DE/PL fork = kopie projektu + překlad těchto dat.
 *
 * Nav odkazy:
 *  - `nav.groups` (3 skupiny) sdílí Footer i mobilní menu (plné názvy).
 *  - `nav.desktopEdu` + `nav.desktopOffers` (2 sekce) jen pro desktopovou
 *    lištu — vizuálně oddělené vertikálním dividerem v Header.astro.
 *    Edu = obsahové disciplíny + průvodce; Offers = co prodáváme / dáváme.
 *    Blog je i v top nav (přání uživatele 2026-07-18) + v Praxe groupě.
 *
 * POZN.: značka/domény (brand spany, e-mailové adresy v právním textu) jsou
 * per-doména identita — fork je upraví v rámci své identity, nejsou to „překlad".
 */

export interface NavLink {
  href: string;
  label: string;
  /** Disciplína — barevné zvýraznění (tečka / hover barva). */
  d?: "seo" | "geo" | "aeo" | "aio" | "aimode";
  /** Stylová varianta (pillar / blog / services / audit / free). */
  variant?: "pillar" | "blog" | "services" | "audit" | "free";
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export const nav = {
  brandAria: "aiseo-optimalizace.cz — domovská stránka",
  menuLabel: "Menu",
  openLabel: "Otevřít menu",
  closeLabel: "Zavřít menu",
  navAria: "Hlavní navigace",
  mobileAria: "Mobilní navigace",

  /**
   * HEADER v4a (redesign 2026-07-19, design handoff „Claude design"):
   * dvouřádkový header — řádek 1: logo + vyhledávání + akviziční blok;
   * řádek 2: disciplíny (s dropdown náhledy) + doplňky. Fork přeloží
   * labely/texty; `d` klíče a href nechává dle vlastních slugů.
   */
  header: {
    /** Vyhledávání (Pagefind → /hledat/). */
    search: {
      placeholder: "Hledat disciplíny, návody, pojmy…",
      placeholderMobile: "Hledat…",
      button: "Hledat",
      aria: "Hledat na webu",
      action: "/hledat/",
    },
    /** Disciplíny (řádek 2) + obsah dropdown karet. */
    disciplines: [
      {
        d: "seo",
        label: "SEO",
        href: "/seo/",
        badge: "SEO",
        fullName: "Search Engine Optimization",
        lead: "Pozice v Googlu a Seznamu.",
        desc: "Klasická optimalizace pro pozice ve vyhledávačích. Zůstává základem všeho ostatního — bez indexace nezafunguje GEO ani AEO.",
      },
      {
        d: "geo",
        label: "GEO",
        href: "/geo/",
        badge: "GEO",
        fullName: "Generative Engine Optimization",
        lead: "Citace v ChatGPT, Perplexity, Claude a Gemini.",
        desc: "Místo modrého odkazu cílíte na to být zdrojem, ze kterého AI čerpá fakta při generování odpovědi.",
      },
      {
        d: "aeo",
        label: "AEO",
        href: "/aeo/",
        badge: "AEO",
        fullName: "Answer Engine Optimization",
        lead: "Google AI Overviews a Bing Chat.",
        desc: "Užší disciplína — FAQ sekce, návody a krátké odpovědi hned po nadpisu. To je její řemeslo.",
      },
      {
        d: "aio",
        label: "AIO",
        href: "/aio/",
        badge: "AIO",
        fullName: "AI Optimization (zastřešující)",
        lead: "Strategický deštník nad SEO, GEO a AEO.",
        desc: "Také konkrétní funkce Google AI Overviews. Dvojí význam, který se v praxi často plete.",
      },
      {
        d: "aimode",
        label: "AI Mode",
        href: "/ai-mode/",
        badge: "AI MODE",
        fullName: "Google AI Mode",
        lead: "Konverzační vyhledávání přímo v Googlu.",
        desc: "Nastupující rozhraní s query fan-out — odpovědi bez klikání. Rozhoduje, jestli vás Google vůbec ukáže.",
      },
    ],
    /** CTA v dropdown kartě. */
    dropdownCta: "Otevřít detail disciplíny →",
    /** Doplňky (utlumená část řádku 2). */
    addons: [
      { href: "/blog/", label: "Blog" },
      { href: "/seo-vs-geo-vs-aeo-vs-aio/", label: "Průvodce" },
      { href: "/slovnik/", label: "Slovník" },
    ],
    /** Akviziční blok (řádek 1 vpravo). Variant řídí barvu tlačítka. */
    acquisitions: [
      { href: "/sluzby/", label: "Služby", variant: "outline" },
      { href: "/audit/", label: "Audit", variant: "audit" },
      { href: "/navod-zdarma/", label: "Návod zdarma", variant: "free" },
    ],
    /** Mobilní drawer. */
    mobile: {
      disciplinesTitle: "DISCIPLÍNY",
      searchAria: "Otevřít vyhledávání",
    },
  },

  /** DESKTOP lišta — edukativní část (obsahové disciplíny + průvodce). */
  desktopEdu: [
    { href: "/zacnete-tady/", label: "Start" },
    { href: "/seo/", label: "SEO", d: "seo" },
    { href: "/geo/", label: "GEO", d: "geo" },
    { href: "/aeo/", label: "AEO", d: "aeo" },
    { href: "/aio/", label: "AIO", d: "aio" },
    { href: "/ai-mode/", label: "AI Mode", d: "aimode" },
    { href: "/seo-vs-geo-vs-aeo-vs-aio/", label: "Průvodce", variant: "pillar" },
    { href: "/blog/", label: "Blog" },
  ] as NavLink[],

  /** DESKTOP lišta — komerční / „co nabízíme" část. Oddělená dividerem.
   *  Všechny 3 položky pilly (services = outlined neutral, audit = magenta,
   *  free = gold) — vizuálně koherentní trojice CTA. */
  desktopOffers: [
    { href: "/sluzby/", label: "Služby", variant: "services" },
    { href: "/audit/", label: "Audit", variant: "audit" },
    { href: "/navod-zdarma/", label: "Návod zdarma", variant: "free" },
  ] as NavLink[],

  /** Kompletní seznam — sdílí Footer i mobilní menu (plné názvy, 3 skupiny). */
  groups: [
    {
      label: "Disciplíny",
      links: [
        { href: "/seo/", label: "SEO", d: "seo" },
        { href: "/geo/", label: "GEO", d: "geo" },
        { href: "/aeo/", label: "AEO", d: "aeo" },
        { href: "/aio/", label: "AIO", d: "aio" },
        { href: "/ai-mode/", label: "Google AI Mode", d: "aimode" },
      ],
    },
    {
      label: "Praxe",
      links: [
        { href: "/zacnete-tady/", label: "Začněte tady" },
        { href: "/prakticky-postup/", label: "Praktický postup" },
        { href: "/rozhodovaci-matice/", label: "Rozhodovací matice" },
        { href: "/seo-vs-geo-vs-aeo-vs-aio/", label: "Hlavní průvodce" },
        { href: "/blog/", label: "Blog" },
        { href: "/slovnik/", label: "Slovník pojmů" },
      ],
    },
    {
      label: "Co nabízíme",
      links: [
        { href: "/sluzby/", label: "Všechny služby" },
        { href: "/navod-zdarma/", label: "Návod zdarma", variant: "free" },
        { href: "/pack/", label: "AI SEO Wireframe Pack" },
        { href: "/audit/", label: "AI SEO audit", variant: "audit" },
        { href: "/kontakt/", label: "Kontakt" },
      ],
    },
  ] as NavGroup[],
};

export const footer = {
  tagline:
    "Praktický průvodce AI érou vyhledávání pro český trh. Co je rozdíl mezi SEO, GEO, AEO a AIO — a kdy kterou techniku použít na webu nebo e-shopu.",
  /** Skládá se jako: © {rok} {doména} · {builtNote} */
  builtNote: "postaveno na Astru · hostováno v ČR",
  sitemapLabel: "Sitemap",
  rssLabel: "RSS",
  updatedLabel: "Aktualizováno květen 2026",
};

/**
 * UI microcopy vykreslované přímo ve sdílených šablonách (pillar, sekce
 * [slug], blog reading pages, homepage chrome) — opakující se popisky, které
 * NEjsou ani „chrome" komponent (nav/footer/emailCapture výš), ani obsah
 * stránek (content/pages/*.ts). Fork je přeloží.
 *
 * Rich tituly (`*Html`) jsou HTML stringy renderované přes `set:html`.
 * Vložené <strong>/<span class="hl"> dostanou styl z GLOBÁLNÍCH h2 pravidel
 * (src/styles/global.css → `h2 strong`, `h2 .hl`), takže fork je smí přeložit
 * i se značkami a v jiném slovosledu. `{abbr}` placeholder nahradí šablona.
 */
export const ui = {
  // Breadcrumbs (viditelné ve stránce; JSON-LD breadcrumb root řeší site.breadcrumbRoot)
  crumbHome: "Úvod",
  crumbBlog: "Blog",
  crumbDisciplines: "Disciplíny",
  ariaBreadcrumb: "Drobečková navigace",
  ariaToc: "Obsah článku",

  // Answer block (krátká odpověď / definice nahoře)
  answerShort: "Stručná odpověď",
  answerDefinition: "Stručná definice",

  // Meta dlaždice (slov / otázek / čtení / aktualizace)
  metaWords: "slov",
  metaFaqs: "častých otázek",
  metaReadingMins: "minut čtení",
  metaUpdated: "Aktualizováno:",
  metaMinShort: "min", // krátká forma na blog kartách (acard__time)

  // Obsah (TOC)
  tocLabel: "Obsah",
  tocLabelRich: "V tomto článku",
  tocChapters: "kapitol",

  // FAQ eyebrow
  faqEyebrowNum: "FAQ",
  faqEyebrow: "Časté otázky",

  // Back CTA
  backToHome: "Zpět na úvod",
  allArticles: "Všechny články v blogu",

  // Blog listing (index) — filtr + karty + aria labely
  filterAll: "Všechny",
  cardReadMore: "Číst",
  ariaArticleFilter: "Filtr článků podle kategorie",
  ariaArticleList: "Seznam článků",

  // Blog hero — odkaz na vstupní hub pro nováčky
  blogStartLead: "Jste tu poprvé?",
  blogStartLink: "Začněte tady",

  // Série článků (registr v i18n/series.ts) — SeriesNav box + landing
  seriesEyebrow: "Série",
  seriesNavAria: "Navigace v sérii",
  /** „Díl {x} z {n}" — {x}/{n} nahradí šablona. */
  seriesPartOf: "Díl {x} z {n}",
  seriesPrev: "← Předchozí díl",
  seriesNext: "Další díl →",
  seriesAllParts: "Všechny díly",
  seriesPlannedTitle: "Připravujeme",
  seriesPlannedNote: "Další díly jsou v obsahovém plánu — přibudou v příštích týdnech.",
  seriesStartCta: "Začít dílem 1",
  /** Promo banner série na tag stránce. */
  seriesPromoLead: "K tomuto tématu máme ucelenou sérii:",
  seriesPromoCta: "Projít sérii",

  // Stránka /hledat/ (Pagefind)
  searchPage: {
    title: "Hledání",
    metaTitle: "Hledání na webu",
    metaDescription:
      "Fulltextové hledání napříč celým webem — články, disciplíny, slovník pojmů i praktické návody k AI éře vyhledávání.",
    lead: "Prohledává všechny články, sekce disciplín i slovník pojmů.",
    devNote: "Vyhledávací index vzniká při buildu — na dev serveru není k dispozici.",
  },

  // Tagy / tematické clustery (registr témat v i18n/tags.ts)
  tagsRowLabel: "Témata",
  ariaTagNav: "Témata blogu",
  tagPageEyebrow: "Téma",
  tagPageCountSuffix: "článků k tématu", // „12 článků k tématu"
  tagPageAllTags: "Další témata",
  tagPageBackToBlog: "Všechny články v blogu",
  articleTagsLabel: "Témata článku",

  // Sekce [slug] — kontextový label v breadcrumb pillu (klíč = abbr)
  sectionContext: {
    SEO: "První disciplína · SEO",
    GEO: "Druhá disciplína · GEO",
    AEO: "Třetí disciplína · AEO",
    AIO: "Čtvrtá disciplína · AIO",
    AIMODE: "Nová vrstva Googlu · AI Mode",
    PRAXE: "Návod · Praktický postup",
    MATICE: "Rozhodování · Kdy co použít",
  } as Record<string, string>,

  // RelatedSections blok (konec všech 6 sekcí): eyebrow / titulek / CTA.
  // `{abbr}` v titulku nahradí šablona (= display badge aktuální sekce).
  relatedEyebrow: "Související",
  relatedTitleHtml: 'Tři sekce, které <strong>jdou dohromady s {abbr}</strong>',
  relatedCta: "Číst sekci",
  // Velký display badge v kartě (klíč = abbr enum). CZ = identita;
  // EN fork přepíše AIO → "AI SEO" (stejný princip jako homepage PillDef.badge).
  sectionBadge: {
    SEO: "SEO",
    GEO: "GEO",
    AEO: "AEO",
    AIO: "AIO",
    AIMODE: "AI MODE",
    PRAXE: "PRAXE",
    MATICE: "MATICE",
  } as Record<string, string>,

  // Blog kategorie (crumb + filter chips + card tag); klíč = frontmatter category
  category: {
    tutorial: "Tutorial",
    analysis: "Analýza",
    defensive: "Defenzivní",
    "case-study": "Case study",
  } as Record<string, string>,
  categoryFallback: "Článek",

  // Pillar (hlavní průvodce)
  pillar: {
    eyebrow: "Hlavní průvodce",
    wordsApprox: "~3 000 slov",
    readingApprox: "~12 minut čtení",
    compareTable: "Srovnávací tabulka",
    faqTitleHtml: 'Sedm <span class="hl">častých otázek</span> ke <strong>4 zkratkám</strong>',
  },

  // Sekce [slug] — rich FAQ titulek ({abbr} nahradí šablona)
  sectionFaqTitleHtml:
    'Otázky, které se k <span class="hl">{abbr}</span> <strong>ptají nejčastěji</strong>',

  // Související články pod článkem (RelatedArticles.astro)
  relatedArticlesEyebrow: "Čtěte dál",
  relatedArticlesTitle: "Související články",
  relatedArticlesAria: "Doporučené související články",

  // Blog reading page [slug] (non-rich) — FAQ titulek (set:html)
  blogFaqTitleHtml:
    '<span class="hl">Časté otázky</span>, které k tématu <strong>nejčastěji padají</strong>',
  // Blog index — FAQ titulek (set:html)
  blogIndexFaqTitleHtml:
    'Šest otázek, které k <span class="hl">blogu</span> <strong>nejčastěji padají</strong>',
  // RichLayout (variant: rich) — FAQ eyebrow ({n} = počet otázek) + titulek
  richFaqEyebrowHtml: "FAQ · {n} otázek",
  richFaqTitle: "Časté otázky, které k tématu padají",
};

export const emailCapture = {
  label: "Váš e-mail",
  placeholder: "vas@email.cz",
  buttonLabel: "Stáhnout AI SEO návod zdarma",
  legalHtml:
    'Pošleme vám <strong>odkaz na PDF</strong> z&nbsp;e-mailu <strong>aiseo-optimalizace@sniperdesign.cz</strong> (zkontrolujte i&nbsp;Hromadné&nbsp;/&nbsp;Promo). V&nbsp;dalších dnech občas přidáme <strong>praktické tipy k&nbsp;AI&nbsp;SEO a&nbsp;občasnou nabídku našich produktů / služeb</strong>. <strong>Žádný denní newsletter</strong> &mdash; odhlášení je v&nbsp;každém e-mailu jedním kliknutím. <a href="/gdpr/">Zásady zpracování osobních údajů</a>.',
};
