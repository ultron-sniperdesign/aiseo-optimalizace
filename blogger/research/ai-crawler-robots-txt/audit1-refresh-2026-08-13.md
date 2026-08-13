1. **Vážné** — **frontmatter neodpovídá tělu v počtu položek**
   - **Citace:** `stats: value: "13" label: "AI robotů a řídicích tokenů, které článek vypisuje jmenovitě"`
   - **Problém:** V tabulce je po refreshi 15 položek, ne 13: přibyl `OAI-AdsBot` a `Seznam-Extended`.
   - **Návrh opravy:** Změnit `value: "13"` na `value: "15"`, nebo upravit label tak, aby odpovídal jinému skutečnému počtu.

2. **Vážné** — **frontmatter odporuje nové pasáži o robots.txt u on-demand/fetcher robotů**
   - **Citace:** `answer: "V robots.txt povolte vyhledávací a on-demand roboty (OAI-SearchBot, Claude-SearchBot, PerplexityBot, ChatGPT-User) — tudy vedou citace..."`
   - **Problém:** Tělo nově říká, že u části on-demand/fetcherů `robots.txt` podle dokumentace „nemusí platit“ / „obvykle ignorují“. Doporučení „v robots.txt povolte ... ChatGPT-User“ je pak přinejmenším zavádějící.
   - **Návrh opravy:** Přepsat `answer` např. na: „Pro citovatelnost neblokujte vyhledávací roboty; u on-demand fetcherů počítejte s tím, že robots.txt se podle dokumentace nemusí vždy uplatnit.“

3. **Vážné** — **FAQ je po změně věcně nedotažené a místy v rozporu**
   - **Citace:** `faq -> "Jak povolit AI robotům přístup na web?" ... "Těm dejte v robots.txt ... Allow."`
   - **Problém:** Po doplnění sekce „U celé jedné kategorie robots.txt podle dokumentace neplatí“ už nelze bez výhrady radit dát `Allow` i on-demand robotům jako funkční mechanismus.
   - **Návrh opravy:** Doplnit výhradu přímo do FAQ: „U vyhledávacích robotů dává povolení smysl; u on-demand fetcherů může být podle dokumentace robots.txt ignorován.“

4. **Vážné** — **přeskok z nenáhodného vzorku k širší implikaci bez omezení v textu**
   - **Citace:** `Vlastní měření 80 českých domén (33 médií, 47 e-shopů)... Zajímavější je ale dvojice u OpenAI: pravidlo pro GPTBota má dvanáct webů, ale OAI-SearchBota jen čtyři z nich.`
   - **Problém:** Je uvedeno, že jde o „vlastní měření 80 českých domén“, ale chybí explicitní omezení typu nenáhodný/ne-reprezentativní vzorek. V hubu to působí obecněji, než podklad unese.
   - **Návrh opravy:** Přidat větu: „Jde o nenáhodný orientační vzorek, ne reprezentativní obraz českého webu.“

5. **Drobné** — **nejasná formulace „čtyři z nich“**
   - **Citace:** `pravidlo pro GPTBota má dvanáct webů, ale OAI-SearchBota jen čtyři z nich`
   - **Problém:** „z nich“ může odkazovat na 80 domén i na 12 webů s GPTBotem. Z kontextu jde patrně o 4 z 80, ale věta to zamlžuje.
   - **Návrh opravy:** Přepsat na jednoznačné znění, např. „GPTBota má 12 webů, OAI-SearchBota jen 4 z 80“ nebo „... a z těchto 12 má OAI-SearchBota jen 4“.

6. **Vážné** — **hub je v jedné sekci přetížen interními odkazy na úkor výkladu**
   - **Citace:** `... rozebírá ho samostatný článek ...`, `... nejčastěji blokovaný robot ...`, `... přes Cloudflare ...`, `... ověřením podle IP rozsahů ...`, `... kdo rozsahy publikuje a kdo ne ...`
   - **Problém:** V jediné krátké sekci je 5 interních odkazů. Část vysvětlení se přesunula do linků a hub ztrácí soběstačnost.
   - **Návrh opravy:** Nechat max. 2–3 odkazy a doplnit 1–2 věty přímo v hubu: co přesně znamená „obvykle ignorují“, kdy má IP ověření smysl a kdy není dostupné.

7. **Drobné** — **odkaz nahrazuje klíčové vysvětlení**
   - **Citace:** `Není to obcházení pravidla, je to popsané chování; rozebírá ho samostatný článek`
   - **Problém:** Tohle je důležitá kvalifikace, ale hub nevysvětlí minimum: proč se to liší od běžného crawlování a jaký to má praktický dopad.
   - **Návrh opravy:** Přidat krátké dovysvětlení do věty, např. „... protože jde o fetch vyvolaný konkrétním uživatelem, ne o plošné procházení webu.“

8. **Drobné** — **kostrbatá a samoopravná formulace**
   - **Citace:** `... i tahle tabulka měla donedávna o jednoho robota OpenAI míň, než kolik jich dokumentace popisuje.`
   - **Problém:** Meta-komentář o dřívější chybě čtenáři moc nepomáhá; působí jako interní poznámka po refreshi.
   - **Návrh opravy:** Zkrátit na věcnou formulaci: „Počty a názvy se mění, proto je vždy ověřte v aktuální dokumentaci.“

9. **Drobné** — **slabá opora pro formulaci „nejzajímavější“**
   - **Citace:** `Zajímavější je ale dvojice u OpenAI`
   - **Problém:** Hodnoticí slovo bez kritéria. V technickém hubu je lepší říct, proč je to důležité.
   - **Návrh opravy:** Přepsat na: „Pro nastavení citovatelnosti je důležitá hlavně dvojice u OpenAI...“

10. **Drobné** — **sekce o llms.txt je už na hraně zahuštění hubu další vlastní studií**
   - **Citace:** `ve vzorku 80 českých domén vrátí /llms.txt kód 200 u 52 z nich, ale neprázdný textový obsah mají tři`
   - **Problém:** Čísla jsou srozumitelná, ale bez jediné metodické věty působí jako další odbočka do měření. Hub tím bobtná.
   - **Návrh opravy:** Přidat stručné metodické omezení („orientační kontrola URL, ne audit implementace“) nebo čísla zkrátit do poznámky pod čarou/Insight boxu.

11. **Drobné** — **opakování stejné myšlenky o IP rozsazích**
   - **Citace:** `... kombinujte s ověřením podle IP rozsahů ...` + `... kdo rozsahy publikuje a kdo ne je samostatná otázka a odpověď není "všichni".`
   - **Problém:** Dvě po sobě jdoucí věty říkají totéž: IP ověření je užitečné, ale ne vždy dostupné.
   - **Návrh opravy:** Sloučit do jedné věty: „... kombinujte s ověřením podle IP rozsahů, pokud je provozovatel publikuje; u části AI robotů to zdokumentované není.“

12. **Drobné** — **kontrolní seznam obsahuje hodnotící zkratku místo přesného návodu**
   - **Citace:** `jedno bez druhého je poloviční nastavení`
   - **Problém:** „poloviční nastavení“ je efektní, ale ne přesné. Ne každým cílem je zároveň trénink i vyhledávání.
   - **Návrh opravy:** Přepsat na: „u OpenAI zkontrolujte, zda pravidla odpovídají vašemu cíli zvlášť pro trénink (GPTBot) a zvlášť pro vyhledávání v ChatGPT (OAI-SearchBot).“