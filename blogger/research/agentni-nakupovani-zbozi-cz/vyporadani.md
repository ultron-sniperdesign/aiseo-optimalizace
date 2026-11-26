# Vypořádání auditů — agentni-nakupovani-zbozi-cz (Z18)

## Kolo 1 — fakta a aktuálnost (Codex, vlákno auditora 01a2152c-5233-79e2-87d8-de7017708707, 26. 11. 2026)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 6× BLOCKER, 4× WARNING, 1× TIP. Plný výstup: `audit1-result.md`. Článek přepsán celý.
Z17: grep na „Upgates zatím ne“, „stojí na dvou věcech“, „se ukáže hned“, „nákup zastaví“, „který uživatel potvrzuje“,
„takže je může používat“, „nákupní funkce Googlu“, „reklam v ChatGPT“, „V Česku dostupný není“, „veřejně popsané to není“,
„veřejné zdroje nepopisují“, „od září 2026 testuje“, „Zapojit se zatím mohou“, „Zatím jen v pilotu“, „vyvinuly“ → 0.

| # | Nález | Rozhodnutí | Co se změnilo |
|---|---|---|---|
| 1 | BLOCKER — UCP a Shopify jako vstupenka do testu | ✅ | Úvod, tabulka, shrnutí: „zapojily se technologicky připravené e-shopy, v Česku například některé obchody na Shopify; úplné podmínky přijetí zdroje neuvádějí“. `description`: přes UCP, test podle zprávy z 1. 9. FAQ Shoptet podle návrhu. Checklist: podmínky běžné inzerce ≠ podmínky pilotu; u vlastního řešení ověřit přijetí u Seznamu. |
| 2 | BLOCKER — „Upgates zatím ne“ | ✅ | H2 „Shopify v testu, Shoptet v pilotu, u Upgates bez zmínky“; FAQ „To není důkaz, že by podpora nikdy nebyla; jen ji oznámení neuvádějí.“ |
| 3 | BLOCKER — neověřený průběh objednávky a autorizace | ✅ | Řádek Shoptetu „oznámené řešení má umožnit…“; checklist „Jak pilot reaguje na rozdílné údaje a odkud přesně objednávku předvyplňuje, použité zdroje nepopisují“; věta o potvrzování nahrazena „Přesnou roli AI a průběh autorizace nákupu použité zdroje nepopisují a rozhraní jsem neověřoval“. |
| 4 | BLOCKER — podmínky Instant Checkoutu | ✅ | Buňka: Plus, Pro a Free v USA, podporované produkty amerických prodejců Etsy, jedna položka, „Dnešní dostupnost tím ověřená není“; FAQ „společně představily 29. 9. 2025“. |
| 5 | BLOCKER — UCP × MCP | ✅ | „Schopnosti UCP se mapují na nástroje MCP a obchod může … zpřístupnit i přes MCP server … Samotná podpora UCP ale neznamená, že obchod takový server nabízí.“ |
| 6 | BLOCKER — Google bez podmínek implementace | ✅ | Buňka: lednové oznámení Googlu (Google Developers Blog 11. 1. 2026), režim AI a Gemini, Merchant Center, produkty způsobilé pro nákup, formulář zájmu, integrace UCP; patička doplněna o blog Google Developers. |
| 7 | WARNING — datum zprávy × začátek testu; Shoptet „příští rok“ | ✅ | „MediaGuru 1. 9. 2026 informovalo, že Seznam začal…“; úvod tabulky „z oznámení … provozní stav jsem nezávisle neověřoval“; Insight „v příštím roce“, tedy v roce 2027 … „v řádu týdnů“ od říjnového vystoupení. |
| 8 | WARNING — „podpora reklam v ChatGPT“ | ✅ | „Upgates v oznámení verze 37 uvádí také podporu OpenAI Ads a OpenAI Pixelu; kde a za jakých podmínek může český obchodník kampaň spustit, samo oznámení neupřesňuje.“ |
| 9 | WARNING — Universal Cart „jen v USA“ | ✅ | H2 „Universal Cart od Googlu — říjnové oznámení pro USA“; „TechCrunch 15. 10. 2026 uvedl…“; „Dostupnost pro uživatele v Česku použité podklady nepotvrzují.“ |
| 10 | WARNING — „veřejné zdroje nepopisují“ | ✅ | FAQ a checklist: „v použitých zdrojích jsem nenašel; vyžádejte si…“; `research.md` „nezjištěno“. |
| 11 | TIP — Embedded Protocol, přesnější discovery | ✅ | Buňka „primární přenos REST, dále podle implementace MCP, A2A nebo Embedded Protocol“; odstavec o profilu a průniku schopností. |
| — | Tabulka podmínek | ✅ | Doplněno: běžná inzerce × pilot, Upgates jako absence zmínky, UCP × MCP, nový řádek Google a UCP, podmínky Instant Checkoutu, Universal Cart, sekundární zdroje označeny. |

**Zásadní nálezy pro C5b:** 1, 2, 3, 4, 5, 6.

## Kolo 2 — jazyk, struktura, SEO, CTA a kontrola vypořádání (Codex, vlákno 01a21534-3c3e-7ae2-b9ed-5017cabe8165, 26. 11. 2026)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 3× BLOCKER (zbytky nálezů kola 1: 1, 2, 7), 4× WARNING, 1× TIP; vypořádání 8 z 11 uzavřeno.
Plný výstup: `audit2-result.md`. Článek přepsán celý podle návrhů. Z17: grep na „nikdo nezveřejnil“, „Shoptet pilotuje“,
„Shoptet řešení pilotuje“, „u Upgates bez zmínky“, „Co je <span“, „nikdy nebyla“, „Podmínky samotného testu … to ale nejsou“ → 0.

| # | Nález | Rozhodnutí | Co se změnilo |
|---|---|---|---|
| 1 | BLOCKER — podmínky v `description` a FAQ 1 (zbytek nálezu 1) | ✅ | `description` (137 znaků) „pro přihlášené uživatele u zapojených e-shopů“; FAQ 1 „u zapojeného e-shopu“; Checklist položka 1 „Nejde o doložený úplný seznam podmínek přijetí do agentního testu.“ |
| 2 | BLOCKER — H2 o Upgates bez ukotvení (zbytek nálezu 2) | ✅ | H2 „Agentní nákup podle oznámení — Shopify v testu, Shoptet v pilotu, Upgates bez zmínky o UCP v oznámeních 37 a 37.1“ (bez středníku z návrhu). |
| 3 | BLOCKER — „termín, který nikdo nezveřejnil“, neukotvené „Shoptet pilotuje“ (zbytek nálezu 7) | ✅ | `answer` podle návrhu (52 slov, definice, bez přehledu platforem); úvodní odstavec podle návrhu; Checklist položka 3 „Ověřit možnost přijetí do testu“; shrnutí podle návrhu (tři kroky). |
| 4 | WARNING — FAQ 2, 3, 4 nejsou sebestačné | ✅ | Všechny tři odpovědi podle návrhu. |
| 5 | WARNING — dlouhý řádek CompareTable | ✅ | „Oznámené použití a podmínky“, zkrácené buňky se všemi podmínkami. |
| 6 | WARNING — technický odstavec pro provozovatele | ✅ | Vysvětlení MCP před tabulkou; nový H3 „Technický podklad pro dodavatele e-shopu“ ve třech krátkých odstavcích. |
| 7 | WARNING — opakované metodické výhrady | ✅ | Metodika, věta o autorizaci a úvod tabulky podle návrhu; z patičky vypuštěno opakované „jsem nezkoušel“. |
| 8 | TIP — „Co je UCP a ACP“ | ✅ | „Co jsou UCP a ACP“. |

**Jazykový průchod (C6):** `jazyk-check.py` 0 nálezů po kole 2.

## C5b — doověření (vlákno auditora kola 1, 26. 11. 2026)

Nálezy 1–7: **všech sedm OBSTOJÍ**, nový blocker žádný. Plný výstup: `c5b-result.md`. Audity uzavřené.
