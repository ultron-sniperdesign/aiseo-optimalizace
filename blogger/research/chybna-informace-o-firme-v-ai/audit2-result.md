**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou jen konkrétní nálezy k tomuto článku. Oproti prvnímu kolu je text výrazně lepší a hlavní rozpor je skutečně opravený. Přesto v něm zůstává několik věcných a formulačních míst, která jsou buď přehnaná, nepřesná, nebo zbytečně riziková.

---

## Nálezy

### [BLOCKER] Příliš absolutní tvrzení o neexistenci veřejného způsobu přímé úpravy
> **„Přímo ne. Neexistuje běžný veřejný způsob, jak si odpověď AI o konkrétní firmě sám přepsat.“**  
> **„Přímo si odpověď přepsat nejde — žádné tlačítko upravit tam není.“**  
> **„Běžné tlačítko pro přímou úpravu dnes k dispozici není.“**

**Problém:**  
Směr je správný, ale formulace jsou místy příliš kategorické. U některých systémů existují mechanismy hlášení, preference, community edits nebo korekce navázané na konkrétní produkt, kartu firmy, mapový profil, knowledge panel apod. Není to totéž co „přepsat odpověď modelu“, ale věta „žádné tlačítko upravit tam není“ je moc absolutní a může být snadno napadnutelná.

**Návrh opravy:**  
Držet důsledně tuto formulaci:
- „V běžném rozhraní obvykle není přímá uživatelská úprava samotné odpovědi.“
- „Některé platformy ale umožňují chybu nahlásit nebo upravit související zdrojový profil či kartu.“

---

### [BLOCKER] „Proces není veřejný“ je přehnané a ne vždy pravdivé
> **„proces nemá dohledatelný průběh ani zaručený výsledek“**  
> **„proces není veřejný“**  
> **„Nepočítejte s tím ale jako s řešením: proces není veřejný, nemá dohledatelný průběh ani garantovaný výsledek.“**

**Problém:**  
Tohle je nejslabší věc v článku. U řady platforem je veřejně dostupné alespoň to, **že** existuje formulář zpětné vazby, nahlášení problému, support proces, appeal mechanismus nebo úprava zdrojového záznamu. Není pravda obecně říkat, že „proces není veřejný“. Přesnější je, že **interní vyhodnocení a zapracování změny nejsou transparentní**.

**Návrh opravy:**  
Místo „proces není veřejný“ použít:
- „Průběh vyhodnocení a zapracování změny obvykle není transparentní.“
- „Můžete chybu nahlásit, ale nebývá vidět, jak přesně je podnět posouzen a kdy se případně projeví.“

---

### [BLOCKER] Nedostatečně zachycené „formální žádosti vůči platformě“ a práva na opravu / námitku
> **„Vedle obsahových kroků mohou v některých situacích existovat i formální žádosti vůči původnímu zdroji nebo platformě; jejich vhodnost je potřeba posoudit individuálně.“**

**Problém:**  
Tohle už je lepší než v první verzi, ale pořád příliš neurčité vzhledem k tématu článku. Uživatel řeší „chybnou informaci o firmě v AI“ a článek tvrdí, že přímá oprava není k dispozici, ale jen okrajově připouští formální cesty. Chybí minimální upřesnění, že může jít např. o:
- opravu původního zdroje,
- žádost o opravu firemního profilu či záznamu,
- nahlášení závadného výstupu platformě,
- ve zvláštních případech právní nárok vůči zdroji nebo provozovateli.

Bez toho text působí, jako by záměrně zmenšoval existující možnosti.

**Návrh opravy:**  
Doplnit jednu stručnou větu:
- „Vedle oprav zdrojů může někdy připadat v úvahu i nahlášení výstupu platformě, oprava souvisejícího firemního záznamu nebo formální žádost vůči zdroji; konkrétní postup závisí na typu chyby a službě.“

---

### [WARNING] „Konfabulace často vzniká tam, kde chybí dostatek podkladů“ je pořád zjednodušující
> **„Konfabulace často vzniká tam, kde chybí dostatek jasných a konzistentních podkladů…“**  
> **„Když si model domýšlí, často proto, že odpověď nikde není.“**

**Problém:**  
Už to není kauzálně přestřelené jako dřív, ale stále to zní příliš lineárně. Model může chybovat i navzdory existenci dobrých podkladů: kvůli chybné syntéze, preferenci jiného zdroje, záměně entity, šumu v trénovacích datech, retrieval vrstvě apod.

**Návrh opravy:**  
Změkčit:
- „Konfabulace může být častější tam, kde chybí jasné a konzistentní podklady, ale vzniká i při chybné syntéze nebo záměně entity.“
- „Když si model domýšlí, jedním z důvodů může být to, že odpověď není nikde podaná jasně a konzistentně.“

---

### [WARNING] Nedoložené zobecnění o menších značkách
> **„U menších značek to bývá častější, protože o nich bývá méně dohledatelných a konzistentních podkladů“**

**Problém:**  
Je to plausibilní, ale stále nedoložené. Bez zdroje je to zobecnění. Není to fatální, ale je to přesně typ tvrzení, které si článek zakládající si na střízlivosti nemusí dovolit.

**Návrh opravy:**  
Buď tvrzení odstranit, nebo změkčit:
- „Riziko může růst u značek, o nichž je méně konzistentních veřejných podkladů.“
- případně úplně vypustit.

---

### [WARNING] „Skutečná oprava zdroje je jediná čistá cesta“ je overclaim
> **„Skutečná oprava zdroje je jediná čistá cesta.“**

**Problém:**  
Příliš absolutní. Vedle opravy zdroje může být legitimní i:
- nahlášení výstupu platformě,
- oprava profilu v externí službě,
- žádost o stažení / doplnění / upřesnění,
- v závažných případech právní postup.

**Návrh opravy:**  
- „Oprava zdroje bývá nejčistší a nejspolehlivější cesta.“
- nebo „Oprava zdroje má být základ; hlášení platformě je spíš doplněk.“

---

### [WARNING] FAQ odpověď začíná negací a není ideální jako samostatná definice
> **FAQ: „Dá se opravit, co o mé firmě říká AI?“ — „Přímo ne. Neexistuje běžný veřejný způsob…“**

**Problém:**  
V zadání je požadavek, aby „krátká odpověď“ začínala definicí, ne negací. `answer` ve frontmatteru je už dobrý. Ale první FAQ odpověď i první navazující odstavec stále startují zápornou formulací. Pro AI citovatelnost je to o něco slabší.

**Návrh opravy:**  
Začít kladným popisem reality:
- „Oprava chybné informace v AI obvykle probíhá nepřímo: úpravou zdrojů, doplněním jasné informace na vlastním webu a případným nahlášením chyby platformě. Přímá uživatelská úprava samotné odpovědi v běžném rozhraní obvykle k dispozici není.“

---

### [WARNING] První ~100 slov těla jsou funkční, ale stále lehce redundantní vůči `answer`
> **První odstavec + druhý odstavec opakují téměř totéž.**

**Problém:**  
Jako citovatelná odpověď to funguje, ale hustota faktů by mohla být vyšší. Druhý odstavec spíš opakuje první než rozšiřuje význam.

**Návrh opravy:**  
Ve druhém odstavci místo opakování doplnit jednu novou informaci:
- že některé systémy umožňují nahlášení,
- že rychlost projevení změny není transparentní,
- nebo že klíčem je oprava zdroje, ne odpovědi.

---

### [WARNING] Slug neodpovídá přesně titulku a tématu „firma“ vs. „značka“
> **slug: `"chybna-informace-o-znacce-v-ai"`**  
> **title: „Chybná informace o firmě v AI: jak reagovat“**

**Problém:**  
Není to chyba sama o sobě, ale článek mluví primárně o firmě, zatímco slug o značce. To vytváří zbytečnou nekonzistenci.

**Návrh opravy:**  
Zvážit sjednocení, např.:
- `chybna-informace-o-firme-v-ai`
nebo ponechat title/slovník více na „značka“, pokud je to záměr.

---

### [TIP] Titulek je v pořádku významově, ale lehce přes 50–60 znaků
> **title: „Chybná informace o firmě v AI: jak reagovat“**

**Problém:**  
Je to spíš drobnost. Titulek je dobrý a klíčové slovní spojení je vepředu. Jen může být na hraně doporučené délky podle počítání znaků.

**Návrh opravy:**  
Volitelné zkrácení:
- „Chybná informace o firmě v AI: co dělat“
- „Chybná informace o firmě v AI: postup“

---

### [TIP] Meta description je použitelný, ale obsahuje lehce marketingové „co může zlepšit reputaci v AI“
> **description: „…co může zlepšit reputaci v AI — bez nereálných slibů.“**

**Problém:**  
Ne zásadní, ale článek je hlavně o opravě chybných údajů, ne o „zlepšení reputace“. To může působit jako lehké tematické rozostření směrem k prodeji.

**Návrh opravy:**  
Přesnější varianta:
- „Nepravdivé informace v AI o vaší firmě? Zjistěte možné příčiny, jak opravit zdroje a jak chybu nahlásit bez nereálných slibů.“

---

### [TIP] Anglicismus „Insight“ apod. je jen technický import, ne problém v copy
> **`import Insight ...` atd.**

**Hodnocení:**  
V publikačním textu se zakázané anglicismy prakticky neobjevují. AI, SEO a Wikidata jsou v kontextu přijatelné technické názvy. Tady je to v pořádku.

---

### [TIP] CTA je už výrazně lepší a není v přímém rozporu s obsahem
> **„…navrhne obsahové a technické kroky, které mohou zvýšit šanci na nápravu.“**

**Hodnocení:**  
Tohle je po úpravě dobré. Neobsahuje garanci a ladí s tezí článku. Jen bych ještě zvážil drobné sladění s textem „nikdo nemůže slíbit opravu“:
- audit „pomůže zmapovat pravděpodobné zdroje a priority“ spíš než „projde, jak AI systémy odpovídají“ — ale to už je jemné doladění, ne chyba.

---

## Co je nyní dobře
Stručně:
- Hlavní rozpor mezi „nejde upravit“ a „lze nahlásit“ je opravený.
- Právní disclaimer je výrazně bezpečnější než předtím.
- CTA už neslibuje výsledek.
- `answer` ve frontmatteru je dobrý, citovatelný a věcně střízlivý.
- Interní odkazy i struktura H2 jsou logické.

---

## Shrnutí, co opravit před publikací
Nejdůležitější jsou tyto 4 zásahy:

1. **Změkčit absolutní tvrzení o přímé úpravě odpovědi**  
   („obvykle není k dispozici“ místo „nejde / žádné tlačítko není“).

2. **Nahradit „proces není veřejný“ přesnější formulací**  
   („vyhodnocení a zapracování změny není transparentní“).

3. **Lépe přiznat existenci dalších legitimních mechanismů**  
   (nahlášení platformě, oprava firemního záznamu, formální žádost vůči zdroji/platformě).

4. **Změkčit absolutno u věty „jediná čistá cesta“**  
   a lehce upravit pasáže o konfabulaci / menších značkách.

Po těchto opravách bych článek pustil.