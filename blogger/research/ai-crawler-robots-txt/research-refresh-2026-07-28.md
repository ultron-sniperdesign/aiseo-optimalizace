# Research — refresh `ai-crawler-robots-txt`

**Typ:** refresh z `blogger/REFRESH_QUEUE.md` (2:1 kadence)
**Článek:** published 2026-05-24, updated 2026-05-24 → 2 měsíce bez dotyku, 1 584 slov
**Cílový dotaz z baseline:** „které AI crawlery povolit v robots.txt"
**Datum researche:** 2026-07-28

---

## 1. Co se od května 2026 změnilo

### ✅ Hlavní novinka: robots.txt dostává formální slovník pro AI

**IETF pracovní skupina AIPREF** (AI preferences) standardizuje, jak dát strojově najevo
preference k využití obsahu AI systémy. Dva adoptované working-group dokumenty:

| Dokument | Co řeší | Stav k 7/2026 |
|---|---|---|
| `draft-ietf-aipref-vocab` | **slovník** — kategorie `train-ai` a `search`, hodnoty `y` / `n` | WG dokument, Proposed Standard track, rev. 06, expirace říjen 2026 |
| `draft-ietf-aipref-attach` | **jak se preference připojí k obsahu** — HTTP hlavička `Content-Usage` nebo pravidlo v robots.txt | WG dokument, milník **srpen 2026** na odeslání standards-track specifikace do IESG |

Zápis vypadá takto: `Content-Usage: train-ai=n`

**⛔ Kritické pro tón článku:** **není to RFC ani ratifikovaný standard.** Jsou to adoptované
drafty před standardizací, plný konsenzus zatím není. Rámovat stejně jako WebMCP
v `lighthouse-ai-check` — „návrh s termínem, ne hotová věc". Nedoporučovat nasazení.

### ✅ Druhá novinka: Web Bot Auth — odpověď na podvržené user-agenty

IETF draft na **kryptografické ověření robotů** přes HTTP Message Signatures: bot podepisuje
každý požadavek privátním klíčem (Ed25519). Míří přesně na díru, kterou článek pojmenovává
v sekci „robots.txt je žádost, ne zámek" — dnes se user-agent dá napsat jakýkoli.

Také draft, ne nasazený standard.

### ✅ Třetí vrstva: monetizace (kontext, ne návod)

- **RSL** — licenční/royalty mechanismus, za ním Reddit, Yahoo, Medium, O'Reilly
- **CoMP** (IAB Tech Lab) — protokoly pro monetizaci obsahu, avizovaný start jaro 2026
- **pay-per-crawl** (Cloudflare)

Pro českou malou firmu to zatím nejsou nástroje k použití. Zmínit jednou větou jako směr,
nedělat z toho sekci.

### ❌ Co NEPOUŽÍT jako novinku

- **Kauza Cloudflare vs. Perplexity** (stealth crawling, rotace UA a ASN) je ze **srpna 2025** —
  tedy **starší než článek**. Není to update. Navíc je to obvinění, které Perplexity odmítlo
  a označilo za PR akci. Pokud vůbec, tak jen jako doložený spor s oběma stranami, ne jako fakt.

---

## 2. Doplnění seznamu botů

Tabulka v článku má 9 řádků (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot,
Claude-User, PerplexityBot, Google-Extended, CCBot). Chybí:

| Robot | Provozovatel | Účel |
|---|---|---|
| Applebot-Extended | Apple | řídicí token pro využití v generativních službách Apple |
| Bytespider | ByteDance | sběr dat (v článku je jen ve FAQ, ne v tabulce) |
| Amazonbot | Amazon | procházení pro služby Amazonu vč. Alexy |
| Meta-ExternalAgent | Meta | sběr dat pro AI produkty Meta |
| Diffbot, cohere-ai, YouBot | různí | menší hráči, agregace a AI vyhledávání |

**Provozní údaj:** ve veřejně uváděných datech z roku 2026 tvoří tři roboti OpenAI zhruba
**58 % veškerého AI-bot provozu**, nejaktivnější je `ChatGPT-User`. Zdroj je sekundární
(agenturní přehledy), takže uvádět s hedgem a jako řádovou informaci.

---

## 3. Nejostřejší formulace hlavní teze

Z rešerše vyšla formulace, kterou článek nemá a která odpovídá přesně na cílový dotaz:

> **Blokace tréninkových robotů (GPTBot, ClaudeBot, CCBot) citace neovlivní.
> Blokace vyhledávacích a on-demand robotů (OAI-SearchBot, PerplexityBot, ChatGPT-User)
> citace zastaví.**

To je celé rozhodovací pravidlo v jedné větě. Patří pod nový H2 přesně na frázi
„Které AI crawlery povolit v robots.txt".

---

## 4. Co refresh udělá

1. **Nový H2 „Které AI crawlery povolit v robots.txt"** + krátká odpověď a rozhodovací tabulka
   povolit / zvážit / blokovat (cílový dotaz z baseline).
2. **Doplnit tabulku botů** o chybějící (Applebot-Extended, Bytespider, Amazonbot,
   Meta-ExternalAgent) + sloupec s kategorií.
3. **Nová sekce „Co se chystá: robots.txt dostává slovník pro AI"** — AIPREF `Content-Usage`,
   Web Bot Auth, výslovně jako drafty s termíny. Zmínka o monetizační vrstvě jednou větou.
4. **Interní odkazy na slovník** — `/slovnik/#ai-crawler`, `#robots-txt`, `#googlebot`,
   `#google-extended`. Plus odkaz na `/blog/cloudflare-ai-bot-blocking/` (tvrdé blokování).
5. **CZ ukotvení** v answeru a v nové sekci.
6. `updated` → 2026-07-28, `published` beze změny. Titulek zůstává → **OG se negeneruje.**

## 5. Zdroje

- IETF datatracker — `draft-ietf-aipref-vocab`, `draft-ietf-aipref-attach`
- ietf-wg-aipref.github.io/drafts — znění obou draftů
- IETF draft — Web Bot Auth (HTTP Message Signatures)
- Agenturní přehledy AI user-agentů 2026 (sekundární, pro podíly provozu)
