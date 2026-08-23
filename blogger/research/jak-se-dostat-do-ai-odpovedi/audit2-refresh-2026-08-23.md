Verdikt: **připraveno k publikaci**.

Po druhé kontrole v dodaném diffu **nevidím žádnou reálnou BLOCKING ani MAJOR vadu**. Oprava definice odstranila problém z prvního auditu a článek po refreshi drží funkci rozcestníku i hlavní tezi.

Níže jen drobnosti k uvážení.

---

## Shrnutí kontroly podle zadaných bodů

### 1) Definiční sekce
**Výsledek:** je **srozumitelná a užitečná**, není příliš vágní.

Proč:
- jasně odděluje dvě běžně směšované věci:
  > „**Vyhledávač s AI vrstvou.** …“  
  > „**Asistent, který umí hledat na webu.** …“
- současně drží oporu v tom, co článek skutečně řeší:
  > „**v obou případech se odpověď skládá z cizích stránek a vy chcete být jednou z nich.**“
- obsahuje správnou výhradu:
  > „**Není to oficiální kategorie od výrobců, ale zavedené označení.**“

To přesně plní researchové omezení „netvrdit, že jde o oficiální termín“.

---

### 2) Jednotný závěr článku po refreshi
**Výsledek:** ano, článek dál drží linii **„pět kanálů + doplňková poznámka o dalších plochách“**.

Opory v textu:
- hlavní kostra:
  > „## Proč zrovna těchhle pět“  
  > „**Pětice není vyčerpávající seznam, ale kanály, u kterých má česká firma reálnou šanci se ověřitelně objevit…**“
- doplňkové plochy jsou výslovně odsunuty mimo hlavní pětici:
  > „## Plochy, které tenhle rozcestník neřeší“  
  > „**Do pětice je nedávám, protože jejich dostupnost pro Česko doložit neumím**“
- správná výhrada proti přestřelení:
  > „**Nedoloženo není totéž co nedostupné.**“

Nevzniká tedy rozpor s OG ani se základní stavbou článku.

---

### 3) Nárůst odkazů vs. funkce sekcí
**Výsledek:** **funkce rozcestníku poškozena není**. Sekce nejsou redukované na holý seznam odkazů.

Každá hlavní sekce pořád má:
- stručnou definici kanálu,
- vlastní vysvětlení,
- „Co zkontrolovat hned“,
- až potom odkazy dál.

Typicky např. AI Mode:
> „**AI Mode je konverzační režim vyhledávání…**“  
> „**Praktický důsledek: nestačí pokrýt hlavní dotaz…**“  
> „**Co zkontrolovat hned…**“  
> teprve pak série odkazů.

Ano, některé odstavce jsou už na horní hraně „link-heavy“, ale pořád ještě plní informační funkci samy o sobě.

---

### 4) Description po zkrácení
**Výsledek:** **je přesná vůči obsahu**.

Citace:
> `description: "AI vyhledávače v Česku: AI Overviews, AI Mode, ChatGPT, Perplexity a Seznam Asistent. Co u kterého rozhoduje, kde začít a co je jen pozorování."`

Sedí, protože:
- článek skutečně řeší těchto pět kanálů,
- přidává definici termínu „AI vyhledávače“,
- vysvětluje „co u kterého rozhoduje“,
- obsahuje část „kde začít podle typu firmy“,
- průběžně rozlišuje doložené vs. pozorované.

Formulace „AI vyhledávače v Česku“ je zde přijatelná, protože hned v těle je dovysvětleno, že nejde o oficiální kategorii.

---

## Nálezy

### MINOR 1 — lehké napětí mezi „Copilot pokrývá práce u ChatGPT“ a novou definicí
**Citace vadné pasáže:**
> „**Microsoft Copilot stojí na Bingu, takže ho z velké části pokrývá práce popsaná u ChatGPT.**“

**Proč je to drobně problematické:**
Po přidané definiční sekci je text přesnější a systematičtější. Tato věta je věcně plausibilní, ale zkratka „Copilot = pokrývá ChatGPT“ může působit příliš hrubě, protože nově článek sám zdůrazňuje, že jednotlivé systémy zdroje vybírají různě.

Není to faktická chyba, spíš stylisticko-významové zploštění.

**Návrh úpravy:**
Zjemnit formulaci, např.:
- „**Microsoft Copilot je silně navázaný na Bing, takže velká část technického základu je podobná tomu, co řešíte u ChatGPT — zejména dohledatelnost mimo Google.**“

Tím zůstane smysl, ale bez dojmu úplného překrytí.

---

### MINOR 2 — sekce AI Mode je už velmi hustá na odkazy
**Citace:**
> „**Detaily jsou v článku o [Google AI Mode](/blog/google-ai-mode/) a rozdíly proti panelu v [AI Mode vs. AI Overviews](/blog/ai-mode-vs-ai-overviews/). Kde se AI Mode v Česku zapíná, má [AI Mode v Googlu česky](/blog/ai-mode-cesky/), praktický postup [jak se zobrazit v AI Mode](/blog/jak-se-zobrazit-v-ai-mode/) a rozpad dotazu na podotázky [query fan-out](/blog/query-fan-out-ai-mode/). Proč se u téhle plochy nedá spolehlivě změřit podíl, rozebírá [limity měření](/blog/mereni-ai-mode-limity/).**“

**Proč je to drobně problematické:**
Není to ještě „jen seznam odkazů“, ale je to nejblíž této hraně z celého článku. Čtenář dostane hodně linků v jednom bloku a orientace trochu trpí.

**Návrh úpravy:**
Jen mikrorestrukturalizace do 2 vět nebo krátkého výčtu:
- základní rozcestník nechat v první větě,
- specializované follow-up články přesunout do druhé věty typu „K tématu dál: …“.

Např.:
- „**Detaily jsou v článku o Google AI Mode a rozdíly proti panelu v AI Mode vs. AI Overviews. K praktickým detailům dál: dostupnost v Česku, postup pro zobrazení, query fan-out a limity měření.**“

Pokud ale chcete maximalizovat interní prolinkování, dá se současný stav ponechat.

---

### MINOR 3 — description používá lidový termín bez stejné výhrady jako tělo
**Citace:**
> `description: "AI vyhledávače v Česku: AI Overviews, AI Mode, ChatGPT, Perplexity a Seznam Asistent. …"`

**Proč je to drobně problematické:**
V těle správně zazní:
> „**Není to oficiální kategorie od výrobců, ale zavedené označení.**“

Description tuto výhradu samozřejmě nést nemusí, ale protože jde o metadata, někdo může zkrácenou formulaci číst jako kategorické tvrzení. Není to chyba, jen mírné významové zploštění.

**Návrh úpravy:**
Pouze pokud chcete být opatrnější:
- „**AI odpovědi a AI vyhledávání v Česku: AI Overviews, AI Mode, ChatGPT, Perplexity a Seznam Asistent…**“

Současná verze je ale stále publikovatelná.

---

## Co jsem nenašel

- **Žádné tvrzení bez opory** v nově přidané definiční části.
- **Žádný vnitřní rozpor** mezi „pěti kanály“ a novou sekcí o dalších plochách.
- **Žádné tvrzení**, že Ask Maps nebo split-screen v Chromu v Česku nejsou.
- **Žádný posun** k zakázané srovnávací tabulce „kdo cituje jak“.
- **Žádnou zjevně rozbitou MDX syntaxi** v dodaném diffu.

---

## Finální verdikt

**Publikovat.**

Pokud chcete text ještě lehce uhladit, doporučil bych maximálně:
1. zjemnit větu o Copilotu,
2. trochu pročistit nejhustší odstavce s odkazy, hlavně u AI Mode.

Ale to už jsou **jen MINOR kosmetické úpravy**, ne překážka publikace.