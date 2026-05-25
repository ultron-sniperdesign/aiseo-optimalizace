## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou částečně dostatečné: zmírnily hlavní overclaim „dostat se do AI odpovědí“ a CTA je už navázané na produkty. Zůstává ale několik věcných a formulačních problémů, hlavně opakované tvrzení o dostupnosti Google AI Mode v Česku od října 2025, příliš absolutní popis citací/pasáží a několik SEO/brand voice detailů.

---

## Nálezy

### [BLOCKER] Nedoložené tvrzení o dostupnosti Google AI Mode v Česku od října 2025

**Citace:**

> „AI Mode, konverzační režim Googlu, v Česku dostupný od října 2025“

> „Pro české uživatele se začal zpřístupňovat v říjnu 2025…“

> „Od podzimu 2025 je dostupný i českým uživatelům a funguje v češtině…“

**Problém:**  
Jde o klíčové faktické tvrzení článku a opakuje se ve frontmatteru, FAQ i těle. Bez veřejného zdroje nebo jasného redakčního ověření je to rizikové. Navíc dostupnost Google AI funkcí se často liší podle země, jazyka, účtu, zařízení a regulace.

**Návrh opravy:**  
Buď doplnit zdroj / poznámku o ověření, nebo formulaci změkčit:

> „K 25. 5. 2026 se dostupnost AI Mode pro české uživatele může lišit podle účtu, zařízení a nastavení. Pokud je funkce dostupná, objevuje se jako samostatný konverzační režim ve Vyhledávání Google nebo v aplikaci Google.“

Pokud máte doložený rollout v říjnu 2025, přidejte konkrétní zdroj nebo interní poznámku typu:

> „Podle oznámení Googlu / redakčního testu z října 2025…“

---

### [BLOCKER] „Funguje i v češtině“ je příliš jisté bez omezení dostupnosti

**Citace:**

> „Funguje i v češtině.“

**Problém:**  
Tvrzení je stručné a absolutní. U AI Mode může být rozdíl mezi tím, že rozhraní přijímá české dotazy, odpovídá česky, nebo je oficiálně lokalizované pro český trh.

**Návrh opravy:**

> „V českých dotazech může AI Mode pracovat i s češtinou, pokud je uživateli funkce dostupná. Dostupnost a kvalita odpovědí se ale může měnit podle účtu, země, zařízení a aktuálního rollout stavu.“

---

### [WARNING] AI Mode je popsaný jako náhrada seznamu odkazů příliš absolutně

**Citace:**

> „který místo seznamu odkazů sestaví odpověď z více zdrojů“

> „Klasické pozice prakticky mizí“

**Problém:**  
Oprava oproti první verzi je lepší, ale pořád to může znít, že odkazy v AI Mode mizí úplně. AI Mode může zobrazovat odkazy, zdrojové karty nebo návazné odkazy; jen nehrají stejnou roli jako klasický seznam organických výsledků.

**Návrh opravy:**

Ve frontmatter `answer`:

> „Google AI Mode je konverzační režim vyhledávání postavený na modelech rodiny Gemini, který místo primárního seznamu organických výsledků staví do popředí AI odpověď složenou z více zdrojů…“

V tabulce:

> „Klasické pozice mají menší roli“

místo:

> „Klasické pozice prakticky mizí“

---

### [WARNING] „AI Mode necituje celé stránky, ale jednotlivé pasáže“ je zjednodušení, které může být nepřesné

**Citace:**

> „AI Mode necituje celé stránky, ale jednotlivé pasáže.“

> „AI Mode vybírá úryvky napříč zdroji, ne celé stránky.“

> „Query fan-out tahá úryvky…“

**Problém:**  
Je správné vést čtenáře k pasážím a modularitě obsahu. Formulace je ale příliš kategorická. Google může vybírat zdroje na úrovni dokumentů/stránek a v odpovědi zobrazovat odkazy nebo citované části. Není bezpečné tvrdit, že „necituje celé stránky“.

**Návrh opravy:**

> „AI Mode často pracuje s konkrétními pasážemi a zdrojovými odkazy, ne jen s hodnocením celé stránky. Proto pomáhá mít obsah rozdělený do samostatných, faktických úseků.“

A v checklistu/howto:

> „AI Mode může pro odpověď využít konkrétní úryvky ze stránek, proto je důležitá modularita obsahu.“

---

### [WARNING] Tvrzení o citaci mimo top 10 potřebuje změkčit nebo doložit

**Citace:**

> „Citovaný úsek může pocházet i ze stránky, která není v klasickém organickém top 10.“

> „AI Mode může citovat i úsek mimo top 10, pokud lépe odpovídá na konkrétní podotázku.“

**Problém:**  
Tvrzení je pravděpodobné a už není formulované jako jistota, ale pořád jde o konkrétní mechanismus výběru zdrojů. Bez zdroje nebo vysvětlení, že jde o pozorování / obecný princip, je to silné.

**Návrh opravy:**

> „V praxi nemusí jít vždy o stejný zdroj, který se zobrazuje vysoko v klasických organických výsledcích. AI Mode může pro dílčí podotázku vybrat jinou relevantní pasáž.“

Tím se zachová smysl bez tvrdého tvrzení „mimo top 10“.

---

### [WARNING] „U části dotazů ano“ u poklesu návštěvnosti je příliš kategorické

**Citace:**

> „U části dotazů ano — když uživatel dostane odpověď přímo v rozhraní, méně často proklikne na web.“

**Problém:**  
Dopad na návštěvnost závisí na typu dotazu, SERPu, značce, kvalitě citace a chování uživatelů. Formulace „ano“ je moc definitivní.

**Návrh opravy:**

> „U části dotazů může AI Mode snížit prokliky na web — zejména tam, kde uživatel dostane dostatečnou odpověď přímo v rozhraní.“

---

### [WARNING] Chybí externí doložení hlavních tvrzení o Google AI Mode a query fan-out

**Citace:**

> „Klíč k AI Mode je technika zvaná query fan-out.“

> „rozloží ho na víc souběžných podotázek a na každou tahá zdroje zvlášť“

**Problém:**  
Článek je platformový návod k funkci Googlu. Hlavní technické tvrzení je důležité a mělo by být doložitelné. Interní odkazy jsou dobré, ale u Google AI Mode / query fan-out by měl být aspoň jeden autoritativní externí zdroj nebo poznámka „Google tento princip popisuje jako…“.

**Návrh opravy:**  
Doplnit větu s odkazem na oficiální materiál Googlu nebo Search Central / Google Blog:

> „Google princip query fan-out popisuje jako rozložení dotazu na související poddotazy, které pomáhají sestavit širší odpověď z více zdrojů.“

Pokud nechcete externí odkazy v textu, uveďte zdroj alespoň v poznámce redakční kontroly.

---

### [WARNING] HowTo/FAQ strukturovaná data jsou zmíněná správněji než dřív, ale stále mohou vyvolat přehnané očekávání

**Citace:**

> „Doplňte relevantní strukturovaná data a FAQ“

> „Article pro článek, FAQPage pro viditelné otázky, HowTo jen pro postup krok za krokem.“

**Problém:**  
Je dobře, že článek říká „jen relevantní typy“ a „nejsou spínačem citace“. Přesto může čtenář nabýt dojmu, že FAQPage/HowTo jsou obecně vhodné pro zvýšení šance v AI Mode. Google podporu rich results omezuje podle typu webu a výsledku; strukturovaná data nemají být prezentována jako obecná páka na AI citace.

**Návrh opravy:**  
V checklistu doplnit omezení přímo do bodu:

> „Strukturovaná data a FAQ: používejte jen relevantní typy, které odpovídají viditelnému textu. Berte je jako pomůcku pro strojové čtení a vybrané rozšířené výsledky, ne jako nástroj, který zajistí citaci v AI Mode.“

---

### [WARNING] Slang „organik“ je v článku pořád přítomný

**Citace:**

> „AI Overviews stojí blíž klasickému organiku…“

> „kvalitní organik je základ…“

**Problém:**  
Po 1. auditu mělo být „organiku“ nahrazeno srozumitelnějším „organické vyhledávání / klasické SEO“. Slang zůstal. Není to zakázaný termín, ale neodpovídá cílenému věcnému a srozumitelnému tónu.

**Návrh opravy:**

> „AI Overviews stojí blíž klasickému organickému vyhledávání…“

> „kvalitní organické vyhledávání a technický základ SEO pomáhají…“

---

### [WARNING] „Podoptimalizujete“ je neobratný odborný výraz

**Citace:**

> „pokud berete AI Overviews a AI Mode jako jeden cíl, podoptimalizujete pro oba.“

**Problém:**  
Výraz je kostrbatý a zbytečně technokratický. Článek má vysvětlovat, ne znít jako interní SEO žargon.

**Návrh opravy:**

> „pokud berete AI Overviews a AI Mode jako jeden cíl, snadno připravíte obsah tak, že nebude dobře fungovat ani pro jeden režim.“

---

### [WARNING] „2 režimy“ ve stats může působit nepřesně

**Citace:**

```yaml
- value: "2 režimy"
  label: "AI Overviews (box nad odkazy) a AI Mode (konverzace) se liší"
```

**Problém:**  
Google vyhledávání nemá jen „2 režimy“. V kontextu článku jde o dvě AI funkce / dvě AI zkušenosti ve vyhledávání. Současné znění může být chápáno moc široce.

**Návrh opravy:**

```yaml
- value: "2 AI režimy"
  label: "AI Overviews a AI Mode se ve vyhledávání chovají odlišně"
```

Nebo:

```yaml
- value: "2 funkce"
  label: "AI Overviews a AI Mode řeší AI odpovědi jiným způsobem"
```

---

### [TIP] Meta description je v limitu, ale je na horní hraně

**Citace:**

> „Google AI Mode je konverzační režim vyhledávání. Ukážeme rozdíl proti AI Overviews, co je query fan-out a úpravy obsahu, které mohou zvýšit šanci na citace.“

**Problém:**  
Délka je přibližně 156 znaků, tedy v limitu 70–160, ale velmi těsně. Při přidání mezer, entit nebo automatických úpravách šablony se může zkracovat.

**Návrh opravy:**  
Zkrátit bez ztráty smyslu:

> „Google AI Mode: rozdíl proti AI Overviews, princip query fan-out a úpravy obsahu, které mohou zvýšit šanci na citace.“

---

### [TIP] Titulek je SEOově v pořádku

**Citace:**

> `title: "Google AI Mode: jak připravit obsah pro citace 2026"`

**Hodnocení:**  
Titulek má klíčové slovo na začátku a délku přibližně 55 znaků. To odpovídá zadání. Není potřeba měnit.

---

### [TIP] Krátká odpověď ve frontmatteru splňuje požadavky

**Citace:**

> `answer: "Google AI Mode je konverzační režim vyhledávání…"`

**Hodnocení:**  
Má cca 53 slov, začíná definicí, dává samostatný smysl a používá bezpečnou formulaci „citaci nezaručuje“. Dobré. Pouze bych upravil část „místo seznamu odkazů“ podle výše uvedeného nálezu, aby nebyla příliš absolutní.

---

### [TIP] CTA je konečně konkrétní a navázané na produkty

**Citace:**

> „pomůže jako hotová předloha AI SEO Wireframe Pack za 1 490 Kč“

> „AI SEO audit za 9 990 Kč“

**Hodnocení:**  
Splňuje zadání. Závěr nesklouzává ke generickému „kontaktujte nás“ a jasně vede na Pack i Audit. Tady oprava po 1. auditu stačí.