/**
 * Datový modul — kontaktní stránka /kontakt/.
 *
 * Veškerý přeložitelný obsah stránky (meta, Organization JSON-LD, hero,
 * sekce 01–05) — dříve inline v `src/pages/kontakt.astro`. Template stránku
 * jen renderuje; struktura (grid, SVG šipky, pořadí sekcí) zůstává v template.
 *
 * Stringy s příponou `Html` se renderují přes set:html (obsahují <strong>,
 * <a>, <span class>, &nbsp;, &mdash;…). Vložené elementy NEdostanou Astro
 * scope atribut → dotčené descendant selektory v template používají
 * :global() (viz CLAUDE.md § VI — set:html + scoped CSS).
 *
 * Mutace: fork má vlastní kopii tohoto souboru s přeloženým obsahem.
 */

import type { PageMeta } from "~/content/pages/_types";

export const meta: PageMeta = {
  title: "Kontakt — Sniper Design, agentura která provozuje aiseo-optimalizace.cz",
  description:
    "Sniper Design (CPU s.r.o.) — Zlatý Upgates partner od 2016, přes 600 e-shopů na CZ trhu, vlastní e-shop MEGA DETAIL. Specialisté na e-commerce, AI SEO, custom moduly pro Upgates a Shoptet. Kontakt, fakturační údaje, kompletní portfolio služeb.",
  ogImage: "/og/kontakt.jpg",
};

/** Breadcrumb položka stránky. */
export const breadcrumb = { label: "Kontakt", href: "/kontakt/" };

/** Organization JSON-LD — identita provozovatele (CPU s.r.o. / Sniper Design). */
export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CPU s.r.o.",
  alternateName: "Sniper Design",
  url: "https://aiseo-optimalizace.cz/",
  email: "aiseo-optimalizace@sniperdesign.cz",
  telephone: "+420 775 181 634",
  legalName: "CPU s.r.o.",
  vatID: "CZ08125163",
  taxID: "08125163",
  foundingDate: "2019-04-29",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Akademická 663/5",
    addressLocality: "Praha 10 — Malešice",
    postalCode: "10800",
    addressCountry: "CZ",
  },
  sameAs: [
    "https://www.sniperdesign.cz/",
    "https://www.megadetail.cz/",
    "https://www.youtube.com/channel/UCgg_pplVfiWhtkULnMHVpOw",
    "https://www.linkedin.com/company/sniper-design",
    "https://www.instagram.com/sniperdesign_cz/",
    "https://www.facebook.com/SniperDesign.cz",
  ],
  knowsAbout: [
    "Upgates",
    "Shoptet",
    "E-commerce",
    "AI SEO",
    "Generative Engine Optimization",
    "Schema markup",
    "Core Web Vitals",
  ],
};

/** Hero — Sniper Design brand box. */
export const hero = {
  brandHref: "https://www.sniperdesign.cz/",
  brandAriaLabel: "Sniper Design — domovská stránka agentury",
  logoAlt: "Sniper Design",
  eyebrow: "Kdo provozuje aiseo-optimalizace.cz",
  titleHtml:
    "Web stojí na 10&nbsp;letech práce s&nbsp;<strong>českými e‑shopy</strong>",
  leadHtml:
    '<strong>AI&nbsp;SEO Wireframe Pack</strong> i&nbsp;tento průvodce stojí na&nbsp;praxi <a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener"><strong>Sniper Design</strong></a> &mdash; pražské agentury specializované na <strong>e-commerce, Upgates a&nbsp;Shoptet</strong>, Zlatého partnera Upgates od&nbsp;2016. Učíme a&nbsp;prodáváme to, co denně řešíme v&nbsp;klientských auditech, implementacích a&nbsp;na&nbsp;vlastním e-shopu <a href="https://www.megadetail.cz/" target="_blank" rel="noopener">MEGA DETAIL</a>.',
  /** 4 trust položky (strong řádek + sub popisek). */
  trust: [
    {
      strongHtml: "Od 2016 na Upgates",
      subHtml: "oficiální Zlatý partner",
    },
    {
      strongHtml: "600+ e‑shopů",
      subHtml: "zkušenost z&nbsp;českého trhu",
    },
    {
      strongHtml:
        'Vlastní e‑shop <a href="https://www.megadetail.cz/" target="_blank" rel="noopener">MEGA DETAIL</a>',
      subHtml: "řešíme stejné problémy jako klienti",
    },
    {
      strongHtml: "Vlastní nástroje",
      subHtml: "automatizace (SYNKRO) a&nbsp;AI obsah (GPTfeed)",
    },
  ],
  ctaPrimary: { labelHtml: "Podívat se na AI&nbsp;SEO Wireframe Pack", href: "/pack/" },
  ctaSecondary: { label: "Otevřít sniperdesign.cz", href: "https://www.sniperdesign.cz/" },
  legalHtml:
    "Provozovatel: <strong>CPU s.r.o.</strong> &middot; IČO 08125163 &middot; plátce DPH",
};

/** Sekce 01 — Co děláme (6 služeb agentury + bridge na Pack). */
export const services = {
  eyebrowNum: "01",
  eyebrowHtml: "Co děláme",
  titleHtml: "Tohle <strong>děláme pro klienty každý den</strong>",
  leadHtml:
    "Nejsme digitální agentura na všechno. Děláme jednu věc &mdash; e-commerce &mdash; ale do hloubky. AI éru vyhledávání řešíme jako součást každého auditu i&nbsp;implementace.",
  cards: [
    {
      href: "https://www.sniperdesign.cz/optimalizace-e-shopu",
      num: "01",
      titleHtml: "AI&nbsp;SEO optimalizace e-shopu",
      descHtml:
        "Komplet balíček: technické SEO, AI-friendly struktura obsahu, strukturovaná data, mobile UX, Core Web Vitals, košík. Doručíme za 14–30 dní.",
      metaHtml: "3&nbsp;850&nbsp;– 23&nbsp;000&nbsp;Kč bez DPH",
    },
    {
      href: "https://www.sniperdesign.cz/audity",
      num: "02",
      titleHtml: "8 typů auditů s konkrétními cenami",
      descHtml:
        "Od základního SEO auditu (2&nbsp;500&nbsp;Kč) přes Core Web Vitals a&nbsp;UX po komplexní SEO audit (22&nbsp;900&nbsp;Kč). Žádné „individuální nabídky\", konkrétní cena a&nbsp;termín předem.",
      metaHtml: "od 2&nbsp;500&nbsp;Kč &middot; výstup do&nbsp;14&nbsp;dnů",
    },
    {
      href: "https://www.sniperdesign.cz/co-delame",
      num: "03",
      titleHtml: "Custom moduly pro Upgates a&nbsp;Shoptet",
      descHtml:
        "Konfigurátory produktů, akční bannery, jazykové mutace, mobile-only úpravy, propojení s&nbsp;API a&nbsp;externími službami. Zlatý Upgates partner od&nbsp;2016.",
      metaHtml: "custom development &middot; 10&nbsp;let na&nbsp;platformě",
    },
    {
      href: "https://www.sniperdesign.cz/syncron",
      num: "04",
      titleHtml: "SYNKRO &mdash; automatizace bez kódu",
      descHtml:
        "Vlastní platforma na automatizaci objednávek, produktů a&nbsp;skladů v&nbsp;Shoptet i&nbsp;Upgates. Multistore management, integrace s&nbsp;Heureka, SuperFaktura, Pohoda, Balíkobot.",
      metaHtml: "SaaS produkt &middot; bez nutnosti programování",
    },
    {
      href: "https://www.sniperdesign.cz/",
      num: "05",
      titleHtml: "GPTfeed &mdash; AI generování obsahu",
      descHtml:
        "AI generování produktových popisů a&nbsp;kategoriálních textů se SEO logikou a&nbsp;důrazem na&nbsp;srozumitelnou strukturu pro&nbsp;uživatele i&nbsp;AI vyhledávání.",
      metaHtml: "vlastní AI nástroj &middot; SEO-řízený obsah",
    },
    {
      href: "/kontakt/",
      num: "06",
      titleHtml: "Konzultace &mdash; jednorázová i&nbsp;dlouhodobá",
      descHtml:
        "Rychlé nasměrování pro e-shopy, které už fungují a&nbsp;chtějí růst rychleji. Strategie, architektura, automatizace, migrace, UX, marketing, ekonomika.",
      metaHtml: "jednorázový call nebo dlouhodobá spolupráce",
    },
  ],
  bridge: {
    textHtml:
      "Pokud nechcete rovnou službu od&nbsp;agentury, <strong>AI&nbsp;SEO Wireframe Pack</strong> je nejdostupnější způsob, jak si&nbsp;tenhle postup převést na&nbsp;vlastní web. <strong>1&nbsp;490&nbsp;Kč jednorázově</strong>, master PDF 85&nbsp;stran.",
    ctaLabel: "Zobrazit Pack",
    ctaHref: "/pack/",
  },
};

/** Sekce 02 — Proč nám můžete důvěřovat (4 proof points). */
export const trust = {
  eyebrowNum: "02",
  eyebrowHtml: "Proč nám můžete důvěřovat",
  titleHtml: "Reálná zkušenost. <strong>Ne teoretická příručka.</strong>",
  items: [
    {
      titleHtml: "Provozujeme vlastní e‑shop",
      descHtml:
        'Provozujeme vlastní e-shop <a href="https://www.megadetail.cz/" target="_blank" rel="noopener"><strong>MEGA&nbsp;DETAIL</strong></a>, takže neznáme e-commerce jen z&nbsp;prezentací klientů. Řešíme stejná témata jako vy: strukturu kategorií, produktové detailovky, důvěryhodnost, technické limity platformy i&nbsp;obsah, který má prodávat a&nbsp;být dohledatelný.',
    },
    {
      titleHtml: "Zlatý partner Upgates od&nbsp;2016",
      descHtml:
        "S&nbsp;Upgates spolupracujeme od&nbsp;roku 2016 a&nbsp;máme Zlatý partner status. V&nbsp;praxi to znamená, že platformu známe do&nbsp;hloubky a&nbsp;Upgates nás vede mezi doporučenými dodavateli. Pro Shoptet máme Gold partner status.",
    },
    {
      titleHtml: "Vlastní nástroje, ne&nbsp;jen klientské projekty",
      descHtml:
        "Nevyvíjíme jen weby na&nbsp;zakázku. Máme i&nbsp;vlastní nástroje: <strong>SYNKRO</strong> pro automatizaci e-shopových procesů a&nbsp;<strong>GPTfeed</strong> pro práci s&nbsp;produktovým obsahem. Díky tomu řešíme nejen jednorázové úpravy, ale i&nbsp;provoz a&nbsp;škálování v&nbsp;praxi.",
    },
    {
      titleHtml: "Dohledatelná firma, veřejná práce",
      descHtml:
        'Za webem stojí <strong>CPU s.r.o.</strong> s&nbsp;veřejnými kontakty, fakturačními údaji a&nbsp;reálnou historií v&nbsp;e-commerce. Nekupujete anonymní PDF od&nbsp;neznámého autora &mdash; firma má veřejné <a href="https://www.sniperdesign.cz/reference" target="_blank" rel="noopener">reference 43&nbsp;klientských realizací</a> a&nbsp;dohledatelné sídlo v&nbsp;Praze.',
    },
  ],
};

/** Karta v sekci 03 — Jak se nám ozvat. */
export interface ContactPathCard {
  /** Varianta karty: undefined (základní) | "featured" (Pack) | "accent" (Audit). */
  variant?: "featured" | "accent";
  /** Varianta pill štítku: undefined | "pack" | "audit". */
  pillVariant?: "pack" | "audit";
  pillHtml: string;
  titleHtml: string;
  descHtml: string;
  cta: {
    labelHtml: string;
    href: string;
    /** Externí odkaz (target=_blank rel=noopener). */
    external?: boolean;
    /** Akcentová varianta CTA odkazu. */
    accent?: boolean;
  };
  /** Volitelný sub řádek pod CTA (featured karta). */
  subHtml?: string;
}

/** Sekce 03 — Jak se nám ozvat (3 cesty). */
export const paths = {
  eyebrowNum: "03",
  eyebrowHtml: "Jak se nám ozvat",
  titleHtml: "Vyberte, s čím <strong>potřebujete pomoct</strong>",
  cards: [
    {
      pillHtml: "Obecný dotaz",
      titleHtml: "Spolupráce, dotaz k&nbsp;obsahu nebo cokoli jiného",
      descHtml:
        "Nezávazná konzultace, dotaz na&nbsp;průvodce, nebo cokoli, co se nehodí níže. Odpovídáme do&nbsp;24&nbsp;hodin v&nbsp;pracovní dny.",
      cta: {
        labelHtml: "sniperdesign.cz/kontakt&nbsp;&rarr;",
        href: "https://www.sniperdesign.cz/kontakt",
        external: true,
      },
    },
    {
      variant: "featured",
      pillVariant: "pack",
      pillHtml: "AI&nbsp;SEO Wireframe Pack",
      titleHtml: "Detail produktu, n&aacute;kup nebo pomoc",
      descHtml:
        "Ještě zvažujete nákup, nebo už Pack máte? Tady najdete detail produktu, informace k&nbsp;fakturaci i&nbsp;pomoc s&nbsp;použitím.",
      cta: { labelHtml: "Zobrazit Pack&nbsp;&rarr;", href: "/pack/" },
      subHtml:
        'Technické potíže nebo dotaz: <a href="mailto:aiseo-optimalizace@sniperdesign.cz?subject=AI%20SEO%20Wireframe%20Pack%20%E2%80%94%20dotaz">aiseo-optimalizace@sniperdesign.cz</a>',
    },
    {
      variant: "accent",
      pillVariant: "audit",
      pillHtml: "Audit",
      titleHtml: "AI&nbsp;SEO audit &mdash; přesný plán pro váš web",
      descHtml:
        "Chcete přesný plán přímo pro váš web? Audit je <strong>navazující krok po&nbsp;Packu</strong> &mdash; nebo samostatná volba, pokud to nechcete řešit sami. 3&nbsp;600&nbsp;Kč, výstup do&nbsp;5&nbsp;dní.",
      cta: { labelHtml: "Objednat audit&nbsp;&rarr;", href: "/audit/", accent: true },
    },
  ] satisfies ContactPathCard[],
};

/** Sekce 04 — FAQ (scam-prevention pojistka). */
export const faq = {
  eyebrowNum: "04",
  eyebrowHtml: "Časté otázky",
  titleHtml: "Než si <strong>koupíte Pack</strong>",
  leadHtml:
    "Pokud jste si potřebovali hlavně ověřit, komu byste za&nbsp;Pack platili: provozovatelem je <strong>CPU s.r.o.</strong>, běžně dohledatelná česká firma za&nbsp;agenturou Sniper Design.",
  items: [
    {
      qHtml: "Kdo Pack vytvořil?",
      aHtml:
        "Tým Sniper Design &mdash; lidé, kteří dělají SEO, UX a&nbsp;strukturu e-shopů jako placené zakázky pro klienty. Pack vychází z&nbsp;reálných úprav, ne&nbsp;z&nbsp;teoretických návodů.",
    },
    {
      qHtml: "Komu platím a&nbsp;dostanu fakturu?",
      aHtml:
        'Platíte <strong>CPU s.r.o.</strong> (IČO 08125163, plátce DPH). Faktura dorazí samostatně po&nbsp;platbě. Pokud nemáte fakturu do&nbsp;24&nbsp;hodin, napište na&nbsp;<a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a>.',
    },
    {
      qHtml: "Můžu se ozvat, když si&nbsp;nebudu vědět rady?",
      aHtml:
        'Ano. Pack obsahuje detailní kapitolu „Aplikace na&nbsp;váš web\" se&nbsp;všemi postupy. Pokud i&nbsp;tak narazíte, pište na&nbsp;<a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a> &mdash; odpovídáme do&nbsp;24&nbsp;hodin v&nbsp;pracovní dny.',
    },
    {
      qHtml: "Je Pack vhodný pro Upgates, Shoptet i&nbsp;WordPress?",
      aHtml:
        "Ano. Pack je platformově neutrální &mdash; wireframy, texty a&nbsp;ukázky strukturovaných dat aplikujete na&nbsp;libovolný systém. Kapitola „Aplikace na&nbsp;váš web\" má samostatný checklist pro Upgates, Shoptet, WordPress i&nbsp;custom weby.",
    },
  ],
};

/** Sekce 05 — Přímé kontakty + fakturace. */
export const direct = {
  eyebrowNum: "05",
  eyebrowHtml: "Přímé kontakty a&nbsp;fakturace",
  titleHtml: "Telefon, e-mail, <strong>fakturační údaje</strong>",
  contactsHeading: "Přímé kontakty",
  /** Řádky dt/dd — dd smí obsahovat <a>, <br>, <span class="kontakt-direct__hint">. */
  contactRows: [
    {
      dt: "Telefon",
      ddHtml:
        '<a href="tel:+420775181634">+420&nbsp;775&nbsp;181&nbsp;634</a> <span class="kontakt-direct__hint">Po–Pá 9:00–17:00</span>',
    },
    {
      dt: "E-mail",
      ddHtml:
        '<a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a>',
    },
    {
      dt: "Web agentury",
      ddHtml:
        '<a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">sniperdesign.cz</a>',
    },
    {
      dt: "Sídlo",
      ddHtml: "Akademická 663/5<br />Malešice, 108&nbsp;00 Praha&nbsp;10",
    },
  ],
  billingHeading: "Fakturační údaje",
  billingRows: [
    { dt: "Název", ddHtml: "CPU s.r.o." },
    { dt: "IČO", ddHtml: "08125163" },
    {
      dt: "DIČ",
      ddHtml: 'CZ08125163 <span class="kontakt-direct__hint">(plátce DPH)</span>',
    },
    { dt: "Zápis", ddHtml: "Obchodní rejstřík vedený Městským&nbsp;soudem v&nbsp;Praze" },
  ],
  legalHtml:
    'Informace o&nbsp;zpracování osobních údajů (GDPR): <a href="/gdpr/">aiseo-optimalizace.cz/gdpr</a>',
};
