Níže audit po bodech. Zaměřuju se na místa, kde text sklouzává od „víme“ k „soudím“, na frontmatter, rozpory a na to, co lze doplnit bez spekulace.

---

## 1. Kde vydáváš úsudek za zjištění

### A. „U textu jsme si na to zvykli… ta někam vedla.“
**Citace:**  
> „U obrázků to dosud neplatilo — přehled mohl ukázat jen fotku, která už někde existuje, a ta někam vedla.“

**Problém:**  
To je podané jako obecné zjištění. Ze dvou uvedených zdrojů to ale neplyne. Je to spíš rámovací zkratka. Navíc „ta někam vedla“ je příliš absolutní.

**Návrh opravy:**  
> „Dosud AI přehledy pracovaly u obrázků s existujícími vizuály; nově podle dostupné zprávy může vizuál také vzniknout přímo v přehledu.“

Případně pokud chceš zachovat kontrast s proklikem:  
> „Dosud šlo u obrázků o práci s existujícím obsahem webu; nově může přibýt i vizuál vytvořený přímo v přehledu.“

---

### B. CompareTable: „Vede někam / není z čeho vést“
**Citace:**  
> „Vede někam — ano, na zdrojovou stránku / není z čeho vést“

**Problém:**  
Tohle je formulováno jako fakt, ale sám výslovně uvádíš, že zdroje neříkají, zda u generovaného obrázku vede odkaz. „Není z čeho vést“ je argument, ne zjištění o implementaci.

**Návrh opravy:**  
Změnit z faktické tabulky na odvození. Např.:
- label: „Přirozený cíl prokliku“
- left: „existuje zdrojový web“
- right: „u obrázku vytvořeného od začátku není zjevmá zdrojová stránka“

Nebo:
> „Pokud je obrázek vytvořený od začátku, nedává smysl čekat stejný typ prokliku jako u cizí fotky z webu.“

---

### C. „Kdo z toho má návštěvu — nikdo“
**Citace:**  
> „Kdo z toho má návštěvu / … / nikdo“

**Problém:**  
Nedoložené. Nevíš, jak bude výstup vypadat, zda bude obsahovat nějaký doprovodný odkaz, zdrojové boxy, související výsledky apod.

**Návrh opravy:**  
> „Přímý příjemce návštěvy není z popisu funkce zřejmý.“  
nebo  
> „Na rozdíl od obrázku převzatého z webu tu nemusí být zjevný web, který by z obrázku těžil proklikem.“

---

### D. „To poslední je podstata… Není tedy co prokliknout“
**Citace:**  
> „To poslední je podstata: u vygenerovaného obrázku není zdrojová stránka… Není tedy co prokliknout“

**Problém:**  
Totéž. Odvození je rozumné, ale věta zní jako potvrzená vlastnost produktu.

**Návrh opravy:**  
> „To je hlavní rozdíl: pokud obrázek vzniká od začátku, není tu stejný typ zdrojové stránky jako u převzaté fotky. Z popisu funkce proto vyplývá, že nelze čekat stejný model prokliku jako u existujícího obrázku z webu.“

---

## 2. „Kde to udeří a kde ne“

Tady sice uvádíš disclaimer, ale některé formulace jsou pořád příliš tvrdé.

### E. „Tam si uživatel obrázek nechá vyrobit a nemá důvod nikam chodit.“
**Citace:**  
> „Tam si uživatel obrázek nechá vyrobit a nemá důvod nikam chodit.“

**Problém:**  
Silné zobecnění o chování uživatele bez dat.

**Návrh opravy:**  
> „Tam může pro část uživatelů stačit obrázek vytvořený přímo v přehledu a motivace ke kliku může klesnout.“

---

### F. „Model umí vytvořit podobu, ne doklad“
**Citace:**  
> „Model umí vytvořit podobu, ne doklad“

**Problém:**  
To je úsudek, ale napsaný jako obecný fakt. Navíc „doklad“ je metafora; v odborném článku je lepší být přesnější.

**Návrh opravy:**  
> „U dotazů, kde uživatel hledá záznam konkrétní reality, může mít syntetický obrázek nižší hodnotu než skutečná fotografie.“

---

### G. „…když někdo hledá, jak vypadá právě váš výrobek, vygenerovaný obrázek mu neodpoví.“
**Problém:**  
Příliš kategorické. Odpovědět může částečně, jen ne spolehlivě.

**Návrh opravy:**  
> „…vygenerovaný obrázek mu obvykle nenahradí skutečnou fotografii konkrétního výrobku.“

---

### H. „čím obecnější a ilustrativnější vaše obrázky jsou, tím snáz je něco nahradí.“
**Problém:**  
Rozumná teze, ale pořád bez dat.

**Návrh opravy:**  
> „Jako pracovní hypotéza dává smysl počítat s tím, že obecné a čistě ilustrační vizuály budou nahraditelné snáz než fotografie konkrétní reality.“

---

## 3. „Které vaše obrázky jsou nenahraditelné“

Tahle sekce stojí na úsudku, což říkáš. Problém je slovník: „nenahraditelné“ slibuje moc.

### I. Nadpis „Které vaše obrázky jsou nenahraditelné“
**Problém:**  
Příliš absolutní. Ve skutečnosti rozlišuješ „spíš odolnější vůči nahrazení“.

**Návrh opravy:**  
- „Které vaše obrázky jsou odolnější vůči nahrazení“
- „Které vaše obrázky mají vyšší důkazní hodnotu“
- „Které vaše obrázky AI nahradí hůř“

---

### J. Tabulka „Snadno nahraditelné / Těžko nahraditelné“
**Problém:**  
Příliš binární. Bez dat je bezpečnější škála než ostré rozdělení.

**Návrh opravy:**  
- „Spíš nahraditelné / spíš odolné vůči nahrazení“
- u úvodu dodat:  
  > „Jde o praktické rozdělení podle povahy vizuálu, ne o doložený seznam typů dotazů.“

---

### K. „jen ten, kdo tam byl“
**Citace:**  
> „Kdo to umí vyrobit / … / jen ten, kdo tam byl“

**Problém:**  
Přehnané. Fotku produktu nebo týmu může vytvořit i někdo jiný, ne nutně „ten, kdo tam byl“; navíc nejde o „umí vyrobit“, ale o přístup ke konkrétní realitě.

**Návrh opravy:**  
> „vyžaduje přístup ke konkrétní věci, místu nebo situaci“

---

### L. „fotka reálné práce má dnes hodnotu, kterou generovaný obrázek nemá“
**Problém:**  
Normativní soud podaný jako zjištění.

**Návrh opravy:**  
> „fotka reálné práce může mít pro uživatele vyšší důvěryhodnost než generovaná ilustrace“

---

### M. „přesně tyhle snímky bere za doklad i člověk“
**Problém:**  
Zobecnění o chování lidí.

**Návrh opravy:**  
> „u těchto snímků lze spíš čekat, že budou působit jako věrohodnější záznam reality než generovaná ilustrace“

---

## 4. Další místa mimo ty dvě sekce

### N. „Háček je v tom, že obrázek, který si umí vygenerovat i vyhledávač, vás od ničeho neodliší.“
**Problém:**  
Příliš absolutní. Odlišit může stylem, značkou, kompozicí, konzistencí apod.

**Návrh opravy:**  
> „…vás obvykle odliší méně než vlastní fotografie nebo vizuál navázaný na konkrétní produkt, místo či postup.“

---

### O. „Když se AI přehled naučí obrázek vyrobit, přestává být důvod chodit za tím vaším“
**Problém:**  
Zase tvrzení o chování uživatele jako jistota.

**Návrh opravy:**  
> „…může část důvodu chodit za tím vaším zmizet, pokud nabízíte jen obecnou ilustraci stejného typu.“

---

### P. „u vizuálů, které mají něco dokládat… se generování nehodí ani trochu.“
**Problém:**  
Přehnané a kategorické.

**Návrh opravy:**  
> „…má generovaný obrázek slabší pozici, protože nenahrazuje skutečný záznam konkrétní věci nebo procesu.“

---

## 5. Frontmatter

### title
**Citace:**  
> „AI přehled si obrázek nakreslí sám. Co to mění“

**Problém:**  
„Co to mění“ je v pořádku, ale titulkově sugeruje širší jistotu o dopadech, než jakou zdroje dávají. Navíc „nakreslí“ je hovorové a zjednodušuje „create image“.

**Návrh opravy:**  
- „Google přidal do AI přehledů generování obrázků. Co z toho plyne pro weby“
- „AI přehledy nově vytvářejí obrázky. Co to může změnit pro weby“

Důležité je „může“, pokud chceš být přesný.

---

### description
**Citace:**  
> „…je to u obrázků stejný posun, jaký u textu přinesly AI přehledy.“

**Problém:**  
Příliš jisté. To je tvoje analogie, ne doložený závěr.

**Návrh opravy:**  
> „…pro weby to může být u obrázků podobný typ změny, jaký AI přehledy přinesly u textu.“

---

### answer
**Citace:**  
> „…Zdroje neuvádějí, jestli se takové obrázky označují.“

**Problém:**  
Krátká odpověď zamlčuje druhou stejně důležitou neznámou: odkazy/prokliky. V těle to řešíš, v answer ne.

**Návrh opravy:**  
> „Google 14. července 2026 přidal do AI přehledů generování obrázků: uživatel zadá textový prompt a přehled z něj vytvoří obrázek od začátku. Zatím jen v angličtině a jen v regionech, kde už funguje tvorba obrázků v AI Mode. Zdroje neuvádějí, jak jsou tyto obrázky označené ani zda se u nich někam odkazuje.“

---

### stats

#### Stat 1
> „14. 7. — 2026 — datum oznámení generování obrázků v AI přehledech“

V pořádku.

#### Stat 2
> „1 — jazyk při spuštění: angličtina“

V pořádku, ale formulace „jazyk při spuštění podle dostupné zprávy“ by byla přesnější.

#### Stat 3
> „neuvedeno — jestli se vygenerované obrázky nějak označují“

**Problém:**  
Chybí stejně důležitá druhá „neuvedeno“: zda se u nich odkazuje / jaká je podoba výstupu.

**Návrh opravy:**  
Buď:
- nahradit tento stat jiným:
  > „neuvedeno — zda má generovaný obrázek nějaký odkaz či zdrojový cíl“
  
nebo přidat čtvrtý stat:
- value: „neuvedeno“
- label: „zda má generovaný obrázek v AI přehledu odkaz nebo zdrojový cíl“

---

### FAQ

#### FAQ: „Funguje to v češtině?“
**Citace:**  
> „Pro české dotazy to tedy dnes nemá jak platit.“

**Problém:**  
Moc tvrdé. Víš jen „jen anglicky“. Nemusíš z toho dovozovat technickou nemožnost pro „české dotazy“.

**Návrh opravy:**  
> „Pro běžné české dotazy s tím dnes nelze počítat; dostupná zpráva uvádí při spuštění angličtinu.“

---

#### FAQ: „Znamená to konec optimalizace obrázků?“
**Citace:**  
> „…u části dotazů může vzniknout obrázek, který nevede nikam.“

**Problém:**  
„nevede nikam“ je opět nedoložené.

**Návrh opravy:**  
> „…u části dotazů může vzniknout obrázek, který nemusí fungovat jako klasický vstup na cizí web.“

---

#### FAQ: „Jak zjistím dopad…“
**Citace:**  
> „Dopad téhle konkrétní změny se z veřejných dat izolovat nedá.“

**Problém:**  
Silné tvrzení. Bez znalosti všech možných datových zdrojů je bezpečnější „spolehlivě izolovat“.

**Návrh opravy:**  
> „Dopad téhle konkrétní změny z veřejně dostupných dat nejspíš spolehlivě neizolujete.“

---

#### FAQ: „Použije Google k vygenerování obrázku moje fotky?“
V zásadě v pořádku. Dobře odděluje inference od tréninkové otázky.

---

## 6. Vnitřní rozpory

### R1. „Pro české dotazy to dnes neplatí“ vs. „jen v angličtině“
To není přímý rozpor, ale je to příliš silné dovozování z jazykové dostupnosti.

**Místa:**
- FAQ „Funguje to v češtině?“
- Shrnutí: „Pro české dotazy to dnes neplatí.“
- Mistake 02: „Když to na českém dotazu nevidíte… znamená to, že se vás zatím netýká.“

**Problém:**  
Z „English only“ neplyne s naprostou jistotou, že se to netýká žádného českého dotazu nebo českého uživatele. Plyne jen, že to není funkce pro češtinu při spuštění.

**Oprava sjednocení:**  
Všude používat stejnou opatrnou formulaci:
> „Při spuštění je funkce podle dostupné zprávy jen v angličtině, takže pro české vyhledávání s ní dnes nelze běžně počítat.“

---

### R2. „Zdroje neuvádějí, jestli u nich vede nějaký odkaz“ vs. opakované „není co prokliknout“
To je největší vnitřní rozpor.

**Místa:**
- Insight box: nevíme, jestli u nich vede nějaký odkaz
- CompareTable + navazující odstavec: „není tedy co prokliknout“
- FAQ: „může vzniknout obrázek, který nevede nikam“

**Problém:**  
Jednou přiznáváš neznalost implementace, jinde ji nahrazuješ jistotou.

**Oprava:**  
Všude sjednotit na:
> „U generovaného obrázku není zjevmá zdrojová stránka jako u převzaté fotky. Zdroje ale nepopisují, jestli Google přesto zobrazuje nějaký odkaz nebo související cíle.“

---

### R3. „Stejný příběh jako u textu“ vs. „dopad z veřejných dat izolovat nejde“
Není to rozpor, ale hrozí přestřelení teze. Tvrdíš silnou analogii, ale sám přiznáváš absenci dat o dopadu.

**Oprava:**  
Zeslabit metaforu:
> „Připomíná to logiku, kterou AI přehledy přinesly u textu…“

---

## 7. Je 1 260 slov dost? Co chybí bez spekulace

Ano, rozsah stačí. Článek není krátký problémem délky, ale místy přesnosti formulací.

### Co lze doplnit bez spekulace

#### A. Jasnější oddělení tří vrstev
Teď to sice máš, ale šlo by to zpřehlednit:
1. **Co