---
title: "GEO — Generative Engine Optimization (citace v ChatGPT a Perplexity)"
description: "Co je GEO? Optimalizace obsahu pro citace v generativní AI — ChatGPT, Perplexity, Claude, Gemini. Signály: fakta, čísla, citovatelnost, brand authority."
answer: "GEO (Generative Engine Optimization) je optimalizace obsahu tak, aby byl citován jako zdroj v odpovědích generativních AI nástrojů — ChatGPT, Perplexity, Claude, Gemini. Místo modrého odkazu cílíte na to být tím zdrojem, ze kterého AI model čerpá fakta při generování své odpovědi."
slug: "geo"
order: 2
abbr: "GEO"
updated: "2026-04-29"
faq:
  - q: "Jak optimalizovat pro ChatGPT?"
    a: "Strukturovaný obsah s jasnými definicemi typu 'X je …', datově hutné odstavce s čísly a procenty, FAQPage schema, backlinks z autoritních zdrojů (E-E-A-T) a brand mentions v relevantních komunitách (Reddit, Quora, oborové weby)."
  - q: "Je GEO náhradou klasického SEO?"
    a: "Ne. GEO buduje na základech SEO. Stránka, která je v Googlu na pozici 1, ale je špatně strukturovaná pro citaci, se v ChatGPT nemusí objevit vůbec. Bez kvalitního SEO vás AI engine ani neindexuje."
  - q: "Které AI platformy GEO pokrývá?"
    a: "Primárně ChatGPT (OpenAI), Perplexity, Claude (Anthropic) a Gemini (Google). Každá má vlastní crawler (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended) a vlastní citační vzorce. GEO playbook je pro všechny podobný — fact-density, jasné definice, brand authority."
  - q: "Jak změřit, jestli mě AI cituje?"
    a: "Ručně přes ChatGPT/Perplexity dotazy na vaše top 10 KW (jednou měsíčně). Pro automatizaci nástroje Otterly, Profound nebo Brand Radar od Ahrefs — měří citation share napříč LLM platformami. Brand mention bez odkazu je také validní GEO signál."
  - q: "Kolik času trvá, než GEO investice začne fungovat?"
    a: "Rychlejší než SEO — typicky 1–3 měsíce. AI engines nemají retargeting cyklus jako Google ranking, citace se aktualizují průběžně s novým crawlem. Faktor: jak rychle se nový obsah dostane do training/RAG dat dané platformy (ChatGPT crawl latence ~14 dní, Perplexity blíž real-time)."
---

## Jak <span class="hl">GEO</span> funguje <strong>v praxi</strong>

Když uživatel zadá ChatGPT dotaz „jaké jsou nejlepší AI nástroje pro SEO 2026", model nevytahuje top 10 modrých odkazů jako Google. Místo toho **vygeneruje odpověď v přirozené řeči** a u některých platforem (Perplexity, ChatGPT v search módu, Gemini, Claude search) k ní přidá **citace zdrojů**.

GEO řeší: jak udělat, aby právě váš web byl tím citovaným zdrojem. Pojem zavedli akademici z Princetonu v roce 2023 (paper „GEO: Generative Engine Optimization" — Aggarwal et al.), kde testovali, jak různé úpravy obsahu mění pravděpodobnost citace v generativní odpovědi. Klíčové zjištění: **strukturovaný obsah s konkrétními fakty zvyšuje citation rate o 30–40 %** oproti volně psanému textu.

## <span class="hl">GEO</span> vs. <span class="hl">SEO</span> — <strong>klíčový rozdíl</strong>

| | SEO | GEO |
|---|---|---|
| **Cíl** | Pozice v top 10 SERPu | Citace v AI odpovědi |
| **Měření** | Pozice, organic traffic, CTR | Mention rate, citation share, brand visibility |
| **Hlavní platformy** | Google, Seznam, Bing | ChatGPT, Perplexity, Claude, Gemini |
| **Klíčové signály** | Backlinks, on-page, E-E-A-T | Strukturovaný obsah, citovatelnost, fact-density |
| **Co AI hledá** | Index a ranking faktory | Konkrétní fakta, čísla, citáty |
| **Časový horizont** | 3–6 měsíců | 1–3 měsíce |

Detailní srovnání všech 4 disciplín v [pillar průvodci](/seo-vs-geo-vs-aeo-vs-aio/).

## Co <span class="hl">AI hledá</span> v <strong>obsahu</strong>

### Fact-density — fakta jsou základ

AI engines preferují **datově hutný obsah**:

- ✅ „Google AI Overview se v ČR zobrazuje pro ~30 % informačních dotazů a snižuje organic CTR o 35–60 %."
- ❌ „Hledanost se zvyšuje rychle."

První věta dá AI modelu konkrétní citační hook. Druhá věta je „omáčka" — model ji ignoruje.

### Krátké, věcné definice

Formát „**X je …**" je **přímý signál** pro AI scrapery, kde najdou definici daného pojmu:

- ✅ „**GEO je optimalizace pro citace v generativní AI.**"
- ❌ „GEO se zaměřuje na to, jak v dnešní digitální době dostat firmu do AI…"

První formulace je čistá definice — AI ji vytáhne 1:1. Druhá je marketingová vata.

### Strukturované odstavce

**Jeden nápad na odstavec.** AI scrapery dělají sliding window přes text — pokud je v jednom odstavci 5 myšlenek, model si vezme jen tu první nebo poslední.

### Citace a zdroje

- Explicitní atribuce („Podle GSC dat za Q1 2026…", „Studie Princeton 2023 ukázala…")
- Linky na primární zdroje (ne na sekundární blogposty)
- Datace tvrzení („k dubnu 2026", „Q1 2026 data") — AI engines preferují recenční obsah

### Brand authority

AI engines váží **brand mentions** v autoritních komunitách (Reddit, Hacker News, Quora, oborové fóra) jako citation signal. Web bez brand mentions má citation rate o ~40 % nižší než stejně kvalitní obsah s mentions (Princeton GEO paper).

## Praktický <span class="hl">GEO</span> <strong>playbook</strong>

### Krok 1 — Audit obsahu na fact-density

Pro každý článek spočítejte „fakta na 100 slov":

- ≥ 3 konkrétní fakta (číslo / procento / datum / studie) per 100 slov = ✅ AI-friendly
- < 1 fakt per 100 slov = ❌ moc obecné, AI to přeskočí

### Krok 2 — Restrukturujte úvod

První 60 slov článku jsou kritické — AI scraper z nich vytváří citaci. Přepište:

- Definice ve formátu „X je …" jako tučný odstavec
- 1–2 klíčová fakta s čísly
- Zbytek dlouhého kontextu pod tím

### Krok 3 — Přidejte FAQ s autoritativními odpověďmi

FAQ není jen pro [AEO](/aeo/) (Google AI Overviews) — je to taky **ChatGPT/Perplexity citation goldmine**. Otázky jsou typicky reálné dotazy uživatelů (z GSC nebo PAA), odpovědi jsou krátké a faktické.

### Krok 4 — Buduje brand mentions

Bez brand authority necitujete v ChatGPT, ani kdybyste byli na 1. pozici v Googlu. Strategie:

- **Reddit / Quora** — odpovídejte na otázky ve vašem oboru, lincujte na vlastní obsah pouze tam, kde má smysl
- **Guest posts** na autoritních CZ blogách (Marketing Journal, Marketing Sales Media, Lupa.cz)
- **Podcasts** — host i guest, transcripty jsou indexovány AI
- **Press releases** s datovou stránkou (vlastní studie, analýzy trhu)
- **Wikipedie** — pokud je váš brand notable, Wikipedia entry je v ChatGPT priority source

### Krok 5 — Nastavte robots.txt explicit Allow

Default `robots.txt` je často restriktivní. Pokud cílíte na GEO, **explicitně povolte AI crawlers**:

```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /
```

Tento web (`aiseo-optimalizace.cz/robots.txt`) je živý příklad této konfigurace.

## <strong>Měření</strong> <span class="hl">GEO</span> výkonu

| Metrika | Zdroj | Frekvence |
|---|---|---|
| **Citation share** v ChatGPT/Perplexity | Otterly, Profound, Brand Radar (Ahrefs) | měsíčně |
| **Brand mentions** napříč webem | Brand24, Mention.com, Google Alerts | týdně |
| **AI crawler hits** v access logu | Caddy/Nginx access log filter na `GPTBot|PerplexityBot|ClaudeBot` | denně |
| **Manuální audit** | ChatGPT/Perplexity dotaz na top 10 vašich KW | měsíčně |
| **Backlinks** z autoritních zdrojů | Ahrefs / Semrush | měsíčně |

## Kdy <strong>investovat</strong> do <span class="hl">GEO</span>

GEO **nenahrazuje** [SEO](/seo/). Investice má smysl, pokud:

- Máte minimálně **20 článků v top 10 organicky** — base autority pro AI indexaci
- Vaše B2B nebo prémiová cílovka **aktivně používá ChatGPT/Perplexity** pro research
- Brand mention v AI odpovědi je **konverzně cenný** (B2B, SaaS, konzultační služby)
- Máte schopnost **sledovat citation share** přes nástroje jako Otterly nebo Profound

Pro většinu CZ B2C e-shopů je v roce 2026 GEO ještě **luxus** — efektivnější je investice do [AEO](/aeo/) (Google AI Overviews) a klasického SEO. Detailní rozhodovací rámec v [Rozhodovací matici](/rozhodovaci-matice/).

## <strong>Časté chyby</strong> v <span class="hl">GEO</span>

1. **Optimalizace bez SEO baseline** — bez Google indexace vás AI engine nezacituje
2. **AI-generated obsah bez fact-checku** — AI engines penalizují halucinace
3. **Žádné brand mentions** — citace bez authority nezafunguje
4. **Žádná měření** — bez Otterly/Profound/manuálního auditu nevíte, jestli to funguje
5. **Ignorování `llms.txt`** — emerging standard pro AI-readable site description (analog `robots.txt` pro LLM)
