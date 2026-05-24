## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jdou správným směrem, ale v článku pořád zůstávají formulace, které z Bingu dělají téměř nutnou „bránu“ pro ChatGPT. To je věcně příliš silné a bez doložení riskantní. Největší problém je kombinace tvrzení o ChatGPT + Bingu a několik stále přehnaných formulací o rychlosti IndexNow.

---

## Nálezy

### [BLOCKER] Bing je stále prezentovaný jako vstupní brána pro ChatGPT

**Problémové místo:**

> „Pro ChatGPT tak může být Bing důležitým kanálem, který přitom většina českých webů nijak neřeší.“

A hlavně:

> „Řešit jen Google — pro ChatGPT je vstupní bránou Bing.“

**Proč je to problém:**  
„Vstupní brána“ je pořád příliš definitivní formulace. ChatGPT Search / webové vyhledávání může pracovat s více zdroji a přesné zdrojování se může měnit. Bez uvedení zdroje je tvrzení nedoložitelné a působí jako overclaim.

**Návrh opravy:**

Nahradit:

> „pro ChatGPT je vstupní bránou Bing“

například:

> „pro ChatGPT může být Bing jedním z důležitých technických kanálů dohledatelnosti“

Nebo v celé odrážce:

> **Řešit jen Google** — u AI vyhledávání se vyplatí kontrolovat i Bing, protože podle dostupných informací může být jedním ze zdrojů pro dohledávání aktuálního webového obsahu.

---

### [BLOCKER] V FAQ zůstala formulace „vstupní podmínka dohledatelnosti“

**Problémové místo:**

> „Indexace v Bingu je vstupní podmínka dohledatelnosti, ne záruka citace.“

**Proč je to problém:**  
Tohle je přesně typ formulace, která měla být po 1. auditu zmírněna. „Vstupní podmínka“ naznačuje, že bez indexace v Bingu není dohledatelnost v ChatGPT možná, což nelze spolehlivě tvrdit.

**Návrh opravy:**

> „Indexace v Bingu je důležitá technická vrstva dohledatelnosti, ne záruka citace.“

Ještě bezpečnější:

> „Indexace v Bingu může odstranit jednu technickou překážku dohledatelnosti, neznamená ale záruku citace v ChatGPT.“

---

### [WARNING] Tvrzení o používání Bingu ChatGPT je stále bez zdroje

**Problémové místo:**

> „Podle dostupných informací může ChatGPT při webovém vyhledávání využívat Bing jako jeden z důležitých zdrojů…“

> „ChatGPT při webovém vyhledávání podle dostupných informací využívá i index Bingu.“

**Proč je to problém:**  
Formulace „podle dostupných informací“ je lepší než původní overclaim, ale v článku není žádný odkaz na zdroj. U takto citlivého tvrzení je to slabé — zvlášť u článku, který má edukovat o AI vyhledávání v roce 2026.

**Návrh opravy:**  
Buď doplnit zdroj přímo do textu, nebo formulaci ještě více zobecnit.

Možná úprava bez zdrojového odkazu:

> „U AI vyhledávání není vhodné spoléhat jen na Google. Bing je jeden z indexů, který se vyplatí technicky pokrýt, protože se v minulosti objevoval jako významný zdroj pro některé webové vyhledávací funkce v AI nástrojích.“

Pokud chcete ponechat konkrétní vazbu na ChatGPT, doporučuji doplnit odkaz na relevantní oficiální nebo důvěryhodný zdroj.

---

### [WARNING] IndexNow je místy pořád nadhodnocený

**Problémové místo:**

> „S IndexNow se oznámení odešle v řádu sekund a obsah se obvykle objeví v indexu rychleji, řádově v hodinách až dnech.“

**Proč je to problém:**  
Odeslání oznámení v řádu sekund je v pořádku. Ale „obsah se obvykle objeví v indexu rychleji, řádově v hodinách až dnech“ už je moc konkrétní a může vyvolat očekávání, které nelze garantovat.

**Návrh opravy:**

> „S IndexNow se oznámení odešle v řádu sekund a Bing může URL objevit nebo zpracovat dříve. Samotné zařazení do indexu ale závisí na kvalitě stránky, technickém stavu webu a rozhodnutí vyhledávače; přesný čas nelze garantovat.“

---

### [WARNING] „IndexNow zrychlí, co by jinak trvalo dny“ je pořád příliš silné

**Problémové místo:**

> „Spoléhat jen na sitemapu — IndexNow zrychlí, co by jinak trvalo dny.“

**Proč je to problém:**  
IndexNow nezrychluje indexaci jako takovou, ale oznámení změny URL. Bing pak může reagovat rychleji, ale nemusí.

**Návrh opravy:**

> „Spoléhat jen na sitemapu — IndexNow pomáhá Bingu rychleji zjistit, že se URL změnila.“

Nebo:

> „Spoléhat jen na sitemapu — IndexNow zrychluje oznámení změn, ne garantované zařazení do indexu.“

---

### [WARNING] „Dostat se do Bingu vás zviditelní“ slibuje víc než indexace znamená

**Problémové místo:**

> „Indexace není citace — dostat se do Bingu vás zviditelní, ale ChatGPT cituje podle relevance, aktuálnosti a důvěryhodnosti.“

**Proč je to problém:**  
Indexace sama o sobě neznamená viditelnost. Stránka může být v indexu, ale nemusí se zobrazovat na relevantní dotazy ani být využita AI nástrojem.

**Návrh opravy:**

> „Indexace není citace — dostat se do Bingu znamená, že stránka může být technicky dohledatelná, ale ChatGPT cituje podle relevance, aktuálnosti a důvěryhodnosti.“

---

### [WARNING] Meta description obsahuje lehce příliš přímou vazbu Bing → ChatGPT

**Problémové místo:**

> `description: "Proč je indexace v Bingu důležitá pro dohledatelnost v ChatGPT — a jak na to přes Bing Webmaster Tools a protokol IndexNow, krok za krokem."`

**Proč je to problém:**  
Popisek je délkou v pořádku, ale opět přímo tvrdí důležitost pro dohledatelnost v ChatGPT. Bez zdroje a s ohledem na proměnlivost AI vyhledávání je bezpečnější měkčí formulace.

**Návrh opravy:**

> `description: "Proč může indexace v Bingu pomoct s dohledatelností v AI vyhledávání — a jak nastavit Bing Webmaster Tools a IndexNow."`

---

### [WARNING] Title je kratší než požadovaných 50–60 znaků

**Problémové místo:**

> `title: "Bing SEO pro AI: indexace v Bingu krok za krokem"`

**Proč je to problém:**  
Titulek začíná klíčovým slovem, což je dobře, ale má přibližně 48 znaků. Zadání chce 50–60 znaků.

**Návrh opravy:**

> `title: "Bing SEO pro AI: indexace v Bingu krok za krokem 2026"`

Tím se zároveň lépe ukotví aktuálnost článku k roku 2026.

---

### [WARNING] V těle markdownu není explicitní H1

**Problémové místo:**

```markdown
## Bing SEO pro AI: proč řešit indexaci v Bingu
```

**Proč je to problém:**  
Pokud šablona webu automaticky vykreslí `title` jako H1, je to v pořádku. Pokud ne, článek začíná až H2 a chybí hlavní nadpis stránky.

**Návrh opravy:**  
Ověřit šablonu. Pokud CMS negeneruje H1 z frontmatteru, změnit první nadpis na:

```markdown
# Bing SEO pro AI: proč řešit indexaci v Bingu
```

Pokud H1 generuje šablona, nechat bez změny.

---

### [WARNING] U kontroly indexace je použitý možná nepřesný termín „pokrytí“

**Problémové místo:**

> „V Bing Webmaster Tools sledujte pokrytí a stav indexace.“

**Proč je to problém:**  
„Pokrytí“ je termín typický hlavně pro Google Search Console. V Bing Webmaster Tools může být pro uživatele praktičtější odkázat na konkrétní funkce typu URL Inspection / kontrola URL, Sitemaps nebo Index Explorer podle lokalizace rozhraní.

**Návrh opravy:**

> „V Bing Webmaster Tools sledujte stav sitemap, použijte kontrolu konkrétní URL a podle dostupnosti také přehled indexovaných stránek.“

---

### [WARNING] U robotů chybí Bingbot, přestože článek řeší indexaci v Bingu

**Problémové místo:**

> „ověřte, že v `robots.txt` zbytečně neblokujete relevantní vyhledávací roboty (například OAI-SearchBot od OpenAI).“

**Proč je to problém:**  
Pro článek o indexaci v Bingu je klíčový hlavně Bingbot. OAI-SearchBot je relevantní pro OpenAI, ale není primární robot pro indexaci v Bingu.

**Návrh opravy:**

> „ověřte, že v `robots.txt` zbytečně neblokujete relevantní vyhledávací roboty — zejména Bingbot pro Bing a podle strategie také OAI-SearchBot od OpenAI.“

---

### [TIP] „Bing“ ve statistikách není skutečná statistika a claim je měkký

**Problémové místo:**

```yaml
stats:
  - value: "Bing"
    label: "důležitý index pro dohledatelnost při AI vyhledávání"
```

**Proč je to problém:**  
Není to chyba blokující publikaci, ale karta „stats“ naznačuje faktický údaj. Tady jde spíš o interpretační claim bez zdroje.

**Návrh opravy:**

Buď změnit label na opatrnější:

```yaml
- value: "Bing"
  label: "index, který se vyplatí kontrolovat kvůli AI dohledatelnosti"
```

Nebo použít konkrétnější technický údaj:

```yaml
- value: "BWT"
  label: "místo pro kontrolu sitemap a indexace v Bingu"
```

---

### [TIP] Lehce hovorové formulace oslabují odborný tón

**Problémové místo:**

> „Tenhle návod ukazuje…“

> „Ať to nezní jako kouzlo:“

**Proč je to problém:**  
Není to zásadní chyba, ale brand voice má být věcný a srozumitelný, ne příliš hovorový.

**Návrh opravy:**

> „Tento návod ukazuje…“

A:

> „Co je důležité vědět:“

---

## Co je v pořádku

- Frontmatter `answer` má správnou délku, začíná definicí a samostatně dává smysl.
- Slug `bing-seo-pro-ai` je smysluplný.
- Meta description je délkou v pořádku, jen potřebuje zmírnit claim.
- Zakázané termíny typu „schema markup“, „answer block“ nebo „backlink profil“ se v textu nevyskytují.
- CTA je konkrétní a vede na relevantní produkty: Pack za 1 490 Kč a Audit za 9 990 Kč.
- Interní odkazy jsou tematicky relevantní.