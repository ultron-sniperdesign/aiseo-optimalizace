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

## Hlášení 2026-08-16 — ✅ převzato do DENIK.md 2026-08-17

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

## Hlášení 2026-08-18 — ✅ převzato do DENIK.md 2026-08-18

| Nasazeno | Oblast | Co přesně (počty, rozsah) | Pozn. |
|---|---|---|---|
| 2026-08-16 – 08-18 | obsah kategorií | **55 kategorií psaných od nuly**, stejná pipeline jako minule: keyword research (Marketing Miner) → ověření sortimentu ze živých produktových stránek → draft → 2× GPT audit (jazyk/struktura/SEO + faktická úplnost a poměr informace:produkt) → validace interních odkazů → zápis → zpětné ověření. Struktura 5× H2, dělení 2 sekce nad produkty / 3 pod produkty. Délka měřená na 45 z nich (u zbylých 10 se datum souborů překrývá s předchozí vlnou): **2 175–2 656 zn., průměr 2 338**. Interní odkazy: 2–4 na kategorii, každý ověřen proti živému stromu kategorií. | jedna kategorie = jeden běh, žádné dávkové generování; bez FAQ bloku a bez strukturovaných dat |
| 2026-08-17 | technika / obsah | **Oprava patvaru „čistící" → „čisticí"** napříč CZ mutací: 56 kategorií, 123 náhrad (pole `name`, `name_h1`, `seo_title`, `seo_description`, `description_text` a meta `text_pod_produkty`). Ošetřeno i „samočistící → samočisticí". | `seo_url` beze změny; obsah atributů `href`/`src` před náhradou zamaskován, aby se nerozbily odkazy |
| 2026-08-18 | technika / obsah | **Oprava patvarů „leštící / sušící / ředící" → „lešticí / sušicí / ředicí"**: 160 kategorií, 599 náhrad, stejná pole. Kontrola na přechodníky (výskyt bez následného „í") vrátila 0, takže náhrada byla bezpečná. Součet obou vln = 216 záznamů kategorií, 722 náhrad; překryv obou seznamů jsem nezjišťoval, 216 je tedy horní hranice počtu unikátních kategorií. | zbytkový výskyt všech čtyř patvarů v CZ mutaci je nyní **0**; 267 výskytů zůstává v cizojazyčných mutacích, kam se záměrně nezapisuje |
| 2026-08-16 – 08-18 | metadata kategorií | Doplněny chybějící `name_h1` u 8 kategorií, `seo_title` a `seo_description` u 8 kategorií. Opraveny 4 vadné hodnoty: rozbitý pád v H1 (KAT-472), překlep „čistění" (KAT-028) a **chybný název značky „Cleante" → „Cleantle"** (NEW-406, oprava v `name`, H1, title i description). U 2 kategorií rozšířen H1 a title o hlavní vyhledávaný tvar: „Detailingové vysavače" → „…a tepovače" (dotaz *tepovač* 9 500/měs) a „Rozmrazovače oken" → „Rozmrazovače skel a oken auta" (dotaz *rozmrazovač skel* 1 400/měs). | u neprázdných H1 se zasahovalo jen po schválení zadavatelem |

**Stav celku: 1 102 z 1 381 produktových kategorií v CZ mutaci má text (k 2026-08-18).**
Předchozí měřený stav: 1 047 z 1 381 (2026-08-16), tj. **+55 kategorií**.
Stav před začátkem všech prací nebyl změřen — baseline pro kategorie stále chybí.

Doplňující čísla k 2026-08-18 (stejná metoda měření jako minule):
- 279 produktových kategorií zůstává bez textu.
- Z toho **33 evergreen kategorií s produkty**, u kterých jde text napsat hned
  (na začátku této vlny jich bylo 88).
- Definice: produktová kategorie = `type == siteWithProducts`, má `url`, název nezačíná
  znakem rozcestníku. „Má text" = neprázdné `description_text` **nebo** meta `text_pod_produkty`.

Poznámka k obsahu pro AI: texty dál vznikají jako informační odpověď na nákupní otázku,
ne jako výčet sortimentu. Druhé kolo auditu explicitně hlídá poměr informace : produkt
(„zbyde po smazání názvů produktů funkční návod?"). Strukturovaná data ani FAQ bloky
nadále nasazené **nejsou**.

Vedlejší výstup: při ověřování sortimentu bylo zaznamenáno 12 katalogových vad
(chybně zařazené produkty, prázdné popisy, nesoulad objemu v názvu a ve výpisu).
Nejsou opravené — jsou předané zadavateli jako seznam.

## Hlášení 2026-08-20

| Nasazeno | Oblast | Co přesně (počty, rozsah) | Pozn. |
|---|---|---|---|
| 2026-08-18 – 08-20 | obsah kategorií | **55 kategorií psaných od nuly**, stejná pipeline jako v předchozích vlnách: keyword research (Marketing Miner) → ověření sortimentu ze živých produktových stránek → draft → 2× GPT audit → validace interních odkazů → zápis → zpětné ověření přes API. Struktura 5× H2, dělení 2 sekce nad produkty / 3 pod produkty. Délka (bez HTML) **1 950–2 453 zn., průměr 2 212**; jediný text pod 2 000 zn. je NEW-583 (1 950). Interní odkazy 1–3 na kategorii, každý ověřen proti živému stromu kategorií. | jedna kategorie = jeden běh, žádné dávkové generování; bez FAQ bloku a bez strukturovaných dat |
| 2026-08-19 – 08-20 | obsah kategorií / lokální SEO | Z těch 55 je **30 lokálních landingů „značka + Praha"** (Gyeon, Koch Chemie, CarPro, Meguiar's, Soft99, Menzerna, ValetPro, Nuke Guys, Chemical Guys, Rupes, SCANGRIP, Work Stuff, Poka Premium, Bilt Hamber, Angelwax, Liquid Elements, Ultracoat, Gliptone, ChemicalWorkz, OneWax, Bad Boys, BigBoi, AVA of Norway, NexDiag, Millers Oils, California Scents, FRESSO, Imao Parfums, Smell of Life + obecná „Autokosmetika Praha“). Před touto vlnou měl text jediný z nich (Auto Finesse Praha, ~1 050 zn., 1× H2). **Nyní má text všech 31.** Do textů jsou zapracované ověřené provozní údaje z webu: adresa a otevírací doba prodejny Praha 10 – Malešice, parkování, osobní odběr zdarma, MEGA HALA Praha 9 – Horní Počernice, certifikace Koch Chemie. | každý landing má vlastní věcnou osu (značení řad, systém past, výběr podle materiálu…), aby 30 stránek o téže prodejně nebylo 30× totéž |
| 2026-08-18 – 08-20 | metadata kategorií | Doplněno **35× chybějící `name_h1`** a **6× chybějící `seo_title` + `seo_description`** (UV lampy, Motorové oleje, Reflektory, Ochranné koberečky, Organizéry hadic, Koncentráty vůní). Neprázdné hodnoty se nepřepisovaly. Po vlně mají všechny 4 pole vyplněné všechny zpracované kategorie (55/55). | zásah do neprázdných polí se nekonal |

**Stav celku: 1 191 z 1 381 produktových kategorií v CZ mutaci má text (k 2026-08-20).**
Předchozí hlášený stav: 1 102 z 1 381 (2026-08-18). Rozdíl je **+89**, ale v tomto vlákně vzniklo
**55** textů. Zbylých ~34 kategorií neumím doložit vlastní prací — buď je psal někdo jiný, nebo byl
údaj 1 102 měřen nad snapshotem, do kterého se ještě nepropsaly všechny zápisy. **Nedopočítávám to**,
uvádím jen měřený stav a vlastní ověřený příspěvek.

Doplňující čísla k 2026-08-20 (stejná metoda měření jako v minulých hlášeních):
- 190 produktových kategorií zůstává bez textu.
- Evergreen fronta s produkty je vyčerpaná — zbývající kategorie jsou akční a sezónní stránky,
  dárkové sady, brandové „sady pro detailing", duplicitní SEO uzly a kategorie bez produktů.
- Definice: produktová kategorie = `type == siteWithProducts`, má `url`, název nezačíná
  znakem rozcestníku. „Má text" = neprázdné `description_text` **nebo** meta `text_pod_produkty`.

Poznámka k obsahu pro AI: druhé kolo auditu dál hlídá poměr informace : produkt. V této vlně
zachytilo mimo jiné pět věcných chyb, které se do textů dostaly a byly opraveny před zápisem:
záměna významu barevného kódu kotoučů mezi dvěma řadami jedné značky, špatná definice GSM
(uvedeno jako hustota vlákna místo gramáže), tvrzení o vytvrzení laku po leštění bez ochrany,
protimluv u protiotřesových rukavic (doporučení k leštičce vs. zákaz u rotujících dílů)
a přiřazení vlastnosti „bez plnidel" celé řadě past místo jediného produktu.
Strukturovaná data ani FAQ bloky nadále nasazené **nejsou**.

Vedlejší výstup — katalogové vady zaznamenané v této vlně (nejsou opravené, jen předané):
- **17 kategorií má 0 produktů** (Gyeon PPF EVO, Ultracoat Scoat / CARBON / ONE, Rain-X, Epoca,
  Biemmedue, Meclube, Parní čističe, Čističe skla na lodě, Ředicí láhve, Prachovky, Odstraňovače
  škrábanců, Sady na čištění motoru, Sady příslušenství, Odmašťovače na pasty, Kartáčky na vosky).
- **KiurLab** (`/kiurlab`) a **Motorové oleje** (`/motorove-oleje`, NEW-301) vracejí **404**;
  u olejů jde o duplicitu k funkční `/motorove-oleje-1`.
- **NEW-414 „Rukavice na čištění skla" je podmnožinou NEW-415 „Waffle rukavice na sklo"** —
  jediný produkt první kategorie je i ve druhé, která má navíc tři další. Kandidát na sloučení.
- **Chemical Guys** je v e-shopu už jen ve 3 SKU, všechny z řady MOTO, ale meta description
  kategorie slibuje šampony, vosky a detailery.
- **Dvě různé adresy prodejny na webu**: stránka prodejny i patička uvádějí *Akademická 5,
  Malešice, Praha 10*, kontaktní widget v hlavičce a obchodní podmínky *Karlovarská 1698/1,
  163 00 Bílá hora*. Do textů byla použita jen první varianta.
- Překlepy v katalogu: slug značky Angelwax `/autokosmettika-angelwax` (dvě „t"), značka
  **Gliptone** vedená jako „Glipton" v názvu i slugu.
- Rozpor v popisu produktu Black Mamba Heavy Duty Gloves: v jednom odstavci „černé rukavice",
  o kus dál „vyrobeny ve žluté barvě s vysokou viditelností".

---

## Hlášení 2026-08-25

| Nasazeno | Oblast | Co přesně (počty, rozsah) | Pozn. |
|---|---|---|---|
| 2026-08-24 | metadata kategorií | **313× přepsán `name_h1`** v CZ mutaci. Podklad: audit H1 všech **1 434** kategorií CZ (1 031 vyhodnoceno jako OK, **403** k opravě: 177 „nadpis neříká, na co produkt je", 92 prázdných H1, 77 překlepů, 31 pouze značka bez sortimentu, 26 obecných). Ze 403 návrhů jich uživatel schválil 313 (sekce Left menu, Autokosmetika, Slovník pojmů, EXTERIÉR, INTERIÉR, LEŠTĚNÍ, PŘÍSLUŠENSTVÍ, VYBAVENÍ GARÁŽE, ZNAČKY, Bottom menu, MEGA KOMUNITA). Pravidlo H1: z nadpisu musí být jednoznačné, jaké produkty kategorie obsahuje, bez další informace. 180 z návrhů bylo před schválením přepsáno ověřovacím průchodem proti reálným produktům v kategorii. | zapsáno jen `name_h1`, `name` ani `seo_url` se neměnily → žádné přesměrování nebylo potřeba; ověřeno 313/313 přes API + namátkově na živých stránkách |
| 2026-08-24 | technika / nastavení kategorií | Opraveno `type_of_items` u **NEW-412 Ředicí láhve, odměrky a postřikovače** z hodnoty `default` na `withoutSubcategories`. Kategorie měla celou dobu přiřazených **94 živých produktů**, ale kvůli rozbitému nastavení je nezobrazovala. | hodnotu `default` mělo na celém e-shopu jen **5 kategorií a všech 5 bylo rozbitých** (zbylé 4 — KiurLab, Epoca, Meclube, Biemmedue — vracely 404 a nemají jediný produkt, ani archivovaný) |
| 2026-08-24 – 08-25 | katalog / zařazení produktů | Do **16 prázdných kategorií** doplněny produkty: **1 372 zařazení** na **900 unikátních produktů** (PUT na produkt, vždy celá stávající sada kategorií + nová jako vedlejší; hlavní kategorie se nikde neměnila). Kategorie: Odmašťovače, Odstraňovače škrábanců, Sady příslušenství, Gyeon PPF EVO, Antifog, Extraktor, Keramika na skla, Metoda dvou kbelíků, Ruční mytí auta, Autokosmetika, Autokosmetika Profi, Profesionální autokosmetika, Nejlepší autokosmetika, Autokosmetika Praha, Autokosmetika pro odstranění usazené špíny, Tašky na leštičky. | počty ověřené na živém webu (unikátní produktové URL napříč stránkováním), ne z API |
| 2026-08-25 | obsah kategorií | **5 kategorií psaných od nuly** stejnou pipeline jako minulé vlny: keyword research (Marketing Miner) → ověření sortimentu z lokálního katalogu → draft → 2× GPT audit → validace interních odkazů → zápis → zpětné ověření. Struktura 5× H2, dělení 2 sekce nad produkty / 3 pod produkty. Délka (bez HTML) **2 091–2 296 zn., průměr 2 202**. Kategorie: Autokosmetika interier (327 produktů), Autokosmetika Profi (281), Profesionální autokosmetika (281), Autokosmetika na kůži (80), Nejlepší autokosmetika (60). | jedna kategorie = jeden běh; bez FAQ bloku a bez strukturovaných dat |

**Stav celku: 1 194 z 1 361 produktových kategorií v CZ mutaci má text (k 2026-08-25).**
Předchozí hlášený stav: 1 191 z 1 381 (2026-08-20). Jmenovatel klesl o **20** — během práce mazal
kategorie i někdo jiný. Doložit umím **8 smazání** (Epoca, Meclube, Biemmedue a pět kategorií větve
Ultracoat keramických ochran), zbylých ~12 **nedopočítávám**, protože k nim nemám vlastní záznam.
V tomto vlákně vzniklo **5** nových textů (+3 v čitateli oproti minulému hlášení; rozdíl opět
nedopočítávám).

Doplňující čísla k 2026-08-25 (stejná metoda měření jako v minulých hlášeních):
- **167** produktových kategorií zůstává bez textu. Z toho 82 má 5+ produktů, 50 má 1–4 produkty,
  21 je prázdných a 19 vrací 404.
- **60 kategorií je prázdných** (0 produktů na živé stránce), z toho 53 je zapnutých v menu
  a 29 už má napsaný text — popisují tedy sortiment, který na stránce není.
- Definice nezměněné: produktová kategorie = `type == siteWithProducts`, má `url`, název nezačíná
  znakem rozcestníku. „Má text" = neprázdné `description_text` **nebo** meta `text_pod_produkty`.

Metodická poznámka: kategorie **Nejlepší autokosmetika** není redakční výběr. Vznikla z analýzy
**4 460 reálných objednávek** za 6 měsíců (2026-02-25 – 2026-08-25), sečtením prodaných kusů
podle produktu; do kategorie šlo 60 nejprodávanějších kosmetických položek. Důvod: pole `rating`
má v katalogu vyplněné **5 produktů ze 4 335** a štítky typu „nejprodávanější" API neexportuje —
jiný datový podklad pro „nejlepší" na e-shopu neexistuje.

Poznámka k obsahu pro AI: druhé kolo auditu i v této vlně zachytilo věcné chyby opravené před
zápisem — (1) odstraňovače polétavé rzi zařazené ke kyselé chemii, ačkoli pracují chemickou reakcí
se železem a bývají pH neutrální; (2) tvrzení, že velkoobjemová balení jsou koncentráty, ačkoli
v kategorii je 40 hotových roztoků a jen 6 produktů má koncentrát v názvu; (3) statistika
„až třetina škrábanců na plastech jsou usazeniny" doložená jediným blogem — číslo vypuštěno.
Auditor se naopak dvakrát mýlil (tvrdil, že kategorie neobsahuje alcantaru a že nemá kyselou
chemii) — obojí ověřeno proti katalogu a jeho námitka zamítnuta. Strukturovaná data ani FAQ bloky
nadále nasazené **nejsou**.

### Diagnostika: proč jsou kategorie prázdné (nový poznatek této vlny)
Prázdná kategorie má na tomto e-shopu **tři různé příčiny** a každá se řeší jinak:
1. **`archived_yn: true` u produktů** — v API vypadají aktivně (`active_yn: true`), ale e-shop je
   nezobrazuje. Z 4 766 „aktivních" produktů je **431 archivovaných**. Tímhle je způsobeno
   11 prázdných kategorií; zařazením se řešit nedají.
2. **`type_of_items: "default"`** — rozbité nastavení kategorie (viz výše, 5 případů).
3. **Nic nepřiřazeno** — jediný případ, kdy má doplňování produktů smysl.

Vedlejší výstup — katalogové vady zaznamenané v této vlně (nejsou opravené, jen předané):
- **AVA of Norway se vypíná**: ze 100 produktů značky je **91 archivovaných**, živých zbývá 9.
  Řady AVA Easy, GO i Master jsou archivované celé, jejich kategorie proto zejí prázdnotou.
- **CarPro je na 11 živých produktech** (DLight, WheelX, DQUARTZ GO, jeden sušicí ručník).
  Značková větev má přitom podkategorie na štětce a kartáče, které značka nevede.
- **Ultracoat se vypíná**: 7 ze 14 produktů archivováno.
- **ADBL „Parfémy do auta" je duplicita** k ADBL „Osvěžovače vzduchu" — všech 12 ADBL Magic Mist
  je ve druhé jmenované. Kandidát na zrušení.
- **8 zapnutých kategorií vracelo 404**, z toho **3 měly odkaz přímo z hlavní stránky**
  (Epoca, Meclube, Biemmedue). Ověřeno nálezem `href` v HTML titulní strany. Mezitím smazány.
- **KAT-060 „Univerzální čističe (APC)"** (`/cistice-karoserie-a-exterieru-auta`) je vypnutá
  (`active_yn: false`) → 404, **bez přesměrování**. Podle Search Console má za posledních 180 dní
  **132 zobrazení** (57 za 28 dní) na dotazy „víceúčelový čistič apc" (pozice 12,2), „cistic
  karoserie" (pozice 11) a další. Pod EXTERIÉREM po ní nezůstal nástupce. Buď oživit, nebo starý
  slug zapsat do `redirect_301` živé APC kategorie.
- **Duplicita `/autokosmetika-profi` × `/profesionalni-autokosmetika`** — obě mají **identických
  281 produktů**. Dostaly různě vedené texty, aby si nekonkurovaly doslova, ale správné řešení je
  sloučit a jednu přesměrovat.
- **H1 kategorie „Nejlepší autokosmetika" slibuje leštění**, které v ní není — mezi 60 bestsellery
  není jediná lešticí pasta ani leštička. Návrh: „Nejlepší autokosmetika na mytí, čištění a ochranu auta".
- Překlepy v názvech kategorií: **„Autokosmetika pro motorvý prostor"**, **„🔥 Péče o plasty od
  Auto Finese"**.
