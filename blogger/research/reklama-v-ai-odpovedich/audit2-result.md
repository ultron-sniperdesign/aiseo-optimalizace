# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit druhého kola k **26. 11. 2026**: jazyk, struktura, citovatelnost, SEO, CTA a kontrola vypořádání prvního kola. **4 nálezy [BLOCKER], 6 [WARNING], 2 [TIP].** Blockery níže jsou zbytky nálezů prvního kola, nikoli nové kolo plošného ověřování faktů.

Posouzen celý `clanek.mdx`: frontmatter, FAQ, tělo, tabulka a všechny textové vlastnosti komponent `CompareTable`, `Stepper`, `Insight`, `SourceCard`, včetně obsahu `Do` a `Dont`. Řádky odkazují na současnou auditovanou verzi. Podklady byly pouze čteny, web nebyl použit. Článek se neměnil. Níže uvedené náhrady jsou cílené návrhy, nikoli přepis článku.

## Nálezy

### 1. [BLOCKER] Podmínky publika ChatGPT zůstaly ve FAQ neúplné; samostatná krátká odpověď je také příliš zkracuje

**Citace:** `clanek.mdx:25`: „Zobrazit se může způsobilým uživatelům tarifů Free a Go i nepřihlášeným, ne v tarifech Plus, Pro, Business, Enterprise a Edu.“ `clanek.mdx:5`: „…kde se může zobrazit pod odpovědí v tarifech Free a Go…“ Souvisí s nadpisem `clanek.mdx:60`: „ChatGPT: pod odpovědí, pro tarify Free a Go“.

**Vada:** Nález 3 prvního kola je ve `vyporadani.md:12` označený jako zapracovaný i do FAQ a `answer`. Tělo na ř. 62 je podrobnější, ale samostatná FAQ odpověď dál vypouští regionální podmínku, rozpoznaný věk, dočasné chaty a citlivá témata. Obecné „způsobilým“ tyto podmínky čtenáři nesděluje. Nejde o požadavek vyjmenovat všechny výjimky v každém nadpisu; problém je v samostatně použitelné odpovědi, jejíž výčet podmínek stále není úplný. Podklad: `audit1-vysledek.md:41`, zejména požadavek na FAQ a `answer` na ř. 54–58; tabulka podmínek v `research.md`.

**Přesné nové znění celé odpovědi FAQ 1 na ř. 25:**

> Reklama v ChatGPT je podle OpenAI v Česku dostupná; samoobslužný Ads Manager zde funguje od 31. 8. 2026. Inzerující a platící firma musí sídlit v podporované zemi a reklama, obrázky i cílová stránka splnit zásady OpenAI. Reklamy OpenAI postupně zavádí ve vybraných regionech způsobilým uživatelům tarifů Free a Go a počítá i s nepřihlášenými. Nezobrazuje je v tarifech Plus, Pro, Business, Enterprise a Edu, v bezreklamní variantě Free, v dočasných chatech, u citlivých témat, například osobního a duševního zdraví nebo politiky, ani účtům, které identifikuje jako účty lidí mladších 18 let.

**Přesné nové znění `answer` na ř. 5 — 51 slov:**

> Reklama u AI odpovědí je placené umístění oddělené od samotné odpovědi. Dokumentace ChatGPT a Seznam AI pro Česko k listopadu 2026 popisuje reklamy pod odpovědí, Google v češtině nad Přehledem od AI nebo pod ním. Podmínky zobrazení se liší podle služby. Nákup reklamy podle provozovatelů neovlivňuje obsah odpovědi ani nezajišťuje citaci.

Tato krátká odpověď záměrně nerozepisuje publikum jednotlivých tarifů. Začíná definicí, zachovává atribuci dokumentaci a nemění dostupnost v příslib konkrétního zobrazení. Současný `answer` má **58 slov**, takže délka sama vadou není; slabinou je také vzdálený odkaz „podle nich“ místo pojmenování provozovatelů.

**Přesná náhrada H3 na ř. 60, aby nezamlčoval druhou skupinu publika:**

```md
### ChatGPT: reklamy pro způsobilé Free a Go i nepřihlášené
```

### 2. [BLOCKER] U bezreklamní varianty Free stále chybí dostupnost podle regionu a způsobilosti

**Citace:** `clanek.mdx:62`: „Uživatel tarifu Free může přejít na variantu bez reklam s nižšími limity a bez některých nástrojů; kdo platí Go, musí se kvůli ní vrátit na Free, nebo přejít na Plus či Pro.“

**Vada:** Záměna Free a Go je opravená. Nález 4 prvního kola však obsahoval i podmínku dostupnosti této volby podle regionu a způsobilosti, která ve větě stále není. `vyporadani.md:13` označuje celý nález jako zapracovaný. Přiložená nápověda výslovně říká, že ovládání Ads-Free nemusí být dostupné mimo regiony testu nebo nezpůsobilému uživateli (`zdroje/oai-help-ads.txt:96`, především ř. 99; `audit1-vysledek.md:63`). Jde o zbytek původního nálezu, ne o novou podmínku.

**Přesná náhrada citovaného souvětí:**

> Způsobilý uživatel tarifu Free může v regionech, kde OpenAI reklamy testuje, zvolit variantu bez reklam s nižšími limity a bez některých nástrojů. Uživatel Go se kvůli této variantě musí vrátit na Free, nebo přejít na Plus či Pro.

### 3. [BLOCKER] Omezení reklam Googlu podle funkce a formátu se nepřenesla do všech zkratek

**Citace:** `clanek.mdx:72`: „…jen v angličtině a ve 12 vyjmenovaných zemích… žádná z nich není v EU a u dvou platí jen část formátů.“ `clanek.mdx:58`: „…přímo v Přehledu od AI a v režimu AI jen anglicky ve 12 zemích mimo EU“. `clanek.mdx:29`: „…reklamy přímo v Přehledu od AI a v režimu AI uvádí jen v angličtině ve 12 zemích…“ `clanek.mdx:133`: „Reklama přímo v Přehledu od AI a v režimu AI (12 zemí s reklamou v angličtině)“.

**Vada:** Nález 7 je podle `vyporadani.md:16` vyřešen i v tabulce, FAQ a odrážce. V těchto místech však dál splývá dostupnost obou funkcí a všech formátů. Ani „u dvou platí jen část formátů“ není přesné vypořádání: Indonésie omezuje **funkci** na Přehled od AI, Pákistán **formát** na textové reklamy. V FAQ, tabulce a odrážce navíc z výčtu znovu vzniká pevná hranice 12 zemí, přestože samotný zdroj upozorňuje na možnou neúplnost seznamu. To jsou právě vady popsané v `audit1-vysledek.md:93`; podklad zůstává `zdroje/gads-cs.txt:92` až ř. 97.

**Přesná náhrada prvních čtyř vět odstavce na ř. 72, zbytek odstavce ponechat:**

> [Nápověda Google Ads](https://support.google.com/google-ads/answer/18826097?hl=cs) popisuje reklamy přímo v Přehledu od AI a v režimu AI, označené jako „Sponzorováno“. Uvádí angličtinu a seznam 12 zemí, mezi nimi USA, Kanadu, Austrálii a Indii; žádná z uvedených zemí není v EU. Dostupnost se liší podle funkce a formátu: Indonésie je uvedena pouze pro Přehled od AI, Pákistán pouze pro textové reklamy. Google upozorňuje, že seznam nemusí být úplný. Standardní reklamy se mohou zobrazovat nad Přehledem od AI nebo pod ním ve všech zemích a jazycích, kde je Přehled od AI dostupný, tedy i v Česku.

**Přesná náhrada řádku tabulky na ř. 58:**

```md
| **Google** | v češtině nad Přehledem od AI nebo pod ním; uvnitř AI funkcí nápověda uvádí angličtinu a vybrané trhy mimo EU, s rozdíly podle funkce a formátu; seznam nemusí být úplný | ze stávajících kampaní Google Ads |
```

**Přesná náhrada FAQ 3 na ř. 29:**

> Reklamy přímo v Přehledu od AI a v režimu AI nápověda Google Ads pro češtinu neuvádí. Uvádí angličtinu a 12 zemí mimo EU, přičemž seznam nemusí být úplný. V Indonésii uvádí jen Přehled od AI, v Pákistánu jen textové reklamy. V češtině se standardní reklamy mohou zobrazovat nad Přehledem od AI nebo pod ním.

**Přesná náhrada tučného úvodu odrážky na ř. 133; navazující vysvětlení od AI ponechat:**

> **Reklama uvnitř AI funkcí Googlu (podle nápovědy v angličtině na vybraných trzích; dostupnost se liší podle funkce a formátu):**

### 4. [BLOCKER] V závěrečném shrnutí zůstalo umístění reklam bez atribuce dokumentaci

**Citace:** `clanek.mdx:162`: „Ze tří srovnávaných služeb prodávají placené místo u AI odpovědi v Česku ChatGPT a Seznam AI, Google v češtině jen reklamu nad Přehledem od AI nebo pod ním.“

**Vada:** Nález 10 prvního kola požadoval opravit také závěr (`audit1-vysledek.md:128`, ř. 139). `vyporadani.md:19` ho označuje za zapracovaný, ale shrnutí stále není připsané dokumentaci. Následující „podle provozovatelů“ patří až k neovlivňování obsahu odpovědi. Neodstraňuje samostatné tvrzení předchozí věty. V úvodu, tabulce i `CompareTable` už atribuce je; jejich opravu zde znovu nehlásím. Výhrada autora v patičce také byla doplněna správně, ale nenahrazuje atribuci ve shrnutí, které se čte samostatně.

**Přesná náhrada prvních dvou vět na ř. 162; pokyn k měření ponechat:**

> Podle dokumentace tří srovnávaných služeb nabízejí k listopadu 2026 reklamu u AI odpovědi pro Česko ChatGPT a Seznam AI; Google pro češtinu popisuje standardní reklamy nad Přehledem od AI nebo pod ním. Nákup reklamy podle provozovatelů neovlivňuje obsah samotné odpovědi ani nezajišťuje citaci.

### 5. [WARNING] Tři další FAQ odpovědi potřebují otázku nad sebou

**Citace:** `clanek.mdx:27`: „Podle OpenAI ne…“; `clanek.mdx:33`: „Podle dokumentace OpenAI, Googlu ani Seznamu ne…“; `clanek.mdx:35`: „Zatím ne.“

**Vada:** Tyto začátky nepomáhají při vyjmutí odpovědi z FAQ. Čtenář se až dál dozví, co se popírá. FAQ 1 a 3 řeší nálezy 1 a 3 výše; FAQ 4 na ř. 31 už předmět sama pojmenovává a nepotřebuje další přepis. V první odpovědi je navíc kostrbaté „odpověď tvarovat, řadit ani měnit“; stejná vazba zůstává v těle na ř. 76.

**Přesné nové znění FAQ 2 na ř. 27:**

> Reklamy v ChatGPT podle OpenAI neovlivňují odpovědi jazykového modelu. Fungují na oddělených systémech a inzerent nemůže určovat podobu, řazení ani obsah odpovědí. Nápověda uvádí, že reklama je označená a oddělená od odpovědi. Tvrzení o neovlivňování odpovědí se zvenku ověřit nedá.

**Přesné nové znění FAQ 5 na ř. 33:**

> Za citaci v nezávislé odpovědi ChatGPT, Googlu nebo Seznam AI podle dokumentace těchto služeb zaplatit nelze. Provozovatelé prodávají označené reklamní místo u odpovědi a uvádějí, že reklama její obsah neovlivňuje. Citace závisí na tom, zda služba váš web najde a zda obsah odpovídá na otázku.

**Přesné nové znění FAQ 6 na ř. 35:**

> Výkon inzerátů Skliku v Seznam AI podle nápovědy samostatně neuvidíte. Inzeráty z vyhledávacích a Chytrých kampaní se počítají do statistik kampaně a sestavy. Nabídky Seznam Nákupů patří do kategorie „Produkt – doporučené nabídky“; samostatné oddělení Seznam AI v této kategorii nápověda neuvádí. Na plochy v Seznam AI nejde zvlášť cílit ani je vyloučit.

**Přesná náhrada druhé věty odstavce na ř. 76:**

> OpenAI píše, že reklamy a jazykový model fungují na oddělených systémech a inzerent nemůže určovat podobu, řazení ani obsah odpovědí.

### 6. [WARNING] Některé H2 při skenování slibují jiný obsah nebo silnější výsledek

**Citace:** `clanek.mdx:98`: „Jak oddělit … placené a organické … UTM a kanál AI Assistant“; `clanek.mdx:122`: „Co se testuje … mimo Česko — a co zatím nejde“; `clanek.mdx:137`: „Co z toho plyne pro … rozpočet a web — dva oddělené řádky“.

**Vada:** Sekce o měření vysvětluje podmíněný postup a jeho meze, nikoli spolehlivé oddělení všeho pomocí UTM. Pod nadpisem o testech mimo Česko jsou také historické české zkušenosti s produktovými reklamami a české ceny za proklik. „Rozpočet a web“ zase nepojmenovává obě investice, které má čtenář oddělit. Jde o problém názvů sekcí, nikoli o nový faktický nález. Formát `<span class="hl">` a `<strong>` zachovat.

**Přesné nové H2 ve stejném pořadí:**

```md
## <span class="hl">Měření návštěv z AI</span> — <strong>UTM označí kampaň, zařazení v GA4 ověřte</strong>

## <span class="hl">Reklamní formáty a ceny v AI</span> — <strong>zahraniční testy a české zkušenosti</strong>

## <span class="hl">Rozpočet na reklamu a AI viditelnost</span> — <strong>kampaně a práci na webu vyhodnocujte zvlášť</strong>
```

Ostatní H2 mají rozpoznatelný předmět i pointu; H3 jsou správně prostý text bez zvýrazňovacích značek.

### 7. [WARNING] Opakované atribuce a dlouhé odstavce ztěžují hledání praktického závěru

**Citace:** `clanek.mdx:68`: „Podle nápovědy… Seznam je podle nápovědy vydává… Seznam podle nápovědy průběžně testuje.“ `clanek.mdx:120`: „Google podle nápovědy… je podle nápovědy… se podle ní… nápověda neuvádí.“

**Vada:** Atribuce jsou nutné, ale v souvislém odstavci téhož zdroje není potřeba každou druhou větu uvádět znovu. Na ř. 120 se navíc míchají dva provozovatelé a tři různé odkazy. Pomůže rozdělit informace podle služby a původ tvrzení pojmenovat jednou na začátku příslušného odstavce. Závěrečné „nápověda neuvádí“ zachovat: vymezuje chybějící doklad, není to výplň.

**Přesná náhrada odstavce na ř. 68 dvěma odstavci:**

> Podle [nápovědy Seznam AI](https://o-seznam.cz/napoveda/seznam-ai/sklik-inzeraty-v-seznam-ai/) se pod odpovědí mohou zobrazit nejvýš dva inzeráty Skliku v sekci „Sponzorované výsledky“, s odkazem na informaci, kdo reklamu zaplatil. Seznam je zobrazuje hlavně u dotazů se zájmem o zboží nebo službu, pokud inzerát splní jeho kritéria. Podobu, umístění i označení ploch průběžně testuje.
>
> Pro zobrazení na této ploše není potřeba samostatné nastavení: inzeráty se přebírají z vyhledávacích a Chytrých kampaní. Na plochu v Seznam AI nejde zvlášť cílit ani ji vyloučit. V asistentovi se zobrazují i nabídky Seznam Nákupů. Dopady na SEO rozebírá [článek o Seznamu a AI vyhledávání](/blog/seznam-cz-ai-vyhledavani/).

Náhrada zároveň odstraňuje kostrbaté „vydává“ a zpřesňuje příliš široké „Inzerent nic nenastavuje“ na nastavení konkrétní plochy.

**Přesná náhrada odstavce na ř. 120 třemi odstavci:**

> Google podle své nápovědy vykazuje výkon reklam v Přehledu od AI a v režimu AI jen souhrnně v běžných přehledech kampaní. Neplacené prokliky z obou funkcí GA4 počítá do organického vyhledávání spolu s klasickými výsledky. Samostatně je tak neoddělíte; podrobnosti vysvětluje [článek o limitech měření režimu AI](/blog/mereni-ai-mode-limity/).
>
> Podle nápovědy Seznam AI se výkon inzerátů z vyhledávacích a Chytrých kampaní počítá do statistik kampaně a sestavy; samostatná statistika plochy zatím není. Imprese a prokliky nabídek Seznam Nákupů patří do kategorie „Produkt – doporučené nabídky“. Možnost oddělit v ní Seznam AI od ostatních ploch nápověda neuvádí.
>
> Nastavení vlastní skupiny kanálů a srovnání konverzí z AI popisuje [článek o návštěvnosti z AI v GA4](/blog/ai-navstevnost-konverze/).

### 8. [WARNING] Úvod odsouvá hlavní odpověď za složitou větnou konstrukci

**Citace:** `clanek.mdx:46`: „Ze tří služeb, které tu srovnávám — ChatGPT, Google a Seznam AI —, nabízejí podle své dokumentace…“; dále „…oddělit je v datech je těžší, než se zdá…“

**Vada:** Vložená věta i vsuvka oddalují přísudek. Kombinace pomlčky a čárky není sama o sobě důvodem k opravě; problémem je čtenářská náročnost první věty. „Těžší, než se zdá“ je obecný komentář navíc, protože hned následuje konkrétní omezení. První odstavec má přibližně **92 slov** a hlavní odpověď obsahuje; cílem je ji zpřístupnit, ne přidávat další úvod.

**Přesná náhrada celého úvodního odstavce:**

> **Článek srovnává reklamu v ChatGPT, Googlu a Seznam AI podle dokumentace provozovatelů k listopadu 2026. ChatGPT a Seznam AI popisují pro Česko placené místo pod odpovědí. Google pro češtinu uvádí standardní reklamy nad Přehledem od AI nebo pod ním.** Nákup reklamy podle všech tří provozovatelů neovlivňuje obsah samotné odpovědi. Placené a neplacené návštěvy je potřeba vyhodnocovat zvlášť, ale samotné označení odkazu nestačí: jak GA4 zařadí proklik z reklamy v ChatGPT, není z dostupné dokumentace jasné.

### 9. [WARNING] Čtvrtý krok Stepperu přikazuje činnost, kterou čtenář u cizích odpovědí neprovádí

**Citace:** `clanek.mdx:116`: `title: "Neplacené odkazy nechte bez značek"`, ale popis začíná „Odkazy v odpovědích ChatGPT neoznačujete…“

**Vada:** Nadpis vypadá jako krok při nastavování kampaně, popis však správně připouští, že odkazy v nezávislé odpovědi čtenář neznačkuje. Praktický úkol je vyhodnotit rozpoznatelné zdroje, nikoli rozhodovat o jejich UTM. Výhradu k vlastní skupině kanálů zachovat; ta byla v prvním kole opravena správně.

**Přesná náhrada objektu čtvrtého kroku:**

```js
{ title: "Zkontrolujte také návštěvy mimo kanál AI Assistant", desc: "Odkazy v odpovědích ChatGPT vlastními UTM neoznačujete. Zkontrolujte i relace mimo kanál AI Assistant, u kterých zůstal rozpoznatelný zdroj. Vlastní skupina kanálů je může seskupit, reklamní původ neoznačené návštěvy ale neodhalí." },
```

### 10. [WARNING] Praktické doporučení k Seznamu neříká, co má být výsledkem kontroly

**Citace:** `clanek.mdx:146`: „…hlídejte… nastavení zákazu AI odpovědí na Seznamu.“

**Vada:** „Hlídat nastavení zákazu“ lze číst i jako doporučení zákaz zapnout. Čtenář, který chce neplacenou viditelnost, potřebuje opačně ověřit, zda použití svého obsahu nezakázal. Doplněná podmínka z prvního kola v textu je; toto je jazykové zpřesnění praktického kroku, nikoli opakovaný nález o chybějící podmínce.

**Přesná náhrada odrážky na ř. 146:**

> Pro neplacené odpovědi ChatGPT ověřte přístup robota OAI-SearchBot k webu. U Googlu zkontrolujte indexaci a způsobilost k zobrazení s úryvkem. U Seznamu ověřte, zda jste nezakázali použití obsahu webu k tvorbě AI odpovědí.

### 11. [TIP] Nahraďte vzdálený odkaz „zmíněný článek“ konkrétním proklikem

**Citace:** `clanek.mdx:92`: „…jak, popisuje zmíněný článek o Seznamu.“ Odkaz je až v předchozí sekci na ř. 68.

**Vada:** Čtenář musí při skenování hledat, který článek byl zmíněn. Obsahově relevantní interní odkaz už existuje; stačí ho nabídnout přímo u úkolu.

**Přesná náhrada poslední věty odstavce na ř. 92:**

> Seznam AI podle Seznamu odpovídá mimo jiné z indexu Vyhledávání a web může použití svého obsahu k tvorbě AI odpovědí zakázat; postup popisuje [článek o Seznamu a AI vyhledávání](/blog/seznam-cz-ai-vyhledavani/).

### 12. [TIP] V CTA oddělte lhůtu dodání dokumentu od termínu schůzky

**Citace:** `clanek.mdx:164`: „Výstupem je seznam úprav seřazený podle dopadu a náročnosti a schůzka na 30–60 minut, do pěti pracovních dní od úhrady.“

**Posouzení:** Název **Audit AI viditelnosti**, cena **3 600 Kč bez DPH**, odkaz `/audit/`, předmět kontroly i prioritní seznam odpovídají `zdroje/audit.ts:61`, ř. 83 a ř. 233–276. Nejde o nový rozpor produktu ani o opakování vyřešeného faktického nálezu. Jen koncová lhůta může při rychlém čtení patřit zároveň ke schůzce. Produktový zdroj rozlišuje dodání auditu do pěti pracovních dní a schůzku podle termínu klienta (`zdroje/audit.ts:354`, ř. 360–362).

**Přesná náhrada druhé věty CTA, první větu s názvem a cenou ponechat:**

> Seznam úprav seřazený podle dopadu a náročnosti dostanete do pěti pracovních dní od úhrady. Součástí auditu je také online schůzka na 30–60 minut v termínu podle vašich možností.

## Co je v pořádku

- `seoTitle` na ř. 3 má **52 znaků**, začíná klíčovým spojením „Reklama v ChatGPT“ a vejde se do limitu 60 znaků. Délku `title` nehodnotím.
- `description` na ř. 4 má **145 znaků** a splňuje rozsah 70–160. Slug `reklama-v-ai-odpovedich` je srozumitelný a odpovídá tématu. Není důvod je měnit kvůli délce.
- Text má relevantní interní odkazy na Seznam AI, roboty, měření, rozpočet a produkt. Popisky odkazů neobsahují cenu; cena auditu je správně mimo odkaz. Bez místní mapy rout nelze samostatně prokázat funkčnost všech cílů, ale textový audit neukázal důvod navrhovat jejich náhradu.
- H3 nepoužívají `<span>` ani `<strong>`. FAQ otázky odpovídají potřebám firem a e-shopů; problém je v samostatnosti části odpovědí, nikoli v jejich výběru.
- Text netlačí na nákup strachem ani garancí výsledku. Neobsahuje zakázané výrazy typu „schema markup“, „answer block“, „hub-and-spoke“ nebo nevysvětlený „framework“. Názvy komponent a technické identifikátory nejsou jazykové vady. V posuzovaném textu jsem nenašel chybnou shodu rodu u Seznam AI ani GA4. České uvozovky v čtenářském textu jsou v pořádku; rovné uvozovky v YAML a JSX se neopravují.
- Mechanický průchod dostupným checkerem proti dodanému **JAZYK_SLOVNIK.md v74** skončil s **0 nálezy**. Výsledek nepokrývá větnou stavbu, logiku nadpisů ani podmínky samostatných odpovědí; proto nenahrazuje nálezy výše.

## Stav vypořádání kola 1

Kontrola se řídila konkrétní vadou a podmínkami, ne jen zmizením původního řetězce. Číslování odpovídá `vyporadani.md`. Všechny položky jsou označené jako zapracované; **žádná není výslovně označená jako nezapracovaná**.

| Nález kola 1 | Stav po kontrole celého `clanek.mdx` | Doklad a závěr |
|---|---|---|
| 1 — UTM a neověřená přednost média | Zapracováno | Ř. 31, 87, 104, 110, 114, 144 a 162 zachovávají nejistotu nebo požadují ověření. Starý příslib jistého rozdělení přes `cpc` proti `ai-assistant` nezůstal. Změna H2 v nálezu 6 řeší čtenářské očekávání. |
| 2 — GA4 čísla nejsou důkaz neplaceného původu | Zapracováno | Ř. 87 a 102 výslovně odmítají tento závěr. Ř. 139 už hodnotí neplacené návštěvy, nikoli celý kanál AI Assistant jako automaticky neplacený. |
| 3 — publikum reklam ChatGPT | Částečně; [BLOCKER] | Tělo na ř. 62 opravené, samostatné FAQ a zkratka v `answer` neúplné; nález 1 tohoto auditu. |
| 4 — Ads-Free a Go | Částečně; [BLOCKER] | Rozlišení tarifů opravené, ale ve větě na ř. 62 chybí region a způsobilost volby; nález 2. |
| 5 — dostupnost Ads Manageru není schválení nabídky | Zapracováno | Ř. 25 a 64 podmiňují inzerci sídlem firmy a zásadami; tělo obsahuje i regulované obory a politickou reklamu. Tabulka sama schválení všech nabídek neslibuje. |
| 6 — automatická způsobilost Google a přiřazování | Zapracováno; zkrácení přijímám | Ř. 72 rozlišuje způsobilost, relevanci, aukci a podmínku nákupního záměru pro přesnou a frázovou shodu. Vynechání výčtu AI Max a volné shody přijímám: zachovaná podmínka je pro srovnávací článek podstatná, úplný návod k PPC potřebný není. |
| 7 — Google: funkce, země a formáty | Částečně; [BLOCKER] | `research.md` opraven, ale ř. 29, 58, 72 a 133 stále nedostatečně rozlišují omezení; nález 3. |
| 8 — reklamní roboti a obrázky feedu | Zapracováno | Ř. 145 požaduje přístup obou robotů, včetně obrázků pro OAI-SearchBot; ř. 158 doplňuje hostitele přesměrování, přihlášení, CAPTCHA, kontrolu prohlížeče a absenci záruky schválení. Původní rada povolit druhého robota jen volitelně nezůstala. |
| 9 — statistiky Seznam Nákupů | Zapracováno | Ř. 35 a 120 uvádějí produktovou kategorii; tělo navíc výslovně vymezuje neověřené oddělení Seznam AI. Ř. 68 obsahuje průběžné testování podoby. Úprava FAQ v nálezu 5 řeší samostatnost odpovědi. |
| 10 — dokumentace versus skutečně ověřené UI | Částečně; [BLOCKER] | Atribuce doplněna v `answer`, tabulce, těle i `CompareTable`; metodická poznámka i patička přiznávají neověřené rozhraní. Závěr na ř. 162 ale zůstal bez atribuce umístění; nález 4. |
| 11 — „reklama vám zajistí místo“ | Zapracováno | Ř. 76 a 95 používají „může získat“. Původní slib ani jeho významový ekvivalent jinde nezůstal. |
| 12 — organická způsobilost | Zapracováno; mez dokladu přijímám | Ř. 85 výslovně odkazuje na splnění podmínek služby, přidává úryvek Googlu a absenci záruky; ř. 92 a 146 obsahují i zákaz AI odpovědí Seznamu. Detailní tokeny nejsou nutné opakovat a přiznané použití interního článku přijímám: text netvrdí nové ověření chybějící primární nápovědy. Nález 10 zde řeší jen nejasnou instrukci. |
| 13 — dvě služby jako tvrzení o celém trhu | Zapracováno | Ř. 46 a 162 vymezují trojici srovnávaných služeb; `answer` už netvrdí vyčerpávající počet míst na českém trhu. |
| 14 — nemožnost zpětné opravy dat | Zapracováno | Ř. 116 omezuje vlastní skupinu na rozpoznatelné zdroje; ř. 162 podmiňuje problém chybějícím rozlišujícím údajem. Kategorické „nespravíte“ nezůstalo. |
| Doplnění tabulky podmínek | Zapracováno v researchi; převod do článku neúplný | `research.md` eviduje podmínky publika a Ads-Free i rozdíl Indonésie/Pákistán. Výše uvedené zbytky proto nevyžadují nové hledání zdrojů; je potřeba důsledně přenést již známé podmínky. |

**Výsledek vypořádání:** Z 14 číslovaných nálezů je **10 vypořádaných a 4 jen částečně** (3, 4, 7, 10). Tyto čtyři mají podle pravidel druhého kola závažnost [BLOCKER]. Dříve opravené vady nezakládají nové duplicitní nálezy.

## Meze a nejasnosti

- Audit vychází výhradně z dodané verze a místních podkladů; skutečné rozhraní platforem ani chování živého GA4 neověřuje. Nežádá doplnit další statistiku nebo odhad.
- Ve `vyporadani.md:5` se první výstup nazývá `audit1-result.md`; dodaný soubor se jmenuje `audit1-vysledek.md`. Kontrola proběhla proti dodanému souboru. Jde o nejasnost názvu interního podkladu, nikoli vadu článku.
- Jazykový checker byl nalezen v instalaci skillu pod `~/.claude/skills/cestina-audit/scripts/check.py`; běžel s výslovně zadaným místním slovníkem v74. Jazykové posouzení vět provedl tento auditor. Externí API kontrola nebyla použita, protože zadání zakazuje odesílání obsahu; slovník ani log skillu se neměnily.
- Funkčnost odkazů a vykreslení komponent nelze prokázat sestavením webu z této složky: obsahuje auditní podklady, nikoli celý web. Zjištění o nadpisech a textech komponent vycházejí z MDX zdroje.

**Vytvořený soubor:** `Ultron DISK/Dokumenty/CODEX/z-clauda/2026-11-26-audit2-reklama-v-ai-odpovedich/audit2-vysledek.md`. Ostatní soubory nebyly upraveny.
