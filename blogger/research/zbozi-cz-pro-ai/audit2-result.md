## VERDIKT: PUBLIKOVAT

Bez blokujících vad. Zapracování po 1. kole sedí: problematické UI formulace jsou přepsané jako odkazy na nápovědu, SHOP/SHOPITEM jsou doplněné, formulace o platbě za zobrazení je opravená a časová slova jsou ukotvená k roku/datu. Nezapracování slova „garantuje“ přijímám fakticky, protože je výslovně připsané nápovědě; jazykově ale doporučuji níže uhladit formulaci.

SEO metadata, krátká odpověď, struktura H2 a CTA jsou celkově v pořádku.

---

## Nálezy

### [WARNING] Dlouhé buňky v tabulce feedu budou na mobilu hůř čitelné

**Citace:**

> `PRODUCTNAME (povinná) | Obecný název výrobku podle šablony výrobce, řada, označení, kód, barva. Bez údajů obchodu, bez znaků © ® ™ a bez dárků — ty patří do EXTRA_MESSAGE`

> `URL (povinná) | Vlastní adresa pro každou nabídku i každou variantu, bez diakritiky. Nesmí vést na úvodní stránku ani na výběr bez určené velikosti či barvy`

**Problém:**  
Tabulka je věcně užitečná, ale některé buňky jsou na mobilní horizontální tabulku zbytečně dlouhé. Čtenář bez znalosti XML musí držet v hlavě víc pravidel najednou.

**Návrh opravy:**  
Zkrátit buňky na hlavní pravidlo a detaily dát pod tabulku jako odrážky. Například:

- `PRODUCTNAME`: „Název výrobku podle šablony: výrobce, řada, označení, kód, barva.“
- Pod tabulku doplnit: „Do PRODUCTNAME nepatří údaje obchodu, znaky © ® ™ ani dárky; ty patří do EXTRA_MESSAGE.“
- `URL`: „Jedinečná adresa nabídky nebo varianty, bez diakritiky.“
- Pod tabulku doplnit: „URL nemá vést na úvodní stránku ani na nevybranou variantu.“

---

### [TIP] Krátká odpověď je v limitu, ale má zbytečně nejasné „v něm“ a opakuje květen

**Citace z frontmatteru:**

> `Seznam ho v květnu 2026 uvedl mezi zdroji svého asistenta (v nápovědě už Seznam AI) a od května 2026 v něm ukazuje placené nabídky Seznam Nákupy z téhož feedu.`

**Problém:**  
Krátká odpověď má 58 slov, začíná definicí a dává samostatný smysl — to je dobře. Slabší je ale zájmeno „v něm“, které může odkazovat na asistenta i na Zboží.cz, a opakování „v květnu / od května“.

**Návrh opravy:**  
Zpřesnit bez prodlužování:

> Zboží.cz je srovnávač zboží Seznamu, do kterého e-shop posílá nabídky přes XML feed. Seznam ho v květnu 2026 uvedl mezi zdroji Seznam AI a od téhož měsíce v Seznam AI ukazuje placené nabídky Seznam Nákupy z feedu. Podmínkou je registrace, kredit a feed shodný s webem; výběr nabídek Seznam nepopisuje.

---

### [TIP] Formulace „nápověda garantuje“ je jazykově nepřirozená

**Citace:**

> `Požadavek ručně kontrolují administrátoři Zboží.cz a zpracování nápověda garantuje do 48 hodin.`

Stejný problém je i ve FAQ:

> `Požadavek ručně kontrolují administrátoři Zboží.cz a zpracování nápověda garantuje do 48 hodin.`

**Problém:**  
Fakticky je zdroj připsaný správně, takže nejde o blocker. Jazykově ale „nápověda garantuje“ zní nepřirozeně — garantuje Seznam, nápověda to pouze uvádí.

**Návrh opravy:**  
Použít formulaci, která zachová opatrnost i zdroj:

> Podle nápovědy požadavek ručně kontrolují administrátoři Zboží.cz a Seznam uvádí garantované zpracování do 48 hodin.

Nebo ještě bezpečněji:

> Nápověda uvádí, že požadavek ručně kontrolují administrátoři Zboží.cz a že zpracování je garantované do 48 hodin.

---

### [TIP] Věta o špatném párování je syntakticky kostrbatá

**Citace:**

> `Když se nabídka spáruje špatně, napáruje ji e-shop podle nápovědy na jinou kartu v párovacím nástroji v Centru prodejce.`

**Problém:**  
„Napáruje ji e-shop“ je nepřirozený slovosled a pro majitele e-shopu bez znalosti terminologie může být „napáruje / párovací nástroj“ těžkopádné. Navíc se krátce po sobě opakuje stejný kořen.

**Návrh opravy:**

> Když se nabídka spáruje špatně, může e-shop podle nápovědy požádat v párovacím nástroji Centra prodejce o přiřazení k jiné produktové kartě.

Totéž doporučuji upravit i ve FAQ:

> Podle nápovědy Skliku může e-shop u špatně spárované nabídky požádat v párovacím nástroji Centra prodejce o přiřazení k jiné produktové kartě.

---

### [TIP] „Google nákupy“ sjednotit typograficky jako název služby

**Citace:**

> `Feed pro Heureku, Google nákupy ani Facebook Zboží.cz nepřijme.`

> `Feedy pro Heureku, Google nákupy ani Facebook Zboží.cz nepodporuje…`

**Problém:**  
„Google nákupy“ působí jako obecný popis, ne jako název služby. V článku jinak pracujete s názvy služeb poměrně pečlivě.

**Návrh opravy:**  
Sjednotit na jednu variantu, ideálně:

> Google Nákupy

Případně pokud chcete být přesnější vůči ekosystému Google:

> feed pro Google Merchant Center

Vyberte jednu variantu a použijte ji všude stejně.

---

### [TIP] FAQ je věcně dobré, ale dvě odpovědi jsou na hraně hutnosti

**Citace:**

> `Registrace e-shopu na Zboží.cz je zdarma, nabídky se ale zobrazují jen s dobitým kreditem v Seznam Peněžence a platí se každý proklik do e-shopu. Bezplatné zobrazení produktů Seznam Nákupy nenabízejí. Cenu za proklik určuje aukce, nejméně ale minimum z ceníku, který se od 1. 4. 2026 řídí kategorií a cenovým pásmem.`

**Problém:**  
FAQ odpovědi jsou sebestačné, což je dobře. Některé ale kombinují tři až čtyři informace v jedné odpovědi. Pro AI citovatelnost i rychlé čtení by pomohlo rozdělení do kratších vět s jasnějším pořadím.

**Návrh opravy:**  
Například první FAQ zkrátit a seřadit:

> Registrace e-shopu na Zboží.cz je zdarma. Nabídky se ale zobrazují jen s dobitým kreditem v Seznam Peněžence a platí se za proklik do e-shopu. Bezplatné zobrazení produktů Seznam Nákupy nenabízejí. Cenu za proklik určuje aukce, nejméně však minimum z ceníku podle kategorie a cenového pásma.

---

## Kontrola SEO, struktury a CTA

- `seoTitle` má 58 znaků, klíčové slovo je vepředu — v pořádku.
- `description` je v doporučeném rozsahu a odpovídá obsahu — v pořádku.
- `slug` `zbozi-cz-pro-ai` je srozumitelný a relevantní.
- H2 nadpisy nesou klíčový pojem i pointu — v pořádku.
- Krátká odpověď má 58 slov, začíná definicí a je samostatně použitelná — jen doporučuji zpřesnit formulaci.
- CTA je relevantní a bezpečné: vede na **AI SEO Wireframe Pack**, cena je mimo text odkazu a text výslovně říká, že Pack neřeší feed ani Zboží.cz. To je správně.