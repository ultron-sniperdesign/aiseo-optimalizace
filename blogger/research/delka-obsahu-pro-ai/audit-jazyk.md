# C3 — Jazykový audit: Délka obsahu pro AI

Datum: 17. 9. 2026

Posouzen celý `src/content/articles/delka-obsahu-pro-ai.mdx`, včetně frontmatteru a textů komponent. Postup podle `Content Workflow Codex.md` a skillu `cestina-audit`. Samostatný soubor `tone-of-voice.md` nebyl nalezen; tonalita ověřena proti dokumentu uvedenému ve workflow: `marketing/05-messaging-a-tonalita.md`. Slovník `JAZYK_SLOVNIK.md` prohledán cíleně.

## Výsledek

**0 zásadních a 2 drobné nálezy.** Text jinak odpovídá věcnému vzdělávacímu hlasu webu, vysvětluje statistiku na srozumitelném příkladu a nesklouzává k marketingové vatě. Zavedené odborné výrazy a vlastní názvy nejsou hlášeny jako vady. Kontrolu faktů tento report nenahrazuje.

### J1 — Nepřirozená vazba „článek má kde zkracovat“

- **Závažnost:** drobný.
- **Místo:** řádek 104.
- **Citace:** „Pokud článek třikrát opakuje obecný úvod o významu čistoty, má kde zkracovat.“
- **Problém:** Podmětem zůstává článek, takže vazba „má kde zkracovat“ z něj dělá toho, kdo provádí redakční úpravu. Smyslem je, že opakující se pasáže lze zkrátit.
- **Náhrada v kontextu:** „Pokud článek třikrát opakuje obecný úvod o významu čistoty, je co zkrátit.“
- **Triáž:** opravit. Nezavádět regex: správnost vazby závisí na podmětu a okolní větě.

### J2 — Abstraktní „samostatná srozumitelnost úseků“

- **Závažnost:** drobný.
- **Místo:** řádek 114.
- **Citace:** „Se samostatnou srozumitelností úseků pomůže pasážová optimalizace obsahu.“
- **Problém:** Přívlastek „samostatná“ se vztahuje ke srozumitelnosti, ačkoli zamýšlený význam je, že jednotlivé úseky mají být srozumitelné i samy o sobě. Jmenná konstrukce tento význam zbytečně zamlžuje.
- **Náhrada v kontextu:** „Aby jednotlivé úseky dávaly smysl i samy o sobě, využijte [pasážovou optimalizaci obsahu](/blog/pasazova-optimalizace-obsahu/).“
- **Triáž:** opravit. Nezavádět regex: nejde o zakázaný výraz, ale o konkrétní vztah přívlastku a podstatného jména.

## Ponechané výrazy a hranice auditu

- „Korelace“, „medián“, „jmenovatel“ a „redakční kvóta“ jsou v tomto článku přiměřené odborné výrazy; význam je vysvětlen nebo plyne z bezprostředního kontextu.
- Názvy AI Overviews, ChatGPT, Perplexity, Ahrefs, AirOps a LumenGEO jsou vlastní názvy.
- „Povrch“ a „nevhodný povrch“ v příkladu s čističem označují fyzický materiál. Nejde o kalk anglického označení rozhraní. Předběžné mechanické nálezy na těchto místech nejsou vadou článku; zpřesnění pravidla řeší hlavní agent.
- Článek ani slovník nebyly tímto auditorem změněny. Mechanický průchod C6 provádí hlavní agent po zapracování nálezů.
