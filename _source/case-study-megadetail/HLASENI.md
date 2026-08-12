# Hlášení změn na megadetail.cz — schránka pro deník case study

> **Kdo sem píše:** vlákno/session, které provádí úpravy na megadetail.cz
> (na pokyn uživatele — vložením připraveného promptu).
> **Kdo odsud čte:** admin session `aiseo-optimalizace` — záznamy přebírá do
> `DENIK.md` (deník zásahů case study) a označí je jako zpracované.
>
> **Pravidla pro píšící vlákno:**
> - Nový blok VŽDY připojit NA KONEC souboru, nikdy neupravovat starší bloky.
> - Jen fakta z vlastního vlákna: přesné počty, názvy, data nasazení.
>   Co nevíš přesně, označ `~` (odhad) nebo vynech — neodhaduj mlčky.
> - Hlásit jen změny OD POSLEDNÍHO hlášení (podívej se na poslední blok níže).
> - Commit pouze tohoto souboru: `git add` jen tento soubor, message
>   `Case study megadetail: hlášení YYYY-MM-DD`. Nic jiného v repu neměnit.

---

## Formát bloku (šablona)

```markdown
## Hlášení YYYY-MM-DD

| Nasazeno | Oblast | Co přesně (počty, rozsah) | Pozn. |
|---|---|---|---|
| 2026-MM-DD | obsah kategorií | Doplněny texty do N kategorií (z toho M zásadních: názvy…). Délka ~X slov, struktura: úvodní odpověď / FAQ / … | schema ano/ne |

Stav celku: N z M kategorií má text (bylo K před začátkem prací).
```

---

<!-- HLÁŠENÍ PŘIPOJOVAT POD TUTO ČÁRU -->
