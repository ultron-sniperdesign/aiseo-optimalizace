<!-- Audit kolo 2 (jazyk, struktura, kontrola vypořádání) provedl Codex (codex exec přes skill predat-codexu, úsilí high, vlákno 01a15e1f-e1a9-7973-b67d-69a3a591b565), 21. 10. 2026. -->

# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

**Počet nálezů: 6 — 2× [BLOCKER], 4× [WARNING], 0× [TIP].** Opakování stejné vady na více místech počítám jako jeden nález. Kontrola vypořádání níže odkazuje na tyto nálezy a nepřidává je do počtu podruhé.

Auditované znění: `clanek.mdx`, refresh k **21. 10. 2026**. Rozsah: jazyk, brand voice, citovatelnost, struktura, SEO, CTA a kontrola všech 11 zapracovaných nálezů kola 1. Nové věcné prověřování neprovádím; u nedokončených oprav vycházím z `audit1-vysledek.md`, `research.md` a dodaných zdrojů. Článek ani titulek nebyly změněny.

## Nálezy

### 1. [BLOCKER] Třicetidenní platnost kreditů stále chybí v samostatné odpovědi FAQ

**Citace a místo:** FAQ „Kolik stojí nástroj na měření AI viditelnosti?“, ř. 30: „U dvou porovnávaných českých nástrojů vychází základní tarif a doplněk na měření AI při měsíční platbě na 743 Kč u Collabimu a 998 Kč u Marketing Mineru…“

**Vada:** nález 4 kola 1 výslovně požadoval přenést platnost kreditů také do FAQ. Vypořádání ho označuje za zapracovaný, ale podmínka „kredity platí 30 dní“ je pouze v tabulce na ř. 95. Samostatně převzatá odpověď FAQ ji stále vynechává. Měsíční fakturace sama platnost zakoupených kreditů nevysvětluje.

**Konkrétní oprava:** do této odpovědi doplnit větu: „AI kredity Marketing Mineru platí 30 dní.“ Podmínku v tabulce ponechat. Neodvozovat další pravidla převodu nebo obnovování kreditů.

**Podklad:** `audit1-vysledek.md`, nález 4; `research.md`, tabulka B3; dodaný `zdroje/nastroj-MarketingMiner-AI.txt`, údaj „Platnost AI kreditů 30 dní“ ([stránka poskytovatele](https://www.marketingminer.com/cs/ai-visibility)). Nejde o nový faktický nález.

### 2. [BLOCKER] Tvrzení, že žádný ceník výslovně neuvádí počet hodin, nebylo významově opraveno

**Citace a místa:** ř. 79: „**Počet hodin u ceny výslovně neuvádí žádný z ceníků.**“ Vlastnost `desc` v checklistu na ř. 117: „Výslovně to neuvádí žádný ceník ve vzorku, jeden konzultant dává orientační odhad.“

**Vada:** vypořádání nálezu 5 kola 1 zaměnilo rozlišení **závazného počtu hodin a orientačního odhadu** za rozlišení **výslovného uvedení a odhadu**. Orientační odhad může být uveden výslovně. Dodaný ceník H výslovně vztahuje přibližně 8–10 hodin k měsíční ceně 15 000 Kč; sám článek to v následující větě připouští. Původní kategorické popření tedy přetrvává ve dvou místech včetně vlastnosti komponenty.

**Konkrétní oprava:** první tučnou větu na ř. 79 nahradit: „**U počtu hodin rozlišujte závazek a orientační odhad.**“ Následující vysvětlení nabídky za 38 000 Kč a odhadu konzultanta ponechat. V checklistu nahradit celé `desc` textem: „Jeden konzultant uvádí orientační odhad 8–10 hodin za 15 000 Kč měsíčně. Nechte si potvrdit, kolik hodin nabídka zahrnuje a zda jde o závazek, nebo odhad.“

**Podklad:** `audit1-vysledek.md`, nález 5; `zdroje/H.txt` (dodaný ceník konzultanta H; identita mimo repo). Nejde o požadavek na nový průzkum ani na nové číslo.

### 3. [WARNING] Část H2 obsahuje formální značky, ale ne sdělení pro skenujícího čtenáře

**Citace a místa:** ř. 40: „… **veřejné ceníky k 21. 10. 2026**“; ř. 81: „… **a jak se účtuje AI**“; ř. 103: „… **co má pevnou cenu a co ne**“; ř. 114: „… **pět otázek**“; ř. 126: „… **a jak se jim vyhnout**“; ř. 143: „Co z toho `<span class="hl">plyne</span>`…“

**Vada:** první skupina nadpisů oznamuje téma nebo formát, ale neříká výsledek či doporučení. V posledním H2 je jako klíčový pojem zvýrazněno obecné sloveso „plyne“. Při přečtení samotných nadpisů čtenář část podstatných závěrů nezíská. Pouhá přítomnost `<span class="hl">` a `<strong>` splnění pravidla webu nezajišťuje.

**Konkrétní oprava:** upravit jen uvedené H2; návrhy neobsahují cenu a nemění zamčený titulek článku:

| Řádek | Navržený H2 |
|---|---|
| 40 | `## <span class="hl">Ceny AI SEO</span> — <strong>vstupní částky závisejí na rozsahu práce</strong>` |
| 81 | `## <span class="hl">Hodinová sazba SEO</span> — <strong>zveřejnili ji dva konzultanti ve vzorku</strong>` |
| 103 | `## <span class="hl">Ceny Sniper Design</span> — <strong>audit má pevnou cenu, technické úpravy naceníme podle rozsahu</strong>` |
| 114 | `## <span class="hl">Nabídka AI SEO</span> — <strong>nechte si potvrdit rozsah, hodiny, DPH i délku závazku</strong>` |
| 126 | `## <span class="hl">Chyby v rozpočtu AI SEO</span> — <strong>částka bez rozsahu nestačí ke srovnání</strong>` |
| 143 | `## <span class="hl">Rozpočet AI SEO</span> — <strong>srovnávejte rozsah, hodiny a DPH</strong>` |

Datum sběru cen zůstává v úvodu a metodice. Ostatní H2 mají použitelnou pointu. H3 v dodaném MDX nejsou; není důvod je přidávat jen kvůli hierarchii.

### 4. [WARNING] Některé odpovědi FAQ potřebují otázku, aby byl jasný předmět odpovědi

**Citace a místa:** ř. 24: „Vstupní ceny placených auditů ve vzorku…“; ř. 26: „Vstupní měsíční ceny poskytovatelů s nabídkou pro AI…“; ř. 28: „Dva nezávislí konzultanti ve vzorku, kteří sazbu zveřejňují…“; ř. 32: „Za stejným názvem se skrývá různá práce.“

**Vada:** druhá odpověď určuje druh auditu až pozdější zmínkou vlastního produktu, třetí nepojmenuje jednoznačně měsíční správu SEO a viditelnosti v AI a čtvrtá vůbec neřekne, že jde o konzultanty SEO. Poslední odpověď nepojmenuje obor ani službu; její „stejný název“ odkazuje mimo odpověď. Při citaci bez otázky se ztrácí téma cenového srovnání.

**Konkrétní oprava:** změnit úvodní formulace, zbytek odpovědí ponechat:

- Ř. 24: „Vstupní ceny placených auditů zaměřených také na viditelnost v AI jsou ve vzorku k 21. 10. 2026 od 6 000 do 19 900 Kč.“
- Ř. 26: „Vstupní ceny měsíční správy SEO a viditelnosti v AI jsou ve vzorku k 21. 10. 2026 8 000, 10 000 a 16 900 Kč; samotné sledování viditelnosti bez úprav nabízí jeden poskytovatel za 2 500 Kč.“
- Ř. 28: „Dva nezávislí konzultanti SEO ve vzorku, kteří sazbu zveřejňují, účtují…“
- Ř. 32: „Ceny SEO a péče o viditelnost v AI se liší podle rozsahu práce.“ Potom pokračovat stávajícím vysvětlením auditu a správy.

Není nutné rozšiřovat počet otázek ani přidávat statistiky.

### 5. [WARNING] Ve vlastním výkladu zůstaly anglicismy s běžnou českou náhradou

**Citace a místa:** ř. 74: „správa SEO a AI s **reportingem**“; ř. 107: „a **meeting** 30–60 minut“; ř. 109: „**FAQ** k produktům“.

**Vada:** nejde o doslovné citace ani o názvy produktů či tarifů. Článek zde vlastními slovy popisuje služby. Podle výslovného pravidla tohoto webu mají přednost běžné české výrazy.

**Konkrétní oprava:** ř. 74 „správa SEO a AI s pravidelným přehledem výsledků“; ř. 107 „a konzultace v délce 30–60 minut“; ř. 109 „odpovědi na časté dotazy k produktům od 34 Kč za produkt“. Klíč `faq` ve frontmatteru a názvy komponent se nemění. Kanonický název **AI SEO Wireframe Pack** na ř. 112 ponechat: je to doložený název produktu, nikoli anglicismus ve vlastním výkladu.

### 6. [WARNING] Krátká odpověď splňuje délku, ale nezačíná předmětem odpovědi

**Citace a místo:** `answer`, ř. 4: „**Podle veřejných ceníků českých poskytovatelů k 21. 10. 2026** začíná jednorázový audit s AI vrstvou…“ Stejné uvedení zdrojem je v prvním odstavci těla na ř. 42.

**Vada:** `answer` má **56 slov při počítání podle mezer**, takže délka vyhovuje. Začíná však metodickým dovětkem, zatímco vlastní předmět odpovědi přijde až za ním. „Audit s AI vrstvou“ navíc bez dalšího výkladu není zvlášť názorné pojmenování služby. Pro cenový článek není potřebná slovníková definice SEO; úvod má rovnou pojmenovat cenu a službu, o kterých odpovídá.

**Konkrétní oprava:** použít například toto `answer` o **55 slovech podle mezer**:

> Vstupní ceny auditů zaměřených také na viditelnost v AI se ve vzorku českých veřejných ceníků k 21. 10. 2026 pohybují od 6 000 do 19 900 Kč; měsíční správa začíná na 8 000 až 16 900 Kč. Dva konzultanti SEO účtují 1 600 až 2 500 Kč za hodinu bez DPH. Rozsah práce se liší.

Stejné uvedení předmětem odpovědi promítnout do začátku ř. 42. Omezení na vzorek, datum, vstupní ceny a různý rozsah zachovat. Prvních přibližně 100 slov těla již samostatnou cenovou odpověď obsahuje; není potřeba přidávat další úvodní odstavec.

## Kontrola vypořádání kola 1 bod po bodu

Kontrola zahrnuje frontmatter, `answer`, celé FAQ, nadpisy, tabulky, tělo i vlastnosti komponent. Čísla níže odpovídají číslům nálezů v `audit1-vysledek.md`.

| Kolo 1 | Stav | Ověření aktuálního článku |
|---|---|---|
| 1. Nahrazený ceník hodin | **Zapracováno** | `answer`, úvod a FAQ používají 8 000–16 900 Kč a sazby 1 600–2 500 Kč. Ř. 77 a 79 uvádějí 38 000 Kč bez přiřazení k počtu hodin. Staré 28 000 Kč, sazba 1 400 Kč/h ani dolní sazba 1 000 Kč/h nezůstaly jinde v souboru. |
| 2. Fakturační podmínky cen nástrojů | **Zapracováno** | Úvod, české ceny ve FAQ i samostatná věta o Otterly mají „při měsíční platbě“; tabulka má měsíční platbu v záhlaví a roční ekvivalenty Otterly a Semrush. Nepodmíněné minimum „nejméně 743 Kč“ nezůstalo. |
| 3. Vlastní audit jako nejlevnější ve vzorku | **Zapracováno** | Ř. 107 srovnává jen pět uvedených placených auditů s AI vrstvou a připouští rozdíl rozsahu. Ř. 64 doplňuje videoaudit za 990 Kč a rozlišuje plný SEO audit. Původní superlativ není v dalších částech. |
| 4. Platnost kreditů Marketing Mineru | **Částečně zapracováno — [BLOCKER]** | V tabulce na ř. 95 je 30 dní; ve FAQ na ř. 30 podmínka chybí. Viz nález 1 tohoto kola. |
| 5. Počet hodin a orientační odhad konzultanta | **Částečně zapracováno — [BLOCKER]** | Ř. 79 odhad 8–10 hodin doplňuje, ale současně výslovné uvedení počtu hodin plošně popírá. Stejná vada zůstala v `desc` checklistu na ř. 117. FAQ na ř. 26 již netvrdí, že počet hodin nikdo neuvádí. Viz nález 2 tohoto kola. |
| 6. Většina poskytovatelů a zobecnění na trh | **Zapracováno** | FAQ na ř. 22 a tělo na ř. 88 používají čtyři ze šesti poskytovatelů s nabídkou pro AI. Závěr na ř. 145 se omezuje na formy účtování ve vzorku. „Většina“, celotržní „hlavně“ ani „stojí podobně“ nezůstaly. |
| 7. Další bezplatné vstupy | **Zapracováno** | FAQ na ř. 24 i odstavec na ř. 62 uvádějí tři rozdílné bezplatné vstupy a odlišují je od placeného auditu. Původní vyzdvižení jediného poskytovatele nezůstalo. |
| 8. Rozdílné seznamy platforem Collabimu | **Zapracováno v přijatelném rozsahu** | Ř. 94 výslovně připisuje další dvě služby častým dotazům poskytovatele. Nezaměňuje je za ověřenou zkušenost v účtu ani netvrdí, že nástroj měří pouze tři služby. Výhrada je stručná, ale rozlišení částí zdroje je zachováno. |
| 9. Daňové údaje zahraničních nástrojů | **Zapracováno** | Ř. 99 odděluje Semrush a daňovou poznámku u doplňků Otterly. Původní paušální tvrzení nezůstalo; článek netvrdí ověřenou českou cenu základního tarifu Otterly s DPH ani bez ní. |
| 10. Rozsah obsahových služeb | **Zapracováno** | Ř. 109 rozlišuje krátké odpovědi do kategorií a odpovědi na časté dotazy k produktům, uvádí jednotky i další vstupní analýzu „od“. Nevydává 18/34 Kč za celý přepis kategorie či produktu. Jazykovou podobu zkratky řeší samostatně nález 5 tohoto kola; původní věcný nález neopakuji. |
| 11. Rozporný počet PDF Packu | **Zapracováno** | Ř. 112 už počet souborů netvrdí; ponechává sedm typů stránek, cenu a doložený obsah. „9 PDF“ ani jiný počet souborů nezůstal ve frontmatteru, FAQ nebo komponentách. Jde o přijatelné odstranění rozporného údaje; žádný nový počet není třeba doplňovat. |

**Nezapracované nálezy podle vypořádání:** žádné. Není tedy uveden žádný důvod odmítnutí opravy, který by bylo třeba přijmout nebo zamítnout. Dva blokující body výše vznikají při kontrole položek deklarovaných jako zapracované.

## Co vyhovuje

- Titulek má 51 znaků a začíná „Kolik stojí AI SEO“. Je ponechán beze změny podle omezení do 2. 11. 2026; přidání `seoTitle` nenavrhuji.
- `description` má 148 znaků a splňuje rozmezí 70–160 znaků. Slug `kolik-stoji-ai-seo` odpovídá tématu.
- Článek má logické pořadí sekcí a relevantní interní odkazy na rozpočet, nástroje, výběr dodavatele i měření výsledků. Odkazy na pilíř nebo další produkt není nutné přidávat jen kvůli počtu odkazů.
- Všech devět H2 obsahuje požadované HTML značky; žádný H2 ani titulek neobsahuje cenu. Výhrady ke sdělení části nadpisů jsou uvedeny výše.
- CTA na ř. 147 vede na konkrétní **Audit AI viditelnosti** na `/audit/`, cena **3 600 Kč bez DPH** stojí mimo odkaz. Pack na ř. 112 má kanonický název, odkaz `/pack/` a cenu **1 490 Kč včetně DPH** mimo odkaz. V článku nejsou tlačítka s cenou ani generická závěrečná výzva „kontaktujte nás“.
- Sniper Design se neskloňuje a článek agenturu neoznačuje za „AI SEO agenturu“. Zakázané garance, prvenství ani manipulativní urgence nejsou přítomné. Zakázané výrazy typu „schema markup“, „answer block“ nebo „backlink profil“ se v textu nevyskytují.
- Částky používají mezery, číselné rozsahy pomlčku a textové citace české uvozovky. Rovné uvozovky ve frontmatteru a vlastnostech komponent jsou syntaxe, nikoli typografická chyba.

## Omezení a nejasnosti

- Skill `cestina-audit` byl použit pro jazykovou metodiku. V jeho dostupné složce chybí slovník `JAZYK_SLOVNIK.md` i mechanický checker `scripts/check.py`; jazyková kontrola proto proběhla přímo nad celým textem. Nebyl vytvořen náhradní slovník ani měněn externí projekt. Podle vypořádání navíc audity běží přímo přes Codex; externí modelové API nebylo použito.
- Počty slov uvádím podle mezer; více částí čísel se při tomto způsobu počítá samostatně. Uvedené původní i navržené `answer` splňují zadané rozmezí tímto doložitelným způsobem.
- K dispozici je MDX a dodané produktové podklady, nikoli sestavený web a implementace komponent. Nelze ověřit výsledné vykreslení FAQ, případných tlačítek ani stav cílových stránek. Tato technická omezení nejsou vydávána za vady článku.

## Vytvořené nebo změněné soubory

- Vytvořen: `/Users/ultroncloudehome/Desktop/Ultron DISK/Dokumenty/CODEX/z-clauda/2026-10-21-audit2-kolik-stoji-ai-seo/audit2-vysledek.md`
- Žádný další soubor nebyl změněn.
