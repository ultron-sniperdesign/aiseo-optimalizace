# Faktický audit: Skladovost a dodací lhůta pro AI

## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek stojí převážně na správných a aktuálních primárních zdrojích, ale dvě ústřední definice jsou nepřesné a u dvou platformních postupů chybí podmínka. Protože se chyby týkají samotného významu skladovosti a hodnoty `in_stock`, zasahují také krátkou odpověď a prvních přibližně 100 slov článku.

## Nálezy

### 1. [BLOCKER] — zásadní: skladovost není totéž co možnost objednat

**Citovaná pasáž:** „Skladovost říká, zda lze produkt objednat…“ (pole `answer`), „První říká, zda jde produkt objednat.“ (úvod) a „Rozlište, zda lze produkt koupit…“ (závěr).

**Problém:** Tato definice zaměňuje fyzickou skladovou dostupnost s přijímáním objednávek. Produkt může být bez skladové zásoby a přesto objednatelný jako `preorder` nebo `backorder`. Google u obou stavů výslovně uvádí, že obchod objednávky přijímá; `out_of_stock` naopak znamená, že objednávky nepřijímá nebo produkt nelze koupit. Úvodní definice je proto nepravdivá právě pro dva stavy, které článek později vysvětluje správně.

**Důkaz:** [Google Merchant Center — Availability](https://support.google.com/merchants/answer/6324448?hl=en) (definice `out_of_stock`, `preorder` a `backorder`).

**Konkrétní oprava:** V poli `answer`, v prvním odstavci a v závěru nahradit definici například větou: „Skladovost říká, zda je produkt fyzicky dostupný nyní; stav dostupnosti navíc určuje, zda a v jakém režimu obchod přijímá objednávky. Dodací lhůta říká, kdy zákazník zboží dostane.“ Krátká odpověď musí po změně zůstat v rozsahu 40–60 slov.

### 2. [BLOCKER] — zásadní: u `in_stock` chybí územní podmínka Googlu

**Citovaná pasáž:** „`in_stock` | Produkt lze koupit a jste schopni ho včas odeslat“.

**Problém:** Definice vynechává podmínku, že obchod musí umět produkt doručit do všech oblastí, které u nabídky podporuje v produktových datech a nastavení dopravy. Google dále vyžaduje uvést případná omezení doručení na vstupní stránce. Produkt dostupný jen v části cílového území tedy nelze bez dalšího poslat jako obecné `in_stock`; podle dostupnosti dané funkce je nutné použít regionální dostupnost, sjednotit nastavení dopravy nebo nabídku pro nepodporované oblasti vyloučit.

**Důkaz:** [Google Merchant Center — Availability](https://support.google.com/merchants/answer/6324448?hl=en) (u `in_stock`: doručení do všech míst podporovaných v produktových datech a dopravě; požadavek na viditelné omezení doručení) a [Google Merchant Center — Inaccurate availability](https://support.google.com/merchants/answer/9773127?hl=en) (celé cílové území, regionální dostupnost a omezení doručení).

**Konkrétní oprava:** Řádek tabulky změnit například na: „Produkt lze koupit, umíte ho včas odeslat a doručit do všech oblastí, které u nabídky podporujete.“ Do odstavce pod tabulkou nebo do zdrojové karty doplnit: „Omezení doručení musí být na stránce viditelné a musí odpovídat nastavení dopravy či regionální dostupnosti v Merchant Center.“

### 3. [BLOCKER] — zásadní: Google kompatibilní feed OpenAI nelze použít bez potvrzení OpenAI

**Citovaná pasáž:** „U Google kompatibilního formátu se ale předobjednávka zapisuje `preorder` bez podtržítka a `unknown` se nepřijímá.“

**Problém:** Syntaxe je popsána správně, ale chybí provozní podmínka: OpenAI dovoluje tento kompatibilní profil použít jen poté, co jej výslovně potvrdí pro konkrétní registrovaný feed. Schválení partnera a potvrzení konkrétního formátu nejsou v dokumentaci formulována jako totéž. Bez této věty může schválený partner mylně předpokládat, že lze automaticky poslat libovolný Google feed.

**Důkaz:** [OpenAI Developers — Products, Google-compatible product data feeds](https://developers.openai.com/commerce/specs/file-upload/products) („Use this format only after OpenAI confirms it for your registered feed.“).

**Konkrétní oprava:** Větu změnit na: „Pokud OpenAI pro váš registrovaný feed výslovně potvrdí Google kompatibilní profil, zapisuje se v něm předobjednávka `preorder` bez podtržítka a hodnota `unknown` se nepřijímá.“

### 4. [BLOCKER] — zásadní: u odhadovaného `availability_date` chybí formát, limit a zákaz rozsahu

**Citovaná pasáž:** „Datum musí být viditelné na stránce a může být odhadované, pokud přesný den zatím neznáte.“ V předchozí části článek doporučuje na stránce „poctivé rozpětí“.

**Problém:** Google dovoluje odhad, ale hodnota ve feedu musí být jedno datum a čas v ISO 8601, nejvýše jeden rok do budoucna; datumový rozsah se posílat nemá. Na vstupní stránce lze odhad zobrazit méně přesně, například jen měsícem. Bez rozlišení stránky a feedu může čtenář poslat rozpětí nebo příliš vzdálené datum jako `availability_date`.

**Důkaz:** [Google Merchant Center — Availability date](https://support.google.com/merchants/answer/6324470?hl=en) (ISO 8601; nejvýše rok dopředu; nepoužívat rozsah; odhad aktualizovat po potvrzení termínu).

**Konkrétní oprava:** Doplnit: „Do `availability_date` pošlete jediný odhadovaný termín v ISO 8601, nejvýše rok dopředu; rozsah Google nepřijímá. Na stránce můžete odhad zákazníkovi vyjádřit méně přesně, například měsícem, a po potvrzení termín zpřesnit.“ U doporučení „poctivé rozpětí“ výslovně uvést, že jde o viditelný text pro zákazníka, nikoli hodnotu atributu `availability_date`.

### 5. [WARNING] — drobný: úvod přehání povinnost zapsat dodací lhůtu do produktových dat

**Citovaná pasáž:** „E-shop potřebuje obojí ukázat na stránce a promítnout do dat, která posílá Googlu, srovnávačům nebo nákupním službám.“

**Problém:** Pro Google je dostupnost v produktových datech povinná, ale `OfferShippingDetails` ve strukturovaných datech povinné není. `availability_date` je povinné jen u `preorder` a `backorder`. Dodací údaje lze navíc u Googlu řešit globální dopravní politikou na úrovni `Organization` nebo v Merchant Center. Současná obecná věta zní jako univerzální technická povinnost pro každý produkt a každou službu.

**Důkaz:** [Google Search Central — Merchant listing structured data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing) (`OfferShippingDetails` není povinné; Google doporučuje globální dopravní politiku) a [Google Merchant Center — Availability date](https://support.google.com/merchants/answer/6324470?hl=en) (`availability_date` je povinné při `preorder` a `backorder`).

**Konkrétní oprava:** Přeformulovat na: „E-shop má obojí ukázat zákazníkovi. Stav dostupnosti musí správně promítnout do používaných produktových dat; dodací lhůtu doplní způsobem, který dané napojení podporuje. U Googlu je datum dostupnosti povinné pro `preorder` a `backorder`, zatímco podrobnosti dopravy lze uvést na úrovni nabídky nebo globální dopravní politiky.“

### 6. [WARNING] — drobný: zkrácená ukázka není způsobilá pro dopravní rozšíření Googlu

**Citovaná pasáž:** „Následující zkrácený příklad říká, že je produkt skladem, zpracování trvá nula až jeden den a přeprava jeden až tři dny:“

**Problém:** Samotné hodnoty `handlingTime`, `transitTime` a `unitCode: "DAY"` jsou správně. Pokud však má blok sloužit jako podklad pro dopravní rozšíření výsledku Googlu, chybí v `OfferShippingDetails` povinný `shippingRate` s cenou a měnou. Celému `Product` zároveň chybí povinné `image` pro způsobilost obchodního výsledku. Označení „zkrácený příklad“ riziko zmírňuje, ale následná věta vybízí čtenáře hodnoty doplnit a neříká, co je záměrně vynecháno.

**Důkaz:** [Google Search Central — Merchant listing structured data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing) (povinné `Product.image`; pro dopravní rozšíření povinné `deliveryTime`, `shippingDestination` a `shippingRate`).

**Konkrétní oprava:** Buď do příkladu doplnit skutečný `image` a ukázkový `shippingRate` s `currency: "CZK"`, nebo bezprostředně před kód přidat jasné upozornění: „Ukázka demonstruje jen časové vlastnosti schema.org; není úplnou ukázkou pro obchodní ani dopravní rozšíření Googlu.“ Pro praktický návod je vhodnější první možnost a následné ověření v nástroji Rich Results Test.

### 7. [WARNING] — drobný: OpenAI nevyžaduje, aby URL vždy přímo předvolila variantu

**Citovaná pasáž:** „Každá varianta má mít vlastní cenu, dostupnost, identifikátor a adresu, která ji umí přímo předvolit.“ (FAQ) a „OpenAI ve svém feedu obdobně požaduje samostatný řádek každé varianty s vlastním `item_id`, adresou, cenou a stavem.“

**Problém:** Požadavek na přímo předvolitelnou odlišnou URL platí u variant Googlu. OpenAI vyžaduje samostatný řádek varianty, jedinečné `item_id` a povinné pole `url`, ale výslovně říká, že URL má mít variantu předvolenou „when possible“. Formulace v FAQ spojuje přísnější podmínku Googlu s OpenAI bez této výjimky.

**Důkaz:** [Google Search Central — Product variant structured data](https://developers.google.com/search/docs/appearance/structured-data/product-variants) (každá varianta přímo předvolitelná odlišnou URL) a [OpenAI Developers — Products](https://developers.openai.com/commerce/specs/file-upload/products) (`url`: produktová stránka s předvolenou variantou „when possible“; samostatný řádek a jedinečné `item_id` pro variantu).

**Konkrétní oprava:** Rozdělit požadavky podle platformy: „Google vyžaduje, aby šla každá varianta přímo předvolit odlišnou URL. OpenAI vyžaduje samostatný řádek a jedinečné `item_id`; URL má předvolit variantu, pokud je to technicky možné.“ Stejné rozlišení doplnit do FAQ.

## Ověřeno bez nálezu

- Google skutečně rozlišuje `in_stock`, `out_of_stock`, `preorder` a `backorder`; `build_to_order` je zvláštní hodnota jen pro inzerci vozidel. Článek mluví o čtyřech běžných hodnotách pro e-shopy, což je přiměřené.
- `availability_date` je u `preorder` a `backorder` povinné, používá ISO 8601, může být odhadované nejvýše rok dopředu, nesmí být rozsahem a má být viditelné na vstupní stránce. Článek netvrdí, že lze rozsah poslat do feedu.
- Požadavek shody dostupnosti mezi stránkou, případnými strukturovanými daty, pokladnou a produktovým zdrojem i riziko zamítnutí produktu odpovídají dokumentaci Googlu.
- `Offer.availability`, `OfferShippingDetails`, `ShippingDeliveryTime`, `handlingTime`, `transitTime`, `ProductGroup`, `hasVariant`, `variesBy` a `productGroupID` jsou použity významově správně.
- Upozornění na méně časté a méně spolehlivé procházení dynamicky vytvořených strukturovaných dat odpovídá dokumentaci variant Googlu.
- OpenAI nativní profil přijímá `in_stock`, `out_of_stock`, `pre_order`, `backorder` a `unknown`; Google kompatibilní profil používá `preorder` a `unknown` nepřijímá. Hodnoty `pre_order` a `backorder` samy nenaplánují budoucí změnu stavu.
- OpenAI aktuálně zpřístupňuje onboarding produktových feedů schváleným partnerům, doporučuje celý feed jednou denně a změny během dne přes API. Dostupnost skutečně uvádí mezi hledisky pro řazení obchodníků; zároveň negarantuje zobrazení.
- Všechny tři vnitřní odkazy na související články mají odpovídající slug a CTA vede na existující `/pack/`.
- CTA odpovídá zdroji pravdy `src/content/pages/pack.ts`: název AI SEO Wireframe Pack, cena 1 490 Kč včetně DPH, sedm typů stránek a osmá kapitola k aplikaci. Nejde o generickou výzvu ke kontaktu.
- `answer` má 49 slov, meta description 127 znaků a `seoTitle` 47 znaků. Datum 26. září 2026 je ukotvené a odpovídá zadanému roku.

## Primární zdroje použité při nezávislé kontrole

- [Google Merchant Center — Availability](https://support.google.com/merchants/answer/6324448?hl=en)
- [Google Merchant Center — Availability date](https://support.google.com/merchants/answer/6324470?hl=en)
- [Google Merchant Center — Inaccurate availability](https://support.google.com/merchants/answer/9773127?hl=en)
- [Google Search Central — Merchant listing structured data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)
- [Google Search Central — Product variant structured data](https://developers.google.com/search/docs/appearance/structured-data/product-variants)
- [OpenAI Developers — Get Started, Agentic Commerce](https://developers.openai.com/commerce/guides/get-started)
- [OpenAI Developers — Products](https://developers.openai.com/commerce/specs/file-upload/products)
- [OpenAI Help Center — Shopping with ChatGPT Search](https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search)

## C5b — doověření zásadních oprav

### 1. Definice skladovosti, režimu objednávky a dodací lhůty — OBSTÁLO

Pole `answer`, úvod i závěr nyní důsledně rozlišují fyzickou skladovost, režim přijetí objednávky a dodací lhůtu. Formulace už netvrdí, že pouze skladovost rozhoduje o objednatelnosti produktu, takže není v rozporu se stavy `preorder` a `backorder`, při nichž obchod přijímá objednávky bez okamžité skladové zásoby. Primární zdroj: [Google Merchant Center — Availability](https://support.google.com/merchants/answer/6324448?hl=en).

### 2. Úplná definice `in_stock` — OBSTÁLO

Tabulka nyní uvádí všechny rozhodné části: produkt lze koupit, včas odeslat a doručit do všech oblastí podporovaných u nabídky. Samostatný odstavec navíc požaduje viditelná omezení doručení a shodu s nastavením dopravy nebo regionální dostupností v Merchant Center. To odpovídá podmínkám Googlu. Primární zdroje: [Google Merchant Center — Availability](https://support.google.com/merchants/answer/6324448?hl=en) a [Inaccurate availability](https://support.google.com/merchants/answer/9773127?hl=en).

### 3. Potvrzení Google kompatibilního profilu OpenAI — OBSTÁLO

Článek nyní výslovně podmiňuje použití profilu kompatibilního s Google Merchant Center tím, že jej OpenAI potvrdí pro konkrétní registrovaný feed. Teprve potom vysvětluje zápis `preorder` a nepřijetí hodnoty `unknown`. Podmínka odpovídá dokumentaci OpenAI. Primární zdroj: [OpenAI Developers — Products, Google-compatible product data feeds](https://developers.openai.com/commerce/specs/file-upload/products).

### 4. Pravidla `availability_date` — OBSTÁLO

Článek nyní jasně odděluje hodnotu feedu od viditelného textu stránky. Pro feed požaduje jediný odhadovaný termín v ISO 8601, nejvýše rok dopředu, a výslovně zakazuje rozsah. Pro zákazníka dovoluje méně přesný odhad, například měsíc, s následným zpřesněním. Blok časté chyby ještě potvrzuje, že rozpětí patří jen do viditelného textu a do `availability_date` jeden termín. Primární zdroj: [Google Merchant Center — Availability date](https://support.google.com/merchants/answer/6324470?hl=en).

**Výsledek C5b:** všechny čtyři zásadní opravy obstály; v kontrolovaném rozsahu nezůstává žádný blocker.
