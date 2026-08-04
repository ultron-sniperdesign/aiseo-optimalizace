Níže jen problémy. Cituju místo, vysvětluju proč a navrhuju opravu.

## 1. Hlavní teze: je obhajitelná, ale místy ji článek přestřeluje

### Místo
- title: **„Search Console měří i TikTok. A dá víc než u AI“**
- description: **„Dává kliky, CTR i pozice — tedy čísla, která u generativních AI funkcí nedostanete.“**
- tělo: **„A je v tom paradox, kterého si zatím skoro nikdo nevšiml.“**
- tělo / Insight: **„datově jste na tom u svých Reels líp než u vlastního webu v AI.“**

### Problém
Samotné srovnání je v zásadě obhajitelné, protože research výslovně staví kontrast mezi:
- **službami platforem**: kliky, CTR, pozice, dotazy
- **reportem Generativní AI funkce**: jen imprese

Ale článek to místy podává jako širší zjištění o „AI“ obecně, případně jako hodnotící soud „líp“. To už je silnější než research. Srovnáváte dva **různé reporty pro různé povrchy a různé typy interakcí**, ne stejnou metriku na stejném objektu.

Formulace „u AI“ bez upřesnění může čtenář číst jako obecné tvrzení o všech AI plochách Googlu. Research mluví konkrétně o **reportu Generativní AI funkce**.

### Návrh opravy
- Titulek zpřesnit:
  - **„Search Console měří i TikTok. A proti reportu generativních AI funkcí dá víc dat“**
- Description:
  - **„Search Console má nový typ služby pro Instagram, TikTok, X a YouTube. V těchto reportech dává kliky, CTR i pozice, zatímco report generativních AI funkcí pro web zatím ukazuje jen imprese.“**
- V těle místo „datově jste na tom líp“:
  - **„V těchto dvou reportech dnes Google u obsahu na platformách ukazuje víc metrik než u reportu generativních AI funkcí pro vlastní web.“**

---

## 2. Nedoložené tvrzení o tom, co „technicky měřitelné“ je

### Místo
Insight box:
> **„Není to spiknutí, spíš rozdíl v tom, co je technicky měřitelné: proklik z výsledku na TikTok je normální proklik, kdežto v AI odpovědi se často žádný proklik nestane.“**

### Problém
Tohle už není doložené researchí. Research říká jen kontrast reportů a že AI report dává jen imprese. Neříká, že důvod je „technická měřitelnost“, ani nevysvětluje interní logiku Googlu.

Druhá půlka („v AI odpovědi se často žádný proklik nestane“) je navíc plausibilní, ale tady **nedoložená**. Není to citace z primárního zdroje.

### Návrh opravy
- Bez vysvětlování motivace Googlu:
  - **„Google u těchto dvou reportů dnes zveřejňuje jiný rozsah metrik. U služeb platforem jsou k dispozici kliky, CTR, pozice i dotazy; u reportu generativních AI funkcí pro web zatím jen imprese.“**

---

## 3. Nedoložené tvrzení „Tohle si nikde nepřečtete“

### Místo
## Kliky vedou na platformu, ne na váš web
> **„Tohle si nikde nepřečtete, ale plyne to z podstaty věci…“**

### Problém
To je zbytečně silné. Nemáte doloženo, že to „nikde nepřečtete“. Navíc tím zbytečně stavíte vlastní dedukci jako odhalení.

Samotný závěr, že kliky vedou na platformu a ne na web, je rozumný a z kontextu reportu plyne. Problém je ta formulace o exkluzivitě tvrzení.

### Návrh opravy
- **„Nápověda to v téhle větě neříká, ale z povahy reportu plyne, že klik počítaný u služby platformy vede na obsah na dané platformě, ne na váš web.“**

---

## 4. GA4 část: příliš kategorická a místy spekulativní

### Místo
1. **„V GA4 na vašem webu se ty kliky neobjeví.“**
2. **„Konverzi z toho neuvidíte.“**
3. **„Zato je to čistý údaj o dosahu značky.“**

### Problém
Tahle pasáž jde výrazně nad research.

- **„V GA4 … se ty kliky neobjeví“**: pokud klik vede na platformu, na webu se opravdu neprojeví jako session z toho konkrétního kliku. Ale kategorické tvrzení bez podmínky je moc tvrdé.
- **„Konverzi z toho neuvidíte“**: přímo z reportu služby platformy ne, ale uživatel může později přijít na web jinou cestou. Tvrzení je formulované absolutně.
- **„čistý údaj o dosahu značky“**: hodnotový rámec, ne doložený fakt. Navíc kliky a imprese na nebrand dotazy nemusí být „dosah značky“ v úzkém smyslu.

### Návrh opravy
- Bod 1:
  - **„Tyto kliky nejsou návštěvy vašeho webu, takže se v GA4 neprojeví jako session z návštěvy webu z tohoto reportu.“**
- Bod 2:
  - **„Samotný report služby platformy konverzi na vašem webu neukáže. Případný pozdější dopad na web se může projevit až nepřímo.“**
- Bod 3:
  - **„Je to spíš údaj o viditelnosti vašeho obsahu na plochách Googlu než o návštěvnosti webu.“**

---

## 5. „Když službu nevidíte, nejspíš to není nastavením.“ — nedoložené

### Místo
## Dostupnost
> **„Držte se formulace z nápovědy. Když službu nevidíte, nejspíš to není nastavením.“**

### Problém
První věta sedí. Druhá už ne. Z research máte doloženo jen postupné zavádění. Nemáte doloženo, že problém „nejspíš není nastavením“. Může být rollout, ale stejně tak chybějící podpora účtu, chybné ověření, přístupová práva apod.

### Návrh opravy
- **„Držte se formulace z nápovědy. Když službu nevidíte, může jít jak o postupné zavádění, tak o problém s přístupem nebo ověřením.“**

---

## 6. „Poprvé oficiální zdroj“ — příliš silné

### Místo
Checklist „Kdy si službu platformy přidat“
> **„Tohle je poprvé oficiální zdroj pro to druhé.“**

### Problém
Tohle research v této podobě nedokládá. Dokládá nový typ služby v Search Console, ne historický superlativ „poprvé“. Může být pravdivý, ale nemáte ho opřený o primární zdroj.

### Návrh opravy
- **„Tohle je nový oficiální zdroj pro to druhé.“**

---

## 7. „Data pokrývají i Zprávy Google a Objevit, tedy plochy, kde sociální obsah dostává prostor.“ — druhá část nedoložená

### Místo
Checklist „Kdy si službu platformy přidat“
> **„Data pokrývají i Zprávy Google a Objevit, tedy plochy, kde sociální obsah dostává prostor.“**

### Problém
První část je doložená. Druhá je interpretační zobecnění bez opory v researchi.

### Návrh opravy
- **„Data pokrývají i Zprávy Google a Objevit.“**

---

## 8. „Kliky a CTR jsou čísla, se kterými se dá jít za vedením.“ — hodnotící, marketingová formulace

### Místo
Checklist „Kdy si službu platformy přidat“
> **„Kliky a CTR jsou čísla, se kterými se dá jít za vedením.“**

### Problém
Není to věcná chyba, ale je to rétorika bez informační hodnoty. V odborném textu je to vatové tvrzení.

### Návrh opravy
- **„Report přidává metriky, které jsou srozumitelnější než samotný dosah uvnitř platformy.“**

---

## 9. „Čekat data zpětně za celou historii“ — nedoložené

### Místo
Mistake 02
> **„U nové služby nemáte s čím srovnávat. První závěry dělejte, až budete mít aspoň dva srovnatelné měsíce.“**

### Problém
Tady mícháte dvě věci:
- že je nová služba,
- že nejsou historická data zpětně.

Research nedokládá, jestli data naběhnou zpětně nebo ne. Tvrzení v titulku chyby („Čekat data zpětně za celou historii“) je tedy bez opory. Doporučení počkat na srovnatelné období je rozumné, ale není důkazem předchozí věty.

### Návrh opravy
- Titulek chyby:
  - **„Dělat závěry z příliš krátkého období“**
- Text:
  - **„U nové služby je na začátku málo dat. První závěry dělejte až po delším srovnatelném období.“**

---

## 10. „Služby platforem s AI viditelností nesouvisí.“ — příliš absolutní

### Místo
Mistake 03
> **„Služby platforem s AI viditelností nesouvisí.“**

### Problém
To je moc silné. Research říká:
- report **neodpovídá na otázku o citacích v AI**
- **neodděluje** kliky z AI Overviews ani AI Mode

To není totéž jako „nesouvisí“. Souviset mohou nepřímo, jen je report neumí izolovat.

### Návrh opravy
- **„Služby platforem neodpovídají na otázku citací v AI a AI návštěvnost samostatně nevyčleňují.“**

---

## 11. FAQ: „Google je spustil 7. července 2026.“ — zjednodušení bez poznámky o rollout

### Místo
FAQ 1
> **„Google je spustil 7. července 2026.“**

### Problém
Datum spuštění je v researchi. Ale protože jinde správně uvádíte, že funkce se zavádí postupně, je tahle věta v FAQ ostřejší a bez kvalifikace. Přesně ten typ problému, který zmiňujete.

### Návrh opravy
- **„Google je oznámil 7. července 2026 a zavádí je postupně.“**

---

## 12. FAQ: „Měří jen tu část, která jde přes Google.“ + „obě čísla se budou lišit řádově.“ — druhá část je moc jistá

### Místo
FAQ 3
> **„Měří jen tu část, která jde přes Google. Statistiky dosahu na platformě zůstávají v nástrojích dané platformy a obě čísla se budou lišit řádově.“**

### Problém
První věta sedí. Druhá je příliš kategorická. Často to tak bude, ale „budou se lišit řádově“ není primárně doložené pravidlo.

### Návrh opravy
- **„Měří jen tu část, která jde přes Google. Statistiky dosahu na platformě zůstávají v nástrojích dané platformy a obě čísla se mohou výrazně lišit, protože měří jinou věc.“**

---

## 13. FAQ: „Na generativní AI funkce je samostatný report a ten dává jen imprese.“ — v pořádku jen pokud je to opřené o váš jiný článek z primárního zdroje
### Místo
FAQ 6

### Problém
V rámci tohoto článku je to převzatá teze z jiného textu. Pokud ten jiný text stojí na primárním zdroji, je to v pořádku. Pokud ne, tady je to silné shrnutí, které FAQ podává jako jistotu. Samotný zde vložený research to tvrdí, ale opírá se o interní sousední článek, ne o explicitně vypsaný primární zdroj v tomto briefu.

### Návrh opravy
Pokud chcete být opatrnější:
- **„Na generativní AI funkce Google vede samostatný report; v našem srovnání proti němu služby platforem ukazují širší sadu metrik.“**
Pokud máte primární zdroj jinde pevně doložený, nechte.

---

## 14. Vnitřní rozpor: „váš web“ vs. „co vám nepatří“

### Místo
Úvod:
> **„Search Console dlouho měřila jednu věc: váš web. Od 7. července 2026 měří i něco, co vám nepatří…“**

### Problém
Ne úplný faktický rozpor, ale formulačně to drhne. Účty na platformách vám mohou patřit nebo být vaše firemní. „Co vám nepatří“ je nepřesné. Research mluví o **obsahu na cizí platformě**, ne o cizím účtu.

### Návrh opravy
- **„…měří i obsah, který publikujete na cizích platformách…“**

---

## 15. Vnitřní rozpor / nejasnost: „ve vyhledávání“ vs. „Vyhledávání, Objevit a Zprávy“

### Místo
- vícekrát uvádíte citaci nápovědy „jak lidé nacházejí váš obsah při vyhledávání na Googlu“
- současně správně píšete, že zdroje dat jsou i Discover a Google News

### Problém
Není to chyba, ale čtenář může tápat, proč citace mluví o „vyhledávání“, když vy článek rámujete šířeji. Bylo by lepší to jednou explicitně vysvětlit, protože jinak to může vypadat jako posun významu.

### Návrh opravy
Za citaci doplnit:
- **„V nápovědě je to zkrácené přes ‚vyhledávání na Googlu‘, ale přehled reportů výslovně uvádí i data z Objevit a Zpráv Google tam, kde se obsah zobrazuje.“**

---

## 16. Titulek slibuje víc než článek jen lehce

### Místo
title:
> **„Search Console měří i TikTok. A dá víc než u AI“**

### Problém
Titulek je úderný, ale neurčitý:
- „u AI“ je moc široké
- „dá víc“ neříká, že jde o **víc metrik v konkrétním reportu**, ne o víc hodnoty obecně

### Návrh opravy
- **„Search Console nově měří Instagram, TikTok, X a YouTube. A proti AI reportu dá víc metrik“**
- nebo kratší:
  - **„Search Console nově měří TikTok. Proti AI reportu ukáže víc metrik“**

---

## 17. Krátká odpověď je v zásadě v pořádku, ale chybí rollout

### Místo
answer

### Problém
Obsahově sedí, ale vzhledem k tomu, že rollout je v researchi označen jako klíčový rozpor se sekundárními zdroji, krátká odpověď by měla nést i tohle omezení. Jinak je answer silnější a „hotovější“ než realita.

### Návrh opravy
Doplnit závěr:
- **„Google funkci zavádí postupně, takže ji nemusíte mít k dispozici hned.“**

---

## 18. „skoro nikdo si nevšiml“ — čistě nedoložené

### Místo
Úvod:
> **„A je v tom paradox, kterého si zatím skoro nikdo nevšiml.“**

### Problém
Nemáte žádný podklad pro tvrzení o tom, čeho si všiml nebo nevšiml „skoro nikdo“.

### Návrh opravy
- **„A je v tom paradox, který stojí za pozornost.“**

---

## Shrnutí nejdů