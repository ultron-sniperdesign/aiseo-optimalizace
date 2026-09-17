# Vypořádání auditů — Sezónní obsah a AI

**Datum:** 17. 9. 2026  
**Výsledek:** všech 6 faktických a 21 jazykových nálezů zapracováno; žádný nález nebyl odmítnut. Zásadní opravy F1 a F2 byly v povinném kole C5b faktickým auditorem uzavřeny; u F2 byla přijata ještě drobná korekce formulace.

## Faktický audit

| ID | Závažnost | Stav | Vypořádání |
|---|---|---|---|
| F1 | zásadní — BLOCKER | **Opraveno** | Do hlavního textu i FAQ doplněna podmínka zahrnutí webu v nastavení Search generative AI v Search Console, výchozí zahrnutí, možnost vypnutí a datum globálního nasazení 31. 8. 2026. Odkaz vede na aktuální nápovědu Googlu. |
| F2 | zásadní — WARNING | **Opraveno** | Doověření C5b uzavřelo původní zásadní nález. Fáze 1 C5 následně zpřesnila rozsah: užitečný mimosezónní obsah vracející se akce je zpravidla indexovatelný, ale zachování URL samo nevylučuje `noindex` u prázdné kategorie. Konečné znění upozorňuje na čas potřebný k opětovnému zařazení; 404/410 je jen pro zrušenou kategorii bez náhrady. Stejné rozlišení je v FAQ. |
| F3 | drobný — WARNING | **Opraveno** | FAQ odděluje pravidlo pro viditelné datum a `dateModified` od příkladů významných změn, které Google uvádí pro `lastmod`. |
| F4 | drobný — WARNING | **Opraveno** | Věta nyní přesně říká, že Google varuje před samostatnými variantami vytvořenými jen kvůli ovlivnění pořadí nebo generativních odpovědí. |
| F5 | drobný — WARNING | **Opraveno** | Nepodložená atribuce k červenci 2026 odstraněna; text mluví o aktuálním průvodci bez tvrzení, kdy konkrétní věta přibyla. |
| F6 | drobný — TIP | **Opraveno** | Hledanost je všude označena jako modelovaný odhad. Doplněn odkaz na metodiku Marketing Mineru a výslovné rozlišení od přesně pozorovaného počtu dotazů. |

## Jazykový audit

| ID | Stav | Vypořádání |
|---|---|---|
| J1 | **Opraveno** | Čtenářský text sjednocen na „sezónní / sezóna“; slug zůstává technicky bez diakritiky. |
| J2 | **Opraveno** | SEO titulek změněn na „proč zachovat jednu URL pro každý rok“. |
| J3 | **Opraveno** | Úvod rozlišuje odhad hledanosti od skutečných hledání a používá přirozenou vazbu. |
| J4 | **Opraveno** | Personifikace nahrazena objevením a zařazením nové adresy. |
| J5 | **Opraveno** | „Smysluplná adresa“ nahrazena popisnou URL bez roku. |
| J6 | **Opraveno** | Neurčitá „historie URL“ nahrazena zachováním interních a externích odkazů; stáří URL není vydáváno za výhodu. |
| J7 | **Opraveno** | Neurčitý „záměr“ nahrazen účelem stránky, potřebou zákazníka nebo očekávanou informací. |
| J8 | **Opraveno** | Obě buňky tabulky přepsány na přirozené a konkrétní formulace. |
| J9 | **Opraveno** | Atribuce Googlu zúžena podle zdroje a formulace „nevyrábět“ odstraněna. |
| J10 | **Opraveno** | Opraven chybný štítek komponenty na „Stabilní URL neznamená povinnost držet prázdnou stránku“. |
| J11 | **Opraveno** | Při prvním použití vysvětleny `noindex`, `dateModified`, `lastmod` a `canonical`; samostatný „feed“ nahrazen produktovými daty pro Merchant Center. |
| J12 | **Opraveno** | Abstraktní „užitečný stav“ a „falešná aktuálnost“ nahrazeny konkrétními kroky. |
| J13 | **Opraveno** | Věta o Bingu má jasný podmět a přímý odkaz na primární zdroj. |
| J14 | **Opraveno** | Karta chyby rozlišuje kroky provozovatele a vyhledávače. |
| J15 | **Opraveno** | Nedoložené „učení vyhledávače“ nahrazeno ztrátou informační hodnoty data. |
| J16 | **Opraveno** | Neurčitý „model“ nahrazen přesným tvrzením o Googlu bez personifikace. |
| J17 | **Opraveno** | Tři nepřirozené vazby ve FAQ přeformulovány. |
| J18 | **Opraveno** | Tři položky checklistu zpřesněny a technické výrazy vysvětleny. |
| J19 | **Opraveno** | Nadpis i text říkají, odkud má web na stránku odkazovat; „prolinkovat“ odstraněno. |
| J20 | **Opraveno** | Závěr nyní konkrétně popisuje průběžně aktualizovanou a dohledatelnou adresu. |
| J21 | **Opraveno** | CTA používá kanonické oblasti auditu: technické nastavení, obsah a důvěryhodnost; zachovává cenu 3 600 Kč bez DPH. |

## Mechanická kontrola a slovník

Po C4 měl článek 1 828 slov; po fázi 1 C5 má 1 853 slov. `jazyk-check.py` proti 275 pravidlům hlásí **0 nálezů**. Žádný z auditních nálezů není bezpečně rozpoznatelný bez porozumění významu věty; do `JAZYK_SLOVNIK.md` proto nepřibylo široké pravidlo, které by označovalo i správná použití.

## Nové nálezy závěrečného auditu — fáze 1

| ID | Stav | Vypořádání |
|---|---|---|
| C5-01 | **Opraveno** | Zachování opakované URL je odděleno od celoroční indexace. Užitečná mimosezónní stránka zůstává zpravidla indexovatelná; prázdná kategorie může použít `noindex`, přičemž text upozorňuje na čas potřebný k opětovnému zařazení. 404/410 je vyhrazeno pro zrušenou kategorii bez náhrady. Stejné rozlišení je v FAQ. |
| C5-02 | **Opraveno** | Interní odkaz na starší článek s nedoloženými intervaly a zobecněním čerstvosti odstraněn. Starší článek zůstává beze změny pro samostatný refresh nástroj. |
| C5-03 | **Opraveno** | K instrukcím pro `sale_price_effective_date`, data publikace/úpravy a `lastmod` doplněny přímé odkazy na primární dokumentaci Googlu. |

Mobilní vizuální kontrola navíc odhalila přetečení druhé zdrojové karty kvůli dlouhému nezalamovanému popisku. Popisek odkazu byl zkrácen na „Průvodce AI funkcemi Googlu“; po opakované kontrole nepřetéká žádný prvek článku.
