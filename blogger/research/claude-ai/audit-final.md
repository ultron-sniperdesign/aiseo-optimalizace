# VERDIKT: PUBLIKOVAT

## Fáze 1 — nezávislý audit před otevřením předchozích auditů

### Nezávislé nálezy

**Žádný doložený nález.** Po přečtení pouze `auditor-system.md`, článku,
`research.md` a kanonického datového modulu `src/content/pages/audit.ts` jsem nenašel
věcnou, jazykovou, metadatovou, citační, CTA ani časovou vadu, pro kterou bych mohl
splnit požadovaný řetězec „citovaná pasáž → problém → důkaz → konkrétní oprava“.

### Co bylo nezávisle ověřeno

- Podmínky webového vyhledávání odpovídají aktuální nápovědě Anthropicu: dostupnost na
  podporovaných modelech, správcovské povolení u Team/Enterprise, uživatelský přepínač
  ve starším prostředí a automatické použití bez samostatného přepínače v novém.
- Oddělení webového vyhledávání a Research sedí: Research je pro placené plány,
  provádí navazující hledání a vyžaduje zapnuté webové vyhledávání.
- Role `ClaudeBot`, `Claude-User` a `Claude-SearchBot`, respektování `robots.txt`,
  účinek zákazu `Claude-SearchBot` i nutnost pravidel pro každou subdoménu odpovídají
  Privacy Center Anthropicu. Text správně neslibuje citaci po povolení robota.
- Výklad `noindex`, hesla a odstraněné stránky odpovídá aktuálnímu postupu Anthropicu
  pro vyřazení obsahu z výstupů založených na webovém vyhledávání.
- Tvrzení o češtině rozlišuje schopnost konverzace od jazyka rozhraní. Aktuální seznam
  uvádí Česko mezi podporovanými zeměmi, dovoluje konverzaci v libovolném jazyce a
  češtinu mezi jazyky rozhraní neuvádí.
- Bezplatný plán existuje a má omezené využití; článek rozumně neuvádí proměnlivé ceny
  placených plánů.
- `seoTitle` má 44 znaků, začíná klíčovým slovem „Claude AI“; meta description má
  134 znaků. Krátká odpověď má 52 slov, začíná definicí a funguje samostatně.
  Slug, nadpisová struktura, FAQ i první přibližně stovka slov odpovídají záměru článku.
- CTA používá kanonický název **Audit AI viditelnosti**, odkaz `/audit/`, cenu
  **3 600 Kč bez DPH** a termín do pěti pracovních dní od úhrady, tedy údaje z
  `src/content/pages/audit.ts`.
- Primární odkazy v článku vedou na aktuální stránky Anthropicu a pokrývají tvrzení,
  u nichž jsou uvedeny. Datum publikace a ověření 6. 10. 2026 odpovídá zadanému datu.

Pro protidůkaz jsem kontroloval zejména nejnovější znění nápovědy k webovému
vyhledávání, Privacy Center k robotům, postup odstranění obsahu, Research, podporované
jazyky a země a aktuální přehled plánů. Nenalezl jsem novější primární podklad, který
by některé z uvedených tvrzení vyvracel.

## Fáze 2 — kontrola předchozích auditů a vypořádání

Předchozí podklady jsem otevřel až po pevném zapsání fáze 1. `audit-fakta.md`
obsahuje tři nálezy, `audit-jazyk.md` 21 nálezů a `vyporadani.md` je všechny označuje
jako opravené. Žádný nález nebyl odmítnut, takže zde není odmítnutí, jehož odůvodnění
by bylo třeba hájit.

### Audit faktů

| Bod | Kontrola skutečného stavu | Výsledek |
|---|---|---|
| F1 — `Claude-SearchBot` jako nutná podmínka | Krátká odpověď, FAQ, tabulka, upozornění i Stepper nyní důsledně používají „může snížit“ / „může zabránit“ a oddělují to od silnějšího účinku `noindex`. Nadpis slibuje kontrolu podmínek, ne splnění tajného receptu. Odpovídá to [Privacy Center Anthropicu](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) a [nápovědě k odstranění obsahu](https://support.claude.com/en/articles/10684638-report-block-and-remove-content-from-claude). | **Vypořádáno správně.** |
| F2 — „všechny plány“ bez dalších podmínek | Odstavec i tabulka uvádějí podporované modely, dostupnou a zapnutou funkci, povolení správcem u Team/Enterprise i rozdíl mezi starším a novým rozhraním. To odpovídá aktuální [nápovědě k webovému vyhledávání](https://support.claude.com/en/articles/10684626-enable-and-use-web-search). | **Vypořádáno správně.** |
| F3 — dvě různé metriky Marketing Mineru | Aktuální odstavec odděluje průměrnou měsíční hledanost za 12 měsíců od meziroční změny posledního měsíce, uvádí datum měření a výslovně odmítá výklad jako počet uživatelů či podíl na trhu. Interní odkaz na starou hodnotu v plánu zmizel. | **Vypořádáno správně.** |

Stejný auditor už F1 a F2 po opravách cíleně doověřil v dodatku `audit-fakta.md`;
moje nezávislá kontrola dospěla ke stejnému výsledku.

### Jazykový audit

Všech 21 zaznamenaných jazykových nálezů J1–J21 jsem porovnal s aktuálním článkem.
Každá navržená změna je přítomná ve významově správném kontextu: description má jasný
podmět, krátká odpověď už nepřisuzuje činnost webu, metriky nejsou slepené, režimy
vyhledávání jsou popsány přirozeně, roboti a `noindex` mají srozumitelné vazby,
měření jmenuje konkrétní zaznamenávané hodnoty, část o češtině není tautologická a
závěr i CTA jsou konkrétní.

Kontrola všech původních problematických řetězců potvrdila, že v aktuálním článku
žádný nezůstal. Mechanický jazykový průchod:

```text
claude-ai-vyhledavani.mdx · 1835 slov · slovník v72 · 275 pravidel
0 nálezů (0× zakázaný výraz, 0 k řešení) · 0,0 na 1 000 slov
```

Tím je tvrzení ve `vyporadani.md`, že J1–J21 byly opraveny, ověřené. Nový doložený
jazykový problém jsem při samostatném čtení ani mechanické kontrole nenašel.

### Konečný závěr fáze 2

Vypořádání odpovídá skutečnému stavu článku. Všechny zásadní i drobné nálezy z obou
předchozích auditů jsou uzavřené, žádné odmítnutí v podkladech není a po opravách
nevznikl nový doložitelný problém. Konečný verdikt zůstává **PUBLIKOVAT**.
