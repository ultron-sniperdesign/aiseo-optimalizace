# Research — refresh `cloudflare-ai-bot-blocking` (23. 11. 2026)

**Typ runu:** refresh jednoho článku (série 10 runů z 22. 11. 2026, run 2; pořadí přeskládané rozhodnutím Kamila
23. 11. — Codex do 24. 11. bez limitu, audity přes nezávislé Claude subagenty). **Proč tenhle:** Refresh 2 z revize plánu
30. 10. 2026 („věcná chyba s rizikem pro e-shopy“). Článek z 19. 7., naposledy 2. 8. 2026.

**Audity:** `audit1-refresh-2026-11-23.md`, `audit2-refresh-2026-11-23.md`, vypořádání `vyporadani-refresh-2026-11-23.md`.

**GSC 15. 7.–20. 11. 2026:** 26 zobrazení, 0 kliků, průměrná pozice 5,6; dotazy anonymizované, na „cloudflare“ web
nic nevykazuje. Hodnota refreshe je věcná oprava, ne dosah. **Titulek se nemění.**

## Vady verze z 2. 8. 2026

| # | Místo | Vada |
|---|---|---|
| 1 | answer, úvod, FAQ 2, sekce „Co se změnilo“, chyba 02 | 15. 9. 2026 v budoucím čase („dostávají / mají dostat“) |
| 2 | box „Máte existující doménu? Žádná panika“ | výchozí hodnoty se týkaly nových domén, ale blokace smíšených robotů (Googlebot, Applebot, Bingbot podle oznámení) se týká **každé** domény s blokací Training — box to vyvracel |
| 3 | celý článek | Googlebot nikde jmenovitě; čtenář nepozná, že blokace Training může vzít i klasické vyhledávání |
| 4 | — | chybí cesta, jak trénink omezit bez zásahu do smíšených robotů (Disallow + Bot Preference Sync) |
| 5 | Postup | nastavení se od 4. 11. jmenuje AI Crawler and Agent access policies (Security → Settings → Bot traffic) |
| 6 | — | chybí osobní agenti (4. 11.) a Pay Per Use (beta 30. 9.) |
| 7 | H2 | bez povinného formátu `hl` + `strong` |
| 8 | `vydelavat-na-ai-robotech` (description, FAQ, ř. 116, 118, 121, 125, 185) | totéž tvrzení o 15. 9. — opraveno souběžně podle pokynu revize, jen tahle vada; zastaralý stav Pay Per Use a Monetization Gateway (beta od 30. 9.) zůstává pro Refresh 7 |

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Zdroj, načteno 22.–23. 11. 2026 |
|---|---|---|
| Dokumentace | **AI Crawler and Agent access policies** (Last updated Nov 2, 2026): chování Search, Agent, Training („Training … including mixed-purpose crawlers that are used both for Training and for Search“); akce Block, Block on pages with ads, Allow (do not block), **Disallow** (jen Training, přes robots.txt; „When Bot Preference Sync is enabled, Disallow also blocks AI training crawlers at Cloudflare's edge. Mixed-purpose crawlers used for both Search and Training are excluded from this edge block.“); cesta Security > Settings, filtr Bot traffic; **„For new domains, Search, Agents, and Training use Allow (do not block) by default.“**; „Training actions also apply to mixed-purpose crawlers…“; osobní agenti přebírají politiku Agents, Cloudflare doporučuje Allow | developers.cloudflare.com/bots/additional-configurations/block-ai-bots/ |
| Dokumentace | **Bot Preference Sync** (robots.txt setting, Last updated Nov 2, 2026): s Training na Disallow přidá spravované direktivy (v ukázce Disallow pro Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, Google-Extended, GPTBot, meta-externalagent) a zapne blokaci tréninkových robotů na hraně; „Mixed-use crawlers are excluded from this edge block.“ | developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/ |
| Dokumentace | změnový log Bots: 1. 7. 2026 tři chování pro všechny plány včetně Free; ohlášení výchozích hodnot pro nové domény a smíšených robotů k 15. 9.; **k 15. 9. 2026 žádný záznam** (další záznamy 31. 8., 16. 9., 19. 10. …); 4. 11. 2026 „The Configure AI bot policies setting is now named AI Crawler and Agent access policies“ + samostatné nastavení nejčastějších osobních agentů | developers.cloudflare.com/changelog/product/bots/ |
| Dokumentace | blog 1. 7. 2026 (Content Independence Day): k 15. 9. nové domény Training a Agent blokované na stránkách s reklamou; „multi-purpose crawlers such as Googlebot, Applebot, and BingBot will be blocked by customers who have selected to block Training (either through the new options to manage AI traffic, or through the legacy Block AI bots service)“; možnost odmítnout v Security settings do 15. 9. | blog.cloudflare.com/content-independence-day-ai-options/ |
| Dokumentace | blog 30. 9. 2026: Pay Per Use v betě (kupec nabídne cenu za použití obsahu, vydavatel přijme, nebo odmítne, kupec použití hlásí, Cloudflare mu účtuje a vydavateli platí měsíčně; v betě přímo s kupci a přihlášenými vydavateli, protinávrh ceny teprve v plánu), Monetization Gateway v betě | blog.cloudflare.com/pay-per-use/ |
| Dokumentace | blog 4. 11. 2026: analytika a samostatné politiky pro osobní agenty, nový název sekce; při přidání nové zóny se Cloudflare ptá, jestli web vydělává reklamou, a podle toho upraví doporučené politiky | blog.cloudflare.com/personal-agents-visibility-control |
| Dokumentace | AI Crawl Control: jednotlivé AI roboty jde dál povolit nebo blokovat (všechny plány); stránka robots.txt setting ho k vynucení blokace vybraných robotů doporučuje; spravovaný robots.txt je na všech plánech, Content Signals s výhradou podle čl. 4 směrnice 2019/790 | developers.cloudflare.com/ai-crawl-control/, …/managed-robots-txt/ |
| Dokumentace | Search Console: přehled Statistiky procházení — „(Nastavení služby) > Statistiky procházení“, jen pro služby na kořenové úrovni; tabulka Odpověď (OK (200), Jiná chyba klienta (4XX)); požadavky, které na server nedošly, v jeho logu nejsou | support.google.com/webmasters/answer/9679690?hl=cs |
| Rozhraní (UI) | **prázdné** — do Cloudflare ani do Search Console webu s Cloudflare jsem se nepřihlašoval; postup je podle dokumentace | — |
| Nelze ověřit | jak Cloudflare dnes zařazuje konkrétně Googlebot (adresář robotů na radar.cloudflare.com vrací ochranu proti robotům, neobcházeno); proč dokumentace u nových domén uvádí Allow místo ohlášených výchozích hodnot | — |

## Tabulka podmínek

| Tvrzení | Podmínka |
|---|---|
| Blokace Training zasáhne Googlebot | jmenovitě jen v oznámení z 1. 7. 2026; dokumentace 2. 11. obecně „smíšení roboti“ |
| Disallow + Bot Preference Sync nechá Googlebot projít | dokumentace: smíšení roboti jsou z blokace na hraně vynechaní; robots.txt je pro roboty dobrovolný |
| Nové domény mají všechno povolené | dokumentace k 2. 11. 2026; ohlášení z července uvádělo jiné hodnoty |
| Dostupné na Free plánu | změnový log 1. 7. 2026 |
| Pay Per Use | beta od 30. 9. 2026, Cloudflare pracuje přímo s kupci a s vydavateli, kteří se přihlásí |
| Blokace Search a volba Block on pages with ads u Training zasáhnou Googlebot | podle oznámení z 1. 7. 2026 (smíšení roboti se posuzují podle nejpřísnějšího pravidla); u reklamy jen na stránkách, kde ji Cloudflare rozpozná |
| Nová doména dostane doporučené nastavení | blog 4. 11. 2026 (otázka na reklamu při přidání zóny); dokumentace 2. 11. uvádí výchozí Allow |
| Zářijovou změnu šlo odmítnout | do 15. 9. 2026 v nastavení (změnový log, blog 1. 7.) |
| Spravované zákazy v robots.txt | jen se zapnutým Bot Preference Sync (stránka robots.txt setting) |
| Vynucení na Cloudflare | jen pro roboty, které Cloudflare rozpozná (ověřené a odpovídající neověřené) |
| Statistiky procházení | jen služby typu Doména nebo s předponou URL na kořenové úrovni; popis podle nápovědy, do Search Console jsem se nepřihlašoval |
| Blokace v logu serveru | zablokovaný požadavek na server nedojde, v logu chybí (ne 403) |
| Blokace podle jména robota | dál možná v AI Crawl Control (dokumentace) |
| Osobní agenti nastavení zvlášť | změna celé kategorie Agent jejich jednotlivé nastavení přepíše (dokumentace) — v postupu nejdřív kategorie, pak agenti |
| Zařazení Googlebotu | Cloudflare ho zveřejňuje v adresáři na Cloudflare Radar — neověřeno (ochrana proti robotům, neobcházeno) |
