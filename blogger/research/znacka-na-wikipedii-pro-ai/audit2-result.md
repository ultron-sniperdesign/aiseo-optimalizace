**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k této verzi. Opravy z 1. auditu jsou vidět a část problémů je skutečně vyřešená, ale pořád zůstává několik věcných a slovníkových míst, která jsou pro publikaci riziková.

---

## Nálezy

### [BLOCKER] Zakázaný termín „notabilita“ zůstal v těle
> „Samotná **notabilita** firmy se ale tím nevytváří, jen se zachycuje.“

**Problém:** V kontextu zadání mělo být „notabilita“ nahrazeno za „významnost“ napříč. Tady zůstalo staré označení.

**Návrh opravy:**  
Nahradit za:
- „Samotná **významnost** firmy se ale tím nevytváří, jen se zachycuje.“

---

### [BLOCKER] Frontmatter keyword používá „wikipedia“ místo sjednoceného „Wikipedie“
> `- "wikipedia ai citace"`  
> `- "wikipedia pro ai"`  
> `- "wikipedia notabilita firma"`

**Problém:** V zadání bylo výslovně uvedeno sjednocení „Wikipedia“ → „Wikipedie“. Chápu, že v `keywords` může jít o cílové vyhledávací dotazy, ale třetí fráze navíc obsahuje i zakázané/slabé „notabilita“. Pokud je to exportováno na web nebo do SEO pole, působí to nekonzistentně.

**Návrh opravy:**  
Udržet vyhledávací intent, ale interně čistěji:
- `wikipedie ai citace`
- `wikipedie pro ai`
- `značka na wikipedii`
- `významnost firmy na Wikipedii`
- `wikidata pro ai`

Pokud systém vyžaduje přesné KW podle hledanosti, nechte „wikipedia ai citace“ jen jako technické SEO KW, ale v textu a viditelných polích používat „Wikipedie“.

---

### [BLOCKER] Nedoložené a příliš konkrétní číslo „400+ zablokovaných účtů“
> `label: "účtů zablokováno za nezveřejněnou placenou editaci v roce 2025"`  
> „Podle veřejně citovaných reportů bylo v roce 2025 takto zablokováno přes 400 účtů.“  
> „…bylo v roce 2025 zablokováno přes **400 účtů**…“

**Problém:** Tohle je stále velmi konkrétní tvrzení, ale v článku není nijak ukotveno zdrojem ani názvem reportu. U takto přesného čísla je to věcně slabé a auditně neobhajitelné. Navíc není jasné:
- zda šlo o všechny projekty Wikimedia, nebo jen anglickou Wikipedii,
- zda šlo o blokace účtů, nebo odhalené sockpuppety / placené editace,
- zda „nezveřejněná placená editace“ přesně odpovídá reportovanému důvodu.

**Návrh opravy:**  
Buď dodat přesný veřejný zdroj a specifikaci, nebo tvrzení změkčit:
- `label: "veřejně reportované blokace a zásahy proti nezveřejněné placené editaci"`
- v textu: „Wikimedia projekty pravidelně řeší případy nezveřejněné placené editace a sankce mohou vést až k blokaci účtu.“

Pokud zdroj máte, uveďte aspoň název reportu a rozsah.

---

### [WARNING] „47,9 % top 10 citovaných zdrojů v ChatGPT“ je formulováno nejasně a může být metodicky zavádějící
> `label: "podíl Wikipedie v top 10 citacích ChatGPT"`  
> „u ChatGPT tvoří přibližně **47,9 % top 10 citovaných zdrojů**“  
> „Wikipedie tvoří přibližně **47,9 % top 10 citovaných zdrojů v ChatGPT**“

**Problém:** Není jasné, co přesně 47,9 % znamená:
- podíl všech citací?
- podíl mezi top 10 doménami?
- podíl dotazů, kde se objevila?
- podíl citation share v konkrétní studii?

Takto napsané to může čtenář chápat jako univerzální vlastnost „ChatGPT“, což je příliš silné. Navíc „top 10 citovaných zdrojů“ je metodicky zvláštní formulace.

**Návrh opravy:**  
Upřesnit metodiku nebo formulaci změkčit:
- „V některých analýzách AI citací z roku 2025–2026 tvořila Wikipedie zhruba 47,9 % citation share mezi nejčastěji citovanými doménami v odpovědích ChatGPT.“
- nebo ještě bezpečněji:
- „V některých analýzách odpovědí ChatGPT patřila Wikipedie s podílem okolo 47,9 % citation share mezi nejcitovanější zdroje.“

Bez metodiky je současná formulace moc kategorická.

---

### [WARNING] „Top 15 domén pokrývá přibližně 68 % všech AI citací napříč veřejnými studiemi 2024–2026“ je přehnaně zobecňující
> „**Top 15 domén pokrývá přibližně 68 % všech AI citací napříč veřejnými studiemi 2024–2026**…“

**Problém:** „napříč veřejnými studiemi 2024–2026“ sugeruje agregovaný, srovnatelný metaanalytický výsledek, což nejspíš není. Různé studie mají jiné datasety, jiné modely, jiné prompty i jinou metriku. Tohle je příliš široké zobecnění.

**Návrh opravy:**  
Zúžit:
- „V některých veřejně citovaných analýzách z let 2024–2026 se ukazuje vysoká koncentrace citací do malé skupiny domén; v jedné z nich top 15 domén pokrývalo zhruba 68 % citací.“
- případně uveďte konkrétní studii ke konkrétnímu číslu.

---

### [WARNING] Nedoložený název zdroje / studie „Trade Press AI Index 2026“
> „Velké analýzy AI citací z let 2025–2026 (mimo jiné **Profound, Trade Press AI Index 2026**)…“

**Problém:** „Trade Press AI Index 2026“ není běžně známý referenční standard a v článku není vysvětleno, kdo jej vydal. Působí to jako autorita bez opory.

**Návrh opravy:**  
Buď:
- doplnit přesný název vydavatele / studie,
- nebo ponechat jen ověřitelné zdroje typu „analýzy Profound a další veřejně dostupné studie AI citací z let 2025–2026“.

---

### [WARNING] „AI systémy ji v analýzách citací používají jako zdroj základních faktů“ je stále moc silné
> „**AI systémy ji v analýzách citací používají jako zdroj základních faktů o značce**…“

**Problém:** Zadání uvádělo změkčení kolem Wikidat a tady je formulace zase poměrně silná. U Wikidat je zvlášť potřeba opatrnost: někdy mohou pomoci při identifikaci entity, ale nelze paušálně tvrdit, že je „AI systémy používají“ obecně.

**Návrh opravy:**  
Nahradit za:
- „Wikidata mohou pomáhat jako strojově čitelný zdroj základních identifikačních údajů o značce.“
- nebo:
- „V některých případech mohou Wikidata pomoci se základní identifikací entity a konzistencí údajů.“

---

### [WARNING] „kombinace obojího bývá podle analýz účinnou investicí do AI viditelnosti značky“ je overclaim
> „Mají obvykle nižší vstupní bariéru než článek na Wikipedii a **kombinace obojího bývá podle analýz účinnou investicí do AI viditelnosti značky**.“

**Problém:** „účinnou investicí“ je už hodnotící obchodní claim a není jasné, které analýzy to přímo prokazují. Studie obvykle ukazují korelace citovanosti zdrojů, ne návratnost „investice“.

**Návrh opravy:**  
Změkčit:
- „Mají obvykle nižší vstupní bariéru než článek na Wikipedii a v praxi mohou být rozumným doplněním práce na AI viditelnosti značky.“
- nebo:
- „…a mohou doplnit další kroky, které AI pomáhají značku lépe identifikovat.“

---

### [WARNING] „AI modely jsou primárně trénované na anglické Wikipedii“ je příliš kategorické
> „**AI modely jsou primárně trénované na anglické Wikipedii**, takže pro mezinárodní AI viditelnost se en.wikipedia.org počítá víc.“

**Problém:** To je široké technické tvrzení o trénovacích datech modelů, které nelze obecně tvrdit napříč modely a poskytovateli. Mnoho modelů anglickou Wikipedii jistě používá v pretraining mixu, ale „primárně trénované na anglické Wikipedii“ je přehnané a snadno napadnutelné.

**Návrh opravy:**  
Bezpečnější verze:
- „Pro mezinárodní dotazy mívá anglická Wikipedie větší vliv než česká, protože anglické zdroje bývají v AI systémech výrazněji zastoupené.“
- případně:
- „U mezinárodních dotazů bývá en.wikipedia.org prakticky důležitější než česká Wikipedie.“

---

### [WARNING] „en.wiki Wikidata položka“ je věcně chybně
> „…cílem en.wiki článek, nebo aspoň **en.wiki Wikidata položka**.“

**Problém:** Wikidata nejsou součást „en.wiki“. Jsou to samostatný vícejazyčný projekt na wikidata.org.

**Návrh opravy:**  
- „…cílem je článek na anglické Wikipedii, nebo aspoň dobře vyplněná položka na Wikidatech.“

---

### [WARNING] Zakázaný / nevysvětlený cizí slovník zůstal na více místech
> „Articles for Creation“  
> „autoconfirmed status“  
> „reviewerů“  
> „Draft“  
> „Paid“  
> „native advertising“  
> „coverage“  
> „citation share“

**Problém:** Článek je jinak psaný srozumitelně česky, ale tyto výrazy zbytečně zvyšují bariéru. U části z nich nejde o zákaz z briefu, ale o brand voice: vysvětluje, neprodává, nepůsobí insiderovsky.

**Návrh opravy:**  
Při prvním výskytu vždy vysvětlit:
- „Articles for Creation (doporučený proces pro posouzení návrhu článku)“
- „autoconfirmed status (automaticky potvrzený účet)“
- „reviewerů“ → „posuzujících editorů“
- „Draft“ → „prostor návrhu (Draft)“
- „Paid“ → „šablonu pro placenou editaci“
- „native advertising“ → „nativní reklama / placený redakčně stylizovaný obsah“
- „coverage“ → „pokrytí / redakční pokrytí“
- „citation share“ → „podíl na citacích“

---

### [WARNING] Tvrdé tvrzení „Wikipedie algoritmicky detekuje účty“ je nedoložené
> „Wikipedie **algoritmicky detekuje účty** založené jen kvůli jedné značce.“

**Problém:** Může existovat kombinace nástrojů, abuse filtrů a lidské kontroly, ale takto napsané to zní jako jistý automatický systém pro tento konkrétní případ. To je zbytečně technicky silné.

**Návrh opravy:**  
- „Účty založené jen kvůli propagaci jedné značky bývají rychle podezřelé a často přitahují kontrolu dobrovolníků a správců.“
- nebo:
- „Takové účty bývají snadno rozpoznatelné podle vzorce editací.“

---

### [WARNING] „většina malých a středních firem v Česku nesplňuje významnost pro anglickou Wikipedii“ je plausibilní, ale nedoložené
> „Pravda je, že **většina malých a středních firem v Česku nesplňuje významnost** pro anglickou Wikipedii…“

**Problém:** Pravděpodobně to bude často pravda, ale bez dat je „většina“ příliš kategorická.

**Návrh opravy:**  
- „Mnoho malých a středních firem v Česku významnost pro anglickou Wikipedii nesplňuje.“
- nebo:
- „U řady malých a středních firem v Česku je splnění významnosti pro anglickou Wikipedii nereálné.“

---

### [WARNING] „Wikidata položka jednotky hodin“ je příliš sebejisté
> `right: "Wikidata položka jednotky hodin, mediální pokrytí průběžně"`

**Problém:** Pro někoho ano, pro někoho ne. Navíc může záležet na schvalování, dohledání referencí a kvalitě entity.

**Návrh opravy:**  
- „Wikidata položka obvykle rychleji než článek na Wikipedii, mediální pokrytí průběžně“
- nebo:
- „Wikidata položka často v řádu hodin až dnů, mediální pokrytí průběžně“

---

### [TIP] FAQ odpovědi jsou většinou použitelné, ale některé jsou delší a méně „sebestačné“
> Např. odpověď na „Pomáhá článek na Wikipedii AI citacím značky?“

**Problém:** Odpověď je věcně lepší než v první verzi, ale pořád je trochu natažená a obsahuje více podmínkových vět. Pro AI citovatelnost by šla ještě víc zhutnit.

**Návrh opravy:**  
První dvě věty odpovědi udělat samostatně citovatelné:
- „Článek na Wikipedii může AI citacím značky pomáhat, protože Wikipedie patří mezi často citované zdroje faktických informací. Není to ale garance: rozhoduje i kvalita článku, relevance dotazu a další nezávislé zdroje.“

Není to blocker, ale pomohlo by to.

---

### [TIP] Title je po opravě v pořádku
> `title: "Wikipedie pro AI citace: má smysl pro značku v roce 2026?"`

**Potvrzení:**  
Titulek je tentokrát rozumný, obsahuje klíčové téma i rok a nepůsobí clickbaitově.

---

### [TIP] Meta description je v normě a ladí s obsahem
> `description: "Wikipedie patří podle dostupných analýz mezi nejcitovanější zdroje v AI odpovědích. Praktický návod, kdy má smysl o článek usilovat a kdy raději ne."`

**Potvrzení:**  
Délkově i obsahově použitelné. Není přepálené.

---

### [TIP] CTA je už výrazně lepší než generické „kontaktujte nás“
> „Můžete si pořídit AI SEO Wireframe Pack za 1 490 Kč… Pokud chcete situaci posoudit profesionálně, AI SEO audit za 9 990 Kč…“

**Potvrzení:**  
CTA už splňuje zadání mnohem lépe. Je konkrétní a navazuje na obsah článku.

**Drobný návrh:**  
Ještě lépe propojit produkt s tématem článku jednou větou typu:
- „Pro téma Wikipedie a Wikidat je praktičtější audit, protože posoudí reálnou významnost značky a dostupnost nezávislých zdrojů.“

---

## Shrnutí
Po 1. auditu je článek **výrazně lepší**, hlavně v:
- titulku,
- answer boxu,
- změkčení některých claimů,
- konkrétnějším CTA,
- odstranění části anglicismů.

Ale před publikací bych ještě **nutně opravil**:
1. zbylé „notabilita“,
2. věcně chybné „en.wiki Wikidata položka“,
3. slabě doložené „400+ účtů“,
4. příliš široká tvrzení o 47,9 %, 68 % a „primárním trénování na anglické Wikipedii“,
5. několik zbylých insider termínů bez vysvětlení.

Po těchto úpravách už bude článek publikačně mnohem bezpečnější.