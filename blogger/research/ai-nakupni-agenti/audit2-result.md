VERDIKT: OPRAVIT PŘED PUBLIKACÍ

## Nálezy

### [BLOCKER] Nedoložitelné tvrzení o funkcích třetích stran: „případně i objedná produkt“
> `answer: "AI nákupní agent je systém, který za uživatele vyhledá, porovná a případně i objedná produkt."`  
> `**AI nákupní agent je systém, který za uživatele vyhledá, porovná a případně i objedná produkt.**`

Problém: K 11. 7. 2026 je část „objedná produkt“ příliš silná jako obecná definice. U různých systémů je veřejně doložené hlavně vyhledání, porovnání, doporučení nebo navigace k produktu; samotné dokončení objednávky není plošně dostupná, ustálená a veřejně doložená vlastnost celé kategorie.

Návrh opravy: Zmírnit definici tak, aby neimplikovala běžně dostupný checkout uvnitř asistentů.
- Např.: „AI nákupní agent je systém, který za uživatele vyhledá a porovná produkty a může ho dovést k výběru nebo k dalšímu kroku nákupu.“

---

### [BLOCKER] Faktická chyba v identifikaci produktu: značka není náhrada za GTIN/MPN
> `Bez GTIN nebo značky je těžší poznat, že jde o stejný produkt jako u konkurence.`

Problém: Tohle odporuje vašemu vlastnímu upřesnění v zadání. Značka identifikaci zpřesňuje, ale nenahrazuje identifikátor typu GTIN/MPN. Formulace „GTIN nebo značky“ je věcně zavádějící.

Návrh opravy:
- „Bez GTIN, případně MPN, je těžší poznat, že jde o stejný produkt jako u konkurence; značka identifikaci jen zpřesňuje.“

---

### [WARNING] Overclaim o tom, co „výrazně ovlivňuje“ zařazení do porovnání
> `...šanci na zařazení do porovnání výrazně ovlivňuje strojová srozumitelnost produktu — cena, dostupnost, značka a identifikátor.`

Problém: Je to rozumné jako pracovní hypotéza, ale stále jde o částečně odvozený závěr, ne veřejně popsané pravidlo konkrétních systémů. „Výrazně ovlivňuje“ je na hraně, zvlášť v answer a v prvním odstavci, kde má být maximální přesnost.

Návrh opravy:
- „...šanci na zařazení do porovnání může ovlivnit strojová srozumitelnost produktu — zejména cena, dostupnost, značka a identifikátor.“
- Nebo: „...pro zařazení do porovnání jsou důležitá dobře popsaná produktová data...“

---

### [WARNING] Nedoložitelné zobecnění o ChatGPT
> `ChatGPT umí v některých scénářích pomoci s výběrem a porovnáním produktů...`

Problém: Slovo „umí“ je ještě přijatelné, ale bez opory v textu je to pořád tvrzení o produktu třetí strany. U citlivého článku po prvním auditu bych byl přísnější: formulace by měla výslovně odkazovat na veřejně pozorovatelné výstupy, ne na schopnost jako stabilní funkci.

Návrh opravy:
- „U ChatGPT jsou veřejně pozorovatelné scénáře, v nichž pomáhá s výběrem a porovnáním produktů...“
- nebo „ChatGPT se v některých veřejně dostupných scénářích používá i pro výběr a porovnání produktů...“

---

### [WARNING] Nedoložitelné zobecnění o Perplexity
> `Perplexity testovala nákupně orientované výstupy a cesty k produktu.`

Problém: Mírnější než v první verzi, ale stále jde o tvrzení o konkrétním produktu třetí strany. Chybí ukotvení, že jde o veřejně komunikované či pozorované testy.

Návrh opravy:
- „U Perplexity byly veřejně vidět testy nákupně orientovaných výstupů a cest k produktu.“
- nebo obecněji odstranit značku: „Některé AI systémy veřejně testovaly nákupně orientované výstupy a cesty k produktu.“

---

### [WARNING] Nedoložitelné zobecnění o Google AI režimech
> `Google v AI režimech zobrazuje i nákupně orientované odpovědi a produktové informace...`

Problém: Pravděpodobně obhajitelné, ale pořád je to tvrzení o konkrétní podobě produktu třetí strany. Vzhledem k citlivosti článku doporučuji větší opatrnost a přidat podmíněnost nebo public-source framing.

Návrh opravy:
- „V Google AI režimech se objevují i nákupně orientované odpovědi a produktové informace...“
- případně „Google v některých AI výstupech zobrazuje i produktové informace...“

---

### [WARNING] Tvrzení o „standardizaci nákupních akcí uvnitř asistentů“ je stále vágní
> `Objevují se také pokusy o standardizaci nákupních akcí uvnitř asistentů...`

Problém: Je to záměrně obecné, ale stále jde o neukotvenou větu bez příkladu nebo zdroje. Čtenář nepozná, zda jde o veřejně oznámené iniciativy, technické návrhy, nebo jen dojem autora.

Návrh opravy:
- Buď větu úplně vyhodit.
- Nebo ji ukotvit opatrněji: „Objevují se i úvahy a dílčí pokusy o sjednocení nákupních kroků uvnitř asistentů, jejich podoba ale není ustálená.“

---

### [WARNING] Zakázaný/nevhodný anglicismus mimo povolený seznam
> `Místo seznamu e-shopů užší výběr, mimo který produkt není vidět.`  
> `Agentní nakupování v Česku zatím nemá objem.`  
> `...kvůli kanálu bez objemu.`

Problém: „kanál“ v tomto významu je marketingový kalk; „objem“ je hovorový obchodní slang. Není to blocker, ale tón je méně vzdělávací a víc oborový.

Návrh opravy:
- „...v Česku zatím nepřináší významnější počet objednávek / návštěv / prodejů.“
- „...kvůli směru, který zatím nepřináší významný přínos.“

---

### [WARNING] Hraniční tvrzení o robots.txt a AI
> `Nechat AI roboty projít, pokud chci zvýšit šanci na použití svých dat.`

Problém: To je příliš přímočaré doporučení vzhledem k tomu, že o kus výš správně píšete, že „záleží na konkrétním systému a na tom, odkud čerpá data“. Tady už z toho děláte skoro pravidlo.

Návrh opravy:
- „Zvážit, které AI roboty blokujete, pokud chcete zvýšit šanci, že některé systémy použijí vaše data.“
- nebo „Zbytečně neblokovat přístup tam, kde dává smysl, aby systémy vaše data mohly číst.“

---

### [WARNING] Answer i první odstavec jsou funkční, ale definice nezačíná dost neutrálně
> `AI nákupní agent je systém, který za uživatele vyhledá, porovná a případně i objedná produkt...`

Problém: Samostatnost answer je dobrá, délka i struktura fungují. Slabina je opět v tom „objedná“ a v příliš rychlém přechodu k důsledku bez opory. Jako krátká odpověď pro AI je to skoro použitelné, ale potřebuje přesnější definici.

Návrh opravy:
- „AI nákupní agent je systém, který pomáhá vyhledat a porovnat produkty a zkracuje cestu od dotazu k výběru. Místo dlouhého seznamu e-shopů dostane uživatel užší porovnání, takže roste význam dobře popsaných produktových dat, jako je cena, dostupnost a identifikátor. V Česku jde zatím hlavně o přípravu.“

---

### [TIP] Titulek je obsahově dobrý, ale pro SEO by mohl mít klíčové slovo ještě víc vpředu a být konkrétnější
> `title: "AI nákupní agenti a e-shopy: co se mění"`

Pozitivní: Délka i klíčové slovo jsou v pořádku.

Možné zlepšení:
- „AI nákupní agenti: co mění pro e-shopy“
- „AI nákupní agenti pro e-shopy: co se mění“

Není nutné, jen jemné doladění.

---

### [TIP] Meta description je na horní hraně délky a je dobrá
> `description: "AI nákupní agenti mění výběr zboží v ChatGPT i dalších systémech. Co je doložené, co je humbuk a která produktová data mají pro e-shopy smysl v Česku."`

Pozitivní: Věcná, bez hype, odpovídá obsahu.

Jediné drobné riziko: znovu zmiňuje ChatGPT jako příklad konkrétní platformy. Pokud chcete být po auditu ultraopatrní:
- „AI nákupní agenti mění výběr zboží v AI systémech. Co je doložené, co je humbuk a která produktová data mají pro e-shopy smysl v Česku.“

---

### [TIP] CTA je splněné dobře
> `AI SEO audit za 9 990 Kč` / `AI SEO Wireframe Pack za 1 490 Kč`

Pozitivní: Konkrétní produktové CTA je přesně podle zadání. Transparentní dovětek je také v pořádku.

---

## Shrnutí
Článek je po prvním kole výrazně lepší a většina nejrizikovějších tvrzení byla správně zmírněna. Přesto ještě zbývají:
1. jeden věcný blocker kolem „GTIN nebo značky“,
2. jeden blocker kolem příliš široké definice „případně i objedná produkt“,
3. několik varování u tvrzení o ChatGPT, Perplexity a Google, kde bych doporučil ještě opatrnější formulace.

Po těchto úpravách by článek šel publikovat.