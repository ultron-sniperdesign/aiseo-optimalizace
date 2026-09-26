# C5 — závěrečný audit: Tabulky a seznamy pro AI

Datum auditu: 26. 9. 2026
Auditovaný soubor: `src/content/articles/tabulky-a-seznamy-pro-ai.mdx`

## Fáze 1 — samostatné posouzení opraveného textu

Tato fáze vznikla bez čtení `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md`. Kontrola vycházela z článku, rešerše, systémového promptu, datového modulu Packu, primárních zdrojů odkazovaných článkem a skutečné implementace použitých komponent.

### Průběžný verdikt fáze 1

**PUBLIKOVAT po drobných opravách komponent a jejich použití.** Nenašel jsem věcný blocker ani chybějící podmínku, která by měnila pravdivost hlavní teze. Čtyři drobné nálezy se týkají výsledné sémantiky a zobrazení komponent.

### Co obstálo

- Hlavní teze je přesná a správně omezená: článek odlišuje laboratorní porozumění tabulkám od pořadí a citací ve vyhledávání.
- Google skutečně doporučuje členění pro čtenáře, připouští sémantické HTML jako dobrou praxi pro lidi a čtečky obrazovky a zároveň nevyžaduje zvláštní AI značení ani Markdown. Současně výslovně negarantuje procházení, indexaci ani zobrazení. Zdroj: [Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- W3C skutečně rozlišuje `<th>` a `<td>`, u složitějších tabulek uvádí `scope`, `id` a `headers` a popisuje `<caption>` jako pojmenování celkového tématu tabulky, které je užitečné ve většině situací. Zdroj: [W3C Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/).
- Test prohozením položek odpovídá dokumentaci MDN: při změně významu patří obsah do `<ol>`, jinak do `<ul>`. Zdroj: [MDN `<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul).
- Popis *Table Meets LLM* je opatrný a odpovídá studii: nejlepší souhrnný výsledek v benchmarku měla testovaná kombinace s HTML a dalšími prvky promptu, výkon se lišil podle úlohy a GPT-4 byl testován jen na dílčím vzorku. Zdroj: [Microsoft Research, Table Meets LLM](https://www.microsoft.com/en-us/research/wp-content/uploads/2023/12/wsdm24-SUC.pdf).
- Popis TabVerse odpovídá abstraktu: stejný obsah tabulek byl porovnáván napříč textovými formáty a obrazem; strukturovaný text obecně překonal obraz, ale rozdíl závisel na modelu, úloze a formátu. Preprint je stále veden jako verze odeslaná do ARR v květnu 2026. Zdroj: [arXiv 2606.09578](https://arxiv.org/abs/2606.09578).
- CTA odpovídá `src/content/pages/pack.ts`: sedm typů stránek, samostatný návod a konečná cena 1 490 Kč včetně DPH.
- `seoTitle` má 33 znaků a přirozeně začíná hledanou formulací; meta description má 131 znaků; `answer` má 59 slov a samostatně odpovídá na otázku. Slug i interní odkazy jsou věcně relevantní.
- Všech šest H2 obsahuje zvýrazněný klíčový pojem přes `<span class="hl">`, pointu přes `<strong>` a spojovací prostý text. H3 zůstává prostý.
- Mechanický jazykový checker nad aktuálním slovníkem vrátil 0 nálezů ve 2 075 slovech. Vlastní jazykový průchod nenašel nový kalk, anglicismus ani strojový obrat hodný nového pravidla.

### Nálezy fáze 1

#### 1. Zdvojený popisek v kartách „ano/ne“

- **Citovaná pasáž:** `<Do>` následované `**Takto ano**` a `<Dont>` následované `**Takto ne**`.
- **Problém:** komponenty `Do.astro` a `Dont.astro` už samy vykreslují hlavičky `Takhle ano` a `Takhle ne` z `ui.blocks.doLabel` a `ui.blocks.dontLabel`. Ve výsledku čtenář uvidí dvě téměř totožná označení nad sebou.
- **Důkaz:** `src/components/blocks/Do.astro` a `Dont.astro` obsahují vlastní hlavičku; `src/i18n/strings.ts` nastavuje popisky na „Takhle ano“ a „Takhle ne“.
- **Doporučená oprava:** odstranit z těla obou karet řádky `**Takto ano**` a `**Takto ne**`; vlastní popisky komponent ponechat.
- **Závažnost:** drobný ([TIP]).

#### 2. `rightTone="accent"` nemá v porovnávací tabulce žádný vizuální účinek

- **Citovaná pasáž:** `<CompareTable ... rightTone="accent" ... />`.
- **Problém:** typ komponenty hodnotu `accent` přijímá, ale její CSS má pravidla jen pro `seo`, `geo`, `aeo` a `aio`. Pravá hlavička tedy nezíská očekávanou barvu tónu a prop působí, jako by fungovala, i když se ignoruje.
- **Důkaz:** v `src/components/blocks/CompareTable.astro` je `accent` součástí typu `Tone`, ale neexistuje selektor `.ctbl--right-accent .ctbl__right-head` ani odpovídající levá varianta.
- **Doporučená oprava:** doplnit obě CSS varianty pro `accent`; případně v článku použít tón, který komponenta skutečně styluje.
- **Závažnost:** drobný ([TIP]).

#### 3. Ukázková datová tabulka nemá vlastní `<caption>`

- **Citovaná pasáž:** první `<CompareTable>` pod H2 „Volba formátu“.
- **Problém:** článek správně učí, že tabulka potřebuje téma a že celkové pojmenování patří do `<caption>`, avšak jeho vlastní datová tabulka žádný `<caption>` nevykreslí. Obsah je pochopitelný z okolí, ale příklad nemodeluje doporučení, které článek následně požaduje po čtenáři.
- **Důkaz:** `CompareTable.astro` začíná uvnitř wrapperu rovnou prvkem `<table><thead>` a nemá prop ani slot pro `<caption>`; W3C uvádí, že caption identifikuje celkové téma tabulky a je užitečný ve většině situací.
- **Doporučená oprava:** přidat komponentě volitelný prop `caption` a v tomto článku předat například „Volba formátu podle vztahu mezi informacemi“.
- **Závažnost:** drobný ([WARNING]).

#### 4. H3 „Časté chyby při převodu“ je v osnově prázdné

- **Citovaná pasáž:** `### Časté chyby při převodu` následované `<MistakeGrid>` se šesti `<Mistake>`.
- **Problém:** každý `Mistake.astro` vykresluje svůj název také jako `<h3>`. První karta tedy okamžitě ukončí sekci zahájenou nadpisem „Časté chyby při převodu“ a všech šest názvů je v HTML na stejné úrovni. Vizuálně grid působí jako obsah pod společným H3, sémantická osnova však tento vztah nevyjadřuje.
- **Důkaz:** `src/components/blocks/Mistake.astro` používá pevné `<h3 class="mistake__title">`; nadpis v článku je také H3.
- **Doporučená oprava:** umožnit kartě nastavit úroveň nadpisu a v tomto použití vykreslit názvy jako H4; alternativně změnit skupinový nadpis na samostatné správně strukturované H2 a zachovat karty jako H3.
- **Závažnost:** drobný ([WARNING]).

## Fáze 2 — kontrola předchozích auditů a vypořádání

Tato fáze začala až po uložení celé fáze 1. Následně byly přečteny `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md`. Staré problematické obraty byly vyhledány v celém článku; žádný z nich nezůstal.

### Ověření faktického auditu

| # | Stav vypořádání | Ověření v aktuálním článku |
|---:|---|---|
| 1 | **Ověřeno** | Formulace už netvrdí, že W3C vyžaduje explicitní vazby vždy. Správně říká, že u složitějších záhlaví „mohou být potřeba“ `scope`, případně `id` a `headers`. |
| 2 | **Částečně ověřeno** | Článek doplnil určení role, jednu ukázku, rozdíly podle úlohy a menší vzorek pro GPT‑4. Vypořádání však tvrdí, že uvádí „celou vítěznou konfiguraci“, ačkoli text stále nezmiňuje pořadí externího textu vůči tabulce ani další testovanou volbu, oddělovací značku. Podrobněji v nálezu níže. |
| 3 | **Ověřeno** | TabVerse je při prvním výskytu označen jako „novější nerecenzovaný preprint“. |
| 4 | **Ověřeno** | Zmizel nedoložený údaj „za pět minut“. H2 slibuje čtyři rychlé testy bez zvláštních nástrojů a kontrola HTML je uvedena následně jako krok „navíc“. |
| 5 | **Ověřeno** | Závěrečný odkaz vede na aktuální výklad WCAG 2.2 (`/WCAG22/Understanding/info-and-relationships.html`). |

### Ověření jazykového auditu

| # | Stav vypořádání | Ověření v aktuálním článku |
|---:|---|---|
| 1 | **Ověřeno** | „Jiné podstatné pořadí“ bylo na obou místech nahrazeno výčtem, u něhož záleží na pořadí. |
| 2 | **Ověřeno** | Struktura nyní zachovává vztahy a lidem i strojům pomáhá je pochopit; opraven je frontmatter i úvod. |
| 3 | **Ověřeno** | FAQ má samostatný podmět „Obrázek tabulky“ a správně rozlišuje menší obrazovky od dostupnosti pro uživatele pomocných technologií. |
| 4 | **Ověřeno** | Kalk „tabulka má stát sama“ zmizel; text říká „má být srozumitelná sama o sobě“. |
| 5 | **Ověřeno** | Text rozlišuje měsíční a roční částky; ceny už „neplatí měsíčně“. |
| 6 | **Ověřeno** | WAI je správně popsána jako iniciativa konsorcia W3C pro přístupnost webu. |
| 7 | **Ověřeno** | H2 připisuje dokazování výzkumu, nikoli AI. |
| 8 | **Ověřeno** | Odstavec o obou studiích má přirozenější českou stavbu a doplněné faktické meze; jediný zbytek je úplnost popisu konfigurace řešená níže. |
| 9 | **Ověřeno** | Karta TabVerse mluví o přesnosti odpovědí na otázky k tabulkám a výsledcích ve prospěch textového zápisu. |
| 10 | **Ověřeno** | „Jediná kopie informace“ byla nahrazena přímým pravidlem o barvě, ikoně a tučném písmu. |
| 11 | **Ověřeno** | „Rovnocenné znaky“ jsou nahrazeny body a příklad používá stejné období. |
| 12 | **Ověřeno** | Všechny tři tvary od „skenovat“ byly nahrazeny českými slovesy „projít“, „pročíst“ a „procházet“. |
| 13 | **Ověřeno** | Neurčitý „převod“ je rozveden jako pokus převést obsah do jiného formátu. |
| 14 | **Ověřeno** | Prohození nyní „naruší postup“ nebo „změní pořadí priorit“; nic se nerozbíjí. |
| 15 | **Ověřeno** | Pasáž o Googlu odstranila nejasnou hranici, sloveso „připouští“ i hybridní „AI značení“. |
| 16 | **Ověřeno** | „Hodnoticí trik“ i „odpovídání nad tabulkou“ byly nahrazeny konkrétním významem. |
| 17 | **Ověřeno** | Pokyn požaduje stejnou větnou stavbu položek. |
| 18 | **Ověřeno** | Přesný časový slib zmizel a nadpis používá přirozené „bez zvláštních nástrojů“. |
| 19 | **Ověřeno** | Závěrečný H2 říká, že formát má zachovat vztahy mezi údaji. |
| 20 | **Ověřeno** | Závěr konkrétně mluví o případné citaci a o užitečnosti, přesnosti a dohledatelnosti informací. |

Žádný nález nebyl ve vypořádání odmítnut, takže nebylo co obhajovat jako zamítnutou připomínku. Všech 24 plně přijatých oprav je v aktuálním textu skutečně provedeno. Jedna z 25 položek je provedena jen částečně vzhledem k vlastnímu odůvodnění faktického auditu.

### Zbytkový nález z ověření vypořádání

#### 5. Vypořádání nadsazuje úplnost popisu konfigurace *Table Meets LLM*

- **Citovaná pasáž:** „V benchmarku porozumění struktuře dosáhla nejvyššího souhrnného výsledku testovaná konfigurace s HTML, vysvětlením formátu, určením role a jednou ukázkou…“ Vypořádání k tomu uvádí: „nyní uvádí celou vítěznou konfiguraci“.
- **Problém:** aktuální věta je výrazně přesnější než původní, ale stále nejmenuje všechny volby, které původní audit označil za podmínky výsledku. Studie v souhrnu benchmarku výslovně zmiňuje také pořadí externího textu vůči tabulce; ablační tabulka pracuje i s oddělovací značkou. Záznam „celá konfigurace“ proto neobstojí. V článku může zkrácený výčet stále působit jako úplný recept.
- **Důkaz:** *Table Meets LLM*, tabulka 3 a komentář na stranách 5–6: testuje HTML, vysvětlení formátu, oddělovací značku, roli, pořadí a režim s jednou ukázkou; přínos jednotlivých voleb se liší podle úlohy. Samotná studie navíc v následujícím textu ukazuje, že vysvětlení formátu a oddělovací značky mohou některým vyhledávacím úlohám škodit.
- **Doporučená oprava:** vyhnout se neúplnému výčtu: „V benchmarku porozumění struktuře dosáhla nejvyššího souhrnného výsledku testovaná konfigurace s HTML a několika dalšími prvky promptu; přínos jednotlivých voleb se lišil podle úlohy a GPT‑4 autoři ověřovali na menším vzorku.“ Ve `vyporadani.md` změnit „celou vítěznou konfiguraci“ na „podstatné meze vítězné konfigurace“.
- **Závažnost:** drobný ([WARNING]).

## Finální verdikt

**OPRAVIT PŘED PUBLIKACÍ.**

Článek je věcně opatrný, zdrojově silný, jazykově čistý a splňuje požadavky na metadata, samostatnou krátkou odpověď, H2 i produktové CTA. Není v něm žádný [BLOCKER]. Před publikací doporučuji opravit pět drobných bodů: čtyři nové nálezy z komponent ve fázi 1 a neúplně uzavřené vypořádání popisu *Table Meets LLM* ve fázi 2.

Po těchto malých úpravách je článek připraven k publikaci. Článek při tomto auditu nebyl editován.
