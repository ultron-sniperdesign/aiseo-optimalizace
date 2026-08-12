1. **blokující**  
   **Citace:** „**Kolik českých webů** nedá robotovi text bez JavaScriptu“; „Ve vzorku 80 českých domén jsem nenašel jediný web…“; „Pro roboty, kteří nespouštějí JavaScript, to je dobrá zpráva…“  
   **Problém:** Titulek a několik formulací znějí jako závěr o českých webech obecně. Research výslovně říká, že vzorek není náhodný a neříká nic o zbytku webu.  
   **Návrh opravy:** Přepsat titulek i klíčové věty na vzorek. Např.: „**V mém vzorku 80 českých domén** jsem nenašel web, u kterého by hlavní text chyběl v serverovém HTML.“ Titulek: „Co ukázal vzorek 80 českých domén: je hlavní text v HTML bez JavaScriptu?“

2. **blokující**  
   **Citace:** FAQ: „Kolik českých webů nedá AI robotovi text bez JavaScriptu? — **Ve vzorku 80 domén … ani jeden.**“  
   **Problém:** Odpověď přeskakuje z neporovnatelného celku „české weby“ na výsledek z omezeného vzorku. Formálně to zní jako nulový výskyt v populaci.  
   **Návrh opravy:** „**V mém vzorku 80 domén jsem takový případ nenašel.** Neznamená to, že na českém webu neexistuje.“

3. **vážné**  
   **Citace:** „Když příště narazíte na procento o tom, kolik webů je pro AI nečitelných, zeptejte se, **kolik z těch nálezů někdo otevřel a podíval se na ně**.“  
   **Problém:** To už implicitně nastavuje ruční kontrolu jako podmínku validity cizího měření. Research dovoluje ptát se, kolik nálezů ověřili ručně, ale ne tvrdit, že bez toho čísla „se z nich nedá číst“ absolutně.  
   **Návrh opravy:** „… zeptejte se, **jestli a jak byly podezřelé případy ověřené**, a jak autoři pracovali s falešnými nálezy.“

4. **vážné**  
   **Citace:** „Nemám metodiku cizích měření, takže netvrdím, že jsou špatná — **tvrdím jen, že bez odpovědí na tyhle tři otázky se z nich nedá číst**.“  
   **Problém:** Poslední část je příliš tvrdá. Bez znalosti cizí metodiky můžete říct, že se čísla těžko interpretují nebo porovnávají, ne že „se z nich nedá číst“.  
   **Návrh opravy:** „… **bez těchto informací se jejich čísla hůř interpretují a porovnávají**.“

5. **vážné**  
   **Citace:** „Pro roboty, kteří nespouštějí JavaScript, **to je dobrá zpráva**…“  
   **Problém:** Závěr je širší, než data unesou. Měřilo se jen „je začátek odstavce v serverovém HTML“ u jedné stránky na doménu, ne skutečná čitelnost pro konkrétní roboty.  
   **Návrh opravy:** „**V tomhle vzorku to naznačuje, že hlavní text bývá v serverovém HTML.** O skutečné dostupnosti pro konkrétní roboty to samo o sobě nerozhoduje.“

6. **vážné**  
   **Citace:** „curl -sS 'https://vasweb.cz/vas-clanek/' > raw.html — **dostanete přesně to, co dostane robot, který nespouští JavaScript**.“  
   **Problém:** Příliš kategorické. Server může vracet jiný obsah podle User-Agentu, geolokace, cookies, WAF apod. To je důležitý chybějící limit.  
   **Návrh opravy:** „… **uvidíte syrovou HTTP odpověď pro váš požadavek bez JavaScriptu. Nemusí být totožná s odpovědí pro konkrétního robota**.“

7. **vážné**  
   **Citace:** „Stáhněte si ji příkazem curl… **Když ji tam najdete, robot bez JavaScriptu ji dostane taky.**“  
   **Problém:** Stejný přeskok jako výše; navíc je ve frontmatter FAQ.  
   **Návrh opravy:** „Když ji tam najdete, **je to silný signál, že text server posílá už v HTML**. Neznamená to automaticky stejnou odpověď pro každého robota.“

8. **drobné**  
   **Citace:** „Podle veřejného měření z prosince 2024 ho roboti ChatGPT, Claude a Perplexity **stahovali, ale nespouštěli**…“ vs. v těle „podle dostupného měření JavaScript **nespouštějí**.“  
   **Problém:** Frontmatter a tělo nejsou v rozporu, ale formulace míchá historické pozorování s obecným přítomným časem. Chybí časové ukotvení i limit, že chování botů se může změnit.  
   **Návrh opravy:** V obou místech sjednotit: „**V dostupném měření z prosince 2024** JavaScript stahovali, ale nespouštěli. **To se může změnit.**“

9. **drobné**  
   **Citace:** „Napodruhé… **Patnáct z osmdesáti webů** vyšlo jako ‚text chybí‘.“; dále „U mě prošlo automatikou **dvacet tři nálezů**…“  
   **Problém:** Čísla sedí jen nepřímo jako 15 + 8 = 23, ale článek to nevysvětluje. Čtenář může 8 chápat jako podmnožinu 15 nebo jako nové kolo nad 80.  
   **Návrh opravy:** „V druhém kole to bylo **15 z 80**. Ve třetím kole po úpravách algoritmu to bylo **8 z 80**. **Celkem tedy automatika ve dvou kolech vyrobila 23 podezřelých nálezů, ale žádný pravý.**“

10. **drobné**  
    **Citace:** „Nula. A přesně tenhle výsledek je důvod, proč je zbytek článku o něčem jiném, než jsem plánoval.“  
    **Problém:** Vata, autoreferenční obrat, málo informační.  
    **Návrh opravy:** Vyhodit, nebo nahradit jednou věcnou větou: „**Důležitější než samotná nula je, kolik falešných nálezů vyrobila automatika.**“

11. **drobné**  
    **Citace:** „Čísla typu ‚X % webů je pro AI nečitelných‘ se opisují snadno, protože se dobře pamatují.“  
    **Problém:** Klišé a hodnotící vata. Nepřidává data ani limit.  
    **Návrh opravy:** Zkrátit na: „**U podobných procent je důležité vědět, jak vznikla.**“

12. **drobné**  
    **Citace:** Limity neobsahují explicitně: rozdíl odpovědi podle User-Agentu / anti-bot ochrany.  
    **Problém:** Chybí důležitý limit, který čtenář má znát, zvlášť když článek radí test s `curl`.  
    **Návrh opravy:** Do limitů doplnit bod: „**Server může vracet jiný HTML obsah různým klientům podle User-Agentu, cookies, geolokace nebo anti-bot ochrany. Tento test měří jen odpověď, kterou dostal použitý klient.**“