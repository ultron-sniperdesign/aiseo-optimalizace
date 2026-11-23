# Audit kola 2 (jazyk, struktura + kontrola vypořádání) — blok oprav „CTA Packu slibuje obsah, který Pack nemá“ (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit2.md` (auditor-system + osa jazyk
> a struktura), Codex v limitu do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Podklady ve složce úkolu
> `Dokumenty/CODEX/z-clauda/2026-11-23-audit2-blok-cta-packu/` (23 článků po kole 1). Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Výsledek: 0 BLOCKER, 8 WARNING, 12 TIP. Kolo 1 je vypořádané a v žádném z 23 souborů nezůstal zbytek opravené vady. Před publikací je potřeba opravit osm vad jazyka a navazování v nových větách (W1–W8). Texty odkazů, ceny, název Packu i jeho skloňování sedí všude.

---

**[WARNING] 1: youtube-pro-ai-viditelnost.mdx ř. 171, vazbu rozbila oprava**
Citace: „…obsahuje strukturu obsahu a šablony krátkých odpovědí pro sedm typů stránek, která pomáhá AI obsah lépe pochopit.“
Proč: Vztažné „která“ (jednotné číslo) se váže ke vzdálenému „strukturu“ a mezi nimi stojí množné „šablony … typů stránek“. Ve starém znění („strukturu obsahu a přímých odpovědí, která“) vazba držela, vložená část ji rozbila. Navíc v jedné větě stojí „obsahuje strukturu obsahu … obsah“.
Nové znění (mění se jen věta o Packu, otázka a audit zůstávají):
```
[AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframy a šablony krátkých odpovědí pro sedm typů stránek; jejich struktura pomáhá AI lépe pochopit obsah.
```

**[WARNING] 2: ceske-nazvy-ai-funkci-google.mdx ř. 136, nová otázka**
Citace: „**Potřebujete, aby texty webu psalo víc lidí podle stejné předlohy?**“
Proč: Věta se nejdřív čte jako potřeba mít víc autorů. Smysl je opačný: autorů už je víc a chybí jim společná předloha.
Nové znění (jen otázka):
```
**Píše texty webu víc lidí a potřebujete, aby se drželi stejné předlohy?**
```

**[WARNING] 3: test-viditelnosti-v-ai.mdx ř. 258**
Citace: „**Víte po testu, co na webu chybí?** Pokud chybí některý ze sedmi základních typů stránek nebo krátké odpovědi na nich, doplníte je podle …: wireframy, šablony textů a ukázky strukturovaných dat pro sedm typů stránek.“
Proč: „chybí“ stojí dvakrát za sebou a „sedm typů stránek“ dvakrát v jedné větě. „Doplníte je“ (množné číslo) nesedí na „některý“ (jednotné číslo). Omezení z kola 1 na sedm základních typů nové znění zachovává.
Nové znění (otázka a věta o auditu zůstávají):
```
**Víte po testu, co na webu chybí?** Stránku některého ze sedmi základních typů nebo krátké odpovědi na ní doplníte podle [AI SEO Wireframe Packu](/pack/) za 1 490 Kč včetně DPH, který ke každému z těch typů obsahuje wireframe, šablony textů a ukázky strukturovaných dat.
```

**[WARNING] 4: person-data-pro-autora.mdx ř. 195, nová otázka**
Citace: „**Chcete po autorovi připravit i zbytek webu?**“
Proč: „Po autorovi“ je nepřirozená elipsa, čte se i jako „převzít po autorovi“ nebo „uklidit po autorovi“. Spojení „připravit autora“ česky nedává smysl. Zbytek řádku je v pořádku, včetně odkazu zpět na příklad v článku.
Nové znění (jen otázka):
```
**Chcete kromě dat o autorovi připravit i zbytek webu?**
```

**[WARNING] 5: filtry-faceted-navigace-eshopu.mdx ř. 159, otázka a odpověď k sobě nesedí**
Citace: „**Nevíte, kolik adres váš e-shop robotům nabízí a kolik z nich k něčemu je?** [AI SEO Wireframe Pack](/pack/) … obsahuje strukturu kategoriální stránky s filtry i produktové stránky; co má být odkaz a co jen ovládací prvek, rozebírá tento článek.“
Proč: Na diagnostickou otázku odpovídá jako první Pack, který počet adres nezjistí. Nová věta to sama potvrzuje tím, že odkazuje zpět na článek. Na otázku odpovídá až audit. Článek navíc všude píše „kategorie“ (ř. 44–117) a „kategoriální stránka“ stojí jen tady.
Nové znění (celý řádek; věta o auditu zůstává beze změny, jen se přesouvá hned za otázku):
```
**Nevíte, kolik adres váš e-shop robotům nabízí a kolik z nich k něčemu je?** Pokud chcete stav svého webu posoudit zvenčí, [Audit AI viditelnosti](/audit/) za 3 600 Kč bez DPH projde robots.txt, parametrické adresy i sitemapu a ukáže, kde se procházení tříští. Kdo chce stránky kategorií a produktů stavět podle hotové předlohy, najde jejich strukturu včetně výpisu s filtry v [AI SEO Wireframe Packu](/pack/) za 1 490 Kč včetně DPH; co má být odkaz a co jen ovládací prvek, rozebírá tento článek.
```
Pokud se pořadí měnit nemá, stačí na původní místo dát poslední větu návrhu.

**[WARNING] 6: gsc-ai-segmenty-mereni.mdx ř. 239, otázka nenavazuje na článek**
Citace: „**Chcete mít stránky, ze kterých může AI odpovídat?** Postavíte je podle [AI SEO Wireframe Packu](/pack/) …“
Proč: Článek i zbytek odstavce (Monitoring, Audit) jsou o měření, otázka bez přechodu skočí ke stavbě stránek. Spojení „odpovídat ze stránek“ drhne, AI ze stránek čerpá.
Nové znění (otázka a věta o Packu; Monitoring a Audit zůstávají):
```
**Chcete vedle měření připravit i stránky, ze kterých může AI čerpat odpovědi?** Postavíte je podle [AI SEO Wireframe Packu](/pack/) za 1 490 Kč včetně DPH: wireframy, šablony textů a ukázky strukturovaných dat pro sedm typů stránek.
```

**[WARNING] 7: ai-seo-wordpress.mdx ř. 196, kalk a dvojznačná vazba**
Citace: „…pro sedm typů stránek a krok-za-krokem návod, jak je aplikovat na libovolný redakční systém včetně WordPressu.“
Proč: „Krok-za-krokem návod“ je kalk z anglického step-by-step guide. Web jinde píše jen „krok za krokem“, tentýž článek tak má i nadpis na ř. 86. „Aplikovat na redakční systém“ je kalk z apply to. Dvojí „a“ navíc dovoluje číst „pro sedm typů stránek a [pro] návod“.
Nové znění (tučný úvod a věta o auditu zůstávají):
```
**Pokud chcete stránky webu stavět podle hotové předlohy**, [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframy, šablony textů a ukázky strukturovaných dat pro sedm typů stránek. Přiložený návod ukazuje, jak je krok za krokem použít v libovolném redakčním systému včetně WordPressu.
```

**[WARNING] 8: aeo-geo-je-porad-seo.mdx ř. 176 a produktove-stranky-pro-ai.mdx ř. 189, „anti-pattern“**
Citace: „…ukázky strukturovaných dat a anti-pattern checklist.“ / „…vzory Product a Offer strukturovaných dat a anti-pattern checklistem.“
Proč: Vývojářský žargon bez vysvětlení, který blok na blogu nově zavádí. Jediný další výskyt v repu (`geo-optimalizace` ř. 183) má vysvětlení v závorce. Ani `pack.ts` ř. 349 ho neuvádí bez vysvětlení („čemu se vyhnout u každého typu stránky“). Tón webu žargon bez vysvětlení nepřipouští, stejně jako u slova „framework“.
Nové znění, aeo-geo-je-porad-seo ř. 176 (konec věty o Packu):
```
…, který obsahuje wireframy a šablony textů pro sedm typů stránek, ukázky strukturovaných dat a checklist nejčastějších chyb.
```
Nové znění, produktove-stranky-pro-ai ř. 189 (konec věty o Packu):
```
…, vzory Product a Offer strukturovaných dat a checklistem nejčastějších chyb.
```

**[TIP] 9: ai-generovany-obsah-viditelnost.mdx ř. 153**
Citace: „Pokud chcete rovnou strukturu stránek, [AI SEO Wireframe Pack](/pack/) … dává návrhy sedmi typů stránek…“
Proč: „Rovnou strukturu“ jde číst i jako přídavné jméno („rovná, plochá struktura“). „Dává návrhy“ je kostrbaté.
```
Pokud chcete začít hotovou strukturou, [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje návrhy sedmi typů stránek včetně blogového článku s krátkou odpovědí a informacemi o autorovi.
```

**[TIP] 10: autorsky-profil-pro-ai.mdx ř. 203**
Citace: „**Pokud chcete mít informace o autorovi správně v každém článku**, … šablonu blogového článku s informacemi o autorovi, šablony textů … doplníte podle tohoto článku.“
Proč: „Informace o autorovi“ stojí dvakrát, „šablonu … šablony“ hned za sebou a „článek“ třikrát ve dvou významech (článek čtenáře a tento článek).
```
**Pokud chcete mít autora správně uvedeného v každém článku**, [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframe blogového článku s informacemi o autorovi, šablony textů a ukázky strukturovaných dat (mimo jiné Article a Organization); Person data se sameAs a samostatnou autorskou stránku doplníte podle tohoto návodu.
```

**[TIP] 11: stredni-cast-trychtyre-ai.mdx ř. 146**
Citace: „…a dalších typů stránek se strukturou, která pomáhá AI lépe pochopit obsah stránky.“
Proč: „Se strukturou“ visí za „dalších typů stránek“, jako by strukturu měly jen ony. „Stránka“ se opakuje třikrát.
```
Pokud chcete začít sami, [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframy produktové a prodejní stránky, blogového článku a dalších typů stránek; jejich struktura pomáhá AI lépe pochopit obsah.
```

**[TIP] 12: originalni-data-pro-ai.mdx ř. 197**
Citace: „…obsahuje šablonu blogového článku s krátkou odpovědí, šablony textů…“
Proč: „šablonu … šablony“ hned za sebou.
```
[AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframe blogového článku s krátkou odpovědí, šablony textů a ukázky strukturovaných dat (mimo jiné Article).
```

**[TIP] 13: jak-ai-cituje-zdroje.mdx ř. 209**
Citace: „…tedy tou částí univerzálního základu, kterou máte na vlastním webu…“
Proč: „Tou částí“ tvrdí, že na vlastním webu jsou jen struktura a strukturovaná data. Seznam v samotném článku (ř. 124–128) ale na web řadí i „Kvalitní faktický obsah“ a „Aktuálnost“.
```
Pokud chcete začít strukturou stránek a strukturovanými daty, tedy dvěma složkami univerzálního základu, které řešíte přímo na vlastním webu, [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframy, šablony textů a ukázky strukturovaných dat pro sedm typů stránek.
```

**[TIP] 14: lighthouse-ai-check.mdx ř. 232**
Citace: „**Chcete po technických opravách srovnat i obsah a strukturu hlavních typů stránek?**“
Proč: „Srovnat obsah a strukturu“ jde číst i jako „porovnat obsah se strukturou“.
```
**Chcete po technických opravách upravit i obsah a strukturu hlavních typů stránek?**
```

**[TIP] 15: query-fan-out-ai-mode.mdx ř. 194 a rag-ai-vyhledavani.mdx ř. 162**
Citace: „…šablony textů pro sedm typů stránek včetně vzorů krátkých odpovědí.“
Proč: „Včetně vzorů“ visí za „typů stránek“, přitom patří k šablonám textů. Nové znění platí pro obě místa:
```
Pokud chcete začít sami, [AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje pro sedm typů stránek wireframy a šablony textů včetně vzorů krátkých odpovědí.
```

**[TIP] 16: znacka-na-wikipedii-pro-ai.mdx ř. 203**
Citace: „…ukázky strukturovaných dat včetně Organization pro sedm typů stránek.“
Proč: Čte se to jako „Organization pro sedm typů stránek“.
```
[AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje pro sedm typů stránek wireframy, šablony textů a ukázky strukturovaných dat včetně Organization.
```

**[TIP] 17: imageobject-strukturovana-data.mdx ř. 216**
Citace: „…(Product, Article a další; ImageObject doplníte podle tohoto článku) najdete v…“
Proč: Mezi podmětem a slovesem stojí v závorce celá samostatná věta.
```
Hotové vzory sedmi typů stránek včetně ukázek strukturovaných dat (Product, Article a další) najdete v **[AI SEO Wireframe Packu](/pack/)** — PDF návodu za **1 490 Kč včetně DPH**. ImageObject k nim doplníte podle tohoto článku.
```

**[TIP] 18: linkedin-pro-ai-citace.mdx ř. 188**
Citace: „…obsahuje strukturu obsahu a šablony krátkých odpovědí…“
Proč: „Obsahuje strukturu obsahu“ opakuje tentýž kořen a neříká, co to konkrétně je (jsou to wireframy).
```
[AI SEO Wireframe Pack](/pack/) za 1 490 Kč včetně DPH obsahuje wireframy a šablony krátkých odpovědí pro sedm typů stránek.
```

**[TIP] 19 (mimo blok): produktove-stranky-pro-ai.mdx ř. 189**
Ve starém textu téže věty stojí „s wireframe rozvržením“ a „vzory Product a Offer strukturovaných dat“, tedy anglický přívlastek a anglický slovosled. Je to stejná třída jako pravidlo ⚠️ `\bwireframe \w+ (šablon\w+|sad\w+)` ve slovníku. Při opravě W8 se dá vyřešit najednou:
```
…obsahuje samostatnou kapitolu k produktové stránce s wireframem, vzory strukturovaných dat Product a Offer a checklistem nejčastějších chyb.
```

**[TIP] 20 (mimo text článků): zaznam-a-vyporadani.md, tabulka „Opravená místa“**
Řádek `lighthouse-ai-check` má ve sloupci „Je“ pořád „opravy promítnout do šablon celého webu“, tedy znění, které kolo 1 zamítlo jako BLOCKER. Řádek `ai-seo-wordpress` má staré „návod nasazení i na WordPressu“. Před commitem a zápisem na board je potřeba je srovnat s textem.

---

**V pořádku**
- Ve všech 23 místech sedí název „AI SEO Wireframe Pack“ i tvar „Packu“, cena 1 490 Kč včetně DPH a v textu odkazu ani v tučné otázce cena není. Nové věty nemají uvozovky. Slovník hlídaných výrazů (276 pravidel) v nich nenašel nic.
- Dobře navazují ai-citace-reddit („…vlastním obsahu“ → „nejdřív posílit vlastní web“), lighthouse (otázka navazuje na „obsahovou strategii“ ze shrnutí), znacka (kritéria v článku → audit „situaci posoudit profesionálně“), originalni-data, llms-txt, informacni, query-fan-out a rag.
- Struktura: blok nemění nadpisy, krátké odpovědi ani FAQ. Tučné úvody nesou pointu, výjimkou jsou W2, W4 a W6.

**Stav vypořádání kola 1**
Každý řádek „Zapracováno“ jsem ověřil v `clanky/`. Opravená formulace nikde nezůstala: každý článek zmiňuje Pack jen jednou a hledání zbytků opravených formulací vrátilo jen vlastní obsah článků (hledal jsem „dobře čte“, „pasážovou strukturou“, „checklist polí“, glosář, „autorského profilu“, checklist měření, sadu dotazů a llms.txt, robots.txt nebo WooCommerce u Packu).
- 1 lighthouse ř. 232: sedí (jazyk viz T14).
- 2 person-data ř. 195: věcně sedí, jazyk otázky viz W4.
- 3 pravidlo bloku: zpřísnění sedí. Všech 8 míst plus imageobject je opraveno (jazyk viz W1, W5, W8, T9, T15, T17, T18). Rychlá kontrola ostatních 61 CTA Packu v repu (hledání typických výrazů) jinou obsahovou vadu nenašla.
- 4 wordpress ř. 196: sedí, jazyk viz W7. Předání nesouladu v `pack.ts` adminovi na boardu zatím není (poslední záznam je run 4, refresh seznam-cz), je potřeba ho doplnit při uzávěru runu.
- 5 autorsky-profil ř. 203: sedí (T10).
- 6 jak-ai-cituje ř. 209: sedí, přesnost „tou částí“ viz T13.
- 7 test ř. 258: sedí, jazyk viz W3.
- 8 stredni ř. 146 a originalni ř. 197: sedí, obrat „AI dobře čte“ v 23 článcích už není.
- Nezapracováno 8 (část): důvod obstojí. Tvrzení o účinku je jiná třída vady než popis obsahu Packu a ve 23 článcích už nezůstalo. V repu ale zbývá jediný výskyt, `src/content/articles/share-of-model-metrika.mdx` ř. 176 („dává strukturu stránek, kterou AI dobře čte“), a v `blogger/REFRESH_QUEUE.md` zapsaný není. Je potřeba ho do fronty zapsat.
