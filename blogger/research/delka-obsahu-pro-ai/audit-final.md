# C5 — závěrečný nezávislý audit

**VERDIKT: PUBLIKOVAT. Žádný zásadní nález; C5b není potřebná.**

Datum: 17. 9. 2026. Posuzován celý `src/content/articles/delka-obsahu-pro-ai.mdx` podle `blogger/auditor-system.md`, v kontextu marketingového a vzdělávacího webu Sniper Design.

## Nezávislost a rozsah

V první fázi jsem z lokálních podkladů četl pouze článek a zadání auditora. Hlavní tvrzení jsem ověřil přímo na webových stránkách zdrojů a samostatně hledal protiargumenty. Vlastní závěr jsem odeslal hlavnímu agentovi před zpřístupněním předchozích auditů. Až ve druhé fázi jsem přečetl `audit-fakta.md`, `audit-jazyk.md` a `vyporadani.md`. Článek jsem neupravoval.

Audit posuzuje obsah a doložitelnost tvrzení. Nenahrazuje závěrečný jazykový checker, build, vizuální kontrolu ani produkční ověření odkazů.

## Vlastní nálezy

### C5-1 — [TIP] Doplnit praktickou odpověď přímo do úvodu těla

**Citace:** „Tři veřejné studie univerzální počet slov neurčují. Každá měří jinou věc: složení citovaných zdrojů, jejich výběr nebo pozici citace.“

Úvod těla správně odmítá univerzální číslo, ale praktické rozhodnutí o rozsahu nechává až na další oddíly. Pro samostatnou použitelnost prvních přibližně 100 slov by pomohla jedna věta s postupem.

**Návrh:** „Rozsah určujte podle informací potřebných k odpovědi; opakování zkraťte a chybějící podmínky či důkazy doplňte.“

**Stav:** Hlavní agent návrh přijal a zapracuje jej do úvodu. Jde o neblokující doplnění, nikoli faktickou opravu. Krátká odpověď ve frontmatteru již samostatnou odpověď poskytuje.

### C5-2 — [TIP] Definovat délku jako počet slov

**Citace:** „Délka obsahu pro AI je rozsah textu, který má čtenáři zodpovědět konkrétní otázku.“

Věta spojuje měřítko délky s účelem textu. Následující vysvětlení je správné; samotná definice by mohla konkrétněji říci, co se měří.

**Návrh:** „Délka obsahu pro AI označuje počet slov textu určeného i jako zdroj pro AI vyhledávání.“

**Stav:** Hlavní agent návrh přijal a zapracuje jej. Před odevzdáním přepočítá výsledný počet slov krátké odpovědi. Nejde o zásadní nález.

## Ověření faktů a protiargumentů

- **Google:** Obě tvrzení jsou doložena: Google nemá preferovaný počet slov a jeho průvodce pro generativní vyhledávání nevyžaduje rozdělování obsahu do drobných částí. Článek správně nepřenáší tuto dokumentaci na interní pravidla jiných platforem. [Užitečný obsah](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [průvodce AI vyhledáváním](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- **Ahrefs:** Počet 174 048, podíl 53,4 %, prosinec 2025 i výklad korelace 0,04 souhlasí. Úvod studie sice používá obecnější formulaci o citování, ale metodika a oddíl 2 vztahují korelaci k pozici citace. Článek tento rozdíl vysvětluje správně. [Primární studie](https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/).
- **AirOps:** Sedí 16 851 dotazů ve třech bězích, duben 2026, 34,3 % a 28,6 % i vyloučení obsahu pod 100 slov. Silnější tvrzení zdroje, že nejlepší rozsah činí 500–2 000 slov, představuje skutečný protiargument k čtenářské intuici článku. Publikovaná délková tabulka však porovnává pozorované skupiny, nikoli experimentální zkrácení stejné stránky. Opatrný závěr článku je přiměřený. [Report AirOps](https://www.airops.com/report/the-fan-out-effect-what-happens-between-a-query-and-a-citation).
- **LumenGEO:** Sedí 954 měřitelných citovaných stránek, medián 1 748, 160 komerčních dotazů, osm odvětví, americké prostředí a termíny 2. a 16. července 2026. Odmítnutí univerzálního minima odpovídá omezením vzorku. [Primární studie](https://lumengeo.co/blog/perplexity-cited-page-word-count).
- **Další nezávisle hledaný protiargument:** MaxAEO tvrdí vliv umístění informace uvnitř dlouhého textu. Jeho metodika však uvádí délky 2 900–5 200 slov, zatímco další tabulka zahrnuje i 1 000–1 800 slov bez vysvětlení. Zdroj tím nevyvrací opatrný závěr článku ani nedokládá univerzální normu délky. Není nutné jeho výsledky do článku přidávat. [MaxAEO — metodika a tabulka délky](https://maxaeo.ai/blog/page-length-ai-citations/).
- **Modelový příklad:** Výpočty jsou správné, jmenovatele výslovné a fiktivní charakter označen. Z převahy krátkých stránek článek nedělá příčinný závěr.

## Kontrola dosavadního vypořádání C2/C3

| Nález | Kontrola aktuálního článku | Výsledek |
|---|---|---|
| F1 — jmenovatel AirOps | Obsahuje omezení na sledovaná vyhledávání a vysvětlení opakování stejné URL mezi dotazy či běhy. | Vypořádáno. |
| F2 — měřitelný vzorek LumenGEO | Výslovně říká, že byly zahrnuty stránky, z nichž se podařilo získat text. | Vypořádáno. |
| F3 — přímější úvod | Druhý odstavec říká, že studie neurčují univerzální počet slov, a rozlišuje jejich metriky. | Vypořádáno; C5-1 navrhuje další volitelné doplnění. |
| J1 — vazba s podmětem článek | Aktuálně „je co zkrátit“. | Vypořádáno. |
| J2 — abstraktní samostatná srozumitelnost | Aktuálně „Aby jednotlivé úseky dávaly smysl i samy o sobě…“. | Vypořádáno. |

Poznámka k M1/M2: V posuzovaném článku je „povrch“ skutečně fyzický materiál v příkladu s čističem, takže nejde o anglický kalk označení digitálního rozhraní. Tím potvrzuji obsahovou triáž. Změnu regexu slovníku a její regresní příklady jsem v C5 samostatně nekontroloval; patří k mechanické kontrole hlavního agenta.

## Ostatní osy auditu

- **Srozumitelnost a tón:** Věcný výklad, přiměřená statistická opatrnost, názorný početní příklad. Pojmy medián a jmenovatel mají vysvětlení. Žádná vymyšlená klientská zkušenost ani marketingový nátlak.
- **SEO:** Při první nezávislé kontrole měl title i seoTitle 52 znaků, description 141. Hlavní fráze je na začátku. H2 tvoří logickou posloupnost a mají předepsané zvýraznění; slug a interní odkazy odpovídají tématu.
- **Citovatelnost:** Původní answer měl 48 slov, začínal definicí a stál samostatně. FAQ odpovědi zachovávají klíčové podmínky. Článek poctivě označuje pravidlo 40–60 slov jako redakční pomůcku.
- **CTA:** Konkrétní výzva na AI SEO audit přímo navazuje na problém chybějících odpovědí, podkladů a struktury. Neobsahuje garance a nemusí pro splnění zadání uvádět cenu.
- **Aktuálnost:** Data studií jsou ukotvena; text neobsahuje zavádějící neukotvené časové výrazy.

## Závěr

C2/C3 nálezy byly věcně vypořádány. C5 přidává dva přijaté, neblokující redakční tipy, jejichž zapracování provede hlavní agent. Žádný zásadní problém vyžadující C5b jsem nenašel. Článek lze po závěrečných kontrolách workflow publikovat.
