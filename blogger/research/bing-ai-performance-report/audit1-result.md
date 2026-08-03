1. **Příliš silné tvrzení o trendech ze vzorku**
   - **Citace:** „**Microsoft ale sám uvádí, že data jsou jen vzorek celkové aktivity, takže se z nich nedá počítat podíl ani trend.**“ + v těle „sledovat, jestli citací přibývá nebo ubývá“
   - **Problém:** Vnitřní rozpor. Jednou říkáte, že trend počítat nejde, jinde doporučujete sledovat směr v čase. Z citace Microsoftu plyne jen to, že jde o **sample of overall citation activity**; z toho nelze automaticky dovodit, že trend nejde vůbec použít. Bez další metodické informace od Microsoftu je bezpečnější mluvit o **orientačním signálu směru**, ne kategoricky o nemožnosti trendu.
   - **Návrh opravy:**  
     - `answer`: „... takže se z nich nedá počítat podíl a **časový vývoj je potřeba brát jen orientačně**.“  
     - FAQ „Jsou ta čísla úplná?“: „... nedá se z něj počítat podíl vůči konkurenci a **časovou řadu nelze brát jako přesnou metriku; nanejvýš jako signál směru**.“

2. **„Google to nedává“ v titulku je zkratka na hraně**
   - **Citace:** `title: "Bing ukazuje, na co se AI ptá. Google to nedává"`
   - **Problém:** V článku správně rozlišujete, že Bing dává **grounding queries** a Google **neposkytuje dotazy**. Titulek ale zní absolutně a bez upřesnění může sugerovat, že Google „nedává“ celý typ reportu nebo AI data obecně. To je rétoricky silnější než doložený fakt.
   - **Návrh opravy:**  
     - „Bing ukazuje, **jakými frázemi si AI hledá podklad. Google ne**“  
     - nebo „Bing ukazuje grounding queries. Google je nedává“

3. **Tvrzení o „jediných datech na úrovni dotazů“ je epistemicky moc široké**
   - **Citace:** „**Je to zároveň jediná data na úrovni dotazů, která některý z oficiálních reportů o AI viditelnosti dnes dává.**“
   - **Problém:** To je tvrzení o neexistenci napříč „některým z oficiálních reportů“. Z podkladu máte bezpečně ověřené Bing a Google. Nemáte ale v textu oporu, že jste systematicky prošel všechny oficiální reporty všech relevantních platforem. I kdyby to dnes byla pravda, formulace je zbytečně definitivní.
   - **Návrh opravy:**  
     - „**V oficiálních reportech Bingu a Googlu jsou to dnes jediná takto konkrétní data na úrovni dotazových frází.**“  
     - nebo „**Nenarážím na jiný srovnatelný oficiální report, který by to dával také, ale tohle tvrzení je fér vztáhnout hlavně na Bing vs. Google.**“

4. **„Tahle část, kterou jinde nenajdete“ je opět moc absolutní**
   - **Citace:** v checklistu: „Grounding queries ... **Tohle je ta část, kterou jinde nenajdete.**“
   - **Problém:** Stejný typ problému jako výše. Bez opory, že „jinde“ znamená opravdu všechny oficiální reporty, je to přetažené.
   - **Návrh opravy:**  
     - „**Tohle je část, kterou nenajdete v reportu Googlu a kterou Microsoft odlišuje nejvíc.**“

5. **Řádek „Úplnost dat“ ve srovnávací tabulce není úplně fér jako přímé srovnání**
   - **Citace:** „Úplnost dat — left: **přiznaný vzorek**, right: **neuvedeno**“
   - **Problém:** Tohle není srovnání stejné vlastnosti, ale srovnání „Microsoft něco explicitně řekl“ vs. „u Googlu jste to nenašel / není to v podkladu uvedeno“. To může čtenář číst jako implicitní plus pro Bing nebo implicitní výtku vůči Googlu, aniž by šlo o stejný typ informace.
   - **Návrh opravy:**  
     - přejmenovat řádek na „**Co vendor říká o úplnosti dat**“  
     - hodnoty: „**výslovně uvádí vzorek**“ vs. „**v ověřeném podkladu neuvedeno**“  
     - totéž v textu závěru: místo „... je poctivější než čísla, u kterých se o úplnosti mlčí“ raději „... je metodicky cenné, že to Microsoft výslovně přiznává; u Googlu v ověřeném podkladu ekvivalentní větu nemám.“

6. **Závěr je lehce nefér ke Googlu**
   - **Citace:** „**Přiznaný vzorek je vlastně dobrá zpráva — je poctivější než čísla, u kterých se o úplnosti mlčí.**“
   - **Problém:** To už není doložený fakt, ale hodnotící soud. Z toho, že v ověřeném podkladu u Googlu taková věta není, neplyne, že Google „mlčí“ ve smyslu nepoctivosti. Může jít jen o nesrovnatelnou dokumentaci nebo jinou metodiku.
   - **Návrh opravy:**  
     - „**Přiznaný vzorek je metodicky užitečná informace. Zároveň to znamená, že čísla nejdou číst jako úplný objem.**“

7. **Praktické doporučení je málo konkrétní na to, aby bylo opravdu proveditelné**
   - **Citace:** „**Porovnejte je s nadpisy a otázkami na svých stránkách. Když se míjejí, máte konkrétní zadání pro obsah**“
   - **Problém:** Jako obecná rada dobré, ale chybí konkrétní postup, co přesně porovnávat. Grounding queries podle Microsoftu nejsou uživatelské dotazy, ale interní fráze modelu; „míjení“ tedy nemusí znamenat, že máte přepsat H1. Bez konkrétnější instrukce může rada svádět k přepisování obsahu podle doslovných frází.
   - **Návrh opravy:** doplnit 2–3 praktické kroky, např.:  
     - „Hledejte, jestli se v grounding queries opakují entity, atributy a podotázky, které na stránce chybí.“  
     - „Nesnažte se fráze opisovat doslova; spíš doplňte vysvětlující mezititulky, definice, srovnání a FAQ k tématům, která se v nich opakují.“  
     - „Ověřte pak, jestli se mezi citovanými URL objevují stránky, které tyto podotázky skutečně pokrývají.“

8. **„Když se vaše stránky trefují do dotazů uživatelů, ale ne do těchhle frází, je to vysvětlení, proč se necitujete.“ je moc jisté**
   - **Citace:** v Insightu „... **je to vysvětlení, proč se necitujete.**“
   - **Problém:** To je příčinné tvrzení navíc. Microsoft definoval grounding queries, ale neřekl, že nesoulad s nimi je vysvětlení necitování. Citace může ovlivňovat víc faktorů.
   - **Návrh opravy:**  
     - „... **může to být jedno z vysvětlení, proč se citace neobjevují častěji.**“

9. **„Pokrytí ploch“ v FAQ je formulováno přesněji než v tabulce, tabulka ale může svádět k dojmu úplného výčtu**
   - **Citace:** FAQ: „**Pokrývá Microsoft Copilot, AI shrnutí v Bingu a nejmenované partnerské integrace.**“ / research: „**select partner integrations**“
   - **Problém:** Fakticky to sedí. Jen bych hlídal, aby tabulky a text vždy nesly tentýž odstín opatrnosti: nejde o všechny partnery, ale o „select partner integrations“.
   - **Návrh opravy:**  
     - v tabulce „Plochy“ u Bingu: „**Copilot, AI shrnutí v Bingu, vybrané nejmenované partnerské integrace**“

10. **Věta „ani jeden z nich nedává kliky, CTR ani návštěvnost“ je z části nedoložená u Bingu formulací zdroje**
    - **Citace:** „**ani jeden z nich nedá kliky ani návštěvnost**“ + v research „**O klicích, CTR ani návštěvnosti post nemluví vůbec.**“
    - **Problém:** U Googlu to zřejmě máte ověřené v jeho reportu. U Microsoftu ale z vašeho podkladu plyne jen to, že blogpost o tom nemluví. To není totéž jako jistota, že report to nikde v rozhraní nedává. Pokud jste to neověřil přímo v UI nebo dokumentaci, je formulace moc definitivní.
    - **Návrh opravy:**  
      - „**V ověřených podkladech jsem u žádného z nich nenašel kliky ani CTR; u Bingu blogpost návštěvnost ani neřeší.**“  
      - nebo pokud jste UI opravdu kontroloval, doplňte to do research a nechte původní formulaci.

11. **Drobná jazyková chyba**
    - **Citace:** „To mění všechno, co se s tím **čísle** dá dělat“
    - **Problém:** Chybné skloňování.
    - **Návrh opravy:** „To mění všechno, co se s tím **číslem** dá dělat“

12. **Další jazyková nepřesnost**
    - **Citace:** „fráze, kterými si AI hledá podklad“
    - **Problém:** Není to vyloženě chyba, ale v češtině je přirozenější „hledá podklady“ nebo „vyhledává podkladový obsah“. „Hledá podklad“ působí trochu kostrbatě, zvlášť při opakování.
    - **Návrh opravy:**  
      - „fráze, kterými si AI **vyhledává podkladový obsah**“  
      - případně zachovat jednou a dál obměňovat.

13. **FAQ a answer používají silnější formulaci než tělo článku**
    - **Citace:** answer: „... **report Googlu neposkytuje vůbec**“; FAQ: „Google ... **žádné dotazy**“
    - **Problém:** Ve vztahu ke Googlu je to v zásadě konzistentní, ale kvůli bodu 3 by bylo lepší všude držet stejnou opatrnou formulaci: že **v reportu Generative AI features** dotazy nejsou.
    - **Návrh opravy:**  
      - „... což **report Generative AI features v GSC** neposkytuje“  
      - „Google v **tomto reportu** dotazy neposkytuje“

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**