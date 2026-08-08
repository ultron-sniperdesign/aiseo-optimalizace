1. **[VYSOKÁ] Frontmatter `title` / `description` / perex → hlavní sdělení je po zmírňování znovu zbytečně absolutní a lehce zavádějící → navržené znění:**  
   **Problém:** Nadpis „buď má článek data, nebo nemá nic“ je úderný, ale v těle sám připouštíte jeden článek s typem `Article`. Totéž description říká, že u 19 se „kombinace neobjevila, ani její část“, což je v konfliktu s tím jedním článkem s `Article` bez dat a canonicalu. Hlavní teze „přepínač“ zůstává, ale frontmatter ji přepaluje víc, než si tělo může dovolit.  
   **Navržené znění:**  
   - `title:` **"Blog na Shoptetu: u článků se ukázaly dvě větve, ne plynulá škála"**  
   - `description:` **"Měření 30 článků na Shoptetu: 11 má NewsArticle, datum vydání i aktualizace a canonical. U 19 se tahle kombinace neobjevila; jeden další článek nesl jen typ Article."**  
   - případně ostřejší, ale přesné: **"Blog na Shoptetu: 11 článků má celý balík dat, 19 nic z něj a 1 jen typ Article"**

2. **[VYSOKÁ] Frontmatter `answer` → faktická nepřesnost proti tělu → navržené znění:**  
   **Problém:** `answer` tvrdí, že u 19 článků se kombinace „neobjevila ani zčásti; smíšený případ ve vzorku nebyl“. Jenže v těle výslovně uvádíte jeden článek s typem `Article`, tedy smíšený/mezilehlý případ mimo hlavní dvojici. To je přesně ten typ rozporu mezi opraveným tělem a starým frontmatterem.  
   **Navržené znění:**  
   **"Změřil jsem 30 blogových článků na e-shopech běžících na Shoptetu. Jedenáct z nich mělo kombinaci NewsArticle, data vydání i aktualizace a rel=canonical. Devatenáct nemělo ani tuto kombinaci, ani její jednotlivé části z této čtveřice; jeden další článek nesl pouze typ Article bez dat a bez canonicalu. Ve všech třiceti článcích stálo v meta name=author jméno e-shopu, ne konkrétní osoby."**

3. **[VYSOKÁ] Sekce „Hlavní nález: všechno, nebo nic“ → sdělení je silné, ale rozhodnutí pro majitele e-shopu přichází pozdě → navržené znění:**  
   **Problém:** Hlavní nález funguje, ale konkrétní manažerský závěr je schovaný až v Insight boxu. Pro majitele e-shopu má článek skončit rozhodnutím „ověřit / nečekat / zadat úpravu šablony“. To je potřeba říct hned v hlavním toku textu, ne až v doprovodném rámečku.  
   **Navržené znění:**  
   Za odstavec **„Není to škála, je to přepínač.“** vložit větu:  
   **"Praktický závěr je jednoduchý: nepočítejte s tím, že Shoptet blogová data řeší průběžně nebo automaticky. Otevřete zdroj jednoho vlastního článku a během minuty zjistíte, jestli jste ve větvi s NewsArticle, daty a canonicalem, nebo ve větvi bez nich."**

4. **[STŘEDNÍ] Úvod → spád je lepší než v prvním kole, ale první dva odstavce ještě zdržují před nálezem → navržené znění:**  
   **Problém:** Začínáte administrací a nápovědou, což je korektní, ale jako poslední díl série by článek měl rychleji dorazit k výsledku. Úvod může být sevřenější a nápověda až jako opora, ne jako rozjezdová brzda.  
   **Navržené znění:**  
   Místo prvních dvou odstavců:  
   **"U blogových článků na Shoptetu se ve vzorku neukázalo postupné zlepšování, ale dvě oddělené větve. Jedenáct z třiceti článků mělo NewsArticle, datum vydání i aktualizace a canonical. Devatenáct nemělo nic z toho; jeden další nesl jen typ Article. Nápověda Shoptetu tomu dává důležitý kontext: pole pro autora ani datum aktualizace v administraci neuvádí."**

5. **[STŘEDNÍ] Sekce „Co říká nápověda“ → dobrá opora, ale je delší, než potřebuje být vzhledem k hlavnímu nálezu → navržené znění:**  
   **Problém:** Na závěrečný díl série je tahle pasáž trochu široká. Důležité jsou dvě věci: není pole pro autora, není pole pro datum aktualizace. Výčet všech polí v článku může být kratší nebo přesunutý do FAQ.  
   **Navržené znění:**  
   **"Podle nápovědy Shoptetu má článek pole pro název, adresu, text, rubriku, datum zveřejnění, externí odkaz, náhledový obrázek a SEO pole. Pole pro autora ani pro datum aktualizace tam uvedené není. Rubrika navíc umí datum zveřejnění ve výpisu skrýt."**

6. **[VYSOKÁ] Pasáž o stopách z chatu → obsahově správně, ale je umístěná příliš vysoko vůči hlavnímu rozhodnutí článku → navržené znění:**  
   **Problém:** Pasáž je zajímavá a auditně hodnotná, ale pro čtenáře v posledním dílu série není nosná. V současném pořadí bere energii po sekci o datech, kde by měl článek mířit do shrnutí dopadů. Téma chatu je spíš vedlejší hygienický nález.  
   **Navržené znění:**  
   Přesunout sekci **„Tři články ze třiceti nesou stopy po vložení z chatu“** až **za „Další naměřené signály“** nebo ji zkrátit do boxu pod checklistem. Úvodní větu zkrátit na:  
   **"Vedle hlavních zjištění se objevil ještě jeden technický signál: ve 3 z 30 článků zůstaly v HTML atributy typické pro vložení textu přes schránku z chatového rozhraní."**

7. **[STŘEDNÍ] Pasáž o stopách z chatu → míra je těsně na hraně, chce ještě méně interpretace a víc provozní závěr → navržené znění:**  
   **Problém:** Dvakrát po sobě vysvětlujete, co to nedokazuje. To je opatrné, ale natahuje to proud textu. Pro majitele e-shopu je podstatnější, co má udělat.  
   **Navržené znění:**  
   **"Ve 3 z 30 článků zůstaly v HTML atributy jako `data-start`, `data-end` nebo `data-message-author-role`; u jednoho 274krát. Neříká to, kdo text napsal. Říká to, že se do editoru vložil přes schránku i s cizím kódem. Praktický závěr: vkládat jako čistý text a formátovat až v editoru."**

8. **[VYSOKÁ] Sekce „Autor je vždycky e-shop“ → dobrý nález, ale chybí z něj tvrdší rozhodnutí pro čtenáře → navržené znění:**  
   **Problém:** Popisujete limit platformy správně, ale článek by měl dotlačit čtenáře k volbě: buď to neřešit, nebo zadat úpravu šablony a autorské stránky mimo standardní pole.  
   **Navržené znění:**  
   Na konec sekce doplnit:  
   **"Rozhodnutí je tedy binární i tady: buď přijmete, že autorem v datech bude značka, nebo si necháte upravit šablonu a autorské informace začnete řešit mimo výchozí možnosti administrace."**

9. **[STŘEDNÍ] Checklist → je užitečný, ale nevede dost jasně k prioritě kroků → navržené znění:**  
   **Problém:** Všechny body mají stejnou váhu. Pro majitele e-shopu ale nejsou stejně důležité. První tři kroky jsou rozhodovací, zbytek je hygiena.  
   **Navržené znění:**  
   Přepsat pořadí a názvy takto:  
   1. **"Zjistit, zda článek vůbec spadá do větve s NewsArticle, daty a canonicalem"**  
   2. **"Rozhodnout, jestli vám stačí značka jako autor, nebo chcete zásah do šablony"**  
   3. **"Opravit `datetime`, pokud je v českém formátu"**  
   4. **"Vyčistit HTML od atributů po vložení z chatu"**  
   5. **"Zkontrolovat nadpisovou osnovu včetně počtu `h1`"**

10. **[STŘEDNÍ] „Další naměřené signály“ → sekce je trochu odložený šuplík a brzdí dojezd → navržené znění:**  
    **Problém:** Na konci textu už čtenář potřebuje syntézu, ne další várku dílčích čísel. H1 a délka jsou vedlejší a měly by být buď kratší, nebo zapracované do checklistu / limitů.  
    **Navržené znění:**  
    Zkrátit na jednu větu:  
    **"Vedle hlavního nálezu se ukázalo ještě to, že 27 z 30 článků mělo právě jeden `h1`, všechny byly `index,follow` a délka textu se mezi e-shopy výrazně lišila."**

11. **[VYSOKÁ] Závěr série „Konec bloku“ → článek zatím končí hlavně rozcestníkem, ne vlastním dojezdem → navržené znění:**  
    **Problém:** Jako poslední díl pětidílné série potřebuje text vlastní uzavření: co si má majitel Shoptetu odnést jako celek. Teď závěr jen oznamuje konec a odkazuje jinam. To je největší slabina článku jako finále série.  
    **Navržené znění:**  
    Nahradit první odstavec závěru tímto:  
    **"Za pět dní měření se opakovalo totéž: u Shoptetu nerozhodují jemné nuance v nastavení, ale několik tvrdých limitů platformy a šablony. U blogu je to vidět nejlépe — buď máte článek v technicky lépe vybavené větvi, nebo ne. Pokud provozujete obsah, který má přinášet dohledatelnost, důvěru a opakované návštěvy, nestačí předpokládat, že to platforma řeší za vás. Je potřeba to ověřit v kódu a u důležitých věcí rozhodnout, co přijmete a co už je na úpravu šablony."**  
    A teprve potom nechat odkazy na předchozí díly.

12. **[STŘEDNÍ] Poslední odstavec závěru → chybí explicitní „co udělat zítra“ → navržené znění:**  
    **Problém:** Finále série má ideálně skončit krátkým akčním seznamem nebo jednou rozhodovací větou.  
    **Navržené znění:**  
    Přidat závěrečnou větu:  
    **"Jestli si z celé série máte odnést jednu praktickou věc, je to tahle: zkontrolujte jeden produkt, jednu stránku filtrů a jeden blogový článek ve zdroji; během půlhodiny poznáte, které limity jsou jen provozní a které už bez úpravy šablony neobejdete."**

13. **[NÍZKÁ] FAQ „Proč mají články NewsArticle a ne BlogPosting?“ → formulace je správná, ale mohla by víc navazovat na obchodní dopad → navržené znění:**  
    **Problém:** FAQ zůstává u schema.org definice. Pro cílovku je důležitější, že to v tomto textu není hlavní spor; hlavní spor je přítomnost vs. nepřítomnost dat.  
    **Navržené znění:**  
    **"Ve vzorku se tam, kde strukturovaná data byla, objevil typ NewsArticle jedenáctkrát a Article jednou; BlogPosting ani jednou. Samotné měření neřeší, který typ je semanticky nejlepší. Pro praxi je důležitější jiná věc: většina článků ve vzorku neměla ani tento základní balík dat."**

14. **[NÍZKÁ] Formulace „Cizí tvrzení, že ‚Shoptet to dělá automaticky‘, platí pro necelou třetinu“ → zbytečně tvrdý závěr z omezeného vzorku → navržené znění:**  
    **Problém:** Věta je čtivá, ale přestřeluje. Z vašeho vzorku plyne, že jste to potvrdil u 11 z 30 měřených článků, ne že to „platí pro necelou třetinu“ obecně.  
    **Navržené znění:**  
    **"Ve vzorku jsem to potvrdil u 11 z 30 článků. Bez kontroly vlastního zdroje tedy nejde předpokládat, že to váš blog řeší automaticky."**

15. **[NÍZKÁ] Sekce „Vzorek“ + metodická oprava → poctivé, ale na finální tempo ještě o chlup dlouhé → navržené znění:**  
    **Problém:** Oprava metodiky je důležitá, jen ji stačí stáhnout o pár vět.  
    **Navržené znění:**  
    **"Stejných 