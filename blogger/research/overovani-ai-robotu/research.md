# Research — jak poznat pravého AI robota od podvrhu

**Řádek plánu:** `overovani ai robotu`
**Datum měření:** 2026-08-08 · **Kategorie:** tutorial · **Tagy:** technicke-zaklady, mereni

---

## 1. Proč tenhle článek a proč teď

V [dílu 2 bloku Shoptet](/blog/shoptet-robots-txt-ai-roboti/) jsem stáhl homepage 47 e-shopů
s user-agenty GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot a CCBot. **Všech 47 vrátilo 200.**
V limitech článku jsem napsal, že jsem testoval jen řetězec user-agenta z běžné IP, ne ověřené
rozsahy. Tenhle článek ten limit uzavírá — a zároveň z něj dělá důkaz.

**Kolizní kontrola:** `ai-crawler-robots-txt` zmiňuje reverzní DNS dvakrát okrajově,
`caste-chyby-v-seo-2026-update` jednou. Samostatný článek o ověřování nemáme. **Téma volné.**

---

## 2. ⛔ První nález: adresu souboru nejde uhodnout

Anthropic jsem nejdřív hledal na `anthropic.com/claudebot.json` → **404**. Kdybych to publikoval,
tvrdil bych nepravdu, že Anthropic rozsahy nezveřejňuje. **Zveřejňuje je**, jen na
`https://claude.com/crawling/bots.json` — a tu adresu jsem našel až v jejich nápovědě.

Poučení do článku: seznam se hledá v dokumentaci provozovatele, ne odhadem podle domény.

---

## 3. ⛔ Měření — oficiální seznamy IP rozsahů (8. 8. 2026)

| Robot / zdroj | Prefixů | IPv4 | IPv6 | `creationTime` |
|---|---|---|---|---|
| GPTBot (OpenAI) | 21 | 21 | **0** | 2025-10-30 |
| OAI-SearchBot (OpenAI) | 35 | 35 | **0** | 2026-01-02 |
| ChatGPT-User (OpenAI) | 258 | 258 | **0** | 2026-08-07 |
| ClaudeBot a spol. (Anthropic) | 20 | 20 | **0** | 2026-05-01 |
| PerplexityBot | 8 | 8 | **0** | **2025-02-07** |
| Perplexity-User | 4 | 4 | **0** | 2025-10-17 |
| Googlebot | 315 | 169 | **146** | 2026-08-07 |
| Google special-crawlers | 270 | 135 | **135** | 2026-08-07 |
| Google user-triggered-fetchers | 1056 | 528 | **528** | 2026-08-07 |
| Applebot | 12 | 12 | **0** | **2023-10-27** |

**Adresy zdrojů:** `openai.com/gptbot.json`, `openai.com/searchbot.json`,
`openai.com/chatgpt-user.json`, `claude.com/crawling/bots.json`,
`perplexity.ai/perplexitybot.json`, `perplexity.com/perplexity-user.json`,
`developers.google.com/static/search/apis/ipranges/{googlebot,special-crawlers,user-triggered-fetchers}.json`,
`search.developer.apple.com/applebot.json`.

### Tři věci, které z tabulky plynou

1. **IPv6 zveřejňuje jen Google.** OpenAI, Anthropic, Perplexity i Apple mají seznamy čistě IPv4.
   ⛔ Praktický důsledek: robot přicházející přes IPv6 se proti těmhle seznamům nedá ověřit.
   ⛔ NETVRDIT, že přes IPv6 nechodí — to jsem neměřil, vím jen, že seznam ho neobsahuje.
2. **Stáří seznamů se liší v řádu let.** Google a ChatGPT-User mají `creationTime` z 7. 8. 2026,
   PerplexityBot z února 2025 a Applebot z října 2023. ⛔ NEDĚLAT z toho závěr o kvalitě
   provozovatele — starý soubor může znamenat i stabilní rozsahy.
3. **Velikost 8 až 1056 prefixů.** Uživatelem vyvolané načtení (ChatGPT-User 258,
   Google user-triggered 1056) je mnohem širší než plánované procházení (GPTBot 21).

---

## 4. ⛔ Vlastní důkaz, že user-agent nic nedokazuje

Při měření jsem si ověřil, že **moje veřejná IP nepatří do žádného z těch seznamů** (kontrola
proti všem deseti souborům, adresu neuvádím). Přesto jsem v dílu 2 z téhle adresy poslal
požadavky s user-agenty pěti AI robotů a **všech 47 e-shopů odpovědělo 200**.

To je celý argument v jedné větě: **řetězec user-agenta si nastaví kdokoli. Sám o sobě nedokazuje nic.**

---

## 5. Ověřeno u primárních zdrojů

**Google — „Verifying Googlebot and other Google crawlers":** dokumentuje dvě metody.
Ruční přes reverzní a zpětný DNS: „Run a reverse DNS lookup on the accessing IP address…
Verify that the domain name is either `googlebot.com`, `google.com`, or `googleusercontent.com`.
Run a forward DNS lookup on the domain name retrieved in step 1… Verify that it's the same as
the original accessing IP address." A automatickou přes porovnání se zveřejněnými rozsahy.

**Anthropic — nápověda ke crawlerům:** „If a crawler has a source IP address on this list,
it indicates that the crawler is coming from Anthropic." Reverzní DNS jako metodu ověření
**neuvádí**. Dokumentuje user-agenty `ClaudeBot`, `Claude-User`, `Claude-SearchBot`.
Zároveň varuje, že blokování podle IP „may not work correctly or persistently guarantee
an opt-out, as doing so impedes our ability to read your robots.txt file".

⛔ Rozdíl je podstatný: **u Googlu jde reverzní DNS, u ostatních je doporučená cesta seznam IP.**

---

## 6. ⛔ Limity

1. **Jeden odečet, 8. 8. 2026.** Seznamy se mění; čísla platí k tomu dni.
2. **Neměřil jsem, jestli roboti opravdu chodí z těch rozsahů** — měřil jsem, co provozovatelé
   zveřejňují.
3. **Neověřoval jsem reverzní DNS v praxi** u jednotlivých robotů, jen co o něm píše dokumentace.
4. ⛔ **NETVRDIT, že roboti mimo seznam jsou podvrh.** Seznam může být neúplný nebo zastaralý.
5. Web Bot Auth a podepsané požadavky jsou stále ve vývoji — v `ai-crawler-robots-txt` je to
   označené jako draft a tady se to nemění.

---

## 7. Teze článku

> Blokovat AI robota podle jména v user-agentu je jako pouštět lidi do budovy podle toho, co si
> napsali na jmenovku. Sám jsem si to ověřil: z běžné IP, která nepatří do žádného oficiálního
> rozsahu, jsem poslal požadavky pod pěti jmény AI robotů a 47 ze 47 webů odpovědělo. Ověřit se
> to dá — provozovatelé zveřejňují seznamy IP rozsahů, jen je každý má jinde, jinak velké
> a různě staré: od 8 prefixů po 1056, od souboru z října 2023 po soubor aktualizovaný dnes.
> A IPv6 v nich má jen Google.

---

## 8. Zdroje

- **vlastní měření 8. 8. 2026** — 10 oficiálních souborů, souhrn `bots-final.txt`, `ranges.txt`
- Google Search Central — Verifying Googlebot and other Google crawlers
- Anthropic (Claude) — nápověda ke crawlerům a seznam IP `claude.com/crawling/bots.json`
- OpenAI, Perplexity, Apple — veřejné JSON soubory s rozsahy (viz § 3)
- vlastní články: `shoptet-robots-txt-ai-roboti` (odkud limit pochází), `ai-crawler-robots-txt`,
  `cloudflare-ai-bot-blocking`, `ai-roboti-zatez-webu`
