## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z velké části správným směrem: titulek má dobrou délku, slug je smysluplný, CTA vede na konkrétní produkty, text už většinou negarantuje citace a vysvětluje strukturovaná data opatrněji. Zůstávají ale problémy hlavně ve frontmatteru/HowTo/FAQ a několik stále příliš silných tvrzení v těle článku.

---

## Nálezy

### [BLOCKER] Frontmatter `howto` stále slibuje „získat citace“

**Problémové místo:**

```yaml
howto:
  name: "Jak získat citace v Perplexity AI"
```

**Proč je to problém:**  
„Jak získat citace“ zní jako návod s dosažitelným výsledkem. U Perplexity ale citaci nelze garantovat a článek sám to správně říká. V metadatech je claim pořád tvrdší než v těle článku.

**Návrh opravy:**

```yaml
howto:
  name: "Jak zvýšit šanci na citace v Perplexity AI"
```

Nebo ještě bezpečněji:

```yaml
howto:
  name: "Jak připravit obsah pro citace v Perplexity AI"
```

---

### [BLOCKER] Frontmatter `howto` obsahuje tvrdé tvrzení o preferenci aktuálního obsahu

**Problémové místo:**

```yaml
text: "Perplexity upřednostňuje aktuální obsah. U klíčových stránek aktualizujte data, příklady a čísla; podle analýz dává smysl interval zhruba 2–3 měsíce."
```

**Proč je to problém:**  
V těle článku je tvrzení už změkčené, ale ve strukturovaných datech zůstalo tvrdé „Perplexity upřednostňuje“. Navíc „podle analýz“ je pořád bez zdroje. Pokud analýzy nejsou citované nebo pojmenované, je to nedoložitelné.

**Návrh opravy:**

```yaml
text: "U témat, kde se informace rychle mění, může aktuální obsah zvýšit šanci na citaci. U klíčových stránek proto pravidelně revidujte data, příklady, ceny a fakta; prakticky dává smysl kontrola zhruba každé 2–3 měsíce."
```

---

### [WARNING] HowTo má pořád 5 kroků, zatímco článek komunikuje 4 pilíře + taktiku navíc

**Problémové místo:**

```yaml
stats:
  - value: "4"
    label: "pilíře optimalizace pro Perplexity"
...
howto:
  steps:
    ...
    - name: "Buďte přítomní v diskuzích (Reddit)"
```

**Proč je to problém:**  
V těle je Reddit správně přesunutý mimo „Krok 5“ jako praktická taktika. Ve frontmatteru ale pořád vystupuje jako pátý krok HowTo. To vytváří rozpor mezi obsahem stránky a strukturovanými daty.

**Návrh opravy:**  
Buď z HowTo odstranit pátý krok, nebo ho přejmenovat mimo krokovou logiku.

Lepší varianta:

```yaml
howto:
  name: "Jak zvýšit šanci na citace v Perplexity AI"
  steps:
    - name: "Pište faktický, snadno citovatelný obsah"
    - name: "Držte obsah aktuální tam, kde se informace mění"
    - name: "Nasaďte strukturovaná data"
    - name: "Sjednoťte informace o značce napříč zdroji"
```

Reddit ponechat jen v článku jako samostatnou „praktickou taktiku“.

---

### [WARNING] „Podle dostupných analýz“ je pořád nedoložené

**Problémové místo:**

```markdown
Podle dostupných analýz dává u klíčových stránek smysl revize zhruba každé 2–3 měsíce
```

**Proč je to problém:**  
Tvrzení působí fakticky, ale není uvedeno, jaké analýzy. Pokud článek neobsahuje odkazy na konkrétní zdroje, je lepší to formulovat jako praktické doporučení, ne jako závěr analýz.

**Návrh opravy:**

```markdown
Jako praktické pracovní pravidlo dává u klíčových stránek smysl revize zhruba každé 2–3 měsíce — aktualizovat data, příklady, ceny a fakta.
```

Stejnou úpravu proveďte i ve FAQ a frontmatteru.

---

### [WARNING] „Aktuálnost je jeden z nejvýraznějších pilířů“ je stále příliš silné

**Problémové místo:**

```markdown
Aktuálnost je u Perplexity jeden z nejvýraznějších pilířů — hlavně u témat, kde se informace rychle mění
```

**Proč je to problém:**  
Odstavec výše správně říká, že Perplexity přesné váhy neuvádí. Formulace „jeden z nejvýraznějších pilířů“ pak působí jako potvrzený ranking faktor.

**Návrh opravy:**

```markdown
Aktuálnost je u Perplexity prakticky důležitá hlavně u témat, kde se informace rychle mění — ceny, nástroje, srovnání, produktové funkce nebo trendy.
```

Nebo:

```markdown
Z dostupných pozorování vyplývá, že aktuálnost může u Perplexity hrát výraznou roli hlavně u témat, kde se informace rychle mění.
```

---

### [WARNING] Tvrzení „víc než jinde“ není doložené

**Problémové místo:**

```markdown
Zastaralý obsah — u Perplexity snižuje šanci na citaci víc než jinde.
```

**Proč je to problém:**  
Srovnání „víc než jinde“ vyžaduje důkaz. Bez konkrétního zdroje jde o overclaim.

**Návrh opravy:**

```markdown
**Zastaralý obsah** — u témat, kde se informace mění, může snižovat šanci, že bude stránka vybraná jako vhodný zdroj.
```

---

### [WARNING] „Perplexity často cituje komunitní obsah“ je moc široké

**Problémové místo ve frontmatteru:**

```yaml
text: "Perplexity často cituje komunitní obsah."
```

**Problémové místo ve FAQ:**

```markdown
U části dotazů se mezi zdroji objevuje i komunitní obsah, například Reddit.
```

**Problémové místo v těle:**

```markdown
V některých typech dotazů se v citacích Perplexity objevuje i komunitní obsah, například Reddit.
```

**Proč je to problém:**  
Tělo článku je formulované bezpečně. Frontmatter je tvrdší: „často cituje komunitní obsah“. Bez dat je lepší držet se opatrnější verze.

**Návrh opravy ve frontmatteru:**

```yaml
text: "U některých typů dotazů se v citacích Perplexity může objevovat i komunitní obsah. Zapojte se věcně do relevantních diskuzí, ne spamem ani promo příspěvky."
```

---

### [WARNING] „Samotný vlastní web nestačí“ je příliš absolutní

**Problémové místo:**

```yaml
a: "Samotný vlastní web nestačí. Perplexity i další AI nástroje hledají takzvaný signál shody..."
```

**Proč je to problém:**  
U některých informačních dotazů může být vlastní web citován i bez širších zmínek. Absolutní formulace je příliš tvrdá.

**Návrh opravy:**

```yaml
a: "U konkurenčních, hodnoticích a značkových dotazů samotný vlastní web často nestačí. Perplexity i další AI nástroje mohou zohledňovat shodu informací napříč více nezávislými zdroji — recenzemi, oborovými weby, diskusemi a vlastním webem."
```

---

### [WARNING] „Perplexity porovnává informace z více nezávislých zdrojů“ je formulované jako jistota

**Problémové místo:**

```yaml
a: "Perplexity porovnává informace z více nezávislých zdrojů a komunitní diskuse jsou bohatým zdrojem reálných zkušeností."
```

**Proč je to problém:**  
Mechanismus výběru zdrojů Perplexity není veřejně přesně popsaný. Lepší je formulovat jako pravděpodobné/prakticky pozorované chování.

**Návrh opravy:**

```yaml
a: "Perplexity u vyhledávacích odpovědí pracuje s více zdroji a u některých dotazů se mezi citacemi objevují i komunitní diskuse. Ty mohou obsahovat reálné zkušenosti uživatelů, proto se vyplatí být ve svém oboru věcně přítomní i mimo vlastní web."
```

---

### [WARNING] „Promo příspěvky komunita i Perplexity poznají“ je přehnané a antropomorfní

**Problémové místo:**

```markdown
**Spam na Redditu** — promo příspěvky komunita i Perplexity poznají.
```

**Proč je to problém:**  
Komunita spam poznat může, ale tvrzení, že ho „pozná Perplexity“, je nedoložitelné a antropomorfizuje systém.

**Návrh opravy:**

```markdown
**Spam na Redditu** — promo příspěvky mohou poškodit důvěryhodnost značky a v diskuzích obvykle nefungují dlouhodobě.
```

---

### [WARNING] Keywordy ve frontmatteru obsahují nepočeštěné nebo nekonzistentní výrazy

**Problémové místo:**

```yaml
  - "recentnost obsahu"
  - "consensus signál"
```

**Proč je to problém:**  
V těle článku se používá „aktuálnost“ a „signál shody“. Frontmatter ale pořád obsahuje anglicismy/žargon. To je v rozporu s požadovaným brand voice.

**Návrh opravy:**

```yaml
  - "aktuálnost obsahu"
  - "signál shody"
```

Případně ponechat jako sekundární varianty jen pokud existuje jasný SEO důvod, ale v článku je nepoužívat jako hlavní slovník.

---

### [TIP] Meta description je v pořádku délkou, ale může lépe nést hlavní KW

**Současné místo:**

```yaml
description: "Optimalizace pro Perplexity AI krok za krokem: čerstvost obsahu, citovatelná struktura, strukturovaná data a shoda napříč zdroji."
```

**Hodnocení:**  
Délka je v pořádku. Popis je věcný a bez overclaimu. Chybí ale přesná fráze „Perplexity SEO“, která je hlavní cílové KW.

**Návrh opravy:**

```yaml
description: "Perplexity SEO krok za krokem: aktuálnost obsahu, citovatelná struktura, strukturovaná data a shoda napříč zdroji."
```

---

### [TIP] „Čerstvost“ vs. „aktuálnost“ sjednotit

**Problémová místa:**

```markdown
čerstvost obsahu
```

```markdown
aktuálnost
```

```yaml
  - "čerstvost obsahu"
  - "recentnost obsahu"
```

**Proč je to problém:**  
„Čerstvost“ je srozumitelné, ale „aktuálnost“ je přirozenější a stabilnější termín. V článku se střídají varianty.

**Návrh opravy:**  
Jako hlavní termín používat „aktuálnost obsahu“. „Čerstvost“ případně jen jako doplňkový výraz.

Např.:

```markdown
Proti obecné generativní optimalizaci (GEO) tu může hrát výraznější roli **aktuálnost obsahu** a **shoda informací napříč nezávislými zdroji**.
```

---

### [TIP] Frontmatter `stats` „0 Kč“ může působit marketingově zjednodušeně

**Problémové místo:**

```yaml
  - value: "0 Kč"
    label: "základ zvládnete bez placených nástrojů"
```

**Proč je to problém:**  
Není to vyloženě chybné, ale u odborného tutorialu to působí trochu jako marketingový háček. Navíc optimalizace bez placených nástrojů může stát čas nebo interní kapacitu.

**Návrh opravy:**

```yaml
  - value: "bez placených nástrojů"
    label: "základní kontrolu zvládnete ručně"
```

Nebo:

```yaml
  - value: "ručně"
    label: "základní audit obsahu zvládnete bez specializovaných nástrojů"
```

---

### [TIP] Krátká odpověď je dobrá, ale poslední věta může být přesnější

**Současné místo:**

```yaml
Citaci nelze zaručit, ale dá se ovlivnit.
```

**Hodnocení:**  
Délka odpovědi je v limitu 40–60 slov a začíná definicí. To je dobře. Poslední věta je ale trochu obecná.

**Návrh drobné úpravy:**

```yaml
Citaci nelze zaručit, ale těmito úpravami lze zvýšit šanci, že Perplexity obsah vyhodnotí jako vhodný zdroj.
```

Pozor: po úpravě zkontrolovat délku, aby zůstala do 60 slov.

---

### [TIP] CTA je konkrétní a v zásadě splňuje zadání

**Dobré místo:**

```markdown
připravili jsme [AI SEO Wireframe Pack](/pack/): kompletní rámec se šablonami textů a strukturovanými daty za 1 490 Kč
```

```markdown
[AI SEO audit na míru](/audit/) za 9 990 Kč
```

**Hodnocení:**  
CTA splňuje požadavek: vede na konkrétní produkt, uvádí cenu a není jen generické „kontaktujte nás“. Formulace je přiměřeně věcná.

**Drobné doporučení:**  
„kompletní rámec“ může znít lehce absolutně. Bezpečnější:

```markdown
praktický pracovní rámec se šablonami textů a strukturovanými daty za 1 490 Kč
```

---

## Shrnutí hlavních oprav před publikací

1. Upravit `howto.name` z „Jak získat citace“ na „Jak zvýšit šanci na citace“.  
2. Změkčit ve frontmatteru tvrzení „Perplexity upřednostňuje aktuální obsah“.  
3. Odstranit nebo přeformulovat nedoložené „podle analýz“.  
4. Sjednotit HowTo na 4 kroky, Reddit nechat jako praktickou taktiku.  
5. Změkčit absolutní formulace: „vlastní web nestačí“, „víc než jinde“, „Perplexity porovnává“.  
6. Sjednotit slovník: „aktuálnost obsahu“, „signál shody“.  

Po těchto úpravách bude článek publikovatelný.