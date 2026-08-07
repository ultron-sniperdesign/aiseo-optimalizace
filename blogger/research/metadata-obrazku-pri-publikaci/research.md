# Research — co udělá publikační pipeline s metadaty obrázku

**Řádek plánu:** `metadata obrazku pri publikaci`
**Datum:** 2026-08-07 · **Kategorie:** tutorial · **Tagy:** obsah, mereni

---

## 1. Proč tenhle článek

Článek `jak-poznat-ai-obrazek` (publ. 7. 8. 2026) končí větou, že se vyplatí **ověřit, co
z metadat přežije vaši publikační pipeline**. Tenhle článek to ověřuje — vlastním měřením,
ne odhadem z přehledů.

**Kolizní kontrola:** `jak-poznat-ai-obrazek` řeší rozpoznávání, tady jde o publikaci
vlastních obrázků. `ai-obrazky-v-ai-prehledech` řeší generování v AI přehledech.
Grep `EXIF|XMP|pipeline` přes 117 článků → jen tyhle dva sousedy. **Téma volné.**

---

## 2. Vlastní test — metodika

**Datum:** 7. 8. 2026 · **Prostředí:** macOS, Node, knihovna **sharp 0.34.5**
(tu používá pod kapotou i Astro a řada dalších Node pipeline).

### Testovací soubor

JPEG 1600 × 1000 vytvořený v Pillow 12.2 se dvěma bloky metadat:

- **EXIF** — Artist, Copyright, Software, ImageDescription
- **XMP** — packet s `Iptc4xmpExt:DigitalSourceType` =
  `http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia`
  (tedy značka „plně vygenerováno modelem")

Kontrola vstupu: v souboru jsou segmenty `APP1 Exif` a `APP1 http://ns.adobe.com/xap/1.0/`,
řetězec `trainedAlgorithmicMedia` je přítomný.

### Varianty zpracování

Vždy `resize(1200)` a export, tak jak to dělá běžný build:

| # | Kód | Výstup |
|---|---|---|
| a | `.jpeg({quality:82})` | JPEG, výchozí nastavení |
| b | `.webp({quality:78})` | WebP, výchozí nastavení |
| c | `.keepMetadata().jpeg()` | JPEG se zachováním metadat |
| d | `.keepMetadata().webp()` | WebP se zachováním metadat |
| e | `.keepExif().jpeg()` | JPEG, jen EXIF |
| f | `.keepXmp().jpeg()` | JPEG, jen XMP |

### Měření

U JPEG kontrola segmentů APP1 (Exif / XMP) a APP13 (IPTC), u WebP kontrola chunků
`EXIF` / `XMP `. K tomu hledání řetězce `trainedAlgorithmicMedia` v binárce.

---

## 3. ⛔ Výsledek

| Varianta | Velikost | Metadata ve výstupu | Značka AI původu |
|---|---|---|---|
| originál | 26 381 B | EXIF + XMP | **ano** |
| a — JPEG, výchozí | 5 557 B | **žádná** | ne |
| b — WebP, výchozí | 1 684 B | **žádná** | ne |
| c — JPEG, `keepMetadata()` | 6 250 B | EXIF + XMP | **ano** |
| d — WebP, `keepMetadata()` | 2 374 B | EXIF + XMP | **ano** |
| e — JPEG, `keepExif()` | 5 833 B | jen EXIF | **ne** |
| f — JPEG, `keepXmp()` | 5 974 B | jen XMP | **ano** |

### Tři zjištění

1. **Výchozí chování metadata zahodí úplně** — u JPEG i u WebP. Ne částečně, celá.
2. **Jde to vypnout jedním voláním.** `keepMetadata()` zachová EXIF i XMP a značka přežije
   i konverzi do WebP.
3. **Nejzajímavější:** `keepExif()` značku AI původu **nezachrání**, protože
   `Iptc4xmpExt:DigitalSourceType` sedí v XMP, ne v EXIF. „Zachovat EXIF" tedy není totéž
   co „zachovat informaci o původu".

---

## 4. ⛔ Limity testu — musí být v článku

1. **Jedna knihovna, jedna verze** (sharp 0.34.5). O WordPressu, Shoptetu, ImageMagicku
   ani CDN transformacích to neříká nic — samostatný řádek v plánu.
2. **Testoval jsem EXIF a XMP, ne podepsané C2PA manifesty.** Ty se chovají jinak a
   ověřený závěr o nich nemám.
3. **Jde o syntetický testovací soubor**, ne o fotku z fotoaparátu s plnou sadou metadat.
4. Test měřil **přežití segmentů**, ne to, jestli s nimi někdo dál pracuje.

---

## 5. Co z toho plyne prakticky

- Kdo staví na tom, že u fotek doloží původ, musí **pipeline vědomě nastavit** — jinak
  ji default umlčí.
- Zachování metadat stálo **693 B u JPEG** (5 557 → 6 250 B) a **690 B u WebP**
  (1 684 → 2 374 B). ⛔ Původní zápis „u WebP nebyl rozdíl znát" byl artefakt zaokrouhlení
  na kilobajty — relativně jde u WebP o víc než 40 % velikosti souboru.
- **Opačný případ:** kdo metadata schválně nechce (poloha z fotoaparátu, jméno autora
  v klientských fotkách), má výchozí chování jako výhodu — a měl by vědět, že mu
  `keepMetadata()` tuhle ochranu vypne.

---

## 6. Teze článku

> Otestoval jsem, co udělá běžná publikační pipeline s metadaty obrázku. Knihovna sharp
> ve výchozím nastavení zahodí EXIF i XMP, u JPEG i u WebP. Jedno volání `keepMetadata()`
> je zachová včetně značky o AI původu. A pozor: `keepExif()` tu značku nezachrání,
> protože ta sedí v XMP.

---

## 7. Zdroje

- **vlastní měření 7. 8. 2026**, sharp 0.34.5, testovací JPEG s EXIF a XMP
- vlastní články: `jak-poznat-ai-obrazek`, `ai-obrazky-v-ai-prehledech`
