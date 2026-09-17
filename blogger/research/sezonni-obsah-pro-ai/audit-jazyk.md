# Jazykový audit: Sezónní obsah a AI

**Auditovaný soubor:** `src/content/articles/sezonni-obsah-pro-ai.mdx`  
**Datum auditu:** 17. 9. 2026  
**Rozsah:** čeština, srozumitelnost, tonalita, typografie, anglicismy, strojové vazby, vágní formulace, přiměřenost tvrzení, metadata, krátká odpověď, komponenty, FAQ a CTA. Externí zdroje nebyly v tomto jazykovém auditu otevírány; přiměřenost tvrzení je hodnocena podle formulací a opory viditelné přímo v článku.

## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrou stavbu, klidný edukativní tón a správně opatrně popisuje vztah stabilní URL k AI odpovědím. Publikaci ale brání především nekonzistentní psaní „sezónní/sezonní“, chybná vazba v nápisu komponenty, nevysvětlené technické výrazy v čtenářských textech a několik vět, které z odhadu či doporučení dělají jistější tvrzení, než text dokládá.

## Co je v pořádku

- `title` má 52 znaků, klíčové spojení je na začátku a otázku článek přímo zodpovídá.
- `seoTitle` má 51 znaků a `description` 140 znaků; oba údaje splňují zadané délky.
- `answer` má 46 slov, začíná definicí, je samostatně srozumitelný a shoduje se s úvodním odstavcem.
- Titulek, popis, krátká odpověď a hlavní doporučení si významově neodporují.
- Všechny H2 mají požadovanou kombinaci zvýrazněného tématu a pointy.
- FAQ řeší skutečné otázky čtenářů a odpovědi jsou převážně použitelné i bez zbytku článku.
- CTA vede na konkrétní Audit AI viditelnosti a uvádí správnou cenu 3 600 Kč bez DPH. Nepoužívá nátlak ani záruku výsledku.
- České uvozovky, mezery v tisících a zápis ceny jsou správně.

## Nálezy

### 1. [WARNING] Kolísá podoba „sezónní“ a „sezonní“

**Citovaná pasáž:** `title: „Sezónní obsah…“`, ale dále například „Sezonní poptávka“, „sezonní kategorie“, „Mimo sezonu“, „před sezonou“, „sezonní rozcestník“ a FAQ „Co má být na sezonní stránce…“.

**Problém:** Obě pravopisné varianty lze v češtině potkat, ale jejich střídání v jednom článku působí jako nedotažená redakce. Metadata a klíčová slova už používají podobu „sezónní“, takže krátká podoba v těle navíc narušuje shodu s hlavním termínem článku.

**Navržené znění:** Sjednotit všechny čtenářské texty na „sezónní“, „sezóna“, „mimo sezónu“, „před sezónou“ a „sezónní rozcestník“. Slug `sezonni-obsah-pro-ai` zůstává beze změny.

### 2. [TIP] SEO titulek má kostrbatý konec

**Citovaná pasáž:** „Sezónní obsah: proč držet jednu URL každý další rok“

**Problém:** Vazba „držet jednu URL každý další rok“ zní mechanicky. Sloveso „držet“ se v článku opakuje jako technická zkratka, ale v titulku je přirozenější „zachovat“.

**Navržené znění:** „Sezónní obsah: proč zachovat jednu URL pro každý rok“ (52 znaků).

### 3. [WARNING] Úvod zaměňuje odhad hledanosti za počet skutečných hledání

**Citovaná pasáž:** „Marketing Miner 17. září 2026 uváděl u dotazu ‚black friday‘ průměrnou měsíční hledanost 13 000, ale měsíční řada za listopad 2025 měla 110 000 hledání. U ‚vánočních dárků‘ připadlo na listopad i prosinec po 26 000.“

**Problém:** „Měsíční řada měla“ je nepřirozená vazba. Především se v jedné větě přechází od metriky hledanosti k tvrzení o skutečném počtu hledání. Pokud nástroj ukazuje odhad hledanosti, jazyk nemá číslo vydávat za změřený počet dotazů.

**Navržené znění:** „Marketing Miner 17. září 2026 uváděl u dotazu ‚black friday‘ průměrnou měsíční hledanost 13 000. Pro listopad 2025 však jeho měsíční přehled uváděl odhadovanou hledanost 110 000; u dotazu ‚vánoční dárky‘ pak 26 000 v listopadu i prosinci.“

### 4. [TIP] Vyhledávače jsou zbytečně polidštěné

**Citovaná pasáž:** „…je škoda každý rok čekat, až si vyhledávače všimnou úplně nové adresy.“

**Problém:** „Všimnou si“ je hovorová personifikace a zakrývá konkrétní děj: objevení a zařazení stránky. „Úplně nová adresa“ je také výplňové zesílení.

**Navržené znění:** „Kvůli krátkému vrcholu je nepraktické každý rok čekat, až vyhledávače novou adresu objeví a zařadí.“

### 5. [TIP] „Smysluplná adresa“ je vágní překlad

**Citovaná pasáž:** „…pro každý další ročník použít tutéž smysluplnou adresu.“

**Problém:** „Smysluplná“ neříká, jaká vlastnost URL je žádoucí. V tomto kontextu jde o stejnou, popisnou adresu bez roku.

**Navržené znění:** „…pro každý další ročník použít stejnou popisnou URL bez roku.“

### 6. [WARNING] Věta o historii URL je vágní a naznačuje silnější účinek

**Citovaná pasáž:** „Stejná adresa drží pohromadě interní odkazy, odkazy z jiných webů i historii, kterou už vyhledávač s URL spojuje.“

**Problém:** „Drží pohromadě historii“ je neurčitá metafora. Čtenář si z ní může odnést, že stáří URL samo vytváří výhodu, přestože následující věta takový automatický účinek správně odmítá.

**Navržené znění:** „Na stejnou URL dál vedou dosavadní interní i externí odkazy a vyhledávač nemusí každý rok objevovat novou adresu. Samotné stáří URL však lepší pozici nezaručuje.“

### 7. [TIP] „Záměr“ se používá jako nevysvětlená abstrakce

**Citovaná pasáž:** „Rada platí pro opakující se záměr.“ Dále: „pro opakovaný záměr“, „Držte jednu URL pro stejný záměr“ a „neodpovídá záměru člověka“.

**Problém:** Samotné slovo „záměr“ je bez přívlastku neurčité. Článek přitom umí totéž později vyjádřit konkrétně jako „stejná potřeba zákazníka“ nebo „účel stránky“.

**Navržené znění:** Používat podle kontextu „stejný účel stránky“, „stejná potřeba zákazníka“ a „informace, které člověk po otevření odkazu očekává“. Například: „Rada platí, když se opakuje stejný účel stránky.“

### 8. [WARNING] Dvě buňky srovnávací tabulky mají nepřirozenou vazbu

**Citovaná pasáž:** „Stálý rozcestník dárků nebo vánoční nabídky“ a „Opakovaná sezonní kategorie, pokud se pravidelně plní“.

**Problém:** „Rozcestník dárků“ zní, jako by rozcestník patřil dárkům; „kategorie se plní“ neříká čím. Jde o výrazné komponentové texty, které čtenář skenuje rychleji než odstavce.

**Navržené znění:** „Stálý rozcestník s tipy na dárky nebo s vánoční nabídkou“ a „Opakovaná sezónní kategorie, do které se každý rok vracejí produkty“.

### 9. [WARNING] Doporučení Googlu a autorův závěr splývají v jeden claim

**Citovaná pasáž:** „Google ve svém průvodci pro generativní vyhledávání doporučuje omezovat duplicity a nevyrábět samostatnou stránku pro každou variantu dotazu.“

**Problém:** „Nevyrábět“ je hovorové. Hlavně není poznat, zda Google doslova doporučuje nevytvářet stránku pro každou variantu dotazu, nebo zda jde o autorovu aplikaci obecného doporučení na sezónní stránky. Jazyk tím může zdroji přisuzovat konkrétnější stanovisko, než článek dokládá.

**Navržené znění:** „Google ve svém průvodci pro generativní vyhledávání doporučuje omezovat duplicity. Pro opakovanou akci z toho lze odvodit, že řada téměř shodných ročních stránek obvykle nedává smysl.“

### 10. [WARNING] Nápis komponenty má chybnou českou vazbu

**Citovaná pasáž:** `label="Stabilní URL není povinnost držet prázdnou stránku"`

**Problém:** Konstrukce „URL není povinnost držet“ je syntakticky porušená. Není jasné, zda je podmětem URL, nebo povinnost.

**Navržené znění:** „Stabilní URL neznamená povinnost držet prázdnou stránku.“

### 11. [WARNING] Technické výrazy nejsou při prvním použití vysvětlené

**Citované pasáže:** „Google připouští `noindex`“, „web, feed i dostupnost“, „`dateModified`“, „`lastmod` v XML sitemapě“ a v checklistu „správnou canonical adresu“ a „pravdivým lastmod“.

**Problém:** Článek je určený i provozovatelům e-shopů, ne pouze technickým SEO specialistům. Anglické nebo kódové výrazy jsou použity jako běžná podstatná jména bez krátkého českého vysvětlení. „Canonical adresa“ je navíc hybridní spojení a „pravdivý lastmod“ působí strojově.

**Navržené znění:**

- „…lze ji vyřadit z výsledků pomocí direktivy `noindex`.“
- „Po skončení akce musí stránka, produktová data pro Merchant Center i údaj o dostupnosti souhlasit.“
- „Viditelné ‚Aktualizováno‘ a údaj `dateModified` ve strukturovaných datech…“
- „Totéž platí pro údaj o poslední významné změně (`lastmod`) v XML mapě webu.“
- V checklistu: „Vrací URL stav 200, má správně nastavený kanonický odkaz (`canonical`) a odpovídá údaj `lastmod` poslední významné změně?“

### 12. [TIP] Dva pokyny jsou vágní a strojově abstraktní

**Citovaná pasáž:** „…mimo sezonu nabídněte pravdivý, užitečný stav.“ a „…nevytvářejte falešnou aktuálnost.“

**Problém:** Stránka „nenabízí stav“ a „falešná aktuálnost“ je abstraktní nominalizace. V obou případech lze přímo říct, co má provozovatel udělat.

**Navržené znění:** „…ponechte na stránce jasné oznámení o skončení akce a užitečné odkazy.“ a „…odstraňte ji; starý obsah nevydávejte za aktuální.“

### 13. [WARNING] Věta o Bingu má nejasné zájmeno a chybí jí viditelná opora

**Citovaná pasáž:** „Bing obdobně doporučuje, aby `lastmod` odpovídal skutečné změně, protože podle něj může plánovat nové projití časově citlivých stránek.“

**Problém:** „Podle něj“ může odkazovat na Bing i na `lastmod`. Na rozdíl od tvrzení o Googlu zde článek nenabízí čtenáři odkaz na zdroj, takže konkrétní tvrzení o plánování dalšího projití působí jako nedoložený dovětek.

**Navržené znění:** Pokud bude doplněn konkrétní zdroj: „Bing obdobně uvádí, že podle údaje `lastmod` může plánovat nové projití časově citlivých stránek.“ Bez zdroje větu vypustit.

### 14. [WARNING] Karta chyby slučuje několik různých kroků do jedné nepřesné věty

**Citovaná pasáž:** „Nová roční stránka se musí znovu objevit v odkazech, sitemapě a indexu.“

**Problém:** Stránka se v interních odkazech a sitemapě sama „neobjeví“; provozovatel ji tam přidává. Do indexu ji naopak zařazuje vyhledávač. Smíchání aktérů zhoršuje srozumitelnost.

**Navržené znění:** „Novou roční stránku musíte znovu přidat do interních odkazů a mapy webu; vyhledávač ji pak musí objevit a zařadit.“

### 15. [WARNING] Text připisuje vyhledávači nedoložené „učení“

**Citovaná pasáž:** „Nepřesné datum učí vyhledávač, že signálu nelze věřit…“

**Problém:** Věta polidšťuje systém a tvrdí konkrétní následek, který v článku není doložen. Bezpečně lze říct, že nepřesný údaj ztrácí informační hodnotu.

**Navržené znění:** „Nepřesné datum ztrácí pro vyhledávač informační hodnotu a čtenáři neřekne, kdy se obsah skutečně změnil.“

### 16. [TIP] „Model“ v uvozovkové větě není určený

**Citovaná pasáž:** „Není to důkaz, že model ‚odměňuje stáří adresy‘.“

**Problém:** Předchozí odstavec mluví současně o indexu, AI Overviews, AI Mode a generativních funkcích. Není zřejmé, jaký model má být podmětem. „Odměňování“ navíc opět polidšťuje systém.

**Navržené znění:** „Není to důkaz, že Google automaticky zvýhodňuje starší URL.“

### 17. [WARNING] Část FAQ obsahuje strojové nebo nepřirozené vazby

**Citované pasáže:** „Rok změňte až s reálnou aktualizací nabídky“, „Stránku zapojte do běžných odkazů webu“ a „generativní funkce vycházejí z indexu Vyhledávání a běžných SEO základů“.

**Problém:** „Reálná aktualizace“ je vágní zesílení, stránku nelze přirozeně „zapojit do odkazů“ a funkce nemohou současně „vycházet z indexu a základů“. FAQ má být nejstručnější a nejčitelnější část článku.

**Navržené znění:**

- „Rok změňte až při skutečné aktualizaci nabídky.“
- „Začněte na stránku s předstihem odkazovat z běžně navštěvovaných částí webu.“
- „Google uvádí, že jeho generativní funkce využívají index Vyhledávání a opírají se o běžné postupy SEO.“

### 18. [WARNING] Checklist má tři významově neobratné čtenářské texty

**Citované pasáže:** „Odpovídá stránka aktuálnímu sortimentu, cenám, skladu a feedu?“, „Nesou aktuální rok a podobu akce…?“ a „má správnou canonical adresu a je v sitemapě s pravdivým lastmod?“

**Problém:** Stránka nemůže odpovídat „skladu“, titulek a obrázek přirozeně „nenesou podobu akce“ a poslední otázka kombinuje anglický přívlastek s personifikovaným údajem. Jde o praktický kontrolní seznam, takže každá položka musí být jednoznačná.

**Navržené znění:**

- „Odpovídají produkty, ceny, dostupnost a produktová data aktuální nabídce?“
- „Odpovídají titulek a obrázek aktuálnímu ročníku a podobě akce?“
- „Vrací URL stav 200, má správně nastavený kanonický odkaz (`canonical`) a odpovídá údaj `lastmod` poslední významné změně?“

### 19. [TIP] Nadpis a text o odkazování používají vágní „zapojení“ a zbytečné „prolinkovat“

**Citovaná pasáž:** „Před sezonou stránku znovu zapojte do webu“ a „Google doporučuje sezonní stránku s předstihem prolinkovat…“

**Problém:** „Zapojit do webu“ neříká, jakou akci má čtenář udělat. Sloveso „prolinkovat“ je sice v SEO rozšířené, ale prosté „odkázat na ni“ je přirozenější a přesnější.

**Navržené znění:** Nadpis „Před sezónou na stránku znovu odkazujte z důležitých částí webu“. V odstavci: „Google doporučuje s předstihem odkázat na sezónní stránku z domovské nebo jiné významné stránky.“

### 20. [TIP] Závěr je abstraktní a neříká, kdo stránku ověřuje

**Citovaná pasáž:** „Tím vzniká stránka, kterou lze každý rok znovu najít, ověřit a použít…“

**Problém:** Pasivní řada „najít, ověřit a použít“ nemá jasného aktéra a zní jako obecná závěrečná vata. Hlavní pointa článku je konkrétnější: jedna adresa se průběžně aktualizuje.

**Navržené znění:** „Tak udržujete jednu adresu aktuální a dohledatelnou pro zákazníky i vyhledávače, včetně generativních funkcí založených na jejich indexu.“

### 21. [WARNING] CTA používá vágní „mezery webu“

**Citovaná pasáž:** „Audit AI viditelnosti za 3 600 Kč bez DPH projde techniku, obsah i mezery konkrétního webu a dá vám prioritní seznam úprav.“

**Problém:** Audit „projde techniku“ je hovorová zkratka a „mezery konkrétního webu“ je neurčité spojení. Messaging značky pro Audit pracuje s konkrétními oblastmi: technika, obsah a důvěryhodnost.

**Navržené znění:** „Audit AI viditelnosti za 3 600 Kč bez DPH prověří technické nastavení, obsah a důvěryhodnost vašeho webu a předá vám prioritní seznam úprav.“

## Doporučené pořadí oprav

1. Sjednotit „sezónní/sezóna“ ve všech čtenářských textech.
2. Opravit chybný nápis komponenty „Stabilní URL není povinnost…“.
3. Zpřesnit odstavec s hledaností a věty, které zdrojům nebo vyhledávačům připisují silnější účinek.
4. Vysvětlit `noindex`, `dateModified`, `lastmod` a `canonical`; odstranit samostatný anglicismus „feed“.
5. Uhladit FAQ, srovnávací tabulku, checklist a CTA, protože právě tyto části čtenář nejčastěji skenuje.

Po těchto úpravách je článek jazykově připravený k publikaci; jeho informační architektura, krátká odpověď, FAQ i volba CTA jsou v základu správně.
