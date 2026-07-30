# Research — jak číst studie o AI viditelnosti

**Řádek plánu:** `jak cist studie o ai viditelnosti`
**Datum:** 2026-07-31 · **Kategorie:** analysis · **Tagy:** mereni, strategie

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `schema-markup-ai-citace-test` (25. 7. 2026) | Ahrefs kauzální test schema markupu. **Má sekci „Proč korelace tak dlouho klamala".** | **Kolize s jiným řádkem plánu.** Řádek `korelace vs kauzalita seo` je tímhle článkem z velké části vyčerpaný — viz § 5. Tenhle článek na něj odkazuje jako na hotový příklad, nepředělává ho. |
| `co-rozhoduje-o-ai-citaci` (28. 7. 2026) | Jedna studie (SIGIR) a její limity, sekce „Časté chyby při čtení takových studií" | Sousedí. Tam **jedna** studie do hloubky, tady **filtr na libovolnou** studii. Prolinkovat oběma směry. |
| `zero-click-ai` (refresh 28. 7. 2026) | Kolik prokliků mizí a co s tím dělat, data SparkToro | **Největší riziko.** Dělicí čára: tam *kolik ztrácíte a co s tím*, tady *proč je zrovna tohle číslo jiného druhu než ostatní*. Experiment Agarwal–Sen v zero-click-ai není. |
| `mereni-ai-mode-limity` | Co z dostupných dat o AI Mode neplyne | Sousedí, jiná rovina (vlastní data vs cizí studie). |
| `test-viditelnosti-v-ai` | Jak si udělat vlastní test | Doplněk: tenhle článek říká, kdy cizí studii nevěřit, ten druhý co si změřit sám. |

**Verdikt:** téma volné, dělicí čáry čisté.

---

## 2. Kotva — randomizovaný terénní experiment

**The Impact of Google AI Overviews on Publisher Traffic and User Experience:
Evidence from a Field Experiment**
Saharsh Agarwal (Indian School of Business), Ananya Sen (Carnegie Mellon, Heinz College)
SSRN abstract 6513059 · zveřejněno 3. 4. 2026, revidováno 17. 6. 2026 · **nerecenzováno**

| Prvek | Hodnota |
|---|---|
| Design | randomizovaný terénní experiment přes vlastní rozšíření do Chrome |
| Nábor | panel Prolific, **1 065** účastníků z USA po vyřazení |
| Větve | kontrola (běžné výsledky) / **skrytí AI Overviews** v reálném čase / přesměrování do AI Mode |
| Sběr dat | 7. 1. – 10. 2. 2026, cca 2 týdny na účastníka |
| Objem | cca **68 000** unikátních vyhledávání, AI Overviews se objevily u **41–42 %** dotazů |
| Hlavní efekt | na dotazech, kde se AI Overviews objeví, klesnou odchozí organické prokliky zhruba **z 0,61 na 0,38** na vyhledávání |
| Zero-click | z **54 % na 72 %** |
| Spokojenost | kontrola a skupina se skrytým AIO **téměř totožné** — spokojenost, kvalita informace, snadnost hledání |
| Chování po prokliku | zpětné tlačítko, odchody, čas na stránce — bez znatelného rozdílu |
| Placené prokliky | **beze změny** (posun se týká jen organiky) |
| Větev AI Mode | nižší prokliky, vyšší zero-click a **nižší spokojenost** (uváděno −1,14 bodu) |
| Zaslepení | přes **95 %** lidí ve skupině se skrytým AIO si ničeho nevšimlo |

### ⛔ Co se ověřit nepodařilo

- **Plný text.** SSRN vrací na automatizované stažení 403. Pracoval jsem s abstraktem
  a s několika nezávislými sekundárními popisy. **V článku je to přiznané.**
- **Přesné číslo.** Sekundární zdroje uvádějí **38 %** i **39,8 %**. Obojí popisuje
  stejný směr (ztráta organických prokliků na dotazech s AI Overviews) a obojí
  odpovídá zveřejněným průměrům v rámci zaokrouhlení; paper byl mezitím revidován.
  **Do článku šlo rozpětí „zhruba 38–40 %", ne jedno číslo** — a rozpor sám je
  v článku použitý jako ukázka.

---

## 3. Proč je zrovna tohle jiné než ostatní čísla v oboru

Naprostá většina tvrzení o AI viditelnosti stojí na **pozorování**: vezme se vzorek
odpovědí, spočítá se, co mají citované stránky společného, a znak se začne vydávat
za příčinu. Takový design neumí oddělit „X způsobuje citaci" od „stránky, které
by byly citované tak jako tak, mají shodou okolností X".

Randomizace ten problém oslabí tím, že o zásahu rozhodne los, ne vlastnosti účastníků.
Proto může Agarwal–Sen mluvit o **příčině** mnohem silněji než běžná korelační analýza.
Sama o sobě ale nestačí — autoři část výsledků označují za předběžnou kvůli lidem,
kteří rozšíření během sběru odinstalovali. **Audit tuhle formulaci v článku dvakrát
změkčoval; tady je srovnaná do stejné podoby.**

Druhý doložený příklad kauzálního testu už na webu máme: **Ahrefs test schema markupu**
(`/blog/schema-markup-ai-citace-test/`) — citované stránky mají schema 3× častěji,
ale při skutečném přidání se měřitelný efekt v tom testu neprojevil.

---

## 4. Filtr, který z toho plyne (jádro článku)

1. **Jmenovatel** — procento z čeho? Ze všech dotazů, nebo jen z těch, kde se funkce
   objeví? Ze zobrazení, relací, nebo uživatelů?
2. **Design** — pozorování, nebo zásah? Je někde kontrolní skupina?
3. **Vzorek** — kdo, kde, jak dlouho, na jakém zařízení. Tenhle experiment je
   **USA, desktop Chrome, panel Prolific, dva týdny** — o českém trhu neříká nic.
4. **Kdo to platil** — dodavatel, jehož byznys stojí na určité metrice, má silnou
   motivaci zkoumat hypotézy, které mu nahrávají. Nediskvalifikace, ale vyšší nárok.
5. **Co z toho plyne pro mě** — i platný výsledek nemusí mít žádnou akci.

---

## 5. Dopad na obsahový plán

Řádek `korelace vs kauzalita seo` je po vydání `schema-markup-ai-citace-test`
z velké části pokrytý (ten článek má vlastní sekci o korelaci a je postavený
právě na Ahrefs testu). **Zbytek pokrývá tenhle článek.** Řádek je proto v plánu
označený ke sloučení, ne k samostatnému zpracování.

---

## 6. Zdroje

- SSRN 6513059 — Agarwal, Sen: The Impact of Google AI Overviews on Publisher Traffic
  and User Experience: Evidence from a Field Experiment (3. 4. 2026, rev. 17. 6. 2026)
- Search Engine Journal — popis studie (38 %, 0,38 vs 0,61, zero-click 54 → 72 %)
- PPC Land — popis studie (39,8 %, 34,5 %, složení větví, 68 089 vyhledávání)
- Ahrefs — kauzální test schema markupu (zpracováno v `/blog/schema-markup-ai-citace-test/`)
