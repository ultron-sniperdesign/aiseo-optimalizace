## BLOKER

### 1. Nepodložené „dva režimy“ jako čisté binární pravidlo
> „**ChatGPT odpovídá dvěma způsoby.** Buď z toho, co se naučil při tréninku… Nebo si dohledá aktuální stránky na webu…“

Příliš kategorické. Pro laiky je to použitelné zjednodušení, ale takhle podané už je zavádějící. Ve skutečnosti je to spíš **odpověď bez externího načítání vs. odpověď s nástrojem pro vyhledání/načtení zdrojů**, přičemž interní orchestrace může být složitější. Tvrzení „jsou to dva režimy“ vydává pozorovatelný výstup za doložený interní mechanismus.

**Oprava:** formulovat jako „prakticky se to navenek chová dvěma způsoby“.

---

### 2. „Pak odpověď nemá odkazy“ není spolehlivé pravidlo
> „…**pak odpověď nemá odkazy**…“
>
> „Když odpověď obsahuje citace na konkrétní stránky, proběhlo vyhledávání. Když je bez odkazů, model nejspíš odpovídal z natrénované paměti.“

První věta je moc tvrdá, druhá už opatrnější. Bez odkazů ≠ jistý důkaz „paměťového režimu“. A s odkazy ≠ jistota konkrétního mechanismu přesně tak, jak ho popisujete. To je potřeba sjednotit.

**Oprava:** všude držet „typicky“, „většinou“, „silný signál, ne důkaz“.

---

### 3. Tvrzení o Bingu je slabě podložené a v textu působí jistěji, než by mělo
> „U ChatGPT se opakovaně uvádí napojení na infrastrukturu Bingu.“

Tohle je přesně místo, kde článek klouže od pozorování a historických partnerství k tvrzení o současném mechanismu. U ChatGPT / OpenAI se v různých časech a produktech používaly různé zdroje a integrace; nelze to podat jako stabilní mechanismus bez velmi opatrné formulace.

**Oprava:** „historicky a podle řady pozorování se často zmiňuje Bing / microsoftí vyhledávací infrastruktura, ale OpenAI detailní routing a aktuální backend veřejně nepopisuje“.

---

### 4. „Načte několik vrácených stránek“ je nedoložené a příliš konkrétní
> „**Načte několik vrácených stránek** a přečte je.“
>
> „A **čte jen několik stránek**, ne celý index…“

Tohle je důležitý problém. Že model nečte „celý web“ je rozumné zjednodušení. Ale **„několik stránek“** je konkrétní tvrzení o rozsahu, který veřejně doložený není jako obecné pravidlo. V různých odpovědích může být počet zdrojů různý, může proběhnout více kol dotazů, filtrování, rozkliků, syntéza přes snippets apod.

**Oprava:** „pracuje jen s omezeným výběrem nalezených výsledků / stránek, ne s celým indexem“.

---

### 5. „Který režim se spustí, rozhoduje model sám a vy to neovlivníte“ je přestřelené
> „**Který režim se spustí, rozhoduje model sám** podle povahy dotazu a **vy to neovlivníte**.“
>
> „0 možností, jak si režim vynutit zvenčí“

Takto absolutně ne. Zvenčí ho provozovatel webu opravdu přímo neřídí, ale:
- uživatel může vyhledání výslovně chtít,
- formulace dotazu pravděpodobnost vyhledávání ovlivňuje,
- produktové nastavení / režim / tool availability také.

„Neovlivníte“ je pro provozovatele webu přijatelné jen pokud výslovně doplníte **„ne přímo“**. „0 možností“ je zbytečně bombastické a technicky nepřesné.

**Oprava:** „provozovatel webu to neumí přímo vynutit; může jen nepřímo zvýšit šanci tím, že odpovídá na dotazy, u nichž se vyhledávání spouští častěji.“

---

### 6. Knowledge cutoff a „GPT-5.5 / prosinec 2025“
> „U výchozího modelu GPT-5.5 se uvádí prosinec 2025.“

Tohle je buď neověřené, nebo silně závislé na konkrétním produktu a čase. Bez zdroje je to rizikové. Navíc „výchozí model GPT-5.5“ samo o sobě může být produktově nepřesné označení.

**Oprava:** buď doložit přesnou veřejnou dokumentaci ke konkrétnímu modelu v konkrétním rozhraní, nebo zobecnit: „každý model má své datum cutoffu, které se liší podle verze“.

---

## DOPORUČENÍ

### 7. „Model si je vědom, že na to z paměti nemá“ je antropomorfní a mechanisticky moc silné
> „Model si je vědom, že na to z paměti nemá.“

Pro laiky srozumitelné, ale technicky nepřesné. Lepší je popsat chování, ne vnitřní „vědomí“.

**Oprava:** „systém vyhodnotí, že odpověď může vyžadovat aktuální data“.

---

### 8. „Dotazy na konkrétní firmu nebo produkt“ spouštějí vyhledávání „zvlášť když jde o menší subjekt“
> „Zvlášť když jde o menší subjekt, o kterém model z tréninku nemá dost.“

Plausibilní, ale neprezentovat jako pravidlo. To je přesně typ odhadu, který vypadá rozumně, ale není obecně doložený.

**Oprava:** přidat „může“ a „často“, případně uvést jako hypotézu odvozenou z praxe.

---

### 9. „Optimalizace na přesné znění dotazu se míjí účinkem“ je přehnané
> „Model nehledá vaši frázi, ale svoji — **proto se optimalizace na přesné znění dotazu míjí účinkem**.“

Přestřelené. I když model query přepisuje, **lexikální shoda a jasně formulované odpovědi pořád mohou pomáhat** přes klasické retrieval signály i přes sémantickou shodu. Tvrdit, že se míjí účinkem, je moc silné.

**Oprava:** „samotná optimalizace na přesnou frázi nestačí; důležitější je pokrytí tématu a jasná odpověď“.

---

### 10. „V Bingu — zkontrolujte si to dotazem site:“ je příliš zjednodušené
> „V Bingu — zkontrolujte si to dotazem site:“

`site:` není spolehlivý audit indexace ani viditelnosti. Pro začátečníky je to už zavádějící zjednodušení.

**Oprava:** „orientačně ověřte, zda se stránky v Bingu objevují; samotný `site:` dotaz je jen hrubý signál, ne důkaz úplné indexace.“

---

### 11. Robots a „OpenAI roboti“ jsou v tomto kontextu zkratka, která mate mechanismus
> „Nemít zablokované roboty OpenAI v robots.txt“

Pokud v tomtéž článku tvrdíte napojení na Bing, pak je tahle rada bez dovysvětlení nejasná. Pro vyhledávací citace může být relevantní víc než jeden crawler / přístupová cesta. Navíc robots pro OpenAI ≠ automaticky vyřešená nalezitelnost v search stacku.

**Oprava:** oddělit:
- crawl/indexace pro veřejné vyhledávače,
- přístup AI crawlerů,
- načitatelnost stránky pro browser fetch.

---

### 12. „Když ne, žádný web v ní nefiguroval“ je moc silné
> „Když ne, žádný web v ní nefiguroval…“

Nevíte. Můžete říct „nebyly zobrazené citace“ nebo „nejspíš nešlo o odpověď založenou na explicitně citovaných webových zdrojích“. Ne „žádný web nefiguroval“.

---

### 13. „U odpovědi z paměti se hraje o to, jestli se o vaší značce psalo“ je hrubé zjednodušení
> „…hraje o něco jiného — o to, jestli se o vaší značce vůbec někde psalo, dokud se model trénoval.“

To redukuje pretraining na brand mentions. Pro začátečníky to sice dává intuitivní rámec, ale je to moc úzké. Jde i o obecnou přítomnost tématu, entity, vztahů, reputačních signálů napříč daty.

**Oprava:** „zda se vaše značka a související informace objevovaly v datech, ze kterých si model vytvořil obecné znalosti“.

---

## DROBNOSTI

### 14. „Není v tom náhoda ani trik“
> „Není v tom náhoda ani trik — jsou to dva různé způsoby…“

Zbytečně jisté. Variabilita odpovědí není jen „dva způsoby“, ale i stochastika, různé tool-cally, různé formulace dotazu, produktové změny.

---

### 15. „Aktuální ke dni dotazu“
> „Jak čerstvé to je — Aktuální ke dni dotazu“

Příliš silné. Má být „potenciálně aktuálnější“, ne zaručeně aktuální.

---

### 16. „u jednotlivých tvrzení“
> „Ano, u jednotlivých tvrzení“

Neplatí konzistentně. Citace mohou být jemněji nebo hruběji mapované.

---

### 17. „Až s další generací modelu, tedy měsíce a roky“
> „Až s další generací modelu, tedy měsíce a roky“

Spekulativní časování. Nevíte.

---

## CO CHYBÍ

### 18. Jasné oddělení tří vrstev
Chybí rozlišit:
1. **pretraining knowledge**,
2. **live search / retrieval**,
3. **zobrazení citací v UI**.

Teď text místy směšuje „měl zdroje“, „načetl web“, „ukázal odkazy“ jako totéž.

---

### 19. Upozornění, že mechanismus se liší podle produktu a verze
Chybí věta typu:  
„Chování se může lišit podle modelu, tarifu, zapnutých nástrojů a aktuální verze produktu.“

To je pro tento typ článku zásadní pojistka proti přestřelení.

---

### 20. Konkrétní praktický postup pro čtenáře
Použitelnost je jen napůl. Čtenář ví, že má sledovat odkazy, ale chybí krátký minimální workflow:
- vyberte 10–20 relevantních dotazů,
- u každého zapište, zda byly citace,
- pokud ano, které domény se opakují,
- pokud ne, neřešte přepis stránky jako první krok.

To by článek udělalo akčnější bez kanibalizace ostatních textů.

---

### 21. Limity diagnostiky
Chybí dodat, že z jedné odpovědi **nelze bezpečně odvodit interní pipeline**. Lze soudit jen podle vnějších signálů.

---

## Verdikt
Hlavní problém článku není směr, ale **míra jistoty**. Text opakovaně převádí rozumné pracovní zjednodušení na údajně známý mechanismus. Největší rizika: **binární „dva režimy“, Bing jako backend, „několik stránek“, absolutní tvrzení o odkazech a cutoff u konkrétního modelu bez opory**. Pro publikaci bych tyto body upravil.