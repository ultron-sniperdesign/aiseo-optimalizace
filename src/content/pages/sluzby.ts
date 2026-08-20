/**
 * Datový modul — /sluzby/ (prodejní landing „Editorial důkaz").
 *
 * Design 2026-08 (koncept A): prémiový editorial — důkazy nesou přesvědčení,
 * grafika ustupuje. Hairline linky, obří číslice, „účetní výkaz" faktů
 * s tečkovanými vodicími linkami, stylizovaná GSC karta v hero.
 *
 * OBCHODNÍ PREMISA: nabídka je platformově nezávislá („zpracujeme to").
 * Pevnou cenu má POUZE audit (vstupní služba) a generování obsahu
 * (jednotkové ceny — na platformě nezávisí). Technická příprava je na míru
 * po auditu. Upgates e-shopy mají hotové moduly na sniperdesign.cz/seo-pro-ai.
 *
 * PER-MUTACE: celý soubor se překládá (viz MUTATIONS.md). Ceny v CZK;
 * čísla důkazů (200k, 4×, 600+) jsou sdílená fakta z MEGA DETAIL case study.
 */

export const meta = {
  title: "Služby AI SEO — viditelnost v AI vyhledávání, která jde změřit",
  description:
    "Zákazníci se ptají ChatGPT a Google AI Mode. Zvýšíme vaši AI viditelnost — audit za 3 600 Kč, technická příprava na míru a obsah, který AI cituje.",
  ogImage: "/og/sluzby.jpg",
};

/* ============ HERO ============ */

export const hero = {
  kicker: "Služby · AI SEO · Sniper Design",
  titleHtml:
    '<strong>Zákazníci se přestali ptát Googlu.</strong><br />Ptají se <span class="hl">AI</span> — a ta <span class="hl">doporučuje</span>.',
  lead:
    "ChatGPT, Perplexity i Google AI dnes odpovídají za vás — otázka je, <strong>jestli v té odpovědi jste</strong>. Připravíme váš web tak, aby ho AI uměla přečíst, pochopit a citovat — zvýšíme vaši <strong>AI viditelnost</strong>. Ne podle teorie: podle toho, co měříme na vlastním e-shopu.",
  ctaPrimary: { label: "Začít auditem — 3 600 Kč", href: "/audit/" },
  ctaSecondary: { label: "Co přesně děláme", href: "#kroky" },
  trustLine: "AI SEO agentura Sniper Design · 600+ e-shopů od 2016 · Zlatý partner Upgates i Shoptet",
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

/* ============ TŘI KROKY (editorial kapitoly) ============ */

export const steps = {
  introHtml: "Tři kroky mezi vámi a <strong>citací v AI odpovědi</strong>.",
  items: [
    {
      num: "01",
      meta: "Audit · pevná cena",
      title: "Zjistíme, kde ztrácíte",
      desc: "Projdeme technickou i obsahovou část webu a nad výsledky proběhne meeting (30–60 min). Odejdete s prioritizovaným plánem — co vás u AI brzdí, co má smysl řešit a co zvládnete sami.",
      priceHtml: "<b>3 600 Kč</b> <i>· bez DPH · jediná pevně daná cena před auditem</i>",
      cta: { label: "Objednat audit", href: "/audit/", gold: true },
    },
    {
      num: "02",
      meta: "Technika · na míru",
      title: "Připravíme web, který AI přečte",
      desc: "Prověřené úpravy, které přímo ovlivňují šance na citace — na jakékoli platformě. Postup i pracnost se ale web od webu liší, proto cenu stanovíme po auditu, ne z ceníku, který by neplatil. Co přesně technická příprava obnáší, ukazují karty níže.",
      priceHtml: "<b>Cena na míru</b> <i>· rozsah i cena podle auditu</i>",
      cta: { label: "Poptat technickou přípravu", href: "#poptavka", gold: false, sluzba: "Technická příprava webu" },
    },
    {
      num: "03",
      meta: "Obsah · jednotková cena",
      title: "Dodáme odpovědi, které AI cituje",
      desc: "Texty ve formátu, ze kterého AI skládá odpovědi — krátké odpovědi, FAQ, fakta místo frází. Jediná část nabídky s garantovanou cenou předem: na platformě totiž nezávisí. Detail úrovní níže.",
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
    impact: 2,
    name: "Autorství článků",
    desc: "Každý článek má svého autora s vlastní kartou a doloženou odborností — signál důvěryhodnosti pro AI vyhledávání.",
  },
  {
    impact: 2,
    name: "Rychlost a formáty obrázků",
    desc: "Převod obrázků do WebP a základní výkonové úpravy — rychlost načítání jako základní signál kvality.",
  },
  {
    impact: 1,
    name: "Na míru vyplněný soubor llms.txt",
    desc: "Soubor s podstatnými informacemi o webu, firmě a důvěryhodnosti — přímý vstup pro AI nástroje.",
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
    "Generování citovatelného obsahu na platformě nezávisí — proto ho umíme garantovat na korunu.",
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

export const categoryTiers: { title: string; lead: string; tiers: TierDef[] } = {
  title: "Obsah kategorií",
  lead: "Úrovně na sebe navazují — vyšší vždy obsahuje vše z nižší.",
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

export const productTiers: { title: string; lead: string; tiers: TierDef[] } = {
  title: "Obsah produktů",
  lead: "Nejrychlejší cestou k citacím jsou FAQ; strukturované popisy a strojové souhrny na ně navazují.",
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

export const compareOffer = {
  name: "Srovnávací obsah „X vs Y“",
  detail:
    "Férová srovnání jsou formát, který AI cituje nejčastěji ze všech — samostatný publikační plán na rok, 24 srovnání.",
  price: "12 800 Kč",
  unit: "/ rok · pevná cena",
};

/* ============ AUDIT — NABÍDKOVÁ KARTA ============ */

export const offer = {
  titleHtml: "Jediné rozhodnutí dnes:<br /><strong>audit za 3 600 Kč.</strong>",
  lead:
    "Žádný balíček za desetitisíce naslepo. Nejdřív černé na bílém, kde stojíte — pak se rozhodnete, co řešit s námi a co si uděláte sami.",
  items: [
    "Technický i obsahový rozbor vašeho webu",
    "Online meeting 30–60 minut — vysvětlíme, co čísla znamenají",
    "Prioritizovaný plán: co má největší dopad a co počká",
    "Výstup do 5 pracovních dní",
  ],
  price: "3 600 Kč",
  vat: "bez DPH · pevná cena",
  cta: { label: "Objednat audit", href: "/audit/" },
  risk: "Bez závazku pokračovat. Plán je váš, ať ho realizuje kdokoli.",
};

/* ============ DLOUHODOBĚ + MĚŘENÍ ============ */

export const retainers = {
  eyebrow: "Dlouhodobě",
  titleHtml: "Základ a monitoring: <strong>klasické SEO + citace</strong>",
  lead:
    "AI čerpá z webů, které už umí najít Google a Bing — bez zdravého SEO základu AI viditelnost nestojí. A průběžně měříme, kde vás AI cituje a co to přináší.",
  items: [
    {
      type: "Měsíční retainer",
      name: "Klasická pravidelná SEO optimalizace",
      desc: "Klasické SEO je stále základ celé problematiky — s AI SEO se prolíná a je třeba ho budovat, aby mělo AI z čeho čerpat.",
      href: "/sluzby/dlouhodobe-seo/",
    },
    {
      type: "Měsíční retainer",
      name: "Monitoring AI viditelnosti / sledování citací",
      desc: "Zjistíme, u kterých dotazů vás ChatGPT, Perplexity nebo Google AI zmiňují — a kde místo vás doporučují konkurenci.",
      href: "/sluzby/monitoring-ai/",
    },
  ],
  measureNote:
    "Dopad měříme od začátku: GA4 (návštěvnost a konverze z AI asistentů), Search Console (imprese v AI Overviews) a specializované nástroje na citace značky.",
};

/* ============ SELF-CHECK ============ */

export const selfCheck = {
  eyebrow: "Otestujte se",
  titleHtml: "Je váš web <strong>připravený na AI?</strong>",
  lead: "Zaškrtněte, co už máte. Co zůstane prázdné, to je vaše zadání.",
  items: [
    "Vím, o čem je AI SEO — umím ho rozdělit na technickou a obsahovou část",
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
      desc: "Bez technické základny, autority a strukturovaných dat by takové články AI nevzala v potaz — nebo by ublížily i klasickému SEO.",
    },
    {
      name: "„Klasické SEO už neřešte“",
      desc: "AI vyhledávače čerpají z webů indexovaných přes Google a Bing. Bez funkčního SEO základu se k vám AI ani nedostane — řešíme obojí paralelně.",
    },
  ],
};

/* ============ FAQ ============ */

export const faqHead = {
  eyebrow: "Časté otázky",
  titleHtml: "Na co se <strong>nejčastěji ptáte</strong>",
};

export const faq = [
  {
    q: "Co je AI SEO a proč o něm přemýšlet?",
    a: "AI SEO (říká se mu také SEO pro AI, zahrnuje GEO i AEO) je optimalizace webu pro AI vyhledávání — ChatGPT, Perplexity, Google AI Mode a AI Overviews. Tyto nástroje nevracejí seznam odkazů, ale generují odpověď — a vy chcete být zdrojem, který v té odpovědi citují. Výsledku se říká AI viditelnost a dá se měřit. Klasické SEO je stále potřeba, ale samo nestačí.",
  },
  {
    q: "Kdo je poskytovatelem služeb — jaká agentura za nimi stojí?",
    a: "Služby poskytuje Sniper Design (právně CPU s.r.o., Praha) — česká AI SEO agentura specializovaná na e-commerce. Zlatý partner Upgates od roku 2016, zkušenost z více než 600 e-shopů a vlastní e-shop MEGA DETAIL, na kterém všechny postupy měří — včetně 200 000 zobrazení v AI odpovědích Googlu za dva měsíce. Fakturační údaje a reference najdete na stránce Kontakt.",
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


/* ============ POPTÁVKOVÝ FORMULÁŘ ============ */

/**
 * Poptávka služby přímo na stránce (zpětná vazba 2026-08-10: objednání
 * nesmí vést přes /kontakt/ a sniperdesign.cz). Odesílá se na stejný CF
 * Worker endpoint jako audit formulář, s typ: "sluzba".
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
    "Dlouhodobá AI SEO optimalizace",
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
  btnSecondary: { label: "Napište nám", href: "/kontakt/" },
};

/** JSON-LD katalog — jen služby s garantovanou cenou (bez DPH, CZK). */
export const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "AI SEO — služby pro viditelnost v AI vyhledávání",
  url: "https://aiseo-optimalizace.cz/sluzby/",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Audit připravenosti + edukativní meeting",
      price: "3600",
      priceCurrency: "CZK",
      offeredBy: { "@id": "https://aiseo-optimalizace.cz/#publisher" },
    },
    {
      "@type": "Offer",
      name: "Srovnávací obsah X vs Y — roční publikační plán",
      price: "12800",
      priceCurrency: "CZK",
      offeredBy: { "@id": "https://aiseo-optimalizace.cz/#publisher" },
    },
  ],
};
