# Vypořádání auditů

Datum: 2026-09-26
Článek: `dostupnost-a-skladovost-pro-ai.mdx`

Všechny nálezy byly posouzeny proti celému souboru včetně frontmatteru. Žádný nález nebyl odmítnut.

## Faktický audit

| # | Závažnost | Stav | Vypořádání |
|---|---|---|---|
| 1 | zásadní | Opraveno | `answer`, úvod a závěr už neztotožňují skladovost s možností objednat. Text odděluje fyzickou skladovost, režim objednávky a dodací lhůtu. `answer` má po opravě 55 slov. |
| 2 | zásadní | Opraveno | Definice `in_stock` doplnila doručení do všech podporovaných oblastí. Samostatný odstavec vysvětluje viditelná omezení dopravy a regionální dostupnost. |
| 3 | zásadní | Opraveno | Google kompatibilní profil OpenAI je popsán jen pro případ, že jej OpenAI výslovně potvrdí pro registrovaný feed. |
| 4 | zásadní | Opraveno | U `availability_date` je uveden jediný termín v ISO 8601, limit jednoho roku a zákaz rozsahu. Rozpětí je výslovně omezeno na viditelný text stránky. |
| 5 | drobný | Opraveno | Úvod už netvrdí obecnou povinnost zapsat celou dodací lhůtu do každých produktových dat. Rozlišuje povinný stav a způsob dodacích údajů podle napojení. |
| 6 | drobný | Opraveno | JSON-LD příklad doplnil `image` a `shippingRate`; navazující text přikazuje nahradit ukázkové hodnoty skutečnými. |
| 7 | drobný | Opraveno | Požadavky variant jsou rozdělené podle platforem: Google vyžaduje přímo předvolitelnou URL, OpenAI ji doporučuje, pokud je to technicky možné. Oprava je i ve FAQ. |

### Doověření zásadních oprav

Zásadní opravy č. 1–4 budou podle C5b před publikací vráceny auditorovi faktů k cílenému ověření. Kontrolované pasáže se během ověřování nebudou měnit.

## Jazykový audit

| # | Závažnost | Stav | Vypořádání |
|---|---|---|---|
| 1 | zásadní | Opraveno | „Jednorázový denní export“ nahrazen „jediný export za den“. |
| 2 | zásadní | Opraveno | Hybrid nahrazen formulací „profil kompatibilní s Google Merchant Center“. |
| 3 | zásadní | Opraveno | „Jedno místo pravdy“ nahrazeno štítkem „Jeden zdroj údajů“ a konkrétním pokynem ke generování výstupů. |
| 4 | zásadní | Opraveno | Neurčité procházení JavaScriptu nahrazeno načítáním a zpracováním strukturovaných dat. |
| 5 | zásadní | Opraveno | Nedoložený superlativ odstraněn; text popisuje konkrétní chybu odkazu na jinou variantu. |
| 6 | zásadní | Opraveno | Nadpis má správný pád „součástí provozu“. |
| 7 | zásadní | Opraveno | Falešná vazba mezi aktualizací a jistotou termínu odstraněna; text mluví o ověření a rychlém promítnutí změny. |
| 8 | drobný | Opraveno | Vágní „tuto práci“ nahrazeno konkrétním důsledkem pro zákazníka. |
| 9 | drobný | Opraveno | Abstraktní „proměnlivá vrstva“ nahrazena dostupností nabídky. |
| 10 | drobný | Opraveno | „Google drží hranici“ nahrazeno vysvětlením vlastnosti `availability` u nabídky `Offer`. |
| 11 | drobný | Opraveno | „Stejná logika“ nahrazena zásadou shodného aktuálního údaje. |
| 12 | drobný | Opraveno | „Pokladna“ nahrazena objednávkovým procesem; produktový zdroj produktovým feedem. |
| 13 | drobný | Opraveno | „Nativní“ nahrazeno vlastním formátem OpenAI. |
| 14 | drobný | Opraveno | „Jiná vrstva“ nahrazena samostatnými údaji o zpracování a přepravě. |
| 15 | drobný | Opraveno | „Příklad je podklad“ nahrazeno pokynem nekopírovat ukázku bez úprav. |
| 16 | drobný | Opraveno | Sklad už nic „nemění“; text mluví o změně skladového stavu a současné aktualizaci. |
| 17 | drobný | Opraveno | „Platforma“ upřesněna na e-shopové řešení a HTML je vysvětleno jako výstup serveru pro prohlížeč. |
| 18 | drobný | Opraveno | Slovosled příkladu variant přeformulován. |
| 19 | drobný | Opraveno | „Adresa“ nahrazena URL nebo odkazem a odstraněna personifikace. |
| 20 | drobný | Opraveno | Technické názvy Product, Offer a availability jsou uvedeny za českým vysvětlením. |
| 21 | drobný | Opraveno | Nejasný „ruční zásah“ nahrazen ruční úpravou údajů dodavatelem. |
| 22 | drobný | Opraveno | „Držte dobu“ nahrazeno evidencí; přístup k API je popsán bez významové kolize slova dostupnost. |
| 23 | drobný | Opraveno | „Okno nesouladu“ nahrazeno krátkodobým nesouladem a současnou aktualizací. |
| 24 | drobný | Opraveno | Chyba i vysvětlení přímo říkají, že přesná data nezaručují zobrazení. |
| 25 | drobný | Opraveno | Závěrečný H2 nyní říká, že přesná dostupnost dává všem stejný údaj. |
| 26 | drobný | Opraveno | Neurčitý systém nahrazen vyhledávačem nebo nákupní službou; varianty mají samostatné stavy. |
| 27 | drobný | Opraveno | CTA mluví o zákaznících, vyhledávačích a AI místo o „lidech a strojích“. |

## Kontrola úplnosti oprav

- Cílené hledání původních formulací po celém `.mdx` nevrátilo žádný záměrně ponechaný výskyt.
- Všechny H2 obsahují `<span class="hl">` i `<strong>`.
- Mechanický jazykový checker po opravách: 0 nálezů.
- Nové pravidlo do `JAZYK_SLOVNIK.md` nepřidáno: nalezené obraty byly kontextové nebo jednorázové a jejich plošný regex by nebyl spolehlivý bez porozumění větě.

## Závěrečný audit — fáze 1

| # | Závažnost | Stav | Vypořádání |
|---|---|---|---|
| 1 | zásadní | Opraveno | Hlavní text, FAQ i `research.md` doplnily úplné podmínky vlastního formátu OpenAI pro varianty: odlišné `item_id`, společné `group_id`, `listing_has_variations=true` a `variant_dict`; každý řádek má vlastní cenu, dostupnost, URL a obrázek. Text zároveň odděluje pole profilu kompatibilního s Google Merchant Center. |
| 2 | drobný | Opraveno | Úvodní věty byly spojené, takže výslovným podmětem zůstává e-shop a „stav dostupnosti“ nelze číst jako nový podmět. |

Nový zásadní nález č. 1 bude podle C5b jednou cíleně doověřen závěrečným auditorem, který ho našel. Během ověřování se pasáž nebude měnit.

## Závěrečný audit — C5b

- Oprava vlastního formátu OpenAI pro varianty obstála při cíleném doověření.
- Závěrečný auditor potvrdil vypořádání všech 7 faktických a 27 jazykových nálezů.
- Dodatečný drobný nález ve FAQ byl opraven: názvy polí `item_id`, `group_id`, `listing_has_variations=true` a `variant_dict` jsou označené jako technický zápis.
- Opakovaný mechanický jazykový checker po této opravě: **0 nálezů** při 2 031 slovech.
