/**
 * Datový modul /zacnete-tady/ — vstupní hub pro nováčky.
 *
 * Kurátorovaná cesta webem ve 3 fázích (Pochopit → Zavést → Měřit):
 * na rozdíl od tag stránek (automatický výpis tématu) tady držíme ruční
 * výběr a POŘADÍ. Když vyjde lepší článek na dané téma, vyměň krok zde.
 * Fork přeloží texty; href nechává dle vlastních slugů.
 */

export const meta = {
  title: "Začněte tady: jak na AI SEO krok za krokem",
  description:
    "Nevíte, kde s AI SEO začít? Kurátorovaná cesta ve třech fázích — pochopit disciplíny, zavést změny na webu a změřit výsledky. Bez balastu, česky.",
};

export const hero = {
  eyebrow: "Začněte tady",
  title: "Jak na AI SEO — cesta pro ty, kdo začínají",
  lead: "Na webu máme přes 160 článků, 8 sekcí a slovník. Tahle stránka vám řekne, co číst v jakém pořadí — podle toho, kde právě jste. Za tři fáze projdete od „co to vůbec je“ k měřitelným výsledkům.",
  /** Krátká odpověď 40–60 slov — citovatelný blok pro AI. */
  answer:
    "AI SEO je optimalizace webu pro AI éru vyhledávání: klasické SEO základy doplněné o citovatelnost v ChatGPT, Perplexity, Gemini a ve funkcích Googlu s generativní AI. Začíná se pochopením disciplín (SEO, GEO, AEO, AIO), pokračuje úpravami obsahu a technického stavu webu a končí měřením v Search Console a GA4.",
};

export interface HubStep {
  href: string;
  label: string;
  /** Jedna věta: proč tenhle krok a co z něj mít. */
  why: string;
}

export interface HubPhase {
  /** Číslo fáze (1–3) — zobrazí se v badge. */
  num: string;
  title: string;
  /** Jedna věta shrnující cíl fáze — jde i do HowTo JSON-LD. */
  goal: string;
  steps: HubStep[];
}

export const phases: HubPhase[] = [
  {
    num: "1",
    title: "Pochopit",
    goal: "Získejte mapu terénu: co jednotlivé disciplíny znamenají, jak se liší a proč se vyhledávání právě teď mění.",
    steps: [
      {
        href: "/seo-vs-geo-vs-aeo-vs-aio/",
        label: "Hlavní průvodce: SEO vs. GEO vs. AEO vs. AIO",
        why: "Celá mapa na jednom místě za ~12 minut — po přečtení víte, o čem zbytek webu mluví.",
      },
      {
        href: "/ai-mode/",
        label: "Google AI Mode",
        why: "Nejnovější vrstva Googlu: konverzační vyhledávání a query fan-out. V Česku právě přichází.",
      },
      {
        href: "/blog/zero-click-ai/",
        label: "Zero-click éra",
        why: "Proč klesají prokliky, i když viditelnost roste — kontext, bez kterého čísla nedávají smysl.",
      },
      {
        href: "/slovnik/",
        label: "Slovník pojmů",
        why: "Nechte si ho otevřený vedle — každý pojem z článků v něm má krátkou definici s kotvou.",
      },
    ],
  },
  {
    num: "2",
    title: "Zavést",
    goal: "Upravte web: zjistěte výchozí stav auditem a pak postupně nasaďte citovatelný obsah, strukturovaná data a přístup pro AI crawlery.",
    steps: [
      {
        href: "/prakticky-postup/",
        label: "Praktický postup",
        why: "Metodika krok za krokem — v jakém pořadí web upravovat, ať neděláte věci dvakrát.",
      },
      {
        href: "/blog/seo-audit-co-kontrolovat/",
        label: "Audit: co kontrolovat",
        why: "Než začnete měnit, změřte výchozí stav. Checklist oblastí, které rozhodují.",
      },
      {
        href: "/blog/ai-seo-content/",
        label: "Citovatelný obsah",
        why: "Čtyři principy, díky kterým AI váš text cituje místo přeskočí — základ všeho dalšího.",
      },
      {
        href: "/blog/strukturovana-data-pro-ai/",
        label: "Strukturovaná data",
        why: "JSON-LD, kterým webu „vysvětlíte“, kdo jste a o čem stránky jsou.",
      },
      {
        href: "/blog/ai-crawler-robots-txt/",
        label: "Robots.txt pro AI roboty",
        why: "Co není přístupné AI crawlerům, nemůže být citované. Pět minut práce, velký dopad.",
      },
    ],
  },
  {
    num: "3",
    title: "Měřit",
    goal: "Sledujte výsledky: zobrazení v generativních funkcích v Search Console, AI návštěvnost v GA4 a vlastní test viditelnosti.",
    steps: [
      {
        href: "/blog/gsc-ai-segmenty-mereni/",
        label: "Search Console: AI segmenty",
        why: "Beta report „Funkce s generativní AI“ — jediné přímé měřítko zobrazení v AI odpovědích Googlu.",
      },
      {
        href: "/blog/ai-navstevnost-konverze/",
        label: "GA4: AI návštěvnost a konverze",
        why: "Segment pro návštěvy z ChatGPT, Perplexity a spol. — bývá malý objemem, silný konverzí.",
      },
      {
        href: "/blog/test-viditelnosti-v-ai/",
        label: "Test viditelnosti v AI",
        why: "Ruční kontrola: zeptejte se AI nástrojů na svůj obor a zjistěte, koho citují.",
      },
      {
        href: "/blog/case-study-megadetail-ai-navstevnost/",
        label: "Case study: reálná čísla",
        why: "Náš vlastní e-shop jako srovnávací bod — co je normální objem, konverze a co čekat.",
      },
    ],
  },
];

export const roles = {
  title: "Nebo si vyberte cestu podle role",
  lead: "Univerzální cesta nesedí každému. Tři nejčastější situace mají vlastní tematické stránky s vybranými články.",
  items: [
    {
      href: "/blog/tema/eshopy/",
      title: "Mám e-shop",
      desc: "Produktové stránky, kategorie, ceny a nákupní AI agenti.",
    },
    {
      href: "/blog/tema/obsah/",
      title: "Tvořím obsah",
      desc: "Psaní a struktura textů, které AI cituje.",
    },
    {
      href: "/blog/tema/technicke-zaklady/",
      title: "Řeším techniku webu",
      desc: "Crawlery, robots.txt, llms.txt, rychlost a migrace.",
    },
  ],
};

export const cta = {
  title: "Nechcete to řešit sami?",
  lead: "AI SEO audit změří, jak je na tom váš web s viditelností v AI odpovědích dnes, a navrhne priority — dostanete konkrétní plán místo hádání.",
  button: "Chci AI SEO audit",
  href: "/audit/",
};

export const faq = [
  {
    q: "Co je AI SEO a v čem se liší od klasického SEO?",
    a: "AI SEO staví na klasickém SEO (technický stav, obsah, autorita) a přidává novou vrstvu: citovatelnost v AI nástrojích. Cílem už není jen pozice ve výsledcích, ale být zdrojem, ze kterého ChatGPT, Perplexity nebo Google AI Overviews skládají odpověď. Základy se nemění — mění se jednotka optimalizace.",
  },
  {
    q: "Co mám udělat úplně jako první?",
    a: "Přečtěte si hlavní průvodce (~12 minut) a pak si udělejte rychlý test: zeptejte se ChatGPT a Perplexity na svůj obor a podívejte se, koho citují. Ta kombinace — pochopit mapu a znát výchozí stav — je lepší start než jakákoli izolovaná technická úprava.",
  },
  {
    q: "Kolik času zabere s AI SEO začít?",
    a: "Fáze Pochopit je odpoledne čtení. Fáze Zavést závisí na stavu webu — první viditelné úpravy (krátké odpovědi v článcích, strukturovaná data, robots.txt) jsou jednotky hodin až dnů. Výsledky v AI odpovědích se typicky projevují v týdnech až měsících, proto má smysl začít měřit hned.",
  },
  {
    q: "Musím přestat dělat klasické SEO?",
    a: "Ne — právě naopak. AI systémy čerpají z indexu vyhledávačů: co není dohledatelné a indexované, nemůže být citované. Kvalitní klasické SEO je vstupenka; AI SEO na něm staví citovatelným obsahem, důvěryhodnou značkou a měřením nových kanálů.",
  },
  {
    q: "Jak poznám, že to funguje?",
    a: "Třemi měřítky: beta report „Funkce s generativní AI“ v Search Console (zobrazení v AI funkcích Googlu), segment AI návštěvnosti v GA4 (návštěvy z ChatGPT, Perplexity a dalších — sledujte konverze, ne jen objem) a pravidelný ruční test, jestli vás AI nástroje citují na klíčové dotazy oboru.",
  },
  {
    q: "Nemám na to kapacitu — dá se to zadat?",
    a: "Ano. Nejmenší smysluplný krok je AI SEO audit: změříme viditelnost webu v AI odpovědích, projdeme technický stav i obsah a dostanete prioritizovaný plán. Realizaci pak zvládnete interně podle návodů na tomto webu, nebo ji převezmeme my.",
  },
];

/** HowTo JSON-LD — název + kroky skládá šablona z `phases` (goal texty). */
export const howtoName = "Jak začít s AI SEO ve třech fázích";
