# Research — filtry faceted navigace ai

**Řádek plánu:** `filtry faceted navigace ai` · „Filtry a faceted navigace e-shopu pro AI — co indexovat a co ne" · `tutorial` · run 5. 9. 2026
**Slug článku:** `filtry-faceted-navigace-eshopu`

## Ověření u zdroje: Google to řeší jako správu procházení, ne jako indexační rozhodnutí

Řádek plánu předpokládá rozhodování „které filtrové stránky nechat indexovat a které blokovat". Primární zdroj to rámuje jinak — a to je jádro článku.

**Search Central / Crawling infrastructure, *Managing crawling of faceted navigation URLs* (naposledy aktualizováno 18. 12. 2025):**

| Co dokument říká | Doslova |
|---|---|
| Proč to vadí | implementace přes parametry „can generate **infinite URL spaces**"; dvě škody: **overcrawling** („crawlers will typically access a very large number of faceted navigation URLs before … determine the URLs are in fact useless") a **slower discovery crawls** („crawling is spent on useless URLs, the crawlers have less time to spend on new, useful URLs") |
| Dvě cesty | „If you **don't need** the faceted navigation URLs potentially indexed, **prevent crawling**." / „If you **need** … ensure that the URLs follow our best practices … Keep in mind that crawling faceted URLs tends to cost sites **large amounts of computing resources**" |
| Cesta A1 — robots.txt | ukázka přímo v dokumentaci: `disallow: /*?*products=`, `disallow: /*?*color=`, `disallow: /*?*size=`, `allow: /*?products=all$`; „Oftentimes there's no good reason to allow crawling of filtered items … instead, allow crawling of just the individual items' pages along with a dedicated listing page that shows all products without filters applied." |
| Cesta A2 — fragmenty | „Google Search generally **doesn't support URL fragments** in crawling and indexing." → filtrování přes `#` „will have **no impact on crawling (positive or negative)**" |
| Slabší nástroje | `rel="canonical"` a `rel="nofollow"` jsou „generally **less effective in the long term** than the previously mentioned methods". U canonicalu: „may, **over time**, decrease the crawl volume of non-canonical versions". U nofollow: „**every anchor** pointing to a specific URL must have the rel=nofollow attribute in order for it to be effective" |
| Cesta B — když je chceš procházet | oddělovač `&` (čárka, středník a hranaté závorky se špatně poznávají); u filtrů v cestě „ensure that the **logical order** of the filters always stays the same and that **no duplicate filters** can exist" |
| Prázdná kombinace | „**Return an HTTP 404** status code when a filter combination doesn't return results … **don't redirect to a common not found error page**. Instead, serve a not found error with the 404 HTTP status code **under the URL where it was encountered**." Platí i pro duplicitní filtry a neexistující stránkovací adresy |

**Search Central, *Designing a URL structure for ecommerce websites* (naposledy aktualizováno 10. 12. 2025):**
- „If a category has **no items**, use a `noindex` robots meta tag. If your site … automatically removes the category …, consider returning a **404**."
- „Avoid linking to, or at least indexing, pages **without useful content**."
- `?key=value` místo `?value`; nepoužívat dvakrát týž parametr; neodkazovat interně na dočasné parametry (session ID, `location=nearby`, čas).
- Vlastní `rel="canonical"` na sebe u všech indexovatelných stránek + tytéž adresy v sitemapě.
- Odkazy přes `<a href>`, ne přes JavaScript.

**Search Central, *Block Search indexing with noindex* (10. 12. 2025):**
- „For the noindex rule to be effective, the page … **must not be blocked by a robots.txt file** … the crawler will never see the noindex rule, and the page **can still appear in search results**."
- „Specifying the noindex rule in the robots.txt file is **not supported** by Google."

## Co v dokumentaci NENÍ

- **Žádné doporučení „nechte indexovat poptávané kombinace filtrů".** Dokument mluví jen o tom, jestli je chceš mít „potentially indexed", a hned varuje před náklady. Rozhodovací kritéria (poptávka, vlastní obsah) jsou oborová praxe, ne pokyn Googlu — v článku to musí být oddělené.
- **Nic o AI robotech.** Dokument je psaný pro Googlebota. Pro AI roboty žádný srovnatelný dokument o rozpočtu procházení nemám — netvrdit, že se chovají stejně.
- Nástroj na parametry v Search Console (URL Parameters) už neexistuje; dokument ho nezmiňuje ani jako alternativu.

## Vlastní data — česká kotva

Z `shoptet-filtry-strankovani` (měření 47 e-shopů, 8. 8. 2026): výchozí robots.txt zakazuje `?priceMin`, `?priceMax`, `?order`, `?parameterId`, `?availabilityId`, `?manufacturerId`, `?stock`, `?pv*`, `?dd*`; **43 ze 46 kategorií nemá na filtrovanou adresu ani jeden odkaz**, protože filtry jsou zaškrtávátka ve formuláři; jedna kategorie měla až **437 zaškrtávacích políček**. Na běžné české platformě je tedy cesta A (nepustit robota dovnitř) předvolená za vás — a rozhodování začíná až tím, jestli ji vlastní úpravou nerozbijete.

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `shoptet-filtry-strankovani` | **měření** jedné platformy: co Shoptet dělá ve výchozím stavu, stránkování bez canonicalu | přebírám jako českou kotvu, neopakuji metodiku ani sekci o stránkování |
| `ai-friendly-url-struktura` | jak má vypadat adresa, proč ji na starém webu neměnit | tady parametry a rozpočet procházení, ne tvar adresy; vzájemný odkaz |
| `kategorie-texty-pro-ai` | text kategorie | jiná vrstva |
| `strukturovana-data-kategorie-eshopu` | data na kategorii | jiná vrstva |
| `ai-crawler-robots-txt` | robots.txt pro AI roboty | odtud beru jen odkaz pro AI vrstvu, pravidla neopakuji |
| `seo-pro-eshopy-ai-era-2026` | přehled pro e-shopy | odkaz |

## Struktura článku

1. Krátká odpověď: výchozí volba je nepustit robota do filtrů; výjimka je doložená poptávka + vlastní obsah.
2. Co Google dokumentuje (a co ne): overcrawling, pomalejší objevování, dvě cesty.
3. Rozhodnutí: kdy filtr zaslouží vlastní stránku — kritéria jako oborová praxe, ne jako pokyn Googlu.
4. Čtyři nástroje a jejich síla podle dokumentace (robots.txt, fragmenty, canonical, nofollow).
5. Co s prázdnou kombinací (404) a s prázdnou kategorií (noindex/404).
6. Past: `noindex` na adrese zakázané v robots.txt (krátce + odkaz).
7. Co z toho platí pro AI roboty — otevřeně, že dokument je psaný pro Googlebota.
8. Časté chyby.
9. Shrnutí + CTA.

## Limity

- Netvrdit, že Google doporučuje indexovat poptávané kombinace — to je oborová praxe.
- Netvrdit nic o rozpočtu procházení AI robotů; doklad nemám.
- Neopakovat měření ze `shoptet-filtry-strankovani`, jen se o ně opřít.
- Nepsat o stránkování víc než jednou větou s odkazem.
