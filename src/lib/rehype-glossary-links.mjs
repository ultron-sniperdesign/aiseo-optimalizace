/**
 * Rehype plugin: automaticky prolinkuje PRVNÍ výskyt slovníkového pojmu
 * v MDX obsahu na /slovnik/<id>/ (wikipedizace obsahu).
 *
 * Pravidla:
 * - max. 1 odkaz na pojem na stránku (první výskyt v běžném textu),
 * - přeskakuje nadpisy (h1–h6), existující odkazy, code/pre, script/style,
 * - pojem, na který už stránka odkazuje ručně (kamkoli do /slovnik/<id>),
 *   se auto-linkem neduplikuje,
 * - hranice slova: pojem nesmí být částí delšího slova (SEO ≠ SEOptimal),
 *   české skloňovací přípony neřešíme — proto jen neskloňované výrazy
 *   (viz src/i18n/glossary-autolink.mjs).
 * - vytvořený odkaz má class "gl-autolink" (jemný tečkovaný styl v global.css).
 */
import { GLOSSARY_LINKS, GLOSSARY_BASE } from "../i18n/glossary-autolink.mjs";

const SKIP_TAGS = new Set(["a", "h1", "h2", "h3", "h4", "h5", "h6", "code", "pre", "script", "style"]);

/** Znak, který smí sousedit s pojmem (hranice „slova" i pro výrazy s tečkou/pomlčkou). */
const isBoundary = (ch) => ch === undefined || !/[\p{L}\p{N}]/u.test(ch);

export default function rehypeGlossaryLinks() {
  return (tree) => {
    // 1) posbírat existující odkazy na hesla (ruční linky mají přednost)
    const linked = new Set();
    const collect = (node) => {
      if (node.type === "element" && node.tagName === "a") {
        const href = String(node.properties?.href ?? "");
        for (const { slug } of GLOSSARY_LINKS) {
          if (href.includes(`${GLOSSARY_BASE}${slug}`) || href.endsWith(`#${slug}`)) linked.add(slug);
        }
      }
      (node.children ?? []).forEach(collect);
    };
    collect(tree);

    // 2) projít textové uzly a nalinkovat první výskyty
    const walk = (node) => {
      if (node.type === "element" && SKIP_TAGS.has(node.tagName)) return;
      const children = node.children;
      if (!children) return;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type === "element") {
          walk(child);
          continue;
        }
        if (child.type !== "text") continue;

        const value = child.value;
        // najdi nejlevnější (nejdřívější) dosud nenalinkovaný pojem v tomto uzlu
        let best = null;
        for (const { pattern, slug } of GLOSSARY_LINKS) {
          if (linked.has(slug)) continue;
          let from = 0;
          while (true) {
            const idx = value.indexOf(pattern, from);
            if (idx === -1) break;
            if (isBoundary(value[idx - 1]) && isBoundary(value[idx + pattern.length])) {
              if (!best || idx < best.idx || (idx === best.idx && pattern.length > best.pattern.length)) {
                best = { idx, pattern, slug };
              }
              break;
            }
            from = idx + 1;
          }
        }
        if (!best) continue;

        const { idx, pattern, slug } = best;
        linked.add(slug);
        const before = value.slice(0, idx);
        const after = value.slice(idx + pattern.length);
        const linkNode = {
          type: "element",
          tagName: "a",
          properties: { href: `${GLOSSARY_BASE}${slug}/`, className: ["gl-autolink"] },
          children: [{ type: "text", value: pattern }],
        };
        const replacement = [];
        if (before) replacement.push({ type: "text", value: before });
        replacement.push(linkNode);
        if (after) replacement.push({ type: "text", value: after });
        children.splice(i, 1, ...replacement);
        // pokračuj za vloženým odkazem (v `after` může být další pojem)
        i += replacement.length - 2;
      }
    };
    walk(tree);
  };
}
