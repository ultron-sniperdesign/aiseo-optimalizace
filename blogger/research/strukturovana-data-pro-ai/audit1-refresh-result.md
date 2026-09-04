## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Refresh je výrazně lepší než původní zadání: opravuje FAQ/HowTo, doplňuje zdroje, rozlišuje „dokumentovanou funkci u Googlu“ vs. obecný popis schema.org a má dobré CTA. Před publikací ale vidím několik blokujících míst, hlavně kvůli možnému generování HowTo strukturovaných dat z frontmatteru a nejasnému doporučení typu `Person`.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Frontmatter obsahuje `howto`, které může generovat HowTo strukturovaná data

**Citace:**

```yaml
howto:
  name: "Jak nasadit strukturovaná data pro AI v roce 2026"
  steps:
    - name: "Zjistěte, co má u Googlu dokumentovanou funkci"
...
```

**Problém:**

Článek správně vysvětluje, že HowTo rozšířené výsledky Google ukončil a HowTo není v galerii strukturovaných dat. Zároveň ale frontmatter obsahuje blok `howto`, který na mnoha webech slouží k automatickému generování HowTo strukturovaných dat.

To vytváří dvojí riziko:

1. **Vnitřní rozpor:** článek říká „HowTo kvůli výsledku nenasazujte“, ale šablona může HowTo sama nasadit.
2. **Porušení obecných pokynů Googlu:** pokud se z frontmatteru generuje HowTo JSON-LD, ale kroky nejsou viditelně vypsané v těle stránky, jde o označení obsahu, který čtenář nevidí.

To je přesně proti citovanému pravidlu:

> „Don’t mark up content that is not visible to readers of the page.“

**Návrh opravy:**

Varianta A — nejbezpečnější:

```yaml
# odstranit celý howto blok z frontmatteru
```

Varianta B — pokud CMS `howto` používá jen pro interní checklist a negeneruje JSON-LD:

- přejmenovat pole na něco neutrálního, např. `processChecklist`
- ověřit v buildu stránky, že se z něj negeneruje `@type: "HowTo"`

Varianta C — pokud má blok zůstat a má být viditelný:

- vypsat stejné kroky viditelně v článku,
- ale negenerovat z nich HowTo strukturovaná data, protože článek sám říká, že HowTo nemá u Googlu dokumentovanou funkci.

---

## 2. [BLOCKER] `Person` je doporučen bez vymezení, ačkoliv Google nedokumentuje samostatný Person výsledek

**Citace:**

> „Podle obsahu pak přidejte Recipe, VideoObject, LocalBusiness, Event nebo Person.“

A ve FAQ:

> „Podle obsahu pak Recipe, VideoObject, LocalBusiness, Event nebo Person.“

**Problém:**

V článku je hlavní logika postavená na tom, zda je typ v galerii strukturovaných dat Googlu. Podle dodaných faktů je v galerii **Profile page**, ne samostatný typ `Person`.

Takhle formulované doporučení může čtenář pochopit tak, že `Person` je samostatný typ s dokumentovanou funkcí u Googlu stejně jako `Recipe`, `VideoObject`, `LocalBusiness` nebo `Event`. To je nepřesné.

Navíc může vzniknout kanibalizační problém s článkem `/blog/person-data-pro-autora/`, který má zřejmě řešit nuance okolo autora a osoby detailněji.

**Návrh opravy:**

V hlavním textu upravit na:

> „Podle obsahu pak přidejte Recipe, VideoObject, LocalBusiness nebo Event. U osob rozlišujte běžný autorský box a profilovou stránku: Google dokumentuje hlavně strukturovaná data pro ProfilePage, kde může být osoba popsána jako hlavní entita.“

Ve FAQ upravit odpověď podobně:

> „Podle obsahu pak Recipe, VideoObject, LocalBusiness nebo Event. U autorů a osob neberte `Person` jako univerzální vstupenku do výsledků; samostatně řešte, zda jde o profilovou stránku, autorský box nebo identitu značky.“

---

## 3. [BLOCKER] První odstavec přehnaně zobecňuje roli strukturovaných dat pro „AI“

**Citace:**

> „Pro AI i pro vyhledávače mají stejnou roli — usnadňují vytažení faktů a zařazení typu obsahu.“

**Problém:**

Článek se jinak drží přesného tvrzení Googlu, že strukturovaná data nejsou pro generativní AI povinná a neexistuje speciální značení pro AI. Tato věta ale jde dál: říká, že pro „AI“ obecně mají strukturovaná data stejnou roli jako pro vyhledávače.

To není doložitelné pro ChatGPT, Perplexity ani další systémy. Google mluví o vlastních generativních funkcích a o způsobilosti pro rozšířené výsledky ve Vyhledávání, ne o všech AI systémech.

**Návrh opravy:**

Změnit na opatrnější a doložitelnou formulaci:

> „Pro vyhledávače a systémy, které stránku strojově zpracovávají, mohou strukturovaná data usnadnit rozpoznání faktů a typu obsahu. Neznamená to ale, že jsou povinná pro generativní AI nebo že zajistí citaci.“

Tím se zachová smysl, ale zmizí nedoložené zobecnění.

---

# 2. Doporučení

## 1. [WARNING] Titulek je v pořádku délkou, ale slibuje „pro AI“ silněji než obsah

**Citace:**

```yaml
title: "Strukturovaná data pro AI: typy a validace v roce 2026"
```

**Hodnocení:**

Délka titulku je dobrá, klíčové slovo je vepředu a rok je ukotvený. Problém je jemnější: článek správně vysvětluje, že strukturovaná data nejsou speciální páka pro AI, ale titulek může budit dojem, že jde o návod „jak strukturovaná data nasadit pro AI“.

**Návrh opravy:**

Zvážit přesnější titulek:

> „Strukturovaná data pro AI éru: typy a validace 2026“

nebo:

> „Strukturovaná data 2026: typy, AI a validace“

První varianta lépe odpovídá obsahu: nejde o speciální AI značení, ale o strukturovaná data v době AI vyhledávání.

---

## 2. [WARNING] Answer je dobrý, ale formulace „FAQPage a HowTo už ne“ je příliš zkratkovitá

**Citace:**

```yaml
answer: "Strukturovaná data jsou strojově čitelné popisy obsahu, obvykle v JSON-LD. Dokumentovanou funkci u Googlu má jen část typů — Article, Product, Organization nebo BreadcrumbList ano, FAQPage a HowTo už ne. Google zároveň uvádí, že pro generativní AI žádná speciální data potřeba nejsou. Vždy musí odpovídat viditelnému obsahu."
```

**Hodnocení:**

Délka 40–60 slov splněna. Začíná definicí. Samostatně dává smysl. Přesto je „FAQPage a HowTo už ne“ trochu nejasné: může to znít, že typy neexistují nebo nefungují vůbec, což je přesně nuance, na kterou bylo v zadání upozorněno.

**Návrh opravy:**

```yaml
answer: "Strukturovaná data jsou strojově čitelné popisy obsahu, obvykle v JSON-LD. Dokumentovanou funkci u Googlu má jen část typů — Article, Product, Organization nebo BreadcrumbList ano, FAQPage a HowTo už nespouštějí rozšířené výsledky. Google zároveň uvádí, že pro generativní AI žádné speciální značení potřeba není. Data musí odpovídat viditelnému obsahu."
```

---

## 3. [WARNING] „Jediný z typů pro kategorie“ je příliš absolutní

**Citace:**

> „BreadcrumbList všude v hierarchii; jediný z typů pro kategorie, který má dokumentovanou funkci.“

**Problém:**

Tvrzení „jediný“ je příliš tvrdé. U kategorií e-shopu záleží na konkrétním typu stránky a implementaci. Google v galerii pracuje i s jinými funkcemi, které mohou být u výpisových nebo seznamových stránek relevantní. Vzhledem k tomu, že existuje samostatný článek `/blog/strukturovana-data-kategorie-eshopu/`, je lepší tady nevytvářet absolutní zkratku.

**Návrh opravy:**

> „BreadcrumbList je nejbezpečnější základ pro hierarchii kategorií; další typy řešte podle konkrétního obsahu stránky a dokumentace Googlu.“

---

## 4. [WARNING] Použití slova „markup“ je mimo doporučený slovník webu

**Citace:**

> „Markup kvůli tomu mazat nemusíte“

> „nevyužitý markup ve Vyhledávání problémy nedělá“

> „Samotný FAQPage zůstává platný typ schema.org a Google výslovně uvádí, že nevyužitý markup ve Vyhledávání problém nedělá“

**Problém:**

Zakázaný termín je výslovně „schema markup“, ale článek opakovaně používá i samotné „markup“. Pro český věcný tón webu je lepší držet se „strukturovaná data“ nebo „značení“.

**Návrh opravy:**

- „Markup kvůli tomu mazat nemusíte“ → „Strukturovaná data kvůli tomu mazat nemusíte“
- „nevyužitý markup“ → „nevyužitá strukturovaná data“
- „Markup můžete nechat“ → „Značení můžete nechat“

---

## 5. [WARNING] Kotva „konec FAQ rich results“ zbytečně vrací anglický termín

**Citace:**

> „rozebírá [konec FAQ rich results](/blog/konec-faq-rich-results/).“

**Problém:**

V textu se jinak důsledně používá „rozšířené výsledky“. Tady se objevuje „rich results“. Není to zakázaný termín, ale oslabuje konzistenci slovníku.

**Návrh opravy:**

> „rozebírá [konec FAQ rozšířených výsledků](/blog/konec-faq-rich-results/).“

Slug může zůstat, kotva má být česky.

---

## 6. [WARNING] FAQ odpověď k ChatGPT a Perplexity je poctivá, ale první osoba nepůsobí jako brand voice článku

**Citace:**

> „Nedokážu to doložit.“

**Problém:**

Věcně je to správně a bezpečně. Stylově ale první osoba jednotného čísla působí osobněji než zbytek článku a méně jako auditní/edukační hlas značky.

**Návrh opravy:**

> „Pro ChatGPT ani Perplexity to nejde spolehlivě doložit z veřejných zdrojů.“

Celá odpověď pak může začít:

> „Pro ChatGPT ani Perplexity to nejde spolehlivě doložit z veřejných zdrojů. Google k vlastním AI funkcím uvádí…“

---

## 7. [TIP] U vlastního měření Shoptetu doplnit omezení vzorku přímo do věty

**Citace:**

> „V našem měření patnácti e-shopů na Shoptetu (8. 8. 2026) měly všechny produktové stránky data v microdatech a ani jedna v JSON-LD…“

**Hodnocení:**

Tohle je cenné vlastní české dato a refresh tím výrazně získal. Chybí ale jedna věta, která omezí interpretaci vzorku, aby to nepůsobilo jako tvrzení o celém Shoptetu.

**Návrh opravy:**

Doplnit:

> „Nejde o reprezentativní vzorek celého Shoptetu, ale o praktickou kontrolu reálných implementací.“

---

## 8. [TIP] U JSON-LD ukázky doplnit trailing poznámku, že jde o minimální syntaktickou ukázku

**Citace:**

> „Zjednodušená ukázka pro typ `Article`…“

**Hodnocení:**

Ukázka je syntakticky správná. To je v pořádku. Jen bych ještě víc zabránil kopírování do produkce bez úprav.

**Návrh opravy:**

Za ukázku doplnit jednu větu:

> „Berete ji jako syntaktickou ukázku; produkční zápis musí odpovídat konkrétní stránce, šabloně a požadavkům Googlu pro daný typ výsledku.“

---

## 9. [TIP] CTA je dobré, ale Audit a Pack by měly být rozlišeny podle situace čtenáře

**Citace:**

> „Pokud chcete nezávisle posoudit… pomůže AI SEO audit za 3 600 Kč… Pokud chcete postupovat sami… použijte AI SEO Wireframe Pack za 1 490 Kč.“

**Hodnocení:**

CTA splňuje zadání: vede na konkrétní produkty a ne na obecné „kontaktujte nás“. Je věcné a netlačí.

**Možné zlepšení:**

Doplnit jednoduché rozlišení:

> „Audit dává smysl, pokud už máte web a potřebujete najít chyby v šablonách. Pack je vhodnější, pokud teprve připravujete nové stránky nebo chcete sjednotit obsahové zadání.“

---

# 3. Co refresh zlepšil a co naopak ztratil oproti původní verzi

## Co refresh zlepšil

1. **Opravil rozpor kolem FAQPage.**  
   Článek už uvádí konkrétní datum 7. 5. 2026 a odkazuje na changelog Googlu.

2. **Opravil HowTo.**  
   HowTo už není doporučované jako základní typ bez výhrad. Text jasně říká, že rozšířené výsledky skončily 13. 9. 2023.

3. **Zpřesnil vztah strukturovaných dat k AI.**  
   Silné sliby typu „AI vás začne citovat“ v článku nejsou. Text správně říká, že strukturovaná data nejsou speciální vstupenka do AI odpovědí.

4. **Doplnil vlastní české dato.**  
   Měření 15 e-shopů na Shoptetu je pro web velmi hodnotné, protože nejde jen o převyprávění dokumentace Googlu.

5. **Výrazně zlepšil interní prolinkování.**  
   Rozcestník už není slepá ulice. Odkazuje na FAQ rich results, Shoptet měření, Organization, Person, produkty, kategorie e-shopu, recenze, video i další návody.

6. **Závěr má konkrétní CTA.**  
   Audit za 3 600 Kč i Wireframe Pack za 1 490 Kč jsou zmíněné konkrétně a přirozeně.

## Co refresh ztratil nebo riskuje

1. **Riziko skrytého HowTo značení ve frontmatteru.**  
   To je největší problém. Pokud šablona generuje HowTo JSON-LD, refresh si protiřečí a může porušit pravidlo viditelného obsahu.

2. **Místy je až příliš opřený o binární logiku „v galerii / mimo galerii“.**  
   To je dobrý pracovní rámec, ale u typů jako `Person` nebo kategorií e-shopu je potřeba víc nuance.

3. **Některé formulace o AI jsou stále obecnější, než dovolují zdroje.**  
   Hlavně věta, že strukturovaná data mají „pro AI i vyhledávače stejnou roli“. Bezpečnější je mluvit o strojové čitelnosti a ne o AI systémech obecně.

4. **Rozcestníková funkce je silnější, ale hrozí malé překrývání s detailními články.**  
   Nejvíc u FAQ/HowTo, Person a kategorií e-shopu. Hub by měl zůstat stručný a odkazovat na detaily, ne je znovu kompletně řešit.

Celkově: refresh je po obsahové stránce dobrý a výrazně posouvá článek správným směrem. Před publikací ale opravte hlavně `howto` frontmatter, vymezení `Person` a zobecnění směrem k AI.