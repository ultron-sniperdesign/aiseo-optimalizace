# Research — Měření AI viditelnosti v Google Search Console

**Datum:** 2026-06-11
**Cílová kategorie:** tutorial
**Slug:** `gsc-ai-segmenty-mereni`
**Cílové KW:** gsc ai report / search console ai overviews / mereni ai viditelnosti gsc / generative ai performance report

## 1. Co Google spustil (červen 2026)

- **3. června 2026:** Google spustil **Generative AI features performance report** v Search Console (Beta).
- **23. června 2026:** rozšíření na víc properties.
- **Rollout:** postupný, zpočátku podmnožina webů (mj. UK); globální expanze plánovaná, bez data.
- Blog: `developers.google.com/search/blog/2026/06/gen-ai-performance-reports`.
- **Dvě samostatná zobrazení:**
  - **Search** (AI Overviews + AI Mode)
  - **Discover** (generativní AI v Discoveru)

## 2. Co report ukazuje

- **Imprese** (impressions) — jak často se URL z webu objevily v generativních AI funkcích ve Vyhledávání a Discoveru.
- **Stránky** (pages) — které konkrétní URL se v AI funkcích objevily.
- **Země** (countries) — viditelnost podle zemí.
- **Zařízení** (devices) — jen u Search.
- **Datum** — hodinové/denní/týdenní/měsíční intervaly.

## 3. KRITICKÉ omezení: žádné kliky

- **v1 report sleduje jen imprese** — žádné kliky, pozice, CTR, ani query data.
- To je nejvýznamnější omezení.
- **Proč:** když uživatel čte AI odpověď, atribuce kliku zpět na konkrétní zdroj v syntetizované odpovědi funguje jinak než klasický klik na výsledek.
- **Imprese v AI odpovědi ≠ klik na web.** AI odpovědi jsou designované odpovědět přímo, takže míra prokliku z generativních funkcí může být strukturálně nižší než u klasických modrých odkazů.

## 4. Jak číst imprese správně

- **Imprese jako signál rezonance, ne traffic metrika.**
- Stránka s vysokými AI impresemi = obsah, který model považuje za citovatelný.
- **Cross-reference:** porovnat AI imprese s organickými kliky téže URL v klasickém Performance reportu → užitečný obrázek.
- Vysoké AI imprese + nízké organic kliky = obsah rezonuje s AI, ale neposílá traffic (zero-click).

## 5. Jak report najít a nastavit

### Kde ho najdete
1. Google Search Console → levý panel → Performance (Výkon).
2. Nová sekce "Generative AI features" nebo v rámci Search performance (podle rolloutu).
3. Přepnout mezi Search (AI Overviews + AI Mode) a Discover.

### Jak segmentovat
- **Segmentovat podle stránky a země** — kde už obsah má AI trakci.
- **Uložené pohledy (saved views)** filtrované na AI funkce, segmentované podle stránky, země, datumu = základ pro pochopení AI transition.
- **Default Performance report mísí všechny typy vyhledávání** — maskuje AI trendy. Proto dedikovaný pohled.

## 6. Praktický postup

### Krok 1: Ověřit dostupnost
- Report je v postupném rolloutu. Zkontrolovat, jestli property má přístup.
- Pokud ne, zatím čekat nebo použít ruční test (viz test-viditelnosti-v-ai).

### Krok 2: Otevřít report
- GSC → Performance → Generative AI features (nebo Search s filtrem).

### Krok 3: Segmentovat
- Podle stránky: které URL se objevují v AI.
- Podle země: kde je viditelnost.
- Podle času: trend v čase (roste/klesá).

### Krok 4: Cross-reference s organic
- Porovnat AI imprese vs organic kliky téže URL.
- Identifikovat: obsah rezonující s AI (vysoké imprese) vs obsah přinášející traffic (vysoké kliky).

### Krok 5: Doplnit vlastní měření
- GSC neukazuje kliky → doplnit GA4 (referral z AI), UTM parametry, ruční test.
- GSC = jedna vrstva, ne kompletní obrázek.

## 7. Co GSC AI report NEUMÍ

- **Kliky, CTR, pozice, query** — jen imprese.
- **Atribuci tržeb** — neukáže, jestli AI imprese vedla k prodeji.
- **Citace mimo Google** — jen Google AI (Overviews, AI Mode, Discover), ne ChatGPT/Perplexity/Claude.
- **Celý AI ekosystém** — pro ně ruční test nebo dedikované nástroje.

## 8. Jak to zapadá do měření AI

| Vrstva | Nástroj | Co ukazuje |
|---|---|---|
| Google AI imprese | GSC Generative AI report | Jak často se objevíte v Google AI |
| Google AI referral | GA4 | Traffic z Google AI (částečně) |
| Mimo-Google citace | Ruční test / nástroje | ChatGPT, Perplexity, Claude |
| Konverze z AI | GA4 + UTM | Kvalita AI trafficu |

## 9. CZ specifika

- Rollout postupný — CZ property nemusí mít report hned.
- Google AI Overviews v češtině aktivní.
- Pro CZ trh doplnit Seznam (Seznam Search Console, Seznam Asistent).
- GA4 referral z AI: český traffic z AI často bez referrer headeru → UTM v odkazech.

## 10. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec"
- "garantujeme" → "může", "podle Googlu"
- "bot/crawler" → "vyhledávací robot"
- "AIO" → "Google AI Overviews"
- "impressions" → "imprese" (zavedený termín v GSC, česky "zobrazení")
- "CTR" → "míra prokliku (CTR)"
- "saved views" → "uložené pohledy"
- "resonance signal" → "signál rezonance / zaujetí modelu"
- "cross-reference" → "porovnat s"
- "click attribution" → "přiřazení prokliku"
- "traffic" → "návštěvnost"

## 11. CTA pozice

- Tutorial → **primárně Pack 1 490 Kč** (DIY checklist měření AI viditelnosti).
- Sekundárně **Audit 9 990 Kč** (kompletní AI měření napříč GSC + GA4 + ruční test).
- Transparentní: Sniperdesign dělá AI audity s měřením napříč vrstvami.
