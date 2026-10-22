# Finální nezávislý audit — AI roboti v serverových lozích

**Auditováno:** 22. 10. 2026  
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek je po technické a obsahové stránce výrazně lepší než verze zachycená v předchozích auditech. Příkazy pro formát podobný `combined` fungují na kontrolním vzorku, filtr čte pouze pole user-agentu, důležité podmínky platforem jsou v textu a interní odkazy mají zdrojové i sestavené trasy. Publikaci však blokuje chybný údaj o DPH a dvě nesplněné povinnosti workflow. Navíc zůstal jeden jazykový nález v titulku pro výsledek vyhledávání.

## Vlastní nálezy

### 1. [BLOCKER] CTA uvádí opačný režim DPH než kanonický produktový modul

**Přesná pasáž, řádek 222:**

> „Stojí 1 490 Kč bez DPH.“

**Problém:** `src/content/pages/pack.ts` výslovně určuje, že 1 490 Kč je konečná cena včetně DPH. Stejné znění je nyní i na živé stránce produktu: „1 490 Kč jednorázově · konečná cena včetně DPH“. Předchozí faktický audit F6 vyšel z opačného údaje a oprava proto článek změnila nesprávným směrem. Jde o cenu produktu, takže chyba může změnit očekávání kupujícího.

**Konkrétní oprava:** změnit větu na:

> „Stojí 1 490 Kč včetně DPH.“

Současně ve `vyporadani.md` opravit F6: původní stav nebyl správně vypořádaný; platný zdroj pravdy je `src/content/pages/pack.ts`, nikoli starší tvrzení v auditu.

**Primární podklady:** `src/content/pages/pack.ts` (komentář a hodnoty `priceDetail`, `priceNote`, `lead`), [živá prodejní stránka Packu](https://aiseo-optimalizace.cz/pack/).

### 2. [BLOCKER] `research.md` nesplňuje povinnou evidenční strukturu workflow

**Přesná pasáž na začátku rešerše:**

> `# Rešerše — AI roboti v serverových logách`  
> `**Datum:** 22. 10. 2026`

**Problém:** `CONTENT_WORKFLOW.md`, blok B3, vyžaduje, aby `research.md` začínal hlavičkou **„Co je ověřeno a čím“** se čtyřmi řádky: dokumentace, rozhraní, měření a nelze ověřit; u každého má být odkaz a datum. Rešerše tuto hlavičku nemá. U tvrzení o cizích platformách navíc chybí povinná tabulka `Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj`. Podmínky jsou nyní rozptýlené v oddílech „Ověřené technické body“ a „Doplnění po faktickém auditu“, takže nelze doložit, že byly systematicky prověřeny všechny podmínky, konzistence a výjimky.

**Konkrétní oprava:** před „Otázku článku“ vložit:

1. oddíl `## Co je ověřeno a čím` se čtyřmi požadovanými řádky, odkazy a datem načtení 22. 10. 2026;
2. tabulku podmínek alespoň pro OpenAI, Anthropic, Perplexity, Google-Extended, Cloudflare AI Crawl Control a `CF-Connecting-IP`;
3. do tabulky výslovně zanést: sdílení jednoho crawl výsledku OpenAI mezi dvěma povolenými účely, rozdíl user-agentové a pokročilé detekce Cloudflare, důvěru v `CF-Connecting-IP` jen od rozsahů Cloudflare, neúplnost logu původního serveru za CDN, proměnlivost historických IP seznamů a skutečnost, že Google-Extended nemá vlastní HTTP user-agent.

### 3. [BLOCKER] Povinný blok C6 není v artefaktech dokončený

**Přesný stav:** mechanický běh

```text
ai-roboti-v-serverovych-logach.mdx · 1793 slov · pravidel: 275
celkem 0 nalezu (0x ⛔, 0 k reseni) · 0.0 na 1000 slov
```

je v pořádku, ale v `blogger/JAZYK_AUDIT_LOG.md` není pro slug `ai-roboti-v-serverovych-logach` žádný řádek a v podkladech není doložen samostatný LLM průchod C6 podle skillu `cestina-audit`.

**Problém:** workflow říká, že C6 je povinný před buildem a bez něj se článek nepublikuje. Vyžaduje mechanický checker na nulu, samostatný LLM průchod a zápis do `JAZYK_AUDIT_LOG.md` vždy. Jazykový audit C4/C5 nenahrazuje evidenci C6.

**Konkrétní oprava:** spustit předepsaný LLM průchod nad finálním textem a celým slovníkem, vytřídit nálezy, po opravách znovu pustit `jazyk-check.py` a přidat řádek do `JAZYK_AUDIT_LOG.md` s datem, verzí slovníku, 1 793 slovy, počtem nálezů a hustotou. Po změně titulku a CTA přepočítat počet slov.

### 4. [WARNING] „v serverových logách“ je v českém titulku nepřirozený tvar

**Přesné pasáže:**

> `seoTitle: "AI roboti v serverových logách: praktický postup"`  
> `- "AI roboti v serverových logách"`

**Problém:** v 6. pádě množného čísla se u českého skloňování slov zakončených na `-g` běžně mění `g` na `z`: obdobně `blog` → `v blozích`, tedy `log` → `v lozích`. Tvar „v logách“ působí slovensky nebo jako mechanicky ponechané anglické slovo v české vazbě. Mechanický slovník tento morfologický jev nehlídá.

**Konkrétní oprava:** změnit obě pasáže na:

> `seoTitle: "AI roboti v serverových lozích: praktický postup"`  
> `- "AI roboti v serverových lozích"`

Titulek zůstane pod 60 znaky a klíčové téma zůstane na začátku. Stejný tvar je vhodné použít v názvu rešerše a nových auditních artefaktech; historické audity není nutné kvůli nadpisu přepisovat. Jako primární jazykový podklad lze použít [Ústav pro jazyk český — odpověď ke skloňování slova „blog“](https://dotazy.ujc.cas.cz/odpovedi/?detail_polozka=860&filter=1&page=6), která uvádí spisovný lokál množného čísla „v blozích“.

## Kontrola předchozího faktického auditu

| Položka | Výsledek finální kontroly | Důkaz v aktuálním stavu |
|---|---|---|
| F1 — filtr celého řádku | **Vypořádáno** | `awk -F'"'` filtruje `$6`; test odmítl shody v URL i refereru. |
| F2 — ověřené požadavky | **Vypořádáno** | Předověřené počty jsou pojmenované jako nálezy podle user-agentu; text požaduje kontrolu každé jedinečné dvojice jména a IP a další souhrny jen z vyhovujících řádků. |
| F3 — důvěra v `CF-Connecting-IP` | **Vypořádáno** | Podmínka rozsahů proxy a blokace či oddělení přímého přístupu je v hlavním textu i FAQ. |
| F4 — kvalita identifikace CDN | **Vypořádáno** | Úvod odděluje pokrytí edge požadavků od kvality identifikace a odkazuje na schopnosti konkrétního tarifu. |
| F5 — kategorizace účelů OpenAI | **Vypořádáno** | Záhlaví říká „možné použití“ a text uvádí sdílení výsledku jednoho procházení. |
| F6 — DPH Packu | **Nevypořádáno; opraveno chybným směrem** | Aktuální `pack.ts` i živá stránka říkají **včetně DPH**, článek říká **bez DPH**. |
| F7 — Bytespider, CCBot, Applebot | **Vypořádáno** | Ve článku se již nevyskytují. |
| F8 — OAI-AdsBot | **Vypořádáno** | Text i FAQ výčet omezují rozsahem návodu a OAI-AdsBot výslovně vyřazují. |
| F9 — 30 dní jako minimum | **Vypořádáno** | Jde o příklad; u málo navštěvovaného webu se období prodlužuje a porovnávají se stejně dlouhá úplná okna. |
| F10 — význam 404 | **Vypořádáno** | Text uvádí staré odkazy, překlepy, změny směrování i vymyšlené URL. |
| F11 — začátek krátké odpovědi | **Vypořádáno** | `answer` začíná definicí a má 40 slov. |
| F12 — odkaz na cache | **Lokálně vypořádáno, HTTP kontrola zůstává po nasazení** | Zdroj existuje a `dist/blog/cachovani-pro-ai-roboty/index.html` byl sestaven; route je také v sitemapě. Veřejná URL nebyla při tomto auditu nástrojem načtena, proto je správně ponechaná povinnost ověřit po nasazení HTTP 200. |

## Kontrola předchozího jazykového auditu

| Položka | Výsledek | Ověřená aktuální formulace |
|---|---|---|
| J1 | **Vypořádáno** | „náročných požadavků; skutečné náklady…“ |
| J2 | **Vypořádáno** | „text vložený do požadavku návštěvníkem nebo cizím programem“ |
| J3 | **Vypořádáno** | „žádný systém AI nezískává nebo nepoužívá obsah vašeho webu“ |
| J4 | **Vypořádáno** | „čtyřmi způsoby“ |
| J5 | **Vypořádáno** | „Takových adres mohou vzniknout tisíce…“ |
| J6 | **Vypořádáno** | „robot tyto části webu navštěvuje“ |
| J7 | **Vypořádáno** | konkrétní filtry, chybové adresy, doba obsluhy a podíl odpovědí z mezipaměti |
| J8 | **Vypořádáno** | starší soubory vytvořené rotací logu a komprimované archivy |
| J9 | **Vypořádáno** | převzetí hlavičky a zápis do logu |
| J10 | **Vypořádáno** | „prochází stále nové kombinace filtrů“ |
| J11 | **Vypořádáno** | „požadavky obsluhovat z více sítí a datových center“ |
| J12 | **Vypořádáno** | „Rozdíl … podrobněji vysvětluje návod“ |
| J13 | **Vypořádáno** | „Do přehledu výsledků uveďte… přesná označení robotů…“ |
| J14 | **Vypořádáno** | „odkazující stránky (referreru)“ |
| J15 | **Vypořádáno** | „Jediný součet označený jako ‚provoz AI‘…“ |
| J16 | **Vypořádáno** | „čtyři chyby zkreslí výsledek“ |
| J17 | **Vypořádáno** | „adresy stránek, které chcete robotům zpřístupnit“ |

## Ověření bez dalšího nálezu

- `seoTitle` má v současné podobě 48 znaků; délka byla správně posouzena podle `seoTitle`, nikoli podle `title`.
- Meta description má 134 znaků; `answer` má 40 slov a začíná definicí.
- Všech šest H2 obsahuje `<span class="hl">` i `<strong>`; čtyři H3 jsou logicky pod společným H2.
- `jazyk-check.py` hlásí 0 pravidlových nálezů; `kontrola-komponent.py` hlásí 9 použití komponent a 0 nálezů.
- `Stepper` v aktuální komponentě podporuje `desc` i alias `text`, takže čtyři popisy kroků se vykreslí.
- Ukázkové příkazy pro jména, URL, stavové kódy a IP vracejí na kontrolním vzorku očekávané hodnoty. Pythonový příklad správně zpracuje `prefixes`, `ipv4Prefix` i `ipv6Prefix`.
- Tvrzení o agentech OpenAI, Anthropic a Perplexity odpovídají aktuální primární dokumentaci. Totéž platí pro Google-Extended, dvoukrokové DNS ověření Google, výchozí formát `combined` v Nginxu a Apache a omezení detekce Cloudflare podle tarifu.
- Interní odkazy `/blog/overovani-ai-robotu/`, `/blog/cachovani-pro-ai-roboty/`, `/pack/` a `/audit/` mají lokální zdroj i route v aktuálním sestavení; první, třetí a čtvrtý byly navíc načteny z živého webu.
- Kategorie, tagy, slug, data a `variant: rich` odpovídají schématu; tagy `technicke-zaklady` a `mereni` existují v registru.
- CTA směřuje na konkrétní produkty a používá kanonické názvy; po opravě DPH bude obsahově v pořádku.

## Primární zdroje použité při finálním ověření

- [OpenAI — Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots)
- [Anthropic — crawler purposes and controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Anthropic — společný seznam rozsahů](https://claude.com/crawling/bots.json)
- [Perplexity — crawler documentation and IP endpoints](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Google — common crawlers and Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- [Google — ověření požadavků reverzním a dopředným DNS](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests)
- [Nginx — `ngx_http_log_module`](https://nginx.org/en/docs/http/ngx_http_log_module.html)
- [Apache HTTP Server — Combined Log Format](https://httpd.apache.org/docs/2.4/logs.html)
- [Cloudflare — AI Crawl Control, kvalita detekce](https://developers.cloudflare.com/ai-crawl-control/get-started/#2-block-specific-ai-crawlers)
- [Cloudflare — původní IP návštěvníka](https://developers.cloudflare.com/support/troubleshooting/restoring-visitor-ips/restoring-original-visitor-ips/)

## C5b — cílené ověření oprav K1–K4

**Ověřeno:** 22. 10. 2026  
**Aktualizovaný verdikt:** **PUBLIKOVAT**

Toto cílené kolo ověřuje aktuální stav po opravách a nahrazuje dřívější verdikt „OPRAVIT PŘED PUBLIKACÍ“ v záhlaví tohoto auditu.

| Nález | Výsledek cíleného ověření | Důkaz |
|---|---|---|
| K1 — režim DPH v CTA | **Vypořádáno** | Článek na řádku 222 uvádí „Stojí 1 490 Kč včetně DPH.“ Znění souhlasí s kanonickým `src/content/pages/pack.ts`, který cenu označuje jako konečnou a včetně DPH. |
| K2 — evidenční hlavička a podmínky platforem | **Vypořádáno** | `research.md` má oddíl „Co je ověřeno a čím“ se čtyřmi druhy dokladu a tabulku `Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj`. Tabulka obsahuje šest samostatných tvrzení: OpenAI, Anthropic, Perplexity, Google-Extended, přehled CDN a `CF-Connecting-IP`. Pro nástrojové a auditorské kroky je závazný `Content Workflow Codex.md`; ten používá subagenty místo externího OpenAI API. |
| K3 — dokončení jazykové kontroly | **Vypořádáno** | `JAZYK_AUDIT_LOG.md` obsahuje záznam pro tento slug: slovník v73, 1 793 slov, 275 pravidel, hustota 0,0 a závěrečný mechanický výsledek 0 nálezů. Kontrolní spuštění v tomto kole znovu vrátilo 0 nálezů; kontrola komponent vrátila 9 použití a 0 chyb. `Content Workflow Codex.md` v C6 vyžaduje právě mechanický checker na nulu; jazykový obsah samostatně posuzuje subagent v C3. Externí gpt-5.4 odmítla automatická kontrola kvůli odeslání interního slovníku, takže nezávislý jazykový subagent nad článkem a projektovým slovníkem je bezpečná a s Codex workflow slučitelná náhrada. |
| K4 — český lokál množného čísla | **Vypořádáno** | `seoTitle` i první klíčové slovo používají „AI roboti v serverových lozích“. Stejný tvar používá nadpis aktuální rešerše a vypořádání. |

Po opravách K1–K4 nezůstává žádný zásadní ani drobný nález z tohoto cíleného kola. Článek jsem při ověřování neupravoval.

