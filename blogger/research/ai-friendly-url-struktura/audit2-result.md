Seřazeno podle důležitosti.

## BLOKER
**Citace:** „pomáhá nepřímo tím, že usnadní procházení a indexaci, **ze kterých AI čerpá**“  
**Proč:** Pořád je to moc přímočaré. U vyhledávačů ano; u AI systémů je to jen obecná zkratka. Ne každé AI použití jede z webového indexu a ne každá indexovaná stránka má reálnou šanci na citaci. Formulace zní jistěji, než data dovolují.  
**Oprava:**  
„…pomáhá nepřímo tím, že usnadní procházení a indexaci ve vyhledávačích a dalších retrieval vrstvách, přes které se obsah může snáz dostat k systémům, které z webu čerpají.“

## VAROVÁNÍ
**Citace:** „A pokud se stránka špatně prochází nebo neindexuje, **snižuje to šanci**, že se dostane do vyhledávacích a retrieval systémů, ze kterých AI odpovědi často čerpají.“  
**Proč:** Mechanicky to dává smysl, ale pořád je to hranou blízko „lepší URL = lepší AI viditelnost“. Chybí mezikrok: URL je jen malá část problému, často zanedbatelná proti obsahu, interním odkazům, JS renderingu, duplicitám, kvalitě webu.  
**Oprava:**  
„…je to jeden z technických předpokladů dostupnosti obsahu; v praxi ale bývá vliv URL menší než vliv obsahu, interního prolinkování, renderingu a celkové kvality webu.“

## VAROVÁNÍ
**Citace:** „Tři mechanismy…“ + bod „**Kontext pro lidi.** Smysluplný slug nese trochu kontextu…“  
**Proč:** Třetí bod je vatový. Nepřidává mechanismus, jen opakuje „je to čitelnější“. Technický čtenář v tom uvidí výplň a slabý pokus přisoudit slugu význam.  
**Oprava:** Vyhodit celý třetí bod, nebo ho sloučit s bodem o lidech.

## VAROVÁNÍ
**Citace:** „**Parametry přes canonical**“ / „U duplicitních variant nastavte canonical na hlavní verzi.“  
**Proč:** Lepší než předtím, ale pořád zjednodušené. U parametrů nejde jen o canonical. U části URL variant je správné řešení noindex, omezení interního prolinkování, zákaz crawl cest, nastavení parametrů v aplikaci, případně vůbec negenerovat odkazovatelné kombinace. „Přes canonical“ zní jako primární recept.  
**Oprava:**  
„Duplicitní a málo hodnotné parametrické varianty řešte kombinací: canonical, řízení indexace, omezení interního prolinkování a podle potřeby i omezení crawl cest. Samotný canonical často nestačí.“

## VAROVÁNÍ
**Citace:** „301 přesměrování je povinné, pokud už existující URL opravdu měníte“  
**Proč:** Prakticky ano, technicky neúplné. U migrace jsou kritické i status kódy cíle, 1:1 relevance, aktualizace interních odkazů, sitemap, hreflang, canonical, externí kampaně, analytics tagging. Část je v těle, ale ve stats to působí přehnaně zkratkovitě.  
**Oprava:**  
Ve stats radši: „301 + čisté 1:1 mapování“  
Nebo: „Při změně URL je minimum 301; bez 1:1 mapování a oprav interních odkazů nestačí.“

## DOPORUČENÍ
**Citace:** „Tři až pět slov, výstižně“ / stats „3–5 slov je rozumná délka slugu“  
**Proč:** Není to vyloženě špatně, ale je to až moc normativní. Technický čtenář ví, že dobrý slug může mít 2 slova i 7, pokud je stabilní a jasný. Tohle zbytečně vypadá jako pseudopřesné pravidlo.  
**Oprava:**  
„Spíš krátký a výstižný; často 2–5 slov, ale není to pevné pravidlo.“

## DOPORUČENÍ
**Citace:** „Každé slovo v adrese má něco říkat, jinak jen zabírá místo.“  
**Proč:** Copy je OK, ale technicky je to zbytečně absolutní. U některých webů jsou části cesty systémové, jazykové, produktové nebo kvůli IA/API omezením.  
**Oprava:**  
„Kde to dává smysl, držte cestu stručnou a srozumitelnou; systémové části, které mají provozní důvod, nejsou samy o sobě problém.“

## DOPORUČENÍ
**Citace:** „Zakódují se do nečitelného tvaru, **rozbíjejí se při sdílení** a zavádějí nekonzistenci.“  
**Proč:** „Rozbíjejí se při sdílení“ je moc silné. Moderní platformy to většinou nerozbíjejí; problém je spíš horší čitelnost, copy/paste tření, někdy tooling.  
**Oprava:**  
„…zhoršují čitelnost a v některých nástrojích nebo při ruční práci s odkazy působí potíže.“

## DOPORUČENÍ
**Citace:** „u velkých webů plýtvá rozpočtem na procházení, **u menších hlavně tvoří duplicity a ředí signály**.“  
**Proč:** „Ředí signály“ je SEO slang bez vysvětlení. Vývojář může chtít přesnější formulaci: soutěžení duplicit o indexaci, nejasný výběr kanonické verze, zbytečné crawl cesty.  
**Oprava:**  
„…u menších hlavně vytváří duplicity, komplikuje výběr kanonické verze a zbytečně přidává crawl cesty.“

## DOPORUČENÍ
**Vnitřní rozpor / frontmatter**
**Citace:** answer: „…usnadní procházení a indexaci, ze kterých AI čerpá…“ vs tělo: skeptičtější formulace  
**Proč:** Frontmatter je ostřejší než zbytek textu. Kdo uvidí jen snippet/answer, dostane silnější claim než v článku.  
**Oprava:**  
Srovnat answer s tělem:  
„…pomáhá nepřímo přes běžné SEO mechanismy, hlavně dostupnost obsahu ve vyhledávačích a čitelnost pro lidi.“

## DOPORUČENÍ
**Hodnota pro technického čtenáře**
**Citace:** většina textu  
**Proč:** Pro SEO specialistu je to z 80 % známé. Nová hodnota je hlavně:  
- oddělení AI hype vs běžné SEO,  
- český kontext diakritiky,  
- faceted navigace není automaticky zlá,  
- nemigrovat URL kvůli AI.  
To je málo na plný článek, pokud nemá být spíš landing/supporting content.  
**Oprava:** Přidat 1 konkrétní technický checklist, např.:  
- kdy filtrovanou URL indexovat,  
- kdy canonical nestačí,  
- co zkontrolovat po změně URL,  
- jak poznat parametrový chaos v logách/GSC.

## DOPORUČENÍ
**Akceschopnost**
**Citace:** decision část „Nový web / Existující web“  
**Proč:** Použitelné, ale moc obecné. Chybí rozhodovací kritéria.  
**Oprava:** Přidej mini rozhodovací tabulku:  
- **Neměnit URL:** jen estetika, „AI-friendly“, bez indexačního problému  
- **Měnit URL:** migrace, rebrand, konsolidace duplicit, zásadní IA problém  
- **Nejdřív auditovat:** faceted chaos, redirect chains, orphan pages, parametrické landingy s hledaností

## DOPORUČENÍ
**Chybějící námitka**
**Citace:** článek ji neřeší  
**Proč:** SEO specialista namítne: „Není problém spíš v interním prolinkování, orphan pages, JS navigaci, renderingu a sitemapě než v URL?“ To je přesně námitka proti přeceňování URL a článek by ji měl explicitně uznat.  
**Oprava:** Přidat odstavec:  
„Na většině webů nebývá hlavní problém tvar URL, ale to, že se stránka špatně objeví v interním prolinkování, renderuje se až po JS nebo není konzistentně zařazená v sitemapě a canonicalech.“

## DOPORUČENÍ
**Nadbytečnost**
**Citace:** celý Insight s JSON-LD studií  
**Proč:** Už je korektní, ale pořád je to odbočka. Pro technického čtenáře to působí jako obranná argumentace navíc. Pokud nemáte ve zbytku série víc podobných „AI triků“, tahle vsuvka zbytečně zabírá místo.  
**Oprava:** Zkrátit na 1 větu v úvodu nebo poznámku pod čarou. Ne samostatný box.

### Shrnutí
Po prvním kole je text o dost čistší. Nevidím už tvrdý faul typu „slug je AI signál“. Zbylý problém je hlavně v několika formulacích, které pořád moc přímo spojují crawl/index s AI čerpáním, a v tom, že canonical u parametrů je podaný jako moc centrální řešení. Pro technického čtenáře bych přidal konkrétnější decision kritéria a checklist, jinak je to spíš korektní de-hype než technicky silný návod.