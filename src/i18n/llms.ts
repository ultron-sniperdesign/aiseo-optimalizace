/**
 * Texty pro generovaný /llms.txt — PŘEKLADOVÁ DATA (fork přeloží).
 *
 * Samotný soubor generuje endpoint `src/pages/llms.txt.ts` při buildu
 * z content collections (články/sekce/pillar) + registrů (tagy, série) —
 * díky tomu nikdy nezastará. Tady jsou jen ručně psané části: preambule,
 * popisy hubů/produktů a nadpisy sekcí.
 */

export const llms = {
  /** H1 titulek souboru. */
  title: "AI SEO Optimalizace",
  /** Blockquote souhrn webu (1–3 věty). */
  summary:
    "Český edukativní web o AI éře vyhledávání: SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), AIO (AI Optimization) a Google AI Mode. Praktické postupy pro e-shopy a firemní weby, jak zvýšit AI viditelnost — být citovaný v ChatGPT, Perplexity, Google AI Overviews i AI Mode.",
  /** Volný odstavec pod souhrnem (provozovatel, model webu). */
  about:
    "Web aiseo-optimalizace.cz provozuje agentura Sniper Design (CPU s.r.o., Praha) — Zlatý partner Upgates od 2016. Obsah kombinuje edukativní průvodce zdarma s komerčními službami: free PDF návod, placený AI SEO Wireframe Pack a AI SEO audit. Autorem obsahu je Kamil ze Sniper Design; jak obsah vzniká, popisuje stránka autora.",

  /** Nadpisy sekcí souboru. */
  sections: {
    start: "Kde začít",
    pillar: "Hlavní průvodce (pillar)",
    disciplines: "Disciplíny (sekce)",
    reference: "Referenční stránky",
    series: "Série článků",
    topics: "Témata blogu",
    articles: "Všechny články",
    products: "Služby a produkty",
    optional: "Optional",
  },

  /** Kurátorované statické položky (huby, produkty) — popisy ručně. */
  start: [
    {
      path: "/zacnete-tady/",
      label: "Začněte tady",
      desc: "Vstupní stránka pro nováčky — kurátorovaná cesta ve 3 fázích (Pochopit → Zavést → Měřit) s doporučeným pořadím čtení.",
    },
  ],
  reference: [
    {
      path: "/slovnik/",
      label: "Slovník pojmů AI éry vyhledávání",
      desc: "46+ definic (40–60 slov, citovatelné samostatně) s kotvami — AI Mode, AI Overviews, GEO, AEO, LLM, RAG, query fan-out a další.",
    },
    {
      path: "/ai-viditelnost/",
      label: "200 000 zobrazení v generativní AI — reálná data",
      desc: "Case study s reálnými screenshoty ze Search Console: co znamená beta report Funkce s generativní AI a čeho jde dosáhnout.",
    },
    {
      path: "/autor/kamil/",
      label: "Autor obsahu — Kamil ze Sniper Design",
      desc: "Kdo obsah píše, jak vzniká a jaká je za ním praxe (weby a e-shopy od 2016).",
    },
  ],
  products: [
    {
      path: "/navod-zdarma/",
      label: "Návod zdarma (PDF)",
      desc: "6 stran — jak upravit homepage pro AI vyhledávání. Výměnou za e-mail.",
    },
    {
      path: "/pack/",
      label: "AI SEO Wireframe Pack (1 490 Kč)",
      desc: "Wireframy a šablony pro 7 typů stránek webu + aplikační návod. 9 PDF + master 85 stran.",
    },
    {
      path: "/audit/",
      label: "AI SEO audit",
      desc: "Změříme viditelnost webu v AI odpovědích a navrhneme prioritní kroky.",
    },
    {
      path: "/sluzby/",
      label: "Všechny služby",
      desc: "Přehled spolupráce: DIY podklady, audit, průběžná optimalizace.",
    },
  ],
  optional: [
    { path: "/kontakt/", label: "Kontakt", desc: "Tři cesty spolupráce se Sniper Design." },
    { path: "/rss.xml", label: "RSS feed", desc: "Všechny články, řazené od nejnovějších." },
  ],
};
