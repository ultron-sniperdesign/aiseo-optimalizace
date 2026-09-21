## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je fakticky výrazně lepší než původní teze v briefu: správně odděluje licenci/autorství od porozumění obsahu obrázku, netvrdí garantovaný odznak licence a netvrdí doložený vliv `ImageObject` na odpovědi s AI. Přesto má několik věcných problémů, z toho hlavně vynechané podmínky u tvrzení o Google AI funkcích a příliš široké zobecnění technických požadavků na obrázky ve strukturovaných datech.

---

## Nálezy

### [BLOCKER] U tvrzení o Přehledech od AI / AI Mode chybí běžné podmínky způsobilosti

**Problemové místo:**

> „Pro odpovědi s AI podle své dokumentace nic zvláštního navíc nechce…“

> „V dokumentaci k nim stojí, že pro zobrazení v Přehledech od AI ani v režimu AI nejsou žádné další požadavky a není potřeba žádná zvláštní optimalizace.“

> „Google k funkcím s AI uvádí, že žádné zvláštní značení nepotřebují.“

**Problém:**

Podle briefu a dokumentace Google AI features platí tvrzení jen za podmínek: stránka musí být indexovaná a způsobilá k úryvku ve Vyhledávání. Viditelnost lze také omezit přes `nosnippet`, `data-nosnippet`, `max-snippet` nebo `noindex`.

Článek sice správně říká „nic zvláštního navíc“, ale v několika místech neuvádí základní podmínky, za kterých věta platí. U cizí platformy je vynechaná podmínka podle zadání blocker.

**Návrh opravy:**

Doplnit formulaci všude, kde se tvrdí „žádné další požadavky“:

> „Podle dokumentace Googlu nejsou pro Přehledy od AI ani režim AI potřeba žádné speciální optimalizace nad rámec běžné způsobilosti ve Vyhledávání: stránka musí být indexovatelná a způsobilá k úryvku. Zobrazení nebo použití obsahu mohou omezit direktivy jako `nosnippet`, `data-nosnippet`, `max-snippet` nebo `noindex`.“

---

### [BLOCKER] Technické minimum 50 000 px je podané příliš široce i pro `Product`

**Problemové místo:**

> „Značení se dá zapsat samostatně, nebo vložit do typu, který obrázek používá — třeba jako hodnotu vlastnosti `image` u `Article` nebo `Product`.“

Následuje:

> „Když obrázek vkládáte do jiného typu, hlídejte technické minimum, které Google u obrázků ve strukturovaných datech uvádí: soubor ve formátu podporovaném Google Obrázky, **aspoň 50 000 pixelů** po vynásobení šířky a výšky…“

**Problém:**

Podle briefu je požadavek **≥ 50 000 px** doložený pro obrázek v `Article` a souvisejících rich result dokumentacích, ne jako univerzální pravidlo pro každý typ včetně `Product`.

Tím, že věta nejdřív jmenuje `Article` i `Product` a pak obecně říká „u obrázků ve strukturovaných datech“, vzniká dojem, že 50 000 px je obecná podmínka Googlu pro všechny obrázky ve strukturovaných datech. To podklady neunesou.

**Návrh opravy:**

Zúžit tvrzení:

> „U `Article` a dalších typů, kde to dokumentace Googlu výslovně uvádí, hlídejte také technické minimum pro obrázky: podporovaný formát, crawlovatelnost a indexovatelnost, minimálně 50 000 px po vynásobení šířky a výšky a doporučené poměry 16 : 9, 4 : 3 a 1 : 1. U jiných typů, například `Product`, kontrolujte konkrétní dokumentaci daného rich resultu.“

---

### [WARNING] Článek zjednodušuje, z čeho Google poznává obsah obrázku — chybí zmínka o počítačovém vidění

**Problemové místo:**

> „Text si přečte rovnou; u obrázku vidí soubor a k němu to, co jste k němu dopsali.“

> „**co na něm je** (to řeší text okolo).“

> „Tohle je vrstva, ze které stroj pozná obsah obrázku.“

**Problém:**

Článek správně zdůrazňuje alt text, okolní text a název souboru. Jenže formulace místy vyznívá tak, že stroj/Google poznává obsah obrázku pouze z doprovodných textů a metadat.

Google v dokumentaci k obrázkům dlouhodobě uvádí, že k pochopení obrázku používá mimo jiné alt text, obsah stránky a také algoritmy počítačového vidění. Publikačně ovlivnitelné signály jsou alt text, okolní text, název souboru a technické zpřístupnění obrázku — ale není přesné tvrdit, že stroj „vidí“ jen soubor a dopsané údaje.

**Návrh opravy:**

Zjemnit absolutní formulace:

> „U obrázku Google pracuje s více signály včetně samotného obrazového obsahu, ale publikačně ovlivnitelný kontext mu dodává hlavně alt text, okolní text, název souboru a technické zpřístupnění obrázku.“

A místo:

> „co na něm je (to řeší text okolo)“

použít:

> „co na něm je a k čemu na stránce slouží — to pomáhá vysvětlit alt text, popisek, okolní text a název souboru.“

---

### [WARNING] Tvrzení o testu validátorem není doložené v briefu ani v části „Co je ověřeno a čím“

**Problemové místo:**

> „Ukázku níž jsme si sami nechali ověřit ve validátoru schema.org.“

**Problém:**

V tabulce „Co je ověřeno a čím“ není uvedené žádné ověření validátorem schema.org. Řádek „Rozhraní (UI)“ je výslovně prázdný a autor do rozhraní nevidí. Tvrzení nepopisuje přímo, co uživatel uvidí na obrazovce, takže nejde o nejtvrdší porušení Z16, ale pořád jde o nedoložené tvrzení o provedeném ověření.

**Návrh opravy:**

Buď doložit do research podklad: datum ověření, použitý nástroj a výsledek.

Nebo větu odstranit / přeformulovat bez tvrzení o provedeném UI ověření:

> „Ukázku níž lze ověřit ve Schema Markup Validatoru nebo jiném nástroji pro kontrolu strukturovaných dat.“

---

### [WARNING] Test knihovny sharp je bez verze a může působit jako aktuální obecné tvrzení

**Problemové místo:**

> „Knihovna sharp ve výchozím nastavení nepřenesla do výstupu ani EXIF, ani XMP…“

**Problém:**

Brief uvádí přesnější podmínku: šlo o vlastní měření citované z článku, nepřeměřované v tomto runu, a konkrétně o `sharp 0.34.5` ve výchozím nastavení. Článek verzi neuvádí a věta tak může působit jako obecné aktuální tvrzení o knihovně sharp v roce 2026 bez omezení.

**Návrh opravy:**

Doplnit verzi a omezit rozsah:

> „V našem testu knihovna sharp 0.34.5 ve výchozím nastavení nepřenesla do výstupu ani EXIF, ani XMP…“

Případně dodat:

> „Nepřeměřovali jsme všechny konfigurace ani novější nastavení exportu; pointa je kontrolovat skutečný výstupní soubor.“

---

### [WARNING] „Metadata se při zmenšování a exportu běžně nepřenesou“ je silnější zobecnění než doložená data

**Problemové místo:**

> „Druhá cesta má v praxi slabé místo, které jsme sami změřili: **metadata se při zmenšování a exportu běžně nepřenesou.**“

**Problém:**

Podklady dokládají dvě konkrétní věci:

- test `sharp 0.34.5` ve výchozím nastavení,
- měření na 38 e-shopech, kde z 31 dvojic mělo 15 originálů metadata a nepřežila ani jedna zmenšenina.

To je silný praktický signál, ale ne obecné reprezentativní měření všech CMS, knihoven, exportních nastavení a workflow. Slovo „běžně“ je možné obhájit volně, ale přesnější a bezpečnější je navázat tvrzení přímo na měření.

**Návrh opravy:**

> „Metadata se při zmenšování a exportu mohou ztratit. V našich testech se to stalo u výchozího exportu přes sharp 0.34.5 a u všech zmenšenin z měřených e-shopů, kde měl originál metadata.“

---

### [WARNING] Digital Source Type je formulované jako hotová informace, ne jako možné IPTC označení

**Problemové místo:**

> „Pole *Digital Source Type* navíc nese informaci o tom, že obsah vznikl algoritmicky — tedy označení obrázku vytvořeného generativním modelem.“

**Problém:**

Přesnější je, že IPTC pole *Digital Source Type* může nést klasifikaci způsobu vzniku digitálního obsahu, včetně klasifikace algoritmicky vytvořeného obsahu. Samotná existence pole neznamená, že obrázek vznikl algoritmicky.

**Návrh opravy:**

> „Pole *Digital Source Type* může nést klasifikaci způsobu vzniku digitálního obsahu, například označení algoritmicky vytvořeného obrázku.“

---

### [TIP] Tvrzení „strukturovaná data přežijí spolehlivěji“ je lepší převést na přesnější technický důvod

**Problemové místo ve FAQ:**

> „…strukturovaná data na stránce tím pádem přežijí spolehlivěji.“

**Problém:**

Smysl je správný: strukturovaná data na stránce nejsou závislá na tom, jestli image pipeline zachová IPTC/EXIF/XMP uvnitř souboru. Slovo „spolehlivěji“ ale zní jako obecně změřené porovnání spolehlivosti obou cest. Podklady dokládají ztrátu metadat v konkrétních testech, ne univerzální statistiku spolehlivosti.

**Návrh opravy:**

> „Strukturovaná data na stránce nejsou závislá na tom, jestli zmenšování a export zachová metadata uvnitř souboru.“

---

### [TIP] Jinak je zásadní rozdělení role `ImageObject` vs. alt/okolní text fakticky správné

**Dobře:**

Článek správně neopakuje původní neověřenou tezi, že `ImageObject` pomáhá AI chápat obsah obrázku nebo vybírat obrázky do AI odpovědí. Správně říká, že doložený účel je licence/autorství v Google Obrázcích a že vliv na AI odpovědi není doložený.

**Bez nutné opravy.**