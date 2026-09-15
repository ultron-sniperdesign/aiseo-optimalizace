## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po věcné stránce výrazně opatrnější a většina zásadních overclaimů je odstraněná. Krátká odpověď, FAQ, CTA i práce se zdroji jsou celkově dobré. Před publikací bych ale opravil několik zbytkových formulací, hlavně slug, příliš silné označení testu Ahrefs a pár míst, kde text může znít absolutněji, než dovolují zdroje.

---

## Nálezy

### [WARNING] Slug pořád rámuje `knowsAbout` jako „expertízu autora“

**Problémové místo:**

```yaml
slug: "knowsabout-expertiza-autora"
```

Článek správně vysvětluje, že `knowsAbout` odbornost nedokládá a pouze naznačuje možnou odbornost. Slug ale pořád říká „expertíza autora“, což je v rozporu s novým opatrnějším positioningem článku.

**Návrh opravy:**

Změnit před publikací na některou z variant:

```yaml
slug: "knowsabout-temata-autora"
```

nebo

```yaml
slug: "knowsabout-strukturovana-data"
```

Pokud už je URL veřejně publikovaná a web ji nechce měnit, ponechat slug a doplnit alespoň interní poznámku, že jde o historickou URL. Z hlediska obsahu je ale současný slug slabé místo.

---

### [WARNING] „Kauzální test Ahrefs“ může přehánět sílu důkazu

**Problémové místo:**

> Nejbližší měření je [kauzální test Ahrefs z 11. 5. 2026](/blog/schema-markup-ai-citace-test/).

Podle dodaného kontextu Ahrefs sledoval stránky před/po přidání JSON-LD a porovnával je s kontrolními stránkami. To je relevantní měření, ale označení „kauzální test“ může čtenáři podsouvat silnější experimentální důkaz, než jaký článek dokládá. Pokud Ahrefs výslovně nepoužívá metodiku kauzální inference a není to v článku vysvětlené, je lepší ubrat.

**Návrh opravy:**

> Nejbližší měření je [test Ahrefs z 11. 5. 2026](/blog/schema-markup-ai-citace-test/).

Případně přesnější:

> Nejbližší měření je [kontrolované srovnání Ahrefs z 11. 5. 2026](/blog/schema-markup-ai-citace-test/).

---

### [WARNING] Formulace „co od ní čekat nemáte“ je zbytečně absolutní

**Problémové místo:**

> Tenhle návod proto odděluje dvě věci: co knowsAbout podle definice znamená a jak ji zapsat, aby popisovala skutečnost, a co od ní čekat nemáte.

Článek má správně odmítat nedoložené sliby. Tato formulace ale může znít jako definitivní negativní tvrzení. Přesnější je říct, co od ní **bez důkazů neslibovat** nebo co **zatím není doložené**.

**Návrh opravy:**

> Tenhle návod proto odděluje dvě věci: co knowsAbout podle definice znamená a jak ji zapsat, aby popisovala skutečnost, a co od ní bez důkazu neslibovat.

Nebo:

> …a co u ní zatím není doložené.

---

### [WARNING] „Validní zápis neznamená žádné zobrazení ani citaci“ může být čteno jako negativní overclaim

**Problémové místo:**

> Validní zápis neznamená žádné zobrazení ani citaci.

Věcný záměr je správný, ale věta je dvojznačná: může znít jako „validní zápis znamená, že nebude žádné zobrazení ani citace“. Bezpečnější brand formulace je „nezaručuje“.

**Návrh opravy:**

> Validní zápis sám o sobě nezaručuje zobrazení ani citaci.

To odpovídá opatrnému slovníku webu a nepopírá možný nepřímý nebo budoucí vliv.

---

### [WARNING] Statistika „0 z 38“ ve frontmatteru neodpovídá přesně popisu kontroly

**Problémové místo:**

```yaml
stats:
  - value: "0 z 38"
    label: "stránek dokumentace Googlu ke strukturovaným datům zmiňuje knowsAbout (návody z galerie, úvod a obecné pokyny; kontrola 15. 9. 2026)"
```

V těle článku i v kontextu je uvedeno, že kontrola zahrnovala také stránku o generování strukturovaných dat JavaScriptem. Ve frontmatteru ale tato část chybí, takže popis rozsahu není úplný.

**Návrh opravy:**

```yaml
label: "stránek dokumentace Googlu ke strukturovaným datům zmiňuje knowsAbout (návody z galerie, úvod, obecné pokyny a stránka o generování dat JavaScriptem; kontrola 15. 9. 2026)"
```

---

### [TIP] Unnamed „oborový článek z roku 2026“ je pro čtenáře neověřitelný

**Problémové místo:**

> Narazili jsme i na oborový článek z roku 2026, který tvrdí, že podle ní režim AI vybírá zdroje — bez odkazu na doklad.

Rozumím pravidlu webu nejmenovat konkrétní oborové weby. Z hlediska citovatelnosti a důvěryhodnosti ale tato věta stojí na zdroji, který čtenář nemůže ověřit. Není to blocker, protože článek netvrdí nic pozitivního na základě tohoto zdroje. Přesto je možné formulaci zesílit bez nutnosti web jmenovat.

**Návrh opravy:**

> V oboru se objevují i tvrzení, že podle knowsAbout režim AI vybírá zdroje. Pokud ale takové tvrzení není doložené dokumentací nebo testem, neberte ho jako fakt. V dokumentaci Googlu jsme pro něj oporu nenašli.

Tím se odstraní potřeba odkazovat na konkrétní nejmenovaný článek.

---

### [TIP] Ukázka Organization může nechtěně působit, že `sameAs` pro firmu není důležitý

**Problémové místo:**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.example.com/#organization",
  "name": "Vaše firma s.r.o.",
  "url": "https://www.example.com/",
  "knowsAbout": [
    ...
  ]
}
```

Ukázka je validní a podle zadání prošla validátorem. Kontext článku ale správně vysvětluje, že u Organization Google mezi doporučenými vlastnostmi uvádí i `sameAs`. V ukázce firmy chybí, což může netechnický čtenář pochopit tak, že témata jsou důležitější než identifikační odkazy.

**Návrh opravy:**

Buď doplnit do ukázky neutrální `sameAs`:

```json
"sameAs": [
  "https://www.linkedin.com/company/vase-firma"
],
```

nebo před ukázku přidat větu:

> Ukázka se soustředí jen na knowsAbout; v ostrém zápisu firmy obvykle doplňte i identifikační odkazy v `sameAs`, pokud je máte ověřitelné.

---

### [TIP] „Zapisujte jen doložená témata, jednou u autora a jednou u firmy“ je lehce nepřesné

**Problémové místo:**

> Zapisujte jen doložená témata, jednou u autora a jednou u firmy, u nejednoznačných pojmů s odkazem na Wikidata.

Tato věta může vyznít, že každý web má mít vždy zvlášť zápis u autora i firmy. Přesnější je říct, že plný popis má být na jednom stabilním místě podle typu entity.

**Návrh opravy:**

> Zapisujte jen doložená témata na jednom stabilním místě — u autora na autorské stránce, u firmy na domovské stránce nebo stránce o firmě; u nejednoznačných pojmů přidejte odkaz na Wikidata.

---

### [TIP] Drobná terminologická úprava: „věc“ bez vysvětlení může být pro netechnického čtenáře slabší

**Problémové místo:**

> Hodnotou může být prostý text, věc (typ Thing) nebo adresa URL.

Později článek `Thing` vysvětluje dobře. V první definici ale „věc“ působí trochu obecně až nezvykle.

**Návrh opravy:**

> Hodnotou může být prostý text, položka typu `Thing` pro konkrétní téma nebo adresa URL.

Nebo:

> Hodnotou může být prostý text, obecný typ `Thing` pro pojmenované téma nebo adresa URL.

---

## Co je v pořádku

- **Krátká odpověď** má správnou délku, začíná definicí a dává samostatný smysl.
- **Meta description** má přibližně 150 znaků a odpovídá obsahu.
- **SEO titulek** má 59 znaků a klíčové slovo je na začátku.
- **FAQ** řeší reálné otázky a odpovědi jsou převážně sebestačné.
- **Brand voice** je věcný, bez tvrdého prodeje a bez slibů typu „AI vás začne doporučovat“.
- **CTA** je konkrétní a vede na relevantní produkt: AI SEO audit za 3 600 Kč včetně konzultace.
- **Věcná linka článku** je správná: `knowsAbout` může popisovat témata, ale nemá se prezentovat jako doložená páka na E-E-A-T, pozice nebo AI citace.