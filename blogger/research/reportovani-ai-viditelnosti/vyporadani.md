# Vypořádání auditu — reportovani-ai-viditelnosti

Pravidla Z17 a Z18. Grep po opravách kola 1: `jediný způsob|ustálí|liší víc|\bdnes\b|kdokoli ho` = 0;
`konverz` zbývá jen v tabulce s podmínkou „pokud je web měří“.

## Vlastní oprava před 1. kolem (zachyceno při kontrole proti zdrojům)

| Místo | Bylo | Je | Proč |
|---|---|---|---|
| Úvodní důvody, sekce GA4, chyba 04, tabulka | „návštěva bez zdroje skončí v GA4 v přímé návštěvnosti“ | „relaci bez zdroje připíše GA4 poslednímu nepřímému zdroji téhož uživatele; jen když žádný nezná, skončí v Direct“ | GA4 *Scopes of traffic-source dimensions*: relační a uživatelské rozměry používají „paid and organic channels last click“; „Sessions initiated by direct entrance are attributed to the UTM values for that user“ (support.google.com/analytics/answer/11080067, 3. 10. 2026). Původní věta platila jen pro nové uživatele. |

## Kolo 1 (osa faktů) — zapracováno

| # | Nález | Rozhodnutí | Co se změnilo (Z17: kde všude) |
|---|---|---|---|
| B2 | Dostupnost reportu Search Console příliš silně, chybí podmínky | **Přijato** | Sekce Search Console: „zpřístupnil webům po celém světě“ + v části o chybějícím reportu postupné zpřístupňování, málo zobrazení, vyloučený web; Search Labs report nezahrnuje. Jinde se dostupnost netvrdí (grep `všechny weby` = 0). |
| B3 | FAQ o klikách bez „typu vyhledávání Web“ | **Přijato** | FAQ „Dá se oddělit režim AI…“: „v reportu Výkon v typu vyhledávání Web… filtr nápověda neuvádí“. Tělo to už mělo. Chyba 06 zmiňuje report Výkon obecně — typ Web je v těle. |
| W2 | Úvod: „liší se víc, než kolik změní běžný zásah“ | **Přijato** | „kolísají natolik, že jeden běh po zásahu nestačí jako důkaz“. Vlastní data jsou jeden případ, ne pravidlo. |
| W3 | „jediný způsob“ | **Přijato, se změnou** | Přepsáno na doložitelný rozdíl: oficiální reporty ukazují zobrazení a citace, ne obsah odpovědí; ten uvidíte z vlastní sady dotazů — ručně, nebo nástrojem. |
| W4 | SparkToro „se ustálí“ silněji než podklad | **Přijato** | „pořadí je velmi nestálé, použitelnější je podíl odpovědí se zmínkou sledovaný přes mnoho běhů“; otevřené otázky ponechány. |
| W5 | Konverze jako fakt bez podmínky | **Přijato** | Tabulka: „(a konverze, pokud je web měří)“. |
| W6 | „kdokoli najde znovu“ | **Přijato** | „kdo má k reportu přístup, ho za stejných podmínek najde znovu — u předběžných dat počítejte se změnou“. |
| T1 | „dnes“ bez data | **Přijato** | Úvod: „podle dokumentace k 3. 10. 2026“; duplicitní datum ve větě o příkladech vypuštěno. |

## Kolo 1 — nezapracováno + důvod

| # | Nález | Proč ne |
|---|---|---|
| B1 | „GA4 návštěvě přiřadí medium ai-assistant“ z podkladu neplyne | **Plyne doslova.** GA4 *Default channel group* (9756891): „The medium is set to “ai-assistant” and the campaign is set to “(ai-assistant)” if the referrer matches a list of AI Assistants.“ *What's new* 13. 5. 2026 (9164320): „Medium: A new "ai-assistant" value is automatically assigned when the referrer matches a recognized AI Assistant“. Auditor měl v briefu jen zkrácené pravidlo. Text přesto zpřesněn: přidána druhá cesta do kanálu (medium „ai-assistant“ z parametru v adrese). |
| W1 | „Average Cited Pages za den“ nedoloženo | **Doloženo.** Microsoft, 10. 2. 2026: „Shows the average number of unique pages from your site that are displayed as sources in AI-generated answers per day over the selected time range.“ Beze změny. |

## Jazykový průchod

- **Mechanický (`jazyk-check.py`, v72):** 0 nálezů v konceptu i po kole 1 (2 506 slov).

## Kolo 2 (osa jazyka a struktury)

Verdikt **PUBLIKOVAT**; auditor ověřil všech 10 vypořádání z kola 1 („zapracováno správně“ /
„důvod obstojí“), žádný blocker ani varování.

| # | Nález | Rozhodnutí |
|---|---|---|
| T1 | H2 „Šest vět…“ nese v `<strong>` počet, ne pointu | **Přijato:** „Šest vět, které do reportu **nepatří**“. Kontrola formátu H2 prázdná. |
| T2 | CTA by mohlo být akčnější („Objednejte si…“) | **Nezapracováno:** web drží věcný, neprodejní tón (brand voice); CTA už vede na konkrétní produkt se správným názvem i cenou bez DPH. |

## Jazykový průchod (C6)

- **Mechanický:** 0 nálezů v konceptu, po kole 1, po kole 2 i po jazykových opravách.
- **LLM (gpt-5.4 + celý slovník, `_c6-result.md`):** 8 nálezů, 8 opraveno —
  „poskládat report“ → „sestavit“ (popis) · „Část návštěv nemá zdroj“ → „U části návštěv nejde určit
  zdroj“ · „AI Googlu“ → „AI funkce Googlu“ (2×) · „k 3. 10. 2026“ → „ke 3. 10. 2026“ · „stojí, nebo
  padá“ → frazém „se kterými report stojí a padá“ (návrh modelu „stojí nebo padá“ nepřevzat — ustálené
  spojení je „stát a padat“) · „patří mezi vzorky“ → „patří ke vzorkům“ · „uvidíte z odpovědí“ →
  „zjistíte“ · „má důvod“ → „není náhodné“. Grep všech výrazů po opravě = 0.
- **Nové pravidlo do slovníku: žádné.** Vokalizace „k / ke“ před číslovkou na 3 a 4 kolísá
  (ke třem i k třem jsou doložené tvary), regex by hlásil přípustnou variantu. V korpusu je
  „k 3…“ / „k 4…“ 17× v 11 článcích a „ke“ ani jednou — opraveno jen tady, plošně se nesahá.
