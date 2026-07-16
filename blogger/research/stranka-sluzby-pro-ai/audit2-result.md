**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou jen konkrétní nálezy k tomuto článku ve 2. kole auditu.

---

## Nálezy

### [BLOCKER] JSON-LD ukázka je věcně problematická v pojmenování služby vs. serviceType
> ```json
> "name": "AI SEO audit",
> "serviceType": "SEO audit",
> ```

**Problém:**  
V zadání píšete, že `serviceType` byl sjednocen s názvem, ale v ukázce stále sjednocený není. „AI SEO audit" a „SEO audit" nejsou totéž. To je drobný, ale zbytečný nesoulad v příkladu, který má učit přesnost.

**Návrh opravy:**  
Buď:
- `serviceType: "AI SEO audit"`, nebo
- `name: "SEO audit"`  
podle toho, co má být hlavní označení služby na stránce.

---

### [BLOCKER] Tvrzení o tom, že `Service` říká i „komu je určená a v jakém cenovém rámci“, je příliš silné vzhledem k ukázce i realitě
> „Smysl je jinde: dát strojům jednoznačně přečíst, o jakou službu jde, komu je určená a v jakém cenovém rámci.“

**Problém:**  
Tohle je na hraně overclaimu. Strukturovaná data typu `Service` mohou část těchto informací nést, ale samy o sobě nezajišťují, že je systémy takto využijí, natož „jednoznačně“. Navíc „komu je určená“ je zde opřeno o `audience`, které není pro běžné nasazení u služby klíčová ani běžně využívaná vlastnost v tom smyslu, jak text naznačuje.

**Návrh opravy:**  
Změnit na bezpečnější formulaci, např.:  
- „Smysl je jinde: pomoci strojům lépe přečíst, o jakou službu jde a kdo ji poskytuje; případně i další údaje, pokud jsou na stránce skutečně uvedené.“  
Případně oddělit cenu a publikum jako nepovinné doplňky.

---

### [WARNING] `audience` v ukázce může působit jako doporučený standard, i když v článku tvrdíte opak
> ```json
> "audience": { "@type": "Audience", "audienceType": "E-shopy a B2B firmy" },
> ```

**Problém:**  
Formálně to může být podle Schema.org přípustné, ale pro tutorial je to sporné jako součást „zjednodušeného minima“. U čtenáře to vytváří dojem, že bez `Audience` je zápis neúplný nebo méně správný. Přitom sám text říká, že jde o volitelné vlastnosti.

**Návrh opravy:**  
Buď:
- `audience` z ukázky úplně vyhodit a nechat opravdu jen minimum, nebo
- výslovně pod ukázku doplnit větu typu: „Vlastnost `audience` je volitelná a pro základní nasazení ji často nepotřebujete.“

---

### [WARNING] `offers.price` bez `url`/vazby na viditelnou nabídku je pro výukový příklad příliš zkrácené
> ```json
> "offers": {
>   "@type": "Offer",
>   "price": "9990",
>   "priceCurrency": "CZK"
> }
> ```

**Problém:**  
Není to nutně chybně, ale jako tutorial pro službovou stránku je ukázka až moc osekaná a může svádět k tomu, že stačí přidat číslo do JSON-LD. Přitom celý článek správně zdůrazňuje shodu s viditelným obsahem. U služby by bylo vhodné didakticky víc ukotvit, že cena má být na stránce skutečně vidět a ideálně navázaná na konkrétní nabídku.

**Návrh opravy:**  
Ne nutně rozšiřovat JSON-LD, stačí doplnit pod ukázku přesnější poznámku, např.:  
- „Pokud uvádíte `offers`, cena by měla být na stránce jasně viditelná a vztahovat se ke stejné službě.“

---

### [WARNING] V textu zůstává účelové tlačení na cenu, které je vzhledem k nabídce vlastních služeb citlivé
> „Bez ceny ale vaše stránka na nejčastější dotaz konkrétně neodpovídá, což snižuje šanci, že poslouží jako zdroj konkrétní odpovědi.“

**Problém:**  
Tohle je už výrazně lepší než v 1. kole, ale pořád je článek v konfliktu zájmů: web prodává vlastní služby za pevné ceny a současně radí ceny uvádět. Samotná formulace je ještě obhajitelná, ale v součtu s více pasážemi o ceně působí normativněji, než by tutorial měl.

**Návrh opravy:**  
Doplnit krátké vyvažující upřesnění přímo do sekce o ceně, ne jen jednou větou výše:  
- „U některých služeb je vhodnější uvést rámec, model nacenění nebo příklady scénářů než jednu pevnou částku.“  
Tím se sníží dojem, že článek obhajuje hlavně vlastní obchodní model.

---

### [WARNING] „AI odpovídá z toho, co najde“ je zjednodušení bez kontextu
> „Když se někdo ptá, kolik služba stojí, AI odpovídá z toho, co najde...“

**Problém:**  
Jako popularizační zkratka to funguje, ale je to příliš kategorické. Ne každé AI rozhraní odpovídá stejně, ne vždy cituje weby a ne vždy vybírá „od konkurence“. U tutorialu zaměřeného na přesnost by bylo lepší trochu ubrat jistotu.

**Návrh opravy:**  
Např.:  
- „Když se někdo ptá, kolik služba stojí, AI systémy obvykle vycházejí z informací, které najdou na webu. Pokud u vás nic není, mohou použít obecnější nebo cizí zdroje.“

---

### [WARNING] „služba pro všechny je služba pro nikoho“ je marketingová zkratka, ne věcný výrok
> „Protože služba pro všechny je ve výsledku služba pro nikoho.“

**Problém:**  
Je to klišé. Do brand voice, kterou máte nastavenou jako věcnou a vysvětlující, to úplně nesedí. V FAQ to působí spíš jako poučka než vysvětlení.

**Návrh opravy:**  
Nahradit věcněji, např.:  
- „Příliš široké vymezení zhoršuje pochopení toho, pro jaké situace je služba vhodná.“

---

### [TIP] První odstavec i `answer` fungují, ale poslední věta v úvodu už je vata
> `answer`:  
> „Stránka služby je stránka popisující jednu konkrétní službu... Pomáhají strukturovaná data typu Service a krátká odpověď nahoře.“
>
> Úvod článku:  
> „... Pomáhají strukturovaná data typu `Service` a krátká odpověď nahoře. Tento návod ukazuje, co na stránku dát a čemu se vyhnout.“

**Problém:**  
První dvě věty jsou dobré a samostatně použitelné. Poslední věta „Tento návod ukazuje...“ už nepřidává faktickou hodnotu pro citovatelnost AI.

**Návrh opravy:**  
Buď ji smazat, nebo nahradit ještě jedním konkrétním faktem, např. o cenovém rámci / rozsahu / průběhu.

---

### [TIP] Titulek je obsahově dobrý, ale na hraně SEO délky a nevede přesně hlavním klíčovým spojením
> `title: "Stránka služby pro AI: návod pro služby a B2B"`

**Problém:**  
Není špatný, ale opakuje „služby“ a druhá část je slabší. Pro tutorial by šel zpřesnit tak, aby hlavní klíčové spojení bylo přirozenější a méně tautologické.

**Návrh opravy:**  
Např.:
- „Stránka služby pro AI: návod pro B2B weby“
- „Stránka služby pro AI: co uvést na webu služeb“

Jen pokud se vejdete do cílové délky.

---

### [TIP] Keyword „service strukturovaná data“ je jazykově kostrbaté
> ```yaml
> keywords:
>   - "service strukturovaná data"
> ```

**Problém:**  
Není to chyba v těle článku, ale v metadatech to působí nepřirozeně česky. Zvlášť když jinde správně používáte „strukturovaná data typu Service“.

**Návrh opravy:**  
Změnit na:
- „strukturovaná data typu Service“
nebo
- „Service strukturovaná data“ jen pokud to odpovídá reálné hledanosti.

---

### [TIP] Anglicismus „rich“ ve frontmatteru je interní, ale pokud se propisuje ven, není vhodný
> `variant: "rich"`

**Problém:**  
Pokud je to čistě interní technická hodnota, neřeším. Pokud se ale propisuje do veřejného rozhraní, je to zbytečný anglicismus mimo povolené technické názvy.

**Návrh opravy:**  
Jen ověřit, že je to neveřejné interní nastavení.

---

### [TIP] Krátké potvrzení: CTA je tentokrát správně konkrétní
> „AI SEO Wireframe Pack za 1 490 Kč…“ / „AI SEO audit za 9 990 Kč…“

**Hodnocení:**  
Tohle je v pořádku. CTA je konkrétní, navazuje na obsah a nesklouzává ke generickému „kontaktujte nás“.

---

### [TIP] Krátké potvrzení: zakázané formulace a největší overclaimy z 1. kola jsou z většiny odstraněné

**Hodnocení:**  
Oproti předchozí verzi je text výrazně čistší. Největší problém teď není agresivní marketing, ale spíš jemné přepínání jistoty u ceny a u přínosu strukturovaných dat.

---

## Shrnutí k publikaci

Článek je už blízko publikaci, ale před vydáním bych **určitě opravil JSON-LD příklad** a **zmírnil 2–3 formulace**, které stále přeceňují roli ceny a strukturovaných dat. Největší riziko teď není „tvrdý prodej“, ale to, že tutorial občas zní jistěji, než dovolují fakta.