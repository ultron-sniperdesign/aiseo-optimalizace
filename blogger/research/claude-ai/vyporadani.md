# Vypořádání auditů — Claude AI

Datum: 6. 10. 2026

## Audit faktů

| Nález | Stav | Vypořádání |
|---|---|---|
| F1 — `Claude-SearchBot` podaný jako nutná podmínka citace | **Opraveno** | Krátká odpověď, nadpis sekce, upozornění, tabulka, Stepper i FAQ nyní rozlišují jistý účinek `noindex` od možné ztráty dohledatelnosti po zákazu robota. Nikde se netvrdí, že povolení robota samo zajistí nebo podmiňuje citaci. |
| F2 — „všechny plány“ bez podmínky modelu a správy Team/Enterprise | **Opraveno** | Text i porovnávací tabulka doplňují podporovaný model, dostupné a zapnuté webové vyhledávání a povolení správcem pracovního prostoru u Team/Enterprise. Zmíněn je i rozdíl staršího a nového rozhraní. |
| F3 — smíchaná metodika hledanosti a meziroční změny | **Opraveno** | Interní odkaz na obsahový plán byl odstraněn. Text zvlášť popisuje průměrnou měsíční hledanost za posledních 12 měsíců a změnu posledního měsíce proti stejnému měsíci předchozího roku; uvádí datum měření. |

Zásadní nálezy F1 a F2 byly po dokončení všech souvisejících úprav vráceny stejnému auditorovi k cílenému doověření podle C5b.

## Jazykový audit

| Nález | Stav | Vypořádání |
|---|---|---|
| J1 — nejasný podmět v description | **Opraveno** | „kdy vyhledávání použije“ nahrazeno přímým „kdy Claude vyhledává“. |
| J2 — web „vyřazuje stránku z indexace“ | **Opraveno** | Krátká odpověď přeformulována podle faktického auditu: veřejná stránka, účinek `noindex` a možný dopad zákazu robota jsou oddělené. |
| J3 — „citace podkládají část odpovědi“ | **Opraveno** | FAQ nyní říká, že odkazy na zdroje mohou být jen u některých tvrzení. |
| J4 — abstraktní „cesta ke zdroji“ | **Opraveno** | Úvod přímo říká, že Claude se v jednotlivých případech dostává k podkladům jinak. |
| J5 — srovnání s neuvedenou hodnotou v plánu | **Opraveno** | Interní poznámka odstraněna; metodika obou metrik je ve veřejném textu rozepsaná. |
| J6 — hovorové „sahá na web“ | **Opraveno** | Nadpis používá „kdy vyhledává na webu“. |
| J7 — „odpovědi pomohly informace“ | **Opraveno** | Věta nyní říká, že aktuální informace mohou zlepšit odpověď. |
| J8 — dvě kostrbaté formulace v porovnání | **Opraveno** | Research je „podrobná rešerše složitějšího tématu“ a další hledání navazuje na předchozí zjištění. |
| J9 — „přesnost stránky“ | **Opraveno** | Tabulka odděluje dohledatelnost stránky a přesnost vyhledávacích výsledků. |
| J10 — „nikoli samostatně webové vyhledávání“ | **Opraveno** | Buňka přímo říká, že zákaz `ClaudeBot` sám o sobě neblokuje webové vyhledávání. |
| J11 — pravidla se sama „rozhodují“ | **Opraveno** | Text oslovuje správce: o povolení každého robota rozhodujte podle účelu. |
| J12 — personifikace webu a „deklarace záměru“ | **Opraveno** | Popis příkladu nyní přímo uvádí, co konfigurace povoluje a zakazuje. |
| J13 — „obsah za heslem nebo po odstranění“ | **Opraveno** | Krok rozlišuje obsah chráněný heslem a odstraněnou stránku. |
| J14 — neobratný záznam URL a opakování | **Opraveno** | Stepper vyjmenovává záznam webového hledání, zmínky, adresy URL a počtu běhů. |
| J15 — pseudo-technický „vyhledávací tok“ | **Opraveno** | Účinek `noindex` je popsán jako nezařazení mezi zdroje pro webové vyhledávání Claude. |
| J16 — „pracoval s aktuálním webem“ | **Opraveno** | Tabulka říká, že Claude při tvorbě odpovědi vyhledával aktuální informace na webu. |
| J17 — opakování slova „jazyk“ | **Opraveno** | Věta zní „Claude může odpovědět v jazyce, který použije člověk.“ |
| J18 — tautologický pokyn k českému testu | **Opraveno** | Text nyní váže české dotazy na české publikum a ukládá zaznamenat jazyk i zemi. |
| J19 — neprůhledný začátek závěru | **Opraveno** | Závěr začíná rozdílnými typy podkladů a konkrétně vyjmenovává tři cesty k aktuálním informacím. |
| J20 — nejasné porovnání výsledků | **Opraveno** | Text jmenuje porovnání před úpravou a po ní i mezi obdobími. |
| J21 — abstraktní CTA | **Opraveno** | CTA přímo popisuje načtení webu roboty, chybějící obsah, citované stránky a úpravy seřazené podle důležitosti. |

Po úpravách byl celý soubor znovu prohledán na původní formulace; žádná nezůstala.
