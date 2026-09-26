# Rešerše: Skladovost a dodací lhůta pro AI

Datum rešerše: 2026-09-26
Řádek plánu: 135
Klíčové slovo: `dostupnost a skladovost pro ai`
Navržený slug: `dostupnost-a-skladovost-pro-ai`
Kategorie: `tutorial` (určeno přímo ve sloupci D obsahového plánu)

## Vymezení a kolize

Jde o nový článek. Nejbližší existující texty byly přečtené celé:

- `/blog/produktove-stranky-pro-ai/` řeší celou produktovou stránku; dostupnost uvádí jen jako jedno z polí `Offer`.
- `/blog/produktovy-feed-gtin/` řeší identifikaci produktu a shodu stránky, feedu a strukturovaných dat; dostupnost zmiňuje, ale nevysvětluje stavy ani dodací lhůtu.
- `/blog/ceny-na-webu-a-ai/` řeší obdobný problém u ceny a je vhodný pro vnitřní odkaz.
- `/blog/ai-nakupni-agenti/` vysvětluje, proč jsou produktová data užitečná pro nákupní odpovědi; nový článek nebude opakovat jeho přehled platforem.

Nový text se proto omezuje na tři otázky: co přesně znamenají stavy dostupnosti, jak odlišit skladovost od doby doručení a jak udržet stejný údaj na stránce, ve strukturovaných datech a v produktovém feedu. Téma se s korpusem překrývá jen nutným kontextem a nekoliduje s existujícím titulkem ani slugem.

V trendové rešerši nevznikl další natolik hodnotný a odlišný námět, aby se přidával nový řádek do plánu.

## Rešerše klíčových slov

Marketing Miner, čeština, 2026-09-26:

- Návrhy pro čtyři seedy (`skladovost produktu`, `dodací lhůta e-shop`, `dostupnost produktu`, `skladem u dodavatele`) stály 160 kreditů.
- První tři seedy nevrátily žádný návrh. `skladem u dodavatele` vrátil jen tentýž dotaz.
- Přesná hledanost deseti formulací stála 30 kreditů. Data měla jen tři:
  - `předobjednávka`: 280 hledání/měsíc, meziročně −12 %;
  - `dodací lhůta`: 20 hledání/měsíc, meziročně −32 %;
  - `skladem u dodavatele`: 10 hledání/měsíc, meziročně −43 %.
- Sedm úzkých formulací včetně hlavního dotazu nemělo data. To znamená, že je nástroj neměří, ne nulový zájem.

Google Suggest:

- `skladem u dodavatele` → mimo jiné `co znamená skladem u dodavatele`;
- `dodací lhůta` → převážně dotazy na dodací lhůtu konkrétních obchodů a značek;
- `předobjednávka` → konkrétní produkty a hry.

YouTube Suggest byl tematicky zašuměný a pro článek se nepoužije. Wikipedia nemá k těmto třem výrazům odpovídající článek.

### Selhání nástroje

Google Trends se nespustil, protože v prostředí chyběl modul `pytrends` (`No module named 'pytrends'`). Rešerše pokračovala přes Marketing Miner, Google Suggest a primární dokumentaci. Z výpadku Trends se nevyvozuje závěr o poptávce.

## Hlavní zjištění z primárních zdrojů

### Google Merchant Center

Zdroj: https://support.google.com/merchants/answer/6324448

- `availability` je povinný údaj pro všechny produkty v produktových datech.
- Google rozlišuje `in_stock`, `out_of_stock`, `preorder` a `backorder`.
- `preorder` je určený pro produkt před uvedením na trh; `backorder` pro již existující produkt, který teď není skladem, ale obchod objednávku přijímá.
- U `preorder` a `backorder` je požadováno `availability_date`; očekávané datum odeslání má být viditelné i na produktové stránce.
- Dostupnost se musí shodovat mezi produktovou stránkou, strukturovanými daty, pokladnou a produktovým zdrojem. Nesoulad může vést k zamítnutí produktu v Merchant Center.
- Pro `in_stock` má být nákupní tlačítko funkční. Pro `out_of_stock` má být nedostupnost jasně viditelná nebo tlačítko neaktivní.
- U variant musí stav konkrétní varianty v produktových datech odpovídat stejné variantě na stránce.

Zdroj: https://support.google.com/merchants/answer/6324470

- `availability_date` je datum a čas podle ISO 8601, povinné u `preorder` a `backorder`.
- Google nedoporučuje rozsah dat; dovoluje odhadované datum až jeden rok dopředu a chce ho zpřesnit, jakmile je termín známý.

Zdroj: https://support.google.com/merchants/answer/9773127

- Mezi běžné příčiny nesouladu patří špatně předvolená varianta, stará data v HTML, změna podle IP adresy a stav dostupný až po zadání PSČ.
- Google doporučuje stránku a produktový zdroj aktualizovat současně.

### Google Search a schema.org

Zdroj: https://developers.google.com/search/docs/appearance/structured-data/merchant-listing

- U nabídky se dostupnost zapisuje jako `Offer.availability`, například `https://schema.org/InStock`.
- Dopravu lze popsat pomocí `OfferShippingDetails`; `ShippingDeliveryTime` rozlišuje dobu zpracování (`handlingTime`) a dobu přepravy (`transitTime`).
- Tyto údaje popisují nabídku pro konkrétní oblast. Nejsou náhradou za viditelný termín na stránce.

Zdroj: https://developers.google.com/search/docs/appearance/structured-data/product-variants

- Varianty lze seskupit pomocí `ProductGroup`, `hasVariant`, `variesBy` a `productGroupID`.
- Každá varianta musí mít vlastní identifikátor a přímo dostupnou adresu, která ji předvolí a ukáže správný obrázek, cenu i dostupnost.
- Google upozorňuje, že strukturovaná data vytvořená až JavaScriptem mohou být u rychle se měnící ceny a dostupnosti méně spolehlivě procházená.

### OpenAI / ChatGPT Shopping

Zdroj: https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search

- OpenAI uvádí dostupnost mezi hledisky, podle kterých se řadí nabídky obchodníků vedle ceny, kvality a toho, zda jde o výrobce nebo hlavního prodejce.
- Metadata mohou pocházet od třetích stran nebo přímo od obchodníka.

Zdroj: https://developers.openai.com/commerce/guides/get-started

- Přímé produktové feedy jsou k 26. 9. 2026 dostupné jen schváleným partnerům.
- OpenAI doporučuje celý feed jednou denně a změny během dne posílat přes API; cílem je sdílet aktuální cenu a dostupnost.

Zdroj: https://developers.openai.com/commerce/specs/file-upload/products

- `availability` je povinné pole. Formát OpenAI přijímá `in_stock`, `out_of_stock`, `pre_order`, `backorder` nebo výslovné `unknown`.
- Ve vlastním formátu OpenAI má každá varianta vlastní řádek s odlišným `item_id`, společným `group_id`, hodnotou `listing_has_variations=true` a `variant_dict` vybrané kombinace. Každý řádek nese vlastní URL, cenu, dostupnost a obrázek; URL má variantu předvolit, pokud je to možné.
- `pre_order` a `backorder` samy nenaplánují budoucí změnu stavu; feed se musí aktualizovat, když se stav změní.
- Google kompatibilní profil používá zápis `preorder` bez podtržítka a nepřijímá `unknown`. Formát feedu se tedy musí řídit konkrétní integrací.
- Dokumentace OpenAI u současného feedu nepopisuje garantované datum doručení; údaj o dopravném ani dopravní službě sám o sobě termín doručení negarantuje.

## Podmínky tvrzení podle platforem

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Dostupnost patří do produktových dat | Google Merchant Center ji vyžaduje u všech produktů; OpenAI feed u každého řádku | Shodně ji oba systémy považují za základní a aktuální údaj | Přímý feed OpenAI je jen pro schválené partnery | Google Merchant Center; OpenAI Commerce |
| `in_stock` znamená, že lze objednávku splnit | Produkt lze koupit a odeslat včas do podporované oblasti | Shodný základní význam u Google i OpenAI | Neznamená automaticky doručení zítra; to musí být popsáno zvlášť | Google availability; OpenAI Products |
| Předobjednávka a čekání na doskladnění nejsou totéž | `preorder` je před uvedením produktu; `backorder` po dočasném vyprodání | Google i OpenAI tyto stavy rozlišují | OpenAI používá v nativním formátu `pre_order`, Google kompatibilní feed `preorder` | Google availability; OpenAI Products |
| Stav se musí průběžně aktualizovat | Aktualizace při vyprodání, naskladnění i změně varianty | Obě platformy vyžadují aktuální data | OpenAI datum samo budoucí stav nepřepne | Google availability; OpenAI Products |
| Stránka, feed a strukturovaná data mají říkat totéž | Týká se stejného produktu a stejné varianty | Google to vyžaduje výslovně; u OpenAI je aktuální feed samostatný vstup | OpenAI veřejná dokumentace neslibuje automatické porovnání se stránkou | Google mismatch help; OpenAI Products |
| Dodací lhůta je jiný údaj než skladovost | Skladovost říká, zda lze objednat; dodací lhůta kdy objednávka dorazí | Google má pro dopravu `handlingTime` a `transitTime` | U OpenAI feedu současná dokumentace termín doručení negarantuje | Google merchant listing; OpenAI Products |
| Každá varianta potřebuje vlastní stav | Velikost/barva/balení má vlastní identitu nebo přímo volitelnou URL | Google i OpenAI chtějí variantově přesná data | Google používá `ProductGroup`; vlastní formát OpenAI vyžaduje odlišné `item_id`, společné `group_id`, `listing_has_variations=true` a `variant_dict`. Google kompatibilní profil má jiné názvy polí a lze ho použít jen po potvrzení OpenAI | Google ProductGroup; OpenAI Products |

## FAQ a původ otázek

1. **Co znamená „skladem u dodavatele“?** — Google Suggest; odpověď musí vysvětlit, že nejde o standardizovaný technický stav a obchod má uvést vlastní termín.
2. **Jaký je rozdíl mezi skladem, předobjednávkou a objednávkou po doskladnění?** — primární dokumentace Google a OpenAI.
3. **Musí dodací lhůta být ve strukturovaných datech?** — praktický problém + Google `OfferShippingDetails`.
4. **Co dělat, když má každá varianta jinou dostupnost?** — dokumentace Google Product Variants a OpenAI Products.
5. **Jak často aktualizovat dostupnost v produktovém feedu?** — OpenAI integration path + Google požadavek aktuálnosti.
6. **Zajistí správná dostupnost zobrazení v ChatGPT nebo Googlu?** — bezpečnostní námitka; ne, jde o podklad a způsobilost, ne záruku.

## Redakční rozhodnutí a meze

- Nepoužívat údaj „dostupnost je po ceně druhý nejdůležitější faktor“, protože pro něj nebyl nalezen dostatečně přesný primární zdroj.
- Netvrdit, že obecné strukturované údaje `Offer` čte každý AI asistent přímo ze stránky. Doložené je použití Googlu; u ChatGPT je doložený vlastní/kompatibilní feed a dostupnost mezi hledisky nabídky.
- Nepsat „skladem u dodavatele“ jako ekvivalent `InStock`. Je to obchodní formulace bez jednotného významu; stav se má odvodit od toho, zda obchod objednávku přijímá a kdy je schopen ji odeslat.
- Nezaměňovat skladovost, datum odeslání a dobu přepravy.
- CTA: tutorial → AI SEO Wireframe Pack, cena 1 490 Kč včetně DPH podle aktuálního `src/content/pages/pack.ts`.

## Nesrovnalost v projektových podkladech

`marketing/05-messaging-a-tonalita.md` uvádí formulaci „1 490 Kč jednorázově, bez DPH“, zatímco aktuální datový modul `src/content/pages/pack.ts` uvádí „konečná cena včetně DPH“. Podle workflow je datový modul zdroj pravdy. Článek proto použije cenu včetně DPH; uživatel byl o rozporu informován během runu.
