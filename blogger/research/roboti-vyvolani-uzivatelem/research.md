# Research — Roboti vyvolaní uživatelem: kde robots.txt podle dokumentace neplatí

Datum: **12. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `chatgpt user a robots txt`

## Nález: tři provozovatelé, tři skoro stejné věty

Všechny tři citace jsou z oficiální dokumentace, čteno 12. 8. 2026.

| Provozovatel | Robot | Co dokumentace říká o robots.txt |
|---|---|---|
| **OpenAI** | `ChatGPT-User` | „Protože tyhle akce vyvolal uživatel, **pravidla robots.txt nemusí platit**." Dodává, že ChatGPT-User neslouží k automatickému procházení webu. |
| **Google** | 9 fetcherů (viz níž) | „Protože o stažení požádal uživatel, **tyhle fetchery obvykle ignorují pravidla robots.txt**." |
| **Perplexity** | `Perplexity-User` | „Protože o stažení požádal uživatel, **tenhle fetcher obvykle ignoruje pravidla robots.txt**." |

**Formulace se liší v síle** („nemusí platit" vs. „obvykle ignorují") a to je potřeba zachovat — nesmím z toho udělat jednu větu.

### Devět fetcherů, které Google v téhle kategorii uvádí

`Google-CWS` (Chrome Web Store), `FeedFetcher-Google`, `Google-GeminiNotebook`, **`Google-Agent`**, `GoogleMessages`, `Google-Pinpoint`, `GoogleProducer` (Publisher Center), `Google-Read-Aloud`, `Google-Site-Verification`.

Za pozornost stojí `Google-Agent` a `Google-GeminiNotebook` — agentní použití patří do téhle kategorie, tedy tam, kde robots.txt podle dokumentace neplatí.

Google zároveň u běžných crawlerů píše, že „vždy dodržují pravidla robots.txt **při automatickém procházení**". Ta podmínka je v té větě podstatná.

## Vlastní data: kolik českých webů to vůbec řeší

Ze [stejného měření 80 domén](/blog/gptbot-bez-oai-searchbot/) z 12. 8. 2026:

| Robot | Pravidlo má |
|---|---|
| GPTBot (automatický) | 12 z 80 |
| Google-Extended (automatický) | 10 z 80 |
| PerplexityBot (automatický) | 9 z 80 |
| **ChatGPT-User (vyvolaný uživatelem)** | **5 z 80** |
| OAI-SearchBot (automatický) | 4 z 80 |
| **Perplexity-User (vyvolaný uživatelem)** | **3 z 80** |
| kterýkoli z devíti fetcherů Googlu | **0 z 80** |

Všech pět webů s pravidlem pro ChatGPT-User má zároveň pravidlo pro GPTBota — tj. nikdo neřešil jen fetcher.

⛔ **Nepodsouvat, že těch pět udělalo chybu.** Napsat: podle dokumentace OpenAI to nastavení nemusí platit, takže se na něj nedá spolehnout. Co tím kdo zamýšlel, nevím.

## Co s tím jde dělat (jen doložené)

- **Ověřit, že robot je pravý.** Google publikuje IP rozsahy pro tuhle kategorii (`user-triggered-fetchers.json`, `user-triggered-fetchers-google.json`, `user-triggered-agents.json`) a reverzní DNS `*.gae.googleusercontent.com` / `google-proxy-*.google.com`. Sám upozorňuje, že **user agent jde podvrhnout**. Navázat na [ověřování AI robotů](/blog/overovani-ai-robotu/) a [kdo publikuje IP rozsahy](/blog/kdo-publikuje-ip-rozsahy/).
- **Blokovat na serveru**, ne v robots.txt — to je jediná vrstva, která u téhle kategorie funguje bez ohledu na to, co robot o robots.txt říká.
- ⛔ **Netvrdit, že roboti robots.txt porušují.** Dokumentace předem říká, že u téhle kategorie neplatí. Je to popsané chování, ne porušení.
- ⛔ **Neradit blokaci jako výchozí volbu** — přes tyhle fetchery chodí uživatel, kterého tam poslala odpověď. Blokace může znamenat i konec návštěv.

## ⚠️ Nález mimo téma: čtvrtý robot OpenAI

Dokumentace OpenAI dnes popisuje **čtyři** user agenty: GPTBot, OAI-SearchBot, ChatGPT-User a **OAI-AdsBot** (ověřuje bezpečnost stránek nabízených jako reklama v ChatGPT).

Můj [dnešní článek](/blog/gptbot-bez-oai-searchbot/) má tabulku nadepsanou „Tři roboti OpenAI". **Opravím ji** — nadpis tvrdí počet, který dokumentace nepodporuje.

## Limity

- Jde o **čtení dokumentace k 12. 8. 2026**, ne o měření chování. Netestoval jsem, jestli se roboti podle svých pravidel řídí.
- Formulace jsou překlady; v článku uvést, že jde o překlad, a zachovat rozdíl mezi „nemusí platit" a „obvykle ignorují".
- Vlastní data jsou z jednoho odečtu robots.txt na nenáhodném vzorku 80 domén.
- Seznamy user agentů se mění; OAI-AdsBot je toho příkladem.

## Zdroje

- dokumentace OpenAI k robotům (GPTBot, OAI-SearchBot, ChatGPT-User, OAI-AdsBot), čteno 12. 8. 2026
- dokumentace Google Search — fetchery vyvolané uživatelem + běžné crawlery, čteno 12. 8. 2026
- dokumentace Perplexity — PerplexityBot a Perplexity-User, čteno 12. 8. 2026
- vlastní měření 80 domén, 12. 8. 2026 (`optout_mix.json`)
