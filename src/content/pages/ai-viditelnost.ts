/**
 * Datový modul landing page /ai-viditelnost/ — „200 000 zobrazení v AI".
 *
 * Marketingová landing nad reálnými daty z GSC/GA4 e-shopu MEGA DETAIL
 * (screenshoty v public/ai-viditelnost/). Fork přeloží texty; čísla jsou
 * sdílená fakta. Při aktualizaci dat (nový měsíc, po optimalizaci)
 * aktualizovat i case study a i18n/proof.ts.
 *
 * POCTIVOST: vždy „zobrazení" (impressions), nikdy „návštěvy".
 */

export const meta = {
  title: "200 000 zobrazení v AI odpovědích Googlu za 2 měsíce — reálná data",
  description:
    "Reálný screenshot ze Search Console: e-shop MEGA DETAIL se za dva měsíce zobrazil 200 000× ve funkcích s generativní AI Googlu. Co to znamená a jak se to dělá.",
};

export const hero = {
  eyebrow: "Reálná data · vlastní e-shop · žádná teorie",
  titleHtml:
    "<strong>200&nbsp;000 zobrazení</strong> v&nbsp;AI odpovědích Googlu za&nbsp;dva měsíce",
  lead: "Když se dnes lidé ptají Googlu, odpověď jim často složí AI přímo ve výsledcích. A skoro čtvrt milionu těch odpovědí za dva měsíce obsahovalo náš vlastní e-shop MEGA DETAIL — dřív, než jsme na něm spustili cílenou AI SEO optimalizaci. Tady je důkaz a návod, jak to funguje.",
  ctaPrimary: { label: "Chci AI SEO audit", href: "/audit/" },
  ctaSecondary: { label: "Prohlédnout všechny služby", href: "/sluzby/" },
};

/** Reálný screenshot 1 — report s grafem. */
export const shot1 = {
  src: "/ai-viditelnost/gsc-report.png",
  alt: "Reálný screenshot Google Search Console — report Funkce s generativní AI e-shopu MEGA DETAIL: 200 tisíc zobrazení za 3 měsíce, denní křivka kolem 3–4,5 tisíce zobrazení",
  caption:
    "Reálný, neupravený výřez ze Search Console e-shopu megadetail.cz — report „Funkce s generativní AI“ (Beta), období 18. 5. – 15. 7. 2026. Křivka = kolik zobrazení denně měl web uvnitř AI odpovědí Googlu.",
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

/** Sekce „co to znamená" — 3 pointy. */
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
      text: "Návštěvník, který přijde z AI doporučení, konvertuje ~4× lépe a utratí ~3× víc na návštěvu než návštěvník z klasického Googlu. AI posílá málo lidí — ale rozhodnutých.",
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
      text: "Jasné nadpisy, definice, FAQ, strukturovaná data. AI z vašeho webu skládá odpověď — usnadněte jí to.",
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
      text: "Search Console, GA4 segmenty AI zdrojů, pravidelný test citací. Bez měření nevíte, jestli to funguje.",
      href: "/blog/gsc-ai-segmenty-mereni/",
      linkLabel: "Průvodce měřením",
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
  lead: "AI SEO audit vám na to odpoví přesně: projdeme váš obsah, strukturu i měření stejnou optikou, jakou optimalizujeme MEGA DETAIL — a dostanete seznam kroků seřazený podle dopadu.",
  ctaPrimary: { label: "Objednat AI SEO audit za 9 990 Kč", href: "/audit/" },
  ctaSecondary: { label: "Nejdřív chci vidět celá data", href: "/blog/case-study-megadetail-ai-navstevnost/" },
};

/** FAQ (→ FAQPage JSON-LD). */
export const faq = [
  {
    q: "Co přesně znamená 200 000 zobrazení v AI odpovědích?",
    a: "Je to počet zobrazení webu megadetail.cz ve funkcích s generativní AI Googlu (především AI Overviews) za období 18. 5. – 15. 7. 2026 podle beta reportu Search Console „Funkce s generativní AI“. Zobrazení = web byl součástí AI odpovědi, kterou uživatel viděl.",
  },
  {
    q: "Jsou to návštěvy webu?",
    a: "Ne — a právě proto to říkáme přesně. Zobrazení znamená, že se web objevil uvnitř AI odpovědi; uživatel nemusel kliknout. Návštěvy z AI nástrojů měříme zvlášť v GA4 a jsou řádově menší (za 12 měsíců 1 867), zato s ~4× vyšší konverzí než Google organic.",
  },
  {
    q: "Je to upravený screenshot?",
    a: "Ne. Jde o neupravené výřezy ze Search Console e-shopu megadetail.cz, který vlastní a provozuje agentura Sniper Design — stejná agentura, která provozuje tento web. Kompletní metodika je v case study.",
  },
  {
    q: "Dá se něčeho podobného dosáhnout i s mým webem?",
    a: "Principy jsou přenositelné: obsah odpovídající na reálné otázky, čitelná struktura, důvěryhodná značka a měření. Konkrétní čísla se liší podle oboru a výchozího stavu — proto začínáme auditem, který ukáže, kde váš web stojí a co má největší dopad.",
  },
];

/** Transparentní poznámka pod čarou. */
export const disclaimer =
  "Transparentně: MEGA DETAIL je vlastní e-shop agentury Sniper Design, která provozuje i tento web — data známe z první ruky. Zdroj: Google Search Console, beta report „Funkce s generativní AI“ (18. 5. – 15. 7. 2026), a GA4 (12 měsíců). Zobrazení ≠ návštěvy; konverzní srovnání vychází z míry klíčových událostí relace v GA4. Čísla budeme aktualizovat s postupem AI SEO optimalizace.";
