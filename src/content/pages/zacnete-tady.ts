/**
 * Datový modul /zacnete-tady/ — vstupní hub pro nováčky.
 *
 * Kurátorovaná cesta webem ve 3 fázích (Pochopit → Zavést → Měřit):
 * na rozdíl od tag stránek (automatický výpis tématu) tady držíme ruční
 * výběr a POŘADÍ. Když vyjde lepší článek na dané téma, vyměň krok zde.
 * Fork přeloží texty; href nechává dle vlastních slugů.
 *
 * POZOR na roli stránky: hub je **vnitřní rozcestník**, ne akviziční stránka.
 * Za 90 dní k 12. 9. 2026 měl 6 impresí a 0 kliků. Nemá smysl ho psát pro
 * vyhledávání — jeho práce je dostat čtenáře co nejrychleji na správný článek.
 * Proto tolik odkazů a tak málo vlastního výkladu.
 */

export const meta = {
  title: "Začněte tady: jak na AI SEO krok za krokem",
  description:
    "Nevíte, kde s AI SEO začít? Kurátorovaná cesta ve třech fázích — pochopit disciplíny, upravit web a změřit výsledky. Včetně režimu AI a Přehledu od AI.",
  /** Datum revize — vykresluje se pod hero a jde do HowTo `dateModified`. */
  updated: "2026-09-12",
};

export const hero = {
  eyebrow: "Začněte tady",
  title: "Jak na AI SEO — cesta pro ty, kdo začínají",
  /** `{articles}` a `{terms}` dosadí šablona z kolekcí — ručně psaná čísla zastarávají. */
  lead: "Na webu je {articles} článků, osm sekcí a slovník s {terms} hesly. Tahle stránka vám řekne, co číst v jakém pořadí — podle toho, kde právě jste. Za tři fáze projdete od „co to vůbec je“ k měřitelným výsledkům.",
  /**
   * Krátká odpověď 40–60 slov. Záměrně NEdefinuje „co je AI SEO“ — to vlastní
   * homepage a heslo ve slovníku. Tahle stránka odpovídá na „jak začít“.
   */
  answer:
    "Začněte tím, že pochopíte rozdíl mezi disciplínami — SEO, GEO, AEO a AIO. Pak upravte web: krátké odpovědi, hutný text, přístup pro roboty. Nakonec měřte v Search Console, v Bing Webmaster Tools a v GA4. Tři fáze níž mají ke každému kroku článek, který ho rozebírá do detailu.",
};

export interface HubStep {
  href: string;
  label: string;
  /** Jedna věta: proč tenhle krok a co z něj mít. */
  why: string;
  /** Volitelný druhý odkaz — navazující nebo praktický doplněk k hlavnímu. */
  also?: { href: string; label: string };
}

export interface HubPhase {
  /** Číslo fáze (1–3) — zobrazí se v badge. */
  num: string;
  title: string;
  /** Jedna věta shrnující cíl fáze — jde i do HowTo JSON-LD. */
  goal: string;
  steps: HubStep[];
}

export const phases: HubPhase[] = [
  {
    num: "1",
    title: "Pochopit",
    goal: "Získejte mapu terénu: co jednotlivé disciplíny znamenají, jak se liší a proč se vyhledávání právě teď mění.",
    steps: [
      {
        href: "/seo-vs-geo-vs-aeo-vs-aio/",
        label: "Hlavní průvodce: SEO vs. GEO vs. AEO vs. AIO",
        why: "Celá mapa na jednom místě za ~12 minut — po přečtení víte, o čem zbytek webu mluví.",
      },
      {
        href: "/ai-mode/",
        label: "Režim AI (Google AI Mode)",
        why: "Konverzační vrstva Googlu, která dotaz rozloží na dílčí otázky. V češtině od října 2025, přes miliardu uživatelů měsíčně.",
        also: { href: "/blog/rezim-ai-google/", label: "jak ho zapnout a vypnout" },
      },
      {
        href: "/prehled-od-ai/",
        label: "Přehled od AI (AI Overviews)",
        why: "Souhrn nad výsledky Googlu. Navazující otázka z něj přechází rovnou do režimu AI — proto se řeší spolu.",
        also: { href: "/blog/jak-vypnout-ai-overview/", label: "jak se mu vyhnout" },
      },
      {
        href: "/blog/zero-click-ai/",
        label: "Zero-click éra",
        why: "Proč klesají prokliky, i když viditelnost roste — kontext, bez kterého čísla nedávají smysl.",
      },
      {
        href: "/blog/jak-se-dostat-do-ai-odpovedi/",
        label: "Jak se vůbec dostat do odpovědí AI",
        why: "Rozcestník podle kanálu: co rozhoduje u Googlu, co u chatovacích nástrojů a co je společné.",
        also: { href: "/blog/jak-overit-dostupnost-ai-funkce/", label: "je ta funkce vůbec v Česku?" },
      },
      {
        href: "/rozhodovaci-matice/",
        label: "Kterou disciplínu řešit první",
        why: "Matice podle typu firmy — e-shop, B2B, lokální firma a médium mají jiné pořadí kroků.",
      },
      {
        href: "/slovnik/",
        label: "Slovník pojmů",
        why: "Nechte si ho otevřený vedle — každý pojem z článků v něm má krátkou definici s kotvou.",
      },
    ],
  },
  {
    num: "2",
    title: "Zavést",
    goal: "Upravte web: zjistěte výchozí stav auditem, pak projděte obsah a nakonec otevřete web robotům, kteří rozhodují o citaci.",
    steps: [
      {
        href: "/blog/seo-audit-co-kontrolovat/",
        label: "Audit: co kontrolovat",
        why: "Než začnete měnit, změřte výchozí stav. Seznam oblastí, které rozhodují.",
      },
      {
        href: "/prakticky-postup/",
        label: "Praktický postup ve čtyřech krocích",
        why: "Metodika krok za krokem — v jakém pořadí web upravovat, ať neděláte věci dvakrát.",
      },
      {
        href: "/blog/aktualizace-obsahu-pro-ai/",
        label: "Aktualizace toho, co už máte",
        why: "Nejlevnější krok s měřitelným dopadem. Podle analýzy Seer (7/2026) bylo 75 % citovaných stránek aktualizováno za poslední rok.",
      },
      {
        href: "/blog/ai-seo-content/",
        label: "Citovatelný obsah",
        why: "Čtyři principy, díky kterým AI váš text cituje místo aby ho přeskočila — základ všeho dalšího.",
        also: { href: "/blog/query-fan-out-ai-mode/", label: "proč pokrýt i dílčí otázky" },
      },
      {
        href: "/blog/ai-brand-mentions/",
        label: "Zmínky o značce mimo web",
        why: "Odpovědi AI čerpají i odjinud než z vašeho webu. Kde se zmínky budují a kde to nemá cenu.",
      },
      {
        href: "/blog/strukturovana-data-pro-ai/",
        label: "Strukturovaná data",
        why: "JSON-LD, kterým strojům vysvětlíte, kdo jste a o čem stránky jsou. Nasazujte kvůli srozumitelnosti — vliv na citace doložený není.",
        also: { href: "/blog/schema-markup-ai-citace-test/", label: "co ukázal test" },
      },
      {
        href: "/blog/ai-crawler-robots-txt/",
        label: "Roboti v robots.txt",
        why: "Rozlište roboty podle účelu, ne je povolte nebo zakažte plošně. Pozor: roboty vyvolané uživatelem robots.txt neřídí.",
        also: { href: "/blog/co-vypne-ktery-opt-out/", label: "co vypne který opt-out" },
      },
    ],
  },
  {
    num: "3",
    title: "Měřit",
    goal: "Sledujte výsledky: zobrazení v generativních funkcích v Search Console, citace v Copilotu přes Bing a návštěvy z nástrojů AI v GA4.",
    steps: [
      {
        href: "/blog/gsc-ai-segmenty-mereni/",
        label: "Search Console: report Funkce s generativní AI",
        why: "Od 31. 8. 2026 pro všechny weby. Ukazuje zobrazení z Přehledu od AI a z režimu AI — bez kliků a dotazů.",
        also: { href: "/blog/blokovat-ai-odpovedi-gsc/", label: "a přepínač, kterým se dá vyřadit" },
      },
      {
        href: "/blog/bing-ai-performance-report/",
        label: "Bing Webmaster Tools: AI Performance",
        why: "Druhý bezplatný zdroj. Na rozdíl od Googlu ukazuje i podíl citací — pro Copilota jediné přímé měření.",
      },
      {
        href: "/blog/ai-navstevnost-konverze/",
        label: "GA4: návštěvy z nástrojů AI",
        why: "Segment pro chatgpt.com, gemini.google.com, claude.ai a perplexity.ai. Prokliky z Přehledu od AI a z režimu AI se slévají do google / organic a oddělit se nedají.",
      },
      {
        href: "/blog/test-viditelnosti-v-ai/",
        label: "Ruční test viditelnosti",
        why: "Hodina práce a hotové dotazy. Ptejte se opakovaně a v anonymním okně — odpovědi se mění.",
        also: { href: "/blog/volatilita-ai-odpovedi/", label: "proč se odpovědi liší" },
      },
      {
        href: "/ai-viditelnost/",
        label: "Co znamená AI viditelnost",
        why: "Výsledek, který měříte. Jak ho číst a co s ním dělat dál.",
        also: { href: "/blog/co-ai-seo-nezvladne/", label: "a co zaručit nejde" },
      },
      {
        href: "/blog/case-study-megadetail-ai-navstevnost/",
        label: "Případová studie: reálná čísla",
        why: "Náš vlastní e-shop jako srovnávací bod — co je normální objem a co od toho čekat.",
        also: { href: "/blog/kolik-stoji-ai-seo/", label: "kolik to stojí" },
      },
    ],
  },
];

/** Řádek pod fázemi — časový rámec neduplikujeme, odkazujeme na vlastníka. */
export const timeframe = {
  text: "Kolik času na to počítat? Kalendář na 90 dní má",
  links: [
    { href: "/prakticky-postup/", label: "praktický postup" },
    { href: "/blog/aio-strategie/", label: "plán podle zralosti firmy" },
  ],
};

export interface RoleCard {
  title: string;
  desc: string;
  links: { href: string; label: string }[];
}

export const roles = {
  title: "Nebo si vyberte cestu podle role",
  lead: "Univerzální cesta nesedí každému. Pět nejčastějších situací má vlastní výběr článků — ručně vybraných, ne automaticky vypsaných podle štítku.",
  items: [
    {
      title: "Mám e-shop",
      desc: "Produktová data rozhodují víc než texty.",
      links: [
        { href: "/serie/ai-seo-pro-eshopy/", label: "Série o deseti dílech" },
        { href: "/blog/produktove-stranky-pro-ai/", label: "Produktové stránky" },
        { href: "/blog/kategorie-texty-pro-ai/", label: "Texty kategorií" },
        { href: "/blog/produktovy-feed-gtin/", label: "Feed a GTIN" },
        { href: "/blog/nakupovani-pres-ai/", label: "Nakupování přes AI" },
      ],
    },
    {
      title: "Mám lokální firmu nebo služby",
      desc: "Hlavní páky leží mimo web — v profilu a recenzích.",
      links: [
        { href: "/blog/local-seo-cesko-2026/", label: "Lokální SEO v Česku" },
        { href: "/blog/firmy-cz-pro-ai/", label: "Firmy.cz" },
        { href: "/blog/recenze-a-hodnoceni-pro-ai/", label: "Recenze a hodnocení" },
        { href: "/blog/ask-maps-odpovedi-v-mapach/", label: "Odpovědi v Mapách" },
        { href: "/blog/stranka-sluzby-pro-ai/", label: "Stránka služby" },
      ],
    },
    {
      title: "Provozuji magazín nebo obsahový web",
      desc: "Obsah je produkt, takže prokliky jsou příjem.",
      links: [
        { href: "/blog/zero-click-ai/", label: "Zero-click a jak ho měřit" },
        { href: "/blog/propady-navstevnosti-vydavatelu/", label: "Propady návštěvnosti" },
        { href: "/blog/preferovane-zdroje-google/", label: "Preferované zdroje" },
        { href: "/blog/vysoce-citovany-stitek-google/", label: "Vysoce citovaný štítek" },
        { href: "/blog/licencni-dohody-ai-obsah/", label: "Licenční dohody" },
      ],
    },
    {
      title: "Tvořím obsah",
      desc: "Jak psát, aby šel text citovat po částech.",
      links: [
        { href: "/blog/ai-seo-content/", label: "Obsah, který AI cituje" },
        { href: "/blog/pasazova-optimalizace-obsahu/", label: "Pasážová optimalizace" },
        { href: "/blog/srovnavaci-clanky-pro-ai/", label: "Srovnávací články" },
        { href: "/blog/aktualizace-obsahu-pro-ai/", label: "Aktualizace obsahu" },
        { href: "/blog/e-e-a-t-pro-ai/", label: "Důvěryhodnost a autorství" },
      ],
    },
    {
      title: "Řeším techniku webu",
      desc: "Co robot nepřečte, to necituje.",
      links: [
        { href: "/blog/ai-crawler-robots-txt/", label: "Roboti v robots.txt" },
        { href: "/blog/javascript-a-ai-roboti/", label: "JavaScript a roboti" },
        { href: "/blog/core-web-vitals-pro-ai/", label: "Rychlost a Core Web Vitals" },
        { href: "/blog/llms-txt-navod/", label: "llms.txt (Googlu nepomáhá ani neškodí)" },
        { href: "/blog/ai-seo-migrace-redesign/", label: "Migrace a redesign" },
      ],
    },
  ] as RoleCard[],
};

export const cta = {
  title: "Nechcete to řešit sami?",
  lead: "**AI SEO audit od Sniper Design za 3 600 Kč bez DPH** změří, jak je na tom váš web v ChatGPT, v režimu AI a v Přehledu od AI, a navrhne priority — dostanete konkrétní plán místo hádání. Dlouhodobou spolupráci řeší [služby agentury](/sluzby/).",
  button: "Chci AI SEO audit",
  href: "/audit/",
  /** Měkká alternativa pro ty, kdo chtějí nejdřív zjistit, jak na tom jsou. */
  soft: { href: "/blog/test-viditelnosti-v-ai/", label: "Nebo si udělejte test viditelnosti zdarma za hodinu" },
};

export const faq = [
  {
    q: "Co je AI SEO a v čem se liší od klasického SEO?",
    a: "AI SEO staví na klasickém SEO (technický stav, obsah, autorita) a přidává vrstvu navíc: citovatelnost v nástrojích AI. Cílem už není jen pozice ve výsledcích, ale být zdrojem, ze kterého ChatGPT, Gemini, Claude, Perplexity nebo Přehled od AI skládají odpověď. Základy se nemění — mění se jednotka optimalizace. Plná definice je ve [slovníku](/slovnik/ai-seo/).",
  },
  {
    q: "Co mám udělat úplně jako první?",
    a: "Přečtěte si [hlavního průvodce](/seo-vs-geo-vs-aeo-vs-aio/) (~12 minut) a pak si udělejte rychlý test: zeptejte se ChatGPT, Gemini a režimu AI na svůj obor a podívejte se, koho citují. Ptejte se opakovaně a v anonymním okně — [odpovědi se mění](/blog/volatilita-ai-odpovedi/) mezi pokusy i mezi uživateli. Ta kombinace je lepší start než jakákoli izolovaná technická úprava.",
  },
  {
    q: "Kolik času zabere s AI SEO začít?",
    a: "Fáze Pochopit je odpoledne čtení. Fáze Zavést závisí na stavu webu — první viditelné úpravy (krátké odpovědi, aktualizace nejsilnějších stránek, přístup pro roboty) jsou jednotky hodin až dnů. Výsledky se typicky projevují v týdnech až měsících, proto má smysl začít měřit hned, ne až po úpravách.",
  },
  {
    q: "Musím přestat dělat klasické SEO?",
    a: "Ne — právě naopak. Systémy AI čerpají z indexu vyhledávačů: co není dohledatelné a indexované, nemůže být citované. Kvalitní klasické SEO je vstupenka; AI SEO na něm staví citovatelným obsahem, důvěryhodnou značkou a měřením nových kanálů.",
  },
  {
    q: "Jak poznám, že to funguje?",
    a: "Třemi měřítky. Report Funkce s generativní AI v Search Console (od 31. 8. 2026 pro všechny weby) ukazuje zobrazení z Přehledu od AI a z režimu AI — bez kliků a dotazů. [Bing Webmaster Tools](/blog/bing-ai-performance-report/) přidávají citace v Copilotu včetně podílu. A v GA4 sledujte návštěvy z nástrojů AI — spíš konverze než objem.",
  },
  {
    q: "Kde najdu návody na zapnutí a vypnutí funkcí AI?",
    a: "Režim AI rozebírá [samostatný návod](/blog/rezim-ai-google/) — zapnutí, vypnutí i co v něm je. Přehled od AI se plošně vypnout nedá, jde jen obejít filtrem „Web“; možnosti má [jak vypnout Přehled od AI](/blog/jak-vypnout-ai-overview/). Jako vlastník webu se z funkcí generativní AI můžete vyřadit [přepínačem v Search Console](/blog/blokovat-ai-odpovedi-gsc/).",
  },
  {
    q: "Funguje AI SEO i pro Seznam?",
    a: "Ano a řeší se zvlášť. Seznam Asistent je od 25. 5. 2026 dostupný všem přihlášeným a čerpá z indexu Seznamu, ze Zboží.cz a z Firmy.cz — tedy z jiných zdrojů než Google. Opt-out má taky vlastní: `Seznam-Extended`. Rozpad má [Seznam a AI vyhledávání](/blog/seznam-cz-ai-vyhledavani/).",
  },
  {
    q: "Dá se citace v AI zaručit?",
    a: "Ne. Odpovědi se liší mezi pokusy, mezi uživateli i v čase, takže žádná úprava nezaručí, že vás konkrétní nástroj zmíní. Co jde ovlivnit, je pravděpodobnost — dostupnost pro roboty, formát odpovědi, doložená fakta a zmínky jinde. Kde jsou meze, rozebírá [co AI SEO nezvládne](/blog/co-ai-seo-nezvladne/).",
  },
  {
    q: "Musím mít llms.txt?",
    a: "Nemusíte. Google k němu 15. 6. 2026 uvedl, že nepomáhá ani neškodí, a žádný velký vyhledávač ho nepoužívá jako signál. Pokud ho chcete mít, nic tím nezkazíte — jen od něj nečekejte efekt. Detail má [návod na llms.txt](/blog/llms-txt-navod/).",
  },
  {
    q: "Nemám na to kapacitu — dá se to zadat?",
    a: "Ano. Nejmenší smysluplný krok je [AI SEO audit](/audit/) za 3 600 Kč bez DPH: změříme viditelnost webu v odpovědích AI, projdeme technický stav i obsah a dostanete prioritizovaný plán. Realizaci pak zvládnete interně podle návodů na tomhle webu, nebo ji převezmou [služby agentury](/sluzby/).",
  },
];

/** HowTo JSON-LD — název + kroky skládá šablona z `phases` (goal texty). */
export const howtoName = "Jak začít s AI SEO ve třech fázích";
