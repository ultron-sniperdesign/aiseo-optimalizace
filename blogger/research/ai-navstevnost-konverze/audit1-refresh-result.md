## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po refreshi výrazně fakticky poctivější než původní verze: správně ukotvuje rok 2026, rozlišuje AI Assistant vs. Organic Search, uvádí limity vlastních dat MEGA DETAIL a nepřenáší 26 nákupů na celý trh. Přesto má několik faktických problémů v podmínkách GA4. Ty jsou u tvrzení o cizí platformě zásadní.

---

## Nálezy

### [BLOCKER] Vlastní skupina kanálů nezachytí všechno, co výchozí kanál mine

> „## Vlastní skupina kanálů — zachytí, co výchozí kanál mine“  
> „Vlastní skupina kanálů dorovná, co mine…“

Tohle je silnější tvrzení, než dovolují podklady. Vlastní skupina kanálů může zpětně přetřídit relace, **u kterých je v datech použitelný zdroj / médium / kampaň**. Neumí ale zpětně rozpoznat návštěvy z AI, které přišly **bez referreru, bez UTM a GA4 je připsalo poslednímu nepřímému zdroji nebo Direct**.

Podklad v briefu to výslovně omezuje:

- GA4 relační rozměry: relace bez zdroje se připíše poslednímu nepřímému zdroji uživatele, Direct jen pokud žádný není.
- Nelze ověřit: kolik návštěv z aplikací AI přijde bez referreru i bez parametru.

**Návrh opravy:**

Změnit formulace na omezené tvrzení:

> „Vlastní skupina kanálů zachytí část viditelných relací, které výchozí kanál mine — typicky ty, kde v datech zůstane zdroj jako chatgpt.com, perplexity nebo copilot.com. Neodhalí relace bez referreru a bez parametrů, které GA4 připíše Directu nebo dřívějšímu zdroji.“

Totéž upravit v závěru místo „dorovná, co mine“.

---

### [BLOCKER] Definice AI Assistant v článku vynechává jednu podmínku z pravidel GA4

> „**AI Assistant** | odkazující zdroj je na seznamu AI asistentů, který vede Google, nebo má relace médium ai-assistant“

V briefu je u GA4 uvedeno i pravidlo pro kampaň:

> medium „ai-assistant“ / kampaň „(ai-assistant)“ při shodě referreru se seznamem

Článek zmiňuje médium `ai-assistant`, ale **nezmiňuje kampaň `(ai-assistant)`**. U pravidel cizí platformy je vynechaná podmínka blocker, protože čtenář dostane neúplný popis toho, proč relace do kanálu spadne.

**Návrh opravy:**

V tabulce doplnit:

> „odkazující zdroj je na seznamu AI asistentů, který vede Google, nebo relace splní pravidla GA4 pro AI Assistant — včetně média `ai-assistant` nebo kampaně `(ai-assistant)` podle dokumentace“

A podobně upravit FAQ odpověď „Kde v GA4 najdu návštěvy z ChatGPT?“.

---

### [BLOCKER] „Zdroj z parametru bez média = Nepřiřazeno“ je formulované příliš obecně

> „**Nepřiřazeno** (Unassigned) | zdroj z parametru v adrese bez média | relace nesplní pravidla žádného kanálu“

Takhle obecně to není pravda. GA4 Default channel group nepracuje jen s médiem; některé kanály mohou odpovídat i podle zdroje nebo jiných pravidel. Správná podmínka je: relace skončí v Unassigned, **pokud nesplní pravidla žádného výchozího kanálu**.

U `utm_source=chatgpt.com` bez média to podle briefu a dat MEGA DETAIL platilo před zařazením do AI Assistant, ale článek to v tabulce zobecňuje na „zdroj z parametru bez média“.

**Návrh opravy:**

Zúžit tvrzení:

> „**Nepřiřazeno** | u některých zdrojů AI: zdroj je v parametru, ale chybí médium a relace zároveň nesplní žádné pravidlo výchozího kanálu | typicky jsme to viděli u `utm_source=chatgpt.com` předtím, než GA4 začal relace řadit do AI Assistant“

---

### [BLOCKER] FAQ tvrdí příliš obecně, že návštěvy z ChatGPT GA4 řadí do AI Assistant

> „Návštěvy z ChatGPT řadí GA4 do kanálu AI Assistant ve výchozí skupině kanálů…“

To je moc široké. Sám článek později uvádí, že po 15. 6. 2026 bylo ze zdrojů AI 44 relací mimo AI Assistant, včetně:

> „chatgpt.com / referral 5, chatgpt.com / (none) 3“

Správně tedy není „návštěvy z ChatGPT řadí“, ale „rozpoznané návštěvy z ChatGPT za určitých podmínek řadí“. Podmínky jsou důležité: seznam Googlu, referrer / médium / kampaň a zároveň fakt, že část návštěv může skončit mimo kanál.

**Návrh opravy:**

FAQ odpověď změnit například na:

> „Rozpoznané návštěvy z ChatGPT může GA4 řadit do kanálu AI Assistant ve výchozí skupině kanálů, pokud splní pravidla GA4 pro tento kanál. Část relací ale může skončit mimo něj — například bez média, jako referral nebo v nepřiřazeném provozu.“

---

### [WARNING] Tvrzení „GA4 pozná zdroj i bez referreru“ potřebuje podmínku, že UTM skutečně dorazí na měřenou stránku

> „ChatGPT podle OpenAI do odkazů na weby přidává parametr `utm_source=chatgpt.com`, takže zdroj GA4 pozná i tam, kde odkazující adresa chybí.“

První část je doložená OpenAI FAQ. Druhá část je v principu správná, ale chybí technická podmínka: GA4 zdroj pozná jen tehdy, když se parametr `utm_source=chatgpt.com` dostane až na stránku, kde se měří návštěva, a není odstraněn přesměrováním, consent režimem nebo jinou implementací.

Nejde tvrdit bez podmínky, že GA4 zdroj pozná vždy.

**Návrh opravy:**

> „…takže GA4 může zdroj poznat i bez referreru, pokud se parametr dostane až na měřenou stránku a měření relace proběhne.“

---

### [WARNING] U formulace „relace dostane médium ai-assistant“ není jasné, co je dokumentace a co vlastní měření

> „Relace dostane médium ai-assistant, když odkazující zdroj odpovídá seznamu AI asistentů, který vede Google.“

Tvrzení je napsané jako obecné pravidlo GA4. V briefu je ale opora dvojí:

- dokumentace GA4 popisuje pravidla kanálu AI Assistant,
- vlastní měření MEGA DETAIL ukazuje, že se v datech objevilo `chatgpt.com / ai-assistant`.

Článek by měl přesně rozlišit, co říká dokumentace a co je pozorování z MEGA DETAIL. Jinak vzniká dojem, že dokumentace garantuje přepsání média u každé shody referreru.

**Návrh opravy:**

V FAQ změnit na:

> „Podle pravidel výchozí skupiny kanálů spadne relace do AI Assistant, pokud splní podmínky tohoto kanálu. V datech MEGA DETAIL se od týdne 8.–14. 6. 2026 začalo u části návštěv z ChatGPT objevovat médium `ai-assistant`.“

---

### [WARNING] Část o Kaiser & Schulze obsahuje číslo, které není podložené odkazovanou tiskovou zprávou

> „Organická návštěva vyšla o 13 % pravděpodobněji ke konverzi, v části kontrolních výpočtů rozdíl přestal být statisticky významný.“

Podle briefu pochází těchto 13 % a informace o kontrolních výpočtech z článku samotného, který byl dříve načten, zatímco 3. 10. 2026 vracel INFORMS 403. Odkaz v článku ale vede na Frankfurt School tiskovou zprávu. Ta podle briefu podporuje obecnější tvrzení o 973 e-shopech, objemu dat, nízkém podílu LLM provozu a relativním výkonu vůči kanálům, ale ne nutně celé tvrzení o „13 %“ a kontrolních výpočtech.

**Návrh opravy:**

Buď:

- doplnit přímý odkaz/citaci na článek Kaiser & Schulze v *Marketing Science* jako zdroj pro 13 %,  
  **nebo**
- z veřejně čitelné verze vypustit detail „13 %“ a ponechat opatrnější formulaci:

> „Ve studii 973 e-shopů vyšel ChatGPT podle dostupného shrnutí nad placenými sociálními sítěmi, ale pod ostatními kanály; autoři zároveň uvádějí, že výsledky závisí na kontrolních výpočtech a kontextu.“

Pokud nechcete citovat zdroj, který čtenář běžně neověří, je lepší číslo neuvádět.

---

### [TIP] „Dnes“ v úvodu je méně přesné než datum aktualizace

> „Návštěvnost z AI asistentů dnes GA4 vykazuje ve vlastním kanálu…“

Aktuálnost se hodnotí k 3. 10. 2026. Článek má `updated: "2026-10-03"`, takže fakticky sedí, ale „dnes“ rychle zastará a není samostatně ukotvené.

**Návrh opravy:**

> „K 3. 10. 2026 vykazuje GA4 část návštěvnosti z AI asistentů ve vlastním kanálu…“

Nebo:

> „Od května 2026 vykazuje GA4 část návštěvnosti z AI asistentů ve vlastním kanálu…“

---

## Co je fakticky v pořádku

- Článek správně rozlišuje **AI Assistant** a **Organic Search** pro AI Overviews / AI Mode podle nápovědy GA4.
- Správně neuvádí podíl návštěv z AI bez referreru, protože podle briefu je v datech nerozlišitelný.
- Vlastní data MEGA DETAIL jsou prezentovaná opatrně: jeden e-shop, 26 nákupů v produktovém srovnání, intervaly a omezená přenositelnost.
- Tvrzení o regulárním výrazu `^.*ai` je věcně správné: zachytí i hodnotu obsahující „ai“, například `email`.