# C2 — nezávislý faktický audit

Datum: 15. 9. 2026. Auditovaný soubor: `clanek.mdx` v této složce. Přečteny také `research.md` a `blogger/auditor-system.md`. Článek nebyl editován.

## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

0 zásadních nálezů, 1 drobný nález. Doporučená oprava je lokální zpřesnění H2. Hlavní technický postup je správný; článek neslibuje měřený účinek hreflang na citace AI.

## Nález 1 — [WARNING] Drobný: překlad není obecnou podmínkou hreflang

- **Citovaná pasáž:** „Pro hreflang je potřeba dostupný překlad“ (H2).
- **Problém:** Samostatně citovatelný nadpis zobecňuje podmínku nad rámec modelové dvojice čeština–němčina. Hreflang je použitelný také pro regionální varianty ve stejném jazyce a Google výslovně uvádí použití u stránek s přeloženou šablonou a nepřeloženým hlavním obsahem. Tělo článku později regionální varianty správně rozlišuje; vadný je univerzální význam tohoto nadpisu, nikoli doporučení přeložit německou produktovou stránku.
- **Důkaz:** [Google: Tell Google about localized versions of your page](https://developers.google.com/search/docs/specialty/international/localized-versions), seznam scénářů: „If you keep the main content in a single language and translate only the template“; následující položka zahrnuje drobné regionální rozdíly v jediném jazyce.
- **Cílená oprava:** `## U <span class="hl">německé verze</span> zajistěte <strong>dostupný překlad</strong>`
- **Závažnost:** drobný, bez nutnosti přepisovat sekci.

## Ověření a aktivně hledané protidůkazy

- Nezávislé hledání vedlo také na [dokumentaci kanonikalizace](https://developers.google.com/search/docs/crawling-indexing/canonicalization): plnohodnotné překlady se nepovažují za duplicity pouze proto, že mají stejné téma. Regionální varianty stejného jazyka vyžadují samostatné posouzení. Příklady canonical v článku jsou s tím v souladu. Canonical je preference, ne příkaz; FAQ používá správné sloveso „navrhuje“.
- [Pokyny k hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions) potvrzují úplné adresy, vlastní a vzájemné odkazy, různé domény, rovnocennost tří metod a nepovinný x-default. Google připouští i neúplné sady, pokud zůstává obousměrné propojení; pro dvě varianty v ukázce je úplná shodná sada správná. Nepovažuji doporučení za chybu.
- [Vícejazyčné weby](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) potvrzují samostatné URL, rozpoznání jazyka z textu a problémy dynamického přepínání podle preferencí. Doporučení přímého otevření stránky je užitečná základní kontrola, není vydávaná za plný audit indexace.
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) potvrzuje indexaci a způsobilost pro úryvek jako podmínky podpůrného odkazu, absenci dalších zvláštních technických požadavků i absenci garance zobrazení. Hledání protidůkazu k tvrzení o jazyku/citacích neodhalilo v primárních podkladech návod, který by z hreflang dělal příkaz pro jazyk odpovědi. Absenci takového dokladu nezaměňuji za důkaz nulového vlivu.
- [Schema.org inLanguage](https://schema.org/inLanguage) potvrzuje význam a BCP 47. [W3C k deklaraci jazyka](https://www.w3.org/International/questions/qa-html-language-declarations) potvrzuje lang na html. Není zaměňován s hreflang.

## SEO, citovatelnost a CTA

- `seoTitle`: 50 znaků, klíčové slovo na začátku. `description`: 139 znaků. `answer`: 52 slov, začíná definicí a dává samostatný smysl. Tyto údaje ověřeny přímo skriptem z draftu.
- Pět H2 s přehledným postupem; konkrétní HTML a JSON. Nadpis v nálezu 1 opravit také kvůli samostatné citovatelnosti.
- Tři opakování testu jsou jasně označené jako malý pracovní vzorek, nikoli statistický důkaz; nevznáším nález proti záměrně omezené metodice.
- CTA vede přímo na Pack a neslibuje vlastnost produktu, kterou článek nedokládá. Chybějící cenu nevnímám jako faktickou vadu: instrukce vyžaduje konkrétní produkt a ten odkaz splňuje.

Rozsah: věcná správnost, overclaimy, základní SEO/citovatelnost/CTA. Jazykový audit ani vizuální test výsledného webu nejsou součástí této role.
