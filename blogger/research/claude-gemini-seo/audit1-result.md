## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je obsahově dobře postavený a většina klíčových faktů odpovídá zadání pro rok 2026. Před publikací ale vyžaduje opravy kvůli zakázanému slovníku, několika příliš absolutním formulacím a drobným věcným zpřesněním u Gemini, Claude a Google-Extended.

---

## Nálezy a opravy

### [BLOCKER] Zakázaný / nevhodný slovník: „boti“, „crawlery“, „crawler“

**Problémové místo:**

> `value: "3 boti"`  
> `label: "AI crawlery čtou hlavně HTML, ne obsah z JavaScriptu"`  
> „AI crawlery čtou hlavně HTML…“  
> „Anthropic uvádí tři roboty: ClaudeBot (tréninkový crawler)…“

Podle brand pravidel se nemá používat „crawler/bot“ bez vysvětlení; preferovaný výraz je **„vyhledávací robot“**. Navíc „boti“ působí neformálně.

**Návrh opravy:**

- `value: "3 roboti"` → lépe: `value: "3 vyhledávací roboti"`
- `label: "AI crawlery čtou hlavně HTML, ne obsah z JavaScriptu"` →  
  `label: "Vyhledávací roboti AI čtou hlavně HTML; obsah z JavaScriptu nemusí vidět"`
- „AI crawlery čtou hlavně HTML…“ →  
  „Vyhledávací roboti AI čtou hlavně HTML…“
- „tréninkový crawler“ →  
  „tréninkový vyhledávací robot“

Oficiální názvy **ClaudeBot, Claude-User, Claude-SearchBot** ponechat, ale vždy je vysvětlit jako vyhledávací roboty / roboty Anthropic.

---

### [WARNING] Gemini je popsán příliš absolutně jako systém stojící na Google Search

**Problémové místo:**

> „Gemini je „grounded" v Google Search — vychází z toho, co Google indexuje a hodnotí.“

> „Gemini staví na Google Search…“

Tvrzení je v kontextu článku správným směrem, ale formulace je moc silná. Gemini může využívat Google Search / grounding, ale není vhodné naznačovat, že všechny odpovědi Gemini prostě kopírují to, co Google indexuje a řadí.

**Návrh opravy:**

Nahradit například:

> „Gemini se u odpovědí s webovým groundingem opírá o Google Search. Proto často těží z toho, co je v Googlu dohledatelné, autoritativní a dobře technicky zpracované. Neznamená to ale, že pořadí citací v Gemini přesně kopíruje klasické výsledky vyhledávání.“

Totéž zjemnit i ve frontmatteru a FAQ.

---

### [WARNING] „Gemini preferuje autoritativní zdroje“ zní jako potvrzený mechanismus

**Problémové místo:**

> „Gemini preferuje autoritativní a oficiální zdroje.“

Bez zdroje nebo opatrnější formulace to působí jako tvrdé tvrzení o interním mechanismu.

**Návrh opravy:**

> „Gemini se u webově podložených odpovědí často opírá o autoritativní, oficiální a dobře dohledatelné zdroje.“

Nebo:

> „Autoritativní a oficiální zdroje mají u Gemini obvykle lepší předpoklady k citaci.“

---

### [WARNING] Claude tendence je místy uvedená jako fakt, ne jako pozorování

**Problémové místo:**

> „Claude ani Gemini nevyžadují samostatnou strategii. Stačí solidní základ… u Clauda reputaci a recenze.“

> „Liší se: Gemini stojí na Google Search, Claude víc váží reputaci.“

> „U Clauda podle analýz váží ověřený obsah a důvěra víc.“

V hlavní sekci je správně uvedeno, že jde o „pozorovanou tendenci, ne oficiálně potvrzený mechanismus“. V boxech a chybách se ale hedge ztrácí.

**Návrh opravy:**

- „Claude víc váží reputaci“ →  
  „Claude podle dostupných analýz častěji pracuje se signály reputace“
- „u Clauda reputaci a recenze“ →  
  „u Clauda se vyplatí posílit reputaci a recenze“
- „váží ověřený obsah a důvěra víc“ →  
  „mohou hrát větší roli ověřené zdroje, recenze a důvěryhodnost značky“

---

### [WARNING] „Stačí solidní základ“ je příliš zjednodušující claim

**Problémové místo:**

> „Claude ani Gemini nevyžadují samostatnou strategii. Stačí solidní základ pro AI vyhledávání…“

„Stačí“ může znít jako příslib, že základ sám o sobě zajistí viditelnost. To je moc silné.

**Návrh opravy:**

> „Claude a Gemini většinou nevyžadují dvě oddělené strategie. Vyplatí se vyjít ze společného základu pro AI vyhledávání a potom doladit důrazy — u Gemini klasické SEO a autoritu, u Clauda reputaci a recenze.“

---

### [WARNING] Google-Extended je vysvětlený dobře, ale opt-out je formulovaný moc absolutně

**Problémové místo:**

> „Když Google-Extended zablokujete, opustíte využití v Gemini…“

> „Blokace Google-Extended tedy neznamená ztrátu rankingu, jen opt-out z Gemini.“

Tvrzení je směrně správné podle zadání, ale „opustíte využití v Gemini“ a „jen opt-out z Gemini“ jsou příliš absolutní. Lepší je držet se formulace, že Google-Extended řídí použití obsahu pro Gemini podle pravidel Googlu, ne klasické pozice.

**Návrh opravy:**

> „Když Google-Extended zablokujete, omezíte použití obsahu pro funkce Gemini řízené tímto pravidlem. Podle Googlu tím ale neovlivníte pozice v klasickém Vyhledávání — ty řeší Googlebot.“

A v boxu:

> „Blokace Google-Extended tedy podle Googlu neznamená ztrátu pozic v klasickém Vyhledávání, ale omezuje použití obsahu pro Gemini v rozsahu, který Google-Extended řídí.“

---

### [WARNING] Anglicismy „ranking“ a „rankovat“ neodpovídají věcnému tónu

**Problémové místo:**

> „Google-Extended (ne ranking)“

> „stránka může dál rankovat v Googlu“

Není to zakázaný termín, ale pro brand voice je lepší česky a srozumitelně.

**Návrh opravy:**

- „Google-Extended (ne ranking)“ →  
  „Google-Extended (ne pozice ve Vyhledávání)“
- „stránka může dál rankovat v Googlu“ →  
  „stránka se může dál zobrazovat na pozicích v Googlu“  
  nebo stručněji:  
  „stránka může dál získávat pozice v Googlu“

---

### [WARNING] „Rostoucí publikum“ je nedoložené tvrzení

**Problémové místo:**

> „Claude a Gemini jsou dvě AI platformy, na které se v SEO méně myslí — přitom mají rostoucí publikum.“

Bez dat nebo zdroje je „rostoucí publikum“ nedoložitelné. V zadání nejsou dodaná konkrétní čísla a článek se správně vyhýbá sporným statistikám, takže toto by mělo být buď doloženo, nebo přeformulováno.

**Návrh opravy:**

> „Claude a Gemini jsou dvě AI platformy, na které se v SEO často myslí méně než na ChatGPT nebo Perplexity — přitom mohou ovlivnit, kde a jak se značka v AI odpovědích objevuje.“

---

### [WARNING] „Poslední dílky platformové skládačky“ je nepřesné a zbytečně definitivní

**Problémové místo:**

> „Claude a Gemini jsou poslední dílky platformové skládačky.“

To může působit jako tvrzení, že tím je sada platforem kompletní. V AI vyhledávání se ale platformy rychle mění.

**Návrh opravy:**

> „Claude a Gemini doplňují platformovou skládačku AI vyhledávání.“

Nebo:

> „Claude a Gemini jsou další důležité dílky platformové skládačky.“

---

### [WARNING] FAQ otázky „Jak se dostat do odpovědí…“ zní příliš výsledkově

**Problémové místo:**

> „Jak se dostat do odpovědí Gemini?“

> „Jak se dostat do odpovědí Claude?“

Formulace může naznačovat, že existuje přímý postup, jak se do odpovědí dostat. Bezpečnější brand formulace je „zvýšit šanci“.

**Návrh opravy:**

- „Jak se dostat do odpovědí Gemini?“ →  
  „Jak zvýšit šanci na citaci v Gemini?“
- „Jak se dostat do odpovědí Claude?“ →  
  „Jak zvýšit šanci na citaci v Claude?“

Odpovědi samotné jsou jinak věcně dobré a dostatečně samostatné.

---

### [TIP] Krátká odpověď je dobrá, ale první věta obsahuje trochu vaty

**Problémové místo:**

> „Claude a Gemini jsou dvě AI platformy, na které se v SEO méně myslí.“

Krátká odpověď má 51 slov, tedy splňuje požadavek 40–60 slov a dává samostatný smysl. První věta ale může být fakticky hutnější.

**Návrh opravy:**

> „Claude je AI asistent od Anthropic a Gemini je AI platforma od Googlu.“

Poté navázat stávajícím vysvětlením:

> „Gemini se u webově podložených odpovědí opírá o Google Search…“

Tím se zvýší citovatelnost bez prodloužení odpovědi.

---

### [TIP] Výraz „grounded“ je vhodné hned česky vysvětlit

**Problémové místo:**

> „Gemini je „grounded" v Google Search…“

Termín je odborně použitelný, ale pro srozumitelný brand voice je lepší ho nenechat jako anglický výraz bez českého ukotvení.

**Návrh opravy:**

> „Gemini se u vybraných odpovědí opírá o Google Search, tedy používá webové výsledky jako podklad pro odpověď.“

Pokud chcete výraz „grounding“ ponechat kvůli odbornosti, dejte ho až do závorky:

> „…používá webové výsledky jako podklad pro odpověď (grounding).“

---

### [TIP] Formulace „HTML, ne obsah z JavaScriptu“ je moc černobílá

**Problémové místo:**

> „AI crawlery čtou hlavně HTML, ne obsah z JavaScriptu“

> „co je jen v JS, nemusí vidět“

Druhá formulace „nemusí vidět“ je správná. První label je ale absolutnější.

**Návrh opravy:**

> „Vyhledávací roboti AI čtou hlavně HTML; obsah dotvářený JavaScriptem nemusí vidět.“

Tím zůstane zachovaný důležitý technický point bez přehnaného zobecnění.

---

### [TIP] CTA je relevantní, ale může být akčnější a více navázaná na tutorial

**Problémové místo:**

> „Když chcete celý web připravit na AI vyhledávání podle hotové předlohy, pomůže AI SEO Wireframe Pack… Pro plán na míru je tu produktový AI SEO audit…“

CTA je konkrétní a vede na správné produkty, což je dobře. Pro tutorial článek by ale mohlo lépe navázat na provedené kroky.

**Návrh opravy:**

> „Chcete tyto principy převést do struktury konkrétních stránek? Začněte s [AI SEO Wireframe Packem](/pack/) za 1 490 Kč. Pokud potřebujete ověřit celý web včetně robots.txt, struktury obsahu a šancí na citace v AI, zvolte [AI SEO audit](/audit/) za 9 990 Kč.“

---

## Co je v pořádku

- Titulek má cca 56 znaků a klíčové téma je na začátku.  
- Meta description je v doporučeném rozsahu a odpovídá obsahu.  
- Slug `claude-gemini-seo` je smysluplný.  
- Struktura H2 je logická pro tutorial/how-to článek.  
- Interní odkazy dobře doplňují platformovou sadu a nekanibalizují audit.  
- `updated: "2026-05-27"` je k zadanému datu aktuální, ne budoucí.  
- CTA vede na konkrétní produkty Pack a Audit, ne na generické „kontaktujte nás“.