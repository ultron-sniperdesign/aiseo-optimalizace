# Vypořádání auditu — refresh ai-navstevnost-konverze (2026-10-03)

Z17 grep po kole 1: `dorovná|zachytí, co výchozí|\bdnes\b|Relace dostane médium` = 0.

## Vlastní opravy před 1. kolem

| Místo | Bylo | Je | Proč |
|---|---|---|---|
| Checklist „Stejné připsání“ | „Kanál se nemění podle toho, který report otevřete“ | relační rozměry = poslední nepřímý klik, rozměry klíčových událostí = model zvolený ve službě (výchozí založený na datech) | GA4 *Scopes of traffic-source dimensions* (11080067): „For event-scoped dimensions, Analytics uses the attribution model that you select… by default… data-driven“ |
| Stepper „Založte skupinu jako kopii“ | „převezme všechny kanály včetně AI Assistant“ | „převezme její kanály a jejich pořadí“ | že kopie obsahuje i AI Assistant, nápověda výslovně neuvádí |
| Tabulka kanálů | anglické názvy kanálů | české názvy, anglické v závorce | checker: `Organic Search` → organické vyhledávání |

## Kolo 1 (osa faktů) — zapracováno

| # | Nález | Rozhodnutí | Co se změnilo (Z17) |
|---|---|---|---|
| B1 | „Vlastní skupina zachytí, co výchozí kanál mine“ — silnější než podklad | **Přijato** | H2: „zachytí zdroje AI mimo kanál“; nový odstavec: zachytí jen relace se zdrojem AI v datech, návštěvy bez referreru i parametrů neodhalí; závěr přepsán stejně. |
| B3 | Nepřiřazeno popsáno příliš obecně | **Přijato** | Tabulka: „relace nesplní pravidla žádného kanálu — u nás typicky zdroj AI z parametru bez média“ + konkrétní zdroje. |
| B4 | FAQ „návštěvy z ChatGPT řadí GA4 do AI Assistant“ příliš široce | **Přijato** | „Rozpoznané návštěvy…“ + doplněno, že i po nasazení pár relací skončilo mimo kanál (u nás 8 ze 739 relací chatgpt.com). |
| W1 | `utm_source` — chybí podmínka doručení na měřenou stránku | **Přijato** | „…pokud parametr dorazí až na měřenou stránku a nezmizí cestou při přesměrování“. |
| W2 | FAQ míchá dokumentaci a vlastní data | **Přijato** | „Podle nápovědy dostane relace…“ × „Na našem e-shopu se to v datech objevilo až…“. |
| W3 | 13 % u Kaiser & Schulze není v odkazované tiskové zprávě | **Přijato** | Číslo a kontrolní výpočty teď odkazují na samotný článek (DOI 10.1287/mksc.2025.0489); citováno z článku v runu `za-jak-dlouho-se-projevi-ai-seo` (29. 8. 2026), INFORMS 3. 10. vrací robotům 403. Tisková zpráva zůstává zdrojem pro zbytek odrážky. |
| T1 | „dnes“ | **Přijato** | „od jara 2026“. Grep `\bdnes\b` = 0. |

## Kolo 1 — nezapracováno + důvod

| # | Nález | Proč ne |
|---|---|---|
| B2 | Chybí podmínka „kampaň (ai-assistant)“ | **Kampaň není podmínka, ale hodnota, kterou GA4 přiřadí.** GA4 *Default channel group* (9756891): „The medium exactly matches “ai-assistant”. The medium is set to “ai-assistant” and the campaign is set to “(ai-assistant)” if the referrer matches a list of AI Assistants.“ Podmínkou je médium (nebo shoda referreru); kampaň je důsledek. Text přesto doplněn — tabulka i FAQ teď uvádějí, že GA4 přiřadí médium **a kampaň** (ai-assistant). |

## Jazykový průchod

- **Mechanický:** 1 nález v konceptu (`Organic Search` v tabulce) → opraveno; po kole 1: 0.

## Kolo 2 (osa jazyka a struktury)

| # | Nález | Rozhodnutí | Co se změnilo (Z17) |
|---|---|---|---|
| B1 | Zbytek nálezu B1 z kola 1 v úvodu („jak zachytit, co výchozí kanál mine“) a podobně v závěru | **Přijato — moje chyba v Z17** | Grep po kole 1 hledal tvar „zachytí, co výchozí“ a infinitiv „zachytit, co výchozí“ v úvodu minul. Úvod: „jak zachytit relace, u kterých v datech zůstal zdroj AI mimo kanál AI Assistant“; závěr: „doplní relace, u kterých v datech zůstal zdroj AI, ale neskončily v kanálu AI Assistant“. Grep podle kmene `kanál mine|co výchozí` = 0. |
| W1 | První odstavec zabírá redakční historie | **Přijato** | První odstavec je teď přímá odpověď (kanál AI Assistant + co v něm chybí + vlastní skupina + srovnání podle vstupní stránky); poznámka o refreshi přesunuta do druhého odstavce. |
| W2 | Vypořádání uvádí „8 ze 739“, text ne | **Přijato** | Doplněno do FAQ: „mezi 15. 6. a 30. 9. 2026 to bylo 8 ze 739 relací z chatgpt.com“ (731 ai-assistant, 5 referral, 3 (none)). |
| T1 | „Referral“ ve Stepperu bez češtiny | **Přijato** | „odkazující weby (Referral)“. |
| T2 | CTA tematicky skáče | **Přijato** | Spojovací věta „GA4 ukáže, co už na web přišlo. Druhou část — …“. |
| T3 | Překlep „online-ohopping“ v adrese Frankfurt School? | **Nezapracováno** | Adresa je skutečná (překlep je ve slugu Frankfurt School), 3. 10. 2026 vrací 200. |

**C5b — cílené doověření nálezu B1 auditorem kola 2 (`_c5b-result.md`):** „Ano, nález je vyřešený na všech
kontrolovaných místech“ — úvod, H2, odstavec, Stepper, FAQ, závěr.

## Jazykový průchod (C6)

- **Mechanický:** 1 nález v konceptu (`Organic Search`) → opraveno; po kole 1, kole 2 i po jazykových opravách 0.
- **LLM (gpt-5.4 + celý slovník, `_c6-refresh-result.md`):** 9 nálezů, 9 opraveno — „obraz je čistší“ →
  „data jsou čistší“ · přeskládaná věta o relačních rozměrech · „data ukazují oběma směry“ → „výsledky studií
  vycházejí různě“ · chybějící sloveso („vyšly nad…“) · „vzorek“ → „složení vzorku“ · „organika v sobě nese“
  → „v organickém vyhledávání jsou započítané“ · „podat v reportu“ → „uvést“ · „ne celý obraz“ → „ne úplný
  přehled“ (Z17: i v první větě článku) · „druhou polovinu“ → „druhou část“. Grep `\bobraz\b|polovin|podat v|
  oběma směry|v sobě nese` = 0.
- **Nová pravidla do slovníku:** žádná — významové vazby konkrétních vět.

## Obrázek článku (D2)

Titulek se nemění, přesto **přegenerováno**: květnový obrázek obsahoval modelem vymyšlená čísla
(„ORGANIC 2,35 % / AI 2,68 %“, „AI návštěvy 1 248 +32 %“, „Konverze (AI) 33 +47 %“) a vymyšlenou
odpověď AI — po refreshi by odporovaly skutečným datům v textu (IMAGE_GUIDE, dodatek e: obrázek je
součást tvrzení článku). Nový: „AI NÁVŠTĚVNOST / Jak ji měřit v GA4“, ve scéně bez čísel a čitelných slov,
ořez 1200×669 zkontrolován, PNG smazáno.
