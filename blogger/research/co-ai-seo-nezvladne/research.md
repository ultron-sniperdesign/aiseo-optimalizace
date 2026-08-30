# Research — co ai seo nezvladne

**Řádek plánu:** `co ai seo nezvladne` · „Co AI SEO neumí — hranice disciplíny, o kterých se nemluví" · kategorie `analysis` · run 29. 8. 2026
**Zadání z plánu:** seznam věcí, které se optimalizací ovlivnit nedají: výběr zdrojů modelem, personalizované odpovědi, volatilita citací mezi spuštěními, nemožnost izolovat AI Mode v GSC. Poctivý protipól k marketingovým slibům. Navazuje na `ai-seo-agentura-sluzby`.

## Úhel článku (a proč právě tenhle)

Kolizní revize ukázala, že **„co podle Googlu nemusíte dělat"** je už zabrané** — `aeo-geo-je-porad-seo` má na to celý checklist (žádný speciální markup, žádné AI text soubory, žádný zvláštní styl psaní, žádná ideální délka).

Tento článek proto **není** o tom, co je zbytečné. Je o tom, **co se ovlivnit nedá ani při dokonalé práci** — kde končí dosah disciplíny bez ohledu na rozpočet. To na webu nikde není a je to přímý protipól slibům typu „dostaneme vás do AI odpovědí".

## Ověřená fakta

| Fakt | Doslovné znění / hodnota | Zdroj | Ověřeno |
|---|---|---|---|
| Splnění všech doporučení není nárok na zobrazení | „Just because a page meets all requirements, best practices, and complies with the policies, doesn't mean that Google will crawl, index, or serve its content. Indexing and serving aren't guaranteed." | Google Search Central, *Optimizing your website for generative AI features* (`developers.google.com/search/docs/fundamentals/ai-optimization-guide`) | 29. 8. 2026 |
| Žádné zvláštní požadavky ani „přihlášení" pro AI Overviews / AI Mode | „There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary." | Google Search Central, *AI Features and Your Website* (`developers.google.com/search/docs/appearance/ai-features`) | 29. 8. 2026 |
| Odkazy v odpovědi vybírají modely za běhu | „While responses are being generated, our advanced models identify more supporting web pages, allowing us to display a wider and more diverse set of helpful links associated with the response." | tamtéž | 29. 8. 2026 |
| Kliky z AI funkcí jsou v GSC nerozlišené | „sites appearing in AI features (such as AI Overviews and AI Mode) are included in the overall search traffic in Search Console … reported on in the Performance report" | tamtéž | 29. 8. 2026 |
| Report Přehled výkonu v generativní AI dává jen imprese; AI Mode od AI Overviews neoddělí | ověřeno v nápovědě + vlastní článek `gsc-ai-segmenty-mereni` | support.google.com/webmasters/answer/16984139?hl=cs | 29. 8. 2026 |
| Shánění neautentických zmínek je spam, ne páka | Google v průvodci označuje „seeking inauthentic 'mentions' across the web" za spamové chování | ai-optimization-guide | 29. 8. 2026 |
| Odpovědi v Režimu AI se personalizují podle konkrétního člověka | Nápověda „Personal Intelligence: How AI Mode in Search personalizes responses for you": AI Mode staví na historii vyhledávání a na dobrovolně připojených aplikacích | support.google.com/websearch/answer/17212611 | 29. 8. 2026 |
| Volatilita mezi spuštěními | měření SE Ranking 29. 9. 2025: shoda odkazů mezi opakováními téhož obecného lokálního dotazu v AI Mode **18–20 %**; s uvedeným městem **46–49 %** | vlastní článek `volatilita-ai-odpovedi` | převzato |

## Kolize s korpusem — co kde už je (a jak se tomu vyhnout)

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `aeo-geo-je-porad-seo` | „co podle Googlu NEMUSÍTE dělat" + že AEO/GEO je pořád SEO | nepřepisovat checklist; jen odkázat |
| `mereni-ai-mode-limity` | limity **měření** AI Mode | u mě jen jedna hranice z šesti, odkaz na detail |
| `volatilita-ai-odpovedi` | kolikrát testovat, čísla SE Ranking | přebírám jedno číslo s odkazem, netestovací návod |
| `ai-seo-agentura-sluzby` | jak vybrat dodavatele (dvě vrstvy otázek) | navazuji: hranice = podklad pro otázky na dodavatele |
| `propojene-aplikace-v-ai-mode` | souhlas s připojením Gmailu/Fotek | u mě jen důsledek pro web, ne návod na nastavení |
| `ai-seo-zdarma` | strop svépomoci | jiné téma: strop **disciplíny**, ne rozpočtu |
| `roi-ai-seo` | návratnost se spočítat dá, přesně nevyjde | jiná rovina (peníze vs. dosah) |

## Struktura článku

1. Krátká odpověď: co optimalizace ovlivnit nemůže.
2. Proč o hranicích nikdo nemluví (nový obor, slabá data, silné sliby).
3. Šest hranic, každá jako H3 s doloženým faktem:
   - nevyberete si, koho model odcituje
   - splněná doporučení nejsou nárok
   - neuvidíte, co se doopravdy stalo
   - nezopakujete výsledek
   - neovlivníte personalizaci
   - nekoupíte si zmínky
4. Co tedy ovlivnit jde (aby článek nebyl jen negativní).
5. Jak hranice použít při jednání s dodavatelem — červené vlajky ve slibech.
6. FAQ.

## Limity, které si v článku hlídám

- **Netvrdit, že AI SEO nefunguje.** Hranice ≠ zbytečnost; článek musí skončit tím, co dělat.
- **Nepřidávat čísla, která nemám.** Žádné odhady podílu citací, žádné „x % webů".
- **Nepřepisovat cizí sekce.** Checklist „co nemusíte" zůstává v `aeo-geo-je-porad-seo`.
- **Personalizace:** popsat jako doložený mechanismus, ne jako „AI vám odpoví podle nálady".
- **Nepomlouvat konkurenci.** Kritika slibů obecně, žádná jména agentur.
