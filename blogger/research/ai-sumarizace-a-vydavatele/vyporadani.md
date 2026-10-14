# Vypořádání auditů — `ai-sumarizace-a-vydavatele` (14. 10. 2026)

Pravidlo Z18. Každá oprava dohledaná v celém souboru včetně frontmatteru (Z17) — grep na
`náleží|uvidí|pod názvem|něco jiného|současné betě|o co odhlášením|30 %|session`.

## Před auditem — vlastní kontrola konceptu

- **Graf na partnerské stránce** jsem si prohlédl (obrázek ze 14. 4. 2026), než jsem o něm cokoli napsal.
  Koncept tvrdil, že stránka neuvádí období a že závěr stojí „bez dat grafu“ — graf přitom roky má, jen
  nemá hodnoty na ose. Přepsáno podle toho, co v grafu je: popisky +33 % a +85 % stojí u šipek mezi čarou
  kliků a čarou „Bez AI“, takže +85 % je v grafu rozdíl proti čáře bez AI, kdežto text stránky ho podává
  jako meziroční růst. To je silnější a doložený nález než původní formulace.
- „Seznam smluvně užívá obsah“ → „vyhradil si právo užívat“ (podmínky dávají oprávnění, ne doklad užití).
- Řádek tabulky „neplatí … zákaz strojového textu“ zněl jako povolení psát strojový text → „AI může užít
  i starší nebo kratší obsah, než jaký Newsfeed přijímá“.
- „User-agenty AI a MachineLearning nejsou Seznamova vlastní jména“ (domněnka) → „definuje je standard SPIR“.
- SeznamBot: „zákaz pro něj neřeší AI odpovědi“ mohlo vyznít, že zákaz nemá na AI žádný vliv → „pro AI
  odpovědi má Seznam samostatné user-agenty a nosnippet“ (checklist i chyba 05).
- Jazyková kontrola: 4× „session“ → „relace“ (slovník ⛔); popis 161 → 153 znaků.

## Kolo 1 — osa faktů (gpt-5.5, `audit1-result.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 2× BLOCKER, 5× WARNING, 1× TIP. Všechno přijato.

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| `answer` zjednodušuje provizi na 30 % bez podmínek | BLOCKER | `answer`: „Partnerům…, kteří přijali podmínky platné od 1. 5. 2026, vzniká při užití jejich obsahu nárok na provizi: 30 %, v Modelu vyšší provize 50 %…“ (55 slov); totéž v úvodní tučné větě a ve FAQ 1 („vzniká nárok“ místo „náleží“) |
| Checklist: „o co odhlášením přijdete“ u všech tokenů | BLOCKER | Rozlišeno: po Seznam-Extended podle partnerské nápovědy Seznam z AI ploch návštěvy nepřivede; u AI a MachineLearning je doložené vyřazení webu jako zdroje AI odpovědí |
| „v nápovědě Vyhledávání už pod názvem Seznam AI“ | WARNING | „Partnerská nápověda jmenuje … Seznam Asistent …; nápověda Vyhledávání u souhrnů uvádí, že přihlášení v nich mohou pokračovat v Seznam AI.“ |
| „každé říká něco jiného“ zní jako rozpor | WARNING | „každé v jiném rozsahu“ — skutečný rozdíl výkladu zůstává jen u MachineLearning (Insight) |
| Chybí pořadí MachineLearning před AI (SPIR) | WARNING | Věta pod tabulkou tokenů: konkrétní user-agent má přednost před oběma, MachineLearning před AI |
| Řádek měření „Seznam-Extended \| 1“ zavádí | WARNING | „Seznam-Extended (ve skupině s dalšími roboty)“ |
| „v současné betě“ | WARNING | „ve stavu k 14. 10. 2026“ |
| „reklama, kterou čtenář uvidí“ evokuje viditelnost reklamy | TIP | „reklama Seznamu zobrazená na webu“ v `answer`, úvodu a checklistu |

### Nezapracováno + důvod

Nic.

## Kolo 2 — osa jazyka a struktury (gpt-5.5, `audit2-result.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ, **bez faktického blockeru** — 3× WARNING, 3× TIP. Vypořádání kola 1
auditor potvrdil (žádný z opravovaných výrazů v textu nezůstal). Všechno přijato.

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| FAQ začínají holým „Ano.“ / „Ne,“ | WARNING | FAQ 5, 6 a 7 začínají celou větou s předmětem otázky („Smluvní podmínky Newsfeedu pro weby mimo program neplatí…“, „Partner programu Newsfeed musí…“, „Čísla Seznamu o růstu návštěvnosti nejsou nezávisle ověřená…“) |
| „přihlášení v nich mohou pokračovat“ — nejasné | WARNING | „Podle nápovědy Vyhledávání mohou přihlášení uživatelé ze souhrnu pokračovat do Seznam AI.“ |
| Jedno H2 nese odhlášení i měření | WARNING | Rozděleno: „Odhlášení ze Seznam AI — tři user-agenty a dva výklady“ a „Kolik českých médií má zákaz pro AI odpovědi Seznamu — 12 z 33“; řádek zdrojů přesunut k sekci o odhlášení. Článek má 8 H2: šest věcných, chyby a závěr |
| „AI sumarizace“ v nadpisech zní jako kalk | TIP | Nadpisy chyb a závěru: „souhrny Seznam AI“; termín Seznamu zůstává v `answer`, slugu a klíčových slovech |
| Hovorové a anglické výrazy | TIP | „těmhle“ → „těmto“, „homepage“ → „domovské stránce Seznamu“, „beta Seznam AI“ → „betaverze Seznam AI“, „web … nepoužijí“ → „Seznam pak web nepoužije“ (2×) |
| Dlouhé buňky první tabulky | TIP | Buňky zkrácené, podoba odkazu a věta o § 87b přesunuté pod tabulku |

## C5b — doověření zásadních nálezů (gpt-5.5)

- **1. kolo (`c5b-result.md`):** nález 2 (důsledky odhlášení) **OBSTOJÍ**; nález 1 (provize v `answer`)
  **NEOBSTOJÍ** — v `answer`, úvodu a FAQ chyběla výslovná podmínka zobrazeného odkazu, „při užití obsahu vzniká
  nárok“ znělo jako nárok za samotné užití.
- **Oprava:** všude „vzniká nárok na provizi, když Seznam AI jejich obsah užije a zobrazí na něj odkaz“
  (`answer` 59 slov, úvod, FAQ 1, řádek tabulky „Za užití s odkazem provize 30 %…“).
- **2. kolo (`c5b2-result.md`, jediné povolené navíc): OBSTOJÍ.** Auditor připomněl zjednodušení „a/nebo při
  Článku na Seznamu“ — doplněna věta pod tabulku, že u Článku na Seznamu se provize počítá i z reklamy u článku.
- Nový zásadní nález po C5 žádný.

## Jazykový průchod (C6)

| Průchod | Výsledek |
|---|---|
| Mechanický checker (slovník v73) | 4× ⛔ „session“ v prvním konceptu → „relace“; od té doby **0** ve všech verzích |
| Kontrola komponent (Z13) | **0 nálezů**, 11 použití komponent |
| LLM průchod (gpt-5.4, celý slovník) | **5 nálezů, všech 5 přijato** |

Opraveno (každé dohledáno v celém souboru): „nese zdroj“ → „uvádí zdroj“ · „polovina obrazu“ → „část obrazu“ ·
„zákaz `Disallow: /`“ → „pravidlo `Disallow: /`“ (2×, text i FAQ 3) · „Seznam je z AI ploch nepřivede“ →
„přestane přivádět“ · „ukážou jen vaše data“ → „ukážou až vaše data“. **Nová pravidla do slovníku žádná** —
nálezy závisí na kontextu věty.
