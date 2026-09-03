# Research — collectionpage itemlist kategorie

**Řádek plánu:** `collectionpage itemlist kategorie` · „CollectionPage a ItemList — strukturovaná data pro kategorie e-shopu" · `tutorial` · run 3. 9. 2026
**Slug článku:** `strukturovana-data-kategorie-eshopu`

## Ověření u zdroje: ze tří typů dokumentuje Google jako funkci jeden

Řádek říká: *„CollectionPage, ItemList a BreadcrumbList dají AI strojově čitelnou mapu kategorie."* Formálně ano — všechny tři jsou platné typy schema.org. Pro **funkce Googlu** to ale neplatí:

| Typ | Status u Googlu | Doklad |
|---|---|---|
| **BreadcrumbList** | **dokumentovaná funkce** („Breadcrumb" v galerii strukturovaných dat) | Search Central, *Breadcrumb structured data*, last updated **2025-12-10**: povinné `itemListElement`; u `ListItem` povinné `position`, `name`, `item`; u posledního článku řetězce `item` povinné není („If `item` isn't included for the last item, Google uses the URL of the containing page"); víc řetězců na stránce jde zapsat jako pole objektů |
| **ItemList** | dokumentovaná funkce **Carousel**, ale **jen pro čtyři typy obsahu** | Search Central, *Carousel (ItemList) structured data*, last updated **2025-12-10**: podporované typy „Course list, Movie, Recipe, Restaurant" — **produkty mezi nimi nejsou**; „All items in the list must be of the same type"; „define an ItemList that contains at least two ListItem elements"; dvě varianty (souhrnná stránka s `position` + `url`, nebo vše na jedné stránce) |
| **CollectionPage** | **v dokumentaci Googlu není** | galerie strukturovaných dat (Search Central) vyjmenovává Article, Breadcrumb, Carousel, Course list, Dataset, Discussion forum, Education Q&A, Employer aggregate rating, Event, Image metadata, Job posting, Local business, Math solver, Movie, Organization, Product, Profile page, Q&A, Recipe, Review snippet, Software app, Speakable, Subscription and paywalled content, Vacation rental, Video — **CollectionPage tam není**; nezmiňuje ho ani dokumentace ke Carouselu |

**Pozor na sekundární zdroje:** návody třetích stran běžně tvrdí, že CollectionPage „enables rich results for collections" a „improves search visibility for category pages". V dokumentaci Googlu pro to opora není. V článku uvést jako rozšířený omyl.

## Vlastní data — hák článku

Z měření v `shoptet-strukturovana-data-mereni` (8. 8. 2026): na **14 měřených kategoriích nebyl ItemList, CollectionPage ani Product** — tabulka v článku uvádí u obou typů nulu. Kategorie tedy sortiment strojově nepopisují vůbec.

## Kontext k AI

Google v průvodci optimalizací pro generativní AI (ověřeno 3. 9. 2026 v článku `chatgpt-jako-vyhledavac-dsa`) uvádí, že pro AI funkce **není potřeba speciální markup ani zvláštní typ schema.org**. Z toho plyne rámec článku: strukturovaná data na kategorii nejsou vstupenka do AI odpovědí; jsou to strojově čitelná fakta navíc, a jejich hodnota u Googlu se liší typ od typu.

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `kategorie-texty-pro-ai` | tabulka se třemi typy a sloupcem „Co říká AI a Googlu" — **implikuje, že Google čte i CollectionPage**; žádný JSON-LD | tady celý návod + oprava té implikace v původním článku (stejný postup jako u `produktove-stranky-pro-ai` 2. 9.) |
| `shoptet-strukturovana-data-mereni` | měření 15 e-shopů, 14 kategorií, nula výskytů | přebírám jako hák, neopakuji metodiku |
| `strukturovana-data-pro-ai` | typy a validace obecně | odkaz na validaci |
| `hasmerchantreturnpolicy-schema` | produktová úroveň, vrácení zboží | sousední téma, odkaz |
| `shoptet-filtry-strankovani` | filtry a stránkování na Shoptetu | jiná vrstva, jen odkaz |

## Struktura článku

1. Krátká odpověď.
2. Co ukázalo měření (0 ze 14).
3. Tři typy a jejich skutečný status u Googlu — tabulka.
4. Co Google u Carouselu vyžaduje (a proč e-shop podmínky nesplní).
5. Co tedy na kategorii dává smysl: BreadcrumbList (JSON-LD ukázka) + kdy ItemList.
6. Rozdíl „funkce Googlu" vs. „strojově čitelný popis" + co Google říká k AI.
7. Ověření.
8. Časté chyby.

## Limity
- Netvrdit, že CollectionPage škodí — jen že ho Google nedokumentuje.
- Netvrdit, že ItemList u produktů nefunguje vůbec — tvrdit, že produkty nejsou mezi podporovanými typy karuselu.
- Neslibovat rich result ani lepší AI viditelnost.
- Nepřepisovat měření ze Shoptet článku.
