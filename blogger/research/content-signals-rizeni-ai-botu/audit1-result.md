## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je celkově nadprůměrně poctivý, ale před publikací bych opravil několik věcných a praktických nepřesností. Největší problém je rozpor mezi cílem „citace / AI odpovědi ano, trénink ne“ a doporučenou řádkou, která `ai-input` nechává neutrální.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Návod „citace ano, trénink ne“ neodpovídá definici `ai-input`

**Citace:**

> „Nejčastější přání českého webu: být citovaný v AI odpovědích, ale nekrmit trénink.“

a následně:

```txt
User-agent: *
Content-Signal: search=yes, ai-train=no
Allow: /
```

a ve Stepperu:

> „Signál ai-input vynechte, pokud nechcete AI odpovědi ani výslovně povolit, ani zakázat — neuvedený je neutrální.“

**Problém:**  
Podle Cloudflare definice je `ai-input` právě použití obsahu jako vstupu do AI odpovědí / RAG / groundingu. Pokud článek slibuje recept „být citovaný v AI odpovědích“, pak vynechání `ai-input` tento záměr nevyjadřuje. Vyjadřuje pouze neutralitu.

To je prakticky nejdůležitější část tutorialu a teď je vnitřně rozporná.

**Návrh opravy:**  
Rozdělit návod na dvě varianty:

**Varianta A — chci vyhledávání, odkazy a krátké úryvky, ale ne trénink:**

```txt
User-agent: *
Content-Signal: search=yes, ai-train=no, use=reference
Allow: /
```

Doplnit větu:

> Tato varianta výslovně povoluje vyhledávání s odkazy a úryvky. `ai-input` nechává neutrální, takže neříká „ano“ ani „ne“ pro použití obsahu jako vstupu do AI odpovědí.

**Varianta B — chci i AI odpovědi s citací, ale ne trénink:**

```txt
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no, use=reference
Allow: /
```

Doplnit caveat:

> K 2. 9. 2026 ale žádný velký provozovatel veřejně nepotvrdil, že tuto preferenci čte.

---

## 2. [BLOCKER] Přehnané tvrzení, že Content Signals „platí“ pro jakéhokoli robota

**Citace:**

> „Content Signals obrací logiku: místo „kdo smí“ říká „k čemu se to smí použít“ — a to platí pro jakéhokoli robota, i toho, který ještě neexistuje.“

**Problém:**  
Tohle je věcně příliš silné. Podle research podkladů k 2. 9. 2026 žádný velký provozovatel veřejně nepotvrdil, že Content Signals čte. John Mueller navíc uvádí, že direktiva nemá účinek na žádný crawler ani LLM. Content Signals tedy ne „platí“ pro jakéhokoli robota; pouze vyjadřuje preferenci vůči jakémukoli robotu, který se ji rozhodne respektovat.

**Návrh opravy:**

> Content Signals obrací logiku: místo „kdo smí“ říká „k čemu se obsah smí podle preference webu použít“. Je formulovaný obecně i pro budoucí roboty, ale účinek má jen tehdy, pokud ho konkrétní provozovatel začne číst a respektovat.

---

## 3. [BLOCKER] OpenAI OAI-SearchBot je popsaný bez důležité výjimky

**Citace:**

> „OAI-SearchBot — „surface websites in search results in ChatGPT's search features“; kdo ho zakáže, v odpovědích vyhledávání není“

**Problém:**  
Research uvádí přesnější formulaci OpenAI: weby opt-out z OAI-SearchBot „will not be shown in ChatGPT search answers, though can still appear as navigational links“. Článek druhou část vynechává, takže tvrdí absolutněji, než zdroj dovoluje.

**Návrh opravy:**

> OAI-SearchBot — používá se pro zobrazování webů ve vyhledávacích funkcích ChatGPT. Pokud ho web zakáže, nemá se zobrazovat v ChatGPT search answers, ale podle OpenAI se stále může objevit jako navigační odkaz.

---

## 4. [BLOCKER] FAQ tvrdí „nic to nerozbije“ příliš absolutně

**Citace:**

> „Jako vyjádření preference ano — nic to nerozbije, protože neznámé direktivy roboti ignorují…“

**Problém:**  
Samotná řádka `Content-Signal` by indexaci rozbít neměla. Ale článek zároveň správně říká, že Cloudflare managed robots.txt může vložit vlastní část před existující robots.txt. Tam už může dojít k nedorozumění, duplicitním skupinám `User-agent: *` nebo špatnému vyhodnocení člověkem při úpravách.

Tvrzení „nic to nerozbije“ je tedy příliš široké.

**Návrh opravy:**

> Samotná řádka `Content-Signal` by indexaci rozbít neměla, protože neznámé direktivy roboti ignorují. Riziko vzniká hlavně při chybě v `Disallow` nebo při zapnutí spravovaného robots.txt v Cloudflare bez kontroly výsledného souboru.

---

# 2. Doporučení

## 1. [WARNING] Upřesnit větu „hodnoty jsou jen `yes` a `no`“

**Citace:**

> „A hodnoty jsou jen `yes` a `no`.“

**Problém:**  
Bez kontextu to může být matoucí, protože od července 2026 článek sám uvádí parametr `use=` s hodnotami `immediate`, `reference`, `full`.

**Návrh opravy:**

> U tří původních signálů `search`, `ai-input` a `ai-train` jsou hodnoty jen `yes` a `no`. Parametr `use=` má vlastní hodnoty `immediate`, `reference` a `full`.

---

## 2. [WARNING] Sjednotit a zpřesnit zápis Cloudflare managed robots.txt

**Citace:**

> „Spravovaný robots.txt Cloudflare dnes tuto řádku vkládá automaticky a připojuje ji před váš vlastní soubor…“

a:

> „Cloudflare svou část připojí před vaši.“

**Problém:**  
„Připojí před“ je jazykově neobratné a u technického návodu může mást. Dokumentace říká, že Cloudflare managed robots.txt část **prependuje**, tedy vloží / předsadí před existující robots.txt.

**Návrh opravy:**

> Spravovaný robots.txt Cloudflare tuto část vloží před váš existující robots.txt a obě části spojí do jedné odpovědi.

---

## 3. [WARNING] PerplexityBot je použitý bez zdroje a může zbytečně kanibalizovat základní článek

**Citace:**

> „OAI-SearchBot, Claude-SearchBot, PerplexityBot dostanou vlastní skupinu s Allow.“

a:

```txt
User-agent: PerplexityBot
Allow: /
```

**Problém:**  
Research podklady pro tento audit detailně dokládají OpenAI a Anthropic, ale ne Perplexity. Navíc plán říká, že základní tabulka jmen robotů má být v článku `/blog/ai-crawler-robots-txt/`, ne tady.

**Návrh opravy:**  
Buď doplnit zdroj pro Perplexity do zdrojů, nebo formulaci změkčit a odkázat na pilířový článek:

> Vyhledávací AI roboty povolte podle aktuální tabulky v článku [řízení AI robotů v robots.txt](/blog/ai-crawler-robots-txt/) — typicky OAI-SearchBot, Claude-SearchBot a další vyhledávací roboty, které chcete pustit.

V ukázce pak buď ponechat jen OpenAI + Anthropic, nebo dodat poznámku:

> Seznam robotů je příklad, ne kompletní aktuální tabulka.

---

## 4. [WARNING] Formulace „smí použít“ místy zní silněji než „vyjadřuje preferenci“

**Citace:**

> „web vyjadřuje, k čemu se jeho obsah smí použít“

**Problém:**  
Ve zbytku článku správně vysvětlujete, že Content Signals je preference, ne technické opatření. Sloveso „smí“ ale může působit jako skutečné povolení / zákaz.

**Návrh opravy:**  
V answeru i úvodu bych jemně změkčil:

> Content Signals je rozšíření robots.txt od Cloudflare, kterým web vyjadřuje preferenci, k čemu se jeho obsah má nebo nemá použít: pro vyhledávání, jako vstup do AI odpovědí a pro trénink modelů.

---

## 5. [WARNING] „Tester v Search Console“ může být nepřesné označení

**Citace:**

> „Otevřete robots.txt v prohlížeči, projděte ho testerem v Search Console…“

a:

> „Tester v Search Console“

**Problém:**  
Formulace může být zastaralá nebo nepřesná podle aktuální podoby Search Console. Bezpečnější je mluvit o kontrole přes Search Console / URL Inspection / report indexace, ne o konkrétním „testeru“, pokud není jasné, že v roce 2026 existuje pod tímto názvem.

**Návrh opravy:**

> Zkontrolujte klíčové URL v Search Console přes kontrolu URL a sledujte report Indexování stránek, zejména stav „blokováno souborem robots.txt“.

---

## 6. [TIP] Zkrátit hlavní `title`, je lehce přes ideální rozsah

**Citace frontmatteru:**

```yaml
title: "Content Signals: řízení AI botů podle účelu, ne podle jména"
```

**Problém:**  
Titulek má přibližně 61 znaků. Není to zásadní chyba, ale požadavek říká 50–60 znaků. `seoTitle` je v pořádku, má cca 56 znaků.

**Návrh opravy:**

```yaml
title: "Content Signals: řízení AI botů podle účelu"
```

Nebo ponechat delší variantu jen jako H1, pokud systém používá `seoTitle` pro `<title>`.

---

## 7. [TIP] Slovo „fetchery“ zbytečně zhoršuje srozumitelnost

**Citace:**

> „A fetchery spouštěné uživatelem se robots.txt buď neřídí…“

**Problém:**  
Není to zakázaný termín ze seznamu, ale pro majitele webu je to zbytečný anglicismus. Článek jinak drží dobrý srozumitelný tón.

**Návrh opravy:**

> A roboti nebo nástroje spouštěné přímo uživatelem se robots.txt buď neřídí…

---

## 8. [TIP] Přidat jednu větu, že ukázka robots.txt je modelová, ne univerzální

**Citace:**

> „Takhle vypadá výsledek v celku — jména nahoře, signály ve výchozí skupině:“

**Problém:**  
Majitel webu může ukázku opsat a přepsat si vlastní důležité `Disallow` části. Zvlášť když článek říká `Allow: /`.

**Návrh opravy:**

> Ukázka je modelová. Nepřepisujte podle ní celý robots.txt naslepo; doplňte signály a skupiny do svého existujícího souboru tak, aby zůstala zachovaná vaše současná pravidla pro indexaci.

---

# 3. Co je v pořádku

- Krátká odpověď ve frontmatteru má správnou délku, začíná definicí a dává samostatný smysl.
- Prvních cca 100 slov těla funguje jako samostatná odpověď.
- Článek správně opakuje, že Content Signals **nenahrazuje jména robotů**, ale doplňuje je.
- Datace je dobrá: Cloudflare 24. 9. 2025, `use=` 1. 7. 2026, dokumentace 3. 8. 2026, stav ověřený k 2. 9. 2026.
- Zásadní claim „žádný velký provozovatel k 2. 9. 2026 veřejně nepotvrdil podporu“ je uveden poctivě a se zdrojem.
- Syntaxe základních ukázek `Content-Signal: search=yes, ai-train=no` odpovídá dokumentaci Cloudflare.
- Interní odkazy jsou relevantní a dobře oddělují navazující články.
- Závěrečné CTA míří na konkrétní produkt: **AI SEO audit za 3 600 Kč**, což splňuje zadání.
- Meta description je v limitu a slug je smysluplný.