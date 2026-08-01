import { visit } from "unist-util-visit";
import { createHeadingSlugger } from "./heading-slug.mjs";

/**
 * Rehype plugin: přepíše `id` nadpisů z markdownu na kanonický ASCII slug.
 *
 * Astro nadpisům přiděluje `id` vlastním sluggerem, který zachovává diakritiku
 * (`id="co-google-15-května-2026-vydal"`). Obsah článku („na této stránce")
 * ale staví odkazy přes `slugifyHeading()` v ASCII. Tenhle plugin ten rozpor
 * ruší tím, že obě strany používají tutéž funkci — viz `heading-slug.mjs`.
 *
 * Proč to nestačí řešit klientským skriptem (což web dělal do 2026-08-01):
 * prohlížeč vyhodnotí fragment v URL při načtení dokumentu, tedy dřív, než
 * jakýkoli skript `id` přepíše. Sdílený odkaz na sekci proto nikam neodscrolloval.
 * Správné `id` musí být rovnou ve statickém HTML — kvůli sdíleným odkazům,
 * kvůli návštěvám bez JS a kvůli robotům, kteří HTML jen čtou.
 *
 * Nadpisy vykreslené komponentami (Insight, Mistake, Checklist…) sem nespadají:
 * v téhle fázi jsou v AST ještě jako JSX elementy, ne jako `<h3>`. Plugin proto
 * vidí přesně a jen nadpisy z markdownu — tedy tytéž, které jde vypsat do obsahu.
 */
export default function rehypeHeadingIds() {
  return (tree) => {
    const slug = createHeadingSlugger();

    visit(tree, "element", (node, _index, parent) => {
      if (!/^h[2-6]$/.test(node.tagName)) return;

      /**
       * Jen nadpisy na nejvyšší úrovni dokumentu — tedy ty, které v markdownu
       * vznikly z řádku začínajícího `## `. Nadpis vnořený v citaci
       * (`> ### Další poznámky`) je ukázka uvnitř textu, ne sekce článku;
       * obsah ho nevypisuje, takže ho nesmí započítat ani tahle strana.
       *
       * Kdyby se počítal, ubíral by z čítače duplicit: reálný nadpis se
       * shodným textem by pak dostal `-2`, zatímco obsah by odkazoval na
       * základní tvar — a byli bychom zpátky u rozjeté slugifikace.
       * Reálný případ: `pasazova-optimalizace-obsahu` používá dva takové
       * nadpisy v citacích jako příklad špatné a dobré formulace.
       */
      if (parent !== tree) return;

      const text = toText(node);
      if (!text) return;

      node.properties = node.properties || {};
      node.properties.id = slug(text);
    });
  };
}

/** Textový obsah nadpisu včetně vnořených elementů (<strong>, <span>, <code>). */
function toText(node) {
  if (node.type === "text") return node.value;
  if (!node.children) return "";
  return node.children.map(toText).join("");
}
