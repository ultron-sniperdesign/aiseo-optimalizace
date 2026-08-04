Níže jen to, co po opravách ještě zůstává problematické.

---

## 1. Insight box znovu vrátil nedoložené vysvětlení příčiny

### Místo
`<Insight ...>`
> **„Část toho rozdílu je pochopitelná: proklik z výsledku na TikTok je běžný proklik, kdežto u AI odpovědi často žádný proklik nevznikne.“**

### Problém
Tohle byl už v prvním auditu vytknutý typ tvrzení a po opravách tam pořád je, jen mírněji formulovaný. Research nedokládá:
- že důvod rozdílu je právě tenhle,
- ani že **„u AI odpovědi často žádný proklik nevznikne“**.

Je to plausibilní interpretace, ne doložený fakt.

### Oprava
Nechat jen doložené srovnání reportů:
> **„Google u těchto dvou reportů dnes zveřejňuje jiný rozsah metrik: u služeb platforem kliky, CTR, pozice i dotazy, u reportu generativních AI funkcí pro web zatím jen imprese.“**

---

## 2. „Search Console dlouho měřila jednu věc: váš web.“ je zbytečně absolutní

### Místo
Úvod:
> **„Search Console dlouho měřila jednu věc: váš web.“**

### Problém
V kontextu článku je pointa srozumitelná, ale formulace je moc absolutní. Search Console měří i další povrchy a typy výstupů vztahované k webovým property; research dokládá jen to, že **nově přibyl typ služby pro platformy**, ne že dřív šlo výhradně o „jednu věc“.

Není to velká věcná chyba, ale je to přestřelené zjednodušení hned na začátku.

### Oprava
> **„Search Console byla dosud hlavně o měření vlastního webu. Od 7. července 2026 k tomu přidává i obsah publikovaný na vybraných cizích platformách.“**

---

## 3. U seznamu platforem jsou nedoložené detaily po jednotlivých sítích

### Místo
Checklist „Podporované platformy“

- Instagram:
  > **„příspěvky a Reels, které se objevují ve Vyhledávání nebo v Objevit.“**
- TikTok:
  > **„videa, na která se lidé dostanou přes Google, ne přes samotnou aplikaci.“**
- X:
  > **„příspěvky zobrazené ve výsledcích Googlu.“**
- YouTube:
  > **„videa a jejich výskyt ve Vyhledávání, Objevit a Zprávách.“**

### Problém
Research dokládá podporované platformy a obecně zdroje dat/reporting. Nedokládá po jednotlivých platformách tyto konkrétní objekty a povrchy:
- **Reels** u Instagramu,
- že X je jen „ve výsledcích Googlu“,
- že YouTube explicitně „ve Zprávách“,
- ani formulaci „lidé se dostanou přes Google“ pro konkrétní typ obsahu.

To jsou rozumné příklady, ale nejsou opřené o primární zdroj v téhle granularitě.

### Oprava
Udržet to obecně:
- **Instagram — „obsah účtu měřený přes plochy Googlu“**
- **TikTok — „obsah účtu měřený přes plochy Googlu“**
- **X — „obsah účtu měřený přes plochy Googlu“**
- **YouTube — „obsah účtu měřený přes plochy Googlu“**

Pokud chcete konkrétní typy obsahu, potřebujete je mít doložené.

---

## 4. „TikTok může ukázat sto tisíc zhlédnutí… Search Console pár set impresí.“ je ilustrační, ale nedoložené

### Místo
Sekce „Co report nesleduje“
> **„TikTok může ukázat sto tisíc zhlédnutí a Search Console pár set impresí.“**

### Problém
Tohle je modelový příklad s konkrétními řády čísel, který research nedokládá. Směr tvrzení sedí, ale konkrétní čísla jsou už autorská ilustrace.

### Oprava
> **„Čísla se proto mohou výrazně lišit.“**

Případně:
> **„Statistiky platformy bývají řádově jiné než data v Search Console, protože měří jinou věc.“**

---

## 5. Srovnávací tabulka tvrdí něco, co research nedokládá jako obecné pravidlo

### Místo
CompareTable:
> **„Typický řád čísel — vyšší / výrazně nižší“**

### Problém
Research říká, že se nemá zaměňovat dosah na platformě s cestou přes Google a že čísla se budou lišit. Nedokládá ale obecné pravidlo **„typický řád čísel“** ani že platforma bude typicky vyšší a GSC typicky výrazně nižší. To bude často pravda, ale není to opřené o zdroj.

### Oprava
Buď řádek vyhodit, nebo přepsat na věcný rozdíl bez kvantitativního nároku:
> **„Co ta čísla představují — interakce uvnitř platformy / zobrazení a kliky přes plochy Googlu“**

---

## 6. GA4 / atribuce: druhý a třetí bod jsou po opravách pořád moc silné

### Místo
Sekce „Kliky vedou na platformu, ne na váš web“

2.
> **„Konverzi na webu report neukáže. Uživatel skončí na platformě; případná cesta k objednávce vede až potom přes profil, odkaz v biu nebo brandové vyhledávání — a atribuce se rozpadá.“**

3.
> **„Zato je to údaj o viditelnosti na plochách Googlu.“**

### Problém
- **„atribuce se rozpadá“** je interpretační a příliš univerzální. Může být oslabená, nepřímá, těžko sledovatelná — ale „rozpadá se“ je už soud.
- **„je to údaj o viditelnosti“** je lepší než minule, ale pořád dost kategorické. Report obsahuje i kliky; není to jen „viditelnost“.

### Oprava
2.
> **„Konverzi na webu tenhle report neukáže. Případný dopad na web se může projevit až nepřímo a hůř se připisuje konkrétnímu kliku z tohoto reportu.“**

3.
> **„Je to samostatná vrstva měření toho, jak se obsah z platforem zobrazuje a proklikává na plochách Googlu.“**

---

## 7. Nově vzniklá nesrozumitelnost: „oficiální zdroj pro to druhé“

### Místo
Checklist „Kdy si službu platformy přidat“
> **„Zhlédnutí na YouTube a příchody z Vyhledávání jsou dvě různá čísla. Tohle je oficiální zdroj pro to druhé.“**

### Problém
„to druhé“ je v té větě nečisté:
- může znamenat **příchody z Vyhledávání**,
- ale report zahrnuje podle research i **Discover a Zprávy Google**, ne jen Vyhledávání.

Takže oprava po prvním auditu sice stáhla superlativ, ale zavedla terminologickou nepřesnost.

### Oprava
> **„Zhlédnutí na YouTube a návštěvy či zobrazení obsahu z ploch Googlu jsou dvě různé věci. Tohle je oficiální zdroj pro tu druhou vrstvu měření.“**

Nebo jednodušeji:
> **„… Tohle je oficiální zdroj pro výkon tohoto obsahu na plochách Googlu.“**

---

## 8. „Teď se dá ověřit, jestli se to projevilo aspoň ve Vyhledávání.“ je užší než doložený rozsah a navíc kauzální

### Místo
Checklist „Kdy si službu platformy přidat“
> **„Přepis, kapitoly a popis videa doporučujeme kvůli AI. Teď se dá ověřit, jestli se to projevilo aspoň ve Vyhledávání.“**

### Problém
Dvojí:
1. Research dokládá data i pro **Objevit a Zprávy Google**, ne jen Vyhledávání.
2. „ověřit, jestli se to projevilo“ naznačuje kauzální vyhodnocení konkrétních úprav, které samotný článek ani zdroj nedokládá.

### Oprava
> **„Teď se dá sledovat, jestli se výkon takového obsahu na plochách Googlu mění.“**

---

## 9. „Naopak pokud sociální sítě neděláte… tenhle report vám nic nepřinese“ je příliš absolutní

### Místo
Pod checklistem:
> **„Naopak pokud sociální sítě neděláte nebo je berete jen jako distribuci odkazů na web, tenhle report vám nic nepřinese…“**

### Problém
„nic nepřinese“ je zbytečně definitivní. Pokud někdo platformy používá i omezeně, report mu něco přinést může. Research tohle hodnotové zobecnění neopírá.

### Oprava
> **„… tenhle report pro vás pravděpodobně nebude prioritní…“**

---

## 10. „Bez něj za tři měsíce nepoznáte, co je růst a co náběh dat.“ — nová jistota bez opory

### Místo
Checklist „Čtyři kroky…“
> **„Od něj se počítá vaše srovnávací základna. Bez něj za tři měsíce nepoznáte, co je růst a co náběh dat.“**

### Problém
Doporučení poznamenat si datum je v pořádku. Druhá věta je moc jistá. Research nedokládá chování náběhu dat ani potřebu přesně tohoto data pro interpretaci po třech měsících.

### Oprava
> **„Od něj si snáz vymezíte srovnávací základnu a první období po nasazení.“**

---

## 11. Mistake 03: „AI návštěvnost“ je terminologicky nepřesné a silnější než research

### Místo
Mistake 03
> **„Služby platforem na otázku citací v AI neodpovídají a AI návštěvnost samostatně nevyčleňují.“**

### Problém
Research mluví konkrétně o tom, že report **nerozlišuje kliky z AI Overviews ani AI Mode** o nic víc než zbytek Search Console. Termín **„AI návštěvnost“** je volnější a může znamenat něco širšího.

### Oprava
> **„… a kliky ani zobrazení z AI Overviews a AI Mode samostatně neoddělují.“**

Pokud nechcete opakovat obě metriky:
> **„… a provoz z AI Overviews a AI Mode samostatně nerozlišují.“**
ale to už je o chlup volnější.

---

## 12. Závěrečné CTA opět slibuje víc, než článek dokládá

### Místo
Poslední věta:
> **„Tenhle report vám pak ukáže aspoň tu část výsledku, která projde přes Google.“**

### Problém
„výsledku“ odkazuje zpět na doporučení pro **AI odpovědi**. Jenže research výslovně říká, že report **neodpovídá na otázku o citacích v AI**. Tímhle se to na konci znovu rétoricky propojí víc, než je bezpečné.

### Oprava
> **„Tenhle report vám pak ukáže, jak se tento obsah projevuje na plochách Googlu.“**

---

## 13. Title a description jsou už lepší, ale pořád lehce kompresní

### Místo
- title:
  > **„Search Console měří i TikTok: víc dat než u AI reportu“**
- description:
  > **„… metriky, které report generativních AI funkcí nemá.“**

### Problém
Není to vyloženě chybně, ale:
- **„AI report“** je zkratka; bezpečnější je držet **„report generativních AI funkcí“** i v titulku, pokud se vejde.
- Description je věcně v pořádku, jen bych hlídal, že srovnání je mezi **dvěma konkrétními reporty**, ne „u AI“ obecně.

### Oprava
Titulek:
> **„Search Console měří i TikTok: víc dat než report generativních AI funkcí“**

Není nutné, ale je to přesnější.

---

## Co je podle mě nejdůležitější opravit před vydáním
1. Insight box s „často žádný proklik nevznikne“.
2. Checklist „Podporované platformy“ — odstranit nedoložené konkrétní typy obsahu.
3. Tabulku s „typickým řádem čísel“.
4. Závěrečnou větu, která znovu přehání vztah k AI výsledkům.
5. GA4/atribuce pasáž zjemnit v bodu o konverzi a atribuci.