# Vypořádání auditů — `hledanost-neni-adopce`

## Kolo 1 — osa faktů (gpt-5.5, 10. 10. 2026)

Verdikt auditora: OPRAVIT PŘED PUBLIKACÍ — 4× BLOCKER, 3× WARNING, 1× TIP.

### Zapracováno

| # | Nález | Co se změnilo | Z17 — kde všude |
|---|---|---|---|
| B1 | U Přehledu od AI chybí rozsah a výhrada k definici | Výčet 4: „ve více než 200 zemích a územích a ve 40 jazycích. Co se počítá za uživatele, neuvedl.“ Chyba 06: „uvedl v červenci 2025 … po celém světě“. Návrh auditora psal „Přehledy od AI“ (množné č.) — slovník webu chce jednotné, ponecháno „Přehled od AI“. | grep `uživatelů měsíčně` → 2 výskyty, oba opravené |
| B2 | Rada „sečtěte, pokud se řady liší“ je silnější než data | FAQ 5, Insight, Checklist 3 a chyba 02 přepsané: totožné řady = sloučené, nesčítat; součet rodiny je **orientační odhad**, rozdílné řady nezaručují, že se hledání nepřekrývají. | grep `sečt|sečíst|součet` → 6 míst, všechna v novém znění |
| B3 | Tvrzení o Search Console bez primárního zdroje v podkladech | Doplněn odkaz na nápovědu *Generative AI performance report (Search)* (support.google.com/webmasters/answer/16984139) — znovu ověřeno 10. 10. 2026: jen zobrazení, AI Overviews a AI Mode v jednom reportu, „As of August 31, 2026 … all websites worldwide“. K GA4 doplněn odkaz na *Default channel group* (9756891), ověřeno 10. 10. 2026: AI Assistant „excludes Google's AI Overviews and AI Mode“, Organic Search je „including“. Obojí doplněno do hlavičky Z16 v `research.md`. | text, FAQ 6 a chyba 06 zůstávají — jsou teď doložené |
| B4 | SparkToro 0,34 %: chybí jmenovatel a výhrada k metodice | „…0,34 % vyhledávání na Googlu v jeho panelu (…; jak přechod do režimu AI poznal, článek nepopisuje)“ | jediný výskyt |
| W5 | GA4 relace přeložené jako „kolik lidí“ | Tabulka: „kolik návštěv vám AI poslala“; text: „jestli AI posílá návštěvy právě vám“; závěr: „kolik návštěv vám AI posílá“. | grep `lidí vám|posílá lidi|lidi právě` → 0 |
| W6 | `answer` zobecňuje zaokrouhlení „z nástrojů“ (doložené jen u Plánovače) | `answer`: „Měsíční hledanost je odhad, ne počet…“; FAQ 3: „…a mění se i zpětně“ (místo „nástroje ji zpětně upravují“). Zaokrouhlení zůstává jen v odstavci o Plánovači, kde ho nápověda uvádí. | grep `zaokrouhl` → 1 (Plánovač) |
| W7 | ČSÚ: volné přepsání otázky na „generativní AI“ | Tabulka: „nástroje AI pro tvorbu textu, obrázků nebo kódu, od 16 let“; FAQ 4 totéž + „ČSÚ do toho počítá i hledání informací přes AI“. Odstavec pod tabulkou to už měl. | grep `generativní AI za|nástroje generativní` → 0 |
| T8 | Trends: hodnoty ze dvou dotazů nejsou srovnatelné | Věta s odkazem na Search Central blog (24. 7. 2025): index se „přepočítává při každém dotazu“. Chyba 04 to už měla („Při jiném výběru se celá řada přepočítá“). | — |

**Navíc z vlastní kontroly (ne nález auditora):** FAQ 1 tvrdilo „hledá se i ze zvědavosti“ a výčet 1
„zjišťují, co to je“ — našeptávač dokládá jen „zapnout“ a „nefunguje“. Zúženo na to, co data ukazují
(grep `zvědav|co to je` → 0).

### Nezapracováno + důvod

Nic — všechny nálezy kola 1 jsou zapracované. Jediná odchylka od návrhu je tvar „Přehled od AI“
(viz B1): množné číslo by porušilo pravidlo slovníku (⛔ Glosář projektu), které jazyková kontrola
u téhož článku už jednou chytila.

### Jazykový průchod

Mechanický průchod před auditem: 2 nálezy (⛔ „Přehledy od AI“ / „Přehledů od AI“ → jednotné číslo),
opraveno → 0. LLM průchod proběhne v C6 po kole 2.

## Kolo 2 — osa jazyka a struktury + kontrola vypořádání (gpt-5.5, 10. 10. 2026)

Verdikt auditora: OPRAVIT PŘED PUBLIKACÍ — 1× BLOCKER, 4× WARNING, 2× TIP. Kontrola vypořádání
kola 1: B2–B4, W5–W7 a T8 sedí; **B1 zapracované neúplně**.

### Zapracováno

| # | Nález | Co se změnilo | Z17 |
|---|---|---|---|
| B1′ | **Moje chyba podle Z17:** v kole 1 jsem B1 opravil v těle, ale karta chyby 06 zůstala bez rozsahu a bez výhrady k definici uživatele. Ve vypořádání kola 1 přitom stálo „oba opravené“ — grep jsem dělal, ale druhý výskyt jsem posoudil jako dostatečný, protože měl datum. | Chyba 06: „Alphabet přitom u Přehledu od AI v červenci 2025 uvedl přes 2 miliardy uživatelů měsíčně ve více než 200 zemích a územích; co počítá za uživatele, neuvedl.“ | grep `uživatelů měsíčně` → ř. 68 (tělo, plná výhrada) a ř. 140 (chyba 06, plná výhrada) |
| W1 | `answer` nezačíná definicí | „Hledanost ukazuje, kolikrát lidé zadali výraz do vyhledávače. Adopce říká, kolik lidí technologii opravdu používá. …“ (51 slov) | — |
| W2 | Metatext „Článek ukazuje…“ v prvních 100 slovech | Nahrazeno závěrem: z hledanosti jen zájem o slovo a směr; o používání průzkumy, o webu návštěvy z AI a zobrazení v Search Console. | grep `článek ukazuje` → 0 |
| W3 | H2 „Co o používání AI vypovídá — …“ kostrbatý | „O používání AI vypovídají průzkumy a vlastní návštěvy“ (`hl` + `strong` zachované) | — |
| W4 | CTA neobratné, dvakrát „výchozí stav“ | Kratší varianta auditora, „ověříme vlastním nástrojem“; cena dál mimo text odkazu | grep `výchozí stav` → 1 |
| T1 | „report“ zní agenturně | Odkaz na nápovědu nese oficiální český název reportu „Přehled výkonu v generativní AI“ (ověřeno na ?hl=cs 10. 10. 2026); „do reportu“ → „do jednoho přehledu“. Název odkazovaného článku „Jak reportovat AI viditelnost“ zůstává (kanonický titulek). | grep `report` → jen URL Reuters a titulek odkazu |
| T2 | FAQ k Trends zbytečně dlouhá | Zkráceno; detail o interních hledáních režimu AI a Přehledu od AI vypuštěn z FAQ (v textu nebyl, v podkladech zůstává). | — |

### Nezapracováno + důvod

Nic.

## C5b — doověření blockeru B1′ (gpt-5.5, osa jazyka a struktury, 10. 10. 2026)

Výsledek: **NEOBSTOJÍ** — karta chyby 06 měla rozsah zemí a výhradu k definici, ale vynechávala
„ve 40 jazycích“, takže obě místa neříkala totéž (`c5b-result.md`).

Oprava: do karty doplněna **doslova stejná** formulace rozsahu jako v těle („ve více než 200 zemích
a územích a ve 40 jazycích“) — grep na celý řetězec teď vrací 2 výskyty (tělo i karta). Další kolo
auditu se nespouští: zbývající rozdíl byl mechanický a shoda je ověřitelná grepem, ne úsudkem.
**Podle C5b se to eskaluje uživateli — uvedeno v závěrečném reportu runu.**

## Jazykový průchod (C6, 10. 10. 2026)

- **Mechanický** (`jazyk-check.py`, slovník v72): před auditem 2× ⛔ „Přehledy od AI“ (opraveno v kole 1),
  po všech opravách **0 nálezů**.
- **LLM** (gpt-5.4, článek + celý slovník): 6 nálezů, **všech 6 přijato** po kontrole kontextu —
  „řád velikosti služby“ → „přibližnou velikost služby“ (a v Insightu „řád velikosti“ → „řádový odhad“);
  „našeptávač k němu nabízel“ → „po jeho zadání nabízel našeptávač“ (totéž u „chatgpt“);
  „jednotlivé měsíce mají vady“ → „v datech za jednotlivé měsíce jsou vady“; „převezme malou část
  hledání“ → „na ni připadá jen malá část hledání“; „na co se průzkum ptá“ → „na co se v průzkumu
  ptají“ (a záhlaví tabulky „Na co se ptal“ → „Otázka“); „hýbou se různě“ → „vyvíjejí se odlišně“.
- **Nová pravidla do slovníku: žádná** — všechny nálezy závisí na kontextu (např. „řád velikosti“ je
  v matematice správně), regex by hlásil i správnou češtinu.
