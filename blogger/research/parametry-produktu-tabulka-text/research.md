# Rešerše: Parametry produktu — tabulka, text a shoda s feedem

**Datum ověření:** 5. 10. 2026
**Typ:** nový tutorial
**Vybraný řádek plánu:** `parametry produktu jako data` (řádek 146)

## Výběr tématu a kolizní kontrola

První dva otevřené řádky plánu byly přeskočeny, protože jejich zadání už pokrývají existující články:

- `hledanost terminu vs adopce` — překryv s `ai-search-trendy-cesko-2026` a `nahradi-ai-mode-vyhledavani`;
- `zkratky a odborne terminy pro ai` — překryv s `pasazova-optimalizace-obsahu`.

Vybrané téma je odlišné od existujících článků:

- `tabulky-a-seznamy-pro-ai` vysvětluje obecnou volbu formátu a sémantické HTML;
- `produktovy-feed-gtin` řeší identifikátory a shodu základních produktových údajů;
- nový článek řeší konkrétně technické parametry produktu: co dát do tabulky, co vysvětlit textem, jak sjednotit názvy a jednotky a jak údaje převést do feedu.

Článek `produktove-stranky-pro-ai` nebyl vybrán jako interní opora. Ve frontě refreshů už je kvůli tvrzením o strukturovaných datech pro časté dotazy a AI porozumění, která potřebují zpřesnit.

## Kontrola nových trendů

Prošly oficiální zdroje Googlu, Bingu, Seznamu, OpenAI a Anthropic. Aktuální novinky s dostatečnou hodnotou pro samostatný článek už jsou v obsahovém plánu, případně patří jako aktualizace do existujícího článku. V tomto běhu proto nevzniká nový řádek plánu.

## Marketing Miner

Rešerše proběhla podle skillu `marketing-miner-api` bez zkrácení rozsahu.

### Suggestions

Pět seedů (`parametry produktu`, `produktove parametry`, `technicke parametry produktu`, `tabulka parametru produktu`, `produktova specifikace`) prošlo všemi čtyřmi typy návrhů. Použitých bylo 200 kreditů. Použitelný výstup vrátil jen přesný dotaz `parametry produktu` s hledaností 10 za měsíc a meziroční změnou +9 %.

### Search volume

Deset termínů spotřebovalo 30 kreditů. Data se vrátila pro tři dotazy:

| Dotaz | Měsíční hledanost | Meziročně |
|---|---:|---:|
| parametry produktu | 10 | +9 % |
| product specification | 10 | 0 % |
| produktový feed | 20 | −17 % |

Chybějící výsledek není důkaz nulového zájmu. Jde o úzké provozní téma a anglický dotaz má jiný záměr, proto se čísla nepoužijí jako argument o velikosti poptávky.

### Doplňkové zdroje

- Google Trends: všechny zadané výrazy měly za posledních 12 měsíců průměr 0; pro tak úzké české dotazy nejsou data dostatečná.
- Google Suggest: u `produktový feed` se objevily použitelné související formulace, ostatní návrhy byly převážně přesná opakování, anglické obecné dotazy nebo šum.
- Wikipedie: bez relevantního výsledku.
- YouTube: převážně obecný nebo nesouvisející obsah.

Celkem Marketing Miner: **230 kreditů**.

## Ověřená teze článku

Zadání obsahového plánu se potvrzuje s omezením: klíč–hodnota je vhodná podoba technických specifikací a text je vhodný pro význam, použití a podmínky. Primární zdroje ale nedokládají, že samotná tabulka zvyšuje četnost citací v AI. Článek proto mluví o srozumitelnosti pro zákazníka, přesném přenosu dat a způsobilosti pro produktové plochy, nikoli o garantované citaci nebo pozici.

## Matice tvrzení

| Tvrzení | Podmínky | Konzistence | Výjimky / hranice | Primární zdroj |
|---|---|---|---|---|
| Google Merchant Center přijímá technické specifikace jako opakované páry název–hodnota, volitelně seskupené do sekcí. | Atribut `product_detail`; název a hodnota jsou povinné, sekce doporučená. | Shodné v požadavcích a příkladech Googlu. | Až 100 opakování; údaje pokryté jinými atributy se nemají duplikovat. | Google Merchant Center, `product_detail` |
| Čisté páry klíč–hodnota mohou zlepšit zobrazení podrobných údajů v Shoppingu a plochách s AI. | Správný formát, potvrzené hodnoty, relevantní specifikace. | Výslovně uvedeno v best practices. | Nejde o příslib pořadí ani citace. | Google Merchant Center, `product_detail` |
| Popis produktu a parametry mají rozdílnou roli. | Popis má produkt přesně popsat a odpovídat stránce; technické detaily se posílají jako parametry. | Google odděluje `description` a `product_detail`; Heureka doporučuje přesná data posílat parametry. | Důležitý parametr lze v textu vysvětlit, nemá se však opisovat bez přidaného kontextu. | Google Product data specification; Heureka popisky |
| Stránka, feed a strukturovaná data mají uvádět shodné údaje. | Platí zejména pro cenu a další podstatná produktová data. | Google doporučuje kombinaci dat na stránce a feedu pro pochopení a ověření. | Uživatel musí vidět stejnou skutečnost; systémy se liší názvy polí a povoleným formátem. | Google Product structured data; Product data specification |
| Strukturovaná data pro produkt mohou rozšířit podobu výsledku. | Splnění požadavků konkrétního typu výsledku. | Výslovně v dokumentaci Search Central. | Zobrazení není garantované; `additionalProperty` není uvedeno jako povinné pole bohatého výsledku. | Google Search Central, Product |
| Schema.org umožňuje další vlastnosti přes `additionalProperty` a `PropertyValue`. | Pro vlastnosti bez specifičtějšího pole; lze uvést `name`, `value`, `unitText` nebo `unitCode`. | Příklady Schema.org ukazují kvalitativní i číselné hodnoty. | Přednost má specifičtější vlastnost, pokud existuje. Podpora slovníku neznamená, že ji Google využije pro konkrétní rozšířený výsledek. | Schema.org |
| Google pro generativní vyhledávání nevyžaduje speciální strukturovaná data. | Obecné generativní funkce Vyhledávání. | Výslovně v průvodci Googlu z 10. 7. 2026. | Merchant Center feed může pomoci viditelnosti produktů v AI odpovědích a dalších výsledcích. | Google AI optimization guide |
| Heureka zapisuje každý parametr samostatně jako `PARAM_NAME` + `VAL`. | XML feed; povinné parametry se liší podle kategorie. | Výslovně v nápovědě Heureky. | Povinnost ovlivňuje Marketplace a filtry, ne obecnou kvalitu textu produktu. | Heureka nápověda |

## Praktická pravidla odvozená ze zdrojů

1. **Do tabulky:** krátké, ověřené a opakovatelně pojmenované vlastnosti, které lze zapsat jako název + hodnota + jednotka.
2. **Do textu:** důsledky parametru, podmínky použití, kompatibilita, omezení a rozdíl mezi podobnými hodnotami.
3. **Do obou:** jen parametr, který je rozhodující a potřebuje vysvětlení; tabulka drží přesnou hodnotu, text vysvětluje význam bez opisování celé tabulky.
4. **Jeden slovník:** stejný význam má napříč katalogem jeden kanonický název a jedna jednotka; platformní export může název mapovat na vlastní pole.
5. **Jeden zdroj pravdy:** hodnotu udržovat v produktových datech a z ní generovat stránku, feed i strukturovaná data. Ruční kopie vytvářejí rozpor.
6. **Žádné SEO výrazy v parametrech:** název veličiny má popsat vlastnost, ne nést hledanou frázi.

## Návrh struktury článku

1. Rozhodnutí tabulka × text × obojí.
2. Parametrický slovník: kanonický název, datový typ, jednotka, povinnost podle kategorie.
3. Ukázka chybného a správného zápisu na jednom produktu.
4. Převod do Merchant Center `product_detail`, Heureky a strukturovaných dat.
5. Kontrolní postup pro vzorek produktů.
6. Limity: žádná záruka citace, strukturovaná data nejsou zvláštní vstupenkou do AI výsledků.

## FAQ a původ otázek

| Otázka | Původ |
|---|---|
| Kdy dát parametr do tabulky a kdy do textu? | Hlavní záměr řádku obsahového plánu. |
| Má být důležitý parametr v tabulce i popisu? | Rozdíl mezi `description` a `product_detail` v dokumentaci Googlu + pravidlo Heureky pro popisky. |
| Jak pojmenovat stejné parametry napříč katalogem? | Požadavek na páry `attribute_name`–`attribute_value`, kategorické parametry Heureky a provozní konzistence exportu. |
| Jak zapisovat hodnotu a jednotku? | Příklady Googlu a Schema.org `PropertyValue`. |
| Musí se hodnoty na stránce a ve feedu shodovat? | Google Product structured data a Product data specification. |
| Pomůže tabulka produktu k citaci v AI? | Mýtus, který je potřeba ohraničit podle Google AI optimization guide. |

## Zdroje

- Google Merchant Center: [Product detail `[product_detail]`](https://support.google.com/merchants/answer/9218260?hl=en)
- Google Merchant Center: [Product data specification](https://support.google.com/merchants/answer/7052112?hl=en)
- Google Search Central: [Introduction to Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product?version=published)
- Google Search Central: [Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- Schema.org: [`additionalProperty`](https://schema.org/additionalProperty)
- Schema.org: [`PropertyValue`](https://schema.org/PropertyValue)
- Heureka: [Co jsou povinné parametry a jak s nimi pracovat](https://sluzby.heureka.cz/napoveda/co-jsou-to-povinne-parametry-a-jak-s-nimi-pracovat/)
- Heureka: [Jak správně posílat popisky](https://sluzby.heureka.cz/napoveda/jak-spravne-posilat-popisky/)

## Interní odkazy po věcné kontrole

- `/blog/tabulky-a-seznamy-pro-ai/` — obecná volba formátu a sémantické HTML;
- `/blog/produktovy-feed-gtin/` — identifikátory a shoda produktových dat;
- `/blog/varianty-produktu-pro-ai/` — shoda údajů konkrétní varianty.

`/blog/produktove-stranky-pro-ai/` se v tomto článku nepoužije, dokud neprojde už zapsaným refreshem.
