**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

- [BLOKER] `description: "Texty kategorií e-shopu rozhodují, jestli vás AI cituje u dotazů nejlepší X."` → **Overclaim / absolutní sloveso.** „Rozhodují“ je moc silné a bez opory. Navrh: `Texty kategorií e-shopu mohou zvýšit šanci, že vás AI cituje u dotazů typu nejlepší X. Návod, jak psát popisy kategorií pro AI i zákazníky.`

- [BLOKER] `description` má cca **167 znaků**, tedy nad limitem 160. → Zkraťte na 70–160 znaků. Např.: `Texty kategorií e-shopu mohou zvýšit šanci, že vás AI cituje. Návod 2026, jak psát popisy pro AI i zákazníky.`

- [BLOKER] `Texty kategorií e-shopu rozhodují, jestli vás AI cituje...` → Totéž v meta textu porušuje zadání na změkčení absolutních sloves. Nahraďte `rozhodují` za `mohou ovlivnit` / `mohou zvýšit šanci`.

- [BLOKER] `Rozhoduje užitečnost, ne hustota frází.` → Absolutní formulace. Navrh: `Více než hustota frází obvykle pomáhá užitečnost pro kupujícího.`

- [BLOKER] `Kategorie jsou pro AI zdroj u nákupních dotazů` → Příliš kategorické zobecnění. Fakticky spíš **mohou být zdrojem**. Navrh: `Kategorie mohou být pro AI jedním ze zdrojů u nákupních dotazů`.

- [BLOKER] `u „nejlepší X" model čerpá z přehledu, ne jen z produktů.` → Působí jako obecné pravidlo bez opory. Navrh: `u dotazů typu „nejlepší X" AI často čerpá z přehledových stránek a kategorií, nejen z produktů.`

- [DOPORUČENÍ] `Podle analýz 2026 se navíc AI odpovědi u komerčních dotazů ... spouští u velké části dotazů` → Dobře změkčeno, ale je to vágní vzhledem ke statu `~83 %`. Pokud číslo ponecháváte ve frontmatteru, sjednoťte formulaci v těle. Navrh: `Podle některých analýz z roku 2026 se AI odpovědi u dotazů typu „nejlepší [produkt]“ zobrazují často; orientačně může jít o vysoký podíl, ale liší se podle oboru a metodiky.`

- [DOPORUČENÍ] `stats: "~83 %"... "dotazů typu nejlepší [produkt] spouští podle analýz 2026 AI odpověď"` → Formálně splňuje hedge, ale chybí opora v textu článku a číslo je citlivé na metodiku. Pokud nemáte v článku zdroj, bezpečnější je číslo úplně vypustit nebo dál změkčit. Navrh labelu: `podle některých analýz z roku 2026 se u dotazů typu nejlepší [produkt] AI odpověď zobrazuje často; podíl je orientační a liší se podle oboru`

- [DOPORUČENÍ] `stats: "150–300" ... "slov v úvodním textu kategorie..."` → V pořádku, protože obsahuje `orientačně`. To samé držte i v těle článku. V FAQ už to máte správně: `bývá orientačně 150 až 300 slov`. **OK.**

- [DOPORUČENÍ] `Text je půlka práce. Druhá půlka je dát AI strojově čitelnou mapu kategorie.` → Lehce nadsazené a neověřitelné v poměru „půlka / půlka“. Navrh: `Vedle textu pomáhá i strojově čitelný popis kategorie pomocí strukturovaných dat.`

- [DOPORUČENÍ] `Dají AI strojově čitelnou mapu...` / `AI z této krátké odpovědi snadno čerpá` → Bezpečnější je nepersonifikovat a neimplikovat přímý mechanismus. Navrh: `Pomáhají systémům lépe pochopit...` / `Taková krátká odpověď může být pro AI snadno použitelná při shrnutí.`

- [DOPORUČENÍ] `CollectionPage, ItemList a BreadcrumbList jsou relevantní typy strukturovaných dat pro kategorii` → **Věcně sedí**, s jednou nuancí: `CollectionPage` je relevantní jako typ stránky, `ItemList` pro seznam položek, `BreadcrumbList` pro navigaci. Doplnil bych opatrnost, že implementace závisí na reálném obsahu stránky a technickém řešení e-shopu. Není nutné měnit význam, jen formulaci z „základ tvoří tři typy“ na `mezi nejčastěji používané patří`.

- [DOPORUČENÍ] `Základ tvoří tři typy strukturovaných dat.` → Příliš uzavřené. Navrh: `Mezi nejrelevantnější typy pro kategorii často patří tři: CollectionPage, ItemList a BreadcrumbList.`

- [DOPORUČENÍ] `Kategorie má pomoct rozhodnout, ne jen vyjmenovat produkty.` → Smyslově správně, ale u frontmatter `stats` to není statistika; je to spíš princip. Pokud je to zobrazováno ve „stats“ bloku, může to působit matoucím dojmem. Zvažte přesun mimo `stats` nebo přejmenujte sekci UI, pokud to jde. Pokud ne, ponechat lze, ale není to ideální.

- [KOSMETIKA] `slug: "kategorie-texty-pro-ai"` → Smysluplný, krátký, relevantní. **OK.** Pokud chcete vyšší shodu s titulkem/KW, alternativa by byla `texty-kategorii-eshopu-pro-ai`, ale stávající slug je přijatelný.

- [DOPORUČENÍ] `title: "Texty kategorií e-shopu pro AI: návod 2026"` → Délka je zhruba v limitu a klíčové slovo je vepředu. **OK.** Jen zvažte přirozenější variantu bez dvojtečky, pokud testujete CTR. Není nutná oprava.

- [DOPORUČENÍ] `answer: "Texty kategorií e-shopu pomáhají AI pochopit..."` → **V zásadě OK.** Začíná definicí a dává samostatný smysl. Jen bych jemně zkrátil a posílil definici v první větě. Např.: `Texty kategorií e-shopu jsou stručné vysvětlení sortimentu a nákupních kritérií, které může AI i zákazníkům pomoci pochopit, co v kategorii najdou a jak vybírat.` Pak teprve druhá věta o „mohou zvýšit šanci...“.

- [DOPORUČENÍ] `**Texty kategorií e-shopu pomáhají AI pochopit váš sortiment...**` → První odstavec funguje dobře jako samostatná odpověď. **OK.** Ale druhá věta `U komerčních dotazů totiž AI často čerpá...` je nezdrojovaná generalizace. Doporučení: přidejte `může` / `často podle typu dotazu`.

- [KOSMETIKA] `nejlepší X` / `X pro Y` → Pro tutorial je to srozumitelné. **OK.**

- [DOPORUČENÍ] `AI z této krátké odpovědi snadno čerpá` → Nahraďte méně jistou formulací: `Taková krátká odpověď bývá pro AI i uživatele snadno čitelná a použitelná.`

- [DOPORUČENÍ] `Každý srozumitelný úsek může být pro AI samostatně použitelný.` → Bezpečné, ale trochu vágní. Pokud chcete být přesnější: `Každý srozumitelný úsek zvyšuje šanci, že z něj AI při odpovědi převezme správný kontext.`

- [DOPORUČENÍ] `Prolinkování pomáhá AI i zákazníkovi orientovat se v tématu a posiluje tematickou autoritu.` → „tematická autorita“ je už dost SEO slang. Nevadí, ale pro brand voice bych zjednodušil. Navrh: `Prolinkování pomáhá zákazníkovi i AI lépe se zorientovat v nabídce a souvisejících tématech.`

- [DOPORUČENÍ] `Odkažte na relevantní podkategorie, hlavní produkty a na blogový nákupní průvodce nebo srovnání.` → Interní odkazy dávají smysl jen částečně, protože v samotném článku **není odkaz na průvodce ke kategoriím**, jen na produktové stránky, srovnávací články, strukturovaná data a SEO pro e-shopy. Pokud existuje pilíř k internímu prolinkování nebo k nákupním průvodcům, přidejte konkrétní interní odkaz i sem. Jinak je doporučení v textu silnější než skutečná realizace.

- [KOSMETIKA] Interní odkazy na `/blog/produktove-stranky-pro-ai/`, `/blog/srovnavaci-clanky-pro-ai/`, `/blog/strukturovana-data-pro-ai/`, `/blog/seo-pro-eshopy-ai-era-2026/` → Tematicky sedí. **OK.**

- [DOPORUČENÍ] `Platí to i pro Upgates a Shoptet?` / `Ano. Upgates i Shoptet umožňují horní i dolní text kategorie` → Pravděpodobně věcně sedí, ale je to platformově konkrétní tvrzení. Pokud nechcete riskovat, změkčete na `běžně umožňují` nebo `typicky umožňují`. Navrh: `Upgates i Shoptet běžně umožňují horní i dolní text kategorie, takže lze využít obojí...`

- [DOPORUČENÍ] `Generické nebo automaticky duplikované texty napříč kategoriemi berou AI i vyhledávače hůř` → Hovorové `berou hůř` není ideální pro brand voice. Navrh: `...mívají pro AI i vyhledávače menší přínos a kupujícímu často nepomáhají.`

- [KOSMETIKA] Anglicismy → Většina je ošetřená dobře. `schema markup`, `listicle`, `use-case`, `crawler`, `traffic`, `conversion` se v textu nevyskytují. **OK.**

- [KOSMETIKA] `FAQ ke kategorii` s krátkými otázkami a odpověďmi → Reálné otázky, odpovědi jsou soběstačné. **OK.**

- [DOPORUČENÍ] `Chcete kategorie, které AI cituje a zákazníci na nich rozhodnou?` → CTA je konkrétní a vede na produkt, což je správně. Jen jazykově `zákazníci na nich rozhodnou` zní kostrbatě. Navrh: `Chcete kategorie, které AI snáz cituje a zákazníkům pomáhají rozhodnout?`

- [DOPORUČENÍ] `obsahuje wireframy kategorie i produktu se strukturou textu a krátkých odpovědí, kterou AI dobře čte` → Lehce prodejní a implikuje výkon. Navrh: `...se strukturou textu a krátkých odpovědí, která pomáhá AI i uživatelům obsah rychle pochopit.`

- [KOSMETIKA] `updated: "2026-07-11"` + žádné tvrzení po tomto datu jako hotové → **OK.** Článek je časově ukotvený správně a nepoužívá neukotvené „příští rok / letos“ v problematickém významu.

**Shrnutí toho, co je dobře:**
- Titulek je v limitu a KW je vpředu.
- `answer` i první odstavec fungují jako samostatná odpověď.
- Anglicismy jsou téměř čisté.
- FAQ je relevantní a praktické.
- CTA míří na konkrétní produkty, ne na generické „kontaktujte nás“.
- Věcně sedí, že pro kategorii dávají smysl `CollectionPage`, `ItemList`, `BreadcrumbList` a že strukturovaná data mají odpovídat viditelnému obsahu.

**Co opravit před publikací prioritně:**
1. změkčit overclaimy v `description` a několika větách v těle,
2. zkrátit `description` pod 160 znaků,
3. sjednotit práci s číslem `~83 %` jako orientačním údajem podle analýz 2026,
4. doladit pár příliš absolutních nebo hovorových formulací.