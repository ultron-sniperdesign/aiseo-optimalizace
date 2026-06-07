# Research — strukturovana data pro ai (slug: strukturovana-data-pro-ai)

**Kategorie:** tutorial (+ howto) · **Rok:** 2026 · **Run:** #21 · **Datum:** 2026-06-07

## Cílové KW
- strukturovaná data pro ai (hlavní)
- json-ld pro ai
- schema.org pro ai vyhledávání
- typy strukturovaných dat
- validátor strukturovaných dat
- faqpage strukturovaná data

## Pozice v obsahu webu
- Odlišit od `geo-optimalizace` (širší koncepty GEO) — tady **praktický how-to** k typům a validaci.
- Propojit s ai-seo-content (copywriting), e-e-a-t-pro-ai (Organization = brand identita), ai-seo-upgates-shoptet (e-commerce použití), srovnavaci-clanky-pro-ai (struktura srovnání), seo-pro-ai (hub), ai-seo-audit (CTA).
- Kategorie tutorial+howto → CTA Pack + Audit.

## Klíčová fakta (WebSearch 2026-06-07, % hedovat jako "podle dostupných analýz")
- **JSON-LD** je preferovaný formát napříč Google, Bing, ChatGPT, Perplexity, Claude (skripty oddělené od HTML, snáz se udržuje).
- Top typy 2026 pro AI: **Article, FAQPage, HowTo, Product, Organization, BreadcrumbList, DefinedTerm, VideoObject, LocalBusiness, Event**.
- Podle analýz: ~65 % stránek citovaných Google AI Mode má strukturovaná data; ChatGPT ~71 % (hedovat — různé studie).
- Stránky s validními strukturovanými daty (FAQ/HowTo/QAPage) se v AI shrnutích podle benchmarků 2025–2026 objevují ~20–30 % častěji (hedovat).
- **DŮLEŽITÁ ZMĚNA k 2026**: Google odebral FAQ rich results **7. 5. 2026**. Search Console FAQ filter retires 6/2026, API support končí 8/2026. Existující FAQPage markup je **neškodný** (validuje), ale **neprodukuje SERP lift**. Hodnota FAQPage je dnes hlavně v jasnější struktuře obsahu pro AI a uživatele.
- Validace: **validator.schema.org** (strict conformance) + **Google Rich Results Test** (rich results check) + ručně dotaz v ChatGPT/Perplexity.

## Praktické kroky (jádro how-to)
1. **Vyber relevantní typy** pro vaši stránku (Article pro článek, Product pro produkt, Organization na úrovni webu, BreadcrumbList všude, FAQPage jen kde je viditelná FAQ).
2. **Použij JSON-LD** v `<script type="application/ld+json">` v head/body — oddělené od HTML.
3. **Strukturovaná data musí odpovídat viditelnému textu** (Google to kontroluje; falešné spam markup = penalizace).
4. **Validuj** přes validator.schema.org (strict) + Google Rich Results Test (rich results podpora).
5. **Otestuj v AI** — zeptej se ChatGPT/Perplexity přímo na obsah stránky, jestli ji zmiňují/citují.
6. **Aktualizuj při změně obsahu** (cena, dostupnost, autor, datum).

## Co NEDělat
- **Falšovat strukturovaná data** mimo viditelný obsah → spam, riziko penalizace.
- **Plošně nasazovat FAQPage** kvůli rich results — od 5/2026 už nejsou v Googlu. Nasazujte jen kde má FAQ reálný smysl.
- **Použít více formátů zároveň** (Microdata + JSON-LD) — zbytečné, JSON-LD stačí.
- **Spolehat na strukturovaná data jako náhradu obsahu** — pomáhají strojové čitelnosti, samy citaci nezajistí.

## FAQ kandidáti
- Jaká strukturovaná data nasadit pro AI vyhledávání?
- Jaký je nejlepší formát strukturovaných dat?
- Pomáhá FAQPage v Googlu po 5/2026?
- Jak validovat strukturovaná data?
- Musí strukturovaná data odpovídat textu na stránce?
- Pomáhají strukturovaná data k citaci v ChatGPT a Perplexity?

## Interní odkazy (ověřit 200 před publikací)
- /blog/ai-seo-content/ (copywriting) · /blog/e-e-a-t-pro-ai/ (Organization, důvěra)
- /blog/ai-seo-upgates-shoptet/ (e-commerce použití) · /blog/srovnavaci-clanky-pro-ai/ (struktura srovnání)
- /blog/ai-crawler-robots-txt/ (technické zpřístupnění) · /blog/seo-pro-ai/ (hub) · /blog/ai-seo-audit/ (CTA)

## CTA
- tutorial → AI SEO Wireframe Pack (1 490 Kč) + AI SEO audit (9 990 Kč)

## Zdroje
- seoscore.tools, ailabsaudit.com, evolveamz.com (schema markup pro AI 2026)
- digitalapplied.com (Structured Data After I/O 2026), stackmatix.com, digitalstrategyforce.com
- Google Search Central (FAQ rich results odebrány 7. 5. 2026), validator.schema.org, Rich Results Test
