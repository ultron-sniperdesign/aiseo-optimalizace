**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku.

---

## 1) Věcná správnost

### [BLOCKER] Doporučení „explicit Allow“ v robots.txt je technicky problematické a místy zavádějící
> „Doplňte do robots.txt explicit Allow pro GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended a Meta-ExternalAgent.“

**Problém:**  
Formulace budí dojem, že `Allow` je nutný nebo standardní způsob „povolení“ AI přístupu. Ve většině případů je přístup povolen už tím, že user-agent není blokovaný. `Allow` dává smysl hlavně při souběhu s `Disallow` pravidly. Navíc u některých robotů není praktický rozdíl mezi „bez blokace“ a „explicit Allow“. Pro čtenáře to může vést k chybnému nastavení.

**Návrh opravy:**  
Přeformulovat na něco jako:  
- „Ujistěte se, že hlavní AI vyhledávací roboti nejsou v robots.txt blokovaní.“  
- „Pokud máte restriktivní pravidla, přidejte pro relevantní user-agenty výjimky.“  
- Vysvětlit, kdy je `Allow` opravdu potřeba: při existenci obecnějšího `Disallow`.

---

### [BLOCKER] Google-Extended je popsán jako „AI crawler“, což je nepřesné
> „6 hlavních AI crawler user-agentů 2026: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Meta-ExternalAgent“

**Problém:**  
`Google-Extended` není klasický vyhledávací robot ve smyslu samostatného crawleru. Je to token pro správu využití obsahu Googlem pro některé AI účely. Zařazení mezi „crawlery“ nebo „user-agenty, které je potřeba otevřít“ je zjednodušující až nepřesné.

**Návrh opravy:**  
Rozlišit dvě skupiny:
- **vyhledávací roboti / přístupové user-agenty**: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Meta-ExternalAgent  
- **specifické řídicí označení Google**: Google-Extended

Formulaci změnit např. na:  
„V praxi je potřeba řešit několik hlavních AI user-agentů a pravidel, včetně GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Meta-ExternalAgent a nastavení Google-Extended.“

---

### [WARNING] `answer` i tělo článku vynechávají Meta-ExternalAgent, přestože v zadání je mezi 6 hlavními
> `answer: "… otevřít AI crawlery v robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) …"`

**Problém:**  
Krátká odpověď neodpovídá plně vlastnímu článku ani zadaným faktům. Chybí OAI-SearchBot i Meta-ExternalAgent.

**Návrh opravy:**  
Doplnit nebo zkrátit tak, aby byl výčet konzistentní. Např.:  
„… upravit robots.txt pro hlavní AI user-agenty, například GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Meta-ExternalAgent a pravidlo Google-Extended …“

---

### [WARNING] „Website LLMs.txt: přes 30 000 aktivních instalací“ je plausibilní, ale bez opory v textu
> „Website LLMs.txt (přes 30 000 aktivních instalací…)“

**Problém:**  
Číslo odpovídá zadaným faktům, ale v článku není nijak ukotvené „k červnu 2026“ a působí jako tvrdé aktuální tvrzení.

**Návrh opravy:**  
Změnit na:
- „k červnu 2026 zhruba 30 000+ aktivních instalací“
- nebo „podle veřejného přehledu pluginu zhruba 30 000+ aktivních instalací“

---

### [WARNING] „WordPress … v roce 2026 řádově kolem 40 %“ je v pořádku, ale formulace „žene podstatnou část“ je vatovitá
> „WordPress podle dlouhodobých odhadů žene podstatnou část všech webů na světě — i v roce 2026 řádově kolem 40 %.“

**Problém:**  
Věcně použitelné, stylisticky zbytečně nafouknuté. Pro tutorial je lepší přesnější a kratší formulace.

**Návrh opravy:**  
„WordPress podle veřejně citovaných odhadů pohání v roce 2026 zhruba 40 % webů.“

---

### [WARNING] „WooCommerce … čtvrtina až třetina všech e-shopů na světě“ je příliš široké pásmo bez ukotvení
> „Pro WordPress e-shopy postavené na WooCommerce (přibližně čtvrtina až třetina všech e-shopů na světě)…“

**Problém:**  
Zadání připouští 25–30 %, ale „čtvrtina až třetina“ natahuje horní hranici až k 33 %. To je zbytečně volné.

**Návrh opravy:**  
„… WooCommerce (zhruba 25 až 30 % e-shopů)…“

---

### [WARNING] Tvrzení o „Lighthouse Agentic Browsing kategorii“ je nedoložené a může být zavádějící
> „Lighthouse Agentic Browsing kategorie kontroluje stejné metriky.“

**Problém:**  
Tohle je nejproblematičtější věc v textu po robots.txt. Není jasné, co přesně je míněno, a formulace působí jako ustálená oficiální kategorie. Bez doložení je to rizikové.

**Návrh opravy:**  
Větu odstranit, nebo nahradit bezpečněji:  
„Core Web Vitals zůstávají důležité i pro uživatelskou zkušenost v AI éře vyhledávání.“

---

### [WARNING] „Stránky bez aktualizace v rozsahu zhruba čtvrtletí mají podle některých analýz vyšší riziko ztráty AI citací“ je nedoložené
> „… bez aktualizace v rozsahu zhruba čtvrtletí mají podle některých analýz vyšší riziko ztráty AI citací.“

**Problém:**  
Příliš konkrétní interval a příliš silný závěr bez zdroje. To už není bezpečný claim.

**Návrh opravy:**  
Změnit na:  
„U témat, která se rychle mění, může pravidelná aktualizace zvýšit šanci, že AI systémy budou obsah považovat za aktuální.“  
Pryč s „čtvrtletí“ i „vyšší riziko ztráty“.

---

### [WARNING] „AI cituje primární zdroje“ je přehnané zobecnění
> „AI cituje primární zdroje.“

**Problém:**  
Někdy ano, ale není to pravidlo. Jako univerzální věta je příliš silná.

**Návrh opravy:**  
„Vlastní data a konkrétní čísla mohou zvýšit šanci, že bude obsah pro AI odpovědi zajímavější a citovatelnější.“

---

### [TIP] `curl -I https://vasweb.cz/llms.txt musí vrátit HTTP 200` je funkční, ale neplné
> „Ověřte: `curl -I https://vasweb.cz/llms.txt` musí vrátit HTTP 200.“

**Problém:**  
200 je dobrý základ, ale neříká nic o tom, zda soubor opravdu obsahuje očekávaný text.

**Návrh opravy:**  
Doplnit krátce:  
„Nejen HTTP 200, ale i správný obsah souboru při otevření v prohlížeči nebo přes `curl` bez `-I`.“

---

## 2) Brand voice a slovník

### [BLOCKER] Opakované použití zakázaného termínu „crawler / crawlery / bot“ bez českého kontextu
> „AI crawlery“  
> „citační boty“  
> „Block AI Bots toggle“  
> „botům“

**Problém:**  
Zadání výslovně zakazuje „crawler/bot“ bez kontextu a chce „vyhledávací robot“. Článek to porušuje opakovaně.

**Návrh opravy:**  
Nahradit systematicky:
- „AI crawlery“ → „AI vyhledávací roboti“ nebo „AI user-agenti“
- „citační boty“ → „roboti používaní pro AI odpovědi“ / „AI vyhledávací roboti pro odpovědi“
- „botům“ → „vyhledávacím robotům“

Poznámka: V názvech produktů nebo funkcí může zůstat originální název, ale hned s českým vysvětlením.

---

### [WARNING] Nepřeložené anglicismy bez vysvětlení
> „toggle“  
> „WAF“  
> „free plán“  
> „UX“  
> „managed WordPress hosting“  
> „staging web“

**Problém:**  
Tutorial pro českého majitele/admina by měl být srozumitelnější a méně agenturní.

**Návrh opravy:**  
- „toggle“ → „přepínač“
- „WAF“ → „webový aplikační firewall (WAF)“
- „free plán“ → „bezplatná verze“
- „UX“ → „uživatelské prostředí“
- „managed WordPress hosting“ → „spravovaný WordPress hosting“
- „staging web“ → „testovací kopie webu“

---

### [WARNING] Nevhodné používání „schema“ v textu
> „Review schema.“  
> „Schema.org Validator“

**Problém:**  
„schema markup“ je sice zakázané explicitně, ale i zde je lepší držet konzistentně český slovník. `Schema.org Validator` je název nástroje, ten může zůstat; „Review schema“ už ne.

**Návrh opravy:**  
- „Review schema“ → „strukturovaná data typu Review“
- „Schema.org Validator“ ponechat jako název nástroje, případně doplnit „validátor strukturovaných dat“

---

### [WARNING] „granular pravidla“ je nevhodný anglicismus
> „Pro AI SEO doporučujeme granular pravidla“

**Návrh opravy:**  
„jemnější pravidla“ nebo „podrobnější pravidla po jednotlivých user-agentech“

---

### [TIP] „AI SEO“ je v pořádku, ale občas by pro srozumitelnost pomohlo doplnit český popis
> „AI SEO“

**Návrh opravy:**  
Při prvním výskytu třeba:  
„AI SEO, tedy úpravy webu pro viditelnost v AI odpovědích a AI vyhledávání“

---

## 3) Citovatelnost pro AI

### [WARNING] `answer` je příliš dlouhá a není optimálně samostatná
> `answer: "AI SEO na WordPressu znamená kombinaci čtyř kroků: ..."`

**Problém:**  
Je to zhruba nad cílovým rozsahem 40–60 slov a výčtem míchá kroky, nástroje i konkrétní názvy. Samostatně dává smysl, ale je přeplněná.

**Návrh opravy:**  
Zkrátit na 40–60 slov a nechat jen definici + hlavní kroky. Např.:  
„AI SEO na WordPressu je nastavení webu tak, aby mu AI systémy lépe rozuměly a mohly ho použít v odpovědích. Zahrnuje správně nastavený SEO plugin, strukturovaná data, llms.txt, neblokované relevantní AI user-agenty v robots.txt a dobré Core Web Vitals.“

---

### [WARNING] Prvních ~100 slov těla není dostatečně „odpověďových“
> „WordPress podle dlouhodobých odhadů žene podstatnou část všech webů…“

**Problém:**  
Úvod začíná statistikou o podílu WordPressu místo přímé definice a postupu. Pro AI citovatelnost má první odstavec spíš rovnou odpovědět na „co je AI SEO na WordPressu a co nastavit“.

**Návrh opravy:**  
První odstavec přestavět tak, aby začínal definicí:  
„AI SEO na WordPressu je soubor nastavení, která pomáhají AI systémům lépe pochopit a použít obsah webu…“  
Až potom zmínit podíl WordPressu.

---

### [TIP] FAQ je z větší části dobré a sebestačné
> FAQ sekce

**Pozitivní potvrzení:**  
Otázky jsou reálné, odpovědi většinou samostatně srozumitelné. To je dobré.

---

### [WARNING] Některé FAQ odpovědi jsou zbytečně kategorické
> „Pro AI SEO ho doporučujeme nezapínat.“

**Problém:**  
Bez kontextu to působí univerzálně. Některé weby mohou mít legitimní důvod AI přístup blokovat.

**Návrh opravy:**  
„Pokud chcete zvýšit šanci na citace v AI odpovědích, obvykle není vhodné tento přepínač zapínat.“

---

## 4) SEO

### [WARNING] Title je příliš dlouhý
> `title: "AI SEO na WordPressu: kompletní setup pro rok 2026"`

**Problém:**  
Titulek je pravděpodobně nad doporučeným rozsahem 50–60 znaků.

**Návrh opravy:**  
Zkrátit a ponechat klíčové slovo vpředu. Např.:
- „AI SEO na WordPressu: nastavení pro 2026“
- „AI SEO na WordPressu: praktický návod 2026“

---

### [TIP] Meta description je v pořádku
> `description: "Jak nastavit WordPress pro AI vyhledávání: llms.txt, robots.txt pro AI crawlery, strukturovaná data a performance. Praktický návod pro CZ weby."`

**Pozitivní potvrzení:**  
Délka i relevance jsou použitelné. Jen upravit slovník:
- „AI crawlery“ → „AI vyhledávací roboti“
- „performance“ → „rychlost webu“ / „výkon webu“

---

### [TIP] Slug je dobrý
> `slug: "ai-seo-wordpress"`

**Pozitivní potvrzení:**  
Krátký, smysluplný, přesně k tématu.

---

### [WARNING] Chybí interní odkaz z těla na relevantní pilíř / související obsah, CTA je až úplně dole
> V těle nejsou žádné interní odkazy kromě finální CTA.

**Problém:**  
Článek sice končí CTA správně, ale během textu nevede na související vysvětlení nebo produkt. U tutorialu by alespoň jeden přirozený interní odkaz v těle pomohl.

**Návrh opravy:**  
Doplnit 1–2 interní odkazy tam, kde dávají smysl:
- u llms.txt na článek / pilíř o llms.txt
- u robots.txt pro AI na relevantní návod
- případně měkký odkaz na `/pack/` u sekce „Vzorová šablona robots.txt…“

Ne obecně, ale přímo tam, kde čtenář řeší šablonu a checklist.

---

### [TIP] H2/H3 struktura je logická
**Pozitivní potvrzení:**  
Struktura sekcí dává smysl, postup je přehledný.

---

## 5) Aktuálnost k roku 2026

### [WARNING] Místy se míchá 2026 s neukotvenými formulacemi
> „podle dlouhodobých odhadů“  
> „rychle roste“  
> „podle některých analýz“

**Problém:**  
Některé formulace nejsou ukotvené k červnu 2026 a působí vágně.

**Návrh opravy:**  
Kde jsou čísla nebo trendy, doplnit „k červnu 2026“ nebo formulaci zmírnit.  
Např.:
- „k červnu 2026 patří mezi hlavní…“
- „podle veřejně dostupných dat k červnu 2026…“

---

### [WARNING] „od roku 2024 přepisuje robots.txt“ je potřeba opatrnější formulace
> „Cloudflare … od roku 2024 přepisuje robots.txt“

**Problém:**  
Směr tvrzení odpovídá zadání, ale formulace je moc absolutní. Pro audit bezpečnější je popsat efekt pro přístup AI user-agentů, ne technickou implementaci bez nuance.

**Návrh opravy:**  
„Cloudflare přepínač Block AI Bots od roku 2024 může přebít vaše zamýšlené nastavení přístupu AI user-agentů, proto je potřeba ho při AI SEO zkontrolovat.“

Pokud chcete držet zadané tvrzení doslova, tak alespoň dodat „v praxi“.

---

## 6) CTA

### [TIP] Závěrečné CTA je správně směrované
> „AI SEO Wireframe Pack za 1 490 Kč“ / „AI SEO audit za 9 990 Kč“

**Pozitivní potvrzení:**  
Tohle odpovídá zadání. Primární produkt je Pack, sekundární Audit. Správně.

---

### [WARNING] CTA by mělo být víc navázané na obsah tutorialu
> „… obsahuje checklist… vzor llms.txt, šablonu robots.txt…“

**Problém:**  
Je funkční, ale může být ještě těsněji svázané s tím, co článek řešil krok za krokem.

**Návrh opravy:**  
Doplnit explicitní návaznost na kroky z článku:  
„Pokud nechcete jednotlivé kroky skládat ručně, Pack za 1 490 Kč obsahuje přesně ty šablony a checklisty, které tento návod popisuje…“

---

## Shrnutí nejdůležitějších oprav před publikací

1. **Přepracovat pasáže o robots.txt** — nepsat, že je nutné „explicit Allow“ pro všechny; vysvětlit, že klíčové je relevantní user-agenty neblokovat a výjimky řešit při restriktivních pravidlech.  
2. **Opravit terminologii** — nahradit „crawlers/bots/toggle/WAF/free plán/UX/managed hosting“ českými nebo vysvětlenými výrazy.  
3. **Zjemnit a zpřesnit sporné claimy** — zejména „Lighthouse Agentic Browsing“, „čtvrtletní aktualizace“, „AI cituje primární zdroje“.  
4. **Zpřesnit Google-Extended** — nepopisovat ho jako běžný „crawler“.  
5. **Zkrátit a zpřesnit title a answer**, aby lépe fungovaly pro SEO i AI citovatelnost.

Po těchto úpravách bude článek výrazně bezpečnější a kvalitnější.