## Krátká odpověď

Po zapracování je text výrazně přesnější, ale pořád tam zbývá pár míst, kde:
- **tvrzení lehce přesahuje měření**,
- **reprodukce není úplně dovřená**,
- a je tam několik **technických nepřesností / nejasností v terminologii**.

Nejproblematičtější jsou:
1. titulek bez uvedení knihovny,
2. „tři řádky“ u reprodukce, ač jde o víc než tři volání a chybí vytvoření vstupního souboru,
3. formulace, že metadata „unesou“ deklaraci původu a že si tím člověk „původ doloží“,
4. pár detailů kolem EXIF/XMP/IPTC a WebP validace.

---

## Titulek

Současný titulek je pořád moc široký.

**Místo:**
`title: "Sharp ve výchozím nastavení zahodí metadata. Změřil jsem to"`

**Problém:**
Je lepší než původní „Váš build…“, ale stále vypadává **u čeho** a v jakém typu operace. Z textu plyne, že šlo o **sharp 0.34.5 při resize + exportu**. Samotné „sharp zahodí metadata“ může čtenář přečíst šířeji, než unese test.

**Doporučení:**
- `Sharp 0.34.5 při resize a exportu ve výchozím nastavení nepřenáší metadata`
- nebo kratší:
  `Sharp při resize a exportu ve výchozím nastavení nepřenáší metadata`

---

## 1. Kde ještě vyvozuješ víc, než měření unese

### A. „Dnes to za vás rozhoduje výchozí nastavení knihovny.“

**Místo:**
`Dnes to za vás rozhoduje výchozí nastavení knihovny.`

**Problém:**
To zní jako obecné tvrzení o „knihovně“ nebo dokonce pipeline obecně. Ve skutečnosti jsi testoval konkrétní chování sharpu v konkrétním workflow.

**Lepší:**
`V tomhle testu to za vás rozhodlo výchozí nastavení sharpu.`

---

### B. „Sharp … tu používá pod kapotou Astro i spousta dalších Node pipeline.“

**Místo:**
`...tu používá pod kapotou Astro i spousta dalších Node pipeline.`

**Problém:**
To je pravděpodobné, ale je to volnější tvrzení mimo vlastní měření. Není to zásadní chyba, ale v textu založeném na vlastním testu je to zbytečně široká kulisa.

**Lepší:**
`...tu používá pod kapotou Astro; podobně se nasazuje i v dalších Node pipeline.`

Tím zůstaneš opatrnější.

---

### C. „Kdo si myslí, že ‚zapnul zachování metadat‘, a přitom sáhl jen po EXIF, si původ nedoloží.“

**Místo:**
`Prakticky: kdo si myslí, že „zapnul zachování metadat", a přitom sáhl jen po EXIF, si původ nedoloží.`

**Problém:**
„Doloží původ“ je pořád moc silné na nepodepsané XMP. O pár odstavců výš správně rozlišuješ deklaraci vs. kryptografický důkaz, tady se to zase rozmazává.

**Lepší:**
`...si nepřenese deklaraci o způsobu vzniku.`
nebo
`...si nezachová metadata, která tenhle způsob vzniku deklarují.`

---

### D. „Není to postupná ztráta ani ořezání. Je to úplné zahození“

**Místo:**
Mistake 01:
`Není to postupná ztráta ani ořezání. Je to úplné zahození, u JPEG i u WebP.`

**Problém:**
Na úrovni tvého testu ano, ale formulace je moc absolutní. Přesněji: **v tomto testu se nepřenesly žádné z těch dvou sledovaných bloků**. Jenže netestoval jsi všechny možné typy metadat ani všechny možné ancillary části souboru.

**Lepší:**
`V tomhle testu se z těchto sledovaných bloků nepřeneslo nic: ani EXIF, ani XMP, u JPEG i u WebP.`

---

## 2. Metodika: co ještě chybí k reprodukci

Teď už je to **na orientační reprodukci slušné**, ale **na přesnou reprodukci výsledků tabulky ještě ne úplně**.

### A. Chybí skript pro vytvoření vstupního souboru

To je pořád největší díra.

**Místa:**
- FAQ: `Testovací JPEG s vyplněným EXIF blokem a XMP packetem...`
- tělo: `Testovací JPEG 1600 × 1000...`

**Co chybí:**
- přesný způsob vložení EXIF,
- přesný XMP packet,
- konkrétní hodnoty tagů,
- potvrzení, že vstup neobsahoval ICC, JFIF thumbnail, APP13, COM apod.,
- jak vzniklo přesně `26 381 B`.

Bez toho čtenář zopakuje **princip**, ale ne nutně **stejná čísla**.

**Doporučení:**
Přidej sekci „Reprodukce“ s:
- verzí Node,
- verzí sharp,
- skriptem, který vygeneruje `orig.jpg`,
- a ideálně uloženým vzorovým XMP packetem.

Pokud nechceš vše do článku, dej odkaz na gist/repo.

---

### B. Chybí přesný způsob validace

**Místo:**
`U JPEG jsem četl segmenty APP1 (EXIF a XMP) a APP13, u WebP RIFF chunky EXIF a XMP ; přítomnost řetězce trainedAlgorithmicMedia sloužila jen jako doplňková kontrola.`

**Problém:**
Je to lepší než dřív, ale stále neříkáš **čím konkrétně** jsi to četl.

U reprodukce je rozdíl mezi:
- `exiftool`,
- vlastním parserem,
- `strings`,
- hex dumpem,
- knihovnou pro RIFF/JPEG marker scan.

**Doporučení:**
Dopsat konkrétně:
- `exiftool orig.jpg`
- `exiftool out.jpg`
- případně příkaz / skript na výpis chunků markerů,
- nebo stručně: „JPEG marker scan vlastním skriptem, WebP RIFF chunky vlastním skriptem; exiftool jako sekundární kontrola.“

Bez toho čtenář neví, jak přesně dojít ke stejnému závěru „žádná metadata“.

---

### C. „Celý test je tři řádky.“

**Místo:**
`Celý test je tři řádky.`

**Problém:**
Není. Jednak je tam šest `await` volání, jednak chybí vytvoření vstupu a validace výstupů. To je rétorická zkratka, ale u textu stavěného na reprodukovatelnosti je spíš matoucí.

**Lepší:**
`Samotné zpracování je pár volání.`

---

### D. Chybí provozní detaily prostředí

Na 100% reprodukci ještě chybí:
- verze Node.js,
- OS / architektura aspoň orientačně,
- potvrzení, že jely default libvips/sharp encoder settings kromě quality.

Sharp se opírá o libvips; u hraničních detailů je dobré mít prostředí popsané.

Nemusíš to cpát do hlavního textu, stačí krátký blok nebo poznámka pod čarou.

---

### E. Neúplnost u WebP variant

V tabulce máš:
- WebP default
- WebP keepMetadata

ale ne:
- WebP keepExif
- WebP keepXmp

To samo o sobě není chyba, pokud jsi je netestoval. Jenže z formulace „v šesti variantách“ a z důrazu na reprodukci může čtenář čekat symetrii. Doporučil bych explicitně napsat, že:
- `keepExif()` a `keepXmp()` jsem zkoušel jen na JPEG, protože pro pointu testu stačilo ověřit přenos konkrétních bloků a deklarace ve výstupu.

Jinak to působí jako nedořečené.

---

## 3. Frontmatter

### A. `title`

Viz výše: ještě zpřesnit na resize/export nebo aspoň „do výstupu nepřenáší“.

Současné:
`Sharp ve výchozím nastavení zahodí metadata. Změřil jsem to`

Problém:
„zahodí metadata“ je stylisticky silnější a technicky méně přesné než „nepřenese do výstupu“.

Lepší:
`Sharp při resize a exportu ve výchozím nastavení nepřenáší metadata`

---

### B. `description`

**Místo:**
`Vlastní test na knihovně sharp: výchozí nastavení nepřeneslo do výstupu EXIF ani XMP, u JPEG i WebP. Jedno volání je zachovalo, jedno jiné jen zdánlivě.`

**Problém:**
„jen zdánlivě“ je trochu publicistické a bez kontextu nejasné. Co přesně zachovalo zdánlivě? Ve skutečnosti zachovalo EXIF, jen ne XMP. To není „zdánlivě“, ale „jen část metadat“.

**Lepší:**
`Vlastní test na knihovně sharp: výchozí nastavení nepřeneslo do výstupu EXIF ani XMP, u JPEG i WebP. keepMetadata() zachovalo obojí, keepExif() jen EXIF.`

---

### C. `answer`

**Místo:**
`...Volání keepMetadata je zachovalo včetně deklarace o původu, keepExif ne — ta deklarace totiž seděla v XMP.`

**Problém:**
Chybí závorky/metoda syntaxe — v textu jinde používáš `keepMetadata()` a `keepExif()`, tady bez závorek. Není to věcná chyba, ale je to nekonzistentní.

**Lepší:**
`Volání keepMetadata() je zachovalo..., keepExif() ne...`

---

### D. `stats`

**Místo:**
`label: "sledovaných bloků (EXIF, XMP), které ve výchozím testu přešly do výstupu"`

To je v pořádku, ale **„bloků“** není úplně přesné pro obě obálky/formáty najednou. U JPEG mluvíš o segmentech APP1, u WebP o RIFF chuncích. Tady ale protože jde o souhrnnou zkratku, se to dá snést. Přesnější by bylo:

`label: "sledovaných metadatových částí (EXIF, XMP), které ve výchozím testu přešly do výstupu"`

---

### E. FAQ „Co přesně jsem testoval?“

**Místo:**
`...u každého výstupu jsem kontroloval, které segmenty metadat zbyly.`

**Problém:**
U WebP nejsou segmenty. V těle to máš správně rozlišené.

**Lepší:**
`...u každého výstupu jsem kontroloval, které metadatové části zbyly — u JPEG segmenty, u WebP chunky.`

---

## 4. Technické nepřesnosti

### A. APP1 „EXIF a XMP“

**Místo:**
`U JPEG jsem četl segmenty APP1 (EXIF a XMP) a APP13...`

**Problém:**
Tohle je zkratka, ale trochu nečistá. JPEG má APP1 segmenty, ve kterých může být EXIF nebo XMP; nejsou to „APP1 (EXIF a XMP)“ jako dvě vestavěné položky jednoho segmentu. Navíc APP1 se může vyskytovat víckrát.

**Lepší:**
`U JPEG jsem kontroloval APP1 segmenty nesoucí EXIF a XMP a také APP13.`

---

### B. `DigitalSourceType` vs. `trainedAlgorithmicMedia`

**Místa:**
- `...XMP packet se značkou IPTC DigitalSourceType...`
- `...hledal řetězec trainedAlgorithmicMedia...`
- `Pokud vás zajímá konkrétně značka o původu, hledejte v souboru řetězec DigitalSourceType`

**Problém:**
Tady je lehká terminologická nejednotnost:
- jednou mluvíš o poli `DigitalSourceType`,
- jindy o konkrétní hodnotě `trainedAlgorithmicMedia`.

To samo není chyba, ale v návodu k ověření je lepší říct, co je **název vlastnosti** a co **hodnota**.

**Lepší:**
`Pokud vás zajímá konkrétně tato deklarace, hledejte v XMP buď vlastnost IPTC DigitalSourceType, nebo její konkrétní hodnotu trainedAlgorithmicMedia.`

---

### C. „informace o způsobu vzniku podle IPTC je v XMP“

**Místo:**
`...informace o způsobu vzniku podle IPTC je v XMP.`

**Problém:**
Pořád trochu zkratka. Přesnější je:
- hodnota je z IPTC schématu,
- v tomto testu je zapsaná v XMP,
- nikoli jako samostatný IPTC IIM blok.

Jinde to máš, tady je to useknuté.

**Lepší:**
`...hodnota z IPTC schématu byla v tomhle testu zapsaná v XMP, ne jako samostatný IPTC IIM blok.`

---

### D. „Metadata se běžně zahazují… že se šetří velikost.“

**Místo:**
`Metadata se běžně zahazují s odůvodněním, že se šetří velikost.`

**Problém:**
To je mimo měření a trochu příliš jisté. Často ano, ale důvody bývají i soukromí, normalizace výstupu, konzistence pipeline, bezpečnost, cache policy.

**Lepší:**
`Metadata se často zahazují kvůli velikosti, soukromí nebo konzistenci výstupu.`

---

### E. „zbytky z editace, názvy vrstev, poznámky“

**Místo:**
Checklist, bod `Zbytky z editace`

**Problém:**
U JPEG/WebP po běžném exportu tyto věci často stejně nejsou, protože názvy vrstev a interní edit history typicky žijí spíš v PSD/TIFF/XMP sidecar/workfile ekosystému než v běžném finálním webovém JPEG. Není to vyloženě nepravda, ale je to technicky rozvolněné.

**Lepší:**
`