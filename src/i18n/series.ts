/**
 * Série článků — PŘEKLADOVÁ DATA (fork přeloží slugy, titulky, popisy).
 *
 * Série = ručně seřazená „mini-kurzová“ cesta existujícími články
 * (na rozdíl od tagů, které jsou automatický výpis tématu). Členství
 * se odvozuje ze slugů v `parts` — žádný frontmatter navíc; článek
 * může být max. v jedné sérii (první nalezená vyhrává).
 *
 * Generuje: landing /serie/<slug>/, SeriesNav box na článcích
 * (díl X z N + předchozí/další) a promo banner na tag stránce
 * s odpovídajícím `promoTag`.
 */

export interface Series {
  /** Stabilní id (nepřekládat — interní klíč). */
  id: string;
  /** URL slug: /serie/<slug>/ */
  slug: string;
  /** Název série — H1 a SeriesNav box. */
  title: string;
  /**
   * Titulek pro výsledky vyhledávání (≤ 60 znaků). Když chybí, použije se `title`.
   * Odděleno proto, že H1 smí být delší a popisnější než to, co Google zobrazí.
   */
  seoTitle?: string;
  /** Krátký název do breadcrumb / promo chipů. */
  shortTitle: string;
  /** Meta description + lead landing stránky (70–160 znaků pro meta). */
  description: string;
  /** Delší úvod na landing stránce (1–2 věty nad rámec description). */
  intro: string;
  /** Krátká odpověď 40–60 slov — citovatelný blok pod H1. */
  answer?: string;
  /** Otázky a odpovědi pod seznamem dílů. Odpověď smí nést mini markdown. */
  faq?: { q: string; a: string }[];
  /** Tabulka platforem — jediná e-shopová tabulka na webu (kotva v šabloně). */
  platforms?: {
    title: string;
    lead: string;
    head: string[];
    rows: string[][];
    note?: string;
  };
  /** Související články mimo sérii, ve skupinách. */
  related?: {
    title: string;
    lead: string;
    groups: { title: string; links: { href: string; label: string }[] }[];
  };
  /** Konverzní blok pod obsahem. */
  cta?: { title: string; lead: string; button: string; href: string; soft?: { href: string; label: string } };
  /** Slugy článků V POŘADÍ dílů. Slug musí existovat v articles collection. */
  parts: { slug: string; note: string }[];
  /** Připravované díly (zadané bloggerovi, zatím nevydané). */
  planned: string[];
  /** Tag id (z i18n/tags.ts), na jehož stránce se zobrazí promo série. */
  promoTag?: string;
}

export const SERIES_BASE = "/serie/";

export const SERIES: Series[] = [
  {
    id: "eshopy",
    slug: "ai-seo-pro-eshopy",
    title: "SEO pro e-shop v éře AI: série o deseti dílech",
    seoTitle: "SEO optimalizace e-shopu v éře AI: série 10 dílů",
    shortTitle: "SEO pro e-shop v éře AI",
    description:
      "Deset dílů pro e-shopy: produktové stránky, kategorie, ceny, strukturovaná data, Shoptet a Upgates, recenze, feed s GTIN, nákupní agenti a reálná čísla.",
    intro:
      "Díly na sebe navazují jako kurz — začněte prvním a projděte je popořadě. Každý díl je samostatný článek s konkrétním postupem.",
    answer:
      "SEO pro e-shop v éře AI znamená připravit produktové stránky, kategorie a produktová data tak, aby je uměl přečíst a doporučit Google (režim AI, Přehled od AI), ChatGPT i Seznam Asistent. Přehled od AI se v Česku zobrazuje u 19,6 % dotazů a z nástrojů AI přichází e-shopům zhruba 0,6 % objednávek, u nejlepších až 5 %.",
    parts: [
      {
        slug: "seo-pro-eshopy-ai-era-2026",
        note: "Kontext na začátek: co se pro e-shopy mění, kolik to stojí a kde začít.",
      },
      {
        slug: "produktove-stranky-pro-ai",
        note: "Jádro e-shopu: jak upravit detail produktu, aby ho AI umělo přečíst a doporučit.",
      },
      {
        slug: "kategorie-texty-pro-ai",
        note: "Kategorie jako odpověď na otázku „jaký X vybrat“ — texty, které AI cituje.",
      },
      {
        slug: "ceny-na-webu-a-ai",
        note: "Proč „cena na dotaz“ škodí a jak dát srozumitelný cenový signál.",
      },
      {
        slug: "strukturovana-data-pro-ai",
        note: "Product, Offer a další typy JSON-LD s doloženou funkcí u Googlu — odznaky za FAQ skončily 7. 5. 2026.",
      },
      {
        slug: "ai-seo-upgates-shoptet",
        note: "Shoptet změřený na 47 e-shopech, Upgates postup k vlastnímu ověření — co platforma umí sama a co doplnit.",
      },
      {
        slug: "ai-nakupni-agenti",
        note: "Agentní nakupování už běží: Zboží.cz ho testuje od 31. 8. 2026, ChatGPT posílá nákup na web obchodníka. Která produktová data rozhodnou.",
      },
      {
        slug: "case-study-megadetail-ai-navstevnost",
        note: "Reálná čísla z e-shopu MEGA DETAIL za dvanáct měsíců: objemy, konverze a podíl ChatGPT.",
      },
      {
        slug: "recenze-a-hodnoceni-pro-ai",
        note: "Jediný text na produktu, který nenapsal prodejce — jak ho sbírat a označit.",
      },
      {
        slug: "produktovy-feed-gtin",
        note: "Datová vrstva pod tím vším: identifikátory a shoda feedu se stránkou.",
      },
    ],
    faq: [
      {
        q: "Co udělat na Shoptetu nebo Upgates tento měsíc?",
        a: "Na Shoptetu zkontrolujte strukturovaná data u produktů a nastavení robots.txt — obojí jde z administrace a obojí jsme [změřili na 47 e-shopech](/blog/ai-seo-upgates-shoptet/). Na Upgates postup ověřte sami, změřená data pro něj nemáme.",
      },
      {
        q: "Potřebuje český e-shop produktový feed pro ChatGPT?",
        a: "Zatím ne jako prioritu. Feed je volitelný a samotné nakupování v ChatGPT běží jen v USA (stav k 9/2026). Pro český e-shop dnes rozhodují strukturovaná data, recenze a indexace v Bingu — rozpad má [díl o feedu a GTIN](/blog/produktovy-feed-gtin/).",
      },
      {
        q: "Zobrazuje Google produkty z Merchant Center v Přehledu od AI?",
        a: "Google ve svém průvodci (akt. 10. 7. 2026) uvádí, že feedy z Merchant Center mohou viditelnosti produktů v odpovědích AI pomoci. Strukturovaná data podmínkou nejsou, ale Product a Merchant listing mají doloženou funkci v klasických výsledcích. Detail v [dílu o strukturovaných datech](/blog/strukturovana-data-pro-ai/).",
      },
      {
        q: "Kolik objednávek posílá e-shopům AI?",
        a: "Zhruba **0,6 %**, u nejlepších e-shopů až 5 % — z průzkumu Marketing Mineru mezi jeho uživateli a publikem (6.–29. 7. 2026, n = 871). Není to reprezentativní vzorek českých e-shopů. Vlastní měření za dvanáct měsíců má [případová studie](/blog/case-study-megadetail-ai-navstevnost/).",
      },
      {
        q: "Nakoupí za mě AI?",
        a: "V Česku zatím ne. Zboží.cz agentní nakupování testuje od 31. 8. 2026, ChatGPT posílá nákup zpátky na web obchodníka a Perplexity má placení jen v USA. Stav podle platforem má [díl o nákupních agentech](/blog/ai-nakupni-agenti/).",
      },
      {
        q: "Jak zjistím, jestli AI můj e-shop doporučuje?",
        a: "Ručním testem za hodinu — [hotové dotazy a tabulka na zápis](/blog/test-viditelnosti-v-ai/). Ptejte se opakovaně a v anonymním okně, odpovědi se mění. Co z toho číst dál, vysvětluje [AI viditelnost](/ai-viditelnost/).",
      },
    ],
    platforms: {
      title: "Kde může být e-shop v AI vidět",
      lead: "Stav k září 2026. Nakupování přímo v nástroji je zatím skoro všude mimo Česko — pro český e-shop proto rozhodují data, ne integrace.",
      head: ["Platforma", "Nakupování a agenti", "Co k tomu e-shop potřebuje"],
      rows: [
        [
          "**Google** — režim AI, Přehled od AI",
          "Universal Cart v USA od léta 2026, Kanada a Austrálie v dalších měsících (blog.google, 19. 5. 2026)",
          "feed v Merchant Center, Product a Offer s cenou a dostupností",
        ],
        [
          "**ChatGPT**",
          "nákup se od 24. 3. 2026 odehrává na webu obchodníka; vlastní pokladna jen v USA",
          "indexace přes Bing, čitelná produktová stránka, recenze",
        ],
        [
          "**Seznam Asistent**",
          "Zboží.cz testuje agentní nakupování od 31. 8. 2026 — jediná česká platforma s reálným testem",
          "zastoupení na Zboží.cz a ve Firmy.cz, aktuální ceny a dostupnost",
        ],
        [
          "**Perplexity**",
          "Instant Buy s PayPalem jen v USA (11/2025)",
          "dostupnost pro PerplexityBot, doložená fakta na stránce",
        ],
        [
          "**Ostatní asistenti** — Gemini, Claude, Copilot",
          "jen citace, žádný nákup",
          "přístup pro roboty a srozumitelná produktová data",
        ],
      ],
      note: "Strukturovaná data nejsou pro generativní funkce Googlu vyžadována; Product a Merchant listing mají doloženou funkci v klasických výsledcích (changelog 7. 7. 2026). Neberte je jako páku na Přehled od AI.",
    },
    related: {
      title: "Související články mimo sérii",
      lead: "Série pokrývá cestu od začátku do konce. Tyhle články jdou do hloubky u jednotlivých témat.",
      groups: [
        {
          title: "Shoptet a Upgates v praxi",
          links: [
            { href: "/blog/shoptet-robots-txt-ai-roboti/", label: "Robots.txt na Shoptetu" },
            { href: "/blog/shoptet-strukturovana-data-mereni/", label: "Strukturovaná data na Shoptetu — měření" },
            { href: "/blog/shoptet-produktova-pole-google/", label: "Produktová pole pro Google" },
            { href: "/blog/shoptet-filtry-strankovani/", label: "Filtry a stránkování" },
            { href: "/blog/shoptet-blog-clanky-data/", label: "Data u blogových článků" },
          ],
        },
        {
          title: "Novější mimo sérii",
          links: [
            { href: "/blog/nakupovani-pres-ai/", label: "Nakupování přes AI" },
            { href: "/blog/filtry-faceted-navigace-eshopu/", label: "Filtry a faceted navigace" },
            { href: "/blog/strukturovana-data-kategorie-eshopu/", label: "Strukturovaná data u kategorií" },
            { href: "/blog/tema/eshopy/", label: "Všechny články o e-shopech →" },
          ],
        },
      ],
    },
    cta: {
      title: "Chcete vědět, jak je na tom váš e-shop?",
      lead: "**AI SEO audit od Sniper Design za 3 600 Kč bez DPH** projde produktové stránky, kategorie i produktová data a dá vám prioritní seznam úprav. Výstup do pěti pracovních dní. Dlouhodobou spolupráci řeší [služby agentury](/sluzby/).",
      button: "Objednat audit e-shopu",
      href: "/audit/",
      soft: { href: "/blog/test-viditelnosti-v-ai/", label: "Nebo si nejdřív udělejte test viditelnosti zdarma" },
    },
    planned: [],
    promoTag: "eshopy",
  },
];

/** Najde sérii a pozici dílu podle slugu článku (null = článek v žádné sérii). */
export function findSeriesPart(slug: string): { series: Series; index: number } | null {
  for (const s of SERIES) {
    const i = s.parts.findIndex((p) => p.slug === slug);
    if (i !== -1) return { series: s, index: i };
  }
  return null;
}

/** Série promovaná na tag stránce daného tag id. */
export function seriesForTag(tagId: string): Series | null {
  return SERIES.find((s) => s.promoTag === tagId) ?? null;
}
