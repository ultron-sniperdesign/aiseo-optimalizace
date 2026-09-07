## VERDIKT: **OPRAVIT PŘED PUBLIKACÍ**

Článek je obsahově dobře zacílený a má silný praktický rámec, ale před publikací potřebuje opravit několik blokujících věcí: hlavně povinný formát H2, příliš silná / nedoložená tvrzení a statistickou formulaci o nulových proklicích.

---

# 1. Blokující nálezy

## 1. [BLOCKER] H2 nadpisy nedodržují povinný tvar webu

**Problémové místo:**

```mdx
## Co se stalo s <span class="hl">informačním obsahem</span> — <strong>zmizel proklik, ne poptávka</strong>
```

A podobně:

```mdx
## Kritérium má <span class="hl">Google</span> popsané vlastními slovy — <strong>běžná znalost versus vlastní zkušenost</strong>
## Proč <span class="hl">mazání kvůli čerstvosti</span> nefunguje — <strong>Google to říká přímo</strong>
## Jak to rozhodnout na <span class="hl">datech</span> — <strong>nula kliků nic nedokazuje</strong>
## Když sloučíte: <span class="hl">jedna adresa</span>, <strong>ne dvě poloviční</strong>
```

**Proč je to problém:**  
Zadání říká, že H2 mají na webu povinný tvar:

```mdx
<span class="hl">pojem</span> + <strong>pointa</strong> + prostý text
```

Aktuální nadpisy často začínají prostým textem před `<span>`, mají pomlčku mezi `<span>` a `<strong>`, nebo jim chybí prostý text za `<strong>`.

**Návrh opravy:**  
Přepsat všechny H2 do jednotného tvaru. Například:

```mdx
## <span class="hl">Informační obsah</span> <strong>ztrácí proklik, ne poptávku</strong> co s konkrétním článkem
```

```mdx
## <span class="hl">Google kritérium</span> <strong>běžná znalost versus vlastní zkušenost</strong> jak ho použít
```

```mdx
## <span class="hl">Čtyři možnosti</span> <strong>ne dvě</strong> podle čeho vybrat
```

```mdx
## <span class="hl">Data v Search Console</span> <strong>nula kliků sama o sobě nerozhoduje</strong> jak číst malý vzorek
```

---

## 2. [BLOCKER] Nedoložené absolutní tvrzení „přišly o prokliky nejvíc“

**Problémové místo:**

> **Články typu „co je X“ a „jak na Y“ přišly v AI éře o prokliky nejvíc, protože přesně na ně odpovídá Přehled od AI přímo ve výsledcích.**

**Proč je to problém:**  
Tvrzení „přišly o prokliky nejvíc“ je silné a v článku není doložené. Zadání navíc výslovně říká, že tento článek nemá opakovat statistiky z `/blog/zero-click-ai/`, ale jen na ně odkázat. Aktuální formulace působí jako datový závěr bez dat.

**Návrh opravy:**  
Změkčit tvrzení a nechat datové vysvětlení na odkazovaném článku:

> **Články typu „co je X“ a „jak na Y“ patří mezi obsah, u kterého Přehled od AI často může uspokojit část poptávky přímo ve výsledcích.** Poptávka po odpovědi nezmizela — jen se část uživatelů nemusí prokliknout na web.

---

## 3. [BLOCKER] Statistický argument o „0 kliků“ je formulovaný příliš tvrdě

**Problémová místa:**

Frontmatter:

```yaml
- value: "0 kliků"
  label: "při dvaceti zobrazeních za čtvrtletí není důkaz proti článku, ale očekávaný výsledek"
```

FAQ:

> Při dvaceti až šedesáti zobrazeních za čtvrtletí je nula kliků statisticky očekávaný výsledek.

Insight:

> **Při dvaceti až šedesáti zobrazeních za čtvrtletí je nula kliků očekávaný výsledek, ne nález.**

Mistake:

> Při dvaceti zobrazeních je nula kliků statistický šum.

**Proč je to problém:**  
Zadání výslovně upozorňuje, že argument musí být formulovaný jako ilustrativní výpočet, ne jako měření. Aktuální formulace „statisticky očekávaný výsledek“ je příliš kategorická, zvlášť pro rozsah 20–60 zobrazení. U 60 zobrazení už záleží na pozici, typu dotazu, SERPu a reálné CTR.

**Návrh opravy:**  
Nahradit tvrdé tvrzení opatrnější formulací:

Frontmatter:

```yaml
- value: "0 kliků"
  label: "při malém počtu zobrazení samo o sobě nedokazuje problém článku"
```

FAQ:

> Ne nutně. Při nízkém počtu zobrazení za čtvrtletí je nula kliků slabý signál. Ilustrativně: pokud článek získá 24 zobrazení a očekávaná míra prokliku je jen v jednotkách procent, vychází méně než jeden očekávaný klik. Nejdřív proto posuzujte zobrazení, pozici a dotazy — až potom titulek nebo text.

Insight:

> **Při nízkém počtu zobrazení nula kliků sama o sobě nedokazuje, že je článek špatný.** Je to spíš upozornění, že vzorek je malý. Než začnete měnit titulek nebo text, ověřte zobrazení, průměrnou pozici a dotazy v Search Console.

---

## 4. [BLOCKER] Zásada „scaled content abuse“ je parafrázovaná bez podmínky záměru manipulace

**Problémové místo:**

> Google uvádí, že vysoký počet stránek z webu nedělá kvalitnější ani relevantnější web, a vytvářet variantu na každou formulaci dotazu označuje za porušení zásady o hromadně tvořeném obsahu.

Podobně ve FAQ:

> Google uvádí, že vysoký počet stránek z webu nedělá kvalitnější ani relevantnější web, a psát variantu na každou formulaci dotazu označuje za porušení zásady o hromadně tvořeném obsahu.

**Proč je to problém:**  
Podle dodaného znění Google mluví o vytváření obsahu na varianty dotazů **primarily to manipulate rankings or generative AI responses**. Aktuální formulace z toho dělá obecný zákaz psát varianty dotazů, což mění význam.

**Návrh opravy:**  

> Google uvádí, že samotný vysoký počet stránek z webu nedělá kvalitnější ani relevantnější web. Pokud někdo vytváří stránky na každou variantu dotazu hlavně proto, aby manipuloval hodnocení nebo generativní odpovědi, může jít o porušení zásady proti hromadně tvořenému obsahu.

---

# 2. Doporučení

## 1. [WARNING] Prvních ~100 slov těla nedává samostatnou rozhodovací odpověď

**Problémové místo:**

> **Články typu „co je X“ a „jak na Y“ přišly v AI éře o prokliky nejvíc...**

**Proč je to problém:**  
Frontmatter `answer` je dobrý: má 40 slov, začíná definicí a dává smysl samostatně. Ale první odstavec těla článku se věnuje hlavně zero-click kontextu. Zadání říká, že prvních ~100 slov těla má fungovat jako samostatná odpověď. Tady čtenář ani AI ještě nedostane čtyři možnosti rozhodnutí.

**Návrh opravy:**  
Za první H2 vložit krátký samostatný odstavec před odkazování na zero-click článek:

> Informační obsah v AI éře nemusíte automaticky mazat ani přepisovat. U každého starého článku rozhodněte mezi čtyřmi možnostmi: nechat beze změny, přepsat na rozhodovací nebo srovnávací obsah, sloučit s příbuzným článkem, nebo ho udržovat jako citovatelný zdroj. Rozhoduje poptávka a vlastní hodnota oproti běžné znalosti.

---

## 2. [WARNING] „Neexistuje pátá možnost“ je zbytečně absolutní a nedoložitelné

**Problémové místo:**

> Neexistuje pátá možnost a hlavně neexistuje ta nejčastěji volená — nechat článek ležet a napsat vedle něj nový.

**Proč je to problém:**  
Jde o autorský pracovní postup, ne o pokyn Googlu. Navíc v praxi mohou existovat i jiné technické nebo obsahové zásahy: aktualizace bez změny záměru, noindex u specifických stránek, odstranění neplatného obsahu, převod do dokumentace apod.

**Návrh opravy:**  

> Pro běžný obsahový audit stačí pracovat se čtyřmi výchozími volbami. Nejhorší varianta bývá nechat starý článek bez rozhodnutí a vedle něj napsat nový text na totéž téma.

---

## 3. [WARNING] „Mazání je až poslední“ je matoucí, protože mazání není mezi čtyřmi možnostmi v tabulce

**Problémové místo:**

```mdx
## <span class="hl">Čtyři možnosti</span>, ne dvě — <strong>a mazání je až poslední</strong>
```

**Proč je to problém:**  
Nadpis slibuje, že mazání je jedna z možností nebo poslední krok, ale tabulka obsahuje: přepsat, sloučit, nechat jako citovatelný zdroj, nechat beze změny. Mazání se řeší až později jako úklid neplatného nebo duplicitního obsahu.

**Návrh opravy:**  

```mdx
## <span class="hl">Čtyři možnosti</span> <strong>mazání není výchozí řešení</strong> jak vybrat správný zásah
```

---

## 4. [WARNING] Definice „citovatelného zdroje“ slibuje příliš jistý výsledek

**Problémové místo:**

> Stránka, ze které AI čerpá odpověď a uvede ji jako zdroj. Nepřinese návštěvu, ale nese jméno značky do odpovědi.

**Proč je to problém:**  
AI nemusí stránku použít ani uvést jako zdroj. A pokud ji uvede, může přinést nějakou návštěvu. Formulace „nepřinese návštěvu“ je příliš absolutní.

**Návrh opravy:**  

> Citovatelný zdroj je stránka připravená tak, aby z ní vyhledávání nebo AI systémy mohly převzít přesnou odpověď a případně ji uvést jako zdroj. Nemusí přinést výraznou návštěvnost, ale může zvyšovat viditelnost značky v odpovědi.

---

## 5. [WARNING] „Nad deset znamená druhou stránku“ je zjednodušené až nepřesné

**Problémové místo:**

> Nad deset znamená druhou stránku a v praxi nulovou šanci na proklik.

**Proč je to problém:**  
Průměrná pozice v Search Console není totéž jako pevné umístění na „druhé stránce“. Výsledky se liší podle dotazu, zařízení, lokality a prvků ve výsledcích. „Nulová šance“ je navíc příliš absolutní.

**Návrh opravy:**  

> Průměrná pozice nad 10 obvykle znamená, že se stránka zobrazuje mimo první desítku výsledků. Prokliků pak bývá málo, takže dává větší smysl řešit relevanci, autoritu stránky a interní prolinkování než jen přepis jednotlivých odstavců.

---

## 6. [WARNING] Statistika ve frontmatteru zjednodušuje citaci „No, it won’t“

**Problémové místo:**

```yaml
- value: "„No, it won’t“"
  label: "odpověď Googlu na otázku, jestli mazání starého obsahu zlepší hodnocení webu"
```

**Proč je to problém:**  
Dodaný zdroj říká konkrétně: odstraňování velkého množství staršího obsahu hlavně proto, aby web působil „fresh“, nezlepší hodnocení. Aktuální label může vyznít jako obecné tvrzení o jakémkoli mazání starého obsahu.

**Návrh opravy:**

```yaml
- value: "„No, it won’t“"
  label: "odpověď Googlu na mazání staršího obsahu hlavně kvůli dojmu čerstvosti webu"
```

---

## 7. [TIP] Meta description je věcně dobrá, ale první věta je stylisticky neohrabaná

**Problémové místo:**

```yaml
description: "Přehled od AI odpovídá na „co je X“ místo vás. Podle čeho poznat, který článek přepsat na rozhodovací obsah, který sloučit a který nechat být."
```

**Proč je to problém:**  
„Přehled od AI odpovídá místo vás“ je srozumitelné, ale tvrdé a trochu prodejně-dramatické. Lepší je bezpečnější formulace „může odpovědět“.

**Návrh opravy:**

```yaml
description: "Přehled od AI může odpovědět na „co je X“ přímo ve výsledcích. Jak poznat, který článek přepsat, sloučit nebo nechat."
```

---

# 3. Co je v pořádku

- **SEO title je v pořádku:**  
  `Informační obsah v AI éře: přepsat, sloučit, nebo nechat` má cca 57 znaků a klíčové slovo je na začátku.

- **Slug je smysluplný:**  
  `informacni-obsah-v-ai-ere` odpovídá cílovému klíčovému slovu.

- **Frontmatter `answer` je dobrý základ:**  
  Má 40 slov, začíná definicí a samostatně shrnuje rozhodovací logiku. Jen je potřeba podobně upravit i úvod těla článku.

- **Interní odkazy jsou relevantní a nekonkurují zbytečně:**  
  Odkazy na zero-click, střed trychtýře, migraci, interní prolinkování a pasážovou optimalizaci dávají smysl vzhledem ke kanibalizačnímu upozornění.

- **CTA je konkrétní:**  
  Závěr vede na `AI SEO audit za 3 600 Kč` i `AI SEO Wireframe Pack za 1 490 Kč`, ne na obecné „kontaktujte nás“.

- **Zakázané termíny se v článku nevyskytují:**  
  Není tam „schema markup“, „answer block“, „hub-and-spoke“, nevysvětlený „framework“, „crawler/bot“ ani „backlink profil“.

- **Překlady citací z Googlu jsou významově převážně v pořádku:**  
  Citace k běžné znalosti, unikátnímu vhledu a „No, it won’t“ nemění význam. Opravit je potřeba hlavně parafrázi ke scaled content abuse, kde chybí podmínka manipulačního záměru.