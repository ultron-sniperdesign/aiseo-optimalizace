# Vypořádání — blok oprav „odhlášení ze Seznam AI“ (14. 10. 2026)

Pravidlo Z18. Podklad bloku: `blok-oprav-2026-10-14.md` (tamtéž). Každá oprava dohledaná v celém souboru
včetně frontmatteru (Z17) — grep na `dvou nápověd|dvě nápověd|na dvou místech|žádné rozhraní|stejná pravidla|ze sledovaných AI robotů|v obou nápovědách`
ve všech sedmi dotčených článcích.

## Kolo 1 — osa faktů (gpt-5.5, `audit1-blok-2026-10-14.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 1× BLOCKER, 3× WARNING, 1× TIP. Auditor potvrdil čísla (12, 1, 16 z 33;
Shoptet 0 ze 47), výklad SPIR a to, že text nepřisuzuje nápovědě Vyhledávání důsledek pro návštěvnost
ani partnerské nápovědě tokeny AI a MachineLearning.

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| „Žádné rozhraní, žádná žádost, žádný formulář“ — tvrzení o neexistenci bez ověření rozhraní (věta převzatá z verze 9. 8.) | BLOCKER | „Nápovědy k odhlášení neuvádějí žádné rozhraní, žádost ani formulář — jen samostatnou skupinu… nebo meta značku.“ |
| „ve dvou nápovědách / na dvou místech“ — třetí místo je FAQ nápovědy Seznam AI (Seznam-Extended, AI, nosnippet „například“) | WARNING | `answer`, úvod a shrnutí: „Nejúplněji popisuje Seznam odhlášení… v nápovědě Vyhledávání“; FAQ 2 „Na více místech…“ i s FAQ Seznam AI; nový řádek v tabulce; H2 → „Kde to Seznam popisuje — každá stránka jinak“; „v obou nápovědách“ → „na všech třech místech nápovědy“. **Totéž v `ai-sumarizace-a-vydavatele`** (ř. 134 „na dvou místech“ → „na více místech a dvě z nich se liší rozsahem“) |
| Srpnový stav u AI / MachineLearning — v srpnu uložený jen seznam user-agentů, ne obsah pravidel | WARNING | věta pod tabulkou: obsah pravidel u AI a MachineLearning jsem v srpnu neukládal, `Disallow: /` počítám z říjnového odečtu. **Totéž v `ai-sumarizace-a-vydavatele`** (ř. 167 „Stejná pravidla měly tyhle weby už v srpnu“ → „Skupiny pro tytéž user-agenty…“) |
| `bytespider-ceska-media`: „ze sledovaných AI robotů“ bez „zahraničních“ | WARNING | „ze sledovaných zahraničních AI robotů“ |
| „Odhlášení přes Seznam-Extended není zadarmo“ — přivázat k partnerské nápovědě | TIP | „Podle partnerské nápovědy není odhlášení přes Seznam-Extended zadarmo. S ním mizí…“ |

### Nezapracováno + důvod

Nic — všechny nálezy přijaty.

## Kolo 2 — osa jazyka a struktury (gpt-5.5, `audit2-blok-2026-10-14.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ, **bez blockeru**. Všech pět oprav z kola 1 auditor potvrdil jako sedící
(i v `ai-sumarizace-a-vydavatele`). 2× WARNING, 4× TIP.

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| `answer` nezačíná definicí | WARNING | „Odhlášení z AI u Seznamu je pravidlo v robots.txt nebo meta značka, po kterých Seznam podle nápovědy Vyhledávání nepoužije web jako zdroj AI odpovědí…“ (59 slov) |
| „běžný crawler vyhledávání, ne AI opt-out“ | TIP | „běžný vyhledávací robot, ne odhlášení z AI“ |
| `co-vypne-ktery-opt-out`: „Dokumentace se nedá tipnout“ | TIP | „Kde dokumentace co popisuje, se podle konvence odhadnout nedá“ |
| `co-vypne-ktery-opt-out`: slovosled u chyby 03 | TIP | „Podle partnerské nápovědy jako jediný ze sledovaných vypne…; jak to rozdělit, dokumentace neuvádí.“ |
| výčet alternativ „…, AI a MachineLearning“ | TIP | „AI nebo MachineLearning“ ve FAQ `seznam-asistent-sellma` a v úvodu `seznam-extended-opt-out` |

### Nezapracováno + důvod

| Nález | Proč ne |
|---|---|
| Doplnit do `seznam-extended-opt-out` produktové CTA (WARNING) | Blok oprav podle A6 opravuje jen jednu vadu a článek jinak nevylepšuje; CTA chybělo už ve verzi z 9. 8. a s vadou nesouvisí. Navržené znění navíc mělo cenu bez „bez DPH“ a zmiňovalo „Free PDF“. Patří do případného refreshe článku. |

## C5b — doověření zásadních oprav (gpt-5.5)

- **1. kolo (`c5b-blok-2026-10-14.md`):** bod 1 (rozhraní) **OBSTOJÍ**; body 2 a 3 **NEOBSTOJÍ**. Bod 2 oprávněně:
  v nové krátké odpovědi „některé z pravidel“ mohlo zahrnovat i `nosnippet`, které měření nepokrývá → „zákaz pro
  některý ze tří user-agentů“. Zbytek obou bodů byl nedostatek briefu — chyběly v něm podklady ke stránce Robots.txt,
  k anglické dokumentaci a k výslovnému `Allow` (v briefu kola 1 byly). Doplněno a ověřeno z dat 14. 10.:
  `Allow` u Seznam-Extended, AI ani MachineLearning nemá nikdo, jediná skupina Seznam-Extended má jen `Disallow: /`.
- **2. kolo (`c5b2-blok-2026-10-14.md`, jediné povolené navíc): oba OBSTOJÍ.**

## Jazykový průchod (C6)

| Průchod | Výsledek |
|---|---|
| Mechanický checker (slovník v73) | **0 nálezů** ve všech sedmi článcích, po každém kole |
| Kontrola komponent (Z13) | **0 nálezů** ve všech sedmi článcích |
| LLM průchod (gpt-5.4, celý slovník, jen nový text) | **9 nálezů, 4 přijaty** |

Přijato: „po kterých Seznam… nepoužije“ → „na jejichž základě“ (`answer`, 60 slov) · checklist „se Seznam-Extended odpadá“
(četlo se jako zvratné „se“) → „odpadá při zákazu pro Seznam-Extended“ · `co-vypne-ktery-opt-out` „Kde dokumentace co
popisuje, se podle konvence odhadnout nedá“ → „Podle konvence se nedá odhadnout, kde dokumentace co popisuje“ ·
`bytespider-ceska-media` „Zbytek je rozdělený dost vyhraněně“ → „Rozdělení zbytku je dost vyhraněné“.

Nepřijato: tři nálezy mířily na věty z verze 9. 8., které blok nemění („téma, které patří oběma“, „zkuste ověřit“,
„Ať už těm číslům věříte“) · „internetový archiv Wayback Machine“ zůstává — vysvětluje čtenáři, co je Wayback Machine ·
„započítal“ zůstává — v měření je to přesné sloveso. **Nová pravidla do slovníku žádná.**
