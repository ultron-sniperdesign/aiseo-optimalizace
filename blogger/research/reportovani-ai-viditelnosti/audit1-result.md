## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je fakticky nadprůměrně opřený o podklady, ale obsahuje několik míst, kde tvrzení přesahuje doložený zdroj nebo vynechává podmínku platnosti u cizí platformy. To je v tomto kole blocker.

---

## Nálezy k věcné správnosti a aktuálnosti

### [BLOCKER] GA4: článek chybně tvrdí, že GA4 návštěvě „přiřadí medium ai-assistant“

> „Patří do něj návštěvy, jejichž odkazující zdroj odpovídá seznamu AI asistentů, který vede Google; nápověda jmenuje jako příklady ChatGPT, Gemini, DeepSeek, Copilot a Grok. **Takové návštěvě GA4 přiřadí medium „ai-assistant“.**“

**Problém:**  
Podle dokumentace GA4 jde o pravidlo výchozí skupiny kanálů, ne o přepis média návštěvy. GA4 kanál **AI Assistant** může vzniknout mimo jiné tehdy, když:

- `medium` odpovídá `ai-assistant`,
- nebo `campaign` odpovídá `(ai-assistant)`,
- nebo zdroj/referrer odpovídá Googlem vedenému seznamu AI asistentů.

Článek z toho dělá silnější tvrzení: že GA4 takové návštěvě **přiřadí medium** `ai-assistant`. To z podkladu neplyne.

**Zdroj:** GA4 Default channel group, support.google.com/analytics/answer/9756891.

**Navržená oprava:**  
Přepsat na:

> Do kanálu AI Assistant spadnou relace, které splní pravidla výchozí skupiny kanálů GA4: například mají medium `ai-assistant`, kampaň `(ai-assistant)`, nebo jejich zdroj/referrer odpovídá Googlem vedenému seznamu AI asistentů. GA4 tím ale nutně nepřepisuje samotné medium návštěvy.

---

### [BLOCKER] Search Console: dostupnost reportu je formulovaná příliš silně a chybí podmínky platnosti

> „Podle nápovědy ho mají od 31. 8. 2026 všechny weby; o kus níž ale nápověda dál píše, že se zpřístupňuje postupně.“

**Problém:**  
Článek správně zachycuje rozpor v nápovědě, ale věta „ho mají … všechny weby“ je pořád příliš silná. Podklad říká zároveň:

- „As of August 31, 2026, we've rolled out these insights to all websites worldwide“
- a níž: „Not all properties have access… rolling out over time“.

Navíc u tvrzení o reportu chybí podmínky z briefu: ověřená služba, dost zobrazení, web nevyloučený z AI funkcí; Search Labs se nezapočítávají. Vynechaná podmínka u platformy mění praktický význam tvrzení.

**Zdroj:** Search Console Generative AI performance report, support.google.com/webmasters/answer/16984139.

**Navržená oprava:**  
Nahradit formulaci například takto:

> Google v nápovědě uvádí, že insighty od 31. 8. 2026 rozšířil celosvětově, zároveň ale ve stejné nápovědě píše, že ne všechny služby mají přístup a zpřístupnění probíhá postupně. Report se týká ověřených služeb s dostatkem zobrazení a nevztahuje se na weby nebo obsah vyloučený z AI funkcí; Search Labs se do něj nezapočítávají.

Stejnou podmínku je potřeba propsat i do zkrácených míst, kde se tvrdí jen „zobrazení v Search Console“.

---

### [BLOCKER] FAQ o klikách z AI funkcí vynechává podmínku „typ vyhledávání Web“

> „Kliky z obou funkcí jsou v reportu Výkon sečtené s ostatními kliky ve Vyhledávání…“

**Problém:**  
Podklad říká přesněji, že kliky z AI funkcí jsou v reportu Výkon v typu vyhledávání **Web** a počítají se podle standardních pravidel. V FAQ odpovědi tato podmínka chybí. FAQ odpovědi mohou být samostatně citované, takže zkrácení tady není bezpečné.

**Zdroj:** Google Search Central „AI features and your website“; Search Console Help „Clicks, impressions, and position“, support.google.com/webmasters/answer/7042828.

**Navržená oprava:**  
Upravit FAQ odpověď:

> Kliky z obou funkcí jsou v Search Console zahrnuté v reportu Výkon v typu vyhledávání Web spolu s ostatními kliky z Vyhledávání. Samostatný filtr, který by oddělil Přehled od AI nebo režim AI, nápověda neuvádí.

---

### [WARNING] Bing Webmaster Tools: „Average Cited Pages za den“ není doložené

> „…celkový počet citací, **průměrný počet citovaných stránek za den** a citace jednotlivých stránek.“

**Problém:**  
Brief ověřuje metriku **Average Cited Pages**, ale neověřuje dodatek „za den“. Pokud Microsoft v dokumentaci skutečně neříká „per day“, článek přidává význam, který není doložený.

**Zdroj:** Bing Webmaster Blog, „Introducing AI Performance in Bing Webmaster Tools Public Preview“, 10. 2. 2026.

**Navržená oprava:**  
Bez dalšího zdroje odstranit „za den“:

> …celkový počet citací, průměrný počet citovaných stránek a citace jednotlivých stránek.

Pokud autor chce „za den“ ponechat, musí doložit konkrétní místo v dokumentaci Microsoftu, kde je metrika takto definovaná.

---

### [WARNING] Úvod přehání rozdíl mezi kolísáním AI odpovědí a „běžným zásahem na webu“

> „Sledování dotazů v ChatGPT nebo v Přehledu od AI zase dává čísla, která se mezi dvěma běhy liší víc, než kolik změní běžný zásah na webu.“

**Problém:**  
Studie SparkToro/Gumshoe dokládá vysokou nekonzistenci odpovědí mezi běhy. Nedokládá ale obecné srovnání s tím, „kolik změní běžný zásah na webu“. Vlastní data MEGA DETAIL ukazují jeden konkrétní případ, ne obecné pravidlo.

**Zdroj:** SparkToro + Gumshoe, 27. 1. 2026; vlastní měření MEGA DETAIL.

**Navržená oprava:**  
Změkčit:

> Sledování dotazů v ChatGPT nebo v Přehledu od AI může mezi běhy kolísat natolik, že jeden běh po zásahu na webu nestačí jako důkaz trendu.

---

### [WARNING] „Jediný způsob“ je příliš absolutní tvrzení

> „Sada dotazů, které pravidelně posíláte do ChatGPT, Perplexity nebo Přehledu od AI, **je jediný způsob, jak vidět, co AI o značce říká**.“

**Problém:**  
„Jediný způsob“ je nedoložené a příliš absolutní. Existují oficiální reporty s omezeným záběrem, monitoring citací, ruční kontrola konkrétních odpovědí, API testy i nástroje třetích stran. Článek může tvrdit, že jde o praktický způsob sledování konkrétní sady dotazů, ne že je jediný.

**Navržená oprava:**  

> Sada dotazů, které pravidelně posíláte do ChatGPT, Perplexity nebo Přehledu od AI, je praktický způsob, jak sledovat, co AI o značce říká u vybraných scénářů.

---

### [WARNING] Závěr ze studie SparkToro je formulovaný silněji než podklad

> „…pořadí v odpovědi jako metrika nefunguje, ale **podíl odpovědí, ve kterých se značka objeví, se napříč mnoha běhy ustálí a dá se rozumně odhadnout**.“

**Problém:**  
Podklad říká, že viditelnost jako podíl odpovědí se zmínkou je použitelnější než pořadí. Zároveň ale výslovně nechává otevřené, kolik běhů stačí a zda API odpovídá ručnímu zadání v aplikaci. Formulace „se ustálí“ je silnější než doložený závěr.

**Zdroj:** SparkToro + Gumshoe, 27. 1. 2026.

**Navržená oprava:**  

> …pořadí v odpovědi je jako metrika velmi nestabilní. Použitelnější je sledovat podíl odpovědí, ve kterých se značka objeví, vždy s počtem běhů, metodikou a rozpětím. Kolik běhů stačí, studie nechává otevřené.

---

### [WARNING] „Konverze v kanálu AI Assistant“ jsou v tabulce uvedené jako fakt bez podmínky nastavení měření

> „**Fakt** | zobrazení v reportu Search Console pro generativní AI, **návštěvy a konverze v kanálu AI Assistant v GA4**, celkový počet citací v Bing Webmaster Tools…“

**Problém:**  
Podklad ověřuje existenci kanálu **AI Assistant** a pravidla jeho zařazení. Neověřuje obecně, že „konverze“ budou v každé implementaci srovnatelný fakt. V GA4 záleží na tom, zda má web správně nastavené klíčové události / konverze a jakou dimenzí je reportuje.

**Zdroj:** GA4 Default channel group, support.google.com/analytics/answer/9756891.

**Navržená oprava:**  

> …návštěvy v kanálu AI Assistant v GA4 a případně navázané konverze, pokud je web v GA4 měří a reportuje stejnou dimenzí.

---

### [WARNING] Reprodukovatelnost „kdokoli najde znovu“ je příliš silná

> „Znamená, že číslo umíte doložit a **kdokoli ho ve stejném reportu za stejné období najde znovu**.“

**Problém:**  
U Search Console jsou nejnovější data předběžná a mohou se změnit. U reportů obecně záleží na přístupu, službě, filtrech, časovém pásmu, případně dostupnosti reportu. Věta slibuje příliš silnou reprodukovatelnost.

**Zdroj:** Search Console Generative AI performance report — předběžná data a tichomořský čas; support.google.com/webmasters/answer/16984139.

**Navržená oprava:**  

> Znamená, že číslo umíte doložit zdrojem, obdobím a filtrem a oprávněný uživatel ho za stejných podmínek může dohledat; u předběžných dat je potřeba počítat se změnou.

---

### [TIP] Slovo „dnes“ je v aktuálnostně citlivém článku lepší nahradit datem

> „…co přesně dnes měří Search Console, GA4 a Bing Webmaster Tools…“

**Problém:**  
Článek je silně vázaný na stav dokumentace k 3. 10. 2026. V dalším čtení bude „dnes“ nejasné, i když o větu dál článek uvádí datum ověření.

**Navržená oprava:**  

> …co k 3. 10. 2026 podle dokumentace měří Search Console, GA4 a Bing Webmaster Tools…

---

## Co je věcně dobře

- Článek správně rozlišuje **fakt / vzorek / mezeru**.
- Správně upozorňuje, že Search Console report pro generativní AI neodděluje Přehled od AI a režim AI.
- Správně uvádí, že GA4 řadí Google AI Overviews a AI Mode do Organic Search, ne do AI Assistant.
- Správně zachází s Bing „sample“ jen u grounding queries, ne u celého AI Performance reportu.
- Čísla SparkToro/Gumshoe i vlastní data MEGA DETAIL jsou v zásadě použita opatrně a s metodikou.