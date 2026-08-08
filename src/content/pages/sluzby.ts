/**
 * Datový modul — /sluzby/ (kompletní nabídka SEO pro AI).
 *
 * Zdroj nabídky: sniperdesign.cz/seo-pro-ai (finální ceník 2026-08; ceny
 * sjednocené — audit 3 600 Kč bez DPH). Tento web prezentuje TUTÉŽ nabídku,
 * ale v aiseo tonalitě (žádný „schema.org" jako pojem, „strukturovaná data";
 * „krátká odpověď") a se širším cílením: hotové moduly = Upgates/Shoptet,
 * ostatní platformy na míru.
 *
 * PER-MUTACE: celý soubor se překládá (viz MUTATIONS.md). Ceny v CZK.
 */

export const meta = {
  title: "Služby — kompletní SEO pro AI | aiseo-optimalizace.cz",
  description:
    "Audit za 3 600 Kč, technické moduly s pevnou cenou a citovatelný obsah. Kompletní nabídka SEO pro AI — od prvního auditu po měsíční monitoring citací.",
  ogImage: "/og/default.jpg",
};

export const hero = {
  intro: "Kompletní nabídka od Sniper Design",
  title: 'Ať AI <span class="hl">doporučuje váš web</span>, <strong>ne konkurenci</strong>.',
  lead:
    "Zákazníci se dnes neptají jen Googlu — ptají se ChatGPT, Perplexity a Google AI. Připravíme váš web nebo e-shop tak, aby ho AI uměla přečíst, pochopit a citovat v odpovědích. Tři kroky: audit, technická příprava, citovatelný obsah.",
  chips: ["600+ klientů od 2016", "Zlatý partner Upgates i Shoptet", "Vlastní e-shop MEGA DETAIL"],
};

/** Jak se web dostane do AI odpovědi — 4 kroky (edukativní rámec nad nabídkou). */
export const funnel = {
  eyebrowNum: "01",
  eyebrow: "Jak to funguje",
  title: "Jak se web dostane <strong>do AI odpovědi</strong>",
  lead: "Cesta od zákazníka, který se zeptá AI, k odpovědi, která cituje vás. Čtyři kroky, na kterých záleží.",
  steps: [
    { num: "01", label: "Zákazník se zeptá" },
    { num: "02", label: "AI hledá zdroje" },
    { num: "03", label: "Vybere důvěryhodné" },
    { num: "04", label: "Cituje váš web" },
  ],
  note: "Naše služby řeší kroky 2–4: aby vás AI měla šanci najít, vyhodnotit jako důvěryhodný zdroj a citovat.",
};

/** 3 balíčky — hotové kombinace modulů se zvýhodněnou cenou. */
export const packagesSection = {
  eyebrowNum: "02",
  eyebrow: "Balíčky",
  title: "Tři úrovně <strong>přípravy na AI vyhledávání</strong>",
  lead:
    "Hotové kombinace modulů se zvýhodněnou cenou. Balíčky nasazujeme jako hotová řešení na Upgates a Shoptet; pro weby na jiných platformách připravíme totéž na míru.",
  vatNote: "Všechny ceny jsou bez DPH.",
};

export interface PackageDef {
  badge?: string;
  name: string;
  forWhom: string;
  price: string;
  regular: string;
  saving: string;
  priceNote: string;
  items: string[];
  itemsPrefix?: string;
  cta: string;
  featured: boolean;
}

export const packages: PackageDef[] = [
  {
    name: "Potřebný pevný základ",
    forWhom: "Pro web, který potřebuje postavit základy a optimalizace doplňovat časem.",
    price: "13 490 Kč",
    regular: "17 100 Kč",
    saving: "3 610 Kč",
    priceNote: "jednorázová investice",
    items: [
      "Audit připravenosti + edukativní meeting",
      "Strukturovaná data na 100 % Google Rich Results",
      "Google Search Console + aktivace Bing Webmaster",
      "Na míru vyplněný soubor llms.txt pro AI vyhledávání",
    ],
    cta: "Chci technický základ",
    featured: false,
  },
  {
    badge: "Nejoblíbenější volba",
    name: "Technicky připravený web",
    forWhom: "Pro weby a e-shopy, které chtějí být v AI vyhledávání.",
    price: "32 900 Kč",
    regular: "41 400 Kč",
    saving: "8 500 Kč",
    priceNote: "jednorázová investice",
    items: [
      "Audit připravenosti + edukativní meeting",
      "Strukturovaná data na 100 % Google Rich Results",
      "Google Search Console + aktivace Bing Webmaster",
      "Modul krátká odpověď v kategorii pro AI vyhledávání",
      "FAQ modul na produktech a kategoriích",
      "E-E-A-T prvky na webu — doložená důvěryhodnost",
      "Optimalizace HTML sémantiky pro čtení AI nástroji",
    ],
    cta: "Chci technicky připravený web",
    featured: true,
  },
  {
    badge: "Maximum",
    name: "AI vyhledávání na MAX",
    forWhom: "Pro web, který chce být maximálně vidět v AI vyhledávačích, citacích a doporučeních.",
    price: "49 490 Kč",
    regular: "61 900 Kč",
    saving: "12 410 Kč",
    priceNote: "jednorázová investice · ideálně navázat obsahem",
    itemsPrefix: "Vše z balíčku Technicky připravený web, a navíc:",
    items: [
      "Na míru vyplněný soubor llms.txt pro AI vyhledávání",
      "Modul autoři článků + šablona důvěryhodného autora",
      "Rozšířená strukturovaná data u článků",
      "Rychlý souhrn produktu a kategorie pro AI",
      "Převod obrázků do formátu WebP",
      "Hodina konzultace zdarma navíc",
    ],
    cta: "Chci být plně připravený na AI",
    featured: false,
  },
];

/** Krok 1 — audit (vstupní služba, vede na /audit/). */
export const stepAudit = {
  eyebrowNum: "03",
  eyebrow: "Krok 1 · Audit",
  title: "Zjistěte, kde <strong>ztrácíte v AI vyhledávání</strong>",
  lead:
    "Projdeme technickou i obsahovou část webu a připravíme akční plán priorit. Nad výsledky proběhne online meeting (30–60 minut): jak AI vyhledávání funguje a co konkrétně znamená pro váš projekt. Odejdete s jasným seznamem — co vás u AI brzdí, co má smysl řešit a co si umíte udělat sami.",
  price: "3 600 Kč",
  priceNote: "bez DPH · pevná cena · vstupní služba",
  forWhom: "Pro koho: weby a e-shopy, které začínají řešit SEO pro AI",
  cta: "Objednat audit s meetingem",
  ctaHref: "/audit/",
};

/** Krok 2 — technické moduly à la carte. */
export const stepModules = {
  eyebrowNum: "04",
  eyebrow: "Krok 2 · Technika",
  title: "Web, který AI <strong>chápe a přečte rychle</strong>",
  lead:
    "Prověřené technické úpravy, které přímo ovlivňují šance na citace. Na Upgates a Shoptet jde o hotové moduly s pevnou cenou — většinu nasazujeme do pár dnů. Na ostatních platformách totéž řešíme na míru.",
  impactLegend: "Škála vlivu: 🔥🔥🔥 velký · 🔥🔥 střední · 🔥 menší",
};

export type Impact = 3 | 2 | 1;

export interface ModuleDef {
  impact: Impact;
  name: string;
  desc: string;
  price: string;
  slug: string;
}

export const modules: ModuleDef[] = [
  {
    impact: 3,
    name: "Strukturovaná data na 100 % Google Rich Results",
    desc: "Optimalizace a plné doplnění JSON-LD — Google i AI nástroje přesně pochopí produkty, ceny, dostupnost a firmu.",
    price: "7 000 Kč",
    slug: "strukturovana-data",
  },
  {
    impact: 3,
    name: "Google Search Console + aktivace Bing Webmaster",
    desc: "Kontrola a plné nastavení Search Console a aktivace Bingu — na indexaci v Bingu stojí citace v ChatGPT a Copilotu.",
    price: "3 900 Kč",
    slug: "gsc-bing",
  },
  {
    impact: 3,
    name: "Modul krátká odpověď v kategorii",
    desc: "Modul „Co je {kategorie}“ — citovatelná odpověď zavedená do strukturovaných dat vedle FAQ, včetně návodu, jaký obsah vyplňovat.",
    price: "3 900 Kč",
    slug: "kratka-odpoved",
  },
  {
    impact: 3,
    name: "FAQ modul na produktech a kategoriích",
    desc: "Modul pro vkládání FAQ do kategorií i produktů, včetně zavedení do strukturovaných dat pro AI nástroje.",
    price: "4 800 Kč",
    slug: "faq-modul",
  },
  {
    impact: 3,
    name: "E-E-A-T prvky na webu",
    desc: "Stránky O nás, autorství, odborné profily, citace, reference a vazby na externí zdroje — doporučíme nebo rovnou připravíme.",
    price: "10 400 Kč",
    slug: "eeat-prvky",
  },
  {
    impact: 3,
    name: "Optimalizace HTML sémantiky",
    desc: "Čistá struktura šablony, ze které AI roboti rychle pochopí, co je co na stránce — a umí se v obsahu okamžitě zorientovat.",
    price: "7 800 Kč",
    slug: "html-semantika",
  },
  {
    impact: 1,
    name: "Na míru vyplněný soubor llms.txt",
    desc: "Soubor s podstatnými informacemi o webu, firmě a důvěryhodnosti — přímý vstup pro AI nástroje.",
    price: "2 600 Kč",
    slug: "llms-txt",
  },
  {
    impact: 2,
    name: "Modul autoři článků",
    desc: "Každý článek má svého autora s vlastní kartou. Šablona karty autora je připravená pro důvěryhodnost v AI vyhledávání.",
    price: "3 900 Kč",
    slug: "autori-clanku",
  },
  {
    impact: 1,
    name: "Rozšířená strukturovaná data u článků",
    desc: "Datum publikace, poslední aktualizace a další podstatná pole u článků — pro AI i Google.",
    price: "2 300 Kč",
    slug: "clanky-data",
  },
  {
    impact: 1,
    name: "Rychlý souhrn produktu a kategorie",
    desc: "Vlastní pole se strojovým souhrnem stránky a jejích vazeb — AI okamžitě ví, o čem stránka je.",
    price: "1 300 Kč",
    slug: "rychly-souhrn",
  },
  {
    impact: 2,
    name: "Převod obrázků do WebP",
    desc: "Přegenerování produktových i ostatních obrázků do WebP — rychlost načítání jako základní signál kvality.",
    price: "individuálně dle rozsahu",
    slug: "webp",
  },
];

/** Krok 3 — obsahové služby (úrovně, jednotkové ceny, vstupní analýza). */
export const stepContent = {
  eyebrowNum: "05",
  eyebrow: "Krok 3 · Obsah",
  title: "Odpovědi, <strong>které AI cituje</strong>",
  lead:
    "Texty ve formátu, ze kterého AI skládá odpovědi — krátké odpovědi, FAQ, fakta místo frází. Tady se rozhoduje, jestli odpověď zmíní vás, nebo konkurenci. A protože fakta místo vaty chtějí i lidé, stejný obsah slouží zákazníkům i klasickému SEO.",
  analysisTitle: "Proč je u obsahu vstupní analýza?",
  analysisHtml:
    "Negenerujeme texty jedním univerzálním promptem. U každého projektu nejdřív vytvoříme <strong>vstupní analýzu</strong>: branding a tón projektu, konkurence a mezery, audit stávajícího obsahu. Teprve nad těmito daty ladíme generování na míru projektu. <strong>Analýza se platí jednou pro celou skupinu</strong> — při rozšíření na vyšší úroveň se neopakuje.",
};

export interface TierDef {
  badge?: string;
  name: string;
  desc: string;
  unitPrice: string;
  unit: string;
  analysis: string;
  items: { label: string; impact: Impact }[];
  cta: string;
  featured: boolean;
}

export const categoryTiers: { title: string; lead: string; tiers: TierDef[] } = {
  title: "Obsah kategorií — tři úrovně",
  lead: "Úrovně na sebe navazují — vyšší vždy obsahuje vše z nižší.",
  tiers: [
    {
      name: "1 · Základ",
      desc: "Jasná citovatelná odpověď u každé kategorie. Základ, bez kterého nemá smysl generovat nic dalšího.",
      unitPrice: "18 Kč",
      unit: "kategorie",
      analysis: "vstupní analýza 1 300 Kč (jednou)",
      items: [{ label: "Krátké odpovědi do všech kategorií", impact: 3 }],
      cta: "Chci krátké odpovědi",
      featured: false,
    },
    {
      name: "2 · Základ + FAQ",
      desc: "Krátké odpovědi + reálné otázky a odpovědi ke každé kategorii — zdroj, ze kterého AI skládá odpovědi.",
      unitPrice: "39 Kč",
      unit: "kategorie",
      analysis: "vstupní analýza 2 600 Kč (jednou)",
      items: [
        { label: "Krátké odpovědi do všech kategorií", impact: 3 },
        { label: "FAQ do všech kategorií", impact: 3 },
      ],
      cta: "Chci odpovědi + FAQ",
      featured: false,
    },
    {
      badge: "Nejlepší hodnota",
      name: "3 · Kompletní obsah kategorií",
      desc: "Kompletní obsahová výbava: krátké odpovědi, FAQ a přepis obsahu klíčových kategorií.",
      unitPrice: "54 Kč",
      unit: "kategorie",
      analysis: "vstupní analýza 2 600 Kč (jednou)",
      items: [
        { label: "Krátké odpovědi do všech kategorií", impact: 3 },
        { label: "FAQ do všech kategorií", impact: 3 },
        { label: "Přepis obsahu klíčových kategorií", impact: 2 },
      ],
      cta: "Chci kompletní obsah kategorií",
      featured: true,
    },
  ],
};

export const productTiers: { title: string; lead: string; tiers: TierDef[] } = {
  title: "Obsah produktů — tři úrovně",
  lead: "Nejrychlejší cestou k citacím jsou FAQ; strukturované popisy a strojové souhrny na ně navazují.",
  tiers: [
    {
      name: "1 · FAQ",
      desc: "Nejrychlejší cesta k obsahu, který může AI citovat u vašich nejprodávanějších produktů.",
      unitPrice: "34 Kč",
      unit: "produkt",
      analysis: "vstupní analýza 2 600 Kč (jednou)",
      items: [{ label: "FAQ do klíčových produktů", impact: 3 }],
      cta: "Chci FAQ k produktům",
      featured: false,
    },
    {
      badge: "Doporučené kombo",
      name: "2 · FAQ + popisy",
      desc: "FAQ + popisy s jasnou strukturou a fakty — dávají smysl zákazníkovi i AI vyhledávači.",
      unitPrice: "49 Kč",
      unit: "produkt",
      analysis: "vstupní analýza 3 900 Kč (jednou)",
      items: [
        { label: "FAQ do klíčových produktů", impact: 3 },
        { label: "Strukturované popisy klíčových produktů", impact: 3 },
      ],
      cta: "Chci FAQ + popisy",
      featured: true,
    },
    {
      name: "3 · Kompletní obsah produktů",
      desc: "Plná výbava klíčových produktů včetně strojových souhrnů do strukturovaných dat.",
      unitPrice: "55 Kč",
      unit: "produkt",
      analysis: "vstupní analýza 3 900 Kč (jednou)",
      items: [
        { label: "FAQ do klíčových produktů", impact: 3 },
        { label: "Strukturované popisy klíčových produktů", impact: 3 },
        { label: "Rychlé souhrny do strukturovaných dat", impact: 1 },
      ],
      cta: "Chci kompletní obsah produktů",
      featured: false,
    },
  ],
};

export const compareOffer = {
  title: "Samostatné téma: srovnávací obsah",
  lead:
    "Férová srovnání „X vs Y“ jsou formát, který AI nástroje citují nejčastěji ze všech — proto stojí mimo úrovně výše, jako samostatný publikační plán. Funguje pro AI, klasické SEO i samotného zákazníka.",
  name: "Srovnávací obsah „X vs Y“",
  price: "12 800 Kč",
  priceNote: "publikační plán na rok · 24 srovnání · pevná cena",
  cta: "Chci srovnávací obsah",
  slug: "srovnavaci-obsah",
};

/** Měření + dlouhodobé služby. */
export const measurement = {
  eyebrowNum: "06",
  eyebrow: "Měření",
  title: "Dopad AI vyhledávání <strong>se dá měřit</strong>",
  lead: "A je dobré s tím počítat od začátku. Nastavení měření řešíme v rámci klasického SEO a konzultací.",
  items: [
    {
      name: "Google Analytics 4",
      desc: "Návštěvnost z AI asistentů (ChatGPT, Perplexity…) a její konverze.",
    },
    {
      name: "Google Search Console",
      desc: "Imprese a pozice v AI Overviews, vývoj dotazů a CTR — včetně zero-click trendů.",
    },
    {
      name: "Specializované nástroje",
      desc: "Collabim, Marketing Miner a další — sledování citací značky v AI odpovědích.",
    },
  ],
};

export const retainers = {
  eyebrowNum: "07",
  eyebrow: "Dlouhodobě",
  title: "Základ a monitoring: <strong>klasické SEO + citace</strong>",
  lead:
    "AI čerpá z webů, které už umí najít Google a Bing — bez zdravého SEO základu AI viditelnost nestojí. A průběžně měříme, kde vás AI cituje a co to přináší.",
  items: [
    {
      type: "Měsíční retainer",
      name: "Klasická pravidelná SEO optimalizace",
      desc: "Klasické SEO je stále základ celé problematiky — s SEO pro AI se prolíná a je třeba ho budovat, aby mělo AI z čeho čerpat.",
      forWhom: "Pro koho: weby bez funkční SEO základny",
      href: "/sluzby/dlouhodobe-seo/",
    },
    {
      type: "Měsíční retainer",
      name: "Monitoring AI viditelnosti / sledování citací",
      desc: "Zjistíme, u kterých dotazů vás ChatGPT, Perplexity nebo Google AI zmiňují — a kde místo vás doporučují konkurenci.",
      forWhom: "Pro koho: klienti, kteří potřebují tvrdá data o AI viditelnosti",
      href: "/sluzby/monitoring-ai/",
    },
  ],
  cta: "Mám zájem o dlouhodobou správu",
};

/** Interaktivní self-check. */
export const selfCheck = {
  eyebrowNum: "08",
  eyebrow: "Otestujte se",
  title: "Je váš web <strong>připravený na AI?</strong>",
  lead: "Zaškrtněte, co už máte. Co zůstane prázdné, to je vaše zadání.",
  items: [
    "Vím, o čem je SEO pro AI — umím ho rozdělit na technickou a obsahovou část",
    "Mám hotový audit a vím, kde mám největší mezery — technicky i obsahově",
    "Web splňuje Google Rich Results a v Search Console nejsou kritické chyby",
    "Můžu vkládat FAQ do kategorií a produktů — a jsou ve strukturovaných datech",
    "U článků mám uvedené autory a autoři mají vlastní karty s podrobnostmi",
    "U článků uvádím datum publikace a datum poslední aktualizace",
    "Mám v kategoriích pole s krátkou odpovědí na dotaz „Co je {kategorie}“",
    "Mám na míru vyplněný soubor llms.txt s podstatnými informacemi o firmě",
    "Web má správně implementovanou HTML sémantiku",
    "Obrázky mám ve formátu WebP — hlavně u produktů",
  ],
  progressTemplate: "{n} z {total} splněno",
  hint: "Zaškrtávejte — hned uvidíte, kde stojíte.",
  cta: "Doplňte zbytek s naším auditem",
  ctaHref: "/audit/",
};

/** Mýty — vyčištění očekávání. */
export const myths = {
  eyebrowNum: "09",
  eyebrow: "Vyčistíme očekávání",
  title: "Co SEO pro AI <strong>není</strong>",
  lead: "Tři nejčastější mýty, které se vyplatí mít upřímně na stole hned na začátku.",
  items: [
    {
      name: "Není to garance první pozice",
      desc: "Nikdo nemůže slíbit, že vás ChatGPT bude vždy zmiňovat jako první. Pracujeme se šancemi a měřitelně je zvyšujeme — ale konečné rozhodnutí dělá AI.",
    },
    {
      name: "Není to jen generování článků",
      desc: "SEO pro AI není „nechte si napsat 100 článků GPT“. Bez technické základny, autority a strukturovaných dat by takové články AI nevzala v potaz — nebo by ublížily i klasickému SEO.",
    },
    {
      name: "Není to náhrada klasického SEO",
      desc: "AI vyhledávače čerpají z webů indexovaných přes Google a Bing. Bez funkčního SEO základu se k vám AI ani nedostane — řešíme obojí paralelně.",
    },
  ],
};

export const faqHead = {
  eyebrowNum: "10",
  eyebrow: "Časté otázky",
  title: "Na co se <strong>nejčastěji ptáte</strong>",
};

export const faq = [
  {
    q: "Co je SEO pro AI a proč o něm přemýšlet?",
    a: "SEO pro AI (zahrnuje GEO i AEO) je optimalizace webu pro AI vyhledávače typu ChatGPT, Perplexity a Google AI Overviews. Tyto nástroje nevracejí seznam odkazů, ale generují odpověď — a vy chcete být zdrojem, který v té odpovědi citují. Klasické SEO je stále potřeba, ale samo nestačí.",
  },
  {
    q: "Jak rychle se výsledky projeví?",
    a: "Technické úpravy (strukturovaná data, krátké odpovědi, FAQ) se v AI odpovědích mohou projevit v řádu týdnů — AI vyhledávače čerpají čerstvá data z indexů Googlu a Bingu. Budování autority a obsahu je běh na měsíce. Proto začínáme auditem: řekne, co přinese efekt nejdřív.",
  },
  {
    q: "Funguje to i pro malý web, nebo jen pro velké značky?",
    a: "Funguje. AI odpovědi skládají z konkrétních, důvěryhodných stránek — ne nutně z největších. Malý web s jasnými odpověďmi, doloženým autorstvím a čistými strukturovanými daty má v AI reálnou šanci předběhnout většího, ale hůř připraveného konkurenta.",
  },
  {
    q: "Musíme všechno dělat naráz, nebo to jde postupně?",
    a: "Postupně — nabídka je na to stavěná. Začíná se auditem za 3 600 Kč, pak jdou technické moduly podle priorit (každý má pevnou cenu) a obsah po úrovních. Balíčky jsou pro ty, kdo chtějí základ vyřešit najednou a se slevou.",
  },
  {
    q: "Jak měříte výsledky?",
    a: "Návštěvnost z AI asistentů a konverze v Google Analytics 4, imprese v AI Overviews v Search Console a citace značky v AI odpovědích přes specializované nástroje (Collabim, Marketing Miner). Pro dlouhodobé sledování nabízíme měsíční monitoring AI viditelnosti.",
  },
  {
    q: "Děláte to jen pro Upgates a Shoptet?",
    a: "Ne. Na Upgates a Shoptetu máme hotové moduly s pevnou cenou (nasazení do pár dnů), protože obě platformy známe do detailu — jsme Zlatý partner obou. Stejné úpravy připravíme na míru i pro weby na jiných platformách; cenu stanovíme po auditu.",
  },
];

export const finalCta = {
  title: "Nevíte, kde začít? <strong>Začněte auditem.</strong>",
  lead:
    "Za 3 600 Kč dostanete audit připravenosti, edukativní meeting a prioritizovaný plán — a teprve pak se rozhodněte, co řešit s námi a co si uděláte sami.",
  btnPrimary: { label: "Objednat audit za 3 600 Kč", href: "/audit/" },
  btnSecondary: { label: "Napište nám", href: "/kontakt/" },
};

/** JSON-LD katalog nabídky (ceny bez DPH, CZK). */
export const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "SEO pro AI — kompletní nabídka služeb",
  url: "https://aiseo-optimalizace.cz/sluzby/",
  itemListElement: [
    { "@type": "Offer", name: "Audit připravenosti + edukativní meeting", price: "3600", priceCurrency: "CZK" },
    { "@type": "Offer", name: "Balíček Potřebný pevný základ", price: "13490", priceCurrency: "CZK" },
    { "@type": "Offer", name: "Balíček Technicky připravený web", price: "32900", priceCurrency: "CZK" },
    { "@type": "Offer", name: "Balíček AI vyhledávání na MAX", price: "49490", priceCurrency: "CZK" },
    { "@type": "Offer", name: "Srovnávací obsah X vs Y — roční publikační plán", price: "12800", priceCurrency: "CZK" },
  ],
};
