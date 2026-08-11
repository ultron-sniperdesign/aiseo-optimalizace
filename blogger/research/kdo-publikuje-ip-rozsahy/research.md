# Research — Kdo z provozovatelů AI robotů publikuje IP rozsahy

Datum měření: **11. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `kdo z ai provozovatelu publikuje ip rozsahy`

Navazuje na [ověřování AI robotů](/blog/overovani-ai-robotu/) (8. 8., pět provozovatelů) a na [Bytespider](/blog/bytespider-ceska-media/) (10. 8.), kde jsem u ByteDance seznam nenašel. Tady jsem rozsah rozšířil na **13 provozovatelů a 18 souborů**.

## Metodika

Pro každého provozovatele jsem zkusil jeho dokumentovanou nebo konvenční adresu a u odpovědi **nekontroloval jen stavový kód** — poučeno z [měření llms.txt](/blog/llms-txt-falesne-pozitivni/). Rozhodovalo, jestli je odpověď platný JSON a jestli v něm jsou prefixy. Zaznamenán počet prefixů, kolik z nich IPv6 a datum uvnitř souboru.

## Výsledek A — strojově čitelný JSON: 13 souborů u 8 provozovatelů

| Provozovatel | Soubor | Prefixů | z toho IPv6 | Datum v souboru | Stáří |
|---|---|---|---|---|---|
| Google | vyvolaní uživatelem | 1 056 | 528 | 2026-08-11 | 0 dní |
| DuckDuckGo | DuckAssistBot | 481 | 0 | 2026-07-03 | 39 dní |
| Google | Googlebot | 315 | 146 | 2026-08-11 | 0 dní |
| Google | zvláštní roboti | 270 | 135 | 2026-08-10 | 1 den |
| OpenAI | ChatGPT-User | 256 | 0 | 2026-08-10 | 1 den |
| OpenAI | OAI-SearchBot | 35 | 0 | 2026-01-02 | 221 dní |
| Microsoft | Bingbot | 28 | 0 | 2024-01-03 | 951 dní |
| OpenAI | GPTBot | 21 | 0 | 2025-10-30 | 285 dní |
| Anthropic | ClaudeBot a spol. | 20 | 0 | 2026-05-01 | 102 dní |
| Apple | Applebot | 12 | 0 | 2023-10-27 | 1 019 dní |
| Perplexity | PerplexityBot | 8 | 0 | 2025-02-07 | 550 dní |
| Common Crawl | CCBot | 6 | 1 | 2026-08-04 | 7 dní |
| Perplexity | Perplexity-User | 4 | 0 | 2025-10-17 | 298 dní |

Celkem **2 512 prefixů**.

## Výsledek B — Amazon publikuje, ale jako HTML stránku

**Tohle je nález, na kterém jsem se málem spálil.** V prvním kole mi Amazon vyšel jako „nepublikuje" — protože jsem hledal `.json` na adresách, které jsem si vymyslel podle konvence ostatních.

Amazon ale IP adresy publikuje, jen jinak: tři HTML stránky v dokumentaci.

| Stránka | Co v ní je |
|---|---|
| `developer.amazon.com/amazonbot/ip-addresses/` | 525 samostatných IP adres |
| `developer.amazon.com/amazonbot/searchbot-ip-addresses/` | 512 zápisů v CIDR (samé `/32`) |
| `developer.amazon.com/amazonbot/live-ip-addresses/` | 1 024 samostatných IP adres |

Potřetí za tři runy mě zachránilo, že jsem odhad ověřil (po Anthropicu a ByteDance). **Do článku to patří jako pointa, ne jako poznámka pod čarou.**

## Výsledek C — nenašel jsem u čtyř

ByteDance, Meta, Mistral, Cohere. U všech platí formulace **„nenašel jsem", ne „neexistuje"**.

Zvlášť stojí za zmínku **Meta**: v dokumentaci k webovým crawlerům výslovně doporučuje allow-listovat spíš IP adresy než user-agenty (*„Add to your allow list either the user agent strings or the IP addresses (more secure) used by the crawler"*), ale **žádný seznam adres tam neuvádí** — odkazuje na kontakt. Doporučí tedy postup, ke kterému nedá podklad.

## Dvě opravy mých vlastních tvrzení

Článek `overovani-ai-robotu` (8. 8.) tvrdí dvě věci, které tohle měření vyvrací:

1. **„Common Crawl použitelný strojový seznam na obvyklé adrese nemá."** Má — `commoncrawl.org/ccbot.json`, 6 prefixů, `application/json`, aktualizovaný 4. 8. 2026. Hledal jsem špatně.
2. **„IPv6 zveřejňuje jen Google. Ostatní mají seznamy čistě IPv4."** Není to tak: **CCBot má jeden IPv6 prefix** ze šesti. Uvnitř tehdejšího vzorku pěti provozovatelů to platilo, ale věta je napsaná obecně.

Obojí opravím přímo v tom článku otevřeným boxem, ne potichu.

## Co článek vytěží

1. **Formát rozhoduje.** Osm provozovatelů dává JSON, Amazon HTML stránku. Kdo si napíše kontrolu nad JSON, Amazonu si nevšimne — přesně jako já.
2. **Stáří se liší o skoro tři roky.** Google aktualizuje denně, Applebot nese datum z října 2023 a Bingbot z ledna 2024.
3. **IPv6 prakticky chybí.** Mimo Google jediný prefix u CCBotu. Robot přes IPv6 tedy proti těmhle souborům obvykle neověříte.
4. **Roboti vyvolaní uživatelem mají mnohem širší prostor** — Google 1 056 proti 315, OpenAI 256 proti 21.

## Limity

- Jeden odečet, 11. 8. 2026; čísla i data se mění (ChatGPT-User měl 8. 8. ještě 258 prefixů, teď 256).
- Sledoval jsem 13 provozovatelů, ne všechny existující roboty.
- U čtyř nenalezených jsem zkoušel konvenční adresy a u Mety i dokumentaci; nemůžu vyloučit, že seznam existuje jinde.
- Neměřil jsem, jestli roboti z těch rozsahů skutečně chodí. Měřím dostupnost dokumentace, ne provoz.
- Počty prefixů u Amazonu jsou z HTML stránky, tedy z parsování textu, ne ze strukturovaného souboru.

## Zdroje

- vlastní měření: `ipranges_results.json`, `ipranges_summary.json`, `amazon_ip.json`, skript `ipranges.py`
- `developers.facebook.com/documentation/sharing/webmasters/web-crawlers` (čteno 11. 8. 2026)
- `developer.amazon.com/amazonbot/` a tři podstránky s IP adresami
