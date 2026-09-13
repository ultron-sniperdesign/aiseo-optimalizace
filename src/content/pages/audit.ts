/**
 * Datový modul — prodejní landing /audit/ (AI SEO audit, 3 600 Kč).
 *
 * Fáze 0 refaktor: veškerý dříve inline obsah `audit/index.astro` je tady.
 * Template stránku jen renderuje (styly + struktura formuláře + inline JS
 * zůstávají v .astro). Text s inline HTML i &nbsp; se renderuje přes set:html.
 *
 * FAQ má JEDEN zdroj (`faq`, mini markdown): viditelný text i FAQPage JSON-LD
 * z něj skládá sdílená komponenta Faq. Do 13. 9. 2026 tu byly dvě ručně
 * držené kopie (HTML pro stránku a prostý text pro schéma) a 6 z 10 odpovědí
 * se obsahově rozešlo — proto teď jen jedna.
 *
 * Mutace: EN/DE/PL fork má vlastní kopii s překladem.
 */

import type { SectionHead } from "~/content/pages/_types";
import type { FaqItem } from "~/content/pages/_types";

export const meta = {
  title: "AI SEO audit od Sniper Design — přesný plán pro váš web, 3 600 Kč",
  description:
    "AI SEO audit od Sniper Design za 3 600 Kč bez DPH. Projdeme váš konkrétní web v technice, obsahu a důvěryhodnosti. Prioritní seznam úprav s odhadem dopadu + 60min konzultace. Výstup do 5 pracovních dní. Zlatý Upgates partner od 2016, 600+ e-shopů.",
};

/** Service schema.org JSON-LD. */
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI SEO audit",
  provider: {
    "@type": "Organization",
    name: "CPU s.r.o.",
    alternateName: "Sniper Design",
    url: "https://www.sniperdesign.cz/",
    email: "aiseo-optimalizace@sniperdesign.cz",
    telephone: "+420 775 181 634",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Akademická 663/5",
      addressLocality: "Praha 10 — Malešice",
      postalCode: "10800",
      addressCountry: "CZ",
    },
  },
  areaServed: { "@type": "Country", name: "Czech Republic" },
  description:
    "Komplexní audit webu pro AI éru vyhledávání. Technický audit (Core Web Vitals, schema markup), obsahový audit (pillar coverage, on-page) a důvěryhodnost (E-E-A-T, NAP). Prioritní seznam úprav s odhadem dopadu + 60min konzultace s týmem. Výstup do 5 pracovních dní.",
  offers: {
    "@type": "Offer",
    price: "3600",
    priceCurrency: "CZK",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "3600",
      priceCurrency: "CZK",
      valueAddedTaxIncluded: false,
    },
    availability: "https://schema.org/InStock",
    url: "https://aiseo-optimalizace.cz/audit/",
  },
};


/** HERO — copy (levý sloupec). */
export const hero = {
  brandLabel: "Sniper Design",
  eyebrow: "AI SEO audit od Sniper Design",
  title:
    "AI už cituje něčí web. <strong>Audit ukáže, proč ne&nbsp;ten&nbsp;váš.</strong>",
  lead: "Projdeme váš konkrétní web v <strong>technice, obsahu a&nbsp;důvěryhodnosti</strong> a&nbsp;dáme vám prioritní seznam úprav s&nbsp;odhadem dopadu na&nbsp;vaši <strong>AI viditelnost</strong> plus <strong>60 minutovou konzultaci</strong>. Výstup do&nbsp;<strong>5&nbsp;pracovních dní</strong>.",
  outcomes: [
    "<strong>Prioritní seznam úprav</strong>, ne obecný audit bez pořadí",
    "U&nbsp;každého bodu uvidíte <strong>dopad × náročnost</strong>, abyste věděli, co řešit jako první",
    "Výstup přizpůsobíme vaší <strong>platformě a&nbsp;sortimentu</strong> a&nbsp;projdeme ho s&nbsp;vámi na&nbsp;60min konzultaci",
  ],
  audience:
    "<strong>Pro koho</strong>: e-shopy a firemní weby, kde organická viditelnost přímo ovlivňuje poptávky nebo&nbsp;tržby. Největší smysl dává u&nbsp;webů s&nbsp;obratem 1+&nbsp;mil.&nbsp;Kč ročně.",
  legal:
    "Provozovatel: <strong>CPU s.r.o.</strong> &middot; IČO 08125163 &middot; plátce DPH",
};

/** HERO — objednávkový formulář (pravý sloupec). Text; struktura zůstává v .astro. */
export const heroForm = {
  eyebrowPill: "Objednávka",
  eyebrowText: "výstup do 5 pracovních dní",
  price: "3&nbsp;600&nbsp;Kč",
  priceDetail: "bez DPH (s&nbsp;DPH 4&nbsp;356&nbsp;Kč)",
  reframe:
    "Kupujete <strong>zkrácení rozhodování</strong> &mdash; místo týdnů domýšlení dostanete priority připravené k&nbsp;předání copywriterovi, vývojáři nebo internímu&nbsp;týmu.",
  labelJmeno: "Vaše jméno",
  phJmeno: "Honza Novák",
  labelEmail: "E-mail",
  phEmail: "honza@vas-eshop.cz",
  labelUrl: "URL webu, který chcete auditovat",
  phUrl: "https://vas-eshop.cz",
  labelPlatforma: "Platforma webu",
  options: [
    { value: "", label: "— vyberte —" },
    { value: "Upgates", label: "Upgates" },
    { value: "Shoptet", label: "Shoptet" },
    { value: "WooCommerce", label: "WooCommerce" },
    { value: "WordPress", label: "WordPress" },
    { value: "Webflow", label: "Webflow" },
    { value: "Shopify", label: "Shopify" },
    { value: "Custom / vlastní", label: "Custom / vlastní řešení" },
    { value: "Nevím", label: "Nevím / poradíte" },
  ],
  labelCil: "Hlavní cíl auditu",
  hintCil: "(volitelně, ale pomůže nám)",
  phCil:
    "např. pokles z Googlu, slabá viditelnost, příprava na rebrand, lepší citace v AI nástrojích…",
  gdprLabel:
    'Souhlasím se&nbsp;<a href="/gdpr/">zpracováním osobních údajů</a> za&nbsp;účelem zpracování této poptávky.',
  submitLabel: "Objednat audit za 3&nbsp;600&nbsp;Kč",
  legal:
    "Odesláním si&nbsp;<strong>závazně rezervujete zpracování auditu za&nbsp;3&nbsp;600&nbsp;Kč bez DPH</strong>. Do&nbsp;24&nbsp;hodin potvrdíme rozsah, vystavíme fakturu a&nbsp;po&nbsp;úhradě začínáme. Výstup do&nbsp;5&nbsp;pracovních dní od&nbsp;platby. Údaje použijeme pro vyřízení této objednávky a&nbsp;komunikaci k&nbsp;auditu &mdash; bez&nbsp;samostatného souhlasu vás nezařadíme do&nbsp;marketingových e&#8209;mailů.",
};

/** URGENCY blok (Proč to řešit teď). */
export const urgency = {
  pill: "Proč to řešit teď",
  title:
    "<strong>Každý měsíc čekání</strong> obsazuje konkurence místo, které mohlo patřit&nbsp;vám",
  cards: [
    {
      num: "01",
      title: "AI už odpovídá za vyhledávač",
      desc: "ChatGPT, Perplexity i&nbsp;Google AI&nbsp;Overviews dnes odpovídají zákazníkům přímo &mdash; místo klasického seznamu odkazů. Klikne se jen na&nbsp;to, co AI vybere jako zdroj.",
    },
    {
      num: "02",
      title: "Bez signálů AI vybírá někoho jiného",
      desc: "Pokud váš web nemá jasné krátké odpovědi, strukturovaná data a&nbsp;signály důvěryhodnosti, AI sáhne pro&nbsp;zdroj, který je má. Často konkurence, která to&nbsp;začala řešit dřív.",
    },
    {
      num: "03",
      title: "Každý měsíc čekání = ztracené pozice",
      desc: "Témata a&nbsp;dotazy, na&nbsp;které AI dnes odpovídá, někdo obsadí. Pozdější příchod znamená přepisovat víc obsahu, dohánět autoritu, soutěžit o&nbsp;už zacementované citace.",
    },
  ],
};

/** Sekce 01 — Co je v auditu. */
export const whatHead: SectionHead = {
  eyebrowNum: "01",
  eyebrow: "Co je v auditu",
  title:
    "Co v auditu zkontrolujeme &mdash; <strong>a co dostanete jako výstup</strong>",
  lead: "Používáme stejný postup jako u&nbsp;klientských webů, které dlouhodobě spravujeme na&nbsp;Upgates, Shoptetu i&nbsp;vlastních řešeních. <strong>Ne generický checklist</strong>, ale audit přizpůsobený vašemu webu a&nbsp;platformě.",
};

export const impactFrame = {
  eyebrow: "Každý nález rozdělíme podle dopadu",
  items: [
    {
      mod: "crit",
      label: "Kritické brzdy",
      desc: "Věci, které brání indexaci, čitelnosti nebo&nbsp;důvěryhodnosti. Řešit ihned.",
    },
    {
      mod: "quick",
      label: "Rychlé výhry",
      desc: "Úpravy, které lze nasadit bez&nbsp;velkého vývoje &mdash; nejlepší poměr dopad&nbsp;/&nbsp;effort.",
    },
    {
      mod: "strat",
      label: "Strategické úpravy",
      desc: "Obsah, struktura, autorita &mdash; budují AI viditelnost dlouhodobě.",
    },
  ],
};

export const layers = [
  {
    num: "01",
    tone: "seo",
    title: "Technika",
    items: [
      "Core Web Vitals (rychlost, stabilita, interaktivita)",
      "Mobile UX a&nbsp;čitelnost na&nbsp;telefonu",
      "Indexace v&nbsp;Google &mdash; co Google vidí, co ne",
      "Strukturovaná data (Product, FAQPage, Article, drobečková navigace)",
      "robots.txt a&nbsp;přístup crawlerů &mdash; jestli si vyhledávače a&nbsp;AI nástroje mohou správně přečíst to, co chcete",
      "Sitemap, canonical, noindex &mdash; technické pokyny pro vyhledávače",
    ],
  },
  {
    num: "02",
    tone: "geo",
    title: "Obsah",
    items: [
      "Pokrytí hlavních témat oboru &mdash; jestli web odpovídá na&nbsp;důležité otázky zákazníků",
      "On-page optimalizace klíčových stránek (homepage, top kategorie, top produkty)",
      "Krátké, jasné odpovědi u&nbsp;klíčových témat &mdash; aby měl Google i&nbsp;AI nástroje co citovat",
      "Časté dotazy se&nbsp;strukturovanými daty (FAQPage)",
      "Content gaps proti konkurenci &mdash; co konkurence pokrývá a&nbsp;vy ne",
      "Prolinkování mezi stránkami (hub-and-spoke)",
    ],
  },
  {
    num: "03",
    tone: "aeo",
    title: "Důvěryhodnost",
    items: [
      "Signály důvěryhodnosti &mdash; kdo za&nbsp;obsahem stojí, jak je ověřitelný a&nbsp;proč mu vyhledávače věřit (E-E-A-T)",
      "Kontaktní údaje (NAP) konzistence napříč webem a&nbsp;katalogy",
      "Backlink profil &mdash; odkazy z&nbsp;jiných webů, které na&nbsp;vás vedou",
      "Schema Organization a&nbsp;strukturovaná data pro místní firmu",
      "Reputace v&nbsp;Heuréce, Zboží, Google reviews",
    ],
  },
];

export const visibility = {
  pill: "★ Součástí auditu",
  title:
    "AI Visibility Check &mdash; <strong>jste viditelní v&nbsp;AI&nbsp;odpovědích?</strong>",
  desc: "Ověříme, jestli se&nbsp;vaše značka objevuje v&nbsp;odpovědích ChatGPT, Perplexity a&nbsp;Google AI&nbsp;Overviews u&nbsp;dotazů, které souvisí s&nbsp;vaším sortimentem nebo službou &mdash; a&nbsp;jestli AI nástroje místo vás nezmiňují&nbsp;konkurenci.",
};

export const deliverable = {
  pill: "★ Výstup",
  title: "Co konkrétně dostanete jako <strong>audit dokument</strong>",
  lead: "Strukturovaný dokument (PDF / Notion / Google Doc &mdash; podle vaší preference), který obsahuje:",
  items: [
    {
      label: "Kritická zjištění",
      desc: "Co teď nejvíc brzdí viditelnost ve&nbsp;vyhledávačích a&nbsp;AI nástrojích.",
    },
    {
      label: "Prioritní tabulka úprav",
      desc: "Každá položka: dopad &times; náročnost &times; kdo by ji&nbsp;měl řešit (vývojář / copywriter / interní tým).",
    },
    {
      label: "Technické problémy",
      desc: "Konkrétní URL, screenshot/citace, doporučená oprava. Připravené k&nbsp;předání vývojáři.",
    },
    {
      label: "Obsahové mezery proti konkurenci",
      desc: "Témata a&nbsp;dotazy, kde konkurence pokrývá a&nbsp;vy ne &mdash; s&nbsp;odhadem priority.",
    },
    {
      label: "Doporučení pro&nbsp;AI citovatelnost",
      desc: "Konkrétní úpravy textu, strukturovaných dat a&nbsp;signálů důvěryhodnosti, aby vás AI začala citovat.",
    },
    {
      label: "30denní akční plán",
      desc: "Co řešit první týden, druhý, třetí, čtvrtý &mdash; v&nbsp;pořadí, které dává smysl.",
    },
    {
      label: "60min konzultace s&nbsp;týmem",
      desc: "Projdeme závěry, dáme prostor na&nbsp;otázky, doladíme priority dle&nbsp;vašich možností.",
    },
  ],
};

/** Sekce 02 — Proč nám můžete důvěřovat. */
export const trustHead: SectionHead = {
  eyebrowNum: "02",
  eyebrow: "Proč nám můžete důvěřovat",
  title: "Reálná zkušenost <strong>z&nbsp;denodenní praxe</strong>",
};

export const trustItems = [
  {
    title: "Praxe z&nbsp;600+ e-shopů na&nbsp;CZ trhu",
    body: 'Za roky praxe jsme pracovali pro <strong>600+ e-shopů</strong> na&nbsp;CZ trhu. Na&nbsp;webu agentury najdete <a href="https://www.sniperdesign.cz/reference" target="_blank" rel="noopener">43&nbsp;veřejných referencí</a>, další jsou neveřejné. Nekupujete audit od&nbsp;anonymního freelancera, ale od&nbsp;týmu s&nbsp;dlouhodobou praxí v&nbsp;e-commerce.',
  },
  {
    title: "Zlatý partner Upgates a&nbsp;Gold partner Shoptet",
    body: "Jsme oficiální Zlatý partner Upgates (od&nbsp;roku&nbsp;2016) a&nbsp;Gold partner Shoptet. Známe limity i&nbsp;možnosti obou platforem, takže <strong>doporučení v&nbsp;auditu nejsou odtržená od&nbsp;reality implementace</strong>.",
  },
  {
    title: "Ověřujeme i&nbsp;na&nbsp;vlastním e-shopu",
    body: 'Doporučení nebereme z&nbsp;prezentací. Ověřujeme je i&nbsp;na&nbsp;vlastním e-shopu <a href="https://www.megadetail.cz/" target="_blank" rel="noopener"><strong>MEGA&nbsp;DETAIL</strong></a>, kde řešíme stejná témata jako naši klienti: obsah, výkon, UX i&nbsp;viditelnost.',
  },
  {
    title: "Vlastní nástroje pro e-commerce",
    body: "Nevnímáme web jen optikou SEO checklistu. Díky vlastním nástrojům (<strong>SYNKRO</strong> pro automatizaci a&nbsp;<strong>GPTfeed</strong> pro obsah) a&nbsp;provozu e-shopů řešíme i&nbsp;to, co je reálně udržitelné v&nbsp;provozu: obsahové workflow, feedy a&nbsp;škálování úprav.",
  },
];

export const examples = {
  title: "Co typicky nacházíme v&nbsp;reálných auditech",
  items: [
    "<strong>Upgates e-shop:</strong> chybějící strukturovaná data u&nbsp;klíčových kategorií + nejasné krátké odpovědi na&nbsp;nákupní dotazy &mdash; konkurence je obsadila v&nbsp;AI Overviews dřív.",
    "<strong>Shoptet e-shop:</strong> obsahové mezery proti konkurenci v&nbsp;top kategoriích, žádná FAQ se&nbsp;strukturou pro AI citace, chybí E&#8209;E&#8209;A&#8209;T signály u&nbsp;autorů obsahu.",
    '<strong>Firemní web (služby):</strong> NAP nekonzistence napříč katalogy, žádný schema Organization, brand mentions jen na&nbsp;vlastní doméně &mdash; ChatGPT a&nbsp;Perplexity o&nbsp;značce „nevědí".',
  ],
};

/** Sekce 03 — Pack vs. audit. */
export const compareHead: SectionHead = {
  eyebrowNum: "03",
  eyebrow: "Pack vs. audit",
  title: "Co je pro vás <strong>vhodnější</strong>?",
};

export const bridge =
  "<strong>Nejste si jistí, jestli stačí Pack?</strong> Pokud váš web generuje tržby a&nbsp;nechcete ztrácet týdny samostatnou analýzou, <strong>audit je správná volba</strong> &mdash; dostanete přesný plán pro&nbsp;váš konkrétní web a&nbsp;sortiment, nikoli obecný framework. Neplatíte za&nbsp;objem textu, ale za&nbsp;prioritizaci, kontext a&nbsp;konzultaci.";

export const compare = [
  {
    pillMod: "pack",
    pill: "Pack",
    title: "Když chcete <strong>řešit věci sami</strong>",
    price: "1&nbsp;490&nbsp;Kč &middot; jednorázově",
    items: [
      "Máte čas si&nbsp;doporučení sami vyhodnotit a&nbsp;převést do&nbsp;praxe",
      "Chcete obecný recept pro 7&nbsp;typů stránek webu (homepage, produkt, kategorie, blog, prodejní landing, kontakt)",
      "Hodí se i&nbsp;agenturám / copywriterům pro klientské weby",
      "Vhodné jako pracovní podklad pro vlastní úpravy nebo zadání pro tým",
      "Master PDF 85&nbsp;stran + 9&nbsp;jednotlivých kapitol",
    ],
    ctaLabel: "Zobrazit Pack&nbsp;&rarr;",
    ctaHref: "/pack/",
    featured: false,
    ctaAccent: false,
  },
  {
    pillMod: "audit",
    pill: "Audit",
    title: "Když chcete <strong>plán pro váš konkrétní web</strong>",
    price: "3&nbsp;600&nbsp;Kč bez DPH &middot; jednorázově",
    items: [
      "Chcete <strong>přesnou analýzu vašeho webu</strong>, ne&nbsp;obecný framework",
      "Potřebujete <strong>prioritní seznam úprav</strong> &mdash; co změnit jako první, proč a&nbsp;jaký to bude mít dopad",
      "Chcete <strong>konzultaci s&nbsp;týmem</strong>, kde si projdete závěry osobně",
      "Nemáte čas / chuť projít Pack vlastní silou a&nbsp;preferujete hotový plán",
      "Výstup do&nbsp;5&nbsp;pracovních dní + 60min konzultace",
    ],
    ctaLabel: "Chci konkrétní plán pro&nbsp;svůj web&nbsp;&rarr;",
    ctaHref: "#objednat",
    featured: true,
    ctaAccent: true,
  },
];

/** Sekce 04 — FAQ (10 položek, HTML). */
export const faqHead: SectionHead = {
  eyebrowNum: "04",
  eyebrow: "Časté otázky",
  title: "Než si <strong>objednáte audit</strong>",
};

export const faq: FaqItem[] = [
  {
    q: "Pro koho je audit určený?",
    a: "Pro provozovatele e-shopů (Upgates, Shoptet, WooCommerce) a firemních webů, kteří chtějí **konkrétní plán**, co změnit pro AI éru vyhledávání. Hodí se pro weby s ročním obratem 1+ mil. Kč a s ambicí být citovaný v ChatGPT, Perplexity a Google AI Overviews.",
  },
  {
    q: "Co když nemám AI SEO Wireframe Pack?",
    a: "Pack i audit jsou samostatné produkty. Pack je framework pro DIY úpravy (1 490 Kč), audit je hands-on analýza vašeho webu se 60min konzultací. **Audit můžete objednat samostatně** — nepotřebujete předem Pack.",
  },
  {
    q: "Jak dlouho audit trvá?",
    a: "Výstup audit dokumentu **do 5 pracovních dní** od potvrzení objednávky. Po vyplnění formuláře vás kontaktujeme do 24 hodin v pracovní dny s upřesněním a fakturou. Po platbě začneme auditovat.",
  },
  {
    q: "Co konkrétně dostanu jako výstup?",
    a: "Audit dokument (PDF nebo Notion / Google Doc, dle preference) se třemi vrstvami analýzy + **prioritní seznam úprav** s odhadem dopadu a effortu + **60min online konzultaci** s naším týmem.",
  },
  {
    q: "Komu platím a dostanu fakturu?",
    a: "Platíte **CPU s.r.o.** (IČO 08125163, plátce DPH). Faktura je vystavena samostatně po potvrzení objednávky. Cena **3 600 Kč bez DPH** (s DPH = 4 356 Kč).",
  },
  {
    q: "Co audit nezahrnuje?",
    a: "Audit je **samostatný akční plán** — obsahuje analýzu, prioritizaci a konzultaci. **Implementaci si můžete udělat interně, předat ji své agentuře nebo vývojáři, nebo si od nás nechat nacenit navazující úpravy.** Nejste vázaní na naši realizaci.",
  },
  {
    q: "Mohu objednávku zrušit?",
    a: "Ano, **do potvrzení rozsahu a vystavení faktury** bez problémů. Jakmile je rozsah potvrzen a audit zahájen, jde o službu připravovanou na míru a storno řešíme individuálně podle rozpracovanosti.",
  },
  {
    q: "Má smysl audit, když už máme SEO specialistu nebo agenturu?",
    a: "Ano, pokud chcete **nezávislý pohled** na připravenost webu pro AI vyhledávání. Audit nenahrazuje dlouhodobou SEO správu — dává vašemu týmu konkrétní priority, které může zapracovat. Výstup můžete předat internímu týmu, copywriterovi, vývojáři nebo stávající agentuře.",
  },
  {
    q: "Co když audit neodhalí zásadní problém?",
    a: "I to je užitečný výsledek. Získáte **potvrzení**, že technika, obsah a důvěryhodnost nejsou hlavní brzda, a doporučíme, kam zaměřit další úsilí. V praxi ale ve většině auditů nacházíme kombinaci technických, obsahových i důvěryhodnostních rezerv.",
  },
  {
    q: "Můžu se na něco zeptat předem?",
    a: "Samozřejmě. Napište na [aiseo-optimalizace@sniperdesign.cz](mailto:aiseo-optimalizace@sniperdesign.cz) nebo zavolejte [+420 775 181 634](tel:+420775181634) (Po–Pá 10–17). Pokud preferujete nezávazně probrat situaci, ozvěte se přes [kontaktní formulář](/kontakt/).",
  },
];

/** FINAL CTA banner. */
export const finalCta = {
  title: "Připraveni na audit? <strong>Začneme do&nbsp;24&nbsp;hodin.</strong>",
  lead: "3&nbsp;600&nbsp;Kč bez DPH · prioritní seznam úprav · 60min konzultace · výstup do&nbsp;5&nbsp;pracovních dní.",
  btnLabel: "Objednat audit za 3&nbsp;600&nbsp;Kč",
  btnHref: "#objednat",
  trust:
    'Ozveme se z&nbsp;<a href="tel:+420775181634">+420&nbsp;775&nbsp;181&nbsp;634</a> nebo z&nbsp;<a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a>.',
};

/**
 * Záchranná síť pod finálním CTA (GA4 2026-08-01): remarketingový provoz sem
 * chodil a do 20 s mizel, protože stránka nenabízela nic mezi „koupit" a „odejít".
 */
export const exitRescue = {
  eyebrow: "Ještě nejste rozhodnutí?",
  title: "Podívejte se nejdřív, <strong>jak audit vypadá v praxi</strong>.",
  links: [
    {
      href: "/blog/case-study-megadetail-ai-navstevnost/",
      title: "Případová studie s čísly",
      desc: "Co jsme dělali na vlastním e-shopu a jaká data z toho vyšla.",
    },
    {
      href: "/blog/ai-seo-audit/",
      title: "Co je AI SEO audit",
      desc: "Co se v auditu prochází, co je výstupem a kdy má smysl.",
    },
    {
      href: "/zacnete-tady/",
      title: "Chci nejdřív pochopit téma",
      desc: "Vstupní rozcestník celým webem — bez placené služby.",
    },
  ],
};
