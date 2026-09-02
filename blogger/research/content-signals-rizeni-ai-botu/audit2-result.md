## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po druhém kole výrazně lepší a většina zásadních věcných problémů je opravená. Před publikací bych ale ještě opravil několik formulací, které buď tvrdí víc, než zdroje dokládají, nebo mohou majitele webu zmást při reálném nasazení.

---

## Nálezy

### [WARNING] Nedoložené tvrzení o platnosti `Content-Signal` ze skupiny `*` pro specifické roboty

> „Řádka `Content-Signal` ve skupině `*` platí jako vyjádření pro všechny, včetně těch, kteří mají vlastní skupinu — pokud ji čtou.“

Tohle je problematické vůči běžnému parsování robots.txt: konkrétní skupina `User-agent: OAI-SearchBot` má přednost před `User-agent: *`. Není doložené, že budoucí čtenář Content Signals bude wildcard skupinu vždy brát jako globální preferenci i pro roboty s vlastní skupinou.

**Návrh opravy:**

Buď tvrzení zmírnit:

> Cloudflare uvádí zápis ve skupině `User-agent: *` jako obecnou preferenci webu. U robotů s vlastní skupinou ale není veřejně potvrzené, jak by případný čtenář Content Signals řešil vztah mezi konkrétní skupinou a skupinou `*`.

Nebo prakticky doporučit bezpečnější variantu:

> Pokud chcete snížit nejasnost u budoucích implementací, zopakujte `Content-Signal` i v konkrétních skupinách, kde vám na tom záleží.

---

### [WARNING] „Veřejně nečte“ tvrdí víc než zdroje

> „K 2. 9. 2026 ale tuto preferenci žádný velký provozovatel veřejně nečte.“

> „K 2. 9. 2026 to žádný velký provozovatel veřejně nečte“

Zdroje dokládají, že nikdo velký **veřejně nepotvrdil**, že Content Signals čte. Nedokládají, že je určitě nikdo nečte.

**Návrh opravy:**

> K 2. 9. 2026 žádný velký provozovatel veřejně nepotvrdil, že tuto preferenci čte.

Stejně upravit ve variantě B i ve shrnutí.

---

### [WARNING] Krátká odpověď má přes 60 slov a je místy nepřesná

> „K 2. 9. 2026 ho žádný velký provozovatel botů veřejně nepotvrdil, vymáhá ho jen Cloudflare u ověřených botů.“

Problémy:
- answer má cca 62 slov, požadavek je 40–60;
- „ho … nepotvrdil“ je kostrbaté;
- „vymáhá ho jen Cloudflare“ zní silněji než realita — Cloudflare hlavně může pracovat se statusem Verified Bots.

**Návrh opravy answeru:**

> Content Signals je rozšíření robots.txt od Cloudflare, kterým web vyjadřuje preferenci použití obsahu: pro vyhledávání, vstup do AI odpovědí a trénink modelů. Jména robotů nenahrazuje, jen doplňuje. K 2. 9. 2026 žádný velký provozovatel veřejně nepotvrdil, že ho čte; Cloudflare ho řeší hlavně u ověřených botů.

---

### [WARNING] Varianta A může být v rozporu s formulací „citace v AI odpovědích“

> „Nejčastější přání českého webu: být citovaný v AI odpovědích, ale nekrmit trénink.“

> „Základ je `search=yes, ai-train=no` — vyhledávání s odkazy a úryvky ano, trénink ne. Pokud chcete výslovně povolit i použití obsahu v AI odpovědích, přidejte `ai-input=yes`…“

Tady vzniká nejasnost: pokud web chce přímo „být citovaný v AI odpovědích“, pak je logičtější varianta B s `ai-input=yes`. Varianta A povoluje vyhledávání s odkazy a úryvky, ale použití jako vstup do AI odpovědi nechává neutrální.

**Návrh opravy:**

Přejmenovat nebo zpřesnit sekci:

> Návod: vyhledávání ano, trénink ne

A doplnit:

> Pokud tím myslíte klasické vyhledávání s odkazy a úryvky, stačí varianta A. Pokud chcete výslovně povolit použití obsahu jako vstupu do AI odpovědí s citací, je přesnější varianta B s `ai-input=yes`.

---

### [WARNING] Praktický návod neřeší jasně volbu: ruční zápis vs. Cloudflare managed robots.txt

> „Spravovaný robots.txt Cloudflare dnes tuto řádku vkládá automaticky…“

> „Do skupiny `User-agent: *` přidejte `Content-Signal`…“

Majitel webu nemusí pochopit, jestli má:
1. zapnout spravovaný robots.txt v Cloudflare,
2. upravit vlastní robots.txt ručně,
3. nebo udělat obojí.

To může vést k duplicitním nebo nečekaně sloučeným skupinám.

**Návrh opravy:**

Do návodu přidat samostatný krok:

> Nejdřív rozhodněte, kde pravidlo vzniká. Pokud máte zapnutý spravovaný robots.txt v Cloudflare, nejdřív otevřete výsledný `/robots.txt` a zkontrolujte vloženou řádku `Content-signal: search=yes, ai-train=no, use=reference`. Ruční `Content-Signal` přidávejte jen tehdy, když víte, že nevytváříte duplicitní nebo protichůdné skupiny.

---

### [WARNING] V závěrečném shrnutí se znovu objevuje „tester“

> „Po nasazení ověřte dostupnost souboru, tester, report Indexování stránek a logy.“

V prvním kole bylo správně nahrazeno „tester“ za konkrétní kontrolu URL. Tady se „tester“ vrátilo a je nejasné.

**Návrh opravy:**

> Po nasazení ověřte dostupnost souboru, kontrolu URL v Search Console, report Indexování stránek a logy.

---

### [WARNING] „Přidat ho je bezpečné“ je příliš kategorické

> „Přidat ho je bezpečné — neznámé direktivy roboti ignorují…“

Samotná direktiva by blokovat neměla, ale bezpečnost závisí na tom, jak se upraví celý robots.txt, hlavně při Cloudflare managed verzi nebo při přidání nových skupin.

**Návrh opravy:**

> Samotná řádka `Content-Signal` by indexaci blokovat neměla, protože neznámé direktivy roboti obvykle ignorují. Riziko vzniká při chybě ve skupinách, `Disallow` pravidlech nebo při nekontrolovaném zapnutí spravovaného robots.txt.

---

### [TIP] Anglicismus „fetchery“

> „A roboti spouštění přímo uživatelem (fetchery)…“

Zbytečný anglicismus. Článek jinak drží dobrou češtinu.

**Návrh opravy:**

> A roboti spouštění přímo uživatelem, tedy načítání na pokyn uživatele, se robots.txt…

Nebo jednoduše:

> A roboti vyvolaní uživatelem se robots.txt…

---

### [TIP] Kostrbaté formulace po přepisu

Doporučené drobné úpravy:

> „Tenhle text jde o vrstvu dál…“

Lépe:

> Tento text přidává další vrstvu…

---

> „jména se v dokumentaci liší jen tak, aby se dala splést“

Zní to, jako by se pletla záměrně.

Lépe:

> jména jsou si často podobná a snadno se spletou

---

> „Tři problémy z toho plynou rovnou.“

Lépe:

> Plynou z toho tři problémy.

---

> „kdo před rokem zakázal GPTBot, nezakázal tím nic z toho, co přibylo od té doby“

Lépe:

> kdo před rokem zakázal GPTBot, tím nezakázal nové roboty, kteří přibyli později

---

### [TIP] Kontrola logů: „přestat“ je nepřesné

> „Tréninkové roboty, které jste omezili jménem, by měly přestat — pokud se robots.txt řídí.“

Roboti mohou dál načítat samotný robots.txt. Přestat by měli stahovat zakázané URL.

**Návrh opravy:**

> Tréninkové roboty, které jste omezili jménem, by měly přestat stahovat zakázané URL; samotný robots.txt mohou dál načítat.

---

### [TIP] Syntaxe ukázek je převážně v pořádku

Ukázky drží správné hodnoty:
- `search=yes`
- `ai-input=yes`
- `ai-train=no`
- `use=reference`

A správně nerozlišují `use=` jako yes/no signál. Kapitalizace `Content-Signal` vs. dokumentační `Content-signal` není zásadní problém, ale kvůli shodě s Cloudflare docs bych v jedné ukázce managed varianty použil přesný tvar:

```txt
Content-signal: search=yes, ai-train=no, use=reference
```

Ruční příklady mohou zůstat konzistentní jako `Content-Signal`.

---

### [TIP] Co je dobře

- Zdroje jsou konkrétní a datované.
- Článek správně zdůrazňuje, že Content Signals nejsou technická ochrana.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ se nevyskytují.
- CTA je konkrétní a vede na produkt: AI SEO audit za 3 600 Kč.