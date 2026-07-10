# Research — Jak otestovat, jestli vás AI cituje

**Datum:** 2026-06-11
**Cílová kategorie:** tutorial
**Slug:** `test-viditelnosti-v-ai`
**Cílové KW:** test ai viditelnost / jestli me cituje ai / kontrola ai citace / jak zjistit ai viditelnost

## 1. Proč to řešit

- Většina firem netuší, jestli jsou v AI odpovědích vidět. Podle analýz je významná část B2B webů „funkcionálně neviditelná" v AI odpovědích (uváděné ~44 % B2B SaaS — POZOR: marketingový zdroj, nutno hedge).
- Bez testu **hádáte místo měření**. AI viditelnost je nová disciplína — první krok je zjistit výchozí stav.
- Test je **levný a rychlý** — ruční verzi zvládne kdokoli za hodinu.

## 2. Ruční metoda (základ, zdarma)

### Sestavit sadu promptů
- **15–20 promptů**, které zrcadlí, jak se reálně ptají zákazníci.
- 4 typy dotazů:
  1. **Branded** („co je [značka]", „recenze [značka]", „[značka] zkušenosti").
  2. **Kategoriové** („nejlepší [produkt/služba] v Česku", „[obor] firmy Praha").
  3. **Problém-řešení** („jak vyřešit [problém]", „čím nahradit [X]").
  4. **Srovnání** („[značka] vs [konkurent]", „alternativy k [X]").

### Spustit napříč platformami
- **ChatGPT** (OpenAI) — zmiňuje značky, často bez odkazu.
- **Perplexity** — vždy cituje zdroje s odkazy.
- **Google AI Overviews** — v Search, s odkazy.
- **Gemini** (Google) — konverzační.
- **Claude** (Anthropic) — méně web search, ale roste.

### Opakovat 3–5× per prompt
- AI odpovědi jsou **nedeterministické** — stejný prompt dá pokaždé jinou odpověď.
- Opakování 3–5× dá realistický obrázek, jak často se objevíte.

### Zaznamenat 4 věci per prompt
1. **Objevíte se vůbec?** (ano/ne)
2. **Kde v odpovědi jste?** (pozice — nahoře/uprostřed/dole)
3. **Kdo je místo vás?** (konkurence — kdo se zobrazuje)
4. **Jaké zdroje AI cituje?** (odkud čerpá — váš web? Reddit? recenze?)

## 3. Rozdíly mezi platformami

| Platforma | Cituje zdroje? | Poznámka |
|---|---|---|
| Perplexity | Vždy, s odkazy | Nejtransparentnější pro test |
| Google AI Overviews | Ano, s odkazy | V Search, závislé na organic |
| ChatGPT | Někdy, často bez odkazu | Zmiňuje značky bez linku |
| Gemini | Někdy | Konverzační |
| Claude | Méně web search | Roste |

## 4. Automatizované nástroje (2026)

### Free / freemium
- **Ahrefs AI Visibility Checker** — free, bez signupu, ChatGPT/Gemini/Perplexity/Copilot/Google AI Overviews.
- **Semrush AI Search Visibility Checker** — free tool bez signupu.
- **Search-visibility.ai** — free checker, ChatGPT/Claude/Gemini/Perplexity/DeepSeek.
- **Hall Lite** — free plán: 1 projekt, 25 sledovaných otázek, 300 odpovědí/měsíc, 3 platformy.
- **Otterly.ai** — 7denní free trial.

### Placené (pro průběžný monitoring)
- **Ahrefs Brand Radar** — součást Ahrefs subscription; sleduje citace na ChatGPT/Perplexity/Bing Copilot.
- **Semrush AI Toolkit** — brand mentions napříč ChatGPT/Perplexity/Google AI Overviews.
- **Otterly.ai** — od ~$39/měs.
- **Passionfruit Labs** — od ~$19/měs, revenue attribution.

### Kdy free stačí / kdy placené
- **Free stačí:** jednorázový audit, malá firma, ověření výchozího stavu.
- **Placené má smysl:** průběžný monitoring, více značek/produktů, konkurenční benchmarking, reporting klientovi.

## 5. Jak interpretovat výsledky

### Objevíte se → dobré, ale ověřte:
- Je informace **správná**? (AI někdy uvede zastaralé/chybné údaje o značce).
- Jste na **dobré pozici** nebo až na konci?
- Cituje AI **váš web**, nebo o vás mluví z cizích zdrojů (recenze, Reddit)?

### Neobjevíte se → diagnostika:
- Není web blokovaný pro AI crawlery? (robots.txt, Cloudflare Block AI Bots).
- Máte vůbec obsah k dané otázce?
- Je značka dost známá / má dost zmínek mimo web?
- Konkurence má silnější off-page signály?

### Konkurence místo vás → competitive gap:
- Kdo se zobrazuje? Proč? (lepší obsah? víc recenzí? Wikipedia?)
- Analyzovat, co dělají líp.

## 6. Praktický postup krok za krokem

### Krok 1: Sestavit prompty (30 min)
- 15–20 promptů, 4 typy, jazykem zákazníka.

### Krok 2: Ruční test (60 min)
- Spustit napříč ChatGPT + Perplexity + Google AI Overviews (minimum 3 platformy).
- 3–5× per prompt.
- Zaznamenat do tabulky (prompt / platforma / objevil se / pozice / konkurence / zdroje).

### Krok 3: Vyhodnotit
- Kolik % promptů vás zmínilo?
- Kde jsou největší mezery?
- Kdo je konkurence?

### Krok 4: Volitelně automatizovat
- Free nástroj pro rychlé ověření napříč víc platformami.
- Placený pro průběžný monitoring.

### Krok 5: Akce podle nálezů
- Neviditelnost → obsah, robots.txt, off-page.
- Chybná informace → aktualizovat vlastní obsah, strukturovaná data.
- Za konkurencí → analyzovat jejich přednosti.

## 7. Časté chyby při testu

- **Jeden prompt, jednou.** AI je nedeterministická; potřebujete opakování a víc promptů.
- **Jen branded dotazy.** Značku už znáte — důležitější jsou kategoriové dotazy (kde vás lidé hledají neznámo).
- **Jen ChatGPT.** Každá platforma cituje jinak; testujte víc.
- **Vlastní účet s historií.** ChatGPT/Gemini personalizují podle historie — testujte v anonymním/odhlášeném režimu pro objektivnější obrázek.
- **Nezaznamenávat zdroje.** Kdo je citovaný je klíčová informace pro strategii.

## 8. CZ specifika

- Testovat **česky i anglicky** (podle cílovky).
- **Google AI Overviews v češtině** jsou aktivní — testovat na Google.cz.
- **Seznam Asistent** (od května 2026 beta) — pro CZ cílovku doplnit.
- České kategoriové dotazy („nejlepší [X] v Praze", „[obor] firmy Brno").

## 9. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec"
- "garantujeme" → "může pomoci", "podle dostupných analýz"
- "bot/crawler" → "vyhledávací robot" / "AI vyhledávací robot"
- "AIO" → "Google AI Overviews"
- "prompt" → ponechat (standardní termín) / "dotaz"
- "branded" → "značkové dotazy"
- "share of voice" → "podíl zmínek"
- "competitive gap" → "mezera vůči konkurenci"
- "revenue attribution" → "přiřazení tržeb"
- "signup" → "registrace"

## 10. CTA pozice

- Tutorial → **primárně Pack 1 490 Kč** (DIY šablona promptů + tabulka pro záznam).
- Sekundárně **Audit 9 990 Kč** (profesionální AI viditelnost audit napříč platformami).
- Transparentní: Sniperdesign dělá AI audity s reálným testem napříč platformami.
