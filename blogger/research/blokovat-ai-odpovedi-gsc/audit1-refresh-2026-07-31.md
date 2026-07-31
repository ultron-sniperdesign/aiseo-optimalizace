1. **FAQ tvrdí víc, než je doloženo, u dostupnosti mimo UK**
   - **Citace:** „*od poloviny července 2026 ho podle dostupných zpráv vidí i majitelé mimo Británii*“
   - **Problém:** To je opřené jen o sekundární zdroje. Research výslovně říká, že přesné datum mimo UK se nepodařilo ověřit a do článku má jít jen opatrná formulace, ne tvrdší tvrzení. „Od poloviny července“ je sice slabší než 14. 7., ale pořád je to časové tvrzení bez primárního potvrzení.
   - **Konkrétní oprava:** Přepsat na: „*Zpočátku se objevil u části britských webů a podle dostupných hlášení už není omezený jen na Británii. Google ale v nápovědě pořád mluví jen o části majitelů webů, takže je to nasazování po dávkách.*“

2. **Stejný nedoložený časový údaj zůstal i v úvodu**
   - **Citace:** „*od poloviny července 2026 ho podle dostupných zpráv vidí i majitelé mimo Británii*“
   - **Problém:** Nedočištěný refresh; stejná slabina jako ve FAQ, navíc hned v hlavním textu. Článek se tím zbytečně vystavuje útoku na přesnost.
   - **Konkrétní oprava:** Stejně jako výše odstranit časové ukotvení a nechat jen „už není omezený jen na Británii / objevuje se i mimo Británii“.

3. **Insight o ovládání po stránkách sklouzává k nedoloženému výkladu regulace**
   - **Citace:** „*Ovládání po jednotlivých stránkách si vydavatelé v britském řízení vyžadovali; Google proti němu argumentoval tím, že generativní odpovědi nejsou předvídatelné, a žádný termín zatím neoznámil.*“
   - **Problém:** Research říká jen to, že sekundární zdroje uváděly rozdělení termínů a že to do článku nešlo. Tady se navíc přidává procesní výklad o tom, co vydavatelé vyžadovali a jak Google argumentoval. To může být pravda, ale v dodaném ověřeném podkladu to není.
   - **Konkrétní oprava:** Zkrátit na doložitelné minimum: „*Ovládání je zatím na úrovni celého vlastnictví. Možnost odhlásit jednotlivé stránky Google neoznámil.*“

4. **FAQ o odhlášení části webu obsahuje nedoložený zbytek ze starší verze**
   - **Citace:** „*Ovládání po stránkách si vydavatelé v britském řízení vyžadovali, Google proti němu argumentoval a Google zatím žádný termín neoznámil.*“
   - **Problém:** To je přesně typ starého doplňku, který po refreshi zůstal bez pevné opory v doložených zdrojích. Nejtěžší problém je, že je ve FAQ, tedy v části, která se často čte izolovaně.
   - **Konkrétní oprava:** „*Zatím ne. Ovládání je na úrovni celého vlastnictví a možnost odhlásit jednotlivé stránky Google neoznámil.*“

5. **Věcná nepřesnost u nosnippet: článek směšuje snippet a AI trénink, ale neříká jasně, že nosnippet může zasahovat i do použití ve vyhledávacích funkcích**
   - **Citace:** „*Direktivy jako nosnippet a data-nosnippet omezují, co se smí použít jako text úryvku*“
   - **Problém:** Formulace je moc úzká a zavádí k dojmu, že nosnippet řeší jen klasický snippet. U takového tématu je potřeba být přesný: rozdíl proti novému přepínači je hlavně v úrovni a účelu ovládání, ne v tom, že nosnippet patří jen ke „klasickému úryvku“.
   - **Konkrétní oprava:** „*Direktivy jako nosnippet a data-nosnippet omezují, jaký obsah smí Google z konkrétní stránky nebo její části použít ve výstupech vyhledávání. Přepínač v Search Console naproti tomu řeší zapojení celého vlastnictví do generativních funkcí.*“

6. **Věcně příliš široké tvrzení o robots.txt**
   - **Citace:** „*Blokace v robots.txt řeší procházení.*“
   - **Problém:** Jako zkratka to projde, ale článek se tváří jako rozhodovací rámec pro praxi. Tohle je až moc hrubé zjednodušení. Robots.txt řídí přístup crawlerů, ne „AI“ obecně; bez dovysvětlení to svádí k mylné představě, že robots.txt je srovnatelná alternativa k přepínači.
   - **Konkrétní oprava:** „*robots.txt řídí, jestli konkrétní crawler smí obsah procházet. Není to totéž jako přepínač pro generativní funkce ve Search Console ani jako pravidlo pro trénování modelů.*“

7. **FAQ o běžném hodnocení je formulované jistěji, než odpovídá dokladu**
   - **Citace:** „*Odhlášený web má tedy zůstat normálně indexovaný a hodnocený ve výsledcích mimo tyto generativní funkce.*“
   - **Problém:** Primární zdroj říká, že control „isn't used as a ranking or inclusion signal affecting other parts of Search“. To není totéž jako plný slib „má zůstat normálně indexovaný a hodnocený“. Druhá věta je už interpretace.
   - **Konkrétní oprava:** „*Google uvádí, že toto nastavení nepoužívá jako signál pro hodnocení ani zařazení v ostatních částech vyhledávání. To ale není totéž jako nezávisle ověřená garance dopadu.*“

8. **Stats „0 z AI“ je příliš absolutní a zkratkovitý**
   - **Citace:** `value: "0 z AI"` + `label: "odhlášený web podle Googlu nedostane návštěvy ani zobrazení z generativních funkcí"`
   - **Problém:** Samotná zkratka „0 z AI“ je agresivnější než label a navíc nepřesná: nejde o „AI“ obecně, ale o konkrétní generativní funkce Googlu ve vyhledávání a Discoveru. To je přesně typ zjednodušení, který pak čtenář přenese i na trénink modelů.
   - **Konkrétní oprava:** Změnit value třeba na `0 z generativních funkcí` nebo `bez zobrazení z AIO/AI Mode` a držet stejnou terminologii jako v textu.

9. **Title je zavádějící vůči aktualizovanému obsahu**
   - **Citace:** `title: "Blokovat AI odpovědi v Google? Rozhodovací rámec"`
   - **Problém:** Článek ve skutečnosti neřeší „AI odpovědi v Google“ obecně, ale konkrétní Search generative AI control v Search Console. Title je zbytečně široký a marketingový, méně přesný než refresh.
   - **Konkrétní oprava:** „*Přepínač pro AI odpovědi v Search Console: rozhodovací rámec*“ nebo „*Odhlášení webu z AI funkcí Googlu v Search Console: rozhodovací rámec*“.

10. **Description je věcně slušná, ale jazykově kostrbatá**
    - **Citace:** „*Přepínač v Search Console, kterým web odhlásíte z AI odpovědí, se nasazuje i mimo Británii.*“
    - **Problém:** „kterým web odhlásíte z AI odpovědí“ zní mechanicky a nepřesně; web se neodhlašuje „z odpovědí“, ale z použití v generativních funkcích. Navíc se opakuje nedoložený rámec „i mimo Británii“ bez opatrnosti.
    - **Konkrétní oprava:** „*V Search Console je nové nastavení pro odhlášení webu z generativních funkcí Googlu. Co přesně dělá, čeho se netýká a komu může dávat smysl.*“

11. **Answer je po refreshi funkční, ale pořád obsahuje starý marketingový jazyk místo oficiálního názvu**
    - **Citace:** „*Nastavení generativní AI ve vyhledávání je v Search Console přepínač…*“
    - **Problém:** Máte ověřený oficiální název „Search generative AI control“, ale v nejdůležitějších rychlých polích ho nepoužíváte. To je ztráta přesnosti i použitelnosti.
    - **Konkrétní oprava:** „*Search generative AI control je nastavení v Search Console na úrovni celého vlastnictví…*“

12. **Rozpor mezi užitečnou opatrností a ztrátou praktické hodnoty v části o měření**
    - **Citace:** „*nedá se použít jako experiment*“ a později „*přesné oddělení jednotlivých AI ploch dnes z běžně dostupných dat nejde*“
    - **Problém:** Refresh správně přidává opatrnost, ale místy sklouzává až k paralyzujícímu tónu: skoro jako by z toho nešlo udělat žádné rozhodnutí. To odporuje zadání, že se nemá ztratit původní rozhodovací rámec.
    - **Konkrétní oprava:** Přidat jednu praktickou větu: „*I bez čistého experimentu má smysl porovnat aspoň podíl asistovaných návštěv, konverzní chování těchto uživatelů a obchodní citlivost obsahu, který chráníte.*“

13. **Jazyk: anglicismus a neobratnost**
    - **Citace:** „*AI povrchy*“
    - **Problém:** To je slabý kalk z „surfaces“, v češtině to působí nepřirozeně.
    - **Konkrétní oprava:** Nahradit „*AI plochy / výstupy / umístění / rozhraní*“ podle kontextu.

14. **Jazyk: hovorovost sráží odborný text**
    - **Citace:** „*mrkněte se do nastavení svého vlastnictví*“
    - **Problém:** V analytickém článku po faktickém refreshi to působí lacině.
    - **Konkrétní oprava:** „*podívejte se do nastavení svého vlastnictví*“

15. **Závěr je zbytečně rozkročený mezi článek a prodejní copy**
    - **Citace:** „*AI SEO audit za 9 990 Kč…*“
    - **Problém:** Po relativně pečlivém vymezení hranic článku následuje tvrdý prodej. To samo není věcná chyba, ale oslabuje důvěryhodnost právě u textu, který stojí na opatrném zacházení s nedoloženými tvrzeními.
    - **Konkrétní oprava:** Zkrátit a oddělit CTA od závěru vizuálně i tónem, nebo ho dát mimo článek.

### 3 nejzávažnější nálezy
1. Nedoložené časové tvrzení o rozšíření mimo UK v úvodu i FAQ („od poloviny července 2026“).
2. Nedočištěný zbytek ve FAQ a insightu o ovládání po stránkách a britském řízení, který jde nad rámec doloženého podkladu.
3. Věcně nepřesné zjednodušení rozdílu mezi přepínačem, nosnippet a robots.txt.

**Publikovatelnost:** V této podobě bych článek ještě nepublikoval; potřebuje dočistit hlavně FAQ a odstranit tvrzení, která jsou silnější než ověřený research.