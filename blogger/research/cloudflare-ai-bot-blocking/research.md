# Research — Cloudflare a blokování AI robotů

**Slug:** `cloudflare-ai-bot-blocking`
**Kategorie:** tutorial (howto → 5/5 JSON-LD) · **Tagy:** technicke-zaklady + ai-platformy
**Řádek plánu:** `cloudflare ai bot blocking` — 2. místo po datové prioritizaci
**Datum:** 2026-07-19

---

## ⚠️ ZADÁNÍ V PLÁNU JE ZASTARALÉ

Plán říká: *„Cloudflare od 2024 nabízí Block AI Bots toggle… jak rozlišit, co blokovat (Bytespider)
a co povolit (GPTBot, ClaudeBot)."*

**Realita k 2026-07-19:** Cloudflare od přepínače a seznamů jmen odešel. Klasifikuje roboty
**podle chování**, ne podle jména, a starý přepínač **končí 15. 9. 2026**. Článek musí psát
podle současného stavu, ne podle zadání.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE

### Tři kategorie chování (blog.cloudflare.com, „Your site, your rules")
DOSLOVA:
- **Search** — „any behavior that collects or indexes your content, so it can answer questions about it later."
- **Agent** — „automated behavior that is acting, usually in real time, on a person's behalf, to get something done right now."
- **Training** — „a crawler taking your content to train or fine-tune a model."

Dokumentace to shrnuje: *„Rather than relying on a single 'AI bot' label, Cloudflare classifies bots by behavior."*

### Co se změnilo 1. 7. 2026 (changelog `2026-07-01-ai-traffic-options`)
- Všichni zákazníci **včetně Free plánu** můžou u každé ze tří kategorií zvolit:
  **blokovat na všech stránkách** / **blokovat jen na stránkách s reklamou** / **neblokovat**.
- **Dnešní výchozí stav: všechny tři kategorie povolené.**

### Změna výchozích hodnot 15. 9. 2026
- Blog: *„On September 15, 2026, we'll be setting new defaults for each of these three classifications."*
- Nové domény: **Training a Agent blokované na stránkách s reklamou, Search zůstává povolený.**
- Zákazníci se můžou *„opt out of the new defaults at any time before September 15."*
- Zdůvodnění Cloudflare pro ponechání Search: *„Search is the behavior that most naturally funnels
  back visitors, and we believe it's in the interest of most site owners to allow this."*

### 🔴 PAST — smíšené roboty (nejdůležitější věc v článku)
Changelog: *„Multi-purpose crawlers combining Search and Training functionality will be affected
by the Training block."*

→ Blokace **Training** zasáhne i roboty, kteří zároveň dělají **Search**. Kdo si myslí, že
„zakážu jen trénink a citace mi zůstanou", může přijít o obojí.

Starý přepínač měl opačnou logiku — docs: *„excludes mixed-purpose bots that are used both for
Training and for Search."* Takže **stará a nová volba se chovají jinak**. To je důvod, proč to
nejde jen tak překlopit.

### Starý přepínač „Block AI bots" (docs `bots/additional-configurations/block-ai-bots/`)
- *„blocks verified bots that are classified as crawling for the purpose of AI training, as well as
  a number of unverified bots that behave similarly."*
- Volby: *„Block (on all pages)"*, *„Block on pages with ads"*, *„Allow (do not block)"*
- **„Deprecating on September 15, 2026."**

### AI Crawl Control — co dashboard umí (docs `ai-crawl-control/features/manage-ai-crawlers/`)
- Záložka **Crawlers** = *„a table of AI crawlers that are requesting access to your content."*
- Akce: **Allow** (volitelně s vynucením souladu s robots.txt) / **Block**.
- S Pay Per Crawl (**closed beta**): Allow / **Charge** / Block.
- Blokovanému robotovi lze vrátit **403** nebo **402 Payment Required** + vlastní text.
- Na Free plánu se roboti poznávají **podle user-agent řetězce**; Bot Management detekci vylepšuje.

---

## ⛔ NETVRDIT
- **Že konkrétní jmenovaní roboti (GPTBot, ClaudeBot, Bytespider…) patří do konkrétní kategorie.**
  Dokumentace je takto nepřiřazuje. Psát o kategoriích, ne o jménech.
- **Že Cloudflare varuje před ztrátou viditelnosti při blokaci Search.** Takové varování
  v dokumentaci NENÍ. Lze jen (a) citovat jejich zdůvodnění o „funnels back visitors",
  (b) popsat mechanismus: co si robot nenačte, to nemůže citovat.
- **Ekonomiku Pay Per Crawl** — closed beta, žádná čísla.
- **Že se to týká jiných CDN.** Článek je o Cloudflare.
- **Že to ovlivní běžné pozice v Googlu.** Neřešeno, netvrdit.
- **Že se existujícím doménám nastavení 15. 9. přepne.** Oznámení mluví o nových doménách
  + možnosti zvolit si vlastní nastavení do 15. 9. Formulovat akci jako „zkontrolujte si to",
  což platí tak či tak.

---

## Odlišení od `ai-crawler-robots-txt` (publikováno, 2 kliky/90 dní)

| Existující článek | Tenhle |
|---|---|
| robots.txt = **žádost**, slušní roboti ji respektují | CDN = **vynucení**, robot se k obsahu nedostane |
| jmenovitě GPTBot, OAI-SearchBot, ClaudeBot, CCBot, Google-Extended | **kategorie chování**, ne jména |
| syntaxe souboru | nastavení v dashboardu + termín 15. 9. |

Starý článek 4× opakuje „pro tvrdé blokování potřebujete server, firewall nebo **CDN**" a nikdy
nevysvětlí jak. **Tenhle článek je ta slíbená vrstva.** → prolinkovat obousměrně (jen odkaz z nového).

---

## Postup (→ howto, 5 kroků)

1. **Zjistěte, jestli vůbec jedete přes Cloudflare** — bez toho je zbytek bezpředmětný.
2. **Podívejte se do AI Crawl Control, kdo k vám chodí** — tabulka robotů žádajících o přístup.
   Rozhodovat podle vlastních dat, ne podle článků.
3. **Rozhodněte se u každé ze tří kategorií zvlášť** — Search / Agent / Training, u každé
   blokovat všude / jen na stránkách s reklamou / neblokovat.
4. **Počítejte se smíšenými roboty** — blokace Training zasáhne i ty, kdo zároveň dělají Search.
5. **Nastavte to vědomě do 15. 9. 2026** — pak se mění výchozí hodnoty a starý přepínač končí.

## Chyby (→ MistakeGrid 4×)
1. **Blokovat Training s tím, že citace zůstanou** — smíšené roboty to zasáhne taky.
2. **Nechat to na výchozím nastavení a nevědět jakém** — po 15. 9. platí jiné výchozí hodnoty.
3. **Řešit to jen v robots.txt** — to je žádost, ne zámek. A naopak: CDN blokace nenahradí
   robots.txt jako signál pro slušné roboty.
4. **Blokovat podle jména robota** — user-agent jde podvrhnout; proto Cloudflare klasifikuje
   podle chování a rozlišuje ověřené a neověřené roboty.

## Hranice článku
- **Neradí blokovat ani nechat.** Rozhodovací rámec pro blokaci obecně je v
  [blokovat-ai-odpovedi-gsc](/blog/blokovat-ai-odpovedi-gsc/).
- **Neřeší jiné CDN.**
- **Nejde do Pay Per Crawl** — closed beta, vlastní téma (přidáno do plánu tímto runem).
- **Nemapuje jména robotů na kategorie** — dokumentace to nedělá.

## Brand voice
- Publikum: majitel webu / e-shopu, spíš netechnický. Dashboard, ne konfiguráky.
- Anglicismy → česky: „crawler" → **robot** (zavedené v předchozích článcích), „toggle" →
  **přepínač**, „opt out" → **zvolit si vlastní nastavení**. Povolené: Cloudflare, AI Crawl Control,
  Search / Agent / Training (názvy kategorií), robots.txt, user-agent, CDN, 403, 402.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-19, všech 9 existuje)
`/blog/ai-crawler-robots-txt/` · `/blog/blokovat-ai-odpovedi-gsc/` · `/blog/jak-vypnout-ai-overview/` ·
`/blog/ai-nakupni-agenti/` · `/blog/mereni-ai-mode-limity/` · `/blog/gsc-ai-segmenty-mereni/` ·
`/blog/zero-click-ai/` · `/blog/case-study-megadetail-ai-navstevnost/` · `/blog/ai-mode-a-eshopy/`

## CTA
Audit 9 990 + Pack 1 490. Bez slibu, že nastavení něco vydělá.
