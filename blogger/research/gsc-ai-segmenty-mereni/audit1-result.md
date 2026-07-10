**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku.

---

## Nálezy

### 1) [BLOCKER] Budoucí datum 23. 6. 2026 je podané jako hotová věc
**Citace:**
- „… rozšiřuje se postupně na jednotlivé weby (**další vlna 23. června 2026**).“
- FAQ: „… rozšiřuje se postupně na jednotlivé weby (**další vlna 23. června 2026**), takže ho zatím nemusí mít každá property.“

**Problém:**  
Článek má `updated: 2026-06-11`. Datum 23. 6. 2026 je vůči tomuto dni v budoucnu. V textu je ale uvedeno jako jistá událost, ne jako očekávané/avizované rozšíření. To je v rozporu se zadáním i s osou aktuálnosti.

**Návrh opravy:**  
Přeformulovat podmíněně a s oporou v Google zdroji. Např.:
- „… Google report spustil 3. června 2026 v beta verzi a k 11. červnu probíhá postupné zpřístupňování jen části webů. Google zároveň avizuje další rozšíření později v červnu.“
- Pokud chcete zachovat konkrétní datum: „… Google avizoval rozšíření na 23. června 2026, ale k datu aktualizace článku ještě nemuselo proběhnout.“

---

### 2) [BLOCKER] Přehnaná interpretace impresí jako „signálu citovatelnosti“
**Citace:**
- `answer`: „Imprese proto čtěte jako signál, že model obsah považuje za citovatelný…“
- „… jako signál citovatelnosti, ne jako návštěvnost.“
- „Vysoké AI imprese = citovatelný obsah“
- „… víte, co u AI funguje.“

**Problém:**  
Tohle je příliš silná interpretace. Z veřejných faktů plyne, že imprese jsou signál zobrazení/rezonance, ne důkaz, že „model obsah považuje za citovatelný“. To už je interpretační skok. U bety bez kliků, dotazů a pozic je to potřeba formulovat opatrněji.

**Návrh opravy:**  
Změnit na bezpečnější claimy:
- „Imprese berte jako signál, že se vaše URL objevuje v Google AI funkcích.“
- „Může jít o užitečný signál relevance nebo rezonance obsahu v AI funkcích, ale ne o přímý důkaz kvality, návštěvnosti ani obchodního přínosu.“
- U Stepperu nahradit „Vysoké AI imprese = citovatelný obsah“ za „Vysoké AI imprese = častější výskyt URL v Google AI funkcích“.

---

### 3) [BLOCKER] Spekulativní vysvětlení, proč report neukazuje kliky
**Citace:**
- „Proč? Když uživatel čte odpověď generovanou AI, přiřazení prokliku zpět na konkrétní zdroj v syntetizované odpovědi funguje jinak…“
- FAQ: „To je nejvýznamnější omezení reportu. Když uživatel čte odpověď generovanou AI…“

**Problém:**  
Text předkládá důvod jako fakt, ale bez opory „podle Googlu“. Pokud to Google explicitně neřekl ve zdroji, je to jen domněnka autora. Audit měl hlídat přesně takové nedoložitelné vysvětlení.

**Návrh opravy:**  
Změnit z kauzálního tvrzení na opatrné vysvětlení:
- „Google v této verzi reportu kliky, CTR, pozici ani dotazy nezveřejňuje. Prakticky to znamená, že z reportu nevyčtete návštěvnost ani výkonnost po prokliku.“
- Případně: „Jedním z možných důvodů může být odlišný způsob interakce s AI odpověďmi, ale Google to v tomto oznámení detailně nevysvětluje.“

---

### 4) [WARNING] Titulek je delší než doporučených 50–60 znaků
**Citace:**
- `title: "Měření AI viditelnosti v Search Console: návod 2026"`

**Problém:**  
Titulek je na hraně až lehce nad doporučením. Zároveň cílové KW není úplně na začátku v nejhledanější podobě.

**Návrh opravy:**  
Zkrátit a posunout KW dopředu. Např.:
- „GSC AI report: měření AI viditelnosti 2026“
- „Search Console AI Overviews: měření v GSC“
- „GSC AI report: co měří a jak ho číst“

---

### 5) [WARNING] Slug neodpovídá hlavnímu klíčovému slovu ani titulku
**Citace:**
- `slug: "gsc-ai-segmenty-mereni"`

**Problém:**  
Slug je srozumitelný, ale neobsahuje hlavní termín „report“ ani „search console ai overviews“. „segmenty“ je navíc vedlejší motiv článku, ne hlavní téma.

**Návrh opravy:**  
Zvážit přesnější slug, např.:
- `gsc-ai-report-mereni`
- `search-console-ai-overviews-mereni`
- `mereni-ai-viditelnosti-gsc`

---

### 6) [WARNING] V článku je několik zbytečných anglicismů mimo doporučený tón
**Citace:**
- „traffic“
- „cross-reference“ není přímo v těle, ale v zadání se na něj upozorňuje; v článku je místo něj „porovnejte“, což je dobře
- „property“
- „default report“
- „dedikovaný AI pohled“
- „rezonance“

**Problém:**  
Brand voice má být česky, věcně a srozumitelně. Některé anglicismy jsou zbytečné a působí odbornicky napůl.

**Návrh opravy:**  
Nahradit:
- „traffic“ → „návštěvnost“
- „property“ → „ověřený web / web v Search Console“
- „default report“ → „výchozí přehled“
- „dedikovaný AI pohled“ → „samostatný přehled pro AI funkce“
- „rezonance“ → raději „výskyt“ nebo „signál relevance v AI funkcích“, pokud nechcete tvrdit víc, než víte

---

### 7) [WARNING] „AIO“ je v zadání výslovně potřeba rozepsat; článek sice používá „AI Overviews“, ale neukotvuje český význam
**Citace:**
- Vícekrát: „AI Overviews“, „AI Mode“

**Problém:**  
Není to chyba sama o sobě, ale pro vzdělávací tutorial by bylo vhodné při prvním výskytu krátce ukotvit, co to je v rámci Vyhledávání Google. Jinak článek předpokládá vyšší znalost.

**Návrh opravy:**  
Při prvním výskytu doplnit:
- „AI Overviews, tedy AI shrnutí ve výsledcích Vyhledávání Google“
- „AI Mode, tedy konverzační režim vyhledávání v Google“

---

### 8) [WARNING] FAQ odpověď o českých webech obsahuje tvrzení, které nemusí být dost doložené
**Citace:**
- „Google AI Overviews jsou v češtině aktivní, takže jakmile report dostanete, měří i českou AI viditelnost.“

**Problém:**  
První část může být pravdivá, ale druhá část je formulovaná moc přímočaře. Aktivita AI Overviews v češtině ještě automaticky neznamená, že daný report bude stejně dostupný a plně použitelný pro každou českou property k datu 11. 6. 2026.

**Návrh opravy:**  
Zjemnit:
- „Pokud se AI Overviews v češtině zobrazují a report máte zpřístupněný, může zachytit i českou AI viditelnost vašeho webu. Dostupnost se ale k 11. červnu 2026 rozšiřuje postupně.“

---

### 9) [WARNING] „Seznam Search Console“ může být nepřesný nebo neukotvený název
**Citace:**
- „Pro český trh doplňte měření o Seznam (Seznam Search Console)…“

**Problém:**  
Pokud neodkazujete na konkrétní oficiální produkt a jeho přesný název, je to rizikové. Může to působit jako neexistující nebo nepřesně pojmenovaná služba.

**Návrh opravy:**  
Buď přesně pojmenovat oficiální nástroj Seznamu, nebo formulaci zjednodušit:
- „… doplňte měření o nástroje Seznamu a o ruční test…“
- Pokud přesný název neověříte, raději ho neuvádět.

---

### 10) [WARNING] „Uložený pohled“ v GSC může být funkčně nepřesné
**Citace:**
- „… proto si vytvořte samostatný uložený pohled jen na AI funkce.“
- „Uložte si dedikovaný AI pohled“

**Problém:**  
Search Console nepracuje jazykem „uložený pohled“ jako GA4/Looker Studio. Může jít spíš o neformální radu, ale v tutorialu to vyznívá jako konkrétní funkce rozhraní.

**Návrh opravy:**  
Převeďte na přesnější instrukci:
- „… používejte samostatný filtr nebo export pro AI funkce.“
- „… vytvořte si vlastní pravidelný přehled nad AI reportem, například přes export dat.“

---

### 11) [WARNING] Meta description je věcně v pořádku, ale mohla by lépe nést cílové KW
**Citace:**
- `description: "Google spustil v červnu 2026 report pro AI Overviews a AI Mode v Search Console. Co ukazuje, co ne (kliky) a jak imprese číst správně."`

**Problém:**  
Popis je funkční a vejde se do délky, to je plus. Chybí ale výraz „GSC AI report“, který je cílové KW.

**Návrh opravy:**  
Např.:
- „GSC AI report v Search Console ukazuje AI Overviews a AI Mode bez kliků a CTR. Zjistěte, co měří a jak AI imprese správně číst.“
Tohle je přesnější k cílovému dotazu.

---

### 12) [TIP] `answer` je silný, ale začíná událostí místo definice
**Citace:**
- `answer: "Google v červnu 2026 spustil v Search Console report Generative AI features..."`

**Problém:**  
Pro citovatelnost pro AI je odpověď dobrá délkou i samostatností. Jen nezačíná definicí pojmu, ale oznámením o spuštění.

**Návrh opravy:**  
Lepší forma:
- „Generative AI features report v Google Search Console je beta přehled, který ukazuje, jak často se vaše stránky objevují v AI Overviews, AI Mode a generativních funkcích v Discoveru…“

---

### 13) [TIP] Prvních ~100 slov těla funguje dobře, ale je možné je ještě víc „osamostatnit“
**Citace:**
- Úvodní odstavec pod importy

**Problém:**  
Úvod je solidní a faktický. Jen druhá věta „Je to velký krok…“ je lehce hodnotící.

**Návrh opravy:**  
Místo „Je to velký krok“ dát:
- „Jde o první oficiální přehled tohoto typu v GSC, ale v beta verzi má výrazná omezení…“

---

### 14) [TIP] V jedné části článek míchá „AI odpovědi“, „AI funkce“ a „Google AI“
**Citace:**
- „Google AI odpovědích“
- „generativních AI funkcích“
- „Google AI“

**Problém:**  
Není to zásadní chyba, ale pro tutorial je lepší držet jednotný slovník. Zvlášť když report má oficiální rozsah Search + Discover.

**Návrh opravy:**  
Sjednotit terminologii, např.:
- „AI funkce ve Vyhledávání a Discoveru“
- „Google AI funkce“ jen tam, kde chcete odlišit od ChatGPT/Perplexity

---

### 15) [TIP] Interní prolinkování na doplňkové články z kontextu chybí
**Citace:**  
V článku se zmiňuje ruční test a efekt bez prokliku, ale bez odkazu.

**Problém:**  
V zadání je uvedeno, že článek doplňuje `test-viditelnosti-v-ai` a `zero-click-ai`. To je přesně relevantní interní prolinkování pro SEO i použitelnost.

**Návrh opravy:**  
Doplnit konkrétní interní odkazy:
- u „měřte zatím ručním testem“ → odkaz na `test-viditelnosti-v-ai`
- u „efekt bez prokliku“ / „AI odpovědi odpovědí přímo“ → odkaz na `zero-click-ai`

---

### 16) [TIP] CTA je relevantní a konkrétní, to je dobře; jen je lehce přeplněná
**Citace:**
- Závěrečný CTA blok

**Hodnocení:**  
Tady je to v zásadě správně: primární produkt Pack 1 490 Kč, sekundární Audit 9 990 Kč, žádné generické „kontaktujte nás“. To splňuje zadání.

**Návrh drobné úpravy:**  
Zkraťte první větu, aby tutorial nepůsobil prodejněji než zbytek textu. Např. nechat jako primární jednu akci a druhou jako sekundární možnost.

---

### 17) [TIP] „První oficiální data“ je silný claim, ale obhajitelný jen ve vztahu ke GSC
**Citace:**
- „… první oficiální data o tom, jak často se vaše stránky objevují…“
- „… první oficiální data o Google AI viditelnosti.“

**Problém:**  
Bez upřesnění to zní absolutně. Bezpečnější je vymezit, že jde o první oficiální přehled v Search Console / od Googlu pro tento účel.

**Návrh opravy:**  
- „… první oficiální přehled tohoto typu v Google Search Console.“
- „… první oficiální data od Googlu v rámci Search Console k výskytu URL v těchto AI funkcích.“

---

## Stručné potvrzení toho, co je dobře

- Frontmatter je vyplněný smysluplně a FAQ je tematicky relevantní.  
- Meta description má správnou délku.  
- Struktura H2/H3 je logická a dobře vede tutorial.  
- CTA míří na konkrétní produkty a nekonkuruje `/audit/` nepřirozeně.  
- Článek správně zdůrazňuje, že report **neukazuje kliky, CTR, pozici ani dotazy**.  
- Dobrý je i důraz na to, že GSC pokrývá jen Google, ne celý AI ekosystém.

Pokud chcete, můžu v dalším kroku vrátit **jen seznam přesných formulací k nahrazení po větách**, bez přepisování celého článku.