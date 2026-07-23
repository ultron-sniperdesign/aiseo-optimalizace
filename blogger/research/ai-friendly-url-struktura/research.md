# Research — URL struktura pro AI vyhledávání

**Slug:** `ai-friendly-url-struktura`
**Kategorie:** tutorial (howto → 5/5) · **Tagy:** technicke-zaklady + strategie
**Řádek plánu:** `ai friendly url struktura`
**Datum:** 2026-07-23

---

## 🔴 ZADÁNÍ PŘEHÁNÍ: „AI matou" není doložené

Plán: *„čisté, popisné URL pomáhají AI lépe pochopit téma stránky; query parameter
chaos, hluboké hierarchie a redirecty AI matou. Praktický how-to."*

**Ověření ukázalo, že „AI matou" je overclaim.** Pro URL jako **samostatný AI signál**
neexistuje empirická opora — je to obecná optimalizační rada, ne testovaný efekt.
Co je doložené: silné klasické SEO je hlavní signál, ze kterého AI čerpá.

**Poctivé jádro článku (zapadá do webové filozofie „AEO/GEO je pořád SEO"):**
„AI-friendly URL" = **dobrá URL podle klasického SEO.** Žádný zvláštní AI trik.
Čisté URL pomáhají, protože pomáhají **crawlu a indexu, na kterém AI stojí**, a lidem —
ne kvůli AI magii. Redirecty a parametry škodí **procházení** (reálný mechanismus),
ne „porozumění AI".

---

## Kolizní kontrola (2026-07-23)

**Žádný článek nemá URL strukturu jako téma.** Jediné H2 s „URL" je v `jak-vypnout-ai-overview`
(`&udm=14` parametr — úplně jiný kontext).

| Existující článek | Co má | Hranice |
|---|---|---|
| `interni-prolinkovani-pro-ai` | jak propojit obsah odkazy | **odkazy mezi stránkami** — jiná věc než tvar URL |
| `seo-audit-co-kontrolovat` | „title/meta + URL struktura" jako položka auditu | zmínka, ne návod |
| `produktove-stranky-pro-ai` | parametrická navigace u e-shopů (dotyk) | e-shop produkty |
| `ai-crawler-robots-txt` | řízení procházení | co robot smí, ne jak URL vypadá |
| `aeo-geo-je-porad-seo` | teze „je to pořád SEO" | **filozofický rodič** — odkázat |

→ Volné téma. Uvnitř **odkazovat, ne opakovat** interní prolinkování a robots.txt.

## ✅ OVĚŘENO (2026-07-23, web search + přehledy)

### Pro URL jako AI signál není tvrdá opora
- „LLMs prefer logical, descriptive URLs" = **obecná optimalizační rada, ne rigorózní test.**
- Co JE doložené jako hlavní driver citací: **klasické SEO autorita, kvalita obsahu,
  čerstvost, strukturní srozumitelnost** — ne konkrétní tvar URL.

### Varovný precedent, že „technická AI optimalizace" často v testu propadne
- **Ahrefs kauzální studie (srpen 2025 – březen 2026):** 1 885 stránek s přidaným
  JSON-LD proti 4 000 kontrolním. Výsledek: **nulový efekt** na ChatGPT a AI Mode,
  malý **negativní** efekt na Google AI Overviews. Pět velkých LLM při vyhledávání
  JSON-LD ignorovalo.
- ⚠️ Tohle je o JSON-LD, **NE o URL** — použít jen jako ilustraci, že se u AI vyplatí
  být skeptický k „technickým trikům". NEtvrdit, že to platí i pro URL.
- ⚠️ Kontext pro web: náš článek `strukturovana-data-pro-ai` strukturovaná data
  doporučuje. Rozpor NENÍ — ten článek už říká, že schema pomáhá strojům parsovat,
  ale citační efekt je neprokázaný. Zůstat konzistentní: neslibovat citace ze schématu.

### Reálný mechanismus, kterým URL POMÁHÁ (bez overclaimu)
1. **Procházení a indexace** — parametrový chaos, nekonečné varianty a redirect
   řetězce plýtvají crawl budgetem a mohou bránit tomu, aby se obsah dostal do indexu.
   To je reálné a týká se to i AI, protože AI staví na tomtéž indexu / crawlu.
2. **Lidská čitelnost** — popisná URL v odkazu, který někdo sdílí, říká, co za ním je.
   Sdílené odkazy = zmínky = to, z čeho AI čerpá.
3. **Kontext v odkazu** — smysluplný slug je slabý, ale nenulový kontextový signál
   (a hlavně nekazí ostatní signály).

## 🇨🇿 CZ SPECIFIKA (hlavní přidaná hodnota, obecné návody to neřeší)
- **Diakritika ve slugu** — `č ř ž ě`: prohlížeč je v URL zakóduje na `%C4%8D` apod.
  Bezpečná volba: ASCII slug (`cesky-clanek`), malá písmena, spojovník.
  (Detailně samostatný řádek plánu „diakritika v url slugy".)
- **Parametrická navigace e-shopů** (Shoptet, Upgates, WooCommerce) — filtry generují
  spoustu URL variant; řešit kanonikalizací, ne mazáním filtrů. Odkázat na produktové stránky.
- **Neměnit slugy zpětně** — u existujícího webu je změna URL riziko, ne vylepšení
  (samostatný řádek plánu „migrace url bez ztraty"). V tomto článku jen varovat.

## Struktura (tutorial, howto 5 kroků)
1. Krátká odpověď (co je AI-friendly URL + že to je klasické SEO)
2. Rovnou narovnat: žádný zvláštní AI signál (Insight key)
3. Čím URL doopravdy pomáhá — 3 mechanismy (crawl/lidé/kontext)
4. Jak má dobrá URL vypadat (CompareTable dobře × špatně)
5. Postup (howto 5×)
6. CZ specifika (diakritika, e-shop parametry)
7. Pozor: neměnit zpětně (Insight warning)
8. Chyby (MistakeGrid 4×)
9. Závěr = rozhodnutí (nový web × existující web)

## Howto (5 kroků)
1. **Držte slug krátký a popisný** — 3–5 slov, malá písmena, spojovníky, bez diakritiky.
2. **Vynechte zbytečnosti** — datum, ID, stopwords, koncovky `.html` tam, kde nemusí být.
3. **Udržte mělkou a logickou hierarchii** — kategorie/produkt, ne pět úrovní zanoření.
4. **Vyřešte parametry kanonikalizací** — filtry a řazení přes canonical, ne nové indexované URL.
5. **U existujícího webu neměňte bez důvodu** — a když měníte, vždy 301 přesměrování.

## Chyby (MistakeGrid 4×)
1. **Měnit slugy kvůli „AI optimalizaci"** — riziko převáží neprokázaný přínos.
2. **Cpát klíčová slova do URL** — keyword stuffing v URL nepomáhá, vypadá spamově.
3. **Nechat parametrový chaos bez canonical** — plýtvá crawlem, který AI potřebuje.
4. **Diakritika a velká písmena ve slugu** — kódování, nekonzistence, horší sdílení.

## ⛔ NETVRDIT
- že AI „mate" špatná URL (overclaim — jde o crawl, ne o porozumění)
- že URL slug je samostatný AI signál (bez opory)
- že Ahrefs studie o JSON-LD platí pro URL (je o schématu)
- konkrétní čísla o vlivu URL na citace (nemáme)
- že čistá URL zvýší citace (neprokázané)
- že se vyplatí měnit URL na existujícím webu (obvykle ne)

## Hranice
- **Neřeší interní odkazy** → [interni-prolinkovani-pro-ai](/blog/interni-prolinkovani-pro-ai/)
- **Neřeší procházení robotem** → [ai-crawler-robots-txt](/blog/ai-crawler-robots-txt/)
- **Neřeší, proč je to pořád SEO** → [aeo-geo-je-porad-seo](/blog/aeo-geo-je-porad-seo/)
- **Neřeší diakritiku do hloubky** → samostatný řádek plánu
- **Neřeší migraci URL** → samostatný řádek plánu

## Brand voice
- „slug" nechat (zavedený termín), poprvé vysvětlit; „crawl budget" → **rozpočet na procházení**
- čísla česky: 3–5 slov, 301, 1 885 stránek
- answer 40–60 slov, začíná definicí

## Interní odkazy (ověřeno 2026-07-23, všech 6 existuje)
`/blog/interni-prolinkovani-pro-ai/` · `/blog/ai-crawler-robots-txt/` ·
`/blog/aeo-geo-je-porad-seo/` · `/blog/produktove-stranky-pro-ai/` ·
`/blog/seo-audit-co-kontrolovat/` · `/blog/jak-ai-cituje-zdroje/`

## CTA
Žádná prodejní. Článek de-hypuje („žádný AI trik") — prodejní CTA by to podkopala.
Závěr = rozhodnutí podle toho, jestli je web nový nebo existující.
