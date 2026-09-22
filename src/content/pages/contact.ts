/**
 * Datový modul — kontaktní stránka /kontakt/.
 *
 * Veškerý přeložitelný obsah stránky (meta, strukturovaná data, hero, sekce
 * 01–06). Template stránku jen renderuje; struktura (grid, SVG šipky, pořadí
 * sekcí) zůstává v `src/pages/kontakt.astro`.
 *
 * PŘESKLÁDÁNO 22. 9. 2026 (pokyn uživatele). Do té doby měla stránka telefon
 * a e-mail až v poslední, šesté sekci — kdo přišel na „Kontakt“, musel projít
 * šest karet služeb, čtyři důkazy důvěryhodnosti, tři konverzní cesty a FAQ,
 * než se dostal k číslu. Obě tlačítka v hero navíc vedla jinam (Pack a web
 * agentury), takže „ozvat se“ nebylo v hero vůbec. Teď jsou kontakty v hero
 * jako první obsah stránky a zbytek vysvětluje, kdo jsme a co děláme.
 *
 * Stringy s příponou `Html` se renderují přes set:html (obsahují <strong>,
 * <a>, <span class>, &nbsp;, &mdash;…). Vložené elementy NEdostanou od Astra
 * vlastní atribut `data-astro-cid-*` → vnořené selektory v šabloně používají
 * :global() (viz CLAUDE.md § VI — set:html a stylování v rámci komponenty).
 *
 * Mutace: fork má vlastní kopii tohoto souboru s přeloženým obsahem.
 */

// jazyk-vyjimka: `(?<!updated: ")(?<!published: ")(?<!dateModified": ")\b\d{4}-\d{2}-\d{2}\b(?![^<]*>)` — schema.org vyžaduje ISO 8601 u `foundingDate` a `dateModified`; čtenáři se datum nikde v tomhle tvaru nezobrazuje
// jazyk-vyjimka: `\bcustom\w*\b(?![ ]?(Editor|Fields?|Post|Taxonom))` — `contactType: "customer support"` je hodnota ze slovníku schema.org, ne text pro čtenáře

import type { PageMeta } from "~/content/pages/_types";
import type { FaqItem } from "~/content/pages/_types";

export const meta: PageMeta = {
  title: "Kontakt na Sniper Design — AI SEO agentura pro e-shopy",
  description:
    "Telefon, e-mail a fakturační údaje agentury Sniper Design (CPU s.r.o., IČO 08125163). Stavíme e-shopy na Upgates a Shoptetu, voláme Po–Pá 10–17.",
  ogImage: "/og/kontakt.jpg",
  updated: "2026-09-22",
};

/** Breadcrumb položka stránky. */
export const breadcrumb = { label: "Kontakt", href: "/kontakt/" };

/**
 * Strukturovaná data stránky.
 *
 * Do 22. 9. 2026 tu stál samostatný `Organization` blok s `name: "CPU s.r.o."`,
 * bez `@id` a jen se šesti profily v `sameAs` — vedle globální vydavatelské entity
 * z `i18n/site.ts`, která má `name: "Sniper Design"`, `@id` a profilů osm.
 * Stránka tak emitovala **dvě Organization se stejnou adresou webu**, které si
 * odporovaly ve jméně i v seznamu profilů. Teď je to jedna entita: blok níž
 * nese totéž `@id` jako ta vydavatelská, takže se s ní sloučí, a doplňuje jen
 * to, co jí chybí (právní identita, kontaktní bod, obory). Jméno a `sameAs` se
 * záměrně neopakují — ty drží vydavatelská entita.
 */
export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://aiseo-optimalizace.cz/#publisher",
  legalName: "CPU s.r.o.",
  vatID: "CZ08125163",
  taxID: "08125163",
  /** Datum vzniku právního subjektu dle ARES; značka Sniper Design je starší (2016). */
  foundingDate: "2019-04-29",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+420 775 181 634",
    email: "aiseo-optimalizace@sniperdesign.cz",
    contactType: "customer support",
    availableLanguage: "cs",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "17:00",
    },
  },
  knowsAbout: [
    "AI SEO",
    "AI vyhledávání",
    "AI viditelnost",
    "Režim AI",
    "Přehled od AI",
    "Generative Engine Optimization",
    "Strukturovaná data",
    "Core Web Vitals",
    "Upgates",
    "Shoptet",
  ],
};

/** ContactPage — typ stránky + datum poslední revize obsahu. */
export const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://aiseo-optimalizace.cz/kontakt/#page",
  url: "https://aiseo-optimalizace.cz/kontakt/",
  name: "Kontakt na Sniper Design",
  dateModified: "2026-09-22",
  about: { "@id": "https://aiseo-optimalizace.cz/#publisher" },
};

/** Hero — značka Sniper Design a kontakty jako první obsah stránky. */
export const hero = {
  brandHref: "https://www.sniperdesign.cz/",
  brandAriaLabel: "Sniper Design — domovská stránka agentury",
  logoAlt: "Sniper Design",
  eyebrow: "Kontakt",
  titleHtml: "Ozvěte se <strong>Sniper Designu</strong>",
  leadHtml:
    'Tenhle průvodce i&nbsp;<strong>AI&nbsp;SEO Wireframe Pack</strong> vydává <a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener"><strong>Sniper Design</strong></a> &mdash; pražská agentura pro e-shopy na&nbsp;Upgates a&nbsp;Shoptetu. Zavolejte, napište, nebo si&nbsp;rovnou vyberte jednu ze&nbsp;tří cest níž.',
  /**
   * Kontaktní dlaždice. Od 22. 9. 2026 stojí v hero — dřív byly až v poslední
   * sekci stránky. `note` je doplňkový řádek pod hodnotou (hodiny, doba odezvy).
   */
  contacts: [
    {
      label: "Telefon",
      valueHtml: "+420&nbsp;775&nbsp;181&nbsp;634",
      href: "tel:+420775181634",
      note: "Po–Pá 10:00–17:00",
    },
    {
      label: "E-mail",
      valueHtml: "aiseo-optimalizace@sniperdesign.cz",
      href: "mailto:aiseo-optimalizace@sniperdesign.cz",
      note: "odpovídáme do jednoho pracovního dne",
    },
    {
      label: "Formulář agentury",
      valueHtml: "sniperdesign.cz/kontakty",
      href: "https://www.sniperdesign.cz/kontakty",
      external: true,
      note: "poptávka a domluva schůzky",
    },
  ],
  /**
   * Tři čísla, která stránku opírají o doložitelné zdroje. Partnerství tu
   * vědomě NENÍ textem — nese ho komponenta PartnerBadges hned pod tímhle
   * blokem, každý odznak s odkazem na profil u platformy (CLAUDE.md § VI).
   */
  trust: [
    {
      strongHtml: "600+ e‑shopů",
      subHtml: "na&nbsp;českém trhu od&nbsp;roku 2016",
    },
    {
      strongHtml:
        'Vlastní e‑shop <a href="https://www.megadetail.cz/" target="_blank" rel="noopener">MEGA DETAIL</a>',
      subHtml: "řešíme stejné problémy jako klienti",
    },
    {
      strongHtml: "Vlastní nástroj SYNKRO",
      subHtml: "automatizace objednávek a&nbsp;skladů",
    },
  ],
  legalHtml:
    "Provozovatel: <strong>CPU s.r.o.</strong> &middot; IČO 08125163 &middot; plátce DPH",
};

/** Sekce 01 — Jak se nám ozvat (3 cesty). */
export const paths = {
  eyebrowNum: "01",
  eyebrowHtml: "Jak se nám ozvat",
  titleHtml: 'Vyberte <span class="hl">cestu</span> podle toho, <strong>s čím potřebujete pomoct</strong>',
  cards: [
    {
      pillHtml: "Obecný dotaz",
      titleHtml: "Spolupráce, dotaz k&nbsp;obsahu nebo cokoli jiného",
      descHtml:
        "Nezávazná konzultace, dotaz na&nbsp;průvodce, nebo cokoli, co se nehodí níže. Odpovídáme do&nbsp;jednoho pracovního dne.",
      cta: {
        labelHtml: "sniperdesign.cz/kontakty&nbsp;&rarr;",
        href: "https://www.sniperdesign.cz/kontakty",
        external: true,
      },
    },
    {
      variant: "accent",
      pillVariant: "audit",
      pillHtml: "Audit",
      titleHtml: "Audit AI&nbsp;viditelnosti &mdash; přesný plán pro váš web",
      descHtml:
        "Chcete přesný plán přímo pro váš web? Projdeme ho optikou ChatGPT, Perplexity, Přehledu od&nbsp;AI a&nbsp;režimu AI. <strong>3&nbsp;600&nbsp;Kč bez DPH</strong>, výstup do&nbsp;5&nbsp;pracovních dní od&nbsp;úhrady.",
      cta: { labelHtml: "Objednat audit&nbsp;&rarr;", href: "/audit/", accent: true },
    },
    {
      variant: "featured",
      pillVariant: "pack",
      pillHtml: "AI&nbsp;SEO Wireframe Pack",
      titleHtml: "Chci to zvládnout sám",
      descHtml:
        "Hotové zadání pro sedm typů stránek e-shopu. Nejdostupnější způsob, jak si&nbsp;postup převést na&nbsp;vlastní web bez&nbsp;agentury.",
      cta: { labelHtml: "Zobrazit Pack&nbsp;&rarr;", href: "/pack/" },
      subHtml:
        'Technické potíže nebo dotaz k&nbsp;Packu: <a href="mailto:aiseo-optimalizace@sniperdesign.cz?subject=AI%20SEO%20Wireframe%20Pack%20%E2%80%94%20dotaz">aiseo-optimalizace@sniperdesign.cz</a>',
    },
  ] satisfies ContactPathCard[],
};

/** Karta v sekci 01 — Jak se nám ozvat. */
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

/**
 * Sekce 02 — Kdo jsme. Krátká odpověď 40–60 slov, kterou stránka do 22. 9. 2026
 * neměla v souvislém tvaru: kdo web provozuje, bylo rozesetých po hero leadu,
 * kartách a patičce. Tohle je jediný blok stránky s citační hodnotou pro AI.
 */
export const about = {
  eyebrowNum: "02",
  eyebrowHtml: "Kdo jsme",
  titleHtml: 'Za webem stojí <span class="hl">Sniper Design</span> &mdash; <strong>agentura pro e-shopy</strong>',
  answer:
    "aiseo-optimalizace.cz provozuje **Sniper Design** (CPU s.r.o., Praha) — agentura pro e-shopy na platformách Upgates a Shoptet, Zlatý partner obou. Od roku 2016 jsme jich postavili přes 600 a jeden provozujeme sami: [MEGA DETAIL](https://www.megadetail.cz/). Na tomhle webu učíme, jak být vidět v ChatGPT, Perplexity, [Přehledu od AI](/aio/) a [režimu AI](/ai-mode/).",
  /** Odkazy pod odpovědí — kdo obsah píše a co jsme na vlastním e-shopu naměřili. */
  linksHtml:
    'Kdo obsah píše: <a href="/autor/kamil/">Kamil ze Sniper Design</a>. Co jsme naměřili na&nbsp;vlastním e-shopu: <a href="/ai-viditelnost/">200&nbsp;000 zobrazení v&nbsp;odpovědích AI za&nbsp;dva měsíce</a>. Kolik to stojí: <a href="/blog/kolik-stoji-ai-seo/">ceny AI&nbsp;SEO v&nbsp;roce 2026</a>.',
};

/** Sekce 03 — Co děláme (6 služeb agentury + bridge na Pack). */
export const services = {
  eyebrowNum: "03",
  eyebrowHtml: "Co děláme",
  titleHtml: 'Tohle <span class="hl">děláme pro klienty</span> <strong>každý den</strong>',
  leadHtml:
    "Nejsme digitální agentura na všechno. Děláme jednu věc &mdash; e-commerce &mdash; ale do hloubky. AI éru vyhledávání řešíme jako součást každého auditu i&nbsp;implementace.",
  cards: [
    {
      href: "https://www.sniperdesign.cz/optimalizace-e-shopu",
      external: true,
      num: "01",
      titleHtml: "Optimalizace e-shopu",
      descHtml:
        "Technické SEO, struktura obsahu čitelná pro AI, strukturovaná data, mobilní použitelnost, Core Web Vitals, košík. Rozsah i&nbsp;cenu určíme podle toho, co e-shop potřebuje.",
      metaHtml: "ceník modulů na&nbsp;webu agentury",
    },
    {
      href: "/audit/",
      num: "02",
      titleHtml: "Audit AI&nbsp;viditelnosti s&nbsp;cenou předem",
      descHtml:
        "Viditelnost v&nbsp;AI dnes, technika, obsah a&nbsp;důvěryhodnost webu. Dostanete prioritní seznam úprav s&nbsp;odhadem dopadu a&nbsp;meeting 30&ndash;60 minut, kde ho projdeme spolu. Cena i&nbsp;termín předem.",
      metaHtml: "3&nbsp;600&nbsp;Kč bez DPH &middot; výstup do&nbsp;5&nbsp;pracovních dní od&nbsp;úhrady",
    },
    {
      href: "https://www.sniperdesign.cz/upgates-moduly",
      external: true,
      num: "03",
      titleHtml: "Moduly a&nbsp;úpravy pro Upgates",
      descHtml:
        "Konfigurátory produktů, akční bannery, jazykové mutace, úpravy jen pro mobil, propojení s&nbsp;API a&nbsp;externími službami. Na&nbsp;platformě jsme od&nbsp;roku 2016.",
      metaHtml: "vývoj na&nbsp;míru &middot; 10&nbsp;let na&nbsp;platformě",
    },
    {
      href: "https://www.sniperdesign.cz/doplnky-a-propojeni",
      external: true,
      num: "04",
      titleHtml: "Doplňky a&nbsp;propojení pro Shoptet",
      descHtml:
        "Hotové doplňky i&nbsp;úpravy na&nbsp;míru pro e-shopy na&nbsp;Shoptetu: účetnictví, sklad, marketplace a&nbsp;automatizace rutinní práce.",
      metaHtml: "hotová řešení &middot; i&nbsp;vývoj na&nbsp;míru",
    },
    {
      href: "https://www.sniperdesign.cz/hotova-propojeni-a-moduly-pro-e-shop-upgates-v-synkro",
      external: true,
      num: "05",
      titleHtml: "SYNKRO &mdash; automatizace bez&nbsp;kódu",
      descHtml:
        "Vlastní platforma na&nbsp;automatizaci objednávek, produktů a&nbsp;skladů. Propojí e-shop s&nbsp;účetnictvím, skladem, fakturací i&nbsp;marketplace &mdash; bez&nbsp;programování.",
      metaHtml: "vlastní platforma &middot; hotová propojení",
    },
    {
      href: "https://www.sniperdesign.cz/konzultace",
      external: true,
      num: "06",
      titleHtml: "Konzultace &mdash; jednorázová i&nbsp;dlouhodobá",
      descHtml:
        "Rychlé nasměrování pro e-shopy, které už fungují a&nbsp;chtějí růst rychleji. Strategie, architektura, automatizace, migrace, UX, marketing, ekonomika.",
      metaHtml: "2&nbsp;600&nbsp;Kč/h &middot; typicky 1&ndash;2 hodiny",
    },
  ],
  bridge: {
    textHtml:
      "Nechcete rovnou službu od&nbsp;agentury? <strong>AI&nbsp;SEO Wireframe Pack</strong> je nejdostupnější způsob, jak si&nbsp;tenhle postup převést na&nbsp;vlastní web. <strong>1&nbsp;490&nbsp;Kč jednorázově</strong>, včetně DPH, master PDF 85&nbsp;stran.",
    ctaLabel: "Zobrazit Pack",
    ctaHref: "/pack/",
  },
};

/** Sekce 04 — Proč nám můžete důvěřovat (4 důkazy). */
export const trust = {
  eyebrowNum: "04",
  eyebrowHtml: "Proč nám můžete důvěřovat",
  titleHtml: 'Reálná <span class="hl">zkušenost</span>. <strong>Ne teoretická příručka.</strong>',
  items: [
    {
      titleHtml: "Provozujeme vlastní e‑shop",
      descHtml:
        'Provozujeme vlastní e-shop <a href="https://www.megadetail.cz/" target="_blank" rel="noopener"><strong>MEGA&nbsp;DETAIL</strong></a>, takže neznáme e-commerce jen z&nbsp;prezentací klientů. Co nám to na&nbsp;něm přineslo, jsme sepsali v&nbsp;<a href="/blog/case-study-megadetail-ai-navstevnost/">případové studii</a>. Řešíme stejná témata jako vy: strukturu kategorií, produktové detailovky, důvěryhodnost, technické limity platformy i&nbsp;obsah, který má prodávat a&nbsp;být dohledatelný.',
    },
    {
      titleHtml: "Platformy známe zevnitř",
      descHtml:
        'S&nbsp;Upgates pracujeme od&nbsp;roku 2016, se&nbsp;Shoptetem také &mdash; u&nbsp;obou jsme na&nbsp;nejvyšší partnerské úrovni a&nbsp;odznaky nahoře vedou na&nbsp;profily, kde si&nbsp;to ověříte. V&nbsp;praxi to znamená, že známe limity obou platforem dřív, než na&nbsp;ně narazíte. Co se na&nbsp;obou platformách dá udělat pro AI vyhledávání, rozebírá <a href="/blog/ai-seo-upgates-shoptet/">samostatný návod</a>. Pracujeme ale i&nbsp;na&nbsp;WooCommerce, Shopify a&nbsp;webech na&nbsp;míru.',
    },
    {
      titleHtml: "Vlastní nástroje, ne&nbsp;jen klientské projekty",
      descHtml:
        'Nevyvíjíme jen weby na&nbsp;zakázku. Máme i&nbsp;vlastní platformu <strong>SYNKRO</strong> pro automatizaci e-shopových procesů &mdash; objednávky, produkty, sklady, propojení s&nbsp;účetnictvím a&nbsp;marketplace. Díky tomu řešíme nejen jednorázové úpravy, ale i&nbsp;provoz a&nbsp;škálování v&nbsp;praxi.',
    },
    {
      titleHtml: "Dohledatelná firma, veřejná práce",
      descHtml:
        'Za webem stojí <strong>CPU s.r.o.</strong> s&nbsp;veřejnými kontakty, fakturačními údaji a&nbsp;reálnou historií v&nbsp;e-commerce. Nekupujete anonymní PDF od&nbsp;neznámého autora &mdash; firma má veřejné <a href="https://www.sniperdesign.cz/reference" target="_blank" rel="noopener">reference klientských realizací</a> a&nbsp;dohledatelné sídlo v&nbsp;Praze. Proč na&nbsp;tom pro AI záleží, vysvětluje text o&nbsp;<a href="/blog/e-e-a-t-pro-ai/">E‑E‑A‑T</a>.',
    },
  ],
};

/**
 * Sekce 05 — FAQ.
 *
 * Drží se **tématu kontaktu a spolupráce** (pokyn uživatele 17. 9. 2026,
 * stejné pravidlo jako na `/audit/`).
 *
 * Do 17. 9. tu stály čtyři otázky o **Packu** („Kdo Pack vytvořil“, „Komu platím
 * a dostanu fakturu“, „Můžu se ozvat, když si nebudu vědět rady“, „Je Pack vhodný
 * pro Upgates, Shoptet i WordPress“) — tedy prodejní FAQ jiného produktu na
 * kontaktní stránce, navíc s nadpisem „Než si koupíte Pack“. Dvě z nich má
 * `/pack/` ve vlastním FAQ a otázku „komu platím“ uživatel označil za předpoklad;
 * fakturační údaje navíc stojí o sekci níž v tabulce, která je řekne líp.
 * Původní účel bloku (doložit, že za webem stojí dohledatelná firma) nese
 * sekce 04 „Dohledatelná firma“ a sekce 06 s IČO, DIČ a zápisem v rejstříku.
 */
export const faq = {
  eyebrowNum: "05",
  eyebrow: "Časté otázky",
  /** H2 s konvencí webu — span.hl + strong. */
  titleHtml: 'Než se <span class="hl">ozvete</span>: <strong>na co se ptáte nejčastěji</strong>',
  leadHtml:
    "Fakturační údaje, sídlo i zápis v&nbsp;obchodním rejstříku najdete níž v&nbsp;sekci <strong>Fakturační údaje</strong>.",
  /** Položky v mini markdownu; viditelný text i FAQPage z nich skládá komponenta Faq. */
  items: [
    {
      q: "Jak rychle se ozvete?",
      a: "Na poptávky z formulářů odpovídáme **do jednoho pracovního dne**. Telefon +420 775 181 634 bereme Po–Pá 10:00–17:00. Píšeme z adresy aiseo-optimalizace@sniperdesign.cz — pokud odpověď nevidíte, zkontrolujte složku Hromadné nebo Promo akce.",
    },
    {
      q: "Děláte i klasické SEO, nebo jen optimalizaci pro AI?",
      a: "Obojí, a v jednom plánu. Bez slušného klasického SEO se do odpovědí AI nedostanete — systémy AI čerpají z indexu vyhledávačů, takže co není dohledatelné a indexované, nemůže být citované. V měsíční správě proto běží klasické SEO i příprava pro AI vedle sebe a priority určí [audit](/audit/). Čím se disciplíny liší, rozebírá [hlavní průvodce](/seo-vs-geo-vs-aeo-vs-aio/).",
    },
    {
      q: "Pracujete i pro weby mimo Upgates a Shoptet?",
      a: "Ano. U obou platforem jsme na nejvyšší partnerské úrovni, takže je známe nejlíp, ale běžně pracujeme i na WooCommerce, WordPressu, Shopify, Webflow a na webech na míru. Platforma nerozhoduje o tom, jestli se to dá udělat — rozhoduje o ceně technické části, protože na krabicovém e-shopu je to jiná práce než v zastaralém agenturním systému.",
    },
    {
      q: "Musím si koupit audit, abyste se mnou mluvili?",
      a: "Ne. Ozvat se můžete s čímkoli — dotaz k obsahu webu, konzultace, spolupráce. [Audit AI viditelnosti](/audit/) za 3 600 Kč bez DPH doporučujeme jako první **placený** krok, protože bez něj bychom u vašeho konkrétního webu jen hádali. Nezávazně probrat situaci ale jde i bez něj. Na co se ptát každého dodavatele, sepsali jsme v [průvodci výběrem](/blog/ai-seo-agentura-sluzby/).",
    },
  ] as FaqItem[],
};

/** Sekce 06 — Fakturační údaje a sídlo. */
export const direct = {
  eyebrowNum: "06",
  eyebrowHtml: "Fakturační údaje",
  titleHtml: 'Fakturační údaje a <span class="hl">sídlo</span> &mdash; <strong>dohledatelná firma</strong>',
  contactsHeading: "Sídlo a web",
  /** Řádky dt/dd — dd smí obsahovat <a>, <br>, <span class="kontakt-direct__hint">. */
  contactRows: [
    {
      dt: "Sídlo",
      ddHtml: "Akademická 663/5<br />Malešice, 108&nbsp;00 Praha&nbsp;10",
    },
    {
      dt: "Web agentury",
      ddHtml:
        '<a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">sniperdesign.cz</a>',
    },
    {
      dt: "Vlastní e-shop",
      ddHtml:
        '<a href="https://www.megadetail.cz/" target="_blank" rel="noopener">megadetail.cz</a>',
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
    {
      dt: "Zápis",
      ddHtml:
        'Obchodní rejstřík vedený Městským&nbsp;soudem v&nbsp;Praze <span class="kontakt-direct__hint">oddíl C, vložka 313409</span>',
    },
  ],
  legalHtml:
    'Informace o&nbsp;zpracování osobních údajů (GDPR): <a href="/gdpr/">aiseo-optimalizace.cz/gdpr</a>',
};
