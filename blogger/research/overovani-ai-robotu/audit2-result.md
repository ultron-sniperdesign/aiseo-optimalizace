1. **[VYSOKÁ] Perex / úvod → dvě různé „pětice“ hned na začátku brzdí nástup a nutí čtenáře dopočítávat, kdo vlastně je v textu předmětem článku → navržené znění:**
   > V [měření Shoptetu](/blog/shoptet-robots-txt-ai-roboti/) jsem stáhl homepage 47 e-shopů pod jmény pěti AI robotů. Všech 47 vrátilo odpověď 200 — i když šlo o požadavky z běžné IP, která nepatří do žádného oficiálního rozsahu těchto provozovatelů.  
   >  
   > Tady navazuji praktickou otázkou: **jak se identita AI robota ověřuje doopravdy**. Porovnal jsem proto oficiální seznamy IP rozsahů pěti provozovatelů, kteří je pro své roboty zveřejňují: OpenAI, Anthropic, Perplexity, Google a Apple.  
   >  
   > Common Crawl do tohohle srovnání nepatří, protože použitelný oficiální seznam na běžně odkazované adrese nemá. Apple naopak v předchozím testu user-agentů nebyl, ale seznam rozsahů publikuje, takže sem patří.

2. **[VYSOKÁ] Frontmatter `description` a `answer` vs tělo → formulace „ověření se opírá o seznamy IP rozsahů“ je v perexu moc plošná; v těle správně rozlišujete Google a DNS, ale nahoře to splývá → navržené znění:**
   > **description:** "Z běžné IP jsem poslal požadavky pod jmény pěti AI robotů a 47 ze 47 webů odpovědělo. Samotný user-agent tedy nestačí; v praxi se ověření opírá hlavně o oficiální IP rozsahy a u Googlu i o reverzní a zpětný DNS."
   >
   > **answer:** "User-agent si nastaví kdokoli, takže blokovat AI robota podle jména je děravé. Sám jsem z běžné IP, která nepatří do žádného oficiálního rozsahu, poslal požadavky pod jmény pěti AI robotů a všech 47 měřených webů odpovědělo. V praxi se ověření dělá hlavně přes oficiální seznamy IP rozsahů; Google navíc dokumentuje ruční postup přes reverzní a zpětný DNS."

3. **[VYSOKÁ] Úvodní odstavec s „nejlepším důkazem“ → tah tam je, ale věta je zbytečně abstraktní a může působit jako rétorická vsuvka; lepší je říct přímo, co z toho plyne → navržené znění:**
   > **Právě tenhle limit ukazuje pointu nejlépe.** Moje veřejná IP nepatří do žádného z oficiálně zveřejněných rozsahů těchto provozovatelů — a přesto ani jeden ze 47 webů požadavek neodmítl kvůli nesouladu jména robota a adresy. Samotné jméno tedy jako kontrola zjevně nestačí.

4. **[VYSOKÁ] „Jak ověření probíhá“ → čtenář dostane princip, ale ne úplně konkrétní pracovní postup; checklist to zachraňuje až později. Chybí krátký akční rámec přímo v textu → navržené znění:**
   > ## Jak ověření probíhá  
   > Máte IP adresu z logu. Praktický postup je jednoduchý:  
   > 1. podle user-agentu si vytipujete provozovatele,  
   > 2. v jeho dokumentaci najdete oficiální seznam rozsahů,  
   > 3. ověříte, jestli IP do některého prefixu patří,  
   > 4. zkontrolujete datum souboru,  
   > 5. u Googlu můžete výsledek potvrdit ještě reverzním a zpětným DNS.  
   >  
   > Neplatí ale všechny kroky stejně pro všechny: se seznamem rozsahů můžete pracovat u všech pěti, s reverzním a zpětným DNS podle dokumentace u Googlu.

5. **[STŘEDNÍ] Titulek vs obsah → titulek sedí na hlavní pointu, ale článek už není jen „ověřil jsem, že to nestačí“; je z něj i návod, jak ověřovat správně. Titulek teď podprodává užitečnost textu → navržené znění:**
   > **Blokujete AI robota podle jména? Ověřil jsem, proč to nestačí a co kontrolovat místo toho**  
   případně údernější:
   > **User-agent nestačí: jak opravdu ověřit AI robota**

6. **[STŘEDNÍ] Frontmatter `category: "tutorial"` vs tělo → text je napůl analýza, napůl návod. Jako tutorial obstojí až díky checklistu; jinak první půlka působí spíš jako rozbor měření. Pokud kategorii necháváte, pomohlo by rychleji dodat „co s tím dělat“ → navržené znění hned po sekci „Jmenovka není průkaz“:**
   > Pokud v logu vidíte „GPTBot“, „ClaudeBot“ nebo jiného AI robota, praktická otázka není „co říká jmenovka“, ale **jestli sedí adresa**. Následující tabulka ukazuje, z čeho se dnes při ověřování dá vycházet.

7. **[STŘEDNÍ] První odstavec článku → „pod jmény pěti AI robotů — GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot a CCBot“ je přesné, ale CCBot bez okamžitého dovysvětlení znovu otevírá vedlejší kolej. Pro čtenáře tohoto textu není zásadní, kdo byl v minulém testu pátý kus po kuse → navržené znění:**
   > V [měření Shoptetu](/blog/shoptet-robots-txt-ai-roboti/) jsem stáhl homepage 47 e-shopů pod jmény pěti robotů včetně GPTBotu, ClaudeBota a PerplexityBota. Všech 47 vrátilo odpověď 200. Už tehdy jsem ale psal, že šlo jen o test user-agentu z běžné IP.

8. **[STŘEDNÍ] Sekce „Co jsem naměřil“ → dobrá data, ale pointa „co si z tabulky odnést“ přichází až po tabulce. Pro spád by pomohla jednovětá navigace před ní → navržené znění:**
   > Odečet z 8. srpna 2026, deset oficiálních souborů. Pro praxi jsou důležité hlavně tři věci: kdo vůbec publikuje IPv6, jak staré soubory jsou a jak široké rozsahy mají roboti vyvolaní uživatelem.

9. **[STŘEDNÍ] Stat `1 z 5` ve frontmatteru vs tělo → fakticky sedí, ale je lehce nejasný, protože v tabulce je deset souborů a u Googlu tři různé seznamy. Čtenář si může na první pohled říct „jak 1 z 5, když jsou tam tři?“ → navržené znění:**
   > **label:** "provozovatelů mělo v seznamech IPv6 prefixy — pouze Google, a to ve všech třech svých souborech"

10. **[STŘEDNÍ] FAQ „Jak ověření prakticky proběhne?“ vs tělo → FAQ je konkrétnější než hlavní sekce, což je obráceně, než by mělo být. To nejpraktičtější by mělo být v těle a FAQ jen zkracovat → navržené znění do těla, které pak můžete z FAQ zestručnit:**
   > V praxi tedy nezačínejte user-agentem jako důkazem, ale jen jako nápovědou, **který seznam otevřít**. Rozhodující je, jestli zdrojová IP sedí do oficiálně zveřejněného rozsahu; u Googlu si to můžete potvrdit ještě přes DNS.

11. **[STŘEDNÍ] Etická poznámka o podvržených user-agentech → není přehnaná, ale je až moc vzadu a tím pádem působí trochu jako dodatečné krytí zad. Lepší je krátká věta dřív, detail nechat v limitech → navržené znění do prvního odstavce:**
   > Šlo přitom o jeden běžný požadavek na homepage, bez obcházení ochran a bez zátěže; testoval jsem jen to, jestli web identitu robota vůbec nějak ověřuje.
   A v boxu „Limity měření“ pak zkrátit první odstavec:
   > Šlo o **jeden požadavek na homepage** na každý web a user-agent, z běžné IP, bez pokusu obcházet ochranu a bez zátěže. Cílem nebylo něco obejít, ale ověřit, jestli se identita robota kontroluje.

12. **[NIŽŠÍ] „Dnes dostupná praxe“ → formulace je opatrná, ale lehce vatovitá. Lze ji zpřesnit a zpevnit → navržené znění:**
   > V běžně zdokumentované praxi se ověření opírá hlavně o **zdrojovou IP adresu**, u Googlu navíc i o DNS.

13. **[NIŽŠÍ] „Typicky neověříte“ u IPv6 → opatrnost je správná, ale věta může být stručnější a tvrdší bez ztráty přesnosti → navržené znění:**
   > Pokud vám robot mimo Google přijde přes IPv6, proti těmto zveřejněným souborům ho neověříte.

14. **[NIŽŠÍ] Insight „Adresu souboru nehádejte“ → dobrý, konkrétní, ale je dlouhý a zdržuje po hlavních zjištěních. Stačí o chlup zkrátit, aby neubral tempo → navržené znění:**
   > Adresu Anthropiku jsem nejdřív chybně odhadl jako `anthropic.com/claudebot.json` a dostal 404. Neznamenalo to, že rozsahy nezveřejňuje — jen jsem hledal špatně. Správný soubor je na `claude.com/crawling/bots.json` a našel jsem ho až v nápovědě. **Adresu proto nehádejte podle domény; hledejte ji v dokumentaci provozovatele.**

15. **[NIŽŠÍ] Mistake 01 → „podvrženými user-agenty“ je věcně v pořádku, ale zní tvrději než zbytek textu. Pokud chcete méně defenzivní tón, můžete zjemnit bez ztráty pointy → navržené znění:**
   > Sám jsem s běžné IP poslal požadavky pod jmény pěti AI robotů a odpověď 200 jsem dostal od 47 webů ze 47.

16. **[NIŽŠÍ] Závěrečné „Kam to zapadá“ → funguje, ale po silném článku chybí krátké shrnutí jednou větou před rozcestníkem → navržené znění:**
   > Závěr je prostý: **jméno robota berte jako tvrzení, IP adresu jako první ověřitelnou stopu.**  
   >  
   > Tenhle článek uzavírá limit, který jsem si sám přiznal v [měření robots.txt na Shoptetu](/blog/shoptet-robots-txt-ai-roboti/)…

### 3 nejdůležitější věci
1. **Zjednodušit úvod a odsunout vysvětlování dvou různých pětic až za hlavní pointu.**
2. **Přidat konkrétní 4–5krokový postup přímo do sekce „Jak ověření probíhá“, nechat checklist jako shrnutí.**
3. **Srovnat frontmatter s tělem: už nahoře explicitně říct, že ověření stojí hlavně na IP rozsazích a u Googlu navíc na DNS.**