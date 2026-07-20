/**
 * Datový modul — blog listing /blog/.
 *
 * Obsahová část stránky (title/description, hero texty, answer block, FAQ) —
 * dříve inline v `src/pages/blog/index.astro`. Template stránku jen renderuje;
 * dynamika (počty článků, kategorie, tagy, reading time) zůstává v template.
 *
 * `heroTitleHtml` / `heroLeadHtml` se renderují přes set:html (obsahují
 * <span class="hl">, <strong>, &nbsp;) → byte-identický výstup. FAQ `a` je
 * plain text (JSON-LD acceptedAnswer nesmí mít markup).
 *
 * Mutace: fork má vlastní kopii tohoto souboru s přeloženým obsahem.
 */

import type { PageMeta, FaqItem } from "~/content/pages/_types";

export const meta: PageMeta = {
  title: "AI SEO blog: praktické články o SEO, GEO, AEO a AIO",
  description:
    "Tutoriály, analýzy a defenzivní průvodce AI SEO pro český trh — SEO, GEO, AEO i AIO. Nový článek pravidelně.",
  ogImage: "/og/blog.jpg",
};

/** Hero H1 — set:html (hl zvýraznění + nbsp). */
export const heroTitleHtml = '<span class="hl">Aktuální obsah</span> o AI&nbsp;vyhledávání';

/** Hero lead — set:html (strong + non-breaking hyphen). */
export const heroLeadHtml =
  "Tutoriály, analýzy a defenzivní průvodce pro provozovatele webů a e&#8209;shopů, kteří chtějí být <strong>citováni v ChatGPT, Perplexity i v Google AI Overviews</strong>. Nový článek pravidelně, bez vaty.";

/** Answer block — 40–60 slov, definice 'Blog je…' pro AI scrapery + lidské. */
export const answerText =
  "Blog aiseo-optimalizace.cz je sbírka praktických tutoriálů, analýz a defenzivních průvodců pro AI éru vyhledávání. Každý článek je strukturovaný pro citovatelnost v ChatGPT, Perplexity i Google AI Overviews — answer block, FAQPage schema, 3+ konkrétní fakta na 100 slov. Pro provozovatele webů, e-shopů a marketéry, kteří chtějí, aby AI engine jejich obsah citoval, ne přeskočil.";

/** FAQ — 6 reálných otázek o blogu (zdroje pro AI scrapery + lidské čtenáře). */
export const faq: FaqItem[] = [
  {
    q: "Co na blogu najdu?",
    a: "Praktické tutoriály (postupy krok za krokem), analýzy (rozbor trendů a změn) a defenzivní průvodce (jak se vypořádat s problémy typu zero-click éra Google AI Overviews). Každý článek má 1 700–3 000 slov, schema markup (Article + FAQPage + případně HowTo) a fact-density 3+ konkrétní fakta na 100 slov. Cíleno na provozovatele webů, e-shopů a marketéry.",
  },
  {
    q: "Jak často vychází nový článek?",
    a: "Aktuálně vychází několik nových článků týdně (v červnu a červenci 2026 průměrně 4–6 týdně). Datum prvního publikování i poslední aktualizace každého článku je viditelně zobrazené v hlavičce; články průběžně aktualizujeme, aby data zůstávala aktuální (datový refresh, fix broken linků, screenshot updaty).",
  },
  {
    q: "Pro koho je obsah určený?",
    a: "Pro tři typy čtenářů: (1) provozovatelé webů a e-shopů, kteří chtějí, aby je AI engine citoval místo přeskočil; (2) marketéři a SEO specialisté hledající aktuální postupy pro AI éru; (3) developery a content stratégy, kteří implementují schema markup, FAQPage a HowTo strukturu. Texty jsou v češtině, s důrazem na CZ trh (Seznam, GBP, ceny v Kč).",
  },
  {
    q: "Jaký je rozdíl mezi blogem a hlavním průvodcem na webu?",
    a: "Hlavní průvodce (/seo-vs-geo-vs-aeo-vs-aio/) je pillar content ~3 000 slov, který drží přehled napříč 4 disciplínami SEO/GEO/AEO/AIO. Sekce /seo/, /geo/, /aeo/ a /aio/ jsou hub-and-spoke clusters s konceptuálním rozborem každé disciplíny. Blog je sbírka samostatných tutoriálů a analýz, které jdou do hloubky konkrétních problémů (audit, nástroje, local SEO, měření, strukturování pillar contentu).",
  },
  {
    q: "Mohu se přihlásit k odběru nových článků?",
    a: "Ano — web má RSS feed na adrese /rss.xml (odkaz najdete i v patičce), který obsahuje všechny články řazené od nejnovějších. E-mailový newsletter zatím neposíláme; pokud chcete obsah e-mailem, stáhněte si návod zdarma na /navod-zdarma/ — na stejný kontakt pošleme i zásadní novinky.",
  },
  {
    q: "Můžu některý článek použít ve své práci, citovat nebo přeložit?",
    a: "Ano, s atribucí. Citace v rámci 'fair use' (krátké citace s odkazem na zdroj) je vítaná a podpoří GEO/AEO scénáře, na které sami v článcích cílíme. Pro celkové překlady, embedování v komerčních produktech nebo PDF distribuci napište na kontakt přes Sniper Design — jsme open to spolupráci.",
  },
];
