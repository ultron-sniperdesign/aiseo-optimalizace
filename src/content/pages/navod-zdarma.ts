/**
 * Datový modul — landing stránka /navod-zdarma/.
 *
 * Referenční implementace Fáze 0 refaktoru: veškerý dříve inline obsah
 * `navod-zdarma/index.astro` je tady. Template stránku jen renderuje.
 *
 * Text s inline HTML (<strong>, <a>) i &nbsp; se renderuje přes set:html →
 * byte-identický výstup s původní verzí. FAQ `a` je plain text (JSON-LD
 * acceptedAnswer nesmí mít markup).
 *
 * Mutace: EN/DE/PL projekt má vlastní kopii tohoto souboru s přeloženým
 * obsahem; template + design systém zůstávají sdílené.
 */

import type {
  PageMeta,
  FaqItem,
  NumberedFeature,
  SectionHead,
  AudienceBlock,
  EmailCaptureConfig,
  PricingTier,
} from "~/content/pages/_types";

export const meta: PageMeta = {
  title: "Návod zdarma: homepage pro AI vyhledávání (PDF, 6 stran)",
  description:
    "Návod zdarma, jak postavit homepage, aby ji našel Google, citoval ChatGPT a vytáhl Přehled od AI i režim AI. Wireframe, tři principy, pět chyb. PDF za e-mail.",
  ogImage: "/og/navod-zdarma.jpg",
  /** Datum revize — pod krátkou odpovědí a v `dateModified` WebPage schématu. */
  updated: "2026-09-20",
};

/**
 * Krátká odpověď pod hero (komponenta Answer, kind="definice").
 * Mini markdown — žádné HTML entity. Stránka do 20. 9. 2026 definici neměla,
 * přestože v PDF sama učí, že patří nahoru (princip 2).
 */
export const answer =
  "Homepage pro AI vyhledávání je hlavní stránka, ze které si Google, ChatGPT, Perplexity, Claude i Gemini umí vytáhnout, co firma dělá, pro koho a čím to dokládá. Rozhodují tři prvky: konkrétní hlavní nadpis, [krátká odpověď](/slovnik/answer-block/) 40–60 slov a otázky z reálných dotazů zákazníků. Návod zdarma ukazuje všech deset prvků na wireframu.";

/** Pět chyb, které PDF rozebírá — dřív jen slib „Pět typických chyb“ bez obsahu. */
export const mistakes = {
  eyebrow: "Co PDF rozebírá",
  title: "Pět chyb, kvůli kterým <strong>AI vaši homepage špatně pochopí</strong>",
  lead: "Vidíme je opakovaně při auditech. PDF u každé ukazuje opravu na wireframu; tady je shrnutí s odkazem na podrobnosti.",
  items: [
    {
      num: "01",
      title: "Hlavní nadpis neřekne, co firma dělá",
      desc: 'Slogan místo věty „co, pro koho“. AI z něj nemá co vytáhnout. Rozdíl ukazuje <a href="/blog/ai-seo-content/">citovatelný obsah</a>.',
    },
    {
      num: "02",
      title: "Nahoře chybí krátká odpověď",
      desc: 'Text začne příběhem firmy. <a href="/slovnik/answer-block/">Krátká odpověď</a> 40–60 slov hned pod úvodem je to, co AI cituje nejčastěji.',
    },
    {
      num: "03",
      title: "Tvrzení bez důkazu",
      desc: 'Přídavná jména místo čísel, dat a zdrojů. Proč na tom záleží, rozebírá <a href="/blog/e-e-a-t-pro-ai/">důvěryhodnost pro AI</a>.',
    },
    {
      num: "04",
      title: "Firma není popsaná strojově",
      desc: 'Chybí <a href="/blog/organization-schema-pro-znacku/">schema Organization</a> a konzistentní název, adresa a telefon napříč katalogy.',
    },
    {
      num: "05",
      title: "Homepage nikam nevede",
      desc: 'Bez <a href="/blog/interni-prolinkovani-pro-ai/">prolinkování</a> na hlavní témata AI nepozná, čemu se web doopravdy věnuje.',
    },
  ],
};

export const hero = {
  eyebrow: "Návod zdarma · pro AI vyhledávání",
  title: "Vaši zákazníci se dnes ptají ChatGPT.",
  titleStrong: "Cituje umělá inteligence váš obsah?",
  urgency:
    "Firmy už dnes optimalizují obsah pro AI odpovědi. Pokud AI nerozumí vašemu homepage, <strong>doporučí konkurenci</strong>.",
  lead:
    "Návod, podle kterého homepage začne fungovat v AI vyhledávání. Wireframe s anotacemi, tři principy a mikro‑case před/po. Aplikujete na svůj web během odpoledne — a začnete dostávat přístupy z AI, které byste jinak neviděli.",
  image: "/navod-zdarma/hero-illustration.png",
  ctaCard: {
    pill: "Zdarma",
    pillNote: "Doručíme e-mailem do 30 vteřin",
    bullets: [
      "Wireframe homepage s 10 anotacemi (SEO / GEO / AEO)",
      "Tři klíčové principy a mikro‑case před / po",
      "5 nejčastějších chyb, které vidíme u klientských webů",
    ],
    buttonLabel: "Stáhnout AI SEO návod zdarma",
    leadSourceTag: "Lead — Návod zdarma (homepage)",
    trust:
      'Připravilo <strong><a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">Sniper Design</a></strong> &mdash; 600+ klientů od&nbsp;roku 2016, Zlatý partner Upgates i&nbsp;Shoptetu.',
  },
};

/** Sekce 01 — Co najdete v PDF. */
export const featuresHead: SectionHead = {
  eyebrowNum: "01",
  eyebrow: "Co najdete v PDF",
  title:
    "Postavte homepage tak, aby vás <strong>AI citovala, doporučovala a vytahovala do Přehledu od AI</strong>",
};

export const features: NumberedFeature[] = [
  {
    num: 1,
    title: "Wireframe s 10 anotacemi",
    desc: "Homepage, podle které okamžitě poznáte slabá místa svého webu. Každý prvek má vysvětlení, jaký signál pro Google (Přehled od AI a <a href=\"/ai-mode/\">režim AI</a>), ChatGPT, Perplexity, Claude i Gemini generuje a proč na něm záleží.",
  },
  {
    num: 2,
    title: "Tři klíčové principy",
    desc: "Hlavní nadpis, <a href=\"/slovnik/answer-block/\">krátká odpověď</a> 40–60 slov a <a href=\"/blog/ai-seo-content/\">časté otázky z reálných dotazů</a> zákazníků. Tři vrstvy, díky kterým vás AI nástroje pochopí a ocitují. Strukturovaná data <a href=\"/blog/konec-faq-rich-results/\">FAQPage</a> jsou volitelný doplněk — Google pro ně rozšířené výsledky od 7. 5. 2026 nezobrazuje a pro AI odpovědi je nevyžaduje.",
  },
  {
    num: 3,
    title: "Mikro-case před / po",
    desc: "Konkrétní příklad transformace generického nadpisu na specifický. Ukazuje, jak malá změna v hlavním nadpisu mění, jestli vás AI doporučí — nebo přehlédne.",
  },
  {
    num: 4,
    title: "Pět typických chyb",
    desc: "Pět chyb, kvůli kterým AI špatně chápe vaši homepage — i&nbsp;když máte dobrý produkt. Vychází z&nbsp;auditů klientských webů, které děláme průběžně; každou chybu na&nbsp;stránce níž vypisujeme i&nbsp;s&nbsp;odkazem na&nbsp;řešení.",
  },
];

/** Sekce 02 — Pro koho je to. */
export const audienceHead: SectionHead = {
  eyebrowNum: "02",
  eyebrow: "Pro koho je to",
  title:
    "PDF cílí na&nbsp;<strong>homepage</strong> firemního webu, služby nebo&nbsp;obsahově řízeného e-shopu",
  lead: 'Pro produktové a&nbsp;kategoriální stránky e-shopu budete potřebovat <strong>rozšířený framework</strong> &mdash; to&nbsp;řeší <a href="/pack/">AI&nbsp;SEO Wireframe Pack</a>.',
};

export const audiencePrimary: AudienceBlock = {
  tag: "Primárně",
  heading: "PDF je pro vás",
  items: [
    '<strong>Provozovatelé webů a&nbsp;e-shopů</strong> &mdash; víte, že je&nbsp;třeba něco změnit, ale nevíte, kde začít. Cestu webem ukáže <a href="/zacnete-tady/">rozcestník</a>; e-shopy na&nbsp;Shoptetu a&nbsp;Upgates mají <a href="/serie/ai-seo-pro-eshopy/">vlastní sérii</a>.',
    "<strong>SEO a&nbsp;marketing specialisté</strong> &mdash; potřebujete framework, který předáte klientovi nebo internímu&nbsp;týmu.",
    '<strong>Copywriteři, designéři, vývojáři</strong> &mdash; chcete navrhovat homepage, které AI chápe stejně dobře jako člověk. Formát obsahu rozebírá <a href="/blog/ai-seo-content/">citovatelný obsah</a>.',
    "<strong>B2B agentury</strong> &mdash; hledáte vlastní pracovní rámec pro klientské weby v&nbsp;AI&nbsp;éře.",
  ],
};

export const audienceNegative: AudienceBlock = {
  tag: "PDF NENÍ pro vás, pokud",
  items: [
    'čekáte <strong>kompletní audit celého webu</strong> &mdash; k&nbsp;tomu slouží <a href="/audit/">Audit AI&nbsp;viditelnosti</a>',
    'chcete <strong>hotové texty</strong> pro produktové / kategoriální stránky &mdash; rozšířený <a href="/pack/">Pack</a>',
    'řešíte <strong>čistě technické SEO</strong> bez úprav obsahu &mdash; začněte u <a href="/blog/ai-crawler-robots-txt/">přístupu AI robotů</a>',
    "nechcete po&nbsp;stažení dostat <strong>žádné navazující e-maily</strong>",
  ],
};

/** Sekce 03 — Upsell teaser (Pack / Audit). */
export const upsellHead: SectionHead = {
  eyebrowNum: "03",
  eyebrow: "Co dál — pokud chcete víc",
  proof: "Zlatý partner Upgates i Shoptetu · vlastní e-shop MEGA DETAIL",
  title:
    "Tohle PDF řeší jednu stránku. <strong>AI vyhledávání ale hodnotí celý web.</strong>",
  lead: "PDF vám pomůže začít na&nbsp;homepage. Pokud později budete chtít rozšířit stejný princip na&nbsp;produktové stránky, kategorie a&nbsp;blog, existují <strong>dvě cesty</strong> &mdash; podle toho, kolik chcete dělat sami.",
};

export const upsellTiers: PricingTier[] = [
  {
    num: "Pack · pro celý web",
    title: "Kompletní AI&nbsp;SEO Wireframe Pack",
    body: "Návod pokryl homepage. Pack pokryje celý e‑shop — sedm typů stránek s hotovými texty, kterým AI rozumí. Otevřete, dosaďte vlastní obsah, máte hotovo. Bez konzultantů.",
    price: "1&nbsp;490&nbsp;Kč",
    priceNote: "jednorázově, včetně DPH",
    ctaLabel: "Koupit Pack&nbsp;→",
    ctaHref: "/pack/",
  },
  {
    num: "Audit · uděláme to za vás",
    featured: true,
    pill: "★&nbsp;To nejlepší",
    title: "Audit AI&nbsp;viditelnosti od Sniper Design",
    body: "Získáte přesný plán, co změnit na každé stránce, aby vás AI začala doporučovat zákazníkům. Víte, co AI hledá u vašeho oboru, kde má konkurence díry a jak ji předběhnout. Plus meeting 30–60 minut. Výstup do 5 pracovních dní od úhrady.",
    chip: "✓ 600+ klientů od roku 2016, převážně e-shopy na Upgates a Shoptetu",
    price: "3&nbsp;600&nbsp;Kč",
    priceNote: "jednorázově, bez DPH (4 356 Kč s DPH)",
    ctaLabel: "Objednat&nbsp;→",
    ctaHref: "/audit/",
  },
];

/** Sekce FAQ — hlavička + položky (zdroj pro HTML i FAQPage JSON-LD). */
export const faqHead: SectionHead = {
  eyebrowNum: "FAQ",
  eyebrow: "Časté otázky",
  title: "Než si stáhnete PDF, <strong>tady jsou odpovědi</strong>",
};

/**
 * FAQ. Drží se **tématu návodu a AI vyhledávání** (pokyn uživatele 17. 9. 2026,
 * stejné pravidlo jako na `/audit/`). Pryč šly 17. 9. dvě otázky — „Jak rychle
 * dostanu PDF“ a „Můžu se kdykoli odhlásit z e-mailů“: obojí říká právní věta
 * u formuláře (`emailCapture.legalHtml`) podrobněji a hlavně v místě, kde se
 * člověk rozhoduje — včetně složky Hromadné, obsahu navazujících e-mailů
 * a odhlášení jedním kliknutím. Administrativa sem nepatří.
 */
export const faq: FaqItem[] = [
  {
    q: "Co je v PDF a kolik to má stránek?",
    a: "Šest stran: anotovaný wireframe homepage, tři principy SEO/GEO/AEO, ukázka před/po a pět nejčastějších chyb. Praktický rámec, ne teoretický ebook — pochopíte logiku za každým prvkem.",
  },
  {
    q: "Proč zrovna homepage?",
    a: "Protože z ní si AI skládá základní představu o tom, kdo jste a co nabízíte — a tu pak používá i u dotazů na konkrétní produkty nebo služby. Návod na ní ukazuje tři principy, které platí i na ostatních stránkách: jeden hlavní nadpis, který řekne, o čem web je, [krátkou odpověď](/slovnik/answer-block/) 40–60 slov hned pod úvodem a časté otázky se [strukturovanými daty](/blog/strukturovana-data-pro-ai/) na konci. Naučíte se je na homepage a přenesete na zbytek webu.",
  },
  {
    q: "Pro koho je návod určený?",
    a: "Pro provozovatele webů a e-shopů, marketéry a SEO specialisty, agentury, copywritery, designéry a vývojáře, kteří chtějí, aby jejich homepage byla připravená nejen na klasický Google, ale i na AI vyhledávání — ChatGPT, Perplexity a Přehled od AI.",
  },
  {
    q: "Funguje to i pro e-shop?",
    a: "PDF je primárně pro homepage. E-shopaři z něj využijí hlavní stránku a základní principy AI vyhledávání. Produktové a kategoriální stránky řeší až [Wireframe Pack](/pack/) za 1 490 Kč, kde je sedm typů stránek včetně produktové a kategoriální.",
  },
  {
    q: "Co návod nepokrývá?",
    a: "Je to šest stran o homepage, ne kompletní metodika. Neřeší ostatní typy stránek ani technickou vrstvu — [přístup AI robotů](/blog/ai-crawler-robots-txt/), indexaci a rychlost — a neřeší měření. Ostatní typy stránek má [Wireframe Pack](/pack/), zbytek najdete zdarma na tomhle webu; kudy začít, ukáže [rozcestník](/zacnete-tady/).",
  },
  {
    q: "Co když chci, ať to za mě uděláte vy?",
    a: "Sniper Design nabízí [Audit AI viditelnosti](/audit/) za 3 600 Kč. Projdeme váš web ve čtyřech vrstvách (viditelnost v AI dnes, technika, obsah, důvěryhodnost), dáme vám prioritní seznam úprav a meeting 30–60 minut. Výstup do 5 pracovních dní od úhrady.",
  },
];

/** Sekce FINAL CTA. */
export const finalCta = {
  title:
    "Stáhněte si návod a <strong>postavte homepage tak, aby fungovala</strong>",
  lead: "Pošleme vám <strong>6stranné PDF do&nbsp;30 vteřin</strong> z&nbsp;e-mailu <strong>aiseo-optimalizace@sniperdesign.cz</strong>. V&nbsp;dalších dnech občas přidáme praktické tipy k&nbsp;AI&nbsp;SEO &mdash; odhlásíte se kdykoli jedním kliknutím v&nbsp;každém&nbsp;e-mailu.",
  emailCapture: {
    buttonLabel: "Stáhnout AI SEO návod zdarma",
    leadSourceTag: "Lead — Návod zdarma (final CTA)",
  } satisfies EmailCaptureConfig,
};

/**
 * Záchranná síť pod finálním CTA (GA4 2026-08-01): kdo nevyplní e-mail, měl
 * dosud jedinou cestu pryč z webu. Odkazy míří na volný obsah, ne na produkty.
 */
export const exitRescue = {
  eyebrow: "Ještě se rozmýšlíte?",
  title: "Nemusíte nic stahovat &mdash; <strong>začít se dá rovnou tady</strong>.",
  links: [
    {
      href: "/zacnete-tady/",
      title: "Začněte tady",
      desc: "Rozcestník podle toho, co řešíte. Vede vás krok za krokem.",
    },
    {
      href: "/seo-vs-geo-vs-aeo-vs-aio/",
      title: "SEO, GEO, AEO a AIO",
      desc: "Kompletní průvodce čtyřmi zkratkami AI éry a rozdíly mezi nimi.",
    },
    {
      href: "/slovnik/",
      title: "Slovník pojmů",
      desc: "Přes padesát hesel vysvětlených srozumitelně, každé na vlastní stránce.",
    },
  ],
};
