[BLOKER] „Google uvádí, že **pokud si hodnocený subjekt spravuje recenze sám o sobě, jeho stránky nejsou pro hvězdičky ve výsledku způsobilé.** Prakticky: označit si na vlastním webu vlastní známku e-shopu jako hodnocení firmy nestačí. Legitimní cesta vede přes recenze **produktů**, které prodáváte.“
- **Proč:** Etalon je užší: „If the entity that's being reviewed controls the reviews about itself, their pages…are ineligible for star review feature." a výslovně se to týká **LocalBusiness a Organization**. Text to místy podává obecněji jako univerzální pravidlo pro „vlastní firmu“ a „známku e-shopu“, bez připomenutí typu entity. To je přísnější interpretace, než etalon přímo říká.
- **Návrh:** Upřesnit: „U hodnocení typu Organization/LocalBusiness na vlastním webu platí, že pokud hodnocený subjekt recenze o sobě sám kontroluje, jeho stránky nejsou pro star review feature způsobilé.“

[BLOKER] „To je jejich hodnota — pro zákazníka i pro systém, který skládá odpověď z více zdrojů.“
- **Proč:** To je nedoložené tvrzení o mechanismu AI/systému. Etalon řeší review snippet a structured data, ne to, že „systém skládá odpověď z více zdrojů“ a že recenze mají tuto konkrétní roli.
- **Návrh:** Nahradit neutrálně: „To je jejich hodnota — pro zákazníka i pro obsah stránky.“

[WARNING] „Recenze jsou pro e-shop zdroj textu, který nenapsal prodejce…“
- **Proč:** V zásadě v pořádku jako interpretační rámec, ale absolutní formulace „jsou jediný text“ je v metadatech i závěru nadsazená. Na stránce mohou být i jiné uživatelské dotazy/odpovědi či UGC. Etalon to neřeší.
- **Návrh:** Změnit na „často nejcennější zdroj textu, který nenapsal prodejce“ nebo „typický zdroj“.

[WARNING] „Google zakazuje agregovat recenze a hodnocení z cizích webů“
- **Proč:** Etalon doslova říká „Don't aggregate reviews or ratings from other websites.“ Smysl sedí, ale „zakazuje“ je silnější rétorika než nutná auditní formulace.
- **Návrh:** Přepsat na „Google uvádí, že se recenze ani hodnocení z jiných webů nemají agregovat.“

[WARNING] „Hodnocení e-shopu jako celku sbírané nezávislou službou je jiná věc, ale na vlastním webu ho jako podklad pro hvězdičky nepoužijete.“
- **Proč:** První půlka („je jiná věc“) otevírá výklad mimo etalon. Etalon jen řeší nezpůsobilost stránek, pokud subjekt kontroluje recenze o sobě; nevyjasňuje zde scénáře „nezávislé služby“.
- **Návrh:** Zkrátit na etalonové minimum: „Na vlastním webu takové hodnocení nepovažujte za způsobilý podklad pro star review feature u vlastní firmy.“

[DOPORUČENÍ] JSON ukázka
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Leštěnka na lak Ultra Gloss 500 ml",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.6,
    "reviewCount": 128
  }
}
```
- **Proč:** Ukázka je prakticky v souladu s etalonem, protože Product má `name` na rodiči a `AggregateRating` má `ratingValue` + `reviewCount`. Pro auditní jednoznačnost by ale bylo lepší výslovně ukázat i `itemReviewed`, když ho etalon uvádí jako povinné u AggregateRating.
- **Návrh:** Buď doplnit samostatný příklad `AggregateRating` s `itemReviewed`, nebo vysvětlit, že vnoření pod `Product` plní vazbu na hodnocenou položku přes rodiče.

[DOPORUČENÍ] „U jednotlivé recenze přibývá `author` a `reviewRating` s hodnotou…“
- **Proč:** Etalon u Review vyžaduje také `itemReviewed` (platný typ) a `itemReviewed.name` nebo `name` rodiče. Text to zjednodušuje a může budit dojem, že stačí jen author + reviewRating.
- **Návrh:** Doplnit: „U Review navíc author, itemReviewed a reviewRating s ratingValue; název musí být na itemReviewed nebo na rodiči.“

[DOPORUČENÍ] „Ověřený nákup je zároveň nejlepší obrana proti falešným recenzím.“
- **Proč:** Etalon říká jen „Ratings must be sourced directly from users.“ Tvrzení „nejlepší obrana“ je rozumné, ale není doložené primárním zdrojem.
- **Návrh:** Změnit na „Je to praktický způsob, jak omezit falešné recenze.“

[DOPORUČENÍ] Etická rovina
- **Citace:** „Kromě porušení pravidel je to podvod na zákazníkovi…“
- **Proč:** Tohle splňuje požadavek dobře. Etické odsouzení je jasné, ne jen technické.
- **Návrh:** Beze změny.

[DOPORUČENÍ] Kanibalizace série
- **Citace:** „Jak strukturovaná data zapadají do celku, rozebírá článek o strukturovaných datech pro AI.“
- **Proč:** Odkazování je střídmé, téma drží na recenzích. Nekanibalizuje výrazně díl o strukturovaných datech ani produktových stránkách.
- **Návrh:** Beze změny.

[KOSMETIKA] H2 „Jak vypadá značení“, „Čeho se vyvarovat“, „Co si odnést“
- **Proč:** Požadavek říká, že H2 mají být konkrétní. Tyto nadpisy jsou srozumitelné, ale mohly by být věcnější.
- **Návrh:** Např. „JSON-LD pro Product a AggregateRating“, „Čtyři chyby při značkování recenzí“, „Praktické zásady pro recenze produktů“.

[KOSMETIKA] answer
- **Citace:** „Recenze jsou pro e-shop zdroj textu…“
- **Proč:** Začíná definicí a má cca 45 slov, tedy splňuje 40–60 slov.
- **Návrh:** Beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Prioritní zásahy:
1. Zúžit pravidlo o „vlastních recenzích“ přesně na rámec etalonu: Organization/LocalBusiness, ne obecné tvrzení bez typu.
2. Odstranit nedoložené AI/mechanické tvrzení o „systému, který skládá odpověď z více zdrojů“.
3. Doplnit přesnější popis povinných vlastností u `Review` a ideálně zpřesnit i vazbu `AggregateRating` na hodnocenou položku.
4. Zmírnit nebo doložit formulace typu „nejlepší obrana“ a „zakazuje“, kde etalon mluví užším jazykem.