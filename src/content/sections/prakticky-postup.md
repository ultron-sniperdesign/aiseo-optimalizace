---
title: "Praktický postup: jak začít s GEO/AEO/AIO ve 4 krocích"
description: "Krok za krokem: audit obsahu, schema markup (FAQ, HowTo, Article), answer block + kontext, měření citation share. Pro web i e-shop."
answer: "Začněte ve 4 krocích: (1) audit existujícího obsahu pro AI citovatelnost, (2) přidat schema.org markup (FAQPage, HowTo, Article), (3) strukturovat odpovědi do answer block + dlouhý kontext, (4) měřit přes SERP features tracking a AI citation monitoring."
slug: "prakticky-postup"
order: 5
abbr: "PRAXE"
updated: "2026-04-29"
faq:
  - q: "Kolik času zabere první audit pro AI citovatelnost?"
    a: "Pro top 20 stránek webu počítejte 2–4 hodiny. Pro každou stránku jen 4 otázky: je odpověď v prvních 60 slovech, jsou tam fakta a čísla, je struktura H2/H3 logická, je tam FAQPage schema."
  - q: "Jak měřit, jestli mě AI cituje?"
    a: "Manuální Google search top 10 KW jednou měsíčně (čekáte na AIO panel), Google Search Console (Featured Snippets, FAQ rich snippets), nástroje Otterly nebo Profound pro citation share v ChatGPT/Perplexity, případně specializované AIO/GEO trackery."
  - q: "Které schema typy jsou nejdůležitější?"
    a: "Pro content stránky: Article (s author, datePublished, image), FAQPage (pro Q&A sekce), HowTo (pro návody). Pro brand: Organization (logo, social profiles), WebSite (sitelinks search box). Validujte přes Google Rich Results Test."
  - q: "Jaké nástroje doporučujete pro CZ trh?"
    a: "Google Search Console (Featured Snippets + FAQ rich snippets, jádro měření zdarma), Ahrefs Brand Radar (citation share napříč LLM), Otterly nebo Profound (mention monitoring v ChatGPT/Perplexity), pro technický audit Screaming Frog nebo Ahrefs Site Audit. Pro AIO presence stačí ze začátku manuální tabulka top 10 KW."
  - q: "Stačí mi udělat answer block a FAQ a budu v AI Overviews?"
    a: "Ne, je to nutná ale nedostačující podmínka. Bez kvalitního SEO baseline (indexace, autorita) vás Google v AIO nezobrazí. Bez brand mentions vás ChatGPT necituje. Praktický postup je celý cyklus: SEO foundations → answer block + FAQ → měření → iterace."
---

## <strong>Praktický postup</strong> ve <span class="hl">4 krocích</span>

Tento postup vychází z draftu pillar průvodce a je optimalizovaný pro CZ trh v roce 2026. Cílem je minimalizovat „zatočení v slepých uličkách" a zaměřit se na **akce s nejvyšším ROI**.

## Krok 1 — <strong>Audit existujícího obsahu</strong> pro <span class="hl">AI citovatelnost</span>

Projděte top 20 stránek na svém webu (podle organic trafficu) a pro každou si položte **4 otázky**:

### Otázka 1: Je odpověď na hlavní dotaz v prvních 60 slovech článku?

AI scrapery čtou první 60 slov pod nadpisem H1/H2 a používají je jako **citation hook**. Pokud je první odstavec marketingový úvod, AI vás přeskočí.

**Akce:** Pokud ne, přesuňte definici/odpověď nahoru jako tučný **answer block** (40–60 slov).

### Otázka 2: Obsahuje stránka konkrétní fakta, čísla, citáty?

AI engines milují **fact-density**. Spočítejte „fakta na 100 slov":

- ≥ 3 konkrétní fakta (číslo / procento / datum / studie) per 100 slov = ✅ AI-friendly
- < 1 fakt per 100 slov = ❌ moc obecné

**Akce:** Přidejte data, citace zdrojů, konkrétní čísla. Eliminujte „omáčky".

### Otázka 3: Je struktura H2/H3 logická?

Každý subheading by měl odpovídat na **sub-dotaz** uživatele. AI engines preferují stránky s jasnou hierarchií.

**Akce:** Přepište H2/H3 jako otázky nebo definice („Co je …", „Jak udělat …", „Kdy použít …").

### Otázka 4: Má FAQ sekci s `schema.org/FAQPage` markupem?

FAQPage schema je **přímý kanál** pro Google AI Overviews — Google z něj táhne Q&A do AIO panelu.

**Akce:** Pokud ne, přidejte ji. Otázky berte z **People Also Ask** (PAA) boxů a Google Search Console (dotazy s rostoucími impressions ale klesající CTR).

## Krok 2 — <strong>Schema.org markup</strong> <span class="hl">(FAQPage, HowTo, Article)</span>

Schema markup je **strojově čitelný popis** vaší stránky, který AI engines explicitně vyhledávají. Tři typy, které musí mít každá content stránka:

### `Article` schema — pro každý článek

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO vs. GEO vs. AEO vs. AIO",
  "description": "Praktický průvodce …",
  "author": {
    "@type": "Person",
    "name": "Autor článku"
  },
  "datePublished": "2026-04-29",
  "dateModified": "2026-04-29",
  "image": "https://example.cz/og/article.png"
}
```

### `FAQPage` schema — pro Q&A sekce

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Co je rozdíl mezi SEO a GEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SEO optimalizuje stránku pro pozice v Googlu. GEO optimalizuje obsah pro citace v AI odpovědích."
    }
  }]
}
```

### `HowTo` schema — pro návody

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Jak přidat FAQPage schema",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Vyberte 5–7 reálných otázek z PAA",
      "text": "Otevřete Google Search Console → Performance → Queries…"
    }
  ]
}
```

### Validace

Před deployem validujte přes:

- **Google Rich Results Test** — https://search.google.com/test/rich-results
- **Schema Markup Validator** — https://validator.schema.org

## Krok 3 — <strong>Strukturované odpovědi</strong> <span class="hl">(answer block + kontext)</span>

Každý článek by měl mít **dvouvrstevnou strukturu**:

### Vrstva 1: Answer block (40–60 slov)

Hned po H1 nebo H2 — tady AI engines táhnou citaci. Formát:

```markdown
**X je [definice ve formátu jedna-věta]. [Druhá věta s konkrétním
faktem nebo kontextem]. [Třetí věta s implikací pro čtenáře].**
```

Příklad (z této stránky):

> **Začněte ve 4 krocích: (1) audit existujícího obsahu pro AI citovatelnost, (2) přidat schema.org markup (FAQPage, HowTo, Article), (3) strukturovat odpovědi do answer block + dlouhý kontext, (4) měřit přes SERP features tracking a AI citation monitoring.**

### Vrstva 2: Dlouhý kontext

Pod answer blockem — pro lidské čtenáře, kteří chtějí hlubší pochopení. Tady jsou:

- Detailní vysvětlení každého kroku
- Příklady, případové studie
- Tabulky, vizualizace, code blocks
- Interní linky na související obsah

Tento web má v každé sekci výraznou definici tučně (**„X je…"**). Není to estetický doplněk — je to **přímý signál pro AI scrapery**, kde najdou definici daného pojmu.

## Krok 4 — <strong>Měření</strong>: <span class="hl">SERP features tracking + AI citation monitoring</span>

### Co měřit

| Metrika | Zdroj | Frekvence |
|---|---|---|
| **Pozice v AI Overviews** | manuální Google search top 10 KW nebo SE Ranking | týdně |
| **Featured Snippets impressions** | Google Search Console | denně |
| **FAQ rich snippet zobrazení** | GSC → Performance → Search Appearance | týdně |
| **Brand mention v ChatGPT** | Otterly, Profound | měsíčně |
| **Citation share v Perplexity** | manuální audit nebo Profound | měsíčně |
| **AIO presence count** | manuální tabulka top 10 KW (viz níže) | měsíčně |
| **AI crawler hits** | Caddy/Nginx access log filter | denně |

### Manuální AIO check

Pokud nemáte rozpočet na nástroje, dělejte **manuální check jednou měsíčně**:

1. Vezměte top 10 vašich klíčových slov (z GSC)
2. Pro každé otevřete `https://google.cz/search?q=<keyword>`
3. Zaznamenejte: zobrazil se AIO panel? Jste v citacích?
4. Vede k vám klik z AIO panelu?

### Manuální ChatGPT/Perplexity audit

Stejný postup pro AI engines:

1. ChatGPT (search mód): „<keyword>" → jste v citaci?
2. Perplexity: „<keyword>" → jste v citacích vpravo?
3. Claude (s search): „<keyword>" → cituje vás?

## <strong>Mapování fází projektu</strong> na <span class="hl">disciplíny</span>

| Fáze projektu | Doba | Doporučená disciplína |
|---|---|---|
| **0–6 měsíců** (nový web) | indexace, base content | [SEO](/seo/) only |
| **6–12 měsíců** | první rankingy v top 20 | SEO + Schema markup příprava |
| **12–18 měsíců** | 20+ článků v top 10 | SEO + [AEO](/aeo/) (FAQ, HowTo schema, answer blocks) |
| **18–24 měsíců** | autorita roste | SEO + AEO + [GEO](/geo/) (citation, brand mentions) |
| **24+ měsíců** | zralý projekt | Plný [AIO](/aio/) rámec (SEO+GEO+AEO + selektivní `nosnippet` bypass) |

Klíč: **NEpřeskakujte fáze.** Každá vrstva staví na předchozí. Bez SEO base nezafunguje AEO. Bez AEO + brand authority nezafunguje GEO.

## <strong>Praktický kalendář implementace</strong> <span class="hl">(90 dní)</span>

### Týden 1–2: Audit a strategie

- [ ] Audit top 20 stránek podle 4 otázek z Kroku 1
- [ ] Klasifikace stránek (krátké/dlouhé, info/transakční)
- [ ] Volba strategie (AIO embrace nebo bypass) — viz [Rozhodovací matice](/rozhodovaci-matice/)

### Týden 3–6: Implementace schema + answer blocks

- [ ] FAQPage schema na top 20 stránek
- [ ] Article schema globálně (přes BaseLayout/template)
- [ ] HowTo schema na navádové stránky
- [ ] Answer block (40–60 slov) na top 20 stránek
- [ ] Validate přes Google Rich Results Test

### Týden 7–10: Měření a iterace

- [ ] Setup tracking (GSC + manuální tabulka AIO presence)
- [ ] Týdenní manuální AIO check pro top 10 KW
- [ ] Měsíční AI citation audit (ChatGPT/Perplexity)

### Týden 11–13: Optimalizace na základě dat

- [ ] Analýza: které stránky AIO „kradnou" trafic? → zvážit `nosnippet`
- [ ] Brand mention building (Reddit, guest posts, podcasts)
- [ ] Iterace answer blocks na základě CTR dat
