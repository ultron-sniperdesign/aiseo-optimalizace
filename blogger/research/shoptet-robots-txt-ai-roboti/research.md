# Research — Shoptet a AI roboti (vlastní měření na 47 e-shopech)

**Řádek plánu:** `shoptet robots txt ai roboti` — BLOK „Shoptet a AI viditelnost" 2/5
**Datum měření:** 2026-08-08 · **Kategorie:** analysis · **Tagy:** eshopy, mereni

---

## 1. Co se změnilo proti zadání

Řádek plánu počítal s tím, že kroky v administraci dodá uživatel. **Nebylo to potřeba** —
oficiální nápověda Shoptetu odpovídá na obě otázky a zbytek jde změřit zvenčí. Navíc se
při měření našly dvě věci, které v zadání nebyly: pole pro `llms.txt` a vedlejší účinek
povolovacích pravidel.

---

## 2. Ověřeno u primárního zdroje

### Shoptet — nápověda, sekce HTML kódy (`podpora.shoptet.cz/html-kody/`)

- robots.txt se edituje v **Vzhled a Obsah → Editor → HTML kód**
- ⛔ **„Vložený text se přidá na konec souboru robots.txt."** — tedy **append**, ne přepis
- maximální délka sekce **8 192 znaků**
- tatáž stránka popisuje i pole **`llms.txt` — „vlastní text pro AI nástroje"**

→ Tvrzení „robots.txt na Shoptetu jde editovat" je **doložené vendorem**. Otázka z dílu 1
je uzavřená bez přístupu do administrace.

### Google — robots.txt specifikace (Search Central)

- ⛔ **„Only one group is valid for a particular crawler."**
- Robot si vybere **skupinu s nejspecifičtějším odpovídajícím user-agentem**; skupina `*`
  se pro něj pak neuplatní
- uvnitř skupiny platí nejméně omezující pravidlo a při konfliktu delší cesta pravidla

→ Tohle je klíč k hlavnímu nálezu. Vlastní skupina pro GPTBota **nahrazuje**, nikoli
doplňuje, skupinu `User-agent: *`.

---

## 3. Vzorek

**47 Shoptet e-shopů**, tři zdroje:

| Skupina | Počet | Odkud |
|---|---|---|
| ShopRoku 2025 | 31 | ze 125 e-shopů uvedených ve výsledcích ShopRoku 2025 běželo 31 na Shoptetu (**25 %**) |
| dříve změřené | 7 | vzorek z dílu 1 (chovatelské potřeby, móda, doplňky stravy, kosmetika) |
| šablonová dema | 9 | oficiální katalog šablon Shoptetu |

Příslušnost k Shoptetu ověřena otiskem v HTML: `cdn.myshoptet.com` + objekt `Shoptet.`.

⛔ **Proč ShopRoku:** potřeboval jsem vyjmenovatelný seznam reálných e-shopů, který
jsem nesestavil já. Není to náhodný vzorek populace Shoptet e-shopů — je vychýlený
k větším a aktivnějším obchodům, protože jsou v soutěži.

---

## 4. ⛔ Výsledky

### 4.1 robots.txt — 31 výchozích, 16 upravených

| Zjištění | Počet |
|---|---|
| robots.txt vrátil 200 | 47 / 47 |
| **byte-identický s výchozím** (po normalizaci řádku `Sitemap:`) | **31 / 47** |
| upravený | 16 / 47 |
| **obsahuje jakoukoli zmínku o AI robotovi** | **6 / 47** |
| **blokuje nějakého AI robota** (`Disallow: /`) | **0 / 47** |

Jediné `Disallow: /` v celém vzorku patří robotu **YoudaoBot** (hobynaradi.cz) — tedy
čínskému vyhledávači, ne AI robotu.

Úpravy jsou většinou přílepky k výchozím pravidlům (kulina.cz +2 řádky `Disallow`,
autodoplnky-obchod.cz +5). ⛔ **Ale ne vždy:** profi-dj.cz má proti výchozímu souboru
**o dvě pravidla míň** a jedno přepsané (`/*?order` → `/*?order=`), drevenysvet.online
má celý soubor na jednom řádku. Základ tedy není všude stejný a příčinu neznám —
nepsat, že „jde jen přidávat na konec", i když to nápověda říká.

### 4.2 ⛔ HLAVNÍ NÁLEZ — povolení AI robotů ruší výchozí zákazy

Šest e-shopů má vlastní skupiny pro AI roboty. **Všechny povolují, žádný nezakazuje.**
A protože podle specifikace platí pro robota jen jeho nejspecifičtější skupina, přišly
tím tyto e-shopy o výchozí ochranu:

| E-shop | Skupin celkem | Skupina `*` | Skupiny AI robotů |
|---|---|---|---|
| madvell.cz | 3 | 40× Disallow | GPTBot, ChatGPT-user — **jen `Allow: /`, 0× Disallow** |
| pocitarna.cz | 12 | 40× Disallow | 11 AI robotů — **jen `Allow: /`, 0× Disallow** |
| gigamat.cz | 12 | 40× Disallow | 11 AI robotů — **jen `Allow: /`, 0× Disallow** |
| ptakoviny-cb.cz | 12 | 40× Disallow | 11 AI robotů — **jen `Allow: /`, 0× Disallow** |
| giovani.cz | 16 | 43× Disallow | 15 AI robotů — `Allow: /` + jediné `Disallow: /klient/` |
| hobynaradi.cz | 10 | 43× Disallow | ClaudeBot má **prázdnou skupinu** (žádné pravidlo) |

Důsledek pro robota s vlastní skupinou: přestává pro něj platit 40 (resp. 43) výchozích
zákazů — tedy `/vyhledavani/`, `/kosik/`, `/login/`, filtrové a řadicí parametry
(`?order`, `?priceMin`, `?pv*`), stránky `/*:diskuse`, `/*:klient-hodnoceni` a další.

**pocitarna.cz a ptakoviny-cb.cz mají byte-identický soubor** (stejný otisk) a gigamat.cz
je téměř shodný — jde o kolující šablonu, ne o individuální práci. U jednoho z nich je
blok nadepsaný komentářem o „maximálním povolení pro AI".
⛔ **Jméno autora podepsané v souboru do článku NEPATŘÍ.**

### 4.3 ⛔ llms.txt — 200 na všech, obsah na třech

| Zjištění | Počet |
|---|---|
| `/llms.txt` vrátí **HTTP 200** | **47 / 47** |
| tělo je **prázdné** (`Content-Length: 0`) | **44 / 47** |
| má skutečný obsah | **3 / 47** — nemeckyeshop.cz (6 681 B), profi-dj.cz (7 862 B), brainmarket.cz (2 807 B) |

Shoptet tedy vystavuje `/llms.txt` každému e-shopu, i když do pole nikdo nic nenapsal.
Ověřeno i přímo přes hlavičky: `HTTP/2 200`, `content-type: text/plain`, `content-length: 0`.

⛔ **Praktický dopad:** kontrola typu „vrací /llms.txt dvoustovku?" označí za vyřešené
i e-shopy, které soubor nemají vyplněný. Náš vlastní článek `llms-txt-navod` sice
netvrdí, že stačí 200, ale test na existenci souboru je běžný postup.

### 4.4 Server nikoho neblokuje

Homepage stažená s pěti různými user-agenty (GPTBot, OAI-SearchBot, ClaudeBot,
PerplexityBot, CCBot) i s běžným prohlížečem:

- **200 u všech 47 e-shopů a všech 5 robotů** — žádné rozlišování podle user-agenta
- **X-Robots-Tag: nikde** (0 / 47)
- `Server: openresty` u všech 47, žádná Cloudflare hlavička (`CF-Ray`) — provoz jde přes
  infrastrukturu Shoptetu, ne přes CDN třetí strany

⛔ **Limit:** testoval jsem jen řetězec user-agenta z běžné IP adresy. Skuteční roboti
chodí z ověřitelných rozsahů IP a někdo může filtrovat až podle nich. Neměřil jsem
ani rate-limiting.

---

## 5. ⛔ Kolize s vlastním obsahem — NUTNÁ OPRAVA

Článek `/blog/ai-crawler-robots-txt/` obsahuje ukázku s `User-agent: OAI-SearchBot` +
`Allow: /` a k ní větu:

> „Pokud nemáte jiné blokující pravidlo, `Allow: /` obvykle nic nemění … Smysl to má
> hlavně pro přehlednost a v případě, kdy máte obecné `User-agent: *` s blokací."

Druhá polovina té věty je **obrácená naruby**. Právě když má web neprázdnou skupinu
`User-agent: *`, přidání vlastní skupiny pro robota tu skupinu pro něj **zruší** —
neupřesní ji. Na Shoptetu, kde výchozí `*` má 40 zákazů, to má reálný dopad
a našel jsem ho ve volné přírodě u čtyř e-shopů.

**Akce:** opravit `ai-crawler-robots-txt` (upřesnit větu + doplnit, jak povolení zapsat
bezpečně: zopakovat důležité `Disallow` i uvnitř skupiny robota) a přiznat to otevřeně.

---

## 6. Limity měření — musí být v článku

1. **47 e-shopů není reprezentativní vzorek** desítek tisíc Shoptet obchodů; ShopRoku
   navíc vychyluje vzorek k větším obchodům.
2. **Jeden den** (8. 8. 2026).
3. **Testován jen user-agent, ne ověřené IP rozsahy robotů** ani rate-limiting.
4. **Neměřil jsem, jestli roboti pravidla dodržují** — robots.txt je pokyn, ne zámek.
5. Prázdné `llms.txt` jsem ověřoval hlavičkou `content-length`, ne opakovaně v čase.

---

## 7. Teze článku

> Na Shoptetu nikdo AI roboty neblokuje — ze 47 měřených e-shopů ani jeden. Zajímavější
> je opak: šest e-shopů jim přístup výslovně povolilo a čtyřem z nich tím zmizelo
> všech 40 výchozích zákazů, protože podle specifikace platí pro robota jen jeho vlastní
> skupina. Povolení AI robotům otevřelo i vyhledávání, košík a filtrované adresy.
> A `llms.txt` vrací dvoustovku na všech 47 e-shopech, ale obsah má jen na třech.

---

## 8. Zdroje

- **vlastní měření 8. 8. 2026** — 47 e-shopů, surová data `out-bots.json`, souhrn `tabulka2.txt`
- Shoptet Podpora — HTML kódy (`podpora.shoptet.cz/html-kody/`): editace robots.txt, append, 8 192 znaků, pole llms.txt
- Google Search Central — robots.txt specifikace: „Only one group is valid for a particular crawler"
- ShopRoku 2025 — výsledky (zdroj vzorku)
- vlastní články: `shoptet-strukturovana-data-mereni` (díl 1), `ai-crawler-robots-txt`,
  `llms-txt-navod`, `cloudflare-ai-bot-blocking`
