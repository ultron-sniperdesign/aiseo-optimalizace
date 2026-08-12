# Research — Co přesně vypne který opt-out z AI

Datum: **11. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `seznam extended vs google extended`

Žánrová změna po sérii měření: tenhle článek nestojí na skenu, ale na **porovnání primární dokumentace sedmi přepínačů**. Všechno níž je citace nebo parafráze z oficiálního zdroje, čtené 11. 8. 2026.

## Přehled — co který přepínač vypne a co ne

| Přepínač | Vypne | Nevypne | Zdroj |
|---|---|---|---|
| **Google-Extended** | trénink a grounding v aplikacích Gemini a Vertex AI | **nic v Search** | developers.google.com/crawling |
| **Search generative AI control** (v Search Console) | zobrazení v AI Overviews a AI Mode včetně odkazu | běžné výsledky Search | support.google.com/webmasters/answer/16908024 |
| **GPTBot** | použití obsahu pro trénink foundation modelů | vyhledávání v ChatGPT | developers.openai.com |
| **OAI-SearchBot** | zobrazení ve výsledcích vyhledávání ChatGPT | trénink | developers.openai.com |
| **ChatGPT-User** | ⚠️ nejistě — viz níž | | developers.openai.com |
| **Applebot-Extended** | trénink generativních modelů Applu | Spotlight, Siri, Safari | support.apple.com/119829 |
| **Seznam-Extended** | obsah v Seznam AI **i** přivádění uživatelů | — | partner.seznam.cz |

## Nález 1 — Google-Extended neřídí AI Overviews ani AI Mode

Nejsilnější zjištění. Google to říká na dvou místech.

V dokumentaci crawlerů: *„Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."* Slouží k tomu, aby vydavatel řídil, jestli se jeho obsah použije *„for training future generations of Gemini models"* a pro grounding v Gemini a Vertex AI.

Na stránce o AI funkcích v Search je to ještě explicitnější: *„AI is built into Search and integral to how Search functions, which is why robots.txt directives for Googlebot is the control for site owners to manage access to how their sites are crawled for Search."* Google-Extended je tam zmíněný jen jako nástroj *„to limit AI training and grounding in some of Google's other systems"*.

**Praktický důsledek:** kdo nastaví Google-Extended s tím, že se tím dostane z AI Overviews, nastavil něco jiného. Na AI plochy v Search je samostatný přepínač v Search Console.

**Vlastní data k tomu:** v [měření 33 českých médií](/blog/bytespider-ceska-media/) mělo Google-Extended v robots.txt **9 webů**. ⛔ Neznám jejich záměr a v článku ho nesmím podsouvat — formulovat jako „pokud bylo cílem X, tohle to nedělá".

## Nález 2 — Search generative AI control dělá to, co Google-Extended ne

Nápověda Search Console: exclusion znamená, že *„Your site's content is prevented from being visible to users in Search generative AI features, including being linked to within these features."*

A zároveň: *„This control only affects whether your content can appear in certain Search generative AI features; this control isn't used as a ranking or inclusion signal affecting other parts of Search."* Plus obsah *„may still be used to power Google Search as a whole"*.

Souvislosti (proč vznikl, rozhodnutí CMA) rozebírá vlastní článek [blokovat-ai-odpovedi-gsc](/blog/blokovat-ai-odpovedi-gsc/).

## Nález 3 — GPTBot z vyhledávání v ChatGPT nevyřadí

Rozdělení u OpenAI je jasné a v praxi se plete:

- **GPTBot**: *„Disallowing GPTBot indicates a site's content should not be used in training generative AI foundation models."* Trénink, nic víc.
- **OAI-SearchBot**: *„Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers, though can still appear as navigational links."*

Kdo chce ven z odpovědí ChatGPT, potřebuje druhý z nich. A i pak podle dokumentace zůstává možnost objevit se jako navigační odkaz.

## Nález 4 — u ChatGPT-User dokumentace sama říká, že robots.txt nemusí platit

Tohle je věc, kterou je nutné podat opatrně a přesně. Dokumentace uvádí, že u akcí vyvolaných uživatelem *„robots.txt rules may not apply"*, protože nejde o automatické procházení.

**Netvrdím, že OpenAI robots.txt ignoruje.** Tvrdím, že to, co se běžně považuje za spolehlivý opt-out, u téhle kategorie robotů podle dokumentace spolehlivé být nemusí. Navazuje to na [měření IP rozsahů](/blog/kdo-publikuje-ip-rozsahy/), kde má ChatGPT-User 256 prefixů proti 21 u GPTBota — je to jiná kategorie provozu.

## Nález 5 — Applebot-Extended nevypne Siri ani Spotlight

Apple: zákaz Applebot-Extended znamená opt-out z tréninku generativních modelů. Ale obsah *„will remain discoverable through Spotlight, Siri, and Safari"*, protože obyčejný Applebot dál prochází.

V mém měření mělo Applebot-Extended 5 z 33 českých médií.

## Nález 6 — Seznam je jediný, u kterého opt-out stojí i návštěvnost

Nápověda Seznam Partner k Seznam AI uvádí u zákazu `Seznam-Extended` obojí najednou: *„Na váš web již nadále nebudeme uživatele přivádět ani s jeho obsahem v rámci Seznam AI pracovat."*

To je jiná dohoda než u Googlu: **u Seznamu opt-out z AI znamená i konec přivádění uživatelů z toho kanálu.** Detail v článku [seznam-extended-opt-out](/blog/seznam-extended-opt-out/).

Poznámka k hledání zdroje: obecná stránka Seznamu o řízení procházení (`o-seznam.cz/napoveda/vyhledavani/en/crawling-control/`) Seznam-Extended vůbec nezmiňuje — je to v nápovědě pro partnery u služby Seznam AI. Znovu potvrzuje, že dokumentaci nejde odhadovat podle konvence.

## Limity

- Jde o **porovnání dokumentace, ne měření chování**. Netestoval jsem, jestli se roboti podle svých pravidel opravdu řídí.
- Stav k 11. 8. 2026; formulace v dokumentaci se mění.
- Nesleduji všechny existující přepínače, jen sedm nejpoužívanějších na českém trhu.
- Čísla o českých médiích (9 a 5 z 33) pocházejí z měření z 9. 8. 2026 a jde o nenáhodný ruční vzorek.
- U ChatGPT-User cituju dokumentaci; vlastní test dodržování nemám.

## Zdroje (všechny čteny 11. 8. 2026)

- `developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers`
- `developers.google.com/search/docs/appearance/ai-features`
- `support.google.com/webmasters/answer/16908024`
- `developers.openai.com/api/docs/bots`
- `support.apple.com/en-us/119829`
- `partner.seznam.cz/napoveda/dalsi-sluzby/seznam-ai/`
- vlastní měření robots.txt 33 českých médií (9. 8. 2026)
