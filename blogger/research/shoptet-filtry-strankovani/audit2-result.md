1. **[VYSOKÁ] Frontmatter `title` / `description` / `answer` → hlavní sdělení je po zmírnění lehce rozjeté mezi „kryje“ a „většinou“ → sjednotit, aby titulek netvrdil víc než text a zároveň neztratil pointu.**  
   **Navržené znění:**  
   - `title: "Na Shoptetu filtry většinou neřešte, zkontrolujte spíš stránkování"`  
   - `description: "Měření 47 e-shopů: filtrované adresy ve vzorku obvykle blokuje robots.txt a z kategorií na ně většinou nevedou odkazy. Strana 2 kategorie byla u 30 případů index,follow, bez canonicalu a mimo sitemapu."`  
   - `answer: "Ve změřeném vzorku Shoptetu nepůsobí filtrové URL jako první SEO priorita: obvykle je blokuje robots.txt a z kategorií na ně většinou nevedou odkazy. Naopak stránkování bylo u všech 30 změřených druhých stran index,follow, bez rel=canonical a mimo sitemapu, takže stojí za vědomou kontrolu."`

2. **[VYSOKÁ] Úvod, 1.–2. odstavec → sdělení drží, ale hedging v druhé větě zbytečně brzdí razanci → zkrátit a převést do rozhodnutí pro majitele e-shopu.**  
   Teď: „Proti indexaci filtrových adres působí ve vzorku dva praktické faktory najednou. U stránkování ani jeden — druhá strana kategorie je samostatně indexovatelná a bez canonicalu.“  
   **Navržené znění:**  
   „**Praktický závěr je jednoduchý:** ve vzorku nevypadají jako první problém filtry, ale stránkování. U filtrů zároveň působí blokace v robots.txt a absence odkazů z kategorií. Strana 2 kategorie je naopak samostatně indexovatelná a bez canonicalu.“

3. **[VYSOKÁ] Sekce „Co jsem měřil — a co ne“ → přiznání chyby v metodice je správně, ale v úvodu bere spád a odvádí od pointy → přesunout níž, ideálně do limitů/metodiky.**  
   První minuty článku mají prodat nález, ne audit skriptu.  
   **Navržené znění:**  
   - V úvodu ponechat jen krátkou větu: „Po opravě chyby v prvním průchodu jsem celé měření zopakoval; dál uvádím už jen opravená data.“  
   - Delší vysvětlení přesunout do závěru pod „Limity měření“ nebo do sbalitelné poznámky:  
   „**Poznámka k opravě měření:** první průchod měl chybu v načtení robots.txt, takže filtrování kandidátů podle zákazů neproběhlo správně. Proto jsem celé měření zopakoval a v článku pracuji jen s opraveným průchodem.“

4. **[VYSOKÁ] Sekce „Co si z toho odnést“ + checklist → článek už dává směr, ale majitel e-shopu si ještě neodnáší jasnou prioritu 1/2/3 → doplnit explicitní rozhodovací rámec.**  
   **Navržené znění před MistakeGrid:**  
   „**Pořadí priorit pro majitele e-shopu:**  
   1. Nejprve ověřte, že z kategorií nevedou odkazy na filtrové URL.  
   2. Pak otevřete stranu 2 kategorie a rozhodněte, jestli chcete, aby byla samostatně indexovatelná.  
   3. Noindex na adresách blokovaných v robots.txt neřešte — ten problém neřeší.“  

5. **[STŘEDNÍ] Nadpis „Kategorie: čistá“ → hodnotící slovo je po auditním zmírnění zbytečně kategorické → nahradit popisně.**  
   „Čistá“ zní jako soud, zatímco zbytek textu je opatrný.  
   **Navržené znění:**  
   `## Kategorie: konzistentní signály na straně 1`

6. **[STŘEDNÍ] „Filtry: zakázané a navíc neodkazované“ → dobrý nadpis, ale následující věta „To by samo o sobě nebylo tak zajímavé“ shazuje vlastní zjištění a brzdí spád → zkrátit bez sebeoslabení.**  
   **Navržené znění:**  
   „Výchozí robots.txt blokuje běžné filtrové a řadicí parametry. **Důležitější ale je, že z kategorií na tyto adresy většinou nevedou odkazy.**“

7. **[STŘEDNÍ] Věta „Robot, který prochází web po odkazech, se k filtrované adrese z téhle kategorie běžně nedostane“ → hedging je v pořádku, ale lze zpřesnit, co přesně zjištění znamená pro praxi → doplnit rozhodnutí.**  
   **Navržené znění:**  
   „Robot, který prochází web po odkazech, se k filtrované adrese z téhle kategorie obvykle nedostane. **Pokud jste si filtry sami neprolinkovali, není to ve vzorku první technická priorita.**“

8. **[STŘEDNÍ] Sekce o stránkování → hlavní nález je silný, ale závěr „Je to rozhodnutí, které za vás udělala platforma“ zůstává trochu popisný → přidejte, co má čtenář udělat.**  
   **Navržené znění na konec sekce:**  
   „**Prakticky:** pokud vám nevadí, že stránkované stránky mohou fungovat jako samostatné dokumenty, je to legitimní stav. Pokud to nechcete, je to bod k vědomému řešení — ne něco, co by bylo rozumné přecházet jen proto, že filtry vypadají hrozivěji.“

9. **[STŘEDNÍ] FAQ „Co je špatně na stránkování?“ → otázka je útočnější než odpověď a vytváří napětí, které text pak mírní → sladit otázku s opatrnějším tělem.**  
   **Navržené znění:**  
   - `q: "Co je důležité vědět o stránkování?"`  
   - `a: "Nejde nutně o chybu, ale o technický stav, o kterém je dobré vědět..."`

10. **[STŘEDNÍ] FAQ „Musím na Shoptetu řešit filtrované adresy?“ → odpověď je správná, ale moc opisuje; chybí jednoznačné „teď ano/ne“ → zpřesnit.**  
    **Navržené znění:**  
    „**Ve změřeném vzorku obvykle ne jako první prioritu.** Výchozí robots.txt blokuje parametry jako priceMin, order, parameterId, manufacturerId nebo pv a dd. Z kategorií na tyto adresy navíc většinou nevedou odkazy, protože filtry fungují jako formulářová zaškrtávátka. Výjimkou je situace, kdy jste si filtrové URL sami prolinkovali nebo na ně vedou odkazy odjinud.“

11. **[STŘEDNÍ] Checklist, bod „Pokud tam žádný nevede, filtry řešit nemusíte“ → formulace je příliš absolutní vůči zbytku textu → zmírnit, ale zachovat rozhodnutí.**  
    **Navržené znění:**  
    „Pokud tam žádný nevede, **ve většině případů to nebude první věc k řešení**. Pokud ano, přidala ho úprava šablony nebo doplněk.“

12. **[NÍZKÁ] Checklist, bod „Sitemapa tedy neříká, že ty stránky existují“ → formulace je nepřesná a může působit matoucím dojmem → sitemapu nepřetěžovat významem.**  
    **Navržené znění:**  
    „Ve vzorku tam nebylo nikde. **Sitemapa je tedy aktivně neposílá jako preferované URL k procházení.**“

13. **[NÍZKÁ] Věta „Ty adresy existují, jen se k nim nedá dojít.“ → zní moc absolutně vzhledem k tomu, že text jinde správně připouští odkazy odjinud → sladit.**  
    **Navržené znění:**  
    „Ty adresy existují, **ale z měřené kategorie se k nim většinou nedá dojít odkazem.**“

14. **[NÍZKÁ] Sekce „Kam tenhle článek patří“ → na konci analytického článku mírně brzdí doznívání hlavního zjištění → pokud není redakčně nutná, zkrátit.**  
    **Navržené znění:**  
    „Článek navazuje na předchozí měření o Shoptetu; související texty najdete níže.“  
    Nebo sekci úplně stáhnout pod automatické „související články“.

15. **[NÍZKÁ] Titulek v těle „Stránkování: samostatně indexovatelné strany bez canonicalu“ → je výstižný, ale lze ho ještě víc přiblížit rozhodnutí čtenáře → volitelné zpřesnění.**  
    **Navržené znění:**  
    `## Stránkování: samostatně indexovatelné stránky, které stojí za kontrolu`

### 3 nejdůležitější věci
1. **Sjednotit frontmatter s tělem:** titulek a perex by měly říkat totéž co článek — ne „filtry kryje“, ale spíš „filtry většinou nejsou první priorita, zkontrolujte stránkování“.  
2. **Přesunout detail o vlastní chybě v metodice níž:** je férový, ale v úvodu zbytečně ubírá spád hlavnímu nálezu.  
3. **Dodat jasnější rozhodnutí pro majitele e-shopu:** explicitně seřadit priority: 1) neprolinkovat filtry, 2) vědomě zkontrolovat stránkování, 3) neřešit noindex na URL blokovaných v robots.txt.