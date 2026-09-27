# Vypořádání auditů: Dotazy zákazníků k produktu

Datum: 2026-09-27

## Audit faktů

| Nález | Stav | Vypořádání |
|---|---|---|
| 1. Neúplný výčet podmínek `QAPage` | **Opraveno po eskalaci — zásadní** | První oprava v doověření neobstála: `answerCount` není jen počet viditelných odpovědí a výraz „úplné podmínky“ sliboval úplný výčet. Po eskalaci do vlákna FAQ uvádí jen dva rozhodující důvody pro zamítnutí běžného produktového detailu. Tělo říká „mezi další podmínky“, popisuje celkový počet odpovědí napříč stránkováním i vazbu na `commentCount` a zbývající obecné zásady, úplný text, obsahová omezení a vzdělávací výjimku ponechává v odkázané dokumentaci Googlu. |
| 2. Příliš jednoduchý popis anonymizace a uchování originálu | **Opraveno — zásadní** | Text už netvrdí, že smazání přímých identifikátorů samo znamená anonymizaci. Rozlišuje řízený systém podpory od redakční evidence, požaduje kontrolu nepřímé identifikovatelnosti a nekopírování původní komunikace do nové evidence. Doplněn účel, přístupy a doba uchování systému podpory. |
| 3. `ugc` a `nofollow` jako dvě úrovně důvěry | **Opraveno** | Text vysvětluje odlišný účel hodnot a možnost kombinace `rel="ugc nofollow"`; stejná oprava je v checklistu. |

## Jazykový audit

| Nález | Stav | Vypořádání |
|---|---|---|
| 1. Nejasné „na produktu“ v titulku | **Opraveno** | `title` i `seoTitle` používají „k produktu“. |
| 2. Rozbitá vazba v krátké odpovědi | **Opraveno** | Krátká odpověď odděluje odosobněné znění, přiřazení produktu a ověření odpovědi; používá přirozené „odpovídá za přesnost“. |
| 3. Neurčité „svůj slovník“ | **Opraveno** | Nahrazeno slovy, kterými zákazník problém popisuje. |
| 4. Metafora „automat na obsah“ | **Opraveno** | Nahrazeno přímým sdělením, že dotazy nejsou hotový obsah k automatickému zveřejnění. |
| 5. Střídání „dotaz“ a „otázka“ | **Opraveno** | Úvod stanovuje pravidlo: dotaz je původní podnět, otázka odosobněné redakční znění. Zbytek textu je s tímto rozlišením sjednocený. |
| 6. Abstraktní nadpis „rozhoduje o cestě“ | **Opraveno** | Nadpis přímo říká určit, kam odpověď patří. |
| 7. Nesouběžný výčet zdrojů a „kanál“ | **Opraveno** | Výčet je mluvnicky sjednocený a používá „zdroj“. Současně byl zpřesněn způsob evidence. |
| 8. Odpověď „bydlí“ | **Opraveno** | Nahrazeno „zveřejněná a udržovaná“. |
| 9. Nevysvětlená „kanonická stránka“ | **Opraveno** | Nahrazeno „hlavní stránka s úplnými podmínkami“. |
| 10. „Surová otázka“ | **Opraveno** | Nadpis používá „původní dotaz“. |
| 11. „Vlastník odpovědi“ a rozbitý popis | **Opraveno** | Krok říká „Určete, kdo za odpověď odpovídá“ a odděluje lidi od podkladů. |
| 12. Nejasné „zařaďte kontrolu“ a „na telefonu“ | **Opraveno** | Krok říká naplánovat kontrolu a výslovně zkontrolovat zobrazení v telefonu. |
| 13. „Marketingová nahrávka“ | **Opraveno** | Nahrazeno reklamní otázkou, která prodejci nahrává. |
| 14. „Výsledek“ místo přímé odpovědi | **Opraveno** | Oba výskyty používají „přímá odpověď“. |
| 15. Nevysvětlené FAQ a Q&A | **Opraveno** | Nadpis a první odstavec nejdřív uvádějí české názvy a zkratky v závorkách. |
| 16. „Ověřené otázky“ | **Opraveno** | Text rozlišuje skutečnou otázku a věcně ověřenou odpověď. |
| 17. Neúplné „lepší pořadí“ | **Opraveno** | Zdrojový box mluví o umístění ve vyhledávání a uvádění webu ve zdrojích odpovědí AI. |
| 18. Neurčitý „produktový blok“ | **Opraveno** | Nadpis jmenuje blok více otázek. |
| 19. Nevysvětlené a kolísající „FAQ rich result(s)“ | **Opraveno** | Všude je české „rozšířený výsledek s FAQ“ nebo jeho přirozený pád. |
| 20. Příliš silný „konečný stav“ | **Opraveno** | Nahrazeno datovanou návazností na starší omezení. |
| 21. „Podezřelé příspěvky schvalovat“ | **Opraveno** | Text říká ručně kontrolovat před zveřejněním. |
| 22. Kostrbatý popis atributů odkazů | **Opraveno** | Technické hodnoty jsou vysvětlené v těle a v checklistu bez stupnice důvěry. |
| 23. Abstraktní nadpis a „provozní výsledek“ | **Opraveno** | Nadpis sleduje úbytek nezodpovězených otázek a odstavec rovnou vyjmenovává ukazatele. |
| 24. Nejasné „ověřte ji na telefonu“ | **Opraveno** | Odstavec výslovně mluví o odpovědi a jejím nalezení v telefonu. |
| 25. Úřední „jednou za zvolené období“ | **Opraveno** | Nahrazeno „Pravidelně procházejte“. |
| 26. Kalk „zavřít mezeru“ | **Opraveno** | Závěr říká, že odpověď doplní chybějící informaci. |

## Kontrola úplnosti

- Celý článek včetně frontmatteru byl po opravách znovu prohledán na výrazy `na produktu`, `anonymiz`, `kanonick`, `surov`, `vlastník odpovědi`, `marketingovou nahrávku`, `provozní výsledek`, `FAQ rich`, `rich result`, `konečný stav`, `podle důvěry`, `schvalovat ručně` a `zavře`; nezůstal žádný výskyt.
- `seoTitle` má 45 znaků, description 141 znaků a `answer` 52 slov.
- Mechanický jazykový checker po opravách hlásí 0 nálezů.
