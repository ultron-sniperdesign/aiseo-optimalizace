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

## Hlášení 2026-08-16

| Nasazeno | Oblast | Co přesně (počty, rozsah) | Pozn. |
|---|---|---|---|
| 2026-08-10 – 08-12 | obsah kategorií | **Import 196 kategorií** z připraveného Google Docu (267 sekcí, 17 dávek). Párování H1 dokumentu ↔ pole `name_h1` kategorie: 234/267 přesná shoda. Úprava textů mírná + 1× GPT audit proti reálnému sortimentu. Struktura: max 2 H2 nad produkty, zbytek pod produkty. | délky jednotlivých textů se neevidovaly; bez strukturovaných dat |
| 2026-08-12 | obsah kategorií | **7 značkových stránek** (SWAG, OneWax, Magic Bucket, Mentos, Maxton Design, Snappy Grip, MTM Hydro). Struktura značkových stránek: 1 odstavec bez H2 nad produkty (253–320 zn.) + 4× H2 pod produkty (1 100–1 436 zn.). 40 interních odkazů ověřeno živě (HTTP 200 + funkční filtr výrobce). | 4 značky blokované: 3 mají 0 produktů, 1 je neaktivní (404). Bez strukturovaných dat |
| 2026-08-12 | obsah kategorií | **Auto Finesse: 24 prázdných kategorií** dostalo text z dokumentu (0 H2 nad + 4× H2 pod) **+ 8 částečných doplněno** (7× chybějící lead nad produkty 311–392 zn., 1× chybějící text pod produkty). Zápis selektivní — stávající část textu se nepřepisovala. Stav: 51 z 52 sekcí dokumentu nasazeno. | bez strukturovaných dat |
| 2026-08-13 – 08-16 | obsah kategorií | **20 kategorií psaných od nuly** (bez předlohy), plná pipeline: keyword research (Marketing Miner) → rešerše u výrobců → sortiment ze živé stránky → draft → 2× GPT audit → validace odkazů → zápis → ověření živého renderu. Struktura 5× H2, dělení 2 sekce nad produkty / 3 pod produkty. Délka 2 157–2 513 zn., tj. **346–431 slov (průměr 384)**. U 5 kategorií doplněn chybějící H1, u 2 i title a meta description. | jedna kategorie = jeden běh, žádné dávkové generování. Bez FAQ bloku a bez strukturovaných dat |

**Stav celku: 1 047 z 1 381 produktových kategorií v CZ mutaci má text (k 2026-08-16).**
Mezikrok měřený 2026-08-12 (po importech, před psaním od nuly): 1 027 z 1 382.
Stav před začátkem těchto prací **nebyl změřen** — baseline pro kategorie chybí, nedopočítávám ho.

Doplňující čísla k 2026-08-16 (stejná metoda měření):
- 334 produktových kategorií zůstává bez jakéhokoli textu.
- Z toho **evergreen sortiment: 110** kategorií, z nichž **89 má produkty** a text jde napsat hned.
- Zbytek prázdných tvoří sezónní a akční stránky (104), satelit Praha (56), dárkové sady (51)
  a technické či archivní záznamy (14).
- Definice: produktová kategorie = `type == siteWithProducts`, má `url`, název nezačíná
  znakem rozcestníku. „Má text" = neprázdné `description_text` **nebo** meta `text_pod_produkty`.

Poznámka k obsahu pro AI: texty jsou psané jako informační odpověď na nákupní otázku
(čím se produkty liší, co si vybrat, čeho se vyvarovat), ne jako výčet sortimentu.
Strukturovaná data ani FAQ bloky zatím nasazené **nejsou** u žádné z těchto vln.
Analýza prázdných kategorií (2026-08-13) sama o sobě nic nenasadila, je podkladem pro plán.
