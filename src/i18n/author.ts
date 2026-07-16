/**
 * Autor obsahu — identita pro byline, AuthorBox, autorskou stránku a Person
 * JSON-LD. Součást i18n vrstvy: fork přeloží labely (bylineLabel, role…),
 * jméno a odkazy jsou identita osoby sdílená napříč mutacemi.
 *
 * POZN.: `site.author` v site.ts zůstává zdrojem pro <meta name="author">
 * a musí souhlasit s `author.name` (jedna a tatáž osoba).
 */

export const author = {
  /** Zobrazované jméno (byline, bio box, Person schema name). */
  name: "Kamil ze Sniper Design",

  /** Iniciály pro fallback avatar (dokud není reálné foto). */
  initials: "K",

  /**
   * Fotka autora (public/autor/). Čtvercová 512×512 pro byline avatar a bio
   * box; větší portrét `kamil-velky.jpg` (900×1124) pro autorskou stránku.
   * `null` = vykreslí se iniciálový fallback avatar.
   */
  photo: "/autor/kamil.jpg" as string | null,

  /**
   * URL autorské stránky — jméno v byline a AuthorBoxu je odkaz sem.
   * `null` by vykreslilo plain text (fallback, kdyby stránka neexistovala).
   */
  url: "/autor/kamil/" as string | null,

  /** Malý label nad jménem v byline. */
  bylineLabel: "Autor",

  /** Bio box na konci článků (AuthorBox.astro). */
  box: {
    eyebrow: "O autorovi",
    /**
     * 3–4 věty, jen ověřitelná fakta (agentura od 2016, Zlatý partner
     * Upgates, 600+ e-shopů, vlastní e-shop MEGA DETAIL, videa v sekcích).
     */
    bio: "Kamil stojí za obsahem tohoto webu. Se Sniper Design od roku 2016 staví a optimalizuje weby a e-shopy pro český trh — jako Zlatý partner platformy Upgates s více než 600 e-shopy za sebou. Vlastní e-shop MEGA DETAIL mu slouží jako testovací provoz: co radí v článcích, zkouší nejdřív na svém. K disciplínám SEO, GEO a AEO natočil videoprůvodce, které najdete přímo v sekcích.",
    /**
     * Odkazy pod bio textem. Až budou URL na YouTube kanál / LinkedIn,
     * přidat sem — vykreslí se automaticky.
     */
    links: [
      { href: "https://www.sniperdesign.cz/", label: "Sniper Design" },
      { href: "https://www.megadetail.cz/", label: "MEGA DETAIL" },
    ] as { href: string; label: string }[],
  },

  /** Autorská stránka /autor/kamil/ (page.astro čte odsud vše přeložitelné). */
  page: {
    /** SEO <title>. */
    seoTitle: "Kamil ze Sniper Design — autor průvodce aiseo-optimalizace.cz",
    /** Meta description (70–160 znaků). */
    description:
      "Kdo píše aiseo-optimalizace.cz: Kamil ze Sniper Design — od 2016 stovky e-shopů na CZ trhu, Zlatý partner Upgates, vlastní e-shop MEGA DETAIL a videa k AI SEO.",
    breadcrumbLabel: "Autor",
    eyebrow: "Autor webu",
    /** Delší lead pod H1 (H1 = author.name). */
    lead: "Od roku 2016 se ve Sniper Design věnuje stavbě a optimalizaci webů a e-shopů pro český trh. Tenhle web je jeho otevřený zápisník AI SEO: co se osvědčuje u klientů a na vlastním e-shopu MEGA DETAIL, sem přepisuje jako návody, checklisty a videa.",
    /** Credential dlaždice (4. dlaždice s počtem článků se skládá dynamicky). */
    credentials: [
      { value: "2016", label: "od tohoto roku Zlatý partner platformy Upgates" },
      { value: "600+", label: "e-shopů na českém trhu za tu dobu" },
      { value: "MEGA DETAIL", label: "vlastní e-shop — testovací provoz pro rady z článků" },
    ] as { value: string; label: string }[],
    /** Dynamická dlaždice: {n} nahradí šablona počtem článků. */
    credentialArticles: "článků a průvodců na tomto webu",

    /** Transparentnost tvorby obsahu (E-E-A-T + vlastní doporučení webu). */
    transparency: {
      eyebrow: "Transparentně",
      title: "Jak vzniká obsah na tomto webu",
      text: "Při tvorbě obsahu používáme AI nástroje — na rešerši, osnovu a první verzi textu. Každý článek ale prochází lidskou kontrolou: fakta ověřujeme proti primárním zdrojům, doplňujeme zkušenost z vlastní praxe a za výsledek ručí podepsaný autor. Přesně tak, jak v článcích sami radíme.",
    },

    /** Sekce s videi (data videí se čtou z content/sections frontmatter). */
    videos: {
      eyebrow: "Videoprůvodci",
      title: "Disciplíny vysvětlené ve videích",
      note: "Stejná videa najdete přímo v sekcích jednotlivých disciplín.",
    },

    /** Výpis posledních článků. */
    articles: {
      eyebrow: "Z blogu",
      title: "Poslední články",
    },
  },
};
