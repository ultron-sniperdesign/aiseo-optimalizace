# Research — refresh `chatgpt-seo` (2:1 kadence)

**Slug:** `chatgpt-seo` (NEMĚNIT — článek je live od 2026-05-23)
**Typ:** refresh dle `blogger/REFRESH_QUEUE.md`
**Datum refreshe:** 2026-07-27

---

## 📌 ZADÁNÍ Z FRONTY

| Pole | Hodnota |
|---|---|
| Cílový dotaz | **„jak být citovaný v ChatGPT"** |
| Kdo nás poráží | **koraba.cz** (jediný článek přesně na frázi), Citace.com |
| Pokyny | Refokus title i answer přímo na „Jak být citovaný v ChatGPT (v Česku)". Doplnit poznatek z našeho měření: ChatGPT u obecných dotazů cituje globální EN zdroje — český web se prosadí CZ-ukotveným obsahem. Interní odkaz na `/blog/jak-ai-cituje-zdroje/` a slovník. |

Baseline (`_source/_citace-baseline/2026-07-19-dotazy.md`) navíc říká, že na dotaz
**#8 „jak být citovaný v ChatGPT"** nejsme citovaní **ani v Google AI Mode** — dotaz
tam dominuje koraba.cz. Refresh tedy míří na obě plochy.

---

## ✅ HLAVNÍ PŘIDANÁ HODNOTA — naše vlastní, dosud NEPUBLIKOVANÁ data

Ověřeno grepem 2026-07-27: baseline z 19. 7. 2026 **nikde na webu publikovaný není**
(v pilíři je jen odkaz na searchengineland jako zdroj, ne naše měření).

**Měření ChatGPT s vyhledáváním, 15 dotazů oboru AI SEO, 19. 7. 2026, jeden běh:**

| Zjištění | Číslo |
|---|---|
| dotazů, kde ChatGPT citoval **výhradně globální anglické zdroje** | **14 z 15** |
| dotazů, kde se prosadil český web | **1 z 15** |
| ten jediný dotaz | **„jak vybrat dodavatele AI SEO v Česku"** — jediný s geografickým ukotvením |
| kdo u něj byl citovaný | moburst, **relevantni.cz**, **aiseo-optimalizace.cz**, **nocarstudio.cz** → 3 ze 4 české |
| typické citované domény u zbylých 14 | searchengineland, ahrefs, arxiv, reddit, ibm.com, shopify, techradar |

**Srovnání kanálů na stejných 15 dotazech, stejný den:**

| Kanál | citací pro aiseo-optimalizace.cz |
|---|---|
| Google AI Mode | **5 z 15** (2× jako první citace) |
| ChatGPT s vyhledáváním | **1 z 15** |

→ Teze článku: **pro český web je ChatGPT výrazně tvrdší plocha než Google AI Mode
a jediná doložená cesta dovnitř vede přes geografické ukotvení obsahu.**

**Metodická poznámka, která má praktickou cenu pro čtenáře:**
bez vynuceného vyhledávání (prompt „Vyhledej na webu a odpověz s odkazy na zdroje: …")
ChatGPT odpovídá z natrénovaných dat a **necituje vůbec**. Kdo testuje bez toho, měří něco jiného.

## ⛔ LIMITY, KTERÉ MUSÍ BÝT V TEXTU

- **jeden běh**, ne opakované měření; AI odpovědi jsou nedeterministické
- **15 dotazů jednoho oboru** (AI SEO) — není to průřez trhem
- 19. 7. 2026, stav se může měnit
- z 1/15 nejde dělat procenta o „českém webu obecně"
- **netvrdit**, že CZ-ukotvení citaci zaručí — je to jediná doložená cesta v našich datech,
  ne pravidlo

## ✅ CO Z PŮVODNÍHO ČLÁNKU ZŮSTÁVÁ (ověřeno, stále platí)

- rozlišení GPTBot (trénink) × OAI-SearchBot / ChatGPT-User (vyhledávání a načtení)
- Bing jako zdroj dohledatelnosti + Bing Webmaster Tools + IndexNow
- 4 pilíře: technika → obsah → autorita → externí zmínky
- krátká odpověď 40–60 slov, hustota faktů
- pozice v Googlu ≠ záruka citace v ChatGPT

## 🔧 CO SE MĚNÍ

1. **title** → „Jak být citovaný v ChatGPT: co funguje na českém webu" (přesně cílová fráze + CZ)
2. **answer** → vede odpovědí na cílovou frázi + CZ-ukotvení jako klíčový poznatek
3. **description** → přeformulovaný na cílovou frázi
4. **keywords** → doplnit „jak být citovaný v chatgpt", „cituje chatgpt české weby"
5. **stats** → nahradit našimi čísly (14/15, 1/15, 5/15 vs 1/15)
6. **NOVÁ H2** „Cituje ChatGPT české weby? Co ukázalo naše měření" — data + limity
7. **NOVÁ H2** „Ukotvěte obsah v českém kontextu" — nový krok s konkrétními taktikami
8. **NOVÁ H2** „Jak si citovanost otestovat sami" — metodika vynuceného vyhledávání
9. **howto** → přejmenovat na cílovou frázi, doplnit CZ krok
10. **FAQ** → nová první otázka přesně „Jak být citovaný v ChatGPT?" + „Cituje ChatGPT české weby?"
11. **updated** → 2026-07-27 (published zůstává 2026-05-23)
12. **OG** → přegenerovat (mění se titulek)
13. CTA na konci → zmírnit nepodložený slib „začnete během jednoho odpoledne"

## Interní odkazy (ověřeno 2026-07-27)
`/blog/jak-ai-cituje-zdroje/` (nový, ze zadání) · `/slovnik/#citace-ai` · `/slovnik/#chatgpt` ·
`/aeo/` · `/blog/ai-seo-audit/` · `/blog/jak-strukturovat-pillar-content/` ·
`/blog/ai-citace-reddit/` · `/blog/test-viditelnosti-v-ai/` · `/blog/ai-seo-agentura-sluzby/`
(= stránka, která u toho jediného dotazu citaci získala)

## Brand voice
- „ChatGPT s vyhledáváním" (ne „ChatGPT search")
- čísla česky, měření vždy s limity
- žádné procento z n=15 prezentované jako obecná pravda
