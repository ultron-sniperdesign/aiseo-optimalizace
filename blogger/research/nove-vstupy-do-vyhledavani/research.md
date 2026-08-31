# Research — intelligent search box a search live

**Řádek plánu:** `intelligent search box a search live` · kategorie `analysis` · run 31. 8. 2026
**Slug článku:** `nove-vstupy-do-vyhledavani`

**Pokyn z plánu:** ⛔ Ověřit u primárního zdroje na blog.google / Search Central, ne z přehledů; ověřit dostupnost pro ČR. Sekundární přehledy se rozcházejí a uvádějí i konkrétní model.

## Výsledek ověření: obojí se u primárního zdroje potvrdilo

Řádek varoval, že výčty ze sekundárních přehledů se nám už dvakrát u zdroje rozpadly. Tentokrát ne — obě funkce jsou doložené v oznámeních Googlu i v nápovědě.

### Vyhledávací pole (I/O 2026)

| Fakt | Doslovné znění | Zdroj | Ověřeno |
|---|---|---|---|
| Pole se roztahuje | „dynamically expanding to give you space to describe exactly what you need" | blog.google, *Google Search's I/O 2026 updates* | 31. 8. 2026 |
| Napovídá formulaci | „helps you formulate your question with AI-powered suggestions that go beyond autocomplete" | tamtéž | 31. 8. 2026 |
| Vstupy napříč formáty | „search across modalities, using text, images, files, videos or Chrome tabs as inputs" | tamtéž | 31. 8. 2026 |
| Přechod do Režimu AI s kontextem | „easily ask a follow-up question right from an AI Overview, and flow into a conversational back and forth with AI Mode. Your context stays with you" | tamtéž | 31. 8. 2026 |
| Dostupnost | „in all countries and languages where AI Mode is available"; „The new intelligent Search box is starting to roll out today" | tamtéž | 31. 8. 2026 |
| Odkazy zůstávají | „You'll continue to get a range of results from Search, just like you do today"; „the links and supporting articles get even more relevant" | tamtéž | 31. 8. 2026 |

### Search Live

| Fakt | Doslovné znění | Zdroj | Ověřeno |
|---|---|---|---|
| Celosvětové rozšíření | „more than 200 countries and territories where AI Mode is available" | blog.google, souhrn AI novinek z března 2026 | 31. 8. 2026 |
| Co to je | „you can have back-and-forth voice conversations with Search and use your camera to show Search what you see" | nápověda Vyhledávání, *Have a real-time conversation with Live in Search* | 31. 8. 2026 |
| Odkazy na obrazovce | „You'll hear helpful AI-generated audio responses and you can easily follow up with another question, **with helpful web links on your screen to keep exploring**" | tamtéž | 31. 8. 2026 |
| Běží na pozadí | „The Live experience works in the background, so you can seamlessly continue the conversation while in another app" | tamtéž | 31. 8. 2026 |
| Dostupnost | „available to users in all regions and languages where AI Mode is available" | tamtéž | 31. 8. 2026 |
| Model | Gemini 3.1 Flash Live, „our best audio model to date" | blog.google, březen 2026 | 31. 8. 2026 |

### Co z toho plyne pro Česko

Obě funkce mají dostupnost navázanou na Režim AI. Podle vlastního článku `ai-mode-cesky` má nápověda k Režimu AI **výslovný seznam zemí a jazyků a Česko i čeština v něm jsou**. Dostupnost pro ČR je tedy doložená nepřímo — přes odkaz, ne vlastním seznamem. Stejně to hodnotí i tabulka v `jak-overit-dostupnost-ai-funkce`.

## Kolize s korpusem

| Článek | Co pokrývá | Jak se odliším |
|---|---|---|
| `ai-mode-vs-ai-overviews` | **přechod z AI přehledu do Režimu AI z 19. 5. 2026 už popsaný** | jen jedna věta s odkazem, nepřepisovat |
| `multimodalni-vyhledavani-ai` | jestli jsou čísla o hlasu a obrazu doložitelná (kritika zdrojů) | já popisuju funkci, ne čísla; doplňuju, co článek z 19. 7. ještě nemohl mít |
| `delsi-dotazy-v-ai-mode` | čísla o délce dotazů a jejich limity | žádná čísla, jen odkaz |
| `query-fan-out-ai-mode` | rozpad dotazu na podotázky | navazuje, neopakovat |
| `jak-overit-dostupnost-ai-funkce` | metoda ověřování dostupnosti + řádek o Search Live | přebírám závěr, ne metodu |
| `navrhy-kam-dal-v-ai-odpovedi` | pět odkazových ploch z května 2026 | jiná strana odpovědi (vstup vs. výstup) |

## Struktura článku

1. Krátká odpověď: co se změnilo na vstupu.
2. Pole, které dotaz dopisuje — tři doložené vlastnosti.
3. Search Live: hlas a kamera, a že odkazy zůstávají na obrazovce.
4. Co je na tom pro Česko doložené a co ne.
5. Co to mění pro obsah: delší a konkrétnější dotazy na vstupu.
6. Co se nezměnilo — odkazy ve výsledcích zůstávají, Google to říká výslovně.
7. Časté omyly.

## Limity, které si hlídám

- **Žádná čísla o délce dotazů** — patří `delsi-dotazy-v-ai-mode`.
- **Netvrdit, že hlasové hledání nemá odkazy** — nápověda výslovně říká opak.
- **Nepřepisovat přechod AI přehled → Režim AI**, je hotový jinde.
- **Dostupnost pro ČR je odvozená přes Režim AI**, ne vlastní seznam — napsat to takhle, ne silněji.
- Žádné odhady adopce; Google k ní nic nezveřejnil.
