# Research — AI generuje obrázky přímo v AI přehledech

**Řádek plánu:** `ai generovane obrazky v ai overviews`
**Datum:** 2026-08-04 · **Kategorie:** analysis · **Tagy:** ai-platformy, obsah

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| — žádný článek o obrázcích | grep `obraz|image|foto|vizual` v názvech souborů → jen `jak-se-zobrazit-v-ai-mode` (jiné téma) | **Téma volné.** |
| `zero-click-ai` | proklik / bez prokliku u textu | Souvisí: tohle je táž logika o patro vedle, u obrázků. Prolinkovat. |
| `ai-generovany-obsah-viditelnost` | generovaný **text** na vlastním webu | Jiná věc — tam generujeme my, tady generuje vyhledávač. |
| `strukturovana-data-pro-ai`, `videoobject-strukturovana-data` | značkování médií | Sousedí, prolinkovat. |

**Verdikt: téma volné.** O obrázkovém vyhledávání na webu nemáme nic samostatného.

---

## 2. Ověřená fakta

### Primární — blog Googlu, přehled novinek za červenec 2026

Doslova: *„we announced a new browseable home for Google Images and image generation through
AI Overviews in Search."*

### Doplňující — Search Engine Land, 14. 7. 2026

- Uživatel zadá textový prompt a AI přehled z něj vytvoří obrázek: *„transforming a simple
  text prompt into a high-quality, custom visual made completely from scratch."*
- Pohání to **nejnovější model Nano Banana**.
- **Jen v angličtině.**
- **Regiony:** ty, kde už je dostupné vytváření obrázků v AI Mode.
- **Náběh:** „over the coming weeks".
- K výročí 25 let od spuštění Google Obrázků zároveň **nová domovská stránka** obrázkového
  vyhledávání.

---

## 3. ⛔ Co ani jeden zdroj neříká

| Otázka | Stav |
|---|---|
| Označují se vygenerované obrázky (viditelný štítek, SynthID, metadata)? | **neuvedeno** |
| Odkazuje se u nich někam? | **neuvedeno** |
| Kdy a jestli vůbec jiné jazyky než angličtina? | **neuvedeno** |
| Je Česko mezi podporovanými regiony? | **neuvedeno** — a vzhledem k „jen anglicky" to dnes nemá jak platit pro české dotazy |
| Jaký podíl dotazů to zasáhne? | **neuvedeno** |

Tohle musí být v článku výslovně jako **nevíme**, ne jako „Google neoznačuje" nebo
„neodkazuje". Google u obrázků ze svých modelů dlouhodobě mluví o vodoznaku SynthID —
že to zdroj u téhle konkrétní funkce nezmiňuje, není totéž jako že se to neděje.
(Samostatný řádek do plánu: `oznacovani ai obrazku synthid`.)

---

## 4. Proč to má smysl psát

Dosud platilo: AI přehled shrne text a případně ukáže **existující** obrázek z nějakého webu.
Nově může obrázek **vzniknout**. Pro weby, kterým část návštěvnosti chodí z obrázkového
vyhledávání, je to stejná změna, jakou u textu přinesly AI přehledy — jen o médium vedle.

### Co z toho plyne a co je z toho úsudek

| Tvrzení | Status |
|---|---|
| Vygenerovaný obrázek nevzniká z konkrétní cizí fotky, kterou by bylo možné prokliknout | **plyne z popisu** („made completely from scratch") |
| Tam, kde stačí ilustrace, může generovaný obrázek nahradit hledání fotky | **úsudek**, ne zjištění |
| U dotazů na konkrétní věc (produkt, místo, osoba) generování nenahrazuje fotografii | **úsudek** — modely tvoří podobu, ne doklad |
| Dopad na návštěvnost z obrázků | **nedoloženo**, žádná data |

---

## 5. Co se tím nemění

- Obrázkové vyhledávání dál existuje a dál vede na weby.
- Práce na obrázcích (popisný název souboru, alt text, kontext stránky, strukturovaná data)
  má pořád stejný smysl — je to podmínka toho, aby stroj obrázku rozuměl.
- Report Generativní AI funkce v Search Console **kliky nedává**, takže tuhle změnu z něj
  nevyčtete. Klasická data o obrázkovém vyhledávání v Search Console zůstávají.

---

## 6. Teze článku

> Google 14. července 2026 přidal do AI přehledů generování obrázků: uživatel zadá prompt
> a přehled vytvoří obrázek úplně od začátku. Zatím jen anglicky a jen v regionech, kde už
> funguje tvorba obrázků v AI Mode. Pro weby to je stejný posun, jaký u textu přinesly AI
> přehledy — jen u obrázků. Jestli se generované obrázky nějak označují a jestli u nich
> vede odkaz, zdroje neuvádějí.

---

## 7. Zdroje

- blog.google — přehled AI novinek za červenec 2026 (*„a new browseable home for Google Images
  and image generation through AI Overviews in Search"*), čteno 4. 8. 2026
- searchengineland.com/google-ai-overviews-now-lets-you-create-image-482163 — 14. 7. 2026,
  detaily o modelu, jazyce a regionech, čteno 4. 8. 2026
- vlastní články: `zero-click-ai`, `strukturovana-data-pro-ai`, `videoobject-strukturovana-data`,
  `gsc-ai-segmenty-mereni`
