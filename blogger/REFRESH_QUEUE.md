# REFRESH_QUEUE.md — fronta refreshů existujících článků

> Vzniklo z baseline citací 2026-07-19 (`_source/_citace-baseline/2026-07-19-dotazy.md`):
> v Google AI Mode i ChatGPT vyhrávají citace ČERSTVÉ, úzce zacílené texty.
> Naše květnové/červnové články padají z citací na freshness — refresh je levnější
> a rychlejší páka než nový obsah.
>
> **Kadence: po každých 2 nových článcích udělej 1 refresh z této fronty (2:1).**
> Odbavené řádky označ ✅ + datum. Po vyprázdnění fronty se vracíme k ročnímu cyklu.

## Jak refresh vypadá

1. Aktualizuj fakta a čísla (stav k datu refreshe), oprav zastaralá tvrzení.
2. Zacil answer block a H2 přesně na frázi dotazu, kterou lidé pokládají AI (viz „cílový dotaz" u úkolu).
3. Přidej CZ-ukotvení („v Česku", „pro český trh") do title/answeru, kde dává smysl — ChatGPT cituje české weby jen u geograficky ukotvených dotazů.
4. Doplň interní odkazy na novější obsah (slovník hesla, AI Mode články, série).
5. Bump `updated` (published nech). Přegeneruj OG jen při změně titulku.

## Fronta (podle priority)

| ✓ | Článek | Cílový dotaz (z baseline) | Kdo nás poráží | Pokyny |
|---|---|---|---|---|
| ☐ | `chatgpt-seo` | „jak být citovaný v ChatGPT" | koraba.cz (jediný článek přesně na frázi) | Refokus: title i answer přímo na „Jak být citovaný v ChatGPT (v Česku)". Doplň poznatek z našeho měření: ChatGPT u obecných dotazů cituje globální EN zdroje — český web se prosadí CZ-ukotveným obsahem. Interní odkaz na /blog/jak-ai-cituje-zdroje/ a slovník #citace-v-ai. |
| ☐ | `aeo-optimalizace-v-praxi` | „jak se dostat do Google AI Overviews" | posunemevasvys.cz | Doplň H2 přesně „Jak se dostat do AI Overviews" + krátkou odpověď pod ním; aktualizuj stav AIO v ČR k datu refreshe; odkaz na GSC beta report. |
| ☐ | `ai-crawler-robots-txt` | „které AI crawlery povolit v robots.txt" | Lady Virtual, spir.cz | Aktualizuj seznam botů k datu refreshe (nové UA), tabulku povolit/zvážit/blokovat, odkaz na slovník #googlebot a #google-extended. |
| ☐ | `zero-click-ai` | „co je zero-click vyhledávání" | Štráfelda, Interval, Conviu | Čerstvá čísla, definiční answer block „Zero-click vyhledávání je…", odkaz na slovník heslo + CTR heslo. |
| ✅ 2026-07-21 | `llms-txt-navod` | „co je llms.txt" | seoprakticky.cz slovník | Hotovo (admin): sekce Z naší praxe (generovaný llms.txt), odkaz na slovník, updated bump. |

## Nový článek k frontě (zadán v obsahovém plánu)

- **„Jak se dostat do AI odpovědí: ChatGPT, AI Overviews i AI Mode"** — rozcestníkový hub
  (viz řádek v obsahovy-plan.csv). Kanál po kanálu krátká odpověď + odkaz na detailní návod.
  Vyplňuje díru: na dotazy vzoru „jak se dostat do X" nemáme jednu stránku, která pokryje všechny kanály.
