**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k této verzi článku. Opravy po 1. auditu jsou vidět a většina původních blockerů je skutečně odstraněná. Přesto v textu ještě zůstává několik věcných a slovníkových problémů a pár míst, kde článek sklouzává k nedoloženým tvrzením o „mimo Google“ ekosystému.

---

## Nálezy

### [BLOCKER] Nedoložené a příliš sebejisté tvrzení o RAG u Google AI Overviews a AI Mode
> `stats.label: "princip generování odpovědi nad dohledanými zdroji, který Google AI Overviews a AI Mode používají"`  
> `Google v guide popisuje princip, na kterém AI Overviews a AI Mode staví — RAG, tedy generování odpovědi nad dohledanými zdroji`

**Problém:**  
Tohle je formulováno jako fakt, ale není bezpečné tvrdit takto přímo, že Google „používá RAG“, pokud to v uvedeném guide není explicitně a jednoznačně popsáno tímto termínem. I kdyby princip retrieval + generation z dokumentace vyplýval, článek to podává příliš kategoricky. U Google navíc bývá vhodnější držet se přesné formulace dokumentace, ne zkratkového technického překladu.

**Návrh opravy:**  
Změnit na opatrnější formulaci, například:
- „Guide popisuje postup, kdy AI odpověď vychází z dohledaných zdrojů ve Search indexu a následného sestavení odpovědi.“
- Ve `stats` raději nahradit „RAG“ za popis bez zkratky:
  - `value: "dohledané zdroje + sestavení odpovědi"`
  - `label: "zjednodušený princip popsaný v guide; nepoužíváme technickou zkratku jako jistotu, pokud ji Google takto sám neuvádí"`

---

### [BLOCKER] Přehnané tvrzení o „stejných signálech kvality“ jako absolutním pravidlu pro citace
> `answer: "... využívají stejný Search index a stejné signály kvality jako běžné vyhledávání."`  
> `... stejný Search index a stejné signály kvality, které dělají klasické organické výsledky, jsou i za citacemi v AI odpovědích Googlu.`  
> `... the same index and quality signals that earn rankings are what earn citations in AI answers`

**Problém:**  
Změna z „ranking signály“ na „signály kvality“ je správná, ale text je stále místy příliš absolutní. Pokud AI Overviews „staví nad standardním Search indexem“, neznamená to automaticky, že citace fungují prostě přes „stejné signály“ bez dalších vrstev výběru. Ostatně sám článek později správně říká, že to nelze zjednodušit na převzetí klasického pořadí.

**Návrh opravy:**  
Sjednotit formulaci na bezpečnější verzi:
- „Google uvádí, že AI Overviews a AI Mode vycházejí ze stejného Search indexu a z obdobných signálů kvality jako běžné vyhledávání.“
- Místo „jsou i za citacemi“ raději:
  - „hrají důležitou roli i při výběru zdrojů pro AI odpovědi“
- Pokud ponecháváte anglickou citaci, český výklad by měl být méně kategorický než parafráze.

---

### [BLOCKER] Spekulativní tvrzení o chování konkurentů bez dostatečného ukotvení
> `Pro citace mimo Google ... některé taktiky, které Google explicitně nedoporučuje, mohou pomáhat.`  
> `... u některých nástrojů může přínos být. Nutnost to není, možný přínos ano.`  
> `... krátké úseky 50 až 150 slov bývají často citované víckrát ...`  
> `Reddit, Wikipedia, LinkedIn a odborná média se ve vybraných veřejných analýzách citací mimo Google zmiňují jako silnější váha`

**Problém:**  
Článek už přidal „podle vybraných veřejných analýz“, což je posun správným směrem. Ale stále z toho místy dělá poměrně silné doporučení bez uvedení konkrétních zdrojů, metodiky nebo aspoň jasné kvalifikace, že jde o pozorování třetích stran, nikoli potvrzené pravidlo platné napříč systémy.

**Návrh opravy:**  
Na všech těchto místech přitvrdit opatrnost:
- „v některých veřejných analýzách se objevuje“
- „nelze zobecnit na všechny AI systémy“
- „jde o praktickou hypotézu k testování, ne o potvrzené pravidlo“
U tabulky i sekce „Nejčastější nedorozumění“ doplnit krátkou větu typu:
- „U systémů mimo Google chybí jednotná oficiální dokumentace, proto je vhodné tato doporučení brát jako pracovní hypotézy a ověřovat je na vlastních datech.“

---

### [WARNING] Zakázaný/slabě vhodný termín „markup“ byl opraven jen částečně, ale zůstává nevhodné „značení“
> `Google explicitně píše, že nepotřebujete nové speciální soubory, značení ani strukturovaná data „jen pro AI".`

**Problém:**  
Ve slovníku je preferováno „strukturovaná data“. Slovo „značení“ je sice lepší než „schema markup“, ale tady je zbytečně vágní a stylisticky působí jako překlad z angličtiny.

**Návrh opravy:**  
Upravit na:
- „... nepotřebujete nové speciální soubory ani nová strukturovaná data jen kvůli AI.“
Případně:
- „... nepotřebujete nové speciální soubory ani speciální typy strukturovaných dat jen kvůli AI.“

---

### [WARNING] Nedostatečně přesná formulace technických podmínek
> `stats.label: "technické podmínky Googlu pro zobrazení jako podpůrný odkaz v AI Overviews (indexovaná stránka, snippet, Search technical requirements)"`  
> `Pro zobrazení jako podpůrný odkaz ... musí stránka splňovat tři technické podmínky`

**Problém:**  
Slovo „musí“ a přesný počet „tři technické podmínky“ je zbytečně rigidní, pokud jde spíš o shrnutí dokumentace než o úplný a uzavřený seznam všech faktorů. Navíc „mobilní zobrazení, HTTPS“ jako součást „Search technical requirements“ je už vaše interpretace; může být správná, ale je to derivát, ne přímá citace guide.

**Návrh opravy:**  
Změnit na:
- „Guide jako základ uvádí tři technické předpoklady…“
- nebo „Pro možnost zobrazení jako podpůrný odkaz Google zmiňuje zejména tři technické předpoklady…“
A v bodu 3:
- „... a obecné technické požadavky Google Search“
bez rozepisování, pokud to není přesně v guide takto rozepsané.

---

### [WARNING] „Dobře rankuje“ je hovorové a méně vhodné pro brand voice
> `Pokud stránka dobře rankuje v běžném Google Search...`

**Problém:**  
Anglicismus/oborový slang. Pro daný web je lepší srozumitelnější formulace.

**Návrh opravy:**  
Nahradit:
- „Pokud si stránka vede dobře v běžných organických výsledcích Google...“
nebo
- „Pokud se stránka dobře zobrazuje v běžném organickém vyhledávání...“

---

### [WARNING] FAQ odpověď začíná negací, což oslabuje citovatelnost
> `Podle oficiálního Google guide ne — Google výslovně říká...`

**Problém:**  
Požadavek na citovatelnost byl splněn u hlavního `answer`, ale i FAQ má být sebestačné. Odpověď začínající „ne“ je použitelná, ale méně silná jako samostatná citace.

**Návrh opravy:**  
Začít definicí/sdělením:
- „Google podle oficiálního guide nevyžaduje llms.txt ani jiné speciální soubory pro AI Overviews.“
Až pak doplnit kontrast k systémům mimo Google.

---

### [WARNING] Meta description je pravděpodobně příliš dlouhá
> `description: "Google 15. 5. 2026 vydal oficiální guide pro Google AI Overviews a AI Mode. Platí, že AEO a GEO jsou pořád SEO? Přehled bez zkratek a mýtů."`

**Problém:**  
Na první pohled se pohybuje spíš nad doporučeným rozsahem 70–160 znaků. Není to extrémní blocker, ale zadanému rámci to nejspíš neodpovídá.

**Návrh opravy:**  
Zkrátit například na:
- „Google v květnu 2026 vydal guide pro AI Overviews a AI Mode. Co z něj plyne pro AEO, GEO a SEO v praxi?“
nebo
- „Jsou AEO a GEO podle Googlu stále SEO? Shrnutí oficiálního guide pro AI Overviews a AI Mode z roku 2026.“

---

### [WARNING] Titulek je spíš pod doporučeným rozsahem
> `title: "AEO a GEO = SEO? Co říká Google guide 2026"`  
> Kontext uvádí: `(45 znaků)`

**Problém:**  
Po předchozí opravě už není chybný, ale stále neodpovídá zadanému ideálu 50–60 znaků. Navíc cílové KW „aeo geo seo“ je tam sice obsahově, ale ne úplně v nejsilnější podobě a ne úplně přirozeně.

**Návrh opravy:**  
Pokud nechcete měnit koncept, stačí lehce doplnit:
- „AEO a GEO = SEO? Co říká Google guide v roce 2026“
- nebo „AEO, GEO a SEO: co říká Google guide pro rok 2026“

To není nutně blocker, ale z čistě SEO auditu je to stále nedotažené.

---

### [WARNING] URL slug je funkční, ale neodpovídá plně hlavní variantě KW
> `slug: "aeo-geo-je-porad-seo"`

**Problém:**  
Slug je smysluplný a čitelný, takže není špatně. Jen nevyužívá část „google guide 2026“ / „google ai optimization guide“, která je pro tento konkrétní článek velmi nosná.

**Návrh opravy:**  
Pouze pokud ještě není publikováno a neřešíte stabilitu URL:
- `google-guide-2026-aeo-geo-seo`
- nebo `aeo-geo-seo-google-guide-2026`
Pokud už je slug schválený, lze ponechat.

---

### [WARNING] CTA je už výrazně lepší, ale produktové rozlišení může být konkrétnější
> `AI SEO audit za 9 990 Kč...`  
> `AI SEO Wireframe Pack za 1 490 Kč...`

**Problém:**  
CTA konečně směřuje na konkrétní produkty, což je správně. Slabina je spíš v tom, že audit i pack jsou popsány podobně a čtenář nemusí rychle pochopit, pro koho je co.

**Návrh opravy:**  
Přidat jednu větu s rozhodovacím filtrem:
- „Pokud chcete hotové posouzení priorit, zvolte Audit 9 990 Kč. Pokud si chcete web upravit sami, dává větší smysl Pack 1 490 Kč.“
Není to blocker, ale zvýší to srozumitelnost i konverzní čistotu.

---

### [TIP] Dobrý posun v první odpovědi a úvodu
> `answer: "AEO a GEO jsou v pojetí Googlu součást SEO..."`  
> `**AEO a GEO jsou v pojetí Googlu součást SEO.** ...`

**Hodnocení:**  
Tohle je po opravě výrazně lepší. Odpověď začíná definicí, je stručná a v zásadě dává smysl i samostatně. Směr správný.

**Doporučení:**  
Jen zjemnit absolutní formulaci o „stejných signálech kvality“ podle blockeru výše.

---

### [TIP] Brand voice je obecně věcnější než v předchozí verzi
> `Google guide platí pro Google. Pro citace v ChatGPT... je AI ekosystém širší...`  
> `Ne oboje jako protiklad.`

**Hodnocení:**  
Text už méně tlačí prodej a víc vysvětluje. To je plus.

**Doporučení:**  
Ještě odstranit pár hovorovějších nebo oborově interních výrazů:
- „rankuje“
- „publisher“
- „off-page“ bez krátkého vysvětlení

Možné náhrady:
- „vydavatel webu / provozovatel webu“
- „zmínky a odkazy mimo vlastní web“

---

### [TIP] Interní odkaz na audit je přidán správně
> `... řešíme v [AI SEO auditu](/audit/).`

**Hodnocení:**  
Tohle odpovídá zadání. Průběžný interní odkaz je relevantní a nepůsobí agresivně.

**Doporučení:**  
Volitelně doplnit ještě jeden interní odkaz na `/pack/` dřív než ve finálním CTA, pokud v článku existuje sekce o DIY postupu. Není nutné.

---

## Shrnutí
Opravy po 1. auditu jsou **z větší části dostatečné**, ale článek ještě **není bezpečné pustit bez úprav**. Hlavní zbývající problém je, že text stále na několika místech podává jako jistotu to, co je spíš **interpretace** nebo **hypotéza**:

1. **RAG u Googlu** je tvrzeno příliš kategoricky.  
2. **„Stejné signály kvality“** jsou místy podány moc absolutně.  
3. Tvrzení o **llms.txt, krátkých úsecích a off-page signálech mimo Google** jsou pořád příliš sebejistá bez silnějšího omezení nebo citace zdrojů.  

Po zjemnění těchto míst, zkrácení meta description a drobném vyčištění slovníku bude článek výrazně bezpečnější k publikaci.