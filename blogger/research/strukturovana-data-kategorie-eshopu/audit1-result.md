## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je fakticky blízko zadání a dobře pracuje s hlavní korekcí premisy. Před publikací ale potřebuje opravit absolutní formulace o funkcích Googlu, zpřesnit práci s vlastním měřením a snížit riziko kanibalizace vůči existujícím článkům.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Absolutní tvrzení nad rámec dokumentace: „karusel z něj nebude“

**Citace:**

> „Proč e-shopová kategorie karusel nedostane“

> „ItemList na kategorii se dá zapsat, ale karusel z něj nebude.“

> „Karusel z toho ale nebude.“

**Problém:**  
Research říká, že Google dokumentuje Carousel z ItemList jen pro čtyři typy obsahu: Course list, Movie, Recipe, Restaurant. Produkty mezi nimi nejsou. To je v pořádku. Článek ale místy přechází z přesného „Google to pro produkty nedokumentuje / produktová kategorie nesplňuje dokumentované podmínky“ do absolutního „nebude“. To je tvrdší tvrzení než zdroj.

**Návrh opravy:**

- H2 změnit například na:

> „Proč produktová kategorie nesplňuje dokumentované podmínky karuselu“

- Větu změnit na:

> „ItemList na kategorii se dá zapsat, ale u produktů z něj podle dokumentace Googlu nelze odvozovat nárok na karusel.“

Nebo stručněji:

> „Pro produktovou kategorii Google karusel z ItemList nedokumentuje, proto ho neočekávejte jako výsledek implementace.“

---

## 2. [BLOCKER] Absolutní tvrzení u CollectionPage: „funkci ve výsledcích za něj nedostanete“

**Citace:**

> „Zapsat ho můžete, ale funkci ve výsledcích za něj nedostanete.“

**Problém:**  
Správný závěr je: Google pro CollectionPage nedokumentuje konkrétní funkci ve výsledcích. Formulace „nedostanete“ je příliš definitivní a může znít jako tvrzení o tom, co Google nikdy neudělá. Zadání výslovně říká netvrdit, že CollectionPage nebo ItemList „nefungují“.

**Návrh opravy:**

> „Zapsat ho můžete, ale Google pro CollectionPage nedokumentuje žádnou konkrétní funkci ve výsledcích vyhledávání.“

Případně:

> „Zapsat ho můžete, ale nelze za něj očekávat dokumentovaný rich result od Googlu.“

---

## 3. [BLOCKER] Zobecnění z malého vlastního měření na „české e-shopy“

**Citace:**

> „na českých e-shopech kategorie sortiment strojově nepopisují skoro vůbec.“

**Problém:**  
Podklad říká: vlastní měření 14 kategorií na Shoptetu. Z toho nelze bezpečně tvrdit stav „na českých e-shopech“ obecně. Je to přehnaná generalizace nad rámec vzorku.

**Návrh opravy:**

> „V našem vzorku 14 měřených kategorií na Shoptetu kategorie sortiment strojově nepopisovaly vůbec.“

Nebo:

> „V našem měření na Shoptetu jsme u 14 kategorií nenašli ItemList, CollectionPage ani Product.“

---

## 4. [BLOCKER] Nekonzistentní práce se vzorkem: 15 e-shopů vs. 14 kategorií

**Citace:**

> „V našem měření patnácti e-shopů na Shoptetu nebyl na žádné ze čtrnácti měřených kategorií ItemList, CollectionPage ani Product…“

> „vlastní měření 15 e-shopů na Shoptetu, 8. 8. 2026“

**Problém:**  
Článek střídá „15 e-shopů“ a „14 měřených kategorií“. To může být pravda, ale bez vysvětlení to působí jako chyba ve vzorku. V zadání je jako klíčový hák uvedeno hlavně „14 měřených kategorií“.

**Návrh opravy:**  
Buď držet všude stejný údaj:

> „Ve vlastním měření 14 kategorií na Shoptetu z 8. 8. 2026 jsme nenašli ItemList, CollectionPage ani Product ani na jedné kategorii.“

Nebo pokud je nutné zachovat 15 e-shopů, doplnit vysvětlení:

> „Měření zahrnovalo 15 e-shopů na Shoptetu; pro tuto část jsme vyhodnocovali 14 kategorií.“

---

## 5. [BLOCKER] Riziko kanibalizace: title/slug jsou příliš obecné pro existující články o kategoriích a strukturovaných datech

**Citace frontmatteru:**

> `title: "Kategorie e-shopu: co z ItemList Google doopravdy čte"`

> `slug: "strukturovana-data-kategorie-eshopu"`

**Problém:**  
Článek má cílové klíčové slovo **„collectionpage itemlist kategorie“**, ale viditelný titul i slug míří obecně na „strukturovaná data kategorie e-shopu“. Tím se přibližuje existujícím článkům:

- `/blog/kategorie-texty-pro-ai/`
- `/blog/strukturovana-data-pro-ai/`
- `/blog/shoptet-strukturovana-data-mereni/`

Obsahově se článek má odlišovat tím, že řeší **CollectionPage + ItemList + BreadcrumbList pro kategorii a dokumentaci Googlu**, ne obecně strukturovaná data kategorií.

**Návrh opravy:**

- Slug změnit na konkrétnější:

> `collectionpage-itemlist-kategorie-eshopu`

- Viditelný title změnit například na:

> `CollectionPage a ItemList v kategorii e-shopu`

- SEO title upravit tak, aby cílový dotaz byl vepředu:

> `CollectionPage ItemList kategorie e-shopu: co Google čte`

- Do úvodu přidat rozlišovací větu:

> „Tento návod neřeší psaní textu kategorie ani obecnou validaci strukturovaných dat; zaměřuje se jen na to, co u kategorií znamenají BreadcrumbList, ItemList a CollectionPage podle dokumentace Googlu.“

---

## 6. [BLOCKER] Tvrzení o Google průvodci pro generativní AI není ve zdrojích přímo doložené

**Citace:**

> „Google ve svém průvodci k optimalizaci pro generativní AI uvádí, že pro AI funkce není potřeba žádný speciální typ strukturovaných dat.“

**Problém:**  
Tvrzení je podle zadání správné, ale ve finálním seznamu zdrojů je doložena galerie strukturovaných dat, Carousel a Breadcrumb. Přímý zdroj pro Google AI guide chybí. Navíc zadání zmiňuje interní článek `chatgpt-jako-vyhledavac-dsa`, zatímco článek odkazuje na `/blog/aeo-geo-je-porad-seo/`.

**Návrh opravy:**

- Přidat do zdrojů přímý odkaz na příslušný Google dokument k AI funkcím.
- Sjednotit interní odkaz podle skutečného pilíře. Pokud má být zdrojem článek `chatgpt-jako-vyhledavac-dsa`, změnit odkaz z:

> `/blog/aeo-geo-je-porad-seo/`

na správný interní článek.

- Pokud přímý Google zdroj nechcete uvádět, tvrzení v textu zeslabit a odkázat pouze na interní rozbor.

---

# 2. Doporučení

## 1. [WARNING] FAQ otázka „Čte Google CollectionPage?“ je nepřesná

**Citace:**

> `q: "Čte Google CollectionPage?"`

**Problém:**  
Otázka může naznačovat, že Google CollectionPage vůbec nečte. To ale není ověřitelný závěr. Správné je řešit dokumentovanou funkci, ne samotné čtení/parsing.

**Návrh opravy:**

> `q: "Dokumentuje Google funkci pro CollectionPage?"`

A odpověď upravit na:

> „Google pro CollectionPage nedokumentuje konkrétní funkci ve výsledcích vyhledávání. CollectionPage je platný typ schema.org, ale není v galerii strukturovaných dat Googlu ani v dokumentaci ke Carouselu.“

---

## 2. [WARNING] „poslední článek řetězce“ je terminologicky matoucí

**Citace:**

> „item, tedy adresa, je povinná kromě posledního článku řetězce“

> „kromě posledního článku řetězce — tam si Google…“

**Problém:**  
V češtině „článek“ evokuje blogový článek. U BreadcrumbList jde o položku drobečkové navigace.

**Návrh opravy:**

> „kromě poslední položky řetězce“

Nebo:

> „kromě poslední položky drobečkové navigace“

---

## 3. [WARNING] Tutorial slibuje ItemList/CollectionPage, ale ukázka JSON-LD řeší jen BreadcrumbList

**Citace:**

> `seoTitle: "CollectionPage a ItemList pro kategorie e-shopu (2026)"`

> „Kdo chce doplnit i seznam produktů, může přidat ItemList — ale s realistickým očekáváním:“

**Problém:**  
Cílový dotaz je **collectionpage itemlist kategorie**. Čtenář bude čekat minimálně ukázku, jak by ItemList pro kategorii vypadal — jasně označenou jako **schema.org zápis bez dokumentované funkce karuselu pro produkty u Googlu**. Teď článek ukazuje jen BreadcrumbList.

**Návrh opravy:**  
Přidat krátkou volitelnou ukázku ItemList pro produkty, ale s výrazným varováním:

> „Následující ukázka je strojově čitelný seznam podle schema.org. Není to návod na získání Carousel rich resultu pro produkty, protože ten Google pro produktové kategorie nedokumentuje.“

U ukázky držet minimum: `ItemList`, `itemListElement`, `ListItem`, `position`, `url` nebo vložený `Product` jen pokud odpovídá viditelnému obsahu stránky.

---

## 4. [WARNING] Meta description je fakticky dobrá, ale stylisticky neobratná

**Citace:**

> `description: "Ze tří typů doporučovaných pro kategorie má Google dokumentovanou funkci jen jeden. Co ukázalo měření 14 kategorií a co na kategorii zapsat."`

**Problém:**  
„má … funkci jen jeden“ je gramaticky trochu tvrdé a neříká, který typ to je. Délka je v pořádku, ale šlo by zpřesnit.

**Návrh opravy:**

> `description: "BreadcrumbList má u Googlu dokumentovanou funkci. ItemList a CollectionPage u kategorií e-shopu vyžadují realistická očekávání."`

Nebo více k měření:

> `description: "BreadcrumbList, ItemList a CollectionPage u kategorie e-shopu: co Google dokumentuje, co ne a co ukázalo měření 14 kategorií."`

---

## 5. [WARNING] Některé formulace příliš jistě připisují hodnotu „strojům“

**Citace:**

> „Seznam produktů s pozicemi a adresami je pro stroje jednoznačnější než odkazy v HTML.“

**Problém:**  
Je to pravděpodobné a rozumné, ale jako obecné tvrzení je to hůř doložitelné. Bezpečnější brand formulace má být „může pomoct“, ne „je jednoznačnější“.

**Návrh opravy:**

> „Seznam produktů s pozicemi a adresami může strojům pomoct lépe pochopit, jaké položky stránka vypisuje.“

---

## 6. [TIP] Doplnit jasné rozlišení vůči článku o textech kategorií

**Citace:**

> „jak psát samotný text kategorie, texty kategorií pro AI“

**Problém:**  
Interní odkaz je dobrý, ale kvůli kanibalizaci by měl být rozdíl mezi články explicitnější.

**Návrh opravy:**  
Přidat jednu větu před odkaz:

> „Pokud řešíte obsah a argumentaci v textu kategorie, patří to do samostatného návodu; tady řešíme jen strojově čitelný zápis typů BreadcrumbList, ItemList a CollectionPage.“

---

## 7. [TIP] U validace přesněji oddělit Google Rich Results Test a schema.org validátor

**Citace:**

> „Vložte adresu kategorie do testu bohatých výsledků nebo do validátoru schema.org…“

**Problém:**  
Rich Results Test je relevantní hlavně pro typy, které Google podporuje jako rich result — zde BreadcrumbList. CollectionPage v něm nelze interpretovat jako podporovanou funkci Googlu.

**Návrh opravy:**

> „BreadcrumbList ověřte v Google Rich Results Testu. ItemList nebo CollectionPage ověřujte spíš ve schema.org validátoru; validní zápis ale neznamená, že Google zobrazí konkrétní funkci.“

---

# 3. Co je v pořádku

- **Krátká odpověď ve frontmatteru je dobrá:** má cca 43 slov, dává samostatný smysl a začíná pozitivním vysvětlením, ne negací.
- **Hlavní faktická korekce premisy je správná:** BreadcrumbList má dokumentovanou funkci, ItemList Carousel je omezený na čtyři typy obsahu a CollectionPage není v galerii strukturovaných dat Googlu.
- **Ukázka BreadcrumbList JSON-LD je syntakticky v pořádku** a odpovídá zadání: obsahuje `itemListElement`, `position`, `name`, `item`; poslední položka může být bez `item`.
- **Článek neslibuje garantovanou AI viditelnost ani pozice.**
- **CTA je konkrétní a vede na produkty:** AI SEO audit za 3 600 Kč a AI SEO Wireframe Pack za 1 490 Kč.
- **Interní odkazy jsou relevantní**, jen potřebují lépe odlišit účel článku kvůli kanibalizaci.