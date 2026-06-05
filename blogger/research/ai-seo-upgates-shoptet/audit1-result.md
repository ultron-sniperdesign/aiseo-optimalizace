## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je tematicky dobře zacílený, má relevantní CTA, dobré interní odkazy a drží se konkrétních platforem Shoptet/Upgates. Před publikací ale potřebuje opravit několik věcných nepřesností a absolutních formulací — hlavně kolem AI robotů, Google-Extended, automatických strukturovaných dat a příliš jistých tvrzení typu „AI cituje / vytahuje“.

---

## Nálezy a opravy

### [BLOCKER] Nepřesné doporučení k AI robotům v robots.txt

**Problémové místo:**

> „Pro AI vyhledávání vědomě povolte AI vyhledávací roboty (GPTBot od OpenAI, ClaudeBot od Anthropic, PerplexityBot, Google-Extended).“

A také:

> „Otevřete cestu AI vyhledávacím robotům — v robots.txt vědomě povolte GPTBot, ClaudeBot, PerplexityBot a Google-Extended.“

**Problém:**  
Google-Extended není klasický vyhledávací robot. Je to řídicí token v robots.txt pro využití obsahu v některých AI funkcích Google, ne crawler typu „přijde a načte stránku“. U OpenAI je navíc potřeba rozlišovat GPTBot, OAI-SearchBot a ChatGPT-User podle účelu. Tvrzení je pro tutorial příliš zjednodušené a může vést ke špatnému nastavení.

**Návrh opravy:**

> „V robots.txt vědomě nastavte přístup pro AI služby podle účelu. U OpenAI rozlišujte GPTBot, OAI-SearchBot a ChatGPT-User; u Perplexity PerplexityBot; u Anthropic ClaudeBot. Google-Extended není běžný crawler, ale pravidlo pro využití obsahu v AI funkcích Google. Neexistuje univerzálně správné nastavení — rozhodnutí závisí na tom, zda chcete obsah poskytovat AI systémům.“

V CTA odkazu na návod ponechat:

> „Detailní rozdíly a příklady pravidel řeší [návod na robots.txt pro AI](/blog/ai-crawler-robots-txt/).“

---

### [BLOCKER] Absolutní tvrzení „technický základ je hotový“ je příliš silné

**Problémové místo:**

> „Technika je hotová, rozhoduje obsah a reputace.“

A také:

> „Technický základ je u Shoptet i Upgates hotový.“

**Problém:**  
U obou platforem je dobrý výchozí technický základ, ale „hotový“ je příliš absolutní. Reálně záleží na šabloně, doplňcích, úpravách, tarifu, variantách produktů, filtraci a tom, zda data skutečně odpovídají obsahu stránky.

**Návrh opravy:**

> „Technický základ bývá u Shoptetu i Upgates z velké části připravený; rozhodující rozdíl pak často dělá obsah, FAQ, recenze a reputace mimo web.“

Ve frontmatter `answer` upravit poslední větu:

> „Technický základ je obvykle připravený, ale o viditelnosti v AI vyhledávání často rozhoduje obsah a reputace.“

---

### [WARNING] Používání slova „schema“ je mimo preferovaný slovník značky

**Problémové místo:**

> „Product schema“  
> „BreadcrumbList a WebSite schema“  
> „FAQPage schema“  
> „Doplnění FAQ schema“

**Problém:**  
Zakázaný termín je výslovně „schema markup“, ten se v článku nevyskytuje. Přesto článek opakovaně používá anglické „schema“ jako zkratku. Podle brand voice má být preferovaný termín „strukturovaná data“. U cílovky e-shopařů je navíc „typ Product ve strukturovaných datech“ srozumitelnější.

**Návrh opravy:**

- „Product schema“ → „typ Product ve strukturovaných datech“
- „BreadcrumbList a WebSite schema“ → „typy BreadcrumbList a WebSite ve strukturovaných datech“
- „FAQPage schema“ → „typ FAQPage ve strukturovaných datech“
- „Doplnění FAQ schema“ → „Doplnění strukturovaných dat pro FAQ“

Příklad opravy FAQ odpovědi:

> „Obě platformy ve výchozím stavu generují strukturovaná data typu Product, BreadcrumbList a WebSite.“

---

### [WARNING] Tvrzení o Product datech je příliš obecné

**Problémové místo:**

> „Product schema (cena, dostupnost, hodnocení)“

A také:

> „Product (cena, dostupnost, hodnocení), BreadcrumbList a WebSite schema generuje obě platformy bez zásahu.“

**Problém:**  
Product strukturovaná data ano, ale cena, dostupnost a hodnocení nemusí být vždy kompletní. Hodnocení závisí na tom, jestli e-shop sbírá a zobrazuje recenze/hodnocení způsobem, který se do strukturovaných dat propíše. Tvrzení „bez zásahu“ je moc široké.

**Návrh opravy:**

> „Obě platformy obvykle generují strukturovaná data typu Product, BreadcrumbList a WebSite. U Product dat se cena a dostupnost většinou propisují automaticky; hodnocení závisí na konkrétním nastavení recenzí, šabloně a doplňcích.“

---

### [WARNING] Kanonizace filtrů, variant a stránkování je popsána příliš jistě

**Problémové místo:**

> „platformy automaticky řeší canonical u variant, stránkování a filtrů.“

**Problém:**  
Zadání potvrzuje, že obě platformy řeší kanonizaci. Detail „u variant, stránkování a filtrů“ už je ale příliš konkrétní a může se lišit podle nastavení, šablony, parametrů URL a doplňků.

**Návrh opravy:**

> „Obě platformy řeší kanonizaci duplicitních nebo podobných URL. U variant, filtrů a stránkování je ale vhodné konkrétní canonical zkontrolovat na reálných URL.“

---

### [WARNING] Tvrzení „AI cituje obsah, ne nastavení v adminu“ je zbytečně absolutní

**Problémové místo:**

> „AI cituje obsah, ne nastavení v adminu.“

**Problém:**  
Dobrá myšlenka, ale formulace je příliš kategorická. Technické nastavení ovlivňuje dostupnost, indexovatelnost a interpretaci obsahu. Lepší je říct, že samotné admin nastavení nestačí.

**Návrh opravy:**

> „AI systémy potřebují dostupný a srozumitelný obsah; samotné nastavení v adminu k citaci nebo zmínce nestačí.“

---

### [WARNING] Formulace „tu AI vytahuje“ slibuje víc, než lze doložit

**Problémové místo:**

> „Na začátku produktu a kategorie dejte krátkou odpověď „pro koho a kdy" — tu AI vytahuje.“

A také:

> „Tu AI vytahuje jako úryvek, detail nechte níž.“

**Problém:**  
Zní to deterministicky. Nelze slíbit, že AI úryvek opravdu vytáhne. Bezpečnější claim má být „může zvýšit šanci“.

**Návrh opravy:**

> „Na začátku produktu a kategorie dejte krátkou odpověď „pro koho a kdy“. Takový odstavec může zvýšit šanci, že AI systém obsah správně pochopí a použije ve shrnutí.“

---

### [WARNING] „AI při sestavení odpovědi často čerpá“ potřebuje opatrnější formulaci

**Problémové místo:**

> „AI při sestavení odpovědi často čerpá ze zdrojů třetích stran.“

A také:

> „Tyto signály se promítají i do toho, jak AI nástroje značku zmiňují a jak ji zařazují mezi alternativy.“

**Problém:**  
Směr je správný, ale formulace „se promítají“ zní jako jistý rankingový mechanismus. U AI odpovědí je to hůř ověřitelné než u klasického SEO.

**Návrh opravy:**

> „AI nástroje mohou při odpovědích pracovat i se zdroji mimo váš web. Recenze a zmínky na Heurece, Zboží, Google Recenzích nebo oborových portálech proto pomáhají ověřitelnosti značky a mohou zvýšit šanci, že bude zmíněna mezi relevantními alternativami.“

---

### [WARNING] Titulek je delší než doporučených 50–60 znaků

**Problémové místo:**

> `title: "AI SEO na Upgates a Shoptetu v roce 2026: co je hotové a co doplnit"`

**Problém:**  
Titulek má přibližně 67 znaků. Cílové klíčové slovo je na začátku, což je dobře, ale délka přesahuje zadání.

**Návrh opravy — varianta cca 52 znaků:**

> `title: "AI SEO pro Upgates a Shoptet 2026: hotové vs. doplnit"`

Nebo přirozenější varianta cca 56 znaků:

> `title: "AI SEO Upgates a Shoptet 2026: co řeší platformy"`

Doporučil bych první variantu, protože lépe odpovídá obsahu „co je hotové / co doplnit“.

---

### [WARNING] Potenciální střet zájmů není transparentně uveden

**Problémové místo:**

Článek porovnává Upgates a Shoptet, ale v textu není uvedeno, že provozovatel Sniperdesign je Zlatý partner Upgates od roku 2016.

**Problém:**  
V zadání je uvedeno, že Sniperdesign je Zlatý partner Upgates. Pokud článek porovnává Upgates a Shoptet a zároveň nabízí „nezávislý audit“, je vhodné vztah k Upgates transparentně přiznat. Jinak může působit jako skrytá preference platformy.

**Návrh opravy:**  
Doplnit krátkou poznámku například za úvod nebo do závěru:

> „Poznámka k transparentnosti: Sniperdesign je Zlatý partner Upgates od roku 2016 a zároveň pracuje i na SEO projektech pro e-shopy na Shoptetu. Srovnání níže proto držíme prakticky: kde se co nastavuje, co platformy řeší automaticky a co musí doplnit provozovatel e-shopu.“

---

### [WARNING] „Nejlepší X“ v doporučení pro titulky může působit jako nepodložený claim

**Problémové místo:**

> „doplňte na klíčových produktech a kategoriích titulky obsahující dotazy typu „pro koho je X" nebo „nejlepší X".“

**Problém:**  
„Nejlepší X“ je v brand pravidlech rizikový výraz, pokud web nemá férové srovnání a metodiku. Jako dotaz uživatele je v pořádku, ale do titulku produktu/kategorie může působit jako nepodložený superlativ.

**Návrh opravy:**

> „doplňte na klíčových produktech a kategoriích titulky a úvodní texty podle reálných dotazů, například „pro koho je X“, „jak vybrat X“ nebo „X pro Y“. Výrazy typu „nejlepší X“ používejte jen u férových srovnávacích stránek s jasnými kritérii.“

---

### [TIP] Frontmatter `answer` je citovatelný, ale zjemnit absolutní závěr

**Problémové místo:**

> `answer: "AI SEO na Upgates a Shoptetu znamená využít, co obě platformy řeší automaticky ... Technika je hotová, rozhoduje obsah a reputace."`

**Co je dobře:**  
Answer má samostatný smysl, začíná definicí a má přibližně požadovaných 40–60 slov. To je dobré.

**Co opravit:**  
Závěr „Technika je hotová“ je příliš absolutní.

**Návrh opravy:**

> `answer: "AI SEO na Upgates a Shoptetu znamená využít technický základ, který obě platformy obvykle řeší automaticky — strukturovaná data, sitemap a kanonizaci — a doplnit obsahovou vrstvu pro AI: citovatelné popisy, FAQ na produktech a kategoriích, recenze a srovnávací obsah. Rozdíl často dělá obsah a reputace."`

---

### [TIP] Prvních 100 slov těla funguje dobře, jen potřebuje méně absolutní formulace

**Problémové místo:**

> „Shoptet i Upgates mají technický základ SEO řešený automaticky…“

**Co je dobře:**  
Úvodní odstavec je samostatně pochopitelný, hutný a odpovídá zadání tutorialu.

**Návrh jemné opravy:**

> „Shoptet i Upgates mají velkou část technického základu SEO řešenou automaticky — strukturovaná data typu Product, BreadcrumbList a WebSite, sitemap, kanonizaci a editovatelné robots.txt. Pro klasické vyhledávání je to dobrý startovací bod. Pro AI vyhledávání ale samotná technika nestačí: větší roli hraje srozumitelný obsah, struktura textů na produktech a kategoriích a reputace ze třetích zdrojů.“

---

### [TIP] FAQ jsou relevantní a sebestačné, ale jedna odpověď potřebuje věcnou korekci

**Problémové místo:**

> „Jak nastavit robots.txt v Upgates a Shoptetu pro AI roboty?“

**Co je dobře:**  
Otázka je reálná a odpověď je praktická.

**Co opravit:**  
Stejný problém jako výše: Google-Extended není AI vyhledávací robot a chybí rozlišení OpenAI crawlerů.

**Návrh opravy odpovědi:**

> „V adminu obou platforem můžete upravovat robots.txt podle možností konkrétního tarifu a nastavení. U AI služeb nerozhodujte jen podle názvu robota: OpenAI používá různé identifikátory pro různé účely, Perplexity má PerplexityBot a Google-Extended není běžný crawler, ale pravidlo pro využití obsahu v AI funkcích Google. Nastavení proto volte podle toho, zda chcete obsah zpřístupnit pro vyhledávání, citace nebo tréninkové/AI využití.“

---

### [TIP] CTA je splněné

**Dobré místo:**

> „pomůže produktový [AI SEO audit za 9 990 Kč](/audit/). Pokud chcete postupovat sami podle hotové předlohy, použijte [AI SEO Wireframe Pack](/pack/) za 1 490 Kč.“

**Hodnocení:**  
CTA je konkrétní, vede na produkty a není jen generické „kontaktujte nás“. Splňuje zadání. Lze ponechat.

---

### [TIP] SEO základ je jinak v pořádku

**Co je dobře:**

- Slug `ai-seo-upgates-shoptet` je smysluplný a odpovídá cílovému KW.
- Meta description má přibližně správnou délku a jasně shrnuje téma.
- Interní odkazy jsou relevantní: obecný e-commerce pilíř, robots.txt, srovnávací články, E-E-A-T, brand mentions, SEO pro AI.
- Struktura H2 je logická a odpovídá tutorial/how-to záměru.

**Nutná oprava v této oblasti:**  
Pouze zkrátit title dle nálezu výše.