## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je tematicky relevantní, aktuální k 30. 5. 2026, má dobrý slug, funkční interní odkazy a konkrétní CTA na Audit i Pack. Neobsahuje zakázané formulace typu „garantujeme #1“. Před publikací ale doporučuji opravit několik věcných a formulačních míst, hlavně kvůli doložitelnosti, mírnému overclaimu a přesnosti měření přes UTM.

---

## Nálezy a cílené opravy

### [WARNING] Klíčové statistické tvrzení je bez zdroje

**Problémové místo:**

> „Podle dostupných analýz konvertuje výrazně líp než klasické organické vyhledávání.“

Podobné formulace se opakují ve frontmatteru, úvodu i FAQ. Tvrzení je v kontextu roku 2026 věcně obhajitelné, ale článek nikde neuvádí konkrétní zdroj ani alespoň rozsah. Pro AI citovatelnost i důvěryhodnost je „podle dostupných analýz“ slabé.

**Návrh opravy:**

Doplnit jednu krátkou zdrojovou větu do části „Proč AI návštěvníci konvertují líp“, např.:

> Veřejné analýzy z let 2025–2026 uvádějí u AI návštěv výrazně vyšší konverzní poměry než u klasického organiku; konkrétní hodnoty se ale liší podle oboru, definice konverze a vzorku.

Ideálně přidat odkazy na 1–2 veřejné zdroje nebo poznámku pod čarou. Pokud nechcete uvádět čísla v hlavním textu, ponechte alespoň zdrojové ukotvení.

---

### [WARNING] „Většina AI hodnoty“ je silnější tvrzení než doložený fakt

**Problémové místo:**

> „Bez správného setupu vám tak většina AI hodnoty zůstává neviditelná.“

A ve frontmatter description:

> „…bez správného měření vám většina spadne do přímé návštěvnosti.“

Fakticky je obhajitelné tvrdit, že značná část nebo většina AI návštěv může spadnout do direct kvůli chybějící referrer hlavičce. Ale „většina AI hodnoty“ je silnější claim: hodnota ≠ počet návštěv. Bez dat o konverzích nelze automaticky tvrdit, že se ztratí většina hodnoty.

**Návrh opravy:**

Změnit na opatrnější a přesnější formulaci:

> Bez doplňkového měření vám může významná část AI návštěv spadnout do přímé návštěvnosti a zůstat v běžných reportech neviditelná.

Ve description:

> AI návštěvníci často konvertují lépe než klasický organik, ale část návštěv bez referrer hlavičky spadne v GA4 do direct. Jak je měřit v roce 2026.

---

### [WARNING] UTM doporučení může být špatně pochopené jako značení interních odkazů

**Problémové místo:**

> „Doplňte UTM značky v textu pro AI“

> „V obsahu, který má šanci být citovaný AI, používejte odkazy s UTM parametry.“

Takhle napsané to může svádět ke značení běžných interních odkazů na webu. To je rizikové, protože interní UTM parametry mohou rozbíjet atribuci a přepisovat původní zdroj návštěvy. UTM jsou vhodné hlavně pro odkazy, které publikujete mimo vlastní web nebo ve veřejně sdílených materiálech, kde chcete zachytit přenos přes AI.

**Návrh opravy:**

Upřesnit ve frontmatter `howto` i v checklistu:

> UTM používejte hlavně u odkazů, které sami publikujete mimo vlastní web — například v dokumentech, návodech, veřejných profilech, PDF materiálech nebo distribuovaných šablonách. Neznačkujte běžné interní odkazy v navigaci a obsahu webu, aby se nepřepsala původní atribuce v GA4.

A změnit nadpis kroku:

> „Doplňte UTM značky u odkazů, které publikujete mimo web“

---

### [WARNING] GA4 AI Assistant channel potřebuje přesnější datové ukotvení

**Problémové místo:**

> „Google v květnu 2026 přidal do Default Channel Group v Google Analytics 4 nový kanál AI Assistant.“

V kontextu zadání je klíčový fakt přesnější: 13. 5. 2026. Článek je aktuální k 30. 5. 2026, takže přesné datum zvýší důvěryhodnost a citovatelnost.

**Návrh opravy:**

Upravit na:

> Google 13. 5. 2026 přidal do výchozí skupiny kanálů Google Analytics 4 nový kanál **AI Assistant**. Funguje automaticky pro GA4 účty a není potřeba ho ručně zapínat.

Současně doporučuji nahradit anglický termín:

> „Default Channel Group“

za:

> „výchozí skupina kanálů GA4 / Default Channel Group“

---

### [WARNING] Některé formulace tvrdí obecnou pravdu místo trendu

**Problémové místo:**

> „AI návštěvníci konvertují líp“

> „AI návštěvy jsou kvalifikovanější“

> „AI traffic tak nezůstane podceněný…“

Tón je převážně věcný, ale několik vět zní kategoricky. Vzhledem k tomu, že výkon závisí na oboru, typu konverze a vzorku, je bezpečnější držet formulace jako „často“, „bývají“, „mohou“.

**Návrh opravy:**

- Nadpis změnit z:

> „Proč AI návštěvníci konvertují líp“

na:

> „Proč AI návštěvníci často konvertují líp“

- V checklistu změnit:

> „AI návštěvy jsou kvalifikovanější“

na:

> „AI návštěvy bývají kvalifikovanější“

- V úvodu ponechat „Podle dostupných analýz“, ale ideálně doplnit „často“:

> „Podle dostupných analýz často konvertuje výrazně líp než klasické organické vyhledávání.“

---

### [WARNING] Anglicismy jsou místy bez vysvětlení

**Problémové místo:**

> „setupu“

> „AI trafficu“

> „Organic Search report“

> „baseline“

> „benchmark“

> „Default Channel Group“

Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ článek nepoužívá — to je v pořádku. Přesto je část slovníku zbytečně anglická a může oslabit srozumitelnost pro běžného klienta.

**Návrh opravy:**

- „setup“ → „nastavení“
- „AI traffic“ → „AI návštěvnost“
- „Organic Search report“ → „report organického vyhledávání“
- „baseline“ → „výchozí úroveň / srovnávací základ“
- „benchmark“ → „pevné srovnávací číslo“
- „Default Channel Group“ → „výchozí skupina kanálů GA4 / Default Channel Group“

Příklad opravené věty:

> Pokud se díváte jen na report organického vyhledávání, AI návštěvnost neuvidíte celou.

---

### [TIP] Frontmatter `answer` je dobrý, ale může být ještě samostatnější

**Problémové místo:**

> „…často ale chodí bez referrer hlavičky…“

Answer má 49 slov, začíná definicí a dává samostatný smysl. To splňuje požadavek 40–60 slov. Slabší místo je jen technický termín „referrer hlavička“ bez vysvětlení.

**Návrh opravy:**

Lehce zpřesnit bez prodloužení mimo limit:

> AI návštěvnost je provoz, který na web posílají AI nástroje jako ChatGPT, Perplexity, Claude a Gemini. Podle dostupných analýz často konvertuje lépe než klasické organické vyhledávání, část návštěv ale přijde bez referrer hlavičky, tedy informace o zdroji. V GA4 proto může spadnout do přímé návštěvnosti.

Pozor: tato verze má přibližně 51 slov, tedy stále v limitu.

---

### [TIP] Prvních 100 slov těla funguje, ale obsahuje slabší výraz „setup“

**Problémové místo:**

> „Bez správného setupu vám tak většina AI hodnoty zůstává neviditelná.“

První odstavec je jinak velmi dobrý: definuje téma, vysvětluje problém a stojí samostatně. Pro citovatelnost a brand voice je ale lepší opravit „setup“ a overclaim.

**Návrh opravy:**

> Bez doplňkového měření vám tak významná část AI návštěv zůstane v běžných GA4 reportech skrytá.

---

### [TIP] FAQ je relevantní, ale jedna odpověď používá nevysvětlený „baseline“

**Problémové místo:**

> „…nad klasickým organickým baseline…“

FAQ otázky jsou reálné a odpovědi jsou převážně sebestačné. Tohle je zbytečný anglicismus.

**Návrh opravy:**

> „…nad běžnou úrovní konverzí z klasického organického vyhledávání…“

Celá věta může znít:

> Podle dostupných analýz z let 2025–2026 ano — uváděné rozsahy konverzních poměrů u AI návštěvníků se pohybují výrazně nad běžnou úrovní klasického organického vyhledávání.

---

### [TIP] SEO: cílové KW „ai referral“ je jen ve frontmatteru, ne v těle

**Problémové místo:**

Cílové KW zahrnuje:

> „ai referral“

V textu se pracuje s „AI návštěvnost“, ale samotný výraz „AI referral“ se v těle článku prakticky neobjevuje. Vzhledem k cílovému dotazu by bylo vhodné ho jednou přirozeně vysvětlit.

**Návrh opravy:**

Do úvodu nebo první části doplnit jednu větu:

> V anglických reportech a analýzách se pro tenhle typ návštěv často používá označení **AI referral** — tedy návštěva z AI nástroje nebo AI asistenta.

Tím se pokryje dotaz bez zbytečného anglicismu.

---

### [TIP] Gramatická drobnost ve frontmatter `stats`

**Problémové místo:**

> „AI návštěvníci přichází po průzkumu — blíž k rozhodnutí o nákupu“

Formálně správněji:

> „AI návštěvníci přicházejí po průzkumu — blíž k rozhodnutí o nákupu“

**Návrh opravy:**

Upravit label na:

> „AI návštěvníci přicházejí po průzkumu — blíž k rozhodnutí o nákupu“

---

### [TIP] Chyba v imperativu v komponentě Mistake

**Problémové místo:**

> `fix="Rozliště zdroje v segmentu."`

Správně má být „Rozlište“.

**Návrh opravy:**

> `fix="Rozlište zdroje v segmentu."`

---

### [TIP] CTA je správně produktové, ale může být o něco konkrétnější

**Problémové místo:**

> „Pokud chcete nezávisle posoudit, kolik AI hodnoty na váš web reálně doráží a kde ji ztrácíte, pomůže produktový AI SEO audit za 9 990 Kč. Pokud chcete postupovat sami podle hotové předlohy, je tu AI SEO Wireframe Pack za 1 490 Kč.“

CTA splňuje zadání: směřuje na Audit i Pack, není generické „kontaktujte nás“. Drobná slabina je opět výraz „AI hodnota“.

**Návrh opravy:**

> Pokud chcete nezávisle posoudit, kolik AI návštěvnosti a konverzí na váš web reálně doráží a kde se ztrácí v měření, pomůže [AI SEO audit za 9 990 Kč](/audit/). Pokud chcete postupovat sami podle hotové předlohy, použijte [AI SEO Wireframe Pack za 1 490 Kč](/pack/).

---

## Co je v pořádku

- Titulek má cca 57 znaků a klíčové téma je na začátku.
- Meta description je v limitu 70–160 znaků.
- Slug `ai-navstevnost-konverze` je smysluplný.
- `answer` splňuje délku 40–60 slov a začíná definicí.
- Rok 2026 je použit konzistentně; `updated: "2026-05-30"` není budoucí datum.
- Interní odkazy jsou relevantní a nekolidují přímo s `/audit/`.
- CTA vede na konkrétní produkty: Audit 9 990 Kč a Pack 1 490 Kč.