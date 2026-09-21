# Research — ImageObject: strukturovaná data pro obrázky a AI

Slug: `imageobject-strukturovana-data` · kategorie `tutorial` · řádek plánu `imageobject strukturovana data`
(řádek 130) · run 21. 9. 2026 · kadence: **druhý nový článek**.

## Co je ověřeno a čím (pravidlo Z16)

| Druh dokladu | Co v tom runu stojí | Co z toho smí být v článku |
|---|---|---|
| **Dokumentace** | 5 stránek Google Search Central + schema.org + W3C WAI, všechny načtené 21. 9. 2026 s uvedeným datem aktualizace (viz tabulka podmínek). Doplněno po 1. auditu: Google Images best practices obsahuje větu **„Google uses alt text along with computer vision algorithms and the contents of the page to understand the subject matter of the image.“** — obsah obrázku tedy není jen věc dopsaného textu | „podle dokumentace Googlu k 21. 9. 2026“ — vlastnosti, povinnosti, podmínky odznaku |
| **Rozhraní (UI)** | **prázdné** — odznak licence v Google Obrázcích jsem neviděl, do rozhraní nevidím a nemám jak ověřit, jak vypadá u konkrétního obrázku | nic; článek nesmí tvrdit, co uživatel v Obrázcích uvidí |
| **Měření** | Marketing Miner 21. 9. 2026 (cs): `alt text` 130/měs, −27 % r/r, peak 04/2026 · `strukturovaná data` 70/měs, −17 % r/r · `obrázky seo` 20/měs · `imageobject` **bez dat**. Návrhy k `alt text`: 183 řádků z API, po deduplikaci 100 — v top 20 jen anglické dotazy (decorative images alt text, is alt text important for seo, css background image alt text). **Vlastní měření z korpusu** (nepřeměřováno, jen citováno): `co-z-obrazku-zmizi` (38 e-shopů, z 31 dvojic mělo 15 originálů metadata a nepřežila ani jedna zmenšenina) a `metadata-obrazku-pri-publikaci` (sharp 0.34.5 ve výchozím nastavení nepřenesl EXIF ani XMP) | hledanost s uvedeným zdrojem a obdobím; naše měření s odkazem na článek, kde je popsané |
| **Vlastní kontrola nástrojem** | Ukázka JSON-LD z článku poslána 21. 9. 2026 do `validator.schema.org/validate` (POST, pole `html`) → rozpoznaný typ `ImageObject`, **0 chyb** | „ověřeno ve validátoru schema.org, bez chyb“ s datem |
| **Nelze ověřit** | (a) jestli AI systémy `ImageObject` čtou a jak ho váží; (b) jestli konkrétní obrázek odznak dostane — Google výslovně nezaručuje zobrazení; (c) podle jakého pravidla se vybírají obrázky do Přehledů od AI a režimu AI | nic — v článku to musí být řečeno jako nedoložené, ne obejito |

**Teze z plánu vs. research.** Plán tvrdil: „ImageObject, popisný alt text a titulek dají obrázku
strojově čitelný kontext a autorství“. **Potvrzeno jen zčásti.** Doložená role `ImageObject`
je **licence a atribuce v Google Obrázcích** (odznak licence), ne pochopení obsahu obrázku.
A dokumentace Googlu k funkcím s AI výslovně říká, že pro ně **není potřeba žádné zvláštní
značení ani optimalizace**. Kontext obrázku stroji dává hlavně **alt text, okolní text a název
souboru** — to je v dokumentaci Google Obrázků, ne v `ImageObject`. Článek proto musí rozdělit
dvě věci, které plán slil do jedné, a rozdíl pojmenovat.

## Tabulka podmínek u tvrzení o cizí platformě

| Tvrzení | Podmínky | **Konzistence** | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Obrázek může být způsobilý k odznaku licence v Google Obrázcích | `ImageObject` s `contentUrl` **a** `license` (u IPTC cesty pole *Web Statement of Rights*) · URL obrázku crawlovatelná a indexovatelná | strukturovaná data musí odpovídat viditelnému obsahu stránky, obrázek musí být relevantní ke stránce | **„Google does not guarantee that structured data or IPTC photo metadata will show up in search results.“** Funkce je na mobilu i desktopu ve všech regionech a jazycích, kde je Google Vyhledávání | Image metadata / licensable images (akt. **2025-12-10**) |
| Minimum, aby značení obstálo | povinné `contentUrl` **plus aspoň jedna** z `creator`, `creditText`, `copyrightNotice`, `license`; doporučené `acquireLicensePage` | stejné jako výše | samotné doporučené vlastnosti odznak nezpůsobí — bez `license` ne | tamtéž |
| IPTC v souboru je rovnocenná cesta | „You only need to provide Google with one form of information“ — stačí jedna z cest: strukturovaná data **nebo** IPTC metadata v souboru | mapování: Creator → `creator`, Credit Line → `creditText`, Copyright Notice → `copyrightNotice`, Web Statement of Rights → `license`, Licensor URL → `acquireLicensePage`; *Digital Source Type* nese klasifikaci algoritmicky vytvořeného obsahu | u IPTC je pro odznak povinné *Web Statement of Rights* | tamtéž |
| Pro Přehledy od AI a režim AI není potřeba nic navíc | stránka indexovaná a způsobilá k úryvku ve Vyhledávání | strukturovaná data musí odpovídat viditelnému textu | omezení jde nastavit přes `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex` | AI features (akt. **2025-12-10**): „There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary.“ Obrázky zmiňuje jen jako „Supporting your textual content with high-quality images and videos, when applicable.“ |
| Obrázek v `Article` (a spol.) má technické minimum | crawlovatelný a indexovatelný · formát podporovaný Google Obrázky · **≥ 50 000 px** (šířka × výška) · doporučeny poměry 16 : 9, 4 : 3 a 1 : 1 ve vyšším rozlišení | „Images must represent the marked up content“ — ne logo, ne dekorace | — | Article structured data (akt. **2026-09-08**) |
| Jak Google rozumí obsahu obrázku | — | — | — | Google Images best practices (akt. 2026-03-02): **„Google uses alt text along with computer vision algorithms and the contents of the page to understand the subject matter of the image.“** Publikačně ovlivnitelné jsou z toho alt text a obsah stránky |
| Co dává obrázku kontext pro stroj | `<img>` místo CSS pozadí (jinak není objevitelný) · popisný `alt` · obrázek u relevantního textu · popisný název souboru · mapa obrázků v sitemapě · podporované formáty BMP, GIF, JPEG, PNG, WebP, SVG, AVIF | „Make sure images are placed near relevant text and on pages that are relevant to the image subject matter.“ | — | Google Images best practices (akt. **2026-03-02**): „The most important attribute when it comes to providing more metadata for an image is the alt text“ |
| Značit se smí jen to, co je vidět | „Don't mark up content that is not visible to readers of the page.“ · „All image URLs specified in structured data must be crawlable and indexable.“ | „Your structured data must be a true representation of the page content.“ | — | Structured data general guidelines (akt. **2026-07-10**); porušení = ruční zásah a ztráta způsobilosti k rich result |
| Dekorativní obrázek | `alt=""` (prázdný, ne vynechaný) — vynechaný atribut nechá čtečku přečíst název souboru | — | dekoraci je lepší řešit CSS pozadím než `<img>` | W3C WAI Tutorials — Decorative Images |

## Kolizní kontrola (Z10)

- `ImageObject` je v celém korpusu **jednou** (`ai-search-trendy-cesko-2026`) — téma nikdo nepokrývá.
- Obrázkové články v korpusu řeší **něco jiného** a nejsou kolize, nýbrž vazby:
  `metadata-obrazku-pri-publikaci` (test knihovny sharp) a `co-z-obrazku-zmizi` (38 e-shopů) jsou
  o **metadatech uvnitř souboru**, `jak-poznat-ai-obrazek` a `ai-obrazky-v-ai-prehledech` o AI
  obrázcích, `videoobject-strukturovana-data` je **sesterský vzor** pro `VideoObject`.
- `git fetch` 21. 9. 2026 15:0x — řádek nikdo nevzal, `origin/main` na `b3ae3c5`.

## Interní odkazy (ověřené, ne převzaté ze plánu)

| Odkaz | Proč | Kontrola |
|---|---|---|
| `/blog/videoobject-strukturovana-data/` | sesterský typ, stejná logika „co je doložené a co ne“ | přečteno; obsah v pořádku. **Pozor:** má v CTA starý název auditu („AI SEO audit“) — patří do chystaného bloku oprav podle Z4, tady se nepřebírá |
| `/blog/strukturovana-data-pro-ai/` | nadřazený přehled typů | uvedeno v plánu i v sesterském článku |
| `/blog/co-z-obrazku-zmizi/` | **naše měření**: metadata ze souboru cestou na web mizí — přesně důvod, proč IPTC cesta sama nestačí | přečteno |
| `/blog/metadata-obrazku-pri-publikaci/` | test sharp: výchozí nastavení metadata nepřenese | přečteno |

## Poznámka k nástrojům (B3)

Marketing Miner: 8 dotazů, **data jen u 2** (`alt text`, `strukturovaná data`). `imageobject`
hledanost nevrací — **to není nulová poptávka, jen nedoložená**; článek proto nestaví na objemu
a nikde netvrdí, že se termín hledá. Google Trends nepouštěn (u termínu bez měřitelné hledanosti
nemá co vrátit) — rising queries pro FAQ proto nahradily návrhy z Marketing Mineru a otázky,
které vyplynuly z dokumentace.

## Zdroje

1. Google Search Central — Image metadata (licensable images), akt. 2025-12-10
2. Google Search Central — Google Images best practices, akt. 2026-03-02
3. Google Search Central — AI features (Top ways to ensure your content performs well), akt. 2025-12-10
4. Google Search Central — Article structured data, akt. 2026-09-08
5. Google Search Central — Structured data general guidelines, akt. 2026-07-10
6. schema.org — ImageObject (Thing > CreativeWork > MediaObject > ImageObject)
7. W3C WAI Tutorials — Decorative Images
8. Marketing Miner (cs) — hledanost a návrhy, 21. 9. 2026
