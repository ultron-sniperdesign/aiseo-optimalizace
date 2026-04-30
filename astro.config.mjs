// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://aiseo-optimalizace.cz",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  /**
   * Redirects — alias slugs / přeznačené staré URL.
   * - `/seo-a-geo/` → pillar (CZ Suggest říká „seo a geo", ne „seo vs geo")
   */
  redirects: {
    "/seo-a-geo": "/seo-vs-geo-vs-aeo-vs-aio",
  },
  integrations: [
    mdx(),
    sitemap({
      // /seo-a-geo není kanonická URL — vyloučit ze sitemap
      filter: (page) => !page.includes("/seo-a-geo"),
      // Build-time datum jako lastmod pro všechny stránky.
      // Google `lastmod` používá, pokud je konzistentně přesné — přesně to děláme.
      lastmod: new Date(),
    }),
  ],
  vite: {
    // Cast: @tailwindcss/vite a astro/vite mohou mít odlišný Plugin<any> typ
    // (různé verze vite v node_modules). Funkčně to ale sedí, jen TS to neví.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
