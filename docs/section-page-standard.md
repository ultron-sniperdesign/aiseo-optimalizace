# Section page design standard

> **Pro koho:** kdokoli (Claude session, freelance autor, agentura)
> editující pillar sekce v `src/content/sections/*.mdx` nebo články
> v `src/content/articles/*.mdx`.
>
> **Co řeší:** odbourat „wall of text" konzistentním použitím
> komponent. Každý typ obsahu má doporučený vizuální pattern.
>
> **Datum:** 2026-05-18. První validovaná aplikace: `/geo/`.

---

## 1. Component library

Všechny komponenty žijí v `src/components/blocks/`. Použití v MDX přes
`import X from "../../components/blocks/X.astro";` v hlavičce souboru
(za frontmatterem).

### Audience targeting & negativní příklady

| Komponenta | Použití |
|---|---|
| **`<Persona>`** + **`<PersonaGrid>`** | Karta typu zákazníka/byznysu (ikona, title, desc, optional chip „Vysoký dopad"). Pro „Pro koho má X smysl" sekce. |
| **`<AntiPersona>`** | Warning box „kdy se to NEhodí" — typicky pod PersonaGrid jako counter-example. |

### Porovnání

| Komponenta | Použití |
|---|---|
| **`<CompareTable>`** | Row-based porovnávací tabulka „X vs Y" s tone color hlavičkami + ikonami per řádek. Pro „GEO vs SEO" apod. |
| **`<Compare>`** + **`<CompareCol>`** | Column-based slot wrapper (existující). Pro narativnější srovnání s vlastními bullety per sloupec. |

### Anti-patterny & mindset

| Komponenta | Použití |
|---|---|
| **`<Mistake>`** + **`<MistakeGrid>`** | Karty častých chyb s red accent + číslem + „Fix:" linkem. Pro „Časté chyby" sekce. |
| **`<Mindset>`** | Bad/good pull-quote dvojice. Pro „co si lidé pletou" / „mindset shift" sekce. |
| **`<DoDont>`** + **`<Do>`** + **`<Dont>`** | Stávající pár ✅/❌ příklady. Pro „takhle ano / takhle ne" patterny (např. „Co AI hledá v obsahu"). |

### Edukace, postupy, citace

| Komponenta | Použití |
|---|---|
| **`<Stepper>`** | Vertikální numbered seznam kroků s napojenou čárou. Pro krok-za-krokem návody (playbooky). |
| **`<SignalGrid>`** | 4-kategorií grid (icon + title + items). Pro „4 vrstvy faktorů" patterny. |
| **`<Insight>`** | Callout box s ikonou + labelem. Pro pravidla, case studies, decision callouty. |
| **`<SourceCard>`** | Karta s akademickou/odbornou citací + linkem na primární zdroj. |

### CTA / interakce

| Komponenta | Použití |
|---|---|
| **`<Prompt>`** + **`<PromptList>`** | Copy-to-clipboard AI prompty. Pro „vyzkoušejte sami v ChatGPT" sekce. |
| **`<TopicCard>`** | Single featured cross-link na hluboký subtopic. |
| **`<ArticleCard>`** + **`<ArticleGrid>`** | Multi-článková grid (homepage-style design). |
| **`<RelatedSections>`** | Auto-list 3 sourozenec sekcí (GEO/AEO/AIO když jsem na SEO). |
| **`<SniperDesignSmallContact>`** | Agency promo (lze inline přes `inlineSmallContact: true` ve frontmatteru). |

### Vlastnosti všech komponent

- **`tone` prop**: `seo` / `geo` / `aeo` / `aio` / `accent` — barevné akcenty pro discipline
- **Self-contained CSS** ve scope komponenty
- **Mobile-first responsive** — auto-fit grid 1 → 2 → 3 sloupce
- **MDX-friendly** — fungují uvnitř `.article__prose` díky `@layer prose` (komponentní styly automaticky vyhrávají nad prose typografií)

---

## 2. Doporučené patterny per typ obsahu

| Typ obsahu | Doporučený pattern |
|---|---|
| **„Pro koho má X smysl"** | `<PersonaGrid>` s 4–6 `<Persona>` karet + `<AntiPersona>` pod tím |
| **„X vs Y srovnání"** (mnoho dimenzí) | `<CompareTable rows={[...]} />` |
| **„X vs Y srovnání"** (narativní) | `<Compare>` + 2× `<CompareCol>` |
| **„Co AI / Google hledá"** (dobré vs špatné příklady) | 3–5× `<DoDont>` se vstupními H3 |
| **„Praktický playbook"** (sekvenční kroky) | `<Stepper steps={[...]} />` |
| **„Co si lidé pletou"** | `<Mindset bad / good>` |
| **„Časté chyby"** | `<MistakeGrid>` s 3–7 `<Mistake>` |
| **„Vyzkoušejte sami"** | `<PromptList>` s 2–5 `<Prompt>` |
| **„Podle studie / paper"** | `<SourceCard>` |
| **„Hlubší témata"** (cross-link na blog) | `<ArticleGrid>` s 1+ `<ArticleCard>` |
| **„Audit / konzultace CTA"** | `<Insight tone icon label>` |

---

## 3. Vizuální rytmus pillar stránky

Cíl: žádných víc než 200–300 slov prózy bez vizuálního landmarku.

**Doporučená šablona pro novou section page:**

```
1. Intro / Jak X funguje
   → prose + 1× vizuální blok (diagram, SourceCard, Insight)

2. Pro koho má X smysl
   → PersonaGrid + AntiPersona

3. X vs konkurenční disciplína
   → CompareTable

4. Co Y hledá v Z
   → 3–5× DoDont s H3 subtitles

5. Praktický playbook
   → Stepper + případně Insight pro detail

6. Tento web jako příklad
   → Insight + PromptList

7. Měření / Tooling
   → table s freq-chip nebo CompareTable

8. Mindset / Standard psaní
   → Mindset + custom standards grid + Insight pro decision

9. Časté chyby
   → MistakeGrid

10. Hlubší témata
    → ArticleGrid s ArticleCard
```

Ne všechny sekce musí být na každé pillar stránce. Vyber 6–10 podle obsahu.

---

## 4. Inline patterns v MDX (bez komponenty)

Tyhle styly jsou definované v `src/pages/[slug].astro` přes `:global()`
a fungují automaticky v MDX při použití správné class:

### Mechanism diagram (GEO-specific, ale reusable pro „klasický vs nový" patterny)
```html
<div class="mech">
  <div class="mech__col mech__col--google">...</div>
  <div class="mech__arrow">→</div>
  <div class="mech__col mech__col--ai">...</div>
</div>
```

### Metrics table s frekvenčními chipy
```html
<div class="metrics-table-wrap">
  <table class="metrics-table">
    <thead>...</thead>
    <tbody>
      <tr>
        <td>Metric</td>
        <td>Source</td>
        <td><span class="freq-chip freq-chip--day">denně</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

`freq-chip` varianty: `--day` (červený), `--week` (oranžový), `--month` (zelený).

### Icon checklist grid (standards)
```html
<div class="standards">
  <div class="standard">
    <span class="standard__icon">📝</span>
    <strong>Něco důležitého</strong> a krátký popis
  </div>
</div>
```

### Robots.txt / code collapsible
```html
<details class="robots-detail">
  <summary>Ukázka konfigurace</summary>
  
  ```bash
  some code here
  ```
</details>
```

---

## 5. Frontmatter standard pro section page

```yaml
---
title: "ABBR — popis disciplíny"
description: "70–160 znaků, hook + benefit"
answer: "40–60 slovní krátká odpověď pro AI scrapery"
slug: "url-slug"
order: 1                       # pořadí v navigaci
abbr: "SEO"                    # nebo GEO/AEO/AIO/PRAXE/MATICE
updated: "2026-05-18"
faq:                           # 6–10 reálných otázek (generuje FAQPage JSON-LD)
  - q: "..."
    a: "..."
howto:                         # volitelné, generuje HowTo JSON-LD
  name: "..."
  steps:
    - name: "Krok 1"
      text: "Detail"
inlineRelated: true            # opt-in: <RelatedSections> v body MDX místo automaticky pod článkem
inlineSmallContact: true       # opt-in: <SniperDesignSmallContact /> v body MDX místo automaticky pod článkem
---
```

---

## 6. Rollout plán: aplikovat standard na ostatní pillar stránky

### Stav

| Stránka | Stav |
|---|---|
| `/seo/` | Částečně přechod (SignalGrid, ArticleCard, inline Related/SmallContact). **TODO:** S2 personas, S6 chyby, S8 mindset. |
| `/geo/` | ✅ Plný standard (referenční implementace) |
| `/aeo/` | ❌ Wall of text — čeká na migration |
| `/aio/` | ❌ Wall of text — čeká na migration |
| `/prakticky-postup/` | Specific — má vlastní timeline design, posoudit zvlášť |
| `/rozhodovaci-matice/` | Specific — má vlastní rozhodovací stromek, posoudit zvlášť |
| `/seo-vs-geo-vs-aeo-vs-aio/` (pillar) | ❌ Velký wall of text — největší priorita po základních disciplínách |

### Doporučený postup

**Fáze 1 (≤ 1 sezení):** /aeo/ migration
- Stejný vzor jako /geo/: persona, compare, DoDont, stepper, mistake, mindset
- AEO-specific patterns: featured snippet preview, Google AI Overview screenshot

**Fáze 2 (≤ 1 sezení):** /aio/ migration
- AIO má 2 významy (umbrella + Google AI Overviews funkce) → vyřešit přes Mindset („dvojí význam")
- DoDont pro „kdy je AIO funkce / kdy umbrella"

**Fáze 3 (1–2 sezení):** pillar `/seo-vs-geo-vs-aeo-vs-aio/`
- Nejdelší stránka, nejvíc patternů
- Pravděpodobně 4× CompareTable pro porovnání disciplín
- 1× rozhodovací matrix (specifický pattern, možná nová komponenta `DecisionMatrix`)

**Fáze 4 (volitelně):** /seo/ dopiplování
- Aplikovat persona/mindset/mistakes komponenty místo zbylých prose částí

**Fáze 5 (volitelně):** rollout do blog articles
- Blog má vlastní RichLayout — některé komponenty (DoDont, Stepper, Insight) už používá
- Nový rollout: Mistake, Persona, CompareTable, SourceCard u relevantních článků

### Pravidla pro nové stránky

Vytvoření nové pillar / sekce / dlouhé stránky:

1. Frontmatter podle § 5 šablony výše
2. Identifikuj typy obsahu → vyber pattern dle § 2 tabulky
3. Importy komponent v hlavičce MDX (za frontmatterem)
4. Vizuální landmark min. každých 200–300 slov (vyber pattern z § 2)
5. Default `tone` prop = abbr stránky (`tone="geo"` na /geo/)
6. Doporučená kostra: § 3 šablona, pick 6–10 sekcí

### Pravidla pro existující stránky (refactor)

1. Před refactorem: zkontroluj FAQ + howto frontmatter (musí zůstat — generují JSON-LD)
2. Najdi „wall of text" sekce — typicky 2+ odstavce v řadě bez vizuálu
3. Aplikuj pattern dle § 2 tabulky
4. Commit s prefixem `<page>: <pattern> migration` (např. `aeo: PersonaGrid + Mistake migration`)
5. Po migration: visual review na minimum 1280 + 768 + 375 viewport

---

## 7. Co tato standard NEPOKRÝVÁ

- **Brand colors / typography** — řešeno v `src/styles/global.css`, neměnit bez konzultace
- **Hero design** sekce / článku — řešeno v `[slug].astro`, sjednoceno pro všechny abbr
- **Animations** — záměrně minimalisticky (subtle hover, žádné scroll-triggered)
- **Dark mode** — web nemá, nebudeme řešit
- **Doc auto-generation** — manuální update tohoto dokumentu při přidání nové komponenty
