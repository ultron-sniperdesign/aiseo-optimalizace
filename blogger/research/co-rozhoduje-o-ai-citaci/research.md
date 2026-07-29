# Research — co rozhoduje o ai citaci

**Řádek plánu:** `co rozhoduje o ai citaci` (skupina D kolizní revize — ověřeno volné)
**Datum:** 2026-07-28 · **Kategorie:** analysis

---

## 1. Studie — co je ověřené

**What Gets Cited: Competitive GEO in AI Answer Engines**
arXiv 2605.25517 · publikováno na 49. konferenci ACM SIGIR, červenec 2026

| Údaj | Ověřeno |
|---|---|
| 252 000 pokusů | ✅ |
| 6 jazykových modelů | ✅ |
| 18 obsahových faktorů | ✅ |
| Kontrolované prostředí se **dvěma dokumenty** vloženými do kontextu | ✅ |
| Měřená veličina: **který zdroj je v první citaci** | ✅ |
| Anonymizace značek + prohazování pořadí | ✅ |
| Skupiny faktorů: shoda s tématem, úplnost, důvěryhodnost, čitelnost, konkurenční postavení, čerstvost | ✅ |
| **Nejsilnější podle abstraktu: shoda s tématem a pozice v pořadí** | ✅ |

## ⛔ Co se z veřejných zdrojů OVĚŘIT NEPODAŘILO

Zadání v plánu uvádělo **čtyři rozhodující faktory (shoda, cena, čerstvost, pozice)**
a že **formátování má zanedbatelný vliv.** Ani jedno se v abstraktu ani ve veřejných
shrnutích nepotvrdilo:

- „cena" jako jeden ze čtyř hlavních faktorů — **nenalezeno**
- „formátování má zanedbatelný vliv" — **nenalezeno**
- konkrétní velikosti vlivu jednotlivých faktorů — **nedostupné bez plného textu**

**Do článku šlo jen to, co je doložené**, a chybějící údaje jsou v něm výslovně
označené jako nedostupné. Pracovalo se s abstraktem a veřejnými shrnutími,
ne s plným textem — i to je v článku přiznané.

---

## 2. Druhý zdroj, který určil vyznění

**Kritický přehled 45 studií GEO** (listopad 2023 – červenec 2026, arXiv 2607.14035)
uvádí, že často citované zisky ze zakládající práce **platí uvnitř svého
experimentálního uspořádání a jsou podmíněné tím, že zdroj už v kontextu je** —
nedokládají ani organickou dohledatelnost, ani trvalý efekt na návštěvnost.

Přehled zároveň popisuje GEO jako **řetěz kroků**, ne jednu žebříčkovou úlohu:
spuštění vyhledávání → procházení a indexace → vytažení kandidátů → přeřazení
a přidělení místa v kontextu → citace → prominence → chování uživatele.

To potvrzuje hlavní tezi článku z nezávislého zdroje.

---

## 3. Co určilo výslednou podobu — verdikty auditů

**První audit** vytkl mimo jiné:

| Výtka | Oprava |
|---|---|
| „jediné doporučení, které v testu obstálo" | z abstraktu neplyne, že ostatní neobstála → přeformulováno na „nejsilnější faktor ve shrnutí" |
| „pozici přímo neovlivníte" podané jako závěr studie | je to aplikační komentář; studie neříká, co pořadí v reálném systému určuje |
| **alibismus** — rozlišení fází použité jako štít | doplněno explicitní přiznání: *„je to oslabení naší formulace, byli jsme si jistější, než bylo podložené"* |
| „studie říká, že na formátování tolik nezáleží" | **tentýž posun, který článek jinde kritizuje** — odstraněno |
| vytěženo míň praktického, než jde | doplněny závěry o pozici jako vlastním faktoru a o anonymizaci značek |

**Druhý audit** už jen doladil: answer jistější než tělo, duplicitní bod o pozici,
zbytkový obranný tón v pasáži „neplatí ani opak" (přerámováno na hierarchii jistoty),
překlep „Studie ta dva kroky".

---

## 4. Teze článku

> Studie měřila **poslední krok** — výběr mezi dvěma zdroji, které už v kontextu byly.
> Platí tedy podmíněně: *pokud* se tam stránka dostane, tohle rozhoduje dál.
> O dohledatelnosti ani o návštěvnosti nevypovídá.

## 5. Zdroje

- arXiv 2605.25517 — What Gets Cited: Competitive GEO in AI Answer Engines (ACM SIGIR 2026)
- arXiv 2607.14035 — Optimizing Visibility in Generative Engines: A Critical Survey of GEO (2023–2026)
