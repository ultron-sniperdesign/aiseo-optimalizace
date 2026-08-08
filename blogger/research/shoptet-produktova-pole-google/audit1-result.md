1. **[ZÁVAŽNOST střední] Frontmatter → `description` / `stats` / FAQ „EAN“ → nepřesná terminologie vůči datům**
   - **Problém:** Naměřená data v části A sledují pole **`gtin`**, ne konkrétně **EAN**. V části B Google také uvádí `gtin|gtin8|gtin12|gtin13|gtin14|isbn`. Článek ale na více místech říká „EAN 27 / 38“ a ve frontmatteru dokonce „mají u produktu vyplněný EAN“. To je silnější tvrzení, než data unesou: z měření plyne přítomnost `gtin`, ne jistota, že vždy šlo právě o EAN.
   - **Navržené znění:**  
     - `description`: „… deklaraci vrácení zboží nemá nikdo a pole GTIN chybí skoro třetině.“  
     - `stats[2].label`: „měřených e-shopů, které mají u produktu vyplněné pole GTIN“  
     - FAQ „Kolik e-shopů má vyplněný EAN?“ → přepsat na: „Kolik e-shopů má vyplněný GTIN?“  
       Odpověď: „Dvacet sedm z třiceti osmi. V měření sleduji přítomnost pole `gtin`; v praxi to často bývá EAN, ale z tohoto měření netvrdím, že ve všech 27 případech šlo právě o EAN.“

2. **[ZÁVAŽNOST střední] Tělo → „Co plyne z nastavení e-shopu… / co si vyplňuje majitel v katalogu… / co platforma nevygeneruje…“ → interpretace není daty sama o sobě doložená**
   - **Problém:** Rozdělení doporučených polí do tří skupin je prezentováno jako zjištění z měření („rozpadá se to podle jasného klíče“), ale z části A plyne jen přítomnost/nepřítomnost polí. Z dat samotných neplyne, zda pole pochází z nastavení e-shopu, katalogu nebo zda ho platforma negeneruje. To může být pravdivá domněnka založená na znalosti Shoptetu, ale takto napsané je to silnější, než měření samo dokládá.
   - **Navržené znění:**  
     „Tady se to rozpadá — a **pravděpodobné vysvětlení** je podle původu dat. **Zvenku to neověřím u každého pole jistě**, ale vzorec vypadá takto:“  
     a nad tabulkami:
     - „Pole, která **nejspíš vycházejí z nastavení e-shopu**, bývají skoro vždycky přítomná.“
     - „Pole, která **zřejmě závisí na vyplnění katalogu**, chybí častěji.“
     - „Pole, která se v mém vzorku **neobjevila ani jednou**, Shoptet **nejspíš standardně negeneruje**; bez zásahu do šablony nebo doplňku to ale zvenku nedokážu potvrdit.“

3. **[ZÁVAŽNOST střední] Tělo + FAQ → „zvenku ji nedoplníte“ / „platforma negeneruje“ → příliš kategorické**
   - **Problém:** U `hasMerchantReturnPolicy` článek tvrdí, že ji „platforma negeneruje a zvenku ji nedoplníte“ a v FAQ „jen o díru, kterou zvenku nezaplníte“. Z měření 0/38 lze doložit nepřítomnost ve vzorku, ne nemožnost doplnění obecně. Navíc sám článek později připouští zásahy do šablony u JSON-LD Product.
   - **Navržené znění:**  
     „Že `hasMerchantReturnPolicy` nemá ani jeden z 38 obchodů napříč různými šablonami a velikostmi, **silně naznačuje**, že ji Shoptet ve výchozím stavu negeneruje. **Z tohoto měření ale neplyne, že ji nejde doplnit vůbec** — spíš že ji běžný obchod bez úprav pravděpodobně nedostane do strukturovaných dat sám.“

4. **[ZÁVAŽNOST střední] Tělo → „Tohle je nudná část… Povinné minimum splní na Shoptetu každý, kdo má produkt naplněný“ → zobecnění nad rámec vzorku**
   - **Problém:** Data ukazují 38/38 ve vzorku. Věta „splní na Shoptetu každý“ už zobecňuje na celou platformu. To je silnější než vlastní měření.
   - **Navržené znění:**  
     „Tohle je nudná část a je to dobře. **V měřeném vzorku** povinné minimum splnil každý e-shop.“

5. **[ZÁVAŽNOST střední] Tělo → „Jsou to varianty téhož produktu: velikosti, příchutě, balení.“ → domněnka bez opory v předložených datech**
   - **Problém:** Část A dokládá jen to, že na 6 stránkách bylo víc než jedna `Offer`. Z toho ještě neplyne, že vždy šlo právě o varianty velikosti/příchuti/balení; mohou existovat i jiné důvody víc nabídek.
   - **Navržené znění:**  
     „Šest z 38 e-shopů mělo na produktové stránce víc než jednu nabídku — dvě, tři, čtyři a v jednom případě dvanáct. **V praxi to typicky odpovídá variantám téhož produktu**, ale z tohoto měření samotného dokládám jen přítomnost více objektů `Offer` na jedné stránce.“

6. **[ZÁVAŽNOST střední] Tělo → „Pro stroj to znamená, že vidí jeden produkt s několika cenami… nemá z čeho čerpat“ → příliš silný důsledek z pozorovaných dat**
   - **Problém:** Článek správně uvádí, že ProductGroup/isVariantOf/inProductGroupWithID se neobjevily ani jednou. Ale z toho ještě přímo neplyne, co „stroj“ přesně pochopí nebo nepochopí. To je interpretace, ne naměřený výsledek.
   - **Navržené znění:**  
     „Bez `ProductGroup`, `isVariantOf` a `inProductGroupWithID` **nedostává stroj varianty v podobě, kterou Google pro variantní produkty doporučuje**. U dotazů na velikost nebo barvu to může být limit, zvlášť když se `size` a `color` v mém vzorku neobjevily ani jednou.“

7. **[ZÁVAŽNOST drobná] Tělo → „Povinné u nabídky: cena a měna (nebo cenová specifikace).“ → formulace lehce zjednodušuje požadavky Googlu**
   - **Problém:** Část B říká přesněji: `price` **nebo** `priceSpecification.price`; `priceCurrency` **nebo** `priceSpecification.priceCurrency`. Současná zkratka je srozumitelná, ale může sugerovat, že `priceSpecification` je jeden alternativní blok jako celek. Přitom v datech je 0/38 `priceSpecification`, ale povinnost je stejně splněná díky `price` a `priceCurrency`.
   - **Navržené znění:**  
     „**Povinné u nabídky:** cena (`price`) nebo cena v `priceSpecification.price` a měna (`priceCurrency`) nebo měna v `priceSpecification.priceCurrency`.“

8. **[ZÁVAŽNOST střední] Tělo → spodní tabulka „Co platforma nevygeneruje vůbec“ obsahuje i `priceValidUntil: 3 / 38` → vnitřní rozpor**
   - **Problém:** Nadpis skupiny říká „nevygeneruje vůbec“, ale v téže tabulce je „platnost ceny | 3“. To je přímý rozpor s daty v části A i s vlastním nadpisem skupiny.
   - **Navržené znění:**  
     Buď změnit nadpis skupiny na:  
     „**Co ve vzorku téměř chybí nebo se neobjevuje vůbec:**“  
     nebo `priceValidUntil` přesunout jinam a nechat ve spodní tabulce jen skutečné nuly.

9. **[ZÁVAŽNOST střední] Tělo → „barva, velikost a materiál strukturovaná data nenesou. Text je jediné místo, kde je stroj najde.“ → příliš absolutní**
   - **Problém:** V měřeném vzorku tato pole skutečně byla 0/38. Z toho ale neplyne, že „text je jediné místo“, kde je stroj může najít. Mohou být v jiných částech HTML, v tabulkách parametrů, variantových selektorech apod. Tvrzení je zbytečně absolutní.
   - **Navržené znění:**  
     „V mém vzorku se `color`, `size` ani `material` ve strukturovaných datech neobjevily. **Pokud je zákazníci potřebují znát, vyplatí se mít je čitelně i v obsahu stránky**, ne spoléhat jen na to, že si je systém někde odvodí.“

10. **[ZÁVAŽNOST drobná] Frontmatter `faq` + tělo → oprava vlastních čísel je poctivá, ale důvod je místy formulován příliš jistě**
    - **Problém:** Samotná oprava je viditelná a poctivě přiznaná, což je plus. Slabší místo je vysvětlení „kvůli demům“ podané skoro jako uzavřený důkaz. Z dat víme, že první vzorek obsahoval 7 dem a nový už ne; to je silné vysvětlení, ale ne matematický důkaz, že právě to samo způsobilo celý rozdíl.
    - **Navržené znění:**  
      „Rozdíl **nejspíš z velké části vysvětluje** to, že prvních 13 stránek zahrnovalo sedm šablonových dem s ukázkovými daty, kde GTIN často chybí. První výsledek tedy nebyl dobrý popis produkčních obchodů.“

11. **[ZÁVAŽNOST drobná] Tělo → „Všech šest je zároveň mezi obchody s upraveným robots.txt z druhého dílu…“ → nové tvrzení bez opory v dodaných podkladech**
    - **Problém:** Tato informace není v části A ani B ani C. Může být pravdivá z autorových dalších dat, ale v tomto auditu není doložená. V článku tak působí jako boční závěr bez opory.
    - **Navržené znění:**  
      Buď doložit metodicky, nebo zjemnit:  
      „U všech šesti případů jsem si všiml i dalších odchylek od výchozího nastavení, **což naznačuje**, že nemusí jít o standardní stav platformy. **Z tohoto měření samotného ale neprokážu, čím přesně je to způsobené.**“

12. **[ZÁVAŽNOST drobná] Frontmatter `answer` → „varianty se nezapisují doporučenou strukturou“ → srozumitelné, ale lépe přesně navázat na Google**
    - **Problém:** Není to vyloženě špatně, ale přesnější by bylo uvést, že v datech chybí doporučené prvky pro varianty (`ProductGroup`, `isVariantOf`, `inProductGroupWithID`), aby formulace nebyla příliš obecná.
    - **Navržené znění:**  
      „… chybí deklarace vrácení zboží, a u variant se v mém vzorku neobjevují doporučené prvky `ProductGroup`, `isVariantOf` ani `inProductGroupWithID`.“

13. **[ZÁVAŽNOST drobná] Tělo → „Google ho u identity organizace uvádí jako doporučené“ → mimo rámec části B**
    - **Problém:** V části B jsou jen požadavky pro merchant listing (`Product`, `Offer`, `OfferShippingDetails`). Pasáž o `Organization` a logu může být věcně správná, ale v dodaných primárních podkladech tady není opřená o stejný zdroj jako zbytek článku. V rámci jednoho textu to lehce míchá dvě roviny.
    - **Navržené znění:**  
      „Blok `Organization` má 29 z 38 e-shopů… **To už je mimo samotné merchant listing požadavky, které řeší zbytek článku**, ale pro identitu značky je to pořád užitečný signál.“

14. **[ZÁVAŽNOST drobná] Frontmatter vs. tělo → konzistence je převážně v pořádku, ale `description` a `stats` by měly po opravě terminologie kopírovat tělo**
    - **Problém:** Častá vada „opravené tělo, starý frontmatter“ tu není zásadní, ale právě terminologie EAN/GTIN zůstala v obou. Po opravě těla je potřeba dočistit i metadata.
    - **Navržené znění:**  
      Po změně v bodě 1 přepsat všude jednotně „EAN“ na „GTIN“, případně „GTIN (často EAN)“.

## 3 nejdůležitější věci

1. **Opravit EAN na GTIN** ve frontmatteru i těle; současné znění tvrdí víc, než data skutečně měří.  
2. **Zjemnit trojí dělení polí** (nastavení / katalog / platforma negeneruje); z měření samotného to neplyne jako jistota, jen jako silná interpretace.  
3. **Opravit spodní tabulku s „nevygeneruje vůbec“**, protože obsahuje `priceValidUntil 3 / 38`, což je přímý rozpor s vlastním nadpisem i daty.