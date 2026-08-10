# Research — Bytespider: nejčastěji ošetřovaný AI robot v Česku

Datum: **10. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `kolik ai robotu resi ceska media`

Článek spojuje **dvě vlastní měření** a jedno ověření dokumentace.

## Nález 1 — v mém vzorku vede Bytespider, ne GPTBot

Měření z 9. 8. 2026 (viz [research k Seznam-Extended](/blog/seznam-extended-opt-out/)): 33 českých zpravodajských a oborových webů, staženo 33 z 33 robots.txt.

| Robot | Na kolika webech z 33 |
|---|---|
| **Bytespider** | **13** |
| GPTBot | 11 |
| Amazonbot | 11 |
| ClaudeBot | 10 |
| Google-Extended | 9 |
| PerplexityBot | 8 |
| anthropic-ai | 6 |
| CCBot | 6 |
| Claude-Web | 5 |
| Applebot-Extended | 5 |

Dál: 17 z 33 nemá pravidlo pro žádného sledovaného AI robota, 9 jich má šest a víc. Medián velikosti robots.txt 1 064 B, maximum 229 753 B.

**Je to nečekané pořadí.** Veřejná debata se točí kolem GPTBota, ale v mém vzorku ho o dva weby předstihl crawler ByteDance.

## Nález 2 — u ByteDance jsem strojový seznam IP nenašel

V [měření z 8. 8. 2026](/blog/overovani-ai-robotu/) jsem ověřil deset oficiálních souborů s IP rozsahy u pěti provozovatelů. Přeověřeno 10. 8., všechny pořád odpovídají:

| Provozovatel | Soubor | Stav |
|---|---|---|
| OpenAI | `openai.com/gptbot.json` | 200 |
| Anthropic | `claude.com/crawling/bots.json` | 200 |
| Perplexity | `perplexity.ai/perplexitybot.json` | 200 |
| Google | `developers.google.com/.../googlebot.json` | 301 → soubor |
| Apple | `search.developer.apple.com/applebot.json` | 200 |

U ByteDance jsem obdobný soubor **na obvyklých adresách nenašel** — zkusil jsem `bytedance.com/en/bots.json`, `bytedance.com/bytespider.json`, `developer.bytedance.com/bytespider`, `tiktok.com/bots.json` a `bytespider.bytedance.com`. Ani vyhledávání nevrátilo oficiální stránku ByteDance k tomuhle robotovi; všechny nalezené zdroje jsou třetí strany (databáze botů, bezpečnostní dodavatelé, SEO blogy).

**Formulace v článku musí být „nenašel jsem", ne „neexistuje".** Přesně na tomhle jsem se spálil u Anthropicu, kde mě odhad adresy poslal na 404 a málem jsem z toho udělal závěr o absenci.

### Vedlejší nález, který málem způsobil chybu

`https://www.bytedance.com/en/bots.json` vrací **HTTP 200**. Kdybych se spolehl na stavový kód, napsal bych, že soubor existuje.

Hlavičky ale ukazují `Content-Type: text/html` a tělo je HTML stránka — web vrací 200 pro libovolnou cestu (SPA fallback). **Stavový kód sám o sobě není doklad, že soubor existuje.** Tohle jde rovnou do článku jako praktická poznámka a zvlášť do plánu jako samostatné téma.

## Nález 3 — tvrzení „Bytespider nerespektuje robots.txt" jsem NEOVĚŘOVAL

Napříč zdroji třetích stran se opakuje, že Bytespider ignoruje `Disallow`, s odkazem na rozbory logů z roku 2023. Objevuje se i údaj, že jeho podíl na provozu AI crawlerů vyskočil z 5,73 % na 10,25 % za třicet dní.

**Ani jedno jsem netestoval a v článku to nebude podané jako fakt.** Bude to uvedené jako to, co tvrdí třetí strany, s vročením a s výslovnou poznámkou, že vlastní ověření nemám. Testovat to bych musel na vlastním serveru s logy, což je mimo rozsah tohohle článku.

## Co z toho článek udělá

Spojení tří vrstev:

1. Změřené pořadí (moje data): v Česku se nejčastěji ošetřuje Bytespider.
2. Ověřený rozdíl: u pěti provozovatelů se identita robota dá ověřit proti publikovanému seznamu IP, u ByteDance jsem takový seznam nenašel.
3. Důsledek: pravidlo `Disallow` na Bytespider je pravidlo podle jména u robota, jehož jméno si nemám jak ověřit — což přesně navazuje na [ověřování AI robotů](/blog/overovani-ai-robotu/), kde jsem z běžné IP prošel pod jmény pěti robotů 47 weby ze 47.

Praktický závěr pro čtenáře: vědět, co to pravidlo je a co není. Není to vynucení, je to žádost.

## Limity

- Jeden odečet, 9.–10. 8. 2026.
- Vzorek 33 médií je ruční seznam, ne náhodný výběr.
- Měřím konfiguraci v robots.txt, ne chování robotů. Netestoval jsem, jestli je kdokoli dodržuje.
- Jednotlivé weby se nejmenují.
- Absenci dokumentace tvrdím jen jako „nenašel jsem na obvyklých místech".

## Zdroje

- vlastní měření: `seznam_extended_media.json` (33 médií), `seznam_summary.json`
- vlastní měření IP rozsahů z 8. 8. 2026 (článek `overovani-ai-robotu`)
- kontrola dostupnosti souborů 10. 8. 2026 (stavové kódy + Content-Type)
