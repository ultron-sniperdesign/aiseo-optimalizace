# Research — AI licenční dohody a co z nich plyne pro váš obsah

**Slug:** `licencni-dohody-ai-obsah`
**Kategorie:** **analysis** (bez howto → 4/4) · **Tagy:** strategie + technicke-zaklady
**Řádek plánu:** `licencni dohody ai obsah`
**Datum:** 2026-07-27

---

## 🔴 KOLIZE — zadání z plánu je UŽ CELÉ NA WEBU

Řádek v plánu chtěl: Reddit-Google ~60M USD/rok, Reddit-OpenAI ~70M USD/rok,
žaloby na Anthropic a Perplexity. **Všechno tohle je doslova v `ai-citace-reddit`**,
H3 „Placené licenční dohody s Googlem a OpenAI":

> V únoru 2024 uzavřel Reddit licenční dohodu s Googlem za přibližně 60 milionů USD ročně.
> O pár měsíců později podobnou s OpenAI za zhruba 70 milionů USD ročně. V roce 2024 přinesly
> licenční dohody Redditu zhruba 203 milionů USD. […] Reddit současně žaluje Anthropic
> (červen 2025) a Perplexity (říjen 2025) za neoprávněný scraping bez licence.

Technická vrstva „koho pustit / koho blokovat" je pokrytá čtyřmi články:
`ai-crawler-robots-txt`, `cloudflare-ai-bot-blocking`, `ai-roboti-zatez-webu`,
`blokovat-ai-odpovedi-gsc`.

**→ Napsat článek podle zadání = duplicita. Musí stát na něčem jiném.**

## ✅ CO JE VOLNÉ — právní mechanismus, ne čísla dohod

Dvě věci z roku 2026, které na webu nikde nejsou a mění výklad:

### 1. Reddit v. Anthropic — vráceno státnímu soudu, protože NEJDE o copyright
Federální soudkyně **Trina L. Thompson** vrátila případ kalifornskému státnímu soudu
(San Francisco Superior Court) s odůvodněním, že **žádný z Redditích nároků neuplatňuje
práva rovnocenná těm podle Copyright Act**, takže je autorský zákon nepředbíhá.

Reddit žaluje podle kalifornského práva na pěti základech:
1. porušení smlouvy (podmínky užití), 2. bezdůvodné obohacení, 3. zásah do věci
(trespass to chattels), 4. narušení smluvního vztahu, 5. nekalá soutěž (CA B&P § 17200).

**Praktický závěr pro majitele webu:** páka proti nelicencovanému AI použití v tomhle sporu
neleží v autorském právu, ale v **podmínkách přístupu** — tedy v tom, na co uživatel
technicky a smluvně přistupuje, když web načítá. To je úplně jiná optika než „mám copyright".

### 2. Nepřímá cesta — blokace crawleru nemusí stačit
V žalobě na Perplexity (říjen 2025, spolu se SerpApi, Oxylabs a AWM Proxy) Reddit tvrdí,
že když byl přímý přístup zablokovaný, obsah se získával **nepřímo přes indexované
výsledky Googlu**.

**Praktický závěr:** zablokovat jednoho AI robota neznamená, že se obsah k té AI nedostane.
Pokud je obsah v indexu vyhledávače, existuje obchvat. To přímo kvalifikuje radu
z `ai-crawler-robots-txt` („robots.txt je žádost, ne zámek") o další patro.

### 3. Trh licencí je pro malého tvůrce nedosažitelný
Dohody se uzavírají s platformami, které mají miliardy příspěvků. Reddit deklaruje, že
je ochotný licencovat i žalovaným — za obchodních podmínek. **Pro český web s pár sty
články žádný takový trh neexistuje.** To je poctivý závěr, ne pesimismus: rozhodnutí,
které malý tvůrce reálně má, je jiné a užší.

## ⛔ NETVRDIT / RIZIKA
- **Není to právní rada.** US spory podle kalifornského práva; české právo je jiné.
  Nutný explicitní disclaimer.
- Netvrdit, že podmínky užití na českém webu zakládají vymahatelný nárok — to neposoudím.
- Neříkat, že spory jsou rozhodnuté. **Remand ≠ rozhodnutí ve věci** — jde jen o to,
  který soud případ projedná.
- Nevydávat „páka je ve smluvních podmínkách" za obecné pravidlo — je to čtení jednoho
  procesního rozhodnutí.
- Neopakovat čísla dohod (60/70/203 M) jako hlavní obsah — odkázat na `ai-citace-reddit`.
- Nemluvit o žalování jako o reálné možnosti pro malý web (náklady).

## Struktura (analysis, bez howto)
1. Krátká odpověď — co z licenčního trhu plyne pro malý web
2. Odlišení: čísla dohod má jiný článek, tady jde o mechanismus
3. **Co ukázal rok 2026: spor není o copyright** (remand + pět nároků)
4. **Obchvat přes index** — proč blokace jednoho robota nestačí
5. **Co z toho plyne pro český web** — tři reálné možnosti, žádná z nich není licencování
6. Warning Insight: není to právní rada + remand není rozhodnutí
7. Časté omyly (MistakeGrid)
8. Co si z toho vzít

## Interní odkazy (ověřeno 2026-07-27)
`/blog/ai-citace-reddit/` (čísla dohod) · `/blog/ai-crawler-robots-txt/` ·
`/blog/cloudflare-ai-bot-blocking/` · `/blog/ai-roboti-zatez-webu/` ·
`/blog/blokovat-ai-odpovedi-gsc/` · `/blog/zero-click-ai/`

## Zdroje
- Loeb & Loeb: Reddit, Inc. v. Anthropic PBC (04/2026) — remand, preemption
- Bloomberg Law: Reddit Gets Anthropic AI Scraping Suit Sent Back to State Court
- Caldwell: Reddit v. Perplexity — Terms of Access as the Next Front in AI Data Litigation
- Built In / MBHB: Reddit v. Perplexity, SerpApi, Oxylabs, AWM Proxy (10/2025)

## OG obrázek — dle IMAGE_GUIDE §5
Nadpis: `AI licence a váš obsah` · Podtitul: `Kde je páka a kde není`
Scéna: dvě velké platformní karty se smluvním odznakem propojené s AI panelem, vedle
malá webová karta bez odznaku; tenká obchvatová linka vede kolem blokované cesty.
