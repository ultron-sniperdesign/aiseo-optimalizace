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

---

# Refresh 4. 9. 2026 — proč zrovna tenhle článek

**Vybráno podle konkrétní vady, ne podle stáří** (fronta z baseline je odbavená). Kandidát vyšel ze dvou signálů najednou:

- `updated: 2026-06-07` = **nikdy nerefreshováno**, 1 095 slov, přitom je to **nejcitovanější technický hub webu: odkazuje na něj 25 článků** plus tři datové moduly (`zacnete-tady.ts`, `ai-viditelnost.ts`, `slovnik.ts`).
- Strojová kontrola korpusu našla v něm 10 výskytů zastaralého rámování FAQ rozšířených výsledků.

## Nález 1 — korpus si odporuje ve věci s konkrétním datem

| Kde | Co říká |
|---|---|
| `konec-faq-rich-results` (vydáno 11. 7., aktualizováno 28. 7. 2026) | Google **7. 5. 2026 ukončil** FAQ rozšířené výsledky; markup zůstává validní |
| `strukturovana-data-pro-ai` (7. 6. 2026, bez refreshe) | „v posledních letech **výrazně omezil**", „v roce 2026 **v podstatě skončily**", „pro běžné weby nelze počítat" — 10× rámování z doby **před** květnem 2026, **bez data** |

Hub tedy dva měsíce vedle sebe s vlastním článkem tvrdil měkčí a vágnější verzi téže věci.

## Nález 2 — HowTo doporučené jako jeden ze „šesti základních typů", bez jediné výhrady

Článek doporučuje jádro `Article, FAQPage, HowTo, Product, Organization, BreadcrumbList` a u HowTo píše jen „jen tam, kde stránka obsahuje skutečný postup". **Že HowTo rozšířené výsledky Google ukončil, v článku není.** Vlastní článek `konec-faq-rich-results` to přitom má (sekce „A co HowTo? Ten Google zrušil už v roce 2023").

## Ověření u primárního zdroje (4. 9. 2026)

| Tvrzení | Doklad |
|---|---|
| FAQ rozšířené výsledky skončily **7. 5. 2026** | Search Central, changelog *Latest documentation updates*, záznam **8. května 2026** „Deprecating the FAQ rich result feature" → „Why: This feature will no longer appear in Google Search starting **May 7, 2026**." |
| Dokumentace k FAQ byla **odstraněná** | tentýž changelog, záznam z **června 2026** (před 12. 6.) „**Removing documentation for the FAQ rich result feature**" — „The FAQ rich result feature is no longer shown in Google Search results, as announced in the changelog entry in May 2026." Ověřeno i chováním: `…/structured-data/faqpage` dnes **přesměrovává na changelog**. |
| HowTo rozšířené výsledky skončily **13. 9. 2023** | Search Central Blog, *Changes to HowTo and FAQ rich results* (8. 8. 2023), aktualizace ze **14. 9. 2023**: „As of September 13, Google Search no longer shows How-to rich results on desktop, which means this result type is now **deprecated**." Dál: zrušení typu zobrazení, reportu a podpory v testu do 30 dnů, v API do 180 dnů. `…/structured-data/how-to` dnes přesměrovává na changelog (kotva `#how-to-deprecation`). |
| Nevyužitý markup neškodí | tentýž post: „Structured data that's not being used does not cause problems for Search, but also has no visible effects in Google Search." |
| Ani FAQPage, ani HowTo **nejsou v galerii** strukturovaných dat | *Structured data markup that Google Search supports* (naposledy aktualizováno 15. 6. 2026, ověřeno 3. i 4. 9. 2026): Article, Breadcrumb, Carousel, Course list, Dataset, Discussion forum, Education Q&A, Employer aggregate rating, Event, Image metadata, Job posting, Local business, Math solver, Movie, Organization, Product, Profile page, Q&A, Recipe, Review snippet, Software app, Speakable, Subscription and paywalled content, Vacation rental, Video |
| Data musí odpovídat viditelnému obsahu | *General structured data guidelines* (aktualizováno 10. 7. 2026): „Don't mark up content that is not visible to readers of the page." |
| Google k AI: data nejsou povinná, ale nechte si je | *Optimizing your website for generative AI features on Google Search*: „Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add. However, it's a good idea to continue using it as part of your overall SEO strategy, as it helps with being eligible for rich results on Google Search." |

## Nález 3 — hub bez vlastního clusteru

25 článků odkazuje sem, hub odkazuje na **tři** články (`ai-seo-content`, `seo-pro-ai`, `e-e-a-t-pro-ai`) a **ani jeden z nich není o strukturovaných datech**. Mezitím k tématu vznikl celý blok: `konec-faq-rich-results`, `organization-schema-pro-znacku`, `person-data-pro-autora`, `videoobject-strukturovana-data`, `hasmerchantreturnpolicy-schema`, `otviraci-doba-a-aktualni-data`, `strukturovana-data-kategorie-eshopu`, `schema-markup-ai-citace-test`, `shoptet-strukturovana-data-mereni`, `recenze-a-hodnoceni-pro-ai`, `ceny-na-webu-a-ai`. Stejná vada jako u `ai-crawler-robots-txt` (13. 8.) a `seo-pro-ai` (10. 8.).

## Nález 4 — chybí česká data, která máme

Článek řeší „JSON-LD je preferovaný formát" čistě teoreticky. Vlastní měření (`shoptet-strukturovana-data-mereni`, 8. 8. 2026) přitom ukazuje, že na měřené platformě jsou produktová data **v microdatech, ne v JSON-LD** (38/38) — takže „nasaďte JSON-LD" může u konkrétní platformy znamenat zdvojení dat, ne jejich doplnění.

## Rozsah refreshe

1. Rozlišit **typ s dokumentovanou funkcí Googlu** vs. **typ bez ní** — to je páteř přepsané sekce o typech.
2. FAQ i HowTo opravit na doložený stav včetně dat; nechat doporučení „markup můžete nechat", protože to Google sám říká.
3. Doplnit doloženou pozici Googlu k AI (dosud jen nedoložené „testy a praxe naznačují").
4. Doplnit rozcestník na cluster.
5. Doplnit vlastní měření k volbě formátu.
6. Nechat titulek i slug → OG se negeneruje. Bump `updated`.

⛔ Limity: netvrdit, že FAQPage/HowTo „nefungují" ani „škodí"; Google výslovně říká, že nevyužitý markup problém nedělá. Nepřepisovat `konec-faq-rich-results` — hub na něj odkazuje a nepřebírá jeho detail.
