# Audit kola 1 (fakta) — blok oprav „CTA Packu slibuje obsah, který Pack nemá“ (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit1.md` (auditor-system + osa fakta),
> Codex v limitu do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Ověřoval proti `pack.ts` a `audit.ts` ve složce
> úkolu `Dokumenty/CODEX/z-clauda/2026-11-23-audit1-blok-cta-packu/`. Čísla řádků míří na verzi po první opravě.
> Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Seznamy toho, co Pack obsahuje, sedí ve všech 14 změněných místech na `pack.ts`. Publikaci blokují dvě úvodní otázky, které Packu dál přisuzují něco, co v jeho výčtu není.

---

**[BLOCKER] 1 — lighthouse-ai-check.mdx ř. 232 (nová úvodní otázka)**
Citace: „**Chcete opravy promítnout do šablon celého webu?**“
Proč: „opravy“ jsou v článku opravy neúspěšných kontrol Agentic Browsing, tedy llms.txt, accessibility tree (names and labels, ARIA), CLS a WebMCP (ř. 133–135, 175–178). „Šablony“ jsou šablony stránek webu (ř. 193: „Neúspěšné kontroly se mezi šablonami často liší“). V pack.ts není llms.txt, accessibility ani CLS ani jednou. Otázka tak potichu vrací vadu starého znění („checklist pro Lighthouse…, vzor llms.txt, seznam kontrol pro accessibility tree“). Výčet za otázkou je správný, chyba je v otázce.
Návrh:
```
**Chcete po technických opravách srovnat i obsah a strukturu hlavních typů stránek?** [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframy s anotacemi, šablony textů a ukázky strukturovaných dat pro sedm typů stránek; samotné kontroly Agentic Browsing opravíte podle postupu v tomto článku.
```

**[BLOCKER] 2 — person-data-pro-autora.mdx ř. 195 (otázka nad CTA zůstala, kritérium 3)**
Citace: „**Chcete mít autory i celý web popsané tak, aby je AI rozpoznala?**“
Proč: článek „popsat autora tak, aby ho AI rozpoznala“ soustavně definuje jako Person data se sameAs a @id (ř. 4, 21, 43, 186). Otázka tím Packu slibuje Person, tedy strukturovaná data mimo výčet: pack.ts Person neuvádí ani jednou a pravidlo bloku (c) ho výslovně řadí mimo výčet. Nová odpověď je pravdivá, jenže otázka nad ní zůstala ze starého CTA („včetně autorského profilu“). Na rozdíl od autorsky-profil tu chybí odkaz zpět na článek.
Návrh (věta o auditu beze změny):
```
**Chcete po autorovi připravit i zbytek webu?** [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje návrhy sedmi typů stránek včetně blogového článku s informacemi o autorovi a ukázky strukturovaných dat pro firmu (Organization); Person data autora doplníte podle příkladu v tomto článku.
```

**[WARNING] 3 — hranice pravidla bloku („zůstává podrobnější popis součástí sedmi typů a formulace o použití“)**
První polovina pravidla obstojí: typ stránky, výstup a strukturovaná data mimo výčet se opravují. Část „zůstává“ ale bez dvou podmínek propouští stejnou vadu:
- (a) Podrobnost musí jít dohledat v pack.ts (pageTypes, sampleSteps, deliverables). Nestačí, že k typu stránky „patří“. Například „pasážová struktura“, kterou záznam uvádí jako povolenou (ř. 30), v pack.ts vůbec není.
- (b) Formulace o použití nesmí stát pod otázkou, která slibuje kanál nebo výsledek, který Pack neřeší.

Věty mimo 14 článků (v repu `src/content/articles/`), které blok ponechal a které podle toho neprojdou:
- `produktove-stranky-pro-ai.mdx ř. 189` „i checklistem polí, na kterých u AI záleží“: checklist mimo výčet, tedy přímo kategorie (b) pravidla. Návrh: „…vzory Product a Offer strukturovaných dat a anti-pattern checklistem.“
- `query-fan-out-ai-mode.mdx ř. 194` a `rag-ai-vyhledavani.mdx ř. 162` „wireframy stránek s pasážovou strukturou“. Návrh: „wireframy a šablony textů pro sedm typů stránek včetně šablon krátkých odpovědí“.
- `filtry-faceted-navigace-eshopu.mdx ř. 159` „včetně toho, co má být odkaz a co jen ovládací prvek“. Návrh: „…obsahuje strukturu kategoriální stránky s filtry i produktové stránky; co má být odkaz a co jen ovládací prvek, rozebírá tento článek.“
- `ai-generovany-obsah-viditelnost.mdx ř. 153` „včetně místa pro vlastní data a autora“. Návrh: „včetně blogového článku s krátkou odpovědí a informacemi o autorovi“.
- `linkedin-pro-ai-citace.mdx ř. 188` „…ale i z LinkedInu a dalších kanálů?“. Návrh: „**Chcete mít na webu obsah s krátkými odpověďmi, ze kterého vyjdete i v LinkedIn článcích?**“
- `youtube-pro-ai-viditelnost.mdx ř. 171` „…ale i z videa?“. Návrh: „**Chcete mít na webu obsah s přímými odpověďmi, ze kterého vyjdete i v popisech videí a na stránkách s přepisem?**“
- `llms-txt-navod.mdx ř. 142` „Pokud chcete postupovat sami podle hotové předlohy“: v návodu k llms.txt se to čte jako šablona llms.txt. Návrh: „Pokud chcete sami upravit obsah a strukturu stránek podle hotové předlohy, …“

Doporučení: doplnit do pravidla obě podmínky a tyto věty opravit ve stejném bloku, protože jde o tutéž vadu. Jinak je zapsat do REFRESH_QUEUE.md.

**[TIP] 4 — ai-seo-wordpress.mdx ř. 196 „a návod, jak je nasadit i na WordPressu“**
Tvrzení stojí jen na deliverables (pack.ts ř. 348: „podle CMS (Upgates, Shoptet, WordPress, custom)“). FAQ téže stránky (ř. 98) přitom říká: „Specifické instrukce pro Upgates a Shoptet jsou navíc“. Podobně Organization (person-data, znacka) stojí jen na deliverables ř. 347 a FAQ ř. 94 ho nejmenuje. Znění, které platí v obou čteních: „…pro sedm typů stránek a krok-za-krokem návod, jak je aplikovat na libovolný redakční systém včetně WordPressu.“ Rozpor v pack.ts je potřeba předat adminovi přes board, blogger soubor needituje. Kdyby se deliverables při úpravě zkrátily, přestanou platit tři CTA.

**[TIP] 5 — autorsky-profil-pro-ai.mdx ř. 203 „a ukázky strukturovaných dat“**
V článku o Person a sameAs si čtenář obecné „ukázky strukturovaných dat“ snadno vyloží jako vzor Person se sameAs. Ten byl ve starém znění a výčet ho nemá. Návrh: „…šablony textů a ukázky strukturovaných dat (mimo jiné Article a Organization); Person data se sameAs a samostatnou autorskou stránku doplníte podle tohoto článku.“

**[TIP] 6 — jak-ai-cituje-zdroje.mdx ř. 209 „Pokud chcete začít univerzálním základem“**
Článek definuje univerzální základ pěti body (ř. 123–129), mezi nimi autoritu značky a autora (zmínky v důvěryhodných zdrojích) a aktuálnost. Pack pokrývá strukturu a strukturovaná data. Návrh: „Pokud chcete začít strukturou stránek a strukturovanými daty, tedy tou částí univerzálního základu, kterou máte na vlastním webu, …“

**[TIP] 7 — test-viditelnosti-v-ai.mdx ř. 258 „Chybějící stránky a odpovědi doplníte podle…“**
Mezi typy testovacích dotazů jsou i srovnávací (ř. 95), a srovnávací stránka mezi sedmi typy není (pravidlo bloku (a)). Návrh: „Pokud chybí některý ze sedmi základních typů stránek nebo krátké odpovědi na nich, doplníte je podle [AI SEO Wireframe Packu](/pack/) za 1 490 Kč včetně DPH: …“

**[TIP] 8 — stredni-cast-trychtyre-ai.mdx ř. 146 „se strukturou, kterou AI dobře čte“ a originalni-data-pro-ai.mdx ř. 197 „na stránce, kterou AI dobře přečte“**
Obojí tvrdí účinek bez dokladu. pack.ts sám říká jen „pomáhá vyhledávačům a AI lépe pochopit obsah stránky“ (ř. 241). Návrhy: „…se strukturou, která pomáhá AI lépe pochopit obsah stránky.“ a „…zveřejnit na stránce se strukturou, která pomáhá AI obsah lépe pochopit?“ U originalni-data článek navíc doporučuje Dataset (ř. 110, 153), proto upřesnit na „ukázky strukturovaných dat (mimo jiné Article)“.

---

**Co je v pořádku**
- Seznamy obsahu ve všech 14 místech sedí na pack.ts. Nikde není typ stránky mimo sedm, výstup mimo deliverables ani strukturovaná data mimo Product, FAQPage, Article, BreadcrumbList, LocalBusiness a Organization.
- Název „AI SEO Wireframe Pack“ (i ve tvaru „Packu“) a cena 1 490 Kč včetně DPH sedí ve všech 14 místech. Cena není v textu odkazu ani v nadpisu.
- Úplnost ve 14 článcích: každý obsahuje jedinou zmínku Packu, a to opravené CTA. Frontmatter (description, answer, FAQ), tělo článku ani nepojmenované „naše PDF / šablony“ Pack nepopisují. Jediný zbytek je otázka v person-data (nález 2).
- Dobré přesměrování na článek je v autorsky-profil („samostatnou autorskou stránku postavíte podle tohoto článku“) a ve znacka-na-wikipedii („posuďte podle kritérií v tomto článku“). Nové otázky v gsc, test, ceske-nazvy, znacka, originalni a wordpress slibují jen to, co Pack obsahuje.
- Neposunuté `updated` obstojí. Odpovídá precedentu 4a20a8d (popis Auditu v CTA ve 24 článcích, bez posunu, ověřeno v gitu) i fddc6dc (posun jen u článku, kterému se změnil obsah). Blok ab5e138 datum posunul, protože měnil text v těle článků, ne CTA.
- Osa 5: změněná místa neobsahují žádná tvrzení vázaná na čas. Tabulka podmínek ani research.md k bloku nejsou, ale změněná místa netvrdí nic o cizí platformě ani o rozhraní, takže tu nechybí.
