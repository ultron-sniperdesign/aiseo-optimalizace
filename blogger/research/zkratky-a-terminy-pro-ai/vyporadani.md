# Vypořádání auditů — `zkratky-a-terminy-pro-ai`

## Kolo 1 — osa faktů (gpt-5.5, 10. 10. 2026)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 3× BLOCKER, 9× WARNING, 2× TIP.

### Zapracováno

| # | Nález | Co se změnilo | Z17 |
|---|---|---|---|
| B1 | „jako část stránky ve výsledcích“ a „uživatelům sám ukáže“ = tvrzení o rozhraní bez ověření | `answer` a FAQ 1: „Sekci může člověk číst a nástroj AI zpracovat i samostatně, bez úvodu stránky.“ V H2 1 zůstává jen parafráze průvodce Googlu s atribucí („jeho systémy dokážou pochopit i stránku o více tématech a ukázat uživatelům tu její část…“ — doslova „show the relevant piece to users“). | grep `ve výsledcích vyhledávání nebo` → 0 |
| B2 | „FAQ se zobrazuje samostatně“ — nedoložené, FAQ rich results Google od 7. 5. 2026 nezobrazuje | Checklist: „Pište je tak, aby dávaly smysl samostatně…“; chyba 04: „Odpověď FAQ může čtenář i nástroj AI zpracovat odděleně od zbytku článku.“ | grep `zobrazuj` → 0 |
| B3 | Bing §16 rozšířen na „každý pojem“ | „My stejné pravidlo rozšiřujeme na všechny důležité pojmy v obsahu“ — Bingu přisouzeno jen pojmenování lidí, organizací, produktů a míst | — |
| W4 | Anthropic: nepřesná metrika | „podíl případů, kdy se relevantní úsek nedostal mezi 20 vrácených, z 5,7 na 3,7 %“ (= 1 − recall@20, contextual embeddings) | grep `nenalezených` → 0 |
| W5 | WCAG „každé zkratky“ bez výjimky | „…plný tvar nebo význam zkratky; výjimkou jsou jen zkratky, které už zdomácněly v běžném jazyce.“ | — |
| W6 | „už jen“ u H28 bez doložené změny | „jen jako doporučenou techniku“ (2×: text, FAQ). Pozn.: stránka H28 změnu ze „sufficient“ na „advisory“ sama uvádí, v briefu ale nebyla — formulace zjednodušena. | grep `už jen` → 1 (jiný kontext: „pište už jen termín“) |
| W7 | AIO = AI Optimization znělo jako obecná definice | „Na našem webu znamená AIO zastřešující rámec AI Optimization, v praxi se ale AIO používá i pro Přehled od AI…“ | grep `AIO znamená jednak` → 0 |
| W8 | „pod nadpisem“ širší než metodika | „úvod před prvním nadpisem H2 a každý úsek pod nadpisem H2“; checklist „Stačí jednou na sekci.“ | grep `pod nadpisem` → jen popis metodiky |
| W9 | „odkaz na stránku, která ji vysvětluje“ širší než skript | „ani odkaz na zkratce do slovníku pojmů, do sekcí webu o SEO, GEO, AEO a AIO nebo na článek blogu“; věta o falešném poplachu (odkaz, který měření nepočítalo) zůstává | — |
| W10 | „dvě třetiny sekcí se zkratkou“ zobecňuje | „neplní 65 % sekcí, které používají aspoň jednu ze sedmi sledovaných zkratek“ | grep `dvě třetiny` → 0 |
| T13 | „autorita“ × „autoritativnost“ | tabulka: „autoritativnost“ | — |
| T14 | „úvod nevidí“ absolutní | 2×: „úvod číst nemusí“; u úseku AI „ho nemusí obsahovat vůbec“ | grep `úvod nevidí` → 0 |

### Nezapracováno + důvod

| # | Nález | Důvod |
|---|---|---|
| W11 | „červenec 2026“ nedoloženo | **Doloženo:** `pasazova-optimalizace-obsahu` má `published: "2026-07-18"` a pravidlo obsahuje (ř. 59, 96, 131–133). Věta nově odkazuje „v článku o psaní po pasážích“. Doplněno do hlavičky Z16. |
| W12 | „hledání podle jednoho tvaru minulo variantu“ nedoloženo | **Doloženo interním záznamem:** kořenový `CLAUDE.md` § VI („grep na ‚AI SEO audit‘ minul variantu ‚SEO a AI audit‘, která byla v pěti sekcích“). Procesní tvrzení je pointa odstavce (hledat podle kmene), proto zůstává. Doplněno do hlavičky Z16. |

### Jazykový průchod

Mechanický průchod před auditem i po opravách: **0 nálezů**. LLM průchod proběhne v C6 po kole 2.

## Kolo 2 — osa jazyka a struktury + kontrola vypořádání (gpt-5.5, 10. 10. 2026)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 1× BLOCKER, 5× WARNING, 2× TIP. Kontrola vypořádání kola 1:
opravy sedí, odůvodnění W11 a W12 auditor přijal.

### Zapracováno

| # | Nález | Co se změnilo |
|---|---|---|
| B1 | **Článek sám neplnil vlastní pravidlo** — zkratky bez rozepsání v úvodu, sekcích, FAQ a kartách | Projdeno sekci po sekci: úvod GSC (Google Search Console) a AEO (Answer Engine Optimization); RAG „anglicky retrieval-augmented generation, zkráceně RAG“; v sekci o víceznačnosti AEO i v marketingovém významu; WCAG 2.2 (Web Content Accessibility Guidelines); W3C „konsorcium W3C, které pravidla vydává“ (sekce i karta 06, FAQ 4); karta 03 AIO a AEO rozepsané; FAQ 2 a 3 rozepsané; metodika měření bez výčtu zkratek před tabulkou. **Ověřeno stejným měřením jako web** (rozšířeno o RAG, WCAG, W3C): 16 sekcí (krátká odpověď, 6× FAQ, úvod, 8× H2), **0 se zkratkou bez vysvětlení**. Záměrně nerozepsané podle vlastního pravidla „kdy ne“: AI, SEO, FAQ, PDF, DPH, HTML, URL, H2. |
| W1 | FAQ odpovědi nejsou sebestačné bez otázky | Všech 6 začíná celou výpovědí („Zkratku rozepište…“, „Nerozepisovat můžete…“, „Zkratku při prvním použití zapište…“, „Značka abbr v HTML je jen doplněk…“, „U zkratky se dvěma významy…“, „Jednotné názvy na velkém webu udrží…“) |
| W2 | `answer` nezačíná definicí | Začíná tvrzením: „Zkratka rozepsaná jen v úvodu stránky v dalších sekcích chybí, a sekci přitom může člověk číst a nástroj AI zpracovat samostatně.“ (49 slov) |
| W3 | Úvodní věta: „kdo přijde … jako nástroj AI“, „—,“ | „…nebo přes nástroj AI, který pracuje jen s jedním úsekem — uvidí zkratku GSC (Google Search Console)…“ |
| W4 | Sekce / pasáž / úsek bez vymezení | Do úvodu věta: „Sekcí tu myslíme část stránky pod jedním nadpisem H2; pasáží a úsekem obecně kus textu, který se čte nebo zpracovává samostatně.“ |
| W5 | H2 měření bez výsledku | „Na našem webu chybí vysvětlení zkratky ve 201 sekcích — vlastní měření“ (`hl` + `strong`) |
| T1 | CTA ohýbá název produktu v odkazu | „…obsahuje **[AI SEO Wireframe Pack](/pack/)**, PDF návod za **1 490 Kč včetně DPH**.“ |
| T2 | SEO metadata v pořádku | beze změny |

### Nezapracováno + důvod

| # | Návrh | Důvod |
|---|---|---|
| B1 (část) | rozepsat i SEO a FAQ | Článek sám radí nerozepisovat zkratky, které čtenář zná lépe než plný název (DPH, PDF); SEO a FAQ do té skupiny pro čtenáře tohoto webu patří. Rozepisovat je by šlo proti radě v článku. |

## C5b — doověření blockeru B1 z kola 2 (gpt-5.5, osa jazyka a struktury, 10. 10. 2026)

Výsledek: **NEOBSTOJÍ** — WCAG a W3C byly na pěti místech jen opsané česky („pravidla přístupnosti WCAG“,
„konsorcium W3C, které pravidla vydává“), ne rozepsané plným názvem; článek přitom sám radí „plný název
a hned za ním zkratku“ (`c5b-result.md`).

Oprava: na všech pěti místech plný název — „Web Content Accessibility Guidelines (WCAG)“ ve FAQ 1, 3, 4;
„World Wide Web Consortium (W3C)“ ve FAQ 4, v sekci „Kdy zkratku rozepsat“ a v kartě 06. **Přísná kontrola**
(uznává jen plný název, ne opis): 16 sekcí, 0 bez rozepsání. Další kolo auditu se nespouští — zbývající
rozdíl byl mechanický a ověřitelný skriptem. **Podle C5b se eskaluje uživateli — uvedeno v závěrečném reportu.**

## Jazykový průchod (C6, 10. 10. 2026)

- **Mechanický** (`jazyk-check.py`): před auditem 0; po doplnění plných názvů 3× ⛔ „Content“ uvnitř vlastního
  jména **Web Content Accessibility Guidelines** → **doložená výjimka ve slovníku** (v73, lookahead `Accessibility`
  u pravidla `\bcontent\b`, stejně jako „Content Credentials“ nebo „Content Signals“); negativní kontrola: holé
  „content“ pravidlo dál chytá. Po opravách **0 nálezů**.
- **LLM** (gpt-5.4, článek + celý slovník): 5 nálezů, **všech 5 přijato** — „je stránka relevantní k dotazu“ →
  „jak moc stránka odpovídá dotazu“; „doplnil do úseků kontext“ → „úseky doplnil o kontext“; „která k dotazu
  sedí“ → „která dotazu odpovídá“; „tedy Google AI Overviews“ → „tedy funkci Google AI Overviews“; „předvídat
  variantu“ → „pokrýt každou variantu“.
- **Nová pravidla:** žádná (nálezy závisí na kontextu); slovník změněn jen o výjimku pro vlastní jméno.
