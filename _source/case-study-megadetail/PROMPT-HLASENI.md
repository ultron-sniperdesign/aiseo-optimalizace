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
1. Podívej se na poslední blok v souboru a hlas jen změny, které v něm ještě nejsou (od posledního hlášení). Pokud žádný blok není, shrň všechny dosavadní práce.
2. Formát bloku (šablona je v souboru): nadpis „## Hlášení YYYY-MM-DD" + tabulka řádků: Nasazeno (datum) | Oblast (obsah kategorií / produkty / technika / schema / …) | Co přesně — POČTY a rozsah (kolik kategorií dostalo text, které zásadní, ~délka, struktura: úvodní odpověď/FAQ, strukturovaná data ano/ne) | Pozn. Pod tabulku řádek „Stav celku: N z M kategorií má text (bylo K před začátkem)".
3. Jen fakta z tohoto vlákna — přesná čísla z Upgates/tvé práce. Co nevíš jistě, označ ~ jako odhad, nebo vynech. Nic neodhaduj mlčky.
4. Starší bloky neupravuj. Necommituj nic jiného: git add pouze tento soubor, commit message „Case study megadetail: hlášení YYYY-MM-DD", push na main.
```
