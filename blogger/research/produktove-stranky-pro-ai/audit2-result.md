**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou už jen konkrétní nálezy k tomuto článku.

---

## Nálezy

### 1) [BLOCKER] Zůstaly absolutní / nedoložené claimy o preferenci ChatGPT
> **„hasMerchantReturnPolicy — Deklarace pravidel pro vrácení zboží — užitečný doplněk, který nákupní odpovědi ChatGPT podle analýz preferují.“**  
> **„Podle dostupných analýz nákupní odpovědi ChatGPT preferují produkty z e-shopů, které vrácení explicitně uvádějí.“**  
> **„hasMerchantReturnPolicy — preference u ChatGPT“**  
> **„hasMerchantReturnPolicy je nový diferenciátor 2026 — nákupní odpovědi ChatGPT preferují e-shopy s deklarovaným vrácením.“**

**Problém:** Tohle je pořád příliš silné a působí jako fakt o interním fungování ChatGPT, který článek nedokládá. „Preferují“ implikuje známý ranking signál. To je věcně slabé a snadno napadnutelné.

**Návrh opravy:** Všude nahradit formulacemi typu:
- „…může pomoci strojové čitelnosti informací o vrácení“
- „…v analýzách 2026 se častěji objevuje u citovaných nákupních stránek“
- „…může zvýšit šanci, že AI správně pochopí podmínky vrácení“
- „…je užitečný doplněk, ne doložený samostatný ranking faktor“

---

### 2) [BLOCKER] Frontmatter `stats` obsahuje nepravdivé absolutní formulace
> **„Product + Offer — základní strukturovaná data, bez kterých AI nepřečte cenu ani dostupnost produktu“**  
> **„GTIN — kód produktu (EAN/čárový kód), který AI potřebuje pro srovnávací nákupní dotazy“**

**Problém:** To je v rozporu s tím, co už bylo správně změkčeno v těle článku. AI může cenu/dostupnost přečíst i z HTML; jen hůř a méně spolehlivě. A GTIN není univerzálně „potřebuje“, ale „pomáhá“.

**Návrh opravy:**
- `Product + Offer` → „základní strukturovaná data, která pomáhají AI spolehlivěji pochopit cenu a dostupnost produktu“
- `GTIN` → „kód produktu (EAN/čárový kód), který pomáhá se správnou identifikací ve srovnávacích nákupních dotazech“

---

### 3) [BLOCKER] Závěr znovu vrací absolutní tvrzení, která měla být odstraněna
> **„U nákupních dotazů rozhodují strukturovaná data — bez nich AI produkt spolehlivě nepřečte a obvykle necituje.“**

**Problém:** „rozhodují“ + „obvykle necituje“ je příliš tvrdé. Neodpovídá to opatrnějším formulacím jinde v článku.

**Návrh opravy:**  
„U nákupních dotazů strukturovaná data výrazně pomáhají — bez nich AI produkt čte hůře a stránka může mít nižší šanci se v odpovědích objevit.“

---

### 4) [WARNING] `answer` je funkční, ale poslední věta je zbytečně negativní a absolutnější než zbytek textu
> **„Bez strukturovaných dat AI čte údaje hůře a méně spolehlivě.“**

**Problém:** Samo o sobě ještě přijatelné, ale `answer` by měl být co nejcitovatelnější a nejvíc samostatný. Teď je dobrý, ale šel by zpřesnit a doplnit vazbu na výstup pro uživatele.

**Návrh opravy:**  
Doplnit důsledek místo negativního zakončení, např.:  
„…Pomáhají tomu strukturovaná data Product, Offer a případně AggregateRating, přehledná tabulka parametrů, reálné recenze a stručné odpovědi na časté otázky. Díky tomu má AI i vyhledávač spolehlivější podklad pro zobrazení nebo citaci produktu.“

---

### 5) [WARNING] Nedoložené tvrzení o „výrazné většině“ citovaných stránek
> **„Podle dostupných analýz z roku 2026 má výrazná většina stránek citovaných v AI odpovědích strukturovaná data…“**

**Problém:** „výrazná většina“ je kvantifikace bez zdroje. Dodatek o různých číslech to úplně nezachrání.

**Návrh opravy:**  
„Podle dostupných marketingových analýz z roku 2026 se strukturovaná data u citovaných stránek objevují často; konkrétní podíly se mezi studiemi liší.“

---

### 6) [WARNING] Zakázaný / nevysvětlený anglismus „widget“
> **„hodnocení schované ve widgetu“**

**Problém:** Není to na seznamu explicitně zakázaných termínů, ale je to zbytečný technicismus bez vysvětlení. V brand voice webu je lepší čeština.

**Návrh opravy:**  
„hodnocení schované v externím prvku na stránce“ nebo „v načítaném recenzním modulu“

---

### 7) [WARNING] „AI systémy“ + seznam značek je v pořádku, ale Google AI Overviews není v CZ prostředí univerzálně stabilní reference bez rámce
> **„AI systémy (ChatGPT, Perplexity, Google AI Overviews)…“**

**Problém:** V článku pro CZ e-shopy by bylo lepší krátce ukotvit, že jde o příklady typů AI odpovědí, ne o jednotný mechanismus. Jinak to míchá chatboty a vyhledávací funkce do jednoho pytle.

**Návrh opravy:**  
„AI rozhraní a vyhledávací odpovědi (např. ChatGPT, Perplexity nebo Google AI Overviews) …“

---

### 8) [WARNING] FAQ: „AI ho používá k tomu, aby… mohla ho zařadit…“ je stále příliš jisté
> **„AI ho používá k tomu, aby jednoznačně poznala, o který produkt jde, a mohla ho zařadit do srovnávacích nákupních odpovědí.“**

**Problém:** U GTIN je bezpečnější držet se „pomáhá identifikaci“. Tohle zní jako doložený mechanismus.

**Návrh opravy:**  
„GTIN pomáhá systémům jednoznačněji rozpoznat, o který produkt jde, zejména když se porovnává stejný produkt napříč více obchody.“

---

### 9) [WARNING] FAQ a tělo příliš často personifikují AI jako jednotnou entitu
> Příklady: **„AI potřebuje…“**, **„AI takové úseky snadno cituje“**, **„AI je musí hádat z HTML“**, **„AI neví“**

**Problém:** Stylově je to čitelné, ale místy už moc zjednodušující a technicky nepřesné. Pro vzdělávací obsah by bylo lepší střídat „AI systémy“, „vyhledávače“, „nástroje s generativní odpovědí“, „strojové zpracování obsahu“.

**Návrh opravy:**  
Nechat část formulací, ale 30–40 % z nich nahradit přesnějšími variantami:
- „AI systémy a vyhledávače…“
- „strojové zpracování obsahu…“
- „nástroje s generativní odpovědí…“

---

### 10) [WARNING] `CompareTable` obsahuje opět silné, nedoložené formulace
> **„GTIN a značka umožní zařazení do srovnání“**  
> **„hasMerchantReturnPolicy — preference u ChatGPT“**

**Problém:** „umožní“ a „preference“ jsou moc silné.

**Návrh opravy:**
- „GTIN a značka pomáhají přesnější identifikaci při srovnání“
- „hasMerchantReturnPolicy — strojově čitelné informace o vrácení“

---

### 11) [WARNING] České právní tvrzení o 14 dnech je v jedné části zkrácené tak, že ztrácí výjimky
> **„V Česku má spotřebitel u většiny nákupů na dálku právo odstoupit do 14 dnů…“**  
> vs.  
> **„14denní vrácení ze zákona — deklarujte ho ve strukturovaných datech přes hasMerchantReturnPolicy.“**

**Problém:** Druhá verze znovu působí univerzálně. Ne každý produkt / režim to má stejně.

**Návrh opravy:**  
„Podmínky vrácení uveďte ve strukturovaných datech podle skutečných pravidel e-shopu; u většiny nákupů na dálku má spotřebitel právo odstoupit do 14 dnů, ale existují výjimky.“

---

### 12) [WARNING] V CTA je lehký overclaim o „největším dopadu na citovatelnost v AI“
> **„…navrhne, kde má úprava největší dopad na citovatelnost v AI.“**

**Problém:** Není to extrémní, ale působí jako příliš přesný příslib výsledku. Audit může navrhnout priority, ne garantovat, co bude mít „největší dopad“.

**Návrh opravy:**  
„…navrhne priority úprav, které obvykle nejvíc pomáhají strojové čitelnosti a šanci na citaci v AI.“

---

### 13) [TIP] Meta description je věcně v pořádku, ale neobsahuje hlavní KW v nejpřirozenější podobě
> **„Návod pro e-shopy: jak upravit produktové stránky pro AI vyhledávání pomocí strukturovaných dat, GTIN, recenzí a přehledných parametrů.“**

**Problém:** SEO chyba to není, ale cílové KW `produktove stranky pro ai` by šlo dostat blíž na začátek a zlepšit relevanci.

**Návrh opravy:**  
„Produktové stránky pro AI: návod pro e-shopy, jak doplnit strukturovaná data, GTIN, recenze a parametry pro lepší strojové pochopení.“

---

### 14) [TIP] Chybí druhý interní odkaz na relevantní komerční / pilířovou stránku přímo v těle, ne jen v CTA
> V těle je pouze odkaz na **/blog/seo-pro-eshopy-ai-era-2026/**

**Problém:** Není to blocker, ale u tutorialu by dávalo smysl jeden kontextový interní odkaz ještě na `/pack/` nebo `/audit/` už v části „Jak to řešit v českém prostředí“ nebo „Co dál patří…“.

**Návrh opravy:**  
Přidat jednu přirozenou větu typu:  
„Pokud nechcete řešit rozvržení a pole ručně, pomůže vám i náš [AI SEO Wireframe Pack](/pack/), kde je produktová stránka rozkreslená po blocích.“

---

### 15) [TIP] FAQ je kvalitnější než v minulé verzi, ale dvě odpovědi jsou zbytečně dlouhé pro citovatelnost
> Např. odpovědi na **„Jaká strukturovaná data potřebuje produktová stránka pro AI?“** a **„Jak se to liší od běžného SEO pro e-shop?“**

**Problém:** Odpovědi jsou věcné, ale pro AI citaci by šly zestručnit v prvních 1–2 větách tak, aby samy obstály i po vytržení.

**Návrh opravy:**  
U každé FAQ dát první větu jako krátkou definici / pointu a až pak vysvětlení.  
Např.:
- „Produktová stránka pro AI obvykle potřebuje Product, Offer a podle situace i AggregateRating s Review. Tyto údaje pomáhají systémům spolehlivěji pochopit cenu, dostupnost, identitu produktu a hodnocení.“

---

### 16) [TIP] Dobrá oprava title, slug i CTA
> **title:** „Produktové stránky pro AI: návod pro e-shopy 2026“  
> **slug:** „produktove-stranky-pro-ai“  
> **CTA:** konkrétně na Pack / Audit

**Hodnocení:** Tohle je už v pořádku. Titulek sedí délkou i klíčovým slovem vepředu, slug je čistý a CTA je konkrétní.

---

## Shrnutí
Oproti první verzi je článek výrazně lepší. Největší problém, který stále brání publikaci, je **vracení se k nedoloženým tvrzením o tom, že ChatGPT něco „preferuje“**, plus několik **absolutních formulací ve frontmatteru a závěrečném shrnutí**, které jsou v rozporu s jinak opatrněji napsaným textem.

Pokud opravíte hlavně:
1. všechny výskyty **„preferují / preference u ChatGPT“**,  
2. absolutní tvrzení ve `stats`, tabulce a závěru,  
3. zkrácenou právní formulaci o 14 dnech,

pak bude článek velmi blízko publikovatelnému stavu.