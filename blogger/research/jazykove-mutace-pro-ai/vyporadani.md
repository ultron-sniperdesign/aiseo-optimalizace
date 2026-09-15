# Vypořádání auditů C4

15. 9. 2026. Všechny nálezy přijaty, žádné odmítnutí.

| Audit / nález | Stav | Provedená oprava |
|---|---|---|
| Fakta 1, drobný | Opraveno | H2 omezen na německou verzi a dostupný překlad. Neříká už, že překlad je obecná podmínka hreflang. |
| Jazyk 1 | Opraveno | cílí na konkrétní zemi |
| Jazyk 2 | Opraveno | Otázka výslovně kontroluje, zda se obsah zobrazí německy. |
| Jazyk 3 | Opraveno | Každá ze dvou … odkazuje; zachováno zvýraznění. |
| Jazyk 4 | Opraveno | Formulujte dotaz ke stejnému zákaznickému problému česky i německy. |
| Jazyk 5 | Opraveno | Test zopakujte. |
| Mechanika x-default (2 výskyty) | Opraveno ve slovníku | v69 rozšiřuje pravidlo default o lookbehind (?<!x-); doložený název hodnoty dle Google Search Central. |

C5b: v C2 nebyl žádný zásadní nález. Doověřovací kolo faktického auditora proto není vyžadováno. Závěrečný auditor nejdřív dostane samotný opravený článek, tyto dokumenty až v druhém kroku.

Slovník v69 navíc zachycuje dvě přesné vadné vazby z nálezů 1 a 4. Ostatní nálezy jsou opravy referentu a větné stavby; zákaz slov „německá“ či „výsledek zopakujte“ by v jiných kontextech škodil významu. Nezavedeno plošné pravidlo, důvody odpovídají doporučení auditora.

C5 samostatně: drobný TIP k přesnému názvu inLanguage opraven na „Vlastnost `inLanguage` popisuje jazyk obsahu.“; žádné zásadní nálezy.
