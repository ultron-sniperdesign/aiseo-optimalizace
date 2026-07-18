Definice: Po 2. kole je text **většinově v souladu s etalonem**, ale ještě vidím **1 BLOKER a několik warningů**. Atribuce Googlu už není přestřelená, AI tvrzení bez opory už prakticky nezbyla, neslibujete hvězdičky ani citace. Slabina je **neúplnost povinných vlastností v souhrnném popisu/ukázce AggregateRating** a jedna formulace u falešných recenzí.

- **[BLOKER] „U souhrnného hodnocení produktu stačí hodnota, počet a název hodnocené položky:“ + JSON bez `itemReviewed`**
  - **Proč:** Etalon uvádí u **AggregateRating: itemReviewed, název, ratingValue, aspoň jedno z ratingCount/reviewCount**. Vy spoléháte na rodiče `Product`, což dál vysvětlujete, ale v zadání pro 2. kolo je výslovně požadována úplnost popisu povinných vlastností.
  - **Návrh:** Buď doplnit větu „Při vnoření pod `Product` se vazba řeší přes rodiče“ hned do úvodu ukázky, nebo ukázku přepsat tak, aby explicitně ukázala i variantu s `itemReviewed`.

- **[WARNING] „Doplňte povinné vlastnosti… U AggregateRating je potřeba ratingValue, alespoň jedno z ratingCount nebo reviewCount a údaj o hodnocené položce s názvem.“**
  - **Proč:** Je to věcně skoro správně, ale méně přesné než etalon: ten rozlišuje **itemReviewed** a **název**. Tady splývají do jedné zkratky.
  - **Návrh:** Přepsat na „`itemReviewed` a název hodnocené položky (nebo název na rodiči, pokud je značení vnořené)“.

- **[WARNING] „Falešné nebo vynucené recenze — Kromě porušení pravidel…“**
  - **Proč:** V etalonu je opora pro „ratings must be sourced directly from users“, ale ne obecně pro každé „vynucení“ jako porušení Google pravidel. Eticky ano, atribuční jistota k Googlu slabší.
  - **Návrh:** Změnit na „Kromě etického problému a rizika nedůvěry…“; případně oddělit falešné recenze od nevhodného nátlaku.

- **[WARNING] „Recenze jsou pro AI… citovatelný signál“ / „nedá se z ní citovat nic zajímavého“**
  - **Proč:** Už to není tvrzení o konkrétním systému, takže **není to BLOKER**. Je to ale pořád interpretační rámec, ne doložený etalonem.
  - **Návrh:** Pokud chcete být ultra-čistí, zmírnit na „užitečný obsahový signál“ a „hůř se z ní dělá užitečná pasáž než z textové recenze“.

- **[DOPORUČENÍ] „Google to jako způsobilé neuvádí.“**
  - **Proč:** Bezpečné, ale slabší než předchozí přesná formulace o **Organization/LocalBusiness**. Může působit moc obecně.
  - **Návrh:** Zpřesnit na „U Organization a LocalBusiness pod vlastní kontrolou Google uvádí nezpůsobilost pro star review feature.“

- **[KOSMETIKA] Anglicismy: „rich“, „FAQ“, „JSON-LD“, „AI SEO audit“, „Wireframe Pack“**
  - **Proč:** Nevadí věcně, jen stylově lehce míchá češtinu a angličtinu.
  - **Návrh:** Nechat, pokud je to jazyk značky; jinak počeštit popisky kolem nich.

- **[KOSMETIKA] Kanibalizace série: více interních odkazů na související články**
  - **Proč:** Nevidím přímý rozpor, spíš tematické propojování. Riziko kanibalizace z dodaného textu nelze prokázat.
  - **Návrh:** Jen hlídat odlišné search intenty: tento článek = recenze/hodnocení, jiné = AI Mode / structured data / pasáže.

**VERDIKT: OPRAVIT PŘED PUBLIKACÍ.** Stačí hlavně doladit **úplnost a formulaci povinných vlastností u AggregateRating** a zjemnit větu o „porušení pravidel“ u vynucených recenzí. Pak bych pustil.