**BLOKER**  
**Citace:** „Sdílené odkazy jsou zmínky, a zmínky jsou to, odkud AI bere kontext o značce.“  
**Proč:** Tohle je nepodložený skok z „lidé URL spíš sdílí“ na „AI z těch sdílení bere zmínky“. Sdílený odkaz ≠ brand mention a už vůbec ne doložený mechanismus pro AI citace. Překlápí to článek zpět k AI overclaimu.  
**Oprava:** Změnit na něco střízlivého: „Popisnou adresu si člověk spíš přečte a sdílí. To může nepřímo pomoct distribuci obsahu a získávání odkazů či návštěvnosti, ale nejde o zvláštní AI signál.“

**BLOKER**  
**Citace:** „A z toho indexu AI čerpá — takže co robot neprojde, to AI nemá odkud vzít.“  
**Proč:** Příliš absolutní. Ne všechny AI systémy čerpají jen z klasického webového indexu jedné vyhledávací vrstvy; navíc „co robot neprojde, to AI nemá odkud vzít“ je silnější, než zdroje dovolují. Mechanismus crawl/index je validní, ale formulace je přehnaná.  
**Oprava:** „Pokud se stránka špatně prochází nebo neindexuje, snižuje to šanci, že se dostane do vyhledávacích a retrieval systémů, z nichž AI odpovědi často čerpají.“

**VAROVÁNÍ**  
**Citace:** „Slabý kontext v odkazu. Smysluplný slug je nenulový, byť slabý kontextový signál.“  
**Proč:** To už zní jako signál pro model/retrieval, ale nemáte pro URL jako samostatný AI signál oporu. Udržitelnější je mluvit o obecném SEO/UX kontextu, ne o signálu pro AI.  
**Oprava:** „Smysluplný slug může nést slabý kontext pro lidi i některé systémy, ale nejde o doloženou samostatnou páku pro AI viditelnost.“

**VAROVÁNÍ**  
**Citace:** „loni proběhla velká kauzální studie u strukturovaných dat… Výsledek byl u citací v AI nulový až mírně záporný… Poučení… U URL žádný takový důkaz zatím není.“  
**Proč:** Oddělení JSON-LD od URL je sice naznačené, ale pořád hrozí čtení stylem „schema nefunguje, takže technické věci pro AI nefungují“. To je logický přeskok.  
**Oprava:** Přidejte větu: „Tato studie se týkala výhradně JSON-LD, ne URL; zmiňuji ji jen jako důvod k opatrnosti vůči neověřeným ‚AI trikům‘.“

**VAROVÁNÍ**  
**Citace:** „Filtry a řazení nasměrujte na jednu hlavní verzi, ať se neindexují jako samostatné URL.“ / „Parametry vyřešte kanonikalizací“  
**Proč:** Přehnané zjednodušení. Canonical není příkaz, jen hint; sám o sobě parametry „nevyřeší“. U faceted navigace často nestačí a někdy jsou některé filtrované URL hodnotné pro indexaci.  
**Oprava:** „Canonical použijte jako preferovanou verzi tam, kde jde o duplicitní nebo téměř duplicitní varianty. U faceted navigace to často kombinujte s interním linkováním, pravidly indexace a omezením generování zbytečných kombinací.“

**VAROVÁNÍ**  
**Citace:** „Pět úrovní zanoření nikomu nepomůže a robotovi ztěžuje procházení.“  
**Proč:** Tvrzení je příliš kategorické. Sama hloubka URL není zásadní technický problém; problém bývá spíš informační architektura a počet kliků, orphan pages, interní prolinkování, generování nekonečných cest.  
**Oprava:** „Hluboká a neudržovaná struktura bývá praktický problém pro správu a interní prolinkování; nejde o to, že by samotný počet lomítek byl speciální negativní signál.“

**VAROVÁNÍ**  
**Citace:** „Znaky jako č, ř nebo ž se v adrese zakódují … a při kopírování odkazu se často rozbije.“  
**Proč:** „Často rozbije“ je moc silné. Percent-encoding je standardní a moderní systémy to obvykle zvládají. Argument pro ASCII slug je hlavně čitelnost, konzistence a menší riziko v některých nástrojích, ne časté rozbíjení.  
**Oprava:** „… zakódují do méně čitelného tvaru a v některých nástrojích nebo při ruční práci s odkazy to může působit potíže. Proto je praktičtější ASCII slug.“

**DOPORUČENÍ**  
**Citace:** „301 přesměrování je povinné, pokud už existující URL opravdu měníte“  
**Proč:** V zásadě správně, ale technicky neúplné. Chybí důraz na přímé 1:1 mapování, aktualizaci interních odkazů, sitemap, canonicals a odstranění redirect chainů.  
**Oprava:** Dodat: „Použijte 301 v přímém 1:1 mapování, opravte interní odkazy, canonicaly a sitemapu, a vyhněte se řetězcům přesměrování.“

**DOPORUČENÍ**  
**Citace:** „crawl budget“ napříč článkem  
**Proč:** U menších webů může pojem znít přehnaně. Problém parametrů není jen crawl budget v enterprise smyslu, ale i duplicitní obsah a ředění signálů.  
**Oprava:** Upřesnit: „U velkých webů je to i otázka crawl budgetu; u menších hlavně zbytečných duplicit a nepořádku v indexaci.“

**DOPORUČENÍ**  
**Citace:** „URL za vás citace v AI nevyhraje ani nevyřeší.“  
**Proč:** V pořádku obsahově, ale chybí explicitní rozhodovací věta pro nový vs. starý web v technickém režimu.  
**Oprava:** Přidejte stručný decision box:  
- „Nový web/nová sekce: nastavte čisté URL od začátku.“  
- „Existující web: URL neměňte, pokud neřešíte migraci, duplicitní chaos, rebrand nebo zásadní IA problém.“

**CHYBĚJÍCÍ NÁMITKA**  
**Námitka technicky zdatného čtenáře:** „Canonical není garance a u e-shopových filtrů může být indexace části facet URL záměr.“  
**Proč:** Článek to neříká a působí příliš univerzálně.  
**Konkrétní doplnění:** „Ne každá filtrovaná URL je automaticky špatně; pokud má vlastní hledanost a unikátní výběr produktů, může dávat smysl ji indexovat. Canonical není univerzální kladivo.“

**CHYBĚJÍCÍ NÁMITKA**  
**Námitka:** „URL struktura ≠ architektura webu.“  
**Proč:** Článek místy směšuje podobu adresy s crawlovatelností a informační architekturou. Čistá URL sama špatné interní prolinkování nespraví.  
**Oprava:** Přidat větu: „Samotná hezká URL nezachrání web, pokud je špatně propojený nebo má slabou indexaci z jiných důvodů.“

**Shrnutí auditu:**  
Hlavní tezi článek většinou drží, ale ve 3 místech sklouzává k nedoloženému „AI benefit“: sdílené odkazy/zmínky, absolutní vazba na index, a „slug jako slabý signál“. Technicky největší problém je zjednodušení canonical u parametrů. Po zpřesnění těchto bodů bude článek konzistentní se svou vlastní skeptickou tezí.