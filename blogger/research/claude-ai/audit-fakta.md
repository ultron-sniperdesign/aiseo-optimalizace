# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit proveden 6. 10. 2026 proti finálnímu draftu, dodané rešerši, aktuální dokumentaci Anthropicu a kanonickému datovému modulu služby `/audit/`. Článek má správné jádro, ale dvě formulace vynechávají podmínky platformy nebo mění pravděpodobný vliv v nutnou podmínku. Podle rámce auditu jsou to blokující vady.

## Nálezy

### 1. [BLOCKER] — zásadní: povolení `Claude-SearchBot` není doložená nutná podmínka citace

**Citovaná pasáž:** „Web musí být veřejně dostupný, nesmí vyřazovat stránku z indexace a nesmí blokovat potřebné roboty“; nadpis „Co musí stránka splnit, aby mohla být zdrojem“; krok „Pro webové vyhledávání neblokujte Claude-SearchBot.“

**Problém:** text na třech místech staví neblokování vyhledávacího robota mezi nutné podmínky. Dokumentace Anthropicu tak silný závěr nedává. U `Claude-SearchBot` říká, že zákaz zabrání indexaci pro optimalizaci vyhledávání a **může snížit** viditelnost a přesnost webu ve výsledcích. Neříká, že zablokovaná stránka se nikdy nemůže dostat do webově podložené odpovědi přes vyhledávací partnery. Naproti tomu u `noindex` Anthropic výslovně uvádí, že obsah nebude ve výstupech Claude používajících webové vyhledávání. Draft správně používá „může snížit“ v tabulce robotů, ale krátká odpověď a sekce tuto opatrnost ruší.

**Důkaz / protidůkaz:** [Anthropic Privacy Center — role tří robotů](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) uvádí u zákazu `Claude-SearchBot` jen možné snížení viditelnosti; [Claude Help Center — blokování a odstranění obsahu](https://support.claude.com/en/articles/10684638-report-block-and-remove-content-from-claude) naopak uvádí u `noindex`, že obsah „will not appear“ ve výstupech s webovým vyhledáváním.

**Doporučená oprava:** oddělit jistou podmínku od doporučené kontroly. Například poslední dvě věty krátké odpovědi změnit na: „Pro webové vyhledávání musí být stránka veřejně dostupná a bez pokynu `noindex`. Zákaz `Claude-SearchBot` může snížit její dohledatelnost a zákaz `Claude-User` může znemožnit načtení na podnět uživatele; povolení robotů však citaci nezaručuje.“ Nadpis změnit na „Co zkontrolovat, aby stránka mohla být zdrojem“ a ve třetím kroku použít přesnou modalitu „zákaz může snížit“.

### 2. [BLOCKER] — zásadní: „ve všech plánech“ vynechává model a správu pracovního prostoru

**Citovaná pasáž:** tabulka „Dostupnost — Podle Anthropicu ve všech plánech“ a věta „Claude vyhledá web tehdy, když by odpovědi pomohly aktuální informace.“

**Problém:** dostupnost ve Free, Pro, Max, Team a Enterprise je potvrzená, ale funkce není bezpodmínečná. Aktuální nápověda vyjmenovává podporované modely. U Team a Enterprise ji musí nejprve povolit Owner nebo Primary Owner pro celý pracovní prostor. Ve starším rozhraní musí mít uživatel webové vyhledávání zapnuté; v novém rozhraní samostatný přepínač není a Claude hledá, když to pomůže. Dodaná rešerše podmínku „zapnuté webové vyhledávání v daném prostředí“ obsahuje, draft ji ale v rozhodující tabulce a vysvětlení vynechal.

**Důkaz:** [Claude Help Center — Enable and use web search](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) uvádí podporované modely, povinné povolení vlastníkem Team/Enterprise prostoru a rozdíl mezi starým a novým rozhraním. [Aktuální ceník Claude](https://claude.com/pricing) potvrzuje webové vyhledávání i ve Free plánu.

**Doporučená oprava:** buňku tabulky změnit například na „Všechny plány na podporovaných modelech; u Team/Enterprise musí funkci povolit správce pracovního prostoru.“ V navazující větě doplnit: „Je-li webové vyhledávání v daném prostředí dostupné a zapnuté, Claude ho může použít…“ U nového rozhraní lze stručně dodat, že samostatný přepínač není.

### 3. [WARNING] — drobný: údaj Marketing Mineru spojuje dvě metriky s odlišným výpočtem

**Citovaná pasáž:** „Hledanost dotazu `claude ai` v Česku podle Marketing Mineru vzrostla z hodnoty uvedené v obsahovém plánu na **36 000 hledání měsíčně a meziročně o 239 %**.“

**Problém:** konkrétní hodnoty 36 000 a +239 % jsou doložené pouze interním výstupem popsaným v `research.md`, takže je z veřejného zdroje nelze nezávisle zopakovat. Navíc nejde o dvě metriky se stejným základem: Marketing Miner popisuje hledanost jako průměrnou měsíční hodnotu za posledních 12 měsíců, zatímco meziroční změna porovnává poslední měsíc se stejným měsícem předchozího roku. Formulace také odkazuje na neurčitou „hodnotu uvedenou v obsahovém plánu“, což čtenář nemůže ověřit.

**Důkaz:** [Marketing Miner — Hledanost klíčových slov](https://help.marketingminer.com/cs/clanek/hledanost-klicovych-slov/) definuje `Google Search Volume` jako průměr za posledních 12 měsíců. [Marketing Miner — New keywords](https://help.marketingminer.com/en/article/new-keywords/) definuje `YoY Search volume change` jako srovnání posledního měsíce se stejným měsícem předchozího roku.

**Doporučená oprava:** uvést datum a metodiku měření a odstranit interní obsahový plán. Například: „Marketing Miner v měření z 5.–6. 10. 2026 uváděl pro český dotaz `claude ai` průměrnou měsíční hledanost za posledních 12 měsíců 36 000. Hledanost posledního měsíce byla podle jeho metriky o 239 % vyšší než ve stejném měsíci předchozího roku.“ K redakční evidenci zachovat export nebo snímek konkrétního výstupu.

## Ověřeno bez nálezu

- `seoTitle` má 44 znaků, začíná hlavním klíčovým slovem a splňuje limit; `description` má 137 znaků.
- Krátká odpověď má 46 slov a začíná definicí.
- Claude je dostupný v Česku. [Seznam podporovaných zemí](https://support.claude.com/en/articles/8461763-where-can-i-access-claude) uvádí Czechia (Czech Republic).
- Claude lze používat v češtině, zatímco čeština k 6. 8. 2026 nebyla mezi jazyky rozhraní. [Jazyková nápověda](https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language) uvádí datum 6. 8. 2026, seznam bez češtiny a současně možnost konverzovat v libovolném jazyce.
- Bezplatný plán existuje a zahrnuje webové vyhledávání; jeho využití je omezené. Potvrzuje to [ceník Claude](https://claude.com/pricing) i [nápověda pro začátek](https://support.claude.com/en/articles/8114491-get-started-with-claude).
- Research je k datu auditu dostupný v placených plánech Pro, Max, Team a Enterprise, dělá navazující hledání a vyžaduje zapnuté webové vyhledávání. Potvrzuje [nápověda Research](https://support.claude.com/en/articles/11088861-use-research-on-claude).
- Tři role `ClaudeBot`, `Claude-User` a `Claude-SearchBot` a respektování `robots.txt` odpovídají dokumentaci Anthropicu.
- Tvrzení o `noindex`, ochraně heslem a odstranění obsahu odpovídají aktuální nápovědě; `noindex` nebrání přímému otevření odkazu, ale vylučuje obsah z výstupů využívajících webové vyhledávání.
- Kanonický modul `/audit/` potvrzuje název **Audit AI viditelnosti**, cenu **3 600 Kč bez DPH** a výstup do **pěti pracovních dní od úhrady**. CTA v článku je v těchto údajích správné.
- Kontrolované externí i interní odkazy jsou dostupné; interní `/blog/ai-crawler-robots-txt/` vrací HTTP 200.

## Doověření oprav

Doověřeno 6. 10. 2026 proti aktuální verzi `src/content/articles/claude-ai-vyhledavani.mdx` a stejným primárním zdrojům jako původní audit. Během kontroly nebyly posuzované pasáže měněny.

### Blocker 1 — `Claude-SearchBot`, `noindex` a roboti: **OBSTÁL**

- Krátká odpověď nyní správně odděluje doloženou podmínku veřejné stránky bez `noindex` od mírnějšího tvrzení, že zákaz `Claude-SearchBot` **může snížit** dohledatelnost. Zároveň výslovně odmítá záruku citace.
- Insight už nedělá z povolení robota nutnou podmínku. Správně uvádí možnost zařazení veřejné stránky bez `noindex` a pouze možný vliv nastavení robotů na dohledatelnost.
- Tabulka používá u `Claude-SearchBot` modalitu „může snížit“, u `Claude-User` popisuje načtení na podnět uživatele a `ClaudeBot` drží odděleně jako robota pro možné použití při tréninku.
- Stepper změnil nadpis z povinných podmínek na kontrolní postup a u robotů používá přesné formulace „může snížit“ a „může zabránit“. U `noindex` zachovává silnější závěr odpovídající nápovědě Anthropicu.
- FAQ už netvrdí, že povolení `Claude-SearchBot` samo otevírá cestu k citaci. Říká přesně, že odstraní zákaz tohoto robota, zatímco zahrnutí do odpovědi není slíbené.

Původní zásadní nález je uzavřen. Nový blocker v těchto pasážích nevznikl.

### Blocker 2 — dostupnost webového vyhledávání: **OBSTÁL**

- Odstavec nyní podmiňuje použití dostupností a zapnutím funkce v daném prostředí.
- Správně rozlišuje starší rozhraní s uživatelským přepínačem a nové rozhraní bez samostatného přepínače.
- U Team a Enterprise uvádí nutné předchozí povolení správcem pracovního prostoru.
- CompareTable doplňuje, že webové vyhledávání je ve všech plánech jen na podporovaných modelech a u Team/Enterprise ho povoluje správce.

Tím jsou pokryté podmínky uvedené v aktuální nápovědě [Enable and use web search](https://support.claude.com/en/articles/10684626-enable-and-use-web-search). Původní zásadní nález je uzavřen a nový blocker v těchto pasážích nevznikl.

### Marketing Miner: **OPRAVA OBSTÁLA**

Nová formulace správně rozděluje dvě odlišné metriky: **36 000** jako průměrnou měsíční hledanost za posledních 12 měsíců a **+239 %** jako srovnání posledního měsíce se stejným měsícem předchozího roku. Uvádí datum měření 5. 10. 2026, které spadá do intervalu rešerše 5.–6. 10. 2026, a odstranila nedohledatelný odkaz na starou hodnotu v obsahovém plánu. Původní warning je uzavřen.

### Výsledek doověření

**Oba blockery obstály a jsou uzavřené.** Cílené doověření neodhalilo nový zásadní ani drobný věcný problém v opravených pasážích.
