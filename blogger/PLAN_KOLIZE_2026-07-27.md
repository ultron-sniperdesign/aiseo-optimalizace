# Kolizní revize obsahového plánu — 2026-07-27

> Kontrola 87 otevřených řádků `obsahovy-plan.csv` proti 95 publikovaným článkům.
> Důvod: čtyři témata po sobě (`aeo vs seo`, `licencni dohody ai obsah`, `webmcp pro ai`
> a dřívější) se ukázala jako už pokrytá, což stálo draft + dva audity navíc.
>
> **Metoda:** automatický sken kandidátů (překryv titulků, klíčových slov, nadpisů a těla)
> → **ruční posouzení 29 nejpodezřelejších řádků** proti skutečnému obsahu kandidáta.
> Zbylých 58 řádků má nízký překryv a **nebylo posuzováno jednotlivě.**
>
> **Stav: aplikováno 2026-07-27, skupina B odbavena 2026-07-28.** Skupina A uzavřena
> na URL pokrývajícího článku. Skupina B zapsána jako sekce do cílových článků a řádky
> uzavřeny na jejich URL. Skupina C zatím beze změny.

---

## A. ZRUŠIT — téma je na webu hotové (12 řádků)

| Řádek plánu | Kde už to je | Co konkrétně |
|---|---|---|
| `gsc ai insights report` | `gsc-ai-segmenty-mereni` | H2 Co Google spustil · Co report ukazuje · Jak report najít a segmentovat · Co neumí. Zadání nežádá nic navíc. |
| `imprese vs kliky ai mereni` | `gsc-ai-segmenty-mereni` | H2 **Kritické omezení: žádné kliky** + H2 Jak imprese číst správně + FAQ „Proč report neukazuje kliky?" |
| `ai citace atribuce napric modely` | `jak-ai-cituje-zdroje` | Samostatné H2 pro ChatGPT, Perplexity i AI Overviews + srovnávací tabulka výběru zdrojů. |
| `youtube pro ai citace` | `youtube-pro-ai-viditelnost` | Přepis, popis, kapitoly, proč AI video nepřehrává. Řádek vznikl dřív než článek. |
| `rich results vs ai citace` | `schema-markup-ai-citace-test` | H2 **K čemu schema pořád slouží** — to je přesně ta teze. Plus FAQ „Má tedy vůbec smysl schema dělat?" |
| `zminky vs zpetne odkazy ai` | `ai-brand-mentions` | H2 **Zmínky versus odkazy z jiných webů** + FAQ „Jsou zmínky důležitější než odkazy?" |
| `json-ld vs microdata pro ai` | `strukturovana-data-pro-ai` | H2 **JSON-LD jako preferovaný formát** + FAQ „Jaký formát se doporučuje". |
| `kredencials autora pro ai` | `ymyl-obsah-pro-ai` | H2 **Ověřitelné kredencials v Česku** + FAQ „Kam v Česku odkázat na doložitelnou kvalifikaci?" — doslova zadání řádku. |
| `clip video kapitoly` | `videoobject-strukturovana-data` + `youtube-pro-ai-viditelnost` | Značení VideoObject v prvním, kapitoly a časové značky ve druhém. |
| `diakritika v url slugy` | `ai-friendly-url-struktura` | H2 **České weby: diakritika a e-shopy**. |
| `princeton geo studie` | `geo-optimalizace` | H2 **Co řekl Princeton paper — primary source**. |
| `kdy dava smysl blokovat crawlery` | `cloudflare-ai-bot-blocking` + `ai-crawler-robots-txt` | H2 Jak se u každé kategorie rozhodnout · Chci citace vs. nechci do tréninku. |

## B. SLOUČIT — unikátní data patří do existujícího článku, ne na novou URL (5 řádků)

**✅ Odbaveno 2026-07-28** — všech pět zapsáno jako sekce, řádky uzavřeny na URL cílového článku.

| Řádek plánu | Cílový článek | Co z něj vzít | Výsledná sekce |
|---|---|---|---|
| `konec howto rich results` | `konec-faq-rich-results` | Rámec „nechat, nebo odstranit?" platí pro HowTo identicky. Samostatný článek by byl klon. | **A co HowTo? Ten Google zrušil už v roce 2023** — rozhodovací Checklist |
| `domenova prekryv ai` | `jak-ai-cituje-zdroje` | Statistika 11 % domén / 680 mil. citací je nová, ale závěr „neoptimalizovat na jednu platformu" je teze cílového článku. | **Jak malý je překryv doopravdy** — číslo + co z něj neplyne |
| `ai visibility nastroje srovnani` | `ai-seo-nastroje` | Konkrétní jména a ceny tam chybí; „tři úrovně nástrojů" a „kdy začít platit" už tam jsou. | **Které platformy který nástroj vidí** — pokrytí místo cen; ceny už řeší tabulka v „Kdy začít platit" |
| `recenzni platformy expanze` | `recenze-srovnavace-pro-ai` | Které platformy a jak na ně férově už tam je. Nové je jen číslo 4,6–6,3 vs 1,8 citace a segmentace B2B/e-commerce. | **Přítomnost na víc platformách koreluje s víc citacemi** + CompareTable B2B vs e-commerce |
| `cerstvost obsahu pro perplexity` | `perplexity-seo` | H2 **Krok 2: Držte obsah aktuální** + FAQ „Jak často aktualizovat kvůli Perplexity". Nové jsou jen konkrétní čísla (30 dní, rok v titulku). | **Jak čerstvý je dost čerstvý** — čísla + varování před kosmetickým datem |

> **Poznámka z odbavení:** u `ai-seo-nastroje` se původní zadání („srovnávací tabulka s cenami")
> ukázalo jako duplicita — článek už tabulku úrovní s týmiž nástroji má a ceny hedguje záměrně.
> Doplněná byla proto dimenze, kterou článek neměl: **které AI platformy který tracker dotazuje.**

## C. PŘEPSAT ZADÁNÍ — téma obstojí, ale ne v současném rámování (2 řádky)

**✅ Zadání přepsána 2026-07-28** — řádky zůstávají otevřené, ale s explicitním zákazem toho, co už jinde je.

| Řádek plánu | Problém | Jak přerámovat |
|---|---|---|
| `obsah podle intentu dotazu` | `listicly-top-n-pro-ai` už AIVO studii i rozpad podle intentu (100 % → 0 %) vypráví celý. | Nesmí studii převyprávět. Musí to být **rozhodovací tabulka formát × záměr** napříč formáty (seznam / návod / srovnání / stránka / definiční odstavec), studie jen odkazem. Plus co s dotazy se smíšeným záměrem. |
| `ai overviews trigger kdy` | `aeo-optimalizace-v-praxi` po refreshi obsahuje podíly zobrazení i rozptyl podle oboru. | Zúžit na **co spouštění mění v praxi** (typy dotazů, kde panel nečekat; proč je nezobrazený panel někdy dobrá zpráva), ne na čísla. Pokud bez čísel neunese vlastní URL, sloučit tam jako sekci. |

## D. PSÁT — ověřeno, že na webu nejsou (11 řádků)

| Řádek plánu | Proč obstojí |
|---|---|
| `jak se dostat do ai odpovedi` | **Formát rozcestníku přes všechny kanály** (AIO, AI Mode, ChatGPT, Perplexity, Seznam Asistent) na webu není. Jednotlivé kanály ano, hub ne. Podmínka: krátká odpověď na kanál + odkaz, žádné hloubkové výklady. |
| `jak funguje chatgpt` | Vysvětlení **trénink vs. režim s vyhledáváním** pro laiky na webu není; `jak-ai-cituje-zdroje` řeší výběr zdrojů, ne fungování modelu. Hledanost 700/měs, +259 %. |
| `google quality rater guidelines` | `e-e-a-t-pro-ai` má jen sekci o původu. Chybí: QRG jako dokument, **jak se hodnocení používají** (vyhodnocování změn algoritmu, ne skóre stránky) a definice low-effort AI obsahu z updatu 2025. |
| `stranka o nas a kontakt pro duveru` | Trust je v `e-e-a-t-pro-ai` konceptuálně; **co konkrétně na ty stránky dát** a propojení s Organization schema a autorskou entitou ne. |
| `odpovedi firmy na recenze` | Ani `recenze-srovnavace-pro-ai`, ani `recenze-a-hodnoceni-pro-ai` neřeší, **jak odpověď napsat**. Je to jediný text na cizí platformě, který firma řídí. |
| `ai agenti v google hledani` | `ai-nakupni-agenti` řeší nákupní agenty, ne ohlášení z I/O 2026. |
| `knowsabout expertiza pro ai` | `person-data-pro-autora` má sameAs a @id, `knowsAbout` ne. |
| `hasmerchantreturnpolicy schema` | `produktove-stranky-pro-ai` má základní produktová data, tuhle vlastnost ne. |
| `entitni autorita pro chatgpt` | `znacka-na-wikipedii-pro-ai` je o Wikipedii jako kanálu, ne o entitní autoritě obecně. |
| `reportovani ai viditelnosti klientovi` | `mereni-seo-vykonu-2026` má KPI hierarchii pro klasické SEO, ne reporting AI viditelnosti a jeho limity. |
| `co rozhoduje o ai citaci` | Přidáno dnes z trend researche (studie na 252 000 pokusech). Konfrontuje naše vlastní doporučení — bez kolize. |

## E. NEPOSUZOVÁNO JEDNOTLIVĚ (58 řádků)

Nízký překryv ve skenu. **Neznamená to, že jsou čisté** — sken hledá lexikální shodu,
ne významovou. Doporučení: kolizní kontrolu dělat i nadále na začátku každého runu
(BLOK B), tenhle dokument ji nenahrazuje.

---

## Souhrn

| Verdikt | Řádků |
|---|---|
| A — zrušit (hotové) | 12 |
| B — sloučit do existujícího | 5 |
| C — přepsat zadání | 2 |
| D — psát, ověřeno | 11 |
| E — neposuzováno | 58 |

**Ušetřeno, pokud se A + B přijmou:** 17 draftů, které by skončily jako duplicita
nebo sekce jinde — při dosavadním tempu zhruba 17 runů.

**Poznámka k příčině:** většina kolizí není chyba plánu. Řádky byly psané dřív, než
odpovídající články vznikly (`youtube pro ai citace` je učebnicový případ — zadání
říká „kanálový článek chybí", ale článek už mezitím vyšel). Plán se od obsahu
rozešel prostě tím, jak rychle se publikuje.
