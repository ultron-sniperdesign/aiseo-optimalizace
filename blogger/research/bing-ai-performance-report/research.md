# Research — Bing AI Performance report

**Řádek plánu:** `bing ai performance report`
**Datum:** 2026-08-03 · **Kategorie:** analysis · **Tagy:** mereni, ai-platformy

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `bing-seo-pro-ai` (24. 5.) | Jak se do Bingu dostat: ověření webu, sitemapa, IndexNow | **Čistá dělicí čára** — tam „jak se dostat dovnitř", tady „co vám o tom Bing řekne". Nula zmínek o AI Performance. Prolinkovat. |
| `gsc-ai-segmenty-mereni` | GSC report Generative AI features | **Přesný protějšek.** Srovnání obou reportů je jádro tohohle článku. |
| `jak-ai-cituje-zdroje` | Mechanika citací v AI | Sousedí. |
| `test-viditelnosti-v-ai` | Ruční test napříč platformami | Doplněk: co dělat, když oficiální report nemáte. |

**Verdikt: téma volné.** Report na webu nikde není.

---

## 2. Primární zdroj — blog Bing Webmaster, ověřeno 3. 8. 2026

Post **„Introducing AI Performance in Bing Webmaster Tools Public Preview", 10. 2. 2026.**

> Pozn.: sekundární zdroje uvádějí 9. 2. 2026. Držím se data z Microsoftu.

### Metriky — pojmenované Microsoftem

| Metrika | Co uvádí Microsoft |
|---|---|
| **Total Citations** | kolikrát byl web citovaný jako zdroj |
| **Average Cited Pages** | denní průměr unikátních citovaných URL |
| **Grounding queries** | *„Shows the key phrases the AI used when retrieving content that was referenced in AI-generated answers."* |
| **Page-level citation activity** | které konkrétní URL se citují |
| **Visibility trends over time** | vývoj v čase |

### Pokryté plochy

Microsoft Copilot · AI shrnutí v Bingu · **„select partner integrations"** (partnery nejmenuje)

### ⛔ Dvě věty, které nikdo necituje

1. **Data jsou vzorek:** *„The data shown represents a sample of overall citation activity."*
   Total Citations tedy **není počet**, je to vzorek. Kdo to bere jako absolutní číslo, počítá špatně.
2. **Citace není pozice:** *„This reflects how often pages are cited, not page importance, ranking, or placement."*

Stav: **public preview.** O klicích, CTR ani návštěvnosti post nemluví vůbec.

---

## 3. Jádro článku — srovnání s Googlem

Tohle je to, co čtenáři nikde jinde nedostanou, a obojí mám ověřené u primárních zdrojů
(Google z Run82, 2. 8. 2026):

| | **Bing AI Performance** | **GSC Generative AI features** |
|---|---|---|
| Spuštěno | 10. 2. 2026 | 3. 6. 2026 |
| Hlavní metrika | citace | imprese |
| **Dotazy** | **ano — grounding queries** | **ne** |
| Kliky / CTR | ne | ne |
| Rozpad | stránky, čas | stránky, země, zařízení, datum |
| Úplnost dat | **přiznaný vzorek** | neuvedeno |
| Plochy | Copilot, AI shrnutí v Bingu, nejmenovaní partneři | AI Overviews, AI Mode, Discover |
| Dostupnost | public preview | postupné zpřístupňování, začalo v Británii |

**Nejzajímavější řádek je ten třetí.** Bing dává něco, co Google nedává vůbec: fráze,
kterými si AI sama hledá podklad. Nejsou to dotazy uživatele — jsou to dotazy, které si
model sestaví, když jde pro zdroj.

---

## 4. ⛔ Čeho se v článku vyvarovat

- **Nepřenášet grounding queries na ChatGPT ani Perplexity.** Microsoft mluví o svém
  prostředí. O vnitřních dotazech jiných nástrojů doklad nemám.
- **Netvrdit, že Bing report je „lepší" než GSC.** Měří jinou věc a přiznává vzorek.
- **Nedopočítávat z Total Citations podíl ani trend jako z úplných dat** — je to vzorek.
- **Nejmenovat partnerské integrace.** Microsoft je neuvedl; dohady nepatří do textu.
- **Nepřehánět význam pro český web.** Podíl Bingu v ČR je malý; hodnota reportu je
  v tom, co ukazuje o chování AI, ne v objemu.

---

## 5. Teze článku

> Bing má od února 2026 report o citacích v AI odpovědích a dává v něm jednu věc,
> kterou Google nedává vůbec: fráze, kterými si AI hledá podklad. Zároveň ale sám píše,
> že jde jen o vzorek — takže se z těch čísel nedá počítat. Pro český web to není
> nástroj na reporting, ale na pochopení, jak se AI k obsahu dostává.

---

## 6. Zdroje

- blogs.bing.com/webmaster — *Introducing AI Performance in Bing Webmaster Tools Public Preview*, 10. 2. 2026, čteno 3. 8. 2026
- vlastní research `gsc-ai-segmenty-mereni/research-refresh-2026-08.md` — parametry GSC reportu ověřené 2. 8. 2026
- vlastní články: `bing-seo-pro-ai`, `gsc-ai-segmenty-mereni`, `test-viditelnosti-v-ai`
