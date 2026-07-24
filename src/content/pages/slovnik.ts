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
  title: "Slovník pojmů AI éry vyhledávání — od AI Mode po zero-click",
  description:
    "Srozumitelné definice pojmů kolem AI vyhledávání: AI Mode, AI Overviews, GEO, AEO, LLM, RAG, query fan-out, strukturovaná data a další. Česky a bez balastu.",
};

export const hero = {
  eyebrow: "Slovník",
  title: "Pojmy AI éry vyhledávání",
  lead: "Krátké a přesné definice pojmů, které potkáte v našich průvodcích i v debatách o AI vyhledávání. Každé heslo má vlastní kotvu — můžete na něj odkazovat přímo.",
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
        link: { href: "/seo/", label: "Sekce SEO" },
        long:
          "AI SEO není nová disciplína, která by klasické SEO nahrazovala — je to jeho rozšíření o novou otázku: <strong>umí váš obsah přečíst, pochopit a citovat umělá inteligence?</strong> Zatímco klasické SEO optimalizuje pro pozici v seznamu odkazů, AI SEO optimalizuje pro roli zdroje v hotové odpovědi. Uživatel často žádný seznam neuvidí — dostane rovnou odpověď a v ní (nebo pod ní) citace.\n\nV praxi AI SEO stojí na čtyřech pilířích: technicky zdravý a indexovatelný web (bez toho vás žádná AI nenajde), obsah strukturovaný jako odpovědi na konkrétní otázky, strukturovaná data, která obsahu dodají strojově čitelný kontext, a důvěryhodná značka konzistentní napříč internetem.\n\nNa tomto webu pokrýváme AI SEO jako celek: čtyři disciplíny <a href=\"/seo/\">SEO</a>, <a href=\"/geo/\">GEO</a>, <a href=\"/aeo/\">AEO</a> a <a href=\"/aio/\">AIO</a> plus novou vrstvu <a href=\"/ai-mode/\">Google AI Mode</a>. Pokud začínáte, projděte <a href=\"/zacnete-tady/\">kurátorovanou cestu Začněte tady</a>.",
      },
      {
        id: "seo",
        term: "SEO",
        aka: "Search Engine Optimization",
        def: "Optimalizace webu pro vyhledávače — technický stav, obsah a autorita, díky kterým se stránky zobrazují na předních pozicích v Googlu či Seznamu. V AI éře zůstává základem: co není dohledatelné a indexované, nemůže být ani citované v AI odpovědích.",
        link: { href: "/seo/", label: "Sekce SEO" },
      },
      {
        id: "geo",
        term: "GEO",
        aka: "Generative Engine Optimization",
        def: "Optimalizace obsahu tak, aby ho generativní AI nástroje (ChatGPT, Perplexity, Claude, Gemini) používaly jako zdroj a citovaly ho ve svých odpovědích. Stojí na jasných definicích, konkrétních faktech, struktuře a budování zmínek o značce v důvěryhodných zdrojích.",
        link: { href: "/geo/", label: "Sekce GEO" },
        long:
          "GEO (Generative Engine Optimization) odpovídá na situaci, kdy se zákazník neptá Googlu, ale ChatGPT, Perplexity nebo Gemini. Tyto nástroje odpověď generují — a přitom si vybírají, ze kterých zdrojů budou čerpat a koho citují. GEO je řemeslo, jak se mezi tyto zdroje dostat.\n\nGenerativní enginy preferují obsah, který je <strong>fakticky hutný, jasně strukturovaný a snadno ověřitelný</strong>: krátké definice, konkrétní čísla, tabulky, odpovědi na přesně položené otázky. A protože si modely ověřují tvrzení napříč zdroji, roli hraje i konzistence vaší značky mimo váš web — recenze, zmínky, profily.\n\nPodrobný rozbor disciplíny najdete v <a href=\"/geo/\">sekci GEO</a>, praktický postup v <a href=\"/blog/geo-optimalizace/\">návodu na GEO optimalizaci v 7 krocích</a> a mechaniku výběru zdrojů v článku <a href=\"/blog/jak-ai-cituje-zdroje/\">Jak AI cituje zdroje</a>.",
      },
      {
        id: "aeo",
        term: "AEO",
        aka: "Answer Engine Optimization",
        def: "Užší disciplína zaměřená na answer engines napojené na vyhledávač — Google AI Overviews, Featured Snippets či Bing Copilot. Pracuje s krátkými odpověďmi, FAQ sekcemi a strukturovanými daty, aby vyhledávač mohl stránku použít jako přímou odpověď na dotaz.",
        link: { href: "/aeo/", label: "Sekce AEO" },
        long:
          "AEO (Answer Engine Optimization) cílí na odpovědní systémy napojené na vyhledávače — především Google AI Overviews, Featured Snippets a Bing Copilot. Od GEO se liší tím, že se odehrává uvnitř ekosystému vyhledávače: kandidáty na citaci si systém vybírá z indexovaných stránek, typicky z těch, které už dobře fungují v klasickém vyhledávání.\n\nŘemeslo AEO je konkrétní: <strong>krátká odpověď 40–60 slov hned pod nadpisem</strong>, nadpisy formulované jako otázky, FAQ sekce se strukturovanými daty, návody krok za krokem s HowTo schematem. Přesně z takových bloků odpovědní panely skládají obsah.\n\nZáklady rozebírá <a href=\"/aeo/\">sekce AEO</a>, praktiku <a href=\"/blog/aeo-optimalizace-v-praxi/\">návod na AEO optimalizaci</a> — včetně anatomie answer blocku a šablon pěti typů otázek.",
      },
      {
        id: "aio",
        term: "AIO",
        def: "Zkratka s dvěma významy: nejčastěji Google AI Overviews (AI souhrny ve výsledcích vyhledávání), v širším užití též AI Optimization jako zastřešující pojem nad SEO, GEO a AEO. V našich textech používáme AIO primárně pro funkce Googlu.",
        link: { href: "/aio/", label: "Sekce AIO" },
      },
      {
        id: "llmo",
        term: "LLMO",
        aka: "LLM Optimization",
        def: "Alternativní název pro optimalizaci viditelnosti ve velkých jazykových modelech — v praxi synonymum GEO. Zahrnuje techniky, díky kterým LLM systémy značku znají, správně o ní informují a citují její obsah ve vygenerovaných odpovědích.",
      },
      {
        id: "e-e-a-t",
        term: "E-E-A-T",
        aka: "Experience, Expertise, Authoritativeness, Trust",
        def: "Rámec Googlu pro hodnocení důvěryhodnosti obsahu: zkušenost, odbornost, autorita a důvěryhodnost. V AI éře nabývá na váze — systémy preferují obsah s dohledatelným autorem, doloženou praxí a konzistentní entitou značky napříč webem.",
        link: { href: "/blog/e-e-a-t-pro-ai/", label: "E-E-A-T pro AI" },
        long:
          "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness — zkušenost, odbornost, autorita, důvěryhodnost) je rámec, kterým Google popisuje kvalitu zdroje. Není to přímý ranking faktor se skóre — je to souhrn signálů, podle kterých systémy (a čím dál víc i AI odpovědi) poznávají, komu věřit.\n\nV AI éře význam E-E-A-T roste: generativní systémy si vybírají zdroje pro citace a <strong>ověřitelná identita autora a značky je jedním z hlavních vodítek</strong>. Prakticky to znamená: viditelný autor s vlastní stránkou a Person schematem, reálná zkušenost v textech („testovali jsme\", konkrétní čísla z praxe), konzistentní profil značky napříč webem, recenzemi a zmínkami.\n\nCelý rozbor najdete v článku <a href=\"/blog/e-e-a-t-pro-ai/\">E-E-A-T pro AI</a>; navazují <a href=\"/blog/autorsky-profil-pro-ai/\">autorský profil pro AI</a> a heslo <a href=\"/slovnik/brand-mentions/\">brand mentions</a>.",
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
        def: "Vyhledávání, které skončí bez kliknutí na jakýkoli web — uživatel dostane odpověď přímo ve výsledcích (AI Overviews, featured snippet, panel znalostí). Pro weby znamená růst viditelnosti bez návštěvy a nutnost měřit zobrazení, ne jen kliky.",
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
        term: "AI Mode",
        aka: "Google AI Mode, režim AI",
        def: "Konverzační režim vyhledávání Googlu: samostatná záložka, kde místo seznamu odkazů dostanete souvislou odpověď složenou z mnoha zdrojů, s citacemi a navazujícími otázkami. Dotazy rozkládá technikou query fan-out; v ČR zájem meziročně vyrostl o tisíce procent.",
        link: { href: "/ai-mode/", label: "Sekce AI Mode" },
        long:
          "Google AI Mode je samostatná záložka vyhledávání, ve které Google místo seznamu odkazů rovnou skládá odpověď — a čeká na navazující otázky jako v chatu. Stojí na stejném indexu jako klasické vyhledávání, ale funguje jinak: dotaz rozloží na desítky dílčích podotázek (query fan-out) a pro každou hledá nejlepší odpověď.\n\nPro weby to znamená zásadní posun: <strong>citaci nevyhrává stránka první na hlavní dotaz, ale stránka nejpřesněji odpovídající na konkrétní podotázku.</strong> Malý specializovaný článek tak může porazit velkou autoritu. V Česku zájem o AI Mode prudce roste — hledanost meziročně vzrostla o tisíce procent.\n\nKompletní rozbor včetně pěti kroků přípravy najdete v <a href=\"/ai-mode/\">sekci Google AI Mode</a>; srovnání s AI Overviews v článku <a href=\"/blog/ai-mode-vs-ai-overviews/\">AI Mode vs. AI Overviews</a> a praktický návod v textu <a href=\"/blog/jak-se-zobrazit-v-ai-mode/\">Jak se zobrazit v AI Mode</a>.",
      },
      {
        id: "ai-overviews",
        term: "AI Overviews",
        aka: "AI přehledy, dříve SGE",
        def: "AI souhrn zobrazovaný nad klasickými výsledky Googlu: stručná odpověď vygenerovaná z více zdrojů s odkazy na citované weby. Na rozdíl od AI Mode nenahrazuje výsledky, ale předsazuje se před ně — a snižuje míru prokliku u informačních dotazů.",
        link: { href: "/aio/", label: "Sekce AIO" },
        long:
          "AI Overviews je funkce Googlu, která nad klasické výsledky vloží AI souhrn složený z více zdrojů, s citacemi. Na rozdíl od AI Mode ji uživatel nevolí — zobrazuje se automaticky u dotazů, kde ji Google vyhodnotí jako užitečnou, typicky u informačních otázek.\n\nPro weby má AI Overviews dvojí tvář. Kdo je citovaný, získává viditelnost a důvěru „nad prvním místem\". Kdo citovaný není, přichází o kliknutí — uživatel dostal odpověď a nemá důvod scrollovat. Proto se kolem AI Overviews vedou dvě legitimní strategie: <strong>optimalizovat na citaci</strong> (viz <a href=\"/aeo/\">AEO</a>), nebo u citlivého obsahu <strong>použití obsahu omezit</strong>.\n\nJak se do AI Overviews dostat, rozebírá <a href=\"/blog/aeo-optimalizace-v-praxi/\">praktický návod</a>; jak je naopak omezit, řeší návod <a href=\"/blog/jak-vypnout-ai-overview/\">Jak vypnout AI Overviews</a>. Zobrazení vašeho webu v AI funkcích měří beta report v <a href=\"/blog/gsc-ai-segmenty-mereni/\">Search Console</a>.",
      },
      {
        id: "query-fan-out",
        term: "Query fan-out",
        def: "Technika generativního vyhledávání: systém rozloží jeden dotaz na desítky dílčích podotázek, každou zodpoví z indexu a odpovědi složí do výsledného textu. Citace tak vyhrávají stránky, které nejlépe odpovídají na konkrétní podotázku — ne nutně ty první na hlavní dotaz.",
        link: { href: "/blog/query-fan-out-ai-mode/", label: "Query fan-out rozbor" },
        long:
          "Query fan-out je technika, kterou Google AI Mode zpracovává dotazy: jeden dotaz uživatele rozloží na desítky dílčích podotázek, každou zvlášť vyhledá v indexu a z nejlepších odpovědí složí výsledný text s citacemi. Z dotazu „jaký vosk na tmavý lak v zimě\" se tak stane sada otázek o typech vosků, chování laku v mrazu, konkrétních produktech i recenzích.\n\nDůsledek pro tvorbu obsahu je zásadní: <strong>jednotkou optimalizace přestává být klíčové slovo a stává se jí odpověď na podotázku.</strong> Web strukturovaný jako sada jasných otázek a odpovědí má v osudí víc losů než jeden dlouhý text optimalizovaný na jediný dotaz.\n\nMechanismus do hloubky rozebírá článek <a href=\"/blog/query-fan-out-ai-mode/\">Query fan-out: jak Google AI Mode čte obsah</a>; širší kontext najdete v <a href=\"/ai-mode/\">sekci AI Mode</a>.",
      },
      {
        id: "featured-snippet",
        term: "Featured snippet",
        def: "Zvýrazněný úryvek na vrcholu klasických výsledků Googlu, který přímo odpovídá na dotaz — odstavec, seznam nebo tabulka vytažené z konkrétní stránky. Předchůdce AI odpovědí; optimalizuje se podobně: přímá odpověď hned pod nadpisem ve formátu otázky.",
      },
      {
        id: "knowledge-graph",
        term: "Knowledge graph",
        aka: "znalostní graf",
        def: "Databáze entit (firem, lidí, míst, pojmů) a vztahů mezi nimi, kterou vyhledávače používají k pochopení světa. Značka ukotvená v knowledge graphu — přes strukturovaná data, Wikipedii či konzistentní zmínky — je pro AI systémy ověřitelná a bezpečnější k doporučení.",
      },
      {
        id: "entita",
        term: "Entita",
        def: "Jednoznačně identifikovatelná „věc“ pro vyhledávače a AI: značka, osoba, produkt, místo. Silná entita má konzistentní název, popis a propojené profily napříč webem i externími zdroji — proto ji systémy umí spolehlivě rozpoznat, ověřit a citovat.",
        link: { href: "/blog/autorsky-profil-pro-ai/", label: "Author entity návod" },
      },
      {
        id: "serp",
        term: "SERP",
        aka: "Search Engine Results Page",
        def: "Stránka s výsledky vyhledávání. Kdysi deset modrých odkazů, dnes mix AI Overviews, map, produktových karuselů, videí a klasických výsledků. Podoba SERPu určuje, kolik kliknutí na dotaz reálně zbývá pro weby — a kde se vyplatí bojovat.",
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
        def: "Konverzační AI asistent od OpenAI a největší zdroj AI referral návštěvnosti na weby. Odpovídá z natrénovaných znalostí a v search módu si zdroje dohledává živě (crawler OAI-SearchBot). Návštěvník z ChatGPT bývá výrazně rozhodnutější než z klasického vyhledávání.",
        link: { href: "/blog/chatgpt-seo/", label: "ChatGPT SEO návod" },
      },
      {
        id: "perplexity",
        term: "Perplexity",
        def: "AI vyhledávač, který odpovědi vždy staví na živém dohledání zdrojů a viditelně je cituje. V Česku nezvykle populární (desítky tisíc hledání měsíčně). Klade důraz na čerstvost obsahu — pravidelně aktualizované stránky mají výrazně vyšší šanci na citaci.",
        link: { href: "/blog/perplexity-seo/", label: "Perplexity SEO návod" },
      },
      {
        id: "gemini",
        term: "Google Gemini",
        def: "Rodina AI modelů Googlu a zároveň jeho konverzační asistent. Pohání AI Overviews i AI Mode; samostatná aplikace Gemini umí prohledávat web a citovat zdroje. Pro weby platí: co funguje pro Google index a strukturovaná data, pomáhá i v Gemini.",
        link: { href: "/blog/claude-gemini-seo/", label: "Claude & Gemini návod" },
      },
      {
        id: "claude",
        term: "Claude",
        def: "AI asistent od Anthropicu zaměřený na spolehlivost a delší kontext. Web prochází crawlerem ClaudeBot a při odpovědích s vyhledáváním cituje zdroje. Mezi uživateli převažují profesionálové — citace v Claude mívají hodnotné B2B publikum.",
        link: { href: "/blog/claude-gemini-seo/", label: "Claude & Gemini návod" },
      },
      {
        id: "copilot",
        term: "Microsoft Copilot",
        def: "AI asistent Microsoftu postavený na modelech OpenAI a indexu Bingu — ve Windows, Edge i Microsoft 365. Pro viditelnost v Copilotu je klíčová indexace v Bingu (Bing Webmaster Tools, IndexNow), kterou české weby často opomíjejí.",
        link: { href: "/blog/bing-seo-pro-ai/", label: "Bing SEO návod" },
      },
      {
        id: "grok",
        term: "Grok",
        def: "AI asistent společnosti xAI propojený se sítí X (Twitter). Vyniká v aktuálních tématech díky přístupu k příspěvkům v reálném čase; web prochází crawlerem. Pro většinu CZ webů zatím okrajový zdroj, ale rychle rostoucí povědomí.",
      },
      {
        id: "ai-agent",
        term: "AI agent",
        def: "AI systém, který úkoly nejen zodpovídá, ale sám vykonává: prochází weby, porovnává nabídky, vyplňuje formuláře, nakupuje. Pro e-shopy znamená nový typ „návštěvníka“, který čte strukturu a data, ne design — a rozhoduje podle parametrů.",
        link: { href: "/blog/ai-nakupni-agenti/", label: "AI nákupní agenti" },
      },
      {
        id: "ai-prohlizec",
        term: "AI prohlížeč",
        aka: "Comet, Atlas",
        def: "Webový prohlížeč s vestavěným AI asistentem, který stránky čte, shrnuje a vykonává v nich úkoly — např. Perplexity Comet nebo ChatGPT Atlas. Mění chování uživatelů: část „návštěv“ webu probíhá skrz AI vrstvu, která obsah zpracuje místo člověka.",
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
          "RAG (Retrieval-Augmented Generation) je technika, díky které AI asistenti nejsou odkázaní jen na to, co se naučili při tréninku: před odpovědí si <strong>dohledají aktuální podklady</strong> (vyhledáváním na webu či ve vlastní databázi) a odpověď generují z nich — typicky s citacemi zdrojů.\n\nPrávě RAG dělá z chatbotů vyhledávače a z vašeho webu potenciální zdroj odpovědí. Má to praktický důsledek: do RAG odpovědí se dostává obsah, který je dohledatelný, čerstvý a snadno „vyříznutelný\" — pasáže, které dávají smysl samy o sobě. Obsah zamčený za přihlášením nebo závislý na kontextu celé stránky má smůlu.\n\nJak RAG funguje krok za krokem, rozebírá článek <a href=\"/blog/rag-ai-vyhledavani/\">RAG: jak AI vyhledávání funguje</a>; navazuje heslo <a href=\"/slovnik/embedding/\">embedding</a> a <a href=\"/slovnik/query-fan-out/\">query fan-out</a>.",
      },
      {
        id: "prompt-engineering",
        term: "Prompt engineering",
        aka: "práce s prompty",
        def: "Umění formulovat zadání pro AI tak, aby dalo užitečný výstup: kontext, role, formát odpovědi, příklady. Pro AI SEO je užitečné obráceně — když víte, jak se lidé AI ptají na váš obor, umíte psát obsah, který na tyto dotazy odpovídá.",
      },
      {
        id: "embedding",
        term: "Embedding",
        def: "Číselná reprezentace textu zachycující jeho význam. AI systémy přes embeddingy porovnávají významovou podobnost — proto najdou váš obsah i na dotaz formulovaný úplně jinými slovy. Základ sémantického vyhledávání.",
      },
      {
        id: "semanticke-vyhledavani",
        term: "Sémantické vyhledávání",
        def: "Vyhledávání podle významu, ne podle shody klíčových slov. Systém pochopí záměr dotazu a najde obsah, který ho řeší — i bez přesné fráze. Důsledek pro tvorbu obsahu: pokrývejte téma a otázky, ne opakování jednoho klíčového slova.",
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
      },
    ],
  },
  {
    id: "obsah",
    label: "Obsah a struktura",
    terms: [
      {
        id: "answer-block",
        term: "Answer block",
        aka: "krátká odpověď",
        def: "Odstavec 40–60 slov hned pod nadpisem, který samostatně a fakticky odpovídá na hlavní otázku stránky. Přesně z takových pasáží AI systémy skládají citace — je to nejlevnější a nejúčinnější technika AI SEO.",
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
        aka: "schema markup",
        def: "Strojově čitelné značky (nejčastěji JSON-LD dle schema.org), které vyhledávačům a AI říkají, co stránka obsahuje: článek, produkt, firmu, FAQ, osobu. Pomáhají systémům obsah správně pochopit, zobrazit v rich results a bezpečně citovat.",
        link: { href: "/blog/strukturovana-data-pro-ai/", label: "Návod na strukturovaná data" },
      },
      {
        id: "json-ld",
        term: "JSON-LD",
        def: "Doporučený formát zápisu strukturovaných dat: blok JSON vložený do hlavičky stránky, oddělený od HTML obsahu. Snadno se generuje i udržuje — proto ho preferuje Google i většina šablon a e-shopových platforem.",
      },
      {
        id: "rich-results",
        term: "Rich results",
        aka: "rich snippets",
        def: "Obohacené výsledky vyhledávání — hvězdičky, ceny, FAQ, drobečky, obrázky — které Google skládá ze strukturovaných dat stránky. Zvyšují prokliky a zároveň signalizují, že web poskytuje strojově čitelná fakta, o která se opírají i AI funkce.",
      },
      {
        id: "pillar-content",
        term: "Pillar content",
        aka: "hub-and-spoke",
        def: "Obsahová architektura: jeden vyčerpávající průvodce tématem (pillar/hub) propojený s užšími podtématy (spokes) hustou sítí interních odkazů. Vyhledávačům i AI ukazuje hloubku pokrytí tématu a soustředí autoritu.",
        link: { href: "/blog/jak-strukturovat-pillar-content/", label: "Pillar content návod" },
      },
      {
        id: "brand-mentions",
        term: "Brand mentions",
        aka: "zmínky o značce",
        def: "Zmínky značky v externích zdrojích — médiích, diskusích, recenzích, katalozích — i bez odkazu. Generativní AI z nich skládá obraz o značce: kdo je, čemu se věnuje, jak je důvěryhodná. Pro GEO často důležitější než klasické zpětné odkazy.",
        link: { href: "/blog/ai-brand-mentions/", label: "Brand mentions rozbor" },
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
        aka: "GPTBot, ClaudeBot, PerplexityBot",
        def: "Robot, kterým AI společnosti stahují obsah webů — pro trénink modelů (GPTBot, Google-Extended) nebo pro živé vyhledávání (OAI-SearchBot, PerplexityBot). V robots.txt lze každý zvlášť povolit či zakázat — a tím řídit, kde chcete být vidět.",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
      },
      {
        id: "robots-txt",
        term: "Robots.txt",
        def: "Textový soubor v kořeni webu, který říká robotům, co smí procházet. V AI éře je to hlavní páka nad AI crawlery: povolit vyhledávací boty (citace = viditelnost) a rozhodnout o tréninkových. Chybná konfigurace umí web z AI odpovědí vyřadit úplně.",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
      },
      {
        id: "llms-txt",
        term: "llms.txt",
        def: "Navrhovaný standard: soubor v kořeni webu, který AI systémům přehledně shrnuje, co web nabízí a kde najdou klíčový obsah — jakási mapa webu pro jazykové modely. Podpora mezi AI firmami se teprve vyvíjí; nasazení je levné a bez rizika.",
        link: { href: "/blog/llms-txt-navod/", label: "llms.txt návod" },
        long:
          "llms.txt je navržený standard (autor Jeremy Howard): Markdown soubor v kořeni domény, který AI systémům přehledně shrnuje, co web nabízí a kde najdou klíčový obsah — mapa webu psaná pro jazykové modely. Podpora mezi AI firmami se stále vyvíjí: deklarují ji např. Anthropic a Perplexity, Google podle veřejných vyjádření soubor nevyužívá.\n\nZ vlastní zkušenosti dodáváme jedno pravidlo: <strong>llms.txt generujte automaticky, nepište ho ručně.</strong> Ručně psaný soubor nám zastaral za dva měsíce; generovaný při buildu se aktualizuje s každým novým obsahem sám — ten náš najdete na <a href=\"https://aiseo-optimalizace.cz/llms.txt\">aiseo-optimalizace.cz/llms.txt</a>.\n\nKompletní návod včetně formátu a rozhodnutí, kdy llms.txt neřešit, je v článku <a href=\"/blog/llms-txt-navod/\">llms.txt v roce 2026</a>.",
      },
      {
        id: "googlebot",
        term: "Googlebot",
        def: "Hlavní crawler Googlu, který prochází a indexuje web pro klasické vyhledávání — a jeho index živí i AI Overviews a AI Mode. Od tréninkového bota Google-Extended se liší účelem: zablokovat Googlebot znamená zmizet z vyhledávání i z AI odpovědí Googlu.",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
      },
      {
        id: "google-extended",
        term: "Google-Extended",
        def: "Samostatný token v robots.txt, kterým Google odděluje trénink AI modelů (Gemini) od vyhledávání. Jeho zakázání nevyřadí web z Googlu ani z AI Overviews — omezí jen použití obsahu pro trénink. Rozhodnutí je proto strategické, ne technické.",
        link: { href: "/blog/ai-crawler-robots-txt/", label: "Robots.txt pro AI" },
      },
      {
        id: "search-console",
        term: "Google Search Console",
        aka: "GSC",
        def: "Bezplatný nástroj Googlu pro sledování výkonu webu ve vyhledávání: dotazy, kliknutí, zobrazení, indexace. Od roku 2026 obsahuje beta report „Funkce s generativní AI“, který ukazuje zobrazení webu v AI Overviews a AI Mode.",
        link: { href: "/blog/gsc-ai-segmenty-mereni/", label: "GSC AI segmenty" },
      },
      {
        id: "imprese",
        term: "Imprese",
        aka: "zobrazení",
        def: "Počet zobrazení webu ve výsledcích či AI odpovědích — bez ohledu na kliknutí. V AI éře klíčová metrika: velká část hodnoty (doporučení v odpovědi, brand awareness) vzniká právě při zobrazení, které v návštěvnosti nikdy neuvidíte.",
        link: { href: "/ai-viditelnost/", label: "200 000 zobrazení — data" },
      },
      {
        id: "ctr",
        term: "CTR",
        aka: "click-through rate, míra prokliku",
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
        def: "Metrika AI viditelnosti: jak velký podíl odpovědí AI nástrojů na relevantní dotazy zmiňuje vaši značku, ve srovnání s konkurencí. Obdoba share of voice pro generativní AI; měří se opakovaným testováním sady promptů.",
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
      },
    ],
  },
];
