# Vypořádání auditů

## Přijaté opravy

- Google příklad zúžen na produktové recenze a obecné pravidlo odděleno.
- U DOI doplněna podmínka aktualizace cílové adresy a metadat vydavatelem; odstavec a karta už se neopakují.
- Příklad míry konverze rozlišuje relativní růst, procentní body a absolutní počet objednávek.
- Tvrzení o přínosu pro AI bylo staženo; text nyní uvádí pouze doložený kontext odkazů v Googlu a výslovně odmítá záruku AI citace.
- FAQ o `nofollow` popisuje konkrétní situaci z dokumentace Googlu.
- Doporučení k nedostupnému plnému textu podmiňuje použití sekundárního rozboru jeho existencí a spolehlivostí.
- Upraveny všechny nepřirozené či nepřesné vazby z jazykového auditu.
- GA4 formulace zúžena na údaje o návštěvnosti a rozlišení placených a neplacených kanálů.

## Odmítnutý nález

Oba auditoři navrhli změnit CTA ze sedmi na osm typů stránek. Nález byl odmítnut po kontrole aktuálního zdroje pravdy: `src/content/pages/pack.ts` opakovaně uvádí sedm typů stránek a kapitolu o aplikaci popisuje jako návod k nasazení. Stejné rozlišení stanoví pravidlo Z3 ve workflow. Číslo sedm zůstalo.

## Kontrola závažných nálezů

Původní auditor faktů po opravách znovu ověřil oba oprávněné BLOCKERy. Zúžení příkladu Googlu na produktové recenze i doplnění údržby cílové adresy a metadat u DOI označil za dostatečné.

## Závěrečný audit

Čerstvý auditor bez znalosti předchozích reportů vydal verdikt **PUBLIKOVAT** bez nálezů. Ve druhé fázi přečetl oba reporty i toto vypořádání, potvrdil zapracování všech oprávněných připomínek a samostatně ověřil sedm položek v poli `pageTypes` i větu o osmé kapitole jako návodu k nasazení.
