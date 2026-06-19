**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku.

---

## 1) Věcná správnost

### [BLOCKER] Chybná jednotka u SeLLMa ve statistikách
> `stats:`  
> `- value: "70 mld."`  
> `label: "parametrů vlastního českého jazykového modelu SeLLMa od Seznamu"`

**Problém:** „70 mld.“ je v češtině 70 miliard, ale u modelů se běžně pracuje s „70 mld. parametrů“ nebo „70B“. Samotná hodnota bez „parametrů“ je nejasná. Navíc jinde v článku je správně „70 miliard parametrů“, takže formát je nekonzistentní.

**Návrh opravy:**  
Změnit `value` na například:
- `70 mld. parametrů`
nebo
- `70B parametrů`

---

### [WARNING] „spustil vlastního AI asistenta“ je časově a významově zkratka
> `description: "Seznam.cz spustil vlastní AI asistent na modelu SeLLMa..."`

**Problém:** V kontextu timeline je přesnější rozlišit:
- listopad 2025 = zkušební provoz
- 25. 5. 2026 = beta pro všechny přihlášené zdarma

Formulace „spustil“ bez upřesnění může působit, jako by šlo o plné veřejné spuštění.

**Návrh opravy:**  
„Seznam.cz uvedl vlastního AI asistenta v testovacím provozu a v květnu 2026 ho zpřístupnil všem přihlášeným uživatelům v beta verzi.“

---

### [WARNING] Nedoložené tvrzení o „homepage Seznam.cz“ jako místě dostupnosti
> `a: "Seznam Asistent je ... dostupný na homepage Seznam.cz a na asistent.seznam.cz."`

**Problém:** Samostatná doména je pravděpodobně doložitelná, ale „na homepage Seznam.cz“ může být implementační detail, který se mění. Pokud to není výslovně potvrzené zdrojem, je to křehké tvrzení.

**Návrh opravy:**  
Změkčit:
„... dostupný přes samostatnou adresu asistent.seznam.cz a podle aktuální podoby služby i z rozhraní Seznam.cz.“

---

### [WARNING] Tvrzení o „shrnutí ve výsledcích vyhledávání“ potřebuje opatrnější formulaci
> `SeLLMa je nasazena ... ve shrnutí ve výsledcích vyhledávání...`

**Problém:** V zadání je uvedeno „shrnutí ve výsledcích“, což je v pořádku, ale článek by měl jasně odlišit produktové použití od plošného nasazení v hlavním vyhledávání. Teď to může znít širší, než je doložené.

**Návrh opravy:**  
„Podle dostupných informací Seznam používá SeLLMu mimo jiné pro AI shrnutí ve vybraných částech výsledků, v Asistentovi, v popiscích na Sreality.cz a při generování inzerátů ve Skliku.“

---

### [WARNING] Přehnaně jistá formulace o datových centrech a jurisdikci
> `Hostováno v evropských datacentrech (vlastní data Seznamu pod EU jurisdikcí).`

**Problém:** Zadání říká „EU datacentra“ a „dočasně doplněno OpenAI modely přes MS Azure EU“. Formulace „vlastní data Seznamu pod EU jurisdikcí“ je už právně silnější tvrzení. Pokud není přesně citováno ze zdroje, je to zbytečně sebejisté.

**Návrh opravy:**  
„Běží v evropských datových centrech; podle veřejných vyjádření Seznamu je důraz na evropské zpracování dat.“

---

### [WARNING] Spekulativní odhad stabilizačního bodu
> `Možný stabilizační bod kolem 10 procent, nebo další pokles.`

**Problém:** To je predikce bez opory ve zdroji. V analytickém článku lze scénáře uvádět, ale musí být jasně označené jako hypotéza autora.

**Návrh opravy:**  
„Bez novějších veřejných dat nelze potvrdit, zda se podíl Seznamu stabilizuje, nebo bude dál klesat.“

---

### [WARNING] „Mapy.cz a Firmy.cz jsou v Česku dominantní lokální vrstva“
> `Mapy.cz a Firmy.cz jsou v Česku dominantní lokální vrstva.`

**Problém:** „dominantní“ je silné tržní tvrzení bez opory. U Mapy.cz to může být v domácím kontextu obhajitelné, u Firmy.cz už méně.

**Návrh opravy:**  
„Mapy.cz a Firmy.cz zůstávají v Česku důležitou lokální vrstvou, zejména pro část publika mimo čistě googleový ekosystém.“

---

### [WARNING] „Sreality.cz je dominantní český realitní portál“
> `Sreality.cz je dominantní český realitní portál, často první volba.`

**Problém:** „dominantní“ a „první volba“ jsou marketingově silná a bez zdroje. U oborových portálů se pozice mění.

**Návrh opravy:**  
„Sreality.cz patří mezi nejsilnější české realitní portály a v řadě segmentů je velmi viditelný.“

---

### [WARNING] „Seznam má u této cílovky minimální váhu“
> `Seznam má u této cílovky minimální váhu.`

**Problém:** U B2B SaaS jde o rozumnou tezi, ale „minimální“ je bez dat absolutní.

**Návrh opravy:**  
„Seznam mívá u této cílovky obvykle nižší význam než Google, LinkedIn a oborové komunity.“

---

### [WARNING] „Doporučovaný startovní poměr je 70:30 Google:Sklik“
> `Doporučovaný startovní poměr je 70:30 Google:Sklik.`

**Problém:** Zadání připouští, že „praktické doporučení agentur bývá...“, ale tady je to podané skoro jako norma. Bez zdroje a bez kontextu oboru je to příliš univerzální.

**Návrh opravy:**  
„Jako orientační start se u části českých firem používá poměr 70:30 ve prospěch Google Ads, ale vhodné rozdělení závisí na oboru, cílovce a ceně za konverzi.“

---

## 2) Brand voice a slovník

### [BLOCKER] Zakázaný termín „robot / SeznamBot / Googlebot“ bez vysvětlení v požadovaném slovníku
> `Seznam má vlastní robot SeznamBot, který je v praxi méně agresivní než Googlebot...`

**Problém:** Zadání výslovně říká: „crawler/bot bez kontextu → vyhledávací robot“. Tady je použité interní značení botů bez vysvětlení a navíc jde o detail, který běžnému čtenáři moc nepomáhá.

**Návrh opravy:**  
„Seznam má vlastního vyhledávacího robota, takže má smysl zkontrolovat indexaci, sitemap i robots.txt přímo v nástrojích Seznamu.“

Pokud chcete ponechat názvy:
„... vlastní vyhledávací robot Seznamu (SeznamBot) ...“

---

### [WARNING] Nevhodný anglicismus / zkratka bez vysvětlení
> `Tento článek je rozbor pro CZ marketér a majitele firem.`

**Problém:** Jazykově chybné a neobratné. „CZ marketér“ není přirozený výraz pro cílový web.

**Návrh opravy:**  
„Tento článek je rozbor pro české marketéry a majitele firem.“

---

### [WARNING] Zbytečně tvrdá formulace „podobný ChatGPT nebo Perplexity“
> `... vlastní konverzační AI vyhledávač podobný ChatGPT nebo Perplexity.`

**Problém:** ChatGPT a Perplexity nejsou totéž. Vysvětlující web by měl být přesnější.

**Návrh opravy:**  
„... vlastní konverzační AI nástroj, který kombinuje prvky chatového asistenta a vyhledávání.“

---

### [WARNING] „surová kvalita LLM“ je žargon
> `... ne v surové kvalitě LLM.`

**Problém:** Není to srozumitelný slovník pro širšího českého marketéra.

**Návrh opravy:**  
„... ne v samotné kvalitě jazykového modelu.“

---

### [TIP] „organic“, „budget“, „CZ-only“, „homepage“ místy zbytečně anglicky
> `Seznam organic vyhledávání`  
> `alokovat budget`  
> `CZ-only cílovka`  
> `homepage`

**Problém:** Není to blocker, ale je to proti požadovanému věcnému a srozumitelnému tónu.

**Návrh opravy:**  
- „organické vyhledávání na Seznamu“
- „alokovat rozpočet“
- „čistě česká cílová skupina“
- „domovská stránka“ / „úvodní stránka“

---

## 3) Citovatelnost pro AI

### [WARNING] `answer` je na hraně délky a zbytečně hodnotí místo definice
> `answer: "Seznam.cz si v Česku drží zhruba 11 až 15 procent... Pro značku je důležitý sekundární kanál..."`

**Problém:** Odpověď je použitelná, ale začíná rovnou číslem a hodnocením. Pro AEO/GEO by bylo lepší první větou definovat, co článek odpovídá: jakou roli Seznam v AI éře má.

**Návrh opravy:**  
Začít definicí typu:
„Seznam.cz je v roce 2026 český sekundární vyhledávací kanál, který vedle klasického vyhledávání nabízí i Seznam Asistenta postaveného na modelu SeLLMa...“

Pak doplnit čísla.

---

### [TIP] Prvních ~100 slov funguje dobře, ale poslední věta je slabší
> `Tento článek je rozbor pro CZ marketér a majitele firem.`

**Problém:** Úvod je faktický a citovatelný, ale zakončení prvního odstavce zbytečně sklouzne do redakční poznámky místo další informace.

**Návrh opravy:**  
Poslední větu úvodu nahradit konkrétním shrnutím:
„Pro většinu českých firem proto Seznam dává smysl hlavně jako doplněk ke Googlu, zejména u starší cílové skupiny, lokálních dotazů a vybraných oborů.“

---

### [WARNING] FAQ obsahuje několik odpovědí s příliš kategorickými soudy
Např.:
> `Kvalitou samotného modelu se s nejlepšími světovými modely ... zatím přímo neměří.`  
> `Smysl dává ... Naopak u digital-native B2B SaaS...`

**Problém:** FAQ má být sebestačné a dobře citovatelné. Tady některé odpovědi míchají fakta a hodnotící soudy bez jasného označení.

**Návrh opravy:**  
U odpovědí důsledně oddělit:
1. doložitelná fakta,
2. praktický závěr „obvykle“, „často“, „u části firem“.

---

## 4) SEO

### [WARNING] Title je příliš dlouhý
> `title: "Seznam.cz v éře AI vyhledávání: co s ním v roce 2026"`

**Problém:** Na doporučených 50–60 znaků je to pravděpodobně přes limit a klíčové slovo není úplně vepředu v nejpraktičtější podobě.

**Návrh opravy:**  
Zkrátit například na něco ve stylu:
- „Seznam.cz a AI vyhledávání v roce 2026“
- „Seznam Asistent a AI vyhledávání v Česku“

---

### [TIP] Description je v limitu a tematicky sedí
> `description: "Seznam.cz spustil vlastní AI asistent..."`

**Hodnocení:** Délka i relevance jsou v pořádku. Jen upravit „AI asistent“ na přirozenější češtinu:
„vlastního AI asistenta“ / „vlastního asistenta s AI“.

---

### [TIP] Slug je smysluplný
> `slug: "seznam-cz-ai-vyhledavani"`

**Hodnocení:** V pořádku.

---

### [WARNING] Chybí interní odkazy v těle tam, kde jsou přirozené
**Problém:** Článek má CTA na konci, ale v těle nejsou žádné průběžné interní odkazy na relevantní pilíře či produkty, přestože se hodí.

**Návrh opravy:**  
Přidat 1–2 interní odkazy přímo do relevantních pasáží:
- u „strukturovaná data“ na pilíř k jejich implementaci,
- u „Google AI Overviews / ChatGPT / Perplexity“ na článek o AI vyhledávání,
- případně nenápadný odkaz na `/audit/` v části o rozhodování, zda Seznam řešit.

Bez obecných výplňových odkazů.

---

### [WARNING] H3 „Jazykový model SeLLMa“ je dobrý, ale další H3 jsou místy příliš produktové
> `### Kdy Seznam aktivně neřešit`  
> `## Praktická doporučení`

**Problém:** Struktura je logická, ale pro vyhledávání by ještě pomohlo více explicitní pojmenování podle dotazu.

**Návrh opravy:**  
Například:
- „Kdy má Seznam.cz pro firmu smysl“
- „Kdy Seznam.cz není priorita“
- „Jak optimalizovat web pro Seznam a Seznam Asistenta“

Není nutné přepisovat celé pasáže, jen zpřesnit nadpisy.

---

## 5) Aktuálnost

### [WARNING] „Google AI Overviews v 200+ zemích, 40+ jazycích“ se v článku neobjevuje, i když je v zadání jako důležitý kontext
**Problém:** Článek Google kontext zmiňuje, ale neukotvuje, proč je Seznam sekundární i v AI vrstvě. Chybí jedna věta, která by rok 2026 ukotvila přesněji.

**Návrh opravy:**  
Do sekce s porovnáním přidat krátkou větu:
„V roce 2026 jsou Google AI Overviews rozšířené ve více než 200 zemích a 40+ jazycích, takže český trh už není izolovaný jen na lokální hráče.“

---

### [TIP] Práce s rokem 2026 je jinak zvládnutá dobře
> `updated: "2026-06-11"`  
> `25. 5. 2026`  
> `V listopadu 2025...`

**Hodnocení:** Časové ukotvení je většinou přesné a splňuje zadání.

---

## 6) CTA

### [TIP] Závěrečné CTA je správně konkrétní
> `[AI SEO audit za 9 990 Kč](/audit/)`  
> `[AI SEO Wireframe Pack za 1 490 Kč](/pack/)`

**Hodnocení:** Dobře. Primárně Audit 9 990 Kč, sekundárně Pack 1 490 Kč, přesně podle zadání.

---

### [WARNING] CTA slibuje schopnost posoudit „jaký podíl vaší cílovky reálně chodí přes Seznam vs Google“
> `Chcete vědět, jaký podíl vaší cílovky reálně chodí přes Seznam vs Google...`

**Problém:** To může být interpretováno jako přesné atribuční zjištění, které běžná analytika často neumí spolehlivě rozlišit do takové míry, zvlášť u AI touchpointů. Je to zbytečně tvrdé.

**Návrh opravy:**  
„Chcete odhadnout, jak velký význam má pro vaši cílovou skupinu Seznam oproti Googlu a kde má investice do Seznam ekosystému největší smysl?“

---

## 7) Drobnější jazykové a obsahové vady

### [WARNING] Gramatická chyba
> `Tento článek je rozbor pro CZ marketér a majitele firem.`

**Návrh opravy:**  
„Tento článek je rozbor pro české marketéry a majitele firem.“

---

### [WARNING] Nepřesný a zbytečně silný výraz
> `Seznam.cz je v Česku posledních deset let v dlouhodobém poklesu vůči Googlu.`

**Problém:** Smysl je jasný, ale formulace zní neobratně.

**Návrh opravy:**  
„Podíl Seznamu na českém vyhledávání v poslední dekádě dlouhodobě klesá ve prospěch Googlu.“

---

### [TIP] Pozitivní potvrzení: práce s nejistotou je místy dobrá
> `Beta od května 2026 je čerstvá — zatím není veřejně dokumentované, kolik uživatelů ho reálně používá...`

**Hodnocení:** Tohle je správně opatrné a důvěryhodné.

---

## Shrnutí priorit oprav

Než článek publikovat, opravil bych hlavně tyto body:

1. **Zakázaný/slabě vysvětlený slovník**: „SeznamBot/Googlebot“, „CZ marketér“, „surová kvalita LLM“, anglicismy.  
2. **Příliš kategorická nebo spekulativní tvrzení**: „dominantní“, „první volba“, „minimální váha“, „stabilizační bod kolem 10 %“, „70:30“ jako univerzální doporučení.  
3. **SEO title zkrátit** a lehce zpřesnit.  
4. **Změkčit některé technické a produktové výroky** o datacentrech, homepage dostupnosti a rozsahu nasazení SeLLMy.  
5. **Vyladit answer a úvod** tak, aby začínaly definicí a byly ještě citovatelnější.

Po těchto úpravách bude článek obsahově použitelný a výrazně bezpečnější pro publikaci.