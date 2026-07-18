[BLOKER] „**Tohle je jediná část, která je nad rámec obyčejného základu — a není to trik, ale mechanismus. Dotaz se v AI Mode rozkládá na dílčí otázky a ke každé se hledá vhodný úsek; odpověď se pak skládá z pasáží z víc zdrojů.**“
- **Proč:** Tohle je v článku podané jako fakt o fungování AI Mode, ale v dodaném etalonu to **není**. Etalon řeší jen „AI features and your website“ a potvrzuje absenci zvláštních požadavků, ne tento mechanismus. Pokud to má stát na jiném zdroji Google nebo na interním článku o query fan-out, musí to být výslovně opřené o doložený zdroj, ne připisované implicitně Googlu.
- **Návrh:** Změnit na hedgovanou formulaci typu: „Pro praktickou práci se osvědčuje psát po pasážích, protože AI odpovědi často pracují s kratšími úseky obsahu z více zdrojů.“ Pokud máte primární zdroj ke query fan-out, doplňte explicitní atribuci.

[BLOKER] „**odpověď se skládá z úseků, takže vyhrává text srozumitelný i vytržený z kontextu**“ / „**Jediné, co k tomu AI éra reálně přidává, je psaní po pasážích.**“
- **Proč:** Absolutní a silné tvrzení bez opory v etalonu. „Vyhrává“ je navíc implikace výsledku. Etalon nic takového neslibuje ani nestanovuje jako zvláštní princip optimalizace.
- **Návrh:** Zmírnit: „Proto dává smysl psát úseky tak, aby byly srozumitelné i samostatně.“ a „V praxi se vyplatí myslet i na čitelnost po pasážích.“

[BLOKER] „**výběr zdrojů se navíc mezi jednotlivými vygenerováními mění**“ / „**jednotlivé AI povrchy sahají často po jiných adresách**“
- **Proč:** V kontextu tohoto článku jde o číselně či výzkumně podložená tvrzení třetích stran, ale v textu **chybí zdroj přímo u tvrzení**. V zadání sice doplňkově uvádíte Ahrefs a dřívější výzkum, ale článek to necituje ani neříká, odkud to bere.
- **Návrh:** Doplnit jasnou atribuci v textu: „Podle dat Ahrefs (US, září 2025)…“ a u kolísání „Dřívější výzkum ukázal, že…“. Bez toho tvrzení zjemnit na „může se měnit“.

[WARNING] „**Co je jen v obrázku, ve videu bez přepisu nebo se dorenderuje až po kliknutí, nemusí být dostupné stejně jako text v HTML.**“
- **Proč:** Věcně opatrné, ale „dorenderuje“ je anglicismus a pasáž se dotýká chování vykreslení/JavaScriptu. Formulace „nemusí být dostupné stejně“ je ještě v pořádku, jen je vhodné držet konzistentní češtinu a opatrnost.
- **Návrh:** „…nebo se vykreslí až po kliknutí…“; případně „nemusí být pro roboty stejně dostupné jako text přímo v HTML.“

[WARNING] „**Pak je dobré ověřit, co robot ze stránky opravdu vidí.**“
- **Proč:** Jednotné číslo „robot“ může zbytečně sugerovat jednotné chování. Zadání výslovně chce opatrnost u robotů a vykreslení.
- **Návrh:** „…co ze stránky opravdu vidí roboti Googlu v konkrétním případě“ nebo „co je při procházení a vykreslení skutečně dostupné.“

[WARNING] „**Kdo prodává „optimalizaci na AI Mode" jako zvláštní disciplínu s tajným postupem, prodává něco, co dodavatel té technologie sám popírá.**“
- **Proč:** Teze je v zásadě v souladu s etalonem, ale formulace je velmi útočná a může narážet na vlastní CTA níže. Navíc článek sám pak prodává audit/pack; musí být naprosto jasné, že neprodává „tajný postup“ ani garanci zobrazení.
- **Návrh:** Zmírnit a sladit s CTA: „Pokud někdo slibuje zvláštní vstupenku do AI Mode, jde nad rámec toho, co Google ve své dokumentaci potvrzuje.“

[WARNING] CTA: „**AI SEO audit za 9 990 Kč projde dostupnost, obsah i strukturovaná data a pomůže pojmenovat další kroky. Hotové vzory stránek jsou v AI SEO Wireframe Packu…**“
- **Proč:** Samo o sobě to není slib výsledku, takže ne blokující. Ale v kontextu teze „žádná zvláštní optimalizace neexistuje“ je třeba hlídat, aby nabídka nepůsobila jako prodej přesně toho mýtu.
- **Návrh:** Přidat jednu větu, která CTA ukotví: „Nejde o zvláštní optimalizaci pro AI Mode, ale o kontrolu základů, které Google pro AI funkce uvádí.“

[DOPORUČENÍ] `answer`: „**Zobrazení v Google AI Mode nemá vlastní přepínač ani zvláštní značení.**“
- **Proč:** Požadavek říká, že answer má **začínat definicí** a mít 40–60 slov. Délka zhruba sedí, ale začátek není definice.
- **Návrh:** Např. „**Google AI Mode je konverzační AI povrch ve Vyhledávání, pro který podle Googlu neexistují zvláštní požadavky ani samostatné značení.** Stránka proto musí splnit stejné základy jako pro běžné vyhledávání…“

[DOPORUČENÍ] „**doložte, co tvrdíte** / **Uveďte, odkud čerpáte, doplňte vlastní data a informaci o autorovi.**“
- **Proč:** To je rozumná redakční rada, ale není to v etalonu jako doporučení Googlu. Teď to není přímo připisované Googlu, což je dobře; jen doporučuji držet oddělení „Google říká“ vs. „naše redakční praxe“ důsledněji.
- **Návrh:** Přidat návěští typu „Redakčně navíc dává smysl…“

[KOSMETIKA] „**slušnou zkušenost pro uživatele**“
- **Proč:** Etalon používá „good page experience“. V češtině by bylo čistší „dobrá zkušenost se stránkou“ nebo „dobrá uživatelská zkušenost“.
- **Návrh:** Upravit terminologii.

[KOSMETIKA] „**dorenderuje**“
- **Proč:** Anglicismus.
- **Návrh:** „vykreslí“ / „načte až dodatečně“.

[KOSMETIKA] „**po pasážích**“ vs. „**po úsecích**“
- **Proč:** V textu se střídají dva termíny. Není to chyba, ale pro tutorial je lepší jeden držet konzistentně.
- **Návrh:** Zvolit jeden preferovaný termín, ideálně „pasáže“ nebo „úseky“, a druhý používat jen doplňkově.

VERDIKT: **OPRAVIT PŘED PUBLIKACÍ**

Prioritní zásahy:
1. Opravit nebo doložit všechny pasáže o mechanismu „rozkladu dotazu na dílčí otázky“ a „skládání odpovědi z pasáží“; teď přesahují etalon.
2. Doplnit zdroj/atribuci k tvrzením o kolísání citací a rozdílných adresách mezi povrchy, nebo je zjemnit.
3. Upravit `answer`, aby začínal definicí.
4. Zjemnit absolutní formulace „vyhrává“, „jediné, co AI éra přidává“ a sladit CTA s tezí „nejde o zvláštní optimalizaci“.