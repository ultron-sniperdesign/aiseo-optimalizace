# Research — ai prohlizece atlas comet

**Řádek plánu:** `ai prohlizece atlas comet` → „AI prohlížeče (Atlas, Comet) — co znamenají pro váš web"
**Datum researche:** 2026-07-28 · **Kategorie:** analysis

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `ai-nakupni-agenti` | Nákupní agenti vybírají produkt z dat; datový soubor a stránka musí sedět | **Jiná věc.** Tam agent nakupuje, tady prohlížeč čte a měří se to špatně. |
| `lighthouse-ai-check` | Sekce „Stav návrhu WebMCP" + „Co Agentic Browsing audit neukáže" | **Sousedí.** Ten řeší, jak si stránku otestovat pro agenty. Tenhle řeší, co prohlížeč dělá s návštěvností. Prolinkovat. |
| `zero-click-ai` | Zero-click obecně | Sousedí — tady je konkrétní mechanismus rozbité atribuce. |
| `ai-navstevnost-konverze` | Měření návštěvnosti z AI | **Nejbližší.** Musí se lišit: tam obecné měření, tady konkrétně proč se AI prohlížeč zobrazí jako Direct. |
| `ai-crawler-robots-txt` (refresh 28. 7.) | Roboti a robots.txt | **Přímo navazuje** — klíčový bod je, že prohlížeč NENÍ robot a robots.txt na něj neplatí. |

Zmínky „Atlas" v `organization-schema-pro-znacku` a `schema-markup-ai-citace-test`
jsou **Search Atlas** (dodavatel SEO nástrojů), ne ChatGPT Atlas. False positive.

**Závěr: téma je volné.**

---

## 2. Klíčové zjištění, které mění tezi

**AI prohlížeče se v user-agentu hlásí jako Chrome — přesně jako Chrome, ne „něco jako Chrome".**

Z toho plyne všechno ostatní:

| Důsledek | Detail |
|---|---|
| **robots.txt na ně neplatí** | Nejsou to crawleři, ale prohlížeč v rukou uživatele. Není pro ně řídicí token. |
| **V logu je nepoznáte** | Splývají s běžnou návštěvou z Chrome. Žádné jednoduché UA filtrování nefunguje. |
| **Detekce jde jen nepřímo** | Chování (téměř nulové prodlevy mezi událostmi, pořadí kroků mimo obvyklou sekvenci). |
| **Výjimka: agentní režim** | Existuje hlavička `Signature-Agent: "https://chatgpt.com"` s podpisem v `Signature-Input` / `Signature`. **To je Web Bot Auth v praxi** — mechanismus, který je v `ai-crawler-robots-txt` popsaný jako draft, tady už běží. |

---

## 3. Co se rozbíjí: měření

| Kanál | Jak se v analytice projeví |
|---|---|
| **chatgpt.com (web)** | Přidává `utm_source=chatgpt.com` → v datech **je vidět** |
| **ChatGPT Atlas (prohlížeč)** | Referrer bývá odstraněný → sedí jako **Direct** nebo `(not set)` |
| **Perplexity Comet** | Totéž — splývá s přímými návštěvami |

**Praktický důsledek:** návštěva, která reálně přišla z AI, se v reportu smíchá s lidmi,
kteří si adresu napsali ručně nebo přišli ze záložky. Direct tím tiše roste a vypadá to,
že roste přímá poptávka po značce.

---

## 4. Peněžní riziko (opatrně formulovat)

Objevují se upozornění, že Atlas v agentním režimu **umí klikat způsobem, který se
nedá odlišit od člověka — včetně kliků na placenou reklamu.** Firma pak může platit
za proklik, který neudělal zákazník.

**⛔ Nepřehnat:** není veřejně změřené, jak velký ten objem je. Formulovat jako
riziko k hlídání, ne jako doloženou ztrátu.

---

## 5. Co firma reálně ovlivní

**Ovlivní:**
- Aby se obsah do Atlasu vůbec dostal, **nesmí být blokovaný `OAI-SearchBot`** — objevování
  pořád běží přes crawler, ne přes prohlížeč. (Přímá vazba na `ai-crawler-robots-txt`.)
- Čitelnost a strukturu stránky — platí stejné věci jako pro agenty obecně.
- Vlastní čtení dat: počítat s tím, že část Directu není Direct.

**Neovlivní:**
- Jestli si uživatel Atlas nainstaluje.
- Jestli prohlížeč referrer pošle.
- Rozlišení agentního a lidského prokliku bez podepsané hlavičky.

**⛔ Do článku nedávat:** rady typu „optimalizujte web pro AI prohlížeče". Není doloženo,
že by prohlížeč vyžadoval jinou práci než agenti obecně, které už web pokrývá.

---

## 6. Teze článku

> **AI prohlížeč nemění, co píšete. Rozbíjí, jak měříte — a přidává riziko u placené reklamy.**

## 7. Struktura draftu

1. Krátká odpověď
2. Co to vlastně je a proč to není crawler
3. Hlásí se jako Chrome — a co z toho plyne (tabulka důsledků)
4. Co se rozbíjí v analytice (srovnání chatgpt.com vs. Atlas/Comet)
5. Riziko u placené reklamy
6. Co ovlivníte a co ne (DoDont)
7. Jak to poznat, když to jde (Signature-Agent + chování; vazba na Web Bot Auth)
8. Časté chyby
9. Co si odnést

## 8. Zdroje

- OpenAI Help Center — Publishers and Developers FAQ
- MarTech — jak GA4 zaznamenává provoz z Comet a Atlas
- Search Engine Land — Atlas a napodobování lidských kliků v reklamě
- HUMAN Security, Stape, Spyglasses — identifikace agentního provozu, `Signature-Agent`
- Simon Willison — user-agent ChatGPT agenta
