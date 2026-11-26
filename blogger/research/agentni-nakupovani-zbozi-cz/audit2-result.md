# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit druhého kola k **26. 11. 2026**: **3× [BLOCKER], 4× [WARNING], 1× [TIP]**. Blockery jsou nedotažená vypořádání nálezů č. 1, 2 a 7 z prvního kola. Ostatní vyřešené věcné nálezy znovu neotevírám.

Posuzuji `clanek.mdx` po opravách, včetně frontmatteru, FAQ, nadpisů, tabulky a všech textových vlastností `CompareTable`, `Checklist` a `Insight`. Čísla řádků níže odkazují na tuto dodanou verzi. Návrhy jsou jednotlivé náhrady, které se doplňují; článek jsem neupravoval. Web jsem nepoužil.

## 1. [BLOCKER] Podmínky nákupu znovu chybějí v samostatné description a FAQ

**Citace — `description`, ř. 4:**

> „Seznam podle zprávy z 1. 9. 2026 testuje na Zboží.cz nákup na dvě kliknutí přes UCP. Kdo se zapojuje, co si e-shop připravit a co zatím nevíme.“

**Další výskyt — první odpověď FAQ, ř. 25:**

> „Přihlášený uživatel podle Seznamu nemusí opakovaně zadávat údaje ani řešit dopravu a nákup dokončí na dvě kliknutí.“

**Problém:** Nález č. 1 prvního kola výslovně požadoval v samostatné description přihlášení uživatele a omezení na zapojené e-shopy. Vypořádání jej označuje ✅, ale obě podmínky v description stále chybějí. FAQ přihlášení obsahuje, omezení na zapojený obchod nikoli. Odpověď tak může znít jako vlastnost nákupu u libovolného e-shopu na Zboží.cz. Podmínky v jiném odstavci samostatný popisek ani samostatně převzatou odpověď neopravují. Nejde o nový požadavek na ověřování faktů: podmínky jsou v nálezu č. 1 i v tabulce `research.md`.

**Přesná náhrada description — 137 znaků:**

```yaml
description: "Seznam podle zprávy z 1. 9. 2026 začal na Zboží.cz testovat nákup na dvě kliknutí přes UCP pro přihlášené uživatele u zapojených e-shopů."
```

**Přesná náhrada první odpovědi FAQ:**

> Agentní nakupování na Zboží.cz je funkce, jejíž test popsalo MediaGuru 1. 9. 2026. Podle Seznamu přihlášený uživatel u zapojeného e-shopu dokončí nákup na dvě kliknutí bez opakovaného zadávání údajů a řešení dopravy. Řešení využívá otevřený protokol UCP; transakce probíhá u obchodníka.

**Související nedotažená formulace — `Checklist`, ř. 89:**

> „Pro běžné zobrazení nabídek uvádí návod k Zboží.cz registraci, odpovídající feed a kredit. Podmínky samotného testu agentního nákupu to ale nejsou.“

Rozlišení běžné inzerce od pravidel přijetí je správný záměr. Poslední věta ovšem vylučuje, že by se požadavky mohly překrývat. Podklady pouze nedokládají úplné podmínky agentního testu. **Celé `desc` nahraďte:**

> Pro běžné zobrazení nabídek na Zboží.cz návod uvádí registraci, odpovídající feed a kredit. Nejde o doložený úplný seznam podmínek přijetí do agentního testu.

## 2. [BLOCKER] Omezení závěru o Upgates se ztratilo v H2

**Citace — ř. 50:**

> „Kdo se může zapojit — Shopify v testu, Shoptet v pilotu, u Upgates bez zmínky“

**Problém:** Nález č. 2 prvního kola je ✅ a tělo i FAQ již správně mluví o oznámeních verzí 37 a 37.1. Samostatný nadpis ale neříká, kde zmínka chybí. První audit výslovně požadoval omezit i zkratky o Upgates na prověřená oznámení. Čtenář skenující nadpisy toto omezení nedostane. Navíc „kdo se může zapojit“ slibuje pravidla přijetí, zatímco sekce dokládá oznámené účastníky a přiznává neznámé podmínky.

**Přesná náhrada celého H2:**

```mdx
## <span class="hl">Agentní nákup podle oznámení</span> — <strong>Shopify v testu, Shoptet v pilotu; Upgates bez zmínky o UCP v oznámeních 37 a 37.1</strong>
```

Opravené formulace v tabulce na ř. 58 a ve FAQ nepovažuji za další věcnou vadu. Zde jde o zbytek téhož nálezu v nadpisu.

## 3. [BLOCKER] Neznámý termín je v úvodu stále vydáván za nezveřejněný; Shoptet se místy vrací k neověřenému přítomnému stavu

**Citace — ř. 40:**

> „…aniž by čekal na termín, který nikdo nezveřejnil.“

**Další výskyty — ř. 5 a 40:**

> „Shoptet řešení pilotuje…“

**`Checklist`, ř. 91:**

> „Shopify je v oznámeném testu, Shoptet pilotuje…“

**Shrnutí, ř. 103:**

> „Shoptet pilotuje bez spolehlivého termínu pro všechny…“

**Problém:** Jde o zbytek nálezu č. 7 prvního kola, také označeného ✅. Opravený `Insight` správně říká, že spolehlivý termín nelze určit z konkrétní zprávy. Úvod ale nadále zobecňuje na „nikdo nezveřejnil“. Rovněž zářijová atribuce Seznamu sama nedokládá dnešní stav Shoptetu; samostatná krátká odpověď připojuje „Shoptet pilotuje“ bez říjnové atribuce. Omezení provozního stavu v úvodu platformové tabulky se na tyto oddělené výstupy nepřenáší.

**Přesná náhrada celého `answer` — 52 slov, definice na začátku:**

```yaml
answer: "Agentní nakupování na Zboží.cz je funkce popsaná v oznámeném testu Seznamu. Podle MediaGuru z 1. 9. 2026 umožňuje přihlášeným uživatelům u zapojených e-shopů dokončit nákup na dvě kliknutí bez opakovaného zadávání údajů a řešení dopravy. Využívá protokol UCP; transakce podle Seznamu probíhá u obchodníka. Úplné podmínky přijetí dalších e-shopů použité zdroje neuvádějí."
```

Náhrada zároveň rozděluje původní dlouhé souvětí s čárkou mezi „řešení dopravy“ a „transakce“. Přehled platforem zůstává v úvodu a vlastní sekci; krátká odpověď nemusí obsahovat celý článek.

**Přesná náhrada celého úvodního odstavce na ř. 40 — 82 slov:**

```mdx
**Agentní nakupování na Zboží.cz je funkce, jejíž test popsalo MediaGuru 1. 9. 2026. Podle Seznamu přihlášený uživatel u zapojeného e-shopu dokončí nákup na dvě kliknutí a transakce probíhá u obchodníka. Účastnily se například některé e-shopy na Shopify; úplné podmínky přijetí použité zdroje neuvádějí. Shoptet podle MediaGuru z 20. 10. 2026 oznámil pilot s prvními obchodníky. Oznámení Upgates 37 a 37.1 UCP nezmiňují.** Článek shrnuje oznámení známá k 26. 11. 2026 a přípravu e-shopu. Spolehlivý termín širšího zapojení z použitých zdrojů určit nelze.
```

**Přesná náhrada položky `Checklist` na ř. 91:**

```mdx
{ title: "Ověřit možnost přijetí do testu", desc: "U své platformy si ověřte, zda a za jakých podmínek může váš e-shop vstoupit do agentního testu. U vlastního řešení se ptejte Seznamu také na technické požadavky. Samotné použití Shopify ani podpora UCP přijetí nezaručují." },
```

Tím položka skutečně zadává úkol provozovateli e-shopu a znovu neopakuje historický přehled platforem.

**Přesná náhrada odstavce shrnutí na ř. 103:**

> Pro e-shop jsou teď užitečné tři kroky: zkontrolovat běžné nabídky na Zboží.cz, sladit cenu, dostupnost a dopravu s webem a vyžádat si od platformy podmínky agentního testu. Samotné Shopify ani podpora UCP přijetí nezaručují; spolehlivý termín širšího zapojení z použitých zdrojů určit nelze.

## 4. [WARNING] Další tři FAQ odpovědi nejsou plně sebestačné

**Citace — ř. 27:**

> „Shoptet podle zprávy z 20. 10. 2026 oznámil pilot s prvními obchodníky.“

Bez otázky není v této větě řečeno, pilot čeho Shoptet oznámil. **Celou odpověď nahraďte:**

> Shoptet podle MediaGuru z 20. 10. 2026 oznámil pilot agentního nakupování přes UCP s prvními obchodníky. Možnost a podmínky přijetí dalšího e-shopu zpráva neuvádí. Pro širší spuštění uvádí současně „v řádu týdnů“ od říjnového vystoupení a rok 2027; spolehlivý termín z ní určit nelze.

**Citace — ř. 29:**

> „Oznámení aktualizace 37 z 11. 11. 2026 ani 37.1 z 24. 11. 2026 agentní nakupování ani protokol UCP nezmiňují. To není důkaz, že by podpora nikdy nebyla…“

Bez otázky chybí název Upgates. „Že by podpora nikdy nebyla“ je navíc těžkopádná konstrukce, která míchá neexistenci podpory nyní s celou její historií. Věcnou opatrnost této opravy přijímám; upravuji její srozumitelnost. **Celou odpověď nahraďte:**

> Oznámení Upgates verze 37 z 11. 11. 2026 ani 37.1 z 24. 11. 2026 agentní nákup na Zboží.cz ani protokol UCP nezmiňují. Z absence zmínky nelze určit, zda Upgates tuto funkci podporuje. Možnost zapojení svého e-shopu si ověřte přímo u platformy.

Podrobnosti o OpenAI Ads, Pixelu a MCP zůstávají v platformové tabulce a těle článku. Tato odpověď má řešit možnost agentního nákupu.

**Citace — ř. 31:**

> „Obchodník. Seznam uvádí, že transakce probíhá u obchodníka…“

Samostatné „Obchodník“ není plnohodnotná odpověď bez otázky. **Celou odpověď nahraďte:**

> Prodávajícím při popsaném agentním nákupu na Zboží.cz je obchodník. Podle Seznamu u něj probíhá transakce a zachovává nad ní kontrolu. Specifikace UCP počítá s jeho finanční odpovědností a vlastnictvím objednávky. Úplný popis předávaných zákaznických a objednávkových údajů ani podmínek předávání jsem v použitých zdrojích nenašel; před zapojením si je vyžádejte od Seznamu a své platformy.

První FAQ řeší nález 1 tohoto auditu. Poslední FAQ o UCP a ACP již samostatný smysl dává.

## 5. [WARNING] Nejtěžší řádek CompareTable má dlouhé buňky a přítomný název pro historická oznámení

**Citace — ř. 76:**

> `label: "Kde se používá"`
>
> „Google v lednovém oznámení popsal vlastní implementaci pro režim AI a Gemini: vyžaduje…“
>
> „Původní Instant Checkout z 29. 9. 2025: uživatelé ChatGPT Plus, Pro a Free v USA… Dnešní dostupnost tím ověřená není.“

**Problém:** Podmínky doplněné prvním kolem jsou potřebné a věcnou opravu přijímám. Pro rychlé porovnání ale čtenář musí v obou buňkách projít souvětí i časové výhrady. Název řádku navíc slibuje současné použití, kdežto obsah porovnává různě stará oznámení. Jde o čitelnost a pojmenování tabulky, nikoli nové otevření vyřešených nálezů o dostupnosti Googlu a Instant Checkoutu. Podmínky nelze kvůli zkrácení přesunout jen do vzdálené poznámky.

**Přesná náhrada celého řádku, všechny podmínky zůstávají v buňkách:**

```mdx
{ icon: "🛒", label: "Oznámené použití a podmínky", left: "Zboží.cz: oznámený test. Google, leden 2026: režim AI a Gemini; aktivní účet Merchant Center, produkty způsobilé pro nákup, formulář zájmu a integrace UCP podle pokynů Googlu.", right: "Instant Checkout při spuštění 29. 9. 2025: ChatGPT Plus, Pro a Free v USA; podporované produkty zapojených amerických prodejců Etsy; jedna položka. Dostupnost k 26. 11. 2026 neověřena." },
```

Výčet REST, MCP, A2A a Embedded Protocol v dalším řádku nejsou zakázané anglicismy; jde o technické názvy. Problémem je jejich čtenářský kontext, který řeší následující nález.

## 6. [WARNING] Technický odstavec směšuje podklad pro vývojáře s výkladem pro provozovatele e-shopu

**Citace — ř. 82:**

> „…obchod pak vybere verzi protokolu a aktivní schopnosti z průniku toho, co podporují obě strany. Schopnosti UCP se mapují na nástroje protokolu MCP…“

**Problém:** Odstavec má 97 slov při počítání podle mezer, několik abstraktních „schopností“, technické mapování a dosud nevysvětlené MCP. Technické zkratky se objevují už ve FAQ a platformové tabulce; čtenář se až později dozvídá alespoň část souvislosti. Provozovatel e-shopu potřebuje rozeznat, co má předat dodavateli. Nejde o zákaz běžné oborové mluvy ani o znovuotevření opravené volitelnosti MCP serveru.

**Před první tabulku na ř. 54 vložte krátké vysvětlení:**

> MCP (Model Context Protocol) je protokol, přes který může AI asistent používat nástroje. Zmínka o MCP serveru pro správu e-shopu sama nedokládá podporu agentního nákupu přes UCP.

Toto rozlišení je již v podkladech prvního kola a v řádku Upgates v `research.md`; nejde o nový požadavek na zdroj.

**Odstavec na ř. 82 nahraďte následujícím blokem; H3 je prostý text:**

```mdx
### Technický podklad pro dodavatele e-shopu

Obchod podle specifikace UCP zveřejňuje profil na adrese `/.well-known/ucp`. Profil uvádí podporované služby a funkce, například pokladnu, slevy a doručení. Obchod vybírá verzi protokolu a funkce, které podporují obě strany.

Funkce UCP se mapují na nástroje MCP. Obchod může svou implementaci UCP zpřístupnit přes MCP server; tuto cestu pak může použít AI asistent s odpovídajícím přístupem. Samotná podpora UCP neznamená, že obchod takový server nabízí.

Jak se od září 2025 podle zpravodajství měnil nákup přímo v ChatGPT, rozebírá [článek o nakupování přes AI](/blog/nakupovani-pres-ai/).
```

## 7. [WARNING] Opakované metodické výhrady zpomalují výklad

**Citace — ř. 42:**

> „Vycházím ze zpráv o testu Seznamu … ze specifikace UCP a z oznámení Googlu, OpenAI a Stripe, stav k 26. 11. 2026. Agentní nákup na Zboží.cz jsem nezkoušel…“

**Ř. 48 a 52:**

> „…rozhraní jsem neověřoval.“
>
> „…jejich zářijový a říjnový provozní stav jsem nezávisle neověřoval.“

**Ř. 107:** Znovu úplný seznam stejných podkladů a „Agentní nákup na Zboží.cz jsem nezkoušel.“

**Problém:** Výhrady jsou oprávněné. Zbytečně se však opakuje seznam zdrojů a obecná informace o neověřeném rozhraní. Hlavní odpověď, metodika, první vysvětlující sekce a uvedení tabulky tak opakovaně přerušují výklad. Konkrétní neznámé podmínky, autorizace a předávání dat musejí u příslušných tvrzení zůstat; zkrátit lze opakovanou metodiku.

**Přesná náhrada ř. 42:**

> Podklady zachycují oznámení dostupná k 26. 11. 2026. Agentní nákup na Zboží.cz jsem nezkoušel a nápovědu Seznamu pro obchodníky k této funkci jsem nenašel; popis testu vychází ze zpráv MediaGuru.

**Přesná náhrada celého ř. 48:**

> Přesnou roli AI ani postup autorizace nákupu použité zdroje nepopisují.

**Přesná náhrada ř. 52:**

> Tabulka shrnuje oznámení doložená k 26. 11. 2026, nikoli nezávisle ověřený provozní stav.

Podrobný seznam pramenů v závěrečné poznámce na ř. 107 ponechte. Její opakovanou samostatnou větu „Agentní nákup na Zboží.cz jsem nezkoušel.“ vypusťte bez náhrady; stejné přiznání zůstává výslovně na začátku. Atribuce a podmínky uvnitř krátké odpovědi, FAQ a srovnávací tabulky se tím neruší.

## 8. [TIP] U dvou protokolů opravte jednotné číslo v nadpisu

**Citace — ř. 65:**

> „Co je UCP a ACP — dva protokoly pro nákup přes agenty“

**Přesná náhrada:**

```mdx
## Co jsou <span class="hl">UCP a ACP</span> — <strong>dva protokoly pro nákup přes agenty</strong>
```

## Co je v pořádku

- **SEO limity:** `seoTitle` má **52 znaků**, začíná hlavním klíčovým spojením; `description` má **143 znaků**. Délka description tedy není vada, opravují se její podmínky. Délku `title` nehodnotím, protože `seoTitle` existuje. Slug `agentni-nakupovani-zbozi-cz` odpovídá tématu.
- **Krátká odpověď:** původní `answer` má **59 slov** při počítání podle mezer, začíná definicí a pojmenovává Zboží.cz. Limit 40–60 slov splňuje. Návrh v nálezu 3 má 52 slov a napravuje rozsah tvrzení i dlouhou větu. První odstavec těla již nabízí samostatnou odpověď; náhrada tuto vlastnost zachovává.
- **Nadpisy:** všech **šest H2** obsahuje `<span class="hl">` i `<strong>`. Hierarchie není přeskákaná. V dodané verzi žádné H3 nejsou; navržený technický H3 neobsahuje HTML ani zvýraznění.
- **Odkazy:** interní odkazy na běžné nabídky na Zboží.cz, nakupování přes AI, reklamu v AI a produkt `/audit/` mají konkrétní souvislost s textem. Popisky neobsahují cenu. Nepožaduji další obecný odkaz na pilíř jen kvůli počtu odkazů.
- **Slovník a typografie:** dodaný slovník v74 jsem přečetl a dostupný mechanický checker proti němu vrátil **0 nálezů**; načetl 276 pravidel. Následovala ruční kontrola textu i vlastností komponent. Přesné zakázané výrazy ze zadání ani sliby garantované pozice se v článku nevyskytují. Citované výrazy „v řádu týdnů“ a „v příštím roce“ mají české uvozovky. Rovné uvozovky YAML a JSX jsou syntaxe, nikoli typografická chyba. Feed není třeba plošně zakazovat jako anglicismus.
- **CTA:** název **Audit AI viditelnosti**, cena **3 600 Kč bez DPH**, odkaz `/audit/`, rozsah kontroly, prioritizace úprav, výstup do pěti pracovních dní **od úhrady** a schůzka **30–60 minut** odpovídají `zdroje/audit.ts`. Závěr směřuje na konkrétní produkt a cenu uvádí mimo popisek odkazu. CTA není potřeba měnit ani znovu hlásit jako věcnou vadu.

## Stav vypořádání prvního kola

V `vyporadani.md` jsou všechny položky označené ✅; žádný nález není odmítnutý ani označený za nezapracovaný. **Z 11 číslovaných nálezů je 8 vypořádaných a 3 jen částečně.** Následující přehled je kontrola vypořádání, nikoli druhá sada nálezů.

| Nález kola 1 | Kontrola dodané opravy |
|---|---|
| 1 — UCP / Shopify jako vstupenka do testu | **Částečně.** Hlavní úvod a tabulka mluví o některých zapojených obchodech; otevřené přijetí neslibují. Description ale vynechává přihlášení i zapojený obchod, první FAQ druhou podmínku; checklist příliš kategoricky odděluje podmínky inzerce. Viz nález 1 tohoto auditu. |
| 2 — „Upgates zatím ne“ | **Částečně.** Tělo, tabulka a FAQ omezují závěr na oznámení. H2 zůstává u neukotveného „bez zmínky“. Viz nález 2. |
| 3 — neověřená objednávka a autorizace | **Vypořádáno.** Shoptet v tabulce uvádí oznámený záměr „má umožnit“; checklist nedeklaruje známou reakci na nesoulad ani původ předvyplnění. Autorizace je přiznaná neznámá. |
| 4 — podmínky Instant Checkoutu | **Vypořádáno.** CompareTable obsahuje tarify, USA, podporované produkty amerických prodejců Etsy, jednu položku a výhradu k dnešní dostupnosti; FAQ říká „představily 29. 9. 2025“. Nález 5 tohoto kola řeší pouze čitelnost. |
| 5 — UCP × MCP | **Vypořádáno.** Ř. 82 výslovně podmiňuje cestu existencí zpřístupněného MCP serveru a odpovídajícím přístupem asistenta. Automatické zpřístupnění ze samotného UCP neslibuje. |
| 6 — podmínky Googlu | **Vypořádáno.** CompareTable obsahuje Merchant Center, způsobilé produkty, formulář zájmu a integraci podle pokynů Googlu; v závěrečných pramenech je doplněn Google Developers Blog. |
| 7 — datum zprávy, provozní stav a termín Shoptetu | **Částečně.** Insight ukotvuje rok 2027 i říjnové vystoupení a tabulka přiznává neověřený stav. Úvod ponechává „nikdo nezveřejnil“; answer, úvod, checklist a shrnutí mají neukotvené „Shoptet pilotuje“. Viz nález 3. |
| 8 — reklamy v ChatGPT | **Vypořádáno.** Původní silnější formulace nezůstala. Ř. 95 uvádí OpenAI Ads a Pixel i neupřesněné podmínky spuštění české kampaně. |
| 9 — Universal Cart jen v USA | **Vypořádáno.** H2 je omezené na říjnové oznámení; odstavec připisuje zprávu TechCrunch a nedostupnost v Česku netvrdí. |
| 10 — chybějící popis dat jako údajná neveřejnost | **Vypořádáno.** FAQ a checklist mluví o tom, co se nepodařilo najít v použitých zdrojích; `research.md` používá „nezjištěno“. Původní globální soud o všech veřejných zdrojích nezůstal. |
| 11 — Embedded Protocol a discovery | **Vypořádáno.** CompareTable doplňuje Embedded Protocol; odstavec popisuje výběr ze společně podporovaných funkcí a netvrdí nové načítání před každým požadavkem. Výslovná zmínka o cache není nutná k odstranění původní vady. |
| Doplnění tabulky podmínek v `research.md` | **Potvrzeno.** Obsahuje rozlišení inzerce a pilotu, omezení závěru o Upgates, volitelnost MCP serveru, podmínky Googlu a historického Instant Checkoutu i omezení závěru o dostupnosti Universal Cart. |

**Nejasnosti a meze:** Vypořádání odkazuje na `audit1-result.md`, ale dodaný výsledek prvního kola se jmenuje `audit1-vysledek.md`; pro kontrolu jsem použil tento skutečně dostupný soubor. Komponenty a projektový build ve složce nejsou, proto hodnotím obsah a MDX strukturu, nikoli vykreslený vzhled či funkčnost cílových URL. Kontrolu CTA lze uzavřít podle dodaného `zdroje/audit.ts`; podklady ostatních produktů nejsou pro tento článek potřeba. Externí API jsem nevolal a slovník ani auditovaný text jsem neměnil.
