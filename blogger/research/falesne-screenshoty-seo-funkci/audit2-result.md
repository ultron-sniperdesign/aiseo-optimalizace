1. **Research a článek si odporují v kauzalitě vlastního omylu.**  
   Citace research: „**Je to doložený řetěz: falešný screenshot → sekundární texty → můj článek → čtenáři.**“  
   Citace článku / FAQ: „**že jsem ji převzal právě z tohohle případu, je pravděpodobné, ale doložit tu cestu neumím**“  
   Návrh: sjednotit. V research změnit na něco jako: „Je to stejná neexistující funkce; přímý přenos z tohoto případu je pravděpodobný, ale nedoložený.“ Jinak autor píše dvě různé verze téhož.

2. **Silnější, nedoložené tvrzení o kauzalitě zůstalo ve statistikách.**  
   Citace: „**3 měsíce — jak dlouho ta chyba vydržela v jednom článku na tomhle webu**“  
   Problém: v kontextu článku to dál implikuje, že šlo o tutéž chybu převzatou z popsaného řetězce; to ale text jinde výslovně nedokládá.  
   Návrh: zpřesnit na „**jak dlouho na tomhle webu zůstalo chybné tvrzení o této neexistující funkci**“ nebo „**jak dlouho na tomhle webu zůstalo nepravdivé tvrzení se stejným názvem**“; případně statistiku úplně vypustit.

3. **V těle zůstává formulace, která kauzalitu podsouvá silněji, než dovoluje důkaz.**  
   Citace: „**A zpráva přesto žila dál — mimo jiné v jednom článku na tomhle webu**“  
   Problém: věta spojuje přežívání konkrétní zprávy s vaším článkem silněji než pozdější opatrnější formulace.  
   Návrh: „**A stejné nepravdivé tvrzení se později objevilo i v jednom článku na tomhle webu**.“

4. **První krok ověřování není ideálně podaný; `site:support.google.com` funguje, ale není to nejlepší univerzální rada.**  
   Citace: „**Do vyhledávače zadejte `site:support.google.com` a název funkce.**“  
   Problém: funguje jen pro část Google dokumentace; relevantní věci mohou být i na `developers.google.com`, `support.google.com/webmasters`, `blog.google`, `search.google.com` apod. Jako „první krok“ je to zbytečně úzké a může dávat falešné negativy.  
   Návrh: „**Začněte oficiálním help centrem / dokumentací produktu a interním vyhledáním názvu funkce; u Googlu podle produktu hledejte na support.google.com i developers.google.com. `site:` berte jako pomocný trik, ne jako jediné síto.**“

5. **Čtyřkrokový postup míchá „kde hledat“ a „jak silný je důkaz“; pořadí není vždy správně od nejsilnějšího.**  
   Citace: „**jde od nejzávaznějšího k nejméně závaznému**“ + body „Nápověda produktu / Changelog / Oficiální blog / Vyjádření zaměstnanců“  
   Problém: u řady produktů může být changelog nebo release notes závaznější než help článek; někdy novinka bude nejdřív na blogu a help přijde později. Tvrzení je příliš pevné.  
   Návrh: zmírnit na „**obvykle začínám tady**“ nebo „**praktické pořadí, ne neomylná hierarchie**“.

6. **Absolutní závěr „když to nikde není, počítejte s tím, že neexistuje“ je pořád moc tvrdý.**  
   Citace v answer: „**Když funkci nikde u výrobce nenajdete, počítejte s tím, že neexistuje.**“  
   Citace v těle: „**Bezpečnější je počítat s tím, že neexistuje**“ pak naštěstí mírní další větou.  
   Problém: krátká odpověď je tvrdší než tělo a ignoruje rollouty / experimenty / tiché testy, které sám text níž připouští.  
   Návrh: v `answer` i FAQ sjednotit s tělem: „**berte ji jako nepotvrzenou a nestavte na ní práci**“ místo „neexistuje“.

7. **Anonymizace je polovičatá a nedrží vlastní pravidlo.**  
   Citace: „**Jména neuvádím záměrně**“  
   Současně: „**John Mueller z Googlu**“, v FAQ také „**John Mueller z Googlu**“.  
   Problém: buď nejména neuvádíte, nebo uvádíte. Teď to působí nekonzistentně; navíc v research jsou ostatní aktéři dohledatelní jménem, takže anonymizace je jen částečná.  
   Návrh: buď (a) anonymizovat i Muellera na „zaměstnanec Googlu“, nebo (b) přestat tvrdit, že jména neuvádíte, a vysvětlit selektivně: např. „**jmenuji jen veřejně vystupujícího mluvčího výrobce; ostatní aktéry nejmenuji**“.

8. **Článek po zmírněních místy ztrácí ostrost kvůli opakování stejné pointy.**  
   Citace: opakuje se varianta „**ověřte funkci u výrobce**“ v `answer`, FAQ, checklistu, pořadí kroků, Mistake 01 a závěru.  
   Problém: pointa drží, ale text je lehce rozmělněný.  
   Návrh: zkrátit jedno z duplicitních míst — nejspíš FAQ „Jak si ověřím…“ nebo blok „V jakém pořadí hledat“ — a nechat jeden praktický postup + jeden stručný princip.

9. **Drobné věcné / jazykové úpravy.**  
   - Citace: „**AI Overview impact — v některých účtech a rolloutech**“ v research.  
     Návrh: „**v některých účtech a roloutech**“ nebo lépe celé počeštit / nechat bez anglismu podle původní citace.  
   - Citace: „**Případ je dobře doložený a veřejně vyvrácený.**“  
     Návrh: stylisticky čistší „**Případ je dobře doložený a Google ho veřejně vyvrátil.**“  
   - Citace: „**rozhraní i dokument jde upravit v prohlížeči**“  
     Návrh: „**rozhraní i dokumentaci lze upravit v prohlížeči**“ — přesnější.

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**