# Research — Případová studie jako zdroj pro AI citace

**Slug:** `pripadova-studie-pro-ai`
**Kategorie:** **tutorial** (s `howto` → JSON-LD 5/5) · **Tagy:** obsah + duveryhodnost
**Řádek plánu:** `pripadova studie pro ai`
**Datum:** 2026-07-27

---

## 📌 ZADÁNÍ Z PLÁNU
Praktická šablona, jak napsat case study, kterou AI vidí jako primární zdroj.
Doplňuje `originalni-data-pro-ai` o konkrétnější formát.

---

## 🔴 KOLIZNÍ KONTROLA (ověřeno grepem 2026-07-27)

`originalni-data-pro-ai` zmiňuje případovou studii **9×** — ale vždycky jen jako
**jednu položku v seznamu typů dat**, nikdy jako samostatný postup:

| Kde | Co tam přesně je |
|---|---|
| stats / FAQ | „případová studie s výsledky před a po“ jako jeden z typů originálních dat |
| Checklist | „Případová studie s čísly — klient, výchozí stav, akce, měřitelný výsledek za období“ |
| „Pro nejmenší firmy“ | „Případová studie z vlastní zakázky … největší poměr výsledku k času“ |
| formát publikace | úseky 50–150 slov, metodika v boxu, CSV ke stažení, strukturovaná data |
| číslo ~2,3× | **už použité a ohedgované** („v některých analýzách“, „v jedné z citovaných analýz“) |

**→ ZAKÁZÁNO opakovat:** číslo 2,3×, pravidlo 50–150 slov, obecný postup sběru dat,
seznam typů originálních dat. To všechno má `originalni-data-pro-ai` a odkážu na něj.

Web má i **vlastní publikovanou case study** `case-study-megadetail-ai-navstevnost`
(H2: Kolik toho AI nástroje reálně pošlou / Málo lidí, ale rozhodnutých / Kam AI posílá /
AI Overviews: 200 tisíc zobrazení / Proč AI doporučuje web, který AI SEO neřešil / Co s tím
uděláme / Co si z dat odnést) — použiju ji jako **živý příklad k posouzení podle vlastních
kritérií**, ne jako chlubení.

## ✅ CO JE VOLNÉ — problémy specifické pro case study, nikde na webu

1. **Souhlas klienta a co dělat, když nesmíte jmenovat.** Největší praktický blokátor
   agentur. Anonymní case study („klient z e-commerce“) je jako zdroj podstatně slabší.
   Nikde na webu není řešené.
2. **Atribuce a kontrafaktuál.** Case study ze své podstaty tvrdí příčinnost („zvedli jsme
   X o 40 %“). Co jiného to mohlo způsobit — sezónnost, update algoritmu, výpadek
   konkurence, souběžná kampaň. **Explicitní přiznání alternativ je to, co odděluje
   citovatelnou case study od marketingu.** Nikde na webu.
3. **Ověřitelná čísla × neověřitelná.** Klasická lež case studies: procento bez absolutních
   čísel („+300 %“ ze 2 na 8). Uvádět absolutní hodnotu + procento + období + zdroj čísla.
4. **Struktura, kde je každá část samostatně vytažitelná** — pořadí specifické pro case study
   (výsledek → výchozí stav → zásah → metodika → období → co to nedokazuje), ne obecné
   pravidlo o délce úseků.
5. **Kdy case study nepsat.** Když výsledek nejde přiřknout, když je období příliš krátké,
   když klient nedovolí čísla.

## ✅ FAKTA (ověřená, konzistentní s webem)

- Case study patří mezi typy originálních dat, které AI systémy používají jako primární zdroj
  — podrobně `originalni-data-pro-ai` (odkázat, neopakovat).
- Formát publikace (krátké citovatelné úseky, metodika v boxu, CSV, strukturovaná data)
  má `originalni-data-pro-ai` — odkázat.
- Vlastní baseline měření (19. 7. 2026) ukázalo, že u českých webů se v ChatGPT prosadí
  hlavně geograficky ukotvený obsah → **česká case study s českými čísly je přesně ten typ
  obsahu, který globální anglické zdroje nemají.** Provázat s `chatgpt-seo` (nově refreshnutý).
- Strukturovaná data: `Article` u case study je bezpečná volba; `Dataset` dává smysl jen
  když opravdu publikujete datový soubor.

## ⛔ NETVRDIT
- že case study citaci zajistí
- vlastní procenta o tom, jak často AI cituje case studies
- neopakovat číslo 2,3× (je jinde a je ohedgované)
- že anonymní case study je bezcenná (je slabší, ne bezcenná)
- nevydávat doporučení o souhlasu klienta za právní radu — je to praxe, ne právní rozbor

## Struktura (tutorial, s howto → 5/5)
1. Krátká odpověď — co dělá case study použitelnou jako zdroj
2. Čím se case study liší od ostatních originálních dat (a odkaz na `originalni-data-pro-ai`)
3. **Šest bloků citovatelné case study** (Stepper / Checklist) — pořadí a co v každém být musí
4. **Čísla, která jde ověřit** — absolutní hodnota + procento + období + zdroj (DoDont)
5. **Atribuce: co ještě mohlo výsledek způsobit** — sekce, která odděluje zdroj od reklamy
6. **Když klient nedovolí jméno** — tři úrovně anonymizace a co každá stojí za důvěryhodnost
7. Kdy case study nepsat (warning Insight)
8. Časté chyby (MistakeGrid)
9. Co si z toho vzít

## Brand voice
- „případová studie“ (ne „case study“ v běžném textu; anglicky jen při prvním uvedení)
- answer 40–60 slov, začíná definicí
- čísla česky, žádné vymyšlené benchmarky
- CTA: max. jedna věta, žádný funnel po sekci o poctivosti

## Interní odkazy (ověřeno 2026-07-27)
`/blog/originalni-data-pro-ai/` (nadřazený článek, odkázat brzy) ·
`/blog/case-study-megadetail-ai-navstevnost/` (vlastní příklad) ·
`/blog/strukturovana-data-pro-ai/` · `/blog/chatgpt-seo/` · `/blog/e-e-a-t-pro-ai/` ·
`/blog/jak-ai-cituje-zdroje/` · `/slovnik/#citace-ai`
