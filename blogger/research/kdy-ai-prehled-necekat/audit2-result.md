## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

### [BLOCKER] Do textu se vrátily dříve odstraněné nepodložené signály

> „Stejný dotaz se chová různě podle času, zařízení i regionu.“

Problém: zařízení a region byly podle zadání záměrně vypuštěny jako nedoložené signály. Tady se vracejí bez zdroje.

**Oprava:**
> „Stejný dotaz se může chovat různě v čase. Jeden průchod proto není zjištění.“

---

### [WARNING] Tvrzení o pozorováních třetích stran je bez konkrétního zdroje

> „Pozorování třetích stran naznačují, že u dotazů, kde člověk míří na konkrétní web nebo chce rovnou nakoupit, se panel objevuje méně často.“

Problém: článek říká, že existují pozorování třetích stran, ale nejmenuje žádné. Závěrečná poznámka zdroj nenahrazuje.

**Oprava:** buď doplnit konkrétní zdroj přímo za větu, nebo zjemnit bez odkazu:
> „V praxi se často vyplatí tyto dotazy kontrolovat zvlášť: u navigačních a velmi transakčních hledání nemusí shrnutí z více zdrojů přidávat stejnou hodnotu jako u vysvětlení nebo srovnání.“

---

### [WARNING] Čtenář hledající „kdy se spustí AI přehled“ nedostane explicitní odpověď, zda ho může spustit sám

> „Zbývá ruční kontrola“

Problém: článek dobře vysvětluje princip zobrazení, ale chybí přímá věta typu „AI přehled nejde zapnout ručně“. To je pro tento search intent důležité.

**Oprava:** přidat krátký odstavec nebo FAQ:
> „AI přehled nejde u konkrétního dotazu ručně zapnout ani vyžádat. Web může obsah připravit tak, aby byl pro shrnutí srozumitelný, ale samotné zobrazení panelu rozhodují systémy Googlu pro konkrétní hledání.“

---

### [WARNING] Číselná statistika „0“ je zbytečně absolutní a snadno napadnutelná

> `value: "0"`  
> `label: "zveřejněných typů dotazů, u kterých panel nebude"`

Problém: „0 zveřejněných typů“ působí jako přesná inventura celé dokumentace Googlu. Bez opory v textu je to riskantní.

**Oprava:**
> `value: "bez výčtu"`  
> `label: "Google neuvádí uzavřený seznam dotazů bez AI přehledu"`

---

### [WARNING] Search Console část je formulovaná příliš definitivně

> „Search Console na tuhle otázku odpověď nemá.“

Problém: následující věta už říká, že určitý report existuje a něco vykazuje. Přesnější je říct, že neodpoví na dotazovou úroveň.

**Oprava:**
> „Search Console na tuhle otázku neodpoví na úrovni konkrétního dotazu.“

---

### [WARNING] Název reportu v Search Console potřebuje ověřit proti českému UI / dokumentaci

> „Report Přehled výkonu v generativní AI vykazuje imprese, stránky, země a datum…“

Problém: pokud nejde o oficiální český název reportu k 30. 8. 2026, článek bude působit nepřesně. Navíc „rozpady“ je interní analytický žargon.

**Oprava:**
> „Report pro výkon ve funkcích s generativní AI ukazuje imprese, stránky, země a datum…“

nebo použít přesný oficiální název z rozhraní.

---

### [WARNING] Věta „neúspěch je panel bez vás“ je moc absolutní

> „Neúspěch je až situace, kdy panel běží bez vás.“

Problém: nemusí to být neúspěch vždy — záleží na hodnotě dotazu, cíli stránky a zdrojích panelu.

**Oprava:**
> „Problém k řešení je hlavně situace, kdy panel běží u vašich důležitých informačních dotazů a váš web v něm nefiguruje.“

Stejnou úpravu udělat i ve Shrnutí:
> „Neúspěch je panel, který u vašich informačních dotazů běží bez vás.“

---

### [TIP] Kostrbatá věta po přepisu

> „Krátká odpověď nahoře pomáhá i člověku, který na stránku přijde z klasického výsledku — jen se jí u dotazu bez panelu nedá nic vyhrát navíc.“

Problém: „nedá nic vyhrát navíc“ zní hovorově a nejasně.

**Oprava:**
> „Krátká odpověď nahoře pomáhá i člověku, který přijde z klasického výsledku. U dotazu bez panelu ale nepřináší výhodu v AI přehledu, protože se žádný nezobrazil.“

---

### [TIP] Nepřesná formulace u zdrojů panelu

> „Jestli tam jste vy, konkurence, nebo úplně cizí web.“

Problém: „jste vy“ je nepřesné — v panelu je zdroj / web / stránka, ne firma jako osoba.

**Oprava:**
> „Jestli je mezi zdroji váš web, konkurence, nebo úplně jiné weby.“

---

### [TIP] „Rozpady“ je zbytečný analytický žargon

> „dotazy mezi jeho rozpady nejsou“

Problém: pro běžného čtenáře hůř srozumitelné.

**Oprava:**
> „dotazy mezi dostupnými členěními nejsou“

nebo:
> „report nelze rozdělit podle dotazů“

---

### [TIP] Frontmatter keyword neobsahuje přesně deklarovaný cílový dotaz

> Cílové klíčové slovo: „ai overviews trigger kdy“  
> `keywords:` neobsahuje tuto frázi ani její jasnou variantu.

Problém: článek míří česky, což je správně, ale pokud je interní cílový dotaz opravdu „ai overviews trigger kdy“, měl by být pokryt aspoň jednou přirozenou formulací — bez zbytečného anglicismu v těle.

**Oprava:** přidat do `keywords` českou variantu:
> `- "kdy se spustí AI Overview"`  
nebo ponechat bez angličtiny, pokud je cílem český dotaz „kdy se spustí AI přehled“.

---

## K odmítnutým připomínkám

### Podíl výskytů panelu

> „Zapisujte podíl výskytů“

Odmítnutí připomínky je podle mě oprávněné. Nejde o publikované číslo o četnosti panelu, ale o metodiku vlastního testování. Jen bych nepoužíval slovo „podíl“ v titulku kroku, pokud chcete snížit riziko nepochopení:

**Možná úprava:**
> „Zapisujte výsledek každého pokusu“

A v popisu ponechat:
> „kolikrát z kolika pokusů se panel objevil.“

### Slug

> `slug: "kdy-ai-prehled-necekat"`

Ponechání je obhajitelné. Slug odpovídá úhlu článku a není zavádějící. SEO titulek už pokrývá „Kdy se spustí AI přehled“. Neměnil bych, pokud nejde o pilířovou stránku pro obecný dotaz „kdy se spustí AI přehled“.