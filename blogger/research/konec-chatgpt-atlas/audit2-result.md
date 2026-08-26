## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po strukturální stránce použitelný: má jasný slug, dobrý SEO titulek, přiměřenou meta description, konkrétní CTA na audit a relevantní interní odkazy. Stále ale obsahuje několik věcně rizikových a příliš absolutních tvrzení, která jsou pro článek postavený na aktuální události zásadní.

---

## Nálezy

### [BLOCKER] Klíčové tvrzení o oznámení a vypnutí Atlasu není dostatečně doložené

**Citace:**

> „OpenAI oznámil 9. 7. 2026 konec samostatného prohlížeče ChatGPT Atlas a 9. 8. 2026 ho vypnul…“

**Problém:**  
Celý článek stojí na přesném tvrzení, že OpenAI něco oznámila a následně vypnula. Ve zdrojích je ale uveden hlavně článek TechCrunch a pak neurčitě „podle dostupného zpravodajství … Notebookcheck, MacRumors“ bez přímých odkazů. Pokud neexistuje primární zdroj OpenAI, formulace „OpenAI oznámil/oznámila“ je příliš silná.

**Návrh opravy:**

- Pokud existuje primární zdroj, doplnit přesný odkaz na oznámení OpenAI / help centrum / changelog / status.
- Pokud primární zdroj není, změnit formulaci například na:

> „Podle TechCrunch OpenAI 9. 7. 2026 oznámila konec samostatného prohlížeče ChatGPT Atlas. Podle navazujícího zpravodajství přestal fungovat 9. 8. 2026.“

A do zdrojů doplnit konkrétní odkazy na Notebookcheck a MacRumors, ne jen jejich názvy.

---

### [BLOCKER] „Čím ho OpenAI nahradil“ obsahuje konkrétní produktové funkce bez zdroje

**Citace:**

> „Čte kontext otevřené stránky, odpovídá na otázky o ní, shrnuje“

> „Víc karet, stahování souborů, přihlašování k účtům“

> „Zvládne je i ve vzdáleném prohlížeči v cloudu“

**Problém:**  
Tabulka popisuje konkrétní schopnosti rozšíření a desktopové aplikace jako fakt. U takto aktuálních produktových funkcí je nutné mít přesné zdroje, ideálně oficiální dokumentaci OpenAI. V textu je sice později uvedeno „podle dostupných popisů“, ale tabulka sama působí jako ověřený seznam funkcí.

**Návrh opravy:**

Za tabulku doplnit větu se zdrojem:

> „Popis funkcí vychází z dokumentace OpenAI a dostupných popisů stavu k 26. 8. 2026.“

A do zdrojů přidat konkrétní odkazy. Pokud oficiální dokumentace není, upravit tabulku opatrněji:

> „Podle dostupných popisů může číst kontext otevřené stránky…“

> „Podle dostupných informací má režim podporovat víc karet…“

---

### [WARNING] Krátká odpověď nezačíná definicí a obsahuje příliš absolutní závěr

**Citace z frontmatteru:**

> `answer: "OpenAI oznámil 9. 7. 2026 konec samostatného prohlížeče ChatGPT Atlas… Pro weby se tím na měření nic nemění."`

**Problém:**  
Krátká odpověď má 40–60 slov, což je v pořádku, ale nezačíná definicí. Začíná událostí. Navíc věta „Pro weby se tím na měření nic nemění“ je moc absolutní.

**Návrh opravy:**

Použít definici a měkčí formulaci:

> `answer: "ChatGPT Atlas byl samostatný AI prohlížeč OpenAI, který podle oznámení z 9. 7. 2026 skončil 9. 8. 2026 po necelých deseti měsících provozu. Jeho agentní funkce se přesunuly do rozšíření ChatGPT pro Chrome a desktopové aplikace; v běžné analytice webů nejspíš nezanechá samostatný zlom."`

---

### [WARNING] Tvrzení o měření je příliš kategorické

**Citace:**

> „Pro weby se tím na měření nic nemění.“

> „V analytice nikdy nebyl samostatně vidět, takže jeho vypnutí v datech nepoznáte.“

> „Nezmizel řádek, protože žádný nebyl.“

**Problém:**  
Tohle je příliš absolutní. I pokud se Atlas hlásil jako Chrome, může se měnit referral, chování relací, konverzní cesta nebo množství návštěv vyvolaných AI nástroji. „Nikdy“ a „nepoznáte“ jsou silná tvrzení, která by vyžadovala robustní testy.

**Návrh opravy:**

Změnit na opatrnější, ale stále užitečnou formulaci:

> „V běžné webové analytice pravděpodobně neuvidíte samostatný řádek pro Atlas, protože se podle dostupných testů hlásil jako Chrome. Jeho vypnutí proto nejspíš nepoznáte jako čistý zlom v jednom zdroji návštěvnosti.“

A ve shrnutí upravit:

> „Pro většinu webů se v běžné analytice pravděpodobně nic zásadního nemění.“

---

### [WARNING] Robots.txt a „řídicí token“ jsou v těle článku stále formulované moc obecně

**Citace:**

> „Návštěva vyvolaná uživatelem v agentním režimu pod něj nespadá a vlastní řídicí token tyhle nástroje nemají.“

**Problém:**  
V FAQ je datum „k 26. 8. 2026“, ale v hlavním textu chybí. U aktuálního technického tvrzení je to důležité. Navíc „řídicí token“ není běžnému čtenáři jasný termín.

**Návrh opravy:**

Upravit na:

> „K 26. 8. 2026 neměly Atlas ani uvedení nástupci veřejně popsaný samostatný identifikátor pro pravidla v robots.txt. Návštěva vyvolaná uživatelem v agentním režimu se proto v praxi nechová stejně jako běžný vyhledávací robot.“

Tím se tvrzení časově ukotví a nebude působit jako trvalé pravidlo.

---

### [WARNING] Zdrojování Cometu je slabé

**Citace:**

> „Comet od Perplexity podle dostupných informací funguje dál a od října 2025 je otevřený i bez původního placeného omezení.“

**Problém:**  
Ve zdrojích je pro Comet uvedena Wikipedia. Pro aktuální produktovou dostupnost a změnu placeného omezení je Wikipedia slabý zdroj. Tvrzení „od října 2025“ je konkrétní a mělo by být doložené primárním oznámením Perplexity nebo spolehlivým zpravodajstvím.

**Návrh opravy:**

Doplnit konkrétní zdroj, ideálně Perplexity blog / oznámení. Pokud zdroj není, změnit formulaci:

> „Comet od Perplexity podle dostupných informací funguje dál. Jeho dostupnost a cenové podmínky se ale měnily, proto je vhodné ověřit aktuální stav přímo u Perplexity.“

---

### [WARNING] „Edge s Copilotem“ je příliš volně zařazený jako konkurence AI prohlížečů

**Citace:**

> „Do stejné mezery míří i Edge s Copilotem.“

**Problém:**  
Edge s Copilotem není nutně totéž jako samostatný agentní AI prohlížeč. Bez vysvětlení to může být zavádějící.

**Návrh opravy:**

Upřesnit rozdíl:

> „Do podobného směru míří také Edge s Copilotem, i když nejde o samostatný AI prohlížeč stejného typu jako Atlas nebo Comet, ale o prohlížeč s integrovanými AI funkcemi.“

---

### [WARNING] Interpretace „agentní funkce jsou vlastnost, ne produkt“ je příliš definitivní

**Citace:**

> „Agentní funkce se ukázaly jako vlastnost, ne produkt.“

**Problém:**  
Je to dobrá pointa, ale z jednoho ukončeného produktu nelze tak obecně vyvozovat pravidlo pro celou kategorii. Formulace působí jako definitivní závěr trhu.

**Návrh opravy:**

Zjemnit:

> „U Atlasu se ukázalo, že agentní funkce mohou dávat větší smysl jako součást existujícího prohlížeče nebo aplikace než jako samostatný produkt.“

---

### [WARNING] Některé věty působí zbytečně sarkasticky / publicisticky

**Citace:**

> „Mění se tedy jen jméno na dveřích, ne to, co za nimi je.“

> „Rady ‚připravte web na Atlas‘ zestárly rychleji, než stačily zabrat.“

**Problém:**  
Tón je čtivý, ale druhá věta je dost shazující. Brand voice má vysvětlovat, ne působit jako výsměch předchozím radám.

**Návrh opravy:**

> „Mění se konkrétní produkt, ne základní chování agentních nástrojů na webu.“

A:

> „Rady vázané výhradně na Atlas proto rychle ztratily praktickou hodnotu.“

---

### [TIP] Gramaticky a stylově sjednotit „OpenAI oznámil“ vs. „OpenAI oznámila“

**Citace:**

> „OpenAI oznámil…“

> „Přesně tohle OpenAI udělal.“

**Problém:**  
OpenAI je organizace / společnost, v češtině působí přirozeněji ženský rod: „OpenAI oznámila“, „OpenAI udělala“. Hlavně je potřeba být konzistentní.

**Návrh opravy:**

Používat v celém textu:

> „OpenAI oznámila…“

> „OpenAI udělala…“

Případně neosobně:

> „Bylo oznámeno…“

---

### [TIP] Prvních 100 slov těla jsou téměř dobrá, ale první věta by měla definovat Atlas

**Citace:**

> „OpenAI oznámil 9. 7. 2026 konec samostatného prohlížeče ChatGPT Atlas…“

**Problém:**  
Pro citovatelnost v AI odpovědích je lepší, když první věta vysvětlí, co Atlas byl. Teď čtenář dostane událost, ale definice je jen nepřímo v sousloví „samostatného prohlížeče“.

**Návrh opravy první věty v těle:**

> „ChatGPT Atlas byl samostatný AI prohlížeč OpenAI. Podle oznámení z 9. 7. 2026 skončil a 9. 8. 2026 přestal fungovat, necelých deset měsíců po spuštění.“

---

### [TIP] V kroku o JavaScriptu je tvrzení moc obecné

**Citace:**

> „Agentní nástroje i roboti čtou stránku strojově. Co je dostupné jen po spuštění skriptu, nemusí být vidět.“

**Problém:**  
Někteří vyhledávací roboti i agentní nástroje umí JavaScript renderovat. Pointa je správná, ale formulace by měla mluvit o spolehlivosti, ne o absolutní neviditelnosti.

**Návrh opravy:**

> „Agentní nástroje i vyhledávací roboti mohou stránku číst jinak než běžný uživatel. Obsah dostupný až po spuštění JavaScriptu proto může být hůř dostupný nebo nespolehlivě čitelný.“

---

### [TIP] CTA je konkrétní a v souladu se zadáním

**Citace:**

> „AI SEO audit za 3 600 Kč…“

> „návodem zdarma“

**Hodnocení:**  
CTA je dobré: vede na konkrétní produkt a neobsahuje přehnaný slib. Pokud chcete víc využít komerční nabídku webu, lze doplnit ještě odkaz na Pack za 1 490 Kč, ale není to nutné pro publikaci.

Možná úprava:

> „Kdo chce postup projít sám, může začít návodem zdarma nebo sáhnout po AI SEO Wireframe Packu za 1 490 Kč.“

---

## Krátké potvrzení toho, co je v pořádku

- SEO title má dobrou délku a klíčové slovo je na začátku.
- Meta description je v povoleném rozsahu a srozumitelně shrnuje článek.
- Slug `konec-chatgpt-atlas` je smysluplný.
- FAQ otázky jsou reálné a většinou sebestačné.
- Interní odkazy jsou relevantní.
- CTA není generické a obsahuje konkrétní cenu auditu.