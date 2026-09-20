## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po 1. auditu výrazně lepší: krátká odpověď má správnou délku a dává samostatný smysl, `seoTitle` i description jsou v limitech, CTA míří na relevantní produkt a zdroje jsou uvedené. Zůstává ale několik věcných problémů, hlavně záměna **nápovědy Googlu** za **uživatelské rozhraní Googlu** a několik míst, kde se redakční pozorování pořád tváří jako pravidlo Googlu.

---

## Nálezy

### [BLOCKER] Článek opakovaně vydává ověření v nápovědě za ověření v rozhraní

**Problémové citace:**

> „Proč na názvu záleží — jinak funkci nenajdete“

> „české prostředí Googlu i nápověda mluví česky“

> „když v reportu napíšete „AI Overviews“, klient to ve svém Googlu neuvidí; když napíšete „Přehledy od AI“, pozná to hned.“

> „Klient je ve svém rozhraní nenajde.“

> „Anglické názvy z oznámení nejsou názvy v rozhraní.“

**Proč je to problém:**  
Podklady říkají, že 11 názvů bylo ověřeno **v české nápovědě**, ne v reálném uživatelském rozhraní Vyhledávání Google. To nejsou totéž. Lokalizace nápovědy, dostupnost funkce, texty v UI, účet, jazyk, region a případné Search Labs nastavení se mohou lišit. `research.md` podle zadání obsahuje nápovědu a výskyty, ale ne doložené UI screeny/cesty v rozhraní.

**Návrh opravy:**  
Všechna tvrzení o rozhraní přepsat na tvrzení o nápovědě a komunikaci, pokud nemáte samostatně ověřené UI.

Např.:

- místo „jinak funkci nenajdete“ → „jinak ji v české nápovědě a v reportech pojmenujete nepřesně“
- místo „klient to ve svém Googlu neuvidí“ → „klient si to hůř spojí s českým názvem v nápovědě“
- místo „Anglické názvy z oznámení nejsou názvy v rozhraní“ → „Anglické názvy z oznámení nemusí odpovídat českým tvarům v nápovědě“

Pokud chcete ponechat tvrzení o UI, musí být v `research.md` doložené samostatně: datum, jazyk účtu, region, typ účtu, dostupnost funkce a konkrétní místo v rozhraní.

---

### [BLOCKER] FAQ stále tvrdí, že titulek nápovědy je „oficiální“ název

**Problémová citace:**

> „Název článku v nápovědě je ten oficiální.“

**Proč je to problém:**  
To je přesně zbytkový problém z 1. auditu. Článek sám jinde správně říká, že u některých položek jde jen o tvar z popisného titulku, ne o samostatný produktový název. FAQ to ale znovu absolutizuje. U položek typu „Generování souborů ve Vyhledávání Google“ nebo „Propojení obsahových aplikací Google…“ nejde nutně o produktový název funkce.

**Návrh opravy:**  
Přepsat odpověď ve FAQ např.:

> „Titulek české nápovědy je dobrý výchozí zdroj pro doložený český tvar, ale nemusí vždy znamenat samostatný produktový název. Proto tvar ověřte i v textu článku a poznamenejte si datum ověření.“

---

### [BLOCKER] „Jedenáct funkcí“ je nepřesné: tabulka obsahuje i nefukční/podpůrné položky

**Problémové citace:**

> „Tenhle přehled dává k jedenácti funkcím český tvar…“

> „Jedenáct funkcí a jejich české tvary z nápovědy“

> „Poslední řádek je jiný typ položky: není to funkce pro návštěvníka Vyhledávání…“

**Proč je to problém:**  
Článek nejdřív tvrdí, že jde o 11 funkcí, ale pak sám přiznává, že poslední řádek je Search Console report, ne funkce pro uživatele Vyhledávání. Navíc tři další položky jsou podle článku pouze tvary z popisného titulku, ne produktové názvy.

**Návrh opravy:**  
Změnit terminologii na „položky“, „pojmy“, „tvary“ nebo tabulku rozdělit.

Např.:

> „Jedenáct doložených českých tvarů z nápovědy“

nebo:

> „Doložené české tvary: funkce Vyhledávání, související témata a Search Console“

V intro:

> „Tenhle přehled dává k jedenácti položkám český tvar doložený v nápovědě…“

---

### [BLOCKER] Příklad tvrdí dostupnost Přehledů od AI v Česku bez doložených podmínek

**Problémová citace:**

> „Přehledy od AI jsou dostupné v Česku“

**Proč je to problém:**  
Je to uvedené jako příklad věty, ale fakticky tvrdí dostupnost funkce v Česku. V dodaném kontextu jsou doložené názvy v nápovědě, ne aktuální dostupnost Přehledů od AI v Česku v roce 2026 ani podmínky dostupnosti. U funkcí Googlu jsou podmínky zásadní: region, jazyk, účet, věk, Search Labs, přihlášení, typ dotazu.

**Návrh opravy:**  
Použít neutrální příklad bez dostupnostního tvrzení:

> „Přehledy od AI jsou funkce Vyhledávání“

nebo:

> „Když píšete o funkci jako celku, použijte množné číslo: „Přehledy od AI“.“

Pokud chcete tvrdit dostupnost, doplnit do `research.md` konkrétní zdroj a všechny podmínky, za kterých platí.

---

### [WARNING] „Learn About se nepřekládá“ je silnější tvrzení, než dokládá titulek

**Problémová citace:**

> „Learn About | Learn About (nepřekládá se)“

**Proč je to problém:**  
Z titulku „Lepší učení se službou Learn About“ plyne, že v tomto článku nápovědy zůstává název „Learn About“. Neplyne z něj obecné pravidlo „nepřekládá se“ pro všechny kontexty Googlu.

**Návrh opravy:**  
Změnit na:

> „Learn About | **Learn About** — v citovaném titulku zůstává anglický název“

nebo:

> „Learn About | **služba Learn About**“

---

### [WARNING] Podmínky Osobní inteligence jsou ve FAQ zkrácené až nepřesné

**Problémová citace:**

> „Je dostupná uživatelům starším 18 let se zapnutou historií a personalizovanými doporučeními.“

**Proč je to problém:**  
Podklady uvádějí konkrétně „historii vyhledávacích služeb“, ne obecně „historii“. Obecná „historie“ může znamenat historii prohlížeče, historii polohy nebo jiný typ aktivity.

**Návrh opravy:**  
Zpřesnit:

> „Podle české nápovědy ověřené 20. 9. 2026 je dostupná uživatelům starším 18 let, kteří mají zapnutou historii vyhledávacích služeb a personalizovaná doporučení.“

---

### [WARNING] Hledanost se z jednoho ověřeného páru zobecňuje na „česky se to hledá“

**Problémové citace:**

> „Píšete pro český web a pro české čtenáře — a česky se to i hledá.“

> „u režimu AI se česky i výrazně víc hledá… u ostatních názvů měřitelná data nemáme.“

**Proč je to problém:**  
Článek správně uvádí, že data jsou jen pro „režim ai“ vs. „ai mode“. Checklist to ale zobecňuje na všechny české názvy.

**Návrh opravy:**  
V checklistu upravit:

> „Český název jako hlavní — Pro český web je srozumitelnější český tvar z nápovědy. U režimu AI to podporují i data hledanosti; u dalších pojmů data nemáme.“

---

### [WARNING] Tvrzení „Google nepoužívá“ a „v nápovědě nenajdete“ jsou příliš absolutní

**Problémové citace:**

> „„AI přehledy“, „AI režim“ nebo „osobní AI“ vypadají rozumně, jenže je Google nepoužívá.“

> „„AI přehledy“ ani „AI režim“ v nápovědě nenajdete.“

**Proč je to problém:**  
Doložené jsou výskyty v konkrétních článcích nápovědy. Není doložené, že Google tyto tvary nepoužívá nikde v celém ekosystému, ve všech dokumentech, UI textech nebo starších verzích.

**Návrh opravy:**  
Zúžit rozsah:

> „V ověřených českých článcích nápovědy k těmto funkcím jsme tyto tvary nenašli.“

nebo:

> „V citovaných článcích nápovědy Google používá jiné tvary.“

---

### [WARNING] Řádek „Canvas / notebooks v AI Mode“ může mást

**Problémová citace:**

> „Canvas / notebooks v AI Mode | sešity v režimu AI“

**Proč je to problém:**  
Sloupec se jmenuje „Anglický název nebo téma“, takže to není faktická chyba sama o sobě. Ale kombinace „Canvas / notebooks“ může čtenáře vést k dojmu, že Google tyto pojmy bere jako jeden totožný název. Z dodaných podkladů je doložen český titulek „Začínáme se sešity v režimu AI“, ne vztah Canvas = notebooks.

**Návrh opravy:**  
Buď doložit mapování v `research.md`, nebo zjemnit text v tabulce:

> „téma: notebooks / sešity v AI Mode“

případně:

> „Notebooks v AI Mode“

Pokud „Canvas“ není v české nápovědě doložený v této souvislosti, z řádku ho odstranit.

---

### [WARNING] Nadpis „Google sám není jednotný — a pozná se, kdy proč“ je pořád příliš jistý

**Problémová citace:**

> „Google sám není jednotný — a pozná se, kdy proč“

**Proč je to problém:**  
Sekce pak správně říká, že Google pravidlo nevysvětluje a jde o redakční pravidlo odvozené z výskytů. Nadpis ale zní, jako by článek znal záměr Googlu.

**Návrh opravy:**  
Změnit nadpis např. na:

> „Google používá více tvarů — jak z toho odvodit pracovní pravidlo“

nebo:

> „Kolísání v nápovědě — naše redakční pravidlo pro psaní“

---

### [WARNING] Chybí konkrétní interní odkaz na související obsah webu

**Problém:**  
Článek má CTA na `/pack/`, ale v těle není interní odkaz na relevantní související obsah, přestože podle kontextu existuje článek `ai-mode-cesky` a slovník `/slovnik/`.

**Návrh opravy:**  
Doplnit jeden až dva přirozené interní odkazy, ne obecný seznam.

Např. po části o režimu AI:

> „Dostupnost a používání samotného režimu AI v češtině řešíme samostatně v článku [AI Mode česky](/ai-mode-cesky/).“

A u názvosloví:

> „Základní pojmy průběžně držíme také ve [slovníku AI SEO](/slovnik/).“

Pozor: pokud přesný slug článku není `/ai-mode-cesky/`, použít skutečnou URL.

---

### [TIP] „Kdykoli ověříte“ je zbytečně absolutní

**Problémová citace:**

> „odkaz, na kterém si ho kdykoli ověříte“

**Proč je to problém:**  
Google může URL změnit, stránku sloučit, přesměrovat nebo změnit lokalizaci. Není nutné slibovat „kdykoli“.

**Návrh opravy:**

> „odkaz, na kterém si ho můžete ověřit“

---

### [TIP] „Google funkce přejmenovává i slučuje“ by mělo být opatrnější

**Problémová citace:**

> „Google funkce přejmenovává i slučuje.“

**Proč je to problém:**  
Jako obecné upozornění je to rozumné, ale bez konkrétního příkladu je bezpečnější formulovat možnost, ne pravidlo.

**Návrh opravy:**

> „Google může názvy funkcí měnit, rozšiřovat nebo slučovat.“

---

## Co je v pořádku

- Krátká odpověď má 55 slov, začíná vysvětlením a dává smysl samostatně.
- `seoTitle` je v limitu a klíčové téma je na začátku.
- Description je v limitu a odpovídá obsahu.
- CTA na **AI SEO Wireframe Pack za 1 490 Kč** je pro tutorial relevantní a není agresivní.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani tvrdé garance se v článku nevyskytují.
- Článek správně uvádí datum ověření a zdroje z nápovědy.