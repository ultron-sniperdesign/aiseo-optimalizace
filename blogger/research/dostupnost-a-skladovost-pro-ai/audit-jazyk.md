# Jazykový audit: Dostupnost a skladovost pro AI

Auditovaný soubor: `src/content/articles/dostupnost-a-skladovost-pro-ai.mdx`
Referenční tonalita: `marketing/05-messaging-a-tonalita.md`
Datum auditu: 26. září 2026

## Verdikt

Článek je věcný, srozumitelně členěný a převážně odpovídá edukativnímu hlasu značky: vysvětluje bez strašení, odděluje fakta od doporučení a výslovně odmítá garanci zobrazení v Googlu nebo ChatGPT. Technické termíny jsou většinou funkční a patří k tématu; `feed`, `preorder`, `backorder`, `Offer` ani názvy vlastností proto samy o sobě nepovažuji za chybu.

Před publikací však doporučuji opravit sedm zásadních míst. Největší potíže jsou chybný pád v jednom H2, anglicko-český hybrid „Google kompatibilní“, kalk „jedno místo pravdy“, nepřesná věta o jistotě data od dodavatele a obraty, které tvrdí něco jiného nebo víc, než následný text dokládá. Dále uvádím drobnější úpravy, které odstraní abstraktní „vrstvy“ a „podklady“, zpřesní technické pokyny a přiblíží text běžné češtině.

## Zásadní nálezy

### 1. Rozpor ve spojení „jednorázový denní export“ (ř. 34)

> „U rychle se měnícího skladu proto nestačí jednorázový denní export, pokud mezitím prodáváte poslední kusy.“

**Problém:** „Jednorázový“ znamená provedený pouze jednou, kdežto „denní“ označuje pravidelné opakování. Spojení je vnitřně rozporné a zamlžuje správnou pointu: jeden export za den může být málo.

**Konkrétní přeformulování:** „U rychle se měnícího skladu proto nestačí jediný export za den, pokud mezitím prodáváte poslední kusy.“

### 2. Anglicko-český hybrid a chybná vazba (ř. 97)

> „U Google kompatibilního formátu se ale předobjednávka zapisuje `preorder` bez podtržítka a `unknown` se nepřijímá.“

**Problém:** „Google kompatibilní“ kopíruje anglický slovosled a v češtině působí jako nepřirozený hybrid. Není také jasné, zda jde o obecnou kompatibilitu s Googlem, nebo přímo o formát Merchant Center.

**Konkrétní přeformulování:** „Ve formátu kompatibilním s Google Merchant Center se však předobjednávka zapisuje jako `preorder` bez podtržítka a hodnota `unknown` se nepřijímá.“

### 3. Kalk „jedno místo pravdy“ v nosném doporučení (ř. 144–145)

> „Jedno místo pravdy“
>
> „Stránka, strukturovaná data a feed nemají být tři ručně udržované texty. Nechte je vznikat ze stejného údaje v katalogu.“

**Problém:** „Jedno místo pravdy“ je doslovný kalk z *single source of truth*. Českému čtenáři neříká, co má prakticky udělat. Následující „nechte je vznikat“ je navíc neosobní a zbytečně abstraktní.

**Konkrétní přeformulování:**

- štítek: „Jeden zdroj údajů“;
- text: „Stránku, strukturovaná data i feed generujte ze stejného údaje v katalogu, místo abyste každý výstup upravovali ručně.“

### 4. Nejasný popis zpracování JavaScriptu (ř. 148)

> „Google u variant upozorňuje, že takový obsah může procházet méně často a méně spolehlivě.“

**Problém:** Není řečeno, kdo nebo co obsah „prochází“. Spojení „procházet méně spolehlivě“ není v češtině významově přesné a čtenář se nedozví, zda jde o načtení, vykreslení, nebo zpracování dat.

**Konkrétní přeformulování:** „Google u variant upozorňuje, že může strukturovaná data vytvořená JavaScriptem načítat méně často a zpracovat méně spolehlivě než data obsažená přímo v HTML.“

### 5. Nedoložený superlativ a nejasně pojmenovaná chyba (ř. 165)

> „Nejčastější past je předvolená varianta.“

**Problém:** Samotná předvolená varianta není chybou; problém nastává, když odkaz otevře jinou variantu, než jakou popisuje feed. „Nejčastější“ je navíc silnější tvrzení než následující doklad, podle něhož Google případ uvádí pouze „mezi typickými příčinami“.

**Konkrétní přeformulování:** „Častá chyba vzniká, když odkaz z feedu otevře jinou variantu, než kterou daný řádek popisuje.“

Navazující větu lze zpřesnit takto: „Feed odkazuje na velikost M, která je skladem, ale stránka po otevření předvolí vyprodanou velikost L.“

### 6. Chybný pád v nadpisu (ř. 167)

> „Kontrola dostupnosti musí být součást provozu“

**Problém:** Po slovese „být“ je v této vazbě instrumentál: „být součástí“.

**Konkrétní přeformulování:** „Kontrola dostupnosti musí být součástí provozu.“

### 7. Aktualizace data z něj neudělá jistotu (ř. 195)

> „Přesné datum od dodavatele není jistota, dokud ho neumíte průběžně aktualizovat.“

**Problém:** Věta vytváří chybnou příčinnou vazbu. Schopnost údaj aktualizovat nezaručuje, že dodavatel termín dodrží; umožní pouze rychle promítnout změnu. Formulace tedy slibuje víc, než říká následující doporučení.

**Konkrétní přeformulování:** „Datum od dodavatele se může změnit. Uvádějte je jen tehdy, pokud údaj průběžně ověřujete a každou změnu ihned promítnete na stránku; bez potvrzení použijte poctivé rozpětí.“

## Drobné nálezy

### 8. Vágní zájmeno „tuto práci“ (ř. 46)

> „Vágní ‚skladem u dodavatele‘ bez termínu tuto práci nedělá.“

**Problém:** „Tato práce“ nemá jednoznačný význam a zní jako strojový obrat. Pointou je, že štítek zákazníkovi neřekne, kdy zboží dostane.

**Konkrétní přeformulování:** „Vágní ‚skladem u dodavatele‘ bez termínu zákazníkovi neřekne, kdy zboží dostane.“

### 9. Abstraktní „proměnlivá vrstva“ (ř. 48)

> „Tady řešíme jedinou proměnlivou vrstvu: stav nabídky od posledního kusu přes dočasné vyprodání až po předobjednávku.“

**Problém:** „Vrstva“ je abstrakce bez opory a „stav nabídky od posledního kusu“ není přirozená česká vazba. Věta může jednoduše pojmenovat rozsah článku.

**Konkrétní přeformulování:** „Tady se soustředíme na dostupnost nabídky: od posledních kusů přes dočasné vyprodání až po předobjednávku.“

### 10. Metafora „Google drží hranici“ a náhlý technický zápis (ř. 54)

> „Google tuto hranici drží i v datech. Stav nabídky patří do `Offer.availability`.“

**Problém:** „Držet hranici“ zde není přirozená česká vazba. Druhá věta navíc zavádí technický zápis dřív, než vysvětlí jeho části.

**Konkrétní přeformulování:** „Google oba údaje rozlišuje i ve svých datových formátech. Ve strukturovaných datech se stav nabídky zapisuje do vlastnosti `availability` u typu `Offer` (nabídka).“

### 11. Neurčitý odkaz „stejná logika“ (ř. 73)

> „Stejnou logiku použijte u ceny.“

**Problém:** Čtenář musí zpětně hádat, zda se „logikou“ myslí oddělení údajů, konkrétní termín, nebo shoda stránky s daty.

**Konkrétní přeformulování:** „U ceny platí stejná zásada: zákazník i systémy mají dostat tentýž aktuální údaj.“

### 12. „Pokladna“ může znamenat fyzické místo (ř. 94)

> „Google vyžaduje shodu dostupnosti mezi produktovou stránkou, strukturovanými daty, pokladnou a produktovým zdrojem.“

**Problém:** V kontextu e-shopu se myslí checkout nebo objednávkový proces, ale „pokladna“ může českému čtenáři evokovat kamennou prodejnu.

**Konkrétní přeformulování:** „Google vyžaduje shodu dostupnosti mezi produktovou stránkou, strukturovanými daty, objednávkovým procesem a produktovým feedem.“

### 13. Nejasný přívlastek „nativní“ (ř. 97)

> „OpenAI používá v nativním produktovém feedu podobné stavy…“

**Problém:** Není jasné, zda „nativní“ znamená vlastní formát OpenAI, přímé napojení, nebo vestavěnou funkci. V produktovém kontextu jde o kalk z angličtiny.

**Konkrétní přeformulování:** „OpenAI používá ve vlastním formátu produktového feedu podobné stavy…“

### 14. Opakovaná abstrakce „jiná vrstva“ (ř. 103)

> „Na produktové stránce patří stav do nabídky `Offer`. Dodací lhůta je jiná vrstva.“

**Problém:** „Vrstva“ neříká, kam se údaj zapisuje ani proč se odděluje.

**Konkrétní přeformulování:** „Na produktové stránce patří stav do nabídky `Offer`. Dodací lhůtu popište samostatně pomocí údajů o zpracování a přepravě.“

### 15. „Příklad je podklad“ neříká, jak s příkladem pracovat (ř. 142)

> „Příklad je podklad, ne univerzální šablona.“

**Problém:** „Podklad“ je vágní úřední slovo. Smyslem věty je varovat před kopírováním hodnot bez úprav.

**Konkrétní přeformulování:** „Příklad ukazuje princip; nekopírujte jej bez úprav.“

### 16. Sklad sám „nemění stav“ (ř. 145)

> „Když sklad změní stav, musí se společně změnit viditelný štítek…“

**Problém:** Věta připisuje činnost skladu místo skladovému údaji. „Společně změnit“ je rovněž méně přesné než „aktualizovat současně“.

**Konkrétní přeformulování:** „Když se změní skladový stav, současně aktualizujte viditelný štítek, `Offer.availability`, produktový feed i možnost vložit zboží do košíku.“

### 17. Vágní „platforma“ a technická „HTML odpověď serveru“ (ř. 148)

> „Pokud to platforma umožní, posílejte základní produktová data už v HTML odpovědi serveru.“

**Problém:** „Platforma“ může označovat e-shopové řešení, Google i OpenAI. Druhá polovina je pro netechnického čtenáře zbytečně nepřístupná.

**Konkrétní přeformulování:** „Pokud to vaše e-shopové řešení umožňuje, vložte základní produktová data přímo do HTML, které server odešle prohlížeči.“

### 18. Nepřirozený slovosled u variant (ř. 152)

> „Tričko může být skladem v modré velikosti M a vyprodané v černé velikosti L.“

**Problém:** Vazba „v modré velikosti M“ zní, jako by modrá byla velikost.

**Konkrétní přeformulování:** „Modré tričko velikosti M může být skladem, zatímco černé tričko velikosti L je vyprodané.“

### 19. „Adresa, která variantu předvolí“ je nejednoznačná (ř. 32, 154 a 158)

> „Každá varianta má mít vlastní cenu, dostupnost, identifikátor a adresu, která ji umí přímo předvolit.“
>
> „Otevřete adresu z feedu.“

**Problém:** „Adresa“ může znamenat poštovní adresu. Navíc ji text personifikuje: adresa sama nic „neumí“. V technickém návodu je vhodné jednou říct URL a dál použít běžnější „odkaz“.

**Konkrétní přeformulování:** „Každá varianta má mít vlastní cenu, dostupnost, identifikátor a URL, po jejímž otevření se daná varianta přímo zobrazí.“ V kroku kontroly: „Otevřete odkaz uvedený ve feedu.“

### 20. Směs anglických názvů a českého pokynu bez vysvětlení (ř. 160)

> „Najděte správný Product a Offer. Identifikátor, cena a availability musí patřit téže variantě.“

**Problém:** Názvy typů a vlastnosti jsou technicky správné, ale věta je podává jako běžná podstatná jména a míchá je s češtinou. Tonalita požaduje české označení s technickým názvem v závorce.

**Konkrétní přeformulování:** „Ve strukturovaných datech najděte správný produkt (`Product`) a nabídku (`Offer`). Zkontrolujte, že identifikátor, cena a vlastnost `availability` patří téže variantě.“

### 21. Nejasný „ruční zásah dodavatele“ (ř. 169)

> „Sklad se mění po objednávkách, vratkách, příjmu zboží i při ručním zásahu dodavatele.“

**Problém:** Není jasné, do čeho dodavatel zasahuje. „Zásah“ navíc působí dramaticky, přestože se patrně myslí obyčejná změna údaje.

**Konkrétní přeformulování:** „Skladový stav se mění po objednávkách, vratkách, příjmu zboží i po ruční úpravě údajů dodavatelem.“

### 22. „Držte dobu“ a opakování slova „dostupné“ (ř. 174–175)

> „Vedle dostupnosti držte dobu zpracování a přepravy.“
>
> „…průběžné změny přes API, pokud je napojení dostupné.“

**Problém:** „Držet dobu“ je technický slang. Ve druhé větě se slovo „dostupné“ používá ve dvou významech těsně vedle tématu dostupnosti zboží, což zbytečně mate.

**Konkrétní přeformulování:** „Vedle skladového stavu evidujte také dobu zpracování a přepravy.“ A dále: „OpenAI doporučuje odesílat celý feed denně a průběžné změny přes API, pokud máte k tomuto napojení přístup.“

### 23. Kalk „okno nesouladu“ a kostrbatý časový pokyn (ř. 189)

> „Krátké okno nesouladu může vzniknout při každé změně. Aktualizujte oba výstupy z jednoho zdroje a co nejblíž stejnému okamžiku.“

**Problém:** „Okno“ je zde kalk z anglického *window*. „Co nejblíž stejnému okamžiku“ je těžkopádné a méně přesné než jednoduché „současně“.

**Konkrétní přeformulování:** „Při každé změně může vzniknout krátkodobý nesoulad. Oba výstupy proto aktualizujte ze stejného zdroje a pokud možno současně.“

### 24. Abstraktní chyba „správná data jako slib“ (ř. 197–198)

> „Správná data jako slib zobrazení“
>
> „Přesnost je podklad a u Googlu podmínka způsobilosti…“

**Problém:** Titulek nepojmenovává chybu přirozenou větou a „přesnost je podklad“ je abstraktní. Přesnější je přímo říct, co data nezaručují a k čemu slouží.

**Konkrétní přeformulování:** Titulek: „Přesná data nejsou zárukou zobrazení“. Text: „Přesná data pomáhají splnit podmínky Googlu pro produktové výsledky, ale nezaručují zobrazení produktu ani doporučení v odpovědi AI.“

### 25. Vágní pointa v závěrečném H2 (ř. 202)

> „Přesná dostupnost dává produktu použitelný podklad“

**Problém:** Nadpis uzavírá článek, ale „použitelný podklad“ neříká, pro koho ani k čemu je údaj použitelný. Jde o typickou abstraktní pointu, která slibuje víc, než sama sděluje.

**Konkrétní přeformulování:** „Přesná dostupnost dává zákazníkům i systémům stejný údaj.“

### 26. Personifikovaný „systém“ a kostrbatá „práce po velikostech“ (ř. 206)

> „Odstraňuje ale rozpor, kvůli kterému zákazník vidí něco jiného než systém. U produktů s variantami je to práce po jednotlivých velikostech, barvách a baleních…“

**Problém:** „Systém vidí“ je příliš obecné a text nikde neurčuje, který systém má na mysli. „Je to práce po jednotlivých…“ je mechanická, nepřirozená vazba.

**Konkrétní přeformulování:** „Odstraňuje ale rozpor mezi údajem na stránce a údajem, který dostane vyhledávač nebo nákupní služba. U produktů s variantami proto veďte dostupnost zvlášť pro každou velikost, barvu a balení.“

### 27. „Lidé i stroje“ nesedí k edukativnímu hlasu (ř. 208)

> „Chcete připravit produktovou stránku tak, aby lidé i stroje našli cenu, dostupnost, parametry a podmínky na správném místě?“

**Problém:** „Stroje“ je odtažité a v kontextu článku méně přesné než konkrétní příjemci dat. Jinak je CTA věcné a bez přehnaného slibu.

**Konkrétní přeformulování:** „Chcete připravit produktovou stránku tak, aby zákazníci, vyhledávače i AI našli cenu, dostupnost, parametry a podmínky na správném místě?“

## Tonalita a typografie

- Edukativní hlas je dodržen: text je konkrétní, nepracuje se strachem ani s umělou naléhavostí a u přínosu přesných dat nepoužívá garance.
- Prodejní odstavec na konci je v souladu s tonalitou Packu: uvádí cenu, konkrétní obsah a nevyžaduje přehnaný claim. Doporučená je pouze výměna „lidé i stroje“.
- České uvozovky, rozsahy s pomlčkou (`3–5`) i zápis ceny jsou v pořádku. Rovné uvozovky ve frontmatteru a atributech komponent jsou součást syntaxe, nikoli typografická chyba textu.
- Anglické hodnoty `in_stock`, `out_of_stock`, `preorder`, `backorder`, `availability` a názvy typů strukturovaných dat jsou v článku dokladem technického formátu. Není důvod je překládat; stačí je při prvním použití zasadit do české věty a vysvětlit.
- Cílená kontrola projektového slovníku nepotvrdila pro většinu těchto obratů existující přesné pravidlo. Výraz „nativní“ slovník už hlídá v příbuzném produktovém významu; spojení „nativní produktový feed“, „jedno místo pravdy“ a „okno nesouladu“ jsou vhodní kandidáti pro pozdější doplnění slovníku, pokud se objeví i v dalších textech.
