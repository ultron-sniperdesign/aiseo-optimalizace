# Audit faktů

## Verdikt: OPRAVIT PŘED PUBLIKACÍ

Auditor našel dva chybějící platformní předpoklady a jeden příliš absolutní pokyn. Soubor needitoval.

## Nálezy

### 1. [BLOCKER] Anglický příklad pro Merchant Center postrádá podmínku jazyka feedu — zásadní

**Citovaná pasáž:** „Pro Merchant Center může stejná vrtačka poslat například sekci `General`, název `Weight without battery` a hodnotu `1.8 kg`."

**Problém:** Pro volný text Google požaduje jeden jazyk napříč daným produktovým zdrojem. U `product_detail` navíc uvádí, že sekce, název i hodnota mají být lokalizované do jazyka příslušného zdroje. Anglický příklad je správný pouze pro anglický feed.

**Důkaz:**

- [Google Merchant Center – Product data specification](https://support.google.com/merchants/answer/7052112?hl=en)
- [Google Merchant Center – product_detail](https://support.google.com/merchants/answer/9218260?hl=en)

**Doporučená oprava:** Použít český příklad a uvést, že názvy i hodnoty se lokalizují do jazyka zdroje.

### 2. [BLOCKER] „Povinné parametry" Heureky jsou bez podmínky Heureka Marketplace — zásadní

**Citovaná pasáž:** „U české Heureky se každý parametr zapisuje samostatně jako `PARAM_NAME` a `VAL`; povinné parametry se liší podle kategorie."

**Problém:** Zápis platí obecně, ale zdroj definuje „povinné parametry" konkrétně pro produkty zapojené do Heureka Marketplace. Jejich absence znamená, že se u nabídky nezobrazí tlačítko „Koupit přes Heureku".

**Důkaz:** [Heureka – Co jsou povinné parametry a jak s nimi pracovat](https://sluzby.heureka.cz/napoveda/co-jsou-to-povinne-parametry-a-jak-s-nimi-pracovat/)

**Doporučená oprava:** Oddělit obecný formát parametru od podmínky Marketplace a uvést konkrétní následek.

### 3. [WARNING] „Každé číslo má jednotku a podmínku" je příliš absolutní — drobný

**Citovaná pasáž:** „Každé číslo má jednotku a podmínku"

**Problém:** Počty a jiné bezrozměrné údaje jednotku nepotřebují; podmínka měření je nutná jen tehdy, když ovlivňuje význam. Navazující popis už omezení obsahuje, nadpis mu odporuje.

**Důkaz:** [Google Merchant Center – product_detail](https://support.google.com/merchants/answer/9218260?hl=en) používá příklad `Total Video Out Ports: 2` bez jednotky.

**Doporučená oprava:** „Každá měřená veličina má jednotku a potřebný kontext" a odpovídající popis.

## Ověřeno bez nálezu

- `product_detail`: povinný název a hodnota, doporučená sekce, nejvýše 100 opakování, jen potvrzené hodnoty a bez údajů pokrytých vlastními atributy.
- Kombinace strukturovaných dat a Merchant Center feedu a formulace o lepším pochopení a ověření dat.
- Datum průvodce Googlu pro generativní funkce 10. července 2026 a jeho tvrzení o zvláštním schématu i Merchant Center.
- Použití `additionalProperty` + `PropertyValue`, číselné `value` a `unitText`; přednost přesnějších vlastností.
- Pack: 1 490 Kč včetně DPH, sedm typů stránek plus návod na nasazení.
- Krátká odpověď má 52 slov, meta description 126 znaků, odkazy fungují.
