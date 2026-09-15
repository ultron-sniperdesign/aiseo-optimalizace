# Research — knowsAbout: jak zapsat, čemu autor rozumí, a co od toho čekat

Run 15. 9. 2026 · tutorial · řádek plánu `knowsabout expertiza pro ai` · slug `knowsabout-strukturovana-data`
Postup bez agentů a workflow (podle zpětné vazby uživatele ze 14. 9. 2026): WebSearch, curl na primární zdroje, Marketing Miner, 2× audit gpt-5.5, C6 na gpt-5.4, 1 obrázek gpt-image-2.

## Rozhodnutí

- **Pokyn v plánu se nepotvrdil.** Řádek tvrdil, že knowsAbout „posiluje entitní rozpoznání a E-E-A-T“. Google vlastnost v dokumentaci neuvádí, pro funkce s AI žádná zvláštní strukturovaná data nevyžaduje a jediný dostupný test (Ahrefs) vlastnosti zvlášť neměřil. Článek proto stojí na definici, správném zápisu a otevřeném „vliv jsme nenašli“ — ve stejné linii jako `schema-markup-ai-citace-test` a `organization-schema-pro-znacku`.
- **Hledanost nulová.** Marketing Miner (cs, 15. 9. 2026, 20 KW, 60 kreditů): `knowsabout`, `knowsabout schema`, `schema knowsabout` bez dat; `strukturovaná data` 180, `eeat` 170, `person schema` 10, `organization schema` 10, `entitní seo` 10. Článek je podpůrný díl klastru strukturovaných dat, ne lov návštěv; titulek pro SERP proto nese přesný název vlastnosti na začátku.
- **Slug změněn před publikací** z `knowsabout-expertiza-autora` na `knowsabout-strukturovana-data` (2. audit: „expertíza“ ve slugu i titulku slibuje víc, než vlastnost podle definice znamená).
- **Sesterský článek opraven v témže commitu**, protože by novému odporoval: `person-data-pro-autora` měl u knowsAbout „signál odbornosti“, v datech článku odkazoval na autora jen přes `@id` (Google u autora článku typ a url, případně sameAs, důrazně doporučuje) a nesl dlaždici „~40 %“ připsanou studiím GEO. Zbytek jeho tvrzení o AI je v REFRESH_QUEUE.

## Ověřená fakta (15. 9. 2026, primární zdroje, doslovně)

**schema.org**
- Soubor aktuálního vydání `schemaorg-current-https.jsonld`: `schema:knowsAbout` — „Of a Person, and less typically of an Organization, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or JobPosting descriptions.“ rangeIncludes Text, Thing, URL; domainIncludes Organization, Person; `isPartOf https://pending.schema.org`; contributor The Trust Project; source issue #1688.
- Stránka termínu: „This term is in the "new" area - implementation feedback and adoption from applications and websites can help improve our definitions.“ · „Usage: 1M - 10M Domains … Based on monthly aggregations from Google's web index. (Google - August 2026)“ · patička V30.0 | 2026-03-19.
- Poznámky k vydáním: úryvek „Second phase of additions included knowsAbout, knowsLanguage proposals (#1688)“ leží v sekci verze 3.4 (sdo-telesto, 2018-06-15) — pozice ověřena mezi nadpisy 3.4 a 3.3.
- `sameAs`: „URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.“ · `jobTitle` a `DefinedTerm` jsou také v pending.

**Google Search Central**
- Staženo všech 38 stránek dokumentace strukturovaných dat odkazovaných z galerie (article, book, breadcrumb, carousel, carousels-beta, course, dataset, discussion-forum, education-qa, employer-rating, event, factcheck, generate-structured-data-with-javascript, image-license-metadata, intro-structured-data, job-posting, local-business, loyalty-program, math-solvers, merchant-listing, movie, organization, paywalled-content, product, product-snippet, product-variants, profile-page, qapage, recipe, return-policy, review-snippet, sd-policies, search-gallery, shipping-policy, software-app, speakable, vacation-rental, video): **knowsAbout 0×**. `jobTitle` jen v article, `knowsLanguage` jen ve vacation-rental, `hasCredential` 0×.
- Organization (akt. 2026-09-08): „There are no required properties“; doporučené mj. legalName, sameAs, taxID, vatID, iso6523Code, naics; „Adding organization structured data to your home page can help Google better understand your organization's administrative details and disambiguate your organization in search results“; „We recommend placing this information on your home page, or a single page that describes your organization, for example the about us page. You don't need to include it on every page of your site.“
- ProfilePage (akt. 2026-09-08): „ProfilePage markup is designed for any site where creators (either people or organizations) share first-hand perspectives.“ Povinné mainEntity (Person nebo Organization); u osoby name, alternateName, identifier, image, sameAs, description, agentInteractionStatistic, interactionStatistic.
- Article (akt. 2026-09-08): „To help Google better understand who the author is, we strongly recommend using the type and url (or sameAs) properties.“ Pozice autora do jobTitle, ne do author.name. „Don't use the Thing type“ se týká typu autora, ne hodnot knowsAbout.
- Introduction to structured data (akt. 2025-12-10): „you should rely on the Google Search Central documentation as definitive for Google Search behavior, rather than the schema.org documentation. There are more attributes and objects on schema.org that aren't required by Google Search; they may be useful for other search engines, services, tools, and platforms.“
- General structured data guidelines (akt. 2026-07-10): „Don't mark up content that is not visible to readers of the page.“ · „Your structured data must be a true representation of the page content.“
- AI features and your website (akt. 2025-12-10): „You don't need to create new machine readable files, AI text files, or markup to appear in these features. There's also no special schema.org structured data that you need to add.“ · „Making sure your structured data matches the visible text on the page“.
- Creating helpful, reliable, people-first content (akt. 2025-12-10): „While E-E-A-T itself isn't a specific ranking factor…“
- Rich Results Test (nápověda Search Console): „The test shows which rich result types were found on the page, as well as any errors or suggestions for your structured data.“ — proto v článku jen „je stavěný na typy, pro které Google rozšířené výsledky zobrazuje“, nic o tom, co s knowsAbout vypíše.

**Ahrefs** — „We Tracked 1885 Pages Adding Schema. AI Citations Barely Moved“, 11. 5. 2026: 1 885 stránek přidalo JSON-LD 8/2025–3/2026, 4 000 kontrolních, 30 dní před a po; AI Mode +2,4 % a ChatGPT +2,2 % neodlišitelné od nuly, AI Overviews −4,6 % víc než kontrola (statisticky významné); „We pooled all schema types together. Article, FAQ, Product, HowTo, Organization.“ V článku „test s kontrolní skupinou“, ne „kauzální test“ (není randomizovaný).

**Wikidata** (Special:EntityData/*.json, povoleno v robots.txt): Q180711 cs „optimalizace pro vyhledávače“ / en „search engine optimization“; Q484847 cs „elektronické obchodování“ / en „e-commerce“.

**Oborové tvrzení** (nejmenujeme): článek dodavatele z 20. 3. 2026 píše, že knowsAbout „creates a topical authority signal that AI Mode uses when selecting sources“ a že entitní data zlepšují citace v režimu AI za 30–60 dní — odstavce bez jediného odkazu (ověřeno v HTML).

**Příklady v článku** prošly validátorem schema.org (validator.schema.org/validate): Person 0 chyb / 0 varování, Organization 0 / 0. Offline kontrola proti slovníku (typy a vlastnosti včetně dědičnosti) bez nálezu.

**OpenAI / AI asistenti:** dokumentaci, podle které by knowsAbout četli, jsme nenašli (hledání 15. 9. 2026). V článku formulováno jako náš nález, ne jako tvrzení o světě.

## Co článek netvrdí

- že knowsAbout „nic nedělá“ nebo že ji Google ignoruje — jen že ji nedokumentuje;
- že zlepšuje E-E-A-T, pozice nebo citace;
- konkrétní počet témat (žádné doporučení Googlu ani schema.org neexistuje);
- nic o tom, jak test rozšířených výsledků knowsAbout zobrazí.

## Audity

- **Audit 1 (gpt-5.5):** 6× WARNING, 4× TIP. Přijato: titulek bez „expertízy“, pryč zobecnění „v oborových návodech se často píše“, doplněna významnost poklesu v Přehledu od AI, změkčeno „k popisu věcně patří“, vysvětlení @id/url/sameAs/Thing před kódem, přesnější rozsah 38 stránek, „témata nepomohou odlišit autora“ → „nejsou identifikační údaj“, zhutněná FAQ, CTA s konzultací. Odmítnuto: změna URL interního odkazu `schema-markup-ai-citace-test` (slug publikovaného článku se nemění).
- **Audit 2 (gpt-5.5):** 5× WARNING, 4× TIP. Přijato: slug, „kauzální test“ → „test s kontrolní skupinou“, „co čekat nemáte“ → „co zatím není doložené“, „nezaručuje zobrazení“, popisek dlaždice, nejmenovaný článek přeformulován na „tvrzení, u kterého nestál odkaz“, věta o sameAs u firmy, shrnutí „na jednom stabilním místě“, „položka typu Thing“.
- **C6:** mechanicky 0; gpt-5.4 4 nálezy přijaty bez nových pravidel (viz JAZYK_AUDIT_LOG.md).

## Vedlejší nálezy

- `/autor/kamil/` (stránka admina): Person JSON-LD má v knowsAbout „Shoptet“ a „E-commerce“, ale viditelný text stránky slovo Shoptet ani „e-commerce“ neobsahuje (měřeno curl 15. 9. 2026; „e-shop“ 6×). Podle pravidla z článku buď doplnit do textu (Zlatý partner Shoptet je doložený v PartnerBadges), nebo z dat vyřadit. → board.
- `person-data-pro-autora` — zbytek tvrzení o AI bez opory → REFRESH_QUEUE.
- Nové řádky plánu z dokumentace Googlu: ProfilePage (8. 9. 2026), recenze za odměnu v úryvcích s recenzemi (změna 24. 7. 2026), Product.category s CategoryCode (změna 7. 7. 2026).
