Verdikt: **diff zjevně opravuje dva doložené problémy správným směrem**, ale **není bez vad**. Níže uvádím jen nálezy, které jsou opřené o vámi dodaná ověřená fakta.

## BLOCKING

### 1) Zůstává slabá / nedohledatelná citace u „900M ChatGPT“, jen se schovala z odkazu do textu
**Vadná pasáž:**
> `- **Přes 900 milionů týdenních aktivních uživatelů ChatGPT** (oznámení OpenAI, 27. 2. 2026) — nárůst z 800 milionů hlášených v říjnu 2025`

a související změna ve stats/faq:
> `label: "týdenních uživatelů ChatGPT (OpenAI, 27. 2. 2026)"`

> `ChatGPT přesáhl 900 milionů týdenních aktivních uživatelů (OpenAI, 27. 2. 2026)`

**Proč je to vada:**
Ve vstupních ověřených faktech výslovně stojí:
> „Tvrzení … je v pořádku … ⛔ Odkaz ale vede na `openai.com/blog`, tedy na rozcestník, ne na konkrétní oznámení.“

Diff sice **doplnil datum**, ale v hlavním textu zároveň **odstranil i ten původní odkaz** a nenahradil ho konkrétní citací. Tím se dohledatelnost spíš zhoršila. U auditu faktické správnosti je to pořád problém, protože tvrzení zůstává bez přímého ověřitelného zdroje.

**Návrh opravy:**
- Dodat **konkrétní URL** na oznámení OpenAI z 27. 2. 2026, nebo
- aspoň ponechat explicitní dohledatelnou citaci ve formátu: „OpenAI, 27. 2. 2026, název oznámení …“.

---

## MAJOR

### 2) Opravný blok o CZ trhu si odporuje s tělem v časovém ukotvení
**Vadná pasáž v těle:**
> `Žádný velký výzkum AI search market share **specificky pro CZ trh** nebyl publikovaný v Q2 2026.`

**Vadná pasáž v opravném bloku o pár řádků níž:**
> `Do srpna 2026 tu stálo, že Google má v ČR **95 %+** ... Na odkazované stránce byly 18. 8. 2026 (data za červenec 2026) jiné hodnoty...`

**Proč je to vada:**
Nejde o přímý faktický rozpor v číslech, ale o **matoucí časové rámování po refreshe z 18. 8. 2026**. Sekce je aktualizovaná k srpnu 2026, ale úvod věty zůstává uzamčený do **Q2 2026**. Hned pod tím už pracujete s daty z **července 2026** a odečtem z **18. 8. 2026**. Čtenář snadno nabude dojmu, že časové ukotvení celé sekce je starší než skutečně je.

To je přesně typ vady, která po refreshi vzniká: oprava dat proběhla, ale rámovací věta zůstala ve starém čase.

**Návrh opravy:**
Např.:
- `Žádný velký výzkum AI search market share specificky pro CZ trh nebyl publikovaný ani k srpnu 2026.`
nebo
- `… nebyl publikovaný v první polovině roku 2026 a ani k 18. 8. 2026 nemáme robustní country-level studii.`

---

### 3) V pasáži o obrazových dotazech se americké číslo rozšiřuje na širší kategorii nástrojů, aniž je to explicitně oddělené
**Vadná pasáž:**
> `Google v příspěvku z 19. 5. 2026 uvedl, že víc než jedno z šesti hledání v USA používá hlas nebo obrázek a že obrazová hledání rostou **o víc než 40 % měsíc na měsíc**. Je to americké číslo za měsíční úsek. Vedle Google Lens patří do téže kategorie ChatGPT Vision, Perplexity image search a Bing Copilot Visual Search — jejich čísla veřejná nejsou.`

**Proč je to vada:**
První dvě věty korektně drží ověřený fakt: **USA**, **month-over-month**, **Google post z 19. 5. 2026**. Třetí věta ale může čtenáře svést, že ten růstový kontext nějak vypovídá i o ChatGPT Vision / Perplexity / Bing Copilot Visual Search. Přitom podle vašich ověřených faktů je doložené jen to, co řekl Google o svých datech v USA.

To je **MAJOR**, ne BLOCKING, protože text sice dodává „jejich čísla veřejná nejsou“, ale spojení do jedné myšlenky je pořád zavádějící.

**Návrh opravy:**
Oddělit kategorii od dat:
- `Google v příspěvku z 19. 5. 2026 uvedl, že v USA víc než jedno z šesti hledání používá hlas nebo obrázek a že obrazová hledání rostou o víc než 40 % měsíc na měsíc. Toto číslo se týká Googlu v USA. Do širší kategorie multimodálního vyhledávání patří i ChatGPT Vision, Perplexity image search a Bing Copilot Visual Search, ale jejich srovnatelná veřejná data k dispozici nejsou.`

---

## MINOR

### 4) Opravné bloky sedí s tělem textu, ale jeden zůstává zbytečně méně přesný než by mohl být
**Pasáže:**
> `Do srpna 2026 tu na třech místech stálo, že obrazová hledání rostou **+40 % meziročně** podle interních dat Googlu z roku 2025.`

vs. nové tělo:
> `... příspěvku z 19. 5. 2026 ... **o víc než 40 % měsíc na měsíc** ... **USA**`

**Proč je to jen minor:**
Opravný blok je v zásadě správně a je v souladu s novým tělem. Jen formulace
> `podle interních dat Googlu z roku 2025`
rekapituluje starý chybný stav trochu neobratně; čtenář může na první přečtení tápat, jestli „z roku 2025“ popisuje původní chybné tvrzení, nebo původ dat. Z kontextu se to pochopit dá.

**Návrh opravy:**
- `Do srpna 2026 tu na třech místech stálo, že obrazová hledání rostou +40 % meziročně a že jde o Google data 2025. Ověřením 18. 8. 2026 se ukázalo...`

Tím se jasně oddělí, co bylo staré chybné tvrzení.

---

### 5) Nekonzistence u uvozovek a typografie po refreshi
**Citace:**
> `Když čtete, že „ChatGPT dominuje“ a hned vedle, že „ChatGPT ztrácí“, ...`

vs. jinde dříve v diffu:
> `„810 milionů **denních** uživatelů".`
a
> `Klasický „pozice 1 v Googlu" sám o sobě nestačí.`

**Proč je to minor:**
Není to faktická chyba, ale v diffu je vidět smíšené použití českých a anglických uvozovek. Po refreshi část míst opravena byla, část ne.

**Návrh opravy:**
Sjednotit na české uvozovky v celém článku:
- `„810 milionů denních uživatelů“.`
- `Klasický „pozice 1 v Googlu“...`

---

## Kontrola opravných bloků vs. tělo textu

### A) ChatGPT 900M
- **Opravný blok:** říká, že dřívější „810 milionů denních uživatelů“ bylo špatně.
- **Tělo textu po diffu:** uvádí `900 milionů týdenních aktivních uživatelů`.
- **Verdikt:** **sedí**, vnitřní rozpor jsem nenašel.

### B) CZ market share
- **Opravný blok:** říká, že dřívější `95 %+ / ~4 % / <1 %` bylo chybně a nově uvádí `81,07 / 14,05 / 3,72`.
- **Tělo textu po diffu:** uvádí stejné hodnoty.
- **Verdikt:** **sedí**, staré číslo v této části nezůstalo.

### C) Image-first / obrazové dotazy
- **Opravný blok:** správně říká, že původní `+40 % meziročně` bylo chybně a správně je `>40 % měsíc na měsíc`, `19. 5. 2026`, `USA`.
- **Tělo textu po diffu:** v obou opravených místech drží `měsíc na měsíc`, `USA`, `19. 5. 2026`.
- **Verdikt:** **sedí**, staré tvrzení v diffu už nevidím.

---

## Shrnutí
Refresh **opravil dvě hlavní věcné chyby správně**:
1. obrazové dotazy už nejsou vydávané za YoY místo MoM,
2. český podíl vyhledávačů už není tvrzen jako 95+/4/<1.

Ale diff **není čistý**:
- **BLOCKING:** tvrzení o 900M ChatGPT zůstává bez konkrétní dohledatelné citace.
- **MAJOR:** sekce o CZ trhu má po refreshi matoucí staré časové ukotvení (`Q2 2026`), a multimodální pasáž může rozmazávat, co přesně je Google/USA číslo a co je jen širší kategorie nástrojů.

Pokud chcete, můžu v dalším kroku vrátit **krátký patch návrh přesně po řádcích** jen pro tyto nalezené vady.