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
};
