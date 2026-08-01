# Akční seznam — změny na webu (srpen 2026)

> Vzniklo z GA4 analýzy 2026-08-01 (okno 19. 7. – 1. 8., 255 relací) + ze zadání
> předělat `/sluzby/` podle téměř finální stránky `sniperdesign.cz/seo-pro-ai`.
>
> **Legenda:** 🔴 = čeká na rozhodnutí uživatele · 🟢 = můžu udělat sám ·
> ⏱️ = odhad práce · Poznámky k datům: GA4 měří až od 19. 7. 2026, vzorek je malý.

---

## 0. Blokující rozhodnutí (bez nich nemá smysl dělat §B)

### 🔴 0.1 — Kolize ceny auditu mezi weby

| Kde | Produkt | Cena |
|---|---|---|
| `aiseo-optimalizace.cz/audit/` | „AI SEO audit" | **9 990 Kč** |
| `sniperdesign.cz/seo-pro-ai` | „Audit připravenosti + edukativní meeting" | **3 600 Kč bez DPH** |

Návštěvník, který vidí oba weby (a remarketing ho mezi nimi prohání), narazí na
trojnásobný cenový rozdíl u produktů, které se jmenují skoro stejně. Než se sáhne
na `/sluzby/`, je potřeba rozhodnout jednu z variant:

- **(a) Dvě různé úrovně** — 3 600 = vstupní readiness check pro Upgates e-shopy,
  9 990 = hloubkový audit libovolného webu. Pak je nutné je viditelně **odlišit
  názvem i rozsahem** na obou webech.
- **(b) Jeden produkt** — sjednotit cenu i název, jeden z webů na druhý odkazuje.
- **(c) Rozdělení podle trhu** — sniperdesign = Upgates e-shopy, aiseo = všechno
  ostatní; explicitně napsané na obou stranách.

> Doporučení: **(a)**, protože oba produkty reálně existují a liší se rozsahem.
> Vyžaduje jen přejmenování a jednu vysvětlující větu na `/audit/`.

### 🔴 0.2 — Ceny na `/sluzby/`: ano, nebo ne?

`docs/sluzby-brief.md` § 1 má natvrdo *„Ceny: vynechat (later-wave)"*. Stránka
`seo-pro-ai` je mezitím **plně naceněná** (3 balíčky, 8 technických modulů,
8 obsahových služeb s jednotkovými cenami). Rozhodnutí:

- **Ceny ukázat** → silná citovatelnost pro AI (konkrétní čísla se citují lépe),
  vyšší důvěra, méně dotazů „kolik to stojí". Riziko: zavazuje, ztěžuje individuální nacenění.
- **Ceny neukazovat** → status quo, ale `/sluzby/` zůstane obecná a nekonkurenceschopná.

> Doporučení: **ukázat, ale jen „od" ceny** u balíčků a modulů, s poznámkou
> „konečná cena podle rozsahu". Získáme konkrétnost bez zavázání se na korunu.

### 🔴 0.3 — Vztah obou webů

`seo-pro-ai` je psaná pro **Upgates e-shopy**. `aiseo-optimalizace.cz` cílí šířeji
(e-shopy i firemní weby, viz persony v briefu). Kopírovat katalog 1 : 1 by aiseo
zúžilo na Upgates. Rozhodnout: přebíráme **strukturu a ceník**, ale necháváme
širší cílení — nebo aiseo taky zúžíme na e-shopy?

---

## A. Retence — zastavit rychlé odchody (z GA4)

### 🟢 A1 — Záchranná síť na `/navod-zdarma/` ⏱️ ~1 h

**Problém:** 96 uživatelů, 29 konverzí (30 %, výborné). Zbylých **67 odchází z webu
úplně** — stránka má v těle odkazy jen na `/pack/`, `/audit/` (placené) a GDPR.
Kdo není připraven dát e-mail ani zaplatit, nemá kam jít.

**Řešení:** blok **pod** hlavním formulářem (aby s ním nesoutěžil), 3 odkazy na
volný obsah: `/zacnete-tady/`, pilíř, nejsilnější článek. Text ve stylu
„Ještě se rozmýšlíte? Začněte tady."

**Měřítko úspěchu:** stránek na relaci u kampaně AKV z 1,39 nahoru; konverze
formuláře nesmí klesnout pod ~25 %.

### 🟢 A2 — Totéž na `/audit/` a `/pack/` ⏱️ ~1 h

`/audit/` má v těle jediný interní odkaz (`/pack/`), `/pack/` dva. Remarketingový
provoz sem chodí a do 20 s mizí. Přidat stejný záchranný blok — u `/audit/`
především odkaz na [case study](/blog/case-study-megadetail-ai-navstevnost/),
protože to je přesně obsah, který chce vidět člověk zvažující audit.

### 🟢 A3 — CTA výš v článcích ⏱️ ~2 h

Do 90 % délky stránky doscrolluje jen ~11 % návštěv (41 scroll událostí / 371
zobrazení). Spodní CTA tedy většina čtenářů nikdy neuvidí. Přidat nenápadné
kontextové CTA zhruba do první třetiny článku (komponenta, ne ruční vkládání do
každého MDX).

### 🟢 A4 — Mobilní navigace na landing stránkách ⏱️ ~30 min

Většina placeného provozu je mobil, kde je celá navigace schovaná pod hamburgerem.
Zvážit u landing stránek jeden viditelný textový odkaz „Co je AI SEO?" nad ohybem —
bez rozbití konverzní logiky stránky.

### 🔴 A5 — Přesměrovat kampaň RMK2 (tvoje věc, Meta Ads)

37 relací, engagement 19 %, průměr 10–19 s, **0 leadů i 0 nákupů**. Lidé po stažení
návodu zdarma jdou rovnou na audit za 9 990. Mezikrok, který už máme hotový:
case study nebo `/sluzby/`. Alternativa: nabídnout Pack za 1 490 místo auditu.

### 🔴 A6 — Označit `generate_lead` jako klíčovou událost v GA4 (tvoje věc, 2 min)

Událost se posílá (35×), ale není označená → **všechny reporty ukazují 0 konverzí**
a nedá se podle nich vyhodnocovat kampaň. GA4 → Správce → Události → přepínač
„Označit jako klíčovou událost".

---

## B. Přestavba `/sluzby/` podle `seo-pro-ai`

**Výchozí stav aiseo:** 14 služeb v kolekci `src/content/services/`, 5 bucketů,
6 detailních stránek (8 služeb detail nemá), **žádné ceny** (schema pole `price`
neexistuje). Index `/sluzby/` je katalog bez konkrétních čísel.

**Co má `seo-pro-ai` navíc:** 3 balíčky s cenou a úsporou, vstupní audit s meetingem,
8 technických modulů à la carte s cenami, 8 obsahových služeb s jednotkovou cenou
(za kategorii / produkt), interaktivní self-check, škála vlivu (🔥 velký / střední / menší).

### 🟢 B1 — Doplnit cenovou vrstvu do schématu a služeb ⏱️ ~3 h

Přidat do `src/content.config.ts` (kolekce `services`) volitelná pole:
`priceFrom` (číslo), `priceNote` (text, např. „+ 24 Kč / kategorii"), `priceUnit`.
Vyplnit u 14 služeb podle ceníku z `seo-pro-ai`. **Pozor na mutace:** ceny jsou
přeložitelná data → patří do bucketu „per-mutace" v `MUTATIONS.md`.

### 🟢 B2 — Balíčkové vrstvy nad katalog ⏱️ ~4 h

Nad stávající à la carte katalog přidat 3 balíčky (obdoba „Pevný základ /
Technicky připravený / Na MAX"). Brief už počítá se 3 vstupními cestami v hero —
tohle je jejich naplnění konkrétním obsahem a cenou. Vizuálně: existující
komponenty z `src/components/blocks/`, nevymýšlet nový design systém.

### 🟢 B3 — Doplnit 8 chybějících detailních stránek ⏱️ ~1 h / stránka

Detail má 6 ze 14 služeb. Karty bez detailu vedou do prázdna, což je vedle
retenčního problému z §A stejná chyba — návštěvník nemá kam pokračovat.
Priorita podle GSC: `dlouhodobe-seo` (115 impresí) a `monitoring-ai` (45 impresí,
pozice 8,4 — striking distance) už detail mají; další v pořadí podle poptávky.

### 🟢 B4 — Škála vlivu u služeb ⏱️ ~1 h

Převzít princip „velký / střední / menší vliv" — pomáhá zákazníkovi vybrat
a zároveň je to dobře citovatelný, strukturovaný obsah pro AI.

### 🟡 B5 — Self-check „Je váš web připravený na AI?" ⏱️ ~4 h

Interaktivní checklist z `seo-pro-ai`. Na aiseo dává smysl jako **lead magnet
i retenční prvek** — zabaví návštěvníka, který ještě není připravený koupit.
Řeší přesně problém z §A. Otázka: sdílet výsledek e-mailem (další lead), nebo
nechat čistě klientské?

### 🟢 B6 — Propojit trychtýř ⏱️ ~1 h

Po předělání propojit: `/audit/` → doporučené balíčky, balíček → detail služeb,
detail služby → case study, všechny → `/kontakt/`. Dnes jsou stránky služeb
odříznuté od zbytku webu podobně jako landing stránky.

---

## C. Na co si dát pozor

- **Nekopírovat 1 : 1.** `seo-pro-ai` je agenturní stránka pro Upgates e-shopy;
  aiseo je edukativní web s vlastní identitou a širším cílením. Přebíráme
  strukturu nabídky a ceník, ne texty a zúžení na jednu platformu.
- **Zakázaný slovník.** `seo-pro-ai` používá „schema.org", „answer block", „GEO SEO" —
  na aiseo platí `marketing/05-messaging-a-tonalita.md` (strukturovaná data,
  krátká odpověď).
- **Mutace.** Ceny, balíčky i texty služeb jsou per-fork data. Šablony a komponenty
  zůstávají sdílené — viz `MUTATIONS.md`.
- **Neměřit úspěch na celkových GA4 číslech.** Přes polovinu provozu je placená
  reklama; organiku hodnotit vždy zvlášť (segment `sessionDefaultChannelGroup`).
- **A/B test nedává smysl** — při současném objemu (255 relací / 14 dní) nemá
  statistickou sílu. Měřit před/po v delším okně.

---

## D. Navržené pořadí

| # | Krok | Kdo | ⏱️ |
|---|---|---|---|
| 1 | A6 — klíčová událost v GA4 | ty | 2 min |
| 2 | A5 — přesměrovat RMK2 | ty | 15 min |
| 3 | 0.1–0.3 — rozhodnutí o cenách a vztahu webů | ty | — |
| 4 | A1 + A2 — záchranné bloky na 3 landing stránkách | já | ~2 h |
| 5 | A3 + A4 — CTA výš, mobilní odkaz | já | ~2,5 h |
| 6 | B1 + B2 — ceny a balíčky | já | ~7 h |
| 7 | B3 + B4 + B6 — detaily, škála vlivu, propojení | já | ~10 h |
| 8 | B5 — self-check | já | ~4 h |

Kroky 1–2 mají největší poměr dopadu k práci a nejsou na mně. Kroky 4–5 můžu
udělat hned, nezávisle na rozhodnutích v §0. Blok B čeká na §0.
