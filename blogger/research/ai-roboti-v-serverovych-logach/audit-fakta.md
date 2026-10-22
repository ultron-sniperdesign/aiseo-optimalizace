# Faktický audit — AI roboti v serverových logách

**Auditováno:** 22. 10. 2026  
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek má správně zvolený základ: rozlišuje user-agent od ověřené identity, odděluje automatické procházení od požadavků vyvolaných uživatelem a upozorňuje na limity logu původního serveru za CDN. Před publikací je ale nutné opravit postup, jinak může do výsledků započítat běžné návštěvníky a následně je označit za „ověřené požadavky“ robotů.

## Nálezy

### 1. [BLOCKER · zásadní] První filtr nehledá pouze v user-agentu

**Pasáž:**

> `grep -Ei 'OAI-SearchBot|GPTBot|ChatGPT-User|ClaudeBot|Claude-SearchBot|Claude-User|PerplexityBot|Perplexity-User|Bytespider|CCBot|Applebot' access-30d.log > ai-roboti.log`

**Problém:** `grep` prohledá celý řádek. Do `ai-roboti.log` proto zařadí i běžného návštěvníka, pokud se některé jméno objeví v cestě, parametru URL nebo refereru. Následující řezy podle URL, stavu a IP pak tyto falešné řádky skutečně započítají. Praktický test se třemi řádky ukázal, že filtr přijal nejen skutečný `OAI-SearchBot`, ale i běžný prohlížeč s `/?q=GPTBot` a běžný prohlížeč s refererem obsahujícím `/GPTBot`; výpis URL pak uvedl všechny tři adresy.

**Důkaz:** Apache `combined` má request, referer a user-agent ve třech různých uvozovaných polích; user-agent je až poslední z nich. [Apache HTTP Server — Combined Log Format](https://httpd.apache.org/docs/2.4/logs.html#accesslog)

**Navržená oprava:** filtrovat jen šesté pole formátu `combined`, například:

```bash
awk -F'"' '
tolower($6) ~ /oai-searchbot|gptbot|chatgpt-user|claudebot|claude-searchbot|claude-user|perplexitybot|perplexity-user|bytespider|ccbot|applebot/ { print }
' access-30d.log > ai-roboti.log
```

Současně výslovně uvést, že `$6` platí pro popsaný formát podobný `combined`; u jiného formátu je nutné upravit parser.

### 2. [BLOCKER · zásadní] Výsledná tabulka slibuje „ověřené požadavky“, ale příkazy ověří nanejvýš jednu IP

**Pasáže:**

> „Následující příkaz počítá každý řádek jednou…“

> „Pro rychlou kontrolu jedné adresy lze použít Python.“

> „První výstup má být jednoduchá tabulka: robot, ověřené požadavky…“

**Problém:** počet podle jmen vznikne ještě před ověřením IP. Pythonový příklad kontroluje jednu ručně zadanou adresu proti jednomu souboru, ale článek neukáže, jak zkontrolovat všechny dvojice robot–IP a jak z nich vytvořit ověřený podmnožinový log. Uživatel tedy podle uvedeného postupu nemůže korektně získat sloupec „ověřené požadavky“. To je v přímém rozporu s hlavní tezí článku, že user-agent nic nedokazuje.

**Důkaz:** OpenAI publikuje oddělené rozsahy pro jednotlivé agenty a Google rozlišuje několik kategorií rozsahů; každý nalezený pár jména a IP je proto nutné porovnat se správným seznamem. [OpenAI — přehled robotů](https://developers.openai.com/api/docs/bots), [Google — ověření požadavků](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests)

**Navržená oprava:** buď:

1. označit první čísla jako „požadavky nalezené podle user-agentu“ a nikde je nenazývat ověřenými; nebo
2. doplnit dávkový krok, který vytáhne všechny dvojice `jméno + IP`, pro každé jméno načte správný seznam rozsahů, vytvoří `ai-roboti-overeni.log` pouze z vyhovujících řádků a všechny čtyři řezy spustí až nad tímto souborem.

Negativní výsledek u historického logu má zůstat ve zvláštní kategorii „dnes neověřeno“, nikoli automaticky „podvrh“.

### 3. [BLOCKER · zásadní] `CF-Connecting-IP` je důvěryhodné jen od skutečné Cloudflare proxy

**Pasáž:**

> „Cloudflare posílá původní adresu v hlavičce `CF-Connecting-IP`, server ji ale musí správně obnovit nebo výslovně zalogovat.“

**Problém:** chybí bezpečnostní podmínka, že server smí této hlavičce věřit pouze u spojení z aktuálních rozsahů Cloudflare. Pokud je původní server dostupný přímo nebo konfigurace bez omezení přebírá hlavičku od libovolného klienta, útočník může `CF-Connecting-IP` podvrhnout a projít následným IP ověřením. V kontextu článku nejde jen o obecnou bezpečnostní poznámku; přímo to může zfalšovat identitu robota.

**Důkaz:** Cloudflare doporučuje přijímat takové požadavky jen ze svých IP rozsahů a výslovně varuje, že jinak lze hlavičku podvrhnout. [Cloudflare — Restoring original visitor IPs, část Caddy](https://developers.cloudflare.com/support/troubleshooting/restoring-visitor-ips/restoring-original-visitor-ips/#caddy)

**Navržená oprava:** doplnit větu ve smyslu: „Hlavičce důvěřujte jen u spojení z aktuálních rozsahů Cloudflare a přímý přístup k originu zablokujte nebo oddělte; jinak ji může poslat i cizí klient.“ Stejnou podmínku doplnit do FAQ. Tato podmínka v `research.md` chybí.

### 4. [BLOCKER · zásadní] Přehled od CDN nelze bez podmínky považovat za ověření identity

**Pasáž:**

> „A pokud vám přehled robotů dává CDN, pracujte raději s ním…“

**Problém:** doporučení správně řeší úplnost dat na okraji sítě, ale nerozlišuje pokrytí požadavků od kvality identifikace robota. Například Cloudflare AI Crawl Control na bezplatném tarifu identifikuje známé AI roboty podle user-agentu; důkladnější identifikaci pomocí detection ID uvádí až pro Bot Management. Bez této podmínky článek nejprve říká, že user-agent není důkaz, a vzápětí může čtenáře odkázat na přehled založený právě na něm.

**Důkaz:** [Cloudflare — Manage AI crawlers, Quality of AI crawler detection](https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/#quality-of-ai-crawler-detection)

**Navržená oprava:** rozdělit doporučení na dvě věty: přehled na CDN použít pro úplné pokrytí požadavků včetně zásahů z cache, ale před označením provozu za ověřený zjistit, zda daný tarif používá jen user-agent, nebo také ověřenou identitu/detection ID. Tato podmínka v `research.md` chybí.

### 5. [BLOCKER · zásadní] Tabulka účelů OpenAI je příliš kategorická

**Pasáže:**

> „OpenAI, Anthropic a Perplexity používají různá jména pro automatické vyhledávání, sběr pro trénink a načtení stránky na pokyn člověka.“

> `| OpenAI | OAI-SearchBot | GPTBot | ChatGPT-User |`

**Problém:** tabulka je užitečná jako přehled řídicích tokenů a deklarovaných hlavních účelů, ale neumožňuje z logu jednoznačně určit následné použití staženého obsahu. OpenAI výslovně uvádí, že pokud web povolí OAI-SearchBot i GPTBot, může kvůli omezení duplicitního procházení použít výsledek jediného procházení pro oba případy. U GPTBotu zároveň říká, že stažený obsah *může* být použit při tréninku, nikoli že každý požadavek představuje trénink.

**Důkaz:** [OpenAI — Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots) uvádí sdílení výsledku jednoho procházení mezi oběma povolenými účely a u GPTBotu formulaci „may be used in training“.

**Navržená oprava:** změnit záhlaví „Trénink modelů“ na „Procházení pro možné použití při vývoji/tréninku modelů“ a pod tabulku přidat: „Jména vyjadřují deklarovaný hlavní účel a samostatné řízení v robots.txt, ne jistotu následného použití každého stažení. OpenAI může při povolení obou agentů použít výsledek jednoho procházení pro oba účely.“ Tato výslovná podmínka v `research.md` chybí.

### 6. [BLOCKER · zásadní] Cena Packu je uvedena s opačným režimem DPH

**Pasáž:**

> „Stojí 1 490 Kč včetně DPH.“

**Problém:** aktuální prodejní stránka uvádí „1 490 Kč jednorázově, bez DPH“. Částka je stejná, ale tvrzení o DPH je opačné a může ovlivnit nákupní rozhodnutí i očekávanou cenu na dokladu.

**Důkaz:** [AI SEO Wireframe Pack — aktuální prodejní stránka](https://aiseo-optimalizace.cz/pack/) (ověřeno 22. 10. 2026).

**Navržená oprava:** změnit větu na „Stojí 1 490 Kč bez DPH.“ Pokud má web komunikovat cenu pro spotřebitele včetně DPH, nejdřív sjednotit kanonickou prodejní stránku a checkout; článek nesmí sám zavádět jiný režim.

### 7. [WARNING · drobný] Tři další názvy jsou ve filtru bez vysvětlení účelu a bez navazujícího ověření

**Pasáž:**

> `...|Bytespider|CCBot|Applebot' access-30d.log`

**Problém:** text říká „Doplňte další jména jen tehdy, když víte, co označují“, ale tato tři jména už do základního příkazu doplňuje. CCBot je robot otevřeného archivu Common Crawl, Applebot slouží vedle funkcí s AI také Spotlightu, Siri a Safari a jeho token `Applebot-Extended` sám stránky neprochází. Pro ByteSpider článek nedává primární popis ani ověřovací seznam. Navazující tabulka a Pythonové odkazy přitom pokrývají jen OpenAI, Anthropic a Perplexity. Čtenář tak dostane neporovnatelné kategorie v jednom souboru.

**Důkaz:** [Common Crawl — CCBot](https://www.commoncrawl.org/ccbot), [Apple — About Applebot](https://support.apple.com/en-us/119829). Common Crawl publikuje vlastní [strojový seznam IP](https://index.commoncrawl.org/ccbot.json), Apple publikuje [Applebot IP CIDRs](https://search.developer.apple.com/applebot.json).

**Navržená oprava:** buď tato tři jména ze základního filtru odstranit, nebo přidat druhou tabulku „další sledovaní roboti“ s provozovatelem, přesným účelem, limitem interpretace a konkrétním způsobem ověření. ByteSpider bez doloženého aktuálního primárního seznamu označit jako „podle jména, IP neověřena“, ne jako ověřený provoz.

### 8. [WARNING · drobný] Aktuální přehled OpenAI opomíjí `OAI-AdsBot`

**Pasáž:**

> „OpenAI má OAI-SearchBot, GPTBot a ChatGPT-User…“

**Problém:** věta v FAQ působí jako úplný výčet současných agentů OpenAI. Aktuální dokumentace uvádí také `OAI-AdsBot`, který navštěvuje vstupní stránky odeslané jako reklamy kvůli kontrole bezpečnosti a relevanci; má i vlastní zveřejněný seznam IP. Pro běžný obsahový audit je okrajový, ale v serverovém logu se objevit může.

**Důkaz:** [OpenAI — Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots), sekce `OAI-AdsBot`; [publikované IP](https://openai.com/adsbot.json).

**Navržená oprava:** buď jej doplnit jako zvláštní kategorii „kontrola reklamních vstupních stránek“, nebo výčet uvést slovy „pro účely řešené v tomto návodu“ a přidat krátkou poznámku, že reklamní `OAI-AdsBot` je mimo rozsah. `research.md` ho neobsahuje.

### 9. [WARNING · drobný] „Nejméně 30 dní“ je vydáváno za obecné minimum bez podkladu

**Pasáže:**

> „Pro analýzu si vyžádejte nejméně 30 dní…“

> „Stáhněte nejméně 30 dní přístupových logů…“

**Problém:** 30 dní je rozumný příklad úvodního okna, ale není doložené univerzální minimum. U webu s malým objemem nemusí stačit; u incidentu může být vhodnější kratší interval. Pro porovnání je důležitější úplnost a stejně dlouhá období než právě číslo 30.

**Důkaz:** v uvedených primárních zdrojích ani v `research.md` není podklad pro hranici „nejméně 30 dní“; rešerše ji pouze opakuje jako doporučení.

**Navržená oprava:** „Pro první přehled zvolte například posledních 30 dní a zahrňte otočené i komprimované soubory. U málo navštěvovaného webu období prodlužte; při porovnávání používejte stejně dlouhá a úplná okna.“

### 10. [WARNING · drobný] Stav 404 neurčuje, že adresa je stará nebo vymyšlená

**Pasáž:**

> „Větší podíl `404` ukazuje na staré nebo vymyšlené adresy.“

**Problém:** 404 říká, že server nenašel aktuální reprezentaci cílového zdroje. Příčinou může být také překlep, vadný interní odkaz, změna směrování, chybějící soubor nebo záměrně neexistující cesta. Formulace zužuje příčinu bez důkazu.

**Důkaz:** [RFC 9110, § 15.5.5 — 404 Not Found](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found).

**Navržená oprava:** „Větší podíl `404` ukazuje na požadavky na adresy, které server nenašel. Prověřte staré odkazy, překlepy, změny směrování i vymyšlené URL.“

### 11. [TIP · drobný] Krátká odpověď má správnou délku, ale nezačíná definicí

**Pasáž:**

> `answer: "AI roboty najdete v přístupovém logu podle user-agentu…"`

**Problém:** pole má 44 slov, tedy splňuje požadovaných 40–60 slov, a dává samostatný smysl. Systémový požadavek auditora však říká, že má začínat definicí. Současná verze začíná postupem.

**Navržená oprava (40 slov):** „Analýza AI robotů v serverovém logu je rozdělení požadavků podle user-agentu, URL, stavového kódu a ověřené zdrojové IP. User-agent slouží jen jako první filtr. Skutečnou identitu posuzujte proti aktuálním rozsahům provozovatele a výsledky oddělujte podle účelu robota za zvolené období.“

### 12. [WARNING · drobný] Odkaz na článek o cache nebyl na veřejném webu ověřitelný

**Pasáž:**

> `[cache pro AI roboty](/blog/cachovani-pro-ai-roboty/)`

**Problém:** veřejná URL `https://aiseo-optimalizace.cz/blog/cachovani-pro-ai-roboty/` nebyla při auditu dostupná a vyhledání omezené na doménu nevrátilo výsledek. `research.md` uvádí, že článek existuje, ale neobsahuje důkaz o aktuálně publikované trase. Může jít o obsah připravený ke stejnému nasazení; před publikací je přesto nutné ověřit, že výstupní route vznikne.

**Navržená oprava:** před nasazením ověřit existenci výsledného `dist/blog/cachovani-pro-ai-roboty/index.html` a po nasazení HTTP 200. Pokud se navazující článek nyní nepublikuje, odkaz dočasně odstranit nebo nahradit existující relevantní stránkou.

## Ověření bez nálezu

- `seoTitle` má 48 znaků, klíčové téma je na začátku a limit 60 znaků splňuje.
- Meta description má 134 znaků a splňuje rozmezí 70–160 znaků.
- `answer` má 44 slov a splňuje délku 40–60 slov.
- Všech šest H2 používá předepsanou kombinaci `<span class="hl">` a `<strong>`.
- Příkazy pro rozdělení podle jména, URL, stavového kódu a IP na validním vzorku formátu `combined` vracejí očekávané hodnoty; zásadní chyba je v předřazeném celřádkovém `grep` filtru a v chybějícím dávkovém ověření.
- JSON soubory OpenAI, Anthropic, Common Crawl a Apple používají očekávané pole `prefixes` s `ipv4Prefix`/`ipv6Prefix`; Pythonová logika členství v síti tomuto schématu odpovídá.
- Tvrzení o agentech Anthropic a Perplexity odpovídají jejich aktuálním primárním dokumentacím: [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers).
- Tvrzení, že `Google-Extended` není samostatný HTTP user-agent, je přesné. Google jej popisuje jako řídicí token a uvádí procházení pod existujícími user-agenty. [Google — common crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended)
- Dvoukrokové ověření Googlu reverzním a následným dopředným DNS odpovídá oficiálnímu postupu. [Google — Verify requests](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests)
- Popis výchozího `combined` formátu Nginxu, Apache a rozdílu mezi access a error logem je věcně správný. [Nginx](https://nginx.org/en/docs/http/ngx_http_log_module.html), [Apache](https://httpd.apache.org/docs/2.4/logs.html)
- Odkaz na `/blog/overovani-ai-robotu/`, `/pack/` a `/audit/` byl na veřejném webu dostupný. Všechny externí odkazy ve zdrojové poznámce vedou na odpovídající primární dokumentaci.

## C5b doověření

**Doověřeno:** 22. 10. 2026  
**Rozsah:** původní zásadní nálezy F1–F6 proti aktuálnímu článku  
**Verdikt:** **F1–F5 uzavřeny; F6 se odvolává jako chybný původní nález. Z této šestice nezůstává žádný blocker.**

### F1 — filtr pouze v user-agentu: UZAVŘENO

Aktuální příkaz na řádcích 83–87 používá `awk -F'"'` a hledá pouze v `tolower($6)`. Následující odstavec výslovně vysvětluje, že šesté pole platí pro popsaný formát podobný `combined` a že vlastní formát vyžaduje jiný parser.

Praktický opakovaný test obsahoval:

- skutečný `OAI-SearchBot` v poli user-agentu;
- běžný prohlížeč s `GPTBot` pouze v parametru URL;
- běžný prohlížeč s `GPTBot` pouze v refereru.

Do výstupu prošel pouze skutečný robot. Oprava původní falešné shody tedy obstojí.

### F2 — rozdíl mezi nalezenými a ověřenými požadavky: UZAVŘENO

Aktuální článek už netvrdí, že počty podle user-agentu jsou samy o sobě ověřené:

- řádek 182 požaduje kontrolu každé jedinečné dvojice jména a IP proti správnému seznamu a další přehledy jen z vyhovujících řádků;
- negativní historický výsledek označuje jako „dnes neověřeno“, nikoli automaticky jako podvrh;
- řádky 192–193 definují čitatel jen jako požadavky s ověřenou IP;
- řádek 218 vede ve výsledné tabulce odděleně „požadavky nalezené podle user-agentu“ a „počet dnes ověřených požadavků“.

Článek neposkytuje automatizovaný dávkový skript, ale pro odstranění původní věcné chyby je ruční postup přes všechny jedinečné dvojice dostatečně přesný. Zbývá pouze otázka pohodlí u velkého logu, nikoli faktický blocker.

### F3 — důvěra v `CF-Connecting-IP`: UZAVŘENO

Řádek 57 nyní uvádí obě nutné podmínky: důvěřovat hlavičce jen u spojení z aktuálních rozsahů Cloudflare a přímý přístup k původnímu serveru zablokovat nebo oddělit. Současně výslovně varuje před podvržením cizím klientem. Oprava odpovídá doporučení Cloudflare a obstojí.

### F4 — přehled od CDN a kvalita identifikace: UZAVŘENO

Řádek 42 správně odděluje dvě věci:

1. přehled CDN zachytí i požadavky obsloužené z její mezipaměti;
2. před označením provozu za ověřený je nutné zjistit, zda tarif rozpoznává roboty pouze podle user-agentu, nebo podle ověřené identity.

Zdrojová poznámka navíc odkazuje přímo na dokumentaci Cloudflare ke kvalitě rozpoznání. Původně chybějící podmínka je doplněna.

### F5 — účel agentů OpenAI a sdílení jednoho procházení: UZAVŘENO

Řádky 71–79 opravují oba problémy:

- tabulka používá formulaci „Možné použití při vývoji modelů“, takže netvrdí, že každý požadavek GPTBotu představuje trénink;
- následující odstavec říká, že jména vyjadřují deklarovaný hlavní účel, nikoli jistotu následného použití, a výslovně uvádí možnost OpenAI použít výsledek jednoho procházení pro oba povolené účely;
- `OAI-AdsBot` je jasně vymezen jako agent mimo rozsah návodu.

Aktuální formulace odpovídá primární dokumentaci OpenAI.

### F6 — 1 490 Kč včetně DPH: PŮVODNÍ NÁLEZ SE ODVOLÁVÁ

Původní F6 vyšel ze zastaralého znění veřejné stránky a je chybný. Kanonický zdroj `src/content/pages/pack.ts` na řádcích 63–70 uvádí:

- 1 490 Kč jako konečnou cenu včetně DPH;
- `valueAddedTaxIncluded: true` ve strukturovaných datech.

Aktuální [živá stránka Packu](https://aiseo-optimalizace.cz/pack/) uvádí „1 490 Kč jednorázově · konečná cena včetně DPH“ a stejný údaj opakuje ve stručné definici. Věta článku na řádku 222 „Stojí 1 490 Kč včetně DPH“ je tedy správná. Původní doporučení změnit ji na „bez DPH“ se nesmí použít.
