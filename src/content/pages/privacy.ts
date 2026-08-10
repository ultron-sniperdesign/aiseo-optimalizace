/**
 * Datový modul — zásady zpracování osobních údajů /gdpr/.
 *
 * Veškerý přeložitelný obsah stránky (meta, hero, 9 sekcí zásad) — dříve
 * inline v `src/pages/gdpr/index.astro`. Template stránku jen renderuje;
 * sekce se skládají z typovaných bloků (odstavec / podnadpis / seznam /
 * zpracovatelé / kontaktní seznam).
 *
 * Stringy s příponou `Html` (a položky bloků) se renderují přes set:html
 * (obsahují <strong>, <a>, <em>, &nbsp;, &mdash;…). Vložené elementy
 * NEdostanou Astro scope atribut → dotčené descendant selektory v template
 * používají :global() (viz CLAUDE.md § VI — set:html + scoped CSS).
 *
 * Mutace: fork má vlastní kopii tohoto souboru s přeloženým obsahem
 * (a vlastními právními texty dle jurisdikce cílového trhu).
 */

export const meta = {
  title: "Zásady zpracování osobních údajů — aiseo-optimalizace.cz",
  description:
    "Jak nakládáme s osobními údaji, které nám předáte na aiseo-optimalizace.cz. Správce, účely, právní základ, doba uchování, vaše práva a kontakt.",
};

/** Breadcrumb položka stránky. */
export const breadcrumb = { label: "Zásady zpracování osobních údajů", href: "/gdpr/" };

/** Datum poslední aktualizace zásad. Aktualizovat při každé věcné změně. */
export const lastUpdated = "2026-05-18";

/** Hero — drobečková navigace + titulek + lead. */
export const hero = {
  crumbsAriaLabel: "Drobečková navigace",
  crumbHomeLabel: "Úvod",
  crumbCurrentLabel: "Zásady zpracování osobních údajů",
  titleHtml: "Zásady <strong>zpracování osobních údajů</strong>",
  leadHtml:
    "Jak nakládáme s&nbsp;osobními údaji, které nám předáte na&nbsp;webu <strong>aiseo-optimalizace.cz</strong> &mdash; přes formuláře pro stažení&nbsp;PDF, objednávku Wireframe Packu nebo poptávku auditu. Stručně, srozumitelně, v&nbsp;souladu s&nbsp;GDPR a&nbsp;českým zákonem o&nbsp;zpracování osobních údajů.",
  metaLabel: "Účinné od:",
};

/** Obsahový blok sekce zásad. */
export type PrivacyBlock =
  | { type: "p"; html: string }
  | { type: "sub"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "processors"; items: { dtHtml: string; ddHtml: string }[] }
  | { type: "contactList"; items: string[] };

/** Sekce zásad (číslo + nadpis + bloky obsahu). */
export interface PrivacySection {
  num: string;
  titleHtml: string;
  blocks: PrivacyBlock[];
}

export const sections: PrivacySection[] = [
  {
    num: "01",
    titleHtml: "Kdo je správcem vašich údajů",
    blocks: [
      {
        type: "p",
        html: "Správcem osobních údajů zpracovávaných v&nbsp;souvislosti s&nbsp;tímto webem je&nbsp;společnost <strong>CPU&nbsp;s.r.o.</strong> (provozovatel značky Sniper Design), IČO&nbsp;<strong>08125163</strong>, se&nbsp;sídlem <strong>Akademická&nbsp;663/5, Malešice, 108&nbsp;00&nbsp;Praha&nbsp;10</strong>, zapsaná v&nbsp;obchodním rejstříku vedeném Městským soudem v&nbsp;Praze pod&nbsp;spisovou značkou&nbsp;<strong>C&nbsp;313409</strong>.",
      },
      {
        type: "p",
        html: '<strong>Kontakt&nbsp;pro&nbsp;věci&nbsp;GDPR:</strong> e-mail <a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a>, telefon <a href="tel:+420775181634">+420&nbsp;775&nbsp;181&nbsp;634</a>.',
      },
    ],
  },
  {
    num: "02",
    titleHtml: "Jaké údaje zpracováváme a&nbsp;za jakým účelem",
    blocks: [
      { type: "sub", html: "a) Stažení PDF&nbsp;návodu zdarma" },
      {
        type: "p",
        html: 'Pokud vyplníte formulář pro stažení&nbsp;PDF (Návod zdarma, sekce <a href="/navod-zdarma/">/navod-zdarma/</a>), zpracováváme:',
      },
      {
        type: "ul",
        items: [
          "<strong>E-mailovou adresu</strong> &mdash; abychom vám PDF doručili a&nbsp;mohli vám zasílat navazující edukativní obsah o&nbsp;AI&nbsp;SEO.",
          "<strong>Označení zdroje (lead&nbsp;source tag)</strong> &mdash; interní informace, ze&nbsp;které stránky jste se přihlásili (pomáhá nám rozumět zájmu čtenářů).",
        ],
      },
      { type: "sub", html: "b) Objednávka AI&nbsp;SEO Wireframe Packu" },
      {
        type: "p",
        html: 'Pokud si zakoupíte placený produkt <a href="/pack/">Wireframe Pack</a>, zpracováváme údaje potřebné pro&nbsp;plnění kupní smlouvy:',
      },
      {
        type: "ul",
        items: [
          "<strong>E-mailovou adresu</strong> &mdash; pro doručení produktu (odkazy na&nbsp;PDF) a&nbsp;komunikaci o&nbsp;objednávce.",
          "<strong>Fakturační údaje</strong> &mdash; jméno/firma, adresa, IČO/DIČ &mdash; pro&nbsp;vystavení daňového dokladu (povinnost dle zákona o&nbsp;DPH).",
          "<strong>Platební údaje</strong> &mdash; zpracovává platební brána Stripe (viz&nbsp;sekce 04), my k&nbsp;číslu karty nemáme přístup.",
        ],
      },
      { type: "sub", html: "c) Poptávka AI&nbsp;SEO auditu" },
      {
        type: "p",
        html: 'Pokud vyplníte formulář pro poptávku auditu (<a href="/audit/">/audit/</a>), zpracováváme:',
      },
      {
        type: "ul",
        items: [
          "<strong>Jméno, e-mail, telefon</strong> &mdash; pro&nbsp;komunikaci o&nbsp;poptávce.",
          "<strong>URL vašeho webu a&nbsp;informace o&nbsp;projektu</strong> &mdash; pro&nbsp;předběžnou analýzu a&nbsp;přípravu cenové nabídky.",
        ],
      },
      { type: "sub", html: "d) Návštěvnost webu (analytika)" },
      {
        type: "p",
        html: "Používáme Google Analytics&nbsp;4 pro&nbsp;měření návštěvnosti a&nbsp;chování uživatelů. GA4 pracuje s&nbsp;anonymizovanými údaji (zkrácená IP&nbsp;adresa, typ zařízení, prohlížeč, zdroj návštěvy) &mdash; nikoli s&nbsp;osobními údaji, podle kterých bychom vás mohli individuálně identifikovat.",
      },
    ],
  },
  {
    num: "03",
    titleHtml: "Právní základ zpracování",
    blocks: [
      {
        type: "ul",
        items: [
          "<strong>Souhlas</strong> (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;a&nbsp;GDPR) &mdash; pro&nbsp;zasílání e-mailových materiálů po&nbsp;stažení PDF. Souhlas můžete kdykoli odvolat jedním kliknutím v&nbsp;každém našem e-mailu (odkaz „Odhlásit&nbsp;se z&nbsp;odběru\").",
          "<strong>Plnění smlouvy</strong> (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;b&nbsp;GDPR) &mdash; pro&nbsp;dodání zakoupeného Wireframe Packu a&nbsp;realizaci objednaného auditu.",
          "<strong>Plnění právní povinnosti</strong> (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;c&nbsp;GDPR) &mdash; pro&nbsp;uchování daňových dokladů po&nbsp;dobu stanovenou zákonem (10&nbsp;let dle ZDPH).",
          "<strong>Oprávněný zájem</strong> (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;f&nbsp;GDPR) &mdash; pro&nbsp;základní analytiku návštěvnosti webu a&nbsp;zabezpečení proti zneužití.",
        ],
      },
    ],
  },
  {
    num: "04",
    titleHtml: "Komu vaše údaje předáváme (zpracovatelé)",
    blocks: [
      {
        type: "p",
        html: "Pro&nbsp;technickou realizaci služby využíváme následující zpracovatele. Všichni mají uzavřenou zpracovatelskou smlouvu a&nbsp;zpracovávají údaje pouze pro&nbsp;účely uvedené v&nbsp;těchto zásadách:",
      },
      {
        type: "processors",
        items: [
          {
            dtHtml: "Ecomail.cz&nbsp;s.r.o.",
            ddHtml:
              "Doručování e-mailových materiálů (PDF&nbsp;návod, paid produkt delivery, marketing). E-maily a&nbsp;jména kontaktů jsou uloženy v&nbsp;Ecomailu (server v&nbsp;ČR).",
          },
          {
            dtHtml: "Stripe Payments Europe, Ltd.",
            ddHtml:
              "Zpracování plateb za&nbsp;Wireframe Pack. Stripe je&nbsp;PCI-DSS certifikovaný platební procesor. K&nbsp;číslu vaší platební karty my nemáme přístup.",
          },
          {
            dtHtml: "Cloudflare,&nbsp;Inc.",
            ddHtml:
              "CDN a&nbsp;cloud&nbsp;funkce (přenos webhook eventů ze&nbsp;Stripe do&nbsp;Ecomailu). Datacentra v&nbsp;EU. Cloudflare je&nbsp;součástí DPF (Data Privacy Framework) pro&nbsp;přenosy do&nbsp;USA.",
          },
          {
            dtHtml: "Forpsi.com (Internet CZ,&nbsp;a.s.)",
            ddHtml: "Hosting samotného webu (VPS&nbsp;v&nbsp;ČR).",
          },
          {
            dtHtml: "Google&nbsp;Ireland Limited",
            ddHtml:
              "Google&nbsp;Analytics&nbsp;4 &mdash; anonymizovaná analytika návštěvnosti. Datacentra v&nbsp;EU.",
          },
        ],
      },
    ],
  },
  {
    num: "05",
    titleHtml: "Jak dlouho údaje uchováváme",
    blocks: [
      {
        type: "ul",
        items: [
          "<strong>E-mailové kontakty (newsletter):</strong> do&nbsp;odvolání vašeho souhlasu (odhlášení), nejdéle však 5&nbsp;let od&nbsp;poslední interakce.",
          "<strong>Údaje k&nbsp;objednávkám a&nbsp;daňové doklady:</strong> 10&nbsp;let od&nbsp;konce zdaňovacího období, ve&nbsp;kterém došlo k&nbsp;plnění (zákonná povinnost dle&nbsp;ZDPH).",
          "<strong>Poptávky auditu:</strong> 2&nbsp;roky od&nbsp;poslední komunikace pro&nbsp;případ navazujícího jednání nebo reklamace.",
          "<strong>Anonymizovaná analytika:</strong> dle&nbsp;defaultního nastavení GA4 (typicky&nbsp;14&nbsp;měsíců).",
        ],
      },
    ],
  },
  {
    num: "06",
    titleHtml: "Vaše práva",
    blocks: [
      {
        type: "p",
        html: "V&nbsp;souladu s&nbsp;GDPR máte ve&nbsp;vztahu ke&nbsp;svým osobním údajům následující práva:",
      },
      {
        type: "ul",
        items: [
          "<strong>Právo na&nbsp;přístup</strong> &mdash; zjistit, jaké údaje o&nbsp;vás zpracováváme.",
          "<strong>Právo na&nbsp;opravu</strong> &mdash; nechat opravit nepřesné údaje.",
          "<strong>Právo na&nbsp;výmaz</strong> („právo být zapomenut\") &mdash; nechat údaje smazat, pokud nepřevažuje právní povinnost je&nbsp;uchovávat.",
          "<strong>Právo na&nbsp;omezení zpracování</strong> &mdash; požadovat dočasné pozastavení zpracování.",
          "<strong>Právo na&nbsp;přenositelnost</strong> &mdash; získat své údaje v&nbsp;strukturovaném strojově čitelném formátu.",
          "<strong>Právo vznést námitku</strong> &mdash; proti zpracování na&nbsp;základě oprávněného zájmu.",
          "<strong>Právo odvolat souhlas</strong> &mdash; jedním kliknutím v&nbsp;každém e-mailu (odkaz „Odhlásit&nbsp;se z&nbsp;odběru\").",
          '<strong>Právo podat stížnost</strong> u&nbsp;<a href="https://www.uoou.cz/" target="_blank" rel="noopener">Úřadu pro&nbsp;ochranu osobních údajů</a>.',
        ],
      },
      {
        type: "p",
        html: 'Pro&nbsp;uplatnění práv stačí napsat na&nbsp;<a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a>. Reagujeme nejpozději do&nbsp;30&nbsp;dní.',
      },
    ],
  },
  {
    num: "07",
    titleHtml: "Cookies",
    blocks: [
      {
        type: "p",
        html: "Web aiseo-optimalizace.cz používá <strong>pouze technické a&nbsp;analytické&nbsp;cookies&nbsp;první&nbsp;strany</strong> (vlastní doména). Neukládáme reklamní cookies třetích stran, neprodáváme data inzertním sítím.",
      },
      {
        type: "ul",
        items: [
          "<strong>Technické cookies</strong> &mdash; nezbytné pro&nbsp;funkci webu (např.&nbsp;preference jazyka). Nevyžadují souhlas.",
          '<strong>Analytické cookies (GA4)</strong> &mdash; anonymizované měření návštěvnosti. Lze odmítnout v&nbsp;nastavení prohlížeče nebo přes <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out</a>.',
        ],
      },
    ],
  },
  {
    num: "08",
    titleHtml: "Změny těchto zásad",
    blocks: [
      {
        type: "p",
        html: "Tyto zásady můžeme čas&nbsp;od&nbsp;času aktualizovat &mdash; např.&nbsp;při&nbsp;přidání nového nástroje nebo služby. Aktuální verzi vždy najdete na&nbsp;této&nbsp;URL. Datum poslední aktualizace je&nbsp;uvedeno v&nbsp;úvodu této stránky.",
      },
      {
        type: "p",
        html: "O&nbsp;podstatných změnách, které se&nbsp;dotýkají vašich práv, vás&nbsp;informujeme e-mailem (pokud máme váš souhlas pro&nbsp;e-mailovou komunikaci).",
      },
    ],
  },
  {
    num: "09",
    titleHtml: "Kontakt",
    blocks: [
      {
        type: "p",
        html: "Cokoliv ohledně osobních údajů nebo&nbsp;těchto zásad &mdash; napište&nbsp;nám:",
      },
      {
        type: "contactList",
        items: [
          'E-mail: <a href="mailto:aiseo-optimalizace@sniperdesign.cz">aiseo-optimalizace@sniperdesign.cz</a>',
          'Telefon: <a href="tel:+420775181634">+420&nbsp;775&nbsp;181&nbsp;634</a> (Po&minus;Pá&nbsp;10&minus;17)',
          'Web správce: <a href="https://www.sniperdesign.cz/" target="_blank" rel="noopener">sniperdesign.cz</a>',
        ],
      },
    ],
  },
];
