## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je koncepčně dobrý a drží se zadání, ale má několik blokujících problémů: hlavně uvádí zakázaná čísla o četnosti AI přehledu, používá příliš absolutní „nikde / všude“ nad rámec citace a jednu větu formuluje jako nedoložitelné tvrzení o tom, kdo „má data“.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Článek uvádí zakázaná čísla o četnosti panelu a kanibalizuje samostatný článek

**Problémové místo:**

> „Nástroj tehdy hlásil, že pro nepřihlášené uživatele jsou přehledy v průměru zhruba o desetinu méně viditelné, a u e-shopových dotazů se objevily jen u jednoho procenta klíčových slov.“

A dále:

> „Citovat 10 % z roku 2024 jako dnešní stav“

**Proč je to problém:**

V zadání je výslovně uvedeno:

> „Článek NESMÍ uvádět čísla o četnosti panelu.“

Čísla 10 % a 1 % patří do článku `/blog/jak-casto-se-zobrazuje-ai-prehled/`. Tady stačí říct, že existovalo měření BrightEdge z roku 2024, které naznačovalo rozdíl mezi přihlášenými a odhlášenými uživateli, ale Google to nepotvrdil.

**Návrh opravy:**

Nahradit odstavec například takto:

> Tvrzení má jeden zdroj: měření nástroje BrightEdge Generative Parser ze srpna 2024. Nástroj tehdy hlásil nižší viditelnost AI přehledů u odhlášených uživatelů, ale šlo o první týdny po rozšíření na odhlášené uživatele v USA a příspěvek neuváděl velikost vzorku. Přesná čísla proto patří do samostatného rozboru četnosti AI přehledů.

A v části „Co z toho neplyne“ změnit nadpis:

> „Citovat 10 % z roku 2024 jako dnešní stav“

na:

> „Citovat měření BrightEdge z roku 2024 jako dnešní stav“

---

## 2. [BLOCKER] „Nikde“ a „všude“ tvrdí víc, než je bezpečné z citací

**Problémová místa:**

Frontmatter `answer`:

> „…od března 2025 podle Googlu přihlášení není potřeba nikde.“

Úvod článku:

> „…od března 2025 podle Googlu přihlášení není potřeba nikde.“

Tabulka:

> „všude, kde AI přehledy jsou“

Checklist:

> „Od té doby Google přihlášení zrušil jako podmínku všude.“

Shrnutí:

> „USA od srpna 2024, všude od března 2025 — obojí doložené Googlem.“

**Proč je to problém:**

Zdroje dokládají, že Google oznámil odstranění požadavku na přihlášení pro přístup k AI přehledům. Bezpečnější formulace je navázat tvrzení na **podporované země a jazyky / dostupnost funkce**, ne psát absolutní „nikde“ a „všude“.

Zadání navíc výslovně upozorňuje:

> „Zkontroluj zvlášť věty se ‚všude‘ a ‚nikde‘ — ať netvrdí víc než zdroje.“

**Návrh opravy:**

Ve všech výskytech nahradit absolutní formulace přesnější verzí.

Například `answer`:

> AI přehled v Googlu nevyžaduje přihlášení: v USA se od srpna 2024 zobrazuje i odhlášeným a od března 2025 Google uvádí, že pro přístup k AI přehledům už přihlášení není potřeba. Že by se přehled zobrazoval přihlášeným častěji nebo jinak na mobilu, Google nedokumentuje — dostupný doklad je měření nástroje z roku 2024. Pro test si zapište účet a zařízení jako proměnné.

V tabulce:

> „v podporovaných zemích a jazycích podle dostupnosti AI přehledů“

Ve shrnutí:

> „USA od srpna 2024; od března 2025 Google uvádí, že přihlášení není potřeba pro přístup k AI přehledům.“

---

## 3. [BLOCKER] Nedoložitelné tvrzení „neodpověděl nikdo, kdo by měl data“

**Problémové místo:**

> „…jestli ho přihlášení nebo zařízení ukazují častěji — na to neodpověděl nikdo, kdo by měl data.“

**Proč je to problém:**

Tohle je nepřesné a zbytečně silné. Google data pravděpodobně má, jen je nezveřejnil. Nástroje také nějaká data mají, ale nejsou primárním zdrojem Googlu. Věta zní hodnotově a tvrdí víc, než lze z ověřených zdrojů doložit.

**Návrh opravy:**

> …jestli se AI přehled podle přihlášení nebo zařízení zobrazuje častěji — k tomu Google nezveřejnil potvrzení. Dostupné je jen měření nástroje z roku 2024.

---

# 2. Doporučení

## 1. [WARNING] Meta description je pravděpodobně delší než 160 znaků a má neohrabanou formulaci

**Problémové místo:**

> „Přihlášení Google k AI přehledu nevyžaduje od roku 2025. Že se přehled zobrazuje přihlášeným častěji a jinak na mobilu, dokládá jen měření nástrojů z roku 2024.“

**Proč je to problém:**

Meta description má být 70–160 znaků. Tato verze je delší a formulace „Přihlášení Google k AI přehledu“ zní nepřirozeně.

**Návrh opravy:**

> AI přehled nevyžaduje Google účet. Rozdíly podle přihlášení a zařízení Google nepotvrzuje; známé měření je z USA 2024.

---

## 2. [WARNING] SEO titulek nemá cílové klíčové slovo dostatečně vepředu

**Problémové místo:**

> `seoTitle: "Liší se AI přehled podle přihlášení a zařízení? (2026)"`

**Proč je to problém:**

Cílové klíčové slovo je:

> „ai prehled u prihlasenych a podle zarizeni“

Titulek je srozumitelný, ale začíná slovesem „Liší se“, ne hlavním dotazem. Pro SEO by měl být výraz „AI přehled u přihlášených / podle zařízení“ vepředu.

**Návrh opravy:**

> `seoTitle: "AI přehled u přihlášených a podle zařízení (2026)"`

Délka je v bezpečném rozmezí a klíčové téma je hned na začátku.

---

## 3. [WARNING] Neanchrované časové výrazy snižují aktuálnost článku pro rok 2026

**Problémová místa:**

> „Na dnešní stav se to přenést nedá.“

> „Dnešní četnost z něj neplyne.“

> „váš test … dnes“

> „měsíce staré“

**Proč je to problém:**

Zadání vyžaduje ukotvení k roku publikace 2026. Výrazy jako „dnes“ rychle zastarávají a nejsou přesné.

**Návrh opravy:**

- „Na dnešní stav se to přenést nedá.“ →  
  > „Na stav k publikaci článku v září 2026 se to přenést nedá.“

- „Dnešní četnost z něj neplyne.“ →  
  > „Četnost v roce 2026 z něj neplyne.“

- „váš test … dnes“ →  
  > „váš test v konkrétní den měření“

- „měsíce staré“ →  
  > „z jiného období“

---

## 4. [WARNING] Formulace o Search Labs může vyznít, že lze vypnout základní AI přehledy

**Problémová místa:**

> „…omezit je lze jen přes experiment v Search Labs, který je vázaný na přihlášený účet.“

FAQ:

> „Omezit je lze přes experiment v Search Labs, který je vázaný na přihlášený účet…“

**Proč je to problém:**

Ověřený zdroj říká, že AI přehledy jsou základní funkce Vyhledávání a vypnout se nedají. Search Labs je účetní / experimentální rovina, ale nemělo by to znít jako spolehlivé vypnutí nebo omezení základní funkce.

**Návrh opravy:**

> Přihlášení hraje roli u Search Labs: nastavení experimentu je vázané na účet. Základní AI přehledy ale podle nápovědy Googlu vypnout nejdou.

Ve FAQ:

> Ne úplně. Nápověda uvádí, že AI přehledy jsou základní funkce Vyhledávání a vypnout se nedají. Přihlášený účet hraje roli u nastavení experimentu v Search Labs; postup rozebírá samostatný návod.

---

## 5. [WARNING] Sekce „Jak testovat“ je užitečná, ale částečně leze do článku `/blog/test-viditelnosti-v-ai/`

**Problémové místo:**

> „Jak testovat, aby šel výsledek srovnat“

a celý checklist:

> „Účet“, „Zařízení“, „Země a jazyk“, „Datum a opakování“

**Proč je to problém:**

Tahle sekce je relevantní, ale už začíná být návodem na metodiku testování. To je téma samostatného článku `/blog/test-viditelnosti-v-ai/`. V aktuálním článku má zůstat hlavní pointa: přihlášení a zařízení jsou proměnné, které si máte zapisovat.

**Návrh opravy:**

Sekci zkrátit. Nechat čtyři proměnné, ale bez širší metodiky opakování.

Například:

> Pro srovnání si k výsledku zapište čtyři věci: účet nebo anonymní okno, zařízení, zemi a jazyk, datum měření. Podrobný postup měření řeší samostatný návod: [test viditelnosti v AI](/blog/test-viditelnosti-v-ai/).

Tím se sníží kanibalizace a interní odkaz bude jasně předávat hlubší téma.

---

## 6. [TIP] Přidejte zdroj přímo k prvnímu tvrzení z nápovědy Googlu

**Problémové místo:**

> „Podmínka zobrazení je jedna a bez zařízení: přehled se objeví, když systémy vyhodnotí, že by generativní AI mohla být užitečná.“

**Proč je to vhodné upravit:**

Zdroj je uveden až dole. Pro čitelnost a citovatelnost pro AI by bylo lepší mít odkaz přímo u prvního výskytu tvrzení.

**Návrh opravy:**

> Podle nápovědy Googlu se AI přehled objeví, když systémy vyhodnotí, že generativní AI může být pro dotaz užitečná; nápověda u této podmínky nezmiňuje zařízení.

---

## 7. [TIP] CTA je konkrétní, ale slib „obstojí i za rok“ je lehce silný

**Problémové místo:**

> „…se zápisem, který obstojí i za rok?“

**Proč je to problém:**

Není to zakázaná garance, ale zní to jako silný slib. Bezpečnější je formulace o dohledatelnosti a srovnatelnosti.

**Návrh opravy:**

> Chcete vědět, u kterých vašich dotazů se přehled objevuje, se zápisem, ke kterému se dá později vrátit?

Nebo:

> …se zápisem, který půjde později srovnat?

---

# 3. Co je v pořádku

- Struktura H2 je logická a vede od ověřeného přihlášení přes BrightEdge až k zařízení a testování.
- Krátká odpověď má správnou délku a začíná definicí, ne negací; po opravě „nikde“ bude použitelná.
- FAQ otázky jsou reálné a odpovědi jsou většinou samostatně srozumitelné.
- Článek správně rozlišuje Google jako primární zdroj a BrightEdge / seoClarity jako pozorování nástrojů.
- BrightEdge je správně ukotvený do roku 2024 a text ho nevydává za aktuální stav roku 2026.
- Interní odkazy jsou relevantní: vypnutí, četnost, test viditelnosti i personalizace.
- CTA směřuje na konkrétní produkt: AI SEO audit za 3 600 Kč.
- Nevidím zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani agresivní garance typu „AI vás zaručeně doporučí“.