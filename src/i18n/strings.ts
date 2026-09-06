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
        d: "aiprehled",
        label: "Přehled od AI",
        href: "/prehled-od-ai/",
        badge: "PŘEHLED OD AI",
        fullName: "Přehled od AI — Google AI Overviews",
        lead: "Souhrn nad výsledky, který bere kliknutí.",
        desc: "V Česku od 20. 5. 2025 zhruba u pětiny dotazů. Buď vás cituje, nebo odpoví za vás — a obojí se dá ovlivnit.",
        /** Předěl: odsud níž nejde o disciplíny, ale o konkrétní funkce Googlu. */
        groupStart: "Funkce Googlu",
      },
      {
        d: "aimode",
        label: "Režim AI",
        href: "/ai-mode/",
        badge: "REŽIM AI",
        fullName: "Režim AI — Google AI Mode",
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
    { href: "/prehled-od-ai/", label: "Přehled od AI", d: "aiprehled" },
    { href: "/ai-mode/", label: "Režim AI", d: "aimode" },
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
        { href: "/prehled-od-ai/", label: "Přehled od AI (AI Overviews)", d: "aiprehled" },
        { href: "/ai-mode/", label: "Režim AI (Google AI Mode)", d: "aimode" },
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
  builtNote: "produkt agentury Sniper Design · postaveno na Astru · hostováno v ČR",
  sitemapLabel: "Sitemap",
  rssLabel: "RSS",
  /** Prefix pro dynamické datum v patičce; Footer.astro dopočítá nejnovější
   *  `updated` napříč kolekcemi a doplní měsíc v lokálu (viz footerMonths). */
  updatedPrefix: "Aktualizováno",
  /** Měsíce v 6. pádě („v září"), aby patička dávala smysl česky. */
  footerMonths: [
    "v lednu", "v únoru", "v březnu", "v dubnu", "v květnu", "v červnu",
    "v červenci", "v srpnu", "v září", "v říjnu", "v listopadu", "v prosinci",
  ],
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

  /** Figure — popisek odkazu na plnou velikost obrázku. */
  figure: {
    openFull: "Otevřít obrázek v plné velikosti",
    /** Nápověda pod obrázkem; ukazuje se jen na úzkých displejích, kde je
     *  snímek rozhraní zmenšený na nečitelnou velikost. */
    tapToZoom: "Klepnutím otevřete v plné velikosti",
  },
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
  // Blog listing — hero meta dlaždice ({n}/{date} nahradí šablona)
  blogMetaArticles: "{n} článků",
  blogMetaCategories: "{n} kategorií",
  blogMetaAvgWords: "průměrně ~{n} slov / článek",
  blogMetaNewest: "nejnovější: {date}",

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
    AIMODE: "Funkce Googlu · Režim AI",
    AIPREHLED: "Funkce Googlu · Přehled od AI",
    PRAXE: "Návod · Praktický postup",
    MATICE: "Rozhodování · Kdy co použít",
  } as Record<string, string>,

  // RelatedSections blok (konec všech 6 sekcí): eyebrow / titulek / CTA.
  // `{abbr}` v titulku nahradí šablona (= display badge aktuální sekce).
  relatedEyebrow: "Související",
  relatedTitleHtml: 'Tři sekce, které <strong>jdou dohromady {abbr}</strong>',
  relatedCta: "Číst sekci",
  // Velký display badge v kartě (klíč = abbr enum). CZ = identita;
  // EN fork přepíše AIO → "AI SEO" (stejný princip jako homepage PillDef.badge).
  sectionBadge: {
    SEO: "SEO",
    GEO: "GEO",
    AEO: "AEO",
    AIO: "AIO",
    AIMODE: "REŽIM AI",
    AIPREHLED: "PŘEHLED OD AI",
    PRAXE: "PRAXE",
    MATICE: "MATICE",
  } as Record<string, string>,

  // Skloňované tvary display badge pro věty v šablonách. Zkratky (SEO/GEO/AEO/AIO)
  // jsou nesklonné, víceslovné názvy ne — bez těchto map vzniká „k PRAXE" a
  // „s REŽIM AI". Fork přepíše podle gramatiky svého jazyka (nebo nechá 1:1).
  /**
   * Název sekce ve velkém nadpisu stránky. Fallback je `sectionBadge`; přepis
   * má smysl tam, kde krátká zkratka sama o sobě nestačí k rozpoznání — malá
   * karta v „Souvisejících" ale musí zůstat krátká, proto samostatná mapa.
   */
  sectionHeroBadge: {
    AIMODE: "GOOGLE REŽIM AI",
    AIPREHLED: "PŘEHLED OD AI",
  } as Record<string, string>,

  sectionBadgeDative: {
    SEO: "SEO",
    GEO: "GEO",
    AEO: "AEO",
    AIO: "AIO",
    AIMODE: "režimu AI",
    AIPREHLED: "Přehledu od AI",
    PRAXE: "praxi",
    MATICE: "matici",
  } as Record<string, string>,
  // Pozor: hodnota nese i předložku. Čeština ji vokalizuje podle následujícího
  // slova („se SEO", ale „s GEO"), takže ji nelze nechat natvrdo v šabloně.
  sectionBadgeInstrumental: {
    SEO: "se SEO",
    GEO: "s GEO",
    AEO: "s AEO",
    AIO: "s AIO",
    AIMODE: "s režimem AI",
    AIPREHLED: "s Přehledem od AI",
    PRAXE: "s praxí",
    MATICE: "s maticí",
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
    /** `{count}` nahradí šablona skutečným počtem otázek — dřív tu bylo napevno
     *  „Sedm", zatímco stránka jich vykreslovala deset. */
    faqTitleHtml: '<span class="hl">{count} častých otázek</span> ke <strong>4 zkratkám</strong>',
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

  // Skip-link v BaseLayout (a11y)
  skipToContent: "Přeskočit na obsah",

  // Mikrotexty obsahových blocks komponent (src/components/blocks/*) —
  // labely zadrátované v komponentách, ne props z MDX. Fork je přeloží tady.
  blocks: {
    doLabel: "Takhle ano",
    dontLabel: "Takhle ne",
    /** Prompt — tlačítko kopírování + potvrzení po zkopírování (JS v PromptList). */
    copyLabel: "Kopírovat",
    copiedLabel: "✓ Zkopírováno",
    /** Insight default label (přepsatelný props `label` z MDX). */
    insightLabel: "Klíčové zjištění",
    /** Mistake — prefix fix řádku. */
    mistakeFixLabel: "Fix:",
    /** Mindset — popisky dvojice karet (přepsatelné props `badChip` / `goodChip`). */
    mindsetBadLabel: "Špatný přístup",
    mindsetGoodLabel: "Správný přístup",
    /** SourceCard defaulty (přepsatelné props). */
    sourceBadge: "Zdroj",
    sourceLinkLabel: "Otevřít zdroj",
    /** ToolGrid tier labely (klíč = tier enum). */
    tier: {
      free: "Free",
      paid: "Placený",
      both: "Free + Placený",
    } as Record<string, string>,
    /** HeroVideo — aria-label play tlačítka (default, přepsatelný props). */
    playVideo: "Přehrát video",
    /** DataBars / DataColumns — tabulkový fallback. */
    dataShowTable: "Zobrazit data v tabulce",
    dataItemCol: "Položka",
    dataPeriodCol: "Období",
    dataValueCol: "Hodnota",
  },
};

/**
 * FreeStrip — obsah promo bloku „návod zdarma" (default hodnoty komponenty).
 * Je to obsah, ne chrome — ale komponenta je sdílená a vkládá se z MDX bez
 * props, takže defaulty musí žít v i18n vrstvě. Props z MDX je dál přepíšou.
 */
export const freeStrip = {
  eyebrow: "Návod zdarma · 0 Kč",
  title: "Šest signálů AI-friendly stránky jako",
  titleHighlight: "hotový návod pro vaši homepage",
  description:
    "Wireframe s anotacemi, tři principy, které drží strukturu, a šablony textů. Šest stran A4 v PDF — výměnou za e-mail.",
  bullets: [
    "Wireframe homepage 1:1 s anotacemi",
    "Šablony nadpisů, krátké odpovědi a FAQ",
    "Checklist připravený k použití",
  ],
  ctaText: "Stáhnout PDF zdarma",
  ctaHref: "/navod-zdarma/",
  badge: "6 stran A4 · PDF",
};

export const emailCapture = {
  label: "Váš e-mail",
  placeholder: "vas@email.cz",
  buttonLabel: "Stáhnout AI SEO návod zdarma",
  legalHtml:
    'Pošleme vám <strong>odkaz na PDF</strong> z&nbsp;e-mailu <strong>aiseo-optimalizace@sniperdesign.cz</strong> (zkontrolujte i&nbsp;Hromadné&nbsp;/&nbsp;Promo). V&nbsp;dalších dnech občas přidáme <strong>praktické tipy k&nbsp;AI&nbsp;SEO a&nbsp;občasnou nabídku našich produktů / služeb</strong>. <strong>Žádný denní newsletter</strong> &mdash; odhlášení je v&nbsp;každém e-mailu jedním kliknutím. <a href="/gdpr/">Zásady zpracování osobních údajů</a>.',
};
