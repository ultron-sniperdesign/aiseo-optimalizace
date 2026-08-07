# Research — jak se pozná AI obrázek

**Řádek plánu:** `oznacovani ai obrazku synthid`
**Datum:** 2026-08-04 · **Kategorie:** analysis · **Tagy:** ai-platformy, obsah

---

## 1. Proč tenhle článek — uzavírá otázku, kterou jsme včera nechali otevřenou

Článek `ai-obrazky-v-ai-prehledech` (publ. 4. 8. 2026) u generování obrázků v AI přehledech
výslovně napsal, že **zdroje neuvádějí, jestli se takové obrázky označují**, a že netvrdíme,
že se neoznačují. Tenhle článek jde k primárním zdrojům a odpovídá na obecnější otázku:
**jak se dnes vůbec pozná, že obrázek vyrobila AI.**

---

## 2. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `ai-obrazky-v-ai-prehledech` | Google generuje obrázky v AI přehledech; jediná zmínka o vodoznaku | **Navazuje, nekoliduje.** Tam co Google spustil, tady jak se to pozná. Prolinkovat oběma směry. |
| `ai-generovany-obsah-viditelnost` | generovaný **text** na vlastním webu | Jiná věc. |
| `falesne-screenshoty-seo-funkci` | vyrobené screenshoty funkcí | Sousedí tematicky (co je pravé), jiný mechanismus. |

**Verdikt: téma volné.** Grep `SynthID|C2PA|IPTC|vodoznak` přes 116 článků → jediný výskyt
je ta včerejší věta.

---

## 3. Ověřená fakta

### 3a. SynthID — primární zdroj deepmind.google/technologies/synthid, čteno 4. 8. 2026

- Nástroj *„to watermark and identify content generated through AI"*.
- Vodoznak do **obrázků, videa, zvuku i textu**.
- **Neviditelný člověku.** U obrázků odolává *„cropping, filters, and compression"*.
- U zvuku *„inaudible to the human ear"*, u textu se upravují pravděpodobnosti slov.
- **Existuje veřejný SynthID Detector** — portál, kam jde obsah nahrát k ověření. Google
  uvádí spolupráci s novináři a médii na testování. Ověření jde vyžádat i přímo po Gemini.

**Co stránka neuvádí:** úspěšnost detekce, míru falešně pozitivních a negativních výsledků,
termín plné veřejné dostupnosti detektoru.

### 3b. Ověřování původu ve vyhledávání — primární zdroj blog.google, přehled I/O 2026

Doslova: *„You can learn about an image's origin by using Search features like Lens, AI Mode,
and Circle to Search, as well as Gemini in Chrome. Just ask, 'Is this made with AI?'
or 'Is this AI generated?'"*

A dál: Google *„adding verification for C2PA Content Credentials, to easily check if content
is an unaltered original from a camera or if it has been modified, and by what tools."*

**Náběh:** *„rolling out in the Gemini app starting today, and it will come to Search and
Chrome in the coming months."* → V době psaní tedy **napřed Gemini, do Vyhledávání a Chromu
teprve míří.**

⚠️ Google v témže přehledu uvádí, že SynthID *„has been used 50 million times globally"*.
Z formulace **není jasné, jestli jde o počet označených souborů, nebo o počet ověření**.
Buď to uvést s touhle výhradou, nebo vynechat.

---

## 4. Vrstvy značení — a co je z jaké kategorie zdroje

| Vrstva | Co to je | Status |
|---|---|---|
| **SynthID** | neviditelný vodoznak v pixelech | **primárně doloženo** (DeepMind) |
| **C2PA Content Credentials** | kryptograficky podepsaná historie souboru | **primárně doloženo**, že to Google ověřuje (I/O 2026) |
| **IPTC DigitalSourceType** | metadatový slovník, hodnota `trainedAlgorithmicMedia` pro plně generovaný obsah | **sekundární** — v článku označit jako popis standardu, ne jako Googlem doložené |

---

## 5. ⛔ Limity, které musí být v článku

1. **Platformy metadata strhávají.** Podle přehledů většina sociálních sítí při uploadu
   odstraní EXIF i C2PA. Sekundární zdroj → uvést jako „podle dostupných přehledů".
2. **Chybějící značka není důkaz.** Že obrázek nemá vodoznak ani credentials, neznamená,
   že ho nevyrobila AI — mohl projít nástrojem, který značení nepoužívá, nebo ho ztratit
   cestou.
3. **Přítomnost značky taky není celý příběh.** C2PA doloží, co se se souborem dělo,
   ne pravdivost toho, co je na něm.
4. **Úspěšnost detekce Google nezveřejňuje.**
5. **Náběh** — ve Vyhledávání a Chromu funkce teprve přibývá.

---

## 6. Co z toho plyne pro weby

- Kdo publikuje **vlastní fotografie jako doklad** (produkty, provozovna, případové studie),
  má v C2PA nástroj, jak původ doložit — pokud ho publikační pipeline nesmaže.
- Kdo publikuje **generované ilustrace**, měl by vědět, že označení může přežít i tam,
  kde ho nečekal.
- **Praktická past:** běžná pipeline (CMS resize, konverze do WebP, optimalizace) metadata
  typicky zahodí. To je samostatné téma — zapsáno do plánu jako `metadata obrazku pri publikaci`.

---

## 7. Teze článku

> Existují tři vrstvy, ze kterých se dá poznat AI obrázek: neviditelný vodoznak SynthID
> v pixelech, podepsané C2PA Content Credentials a metadata podle IPTC. Google od I/O 2026
> umožňuje zeptat se na původ obrázku přímo — v Gemini hned, ve Vyhledávání a Chromu
> postupně. Žádná z těch vrstev ale není důkaz: chybějící značka neznamená, že obrázek
> není od AI, a přítomná značka nedokládá, co je na obrázku pravda.

---

## 8. Zdroje

- deepmind.google/technologies/synthid — co SynthID je, jaké typy obsahu, veřejný detektor,
  čteno 4. 8. 2026
- blog.google, přehled oznámení z I/O 2026 — dotaz na původ obrázku v Lens, AI Mode, Circle
  to Search a Gemini v Chromu; ověřování C2PA; náběh, čteno 4. 8. 2026
- vlastní články: `ai-obrazky-v-ai-prehledech`, `ai-generovany-obsah-viditelnost`,
  `falesne-screenshoty-seo-funkci`
