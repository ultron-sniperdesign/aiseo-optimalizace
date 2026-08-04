Níž jen problémy, které po druhé kontrole pořád vidím.

---

# 1. Frontmatter vs tělo: rozpor u „+1 % měsíční přesun trafficu na AI“

**Místo:** frontmatter → `stats`  
**Citace:**  
> `value: "+1 %"`  
> `label: "měsíční přesun trafficu na AI"`

**Problém:**  
Tohle je pořád příliš tvrdé a navíc hůř opřené než formulace v těle. V textu už píšeš opatrněji:

> „AI referral traffic podle trendů Similarwebu z roku 2025 rostl řádově o **jednotky procent měsíčně**.“

Frontmatter z toho dělá konkrétní číslo a ještě mění význam: „růst AI referral trafficu“ ≠ „měsíční přesun trafficu na AI“. „Přesun“ implikuje kauzální redistribuci napříč kanály, což z citovaného podkladu neplyne.

**Dopad:**  
Nedokončená oprava / nové přestřelení ve frontmatteru. Tělo je opatrnější než summary vrstva.

**Navržená oprava:**  
Buď to odstranit, nebo převést na opatrnější a věcně přesnější formulaci, např.:  
> `label: "řádový růst AI referral trafficu"`  
a neuvádět konkrétní `+1 %`, pokud na něj nemáš přímý zdroj.

---

# 2. FAQ znovu tvrdí dostupnost GSC reportu i pro malou firmu, a to příliš plošně

**Místo:** frontmatter → `faq` → „Build vs buy stack — co si pořídit?“  
**Citace:**  
> „Pro malou firmu (do 10 zaměstnanců) stačí bezplatná vrstva: **Google Search Console včetně reportu Generativní AI funkce**...“

**Problém:**  
V těle už správně píšeš:

> „**report Generativní AI funkce nemá každý web** — Google v nápovědě uvádí, že ho zpřístupňuje části vlastníků webů.“

FAQ je s tím v rozporu. Podává report jako standardní součást free stacku pro malou firmu, bez omezení dostupnosti.

**Dopad:**  
Nedokončená oprava mezi tělem a frontmatterem.

**Navržená oprava:**  
> „Google Search Console, **včetně reportu Generativní AI funkce, pokud je pro daný web dostupný**...“

---

# 3. Tělo a FAQ se rozcházejí v opatrnosti kolem malé firmy a „AIO se vyplatí“

**Místo:** frontmatter → `faq` → „Funguje AIO strategie pro malou firmu nebo jen pro enterprise?“  
**Citace:**  
> „... pokud zákazník před nákupem aktivně používá AI nástroje, **AIO se vyplatí**.“

**Problém:**  
Tahle formulace zůstala ve FAQ přesně v podobě, kterou první audit rozporoval. V těle jsi přitom opatrnější:

> „Největší dopad má tam, kde zákazník před nákupem aktivně používá AI nástroje...“

a jinde:

> „AIO není relevantní pro každý byznys stejně.“

FAQ z toho ale dělá téměř automatický závěr bez dalších podmínek.

**Dopad:**  
Nedokončená oprava ve frontmatteru.

**Navržená oprava:**  
Změkčit na podmíněné tvrzení, např.:  
> „... je to silný signál, že AIO může dávat smysl, pokud zároveň máte obsahovou kapacitu, SEO základ a umíte dopad měřit.“

---

# 4. Vnitřní rozpor: „nemůže ji vlastnit jeden člověk“ vs „jeden člověk za ni má nést odpovědnost“

**Místo 1:** frontmatter → `faq` → „Kdo má v týmu vlastnit AIO?“  
**Citace:**  
> „AIO je cross-funkční zodpovědnost — **nemůže ji vykonávat jeden člověk ani jedno oddělení, ale jeden člověk za ni má nést odpovědnost** před vedením.“

**Místo 2:** tělo → sekce „Org chart pro AIO“  
**Citace:**  
> „AIO je cross-funkční zodpovědnost — **nemůže ji vlastnit jeden člověk ani jedno oddělení**.“

**Problém:**  
Tady se míchá „ownership“ ve smyslu accountable owner a „execution“ ve smyslu vykonávání. FAQ to vysvětluje ještě obhajitelně, ale tělo tvrdí absolutně, že to „nemůže vlastnit jeden člověk“, zatímco o pár řádků níž máš:

> „**Vlastnictví celku typicky u marketingového ředitele** nebo VP Marketing.“

To je přímý rozpor v terminologii.

**Dopad:**  
Vnitřní nekonzistence po úpravách.

**Navržená oprava:**  
Sjednotit slovník:  
- „vykonávání je cross-funkční“,  
- „za celek je accountable owner jeden člověk“.

Např. v těle:  
> „AIO nejde **vykonávat** jedním člověkem ani jedním oddělením, ale **za celek má mít odpovědnost** jeden owner.“

---

# 5. „Google v nápovědě uvádí, že ho zpřístupňuje části vlastníků webů“ je věcně nejisté / formulováno nepřesně

**Místo:** sekce „Kde se AI viditelnost dá dnes měřit“  
**Citace:**  
> „Google v nápovědě uvádí, že ho **zpřístupňuje části vlastníků webů**.“

**Problém:**  
Tohle zní jako doslovné produktové pravidlo segmentace uživatelů, ne jako opatrný popis omezené dostupnosti. Pokud nemáš přesnou formulaci z helpu, je to riskantní parafráze. Navíc „části vlastníků webů“ je stylisticky i významově divné — vlastníci webů nejsou distribuční kohorta.

**Dopad:**  
Nové přestřelení vzniklé opravou / nepřesná formulace zdroje.

**Navržená oprava:**  
Bezpečněji:  
> „Google v nápovědě uvádí, že report **zatím není dostupný ve všech účtech / pro všechny property**.“

Podle přesného znění zdroje to upravit doslovně.

---

# 6. Věcný problém: „FAQPage schema ... kvůli strojové srozumitelnosti obsahu“ je podáno jako jistota bez opory

**Místo 1:** leading KPI č. 2  
**Citace:**  
> „FAQPage schema coverage — ... **Ne kvůli rozšířenému výsledku ve Vyhledávání, ten skončil 7. 5. 2026, ale kvůli strojové srozumitelnosti obsahu**“

**Místo 2:** více míst v článku, kde se FAQPage doporučuje jako součást quick wins / coverage

**Problém:**  
Po zániku FAQ rich results je obhajoba FAQPage přes „strojovou srozumitelnost“ možná, ale v textu je podaná jako faktický benefit, ne jako hypotéza / pracovní heuristika. Pokud k tomu nemáš doložený zdroj, je to silnější, než by mělo být. Schema může pomáhat interní konzistenci a validaci struktury, ale tvrdit přímo benefit pro AI viditelnost chce opatrnější režim.

**Dopad:**  
Věcné přestřelení, které první audit neřešil naplno.

**Navržená oprava:**  
> „... ne kvůli rozšířenému výsledku ve Vyhledávání, ten skončil 7. 5. 2026; FAQPage tu používáme hlavně jako **strukturní vrstvu obsahu a interní standardizaci**, ne jako garanci viditelnosti.“

---

# 7. „A/B testy answer blocků ... vůči citation rate v AI nástrojích“ implikují měřitelnou kauzalitu, kterou článek jinde sám zpochybňuje

**Místo:** L4 Strategic  
**Citace:**  
> „... systematicky testuje různé varianty struktury odpovědí a formulace klíčových pasáží **vůči citation rate v AI nástrojích**.“

**Problém:**  
A o něco níž sám píšeš:

> „Citation count, share-of-voice v AI odpovědích ... nejsou absolutní pravdy.“  
> „Výstupy AI nástrojů jsou volatilní...“  
> „Bez kontroly atribuce nelze izolovat AIO dopad...“

Tvrzení o testování „vůči citation rate“ zní jako robustní experimentální disciplína. Vzhledem k volatilitě a slabé kontrolovatelnosti je to spíš observační testování / experimentování s velmi opatrnou interpretací, ne standardní A/B test v tvrdém smyslu.

**Dopad:**  
Vnitřní metodický rozpor.

**Navržená oprava:**  
> „... systematicky porovnává varianty struktury odpovědí a sleduje jejich **pravděpodobný vztah** k citation rate v AI nástrojích...“

nebo  
> „... provádí kvaziexperimenty / opakované testy, ne tvrdé kauzální A/B testy.“

---

# 8. „AIO playbook nad rozbitým SEO efekt nevyvolá“ zůstalo v těle, i když ve FAQ už je to změkčené

**Místo:** sekce „Kdy AIO ještě neřešit — anti-fit checklist“  
**Citace:**  
> „**AIO playbook nad rozbitým SEO efekt nevyvolá.**“

**Problém:**  
Ve FAQ „Kolik trvá...“ už máš opravené a opatrnější:

> „Bez SEO základů ... bývá efekt AIO slabý, pomalý a hůř měřitelný.“

Tady ale zůstala stará kauzální absolutní formulace. To je přesně typ nedokončené opravy mezi částmi článku.

**Dopad:**  
Nedokončená oprava v těle.

**Navržená oprava:**  
Sjednotit s FAQ, např.:  
> „AIO playbook nad rozbitým SEO mívá slabý a hůř měřitelný efekt.“

---

# 9. „FAQPage + HowTo schema“ jako plošný quick win je po 7. 5. 2026 přinejmenším nedovysvětlené

**Místo 1:** frontmatter → `howto` → „Den 30–60 — Quick wins implementace“  
**Citace:**  
> „... doplnění FAQ s reálnými dotazy, **FAQPage + HowTo schema**.“

**Místo 2:** 90-day plán pro L1  
**Citace:**  
> „**FAQPage + HowTo schema na top 10 stránkách**“

**Problém:**  
FAQPage tu doporučuješ velmi plošně jako quick win, ačkoli jsi současně správně doplnil, že FAQ rich result skončil. U HowTo navíc v článku nevidím vysvětlení, proč je to quick win napříč weby a jaký je přesný mechanismus přínosu po změnách ve výsledcích vyhledávání. V aktuální verzi to vypadá jako setrvačné schema doporučení z dřívější éry, ne jako pečlivě obhájený krok.

**Dopad:**  
Možná věcná slabina po opravách; minimálně nedostatečně doložené doporučení.

**Navržená oprava:**  
Buď doplnit podmínky použití, nebo ubrat plošnost:  
> „FAQPage / HowTo schema jen tam, kde odpovídá skutečné struktuře stránky a dává smysl jako interní struktura obsahu; ne jako automatický growth lever.“

---

# 10. „ChatGPT search, Perplexity čerpají z indexovaného obsahu“ je zkratka podaná příliš jednoduše

**Místo:** sekce „Časté chyby v AIO strategii“, bod 1  
**Citace:**  
> „AI nástroje (ChatGPT search, Perplexity) **čerpají z indexovaného obsahu**.“

**Problém:**  
Tohle je příliš zjednodušené. Tyto systémy nepracují jen stylem „mají index webových stránek, tedy SEO základ = vše“. Využívají kombinaci web retrievalu, vlastních zdrojů, modelových znalostí, partnerství a dalších vrstev. Jako praktická zkratka to jde, ale v článku strategického typu je to formulováno moc tvrdě.

**Dopad:**  
Věcné zjednodušení.

**Navržená oprava:**  
> „AI nástroje se při odpovědích často opírají o veřejně dostupný a dohledatelný webový obsah; bez solidního SEO a indexovatelnosti se proto AIO hůř opírá o kvalitní základ.“

---

# 11. „První měřitelný posun“ v `stats` a v textu není dost ukotvený

**Místo:** frontmatter → `stats`  
**Citace:**  
> `value: "90"`  
> `label: "dnů na první měřitelný posun"`

**Problém:**  
V těle sice opakovaně používáš 90 dní jako pracovní cyklus, ale „první měřitelný posun“ je pořád poměrně silný claim. Zbytek textu je ve skutečnosti opatrnější:

> „90 dní je standardní cyklus pro měřitelný posun.“  
> „Záleží na výchozím levelu.“

Tj. nejde o obecně platné číslo, spíš o plánovací horizont.

**Dopad:**  
Přestřelení v summary vrstvě.

**Navržená oprava:**  
> `label: "doporučený 90denní cyklus"`  
nebo  
> `label: "typický horizont prvního vyhodnocení"`

---

To jsou místa, která bych po druhém auditu ještě otevřel.