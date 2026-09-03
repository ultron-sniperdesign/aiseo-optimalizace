## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

### Nálezy

#### [BLOCKER] Ukázka „minimálního zápisu“ obsahuje nepovinné a potenciálně nepravdivé hodnoty

> „## Návod: minimální zápis“  
> ```json
> "returnMethod": "https://schema.org/ReturnByMail",
> "returnFees": "https://schema.org/FreeReturn"
> ```

Problém: Sekce slibuje minimální zápis, ale příklad přidává `returnMethod` a `returnFees`. Hlavně `FreeReturn` tvrdí, že vrácení je zdarma — to nemusí být pravda pro běžný český e-shop a čtenář to může bez kontroly zkopírovat.

**Oprava:** V minimálním příkladu ponechat jen:

```json
"applicableCountry": "CZ",
"returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
"merchantReturnDays": 14
```

Volitelné hodnoty dát až pod příklad s větou: „Doplňte jen tehdy, pokud odpovídají vašim obchodním podmínkám.“

---

#### [WARNING] Frontmatter title znovu mírně zobecňuje vzorek

> `title: "hasMerchantReturnPolicy: chybělo ve všech 38 e-shopech"`

V zadání píšeš, že titulek už tvrdí jen „ve všech 38 měřených e-shopech“, ale aktuální `title` slovo „měřených“ nemá. H2 už je v pořádku.

**Oprava:**  
`hasMerchantReturnPolicy: chybělo u 38 měřených e-shopů`

---

#### [WARNING] Statistika „2–3 povinné údaje“ je nepřesná vůči alternativě `merchantReturnLink`

> `value: "2–3"`  
> `label: "povinné údaje podle Googlu: applicableCountry a returnPolicyCategory, u konečné lhůty navíc merchantReturnDays; alternativou je merchantReturnLink"`

Problém: Pokud je alternativou samotný `merchantReturnLink`, pak stat „2–3 povinné údaje“ není úplně přesný. Povinný režim je buď URL, nebo rozepsané hodnoty.

**Oprava:**  
Např. změnit na:

```yaml
- value: "1 URL nebo 2–3 pole"
  label: "podle Googlu: buď merchantReturnLink, nebo applicableCountry a returnPolicyCategory; u konečné lhůty navíc merchantReturnDays"
```

---

#### [WARNING] Definice v answeru a úvodu tvrdí, že se vždy deklaruje počet dnů

> „… deklaruje pravidla pro vrácení zboží: zemi, typ lhůty a počet dnů.“

Počet dnů platí jen u `MerchantReturnFiniteReturnWindow`. U `MerchantReturnUnlimitedWindow`, `MerchantReturnNotPermitted` nebo při použití `merchantReturnLink` to tak být nemusí.

**Oprava:**  
„… deklaruje pravidla pro vrácení zboží: typ pravidel, zemi a u konečné lhůty také počet dnů.“

Použít stejně v `answer` i prvním odstavci.

---

#### [WARNING] „Pro běžný e-shop platí první“ je moc kategorické

> „Pro běžný e-shop platí první.“

Týká se hodnoty `MerchantReturnFiniteReturnWindow`. V českém B2C kontextu je to typické, ale existují výjimky a sortimentní odlišnosti. V právní části je výhrada dobrá, tady je věta zbytečně tvrdá.

**Oprava:**  
„U běžného českého B2C e-shopu to často bude první možnost, pokud obchodní podmínky nebo výjimky neříkají něco jiného.“

---

#### [TIP] Slovo „vrátka“ je hovorové a nehodí se do věcného tónu

> „ChatGPT preferuje e-shopy s deklarovanou vrátkou“

Působí slangově a trochu shazuje odborný tón.

**Oprava:**  
„ChatGPT preferuje e-shopy s deklarovanými pravidly vrácení zboží“

---

#### [TIP] „V jeho dokumentaci“ je kostrbaté

> „Co říká OpenAI — a co v jeho dokumentaci není“

OpenAI není mužský životný referent; věta zní nepřirozeně.

**Oprava:**  
„Co říká OpenAI — a co v dokumentaci není“  
nebo  
„Co říká dokumentace OpenAI“

---

#### [TIP] „nekonečná lhůta“ je neobratný překlad

> „jestli je lhůta konečná, nekonečná nebo vrácení není možné“

U `MerchantReturnUnlimitedWindow` je přirozenější „bez časového omezení“.

**Oprava:**  
„jestli je lhůta konečná, bez časového omezení, nebo vrácení není možné“

---

#### [TIP] Právní rámování je celkově už výrazně bezpečnější

Výhrady „ne právní rada“ jsou na správných místech a text většinou mluví o typickém B2C kontextu. Jen doporučuji upravit výše uvedené kategorické „Pro běžný e-shop platí první.“

---

### Co je v pořádku

- JSON-LD názvy vlastností v ukázce jsou syntakticky v zásadě správné: `hasMerchantReturnPolicy`, `applicableCountry`, `returnPolicyCategory`, `merchantReturnDays`, `returnMethod`, `returnFees`.
- Hodnoty `MerchantReturnFiniteReturnWindow`, `ReturnByMail`, `FreeReturn` jsou ve správném tvaru jako schema.org URL.
- Tvrzení o OpenAI je po úpravách střízlivé a nepřisuzuje ChatGPT nedoloženou preferenci.
- CTA je konkrétní a vede na Audit 3 600 Kč.