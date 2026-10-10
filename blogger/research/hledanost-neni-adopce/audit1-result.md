## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je fakticky silný v hlavní tezi „hledanost není adopce“ a většina čísel sedí s briefem. Před publikací ale vyžaduje opravy u několika tvrzení, která jsou buď silnější než doklad, vynechávají podmínku cizí platformy, nebo zaměňují relace za lidi.

---

## Nálezy

### [BLOCKER] U údaje o Přehledu od AI chybí povinné podmínky Googlu

**Problémové místo:**

> „Přehled od AI přitom Google zobrazuje sám, bez hledání jejich názvu, a Alphabet u nich 23. 7. 2025 uvedl přes 2 miliardy uživatelů měsíčně.“

A znovu:

> „‚Přehled od ai‘ hledá 130 lidí měsíčně, Alphabet přitom u Přehledu od AI uvádí přes 2 miliardy uživatelů měsíčně.“

**Problém:**  
Podle briefu musí být u tohoto tvrzení uvedeny podmínky: **k 23. 7. 2025, 200+ zemí a území, 40 jazyků, definice „monthly users“ není uvedená**. Článek uvádí datum a číslo, ale vynechává rozsah a neupozorňuje na nedefinovanou metodiku. U tvrzení o cizí platformě je vynechaná podmínka blocker.

**Návrh opravy:**

> Alphabet 23. 7. 2025 uvedl, že Přehledy od AI mají přes 2 miliardy měsíčních uživatelů ve více než 200 zemích a územích a ve 40 jazycích. Definici „monthly users“ ale neuvedl.

U druhého výskytu zkraťte stejně:

> Alphabet u Přehledů od AI k 23. 7. 2025 uváděl přes 2 miliardy měsíčních uživatelů globálně ve 200+ zemích a 40 jazycích; definici měsíčního uživatele nezveřejnil.

---

### [BLOCKER] Doporučení sčítat varianty je silnější, než data unesou

**Problémové místo ve FAQ:**

> „Varianty s diakritikou a bez ní, české a anglické tvary sečíst můžete, pokud se jejich měsíční řady liší.“

**Problémové místo v boxu:**

> „U rodiny výrazů sečtěte tvary s diakritikou i bez ní, české i anglické — ale jen ty, jejichž měsíční řady se liší.“

**Problém:**  
Z dat plyne pouze to, že **totožné řady u „ai overview“ a „ai overviews“ jsou silný signál sloučení a nemají se sčítat**. Neplatí ale opak: rozdílné měsíční řady samy o sobě nedokazují, že se varianty nepřekrývají nebo že součet je přesný počet hledání. Brief výslovně říká, že u Marketing Mineru není ověřená metodika zaokrouhlování ani slučování variant.

**Návrh opravy:**

Ve FAQ změnit na:

> Varianty můžete agregovat jen orientačně jako rodinu výrazů. Totožné měsíční řady jsou varování, že nástroj varianty pravděpodobně sloučil a součet by byl duplicitní. Rozdílné řady ale samy o sobě nezaručují přesný součet unikátních hledání.

V boxu změnit na:

> U rodiny výrazů porovnejte tvary s diakritikou i bez ní, české i anglické. Součet berte jako orientační odhad, ne přesný počet, a nesčítejte řady, které nástroj zjevně sloučil.

---

### [BLOCKER] Tvrzení o Search Console a AI funkcích není dostatečně doložené v dodaných podkladech

**Problémová místa:**

> „…do Search Console na zobrazení v AI funkcích Googlu.“

> „Search Console navíc obě funkce Googlu vykazuje dohromady, oddělit je nejde…“

> „U funkcí, které se zobrazují samy, sledujte zobrazení v Search Console.“

**Problém:**  
V briefu je doložená obecná definice zobrazení v Search Console, ale není tam primární doklad pro konkrétní tvrzení, že **Přehled od AI a režim AI jsou v Search Console vykazované dohromady a nejdou oddělit**. Řádek „Rozhraní (UI)“ je navíc prázdný, takže článek nesmí tvrdit nic, co stojí na pohledu do rozhraní. Pokud autor vychází z dokumentace Googlu mimo brief, musí být uvedená přímo; odkaz na vlastní článek nestačí.

**Návrh opravy:**

Buď doplnit primární zdroj Googlu, který výslovně potvrzuje zahrnutí AI Overviews / AI Mode do Search Console a nemožnost separace, nebo formulaci oslabit takto:

> Search Console ukazuje zobrazení a kliknutí odkazů ve Vyhledávání Google. Z těchto dat ale nevyčtete, kolik lidí používá Přehled od AI nebo režim AI.

A v FAQ změnit:

> …u Google funkcí sledujte celková zobrazení a kliknutí ve Search Console, ale nevyvozujte z nich počet uživatelů AI funkcí.

---

### [BLOCKER] Údaj SparkToro / Similarweb 0,34 % vynechává část metodických podmínek

**Problémové místo:**

> „Podle dat Similarwebu, která zveřejnil SparkToro, se přitom v USA od ledna do dubna 2026 přesunulo do režimu AI jen 0,34 % vyhledávání na Googlu (počítače a mobilní prohlížeče, bez aplikace Google).“

**Problém:**  
Článek správně uvádí USA, období, zařízení a vyloučení aplikace Google. Chybí ale podmínka z briefu, že jmenovatel jsou **vyhledávání na Googlu v panelu Similarwebu**. Také není uvedeno, že metodika detekce přechodu do AI Mode není ve zdroji popsaná. U platformového / cizího měření je to důležitá podmínka.

**Návrh opravy:**

> Podle dat Similarwebu, která zveřejnil SparkToro, prošlo v USA od ledna do dubna 2026 do režimu AI 0,34 % vyhledávání na Googlu v panelu Similarwebu. Jde o počítače a mobilní prohlížeče, bez aplikace Google; zveřejněný článek nepopisuje přesně, jak Similarweb přechod do AI Mode detekoval.

---

### [WARNING] GA4 relace jsou v tabulce přeložené jako „kolik lidí“, což je věcně špatně

**Problémové místo:**

> „Návštěvy z AI v GA4 | relace, které na web přišly z AI asistentů | kolik lidí vám AI poslala“

A dále:

> „Na otázku, jestli AI posílá lidi právě vám, odpovídá vlastní analytika.“

**Problém:**  
GA4 zde pracuje s **relacemi / návštěvami**, ne s počtem lidí. Článek přitom sám varuje před záměnou metrik, takže tato formulace podkopává hlavní pointu.

**Návrh opravy:**

V tabulce:

> kolik relací nebo návštěv vám přišlo z AI asistentů

V textu:

> Na otázku, jestli vám AI asistenti přivádějí návštěvy, odpovídá vlastní analytika.

---

### [WARNING] Frontmatter zobecňuje zaokrouhlování „z nástrojů“ víc, než je doložené

**Problémové místo v `answer`:**

> „Měsíční hledanost z nástrojů je zaokrouhlený odhad…“

**Problém:**  
Zaokrouhlení a „approximate“ je doložené pro Google Ads / Keyword Planner. U Marketing Mineru brief výslovně říká, že metodika zaokrouhlování nebyla ověřena; vidíme jen schodové hodnoty. Obecná věta „z nástrojů“ je proto silnější než doklad.

**Návrh opravy:**

> Měsíční hledanost je odhad; u Plánovače klíčových slov Google uvádí zaokrouhlení a přibližnost. Google Trends dává jen relativní index od 0 do 100.

Nebo kratší varianta:

> Měsíční hledanost berte jako odhad, ne přesný počet; u Google Ads jsou čísla zaokrouhlená a Google Trends dává jen relativní index od 0 do 100.

---

### [WARNING] Formulace „kolik lidí AI používá“ u průzkumů je v pořádku, ale je nutné hlídat přesné znění ČSÚ

**Problémové místo:**

> „Podle ČSÚ použilo nástroje generativní AI za tři měsíce před šetřením…“

A v tabulce:

> „použil generativní AI za poslední 3 měsíce“

**Problém:**  
Číslo 31,5 %, období, věk 16+ i 2. čtvrtletí 2025 sedí. Přesnější znění ČSÚ ale podle briefu je: **nástroje AI určené pro vytváření textů, obrázků nebo kódu**, přičemž se zahrnuje i používání pro vyhledávání informací. „Generativní AI“ je srozumitelná zkratka, ale u takto metodického článku je lepší nepřepisovat otázku volně.

**Návrh opravy:**

V tabulce:

> použil za poslední 3 měsíce nástroje AI určené pro vytváření textů, obrázků nebo kódu; metodika zahrnuje i hledání informací přes AI

Ve FAQ lze ponechat kratší verzi, ale doplnit:

> ČSÚ do toho výslovně zahrnuje i používání těchto nástrojů pro vyhledávání informací.

---

### [TIP] Výklad Google Trends je celkově správný; drobně doplnit nesrovnatelnost mezi různými dotazy

**Dobře:**  
Článek správně uvádí normalizaci na celkový počet hledání v oblasti a období, škálu 0–100, vzorek, nuly u málo hledaných výrazů, vyřazení opakovaných hledání a upozornění, že Trends není vědecký průzkum.

**Co chybí:**

Brief navíc uvádí podmínku z Google Trends API / Search Central blogu:

> hodnoty na webu se škálují 0–100 při každém dotazu, takže hodnoty ze dvou různých dotazů nejsou přímo srovnatelné.

Článek to naznačuje větou:

> „Při jiném výběru se celá řada přepočítá.“

To je použitelné, ale u vzdělávacího článku by bylo přesnější doplnit jednu větu.

**Návrh opravy:**

Do části o Google Trends přidat:

> Hodnoty z různých samostatných dotazů ve Trends proto nesrovnávejte jako absolutní čísla; při změně výrazů, oblasti nebo období se index přepočítá znovu.

---

## Krátké potvrzení správných částí

- Údaje o AI Mode „přes miliardu MAU“ jsou uvedené s globálním rozsahem a článek správně říká, že Google nezveřejňuje rozpad po zemích ani definici aktivního uživatele.  
- Čísla ČSÚ, Eurostat, CVVM a Reuters Institute odpovídají briefu v hodnotách, obdobích i populacích; hlavní oprava je jen přesnější znění otázky u ČSÚ.  
- Interpretace vlastních dat Marketing Mineru a GA4 je většinou opatrná: článek netvrdí příčinu růstu návštěv z ChatGPT a správně odlišuje hledanost od chování.  
- Aktuálnost k roku 2026 je v zásadě v pořádku; článek nepoužívá neukotvené „letos“ ani „příští rok“.