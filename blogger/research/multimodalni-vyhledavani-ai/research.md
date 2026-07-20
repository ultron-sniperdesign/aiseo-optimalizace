# Research — Multimodální a hlasové vyhledávání

**Slug:** `multimodalni-vyhledavani-ai`
**Kategorie:** **analysis** (ne tutorial dle plánu — zdůvodnění níž) · **Tagy:** ai-platformy + obsah
**Řádek plánu:** `multimodalni vyhledavani ai`
**Datum:** 2026-07-19

---

## ⚠️ ZMĚNA KATEGORIE: plán říká tutorial, píšu analysis

Plán chce „co to znamená pro strukturu obsahu, alt texty a přirozený jazyk" = tutorial.
Problém: **praktická část by neměla oporu.** Google nepublikoval návod „jak psát pro multimodální
vyhledávání"; cokoli o alt textech by bylo řemeslo bez měřeného podkladu — a `imageobject
strukturovana data` je navíc samostatný řádek v plánu, který bych tím spotřeboval.

Poučení z minulého runu (audit #2 na listiclech): **nestavět tutorialový aparát na tenkém
podkladu.** Doložené je tu něco jiného a cennějšího: rozdíl mezi tím, co je u obrazu skutečně
změřené, a tím, co se u hlasu deset let opakuje bez zdroje.

## ⚠️ ZADÁNÍ TVRDÍ NEDOLOŽITELNÉ

Plán: *„roste podíl hlasových a obrazových dotazů"*. U obrazu doložit jde. **U hlasu ne** —
viz níž. Článek to musí rozdělit, ne to shrnout do jedné věty.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE (blog.google, přímé fetche 2026-07-19)

### I/O 2026 (post z 19. 5. 2026) — nejčerstvější
- DOSLOVA: *„Just one year after its debut, AI Mode has surpassed one billion monthly users,
  with queries more than doubling every quarter since launch."*
- *„the biggest upgrade to our Search box in over 25 years — now completely reimagined with AI"*
- Gemini 3.5 Flash jako výchozí model v AI Mode globálně
- Personal Intelligence rozšířeno do zhruba 200 zemí a 98 jazyků
- ⚠️ Post **neobsahuje** žádná čísla o Lens, obrazovém vyhledávání ani hlasu

### AI Mode update (20. 5. 2025)
- DOSLOVA: Google Lens *„more than 1.5 billion people are using to search what they see every month"*
- AI Overviews *„driving over 10% increase in usage of Google for the types of queries that show
  AI Overviews"* (USA, Indie)

### Multimodální AI Mode (7. 4. **2025** — pozor na datum!)
- DOSLOVA: *„You can snap a photo or upload an image, ask a question about it and get a rich,
  comprehensive response with links to dive deeper."*
- **Visual search fan-out** DOSLOVA: AI Mode *„issues multiple queries about the image as a whole
  and the objects within the image, accessing more breadth and depth of information than
  a traditional search on Google."*
- ⚠️ Post **neobsahuje** žádná čísla

### Starší (8. 2. 2023)
- *„Lens is now used more than 10 billion times per month"* — použitelné jen s uvedením roku

---

## ⛔ NETVRDIT
- **„12 miliard vizuálních vyhledávání měsíčně, čtyřnásobek za dva roky"** — objevilo se v souhrnu
  vyhledávání, **přímým fetchem NEPOTVRZENO**. NEPOUŽÍVAT.
- **jakékoli procento hlasových dotazů** — viz níž, zdroje si odporují a primární chybí
- **„8,4 miliardy hlasových asistentů"** — SEO agregátory, neověřeno
- že multimodální post je z roku 2026 (je z **dubna 2025**)
- návody na alt texty jako doloženou optimalizaci pro multimodální vyhledávání
- že Lens = AI Mode (jsou to různé věci, byť propojené)

---

## 🔴 HLAVNÍ POINTA: hlas vs. obraz — asymetrie důkazů

### Obraz: Google publikuje čísla i mechanismus
1,5 mld. lidí měsíčně u Lens, 1 mld. měsíčních uživatelů AI Mode, popsaný visual search fan-out.

### Hlas: deset let opakovaných čísel bez primárního zdroje
Souhrnná vyhledávání vrátila pro rok 2026 hodnoty, které si **navzájem odporují**:
- „27 % všech dotazů"
- „20,5 % globální míra užívání"
- „32 % spotřebitelů denně"

Všechno jsou to SEO agregátory statistik, žádný primární zdroj. Navíc doložený precedens
nespolehlivosti: predikce, že **75 % lidí bude do roku 2020 vlastnit chytrý reproduktor**,
se nenaplnila.

→ Poctivý závěr: **u hlasu nemáme čím podložit ani velikost, ani růst.** To neznamená, že hlas
neexistuje — znamená to, že „optimalizace pro hlasové vyhledávání" jako samostatná disciplína
stojí na vodě.

---

## Praktická vrstva (držet skromnou, bez tutorialového aparátu)

Z visual search fan-out plyne mechanicky (ne jako Googlem doporučený postup):
- systém čte **i vedlejší objekty** v obrázku, ne jen hlavní předmět
- na jeden obrázek pouští **víc dotazů na pozadí**
→ fotka produktu nese víc informace, než si člověk myslí; pozadí a kontext scény taky „mluví"

Co se přenáší z toho, co už na webu máme, a co NENÍ specifické pro hlas ani obraz:
- text, který odpovídá na otázku položenou přirozeně → [pasážová optimalizace](/blog/pasazova-optimalizace-obsahu/)
- odpověď nahoře, ne ve třetím odstavci → [obsah pro AI éru](/blog/ai-seo-content/)

## Hranice
- **Nedává návod na alt texty a značení obrázků** — bez měřeného podkladu; `imageobject
  strukturovana data` je samostatný řádek plánu
- **Neměří český trh**
- **Neslibuje, že se optimalizací dostanete do obrazových odpovědí**

## Brand voice
- Anglicismy → česky: „visual search fan-out" ponechat s vysvětlením (**rozpad dotazu nad obrázkem**),
  „multimodal" → **multimodální** (vysvětlit: text, obraz i hlas naráz).
  Povolené: Google Lens, AI Mode, Gemini, AI Overviews.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-19; `query-fan-out` NEEXISTUJE — nepoužívat!)
`/blog/google-ai-mode/` · `/blog/ai-mode-vs-ai-overviews/` · `/blog/jak-se-zobrazit-v-ai-mode/` ·
`/blog/mereni-ai-mode-limity/` · `/blog/test-viditelnosti-v-ai/` · `/blog/videoobject-strukturovana-data/` ·
`/blog/produktove-stranky-pro-ai/` · `/blog/ai-seo-content/` · `/blog/pasazova-optimalizace-obsahu/`

## CTA
Audit 9 990 + Pack 1 490. Bez slibu zobrazení.
