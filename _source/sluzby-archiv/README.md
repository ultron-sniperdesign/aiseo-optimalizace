# Archiv popisů služeb (vyřazeno 14. 9. 2026)

Dvanáct MDX souborů z `src/content/services/`, které web nečetl:

- **8 karet** (`ai-asistovane-clanky`, `ai-crawlery-llms-txt`, `audit`, `eeat-autorita`,
  `mereni-ga4`, `platformove-sprinty`, `skoleni-internich-tymu`, `srovnavaci-obsah`) —
  připravené pro výpis služeb, který `/sluzby/` po přestavbě 08/2026 nepoužívá.
- **4 stažené detaily** (`freshness-program`, `geo-obsah-eshopy`, `off-page-pro-ai`,
  `technicka-uprava`) — stránky zrušené 5. 8. 2026, adresy přesměrovává `astro.config.mjs`
  na `/sluzby/`. Obsah odkazoval na neexistující `/sluzby/eeat-autorita/`.

Nabídka dnes žije v `src/content/pages/sluzby.ts` a ve dvou detailech
(`dlouhodobe-seo`, `monitoring-ai`). Soubory tu zůstávají jako podklad, kdyby se
některá služba vracela — **ceny a tvrzení v nich jsou zastaralé** (např. „32,5 %“
citací u srovnávacího obsahu bez zdroje), před použitím je ověř.

Proč vyřazeno: revize `/sluzby/` (audit 5. 9. 2026, položka `P12`).
