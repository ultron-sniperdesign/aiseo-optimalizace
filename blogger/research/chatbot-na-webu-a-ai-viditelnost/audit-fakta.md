# C2 — nezávislý audit faktů

## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

**Zásadní věcná chyba nenalezena. Jeden drobný opravitelný nález:** jedna věta slibuje v odkazovaném článku rozbor, který tam není. Hlavní argument článku obstál i proti aktivně hledaným protidůkazům. Po této cílené úpravě lze z hlediska této kontroly publikovat.

Kontrola provedena 17. 9. 2026. Čteny: `blogger/auditor-system.md`, celý auditovaný MDX, jeho `research.md`, kanonická nabídka `src/content/pages/audit.ts`, šablona blogového detailu a relevantní cíle interních odkazů. Žádná jiná složka research nebyla čtena. Článek nebyl upraven.

Auditovaný soubor: `src/content/articles/chatbot-na-webu-a-ai-viditelnost.mdx`. SHA-256 při kontrole: `08d2f87f0c996b8fce3e4b4e57ac64dcca7fe485ed4dc3f74db709f3e6f32b9c`.

## Konkrétní nálezy

### F1 — staženo po ověření přesnějšího pravidla workflow

Původní kontrola vyložila obecný interval „titulek 50–60 znaků“ v `auditor-system.md` také jako minimum pro `seoTitle`. Aktuální `Content Workflow Codex.md`, C1b, i `ARTICLE_TEMPLATE.md`, řádek 222, však pro tento samostatný titulek požadují **do 60 znaků**. H1 `title` má 51 znaků. `seoTitle` má 46 znaků a specifické pravidlo splňuje. **Nejde o nález, není nutné jej prodlužovat.** Číslování F2 a F3 zůstává zachované kvůli jednoznačnému předání.

### F2 — [WARNING] Drobné: interní odkaz slibuje jiný rozbor, než obsahuje cíl

- **Citace:** „Rozdíl mezi zmínkou, odkazem a návštěvou rozebírá článek [Jak AI vybírá a cituje zdroje](/blog/jak-ai-cituje-zdroje/).“
- **Problém:** Cílový článek porovnává citační chování platforem, jejich výběr zdrojů a překryv citovaných domén. Nerozebírá slíbený rozdíl mezi zmínkou, odkazem a návštěvou. Odkaz funguje a je tematicky příbuzný, ale úvodní věta neodpovídá obsahu cíle.
- **Důkaz URL:** [Jak AI cituje zdroje: srovnání platforem 2026](https://aiseo-optimalizace.cz/blog/jak-ai-cituje-zdroje/), ověřeno rovněž v celém lokálním `src/content/articles/jak-ai-cituje-zdroje.mdx`.
- **Oprava:** Ponechat odkaz a napsat například: „Rozdíly ve výběru a citování zdrojů mezi platformami rozebírá článek [Jak AI cituje zdroje](/blog/jak-ai-cituje-zdroje/).“ Zachová se relevantní propojení bez nepravdivého příslibu.
- **Závažnost:** **Drobný** nesoulad popisu odkazu. Nevyvrací samotné rozdělení ukazatelů v auditovaném článku.

### F3 — [TIP] Drobné volitelné zpřesnění: pojmenovat Googlebot přímo v nadpisu

- **Citace:** „Google při procházení nevede rozhovor“ a následující výjimka s nástrojem Anthropic.
- **Problém:** V souvislém čtení je význam omezen na běžné procházení a věcně obhajitelný. Samostatně převzatý nadpis však používá široké jméno firmy. Google má také uživatelem spouštěné agenty, tedy interaktivní funkce nemusí být jen u Anthropic.
- **Důkaz URL:** [Google — uživatelem spouštěná stahování, oddíl Google-Agent](https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers#google-agent). Dokumentace odděluje tento přístup od standardních vyhledávacích robotů; Google-Agent na požadavek uživatele prochází web a provádí akce.
- **Oprava:** Volitelně nadpis „Googlebot při běžném procházení nevede rozhovor“ a do odstavce o výjimce doplnit jednu větu, že uživatelské agenty má také Google. Není nutné rozšiřovat článek na agentní protokoly ani slibovat indexaci jejich výstupů.
- **Závažnost:** **Drobný tip**, nikoli doložená faktická chyba a nikoli podmínka publikace. Článek už výjimku pro interaktivní AI nástroje výslovně přiznává.

## Kontrola hlavních tvrzení proti primárním zdrojům

### Google, načítání a indexace — potvrzeno

[Google: Fix lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) skutečně uvádí: „Google Search does not interact with your page.“ Doporučuje načítání, které nezávisí na akcích uživatele. Praktický závěr článku „nepočítejte s tím, že Google sám napíše otázku“ je přiměřeným odvozením, nikoli doslovným tvrzením dokumentace o chatbotech. Text ho jako závěr také uvádí.

Tentýž zdroj doporučuje ověřit načtený obsah ve vykresleném HTML přes Kontrolu URL v Search Console. Proto je správná i rada v bloku o zavřeném panelu. Článek netvrdí, že Google nedokáže vykonávat JavaScript. Rozbalovací FAQ je popsáno jako možná implementace, nikoli jako univerzální vlastnost všech FAQ.

[Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) potvrzuje podmínky pro podpůrný odkaz v AI Overviews / AI Mode: stránka je indexovaná a způsobilá zobrazit textový úryvek. Splnění požadavků nezaručuje procházení, indexaci ani zobrazení. Článek správně vztahuje podmínku ke Googlu a odkazům, nerozšiřuje ji na každou AI odpověď nebo každého poskytovatele.

**Závěr:** Bez věcné opravy. Zachovat omezení na běžné procházení a odmítnutí záruk.

### Intercom, Fin a veřejná publikace — potvrzeno

[Intercom: Overview of content types and when to use them](https://www.intercom.com/help/en/articles/9357928-overview-of-content-types-and-when-to-use-them) odpovídá popisu článku: interní články nelze přidat do veřejného Help Center; pro Fin je možné je zpřístupnit. Dodavatel upozorňuje, že tato možnost je ve výchozím stavu vypnutá. Článek říká „mohou“, takže tuto podmínku nezamlčuje zavádějícím absolutním slibem.

[Intercom: Create and manage public articles](https://www.intercom.com/help/en/articles/9357931-create-and-manage-public-articles) přímo podporuje všechny tři citované vlastnosti unlisted: existuje jedinečná URL, obsah se nezobrazuje ve vyhledávání centra a dle dokumentace není indexován vyhledávači, Fin jej může použít bez zdrojového odkazu. Samostatně se nastavuje dostupnost pro Fin a publikum centra nápovědy. Článek správně přisuzuje tvrzení dodavatelské dokumentaci a neprezentuje vlastní test instalace. Nezaměňuje absenci odkazu s absencí využití znalosti.

[Intercom: Prevent search engines indexing your Help Center](https://www.intercom.com/help/en/articles/5145271-prevent-search-engines-indexing-your-help-center) potvrzuje přepínač pro centra na vlastní doméně. Podmínka vlastní domény zůstala v článku zachována.

**Závěr:** Bez věcné opravy. Slovo „unlisted“ je vysvětlené, nelze mu bez dalšího přisuzovat přihlašovací ochranu; auditovaný text to ani nedělá.

### ChatReact: import, obnovení zdrojů a veřejné FAQ — potvrzeno

[ChatReact: Knowledge Base](https://www.chatreact.ai/docs/en/knowledge-base) popisuje výběr a import stránek, samostatné nahrávání dokumentů a opětovné načtení jednotlivé stránky nebo celého webu. Tím je doloženo rozlišení interního zpracování od zveřejnění i doporučení kontrolovat aktuálnost kopie používané chatbotem. Článek netvrdí, že všechny služby vyžadují ruční obnovení ani že by ChatReact nikdy nic nezveřejňoval.

[ChatReact: FAQ Management](https://www.chatreact.ai/docs/en/faqs) skutečně nabízí samostatný vložitelný prvek FAQ a publikační stavy. Existence tohoto prvku je vhodnou výjimkou proti plošnému tvrzení, že všechen obsah chatbotových služeb zůstává schovaný. Dodavatelský příslib SEO výsledků není v článku vydáván za nezávislé měření. Návrhy FAQ vyžadují zpracování v redakci; článek neuvádí, že automaticky vznikají z každé konverzace.

**Závěr:** Bez věcné opravy. Není potřebné auditovat implementaci ChatReact na neexistujícím modelovém e-shopu, protože text žádný takový test netvrdí.

### Anthropic a interaktivní nástroje — potvrzeno

[Anthropic: Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) podporuje ovládání myši a klávesnice v počítačovém prostředí. To stačí k vyvrácení absolutního „žádná AI neumí použít chat“. Článek správně neodvozuje z existence nástroje pravidelnou indexaci konverzací, spolehlivé používání každého chatu ani automatické externí citace.

**Závěr:** Bez věcné opravy.

## Aktivně hledané protidůkazy

### 1. Google zkoušel formuláře už v roce 2008

Vyhledávání `site:developers.google.com/search/blog "forms" "2008" "Googlebot"` nalezlo primární [Crawling through HTML forms](https://developers.google.com/search/blog/2008/04/crawling-through-html-forms). Popisuje experiment s formuláři GET: ze vstupů sestavoval URL a následně zkoušel procházet výsledné stránky. Nejde o důkaz současného zadávání otázek do konverzačních rozhraní s generováním odpovědí. Historický experiment navíc nemá přednost před aktuálním doporučením o načítání bez interakcí.

**Dopad:** Brání nepřiměřenému absolutnímu výroku „Google nikdy neuměl zpracovat formulář“. Takový výrok auditovaný článek neobsahuje, takže nevzniká zásadní nález.

### 2. Google má vlastní agenty, nejen běžný Googlebot

Nezávisle dohledaná dokumentace [Google User-Triggered Fetchers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-user-triggered-fetchers) rozlišuje Google-Agent. [Oficiální oznámení Search I/O 2026](https://blog.google/products-and-platforms/products/search/search-io-2026/) navíc ukazuje rozšiřování agentních funkcí v samotném vyhledávání.

**Dopad:** Nelze tvrdit, že všechna prostředí Googlu navždy pouze pasivně stahují stránky. Článek toto zobecnění nedělá; pro jistotu doporučuji dobrovolné terminologické zpřesnění F3. Tyto zdroje nedokládají, že by instalace vlastního chatbotu zajišťovala citace v externím vyhledávání.

### 3. Intercom může mít „public article“, který není volně vyhledatelný

Nezávisle dohledaná další stránka [Control who can see your public articles](https://www.intercom.com/help/en/articles/2982784-control-who-can-see-your-public-articles) potvrzuje, že zveřejnění unlisted a nastavení publika jsou různé věci. Uvádí omezení podle přihlášení a odděluje Help Center Audience od Fin Audience.

**Dopad:** Potvrzuje hlavní tezi. Nestačí název obsahového typu, ani otevření URL v přihlášeném prohlížeči. Text nemá neoprávněně doplnit slib soukromí pouhým režimem unlisted.

### 4. Samotná chatbotová služba může publikovat veřejný obsah

Dokumentace FAQ ChatReact je skutečný protipříklad tvrzení „dodavatelé chatbotů neumějí zveřejňovat znalosti“. Článek jej sám uvádí a rozlišuje od odpovědi vzniklé až v rozhovoru.

**Dopad:** Výjimka je zapracovaná. Není důvod vracet článek k původnímu absolutnímu zadání ani tvrdit, že odpovědi chatbotu nikdy nemohou být externě použité.

## Inventář dalších tvrzení, příkladů a doporučení

| Místo / tvrzení | Výsledek kontroly |
|---|---|
| Chatbot na vlastním webu a viditelnost v externí AI označují různé situace | Přesné pracovní vymezení článku. Netvrdí, že se jejich účinky nemohou ovlivňovat. |
| Odpověď návštěvníkovi není důkaz zmínky v jiné službě | Logicky platné; jedna sledovaná událost nepotvrzuje druhou. |
| Nahrání dokumentu samo o sobě nevytvoří veřejný zdroj | Správně jako rozlišení úkonů. Pozdější sekce výslovně připouští služby s publikací; bez neobhajitelného plošného výroku. |
| Modelový e-shop s kompatibilitou dílů | Označen jako modelový, bez klienta, procent nebo předstíraného měření. |
| Interní index chatbotu není index Googlu | Správné rozlišení databází. Slovo index je ihned vysvětlené. |
| První srovnávací tabulka | Dává situační příklady a kontrolní otázky, nikoli výčet všech možných zdrojů všech AI systémů. |
| Kompatibilita, doprava a návody patří na udržované veřejné stránky | Označené doporučení autora; ne empirický slib výsledků. |
| Údaje o konkrétní objednávce patří do ověřeného zákaznického prostředí | Přiměřené praktické doporučení. Článek nevydává právní stanovisko ani nepředepisuje konkrétní právní základ. |
| Chatbot může ze stránky čerpat a odkazovat na ni | Podmíněná možnost; ne příslib všech služeb. |
| Aktualizace webu nemusí okamžitě změnit kopii v chatbotu | Doloženo existencí importu a opětovného načtení. Text nařizuje kontrolu, neurčuje nepodloženou latenci. |
| Dotazy mohou ukázat chybějící vysvětlení | Rozumná autorská interpretace; ne tvrzení o zaručeném SEO dopadu. |
| Čtyři redakční kroky | Výslovně označen návrh postupu. Kontrola odpovědi a odstranění zákaznických údajů jsou smysluplné. |
| Počet zpráv nedokazuje správnost vyřešení | Metriky měří jiné jevy. Bez vymyšlených čísel nebo účinků. |
| Ukončení konverzace může být odchod nespokojeného návštěvníka | Slovo „může“ označuje alternativní vysvětlení, nikoli změřený podíl. |
| Druhá tabulka odděluje pomoc, zmínky/odkazy a rozpoznané návštěvy | Správné rozlišení; formulace „rozpoznatelné“ nepředstírá dokonalou atribuci. |
| Růst citací po změně sám neprokazuje příčinu | Metodicky správné upozornění; více měření je doporučení, nikoli garance kauzálního důkazu. |
| Veřejný obsah je potřebný podklad pro dohledání | V kontextu řešeného webového hledání obhajitelné doporučení. Tabulka už připouští různé zdroje jednotlivých služeb. |

## FAQ — každá odpověď samostatně

1. **Pomůže chatbot se SEO?** Odděluje užitek pro návštěvníka, vznik nového obsahu a nezaručené pozice/citace. Bez vady.
2. **Přečte Google odpověď po dotazu?** „Při běžném procházení“ a „nelze počítat“ odpovídají míře důkazu. Připouští veřejnou alternativu. Bez vady.
3. **Je znalostní báze automaticky veřejná?** Správně závisí na produktu a publikaci; konkrétní Intercom příklad je doložen. Bez vady.
4. **Rozbalovací FAQ versus chat?** Rozlišuje načtení textu a změnu viditelnosti. Nezaměňuje screenshot s důkazem dostupnosti. Bez vady.
5. **Automaticky publikovat přepisy?** Redakční doporučení, podmíněné riziko chyb a duplicit. Netvrdí automatický trest Googlu. Bez vady.
6. **Oddělení přínosu a viditelnosti?** Samostatné měření služby a externích odpovědí; počet vlastních konverzací není počet doporučení. Bez vady.

## Metadata, struktura a aktuálnost

| Prvek | Ověřený stav | Hodnocení |
|---|---|---|
| `title` | 51 znaků | Vyhovuje 50–60, hlavní výraz vepředu. |
| `seoTitle` | 46 znaků | Vyhovuje specifickému pravidlu C1b do 60 znaků; F1 stažen. |
| `description` | 123 znaků | Vyhovuje 70–160; popis odpovídá tématu a neslibuje garantovaný výsledek. |
| `answer` | 52 slov, počítáno dělením podle mezer | Vyhovuje 40–60; začíná definicí, samostatně srozumitelný. |
| Úvod těla | První dva odstavce vysvětlují rozdíl vlastního chatu a externího dohledání | Odpověď stojí samostatně; podrobnosti navazují. |
| H2 | 6 nadpisů | Každý má `span.hl` i `strong`, struktura sleduje argument. |
| H3 | Jedna hlavní výjimka o interaktivním AI nástroji | Je pod relevantní částí o Googlu, prostý text. |
| Slug | `chatbot-na-webu-a-ai-viditelnost` | Konkrétní a věrný tématu. |
| Kategorie | `analysis` | Odpovídá srovnávacímu výkladu, nejde o předstíranou datovou studii. |
| `published`, `updated` | 2026-09-17 | Odpovídá dni auditu. |
| Rok a časové výrazy | Ověření 17. září 2026; rok 2026 v keywords | Bez neukotveného „letos“ či budoucího slibu. |

Článek neobsahuje statistiky účinnosti, podíly robotů, časové úspory ani výsledky měřeného e-shopu. Čísla o hledanosti v podkladech nebyla přenesena do článku. Audit je proto nevydává za znovu změřená nebo za důkaz poptávky po přesném tématu.

## CTA a číselná kontrola nabídky

Kanonickým zdrojem je aktuální lokální `src/content/pages/audit.ts`, jak požaduje zadání; veřejná [stránka auditu](https://aiseo-optimalizace.cz/audit/) se také otevřela.

- Název **Audit AI viditelnosti** odpovídá produktu.
- **3 600 Kč bez DPH** a **4 356 Kč s DPH** odpovídají kanonické nabídce. Čistě aritmeticky `3 600 × 1,21 = 4 356`; nepřezkoumávám daňový režim dodavatele.
- „Konkrétní priority“ a obsahové/technické mezery jsou ve vrstvě technické připravenosti, obsahu a v prioritní tabulce skutečně zahrnuté.
- CTA neslibuje monitoring ani implementaci zdarma; jednorázový audit je pro odhalení chybějících veřejných podkladů relevantní.
- Odmítnutí záruky citací a doporučení je věcně přiměřené, není zavádějící reklamní garancí.

## Kontrola odkazů

Všech **8 jedinečných externích URL** použitých přímo v článku se otevřelo a vrátilo odpovídající dokumentaci. Ověřeny byly celé příslušné pasáže, ne pouze úryvek vyhledávání. Datum dokumentace Intercom content types je 19. 2. 2026, public articles 31. 7. 2026, prevent indexing 23. 4. 2025; odpovídají research. U obou citovaných stránek Search Central bylo uvedeno poslední aktualizování 10. 12. 2025, což samo o sobě nedělá aktuálně platnou dokumentaci neplatnou.

Interní cíle `/blog/rag-ai-vyhledavani/`, `/blog/javascript-a-ai-roboti/`, `/blog/jak-ai-cituje-zdroje/` a `/audit/` existují lokálně a byly úspěšně otevřeny veřejně. RAG a JavaScript odpovídají účelu odkazů. U článku o citacích platí F2. Tento audit kontroloval relevanci těchto cílů pro nový text; nepředstírá kompletní nový audit všech jejich historických tvrzení.

## Hranice a výsledný pokyn

Jde o kontrolu současné dokumentace, logiky výkladu, citací a metadat. Nebyl proveden experiment s Googlebotem, vlastní instalací Intercom/ChatReact ani měření citací modelového e-shopu. Článek nic z toho netvrdí, takže to není nedostatek podkladů pro jeho deklarovaný rozsah.

**Před publikací opravit F2. F1 byl stažen po kontrole přesnějšího pravidla C1b; F3 je dobrovolné zpřesnění. Ostatní ověřené části mohou zůstat. Není doložen důvod přepisovat hlavní tezi nebo přidávat další absolutní tvrzení o neschopnosti AI číst či používat chat.**
