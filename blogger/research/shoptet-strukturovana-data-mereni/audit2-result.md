1. **[VYSOKÁ] title / answer / úvod → článek teď není jen o „microdatech místo JSON-LD“, ale hlavně o tom, co si má majitel e-shopu zkontrolovat a kde jsou slabá místa → navržené znění:**  
   - **Title:** „Jaká strukturovaná data dává Shoptet do HTML: Product v microdatech, slabší kategorie a chybějící GTIN“  
   - **Answer:** „Na vzorku 15 e-shopů na Shoptetu jsem naměřil, že produktová data jsou na 13 z 13 produktových stránek v microdatech, ne v JSON-LD. Prakticky to pro majitele e-shopu znamená tři kontroly: nehledat jen `ld+json`, ověřit vyplněný GTIN/EAN, značku a výrobce u produktů a nespoléhat, že kategorii strojům popíšou strukturovaná data — na 14 z 14 kategorií chyběl `ItemList`, `CollectionPage` i `Product`.“

2. **[VYSOKÁ] „Tři závěry“ + checklist → pro majitele Shoptetu je to užitečné, ale pořád trochu převažuje popis nad akcí; chybí explicitní věta „co udělat hned dnes v administraci / na webu“ → navržené znění:**  
   Přidej krátký mezititulek těsně před checklist:  
   **„Co udělat hned po dočtení“**  
   a 2–3 věty:  
   „Jestli máte e-shop na Shoptetu, nezačínejte řešit nový JSON-LD naslepo. Nejdřív si ověřte, zda se do stávajících microdat propisují vaše klíčová produktová pole — hlavně EAN/GTIN, značka, výrobce a dostupnost. A u kategorií počítejte s tím, že hlavní informační roli pro stroje nese text, ne strukturovaná data výpisu.“

3. **[STŘEDNÍ] sekce „Co jsem měřil a na čem“ → metodika je poctivá, ale na začátku článku zdržuje a může část e-shopařů odradit dřív, než dostanou výsledek → navržené znění:**  
   Přesunout první odstavec metodiky až za stručné shrnutí výsledků, nebo ho zkrátit. Např.:  
   „Vzorek tvořilo 15 e-shopů: 9 oficiálních demo šablon a 6 produkčních obchodů na vlastních doménách. Měřil jsem 13 produktových stránek, 14 kategorií a robots.txt. Podrobnější metodiku uvádím níže.“  
   A detail o parserech / SHA-256 nechat až do rozbalovací poznámky nebo do závěru sekce.

4. **[STŘEDNÍ] „Formát: Product je vždy v microdatech, ne v JSON-LD“ → slovo „vždy“ je v titulku sekce zbytečně tvrdé vůči povaze vzorku, i když data 13/13 drží; po prvním auditu už je text jinde opatrný → navržené znění:**  
   **„Ve vzorku byl Product vždy v microdatech, ne v JSON-LD“**  
   nebo  
   **„V naměřeném vzorku byl Product na produktových stránkách vždy v microdatech“**

5. **[STŘEDNÍ] FAQ „Jak si ověřím, co má můj vlastní e-shop?“ → odpověď je praktická, ale formulace o „hlavně EAN a značku“ neodpovídá plně tomu, co článek skutečně akcentuje; v těle je stejně důležitý i výrobce a kategorie → navržené znění:**  
   „Otevřete zdrojový kód produktové stránky a hledejte `itemtype`, ne `ld+json`. Nebo produktovou URL vložte do testu rozšířených výsledků od Googlu, který čte oba formáty. Konkrétní pole si pak projděte proti tabulkám v článku — hlavně EAN/GTIN, značku, výrobce, dostupnost a to, zda se na kategoriích můžete opřít o text, protože výpis sortimentu ve strukturovaných datech v měřeném vzorku chyběl.“

6. **[STŘEDNÍ] pasáž o kategoriích → pro e-shopaře je užitečná, ale chybí jeden praktický most: co má text kategorie obsahovat, když strukturovaná data nepomáhají → navržené znění:**  
   Za větu „Text kategorie tím pádem nese hlavní váhu sám.“ doplnit:  
   „V praxi to znamená mít na kategorii aspoň srozumitelný úvod k výběru, vysvětlení rozdílů mezi typy produktů, hlavní parametry a typické použití — ne jen obecný SEO odstavec.“

7. **[STŘEDNÍ] „robots.txt: patnáctkrát stejný soubor“ → zajímavé zjištění, ale pro hlavní linku článku lehce odvádí pozornost; bez silnějšího napojení na akci majitele působí jako vedlejší větev → navržené znění:**  
   Zkrať úvod sekce a vytáhni praktický dopad hned do první věty:  
   „U všech 15 měřených e-shopů byl robots.txt po zohlednění odlišné adresy sitemap prakticky stejný. Pro majitele e-shopu je důležité hlavně to, že žádný z těchto souborů neměl zvláštní pravidla pro AI roboty — pokud je chcete řešit, musíte si vlastní stav ověřit zvlášť.“

8. **[NÍZKÁ] checklist, bod „Podívat se na vlastní robots.txt“ → věta „Pokud je identický, nikdy ho nikdo neupravoval“ je zbytečně kategorická; identický výsledek neprokazuje historicky „nikdy“ → navržené znění:**  
   „Porovnejte ho s tím, co popisuje článek. Pokud je shodný s výchozím stavem, nejspíš v něm není žádná vlastní úprava.“

9. **[NÍZKÁ] FAQ „Znamená to, že Shoptet nemá strukturovaná data?“ → obsahově sedí, ale poslední věta o Google dokumentaci opakuje skoro doslova Insight box v těle → navržené znění:**  
   Zkrátit na:  
   „Ne. Všech 13 měřených produktových stránek mělo typ `Product`, jen zapsaný jako microdata přímo v HTML, ne v samostatném skriptu JSON-LD. Kdo v kódu hledá jen `application/ld+json`, mine je.“

10. **[NÍZKÁ] sekce „Která pole produktová data nesou“ → pojem `identifier` není pro běžného majitele e-shopu vysvětlený a v tabulce může splývat s `productID`, `sku` a `gtin` → navržené znění:**  
    U prvního výskytu doplnit krátké vysvětlení:  
    „`identifier` (obecný identifikátor produktu), `productID` a další identifikační pole…“  
    nebo v tabulce zjednodušit skupinu na:  
    „`name`, `url`, `image`, `category` a základní identifikace produktu“

11. **[NÍZKÁ] pasáž „Dopravné je nezvykle podrobné“ → zajímavé, ale chybí jednověté vysvětlení, proč by to mělo majitele e-shopu zajímat → navržené znění:**  
    Doplň větu:  
    „Pro e-shop to znamená, že pokud máte dopravu správně nastavenou v Shoptetu, propisuje se v měřeném vzorku do strukturovaných dat výrazně lépe než řada jiných polí z katalogu.“

12. **[NÍZKÁ] frontmatter stats → jsou přesné, ale třetí stat slučuje tři různé typy do jednoho čísla; v těle je to rozvedené, v kartě článku to může být méně srozumitelné → navržené znění:**  
    - value: „0 / 14“  
      label: „měřených kategorií s `ItemList`“  
    případně přidat čtvrtý stat místo slučování:  
    - value: „0 / 14“  
      label: „měřených kategorií s `CollectionPage` nebo `Product`“

13. **[NÍZKÁ] závěr „Kam tenhle článek patří“ → funguje jako seriálový rozcestník, ale oslabuje dojezd textu; čtenář po checklistu už dostal akci a tohle ji rozmělní → navržené znění:**  
    Zkrátit na dvě věty:  
    „Tohle je první díl série o Shoptetu a viditelnosti v AI. V dalších navážu robots.txt, nastavením datových polí v administraci a parametrickými adresami.“

---

### 3 nejdůležitější věci

1. **Posuň článek z „zjištění o formátu“ na „co má majitel Shoptetu hned zkontrolovat“** — GTIN/EAN, značka, výrobce, text kategorií.  
2. **Zkrať a odsuň metodiku na začátku** — teď trochu brzdí spád, než čtenář dostane hlavní pointu.  
3. **Doladit několik formulací k menší kategoričnosti** — hlavně „vždy“ v mezititulku a „nikdy ho nikdo neupravoval“ v checklistu.