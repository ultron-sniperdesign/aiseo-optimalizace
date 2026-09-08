/**
 * Datový modul — homepage `/`.
 *
 * Fáze 0 refaktor (rozsah „próza + karty“): externalizován veškerý čitelný
 * text + karty. Ilustrativní mockupy (Google SERP / AI Overview / ChatGPT
 * bublina) a SVG wireframe ZŮSTÁVAJÍ jako značky v `index.astro` — mají
 * desítky vnořených scoped tříd, které `set:html` rozbíjí. Jejich text je
 * proto stále v šabloně (pro mutace případně doladit ve forku šablony).
 *
 * set:html se používá jen pro text s inline markupem (<strong>, <span class="hl">,
 * <em>, <code>, &nbsp;). Scoped pravidla pro tyto potomky jsou v .astro
 * ošetřena `:global()` (viz CLAUDE.md § VI gotcha).
 *
 * Mutace: EN/DE/PL fork má vlastní kopii s překladem.
 */

import type { SectionHead } from "~/content/pages/_types";

export const meta = {
  title: "AI SEO: jak být vidět v AI vyhledávání (průvodce 2026)",
  description:
    "Praktický průvodce AI SEO pro český trh: pozice v Googlu, citace v ChatGPT, odpovědi v Přehledu od AI i v režimu AI a jak si AI viditelnost změřit.",
};

/**
 * Hero video (2-sloupcové hero — video v pravém sloupci). Lazy facade: na webu
 * se při načtení ukáže jen náhled (YouTube thumbnail), teprve klik načte
 * `youtube-nocookie` iframe → žádné YT cookies ani perf zátěž do interakce.
 * Fork: `video = null` celý mediální sloupec skryje (hero zůstane jednosloupcový);
 * jinak vyměnit `youtubeId` + přeložit `badge`/`playLabel`.
 */
export const video: { youtubeId: string; badge: string; playLabel: string } | null = {
  youtubeId: "7rJFWQ1NpAM",
  badge: "Úvodní video · 2 min",
  playLabel: "Přehrát úvodní video",
};

type Discipline = "seo" | "geo" | "aeo" | "aio";

export interface PillDef {
  d: Discipline;
  /** Zobrazený kód disciplíny v panelu (CZ = SEO/GEO/AEO/AIO; EN fork u aio = "AI SEO"). */
  badge: string;
  label: string;
  fullName: string;
  oneLine: string;
  quick: string;
  href: string;
}

export interface Quartet {
  d: Discipline;
  abbr: string;
  name: string;
  desc: string;
  features: string[];
  href: string;
}

/** HERO. */
export const hero = {
  intro: "AI SEO pro český trh · průvodce od Sniper Design",
  title:
    '<strong>AI éra vyhledávání</strong> se neptá <span class="hl">na pozice</span>. Ptá se <span class="hl">na citace</span>.',
  lead: "Praktický průvodce čtyřmi disciplínami, které rozhodují o tom, jestli vás Google ukáže ve výsledcích, jestli vás zmíní Přehled od AI a režim AI, jestli vás zacitují ChatGPT, Gemini nebo Claude — a jestli vás v roce 2026 najde někdo jiný než vy sami.",
  pillsHint: "Klikněte na disciplínu pro krátkou definici a odkaz na detail",
};

/**
 * Krátká odpověď pod hero — jediné místo na webu, kde je definice „AI SEO“
 * na homepage. Do 8. 9. 2026 tu nebyla vůbec (audit F13), přestože ji vlastní
 * sekce 03 předepisuje jako první prvek stránky připravené pro AI.
 * Drží 40–60 slov; `mark` je štítek nad textem.
 */
export const answer = {
  mark: "Co je AI SEO",
  text: "<strong>AI SEO</strong> je práce s webem tak, aby ho kromě lidí zvládly přečíst a citovat i systémy AI. Odehrává se ve třech vrstvách: <strong>AI SEO</strong> je to, co děláte; <strong>AI vyhledávání</strong> je místo, kde se to projeví — <a href=\"/ai-mode/\">režim AI</a>, <a href=\"/prehled-od-ai/\">Přehled od AI</a>, ChatGPT, Gemini, Claude, Perplexity a Seznam Asistent; <strong>AI viditelnost</strong> je výsledek, který <a href=\"/ai-viditelnost/\">měříte</a>.",
};

export const pillDefs: PillDef[] = [
  {
    d: "seo",
    badge: "SEO",
    label: "SEO — Search",
    fullName: "Search Engine Optimization",
    oneLine: "Pozice v Googlu a Seznamu.",
    quick:
      "Klasická optimalizace pro umístění v top 10 organických výsledků. Bez indexovatelného a dobře strukturovaného webu výrazně snižujete šanci, že vás AI nástroje najdou, pochopí a použijí jako zdroj.",
    href: "/seo/",
  },
  {
    d: "geo",
    badge: "GEO",
    label: "GEO — Generative",
    fullName: "Generative Engine Optimization",
    oneLine: "Citace v ChatGPT, Gemini, Claude a Perplexity.",
    quick:
      "Cílíte na to být zdrojem, který AI nástroj cituje při generování odpovědi. Místo modrého odkazu se hraje o zmínku ve výstupu.",
    href: "/geo/",
  },
  {
    d: "aeo",
    badge: "AEO",
    label: "AEO — Answer",
    fullName: "Answer Engine Optimization",
    oneLine: "Odpovědi v Přehledu od AI, v režimu AI a v Copilotu.",
    quick:
      "Užší disciplína cílená na panel s odpovědí nad výsledky. Klíč je krátká odpověď hned pod nadpisem, nadpisy formulované jako otázky a FAQ z reálných dotazů.",
    href: "/aeo/",
  },
  {
    d: "aio",
    badge: "AIO",
    label: "AIO — deštník",
    fullName: "AI Optimization (zastřešující rámec)",
    oneLine:
      "Zastřešující rámec nad SEO, GEO a AEO. Zkratku někdo používá i pro Přehled od AI.",
    quick:
      "U nás AIO znamená zastřešující rámec nad všemi třemi disciplínami. Zkratka má i druhé čtení — konkrétní funkci Googlu — tu ale na webu vedeme pod vlastním názvem Přehled od AI.",
    href: "/aio/",
  },
];

/** UI microcopy uvnitř homepage šablony (aria-labely + CTA, které nejsou v sekčních datech). */
export const ui = {
  pillsAria: "Rychlé seznámení s disciplínami",
  pillPanelLink: "Otevřít detail disciplíny",
  pillPanelClose: "Zavřít detail",
  quartetCta: "Číst sekci",
  scardCta: "Číst",
};

export const quartet: Quartet[] = [
  {
    d: "seo",
    abbr: "SEO",
    name: "Search Engine Optimization",
    desc: "Klasická optimalizace pro pozice v Googlu a Seznamu. Zůstává základem všeho ostatního — bez indexace nezafunguje GEO ani AEO.",
    features: [
      "Cílí na první desítku v Googlu",
      "Měří se: pozice a prokliky v Search Console",
      "Funguje pro Google i Seznam",
      "Seznam Asistent čerpá z indexu Seznamu",
    ],
    href: "/seo/",
  },
  {
    d: "geo",
    abbr: "GEO",
    name: "Generative Engine Optimization",
    desc: "Optimalizace pro citace v ChatGPT, Perplexity, Claude a Gemini. Místo modrého odkazu cílíte na to, abyste byli zdrojem, ze kterého AI čerpá fakta.",
    features: [
      "Cílí na zmínky a citace v odpovědích AI",
      "Měří se: citace per platforma a návštěvy z chatgpt.com, gemini, claude.ai",
      "Funguje pro ChatGPT, Gemini i Claude",
      "Podíl Perplexity na návštěvách klesá",
    ],
    href: "/geo/",
  },
  {
    d: "aeo",
    abbr: "AEO",
    name: "Answer Engine Optimization",
    desc: "Užší disciplína cílená na Přehled od AI, režim AI a Microsoft Copilot. Krátká odpověď hned pod nadpisem, otázkové nadpisy a FAQ — to je její řemeslo.",
    features: [
      "Cílí na odpověď nad výsledky",
      "Měří se: report Funkce s generativní AI v Search Console",
      "Od 31. 8. 2026 pro všechny weby — jen zobrazení",
      "Funguje pro Google i Microsoft Copilot",
    ],
    href: "/aeo/",
  },
  {
    d: "aio",
    abbr: "AIO",
    name: "AI Optimization (zastřešující rámec)",
    desc: "Zastřešující rámec nad SEO, GEO a AEO — jeden plán místo tří. Zkratka má i druhé čtení, konkrétní funkci Googlu; tu vedeme pod názvem Přehled od AI.",
    features: [
      "Cílí na jeden souvislý plán místo tří",
      "Měří se: totéž co u tří disciplín, jen pohromadě",
      "Pokrývá techniku, obsah, značku i měření",
      "Rozhoduje pořadí kroků, ne počet nástrojů",
    ],
    href: "/aio/",
  },
];

/** Sekce 01 — Trio (head + verdikty + callout; mockupy zůstávají v .astro). */
export const trioHead: SectionHead = {
  eyebrowNum: "01",
  eyebrow: "Stejný dotaz, tři rozhraní",
  title:
    'Co dostane uživatel, když se dnes ptá na <span class="hl">AI vyhledávání</span>? Tři rozhraní, <strong>jedna otázka</strong>.',
};

export const trioVerdicts = [
  {
    type: "Klasický Google SERP",
    key: "Co uživatel dostane",
    val: "Seznam odkazů. Klikne, čte, rozhodne se.",
  },
  {
    type: "Google s Přehledem od AI",
    key: "Co uživatel dostane",
    val: "Hotová odpověď s citacemi. Často neklikne.",
  },
  {
    type: "Chatovací nástroj (ChatGPT, Gemini, Claude)",
    key: "Co uživatel dostane",
    val: "Konverzační odpověď. Proklik k vám už není v plánu.",
  },
];

export const trioCallout = {
  text: "<strong>Pokud na webu nemáte obsah, který se dá <em>citovat</em>, ve dvou ze tří rozhraní jste neviditelní.</strong>",
  cont: "Tento průvodce ukazuje, co konkrétně přidat — sekce po sekci.",
};

/**
 * Trio mockupy — text tří ilustrativních rozhraní (Google SERP / AI Overview /
 * ChatGPT). Dřív zapečený v `index.astro`; externalizováno pro mutace.
 * `*.path` se v šabloně skládá s `site.name` (např. `{site.name} › {path}`).
 * `sources` NEobsahují vlastní doménu — tu šablona prependuje jako první zdroj.
 * Pole s inline `<strong>` (aio.line*, chat.bullets) renderuje šablona přes
 * set:html (rodič má `:global(strong)` pravidlo).
 */
export const trio = {
  query: "jak připravit web pro AI vyhledávání",
  google: {
    cellAria: "Co uživatel dostane z klasického Googlu",
    panelAria: "Klasické Google vyhledávání",
    results: [
      {
        path: "seo-vs-geo-vs-aeo-vs-aio",
        title: "SEO vs. GEO vs. AEO vs. AIO: Kompletní průvodce 4&nbsp;zkratkami…",
        desc: "Praktický průvodce čtyřmi disciplínami, které rozhodují o tom, jestli vás Google ukáže a jestli vás zacitují AI nástroje…",
      },
      {
        path: "prakticky-postup",
        title: "Praktický postup ve čtyřech krocích — audit, schema, měření",
        desc: "Audit obsahu, strukturovaná data, krátká odpověď nahoře a měření. Plus 90denní kalendář, jak na to.",
      },
      {
        path: "aeo",
        title: "AEO — Answer Engine Optimization (Google AI Overviews…)",
        desc: "FAQ schema, krátké odpovědi 40–60 slov, Product schema. Jak se dostat do AI Overview citací…",
      },
    ],
  },
  aio: {
    cellAria: "Co uživatel dostane z AI Overview",
    panelAria: "Google s AI Overview panelem",
    label: "Přehled od AI",
    line1:
      "<strong>Pro úspěch v AI vyhledávání</strong> potřebujete: krátkou odpověď 40–60&nbsp;slov hned pod nadpisem, nadpisy formulované jako otázky, hutný text s konkrétními čísly a zmínky o značce v místech, odkud AI čerpá.",
    line2:
      "Cílí to na <strong>citaci v AI odpovědi</strong>, ne jen na klasickou pozici v Googlu.",
    sourcesLabel: "Zdroje:",
    sources: ["marketingppc.cz", "seoprakticky.cz"],
    demotedPath: "seo-vs-geo-vs-aeo-vs-aio",
    demotedTitle: "SEO vs. GEO vs. AEO vs. AIO: Kompletní průvodce…",
  },
  chat: {
    cellAria: "Co uživatel dostane z AI chatbota",
    panelAria: "ChatGPT odpověď",
    brand: "ChatGPT",
    answerLead: "Pro AI vyhledávání jsou klíčové tři vrstvy:",
    bullets: [
      "<strong>Klasické SEO</strong> jako základ — bez něj vás AI nenajde.",
      "<strong>Odpověď v první větě</strong> sekce — a doložená čísla pod ní.",
      "<strong>Zmínky o značce</strong> v místech, odkud čerpám — bez nich vás necituji.",
    ],
    sources: ["interval.cz", "seoprakticky.cz"],
  },
};

/** Stat bar (4 dlaždice). */
export const statBar = [
  {
    num: "<strong>68&nbsp;%</strong>",
    label:
      "vyhledávání na Googlu skončilo bez prokliku na otevřený web (USA, leden až duben 2026)",
    src: "SparkToro, 6/2026",
    href: "/blog/zero-click-ai/",
  },
  {
    num: "<strong>19,6&nbsp;%</strong>",
    label:
      "českých dotazů, u kterých se zobrazil Přehled od AI — nejnovější veřejné číslo pro český trh",
    src: "Marketing Miner, SEO Restart 9/2025",
    href: "/blog/jak-casto-se-zobrazuje-ai-prehled/",
  },
  {
    num: "<strong>+120&nbsp;%</strong>",
    label:
      "vyšší poměr prokliků na zobrazení mají stránky, které Přehled od AI cituje jako zdroj",
    src: "Seer, 5,47 mil. dotazů, 4/2026",
    href: "/ai-viditelnost/",
  },
  {
    num: "<strong>92&nbsp;%</strong>",
    label:
      "návštěv přicházejících z nástrojů AI pochází z ChatGPT — zbytek si dělí Gemini, Perplexity a Claude",
    src: "Previsible, 166 webů, 7/2026",
    href: "/blog/ai-search-trendy-cesko-2026/",
  },
];

/** Sekce 02 — Kvartet. */
export const quartetHead: SectionHead = {
  eyebrowNum: "02",
  eyebrow: "Čtyři disciplíny",
  title:
    'Každá řeší <span class="hl">jiný kanál</span>. Společně tvoří <strong>kvartet</strong>.',
  lead:
    "Google ve svém průvodci (7/2026) pojmy AEO i GEO výslovně zmiňuje — a říká, že jde pořád o SEO; zkratku AIO nepoužívá vůbec. My je držíme proto, že každá míří na jinou platformu a jinak se měří. Chyba je dělat všechny najednou, bez pořadí.",
};

/** Sekce 03 — Anatomie stránky připravené pro AI (SVG zůstává v .astro). */
export const anatomyHead: SectionHead = {
  eyebrowNum: "03",
  eyebrow: "Anatomie stránky připravené pro AI",
  title:
    'Stránka, kterou si AI <span class="hl">snadno přečte</span> a <strong>zacituje</strong>, vypadá takto.',
  lead:
    "Sedm prvků, které z běžné stránky udělají zdroj pro Přehled od AI, režim AI i chatovací nástroje. Žádný z nich nestojí peníze navíc — jen je tam potřeba vědomě dostat.",
};

export const anatomyList = [
  {
    title: "H1 jako otázka nebo jasná definice",
    desc: "Hlavní nadpis jednou větou říká, na jaký dotaz stránka odpovídá. Systém AI to čte jako kontext celé stránky.",
  },
  {
    title: "Krátká odpověď hned pod nadpisem",
    desc: "Stručná definice na začátku. Rozsah 40–60 slov je osvědčená praxe, ne doložená mez — doložený je jen strop citace: Claude z jedné stránky převezme nejvýš 150 znaků. Pište první větu tak, aby obstála sama.",
  },
  {
    title: "Hutný text s konkrétními fakty",
    desc: "Jeden nápad na odstavec. Čísla, procenta, jména zdrojů. Doložené tvrzení se cituje snáz než obecná vata.",
  },
  {
    title: "Podnadpisy H2/H3 jako sub-otázky",
    desc: "Každý podnadpis odpovídá na konkrétní pod-dotaz. Pomáhá AI mapovat strukturu stránky a ukotvit ji k tématu.",
  },
  {
    title: "FAQ z reálných dotazů — jako obsah, ne kvůli odznaku ve výsledku",
    desc: "Otázky berte ze Search Console nebo z bloku „Další dotazy“. FAQ pokrývá navazující otázky a dává krátké citovatelné odpovědi. Odznak ve výsledcích za ně Google zrušil v květnu 2026 — dělejte je pro čtenáře.",
  },
  {
    title: "Strukturovaná data pro stroje — ne jako páka citací",
    desc: "Strojově čitelný JSON-LD (<code>Article</code>, <code>Organization</code>, <code>Product</code>) pomáhá vyhledávačům pochopit typ obsahu. Vliv na citace v AI ale doložený není — Ahrefs (5/2026, vzorek stránek se stovkou citací měsíčně) ani Google (7/2026) ho neprokazují.",
  },
  {
    title: "Viditelné datum revize a jmenovaný autor",
    desc: "Kdy naposledy někdo obsah prošel a kdo za ním stojí. Čerstvost a doložené autorství patří mezi signály, které se v analýzách citovaných stránek objevují opakovaně — a čtenáři to řekne totéž.",
  },
];

/**
 * SVG wireframe popisky (text uvnitř `<svg>` v sekci 03). Externalizováno pro
 * mutace; značky/souřadnice SVG zůstávají v `index.astro`. Pozn.: ukázka
 * JSON-LD schema kódu uvnitř SVG je ponechaná v šabloně (kód, jazykově neutrální).
 */
export const wireframe = {
  aria:
    "Drátěný model stránky připravené pro AI se šesti očíslovanými prvky: H1 jako otázka, krátká odpověď, hutný text, podnadpisy, FAQ a strukturovaná data.",
  h1: "H1: Co je AI SEO?",
  answerLabel: "STRUČNÁ ODPOVĚĎ",
  h2: "H2: Jak začít s GEO?",
  faqLabel: "FAQ",
  faqQ1: "Q: Jak optimalizovat pro ChatGPT?",
  faqQ2: "Q: Co je rozdíl SEO a GEO?",
};

/** FreeStrip promo (props pro komponentu). Fork může nastavit na null → sekce se skryje. */
export const freeStrip = {
  title: "Šest signálů stránky připravené pro AI jako",
  titleHighlight: "hotový návod pro vaši homepage",
};

/** Sekce 04 — promo hlavního průvodce. */
export const pillarPromo = {
  eyebrowNum: "04",
  eyebrow: "Hlavní průvodce",
  title:
    'SEO vs. GEO vs. AEO vs. AIO: <strong>kompletní průvodce</strong> <span class="hl">4 zkratkami</span> pro AI éru',
  lead: "Hlavní článek, který každou disciplínu rozebírá od definice přes srovnání až po rozhodovací matici. Doporučené čtení v jedné dávce.",
  meta: ["Asi 3 000 slov", "Sedm častých otázek", "Srovnávací tabulka", "12 minut čtení"],
  btnLabel: "Otevřít hlavní průvodce",
  btnHref: "/seo-vs-geo-vs-aeo-vs-aio/",
  excerptMark: "Z hlavního průvodce",
  excerptText:
    "Když chce váš zákazník odpověď, ptá se ChatGPT, Perplexity nebo Googlu s AI Overview. Vy potřebujete, aby <strong>v té odpovědi</strong> zazněla vaše značka — a aby z ní vedla cesta zpět k vám. Průvodce ukáže, co konkrétně na webu nebo e-shopu upravit.",
};

/** Sekce 05 — Vybrané články. */
/** KUDY DO OBSAHU — rozcestník hubů (fork skryje prázdným polem items). */
/**
 * Počty v téhle sekci se NEPÍŠOU ručně — `{articles}`, `{terms}`, `{parts}`
 * a `{tags}` dosadí `index.astro` z kolekcí při buildu. Ruční čísla se rozešla
 * se skutečností pokaždé: 8. 9. 2026 stálo na homepage „50+ pojmů“, slovník
 * jich měl 64, a audit navrhoval opravit na 55 (taky špatně). Text zůstává tady
 * kvůli mutacím, počítání patří šabloně.
 */
export const contentNavHead: SectionHead = {
  eyebrowNum: "05",
  eyebrow: "Kudy do obsahu",
  title: "{articles} článků. <strong>Tady jsou čtyři vstupy</strong>, ať se neztratíte",
};

export const contentNav = [
  {
    href: "/zacnete-tady/",
    title: "Začněte tady",
    desc: "Jste tu poprvé? Kurátorovaná cesta ve třech fázích — pochopit, zavést, měřit.",
    label: "Pro nováčky",
  },
  {
    href: "/serie/ai-seo-pro-eshopy/",
    title: "Série pro e-shopy",
    desc: "Deset dílů v pořadí jako kurz: od produktových stránek po nákupní agenty.",
    label: "{parts} dílů",
  },
  {
    href: "/blog/tema/strategie/",
    title: "Témata blogu",
    desc: "Články roztříděné do devíti oblastí — strategie, měření, e-shopy, technika…",
    label: "{tags} témat",
  },
  {
    href: "/slovnik/",
    title: "Slovník pojmů",
    desc: "Režim AI, GEO, rozklad dotazu, zero-click — krátké definice s kotvami k citování.",
    label: "{terms} pojmů",
  },
];

export const articlesHead: SectionHead = {
  eyebrowNum: "06",
  eyebrow: "Vybrané články",
  title: "Nejčtenější <strong>návody a rozbory</strong>",
};

export const scards = [
  {
    href: "/prakticky-postup/",
    d: "practice",
    tag: "Praxe",
    time: "9 minut",
    title: "Praktický postup ve čtyřech krocích",
    desc: "Audit obsahu, strukturovaná data, krátká odpověď nahoře a měření. Plus 90denní kalendář, jak na to.",
    words: "Asi 1 400 slov",
  },
  {
    href: "/rozhodovaci-matice/",
    d: "matrix",
    tag: "Rozhodování",
    time: "10 minut",
    title: "Rozhodovací matice — co kdy použít",
    desc: "Pro e-shopy, B2B služby, lokální podniky a vydavatele. Plus rozhodovací stromek, kterým si projdete vlastní situaci.",
    words: "Asi 1 500 slov",
  },
  {
    href: "/blog/jak-vypnout-ai-overview/",
    d: "defense",
    tag: "Návod",
    time: "14 minut",
    title: "Jak vypnout AI Overviews v Googlu",
    desc: "Pět ověřených způsobů — pro běžné uživatele i pro správce webů, kteří nechtějí, aby jim AI odpovědi „kradla“.",
    words: "Asi 2 200 slov",
  },
  {
    href: "/blog/seo-pro-eshopy-ai-era-2026/",
    d: "seo",
    tag: "Pro e‑shopy",
    time: "13 minut",
    title: "SEO pro e‑shopy v AI éře 2026",
    desc: "Co konkrétně změnit v kategoriích, na produktových stránkách a v obsahu. Reálné ceny v ČR a kdy se vyplatí najmout agenturu.",
    words: "Asi 2 600 slov",
  },
  {
    href: "/blog/rezim-ai-google/",
    d: "matrix",
    tag: "Návod",
    time: "11 minut",
    title: "Režim AI v Googlu: zapnutí, vypnutí a co v něm najdete",
    desc: "Nová konverzační vrstva Googlu, česky od října 2025. Jak ji zapnout, jak se jí vyhnout a co to znamená pro váš web.",
    words: "Asi 2 000 slov",
  },
  {
    href: "/blog/chatgpt-seo/",
    d: "practice",
    tag: "Test",
    time: "12 minut",
    title: "Jak být citovaný v ChatGPT",
    desc: "Test na patnácti českých dotazech — koho ChatGPT cituje, odkud bere zdroje a co s tím jde reálně dělat.",
    words: "Asi 2 100 slov",
  },
];

export const articlesMore = {
  label: "Zobrazit všechny články",
  href: "/blog/",
};

/** Sekce 06 — Nabídka (3 produkty). */
export const offersHead: SectionHead = {
  eyebrowNum: "07",
  eyebrow: "Co můžete dělat dál",
  title: "Tři způsoby, jak <strong>posunout svůj web</strong> do AI éry",
  lead:
    "Od návodu zdarma po audit a&nbsp;služby agentury. Vyberte si podle toho, kolik chcete řešit sami a&nbsp;kolik nechat na&nbsp;nás.",
};

/** Řádek pod nabídkou — jediná primární cesta z homepage na poptávku služeb. */
export const offersFooter = {
  text: "Chcete to nechat na nás celé — od auditu přes zavedení po měření?",
  linkLabel: "Poptat služby agentury",
  href: "/sluzby/",
};

export const offers = [
  {
    href: "/navod-zdarma/",
    mod: "free",
    tag: "Návod zdarma",
    priceMain: "0&nbsp;Kč",
    priceNote: "ke&nbsp;stažení hned",
    title: "Hotový návod pro homepage v&nbsp;AI&nbsp;éře",
    desc: "Wireframe s&nbsp;anotacemi, tři principy struktury a&nbsp;šablony textů. Šest stran A4, ze&nbsp;kterých si rovnou vezmete, co potřebujete pro svou homepage.",
    bullets: [
      "6&nbsp;stran konkrétních úprav",
      "Wireframe homepage s&nbsp;10&nbsp;anotacemi",
      "Tři principy + 5&nbsp;typických chyb",
    ],
    cta: "Stáhnout zdarma",
  },
  {
    href: "/pack/",
    mod: "pack",
    tag: "AI&nbsp;SEO Wireframe Pack",
    priceMain: "1&nbsp;490&nbsp;Kč",
    priceNote: "bez DPH &middot; jednorázově",
    priceVat: "1&nbsp;803&nbsp;Kč s&nbsp;DPH",
    title: "Kompletní framework pro 7&nbsp;typů stránek",
    desc: "Ucelená sada wireframů, anotací a&nbsp;šablon textů — všechno připravené k&nbsp;okamžitému použití na&nbsp;vašem webu. Bez konzultantů, bez měsíců práce.",
    bullets: [
      "7&nbsp;anotovaných wireframů",
      "Šablony textů + ukázky strukturovaných dat",
      "Návod pro Upgates / Shoptet / WordPress",
    ],
    cta: "Zobrazit Pack",
  },
  {
    href: "/audit/",
    mod: "audit",
    featuredPill: "★ Nejvyšší hodnota",
    tag: "AI&nbsp;SEO audit od&nbsp;Sniper Design",
    priceMain: "3&nbsp;600&nbsp;Kč",
    priceNote: "bez DPH &middot; jednorázově",
    priceVat: "4&nbsp;356&nbsp;Kč s&nbsp;DPH",
    title: "Přesný plán pro váš konkrétní web",
    desc: "Důkladná analýza vašeho webu od&nbsp;Sniper Design týmu. Prioritní seznam úprav s&nbsp;odhadem dopadu + 60min konzultace nad výsledky.",
    bullets: [
      "Audit v&nbsp;technice, obsahu a&nbsp;důvěryhodnosti",
      "Prioritní seznam úprav s&nbsp;odhadem dopadu",
      "Výstup do&nbsp;5 pracovních dní",
      "60min konzultace s&nbsp;naším týmem",
    ],
    cta: "Objednat audit",
  },
];

/** Eyebrow num pro SniperDesignBigContact. */
export const bigContactEyebrowNum = "07";
