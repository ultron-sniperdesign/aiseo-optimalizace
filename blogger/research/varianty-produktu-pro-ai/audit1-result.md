## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Hodnotil jsem jen **věcnou správnost** a **aktuálnost pro rok 2026**. Článek je celkově dobře ukotvený v datech a měření, ale má několik blockerů: hlavně příliš obecné tvrzení o OpenAI, UI tvrzení bez UI ověření, přestřelené tvrzení o Heurece a neúplnou podmínku u Zboží.cz.

---

## Nálezy

### [BLOCKER] OpenAI je v úvodní odpovědi uvedené bez zásadních podmínek dostupnosti

> „Google, české srovnávače i OpenAI s ní pracují přes tři údaje…“

> „…ve feedech přes item_group_id, ITEMGROUP_ID nebo group_id.“

Problém: Podklady k OpenAI výslovně říkají dvě důležité podmínky:  
- onboarding product feedů v ChatGPT je k 3. 10. 2026 dostupný jen **schváleným partnerům**,  
- standardní OpenAI-format upload aktuálně cílí na **USA**.

V článku se tyto podmínky objeví až později, ale frontmatter `answer` má dávat samostatný smysl. V této podobě může český e-shop nabýt dojmu, že OpenAI feed s `group_id` je běžně použitelný kanál.

**Návrh opravy:**  
V `answer` OpenAI buď vypustit, nebo doplnit podmínku:

> „OpenAI má ve specifikaci pro schválené partnery obdobnou vazbu `group_id`; standardní nahrání k 3. 10. 2026 cílí na USA.“

Stejnou opatrnost držet i v checklistu u položky „Vazba na skupinu“.

---

### [BLOCKER] Tvrzení o Search Console / Rich Results Testu stojí jen na dokumentaci, ne na UI ověření

> „Kód si ověříte v Testu rozšířených výsledků (Rich Results Test); kontroly variant do něj i do produktových reportů v Search Console Google přidal se zavedením podpory.“

> „Projeďte stránku Testem rozšířených výsledků. Kontroly variant má i v produktových reportech v Search Console.“

Problém: Brief výslovně uvádí, že řádek **Rozhraní (UI)** je prázdný. Podle pravidel tohoto kola nesmí článek tvrdit, co uživatel uvidí nebo zkontroluje v rozhraní, pokud je opora jen v dokumentaci/blogu.

Google blog sice uvádí podporu validace, ale to není totéž jako ověřené UI tvrzení.

**Návrh opravy:**  
Buď doplnit skutečné UI ověření do research, nebo formulaci změnit tak, aby nezněla jako ověřený praktický pokyn:

> „Google při zavedení podpory variant uvedl, že validaci doplnil do Testu rozšířených výsledků a produktových reportů Search Console. V tomto článku nebylo ověřováno, jak se kontroly zobrazují v konkrétním účtu.“

Ve Stepperu raději odstranit větu „Kontroly variant má i v produktových reportech v Search Console“, pokud nebude UI ověření.

---

### [BLOCKER] `ProductGroup`: věta „name je jediná povinná vlastnost“ je zavádějící vůči podmínkám Googlu

> „**`name`** skupiny je jediná povinná vlastnost `ProductGroup`.“

Problém: I pokud tato věta odpovídá úzkému čtení tabulky vlastností, v kontextu článku působí jako návod pro způsobilost u Googlu. Brief k podmínkám Googlu uvádí i další nutné podmínky: povinné vlastnosti `Product`/`Offer` pro merchant listing, jedinečný identifikátor varianty (`sku`/`gtin`), ID skupiny, shodu `productGroupID` a `inProductGroupWithID`, správnou kanonizaci a předvolitelnou adresu varianty.

Takto napsaná věta může vést k mylnému dojmu, že pro varianty stačí `ProductGroup.name`.

**Návrh opravy:**  
Rozlišit „povinnou vlastnost typu“ od „podmínek způsobilosti u Googlu“:

> „Samotné `name` nestačí pro použitelný zápis variant pro Google. Kromě názvu skupiny musí každá varianta splnit požadavky na `Product` a `Offer`, mít jedinečný identifikátor (`sku` nebo `gtin`), správnou adresu a konzistentní vazbu na skupinu přes `productGroupID` / `inProductGroupWithID`.“

---

### [BLOCKER] Heureka: „fragmenty jako jediné řešení“ je silnější než podklad

> „Heureka přitom ve specifikaci feedu pro varianty zobrazené na jedné stránce fragmenty doporučuje jako jediné řešení.“

Problém: Podklad říká, že Heureka u variant na jedné stránce bere / připouští fragmenty typu `#1`, `#2`. Neunese ale formulaci „jako jediné řešení“. Zároveň článek sám později doporučuje parametr jako společné řešení pro Google i Heureku.

**Návrh opravy:**  
Zjemnit a zpřesnit:

> „Heureka u variant zobrazených na jedné stránce připouští odlišení adresy fragmentem, například `#1` nebo `#2`. Pro Google to ale nestačí, protože část za `#` při indexaci nepoužívá. Pokud chcete řešení použitelné i pro Google, použijte parametr nebo samostatnou cestu.“

---

### [BLOCKER] Zboží.cz: chybí výjimka k definici varianty

> „Variantou rozumí nabídky stejného výrobce, řady, názvu a cenové hladiny, které se liší jedním parametrem.“

Problém: Brief u Zboží.cz uvádí i výjimku: variantní vazbu může určit výrobce, například „16 GB stříbrný“. Článek popisuje pravidlo bez této výjimky, čímž z něj dělá užší definici, než uvádí zdroj.

**Návrh opravy:**  
Doplnit do tabulky nebo poznámky:

> „Zboží.cz zároveň uvádí výjimku pro variantní vazby určené výrobcem, například kombinace typu kapacita + barva.“

---

### [WARNING] Tvrzení o `item_group_title` a `variant_option` bez dopadu na schválení je nedoloženě silné

> „Novější atributy `item_group_title` a `variant_option` jsou volitelné a dají se poslat doplňkovým zdrojem dat, aniž by ovlivnily schválení stávajících produktů.“

Problém: Podklady dokládají, že atributy jsou volitelné, pro všechny země a mají souvislost s konverzačními atributy. Nedokládají ale obecný slib, že jejich doplnění „neovlivní schválení stávajících produktů“.

To je provozní tvrzení o Merchant Center a mělo by být buď přesně doložené konkrétní nápovědou, nebo vypuštěné.

**Návrh opravy:**  

> „Atributy `item_group_title` a `variant_option` jsou volitelné a podle nápovědy se posílají spolu s `item_group_id`. Pokud je doplňujete přes doplňkový zdroj dat, ověřte si postup v aktuální nápovědě Merchant Center.“

---

### [WARNING] Shoptet: nadpis zobecňuje víc, než dovoluje vzorek

> „### Shoptet: adresa varianty funguje, skupina v datech chybí“

Problém: V těle článku je omezení uvedené správně: předvolba adresou byla ověřena na **dvou stránkách s jedním parametrem**. Brief výslovně říká, že nelze ověřit chování na všech šablonách ani u variant se dvěma a třemi parametry.

Nadpis ale zní obecně pro Shoptet jako platformu.

**Návrh opravy:**  

> „### Shoptet: na dvou testovaných stránkách předvolba adresou fungovala, skupina v datech chyběla“

Případně kratší:

> „### Shoptet ve vzorku: adresa varianty fungovala, skupina v datech chyběla“

---

### [WARNING] Upgates: část o sitemapě a XML feedech není v dodaném podkladu dostatečně doložená

> „Upgates v nápovědě uvádí, že každá varianta má vlastní adresu a do sitemapy i do XML feedů pro srovnávače se vkládá samostatně.“

Problém: V briefu je pro Upgates doloženo hlavně tvrzení „Každá varianta má vlastní URL adresu…“. Část o sitemapě a XML feedech pro srovnávače v dodaném souhrnu ověřených tvrzení výslovně není.

**Návrh opravy:**  
Buď doplnit přesnou pasáž z nápovědy Upgates do research, nebo zkrátit:

> „Upgates v nápovědě uvádí, že každá varianta má vlastní URL adresu.“

A další věty ponechat jen jako zjištění z MEGA DETAIL, nikoli jako obecné tvrzení o Upgates.

---

### [TIP] Několik formulací s „dnes“ je potřeba ukotvit datem

> „Co dnes umí Shoptet a Upgates…“

> „Standardní nahrání feedu dnes cílí na USA…“

Problém: Článek je sice publikovaný i aktualizovaný 3. 10. 2026 a většina údajů je dobře datovaná, ale slovo „dnes“ rychle zastarává. U OpenAI je to zvlášť citlivé, protože dostupnost feedů se může měnit.

**Návrh opravy:**  
Nahradit datovanou formulací:

> „k 3. 10. 2026“

Například:

> „Standardní nahrání feedu k 3. 10. 2026 cílí na USA…“

---

## Co je fakticky dobře

- Článek správně neprezentuje jeden přístup k variantám jako lepší; uvádí, že Google podporuje parametr i samostatné stránky.  
- Dobře rozlišuje vlastní měření Shoptetu a MEGA DETAIL od obecného tvrzení o platformách — až na uvedený nadpis u Shoptetu.  
- Správně upozorňuje na konflikt mezi fragmentem `#` a Googlem.  
- OpenAI je v hlavní části článku nakonec ukotvené správně: schválení partneři a USA jsou zmíněné, jen musí být podmínka doplněná i tam, kde má text fungovat samostatně.