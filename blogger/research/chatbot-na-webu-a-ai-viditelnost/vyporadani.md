# Vypořádání C2 a C3 — 17. 9. 2026

## C2 fakta

| ID | Stav | Řešení |
|---|---|---|
| F1 | Staženo auditorem | seoTitle má splňovat do 60 znaků podle C1b a ARTICLE_TEMPLATE, nikoli minimum 50. Beze změny. Hlavní title interval 50–60 splňuje. Důvod doložen přesnějším pravidlem workflow a potvrzen auditorem v reportu. |
| F2 | Opraveno | Popis odkazu nyní slibuje rozbor výběru a citování zdrojů mezi platformami, který odpovídá cíli jak-ai-cituje-zdroje. |
| F3 | Opraveno | Přijat dobrovolný tip: H2 Googlebot při běžném procházení, krátká definice robotu a odstavec Google-Agent s primární citací. Editor znovu otevřel dokumentaci 17.9.2026: agents navigate web and perform actions upon user request. |

Žádný zásadní nález, C5b není potřeba.

## C3 jazyk

| ID | Stav | Konkrétní změna |
|---|---|---|
| J1 | Opraveno | „není doloženou zárukou“ → „nezaručuje lepší pozice ani citace v AI odpovědích“. |
| J2 | Opraveno | Fin v samostatné FAQ vysvětlen jako AI asistent Intercomu. |
| J3 | Opraveno | Metafora „kde odpověď žije“ nahrazena rozdílem mezi odpovědí jen v chatu a na veřejné stránce. |
| J4 | Opraveno | Podmětem se stal „Tento popis importu nedokládá…“, import už nic nepopisuje. Závěr zůstává omezen na důkaz v dokumentaci. |
| J5 | Opraveno | „provádět interakce“ nahrazeno klikáním a psaním do formulářů; srovnání výslovně běžné procházení Googlu. |
| J6 | Opraveno | Dokumentace ukazuje rozdíl mezi podklady pro chatbot a veřejnými články. |
| J7 | Opraveno | Unlisted popsán jako režim článku; odstraněna opakovaná věta o URL. Vlastní URL nedokládá dohledatelnost vyhledávači. |
| J8 | Opraveno | Záhlaví tabulky „Kde má být informace dostupná“, objednávka „V zákaznickém účtu po přihlášení“. |
| J9 | Opraveno | „opakovatelný problém“ → otázka týkající se dalších zákazníků, oddělená od okolností případu. |
| J10 | Opraveno | Výčet teď jmenuje produktovou stránku, informace o dopravě, návod a časté dotazy. |
| J11 | Opraveno | Popsáno místo a aktualizace odpovědi; citování stránky externí AI službou má jednoznačný podmět. |
| J12 | Opraveno | Obecná nutnost „promyšleného obsahu“ nahrazena doporučením zveřejnit odpovědi, které mají být dohledatelné mimo chat. |
| D1 | Opraveno | Popis používá „odpovědi na časté dotazy“, tělo vysvětluje FAQ a HTML při konkrétní kontrole. |
| D2 | Opraveno | H2 „Podklady chatbotu mohou zůstat neveřejné“, rich formát zachován. |
| D3 | Opraveno | FAQ jmenuje kliknutí a odeslání otázky. Google odstavec jmenuje uživatelské akce místo abstraktní interakce. |

Všechna jazyková doporučení přijata. Nepřidáváme slovníkové regexy: vady závisí na významu věty, podmětu nebo slibovaném obsahu odkazu. Samotná slova mají správná užití a plošné zákazy by vytvářely falešné nálezy. Verze slovníku zůstává v70. C6 po jazykových změnách: 1971 slov, 0 nálezů; po závěrečných drobných doplněních se zopakuje.

## C5 — samostatná fáze 1

| ID | Stav | Řešení |
|---|---|---|
| C5-01 | Odmítnuto | Stejný výklad jako stažený F1. C1b v aktuálním Content Workflow Codex.md požaduje „seoTitle do 60 znaků“ a ARTICLE_TEMPLATE.md pro něj výslovně říká do 60. Minimum50 se vztahuje na title, který je splňuje. Stávající věcný seoTitle ponechán bez vycpávání. Doložené konkrétní pravidlo má přednost před obecným auditorským intervalem. |
| C5-02 | Opraveno | Druhá sousední zmínka kliknutí odstraněna; „Důležitý text proto načítejte bez čekání na zásah návštěvníka.“ |
| C5-03 | Opraveno | „další podmínka“ → „základní podmínky Googlu“, včetně indexu a způsobilosti úryvku. Výhrada nezaručeného zobrazení zachována. |

Žádný zásadní nález ani po C5; tyto opravy jsou drobné. C5 fáze2 má ověřit všechna rozhodnutí včetně odmítnutí C5-01.

C5 fáze2 dokončena: auditor potvrdil každou opravu, vlastní C5-01 stáhl po ověření specifických pravidel. Konečný verdikt PUBLIKOVAT,0otevřených nálezů. Finální C6:2001slov,0nálezů; build exit0.
