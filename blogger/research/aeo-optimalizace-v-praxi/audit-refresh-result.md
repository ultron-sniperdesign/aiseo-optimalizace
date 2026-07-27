## BLOKERY

1. **Přepálené tvrzení o „kompenzaci“ CTR poklesu bez opory v datech**
   - Citace: **„Featured Snippet a AIO citace kompenzují CTR pokles — když jste citovaní, ztrácíte sice část kliků, ale získáváte brand exposure…“**
   - Problém: Z dodaných podkladů plyne jen to, že **CTR při zobrazení panelu klesá řádově o desítky procent** a že datové zdroje jsou zahraniční a rozkolísané. Nevidím oporu pro kauzální závěr, že citace tento pokles „kompenzují“. „Brand exposure“ je tady spíš hypotéza než doložený výsledek.
   - Proč blocker: Je to přesně typ věty, která slibuje víc, než unese evidence. Zní jako strategická jistota, ale podklad ji nedokládá.

2. **Příliš silné zjednodušení mechanismu výběru do AIO**
   - Citace: **„Do AI Overviews se dostanete přes stránku, která už na daný dotaz rankuje, a na které je odpověď snadno vytáhnutelná.“**
   - Problém: To je formulované skoro jako pravidlo vstupu. O odstavec dál sice text korektně říká **„Zaručit citaci nelze“** a že **„výběr zdrojů není veřejně popsaný“**, ale úvodní věta je mechanicky sebejistější, než by měla být. Z podkladů plyne jen zvýšení pravděpodobnosti, ne takto přímočará podmínka.
   - Proč blocker: Článek má cílit na „jak se dostat…“; právě tady je největší riziko, že čtenář dostane pseudojistý návod na netransparentní systém.

## VAROVÁNÍ

1. **„Google čerpá citace typicky z předních výsledků“ je rozumné, ale bez kvalifikace**
   - Citace: **„Google čerpá citace typicky z předních výsledků, takže první podmínka je pozice.“**
   - Problém: „Typicky“ pomáhá, ale „první podmínka je pozice“ už zase tvrdí víc, než víme. Bez zdroje nebo změkčení to působí jako pravidlo systému.
   - Lepší by bylo říct: „často“ / „ve většině pozorování“ / „bez relevance a viditelnosti se šance zřetelně snižuje“.

2. **Schema je podané jako krok pro AIO, i když o jeho váze sami píšete, že není stejná**
   - Citace: **„4. Doplňte strukturovaná data — FAQPage nebo HowTo podle typu obsahu.“**
   - V kolizi s: **„stejné prvky (FAQ schema, strukturovaný answer block, autorita) nemají v obou formátech stejnou váhu“**
   - Problém: Checklist to prodává jako přímý krok ke zvýšení pravděpodobnosti AIO, ale níže už text správně připouští, že váha těchto signálů je nejasná a rozdílná. Není to vyloženě špatně, ale je to napjaté.
   - Riziko: Čtenář si odnese „FAQPage = cesta do AIO“, což z textu poctivě nevyplývá.

3. **„AI Overviews dostupné od léta 2025, generuje je model Gemini“ je mimo uživatelskou hodnotu a zní zbytečně definitivně**
   - Citace: **„CZ trh: AI Overviews dostupné od léta 2025, generuje je model Gemini.“**
   - Problém: Druhá část je vatově-technologická značka bez praktického dopadu na doporučení v sekci. Navíc „generuje je model Gemini“ je typ tvrzení, které rychle zastarává a v tomhle kontextu nic nevysvětluje.
   - Auditně: spíš dekorace než obsah.

4. **Rozdíl 48 % vs. 60 % je sice vysvětlen, ale jen obecně**
   - Citace: **„Jiné datasety uvádějí i vyšší podíly, kolem 60 %; rozdíl je v tom, jaké dotazy se sledují.“**
   - Plus: To je poctivé a odpovídá podkladům.
   - Minus: Chybí explicitní připomenutí, že jde o **různé metodiky a různé query sety**, ne „novější pravdu“. Není to blocker, ale šlo by to udělat ještě čistěji.

5. **„sekce níž / dál v článku / vlastní sekci níž“ je místy funkční, ale místy hraničí s vatou**
   - Citace:
     - **„Anatomii answer blocku rozebírá sekce níž.“**
     - **„Schema cookbook je dál v článku.“**
     - **„Měření má vlastní sekci níž.“**
   - Problém: Pokud tyto části skutečně existují a jsou snadno dohledatelné, je to v pořádku. Ale v této podobě je to generické interní odkazování bez konkrétní kotvy/názvu sekce. U refresh článku o 4 900 slovech to může být spíš výplň než navigace.
   - Auditně: „sekce níž“ samo o sobě není informační hodnota.

## DOPORUČENÍ

1. **Oslabit úvodní H2 odpověď, aby nesimulovala jistý mechanismus**
   - Teď: **„Do AI Overviews se dostanete přes stránku, která už na daný dotaz rankuje…“**
   - Doporučení: formulovat jako pravděpodobnostní tvrzení. Např.:
     - „Nejvyšší šanci na citaci v AI Overviews mají stránky, které už jsou pro dotaz relevantní a viditelné a mají stručnou, samostatně použitelnou odpověď.“
   - Tím se srovná tón s poctivějším **„Zaručit citaci nelze“**.

2. **Vyhodit nebo přeformulovat „kompenzují CTR pokles“**
   - Teď: **„Featured Snippet a AIO citace kompenzují CTR pokles…“**
   - Doporučení:
     - „Citace může částečně zmírnit ztrátu pozornosti oproti situaci, kdy v panelu nejste vůbec, ale veřejná data neumí spolehlivě vyčíslit čistý přínos pro kliky.“
   - To drží linii podkladů a neprodává neprokázaný business case.

3. **U checklistu oddělit „nutné“ od „užitečné, ale neprokázané“**
   - Citace: **„4. Doplňte strukturovaná data — FAQPage nebo HowTo…“**
   - Doporučení: připsat kvalifikaci typu:
     - „Pomáhá Googlu pochopit typ obsahu, ale samo o sobě citaci do AIO nezajišťuje a jeho vliv se liší podle formátu.“
   - Tím se odstraní kolize s pozdější částí o netotožném mechanismu.

4. **Zpřesnit navigační odkazy v rámci článku**
   - Místo: **„sekce níž“, „dál v článku“, „vlastní sekci níž“**
   - Doporučení: nahradit konkrétními názvy sekcí nebo anchor linky. Jinak to působí jako nafukování textu.
   - Příklad:
     - „viz sekce ‚Jak napsat answer block‘“
     - „viz část ‚Schema cookbook‘“
     - „viz sekce ‚Měření AI segmentů v GSC‘“

5. **Zkrátit nebo vyřadit technologickou dekoraci bez dopadu**
   - Citace: **„generuje je model Gemini“**
   - Doporučení: pryč, pokud na tom nestojí další argument. Pro čtenáře řešící „jak se dostat do Google AI Overviews“ to není akční informace.

6. **Lépe ošetřit překryv s existujícími částmi článku**
   - K otázce kolize: ano, nová H2 zjevně sahá do teritoria, které už článek podle zadání řeší jinde: **answer block** i **schema** už vysvětluje. V této verzi je nová sekce obhajitelná jen jako stručný „executive summary“, ale musí to tak být poznat.
   - Doporučení:
     - udělat z ní skutečně krátkou odpověď na dotaz,
     - checklist nechat jako rozcestník,
     - detailní vysvětlení nede facto opakovat, ale jen odkazovat na konkrétní části.

## Nejslabší místo

Nejslabší je závěr:

- Citace: **„Featured Snippet a AIO citace kompenzují CTR pokles…“**
- Proč: Je to nejsilnější obchodní slib v celé ukázce a současně nejméně podložený dodanými podklady. Přesně tady text přechází z poctivé nejistoty do marketingového zkratkování.