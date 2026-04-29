# aiseo-optimalizace.cz

Edukativní obsahový web vysvětlující 4 zkratky AI éry vyhledávání: **SEO**, **GEO**, **AEO**, **AIO** — jejich rozdíly, kdy kterou techniku použít, a praktické postupy pro web nebo e-shop.

## Tech stack

- **Astro 5** (static output, žádný runtime server)
- **Tailwind CSS 4** přes `@tailwindcss/vite`
- **MDX** pro pillar a sekční obsah
- **Content Collections** pro typovaný content layer
- **Sitemap** přes `@astrojs/sitemap`
- TypeScript strict
- Node 20

## Vývoj

```bash
npm install
npm run dev      # dev server na http://localhost:4321
npm run build    # produkční build do ./dist
npm run preview  # preview produkčního buildu
npm run check    # astro check (TypeScript + content schema)
```

## Struktura

```
.
├── _source/              # Source materiály (draft pillar, mind-map)
├── public/               # Statické assety (robots.txt, ikonky, og)
├── src/
│   ├── components/       # Astro komponenty (Header, Footer, …)
│   ├── content/          # Content collections (pillar, sekce)
│   ├── layouts/          # BaseLayout s SEO + JSON-LD
│   ├── pages/            # Routes (index, /seo, /geo, /aeo, /aio, …)
│   └── styles/           # global.css (Tailwind + design tokens)
├── astro.config.mjs
├── tailwind.config.* — není (Tailwind v4 čte z CSS)
└── tsconfig.json
```

## Deploy

Deploy běží přes GitHub Actions na sdílenou Forpsi VPS (`80.211.223.175`). Detaily v `CLAUDE.md`.
Manuální fallback: `npm run build` + rsync `dist/` na `aiseo-optimalizace-vps:/srv/apps/aiseo-optimalizace/releases/$REL/dist/`.

## Konvence

- **AI-first content:** každý článek má answer block (40–60 slov) hned po H1, FAQ s `FAQPage` schema, fact-density.
- **Strict TypeScript** — žádné `any` mimo declarations, content collections mají Zod schema.
- **Žádné secrets v repo** — runtime env z VPS `shared/.env` (build-time přes GH Secrets).
- **macOS Finder `Icon` resource fork** je v `.gitignore` (runbook §9).
