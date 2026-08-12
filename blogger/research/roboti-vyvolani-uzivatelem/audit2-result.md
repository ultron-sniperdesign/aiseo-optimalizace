1. **Vážné**  
   **Citace:** „## Roboti, u kterých se na robots.txt nedá spolehnout“, perex/answer: „Když si obsah vyžádá uživatel v konverzaci…“, tabulka nahoře.  
   **Nález:** Hlavní užitná zpráva není do 10 sekund dost ostrá. Čtenář z e-shopu potřebuje hned vědět: „robots.txt nestačí, pokud chcete blokovat, musíte na serveru; pozor, můžete odstřihnout návštěvy“. Teď se to skládá až z více míst.  
   **Návrh:** Přepiš první odstavec i tabulku do rozhodovací zkratky. Např.: „U části AI fetcherů robots.txt nemusí zabrat. Pokud je chcete omezit, řešte to na serveru; počítejte s tím, že tím můžete zablokovat i návštěvy přivedené z AI odpovědí.“ Do tabulky přidej čtvrtý sloupec „Co z toho plyne“.

2. **Vážné**  
   **Citace:** „Citace jsou z oficiální dokumentace…“, „Rozdíl mezi ‚nemusí platit‘ a ‚obvykle ignorují‘“, „## Devět fetcherů Googlu…“  
   **Nález:** První půlka článku dlouho jen převypravuje dokumentaci. Pro čtenáře s třemi minutami je to moc textu, než se dostane k dopadu a akci.  
   **Návrh:** Sloučit úvod, rozdíl formulací a seznam Googlu do jedné kratší sekce „Co to znamená v praxi“. Seznam devíti fetcherů schovat do rozbalovačky, poznámky nebo boxu „Komu se to týká“. V hlavním textu nechat jen: „Google sem řadí i Google-Agent a Gemini Notebook.“

3. **Vážné**  
   **Citace:** „## Kolik českých webů to vůbec řeší“ + tabulka 80 domén.  
   **Nález:** Sekce slibuje relevanci, ale bez interpretace pro rozhodnutí čtenáře je slabší, než zabírá místa. Samotné „5 z 80“ a „0 z 80“ neříká, co má majitel webu udělat jinak.  
   **Návrh:** Buď sekci zkrátit na jeden odstavec se závěrem („většina webů to neřeší, často řeší jen tréninkové boty“), nebo doplnit jasný užitek: „Pokud máte v robots.txt jen GPTBot/Google-Extended, neřešíte tím user-triggered fetchery.“ To je věta, kterou si člověk odnese.

4. **Drobné**  
   **Citace:** „Rozdíl mezi ‚nemusí platit‘ a ‚obvykle ignorují‘“  
   **Nález:** Samostatná H3 je na rozsah i přínos slabá. Vysvětluje jemný jazykový rozdíl, ale pro praktické rozhodnutí nic zásadního nepřináší.  
   **Návrh:** Zkrátit na dvě věty v úvodu nebo v poznámce pod tabulkou. Pokud zůstane, doplň přímý dopad: „Pro provoz webu je závěr stejný: robots.txt není kontrolní bod, na který se dá spoléhat.“

5. **Vážné**  
   **Citace:** „## Co s tím jde dělat“ + checklist.  
   **Nález:** Tohle je klíčová sekce, ale zůstává příliš obecná. Čtenář se dozví „řešte to na serveru“, ne „jak se rozhodnout, zda blokovat“ a „kde začít“.  
   **Návrh:** Přidej krátký rozhodovací postup o 3 krocích, ne obecné rady. Např.: „1) Zjistěte v logách, zda ten provoz vůbec máte. 2) Rozhodněte, jestli vám vadí obsahové využití víc než potenciální návštěvy z AI. 3) Teprve pak nasazujte serverové omezení a měřte dopad.“ To je konkrétní změna chování.

6. **Drobné**  
   **Citace:** „Nepodsouvám těm pěti chybu.“ / „Netvrdím, že ti roboti robots.txt porušují.“ / „podle dokumentace“ / „nedá se spolehnout“  
   **Nález:** Opatrnost se vrací tak často, že brzdí tah textu. Po prvním auditu je text bezpečný, ale místy přehnaně obranný.  
   **Návrh:** Nechat jedno silné vymezení nahoře a jedno v limitech, zbytek škrtat. Konkrétně bych škrtl celou větu „Nepodsouvám těm pěti chybu.“ a zkrátil opakování „podle dokumentace“ tam, kde je kontext už jasný.

7. **Drobné**  
   **Citace:** „Jsou to fetchery vyvolané uživatelem: stránku nestahuje robot, který si prochází web, ale požadavek vzniklý z konkrétní otázky konkrétního člověka v konverzaci.“  
   **Nález:** Věta je těžká a zní definitoricky. Na začátek článku je zbytečně dlouhá.  
   **Návrh:** Zkrátit na: „Jde o fetchery, které nespouští automatický crawl, ale konkrétní požadavek uživatele.“ Pokud chceš lidské vysvětlení, dej ho až druhou větou.

8. **Drobné**  
   **Citace:** „## Limity“ včetně odstavce o `OAI-AdsBot`  
   **Nález:** Sekce je přerostlá vůči jádru článku a část o `OAI-AdsBot` odvádí pozornost. Je to spíš redakční poznámka k jinému textu než limit tohoto článku.  
   **Návrh:** Zkrať limity na 2–3 body: dokumentace, ne behaviorální test; nenáhodný vzorek; seznamy se mění. Odstavec o `OAI-AdsBot` vyhoď nebo přesuň jako interní update do souvisejícího článku.

9. **Vážné**  
   **Citace:** Titulek: „Roboti, u kterých se na robots.txt nedá spolehnout“  
   **Nález:** Titulek je popisný, ale neříká, co má čtenář udělat jinak. Na vstup z vyhledávání je málo rozhodovací.  
   **Návrh:** Zvaž praktičtější variantu, která nese závěr. Např.: „Pro které AI fetchery nestačí robots.txt“ nebo „Kdy robots.txt nestačí: fetchery vyvolané uživatelem“. Udržíš téma a přidáš užitek.

10. **Vážné**  
   **Citace:** Celková struktura: úvod → nuance formulací → seznam Googlu → měření → co dělat → limity → chyby → shrnutí  
   **Nález:** Pořadí není ideální pro čtenáře ve spěchu. Akční část přichází pozdě, zatímco nuance a výčty jsou dřív.  
   **Návrh:** Přeházet na: 1) co je hlavní pointa, 2) co z toho plyne pro web/e-shop, 3) kterých robotů se to týká, 4) kolik webů to řeší, 5) limity. Sekci „Tři chyby“ buď posuň výš před limity, nebo zcela absorbuj do „Co s tím dělat“, protože teď opakuje už řečené.