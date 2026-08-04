# Research — AI Mode v Chrome otevírá zdroj vedle sebe

**Řádek plánu:** `ai mode vedle sebe v chrome`
**Datum:** 2026-08-04 · **Kategorie:** analysis · **Tagy:** ai-platformy, obsah

---

## 1. ⛔ Nejdřív oprava vlastního zadání

Řádek v plánu tvrdil, že jde o novinku *„z července a srpna 2026"*. **Není.**
Primární zdroj — blog.google, „A new way to explore the web with AI Mode in Chrome",
autoři Robby Stein (VP of Product, Google Search) a Mike Torres (VP of Product, Chrome) —
je datovaný **16. dubna 2026**.

Do řádku se to dostalo ze srpnového přehledu novinek, který funkci uváděl mezi čerstvými.
Je to potřetí v této sérii runů, co se datace ze sekundárního přehledu u zdroje rozpadla.
V článku musí být datum dubnové.

---

## 2. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `ai-prohlizece-atlas-comet` | ChatGPT Atlas a Perplexity Comet — **cizí** prohlížeče, identifikace, měření | **Téma volné.** Tam jde o produkty jiných firem, tady o AI Mode uvnitř Chromu. Prolinkovat. |
| `ai-mode-vs-ai-overviews` | rozdíl obou funkcí | Sousedí. |
| `google-ai-mode` | co AI Mode je | Sousedí, doplnit odkaz. |
| `zero-click-ai` | proklik / bez prokliku | Souvisí přímo: tohle je změna v tom, co se děje **po** prokliku. |
| `core-web-vitals-pro-ai` | rychlost | Sousedí. |

**Verdikt: téma volné.** O rozděleném zobrazení v Chromu na webu není nic.

---

## 3. Primární zdroj — blog.google, 16. 4. 2026

### Co Google oznámil

Doslova: **„clicking a link opens the webpage side-by-side with AI Mode."**

- Platí pro **AI Mode v Chromu na desktopu**.
- Po kliknutí na odkaz zůstává **AI Mode otevřený** a stránka se načte vedle něj.
- Na mobilu se ve stejném oznámení řeší něco jiného — nabídka „plus" ve vyhledávacím poli
  na stránce nové karty, kterou jde do dotazu přidat nedávné karty.
- Do dotazu v AI Mode jde přidat **víc karet, obrázků nebo souborů (PDF)**:
  *„you can now mix and match multiple tabs, images or files… and bring that context into
  your AI Mode searches."*

### Dostupnost

*„now available in the U.S., and we'll expand soon to more places around the world."*

**Žádný termín pro další země, žádná zmínka o Česku.** V článku takhle uvést — čtenář v ČR
to dnes s jistotou vyzkoušet nemůže.

---

## 4. ⛔ Co z toho NEPLYNE — hranice, kterou článek nesmí překročit

Google v tom postu **neříká**:

- jak se ta návštěva chová v analytice (referrer, atribuce),
- jestli se v Search Console počítá jinak,
- jak přesně je okno rozdělené (poměr stran),
- jestli je chování výchozí, nebo si ho uživatel zapíná.

Cokoli z toho v článku musí být označené jako **odhad, nebo vynecháno.**
Vlastní testovací ověření z ČR není možné (funkce je v USA).

---

## 5. Co z toho plyne pro stránku — a co je z toho úsudek

Tohle je jádro článku. Musí být oddělené od § 3.

| Důsledek | Status |
|---|---|
| Stránka se zobrazí v **užším okně** než v celé kartě | plyne přímo z popisu „side-by-side" |
| Vedle stránky zůstává panel s **dalšími citovanými zdroji** | plyne z popisu (AI Mode zůstává otevřený) |
| Uživatel může místo scrollování **doptat se AI** | plyne z popisu (follow-up otázky) |
| Konkrétní poměr rozdělení okna | **neznámé**, nepsat čísla jako fakt |
| Dopad na CTR nebo dobu na stránce | **nedoloženo**, nepsat |

Praktické důsledky, které z toho vyplývají (a v článku budou jako doporučení, ne jako zjištění):

1. **Responzivita na šířkách kolem tabletu přestává být okrajová.** Desktopová návštěva
   se najednou chová jako užší okno.
2. **Odpověď musí být nahoře.** Konkurenční zdroj je jeden klik daleko v panelu vedle.
3. **Sticky prvky a cookie lišty zabírají víc.** V užším okně ukousnou větší podíl plochy.
4. **Modály a interstitialy jsou v tomhle kontextu ještě horší** než obvykle.

---

## 6. Teze článku

> Google od 16. dubna 2026 v AI Mode v Chromu na desktopu otevírá odkaz **vedle** odpovědi,
> ne místo ní. AI Mode zůstává otevřený a uživatel se může doptávat dál. Pro váš web to
> znamená, že desktopová návštěva přichází do užšího okna a vedle ní zůstává otevřený
> panel AI Mode. Zatím jen v USA a Google k tomu neříká, jak se ta návštěva měří.

---

## 7. Zdroje

- blog.google/products-and-platforms/products/search/ai-mode-chrome/ — „A new way to explore
  the web with AI Mode in Chrome", 16. 4. 2026, Robby Stein a Mike Torres, čteno 4. 8. 2026
- vlastní články: `ai-prohlizece-atlas-comet`, `google-ai-mode`, `ai-mode-vs-ai-overviews`,
  `zero-click-ai`, `core-web-vitals-pro-ai`
