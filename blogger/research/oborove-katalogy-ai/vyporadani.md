# Vypořádání auditů — Oborové katalogy v AI éře

Datum: **2026-10-19**

## Audit faktů

| # | Stav | Vypořádání |
|---:|---|---|
| 1 | **Opraveno — zásadní** | Věta o Gemini nyní uvádí přihlášení, zapnuté ukládání aktivity, nedostupnost v živých konverzacích a ve Zprávách Google i hranici, že použití konkrétního profilu není zaručeno. Stejná podmínka byla doplněna do `research.md`. |
| 2 | **Opraveno v C4, následně překonáno novým nálezem C5** | První oprava doplnila stránku beta verze Seznam AI. Závěrečný auditor však našel novější tiskovou zprávu z 15. 10. 2026, která aktivní propojení Firmy.cz potvrzuje. Konečné vypořádání je v oddílu „Závěrečný audit“ níže. |
| 3 | **Opraveno** | Kvantifikátor „u většiny českých katalogů“ byl odstraněn. FAQ jmenuje jen skutečně ověřované Zlaté stránky a Najisto. |
| 4 | **Opraveno** | Starší doporučení Googlu dostalo vlastní odkaz, název, rok a výhradu, že nejde o popis dnešního algoritmu. SourceCard zůstal omezen na současná pravidla odkazového spamu. |
| 5 | **Opraveno** | `Bing Places` i věta o zdrojích údajů v Google Business Profilech nyní vedou přímo na příslušnou dokumentaci. |

## Jazykový audit

| # | Stav | Vypořádání |
|---:|---|---|
| 1 | **Opraveno** | `answer` nyní konkrétně popisuje správu údajů, přivedené zákazníky a ověřitelné informace důležité při výběru. |
| 2 | **Opraveno** | Úvod odděluje správu profilu, návštěvnost katalogu a informace v profilu. |
| 3 | **Opraveno** | Výskyty obecného „ekosystému“ byly nahrazeny konkrétními mapami, vyhledávači a službami. Kontrola celého souboru neukázala žádný zbylý výskyt. |
| 4 | **Opraveno** | „Odkazový šum“ v description nahradil „seznam odkazů bez doloženého přínosu“. |
| 5 | **Opraveno** | FAQ nyní vysvětluje, že další profily se volí podle map a vyhledávačů používaných zákazníky. |
| 6 | **Opraveno** | Sjednocena větná stavba a „spolehlivost profilu“ nahrazena důvěryhodností údajů. |
| 7 | **Opraveno** | Absolutní „bez publika, kontroly“ bylo nahrazeno doloženou návštěvností a možností správy záznamu. |
| 8 | **Opraveno** | Vypuštěna „slabší výchozí pozice“; odstavec nyní uvádí přímou podmínku smyslu. |
| 9 | **Opraveno** | „Brání chybě“ nahrazeno „pomáhá předejít záměně“. |
| 10 | **Opraveno** | „Nárokovat záznam“ nahrazeno „převzít správu záznamu“ ve všech výskytech. |
| 11 | **Opraveno** | Odstavec o Firmy.cz nyní přímo vymezuje, co lze tvrdit, a odděluje dnešní stav od původního oznámení. |
| 12 | **Opraveno** | Box nyní říká, že starší oznámení mohlo popisovat stav v den vydání. |
| 13 | **Opraveno** | Podmět je hodnotitel katalogu, „živé“ nahradilo „stále provozované“ a věta výslovně mluví o dohledatelnosti ve Vyhledávání Google. |
| 14 | **Opraveno** | Pomůcka je oddělena od algoritmu Googlu i od studie zdrojů citovaných v AI odpovědích. |
| 15 | **Opraveno** | Otázky se ptají na možnost spravovat údaje a na konkrétní údaje užitečné pro výběr dodavatele. |
| 16 | **Opraveno** | U placeného zápisu je určeno zkušební období, minimální počet poptávek a maximální přijatelná cena za poptávku. |
| 17 | **Opraveno** | Bodování nyní rozlišuje správu údajů na důležitém místě, vlastní správu profilu a konkrétní doplňující údaje. Záporné body mají samostatné podmínky. |
| 18 | **Opraveno** | Dotaz na návštěvnost nyní požaduje relevantní měsíční návštěvy a způsob měření. |
| 19 | **Opraveno** | „Silný odkaz“ byl nahrazen popisem situace, kdy odkaz není hlavním přínosem profilu. |
| 20 | **Opraveno** | SourceCard už tvrdí jen to, co dokládá jeho odkaz. Starší doporučení je v samostatné větě s přímým zdrojem. |
| 21 | **Opraveno** | Věta popisuje získávání údajů přirozenou češtinou a z obecného seznamu zdrojů neodvozuje konkrétní partnerství. |
| 22 | **Opraveno** | Oprava u karty chyby teď jmenuje možnosti profilu a kritéria, podle nichž návštěvník vybírá dodavatele. |
| 23 | **Opraveno** | Pseudo-termín „faktor shody“ byl odstraněn; věta přímo vymezuje, co doloženo není a proč mají přesné údaje praktický význam. |
| 24 | **Opraveno** | „Negarantuje“ nahrazeno „nezaručuje“. |
| 25 | **Částečně opraveno, věcná část odmítnuta** | Kostrbaté „dostanete … jeho projití“ bylo přeformulováno. Požadavek změnit 30–60 minut na 60 minut odmítám: aktuální kanonický datový modul `src/content/pages/audit.ts` uvádí schůzku 30–60 minut na více místech a workflow nařizuje brát název, cenu i znění služby odtud. `marketing/05-messaging-a-tonalita.md` je v tomto bodě zastaralý; rozpor byl nahlášen uživateli během runu. |

## Kontrola opakovaných výrazů

Po úpravách byl celý soubor prohledán na výrazy `ekosystém`, `oborový kontext`, `ovládá`, `nárokovat`, `faktor shody`, `silný odkaz`, `negarantuje` a „většina českých katalogů“. Žádný nezůstal. Údaj 30–60 minut zůstává záměrně podle aktuálního `audit.ts`.

## Závěrečný audit

| # | Stav | Vypořádání |
|---:|---|---|
| 1 | **Opraveno — zásadní** | Doplněna tisková zpráva Seznamu z 15. 10. 2026, která propojení Seznam AI s Firmy.cz potvrzuje a uvádí využití údajů o občanské vybavenosti. Přepsán nadpis, výklad, checklist a FAQ. `research.md` nyní staví aktuální závěr na novějším konkrétním zdroji a nesoulad obecné nápovědy uvádí jako limit dokumentace. Zůstává výhrada, že propojení nezaručuje použití konkrétního profilu nebo údaje v každé odpovědi. |
| 2 | **Opraveno** | „Přihlášené aplikace Gemini“ bylo nahrazeno přesným podmětem „uživatel přihlášený do aplikace Gemini se zapnutým ukládáním aktivity“. Věcné podmínky a omezení zůstaly zachované. |

Závěrečný auditor potvrdil, že odmítnutí pevné 60minutové schůzky obstojí: aktuální `audit.ts` uvádí 30–60 minut ve třech částech živé nabídky.
