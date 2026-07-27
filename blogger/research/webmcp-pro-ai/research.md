# Research — WebMCP: co to je a co s tím dnes dělat

**Slug:** `webmcp-pro-ai` · **Kategorie:** analysis (bez howto → 4/4) · **Tagy:** technicke-zaklady + strategie
**Řádek plánu:** `webmcp pro ai` · **Datum:** 2026-07-27

---

## 🔴 KOLIZE — `lighthouse-ai-check` (6/2026) už WebMCP definuje

17 zmínek. Konkrétně tam je: definice („frontendový protokol, který webu umožňuje nabídnout
AI agentovi konkrétní akce"), odlišení od backendových MCP serverů, že je experimentální,
pro koho má smysl (e-shopy, booking, SaaS), FAQ „Co je WebMCP a musím to implementovat?",
podsekce „### 2. WebMCP" a doporučení nechat implementaci **na konec** priority oprav
(„implementace je náročná").

**→ Nepsat znovu: co to je, čím se liší od MCP serveru, pro koho, ani celý Lighthouse audit.**

## ✅ CO JE VOLNÉ

### 1. Stav standardizace a časová osa (nikde na webu)
- **9/2025** — spec formálně přijatá W3C Web Machine Learning Community Group
- **12. 2. 2026** — publikován draft Community Group Report
- **2/2026** — Google vydal preview ve **Chrome Canary**, vyvíjeno **s Microsoftem** na W3C trati
- **druhá polovina 2026** — cílená nativní podpora v Chrome a Edge
- **stále to NENÍ ratifikovaný W3C standard**, je to draft CG reportu a preview

Existující článek říká jen „stále experimentální" — bez dat, bez trajektorie, bez toho,
kdo za tím stojí.

### 2. Jak protokol vypadá — dvě poloviny (nikde na webu)
- **deklarativní část:** běžné HTML formuláře a prvky stránky se stávají použitelnými
  schopnostmi pro agenta
- **imperativní část:** JavaScript API, kterým web vystaví dynamickou funkcionalitu
  jako volatelné nástroje

**Tohle je nosný bod celého článku:** jestli deklarativní půlka staví na obyčejných
formulářích, pak „implementace je náročná" (jak píše náš vlastní starší článek)
**nemusí platit pro celý rozsah** — část práce může být dobře napsané HTML,
které už dávno máte. To je poctivá korekce vlastní dřívější rady, ne nový návod.

### 3. Co WebMCP nahrazuje (nikde na webu)
Agenti dnes weby obsluhují „natvrdo": screenshot stránky a simulovaný klik.
WebMCP je konsenzuální strukturovaná alternativa — web řekne, co u něj jde dělat,
místo aby to agent hádal z pixelů. Bez tohohle kontrastu není vidět, proč vůbec vzniká.

### 4. Co dělat v roce 2026, když to ještě není v prohlížečích
Poctivá odpověď: pro většinu webů **zatím nic přímo pro WebMCP**. Ale práce na
accessibility tree (jména a popisky prvků, integrita stromu, viditelnost) se vyplatí
tak jako tak — je to zároveň klasická přístupnost i to, z čeho agent čte dnes.
Tohle je jediné doporučení, které nezestárne, ať WebMCP dopadne jakkoli.

## ⛔ NETVRDIT
- že WebMCP je hotový standard (není — draft CG reportu + preview)
- že se určitě prosadí; termín „druhá polovina 2026" je **cíl**, ne slib
- vlastní čísla o adopci
- že implementace je triviální — deklarativní půlka neznamená, že je hotovo
- neopakovat Lighthouse audit (má vlastní článek) ani definici MCP × WebMCP
- nedávat návod na implementaci — spec je v pohybu a návod by zestaral dřív než vyjde

## Struktura (analysis)
1. Krátká odpověď — co WebMCP je z hlediska rozhodnutí, ne definice
2. Vymezení: definici a Lighthouse audit má jiný článek, tady jde o stav a dopad
3. **Kde ten standard dnes je** — časová osa 9/2025 → 2/2026 → cíl H2 2026
4. **Jak vypadá** — deklarativní + imperativní půlka, CompareTable
5. **Co nahrazuje** — screenshot a klik naslepo × deklarovaná schopnost
6. **Korekce vlastní rady:** deklarativní půlka mění odhad nákladů (odkaz na lighthouse-ai-check)
7. **Co dělat teď** — warning Insight: pro většinu webů nic; accessibility tree se vyplatí tak či tak
8. Časté omyly
9. Co si z toho vzít

## Interní odkazy (ověřeno 2026-07-27)
`/blog/lighthouse-ai-check/` (audit + definice) · `/blog/llms-txt-navod/` ·
`/blog/ai-nakupni-agenti/` · `/blog/strukturovana-data-pro-ai/`

## Zdroje
- W3C Web Machine Learning CG — draft Community Group Report k WebMCP (12. 2. 2026)
- Chrome for Developers — Lighthouse agentic browsing scoring
- DebugBear, Semrush — pokrytí Lighthouse 13.3 Agentic Browsing
- Přehledy stavu agentických standardů 2026 (MCP, A2A, WebMCP)

## OG dle IMAGE_GUIDE §5
Nadpis: `WebMCP` · Podtitul: `Co to je a co s tím dnes dělat`
Scéna: vlevo agent jako robot ikona se screenshotem a kurzorem (cesta naslepo),
vpravo stránka, která vystavuje tři označené nástroje jako karty s konektory;
zelený odznak u strukturované cesty.
