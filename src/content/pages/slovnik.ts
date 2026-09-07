/**
 * Datový modul /slovnik/ — slovník pojmů AI éry vyhledávání.
 *
 * Postaveno na keyword researchi `_source/_keyword-research/slovnik-ai-20260718/`
 * (tiering podle hledanosti + AI-citability). Každé heslo: kotva `id`,
 * definice 40–60 slov (citovatelná samostatně), volitelný odkaz na
 * hlubší obsah. Fork přeloží definice; id kotvy zachovat (interní linky).
 *
 * Struktura: skupiny podle témat, uvnitř abecedně. DefinedTermSet JSON-LD
 * skládá stránka z tohoto pole.
 */

export const meta = {
  title: "Slovník pojmů AI vyhledávání — od režimu AI po zero-click",
  description:
    "Srozumitelné definice pojmů kolem AI vyhledávání: režim AI, Přehled od AI, GEO, AEO, LLM, RAG, query fan-out, strukturovaná data a další. Česky a bez balastu.",
  /** Datum poslední revize obsahu slovníku — viditelné i v dateModified JSON-LD. */
  updated: "2026-09-07",
};

export const hero = {
  eyebrow: "Slovník",
  title: "Pojmy AI vyhledávání",
  lead: "Krátké a přesné definice pojmů, které potkáte v našich průvodcích i v debatách o AI vyhledávání. Každé heslo má vlastní kotvu — můžete na něj odkazovat přímo.",
  /** Krátká odpověď pod H1 — samostatně citovatelná definice celé stránky. */
  answer:
    "Slovník AI vyhledávání je přehled pojmů, které potřebujete, když web připravujete na odpovědi generativní AI. Obsahuje 58 hesel od režimu AI a Přehledu od AI přes GEO, AEO a query fan-out až po zero-click. Každé heslo má vlastní stránku, definici a odkaz na hlubší text.",
  /** Třívrstvý model názvosloví — jedna věta s odkazy do slovníku. */
  model:
    "Tři pojmy se pletou nejčastěji, a přitom na sebe navazují: <a href=\"/slovnik/ai-seo/\">AI SEO</a> je práce, <a href=\"/slovnik/ai-vyhledavani/\">AI vyhledávání</a> je místo, kde se odehrává, a <a href=\"/slovnik/ai-viditelnost/\">AI viditelnost</a> je její výsledek.",
};

export interface Term {
  /** Kotva (#id) — neměnit, cílí na ni interní odkazy. Zároveň slug detailu /slovnik/<id>/. */
  id: string;
  /** Název hesla. */
  term: string;
  /** Alternativní názvy/zkratky (zobrazí se za názvem). */
  aka?: string;
  /** Definice 40–60 slov, sebestačná. */
  def: string;
  /** Odkaz na hlubší obsah na webu. */
  link?: { href: string; label: string };
  /** Datum poslední revize hesla (YYYY-MM-DD) — viditelné na detailu i v dateModified. */
  updated?: string;
  /**
   * Rozšířený výklad pro detailní stránku /slovnik/<id>/ (top hesla).
   * Odstavce oddělené prázdným řádkem (\n\n); povolený inline <a>/<strong>.
   * Hesla bez `long` mají detail jen s definicí + auto-sekcemi (články, související).
   */
  long?: string;
}

export interface TermGroup {
  id: string;
  label: string;
  terms: Term[];
}

export const groups: TermGroup[] = [
  {
    id: "discipliny",
    label: "Disciplíny a strategie",
    terms: [
      {
        id: "ai-seo",
        term: "AI SEO",
        aka: "SEO pro AI",
        def: "Souhrnné označení pro optimalizaci webu pro AI éru vyhledávání: klasické SEO základy doplněné o citovatelnost v generativních nástrojích (ChatGPT, Perplexity, Gemini) a ve funkcích Googlu s generativní AI. Cílem není jen pozice, ale být součástí AI odpovědí.",
        updated: "2026-09-07",
        link: { href: "/seo/", label: "Sekce SEO" },
        long:
          "AI SEO není nová disciplína, která by klasické SEO nahrazovala — je to jeho rozšíření o novou otázku: <strong>umí váš obsah přečíst, pochopit a citovat umělá inteligence?</strong> Zatímco klasické SEO optimalizuje pro pozici v seznamu odkazů, AI SEO optimalizuje pro roli zdroje v hotové odpovědi. Uživatel často žádný seznam neuvidí — dostane rovnou odpověď a v ní (nebo pod ní) citace.\n\nV praxi AI SEO stojí na čtyřech pilířích: technicky zdravý a indexovatelný web (bez toho vás žádná AI nenajde), obsah strukturovaný jako odpovědi na konkrétní otázky, strukturovaná data, která obsahu dodají strojově čitelný kontext, a důvěryhodná značka konzistentní napříč internetem.\n\nNa tomto webu pokrýváme AI SEO jako celek: čtyři disciplíny <a href=\"/seo/\">SEO</a>, <a href=\"/geo/\">GEO</a>, <a href=\"/aeo/\">AEO</a> a <a href=\"/aio/\">AIO</a> plus dvě funkce Googlu — <a href=\"/ai-mode/\">režim AI</a> a <a href=\"/prehled-od-ai/\">Přehled od AI</a>. Pokud začínáte, projděte <a href=\"/zacnete-tady/\">kurátorovanou cestu Začněte tady</a>.",
      },
      {
        id: "ai-viditelnost",
        term: "AI viditelnost",
        aka: "viditelnost v AI, viditelnost v odpovědích AI",
        def: "Míra, v jaké se web nebo značka objevuje v odpovědích AI systémů — Přehled od AI a režim AI, ChatGPT, Perplexity či Copilot. Výsledné číslo celého AI SEO. Měří se třemi různými věcmi: zobrazeními v odpovědích AI (Search Console), zmínkami a citacemi značky a návštěvami z nástrojů AI (GA4).",
        updated: "2026-09-07",
        link: { href: "/ai-viditelnost/", label: "AI viditelnost na reálných datech" },
        long:
          "AI viditelnost je pro AI éru to, co byla pozice ve vyhledávání pro éru klasického Googlu — <strong>metrika toho, jestli o vás nová vrstva vyhledávání ví a doporučuje vás</strong>. Nezachytí ji běžná analytika: velká část se odehrává ještě před kliknutím, uvnitř odpovědí, které AI složí a uživatel si je přečte bez návštěvy webu.\n\nMěří se třemi vrstvami: <strong>zobrazení v odpovědích AI od Googlu</strong> (report Search Console „Funkce s generativní AI“, plošně od 31. 8. 2026, jen zobrazení), <strong>zmínky a citace značky</strong> v odpovědích na reálné prompty (ručním testem nebo AI visibility trackerem) a <strong>návštěvnost z AI nástrojů</strong> v GA4. Jak vypadá v praxi, ukazujeme na <a href=\"/ai-viditelnost/\">reálných datech vlastního e-shopu</a> — 200 000 zobrazení v AI odpovědích za dva měsíce.\n\nPostup měření krok za krokem: <a href=\"/blog/test-viditelnosti-v-ai/\">Test viditelnosti v AI</a>, <a href=\"/blog/gsc-ai-segmenty-mereni/\">měření v GSC a GA4</a> a metrika <a href=\"/blog/share-of-model-metrika/\">share of model</a>. Zvýšení AI viditelnosti je cílem služby <a href=\"/sluzby/\">AI SEO</a>.",
      },
      {
        id: "ai-vyhledavani",
        term: "AI vyhledávání",
        aka: "AI vyhledávač, AI search",
        def: "Souhrnné označení pro vyhledávání, kde odpověď skládá generativní AI — režim AI a Přehled od AI, ChatGPT s živým vyhledáváním, Perplexity, Copilot nebo český Seznam Asistent. Místo seznamu odkazů vrací hotovou odpověď s citacemi; pro weby to znamená optimalizovat citovatelnost, ne jen pozice.",
        updated: "2026-09-07",
        link: { href: "/seo-vs-geo-vs-aeo-vs-aio/", label: "Průvodce AI érou vyhledávání" },
      },
      {
        id: "seo",
        term: "SEO",
        aka: "Search Engine Optimization",
        def: "Optimalizace webu pro vyhledávače — technický stav, obsah a autorita, díky kterým se stránky zobrazují na předních pozicích v Googlu či Seznamu. V AI éře zůstává základem: co není dohledatelné a indexované, nemůže být ani citované v AI odpovědích.",
        updated: "2026-09-07",
        link: { href: "/seo/", label: "Sekce SEO" },
        long:
          "SEO (Search Engine Optimization) je práce na tom, aby web našly vyhledávače a zobrazily ho vysoko: technický stav, obsah a autorita. V éře AI se nezměnilo jeho zadání, změnilo se, co je za ním.\n\nPořád platí jednoduchá podmínka: <strong>co není dohledatelné a zaindexované, nemůže být ani citované.</strong> Odpovědi Googlu — Přehled od AI i režim AI — se skládají z indexu vyhledávání, takže technické SEO je vstupenka i tam. Sám Google svůj rámec pro éru AI popisuje jako pořád totéž SEO a pojmy jako GEO nebo AEO zná jen jako marketingové označení služeb třetích stran.\n\nCo se v základech mění a co ne, rozebírá <a href=\"/seo/\">sekce SEO</a>; proč nové zkratky nejsou nový obor, vysvětluje článek <a href=\"/blog/aeo-geo-je-porad-seo/\">AEO a GEO je pořád SEO</a>. Kontrolní seznam pro audit je v <a href=\"/blog/seo-audit-co-kontrolovat/\">co kontrolovat při SEO auditu</a>.",
      },
      {
        id: "geo",
        term: "GEO",
        aka: "Generative Engine Optimization, GEO optimalizace",
        def: "Optimalizace obsahu tak, aby ho generativní AI nástroje (ChatGPT, Perplexity, Claude, Gemini) používaly jako zdroj a citovaly ho ve svých odpovědích. V marketingu nemá nic společného s geolokací, geodézií ani geomarketingem. Stojí na jasných definicích, faktech, struktuře a zmínkách o značce.",
        updated: "2026-09-07",
        link: { href: "/geo/", label: "Sekce GEO" },
        long:
          "Pozor na homonymum: mimo marketing znamená zkratka GEO geolokaci nebo geodézii, tady jde vždy o Generative Engine Optimization. GEO odpovídá na situaci, kdy se zákazník neptá Googlu, ale ChatGPT, Perplexity nebo Gemini. Tyto nástroje odpověď generují — a přitom si vybírají, ze kterých zdrojů budou čerpat a koho citují. GEO je řemeslo, jak se mezi tyto zdroje dostat.\n\nGenerativní enginy preferují obsah, který je <strong>fakticky hutný, jasně strukturovaný a snadno ověřitelný</strong>: krátké definice, konkrétní čísla, tabulky, odpovědi na přesně položené otázky. A protože si modely ověřují tvrzení napříč zdroji, roli hraje i konzistence vaší značky mimo váš web — recenze, zmínky, profily.\n\nPodrobný rozbor disciplíny najdete v <a href=\"/geo/\">sekci GEO</a>, praktický postup v <a href=\"/blog/geo-optimalizace/\">návodu na GEO optimalizaci v 7 krocích</a> a mechaniku výběru zdrojů v článku <a href=\"/blog/jak-ai-cituje-zdroje/\">Jak AI cituje zdroje</a>.",
      },
      {
        id: "aeo",
        term: "AEO",
        aka: "Answer Engine Optimization",
        def: "Užší disciplína zaměřená na odpovědní vrstvu napojenou na vyhledávač — Přehled od AI, doporučené úryvky, Bing Copilot. Pracuje s krátkými odpověďmi, nadpisy formulovanými jako otázky a FAQ psanými jako obsah (ne kvůli rozšířeným výsledkům, ty Google u FAQ zrušil).",
        updated: "2026-09-07",
        link: { href: "/aeo/", label: "Sekce AEO" },
        long:
          "AEO (Answer Engine Optimization) cílí na odpovědní systémy napojené na vyhledávače — především Přehled od AI, doporučené úryvky a Bing Copilot. Od GEO se liší tím, že se odehrává uvnitř ekosystému vyhledávače: kandidáty na citaci si systém vybírá z indexovaných stránek, typicky z těch, které už dobře fungují v klasickém vyhledávání.\n\nŘemeslo AEO je konkrétní: <strong>krátká odpověď 40–60 slov hned pod nadpisem</strong>, nadpisy formulované jako otázky, FAQ psané jako užitečný obsah a návody krok za krokem. Přesně z takových bloků odpovědní panely skládají obsah. Strukturovaná data k tomu pomáhají strojům se v textu vyznat, ale rozšířené výsledky u FAQ ani HowTo už Google nezobrazuje.\n\nZáklady rozebírá <a href=\"/aeo/\">sekce AEO</a>, praktiku <a href=\"/blog/aeo-optimalizace-v-praxi/\">návod na AEO optimalizaci</a> — včetně anatomie krátké odpovědi a šablon pěti typů otázek.",
      },
      {
        id: "aio",
        term: "AIO",
        def: "Zkratka se dvěma významy: deštník nad SEO, GEO i AEO (AI Optimization) a zároveň starší označení pro Přehled od AI. Na tomto webu držíme první význam — AIO je zastřešující práce na viditelnosti, konkrétní funkci Googlu říkáme Přehled od AI.",
        updated: "2026-09-07",
        link: { href: "/aio/", label: "Sekce AIO" },
      },
      {
        id: "llmo",
        term: "LLMO",
        aka: "LLM Optimization",
        def: "Alternativní název pro optimalizaci viditelnosti ve velkých jazykových modelech — v praxi synonymum GEO. Zahrnuje techniky, díky kterým LLM systémy značku znají, správně o ní informují a citují její obsah ve vygenerovaných odpovědích.",
        updated: "2026-09-07",
        link: { href: "/geo/", label: "Sekce GEO" },
        long:
          "LLMO (LLM Optimization) je alternativní název pro práci na viditelnosti ve velkých jazykových modelech. V praxi je to <strong>synonymum GEO</strong> — stejné řemeslo, jiná zkratka.\n\nŽe si obor pro tutéž věc drží několik označení (GEO, LLMO, AI SEO, u nás i „GEO správa“ nebo „AI dohledatelnost“), je hlavně marketingová záležitost. Rozdíl v technikách za nimi žádný není: jasné definice, konkrétní fakta, struktura, zmínky o značce ve zdrojích, kterým modely věří.\n\nRozdíly a překryvy zkratek rozebírá článek <a href=\"/blog/aio-vs-geo/\">AIO vs. GEO</a>; samotnou disciplínu pak <a href=\"/geo/\">sekce GEO</a>.",
      },
      {
        id: "e-e-a-t",
        term: "E-E-A-T",
        aka: "Experience, Expertise, Authoritativeness, Trust",
        def: "Rámec Googlu pro hodnocení důvěryhodnosti obsahu: zkušenost, odbornost, autorita a důvěryhodnost. V AI éře nabývá na váze — systémy preferují obsah s dohledatelným autorem, doloženou praxí a konzistentní entitou značky napříč webem.",
        link: { href: "/blog/e-e-a-t-pro-ai/", label: "E-E-A-T pro AI" },
        long:
          "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness — zkušenost, odbornost, autorita, důvěryhodnost) je rámec, kterým Google popisuje kvalitu zdroje. Není to přímý faktor hodnocení se skóre — je to souhrn signálů, podle kterých systémy (a čím dál víc i odpovědi AI) poznávají, komu věřit.\n\nV AI éře význam E-E-A-T roste: generativní systémy si vybírají zdroje pro citace a <strong>ověřitelná identita autora a značky je jedním z hlavních vodítek</strong>. Prakticky to znamená: viditelný autor s vlastní stránkou a Person schematem, reálná zkušenost v textech („testovali jsme“, konkrétní čísla z praxe), konzistentní profil značky napříč webem, recenzemi a zmínkami.\n\nCelý rozbor najdete v článku <a href=\"/blog/e-e-a-t-pro-ai/\">E-E-A-T pro AI</a>; navazují <a href=\"/blog/autorsky-profil-pro-ai/\">autorský profil pro AI</a> a heslo <a href=\"/slovnik/brand-mentions/\">zmínky o značce</a>.",
      },
      {
        id: "ymyl",
        term: "YMYL",
        aka: "Your Money or Your Life",
        def: "Kategorie obsahu, který může ovlivnit zdraví, finance, bezpečnost nebo zásadní životní rozhodnutí čtenáře — Google i AI systémy u něj uplatňují nejpřísnější nároky na důvěryhodnost. U YMYL témat rozhoduje doložitelná odbornost autora a ověřitelné zdroje; anonymní obsah zde v AI odpovědích prakticky nemá šanci.",
        link: { href: "/blog/e-e-a-t-pro-ai/", label: "E-E-A-T pro AI" },
      },
      {
        id: "zero-click",
        term: "Zero-click vyhledávání",
        def: "Vyhledávání, které skončí bez kliknutí na jakýkoli web — uživatel dostane odpověď přímo ve výsledcích (Přehled od AI, doporučený úryvek, panel znalostí). Pro weby znamená růst viditelnosti bez návštěvy a nutnost měřit zobrazení, ne jen kliky.",
        link: { href: "/blog/zero-click-ai/", label: "Zero-click analýza" },
      },
      {
        id: "dark-ai-traffic",
        term: "Dark AI traffic",
        def: "Vliv AI doporučení, který v analytice není vidět jako AI zdroj: uživatel dostane tip v ChatGPT či AI odpovědi, ale značku pak vyhledá v Googlu nebo zadá adresu napřímo. Návštěva se započítá jako organic či direct — měřitelné AI referraly jsou proto spodní odhad.",
        link: { href: "/blog/case-study-megadetail-ai-navstevnost/", label: "Case study s daty" },
      },
    ],
  },
  {
    id: "google-ai",
    label: "Google a generativní vyhledávání",
    terms: [
      {
        id: "ai-mode",
        term: "Režim AI",
        aka: "Google AI Mode, AI Mode, AI režim",
        def: "Konverzační režim vyhledávání Googlu a oficiální český název funkce: samostatná karta, kde místo seznamu odkazů dostanete souvislou odpověď složenou z mnoha zdrojů, s citacemi a navazujícími otázkami. Dotazy rozkládá technikou query fan-out. V Česku je dostupný od října 2025.",
        updated: "2026-09-07",
        link: { href: "/ai-mode/", label: "Sekce Režim AI" },
        long:
          "Režim AI je samostatná karta vyhledávání, ve které Google místo seznamu odkazů rovnou skládá odpověď — a čeká na navazující otázky jako v chatu. Google pro něj používá stejný index jako pro klasické vyhledávání, ale pracuje s ním jinak: dotaz rozloží na sadu souběžných souvisejících dotazů (query fan-out) a pro každý hledá nejlepší odpověď.\n\nPro weby to znamená zásadní posun: <strong>citaci nevyhrává stránka první na hlavní dotaz, ale stránka nejpřesněji odpovídající na konkrétní dílčí dotaz.</strong> Malý specializovaný článek tak může porazit velkou autoritu.\n\nKompletní rozbor včetně pěti kroků přípravy najdete v <a href=\"/ai-mode/\">sekci Režim AI</a>. Jak funguje a co v něm hledat, rozebírá <a href=\"/blog/rezim-ai-google/\">Režim AI v Googlu</a> a <a href=\"/blog/ai-mode-cesky/\">Režim AI česky</a>; rozdíl proti Přehledu od AI vysvětluje <a href=\"/blog/ai-mode-vs-ai-overviews/\">srovnání obou funkcí</a> a praktický postup <a href=\"/blog/jak-se-zobrazit-v-ai-mode/\">Jak se zobrazit v režimu AI</a>.",
      },
      {
        id: "ai-overviews",
        term: "Přehled od AI",
        aka: "AI Overviews, AI přehled, dříve SGE",
        def: "Oficiální český název funkce Googlu, která nad klasické výsledky vloží souhrn složený z více zdrojů s odkazy na citované weby. Na rozdíl od režimu AI se nevolí — zobrazí se sám. V Česku je od 20. 5. 2025; v září 2025 se objevoval u 19,6 % českých dotazů (Marketing Miner).",
        updated: "2026-09-07",
        link: { href: "/prehled-od-ai/", label: "Sekce Přehled od AI" },
        long:
          "Přehled od AI je funkce Googlu, která nad klasické výsledky vloží souhrn složený z více zdrojů, s citacemi. Na rozdíl od režimu AI ji uživatel nevolí — zobrazuje se sama u dotazů, kde ji Google vyhodnotí jako užitečnou, typicky u informačních otázek. V Česku je od 20. 5. 2025; při spuštění se týkala zhruba 10,5 % dotazů (Lupa, 5/2025), v září 2025 už 19,6 % (Marketing Miner).\n\nPro weby má dvojí tvář. Kdo je citovaný, získává viditelnost „nad prvním místem“. Kdo citovaný není, přichází o kliknutí — uživatel dostal odpověď a nemá důvod jít dál. Proto kolem ní stojí dvě legitimní strategie: <strong>optimalizovat na citaci</strong> (viz <a href=\"/aeo/\">AEO</a>), nebo u citlivého obsahu <strong>použití obsahu omezit</strong>.\n\nJak se do Přehledu od AI dostat, rozebírá <a href=\"/blog/aeo-optimalizace-v-praxi/\">praktický návod</a>; jak ho naopak omezit, řeší <a href=\"/blog/jak-vypnout-ai-overview/\">návod na vypnutí</a> a přehled voleb v <a href=\"/blog/co-vypne-ktery-opt-out/\">co vypne který opt-out</a>. Zobrazení webu v těchto funkcích ukazuje report v <a href=\"/blog/gsc-ai-segmenty-mereni/\">Search Console</a>.",
      },
      {
        id: "query-fan-out",
        term: "Query fan-out",
        def: "Technika generativního vyhledávání: systém rozloží jeden dotaz na sadu souběžných souvisejících dotazů (Google, 7/2026), každý zodpoví z indexu a odpovědi složí do výsledného textu. Citace tak vyhrávají stránky, které nejlépe odpovídají na konkrétní dílčí dotaz — ne nutně ty první na hlavní dotaz.",
        updated: "2026-09-07",
        link: { href: "/blog/query-fan-out-ai-mode/", label: "Query fan-out rozbor" },
        long:
          "Query fan-out je technika, kterou režim AI zpracovává dotazy: jeden dotaz uživatele rozloží na sadu souběžných souvisejících dotazů, každý zvlášť vyhledá v indexu a z nejlepších odpovědí složí výsledný text s citacemi. Z dotazu „jaký vosk na tmavý lak v zimě“ se tak stane sada otázek o typech vosků, chování laku v mrazu, konkrétních produktech i recenzích.\n\nDůsledek pro tvorbu obsahu je zásadní: <strong>jednotkou optimalizace přestává být klíčové slovo a stává se jí odpověď na dílčí dotaz.</strong> Web strukturovaný jako sada jasných otázek a odpovědí má v osudí víc losů než jeden dlouhý text optimalizovaný na jediný dotaz.\n\nMechanismus do hloubky rozebírá článek <a href=\"/blog/query-fan-out-ai-mode/\">Query fan-out: jak režim AI čte obsah</a>; širší kontext najdete v <a href=\"/ai-mode/\">sekci Režim AI</a>.",
      },
      {
        id: "featured-snippet",
        term: "Featured snippet",
        def: "Zvýrazněný úryvek na vrcholu klasických výsledků Googlu, který přímo odpovídá na dotaz — odstavec, seznam nebo tabulka vytažené z konkrétní stránky. Předchůdce AI odpovědí; optimalizuje se podobně: přímá odpověď hned pod nadpisem ve formátu otázky.",
        link: { href: "/blog/aeo-optimalizace-v-praxi/", label: "AEO v praxi" },
      },
      {
        id: "knowledge-graph",
        term: "Knowledge graph",
        aka: "znalostní graf",
        def: "Databáze entit (firem, lidí, míst, pojmů) a vztahů mezi nimi, kterou vyhledávače používají k pochopení světa. Značka ukotvená v knowledge graphu — přes strukturovaná data, Wikipedii či konzistentní zmínky — je pro AI systémy ověřitelná a bezpečnější k doporučení.",
        link: { href: "/blog/organization-schema-pro-znacku/", label: "Organization schema pro značku" },
      },
      {
        id: "entita",
        term: "Entita",
        def: "Jednoznačně identifikovatelná „věc“ pro vyhledávače a AI: značka, osoba, produkt, místo. Silná entita má konzistentní název, popis a propojené profily napříč webem i externími zdroji — proto ji systémy umí spolehlivě rozpoznat, ověřit a citovat.",
        updated: "2026-09-07",
        link: { href: "/blog/autorsky-profil-pro-ai/", label: "Author entity návod" },
        long:
          "Entita je jednoznačně identifikovatelná věc, se kterou vyhledávače a AI umějí pracovat jako s objektem, ne jen jako s řetězcem znaků: značka, osoba, produkt, místo. Rozdíl je podstatný — „Sniper Design“ jako text může znamenat cokoli, „Sniper Design“ jako entita má jasné napojení na obor, lidi a další zdroje.\n\nSilná entita se pozná podle toho, že o ní <strong>různé zdroje říkají totéž</strong>: stejný název, stejný popis, propojené profily na webu i mimo něj. Systémy si tvrzení ověřují napříč zdroji, takže rozpor mezi vaším webem a katalogem nebo profilem vás nestojí jen přesnost, ale i důvěru.\n\nV praxi se to staví přes strukturovaná data organizace a autora — návod je v článcích <a href=\"/blog/organization-schema-pro-znacku/\">Organization schema pro značku</a> a <a href=\"/blog/autorsky-profil-pro-ai/\">autorský profil pro AI</a>; co s tím dělá znalostní graf Googlu, vysvětluje heslo <a href=\"/slovnik/knowledge-graph/\">Knowledge Graph</a>.",
      },
      {
        id: "serp",
        term: "SERP",
        aka: "Search Engine Results Page",
        def: "Stránka s výsledky vyhledávání. Kdysi deset modrých odkazů, dnes mix Přehledu od AI, map, produktových karuselů, videí a klasických výsledků. Podoba SERPu určuje, kolik kliknutí na dotaz reálně zbývá pro weby — a kde se vyplatí bojovat.",
        updated: "2026-09-07",
        link: { href: "/blog/zero-click-ai/", label: "Zero-click vyhledávání" },
        long:
          "SERP (Search Engine Results Page) je stránka s výsledky vyhledávání. Kdysi to bylo deset modrých odkazů, dnes je to skládačka: <strong>Přehled od AI nahoře, pod ním mapy, produktové karusely, videa, doporučené úryvky a teprve pak klasické výsledky.</strong> Kolik místa zbývá na weby, se liší dotaz od dotazu.\n\nPro plánování obsahu je proto první otázka ne „na jaké pozici jsme“, ale „jak ten dotaz v SERPu vůbec vypadá“. U dotazu s rozbaleným Přehledem od AI může být první organická pozice až pod přehybem a proklik z ní vypadá úplně jinak než u dotazu bez něj. Přehled od AI se v Česku v září 2025 objevoval u 19,6 % dotazů (Marketing Miner) a na míru prokliku má měřitelný vliv — podle Seer (4/2026) o 38 % nižší.\n\nJak se čtou zásahy do SERPu bez sebeklamu, rozebírá <a href=\"/blog/zero-click-ai/\">Zero-click vyhledávání</a>; kde se přesně zobrazuje Přehled od AI, ukazuje <a href=\"/blog/jak-casto-se-zobrazuje-ai-prehled/\">jak často se objevuje</a>.",
      },
    ],
  },
  {
    id: "nastroje",
    label: "AI nástroje a systémy",
    terms: [
      {
        id: "chatgpt",
        term: "ChatGPT",
        def: "Konverzační AI asistent od OpenAI a největší zdroj návštěv z AI nástrojů. Odpovídá z natrénovaných znalostí a při vyhledávání si zdroje dohledává živě (robot OAI-SearchBot). Návštěva z ChatGPT konverguje o něco lépe než z klasického vyhledávání (Similarweb, 6/2026: 7 % proti 5 % u transakčních webů).",
        updated: "2026-09-07",
        link: { href: "/blog/chatgpt-seo/", label: "ChatGPT SEO — návod" },
      },
      {
        id: "perplexity",
        term: "Perplexity",
        def: "AI vyhledávač, který odpovědi vždy staví na živém dohledání zdrojů a viditelně cituje tři až osm z nich. V Česku nezvykle populární. Čerstvost obsahu je jedním z faktorů, ale podle analýzy Seer (7/2026) je Perplexity na stáří citovaných stránek méně citlivá, než se běžně tvrdí.",
        updated: "2026-09-07",
        link: { href: "/blog/perplexity-seo/", label: "Perplexity SEO — návod" },
        long:
          "Perplexity je AI vyhledávač, který odpověď vždy staví na živém dohledání zdrojů a viditelně cituje tři až osm z nich. Vlastní index plní robot PerplexityBot; pro načtení stránky na přímý dotaz uživatele slouží Perplexity-User, který se robots.txt řídit nemusí.\n\nKolem Perplexity koluje jedno tvrzení, které data úplně nepotvrzují: že rozhoduje především čerstvost. Čerstvost je jedním z faktorů, ale podle analýzy Seer (7/2026) je Perplexity na stáří citovaných stránek <strong>méně citlivá než ChatGPT</strong>. Co pomáhá spolehlivěji, je jasná struktura a doložená fakta.\n\nPraktický postup pro citace je v návodu <a href=\"/blog/perplexity-seo/\">Perplexity SEO</a>; jak se liší výběr zdrojů napříč platformami, ukazuje <a href=\"/blog/jak-ai-cituje-zdroje/\">Jak AI cituje zdroje</a>.",
      },
      {
        id: "gemini",
        term: "Google Gemini",
        def: "Rodina AI modelů Googlu a zároveň jeho konverzační asistent. Pohání Přehled od AI i režim AI; samostatná aplikace Gemini umí prohledávat web a citovat zdroje. Co funguje pro index Googlu, pomáhá i tady — s tím rozdílem, že vstup do Gemini řídí značka Google-Extended.",
        updated: "2026-09-07",
        link: { href: "/blog/claude-gemini-seo/", label: "Claude a Gemini — návod" },
      },
      {
        id: "claude",
        term: "Claude",
        def: "AI asistent od Anthropicu zaměřený na spolehlivost a delší kontext. Vyhledávání a citace obsluhují roboti Claude-SearchBot a Claude-User; ClaudeBot slouží tréninku a jeho zablokování citace neomezí (dokumentace Anthropicu, 7. 4. 2026). Mezi uživateli převažují profesionálové.",
        updated: "2026-09-07",
        link: { href: "/blog/claude-gemini-seo/", label: "Claude a Gemini — návod" },
      },
      {
        id: "copilot",
        term: "Microsoft Copilot",
        def: "AI asistent Microsoftu ve Windows, Edge a Microsoft 365, který nad indexem Bingu kombinuje modely OpenAI, Anthropicu a vlastní modely Microsoftu (stav 9/2026). Pro viditelnost je klíčová indexace v Bingu, kterou české weby často opomíjejí; citace ukazuje report AI Performance v Bing Webmaster Tools.",
        updated: "2026-09-07",
        link: { href: "/blog/bing-seo-pro-ai/", label: "Bing SEO návod" },
      },
      {
        id: "seznam-asistent",
        term: "Seznam Asistent",
        aka: "Seznam AI, SeLLMa, Seznam-Extended",
        def: "Konverzační asistent Seznamu, v otevřené zkoušce pro přihlášené uživatele od 25. 5. 2026. Odpovědi staví na indexu Seznam Vyhledávání a na vlastních zdrojích — zpravodajství, Zboží.cz, Firmy.cz. Podklady vypisuje všechny, ale neoznačuje, které z nich model skutečně použil.",
        updated: "2026-09-07",
        link: { href: "/blog/seznam-cz-ai-vyhledavani/", label: "Seznam.cz a AI vyhledávání" },
      },
      {
        id: "grok",
        term: "Grok",
        def: "AI asistent společnosti xAI propojený se sítí X (Twitter). Vyniká v aktuálních tématech díky přístupu k příspěvkům v reálném čase; web prochází crawlerem. Pro většinu CZ webů zatím okrajový zdroj, ale rychle rostoucí povědomí.",
        link: { href: "/blog/jak-ai-cituje-zdroje/", label: "Jak AI cituje zdroje" },
      },
      {
        id: "ai-agent",
        term: "AI agent",
        aka: "nákupní agent, AI agent",
        def: "AI systém, který úkoly nejen zodpovídá, ale sám vykonává: prochází weby, porovnává nabídky, rezervuje, nakupuje. Pro e-shopy je to nový typ návštěvníka, který čte strukturu a data, ne design — a rozhoduje podle parametrů. Nákup se dnes většinou dokončuje na webu obchodníka.",
        updated: "2026-09-07",
        link: { href: "/blog/ai-nakupni-agenti/", label: "AI nákupní agenti" },
      },
      {
        id: "ai-prohlizec",
        term: "AI prohlížeč",
        aka: "Comet, Claude in Chrome, Atlas — ukončen",
        def: "Webový prohlížeč s vestavěným AI asistentem, který stránky čte, shrnuje a vykonává v nich úkoly — Perplexity Comet nebo Claude in Chrome. ChatGPT Atlas byl 9. 8. 2026 ukončen a nahradily ho desktopová aplikace a rozšíření do prohlížeče. Část návštěv webu tak probíhá přes vrstvu AI.",
        updated: "2026-09-07",
        link: { href: "/blog/ai-prohlizece-atlas-comet/", label: "AI prohlížeče v praxi" },
      },
    ],
  },
  {
    id: "technologie",
    label: "Technologie za AI vyhledáváním",
    terms: [
      {
        id: "llm",
        term: "LLM",
        aka: "velký jazykový model",
        def: "Velký jazykový model — AI systém natrénovaný na obrovském množství textu, který umí rozumět jazyku a generovat odpovědi (GPT, Gemini, Claude). LLM pohání všechny AI vyhledávací nástroje; jejich znalosti končí datem tréninku, proto se kombinují s živým vyhledáváním.",
        link: { href: "/blog/rag-ai-vyhledavani/", label: "RAG a AI vyhledávání" },
        long:
          "LLM (velký jazykový model) je AI systém natrénovaný na obrovském množství textu, který umí rozumět jazyku a generovat odpovědi — pohání ChatGPT (GPT), Gemini, Claude i české nástroje jako SeLLMa od Seznamu. Pro viditelnost webu jsou podstatné dvě vlastnosti LLM.\n\nZaprvé, <strong>znalosti modelu končí datem tréninku</strong> — proto se LLM kombinují s živým vyhledáváním (viz <a href=\"/slovnik/rag/\">RAG</a>) a proto má čerstvý obsah šanci na citaci i proti velkým autoritám. Zadruhé, modely pracují s významem, ne s přesnou shodou klíčových slov: rozhoduje, jestli váš text srozumitelně odpovídá na otázku, ne kolikrát obsahuje frázi.\n\nJak LLM vybírají, koho citovat, rozebírá <a href=\"/blog/jak-ai-cituje-zdroje/\">Jak AI cituje zdroje</a>; pro jednotlivé nástroje viz hesla <a href=\"/slovnik/chatgpt/\">ChatGPT</a>, <a href=\"/slovnik/perplexity/\">Perplexity</a> a <a href=\"/slovnik/claude/\">Claude</a>.",
      },
      {
        id: "rag",
        term: "RAG",
        aka: "Retrieval-Augmented Generation",
        def: "Technika, kdy si AI před odpovědí dohledá aktuální podklady (vyhledáváním či ve vlastní databázi) a odpověď generuje z nich, s citacemi. Právě RAG dělá z AI asistentů vyhledávače — a z vašeho obsahu potenciální zdroj odpovědí.",
        link: { href: "/blog/rag-ai-vyhledavani/", label: "RAG rozbor" },
        long:
          "RAG (Retrieval-Augmented Generation) je technika, díky které AI asistenti nejsou odkázaní jen na to, co se naučili při tréninku: před odpovědí si <strong>dohledají aktuální podklady</strong> (vyhledáváním na webu či ve vlastní databázi) a odpověď generují z nich — typicky s citacemi zdrojů.\n\nPrávě RAG dělá z chatbotů vyhledávače a z vašeho webu potenciální zdroj odpovědí. Má to praktický důsledek: do RAG odpovědí se dostává obsah, který je dohledatelný, čerstvý a snadno „vyříznutelný“ — pasáže, které dávají smysl samy o sobě. Obsah zamčený za přihlášením nebo závislý na kontextu celé stránky má smůlu.\n\nJak RAG funguje krok za krokem, rozebírá článek <a href=\"/blog/rag-ai-vyhledavani/\">RAG: jak AI vyhledávání funguje</a>; navazuje heslo <a href=\"/slovnik/embedding/\">embedding</a> a <a href=\"/slovnik/query-fan-out/\">query fan-out</a>.",
      },
      {
        id: "prompt-engineering",
        term: "Prompt engineering",
        aka: "práce s prompty",
        def: "Umění formulovat zadání pro AI tak, aby dalo užitečný výstup: kontext, role, formát odpovědi, příklady. Pro AI SEO je užitečné obráceně — když víte, jak se lidé AI ptají na váš obor, umíte psát obsah, který na tyto dotazy odpovídá.",
        link: { href: "/blog/volatilita-ai-odpovedi/", label: "Proč se odpovědi AI mění" },
      },
      {
        id: "embedding",
        term: "Embedding",
        def: "Číselná reprezentace textu zachycující jeho význam. AI systémy přes embeddingy porovnávají významovou podobnost — proto najdou váš obsah i na dotaz formulovaný úplně jinými slovy. Základ sémantického vyhledávání.",
        link: { href: "/blog/rag-ai-vyhledavani/", label: "RAG a AI vyhledávání" },
      },
      {
        id: "semanticke-vyhledavani",
        term: "Sémantické vyhledávání",
        def: "Vyhledávání podle významu, ne podle shody klíčových slov. Systém pochopí záměr dotazu a najde obsah, který ho řeší — i bez přesné fráze. Důsledek pro tvorbu obsahu: pokrývejte téma a otázky, ne opakování jednoho klíčového slova.",
        link: { href: "/blog/rag-ai-vyhledavani/", label: "RAG a AI vyhledávání" },
      },
      {
        id: "halucinace",
        term: "Halucinace",
        aka: "konfabulace",
        def: "Situace, kdy AI model přesvědčivě vygeneruje nepravdivou informaci — vymyšlené číslo, citaci či fakt. Pro značky riziko (AI o vás může tvrdit nesmysly) i argument pro jasná, snadno ověřitelná fakta na webu, o která se systémy mohou opřít.",
        link: { href: "/blog/chybna-informace-o-firme-v-ai/", label: "Když AI o firmě lže" },
      },
      {
        id: "prompt",
        term: "Prompt",
        def: "Zadání, které uživatel napíše AI systému. Formulace promptů uživatelů určuje, jaké podotázky systém položí a jaké zdroje bude citovat — proto se při optimalizaci testují reálné prompty (doporuč, srovnej, vyber) místo klasických klíčových slov.",
        link: { href: "/blog/test-viditelnosti-v-ai/", label: "Test viditelnosti v AI" },
      },
      {
        id: "kontextove-okno",
        term: "Kontextové okno",
        def: "Množství textu, které AI model zvládne zpracovat najednou — vstup i výstup dohromady. Delší okno znamená, že model přečte celé dlouhé stránky; přesto platí, že klíčová fakta mají být na začátku a v jasné struktuře, ne zahrabaná v balastu.",
        updated: "2026-09-07",
        link: { href: "/blog/pasazova-optimalizace-obsahu/", label: "Pasážová optimalizace obsahu" },
        long:
          "Kontextové okno je množství textu, které jazykový model zvládne zpracovat najednou — vstup i výstup dohromady. Měří se v tokenech, ne ve slovech: jeden token odpovídá zhruba třem až čtyřem znakům češtiny.\n\nPro tvorbu obsahu z toho plyne něco jiného, než se běžně říká. Delší okno neznamená, že model dlouhou stránku „pochopí lépe“ — znamená jen, že ji celou přečte. <strong>Fakta na začátku a v jasné struktuře mají pořád navrch</strong>, protože model při skládání odpovědi pracuje s pasážemi, ne s celým textem najednou.\n\nJak se z toho odvozuje délka odstavců a umístění klíčových vět, rozebírá <a href=\"/blog/pasazova-optimalizace-obsahu/\">pasážová optimalizace obsahu</a>. Nezaměňujte pojem s „kontextovým SEO“ — to je marketingové označení pro práci se záměrem dotazu, se kterým kontextové okno nemá nic společného.",
      },
    ],
  },
  {
    id: "obsah",
    label: "Obsah a struktura",
    terms: [
      {
        id: "answer-block",
        term: "Krátká odpověď",
        aka: "answer block",
        def: "Odstavec 40–60 slov hned pod nadpisem, který samostatně a fakticky odpovídá na hlavní otázku stránky. Přesně z takových pasáží AI systémy skládají citace. Délka je doporučení praxe, ne měřená hodnota — žádná studie zatím optimální rozsah neurčila.",
        updated: "2026-09-07",
        link: { href: "/blog/ai-seo-content/", label: "Obsah pro AI" },
      },
      {
        id: "long-tail",
        term: "Long tail",
        aka: "dlouhý ocas dotazů",
        def: "Konkrétní víceslovné dotazy s malou hledaností, kterých jsou ale tisíce („vosk na tmavý lak v zimě“ místo „autokosmetika“). V AI éře jejich význam roste: query fan-out rozkládá dotazy právě na dílčí long-tail otázky a cituje stránky, které na ně přímo odpovídají.",
        link: { href: "/blog/query-fan-out-ai-mode/", label: "Query fan-out" },
      },
      {
        id: "strukturovana-data",
        term: "Strukturovaná data",
        aka: "schema markup, schema.org, JSON-LD",
        def: "Strojově čitelné značky (nejčastěji JSON-LD podle schema.org), které vyhledávačům a AI říkají, co stránka obsahuje: článek, produkt, firmu, FAQ, osobu. Pomáhají stroje obsah pochopit a zobrazit v rozšířených výsledcích. Pro generativní AI je Google nevyžaduje a podle testu Ahrefs (5/2026) citace nezvyšují.",
        updated: "2026-09-07",
        link: { href: "/blog/strukturovana-data-pro-ai/", label: "Návod na strukturovaná data" },
      },
      {
        id: "json-ld",
        term: "JSON-LD",
        def: "Doporučený formát zápisu strukturovaných dat: blok JSON vložený do hlavičky stránky, oddělený od HTML obsahu. Snadno se generuje i udržuje — proto ho preferuje Google i většina šablon a e-shopových platforem.",
        link: { href: "/blog/strukturovana-data-pro-ai/", label: "Strukturovaná data pro AI" },
      },
      {
        id: "rich-results",
        term: "Rich results",
        aka: "rich snippets, rozšířené výsledky",
        def: "Obohacené výsledky vyhledávání — hvězdičky, ceny, drobečková navigace, obrázky — které Google skládá ze strukturovaných dat stránky. Zvyšují prokliky. Pozor na dvě zrušené: FAQ přestal Google zobrazovat v květnu 2026, HowTo už v roce 2023.",
        updated: "2026-09-07",
        link: { href: "/blog/konec-faq-rich-results/", label: "Konec FAQ rich results" },
      },
      {
        id: "pillar-content",
        term: "Pilířová stránka",
        aka: "pillar content",
        def: "Obsahová architektura: jeden vyčerpávající průvodce tématem propojený s užšími podtématy hustou sítí interních odkazů. Vyhledávačům i AI ukazuje hloubku pokrytí tématu a soustředí autoritu na jedno místo.",
        link: { href: "/blog/jak-strukturovat-pillar-content/", label: "Jak stavět pilířovou stránku" },
      },
      {
        id: "brand-mentions",
        term: "Zmínky o značce",
        aka: "brand mentions",
        def: "Zmínky značky v externích zdrojích — médiích, diskusích, recenzích, katalozích — i bez odkazu. Generativní AI z nich skládá obraz o značce: kdo je, čemu se věnuje, jak je důvěryhodná. Pro GEO často důležitější než klasické zpětné odkazy.",
        link: { href: "/blog/ai-brand-mentions/", label: "Zmínky o značce v AI" },
      },
      {
        id: "citace-ai",
        term: "Citace v AI",
        def: "Uvedení webu jako zdroje v odpovědi AI nástroje — odkazem, jménem značky či obojím. Ekvivalent pozice ve vyhledávání pro AI éru: měří se testováním reálných promptů napříč platformami a nástroji na sledování AI viditelnosti.",
        link: { href: "/blog/jak-ai-cituje-zdroje/", label: "Jak AI cituje zdroje" },
      },
    ],
  },
  {
    id: "technika-mereni",
    label: "Technika a měření",
    terms: [
      {
        id: "ai-crawler",
        term: "AI crawler",
        aka: "AI robot, GPTBot, ClaudeBot, PerplexityBot",
        def: "Robot, kterým AI společnosti stahují obsah webů. Dělí se podle účelu na tři skupiny: vyhledávací (OAI-SearchBot, Claude-SearchBot, PerplexityBot) přinášejí citace, tréninkoví (GPTBot, ClaudeBot) sbírají data pro modely a roboti vyvolaní uživatelem načtou stránku na jeho přímý dotaz.",
        updated: "2026-09-07",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
        long:
          "AI robot je program, kterým AI společnosti stahují obsah webů. Klíčové je nemíchat je dohromady, protože každá skupina dělá něco jiného a rozhodnutí o nich má jiné důsledky.\n\n<strong>Vyhledávací roboti</strong> (OAI-SearchBot, Claude-SearchBot, PerplexityBot) sbírají obsah pro odpovědi s citacemi — zablokovat je znamená vzdát se viditelnosti. <strong>Tréninkoví roboti</strong> (GPTBot, ClaudeBot) sbírají data pro učení modelů; jejich zablokování citace v živém vyhledávání neomezí. <strong>Roboti vyvolaní uživatelem</strong> načtou stránku, když si o to člověk v chatu řekne — a robots.txt se na ně nemusí vztahovat.\n\nGoogle do žádné z těch skupin nezapadá: index pro Přehled od AI i režim AI plní běžný Googlebot, zatímco Google-Extended není robot, ale řídicí značka pro Gemini. Rozpad všech tokenů včetně ověření pravosti je v článcích <a href=\"/blog/ai-crawler-robots-txt/\">AI roboti a robots.txt</a> a <a href=\"/blog/overovani-ai-robotu/\">ověřování AI robotů</a>.",
      },
      {
        id: "robots-txt",
        term: "Robots.txt",
        def: "Textový soubor v kořeni webu, který říká robotům, co smí procházet. Bez pravidla platí povoleno; problém dělají plošné zákazy. V éře AI je to hlavní páka nad AI roboty: povolit vyhledávací (citace znamená viditelnost) a rozhodnout o tréninkových. U robotů vyvolaných uživatelem se na něj nelze spolehnout.",
        updated: "2026-09-07",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
        long:
          "Robots.txt je textový soubor v kořeni domény, kterým říkáte robotům, co smí procházet. Dvě věci se kolem něj pletou nejčastěji: <strong>bez pravidla platí povoleno</strong> (nemusíte nic „povolovat“) a soubor neřídí indexaci, jen procházení — na vyřazení z výsledků je značka noindex.\n\nV éře AI je to hlavní páka nad AI roboty, ale funguje jen na ty, kteří ho respektují. Vyhledávací roboty (OAI-SearchBot, Claude-SearchBot, PerplexityBot) povolte vždy — ty přinášejí citace. U tréninkových (GPTBot, ClaudeBot) je to vaše rozhodnutí. Roboti vyvolaní uživatelem se robots.txt řídit nemusí: ChatGPT-User a Perplexity-User to samy uvádějí, Claude-User ho podle dokumentace Anthropicu (7. 4. 2026) respektuje.\n\nČastější příčinou neviditelnosti než chybné pravidlo bývá blokace na CDN nebo firewallu podle IP adresy. Kompletní rozpad robotů podle účelu je v článku <a href=\"/blog/ai-crawler-robots-txt/\">AI roboti a robots.txt</a>, přehled voleb v <a href=\"/blog/co-vypne-ktery-opt-out/\">co vypne který opt-out</a>.",
      },
      {
        id: "llms-txt",
        term: "llms.txt",
        def: "Navrhovaný standard: soubor v kořeni webu, který AI systémům shrnuje, co web nabízí a kde najdou klíčový obsah — mapa webu pro jazykové modely. Žádná AI firma jeho čtení oficiálně nedeklaruje a Google 15. 6. 2026 potvrdil, že pro Vyhledávání nemá vliv. Nasazujte jen tehdy, když to nic nestojí.",
        updated: "2026-09-07",
        link: { href: "/blog/llms-txt-navod/", label: "llms.txt návod" },
        long:
          "llms.txt je navržený standard (autor Jeremy Howard): Markdown soubor v kořeni domény, který AI systémům přehledně shrnuje, co web nabízí a kde najdou klíčový obsah — mapa webu psaná pro jazykové modely. Podporu čtení souboru oficiálně nedeklaruje žádná velká AI firma — Anthropic i Perplexity ho jen samy publikují pro vlastní dokumentaci. Google 15. 6. 2026 uvedl, že pro Vyhledávání není potřeba a viditelnost neovlivní.\n\nZ vlastní zkušenosti dodáváme jedno pravidlo: <strong>llms.txt generujte automaticky, nepište ho ručně.</strong> Ručně psaný soubor nám zastaral za dva měsíce; generovaný při buildu se aktualizuje s každým novým obsahem sám — ten náš najdete na <a href=\"https://aiseo-optimalizace.cz/llms.txt\">aiseo-optimalizace.cz/llms.txt</a>.\n\nKompletní návod včetně formátu a rozhodnutí, kdy llms.txt neřešit, je v článku <a href=\"/blog/llms-txt-navod/\">llms.txt v roce 2026</a>.",
      },
      {
        id: "googlebot",
        term: "Googlebot",
        def: "Hlavní robot Googlu, který prochází a indexuje web pro klasické vyhledávání — a jeho index živí i Přehled od AI a režim AI. Od značky Google-Extended (ta řídí použití obsahu v Gemini) se liší účelem: zablokovat Googlebota znamená zmizet z vyhledávání i z odpovědí AI od Googlu.",
        updated: "2026-09-07",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
        long:
          "Googlebot je hlavní robot Googlu. Prochází a indexuje web pro klasické vyhledávání a z téhož indexu se skládají i odpovědi — Přehled od AI i režim AI. Jinými slovy: <strong>do odpovědí AI od Googlu se nedostanete jinou cestou než přes běžnou indexaci.</strong>\n\nOdtud plyne rozdíl proti značce Google-Extended, se kterou se Googlebot často plete. Google-Extended řídí použití obsahu v Gemini; jeho zákaz vás z vyhledávání ani z Přehledu od AI nevyřadí. Zablokovat Googlebota naopak znamená zmizet úplně — z výsledků i z odpovědí.\n\nJestli má Googlebot k obsahu skutečně přístup, se pozná z protokolu serveru a ze Search Console; na obsah vykreslovaný javascriptem je potřeba zvláštní pozor — rozebírá to článek <a href=\"/blog/javascript-a-ai-roboti/\">JavaScript a AI roboti</a>. Ověření, že se za Googlebota nevydává někdo jiný, popisuje <a href=\"/blog/overovani-ai-robotu/\">ověřování robotů</a>.",
      },
      {
        id: "google-extended",
        term: "Google-Extended",
        def: "Řídicí značka v robots.txt (ne robot), kterou Google odděluje použití obsahu v Gemini od vyhledávání. Její zakázání nevyřadí web z Googlu ani z Přehledu od AI a režimu AI — vypadnete ale ze zdrojů, ze kterých staví odpovědi Gemini. Rozhodnutí je strategické, ne technické.",
        updated: "2026-09-07",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
        long:
          "Google-Extended není robot, ale řídicí značka v robots.txt. Google jí odděluje použití obsahu v Gemini od vyhledávání — vlastní procházení dělá pořád Googlebot.\n\nRozhodnutí o ní je strategické. Zákaz <strong>nevyřadí web z Googlu ani z Přehledu od AI a režimu AI</strong> — ty jedou z indexu vyhledávání. Vypadnete ale ze zdrojů, ze kterých staví odpovědi Gemini, takže si za ochranu obsahu platíte ztrátou citací v jedné z platforem.\n\nNa vyřazení z Přehledu od AI a režimu AI slouží samostatné nastavení v Search Console (Funkce s generativní AI), ne tahle značka. Co která volba přesně vypne, srovnává článek <a href=\"/blog/co-vypne-ktery-opt-out/\">co vypne který opt-out</a>; kontext k robotům je v <a href=\"/blog/ai-crawler-robots-txt/\">AI roboti a robots.txt</a>.",
      },
      {
        id: "ovladani-generativni-ai",
        term: "Ovládání generativní AI ve Vyhledávání",
        aka: "Search generative AI control, opt-out z Přehledu od AI",
        def: "Přepínač v Search Console, kterým web vyřadíte z Přehledu od AI, z režimu AI a z generativních funkcí Discoveru. Celosvětově od 31. 8. 2026. Netýká se tréninku modelů — na ten je značka Google-Extended — a Google uvádí, že hodnocení stránek neovlivňuje.",
        updated: "2026-09-07",
        link: { href: "/blog/blokovat-ai-odpovedi-gsc/", label: "Jak vyřadit web z odpovědí AI" },
      },
      {
        id: "preferovane-zdroje",
        term: "Preferované zdroje",
        aka: "Preferred Sources",
        def: "Nastavení Googlu, kterým si čtenář označí weby, jež chce vídat častěji. Od 30. 4. 2026 v sekci Top Stories, od 3. 6. 2026 i v Přehledu od AI a v režimu AI. Označit lze doménu nebo subdoménu, ne jednotlivé stránky.",
        updated: "2026-09-07",
        link: { href: "/blog/preferovane-zdroje-google/", label: "Preferované zdroje v Googlu" },
      },
      {
        id: "search-console",
        term: "Google Search Console",
        aka: "GSC",
        def: "Bezplatný nástroj Googlu pro sledování výkonu webu ve vyhledávání: dotazy, kliknutí, zobrazení, indexace. Od června 2026 (plošně pro všechny weby od 31. 8. 2026) obsahuje report Funkce s generativní AI — ukazuje jen zobrazení odkazů na web v Přehledu od AI a v režimu AI, bez kliků, dotazů a pozic.",
        updated: "2026-09-07",
        link: { href: "/blog/gsc-ai-segmenty-mereni/", label: "GSC AI segmenty" },
        long:
          "Google Search Console je bezplatný nástroj pro sledování výkonu webu ve vyhledávání: dotazy, kliknutí, zobrazení, pozice a stav indexace. Pro éru AI přibyl report <strong>Funkce s generativní AI</strong> — spuštěný v červnu 2026 a plošně pro všechny weby od 31. 8. 2026.\n\nNež na něm postavíte měření, je dobré vědět, co neumí: ukazuje <strong>jen zobrazení</strong> odkazů na web v Přehledu od AI a v režimu AI. Žádné kliky, žádné dotazy, žádné pozice. Meziroční srovnání taky nedá — data začínají 18. 5. 2026.\n\nJak z toho složit použitelný obrázek dohromady s GA4 a Bing Webmaster Tools, popisuje <a href=\"/blog/gsc-ai-segmenty-mereni/\">měření AI segmentů v GSC</a>; limity měření režimu AI rozebírá <a href=\"/blog/mereni-ai-mode-limity/\">co v datech není vidět</a>.",
      },
      {
        id: "imprese",
        term: "Imprese",
        aka: "zobrazení",
        def: "Počet zobrazení webu ve výsledcích nebo v odpovědích AI — bez ohledu na kliknutí. V éře AI je to klíčové číslo: velká část hodnoty (doporučení v odpovědi, povědomí o značce) vzniká právě při zobrazení, které se v návštěvnosti nikdy neprojeví. Zobrazení v odpovědích AI ukazuje Search Console (Google) a Bing Webmaster Tools (Copilot).",
        updated: "2026-09-07",
        link: { href: "/ai-viditelnost/", label: "200 000 zobrazení — data" },
        long:
          "Imprese je jedno zobrazení odkazu na váš web — ve výsledcích vyhledávání nebo v odpovědi AI. Klik u toho být nemusí, a v éře AI často ani nebude.\n\nPrávě proto je to číslo, které se dnes čte jinak než dřív. <strong>Velká část hodnoty vzniká už při zobrazení</strong>: uživatel vidí značku v odpovědi, přečte si, co se o ní říká, a rozhodne se — jenže v návštěvnosti po tom nezůstane stopa. Web s vysokými impresemi a nízkou mírou prokliku proto nemusí být slabý; může být citovaný.\n\nZobrazení v odpovědích AI ukazují dva reporty: Search Console (Funkce s generativní AI, plošně od 31. 8. 2026 — jen zobrazení, bez kliků a dotazů) a Bing Webmaster Tools pro Copilota. Jak je číst dohromady s GA4, popisuje <a href=\"/blog/gsc-ai-segmenty-mereni/\">měření AI segmentů</a> a <a href=\"/blog/mereni-seo-vykonu-2026/\">měření výkonu v roce 2026</a>.",
      },
      {
        id: "ctr",
        term: "CTR",
        aka: "míra prokliku",
        def: "Poměr kliknutí k zobrazením — kolik procent lidí, kteří web viděli ve výsledcích, na něj skutečně kliklo. V AI éře CTR u informačních dotazů plošně klesá (odpověď dostane uživatel rovnou), proto se vyplácí sledovat ho spolu s impresemi, ne izolovaně.",
        link: { href: "/blog/zero-click-ai/", label: "Zero-click éra" },
      },
      {
        id: "ga4",
        term: "Google Analytics 4",
        aka: "GA4",
        def: "Bezplatný analytický nástroj Googlu pro měření návštěvnosti a konverzí webu. V AI éře slouží hlavně k měření AI referralů — návštěv z ChatGPT, Perplexity či Gemini — přes segment podle zdroje relace; zobrazení v AI odpovědích ale nevidí, to umí jen Search Console.",
        link: { href: "/blog/ai-navstevnost-konverze/", label: "Měření AI návštěvnosti" },
      },
      {
        id: "share-of-model",
        term: "Share of Model",
        def: "Metrika AI viditelnosti: jak velký podíl odpovědí AI nástrojů na relevantní dotazy zmiňuje vaši značku, ve srovnání s konkurencí. Obdoba podílu zmínek ve sdělovacích prostředcích, jen pro generativní AI; měří se opakovaným testováním sady dotazů.",
        link: { href: "/blog/share-of-model-metrika/", label: "Share of Model rozbor" },
      },
      {
        id: "ai-referral",
        term: "AI referral",
        def: "Návštěva webu prokliknutá z AI nástroje — v analytice viditelná se zdrojem chatgpt.com, perplexity.ai apod. Objemem malý, hodnotou výjimečný kanál: podle našich dat konvertuje násobně lépe než návštěvnost z klasického vyhledávání.",
        link: { href: "/blog/case-study-megadetail-ai-navstevnost/", label: "Case study s čísly" },
      },
      {
        id: "indexace",
        term: "Indexace",
        def: "Zařazení stránky do databáze vyhledávače, ze které se skládají výsledky i AI odpovědi. Neindexovaná stránka neexistuje pro Google ani pro AI funkce nad jeho indexem. Kontroluje se v Search Console; nejčastější překážky jsou noindex, duplicity a slabý obsah.",
        link: { href: "/blog/seo-audit-co-kontrolovat/", label: "Co kontrolovat při SEO auditu" },
      },
    ],
  },
];
