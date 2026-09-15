# C5 — samostatný závěrečný audit

**VERDIKT: PUBLIKOVAT.** Žádný zásadní nález; jeden drobný zápis názvu vlastnosti.

Audit proveden 15. 9. 2026. Před hodnocením byly z projektových podkladů přečteny pouze `blogger/auditor-system.md` a `blogger/research/jazykove-mutace-pro-ai/clanek.mdx`. Předchozí audity, rešerše a vypořádání nebyly otevřeny. Článek nebyl editován.

## Nález

### [TIP] Drobný — zachovat přesný zápis vlastnosti inLanguage

- **Pasáž:** „InLanguage popisuje jazyk obsahu.“ v bloku „Samotný údaj o jazyku nestačí“.
- **Důkaz:** [Schema.org: inLanguage](https://schema.org/inLanguage) uvádí vlastnost s malým počátečním `i`.
- **Posouzení:** Čtenář chápe větu správně a ukázka JSON má správný zápis. Jde pouze o nekonzistentní zacházení s názvem vlastnosti v běžném textu.
- **Návrh:** „Vlastnost inLanguage popisuje jazyk obsahu.“ Název může být formátovaný jako kód.

## Ověření faktů a hledání protidůkazů

- **Hreflang:** úplné adresy, možnost různých domén, návratové odkazy, odkaz na sebe a stejné sady v HTML odpovídají [dokumentaci Googlu](https://developers.google.com/search/docs/specialty/international/localized-versions). Zdroj připouští částečné obousměrné sady u rozsáhlých webů; jednoduchý příklad dvou jazyků v článku tím není vyvrácen. Tři způsoby implementace jsou rovnocenné. X-default je doporučená možnost, nikoli univerzální povinnost.
- **Dostupnost a jazyk:** doporučení vlastních URL, rizika přepínání cookies, automatických přesměrování a určování jazyka z viditelného obsahu odpovídají [pokynům pro vícejazyčné weby](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).
- **Canonical:** příklad dvou skutečných překladů se samostatnými kanonickými adresami je správný. [Dokumentace canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) požaduje při hreflang přednost stejného jazyka a doporučuje vlastní kanonický odkaz. Článek výslovně odděluje téměř shodné regionální varianty, takže doporučení nevydává za univerzální pravidlo pro všechny lokalizace.
- **AI:** podmínka indexace a způsobilosti úryvku i absence zvláštních technických požadavků odpovídají [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features). Dokument nedává slib konkrétního jazyka odpovědi po nasazení hreflang. Článek nepředstírá důkaz růstu citací ani výsledky vlastního měření. Tři opakování označuje za orientační redakční postup.
- **Lang a inLanguage:** použití jazyka na HTML dokumentu podporuje [W3C](https://www.w3.org/International/questions/qa-html-language-declarations); význam inLanguage a BCP 47 podporuje [Schema.org](https://schema.org/inLanguage).

## Jazyk, citovatelnost, SEO a CTA

- Článek vysvětluje technické pojmy konkrétní dvojicí stránek. Neobsahuje garance pozic či citací ani zakázané marketingové superlativy.
- Stručná odpověď začíná definicí, je samostatně srozumitelná a vejde se do rozsahu 40–60 slov. Úvod těla dává čtenáři kontext vztahu překladů a odděluje hlavní úkoly.
- SEO titulek má klíčové slovo vepředu, popis je v požadovaném rozsahu. Nadpisy H2 mají významovou strukturu i požadované zvýraznění. FAQ odpovídá praktickým otázkám.
- Závěr má konkrétní a přiměřený odkaz na Pack. Produktu nepřipisuje neprokázané vlastnosti ani garantované výsledky. Odkazy na test AI viditelnosti a Pack se podařilo otevřít.
- Otevření odkazu `/blog/strukturovana-data-pro-ai/` webovým nástrojem skončilo technickou chybou „not safe to open“. Není to důkaz 404 ani obsahový nález; dostupnost tohoto jediného interního odkazu tímto nástrojem nebyla ověřena.

## Meze auditu

Jde o obsahový audit předloženého MDX a primárních zdrojů. Nebyl proveden build, kontrola renderu ani spuštěn projektový jazykový checker. Tyto kroky nenahrazuje verdikt o věcné a redakční připravenosti článku.
