## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Bez faktického blockeru. Vypořádání z 1. kola je převážně sedí: opravy jsou dohledané i mimo hlavní text, problematické formulace nezůstaly v nadpisech, FAQ ani komponentách. Důvod u nezapracovaného nálezu „mohou pokračovat do Seznam AI“ přijímám — v článku je věta nově atribučně ukotvená „Podle nápovědy…“.

Před publikací bych opravil hlavně FAQ: jedna odpověď je gramaticky rozbitá a dvě nejsou úplně sebestačné při čtení bez otázky.

---

## Nálezy

### [WARNING] FAQ odpověď není gramaticky úplná a bez otázky nedává samostatný smysl

**Problémové místo:**

```yaml
- q: "Z jakých zdrojů Seznam AI odpovídá?"
  a: "Podle nápovědy Seznam AI z webového a zpravodajského indexu Vyhledávání a z Počasí.cz. ..."
```

Chybí sloveso. Odpověď má fungovat i bez otázky, ale první věta je neúplná.

**Návrh opravy:**

```yaml
a: "Podle nápovědy Seznam AI odpovídá z webového a zpravodajského indexu Vyhledávání a z Počasí.cz. ..."
```

---

### [WARNING] FAQ odpověď začíná neurčitě („Základ je stejný“) a není plně sebestačná

**Problémové místo:**

```yaml
- q: "Mám pro Seznam optimalizovat web jinak než pro Google?"
  a: "Základ je stejný: web dostupný robotovi, v indexu a se srozumitelným obsahem. ..."
```

Při samostatném čtení odpovědi není jasné, čeho je „základ“ stejný. FAQ má být citovatelné bez otázky.

**Návrh opravy:**

```yaml
a: "Základ optimalizace pro Seznam i Google je stejný: web má být dostupný robotovi, v indexu a se srozumitelným obsahem. ..."
```

---

### [WARNING] Tabulka má na mobil zbytečně dlouhé buňky

**Problémové místo:**

```markdown
| Odkud bere data | Vyhledávání, zprávy, Zboží.cz, Počasí.cz, Firmy.cz, Sport.cz, jízdní řády, TV program | webový a zpravodajský index Vyhledávání a Počasí.cz |
```

Tabulka se sice posouvá vodorovně, ale tato buňka je dlouhý výčet. Na mobilu se bude špatně skenovat a čtenář bude hůř porovnávat rozdíl mezi tiskovou zprávou a nápovědou.

**Návrh opravy:**

Buňku zkraťte a detail dejte pod tabulku:

```markdown
| Odkud bere data | více služeb Seznamu včetně Zboží.cz a Firmy.cz | webový a zpravodajský index Vyhledávání a Počasí.cz |
```

A pod tabulku doplňte jednou větou:

```markdown
Tisková zpráva jmenovala také Zboží.cz, Firmy.cz, Sport.cz, jízdní řády a TV program; nápověda je k 14. 10. 2026 mezi aktuálními zdroji neuvádí.
```

---

### [TIP] Anglicismus „homepage“ je zbytečný

**Problémové místo:**

```markdown
| Kde | homepage, aplikace Seznam, Vyhledávání, asistent.seznam.cz | homepage a výsledky Vyhledávání; aplikace přijde později |
```

„Homepage“ není zakázaný termín, ale v článku pro české firmy je zbytečně anglický. Česká náhrada je jasnější.

**Návrh opravy:**

```markdown
| Kde | domovská stránka Seznamu, aplikace Seznam, Vyhledávání, asistent.seznam.cz | domovská stránka Seznamu a výsledky Vyhledávání; aplikace přijde později |
```

---

### [TIP] Výraz „feed“ je srozumitelnější jako „produktový feed“

**Problémová místa:**

```markdown
nabídky Seznam Nákupů z feedů e-shopů
```

```markdown
E-shop: připravte feed pro Zboží.cz
```

```markdown
Placené nabídky Seznam Nákupů z feedu se v Seznam AI zobrazují od května 2026.
```

„Feed“ je v e-commerce běžný, ale pro čtenáře bez hlubší technické znalosti je lepší první výskyt zpřesnit.

**Návrh opravy:**

Používat důsledně:

```markdown
produktový feed pro Zboží.cz
```

nebo při prvním výskytu:

```markdown
produktový feed, tedy soubor s nabídkami e-shopu pro Zboží.cz
```

---

### [TIP] Závěrečná věta má nejasný odkaz zájmena „je“

**Problémové místo:**

```markdown
Pro většinu firem z toho plyne: mít v pořádku základ pro Seznam, sledovat vlastní data a strategii stavět na kanálech, které je prokazatelně přinášejí.
```

„Je“ může odkazovat na „data“, ale kanály nepřinášejí data; myšleny jsou návštěvy, poptávky nebo konverze.

**Návrh opravy:**

```markdown
Pro většinu firem z toho plyne: mít v pořádku základ pro Seznam, sledovat vlastní data a strategii stavět na kanálech, které prokazatelně přinášejí návštěvy a konverze.
```

---

## Co je v pořádku

- Krátká odpověď ve frontmatteru má 55 slov, začíná definicí a dává samostatný smysl.
- Prvních zhruba 100 slov těla článku funguje jako samostatná odpověď.
- H2 nadpisy nesou klíčový pojem i pointu.
- `description` je v rozmezí 70–160 znaků a odpovídá obsahu.
- CTA vede na konkrétní produkt: **Audit AI viditelnosti** za **3 600 Kč bez DPH**; cena je mimo text odkazu.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani garanční prodejní sliby v textu nevidím.