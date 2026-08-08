1. **[ZÁVAŽNOST kritická] Frontmatter `description`, `answer`, `stats[0]`, tělo „Nikdo neblokuje. Vůbec nikdo“ → přehnané tvrzení nad rámec dat**
   - **Problém:** Data unesou jen to, že ve vzorku 47 e-shopů není v `robots.txt` žádný AI robot explicitně blokován a že homepage vracela pro zadané UA řetězce HTTP 200 z běžné IP. Neunesou absolutní formulace typu „AI roboty neblokuje nikdo“ bez dovětku „v měřeném vzorku“ a bez připomenutí limitu IP/ověření robota. Navíc `stats` říká „blokují nějakého AI robota“, ale měření ve skutečnosti pokrývá jen zmínky v `robots.txt`, ne libovolné formy blokace.
   - **Navržené znění:**
     - `description`: „Měření 47 e-shopů na Shoptetu: v robots.txt jsem nenašel explicitní blokaci AI robotů. Šest e-shopů jim přidalo vlastní pravidla a čtyřem tím zmizelo všech 40 výchozích zákazů.“
     - `answer`: „Změřil jsem robots.txt na 47 e-shopech běžících na Shoptetu. V robots.txt jsem nenašel explicitní blokaci sledovaných AI robotů. Šest e-shopů jim naopak přidalo vlastní skupiny — a protože pro robota platí jen jeho nejspecifičtější skupina, čtyřem z nich tím přestalo platit všech 40 výchozích zákazů, včetně košíku, vyhledávání a filtrovaných adres.“
     - `stats[0].label`: „měřených e-shopů na Shoptetu, kde robots.txt explicitně blokuje některého sledovaného AI robota“
     - Nadpis sekce: místo „Nikdo neblokuje. Vůbec nikdo“ použít „Ve vzorku jsem v robots.txt nenašel explicitní blokaci AI robotů“

2. **[ZÁVAŽNOST kritická] FAQ „Proč je povolení AI robota nebezpečnější než nic?“ + tělo „povolení ruší zákazy“ → technicky nepřesná formulace o `Allow`**
   - **Problém:** Nejde o to, že „povolení“ samo o sobě něco odemyká. Problém je vytvoření samostatné specifičtější skupiny pro robota bez zopakování zákazů. Formulace „Allow / zruší ochranu“ je zkratka, ale technicky nepřesná a snadno svádí k mylnému závěru, že `Allow` přepisuje `Disallow` napříč skupinami. Ve skutečnosti se vybírá jedna odpovídající skupina.
   - **Navržené znění:**
     - FAQ odpověď: „Riziko nevzniká samotným `Allow: /`, ale tím, že robot dostane vlastní specifičtější skupinu bez zákazů, které byly dosud v `User-agent: *`. Podle specifikace se pro konkrétní crawler vyhodnocuje jen odpovídající skupina s nejspecifičtějším user-agentem. Pokud je v ní jen `Allow: /`, robot už nečte zákazy z obecné skupiny.“
     - V těle místo „Hlavní nález: povolení ruší zákazy“ použít „Hlavní nález: samostatná AI skupina bez zákazů vyřadí obecnou skupinu“
     - V checklistu místo „Skupina jen s Allow lomítko ruší pro toho robota všechna výchozí omezení.“ použít „Skupina jen s `Allow: /` bez zopakovaných zákazů způsobí, že pro toho robota přestanou platit zákazy z obecné skupiny `User-agent: *`.“

3. **[ZÁVAŽNOST střední] FAQ „Jak tedy povolit AI robota bezpečně?“ → příliš obecné doporučení**
   - **Problém:** Věta „pokud ho nic nezakazuje, projde i tak“ je v kontextu článku mířeného na Shoptet pravdivá pro naměřený výchozí stav, ale zní obecně pro libovolný web. Chybí podmínka, že to platí jen pokud pro robota neexistuje specifičtější omezující skupina a server ho nefiltruje jinak.
   - **Navržené znění:** „Na Shoptetu ve výchozím stavu vlastní skupinu pro AI robota obvykle psát nemusíte: pokud pro něj nemáte specifičtější zákaz a nefiltrujete ho jinak, projde i podle obecné skupiny. Pokud vlastní skupinu chcete, zopakujte v ní i zákazy, na kterých vám záleží.“

4. **[ZÁVAŽNOST střední] Sekce o serveru + frontmatter `description`/`answer` → nedotažený limit vůči tvrzení o „neblokaci“**
   - **Problém:** Limit je sice uveden níž, ale silná tvrzení jsou už nahoře. Čtenář může snadno přehlédnout, že test serverového chování byl jen podle UA řetězce z běžné IP a pouze na homepage.
   - **Navržené znění:** Už v úvodu po první silné větě doplnit větu: „Tohle platí pro obsah `robots.txt` a pro odpověď homepage na zadané UA řetězce z běžné IP; netestoval jsem ověřené IP rozsahy robotů ani jiné URL.“

5. **[ZÁVAŽNOST střední] Pojmenování konkrétních e-shopů v tabulce „Hlavní nález“ → hraničí s veřejným pranýřováním**
   - **Problém:** U čtyř e-shopů článek explicitně říká, že si „omylem otevřely dveře“ do košíku a vyhledávání. To je reputačně citlivé. Věcně to není nutné pro pochopení principu; pro důkaz stačí anonymizované skupiny a informace o shodných otiscích. Jmenování působí spíš jako vystavení chyb konkrétních provozovatelů.
   - **Navržené znění:** 
     - Tabulku nahradit anonymizovanou verzí: „4 e-shopy: AI skupiny jen s `Allow: /`; 1 e-shop: `Allow: /` + `Disallow: /klient/`; 1 e-shop: prázdná skupina pro ClaudeBot.“
     - Pokud chcete ponechat důkaz o šíření šablony: „Ve třech případech šlo o prakticky stejný zkopírovaný blok; dva soubory byly byte-identické.“
     - Pokud jména ponechat, přidejte odůvodnění: „Domény uvádím jen tam, kde je to nutné k doložení byte-identických otisků a šíření stejné šablony.“

6. **[ZÁVAŽNOST střední] Jmenování `nemeckyeshop.cz`, `profi-dj.cz`, `brainmarket.cz` v části o `llms.txt` → věcně zbytné**
   - **Problém:** U této pasáže jmenování konkrétních e-shopů není potřeba k argumentu. Argument zní, že 3 ze 47 mají obsah; domény nepřidávají analytickou hodnotu.
   - **Navržené znění:** „Skutečný obsah měly jen 3 e-shopy ze 47; velikost se pohybovala zhruba od 2,8 do 7,9 kB.“

7. **[ZÁVAŽNOST střední] „výchozí Shoptet robots.txt pustí i tak“ / „Výchozí stav pouští všechny“ → zjednodušení bez rozlišení robots vs. server**
   - **Problém:** Formulace míchá dvě vrstvy. `robots.txt` je jen instrukce pro crawling; „pouští všechny“ zní jako přístupová kontrola. Článek limit sice uvádí až dole, ale tady by měl být přesnější.
   - **Navržené znění:** „Výchozí Shoptet robots.txt sledované AI roboty výslovně neomezuje, takže z pohledu pravidel crawlování mají stejný základ jako ostatní roboti. To ale ještě neříká nic o tom, zda je web nefiltruje jinak na serveru.“

8. **[ZÁVAŽNOST drobná] „Jediné `Disallow: /` v celém vzorku patří robotu YoudaoBot, což je čínský vyhledávač, ne AI nástroj.“ → zbytečně kategorické**
   - **Problém:** To, že nejde o „AI nástroj“, je zkratka. Přesnější je říct, že nejde o jednoho ze sledovaných AI robotů v tomto článku.
   - **Navržené znění:** „Jediné `Disallow: /` v celém vzorku patří YoudaoBotu; ten do sledované sady AI robotů v tomto měření nepočítám.“

9. **[ZÁVAŽNOST drobná] FAQ o `llms.txt` → číslo 44/47 je v pořádku, ale chybí limit, že jde o konkrétní implementaci Shoptetu v daný den**
   - **Problém:** Znění „Na Shoptetu ne“ zní definitivně produktově. Data ale pokrývají 47 e-shopů v jeden den, ne kompletní platformu ani budoucí stav.
   - **Navržené znění:** „V měřeném vzorku na Shoptetu ne. Ve 44 ze 47 e-shopů vrátila adresa `/llms.txt` stavový kód 200 s prázdným tělem…“

10. **[ZÁVAŽNOST drobná] Sekce „Vzorek“ → chybí explicitně připomenout, že 7 + 9 položek nejsou náhodný výběr**
    - **Problém:** V limitacích to je, ale už při popisu vzorku by mělo zaznít, že nejde o reprezentativní náhodný vzorek.
    - **Navržené znění:** „Nejde o reprezentativní náhodný vzorek celé platformy; je vychýlený k větším a aktivnějším obchodům a doplněný o dříve měřené e-shopy a oficiální dema.“

11. **[ZÁVAŽNOST drobná] „čtyři obchody si povolením AI robotů omylem otevřely dveře“ → spekulace o úmyslu**
    - **Problém:** „omylem“ přisuzuje motiv a cíl, které z dat neznáte. Z dat víte jen technický efekt konfigurace.
    - **Navržené znění:** „u čtyř obchodů vedlo přidání AI skupin k tomu, že pro tyto roboty přestalo platit všech 40 výchozích zákazů.“

12. **[ZÁVAŽNOST drobná] FAQ „Jde robots.txt na Shoptetu upravit?“ → lehký skok od nápovědy k používání v praxi**
    - **Problém:** Věta „takže se to reálně používá“ je v pořádku, ale může být přesnější: z dat plyne rozdíl oproti nejčastějšímu otisku, ne nutně úprava výhradně přes dané pole.
    - **Navržené znění:** „V měřeném vzorku mělo 16 ze 47 e-shopů soubor jiný než nejčastější výchozí otisk, takže k úpravám v praxi dochází.“

13. **[ZÁVAŽNOST drobná] „žádný z nich neběží přes Cloudflare“ → opora v datech je nepřímá**
    - **Problém:** V datech je `CDN: None` pro 47/47, ale metodika detekce CDN není popsána. Tvrzení je proto lepší zjemnit.
    - **Navržené znění:** „V naměřených hlavičkách jsem nenašel známky Cloudflare, takže se na vzorek zřejmě nevztahují ani jeho výchozí blokace AI robotů.“

### 3 nejdůležitější věci
1. Zmírnit absolutní tvrzení „nikdo neblokuje“ na „ve vzorku jsem v robots.txt nenašel explicitní blokaci“, protože data nepokrývají všechny formy blokace.
2. Opravit technickou formulaci: problém není „Allow ruší zákazy“, ale „specifičtější AI skupina bez zopakovaných zákazů vyřadí obecnou skupinu `User-agent: *`“.
3. Zvážit anonymizaci konkrétních e-shopů, hlavně u tabulky s chybami; jmenování není pro důkaz principu nutné a působí jako veřejné pranýřování.