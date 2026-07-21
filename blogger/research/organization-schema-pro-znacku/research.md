# Research — Organization ve strukturovaných datech

**Slug:** `organization-schema-pro-znacku`
**Kategorie:** tutorial (howto → 5/5) · **Tagy:** strukturovana-data + duveryhodnost
**Řádek plánu:** `organization schema pro znacku`
**Datum:** 2026-07-21

---

## ⚠️ ZADÁNÍ OBSAHUJE NEPODLOŽENÉ TVRZENÍ

Plán: *„…klíčový pro brand recognition v ChatGPT/Perplexity/Google."*

**Pro ChatGPT a Perplexity to podloženo není.** Search Engine Land uvádí, že tyto
platformy nezveřejnily, jestli strukturovaná data vůbec používají, a že neexistuje
recenzovaná studie o jejich dopadu na viditelnost v AI. Naopak existuje analýza,
která korelaci nenašla (níže).

Článek proto **nesmí slibovat citace**. Musí říct, k čemu Organization podle
dokumentace slouží (rozlišení identity), co to reálně stojí (málo) a co za to
čtenář dostane (ne citace).

---

## Kolizní kontrola (2026-07-21)

| Soubor | Zmínek „Organization" | Co s tím dělá |
|---|---|---|
| `strukturovana-data-pro-ai` | 7 | **rodič** — Organization jako 1 položka ze 6 typů, jedna odrážka v checklistu |
| `recenze-a-hodnoceni-pro-ai` | 7 | jen v kontextu Review/AggregateRating |
| `ai-seo-wordpress` | 5 | pluginy, které to generují |
| ostatní (12 souborů) | 1–3 | průchozí zmínky v seznamech typů |

→ **Žádný článek nemá Organization jako téma.** Hub-and-spoke:
rodič `strukturovana-data-pro-ai` (přehled typů) → spoke tento článek (jeden typ do hloubky).

**Strukturní sourozenec:** `person-data-pro-autora` (@id 28×, sameAs 22×) dělá totéž
pro Person. Mechaniku `sameAs`/`@id` tedy **nevysvětlovat znovu** — odkázat a soustředit
se na to, co je u firmy jiné.

**CZ mezera (hlavní důvod, proč článek psát):**
`legalName` 0 souborů · `taxID` 0 · `vatID` 0 · „obchodní rejstřík" 0 · IČO/ARES jen 2 soubory
(a to v jiném kontextu). Tohle nikdo česky nepíše.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE — Google, dokumentace Organization

<https://developers.google.com/search/docs/appearance/structured-data/organization>

1. **„There are no required properties"** — Google výslovně neuvádí žádnou povinnou
   vlastnost, doporučuje přidat ty, které jsou pro organizaci relevantní.
2. **Účel:** „help Google better understand your organization's administrative details
   and **disambiguate** your organization in search results."
   → tedy **rozlišení identity a administrativních údajů**, ne citace.
3. **Umístění:** doporučuje na **domovskou stránku nebo jednu stránku popisující
   organizaci** — ne na každou stránku webu. (Častá chyba: pluginy to sypou všude.)
4. **Výslovná výhrada:** „Google does not guarantee that features that consume
   structured data will show up in search results."
5. Některé vlastnosti ovlivňují vizuální prvky — které **logo** se ukáže ve výsledcích
   a ve znalostním panelu.
6. **Doporučené vlastnosti (celý výčet dle Googlu):** name, alternateName, legalName,
   url, logo, sameAs, description, address, contactPoint, email, telephone, foundingDate,
   numberOfEmployees, iso6523Code, duns, globalLocationNumber, leiCode, naics, taxID,
   vatID, hasMerchantReturnPolicy, hasMemberProgram, hasShippingService.

## ✅ OVĚŘENO — schema.org, doslovné definice

| Vlastnost | Definice schema.org (doslova) |
|---|---|
| `legalName` | „The official name of the organization, e.g. the registered company name." |
| `sameAs` | „URL of a reference Web page that **unambiguously indicates the item's identity**." |
| `taxID` | „The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain." |
| `vatID` | „The value-added Tax ID of the organization or person **with national prefix** (for example IT123456789)." |
| `alternateName` | „An alias for the item." |
| `iso6523Code` | „An organization identifier as defined in ISO 6523(-1)." |
| `leiCode` | „…uniquely identifies a legal entity as defined in ISO 17442." |
| `duns` | „The Dun & Bradstreet DUNS number…" |

**Klíčové pro článek:** definice `sameAs` mluví o **identitě**, ne o autoritě.
To je celý smysl typu — a přesně to se v českých návodech překrucuje na „odkazy pro AI".

## ⚠️ MAPOVÁNÍ NA ČESKÉ IDENTIFIKÁTORY — je to výklad, ne dokumentované pravidlo

schema.org ani Google **nejmenují české identifikátory**. Mapování níže je odvozené
z definic, ne citace — a článek to tak musí napsat, jinak vydává výklad za pravidlo.

- **IČO → `taxID`** — schema.org uvádí jako příklad španělské CIF/NIF, což je rovněž
  identifikátor firmy v rejstříku. Obhajitelné, ne doslovné.
- **DIČ → `vatID`** — čisté: definice explicitně žádá národní prefix, tj. `CZ12345678`.
- **obchodní firma z rejstříku → `legalName`** — přímo dle definice.
- `iso6523Code`, `duns`, `leiCode` — pro velké/mezinárodní subjekty, běžná česká firma
  je nepotřebuje. Zmínit jednou větou, nerozvádět.

## 🔴 DŮKAZ, ŽE TO NEDĚLÁ CITACE — a jeho limity

**Search Engine Land, „How schema markup fits into AI search — without the hype":**
- strukturovaná data jsou „infrastructure, not a magic bullet"
- **neexistuje recenzovaná studie** o dopadu strukturovaných dat na viditelnost v AI
- **ChatGPT ani Perplexity nezveřejnily**, jestli je vůbec používají
- Google (AI Overviews) a Microsoft (Bing Copilot) naopak uvedly, že přínos mají
- odkazuje na studii Nature Communications (únor 2024): LLM extrahují informace
  přesněji ze strukturovaného vstupu než z nestrukturovaného textu

**Analýza Search Atlas, „The Limits of Schema Markup for AI Search":**
- porovnala pokrytí strukturovanými daty s tím, jak často se doména objevuje
  v odpovědích **OpenAI, Gemini a Perplexity**
- domény rozdělené do 5 pásem pokrytí (0 % / 1–30 % / 31–70 % / 71–99 % / 100 %)
- **závěr: rozdělení viditelnosti bylo napříč pásmy prakticky totožné**
- ⚠️ **limity, které přiznávají sami autoři:** měřili jen *přítomnost* značkování,
  ne typ/úplnost/kvalitu; je to **pozorování, ne kauzalita**; jen 3 platformy
- ⚠️ **a moje výhrada navíc:** Search Atlas je dodavatel SEO nástrojů, ne nezávislý
  ústav, a nezveřejnil počet domén ve vzorku

→ Článek musí ustát obojí: **neslíbit citace**, ale ani netvrdit, že je to k ničemu.
Jedna vendor analýza měřící pouhou přítomnost není důkaz neúčinnosti.

## Co tedy Organization reálně dává (poctivý výčet)

1. **Rozlišení identity** — dle Googlu přímo dokumentovaný účel. Nejvíc to znamená tam,
   kde se **značka ≠ právní subjekt**, což je v ČR spíš pravidlo než výjimka.
2. **Logo** ve výsledcích a znalostním panelu (Google to uvádí u vizuálních prvků).
3. **Konzistentní strojový popis** identity na jednom místě — levné, jednorázové.
4. **Co NEDÁVÁ:** záruku jakékoli funkce (výslovná výhrada Googlu) a doložitelný
   nárůst citací v AI.

## Postup (→ howto, 5 kroků, všechny podložené dokumentací)

1. **Vyberte jednu stránku** — domovskou nebo „o nás". Google doporučuje právě jednu,
   ne každou stránku.
2. **Vyplňte identitu** — name, legalName, alternateName, url, logo, description.
3. **Doplňte české identifikátory** — taxID (IČO), vatID s prefixem CZ, address.
4. **Vypište sameAs** — profily, které **jednoznačně ukazují tutéž entitu**; ne odkazy
   na cokoliv. Kvalita nad počtem.
5. **Ověřte** validátorem a zkontrolujte, že blok není duplicitní na dalších stránkách.

## Chyby (→ MistakeGrid 4×, každá s oporou)

1. **Blok na každé stránce** — Google doporučuje jednu stránku. Pluginy to porušují běžně.
2. **sameAs jako odkazovník** — definice mluví o jednoznačné identitě, ne o množství URL.
3. **Značka místo právního názvu** — bez legalName nemá stroj jak spojit „Sniper Design"
   s „CPU s.r.o.". Přesně tenhle rozpor Organization řeší.
4. **Čekat od toho citace** — viz důkazní část. Je to identifikace, ne distribuce.

## ⛔ NETVRDIT

- že Organization zvyšuje šanci na citace v ChatGPT/Perplexity (nedoloženo)
- že IČO/DIČ mapování je oficiální pravidlo Googlu nebo schema.org (je to výklad)
- počet domén ve studii Search Atlas (nezveřejněný)
- že studie Search Atlas dokazuje neúčinnost (měřila přítomnost, ne kvalitu; observační)
- jakékoli číslo o „nárůstu viditelnosti po nasazení" — nemáme
- že je to povinné (Google: „There are no required properties")

## Vlastní stopa — poctivé přiznání

Tenhle web má v Organization `alternateName: "CPU s.r.o."` tam, kde by `legalName`
bylo přesnější (`alternateName` = „alias", `legalName` = „registered company name").
Není to chyba, je to méně přesné. Zmínit **věcně, jako ilustraci rozdílu** —
ne jako ctnost transparentnosti. (Soubor `src/i18n/site.ts` je mimo scope blogger session.)

## Hranice

- **Neřeší ostatní typy** → [strukturovana-data-pro-ai](/blog/strukturovana-data-pro-ai/)
- **Neřeší autorskou entitu** → [person-data-pro-autora](/blog/person-data-pro-autora/)
- **Neřeší Wikipedii/Wikidata jako sameAs cíl** → [znacka-na-wikipedii-pro-ai](/blog/znacka-na-wikipedii-pro-ai/)
- **Neřeší zmínky mimo web** → [ai-brand-mentions](/blog/ai-brand-mentions/)
- **Neumí říct, jestli to zvýší citace** — nikdo to zatím neukázal

## Brand voice

- Anglicismy → česky: „markup" → **značkování**, „entity" → **entita** (je ve slovníku).
- Názvy vlastností nechat anglicky v `code` — jsou to doslovné klíče v JSON.
- Čísla česky. answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-21, všech 8 existuje)

`/blog/strukturovana-data-pro-ai/` · `/blog/person-data-pro-autora/` ·
`/blog/znacka-na-wikipedii-pro-ai/` · `/blog/firmy-cz-pro-ai/` · `/blog/ai-brand-mentions/` ·
`/blog/e-e-a-t-pro-ai/` · `/blog/jak-ai-cituje-zdroje/` · `/blog/test-viditelnosti-v-ai/`

## CTA

Bez slibu citací. Nejdřív vlastní kontrola (je to práce na 20 minut), audit až jako
druhá možnost pro toho, kdo na to nemá kapacitu.
