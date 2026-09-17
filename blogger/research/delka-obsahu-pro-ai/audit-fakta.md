# C2 — nezávislý faktický audit

**VERDIKT: PUBLIKOVAT.**

Kontrola k 17. 9. 2026 podle celého `blogger/auditor-system.md`. Přečten článek `src/content/articles/delka-obsahu-pro-ai.mdx` a jeho `research.md`; tvrzení ověřena samostatným otevřením primárních zdrojů a hledáním protiargumentů. Článek ani jiné soubory jsem neupravoval.

## Kritické nálezy

**Žádný [BLOCKER].** Článek nezaměňuje podíl mezi citovanými za pravděpodobnost citace a netvrdí, že délka má prokazatelně nulový vliv. Modelová tabulka není vydávána za měření zákazníků. Početní příklad je správný: 6/80 = 7,5 %, 4/20 = 20 %, mezi deseti citovanými 60 % a 40 %.

## Drobné nálezy a cílené návrhy

### 1. [TIP] Pojmenovat přímo jmenovatel výsledků AirOps

**Citace:** „U skupiny 500–999 slov uvedli míru citování 34,3 %, u 5 000 a více slov 28,6 %.“

Čísla souhlasí, ale běžný čtenář ještě nemusí poznat, že jde o výběr mezi výsledky zachycenými při vyhledávání pro konkrétní dotazy a běhy. Slovo „stránky“ může také evokovat, že každá URL vstupuje do procent jen jednou. Report rozlišuje stažené stránky a záznamy dotaz × stránka × běh; rozsahy tabulek nejsou zaměnitelné.

**Návrh:** Za větu o nalezených nepoužitých stránkách doplnit: „Uvedená procenta se vztahují k výsledkům zachyceným při sledovaných vyhledáváních, nikoli ke všem stránkám na internetu.“ Neuvádět součet N tabulky jako počet unikátních URL. Současné znění tento chybný součet neobsahuje, proto nejde o blokující nález.

**Zdroj:** [AirOps — metodika a Content structure has a supporting role](https://www.airops.com/report/the-fan-out-effect-what-happens-between-a-query-and-a-citation).

### 2. [TIP] U LumenGEO krátce přiznat omezení měřitelného vzorku

**Citace:** „LumenGEO získalo citace 2. července 2026 a texty stránek měřilo 16. července.“

Data i následné omezení na americké komerční dotazy jsou správně. Podobně jako u Ahrefs by pomohlo říci, že 954 jsou stránky, z nichž se podařilo změřit text; nejde o všechny citované zdroje. Metodika vyřazuje mimo jiné videa a nezískané HTML.

**Návrh:** Doplnit „Do výpočtu délky zahrnulo pouze stránky, z nichž se podařilo získat text.“ Nepřebírat publikované procento pokrytí 69,9 %: jeho popisek a počty zdroje nejsou vzájemně konzistentní. Článek jej správně neuvádí.

**Zdroj:** [LumenGEO — Methodology & limitations](https://lumengeo.co/blog/perplexity-cited-page-word-count).

### 3. [TIP] První odstavec samotného MDX by mohl odpovědět přímo

**Citace:** „Tři veřejné studie délky obsahu pomohou takové zadání posoudit. Každá ale měří trochu jinou věc.“

Samotný úvod těla nejdříve připravuje otázku a slibuje rozbor. Rámec auditu požaduje samostatnou odpověď v prvních přibližně 100 slovech. Na skutečné stránce však před tělem stojí komponenta `Answer` s 48slovnou definicí; ověřeno v `src/pages/blog/[slug].astro` (Answer před Content). Celkový čtenářský začátek tedy podmínku plní.

**Návrh pro případnou editaci:** Ve druhém odstavci místo příslibu výkladu rovnou říci, že uvedené studie neurčují univerzální počet slov a že je nutné rozlišovat složení citovaných zdrojů od míry jejich výběru. Jde o zlepšení samostatného exportu těla, ne důvod zastavit publikaci.

## Ověření hlavních tvrzení

- **Google:** Dokumentace výslovně odmítá preferovaný počet slov. Nový průvodce AI vyhledáváním uvádí, že není nutné text rozdělovat do drobných částí, a odmítá ideální délku stránky. Článek zachovává omezení na Google a netvrdí, že stejné interní pravidlo znají i ostatní platformy. [Užitečný obsah](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [optimalizace pro generativní funkce](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- **Ahrefs:** Datum 3. 12. 2025, 174 048 získaných stránek a podíl 53,4 % pod 1 000 slov odpovídají publikaci. Spearmanových 0,04 je v metodice a oddílu 2 vztah délky k pořadí citace. Úvod zdroje jej nepřesně zobecňuje; auditovaný článek tuto chybu nepřebírá. Rovněž nepřebírá problematický celkový medián 1 115 slov. [Primární studie Ahrefs](https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/).
- **AirOps:** Datum 13. 4. 2026, 16 851 dotazů a tři běhy souhlasí. Tabulka skutečně udává 34,3 % a 28,6 % pro uvedené skupiny a vynechává obsah pod 100 slov. Jde o pozorovací analýzu; článek správně odmítá z rozdílu dělat výsledek experimentálního zkrácení téže stránky. [Primární report AirOps](https://www.airops.com/report/the-fan-out-effect-what-happens-between-a-query-and-a-citation).
- **LumenGEO:** Počet 954 a medián 1 748 slov, 160 dotazů, osm odvětví, americké prostředí i oba červencové termíny souhlasí. Článek správně odlišuje medián vzorku od ideální délky. [Primární studie LumenGEO](https://lumengeo.co/blog/perplexity-cited-page-word-count).

## Aktivně prověřené protiargumenty

**Pozitivní souvislost délky existuje v jiných publikovaných datech.** Discovered Labs uvádí při analýze citovanosti 10 000 URL kladný standardizovaný koeficient délky +0,13 po zohlednění dalších proměnných. Je to relevantní protiváha paušálnímu tvrzení „délka nehraje roli“. Auditovaný článek však takové tvrzení nemá: zpochybňuje univerzální kvótu a příčinný závěr ze srovnání různých stránek. Studie Discovered Labs sleduje počet citací a sama vychází z citovaných URL; ani její výsledek nedává univerzální hranici. Přidání čtvrté studie není nutné pro pravdivost vymezeného rozboru. [Discovered Labs — Other signals matter too a metodika](https://discoveredlabs.com/research/what-drives-ai-citations).

**Poloha informace může s délkou souviset.** MaxAEO publikuje experiment s umístěním stejného tvrzení do různých hloubek textu. Není to důkaz univerzálního počtu slov. Navíc vykazuje vnitřní nesoulad: metodika uvádí testované návody o 2 900–5 200 slovech, ale délková tabulka obsahuje pásmo 1 000–1 800. Nelze jím spolehlivě vyvrátit opatrný závěr článku; nepřebírat jeho číselná doporučení bez vyjasnění dat. [MaxAEO — metodika a délková tabulka](https://maxaeo.ai/blog/page-length-ai-citations/).

## Ostatní osy rámce

- **SEO:** Title i seoTitle mají 52 znaků, popis 141 znaků; hlavní fráze stojí na začátku. Slug odpovídá tématu. Šest H2 má obě požadované formy zvýraznění a vytváří logickou posloupnost.
- **Citovatelnost:** Answer má 48 slov, začíná definicí a dává samostatný smysl. FAQ odpovědi rozlišují platformy a výzkumné závěry. Údaj 40–60 slov je přiznaným redakčním pravidlem, nikoli slibem citace.
- **Odkazy:** Cíle obou článkových odkazů existují s odpovídajícími slugy; existují také zdroje stránek `/ai-viditelnost/` a `/audit/`. Produkční HTTP kontrolu ani build tento audit neprováděl.
- **Brand voice a CTA:** Věcný vzdělávací tón, žádná garance, urgence ani vymyšlené výsledky klientů. Závěr vede na konkrétní AI SEO audit a nevymýšlí jeho dodávky. Cena v CTA není pro splnění rámce nezbytná.
- **Aktuálnost:** Studie jsou datované a rozbor se neopírá o neukotvené „letos“. Příklady jsou zřetelně modelové. Tři výše uvedené tipy zvyšují přesnost, ale nejsou podmínkou publikace.
