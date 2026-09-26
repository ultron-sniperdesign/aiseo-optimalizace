# Vypořádání auditů: Tabulky a seznamy pro AI

Datum: 2026-09-26

## Faktický audit

| # | Stav | Vypořádání |
|---:|---|---|
| 1 | **Opraveno** | Tvrzení o „požadovaných výslovných vazbách“ bylo nahrazeno přesným rozlišením: složitější záhlaví mohou potřebovat `scope`, případně `id` a `headers`, aby šel vztah určit programově. |
| 2 | **Opraveno** | Popis *Table Meets LLM* nyní uvádí podstatné meze vítězné konfigurace benchmarku porozumění struktuře, závislost na úloze a menší vzorek pro GPT‑4. |
| 3 | **Opraveno** | TabVerse je při prvním výskytu výslovně označený jako nerecenzovaný preprint. |
| 4 | **Opraveno** | Nedoložený slib „bez nástroje a za pět minut“ byl odstraněn. Nadpis nyní slibuje jen čtyři rychlé testy bez zvláštních nástrojů; navazující kontrola HTML zůstává samostatným krokem. |
| 5 | **Opraveno** | Odkaz na výklad WCAG 1.3.1 byl změněn z verze 2.1 na aktuální WCAG 2.2. |

Faktický audit nenašel žádný zásadní nález ani blocker. Všech pět drobných připomínek bylo přijato.

## Jazykový audit

| # | Stav | Vypořádání |
|---:|---|---|
| 1 | **Opraveno** | „Jiné podstatné pořadí“ bylo ve frontmatteru i úvodu nahrazeno výčtem, u něhož záleží na pořadí. |
| 2 | **Opraveno** | Vztahy mezi údaji nyní zachovává struktura; lidem a strojům je pomáhá pochopit. Opraveno ve frontmatteru i úvodu. |
| 3 | **Opraveno** | FAQ odděluje nedostupné vztahy v obrázku od problémů obrázku na menší obrazovce a pro uživatele pomocných technologií. |
| 4 | **Opraveno** | Kalk „tabulka má stát sama“ byl nahrazen formulací „má být srozumitelná sama o sobě“. |
| 5 | **Opraveno** | Ceny už „neplatí měsíčně“; text rozlišuje měsíční a roční částky. |
| 6 | **Opraveno** | Organizace je správně pojmenovaná jako iniciativa konsorcia W3C pro přístupnost webu (WAI). |
| 7 | **Opraveno** | H2 nyní říká, co dokládá výzkum, ne co „dokládá AI“. |
| 8 | **Opraveno** | Odstavec o studiích byl přepsán do přirozené češtiny a současně fakticky zpřesněn podle faktického auditu. |
| 9 | **Opraveno** | Zdrojová karta TabVerse mluví o přesnosti odpovědí na otázky k tabulkám a výsledcích ve prospěch textového zápisu se zachovanou strukturou. |
| 10 | **Opraveno** | „Jediná kopie informace“ byla nahrazena pravidlem, že důležitá informace nesmí být vyjádřena jen barvou, ikonou nebo tučným písmem. |
| 11 | **Opraveno** | „Rovnocenné znaky“ byly nahrazeny rovnocennými body a ceny se porovnávají za stejné období. |
| 12 | **Opraveno** | Všechny tři tvary od slovesa „skenovat“ byly nahrazeny českými vazbami „rychle projít“, „rychlé pročtení“ a „špatně procházet“. |
| 13 | **Opraveno** | Neurčitý „převod“ byl rozveden jako pokus převést obsah do jiného formátu. |
| 14 | **Opraveno** | Prohození položek nyní narušuje postup nebo mění pořadí priorit; nic se „nerozbíjí“. |
| 15 | **Opraveno** | Nejasná hranice, „připouští“ a hybridní „AI značení“ byly nahrazeny přímým závěrem z doporučení Googlu a „značením určeným pro AI“. |
| 16 | **Opraveno** | „Hodnoticí trik“ i „odpovídání nad tabulkou“ byly nahrazeny prostředkem k lepšímu hodnocení stránky a odpověďmi na otázky z předložené tabulky. |
| 17 | **Opraveno** | Pokyn nově požaduje stejnou větnou stavbu položek. |
| 18 | **Opraveno** | Přesný časový slib a neurčité „bez nástroje“ byly odstraněny. |
| 19 | **Opraveno** | Závěrečný H2 nyní říká, že formát má zachovat vztahy mezi údaji. |
| 20 | **Opraveno** | Závěr konkrétně mluví o případné citaci a o užitečnosti, přesnosti a dohledatelnosti informací. |

Všechny opravené výrazy byly po úpravě vyhledány v celém souboru včetně frontmatteru; žádný starý výskyt nezůstal. Mechanický jazykový checker po opravách hlásí 0 nálezů.

## Závěrečný audit

| # | Stav | Vypořádání |
|---:|---|---|
| 1 | **Opraveno** | Z karet `Do` a `Dont` byly odstraněny vlastní popisky, protože je vykreslují už samotné komponenty. |
| 2 | **Opraveno** | Porovnávací komponentu s nepodporovaným tónem nahradila skutečná HTML tabulka. |
| 3 | **Opraveno** | Ukázková tabulka nyní obsahuje vlastní `<caption>` a správně označené hlavičky řádků i sloupců. |
| 4 | **Opraveno** | Prázdný skupinový H3 byl nahrazen úvodní větou před kartami, jejichž názvy zůstávají na úrovni H3. |
| 5 | **Opraveno** | Popis *Table Meets LLM* už neprezentuje neúplný výčet jako celý recept a vypořádání přesněji popisuje rozsah opravy. |

Závěrečný audit nenašel žádný blocker. Všech pět drobných připomínek bylo přijato a zapracováno.
