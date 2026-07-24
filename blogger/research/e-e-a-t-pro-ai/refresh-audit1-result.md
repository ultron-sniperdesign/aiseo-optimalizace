## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrý základ: odpověď ve frontmatteru je citovatelná, titulek má klíčové slovo na začátku, CTA vede na konkrétní produkty a interní prolinkování je silné. Před publikací ale vyžaduje opravy kvůli zakázanému slovníku, několika příliš absolutním tvrzením o AI a nedoloženým claimům o českém trhu.

---

## Nálezy a opravy

### [BLOCKER] Zakázaný termín „schema markup“

**Citace:**

> „Stačí přidat schema markup“

Tento termín je ve slovníku webu výslovně zakázaný.

**Návrh opravy:**

Změnit na:

> „Stačí přidat strukturovaná data“

A upravit i `fix` / vysvětlení tak, aby zůstalo česky:

> „Strukturovaná data jen popisují, co na webu reálně je.“

---

### [WARNING] Nekonzistentní používání „schema“ místo českého slovníku

**Citace:**

> „Organization schema“  
> „Person schema se sameAs“  
> „Organization schema, jednotná identita“

I když nejde vždy o přesný zakázaný výraz „schema markup“, tónově to padá do anglického SEO žargonu. Pro tento web má být preferované „strukturovaná data“.

**Návrh opravy:**

- „Organization schema“ → „strukturovaná data Organization“
- „Person schema se sameAs“ → „strukturovaná data Person se sameAs“
- anchor text odkazu `Organization schema` změnit na „strukturovaná data Organization“  
  URL může zůstat beze změny, pokud existuje.

---

### [WARNING] Meta description je pravděpodobně přes limit 160 znaků

**Citace:**

> `description: "Co je E-E-A-T, odkud pochází, jak doložit každou ze čtyř složek a kde platí vyšší laťka YMYL. Velký průvodce důvěryhodností pro Google i AI — bez mýtů o skóre."`

Popis má cca 161 znaků včetně mezer a interpunkce. Požadavek je 70–160 znaků.

**Návrh opravy:**

Například:

> `Co je E-E-A-T, jak doložit čtyři složky a proč u YMYL platí vyšší laťka. Průvodce důvěryhodností pro Google i AI bez mýtů.`

---

### [WARNING] Přehnané tvrzení o tom, že AI „neumí napodobit“ zkušenost

**Citace:**

> „První E je odpověď na otázku ‚dělal to autor doopravdy?‘ — a je to složka, kterou AI obsah neumí napodobit.“

AI umí zkušenost stylisticky napodobit nebo si ji vygenerovat. Neumí ji skutečně mít. Současná formulace je fakticky nepřesná.

**Návrh opravy:**

> „První E je odpověď na otázku ‚dělal to autor doopravdy?‘ — AI může zkušenost stylisticky napodobit, ale nemá vlastní praxi. Proto je potřeba zkušenost doložit konkrétními důkazy.“

---

### [WARNING] Absolutní tvrzení o generickém obsahu a selháních

**Citace:**

> „Generický obsah selhání nepopisuje — nemá odkud.“

Generovaný nebo generický obsah může selhání popisovat, ale často jen obecně nebo smyšleně. Současná věta je příliš absolutní.

**Návrh opravy:**

> „Generický obsah selhání obvykle popisuje povrchně nebo smyšleně. Poctivé ‚tudy ne‘ s konkrétním kontextem je silný signál reálné praxe.“

---

### [WARNING] AI systémy jsou popsány příliš jednotně a jistě

**Citace:**

> „AI systémy, které skládají odpovědi z webových zdrojů, řeší identickou otázku — komu věřit — a opírají se o tytéž ověřitelné signály…“

Není doložitelné, že všechny AI systémy pracují „s týmiž“ signály. Jednotlivé systémy mají odlišné mechanismy výběru, retrievalu, citací a ověřování. Bez zdroje je to overclaim.

**Návrh opravy:**

> „AI vyhledávače a odpovědní systémy, pokud pracují s webovými zdroji, řeší podobnou otázku — kterému zdroji dát přednost. Pomáhají jim ověřitelné signály, například jasný autor, transparentní provozovatel, zmínky z jiných webů a shoda tvrzení s důvěryhodnými zdroji.“

---

### [WARNING] Antropomorfní a nepřesná formulace „model si ověřuje“

**Citace:**

> „model si ověřuje, jestli se zdroj objevuje i jinde a v jakém kontextu“

Jazykový model sám o sobě typicky „neověřuje“ jako člověk. U AI vyhledávání jde spíš o kombinaci vyhledávání, retrievalu, hodnocení zdrojů, citací a generování odpovědi.

**Návrh opravy:**

> „AI vyhledávací systém může při práci se zdroji zohledňovat, jestli se značka nebo autor objevují i jinde a v jakém kontextu.“

---

### [WARNING] Nedoložené tvrzení o českém trhu

**Citace:**

> „V českém prostředí je konkurence doloženého obsahu řádově menší než v angličtině…“  
> „…signály, které tu má jen zlomek webů.“

Tvrzení „řádově menší“ a „jen zlomek webů“ vyžadují data. Bez nich jde o nepodložený marketingový claim.

**Návrh opravy:**

Buď doložit vlastním měřením / auditem vzorku webů, nebo změkčit:

> „V českém prostředí bývá u řady témat stále méně obsahu s jasným autorem, vlastními daty a transparentním provozovatelem než v silně konkurenčních anglických výsledcích.“

---

### [WARNING] Přehnané tvrzení „AI je cituje“

**Citace:**

> „vlastních datech a zkušenosti z českého trhu — ta nikdo jiný nemá a AI je cituje“

To zní jako příslib citace AI systémy. Bez měření nebo kontextu je to příliš jisté.

**Návrh opravy:**

> „vlastních datech a zkušenosti z českého trhu — ta nikdo jiný nemá a mohou zvýšit šanci, že je AI systémy použijí jako zdroj.“

---

### [WARNING] Silné tvrzení o Redditu bez ukotvení

**Citace:**

> „Reddit a diskuse jsou pro AI modely silný zdroj“

To je příliš obecné. Některé AI systémy mohou diskusní obsah využívat nebo citovat, ale nelze to paušalizovat na „AI modely“.

**Návrh opravy:**

> „Diskusní platformy a komunitní zdroje mohou být pro některé AI vyhledávače důležitým doplňkovým signálem, hlavně u zkušenostních a názorových dotazů.“

---

### [WARNING] Tvrzení o recenzních webech je příliš obecné

**Citace:**

> „recenzní weby a srovnávače AI cituje, i když jim lidská návštěvnost klesá“

Bez dat je zde problém ve dvou částech: že je AI cituje a že jim lidská návštěvnost klesá.

**Návrh opravy:**

> „recenzní weby a srovnávače mohou být pro AI odpovědi užitečné jako externí zdroj reputace, pokud obsahují ověřitelné informace a reálné hodnocení.“

Pokud máte vlastní data o poklesu návštěvnosti, přidat zdroj / odkaz.

---

### [WARNING] „Čerstvost je samostatný signál“ je neukotvené

**Citace:**

> „čerstvost je samostatný signál“

U Googlu je čerstvost silně závislá na typu dotazu. U AI odpovědí nelze obecně říct, že čerstvost je samostatný signál pro všechny situace.

**Návrh opravy:**

> „u témat, kde se informace rychle mění, může pravidelná aktualizace zvýšit důvěryhodnost i použitelnost obsahu.“

---

### [WARNING] Formulace u YMYL je zbytečně absolutní

**Citace:**

> „anonymní článek o investování nebo léčbě nemá šanci, ať je napsaný sebelíp.“

To je příliš tvrdé a připomíná nepřímý ranking claim. Lepší je držet se QRG: anonymita u YMYL výrazně snižuje důvěryhodnost, ale nelze garantovat, že „nemá šanci“.

**Návrh opravy:**

> „Anonymní článek o investování nebo léčbě bude u YMYL témat obtížněji obhajovat důvěryhodnost, i když je stylisticky dobře napsaný.“

---

### [WARNING] Chybí přesnější ukotvení změn v Quality Rater Guidelines

**Citace:**

> „V prosinci 2022, krátce po spuštění ChatGPT, přibylo druhé E (Experience).“  
> „V roce 2025 přibyla pravidla pro hodnocení AI generovaného obsahu…“

Zadaná ověřená fakta jsou přesnější: Experience bylo přidáno 15. 12. 2022; leden 2025 přidal pravidla pro low-effort AI obsah; září 2025 přejmenovalo „YMYL Society“ na „YMYL Government, Civics & Society“.

**Návrh opravy:**

Upravit na přesnější formulaci:

> „Google přidal Experience do E-E-A-T 15. 12. 2022. V lednu 2025 QRG doplnily pravidla pro low-effort AI obsah s minimální lidskou přidanou hodnotou, který může spadat do nejnižší kvality. Verze ze září 2025 pak přejmenovala kategorii ‚YMYL Society‘ na ‚YMYL Government, Civics & Society‘.“

---

### [WARNING] Chybí přímý odkaz na oficiální QRG

**Citace:**

> „Search Quality Rater Guidelines jsou manuál… aktuální verze ze září 2025 má 182 stran.“

Článek stojí na QRG, ale v dodaném textu není přímý externí odkaz na oficiální dokument Googlu. U hub článku o E-E-A-T je to slabina důvěryhodnosti.

**Návrh opravy:**

Na první výskyt „Search Quality Rater Guidelines“ přidat externí odkaz na oficiální Google dokument / stránku s PDF. Ideálně doplnit poznámku:

> „V článku vycházíme z veřejné verze Google Search Quality Rater Guidelines ze září 2025.“

---

### [WARNING] „Nezávisle posoudit“ v CTA může být zavádějící

**Citace:**

> „Pokud chcete nezávisle posoudit, jak si web stojí… pomůže produktový AI SEO audit za 9 990 Kč“

Audit prodává provozovatel webu, takže „nezávisle“ může znít zavádějícím způsobem. Pokud tím myslíte „externě vůči internímu týmu klienta“, je potřeba to říct přesněji.

**Návrh opravy:**

> „Pokud chcete odborně posoudit, jak si web stojí s důvěryhodností a viditelností v AI, pomůže produktový AI SEO audit za 9 990 Kč.“

---

### [TIP] Frontmatter answer je dobrý, ale poslední věta je mírně hodnotící

**Citace:**

> „V éře AI obsahu na něm záleží víc než dřív.“

Answer má 56 slov, začíná definicí a dává samostatný smysl — to je správně. Poslední věta je ale spíš interpretační claim.

**Návrh jemného zpřesnění:**

> „V éře generovaného obsahu pomáhá odlišit ověřitelný zdroj od anonymního nebo zaměnitelného textu.“

---

### [TIP] Pro cílový dotaz „co je E-E-A-T“ by pomohla krátká sekce „E-E-A-T vs. E-A-T“

**Citace / stav:**

Článek vysvětluje přidání Experience, ale nemá samostatnou podsekci pro rozdíl E-A-T vs. E-E-A-T.

Pro hlavní průvodce clusteru je to vhodné, protože lidé často hledají starší variantu E-A-T a chtějí vědět, co se změnilo.

**Návrh opravy:**

Doplnit krátkou H2 nebo H3 sekci po úvodní definici:

> „E-E-A-T vs. E-A-T: co se změnilo v roce 2022“

A uvést stručně:

- původně E-A-T,
- 15. 12. 2022 přidáno Experience,
- Trust zůstává nejdůležitější složkou.

---

### [TIP] Slug je přijatelný pro refresh, ale není ideální pro cílový dotaz

**Citace:**

> `slug: "e-e-a-t-pro-ai"`

Pro cílový dotaz „co je E-E-A-T“ by byl přesnější slug například:

> `co-je-e-e-a-t`

Protože jde ale o refresh existujícího článku, změna URL může být zbytečné riziko.

**Návrh opravy:**

- Pokud URL už má historii a odkazy: slug ponechat.
- Pokud se článek převádí na hlavní hub a URL lze změnit bezpečně: použít `/blog/co-je-e-e-a-t/` a nastavit 301 redirect ze staré URL.

---

## Co je v pořádku

- **Titulek**: má klíčové slovo na začátku a délka je v požadovaném rozmezí.
- **Krátká odpověď**: splňuje požadavek 40–60 slov a začíná definicí.
- **Prvních ~100 slov těla**: funguje jako samostatná odpověď na „co je E-E-A-T“.
- **FAQ**: otázky jsou reálné a odpovědi většinou sebestačné.
- **CTA**: vede na konkrétní produkty s cenou — AI SEO audit 9 990 Kč a AI SEO Wireframe Pack 1 490 Kč.