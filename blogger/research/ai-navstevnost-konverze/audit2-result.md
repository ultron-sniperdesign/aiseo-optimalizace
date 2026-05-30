## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu pomohly, ale článek má pořád několik zásadních problémů: hlavně nedoložené silné claimy o konverzích AI návštěv, velmi konkrétní tvrzení o novém GA4 kanálu bez citace a několik míst, kde se vrací anglicismus „AI traffic“ nebo tvrdší formulace než ve frontmatteru.

---

## Nálezy

### [BLOCKER] Nedoložené tvrzení o GA4 „AI Assistant channel“ k 13. 5. 2026

> „Google **13. 5. 2026** přidal do výchozí skupiny kanálů Google Analytics 4 (Default Channel Group) nový kanál **AI Assistant**. Funguje automaticky pro všechny GA4 účty, nemusíte ho zapínat“

Toto je velmi konkrétní produktové tvrzení: datum, název kanálu, rozsah „pro všechny GA4 účty“ a automatická dostupnost. V článku není žádný odkaz na oficiální changelog / dokumentaci Google Analytics.

**Návrh opravy:**

- Buď doplnit zdroj přímo k tvrzení: oficiální Google Analytics release notes / dokumentace k Default Channel Group.
- Nebo formulaci změkčit:

> „Podle dokumentace Google Analytics z května 2026 začal GA4 rozpoznávat část návštěv z AI asistentů v rámci výchozí skupiny kanálů. Dostupnost a přesné zařazení si ověřte ve svém účtu v reportu Akvizice → Kanály.“

Pokud zdroj neexistuje nebo není veřejný, tuto sekci nepouštět v takto jisté podobě.

---

### [BLOCKER] Titulek H2 pořád tvrdí víc než zbytek článku

> „## AI návštěvníci konvertují líp — když je vůbec naměříte“

Po opravách se v textu používá opatrnější „často konvertují lépe“, ale hlavní H2 stále zní kategoricky. To je overclaim.

**Návrh opravy:**

> „## AI návštěvníci často konvertují líp — pokud je správně naměříte“

Nebo ještě bezpečněji:

> „## AI návštěvnost může mít vyšší konverzní hodnotu — pokud ji správně měříte“

---

### [BLOCKER] Nedoložené claimy o výrazně vyšších konverzích

> „Veřejné analýzy z let 2025–2026 uvádějí u AI návštěv výrazně vyšší konverzní poměry než u klasického organiku“

> „podle dostupných analýz konvertují výrazně líp než klasický organik“

> „Podle dostupných analýz z let 2025–2026 ano — uváděné rozsahy konverzních poměrů u AI návštěvníků se pohybují výrazně nad běžnou úrovní…“

Problém není v samotné hypotéze, ale ve slovním spojení „výrazně vyšší“ bez uvedení konkrétní analýzy, metodiky nebo rozsahu. Článek se tváří analyticky, ale nedává čtenáři možnost ověřit zdroj.

**Návrh opravy:**

Buď doplnit konkrétní zdroje a čísla:

> „Například analýza [zdroj] z [měsíc/rok] uvádí u vzorku [typ webů] konverzní poměr AI referral návštěv v rozsahu X–Y %, zatímco organické vyhledávání mělo Z %. Výsledek ale nelze brát jako univerzální benchmark.“

Nebo claim změkčit:

> „Dostupné veřejné analýzy z let 2025–2026 naznačují, že AI návštěvy mohou u části webů konvertovat lépe než klasické organické vyhledávání. Rozdíly ale závisí na oboru, typu konverze a způsobu měření.“

---

### [WARNING] Frontmatter `stats` obsahuje tvrdší formulaci než článek

> `label: "podle dostupných analýz konvertují výrazně líp než klasický organik"`

Tady se vrací silný claim „výrazně líp“. Navíc „klasický organik“ je interní marketingový slang, ne ideální pro vzdělávací článek.

**Návrh opravy:**

> `label: "podle dostupných analýz mohou u části webů konvertovat lépe než klasické organické vyhledávání"`

---

### [WARNING] „AI traffic“ se v článku pořád objevuje

> „Analýzy AI trafficu uvádějí…“

> „Když budete AI traffic hodnotit jen podle objemu…“

> „AI traffic tak nezůstane podceněný…“

> „Ignorovat skrytý AI traffic v direct“

V zadání bylo uvedeno, že anglicismus „AI traffic“ byl řešen, ale v textu zůstal. Není v seznamu explicitně zakázaných termínů, ale narušuje český, srozumitelný brand voice.

**Návrh opravy:**

- „AI traffic“ → „AI návštěvnost“
- „AI traffic v direct“ → „AI návštěvy v přímé návštěvnosti“
- „analýzy AI trafficu“ → „analýzy AI návštěvnosti“

---

### [WARNING] „Organic Search report“ je zbytečný anglicismus

> „pokud se díváte jen na klasický „Organic Search" report“

Používá se anglický název bez potřeby. Pro český článek stačí český popis a případně anglický název v závorce.

**Návrh opravy:**

> „pokud se díváte jen na report organického vyhledávání („Organic Search“)“

---

### [WARNING] „Direct“ bez českého ukotvení v nadpisech a chybách

> „bobtnající „Direct" může skrývat AI návštěvy“

> „Ignorovat skrytý AI traffic v direct“

V textu je už vysvětleno „přímá návštěvnost“, ale později se vrací anglický shorthand. Pro cílový vzdělávací obsah je lepší držet český termín.

**Návrh opravy:**

> „rostoucí přímá návštěvnost může skrývat AI návštěvy“

A v chybě:

> `title="Ignorovat AI návštěvy schované v přímé návštěvnosti"`

---

### [WARNING] „Značná část AI návštěv“ je pořád nedoložená

> „Analýzy AI trafficu uvádějí, že tímhle způsobem se ztratí značná část AI návštěv“

> „Podle analýz AI trafficu se značná část AI návštěv objevuje v GA4 jako přímá návštěvnost“

„Značná část“ je silné kvantitativní tvrzení, ale bez čísla nebo odkazu. Navíc návštěvy se „neztratí“ úplně — v GA4 často existují, jen jsou špatně přiřazené.

**Návrh opravy:**

> „Některé analýzy AI návštěvnosti upozorňují, že část návštěv z AI nástrojů se v GA4 může objevit jako přímá návštěvnost. Nejde tedy o ztrátu návštěvy, ale o ztrátu přesného zdroje.“

Pokud máte číslo, doplnit rozsah a zdroj.

---

### [WARNING] Tvrzení o UTM je příliš jisté

> „UTM přežijí AI přechod lépe než přirozený referrer.“

> „UTM značky … kde si je AI může vzít“

UTM parametry pomohou jen u odkazů, které se skutečně publikují a následně se kliknou v nezměněné podobě. AI nástroje mohou odkazy přepisovat, zkracovat, necitovat nebo parametry odstranit. Současná formulace zní jistěji, než je bezpečné.

**Návrh opravy:**

> „UTM parametry mohou pomoci u odkazů, které sami publikujete mimo web a které uživatel klikne v původní podobě. Nevyřeší ale všechny AI přechody — některé nástroje mohou odkazy upravit nebo předat návštěvu bez úplného zdroje.“

---

### [WARNING] Segmentace podle „chat“ je příliš široká a může dělat falešné shody

> „referrery obsahující domény typu chat, perplexity nebo claude“

Řetězec „chat“ je moc obecný. Může zachytit nerelevantní zdroje. Pro návod v GA4 je to nepřesné.

**Návrh opravy:**

Použít konkrétnější příklady domén a formulovat je jako příklady, ne definitivní seznam:

> „referrery z konkrétních domén AI nástrojů, například chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com nebo další domény podle toho, co se reálně objevuje ve vašich datech.“

---

### [WARNING] FAQ odpověď začíná příliš kategoricky „ano“

> „Podle dostupných analýz z let 2025–2026 ano…“

Otázka zní „Konvertují AI návštěvníci opravdu líp než organické?“ a odpověď začíná „ano“. To je silnější než zbytek článku a bez zdrojů problematické.

**Návrh opravy:**

> „U části webů ano, ale není to univerzální pravidlo. Veřejné analýzy z let 2025–2026 naznačují vyšší konverzní poměr u některých AI návštěv, konkrétní výsledek ale závisí na oboru, typu konverze, zdroji návštěvy a metodice měření.“

---

### [WARNING] Tvrzení o pořadí platforem Claude / ChatGPT / Perplexity / Gemini je nedoložené

> „Claude a ChatGPT bývají v analýzách nejvýš, Perplexity a Gemini níž“

To je konkrétní srovnání platforem. Bez zdroje působí jako nepodložené zobecnění.

**Návrh opravy:**

Buď doplnit zdroj, nebo odstranit pořadí:

> „Rozdíly mezi ChatGPT, Claude, Perplexity a Gemini se v analýzách objevují, ale pořadí se liší podle oboru a vzorku.“

---

### [WARNING] „Funguje automaticky pro všechny GA4 účty“ může být příliš absolutní

> „Funguje automaticky pro všechny GA4 účty.“

I pokud je nový kanál skutečný, „pro všechny účty“ je riskantní absolutní formulace. V GA4 mohou hrát roli vlastní kanálové skupiny, zpoždění v datech, prahování, consent mode, nízký objem nebo vlastnosti účtu.

**Návrh opravy:**

> „Ve výchozí skupině kanálů by se měl objevit automaticky u účtů, kde GA4 dokáže takové návštěvy rozpoznat. Pokud používáte vlastní kanálové skupiny nebo máte nízký objem dat, ověřte si zobrazení přímo ve svých reportech.“

---

### [WARNING] „Nezavést AI Assistant channel report“ je nepřesné

> `title="Nezavést AI Assistant channel report"`

V článku tvrdíte, že kanál je nativní a není potřeba ho zapínat. „Nezavést“ proto nedává smysl.

**Návrh opravy:**

> `title="Nezkontrolovat AI Assistant v reportech GA4"`

A fix:

> `fix="Zkontrolujte Akvizice → Kanály a ověřte, zda se AI návštěvy zobrazují."`

---

### [WARNING] „AI hodnotu nevidíte“ je příliš široké

> „pokud se díváte jen na klasický „Organic Search" report, AI hodnotu nevidíte“

Nevidíte ji v daném reportu jako AI zdroj, ale část hodnoty může být v directu, referralech nebo novém AI kanálu. Lepší je přesnější formulace.

**Návrh opravy:**

> „pokud se díváte jen na report organického vyhledávání, AI návštěvy neuvidíte jako samostatný zdroj. Část může být v přímé návštěvnosti, část v referralech a část v AI Assistant kanálu.“

---

### [TIP] Meta description je na hraně délky a obsahuje slang „organik“

> `description: "AI návštěvníci často konvertují lépe než klasický organik, ale část návštěv bez referrer hlavičky spadne v GA4 do přímé návštěvnosti. Jak je měřit v roce 2026."`

Délka je ještě zhruba v limitu, ale „klasický organik“ je hovorový SEO slang.

**Návrh opravy:**

> „AI návštěvy mohou konvertovat lépe než organické vyhledávání, ale část GA4 zařadí jako přímou návštěvnost. Jak je měřit v roce 2026.“

---

### [TIP] Prvních ~100 slov funguje dobře, ale H2 před nimi ruší citovatelnost

První odstavec je po opravách relativně dobrý: začíná definicí, vysvětluje AI referral i problém s referrerem. Pro citovatelnost je ale nadpis pořád prodejně-kategorický.

**Návrh opravy:**

Upravit H2 podle výše uvedeného:

> „AI návštěvnost může mít vyšší hodnotu — pokud ji správně měříte“

Tím bude první blok konzistentní s bezpečným claimem.

---

### [TIP] Interní odkazy a CTA jsou v pořádku

Pozitivní nález: článek má relevantní interní odkazy na související témata:

> `/blog/zero-click-ai/`, `/blog/mereni-seo-vykonu-2026/`, `/blog/ai-seo-nastroje/`, `/blog/ai-brand-mentions/`, `/blog/e-e-a-t-pro-ai/`, `/blog/seo-pro-ai/`

CTA je konkrétní a vede na produkty:

> „AI SEO audit za 9 990 Kč“  
> „AI SEO Wireframe Pack za 1 490 Kč“

To odpovídá zadání. Jen bych zvážil kratší a akčnější poslední odstavec, ale není to blokující problém.