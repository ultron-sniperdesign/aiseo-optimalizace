## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou jen částečné. V článku stále zůstaly přímé rozpory s deklarovanými opravami: „prokazatelně“, „pozorovatelnou pro ChatGPT“, „nice-to-have“, „must-have“, „spec“, „ranking faktor“. Navíc tvrdá tvrzení o podpoře Claude / Perplexity / Lighthouse nejsou v článku doložená odkazy na zdroje.

---

## Nálezy

### [BLOCKER] Vrátil se overclaim „prokazatelně“ a nepotvrzené tvrzení o ChatGPT

**Citace:**

```md
llms.txt není must-have. Hodnotu má prokazatelně pro Claude a Perplexity, pozorovatelnou pro ChatGPT, žádnou pro Google.
```

**Problém:**  
Tohle je v přímém rozporu s opravami po 1. auditu. „Prokazatelně“ je příliš silné bez citace a „pozorovatelnou pro ChatGPT“ znovu vytváří dojem podpory, kterou OpenAI oficiálně nepotvrdila.

**Návrh opravy:**

```md
llms.txt není nutnost. Podporu deklarují Claude a Perplexity; ChatGPT ji oficiálně nepotvrdil, takže případné testy berte jen jako orientační. Google llms.txt podle veřejných vyjádření nepoužívá pro klasické vyhledávání ani AI Overviews.
```

---

### [BLOCKER] Nedoložené tvrdé claimy o oficiální podpoře Claude, Perplexity a Lighthouse

**Citace:**

```md
V roce 2026 ho oficiálně podporuje Anthropic Claude a Perplexity
```

```md
Anthropic Claude", desc: "oficiálně podporuje od ledna 2026; podle dokumentace Anthropic ho aktivně využívá."
```

```md
Perplexity", desc: "podporuje od poloviny 2025; načítá llms.txt a používá pro prioritizaci stránek."
```

```md
Lighthouse od dubna 2026 obsahuje llms.txt check.
```

**Problém:**  
Jsou to konkrétní faktická tvrzení s daty a mechanismem použití. Článek ale neobsahuje žádné odkazy na zdroje. U tématu, kde se podpora rychle mění, je to rizikové. Nestačí obecná věta „vychází z dokumentace…“.

**Návrh opravy:**  
Doplnit krátkou sekci „Zdroje k podpoře llms.txt“ nebo inline odkazy přímo v odstavci adopce. Minimálně doložit:

- dokumentaci Anthropic,
- oznámení nebo dokumentaci Perplexity,
- veřejná vyjádření Garyho Illyese / Johna Muellera,
- changelog / release note Lighthouse z dubna 2026.

Pokud zdroj pro některé tvrzení nemáte, změkčit formulaci:

```md
Podle dostupné dokumentace a oznámení podporu llms.txt deklarují Claude a Perplexity. U ChatGPT není oficiální podpora potvrzená. Google podle veřejných vyjádření podporu neplánuje.
```

---

### [BLOCKER] Zakázané a neopravené anglicismy ve viditelné části i frontmatteru

**Citace:**

```yaml
- value: "nice-to-have"
```

```yaml
label: "Jeremy Howard navrhl spec; community-managed, ne formální standard"
```

```md
llms.txt není must-have.
```

```md
Pro většinu CZ webů je to nice-to-have
```

```md
Spec od Jeremyho Howarda je jednoduchý
```

```md
komunitní spec
```

```md
Není to ranking faktor.
```

**Problém:**  
V zadání bylo výslovně uvedeno, že tyto výrazy už byly opraveny, ale v článku zůstaly. Navíc „ranking faktor“ má být nahrazeno formulací typu „signál pro řazení“.

**Návrh opravy:**

- `nice-to-have` → `užitečný doplněk`
- `must-have` → `nutnost`
- `spec` → `specifikace`
- `community-managed` → `komunitně spravovaná`
- `ranking faktor` → `signál pro řazení výsledků`

Konkrétně:

```md
llms.txt není nutnost. Pro většinu běžných webů je to užitečný doplněk.
```

```md
Specifikace od Jeremyho Howarda je jednoduchá.
```

```md
Není to signál pro řazení výsledků.
```

---

### [WARNING] FAQ stále obsahuje přehnané tvrzení o robots.txt

**Citace:**

```md
Robots.txt je standardizovaný a univerzální (respektují ho všechny seriózní vyhledávací nástroje)
```

**Problém:**  
„Všechny seriózní“ je zbytečně absolutní a hodnotící. Robots.txt není technická zábrana a jeho respektování závisí na provozovateli. V tabulce je formulace lepší, ale FAQ ji znovu zhoršuje.

**Návrh opravy:**

```md
Robots.txt je standardizovaný soubor, který běžné vyhledávače typicky respektují, ale není technickou blokací. U AI robotů záleží na konkrétním provozovateli. llms.txt je naopak navrhovaný standard s nerovnoměrnou podporou.
```

---

### [WARNING] „Žádnou pro Google“ je příliš absolutní a nepřesné

**Citace:**

```md
Hodnotu má ... žádnou pro Google.
```

**Problém:**  
Bezpečnější je říct, že Google llms.txt nepoužívá jako podporovaný mechanismus pro vyhledávání / AI Overviews. „Žádnou hodnotu“ je absolutní tvrzení — může mít nepřímou hodnotu jako kontrolní nebo dokumentační soubor pro tým, i když ne pro Google ranking.

**Návrh opravy:**

```md
Google llms.txt podle veřejných vyjádření nepoužívá pro klasické vyhledávání ani AI Overviews.
```

---

### [WARNING] „Pro většinu CZ webů“ je nedoložené zobecnění

**Citace:**

```md
Pro většinu CZ webů je to nice-to-have, ne nutnost
```

```md
Pro většinu CZ webů jsou prioritou jiné věci
```

**Problém:**  
Tvrzení o „většině CZ webů“ není podložené daty. Navíc článek nepracuje s českým trhem tak konkrétně, aby to unesl.

**Návrh opravy:**

```md
Pro většinu běžných prezentačních webů je llms.txt spíš užitečný doplněk než priorita.
```

A v závěru:

```md
U běžných firemních webů bývají přednější kvalitní obsah, strukturovaná data, reputace a řízení přístupu AI robotů přes robots.txt.
```

---

### [WARNING] „AI hledají“ / „velké jazykové modely říká“ je technicky nepřesné

**Citace:**

```md
který velkým jazykovým modelům říká, které stránky vašeho webu jsou důležité
```

```md
podle návrhu specifikace ho mají AI nástroje hledat tam
```

**Problém:**  
Velké jazykové modely samy o sobě web neprocházejí. Soubor mohou využívat nástroje, asistenti, vyhledávací systémy nebo retrievery nad modelem. Pro vzdělávací článek je vhodnější přesnější formulace.

**Návrh opravy:**

```md
který AI nástrojům a jejich vyhledávacím systémům napovídá, které stránky webu jsou důležité
```

A:

```md
podle návrhu specifikace ho mají podporující nástroje hledat v kořeni domény
```

---

### [WARNING] „Špatně udržovaný llms.txt může víc škodit než pomoct“ potřebuje zjemnit

**Citace:**

```md
Špatně udržovaný (zastaralý, odkazující na 404) llms.txt může víc škodit než pomoct
```

**Problém:**  
„Víc škodit než pomoct“ je silné tvrzení. U Google nemá mít přímý dopad, u Claude / Perplexity není doložené, jak přesně by „škodil“. Bezpečnější je popsat konkrétní riziko.

**Návrh opravy:**

```md
Špatně udržovaný llms.txt se zastaralými odkazy nebo odkazy na 404 může podporující nástroje navádět na horší vstupy. Pokud ho nemáte kapacitu udržovat, je lepší ho zatím nenasazovat.
```

---

### [WARNING] FAQ odpověď „Většinou ne“ u malých webů je příliš kategorická

**Citace:**

```md
Většinou ne. U webu s jednou až třemi stránkami ... nepřinese llms.txt prakticky žádnou hodnotu
```

**Problém:**  
V kontextu článku to dává smysl, ale „prakticky žádnou hodnotu“ je pořád absolutní. Lepší je říct, že přínos bývá nízký a obvykle nejsou co prioritizovat.

**Návrh opravy:**

```md
U malého prezentačního webu s jednou až třemi stránkami bývá přínos llms.txt nízký, protože není mnoho obsahu k prioritizaci. Větší smysl má u webů s dokumentací, kategoriemi, blogem, ceníkem nebo více typy obsahu.
```

---

### [WARNING] Sekce adopce tvrdí „aktivně využívá“ a „používá pro prioritizaci“ bez vysvětlení mechanismu

**Citace:**

```md
podle dokumentace Anthropic ho aktivně využívá
```

```md
načítá llms.txt a používá pro prioritizaci stránek
```

**Problém:**  
„Aktivně využívá“ a „prioritizace“ jsou silná technická tvrzení. Čtenář neví, jestli jde o trénování, retrieval, webové vyhledávání, agentní browsing, nebo jen navigační pomůcku.

**Návrh opravy:**  
Buď doplnit přesný zdroj a mechanismus, nebo změkčit:

```md
Anthropic Claude: podporu llms.txt deklaruje v dokumentaci; soubor může sloužit jako navigační pomůcka pro výběr důležitých stránek.
```

```md
Perplexity: podporu llms.txt deklaruje; soubor může využívat k orientaci v důležitých URL webu.
```

---

### [TIP] Frontmatter `stats` obsahuje jazykově slabé a nebrandové položky

**Citace:**

```yaml
- value: "nice-to-have"
  label: "pro většinu webů ne nutnost; smysl hlavně u dokumentace a komplexních webů"
```

**Problém:**  
Pokud se `stats` renderují na stránce, zůstává tam anglicismus a tvrdé zobecnění.

**Návrh opravy:**

```yaml
- value: "Doplněk"
  label: "pro běžné weby není nutnost; největší smysl má u dokumentace a komplexních webů"
```

---

### [TIP] Další anglicismy a nečeské formulace v těle

**Citace:**

```md
dev nástroje
```

```md
AI users pro research
```

```md
Google-only strategie
```

**Problém:**  
Tón článku má být věcný a srozumitelný, ne agenturně-anglický.

**Návrh opravy:**

```md
vývojářské nástroje
```

```md
weby, jejichž publikum používá Claude nebo Perplexity při rešerši
```

```md
strategie zaměřená jen na Google
```

---

### [TIP] Slug, title, meta description a CTA jsou v zásadě v pořádku

**Co je dobře:**

- Titulek má cca 52 znaků a klíčové slovo je na začátku.
- Meta description je v rozumné délce.
- Slug `llms-txt-navod` je smysluplný.
- `answer` má cca 50 slov, začíná definicí a dává samostatný smysl.
- CTA vede na konkrétní produkty: Audit 9 990 Kč a Pack 1 490 Kč.
- Interní odkaz na robots.txt článek pomáhá odlišit téma a snižuje riziko kanibalizace.

---

## Shrnutí priorit oprav

Před publikací opravit hlavně:

1. Insight box — odstranit „prokazatelně“, „pozorovatelnou pro ChatGPT“, „must-have“, „nice-to-have“.
2. Doplnit zdroje k podpoře Claude, Perplexity, Google a Lighthouse, nebo claimy změkčit.
3. Vyčistit zbylé zakázané / nevhodné výrazy: `spec`, `ranking faktor`, `nice-to-have`, `must-have`, `AI users pro research`.
4. Zjemnit absolutní tvrzení u Google, robots.txt a malých webů.