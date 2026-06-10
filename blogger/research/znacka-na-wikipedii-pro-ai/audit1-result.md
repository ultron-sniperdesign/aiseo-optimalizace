**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku.

---

## 1) Věcná správnost

### [BLOCKER] Přehnané a nedoložené tvrzení o podílu Wikipedie napříč modely
> `answer: "Wikipedia tvoří podle analýz zhruba 47 % top citovaných zdrojů ChatGPT a podobně vysoký podíl mají i ostatní AI modely."`

> `faq: "Wikipedia tvoří zhruba 47 % top 10 citovaných zdrojů ChatGPT a podobně vysoký podíl má u Claude, Perplexity a Google AI Overviews."`

> `**Wikipedia je v roce 2026 jednou z mála pák...** Podle analýz citací napříč ChatGPT, Claude, Perplexity a Google AI Overviews tvoří Wikipedia zhruba 47 % top 10 citovaných zdrojů ChatGPT.`

**Problém:** V zadání je opora pro cca **47,9 % u ChatGPT** (Profound, 680M citací, 2026), ne pro „podobně vysoký podíl“ u všech ostatních modelů. To je nad rámec doložených faktů.

**Návrh opravy:**  
Změnit na formulaci typu:
- „Podle dostupných analýz tvoří Wikipedia přibližně 47,9 % top 10 citací v ChatGPT; i u dalších AI systémů patří mezi nejčastěji citované zdroje.“
- V FAQ i `answer` odstranit tvrzení o „podobně vysokém podílu“ u Claude/Perplexity/Google AI Overviews, pokud nemáte přesná čísla a zdroj.

---

### [BLOCKER] Overclaim „výrazně zvýšit šanci“ / „výrazně vyšší šance“ bez opory
> `answer: "Mít článek o značce může výrazně zvýšit šanci být citovaný v AI odpovědích..."`

> `faq: "...šance, že ji AI cituje..., je výrazně vyšší než u značky bez něj."`

> `Mít kvalitní článek o značce v encyklopedii proto znamená výrazně vyšší šanci být citovaný`

**Problém:** To je silnější kauzální claim, než dovolují dostupná data. Analýzy ukazují vysokou citovanost Wikipedie, ale neprokazují jednoduše, že samotná existence článku o značce „výrazně“ zvýší citace konkrétní značky.

**Návrh opravy:**  
Použít bezpečnější jazyk:
- „může zvýšit šanci“
- „může pomoci AI lépe pochopit entitu značky“
- „podle dostupných analýz bývá Wikipedia často citovaným zdrojem, takže přítomnost značky na Wikipedii může pomoci v dotazech, kde dává encyklopedický zdroj smysl“

---

### [WARNING] „Jedna z mála pák, které ... reálně hnou“
> `Wikipedia je v roce 2026 jednou z mála pák, které u AI viditelnosti značky reálně hnou.`

**Problém:** Zbytečně kategorické a marketingově vyhrocené. Není to přesně měřitelné a zní to jako prodejní zkratka.

**Návrh opravy:**  
„Wikipedia je v roce 2026 jedním z viditelných zdrojů, které mohou ovlivnit AI citace značky.“

---

### [WARNING] Nepřesnost kolem „Wikipedia stránka bude smazaná“
> `Pokud máte méně než 3–5 reálných referencí, Wikipedia stránka bude smazaná.`

**Problém:** Příliš absolutní. Notabilita se neposuzuje čistě mechanicky podle počtu. 3–5 je v zadání výslovně jen informální minimum.

**Návrh opravy:**  
„Pokud máte méně než 3–5 opravdu podstatných nezávislých zdrojů, šance na schválení je obvykle nízká a návrh bývá často zamítnut nebo později smazán.“

Totéž opravit i v `howto.steps[0]` a ve Stepperu.

---

### [WARNING] „Articles for Creation je oficiální cesta pro editory s konfliktem zájmu“
> `Articles for Creation je oficiální cesta pro editory s konfliktem zájmu.`

**Problém:** Přesnější je „doporučená cesta“, což ostatně uvádí i zadání. „Oficiální“ zní normativně silněji, než je vhodné.

**Návrh opravy:**  
„Articles for Creation je doporučená cesta pro editory s konfliktem zájmu.“

---

### [WARNING] „AI modely ji proto vnímají jako autoritativní zdroj“
> `AI modely ji proto vnímají jako autoritativní zdroj informací o entitách.`

**Problém:** Antropomorfizace a nedoložená interpretace. Lze říct, že je často citovaná nebo často používaná jako zdroj, ne že ji modely „vnímají“.

**Návrh opravy:**  
„AI systémy ji často používají jako zdroj základních informací o entitách“  
nebo  
„V analýzách AI citací patří mezi často používané zdroje faktických informací.“

---

### [WARNING] Tvrzení o Wikidata jako „primární zdroj“
> `Wikidata často slouží jako primární zdroj.`

**Problém:** Bez zdroje příliš silné. U LLM odpovědí je obtížné prokázat přímé použití Wikidat jako primárního zdroje v konkrétních systémech.

**Návrh opravy:**  
„Wikidata může pomáhat se strojově čitelnými fakty o entitách a bývá užitečná pro základní identifikační údaje.“

---

### [WARNING] „Nižší bariéra notability, položka může existovat i bez Wikipedia článku“
> `Nižší bariéra notability, položka může existovat i bez Wikipedia článku.`

**Problém:** Směr je správný, ale formulace je moc zkratkovitá. Wikidata sice mají nižší bariéru, ale neznamená to volný průchod.

**Návrh opravy:**  
„Wikidata má obvykle nižší vstupní bariéru než článek na Wikipedii, ale i tam je potřeba doložit, že entita je rozumně ověřitelná a relevantní.“

---

### [TIP] Číslo 47 % sjednotit na 47,9 % nebo „cca 48 %“
> `~47 %`

**Problém:** V zadání máte konkrétnější oporu pro ~47,9 %. Když už se článek opírá o čísla, je lepší být konzistentní.

**Návrh opravy:**  
Používat všude buď:
- „47,9 %“, nebo
- „cca 48 %“

---

## 2) Brand voice a slovník

### [BLOCKER] Zakázaný termín „schema.org“ / anglicismus v přímé podobě
> `Organization, Person, Product schema.org na firemních stránkách.`

**Problém:** Zadání výslovně zakazuje „schema markup“ a chce používat „strukturovaná data“. Tady sice není přesně „schema markup“, ale formulace je pořád technicistní a nesedí do požadovaného slovníku.

**Návrh opravy:**  
„Strukturovaná data pro organizaci, osobu a produkt na firemních stránkách.“

---

### [WARNING] Zakázaný / nevhodný anglicismus „snapshot“ zde není, ale text má jiné zbytečné anglicismy
> `lagging indicator`  
> `press coverage`  
> `counter-vandalism tým`  
> `single-purpose accounts`  
> `userpage`  
> `talk stránce`  
> `namespace Draft`  
> `watchlist`

**Problém:** Článek míří na českého marketéra/majitele firmy a má „vysvětlovat, ne prodávat tvrdě“. Tady je zbytečně moc interní wiki/anglické terminologie.

**Návrh opravy:**  
Nahradit českými výrazy:
- „lagging indicator notability“ → „zpožděný signál významnosti“
- „press coverage“ → „nezávislé mediální pokrytí“
- „counter-vandalism tým“ → „dobrovolníci a správci, kteří hlídají problematické editace“
- „single-purpose accounts“ → „účty založené jen kvůli jedné značce“
- „userpage“ → „uživatelská stránka“
- „talk stránka“ → „diskusní stránka“
- „namespace Draft“ → „návrh v prostoru Draft / návrh článku“
- „watchlist“ → „seznam sledovaných stránek“

---

### [WARNING] „copywriteři“
> `najatí copywriteři`

**Problém:** Pravopisná chyba a navíc anglicismus, který tu není nutný.

**Návrh opravy:**  
„najatí copywriteři“ → lépe „najatí autoři textů“ nebo „externí marketéři / agentura“

---

### [WARNING] „leader v oboru“
> `Vynechte „leader v oboru", „inovativní"...`

**Problém:** Uvádíte to jako negativní příklad, což je v pořádku, ale kvůli voice bych to počeštil.

**Návrh opravy:**  
„Vynechte formulace jako ‚lídr v oboru‘ nebo ‚inovativní značka‘.“

---

### [TIP] „Wikipedia“ vs. „Wikipedie“
> Napříč článkem se střídá `Wikipedia` a `Wikipedie`.

**Problém:** Nekonzistentní čeština.

**Návrh opravy:**  
Pro český web sjednotit primárně na **Wikipedie**.  
Klíčová slova ve frontmatteru můžete ponechat i s variantou „wikipedia“, ale v těle textu být konzistentní.

---

## 3) Citovatelnost pro AI

### [BLOCKER] `answer` je příliš dlouhá a příliš „názorová“
> `answer: "Wikipedia tvoří podle analýz zhruba 47 %...` (cca 70+ slov)

**Problém:** Zadání chce „krátkou odpověď“ 40–60 slov, samostatně srozumitelnou, začínající definicí. Tady je odpověď delší a hned skáče do statistik.

**Návrh opravy:**  
Přepsat na 40–60 slov a začít definicí, např.:
„Článek o značce na Wikipedii je veřejně ověřovaný encyklopedický záznam založený na nezávislých zdrojích. Pro AI citace může být užitečný, protože Wikipedie patří mezi často citované zdroje, ale firma musí splnit přísná pravidla významnosti, doložit nezávislé články a při placené editaci přiznat konflikt zájmu.“

---

### [WARNING] Prvních ~100 slov je silných, ale stále lehce přepálených
> `Wikipedia je v roce 2026 jednou z mála pák...`

**Problém:** Otevírá to článku energii, ale pro AI citovatelnost je lepší méně rétoriky a přesnější definice tématu.

**Návrh opravy:**  
Začít definicí:
„Článek o značce na Wikipedii dává smysl hlavně tehdy, když o firmě už podstatně psala nezávislá média. Wikipedie patří podle dostupných analýz mezi nejčastěji citované zdroje v AI odpovědích, ale sama významnost firmy nevytváří...“

---

### [WARNING] FAQ obsahuje několik odpovědí s přehnanou jistotou
> `Pomáhá článek na Wikipedii AI citacím značky?`  
> `Podle dostupných analýz výrazně.`

**Problém:** Jednoslovná teze „výrazně“ je moc silná.

**Návrh opravy:**  
„Podle dostupných analýz může pomáhat, protože Wikipedie patří mezi často citované zdroje v AI odpovědích.“

---

### [TIP] FAQ je jinak dobře zvolená a praktická
Krátké potvrzení: otázky jsou relevantní k záměru čtenáře a většina odpovědí je samostatně použitelná. Po oslabení overclaimů bude sekce silná.

---

## 4) SEO

### [WARNING] Title je příliš dlouhý
> `title: "Značka na Wikipedii pro AI citace: kdy to dává smysl 2026"`

**Problém:** Přesahuje doporučených 50–60 znaků. Odhadem ~61–64 znaků podle počítání variant mezer/diakritiky.

**Návrh opravy:**  
Zkrátit, ideálně s KW vepředu, např.:
- „Značka na Wikipedii pro AI citace v roce 2026“
- „Wikipedia pro AI citace: má smysl pro značku?“

---

### [TIP] Meta description je v pořádku
> `description: "Wikipedia tvoří téměř polovinu top citací ChatGPT..."`

Délkově i obsahem vyhovuje. Jen po věcné stránce doporučuji „Wikipedie“ a případně „podle dostupných analýz“.

---

### [TIP] Slug je smysluplný
> `slug: "znacka-na-wikipedii-pro-ai"`

Pro článek dává smysl a odpovídá tématu.

---

### [WARNING] Chybí interní odkazy v těle na související obsah / pilíře
**Problém:** CTA odkazuje na `/pack/` a `/audit/`, to je dobře. Ale v těle textu nejsou odkazy na relevantní pilířové články o Wikidatech, strukturovaných datech, AI citacích nebo Google AI Overviews, pokud na webu existují.

**Návrh opravy:**  
Doplnit jen tam, kde to přirozeně sedí:
- v části o Wikidatech odkaz na článek o Wikidatech,
- v části o strukturovaných datech odkaz na článek o strukturovaných datech,
- v části o AI citacích odkaz na vysvětlení AI citací / GEO / AEO.
Pokud tyto články neexistují, nález ignorujte.

---

## 5) Aktuálnost k roku 2026

### [WARNING] „v roce 2025 bylo blokováno přes 400 účtů“ potřebuje opatrnější ukotvení
> `V roce 2025 bylo takto blokováno přes 400 účtů.`

**Problém:** Fakt je v zadání opřený, ale v článku chybí „podle dostupných reportů / veřejných záznamů“. U tak citlivého čísla je lepší drobné zjemnění.

**Návrh opravy:**  
„Podle veřejně citovaných reportů bylo v roce 2025 zablokováno přes 400 účtů kvůli nezveřejněné placené editaci.“

---

### [TIP] Rok 2026 je jinak použit správně
`updated: "2026-06-10"` odpovídá zadání. Text neobsahuje problematické „letos / příští rok“ bez ukotvení. To je v pořádku.

---

## 6) CTA

### [TIP] CTA směřuje správně na produkt
> `AI SEO Wireframe Pack za 1 490 Kč`  
> `AI SEO audit za 9 990 Kč`

To odpovídá zadání: tutorial článek má primárně směřovat na Pack, audit sekundárně. Tohle je splněné.

---

### [WARNING] Primární CTA by mělo být ještě o něco méně obecné a více navázané na téma článku
> `...kde jsou Wikipedia, Wikidata i strukturovaná data probrané prakticky.`

**Problém:** Funkčně dobré, ale může být konkrétnější: co si z Packu člověk odnese právě pro rozhodnutí „má / nemá řešit Wikipedii“.

**Návrh opravy:**  
Doplnit jednu konkrétní větu typu:
„Pack vám pomůže rychle ověřit, jestli vaše značka splňuje základní podmínky pro Wikipedii, nebo jestli je rozumnější začít Wikidaty, PR a úpravou webu.“

---

## 7) Technické a redakční chyby v markdownu

### [BLOCKER] Neplatné typografické uvozovky v frontmatteru / howto
> `text: „Vynechte „leader v oboru", „inovativní"...`

**Problém:** Tady jsou chytré české uvozovky uvnitř YAML-like struktury a kombinují se s ASCII uvozovkami. To může rozbít parsing nebo způsobit nekonzistentní render.

**Návrh opravy:**  
Použít standardní rovné uvozovky a escapování, např.:
`text: "Vynechte formulace jako „lídr v oboru“ nebo „inovativní“. Každé podstatné tvrzení musí mít odkaz na nezávislý zdroj. Tón je popisný a neutrální."`

---

### [WARNING] „svojí“ místo „svou“
> `Můžu si napsat svojí Wikipedia stránku?`

**Problém:** Jazykově slabší formulace.

**Návrh opravy:**  
„Můžu si napsat svou stránku na Wikipedii?“

---

### [WARNING] „Wikipedia stránka“ / „Wikipedia článek“
**Problém:** V češtině je přirozenější „článek na Wikipedii“ než „Wikipedia stránka“.

**Návrh opravy:**  
Napříč textem sjednotit na:
- „článek na Wikipedii“
- „návrh článku na Wikipedii“

---

## Co je na článku dobře

- Téma je pro cílového čtenáře relevantní a praktické.
- CTA odpovídá typu článku.
- Struktura H2 a sekcí je logická.
- Práce s COI, disclosure a AfC jde správným směrem.
- Důležitá protiváha „kdy raději ne“ je už teď silná a důvěryhodná.

---

## Priorita oprav před publikací

1. **Oslabit a zpřesnit všechny claims o dopadu Wikipedie na AI citace konkrétní značky.**
2. **Odstranit nedoložené tvrzení o „podobně vysokém podílu“ u dalších modelů.**
3. **Zkrátit a přeformulovat `answer` na 40–60 slov, začít definicí.**
4. **Vyčistit anglicismy a sjednotit „Wikipedie“.**
5. **Opravit title na 50–60 znaků.**
6. **Opravit technický problém s uvozovkami v `howto.steps`.**

Pokud chcete, můžu v dalším kroku vrátit **jen seznam přesných formulací k nahrazení po řádcích** bez přepisování celého článku.