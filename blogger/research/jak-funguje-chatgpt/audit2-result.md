Níže druhý audit v režimu **přísný, ale férový**.

## BLOKER

### 1. Titulek pořád tvrdí víc, než text unese
> **title: "Jak funguje ChatGPT: dva režimy a jen jeden vás cituje"**

Po disclaimerech v těle je tenhle titul zase moc tvrdý. „Jak funguje“ + „dva režimy“ zní jako popis skutečné architektury, ne pracovní model.

**Problém:** rozpor mezi titulkem a zjemněným tělem.  
**Doporučení:** přepsat na něco jako:
- „Jak se ChatGPT navenek chová: kdy cituje a kdy ne“
- „Kdy vás ChatGPT může citovat: praktický model pro začátečníky“

---

### 2. Závěr vrací starou jistotu
> **„ChatGPT není jeden mechanismus, ale dva.“**  
> **„Z natrénované paměti odpovídá bez odkazů…; s vyhledáváním načte pár stránek a ty ocituje.“**

Tohle je po všem zjemnění největší zbytkový problém. V závěru se z pracovního modelu znovu stává ontologické tvrzení o mechanismu.

**Problém:** přílišná jistota + rozpor s boxem „nejde o interní architekturu“.  
**Doporučení:** změnit na:
- „Pro praxi je užitečné rozlišovat dva navenek viditelné způsoby odpovědi.“
- „Jedna odpověď obvykle vzniká bez viditelných webových citací, druhá s nimi.“

---

## DOPORUČENÍ

### 3. „Jen jeden vás cituje“ je užitečné, ale trochu přestřelené
> **description: "…buď z natrénované paměti, nebo z živého vyhledávání. Rozdíl rozhoduje o tom, jestli se váš web může v odpovědi vůbec objevit."**  
> **answer: "…pak odpověď obvykle nemá odkazy a váš web se v ní neuplatní."**

Pro laika srozumitelné, ale „vůbec objevit“ / „neuplatní“ je moc absolutní. V textu níž už správně připouštíte:
> **„Ne jako zdroj — nanejvýš jako znalost o značce“**

**Problém:** metadata jsou tvrdší než tělo.  
**Doporučení:** sjednotit s opatrnější formulací:
- „…rozhoduje o tom, jestli se váš web může objevit jako citovaný zdroj.“
- „…váš web se v ní obvykle neuplatní jako citace.“

---

### 4. FAQ je stále o chlup jistější než tělo
> **„Když odpověď obsahuje citace na konkrétní stránky, proběhlo vyhledávání.“**

Druhá věta už to zjemňuje:
> **„Když je bez odkazů, model nejspíš odpovídal z natrénované paměti.“**

Ale první půlka je pořád téměř kategorická. Když už máte sekci o třech vrstvách, FAQ by mělo být stejně disciplinované.

**Doporučení:**  
„Když odpověď obsahuje citace na konkrétní stránky, je to silný signál, že se pracovalo s živě dohledanými zdroji.“

---

### 5. „Rozhodnutí dělá model“ je pořád lehce antropomorfní / mechanistické
> **„Rozhodnutí dělá model podle povahy dotazu.“**  
> **„Který režim se spustí, si model rozhoduje sám.“**

Není to fatální, ale po prvním auditu bych to ještě srovnal. Pro laika to je srozumitelné, jen to zní jistěji, než potřebujete.

**Doporučení:**  
- „V praxi to zvenčí vypadá, že…“  
- „O tom, zda se použije vyhledávání, rozhoduje systém na straně služby…“

---

### 6. „Načte pár stránek“ vrací nežádoucí konkrétnost
> **„…s vyhledáváním načte pár stránek a ty ocituje.“**

Uprostřed článku už to máte opravené lépe:
> **„Pracuje jen s omezeným výběrem nalezených výsledků…“**

**Problém:** závěr znovu sklouzává ke konkrétnějšímu obrazu, než máte podložené.  
**Doporučení:** v závěru zopakovat stejnou formulaci jako v těle:
- „…pracuje s omezeným výběrem zdrojů a některé z nich zobrazí jako citace.“

---

### 7. „Nemít zablokované vyhledávací roboty OpenAI“ je praktické, ale bez opory v článku působí tvrdě
> **„Nemít zablokované vyhledávací roboty OpenAI a být dostupný i pro běžné vyhledávače“**

To je už akční doporučení, ale článek předtím opakovaně říká, že routing a sourcing nejsou plně veřejné. Tohle pak vyznívá jistěji než zbytek.

**Doporučení:** přidat „typicky“ nebo „jako minimum dává smysl“:
- „Jako minimum dává smysl neblokovat roboty OpenAI a být dostupný běžným vyhledávačům.“

---

## DROBNOSTI

### 8. Duplicitní sdělení je už na hraně
Opakuje se několikrát totéž:
- **úvodní tučný odstavec**
- **CompareTable**
- **sekce Tři vrstvy**
- **diagnostika**
- **závěr**

Obsahově to drží, ale po vložení nových sekcí je tam už lehká redundance.

**Kde škrtat:**  
Nejvíc přebývá věta:
> **„Pro majitele webu je to zásadní rozdíl.“**  
a následné
> **„U odpovědi z paměti se o citaci vůbec nehraje…“**

To už čtenář ví z úvodu i tabulky.

---

### 9. Pro začátečníka je článek pořád použitelný, ale terminologie už je na limitu
Silné plusy:
- disclaimer je srozumitelný
- tři vrstvy jsou užitečné
- diagnostika je praktická

Slabší místo:
> **„routing“, „indexace“, „cutoff“, „natrénovaná paměť“**

Není to nesrozumitelné, ale začátečnický text by snesl o trochu méně jargonů nebo jednu mikro-vysvětlivku navíc.

---

### 10. Stats jsou v zásadě konzistentní, ale „2 způsoby“ je po disclaimerech pořád ostré
> **label: "způsoby, jak se odpověď navenek chová"**

To je dobré.  
Naopak:
> **value: "0" / "možností, jak si jako provozovatel webu vyhledávání přímo vynutit"**

To je prakticky asi v pořádku, ale „0“ je hodně absolutní. Když už jinde píšete „přímo vynutit nemůže“, dalo by se to nechat. Jen je to formulace na hraně.

---

## Verdikt k 5 otázkám

1. **Zbyla nepřiměřená jistota?**  
   **Ano, hlavně v titulku a závěru.** Tělo je už výrazně lepší.

2. **Nepřehnal to autor opačně?**  
   **Ne zásadně.** Článek je stále užitečný. Jen je lehce přetížený opatrnostmi a opakováním.

3. **Konzistence answer / stats / FAQ / tělo?**  
   **Částečně.** Metadata a FAQ jsou místy tvrdší než tělo.

4. **Drží celek po vložení nových sekcí?**  
   **Ano, ale s drobnými duplicitami.** Nejvíc přebývá opakování hlavní teze.

5. **Je to pořád článek pro začátečníky?**  
   **Ano, těsně.** Praktická diagnostika ho drží při zemi. Bez ní by už byl moc meta.

## Celkově
**Velký posun správným směrem.**  
Na finální dopracování bych řešil hlavně **titulek, závěr a dvě tři příliš jisté věty v FAQ/metadata**. Pak už to bude disciplinované i pro audit.