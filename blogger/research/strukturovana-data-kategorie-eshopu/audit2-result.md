## 1. Blokující nálezy

1. [BLOCKER] **Příliš široké tvrzení o tom, že CollectionPage „není v dokumentaci Googlu“**

   **Citace:**
   > CollectionPage v dokumentaci Googlu vůbec není.

   Další výskyty:
   > V dokumentaci Googlu se CollectionPage neobjevuje…

   > Google ten typ ve své dokumentaci nemá.

   > CollectionPage v dokumentaci Googlu není…

   **Problém:**  
   Podle dodaných podkladů je ověřeno, že `CollectionPage` není v galerii podporovaných strukturovaných dat Googlu a není v dokumentaci ke karuselu. To ale není totéž jako „není v dokumentaci Googlu vůbec“. Je to zbytečně absolutní a snadno napadnutelné tvrzení.

   **Oprava:**  
   Všude zpřesnit na rozsah ověření, např.:

   > Google pro CollectionPage nedokumentuje žádnou funkci ve výsledcích vyhledávání. Typ se neobjevuje v galerii podporovaných strukturovaných dat ani v dokumentaci ke karuselu.

   Nebo kratší varianta:

   > CollectionPage je platný typ schema.org, ale Google pro něj ve své dokumentaci podporovaných strukturovaných dat nepopisuje žádnou funkci ve výsledcích.

2. [BLOCKER] **Nejasné tvrzení „dokumentovanou funkci má jen BreadcrumbList“ versus „ItemList má funkci karuselu“**

   **Citace:**
   > Dokumentovanou funkci má u Googlu jen BreadcrumbList. ItemList má funkci karuselu, ale jen pro kurzy, filmy, recepty a restaurace — produkty mezi nimi nejsou.

   **Problém:**  
   Věcně míříte správně, ale formulace je v samostatné odpovědi dvojznačná. ItemList u Googlu určitou dokumentovanou funkci má — host carousel — ale pouze v kombinaci s podporovanými typy obsahu. Pro produktovou kategorii e-shopu ji dokumentovanou nemá. Současné znění může působit jako vnitřní rozpor.

   **Oprava:**  
   Upravit zejména `answer` a první odstavec těla tak, aby bylo jasné, že se hodnotí **produktová kategorie e-shopu**, ne ItemList obecně:

   > Pro produktovou kategorii e-shopu má u Googlu dokumentovanou funkci hlavně BreadcrumbList. ItemList Google dokumentuje pro host carousel jen v kombinaci s kurzy, filmy, recepty a restauracemi; produkty mezi podporovanými typy nejsou. Pro CollectionPage Google žádnou funkci ve výsledcích nedokumentuje.

   Stejně zpřesnit i statistiku:

   > 1 ze 3 typů řešených v článku má pro produktovou kategorii e-shopu dokumentovanou funkci u Googlu — BreadcrumbList.

---

## 2. Doporučení

1. [WARNING] **„Běžně doporučují“ je nedoložené a opakuje se jako základ článku**

   **Citace:**
   > Pro kategorii e-shopu se běžně doporučují tři typy strukturovaných dat…

   **Problém:**  
   Tvrzení „běžně doporučují“ není doložené. Pokud nechcete citovat konkrétní návody třetích stran, je lepší formulaci neutralizovat.

   **Oprava:**
   > U kategorií e-shopu se často řeší tři typy strukturovaných dat: BreadcrumbList, ItemList a CollectionPage.

   Ještě bezpečnější:
   > Tento návod řeší tři typy strukturovaných dat, které se u kategorií e-shopu nejčastěji zmiňují: BreadcrumbList, ItemList a CollectionPage.

2. [WARNING] **Tvrzení o návodech třetích stran je příliš plošné**

   **Citace:**
   > Návody třetích stran často tvrdí, že CollectionPage „spouští rozšířené výsledky pro kategorie“ nebo „zlepšuje viditelnost výpisů“.

   **Problém:**  
   „Často tvrdí“ je bez vzorku nebo odkazu nedoložené. Navíc uvádíte konkrétní tvrzení v uvozovkách, což může působit jako citace, ale zdroj není uveden.

   **Oprava:**
   > Pokud návod tvrdí, že CollectionPage sama o sobě spouští rozšířený výsledek pro kategorii, ověřte si to proti dokumentaci Googlu. Opora pro takovou funkci v ní není.

3. [WARNING] **„Rozpor je horší než chybějící data“ je příliš absolutní**

   **Citace:**
   > To je horší než data neuvést vůbec…

   Další výskyty:
   > Rozpor je horší než chybějící data.

   **Problém:**  
   Směr je správný, ale „horší“ je silný hodnoticí soud. Google pracuje s pravidly kvality strukturovaných dat; nesoulad může vést k ignorování dat nebo nezpůsobilosti pro funkci, ale článek to tvrdí absolutně.

   **Oprava:**
   > Nesoulad mezi strukturovanými daty a viditelným obsahem může vést k tomu, že Google data nebude brát v úvahu nebo stránka nesplní podmínky dané funkce.

4. [WARNING] **„Stroj přečte“ zní jako jistota využití dat**

   **Citace:**
   > platný typ schema.org, který stroj přečte, i když z něj Google nic nevykresluje

   **Problém:**  
   Validní strukturovaná data neznamenají, že je Google nebo AI systém nutně použije. V článku jinak dobře rozlišujete validitu a dokumentovanou funkci, tady se to mírně rozmělňuje.

   **Oprava:**
   > platný typ schema.org, který je strojově zpracovatelný, i když z něj Google nedokumentuje konkrétní zobrazení ve výsledcích

5. [WARNING] **Dopad produktových stránek je tvrzený bez opory**

   **Citace:**
   > produktové stránky mají obvykle větší mezery s větším dopadem

   **Problém:**  
   „Větší dopad“ není v článku doložený. Navíc to mírně odtahuje pozornost ke článku o produktových stránkách.

   **Oprava:**
   > Na produktových stránkách se navíc často řeší typy dat s přímější vazbou na dokumentované funkce Googlu, například údaje o produktu, dostupnosti nebo vrácení zboží.

6. [TIP] **Použitelnost návodu: chybí krátká implementační poznámka pro reálnou kategorii**

   **Citace:**
   > Do HTML se JSON-LD vkládá do `<script type="application/ld+json">`; níže je samotný obsah skriptu:

   **Problém:**  
   Ukázky JSON-LD jsou proti dodané dokumentaci v pořádku. Člověk ale podle článku ještě nemusí vědět, že hodnoty musí generovat šablona dynamicky — název kategorie, pozice v drobečkové navigaci, URL produktů, aktuální stránka stránkování.

   **Oprava:**  
   Přidat krátký odstavec po ukázce ItemList:

   > V praxi by tyto hodnoty měla generovat šablona automaticky: názvy a URL z drobečkové navigace, pořadí produktů podle aktuálního výpisu a pouze produkty z právě zobrazené stránky stránkování nebo filtru.

7. [TIP] **CollectionPage je v článku hodně řešená, ale není jasně řečeno, proč není ukázka zápisu**

   **Citace:**
   > Kdo chce doplnit i seznam produktů, může přidat ItemList…

   **Problém:**  
   Titulek slibuje ItemList i CollectionPage. U ItemList je ukázka, u CollectionPage ne. To je obhajitelné, ale je dobré to výslovně říct, aby čtenář nečekal chybějící blok.

   **Oprava:**
   > Ukázku CollectionPage záměrně nepřidáváme jako doporučený krok pro Google Search: typ je platný ve schema.org, ale Google pro něj u kategorií e-shopu nedokumentuje žádnou funkci ve výsledcích. Pokud ho použijete, berte ho jen jako obecný popis typu stránky.

8. [TIP] **Drobná čeština: „microdatech“**

   **Citace:**
   > nebo ho vypisuje v microdatech

   **Problém:**  
   Nepřirozený tvar. V češtině bude srozumitelnější buď „mikrodatech“, nebo ponechat odborný termín „Microdata“.

   **Oprava:**
   > nebo ho vypisuje ve formátu Microdata

9. [TIP] **Drobná stylistika: „kategorii jich při procházení vydalo čtrnáct“**

   **Citace:**
   > Měřili jsme patnáct e-shopů na Shoptetu, kategorii jich při procházení vydalo čtrnáct…

   **Problém:**  
   „Vydalo kategorii“ je neobratné a může být nejasné.

   **Oprava:**
   > Měřili jsme patnáct e-shopů na Shoptetu; u čtrnácti se při procházení podařilo načíst kategorii.

10. [TIP] **Kanibalizace je celkově dobře ošetřená, jen jednu sekci držet víc u tématu kategorií**

   **Citace:**
   > Funkce Googlu versus strojová čitelnost

   **Hodnocení:**  
   Rozlišovací věta vůči článku o textech kategorií funguje. Interní odkazy na měření, produktové stránky, vrácení zboží i obecnou validaci jsou relevantní. Sekce „Funkce Googlu versus strojová čitelnost“ ale začíná hodně obecně a může se překrývat s `/blog/strukturovana-data-pro-ai/`.

   **Oprava:**  
   První větu navázat přímo na kategorie:

   > U kategorií e-shopu je tenhle rozdíl zásadní: BreadcrumbList míří na dokumentovanou funkci Googlu, zatímco ItemList a CollectionPage jsou tady hlavně obecný strojově čitelný popis.

---

## 3. Verdikt

**OPRAVIT PŘED PUBLIKACÍ**

Hlavní problém není struktura ani CTA — ty jsou v pořádku. Blokuje to přesnost formulací v samotném jádru článku: příliš široké tvrzení o absenci CollectionPage v dokumentaci Googlu a nejasné vymezení, že ItemList má dokumentovanou funkci pouze mimo produktové kategorie e-shopu. Po těchto úpravách bude článek publikovatelný.