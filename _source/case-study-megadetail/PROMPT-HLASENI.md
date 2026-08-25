# Prompt pro hlášení změn z megadetail.cz — trvalá kopie

> **Použití:** obsah bloku níže zkopíruj a vlož do vlákna, které provádí úpravy
> na megadetail.cz — ideálně po dokončení každé větší vlny prací (ne nutně po
> každé kategorii). Vlákno pak samo zapíše hlášení do `HLASENI.md` vedle tohoto
> souboru; admin session `aiseo-optimalizace` ho převezme do `DENIK.md`.
>
> Prompt se dá tady rozvíjet — při úpravě zachovej: cílový soubor, pravidlo
> „append na konec", požadavek na přesná čísla a commit jen jednoho souboru.

---

```
Nahlaš změny provedené na megadetail.cz pro evidenci AI SEO case study.

Připoj nový blok NA KONEC souboru:
/Users/ultroncloudehome/Desktop/Ultron DISK/SNIPER DESIGN ULTRON/SNIPER DESIGN/aiseo-optimalizace.cz/_source/case-study-megadetail/HLASENI.md

Pravidla (jsou i v hlavičce souboru):
1. Do HLASENI.md hlásí VÍC vláken (kategorie / produkty / blog / technika). Nadpis bloku proto VŽDY nese roli: „## Hlášení YYYY-MM-DD — <role>" (např. „— kategorie", „— produktové texty", „— blog"). Datum v nadpisu = den zápisu hlášení.
2. Najdi v souboru POSLEDNÍ blok SVÉ role a hlas jen změny od něj. Cizí bloky ignoruj (ale nečti z nich čísla do svých součtů). Pokud tvá role ještě blok nemá, shrň všechny dosavadní práce.
3. Formát: tabulka řádků Nasazeno (PŘESNÉ datum nebo rozmezí dnů — nikdy „~měsíc"; u blogu datum publikace/aktivace + article_id) | Oblast | Co přesně — POČTY, rozsah, KTERÁ POLE se zapisovala (name_h1, description_text, short_description…) | Pozn. (FAQ/schema ano-ne).
4. Odděluj „VLASTNÍ PŘÍSPĚVEK: N" (co prokazatelně vzniklo v tomto vlákně) od „MĚŘENÝ STAV: X z Y" (sken katalogu). Měřený stav celku uvádí JEN vlákno, které metriku vlastní: kategorie → kategorické vlákno, produkty → produktové, blog → blogové. Když měřený stav nesedí s minulým hlášením (čitatel i jmenovatel), rozdíl NEDOPOČÍTÁVEJ — jen ho konstatuj.
5. Jen fakta z tohoto vlákna — přesná čísla z Upgates/tvé práce. Co nevíš jistě, označ ~ jako odhad, nebo vynech. Nic neodhaduj mlčky. Hraniční den překrývající se s minulou vlnou: napiš, jak jsi ho započítal.
6. Starší bloky neupravuj. Necommituj nic jiného: git add pouze tento soubor, commit message „Case study megadetail: hlášení YYYY-MM-DD <role>", push na main. Pokud push selže na non-fast-forward, udělej git pull --rebase a push znovu (do souboru zapisuje víc vláken).
```
