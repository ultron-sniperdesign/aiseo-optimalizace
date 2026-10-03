## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po faktické stránce podle vypořádání z 1. kola výrazně uklizený a SEO/CTA základ je dobrý. Před publikací ale opravte hlavně FAQ a dva H2 nadpisy: porušují zadání pro samostatnou čitelnost a skenování textu.

---

## Nálezy

### [WARNING] Odpovědi ve FAQ nejsou všude sebestačné bez otázky

**Problémová místa:**

> `a: "Musí jít otevřít vlastní adresou, která ji rovnou předvolí — ..."`

> `a: "Záleží na tom, jak varianty zobrazujete. ..."`

> `a: "Atribut produktového feedu pro Google Merchant Center, který spojí varianty téhož produktu do skupiny. ..."`

> `a: "Pro Google ne. Část adresy za znakem # při indexaci nepoužívá, ..."`

> `a: "Ne pod tímhle názvem. České srovnávače používají ..."`

Zadání pro toto kolo výslovně říká, že odpovědi ve FAQ mají být sebestačné a čitelné bez otázky. Některé odpovědi začínají zájmenem, elipsou nebo krátkou reakcí na otázku, takže po vytržení do AI odpovědi nedávají plný smysl.

**Návrh opravy:**

Přepište začátky odpovědí tak, aby vždy obsahovaly předmět:

- „Každá varianta produktu musí jít otevřít vlastní adresou…“
- „Kanonická adresa u variant záleží na tom, jestli jsou všechny varianty na jedné stránce, nebo má každá vlastní stránku…“
- „`item_group_id` je atribut produktového feedu pro Google Merchant Center…“
- „Znak `#` v adrese nestačí pro Google…“
- „`item_group_id` pod tímto názvem pro Heureku a Zboží.cz neplatí; české srovnávače používají `ITEMGROUP_ID`…“

---

### [WARNING] Dva H2 nadpisy jsou pro skenování slabé: nesou label, ne pointu

**Problémová místa:**

> `## <strong>Časté chyby</strong> u <span class="hl">variant</span>`

> `## <strong>Shrnutí</strong> a <span class="hl">další krok</span>`

Formálně obsahují `<strong>` i `<span class="hl">`, ale pro čtenáře, který text skenuje, nenesou dostatečnou pointu. „Časté chyby“ a „Shrnutí“ jsou spíš názvy bloků než sdělení. U druhého nadpisu je navíc klíčový pojem ve zvýrazněném span spíš „další krok“, ne hlavní téma článku.

**Návrh opravy:**

Například:

```mdx
## U <span class="hl">variant</span> hlídejte <strong>šest opakovaných chyb</strong>
```

a

```mdx
## U <span class="hl">variant produktu</span> slaďte <strong>adresu, data a feed</strong>
```

CTA může zůstat v odstavci pod druhým z nich.

---

### [TIP] První věta těla je dobrá, ale druhý odstavec by šel ještě více zhutnit pro AI citaci

**Místo:**

> „Návod ukazuje, jak ty pohledy sladit: co musí mít každá varianta, kdy stačí parametr v adrese a kdy vlastní stránka, jak skupinu zapsat do kódu i do feedů — a co z toho zvládá Shoptet a náš vlastní e-shop na Upgates.“

Prvních ~100 slov těla funguje samostatně a faktická hustota je dobrá. Jen druhý odstavec je dlouhý a obsahuje víc věcí najednou: účel článku, rozsah, platformy i metodiku.

**Návrh opravy:**

Není nutné kvůli publikaci, ale pro lepší citovatelnost by šlo rozdělit na dvě kratší věty:

> „Návod ukazuje, jak tyto pohledy sladit: co musí mít každá varianta, kdy stačí parametr v adrese, kdy dává smysl vlastní stránka a jak skupinu zapsat do kódu i feedů. Praktické části se týkají Shoptetu a našeho vlastního e-shopu na Upgates; vycházejí z dokumentace k 3. 10. 2026 a veřejného HTML.“

---

## Kontrola vypořádání z 1. kola

- **B1 OpenAI v krátké odpovědi:** oprava sedí. `answer` už OpenAI ani `group_id` nezmiňuje. Zbylé výskyty OpenAI jsou v sekci feedů a obsahují podmínku dostupnosti k 3. 10. 2026.
- **B2 Test rozšířených výsledků / Search Console:** oprava sedí. Formulace je atribučně opřená o doporučení Googlu a oznámení z února 2024.
- **B3 `name` jako jediná povinná vlastnost:** oprava sedí. V textu zůstává tvrzení o povinnosti jen pro samotný `ProductGroup`, ale hned je doplněno, že pro variantní výsledky nestačí.
- **B5 Zboží.cz a výjimka variant určených výrobcem:** oprava sedí, výjimka je v tabulce doplněná.
- **W2 Shoptet zobecnění:** oprava sedí. H3 pracuje se vzorkem, ne s plošným tvrzením.
- **T1 „dnes“ bez data:** oprava sedí, neukotvené „dnes“ v článku nezůstalo.
- **B4 Heureka „jediným řešením“ nezapracováno:** důvod obstojí, protože text používá citaci ze specifikace a vysvětluje rozdíl oproti Googlu.
- **W1 Merchant Center a schválení produktů:** důvod obstojí; text má atribuci „Podle nápovědy Merchant Center…“.
- **W3 Upgates sitemapa a XML feedy:** důvod obstojí; tvrzení je formulované jako údaj z nápovědy Upgates.

---

## Co je v pořádku

- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“, „backlink profil“ v článku nejsou.
- Tón je věcný a vzdělávací, bez tvrdého prodeje a bez slibů typu garantované viditelnosti v AI.
- `seoTitle` je do 60 znaků a klíčové slovo má na začátku.
- `description` je v povoleném rozsahu 70–160 znaků.
- `answer` má 51 slov, začíná definicí a dává samostatný smysl.
- Interní odkazy jsou relevantní k tématu článku.
- CTA je konkrétní a vede na kanonické produkty: **AI SEO Wireframe Pack** za **1 490 Kč včetně DPH** a **Audit AI viditelnosti** za **3 600 Kč bez DPH**.