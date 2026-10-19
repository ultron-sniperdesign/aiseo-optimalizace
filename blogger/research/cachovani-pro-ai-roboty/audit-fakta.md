# C2 faktický audit: cachování pro AI roboty

**Auditovaný soubor:** `src/content/articles/cachovani-pro-ai-roboty.mdx`
**Datum ověření:** 2026-10-19
**Kontext:** marketingový a vzdělávací článek o AI éře vyhledávání
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek má správnou hlavní logiku „zlevnit → ověřit → teprve omezit“ a většina konkrétních údajů o Cloudflare odpovídá aktuální dokumentaci. Před publikací ale potřebuje doplnit tři podmínky, které mění praktický výsledek nastavení, a zpřesnit diagnostiku stavu `BYPASS`.

## Nálezy

### [BLOCKER] `stale-while-revalidate` je popsáno bez podmínek, které ho u Cloudflare vypínají

- **Citovaná pasáž:** „Hlavička `Cache-Control` umí vedle doby platnosti určit i krátké okno `stale-while-revalidate`: CDN po vypršení pošle starší kopii a novou si obnoví na pozadí.“
- **Problém:** V kontextu předchozích odstavců jde o praktický návod pro Cloudflare, ale věta zní bezpodmínečně. Cloudflare starší kopii při obnově neposílá, pokud je spolu se `stale-while-revalidate` přítomno `s-maxage`, `must-revalidate`, `proxy-revalidate` nebo `no-cache` a je zapnuté Origin Cache Control. `s-maxage` je přitom běžná direktiva právě pro sdílené cache. Funkci může vypnout i nastavení „Serve stale content while revalidating“ v Cache Rules. Tuto výjimku už rešerše zná, článek ji však vynechal.
- **Důkaz:** Cloudflare uvádí, že uvedené direktivy zabrání obsloužení staré kopie a odpověď bude `EXPIRED`, nikoli `UPDATING`; pro rozdílné TTL pro prohlížeč a edge doporučuje místo `s-maxage` použít `max-age` a Edge Cache TTL. [Cloudflare: Revalidation, „Directives that disable stale-while-revalidate“](https://developers.cloudflare.com/cache/concepts/revalidation/). Stejnou výjimku dokumentuje i přehled direktiv: [Cloudflare: Origin Cache Control](https://developers.cloudflare.com/cache/concepts/cache-control/).
- **Doporučená oprava:** Dopsat například: „U Cloudflare tato obnova funguje jen tehdy, když ji nezakazuje jiné nastavení nebo direktiva. Nekombinujte ji se `s-maxage`, `must-revalidate`, `proxy-revalidate` ani `no-cache`; pro odlišnou dobu platnosti na CDN použijte Edge Cache TTL.“ Pokud má text zůstat obecný pro různé CDN, přidat „pokud ji konkrétní CDN podporuje a konfigurace ji nepřebíjí“.
- **Dopad:** **zásadní** — čtenář může nasadit doporučenou hlavičku a přesto pokaždé po vypršení zasáhnout původní server.

### [BLOCKER] Limity Cloudflare Free jsou sice opsané správně, ale chybí jejich rozhodující důsledek: konkrétní AI robot na Free cílit nejde

- **Citovaná pasáž:** „Dokumentace z 25. srpna 2026 uvádí na Free plánu jedno pravidlo, desetisekundové okno a jen pole cesta a ověřený robot. Cílení podle `User-Agent` je v tabulce dostupnosti až od Business.“
- **Problém:** Údaje v tabulce jsou správné, ale bez vysvětlení vytvářejí dojem, že pole „ověřený robot“ lze použít pro jednoho konkrétního AI robota. Jde o booleovský údaj — říká pouze, zda požadavek pochází od známého dobrého robota. Nerozlišuje GPTBot, OAI-SearchBot, Googlebot ani jiného provozovatele. Na Free se navíc požadavky počítají podle IP, nikoli souhrnně za robota. Pravidlo na „Verified Bot“ tedy může zasáhnout všechny ověřené roboty a přitom nemusí omezit celkovou frekvenci jednoho robota rozloženou mezi více IP. To je v přímém napětí s předchozí radou cílit až po ověření identity konkrétního AI robota.
- **Důkaz:** Aktuální tabulka Cloudflare uvádí pro Free pouze `Path` a `Verified Bot`, počítání jen podle `IP`, jedno pravidlo a desetisekundové období; zároveň varuje, že omezení ověřených robotů může poškodit SEO. `User Agent` a `Source IP` jsou v podmínce pravidla dostupné až od Business. [Cloudflare: Rate limiting rules, tabulka Availability a Important remarks](https://developers.cloudflare.com/waf/rate-limiting-rules/). Cloudflare definuje `cf.bot_management.verified_bot` jako `Boolean`, který pouze označuje známého dobrého robota či vyhledávací robot. [Cloudflare Ruleset Engine: cf.bot_management.verified_bot](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.verified_bot/).
- **Doporučená oprava:** Za stávající větu vložit například: „Na Free plánu tím nelze vybrat jednoho konkrétního AI robota: `Verified Bot` je jen ano/ne a počitadlo běží po IP. Pravidlo pro všechny ověřené roboty proto bez analýzy nezapínejte; zasáhlo by i vyhledávače, které chcete ponechat.“ U návodu pro konkrétního robota uvést, že cílení podle `User-Agent` nebo zdrojové IP vyžaduje alespoň Business, případně jiné řešení mimo tuto funkci.
- **Dopad:** **zásadní** — podle současného textu může uživatel omezit Googlebot a další legitimní roboty místo jediného AI robota.

### [BLOCKER] FAQ rozšiřuje doporučení Googlu pro HTTP 429 mimo podmínky jeho dokumentace

- **Citovaná pasáž:** „Při skutečném přetížení nebo po překročení změřeného limitu, ne jako trvalé nastavení pro celý web. Přidejte Retry-After a sledujte dopad. Google doporučuje 429 či 503 jen krátkodobě; při několika dnech může URL z výsledků vyřadit.“
- **Problém:** Google nedoporučuje 429 jako běžný trvalejší ventil po překročení provozního limitu. Jeho dokumentace popisuje nouzové snížení procházení na několik hodin až 1–2 dny. Ke snížení rychlosti dochází, když Google narazí na významný počet URL s `500`, `503` nebo `429`, a zpomalení se týká celého hostnamu, včetně URL vracejících obsah. Dopad není omezen na možnost vyřazení jedné URL: zpomalí se objevování nových stránek i aktualizace cen, dostupnosti a odstraněných URL. V těle článku je „nouzové přetížení“ uvedeno, ale FAQ ho rozšiřuje na obecné překročení změřeného limitu a neuvádí hostname-wide účinek.
- **Důkaz:** Google vymezuje tento postup jako „Urgently reduce crawler traffic (for emergencies)“, doporučuje jej na „a couple of hours, or 1–2 days“ a uvádí, že významný počet těchto stavů sníží procházení napříč celým hostname. Zároveň výslovně popisuje pomalejší objevování a obnovování obsahu a možnost vyřazení URL po více dnech. `Retry-After` lze přidat k `503` nebo `429`. [Google: Reduce the Google crawl rate](https://developers.google.com/crawling/docs/crawlers-fetchers/reduce-crawl-rate).
- **Doporučená oprava:** V FAQ oddělit dvě věci. Pro Google napsat: „429 nebo 503 použijte při nouzi na několik hodin, nejvýše 1–2 dny; významný počet těchto odpovědí zpomalí procházení celého hostnamu.“ Obecnou radu „po překročení změřeného limitu“ buď odstranit, nebo výslovně označit jako vlastní nastavení ochrany serveru, nikoli doporučení Googlu. U AI robotů ponechat jen provider-specifické tvrzení s jejich dokumentací; článek správně přiznává, že jednotné chování doložené není.
- **Dopad:** **zásadní** — chybějící podmínka může zpomalit indexaci a obnovu celého webu, i když uživatel chtěl omezit jen úzký problémový provoz.

### [WARNING] Význam `BYPASS` je smíchaný s pravidlem „Bypass cache“

- **Citovaná pasáž:** „`DYNAMIC` znamená, že URL nebyla pro cache způsobilá. `BYPASS` říká, že uložení zastavila odpověď původního serveru nebo jiné pravidlo.“ Stejná formulace je ve FAQ: „BYPASS že uložení zastavila odpověď nebo pravidlo.“
- **Problém:** U současné diagnostiky Cloudflare dává Cache Rule s nastavením `Bypass cache` typicky stav `DYNAMIC`, protože požadavek je už při přijetí nezpůsobilý pro cache. `BYPASS` naopak znamená, že požadavek byl zprvu způsobilý, ale až odpověď původního serveru nebo konfigurace při zpracování odpovědi zabránila uložení. Slovo „pravidlo“ bez rozlišení vede při hledání chyby na nesprávné místo.
- **Důkaz:** Cloudflare popisuje `DYNAMIC` jako rozhodnutí o nezpůsobilosti při požadavku a uvádí mezi příčinami Cache Rule s `Bypass cache`. `BYPASS` znamená původně způsobilý požadavek, který se neuložil kvůli odpovědi původu — například `no-store`, `private`, `Set-Cookie`, `Vary: *` či autorizaci. [Cloudflare: Cache responses](https://developers.cloudflare.com/cache/concepts/cache-responses/). Totéž upřesňuje konfigurace pravidel: [Cloudflare: Cache Rules settings](https://developers.cloudflare.com/cache/how-to/cache-rules/settings/).
- **Doporučená oprava:** Nahradit obě věty formulací: „`DYNAMIC` znamená, že Cloudflare URL už při požadavku nepovažoval za způsobilou pro cache; může to způsobit i pravidlo `Bypass cache`. `BYPASS` znamená, že URL způsobilá byla, ale uložení následně zakázala odpověď původního serveru nebo konfigurace při zpracování odpovědi.“
- **Dopad:** **drobný** — hlavní strategie článku zůstává správná, ale současná diagnostika může prodloužit hledání příčiny.

## Ověřeno bez nálezu

- Cloudflare k 14. 9. 2026 skutečně uvádí, že HTML a JSON standardně necachuje; `robots.txt` naopak mezi výchozími typy cache má. [Default cache behavior](https://developers.cloudflare.com/cache/concepts/default-cache-behavior/)
- `curl -I` je pro tento test u Cloudflare použitelný: způsobilý `HEAD` požadavek se při studené cache interně převede na `GET`, uloží se celá odpověď a klient dostane jen hlavičky. [Head Requests and Set-Cookie Headers](https://developers.cloudflare.com/cache/concepts/cache-behavior/)
- `CF-Cache-Status: HIT`, `MISS`, `DYNAMIC` a hlavička `Age` jsou v článku jinak popsány správně. `Age` je důkazem Cloudflare cache pouze ve spojení s odpovídajícím stavem; původní server může vlastní `Age` poslat i u necachované odpovědi. [Cloudflare cache responses](https://developers.cloudflare.com/cache/concepts/cache-responses/)
- Samostatné Cloudflare Cache Analytics je dostupné od plánu Pro, na Free nikoli. [Cache Analytics](https://developers.cloudflare.com/cache/performance-review/cache-analytics/)
- Údaj o Cloudflare Free — jedno pravidlo, desetisekundové období — a dostupnost pole `User Agent` až od Business odpovídají dokumentaci z 25. 8. 2026.
- Google `crawl-delay` nepodporuje; podporovaná pole jsou `user-agent`, `allow`, `disallow` a `sitemap`. [Google robots.txt specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)
- `crawl-delay` není součástí standardu REP v RFC 9309. [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309)
- Cena Packu 1 490 Kč včetně DPH, sedm typů stránek a jeden master PDF odpovídají kanonickému datovému modulu `src/content/pages/pack.ts`.
- Všechny tři interní odkazy článku mají v repozitáři cílovou stránku a všechny externí odkazy ve zdrojovém bloku byly při auditu dostupné.
