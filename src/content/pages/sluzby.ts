/**
 * Datový modul — /sluzby/ (prodejní landing „Editorial důkaz“).
 *
 * Design 2026-08 (koncept A): prémiový editorial — důkazy nesou přesvědčení,
 * grafika ustupuje. Hairline linky, obří číslice, stylizovaná GSC karta v hero.
 *
 * CÍL STRÁNKY (uživatel, 14. 9. 2026): objednat audit za 3 600 Kč. Audit =
 * rozbor, vyhodnocení a meeting, na kterém se naplánuje další krok. Bezplatnou
 * konzultaci tu zatím nenabízíme.
 *
 * OBCHODNÍ MODEL: technická příprava je jednorázová a cena závisí hlavně na
 * platformě (krabicový e-shop × zastaralý agenturní systém × web na míru) —
 * orientačně od 8 000 Kč do vyšších desítek tisíc, přesně po auditu. Dělá se po
 * fázích podle priority. Měsíční správa má rozsah daný rozpočtem klienta.
 * Pevnou cenu předem má jen audit a obsah (jednotkové ceny nezávisí na platformě).
 *
 * FORMÁT TEXTU: pole `desc`, `detail`, `measureNote`, `items` v e-shopovém bloku
 * a FAQ nesou mini markdown (`**tučné**`, `[odkaz](/url/)`), vykresluje ho
 * `renderInlineMarkdown`. Pole s příponou `Html` a `hero.lead` jsou HTML.
 *
 * PER-MUTACE: celý soubor se překládá (viz MUTATIONS.md). Ceny v CZK;
 * čísla důkazů (200k, 600+) jsou sdílená fakta z MEGA DETAIL case study.
 */

export const meta = {
  title: "Viditelnost e-shopu v AI: služby a ceník | Sniper Design",
  description:
    "Začněte auditem za 3 600 Kč: rozbor webu a plán dalších kroků. Technické úpravy po fázích a obsah od 18 Kč. Aby vás citovaly ChatGPT i Přehled od AI.",
  ogImage: "/og/sluzby.jpg",
  /** Datum poslední obsahové revize — viditelně v hero a jako dateModified. */
  updated: "2026-09-14",
};

/** Popisky šablony (dřív napsané přímo v index.astro). */
export const labels = {
  stepsEyebrow: "Postup",
  pricesMeta: "ceny bez DPH",
  inquire: "Poptat",
  retainersMeta: "měsíční spolupráce",
  serviceDetail: "Detail služby",
  inquiryMeta: "odpověď do 1 pracovního dne",
  impact: { 3: "velký vliv", 2: "střední vliv", 1: "menší vliv" } as Record<number, string>,
};

/* ============ HERO ============ */

export const hero = {
  kicker: "Služby · AI SEO · Sniper Design",
  titleHtml:
    '<strong>Zákazníci už se neptají jen Googlu.</strong><br />Ptají se i <span class="hl">AI</span> — a ta <span class="hl">doporučuje</span>.',
  lead:
    'ChatGPT, Gemini i Přehled od AI v Googlu dnes zákazníkům rovnou doporučují obchody a firmy — otázka je, <strong>jestli mezi nimi jste</strong>. Vyhledávání v ChatGPT používá v EU podle OpenAI 159 milionů lidí měsíčně a Evropská komise ho 31. 8. 2026 zařadila mezi <a href="/blog/chatgpt-jako-vyhledavac-dsa/">velmi velké vyhledávače</a>. Připravíme váš web tak, aby ho AI uměla přečíst a citovat — podle toho, co měříme na vlastním e-shopu.',
  ctaPrimary: { label: "Začít auditem — 3 600 Kč", href: "/audit/" },
  ctaSecondary: { label: "Co přesně děláme", href: "#kroky" },
  /** Partnerství Upgates a Shoptet pod tímto řádkem nese komponenta PartnerBadges. */
  trustLine: "Sniper Design · 600+ klientů od roku 2016",
};

/** Stylizovaná karta GSC reportu v hero (čísla z proof.ts / case study). */
export const heroShot = {
  barTitle: "Search Console · Funkce s generativní AI · MEGA DETAIL",
  metric: "200 018",
  metricUnit: "zobrazení",
  sub: "v AI odpovědích Googlu · 18. 5. – 15. 7. 2026",
  /** Výšky sloupců sparkline v % (stylizace reálné rostoucí křivky). */
  bars: [18, 24, 21, 30, 36, 33, 45, 52, 48, 61, 57, 70, 78, 74, 88, 100],
  ariaLabel: "Stylizovaný náhled reportu Search Console — 200 018 zobrazení v AI odpovědích",
};

/* ============ KRÁTKÁ ODPOVĚĎ ============ */

/** Vykresluje komponenta Answer (štítek „Stručná odpověď“). 40–60 slov. */
export const answer = {
  text: "**Sniper Design** je [AI SEO](/slovnik/ai-seo/) agentura pro e-shopy a firemní weby. Začíná se auditem za 3 600 Kč s meetingem, na kterém naplánujeme další kroky. Pak technické úpravy po fázích, obsah kategorií od 18 Kč a produktů od 34 Kč a měsíční správa podle rozpočtu. Cílem jsou citace v ChatGPT, Gemini, Claude, Perplexity a v Přehledu od AI.",
};

/* ============ TŘI KROKY (editorial kapitoly) ============ */

export const steps = {
  introHtml: "Tři kroky mezi vámi a <strong>citací v AI odpovědi</strong>.",
  items: [
    {
      num: "01",
      meta: "Audit · pevná cena",
      title: "Zjistíme, kde ztrácíte",
      desc: "Projdeme techniku i obsah webu a nad výsledky proběhne meeting (30–60 minut). Řekneme si, jaký je ideální další krok, jaký bude mít dopad a jak implementaci naplánovat — i co zvládnete sami. [Co audit kontroluje](/blog/ai-seo-audit/)",
      priceHtml: "<b>3 600 Kč</b> <i>· bez DPH · pevná cena</i>",
      cta: { label: "Objednat audit", href: "/audit/", gold: true },
    },
    {
      num: "02",
      meta: "Technika · po fázích",
      title: "Připravíme web, který AI přečte",
      desc: "Technická příprava je jednorázová a její cena záleží hlavně na platformě: krabicový e-shop jako Shoptet nebo Upgates je jiná práce než zastaralý agenturní systém nebo web na míru, který se roky nevyvíjel. Audit vybere úpravy se skutečným vlivem a seřadí je — nemusíte všechno najednou, obvykle začneme dvěma třemi nejdůležitějšími. Co příprava obnáší, ukazují karty níže.",
      priceHtml: "<b>od 8 000 Kč</b> <i>· přesnou cenu a pořadí určí audit</i>",
      cta: { label: "Začít auditem", href: "/audit/", gold: false },
    },
    {
      num: "03",
      meta: "Obsah · jednotková cena",
      title: "Dodáme odpovědi, které AI cituje",
      desc: "Texty ve formátu, ze kterého AI skládá odpovědi — krátké odpovědi, FAQ, fakta místo frází. Vedle auditu jediná část nabídky s cenou předem: na platformě totiž nezávisí. Úrovně najdete níže.",
      priceHtml: "<b>od 18 Kč</b> <i>/ kategorie</i> · <b>od 34 Kč</b> <i>/ produkt</i>",
      cta: { label: "Prohlédnout ceník obsahu", href: "#obsah", gold: false },
    },
  ],
};

/** Oblasti technické přípravy (krok 02) — seřazené podle vlivu. */
export type Impact = 3 | 2 | 1;

export interface ModuleDef {
  impact: Impact;
  name: string;
  /** Mini markdown — smí nést odkaz na článek nebo heslo. */
  desc: string;
}

export const modules: ModuleDef[] = [
  {
    impact: 3,
    name: "Search Console, Bing Webmaster Tools a AI roboti",
    desc: "Nastavíme [report Funkce s generativní AI](/blog/gsc-ai-segmenty-mereni/) v Search Console i [Bing Webmaster Tools](/blog/bing-ai-performance-report/) a v robots.txt povolíme vyhledávací roboty AI — třeba OAI-SearchBot, který podle dokumentace OpenAI řeší zobrazení ve vyhledávání v ChatGPT. [Jak na robots.txt](/blog/ai-crawler-robots-txt/)",
  },
  {
    impact: 3,
    name: "Krátké odpovědi na klíčových stránkách",
    desc: "Citovatelná odpověď „Co je {téma}“ na kategoriích či službách — formát, ze kterého AI skládá odpovědi. [Co je krátká odpověď](/slovnik/answer-block/)",
  },
  {
    impact: 3,
    name: "FAQ na produktech, kategoriích a službách",
    desc: "Reálné otázky zákazníků s odpověďmi přímo v textu stránky. Strukturovaná data pro FAQ jen jako doplněk — [Google je od května 2026 ve výsledcích nezobrazuje](/blog/konec-faq-rich-results/).",
  },
  {
    impact: 3,
    name: "E-E-A-T prvky na webu",
    desc: "Stránky O nás, autorství, odborné profily, reference a vazby na externí zdroje — doporučíme nebo rovnou připravíme. [Co je E-E-A-T](/slovnik/e-e-a-t/)",
  },
  {
    impact: 3,
    name: "Optimalizace HTML sémantiky",
    desc: "Čistá struktura šablony, ze které AI roboti rychle pochopí, co je co na stránce — a umí se v obsahu okamžitě zorientovat.",
  },
  {
    impact: 2,
    name: "Strukturovaná data produktů a firmy",
    desc: "Doplníme strukturovaná data, aby web prošel testem Rich Results a stroje přesně četly ceny, dostupnost a údaje o firmě. Citaci v AI samo nezaloží — [ukázal to test Ahrefs](/blog/schema-markup-ai-citace-test/) — jde o přesnost údajů.",
  },
  {
    impact: 2,
    name: "Autorství článků",
    desc: "Každý článek má autora s vlastní kartou a doloženou odborností — signál důvěryhodnosti pro AI vyhledávání. [Jak na autorský profil](/blog/autorsky-profil-pro-ai/)",
  },
  {
    impact: 2,
    name: "Rychlost a formáty obrázků",
    desc: "Převod obrázků do WebP a základní výkonové úpravy — [rychlost načítání](/blog/core-web-vitals-pro-ai/) jako základní signál kvality.",
  },
  {
    impact: 1,
    name: "Soubor llms.txt na míru",
    desc: "Soubor s podstatnými informacemi o webu a firmě pro AI nástroje. Podporu deklarují Claude a Perplexity, Google ho nepoužívá — levný doplněk, ne páka viditelnosti. [Návod k llms.txt](/blog/llms-txt-navod/)",
  },
  {
    impact: 1,
    name: "Rozšířená strukturovaná data u článků",
    desc: "Datum publikace, poslední aktualizace a další podstatná pole u článků — pro AI i Google.",
  },
  {
    impact: 1,
    name: "Strojové souhrny stránek",
    desc: "Souhrn stránky a jejích vazeb ve strukturovaných datech — AI rychleji pozná, o čem stránka je.",
  },
];

export const modulesFoot = {
  impactLegend: "Řazeno podle vlivu na citace: ● velký · ◐ střední · ○ menší",
  platformNoteHtml:
    'Máte e-shop na Upgates? Tam máme tyhle úpravy jako <a href="https://www.sniperdesign.cz/seo-pro-ai" target="_blank" rel="noopener">hotové moduly s pevnou cenou</a> — nasazení do pár dnů.',
};

/* ============ OBSAH — ÚROVNĚ S GARANTOVANOU CENOU ============ */

export const stepContent = {
  eyebrow: "Ceník obsahu",
  titleHtml: "Jediné ceny, které <strong>známe předem</strong>",
  lead:
    "Tvorba citovatelného obsahu na platformě nezávisí — proto ji umíme garantovat na korunu.",
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
  /** Co úroveň obsahuje — vyšší úroveň vždy zahrnuje vše z nižší. */
  items: { label: string; impact: Impact }[];
  featured?: boolean;
}

export interface TierGroup {
  title: string;
  lead: string;
  /** Volba v poptávkovém formuláři, kterou předvyplní tlačítko „Poptat“. */
  sluzba: string;
  /** Jednotka pro strukturovaná data (UnitPriceSpecification.unitText). */
  unitText: string;
  tiers: TierDef[];
}

export const categoryTiers: TierGroup = {
  title: "Obsah kategorií",
  lead: "Úrovně na sebe navazují — vyšší vždy obsahuje vše z nižší.",
  sluzba: "Obsah kategorií",
  unitText: "kategorie",
  tiers: [
    {
      name: "1 · Základ",
      desc: "Jasná citovatelná odpověď u každé kategorie. Základ, bez kterého nemá smysl generovat nic dalšího.",
      unitPrice: "18 Kč",
      unit: "/ kategorie",
      analysis: "vstupní analýza 1 300 Kč (jednou)",
      items: [{ label: "Krátké odpovědi do všech kategorií", impact: 3 }],
    },
    {
      name: "2 · Základ + FAQ",
      desc: "Krátké odpovědi + reálné otázky a odpovědi ke každé kategorii — zdroj, ze kterého AI skládá odpovědi.",
      unitPrice: "39 Kč",
      unit: "/ kategorie",
      analysis: "vstupní analýza 2 600 Kč (jednou)",
      items: [
        { label: "Krátké odpovědi do všech kategorií", impact: 3 },
        { label: "FAQ do všech kategorií", impact: 3 },
      ],
    },
    {
      badge: "Nejlepší hodnota",
      name: "3 · Kompletní obsah",
      desc: "Kompletní obsahová výbava: krátké odpovědi, FAQ a přepis obsahu klíčových kategorií.",
      unitPrice: "54 Kč",
      unit: "/ kategorie",
      analysis: "vstupní analýza 2 600 Kč (jednou)",
      items: [
        { label: "Krátké odpovědi do všech kategorií", impact: 3 },
        { label: "FAQ do všech kategorií", impact: 3 },
        { label: "Přepis obsahu klíčových kategorií", impact: 2 },
      ],
      featured: true,
    },
  ],
};

export const productTiers: TierGroup = {
  title: "Obsah produktů",
  lead: "Nejrychlejší cestou k citacím jsou FAQ; strukturované popisy a strojové souhrny na ně navazují.",
  sluzba: "Obsah produktů",
  unitText: "produkt",
  tiers: [
    {
      name: "1 · FAQ",
      desc: "Nejrychlejší cesta k obsahu, který může AI citovat u vašich nejprodávanějších produktů.",
      unitPrice: "34 Kč",
      unit: "/ produkt",
      analysis: "vstupní analýza 2 600 Kč (jednou)",
      items: [{ label: "FAQ do klíčových produktů", impact: 3 }],
    },
    {
      badge: "Doporučené kombo",
      name: "2 · FAQ + popisy",
      desc: "FAQ + popisy s jasnou strukturou a fakty — dávají smysl zákazníkovi i AI vyhledávači.",
      unitPrice: "49 Kč",
      unit: "/ produkt",
      analysis: "vstupní analýza 3 900 Kč (jednou)",
      items: [
        { label: "FAQ do klíčových produktů", impact: 3 },
        { label: "Strukturované popisy klíčových produktů", impact: 3 },
      ],
      featured: true,
    },
    {
      name: "3 · Kompletní obsah",
      desc: "Plná výbava klíčových produktů včetně strojových souhrnů do strukturovaných dat.",
      unitPrice: "55 Kč",
      unit: "/ produkt",
      analysis: "vstupní analýza 3 900 Kč (jednou)",
      items: [
        { label: "FAQ do klíčových produktů", impact: 3 },
        { label: "Strukturované popisy klíčových produktů", impact: 3 },
        { label: "Rychlé souhrny do strukturovaných dat", impact: 1 },
      ],
    },
  ],
};

/** Rozcestník pro e-shopy pod ceníkem obsahu — jen odkazy, žádný nový výklad. */
export const eshopAside = {
  title: "Máte e-shop na Shoptetu nebo Upgates?",
  items: [
    "**Kategorie** — krátké odpovědi a FAQ, ze kterých AI skládá odpovědi. [Texty kategorií pro AI](/blog/kategorie-texty-pro-ai/)",
    "**Produkty** — popisy s fakty a strukturovaná data s cenou a dostupností. [Produktové stránky pro AI](/blog/produktove-stranky-pro-ai/)",
    "**Produktový feed** — GTIN a úplné údaje, přes které vás najdou srovnávače i AI. [Feed a GTIN](/blog/produktovy-feed-gtin/)",
  ],
  note: "Celý postup popisuje série [SEO pro e-shop v éře AI](/serie/ai-seo-pro-eshopy/), co je na obou platformách změřené, článek [AI SEO pro Shoptet a Upgates](/blog/ai-seo-upgates-shoptet/).",
};

export const compareOffer = {
  name: "Srovnávací obsah „X vs Y“",
  detail:
    "U dotazů, kde lidé vybírají mezi možnostmi, AI cituje hlavně žebříčky a seznamy ([malá studie na ChatGPT](/blog/listicly-top-n-pro-ai/)). My píšeme férová srovnání X vs Y — samostatný publikační plán na rok, 24 srovnání.",
  price: "12 800 Kč",
  unit: "/ rok · pevná cena",
  priceValue: "12800",
  sluzba: "Srovnávací obsah „X vs Y“",
};

/* ============ AUDIT — NABÍDKOVÁ KARTA ============ */

export const offer = {
  titleHtml: "Jediné rozhodnutí dnes:<br /><strong>audit za 3 600 Kč.</strong>",
  lead:
    "Žádný balíček za desetitisíce naslepo. Nejdřív černé na bílém, kde stojíte — pak se rozhodnete, co řešit s námi a co si uděláte sami.",
  items: [
    "Rozbor techniky i obsahu vašeho webu",
    "Vyhodnocení: co vás u AI brzdí a co má největší dopad",
    "Meeting 30–60 minut: ideální další krok, jeho dopad a plán implementace",
    "Výstup do 5 pracovních dní",
  ],
  price: "3 600 Kč",
  priceValue: "3600",
  vat: "bez DPH · pevná cena",
  cta: { label: "Objednat audit", href: "/audit/" },
  risk: "Bez závazku pokračovat. Plán je váš, ať ho realizuje kdokoli.",
  /** Název nabídky ve strukturovaných datech. */
  jsonLdName: "Audit AI viditelnosti s meetingem",
};

/* ============ DLOUHODOBĚ + MĚŘENÍ ============ */

export const retainers = {
  eyebrow: "Dlouhodobě",
  titleHtml: "Po auditu: <strong>správa podle rozpočtu</strong>",
  lead:
    "Nemusíte všechno najednou. Po auditu můžeme pokračovat měsíční správou, jejíž rozsah určuje váš rozpočet: technické úpravy po fázích, obsah do nich a měření, co přinášejí. Řeknete třeba, že nechcete dát víc než 15 000 Kč měsíčně — a práci nastavíme tak, aby za ty peníze přinesla co nejvíc.",
  items: [
    {
      type: "Měsíční služba",
      name: "Měsíční SEO správa",
      desc: "Klasické SEO i příprava pro AI v jednom plánu. Rozsah podle rozpočtu, priority podle auditu.",
      href: "/sluzby/dlouhodobe-seo/",
    },
    {
      type: "Měsíční služba",
      name: "Monitoring AI viditelnosti",
      desc: "Sledujeme, kde vás zmiňují ChatGPT a Přehled od AI, kde místo vás doporučují konkurenci — a co to přináší.",
      href: "/sluzby/monitoring-ai/",
    },
  ],
  measureNote:
    "Dopad měříme od začátku: zobrazení v AI odpovědích z [reportu Funkce s generativní AI](/blog/gsc-ai-segmenty-mereni/) v Search Console a z Bing Webmaster Tools, návštěvy a konverze z AI asistentů v GA4, odpovědi ChatGPT vlastním nástrojem a Přehled od AI přes Marketing Miner.",
};

/* ============ SELF-CHECK ============ */

export const selfCheck = {
  eyebrow: "Otestujte se",
  titleHtml: "Je váš web <strong>připravený na AI?</strong>",
  lead: "Zaškrtněte, co už máte. Co zůstane prázdné, to je vaše zadání.",
  items: [
    "Vím, o čem je AI SEO — umím ho rozdělit na technickou a obsahovou část",
    "Mám hotový audit a vím, kde mám největší mezery — technicky i obsahově",
    "V robots.txt nemám zablokované vyhledávací roboty AI (OAI-SearchBot, PerplexityBot)",
    "Web splňuje Google Rich Results a v Search Console nejsou kritické chyby",
    "Můžu vkládat FAQ do kategorií a produktů",
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

/* ============ MÝTY ============ */

export const myths = {
  eyebrow: "Vyčistíme očekávání",
  titleHtml: "Co vám <strong>neslíbíme</strong>",
  lead: "Přesvědčovat umíme i poctivostí. Tyhle tři věci vám neslíbí nikdo seriózní — a kdo ano, tomu utečte.",
  items: [
    {
      name: "„Budete první v ChatGPT“",
      desc: "Nikdo nemůže slíbit, že vás AI bude vždy zmiňovat jako první. Pracujeme se šancemi a měřitelně je zvyšujeme — ale konečné rozhodnutí dělá AI.",
    },
    {
      name: "„Stačí vygenerovat 100 článků“",
      desc: "Masově generované texty bez přidané hodnoty Google vede jako spam — a bez technické základny a autority je AI stejně nevezme v potaz. [Co AI obsah zvládne a co ne](/blog/ai-generovany-obsah-viditelnost/)",
    },
    {
      name: "„Klasické SEO už neřešte“",
      desc: "Přehled od AI stojí na indexu Googlu a ChatGPT i Perplexity sbírají weby vlastními roboty. Bez funkčního SEO základu — přístupného, indexovaného a srozumitelného webu — se k vám AI ani nedostane. Řešíme obojí paralelně. [Kde se SEO a AI citace liší](/blog/seo-vs-ai-citace-platformy/)",
    },
  ],
};

/* ============ FAQ ============ */

export const faqHead = {
  eyebrow: "Časté otázky",
  titleHtml: "Na co se <strong>nejčastěji ptáte</strong>",
};

/**
 * FAQ. Drží se **tématu služeb a AI vyhledávání** (pokyn uživatele 17. 9. 2026,
 * stejné pravidlo jako na `/audit/`): nová otázka sem patří, jen když odpovídá
 * na něco o nabídce nebo o vyhledávání v AI. Administrativa — fakturace, storno,
 * kontaktní údaje — patří k formuláři, do závěrečného CTA a na `/kontakt/`,
 * ne sem. Otázka „kdo službu poskytuje“ zůstává: nese doložitelná fakta
 * (CPU s.r.o., od 2016, Zlatý partner obou platforem), na která se AI ptají.
 */
export const faq = [
  {
    q: "Co je AI SEO a proč o něm přemýšlet?",
    a: "[AI SEO](/slovnik/ai-seo/) (říká se mu také SEO pro AI; zahrnuje GEO i AEO) je optimalizace webu pro AI vyhledávání — Přehled od AI (AI Overviews) a režim AI (AI Mode) v Googlu, ChatGPT, Gemini, Claude, Perplexity, Copilot i Seznam Asistent. Tyto nástroje nevracejí seznam odkazů, ale skládají odpověď — a vy chcete být zdrojem, který v ní citují. Výsledku se říká AI viditelnost a dá se měřit. Klasické SEO je stále potřeba, ale samo nestačí. [Jak se liší SEO, GEO, AEO a AIO](/seo-vs-geo-vs-aeo-vs-aio/)",
  },
  {
    q: "Kolik u vás AI SEO stojí?",
    a: "Pevnou cenu má audit (3 600 Kč bez DPH) a obsah: kategorie od 18 Kč, produkty od 34 Kč za kus plus jednorázová vstupní analýza, srovnávací obsah 12 800 Kč na rok. Technické úpravy pevnou cenu mít nemůžou — na krabicovém e-shopu, zastaralém agenturním systému a webu na míru jde o úplně jinou práci. Orientačně vycházejí od 8 000 Kč do vyšších desítek tisíc, přesnou cenu i pořadí určí audit. Měsíční správu nastavíme podle rozpočtu. Pro Upgates máme [hotové moduly s pevným ceníkem](https://www.sniperdesign.cz/seo-pro-ai). Jak vypadají ceny na trhu: [Kolik stojí AI SEO](/blog/kolik-stoji-ai-seo/).",
  },
  {
    q: "Kdo je poskytovatelem služeb — jaká agentura za nimi stojí?",
    a: "Služby poskytuje **Sniper Design** (právně CPU s.r.o., Praha) — česká vývojářská agentura specializovaná na e-shopy na Upgates a Shoptetu. Od roku 2016 má za sebou 600+ klientů a je [Zlatým partnerem Upgates](https://marketplace.upgates.cz/agencies/sniper-design/) i [Zlatým partnerem Shoptetu](https://partneri.shoptet.cz/profesionalove/sniper-design/). Všechny postupy měří na vlastním e-shopu MEGA DETAIL — včetně [200 000 zobrazení v AI odpovědích Googlu za necelé dva měsíce](/blog/case-study-megadetail-ai-navstevnost/).",
  },
  {
    q: "Jak rychle se výsledky projeví?",
    a: "Technické úpravy (strukturovaná data, krátké odpovědi, FAQ) se v AI odpovědích mohou projevit v řádu týdnů — AI vyhledávače čerpají čerstvá data z indexů vyhledávačů. Budování autority a obsahu je běh na měsíce. Proto začínáme auditem: řekne, co přinese efekt nejdřív.",
  },
  {
    q: "Funguje to i pro malý web, nebo jen pro velké značky?",
    a: "Funguje. AI odpovědi skládají z konkrétních, důvěryhodných stránek — ne nutně z největších. Malý web s jasnými odpověďmi, doloženým autorstvím a čistou technikou má v AI reálnou šanci předběhnout většího, ale hůř připraveného konkurenta.",
  },
  {
    q: "Musíme všechno dělat naráz, nebo to jde postupně?",
    a: "Postupně — tak je nabídka postavená. Audit za 3 600 Kč vybere úpravy s největším vlivem a seřadí je. Typicky pak uděláme dvě tři nejdůležitější technické úpravy, doplníme do nich obsah, pár měsíců měříme a pokračujeme další fází. Měsíční správu nastavíme podle rozpočtu, který si určíte. [Postup krok za krokem](/prakticky-postup/)",
  },
  {
    q: "Jak měříte výsledky?",
    a: "Zobrazení v AI odpovědích z [reportu Funkce s generativní AI](/blog/gsc-ai-segmenty-mereni/) v Search Console a z Bing Webmaster Tools, návštěvy a konverze z AI asistentů v GA4 a [pravidelný test odpovědí](/blog/test-viditelnosti-v-ai/): ChatGPT měříme vlastním nástrojem, Přehled od AI přes Marketing Miner. Pro dlouhodobé sledování nabízíme měsíční monitoring AI viditelnosti.",
  },
];

/* ============ POPTÁVKOVÝ FORMULÁŘ ============ */

/**
 * Poptávka služby přímo na stránce (zpětná vazba 10. 8. 2026: objednání
 * nesmí vést přes /kontakt/ a sniperdesign.cz). Odesílá se na stejný CF
 * Worker endpoint jako audit formulář, s typ: "sluzba". Volbu předvyplní
 * tlačítko s `data-sluzba` nebo parametr `?sluzba=` z detailu služby —
 * hodnoty proto musí sedět s `name` služeb v `src/content/services/`.
 */
export const poptavka = {
  eyebrow: "Poptávka",
  titleHtml: "Poptejte službu <strong>rovnou tady</strong>",
  lead: "Vyberte, co řešíte, a do jednoho pracovního dne se vám ozveme s dalším postupem. Žádné přeposílání na jiný web.",
  endpoint: "https://aiseo-pack-webhook.aiseo-optimalizace.workers.dev/audit-inquiry",
  fields: {
    sluzba: "Co poptáváte",
    jmeno: "Jméno",
    email: "E-mail",
    url: "Web, kterého se poptávka týká",
    zprava: "Zpráva (nepovinné)",
    zpravaPlaceholder: "Cokoli, co nám pomůže — platforma webu, rozsah, termín…",
  },
  options: [
    "Technická příprava webu",
    "Obsah kategorií",
    "Obsah produktů",
    "Srovnávací obsah „X vs Y“",
    "Měsíční SEO správa",
    "Monitoring AI viditelnosti",
    "Nevím — poraďte mi",
  ],
  gdprHtml:
    'Odesláním souhlasíte se zpracováním údajů pro vyřízení této poptávky. <a href="/gdpr/">Zásady zpracování osobních údajů</a>.',
  submit: "Odeslat poptávku",
  submitBusy: "Odesílám…",
  successTitle: "Poptávka odeslána — díky!",
  successText: "Do jednoho pracovního dne se vám ozveme na uvedený e-mail. Potvrzení právě letí do vaší schránky.",
  errorText: "Něco se pokazilo při odeslání. Zkuste to prosím znovu, nebo napište na aiseo-optimalizace@sniperdesign.cz.",
};

/* ============ FINÁLNÍ CTA ============ */

export const finalCta = {
  titleHtml: "Za 3 600 Kč víte, <strong>na čem jste</strong>.",
  lead: "Žádný závazek, žádný balíček naslepo — jen jasný plán do 5 pracovních dní a jistota, že další koruna půjde tam, kde má smysl.",
  btnPrimary: { label: "Objednat audit za 3 600 Kč", href: "/audit/" },
  btnSecondary: { label: "Poptat jinou službu", href: "#poptavka" },
};

/** JSON-LD katalog — hlavička; nabídky skládá šablona z cen výše (bez DPH, CZK). */
export const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "AI SEO — služby pro viditelnost v AI vyhledávání",
  url: "https://aiseo-optimalizace.cz/sluzby/",
};
