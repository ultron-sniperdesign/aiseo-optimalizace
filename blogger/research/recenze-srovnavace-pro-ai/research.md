# Research — Recenzní platformy a srovnávače jako zdroj AI citací

**Slug:** `recenze-srovnavace-pro-ai`
**Kategorie:** analysis (bez howto → 4/4 JSON-LD) · **Tagy:** duveryhodnost + strategie
**Řádek plánu:** `recenze srovnavace pro ai`
**Datum:** 2026-07-19

---

## Kanibalizace prověřena (2026-07-19)

| Článek | Co řeší | Překryv |
|---|---|---|
| `recenze-a-hodnoceni-pro-ai` (včera, díl 9) | recenze **na vlastním webu**: sběr, JSON-LD, self-serving pravidlo | Heureka/srovnávač jen 2× okrajově → **jiná vrstva** |
| `ai-brand-mentions` | zmínky obecně (média, komunity, katalogy) | tenhle jde do hloubky JEDNOHO typu zdroje + nová data |
| `ai-citace-reddit` | komunitní zdroje | 0 zmínek srovnávačů |
| `firmy-cz-pro-ai` (dnes) | Firmy.cz konkrétně | 0 zmínek Heureky/srovnávačů |

Vymezení: **vlastní web** (včerejší tutorial) vs. **cizí recenzní platformy** (tenhle článek).

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE

### 🔴 STUDIE A — SE Ranking: recenzní platformy v AI Overviews (fetch seranking.com 2026-07-19)
Dataset: **30 000 komerčních klíčových slov, 22 729 AI Overviews, USA, snímek 1. 12. 2025, 23 platforem.**
⚠️ Silně vychýleno k B2B softwaru (Gartner/G2/Capterra) — říct v článku nahlas.

- Recenzní platformy = **8,5 % všech odkazů** v AI Overviews, ale **3 z 5 nejcitovanějších domén
  jsou recenzní weby**.
- Rozdělení citací mezi recenzními platformami: **Gartner Peer Insights 26,0 % · G2 23,1 % ·
  Capterra 17,8 % · Software Advice 12,8 % · TrustRadius 8,3 %** → **top 5 = 88 %** všech citací
  recenzních platforem. Dlouhý ocas (AlternativeTo, SaaSHub, FinancesOnline): **nula**.
- **Paradox návštěvnosti** (začátek 2024 → konec 2025, organika):
  G2 **−84,5 %** (2,56 M → 397 K) · Capterra **−89 %** · TrustRadius **−92,2 %** ·
  Gartner Peer Insights **−76,5 %**.
- Podle typu dotazu — recenzní platformy se objevují v:
  **49 %** AIO u dotazů výslovně na „review" · **39,4 %** u obecných software/tools ·
  jen **17,1 %** u „best/top" dotazů.

### 🔴 STUDIE B — SE Ranking: co koreluje s citacemi ChatGPT (129 000 domén)
Dataset: **129 000 domén, 216 524 stránek, 20 oborů.** JINÁ studie než A — NEMÍCHAT.

- Domény přítomné na **více recenzních platformách** (Trustpilot, G2, Capterra, Sitejabber, Yelp)
  měly **v průměru 4,6–6,3 citací**; domény bez této přítomnosti **1,8**.
- Je to **korelace**, ne doložená příčinnost — říct výslovně.

### Interní reuse (už ověřeno v ai-citace-reddit, publikováno)
- G2 figuruje v top 10 nejcitovanějších domén souhrnných indexů 2026 (5W AI Platform Citation
  Source Index, LLM Pulse) — formulovat jako „v souhrnných přehledech 2026".
- Koncentrace citací na malý počet domén (tamtéž).

### CZ vrstva (ověřeno v předchozích runech)
- Seznam Asistent jmenuje mezi zdroji **Zboží.cz a Firmy.cz** (blog Seznam.cz, 5/2026).
  **⚠️ Heureka v tom výčtu NENÍ** — netvrdit, že je zdrojem Asistenta!
- Pro ChatGPT/Perplexity v češtině žádná ekvivalentní studie → poctivě přiznat,
  odkázat na [test viditelnosti](/blog/test-viditelnosti-v-ai/).

---

## ⛔ NETVRDIT
- **že Heureka je zdroj Seznam Asistenta** (v květnovém výčtu není)
- **míchat studii A a B** — jiné datasety, jiné AI povrchy (AIO vs ChatGPT)
- **že data platí pro český trh** — studie A je USA/B2B software, studie B globální/ChatGPT
- **příčinnost u studie B** — jen korelace
- **že zápis na platformě zajistí citaci** (stejná logika jako u Firmy.cz dnes)
- **čísla z headline „90% traffic loss"** zaokrouhlovat — použít přesné hodnoty per platforma
- nic o nákupu recenzí jako taktice — jedině jako varování

## Jádro článku

**Prostředník se přestěhoval.** Recenzní platformy ztrácejí lidské návštěvy (−76 až −92 %
organiky za dva roky), ale drží pozici v AI odpovědích (3 z 5 nejcitovanějších domén v AIO).
Lidé na G2 nechodí — G2 čtou modely a předávají závěr dál.

Z toho tři strategické pointy:
1. **Nesoutěžíte o to být citovanou doménou — soutěžíte o to být zmíněni NA ní.**
   (rozvíjí ai-brand-mentions o konkrétní typ zdroje + čísla)
2. **Koncentrace platí i uvnitř kategorie:** top 5 platforem = 88 % citací recenzních webů.
   Být „na nějaké platformě" nestačí; záleží na tom, na které pro váš segment.
3. **Typ dotazu rozhoduje:** u „review" dotazů 49 %, u „best/top" jen 17,1 % —
   platformy nejsou univerzální klíč, jsou silné tam, kde se lidé ptají na hodnocení.

CZ překlad: pro software/B2B mají smysl globální platformy (G2, Capterra). Pro českého
prodejce je doložený bod Zboží.cz + Firmy.cz (zdroje Seznam Asistenta); u Heureky a oborových
katalogů čestně: neměřeno, otestujte si.

## Chyby (→ MistakeGrid 4×)
1. **Číst pokles návštěvnosti platforem jako jejich konec** — citace rostou tam, kde klesají lidé.
2. **Být na deseti platformách místo dvou správných** — 88 % citací bere top 5 v segmentu.
3. **Zaměnit vlastní recenze a cizí platformy** — vlastní web řeší jiný článek; tohle je o zdrojích třetí strany.
4. **Kupovat nebo fingovat recenze** — porušení pravidel platforem; a text psaný prodejcem je přesně to, čemu se tenhle mechanismus vyhýbá.

## Hranice článku
- **Neradí konkrétní platformu pro konkrétní firmu** — závisí na segmentu.
- **Neměří české platformy** — data nejsou; test viditelnosti je náhrada.
- **Neřeší recenze na vlastním webu** → [recenze-a-hodnoceni-pro-ai](/blog/recenze-a-hodnoceni-pro-ai/).

## Brand voice
- Anglicismy → česky: „review platform" → **recenzní platforma**, „traffic" → **návštěvnost**.
  Povolené: G2, Capterra, Trustpilot, Gartner Peer Insights, AI Overviews, ChatGPT, Perplexity.
- Čísla česky: −84,5 %, 22 729, mezera u tisíců.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-19, všech 9 existuje)
`/blog/ai-brand-mentions/` · `/blog/recenze-a-hodnoceni-pro-ai/` · `/blog/ai-citace-reddit/` ·
`/blog/firmy-cz-pro-ai/` · `/blog/seznam-asistent-sellma/` · `/blog/srovnavaci-clanky-pro-ai/` ·
`/blog/test-viditelnosti-v-ai/` · `/blog/ai-seo-b2b/` · `/blog/jak-ai-cituje-zdroje/`

## CTA
Audit 9 990 + Pack 1 490. Bez slibu citací.
