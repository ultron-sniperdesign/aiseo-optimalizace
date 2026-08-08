/**
 * Datový modul — /sluzby/ (nabídka SEO pro AI, platformově nezávislá).
 *
 * VZTAH K sniperdesign.cz/seo-pro-ai: tam je nabídka pro KONKRÉTNÍ platformu
 * (Upgates) s hotovými moduly a pevným ceníkem. Tady je nabídka OBECNÁ —
 * zpracujeme totéž na jakékoli platformě, ale postup i pracnost se liší,
 * takže ceny technické přípravy negarantujeme (stanovují se po auditu).
 * Pevnou cenu má jen: audit (vstupní služba) a generování obsahu
 * (jednotkové ceny za kategorii/produkt — na platformě nezávisí).
 *
 * PER-MUTACE: celý soubor se překládá (viz MUTATIONS.md). Ceny v CZK.
 */

export const meta = {
  title: "Služby — kompletní SEO pro AI | aiseo-optimalizace.cz",
  description:
    "Zpracujeme SEO pro AI na jakékoli platformě: audit za 3 600 Kč, technická příprava na míru a citovatelný obsah s jednotkovou cenou. Od auditu po monitoring citací.",
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

/** 3 rozsahy spolupráce — orientace, co příprava obnáší. BEZ pevných cen:
 * nabídka je platformově nezávislá a pracnost se liší web od webu. */
export const packagesSection = {
  eyebrowNum: "02",
  eyebrow: "Rozsahy spolupráce",
  title: "Tři úrovně <strong>přípravy na AI vyhledávání</strong>",
  lead:
    "Orientace, co všechno příprava obnáší — od základů po plnou výbavu. Nejde o ceník: každý web běží na jiné platformě a v jiném stavu, takže konkrétní rozsah, postup i cenu stanovíme po auditu.",
  vatNote: "Rozsahy jsou orientační. Přesnou nabídku s cenou dostanete po auditu — bez závazku pokračovat.",
};

export interface PackageDef {
  badge?: string;
  name: string;
  forWhom: string;
  priceLabel: string;
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
    priceLabel: "Cena na míru",
    priceNote: "upřesníme po auditu",
    items: [
      "Audit připravenosti + edukativní meeting",
      "Strukturovaná data v plném rozsahu (Google Rich Results)",
      "Google Search Console + aktivace Bing Webmaster",
      "Na míru vyplněný soubor llms.txt pro AI vyhledávání",
    ],
    cta: "Chci technický základ",
    featured: false,
  },
  {
    badge: "Nejčastější rozsah",
    name: "Technicky připravený web",
    forWhom: "Pro weby a e-shopy, které chtějí být v AI vyhledávání.",
    priceLabel: "Cena na míru",
    priceNote: "upřesníme po auditu",
    items: [
      "Audit připravenosti + edukativní meeting",
      "Strukturovaná data v plném rozsahu (Google Rich Results)",
      "Google Search Console + aktivace Bing Webmaster",
      "Krátké citovatelné odpovědi na klíčových stránkách",
      "FAQ na produktech, kategoriích či službách",
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
    priceLabel: "Cena na míru",
    priceNote: "upřesníme po auditu · ideálně navázat obsahem",
    itemsPrefix: "Vše z rozsahu Technicky připravený web, a navíc:",
    items: [
      "Na míru vyplněný soubor llms.txt pro AI vyhledávání",
      "Autorství článků — karty autorů a doložená odbornost",
      "Rozšířená strukturovaná data u článků",
      "Strojové souhrny klíčových stránek pro AI",
      "Převod obrázků do formátu WebP",
      "Hodina konzultace navíc",
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

/** Krok 2 — technická příprava. Oblasti, které zpracujeme; BEZ cen (závisí
 * na platformě a stavu webu — stanovují se po auditu). */
export const stepModules = {
  eyebrowNum: "04",
  eyebrow: "Krok 2 · Technika",
  title: "Web, který AI <strong>chápe a přečte rychle</strong>",
  lead:
    "Prověřené technické úpravy, které přímo ovlivňují šance na citace. Zpracujeme je na jakékoli platformě — WordPress, Shoptet, Upgates i web na míru. Postup a pracnost se ale platformu od platformy liší, proto ceny stanovujeme po auditu, ne z ceníku.",
  impactLegend: "Škála vlivu: 🔥🔥🔥 velký · 🔥🔥 střední · 🔥 menší",
  platformNote:
    'Máte e-shop na Upgates? Tam máme tyhle úpravy jako <a href="https://www.sniperdesign.cz/seo-pro-ai" target="_blank" rel="noopener">hotové moduly s pevnou cenou</a> — nasazení do pár dnů.',
  cta: "Zjistit, co váš web potřebuje",
  ctaHref: "/audit/",
};

export type Impact = 3 | 2 | 1;

export interface ModuleDef {
  impact: Impact;
  name: string;
  desc: string;
}

export const modules: ModuleDef[] = [
  {
    impact: 3,
    name: "Strukturovaná data v plném rozsahu",
    desc: "Optimalizace a plné doplnění JSON-LD až na 100 % Google Rich Results — Google i AI nástroje přesně pochopí produkty, ceny, dostupnost a firmu.",
  },
  {
    impact: 3,
    name: "Google Search Console + aktivace Bing Webmaster",
    desc: "Kontrola a plné nastavení Search Console a aktivace Bingu — na indexaci v Bingu stojí citace v ChatGPT a Copilotu.",
  },
  {
    impact: 3,
    name: "Krátké odpovědi na klíčových stránkách",
    desc: "Citovatelná odpověď „Co je {téma}“ na kategoriích či službách, zavedená i do strukturovaných dat — přesně formát, ze kterého AI skládá odpovědi.",
  },
  {
    impact: 3,
    name: "FAQ na produktech, kategoriích a službách",
    desc: "Reálné otázky a odpovědi přímo na stránkách, včetně zavedení do strukturovaných dat pro AI nástroje.",
  },
  {
    impact: 3,
    name: "E-E-A-T prvky na webu",
    desc: "Stránky O nás, autorství, odborné profily, citace, reference a vazby na externí zdroje — doporučíme nebo rovnou připravíme.",
  },
  {
    impact: 3,
    name: "Optimalizace HTML sémantiky",
    desc: "Čistá struktura šablony, ze které AI roboti rychle pochopí, co je co na stránce — a umí se v obsahu okamžitě zorientovat.",
  },
  {
    impact: 1,
    name: "Na míru vyplněný soubor llms.txt",
    desc: "Soubor s podstatnými informacemi o webu, firmě a důvěryhodnosti — přímý vstup pro AI nástroje.",
  },
  {
    impact: 2,
    name: "Autorství článků",
    desc: "Každý článek má svého autora s vlastní kartou a doloženou odborností — signál důvěryhodnosti pro AI vyhledávání.",
  },
  {
    impact: 1,
    name: "Rozšířená strukturovaná data u článků",
    desc: "Datum publikace, poslední aktualizace a další podstatná pole u článků — pro AI i Google.",
  },
  {
    impact: 1,
    name: "Strojové souhrny stránek",
    desc: "Souhrn stránky a jejích vazeb ve strukturovaných datech — AI okamžitě ví, o čem stránka je.",
  },
  {
    impact: 2,
    name: "Rychlost a formáty obrázků",
    desc: "Převod obrázků do WebP a základní výkonové úpravy — rychlost načítání jako základní signál kvality.",
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
    a: "Postupně — nabídka je na to stavěná. Začíná se auditem za 3 600 Kč, který určí priority. Technickou přípravu pak řešíme po krocích podle toho, co má největší dopad, a obsah po úrovních s jednotkovou cenou. Nemusíte se upsat k celku předem.",
  },
  {
    q: "Jak měříte výsledky?",
    a: "Návštěvnost z AI asistentů a konverze v Google Analytics 4, imprese v AI Overviews v Search Console a citace značky v AI odpovědích přes specializované nástroje (Collabim, Marketing Miner). Pro dlouhodobé sledování nabízíme měsíční monitoring AI viditelnosti.",
  },
  {
    q: "Proč u technické přípravy neuvádíte ceny?",
    a: "Protože by to nebylo fér. Stejná úprava znamená na WordPressu, Shoptetu a webu na míru úplně jinou práci — garantovat jednu cenu předem nejde. Proto cenu technické přípravy stanovujeme po auditu, kdy víme, na čem web běží a v jakém je stavu. Pevnou cenu má audit (3 600 Kč) a generování obsahu — to na platformě nezávisí. Výjimka: pro e-shopy na Upgates máme hotové moduly s pevným ceníkem na sniperdesign.cz/seo-pro-ai.",
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
  // Jen služby s garantovanou cenou (audit + obsah). Technická příprava je
  // na míru — bez ceny do katalogu nepatří.
  itemListElement: [
    { "@type": "Offer", name: "Audit připravenosti + edukativní meeting", price: "3600", priceCurrency: "CZK" },
    { "@type": "Offer", name: "Srovnávací obsah X vs Y — roční publikační plán", price: "12800", priceCurrency: "CZK" },
  ],
};
