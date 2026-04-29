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
  integrations: [mdx(), sitemap()],
  vite: {
    // Cast: @tailwindcss/vite a astro/vite mohou mít odlišný Plugin<any> typ
    // (různé verze vite v node_modules). Funkčně to ale sedí, jen TS to neví.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
