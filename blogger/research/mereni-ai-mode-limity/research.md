# Research — Měření AI Mode: limity oddělení

**Slug:** `mereni-ai-mode-limity`
**Kategorie:** analysis (bez howto → 4/4 JSON-LD)
**Řádek plánu:** `mereni ai mode navstevnosti`
**Datum:** 2026-07-18
**Pořadí:** téma 4/5 z AI Mode série

---

## ⚠️ ODLIŠENÍ — schváleno uživatelem (2026-07-18)

Původní zadání řádku („tutorial nad GSC reportem, GA4 segmenty") je z ~85 % pokryté publikovaným
[gsc-ai-segmenty-mereni](/blog/gsc-ai-segmenty-mereni/). Uživatel schválil **úzký článek o limitech**:
tenhle text NEOPAKUJE návody, ale řeší jednu věc, kterou nikde nemáme —
**že AI Mode z dostupných dat nejde oddělit a co z toho plyne pro tvrzení.**

| Existující článek | Co pokrývá | Co já |
|---|---|---|
| `gsc-ai-segmenty-mereni` | GSC report: kde ho najít, segmentace, imprese bez kliků, vrstvy měření | odkážu jako návod, neopakuji |
| `ai-navstevnost-konverze` | GA4, kanál pro AI asistenty, kvalita návštěvy | odkážu |
| `test-viditelnosti-v-ai` | ruční test s dotazy | odkážu |
| `ai-mode-vs-ai-overviews` | povrchy se liší (13,7 % shoda citací) | **použiju jako důkaz, proč je souhrn slabý zástupce** |

---

## Intelektuální jádro článku

Data ta dva povrchy **slučují**, přestože o nich víme, že se **chovají odlišně**.
Report v Search Console je vedený za Search (AI Overviews + AI Mode) dohromady;
Ahrefs přitom naměřil, že se citované adresy obou povrchů překrývají jen ze **13,7 %**
(USA, září 2025, snímek jednotlivých vygenerování).

→ Souhrnné číslo tedy není „skoro AI Mode". Je to součet dvou věcí, u kterých víme, že se rozcházejí.
Růst souhrnu může znamenat růst v jednom povrchu, v druhém, nebo v obou — a z čísla to nepoznáme.

To je poctivá a nikde nevyslovená pointa.

## ✅ Ověřená fakta k použití

**Search Console — Generative AI features (dle našeho publikovaného článku):**
- spuštěn 3. 6. 2026, beta; zpřístupňuje se postupně, nemusí ho mít každý web
- dvě zobrazení: **Search (AI Overviews + AI Mode)** a **Discover**
- dává imprese, stránky, země, zařízení, datum
- **nedává kliky, CTR ani dotazy**
- pokrývá jen Google AI — ne ChatGPT, Perplexity, Claude

**Ahrefs (USA, září 2025):** shoda citovaných adres AI Mode vs. AI Overviews **13,7 %**;
sémantická podobnost 86 %; dřívější výzkum ~45 % citací se mění mezi vygenerováními.

**Naše data (case study MEGA DETAIL, 2026-07-17):** 200 000 zobrazení ve funkcích s generativní AI
za necelé dva měsíce; 1 867 návštěv z AI nástrojů za 12 měsíců, z toho 90 % ChatGPT.
→ ukázka toho, že i vlastní čísla jsou souhrnná: zobrazení nerozliší povrch, návštěvnost je
z drtivé většiny mimo Google.

**Google (dok. k AI funkcím):** žádné dodatečné požadavky; strukturovaná data odpovídající textu.

---

## Struktura (analysis)

1. **answer/úvod:** AI Mode nejde z běžně dostupných dat oddělit — report ho slučuje s AI Overviews,
   návštěvnost se míchá. Měřit jde souhrn a směr, ne povrch.
2. **H2: Tři zdroje a co každý o AI Mode řekne** → CompareTable
   - GSC report → imprese za Search (AIO + AI Mode dohromady), žádné kliky
   - GA4 / referraly → návštěvy z asistentů, u Google AI se z části tváří jako běžné vyhledávání
   - Ruční test → co vidíte vy v jednu chvíli, ne objem
3. **H2: Proč je souhrn slabý zástupce** → Insight key + 13,7 %
4. **H2: Co tedy jde tvrdit** → co je fakt / co indikace / co nejde
5. **MistakeGrid** — 4 chyby
6. **Insight warning** — kolísání mezi vygenerováními (~45 %)
7. **H2: Hranice článku**
8. **DoDont**, takeaways, CTA

## Co JDE tvrdit vs. NEJDE (jádro praktické části)

| Obhajitelné | Neobhajitelné |
|---|---|
| „Zobrazení ve funkcích s generativní AI Googlu vzrostla o X %" | „Máme X zobrazení v AI Mode" |
| „Z AI asistentů přišlo N návštěv, převážně z ChatGPT" | „Z AI Mode přišlo N návštěv" |
| „V opakovaném testu nás na dotaz D zmínily 4 z 5 běhů" | „Jsme v AI Mode vidět na dotaz D" |
| „Souhrn roste, povrch neumíme rozlišit" | „Rosteme v AI Mode" |

## Chyby (→ MistakeGrid)

1. **Vydávat souhrn za AI Mode** — nejčastější; report slučuje dva povrchy.
2. **Číst imprese jako návštěvnost** — report kliky nedává.
3. **Závěr z jednoho spuštění** — citace mezi běhy kolísají (~45 %).
4. **Míchat Google AI a asistenty** — GSC nepokrývá ChatGPT ani Perplexity; naše návštěvnost je z 90 % ChatGPT.

## Hranice

- Nejde o návod na nástroje — na to jsou tři odkazované články.
- Stav k 18. 7. 2026; report je beta a může se změnit (pak tenhle článek aktualizovat).
- Neříká, že měřit nemá smysl. Říká, co z čísel plyne a co ne.

## Brand voice

- Tohle je „poctivostní" článek — přesně pozice webu. Bez cynismu, prakticky.
- Anglicismy → česky: „imprese/zobrazení" (zobrazení preferovat), „referral" → **odkazující zdroj**,
  „report" je zavedené, OK. Povolené: AI Mode, AI Overviews, Search Console, GA4, ChatGPT, Google.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřit!)

- `/blog/gsc-ai-segmenty-mereni/` — návod na report
- `/blog/ai-navstevnost-konverze/` — GA4
- `/blog/test-viditelnosti-v-ai/` — ruční test
- `/blog/ai-mode-vs-ai-overviews/` — proč se povrchy liší (důkaz)
- `/blog/ai-mode-a-eshopy/` — kde jsme na tenhle limit narazili
- `/blog/case-study-megadetail-ai-navstevnost/` — naše souhrnná data

## CTA

Audit 9 990 (nastaví měření a řekne, co z čísel plyne) + Pack 1 490. Bez slibu, že změříme AI Mode.
