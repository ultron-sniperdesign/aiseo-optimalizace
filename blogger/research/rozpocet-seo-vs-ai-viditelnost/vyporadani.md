# Vypořádání auditů

Datum: 2026-10-04

## Audit faktů

| # | Stav | Vypořádání |
|---|---|---|
| F1 | **Opraveno — zásadní** | První popis reportu Search Console nyní podmiňuje použití tím, že se report vlastnosti zobrazuje a web má dost zobrazení. Doplněno vyloučení Search Labs i možnost, že report chybí kvůli malému počtu zobrazení nebo vyloučení webu. Výhrada je také ve FAQ a v položce Checklistu. |
| F2 | **Opraveno — zásadní** | U kanálu AI Assistant doplněno, že zachytí jen relace rozpoznané podle odkazujícího zdroje nebo média `ai-assistant` a část návštěv bez zdroje může skončit jinde. Stejná mez je ve FAQ i Checklistu. |
| F3 | **Opraveno — drobný** | Bing je nově popsán jako veřejný náhled pro podporovaná prostředí Microsoftu: Copilot, AI souhrny Bingu a vybrané partnerské integrace. Zkratka „citace v Bingu“ byla v souhrnech nahrazena přesnějším označením. |

Oba zásadní nálezy byly po dokončení všech souvisejících změn předány zpět auditorovi faktů
k cílenému doověření podle C5b.

## Jazykový audit

| # | Stav | Vypořádání |
|---|---|---|
| J1 | **Opraveno** | Description nyní říká „co započítat jen jednou“, nikoli „co platíte jen jednou“. |
| J2 | **Opraveno** | V samostatné krátké odpovědi byla indexace vysvětlena jako zařazení stránek do vyhledávání a „správná data“ nahrazena vzájemně shodnými údaji. |
| J3 | **Opraveno** | „Platformní úpravy“ a „ohraničené pokusy“ nahrazeny úpravami pro konkrétní službu a pokusy omezenými časem i penězi. |
| J4 | **Opraveno** | Nejasné zájmeno ve FAQ nahrazeno přímou větou o navýšení rozpočtu pokusu. |
| J5 | **Opraveno** | Výčet ve FAQ teď důsledně rozlišuje zdroje údajů a opakované měření stejné sady dotazů. |
| J6 | **Opraveno** | Na obou místech je „Společnost OpenAI … oznámila“. |
| J7 | **Opraveno** | Kostrbaté „web musí jít projít“ nahrazeno možností vyhledávacích robotů web projít. |
| J8 | **Opraveno** | Výzva k placení nahrazena zařazením práce do samostatné rozpočtové položky. |
| J9 | **Opraveno** | Otázka nově zní „kolik vzít z rozpočtu na SEO a přesunout do AI viditelnosti“. |
| J10 | **Opraveno** | Do karty zdroje doplněn Google jako původce procházení, indexace a zobrazení. |
| J11 | **Opraveno** | Text tabulky konkrétně mluví o přístupu robotů vybraných AI služeb. |
| J12 | **Opraveno** | Nový obsah je podmíněn změřenou chybějící podstatnou informací v odpovědích služby. |
| J13 | **Opraveno** | „Platformní profil“ nahrazen firemním profilem, produktovým katalogem a datovým napojením. |
| J14 | **Opraveno** | Opravena vazba na „podmínku, za níž“. |
| J15 | **Opraveno** | Nejednoznačné „čtyři měsíční běhy“ nahrazeny čtyřmi měřeními jednou za měsíc. |
| J16 | **Opraveno** | Pasáž nyní popisuje zákazníky s delším rozhodováním a poptávky z kanálu AI Assistant. |
| J17 | **Opraveno** | Ekonomický termín „mezní přínos“ nahrazen přínosem každé další koruny nebo hodiny práce. |
| J18 | **Opraveno** | Absolutní věta o čísle „bez kanálu“ nahrazena omezením souhrnného čísla bez rozlišení zdrojových kanálů. |
| J19 | **Opraveno** | Hovorové „přes co si AI hledala podklad“ nahrazeno vazbou dotazu na citaci konkrétního zdroje. |
| J20 | **Opraveno** | „Stálá sada vlastních dotazů“ nahrazena opakovaným měřením stejné sady vybrané pro web. |
| J21 | **Opraveno** | „Měřitelná plocha“ nahrazena možností výsledky na platformě spolehlivě měřit. |
| J22 | **Opraveno** | „Opravte techniku“ zpřesněno na odstranění technických překážek webu. |
| J23 | **Opraveno** | „Produktová dostupnost“ a „stroje“ nahrazeny údaji o dostupnosti a konkrétními příjemci. |
| J24 | **Opraveno** | Doplněn původce děje: firma společný základ dál zlepšuje. |
| J25 | **Opraveno** | Věta nyní říká, že organická viditelnost a reklama nepatří do stejného kanálu. |
| J26 | **Opraveno** | „Placená nabídka“ nahrazena reklamou v AI produktu. |
| J27 | **Opraveno** | CTA nově říká, že audit zmapuje zmínky a citace v dohodnutém vzorku a dodá seznam úprav seřazený podle priority. |

## Kontrola celého souboru

Po opravách proběhlo cílené hledání všech původních formulací ve frontmatteru, textu i
vlastnostech komponent. Zůstává jen „stejný kanál“ v legitimním významu stejného
zdrojového kanálu v měření. Mechanický jazykový checker poté vrátil 0 nálezů.

## Závěrečný audit

| # | Stav | Vypořádání |
|---|---|---|
| Z1 | **Opraveno — drobný** | `seoTitle` byl rozšířen na „Rozpočet SEO a AI viditelnosti: jak ho rozdělit“. Obsahuje celý hlavní cílový výraz a má 47 znaků. |

Závěrečný auditor potvrdil všech 30 předchozích vypořádání a nenašel žádný zásadní
problém. Drobná změna SEO titulku nezasahuje do věcných pasáží ani do dříve doověřených
oprav F1 a F2.
