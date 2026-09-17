# Závěrečný audit C5 — Rebranding a AI

**Datum:** 17. 9. 2026  
**Auditovaný soubor:** `src/content/articles/rebranding-a-ai.mdx`  
**Konečný verdikt:** **PUBLIKOVAT**

Článek po cílených opravách splnil všechny publikační podmínky závěrečného auditu. Všech sedm nálezů slepé fáze C5, všech šest původních faktických témat a všech dvacet jazykových nálezů je uzavřených. Jediný zbývající výskyt `homepage` je výslovně povolené CTA, kde označuje kanonický typ stránky v produktu. Podrobnou auditní stopu a průběžné verdikty zachovávají dodatky C5c a C5d na konci dokumentu.

## Fáze 1 — slepý audit článku

V této fázi byly čteny pouze `blogger/auditor-system.md` a tehdejší verze článku. Fakta byla nezávisle ověřena v primárních zdrojích Googlu a OpenAI. Výchozí verdikt byl **OPRAVIT PŘED PUBLIKACÍ**.

| # | Závažnost | Původní nález | Stav ve fázi 2 | Ověření |
|---:|---|---|---|---|
| 1 | BLOCKER | Samostatná FAQ odpověď o přejmenování Firemního profilu vynechávala zvláštní způsobilost firmy s více pobočkami. | **Vyřešeno** | FAQ nyní uvádí více poboček, větev „ani jednu podmínku“, zavření původního profilu a doporučení obrátit se při nejasnosti na podporu. Odpovídá [pravidlům Googlu](https://support.google.com/business/answer/3038177?hl=en#zippy=%2Crebranding). |
| 2 | BLOCKER | Pokyn k nástroji Změna adresy nepožadoval ověřit všechny varianty starého i nového webu a mohl vést k vynechání dosud neověřených variant. | **Vyřešeno** | Článek nyní požaduje ověřit všechny varianty obou webů a podat změnu pro každou variantu staré domény včetně www, dalších subdomén a momentálně nepoužívaných variant. Odpovídá [migračnímu návodu Googlu](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) a [podmínkám nástroje](https://support.google.com/webmasters/answer/9370220?hl=en). |
| 3 | WARNING | Chybělo doporučení Googlu oddělit přesun domény od změny CMS, zásadního redesignu a plošné změny URL. | **Vyřešeno** | Migrační odstavec nově doporučení výslovně uvádí. Zdroj: [Change only one thing at a time](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#general-best-practices-for-site-moves). |
| 4 | WARNING | `seoTitle` měl 41 znaků místo požadovaných 50–60. | **Vyřešeno** | `seoTitle` je nyní shodný s 50znakovým titulkem „Rebranding a AI: propojte starý a nový název firmy“. |
| 5 | WARNING | Pro pravidla Firemního profilu chyběl přímý primární zdroj. | **Vyřešeno** | Tělo odkazuje na pravidla rebrandingu i návod k úpravě profilu. |
| 6 | WARNING | Pro tvrzení o ChatGPT bez vyhledávání a se Search/Deep Research chyběl primární zdroj. | **Vyřešeno** | Tvrzení je zúžené na ChatGPT a odkazuje na [dokumentaci OpenAI](https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth). |
| 7 | TIP | Obecné výskyty „homepage“ měly být nahrazeny českou „úvodní stránkou“; produktový název typu stránky mohl zůstat. | **Částečně vyřešeno** | České znění je na většině míst, ale obecné výskyty zůstaly v tabulce „Homepage, kontakt…“ a ve větě „Bere v úvahu homepage i odkazy na web“. Výskyt v CTA lze ponechat jako kanonický název typu stránky Packu. |

## Fáze 2 — kontrola faktického auditu C2

### 1. Rozdílný význam `alternateName`

**Původní oprava je zapracována, ale výsledek není úplný.** Článek správně rozlišuje, že u `Organization` jde o jiný běžně používaný název organizace a u `WebSite` o náhradní návrh zobrazovaného názvu webu. Správně také varuje, že starou značku v `WebSite.alternateName` Googlu dál nabízí jako kandidáta.

Aktuální dokumentace Googlu však u vlastnosti `Organization.name` současně říká: „Use the same `name` and `alternateName` that you're using for your site name.“ Článek tuto podmínku neuvádí. Samostatná FAQ odpověď tak může čtenáře navést k tomu, aby starý název ponechal pouze v `Organization.alternateName`, i když jej už nechce nabízet v `WebSite.alternateName`. Podrobnosti jsou v novém blockeru níže. Zdroj: [Google Organization structured data, definice `name`](https://developers.google.com/search/docs/appearance/structured-data/organization#structured-data-type-definitions).

### 2. Technické podmínky názvu webu

**Vyřešeno.** Článek uvádí procházetelnou kořenovou úvodní stránku domény nebo subdomény, stejné hodnoty na duplicitních variantách, jeden název pro doménu či subdoménu a nepodporovaný samostatný název podadresáře. Interval dnů až týdnů je správně svázán s novým navštívením a zpracováním stránky Googlem. Zdroj: [technické podmínky názvů webů](https://developers.google.com/search/docs/appearance/site-names#technical-guidelines).

### 3. Přejmenování Firemního profilu

**Vyřešeno.** FAQ i tělo uvádějí zachování vlastních názvů a služeb popsaných v názvu, nezměněnou kategorii, možnou způsobilost firmy s více pobočkami, případné nové ověření i povinný postup u nezpůsobilé změny. Zdroj: [Google Business Profile — Rebranding](https://support.google.com/business/answer/3038177?hl=en#zippy=%2Crebranding).

### 4. Přesměrování oproti 404/410

**Vyřešeno.** Krátká odpověď, HowTo, H2 i tělo rozlišují relevantní náhradu nebo sloučený obsah od obsahu bez náhrady. Nerelevantní hromadné přesměrování na úvodní stránku je správně označeno jako možné riziko měkké chyby 404. Zdroj: [Google — site move with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#start-the-site-move).

### 5. Podmínky nástroje Změna adresy

**Vyřešeno.** Nástroj je zařazen až po zprovoznění přesměrování, text požaduje stejné konto Search Console, ověření všech variant starého i nového webu, podání pro každou variantu staré domény a správně vylučuje změnu cest, HTTP→HTTPS a www↔non-www. Aktuální článek je v tomto bodě úplnější než původní dodatek C5b v `audit-fakta.md`.

### 6. Význam odkazů v AI odpovědích

**Vyřešeno.** Článek popisuje pouze doložené režimy ChatGPT, u jiných služeb připouští odlišný význam odkazů a zobrazený odkaz označuje jen za kandidáta k prověření. Výslovně říká, že samotný odkaz nedokazuje příčinu tvrzení. Zdroj: [OpenAI — Does ChatGPT tell the truth?](https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth).

## Fáze 2 — kontrola 20 jazykových nálezů C3

| # | Předmět nálezu | Stav | Důkaz v aktuálním článku |
|---:|---|---|---|
| 1 | Tykání „Projdi“ | **Vyřešeno** | HowTo používá „Projděte“. |
| 2 | Chybná vazba „data jsou způsob“ | **Vyřešeno** | „jsou nejdůležitějším způsobem“. |
| 3 | Testům byla přisouzena činnost AI | **Vyřešeno** | Záměnu nyní provádějí „AI nástroje při opakovaných testech“. |
| 4 | Abstraktní meta description | **Vyřešeno** | Popis konkrétně říká, že nelze slíbit, kdy se nový název projeví všude. |
| 5 | Nepřirozené „cizí zmínky“ | **Částečně vyřešeno** | V krátké odpovědi je správně „zmínky na jiných webech“, ale název kroku stále zní „Opravte důležité cizí zmínky“. Stejná dříve vytčená formulace tedy v článku zůstala. |
| 6 | Kostrbatá společná lhůta | **Vyřešeno** | Služby přebírají název odděleně a vlastním tempem. |
| 7 | Výplňové „samostatné změny“ | **Vyřešeno** | Text jmenuje web, profily a zmínky na jiných webech. |
| 8 | H2 „zdroj a ozvěny“ | **Vyřešeno** | H2 uvádí vlastní web, profily a jiné weby. |
| 9 | „Nové projití“ | **Vyřešeno** | Google stránku „znovu navštíví a změnu zpracuje“; FAQ je sjednocené. |
| 10 | Nejasné „ji“ a „navždy“ | **Vyřešeno** | Text přímo jmenuje starý název a používá „natrvalo“. |
| 11 | H2 „přidává migraci“ | **Vyřešeno** | H2 používá „stěhujete i web“. |
| 12 | Nejasné „takové cíle“ | **Vyřešeno** | Věta přímo popisuje přesměrování všech starých adres na úvodní stránku. |
| 13 | „Google zpracovává preferenci z homepage“ | **Vyřešeno** | „Při volbě názvu webu Google vychází hlavně z úvodní stránky.“ |
| 14 | Změna „zůstává na profilu“ | **Vyřešeno** | Podmětem je nyní stávající profil, který lze přejmenovat. |
| 15 | Dvojznačné „jeho kritéria“ | **Vyřešeno** | Kritéria jsou rozepsaná a následek je připsán Googlu. |
| 16 | „Přepnutí AI“ a „společná fronta“ | **Vyřešeno** | Jednotlivé služby změnu zpracují vlastním tempem. |
| 17 | „Starší naučené znalosti“ | **Vyřešeno** | ChatGPT vychází z „informací získaných při trénování“. |
| 18 | „Samotný jeden výstup“ | **Vyřešeno** | „Z jediné odpovědi příčinu … neurčíte.“ |
| 19 | „Postupem z článku“ | **Vyřešeno** | „postupujte podle článku“. |
| 20 | Nejasné produktové CTA | **Vyřešeno** | CTA říká, kam prvky umístit, a používá „nezaručí“. |

## Nové a přetrvávající nálezy

### 1. [BLOCKER] Chybí doporučená shoda `Organization.name` / `alternateName` s názvem webu

**Citace článku:** „U `Organization` může `alternateName` označovat jiný běžně používaný název organizace. U `WebSite` jde o náhradní návrh názvu, který může Google zobrazit… Starou značku sem proto uvádějte jen tehdy, když ji chcete dál nabízet jako název webu.“ Obdobné rozlišení je ve FAQ.

**Problém:** Rozlišení významu vlastností je správné, ale chybí další výslovné doporučení Googlu: u `Organization` použít stejné `name` a `alternateName`, jaké web používá pro svůj název. Současný text lze pochopit jako návod ponechat starou značku v `Organization.alternateName`, ale vynechat ji z `WebSite.alternateName`. To je v rozporu s doporučením Googlu pro implementaci těchto dat. Protože jde o vynechanou podmínku cizí platformy, je podle `auditor-system.md` nález blocker.

**Důkaz:** Google u `Organization.alternateName` uvádí „Another common name that your organization goes by“, ale u `Organization.name` zároveň přikazuje konzistenci: „Use the same `name` and `alternateName` that you're using for your site name.“ [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization#structured-data-type-definitions). U `WebSite.alternateName` jde skutečně o náhradní návrh názvu webu, který může Google zvážit: [Google Site names — alternative names](https://developers.google.com/search/docs/appearance/site-names#alternative-names).

**Požadovaná oprava:** Do FAQ i hlavního odstavce doplnit, že Google doporučuje držet `Organization.name` a `Organization.alternateName` shodné s hodnotami použitými pro název webu. Pokud starou značku už nechcete Googlu nabízet jako název webu, článek ji nemá bez vysvětlení doporučovat pouze v `Organization.alternateName`. Viditelná přechodová věta může vztah staré a nové značky vysvětlovat nezávisle na této vlastnosti.

### 2. [WARNING] „Cizí zmínky“ zůstaly v názvu kroku

**Citace:** `title: "Opravte důležité cizí zmínky"`.

**Problém:** Jazykový audit tutéž formulaci označil za nepřirozenou, protože zní, jako by zmínky firmě nepatřily. Oprava proběhla jen v krátké odpovědi. Vypořádání proto není úplné.

**Požadovaná oprava:** Například „Opravte důležité zmínky na jiných webech“.

### 3. [TIP] Dva obecné výskyty „homepage“ stále zůstaly

**Citace:** „Homepage, kontakt, patička, titulky“ a „Bere v úvahu homepage i odkazy na web“.

**Problém:** Vypořádání C5 tvrdí, že obecné výskyty byly změněny na „úvodní stránku“, ale tyto dva nebyly. Výskyt v CTA u seznamu šablon Packu může zůstat jako kanonický název typu stránky.

**Požadovaná oprava:** V obou obecných větách použít „úvodní stránka/úvodní stránku“.

## Kontrola nových vad a publikačních prvků

- `title` i `seoTitle` mají 50 znaků, klíčové slovo je na začátku.
- Meta description má 138 znaků a je konkrétní.
- Krátká odpověď má 57 slov, začíná definicí a obstojí samostatně.
- Prvních přibližně 100 slov těla poskytuje samostatnou odpověď bez prodejní vaty.
- Všech pět H2 obsahuje `<span class="hl">`, `<strong>` i prostý spojovací text a tvoří logickou posloupnost.
- FAQ obsahuje reálné otázky; výjimkou je výše popsaná neúplná podmínka u `alternateName`.
- CTA vede na AI SEO Wireframe Pack za 1 490 Kč, je věcně navázané na strukturu webu a neslibuje výsledek v AI.
- Všech šest importovaných komponent je použito.
- Opravy nezavedly nový slib, garanci ani zakázaný termín z `auditor-system.md`.

## Verdikt před cílenými opravami (historický stav)

**OPRAVIT PŘED PUBLIKACÍ.** Před publikací je nutné odstranit blocker u shody `Organization` a `WebSite` názvů. Současně je vhodné dokončit dvě drobné jazykové opravy, aby skutečný článek odpovídal vypořádání auditů. Po těchto cílených změnách není nutný nový plošný audit; stačí ověřit upravené pasáže proti dvěma uvedeným dokumentům Googlu a znovu zkontrolovat výskyty „cizí zmínky“ a „homepage“.

## Dodatek C5c — cílená kontrola posledních tří oprav

**Datum kontroly:** 17. 9. 2026  
**Výsledek:** dvě opravy obstály, jedna je neúplná.  
**Aktuální verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

1. **FAQ a hlavní odstavec k `Organization` / `WebSite` — obstálo.** FAQ nyní výslovně říká, že Google doporučuje shodné hodnoty `name` a `alternateName` u `Organization` s hodnotami použitými pro název webu. Současně správně varuje před ponecháním starého názvu pouze v `Organization.alternateName`. Hlavní odstavec totéž sděluje přímo a doporučuje historii vysvětlit viditelnou přechodovou větou. Tím je původní blocker odstraněn. Oprava odpovídá [dokumentaci `Organization`](https://developers.google.com/search/docs/appearance/structured-data/organization#structured-data-type-definitions) i [pravidlům pro alternativní názvy webu](https://developers.google.com/search/docs/appearance/site-names#alternative-names).
2. **Název kroku — obstálo.** Krok nyní zní „Opravte důležité zmínky na jiných webech“. Původní nepřirozené „cizí zmínky“ bylo odstraněno.
3. **Výskyty `homepage` — neobstálo úplně.** Běžná věta o zdrojích názvu webu byla opravena na „úvodní stránku“ a výskyt v CTA lze ponechat jako kanonický typ produktu. V porovnávací tabulce však stále zůstává obecný text `left: "Homepage, kontakt, patička, titulky"` na řádku 71 aktuálního článku. Podle zadání je výjimkou pouze CTA, proto tento výskyt musí být změněn například na „Úvodní stránka, kontakt, patička, titulky“.

Verdikt nelze změnit na **PUBLIKOVAT**, dokud nezmizí poslední obecný výskyt `Homepage` mimo CTA. Po této jediné jazykové opravě stačí cíleně ověřit výskyty `homepage`; věcný blocker i formulace kroku jsou uzavřené.

## Dodatek C5d — konečná kontrola výskytů `homepage`

**Datum kontroly:** 17. 9. 2026  
**Rozsah:** pouze aktuální výskyty řetězce `homepage` v `src/content/articles/rebranding-a-ai.mdx`  
**Konečný verdikt:** **PUBLIKOVAT**

Cílené hledání bez rozlišení velikosti písmen našlo jediný výskyt:

> „AI SEO Wireframe Pack za 1 490 Kč obsahuje šablony pro homepage, kontakt, články, produkty a další typy stránek.“

Jde o výslovně povolené CTA, kde `homepage` označuje kanonický typ stránky v produktu. Předchozí obecný výskyt v porovnávací tabulce je opraven na „Úvodní stránka, kontakt, patička, titulky“ a žádný další výskyt `homepage` v článku nezůstal.

Poslední otevřený jazykový bod je tím uzavřen. Dodatky C5c a C5d zachovávají auditní stopu; tento dodatek nahrazuje jejich průběžný verdikt. Článek je podle kontrolovaného rozsahu připraven k publikaci.
