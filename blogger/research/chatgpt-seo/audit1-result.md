## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrou strukturu, jasný informační intent, funkční CTA na Pack i audit a „krátká odpověď“ ve frontmatteru splňuje délku i samostatnost. Před publikací ale obsahuje několik věcných overclaimů kolem GPTBotu, Bingu a citací v ChatGPT. Ty jsou pro článek o „ChatGPT SEO“ zásadní.

---

## Nálezy a opravy

### [BLOCKER] GPTBot je prezentovaný jako podmínka citací, což je věcně nepřesné / přehnané

**Citace:**

> „Povolte robota `GPTBot` v souboru `robots.txt`. Jeho blokace vás z citací prakticky vyřazuje.“

A také ve FAQ:

> „Pokud chcete být v ChatGPT citovatelní, ano. Blokace robotu GPTBot vás z citací prakticky vyřazuje.“

**Problém:**  
GPTBot je primárně crawler OpenAI pro trénink / zlepšování modelů. Pro vyhledávání a zobrazování zdrojů v ChatGPT jsou relevantní i další OpenAI roboti, zejména vyhledávací robot pro search. Tvrdit, že samotná blokace GPTBotu „prakticky vyřazuje“ web z citací, je příliš silné a může být nesprávné.

**Návrh opravy:**  
Přeformulovat na opatrnější a přesnější znění:

> „Zkontrolujte pravidla v `robots.txt` pro vyhledávací roboty OpenAI, zejména ty používané pro vyhledávání a zobrazování zdrojů. Samotný `GPTBot` není totéž co vyhledávací robot pro živé citace, ale příliš restriktivní pravidla mohou snížit šanci, že ChatGPT váš obsah najde nebo použije.“

Ve FAQ otázku změnit například na:

> „Musím povolit roboty OpenAI v robots.txt?“

A odpověď:

> „Pokud chcete zvýšit šanci na citace v ChatGPT s webovým vyhledáváním, zkontrolujte, že neblokujete relevantní vyhledávací roboty OpenAI. Blokace může citovatelnost omezit, ale samotný GPTBot není jediný faktor.“

---

### [BLOCKER] Bing je označen jako praktická podmínka citací — příliš absolutní tvrzení

**Citace:**

> „Bing — indexace jako prakticky podmínka citací v ChatGPT“

> „ChatGPT s webovým vyhledáváním tahá zdroje převážně přes index Bingu, ne Googlu.“

> „Pokud váš web v Bingu není, ChatGPT ho v živých odpovědích těžko najde.“

**Problém:**  
Bing je pro ChatGPT Search historicky i prakticky důležitý zdroj, ale článek ho staví téměř jako jedinou vstupní bránu. V roce 2026 je bezpečnější mluvit o Bingu jako o důležitém discovery kanálu, ne jako o „praktické podmínce“. Bez doložení je to overclaim.

**Návrh opravy:**  
Změnit ve frontmatteru `stats`:

> `label: "Bing jako důležitý zdroj pro dohledatelnost v ChatGPT"`

V textu:

> „ChatGPT s webovým vyhledáváním může využívat více zdrojů pro dohledání aktuálních webových výsledků. Bing je jeden z prakticky důležitých kanálů, proto dává smysl ověřit indexaci v Bing Webmaster Tools a odeslat sitemapu.“

---

### [BLOCKER] Absolutní formulace „binární vrstva“ a „zbytek nemá smysl“ neodpovídá realitě

**Citace:**

> „Tahle vrstva je binární: dokud ji nemáte, zbytek nemá smysl řešit.“

**Problém:**  
Technická dostupnost je nutná, ale není binární v tak tvrdém smyslu. Web může být citovatelný jinými cestami, přes cizí weby, partnerské zdroje, indexy nebo zmínky. Formulace zjednodušuje a přehání.

**Návrh opravy:**

> „Tahle vrstva je základ: bez dostupnosti pro relevantní vyhledávací roboty a bez indexace v důležitých vyhledávacích zdrojích se šance na citace výrazně snižuje.“

---

### [BLOCKER] „Zablokovaný GPTBot = vyřadíte se úplně“ je nepřípustný overclaim

**Citace:**

> „Zablokovaný GPTBot v robots.txt — tím se z citací vyřadíte úplně.“

**Problém:**  
Tvrzení „úplně“ je fakticky neobhajitelné a příliš kategorické.

**Návrh opravy:**

> „Příliš restriktivní pravidla v `robots.txt` — mohou omezit schopnost AI vyhledávání najít a použít váš obsah.“

---

### [WARNING] Číselná tvrzení nejsou v článku doložená zdrojem

**Citace:**

> „Podle veřejných analýz z let 2025–2026 rozhoduje o citaci v ChatGPT zhruba šest faktorů…“

> „podle analýz pochází zhruba dvě třetiny AI citací z cizích zdrojů“

> „Podle analýz z let 2025–2026 se výsledky v Googlu a citace v ChatGPT překrývají jen z menší části…“

**Problém:**  
Uživatel sice v zadání uvádí, že čísla pocházejí z veřejných analýz, ale v článku nejsou žádné konkrétní citace, názvy studií ani odkazy. Pro vzdělávací článek v AI SEO je to slabé — zvlášť když se čísla používají jako argument.

**Návrh opravy:**  
Doplnit krátkou sekci nebo poznámku pod relevantní odstavce:

> „Zdroj: veřejné analýzy citací v AI vyhledávání z let 2025–2026; čísla berte jako orientační, protože výsledky se liší podle oboru, jazyka a typu dotazu.“

Ideálně doplnit 2–3 konkrétní odkazy na zdrojové analýzy. Pokud zdroje nechcete uvádět, změkčit:

> „Ve více veřejných analýzách z let 2025–2026 se opakuje, že velká část citací vede mimo vlastní web značky.“

---

### [WARNING] „Šest faktorů“ působí jako uzavřený seznam, ale není doložený ani vysvětlený

**Citace:**

> „rozhoduje o citaci v ChatGPT zhruba šest faktorů: autorita zdroje, tematická shoda s dotazem, struktura obsahu, čerstvost, strukturovaná data a síla značky jako entity.“

**Problém:**  
Seznam je prakticky užitečný, ale může znít jako oficiální ranking systém ChatGPT. To není doložené.

**Návrh opravy:**

> „Ve veřejných analýzách z let 2025–2026 se opakuje šest praktických signálů, které s citacemi v ChatGPT často souvisejí: autorita zdroje, tematická shoda s dotazem, struktura obsahu, čerstvost, strukturovaná data a rozpoznatelnost značky jako entity.“

Tím se odstraní dojem, že jde o oficiální algoritmus.

---

### [WARNING] Tvrzení o strukturovaných datech je příliš silné

**Citace:**

> „Article, FAQPage a Organization plus jasné autorské údaje pomáhají rozpoznat, kdo za obsahem stojí.“

Ve frontmatteru:

> „Article, FAQPage, Organization a autorské údaje pomáhají ChatGPT rozpoznat entitu a posoudit důvěryhodnost.“

**Problém:**  
Strukturovaná data jsou správné doporučení, ale tvrdit, že přímo pomáhají ChatGPT „posoudit důvěryhodnost“, je silné a obtížně doložitelné. Bezpečnější je formulace, že pomáhají strojům lépe pochopit typ obsahu, autora a organizaci.

**Návrh opravy:**

> „Strukturovaná data typu Article, FAQPage a Organization spolu s jasnými autorskými údaji pomáhají vyhledávačům a AI systémům lépe pochopit typ obsahu, autora a organizaci za webem.“

---

### [WARNING] Meta description je příliš dlouhá a obsahuje nevhodný anglický termín

**Citace:**

> `description: "Praktický návod, jak se dostat do odpovědí ChatGPT: technická způsobilost (GPTBot, Bing), answer capsules, autorita značky a měření citací. Krok za krokem."`

**Problém:**  
Meta description má přibližně 165 znaků, tedy je nad doporučeným limitem 160 znaků. Navíc používá „answer capsules“, což je zbytečný anglicismus a není v souladu s požadovaným slovníkem.

**Návrh opravy:**

> `description: "ChatGPT SEO krok za krokem: technická dostupnost, krátké odpovědi, autorita značky, zmínky z jiných webů a měření citací."`

---

### [WARNING] Termín „answer capsules“ není vhodný pro brand voice

**Citace:**

> `keywords: - "answer capsule"`

> `Pište přímé odpovědi (answer capsules)`

> „Na začátek každé sekce dejte přímou odpověď…“

**Problém:**  
Zadání zakazuje „answer block“ a preferuje „krátká odpověď“. „Answer capsules“ sice není doslova zakázaný termín, ale jde o podobný anglický jargon. Pro český vzdělávací web je srozumitelnější „krátká odpověď“ nebo „přímá odpověď“.

**Návrh opravy:**  
Nahradit všude:

- „answer capsules“ → „krátké odpovědi“
- `answer capsule` v keywords → „krátká odpověď“
- H2 změnit na:

> `## Krok 2: Pište krátké odpovědi na začátek sekcí`

---

### [WARNING] „Čerstvý obsah se cituje líp“ je nedoložené a moc obecné

**Citace:**

> „čerstvý obsah se cituje líp, takže klíčové stránky pravidelně obnovujte.“

**Problém:**  
U některých dotazů je aktuálnost zásadní, u evergreen témat méně. Tvrzení je příliš plošné.

**Návrh opravy:**

> „U dotazů, kde záleží na aktuálnosti, může pravidelně aktualizovaný obsah zvýšit šanci na citaci. U klíčových stránek proto kontrolujte data, příklady, ceny, nástroje a postupy.“

---

### [WARNING] Doporučený „30denní cyklus aktualizace“ není v textu vysvětlený ani doložený

**Citace:**

> `value: "30 dní"`  
> `label: "doporučený cyklus aktualizace klíčových stránek"`

**Problém:**  
Článek v těle nevysvětluje, proč právě 30 dní. Bez zdroje to působí svévolně.

**Návrh opravy:**  
Buď doplnit do části „Krok 5“:

> „U nejdůležitějších stránek dává smysl měsíční kontrola: ověřit citace, aktualizovat zastaralé nástroje, ceny, data a FAQ.“

Nebo změnit stat na méně přesný:

> `value: "pravidelně"`  
> `label: "kontrola a aktualizace klíčových stránek"`

---

### [WARNING] FAQ odpověď „Musím povolit GPTBot“ je zavádějící

**Citace:**

> „Pokud chcete být v ChatGPT citovatelní, ano.“

**Problém:**  
Odpověď začíná jednoznačným „ano“, ale realita je složitější. Viz výše: relevantní jsou pravidla pro různé roboty OpenAI, ne pouze GPTBot.

**Návrh opravy:**

> „Neřešte jen GPTBot. Pokud chcete zvýšit šanci na citace v ChatGPT s webovým vyhledáváním, zkontrolujte, že v `robots.txt` neblokujete relevantní vyhledávací roboty OpenAI a že důležité stránky nejsou zakázané pro indexaci.“

---

### [WARNING] FAQ „Proč najednou záleží na Bingu?“ je moc kategorické

**Citace:**

> „ChatGPT s webovým vyhledáváním vyhledává zdroje převážně přes index Bingu.“

**Problém:**  
Bez zdroje jde o příliš silné tvrzení. Navíc „najednou“ je lehce publicistické a méně evergreen.

**Návrh opravy otázky:**

> „Proč u ChatGPT SEO řešit Bing?“

**Návrh odpovědi:**

> „Bing je jeden z důležitých zdrojů pro dohledatelnost webu v AI vyhledávání. Proto má smysl zkontrolovat indexaci v Bing Webmaster Tools, odeslat sitemapu a odstranit technické překážky, které mohou bránit nalezení důležitých stránek.“

---

### [WARNING] Interní odkaz na vypnutí AI Overview je tematicky matoucí

**Citace:**

> „více v [návodu, jak omezit AI Overview](/blog/jak-vypnout-ai-overview/)“

**Problém:**  
Část řeší ChatGPT a roboty OpenAI, ale odkaz vede na Google AI Overview. To může uživatele zmást, protože AI Overview a ChatGPT Search nejsou totéž.

**Návrh opravy:**  
Buď odkaz odstranit, nebo nahradit relevantnějším odkazem, např.:

> „více v návodu k nastavení `robots.txt` pro AI vyhledávání“

Pokud takový článek neexistuje, zatím bez odkazu.

---

### [WARNING] „Jistota“ v CTA může znít jako příslib výsledku

**Citace:**

> „Pokud chcete mít jistotu, co konkrétně na vašem webu opravit…“

**Problém:**  
Není to vyloženě zakázaná garance, ale u článku, který sám říká, že citaci nelze zaručit, je „jistota“ zbytečně silné slovo.

**Návrh opravy:**

> „Pokud chcete vědět, co konkrétně na vašem webu opravit, dává smysl AI SEO audit na míru za 9 990 Kč.“

CTA jinak splňuje požadavek: vede na konkrétní produkt, uvádí cenu a není generické.

---

### [TIP] Titulek je v pořádku, ale H1 by mohl lépe odpovídat informačnímu intentu

**Citace:**

> `title: "ChatGPT SEO: jak se dostat do odpovědí a citací ChatGPT"`

> `## ChatGPT SEO: čtyři pilíře, na kterých citace stojí`

**Hodnocení:**  
Title má cca 55 znaků, klíčové slovo je vepředu, slug je smysluplný. To je v pořádku.

**Drobné doporučení:**  
H1 v těle je dobrý, ale článek pak pracuje s „šesti faktory“ a pěti kroky. Pro větší konzistenci lze H1 upravit:

> `## ChatGPT SEO: jak zvýšit šanci na citace v ChatGPT`

Tím se sníží rozpor mezi „čtyřmi pilíři“, „šesti faktory“ a „pěti kroky“.

---

### [TIP] Prvních ~100 slov a krátká odpověď jsou silná část článku

**Citace:**

> `answer: "ChatGPT SEO je optimalizace webu tak, aby vás ChatGPT..."`

**Hodnocení:**  
Krátká odpověď má cca 54 slov, začíná definicí, dává smysl samostatně a obsahuje praktické pilíře. To splňuje požadavek na citovatelnost.

**Drobné doporučení:**  
Změnit poslední větu:

> „Zaručit citaci nelze, ale správná technika, struktura obsahu a autorita značky mohou zvýšit šanci, že vás ChatGPT použije jako zdroj.“

Je to přesnější než „dá se výrazně ovlivnit“.

---

### [TIP] FAQ jsou obecně dobré, ale dvě odpovědi potřebují faktickou korekci

**Citace:**

> „Co je ChatGPT SEO?“  
> „Stačí dobré pozice v Googlu?“  
> „Jak poznám, jestli mě ChatGPT cituje?“

**Hodnocení:**  
FAQ otázky jsou reálné a odpovědi jsou většinou sebestačné. Dobře podporují AEO/GEO citovatelnost.

**Nutné opravy:**  
Upravit hlavně odpovědi:

- „Musím povolit GPTBot v robots.txt?“
- „Proč najednou záleží na Bingu?“

Viz výše, obě jsou teď příliš kategorické.

---

### [TIP] Brand voice je většinově věcný, ale místy zbytečně kategorický

**Citace:**

> „zbytek nemá smysl řešit“

> „z citací vyřadíte úplně“

> „citovatelnost obětujete“

**Problém:**  
Tón je jinak srozumitelný a edukativní, ale tyto formulace vytvářejí zbytečný tlak a nejsou plně doložitelné.

**Návrh opravy:**  
Používat bezpečnější claimy:

- „může snížit šanci“
- „omezuje citovatelnost“
- „pomáhá AI lépe pochopit obsah“
- „zvyšuje pravděpodobnost, že bude stránka dohledatelná“

---

## Shrnutí hlavních oprav před publikací

1. Opravit část o GPTBotu a doplnit přesnější zmínku o relevantních vyhledávacích robotech OpenAI.  
2. Změkčit tvrzení o Bingu jako „praktické podmínce“ citací.  
3. Doložit nebo změkčit číselná tvrzení: 6 faktorů, dvě třetiny citací, překryv s Googlem, 30denní aktualizace.  
4. Nahradit „answer capsules“ za „krátké odpovědi“.  
5. Zkrátit meta description pod 160 znaků.  
6. Upravit absolutní formulace typu „vyřadíte úplně“, „binární“, „zbytek nemá smysl“.  

Po těchto úpravách bude článek publikovatelný.