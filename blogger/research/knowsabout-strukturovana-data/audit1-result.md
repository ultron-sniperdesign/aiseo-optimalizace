## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je věcně nadprůměrně opatrný, zdrojově dobře ukotvený a bez tvrdých prodejních claimů. Před publikací bych ale opravil několik formulací, které buď mírně přestřelují doložené zdroje, nebo zbytečně oslabují srozumitelnost pro netechnické čtenáře.

---

## Nálezy a cílené opravy

### [WARNING] Titulek říká „expertízu“, ale článek správně vysvětluje, že `knowsAbout` odbornost nedokládá

**Problémové místo:**

```yaml
title: "knowsAbout: jak zapsat expertízu autora a co od ní čekat"
```

a také keyword:

```yaml
- "expertíza autora ve strukturovaných datech"
```

**Problém:**  
Podle schema.org `knowsAbout` pouze naznačuje možnou odbornost, ale neimplikuje ji a nerozlišuje úroveň znalostí. Titulek „jak zapsat expertízu autora“ je proto silnější než doložený význam vlastnosti. Článek uvnitř tuto nuance vysvětluje dobře, ale title vytváří opačné očekávání.

**Návrh opravy:**

```yaml
title: "knowsAbout: témata autora ve strukturovaných datech"
seoTitle: "knowsAbout ve strukturovaných datech: jak zapsat témata"
```

Keyword změnit například na:

```yaml
- "témata autora ve strukturovaných datech"
```

---

### [WARNING] Nepodložené zobecnění „v oborových návodech se často popisuje“

**Problémové místo:**

> V oborových návodech se často popisuje jako signál odbornosti a jeden článek z roku 2026 tvrdí, že podle ní režim AI vybírá zdroje — bez odkazu na doklad.

**Problém:**  
Z dodaného research podkladu je doložen jeden oborový článek bez odkazu na zdroj. Není doložené, že se to děje „často“. Formulace zbytečně přestřeluje.

**Návrh opravy:**

> V některých oborových návodech se `knowsAbout` popisuje jako signál odbornosti. Jeden článek z roku 2026 dokonce tvrdí, že podle ní režim AI vybírá zdroje — bez odkazu na doklad.

Ještě přesnější varianta:

> Narazili jsme i na oborový článek z roku 2026, který tvrdí, že podle `knowsAbout` režim AI vybírá zdroje — bez odkazu na doklad.

---

### [WARNING] Absolutní tvrzení, že témata „nepomohou“ odlišit autora od jmenovce

**Problémové místo:**

> Témata nepomohou odlišit autora od jmenovce, odkazy na jeho profily ano.

**Problém:**  
Směr je správný — identitu mají nést hlavně `url` a `sameAs`. Ale absolutní „nepomohou“ je silnější, než zdroje unesou. Nelze doložit, že žádný systém nikdy témata nepoužije jako pomocný kontext. Bezpečnější je říct, že `knowsAbout` není identifikační vlastnost.

**Návrh opravy:**

> Témata nejsou hlavní identifikační údaj. K odlišení autora od jmenovce slouží především `url` a `sameAs`, tedy odkazy na jeho ověřitelné profily nebo autorskou stránku.

---

### [WARNING] Ahrefs výsledek je popsán méně přesně, než umožňuje zdroj

**Problémové místo:**

> Za 30 dní po přidání nenašel významný nárůst citací v režimu AI ani v ChatGPT; v Přehledu od AI citace mírně klesly.

**Problém:**  
Podklad uvádí konkrétně: AI Mode +2,4 % a ChatGPT +2,2 % statisticky nerozlišitelné od nuly, AI Overviews −4,6 % statisticky významný pokles. Slovo „mírně“ je sice opatrné, ale vynechává důležitou informaci o statistické významnosti.

**Návrh opravy:**

> Za 30 dní po přidání nenašel významný nárůst citací v režimu AI ani v ChatGPT. U Přehledu od AI citace u sledovaných stránek klesly o 4,6 % a podle autorů testu šlo o statisticky významný pokles. Test ale sloučil více typů strukturovaných dat a `knowsAbout` neměřil samostatně.

---

### [WARNING] „K popisu autora nebo firmy věcně patří“ zní jako obecné doporučení pro všechny

**Problémové místo:**

> Proč ji tedy vůbec psát? Protože k popisu autora nebo firmy věcně patří a stojí málo práce, když už strukturovaná data máte.

**Problém:**  
To je o něco silnější než zbytek článku. `knowsAbout` může dávat smysl jako doplněk, ale není nutná ani doporučená Googlem. „Patří“ může čtenář chápat jako povinnou nebo standardní součást.

**Návrh opravy:**

> Proč ji tedy vůbec psát? Může dávat smysl jako doplněk popisu autora nebo firmy, pokud témata na stránce skutečně dokládáte a strukturovaná data už používáte. Jako páku na citace ji ale nepočítejte.

---

### [WARNING] Pro netechnického čtenáře chybí krátké vysvětlení `@id`, `Thing`, `sameAs`

**Problémové místo:**

> Takhle může vypadat autor na své autorské stránce. Dvě témata jsou zapsaná s odkazem na Wikidata, třetí jako prostý text:

a později:

> Typ Person se stabilním @id a s knowsAbout.

**Problém:**  
Majitel e-shopu nebo firemního webu bez vývojářského vzdělání se může ztratit v rozdílu mezi `@id`, `url`, `sameAs` a `Thing`. Článek je jinak dobře vysvětlující, tady ale skáče rovnou do JSON-LD.

**Návrh opravy:**  
Před první ukázku JSON-LD vložit krátký odstavec:

> Krátce k pojmům v ukázce: `@id` je trvalý identifikátor osoby nebo firmy uvnitř strukturovaných dat, `url` je běžná stránka pro čtenáře a `sameAs` vede na profil nebo položku, která jednoznačně potvrzuje identitu. `Thing` zde znamená samostatně pojmenované téma, například položku na Wikidatech.

---

### [TIP] Kontrolovaný soubor 38 stránek Googlu popsat přesněji

**Problémové místo:**

```yaml
label: "stránek dokumentace Googlu ke strukturovaným datům zmiňuje knowsAbout (návody k typům a obecné pokyny, kontrola 15. 9. 2026)"
```

a v textu:

> Prošli jsme 38 stránek dokumentace Googlu ke strukturovaným datům — návody ke všem typům z galerie, úvod a obecné pokyny.

**Problém:**  
Podle dodaného podkladu kontrola zahrnovala také stránku k JavaScriptu. Není to věcná chyba ve výsledku, ale popis rozsahu kontroly je neúplný.

**Návrh opravy:**

```yaml
label: "stránek dokumentace Googlu ke strukturovaným datům zmiňuje knowsAbout (návody z galerie, úvod, obecné pokyny a stránka k JavaScriptu; kontrola 15. 9. 2026)"
```

V textu:

> Prošli jsme 38 stránek dokumentace Googlu ke strukturovaným datům — návody ke všem typům z galerie, úvod, obecné pokyny a stránku k JavaScriptu.

---

### [TIP] Interní odkaz obsahuje ve slugu zakázaný termín „schema markup“

**Problémové místo:**

```md
[kauzální test Ahrefs z 11. 5. 2026](/blog/schema-markup-ai-citace-test/)
```

**Problém:**  
Viditelný anchor je v pořádku, ale URL obsahuje `schema-markup`. Web má používat slovník „strukturovaná data“ místo „schema markup“. Pokud je to existující URL, není to kritická obsahová vada, ale je to nekonzistentní s brand slovníkem.

**Návrh opravy:**  
Pokud lze měnit URL nebo vytvořit alias:

```md
[kauzální test Ahrefs z 11. 5. 2026](/blog/strukturovana-data-ai-citace-test/)
```

Pokud je původní URL už indexovaná, ponechat ji technicky a vytvořit 301 přesměrování na nový slug.

---

### [TIP] FAQ odpověď k AI citacím je dlouhá; pro citovatelnost ji lze zhutnit

**Problémové místo:**

```yaml
q: "Zvýší knowsAbout šanci na citaci v ChatGPT nebo v režimu AI?"
a: "Veřejný doklad jsme nenašli. Google píše, že pro zobrazení v Přehledu od AI a v režimu AI nemusíte přidávat žádná zvláštní strukturovaná data ze schema.org. Kauzální test Ahrefs na 1 885 stránkách po přidání JSON-LD nenašel významný nárůst citací, jednotlivé vlastnosti ale neměřil zvlášť. Dokumentaci, podle které by knowsAbout četl ChatGPT nebo jiný AI asistent, jsme nenašli."
```

**Problém:**  
Obsahově je odpověď správná a samostatná, ale je delší a obsahuje více větví. Pro AI citaci by mohla být údernější.

**Návrh opravy:**

```yaml
a: "Veřejný doklad jsme nenašli. Google uvádí, že pro Přehled od AI ani režim AI není potřeba zvláštní strukturované datování ze schema.org. Test Ahrefs na 1 885 stránkách po přidání JSON-LD nenašel významný nárůst citací; vlastnost knowsAbout ale neměřil samostatně. Dokumentaci AI asistentů ke čtení knowsAbout jsme nenašli."
```

Poznámka: místo „datování“ použít správně „data“:

```yaml
a: "Veřejný doklad jsme nenašli. Google uvádí, že pro Přehled od AI ani režim AI nejsou potřeba žádná zvláštní strukturovaná data ze schema.org. Test Ahrefs na 1 885 stránkách po přidání JSON-LD nenašel významný nárůst citací; vlastnost knowsAbout ale neměřil samostatně. Dokumentaci AI asistentů ke čtení knowsAbout jsme nenašli."
```

---

### [TIP] CTA je relevantní, ale může přesněji slíbit obsah auditu

**Problémové místo:**

> **Nevíte, jak váš web popisuje autory a firmu?** [AI SEO audit za 3 600 Kč](/audit/) projde strukturovaná data i signály důvěryhodnosti — kdo za obsahem stojí a jak je to ověřitelné — a dá vám prioritní seznam úprav s odhadem dopadu.

**Hodnocení:**  
CTA je dobré: vede na konkrétní produkt, má cenu a odpovídá tématu článku. Chybí jen zmínka o 60min konzultaci, která je podle zadání součástí produktu.

**Návrh opravy:**

> **Nevíte, jak váš web popisuje autory a firmu?** [AI SEO audit za 3 600 Kč](/audit/) projde strukturovaná data i signály důvěryhodnosti — kdo za obsahem stojí a jak je ověřitelný — a dá vám prioritní seznam úprav s odhadem dopadu včetně 60min konzultace.

---

## Co je v pořádku

- `answer` má 51 slov, začíná definicí a dává samostatný smysl.  
- Meta description má vhodnou délku a přesně odpovídá obsahu.  
- Článek se správně vyhýbá overclaimu typu „AI vás začne doporučovat“.  
- Příklady JSON-LD jsou podle dodaného ověření validní.  
- CTA není generické a vede na konkrétní produkt.  
- Aktuálnost je ukotvená k 15. 9. 2026 a zdroje jsou uvedené konkrétně.