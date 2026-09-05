## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po druhé revizi výrazně přesnější. Krátká odpověď, základní rámování „hlavně procházení“, práce se zdroji i CTA jsou v zásadě v pořádku. Zůstaly ale tři věci, které bych před publikací nepustil: rozbitý interní odkaz, faktická chyba u `nofollow` ve shrnutí a návrat absolutní formulace „ne kvality obsahu“.

---

## 1. Blokující nálezy

### 1. [BLOCKER] Rozbitý interní odkaz na článek o AI robotech

**Citace:**

> `Který AI robot se jak jmenuje a co povolit, rozebírá [AI roboti v robots.txt](/blog/ai-vyhledávací robot-robots-txt/).`

**Problém:**  
URL obsahuje mezeru a diakritiku: `/blog/ai-vyhledávací robot-robots-txt/`. To bude velmi pravděpodobně rozbitý odkaz. Zároveň je zřejmé, že vznikl mechanickou náhradou slova „crawler“ i ve slugu.

**Oprava:**

Použít skutečný existující slug. Podle zadání pravděpodobně:

```md
[AI roboti v robots.txt](/blog/ai-crawler-robots-txt/)
```

Pokud nechcete mít „crawler“ ani ve slugu, vytvořit alias/redirect, ale viditelný text odkazu je teď v pořádku.

---

### 2. [BLOCKER] Ve shrnutí zůstala faktická chyba u `nofollow`

**Citace:**

> **Canonical a nofollow jsou podle dokumentace slabší** a účinkují až po stažení stránky.

**Problém:**  
Tohle odporuje opravenému výkladu v těle článku. `rel=canonical` se vyhodnocuje až po stažení cílové stránky, ale `rel=nofollow` se vyhodnocuje na odkazující stránce, tedy před návštěvou cílové URL. Tím se vrací chyba, kterou revize jinde opravila.

**Oprava:**

Nahradit například:

```md
- **Canonical a nofollow jsou podle dokumentace slabší:** canonical se vyhodnocuje až po stažení stránky; nofollow se čte už na odkazující stránce, ale musí být na každém odkazu, jinak není spolehlivou zábranou procházení.
```

---

### 3. [BLOCKER] Ve shrnutí se vrátila absolutní formulace „ne kvality obsahu“

**Citace:**

> **Filtry jsou problém rozpočtu procházení**, ne kvality obsahu — Google jmenuje nadměrné procházení a pomalejší objevování nových stránek.

**Problém:**  
Tělo článku správně říká, že jde **hlavně** o problém procházení a že u indexovatelné filtrované stránky vzniká i riziko tenkého obsahu. Shrnutí to znovu zjednodušuje na „ne kvality obsahu“, což je vnitřní rozpor a návrat k absolutnímu tvrzení.

**Oprava:**

```md
- **Filtry jsou hlavně problém procházení:** Google jmenuje nadměrné procházení a pomalejší objevování nových stránek. Pokud ale z filtrované kombinace uděláte indexovatelnou stránku, musíte řešit i její vlastní obsah.
```

---

## 2. Doporučení

### 1. [WARNING] Úvodní příklad s „patnácti zaškrtávátky“ je zbytečně absolutní

**Citace:**

> Když každá kombinace vytvoří vlastní adresu, vyrobí patnáct zaškrtávátek v kategorii víc adres, než má e-shop produktů.

**Problém:**  
Je to názorné, ale fakticky ne vždy pravdivé. Patnáct binárních voleb může znamenat až 32 768 kombinací, ale větší e-shop může mít produktů víc. Navíc ne každé zaškrtávátko se kombinuje se všemi ostatními.

**Oprava:**

```md
Když každá kombinace vytvoří vlastní adresu, může i několik zaškrtávátek v kategorii vyrobit tisíce až desetitisíce URL — často víc, než kolik má daná kategorie užitečných vstupních stránek.
```

---

### 2. [WARNING] Formulace „efekt padá“ / „nemá efekt“ u `nofollow` je moc tvrdá

**Citace 1:**

> Stačí jeden odkaz bez něj a efekt padá.

**Citace 2 — FAQ:**

> U nofollow platí, že musí být na každém odkazu na tu adresu, jinak nemá efekt.

**Problém:**  
Smysl je správný: `nofollow` je křehký, protože musí být na každém odkazu. Ale „nemá efekt“ je příliš absolutní. Přesnější je, že už není spolehlivou zábranou, protože existuje alespoň jedna běžně procházená cesta.

**Oprava:**

V těle:

```md
Stačí jeden odkaz bez něj a už nejde o spolehlivou zábranu procházení.
```

Ve FAQ:

```md
U nofollow platí, že musí být na každém odkazu na tu adresu; jinak na ni pořád vede alespoň jedna procházená cesta.
```

---

### 3. [WARNING] „Robot se na adresu nedostane vůbec“ potřebuje přesnější formulaci

**Citace:**

> Robot se na adresu nedostane vůbec.

**Problém:**  
U `robots.txt` je přesnější říct, že robot adresu **nemá načítat/procházet**. Samotnou URL může znát z odkazu, sitemap, externích zdrojů nebo historicky. V některých případech se URL může objevit ve výsledcích bez obsahu/snippetu. Formulace „nedostane vůbec“ je zbytečně absolutní.

**Oprava:**

```md
Robot blokovanou adresu nemá načítat; může ji ale znát jako URL.
```

Nebo v checklistu:

```md
Vyhledávací robot blokovanou URL podle pravidel robots.txt neprochází, takže nevzniká náklad na stažení stránky.
```

---

### 4. [WARNING] U fragmentů je potřeba odlišit „neprochází se fragment“ od „neprochází se stránka“

**Citace:**

> První dva nástroje mění, jestli se robot na adresu vůbec dostane.

**Problém:**  
U `robots.txt` to sedí ve smyslu blokování načtení URL. U fragmentu je situace jiná: robot typicky načte základní URL bez části za `#`; fragment nevytváří samostatnou procházenou adresu. Současná formulace ty dvě situace hází do jednoho pytle.

**Oprava:**

```md
První dva nástroje snižují vznik samostatně procházených filtrovaných URL. Robots.txt blokuje načtení konkrétních adres; fragment za # obvykle nevytváří samostatnou URL, kterou by Google procházel.
```

---

### 5. [WARNING] Pasáž o `User-agent: *` může být přesnější

**Citace:**

> Pravidla v `robots.txt` platí pro roboty, kteří soubor respektují, a musí na ně dopadnout: buď obecnou skupinou `User-agent: *`, nebo skupinou s jejich vlastním jménem.

**Problém:**  
Směr je správný, ale chybí důležitá praktická nuance: pokud v souboru existuje specifická skupina pro konkrétního robota, nemusí se na něj aplikovat obecná pravidla z `User-agent: *`. To je důležité právě u AI robotů, kde weby často přidávají zvláštní skupiny.

**Oprava:**

```md
Pravidla v `robots.txt` platí pro roboty, kteří soubor respektují, jen pokud na ně opravdu dopadnou: buď přes obecnou skupinu `User-agent: *`, nebo přes specifickou skupinu s jejich jménem. Pozor: pokud pro robota vytvoříte vlastní skupinu, obecná pravidla z `*` se na něj nemusí použít.
```

---

### 6. [WARNING] Shoptet měření je na obecný článek příliš prominentní

**Citace — frontmatter stats:**

> `43 ze 46`  
> `vyhodnotitelných kategorií v našem měření Shoptetu...`

**Citace — tělo:**

> V našem měření Shoptetu nemělo 43 ze 46 vyhodnotitelných kategorií na filtrovanou adresu ani jeden odkaz...

**Problém:**  
Článek je obecný návod k faceted navigaci. Shoptet měření je užitečné, ale jako jedna ze tří hlavních statistik ve frontmatteru může kanibalizovat samostatný článek `/blog/shoptet-filtry-strankovani/`. Tady má sloužit jako podpůrný příklad, ne jako hlavní argument.

**Oprava:**

- Ve frontmatter `stats` zvážit výměnu za obecnější bod z dokumentace Googlu.
- Shoptet nechat jen v kroku jako krátký příklad s odkazem na samostatnou analýzu.

Například:

```yaml
stats:
  - value: "2 cesty"
    label: "které Google dokumentuje: blokovat procházení filtrů, nebo je pustit a nést náklad"
  - value: "404"
    label: "doporučený stavový kód pro kombinace filtrů bez výsledků"
  - value: "3 podmínky"
    label: "které musí splnit filtrovaná kombinace, aby z ní dávalo smysl udělat samostatnou stránku"
```

A v těle ponechat:

```md
Na Shoptetu jsme to měřili samostatně: u většiny kontrolovaných kategorií na filtrovanou adresu nevedl běžný odkaz. Detail je v článku [filtry na Shoptetu kryje robots.txt](/blog/shoptet-filtry-strankovani/).
```

---

### 7. [TIP] Praktická část by měla ukázat konkrétní místo kontroly

**Citace:**

> Projděte robots.txt

**Problém:**  
Pro zkušeného SEO člověka jasné, pro majitele e-shopu ne nutně. Článek je jinak praktický, ale tady by pomohla jedna věta navíc: kde soubor najde, co hledat a co neudělat.

**Oprava:**

Doplnit do kroku:

```md
Najdete ho na `https://vasedomena.cz/robots.txt`. Hledejte pravidla pro parametry filtrů, například `?color=`, `?size=`, `?price=` nebo platformní parametry. Pokud už jsou blokované, nepřidávejte na stejné URL ještě `noindex`.
```

---

### 8. [TIP] Krok „Ověřte prázdné kombinace“ by měl říct, jak ověřit status kód

**Citace:**

> Zaškrtejte kombinaci, která nemůže mít výsledky, a zkontrolujte stavový kód.

**Problém:**  
Správné, ale pro majitele e-shopu chybí jednoduchý návod, jak. Bez toho článek radí dobře, ale méně použitelně.

**Oprava:**

```md
Stavový kód ověřte například přes nástroj pro kontrolu HTTP hlaviček, v prohlížeči v DevTools / Network, nebo příkazem `curl -I "https://example.cz/kategorie/?color=neexistuje"`.
```

---

### 9. [TIP] „Co Google dokumentuje — a co ne“ je silná sekce, ale tabulka by měla méně slibovat u fragmentů

**Citace:**

> Čím to udělat: zákaz v robots.txt nebo filtrování přes fragment adresy

**Problém:**  
Fragment je dokumentovaná možnost, ale ne univerzální doporučení pro každý e-shop. Pokud filtr přes `#` mění obsah jen klientsky, může to být technicky nevhodné pro přístupnost, analytiku, sdílení URL nebo serverové renderování. Stačí krátká brzda, aby článek nepůsobil jako „použijte fragmenty a hotovo“.

**Oprava:**

Doplnit za tabulku:

```md
Fragment není univerzální řešení architektury filtrace. Dává smysl jen tehdy, když filtrovaný stav nepotřebujete jako samostatnou indexovatelnou stránku a technicky zvládnete, aby ovládání zůstalo použitelné pro lidi.
```

---

### 10. [TIP] Krátká odpověď a prvních 100 slov jsou v pořádku

**Potvrzení:**  
Frontmatter `answer` začíná definicí, dává samostatný smysl a drží se přibližně požadovaného rozsahu. První odstavec těla také funguje jako samostatná odpověď. Tady není potřeba zásah.

---

### 11. [TIP] SEO prvky a CTA jsou v pořádku

**Potvrzení:**  

- `seoTitle` má klíčové téma vepředu a je v rozumné délce.
- Meta description je v limitu a odpovídá článku.
- Slug `filtry-faceted-navigace-eshopu` je obhajitelný; nepřidávat „ai“ je správné rozhodnutí.
- CTA míří na konkrétní produkty: Pack 1 490 Kč a Audit 3 600 Kč. To splňuje zadání.

---

## 3. Verdikt

**OPRAVIT PŘED PUBLIKACÍ.**

Po opravě tří blockerů — rozbitý odkaz, shrnutí u `nofollow`, absolutní formulace „ne kvality obsahu“ — je článek publikovatelný. Doporučení výše nejsou všechna nutná pro vydání, ale zlepší přesnost, použitelnost a sníží riziko kanibalizace se Shoptet článkem.