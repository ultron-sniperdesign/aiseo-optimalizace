# Rešerše: Jak pojmenovat službu, aby ji našli lidé i AI

Datum rešerše: 20. 9. 2026
Řádek plánu: `terminologie sluzeb pro ai` — „Jak pojmenovat službu, aby ji AI našla — terminologie a synonyma“
Typ: nový článek, návod

## Vymezení a kolizní kontrola

Článek řeší pojmenování služby: jak spojit vlastní obchodní název s obecným názvem služby, jak vybrat přirozená synonyma a jak je rozmístit na stránce bez hromadění klíčových slov.

Plné čtení nejbližších článků:

- `stranka-sluzby-pro-ai.mdx` řeší obsah a strukturu stránky služby, nikoli výběr terminologie.
- `ai-seo-content.mdx` řeší citovatelnost a strukturu obsahu obecně, nikoli názvy služeb.
- `ai-seo-agentura-sluzby.mdx` řeší nabídku a výběr dodavatele AI SEO, nikoli metodiku pojmenování libovolné služby.

Kontrola názvů, popisů a cílený grep všech článků nenašly článek se stejným záměrem. Téma doplňuje článek o stránce služby a nepřebírá jeho hlavní odpověď.

## Kontrola trendů před výběrem

Široká rešerše témat přes Marketing Miner použila semena `AI vyhledávání`, `Google Search Console AI`, `ChatGPT vyhledávání` a `SEO 2026`. Jediný měřitelný kandidát byl `ai vyhledávání` (hledanost 70, meziroční změna +76 %), který je už na webu podrobně pokrytý. Nové oficiální změny Googlu nalezené během kontroly mají vlastní řádky v obsahovém plánu. Do plánu proto nebyl přidán duplicitní řádek jen kvůli kvótě.

## Klíčová slova a reálná poptávka

Marketing Miner byl spuštěn nad výrazy `název služby`, `pojmenování služby`, `synonyma služby` a `marketingový název služby`.

- Z návrhů měl měřitelná data pouze dlouhý dotaz `jak vytvořit atraktivní obchodní název firmy služby produktu značky` s hledaností 10.
- Přesné výrazy tématu byly bez měřitelných dat.
- Google Trends ukázal u `název služby` nízký průměrný index 8,3 a žádné rostoucí související dotazy.
- Google Suggest a YouTube vracely převážně jiné záměry: názvy zdravotních či sociálních služeb a nesouvisející obsah.
- Wikipedie nenabídla použitelný tematický podklad.

Závěr: článek nesmí tvrdit, že jde o hledané téma s vysokou poptávkou. Praktické otázky a FAQ vycházejí z doložených pravidel vyhledávačů a z reálné práce se stránkou služby.

## Primární zdroje a použitelné závěry

### Google Search Essentials

URL: https://developers.google.com/search/docs/essentials

- Google doporučuje používat slova, která lidé použijí při hledání obsahu, na výrazných místech stránky: v titulku, hlavním nadpisu, alternativním textu a textu odkazů.
- Toto podporuje srozumitelný obecný název služby v titulku, H1 a interních odkazech.

### Google SEO Starter Guide

URL: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

- Lidé se stejným záměrem mohou používat odlišné výrazy.
- Google uvádí, že jeho systémy rozumějí mnoha obměnám dotazu i bez přesné shody každého výrazu na stránce.
- Text má počítat s různými způsoby hledání, ale nemá mechanicky opakovat všechny varianty.

### Google: title links

URL: https://developers.google.com/search/docs/appearance/title-link

- Titulek má být popisný, stručný a nemá obsahovat opakovaná klíčová slova.
- Jazyk titulku má odpovídat jazyku hlavního obsahu stránky.
- Google může pro odkaz ve výsledcích použít `title`, hlavní nadpis i další výrazný text stránky. Terminologie proto musí být konzistentní, ne pouze schovaná v metadatech.

### Google spam policies

URL: https://developers.google.com/search/docs/essentials/spam-policies

- Nepřirozené hromadění klíčových slov a variant je keyword stuffing.
- Synonyma se mají objevit jen tam, kde pomáhají čtenáři rozlišit význam nebo přirozeně popsat službu.

### Bing Webmaster Guidelines

URL: https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a

- Bing staví základy optimalizace pro vyhledávání i své AI funkce na jasném, užitečném obsahu.
- Konzistentní názvy entit a soustředěné stránky usnadňují pochopení obsahu.
- Zdroj podporuje konzistenci názvu napříč stránkou, ne slib lepší pozice.

### Schema.org Service

URL: https://schema.org/Service

- Typ `Service` má vlastnost `serviceType` pro druh nabízené služby a běžnou vlastnost `name`.
- Strukturovaná data mohou popsat stejnou službu strojově, ale nenahrazují viditelný název a vysvětlení na stránce.

### Google Search Console: přehled výkonu

URL: https://support.google.com/webmasters/answer/7576553

- Záložka dotazů ukazuje výrazy, při kterých se web zobrazil ve vyhledávání.
- Search Console ukazuje jen dostupná data; nepřítomnost výrazu není důkazem nulové poptávky.
- Regulární výrazy lze použít k seskupení podobných formulací.

Navazující příklady práce s přehledem výkonu: https://support.google.com/webmasters/answer/17010961

## Tabulka podmínek tvrzení

| Tvrzení | Kdy platí | Požadovaná konzistence | Výjimky a meze | Primární zdroj |
|---|---|---|---|---|
| Běžný název služby na výrazných místech pomáhá propojit stránku s tím, co lidé hledají. | Když výraz přesně a pravdivě popisuje službu a odpovídá jazyku zákazníků. | Titulek, H1, úvod a interní odkaz mají popisovat stejnou službu. | Není to záruka pořadí ani citace. Google umí chápat i varianty bez přesné shody. | Google Search Essentials; SEO Starter Guide |
| Vlastní značkový název lze zachovat. | Když je hned doplněn srozumitelným obecným vysvětlením. | Značka a obecný druh služby se nesmějí na různých místech rozcházet. | Známá značka může fungovat samostatně pro navigační dotazy, nový zákazník však stále potřebuje vysvětlení. | Google title links; Bing Webmaster Guidelines |
| Synonyma mají být v přirozených větách. | Když odrážejí skutečný jazyk zákazníků nebo významovou variantu. | Každá varianta musí mít v odstavci informační funkci. | Výčet podobných slov bez přidaného významu může působit jako keyword stuffing. | Google SEO Starter Guide; spam policies |
| Search Console pomůže ověřit používané formulace. | Až stránka získá zobrazení a data jsou pro vlastnictví dostupná. | Porovnávat stejné období a seskupovat blízké varianty. | Nula v reportu nedokazuje nulovou poptávku; data mohou být anonymizovaná či omezená. | Search Console Performance report |
| `Service` může nést název a typ služby. | Když stránka skutečně popisuje poskytovanou službu a data odpovídají viditelnému obsahu. | `name`, `serviceType` a viditelný text mají popisovat tutéž nabídku. | Schema samo o sobě nezajistí pochopení, hodnocení ani zobrazení ve výsledcích. | Schema.org Service |

## Plán článku

Hlavní doporučení: používat dvouvrstvý název — vlastní obchodní označení a hned vedle něj běžné pojmenování služby. Dále vysvětlit, jak získat slovník zákazníků, jak vybrat jeden hlavní termín a několik významově užitečných variant, kam je umístit a jak změnu po zveřejnění vyhodnotit.

Povinné meze formulací:

- Netvrdit, že přesná fráze je nutná nebo že AI vlastní název bezpodmínečně nepochopí.
- Netvrdit, že pojmenování zajistí pozici, návštěvnost nebo citaci.
- Rozlišit značkový název od obecné kategorie služby.
- Synonyma doporučit jen v přirozeném kontextu, nikoli jako seznam pro roboty.
- Strukturovaná data popsat jako doplněk konzistentního viditelného obsahu.

Plánované interní odkazy:

- `/blog/stranka-sluzby-pro-ai/` — navazující struktura stránky služby.
- `/blog/ai-seo-content/` — širší práce s citovatelným obsahem.
- `/pack/` — praktické šablony pro homepage, prodejní landing a kontakt.

FAQ:

1. Mám přejmenovat vlastní značkovou službu?
2. Kolik synonym použít na jedné stránce?
3. Má být název služby česky, nebo anglicky?
4. Kam hlavní název služby umístit?
5. Jak po změně poznat, zda terminologie funguje?

## Záznam nástrojů a omezení

- Marketing Miner: bez chyby, široká fáze 160 kreditů, rešerše tématu 160 kreditů, ověření hledanosti 15 kreditů.
- Google Trends: bez chyby, ale bez rostoucích dotazů pro téma.
- Google Suggest, Wikipedia a YouTube: bez technické chyby; výsledky většinou mimo záměr článku.
- Webová rešerše: použity hlavně primární dokumentace Googlu, Bingu a Schema.org.
