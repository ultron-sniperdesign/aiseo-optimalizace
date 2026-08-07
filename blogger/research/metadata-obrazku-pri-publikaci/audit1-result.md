Níže audit po bodech. Cituju problematická místa a navrhuju konkrétní úpravy.

---

## 1. Kde vyvozuješ z měření víc, než z něj plyne

### A. Titulek je přestřelený

**Místo:**
`title: "Váš build zahazuje metadata obrázků. Změřil jsem to"`

**Problém:**
„Váš build“ zobecňuje na čtenářův build obecně. Ve skutečnosti jsi měřil **sharp 0.34.5 v konkrétním scénáři resize+export**. To není totéž co „buildy obecně“.

**Návrh opravy:**
- `Sharp ve výchozím nastavení zahazuje metadata obrázků. Změřil jsem to`
- nebo `Co sharp udělá s metadaty obrázků při buildu: změřeno`

---

### B. Krátká odpověď je moc obecná

**Místo:**
`answer: "Otestoval jsem, co udělá běžná publikační pipeline s metadaty obrázku..."`

**Problém:**
„běžná publikační pipeline“ je moc široké. Test neříká nic o WordPressu, Shoptetu, CDN, ImageMagicku, browser-side transformacích apod.

**Návrh opravy:**
`Otestoval jsem, co udělá knihovna sharp 0.34.5 s metadaty obrázku při resize a exportu. Ve výchozím nastavení v mém testu zahodila EXIF i XMP u JPEG i u WebP. Volání keepMetadata je zachovalo včetně značky o AI původu, zatímco keepExif ne, protože ta značka byla v XMP.`

---

### C. „Výsledek je jednoznačnější, než jsem čekal.“

**Místo v těle:**
`Výsledek je jednoznačnější, než jsem čekal.`

**Problém:**
Rétoricky to posouvá čtenáře k dojmu, že jde o silný obecný poznatek. Přitom jde o jeden testovací soubor a jednu knihovnu.

**Návrh opravy:**
`V tomhle testu vyšel výsledek jednoznačně.`

---

### D. „tak, jak to dělá běžný build“

**Místo:**
`Vždy resize(1200) a export, jak to dělá běžný build.`

**Problém:**
Tohle je nepodložené zobecnění. Mnoho buildů:
- neresizuje vždy,
- nepřevádí vždy do JPEG/WebP,
- používá jiné quality,
- může metadata explicitně zachovávat nebo naopak stripovat v jiné vrstvě.

**Návrh opravy:**
`Vždy šlo o resize(1200) a export — jednu běžnou variantu publikačního zpracování.`

---

### E. „Jedno volání keepMetadata() je zachová“

**Místo:**
`jedno volání keepMetadata() je zachová`

**Problém:**
Formulace skoro slibuje obecnou vlastnost bez podmínek. Přesnější je říct, že **v tomhle testu** zachovalo EXIF a XMP.

**Návrh opravy:**
`V tomhle testu jedno volání keepMetadata() zachovalo EXIF i XMP`

---

### F. Argument o velikosti souboru je přetažený

**Místa:**
- `Argument „kvůli výkonu to zahazujeme" tady nesedí.`
- `Ale jako paušální argument to neobstojí`
- `Rozdíl ve velikosti byl u JPEG řádově kilobajt, takže argument o výkonu tady neobstojí.`

**Problém:**
Tady vyvozuješ víc, než měření unese. Měřil jsi:
- **jeden malý syntetický JPEG**,
- s omezenou sadou metadat,
- po resize,
- v šesti variantách.

Z toho nejde silně soudit o „argumentu o výkonu“ obecně. Výkon není jen velikost souboru; zahrnuje i:
- přenos,
- cache,
- dekódování,
- CPU při transformaci,
- rozdíly u větších sad metadat,
- ICC profilů,
- thumbnail preview uvnitř EXIF,
- více obrázků na stránce.

Navíc u WebP uvádíš 2 kB vs 2 kB — to může být jen zaokrouhlení tabulky.

**Návrh opravy:**
- `V tomhle testu byl přírůstek u JPEG asi 1 kB (5 vs. 6 kB). U WebP se v tabulce rozdíl neprojevil nad zvoleným zaokrouhlením. To je slabý podklad pro tvrzení, že metadata jsou vždy zanedbatelná, ale ukazuje to, že u malého souboru s jednoduchými metadaty nemusí být režie velká.`
- V závěru místo „argument o výkonu tady neobstojí“ raději:
  `Tenhle konkrétní test nedává silnou oporu pro automatické zahazování metadat z důvodu velikosti.`

---

### G. „Tedy přesně to, čím by se dal doložit původ.“

**Místo:**
`Tedy přesně to, čím by se dal doložit původ.`

**Problém:**
To je příliš silné. Nepodepsané XMP tvrzení o původu **není samo o sobě důkaz** v silném smyslu; je to deklarace/claim v metadatech, kterou lze změnit. Pokud chceš mluvit o doložení původu, musíš výrazněji oddělit:
- deklarativní metadata (EXIF/XMP/IPTC),
- kryptograficky vázané provenance systémy (C2PA).

**Návrh opravy:**
`Tedy deklarace původu, kterou lze nést v XMP metadatech.`

nebo

`Tedy metadata, která mohou nést informaci o způsobu vzniku — ne ale kryptograficky ověřený důkaz původu.`

---

## 2. Je metodika popsaná dost na zopakování?

Krátce: **ne úplně**. Pro orientační čtení ano, pro reprodukci ne.

### Chybí minimálně toto:

### A. Přesný kód pro vytvoření vstupního souboru
**Problém:**
Píšeš, že JPEG vytvořil Pillow 12.2 a že obsahoval EXIF + XMP packet. Ale neukazuješ:
- jak přesně byl XMP packet vložen,
- jaké EXIF tagy a s jakými hodnotami,
- zda byl JPEG baseline/progressive,
- jestli měl ICC profil,
- jestli obsahoval ještě jiné APP segmenty.

**Návrh:**
Přidej buď:
- gist/repozitář,
- nebo blok „reprodukce“ s přesným skriptem pro generaci souboru.

---

### B. Přesný kód všech šesti variant
**Problém:**
V článku ukazuješ jen dvě varianty. Research má šest. Bez přesného kódu nejde vyloučit, že mezi variantami byly jiné parametry než jen keep*.

**Návrh:**
Přidej všech šest volání v minimální podobě.

---

### C. Nástroj a metoda ověření metadat
**Problém:**
„Kontroloval jsem segmenty“ a „hledání řetězce v binárce“ je málo konkrétní. Čtenář neví:
- čím jsi segmenty/chunky četl,
- jestli šlo o vlastní parser, exiftool, hexdump, strings, webový nástroj,
- jak ses vypořádal s tím, že prosté hledání řetězce není plnohodnotná validace XMP chunku.

**Návrh opravy:**
Dopsat např.:
- `JPEG jsem ověřoval přes marker scan APP1/APP13 a výpis exiftoolu, WebP přes přítomnost chunků EXIF/XMP. Řetězec trainedAlgorithmicMedia jsem hledal jen jako doplňkovou kontrolu, ne jako jediný důkaz přítomnosti XMP.`

---

### D. Chybí informace o zaokrouhlení velikostí
**Problém:**
U WebP píšeš 2 kB a 2 kB. Není jasné, zda:
- byly soubory skutečně stejně velké,
- nebo se lišily v bajtech a tabulka to zaokrouhlila.

To je důležité, protože na tom stavíš argument o velikosti.

**Návrh:**
Uváděj přesné bajty, případně aspoň „2.1 kB vs 2.4 kB“.

---

### E. Není jasné, jestli `resize(1200)` znamená šířku 1200 px
**Problém:**
Sharp API to sice zkušený čtenář odhadne, ale pro reprodukci je lepší to napsat explicitně.

**Návrh:**
`resize({ width: 1200 })`

---

### F. Chybí informace, zda byl output progressive / mozjpeg / effort / lossless
**Problém:**
Může to ovlivnit velikost i strukturu výstupu. U tebe asi nehraje hlavní roli, ale pro reprodukovatelnost ano.

**Návrh:**
Dopsat, že jsi ponechal default encoder settings kromě quality.

---

## 3. Frontmatter

## title
Viz výše: přestřelené zobecnění „Váš build“.

**Oprava:**
`Sharp ve výchozím nastavení zahazuje metadata obrázků. Změřil jsem to`

---

## description

**Místo:**
`Test na knihovně sharp: výchozí nastavení smaže EXIF i XMP u JPEG i WebP. Jedno volání to zachrání — a jedno jiné jen zdánlivě.`

**Problém:**
„smaže“ je zavádějící. Ty neměříš mazání v originálu, ale nepřenesení do výstupu / strip při re-encode. Technicky přesnější je „nezachová“ nebo „do výstupu nepřenese“.

**Návrh:**
`Test na knihovně sharp: výchozí nastavení v mém testu nepřeneslo EXIF ani XMP do výstupu u JPEG i WebP. Jedno volání je zachovalo — a jedno jiné jen zdánlivě.`

---

## answer

**Problémy:**
- moc obecné „běžná publikační pipeline“
- chybí „v mém testu“
- `keepMetadata` bez závorek je drobnost, ale jinde používáš s nimi

**Návrh:**
`Otestoval jsem, co udělá sharp 0.34.5 s metadaty obrázku při resize a exportu. Ve výchozím nastavení v mém testu nepřenesl EXIF ani XMP do výstupu u JPEG i WebP. Volání keepMetadata() je zachovalo včetně značky o AI původu. keepExif() ne, protože ta značka byla v XMP.`

---

## stats

### Stat 1
**Místo:**
`0 bloků metadat, které přežily výchozí nastavení — u JPEG i u WebP`

**Problém:**
„bloků metadat“ je nejasné a zároveň nepřesné, protože jsi sledoval konkrétně EXIF a XMP; IPTC samostatně jsi ve vstupu ani neměl jako APP13 blok.

**Návrh:**
`0 sledovaných metadatových bloků (EXIF, XMP), které ve výchozím testu přešly do výstupu`

### Stat 2
V zásadě v pořádku, ale raději:
`1 volání, které v tomhle testu zachovalo EXIF i XMP: keepMetadata()`

### Stat 3
**Místo:**
`1 kB rozdíl ve velikosti JPEG se zachovanými metadaty oproti bez nich`

**Problém:**
Je to hrubě zaokrouhlené a moc kategorické vzhledem k jednomu souboru.

**Návrh:**
`≈1 kB přírůstek u testovacího JPEG při zachování metadat (5 vs. 6 kB v tabulce)`

---

## keywords

**Místo:**
`"c2pa publikační pipeline"`

**Problém:**
Článek C2PA netestuje. Klíčové slovo je SEO volba, ale odborně je to na hraně relevance.

**Návrh:**
Buď odstranit, nebo v textu jasněji vysvětlit, že C2PA je pouze kontrastní zmínka a netestovaná oblast.

---

## faq

### FAQ: „Jak se metadata zachovají?“
**Místo:**
`Voláním keepMetadata v řetězci zpracování.`

**Problém:**
Zase příliš obecné. Platí to jen pro sharp v tomhle testu.

**Oprava:**
`V tomhle testu na sharpu je zachovalo volání keepMetadata() v řetězci zpracování.`

---

### FAQ: „Co přesně jsem testoval?“
**Problém:**
Dobré, ale chybí explicitně, že IPTC DigitalSourceType bylo zapsané **v XMP**, ne jako samostatný IPTC IIM blok.

**Oprava:**
`...XMP packetem, ve kterém byla IPTC hodnota DigitalSourceType...`

---

### FAQ: „Proč keepExif nestačí?“
**Problém:**
Věcně v pořádku, ale „ve výstupu zůstane autor a copyright“ je moc konkrétní vzhledem k tomu, že jsi testoval jen svůj soubor s těmito tagy.

**Oprava:**
`V testu po keepExif() zůstaly EXIF položky jako autor a copyright, ale XMP informace o způsobu vzniku zmizela.`

---

## 4. Technické nepřesnosti kolem EXIF, XMP, IPTC a formátů

### A. Směšuješ IPTC jako obsah XMP s IPTC jako samostatný blok

**Místa:**
- research: `U JPEG kontrola segmentů APP1 (Exif / XMP) a APP13 (IPTC)`
- článek: `prohlížeči EXIF a IPTC`
- `XMP packet se značkou IPTC DigitalSourceType`

**Problém:**
Tohle může plést dvě různé věci:
1. **IPTC IIM / legacy IPTC** typicky v JPEG APP13
2. **IPTC vlastnosti zapsané v XMP** typicky APP1 XMP

Tvůj test používal podle popisu **XMP packet s IPTC vlastností**, ne samostatný IPTC APP13 blok. Kontrola APP13 je tedy spíš negativní/doplňková, ne jádro testu.

**Návrh opravy:**
- v metodice napsat:
  `Testoval jsem EXIF a XMP; IPTC hodnota DigitalSourceType byla zapsaná v XMP, ne jako samostatný IPTC IIM blok v APP13.`
- v návodu nepsat „EXIF a IPTC prohlížeč“, ale:
  `prohlížeč EXIF/XMP` nebo `exiftool`

---

### B. „Tím by se dal doložit původ“ je technicky nepřesné
Viz výše. Nepodepsané XMP není silný důkaz původu.

---

### C. „Značka AI původu“
**Problém:**
Lidově srozumitelné, ale technicky je to spíš:
- metadata o **digitálním zdroji / způsobu vzniku**
- ne nutně univerzální „AI značka“

**Návrh:**
Při prvním výskytu upřesnit:
`hodnota IPTC DigitalSourceType, tedy deklarace způsobu vzniku obsahu`

---

### D. WebP metadata
**Místo:**
`u WebP kontrola chunků EXIF / XMP`

**Problém:**
V zásadě správně, ale pokud chceš být přesný, napiš, že jde o RIFF WebP chunks. Teď to nevadí, ale text působí, jako by JPEG segmenty a WebP chunky byly téměř totéž.

**Návrh:**
`U WebP jsem kontroloval RIFF chunky EXIF a XMP.`

---

### E. „metadata nezmenší, ale zahodí celá“
**Místo:**
`výchozí nastavení metadata nezmenší, ale zahodí celá`

**Problém:**
Formulace je neobratná. Metadata se přece „nezmenšují“ jako standardní alternativa. Lepší je „neproběhne částečné zachování“.

**Návrh:**
`Ve výchozím testu nešlo o částečné zachování; EXIF ani XMP se do výstupu nepřenesly vůbec.`

---

### F. „historie úprav, názvy vrstev, poznámky“
**Místo:**
Checklist „Zbytky z editace“

**