## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

### [BLOCKER] Vypořádání z kola 1 není dotažené: chybí omezení na Search Central

**Problémové místo:**

```md
Google v dokumentaci k funkcím s AI žádný signál zmínek neuvádí.
```

a ve FAQ:

```md
Google v dokumentaci k funkcím s AI neuvádí
```

Ve vypořádání stojí, že formulace byla zúžena na **„v dokumentaci Search Central k funkcím s AI“** na třech místech. V těle článku to opravené je, ale v `answer` a FAQ zůstala širší formulace. To je přesně typ vynechané podmínky, kvůli které se původní nález považuje za nedořešený.

**Návrh opravy:**

V `answer` i FAQ změnit na:

```md
Google v dokumentaci Search Central k funkcím s AI žádný signál zmínek neuvádí.
```

a ve FAQ obdobně:

```md
Google v dokumentaci Search Central k funkcím s AI neuvádí, že by zmínky vyhodnocoval jako zvláštní signál důvěry.
```

---

### [BLOCKER] Vypořádání z kola 1: „signály viditelnosti“ zůstaly mimo checklist

**Problémové místo:**

```md
Když se signály viditelnosti posuzují společně, uspějí dva.
```

a ve FAQ:

```md
Studie z 14. 9. 2026 porovnávala doporučení šesti modelů se signály viditelnosti značky. Když se signály posuzovaly společně...
```

Ve vypořádání je uvedeno, že problematické slovo „signál“ bylo nahrazeno slovem „proměnná“, aby to neznělo jako potvrzený signál používaný modelem. V checklistu oprava sedí, ale stejná terminologie zůstala v těle a FAQ.

**Návrh opravy:**

V těchto místech použít „proměnné“ nebo „ukazatele“:

```md
Když se proměnné viditelnosti posuzují společně, uspějí dvě.
```

```md
Studie z 14. 9. 2026 porovnávala doporučení šesti modelů s proměnnými viditelnosti značky. Když se proměnné posuzovaly společně...
```

Poznámka: formulaci „žádný signál zmínek neuvádí“ lze nechat jen tam, kde se výslovně mluví o dokumentaci Googlu/Search Central. Pro popis studie je bezpečnější „proměnná“.

---

### [WARNING] Dva H2 nadpisy nesplňují zadání: zvýrazněné slovo není klíčový pojem

**Problémové místo:**

```md
## Co <span class="hl">nedělat</span> — <strong>spam se obrací proti značce</strong>
```

```md
## Co si <span class="hl">odnést</span> — <strong>tři věty, které obstojí</strong>
```

Formálně obsahují `<span class="hl">` i `<strong>`, ale zvýrazněné výrazy „nedělat“ a „odnést“ nejsou klíčové pojmy. Brief výslovně říká, že H2 má nést klíčový pojem i pointu.

**Návrh opravy:**

Například:

```md
## Co nedělat u <span class="hl">zmínek o značce</span> — <strong>spam se obrací proti značce</strong>
```

```md
## Co si odnést o <span class="hl">AI viditelnosti značky</span> — <strong>souvislost není záruka</strong>
```

---

### [WARNING] Některé FAQ odpovědi nejsou úplně sebestačné bez otázky

**Problémové místo:**

```md
Odpovědi s citacemi obvykle stojí na víc zdrojích...
```

Bez otázky není hned jasné, že jde o AI odpovědi a proč se řeší cizí weby.

**Návrh opravy:**

```md
AI odpovědi s citacemi obvykle stojí na víc zdrojích, takže vedle webu značky často odkazují i na cizí weby...
```

---

**Problémové místo:**

```md
Nedá se to takhle srovnat, protože u zmínek chybí doložený mechanismus.
```

Odpověď začíná odkazem na otázku („to takhle“) a bez ní není plně samostatná.

**Návrh opravy:**

```md
Zmínky o značce a odkazy z jiných webů se nedají přímo srovnat, protože u zmínek chybí doložený mechanismus...
```

---

### [TIP] Jargon „off-page“ je vysvětlený málo česky

**Problémové místo:**

```md
Tohle je **off-page vrstva** AI viditelnosti...
```

a:

```md
Off-page pro AI je dlouhodobá práce...
```

Není to zakázaný termín, ale pro edukativní tón webu je lepší ho při prvním použití přeložit.

**Návrh opravy:**

```md
Tohle je vrstva AI viditelnosti mimo vlastní web — často označovaná jako off-page.
```

```md
Budování zmínek mimo vlastní web je dlouhodobá práce, ne jednorázová kampaň.
```

---

### [TIP] Anglické formulace ve studii zpomalují čtení

**Problémové místo:**

```md
Studie mluví o „limited evidence“...
```

a:

```md
„these relationships are observational, therefore, they should guide testing rather than be interpreted as causal evidence.“
```

Citace je věcně užitečná, ale pro českého čtenáře by měla být hned přeložená.

**Návrh opravy:**

```md
Studie mluví o „omezených důkazech“ („limited evidence“)...
```

U delší citace:

```md
Autoři výslovně píšou, že vztahy jsou pozorované a mají vést k testování, ne být vykládány jako důkaz příčiny.
```

Originální anglickou citaci lze nechat až za českou parafrází.

---

### [TIP] Link text „Organization schema“ jde proti preferovanému českému slovníku

**Problémové místo:**

```md
Identitu značky ve strukturovaných datech řeší [Organization schema](/blog/organization-schema-pro-znacku/)
```

Zakázaný termín „schema markup“ tu sice není, ale link text je zbytečně anglický a web má preferovat české „strukturovaná data“.

**Návrh opravy:**

```md
Identitu značky ve strukturovaných datech řeší [strukturovaná data Organization](/blog/organization-schema-pro-znacku/)
```

nebo přirozeněji:

```md
Identitu značky ve strukturovaných datech řeší článek o [typu Organization](/blog/organization-schema-pro-znacku/).
```

---

## Co je v pořádku

- Krátká odpověď má 56 slov, začíná definicí a dává samostatný smysl.
- Prvních cca 100 slov těla funguje jako samostatná odpověď.
- `title` je do 60 znaků a klíčový pojem je na začátku.
- `description` je v limitu 70–160 znaků.
- Slug `ai-brand-mentions` je pro tento článek smysluplný.
- Interní odkazy jsou relevantní a vedou na navazující obsah.
- CTA je konkrétní, používá kanonické názvy produktů a uvádí ceny: **AI SEO Wireframe Pack** i **Audit AI viditelnosti**.