1. **VÁŽNÉ — článek místy klouže od „podle dokumentace“ k tvrzení o reálném fungování**
   - **Citace:** „**Google-Extended nevypíná AI Overviews**“; „**GPTBot vás z ChatGPT nevyřadí**“; v tabulce „**OAI-SearchBot | zobrazení ve výsledcích ChatGPT**“
   - **Problém:** Zadání i text tvrdí, že jde o porovnání dokumentace, ne měření chování. Jenže nadpisy a některé formulace jsou napsané jako popis skutečného chování systému, ne jako reprodukce vendor claimů. To je přesně ten rozdíl, který je potřeba hlídat. U Googlu to jde ještě obhájit, protože dokumentace je explicitní. U OpenAI je to citlivější: „will not be shown in ChatGPT search answers“ je tvrzení OpenAI, ne vaše ověřené zjištění.
   - **Návrh:** V exponovaných místech přidat brzdu:
     - „Podle dokumentace Google-Extended nevypíná AI Overviews“
     - „Podle dokumentace GPTBot neřeší zobrazování v ChatGPT search answers“
     - V tabulce změnit sloupec na „Co má podle dokumentace vypnout“.

2. **VÁŽNÉ — formulace o českých médiích je těsně na hraně podsouvání záměru**
   - **Citace:** „**Ale pokud bylo cílem nebýt v AI Overviews, tohle nastavení to nedělá**“
   - **Problém:** Autor sice výslovně píše „Nevím, co tím který z nich sledoval, a nepodsouvám jim to“, což je správně. Jenže hned další větou zavádí hypotetický cíl, který je v kontextu čtenářsky velmi blízko implikaci „nejspíš to dělali kvůli AI Overviews a spletli se“. Není to přímé obvinění, ale je to rétoricky postavené tak, aby si to čtenář snadno domyslel.
   - **Návrh:** Utnout spekulaci úplně:
     - „Z toho samotného nelze vyvozovat motiv. Jisté je jen to, že podle dokumentace Google-Extended neřídí viditelnost v AI Overviews.“
     - Případně dodat: „Mohl to být opt-out z tréninku, interní policy nebo prostě převzatý robots.txt boilerplate.“

3. **DROBNÉ — tvrzení „dva nejrozšířenější“ není v podkladech doložené**
   - **Citace:** „**dva nejrozšířenější nedělají to, co si od nich lidé nejčastěji slibují**“
   - **Problém:** Pro Google-Extended máte vlastní vzorek 9/33, pro Applebot-Extended 5/33. Pro GPTBot v podkladech nemáte nic. „Nejrozšířenější“ je tedy nedoložené, a „co si od nich lidé nejčastěji slibují“ je už čistá domněnka o motivech uživatelů.
   - **Návrh:** Změnit na:
     - „dva často zmiňované přepínače“
     - nebo „dva přepínače, u kterých se často plete účel“.

4. **VÁŽNÉ — stat „0 — vliv Google-Extended na AI Overviews a AI Mode“ je zkratka, ale ne přesná**
   - **Citace:** `value: "0"`, `label: "vliv Google-Extended na AI Overviews a AI Mode — na ty je jiné nastavení"`
   - **Problém:** Čtenář z toho snadno přečte „nulový vliv na AI Overviews/AI Mode jako takové“. Jenže vaše opora je dokumentační tvrzení, že Google-Extended „does not impact inclusion in Google Search“ a že AI je integrální součást Search. To je silný argument, ale pořád je to odvození z dokumentace, ne naměřená nula. Navíc „AI Mode“ v citovaných podkladech taháte spolu s „Search generative AI features“, ale v textu to místy zní, jako byste měli explicitní citaci pro obě plochy zvlášť.
   - **Návrh:** Změnit stat na méně bombastický a přesnější:
     - „0 podle dokumentace: Google-Extended neřídí AI Overviews / AI Mode“
     - nebo úplně pryč; tenhle typ „nuly“ je marketingová zkratka, ne auditně čisté sdělení.

5. **DROBNÉ — FAQ a answer jsou v zásadě konzistentní, ale answer je kategorický víc než tělo**
   - **Citace (answer):** „**Google-Extended řeší trénink a grounding pro Gemini a podle Googlu nemá vliv na Search ani na AI Overviews**“
   - **Problém:** „ani na AI Overviews“ není doslovná citace z crawler dokumentace; je to závěr spojením dvou různých dokumentů. Závěr je rozumný, ale answer to podává jako jednu přímou věc. To je přesně místo, kde autor obvykle přestřeluje.
   - **Návrh:** Rozdělit to:
     - „Google-Extended podle Googlu neovlivňuje Search; AI Overviews a AI Mode Google popisuje jako součást Search, pro kterou platí jiné ovládání.“

6. **DROBNÉ — tabulka v úvodu je skoro v pořádku, ale řádek ChatGPT-User je příliš zploštělý**
   - **Citace:** „**ChatGPT-User | ⚠️ podle dokumentace nemusí platit | —**“
   - **Problém:** Tohle není „co vypne“, ale spíš „na tenhle mechanismus se nedá spolehlivě použít robots.txt jako opt-out“. Tabulka tím míchá ontologicky různé věci: u ostatních popisuje účinek přepínače, tady popisuje nejistotu režimu.
   - **Návrh:** Přepsat řádek:
     - „ChatGPT-User | robots.txt nemusí být spolehlivý opt-out | nelze z dokumentace garantovat blokaci user-triggered fetchů“
     - nebo ten řádek z tabulky úplně vyndat a nechat jen v textu a FAQ.

7. **VÁŽNÉ — „sedm přepínačů“ je nepřesné označení pro ChatGPT-User**
   - **Citace:** titul, stats, vícekrát „**sedm přepínačů**“
   - **Problém:** ChatGPT-User není „přepínač“ ve stejném smyslu jako Google-Extended nebo OAI-SearchBot. Je to user-agent / kategorie provozu, u které navíc sami píšete, že robots.txt nemusí platit. V tu chvíli z něj děláte falešně symetrickou položku v seznamu „opt-outů“, ačkoli právě u ní je pointa, že spolehlivý opt-out nemusí existovat.
   - **Návrh:** Změnit rámec:
     - „sedm mechanismů / kontrol / robotů a přepínačů“
     - nebo „šest přepínačů a jeden problematický případ“.

8. **DROBNÉ — u Search generative AI control by stálo za to hlídat terminologii**
   - **Citace:** „**Na AI Overviews a AI Mode je samostatné nastavení v Search Console**“
   - **Problém:** V podkladu máte citaci o „Search generative AI features“. Pokud dokumentace explicitně nejmenuje v dané větě zároveň AI Overviews i AI Mode, pak je lepší držet se terminologie dokumentace. Jinak zase o krok posouváte „co support říká“ k „jaké konkrétní plochy to jistě zahrnuje“.
   - **Návrh:** „Na generativní AI funkce ve Search je samostatné nastavení v Search Console“ a až pak doplnit „včetně AI Overviews; pokud Google v aktuální nápovědě uvádí i AI Mode, citovat to přesně.“

9. **DROBNÉ — „Přeloženo:“ je trochu moc sebejisté vzhledem k tomu, že jde o interpretační most**
   - **Citace:** „**Přeloženo: AI Overviews a AI Mode jsou součástí Search. Přístup k Search řídí pravidla pro Googlebota**“
   - **Problém:** To není překlad, ale syntéza dvou dokumentů a váš závěr. Závěr je rozumný, ale označit ho jako „přeloženo“ je rétorický trik.
   - **Návrh:** „Z toho plyne:“ nebo „V součtu obou dokumentů Google tvrdí, že…“

10. **DROBNÉ — „To je jiná dohoda než u Googlu“ podsouvá úmysl/policy framing**
    - **Citace:** „**To je jiná dohoda než u Googlu**“
    - **Problém:** „dohoda“ je publicistická zkratka, ne přesný popis dokumentace. Google a Seznam popisují různé dopady různých user-agentů; není to dohoda s vydavatelem v právním ani produktovém smyslu.
    - **Návrh:** „To je jiný dokumentovaný dopad než u Googlu.“

11. **VÁŽNÉ — pasáž o ChatGPT-User je opatrná, ale poslední věta ji zbytečně zatěžuje nepřímo souvisejícím argumentem**
    - **Citace:** „**Sedí to i s tím, že ChatGPT-User má 256 publikovaných IP prefixů proti 21 u GPTBota — je to jiná kategorie provozu.**“
    - **Problém:** Tohle není opora pro tvrzení o robots.txt applicability. Je to vedlejší indicie o infrastruktuře/provozu, ne důkaz k právu nebo technickému respektování robots pravidel. V auditním textu to působí jako nafukování jistoty nepřímým argumentem.
    - **Návrh:** Tu větu vyhodit. Pokud ji chcete nechat, tak jedině s jasným odstupem:
      - „To nic nedokazuje; jen to naznačuje odlišný provozní režim.“

12. **DROBNÉ — FAQ je konzistentní s tělem, ale poslední odpověď je o chlup jistější než limitace článku**
    - **Citace:** „**Pro samotné AI plochy existuje nastavení Search generative AI control v Search Console, které podle nápovědy nezasahuje do běžných výsledků.**“
    - **Problém:** Formálně v pořádku, ale FAQ by mělo explicitně nést stejnou brzdu jako text: jde o to, co říká nápověda, ne o test. Tady to ještě držíte formulací „podle nápovědy“, takže problém je malý.
    - **Návrh:** Nechat, nebo jen lehce zpřesnit „podle aktuální nápovědy“.

13. **DROBNÉ — „žádné dva nedělají totéž“ je zbytečně absolutní**
    - **Citace:** „**Přepínačů je sedm a žádné dva nedělají totéž.**“
    - **Problém:** Jako publicistika to funguje, jako auditně čistá věta méně. Google-Extended, GPTBot a Applebot-Extended mají velmi podobnou roli: training opt-out u různých vendorů. Nedělají totéž v rámci stejného ekosystému, ale funkčně jsou si blízko.
    - **Návrh:** „Každý se vztahuje k jiné platformě a jinému typu použití; nelze je zaměňovat.“

14. **DROBNÉ — „Seznam-Extended jako jediný vypne i návštěvnost“ drží jen v rámci vybraného vzorku sedmi**
    - **Citace:** description, answer, stats, FAQ
    - **Problém:** V těle to jednou máte správně: „**jediný ze sledovaných**“. V metadata/description to zkracujete na obecné „jako jediný“, což je širší tvrzení, než máte podložené.
    - **Návrh:** Všude sjednotit na „jediný ze sledovaných / z porovnávaných sedmi“.

## Verdikt

Článek je **věcně převážně správně postavený na primární dokumentaci**, ale má několik opakujících se nešvarů autora:  
- občas **překračuje od „vendor to tvrdí“ k „takto to je“**,  
- v jedné pasáži **těsně flirtuje s podsouváním motivu českým médiím**,  
- a místy používá **marketingově ostré zkratky** („0 vliv“, „sedm přepínačů“, „žádné dva nedělají totéž“), které jsou publicisticky efektní, ale auditně méně čisté.

Není to průšvih, ale bez úprav bych to nepustil jako precizní odborný text. **Doporučení: publikovat až po zpřesnění formulací v bodech 1, 2, 4, 7 a 11.**