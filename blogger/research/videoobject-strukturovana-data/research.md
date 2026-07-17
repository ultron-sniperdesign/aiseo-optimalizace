# Research — VideoObject strukturovaná data

**Slug:** `videoobject-strukturovana-data`
**Kategorie:** tutorial (→ `howto` → 5/5 JSON-LD)
**Řádek plánu:** 84 (`videoobject strukturovana data`)
**Datum:** 2026-07-17

---

## Teze

AI systémy video „nevidí" — čtou text: text okolo videa na stránce, přepis a strukturovaná data.
VideoObject dává strojově čitelná fakta o videu (název, popis, délka, datum), přepis dává vlastní obsah.
Bez toho je video pro textový model zavřená krabice.

Návaznost: [youtube-pro-ai-viditelnost](/blog/youtube-pro-ai-viditelnost/) řeší strategii viditelnosti
videa; tenhle článek je technický doplněk — jak video označit ve strukturovaných datech.

---

## ✅ OVĚŘENÁ FAKTA (primární zdroj: Google Search Central, doc „Video (VideoObject, Clip, BroadcastEvent)", aktualizace 2026-02-13; schema.org/VideoObject)

**Povinné vlastnosti (jen 3):**
- `name` — název videa (unikátní pro každé video)
- `thumbnailUrl` — URL na náhledový obrázek videa (musí být přímo dostupný, ne za přihlášením/redirectem)
- `uploadDate` — datum prvního publikování, ISO 8601 (doporučeně s časovou zónou, např. `2026-05-19T08:00:00+02:00`)

⚠️ POZOR: `description` NENÍ povinné — je jen doporučené. (Sekundární blogy tvrdí, že povinné je;
Google doc říká, že povinné jsou jen name/thumbnailUrl/uploadDate.) V článku uvádět přesně.

**Aspoň jedno z (doporučené, ale prakticky nutné pro užitečnost):**
- `contentUrl` — přímý odkaz na soubor videa (MP4, WebM). Google: „nejúčinnější způsob, jak video načíst" → preferovat.
- `embedUrl` — odkaz na přehrávač (player). Když contentUrl není, dát aspoň embedUrl.
- Ideál: obojí.

**Další doporučené:**
- `duration` — délka videa, ISO 8601 duration (`PT1M33S` = 1 min 33 s)
- `interactionStatistic` — počet zhlédnutí. ⚠️ DEPRECATION: Google doporučuje `interactionStatistic`
  místo `interactionCount` (od října 2019; interactionCount stále podporován, ale nedoporučen).
- `expires` — časově omezený obsah
- `hasPart` (Clip) — segmenty/kapitoly videa
- `regionsAllowed` / `ineligibleRegion` — geografická omezení
- `publication` (BroadcastEvent) — živé přenosy

**Politika (Google general SD guidelines):** strukturovaná data musí reprezentovat obsah, který je
na stránce reálně viditelný. Označit video, které na stránce není, je porušení → nedělat.

---

## Úhel pro AI (co jde tvrdit z povahy věci + doložené sekundárně, hedgovat)

- Textový model nezpracuje pixel videa — pracuje s tím, co je jako text: okolní text stránky, přepis,
  strukturovaná data. (mechanismus, OK tvrdit)
- **Přepis je pro AI nejzásadnější krok.** Video bez přepisu = zavřená krabice; s přepisem = citovatelný
  zdroj. Přepis má být úplný (zkrácený/shrnutý ztrácí informaci). — hedgovat jako „bývá nejzásadnější",
  ne absolutně.
- Strukturovaná data dávají strojově čitelná FAKTA (název, popis, délka, téma); přepis dává OBSAH.
  Obojí se doplňuje, ne nahrazuje.

---

## Postup (→ howto, 5 kroků)

1. **Ověřte, že video je na stránce reálně vidět** — VideoObject se dělá k videu, které tam je,
   ne jako trik. (Google policy)
2. **Vyplňte 3 povinné vlastnosti** — name (unikátní), thumbnailUrl (přímo dostupný obrázek),
   uploadDate (ISO 8601 s časovou zónou).
3. **Přidejte contentUrl nebo embedUrl** — ideálně obojí; contentUrl (soubor) Google preferuje.
   Doplňte duration.
4. **Dejte na stránku přepis** — úplný, jako text. Tohle je pro AI nejcennější; struktura dat fakta,
   přepis obsah.
5. **Ověřte shodu a validitu** — hodnoty dat = to, co je vidět; otestujte v Rich Results Test /
   validatoru schema.org. Držte aktuální (uploadDate ne budoucí).

---

## Ukázka JSON-LD (do článku jako ```json blok — buildí se OK)

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Jak nastavit strukturovaná data krok za krokem",
  "description": "Praktická ukázka nastavení strukturovaných dat na produktové stránce.",
  "thumbnailUrl": "https://example.cz/nahledy/strukturovana-data.jpg",
  "uploadDate": "2026-05-19T08:00:00+02:00",
  "duration": "PT4M12S",
  "contentUrl": "https://example.cz/video/strukturovana-data.mp4",
  "embedUrl": "https://example.cz/prehravac/strukturovana-data"
}
```

---

## Chyby (→ MistakeGrid 4×)

1. **thumbnailUrl za přihlášením / přes redirect** — Google obrázek nenačte → rich result nevznikne.
2. **Označené video, které na stránce není** — porušení politiky strukturovaných dat.
3. **Žádný přepis** — pro textový AI model zůstane video zavřená krabice, ať jsou data jakkoli pěkná.
4. **`interactionCount` místo `interactionStatistic`** — zastaralé; použít doporučenou variantu.
   (+ varianta: budoucí uploadDate nebo špatný formát.)

---

## Hranice článku (povinná sekce)

- **Nezaručí rich result ani citaci v AI.** Splnění povinných vlastností dělá video _způsobilé_,
  ne garantované. Google i AI systémy rozhodují podle víc faktorů.
- **Neřeší hosting ani produkci videa** — jen jak už existující video označit.
- **Nenahrazuje přepis strukturovanými daty ani naopak** — jsou to dvě různé věci (fakta vs. obsah).

---

## Brand voice / jazyk

- Anglicismy → česky: „markup" → **strukturovaná data**, „thumbnail" → **náhledový obrázek**,
  „embed" → **vložený přehrávač** (embedUrl nechat jako název vlastnosti), „transcript" → **přepis**,
  „rich result" → **rozšířený výsledek** (nebo nechat „rich result" s vysvětlením — je zavedené).
  Povolené technické názvy: schema.org, JSON-LD, VideoObject, ISO 8601, MP4, URL, AI.
- Bez „musíte", „jediná cesta", „zaručeně". Hedge u všeho o chování AI/Google.
- answer: samostatná definice 40–60 slov, začít definicí (co je VideoObject / co dělá).

## Interní odkazy (ověřeno 2026-07-17, existují)

- `/blog/strukturovana-data-pro-ai/` — zastřešující o strukturovaných datech
- `/blog/youtube-pro-ai-viditelnost/` — strategie viditelnosti videa (návaznost)
- `/blog/jak-ai-cituje-zdroje/` — jak AI cituje (proč fakta + přepis)
- `/blog/ai-seo-content/` — přepis jako obsah

## CTA

Audit 9 990 (projde strukturovaná data a co doplnit) + Pack 1 490 (wireframy). Bez slibu výsledku.

## Zdroje (do research, ne do článku jako čísla)

- Google Search Central — Video structured data (aktualizace 2026-02-13) — primární
- schema.org/VideoObject
- sekundární blogy (swarmify, aeo-expert) — jen pro úhel „AI nevidí video / přepis", ne pro čísla
