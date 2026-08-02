# Research — JavaScript a AI roboti

**Řádek plánu:** `javascript rendering pro ai`
**Datum:** 2026-08-02 · **Kategorie:** tutorial · **Tagy:** technicke-zaklady, ai-platformy

---

## 1. Kolizní kontrola

| Kandidát | Co v něm je | Verdikt |
|---|---|---|
| `ai-crawler-robots-txt` | Které roboty pustit, tabulka botů | Sousedí. Tam *jestli robota pustit*, tady *co uvidí, když ho pustíte*. Prolinkovat. |
| `lighthouse-ai-check` | Audit Agentic Browsing | Sousedí. Nástroj kontroluje i dostupnost obsahu, ale JS rendering u AI robotů neřeší. |
| `core-web-vitals-pro-ai` | Rychlost a technika | Zmiňuje JS okrajově, neduplikuje. |
| `ai-friendly-url-struktura` | Adresy | Nesouvisí. |

**Verdikt: téma volné.** Žádný článek neřeší, co robot bez vykreslení JavaScriptu skutečně vidí.

---

## 2. Primární zdroj — a jeho zásadní problém

### Vercel + MERJ: „The rise of the AI crawler"

**Publikováno 17. prosince 2024.** Data za předchozí měsíc. Měřeno na `nextjs.org`,
na síti Vercelu a na dvou pracovních portálech s odlišnými technologiemi.

| Robot | Stažení za měsíc | Vykresluje JavaScript? |
|---|---|---|
| Googlebot | 4,5 mld. | ano |
| GPTBot (ChatGPT) | 569 mil. | **ne** — soubory JS stáhne u 11,50 % požadavků, ale nespustí |
| Claude | 370 mil. | **ne** — stáhne u 23,84 %, nespustí |
| **AppleBot** | **314 mil.** | **ANO** — „renders JavaScript through a browser-based crawler, similar to Googlebot" |
| PerplexityBot | 24,4 mil. | ne |
| Gemini | — | ano, „use of Google's infrastructure gives it the same rendering capabilities" |

Doslova ke spouštění: *„ChatGPT and Claude crawlers do **fetch** JavaScript files
(ChatGPT: 11.50%, Claude: 23.84% of requests), they don't **execute** them."*

Vyloučeno ze studie: **Microsoft Copilot** — „lacks a unique user agent for tracking".

---

## 3. ⛔ Jádro článku — ta studie je stará

**Je jí devatenáct měsíců.** Přesto ji celý obor cituje jako „realitu roku 2026",
a to bez uvedení data. Prošel jsem devět textů z léta 2026, které tvrdí, že
„žádný AI robot nevykresluje JavaScript"; **všechny stojí na tomhle jediném měření
z prosince 2024** a ani jeden to nepřiznává.

**Novější veřejné měření se mi najít nepodařilo.**

Z toho plynou dvě věci, které musí být v článku:

1. Tvrzení je **pravděpodobně pořád platné**, ale je to **starý údaj**, ne dnešní měření.
2. **Plošná formulace „AI roboti nevykreslují JavaScript" je nepřesná i podle toho zdroje.**
   AppleBot podle něj vykresluje a Gemini běží na infrastruktuře Googlu. Kdo ji opakuje
   bez výjimek, opakuje ji špatně.

---

## 4. Proč je doporučení robustní i tak

Tohle je důvod, proč článek dává smysl navzdory stáří dat:

> Serverem vykreslený obsah je správná odpověď v obou případech.
> Když robot JavaScript nespouští, je to jediná cesta, jak se k obsahu dostane.
> Když ho spouštět začne, serverové vykreslení mu neublíží.

Doporučení se tedy nemění podle toho, jak dopadne budoucí měření — a to je vzácné.

---

## 5. Co dát do článku prakticky

Jak si to ověřit na vlastním webu, bez nástrojů a bez důvěry v cizí čísla:

1. **`curl -s <URL> | grep "<hledaný text>"`** — co server vrátí bez prohlížeče.
2. **Zobrazit zdroj stránky** (ne inspektor — ten ukazuje DOM po JS).
3. **Vypnout JavaScript v prohlížeči** a stránku načíst znovu.

Co patří do serverem vráceného HTML: nadpisy, hlavní text, cena a dostupnost,
odpovědi na otázky, odkazy do navigace. Co může zůstat za JavaScriptem:
interaktivní prvky, filtry, mapy, chat.

---

## 6. Zdroje

- vercel.com/blog/the-rise-of-the-ai-crawler — Vercel + MERJ, **17. 12. 2024** (jediný primární zdroj)
- vlastní články: `ai-crawler-robots-txt`, `lighthouse-ai-check`, `jak-cist-studie-o-ai-viditelnosti`
