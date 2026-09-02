# Research — ceska studie ai viditelnosti (PRIORITA C)

**Řádek plánu:** `ceska studie ai viditelnosti` · „První česká data o AI viditelnosti: co ukázalo 400 000 měření" · `analysis` · cíl vydání do 11. 9. 2026 · run 2. 9. 2026
**Podklad:** `_source/_keyword-research/trend-ai-vyhledavani-20260902/insights.md`. Pravidlo série: u každého čísla zdroj, metodika a datum sběru; cizí data nikdy nevydávat za naše.

## Ověření u zdroje — dvě různé datové sady a jedno číslo, které do studie nepatří

| Tvrzení ze shrnutí | Primární / nejbližší zdroj | Výsledek |
|---|---|---|
| Studie MM: 400 000 měření, 100 000 promptů, 10 odvětví, duben 2026, ChatGPT/Gemini/Perplexity/AI Overviews | **Stránka výzkumu Marketing Mineru** (`marketingminer.com/cs/ai-vyzkum`, čteno v prohlížeči 2. 9. 2026): „400 000 měření · 100 000 unikátních promptů · 10 odvětví · 4 AI nástroje · 04/2026 období měření"; metodika: prompty vygenerované z nejhledanějších klíčových slov, každá otázka položena všem 4 nástrojům, **„z českých IP adres, anonymně, bez sdílené historie mezi konverzacemi", „žádné API"**; úvod metodiky doslova: „v reálném prostředí, z české IP adresy, v češtině" | **sedí** — a metodika je silnější, než shrnutí uvádělo (uživatelské prostředí, bez historie = přesně to, co náš web doporučuje) |
| „shoda citovaných domén mezi ChatGPT a Perplexity je jen ~11 %" | **na stránce výzkumu ani v pokrytí (MediaGuru 16. 4. a 18. 5. 2026, Lupa, FeedIT) žádné takové číslo není.** Číslo ~11 % má náš vlastní článek `jak-ai-cituje-zdroje` ze **zahraniční** analýzy citací (řádově stovky milionů citací), ne z MM | **NEPATŘÍ K MM** — shrnutí sloučilo dva zdroje. Do článku: MM překryv domén neuvádí; 11 % je zahraniční údaj, odkázat na vlastní článek |
| — (co MM o překryvu opravdu říká) | MediaGuru 18. 5. 2026 (reprodukuje MM): „Přibližně 83 % značek se objevuje napříč 3 až 4 AI službami současně"; „AI asistenti dnes v průměru pracují jen se 3 až 5 značkami v jedné odpovědi" | **doplnit** — na úrovni značek je překryv vysoký; na úrovni pořadí se ale nástroje liší (stránka výzkumu: v automotive ChatGPT řadí první jednu značku, Gemini a Perplexity jinou) — v článku bez jmen značek |
| 66 % firem AI viditelnost aktivně řeší; počet platících za měření od ledna zčtyřnásobil | **Tisková zpráva MM přes Protext ČTK, 17. 8. 2026**: průzkum **6.–29. 7. 2026, n = 871** (uživatelé a publikum MM): „66 % dotázaných, že viditelnost své firmy nebo klientů v AI asistentech měří a snaží se ji aktivně ovlivňovat"; „prokazatelné výsledky vidí polovina (50 %)"; „platí více než čtyřnásobek klientů oproti konci ledna (+355 %)"; **objednávky z AI asistentů se od ledna zdvojnásobily** (ne zčtyřnásobily) — doslova: „počet objednávek přivedených AI asistenty i jejich podíl na všech objednávkách se od ledna zdvojnásobily" | **sedí s upřesněním** — jiný dataset (průzkum, červenec) než studie (měření, duben); vzorek = publikum MM, tedy lidé, kteří téma už řeší |
| — | Stránka výzkumu uvádí i tabulky „top zdroje, ze kterých AI cituje" po odvětvích; část řádků jsou zjevně zástupné domény (`example-zdroj.cz`, `jak-vybrat.cz`) | **nepoužívat** — tabulka je ukázková/neúplná |
| Vlastní zkušenost | Náš běh měření 18. 8. 2026 (web aiseo-optimalizace.cz, 41 promptů, OpenAI): zmínka značky 7 %, citace domény 7 %, podíl zmínek 16 % (mezi běhy 25 → 16 %) | použít **odděleně** jako komentář k vlastnímu webu; žádné cizí značky |

## Úhel

Interpretace pro české firmy, ne přepis studie: (1) poprvé existuje **české** měření se zveřejněnou metodikou — a ta metodika (uživatelské prostředí, bez historie, česká IP) je sama o sobě zpráva; (2) co studie ukázala o **koncentraci** (3–5 značek na odpověď, oborové rozdíly, srovnávače a e-shopy jako zprostředkovatelé) a o **rozdílech mezi nástroji** (stejná značka jinde jinak vysoko); (3) co studie **neukazuje**: překryv domén (11 % je zahraniční údaj), prokliky, sentiment za jednotlivé firmy; (4) co říká červencový průzkum o poptávce — a proč je to průzkum mezi publikem nástroje; (5) co z toho plyne pro výběr platforem k měření.

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `jak-cist-studie-o-ai-viditelnosti` | metodická kritika studií (pozorování vs. pokus, pět otázek) | použít jeho „pět otázek" jako rámec na tuhle studii, neopakovat metodiku |
| `jak-ai-cituje-zdroje` | rozdíly platforem, zahraniční 11 % překryv domén | odkázat; výslovně oddělit od MM |
| `test-viditelnosti-v-ai` | vlastní postup měření | odkaz; MM metodika jako potvrzení postupu |
| `share-of-model-metrika` | metrika podílu | odkaz u interpretace „viditelnost v %" |
| `ai-seo-nastroje` | Marketing Miner Brand Radar jako nástroj | nekomentovat produkt, jen data |

## Struktura článku

1. Krátká odpověď.
2. Co bylo změřeno a jak — metodika, proč na ní záleží.
3. Tři zjištění, která obstojí: koncentrace na 3–5 značek; oborové rozdíly (koncentrace vs. rovnoměrnost vs. zprostředkovatelé); stejná značka, jiné pořadí podle nástroje.
4. Číslo, které ke studii nepatří — 11 % (a co MM o překryvu říká doopravdy).
5. Poptávka: červencový průzkum — čísla s tím, čí vzorek to je.
6. Co z toho plyne pro měření (platformy zvlášť, opakovat, bez historie).
7. Vlastní zkušenost — odděleně a jen o našem webu.
8. Co z toho neplyne.

## Limity
- Nejmenovat značky z žebříčků (pravidlo webu: nejmenovat měřené subjekty) — popsat vzorce.
- Každé číslo s datem sběru (duben 2026 měření; červenec 2026 průzkum) a zdrojem.
- 66 % je z publika MM, ne z reprezentativního vzorku — říct to.
- Zdrojové tabulky domén nepřebírat (zástupné řádky).
