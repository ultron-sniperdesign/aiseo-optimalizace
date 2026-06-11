**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k této verzi. Opravy z 1. auditu jsou z většiny vidět, ale pořád zůstává několik věcných a citačních problémů, plus pár míst s overclaimem nebo nepřesnou formulací.

---

## Nálezy

### [BLOCKER] `answer` stále přehnaně spojuje licence s důvodem citovanosti
> `answer: "Reddit patří podle analýz z let 2025–2026 mezi nejcitovanější zdroje v odpovědích velkých AI modelů a v souhrnu se pohybuje kolem 40 % citací. Důvodem je kombinace licencovaného přístupu k obsahu, velkého množství osobních zkušeností a více než 20 let dobře členěných diskusí."`

**Problém:**  
Ve frontmatteru je to podané jako hotový kauzální závěr. Jenže v těle správně píšete, že licence **sama o sobě prokazatelně neznamená vyšší váhu v citacích**. `answer` je citovatelný blok a nesmí zjednodušit spor na „modely citují Reddit kvůli licenci“.

**Návrh opravy:**  
Změnit na opatrnější formulaci, např.:  
> „Reddit patří podle analýz z let 2025–2026 mezi nejcitovanější zdroje v odpovědích velkých AI modelů a v souhrnných přehledech se pohybuje kolem 40 % citací. Přispívat k tomu může široká zásoba uživatelských zkušeností, dlouhá historie tematicky členěných diskusí a u některých hráčů také smluvně zajištěný přístup k obsahu.“

---

### [BLOCKER] Insight tvrdí něco, co z veřejných dat nejde spolehlivě vyvodit
> `Reddit má v citacích AI dominantní pozici nejen díky obsahu, ale i díky tomu, že velké modely k němu mají smluvní přístup. Bez podobné dohody těžko jakákoli platforma dosáhne stejné viditelnosti.`

**Problém:**  
První věta je ještě na hraně, druhá je už přehnaná a nedoložená. „Bez podobné dohody těžko jakákoli platforma dosáhne stejné viditelnosti“ je spekulativní závěr. Z článku ani z veřejně známých zdrojů to neplyne.

**Návrh opravy:**  
> „Reddit má v AI citacích silnou pozici díky kombinaci obsahu, komunitní struktury a u některých poskytovatelů i smluvně zajištěného přístupu k datům. Z veřejných zdrojů ale nelze potvrdit, že licence sama o sobě zaručuje vyšší citovanost.“

---

### [BLOCKER] „Perplexity zůstává Reddit-heavy“ je nevhodný anglicismus a brand voice problém
> `Perplexity zůstává Reddit-heavy s přibližně 46,7 % citací z Redditu...`

**Problém:**  
Nevěcný a zbytečně anglický výraz. Neodpovídá požadovanému slovníku.

**Návrh opravy:**  
> „Perplexity dál cituje Reddit velmi často, v jedné z analýz šlo přibližně o 46,7 % citací...“

---

### [WARNING] „dominance Redditu“ / „dominantní pozice“ je místy moc silné vzhledem k vlastnímu zjemnění
> `zazněly opakovaně tři vysvětlení dominance Redditu`  
> `Reddit dominance ale není stabilní.`  
> `Reddit má v citacích AI dominantní pozici...`

**Problém:**  
Po opravách už článek správně říká „patří mezi nejcitovanější zdroje“ a „výsledek se liší podle modelu“. Slovo „dominance“ ale znovu posouvá text k plošnému tvrzení napříč modely. To je v napětí s vaším vlastním zjemněním.

**Návrh opravy:**  
Nahraďte „dominance“/„dominantní pozice“ formulacemi:
- „silná pozice“
- „nadprůměrná citovanost“
- „výrazné zastoupení v citacích“

---

### [WARNING] Titulek je příliš dlouhý pro SEO
> `title: "AI citace Reddit v roce 2026: proč ho modely citují nejvíc"`

**Problém:**  
Klíčové slovo je vepředu, to je dobře. Ale titul je pravděpodobně přes doporučených 60 znaků. Pro SERP bude často useknutý.

**Návrh opravy:**  
Zkraťte na cca 50–60 znaků, např.:
- `AI citace Reddit 2026: proč ho modely často citují`
- `AI citace Reddit v roce 2026: proč je tak častý`

---

### [WARNING] Meta description je na hraně délky a začíná vágně
> `description: "Podle analýz 2025–2026 patří Reddit mezi nejcitovanější zdroje velkých AI modelů. Co za tím stojí, jaká jsou rizika a co s tím v Česku."`

**Problém:**  
Délka je ještě asi v normě, ale popis by mohl být konkrétnější a lépe využít KW. Není to blocker, ale jde zlepšit.

**Návrh opravy:**  
> „AI citace Reddit v roce 2026: proč ho modely často uvádějí, jaká jsou rizika pro značky a kdy dává Reddit smysl i pro českou firmu.“

---

### [WARNING] FAQ odpověď o licencích znovu sklouzává k příliš silné kauzalitě
> `Hlavní důvody jsou tři: Google a OpenAI mají s Redditem placené licenční dohody... takže k jeho obsahu mají smluvně ošetřený přístup. Reddit nabízí obsah z první ruky... A komunitní hlasování pomáhá filtrovat odpovědi...`

**Problém:**  
Tahle odpověď je lepší než dřív, ale pořád může působit jako „proto ho modely citují“. U FAQ, které AI ráda vytahuje samostatně, je lepší explicitně oddělit fakta od interpretace.

**Návrh opravy:**  
Doplňte větu typu:  
> „Licenční dohody samy o sobě neprokazují vyšší váhu v citacích, ale mohou usnadnit legální a stabilní přístup k obsahu.“

---

### [WARNING] Tvrzení o „nejlepší odpovědi“ je technicky zjednodušující
> `AI dokáže snadno identifikovat „nejlepší odpověď" v komunitním hlasování.`

**Problém:**  
Na Redditu není univerzální „nejlepší odpověď“ ve smyslu potvrzené autority; jsou tam top komentáře podle řazení a hlasování, které se mění. Formulace je příliš sebejistá.

**Návrh opravy:**  
> „AI může z takové struktury snáz vyhodnotit, které odpovědi komunita považovala za užitečné nebo viditelné.“

---

### [WARNING] „AI modely jsou hodnocené uživateli na lidskosti odpovědí“ je vágní
> `AI modely jsou hodnocené uživateli na „lidskosti" odpovědí.`

**Problém:**  
Nejasné, kým a jak. Zní to jako měřitelný standard, ale není vysvětlený.

**Návrh opravy:**  
> „Uživatelé často preferují odpovědi, které působí konkrétněji a praktičtěji než čistě marketingový text.“

---

### [WARNING] „žaluje Perplexity (říjen 2025)“ je potřeba ověřit nebo opatrněji formulovat
> `Reddit současně žaluje Anthropic (červen 2025) a Perplexity (říjen 2025)...`

**Problém:**  
Tohle je přesně typ tvrzení, který musí sedět na název strany, datum i právní stav. Bez zdroje je to rizikové. U mediálně pokrytých sporů se navíc stav může změnit.

**Návrh opravy:**  
Pokud nemáte v podkladech jistotu, změkčete:  
> „Reddit v roce 2025 veřejně vyostřil spory kolem neoprávněného využívání obsahu některými AI firmami, včetně právních kroků vůči Anthropic. Informace o dalších sporech je vhodné v publikaci ověřit podle aktuálního stavu.“

Pokud žaloba na Perplexity doložená je, doplňte přesný zdroj do interních podkladů a v textu napište raději:  
> „podal žalobu na…“

---

### [WARNING] 90/10 pravidlo je prezentované příliš univerzálně
> `Reddit má 90/10 pravidlo: alespoň 90 % aktivity musí být běžné zapojení do diskuse...`

**Problém:**  
90/10 je rozšířené komunitní doporučení, ne tvrdé univerzální platformové pravidlo vymahatelné stejně všude. Tady to zní jako oficiální globální norma Redditu.

**Návrh opravy:**  
> „Na Redditu se často používá orientační pravidlo 90/10: převažovat má běžné zapojení do diskuse a jen menší část aktivity má být vlastní propagace.“

A podobně upravit i další výskyty.

---

### [WARNING] „časté bany“ je zbytečně expresivní
> `Riziko: Vysoké — pravidla 90/10, časté bany, algoritmické výkyvy`

**Problém:**  
Působí až strašákově. Bez opory v datech není „časté“ vhodné.

**Návrh opravy:**  
> „Riziko: Vysoké — přísná komunitní pravidla, moderace a algoritmické výkyvy“

---

### [WARNING] „algoritmické výkyvy“ a „vyhledávací parametry“ jsou nepřesné technické zkratky
> `s každou změnou jejich vyhledávacích parametrů`  
> `Jediná algoritmická změna u AI poskytovatele může jeho váhu dramaticky proměnit...`

**Problém:**  
Lepší než dřív, ale stále dost neurčité. Čtenář neví, zda jde o změnu retrieval vrstvy, výběru zdrojů, produktového rozhraní nebo citační politiky.

**Návrh opravy:**  
> „...se změnou způsobu výběru a zobrazování zdrojů“  
a  
> „Změna v tom, jak poskytovatel vybírá a zobrazuje zdroje, může podíl citací Redditu rychle změnit.“

---

### [TIP] První odstavec je už citovatelný, ale `answer` a úvod se mírně rozcházejí
> `answer` vs. úvodní tučný odstavec

**Problém:**  
Úvod v těle je lepší než frontmatter `answer`. Pro AI citovatelnost by měly znít téměř stejně a nést stejnou opatrnost.

**Návrh opravy:**  
Sjednotit `answer` s prvním odstavcem těla.

---

### [TIP] FAQ odpovědi jsou většinou dobré, ale jedna otázka není úplně přirozená
> `Co je 90/10 pravidlo a proč na něm záleží?`

**Problém:**  
Je to ještě použitelné, ale spíš termínová než přirozeně uživatelská otázka.

**Návrh opravy:**  
Přirozenější varianta:  
> „Kolik vlastní propagace Reddit ještě snese?“  
nebo  
> „Proč mi Reddit smaže firemní příspěvky, když přidávám vlastní odkazy?“

---

### [TIP] „Vlákna (threads — diskuse)“ už není potřeba dvojmo vysvětlovat
> `Vlákna (threads — diskuse) mají jasnou strukturu...`

**Problém:**  
Požadavek na vysvětlení je splněn, ale tady je to stylisticky trochu těžkopádné.

**Návrh opravy:**  
> „Diskusní vlákna mají jasnou strukturu...“

---

### [TIP] Chybí interní odkaz z textu na související pilíř / vysvětlení AI viditelnosti
> V těle článku není interní odkaz, pouze CTA na konci.

**Problém:**  
Nejde o obecnou radu, ale tady konkrétně by se hodil aspoň jeden interní odkaz v části „LinkedIn vs Reddit“ nebo „Co si odnést“, pokud web má pilíř k AI viditelnosti / AI SEO / LinkedIn pro AI.

**Návrh opravy:**  
Přidat 1–2 kontextové interní odkazy do těla, např. na:
- pilíř k AI viditelnosti,
- článek o LinkedIn v AI citacích,
- stránku vysvětlující strukturovaná data.

---

### [TIP] CTA je už správně konkrétní a splňuje zadání
> `AI SEO audit za 9 990 Kč` / `AI SEO Wireframe Pack za 1 490 Kč`

**Hodnocení:**  
Tohle je dobře. CTA je konkrétní, produktové a nepadá do generického „kontaktujte nás“.

---

## Co je naopak opravené dobře

- KW je vepředu v titulku.
- Zakázané termíny jsou z velké části odstraněné nebo přeložené.
- Tvrdé garance a manipulativní formulace zmizely.
- Závěr má konkrétní CTA na produkt.
- První odstavec těla funguje relativně dobře jako samostatná krátká odpověď.
- LinkedIn je časově ukotvený na přelom 2025/2026, což je správně.

---

## Shrnutí k publikaci

Článek je **výrazně lepší než předchozí verze**, ale před publikací bych ještě opravil hlavně:

1. **frontmatter `answer`**,  
2. **insight o „bez podobné dohody těžko jakákoli platforma...“**,  
3. **univerzální prezentaci 90/10 pravidla**,  
4. **anglicismus „Reddit-heavy“**,  
5. **pár zbylých silných formulací typu dominance / jediná algoritmická změna**,  
6. **ověření nebo změkčení právního tvrzení o Perplexity**.

Po těchto úpravách už bude článek publikovatelný.