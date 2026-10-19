# C5 finální nezávislý audit: cachování pro AI roboty

**Auditovaný soubor:** `src/content/articles/cachovani-pro-ai-roboty.mdx`
**Datum:** 19. 10. 2026
**Postup:** nejprve nezávislý audit aktuálního článku bez čtení dřívějších auditů; teprve potom kontrola `research.md`, obou faktických auditů, jazykového auditu a `vyporadani.md`.

## Shrnutí

Článek je věcně správný, vnitřně soudržný a prakticky bezpečný. Důsledně rozlišuje tři různé účinky: plnostránková cache šetří práci aplikace, CDN může odstínit původní server a omezení frekvence část požadavků odmítá. Riziková nastavení mají potřebné podmínky: dynamické a uživatelské stránky zůstávají mimo společnou cache, `stale-while-revalidate` není podáno jako bezpodmínečné, omezení robotů se nemá cílit jen podle podvrhnutelného `User-Agent` a odpovědi 429/503 jsou u Googlu správně odděleny jako krátkodobý nouzový postup.

Nový zásadní nález jsem nenašel. Původní faktické blokátory i jazykové nálezy jsou v aktuálním souboru skutečně vypořádané a nevznikla z nich nová regrese.

## Nezávislé věcné ověření

### Cache a Cloudflare

- Tvrzení, že Cloudflare standardně neukládá HTML ani JSON, odpovídá [Default cache behavior](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/). Dokumentace výslovně uvádí, že tyto typy ve výchozím nastavení necachuje a že další obsah se zpřístupňuje cache pomocí Cache Rules.
- Varování před plošným `Cache Everything` je správné. [Příklad Cloudflare](https://developers.cloudflare.com/cache/how-to/cache-rules/examples/cache-everything/) upozorňuje, že dynamické HTML může návštěvníkovi vrátit údaje, které pro něj nebyly určeny, a doporučuje vyloučit dynamické cesty nebo požadavky se soubory cookie.
- Popis `stale-while-revalidate` a jeho výjimek na řádcích 103–105 je správný. [Revalidation](https://developers.cloudflare.com/cache/concepts/revalidation/) uvádí, že při aktivním Origin Cache Control starou kopii zakazují `must-revalidate`, `proxy-revalidate`, `s-maxage` a `no-cache`; pro jinou dobu platnosti na okraji sítě než v prohlížeči doporučuje Edge Cache TTL. Totéž potvrzuje [Origin Cache Control](https://developers.cloudflare.com/cache/concepts/cache-control/).
- Diagnostika `CF-Cache-Status` na řádcích 109–126 je přesná. [Cloudflare cache responses](https://developers.cloudflare.com/cache/concepts/cache-responses/) rozlišuje `DYNAMIC` jako nezpůsobilost zjištěnou už při požadavku a `BYPASS` jako původně způsobilý požadavek, jehož odpověď se nakonec neuložila. `Age` je správně vykládáno spolu se stavem cache.
- Dvojí `curl -sI` je pro Cloudflare použitelný test. Cloudflare u způsobilého `HEAD` požadavku při studené cache interně odešle na původní server `GET`, uloží celou odpověď a klientovi vrátí jen hlavičky; popisuje to [Head Requests and Set-Cookie Headers](https://developers.cloudflare.com/cache/concepts/cache-behavior/).
- Tvrzení, že samostatná funkce Cache Analytics není v tarifu Free, je správné; [tabulka dostupnosti](https://developers.cloudflare.com/cache/performance-review/cache-analytics/) ji uvádí od tarifu Pro.

### Omezení frekvence a identita robotů

- Údaje na řádcích 134–136 odpovídají [Cloudflare Rate limiting rules](https://developers.cloudflare.com/waf/rate-limiting-rules/): tarif Free má jedno pravidlo, desetisekundové období, podmínky Path a Verified Bot a počítání podle IP. User Agent a Source IP jsou v podmínce pravidla až od tarifu Business. Dokumentace také varuje, že počítání není absolutně přesné a že omezení ověřených robotů může zasáhnout SEO.
- Článek správně vysvětluje, že Verified Bot je pouze booleovský příznak, a proto sám nerozliší GPTBot, OAI-SearchBot nebo Googlebot. Význam pole potvrzuje [definice Verified Bot](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.verified_bot/).
- Rada nevěřit samotné hodnotě `User-Agent` je bezpečná. Odkazovaný vlastní článek má v repozitáři existující cíl a aktuální [dokumentace OpenAI](https://developers.openai.com/api/docs/bots) zveřejňuje samostatné IP rozsahy pro své roboty.

### Google, HTTP 429/503 a robots.txt

- Pasáž na řádcích 138–142 i FAQ správně oddělují vlastní ochranné pravidlo od nouzového doporučení Googlu. [Google: Reduce the Google crawl rate](https://developers.google.com/crawling/docs/crawlers-fetchers/reduce-crawl-rate) doporučuje chybové odpovědi jen na několik hodin až jeden nebo dva dny, popisuje zpomalení procházení celého hostnamu a dovoluje u 429 či 503 přidat `Retry-After`. Článek správně nepřenáší toto chování automaticky na AI roboty.
- `crawl-delay` je popsán přesně. [Google robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) jej výslovně nepodporuje a [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html) jej nezařazuje mezi standardní pravidla Robots Exclusion Protocolu.

## Logika, použitelnost a bezpečnost

- Pořadí „omezit zbytečné adresy → zlevnit tvorbu HTML → přidat CDN → ověřit výsledek → teprve potom omezovat frekvenci“ je konzistentní v celém článku.
- Článek nedává smyšlený univerzální limit požadavků. Práh váže na logy konkrétního webu a doporučuje malé, vratné nasazení.
- Bezpečnostní výjimky jsou uvedeny v answer bloku, hlavním textu, checklistu, přehledu chyb i FAQ. Uživatel tedy těžko přehlédne, že účet, přihlášení, košík, pokladna, administrace a osobní odpovědi nesmějí skončit ve společné veřejné kopii.
- Kontrolní postup není založen jen na rychlosti odpovědi: vyžaduje `HIT`, `Age`, kontrolu logu původního serveru i ověření obnovy po změně obsahu.
- Rady nepředstírají stejné chování všech AI robotů. Kde chybí dokumentace konkrétního provozovatele, text tuto nejistotu přiznává.

## Čeština a redakční kvalita

Text působí přirozeně a odborné názvy používá jen tam, kde nesou přesný význam. Neobsahuje původní kalky a nejasné vazby typu „zásah CDN“, „přenos platí server“, „požádejte o URL“ nebo „přesný ventil“. Mechanická kontrola proti `blogger/JAZYK_SLOVNIK.md` skončila výsledkem **0 nálezů z 2102 slov**.

Zkratka CDN i význam cache jsou vysvětleny při prvním výskytu. Technické názvy `CF-Cache-Status`, `stale-while-revalidate`, `Retry-After`, `Cache Rule`, `User-Agent` a stavové hodnoty jsou ponechány oprávněně. Česká typografie, zápis ceny, pomlčky i uvozovky jsou v pořádku.

## SEO, odpověď, FAQ a struktura projektu

- `title` má 58 znaků a `seoTitle` 52 znaků; SEO titul splňuje projektový limit. H1 pojmenovává čtenářský problém, SEO titul přidává řešení bez slibu úplného odstranění nákladů.
- `description` má 124 znaků a srozumitelně shrnuje obsah i pořadí opatření.
- `answer` má 43 slov, je soběstačný, obsahuje hlavní rozdíl a bezpečnostní výjimku a splňuje projektové rozmezí 40–60 slov.
- FAQ má šest otázek, pokrývá účinek cache, `crawl-delay`, ověření Cloudflare, 429, sdílený hosting i riziko uživatelských stránek. Odpovědi se shodují s tělem a nevytvářejí širší tvrzení.
- Všech osm H2 obsahuje `<span class="hl">` i `<strong>` podle povinného formátu projektu.
- Kategorie, dva registrované tagy, datumy, klíčová slova a `variant: "rich"` odpovídají schématu. Všechny čtyři interní odkazy mají existující cíle a soubor OG obrázku existuje.
- CTA vede na konkrétní produkt. Název, cena 1 490 Kč včetně DPH, sedm typů stránek a master PDF odpovídají kanonickému `src/content/pages/pack.ts`. Přechod od levnějšího doručení ke struktuře stránky dává tematicky smysl a CTA neslibuje výsledek, který článek nedokládá.

## Kontrola dřívějších auditů

| Dřívější nález | Stav v aktuálním článku |
|---|---|
| Podmínky `stale-while-revalidate` | Vypořádáno na řádcích 103–105; uvedeny všechny čtyři konfliktní direktivy, nastavení Cache Rules i Edge Cache TTL. |
| Free tarif neumí vybrat konkrétního AI robota přes Verified Bot | Vypořádáno na řádcích 134–136; vysvětlen booleovský příznak, počítání po IP, riziko zásahu dalších robotů a hranice Business. |
| FAQ míchalo vlastní limit s nouzovým doporučením Googlu | Vypořádáno v FAQ na řádku 31 a v těle na řádcích 138–142; oba režimy jsou oddělené a je uveden dopad na celý hostname. |
| `DYNAMIC` a `BYPASS` byly smíchané | Vypořádáno v FAQ na řádku 29 a v těle na řádku 116. |
| 34 jazykových nálezů | Všechny citované původní formulace byly v aktuálním souboru nahrazeny nebo odstraněny; namátková i mechanická kontrola neodhalila návrat vady. |
| Záznam ve `vyporadani.md` | Odpovídá skutečnému stavu článku; nenašel jsem položku označenou jako opravenou, jejíž problém by v textu zůstal. |

## Drobnosti, které nebrání publikaci

1. Závěrečný seznam zdrojů neuvádí stránku [Head Requests and Set-Cookie Headers](https://developers.cloudflare.com/cache/concepts/cache-behavior/), přestože právě ona dokládá, proč je test přes `curl -I` u Cloudflare reprezentativní. Doplnění odkazu by zlepšilo dohledatelnost, samotný postup je správný.
2. U tvrzení o dostupnosti Cache Analytics na řádku 126 by šlo do seznamu zdrojů doplnit [Cache Analytics](https://developers.cloudflare.com/cache/performance-review/cache-analytics/). Tvrzení odpovídá aktuální dokumentaci a bez doplnění není zavádějící.

## Verdikt

**PUBLIKOVAT**

Článek nemá nevyřešenou věcnou, bezpečnostní, jazykovou ani strukturální vadu, která by vyžadovala zásah před publikací. Dvě uvedené drobnosti jsou jen možností zpřesnit bibliografii.
