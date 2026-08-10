1. **VÁŽNÉ — článek teď místy přepaluje „začněte reporty“ skoro na univerzální radu**
   - **Citace:**  
     - frontmatter `answer`: „**Začněte dvěma bezplatnými oficiálními reporty**, v Search Console a v Bing Webmaster Tools; ChatGPT ani Perplexity vlastní report nemají, tam zbývá ruční kontrola nebo placený nástroj.“  
     - tělo: „**Nejdřív vyčerpejte to, co je zdarma — oba oficiální reporty a ruční kontrola.**“
   - **Problém:** Není to vyloženě lež, ale formulace je tvrdá a univerzální. U článku o nástrojích to snadno sklouzne k dojmu, že „správný“ postup je vždycky nejdřív GSC+Bing, a teprve pak cokoliv dalšího. To je pro malé weby OK, ale pro firmy, které už od začátku potřebují sledovat ChatGPT/Perplexity napříč větším setem dotazů, je to zjednodušení.
   - **Návrh:** Změkčit formulaci ve stylu:  
     „Pro většinu webů dává smysl začít dvěma bezplatnými reporty a ruční kontrolou. Pokud ale od začátku potřebujete sledovat desítky dotazů, konkurenci a platformy typu ChatGPT či Perplexity, dává smysl nasadit tracker rovnou.“

2. **VÁŽNÉ — zdarma úroveň je už dobře doplněná, ale stále hrozí opačný extrém: reporty vyznívají jako hlavní hvězda článku**
   - **Citace:**  
     - `description`: „**co zvládnou dva bezplatné oficiální reporty**, co jen ruční kontrola a od kdy se vyplatí platit…“  
     - `stats`: „**2 reporty** — bezplatné oficiální zdroje na start“  
     - FAQ „Dá se AI viditelnost měřit zdarma?“ je teď celé postavené na těchto dvou reportecha.
   - **Problém:** Refresh spravil průšvih, ale komunikační těžiště se posunulo dost k těm dvěma reportům. U přehledu nástrojů to ještě drží, ale metadata a FAQ tlačí free reporty víc než samotné trackery. Riziko: článek působí spíš jako „co umí GSC a Bing“ než „jak vybírat nástroje na měření AI viditelnosti“.
   - **Návrh:**  
     - V `description` vrátit rovnováhu: „Přehled AI SEO nástrojů 2026: kdy stačí oficiální reporty a ruční kontrola, kdy dává smysl tracker a co čekat od enterprise řešení.“  
     - U `stats` nenechávat jeden z hlavních statů jen jako promo free reportů; lépe třeba „4 typy dat: imprese, zmínky, citace, vývoj“.

3. **VÁŽNÉ — v článku chybí ostřejší vysvětlení, proč placené trackery nejsou degradované na „až když nestíháte“**
   - **Citace:**  
     - „Placený nástroj nasaďte, **až sledujete víc dotazů a konkurenci** a ruční práce vám přeroste přes hlavu.“  
     - „**Teprve pak ručně**: projděte menší sadu zákaznických dotazů v ChatGPT a Perplexity…“
   - **Problém:** Článek správně brání přeprodání trackerů, ale málo explicitně hájí jejich unikátní hodnotu. Tj. nejen úspora času, ale i **jiný typ pokrytí**: opakovatelnost, cross-platform monitoring, konkurence, alerty, historie. To v textu je, ale spíš rozptýleně a slabě.
   - **Návrh:** Přidej 1–2 věty hned pod úroveň 2:  
     „Trackery nejsou jen placená náhražka ruční práce. Jejich hlavní přínos je, že umí ve stejné metodice sledovat více platforem, konkurenci a vývoj v čase — něco, co bez nich u desítek dotazů prakticky neudržíte.“

4. **DROBNÉ — frontmatter `answer` a FAQ trochu slibují širší pokrytí než tělo přesně unese**
   - **Citace:**  
     - `answer`: „AI SEO nástroje sledují viditelnost značky v **AI odpovědích a asistentech**.“  
     - FAQ 1: „…jestli a jak často se objevujete v **Perplexity, ChatGPT s vyhledáváním nebo Google AI Overviews**…“
   - **Problém:** Formulace v answer/FAQ jsou obecné a v pohodě, ale článek samotný pak dost stojí na tom, že free oficiální reporty pokrývají jen část reality. To není rozpor, spíš lehké napětí: nahoře definice široká, praktická část je výrazně užší.
   - **Návrh:** V `answer` doplnit omezení přímo:  
     „…sledují viditelnost značky v AI odpovědích a asistentech, ale žádný jeden nástroj dnes nepokrývá celý trh.“

5. **DROBNÉ — `description` je přesná, ale zbytečně podstřeluje ruční kontrolu**
   - **Citace:** `description`: „co zvládnou dva bezplatné oficiální reporty, **co jen ruční kontrola**…“
   - **Problém:** „jen ruční kontrola“ zní, jako by ruční kontrola byla chudý přívažek. Přitom v těle správně tvrdíš, že pro ChatGPT a Perplexity je pořád nezbytná, pokud nechceš platit.
   - **Návrh:** Přepsat na:  
     „…co zvládnou dva bezplatné oficiální reporty, co doplnit ručně a od kdy se vyplatí platit…“

6. **VÁŽNÉ — datace je skoro srovnaná, ale zůstává malá vnitřní nečistota mezi „stav k srpnu“ a checklistem „k červenci 2026“**
   - **Citace:**  
     - v úvodu: „**Stav je k srpnu 2026**“  
     - checklist: „**Pokrytí platforem k červenci 2026**“
   - **Problém:** Není to fatální, ale přesně tohle u autora bývá zdroj nedůvěry. Úvod tvrdí srpen, tabulka červenec. Pokud je to záměr, musí být jasné proč. Teď to vypadá spíš jako slepenec z různých verzí.
   - **Návrh:**  
     - buď sjednotit vše na srpen 2026,  
     - nebo v checklistu explicitně dopsat: „Poslední ověření pokrytí podle dokumentace: červenec 2026.“

7. **DROBNÉ — otevřená oprava mluví o „červencové aktualizaci“, frontmatter už říká `updated: 2026-08-10`**
   - **Citace:**  
     - Insight: „Report v Search Console přibyl 3. 6. — tedy **dva měsíce před červencovou aktualizací**…“  
     - frontmatter: `updated: "2026-08-10"`
   - **Problém:** Nejde o rozpor, pokud opravdu byla mezitím červencová aktualizace a teď srpnový refresh. Jenže čtenář to z článku nepozná. Vypadá to, že metadata tvrdí srpen a otevřená oprava odkazuje na jinou neviditelnou verzi.
   - **Návrh:** Upřesnit:  
     „…dva měsíce před **předchozí červencovou aktualizací článku**…“

8. **DROBNÉ — slib v FAQ o metrikách jde o chlup dál než tělo**
   - **Citace:** FAQ „Co tyto nástroje vlastně měří?“: „Některé sledují i **sentiment** a rozložení napříč platformami.“
   - **Problém:** V těle sentiment zmiňuješ jen okrajově a bez jediného konkrétního nástroje. Není to chyba, ale působí to jako nafouknutí možností.
   - **Návrh:** Buď sentiment z FAQ vyhodit, nebo v části „Co AI SEO nástroje měří“ dodat, že jde spíš o doplňkovou a metodicky slabší funkci, ne o základ.

9. **VÁŽNÉ — srovnávací tabulka je opravená, ale řádek „V obou“ je terminologicky neohrabaný**
   - **Citace:**  
     - vlevo: „Search Console a Bing Webmaster Tools“  
     - vpravo: „**obojí — mají vlastní reporty o AI viditelnosti**“
   - **Problém:** Významově správně, stylisticky slabé. Navíc levý sloupec uvádí konkrétní nástroje, pravý jen komentář. U srovnávací tabulky to vypadá nečistě.
   - **Návrh:** Do pravého sloupce dát stejně konkrétní formulaci:  
     „Search Console, Bing Webmaster Tools (nově i reporty o AI viditelnosti)“

10. **DROBNÉ — článek pořád ještě drží funkci přehledu nástrojů, ale sekce o placených nástrojích jsou relativně tenké**
   - **Citace:**  
     - Úroveň 2: jeden krátký odstavec.  
     - Úroveň 3: jeden krátký odstavec.  
     - Zato úroveň zdarma má detailní výklad + insight blok.
   - **Problém:** Tohle je hlavní strukturální riziko refreshe. Článek se sice ještě nezměnil na článek „o dvou reportech“, ale balancuje na hraně. Free úroveň je nejlépe rozpracovaná, placené úrovně jsou stručné.
   - **Návrh:** Přidat ke každé placené úrovni aspoň:
     - co typicky umí navíc oproti free,
     - pro koho už to je,
     - na co si dát pozor při výběru.
     Tím se vrátí rovnováha bez popření významu reportů.

11. **DROBNÉ — tvrzení o Bingu a „grounding queries“ je zajímavé, ale článek ho nechává bez opory**
   - **Citace:** „…a k nim **grounding queries**, tedy fráze, kterými si AI podklad hledala. To ruční kontrolou nezjistíte.**“
   - **Problém:** Pokud to tak report skutečně ukazuje, OK. Ale je to konkrétní capability claim a stojí osamoceně. U auditovaného autora bych chtěl méně sebejistý tón, pokud to není dál vysvětlené.
   - **Návrh:** Změkčit:  
     „…včetně grounding queries, tedy dotazů použitých pro dohledání podkladů; právě to je jedna z věcí, kterou ruční kontrola obvykle nenahradí.“

12. **DROBNÉ — „desítky USD“ ve stats jsou v souladu s tělem, ale působí moc gumově**
   - **Citace:** `stats`: „**desítky USD** měsíčně za vstupní nástroje (ceny ověřte v ceníku)“
   - **Problém:** Není to rozpor, ale jako „stat“ je to slabé a neinformativní. Vypadá to spíš jako výplň.
   - **Návrh:** Pokud nemáš přesná stabilní čísla, tenhle stat radši vyhoď nebo nahraď něčím pevnějším.

13. **VÁŽNÉ — FAQ „Dá se AI viditelnost měřit zdarma?“ je lepší než předtím, ale stále může čtenáře svádět k přecenění GSC**
   - **Citace:** „Generativní AI funkce v Search Console (**imprese v AI Overviews a AI Mode**)…“
   - **Problém:** Tahle formulace je sama o sobě OK, ale bez okamžité brzdy může laik číst „měří AI Overviews a AI Mode“ jako dostatečný reporting. Limit o absenci dotazů/prokliků padá až jinde.
   - **Návrh:** Už do FAQ přidat jednou větou limit:  
     „Search Console ukáže jen imprese a neoddělí AI Mode od AI Overviews, takže nejde o plný obraz.“

14. **DROBNÉ — prodejní závěr je relativně uhlídaný, ale po důrazu na „nejdřív zdarma“ působí lehce přicvaknutě**
   - **Citace:** závěr s Wireframe Packem a auditem.
   - **Problém:** Není to přehnané, ale přechod z přísného „neplaťte dřív, než musíte“ do nabídky placeného packu a auditu je trochu ostrý. Ne obsahově, spíš tónově.
   - **Návrh:** Jedna věta navíc jako most:  
     „Jakmile máte změřeno, dává smysl řešit až samotné úpravy webu — ne obráceně.“

## Verdikt

**Publikovat po opravách.**

Refresh odstranil původní průšvih a tentokrát už čtenáře netlačí k placeným trackerům dřív, než je nutné. To je zásadní plus. Ale hrozí druhý extrém: metadata a některé formulace přehazují těžiště až moc na dva oficiální reporty. Článek ještě pořád funguje jako přehled nástrojů, jen potřebuje:
- mírně ztlumit univerzální „začněte reporty“,
- silněji obhájit unikátní roli placených trackerů,
- doladit datace a pár terminologických nečistot.