# Research — AI roboti a zátěž webu

**Slug:** `ai-roboti-zatez-webu`
**Kategorie:** analysis (bez howto → 4/4 JSON-LD) · **Tagy:** technicke-zaklady + mereni
**Řádek plánu:** `ai roboti zatez webu`
**Datum:** 2026-07-19

---

## ⚠️ ZADÁNÍ V PLÁNU JE ZASTARALÉ A NEOVĚŘITELNÉ

Plán: *„Bytespider ~90 % AI crawler trafficu (2024), často ignoruje robots.txt"*

- Číslo je **z roku 2024**, dva roky staré v oblasti, kde se všechno mění po měsících.
- **Neověřil jsem ho u primárního zdroje** → NEPOUŽÍVAT.
- Cloudflare mezitím publikoval mnohem lepší a čerstvější data.

## ⚠️ PŘERÁMOVÁNÍ: „kolik to zatíží" → „jaký je směnný kurz"

Zadání chce „kolik trafficu roboti generují". To je ale otázka pro sysadmina a naše publikum
na ni nemá jak odpovědět. Cloudflare publikuje užitečnější metriku:
**poměr procházení k návštěvám** (crawl-to-refer) — kolikrát mě někdo prošel na jednu návštěvu,
kterou mi poslal zpátky.

Tím se z ops tématu stává **obchodní otázka**, což sedí na web i na publikum.
Navíc to částečně odpovídá na dilema z [blokovat-ai-odpovedi-gsc](/blog/blokovat-ai-odpovedi-gsc/),
kde jsme psali, že se rozhodujete bez dat. Tohle je jedno číslo, které fakticky získat jde.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE (blog.cloudflare.com)

### 🔴 POZOR: dva posty uvádějí RŮZNÁ čísla — NEMÍCHAT
Post „by purpose and industry" uvádí Anthropic 50 000:1, OpenAI 887:1, Perplexity 118:1.
Post „crawl-to-click gap" uvádí pro červenec 2025 jiné hodnoty (níž).
Jiná období / jiný základ. → **Použít JEN jednu sadu** = tabulku z „crawl-to-click gap".

### Poměr procházení k návštěvám (červenec 2025, „The crawl-to-click gap")
| Platforma | Poměr 7/2025 | Změna leden–červenec |
|---|---|---|
| Anthropic | 38 065,7 | −86,7 % |
| OpenAI | 1 091,4 | −10,4 % |
| Perplexity | 194,8 | **+256,7 %** |
| Microsoft | 40,7 | +5,7 % |
| Google | 5,4 | +43 % |

- Definice DOSLOVA: *„how many pages a platform crawls compared with how often it drives users
  to a website"*.
- Anthropic: z **286 930** v lednu na **38 065** v červenci — obrovské zlepšení, pořád nejvyšší.
- Perplexity naopak z 54 na 195 — zhoršení.

### Účel procházení (posledních 12 měsíců k 7/2025)
- **80 % trénink, 18 % vyhledávání, 2 % akce uživatele**
- DOSLOVA: *„Training now drives nearly 80% of AI bot activity, up from 72% a year ago."*
- U požadavků vyvolaných uživatelem: *„OpenAI's ChatGPT-User bot is responsible for nearly
  three quarters of the request traffic from this cohort"*.

### Rozdíly mezi obory (srpen 2025, druhý post — uvádět JEN kvalitativně)
Zpravodajství má poměry řádově nižší než jiné obory. **Konkrétní čísla z tohoto postu nemíchat
s tabulkou výše** — jiné období i základ. Stačí říct, že se to obor od oboru liší řádově.

### 🟢 PRAKTICKÝ NÁSTROJ (changelog 2026-07-01, tj. 2,5 týdne starý)
**Attribution Business Insights** v Cloudflare: ukazuje poměr procházení k návštěvám
**pro váš web i po jednotlivých provozovatelích**, za 24 h / 7 dní / 30 dní.
→ Tohle je odpověď na „a jaké je moje číslo?"

---

## ⛔ NETVRDIT
- **Bytespider ~90 %** — neověřeno, zastaralé
- **míchat obě sady poměrů** — jiná období
- že tato čísla platí pro konkrétní český web (jsou to data ze sítě Cloudflare, globální, 2025)
- že AI roboti jsou hlavní příčina pomalého webu — Cloudflare to netvrdí
- konkrétní částky za hosting / přenesená data
- že vysoký poměr = důvod blokovat (to je rozhodnutí, ne závěr z čísla)
- že Google 5,4 znamená „Google je hodný" — jiný model fungování, ne ctnost

---

## Odlišení od existujících článků (ověřeno 2026-07-19)

| Článek | Co řeší | Překryv |
|---|---|---|
| `ai-crawler-robots-txt` | robots.txt jako signál, jmenovití roboti | žádný — tam jde o pravidla, tady o objem a poměr |
| `cloudflare-ai-bot-blocking` (dnes) | kategorie Search/Agent/Training, blokace na CDN | **0 zmínek o zátěži** — ověřeno grepem |
| `blokovat-ai-odpovedi-gsc` (dnes) | rozhodnutí, jestli být v AI odpovědích | tenhle článek dodává **číslo**, které tam chybělo |
| `zero-click-ai` | dopad na prokliky | jiná strana téže mince, prolinkovat |

---

## Jádro článku

**Otázka není „kolik mě roboti stojí", ale „jaký mám s kým směnný kurz".**

Cloudflare měří, kolik stránek platforma projde na jednu návštěvu, kterou pošle zpátky.
Rozptyl je řádový: od jednotek po desetitisíce. To je mnohem užitečnější než abstraktní
„AI roboti zatěžují weby".

Tři poctivé pointy:
1. **Rozdíly mezi provozovateli jsou obrovské** — a mění se rychle (Anthropic dolů o 87 %,
   Perplexity nahoru o 257 %). Jakékoli číslo si za půl roku ověřte znovu.
2. **80 % procházení je trénink**, ne vyhledávání. Většina toho, co vám robot odebere,
   se nikdy nevrátí jako návštěva — a to je záměr, ne chyba.
3. **Teď to jde změřit u sebe** (Attribution Business Insights), takže se dá přestat hádat.

## Chyby (→ MistakeGrid 4×)
1. **Brát globální čísla jako svoje** — jsou to data ze sítě Cloudflare, ne z vašeho webu.
2. **Číst vysoký poměr jako důvod k blokaci** — je to vstup do rozhodnutí, ne rozhodnutí.
3. **Řešit zátěž a ignorovat, co z toho plyne pro viditelnost** — obojí je stejná volba.
4. **Spoléhat na číslo z loňska** — meziroční změny jsou v stovkách procent.

## Hranice článku
- **Neradí blokovat** → rámec je v [blokovat-ai-odpovedi-gsc](/blog/blokovat-ai-odpovedi-gsc/)
  a provedení v [cloudflare-ai-bot-blocking](/blog/cloudflare-ai-bot-blocking/)
- **Není to sysadmin manuál** — cache a omezení frekvence jsou samostatné téma (přidáno do plánu)
- **Neuvádí náklady** — závisí na hostingu, nemáme podklad

## Brand voice
- Anglicismy → česky: „crawl-to-refer ratio" → **poměr procházení k návštěvám**,
  „crawler" → **robot**. Povolené: Cloudflare, Anthropic, OpenAI, Perplexity, ChatGPT-User.
- Čísla česky: 38 065,7 (mezera jako oddělovač tisíců, desetinná čárka).
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-19, všech 9 existuje)
`/blog/ai-crawler-robots-txt/` · `/blog/cloudflare-ai-bot-blocking/` · `/blog/blokovat-ai-odpovedi-gsc/` ·
`/blog/seznam-asistent-sellma/` · `/blog/zero-click-ai/` · `/blog/ai-navstevnost-konverze/` ·
`/blog/mereni-ai-mode-limity/` · `/blog/jak-ai-cituje-zdroje/` · `/blog/case-study-megadetail-ai-navstevnost/`

## CTA
Audit 9 990 + Pack 1 490. Bez doporučení blokovat.
