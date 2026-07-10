**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

## Nálezy

### [BLOCKER] Datum poslední aktualizace guide je v článku z budoucnosti vůči `updated`
> „Publikován byl 15. května 2026, podle veřejných zdrojů byl naposledy aktualizovaný **29. června 2026**…“

Problém: článek má `updated: "2026-06-11"`, tedy k 11. 6. 2026 nemůže tvrdit aktualizaci z 29. 6. 2026 jako hotovou skutečnost. To je věcný rozpor a porušení aktuálnosti.

**Návrh opravy:**  
Buď:
- změnit `updated` na datum po 29. 6. 2026, pokud článek opravdu revidujete po tomto datu, nebo
- odstranit zmínku o 29. 6. 2026 a psát jen stav platný k 11. 6. 2026.

Totéž opravte ve:
- `faq[0]`
- sekci „Co Google 15. května 2026 vydal“
- DoDont položce „guide byl aktualizovaný 29. června 2026“
- shrnutí „poslední aktualizace 29. června 2026“

---

### [BLOCKER] `answer` je příliš dlouhá a nesplňuje formát „krátké odpovědi“
> `answer: "Google 15. května 2026 vydal ... Pro citace mimo Google ..."`  

Problém: pole `answer` má zhruba 70+ slov a míchá dvě teze. Zadání chce 40–60 slov, samostatně srozumitelných, začínajících definicí. Tohle je na AI citovatelnost slabší.

**Návrh opravy:**  
Zkraťte na 40–60 slov a začněte definicí, např. stylem:  
„**AEO a GEO jsou v pojetí Googlu součást SEO.** Oficiální guide z 15. května 2026 říká, že Google AI Overviews a AI Mode využívají stejný index a podobné signály kvality jako běžné vyhledávání. Pro Google tedy nejde o novou disciplínu, ale o rozšíření klasického SEO.“

---

### [BLOCKER] Nepodložené a příliš silné tvrzení o „stejných ranking signálech“
> „…čerpají ze stejného Search indexu a **stejných ranking signálů** jako klasické výsledky.“  
> „Stejný Search index a stejné ranking signály, které dělají klasické organické výsledky, dělají i citace v AI odpovědích.“

Problém: v zadání je opora pro „same index and quality signals“. Článek ale opakovaně používá silnější formulaci „stejné ranking signály“, někde dokonce jako plnou ekvivalenci. To je snadno přestřelené. Google typicky formuluje opatrněji a mluví o stejném indexu a signálech kvality, ne o identickém řazení a stejném scoringu v každém kroku.

**Návrh opravy:**  
Nahraďte všude formulacemi:
- „ze stejného Search indexu a podobných / stejných signálů kvality“
- „pro Google AI prvky je základem stejný index a kvalita obsahu jako v běžném vyhledávání“
- nepsat „stejný scoring systém“, pokud to nemáte doslovně doložené

K opravě jsou hlavně:
- `answer`
- první odstavec těla
- Insight po sekci „Co Google 15. května 2026 vydal“
- citace „the same index and quality signals…“ vs. vaše parafráze „ranking signály“

---

### [BLOCKER] Tvrzení „Není separátní AI algoritmus“ je nedoložené a přehnané
> „**Není separátní AI algoritmus** — AI Overviews sedí nad Search indexem, ne vedle něj.“

Problém: tohle z dostupných faktů neplyne. Z toho, že systém používá Search index a signály kvality, nevyplývá, že neexistuje samostatná vrstva výběru, generování, slučování zdrojů a citací. Formulace je příliš absolutní.

**Návrh opravy:**  
Přepsat na opatrnější variantu:
- „Nejde o oddělený index; AI Overviews a AI Mode staví nad standardním Search indexem.“
- „Výběr zdrojů pro AI odpověď navazuje na běžnou vyhledávací infrastrukturu Googlu, ale nelze to zjednodušit na prosté převzetí klasického pořadí výsledků.“

---

### [WARNING] RAG je zmíněn bez českého vysvětlení a s příliš technickou jistotou
> „Google v guide popisuje techniku, kterou AI Overviews a AI Mode používají — **Retrieval-augmented generation (RAG)**.“

Problém: zadání výslovně chce „RAG s vysvětlením“. Tady zkratku sice rozepíšete, ale ne česky. Navíc formulace „používají“ zní kategoricky; vhodnější je vysvětlit princip.

**Návrh opravy:**  
Použít např.:
- „…princip **RAG, tedy generování odpovědi nad dohledanými zdroji**.“
- „Jde o postup, kdy systém nejprve vyhledá relevantní stránky ve standardním indexu a teprve nad nimi skládá odpověď.“

---

### [WARNING] Zakázaný nebo nevhodný slovník: „schema.org“, „markup“, „supporting link“, „eligible“, „POV“, „buzzword“
Citace:
> „neexistuje speciální **schema.org typ**“  
> „nové speciální **markup**“  
> „**podpůrný odkaz**“ je v pořádku, ale v zadání výslovně hlídat překlad supporting link  
> „**POV**“  
> „marketingový **buzzword**“

Problém: článek místy sklouzává do slovníku, který je buď příliš anglický, nebo v rozporu s požadovaným stylem. Zadání výslovně chce česky a bez zbytečných anglicismů.

**Návrh opravy:**  
- „schema.org typ“ → „typ strukturovaných dat podle schema.org“ nebo prostě „speciální strukturovaná data“
- „markup“ → „značení“ nebo „strukturovaná data“
- „POV“ → „vlastní úhel pohledu“
- „buzzword“ → „marketingový pojem“ nebo „prázdná nálepka“

K opravě hlavně:
- CompareTable řádek „Strukturovaná data“
- Mistake 01
- CTA „speciální markup“

---

### [WARNING] FAQ odpovědi jsou místy příliš dlouhé a méně sebestačné
Např.:
> „Znamená to, že llms.txt, WebMCP a listy s krátkými úseky jsou zbytečné?“

Problém: otázka je hraničně technická a ne úplně běžná pro cílového čtenáře. Odpověď navíc zavádí další pojem bez kontextu. FAQ má mít reálné otázky a samostatně srozumitelné odpovědi.

**Návrh opravy:**  
Přeformulovat na uživatelskou otázku:
- „Musím kvůli Google AI Overviews nasadit llms.txt nebo jiné speciální soubory?“
A v odpovědi oddělit Google vs. jiné AI systémy bez dalších neukotvených termínů.

---

### [BLOCKER] Zmínka o „WebMCP“ a „Lighthouse Agentic Browsing“ je nedoložená a mimo hlavní téma
> „…některé nástroje mimo Google (například nová **Lighthouse Agentic Browsing** kategorie nebo experimentální agentické workflow) s ním podle dostupné dokumentace pracují.“

Problém: tohle je velmi konkrétní tvrzení bez opory v dodaných klíčových faktech. Do článku o Google guide vnáší další tvrzení, která působí spekulativně a mohou být věcně sporná.

**Návrh opravy:**  
Celou větu odstranit nebo výrazně zjemnit:
- „Mimo Google se objevují experimenty se speciálními soubory a strojově čitelnými instrukcemi, ale nejde o jednotný standard.“
Nepřidávejte názvy, které v textu dále nevysvětlujete a nemáte pevně doložené.

---

### [WARNING] Přehnané tvrzení „Pro Google AI Overviews z velké části ano“
> „Když mám dobré SEO, mám AI vyřešené“ … „**Pro Google AI Overviews z velké části ano.**“

Problém: příliš silné zjednodušení. I při dobrém SEO nelze tvrdit, že je AI Overviews „vyřešené“. Zadání výslovně varuje před overclaimy; bezpečnější je „může výrazně pomoci“, ne „ano“.

**Návrh opravy:**  
- „Pro Google AI Overviews je dobré SEO základ a může výrazně zvýšit šanci na zobrazení, ale samo o sobě nic negarantuje.“

---

### [WARNING] Nepodložené číselné tvrzení o podílu Googlu v ČR
> „Pro Google (**zhruba 79 až 82 procent českého vyhledávání podle veřejných dat 2024–2025**)…“

Problém: číslo není v článku nijak ukotvené a pro článek datovaný 2026 je navíc opřené o starší období. To snižuje přesnost i aktuálnost.

**Návrh opravy:**  
Buď:
- přidejte konkrétní zdroj a vysvětlete, že jde o poslední dostupná veřejná data, nebo
- číslo úplně vypusťte a nechte jen: „Pro Google jako dominantní vyhledávač v Česku…“

---

### [WARNING] Tvrzení o Seznamu je příliš volné
> „Pro Seznam.cz podle dostupné dokumentace platí obdobný princip strukturovaných dat a kvalitního obsahu.“

Problém: článek je o Google guide. Tohle je boční tvrzení bez přesného doložení a bez hodnoty pro hlavní argument. Navíc „obdobný princip“ je vágní.

**Návrh opravy:**  
Odstraňte, nebo jasně označte jako obecnou analogii:
- „Tento článek řeší primárně Google; u dalších vyhledávačů je potřeba vycházet z jejich vlastní dokumentace.“

---

### [WARNING] CompareTable obsahuje několik nedoložených tezí
Citace:
> „V dostupných analýzách citací (Profound, LLM Pulse)…“  
> „Reddit, Wikipedia, LinkedIn a odborná média mají v analýzách citací mimo Google výrazně silnější váhu“  
> „klasické strukturovaná data pomáhají i mimo Google…“

Problém: tabulka míchá doložené body z Google guide s externími tvrzeními bez zdrojů. V analysis článku to jde, ale musíte být mnohem opatrnější.

**Návrh opravy:**  
- přidat „podle vybraných veřejných analýz“ a konkrétní odkazy/citace, nebo
- zjemnit formulace na „mohou hrát roli“, „často se zmiňují“, „není jednotně potvrzeno“
- opravit gramatiku „klasické strukturovaná data“ → „klasická strukturovaná data“

---

### [WARNING] Mistake 04 obsahuje sporný detail o Wikidatech/Wikipedii
> „…jestli máte položku ve **Wikidatech, Wikipedii**, kolik odborných článků o vás vzniklo.“

Problém: tohle už je příliš konkrétní a zní jako univerzální podmínka. Pro řadu firem to není realistické ani nutné. Bez zdrojů je to přestřelené.

**Návrh opravy:**  
- „…jak o vaší značce mluví důvěryhodné zdroje a odborné weby.“
Příklady typu Wikipedia/Wikidata nechte jen pokud je jasně označíte jako možné, ne nutné.

---

### [TIP] Titulek je funkční, ale nesplňuje ideálně klíčové slovo vepředu
> `title: "AEO a GEO jsou pořád SEO — co říká Google 2026"`

Problém: délka je zhruba v pořádku, ale pro cílové KW `aeo geo seo` by šlo dát klíčový motiv víc dopředu a těsněji.

**Návrh opravy:**  
Např.:
- „AEO, GEO a SEO: co říká Google guide 2026“
- „AEO a GEO = SEO? Co říká Google guide 2026“

Nejde o blocker, ale pomůže SEO i srozumitelnosti.

---

### [TIP] Meta description je v pořádku, ale lze ji zpřesnit pro hledanost
> `description: "Google 15. května 2026 vydal oficiální průvodce AI vyhledáváním. Říká, že AEO a GEO jsou stále SEO. Co z toho platí a co je zjednodušení."`

Tohle je použitelné. Jen bych zvážil doplnění „Google AI Overviews“ nebo „AI Mode“, protože to v článku řešíte a je to konkrétnější.

**Návrh opravy:**  
Např.:
- „Google 15. 5. 2026 vydal oficiální guide pro Google AI Overviews a AI Mode. Platí, že AEO a GEO jsou pořád SEO? Přehled bez zkratek a mýtů.“

---

### [WARNING] Prvních ~100 slov těla jsou informačně dobrých, ale začátek může být citovatelnější
> „Google 15. května 2026 vydal první oficiální průvodce… Hlavní zpráva: AEO…“

Problém: úvod je slušný, ale pro AI citovatelnost by byl silnější, kdyby první věta začínala definicí, ne událostí.

**Návrh opravy:**  
Začněte přímo tezí:
- „AEO a GEO jsou v pojetí Googlu součást SEO. Google to popsal v oficiálním guide z 15. května 2026…“

---

### [WARNING] Interní odkazy v těle chybí; jsou až v CTA
Problém: v článku nejsou průběžné interní odkazy na relevantní pilíře/produkty/sekce, přestože téma k tomu vybízí. Zadání je chce, ne jen v závěru.

**Návrh opravy:**  
Vložit konkrétně:
- v sekci o technických podmínkách odkaz na relevantní technický/pilířový obsah, pokud existuje
- v sekci o strukturovaných datech odkaz na článek/produkt k této oblasti
- v části „Praktický závěr“ jemný interní odkaz na `/audit/` nebo `/pack/`, ne jen finální CTA

---

### [WARNING] CTA je obsahově správně směrované, ale slibuje příliš široký záběr
> „AI SEO audit za 9 990 Kč projde technický stav, strukturovaná data, obsahovou kvalitu i off-page signály a navrhne plán priorit.“

Problém: CTA směřuje správně primárně na Audit a sekundárně na Pack, to je dobře. Ale formulace „AEO/GEO požadavky pro citace mimo Google“ může působit jako příliš široký příslib vzhledem k nejistotě těchto systémů.

**Návrh opravy:**  
Změkčit:
- „…posoudí technický stav, strukturovaná data, obsahovou kvalitu i signály, které mohou zvyšovat šanci na citace mimo Google…“

---

### [TIP] Pozitivní: slug, kategorie a CTA směr jsou zvolené dobře
> `slug: "aeo-geo-je-porad-seo"`  
> `category: "analysis"`  
> závěr směřuje na `/audit/` a sekundárně `/pack/`

Tohle sedí se zadáním. Není nutná změna.

---

### [TIP] Pozitivní: zákaz „schema markup“ je převážně dodržen
Používáte většinou „strukturovaná data“, což je správně. Jen dočistit zbytky typu „markup“ a „schema.org typ“.

---

## Shrnutí priorit oprav

1. **Srovnat datumy** — 29. 6. 2026 vs. `updated: 2026-06-11`.  
2. **Zkrátit a upravit `answer`** na 40–60 slov, definice na začátku.  
3. **Zjemnit tvrzení** o „stejných ranking signálech“, „stejném scoringu“ a „není separátní AI algoritmus“.  
4. **Vyházet nebo doložit spekulativní pasáže** o Lighthouse Agentic Browsing, WebMCP, Wikidatech, podílech trhu a externích analýzách.  
5. **Dočistit slovník**: markup, POV, buzzword, RAG česky vysvětlit.  

Po těchto úpravách bude článek publikačně výrazně bezpečnější.