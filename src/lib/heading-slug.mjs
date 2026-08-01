/**
 * KANONICKÁ slugifikace nadpisů — JEDINÉ místo, kde se počítá.
 *
 * Používají ji dvě strany, které si musí odpovídat:
 *  1. `src/lib/rehype-heading-ids.mjs` — nastavuje `id` na nadpisech v HTML
 *  2. `src/components/article/RichLayout.astro` — staví odkazy v obsahu („na této stránce")
 *
 * Historie: do 2026-08-01 měla každá strana vlastní implementaci. ToC dělal
 * ASCII slug bez diakritiky, `id` generoval Astro svým interním sluggerem, který
 * diakritiku zachovává. Statické HTML tak mělo `href="#co-google-15-kvetna-2026-vydal"`
 * proti `id="co-google-15-května-2026-vydal"` u 104 ze 106 článků. Klik po načtení
 * stránky fungoval jen díky klientskému skriptu, který `id` dodatečně přepisoval;
 * příchod na URL s fragmentem (sdílený odkaz) ale nikam neodscrolloval, protože
 * prohlížeč fragment vyhodnocuje dřív, než ten skript stihne doběhnout.
 *
 * VOLBA: držíme **ASCII bez diakritiky**. Důvody:
 *  - fragment přežije kopírování, e-mail, analytiku i starší nástroje bez
 *    percent-encodingu (`#co-google-15-května…` se jinde objeví jako `%C4%9B`),
 *  - je to tvar, který web v `href` odjakživa vydával — odkazy, které si někdo
 *    zkopíroval z obsahu, tímhle začnou fungovat, místo aby se rozbily,
 *  - `id` s diakritikou je sice validní HTML5, ale v CSS selektorech a v JS
 *    `querySelector` vyžaduje escapování, což je zbytečná past do budoucna.
 */

/** Základní transformace jednoho nadpisu na ASCII slug. */
export function slugifyHeading(text) {
  return String(text)
    .replace(/<[^>]+>/g, "") // inline HTML v nadpisu (např. <span class="hl">)
    .replace(/[*_`]/g, "") // markdown zvýraznění
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // odstranit diakritická znaménka
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64)
    .replace(/-$/, ""); // slice mohl useknout uprostřed slova
}

/**
 * Stavový slugger pro jeden dokument — řeší kolize.
 *
 * Dva nadpisy se stejným textem (reálný případ: `seo-audit-co-kontrolovat`
 * má 2× „Kde si nechat udělat audit") by jinak dostaly stejné `id`, což je
 * nevalidní HTML a `getElementById` by vracel jen první z nich.
 * Druhý a další výskyt dostane příponu `-2`, `-3`, …
 *
 * Obě strany (id i ToC) musí procházet nadpisy ve stejném pořadí a přes
 * stejnou instanci logiky, jinak se číslování rozejde.
 */
export function createHeadingSlugger() {
  const seen = new Map();
  return function next(text) {
    const base = slugifyHeading(text) || "sekce";
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };
}
