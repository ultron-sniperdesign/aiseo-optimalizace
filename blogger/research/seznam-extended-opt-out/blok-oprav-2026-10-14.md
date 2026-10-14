# Blok oprav — odhlášení ze Seznam AI (14. 10. 2026)

**Typ runu:** blok oprav (run 4 z kadence 2 + 1 + 1). **Vada:** tvrzení, že Seznam popisuje odhlášení z AI
**jen v partnerské nápovědě** a **jen přes `Seznam-Extended`**, a srpnové měření, které počítalo jen
`Seznam-Extended` („1 web z 33“). Nález z `ai-sumarizace-a-vydavatele` (14. 10. 2026), zapsaný ve frontě
jako vysoká priorita. Vypořádání audití: `vyporadani-blok-2026-10-14.md`.

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum |
|---|---|---|
| **Dokumentace** | Nápověda Vyhledávání, sekce SeznamBot, *Zákaz tvorby AI odpovědí z vašeho webu*: `Seznam-Extended`, `AI` nebo `MachineLearning` s `Disallow: /` („stačí nastavit jednu“), nebo meta `seznambot` `nosnippet`, která vypne i úryvky. Program ani důsledek pro návštěvnost nezmiňuje | o-seznam.cz/napoveda/vyhledavani/seznambot/zakaz-tvorby-ai-odpovedi-z-vaseho-webu/, 14. 10. 2026 (200) |
| | Wayback Machine: **jediný a nejstarší snímek 7. 6. 2026** (CDX `20260607073939`), obsah totožný | web.archive.org, CDX API, 14. 10. 2026 |
| | Nápověda Vyhledávání, *Robots.txt*: v textu jen SeznamBot a psbot; stránka o zákazu AI odpovědí je jen v menu sekce | o-seznam.cz/napoveda/vyhledavani/seznambot/robots-txt/, 14. 10. 2026 |
| | Anglická *Crawling control* (tu četl článek 9. 8. jako „dokumentaci procházení“): jen SeznamBot, AI nezmiňuje; anglická nápověda stránku o AI odpovědích nemá ani v menu | o-seznam.cz/napoveda/vyhledavani/en/crawling-control/, 14. 10. 2026 |
| | Partnerská nápověda *Seznam AI*: jen `Seznam-Extended` + „nebudeme uživatele přivádět ani s jeho obsahem v rámci Seznam AI pracovat“ | partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/, 14. 10. 2026 |
| | Nápověda Seznam AI, FAQ pro autory: „například“ `Seznam-Extended: Disallow`, `AI: Disallow` nebo `nosnippet` | o-seznam.cz/napoveda/seznam-ai/nejcastejsi-dotazy/, 14. 10. 2026 |
| | Jednotný standard SPIR (19. 3. 2026, s AOV, ČUV, SLPV): `MachineLearning` = trénink obecných modelů + datasety; `AI` = navíc real-time odpovědi; specifické user-agenty mají přednost, `MachineLearning` před `AI` | unievydavatelu.cz/file/162/pravidla-opt-out-2026.pdf, staženo a přečteno 14. 10. 2026 |
| **Rozhraní (UI)** | prázdné — do Seznam AI ani Seznam Partner jsem nevstupoval | — |
| **Měření** | Přepočet 33 médií (data 9. 8. a 14. 10., viz níž) a 47 e-shopů na Shoptetu (8. 8.) | `seznam_extended_media.json`, `../ai-sumarizace-a-vydavatele/mereni-robots-2026-10-14.json`, `../shoptet-robots-txt-ai-roboti/out-bots.json` |
| **Nelze ověřit** | chování Seznamu (respektuje pravidla?); důsledek pro návštěvnost u AI a MachineLearning; vyhodnocení kombinace zákazu pro AI/ML s povolením pro Seznam-Extended; záměr vydavatelů | — |

## Přepočet měření (14. 10. 2026)

- **33 médií, 14. 10.**, `Disallow: /` u skupiny s user-agentem přesně jedním ze tří: jen MachineLearning 7,
  jen AI 3, AI i MachineLearning 1, Seznam-Extended 1 → **12 z 33**. `Allow` u žádného ze tří nikdo;
  jediná skupina Seznam-Extended má jen `Disallow: /`; žádná skupina bez úplného zákazu.
- **Tytéž weby 9. 8.** (uložený seznam user-agentů): stejné skupiny u stejných webů, 0 rozdílů proti říjnu.
  Obsah pravidel u AI a MachineLearning v srpnu uložený není.
- **Srpnová tabulka v článku** (16 zahraničních, 17 bez zahraničních, 9 se šesti a víc, SeznamBot 2) sedí.
  Nově: ze 17 webů bez zahraničního AI robota mají **3 jen user-agent `AI`**; z 9 webů se šesti a víc roboty
  má **7 AI nebo MachineLearning a 1 Seznam-Extended**. Počty v tabulce `bytespider-ceska-media` se
  přepočtem potvrdily (Claude-Web 6 při porovnání bez ohledu na velikost písmen, jak robots.txt páruje).
- **Shoptet, 8. 8.:** 0 ze 47 e-shopů má user-agenta se „seznam“, 0 `AI`, 0 `MachineLearning`.

## Co se opravilo (7 článků)

| Článek | Oprava |
|---|---|
| `seznam-extended-opt-out` | **Jádro článku stálo na vadě.** Titulek „…V robots.txt ho má 1 web z 33“ → „Opt-out z AI u Seznamu: v robots.txt ho má 12 webů z 33“ (slug zůstává), description, `answer`, 6 FAQ, rámeček „Oprava 14. 10. 2026“ místo „Málem jsem publikoval opak“, výklad tří stránek nápovědy a standardu SPIR, nové H2 „Kde to Seznam popisuje — každá stránka jinak“ místo „Je to napsané tam, kam webmaster nechodí“, měření 12 z 33, rozhodování (MachineLearning, weby mimo program), zápis, limity, chyba 01 a 03, shrnutí. Obrázek přegenerován (nesl „jeden web z třiatřiceti“). Část „Co o programu tvrdí sám Seznam“ beze změny kromě první věty. |
| `co-vypne-ktery-opt-out` | odstavec o nápovědě Vyhledávání, rámeček (dřív „obecná stránka… Seznam-Extended vůbec nezmiňuje“), checklist „Nechci být v Seznam AI“, chyba 03 („rozdělit to nejde“ → „dokumentace neuvádí“), FAQ „partnerská nápověda“, datum v limitech |
| `ai-crawler-robots-txt` | řádek tabulky (dřív „uvedený v partnerské nápovědě, ne v dokumentaci procházení“), odkaz „Řeším český opt-out“ |
| `seo-pro-ai` | odrážka o české vrstvě (dřív jen partnerská nápověda a Seznam-Extended) |
| `seznam-asistent-sellma` | FAQ „Jak web ze Seznam AI odhlásím?“ (dřív bez MachineLearning; opraven i pád „z Seznam“ v téže otázce) a odstavec pod zápisem |
| `bytespider-ceska-media` | „17 webů… ze sledovaných zahraničních AI robotů“ + tři z nich mají `AI`; závěrečný odkaz |
| `ai-sumarizace-a-vydavatele` | dvě zpřesnění z auditu (vydaný dnes): „na dvou místech“ → „na více místech“, „Stejná pravidla měly už v srpnu“ → „Skupiny pro tytéž user-agenty…“ |

## Rozhodnutí o titulku

`seznam-extended-opt-out` je v **kontrolní skupině měření titulků** (`_source/_keyword-research/blog-gsc-20260907/`,
přeměření 2. 11. 2026). Titulek tvrdil nepravdivé číslo, takže se změnil — nepravdivé číslo ve výsledcích hledání
by tam stálo ještě tři týdny. Článek měl v baseline 36 zobrazení a 1 klik z 2 848 zobrazení a 39 kliků kontroly
(1,3 % zobrazení). **Adminovi předáno přes board: při přeměření ho z kontroly vyřadit.** `seznam-asistent-sellma`,
`seo-pro-ai` a `ai-crawler-robots-txt` jsou v kontrole také, titulky zůstaly beze změny.

## Mimo blog (admin, jen upozornění na boardu)

`sections/aeo.mdx` ř. 34 a 177 a `sections/seo.mdx` ř. 32: odhlášení „značkou Seznam-Extended nebo nosnippet“ —
chybí `AI` a `MachineLearning`. `zacnete-tady.ts`, pilíř a `audit.ts` předány už v záznamu refreshe 14. 10.
