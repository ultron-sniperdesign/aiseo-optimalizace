**BLOKER 1 — autor místy tvrdí víc, než má oporu v abstraktu**
> „**Nejsilněji vycházela shoda s tématem a pozice v pořadí.**“  
> „**To je jediné doporučení, které v kontrolovaném testu obstálo.**“

První věta může být v pořádku, **pokud to abstrakt skutečně říká explicitně**. Druhá už je silnější interpretace: z toho, že abstrakt vypíchl topic relevance a position bias, ještě neplyne, že „jediné doporučení, které obstálo“ byla shoda s tématem. Bez plného textu nevíte, co další faktory dělaly, jen že z veřejného shrnutí neznáte jejich velikosti a nuance. Tady autor sklouzává od opatrnosti k rétorickému zjednodušení.

---

**BLOKER 2 — „pozici přímo neovlivníte“ je praktická zkratka, ne metodologický závěr studie**
> „**Pozici v pořadí přímo neovlivníte.**“

Tohle není závěr ze studie, ale aplikační komentář webu. V článku splývá s výkladem studie. Studie ukazuje, že **pořadí v předloženém kontextu má vliv na citaci**; neukazuje, co všechno to pořadí v produkčním systému určuje ani zda ho lze ovlivňovat přes retrieval, autoritu zdroje, strukturu dokumentu apod. Formulace je příliš definitivní.

---

**BLOKER 3 — smíření s vlastními doporučeními je částečně alibistické**
> „**Zpochybňuje to jen zdánlivě, protože každé to doporučení míří na jinou fázi.**“  
> „**Studie potvrdila jedno naše doporučení a o zbytku neřekla nic.**“

To je pohodlné. Rozlišení fází je metodologicky správné, ale autor ho používá jako **štít proti nepříjemnému výsledku**. Pokud web dříve tvrdil, že struktura, přímá odpověď a čitelnost pomáhají AI citaci, tahle studie je minimálně **oslabením univerzální formulace těch tvrzení v jedné konkrétní fázi procesu**. Poctivé vyrovnání by mělo říct: „v citation-choice kroku se část našich obvyklých rad z veřejně dostupných informací nepotvrdila jako hlavní faktor.“ To v textu chybí.

---

**DOPORUČENÍ 1 — metodologický rozdíl mezi “výběrem” a “celým procesem” je popsán správně**
> „**Studie měřila poslední krok — výběr mezi dvěma zdroji, které už jsou v kontextu modelu. Neměřila, jak se tam dostaly.**“

Tohle je jádro článku a je správně. Autor správně odděluje:
- retrieval / dohledání kandidátů,
- zařazení do kontextu,
- samotný výběr/citaci.

To není přehnaná skepse, ale legitimní omezení externí validity. Tady je článek poctivý.

---

**DOPORUČENÍ 2 — správně brzdí přenos laboratorního výsledku do praxe, ale místy to přehání**
> „**O tom, jak se tam dostat, o návštěvnosti ani o reálném prostředí neříká nic.**“

V zásadě ano. Jen „nic“ je moc absolutní. Studie sice netestuje retrieval a traffic, ale **nepřímo říká něco o tom, co může pomáhat po retrievali**, pokud se zdroj už dostane mezi kandidáty. Praktický obsah tedy existuje: relevance a pořadí kandidátů zřejmě hrají významnou roli při citation choice. Autor to uznává, ale pak to znovu utopí v obranných výhradách.

---

**DOPORUČENÍ 3 — užitečný obsah tam je, ale je ho méně, než by mohlo být**
> „**Prakticky z toho plyne jedna věc, a je nudná…**“

To je zbytečně sebeomezující. Z článku by šlo vytěžit víc i při práci jen s abstraktem:
- relevance je zjevně robustní faktor napříč modely,
- pořadí kandidátů je samostatný bias/faktor,
- nelze mechanicky zaměňovat „být nalezen“ a „být citován“,
- test na anonymizovaných značkách naznačuje, že efekt nebyl jen brand bias.

Autor má pravdu v limitech, ale z praktické roviny vytěží méně, než studie pravděpodobně dovoluje.

---

**DOPORUČENÍ 4 — pozor na formulace o ostatních faktorech**
> „**Studie, která říká, že na formátování v posledním kroku tolik nezáleží…**“

Tohle je riskantní, pokud to abstrakt takto neříká. Pokud z abstraktu jen víte, že nejsilnější byly relevance a position, nevíte ještě, zda formátování „tolik nezáleží“, nebo jen nebylo mezi top efekty ve shrnutí. To je přesně typ posunu, který článek jinde kritizuje.

---

**DROBNOST — “prošla recenzí” nepřeceňovat**
> „**…prošla recenzí na konferenci SIGIR.**“

Věcně v pořádku, ale lehce to budí dojem vyšší jistoty, než článek sám má, když pracuje jen s abstraktem a veřejnými shrnutími. Pro audit článku to není velký problém, jen bych to nepoužíval jako oporu pro silnější závěry.

---

**DROBNOST — “opatření proti zkreslení” je správně, ale neúplně**
> „**Anonymizace značek a prohazování pořadí jsou přesně ty kontroly…**“

Ano, ale text mohl dodat, **proti jakému konkrétnímu zkreslení** chrání a jaká zkreslení naopak zavádí laboratorní uspořádání. Teď to zní skoro jen jako známka kvality, méně už jako trade-off.

---

**DROBNOST — článek by měl jasněji oddělit, co je ze studie a co je interpretace autora**
Např.:
> „**Že vyhrává shoda s tématem, nikoho nepřekvapí — a je to dobře.**“

To už je komentář. Nevadí, ale v textu je těchto plynulých přechodů víc a někdy se ztrácí hranice mezi tím, co doložila studie, a co je obchodně-praktický výklad webu.

---

## Co chybí

**1. Přesnější vymezení outcome**
> „**…sledovali, který z nich se objeví v první citaci odpovědi.**“

Chybí vysvětlit, proč právě **první citace** a ne všechny citace, mention rate apod. To je metodologicky důležité, protože outcome může ovlivnit interpretaci „co rozhoduje“.

**2. Jasnější práce s interní validitou vs. externí validitou**  
Autor to intuitivně popisuje, ale nepojmenovává: studie může být **silná interně** a omezená **externě**. To by pomohlo zpřesnit argumentaci a ubrat obranný tón.

**3. Přiznání, že některá vlastní doporučení mohla být v této fázi procesu nadhodnocená**  
To je hlavní chybějící poctivost. Ne stačí říct „studie o tom neříká nic“, když veřejné shrnutí naznačuje, že jiné faktory nebyly hlavní.

**4. Co znamená “shoda s tématem” operacionálně**  
Bez plného textu asi nevíte přesně, ale článek mohl říct, že nevíme, zda šlo o lexikální podobnost, semantickou relevanci, pokrytí intentu apod. To je pro praktiky důležité.

---

## Verdikt

**Poctivost vůči studii:** převážně ano, ale se dvěma sklouznutími:  
- autor občas z omezených informací vyvozuje silnější praktické soudy, než by měl,  
- u vlastních doporučení je místy obranně-alibistický.

**Metodologický výklad:** v hlavním bodě správný; rozdíl mezi citation choice a celým řetězcem je popsán dobře.

**Alibismus:** ano, částečně. Autor se korektně brání přestřeleným závěrům, ale zároveň si tím trochu moc pohodlně chrání vlastní dřívější doporučení.

**Užitečnost:** nezmizela, ale mohla být vyšší. Článek je cenný hlavně jako brzda proti špatnému čtení studie, méně jako vytěžení toho, co studie skutečně ukazuje.