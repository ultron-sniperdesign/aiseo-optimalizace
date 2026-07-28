**BLOKER**  
1. **Neopřený a přehnaný claim o „devíti desetinách práce“.**  
   Citace: „**Je to zhruba devět desetin práce a udělá se jednou.**“ / „**devět desetin práce je společných**“  
   Problém: Číslo působí exaktně, ale v textu není ničím podložené. Navíc rozdíly mezi kanály nejsou jen „v důrazu“: ChatGPT/Bing, Seznam/Firmy.cz, Perplexity/čerstvost, Google AI Mode/query fan-out jsou odlišné mechanismy distribuce a výběru zdrojů. Bez dat je to nadinterpretace.

2. **Příliš silné tvrzení o „pěti hlavních kanálech, které v Česku prakticky rozhodují“.**  
   Citace: „**5 kanálů, které v Česku prakticky rozhodují o AI viditelnosti**“  
   Problém: „prakticky rozhodují“ je neobhájené. Chybí opora, proč zrovna tato pětice a proč ne Bing Copilot / Microsoft Copilot, Gemini jako samostatný vstup, Claude, případně You.com. Jako rozcestník to musí umět obhájit výběr, jinak je to arbitrární.

3. **Nejisté tvrzení o robotech a „on-demand robotech jednotlivých služeb“ jako univerzální podmínce.**  
   Citace: „**V robots.txt nesmí být zablokované vyhledávací a on-demand roboty jednotlivých služeb. Bez toho nepomůže žádná další práce.**“  
   Problém: To je formulované moc absolutně. U některých systémů není transparentní, jak přesně fetching/caching/citace probíhá a přes jaké agenty. „Bez toho nepomůže žádná další práce“ je univerzální mechanika bez doložení. Navíc robots.txt není jediná vrstva; hrají roli i meta robots, x-robots-tag, JS rendering, login wall, canonicalizace.

4. **Nedoložené tvrzení, že všechny kanály „přebírají“ 40–60 slov z úvodu.**  
   Citace: „**Čtyřicet až šedesát slov hned pod nadpisem… Tuhle část přebírají všechny kanály.**“ / „**modely přebírají nejčastěji**“  
   Problém: To je příliš mechanické. Ano, stručná odpověď pomáhá. Ne, není doložitelné takhle univerzálně tvrdit, že „všechny kanály“ přebírají právě tuto část a ještě v rozsahu 40–60 slov. Tohle zní jako pseudo-recept.

5. **ChatGPT redukované na „cesta vede přes Bing“.**  
   Citace: „**cesta vede přes dohledatelnost v Bingu, ne v Googlu**“  
   Problém: Přehnané zjednodušení. U ChatGPT s browsingem je Bing důležitý, ale tvrzení „cesta vede přes Bing“ sugeruje jedinou bránu. To je moc silné na systém, jehož sourcing a retrieval nejsou plně transparentní a mohou kombinovat více vrstev.

6. **Perplexity: „nadprůměrný důraz na čerstvost“ bez opory.**  
   Citace: „**Perplexity klade nadprůměrný důraz na čerstvost.**“  
   Problém: Plausibilní, ale v rozcestníku to vyznívá jako fakt o ranking mechanice. Chybí „často“, „u části dotazů“, „z našich pozorování“. Takhle je to nepřiznaná spekulace.

---

**DOPORUČENÍ**  
1. **Rozcestník má slabou přidanou hodnotu.**  
   Citace: „**Tenhle článek je rozcestník. U každého kanálu najdete krátce to podstatné a odkaz na podrobný návod.**“  
   Problém: Ve stávající podobě je to hlavně komprese pěti existujících článků. Chybí něco, co v detailech není:  
   - rozhodovací strom „který kanál řešit první podle typu firmy“,  
   - společné minimum vs. kanálové rozdíly v jedné matici,  
   - varování „co je doložené vs. co je jen pozorování“,  
   - prioritizace pro malé firmy s omezeným časem.  
   Bez toho je to SEO hub, ne užitečný rozcestník.

2. **Doporučení „začněte roboty a přímou odpovědí“ je použitelné jen napůl.**  
   Citace: „**Ověřením, že vás roboti vidí, a přímou odpovědí na nejdůležitějších stránkách. To jsou dvě věci s nejlepším poměrem práce a dopadu**“  
   Problém: Chybí přesnější první krok. Co má čtenář udělat dnes?  
   Lepší by bylo:  
   - zkontrolovat indexaci / fetchability 5 klíčových URL,  
   - vybrat 10 dotazů,  
   - upravit 3 nejdůležitější landing pages,  
   - ověřit konzistenci NAP / firmy / katalogů.  
   Teď je to obecná rada, ne akční plán.

3. **„Doložitelné autorství“ je hozené do společného základu bez rozlišení, kde je to reálně důležité.**  
   Citace: „**Doložitelné autorství… U odborných a citlivých témat to váží víc než jinde.**“  
   Problém: Směšuje se tady E-E-A-T logika Googlu s ostatními systémy, aniž by bylo jasné, co je doložené a co odvozené. Pro české firmy mimo YMYL to navíc nemusí být mezi prvními kroky.

4. **AI Overviews a AI Mode jsou popsané příliš „google-friendly“, ale málo kriticky.**  
   Citace: „**Google k tomu opakuje, že jde o běžné SEO, ne o samostatnou disciplínu.**“  
   Problém: To je převzetí vendor framingu. Rozcestník by měl dodat, že „běžné SEO“ nestačí jako vysvětlení rozdílů v generativním výstupu a citacích. Jinak jen reprodukuje PR linku.

5. **Chybí jasné oddělení: citace vs. zmínka vs. použití bez odkazu.**  
   Citace: celý text pracuje s „dostat se do AI odpovědí“ a „citací“.  
   Problém: To není totéž. Některé systémy odkaz zobrazí, jiné shrnou bez zjevné citace, jindy použijí web latentně. Bez tohoto rozlišení je článek terminologicky rozmazaný.

---

**DROBNOSTI**  
1. **„Shoda údajů napříč zdroji“ je přestřelená jako univerzální princip pro všechny kanály.**  
   Citace: „**Web, firemní profily, katalogy a recenzní platformy musí uvádět totéž.**“  
   U lokálu ano, u části ne-lokálních B2B témat je to méně zásadní než relevance a dohledatelnost.

2. **„Informační dotazy“ u AIO je moc hrubé zjednodušení.**  
   Citace: „**Objevuje se u části dotazů, hlavně informačních**“  
   Bez kontextu to zní stabilněji, než realita je. Triggering je proměnlivý dle vertikály, regionu, rozhraní.

3. **„Stránka, která odpovídá jen na jednu úzkou otázku, se do složené odpovědi dostane hůř“ je hypotéza, ne jistota.**  
   Citace: přesně tato věta.  
   U AI Mode plausibilní, ale chtělo by „může“ místo „dostane hůř“.

4. **„u obecných dotazů ChatGPT sahá hlavně po globálních anglických zdrojích“ potřebuje metodickou oporu hned v textu.**  
   Citace: přesně tato věta.  
   Pokud je opora jen v interním měření, v rozcestníku to aspoň označit jako vlastní pozorování s limity.

5. **Tabulka „Na co slyší nejvíc“ sugeruje příliš pevné ranking faktory.**  
   Citace: celý CompareTable blok.  
   Lepší by bylo „co se u něj často ukazuje jako důležité“.

---

**Co chybí**  
1. **Microsoft Copilot / Bing ekosystém.**  
   Když už tvrdíte „pět kanálů, které v Česku prakticky rozhodují“, je divné vynechat Copilot, když zároveň u ChatGPT sami zdůrazňujete Bing.

2. **Rozlišení podle typu webu a záměru.**  
   Chybí mini-mapa: lokální firma / e-shop / B2B SaaS / publisher — kde začít a proč.

3. **Sekce „co je doložené vs. co odvozujeme z pozorování“.**  
   Pro web s tónem „bez hype, s přiznanými limity“ je to zásadní. Tady limity skoro nejsou.

4. **Metriky úspěchu mimo ruční kontrolu.**  
   Ruční test je fajn start, ale chybí upozornění na volatilitu, personalizaci, geolokaci, session bias a nutnost logovat screenshoty / citované URL.

---

**Verdikt k formátu**  
V této podobě je to **spíš interní distribuční uzel než užitečný samostatný článek**. Přidaná hodnota je malá, protože nepřináší rozhodovací rámec ani metodické vyjasnění nejistot. Pokud má rozcestník obstát, musí dělat něco navíc než „pět krátkých shrnutí + interní odkazy“.