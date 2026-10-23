# Faktický audit: Formát obsahu podle záměru dotazu

**Datum auditu:** 23. 10. 2026
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek stojí na převážně správných a aktuálních podkladech. Blokující je neúplné podání podmínek, za kterých se stránka může objevit v generativních funkcích Googlu. Dvě další formulace potřebují zpřesnit, aby z doporučení nevznikl silnější závěr, než dovolují primární zdroje.

## Nálezy

### 1. [BLOCKER] Chybějí aktuální podmínky způsobilosti pro generativní funkce Googlu

**Závažnost:** zásadní

**Citovaná pasáž:**

> „Podle dokumentace Googlu ne. Pro Přehled od AI ani režim AI není předepsané zvláštní psaní, drobení textu ani speciální strukturovaná data.“

a dále:

> „Google ve svém průvodci pro generativní funkce výslovně uvádí, že pro Přehled od AI ani režim AI není potřeba zvláštní způsob psaní, drobení textu na malé části nebo speciální strukturovaná data.“

**Problém:** Jádro tvrzení je správné, ale jako souhrn podmínek platformy je neúplné. Aktuální dokumentace Googlu současně stanoví, že stránka musí být indexovaná a způsobilá k zobrazení s úryvkem ve Vyhledávání. Od 31. 8. 2026 navíc musí být web zahrnutý do generativních funkcí v ovládání Search Console. Splnění těchto podmínek zobrazení negarantuje. Článek neuvádí ani jednu z těchto podmínek, přestože je rešerše ve své tabulce podmínek zachycuje.

**Důkaz:**

- Google Search Central uvádí indexaci, způsobilost k úryvku, zahrnutí webu do generativních funkcí v Search Console a výslovně dodává, že indexace ani zobrazení nejsou zaručené: [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#technical-requirements).
- Česká nápověda Search Console potvrzuje, že ovládání zahrnutí bylo pro všechny weby celosvětově zavedeno 31. 8. 2026: [Ovládání generativní AI ve Vyhledávání](https://support.google.com/webmasters/answer/16908024?hl=cs).

**Doporučená oprava:** Do odpovědi FAQ i do hlavní sekce doplnit bezprostředně za tvrzení o absenci zvláštní šablony například:

> „Aby se ale stránka mohla v těchto funkcích zobrazit, musí být indexovaná, způsobilá k zobrazení s úryvkem ve Vyhledávání a web musí být zahrnutý do generativních funkcí v Search Console. Ani splnění těchto podmínek zobrazení nezaručuje.“

### 2. [WARNING] Výsledky vyhledávání nejsou „důkaz“ úplného záměru dotazu

**Závažnost:** zásadní

**Citovaná pasáž:**

> „Jsou důkazem toho, co Google v danou chvíli považuje za užitečné pro daný dotaz, ne zákazem přinést lepší odpověď nebo vlastní zkušenost.“

**Problém:** Slovo „důkaz“ dává aktuální skladbě výsledků příliš silnou vypovídací hodnotu. Výsledky ukazují výstup současných hodnoticích systémů nad právě dostupným obsahem v konkrétním kontextu. Neprokazují úplný záměr uživatele ani všechny možné významy dotazu. V témže článku je správnější formulace „vodítko, ne povinná šablona“, takže text si nyní v míře jistoty odporuje.

**Důkaz:**

- Pokyny Googlu hodnotitelům výslovně říkají, aby se při výzkumu dotazu neopírali jen o přední výsledky, protože některé významy dotazu v nich nemusí být zastoupené: [Search Quality Rater Guidelines, oddíl 12](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf#page=95).
- Google popisuje výsledky jako výstup mnoha faktorů a signálů, mimo jiné relevance, užitečnosti, odbornosti zdrojů, polohy, nastavení a aktuálnosti: [Jak Google určuje hodnocení výsledků](https://www.google.com/intl/cs_ALL/search/howsearchworks/how-search-works/ranking-results/).

**Doporučená oprava:** Nahradit větu například takto:

> „Jsou vodítkem k tomu, co hodnoticí systémy Googlu v daném prostředí právě vybraly z dostupného obsahu. Neprokazují všechny významy ani potřeby spojené s dotazem, proto je porovnejte s vlastní znalostí zákazníků.“

### 3. [TIP] Jedna část doporučení je připsaná nesprávnému dokumentu Googlu

**Závažnost:** drobný

**Citovaná pasáž:**

> „Doporučuje běžný základ: hodnotný původní obsah, srozumitelnou organizaci do odstavců a sekcí, popisné nadpisy a důležité informace v textové podobě.“

**Problém:** Aktuální průvodce pro generativní AI skutečně doporučuje jedinečný a hodnotný obsah a přehlednou organizaci do odstavců, sekcí a nadpisů. Požadavek převést vizuální obsah do textové podoby je ale formulován v samostatném vývojářském SEO průvodci, nikoli v aktuálním průvodci pro generativní AI. Samotná rada je věcně obhajitelná; nepřesné je její připsání jednomu zdroji.

**Důkaz:**

- Aktuální AI průvodce uvádí jedinečný, užitečný obsah a organizaci pomocí odstavců, sekcí a jasných nadpisů: [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#create-content).
- Samostatný průvodce pro vývojáře uvádí, že vizuální obsah má být vyjádřen také textem, protože Googlebot rozpozná jen textově viditelný obsah: [SEO Guide for Web Developers](https://developers.google.com/search/docs/fundamentals/get-started-developers#words-on-page).

**Doporučená oprava:** Buď vypustit z této věty část „a důležité informace v textové podobě“, nebo přidat k ní samostatný odkaz na vývojářský SEO průvodce a formulovat ji jako další obecné doporučení Googlu, nikoli jako obsah právě citovaného AI průvodce.

## Ověřeno bez nálezu

- **Pokyny hodnotitelů:** Verze PDF je skutečně datovaná 11. 9. 2025. Kategorie Know, Do, Website a Visit-in-Person, více možných záměrů i skutečnost, že jednotlivá hodnocení přímo neposouvají stránky, odpovídají primárnímu dokumentu: [Search Quality Rater Guidelines](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf).
- **Jazyk, lokalita a zařízení:** Doporučení kontrolovat výsledky ve správném jazyce, lokalitě a na relevantním typu zařízení odpovídá popisu kontextových faktorů Googlu: [Why your Google Search results differ from others](https://support.google.com/websearch/answer/12412910?hl=en).
- **Změna významu a záměru v čase:** Pokyny hodnotitelů mají samostatný oddíl „Query Meanings Can Change Over Time“ a pracují s aktuálním významem dotazu. Příklad dočasně změněné skladby výsledků je proto věcně možný, pokud zůstane formulován jako možnost, jak je tomu v článku.
- **Číslované seznamy:** Primární knihovna AIVO skutečně uvádí studii 138 dotazů v ChatGPT a výrazně rozdílné zastoupení seznamových zdrojů podle záměru. Článek správně uvádí malý rozsah i zákaz zobecnění: [AIVO Research — Industry AI Visibility Research](https://www.tryaivo.com/resources/research).
- **Nabídka auditu:** Cena **3 600 Kč bez DPH**, kontrola technické připravenosti a obsahových mezer, prioritní seznam úprav a výstup do **pěti pracovních dní od úhrady** souhlasí se `src/content/pages/audit.ts` i s živou stránkou [Audit AI viditelnosti](https://aiseo-optimalizace.cz/audit/).
- **Odkazy:** Všechny čtyři externí zdroje v závěru i oba interní odkazy použité v těle vedou na existující a tematicky odpovídající stránky. U interního článku o seznamech odpovídá cílová stránka tvrzení, které ji uvádí.

## C5b — doověření

**Výsledek:** Oba zásadní nálezy jsou plně vyřešené.

- **Nález 1 — podmínky generativních funkcí Googlu: UZAVŘENO.** FAQ i hlavní text nyní uvádějí všechny podmínky, které byly předmětem nálezu: stránka musí být v indexu, způsobilá k zobrazení s úryvkem a web musí být zahrnutý do generativních funkcí v Search Console. Obě pasáže zároveň správně říkají, že ani splnění podmínek zobrazení nezaručuje. Hlavní text navíc správně odděluje doporučení obecného vývojářského průvodce k textové podobě vizuální informace od doporučení průvodce pro generativní funkce.
- **Nález 2 — výsledky jako „důkaz“ záměru: UZAVŘENO.** Nové znění popisuje výsledky jako vodítko k aktuálnímu výběru hodnoticích systémů z dostupného obsahu, výslovně odmítá závěr, že prokazují všechny významy a potřeby, a požaduje porovnání s vlastní znalostí zákazníků. Tím odpovídá omezení uvedenému v Search Quality Rater Guidelines a původní nepřiměřenou jistotu odstraňuje.
