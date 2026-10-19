# Rešerše: cache a omezení frekvence pro AI roboty

**Datum:** 2026-10-19
**Řádek plánu:** 157
**Pracovní slug:** `cachovani-pro-ai-roboty`
**Kategorie:** `tutorial`

## Výběr a kolizní kontrola

Jde o první volný řádek pro nový článek. Sloupec C neobsahuje pokyn k aktualizaci.

Prohledány byly názvy, slugs, celé články, sekce a pilíř pro výrazy `cache`,
`cachování`, `mezipaměť`, `rate limit`, `omezení frekvence`, `CDN` a `AI robot`.
Celé byly přečteny nejbližší články:

- `ai-roboti-zatez-webu.mdx` — měří zátěž a výslovně říká, že cache a omezení
  frekvence jsou samostatné téma;
- `cloudflare-ai-bot-blocking.mdx` — řeší povolit/blokovat, ne levnější doručení;
- `ai-crawler-robots-txt.mdx` — řídí přístup, ale neřeší cache jako střední cestu;
- `overovani-ai-robotu.mdx` — ověřuje identitu, což je podmínka pro cílené omezení.

Nový článek proto nekopíruje existující rozhodovací rámec. Odpovídá na jinou
otázku: jak ponechat obsah dostupný, ale snížit práci původního serveru.

## Hlavní závěr rešerše

Nejméně riskantní pořadí je:

1. odstranit z procházení zbytečné adresy, které nechceme poskytovat vůbec;
2. zlevnit tvorbu stránky na původním serveru pomocí plnostránkové cache nebo
   statického výstupu;
3. dát před server CDN a cachovat i veřejné HTML tam, kde neobsahuje údaje
   konkrétního uživatele;
4. ověřit, že opakovaný požadavek končí v cache;
5. až podle logů použít omezení frekvence; u známých robotů nejdřív ověřit identitu.

Cache počet požadavků robota sama nesníží. Snižuje počet požadavků, které musí
obsloužit aplikace a databáze na původním serveru. Omezení frekvence naopak část
požadavků odmítne. Jsou to dvě různé vrstvy a článek je nesmí směšovat.

## Co lze tvrdit z primárních zdrojů

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Cloudflare standardně necachuje HTML ani JSON | provoz jde přes proxy Cloudflare; nebylo přidáno vlastní pravidlo | hlavičky původního serveru a Cache Rules se nesmí vzájemně rušit | běžné statické přípony a `robots.txt` Cloudflare cachuje standardně | [Default Cache Behavior](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/) |
| Veřejné HTML lze v Cloudflare označit jako způsobilé pro cache | stránka je stejná pro anonymní návštěvníky; pravidlo vyloučí dynamické cesty a cookies | cache key musí odpovídat variantám, které server skutečně vrací | `Cache Everything` na přihlášení, účet, košík či pokladnu může zobrazit cizí nebo neplatný stav | [Cache Everything](https://developers.cloudflare.com/cache/how-to/cache-rules/examples/cache-everything/), [Dynamic content and login issues](https://developers.cloudflare.com/cache/troubleshooting/dynamic-content-and-login-issues/) |
| `Cache-Control` řídí uložení, dobu čerstvosti a obnovu | odpověď je způsobilá pro cache; hodnoty TTL jsou celá čísla | CDN, server a aplikace nesmí posílat protichůdné hlavičky | `private` a `no-store` sdílenou cache zakazují; `Set-Cookie` může vést k obejití cache | [Origin Cache Control](https://developers.cloudflare.com/cache/concepts/cache-control/) |
| `stale-while-revalidate` dovolí během obnovy poslat starší kopii | direktiva je v `Cache-Control`; obsah snese krátké zpoždění | neplést s `s-maxage`, které u Cloudflare toto chování vypíná | nehodí se pro údaje, které musí být okamžitě aktuální | [Revalidation](https://developers.cloudflare.com/cache/concepts/revalidation/) |
| Opakovaný požadavek lze ověřit přes `CF-Cache-Status` | URL se vyžádá dvakrát ze stejného místa a cache nebyla právě promazána | `HIT` má doprovázet `Age`; první vyžádání může být `MISS` | `DYNAMIC` = nezpůsobilé, `BYPASS` = zabránila odpověď nebo konfigurace | [Investigate uncached responses](https://developers.cloudflare.com/cache/troubleshooting/investigating-uncached-responses/), [Cache responses](https://developers.cloudflare.com/cache/concepts/cache-responses/) |
| Cloudflare nabízí pravidla pro omezení frekvence i na Free plánu | na Free je jedno pravidlo, perioda 10 s a omezená pole `Path` a `Verified Bot` | pravidlo nesmí omylem zasáhnout vyhledávače, které chceme pustit | cílení podle User-Agentu je v tabulce dostupnosti až od Business; počitadla nejsou absolutně přesná | [Rate limiting rules](https://developers.cloudflare.com/waf/rate-limiting-rules/) |
| Google při přetížení reaguje na 429/503 a `Retry-After` | jde o krátkodobý nouzový zásah, zhruba hodiny až 1–2 dny | stav musí být odstraněn, jakmile zátěž opadne | více dnů může vést k vyřazení URL z indexu; dokumentace platí pro Google, ne automaticky pro každý AI crawler | [Reduce Google Crawl Rate](https://developers.google.com/crawling/docs/crawlers-fetchers/reduce-crawl-rate) |
| `crawl-delay` není spolehlivý obecný ovladač | robot by jej musel sám podporovat | — | Google jej výslovně nepodporuje; robots.txt standardizuje hlavně `user-agent`, `allow` a `disallow` | [Google robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec), [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309) |
| OpenAI může jeden crawl použít pro vyhledávání i trénink, pokud web povolí oba roboty | povolené jsou GPTBot i OAI-SearchBot | pravidla pro oba účely se nastavují samostatně | dokumentace neříká, že OAI-SearchBot respektuje konkrétní limit či `Retry-After` | [Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots) |

## Co jde bez CDN a co až s CDN

| Vrstva | Co řeší | Co musí mít majitel webu |
|---|---|---|
| Statický web / plnostránková cache hostingu | aplikace a databáze stránku negenerují při každém požadavku | nastavení hostingu, platformy nebo cache doplňku; kontrolu v logu a hlavičkách |
| HTTP cache a podmíněné požadavky | klient nebo mezilehlá cache může znovu použít kopii či ověřit změnu bez celého těla | správné `Cache-Control`, `ETag` nebo `Last-Modified`; nelze předpokládat, že je každý robot použije |
| CDN cache veřejného HTML | opakované požadavky mohou skončit na okraji sítě a nedojít k původnímu serveru | doménu přes CDN, pravidlo pro HTML, správné výjimky pro dynamické cesty |
| Omezení frekvence na CDN | po překročení prahu část provozu zastaví před původním serverem | logy, rozumný práh, ověření identity a kontrolu dopadu |
| Omezení na původním serveru | funguje i bez CDN | přístup ke konfiguraci serveru; na běžném sdíleném hostingu ho často musí řešit podpora |

Článek nebude dávat univerzální počet požadavků za minutu. Bez běžného provozu
konkrétního webu by šlo o smyšlené číslo. Cloudflare navíc upozorňuje, že jeho
omezení není přesný ventil a může několik požadavků propustit před zásahem.

## Keyword research

### Marketing Miner

- 10 cílených výrazů, cena 30 kreditů za hledanost.
- Data měl jen `robots txt crawl delay`: 10 hledání měsíčně, meziroční změna 0 %.
- Devět odborných výrazů nemělo data. To neznamená nulový zájem.
- Suggestions: tři seedy, čtyři typy, 120 kreditů. `ai roboti` vrátilo 212
  převážně nerelevantních dotazů na fyzické roboty; `crawler cache` jediný návrh
  `google crawler cache` (10); `omezení robotů` nic.
- Celková cena aktuální cílené rešerše: 150 kreditů.

### Google Trends

- 1. pokus: HTTP 429 hned u prvního výrazu.
- 2. pokus: dokončen pro všech deset výrazů; všechny měly index 0 a žádné rising
  queries ani regionální data.
- Závěr: Trends nejsou pro tento úzký český dotaz použitelné. V článku se netvrdí
  sezónnost ani vývoj poptávky.

### Google Suggest a původ FAQ

Suggest vrátil návrhy jen pro `robots txt crawl delay`. FAQ proto stojí na více
vrstvách:

| Otázka | Původ |
|---|---|
| Mám do robots.txt přidat `crawl-delay`? | Google Suggest + dokumentace Googlu |
| Pomůže cache, když robot žádá tutéž stránku znovu? | dokumentace Cloudflare + praktická diagnostika |
| Jak poznám, že HTML opravdu obsloužila CDN? | dokumentace Cloudflare (`CF-Cache-Status`) |
| Kdy má smysl vracet 429? | dokumentace Googlu + HTTP praxe |
| Co lze udělat na běžném sdíleném hostingu? | praktický problém vyplývající ze zadání |
| Smím cachovat košík, účet a přihlášené stránky? | bezpečnostní výjimka v dokumentaci Cloudflare |

## Trend research a nový řádek plánu

Široká rešerše zachytila společný pilot Cloudflare a OpenAI z 15. 10. 2026.
Podle společného článku proběhl na přibližně 1 % sítě Cloudflare, pomohl objevit
a zaindexovat stovky milionů nových stránek a pracoval se signály o neexistujících,
přesměrovaných, duplicitních a změněných adresách. Signál neuděluje oprávnění
k přístupu a zdroj nepopisuje veřejné zapnutí pro běžného zákazníka. Po kolizní
kontrole byl přidán řádek `cloudflare openai discovery pilot` jako budoucí analýza.

Zdroj: [Cloudflare and OpenAI: making AI discovery better for everyone](https://blog.cloudflare.com/cloudflare-openai-discovery-agentic-web/).

## Obsahový úhel

Článek má být praktický pro majitele běžného webu, ne návod pro správce serveru.
Nosný rámec: **zlevnit → ověřit → teprve omezit**. Musí oddělit:

- méně práce aplikace díky plnostránkové cache;
- méně požadavků na původní server díky CDN;
- méně přijatých požadavků díky omezení frekvence;
- méně zbytečných adres díky robots.txt a opravě nekonečných URL prostorů.

Žádný z těchto kroků nezaručuje citaci ani návštěvu z AI. Omezení má vždy
potenciální cenu v pomalejším objevení a obnově obsahu.
