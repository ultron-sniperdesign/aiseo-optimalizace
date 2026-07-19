# Research — Blokovat AI odpovědi v Google?

**Slug:** `blokovat-ai-odpovedi-gsc`
**Kategorie:** analysis (rozhodovací rámec, bez howto → 4/4 JSON-LD)
**Řádek plánu:** `block ai responses gsc` — **1. místo ve frontě po datové prioritizaci**
**Datum:** 2026-07-18

---

## Proč tohle téma jako první (GSC data, 90 dní, ověřeno 2026-07-18)

| Stránka | Kliky | Imprese | Pozice | CTR |
|---|---|---|---|---|
| `/blog/jak-vypnout-ai-overview/` | 28 | 2 843 | 7,5 | 0,98 % |
| `/jak-vypnout-ai-overview/` (duplicitní URL) | 11 | 464 | 6,4 | 2,37 % |
| `/blog/ai-crawler-robots-txt/` | 2 | 66 | 7,3 | 3,03 % |

Defenzivní téma dělá ~39 kliků z cca 70 na celém webu. Tenhle článek je jeho přímý sourozenec.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE
(blog.google — „New opportunities, control and insights for website owners", 3. 6. 2026)

DOSLOVA:
- **„a new toggle in Search Console"** — majitel webu rozhodne, jestli chce, aby se web
  „appear in and help ground responses in our generative AI Search features
  (like AI Overviews, AI Mode or AI Overviews in Discover)".
- Odhlášené weby **„will not receive traffic or impressions from our generative AI features"**.
- **„This control will not be used as a ranking signal for search results outside of these
  generative AI Search features."**
- Rollout: **„beginning to test"** s **„a subset of website owners in the UK"**, teprve pak globálně.
- Regulační kontext: Google zmiňuje jednání s regulátory, mj. britskou CMA.
- Nové přehledy v Search Console: zobrazení v generativních funkcích, které stránky se
  v AI odpovědích objevují a v jakých zemích; další metriky mají přibývat.

**Úroveň: celoweb.** Oznámení neuvádí ovládání po jednotlivých stránkách.

### ⚠️ Co z toho plyne pro české publikum
Přepínač se **testuje na části webů ve Velké Británii**. Většina českých webů ho dnes nemá.
Článek musí začít tímhle, jinak čtenář půjde hledat něco, co ve svém účtu nenajde.

## ⛔ NETVRDIT
- že je přepínač dostupný v ČR (není doloženo)
- konkrétní termíny globálního zavedení (Google je neuvádí)
- že odhlášení uškodí běžnému hodnocení (Google výslovně říká opak)
- ovládání po stránkách (v oznámení není)

---

## Odlišení od `jak-vypnout-ai-overview` (NEJVÝKONNĚJŠÍ STRÁNKA — nekanibalizovat!)

| Existující vítěz | Tenhle článek |
|---|---|
| **uživatelská** strana: jak si AI Overviews vypnu já (Search Labs, `&udm=14`, mobil) | **majitel webu**: mám odhlásit web z AI odpovědí? |
| jedna sekce o direktivách `nosnippet`/`data-nosnippet` | rozhodovací rámec kolem nového přepínače |

→ Odkázat na sebe navzájem, neopakovat metody.

---

## Jádro: rozhodovací rámec

**Přepínač je hrubý nástroj.** Celoweb, všechno nebo nic. Nelze si nechat to, co funguje,
a odhlásit zbytek.

**A hlavně: rozhodovali byste se bez dat.** Z předchozích článků:
- AI Mode nejde z běžných dat oddělit ([mereni-ai-mode-limity](/blog/mereni-ai-mode-limity/))
- jednotlivé povrchy citují jiné zdroje (Ahrefs, 13,7 % shoda)
- naše vlastní data: z AI nástrojů malý objem, ale konverze 3,5 % vs. 0,88 % z organiku
  ([case study](/blog/case-study-megadetail-ai-navstevnost/))

→ Odhlásit se znamená vypnout kanál, jehož přínos zatím neumíte spolehlivě změřit —
a podle vlastních dat vypadá kvalitativně nadprůměrně.

### Komu to může dávat smysl (hedgovat, neuvádět jako doporučení)
- weby, jejichž **produktem je samotná informace** (placený obsah, předplatné, licencování)
- vydavatelé řešící licenční jednání
→ i tam jde o obchodní rozhodnutí, ne technické

### Komu spíš ne
- weby, které něco prodávají a AI kanál jim přivádí konvertující návštěvy
- weby, kde je viditelnost součástí marketingu

## Chyby (→ MistakeGrid 4×)
1. **Hledat přepínač v českém účtu a divit se** — testuje se na části webů v UK.
2. **Zaměňovat s direktivami** — `nosnippet` a spol. řeší použití textu; přepínač je jiná úroveň.
3. **Odhlásit se z obavy o hodnocení** — Google výslovně uvádí, že mimo generativní funkce
   se to jako signál hodnocení nepoužije.
4. **Rozhodovat bez dat** — když neumíte oddělit povrchy, nemáte z čeho vyhodnotit dopad.

## Hranice článku
- **Neradí odhlásit ani zůstat** — je to obchodní rozhodnutí.
- **Nedává termíny** dostupnosti v ČR; Google je neuvádí.
- **Neřeší blokaci crawlerů obecně** — na to je [ai-crawler-robots-txt](/blog/ai-crawler-robots-txt/).

## Brand voice
- Defenzivní téma = nejsilnější stránka webu; držet stejný střízlivý, praktický tón.
- Anglicismy → česky: „toggle" → **přepínač**, „opt out" → **odhlásit se**, „grounding" opisem
  („podklad pro odpovědi"). Povolené: Search Console, AI Overviews, AI Mode, Discover, CMA.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-18)
`/blog/jak-vypnout-ai-overview/` · `/blog/ai-crawler-robots-txt/` · `/blog/mereni-ai-mode-limity/` ·
`/blog/gsc-ai-segmenty-mereni/` · `/blog/zero-click-ai/` · `/blog/ai-mode-a-eshopy/` ·
`/blog/case-study-megadetail-ai-navstevnost/`

## CTA
Audit 9 990 + Pack 1 490. Bez doporučení odhlásit se.
