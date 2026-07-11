# Research — Query fan-out v Google AI Mode

**Datum:** 2026-07-11
**Cílová kategorie:** analysis
**Slug:** `query-fan-out-ai-mode`
**Cílové KW:** query fan-out / google ai mode query fan-out / jak funguje ai mode / rozklad dotazu ai

## 1. Co je query fan-out (definice)

- **Query fan-out** = technika, kterou Google AI Mode (a část AI Overviews) rozloží jeden dotaz uživatele na **víc souběžných podotázek (sub-queries)**, každou pošle jako samostatné vyhledávání, a z výsledků napříč nimi syntetizuje jednu odpověď s odkazy.
- Nejde o jedno vyhledávání jednoho termínu — jde o **vějíř (fan-out)** souvisejících vyhledávání běžících paralelně.
- Google to potvrdil při uvedení AI Mode (**cca březen 2025**); Robby Stein (VP Product, Search) to popsal na příkladu „things to do in Nashville with a group" → systém si sám domyslí podotázky: skvělé restaurace, bary, aktivity s dětmi…
- Vychází z Google patentu na **„thematic search"** — vytvoří podotázky podle odvozených témat, seskupí výsledky podle témat a vygeneruje shrnutí přes LLM.

## 2. Mechanika krok za krokem

1. Uživatel zadá (často delší, konverzační) dotaz.
2. LLM dotaz **interpretuje a rozloží** na sadu podotázek — explicitních i **implicitních** (na které se uživatel přímo nezeptal).
3. Podotázky běží **paralelně** napříč živým webem, znalostním grafem a specializovanými zdroji (Shopping Graph, Google Finance, letová data, filmové info).
4. Retrieval nemíří na celé stránky, ale na **konkrétní pasáže (chunks)**, které odpovídají jednotlivým aspektům.
5. LLM z pasáží napříč zdroji složí jednu odpověď; každé téma může odkazovat na zdrojové stránky.

## 3. Typy podotázek (iPullRank — 8 typů)

1. **Equivalent** — jiné formulace téže otázky
2. **Follow-up** — logicky navazující otázky
3. **Generalization** — obecnější verze
4. **Specification** — konkrétnější/detailnější verze
5. **Canonicalization** — standardizovaná formulace
6. **Language translation** — vícejazyčný retrieval
7. **Entailment** — logicky implikované otázky
8. **Clarification** — upřesňující otázky

> Klíč: „dokument nemusí odpovídat přesné formulaci uživatele, ale může odpovídat na zobecněnou verzi."

## 4. Rozsah / čísla (ověřeno)

- **AI Mode standard:** Google neuvádí přesný počet podotázek.
- **Deep Search (intenzivnější varianta):** „desítky až stovky" background dotazů, může trvat minuty.
- Dosah AI Mode + Deep Search + část AI Overviews: cca **1,5 mld. uživatelů měsíčně**.
- Shopping Graph: 50 mld. produktů, aktualizace 2 mld.×/hod.
- AI Search dotazy jsou průměrně **delší (70–80 slov)** vs. 3–4 slova u klasického Search (iPullRank).
- Systémy typicky běží ~20 iterací, než skončí.

## 5. Co to znamená pro obsah (implikace)

### Ranking → citace
- Klasické „být na pozici 1 na klíčové slovo" ztrácí smysl, když se jeden dotaz rozpadne na 10 podotázek.
- Metrika se posouvá k **„jsem citovaný v odpovědi?"** napříč podotázkami, ne k pozici.

### Pasážová architektura (atomic chunks)
- Retrieval bere **pasáže, ne celé stránky.** Každý odstavec by měl být samostatně užitečný a extrahovatelný.
- Dobře strukturovaný, „layout-aware" obsah se lépe parsuje na smysluplné pasáže.
- Napojení na už publikované: chunky 130–170 slov, definition-first (jak-ai-cituje-zdroje).

### Pokrytí celé cesty (journey-stage)
- Neoptimalizovat jen na finální nákupní dotaz. Pokrýt research → porovnání → řešení problému → přechody mezi fázemi.
- Každá fáze spouští jiné podotázky → víc šancí být citovaný.

### Tematická organizace
- Systém generuje podotázky podle témat; tematicky uspořádaný web (hub-and-spoke, prolinkování) tuto navigaci podporuje.

### Riziko sémantického driftu / personalizace
- Expanze zkoumá i sousední koncepty → výsledky se mohou vzdálit od úzkého záměru.
- Podotázky jsou personalizované (poloha, historie) → stejný dotaz se u dvou lidí rozvětví jinak. „Stabilní pozice" neexistuje.
- Praktický důsledek: nelze spoléhat na jedno „hero" klíčové slovo; potřeba sémantické šíře a jasných entit.

## 6. Jak se to liší napříč platformami

| Platforma | Přístup k rozkladu dotazu |
|---|---|
| Google AI Mode | Paralelní „dávka" vyhledávání napříč tématy; relativně transparentní |
| Microsoft Copilot | Iterativní grounding přes Bing Orchestrator |
| Perplexity | Vícestupňové řazení nad rojem dotazů; sekce jako atomické jednotky |
| ChatGPT | Nezveřejněná mechanika; reformulace + citovaná syntéza |

## 7. Praktické tipy (co s tím)

1. **Struktura pasáží:** krátké, samostatně srozumitelné odstavce (jeden odstavec = jedna odpověď na jednu podotázku).
2. **Krátká odpověď / definice nahoře:** definition-first pattern.
3. **Pokrýt implicitní podotázky:** k hlavnímu tématu doplnit „vedlejší" otázky (cena, srovnání, pro koho, alternativy, jak začít) — FAQ, srovnání, checklisty.
4. **Tematické prolinkování:** hub (pilíř) + spokes (články), interní odkazy podle témat.
5. **Entitní jasnost:** konzistentní pojmenování značky/produktu, strukturovaná data pro entity.
6. **Měřit citace, ne pozici:** ruční test dotazů + jejich variant (test-viditelnosti-v-ai).

## 8. CZ specifika

- AI Mode se v ČR rozjíždí postupně; AI Overviews v češtině aktivní.
- Delší konverzační dotazy v češtině → pokrývat přirozený jazyk, ne jen krátká KW.
- Pro CZ trh doplnit Seznam (vlastní logika, mimo Google fan-out).

## 9. Brand voice notes

- „schema markup" → „strukturovaná data"
- „framework" → „rámec / přístup"
- „chunk" → „pasáž / úsek obsahu"
- „ranking" → „pozice ve výsledcích"
- „crawler/bot" → „vyhledávací robot"
- „AIO" → „Google AI Overviews"
- „query fan-out" → ponechat jako termín, ale vždy vysvětlit česky („rozklad dotazu na podotázky")
- „retrieval" → „vyhledání / dohledání pasáží"
- „traffic" → „návštěvnost"
- Hedge: čísla (1,5 mld., 70–80 slov, ~20 iterací) uvádět „podle Googlu / podle dostupných analýz", ne jako absolutní fakt.

## 10. Interní odkazy (ověřeno, existují)

- `google-ai-mode` (mateřský článek — co je AI Mode)
- `jak-ai-cituje-zdroje` (jak AI vybírá zdroje, chunky)
- `chatgpt-seo`, `perplexity-seo` (platformní srovnání)
- `strukturovana-data-pro-ai` (entity)
- `test-viditelnosti-v-ai` (měření citací)
- `zero-click-ai` (efekt bez prokliku)
- `srovnavaci-clanky-pro-ai` (pokrytí porovnávacích podotázek)

## 11. CTA pozice

- Analysis → primárně **Audit 9 990 Kč** (jak strukturovat obsah pro AI napříč podotázkami).
- Sekundárně **Pack 1 490 Kč** (DIY wireframy s pasážovou strukturou).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Search Engine Journal — Query Fan-Out Technique in AI Mode: New Details From Google
- iPullRank — Expanding Queries with Fan-Out
- Aleyda Solis, Ethan Lazuk, Conductor, Digiday (kontext)
