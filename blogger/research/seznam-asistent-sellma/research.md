# Research — Seznam Asistent a SeLLMa (spoke)

**Slug:** `seznam-asistent-sellma`
**Kategorie:** analysis (bez howto → 4/4 JSON-LD) · **Tagy:** ai-platformy + technicke-zaklady
**Řádek plánu:** `seznam asistent sellma` — 3. místo po datové prioritizaci
**Datum:** 2026-07-19

---

## ⚠️ HUB-AND-SPOKE (schváleno uživatelem 2026-07-19)

Existující článek [`seznam-cz-ai-vyhledavani`](/blog/seznam-cz-ai-vyhledavani/) (publ. 2026-06-11)
má **celou sekci o Asistentovi + 37 zmínek**. Nesmí vzniknout duplikát.

| HUB — `seznam-cz-ai-vyhledavani` | SPOKE — tenhle článek |
|---|---|
| Seznam jako **kanál**: pozice na trhu (~11–15 %), kdy má pro firmu smysl, kdy ne | Asistent **do hloubky**: čím běží, odkud bere data, jak s vaším webem nakládá |
| Stepper „jak optimalizovat" (Search Console, Firmy.cz, Heureka, Sklik, strukturovaná data) | **`Seznam-Extended`** — AI robot a dokumentovaný opt-out; cena toho rozhodnutí |
| srovnání se světovými modely | realita modelu (SeLLMa + dočasně komerční modely) |

→ V hubu **zkrátit** sekci „Seznam Asistent a SeLLMa", opravit tvrzení o modelu a odkázat sem.

---

## ✅ OVĚŘENO U PRIMÁRNÍHO ZDROJE

### 🔴 HLAVNÍ NÁLEZ — `Seznam-Extended` (partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/)
**Na celém našem webu ani v našem vlastním robots.txt tenhle robot NENÍ — díra v pokrytí.**

- AI robot Seznamu se jmenuje **`Seznam-Extended`**.
- Odhlášení = do robots.txt přidat `User-agent: Seznam-Extended` + `Disallow: /`.
- Důsledek DOSLOVA: *„Na váš web již nadále nebudeme uživatele přivádět ani s jeho obsahem
  v rámci Seznam AI pracovat."*
- Motivace Seznamu DOSLOVA: *„Pomocí chytrých sumarizací a díky práci s obsahem vzbuzujeme
  u uživatelů zájem a motivujeme je k následnému prokliku přímo na váš web."*
- Monetizace DOSLOVA: *„Parametry spolupráce zůstávají stejné jako v případě služby Seznam
  Newsfeed, tzn. stejné reklamní pozice, stejný monetizační model a stejná výše provize."*
- Seznam uvádí **+85 % meziroční nárůst návštěvnosti** u zpravodajských dotazů s AI sumarizacemi.
  ⚠️ Vlastní číslo dodavatele o vlastní službě, navíc jen u **zpravodajských** dotazů.

### Korroborace (nápověda Vyhledávání, crawling-control)
- Pokud stránka obsahuje `Seznam-Extended: Disallow`, `AI: Disallow` nebo `nosnippet`,
  obsah se v AI odpovědích nepoužije vůbec.
- SeznamBot respektuje robots.txt dle verzí 1.0 a 2.0.

### Jazykový model — POZOR NA DATOVÁNÍ
- **blog.seznam.cz, listopad 2025** DOSLOVA: *„Asistent využívá vlastní jazykový model Sellma
  a dočasně i komerční modely od OpenAI provozovaných v evropských datacentrech prostřednictvím
  Microsoft Azure. Nicméně dlouhodobým cílem Seznamu je provozovat Asistenta výhradně na interních
  jazykových modelech a ve vlastních datových centrech."*
- **blog.seznam.cz, květen 2026** (oznámení bety pro všechny) zmiňuje pouze
  *„vlastní technologie jazykových modelů SeLLMa"* — komerční modely NEZMIŇUJE.

→ **NELZE tvrdit, že hybridní stav dnes platí, ani že skončil.** Formulovat přesně:
Seznam to uvedl v listopadu 2025 jako dočasné; květnové oznámení mluví jen o SeLLMa;
veřejně to není jednoznačné.

### Zdroje dat Asistenta (květen 2026, DOSLOVA)
*„V současné době nástroj využívá data z Vyhledávání, zpravodajských webů, Zboží.cz, Počasí.cz,
Firmy.cz, Sport.cz, Jízdních řádů a TV programu."*

### Dostupnost
- Listopad 2025 testovací provoz → **25. 5. 2026 beta zdarma všem přihlášeným**.
- Adresa `asistent.seznam.cz` + z rozhraní Seznam.cz.
- Týdenní limit dotazů na účet; vyšší pro předplatitele „Seznam bez reklam"
  (uvedeno v listopadovém postu).

---

## ⛔ NETVRDIT
- **že hybridní model (OpenAI přes Azure) platí dnes** — doloženo k listopadu 2025 jako dočasné
- **+85 % jako nezávislé nebo obecné číslo** — je to tvrzení Seznamu o vlastní službě
  a jen u zpravodajských dotazů
- **že blokace `Seznam-Extended` neovlivní běžné výsledky v Seznamu** — dokumentace mluví
  o „v rámci Seznam AI"; dopad na klasické vyhledávání tam explicitně řešený není → NEDOMÝŠLET
  ani jedním směrem
- **70 miliard parametrů / 100 mil. Kč jako vyjádření Seznamu** — v hubu jsou vedené jako
  „veřejně citované informace"; sem je raději netahat
- **že se strukturovaná data v Asistentovi chovají jako v Googlu** — hub to hedguje, neopakovat
- **sliby zobrazení nebo citace**

---

## Jádro článku

**Asistent není jen chatbot navíc — je to další vrstva, která čte váš web, a má vlastního robota.**
Tři věci, které majitel webu neví:

1. **Jmenuje se `Seznam-Extended`** a řídí se robots.txt jako ostatní.
2. **Odhlášení je všechno nebo nic** a Seznam u něj sám říká, že přestane i přivádět uživatele.
   → Stejná struktura rozhodnutí jako u [Googlu](/blog/blokovat-ai-odpovedi-gsc/)
   a [Cloudflare](/blog/cloudflare-ai-bot-blocking/): vypnutí není zadarmo.
3. **Asistent čerpá hlavně z ekosystému Seznamu** (Zboží.cz, Firmy.cz, Sport.cz, jízdní řády…),
   takže „být vidět v Asistentovi" není jen o vašem webu.

Bonus poctivosti: **náš vlastní robots.txt `Seznam-Extended` neřeší** — ověřeno 2026-07-19,
0 zmínek Seznamu. Píšeme o řízení AI robotů a na českého jsme zapomněli. To do článku patří.

## Chyby (→ MistakeGrid 4×)
1. **Řešit jen GPTBot a spol.** — v Česku existuje vlastní AI robot s vlastním jménem.
2. **Zablokovat Seznam-Extended bez rozmyslu** — Seznam sám uvádí, že pak přestane i přivádět uživatele.
3. **Považovat Asistenta za „Seznam s ChatGPT"** — bere data hlavně z vlastního ekosystému.
4. **Odvozovat kvalitu z jednoho čísla o modelu** — veřejné informace o modelu jsou neúplné a datované.

## Hranice článku
- **Neřeší pozici Seznamu na trhu ani kdy do něj investovat** → to je [hub](/blog/seznam-cz-ai-vyhledavani/).
- **Nedává návod na optimalizaci pro Seznam** → taky hub.
- **Neměří, kolik z Asistenta chodí** — veřejný nástroj na to nemáme.

## Brand voice
- Anglicismy → česky: „crawler" → **robot**, „opt out" → **odhlásit se**. Povolené: Seznam Asistent,
  SeLLMa, Seznam-Extended, robots.txt, nosnippet, user-agent, OpenAI, Azure.
- answer 40–60 slov, začíná definicí.

## Interní odkazy (ověřeno 2026-07-19, všech 9 existuje)
`/blog/seznam-cz-ai-vyhledavani/` · `/blog/ai-crawler-robots-txt/` · `/blog/blokovat-ai-odpovedi-gsc/` ·
`/blog/cloudflare-ai-bot-blocking/` · `/blog/local-seo-cesko-2026/` · `/blog/ai-search-trendy-cesko-2026/` ·
`/blog/test-viditelnosti-v-ai/` · `/blog/produktovy-feed-gtin/` · `/blog/jak-ai-cituje-zdroje/`

## CTA
Audit 9 990 + Pack 1 490. Bez slibu zobrazení v Asistentovi.
