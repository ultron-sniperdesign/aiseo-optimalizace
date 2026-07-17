# Research — Ceny na webu a AI

**Slug:** `ceny-na-webu-a-ai`
**Kategorie:** tutorial (→ `howto` ve frontmatteru → 5/5 JSON-LD typů)
**Řádek plánu:** 99 (`cenik pro ai`)
**Datum:** 2026-07-17

---

## Teze článku

Cena je jedna z prvních věcí, na kterou se lidé u produktu i služby ptají. Pokud na webu není uvedená
jako čitelný text, systém, který na dotaz odpovídá, nemá z čeho čerpat — a sáhne po tom, co najde jinde:
starší číslo, cizí srovnávač, diskuze, nebo údaj domyslí.

**Tohle není článek o tom, že musíte zveřejnit ceník.** „Cena na dotaz" je legitimní obchodní volba a
u individuálních zakázek často jediná poctivá. Článek je o tom, jak dát **srozumitelný cenový signál**
i tam, kde konkrétní číslo dát nejde.

Přímá návaznost na [chybna-informace-o-firme-v-ai](/blog/chybna-informace-o-firme-v-ai/): tam jsme psali,
že konfabulace může být častější tam, kde chybí jasné a konzistentní podklady. **Cena je nejčastější
takové prázdné místo na českých B2B webech.**

---

## ⚠️ Co NEPOUŽÍVAT — nedoložená čísla

Při trend researchi (2026-07-17) vyplavaly tyto statistiky. **Žádnou z nich neuvádět jako fakt** —
jsou to sekundární přepisy, primární zdroj ani metodika neověřené:

- „Gartner 2024: 72 % B2B kupujících očekává cenu na webu"
- „HockeyStack: netransparentní ceníky = o 64 % víc poptávek, ale 1,7× horší konverze do pipeline"
- „51 % B2B kupujících začíná research v AI chatbotu (loni 29 %)"
- „Weby s pokročilým markupem vidí vyšší organickou návštěvnost"

Poučení z runu #48 a #50: nedoložené tvrzení o třetí straně = BLOKER v auditu.
**Článek stavět na mechanismu, ne na půjčených číslech.** Kde je potřeba obecné konstatování, hedgovat:
„průzkumy se v číslech liší podle metodiky, ale opakuje se v nich, že…" — a i to jen pokud je to nutné.

---

## Mechanismus (co jde tvrdit bez zdroje, protože to plyne z povahy věci)

1. **Co není v textu, není citovatelné.** Systém, který čte stránku jako text, přečte to, co je v textu.
   Cena jen v obrázku, v PDF, nebo dorenderovaná JavaScriptem až po interakci je hůř dostupná než
   cena napsaná v HTML.
2. **Za formulářem = neviditelné.** Ceník za registrací nebo poptávkovým formulářem nemá jak přečíst
   nikdo kromě člověka, který formulář vyplní.
3. **Prázdné místo se něčím vyplní.** Když na vlastním webu jasný údaj není, zbývají cizí zdroje:
   srovnávače, staré články, diskuze, katalogy. Ty mohou být zastaralé nebo se týkat něčeho jiného.
4. **Nekonzistence = systém si vybere.** Když se cena na webu, v ceníku (PDF), na profilech a
   v katalozích rozchází, dáváte na výběr a nemáte vliv na to, co si vybere.
5. **Strukturovaná data musí sedět na viditelný text.** Rozpor mezi `Offer.price` a cenou na stránce
   je problém sám o sobě — Google to explicitně vyžaduje shodné. Nejde o trik navíc, ale o strojově
   čitelné zopakování toho, co už je vidět.

---

## Postup (→ `howto` steps, 5 kroků)

1. **Rozhodněte, co jde říct** — konkrétní cena / rozpětí / od-cena / model kalkulace. I „od 15 000 Kč
   podle rozsahu" je nekonečně víc než „cena na dotaz".
2. **Napište to jako text** — do stránky, ne do obrázku, ne do PDF, ne až za klik. Nahoru, ne do patičky.
3. **Vysvětlete, co cenu určuje** — co ji zvedá a co snižuje. Tohle je u individuálních zakázek to
   nejcennější, co můžete dát: ne číslo, ale srozumitelný model.
4. **Sjednoťte to napříč** — web, ceník, profily, katalogy, nabídky. Jedna pravda, jedno místo.
5. **Doplňte strukturovaná data sedící na text** — `Offer` / `PriceSpecification` / `priceRange`,
   hodnoty shodné s viditelnou cenou. A držte to aktuální při každé změně.

---

## Strukturovaná data — fakta (schema.org, ověřeno na schema.org 2026-07-17)

- `Offer` — nabídka převodu práv k položce nebo poskytnutí služby. Vlastnosti `price`, `priceCurrency`.
- `PriceSpecification` — strukturovaná hodnota reprezentující cenu nebo cenové rozpětí.
  Umí `minPrice` / `maxPrice` → přesně pro rozpětí.
- `priceCurrency` — ISO 4217 (`"CZK"`).
- `price` — desetinná tečka, ne čárka. Bez měnových symbolů a oddělovačů tisíců.
- `priceRange` — používá se u `LocalBusiness` (běžně jako `"$$"` nebo rozpětí).
- `CompoundPriceSpecification` — vícesložková cena (základ + poplatky).
- `priceType` (`ListPrice`, `StrikethroughPrice`, `SalePrice`) — pro původní vs. akční cenu.
- `priceValidUntil` — do kdy cena platí.

Ukázka pro službu s rozpětím (do článku jako ```json blok — ty se buildí v pořádku):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI SEO audit",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "CZK",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 15000,
      "maxPrice": 45000,
      "priceCurrency": "CZK"
    }
  }
}
```

⚠️ Hedge v článku: strukturovaná data nezaručí citaci. Jsou to strojově čitelné podklady, ne přepínač.
Viz [strukturovana-data-pro-ai](/blog/strukturovana-data-pro-ai/) — nedělat z toho zázrak.

---

## Chyby (→ MistakeGrid, 4×)

1. **„Cena na dotaz" jako jediná informace** — obchodně legitimní, ale informačně prázdné. Skoro vždy
   jde říct aspoň rozpětí nebo model kalkulace.
2. **Cena jen v PDF ceníku** — PDF za odkazem je pro čtení textu stránky mrtvý bod. A hůř se aktualizuje.
3. **Rozpor mezi strukturovanými daty a stránkou** — `Offer.price` říká něco jiného než text.
   Google vyžaduje shodu; navíc je to signál, že jednomu z těch míst nikdo nevěří.
4. **Falešná od-cena** — „od 0 Kč", „od 1 Kč" nebo od-cena, za kterou nikdo nikdy nic nekoupil.
   Krátkodobě to vypadá dobře, dlouhodobě to je důvod, proč lidi od-cenám nevěří.

---

## Hranice článku (povinná sekce — co článek NEŘEŠÍ)

- **Neradí, jestli ceny zveřejnit.** To je obchodní rozhodnutí se spoustou vstupů (konkurence,
  marže, segment, procurement). Článek řeší jen: když už se rozhodnete, jak to udělat čitelně.
- **Neslibuje citaci ani umístění.** Jasná cena zvyšuje šanci, že se bude čerpat z vás a ne odjinud.
  Záruka to není.
- **Neřeší cenotvorbu ani právní stránku** (uvádění cen vůči spotřebiteli, DPH, akční ceny) —
  na to jsou jiní odborníci.

---

## Brand voice

- **Sniperdesign má vlastní ceny veřejné** — Pack 1 490 Kč, audit 9 990 Kč. Článek tedy nekáže něco,
  co sám nedělá. To jde zmínit **decentně**, ne jako chlubení.
- Anglicismy → česky: „pricing page" → **cenová stránka / stránka s cenami**, „gated" → **za formulářem**,
  „machine-readable" → **strojově čitelné**, „markup" → **strukturovaná data**.
- Žádné „musíte", žádné „jediná cesta". Auditor to střílí konzistentně.
- Tón: střízlivý, praktický, bez kázání o transparentnosti.

---

## Interní odkazy (všechny ověřené 2026-07-17, soubory existují)

- `/blog/chybna-informace-o-firme-v-ai/` — konfabulace tam, kde chybí jasný údaj (hlavní návaznost)
- `/blog/produktove-stranky-pro-ai/` — cena na produktu
- `/blog/stranka-sluzby-pro-ai/` — cena u služeb / B2B
- `/blog/strukturovana-data-pro-ai/` — Offer/PriceSpecification v kontextu
- `/blog/aktualizace-obsahu-pro-ai/` — držet cenu aktuální

## CTA

Audit 9 990 Kč (dohledá zdroje sporných údajů, navrhne kroky) + Pack 1 490 Kč (wireframy včetně
produktové a prodejní stránky). Bez slibu výsledku — viz poučení z runu #50.
