# Research — refresh `bing-seo-pro-ai`

Datum: 8. 8. 2026 · typ: refresh (2:1 kadence) · původní článek: published + updated 2026-05-24, 655 slov (nejkratší starý článek v korpusu)

## Proč tenhle článek

Vybraný skenem všech 124 článků podle nejstaršího `updated`. Nikdy nerefreshovaný, nejkratší, a hlavně **stojí na premise, kterou dnes neumím doložit z primárního zdroje**.

## Nález 1 — premisa článku není v primárních zdrojích (hlavní důvod refreshe)

Článek 7× opakuje, že Bing je důležitý, protože „ChatGPT při webovém vyhledávání podle dostupných informací využívá index Bingu“. Je to v `answer`, v perexu, v H2 „Proč Bing pro AI vyhledávání“ i ve dvou FAQ.

Ověřeno u OpenAI (`developers.openai.com/api/docs/bots`, 8. 8. 2026):

- OAI-SearchBot: „OAI-SearchBot is used to surface websites in search results in ChatGPT's search features.“
- ChatGPT-User: „When users ask ChatGPT or a CustomGPT a question, it may visit a web page with a ChatGPT-User agent.“
- Dokumentace **nikde neuvádí Bing ani jiný cizí index**. OpenAI popisuje vlastního robota, který weby pro vyhledávání v ChatGPT sbírá.

Závěr pro článek: netvrdit opak (že Bing ChatGPT nepohání — to taky nevím), ale **přestat na té premise stavět**. Formulace „podle dostupných informací“ je slabá berlička u tvrzení, které nese celý článek.

**Interní nekonzistence:** `chatgpt-seo` už opatrnější formulaci má („Bing bývá praktickým signálem dohledatelnosti… Neznamená to ale, že indexace v Bingu citaci zajistí“). `bing-seo-pro-ai` zůstal na staré verzi → korpus si odporuje.

Náhradní, doložitelný důvod: **Microsoft své AI plochy dokumentuje sám** a citace z nich jde měřit (viz nález 3).

## Nález 2 — IndexNow není „protokol podporovaný Bingem“. Míří i na Seznam.cz

Článek IndexNow 5× popisuje jako bingový. Ověřeno ve strojovém registru protokolu `indexnow.org/searchengines.json` (8. 8. 2026) — účastníci:

| Účastník | Endpoint |
|---|---|
| Bing | `www.bing.com/indexnow` |
| **Seznam.cz** | `search.seznam.cz/indexnow` |
| Yandex | `yandex.com/indexnow` |
| Naver | `searchadvisor.naver.com/indexnow` |
| Yep | `indexnow.yep.com/indexnow` |
| Internet Archive | `web-static.archive.org/indexnow` |
| Amazon | `indexnow.amazonbot.amazon/indexnow` |

**Google v seznamu není.**

Registr sám o sobě nestačí (mohl by být zastaralý), takže ověřeno i živě — `https://search.seznam.cz/indexnow/meta.json` vrací **HTTP 200** a plnou konfiguraci: `"api":"https://search.seznam.cz/indexnow"`, `"name":"seznam"`, publikované IP rozsahy (IPv4 i **IPv6**) a veřejné klíče. Není to zapomenutý záznam, je to živá implementace.

Pro český web je to podstatnější než pro kohokoli jiného a **v celém korpusu to nikde není** — IndexNow zmiňuje 5 článků (`ai-seo-migrace-redesign`, `bing-seo-pro-ai`, `chatgpt-seo`, `geo-optimalizace`, `seo-nastroje-2026`), článek `seznam-cz-ai-vyhledavani` o IndexNow nemá ani slovo.

Vedlejší zjištění: publikované IP rozsahy Seznamu obsahují IPv6 — v [měření deseti oficiálních souborů](/blog/overovani-ai-robotu/) z 8. 8. 2026 měl IPv6 z AI provozovatelů jen Google.

Limit, který v článku musí zaznít: IndexNow **negarantuje indexaci**. FAQ protokolu: „Submitting a URL does not guarantee immediate indexing“ — vyhledávač pak sám váží crawl kvótu, plánování a kvalitativní signály.

## Nález 3 — chybějící odkaz na vlastní článek o měření (slepá ulička)

`bing-ai-performance-report` (published 2026-08-03, 1296 slov) report AI Performance detailně pokrývá včetně grounding queries i výhrady, že Microsoft data označuje za vzorek.

Stav prolinkování:

- `bing-ai-performance-report` → `bing-seo-pro-ai`: **1×**
- `bing-seo-pro-ai` → `bing-ai-performance-report`: **0×**

Tutoriál tedy končí bez měření, přestože o pět dní mladší článek měření řeší. **Report v refreshi nevysvětluju znovu** — jen na něj navazuju jako na další krok.

Primární zdroj k reportu (ověřeno 8. 8. 2026, blogs.bing.com, únor 2026): veřejná preview, pokrývá „Microsoft Copilot, AI-generated summaries in Bing, and select partner integrations“, metriky Total Citations, Average Cited Pages, Grounding Queries. Explicitní výhrada Microsoftu: citace „does not indicate ranking, authority, or the role of any page within an individual answer“.

## Co refresh udělá

1. Přepíše premisu: důvod řešit Bing = **doložené plochy Microsoftu** (Copilot, AI shrnutí v Bingu), ne nedoložitelný vztah k ChatGPT. Otevřená oprava v Insightu, datovaná.
2. Doplní **Seznam.cz a další účastníky IndexNow** — nejužitečnější nová informace pro české čtenáře, ověřená ze dvou míst.
3. Naváže na `bing-ai-performance-report` jako na krok „a teď to změřte“ (obousměrný odkaz).
4. Sladí míru opatrnosti s `chatgpt-seo`.
5. Rozšíří z 655 slov.

## Co refresh neudělá

- Netvrdí, že Bing ChatGPT nepohání. Tvrdí jen, že to v dokumentaci OpenAI není.
- Nevysvětluje report AI Performance podruhé.
- Neslibuje, že IndexNow = indexace.

## Zdroje

- `https://developers.openai.com/api/docs/bots` — OAI-SearchBot, ChatGPT-User (8. 8. 2026)
- `https://www.indexnow.org/searchengines.json` — strojový registr účastníků (8. 8. 2026)
- `https://search.seznam.cz/indexnow/meta.json` — živý endpoint Seznamu, HTTP 200 (8. 8. 2026)
- `https://www.indexnow.org/faq` — negarantovaná indexace
- `https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview`
