1. **Blokující**  
   **Citace:** „**Kdo blokuje GPTBota, většinou nechává ChatGPT hledat dál**“ / „Osm webů z dvanácti tedy podle dokumentace vyřešilo trénink a **zobrazení ve vyhledávání ChatGPT nechalo být**.“  
   **Problém:** Přeskok z konfigurace `robots.txt` k tvrzení o reálném „hledání dál“. Z článku plyne jen to, že 8 webů nemá ve vzorku pravidlo pro `OAI-SearchBot`; ne že se skutečně zobrazují nebo „nechávají hledat dál“.  
   **Návrh opravy:**  
   - Titulek: „Kdo má v robots.txt GPTBota, často nemá OAI-SearchBota“  
   - V textu: „Osm webů z dvanácti má podle dokumentace ošetřený trénink, ale ve vzorku nemá pravidlo pro OAI-SearchBota, který OpenAI popisuje pro zobrazení ve vyhledávání ChatGPT.“

2. **Blokující**  
   **Citace:** „**Nikdo tedy nezvolil** ‚na mně se klidně trénujte, ale nezobrazujte mě‘.“  
   **Problém:** Podsouvání záměru měřeným webům. Data ukazují jen nepřítomnost kombinace `jen OAI-SearchBot`, ne vědomou volbu.  
   **Návrh opravy:** „Ve vzorku se nevyskytla kombinace `jen OAI-SearchBot`. Z toho ale nelze vyvozovat, jestli by ji někdo vědomě chtěl, nebo jen nepoužil.“

3. **Vážné**  
   **Citace:** „**Když se u OpenAI něco nastaví, začne se vždycky tréninkem.**“  
   **Problém:** Nepodložené zobecnění. Ze vzorku 80 webů plyne jen to, že všechny nalezené konfigurace OpenAI s nějakým pravidlem obsahovaly `GPTBot`; ne že „se vždycky“ začíná tréninkem obecně.  
   **Návrh opravy:** „V tomto vzorku všechny nalezené konfigurace OpenAI obsahovaly `GPTBot`, takže nastavení u OpenAI zde vždy začínalo pravidlem pro trénink.“

4. **Vážné**  
   **Citace:** `description`: „Jen čtyři z nich mají i OAI-SearchBota, a ten podle dokumentace **řeší zobrazení v ChatGPT**.“  
   **Problém:** Zkratka je příliš kategorická. V těle článku je přesnější formulace „ve výsledcích vyhledávání v ChatGPT“. Frontmatter to zjednodušuje na celé „zobrazení v ChatGPT“.  
   **Návrh opravy:** „Jen čtyři z nich mají i OAI-SearchBota, který podle dokumentace řeší zobrazení ve výsledcích vyhledávání v ChatGPT.“

5. **Vážné**  
   **Citace:** `answer`: „Podle dokumentace OpenAI přitom GPTBot řeší trénink a teprve OAI-SearchBot **zobrazení ve výsledcích vyhledávání v ChatGPT**.“  
   **Problém:** Chybí připomenutí metodického omezení hned v krátké odpovědi. V answer se z konfiguračního měření snadno stává praktický závěr.  
   **Návrh opravy:** „Ve vzorku 80 českých webů má pravidlo pro GPTBota dvanáct z nich, ale jen čtyři mají zároveň OAI-SearchBota. Podle dokumentace OpenAI se ta dvě pravidla týkají různých účelů; článek ale měří jen přítomnost pravidel v robots.txt, ne skutečné chování robotů.“

6. **Vážné**  
   **Citace:** „**co lidé skutečně nastavují**“  
   **Problém:** Nepřesné vzhledem ke vzorku. U 47 e-shopů jde o jednu platformu s výchozím `robots.txt`, tedy často spíš o to, co nechali výchozího, ne co „skutečně nastavují“.  
   **Návrh opravy:** „co je na těchto 80 webech v robots.txt skutečně nasazené“ nebo „co se na těchto webech reálně vyskytuje“.

7. **Vážné**  
   **Citace:** „Pravidlo pro `Google-Extended` má **deset webů z osmdesáti**. **Zároveň s Googlebotem ho má jeden.**“  
   **Problém:** Chybí vysvětlení, proč je souběh s Googlebotem relevantní a jak parser počítá „pravidlo pro Googlebot“. Bez toho je věta vytržená a může mást.  
   **Návrh opravy:** „Pravidlo pro `Google-Extended` má deset webů z osmdesáti. Současně výslovné blokovací pravidlo pro `Googlebot` má z těchto deseti jen jeden web.“

8. **Drobné**  
   **Citace:** „**Nejzajímavější je pár, u kterého dokumentace rozlišuje, ale praxe skoro ne**:“  
   **Problém:** Vata a neurčitost. „praxe skoro ne“ je vágní a marketingově zkratkovité.  
   **Návrh opravy:** „Nejvýraznější rozdíl je u dvojice GPTBot / OAI-SearchBot:“

9. **Drobné**  
   **Citace:** „**Bytespider vede i na širším vzorku** — potvrzuje to dřívější měření na 33 médiích.“  
   **Problém:** „širší vzorek“ je matoucí. Aktuálních 80 domén je širších než dřívějších 33 médií, ale formulace zní, jako by 33 bylo „širší“.  
   **Návrh opravy:** „Bytespider vede i v tomto větším vzorku 80 domén; navazuje to na dřívější měření 33 médií.“

10. **Drobné**  
    **Citace:** „**Podle dokumentace to řeší trénink, ne zobrazení v odpovědích.**“  
    **Problém:** Zkratka „v odpovědích“ není v článku všude konzistentní s přesnějším „ve výsledcích vyhledávání v ChatGPT“.  
    **Návrh opravy:** „Podle dokumentace to řeší trénink, ne zobrazení ve výsledcích vyhledávání v ChatGPT.“

11. **Drobné**  
    **Citace:** `faq` „**Na širším vzorku 80 domén** to byl Bytespider…“  
    **Problém:** Stejná nepřesnost jako výše; „širší“ je bez opory v porovnávané větě a zní referenčně nejasně.  
    **Návrh opravy:** „V aktuálním vzorku 80 domén to byl Bytespider…“

12. **Drobné**  
    **Citace:** „**rozdíl mezi „netrénujte na mně" a „nezobrazujte mě" se v praxi skoro nenastavuje**“  
    **Problém:** Přehnané zobecnění z jednoho nenáhodného vzorku a jednoho dne.  
    **Návrh opravy:** „V tomto vzorku se samostatné pravidlo pro OAI-SearchBot objevuje výrazně méně často než pravidlo pro GPTBota.“