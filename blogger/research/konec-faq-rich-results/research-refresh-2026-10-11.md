# Research — refresh `konec-faq-rich-results` (11. 10. 2026)

**Typ runu:** refresh jednoho článku (3. run cyklu 2 + 1 + 1). **Publikováno** 11. 7. 2026, **aktualizováno** 28. 7. 2026.

## Proč tenhle článek

- **Zastaralý stav funkce je jádro článku:** časová osa končí „srpen 2026 — konec podpory v API (chystá se)“,
  datum už minulo; článek nezmiňuje, že Google omezil FAQ rich results na vládní a zdravotnické weby už v srpnu 2023.
- **Nedoložená tvrzení** (REFRESH_QUEUE 27. 9. 2026): „Google ho podle veřejné dokumentace dál zpracovává
  k porozumění stránce“, „AI systémy ho zpracovávají“ — v `answer`, FAQ, checklistu, závěru.
- **Rozhodnutí admina 10. 10. 2026 (`f5054ca`):** časová osa v `Stepper` (se štítky `label`, které typ už nemá)
  patří do tabulky Datum | Co se stalo | Co to znamená, jak ji drží `/ai-mode/`.
- **Search Console (13. 7.–11. 10. 2026):** 8 zobrazení, pozice 5,9, 0 kliků. Ostatní kandidáti z fronty mají
  také jednotky až desítky zobrazení (ai-search-trendy-cesko-2026 28, miliarda-uzivatelu-ai-mode 19,
  nahradi-ai-mode-vyhledavani 18); výjimka `kolik-stoji-ai-seo` 404 zobrazení na pozici 44 — data výběr nerozhodla.
- **Marketing Miner (11. 10. 2026, cs):** faq 1 000, strukturovaná data 170, rich snippets 50, schema markup 40,
  často kladené otázky 40, rich results 20, faq schema / faqpage / howto schema 10 hledání měsíčně — téma je úzké,
  refresh je hlavně o přesnosti.

---

## Co je ověřeno a čím (Z16)

| Druh dokladu | Co | Odkaz + datum načtení |
|---|---|---|
| **Dokumentace** | Google Search Central blog *Changes to HowTo and FAQ rich results* (8. 8. 2023, J. Mueller): „FAQ (from FAQPage structured data) rich results will only be shown for well-known, authoritative government and health websites.“; „there's no need to proactively remove it. Structured data that's not being used does not cause problems for Search, but also has no visible effects in Google Search.“; HowTo jen na počítačích. Update 14. 9. 2023: „As of September 13, Google Search no longer shows How-to rich results on desktop … deprecated“; report a test do 30 dnů, API do 180 dnů. **Doslova ověřeno 11. 10. 2026 (sám):** „For all other sites, this rich result will no longer be shown regularly.“ (→ v článku „přestal pravidelně zobrazovat“, ne „nikdy“); „While you can drop this structured data from your site, there's no need to proactively remove it.“; „we will be dropping the How-to search appearance, rich result report, and support in the Rich results test in 30 days. To allow time for adjusting your API calls, support for How-to in the Search Console API will be removed in 180 days.“ (ohlášení, ne potvrzení provedení) | developers.google.com/search/blog/2023/08/howto-faq-changes, 11. 10. 2026 (auto-shrnutí na stránce je nepřesné — necitovat) |
| | Changelog *Latest Google Search Documentation Updates* (last updated 2026-10-08): „May 8“ 2026 — „Deprecating the FAQ rich result feature … This feature will no longer appear in Google Search starting May 7, 2026.“ Oznámení v dokumentaci (Wayback 8. 5. 2026): report, typ zobrazení a podpora v Rich Results Test „in June 2026“, Search Console API „in August 2026“. **„June 15“ 2026 — „Removed documentation for the FAQ rich result feature.“** Stará adresa faqpage → 301 na changelog; galerie podporovaných typů bez FAQ od 15. 6. | developers.google.com/search/updates#faq-deprecation a #removing-faq-rich-result, 11. 10. 2026 |
| | **Ověřeno znovu 11. 10. 2026 (sám, ne agent):** obě položky changelogu doslova — 8. 5.: „Added a deprecation notice …“ / „This feature will no longer appear in Google Search starting May 7, 2026.“; 15. 6.: „Removed documentation …“ / „… no longer shown in Google Search results, as announced in the changelog entry in May 2026.“ **K samotným strukturovaným datům (nechat / smazat / k čemu slouží) ani jedna položka nic neříká.** Archivované oznámení v dokumentaci (Wayback 20260508190423): „Upcoming deprecation: As of May 7, 2026, FAQ rich results are no longer appearing in Google Search. We will be dropping the FAQ search appearance, rich result report, and support in the Rich results test in June 2026. To allow time for adjusting your API calls, support for the FAQ rich result in the Search Console API will be removed in August 2026.“ — taky nic o datech samotných. Kotvy `#faq-deprecation`, `#removing-faq-rich-result` na stránce existují | developers.google.com/search/updates; web.archive.org/web/20260508190423/https://developers.google.com/search/docs/appearance/structured-data/faqpage — 11. 10. 2026 |
| | Galerie podporovaných typů (*Structured data markup that Google Search supports*, Last updated 2026-06-15): 25 typů, **mezi nimi Article, Breadcrumb, Organization, Product; FAQ ani How-to v ní nejsou** → CTA „strukturovaná data pro rozšířené výsledky, která Google dál podporuje — produkt, organizaci, drobečkovou navigaci a článek“ sedí | developers.google.com/search/docs/appearance/structured-data/search-gallery, 11. 10. 2026 |
| | **NENALEZENO:** ani oznámení, ani dokumentace netvrdí, že Google FAQPage dál používá k porozumění stránce nebo pro AI funkce. Skutečné datum odebrání reportu, testu a API Google nezveřejnil; **nepřímo:** nápověda Search Console *Performance report (Search results): Dimensions and data groupings* vede „FAQ rich results“ (`TPF_FAQ`, v hromadném exportu `is_tpf_faq`) mezi „Deprecated fields“: „For users of bulk data export, these fields appear in the BigQuery schema, but their values in recent dates is NULL“, ve Wayback už 12. 8. 2026 | support.google.com/webmasters/answer/17011259, 11. 10. 2026 |
| | *General structured data guidelines* (2026-07-10): „Don't mark up content that is not visible to readers of the page.“; „Your structured data must be a true representation of the page content.“ | developers.google.com/search/docs/appearance/structured-data/sd-policies, 11. 10. 2026 |
| | *AI features and your website* (2025-12-10): „There's also no special schema.org structured data that you need to add.“ *Optimizing … for generative AI features* (2026-07-10): strukturovaná data nejsou pro generativní AI potřeba, je dobré je používat, „as it helps with being eligible for rich results on Google Search“ → **u FAQ ta způsobilost zanikla** | developers.google.com/search/docs/appearance/ai-features; …/fundamentals/ai-optimization-guide#mythbusting, 11. 10. 2026 |
| | Bing Webmaster Guidelines §14 (platí i pro Copilot a grounding): strukturovaná data „may support clearer grounding but does not guarantee visibility or grounding traffic“; FAQPage nejmenuje. OpenAI, Perplexity, Anthropic: o schema.org / FAQPage **nic** (NENALEZENO) | bing.com/webmasters/help/webmaster-guidelines-30fba23a, 11. 10. 2026 |
| | Sociální síť, ne dokumentace: J. Mueller (Bluesky 9. 5. 2026) — pro většinu webů se nic nemění, markup už byl ignorovaný, kdo ho přidal jen kvůli Vyhledávání, může ho odstranit → **v článku se necituje** | bsky.app/profile/johnmu.com/post/3mlfktd65uk2f |
| **Rozhraní (UI)** | **prázdné** — do Search Console se nepřihlašuji; o tom, co nástroje dnes ukazují, píšu jen podle dokumentace a changelogu | — |
| **Měření** | **Vlastní web:** FAQPage JSON-LD na **206 stránkách** buildu (z toho 187 v `/blog/`); viditelné FAQ i FAQPage skládá jedna komponenta `Faq.astro` z týchž položek (kořenový `CLAUDE.md` § VI) — údržba markupu nic navíc nestojí | `grep -rl '"@type":"FAQPage"' dist`, 11. 10. 2026 |
| | **Vlastní web — HowTo:** pole `howto:` generovalo v šabloně `blog/[slug].astro` **jen HowTo JSON-LD**; 20. 9. 2026 odstraněno 318 kroků z 63 článků (commit `5cfacf1`, pravidlo Z15). **Mimo blog má HowTo JSON-LD dál 9 stránek** (sekce, pilíř, `/zacnete-tady/`, `/prehled-od-ai/`, `/ai-mode/` — scope admina) → článek mluví jen o **článcích blogu**, ne o celém webu | `git show 5cfacf1`; `grep -rl '"@type":"HowTo"' dist`, 11. 10. 2026 |
| | **Search Console + Marketing Miner** — viz nahoře (jen pro výběr, do textu ne) | 11. 10. 2026 |
| **Nelze ověřit** | (a) jestli Google FAQPage po konci rich results k něčemu používá — viz dokumentace; (b) jestli FAQPage čtou AI asistenti (ChatGPT, Perplexity, Claude) — oficiální dokumentaci nemáme | — |

---

## Podmínky u tvrzení o cizích platformách (B3)

| Tvrzení v článku | Za jakých podmínek platí | Doklad |
|---|---|---|
| FAQ rich results od 8. 8. 2023 jen pro vládní a zdravotnické weby | jen **známé, autoritativní** (well-known, authoritative) vládní a zdravotnické weby; ostatním se výsledek „no longer shown regularly“ — tedy **ne pravidelně**, ne „nikdy“ | blog 2023 |
| Od 7. 5. 2026 se FAQ rich results nezobrazují vůbec | Vyhledávání Google; oznámení nemá omezení na zemi ani jazyk (→ „Google změnu neomezil na žádnou zemi ani jazyk“, ne „celosvětově ověřeno“) | changelog 8. 5. 2026 |
| Nevyužitá strukturovaná data neškodí | výrok Googlu z 2023 o **Vyhledávání Google**; platí pro data, která **odpovídají obsahu** — nesoulad s viditelným obsahem porušuje obecné pokyny | blog 2023, sd-policies |
| Odebrání reportu, typu zobrazení, testu (červen 2026) a API (srpen 2026) | **ohlášené** termíny; skutečné datum provedení Google nezveřejnil; nápověda vede FAQ mezi ukončenými poli, v hromadném exportu NULL u novějších dat | Wayback 8. 5. 2026, help 17011259 |
| HowTo: 8. 8. 2023 jen počítače, 13. 9. 2023 konec | report, typ zobrazení a test „in 30 days“, API „in 180 days“ — **ohlášení** ze 14. 9. 2023 | blog 2023 (update) |
| Google: pro AI funkce žádná speciální strukturovaná data | „no special schema.org structured data that you need to add“; doporučení dál používat strukturovaná data zdůvodněno **způsobilostí pro rozšířené výsledky** — u FAQ zanikla | AI features, AI guide (mythbusting) |
| Bing a Copilot | strukturovaná data „may support clearer grounding but does not guarantee visibility or grounding traffic“; **FAQPage nejmenuje**; pokyny platí pro Bing včetně Copilotu | Bing Webmaster Guidelines §14 |
| OpenAI, Perplexity, Anthropic | **nenalezeno = nedoloženo, ne prokázaně nulové** → v článku „jsme nenašli“, ne „neuvádějí / nečtou“ | — |
| Vlastní web: FAQPage na 206 stránkách | build z 10. 10. 2026; viditelné FAQ i JSON-LD skládá `Faq.astro` z týchž položek | grep `dist` |
| Vlastní blog: pole `howto` zrušené 20. 9. 2026 | jen **články blogu**; sekce a pilíř mají HowTo JSON-LD dál | commit `5cfacf1`, grep `dist` |

---

## Navazující články (B2) — prověrka agentem 11. 10. 2026

| Článek | Verdikt | Proč |
|---|---|---|
| `strukturovana-data-pro-ai` | **odkaz** | čistý; FAQ 7. 5. 2026 a HowTo 13. 9. 2023 s primárními zdroji; ř. 98 slibuje, že tenhle článek drží „celou časovou osu i rozhodnutí“ |
| `pasazova-optimalizace-obsahu` | **nový odkaz** | přečten celý agentem 10. 10. 2026 (run `zkratky-a-terminy-pro-ai`) — čistý; 11. 10. ověřeno grepem, že o FAQ, FAQPage ani strukturovaných datech nic netvrdí → odkaz jen na psaní sebestačných odpovědí |
| `dotazy-zakazniku-na-produktu` | **nový odkaz** | čistý; ř. 143–152 „strukturovaným datům nepřisuzujte funkci, kterou Google nedokumentuje“ |
| `jak-ai-cituje-zdroje` | **odkaz odstraněn** | ř. 126 „Pomáhají AI extrahovat fakta … (Article, FAQPage…)“ bez zdroje; čísla bez zdroje (ř. 25, 27); rozpory (ř. 29 × 116; Profound 2026 × 1. 7. 2025) |
| `aeo-geo-je-porad-seo` | **odkaz nahrazen přímým odkazem na průvodce Googlu** | ř. 113 „strukturovaná data … fungují pro rich results i AI features“ bez citace; ř. 79/88 HTTPS a mobil jako technické požadavky AI funkcí (Google uvádí tři: neblokovaný Googlebot, HTTP 200, indexovatelný obsah) |
| `aeo-optimalizace-v-praxi`, `jak-strukturovat-pillar-content` | **neodkazovat** | FAQ/HowTo jako fungující prvky, „pomáhá strojovému porozumění“ bez zdroje |

**Plošný nález pro frontu (blok oprav):** tvrzení, že FAQ/HowTo rozšířené výsledky dál fungují nebo že FAQPage
„pomáhá strojům/Googlu/AI pochopit obsah“, v ~10 článcích (aeo-optimalizace-v-praxi, geo-optimalizace,
seo-audit-co-kontrolovat, seo-nastroje-2026, ai-seo-audit, aio-strategie, jak-strukturovat-pillar-content,
caste-chyby-v-seo-2026-update, perplexity-seo, jak-ai-cituje-zdroje) — seznam řádků od agenta v `vyporadani`/frontě.
