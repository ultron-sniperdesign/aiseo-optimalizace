1. **[VYSOKÁ] Frontmatter `title` / `description` / `answer` → titulek a perex slibují „odemknutí košíku“, ale článek je opatrnější a mluví o pravidlech pro crawlery, ne o reálném přístupu zákazníků → navržené znění:**  
   - `title: "Shoptet a AI roboti: jak vlastní pravidla v robots.txt zrušila výchozí zákazy"`  
   - `description: "Měření 47 e-shopů na Shoptetu: explicitní blokaci sledovaných AI robotů jsem nenašel ani jednou. Šest e-shopů jim přidalo vlastní skupinu pravidel a čtyřem tím přestaly platit výchozí zákazy pro vyhledávání, košík a filtrované adresy."`  
   - `answer: "Změřil jsem robots.txt na 47 e-shopech běžících na Shoptetu. Explicitní blokaci sledovaných AI robotů jsem nenašel ani u jednoho. Šest e-shopů jim naopak přidalo vlastní skupinu pravidel — a protože pro robota platí jen jeho nejspecifičtější skupina, čtyřem z nich tím přestaly platit výchozí zákazy pro vyhledávání, košík a filtrované adresy."`

2. **[VYSOKÁ] Hned úvod + sekce „Hlavní nález“ → pro majitele e-shopu je akce schovaná až pozdě; čtenář si odnese zajímavý mechanismus, ale ne okamžitý postup „co mám teď zkontrolovat“ → navržené znění:**  
   Za druhý odstavec přidejte krátký akční box nebo větu:  
   **„Jestli máte na Shoptetu v robots.txt vlastní blok pro GPTBot, ClaudeBot nebo jiné AI roboty, zkontrolujte hned teď, že neobsahuje jen `Allow: /`. Pokud ano, pro daného robota už neplatí výchozí zákazy z obecné skupiny a je potřeba je do jeho skupiny dopsat.“**

3. **[STŘEDNÍ] Checklist na konci → první bod je zavádějící a data ho úplně neunesou: „Pokud je tam jen jeden, máte výchozí stav“ neplatí spolehlivě, protože v datech je i soubor na jednom řádku a několik různých otisků bez AI skupin → navržené znění:**  
   **„Otevřít /robots.txt a podívat se, zda obsahuje vlastní skupiny pro konkrétní roboty. Pokud ne, AI roboti se řídí obecnou skupinou `User-agent: *`. Pokud ano, zkontrolujte, že v jejich skupině nechybí důležité zákazy.“**

4. **[STŘEDNÍ] Checklist na konci, bod 4 → formulace „Výchozí stav pouští všechny“ je moc silná vůči tomu, co článek skutečně dokládá; robots.txt neobsahuje explicitní blokaci, ale zároveň obecná skupina některé cesty zakazuje všem → navržené znění:**  
   **„Rozhodnout se vědomě, koho chcete pustit. Ve výchozím stavu Shoptet sledované AI roboty explicitně neblokuje, ale zároveň pro všechny roboty nastavuje obecné zákazy některých cest.“**

5. **[VYSOKÁ] Sekce „Jak povolení zapsat, aby nezpůsobilo tohle“ → doporučený příklad je příliš krátký vůči hlavnímu sdělení; článek opakovaně říká, že problém je ve ztrátě výchozích zákazů, ale ukázka vrací jen 4 řádky z cca 40 a může vést ke stejnému zjednodušení jako kritizovaná cizí šablona → navržené znění:**  
   **„Pokud vlastní skupinu chcete, nestačí přidat jen `Allow: /`. Do skupiny pro daného robota musíte zkopírovat všechny zákazy, které chcete zachovat — typicky vyhledávání, košík, přihlášení i parametrické a filtrované adresy. Krátká ukázka níže je jen ilustrativní, ne úplný přepis výchozího Shoptet robots.txt.“**  
   A nad kód vložit větu:  
   **„Zkrácený příklad:“**

6. **[STŘEDNÍ] Tabulka „Kolik e-shopů | Skupin v souboru…“ → je datově správná, ale bez mezivěty se hůř čte a ztrácí tempo; čtenář musí dopočítávat, že jde právě o šest problematických e-shopů ze zmíněných šesti → navržené znění:**  
   Před tabulku vložit větu:  
   **„Rozpad těch šesti e-shopů s vlastními AI skupinami vypadá takto:“**

7. **[STŘEDNÍ] Sekce „V robots.txt jsem blokaci AI robota nenašel ani jednou“ → věta „Jediné `Disallow: /` v celém vzorku patří robotu YoudaoBot“ je pro tok textu odbočka a pro Shoptet majitele má malou hodnotu; zdržuje před hlavním nálezem → navržené znění:**  
   **„Explicitní blokaci některého ze sledovaných AI robotů jsem nenašel ani u jednoho e-shopu.“**  
   Poznámku o YoudaoBot případně přesunout do poznámky pod čarou nebo vypustit.

8. **[STŘEDNÍ] Sekce „Vzorek“ → formulace „každý otestoval“ je stylistická chyba a zadrhne čtení → navržené znění:**  
   **„Vzal jsem 125 e-shopů uvedených ve výsledcích soutěže ShopRoku 2025, každý otestoval na otisk Shoptetu v HTML (`cdn.myshoptet.com` a objekt `Shoptet.` v JavaScriptu) a nechal si ty, které na platformě běží.“**  
   nahradit za  
   **„Vzal jsem 125 e-shopů uvedených ve výsledcích soutěže ShopRoku 2025, u každého otestoval otisk Shoptetu v HTML (`cdn.myshoptet.com` a objekt `Shoptet.` v JavaScriptu) a nechal si ty, které na platformě běží.“**

9. **[STŘEDNÍ] Sekce „Server nikoho nefiltruje“ + FAQ „Blokuje Shoptet AI roboty na úrovni serveru?“ → tvrzení v nadpisu je o chlup silnější než metodika; v těle už limitaci poctivě máte, ale nadpis i FAQ odpověď by měly být stejně opatrné → navržené znění:**  
   - Nadpis: **„V naměřeném vzorku jsem nenašel serverovou filtraci podle user-agentu“**  
   - FAQ odpověď první věta: **„V tomhle testu ne.“**

10. **[STŘEDNÍ] Mistake 03 → „Myslet si, že prázdný robots.txt znamená zákaz“ působí mimo, protože článek nikde nepracuje s prázdným robots.txt; řeší výchozí Shoptet soubor a vlastní AI skupiny. To oslabuje spád závěru → navržené znění:**  
   **`title="Myslet si, že AI robota musíte 'povolit' vlastním blokem"`**  
   Text:  
   **„Na Shoptetu to ve výchozím stavu není nutné. Jakmile pro robota vytvoříte vlastní skupinu, přestane se na něj vztahovat obecná skupina `User-agent: *`. Pokud v nové skupině necháte jen `Allow: /`, otevřete mu i cesty, které jste před ostatními roboty zakázali.“**

11. **[NÍZKÁ] Frontmatter `stats` vs. hlavní přínos článku → čísla sedí, ale chybí v nich nejpraktičtější údaj pro skenování: 6/47 se zmínkou AI robota. Místo 44/47 llms.txt bych zvážil, zda není pro tento článek až druhotný → navržené znění:**  
   - ponechat `0 / 47`  
   - přidat nebo nahradit jedním z těchto:  
     **`6 / 47 — e-shopů, které mají v robots.txt vlastní skupinu pro alespoň jednoho AI robota`**  
     **`4 / 6 — e-shopů s vlastní AI skupinou, kterým tím přestaly platit výchozí zákazy`**  
   Pokud chcete zachovat llms.txt, dejte ho až jako třetí stat.

12. **[NÍZKÁ] Sekce „llms.txt“ → obsahově správná, ale pro hlavní linku článku je dlouhá a může část čtenářů odtáhnout od silnějšího robots.txt nálezu → navržené znění:**  
   Zkraťte úvod sekce na:  
   **„Vedle robots.txt jsem změřil i `llms.txt`, protože na něj má Shoptet vlastní pole v administraci. Tady je výsledek:“**  
   Zbytek lze ponechat. Případně zvažte samostatný článek a zde jen kratší box.

13. **[NÍZKÁ] Formulace „otevřel jim navíc odpad“ → je srozumitelná, ale lehce expresivní vůči jinak věcnému tónu článku → navržené znění:**  
   **„chtěl robotům otevřít obsah a otevřel jim navíc i adresy, které měl dosud pro crawlery omezené.“**

14. **[NÍZKÁ] FAQ „Jak tedy povolit AI robota bezpečně?“ → závěr „pokud pro něj nemáte specifičtější zákaz a nefiltrujete ho jinak, projde i podle obecné skupiny“ je správný, ale akčně by pomohla jedna tvrdší věta ve stylu co přesně nedělat → navržené znění:**  
   **„Na Shoptetu ve výchozím stavu mu vlastní skupinu psát nemusíte. Hlavně nepřidávejte samostatný blok jen s `Allow: /`: tím pro daného robota vypnete zákazy z obecné skupiny. Pokud vlastní skupinu chcete, zopakujte v ní zákazy, na kterých vám záleží: vyhledávání, košík, přihlášení a filtrované adresy.“**

15. **[NÍZKÁ] Úplný závěr článku → chybí krátké jednořádkové shrnutí akce; text končí spíš seriálově než servisně → navržené znění:**  
   Na konec přidejte větu:  
   **„Pokud si z článku odnést jedinou kontrolu, otevřete si dnes `/robots.txt` a ověřte, že případná skupina pro GPTBot, ClaudeBot nebo PerplexityBot neobsahuje jen `Allow: /`.“**

### 3 nejdůležitější věci
1. **Zpřesnit titulek, description a answer**, aby neslibovaly „odemknutí košíku“ ve smyslu zákaznického přístupu, ale mluvily přesně o zrušení výchozích zákazů pro crawlery.  
2. **Přidat dřív a výrazněji konkrétní akci pro majitele e-shopu**: zkontrolovat vlastní AI skupiny v robots.txt a neponechat v nich jen `Allow: /`.  
3. **Opravit doporučenou ukázku a checklist**, protože teď mohou část čtenářů zjednodušením znovu svést k chybě, před kterou článek varuje.