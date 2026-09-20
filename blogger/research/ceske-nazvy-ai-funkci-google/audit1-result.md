## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrý záměr, relevantní téma a většinu zdrojů uvádí transparentně. Nejde ale publikovat v současné podobě, protože několikrát vydává redakční interpretaci za oficiální pravidlo Googlu a u dostupnosti / lokalizace dělá příliš silné závěry. U článku, jehož hlavní hodnota stojí na přesném názvosloví, jsou to zásadní chyby.

---

## Nálezy

### [BLOCKER] Příliš silné tvrzení, že anglický název v českém rozhraní „nenajdete“

**Problémové místo:**

> „Kdo hledá v rozhraní ‚AI Mode‘, nenajde nic — protože se to česky jmenuje režim AI.“

A podobně:

> „nabídky, nastavení i nápověda mluví česky, takže anglický název tam nenajdete.“

**Problém:**  
Tohle je platformní tvrzení o rozhraní Googlu, ale článek nedoplňuje podmínky: jazyk účtu, země, rollout funkce, typ zařízení, Labs / běžné Vyhledávání, případně A/B varianty. Z doložených podkladů plyne, jak Google funkci pojmenoval v české nápovědě, ne že anglický název nelze nikde v rozhraní najít.

**Návrh opravy:**  
Zjemnit na doložitelnou formulaci:

> „V české nápovědě Google používá pro AI Mode název režim AI. Pokud píšete pro české uživatele nebo jim vysvětlujete postup v českém rozhraní, je bezpečnější vycházet z českého názvu v nápovědě.“

Vyhnout se absolutním formulacím „nenajdete nic“, „tam nenajdete“.

---

### [BLOCKER] „Oficiální název najdete vždy v nápovědě“ je příliš absolutní

**Problémové místo ve frontmatteru:**

> „Oficiální název najdete vždy v nápovědě přepnuté do češtiny — právě podle něj funkci objevíte v rozhraní.“

**Problém:**  
„Vždy“ je nedoložené. Česká nápověda je velmi dobrý zdroj, ale nemusí vždy přesně odpovídat aktuálnímu UI, dostupnosti funkce nebo variantám rolloutu. Druhá část navíc slibuje, že podle názvu funkci „objevíte v rozhraní“, což nemusí platit, pokud funkce pro uživatele není dostupná.

**Návrh opravy:**  
Upravit `answer` například takto:

> „Google své funkce s AI v české nápovědě často pojmenovává jinak než anglické přehledy: AI Mode je režim AI, AI Overviews jsou Přehledy od AI a Personal Intelligence je Osobní inteligence. Pro české texty je nejbezpečnější ověřit aktuální název v nápovědě přepnuté do češtiny a doplnit datum ověření.“

Tím zůstane krátká odpověď samostatná a nebude overclaimovat.

---

### [BLOCKER] Článek vydává interpretaci kolísání čísla a velkých písmen za pravidlo Googlu

**Problémové místo:**

> „Není to nedůslednost, ale dvě různé věci. Množné číslo označuje funkci jako celek…, jednotné jednu konkrétní odpověď… Stejná logika platí pro velká písmena…“

A ve FAQ:

> „uvnitř používá obě podoby: ‚Režim AI‘ s velkým písmenem na začátku věty a ‚režim AI‘ uprostřed věty.“

**Problém:**  
V podkladech je doloženo, že v nápovědě existuje kolísání: „Režim AI“ 19×, „režim AI“ 12×, „Přehledy od AI“ v názvu a „přehled od AI“ v těle. Není ale doloženo, že Google tuto logiku oficiálně vysvětluje jako pravidlo. Článek z pozorování dělá jistý závěr.

To je nejcitlivější místo článku a v současné podobě je příliš sebejisté.

**Návrh opravy:**  
Přepsat jako redakční doporučení, ne jako fakt o záměru Googlu:

> „Google v nápovědě nepoužívá tvary úplně jednotně. Z ověřených textů se dá prakticky odvodit toto redakční pravidlo: když mluvíte o funkci jako celku, pište ‚Přehledy od AI‘; když mluvíte o jedné konkrétní odpovědi ve výsledcích, pište ‚přehled od AI‘. U režimu AI se držte tvaru použitého v titulku a větného kontextu.“

A doplnit větu:

> „Google tuto logiku v citovaných článcích výslovně nepopisuje; jde o naše redakční pravidlo podle ověřených výskytů.“

---

### [BLOCKER] Tabulka slibuje „oficiální české názvy“, ale některé položky jsou zkrácené nebo vytažené z titulku

**Problémové místo:**

> „Jedenáct funkcí a jejich oficiální české názvy“

A tabulka, např.:

> „Shopping v AI Mode | nákupy a správa objednávek z režimu AI“

> „Connected apps | obsahové aplikace Google“

> „Personal Intelligence | Osobní inteligence“

**Problém:**  
Podklady uvádějí ověřené titulky článků nápovědy. V tabulce ale nejsou vždy přesné titulky ani jednoznačně oficiální názvy funkcí. Některé položky jsou zkrácené popisy nebo termíny vytažené z titulku.

To je problém, protože článek stojí na premise „oficiálních názvů“. Pokud je něco zkrácený pracovní název podle titulku nápovědy, musí to být označeno jako „doložený český tvar v nápovědě“, ne jako oficiální název.

**Návrh opravy:**  
Změnit hlavičku tabulky například na:

> „Anglický název / téma“  
> „Doložený český tvar v nápovědě“  
> „Článek nápovědy“

U položek, kde nejde o jasný produktový název, doplnit přesnější formulaci:

- `Connected apps` → nepsat jen „obsahové aplikace Google“ jako oficiální název funkce; raději „Propojení obsahových aplikací Google…“ nebo „obsahové aplikace Google“ označit jako termín použitý v titulku.
- `Shopping v AI Mode` → uvést blíže k titulku: „Nákupy a správa objednávek přímo z režimu AI…“
- `Personal Intelligence` → „Osobní inteligence“ je v pořádku, protože je na začátku titulku jako pojmenování.

---

### [BLOCKER] Chybný závěr z neexistující české stránky nápovědy

**Problémové místo:**

> „Když česká verze stránky neexistuje, nápověda vás vrátí na anglickou. To samo o sobě je informace: funkce zatím lokalizovaná není, takže ani v rozhraní český název nečekejte.“

**Problém:**  
Tohle je příliš silný závěr. To, že konkrétní článek nápovědy nemá českou lokalizaci nebo se vrátí na angličtinu, nedokazuje, že funkce není lokalizovaná v rozhraní. Může jít o zpožděnou lokalizaci nápovědy, jiný článek, regionální rollout, změnu URL nebo nedostupnost jen pro část uživatelů.

**Návrh opravy:**  
Zjemnit:

> „Když česká verze stránky neexistuje nebo vás nápověda vrátí na angličtinu, berte to jen jako signál, že český název v nápovědě nemáte potvrzený. Neznamená to automaticky, že se český název nemůže objevit v rozhraní.“

---

### [BLOCKER] Tvrzení o „stejných funkcích“ v uživatelské a webmasterské nápovědě je nepřesné

**Problémové místo:**

> „stejné funkce mají jiný název podle toho, jestli o nich mluví uživatelská, nebo webmasterská nápověda“

**Problém:**  
Poslední řádek tabulky je „Přehled výkonu v generativní AI“ v Search Console. To není stejná uživatelská funkce jako Přehledy od AI nebo režim AI, ale report / metrika v nástroji pro vlastníky webů. Z toho nelze vyvozovat, že „stejné funkce mají jiný název“ podle typu nápovědy.

**Návrh opravy:**  
Nahradit přesnějším vysvětlením:

> „Poslední řádek je jiný typ položky: nejde o funkci pro běžného uživatele Vyhledávání, ale o přehled v Search Console. Proto ho nemíchejte s názvy funkcí v uživatelském rozhraní.“

---

### [WARNING] „Titulek nápovědy je ten oficiální název“ je moc silné pravidlo

**Problémové místo:**

> „Vezměte název z titulku článku. Titulek nápovědy je ten oficiální název. Text uvnitř může kolísat v čísle a velikosti písmen, titulek ne.“

**Problém:**  
Titulek článku nápovědy je dobrý ověřovací bod, ale nemusí být vždy čistý název funkce. Často je to popisný titulek typu „Začínáme s…“, „Lepší učení se službou…“, „Nákupy a správa…“. Článek proto nesmí čtenáře učit, že celý titulek nebo jeho část je automaticky oficiální název funkce.

**Návrh opravy:**  
Změnit krok na:

> „Vezměte hlavní český tvar z titulku a ověřte ho v textu článku. Když je titulek popisný, označte si přesně, jestli jde o název funkce, nebo jen o formulaci použitou v nápovědě.“

A odstranit větu „titulek ne“ — i titulky se mohou měnit.

---

### [WARNING] Generalizace hledanosti z jednoho dotazu na „české názvy“ obecně

**Problémové místo:**

> „Český název je i lépe dohledatelný — ‚režim ai‘ 13 000 hledání měsíčně proti 3 100 u ‚ai mode‘…“

A ve FAQ:

> „Pro český web dává smysl český název, protože se tak i hledá…“

**Problém:**  
Doložená hledanost podporuje hlavně dvojici „režim ai“ vs. „ai mode“. U „Přehledy od AI“ a „Osobní inteligence“ podle zadání data nejsou, případně jsou nízká / bez dat. Nelze tedy tvrdit obecně, že každý český název je hledanější než anglický.

**Návrh opravy:**  
Zúžit tvrzení:

> „U režimu AI je český dotaz výrazně hledanější než anglický: ‚režim ai‘ mělo 13 000 hledání měsíčně, ‚ai mode‘ 3 100. U ostatních názvů se řiďte hlavně srozumitelností a shodou s českou nápovědou.“

---

### [WARNING] V popisu a titulku článku se opakuje „oficiální“, ale článek místy pracuje s doloženými tvary, ne oficiálními názvy

**Problémové místo:**

> „Jedenáct oficiálních českých názvů s odkazem na nápovědu.“

**Problém:**  
U jasných položek jako „režim AI“, „Přehledy od AI“, „Osobní inteligence“ je to obhajitelné. U položek typu „obsahové aplikace Google“ nebo „nákupy a správa objednávek z režimu AI“ je bezpečnější říct „doložené české tvary v nápovědě“.

**Návrh opravy:**  
Upravit description například:

> „AI Mode je režim AI, AI Overviews jsou Přehledy od AI, Personal Intelligence je Osobní inteligence. Jedenáct českých tvarů doložených v nápovědě Googlu.“

Pozor na délku meta description po úpravě držet 70–160 znaků.

---

### [WARNING] Formulace „report o výkonu žádný uživatel nevidí“ je nepřesná

**Problémové místo:**

> „report o výkonu žádný uživatel nevidí“

**Problém:**  
Uživatel Search Console ho vidět může. Správný kontrast není „uživatel vs. nikdo“, ale „běžný uživatel Vyhledávání vs. vlastník webu / správce Search Console“.

**Návrh opravy:**

> „Běžný uživatel Vyhledávání tenhle report nevidí; je určený pro vlastníky webů v Search Console.“

---

### [WARNING] V článku není jasně oddělené, co je ověřený fakt a co je redakční doporučení

**Problémové místo:**

> „Pro vlastní texty z toho plyne jednoduché pravidlo…“

**Problém:**  
Samotná pravidla jsou užitečná, ale článek musí výslovně říct, že jde o doporučení autora / webu podle ověřené nápovědy, ne o citované pravidlo Googlu.

**Návrh opravy:**  
Před checklist doplnit větu:

> „Následující pravidla nejsou oficiální jazyková příručka Googlu; jsou to praktická redakční doporučení podle české nápovědy ověřené 20. 9. 2026.“

---

### [WARNING] Podklad `research.md` není v dodaném materiálu přiložen

**Problémové místo:**  
V zadání jsou uvedené ověřené URL a citace, ale samotný `research.md` článku není dodaný.

**Problém:**  
Pro tento typ článku je `research.md` důležitý auditní artefakt. Bez něj bude později těžké ověřit, odkud přesně pochází počty výskytů, citace a podmínky dostupnosti.

**Návrh opravy:**  
Pokud v repozitáři opravdu chybí, doplnit do `research.md` minimálně:

- všech 11 URL s `?hl=cs`,
- datum ověření 20. 9. 2026,
- stažené titulky článků,
- citace k „přehledu od AI“,
- citace k Osobní inteligenci,
- podmínky dostupnosti personalizace: 18+, historie, personalizovaná doporučení,
- data z Marketing Mineru včetně lokality / jazyka.

Pokud `research.md` existuje, stačí zajistit, aby obsahoval přesně tyto položky.

---

### [WARNING] Chybí interní odkazy na související obsah webu

**Problémové místo:**  
V těle článku není interní odkaz na související článek o dostupnosti režimu AI v češtině ani na slovník.

**Problém:**  
Tohle není obecná SEO rada, ale konkrétní mezera tohoto článku: téma názvosloví přirozeně navazuje na existující obsah `/slovnik/` a článek `ai-mode-cesky`. Bez prolinkování článek zůstává izolovaný, i když má být slovníčkový / vysvětlovací.

**Návrh opravy:**  
Doplnit 1–2 věty s interními odkazy, např. po tabulce nebo v části „Co s tím ve vlastních textech“:

> „Dostupnost samotného režimu AI v češtině řešíme samostatně v článku o AI Mode česky. Základní pojmy najdete také ve slovníku.“

Použít skutečné existující URL webu.

---

### [TIP] CTA na Pack je přijatelné, ale je potřeba ho lépe navázat na téma

**Problémové místo:**

> „Potřebujete mít názvosloví srovnané i uvnitř webu? AI SEO Wireframe Pack za 1 490 Kč…“

**Hodnocení:**  
CTA není generické a používá správný produkt i cenu. U tutoriálu je Pack podle zadání povolený. Vazba je ale trochu natažená: článek řeší názvosloví funkcí Googlu, zatímco Pack je hlavně o drátěných modelech stránek.

**Návrh opravy:**  
Buď CTA víc opřít o glosář, nebo zvolit Free PDF, pokud má být vstupní edukativní nabídka. Pokud zůstane Pack, formulace by měla být přesnější:

> „Pokud chcete sjednotit názvosloví i strukturu AI SEO stránek, AI SEO Wireframe Pack za 1 490 Kč obsahuje sedm drátěných modelů stránek a úvodní kapitolu s glosářem.“

---

### [TIP] První odpověď je délkou vhodná, ale měla by být méně absolutní

**Problémové místo ve frontmatteru:**

> `answer: "Google své funkce s AI pojmenovává..."`

**Hodnocení:**  
Délka odpovědi je v požadovaném rozmezí 40–60 slov a odpověď je samostatně srozumitelná. Problém je hlavně slovo „vždy“ a slib, že podle názvu funkci objevíte v rozhraní.

**Návrh opravy:**  
Viz oprava u druhého blockeru. Zachovat strukturu odpovědi, jen odstranit absolutní tvrzení.

---

### [TIP] FAQ jsou použitelné, ale dvě odpovědi opakují příliš jisté závěry

**Problémová místa:**

> „podle toho, jestli jde o funkci jako celek, nebo o jednu konkrétní odpověď“

> „Název článku v nápovědě je ten oficiální.“

**Hodnocení:**  
FAQ mají reálné otázky a odpovědi jsou samostatné. Je ale potřeba sladit je s opravami výše: interpretace čísla / velkých písmen jako redakční pravidlo, ne oficiální logika Googlu; titulek nápovědy jako silný zdroj, ne absolutní důkaz.

**Návrh opravy:**  
V FAQ doplnit formulace typu:

> „V ověřených textech to tak vychází…“

> „Jako hlavní zdroj berte českou nápovědu, ale u popisných titulků ověřte tvar i v těle článku.“

---

## Co je v pořádku

- `seoTitle` je v limitu a má klíčové téma hned na začátku.  
- Meta description je délkově v pořádku.  
- Slug `ceske-nazvy-ai-funkci-google` je srozumitelný.  
- Tón článku je převážně věcný a neprodává tvrdě.  
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ se v článku nevyskytují.  
- Nejsou zde garance typu „zaručeně vás AI začne doporučovat“.  
- Datum ověření 20. 9. 2026 je správně uvedené a pro tento typ článku důležité.