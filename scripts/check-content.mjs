/**
 * Kontrola obsahu před buildem — chytá chyby v použití komponent, které
 * `astro check` neodhalí (typově je vše v pořádku, rozbije se až vzhled).
 *
 * Proč vznikl: 7 článků použilo <Mistake> bez obalu <MistakeGrid>. Karty se
 * pak vykreslí jako jeden sloupec přes celou šířku místo mřížky 1 → 2 → 3.
 * Build prošel, chyby si všiml až uživatel na živém webu (2026-08-03).
 *
 * Spouští se z `npm run build`. Při nálezu skončí nenulovým kódem.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const CONTENT_DIRS = [
  "src/content/articles",
  "src/content/sections",
  "src/content/pillar",
];

/** Komponenty, které musí být obalené v konkrétním rodiči. */
const REQUIRED_WRAPPERS = [
  { child: "Mistake", parent: "MistakeGrid" },
  { child: "Persona", parent: "PersonaGrid" },
];

/**
 * Maximální délka titulku, který jde do výsledku vyhledávání.
 * Přes ~60 znaků Google titulek ořízne a čtenář neuvidí konec — u článku
 * `mereni-seo-vykonu-2026` (90 znaků) se utnul přesně na části, která
 * slibovala nástroje. Do SERPu jde `seoTitle`, a když chybí, tak `title`.
 * Naměřeno 7. 9. 2026: 6 ze 162 článků bylo nad limitem.
 */
const SERP_TITLE_MAX = 60;

const problems = [];

for (const dir of CONTENT_DIRS) {
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    continue; // adresář nemusí existovat ve všech mutacích
  }

  for (const file of files) {
    const path = join(dir, file);
    const text = readFileSync(path, "utf8");

    // Titulek pro SERP — `seoTitle` má přednost, jinak `title`.
    const fm = text.split("---")[1] ?? "";
    const serpTitle =
      /^seoTitle: "(.*?)"$/m.exec(fm)?.[1] ?? /^title: "(.*?)"$/m.exec(fm)?.[1];
    if (serpTitle && serpTitle.length > SERP_TITLE_MAX) {
      problems.push(
        `${path}: titulek pro SERP má ${serpTitle.length} znaků (max ${SERP_TITLE_MAX}) — Google ho ořízne`,
      );
    }

    for (const { child, parent } of REQUIRED_WRAPPERS) {
      // `<Mistake ` ano, `<MistakeGrid` ne — hranice na mezeře nebo `/>`
      const uses = new RegExp(`<${child}[\\s/>]`).test(text);
      if (uses && !text.includes(`<${parent}`)) {
        problems.push(`${path}: <${child}> bez obalu <${parent}>`);
      }
    }
  }
}

if (problems.length > 0) {
  console.error(`\n✗ Kontrola obsahu našla ${problems.length} problém(ů):\n`);
  for (const p of problems) console.error(`  ${p}`);
  console.error(
    "\nKarty bez obalu se vykreslí přes celou šířku místo v mřížce.\n" +
      "Obal je popsaný v docs/section-page-standard.md.\n",
  );
  process.exit(1);
}

console.log("✓ Kontrola obsahu: bez nálezů");
