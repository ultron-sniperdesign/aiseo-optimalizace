# Research — jak funguje chatgpt

**Řádek plánu:** `jak funguje chatgpt` (skupina D kolizní revize — ověřeno volné)
**Datum:** 2026-07-28 · **Kategorie:** analysis
**Hledanost:** 700/měs, meziročně +259 % (Marketing Miner, 7/2026)

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `chatgpt-seo` | Optimalizační postup + náš test na 15 CZ dotazech | **Nekanibalizovat.** Tenhle článek je mechanismus pro začátečníky, ten je návod. Prolinkovat. |
| `jak-ai-cituje-zdroje` | Výběr zdrojů napříč platformami | Sousedí — tam srovnání platforem, tady jeden nástroj do hloubky. |
| Nic na `knowledge cutoff`, `trénink versus`, `bez vyhledávání` | — | **Téma volné.** |

---

## 2. Podklady

- ChatGPT čerpá ze dvou zdrojů: natrénovaný text a živě dohledané stránky.
- Hranice znalostí (knowledge cutoff) se liší verzi od verze; u generace GPT-5
  se uvádějí data v roce 2025.
- Bez živého vyhledávání odpověď obvykle nenese citace.
- Průběh vyhledávání: přepis dotazu do vlastních vyhledávacích dotazů → index →
  omezený výběr stránek → syntéza s odkazy.
- **Datový bod:** v jedné analýze cestovatelských dotazů zhruba třetina neskončila
  živým vyhledáváním (SALT.agency). Jeden vzorek, jeden obor — doklad, že se to děje,
  ne číslo k počítání.

---

## 3. Co určilo výslednou podobu — verdikt prvního auditu

První audit dal ostrou diagnózu: *„text opakovaně převádí rozumné pracovní
zjednodušení na údajně známý mechanismus."* Konkrétní přestřely:

| Původně | Problém | Výsledek |
|---|---|---|
| „ChatGPT odpovídá dvěma způsoby" | vydává vnější pozorování za interní architekturu | „navenek se chová dvěma způsoby" + úvodní box, že jde o funkční model, ne popis pipeline |
| „pak odpověď nemá odkazy" | absolutní; chybějící odkazy nejsou důkaz režimu | „obvykle nemá" + „silný signál, ne důkaz" |
| „napojení na infrastrukturu Bingu" | historické partnerství podané jako současný mechanismus | „pravděpodobná, ne potvrzená cesta; OpenAI nepopisuje, kam dotazy posílá" |
| „načte několik vrácených stránek" | konkrétní rozsah bez opory | „pracuje s omezeným výběrem výsledků" |
| „vy to neovlivníte" / stats „0" | ignoruje, že uživatel si vyhledávání může vyžádat | omezeno na provozovatele webu, „přímo vynutit nemůže" |
| „GPT-5.5, prosinec 2025" | produktově nepřesné, bez doložení | zobecněno na „liší se verzi od verze, u generace GPT-5 se uvádějí data v roce 2025" |
| „model si je vědom" | antropomorfismus | „systém vyhodnotí" |
| „optimalizace na přesnou frázi se míjí účinkem" | přehnané | „samotná nestačí, důležitější je pokrýt téma" |

**Doplněno navíc:** rozlišení tří vrstev (natrénovaná znalost / živé načtení /
zobrazení odkazů v rozhraní), diagnostický postup na 10–20 dotazech a jeho limity.

Druhý audit pak našel zbytkovou jistotu v **titulku a závěru** — obojí se vrátilo
k „dva režimy" jako k faktu. Titulek změněn z „dva režimy a jen jeden vás cituje"
na „kdy vás může citovat a kdy ne" (cílová fráze `jak funguje chatgpt` zůstala),
závěr přeformulován na „dva navenek viditelné způsoby".

---

## 4. Zdroje

- SALT.agency — analýza cestovatelských promptů v ChatGPT
- LLM Pulse, Generative Report — popis zdrojů dat ChatGPT (trénink vs. živé vyhledávání)
- Přehledy knowledge cutoff dat podle modelů (2026)
