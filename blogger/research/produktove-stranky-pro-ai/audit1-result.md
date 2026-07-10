**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

## Nálezy

### [BLOCKER] Zakázaný a nebezpečný claim v meta description
**Citace:**  
`description: "AI cituje produkty se strukturovanými daty; bez nich je e-shop pro nákupní dotazy neviditelný. Návod, co na produktovou stránku pro AI patří."`

**Problém:**  
„neviditelný“ je přehnané a věcně neobhajitelné. I bez strukturovaných dat může být produktová stránka dohledatelná, jen má nižší šanci na bohaté zobrazení a citaci v AI odpovědích.

**Návrh opravy:**  
Změnit na bezpečný claim, např.:  
`"Jak připravit produktovou stránku pro AI vyhledávání: strukturovaná data, GTIN, recenze, parametry a časté chyby."`

---

### [BLOCKER] „Bez strukturovaných dat AI nedokáže…“ je několikrát formulováno příliš absolutně
**Citace:**  
- `answer: "... Bez strukturovaných dat AI nedokáže spolehlivě přečíst cenu, dostupnost ani hodnocení..."`  
- `Klíčem jsou strukturovaná data. Bez nich AI nedokáže údaje o produktu bezpečně extrahovat...`  
- `Bez strukturovaných dat AI nedokáže spolehlivě přečíst cenu, dostupnost a hodnocení z prostého HTML.`

**Problém:**  
Absolutní tvrzení není přesné. AI a vyhledávače mohou některé údaje z HTML přečíst, ale méně spolehlivě a méně konzistentně. Článek má správný směr, ale přehání jistotu.

**Návrh opravy:**  
Všude změkčit formulace, např.:  
- „Bez strukturovaných dat AI **hůře a méně spolehlivě** přečte cenu, dostupnost a hodnocení.“  
- „… takže se produkt **může objevovat méně často** v nákupních AI odpovědích.“  
- „Strukturovaná data **pomáhají AI lépe pochopit obsah produktu**.“

---

### [BLOCKER] Zakázané/slabě on-brand anglicismy a termíny bez českého vysvětlení
**Citace:**  
- `Query-aligned obsah`  
- `CTR`  
- `visibility boost` se sice nevyskytuje doslova v těle, ale je v zadání explicitně hlídaný a článek používá podobný styl  
- `schema.org` bez vysvětlení v části „podle schema.org“

**Problém:**  
Brand voice má být česky, srozumitelně, bez zbytečných anglicismů. „Query-aligned obsah“ je mimo požadovaný slovník. Zkratka CTR je bez českého vysvětlení.

**Návrh opravy:**  
- `Query-aligned obsah, tedy obsah odpovídající reálným dotazům` → lépe rovnou `obsah odpovídající reálným dotazům`  
- `vyšší míru prokliku (CTR)` → první výskyt ponechat s vysvětlením, další už jen „míra prokliku“  
- `podle schema.org` → `podle slovníku schema.org pro strukturovaná data`

---

### [BLOCKER] Zakázané použití „vyhledávací roboty“ v kontextu AI je nepřesné
**Citace:**  
`Ověřte, že produktové stránky neblokujete pro AI vyhledávací roboty.`

**Problém:**  
V zadání je sice „crawler/bot“ nahrazováno „vyhledávací robot“, ale tady je problém věcný: nejde jen o „AI vyhledávací roboty“. Míchá se crawling pro indexaci, přístup robotů a využití obsahu v AI systémech. Navíc formulace působí jako technická zkratka bez vysvětlení.

**Návrh opravy:**  
Přepsat konkrétněji:  
`Ověřte, že produktové stránky neblokujete pro indexaci ve vyhledávačích a že jsou dostupné pro běžné vyhledávací roboty.`  
Pokud chcete řešit AI služby zvlášť, doplnit samostatnou větu s opatrností, ne jako jistotu.

---

### [BLOCKER] FAQ doporučuje FAQPage na produktové stránce bez kontextu k omezením Google
**Citace:**  
- `Doplňte 4 až 6 reálných otázek s krátkými odpověďmi a strukturovanými daty FAQPage.`  
- `plus strukturovaná data FAQPage`

**Problém:**  
Tohle je věcně rizikové. Google v posledních letech výrazně omezil zobrazování FAQ rich results a FAQPage není obecně vhodné doporučovat jako univerzální taktiku pro každý e-shopový produkt bez vysvětlení. Pro AI citovatelnost může FAQ sekce pomoci obsahově, ale neznamená to, že FAQPage přinese viditelný výsledek ve vyhledávání.

**Návrh opravy:**  
Změnit na:  
`Doplňte 4 až 6 reálných otázek s krátkými odpověďmi. FAQ sekce může pomoci srozumitelnosti obsahu; strukturovaná data FAQPage dávejte jen tam, kde dávají smysl a odpovídají aktuálním pravidlům vyhledávačů.`

---

### [WARNING] hasMerchantReturnPolicy je prezentováno příliš jistě jako „nový diferenciátor roku 2026“
**Citace:**  
- `Jádrem jsou tři typy ... plus jedno nové pole, které v roce 2026 dělá rozdíl.`  
- `Nový diferenciátor roku 2026 je hasMerchantReturnPolicy...`  
- `hasMerchantReturnPolicy — nový diferenciátor pro nákupní odpovědi ChatGPT.`

**Problém:**  
Zadání samo říká hedge. Pole je relevantní a užitečné, ale tvrzení „dělá rozdíl“ a „nový diferenciátor“ je příliš silné, pokud není opřené o oficiální dokumentaci. Navíc `hasMerchantReturnPolicy` není „nové“ pole v absolutním smyslu; nové může být spíš jeho větší význam v marketingových analýzách 2026.

**Návrh opravy:**  
Použít opatrnější formulace:  
- `... plus pole hasMerchantReturnPolicy, které se v analýzách 2026 ukazuje jako užitečný doplněk.`  
- `V některých analýzách 2026 se hasMerchantReturnPolicy objevuje častěji u citovaných nákupních stránek, proto dává smysl ho doplnit.`

---

### [WARNING] Věta o zákonném vrácení v Česku je zjednodušená
**Citace:**  
`V Česku máte 14denní vrácení ze zákona, takže jde jen o správný zápis do strukturovaných dat.`

**Problém:**  
Příliš zjednodušené. Spotřebitel má zpravidla právo odstoupit do 14 dnů u distančních smluv, ale existují výjimky. „Takže jde jen o správný zápis“ ignoruje právní nuance i to, že podmínky vrácení musejí odpovídat reálným obchodním podmínkám.

**Návrh opravy:**  
`V Česku má spotřebitel u většiny nákupů na dálku právo odstoupit do 14 dnů, existují ale výjimky. Pole hasMerchantReturnPolicy proto vyplňte podle skutečných podmínek e-shopu.`

---

### [WARNING] Tvrzení o citacích a „zařazení do srovnání“ jsou místy příliš kategorická
**Citace:**  
- `... která rozhodují, jestli se produkt do AI srovnání vůbec dostane.`  
- `Bez GTIN a značky nemůže AI produkt jednoznačně identifikovat a zařadit do srovnávacích odpovědí.`  
- `... produkt do srovnávací odpovědi nezařadí.`

**Problém:**  
Přehnaná jistota. GTIN velmi pomáhá, ale není u všech produktů vždy k dispozici ani nutně jedinou podmínkou. U některých produktů lze produkt identifikovat i jinak.

**Návrh opravy:**  
- `... významně zvyšují šanci, že AI produkt správně identifikuje a použije ve srovnání.`  
- `GTIN a značka pomáhají jednoznačné identifikaci produktu, zejména u srovnávacích nákupních dotazů.`

---

### [WARNING] Heureka/Zboží.cz jako zdroj pro „Seznam Asistent a Google AI Overviews“ je nedoložené
**Citace:**  
`Heureka a Zboží.cz — napojení recenzí zpět na produkt posiluje AggregateRating a je zdrojem, ze kterého čerpá i Seznam Asistent a Google AI Overviews.`

**Problém:**  
Druhá část věty je spekulativní a bez důkazu. Že recenze z těchto služeb mohou pomoci obsahu a důvěryhodnosti na stránce, je v pořádku. Tvrdit, že z nich přímo „čerpá“ Google AI Overviews, je nebezpečné.

**Návrh opravy:**  
`Heureka a Zboží.cz — napojení recenzí zpět na produkt může posílit důvěryhodnost stránky a zlepšit kvalitu viditelných hodnocení na produktu.`

---

### [WARNING] „Všechny umí Product strukturovaná data“ je příliš široké
**Citace:**  
`Upgates, Shoptet, WooCommerce — všechny umí Product strukturovaná data přes šablony nebo doplňky.`

**Problém:**  
Obecně pravděpodobné, ale příliš široké. Záleží na šabloně, verzi, pluginu, implementaci a konkrétním nastavení. U WooCommerce obzvlášť nelze tvrdit plošně bez výhrad.

**Návrh opravy:**  
`Upgates, Shoptet i WooCommerce obvykle umožňují nasadit Product strukturovaná data přes šablonu, vestavěnou funkci nebo doplněk. Vždy ověřte konkrétní implementaci.`

---

### [WARNING] „AggregateRating s Review“ je místy formulováno nepřesně
**Citace:**  
- `AggregateRating s Review`  
- `Přidat Product, Offer, AggregateRating a Review na každou produktovou stránku.`

**Problém:**  
Směšuje se doporučení s povinností. `AggregateRating` nemusí být vhodné, pokud web nemá skutečné recenze. `Review` také nemá být vymyšlené nebo povinné „na každé produktové stránce“.

**Návrh opravy:**  
`Pokud máte reálné recenze zobrazené na stránce, doplňte odpovídající AggregateRating a případně Review.`

---

### [WARNING] „Google penalizuje nesoulad“ je v zadání zjednodušeno, text to přebírá příliš tvrdě
**Citace:**  
`Cena v schema MUSÍ sedět se stránkou (Google penalizuje nesoulad)` — v zadání  
V článku: `... může vést k odebrání rich results.`

**Problém:**  
Samotný článek je tady lepší než zadání, ale zaslouží jemné zpřesnění. Nejde nutně o „penalizaci“ ve smyslu manuálního postihu; častěji jde o nezpůsobilost pro rozšířené výsledky nebo ztrátu důvěry v markup.

**Návrh opravy:**  
Doplnit upřesnění tam, kde se to objeví poprvé:  
`... Google to může vyhodnotit jako nesoulad a stránka pak nemusí být způsobilá pro některé rozšířené výsledky.`

---

### [WARNING] Answer box nezačíná definicí a druhá věta je negativní
**Citace:**  
`Produktovou stránku pro AI připravíte kombinací... Bez strukturovaných dat AI nedokáže...`

**Problém:**  
Požadavek byl: 40–60 slov, samostatný smysl, začínat definicí, ne negací. Tohle je funkční, ale ne ideální. Druhá věta se láme do negativní formulace.

**Návrh opravy:**  
Začít definicí typu:  
`Produktová stránka pro AI je produktová stránka upravená tak, aby AI a vyhledávače spolehlivě pochopily cenu, dostupnost, hodnocení a hlavní parametry. Pomáhají tomu strukturovaná data Product, Offer a AggregateRating, přehledná tabulka parametrů, reálné recenze a stručné odpovědi na časté otázky.`

---

### [WARNING] Prvních ~100 slov těla není dost samostatná „krátká odpověď“
**Citace:**  
`Nákupní dotazy se přesouvají do AI... Tento návod ukazuje...`

**Problém:**  
Úvod je srozumitelný, ale je víc editorial než přímá odpověď. Pro AI citovatelnost by měl první odstavec definovat, co stránka potřebuje, ne začínat trendem.

**Návrh opravy:**  
První odstavec přestavět tak, aby první 2–3 věty samy odpovídaly na dotaz „co patří na produktovou stránku pro AI“.

---

### [WARNING] FAQ obsahuje několik příliš jistých formulací
**Citace:**  
- `... produkty často nefigurují... protože AI nedokáže spolehlivě přečíst... z prostého HTML.`  
- `... je to jedno z polí, která rozhodují o zařazení produktu do AI srovnání.`  
- `... jeho doplnění může přinést nárůst viditelnosti.`

**Problém:**  
FAQ má být sebestačné, ale i opatrné. Tady jsou formulace místy marketingově tvrdší než zbytek článku.

**Návrh opravy:**  
Změkčit:  
- `... produkty mají nižší šanci se v těchto odpovědích objevit...`  
- `... je to jedno z polí, která mohou pomoci se správnou identifikací produktu...`  
- `... jeho doplnění může pomoci důvěryhodnosti a strojové čitelnosti údajů o vrácení.`

---

### [TIP] Title je použitelný, ale lehce mimo ideální délku a klíčové slovo může být přirozenější
**Citace:**  
`title: "Produktové stránky pro AI: jak je připravit 2026"`

**Problém:**  
Titulek je v zásadě v pořádku a klíčové slovo je vpředu. Jen působí lehce kostrbatě. Délka je na hraně ideálu.

**Návrh opravy:**  
Např.:  
`Produktové stránky pro AI: návod pro e-shopy 2026`  
nebo  
`Produktové stránky pro AI: co upravit v roce 2026`

---

### [TIP] Meta description je sice délkově v normě, ale po opravě by měla víc odpovídat obsahu tutorialu
**Citace:**  
viz description ve frontmatteru

**Problém:**  
Teď tlačí strach místo návodu. Článek je how-to, ne varování.

**Návrh opravy:**  
`Návod pro e-shopy: jak upravit produktové stránky pro AI vyhledávání pomocí strukturovaných dat, GTIN, recenzí a přehledných parametrů.`

---

### [TIP] Chybí interní odkaz v těle na širší článek o SEO pro e-shopy
**Citace:**  
`Obojí se doplňuje — širší e-shopové SEO řešíme v samostatném článku.`

**Problém:**  
Tohle přímo volá po odkazu. Zadání chce konkrétní interní odkazy, ne jen zmínku.

**Návrh opravy:**  
Doplnit skutečný interní odkaz na pilířový článek o SEO pro e-shopy / AI SEO pro e-shopy, pokud existuje.

---

### [TIP] CTA je správně produktové, ale sekundární audit je na tutorial možná příliš dlouhý
**Citace:**  
Závěrečný CTA blok

**Problém:**  
Primární CTA na Pack 1 490 Kč je správně. Sekundární audit je také relevantní. Jen by šlo lépe oddělit tutorial intent od audit intent.

**Návrh opravy:**  
Nechat Pack jako hlavní CTA v první větě a Audit zkrátit do jedné podpůrné věty. Obsahově je to ale použitelné.

---

### [TIP] Dobře: aktualizace i rok 2026 jsou ukotvené
**Citace:**  
`updated: "2026-06-11"` a opakované ukotvení k roku 2026

**Hodnocení:**  
Tohle je v pořádku. Článek nepoužívá problematické „letos“ nebo „příští rok“ bez kontextu.

---

### [TIP] Dobře: CTA míří na konkrétní produkty
**Citace:**  
`[AI SEO Wireframe Pack za 1 490 Kč](/pack/)`  
`[AI SEO audit za 9 990 Kč](/audit/)`

**Hodnocení:**  
Správně podle zadání. Jen viz výše jemné zkrácení sekundárního CTA.

---

### [TIP] Dobře: transparentní dovětek o marketingových analýzách
**Citace:**  
`Konkrétní čísla o dopadu strukturovaných dat v tomto článku pocházejí z veřejných marketingových analýz 2026...`

**Hodnocení:**  
Silný prvek důvěryhodnosti. Doporučuji zachovat.

---

## Shrnutí priorit oprav
1. **Okamžitě opravit přehnané absolutní claimy** („neviditelný“, „AI nedokáže“, „rozhodují“, „nezařadí“).  
2. **Vyčistit jazyk od anglicismů a nepřesných technických zkratek** („Query-aligned“, lépe vysvětlit CTR).  
3. **Změkčit a zpřesnit pasáže o FAQPage, hasMerchantReturnPolicy, GTIN a zdrojích typu Heureka/Zboží.cz.**  
4. **Přepracovat `answer` a první odstavec, aby fungovaly jako samostatná krátká odpověď.**  
5. **Doplnit konkrétní interní odkaz na širší článek o SEO pro e-shopy.**

Po těchto úpravách bude článek obsahově silný a publikovatelný.