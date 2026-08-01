# Research — může web vydělávat na AI robotech

**Řádek plánu:** `pay per crawl monetizace`
**Datum:** 2026-08-01 · **Kategorie:** analysis · **Tagy:** technicke-zaklady, strategie

> Zadání v plánu výslovně žádalo: *„Ověřit stav bety a jestli existují reálná čísla výdělků.
> NESLIBOVAT výdělek."* Tenhle research je odpovědí na obojí.

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `cloudflare-ai-bot-blocking` (19. 7. 2026) | Tři kategorie chování robotů, termín 15. 9., jak to nastavit | **Sousedí, neduplikuje.** Tam *jak zablokovat*, tady *jestli se dá místo blokování inkasovat*. Prolinkovat. **Pozn.: článek je zároveň kandidát na refresh** — termín 15. 9. je teď blíž a tisková zpráva Cloudflare upřesnila, co přesně se změní. |
| `ai-crawler-robots-txt` (refresh 28. 7. 2026) | Které roboty povolit, tabulka botů, chystané standardy | Sousedí. Robots.txt je rozhodnutí ano/ne, tohle je rozhodnutí za kolik. |
| `ai-roboti-zatez-webu` (19. 7. 2026) | Poměr procházení k návštěvám, jak si změřit vlastní číslo | **Přímý předstupeň.** Kdo neví, kolik ho roboti projdou, nemá co monetizovat. Prolinkovat jako první krok. |
| Nic na `pay per crawl`, `x402`, `402 Payment Required` | — | **Téma volné.** |

---

## 2. Primární zdroje — co Cloudflare skutečně oznámil

### Monetization Gateway (blog.cloudflare.com, 1. 7. 2026)

| Údaj | Znění |
|---|---|
| Co to je | „An engine that will give Cloudflare customers the ability to charge for any asset protected by Cloudflare: web pages, datasets, APIs, or MCP tools" |
| Mechanika | protokol **x402** nad stavovým kódem **HTTP 402 Payment Required**: server místo obsahu vrátí 402 s cenou, přijímaným aktivem a adresou k platbě; klient zaplatí a požadavek zopakuje s dokladem |
| Nastavení | výrazy (expressions) jako u ostatních pravidel Cloudflare, přes vlastní API |
| Platba | **stablecoiny** (uvádí se Open USD, USDC), vypořádání peer-to-peer přímo do peněženky prodávajícího |
| Rozdíl proti Pay Per Crawl | „instead of only charging crawlers for content, you will be able to charge **any caller for any resource**" |
| **Dostupnost** | **čekací listina** — „The Monetization Gateway waitlist is open now for Cloudflare customers" |
| Podíl Cloudflare / ceník | **v oznámení neuveden** |
| Podmínka | být zákazník Cloudflare, aktiva za Cloudflare |

### Tisková zpráva Cloudflare (1. 7. 2026)

| Údaj | Znění |
|---|---|
| Pay Per Use | posun od Pay Per Crawl: vydavatel dostane zaplaceno, „when their content actually creates value, not just when it's fetched" |
| Jmenovaní partneři | **Ceramic.ai, You.com, beehiiv, Condé Nast, Patreon** |
| Stav Pay Per Use | **testuje se s partnery**, „plans to make them broadly available later this year" |
| Změna od 15. 9. 2026 | výchozí nastavení povolí vyhledávání, ale **zablokuje trénink a agentní použití u stránek s reklamou**; roboti, kteří obojí neoddělí, budou na stránkách s reklamou blokovaní. Stávající zákazníci na free tarifu, kteří nastavení nezmění, je dostanou automaticky |
| Podmínka pro vydavatele | musí se **přihlásit** (opt in) |
| **Čísla výdělků** | **V tiskové zprávě nejsou žádná.** |

---

## 3. ⛔ Co se ověřit nepodařilo — a je to jádro článku

**Sekundární zdroj uváděl, že weby s vysokou návštěvností mohou z AI robotů
vydělávat 50 000 až 200 000 dolarů měsíčně.**

- V blogpostu Cloudflare k Monetization Gateway **není**.
- V tiskové zprávě Cloudflare **není**.
- Není uvedeno, čí je to odhad, na jakém vzorku ani co znamená „vysoká návštěvnost".

**Do článku nešlo.** Je to přesně ten typ čísla, proti kterému stojí
`/blog/jak-cist-studie-o-ai-viditelnosti/`: nedohledatelné, bez jmenovatele,
a shodou okolností přesně to, co si chce publikum přečíst.

Dál se nepodařilo zjistit:

- jaký podíl si Cloudflare bere,
- jestli existuje jediný zveřejněný případ vyplacené částky,
- jestli je Pay Per Use dostupné mimo USA a mimo jmenované partnery,
- jestli některý velký provozovatel AI (OpenAI, Google, Anthropic, Perplexity) x402 platí.

Poslední bod je nejdůležitější: **nabídka bez doložené poptávky ještě není trh.**
**Pozor na obrácený přestřel:** „nepodařilo se doložit, že platí" není totéž jako
„neplatí". Audit tuhle záměnu v článku dvakrát vytkl; tady je záznam srovnaný.

---

## 4. Teze článku

> Infrastruktura pro placení za obsah vzniká rychle a je technicky přirozená.
> Pro běžný český web z ní ale dnes **není doložený příjem ani běžně dostupný způsob
> nasazení**: Monetization Gateway je na čekací listině, Pay Per Use se testuje s pěti
> zahraničními partnery, platí se ve stablecoinech a u žádného velkého provozovatele AI
> se nepodařilo doložit, že by takto platil.
>
> Co reálné je: **od 15. 9. 2026 se mění výchozí nastavení blokování** — a to se
> majitele webu na Cloudflare týká, i když nic neudělá.

Praktický závěr: neřešit monetizaci, ale (1) zjistit si vlastní poměr procházení
k návštěvám, (2) vědět, co se 15. 9. stane s výchozím nastavením, (3) rozhodnout se
o blokování, ne o ceníku.

---

## 5. Zdroje

- blog.cloudflare.com/monetization-gateway/ — Announcing the Monetization Gateway (1. 7. 2026)
- cloudflare.com/press — Cloudflare Allows the Agentic Internet to Flourish (1. 7. 2026)
- x402 — otevřený protokol nad HTTP 402 Payment Required
- vlastní články: `cloudflare-ai-bot-blocking`, `ai-roboti-zatez-webu`, `ai-crawler-robots-txt`
