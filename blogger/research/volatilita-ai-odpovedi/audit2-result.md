1. **Nedůsledné oddělení „zjištění o skupinách“ od „návodu na přeformulování“ zůstalo v závěru a místy ve Stepperu.**  
   - Citace: „**Část toho rozptylu si do testu zaneseme sami tím, jak se ptáme** — aspoň u lokálních dotazů v AI Mode to tak podle studie vypadá.“  
   - Problém: To už zní kauzálně a prakticky („my si ho zaneseme sami“), přestože studie neporovnávala tentýž dotaz ve dvou formulacích.  
   - Návrh: „**Ve studii se rozptyl výrazně lišil mezi dvěma skupinami dotazů podle jejich formulace**; nelze z toho ale přímo vyvodit, že přeformulování téhož dotazu stabilitu zvýší.“

2. **Titulek „Stejný dotaz, jiná odpověď“ je v zásadě doložený, ale článek to má říct přesněji.**  
   - Citace: title „**Stejný dotaz, jiná odpověď. Kolikrát testovat**“; answer „**mezi opakováními téhož obecného lokálního dotazu**…“  
   - Hodnocení: Obstojí, protože research uvádí, že každý dotaz běžel 15× a měřila se shoda mezi běhy. To skutečně dokládá, že **tentýž dotaz vracel rozdílné sady zdrojů/URL**.  
   - Slabina: „jiná odpověď“ je širší než to, co studie měřila; studie měřila hlavně **překryv URL/domén**, ne plné znění odpovědi.  
   - Návrh: buď ponechat, ale v úvodu upřesnit „jiné odkazy / jiné zdroje“, nebo zpřesnit titulek na „**Stejný dotaz, jiné odkazy v odpovědi**“.

3. **Článek je po zmírněních stále použitelný; doporučení z něj jde ven, ale je už na hraně „samé výhrady“.**  
   - Citace: Stepper + answer + FAQ dávají použitelný postup: opakovat, zapisovat poměr, u lokálu měnit místo.  
   - Problém: Kvůli mnoha pojistkám se trochu rozostřuje první krok („ptejte se konkrétně“), protože je uveden jako rada, ale hned zpochybněn.  
   - Návrh: Nechat výhrady, ale přidat jednu holou větu typu: „**Použitelná minima z článku jsou tři: netestovat jednou, zapisovat podíl výskytů a u lokálu testovat více míst.**“

4. **FAQ ještě místy předstírá víc jistoty, než studie unese.**  
   - Citace: „**Protože AI vyhledávání je pravděpodobnostní, ne deterministické. Model… si znovu vybírá, ze kterých zdrojů bude čerpat.**“  
   - Problém: To je silné mechanismové vysvětlení, které studie sama nedokazuje. Studie ukazuje variabilitu výstupů, ne její přesný mechanismus.  
   - Návrh: „**Prakticky se chová nedeterministicky: opakování téhož dotazu vracelo rozdílné sady zdrojů. Přesný podíl příčin studie neřeší.**“

5. **Ve FAQ a Stepperu zůstává normativní rada „ptejte se konkrétně“, která je pořád opřená slaběji než zbytek textu.**  
   - Citace FAQ: „**Při testu se přesto vyplatí ptát se tak konkrétně, jak se ptají vaši zákazníci**…“  
   - Citace Stepper: „**Ptejte se konkrétně**“  
   - Problém: Jako UX/SEO rada je to v pořádku, ale v článku o této studii to snadno vypadá jako empiricky podložený postup ke snížení volatility.  
   - Návrh: Přeznačit první krok Stepperu na „**Testujte formulace, které odpovídají reálným dotazům**“ a v desc vypustit implikaci snížení rozptylu jako hlavní benefit.

6. **Sekce o chybách obsahuje jedno příliš jisté tvrzení.**  
   - Citace: „**Když se čtyři pětiny odkazů mezi dvěma spuštěními vymění, není co stabilně obsadit.**“  
   - Problém: Přehání. I při vysoké volatilitě může být některý zdroj přítomen často; studie neprokazuje, že „není co obsadit“.  
   - Návrh: „**…nedává smysl mluvit o stabilní pozici způsobem, jakým se mluví o klasickém rankingu.**“

7. **Jedna statistika ve frontmatteru je formulovaná zavádějícím součtem.**  
   - Citace: „**5 000 dotazů v měření; každý celkem patnáctkrát, tedy tři běhy v každém z pěti amerických měst**“  
   - Problém: „tři běhy v každém z pěti měst“ zní, jako by každý jednotlivý dotaz běžel ve všech pěti městech; z research plyne spíš 15 běhů celkem v rámci designu s pěti městy. Formulace je nešikovná.  
   - Návrh: „**5 000 dotazů v pěti amerických městech; každý dotaz byl spuštěn 15×**“.

8. **Krátká odpověď je věcně v pořádku, ale „Testujte proto“ je o chlup silnější kauzalita, než by bylo nutné.**  
   - Citace: „**Testujte proto opakovaně a zapisujte rozptyl**…“  
   - Problém: Doporučení je rozumné, jen není přímo „ze studie“ v podobě předepsaného postupu.  
   - Návrh: „**Z toho plyne praktická potřeba testovat opakovaně a zapisovat rozptyl**…“

9. **Poznámka o špatně poznamenaném čísle 70 % je věcně správná a umístění je obhajitelné, ale formulace „Sám jsem si…“ je zbytečně interní.**  
   - Citace: „**Sám jsem si to zpočátku poznamenal špatně a odhalilo se to až u zdroje.**“  
   - Hodnocení: Věcně sedí podle research. Patří do sekce limitů / uvádění metrik na pravou míru.  
   - Návrh: vypustit osobní vsuvku a nechat čistě věcně: „**Často se to cituje chybně; původní zdroj mluví o obměně stránek v čase, ne o variabilitě téhož dotazu mezi běhy.**“

10. **Drobná čeština / styl:**  
   - Citace: „**středově kolem 2,5×**“  
   - Problém: „středově“ je neobratné až chybné.  
   - Návrh: „**v průměru zhruba 2,5×**“ nebo „**řádově kolem 2,5×**“.  
   - Citace: „**o kolik to kolísá a na čem to závisí**“ v research/tezi se do článku částečně propisuje.  
   - Problém: „na čem to závisí“ je moc silné vzhledem k jedné studii.  
   - Návrh: v článku důsledně držet „**s čím to ve studii souviselo**“.

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**