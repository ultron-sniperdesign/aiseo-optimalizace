## 1. Blokující nálezy

1. [BLOCKER] **Rozhodovací logika pořád není úplně použitelná pro konkrétní článek**

   **Citace:**
   > „Rozhodují dvě otázky: je v článku něco, co jinde není, a hledá to ještě někdo.“

   a zároveň tabulka:

   > „Přepsat na rozhodovací obsah — poptávka je, ale článek jen vysvětluje pojem“  
   > „Nechat jako citovatelný zdroj — poptávka je, článek je přesný, ale odpověď se vejde do dvou vět“  
   > „Nechat beze změny — zobrazení je málo a téma není vaše priorita“

   **Problém:**  
   Článek slibuje rozhodnutí podle dvou otázek, ale čtyři výsledné možnosti z nich čistě nevyplývají. Chybí například jasná odpověď pro případy:

   - poptávka je + článek má vlastní zkušenost,
   - poptávka není + článek je strategicky důležitý,
   - poptávka je + článek je jen krátká definice bez vlastního přínosu,
   - článek je neaktuální nebo mimo nabídku.

   Majitel webu tedy po přečtení pořád nemusí vědět, co udělat s konkrétním textem.

   **Návrh opravy:**  
   Doplnit před tabulku krátkou rozhodovací matici 2×2:

   - **Poptávka ano + vlastní přínos ano:** nechat / aktualizovat / rozšířit podle záměru dotazu.
   - **Poptávka ano + vlastní přínos ne:** přepsat na rozhodovací obsah, nebo sloučit.
   - **Poptávka ne + strategická hodnota ano:** nechat jako podpůrnou stránku, ale neměřit ji primárně návštěvností.
   - **Poptávka ne + strategická hodnota ne:** sloučit, přesměrovat, případně odstranit, pokud obsah neplatí.

   Tím se naplní slib článku: „podle čeho rozhodnout“.

2. [BLOCKER] **„Citovatelný zdroj“ je definovaný příliš široce a může vést k ponechání slabého commodity obsahu**

   **Citace:**
   > „Nechat jako citovatelný zdroj — poptávka je, článek je přesný, ale odpověď se vejde do dvou vět“

   a FAQ:

   > „U definičních článků je to legitimní role — měřte ji jako viditelnost, ne jako návštěvnost.“

   **Problém:**  
   Tohle je příliš obecné. Přesný definiční článek, jehož odpověď se vejde do dvou vět, může být právě ten typ běžné znalosti, kterou AI odpoví bez potřeby citovat konkrétní web. V současné podobě to odporuje předchozímu rozlišení „běžná znalost versus vlastní zkušenost“.

   **Návrh opravy:**  
   Zpřesnit, kdy má „citovatelný zdroj“ smysl. Například:

   > Nechat jako citovatelný zdroj má smysl hlavně u stránek, které obsahují vlastní definici, metodiku, data, případ z praxe, odborně ověřený výklad, právní nebo technický detail, případně vysvětlení vlastního produktu či kategorie. Obecnou definici bez vlastního přínosu je lepší zkrátit, sloučit nebo použít jako úvod rozhodovacího článku.

---

## 2. Doporučení

1. [WARNING] **Statistický příklad s 24 zobrazeními je pořád nepřesný**

   **Citace:**
   > „při dvaceti čtyřech zobrazeních a míře prokliku v jednotkách procent vychází méně než jeden očekávaný klik“

   **Problém:**  
   „Jednotky procent“ může znamenat i 5–9 %. Při 5% CTR už 24 zobrazení dává 1,2 očekávaného kliku, tedy ne „méně než jeden“.

   **Návrh opravy:**  
   Zpřesnit číslo:

   > Ilustrativně: při 24 zobrazeních a CTR 3 % vychází 0,72 očekávaného kliku, takže nula kliků není sama o sobě překvapivý výsledek.

   Stejnou opravu je potřeba provést všude, kde se tento argument opakuje: FAQ, Insight, chyba 04 a případně shrnutí.

2. [WARNING] **Nadpis „zmizel proklik“ je pořád zbytečně absolutní**

   **Citace:**
   > „zmizel proklik, ne poptávka“

   **Problém:**  
   V těle je premisa správně zmírněná („může uspokojit část poptávky“), ale H2 zní absolutněji než zbytek článku.

   **Návrh opravy:**  
   Například:

   > `## Co se stalo s <span class="hl">informačním obsahem</span> — <strong>část prokliků může zůstat ve výsledcích</strong>`

3. [WARNING] **Tvrzení o malém vzorku je formulované moc definitivně**

   **Citace:**
   > „Pod deset za čtvrtletí znamená, že se článek prakticky nezobrazuje. Titulek ani text se na tak malém vzorku neprojeví — řeší se dosah, ne formulace.“

   **Problém:**  
   Směr je správný, ale „titulek ani text se neprojeví“ je příliš kategorické. Problém je spíš v tom, že na tak malém vzorku změnu spolehlivě nevyhodnotíte.

   **Návrh opravy:**  
   > Pod deset zobrazení za čtvrtletí znamená, že z dat skoro nejde poznat dopad úprav titulku nebo textu. Nejdřív řešte, jestli má stránka vůbec šanci se zobrazovat na relevantní dotazy.

4. [WARNING] **Dotaz, který v textu není, automaticky neznamená, že má přepis smysl**

   **Citace:**
   > „Když se zobrazuje na dotaz, který v textu není, má přepis smysl.“

   **Problém:**  
   Někdy je to dobrý signál. Jindy se stránka zobrazuje na nerelevantní dotaz a přepis by ji odvedl od původního záměru.

   **Návrh opravy:**  
   > Když se stránka zobrazuje na relevantní dotaz, který v textu chybí, může mít přepis smysl. Pokud je dotaz mimo záměr stránky, je lepší ho ignorovat nebo řešit samostatnou stránkou.

5. [WARNING] **Formulace „kritérium má Google“ může působit jako oficiální rozhodovací pravidlo**

   **Citace:**
   > „Kritérium má Google popsané vlastními slovy“

   **Problém:**  
   Google v dokumentaci popisuje rozdíl mezi běžným a jedinečným obsahem. Neříká ale přímo: podle tohoto kritéria rozhodujte staré články do čtyř skupin.

   **Návrh opravy:**  
   Změkčit:

   > `## Dobré vodítko dává <span class="hl">Google</span> — <strong>běžná znalost versus vlastní zkušenost</strong>`

   nebo:

   > Google k tomu nabízí užitečné vodítko: rozlišuje běžnou znalost a obsah s vlastním odborným nebo zkušenostním přínosem.

6. [WARNING] **Rozpor kolem mazání: „mazání mezi nimi není“ versus „mazat se má“**

   **Citace:**
   > „Čtyři možnosti, ne dvě — mazání mezi nimi není“

   a níže:

   > „Mazat se tedy má z jiných důvodů: obsah už neplatí, duplikuje jiný, nebo popisuje službu, kterou neděláte.“

   **Problém:**  
   Významově je to obhajitelné, ale čtenář to může číst jako rozpor. Nadpis říká, že mazání není možnost, tělo říká, že někdy je.

   **Návrh opravy:**  
   Nadpis zpřesnit:

   > `## <span class="hl">Čtyři možnosti</span>, ne dvě — <strong>mazání není výchozí reakce na AI</strong>`

   A v textu dodat jednu větu:

   > Samostatné odstranění řešte až tehdy, když obsah neplatí, nemá náhradu nebo už neodpovídá tomu, co nabízíte.

7. [WARNING] **Výběr cílové adresy při slučování je zjednodušený**

   **Citace:**
   > „Tu s lepší pozicí a víc odkazy, ne tu novější.“

   **Problém:**  
   Pozice a odkazy jsou důležité, ale cílová adresa musí hlavně odpovídat záměru dotazu a budoucí roli stránky. Jinak se může zachovat silnější URL, která je obsahově horší.

   **Návrh opravy:**  
   > Zpravidla vyberte adresu s lepší pozicí a více odkazy, pokud zároveň odpovídá záměru dotazu a budoucí podobě článku. Když ne, zvolte vhodnější cílovou stránku a signály na ni přesměrujte.

8. [WARNING] **Chybí jasné vymezení vůči článku o aktualizaci obsahu**

   **Citace:**
   > „Mazat se tedy má z jiných důvodů: obsah už neplatí, duplikuje jiný…“

   a:

   > „nechat být a hlídat aktuálnost“

   **Problém:**  
   Článek se přibližuje tématu `/blog/aktualizace-obsahu-pro-ai/`, ale neříká, kde končí triáž a kde začíná samotná aktualizace. To zvyšuje riziko kanibalizace.

   **Návrh opravy:**  
   Přidat jednu odlišovací větu s interním odkazem:

   > Tady řešíme hlavně triáž: který článek nechat, přepsat nebo sloučit. Samotný postup, jak ověřit fakta, doplnit nové části a označit změny, řeší [aktualizace obsahu pro AI](/blog/aktualizace-obsahu-pro-ai/).

9. [TIP] **Label „Doslova z dokumentace Googlu“ je u překladu lehce zavádějící**

   **Citace:**
   > `<Insight tone="warn" label="Doslova z dokumentace Googlu">`

   **Problém:**  
   Dole je správně uvedeno, že citace jsou přeložené. Label „Doslova“ ale může působit, že jde o oficiální české znění.

   **Návrh opravy:**  
   > `label="Přeloženo z dokumentace Googlu"`

10. [TIP] **Pozitivní kontrola: CTA, krátká odpověď a slovník jsou v zásadě v pořádku**

   - Frontmatter `answer` má 40 slov, začíná definicí a dává samostatný smysl.
   - CTA vede na konkrétní produkty: Audit 3 600 Kč a Pack 1 490 Kč.
   - Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani „backlink profil“ se v článku nevyskytují.
   - Meta description je použitelná a nepřehání slib.

---

## 3. Verdikt

**OPRAVIT PŘED PUBLIKACÍ**

Článek je po první revizi výrazně lepší, ale pořád má dva zásadní problémy: rozhodovací model není dost jednoznačný pro praktické použití a „citovatelný zdroj“ je definovaný moc široce. K tomu je potřeba opravit nepřesný statistický příklad s 24 zobrazeními.