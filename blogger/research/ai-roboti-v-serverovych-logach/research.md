# Rešerše — AI roboti v serverových lozích

**Datum:** 22. 10. 2026  
**Typ:** nový článek, `tutorial`  
**Řádek plánu:** 158 — `log analyza ai robotu`  
**Pracovní slug:** `ai-roboti-v-serverovych-logach`

## Co je ověřeno a čím

- **Dokumentace:** účely robotů, IP rozsahy, formát logů, Google-Extended a podmínky Cloudflare byly ověřeny v primárních dokumentacích uvedených níže; načteno 22. 10. 2026.
- **Rozhraní:** aktuální cena Packu byla ověřena v kanonickém modulu `src/content/pages/pack.ts` a na živé stránce https://aiseo-optimalizace.cz/pack/ dne 22. 10. 2026.
- **Měření:** příkazy `awk` a Python byly spuštěny nad kontrolním logem ve formátu `combined`; filtr správně odmítl jméno robota v URL i refereru. Marketing Miner a Trends jsou popsány v oddílu Keyword research.
- **Nelze ověřit:** historickou identitu IP, která už není v aktuálním seznamu, ani následné použití konkrétního stažení platformou; článek tyto závěry netvrdí.

## Podmínky tvrzení o cizích platformách

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| OpenAI rozlišuje OAI-SearchBot, GPTBot a ChatGPT-User | jméno je pouze první filtr; IP se porovnává se seznamem správným pro daného agenta | účel v přehledu musí odpovídat jménu i použitému IP seznamu | při povolení OAI-SearchBotu i GPTBotu může OpenAI použít výsledek jednoho procházení pro oba účely; OAI-AdsBot je mimo rozsah návodu | https://developers.openai.com/api/docs/bots |
| Anthropic rozlišuje ClaudeBot, Claude-SearchBot a Claude-User | jméno je pouze první filtr; IP se porovnává se společným aktuálním seznamem Anthropic | označení účelu musí odpovídat user-agentu | dnešní seznam nemusí dokazovat stav historické IP | https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler · https://claude.com/crawling/bots.json |
| Perplexity rozlišuje PerplexityBot a Perplexity-User | pro každé jméno se používá jeho vlastní zveřejněný seznam IP | automatické procházení a požadavek vyvolaný uživatelem se vedou odděleně | dnešní seznam nemusí dokazovat stav historické IP | https://docs.perplexity.ai/docs/resources/perplexity-crawlers |
| Google-Extended řídí použití obsahu v některých generativních funkcích | jde o token v `robots.txt`, ne o HTTP user-agent | požadavky se v logu zobrazí pod existujícími user-agenty Googlu | z řádku Googlebota nelze oddělit klasické vyhledávání od režimu AI | https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers |
| Přehled CDN může zahrnout požadavky, které původní server neviděl | požadavek skončil v mezipaměti nebo byl zastaven na okraji sítě | období a rozsah přehledu se musí shodovat s porovnávanými daty | úplnější pokrytí samo nedokazuje ověřenou identitu robota | https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/#quality-of-ai-crawler-detection |
| `CF-Connecting-IP` obsahuje původní IP klienta | původní server přijímá hlavičku pouze ze současných rozsahů Cloudflare; přímý přístup je blokovaný nebo oddělený | konfigurace obnovy IP i formát logu musí používat stejnou důvěryhodnou hlavičku | klient připojený přímo k původnímu serveru může hlavičku podvrhnout | https://developers.cloudflare.com/support/troubleshooting/restoring-visitor-ips/restoring-original-visitor-ips/ |

## Otázka článku

Jak si majitel nebo správce běžného webu bez hotového přehledu od CDN vytáhne z přístupového logu požadavky AI robotů, ověří jejich identitu a pozná, zda procházejí užitečné URL, chyby nebo zbytečný prostor webu.

## Kolizní kontrola

- `/blog/ai-roboti-zatez-webu/` vysvětluje poměr procházení k návštěvám a odkazuje uživatele bez Cloudflare do logů, ale vlastní práci s logem neukazuje.
- `/blog/overovani-ai-robotu/` vysvětluje ověření jména podle IP a u Googlu DNS; nový článek na něj odkáže, ale nebude znovu přepisovat celé měření rozsahů.
- `/blog/kdo-publikuje-ip-rozsahy/` porovnává dostupnost seznamů IP; nový článek použije pouze obecný princip a aktuální oficiální odkazy.
- `/blog/cachovani-pro-ai-roboty/` řeší zlevnění obsluhy požadavků; nový článek z něj vezme jen navazující rozhodnutí podle výsledku logu.
- Výsledek: samostatný praktický návod je obsahově volný. Rozsah je omezen na získání, filtrování a čtení přístupového logu.

## Keyword research

Marketing Miner, 22. 10. 2026:

- suggestions `serverové logy`: 0 návrhů;
- suggestions `AI roboti`: 212 deduplikovaných návrhů, ale výsledky míří téměř celé na fyzické a konverzační roboty, takže neodpovídají záměru článku;
- přesná hledanost: `nginx access log` 20/měsíc, `apache access log` 10, `access log` 10, `ai crawler` 10; devět českých long-tailů včetně `serverové logy`, `analýza serverových logů`, `jak najít ai roboty` a `user agent ai robot` bez dat;
- spotřeba: 119 kreditů.

Google Trends a našeptávače:

- pětiletý průměr v ČR je u `access log` 2,8 indexového bodu, u ostatních měřených výrazů 0;
- jediný související rising query je `nginx access log format`;
- autocomplete potvrzuje záměr kolem formátu a umístění logu (`nginx access log format`, `nginx access log location`, `apache access logs location`, `apache access log fields`) a u `ai crawler` kolem významu, robots.txt a kontroly přístupu;
- Wikipedia výsledek pro `access log` vedl chybně na Access Control List a není použitelný;
- závěr: téma je úzké a technické. Titulek má používat českou formulaci pro čtenáře, `access log` a názvy serverů patří do textu a klíčových slov.

## Ověřené technické body

1. Přístupový log zaznamenává požadavky zpracované serverem. U Apache jeho umístění a obsah řídí `CustomLog` a `LogFormat`; běžný `combined` formát přidává referer a user-agent. U Nginxu je výchozí formát také `combined` a obsahuje IP, čas, požadavek, stav, velikost odpovědi, referer a user-agent.
2. Pokud log neobsahuje user-agent, samotné IP nestačí k prvotnímu rozdělení provozovatelů. Pokud je web za reverzní proxy, původní server může zapisovat adresu proxy místo návštěvníka. Cloudflare předává původní adresu v `CF-Connecting-IP`; server ji musí správně obnovit nebo logovat.
3. Jméno v user-agentu je jen tvrzení a lze ho podvrhnout. Ověřuje se proti právě publikovanému seznamu IP, případně u Googlu reverzním a zpětným DNS.
4. OpenAI rozlišuje OAI-SearchBot (vyhledávání), GPTBot (možné použití pro trénink) a ChatGPT-User (načtení vyvolané uživatelem). Každý má samostatný účel a zveřejněný seznam IP.
5. Anthropic rozlišuje ClaudeBot, Claude-SearchBot a Claude-User; zveřejňuje jeden aktuální seznam adres pro své roboty.
6. Perplexity rozlišuje PerplexityBot pro vyhledávání a Perplexity-User pro návštěvy na pokyn uživatele a publikuje samostatné seznamy adres.
7. `Google-Extended` se v HTTP požadavcích jako samostatný user-agent neobjevuje. Je to řídicí token pro robots.txt; procházení probíhá pod existujícími user-agenty Googlu. Z logu Googlebota proto nelze oddělit běžné Google vyhledávání od funkcí s generativní AI.
8. Jeden součet nestačí. Prakticky je potřeba rozpad podle jména robota, požadované URL, stavového kódu a zdrojové IP. Užitečné signály: mnoho 404/5xx, parametrové a interní vyhledávací URL, nečekaně mnoho assetů, jediná IP s nepřiměřeným objemem, nebo opakované stahování stejné URL.
9. Poměr procházení k návštěvám nelze spočítat jen z přístupového logu. Čitatel je počet ověřených požadavků robota; návštěvy lidí z dané platformy se berou z analytiky a musí se uvést období i kanál/referrer. ChatGPT-User a Perplexity-User navíc nejsou totéž jako automatické procházení.
10. Apache upozorňuje, že log může obsahovat vstup dodaný klientem a řídicí znaky. Surový log se má zpracovávat jako nedůvěryhodná data; nesdílet celý soubor do veřejných nástrojů a nepouštět jeho obsah jako příkaz.

## Primární zdroje

- OpenAI — Overview of OpenAI Crawlers: https://developers.openai.com/api/docs/bots
- OpenAI — OAI-SearchBot IP list: https://openai.com/searchbot.json
- OpenAI — GPTBot IP list: https://openai.com/gptbot.json
- OpenAI — ChatGPT-User IP list: https://openai.com/chatgpt-user.json
- Anthropic — crawler purposes and controls: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Anthropic — published ranges: https://claude.com/crawling/bots.json
- Perplexity — crawler documentation and ranges: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Google — verification by IP/DNS: https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests
- Google — common crawlers and Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- Nginx — access log and combined format: https://nginx.org/en/docs/http/ngx_http_log_module.html
- Apache HTTP Server — log files and combined format: https://httpd.apache.org/docs/2.4/logs.html
- Cloudflare — restoring original visitor IP: https://developers.cloudflare.com/support/troubleshooting/restoring-visitor-ips/restoring-original-visitor-ips/
- Cloudflare — verified bot definition and classification: https://developers.cloudflare.com/bots/concepts/bot/verified-bots/

## Trend research mimo článek

- Přidán nový řádek plánu `google ugc fresh data program`; primární dokumentace Googlu z 8. 10. 2026 popisuje nový, výběrový kanál pro velké platformy s aktuálním uživatelským obsahem. Téma v plánu ani korpusu nebylo.
- Novinka Seznamu z 15. 10. 2026 (Seznam AI už využívají statisíce uživatelů týdně a připojilo Sreality.cz) patří do aktualizace existujícího `/blog/seznam-cz-ai-vyhledavani/`; nový duplicitní řádek nepřidán a článek v tomto runu neupravován.
- Pilot Cloudflare + OpenAI z 15. 10. 2026 už má samostatný otevřený řádek `cloudflare openai discovery pilot`.

## Limity

- Článek nebude tvrdit, že seznam IP dokazuje konkrétního koncového uživatele; potvrzuje síť provozovatele.

## Doplnění po faktickém auditu (22. 10. 2026)

- `CF-Connecting-IP` je důvěryhodná pouze u spojení z aktuálních rozsahů Cloudflare; přímý přístup k původnímu serveru musí být blokovaný nebo oddělený, jinak může klient hlavičku podvrhnout.
- Přehled CDN zlepšuje pokrytí o požadavky obsloužené nebo zastavené na okraji sítě. Sám však nemusí dokazovat identitu: Cloudflare u AI Crawl Control na bezplatném tarifu uvádí detekci podle user-agentu, zatímco důkladnější detection ID patří k Bot Managementu. Zdroj: https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/#quality-of-ai-crawler-detection
- Jména robotů označují deklarovaný hlavní účel a samostatné řízení, ne jistotu následného použití konkrétního stažení. OpenAI může při povolení OAI-SearchBotu i GPTBotu použít výsledek jediného procházení pro oba účely.
- OpenAI uvádí také `OAI-AdsBot` pro kontrolu bezpečnosti a relevance reklamních vstupních stránek. Pro obsahovou analýzu v článku je mimo rozsah, ale výčet nesmí působit jako úplný seznam všech robotů OpenAI.
- První filtr musí číst jen pole user-agentu. Celý řádek obsahuje také URL a referer, takže obyčejný `grep` může zachytit běžného návštěvníka se jménem robota v cestě nebo refereru.
- Třicet dní je příklad výchozího období, nikoli obecné minimum. U málo navštěvovaného webu je vhodné období prodloužit; porovnání vyžaduje stejně dlouhá a úplná okna.
- Historický log může obsahovat adresu, která už v aktuálním seznamu není. Negativní výsledek proto není absolutní důkaz podvrhu.
- Původní server za CDN nevidí požadavky, které CDN vyřídila z cache. Návod je primárně pro web bez hotového přehledu CDN a pro požadavky, které se skutečně dostaly na server.
- Výchozí formát logu lze změnit. Příkazy počítají s formátem podobným Apache/Nginx `combined`; článek to výslovně uvede.
