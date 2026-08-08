1. **[ZÁVAŽNOST střední] Frontmatter `title` / `description` / `answer` → tvrzení o stránkování je silnější než tělo unese → navržené znění:**  
   V titulku i perexu je „**Stránkování ne**“ a „**není ošetřené vůbec**“, ale tělo správně říká, že **to není automaticky chyba** a že jde hlavně o to, že stránka 2 je samostatně indexovatelná a bez canonicalu. To je významový posun od popisu stavu k hodnotícímu soudu.  
   **Navržené znění:**  
   - `title`: **"Filtry na Shoptetu jsou ošetřené. Stránkování zůstává samostatně indexovatelné"**  
   - `description`: **"Měření 47 e-shopů: filtrované adresy zakazuje robots.txt a typicky na ně nevede odkaz. Zato strana 2 kategorie je index,follow, bez rel=canonical a v sitemapě chybí."**  
   - `answer`: **"Změřil jsem kategorie na 47 e-shopech běžících na Shoptetu. Filtrované adresy jsou ve vzorku kryté robots.txt a obvykle na ně nevede odkaz z kategorie. Druhá strana kategorie u 30 měřených případů neměla rel=canonical, byla index,follow a nebyla v sitemapě."**

2. **[ZÁVAŽNOST střední] Úvod + nadpis „Stránkování: nikdo se o něj nestará“ → poplašné podání závěru, který si článek sám mírní → navržené znění:**  
   Formulace „**Stránkování není ošetřené vůbec**“ a „**nikdo se o něj nestará**“ působí jako alarm, ale o pár odstavců dál článek poctivě přiznává, že **absence canonicalu sama o sobě není vada**. To je nekonzistentní tón.  
   **Navržené znění:**  
   - v úvodu místo: **„Filtry jsou ošetřené dvakrát. Stránkování není ošetřené vůbec.“**  
     použít: **„Filtry jsou ve vzorku ošetřené zřetelněji než stránkování. U stránkování jsem našel samostatně indexovatelné strany bez rel=canonical.“**  
   - nadpis sekce místo: **„Stránkování: nikdo se o něj nestará“**  
     použít: **„Stránkování: samostatně indexovatelné strany bez rel=canonical“**

3. **[ZÁVAŽNOST střední] FAQ „Musím na Shoptetu řešit filtrované adresy?“ → přehnané tvrzení „Robot tedy nemá jak…“ → navržené znění:**  
   Odpověď říká: „**Robot tedy nemá jak na ty adresy narazit.**“ To je silnější, než data unesou. Sám článek i primární zdroj B připouští, že URL se může objevit i jinak, typicky přes **externí nebo interní odkazy odjinud**, a při blokaci robots.txt může být stále ve výsledcích. Data ukazují jen to, že **na kategorii většinou odkaz není** a že **robots.txt URL zakazuje**.  
   **Navržené znění:**  
   **"V měřeném vzorku obvykle ne jako prioritu. Výchozí robots.txt zakazuje parametry jako priceMin, order, parameterId, manufacturerId nebo pv a dd. A co je stejně důležité: na kategorii na filtrovanou adresu většinou nevede odkaz, protože filtry jsou zaškrtávátka ve formuláři. Z této konkrétní kategorie se na ně tedy crawler běžně nedostane; adresa se ale může objevit i jinak, například pokud na ni někdo odkáže."**

4. **[ZÁVAŽNOST střední] FAQ „Mám dát na filtrované adresy noindex?“ + dvě místa v těle → technicky nepřesný popis vztahu robots.txt a noindex vůči části B → navržené znění:**  
   V textu je několikrát „**vzájemně se vylučují**“, „**jedno druhé vypíná**“. To je příliš absolutní a technicky méně přesné než Google zdroj v části B. Přesněji: **pokud je stránka blokovaná robots.txt, crawler noindex neuvidí**. Nejde o symetrické „vyloučení“ obou pravidel, ale o to, že **blokace procházení zabrání přečtení noindexu na té stránce**.  
   **Navržené znění:**  
   - FAQ odpověď: **"Ne, pokud je adresa zároveň blokovaná v robots.txt. Dokumentace Googlu říká přímo, že když crawler stránku kvůli robots.txt neotevře, pravidlo noindex na ní neuvidí. Taková stránka se navíc stále může objevit ve výsledcích, pokud na ni vedou odkazy. Pokud tedy chcete použít noindex, stránka musí být pro crawler přístupná."**  
   - v těle místo: **„Zákaz v robots.txt a `noindex` se tedy vylučují — jedno druhé vypíná.“**  
     použít: **„Pokud je stránka blokovaná v robots.txt, crawler na ní `noindex` neuvidí. Pro tuto konkrétní URL tedy `noindex` prakticky nefunguje.“**  
   - v Mistake 02 místo: **„Jedno pravidlo tam druhé vypíná.“**  
     použít: **„Je-li stránka blokovaná v robots.txt, crawler se k `noindex` na ní nedostane.“**

5. **[ZÁVAŽNOST drobná] Tělo, sekce o filtrech → formulace „druhá ochrana“ je zavádějící → navržené znění:**  
   „**Filtry jsou ošetřené dvakrát**“ a „**Tím zrušíte tu druhou ochranu**“ zní, jako by šlo o dvě rovnocenné technické vrstvy ochrany. Ve skutečnosti druhá věc není ochranný mechanismus platformy v tomtéž smyslu, ale **pozorovaný fakt, že v HTML kategorie typicky nejsou odkazy na parametrické URL**.  
   **Navržené znění:**  
   - místo: **„Filtry jsou ošetřené dvakrát“**  
     použít: **„Ve vzorku působí proti indexaci filtrových URL dva praktické faktory“**  
   - místo: **„Tím zrušíte tu druhou ochranu.“**  
     použít: **„Tím změníte druhý praktický faktor: na zakázané URL nově začne vést odkaz.“**

6. **[ZÁVAŽNOST drobná] Sekce „Filtry: zakázané a navíc neodkazované“ → zkratka od naměřeného „43/46 bez odkazu“ k obecnému „Filtry na Shoptetu nejsou odkazy“ → navržené znění:**  
   Data ukazují 43/46 bez odkazu a 3/46 s odkazy. Věta „**Filtry na Shoptetu nejsou odkazy**“ je zbytečně absolutní, když vzorek sám našel výjimky.  
   **Navržené znění:**  
   **"Ve většině měřených kategorií nejsou filtry realizované jako běžné odkazy na parametrické URL, ale jako zaškrtávátka ve formuláři."**

7. **[ZÁVAŽNOST drobná] FAQ „Co je špatně na stránkování?“ → první věta je v konfliktu se zbytkem odpovědi → navržené znění:**  
   Odpověď začíná „**Nic není špatně**“, ale hned poté popisuje relevantní technický nález. Čtenář to může chápat jako rétorické uhýbání. Lepší je jasně oddělit **naměřený stav** od **hodnocení**.  
   **Navržené znění:**  
   **"Nejde nutně o chybu, ale o důležitý technický stav. Druhá strana kategorie nemá v měřeném vzorku rel=canonical ani jednou ze třiceti, má meta robots index,follow, má vlastní titulek se slovem Strana a robots.txt ji nezakazuje. Je to tedy samostatně indexovatelná stránka s výpisem produktů, kterou platforma vytvořila za vás."**

8. **[ZÁVAŽNOST drobná] Sekce o stránkování → formulace „o kterých nikdo neřekl vyhledávači, co si o nich má myslet“ je nepřesná → navržené znění:**  
   To je rétoricky silné, ale technicky ne úplně přesné. Vyhledávač dostává signály: `index,follow`, interní navigaci přes `rel=prev` a zřejmě i odkazy v rámci stránkování. Chybí jen některé jiné signály, zejména `rel=canonical` a zápis v sitemapě.  
   **Navržené znění:**  
   **"Dohromady to znamená, že strana 2, 3 a 4 vaší kategorie jsou samostatně indexovatelné stránky s výpisem produktů. Neviděl jsem u nich rel=canonical a v dostupných sitemapách se neobjevovaly."**

9. **[ZÁVAŽNOST drobná] Metodická pasáž o vlastní chybě → poctivé přiznání je dobré, ale může být ještě pevněji navázané na kontrolu proti dílu 2 → navržené znění:**  
   Přiznání chyby je obecně poctivé a je na správném místě v metodice. Dobré je ale explicitněji připomenout, že **opravu potvrzuje shoda rozdělení pravidel s dřívějším měřením**, ne jen pocit „nula pravidel je nemožné“.  
   **Navržené znění:**  
   **"Ještě jedna věc k metodice: první průchod měl chybu. Skript načítal robots.txt pod špatným klíčem, takže seznam zákazů vyšel prázdný a filtrování kandidátů podle něj neproběhlo. Nesedělo to už na základní kontrolu proti druhému dílu, kde 31 z 47 e-shopů mělo výchozí robots.txt se 40 pravidly. Klíč jsem opravil a celé měření zopakoval; čísla níž jsou pouze z opraveného průchodu."**

10. **[ZÁVAŽNOST drobná] Frontmatter `faq` vs. tělo → FAQ o noindexu je tvrdší než hlavní text → navržené znění:**  
    FAQ říká „**noindex na ní je mrtvý kód**“, což je zkratka, ale technicky by mělo být stejně opatrné jako tělo a část B.  
    **Navržené znění:**  
    **"Když je adresa blokovaná v robots.txt, crawler se k noindexu na ní nedostane, takže tento signál pro Google prakticky nefunguje."**

11. **[ZÁVAŽNOST drobná] Tělo, věta „Kategorie se tváří přesně tak, jak má.“ → příliš normativní soud bez opory v datech → navržené znění:**  
    Data ukazují, že strana 1 má self-canonical a `index,follow`; neprokazují obecné „jak má“.  
    **Navržené znění:**  
    **"Na straně 1 jsem ve vzorku viděl konzistentní stav: self-canonical a meta robots index,follow ve všech 46 případech."**

12. **[ZÁVAŽNOST drobná] FAQ „Je absence canonicalu na stránkování chyba?“ → vhodné doplnit, že článek neměřil dopad v indexu → navržené znění:**  
    To už je uvedeno v limitech měření, ale v FAQ by to pomohlo, protože právě tam čtenář čeká interpretační závěr.  
    **Navržené znění:**  
    **"Sama o sobě ne. Google od roku 2019 nepoužívá rel=next a rel=prev jako indexační signál a stránkované stránky bere jako samostatné dokumenty. Já jsem navíc neměřil, zda jsou tyto adresy skutečně v indexu, jen to, jaké signály vydává samotný e-shop."**

### 3 nejdůležitější věci
1. **Zjemnit headline a perex o stránkování** — teď jsou poplašnější než samotné závěry článku.  
2. **Opravit výklad robots.txt vs. noindex** — ne „vzájemně se vylučují“, ale „při blokaci crawler noindex neuvidí“.  
3. **U filtrů nepsat absolutně „robot nemá jak“** — data ukazují neodkazovanost z kategorie, ne nemožnost objevení URL obecně.