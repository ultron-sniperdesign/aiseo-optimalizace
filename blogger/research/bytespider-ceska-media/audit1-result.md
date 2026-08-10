1. **KRITICKÉ — frontmatter `answer` překlápí „nenašel jsem“ do faktického „nemáte jak ověřit“**
   - **Citace:** `Pravidlo na jeho jméno tedy míří na robota, jehož identitu si nemáte jak ověřit.`
   - **Problém:** To už není poctivé „nenašel jsem veřejný oficiální seznam“. Je to silnější závěr: že ověření není možné. Z podkladů ale plyne jen to, že autor **nenašel oficiální strojový seznam IP rozsahů ani oficiální stránku**. To není totéž jako „ověřit si identitu nemáte jak“. Může existovat jiný oficiální mechanismus, neveřejná dokumentace, reverzní DNS politika, ASN heuristika apod. Hlavní riziko zadání se tu přesně naplnilo.
   - **Návrh:** Přepsat na něco jako:  
     **„…u něj jsem nenašel veřejný oficiální seznam IP rozsahů. Pravidlo na jeho jméno tak nemá stejnou úroveň zpětného ověření jako u OpenAI, Anthropicu, Perplexity, Googlu a Applu.“**

2. **VÁŽNÉ — titulek „se nedá ověřit“ je silnější než doložené zjištění**
   - **Citace:** `title: "Nejblokovanější AI robot v Česku se nedá ověřit"` a H1 `Nejblokovanější AI robot v Česku se nedá ověřit`
   - **Problém:** Stejný přešlap jako výše, jen ve zkratce a nejviditelněji. Článek v těle opatrněji říká „nenašel jsem způsob“ a „nenašel jsem obdobný soubor“, ale titulek tvrdí kategoricky „nedá ověřit“. To je přesně typ redakčního posunu, který shodí deklarovanou poctivost.
   - **Návrh:** Změnit titulek na formulaci odpovídající měření, např.  
     **„Nejčastěji blokovaný AI robot v mém vzorku nemá dohledatelný oficiální seznam IP rozsahů“**  
     nebo kratší  
     **„Nejblokovanější AI robot v mém vzorku: oficiální IP seznam jsem nenašel“**.

3. **VÁŽNÉ — description také sklouzává k implicitnímu „není“ místo „já nenašel“**
   - **Citace:** `A je to zároveň robot, u kterého jsem oficiální seznam IP rozsahů nenašel.`
   - **Problém:** Tohle je ještě v mezích, ale v kombinaci s titulkem a `answer` to vytváří jednotnou implikaci „u něj ověření neexistuje / nejde“. Samotná věta je v pořádku, ale celek frontmatteru není.
   - **Návrh:** Nechat description, ale sladit s opatrnějším titulkem a answer. Samotná description pak přestane být problémová.

4. **VÁŽNÉ — věta o „ploše, kde by vás citoval a odkázal“ zbytečně podsouvá, že Bytespider je horší robot**
   - **Citace:** `Je to crawler ByteDance a nenašel jsem plochu, kde by vás na oplátku citoval a odkázal. To samo o sobě vysvětluje, proč se objevuje v robots.txt nejčastěji: náklad na provoz je vidět, protihodnota ne.`
   - **Problém:** Autor měřil **jen robots.txt konfiguraci**. Tady ale skládá příběh o motivaci provozovatelů a o „protihodnotě“, aniž by to měřil. Navíc „nenašel jsem plochu“ se opět snadno čte jako „žádná neexistuje“. A formulace „to samo o sobě vysvětluje“ je už přímá kauzální interpretace bez důkazu.
   - **Návrh:** Výrazně oslabit:  
     **„Jedna možná interpretace je, že část provozovatelů u něj nevidí zjevnou protihodnotu v podobě citací či referral návštěvnosti. To jsem ale v tomhle měření netestoval.“**  
     Ještě lépe úplně vyhodit „to vysvětluje“.

5. **VÁŽNÉ — text místy staví Bytespider do horšího světla pomocí rétoriky, ne dat**
   - **Citace:** `U Bytespidera je ta rovnice jiná.` / `náklad na provoz je vidět, protihodnota ne.` / `u něj to pravidlo stojí jen na jedné noze.`
   - **Problém:** Tón je už hodnotící. Přitom autor výslovně neměřil chování robota, respekt k robots.txt, ani reálný přínos / nepřínos. To neznamená, že to nesmí interpretovat, ale musí to držet na uzdě. Teď text čtenáře jemně tlačí k závěru „Bytespider je podezřelý a nejspíš škodlivější“, aniž by to článek opravdu unesl.
   - **Návrh:** Vložit brzdu přímo do odstavce:  
     **„Neříkám tím, že je Bytespider škodlivější než ostatní. Jen že u něj v tomhle srovnání nevidím stejnou ověřitelnost identity a zjevnou uživatelskou protihodnotu.“**

6. **DROBNÉ — FAQ je v tomhle poctivější než frontmatter; to je vnitřní nesoulad**
   - **Citace:** FAQ: `Netvrdím, že neexistuje — jen že jsem ho nenašel.` vs. `answer: ... nemáte jak ověřit.`
   - **Problém:** Přesně ta opakovaná slabina autora, kterou zmiňuješ: metadatová vrstva je agresivnější než tělo. Čtenář ze seznamu článků dostane tvrdší claim než člověk, který si text skutečně přečte.
   - **Návrh:** Sladit frontmatter na úroveň FAQ, ne obráceně.

7. **DROBNÉ — časové údaje nejsou úplně konzistentně podané**
   - **Citace:** Podklad říká `Vlastní měření 9. 8. 2026` a zvlášť `Vlastní měření 8. 8. 2026 + přeověření 10. 8.`; článek říká `Odečet 9. a 10. srpna 2026` a jinde `Když jsem v srpnovém měření... Přeověřil jsem je 10. 8.`
   - **Problém:** Není to vyloženě rozpor, ale zbytečně to rozmazává, co bylo měřeno kdy. U robots.txt máš v podkladech 9. 8., v článku 9. a 10. 8. Pokud 10. 8. byl jen doodečet / kontrola dostupnosti, napiš to přesně.
   - **Návrh:** Rozlišit:  
     **„Robots.txt jsem stáhl 9. 8. 2026, 10. 8. jsem vzorek jen znovu zkontroloval.“**  
     Pokud to tak nebylo, upravit podle reality. Teď to působí měkce.

8. **DROBNÉ — čísla sedí, ale „jediný z první šestice“ je potřeba číst opatrně**
   - **Citace:** `A je to zároveň jediný z první šestice...`
   - **Problém:** Počty sedí: první šestice je 13/11/11/10/9/8 a jen u ByteDance není v podkladech doložen oficiální strojový IP seznam. To je v pořádku. Jen je dobré, že autor později explicitně říká, že ověřoval dostupnost seznamů jen u šesti provozovatelů. Tohle se vzájemně nebije.
   - **Návrh:** Bez nutné opravy. Maximálně doplnit `z první šestice v tomhle přehledu`, aby bylo zcela neprůstřelné.

9. **DROBNÉ — praktický závěr existuje, ale je schovaný pod interpretací**
   - **Citace:** `Nedoporučuju ho blokovat ani neblokovat. Doporučuju vědět, že u něj to pravidlo stojí jen na jedné noze.`
   - **Problém:** Čtenář nějaké rozhodnutí dostane: robots.txt je žádost, ne vynucení; chcete-li jistotu, řešte server/firewall; zapisujte samostatnou skupinu. To je použitelné. Jen závěr mohl být přímočařejší a méně efektní.
   - **Návrh:** Přepsat na rozhodovací rámec:  
     **„Pokud vám jde hlavně o deklaraci vůle, pravidlo pro Bytespider do robots.txt smysl má. Pokud vám jde o vynucení nebo auditovatelnou identitu návštěv, samotné robots.txt nestačí.“**

10. **DROBNÉ — třetí strany jsou oddělené dostatečně, tady problém nevidím**
   - **Citace:** `Napříč zdroji třetích stran...` / `Ani jedno jsem neověřoval a nepodávám to jako fakt.`
   - **Problém:** Tohle je naopak udělané správně. Jen pozor, aby to nepopřela okolní rétorika o „protihodnotě“ a „stojí jen na jedné noze“.
   - **Návrh:** Beze změny, jen zkrotit hodnotící pasáže kolem.

11. **DROBNÉ — formulace o HTTP 200 a fallbacku je poctivá a přesná**
   - **Citace:** `bytedance.com/en/bots.json vrací HTTP 200, ale Content-Type: text/html`
   - **Problém:** Tady nic. To odpovídá podkladům a článek správně varuje před falešným pozitivem.
   - **Návrh:** Beze změny.

12. **DROBNÉ — „Veřejná debata se přitom točí kolem GPTBota“ je nepodložená vložka**
   - **Citace:** `Veřejná debata se přitom točí kolem GPTBota.`
   - **Problém:** To je nejspíš pravda v obecném smyslu, ale v článku to není doložené a není to potřeba. Je to jen rétorický stupínek pro kontrast.
   - **Návrh:** Vyhodit nebo změkčit na  
     **„V praxi se často mluví hlavně o GPTBotu.“**

## Verdikt

**Publikovat po opravách.**

Jádro článku je použitelné a většina těla poctivě drží rozdíl mezi:
- co autor **změřil**,
- co **nenašel**,
- a co pochází od **třetích stran**.

Ale frontmatter a titulek to kazí. Hlavní chyba je přesně ta, kterou jsi označil: několik míst překlápí **„nenašel jsem veřejný oficiální způsob“** do **„nedá se ověřit / nemáte jak ověřit“**. To je na opravu před publikací. Druhá důležitá oprava je zkrotit pasáže, které z Bytespidera dělají implicitně „horšího“ robota na základě dojmu, ne na základě měření.