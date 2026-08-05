Níže jen to, co je špatně v měněných místech nebo co po opravách zůstalo nedotažené.

---

## 1. Zbytky staré logiky o AI přehledech

### 1.1 Frontmatter `answer` pořád zní obecněji, než unesou data
**Místo:**
`answer`
> „U dotazů s lokálním záměrem dominuje mapový panel, u dotazů, které k poptávce přidávají otázku, se naopak výrazně častěji objevuje AI přehled.“

**Problém:**
Je to blízko správně, ale chybí limity a působí to jako obecné pravidlo pro lokální vyhledávání, ne jako závěr z jedné omezené studie. Frontmatter má stejnou váhu jako tělo a tady se opatrnost ztratila.

**Dopad:**
Při sdílení / snippetizaci se z článku ven dostává tvrdší tvrzení než v těle.

**Oprava:**
Zkrať a vlož podmínku:
> „V omezeném americkém měření z května 2025 dominoval u čistě lokálních dotazů mapový panel, zatímco u hybridních dotazů se častěji objevoval AI přehled.“

---

### 1.2 Frontmatter `description` pořád maskuje limity AI části
**Místo:**
`description`
> „Jak v ČR optimalizovat Google Business Profile a Seznam Firmy, na čem stojí lokální viditelnost a co s ní dělá AI éra. Prioritizace podle typu firmy.“

**Problém:**
AI část je formulovaná široce a bez omezení, přestože samotný refresh stál na tom, že předchozí zobecnění bylo špatně. Tady zůstalo podobné zobecnění v meta vrstvě.

**Oprava:**
> „… a jak do ní promlouvají AI přehledy podle omezených dostupných dat.“

---

### 1.3 Opravný Insight box má pořád nedoložený doskok
**Místo:**
Insight box v sekci **Local SEO v AI éře**
> „U dotazu, který míchá informaci s poptávkou, je to naopak.“

**Problém:**
Samotné „naopak“ je bezprostředně srozumitelné jen tehdy, když si čtenář domyslí, že jde o vyšší výskyt AIO než u informačních / lokálních. V kontextu předchozí chyby by bylo lepší říct přesně *v čem* je to naopak. Takhle to pořád trochu spoléhá na intuici místo přesné formulace.

**Oprava:**
> „U hybridního dotazu, který kombinuje poptávku s otázkou, se v tomto měření AI přehled objevoval výrazně častěji.“

---

## 2. Nová přestřelení po opravě

### 2.1 `faq` – poslední věta jde pořád nad data
**Místo:**
FAQ „Jak Local SEO funguje s AI Overviews a ChatGPT?“
> „U hybridních dává navíc smysl, aby stránka jasně odpovídala na související otázku — právě tam se AI přehled objevuje nejčastěji.“

**Problém:**
První půlka je doporučení, druhá půlka je ještě v mezích prevalence. Ale spojení obou vět vytváří kauzální dojem: že odpověď na stránce souvisí s objevením AI přehledu. To studie netestovala.

**Přesnější verze:**
> „U hybridních dává smysl, aby stránka jasně odpovídala na související otázku. V tomto typu dotazu se totiž AI přehled v měření objevoval nejčastěji.“

---

### 2.2 V těle je stejný problém, jen měkčeji
**Místo:**
Sekce **Co to znamená pro vás**
> „Dává proto smysl mít na stránce i stručnou odpověď na související otázku, ne jen kontakt a otevírací dobu.“

**Problém:**
Jako doporučení je to přijatelné, ale slovo „proto“ dělá z prevalence features argument pro on-page postup. To je logický skok. Chybí mezikrok nebo zdroj.

**Oprava:**
> „Vedle kontaktu a otevírací doby proto stojí za zvážení i stručná odpověď na související otázku. Samotná studie ale měřila jen výskyt AI přehledu, ne to, které typy stránek se do něj propisují.“

---

### 2.3 `answer` používá „výrazně častěji“ bez ukotvení
**Místo:**
`answer`
> „… se naopak výrazně častěji objevuje AI přehled.“

**Problém:**
Bez čísla nebo limitu je to v metadatech moc hladké. Uživatel nepozná, že jde o data z USA / 2025 / šesti oborů.

**Oprava:**
Buď doplnit omezení, nebo AI část z `answer` úplně vypustit.

---

## 3. Vnitřní rozpory po zásazích

### 3.1 NAP: „Google rozpozná jako matoucí signál“ vs. jinde „drobné formátovací rozdíly nejsou kritické“
**Místo A:**
Sekce **NAP konzistence**
> „Drobné rozdíly Google rozpozná jako matoucí signál:“

**Místo B:**
`faq` + `howto.steps[1]`
> „Ne každý formátovací rozdíl je kritický…“
> „drobné formátovací rozdíly … nejsou kritické…“

**Problém:**
Tohle je přímý významový konflikt vzniklý po opravě. V těle říkáš, že drobné rozdíly jsou matoucí signál; ve frontmatteru, že samy o sobě kritické nejsou. Druhá verze je opatrnější a lepší, ale v těle zůstala starší tvrdší.

**Oprava:**
Přepiš větu v těle třeba na:
> „Drobné rozdíly samy o sobě obvykle nebývají kritické, ale při kumulaci nebo v kombinaci se starými údaji začínají být matoucí.“

---

### 3.2 `howto` vs Stepper u lokalizovaného obsahu: doorway nuance je jen ve frontmatteru
**Místo A:**
`howto.steps[3]`
> „… jen tehdy, pokud pro každé město umíte nabídnout skutečně odlišný a lokálně relevantní obsah … Nevyrábějte desítky téměř identických … doorway pages …“

**Místo B:**
Stepper v těle
> „Pro service-area firmu: stránky 'služba + město' pro 3–5 hlavních cílových lokalit.“

**Problém:**
Není to čistý faktický rozpor, ale je to nedokončená oprava mezi frontmatterem a tělem. Frontmatter přidal důležitou podmínku kvality a riziko doorway pages, Stepper to zase zjednodušuje na recept.

**Oprava:**
Dopsat do Stepperu podmínku:
> „… pro 3–5 hlavních cílových lokalit, ale jen pokud pro každou umíte dodat skutečně odlišný a lokálně relevantní obsah.“

---

## 4. Viditelnost limitů studie

### 4.1 V těle jsou limity viditelné dost
**Místo:**
Limit box v AI sekci
> „Studie je z 12. května 2025… americká data ze tří měst a šesti oborů… měří výskyt funkce, ne dopad na návštěvnost…“

**Hodnocení:**
V těle ano, tady jsou limity viditelné.

---

### 4.2 Ve frontmatteru viditelné nejsou dost
**Místo:**
`answer`, `description`, `faq`

**Problém:**
- `description` limity neobsahuje vůbec.
- `answer` limity neobsahuje vůbec.
- `faq` limity obsahuje jen částečně: říká USA a že pro Česko nejsou data, ale **neříká, že jde o výskyt, ne dopad**.

**Oprava FAQ:**
Doplnit jednu větu:
> „Studie měřila výskyt funkce v SERPu, ne její dopad na návštěvnost nebo konverze.“

---

## 5. Věcné chyby, které první audit nepojmenoval nebo tu po opravách zůstaly

### 5.1 Záměna „AI Overviews“ a „AI přehled“ vs. „ChatGPT“ v jednom FAQ
**Místo:**
FAQ
> „Jak Local SEO funguje s AI Overviews a ChatGPT?“

**Problém:**
Odpověď je téměř celá o Google AI Overviews / local panelu z Whitesparku. ChatGPT je v otázce, ale v odpovědi pro něj není samostatná opora ani vysvětlení, že Whitespark se ChatGPT netýká. To je věcné smíchání platforem.

**Oprava:**
Buď změnit otázku:
> „Jak Local SEO funguje s AI Overviews?“
nebo v odpovědi jasně oddělit:
> „Níže uvedená čísla se týkají Google AI Overviews, ne ChatGPT.“

---

### 5.2 „AI Mode“ sekce mluví o AI Mode, ale zdroj je popsán jen jako vlastní článek o měření
**Místo:**
Sekce **AI Mode a proč jeden test nic neznamená**
> „V měření, které rozebíráme v článku Stejný dotaz, jiná odpověď…“

**Problém:**
V researchi bylo jasně řečeno, že jde o měření volatility od SE Ranking a že je postavené právě na lokálních dotazech. Tady je to schované za interní článek a není řečeno, že nejde o vaše primární měření. To není vyloženě lež, ale je to informačně kluzké.

**Oprava:**
> „V měření volatility od SE Ranking, které rozebíráme v článku…“

---

### 5.3 „U lokálních dotazů je navíc doložená vysoká nestabilita odpovědí“ je moc široké
**Místo:**
Tatáž sekce
> „U lokálních dotazů je navíc doložená vysoká nestabilita odpovědí.“

**Problém:**
Pak následuje konkrétní srovnání dvou tříd dotazů. Formulace ale zní obecně pro „lokální dotazy“ jako celek. Přesnější by bylo omezit to na měřené prostředí / formát.

**Oprava:**
> „V citovaném měření AI odpovědí na lokální dotazy byla vidět vysoká nestabilita mezi opakováními…“

---

### 5.4 „Místní panel se chová obráceně“ je zkratka, která může mást
**Místo:**
FAQ
> „Místní panel se chová obráceně: u lokálních dotazů 93 %, u hybridních 17 %.“

**Problém:**
Vůči hybridním ano, ale vůči informačním je to 6 %. „Obráceně“ funguje jako zkratka, ale může čtenáře vést k dojmu dokonalé inverze mezi sloupci. Data jsou asymetrická, ne zrcadlová.

**Oprava:**
> „Místní panel byl naopak nejčastější u čistě lokálních dotazů a výrazně méně častý u informačních a hybridních.“

---

## 6. Co bych opravil prioritně

1. **Srovnat frontmatter s tělem u AI limitů**  
   `description`, `answer`, FAQ doplnit, že jde o omezené americké měření z 2025 a že měří výskyt, ne dopad.

2. **Opravit rozpor u NAP**  
   V těle zjemnit větu „Drobné rozdíly Google rozpozná jako matoucí signál“.

3. **Oddělit Google AIO od ChatGPT v FAQ**  
   Teď jsou v jedné otázce, ale odpověď stojí jen na Google datech.

4. **Dopsat do Stepperu podmínku kvality u `služba + město` stránek**  
   Jinak je oprava doorway nuance jen napůl propsaná.

5. **Zpřesnit jazyk kolem doporučení pro obsah**  
   Omezit kauzální spojky typu „proto“, pokud pod nimi není zdroj o dopadu.

Pokud chceš, udělám ještě třetí průchod jen nad **frontmatterem řádek po řádku** a vrátím ti to jako konkrétní diff návrhy.