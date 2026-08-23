Audit diffu jsem prošel jen proti dodanému podkladu. Verdikt: **většinově v pořádku**, refresh plní hlavní zadání, ale vidím **2 reálné vady**: 1× **BLOCKING**, 1× **MINOR**. **MAJOR** nenacházím.

---

## Shrnutí

Co je dobře:
- doplněn srpnový cluster odkazů,
- přidán definiční odstavec k „AI vyhledávači“ a odkaz na heslo,
- nová sekce o dalších plochách **nepovyšuje** je na hlavní kanály,
- text **netvrdí**, že Ask Maps nebo split view v Chromu v ČR nejsou.

Co vadí:
1. **BLOCKING**: v nové definiční sekci je bez opory přidané zařazení konkrétních produktů („Claude nebo Gemini v režimu s vyhledáváním“), které podklad nepožaduje ani nedokládá.  
2. **MINOR**: jeden nově vložený odkaz míří mimo doložený cluster a působí jako nekonzistentní rozšíření (`/blog/ai-mode-vedle-sebe-v-chrome/` není v podkladu mezi ověřenými cíli).

---

# Nálezy

## 1. BLOCKING — bez opory rozšířená klasifikace o konkrétní nástroje mimo podklad

### Vadná pasáž
> „- **Asistent, který umí hledat na webu.** Chatbot, jehož odpověď se opírá o živé vyhledávání — ChatGPT s webovým vyhledáváním, **Perplexity, Claude nebo Gemini v režimu s vyhledáváním**.“

### Problém
Podklad říká jen:
- že termín „AI vyhledávač“ je lidové označení, ne oficiální kategorie,
- že rozcestník je přirozená cílová stránka, protože vyjmenovává nástroje, které pod něj spadají,
- a že se má přidat **definiční odstavec + odkaz na heslo**.

Podklad **nikde neopírá** nově vytvořené dělení na dvě skupiny o konkrétní seznam produktů, natož o „Claude nebo Gemini v režimu s vyhledáváním“. To je navíc zbytečné rozšíření nad rámec článku, který má držet pět hlavních kanálů.

To neberu jako čistě stylistiku, ale jako **posun do nové taxonomie s konkrétními exempláři bez opory v podkladu**. U auditovaného refreshu je to problém.

### Proč je to důležité
Výslovně jsi chtěl ověřit, zda je sekce věcně správná a zda nejde o falešnou dichotomii. Samotné rozlišení je **obhajitelné jako pracovní zkratka**, ale jakmile se do něj doplní konkrétní produkty mimo scope podkladu, článek začíná tvrdit víc, než má doloženo.

### Návrh opravy
Zachovat definici, ale **odstranit sporné exempláře** a nechat ji obecněji:

> „- **Asistent, který umí hledat na webu.** Chatbot, jehož odpověď se opírá o živé vyhledávání — například ChatGPT s webovým vyhledáváním nebo Perplexity.“

Ještě bezpečnější varianta:
> „Prakticky se pod tím lidově myslí jak vyhledávače s AI vrstvou, tak asistenti, kteří si při odpovědi dohledávají webové zdroje.“

Tím zůstane význam, ale zmizí nepodložené rozšiřování.

---

## 2. MINOR — jeden nový odkaz není opřený o podklad a rozbíjí konzistenci clusteru

### Vadná pasáž
> „| [Rozdělené zobrazení v AI Mode v Chromu](/blog/**ai-mode-vedle-sebe-v-chrome**/) | oznámení mluví o USA a desktopu |“

### Problém
Podklad v seznamu chybějícího srpnového clusteru uvádí:
- `ai-mode-cesky`
- `jak-se-zobrazit-v-ai-mode`
- `query-fan-out-ai-mode`
- `mereni-ai-mode-limity`
- `typy-dotazu-v-ai-mode`
- `delsi-dotazy-v-ai-mode`
- `kdyz-si-ai-mode-neni-jisty`
- `jak-casto-se-zobrazuje-ai-prehled`
- `ask-maps-odpovedi-v-mapach`
- `propojene-aplikace-v-ai-mode`
- `jak-overit-dostupnost-ai-funkce`
- `podil-seznamu-v-ceskem-vyhledavani`
- `seznam-asistent-sellma`

**Slug `ai-mode-vedle-sebe-v-chrome` v podkladu není.**  
Sekce o „třech dalších plochách“ je jako téma v podkladu ano, ale tenhle konkrétní cíl ověřený nemáme.

### Dopad
Spíš redakční nekonzistence než faktická chyba v obsahu. Ale u auditu „pouze diff a jeho soulad s podkladem“ je to validní drobná vada: diff odkazuje na cíl, který podklad nedokládá.

### Návrh opravy
- Buď odkaz odstranit a nechat prostý text bez URL,
- nebo nahradit cílem, který je skutečně v podkladu, pokud existuje pod jiným slugem.

Např.:
> „Rozdělené zobrazení v AI Mode v Chromu | oznámení mluví o USA a desktopu“

---

# Ověření speciálních bodů ze zadání

## A) Je definiční sekce věcně správná?
**Z větší části ano, s výhradou výše.**

### Co je v pořádku
> „Není to oficiální kategorie od výrobců, ale zavedené označení.“

To je **v souladu s podkladem**:
- „⛔ Že „AI vyhledávač" je oficiální termín. Je to zavedené lidové označení, ne kategorie od výrobců.“

### Co je obhajitelné
Dělení na:
- „vyhledávač s AI vrstvou“
- „asistent, který umí hledat na webu“

je jako **praktické vysvětlení pro čtenáře obhajitelné**. Nepůsobí to samo o sobě jako falešná dichotomie, protože text netvrdí „existují jen tyto dvě ontologicky přesné třídy“, ale používá je vysvětlujícím způsobem.

### Co je problematické
Jakmile se do toho doplní konkrétní příklady mimo oporu v podkladu, zvyšuje se riziko nepřesnosti. Proto ten **BLOCKING** výše.

---

## B) Nepřebíjí nová sekce o dalších plochách tvrzení, že kanálů je pět?
**Ne. Je to udělané správně.**

### Opora v textu
> „## Plochy, které tenhle rozcestník neřeší“

> „Do pětice je nedávám, protože **jejich dostupnost pro Česko doložit neumím**“

> „**Nedoloženo není totéž co nedostupné.**“

To je v přímém souladu s podkladem:
- „⛔ Nepovyšovat je na hlavní kanály.“
- „Pětikanálová kostra článku ... zůstává; tohle patří do krátké poznámky s odkazy.“
- „⛔ Že Ask Maps nebo rozdělené zobrazení v Chromu v Česku nejsou. Nedoloženo ≠ nedostupné.“

Tahle část je věcně i strukturálně v pořádku.

---

## C) Není v diffu tvrzení, že Ask Maps nebo Chrome split view v ČR nejsou?
**Není.**

Naopak je tam správná opatrnost:
> „jejich dostupnost pro Česko doložit neumím“

a
> „Nedoloženo není totéž co nedostupné.“

To splňuje zadání.

---

## D) Není teď v článku tolik odkazů, že ztrácí čitelnost?
**Za mě ne na úroveň vady MAJOR.**

Ano, odkazů výrazně přibylo. Ale:
- podklad výslovně říká, že problém byl, že hub **nezná vlastní cluster**,
- u rozcestníku je hlavní funkcí právě **odkazovat**,
- nové odkazy jsou většinou soustředěné tematicky po blocích a dávají smysl.

Jediné místo, kde už je to na hraně, je odstavec k AI Mode:

> „Detaily jsou v článku o [Google AI Mode]..., [AI Mode vs. AI Overviews]..., [AI Mode v Googlu česky]..., [jak se zobrazit v AI Mode]..., [query fan-out]..., [limity měření]...“

To je hutné, ale u rozcestníku ještě akceptovatelné. **Neoznačil bych to jako MAJOR**, protože to přímo plní účel refreshe.

Pokud by se to mělo uhladit, tak čistě redakčně:
- nechat 2–3 odkazy v odstavci,
- zbytek přesunout do krátkého seznamu „Související články“.

To je ale doporučení, ne faktická vada.

---

# Závěr

## Verdikt
Diff je **z velké části v souladu s podkladem** a hlavní refresh cíle plní. Našel jsem:

- **1× BLOCKING**
- **0× MAJOR**
- **1× MINOR**

## Co opravit před schválením
1. **Zúžit definiční sekci o „AI vyhledávači“** a vyhodit nepodložené konkrétní příklady „Claude nebo Gemini v režimu s vyhledáváním“.
2. **Prověřit nebo odstranit odkaz** `/blog/ai-mode-vedle-sebe-v-chrome/`, protože jeho existence/opora není v podkladu doložená.

Po těchto dvou úpravách bych diff považoval za **schválitelný**.