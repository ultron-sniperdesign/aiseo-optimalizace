# C5b cílené ověření faktických oprav

**Ověřený soubor:** `src/content/articles/cachovani-pro-ai-roboty.mdx`
**Datum ověření:** 2026-10-19
**Rozsah:** výhradně tři původní zásadní nálezy a související upozornění z `audit-fakta.md`

## Celkový verdikt: VYŘEŠENO

Všechny čtyři kontrolované body jsou v aktuálním článku opravené. Není potřeba žádná další věcná oprava v ověřovaném rozsahu.

## 1. Podmínky `stale-while-revalidate`

**Verdikt: VYŘEŠENO**

**Aktuální pasáž:**

> „Pokud konkrétní CDN tuto funkci podporuje a konfigurace ji nepřebíjí, direktiva `stale-while-revalidate` dovolí po vypršení krátce poslat starší kopii a novou obnovit na pozadí.“
>
> „U Cloudflare obnovu na pozadí vypnou direktivy `s-maxage`, `must-revalidate`, `proxy-revalidate` a `no-cache`, pokud je aktivní Origin Cache Control. Stejný účinek může mít nastavení ‚Serve stale content while revalidating‘ v Cache Rules. Potřebujete-li jinou dobu platnosti na CDN než v prohlížeči, použijte místo `s-maxage` nastavení Edge Cache TTL a výsledek ověřte v hlavičkách.“

Text nyní obsahuje všechny požadované podmínky: podporu konkrétní CDN, možnost přepsání konfigurací, čtyři direktivy vypínající obsloužení starší kopie při aktivním Origin Cache Control, zásah Cache Rules a doporučenou náhradu `s-maxage` pomocí Edge Cache TTL. Odpovídá dokumentaci [Cloudflare Revalidation](https://developers.cloudflare.com/cache/concepts/revalidation/) a [Origin Cache Control](https://developers.cloudflare.com/cache/concepts/cache-control/).

**Další oprava:** není potřeba.

## 2. Cloudflare Free: `Verified Bot`, počítání po IP a cílení konkrétního robota

**Verdikt: VYŘEŠENO**

**Aktuální pasáž:**

> „Podle dokumentace z 25. srpna 2026 nabízí tarif Free jedno pravidlo s desetisekundovým oknem; podmínku lze založit jen na cestě URL nebo příznaku ověřeného robota. Tento příznak je pouze hodnota ano/ne, takže nerozliší GPTBot, OAI-SearchBot, Googlebot ani jiného konkrétního robota. Požadavky se navíc počítají po jednotlivých IP adresách. Pravidlo pro všechny ověřené roboty proto bez analýzy nezapínejte: zasáhlo by i vyhledávače, které chcete ponechat.“
>
> „Cílení podle `User-Agent` nebo zdrojové IP uvádí tabulka dostupnosti až u tarifu Business.“

Článek nyní výslovně vysvětluje, že `Verified Bot` je booleovský příznak, nikoli identita provozovatele, že Free počítá požadavky po IP a že na Free nelze tímto pravidlem vybrat jediného konkrétního AI robota. Současně správně upozorňuje na zásah dalších ověřených robotů a uvádí hranici tarifu Business pro `User-Agent` a zdrojovou IP. Odpovídá tabulce [Cloudflare Rate limiting rules](https://developers.cloudflare.com/waf/rate-limiting-rules/) a definici [Verified Bot](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/cf.bot_management.verified_bot/).

**Další oprava:** není potřeba.

## 3. Vlastní pravidlo HTTP 429 versus nouzové doporučení Googlu

**Verdikt: VYŘEŠENO**

**Aktuální pasáž v těle:**

> „Google doporučuje při nouzovém přetížení vracet odpovědi `429` nebo `503` s hlavičkou `Retry-After` jen několik hodin, nejvýše jeden až dva dny. Významný počet těchto odpovědí zpomalí procházení celého hostnamu: nové stránky se objeví později a aktualizace cen, dostupnosti či odstraněných URL se mohou opozdit. Pokud stav trvá několik dnů, může Google URL z výsledků vyřadit.“
>
> „Vlastní pravidlo pro ochranu serveru oddělte od nouzového postupu doporučeného Googlem.“

**Aktuální pasáž ve FAQ:**

> „Vlastní pravidlo 429 používejte jen jako změřenou ochranu serveru, ne jako trvalé plošné nastavení. Pro Google jde o nouzový postup na několik hodin, nejvýše jeden až dva dny; významný počet odpovědí 429 nebo 503 zpomalí procházení celého hostnamu. Přidejte Retry-After. U AI robotů ověřte chování podle dokumentace konkrétního provozovatele a podle logů.“

Tělo i FAQ nyní oddělují vlastní ochranné pravidlo od nouzového postupu Googlu. Obě místa správně uvádějí dobu několika hodin až 1–2 dnů, podmínku významného počtu odpovědí, dopad na celý hostname a provider-specific přístup u AI robotů. Tělo navíc správně popisuje dopad na objevování a obnovu obsahu. Odpovídá dokumentaci [Google: Reduce the Google crawl rate](https://developers.google.com/crawling/docs/crawlers-fetchers/reduce-crawl-rate).

**Další oprava:** není potřeba.

## 4. Přesný význam `DYNAMIC` a `BYPASS`

**Verdikt: VYŘEŠENO**

**Aktuální pasáž v těle:**

> „`DYNAMIC` znamená, že Cloudflare URL už při požadavku nepovažoval za způsobilou pro cache; může to způsobit i pravidlo `Bypass cache`. `BYPASS` znamená, že URL způsobilá byla, ale uložení následně zakázala odpověď původního serveru nebo konfigurace při jejím zpracování.“

**Aktuální pasáž ve FAQ:**

> „DYNAMIC znamená, že Cloudflare URL už při požadavku nepovažoval za způsobilou pro cache. BYPASS znamená, že URL způsobilá byla, ale uložení následně zakázala odpověď původního serveru nebo konfigurace při jejím zpracování.“

Obě místa správně rozlišují rozhodnutí při zpracování požadavku (`DYNAMIC`) od následného zjištění, že původně způsobilou odpověď nelze uložit (`BYPASS`). Tělo navíc správně řadí pravidlo `Bypass cache` pod `DYNAMIC`. Odpovídá dokumentaci [Cloudflare cache responses](https://developers.cloudflare.com/cache/concepts/cache-responses/) a [Cache Rules settings](https://developers.cloudflare.com/cache/how-to/cache-rules/settings/).

**Další oprava:** není potřeba.
