Níže druhý audit čistě na **čtenáře, řemeslo a použitelnost**.

---

## [BLOKER] Chybí přesná navigace v Cloudflare; „tutorial“ bez toho není tutorial
> „V AI Crawl Control je záložka Crawlers s tabulkou robotů žádajících o přístup.“  
> „U každé z nich jsou tři volby: blokovat na všech stránkách, blokovat jen na stránkách s reklamou, nebo neblokovat.“

**Proč je to problém:**  
Netechnický majitel webu podle toho neví, **kam kliknout**. Ví, že něco existuje, ale ne kde to v administraci Cloudflare najde. U článku v kategorii tutorial je to zásadní nedostatek. Takhle čtenář spíš pochopí téma, než že něco reálně nastaví.

**Konkrétní návrh:**  
Doplňte do „Postup“ minimálně orientační cestu v rozhraní, i kdyby byla opatrně formulovaná kvůli změnám UI. Např.:

- „V Cloudflare otevřete svůj web.“
- „Hledejte sekci **Security / Bots / AI Crawl Control** (Cloudflare názvy v rozhraní průběžně mění, takže použijte i vyhledávání v administraci).“
- „Otevřete přehled kategorií **Search / Agent / Training**.“
- „V záložce **Crawlers** se podívejte, kteří roboti o přístup žádali.“
- „U každé kategorie nastavte volbu a uložte.“

Jestli to nechcete rozepisovat do detailu bez screenshotů, přidejte aspoň větu typu:  
**„Názvy položek v menu se můžou měnit; hledejte v administraci výraz `AI Crawl Control`.“**

---

## [BLOKER] Není jasné, co má udělat majitel EXISTUJÍCÍ domény
> „Od 15. září 2026 se to mění pro nově zakládané domény… což je důvod se do té doby podívat, co máte.“  
> „Nastavte to vědomě do 15. září.“

**Proč je to problém:**  
Text správně opravuje paniku kolem 15. 9., ale pak ji znovu trochu vyrábí formulací „nastavte to vědomě do 15. září“. Čtenář s existující doménou potřebuje slyšet **jednu jasnou větu**:  
- mění se to automaticky i mně?  
- nebo jen novým doménám?  
- musím něco udělat hned, nebo jen zkontrolovat stav?

Teď je to rozptýlené na více místech a snadno z toho vyjde falešný pocit naléhavosti.

**Konkrétní návrh:**  
Přidejte hned do úvodu nebo do sekce „Co se změnilo a proč to má termín“ krátký box / větu:

**„Máte existující doménu? Nepropadejte panice: 15. 9. se nové výchozí nastavení týká nově zakládaných domén. U existující domény si hlavně zkontrolujte současný stav a případně si ho nastavte vědomě.“**

A v Stepperu přepište krok 5. Místo:
> „Nastavte to vědomě do 15. září“

radši:
> **„Pokud máte existující doménu, zkontrolujte si nastavení; pokud zakládáte novou, počítejte po 15. září s jinými výchozími hodnotami.“**

---

## [WARNING] Po auditu #1 je text místy až moc „úřední“; opakované „podle Cloudflare“ dusí rytmus
> „Dnes jsou podle Cloudflare…“  
> „Cloudflare sám uvádí…“  
> „Blokace Training podle Cloudflare…“  
> „Smíšené roboty podle Cloudflare…“

**Proč je to problém:**  
Atribuce je správně, ale ve větší hustotě z textu dělá zápis z tiskovky. Čtenář nepotřebuje být každé dva odstavce upozorněn, že jde o tvrzení Cloudflare. Stačí to říct tam, kde jde o interpretaci nebo neověřené dopady. Jinde to zdržuje.

**Konkrétní návrh:**  
Nechte atribuci tam, kde:
- citujete důvod Cloudflare,
- mluvíte o chování smíšených robotů,
- popisujete výchozí stavy a termíny.

Naopak ji uberte tam, kde stačí kontext z předchozí věty. Např.:

Místo:
> „Cloudflare sám uvádí jako důvod, proč nechává Search povolený…“

stačí:
> **„Jako důvod, proč nechává Search povolený, Cloudflare uvádí…“**

Místo:
> „Blokace Training podle Cloudflare zasáhne i roboty…“

po předchozí citaci stačí:
> **„Blokace Training tak zasáhne i roboty…“**

---

## [WARNING] Stepper duplikuje frontmatter howto i okolní text; přidává málo nové hodnoty
> howto.steps  
> a pak znovu celý `<Stepper ... />`

**Proč je to problém:**  
Stejný obsah je třikrát:
1. answer / perex,  
2. howto frontmatter,  
3. Stepper v těle.

Pro čtenáře je to repetitivní. Pro tutorial je lepší, když kroková část přinese **konkrétní akci navíc**, ne jen znovu přeříká shrnutí.

**Konkrétní návrh:**  
Buď:
- zkraťte Stepper na 3–4 skutečně akční kroky,
- nebo nechte Stepper a osekejte howto texty v frontmatteru na stručnější verzi.

Doporučená podoba Stepperu:
1. Otevřete v Cloudflare svůj web a najděte AI Crawl Control  
2. V Crawlers si ověřte, kteří roboti k vám chodí  
3. Rozhodněte Search / Agent / Training  
4. Zkontrolujte, jestli nechcete omylem odříznout i smíšené roboty

Krok s 15. zářím patří spíš jako poznámka než samostatný akční krok.

---

## [WARNING] Nadpis „Past, kterou většina návodů přejde“ je na hraně clickbaitu
> „## Past, kterou většina návodů přejde“

**Proč je to problém:**  
Samotný obsah pod tím je důležitý a věcný, ale nadpis zní marketingověji než zbytek článku. U netechnického publika funguje konkrétnost líp než teaser.

**Konkrétní návrh:**  
Přejmenujte na něco, co rovnou řekne problém:
- **„Blokace Training může zasáhnout i Search“**
- **„Co se stane u smíšených robotů“**
- **„Proč blokace Training nemusí jít oddělit od Search“**

Tohle je užitečnější než „past“.

---

## [WARNING] Redundance kolem „tří kategorií“, „smíšených robotů“ a „15. září“
> „rozlišuje Search, Agent a Training“ — opakuje se v title/description/answer/úvodu/howto/FAQ/těle  
> „smíšené roboty“ — howto, Insight, Stepper, MistakeGrid, FAQ, závěr  
> „15. září“ — stats, answer, howto, FAQ, H2, Stepper, závěr

**Proč je to problém:**  
Hlavní myšlenky jsou jasné už brzy. Další opakování nepřidávají jistotu, jen nafukují text. Netechnický čtenář potřebuje **jednou vysvětlit, podruhé ukázat dopad, potřetí dát akci**. Tady je to spíš čtyřikrát až pětkrát totéž.

**Konkrétní návrh:**  
Zkraťte zejména:
- FAQ k 15. 9. — pokud už je to dobře vysvětlené v těle, FAQ má jen potvrdit, ne znovu celé přepsat,
- závěr — stačí dvě věty, ne další kompletní rekapitulace,
- Stepper krok 4 a Mistake 01 se částečně překrývají; nechte oba jen pokud jeden je „co se stane“ a druhý „jaké je časté špatné očekávání“.

---

## [DOPORUČENÍ] Chybí jednoduché rozhodovací vodítko pro netechnika
> „Nedoporučuje blokovat ani nechat. To je obchodní rozhodnutí…“

**Proč je to problém:**  
Správně se vyhýbáte univerzálnímu doporučení. Jenže netechnický čtenář aspoň potřebuje **rámec rozhodnutí**, jinak zůstane u „je to složité“. Teď je článek věcně opatrný, ale prakticky mu chybí mini-rozcestník.

**Konkrétní návrh:**  
Přidejte krátký blok typu „Jak se rozhodnout během 2 minut“:

- **Chcete maximálně omezit použití obsahu pro modely?** Začněte kontrolou Training.  
- **Záleží vám, aby vás AI nástroje mohly citovat nebo používat při odpovědích?** Pozor na smíšené roboty.  
- **Monetizujete hlavně reklamou?** Zvažte variantu „blokovat jen na stránkách s reklamou“.  
- **Nemáte data o přínosu AI návštěvnosti?** Nejdřív měřte, až pak blokujte.

To není leták ani investiční rada; je to použitelné vodítko.

---

## [DOPORUČENÍ] Věta o 402 je mimo hlavní úkol článku
> „Blokovanému robotovi můžete vrátit klasickou odpověď 403, nebo 402 s vlastním textem…“

**Proč je to problém:**  
Je to zajímavé, ale pro netechnického čtenáře to v tomhle místě otevírá další téma, které článek stejně neřeší. Může to odvést pozornost od hlavní akce: najít nastavení a zvolit kategorii.

**Konkrétní návrh:**  
Buď to vyhoďte úplně, nebo přesuňte do sekce „Kde má tenhle článek hranice“ / poznámky pod čarou. Pokud to necháte, tak jen jednou větou:
> „Cloudflare umí místo prosté blokace vracet i 402, ale to už je jiné rozhodnutí než samotné povolení/blokace.“

---

## [DOPORUČENÍ] „Jak to souvisí s robots.txt“ je užitečné, ale poslední věta přeskakuje do dalšího detailu
> „Cloudflare u povolených robotů dokonce umožňuje soulad s robots.txt vynutit…“

**Proč je to problém:**  
Sekce má dobře vymezit rozdíl mezi vrstvami a odkázat na starší článek. To plní. Poslední věta ale přidává další schopnost Cloudflare bez návodu, kde ji najít nebo kdy ji použít. To je napůl otevřené téma.

**Konkrétní návrh:**  
Buď tu větu smažte, nebo ji doplňte o proč:
> „Pro většinu majitelů webů tady stačí vědět jediné: robots.txt je signál, Cloudflare je vynucení.“

To drží článek v hranicích.

---

## [WARNING] „Kde má tenhle článek hranice“ je rozumné, ale blok je moc dlouhý a brzdí tah
> „Neřeší jiná CDN…“  
> „Nemapuje jména robotů…“  
> „Nedoporučuje blokovat ani nechat…“  
> „Nejde do zpoplatnění přístupu…“

**Proč je to problém:**  
Po praktické části přichází čtyři disclaimery za sebou. To znovu vrací text do opatrného, obranného tónu. Jedna až dvě hranice stačí; zbytek může být rozpuštěný do textu nebo pryč.

**Konkrétní návrh:**  
Zkraťte blok na 2 body:
- Je to návod ke Cloudflare, ne k jiné CDN.
- Neřeší mapování jmen robotů; to je záměr.

Větu o „nedoporučuje blokovat ani nechat“ přesuňte do závěru. Beta program klidně vyhoďte; pro tenhle článek není nosný.

---

## [KOSMETIKA] „jede přes Cloudflare“ je hovorové, ale u netechnika ještě snesitelné; jinde jsou kostrbatější formulace
> „Bez Cloudflare před webem je zbytek bezpředmětný.“  
> „Automatická činnost jednající v reálném čase za konkrétního člověka.“  
> „co váš web vlastně má nastaveno“

**Proč je to problém:**  
Nejde o chyby, spíš o občasnou topornost. Některé věty zní přeloženě nebo úředně.

**Konkrétní návrh:**  
Uhladit:
- „Bez Cloudflare před webem…“ → **„Pokud web neběží přes Cloudflare, tenhle návod přeskočte.“**
- „Automatická činnost jednající…“ → **„Automatická akce, kterou AI dělá v reálném čase za konkrétního uživatele.“**
- „co váš web vlastně má nastaveno“ → **„jaké nastavení váš web teď má“**

---

## [KOSMETIKA] Závěr už znovu opakuje článek místo jasného „co udělat teď“
> „Prakticky vás zajímají dvě věci…“  
> „Kdo z AI kanálu nic nemá…“

**Proč je to problém:**  
Na konci by měl čtenář dostat krátké uzavření s akcí. Teď je závěr pořád spíš výkladový.

**Konkrétní návrh:**  
Zkraťte na 3 věty:
1. Zkontrolujte, jestli v Cloudflare AI Crawl Control vůbec máte a jaké je aktuální nastavení.  
2. U Training počítejte s tím, že může zasáhnout i smíšené roboty.  
3. Máte-li existující doménu, 15. 9. neznamená automatickou změnu, ale je to dobrý termín pro kontrolu.

---

## [DOPORUČENÍ] CTA navazuje jen napůl
> „Nevíte, jestli vám z AI nástrojů vůbec někdo chodí, a co by blokace stála? AI SEO audit…“

**Proč je to problém:**  
Logika je správná: článek končí u „nejdřív měřte“. Audit na to navazuje. Ale Wireframe Pack je sem přilepený bokem; článek neřeší tvorbu stránek ani wireframy.

**Konkrétní návrh:**  
Nechte hlavní CTA jen na audit. Wireframe Pack buď pryč, nebo jen jako druhá nenápadná věta bez stejné váhy. Např.:
> „Pokud nejdřív potřebujete zjistit, jestli vám AI kanál něco přináší, dává smysl začít [AI SEO auditem](/audit/).“

---

## [WARNING] Vnitřní logika je většinou v pořádku, ale jedna formulace může mást
> „Vlastní nastavení si přitom může kdokoli zvolit kdykoli před tímto datem…“  
> vs.  
> „Vlastní volbu si můžete nastavit kdykoli předtím.“

**Proč je to problém:**  
Zní to, jako by po 15. 9. už volbu nastavit nešlo. Vy přitom zřejmě chcete říct, že **před tím datem je dobré to zkontrolovat**, ne že pak nastavení zmizí.

**Konkrétní návrh:**  
Přepsat na:
> **„Nastavení si můžete upravit i sami; 15. září je důležité hlavně kvůli novým výchozím hodnotám u nových domén a konci starého přepínače.“**

Tím odstraníte falešné omezení.

---

# VERDIKT: **OPRAVIT PŘED PUBLIKACÍ**

Článek je po faktické opravě solidní, ale **na kategorii tutorial ještě není dost použitelný**. Největší problém: čtenář po přečtení spíš ví, co se děje, než že by bezpečně věděl, **kam v Cloudflare jít a co přesně zkontrolovat**, zvlášť u existující domény.

## 4 prioritní zásahy
1. **Dopsat orientační cestu v Cloudflare UI** a udělat z postupu skutečný návod.  
2. **Jednou větou velmi jasně oddělit nové vs. existující domény**, aby 15. 9. nevyvolávalo zbytečnou paniku.  
3. **Proškrtat redundanci** mezi answer / howto / Stepper / FAQ / závěrem.  
4. **Zcivilnit tón po auditu #1**: méně opakovaného „podle Cloudflare“, méně disclaimerů, konkrétnější H2 místo teaserů.