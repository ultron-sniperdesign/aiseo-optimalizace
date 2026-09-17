# Závěrečný audit — sezónní obsah pro AI

## Fáze 1 — nezávislá kontrola opraveného článku

### VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má správnou hlavní tezi, odpovídá záměru a většinu platformních tvrzení formuluje přesně. Opravu před publikací vyžaduje kategorické doporučení k celoroční indexaci a odkaz na starší článek se známými nedoloženými tvrzeními. Specifická tvrzení o datech a produktových datech by měla vést přímo na použité primární zdroje.

### Nálezy

1. **[WARNING] Stabilní URL je zaměněna za bezpodmínečně celoročně indexovanou stránku.**

   Citace: „Vrátí-li se akce příští sezónu, ponechte URL se stavem 200 a indexovatelnou; nedělejte z ní prázdnou stránku ani ji dočasně nevyřazujte z výsledků pomocí direktivy `noindex`.“ Stejný kategorický pokyn se opakuje v FAQ a v odrážce „Vrátí se stejná akce“.

   Google pro opakované akce doložitelně doporučuje znovu používat stejnou URL. Z tohoto doporučení ale samo o sobě neplyne, že každá taková URL musí zůstat indexovaná po celý rok bez ohledu na obsah. Dokumentace pro e-shopy naopak doporučuje stránky bez užitečného obsahu neindexovat a u kategorií bez položek použít `noindex`. Článek správně rozlišuje užitečnou stránku od prázdné kategorie, ale uvedená imperativní formulace tuto podmínku stírá.

   **Návrh opravy:** formulovat doporučení podmíněně: pokud stránka mimo sezonu obsahuje pravdivé a užitečné informace, ponechat ji se stavem 200 a zpravidla indexovatelnou; pokud zůstane bez položek a bez užitečného obsahu, rozhodnout podle pravidel pro prázdné kategorie. Výslovně oddělit „zachovat stejnou URL pro další ročník“ od „udržovat ji stále v indexu“.

2. **[WARNING] Interní odkaz vede na článek se známými nepodloženými zobecněními.**

   Citace: „Obecný postup smysluplné revize popisuje článek o [aktualizaci obsahu pro AI](/blog/aktualizace-obsahu-pro-ai/).“

   Cílový článek uvádí obecné intervaly 30–90 dní a pořadí platforem podle údajného důrazu na čerstvost. Podle podkladové rešerše pro ně nebyla nalezena dostatečná opora v primárních zdrojích. Nový článek tato tvrzení sám neopakuje, ale doporučuje je čtenáři jako navazující zdroj.

   **Návrh opravy:** odkaz do doby samostatného refreshe staršího článku odstranit, nebo ho nahradit interním zdrojem, který neobsahuje uvedené zobecnění. Pro tento článek není nutný; konkrétní sezónní kontrolní seznam už obsahuje.

3. **[TIP] Dvě konkrétní platformní instrukce nejsou v publikovaném textu přímo propojené se svými primárními zdroji.**

   Citace: „Google Merchant Center umožňuje k akční ceně přidat interval `sale_price_effective_date`…“ a „Google uvádí, že [`lastmod`] používá tehdy, když je konzistentně a ověřitelně přesný.“

   Obě tvrzení jsou věcně správná. Primární zdroje jsou v rešerši, ale čtenář se k nim z článku nedostane; v odstavci o `lastmod` vede odkaz jen na Bing.

   **Návrh opravy:** propojit `sale_price_effective_date` s dokumentací Merchant Center a první výskyt pravidla pro `lastmod` s dokumentací Google k mapám webu. U pasáže o `dateModified` lze obdobně přidat odkaz na dokumentaci k datu publikace a úpravy.

### Co prošlo

- Hlavní doporučení používat pro opakovanou událost jednu URL bez roku odpovídá dokumentaci Google pro Black Friday a Cyber Monday.
- Aktuální podmínky pro generativní funkce Google jsou popsány přesně: indexace, způsobilost k úryvku a zahrnutí v nastavení Search generative AI. Celosvětové rozšíření ovládacího prvku k 31. 8. 2026 i výchozí zahrnutí potvrzuje aktuální nápověda Search Console.
- Tvrzení, že Google nepožaduje zvláštní soubor ani speciální strukturovaná data pro generativní funkce, odpovídá aktuálnímu průvodci Google.
- Čísla Marketing Mineru mají datum, kontext a výslovné omezení, že jde o modelovanou hledanost, nikoli návštěvnost stránky.
- Titulek i SEO titulek mají 52 znaků, meta description 140 znaků a slug je srozumitelný. Krátká odpověď má 46 slov, začíná definicí a funguje samostatně. Úvod ji zopakuje dřív, než přejde k datům.
- Všech šest H2 používá předepsané zvýraznění `<span class="hl">` i `<strong>`. FAQ má šest samostatně použitelných odpovědí. Jazykový checker nad 275 pravidly vrací 0 nálezů.
- CTA používá kanonický název „Audit AI viditelnosti“, správnou cenu 3 600 Kč bez DPH a slíbený prioritní seznam úprav odpovídá nabídce na `/audit/`.

### Primární zdroje ověřené ve fázi 1

- Google Search Central: https://developers.google.com/search/blog/2020/10/best-practices-black-friday
- Google Search Central, generativní funkce: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Search Console Help, Search generative AI control: https://support.google.com/webmasters/answer/16908024
- Google Search Central, datum publikace a úpravy: https://developers.google.com/search/docs/appearance/publication-dates
- Google Search Central, mapy webu a `lastmod`: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Central, URL e-shopu a prázdné kategorie: https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites
- Microsoft Bing Webmaster Blog, `lastmod`: https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search

## Fáze 2 — kontrola vypořádání všech auditů

### KONEČNÝ VERDIKT: PUBLIKOVAT

Konečná verze článku vypořádává všech **6 faktických**, **21 jazykových** a **3 nové nálezy z první fáze závěrečného auditu**. Zásadní nálezy F1 a F2 byly navíc doověřeny faktickým auditorem v kole C5b proti aktuálním primárním zdrojům. Po následném zpřesnění podle C5-01 článek správně odděluje zachování URL od její indexovatelnosti.

### Stav nálezů

| Skupina | Celkem | Vyřešeno | Nevyřešeno |
|---|---:|---:|---:|
| Faktický audit F1–F6 | 6 | 6 | 0 |
| Jazykový audit J1–J21 | 21 | 21 | 0 |
| Závěrečný audit C5-01–C5-03 | 3 | 3 | 0 |
| **Celkem** | **30** | **30** | **0** |

Nevyřešené podle závažnosti: **0 BLOCKER · 0 WARNING · 0 TIP**.

### Ověření faktických nálezů F1–F6

| ID | Výsledek kontroly konečného článku |
|---|---|
| F1 | **Vyřešeno.** Hlavní text i FAQ obsahují podmínku Search generative AI v Search Console, datum globálního nasazení 31. 8. 2026, výchozí zahrnutí a možnost vypnutí. C5b opravu uzavřelo bez výhrady. |
| F2 | **Vyřešeno.** Zachování opakované URL už není vydáváno za povinnou celoroční indexaci. Užitečný mimosezónní obsah má stav 200 a je zpravidla indexovatelný; prázdná kategorie může použít `noindex` s upozorněním na čas potřebný k novému zařazení; 404/410 se vztahuje až na zrušenou kategorii bez náhrady. Toto konečné znění nahrazuje užší meziverzi posuzovanou v C5b a odpovídá C5-01. |
| F3 | **Vyřešeno.** FAQ váže obecný požadavek významné úpravy k viditelnému datu a `dateModified`, zatímco konkrétní příklady změny hlavního obsahu, strukturovaných dat a odkazů připisuje správně údaji `lastmod`. |
| F4 | **Vyřešeno.** Atribuce výslovně zachovává podmínku „jen kvůli ovlivnění pořadí nebo generativních odpovědí“. |
| F5 | **Vyřešeno.** Nepodložené datum prvního zveřejnění tvrzení bylo odstraněno; text mluví přesně o aktuálním průvodci. |
| F6 | **Vyřešeno.** Čísla Marketing Mineru jsou označena za odhady a modelovanou hledanost, nikoli přesně pozorované dotazy, a odkazují na metodiku. |

### Ověření jazykových nálezů J1–J21

| ID | Výsledek kontroly konečného článku |
|---|---|
| J1 | **Vyřešeno.** Čtenářský text používá jednotně „sezónní / sezóna“; bez diakritiky zůstává pouze technický slug. |
| J2 | **Vyřešeno.** SEO titulek končí přirozeným „proč zachovat jednu URL pro každý rok“. |
| J3 | **Vyřešeno.** Úvod používá „odhadoval“, „měsíční odhad“ a výslovně vysvětluje modelovanou hledanost. |
| J4 | **Vyřešeno.** Vyhledávače adresu „objeví a zařadí“, bez personifikace. |
| J5 | **Vyřešeno.** Text používá přesnou „stejnou popisnou URL bez roku“. |
| J6 | **Vyřešeno.** Zachování odkazů je popsáno konkrétně a stáří URL není vydáváno za automatickou výhodu. |
| J7 | **Vyřešeno.** Neurčitý záměr nahradily účel stránky, potřeba zákazníka a očekávané informace. |
| J8 | **Vyřešeno.** Obě problematické buňky srovnávací tabulky mají přirozené konkrétní znění. |
| J9 | **Vyřešeno.** Atribuce Googlu je přesná, obsahuje podmínku účelu a nepoužívá „nevyrábět“. |
| J10 | **Vyřešeno.** Štítek zní „Stabilní URL neznamená povinnost držet prázdnou stránku“. |
| J11 | **Vyřešeno.** `noindex`, `dateModified`, `lastmod` a `canonical` mají při prvním použití český kontext; samostatný „feed“ byl nahrazen produktovými daty. |
| J12 | **Vyřešeno.** Vágní pokyny nahradily konkrétní kroky pro mimosezónní a zrušenou stránku. |
| J13 | **Vyřešeno.** Věta o Bingu má jednoznačný podmět a přímý primární odkaz. |
| J14 | **Vyřešeno.** Karta chyby odděluje přidání stránky provozovatelem od objevení a zařazení vyhledávačem. |
| J15 | **Vyřešeno.** Text už nepřipisuje vyhledávači učení; mluví o ztrátě informační hodnoty. |
| J16 | **Vyřešeno.** Neurčitý model nahradil přímo Google a opatrná formulace „automaticky zvýhodňuje“. |
| J17 | **Vyřešeno.** Všechny tři FAQ vazby byly přeformulovány do přirozené češtiny. |
| J18 | **Vyřešeno.** Produkty, obrázek i technická kontrola v checklistu mají přesné a čitelné formulace. |
| J19 | **Vyřešeno.** Nadpis i odstavec přímo říkají, odkud na stránku odkazovat; „prolinkovat“ zmizelo. |
| J20 | **Vyřešeno.** Závěr konkrétně popisuje aktuální a dohledatelnou adresu. |
| J21 | **Vyřešeno.** CTA používá kanonické oblasti auditu, správný název a cenu 3 600 Kč bez DPH. |

### Ověření nálezů C5-01–C5-03

| ID | Výsledek kontroly konečného článku |
|---|---|
| C5-01 | **Vyřešeno.** Konečné znění třikrát zachovává podmínku užitečného mimosezónního obsahu, používá „zpravidla indexovatelnou“ a vysvětluje důsledek dočasného `noindex`. Zachování URL a pobyt v indexu už nesplývají. |
| C5-02 | **Vyřešeno.** Odkaz `/blog/aktualizace-obsahu-pro-ai/` v článku není. Starší článek nebyl v rámci tohoto běhu měněn. |
| C5-03 | **Vyřešeno.** `sale_price_effective_date`, datum publikace/úpravy a `lastmod` vedou přímo na příslušnou dokumentaci Google. |

### Dodatečná vizuální úprava

Popisek druhé komponenty `SourceCard` je v konečné verzi „Průvodce AI funkcemi Googlu“. Zkrácení nemění význam zdroje a podle zaznamenané opakované mobilní kontroly odstranilo přesah prvku.

### Mechanická kontrola konečné verze

- `jazyk-check.py`: **1 853 slov · 275 pravidel · 0 nálezů**.
- Metadata, 46slovná krátká odpověď, šest FAQ, šest formátovaných H2 a CTA zůstávají v mezích ověřených ve fázi 1.
- Nevyřešené auditní nálezy: **0**.
- SHA-256 souboru `src/content/articles/sezonni-obsah-pro-ai.mdx`: `50b32fe419ef247729bcfb49163f1a65a8b2482bb3eeaef1fa34aa1ba180857d`.
