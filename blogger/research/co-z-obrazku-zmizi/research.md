# Research — Co z obrázku zmizí cestou na web

Datum měření: **9. 8. 2026** · typ: nový článek (tutorial) · řádek plánu: `test metadat u dalsich pipeline`

Navazuje na [/blog/metadata-obrazku-pri-publikaci/](/blog/metadata-obrazku-pri-publikaci/) (Run99), kde jsem změřil jen knihovnu sharp. Řádek plánu měl tvrdý pokyn **⛔ MĚŘIT, NEODHADOVAT** — proto níž jen změřené a jeden poctivě přiznaný neúspěch.

## Metodika

Vlastní čtečka segmentů (`imgmeta.py`, bez exiftoolu): prochází JPEG markery (APP0/JFIF, APP1 EXIF, APP1 XMP, APP2 ICC, APP13 IPTC, APP11 JUMBF/C2PA, COM) a RIFF chunky WebP (EXIF, XMP, ICCP). Vrací, které segmenty v souboru jsou a kolik mají bajtů.

**Testovací soubor:** JPEG 1600×1200, 44 601 B, se všemi segmenty najednou — EXIF 168 B (Make, Model, Copyright, Artist, DateTime), XMP 465 B (dc:creator, dc:rights), IPTC 82 B (2:80 Byline, 2:116 Copyright), ICC 602 B, komentář 38 B.

**Izolační test v provozu:** stejný soubor u téhož e-shopu ve variantě `/orig/` (nahraný originál) proti zmenšeninám `/big/`, `/detail/`, `/related/`, `/category/`. Rozdíl mezi nimi je tím pádem prokazatelně dílem transformace, ne fotoaparátu.

Respektováno robots.txt (matcher na `User-agent: *`), pauzy mezi požadavky.

## Nález 1 — lokální knihovny: výchozí nastavení zahodí všechno

| Pipeline | Co ve výstupu zbylo |
|---|---|
| vstupní soubor | JFIF, ICC 602 B, COM 38 B, EXIF 168 B, IPTC 82 B, XMP 465 B |
| **Pillow: resize + save (výchozí)** | JFIF, COM — **EXIF, ICC, IPTC i XMP pryč** |
| Pillow: `save(exif=…)` | JFIF, COM, EXIF |
| Pillow: `exif` + `icc_profile` + `comment` | JFIF, COM, EXIF, ICC — **IPTC a XMP se nevrátily** |
| Pillow → WebP (výchozí) | **nic** |
| Pillow → WebP (`exif`+`icc`+`xmp`) | EXIF, ICC, XMP |
| **sharp: resize + jpeg (výchozí)** | **nic** |
| sharp: `keepMetadata()` | ICC 602 B, EXIF 310 B, IPTC 82 B, XMP 465 B — **ale COM pryč** |
| sharp: `withMetadata()` | totéž, ale ICC 494 B (libvips podstrčil vlastní profil) |
| sharp: `keepMetadata()` → WebP | EXIF, ICC, XMP — **IPTC pryč** (WebP pro něj nemá kontejner) |

Podstatné body:

- **Obě knihovny ve výchozím stavu metadata zahazují.** U sharpu nezůstane vůbec nic, u Pillow přežije jen JFIF a komentář.
- **Pillow neumí přes běžné `save()` zachovat IPTC ani XMP v JPEGu.** Zkusil jsem předat všechno, co API nabízí — parametr pro ně prostě není. U WebP `xmp=` existuje, u JPEGu ne.
- **`keepMetadata()` u sharpu naopak zahodí komentář**, který Pillow drží. Ani jedna knihovna tedy není nadmnožinou té druhé.
- **Změna formátu na WebP shodí IPTC** bez ohledu na knihovnu.
- EXIF u sharpu naroste 168 → 310 B: libvips ho přepíše po svém, není to bajtová kopie.

## Nález 2 — Shoptet v provozu: 15 z 15 originálů přišlo o všechno

Vzorek 47 e-shopů z [měření robots.txt](/blog/shoptet-robots-txt-ai-roboti/), z toho **38 reálných** a 9 demo e-shopů Shoptetu (oddělené — na míchání demo dat jsem se spálil v dílu 1 bloku).

Reálné e-shopy: **31 použitelných dvojic** originál ↔ zmenšenina.

- **15 z 31 originálů neslo aspoň jeden metadatový segment.**
- **Ve zmenšeninách zmizel ve všech 15 případech. Nikde nepřežilo nic.**
- Zmenšeniny měly ve 109 ze 124 stažených variant přesně `APP0/JFIF + COM` a v 15 nic.

Co v originálech bylo (počet e-shopů): EXIF 14, XMP 10, Adobe APP14 9, ICC 7, IPTC 6, **JUMBF/C2PA 1**, PNG tEXt 1.

### Nejsilnější jednotlivý případ

Jeden e-shop má v originálu **13 439 B Content Credentials (C2PA)** a 3 158 B ICC profilu. Ve variantě, kterou vidí návštěvník i robot: **JFIF 14 B a komentář 57 B.** Někdo tam ty Content Credentials vědomě dal a platforma je z každé zobrazované verze odstranila.

### Co zůstane místo nich

Komentář, který ve zmenšeninách zbyl, zní:

```
CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), quality = 85
```

Je to podpis knihovny **PHP GD**. Jediné, co v souboru přežilo, je tedy signatura nástroje, který z něj to ostatní odstranil — a zároveň je tím změřené, čím Shoptet obrázky zpracovává (GD, kvalita 85), aniž bych to musel odhadovat.

## Nález 3 — WordPress: měření NEVYŠLO, nic o něm netvrdím

Zkusil jsem tentýž izolační test na 20 doménách (odvozenina `název-800x600.jpg` proti `název.jpg`).

- 8 domén nebyl WordPress,
- u 9 se odvozeniny ve vzoru `-ŠxV` nenašly,
- **použitelné dvojice: 3 — a v žádné z nich originál metadata neměl.**

Bez metadat v originálu nejde izolovat, co ubrala transformace. **Závěr o WordPressu tedy žádný.** V článku to bude přiznané jako neúspěch, ne zamlčené.

Jediný dílčí doklad: odvozenina na jednom WP webu nese `CREATOR: gd-jpeg v1.0 (using IJG JPEG v62), quality = 82` — **tatáž knihovna GD jako u Shoptetu**, jen jiná kvalita. Zpracovává to tedy stejný nástroj; co dělá s metadaty, jsem u WordPressu nezměřil.

## Limity

- Jeden odečet, 9. 8. 2026.
- Vzorek Shoptetů není náhodný výběr z populace — je to týž seznam jako v dřívějším bloku.
- Testoval jsem jen JPEG a WebP, ne AVIF.
- U Shoptetu měřím výstup platformy, ne nastavení v administraci — jestli tam někde přepínač je, jsem neověřoval (do administrace se nedostanu).
- U knihoven jsou to výchozí volání, ne všechny možné kombinace parametrů.
- WordPress: viz nález 3, neměřeno.

## Zdrojová data

`local_results.json` (11 pipeline), `shoptet_img_results.json` (47 e-shopů × 6 variant), `wp_img_results.json` (20 domén), `imgmeta.py` (čtečka segmentů).
