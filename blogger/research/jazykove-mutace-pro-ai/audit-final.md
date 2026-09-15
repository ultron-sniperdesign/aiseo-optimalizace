# C5 — závěrečný audit a kontrola vypořádání

**VERDIKT: PUBLIKOVAT.** K 15. 9. 2026 nezůstává žádný zásadní ani drobný otevřený nález.

## Nezávislost a postup

1. První krok proběhl pouze nad článkem a `auditor-system.md`, bez předchozích auditů a rešerše. Vlastní kontrola primárních zdrojů a hledání protidůkazů jsou zaznamenány v `audit-final-samostatne.md`. Výsledek: žádný zásadní nález, jeden drobný TIP k přesnému názvu inLanguage.
2. Teprve ve druhém kroku byly přečteny `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md`. Všechny jejich nálezy byly porovnány s nynějším `clanek.mdx`. Cíleně byla ověřena také deklarovaná změna slovníku a spuštěn jazykový checker. Článek ani slovník jsem neměnil.

## Kontrola všech vypořádaných nálezů

| Nález | Přímá kontrola nynějšího stavu | Výsledek |
|---|---|---|
| C2 fakta 1 — překlad jako údajná obecná podmínka hreflang | H2 zní „U německé verze zajistěte dostupný překlad“. Doporučení je omezené na konkrétní německý překlad; regionální varianty stejného jazyka jsou dále zvlášť vysvětlené. | Opraveno |
| C3 jazyk 1 — chybějící předložka | FAQ obsahuje „když verze opravdu cílí na konkrétní zemi“. | Opraveno |
| C3 jazyk 2 — nejasný podmět | Kontrolní otázka zní „Zobrazí se obsah německy i bez předchozí návštěvy české verze?“ | Opraveno |
| C3 jazyk 3 — vazba u dvou / každá | Věta začíná „Každá ze dvou samostatných, plně přeložených produktových stránek“; tento úsek zůstal zvýrazněný. | Opraveno |
| C3 jazyk 4 — použít problém česky | Pokyn zní „Formulujte dotaz ke stejnému zákaznickému problému česky i německy.“ | Opraveno |
| C3 jazyk 5 — opakování výsledku | Nadpis kroku je „Test zopakujte“. | Opraveno |
| C3 mechanika — dva zásahy default | Platná hodnota x-default zůstala zachována. Slovník v69 obsahuje cílenou výjimku `(?<!x-)` u pravidla default a odkaz na dokumentaci Googlu. Nynější checker nehlásí žádný nález. | Opraveno |
| C5 samostatný TIP — InLanguage | Blok nyní obsahuje „Vlastnost `inLanguage` popisuje jazyk obsahu.“ | Opraveno |

Vypořádání uvádí přijetí všech nálezů. Nenašel jsem odmítnutý nebo pouze deklarativně uzavřený obsahový nález. Změna slovníku v69 je doložená jeho hlavičkou; cílená pravidla zachycují dvě konkrétní vadné vazby. Nevytváření plošných zákazů ostatních slov odpovídá kontextové povaze jazykových nálezů.

## Faktické opory

Zúžený H2 je v souladu s [dokumentací hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions), která připouští i regionální varianty stejného jazyka a nepřeložený hlavní obsah s přeloženou šablonou. Přesný název vlastnosti potvrzuje [Schema.org inLanguage](https://schema.org/inLanguage).

Samostatná kontrola dále potvrdila oddělení překladů a kanonických adres podle [Google canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), dostupnost a viditelný jazyk podle [pokynů pro vícejazyčné weby](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites), deklaraci HTML jazyka podle [W3C](https://www.w3.org/International/questions/qa-html-language-declarations) a podmínky zařazení podpůrných odkazů podle [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features). Článek nevyvozuje garantovaný účinek hreflang na jazyk či citace AI.

## Mechanická kontrola

Příkaz: `python3 jazyk-check.py research/jazykove-mutace-pro-ai/clanek.mdx --slovnik JAZYK_SLOVNIK.md`

Výsledek: **1 454 slov, 275 pravidel, 0 nálezů, návratový kód 0**.

## Meze závěru

Verdikt potvrzuje obsahovou připravenost článku a vypořádání auditů. Nejde o potvrzení výsledku buildu, vizuálního renderu nebo nasazení. V prvním kroku webový nástroj nedokázal otevřít interní odkaz `/blog/strukturovana-data-pro-ai/`; technická chyba nástroje není důkaz nefunkčnosti odkazu. Ostatní prověřené interní cíle (test AI viditelnosti a Pack) se otevřely. Původní samostatný audit zůstává zachovaný jako záznam hodnocení před přečtením předchozích auditů.
