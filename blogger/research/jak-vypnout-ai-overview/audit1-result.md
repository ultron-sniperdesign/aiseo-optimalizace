# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit nového `clanek.mdx`, stav k **31. 10. 2026**, pouze věcná správnost a aktuálnost. **25 nálezů: 15 [BLOCKER], 10 [WARNING], 0 [TIP].** Opakování stejné vady ve frontmatteru, FAQ, těle a shrnutí počítám jako jeden nález; uvádím místa, kde je potřeba opravu promítnout. Článek jsem nepřepisoval. `title` ani `seoTitle` nenavrhuji měnit.

Doklady jsem porovnal s dodanými texty v `zdroje/`; externí web nebylo třeba načítat. Odkazy níže označují konkrétní dohledatelnou dokumentaci, jejíž dodaný snímek je podkladem auditu, nikoli novou kontrolu živého webu. Vlastní článek webu ani autorský brief nejsou nezávislým potvrzením chování platformy.

## Nálezy

### 1. [BLOCKER] Dokumentované rozhraní se vydává za ověřené chování obrazovky

**Místo a citace:** FAQ, ř. 35: „V Search Console přes Nastavení → Search generative AI → Exclude.“ Ř. 94: „uvidíte Přehled od AI dál“. Ř. 198: „Ten ukazuje, které stránky…“. Ř. 201: „V přehledu … si vypište stránky…“. Také nepodmíněné výsledky postupu v ř. 33 a 124.

**Vada a doklad:** `research.md` nemá žádný vyplněný záznam ověření UI. V ř. 33 výslovně přiznává, že autor výsledky Googlu neotevřel; přihlášené Search Console tohoto typu rovněž nebylo kontrolováno. Podle výslovného pravidla tohoto kola nelze dokumentací dokládat tvrzení, co čtenář ve svém rozhraní skutečně uvidí. Například skutečnost, že zvoleným vyhledávačem je Google, sama nezaručuje zobrazení Přehledu od AI: `google-napoveda-prehled-od-ai-cs-pocitac.txt`, ř. 20–21, jeho výskyt podmiňuje vyhodnocením dotazu systémy Googlu.

**Cílená oprava:** Zrušit sliby konkrétní obrazovky a výsledku. U dostupných postupů důsledně psát, že jde o postup **popsaný nápovědou**, a uvést, že autor rozhraní neověřil. Např. „Nápověda Search Console popisuje volbu v Nastavení → Search generative AI; její podobu v přihlášeném účtu jsme neověřili.“ U ř. 94 stačí „Samotná změna prohlížeče není vypnutím Přehledu od AI ve Vyhledávání Google.“ Podrobný návod v Chromu už má dokumentační atribuci v ř. 79; tu zachovat, doplnit omezení v nálezu 3. Neodstraňovat pravdivá tvrzení o tom, **co dokumentace říká**.

### 2. [BLOCKER] `udm=14`: chybí rozsah použití a omezený test se zobecňuje na aktuálně fungující řešení

**Místo a citace:** Ř. 5: „adresou s parametrem … nastavenou jako výchozí vyhledávač“. Ř. 71: „Parametr `udm=14` v adrese otevře výsledky rovnou … bez Přehledu od AI.“ Ř. 223: „to vyřeší natrvalo“. Opakování v FAQ 1 a ř. 69, 231.

**Vada a doklad:** `sekundarni-test-udm14-2026-10-17.txt`, ř. 50, 53, 69–84, dokládá jen hlášený test jiného webu na **google.de, 17. 10. 2026, v odhlášeném Chromu**. Výslovně omezuje nastavení výchozího vyhledávače na dotazy zahájené **z adresního řádku**; dotazy přímo na webu Googlu tím nejsou pokryty. Článek používá jinou doménu (`google.com`) a není doložen český ani vlastní test. Samotné označení „neoficiální“ nenahradí tyto podmínky. Ani pozdější upozornění na možné ukončení funkčnosti neodstraní slib „natrvalo“.

**Cílená oprava:** „Test jiného webu z 17. 10. 2026 uvádí funkčnost na google.de v odhlášeném Chromu. Pro české prostředí ani pro uvedenou adresu google.com nemáme vlastní ověření. Nastavení vlastní adresy se týká hledání z adresního řádku daného prohlížeče, dokud Google parametr podporuje.“ Podle toho podmínit úvod, FAQ, příslušný mezititulek a shrnutí. Neprezentovat převzatý test jako vlastní ani jako obecnou garanci.

### 3. [BLOCKER] Návod pro Chrome vynechává podmínky platformy, profilu a správy

**Místo a citace:** Ř. 79–86: „Jako výchozí vyhledávač v Chromu … Nastavit jako výchozí“.

**Vada a doklad:** `chrome-napoveda-vyhledavace-cs.txt`, ř. 21, 29, 31–32, je postup **pro počítač**. Upozorňuje, že v některých zemích nelze vlastní vyhledávání nastavit jako výchozí v **profilu hosta** a že pracovní/školní prostředí může spravovat administrátor. Článek tyto podmínky neuvádí, přestože nabízí obecně použitelný postup. Dokumentačně je samotná cesta nabídek doložena, její bezpodmínečná použitelnost ne.

**Cílená oprava:** Před kroky doplnit: „Následuje postup z nápovědy pro Chrome na počítači. V některých zemích není vlastní výchozí vyhledávání dostupné v profilu hosta; v pracovním nebo školním prohlížeči může nastavení řídit administrátor.“ Zdroj: [nápověda Chromu](https://support.google.com/chrome/answer/95426?hl=cs).

### 4. [BLOCKER] Praktické pokyny pro Safari, Edge a Firefox nemají odpovídající ověření

**Místo a citace:** Ř. 88: „V Edgi je obdobná správa… Safari vlastní vyhledávač přidat nedovolí… Na iPhonu a v Safari proto zbývá jiný vyhledávač.“ Ř. 118: „V Safari na iPhonu vyberete DuckDuckGo…“. FAQ, ř. 37: „V Edgi se postranní panel Copilota vypíná v Nastavení → Copilot a postranní panel…“.

**Vada a doklad:** Chybí načtená primární dokumentace těchto prohlížečů i ověření UI a verzí. Odkaz na Mozillu v ř. 88 sám není ověřením svého obsahu. Je potřeba upřesnit zadání: německý sekundární test v `zdroje/` **některé** výroky o Edge, Firefoxu a Safari obsahuje (ř. 82–83, 98–100); nejde tedy o úplnou absenci jakékoli zmínky. Není to ale vlastní ověření ani načtená nápověda výrobce. Navíc tentýž text u Safari uvádí také záložku a rozšíření, takže závěr „proto zbývá jiný vyhledávač“ neunesou ani tyto slabší podklady. O konkrétním vypínání panelu Copilota dodaný zdroj o doplňku Bingu nemluví vůbec.

**Cílená oprava:** V tomto refreshi odstranit nedoložené cesty nabídek a kategorický závěr o jediné možnosti v Safari. Ponechat ověřený dokumentační postup pro Chrome na počítači a obecnou možnost vybrat jiný vyhledávač, kde ji prohlížeč podporuje. Pokud má zůstat odkaz na Mozillu, neslibovat bez přečtení, co přesně řeší. U FAQ o Bingu odstranit poslední dvě věty o UI Copilota v Edgi; vypínání doplňku Bingu a panelu prohlížeče nejsou totožná funkce.

### 5. [BLOCKER] Nápovědě se nesprávně připisuje výslovné tvrzení o nemožnosti vypnout režim AI

**Místo a citace:** Ř. 124: „vypnout ho podle nápovědy Googlu nejde“. Ř. 221: „Přehled od AI ani režim AI vypnout nejdou. Nápověda Googlu to říká výslovně, pro počítač i telefon.“ Také `description`, `answer`, FAQ ř. 33 a ř. 122: „sám se nespustí“.

**Vada a doklad:** Výslovná formulace o základní funkci, kterou nelze vypnout, je v nápovědě **Přehledu od AI** (`google-napoveda-prehled-od-ai-cs-pocitac.txt`, ř. 380–381). `google-napoveda-rezim-ai-en.txt` přepínač vypnutí nepopisuje; z této absence neplyne stejně silné výslovné prohlášení Googlu. Ani seznam způsobů vstupu v ř. 382–386 není důkazem univerzálního negativního tvrzení, že se režim nikdy „sám nespustí“. Přísnější formulaci používá i původní vlastní článek, ale ten ji nezávisle nedokládá.

**Cílená oprava:** Oddělit sílu dokladů: „Přehled od AI podle nápovědy vypnout nelze. V načtené nápovědě režimu AI jsme k 31. 10. 2026 přepínač pro vypnutí nenašli; dokumentace popisuje způsoby, jak do něj vstoupit.“ Odstranit univerzální slib automatického nespouštění a tvrzení, že Google totéž výslovně říká pro obě funkce. Promítnout do metadat, FAQ, mezititulku i shrnutí, bez změn uzamčených titulků.

### 6. [BLOCKER] Přechod z Přehledu od AI do režimu AI postrádá podmínku mobilního zařízení

**Místo a citace:** FAQ ř. 33 a tělo ř. 124: „vstupujete do něj záložkou, nebo tím, že na Přehled od AI navážete doplňující otázkou“.

**Vada a doklad:** `google-napoveda-prehled-od-ai-cs-pocitac.txt`, ř. 389–393, i anglická verze, ř. 391–395, tuto návaznost vymezují na **mobilní zařízení**, v regionech a jazycích podporujících **obě** funkce. Popisují ji po rozbalení přehledu přes „Zobrazit více“. Článek možnost bez podmínky vztahuje i na počítače. Zároveň z dvojice možností dělá úplný seznam, přestože nápověda režimu AI uvádí i přímou adresu `google.com/ai` a vstup z aplikace Google.

**Cílená oprava:** „Nápověda popisuje přímý vstup na google.com/ai, tlačítkem režimu AI ve vyhledávání nebo z aplikace Google. Přechod doplňující otázkou z rozbaleného Přehledu od AI popisuje pro mobilní zařízení tam, kde jsou podporované obě funkce.“ Takto opravit i sebestačnou odpověď ve FAQ; neprezentovat postup jako vlastní kontrolu UI.

### 7. [BLOCKER] U filtrování obrázků v DuckDuckGo chybí omezení účinnosti

**Místo a citace:** Ř. 106: „všechny AI funkce vypnuté a obrázky vytvořené AI se z výsledků odfiltrují“.

**Vada a doklad:** `ddg-about-noaiduckduckgocom.txt`, ř. 325–327, rozlišuje vypnutí funkcí od filtrování obsahu: u druhého říká „as much … as possible (as best we can)“. Vypnutí Search Assist a Duck.ai není garance rozpoznání všech obrázků vytvořených AI. Článek přebírá výsledek filtrování bez této podmínky.

**Cílená oprava:** „Podle nápovědy noai.duckduckgo.com vypíná AI funkce DuckDuckGo a ve výchozím stavu filtruje obrázky vytvořené AI podle možností jejich rozpoznání; nejde o záruku odstranění všech takových obrázků.“ Zdroj: [noai.duckduckgo.com](https://duckduckgo.com/duckduckgo-help-pages/ai-features/about-noaiduckduckgocom).

### 8. [BLOCKER] „Vyřadí celý web“ přehlíží vlastní volby podřízených vlastností a další omezení přepínače

**Místo a citace:** Ř. 143: „vyřadí celý web“. Ř. 150: „web se v nich neobjeví“. FAQ ř. 35 a shrnutí ř. 225. Ř. 155 sice správně uvádí vlastnosti, ale rozsah nadpisu tím neopravuje.

**Vada a doklad:** `search-console-prepinac-generative-ai-en.txt`, ř. 34, 41–43 a 103–105, dovoluje vlastníkovi podřízené vlastnosti přebít zděděnou volbu. Exclude u nadřazené vlastnosti proto samo nezaručuje vyřazení všech jejích částí. Změnu pro podřízenou vlastnost dokumentace připisuje **vlastníkům**, nikoli libovolnému uživateli s přístupem. Ř. 38 navíc říká, že přepínač nepřebíjí samostatné volby účasti např. v Merchant Center a Google Ads a nevylučuje použití obsahu pro Vyhledávání jako celek. FAQ slibuje obvyklý účinek za 1–2 dny bez výjimky pro mezipaměť, kterou ř. 40 zdroje výslovně uvádí a tělo článku už zná.

**Cílená oprava:** „Volba platí pro vybranou vlastnost a části, které její nastavení dědí; vlastník podřízené vlastnosti může nastavit jinou volbu. Před vyřazením celého webu zkontrolujte přepsaná nastavení potomků.“ Doplnit oprávnění vlastníka u samostatné změny podřízené vlastnosti a jednou stručně vymezit výjimky pro jiné služby a použití ve Vyhledávání jako celku. FAQ doplnit o možnost delšího přetrvání obsahu kvůli mezipaměti a šíření změny. Zdroj: [Search generative AI control](https://support.google.com/webmasters/answer/16908024?hl=en).

### 9. [BLOCKER] Srovnávací tabulka zobecňuje ztrátu preferovaného zdroje i mimo AI funkce

**Místo a citace:** Ř. 191: „konec preferovaného zdroje“. Ř. 253: „Preferované zdroje v Googlu — o co vyřazený web přijde“.

**Vada a doklad:** `google-preferred-sources.txt`, ř. 326–346, rozlišuje preferované zdroje v **Top Stories** od zobrazení v **režimu AI a Přehledu od AI**. Zahrnutí do generativních funkcí podmiňuje jen druhou skupinu. Tělo v ř. 158 má omezení správně; samostatně čtená tabulka jej ztrácí. Přepínač nepodmiňuje obecně status preferovaného zdroje ve všech částech Googlu.

**Cílená oprava:** Do tabulky napsat „ztráta možnosti zobrazení jako preferovaný zdroj v Přehledu od AI a režimu AI“. Stejně zúžit popisek souvisejícího odkazu. Netvrdit zánik volby uživatele ani ztrátu preferovaného zdroje v Top Stories.

### 10. [BLOCKER] U direktiv chybí podmínka přístupu robota a zpracování nové verze stránky

**Místo a citace:** Ř. 165: „obsah stránky pak nesmí sloužit…“. Ř. 177: „vyřadí z úryvků jen označený blok“. FAQ ř. 35: „Jednotlivé stránky nebo jejich části omezíte…“. Doporučení nasazení a sledování v ř. 204.

**Vada a doklad:** `google-robots-meta-spec.txt`, ř. 331–332 a 674–679, stanoví, že Google musí mít přístup ke stránce a pravidla načíst. Při blokování procházení v robots.txt nemusí nové direktivy vůbec zjistit. `google-ai-features.txt`, ř. 414–425, navíc vyžaduje nové projití a zpracování; může trvat dny až měsíce. Článek popisuje účinek jako přímý následek vložení kódu bez těchto podmínek, zatímco lhůtu přepínače v Search Console rozebírá zvlášť.

**Cílená oprava:** K prvnímu příkladu přidat: „Google musí mít povolený přístup ke stránce, pravidlo načíst a změnu zpracovat. Účinek proto není okamžitý; podle dokumentace může opětovné projití trvat několik dní až měsíců.“ Ve FAQ aspoň stručně „po načtení a zpracování změny Googlem“. Vyhodnocování časovat také podle prokazatelného zpracování změny, nikoli jen podle dne jejího nasazení.

### 11. [BLOCKER] Popis úryvkových omezení vynechává zvlášť povolené použití a strukturovaná data

**Místo a citace:** Ř. 171: „`max-snippet` omezí … kolik obsahu smí jít do Přehledu od AI a režimu AI“. Ř. 177 a příklad ř. 181: „Tento blok se nepoužije v úryvcích.“

**Vada a doklad:** `google-robots-meta-spec.txt`, ř. 456–467, u `max-snippet` výslovně vyjímá samostatně udělená oprávnění, například licenční dohody nebo zvlášť poskytnutá strukturovaná data. Oddíl „Using structured data“, ř. 612–631, vysvětluje rozdíl mezi automatickým získáváním obsahu a jeho samostatným poskytnutím; strukturovaná data zůstávají použitelná i uvnitř prvku s `data-nosnippet`. Článek o omezení obsahu tyto hranice neuvádí. Nejde o důkaz, že `data-nosnippet` nemá žádný účinek v AI funkcích; obecnou oporu má v `google-ai-features.txt`, ř. 405–413.

**Cílená oprava:** Za odstavec o `max-snippet` doplnit výjimku pro zvlášť povolené použití. Za příklad `data-nosnippet` doplnit, že jde o vyloučení označeného **textu** z úryvků a že tím nezaniká použitelnost samostatně poskytnutých strukturovaných dat, ani když jsou uvnitř označeného prvku. U `nosnippet` zachovat přesnou formulaci specifikace o přímém vstupu a nedělat z ní obecný zákaz jakéhokoli použití dat.

### 12. [BLOCKER] Tabulka tvrdí, že každé `max-snippet` odstraní klasický úryvek

**Místo a citace:** Ř. 192: „`nosnippet`, `max-snippet` … stránka ztratí i klasický úryvek“. Ř. 185: „Vedlejší dopad je pokaždé stejný“.

**Vada a doklad:** Specifikace `google-robots-meta-spec.txt`, ř. 456–482, rozlišuje kladný limit znaků, `0` jako ekvivalent `nosnippet` a `-1` jako ponechání délky na Googlu. Ztráta úryvku tudíž není vedlejším účinkem libovolné hodnoty `max-snippet`. Tvrzení „pokaždé“ zahrnuje také limit, který úryvek pouze zkrátí.

**Cílená oprava:** Rozdělit řádek na „`nosnippet` / `max-snippet:0`: bez textového úryvku“ a „`max-snippet:N` pro kladné N: nejvýše N znaků; úryvek nemusí zmizet“. Případně tabulku omezit výslovně na ukázanou hodnotu `0`. V odstavci o vedlejším dopadu rozlišit odstranění a omezení délky. Zdroj: [specifikace robots meta](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

### 13. [BLOCKER] Konkrétní obsah a metriky přehledu generativní AI nejsou doloženy dodanou nápovědou

**Místo a citace:** Ř. 198: „Ten ukazuje, které stránky … ale jen zobrazení, kliky v něm nejsou.“ Ř. 201: „vypište stránky se zobrazeními“.

**Vada a doklad:** `search-console-prepinac-generative-ai-en.txt`, ř. 35, potvrzuje existenci a doporučení přehledu Generative AI performance report, **nepopisuje však jeho metriky, dimenze ani tabulku stránek**. `google-ai-features.txt`, ř. 390–400, potvrzuje zahrnutí návštěvnosti z AI funkcí do běžného přehledu typu Web; z toho neplyne, že samostatný přehled nemůže obsahovat kliknutí. Podobné tvrzení v `audit.ts`, ř. 495, je vlastní text stejného webu, nikoli nezávislý doklad. UI ověřeno nebylo.

**Cílená oprava:** S dodanými doklady zúžit na „Nápověda Search Console doporučuje před změnou přehled výkonu generativní AI. Návštěvnost z AI funkcí je podle dokumentace zahrnuta také do běžného přehledu výkonu typu Web.“ Vynechat nepodložený seznam dostupných a chybějících metrik i pokyn k výpisu konkrétní tabulky. Není doloženo, že tato tvrzení jsou nepravdivá; není doloženo, že je lze publikovat jako ověřený stav k 31. 10. 2026.

### 14. [BLOCKER] Prázdný přehled se zaměňuje za nulové využití webu v AI funkcích

**Místo a citace:** Ř. 201: „Když tam žádné nejsou, nemáte co vypínat.“ Související ř. 225: „Obojí stojí návštěvnost z AI odpovědí“.

**Vada a doklad:** Dodané zdroje nedokládají úplnost ani všechny podmínky vykazování tohoto reportu. Navíc článek sám popisuje přehled pro Přehled od AI a režim AI, ale přepínač se týká také generativních funkcí Discover (`search-console-prepinac-generative-ai-en.txt`, ř. 24–27). Absence záznamu za vybrané období proto nedokládá absenci současného nebo budoucího využití a neznamená, že není co omezit. Opačně ani nasazení omezení nezaručuje skutečný úbytek návštěvnosti: ten závisí na tom, zda nějaká návštěvnost přicházela. `data-nosnippet` navíc není ekvivalent vyřazení všech odkazů celé stránky.

**Cílená oprava:** „Pokud přehled žádné záznamy neukáže, nemáte z něj doložený výskyt v daném rozsahu a období; není to důkaz nulového využití obsahu.“ Ve shrnutí: „Vyřazení může znamenat ztrátu návštěvnosti z dotčených AI funkcí; u dílčích direktiv záleží na rozsahu omezení a dosavadním využití stránky.“ Neslibovat ztrátu ani nulovou ztrátu bez měření.

### 15. [WARNING] Nápověda neprokazuje, že se filtr Web musí znovu volit u každého dalšího dotazu

**Místo a citace:** Ř. 67: „takže ho vybíráte u každého dotazu znovu. Natrvalo to jde jen přes adresu vyhledávání“. Opakování v ř. 5, 27 a 222.

**Vada a doklad:** Nápověda v `google-napoveda-prehled-od-ai-cs-pocitac.txt`, ř. 381, pouze říká, že filtr lze vybrat po provedení hledání. Neříká, zda se drží při dalším dotazu. Právě tuto vlastnost autor označuje v `research.md`, ř. 33, za neověřitelnou. Sekundární test popisuje ruční volbu po hledání, ale nedokládá univerzální stav všech návazných hledání v českém rozhraní. Tvrzení „jen“ navíc bez dokladu vylučuje jiné postupy.

**Cílená oprava:** „Nápověda popisuje volbu filtru po provedení hledání. Zda se volba zachová při dalších dotazech ve vašem prostředí, jsme neověřili.“ Vynechat kategorické „u každého dotazu“ a „jen“. Není tím prokázáno ani to, že si Google volbu pamatuje.

### 16. [WARNING] Tvrzení o načtené nápovědě pro iPhone nemá odpovídající soubor

**Místo a citace:** Ř. 113: „Nápověda Googlu pro Android i iPhone píše totéž co pro počítač“.

**Vada a doklad:** Dodány jsou varianty pro počítač a Android, nikoli samostatně načtená varianta pro iPhone/iPad. Přepínací odkaz „iPhone a iPad“ v navigaci nápovědy nedokládá obsah této varianty. Obecné tvrzení o nevypnutelnosti Přehledu od AI je doloženo; tvrzení, že autor přečetl tutéž informaci v konkrétní variantě pro iPhone, nikoli.

**Cílená oprava:** „Načtená nápověda pro počítač a Android uvádí, že Přehled od AI vypnout nelze a popisuje filtr Web.“ Bez dalšího podkladu netvrdit samostatnou kontrolu varianty pro iPhone ani jejího rozhraní.

### 17. [WARNING] Výchozí stav Brave Search je zobecněn z jediného datového výňatku

**Místo a citace:** FAQ ř. 27: „DuckDuckGo i Brave Search je mají ve výchozím stavu zapnuté“. Ř. 95, 100, 107 a 224; zejména „Brave Search má AI odpovědi ve výchozím stavu zapnuté“ a „volba zapnutá“.

**Vada a doklad:** `brave-help-ai-data-vynatek.txt` obsahuje `summarizer:true` a textový popis nastavení Answer with AI. To je relevantní indicie konfigurace **jedné stažené stránky**, nikoli kontrola přepínače nebo skutečně vykreslené odpovědi. Výňatek navíc obsahuje `country:"us"`, `language:"en-us"` a `isMobile:false`, přestože IP dle briefu byla v Praze. Neprokazuje všechny země, jazyky, účty a zařízení ani jednoznačné navázání interního klíče na zobrazený přepínač. Prostý text nápovědy univerzální výchozí stav nestanoví.

**Cílená oprava:** „Ve stažených datech stránky z 31. 10. 2026 bez uložených nastavení byla hodnota `summarizer:true` a popis automatických AI odpovědí. Jde o indicii pro toto prostředí, ne o ověření zobrazení ani všech výchozích nastavení Brave Search.“ Z tabulky, FAQ a shrnutí odstranit univerzální tvrzení o zapnutí, nebo je výslovně omezit na tento doklad. Nevracet se k opačnému, rovněž nedoloženému tvrzení, že jsou odpovědi standardně vypnuté.

### 18. [WARNING] U Seznamu se absence vypínače v jedné nápovědě mění v tvrzení o neexistenci vypínače

**Místo a citace:** Ř. 224: „Seznam vypínač pro uživatele nemá.“

**Vada a doklad:** `seznam-napoveda-vychytavky.txt`, ř. 42–82, dokládá popis tří AI prvků a u sumarizací odkazuje na omezení ze strany majitele webu. Nepotvrzuje výslovně neexistenci uživatelského vypínače. FAQ ř. 39 a tabulka ř. 102 se správně drží slabšího závěru „nápověda neuvádí“; shrnutí jej neoprávněně zesiluje.

**Cílená oprava:** Ve shrnutí použít stejné vymezení jako v těle: „Načtená nápověda Seznamu k 31. 10. 2026 uživatelský vypínač těchto prvků neuvádí.“ Nevydávat absenci dokladu za důkaz neexistence.

### 19. [WARNING] U Bingu se sekundární červnová zpráva vydává za přímé a aktuální potvrzení

**Místo a citace:** FAQ ř. 37: „samostatný přepínač přímo v nastavení Bingu podle oznámení z června 2026 není“; „Natrvalo je vypne doplněk … zatím ve zkušební verzi“. Ř. 101 a 108.

**Vada a doklad:** `sekundarni-bing-ai-search-choice-2026-06-06.txt`, ř. 54–69, je zpráva jiného webu o oznámení, nikoli načtené oznámení Microsoftu, aktuální stránka doplňku ani říjnový test. Popisuje doplněk a operátor `-ai`; výslovně nedokládá, že žádný jiný přepínač v Bingu neexistuje. Červnové preview neprokazuje, že je produkt stále preview 31. 10. 2026. Atribuce na konci ř. 108 je správný směr, ale sama neopraví samostatně čtenou FAQ ani aktuálně znějící tabulku.

**Cílená oprava:** „Podle zprávy jiného webu z 6. 6. 2026 Microsoft oznámil doplněk Microsoft Bing AI Search Choice pro Chrome a Edge ve zkušební verzi a operátor `-ai` pro jednotlivý dotaz. Říjnový stav a funkčnost jsme samostatně neověřili.“ Ponechat doloženou informaci o změně výchozího vyhledávače a nových kartách Chromu, ale se stejným datem a atribucí. Vyřadit nepodložené tvrzení o neexistenci jiné volby a slovo „natrvalo“. Není nutné hledat statistiku ani doplňovat nedohledatelný primární odkaz; lze bezpečně zúžit text na doloženou zprávu.

### 20. [WARNING] Pokyn k JavaScriptu u `data-nosnippet` je širší než specifikace

**Místo a citace:** Ř. 177: „specifikace … nedoporučuje ho přidávat JavaScriptem“.

**Vada a doklad:** `google-robots-meta-spec.txt`, ř. 602–611, nedoporučuje atribut přidávat nebo odebírat JavaScriptem u **již existujících uzlů**. U nových prvků vkládaných JavaScriptem naopak doporučuje atribut připojit už při jejich prvotním vložení. Současná zkratka může vývojáře vést k chybnému vynechání ochrany u dynamického obsahu.

**Cílená oprava:** „U existujících prvků atribut nepřidávejte ani neodebírejte dodatečně JavaScriptem. Pokud nový prvek vytváříte JavaScriptem, vložte jej s atributem už od začátku.“ Zachovat omezení na `span`, `div` a `section`.

### 21. [WARNING] Řádek Google-Extended není úplným a doloženým popisem jeho rozsahu

**Místo a citace:** Ř. 194: „Google-Extended | celý web (robots.txt) | trénink modelů | zobrazení v Přehledu od AI a v režimu AI neovlivní“. Ř. 157: „Na trénink je Google-Extended.“

**Vada a doklad:** Oddělení od vyřazení z vyhledávacích AI funkcí je doloženo. `google-ai-features.txt`, ř. 412–413, ale výslovně uvádí také **grounding v některých dalších systémech Googlu**, tedy použití obsahu jako podkladu odpovědí, ne jen trénink. Sekundární test v ř. 165 zmiňuje Gemini a Vertex AI, primární specifikace Google-Extended však v balíčku není. Z dodaných podkladů nelze doložit výlučný rozsah „celý web“ ani návod na jeho jemnější nastavení; nelze to dovozovat jen z názvu robots.txt.

**Cílená oprava:** Ve sloupci rozsah napsat „pravidla v robots.txt; podrobné nastavení zde neověřeno“. Účinek popsat „omezení tréninku a použití obsahu jako podkladu odpovědí v některých dalších systémech Googlu“. Zachovat, že nejde o přepínač zařazení do Přehledu od AI a režimu AI ve Vyhledávání. Netvrdit plošné vypnutí tréninku všech modelů nebo všech služeb.

### 22. [WARNING] Dvě historická datování přesahují to, co dokládají načtené podklady

**Místo a citace:** Ř. 50: „V Česku se Přehled od AI zobrazuje od 20. 5. 2025.“ Ř. 145: „Google ho 21. 10. 2026 přidal do dokumentace“.

**Vada a doklad:** Načtená nápověda dokládá nynější dostupnost v Česku, nikoli datum českého spuštění 20. 5. 2025. Dodaný německý test uvádí jiná data pro Německo; ta nejsou dokladem českého startu. `google-control-what-you-share.txt`, ř. 397, dokládá datum **poslední aktualizace stránky 21. 10. 2026**, nikoli bez porovnání verzí přesné datum vložení konkrétního odstavce. Changelog ani archivní srovnání dodáno není.

**Cílená oprava:** Nepotřebné datum českého startu vypustit a ponechat dostupnost doloženou aktuální nápovědou. Druhou větu upravit na „Dokumentace Control what you share, naposledy aktualizovaná 21. 10. 2026, ho uvádí jako nastavení pro celý web.“ Nežádat nový historický údaj ani jeho odhad.

### 23. [WARNING] „Gemini (dřív Asistent Google)“ bez dokladu zjednodušuje vztah dvou produktů na přejmenování

**Místo a citace:** FAQ ř. 31, tabulka ř. 58 a tělo ř. 120: „Gemini (dřív Asistent Google)“.

**Vada a doklad:** Dodaná dokumentace nepopisuje historii nahrazování Asistenta Google produktem Gemini, podmínky přechodu ani rozdíly zařízení. Závorka navozuje prosté přejmenování téhož produktu, které z podkladů nelze ověřit. Pro rozlišení vyhledávání a asistenta tato historická vsuvka není nutná.

**Cílená oprava:** Použít „asistent Gemini od Googlu“ a ponechat užitečné rozlišení od Přehledu od AI a režimu AI ve Vyhledávání. Závorku o dřívějším názvu vypustit; není potřeba shánět nový zdroj pro informaci, která článku nic podstatného nepřidává.

### 24. [WARNING] U souboru hosts je bez dokladu tvrzen negativní účinek na další služby

**Místo a citace:** Ř. 138–139: „Rozbijete víc, než vyřešíte“; „zablokovat `gemini.google.com` … riskujete, že přestanou fungovat jiné služby Googlu“.

**Vada a doklad:** Žádný dodaný zdroj neobsahuje test této úpravy ani popis závislosti dalších služeb na uvedeném hostiteli. Věta navíc přechází od blokace jedné konkrétní adresy ke škodám způsobeným obecnou blokací domén Googlu. Z doložené nemožnosti vypnutí Přehledu od AI v uživatelském nastavení nelze odvodit přesné síťové chování nebo následky zásahu do hosts.

**Cílená oprava:** Bez dokladu odstranit tvrzení o rozbití dalších služeb i kategorický technický výsledek. Postačí „Blokování gemini.google.com v souboru hosts nemáme doložené jako způsob odstranění Přehledu od AI; tento návod vychází z dokumentovaného filtru Web.“ Nevyměňovat nepodložený slib účinku za nepodložený slib škody.

### 25. [BLOCKER] Vypnutí historie je nesprávně popsáno jako zastavení použití budoucích hledání pro modely

**Místo a citace:** Ř. 132–133: „Vypnout historii v Mojí aktivitě“; „Podle nápovědy tím zastavíte ukládání budoucích hledání do účtu Google a jejich použití ke zlepšování AI modelů vyhledávání.“

**Vada a doklad:** `google-napoveda-prehled-od-ai-cs-pocitac.txt`, ř. 403–406, vztahuje nastavení k budoucím vyhledáváním **při přihlášení do účtu**. Výslovně připouští další používání **agregovaných anonymizovaných dat** a použití hledání provedených **bez přihlášení** pro zlepšování modelů. Vypnutí také samo nemaže dříve uloženou historii ani oddělená trénovací data. Totéž uvádí nápověda režimu AI, ř. 582–586. Zkrácení článku vypouští podstatné hranice účinku a vytváří širší příslib ochrany dat, než zdroj poskytuje.

**Cílená oprava:** „Podle nápovědy vypnutí příslušného nastavení historie zastaví ukládání budoucích přihlášených hledání do účtu a jejich takto popsané použití ke zlepšování modelů. Google však může dál používat agregovaná anonymizovaná data i hledání bez přihlášení; dříve uloženou historii vypnutí samo nemaže.“ Zachovat oddělení správy historie od uživatelského vypnutí Přehledu od AI. Zdroj: [nápověda Přehledu od AI, správa dat](https://support.google.com/websearch/answer/14901683?hl=cs).

## Co je fakticky v pořádku

- **Adresář jako samostatná vlastnost:** tvrzení v ř. 155 je dokumentačně doložené. Nápověda Search Console, ř. 43 a 103–104, výslovně připouští vlastní nastavení podřízené URL-prefix vlastnosti. Označení „site-wide“ na jiné stránce to nevyvrací. Doplnit je potřeba dědění a vlastní přepsání nastavení, ne tuto možnost odstranit.
- **Preferovaný zdroj v AI funkcích:** ř. 158 správně omezuje ztrátu na režim AI a Přehled od AI. Dokumentace preferovaných zdrojů, ř. 337–346, vyžaduje zahrnutí do generativních funkcí a rozlišuje způsobilou doménu/subdoménu od podadresáře. Tabulka tuto přesnost musí zachovat.
- **Přehled od AI, Search Labs, DuckDuckGo:** dokumentace podporuje nemožnost uživatelského vypnutí Přehledu od AI, filtr Web, odhlášení z experimentů v Labs a výchozí frekvenci Search Assist „sometimes“. Není třeba vracet rady staré verze.
- **`data-nosnippet` a AI:** aktuální ř. 177 správně rozlišuje specifikaci atributu, která AI výslovně nejmenuje, od obecného seznamu ovládání na stránce AI features. Nelze z toho udělat nález „atribut v AI vůbec nefunguje“ ani tvrdit, že jeho účinek je totožný s úplným vyřazením webu.
- **Cena a existence produktu:** Audit AI viditelnosti za **3 600 Kč bez DPH** a popsané základní plnění odpovídají `zdroje/audit.ts`, zejména ř. 79–100. Faktický blocker neexistujícího produktu nebo chybné ceny zde není.

## Nejasnosti a mezery v podkladech

1. **Samostatná tabulka podmínek chybí.** `research.md` má tabulku druhů dokladů, ale ne požadovanou soustavnou tabulku podmínek platnosti. Některé podmínky jsou rozptýlené v jejích řádcích, jiné vypadly už při převodu ze zdrojů. To není samo o sobě důkaz nepravdivosti článku; výše jsou konkrétní důsledky, které publikaci blokují.
2. **Řádek „Rozhraní (UI)“ není v souboru ani založen**, zatímco zadání jej popisuje jako prázdný. Praktický výsledek je stejný: žádný doklad ověření UI není. Přísné pravidlo tohoto kola chápu jako zákaz prezentovat dokumentační návod coby vlastní ověření obrazovky; výslovně připsaný popis toho, co uvádí nápověda, může zůstat.
3. **Chybí samostatná dokumentace přehledu generativní AI**, primární podklady k Safari/Edge/Firefoxu, konkrétnímu UI Copilota v Edgi a podrobnému rozsahu Google-Extended. Odkaz nebo tvrzení ve vlastním článku nenahrazuje ověřený obsah takového zdroje. Bez doplnění dokladů lze všechny dotčené pasáže zúžit nebo odstranit navrženými opravami; není nutné čísla či technické podrobnosti odhadovat.
4. **Brave má pouze jednorázový datový vzorek; Bing červnovou sekundární zprávu; `udm=14` říjnový sekundární test v jiném prostředí.** Ani jeden z těchto dokladů nezakládá ověření českého přihlášeného rozhraní k 31. 10. 2026. Nelze z nich však vyvozovat ani opačná kategorická tvrzení o nefunkčnosti nebo nulovém výskytu.

