<!-- Audit kolo 1 (fakta) provedl Codex (codex exec přes skill predat-codexu, úsilí high, vlákno 01a15e14-b6fb-7933-91a1-64b4cddf3490), 21. 10. 2026. OpenAI API bylo bez kreditů. Interní ID poskytovatelů A–H odpovídají ceny-2026-10-21.json. -->

# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

**Počet nálezů: 11 — 4× [BLOCKER], 7× [WARNING], 0× [TIP].** Opakování stejné vady v úvodu, `answer`, FAQ a závěru počítám jako jeden nález.

Auditované znění: `clanek.mdx`. Rozsah: pouze věcná správnost a aktuálnost ke **21. 10. 2026**. Ceny a popisy nabídek jsem ověřoval proti dodaným textům v `zdroje/`, nikoli proti aktuálním živým webům ani jen proti souhrnům v `research.md`. Článek ani jeho titulek jsem neměnil. Poskytovatele označuji interními ID; návrhy pro článek zachovávají anonymitu.

## Nálezy

### 1. [BLOCKER] Aktuální cenové shrnutí zahrnuje nabídku označenou jako nahrazená

**Místo a citace:** ř. 75–85: „balíček 20 hodin práce, nejméně šest měsíců | 28 000 Kč bez DPH“; „1 400 Kč za hodinu […] 1 000 Kč ve 100 hodinách“. Navazuje na ně rozpětí **8 000–28 000 Kč** a sazby **1 000–2 500 Kč** v `answer`, úvodu a FAQ.

**Doklad:** `zdroje/A-cenik-hodin-SEO2.txt` skutečně obsahuje 20 hodin za 28 000 Kč a 100 hodin za 100 000 Kč bez DPH. Tatáž stránka je ale v kategorii **„Služby, které jsme nahradili jinými“**, a to v navigaci i u nabídky. `zdroje/A-sluzba-pro-AI.txt` uvádí **38 000 Kč**, rozsahy 10/20/40/60+ hodin a také formulaci o smysluplném začátku na 20 hodinách. Jednoznačné přiřazení 38 000 Kč ke konkrétní dotaci ani potvrzení platnosti starých sazeb v dodaném textu není.

**Vada:** datum načtení starší stránky nedokazuje aktuálnost její nabídky. Článek rozpor redukuje na dvě různé částky, ale zamlčuje označení nahrazené služby. Staré sazby tím prezentuje jako ověřenou současnou vstupní nabídku. Stejnou slabinu má přepočet v briefu.

**Cílená oprava:** A oddělit od potvrzených aktuálních vstupních cen. Uvést například: „Stránka označená jako nahrazená služba obsahuje 20 hodin za 28 000 Kč bez DPH. Stránka GEO služby uvádí 38 000 Kč, ale z textu nelze určit příslušný počet hodin.“ Dokud není vztah nabídek doložen, nepoužívat A jako současnou horní mez měsíčního rozpětí ani jako současnou dolní mez hodinové sazby. Pro zbývající nabídky AI správy E/F/D vychází **8 000–16 900 Kč měsíčně**; u dvou nezávislých konzultantů G/H jsou doložené vlastní sazby **1 600–2 500 Kč bez DPH**. Případné ponechání historických sazeb A musí být výslovně takto označeno. Nevyvozovat, že A službu určitě neposkytuje nebo že 38 000 Kč určitě znamená konkrétní měsíční balíček.

### 2. [BLOCKER] „Nejméně 743 Kč“ vynechává fakturační podmínku a přesahuje zkoumaný vzorek

**Místo a citace:** `answer`, ř. 42 a FAQ na ř. 30: „měření AI viditelnosti v českých nástrojích stojí nejméně 743 Kč měsíčně bez DPH“; „Collabim vyjde nejméně na 743 Kč měsíčně“. Tabulka dále uvádí Otterly.AI „od 29 $“ a Semrush 199 $ měsíčně.

**Doklad:** `zdroje/nastroj-Collabim-cenik.txt` obsahuje Core za **360 Kč** při měsíční fakturaci, ale také měsíční ekvivalenty **342 / 335 / 324 Kč** pro delší fakturační období. Doplněk 500 měření stojí **383 Kč**. Součet **360 + 383 = 743** je správný, neprokazuje však nepodmíněné minimum. `zdroje/nastroj-Otterly.txt` vedle 29 $ obsahuje **25 $/měsíc při ročním předplatném**; `zdroje/nastroj-Semrush.txt` vedle 199 $ uvádí **165,17 $/měsíc při roční platbě**.

**Vada:** chybí omezení na měsíční fakturaci. Navíc byly porovnány dva české nástroje, nikoli všechny české nabídky. Zdroje tedy nedokládají minimum celého českého segmentu. B3 v `research.md` správně uvádí nutnost základního placeného tarifu, ale fakturační období a omezení minima na vzorek v ní chybí.

**Cílená oprava:** v `answer`, úvodu a FAQ nahradit minimum formulací „U dvou porovnávaných českých nástrojů vychází základní tarif a doplněk při měsíční platbě na 743 Kč u Collabimu a 998 Kč u Marketing Mineru, bez DPH.“ Záhlaví tabulky omezit na **měsíční fakturaci** a připojit, že delší předplatné může mít nižší měsíční ekvivalent. U Otterly výslovně označit 29 $ jako cenu při měsíční platbě. Není nutné vymýšlet nové tržní minimum ani bez dalšího tvrdit, že všechny doplňky sdílejí podmínky ročního základního tarifu.

### 3. [BLOCKER] Vlastní audit není nejnižší placený audit v celém vzorku A–H

**Místo a citace:** ř. 106: „Ve vzorku je to nejnižší placená vstupní cena auditu“ — u vlastního Auditu AI viditelnosti za 3 600 Kč bez DPH.

**Doklad:** `zdroje/H.txt` výslovně uvádí **vlastní videoaudit za 990 Kč bez DPH**, vedle plného SEO auditu od 15 000 Kč. Nejde o obecný odhad ceny konkurence: zdroj říká „moje vlastní ceny“. Vzorek je v metodice článku definován jako všech osm poskytovatelů A–H.

**Vada:** bez omezení druhu auditu je superlativ vyvrácen přímo zdrojem H. Zároveň nelze videoaudit automaticky prohlásit za stejnou službu jako vlastní audit AI viditelnosti. Brief tuto levnější placenou variantu nezahrnul a jeho superlativ proto není dostatečným dokladem.

**Cílená oprava:** zúžit tvrzení na skutečně porovnaný rozsah: „Cena 3 600 Kč bez DPH je nižší než zveřejněné placené ceny pěti uvedených nabídek auditů s AI vrstvou; jejich rozsah se liší.“ Pokud má být řeč o všech auditech ve vzorku, uvést také videoaudit za 990 Kč bez DPH a odlišit ho od plného auditu. U konzultanta H na ř. 62 upřesnit, že 15 000 Kč je cena **plného** SEO auditu. Nežádat nový průzkum ani nejnižší cenu celého trhu.

### 4. [BLOCKER] U AI kreditů Marketing Mineru chybí podmínka jejich platnosti

**Místo a citace:** ř. 94 a 98: „tarif 499 Kč + 1 300 AI kreditů za 499 Kč, bez DPH“; „Marketing Miner počítá 2 kredity za jeden dotaz v jednom AI modelu“. Stejná nabídka je ve FAQ na ř. 30.

**Doklad:** `zdroje/nastroj-MarketingMiner-AI.txt` vedle sazby dvou kreditů za jeden prompt v jednom modelu výslovně uvádí **„Platnost AI kreditů 30 dní“** a placené základní předplatné. Cena Starteru 499 Kč je potvrzena v `zdroje/nastroj-MarketingMiner-cenik.txt`.

**Vada:** součet **499 + 499 = 998 Kč** i kreditová sazba jsou správné. Chybí ale časové omezení zakoupeného objemu, tedy podstatná podmínka toho, co za cenu lze vyčerpat. Samotné zařazení nabídky pod „měsíčně“ neříká, že konkrétní kredity platí jen 30 dní. Tabulka B3 ani nástrojový přehled v briefu tuto podmínku neobsahují. Podle pravidla tohoto kola jde u vynechané podmínky cizí platformy o blocker.

**Cílená oprava:** k popisu čerpání doplnit „AI kredity platí 30 dní“ a tuto podmínku přenést i do samostatné odpovědi FAQ. Podmínku placeného základního tarifu ponechat. Nevymýšlet pravidla převodu, automatického obnovování ani propadání zbytku nad rámec doložené třicetidenní platnosti.

### 5. [WARNING] „Počet hodin uvádí jediný ceník“ přehlíží orientační rozpad u H

**Místo a citace:** ř. 77: „Počet hodin uvádí jen poslední z nich“ a „U ostatních ceník neříká, kolik práce se za vstupní cenu odvede.“ Checklist na ř. 116: „Ve vzorku to uvádí jediný ceník.“ Obdobné tvrzení obsahuje FAQ na ř. 26.

**Doklad:** `zdroje/H.txt` k retaineru **15 000 Kč** uvádí přibližně **8–10 hodin měsíčně** a rozpad: technické opravy 1–2 hodiny, on-page 2–3, obsah 3–4, analýza a reporting 1 hodina. Také FAQ zdroje vztahuje 8–10 hodin přímo k vlastní měsíční správě od 15 000 Kč.

**Vada:** není pravda, že ostatní zdroje o hodinách neříkají nic. Údaj H je ovšem orientační výpočet, nikoli stejně závazná dotace jako u balíčku A. Tyto dvě úrovně dokladu je potřeba rozlišit.

**Cílená oprava:** napsat „Pevnou hodinovou dotaci uvádí stránka balíčků A; jeden konzultant navíc publikuje orientační odhad 8–10 hodin za 15 000 Kč měsíčně. U ostatních porovnávaných nabídek počet hodin doložen není.“ U A současně respektovat výhradu k aktuálnosti z nálezu 1. Checklist změnit na otázku, zda je uvedený počet hodin závazný, nebo jen odhad. Netvrdit, že H garantuje 8–10 hodin.

### 6. [WARNING] Záměna jmenovatele a nepodložené zobecnění na český trh

**Místo a citace:** FAQ na ř. 22: „Většina poskytovatelů ve vzorku prodává práci na viditelnosti v AI společně s klasickým SEO.“ Závěr na ř. 144: „AI SEO se v Česku prodává hlavně jako součást SEO a stojí podobně“.

**Doklad a přepočet:** propojení nabídky AI a SEO je v podkladech doložené u **A, B, E, F**, tedy **4 ze 6** poskytovatelů vybraných podle nabídky pro AI. Celý deklarovaný vzorek má ale **8** poskytovatelů: **4 z 8 je polovina, nikoli většina**. Metodika sama správně říká, že vzorek není náhodný. Dokumenty ukazují stejné obchodní formáty — audit, správa, hodiny — ale nedokládají cenovou shodu srovnatelných rozsahů SEO a AI SEO na českém trhu.

**Cílená oprava:** ve FAQ i závěru použít „Čtyři ze šesti sledovaných poskytovatelů s nabídkou pro AI ji propojují s klasickým SEO.“ Vypustit celotržní „v Česku hlavně“ a cenové „stojí podobně“; doložený závěr zní „V tomto vzorku se používají stejné formy účtování jako u SEO.“ Novou statistiku není potřeba doplňovat. Čtyři ze šesti na ř. 87 jsou samy o sobě přepočteny správně; chyba vzniká změnou jmenovatele a rozšířením závěru.

### 7. [WARNING] Zmínka o jediném bezplatném auditu nepostihuje další bezplatné vstupy

**Místo a citace:** FAQ na ř. 24 a ř. 106: „jeden poskytovatel dává první audit zdarma“; v tabulce na ř. 59 je bezplatný vstup zmíněn pouze u C.

**Doklad:** C v `zdroje/C.txt` skutečně nabízí první nezávazný audit zdarma a velký za 19 900 Kč. F v `zdroje/F.txt` ale nabízí také **„100% zdarma Mini audit AI dohledatelnosti“** se základní analýzou do 48 hodin. E v `zdroje/E.txt` nabízí bezplatný test na **třech reálných dotazech**.

**Vada:** existence bezplatného prvního auditu C je doložená; nedoložená je případná interpretace, že jde o jedinou bezplatnou vstupní diagnostiku ve vzorku. Jsou doloženy nejméně **dvě nabídky označené jako audit či miniaudit**, plus samostatný krátký test. Zdroje neumožňují tvrdit, že mají stejný rozsah. V cenovém srovnání působí vyzdvižení pouze C neúplně.

**Cílená oprava:** doplnit: „Vedle prvního auditu zdarma nabízí jiný poskytovatel bezplatný miniaudit a další krátký test na třech dotazech; rozsah těchto vstupů se liší.“ Nezaměňovat tyto nabídky za bezplatnou variantu všech uvedených kompletních auditů a nenásobit nález za každý jeho výskyt.

### 8. [WARNING] Rozsah měřených platforem Collabimu není v dodaném zdroji konzistentní

**Místo a citace:** ř. 93, sloupec „Co za to“: „ChatGPT, Gemini, Perplexity“.

**Doklad:** `zdroje/nastroj-Collabim-AI.txt` v hlavním popisu opakuje tyto tři služby, ale v odpovědi „V jakých AI modelech mohu sledovat viditelnost značky?“ výslovně přidává **Google AI Overviews a AI Mode**. Brief převzal jen hlavní trojici a rozpor nezaznamenal.

**Vada:** trojice v článku není prokazatelně nepravdivá a článek neříká „pouze tři“. Jako přehled rozsahu za uvedenou cenu však bez vysvětlení přebírá jen jednu z rozdílných částí zdroje. Nelze z toho udělat jistý úplný seznam ani jisté potvrzení všech pěti služeb pro konkrétní balíček.

**Cílená oprava:** k řádku připojit stručnou výhradu: „Hlavní popis jmenuje ChatGPT, Gemini a Perplexity; FAQ také Přehledy od AI a režim AI, rozsah stránky není jednotný.“ Do briefu zaznamenat rozpor. Dostupnost dvou dalších služeb v zakoupeném účtu netvrdit jako ověřenou zkušenost; UI doklad chybí.

### 9. [WARNING] Paušální „zahraniční ceníky DPH neuvádějí“ přehlíží daňový údaj u doplňků Otterly

**Místo a citace:** ř. 98: „U zahraničních nástrojů ceník DPH neuvádí.“

**Doklad:** `zdroje/nastroj-Otterly.txt` v sekci doplňků obsahuje **„The displayed prices are US Dollar (excluding tax).“** U Semrushe v dodaném textu výslovný daňový údaj chybí. U základního předplatného Otterly není z rozsahu citované sekce jednoznačné, zda se tato věta vztahuje i na něj.

**Vada:** zdroj Otterly určitou informaci o dani obsahuje, takže úplnou absenci pro oba zahraniční ceníky nelze tvrdit. Opačný závěr, že základních 29 $ je určitě bez české DPH, by byl rovněž silnější než doklad. Stejné zjednodušení je v B3 briefu, kde stojí „ceny v $ bez DPH“.

**Cílená oprava:** „U Semrushe dodaný text daňový režim neuvádí. Otterly označuje ceny doplňků jako ceny bez daně; u základního předplatného není daňový režim v dodaném textu jednoznačný.“ Nepřepočítávat dolarové částky na českou cenu s DPH bez doložení příslušného režimu.

### 10. [WARNING] U obsahových cen není uvedeno, který díl obsahu za ně zákazník kupuje

**Místo a citace:** ř. 108: „Obsah: kategorie od 18 Kč a produkty od 34 Kč za kus plus jednorázová vstupní analýza“.

**Doklad:** `zdroje/sluzby.ts`, `categoryTiers`, ř. 218–253: **18 Kč** znamená krátkou odpověď ke kategorii, s analýzou **1 300 Kč**. Varianta s přepisem obsahu kategorie stojí **54 Kč** za kategorii. `productTiers`, ř. 260–299: **34 Kč** znamená FAQ k produktu, s analýzou **2 600 Kč**; FAQ a strukturovaný popis jsou ve variantě za **49 Kč**. Nejde tedy o cenu celého přepisu kategorie či celého produktového popisu.

**Vada:** vstupní částky jsou správné a povinná analýza není zatajena. Chybí ale věcný rozsah nejlevnější varianty, přestože právě rozsah je předmětem cenového srovnání. Obecné „obsah kategorií a produktů“ umožňuje zaměnit dvě různé dílčí služby za kompletní texty.

**Cílená oprava:** nahradit pouze tento úsek: „Krátké odpovědi do kategorií od 18 Kč za kategorii a FAQ k produktům od 34 Kč za produkt; navíc jednorázová vstupní analýza podle skupiny obsahu.“ Pokud se doplní cena analýzy k těmto základním variantám, použít konkrétních 1 300 Kč a 2 600 Kč bez DPH podle `sluzby.ts`. Nenahrazovat je jiným ceníkem z nabídky pro Upgates.

### 11. [WARNING] Počet PDF Packu odpovídá zadání, ale odporuje dodanému produktovému podkladu

**Místo a citace:** ř. 111: „drátěné modely sedmi typů stránek […] 9 PDF a souhrnné PDF“.

**Doklad:** zadání tohoto auditu výslovně stanoví **9 PDF + souhrnné PDF**. Dodaný `zdroje/pack.ts` naproti tomu uvádí v produktovém popisu i v hero „**Vše v jednom master PDF (85 stran)**“ a v `answer` jeden PDF dokument. Také komentář u data revize říká, že se distribuuje vždy jedno PDF. Sedm typů stránek a **1 490 Kč včetně DPH** jsou potvrzeny shodně.

**Vada:** podklady nejsou vzájemně slučitelné v počtu dodávaných souborů. Není poctivé označit údaj článku za prokázaně chybný, když jej výslovně potvrzuje uživatelské zadání; zároveň jej nelze označit za ověřený proti `pack.ts`. Z předložených dat není prokázán skutečný obsah doručeného balíku.

**Cílená oprava:** respektovat zadanou specifikaci **9 PDF + souhrnné PDF** a před publikací s ní sjednotit kanonický produktový podklad a brief. V tomto auditu nesnižovat počet souborů na jeden jen podle rozporného `pack.ts`. Pokud se později doloží, že platí jiná distribuční podoba, musí se změnit související specifikace společně. Titulek článku ani cenu není důvod měnit.

## Kontrolní přepočet a správné údaje

Tato tabulka zaznamenává výsledek kontroly, nikoli další samostatné nálezy.

| Údaj článku | Výsledek ověření proti zdrojům |
|---|---|
| Osm poskytovatelů, z toho šest vybraných podle nabídky pro AI a dva podle vlastních cen klasického SEO | Odpovídá definici výběru A–H v briefu. Není to reprezentativní vzorek trhu. |
| Tři z osmi uvádějí DPH; pět nikoli | **A/G/H: bez DPH; B/C/D/E/F: v dodaných cenových textech neuvedeno. 3 + 5 = 8.** Žádný závěr o skutečném daňovém režimu zbývajících pěti z toho neplyne. |
| Pět placených nabídek auditů s AI kontextem: 6 000; 10 000–20 000; od 15 000; 19 900; od 19 900 Kč | Částky a uvedené rozsahy odpovídají B/E/F/C/D. U všech pěti daňový údaj chybí. F v cenové kartě slibuje technický SEO audit, nikoli konkrétní protokol měření v AI; článek to přiměřeně označuje jako ceník u služby pro AI. |
| Vstupní ceny těchto placených auditů 6 000–19 900 Kč | **Jako rozpětí vstupních cen je přepočet správný:** minima jednotlivých nabídek jsou 6 000 / 10 000 / 15 000 / 19 900 / 19 900 Kč. Není to maximum konečné ceny auditu; E výslovně připouští 20 000 Kč. Samotné číslo 19 900 proto není nutné mechanicky měnit na 20 000. |
| E: čtyři platformy, opakované běhy, zdroje a plán za 10 000–20 000 Kč; správa od 8 000 Kč měsíčně | Doloženo v `E.txt`. Kombinace s obsahem a odkazy je výslovně „obvykle“, nikoli garance rozsahu v základní ceně. |
| C: pět AI služeb a kompletní audit za 19 900 Kč | Doloženo v `C.txt`: postup jmenuje ChatGPT, Gemini, Perplexity, AI Overviews a AI Mode. První nezávazný audit je zdarma a není automaticky totožný s placeným velkým auditem. |
| D: audit od 19 900 Kč a péče od 16 900 Kč měsíčně | Doloženo v `D.txt`; ceny jsou orientační podle velikosti a cílů webu. Nejde o doložený maximální rozpočet. |
| F: audit od 15 000 Kč a správa od 10 000 Kč měsíčně | Doloženo v `F.txt`. Zdroj navíc obsahuje bezplatný miniaudit — nález 7. |
| B: audit 6 000 Kč, monitoring 2 500 Kč měsíčně, samostatný obsah 6 000 Kč měsíčně | Doloženo v `B-audit.txt`, `B-monitoring.txt` a nabídkových kartách. Komplexní optimalizace za 15 000 Kč v `B-komplexni.txt` je **jednorázová**; článek ji nezaměňuje za měsíční správu. |
| G/H: klasické SEO audity od 19 200 / od 15 000 Kč bez DPH | Doložené ceny úplnějších auditů. H má též videoaudit 990 Kč a G dílčí technický/obsahový/odkazový audit od 6 400 Kč; bez vymezení druhu nejde o nejnižší ceny všech variant auditů těchto poskytovatelů. |
| A: 28 000 ÷ 20 = 1 400 Kč/h; 100 000 ÷ 100 = 1 000 Kč/h; nejméně šest měsíců | **Aritmetika je správná**, aktuálnost uvedené cenové nabídky problematická — nález 1. Minimum šesti měsíců je v dodaných textech A skutečně uvedeno. |
| G: 1 600 Kč/h dlouhodobě a 2 100 Kč/h jednorázová konzultace; H: 2 500 Kč/h konzultace | Doloženo ve vlastních cenových údajích G/H, bez DPH. Nejde o tržní průměr. |
| Collabim 500 měření / 125 dotazů týdně za 383 Kč bez DPH | Částka i příklad jsou výslovně na dodané stránce; **125 × 4 = 500**. Článek správně připisuje příklad poskytovateli. Z textu ale nelze dovodit další pravidla čerpání napříč modely či pět týdenních běhů v některém období. |
| Marketing Miner 1 300 AI kreditů za 499 Kč, dva kredity za prompt v jednom modelu, povinný placený tarif | Správně doloženo; **499 + 499 = 998 Kč bez DPH**. Chybí třicetidenní platnost — nález 4. Seznam pěti uvedených AI služeb odpovídá zdroji. |
| Otterly 29 $ / měsíc, 15 sledovaných dotazů, čtyři zahrnuté služby a další za příplatek | Odpovídá Lite **při měsíční platbě**. Základ zahrnuje ChatGPT, AI Overviews, Perplexity a Copilot, příplatkové jsou Claude, AI Mode a Gemini. Zdroj uvádí denní sledování těchto dotazů. |
| Semrush 199 $, 50 dotazů denně, jedna doména | Odpovídá tarifu Starter při měsíční platbě, pokud se čte jako **denní sledování 50 zadaných dotazů a jedna doména pro výkon značky v AI**. Není to doklad kapacity 50 nových ad hoc analýz každý den. SEO část tarifu má samostatně pět sledovaných webů. |
| Vlastní audit 3 600 Kč bez DPH / 4 356 Kč s DPH, do pěti pracovních dní od úhrady, meeting 30–60 minut a prioritní seznam úprav | Shodně doloženo v `audit.ts`; **3 600 × 1,21 = 4 356**. Uvedený rozdíl 21 % vůči částce bez DPH odpovídá tomuto přepočtu. |
| Technické úpravy orientačně od 8 000 Kč do vyšších desítek tisíc; přesně po auditu | Odpovídá `sluzby.ts`, včetně orientační povahy ceny. |
| Upgates moduly 1 300–10 400 Kč bez DPH | Oba krajní body jsou přímo v `nase-sniperdesign-seo-pro-ai.txt`: souhrn do JSON-LD 1 300 Kč, E-E-A-T prvky 10 400 Kč. Je to rozpětí jednotlivých uvedených modulů, nikoli cena všech úprav či balíčků dohromady. |
| Srovnávací obsah: 24 srovnání za rok za 12 800 Kč bez DPH; správa podle rozpočtu | Odpovídá `sluzby.ts`, zejména `compareOffer` a `retainers`. |
| Pack: sedm typů stránek, šablony textů, ukázky strukturovaných dat, 1 490 Kč včetně DPH | Potvrzeno v `pack.ts` i zadání. Rozpor se týká pouze počtu souborů — nález 11. |

## Síla dokladů, podmínky a aktuálnost

**Tabulka podmínek B3 existuje** (`research.md`, ř. 78–86), nelze však předpokládat, že je úplná nebo správná. Chybějí v ní fakturační období nástrojů a třicetidenní platnost AI kreditů; její souhrn dolarových cen jako cen bez DPH je příliš silný. Nezaznamenává označení nahrazené služby u A. Tyto nedostatky nezhojí pouhý odkaz na brief.

**Řádek UI je skutečně prázdný.** Žádná dodaná stránka poskytovatele nenahrazuje vlastní ověření zakoupeného rozhraní či dodaného reportu. Tabulky článku jsou uvedené jako to, co slibují ceníky; takto připsaný popis nabídky lze doložit veřejnou stránkou. V článku jsem nenašel konkrétní tvrzení typu „na této obrazovce uvidíte tento report“, které by odůvodnilo samostatný UI blocker. Obecná zmínka o Search Console a Bing Webmaster Tools na ř. 100 nejmenuje konkrétní obrazovku ani metriku. Z některých dodaných vlastních prodejních textů proto do tohoto článku **nepřebírat** další tvrzení o obrazovkách či dostupnosti AI reportů jako ověřená fakta. Žádnou službu ani rozhraní jsem nenakupoval ani netestoval.

**Časové ukotvení článku je jinak v pořádku:** aktualizace i cenový sběr jsou datovány 21. 10. 2026, rok 2026 odpovídá zadání a nejsou zde neukotvená „letos / příští rok“. Problém aktuálnosti u A spočívá v označení nabídky jako nahrazené, nikoli ve stáří samotného načtení. Formulaci „návštěv z AI může být […] méně“ nepovažuji za doloženou statistiku, ale ani za číselné tvrzení o podílu trhu; není důvod žádat vymyšlený podíl. Žádný chybějící údaj jsem nevykládal jako nulu.

## Nejasnosti, které dodané podklady nerozhodují

- **A:** zda a za jakých podmínek platí cenové balíčky ze stránky označené jako nahrazená; vazba 38 000 Kč na hodiny a účtované období. Není doloženo ani to, že staré ceny určitě platí, ani to, že je nelze nijak sjednat.
- **Collabim:** jednotný rozsah podporovaných AI služeb u konkrétního balíčku; hlavní popis a FAQ se liší. Přesná pravidla platnosti a čerpání balíčku text odkazuje na obchodní podmínky, které nebyly dodány. Nelze je domyslet.
- **Otterly:** daňový režim základního předplatného nelze bezpečně dovodit z věty umístěné u doplňků.
- **Pack:** uživatelské zadání stanoví 9 PDF + souhrnné PDF, produktový modul popisuje jeden master PDF dokument. Zadání má pro tento běh přednost; skutečný distribuovaný balík nebyl předložen.
- **Skutečná dodávka:** veřejné popisy neprokazují kvalitu provedení, konkrétní výstup po zaplacení ani konečnou individuální cenu. Nedoložený rozsah nelze vydávat za nulovou práci nebo za neexistující funkci.

## Vytvořené nebo změněné soubory

- Vytvořen: `/Users/ultroncloudehome/Desktop/Ultron DISK/Dokumenty/CODEX/z-clauda/2026-10-21-audit-kolik-stoji-ai-seo/audit1-vysledek.md`
- Žádné další soubory nebyly změněny.
