# Závěrečný audit C5 — Srovnání s konkurencí v AI

**Datum:** 17. 9. 2026
**Auditovaný soubor:** `src/content/articles/srovnani-s-konkurenci-v-ai.mdx`
**Zásah do článku:** žádný
**Verdikt:** **PUBLIKOVAT**

## 1. Slepý audit aktuálního článku

Tato část vznikla pouze z aktuálního článku, pravidel projektu, dokumentu `marketing/05-messaging-a-tonalita.md` a nezávisle otevřených primárních zdrojů. Starší soubory `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md` byly přečteny až po uzavření této části.

### Výsledek

Nenašel jsem žádný nový doložitelný publikační problém. Článek může být publikován v aktuálním znění.

### Faktická správnost a overclaim

- **ChatGPT Shopping:** Článek správně omezuje popsané faktory na nákupní výsledky a odděluje výběr produktu od pořadí obchodníků. OpenAI uvádí dotaz a kontext, strukturovaná data od první a třetí strany, další obsah, cenu, dostupnost, kvalitu a roli výrobce či hlavního prodejce. Zdroj: [Shopping with ChatGPT Search](https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search).
- **Shopping research:** Tvrzení o veřejných produktových informacích, datech obchodníků a nutnosti ověřit cenu a dostupnost u prodejce odpovídá dokumentaci. Zdroj: [Using shopping research in ChatGPT](https://help.openai.com/en/articles/12911370-using-).
- **Google AI funkce:** Index, způsobilost k úryvku, zahrnutí v ovládacím prvku Search generative AI, query fan-out i absence záruky zobrazení jsou popsány správně. Zahrnutí je skutečně výchozí volba a potomci mohou nastavení dědit. Zdroje: [Google: generativní AI ve Vyhledávání](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Search generative AI control](https://support.google.com/webmasters/answer/16908024).
- **Gemini odkazy:** Nápověda rozlišuje zdroje a související obsah a výslovně říká, že odkazy nejsou u každé odpovědi. Článek z toho přiměřeně vyvozuje, že seznam odkazů není úplným záznamem vzniku hodnocení. Zdroj: [Gemini Apps Help](https://support.google.com/gemini/answer/14143489?hl=en).
- **Seznam Asistent:** Seznam potvrzuje umístění inzerátů pod odpovědí, označení „Sponzorované výsledky“ a oddělení reklam od odpovědi Asistenta. Zdroj: [oznámení Seznamu](https://blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/).
- **ChatGPT Search a personalizace:** Dokumentace potvrzuje možné použití paměti při přeformulování dotazu i vliv přibližné či přesné polohy. Nový chat sám tyto podmínky nevypíná. Zdroj: [Searching the web with ChatGPT](https://help.openai.com/en/articles/9237897-chatgpt-search).
- **Citovaný preprint:** Datum zveřejnění 14. 9. 2026, šest modelů, pět kategorií produktů a služeb, bezstavová API volání bez webového vyhledávání, rozdíl mezi výskytem a pořadím, dvě diagnostikované značky, malá ručně psaná sada sond i nekauzální povaha pozorovaných souvislostí odpovídají práci. Článek výslovně nepřenáší výsledky na české nákupní rozhraní. Zdroj: [Malthouse et al., arXiv 2609.16304](https://arxiv.org/html/2609.16304v1), zejména části 3.1, 4.3 a 5.3.
- **Kvalitní srovnání:** Doporučení uvádět důkazy, relevantní rozdíly, přínosy, nevýhody a vhodnost pro různé situace odpovídá pokynům Googlu. Článek z nich neodvozuje záruku změny AI doporučení. Zdroj: [Google: Write high quality reviews](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews).
- **Manipulativní obsah:** Parafráze zásad proti vytváření variant stránek hlavně kvůli manipulaci s pořadím nebo generativními odpověďmi respektuje přesný kontext zdroje a nešíří ji na legitimní srovnávací obsah.
- **Audit AI viditelnosti:** CTA uvádí správnou cenu **3 600 Kč bez DPH**. Rozsah odpovídá datovému modulu nabídky: technická dostupnost, obsahové mezery proti konkurenci a prioritní seznam úprav. Závěr výslovně odmítá záruku konkrétního pořadí.

Článek opakovaně odděluje faktickou opravu od změny doporučení, pozorování od příčiny a reklamu od organické odpovědi. Nenašel jsem absolutní slib, skrytou kauzalitu ani zobecnění studie nad její vzorek.

### Brand voice a jazyk

- Převládá edukativní hlas A: věcný, srozumitelný a bez vyvolávání strachu.
- Odborné pojmy jsou vysvětlené nebo zasazené do konkrétní situace. „Indexace“ není použita jako nevysvětlená zkratka; text říká, že Google stránku „zařadil do indexu“.
- Pokyny používají jednotné vykání a přirozené české vazby.
- Prodejní odstavec je konkrétní a přiměřený. Nevyužívá naléhavost, prvenství ani garantovaný výsledek.
- Mechanický průchod `jazyk-check.py` proti aktuálnímu `JAZYK_SLOVNIK.md`: **2 053 slov, 0 nálezů**.

### Formální kontrola

| Prvek | Stav | Ověření |
|---|---|---|
| `title` | Vyhovuje | 54 znaků; konkrétní téma i očekávaný přínos. |
| `seoTitle` | Vyhovuje | 54 znaků; shodný s titulkem, bez přehnaného slibu. |
| `description` | Vyhovuje | 139 znaků; popisuje problém, třídění příčin i další krok. |
| Krátká odpověď | Vyhovuje | 52 slov; požadovaných 40–60, odpovídá přímo a obsahuje důležité omezení. |
| H2 | Vyhovuje | Všech 5 H2 obsahuje `<span class="hl">`, `<strong>` i prostý spojovací text. |
| FAQ | Vyhovuje | 6 otázek; odpovědi jsou samostatné, konkrétní a neopakují nepodložené sliby. |
| CTA | Vyhovuje | Cena, DPH, rozsah služby i omezení očekávání jsou uvedené. |
| Interní odkazy | Vyhovuje | `/geo/` a `/audit/` odpovídají kontextu. |
| Externí zdroje | Vyhovuje | Osm odkazů vede na deklarované primární zdroje. |

## 2. Kontrola předchozích auditů a vypořádání

Po dokončení slepého auditu byly přečteny `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md`. Výsledek: **všech 36 nálezů je v aktuálním článku skutečně vypořádaných**. Žádný nález nebyl odmítnut, takže nebylo třeba ověřovat důkaz k odmítnutí.

### Faktický audit — 3 ze 3 uzavřeny

| ID | Kontrola aktuálního článku | Stav |
|---|---|---|
| F1 — rozsah diagnostické části preprintu | Pasáž uvádí jen Craftsman a L.L.Bean, malou ručně psanou sadu, formulace z marketingových materiálů, výrazné nápovědy a požadavek na větší náhodný vzorek. To přesně odpovídá částem 4.3 a 5.3 preprintu. | **Uzavřeno** |
| F2 — produkty a služby | SourceCard nyní říká „pět kategorií produktů a služeb“, což odpovídá metodice včetně lodních plaveb. | **Uzavřeno** |
| F3 — výchozí zahrnutí v Search Console | Text doplňuje výchozí zahrnutí a kontrolu vyloučení vlastníkem či nadřazeným nastavením. To odpovídá nápovědě Search Console. | **Uzavřeno** |

### Jazykový audit — 33 ze 33 uzavřeno

| ID | Ověřená oprava v aktuálním textu | Stav |
|---|---|---|
| J1 | Answer mluví o „výsledku srovnání“, drží přímé oslovení a konkretizuje rozdíly, podle nichž se zákazník rozhoduje. | Uzavřeno |
| J2 | Úvod rozlišuje doložení správné ceny a opravu chybného údaje. | Uzavřeno |
| J3 | Podmínky Googlu jsou rozvedené slovesy: zařazení do indexu, povolený úryvek, zahrnutí v nastavení. | Uzavřeno |
| J4 | Původní chybná vazba „model dokáže vybavit“ v článku není; pasáž přirozeně říká, že modely si značky dokázaly vybavit. | Uzavřeno |
| J5 | Tabulka používá „Při stejném postupu se značka objevuje častěji.“ | Uzavřeno |
| J6 | Závěr používá správnou vazbu „čemu věnovat čas“. | Uzavřeno |
| J7 | Neurčité „včas“ bylo z titulku odstraněno; titulek končí „změnit na webu“. | Uzavřeno |
| J8 | FAQ říká, že AI už může uvádět správnou cenu, přestože doporučuje jinou nabídku. | Uzavřeno |
| J9 | FAQ začíná konkrétně „Sponzorovaný výsledek poznáte…“. | Uzavřeno |
| J10 | Úvod používá „Odlišné požadavky zákazníků mohou vést k rozdílným doporučením.“ | Uzavřeno |
| J11 | Příklad ověřuje „skladovou dostupnost“, ne sklad. | Uzavřeno |
| J12 | Tabulka říká, že konkurent nabízí variantu v nižším rozpočtu. | Uzavřeno |
| J13 | Pokyn končí jednotným vykáním „nepřebírejte jako fakt“. | Uzavřeno |
| J14 | Text určuje, v čem a pro koho je firma horší, a výslovně pojmenovává rozdíl mezi údajem a soudem. | Uzavřeno |
| J15 | Text používá přirozenou vazbu „zakládá srovnání hlavně na recenzích“. | Uzavřeno |
| J16 | Slovosled je „Dokumentace ChatGPT“ a poskytovatelé dat jsou popsaní běžnou češtinou. | Uzavřeno |
| J17 | Shopping research pracuje s „údaji od zapojených obchodníků“. | Uzavřeno |
| J18 | Text doporučuje opravit údaje o nabídce a mluví jen o změně doporučení. | Uzavřeno |
| J19 | Seznam „představil“ inzeráty pod odpověďmi. | Uzavřeno |
| J20 | H2 říká „Při srovnání s konkurencí zachovejte podmínky“. | Uzavřeno |
| J21 | Text říká, že dotaz obě jména obsahuje, a popisuje nabídnutí značky bez nápovědy. | Uzavřeno |
| J22 | API je při prvním výskytu vysvětlené jako programové rozhraní. | Uzavřeno |
| J23 | Pasáž používá stejné označení dotazů a přirozenou vazbu „souvislost mezi“. | Uzavřeno |
| J24 | Článek sjednocuje terminologii na testy a uvádí „v kolika z kolika testů“. | Uzavřeno |
| J25 | Text popisuje, jak ChatGPT dotaz „přeformuluje“, a podmínky při opakování „zachová“. | Uzavřeno |
| J26 | Limit malé série je popsán konkrétně: jen výsledky dané série, nikoli podíl mezi všemi zákazníky. | Uzavřeno |
| J27 | Text říká „na stránce s detailem nabídky“. | Uzavřeno |
| J28 | Checklist používá jasné „Co srovnání neříká“. | Uzavřeno |
| J29 | Cizí zdroj je formulován jako podmínka a rozhodnutí o opravě je připsáno vydavateli. | Uzavřeno |
| J30 | Věta používá přirozené „hlavně kvůli manipulaci s pořadím nebo generativními odpověďmi“. | Uzavřeno |
| J31 | Tabulka mluví o změně „v této sérii testů“. | Uzavřeno |
| J32 | Obchodní dopad je popsán jako doložení, že zákazníka přivedl AI nástroj. | Uzavřeno |
| J33 | CTA místo žargonu vysvětluje místa, kde proti konkurenci chybí potřebný obsah. | Uzavřeno |

Kontrolní hledání původních problematických formulací v aktuálním souboru vrátilo **0 výskytů**.

## 3. Nové nálezy

**Žádné.** Proto zde nejsou položky s citací, problémem, důkazem, opravou a závažností. Uvádět nález bez primárního důkazu by porušilo zadání závěrečného auditu.

## Konečný verdikt

**PUBLIKOVAT.** Aktuální článek je fakticky opatrný, jazykově čistý, formálně úplný a všechny dřívější nálezy jsou prokazatelně vypořádané.
