1. **Blokující — článek pozdě přechází od „zajímavého zjištění“ k praktickému dopadu pro čtenáře.**  
   **Citace:** „Nejvýraznější rozdíl je u dvojice GPTBot / OAI-SearchBot:“ … „Pravidlo pro GPTBota má dvanáct webů. Jen čtyři z nich mají i OAI-SearchBota.“  
   **Problém:** Čtenář z vyhledávání do tří minut potřebuje hned vědět, proč na tom záleží jemu. To se dozví až v sekci „Proč je to rozdíl“. Úvod teď hlavně popisuje měření.  
   **Návrh:** Už v prvních 2–3 větách doplňte jednovětý důsledek: „Pokud máte v robots.txt jen GPTBota, podle dokumentace OpenAI řešíte trénink, ne zobrazování ve vyhledávání v ChatGPT.“ Tím článek hned splní uživatelský záměr.

2. **Vážné — struktura má dvě závěrové sekce se stejnou funkcí.**  
   **Citace:** „## Co si z toho odnést“ a později „## Shrnutí“  
   **Problém:** Obě sekce dělají závěr. Pro rychlé čtení je to duplicitní: jednou checklist, podruhé textové zopakování téhož.  
   **Návrh:** Sloučit do jedné finální sekce. Například ponechat „Co si z toho odnést“, dát pod ni 3–4 stručné body a poslední odstavec ze „Shrnutí“ začlenit jako krátké uzavření.

3. **Vážné — sekce „U Googlu je to podobné“ odvádí pozornost od hlavního tématu víc, než kolik přináší.**  
   **Citace:** „## U Googlu je to podobné“  
   **Problém:** Titulek i perex slibují hlavně GPTBot vs. OAI-SearchBot. Google je tu vedlejší analogie, ale zabírá samostatnou H2 a dost textu. Čtenář může mít pocit, že článek mění téma uprostřed.  
   **Návrh:** Zkrátit a snížit úroveň na H3 nebo vložený box „Podobný vzorec je vidět i u Googlu“. Nechat jen 2–3 věty s odkazem na související článek nebo tabulku.

4. **Vážné — chybí konkrétní minimální návod „co mám teď udělat na svém webu“.**  
   **Citace:** „Rozhodněte se, co vlastně nechcete“ / „trénink, zobrazení v odpovědi, nebo obojí?“  
   **Problém:** To je správný rámec, ale pořád obecný. Čtenář po dočtení neví, jak vypadá praktický další krok během dvou minut.  
   **Návrh:** Přidejte krátkou sekci nebo box „Rychlá kontrola za 60 sekund“:
   - otevřete `/robots.txt`,
   - najděte `GPTBot`,
   - zkontrolujte, zda tam je i `OAI-SearchBot`,
   - pokud řešíte Google, ověřte i Search Console, ne jen robots.txt.  
   To je konkrétní akce, kterou si čtenář odnese.

5. **Drobné — některé mezititulky jsou slabší než obsah pod nimi.**  
   **Citace:** „### Nula v opačném směru“  
   **Problém:** Titulek je novinářsky zkratkovitý, ale pro skenujícího čtenáře málo výmluvný. Neříká, čeho se „opačný směr“ týká.  
   **Návrh:** Přepsat na něco jako „Samotný OAI-SearchBot se ve vzorku neobjevil“ nebo „Kombinace jen OAI-SearchBot byla nulová“.

6. **Drobné — jazyk místy zbytečně natahuje jednoduché sdělení.**  
   **Citace:** „OpenAI to ve své dokumentaci rozděluje jasně.“ / „Za pozornost stojí i prázdný řádek:“  
   **Problém:** Jsou to výplňové náběhy před informací. V rychlém čtení zdržují.  
   **Návrh:** Škrtnout náběhy a začít rovnou informací:  
   - místo „OpenAI to ve své dokumentaci rozděluje jasně“ rovnou „Podle dokumentace OpenAI GPTBot řeší trénink a OAI-SearchBot zobrazení ve vyhledávání v ChatGPT.“  
   - místo „Za pozornost stojí i prázdný řádek“ rovnou „Kombinace jen OAI-SearchBot se ve vzorku nevyskytla.“

7. **Drobné — opakuje se tatáž opatrnostní formulace častěji, než je nutné.**  
   **Citace:** „Neznám záměr žádného z těch webů a netvrdím ho.“ / „Jestli by ji někdo chtěl a jen na ni nepřišel, nebo o ni nikdo nestojí, z měření nepoznám.“ / „Proč, nevím“ / „To nastavení z robots.txt nevidím, takže o něm netvrdím nic.“  
   **Problém:** Po prvním auditu je zjevně snaha nepodsouvat záměr, ale v tomto kole už to působí repetitivně a brzdí tah textu.  
   **Návrh:** Nechat jedno jasné metodické upozornění nahoře a jedno v limitech. Ostatní zkrátit nebo vypustit, pokud nepřidávají novou nuanci.

8. **Drobné — sekce o parseru je pro běžného čtenáře z vyhledávání málo přínosná a rozbíjí tok článku.**  
   **Citace:** „Kontrola parseru, která odhalila mou chybu“  
   **Problém:** Je to poctivá transparentnost, ale pro tříminutového čtenáře je to interní výrobní poznámka uprostřed hlavního textu.  
   **Návrh:** Přesunout do poznámky pod čarou, do metodiky, nebo na konec sekce „Limity a metodika“. V hlavní lince ponechat jen výsledky.

9. **Vážné — článek splňuje slib titulku, ale krátká odpověď a článek nejsou úplně sladěné v tom, co je hlavní takeaway.**  
   **Citace:** answer: „Podle dokumentace OpenAI se ta dvě pravidla týkají různých věcí…“  
   a v textu: „Dneska jsem se podíval na to, co je v těch souborech reálně nasazené…“  
   **Problém:** Krátká odpověď staví jako hlavní sdělení rozdíl funkcí obou botů. Tělo článku ale dlouho staví jako hlavní sdělení samotné měření. To jsou dvě různé priority.  
   **Návrh:** Srovnat prioritu: buď v answer víc zdůraznit nález vzorku, nebo v úvodu těla víc zdůraznit praktický rozdíl obou pravidel. Ideálně obojí spojit do jedné věty.

10. **Drobné — chybí jedna konkrétní doplňující tabulka nebo minibox, který by dramaticky zvýšil užitečnost.**  
   **Citace:** „u OpenAI jsou tři roboti se třemi různými dopady; GPTBot je jen jeden z nich.“  
   **Problém:** Článek na to odkazuje, ale nenechá čtenáři minimální orientaci přímo na stránce. Musí klikat jinam.  
   **Návrh:** Přidat přímo sem malý přehled „Robot → co podle dokumentace ovlivňuje“ alespoň pro:
   - GPTBot → trénink,
   - OAI-SearchBot → vyhledávání v ChatGPT,
   - ChatGPT-User → uživatelské akce / fetch.  
   Stačí tři řádky; zvýší to samostatnou použitelnost článku.

Dobré beze změny: centrální číselný nález je srozumitelný a zapamatovatelný hned po první tabulce.