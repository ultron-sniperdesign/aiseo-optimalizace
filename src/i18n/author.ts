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
   * URL autorské stránky. `null` = jméno v byline je plain text bez odkazu.
   * Autorská stránka (bod 3) sem doplní `"/autor/kamil/"`.
   */
  url: null as string | null,

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
};
