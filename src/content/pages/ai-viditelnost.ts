/**
 * Datový modul prodejní stránky /ai-viditelnost/ — „200 000 zobrazení v AI“.
 *
 * Marketingová landing nad reálnými daty z GSC/GA4 e-shopu MEGA DETAIL
 * (screenshoty v public/ai-viditelnost/). Fork přeloží texty; čísla jsou
 * sdílená fakta. Při aktualizaci dat (nový měsíc, po optimalizaci)
 * aktualizovat i case study a i18n/proof.ts.
 *
 * POCTIVOST: vždy „zobrazení“ (metrika Search Console), nikdy „návštěvy“.
 *
 * ROLE STRÁNKY (od 13. 9. 2026): tohle je stránka s DŮKAZEM, ne s definicí.
 * Dotaz „viditelnost v AI vyhledávání“ drží slovníkové heslo /slovnik/ai-viditelnost/
 * (20 impresí @ 14,8 proti 12 @ 26,5 tady). Titulek proto nevede tou frází,
 * ale tím, co nemá žádná jiná stránka — skutečnými screenshoty 200 000 zobrazení.
 * Definici přenechává heslu a odkazuje na něj.
 */

export const meta = {
  title: "200 000 zobrazení v Přehledu od AI: data e-shopu ze Search Console",
  description:
    "Reálná data ze Search Console: e-shop MEGA DETAIL se za necelé dva měsíce zobrazil 200 000× v Přehledu od AI a v režimu AI. Jak se AI viditelnost měří.",
  /** Období dat ve screenshotech — vykresluje se pod hero. */
  dataPeriod: "18. 5. – 15. 7. 2026",
  /** Datum revize textu — vykresluje se pod hero a jde do `dateModified`. */
  updated: "2026-09-13",
};

export const hero = {
  eyebrow: "AI viditelnost · reálná data · e-shop agentury Sniper Design",
  titleHtml:
    "<strong>200&nbsp;000 zobrazení</strong> v&nbsp;Přehledu od AI a&nbsp;v&nbsp;režimu AI za&nbsp;dva měsíce",
  lead: "Když se dnes lidé ptají Googlu, odpověď jim často složí AI přímo ve výsledcích. Za necelé dva měsíce se v těch odpovědích 200 000× objevil náš vlastní e-shop MEGA DETAIL. Tahle čísla jsou výchozí stav — od 10. 8. 2026 e-shop cíleně optimalizujeme a data budeme zveřejňovat průběžně.",
  ctaPrimary: { label: "Chci audit AI viditelnosti", href: "/audit/" },
  ctaSecondary: { label: "Prohlédnout všechny služby", href: "/sluzby/" },
};

/**
 * Krátká odpověď pod hero — 40–60 slov. Definici drží slovníkové heslo;
 * tady jen tolik, aby stránka dávala smysl i bez něj, a hned rozlišení
 * tří pojmů, které se v praxi pletou.
 */
export const answer = {
  /** Mini markdown — vykresluje komponenta Answer (štítek „Stručná definice“). */
  text: "**AI viditelnost** je míra, v jaké se web objevuje v odpovědích systémů AI — v Přehledu od AI a v režimu AI v Googlu, v ChatGPT, Gemini, Claude, Perplexity, Copilotu i v Seznam Asistentovi. Měří se zobrazeními, návštěvami a zmínkami. Plná definice je ve [slovníku](/slovnik/ai-viditelnost/).",
  distinctions: [
    { term: "Zmínka", text: "odpověď jmenuje vaši značku — bez odkazu" },
    { term: "Citace", text: "odpověď uvede váš web jako zdroj s odkazem" },
    { term: "Doporučení", text: "odpověď vás výslovně nabídne jako volbu" },
  ],
  distinctionsNote: "Tři různé věci, které se měří odděleně — a každá platforma je vykazuje jinak.",
};

/** Reálný screenshot 1 — report s grafem. */
export const shot1 = {
  src: "/ai-viditelnost/gsc-report.png",
  alt: "Reálný screenshot Google Search Console — report Funkce s generativní AI e-shopu MEGA DETAIL: 200 tisíc zobrazení za necelé dva měsíce (18. 5. – 15. 7. 2026), denní křivka kolem 3–4,5 tisíce zobrazení",
  caption:
    "Reálný, neupravený výřez ze Search Console e-shopu megadetail.cz — report „Funkce s generativní AI“, období 18. 5. – 15. 7. 2026. Křivka ukazuje, kolikrát denně se web objevil v Přehledu od AI nebo v režimu AI (report je nerozlišuje).",
  width: 1296,
  height: 577,
};

/** Reálný screenshot 2 — tabulka top stránek. */
export const shot2 = {
  src: "/ai-viditelnost/gsc-stranky.png",
  alt: "Reálný screenshot Google Search Console — nejzobrazovanější stránky ve funkcích s generativní AI: samé edukativní články e-shopu MEGA DETAIL",
  caption:
    "Stejný report, záložka Stránky: deset nejzobrazovanějších URL v AI odpovědích. Všech deset jsou edukativní články — ani jedna produktová stránka.",
  width: 1296,
  height: 663,
};

/** Sekce „co to znamená“ — 3 pointy. */
export const means = {
  eyebrow: "Co to znamená",
  title: "AI odpovědi jsou nová výloha. Buď v ní jste, nebo ne.",
  items: [
    {
      num: "01",
      title: "3 400 příležitostí denně",
      text: "Každé zobrazení = moment, kdy Google něčí otázku zodpověděl i pomocí našeho obsahu. To je viditelnost, kterou v Google Analytics vůbec neuvidíte — odehrává se ještě před kliknutím.",
    },
    {
      num: "02",
      title: "AI si vybírá obsah, ne katalog",
      text: "Všech deset nejzobrazovanějších stránek jsou články, které odpovídají na reálné otázky („po kolika km se dělají rozvody?“). Produktové stránky a homepage v top 10 nejsou. Bez edukativního obsahu nemá AI co citovat.",
    },
    {
      num: "03",
      title: "Kdo přece jen klikne, nakupuje",
      text: "Návštěvy z ChatGPT konvertovaly na 3,5 % proti 0,88 % z Google organic a přinesly 29,50 Kč na návštěvu proti 10,30 Kč (12 měsíců do 16. 7. 2026). Tedy zhruba čtyřikrát lepší konverze a trojnásobná tržba. AI posílá málo lidí — ale rozhodnutých.",
    },
  ],
};

/** Jak se to dělá — 4 kroky s odkazy do webu. */
export const how = {
  eyebrow: "Jak se to dělá",
  title: "Žádné triky. Čtyři věci, které AI systémy odměňují.",
  lead: "MEGA DETAIL nemá zázračný plugin. Má roky poctivé práce s obsahem — přesně to, co učíme v průvodcích na tomto webu a nasazujeme klientům:",
  steps: [
    {
      title: "Obsah, který odpovídá na otázky",
      text: "Články na dotazy, které lidé opravdu řeší — s krátkou odpovědí nahoře a fakty místo frází.",
      href: "/blog/ai-seo-content/",
      linkLabel: "Průvodce obsahem pro AI",
    },
    {
      title: "Struktura, kterou stroj přečte",
      text: "Jasné nadpisy, definice v první větě, tabulky a FAQ — z toho AI skládá odpověď. Strukturovaná data pomáhají strojům pochopit typ obsahu, ale vliv na citace podle Googlu (7/2026) ani testu Ahrefs (5/2026) doložený není.",
      href: "/blog/strukturovana-data-pro-ai/",
      linkLabel: "Průvodce strukturovanými daty",
    },
    {
      title: "Značka, které jde věřit",
      text: "Skuteční autoři, fyzická prodejna, dohledatelná entita. AI doporučuje firmy, které si umí ověřit.",
      href: "/blog/e-e-a-t-pro-ai/",
      linkLabel: "Průvodce E-E-A-T",
    },
    {
      title: "Měření místo dojmů",
      text: "Search Console pro zobrazení v Googlu, Bing Webmaster Tools pro Copilota, GA4 pro návštěvy z chatgpt.com, gemini.google.com a claude.ai a pravidelný ruční test. Bez měření nevíte, jestli to funguje.",
      href: "/blog/gsc-ai-segmenty-mereni/",
      linkLabel: "Průvodce měřením",
    },
  ],
};

/**
 * Jak se AI viditelnost měří — tři vrstvy, každá jednou větou a odkazem na článek,
 * který ji vlastní. Záměrně bez tabulky nástrojů: kanonická tabulka je
 * v /blog/ai-seo-nastroje/ a druhá by se s ní rozešla.
 */
export const measure = {
  eyebrow: "Jak se to měří",
  title: "Tři vrstvy AI viditelnosti — a čím každou změřit",
  layers: [
    {
      name: "Zobrazení",
      text: "Kolikrát se web objevil přímo v odpovědi. Pro Google je to report Funkce s generativní AI v Search Console, pro Copilota Bing Webmaster Tools.",
      links: [
        { href: "/blog/gsc-ai-segmenty-mereni/", label: "Search Console" },
        { href: "/blog/bing-ai-performance-report/", label: "Bing Webmaster Tools" },
      ],
    },
    {
      name: "Návštěvy",
      text: "Kolik lidí z odpovědi prokliklo. V GA4 podle zdroje relace; prokliky z Přehledu od AI se ale slévají do google / organic a oddělit nejdou.",
      links: [{ href: "/blog/ai-navstevnost-konverze/", label: "Nastavení v GA4" }],
    },
    {
      name: "Zmínky a citace",
      text: "Jestli vás odpověď jmenuje nebo cituje. Ručním testem opakovaných dotazů, nebo nástrojem, který dotazy pouští za vás.",
      links: [
        { href: "/blog/test-viditelnosti-v-ai/", label: "Ruční test" },
        { href: "/blog/ai-seo-nastroje/", label: "Srovnání nástrojů" },
        { href: "/sluzby/monitoring-ai/", label: "Průběžné měření" },
      ],
    },
  ],
};

/** Odkaz na plnou metodiku. */
export const methodology = {
  text: "Kompletní čísla včetně metodiky, konverzí z ChatGPT a měsíčních trendů najdete v",
  linkLabel: "case study s celými daty",
  href: "/blog/case-study-megadetail-ai-navstevnost/",
};

/** Finální CTA blok. */
export const finalCta = {
  eyebrow: "Váš web",
  titleHtml: "Kolikrát se v AI odpovědích zobrazuje <strong>váš web</strong>?",
  lead: "Audit AI viditelnosti vám na to odpoví přesně: projdeme váš obsah, strukturu i měření stejnou optikou, jakou optimalizujeme MEGA DETAIL — a dostanete seznam kroků seřazený podle dopadu.",
  ctaPrimary: { label: "Objednat audit za 3 600 Kč", href: "/audit/" },
  ctaSecondary: { label: "Nejdřív chci vidět celá data", href: "/blog/case-study-megadetail-ai-navstevnost/" },
};

/** FAQ (→ FAQPage JSON-LD). Fráze v otázkách záměrně kopírují fan-out
 * dotazy z režimu AI (GSC: „měření ai viditelnosti“, „nástroj pro ai
 * viditelnost“, „kde koupit služby pro optimalizaci viditelnosti v ai“).
 * Odpovědi smí nést mini markdown — vykresluje je komponenta Faq. */
export const faq = [
  {
    q: "Co je AI viditelnost?",
    a: "Míra, v jaké se váš web nebo značka objevuje v odpovědích systémů AI — v Přehledu od AI a v režimu AI v Googlu, v ChatGPT, Gemini, Claude, Perplexity, Copilotu i v Seznam Asistentovi. Na rozdíl od klasické pozice se měří zobrazeními v odpovědích, zmínkami a citacemi a návštěvností z nástrojů AI. Plná definice je ve [slovníku](/slovnik/ai-viditelnost/).",
  },
  {
    q: "Jak se AI viditelnost měří a jaký nástroj použít?",
    a: "Základ je zdarma: [report Funkce s generativní AI](/blog/gsc-ai-segmenty-mereni/) v Search Console, [Bing Webmaster Tools](/blog/bing-ai-performance-report/) pro Copilota, zdroje relace v GA4 a pravidelný test reálných dotazů. Placené nástroje přidávají sledování zmínek a podílu na odpovědích vůči konkurenci — [srovnání nástrojů](/blog/ai-seo-nastroje/). Postup krok za krokem má [test viditelnosti v AI](/blog/test-viditelnosti-v-ai/).",
  },
  {
    q: "Kde koupit služby pro optimalizaci viditelnosti v AI?",
    a: "Optimalizaci AI viditelnosti nabízí agentura Sniper Design jako službu AI SEO: vstupním krokem je [audit za 3 600 Kč bez DPH](/audit/) s prioritizovaným plánem do 5 pracovních dní, na který navazuje technická příprava webu a tvorba citovatelného obsahu. Poptávku jde odeslat přímo na stránce [služeb](/sluzby/).",
  },
  {
    q: "Co přesně znamená 200 000 zobrazení v AI odpovědích?",
    a: "Počet zobrazení webu megadetail.cz v Přehledu od AI a v režimu AI za 18. 5. – 15. 7. 2026 podle reportu Search Console Funkce s generativní AI. Report ty dvě funkce nerozlišuje a neukazuje dotazy, kliky ani pozici. Od 31. 8. 2026 je dostupný všem webům. Zobrazení znamená, že web byl součástí odpovědi, kterou uživatel viděl.",
  },
  {
    q: "Jsou to návštěvy webu?",
    a: "Ne — a právě proto to říkáme přesně. Zobrazení znamená, že se web objevil uvnitř odpovědi; uživatel nemusel kliknout. Návštěvy z nástrojů AI měříme zvlášť v GA4 a jsou řádově menší: za 12 měsíců 1 867, z toho 90 % z ChatGPT. Návštěvy z ChatGPT měly konverzi 3,5 % proti 0,88 % z Google organic.",
  },
  {
    q: "Je to upravený screenshot?",
    a: "Ne. Jde o neupravené výřezy ze Search Console e-shopu megadetail.cz, který vlastní a provozuje agentura Sniper Design — stejná agentura, která provozuje tento web. Kompletní metodika je v [případové studii](/blog/case-study-megadetail-ai-navstevnost/).",
  },
  {
    q: "Dá se něčeho podobného dosáhnout i s mým webem?",
    a: "Principy jsou přenositelné: obsah odpovídající na reálné otázky, čitelná struktura, důvěryhodná značka a měření. Konkrétní čísla se liší podle oboru a výchozího stavu — proto začínáme [auditem](/audit/), který ukáže, kde váš web stojí a co má největší dopad.",
  },
  {
    q: "Proč se výsledky testu mění mezi dny?",
    a: "Odpovědi AI se liší mezi pokusy, mezi uživateli i v čase — i na stejný dotaz. Jeden test proto nic nedokazuje; sledujte průměr opakovaných běhů. Víc v článcích o [kolísání odpovědí](/blog/volatilita-ai-odpovedi/) a [personalizaci](/blog/personalizace-ai-odpovedi/).",
  },
];

/** Nadpis FAQ — H2 s konvencí webu (span.hl + strong). */
export const faqTitleHtml =
  'Na co se k <span class="hl">těm číslům</span> <strong>nejčastěji ptáte</strong>';

/** Transparentní poznámka pod čarou. */
export const disclaimer =
  "Transparentně: MEGA DETAIL je vlastní e-shop agentury Sniper Design, která provozuje i tento web — data známe z první ruky. Zdroj: Google Search Console, report „Funkce s generativní AI“ (18. 5. – 15. 7. 2026), a GA4 (12 měsíců do 16. 7. 2026). Zobrazení ≠ návštěvy; konverzní srovnání vychází z míry klíčových událostí relace v GA4. Čísla jsou výchozí stav před cílenou optimalizací, která běží od 10. 8. 2026.";
