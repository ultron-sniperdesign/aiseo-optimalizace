## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Bez zásadního faktického kolapsu a bez blockeru. Článek je po revizi výrazně čistší, FAQPage je vysvětlená přijatelně a kanibalizace vůči detailním článkům je většinou pod kontrolou. Před publikací bych ale opravil několik absolutních formulací a jednu nekonzistenci v postupu.

---

## 1. Blokující nálezy

Žádné blokující nálezy jsem nenašel.

---

## 2. Doporučení

1. [WARNING] Absolutní formulace o tom, že z typu „žádné zobrazení neplyne“

   **Citace:**
   > „Když ne, je to pořád platný typ schema.org — jen z něj žádné zobrazení neplyne.“

   **Problém:**  
   Tohle je stále formulované jako tvrzení o tom, co Google určitě neudělá. Přesnější je říct, co Google **nedokumentuje**. U typů mimo galerii nelze obecně tvrdit, že „žádné zobrazení neplyne“ — bezpečnější je, že Google u nich v Search Central nedokumentuje konkrétní rozšířený výsledek.

   **Návrh opravy:**
   > Když ne, může jít pořád o platný typ schema.org — Google u něj ale v Search Central nedokumentuje konkrétní rozšířený výsledek ani podmínky pro jeho získání.

---

2. [WARNING] Příliš široké „žádné zobrazení“ u FAQPage a HowTo

   **Citace:**
   > „Dva typy, které se roky doporučovaly plošně, dnes žádné zobrazení nespouštějí.“

   **Problém:**  
   Věcně míříte na Google Search rich results, ale věta zní obecněji: „žádné zobrazení“ kdekoliv. U auditovaného tématu je lepší držet přesně rozsah primárního zdroje.

   **Návrh opravy:**
   > Dva typy, které se roky doporučovaly plošně, už podle dokumentace Googlu nespouštějí rozšířené výsledky ve Vyhledávání Google.

---

3. [WARNING] „Každý údaj v datech musí být na stránce vidět“ je moc absolutní

   **Citace:**
   > „Každý údaj v datech musí být na stránce vidět.“

   **Problém:**  
   Jako zkratka je to srozumitelné, ale implementačně nepřesné. Strukturovaná data obsahují i technické identifikátory a URL vlastnosti. Pravidlo Googlu se týká hlavně obsahu a tvrzení, která označujete — cena, dostupnost, recenze, autor, otázky a odpovědi apod. Současná formulace může čtenáře zmást při nasazení.

   **Návrh opravy:**
   > Věcné údaje, které strukturovaná data o stránce tvrdí, musí odpovídat viditelnému obsahu nebo z něj jednoznačně vyplývat. Platí to hlavně pro cenu, dostupnost, hodnocení, autora, data publikace nebo otázky a odpovědi.

---

4. [WARNING] Krok „Zapište je v JSON-LD“ je v napětí s předchozím varováním před duplicitami

   **Citace:**
   > „Zapište je v JSON-LD“

   **Problém:**  
   Článek správně varuje, že některé šablony už vypisují microdata. Krok ale pak působí jako univerzální instrukce: vždy přidejte JSON-LD. To může vést přesně k problému, před kterým text varuje — dvě sady údajů, které se musejí udržovat v souladu.

   **Návrh opravy:**
   > Pokud stránka strukturovaná data ještě nemá, zapište je preferovaně v JSON-LD. Pokud už šablona vypisuje microdata, nejdřív rozhodněte, jestli je opravíte, nebo přidáte JSON-LD jen tam, kde dokážete udržet obě sady údajů v souladu.

---

5. [TIP] Sjednotit „Breadcrumb“ vs. „BreadcrumbList“

   **Citace:**
   > „Article, Product, Organization, Breadcrumb, Review snippet, Event, Recipe, Video“

   **Problém:**  
   Jinde správně používáte `BreadcrumbList`. V tabulce je „Breadcrumb“, což je spíš název funkce / dokumentační stránky než přesný typ. Pro technický článek je lepší být konzistentní.

   **Návrh opravy:**
   > Article, Product, Organization, BreadcrumbList, Review snippet, Event, Recipe, VideoObject

   Případně:
   > BreadcrumbList — v galerii Googlu vedené jako Breadcrumb.

---

6. [TIP] Zůstaly anglické výrazy „markup“

   **Citace:**
   > „kdy markup nechat a kdy odstranit“

   **Citace:**
   > „Markup zůstává validní, zobrazení z něj ale nevzejde.“

   **Problém:**  
   V článku už jinak držíte český slovník. „Markup“ je zbytečný návrat k angličtině a neodpovídá nastavenému brand slovníku.

   **Návrh opravy:**
   > kdy značení nechat a kdy odstranit

   A:
   > Strukturovaná data zůstávají validní, zobrazení ve Vyhledávání Google z nich ale podle dokumentace nevznikne.

---

7. [TIP] Několik časových výrazů rychle zastarává

   **Citace:**
   > „dnes žádné zobrazení nespouštějí“

   **Citace:**
   > „které se ještě donedávna doporučovaly plošně“

   **Problém:**  
   Článek je navázaný na stav k 4. 9. 2026. „Dnes“ a „donedávna“ nejsou zásadní chyba, ale u článku s rokem v titulku je lepší čas kotvit přesněji.

   **Návrh opravy:**
   > k 4. 9. 2026 podle dokumentace Googlu nespouštějí rozšířené výsledky ve Vyhledávání

   A:
   > které se v minulých letech doporučovaly plošně

---

8. [TIP] FAQPage JSON-LD je vysvětlená, ale šlo by předejít zdánlivému paradoxu

   **Citace:**
   > „Praktický dopad: nezavádějte FAQPage ani HowTo kvůli výsledku ve Vyhledávání.“

   **Problém:**  
   Věcně je to v pořádku a článek v FAQ vysvětluje, že FAQPage zůstává platný typ. Protože ale stránka sama FAQ má a pravděpodobně generuje FAQPage JSON-LD, doporučil bych jednu explicitní větu přímo u pasáže o FAQ. Předejde to dojmu „říkáte nepoužívat FAQPage, ale sami ho používáte“.

   **Návrh doplnění:**
   > Pokud jsou otázky a odpovědi na stránce skutečně viditelné, FAQPage může dál sloužit jako strojový popis obsahu. Jen od něj k 4. 9. 2026 nečekejte rozšířený výsledek ve Vyhledávání Google.

---

9. [TIP] Validace by byla praktičtější s odkazy na konkrétní nástroje

   **Citace:**
   > „Test rozšířených výsledků od Googlu kontroluje…“
   >
   > „Validátor schema.org kontroluje…“

   **Problém:**  
   Článek je návodový rozcestník a sekce „Jak validovat“ je jedna z nejpraktičtějších. Názvy nástrojů jsou správné, ale chybí přímé odkazy. To snižuje použitelnost.

   **Návrh opravy:**  
   Doplnit odkazy přímo v textu nebo v tabulce:
   - Google Rich Results Test: `https://search.google.com/test/rich-results`
   - Schema.org Validator: `https://validator.schema.org/`

---

10. [TIP] „Přísná kontrola shody se slovníkem schema.org“ může znít silněji, než nástroj reálně umí

   **Citace:**
   > „přísná kontrola shody se slovníkem schema.org“

   **Problém:**  
   Validátor schema.org ověřuje syntaxi a použití slovníku, ale neověří soulad s viditelným obsahem, obchodní realitou ani podmínkami Googlu. V tabulce je to naznačené, ale slovo „přísná“ může přehnat očekávání.

   **Návrh opravy:**
   > kontrola syntaxe a použití typů a vlastností podle slovníku schema.org

---

11. [TIP] Sekce „Postup krok za krokem“ je užitečná, ale částečně opakuje předchozí sekce

   **Citace:**
   > „Zjistěte, co má dokumentovanou funkci“
   >
   > „Vyberte typy podle obsahu stránky“
   >
   > „Validujte správným nástrojem“

   **Problém:**  
   Sekce není špatně, ale některé kroky jen rekapitulují předchozí části. Největší přínos by měla, kdyby byla víc akční: co přesně otevřít, co hledat ve zdrojovém kódu, co vložit do validátoru.

   **Návrh cílené úpravy:**  
   Nemusí se rozepisovat do detailního návodu, ale přidejte konkrétnější formulace:
   - „Otevřete zdrojový kód nebo rendrované HTML a hledejte `application/ld+json`, `itemscope`, `itemtype`.“
   - „Otestujte jednu reprezentativní URL každého typu šablony: článek, produkt, kategorie, homepage.“
   - „Výsledek validace porovnejte s tím, co čtenář vidí na stránce.“

---

12. [TIP] CTA je dobré, ale audit a Pack by šly ještě ostřeji rozlišit podle situace

   **Citace:**
   > „Pokud chcete nezávisle posoudit… pomůže AI SEO audit za 3 600 Kč… Pokud teprve připravujete nové stránky… dává větší smysl AI SEO Wireframe Pack za 1 490 Kč.“

   **Co je dobře:**  
   CTA už není generické a vede na konkrétní produkty s cenami.

   **Drobná oprava:**  
   Ještě bych zpřesnil rozhodovací hranici:
   > Máte hotový web a potřebujete najít chyby v datech? Zvolte audit. Připravujete nové šablony nebo zadání pro vývojáře? Zvolte Pack.

   Není nutné, ale zvýší to jasnost CTA.

---