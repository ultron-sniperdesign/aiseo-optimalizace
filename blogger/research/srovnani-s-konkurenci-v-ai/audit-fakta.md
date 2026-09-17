# Faktický audit — Srovnání s konkurencí v AI

**Datum auditu:** 17. 9. 2026
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek zachází s proměnlivostí AI odpovědí opatrně, správně odděluje produktový výběr od pořadí obchodníků a nepřisuzuje pozorované změně automaticky příčinu. Primární zdroje potvrzují téměř všechna tvrzení o OpenAI, Googlu, Gemini a Seznamu. Před publikací je ale potřeba zpřesnit rozsah důkazů z citovaného preprintu. Diagnostická část studie je v článku podaná obecněji, než dovoluje její malý vzorek.

## Nálezy

### 1. Diagnostická část preprintu je zobecněná nad rámec provedeného pokusu

- **Citace z článku:** „Autoři rozlišují běžné požadavky od diagnostických dotazů vytvořených podle slovníku konkrétní značky. Ty mohou ověřit, zda ji model vůbec dokáže vybavit…“
- **Problém:** Čtenář z formulace získá dojem, že studie ověřila obecnou diagnostickou metodu pro libovolnou značku. Empirická diagnostická část ale použila jen malou sadu ručně napsaných sond pro dvě předem vybrané značky, Craftsman a L.L.Bean. Formulace pocházely z vlastních marketingových materiálů těchto značek. Autoři výslovně uvádějí, že tato část potřebuje ověření ve větším měřítku na širším a náhodně vybraném souboru značek. Výsledek proto dokládá podmíněné vybavení těchto dvou značek v testovaných modelech, ne obecnou validaci postupu.
- **Důkaz:** Preprint v části 4.3 popisuje sondy pro Craftsman a L.L.Bean a v části 5.3 je označuje za „small set of handwritten prompts built specifically for these two brands“; zároveň požaduje validaci na větším náhodném souboru. [Malthouse et al., plný text preprintu](https://arxiv.org/html/2609.16304), zejména části 4.3 a 5.3.
- **Konkrétní oprava:** Nahradit obě věty například takto: „U dvou značek, Craftsman a L.L.Bean, autoři použili malou sadu ručně psaných diagnostických sond s formulacemi z jejich vlastních marketingových materiálů. Sondy ukázaly, že testované modely dokázaly značky při výrazných nápovědách vybavit, ale autoři tuto část považují za předběžnou a požadují ověření na větším náhodném souboru značek.“
- **Závažnost:** **ZÁSADNÍ** — mění rozsah důkazu, na kterém stojí doporučená diagnostika.

### 2. Studie nezkoumala pouze produktové kategorie

- **Citace z článku:** „…sledovala šest modelů a pět produktových kategorií.“
- **Problém:** Jedna z pěti kategorií byla služba, konkrétně lodní plavby. Autoři sami píší o pěti kategoriích produktů a služeb: aku vrtačky, lodní plavby, krmivo pro kočky, kávovary a turistické bundy.
- **Důkaz:** Metodika vyjmenovává pět kategorií a označuje je jako „product and service categories“. [Malthouse et al., metodika](https://arxiv.org/html/2609.16304#S3), odstavce 3 a 3.1.
- **Konkrétní oprava:** Změnit na „sledovala šest modelů a pět kategorií produktů a služeb“.
- **Závažnost:** **DROBNÝ** — nemění závěr, ale opravuje přesný rozsah studie.

### 3. Podmínka Googlu je správná, ale chybí prakticky důležitá výchozí hodnota

- **Citace z článku:** „…potřebuje indexaci, způsobilost k úryvku a zahrnutí webu v nastavení Search generative AI v Search Console.“
- **Problém:** Tři uvedené podmínky jsou správné, ale věta může vyznít, že vlastník musí web ručně přihlásit. Google uvádí, že volba „Include my site's links and content“ je výchozí pro všechny properties. Ruční zásah je nutný při změně nebo kontrole zděděného nastavení, ne pro běžné prvotní přihlášení.
- **Důkaz:** Dokumentace Googlu potvrzuje podmínky indexace, způsobilosti k úryvku a zahrnutí; nápověda ke kontrolnímu prvku současně říká, že zahrnutí je výchozí volba. [Průvodce pro generativní funkce](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Search generative AI control](https://support.google.com/webmasters/answer/16908024).
- **Konkrétní oprava:** Za větu doplnit: „Zahrnutí je v Search Console výchozí volba; zkontrolujte hlavně, zda vlastník web nebo nadřazená property nenastavili vyloučení.“
- **Závažnost:** **DROBNÝ** — podmínka není chybná, ale současné znění může vyvolat zbytečný dojem povinného ručního přihlášení.

## Ověřená tvrzení bez nálezu

### OpenAI Shopping a shopping research

- Výběr produktů opravdu bere v úvahu dotaz, kontext včetně paměti a vlastních instrukcí, strukturovaná data první a třetí strany, další obsah třetích stran, předchozí modelovou odpověď a bezpečnostní pravidla. Článek svůj výčet nepodává jako úplný a jeho tvrzení je správné. [Shopping with ChatGPT Search](https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search)
- Seznam obchodníků je samostatný krok po otevření produktu. Dokumentace uvádí cenu, dostupnost, kvalitu a roli výrobce či hlavního prodejce; metadata mohou pocházet od třetích stran i přímo od obchodníků. Článek tento rozsah správně omezuje na obchodníky a nepřenáší jej na obecná doporučení firem.
- Shopping research může používat produktová data obchodníků přes Agentic Commerce Protocol, veřejné produktové informace a další maloobchodní zdroje. OpenAI upozorňuje na chyby cen, dostupnosti a slev a odkazuje uživatele na konečnou kontrolu u obchodníka. Uvádí také, že blokovaný automatizovaný přístup vede k přeskočení zdroje nebo použití jiných webů. Článek používá podmiňovací formulaci „může pracovat“, takže tuto výjimku nepopírá. [Using shopping research in ChatGPT](https://help.openai.com/en/articles/12911370-using-)

### ChatGPT Search

- Dokumentace potvrzuje přepis dotazu, možné použití uložené paměti při přepisu a přibližnou lokalitu podle IP; přesná poloha zařízení je volitelná. Tvrzení, že nový chat sám nevypíná personalizaci, je v souladu s dokumentací. [Searching the web with ChatGPT](https://help.openai.com/en/articles/9237897-chatgpt-search)

### Google Search

- Průvodce potvrzuje získávání podkladů z indexu i souběžné související dotazy (query fan-out). Podmínky způsobilosti jsou v článku uvedeny věcně správně a článek správně dodává, že splnění podmínek nezaručuje zobrazení. [Průvodce Googlu pro generativní funkce](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- Tentýž průvodce výslovně říká, že vytváření samostatných stránek pro varianty dotazů primárně za účelem manipulace pořadí nebo generativních odpovědí porušuje zásady proti hromadnému vytváření obsahu. Parafráze v článku je přesná.
- Doporučení pro recenze zahrnují důkazy vlastní zkušenosti, měřitelné vlastnosti, rozdíly proti konkurenci, přínosy, nevýhody a okolnosti vhodnosti. Článek správně neodvozuje z těchto pokynů záruku změny AI doporučení. [Write high quality reviews](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews)

### Gemini

- Nápověda rozlišuje zdroje a související odkazy, upozorňuje, že odkazy nejsou u každé odpovědi, a popisuje je jako obsah související s částmi odpovědi. Závěr článku, že seznam odkazů není úplným záznamem vzniku hodnocení, je přiměřený. [View related sources from Gemini Apps](https://support.google.com/gemini/answer/14143489?hl=en)

### Seznam Asistent

- Seznam článek zveřejnil 25. 6. 2026. Uvádí inzeráty pod odpovědí, nadpis „Sponzorované výsledky“, nejvýše dva inzeráty a výslovné oddělení od odpovědi Asistenta. Formulace auditovaného článku „v červnu 2026“ je správná. [Oznámení Seznamu](https://blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/)

### Preprint — základní metodika

- Datum zveřejnění verze v1 na arXiv je 14. 9. 2026. Datum 7. 9. 2026 uvnitř rukopisu je datum dokumentu, ne datum zveřejnění na arXiv; článek používá správně datum zveřejnění.
- Studie použila šest modelů, samostatná bezstavová volání přes API, vypnuté webové vyhledávání a další externí nástroje. Základní část měla 1 200 seznamů, potřeby uživatelů dalších 1 200. Článek žádná z těchto čísel nepřekrucuje.
- Rozlišení výskytu značky a jejího pořadí odpovídá metrikám BRP@5 a MRR@5. Pozorované vztahy k vyhledávacímu zájmu a internetové konverzaci jsou v práci výslovně označené za průzkumné, nikoli kauzální. Článek toto omezení podává správně.

### Nabídka Auditu AI viditelnosti

- `src/content/pages/audit.ts` uvádí cenu `3600` CZK, `valueAddedTaxIncluded: false` a text „3 600 Kč bez DPH“. CTA v článku je cenově správně.
- Stejný modul uvádí technickou kontrolu přístupu robotů, obsahové mezery proti konkurenci a prioritní seznam úprav. Popis rozsahu služby v CTA odpovídá nabídce.

## Kontrola URL

Všechny externí odkazy v článku se 17. 9. 2026 otevřely a vedly na deklarovaný primární zdroj:

1. `https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search`
2. `https://help.openai.com/en/articles/12911370-using-`
3. `https://developers.google.com/search/docs/fundamentals/ai-optimization-guide`
4. `https://support.google.com/gemini/answer/14143489?hl=en`
5. `https://blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/`
6. `https://arxiv.org/abs/2609.16304`
7. `https://help.openai.com/en/articles/9237897-chatgpt-search`
8. `https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews`

Interní cíle `https://aiseo-optimalizace.cz/geo/` a `https://aiseo-optimalizace.cz/audit/` také odpověděly a obsahově odpovídají popiskům odkazů.

## Formální kontroly související s důvěryhodností

- `title` a `seoTitle`: 54 znaků, v požadovaném rozmezí 50–60.
- `description`: 139 znaků, v požadovaném rozmezí 70–160.
- `answer`: 51 slov, začíná definicí a vejde se do požadovaných 40–60 slov.
- Prvních přibližně 100 slov těla dává samostatný, věcný postup a neobsahuje nepodložené číselné tvrzení.
- Článek neslibuje pořadí ani změnu doporučení a důsledně odděluje pozorování od příčiny.

## Dodatek C5b — ověření opravy zásadního nálezu F1

**Kontrolovaná pasáž:** „U dvou značek, Craftsman a L.L.Bean, autoři použili malou sadu ručně psaných diagnostických dotazů s formulacemi z jejich marketingových materiálů. Testované modely si při těchto výrazných nápovědách dokázaly značky vybavit, ale autoři požadují ověření na větším náhodném souboru značek. Tyto dotazy nejsou běžným zákaznickým testem. Práce pozoruje souvislost mezi doporučením značky, zájmem ve vyhledávání a internetovými diskusemi, nedokládá však příčinný vztah.“

**Výsledek kontroly:** **OPRAVA PLNĚ OBSTOJÍ. NÁLEZ F1 JE UZAVŘEN.**

Nové znění přesně zachycuje všechny podstatné meze původního důkazu:

- empirická diagnostická část se týkala pouze značek Craftsman a L.L.Bean;
- autoři použili malou sadu ručně vytvořených sond určených právě pro tyto dvě značky;
- diagnostické formulace čerpaly přímo z marketingových materiálů značek;
- autoři je označili za záměrně nerealistické jako běžné spotřebitelské požadavky;
- výsledek dokládá podmíněné vybavení značek při výrazných nápovědách, nikoli úplnost nebo správnost jejich reprezentace v modelu;
- autoři požadují ověření na větším náhodně vybraném souboru značek, než bude možné postup považovat za obecný diagnostický nástroj;
- vztah doporučení k vyhledávacímu zájmu a online konverzaci o značkách je ve studii průzkumný a pozorovaný, nikoli příčinný.

Primární důkaz: [Malthouse et al., části 4.3 a 5.3](https://arxiv.org/html/2609.16304). Článek během kontroly C5b nebyl měněn.
