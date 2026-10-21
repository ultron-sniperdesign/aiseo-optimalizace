# Research — refresh `kolik-stoji-ai-seo` (21. 10. 2026)

**Typ runu:** refresh jednoho článku (kadence 2 + 1 + 1, run 3 — po bloku 14. 10. vydala Codex větev
19. 10. dva nové články, viz `stav.sh`). **Proč tenhle:** z 34 otevřených kandidátů ve `REFRESH_QUEUE.md`
má za 21. 7.–19. 10. 2026 nejvíc zobrazení v Search Console — **385, pozice 41,8, 0 kliků** (další kandidáti
jednotky až desítky). Vada z fronty (4. 10.): cenové rozsahy bez metodiky. Admin při revizi 5. 9. 2026
doporučil cenovou tabulku umístit **právě sem** (`_source/…/revize-sekci-20260905/_zaznamy/verify-audit-data.json`,
verdikt 7), protože článek už na cenové dotazy ranguje; zároveň upozornil, že jmenovité srovnání s konkurencí je
srovnávací reklama — proto poskytovatele nejmenujeme (Z2), jen typ a cenu s datem.

**Titulek se nemění.** Článek je v kontrolní skupině měření titulků (`_source/_keyword-research/blog-gsc-20260907/`,
přeměření 2. 11. 2026). Mění se obsah, `answer`, `description`, FAQ a `updated`; `title` ani nový `seoTitle` ne.
Obrázek se nepřegenerovává. **Audity jdou přes Codex** (OpenAI API bez kreditů, 429 — rozhodnutí uživatele 21. 10. 2026).

---

## Vady nalezené při prověrce (21. 10. 2026)

| # | Místo (verze z 10. 6.) | Vada | Doklad |
|---|---|---|---|
| 1 | `answer`, úvod, FAQ 1–2, checklist úrovní | „0 Kč + ~5–20 h měsíčně“, „1 000–6 000 Kč měsíčně za nástroje“, „jednotky až desítky tisíc za audit“, „desítky tisíc měsíčně za retainer“ — bez zdroje | research z 10. 6. je sám označuje „orientační, hedovat“, odkazy ani vzorek nemá |
| 2 | FAQ 1, ř. 62, ř. 87 | „zahraniční AI/SEO spolupráce bývá výrazně / násobně dražší“ — bez zdroje | — |
| 3 | ř. 88, závěr | Pack = „wireframy klíčových stránek a sada 9 PDF“ — Z3 chce **sedm typů stránek**, 9 PDF + souhrnné PDF | `pack.ts` |
| 4 | FAQ „Co je v ceně auditu“ | obecné „u kvalitnějšího auditu bývá…“ bez opory; „Google AI Overviews“ | ceníky ve vzorku popisují rozsah různě (níž) |
| 5 | FAQ a sekce skryté náklady | zobecnění „bývají“ bez dat | → přepsat na otázky, které si klást |
| 6 | `CompareTable` | na mobilu širší než sloupec (fronta 11. 10., předáno adminovi) | → markdownová tabulka |
| 7 | všechny H2 | bez povinného formátu `hl` + `strong` | CLAUDE.md § VI |
| 8 | cílení | článek se zobrazuje na obecné cenové dotazy SEO, ale ceny klasického SEO nemá | GSC a MM níž |

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum |
|---|---|---|
| **Dokumentace** (vlastní) | Audit AI viditelnosti **3 600 Kč bez DPH** (4 356 s DPH), výstup do 5 pracovních dní od úhrady, meeting 30–60 min | `src/content/pages/audit.ts`, 21. 10. 2026 |
| | `/sluzby/`, **ceny bez DPH**: technické úpravy orientačně **od 8 000 Kč do vyšších desítek tisíc**, přesně po auditu; obsah kategorií 18 / 39 / 54 Kč, produktů 34 / 49 / 55 Kč za kus + vstupní analýza 1 300–3 900 Kč jednou; srovnávací obsah 12 800 Kč/rok; měsíční správa podle rozpočtu | `src/content/pages/sluzby.ts`, 21. 10. 2026 |
| | Pack **1 490 Kč včetně DPH**, sedm typů stránek, master PDF 85 stran | `src/content/pages/pack.ts` |
| | Hotové moduly pro Upgates **1 300–10 400 Kč bez DPH** | sniperdesign.cz/seo-pro-ai, načteno 21. 10. 2026 |
| **Měření** (vlastní) | **Vzorek veřejných ceníků, 21. 10. 2026** — 6 poskytovatelů s nabídkou pro AI viditelnost (A–F, převzati z rešerše 5. 9. a všichni znovu načteni) a 2 nezávislí konzultanti klasického SEO s vlastním ceníkem (G, H). Data `ceny-2026-10-21.json`, identity `_ceny-zdroje-2026-10-21.md` (mimo repo). Vždy jen stránka povolená v robots.txt | níž |
| | Nástroje, ceníky 21. 10. 2026: Collabim, Marketing Miner, Otterly.AI, Semrush | `ceny-2026-10-21.json` |
| | Marketing Miner (cs, 21. 10. 2026, 42 kreditů): **cena seo 750**/měs (+203 % meziročně), **seo ceník 430** (+30 %), **seo cena 260** (−38 %), seo audit cena 70, kolik stojí seo 20; „kolik stojí ai seo“, „ai seo cena“, „geo optimalizace cena“, „audit ai viditelnosti“ aj. **bez dat** (nástroj je neměří, není to nulová poptávka) | výstup mimo repo |
| | Search Console, stránka článku, 21. 7.–19. 10. 2026: seo cena 70 zobr. @27,6 · seo ceník 67 @72,4 · kolik stojí seo 58 @59,2 · ceník seo 29 · seo optimalizace ceník 21 @11,0 · seo audit cena 19 · seo ceny 15; 0 kliků | GSC API, 21. 10. 2026 |
| **Rozhraní (UI)** | **prázdné** — žádnou službu ani nástroj jsem nekupoval, nic v rozhraní netvrdím | — |
| **Nelze ověřit** | (a) skutečné ceny po nacenění (veřejné jsou vstupní „od“); (b) DPH tam, kde ho poskytovatel neuvádí; (c) rozsah práce za cenu (každý ceník ho popisuje jinak); (d) jak reprezentativní je vzorek pro trh — není náhodný | — |

### Vzorek poskytovatelů (21. 10. 2026)

| ID | Typ | Nabídka podle ceníku | Cena | DPH |
|---|---|---|---|---|
| A | agentura (SEO + AI) | správa pro AI po měsíčních balíčcích hodin (20 / 40 / 60 / 100 h); „smysluplný rozsah od 20 h“, min. 6 měsíců | karta služby 38 000 Kč (45 980 s DPH), **počet hodin neuveden**. Ceník 20 h = 28 000 Kč … 100 h = 100 000 Kč bez DPH je na stránce v kategorii **„Služby, které jsme nahradili jinými“** → nepoužito (audit Codex 21. 10.) | bez DPH / s DPH |
| B | agentura (SEO / AIO) | audit s doporučením · monitoring · obsah · komplexní optimalizace | 6 000 jednorázově · 2 500/měs · 6 000/měs · 15 000 jednorázově | neuvedeno |
| C | agentura (AI) | první nezávazný audit · kompletní velký audit (ChatGPT, Gemini, Perplexity, AI Overviews, AI Mode; zdroje; plán) | zdarma · 19 900 Kč | neuvedeno |
| D | specializovaný poskytovatel (GEO) | audit · implementace · průběžná péče („orientační“) | od 19 900 · od 39 900 · od 16 900 Kč/měs | neuvedeno |
| E | agentura (AI) | audit AI viditelnosti (4 platformy, opakované běhy, zdroje, akční plán) · průběžná optimalizace · test na třech dotazech | 10 000–20 000 Kč · od 8 000 Kč/měs · zdarma | neuvedeno |
| F | agentura (SEO + GEO) | jednorázový **technický SEO** audit (klíčová slova, konkurence, plán; ceník u služby GEO) · měsíční správa SEO & GEO · mini audit AI dohledatelnosti (do 48 h) | od 15 000 Kč · od 10 000 Kč/měs · zdarma | neuvedeno |
| G | konzultant (SEO) | hodinová sazba · SEO audit · dílčí audity („připravuje se“, nepoužito) | 1 600 Kč/h dlouhodobě, 2 100 Kč/h konzultace · od 19 200 Kč · od 6 400 Kč | bez DPH |
| H | konzultant (SEO) | konzultace · plný SEO audit · videoaudit · správa (orientačně 8–10 h za 15 000 Kč) | 2 500 Kč/h · od 15 000 Kč · 990 Kč · od 15 000 Kč/měs | bez DPH |

**Shrnutí pro text (po auditu 21. 10.):** vstupní cena placeného auditu s AI vrstvou 6 000–19 900 Kč (B, E, F, C, D);
bezplatný vstup nabízejí tři (C první audit, F miniaudit do 48 h, E test na třech dotazech) — s placeným auditem nejde
o totéž. Měsíční správa poskytovatelů pro AI od 8 000 do 16 900 Kč (E, F, D); A ukazuje 38 000 Kč bez počtu hodin;
samotný monitoring 2 500 Kč (B). Hodinová sazba z vlastních ceníků **1 600–2 500 Kč bez DPH (G, H)**; A vypadla
(nahrazená služba). **Čtyři ze šesti** poskytovatelů pro AI (A, B, E, F) ji spojují se SEO — ze všech osmi je to polovina,
proto se v textu nepíše „většina“. Náš audit 3 600 Kč bez DPH je **nižší než vstupní ceny pěti placených auditů s AI
vrstvou**, ne nejnižší ve vzorku (H má videoaudit za 990 Kč, C/E/F bezplatné vstupy).

### Nástroje na měření (21. 10. 2026)

| Nástroj | Co stojí | Podmínky |
|---|---|---|
| Collabim | tarif Core 360 Kč/měs (342 / 335 / 324 Kč při 3 / 6 / 12měsíčním předplatném) + 500 měření 383 Kč/měs, bez DPH | měření AI jen k placenému tarifu; hlavní popis ChatGPT, Gemini, Perplexity, FAQ i Google AI Overviews a AI Mode |
| Marketing Miner | tarif Starter 499 Kč/měs + 1 300 AI kreditů 499 Kč/měs, bez DPH | doplněk jen k placenému předplatnému; 2 kredity za prompt v jednom modelu; **kredity platí 30 dní**; ChatGPT, Gemini, Perplexity, AI Overviews, AI Mode |
| Otterly.AI | při měsíční platbě Lite 29 $/měs (15 promptů) · Standard 189 $ (100) · Premium 489 $ (400); při roční 25 / 160 / 422 $ | ChatGPT, Přehled od AI, Perplexity, Copilot; Claude, režim AI a Gemini za příplatek; doplňky „excluding tax“, u tarifu daň neuvedena |
| Semrush | SEO + AI Search Starter 199 $/měs (165,17 $ při roční platbě) | 50 promptů denně, 1 doména |

---

## Podmínky u tvrzení (B3)

| Tvrzení | Podmínky | Konzistence | Výjimky | Zdroj |
|---|---|---|---|---|
| Ceny poskytovatelů | veřejné ceníky k 21. 10. 2026, vstupní „od“ | DPH uvádějí jen A, G, H (bez DPH) | ceny se mění; rozsah práce se liší | vlastní vzorek |
| Hodinová sazba 1 600–2 500 Kč | jen dva konzultanti s vlastním ceníkem | — | nejde o průměr trhu; A vyřazena (nahrazená služba) | vzorek G, H |
| Nástroje od stovek Kč | u českých nástrojů jen s placeným základním tarifem; **při měsíční platbě**; MM kredity platí 30 dní | součet tarif + doplněk | delší předplatné levnější (Collabim); u $ cen daň neuvedena (Otterly u doplňků bez daně) | ceníky nástrojů |
| Náš audit 3 600 Kč bez DPH | pevná cena, výstup do 5 pracovních dní | — | nižší než vstupní ceny pěti placených auditů s AI vrstvou; ne nejnižší ve vzorku (videoaudit H 990 Kč, bezplatné vstupy C, E, F) | audit.ts |
| Technické úpravy od 8 000 Kč | orientačně, do vyšších desítek tisíc, přesně po auditu | — | — | sluzby.ts |

---

## Navazující články (B2)

| Článek | Verdikt | Proč |
|---|---|---|
| `ai-seo-zdarma` | **odkaz** | bezplatná vrstva (Search Console, ruční test), refresh 17. 9. |
| `ai-seo-nastroje` | **odkaz** | přehled nástrojů, cenu jen kvalitativně — nekoliduje |
| `rozpocet-seo-vs-ai-viditelnost` | **odkaz** | jak rozpočet rozdělit (4. 10., Codex) — cena vs. rozdělení |
| `ai-seo-agentura-sluzby` | **odkaz** | jak vybrat dodavatele — otázky před objednávkou |
| `roi-ai-seo` | odkaz jen v textu o návratnosti | článek z 20. 7., nekontrolován do hloubky |
| `ai-navstevnost-konverze` | **odkaz** | měření návštěv z AI (refresh 3. 10.) |
| `gsc-ai-segmenty-mereni`, `bing-ai-performance-report` | neodkazovat | `bing-ai-performance-report` je ve frontě (vzorek přisouzený celému reportu) |

---

## Odkud jsou otázky FAQ (C1)

| Otázka | Odkud |
|---|---|
| Kolik stojí AI SEO v Česku? | cílový dotaz článku |
| Kolik stojí audit viditelnosti v AI? | GSC (seo audit cena), vzorek |
| Kolik stojí měsíční správa? | GSC (seo ceník, cena seo) |
| Jaká je hodinová sazba za SEO? | MM (cena seo 750, seo ceník 430) |
| Kolik stojí nástroj na měření AI viditelnosti? | původní FAQ + ceníky nástrojů |
| Proč se ceny tolik liší? | GSC dotazy na ceník + rozdíly ve vzorku |
