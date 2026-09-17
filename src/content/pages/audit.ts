/**
 * Datový modul — prodejní landing /audit/ (Audit AI viditelnosti, 3 600 Kč).
 *
 * Fáze 0 refaktor: veškerý dříve inline obsah `audit/index.astro` je tady.
 * Template stránku jen renderuje (styly + struktura formuláře + inline JS
 * zůstávají v .astro). Text s inline HTML i &nbsp; se renderuje přes set:html.
 *
 * NÁZEV PRODUKTU (rozhodnutí uživatele 16. 9. 2026): služba se jmenuje
 * **Audit AI viditelnosti**, ne „AI SEO audit“. Starý název se četl jako
 * „klasický SEO audit, akorát dělaný pomocí AI“, což je jiná služba než ta,
 * kterou agentura prodává: kontrola, jestli je web připravený na vyhledávání
 * v AI nástrojích. Slovo „SEO audit“ smí na stránce stát jen jako kontrast
 * („není to klasický SEO audit“), nikdy jako název téhle služby.
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
  title: "Audit AI viditelnosti e-shopu i webu za 3 600 Kč | Sniper Design",
  description:
    "Audit AI viditelnosti za 3 600 Kč: je váš web připravený na ChatGPT, Perplexity a režim AI a kde má obsahové mezery? Ne klasický SEO audit. Do 5 dní.",
  /**
   * Datum revize — vykresluje se pod krátkou odpovědí a jde do `dateModified`
   * ve WebPage schématu. Při věcné změně textu ho posuň; sitemap `lastmod`
   * je čas buildu, ne obsahu.
   */
  updated: "2026-09-16",
};

/**
 * Krátká odpověď pod hero (komponenta Answer, kind="definice").
 * Mini markdown — žádné HTML entity. Pravidlo webu je 40–60 slov.
 */
export const answer =
  "Audit AI viditelnosti je kontrola toho, jestli je váš web připravený na [AI vyhledávání](/slovnik/ai-vyhledavani/) — ChatGPT, Perplexity, [Přehled od AI](/prehled-od-ai/) a [režim AI](/ai-mode/) — a jestli nemá obsahové mezery, kvůli kterým AI doporučuje konkurenci. Není to klasický SEO audit. Sniper Design ho dělá za 3 600 Kč: prioritní seznam úprav do pěti pracovních dní od úhrady a meeting.";

/**
 * Service schema.org JSON-LD.
 *
 * `provider` odkazuje přes `@id` na Organization, kterou vykresluje BaseLayout
 * (`/#publisher`) — do 16. 9. 2026 tu byla druhá, ručně držená kopie téže
 * firmy, takže Google dostával dva subjekty se stejným jménem a bez vazby.
 * Adresa, telefon a e-mail jsou proto v `i18n/site.ts`, ne tady.
 */
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit AI viditelnosti",
  serviceType: "Audit AI viditelnosti",
  provider: { "@id": "https://aiseo-optimalizace.cz/#publisher" },
  areaServed: { "@type": "Country", name: "Czech Republic" },
  description:
    "Kontrola připravenosti webu na vyhledávání v AI nástrojích: co o značce dnes říkají ChatGPT, Perplexity a Přehled od AI, jestli mají AI roboti k webu přístup, jestli obsah nabízí citovatelné odpovědi a kde jsou obsahové mezery. Výstupem je prioritní seznam úprav s odhadem dopadu do pěti pracovních dní od úhrady a meeting 30–60 minut. Není to klasický SEO audit zaměřený na pozice ve výsledcích vyhledávání.",
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
  eyebrow: "Audit AI viditelnosti od Sniper Design",
  title:
    "Audit AI viditelnosti: <strong>je váš web připravený na&nbsp;ChatGPT, Perplexity a&nbsp;režim AI?</strong>",
  lead: "Projdeme váš konkrétní web optikou <strong>ChatGPT, Perplexity, Přehledu od&nbsp;AI a&nbsp;režimu AI</strong>: co o&nbsp;vás dnes říkají, jestli k&nbsp;vám jejich roboti mají přístup a&nbsp;kde má obsah mezery. Dostanete prioritní seznam úprav a&nbsp;<strong>meeting 30&ndash;60 minut</strong>. Výstup do&nbsp;<strong>5&nbsp;pracovních dní</strong> od&nbsp;úhrady.",
  outcomes: [
    "<strong>Prioritní seznam úprav</strong>, ne obecný audit bez pořadí",
    "U&nbsp;každého bodu uvidíte <strong>dopad &times; náročnost</strong>, abyste věděli, co řešit jako první",
    "Výstup přizpůsobíme vaší <strong>platformě a&nbsp;sortimentu</strong> a&nbsp;projdeme ho s&nbsp;vámi na&nbsp;meetingu",
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
    { value: "Vlastní řešení", label: "Vlastní řešení na míru" },
    { value: "Nevím", label: "Nevím / poradíte" },
  ],
  labelCil: "Hlavní cíl auditu",
  hintCil: "(volitelně, ale pomůže nám)",
  phCil:
    "např. chceme vědět, jestli nás ChatGPT doporučuje; příprava na režim AI; slabá viditelnost v AI odpovědích…",
  gdprLabel:
    'Souhlasím se&nbsp;<a href="/gdpr/">zpracováním osobních údajů</a> za&nbsp;účelem zpracování této poptávky.',
  submitLabel: "Objednat audit za 3&nbsp;600&nbsp;Kč",
  legal:
    "Odesláním si&nbsp;<strong>závazně rezervujete zpracování auditu za&nbsp;3&nbsp;600&nbsp;Kč bez DPH</strong>. Do&nbsp;jednoho pracovního dne potvrdíme rozsah, vystavíme fakturu a&nbsp;po&nbsp;úhradě začínáme. Výstup do&nbsp;5&nbsp;pracovních dní od&nbsp;úhrady. <strong>Do&nbsp;potvrzení rozsahu a&nbsp;vystavení faktury můžete objednávku bez&nbsp;problémů zrušit</strong>; po&nbsp;zahájení auditu jde o&nbsp;službu na&nbsp;míru a&nbsp;storno řešíme podle rozpracovanosti. Údaje použijeme pro vyřízení této objednávky a&nbsp;komunikaci k&nbsp;auditu &mdash; bez&nbsp;samostatného souhlasu vás nezařadíme do&nbsp;marketingových e&#8209;mailů.",
};

/**
 * ROZLIŠENÍ — hned pod hero, před vším prodejním.
 *
 * Nejdůležitější blok stránky: odděluje tuhle službu od klasického SEO auditu
 * i od „SEO auditu dělaného pomocí AI“. Obojí je běžná záměna a bez tohohle
 * bloku si ji čtenář udělá sám z názvu.
 */
export const distinction = {
  pill: "Aby v tom bylo jasno",
  title:
    "Audit AI viditelnosti <strong>není klasický SEO audit</strong>",
  lead: "Překryv existuje &mdash; co je rozbité pro Google, obvykle nefunguje ani pro AI, takže techniku kontrolujeme také. Ale cíl je jiný, a&nbsp;proto se&nbsp;liší i&nbsp;to, co v&nbsp;auditu hledáme.",
  columns: [
    {
      mod: "classic",
      label: "Klasický SEO audit",
      claim: "Řeší pozice ve&nbsp;výsledcích vyhledávání.",
      items: [
        "Klíčová slova a&nbsp;pozice v&nbsp;Googlu",
        "Míra prokliku z&nbsp;odkazů ve&nbsp;výsledcích",
        "Zpětné odkazy a&nbsp;síla domény",
        "Technické chyby, které brzdí procházení",
      ],
      outcome: "Výstup: jak se&nbsp;posunout výš mezi&nbsp;odkazy.",
    },
    {
      mod: "ai",
      label: "Audit AI viditelnosti",
      claim: "Řeší, jestli vás AI najde, pochopí a&nbsp;doporučí.",
      items: [
        "Co o&nbsp;vás dnes říkají ChatGPT, Perplexity a&nbsp;Přehled od&nbsp;AI",
        "Jestli k&nbsp;vám <a href=\"/blog/ai-crawler-robots-txt/\">AI roboti mají přístup</a> a&nbsp;co si přečtou",
        "Jestli obsah nabízí <a href=\"/slovnik/answer-block/\">odpovědi, které jde citovat</a>",
        "Kde má obsah mezery proti&nbsp;tomu, na&nbsp;co se&nbsp;lidé ptají",
      ],
      outcome: "Výstup: co změnit, aby vás AI začala doporučovat.",
    },
  ],
  note: "<strong>A&nbsp;není to ani SEO audit dělaný pomocí AI.</strong> Nástroj s&nbsp;AI umí projet kontrolní seznam za&nbsp;minutu. Tohle je kontrola toho, jak s&nbsp;vaším webem zachází ChatGPT, Perplexity, Claude, Přehled od&nbsp;AI a&nbsp;režim AI v&nbsp;Googlu &mdash; a&nbsp;tu za&nbsp;vás žádný nástroj neudělá, protože musí vědět, na&nbsp;co se&nbsp;vašich zákazníků ptát.",
};

/** URGENCY blok (Proč to řešit teď) — čísla se zdrojem a datem. */
export const urgency = {
  pill: "Proč to řešit teď",
  title:
    "<strong>Každý měsíc čekání</strong> obsazuje konkurence místo, které mohlo patřit&nbsp;vám",
  cards: [
    {
      num: "01",
      title: "AI odpovídá místo seznamu odkazů",
      desc: 'Podle <a href="/blog/zero-click-ai/">SparkToro (6/2026, data z&nbsp;USA)</a> končí <strong>68&nbsp;% vyhledávání na&nbsp;Googlu bez&nbsp;kliknutí</strong>. V&nbsp;Česku naměřil Marketing Miner (9/2025) Přehled od&nbsp;AI u&nbsp;<strong>19,6&nbsp;% dotazů</strong>. Klikne se&nbsp;jen na&nbsp;to, co si&nbsp;AI vybere jako zdroj.',
    },
    {
      num: "02",
      title: "Bez signálů si AI vybere někoho jiného",
      desc: "Pokud web nemá jasné krátké odpovědi, <a href=\"/blog/strukturovana-data-pro-ai/\">strukturovaná data</a> a&nbsp;signály důvěryhodnosti, AI sáhne pro&nbsp;zdroj, který je&nbsp;má. Často konkurence, která to&nbsp;začala řešit dřív.",
    },
    {
      num: "03",
      title: "Vyhledávačů, kde musíte být, přibývá",
      desc: 'Režim AI je v&nbsp;Česku od&nbsp;října&nbsp;2025, <a href="/slovnik/seznam-asistent/">Seznam Asistent</a> běží pro&nbsp;všechny přihlášené od&nbsp;25.&nbsp;5.&nbsp;2026 a&nbsp;<a href="/blog/chatgpt-jako-vyhledavac-dsa/">ChatGPT je&nbsp;od&nbsp;31.&nbsp;8.&nbsp;2026 v&nbsp;EU oficiálně vyhledávač</a> (159,1&nbsp;mil. uživatelů měsíčně). Náskok se&nbsp;dohání hůř, než&nbsp;získává.',
    },
  ],
};

/** Sekce 01 — Co je v auditu. */
export const whatHead: SectionHead = {
  eyebrowNum: "01",
  eyebrow: "Co audit obsahuje",
  title:
    "Co v auditu zkontrolujeme &mdash; <strong>a co dostanete jako výstup</strong>",
  lead: 'Používáme stejný postup jako u&nbsp;klientských webů, které dlouhodobě spravujeme na&nbsp;<a href="/blog/ai-seo-upgates-shoptet/">Upgates, Shoptetu</a> i&nbsp;vlastních řešeních. <strong>Ne generický kontrolní seznam</strong>, ale audit přizpůsobený vašemu webu a&nbsp;platformě.',
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
      desc: "Úpravy, které jde nasadit bez&nbsp;velkého vývoje &mdash; nejlepší poměr dopadu a&nbsp;práce.",
    },
    {
      mod: "strat",
      label: "Strategické úpravy",
      desc: "Obsah, struktura, autorita &mdash; budují AI viditelnost dlouhodobě.",
    },
  ],
};

/**
 * Vrstvy auditu. Pořadí je záměrné: začíná se tím, co o značce říká AI dnes
 * (kvůli tomu si audit lidé objednávají), teprve pak se hledají příčiny.
 * Měření jako samostatná vrstva vědomě NENÍ (rozhodnutí uživatele 16. 9. 2026)
 * — měření prodává /sluzby/monitoring-ai/, audit je jednorázový snímek.
 */
export const layers = [
  {
    num: "01",
    tone: "aio",
    title: "Viditelnost v AI dnes",
    items: [
      'Jestli vás <a href="/slovnik/citace-ai/">AI odpovědi zmiňují a&nbsp;citují</a> u&nbsp;dotazů, které souvisí s&nbsp;vaším sortimentem',
      "Kdo se&nbsp;objevuje místo vás a&nbsp;čím si&nbsp;to&nbsp;zasloužil",
      'Z&nbsp;jakých stránek AI čerpá &mdash; jestli z&nbsp;vašich, nebo ze&nbsp;srovnávačů a&nbsp;diskuzí',
      'Výchozí stav, proti&nbsp;kterému půjde <a href="/blog/test-viditelnosti-v-ai/">měřit posun</a>',
    ],
  },
  {
    num: "02",
    tone: "seo",
    title: "Technická připravenost",
    items: [
      'Přístup <a href="/blog/ai-crawler-robots-txt/">AI robotů podle účelu</a> &mdash; vyhledávání versus trénink (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Seznam-Extended) a&nbsp;<a href="/blog/co-vypne-ktery-opt-out/">co který opt-out vypne</a>',
      '<a href="/blog/strukturovana-data-pro-ai/">Strukturovaná data</a> pro rozšířené výsledky a&nbsp;nabídky (Product, Organization, drobečková navigace, Article)',
      '<a href="/slovnik/indexace/">Indexace</a>, kanonické adresy a&nbsp;<a href="/slovnik/robots-txt/">robots.txt</a> &mdash; co vyhledávače vidí a&nbsp;co ne',
      '<a href="/blog/core-web-vitals-pro-ai/">Core Web Vitals</a> a&nbsp;čitelnost na&nbsp;telefonu',
    ],
  },
  {
    num: "03",
    tone: "geo",
    title: "Obsah a obsahové mezery",
    items: [
      '<a href="/slovnik/answer-block/">Krátké odpovědi</a> u&nbsp;klíčových témat &mdash; aby měla AI co citovat',
      'Texty <a href="/blog/kategorie-texty-pro-ai/">kategorií</a> a&nbsp;<a href="/blog/produktove-stranky-pro-ai/">produktů</a>: fakta místo frází',
      '<a href="/blog/konec-faq-rich-results/">Časté dotazy jako citovatelný obsah</a> &mdash; ne kvůli rozšířenému výsledku, ten u&nbsp;běžných webů skončil',
      "Aktuálnost obsahu a&nbsp;viditelné datum úpravy",
      "Obsahové mezery proti&nbsp;konkurenci a&nbsp;proti&nbsp;tomu, na&nbsp;co se&nbsp;lidé ptají",
    ],
  },
  {
    num: "04",
    tone: "aeo",
    title: "Důvěryhodnost a zmínky",
    items: [
      '<a href="/blog/e-e-a-t-pro-ai/">Signály důvěryhodnosti</a> &mdash; kdo za&nbsp;obsahem stojí a&nbsp;proč mu věřit',
      '<a href="/blog/ai-brand-mentions/">Zmínky značky mimo vlastní web</a> &mdash; oborová média, videa, diskuze',
      '<a href="/blog/recenze-a-hodnoceni-pro-ai/">Recenze a&nbsp;hodnocení</a> na&nbsp;Heurece, Zboží a&nbsp;u&nbsp;Googlu',
      'Kontaktní údaje <a href="/blog/local-seo-cesko-2026/">konzistentně napříč katalogy</a> a&nbsp;schema Organization',
    ],
  },
];

/**
 * Poctivá poznámka o metodě měření.
 *
 * Do 16. 9. 2026 tu stál blok s anglickým názvem, který sliboval ověření
 * ve třech platformách. Vlastní nástroj měl ale aktivní klíč jen pro ChatGPT.
 * Anglický název zmizel i proto, že web píše česky.
 * Text teď říká, co je automatizované a co ruční.
 */
export const visibility = {
  pill: "★ Jak to měříme",
  title:
    "Kontrola AI viditelnosti &mdash; <strong>čím se měří a&nbsp;co má limity</strong>",
  desc: 'Zmínky v&nbsp;ChatGPT měříme vlastním nástrojem, Přehled od&nbsp;AI přes Marketing Miner. Perplexity, Claude a&nbsp;Gemini kontrolujeme ručně na&nbsp;sadě dotazů, kterou sestavíme podle vašeho sortimentu. <strong>Každý běh dopadne trochu jinak</strong> &mdash; AI odpovědi nejsou stabilní, takže výsledek čtěte jako výchozí stav, ne jako přesné skóre. Proč to&nbsp;tak je, rozebírá <a href="/blog/mereni-ai-mode-limity/">článek o&nbsp;limitech měření</a>.',
};

export const deliverable = {
  pill: "★ Výstup",
  title: "Co konkrétně dostanete jako <strong>audit dokument</strong>",
  lead: "Strukturovaný dokument (PDF, Notion nebo Google Doc &mdash; podle vaší preference), který obsahuje:",
  items: [
    {
      label: "Kritická zjištění",
      desc: "Co teď nejvíc brzdí vaši viditelnost v&nbsp;AI odpovědích i&nbsp;ve&nbsp;vyhledávačích.",
    },
    {
      label: "Prioritní tabulka úprav",
      desc: "Každá položka: dopad &times; náročnost &times; kdo by ji&nbsp;měl řešit (vývojář / copywriter / interní tým).",
    },
    {
      label: "Technické problémy",
      desc: "Konkrétní adresa, snímek nebo citace, doporučená oprava. Připravené k&nbsp;předání vývojáři.",
    },
    {
      label: "Obsahové mezery proti konkurenci",
      desc: "Témata a&nbsp;dotazy, kde konkurence pokrývá a&nbsp;vy ne &mdash; s&nbsp;odhadem priority.",
    },
    {
      label: "Doporučení pro&nbsp;citovatelnost",
      desc: "Konkrétní úpravy textu, strukturovaných dat a&nbsp;signálů důvěryhodnosti, aby vás AI začala citovat.",
    },
    {
      label: "30denní akční plán",
      desc: "Co řešit první týden, druhý, třetí, čtvrtý &mdash; v&nbsp;pořadí, které dává smysl.",
    },
    {
      label: "Meeting 30&ndash;60 minut",
      desc: "Projdeme závěry, dáme prostor na&nbsp;otázky, doladíme priority podle&nbsp;vašich možností.",
    },
  ],
};

/** Sekce 02 — Jak audit probíhá (4 kroky s časovou osou). */
export const processHead: SectionHead = {
  eyebrowNum: "02",
  eyebrow: "Jak audit probíhá",
  title: "Od objednávky k&nbsp;plánu <strong>za necelý týden</strong>",
};

export const processSteps = [
  {
    num: "01",
    when: "dnes",
    title: "Vyplníte formulář",
    desc: "Adresa webu, platforma a&nbsp;čím se&nbsp;trápíte. Nic dalšího zatím nepotřebujeme.",
  },
  {
    num: "02",
    when: "do 1 pracovního dne",
    title: "Potvrdíme rozsah a&nbsp;pošleme fakturu",
    desc: "Ozveme se&nbsp;e-mailem nebo telefonem, upřesníme, co dává u&nbsp;vašeho webu smysl, a&nbsp;vystavíme fakturu.",
  },
  {
    num: "03",
    when: "do 5 pracovních dní od úhrady",
    title: "Zpracujeme audit",
    desc: "Projdeme čtyři vrstvy, sestavíme prioritní tabulku a&nbsp;30denní plán. Dokument dostanete předem, ať si&nbsp;ho&nbsp;stihnete přečíst.",
  },
  {
    num: "04",
    when: "podle vašeho termínu",
    title: "Projdeme to&nbsp;spolu na&nbsp;meetingu",
    desc: "Online, 30&ndash;60 minut. Odpovíme na&nbsp;otázky a&nbsp;doladíme pořadí podle&nbsp;toho, co reálně zvládnete.",
  },
];

/** Sekce 03 — Proč nám můžete důvěřovat. */
export const trustHead: SectionHead = {
  eyebrowNum: "03",
  eyebrow: "Proč nám můžete důvěřovat",
  title: "Reálná zkušenost <strong>z&nbsp;denodenní praxe</strong>",
};

export const trustItems = [
  {
    title: "600+ klientů od roku 2016",
    body: 'Od&nbsp;roku&nbsp;2016 jsme pracovali pro <strong>600+ klientů</strong>, převážně e-shopy na&nbsp;Upgates a&nbsp;Shoptetu. Na&nbsp;webu agentury najdete <a href="https://www.sniperdesign.cz/reference" target="_blank" rel="noopener">58&nbsp;vybraných referencí</a>, další jsou neveřejné. Nekupujete audit od&nbsp;anonymního dodavatele, ale od&nbsp;týmu s&nbsp;dlouhodobou praxí v&nbsp;e-commerce.',
  },
  {
    title: "Zlatý partner Upgates i&nbsp;Shoptetu",
    body: "Jsme oficiální Zlatý partner obou platforem (u&nbsp;Upgates od&nbsp;roku&nbsp;2016). Známe jejich limity i&nbsp;možnosti, takže <strong>doporučení v&nbsp;auditu nejsou odtržená od&nbsp;reality implementace</strong>. Partnerské profily jsou odkazované z&nbsp;odznaků v&nbsp;záhlaví stránky, kde si&nbsp;to&nbsp;ověříte.",
  },
  {
    title: "Ověřujeme i&nbsp;na&nbsp;vlastním e-shopu",
    body: 'Doporučení nebereme z&nbsp;prezentací. Ověřujeme je i&nbsp;na&nbsp;vlastním e-shopu <a href="https://www.megadetail.cz/" target="_blank" rel="noopener"><strong>MEGA&nbsp;DETAIL</strong></a>, kde řešíme stejná témata jako naši klienti &mdash; a&nbsp;<a href="/blog/case-study-megadetail-ai-navstevnost/">zveřejňujeme z&nbsp;toho čísla</a>.',
  },
  {
    title: "Sami provozujeme e-shopy",
    body: "Nevnímáme web jen optikou kontrolního seznamu. Protože e-shopy sami provozujeme a&nbsp;stavíme pro&nbsp;ně vlastní nástroje (<strong>SYNKRO</strong> pro automatizaci a&nbsp;<strong>GPTfeed</strong> pro obsah), řešíme i&nbsp;to, co je udržitelné v&nbsp;každodenním provozu: obsahové postupy, feedy a&nbsp;škálování úprav.",
  },
];

export const examples = {
  title: "Co typicky nacházíme v&nbsp;reálných auditech",
  items: [
    "<strong>Upgates e-shop:</strong> chybějící strukturovaná data u&nbsp;klíčových kategorií a&nbsp;nejasné odpovědi na&nbsp;nákupní dotazy &mdash; konkurence má krátké odpovědi, které Přehled od&nbsp;AI cituje, a&nbsp;e-shop ne.",
    "<strong>Shoptet e-shop:</strong> obsahové mezery proti&nbsp;konkurenci v&nbsp;top kategoriích, žádné krátké odpovědi na&nbsp;nákupní dotazy, chybějící signály důvěryhodnosti u&nbsp;autorů obsahu.",
    '<strong>Firemní web (služby):</strong> nekonzistentní kontaktní údaje napříč katalogy, žádné schema Organization, zmínky značky jen na&nbsp;vlastní doméně &mdash; ChatGPT a&nbsp;Perplexity o&nbsp;značce „nevědí“.',
  ],
};

/** Sekce 04 — Pack vs. audit. */
export const compareHead: SectionHead = {
  eyebrowNum: "04",
  eyebrow: "Pack vs. audit",
  title: "Co je pro vás <strong>vhodnější</strong>?",
};

export const bridge =
  "<strong>Nejste si jistí, jestli stačí Pack?</strong> Pokud váš web generuje tržby a&nbsp;nechcete ztrácet týdny samostatnou analýzou, <strong>audit je správná volba</strong> &mdash; dostanete přesný plán pro&nbsp;váš konkrétní web a&nbsp;sortiment, nikoli obecný návod. Neplatíte za&nbsp;objem textu, ale za&nbsp;prioritizaci, kontext a&nbsp;meeting.";

export const compare = [
  {
    pillMod: "pack",
    pill: "Pack",
    title: "Když chcete <strong>řešit věci sami</strong>",
    price: "1&nbsp;490&nbsp;Kč &middot; jednorázově",
    items: [
      "Máte čas si&nbsp;doporučení sami vyhodnotit a&nbsp;převést do&nbsp;praxe",
      "Chcete obecný recept pro 7&nbsp;typů stránek (homepage, produkt, kategorie, blogový článek, výpis blogu, prodejní landing, kontakt) plus kapitolu, jak ho aplikovat",
      "Hodí se i&nbsp;agenturám a&nbsp;copywriterům pro klientské weby",
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
      "Chcete <strong>přesnou analýzu vašeho webu</strong>, ne&nbsp;obecný návod",
      "Potřebujete <strong>prioritní seznam úprav</strong> &mdash; co změnit jako první, proč a&nbsp;jaký to bude mít dopad",
      "Chcete <strong>meeting s&nbsp;týmem</strong>, kde si projdete závěry osobně",
      "Nemáte čas ani chuť projít Pack vlastní silou a&nbsp;preferujete hotový plán",
      "Výstup do&nbsp;5&nbsp;pracovních dní od&nbsp;úhrady + meeting 30&ndash;60 minut",
    ],
    ctaLabel: "Chci konkrétní plán pro&nbsp;svůj web&nbsp;&rarr;",
    ctaHref: "#objednat",
    featured: true,
    ctaAccent: true,
  },
];

/** Sekce 05 — FAQ. Jeden zdroj pro text i FAQPage JSON-LD (komponenta Faq). */
export const faqHead: SectionHead = {
  eyebrowNum: "05",
  eyebrow: "Časté otázky",
  title: "Než si <strong>objednáte audit</strong>",
};

/**
 * FAQ. Jeden zdroj pro viditelný text i FAQPage JSON-LD (komponenta Faq).
 *
 * Drží se **tématu auditu a AI vyhledávání** (pokyn uživatele 17. 9. 2026).
 * Do té doby tu bylo 15 otázek a šest z nich byla administrativa nebo obsah,
 * který stránka říká jinde a líp: „Komu platím a dostanu fakturu“ (předpoklad;
 * IČO a plátce DPH stojí pod hero i pod formulářem), „Jak dlouho audit trvá“
 * a „Co konkrétně dostanu“ (celá sekce „Jak audit probíhá“ a výčet výstupu),
 * „Co když nemám Pack“ (srovnávací sekce přímo nad FAQ), „Mohu objednávku
 * zrušit“ (přesunuto do právní věty u formuláře) a „Můžu se zeptat předem“
 * (kontakt i hodiny jsou ve finálním CTA). **Nová otázka sem patří jen tehdy,
 * když odpovídá na něco o auditu nebo o vyhledávání v AI.**
 */
export const faq: FaqItem[] = [
  {
    q: "Je to klasický SEO audit?",
    a: "Ne. Klasický SEO audit řeší pozice ve výsledcích Googlu — klíčová slova, prokliky, zpětné odkazy. Audit AI viditelnosti řeší, jestli vás najdou, pochopí a doporučí ChatGPT, Perplexity, Přehled od AI a režim AI. Techniku kontrolujeme také, protože co je rozbité pro Google, obvykle nefunguje ani pro AI — ale hledáme jiné věci a výstup vede jinam. Rozdíl rozebírá [průvodce auditem pro AI vyhledávání](/blog/ai-seo-audit/) a [co kontroluje klasický SEO audit](/blog/seo-audit-co-kontrolovat/).",
  },
  {
    q: "Je to SEO audit dělaný pomocí AI?",
    a: "Také ne. Nástroje s AI umí projet kontrolní seznam za minutu a takových je na webu zdarma několik. Tady jde o opak: kontrolujeme, **jak s vaším webem zacházejí AI nástroje** — jestli k němu jejich roboti mají přístup, co si z něj přečtou a koho u vašich témat doporučují. Sadu dotazů sestavujeme podle vašeho sortimentu, protože žádný nástroj neví, na co se ptají vaši zákazníci.",
  },
  {
    q: "Pro koho je audit určený?",
    a: "Pro provozovatele e-shopů (Upgates, Shoptet, WooCommerce) a firemních webů, kteří chtějí **konkrétní plán**, co změnit pro éru AI vyhledávání. Hodí se pro weby s ročním obratem 1+ mil. Kč a s ambicí být citovaný v ChatGPT, Perplexity a v Přehledu od AI.",
  },
  {
    q: "Je audit vhodný pro Shoptet nebo Upgates?",
    a: "Ano, jsou to nejčastější zadání. Jsme Zlatý partner obou platforem, takže doporučení rovnou rozdělíme na to, co jde nastavit v administraci, co potřebuje zásah do šablony a co se na dané platformě nedá. Co je na nich jinak, shrnuje [článek o AI SEO na Upgates a Shoptetu](/blog/ai-seo-upgates-shoptet/) a [série pro e-shopy](/serie/ai-seo-pro-eshopy/).",
  },
  {
    q: "Zahrnuje audit i Seznam Asistenta?",
    a: "Ano, v rozsahu, který dává smysl pro český trh. Kontrolujeme, jestli web pouští robota [Seznam-Extended](/blog/seznam-asistent-sellma/) — bez něj Seznam přes svoje AI přestane posílat návštěvníky — a jestli sedí firemní údaje na [Firmy.cz](/blog/firmy-cz-pro-ai/), odkud Asistent čerpá. Viditelnost v něm testujeme ručně na vzorku dotazů, automatické měření pro něj zatím neexistuje.",
  },
  {
    q: "Jaký je rozdíl mezi auditem a monitoringem AI viditelnosti?",
    a: "Audit je jednorázový snímek a plán: kde stojíte dnes a co s tím. [Monitoring](/sluzby/monitoring-ai/) je měsíční služba, která sleduje, jak se čísla vyvíjejí, a porovnává vás s konkurencí. Dává smysl až potom, co jsou úpravy z auditu nasazené — jinak měříte stav, se kterým nic neděláte.",
  },
  {
    q: "Uvidím v Search Console, jestli se AI viditelnost zlepšila?",
    a: "Částečně. Search Console má od 31. 8. 2026 pro všechny weby report **Funkce s generativní AI**, který ukazuje, jak často se vaše stránky objevily v Přehledu od AI a v režimu AI. Dává ale **jen zobrazení** — žádné kliky, dotazy ani pozice, a Přehled od AI od režimu AI neoddělí. Je to signál výskytu, ne návštěvnost. Zmínky v ChatGPT nebo Perplexity v něm nejsou vůbec. Co report umí a co ne, rozebírá [článek o měření v Search Console a GA4](/blog/gsc-ai-segmenty-mereni/).",
  },
  {
    q: "Jak často má smysl audit zopakovat?",
    a: "Zhruba **jednou za čtvrtletí**, pokud AI viditelnost aktivně řešíte. Prostředí se mění rychle: přibývají noví roboti, platformy mění pravidla i způsob citování a konkurence mezitím obsazuje témata. Roční rytmus, na který jsme zvyklí z klasického SEO, je tady krátký. Mezi audity dává smysl spíš [průběžné měření](/sluzby/monitoring-ai/) než další plná kontrola.",
  },
  {
    q: "Má smysl audit, když už máme SEO specialistu nebo agenturu?",
    a: "Ano, pokud chcete **nezávislý pohled** na připravenost webu pro AI vyhledávání. Audit nenahrazuje dlouhodobou SEO správu — dává vašemu týmu konkrétní priority, které může zapracovat. Co od agentury v téhle oblasti čekat, shrnuje [článek o službách AI SEO agentury](/blog/ai-seo-agentura-sluzby/).",
  },
  {
    q: "Co audit nezahrnuje?",
    a: "Audit je **samostatný akční plán** — obsahuje analýzu, prioritizaci a meeting. **Implementaci si můžete udělat interně, předat ji své agentuře nebo vývojáři, nebo si od nás nechat nacenit navazující úpravy.** Nejste vázaní na naši realizaci.",
  },
  {
    q: "Co když audit neodhalí zásadní problém?",
    a: "I to je užitečný výsledek. Získáte **potvrzení**, že technika, obsah a důvěryhodnost nejsou hlavní brzda, a doporučíme, kam zaměřit další úsilí. V praxi ale ve většině auditů nacházíme kombinaci technických, obsahových i důvěryhodnostních rezerv.",
  },
  {
    q: "Proč stojí audit jen 3 600 Kč?",
    a: "Protože nechceme, aby cena byla důvod, proč web zůstane nepřipravený. Je to jedna z nejnižších pevných cen mezi nabídkami, které jsme na českém webu veřejně našli (stav 5. 9. 2026) — běžně se za audit viditelnosti v AI platí 10 000 až 20 000 Kč. Vyděláváme na navazujících úpravách, ne na auditu. Jak vypadají ceny na trhu, rozebírá [Kolik stojí AI SEO](/blog/kolik-stoji-ai-seo/).",
  },
];

/** FINAL CTA banner. */
export const finalCta = {
  title: "Připraveni na audit? <strong>Ozveme se do&nbsp;jednoho pracovního dne.</strong>",
  lead: "3&nbsp;600&nbsp;Kč bez DPH · prioritní seznam úprav · meeting 30&ndash;60 minut · výstup do&nbsp;5&nbsp;pracovních dní od&nbsp;úhrady.",
  btnLabel: "Objednat audit za 3&nbsp;600&nbsp;Kč",
  btnHref: "#objednat",
  trust:
    'Ozveme se z&nbsp;<a href="tel:+420775181634">+420&nbsp;775&nbsp;181&nbsp;634</a> nebo z&nbsp;<a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a>. Chcete se nejdřív zeptat? Voláme Po&ndash;Pá&nbsp;10:00&ndash;17:00, nebo napište přes <a href="/kontakt/">kontaktní formulář</a>.',
};

/**
 * Záchranná síť pod finálním CTA (GA4 2026-08-01): remarketingový provoz sem
 * chodil a do 20 s mizel, protože stránka nenabízela nic mezi „koupit“ a „odejít“.
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
      title: "Zkuste si základní průchod sami",
      desc: "Návod krok za krokem, co si na webu zkontrolovat vlastními silami, než si audit objednáte.",
    },
    {
      href: "/zacnete-tady/",
      title: "Chci nejdřív pochopit téma",
      desc: "Vstupní rozcestník celým webem — bez placené služby.",
    },
  ],
};
