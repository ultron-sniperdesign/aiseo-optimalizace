1. **Příliš silný absolutní titulkový claim o nepřítomnosti**
   - **Citace:** `title: "Discover: report o funkci, kterou Google nepopsal"`
   - **Problém:** Tvrzení „Google nepopsal“ je kategorické. Z podkladů plyne jen to, že **na ověřené stránce nápovědy k tomuto reportu** Google funkce nejmenuje. To je tvrzení o nepřítomnosti a musí být užší.
   - **Návrh:** `Discover: report o funkci, kterou Google v nápovědě k tomuto reportu nepojmenovává`  
     nebo kratší `Discover: report o funkci, kterou Google v této nápovědě nepojmenovává`

2. **Stejný problém v perexu / description**
   - **Citace:** `description: "Search Console má zobrazení pro generativní AI v Discoveru. Nikde ale neuvádí, které funkce to jsou — a dává o rozměr míň než u Vyhledávání."`
   - **Problém:** „Nikde ale neuvádí“ je širší, než co máte doloženo. Máte doloženou konkrétní nápovědu, ne celé univerzum materiálů Googlu.
   - **Návrh:** `... V nápovědě k tomuto reportu ale neuvádí, které funkce to jsou ...`

3. **Krátká odpověď opět používá příliš široké „nikde“**
   - **Citace:** `Google v nápovědě neuvádí, které funkce to jsou... Podle novinářských zdrojů jde nejspíš o AI přepisování titulků, Google to ale nikde nespojuje.`
   - **Problém:** První půlka je ještě přijatelná, druhá zase nadsazuje rozsah ověření. „Nikde nespojuje“ by vyžadovalo systematické projití celé dokumentace a veřejných vyjádření.
   - **Návrh:** `... Google to ale v ověřené nápovědě k reportu nespojuje`  
     případně `... v dostupném primárním zdroji to nespojuje`

4. **Statistika „0 funkcí“ je podaná absolutně**
   - **Citace:** `label: "funkcí, které Google v nápovědě k Discover reportu jmenovitě uvádí"`
   - **Problém:** Tohle je skoro správně, ale formulace „k Discover reportu“ může splývat s celou dokumentací. U hlavní teze o nepřítomnosti je potřeba být pedantsky přesný.
   - **Návrh:** `label: "funkcí, které Google jmenovitě uvádí na ověřené stránce nápovědy k Discover zobrazení"`

5. **FAQ 1 znovu příliš široce uzavírá nepřítomnost**
   - **Citace:** `Google to ve své nápovědě k reportu neuvádí.`
   - **Problém:** Slabší problém než výše, ale u takto citlivé teze bych i zde zúžil referent.
   - **Návrh:** `Google to na ověřené stránce nápovědy k tomuto reportu neuvádí.`

6. **FAQ 3 podává sekundární zdroje příliš jistě**
   - **Citace:** `Podle novinářských zdrojů z ledna 2026 a navazujících reportáží ano — Google testuje nahrazování titulků od vydavatele titulky vygenerovanými AI a test se rozšířil i do klasických výsledků.`
   - **Problém:** Úvod „Podle novinářských zdrojů“ je správně, ale odpověď začíná přímým „ano“, které z běžného čtení dělá závěr. U sekundárních zdrojů a navíc bez vazby na report je to moc silné.
   - **Návrh:** `Podle novinářských zdrojů to tak nejspíš je: Google měl testovat ...`  
     a druhou větu: `Tyto zdroje také tvrdí, že se test rozšířil i do klasických výsledků.`

7. **FAQ 4 zase příliš jistě z sekundárních zdrojů**
   - **Citace:** `Poznáte to tedy jen ruční kontrolou.`
   - **Problém:** Pokud je premisa „Google neoznačuje přepis“ převzatá ze sekundárních zpráv, nemá z ní plynout bezvýhradné „jen“. To je přesně místo, kde je sekundární tvrzení podáno jistěji, než snese.
   - **Návrh:** `Podle dostupných zpráv to v praxi nejspíš poznáte hlavně ruční kontrolou.`

8. **Sekce „Report o něčem, co není pojmenované“ opět absolutizuje**
   - **Citace:** `U Discoveru nic takového neuvádí.`
   - **Problém:** V kontextu to zní jako „Google nikde neuvádí“. Přitom článek stojí na jedné stránce nápovědy.
   - **Návrh:** `Na ověřené stránce nápovědy k Discover zobrazení nic takového neuvádí.`

9. **Insight „Dostanete počítadlo něčeho, co není definované“ je rétoricky silnější než důkaz**
   - **Citace:** `Dostanete počítadlo něčeho, co není definované.`
   - **Problém:** Jako interpretační zkratka to funguje, ale doslova je to moc silné. Máte doloženo, že funkce nejsou **pojmenované v nápovědě**, ne že nejsou definované vůbec v žádném interním či veřejném materiálu Googlu.
   - **Návrh:** `Dostanete počítadlo něčeho, co není v nápovědě k reportu blíž definované.`

10. **Věcná nepřesnost u způsobilosti / eligibility**
    - **Citace:** `...nebo neotevřel nastavení způsobilosti pro generativní AI.`
    - **Problém:** Tahle formulace zní, jako by existoval konkrétní přepínač či nastavení, které má vlastník webu „otevřít“. To z dodaného research bezpečně neplyne a česky je to navíc nejasné.
    - **Návrh:** Buď vypustit, nebo opatrněji: `...nebo pokud web nesplňuje podmínky způsobilosti, které Google pro tyto funkce vyžaduje.`

11. **Faktická formulace o jedné impresi jde za důkaz**
    - **Citace:** `Číslo tedy podhodnocuje, kolikrát obsah někdo skutečně viděl.`
    - **Problém:** Z pravidla „jedna imprese na výsledek za relaci“ plyne, že metrika může být nižší než počet zobrazení karty. „Skutečně viděl“ je ale silnější, protože ne každé zobrazení karty = skutečné všimnutí/vidění.
    - **Návrh:** `Číslo tedy může být nižší než počet zobrazení karty během relace.`

12. **Stejná nepřesnost znovu ve FAQ**
    - **Citace:** `Číslo proto podhodnocuje, kolikrát obsah někdo skutečně viděl.`
    - **Problém:** Totéž jako výše.
    - **Návrh:** `Číslo proto může podhodnocovat počet zobrazení karty v rámci relace.`

13. **Stejná nepřesnost znovu v chybách**
    - **Citace:** `Číslo je tedy nižší než počet skutečných zobrazení.`
    - **Problém:** U „skutečných zobrazení“ není jasné, co přesně znamenají. V nápovědě máte oporu pro zobrazení výsledku / karty, ne pro psychologické „skutečné vidění“.
    - **Návrh:** `Číslo tedy může být nižší než počet zobrazení karty během jedné relace.`

14. **Vlnovka vs. pomlčka: nekonzistentní zápis znaku**
    - **Citace:** v textu střídavě `„~“ nebo „−“`, v research `~ nebo -`
    - **Problém:** Není jasné, zda jde opravdu o minus, en dash, em dash nebo jiný placeholder. U takto detailní technické poznámky je potřeba citovat znaky přesně podle rozhraní.
    - **Návrh:** Sjednotit na přesnou podobu z UI / nápovědy a nedělat typografické „vylepšení“, pokud nevíte, jaký znak Google skutečně používá.

15. **Příklad PC Gameru je podaný jako ilustrace, ale chce silnější pojistku, že nejde o pravidlo**
    - **Citace:** `Napříč zdroji se opakuje jeden příklad, na kterém je vidět, proč to vydavatele znepokojuje...`
    - **Problém:** Oceňuji, že je přiznáno, že jde o jeden opakovaný příklad. Přesto by mělo být ještě explicitnější, že z jednoho medializovaného případu nelze odvozovat četnost ani běžnost selhání.
    - **Návrh:** Doplnit větu: `Je to ilustrativní případ, ne důkaz, že podobně chybné přepisy jsou běžné nebo systematické.`

16. **Praktické doporučení „pište titulky, které přežijí zkrácení“ není plně podložené tím, co článek řeší**
    - **Citace:** `Pište titulky, které přežijí zkrácení...`
    - **Problém:** Článek řeší hlavně možné **AI přepisování**, ne běžné UI zkracování. Rada sama o sobě není nesmyslná, ale v této podobě míchá dva různé jevy a působí jako zbožné přání.
    - **Návrh:** `Pište titulky s jasným významem už na začátku. Pomůže to jak při běžném zkrácení v rozhraní, tak potenciálně i ve chvíli, kdy systém z titulku vytahuje hlavní sdělení.`

17. **Praktické doporučení „je to jediný způsob, jak to zjistit“ je příliš kategorické**
    - **Citace:** `Je to jediný způsob, jak to zjistit — Google přepis neoznačuje.`
    - **Problém:** Tohle stojí na sekundárních zprávách a na absenci lepší metody, ne na tvrdém primárním důkazu.
    - **Návrh:** `Je to zatím nejpraktičtější způsob, jak si toho všimnout — podle dostupných zpráv Google přepis neoznačuje.`

18. **Závěr znovu podsouvá spojení reportu s přepisováním jako jistější, než je doloženo**
    - **Citace:** `Užitečnější než ta čísla je proto vědomí, co se v Discoveru s vaším obsahem může dít — a že přepsaný titulek nepoznáte jinak než tím, že se podíváte.`
    - **Problém:** První půlka je v pořádku díky „může“. Druhá půlka je opět příliš absolutní a stojí na sekundárních zprávách.
    - **Návrh:** `... a že případný přepsaný titulek pravděpodobně nejlépe odhalíte ruční kontrolou.`

19. **Špatná čeština / stylistika**
    - **Citace:** `Když jsem si ho ale otevřel pořádně, je na něm zajímavější věc než čísla.`
    - **Problém:** „na něm“ je kostrbaté; u reportu přirozeněji „v něm“.
    - **Návrh:** `Když jsem si ho ale otevřel pořádně, je v něm zajímavější věc než čísla.`

20. **Špatná čeština / nevhodný výraz**
    - **Citace:** `Dostanete počítadlo něčeho...`
    - **Problém:** „Počítadlo“ působí hovorově a technicky nepřesně.
    - **Návrh:** `Dostanete metriku něčeho...`  
      nebo `Dostanete souhrn impresí pro něco...`

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**

Jádro článku je silné a většina klíčových faktů z research sedí: chybějící zařízení, jedna imprese za relaci, strop 1 000 řádků, vlnovka/pomlčka v exportu, vyloučení Search Labs i formulace o kartě a karuselu. Hlavní problém je opakovaný: sekundární tvrzení a tvrzení o nepřítomnosti jsou na více místech podaná jistěji, než dovolují zdroje. Po zpřesnění těchto formulací bude text publikačně bezpečný.