# Research — GEO vs. AEO (párový článek 1/3, priorita admin)

**Slug:** `geo-vs-aeo`
**Kategorie:** **analysis** (bez howto → 4/4) · **Tagy:** strategie + ai-platformy
**Řádek plánu:** `geo vs aeo` — PRIORITA 1/3 (admin 2026-07-26, GSC data)
**Datum:** 2026-07-26

---

## 📌 ZADÁNÍ ADMINA (závazné)
- GSC: „geo vs aeo" **22 impresí, pozice 59**; „aeo geo" 9 imp → exact-match stránka chybí
- **titulek i answer přesně na párovou frázi**
- **v úvodu odkaz na pilíř** `/seo-vs-geo-vs-aeo-vs-aio/` jako „kompletní srovnání všech čtyř"
- struktura: přímá odpověď → srovnávací tabulka 2 disciplín → kdy řešit kterou →
  měření (GEO = citace v chatech, AEO = Search Console) → interní odkazy /geo/, /aeo/, slovník
- vzor: `seo-vs-geo` a `ai-mode-vs-ai-overviews` (oba fungují)
- po publikaci admin propojí z párové H3 v pilíři

---

## 🔴 ANTI-KANIBALIZACE — nejdůležitější bod tohoto runu

**Pilíř UŽ MÁ H3 „GEO vs. AEO: jaký je rozdíl?"** (jeden odstavec) a **`/aeo/` má H2
„AEO vs. GEO — kde je hranice"**. Článek NESMÍ být jejich delší kopií.

| Kde | Co tam je | Co si nechá |
|---|---|---|
| **pilíř** `/seo-vs-geo-vs-aeo-vs-aio/` | H3: 1 odstavec — GEO = chaty, AEO = odpovědní funkce vyhledávače, postupy se překrývají, liší se platforma a měření | **čtyřkombinace + krátká odpověď** |
| **sekce** `/aeo/` | H2: AEO je užší než GEO; AEO = answer engines napojené na vyhledávač; v ČR větší dopad na traffic | **definice AEO + playbook** |
| **sekce** `/geo/` | H2 „GEO vs SEO"; CompareTable SEO×GEO | **definice GEO + playbook** |
| `aeo-geo-je-porad-seo` | teze že obojí je SEO (Google guide) | **teze** — odkázat |

**→ Co si vezme TENHLE článek (jinak nemá důvod existovat):**
1. **Rozhodovací kritéria** — podle čeho poznám, kterou z těch dvou řešit dřív
   (pilíř dává rozdíl, ne rozhodnutí)
2. **Jak se liší MĚŘENÍ** prakticky (GEO = ruční test/citace v chatech; AEO = GSC report)
3. **Kde se postupy překrývají a kde se opravdu rozcházejí** (nejčastější zdroj zmatku)
4. **Časté omyly** v páru GEO/AEO

## ✅ FAKTA Z VLASTNÍHO WEBU (konzistence, ověřeno grepem 2026-07-26)

**GEO** (`/geo/`): optimalizace webu a obsahu tak, aby ho AI nástroje (ChatGPT,
Perplexity, Claude, Gemini) používaly jako důvěryhodný zdroj odpovědí.
**AEO** (`/aeo/`): upravuje obsah tak, aby rychle a jednoznačně odpovídal na konkrétní
dotazy — cíl: Google AI Overviews, Featured Snippets, Bing Copilot. **Užší disciplína
než GEO**; pro většinu CZ webů typicky větší přímý dopad na traffic (Google AIO čte
v ČR zatím podstatně víc lidí než chaty dohromady — podíl se liší podle vertikály).

**Měření (z vlastních článků, ověřeno):**
- **AEO** → Search Console, report „Funkce s generativní AI" (Google spustil 3. 6. 2026):
  **jen zobrazení**, žádné kliky/CTR/dotazy, **omezený rollout** → nemusíte ho vidět.
  Detail: `gsc-ai-segmenty-mereni`.
- **GEO** → ruční test dotazů napříč chaty; odpovědi se mění mezi spuštěními →
  opakovat, z jednoho běhu nevyvozovat. Detail: `test-viditelnosti-v-ai`.
- ⚠️ Ani jedno není přesné měření citací — držet konzistenci s `ai-seo-zdarma`.

**Kde se to rozchází nejvíc (jádro článku):**
- **platforma** (chaty × vyhledávač)
- **měření** (ruční test × GSC)
- **typ výsledku** (zmínka bez prokliku × zobrazení nad výsledky, taky často bez prokliku)
- **vazba na SEO**: AEO na klasickém SEO staví silněji (do AIO jdou typicky stránky,
  co už rankují — teze z pilíře); u chatů je vazba na pozice slabší
  → doložitelné čerstvým článkem `seo-vs-ai-citace-platformy` (CiteLens: Google AI Mode
  ~93 % z top-10, ChatGPT ~30 %). **Tohle je nová, datová vrstva, kterou pilíř nemá.**

## ⛔ NETVRDIT
- konkrétní podíl AIO vs chatů v ČR jako změřené číslo (web má jen „podstatně víc lidí")
- že GEO nebo AEO garantuje citace/traffic
- že CiteLens čísla platí pro ČR (turecký trh, nákupní dotazy) — jen jako ilustrace
- vlastní čísla o poměru GEO/AEO přínosu
- že jedna disciplína je „lepší" — rozhoduje cílovka a typ dotazu

## Struktura (analysis, bez howto — dle vzoru seo-vs-geo)
1. Krátká odpověď (definice obou + hlavní rozdíl) + **odkaz na pilíř hned v 1. odstavci**
2. Čím se liší (CompareTable: platforma, měření, typ výsledku, vazba na SEO)
3. Kde se naopak překrývají (postupy jsou z velké části stejné — nedělat 2 projekty)
4. Kdy řešit dřív AEO (rozhodovací kritéria)
5. Kdy dřív GEO
6. Jak se liší měření prakticky (GSC × ruční test) — s limity obou
7. Časté omyly (MistakeGrid 4×)
8. Závěr = rozhodnutí podle cílovky

## Brand voice
- GEO = Generative Engine Optimization (ne geografické SEO — zdůraznit, vzor seo-vs-geo)
- AEO = Answer Engine Optimization
- čísla česky; answer 40–60 slov, začíná definicí, **obsahuje frázi „GEO vs. AEO"**

## Interní odkazy (ověřeno 2026-07-26, všech 7 existuje)
`/seo-vs-geo-vs-aeo-vs-aio/` (pilíř, v úvodu) · `/geo/` · `/aeo/` ·
`/blog/seo-vs-geo/` · `/blog/gsc-ai-segmenty-mereni/` · `/blog/test-viditelnosti-v-ai/` ·
`/blog/seo-vs-ai-citace-platformy/` · `/slovnik/`

## CTA
Žádná prodejní (vzor seo-vs-geo nemá). Závěr = rozhodnutí podle cílovky.
