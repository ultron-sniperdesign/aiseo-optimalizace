Níže jen nálezy. Cituji místo a dávám návrh opravy.

---

## 1. Zbytky staré logiky / formulace, které pořád kloužou k původnímu tvrzení

### 1.1 „Čím je dotaz konkrétnější…, tím míň AI přehled“
**Místo:**
Sekce **Local SEO v AI éře**:
> „Ty dva sloupce se chovají obráceně. Čím je dotaz konkrétnější a víc ‚chci firmu tady a teď‘, tím spíš dostanete mapový panel a tím míň AI přehled. Jakmile do dotazu vstoupí otázka, situace se otočí.“

**Problém:**
Tohle je příliš zjednodušené a vrací to článek k původní intuici. Ve studii není osa „konkrétnější = méně AIO“. Naopak hybridní dotazy mohou být velmi konkrétní a přesto mají AIO 97 %. Rozhodující není „konkrétnost“, ale **typ záměru / kombinace lokální + informační složky**.

**Návrh opravy:**
> „Ty dva sloupce se v tomto měření chovají obráceně hlavně podle **typu záměru**. U čistě lokálních dotazů dominuje mapový panel, zatímco u dotazů, které kombinují lokální poptávku s otázkou nebo evaluací, se AI přehled objevuje výrazně častěji.“

---

### 1.2 „U dotazu, který lidé reálně píšou, je to naopak“
**Místo:**
Insight box:
> „U dotazu, který míchá informaci s poptávkou — a to je ten, který lidé reálně píšou — je to naopak.“

**Problém:**
„To je ten, který lidé reálně píšou“ je nedoložené. Whitespark měřil prevalence features, ne distribuci reálných query typů v populaci hledání.

**Návrh opravy:**
> „U dotazu, který míchá informaci s poptávkou, je to naopak.“
Případně:
> „Takové hybridní dotazy jsou pro lokální firmy prakticky důležité, ale tato studie neměřila jejich podíl v reálném objemu hledání.“

---

### 1.3 FAQ je v pořádku, ale poslední věta už jde lehce nad data
**Místo:**
FAQ:
> „V praxi: dobře udržovaný Google Business Profile zůstává základem u lokálních dotazů, u těch hybridních rozhoduje odpověď na stránce.“

**Problém:**
„Rozhoduje odpověď na stránce“ je silnější, než co studie dokládá. Studie neporovnává ranking factors ani zdrojovou selekci uvnitř AIO; měří výskyt AIO a local panelu.

**Návrh opravy:**
> „V praxi: dobře udržovaný Google Business Profile zůstává základem u čistě lokálních dotazů. U hybridních dotazů je navíc důležité, aby stránka jasně odpovídala na související otázku, protože právě tam se AI přehled objevuje výrazně častěji.“

---

## 2. Přestřelení opačným směrem

### 2.1 „Nejčastější reálný dotaz je hybridní“
**Místo:**
Sekce **Co to znamená pro vás**:
> „Nejčastější reálný dotaz je hybridní…“

**Problém:**
To studie nedokládá. Nemáte tu zdroj o tom, že hybridní dotazy jsou nejčastější v reálném chování uživatelů.

**Návrh opravy:**
> „Pro lokální firmy jsou důležité i hybridní dotazy…“
nebo
> „Hybridní dotazy typu … je potřeba brát vážně…“

---

### 2.2 „Odpověď na tu otázku musí být na vaší stránce“
**Místo:**
Tamtéž:
> „Odpověď na tu otázku musí být na vaší stránce, ne jen kontakt a otevírací doba.“

**Problém:**
Jako doporučení OK, jako kategorické tvrzení ne. Z dat neplyne „musí“. Chybí opora, že zrovna tohle je nutná podmínka viditelnosti.

**Návrh opravy:**
> „Proto dává smysl mít na stránce i stručnou odpověď na související otázku, ne jen kontakt a otevírací dobu.“

---

### 2.3 „Konkrétnější dotaz je stabilnější a snáz se na něj cílí“
**Místo:**
Sekce **AI Mode a proč jeden test nic neznamená**:
> „Konkrétnější dotaz je stabilnější a snáz se na něj cílí.“

**Problém:**
První půlka je opřená o vaše sekundární zdroje jen pro srovnání „obecný lokální dotaz“ vs „dotaz s městem“. Druhá půlka („snáz se na něj cílí“) už je interpretační doporučení, ne zjištění ze zdroje.

**Návrh opravy:**
> „Dotaz s uvedeným městem byl v tomto měření stabilnější než obecný lokální dotaz. Proto má smysl testovat i tvořit obsah s explicitní lokalitou.“

---

### 2.4 „Google Business Profile usage v ČR je historicky pod globálním průměrem“
**Místo:**
Sekce **Proč význam Local SEO v ČR roste**, bod 4:
> „Google Business Profile usage v ČR je historicky pod globálním průměrem…“

**Problém:**
V dodaných zdrojích pro to není opora. Tohle je samostatné empirické tvrzení a bez zdroje je slabé. Navíc „usage“ není definované.

**Návrh opravy:**
Buď dodat zdroj a upřesnit metriku, nebo smazat. Bez zdroje:
> „Na českém trhu je kvalita a úplnost firemních profilů často nevyrovnaná, takže dobře udržovaný profil může být konkurenční výhodou.“
I tohle je ale lepší opřít aspoň o auditní zkušenost explicitně označenou jako zkušenost, ne data.

---

## 3. Limity studie: jsou zmíněné, ale na jednom místě se zase rozmazávají

### 3.1 Limity jsou viditelné v AI sekci, ale nepropisují se do frontmatteru `description`
**Místo:**
`description`:
> „Jak v ČR optimalizovat Google Business Profile a Seznam Firmy, na čem stojí lokální viditelnost a co s ní dělá AI éra.“

**Problém:**
Není to chyba samo o sobě, ale AI část v metadatech zní obecněji, než jak opatrně je napsané tělo. Čtenář z meta popisu nepozná, že AI část stojí na omezených zahraničních datech.

**Návrh opravy:**
Není nutné, ale přesnější by bylo:
> „Jak v ČR optimalizovat Google Business Profile a Seznam Firmy, na čem stojí lokální viditelnost a jak do ní promlouvají AI přehledy podle omezených dostupných dat.“

---

### 3.2 FAQ je korektní, ale `answer` AI část úplně neobsahuje
**Místo:**
`answer`

**Problém:**
Není tam rozpor, ale pokud článek částečně staví refresh na opravě AI sekce, stručná odpověď to vůbec neodráží. To není věcná chyba, spíš nedokončený refresh mezi tělem a metadata vrstvou.

**Návrh opravy:**
Na konec `answer` přidat jednu větu:
> „V AI éře záleží i na typu dotazu: u čistě lokálních dotazů stále dominuje mapový panel, zatímco u hybridních dotazů se AI přehledy objevují častěji.“

---

## 4. Vnitřní rozpory

### 4.1 Verifikace GBP: frontmatter vs Stepper
**Místo A — `howto.steps[0]`:**
> „Google může vyžadovat video, telefon, email, poštu nebo kombinaci kroků.“

**Místo B — Stepper komponenta v těle:**
> „Ověřit přes pohled (Street View) nebo poštou.“

**Problém:**
Přímý rozpor. Ve frontmatteru máš modernější a přesnější verzi, v těle zůstala starší zjednodušená formulace. Navíc „ověřit přes pohled (Street View)“ je problematické samo o sobě.

**Návrh opravy:**
Sjednotit Stepper s `howto`:
> „Verifikační metoda se liší podle typu firmy a situace profilu — Google může vyžadovat video, telefon, email, poštu nebo kombinaci kroků.“

---

### 4.2 GBP sekce stále používá zastaralou/verifikačně nepřesnou formulaci
**Místo:**
Sekce **Google Business Profile**:
> „Adresa s ověřením přes pohled (Street View) nebo poštu“

**Problém:**
Tohle je věcně slabé až chybné. GBP se neověřuje „přes Street View“ jako standardní metoda. Google může při posuzování pracovat s mapovými podklady a veřejnou evidencí, ale formulace „ověření přes pohled“ je zavádějící.

**Návrh opravy:**
> „Adresa a údaje odpovídající reálné provozovně; způsob verifikace určuje Google podle typu firmy a rizikovosti profilu (často video, telefon, email, pošta nebo kombinace).“

---

### 4.3 NAP: jednou „musí být identicky“, podruhé „drobné rozdíly nejsou kritické“
**Místo A:**
Sekce **NAP konzistence**:
> „Tři údaje, které musí být identicky napsány napříč…“

**Místo B:**
`howto` + FAQ:
> „drobné formátovací rozdíly nejsou kritické…“

**Problém:**
Není to fatální rozpor, ale je to napětí v pravidle. Jednou absolutní „musí být identicky“, jinde rozumné zmírnění.

**Návrh opravy:**
V hlavní NAP sekci změnit úvod:
> „Tři údaje, které by měly být co nejkonzistentnější napříč…“
a pod seznamem:
> „Cílem je jednotný zápis; drobné formátovací odchylky samy o sobě nebývají kritické, problém je kumulace rozdílů a zastaralé údaje.“

---

## 5. Další věcné chyby / slabá místa

### 5.1 „Google detekuje polohu uživatele“
**Místo:**
Úvod:
> „Google detekuje polohu uživatele“

**Problém:**
Příliš kategorické. Lokalizace může vycházet z device location, IP, nastavení, historie, explicitního dotazu atd. Ne vždy „detekuje polohu“ v jednoduchém smyslu.

**Návrh opravy:**
> „Google pracuje se signály o poloze uživatele…“

---

### 5.2 „Pro tyto dotazy Google zobrazuje local pack“
**Místo:**
Úvod:
> „Pro tyto dotazy Google zobrazuje local pack — tři lokální výsledky s mapou nahoře v SERPu.“

**Problém:**
Zbytečně absolutní. Ne pro všechny takové dotazy a ne nutně „nahoře“. SERP layout kolísá.

**Návrh opravy:**
> „Pro tyto dotazy Google často zobrazuje local pack — typicky blok lokálních výsledků s mapou, jehož umístění v SERPu se může lišit.“

---

### 5.3 „Seznam je … v některých regionech dominantní“
**Místo:**
FAQ:
> „Seznam je u řady oborů … v některých regionech dominantní.“

**Problém:**
Bez zdroje. Může to být pravda v některých segmentech, ale je to nedoložené silné tvrzení.

**Návrh opravy:**
> „V některých oborech a regionech může mít Seznam pro lokální viditelnost stále významný podíl.“
Případně dodat zdroj.

---

### 5.4 „Pro lokální dotazy je podíl reálně vyšší“
**Místo:**
FAQ o Seznam Firmy:
> „Pro lokální dotazy je podíl reálně vyšší…“

**Problém:**
Opět bez zdroje. Je to plausibilní, ale nedoložené.

**Návrh opravy:**
> „U části lokálních dotazů může být jeho význam vyšší, než naznačuje celkový podíl na vyhledávání.“

---

### 5.5 „Google vidí aktivní profil jako kvalitnější“
**Místo:**
FAQ o recenzích:
> „Google vidí aktivní profil jako kvalitnější.“

**Problém:**
Zase mechanismus bez opory. Jako praktická heuristika OK, jako faktické tvrzení ne.

**Návrh opravy:**
> „Aktivní správa profilu pomáhá uživatelům a může podpořit celkovou důvěryhodnost profilu.“

---

### 5.6 „Recenze jsou kombinovaný ranking signál“
**Místo:**
Sekce **Recenze a hodnocení**:
> „Recenze jsou kombinovaný ranking signál + konverzní signál. Google obvykle sleduje… sentiment… vaše odpovědi…“

**Problém:**
Tady mícháš to, co Google veřejně říká obecně o prominence/reviews, s tím, co SEO komunita usuzuje. Hlavně „sentiment v textu recenze“ a „vaše odpovědi jako ranking signál“ nejsou v článku podloženy zdrojem.

**Návrh opravy:**
> „Recenze mají zjevný konverzní dopad a jsou obecně považované i za důležitý lokální signál. V praxi se sleduje hlavně počet, čerstvost a průměrné hodnocení; přesná váha jednotlivých faktorů veřejně známá není.“

---

### 5.7 „Doorway page penalty“
**Místo:**
`howto` krok Lokalizovaný obsah:
> „… riskuje doorway page penalty.“

**Problém:**
Formulace je příliš mechanická. Google nemá jednu explicitní „doorway page penalty“ jako garantovaný výsledek; může jít o algoritmické znehodnocení, manuální akci proti doorways, nebo jen nefungující obsah.

**Návrh opravy:**
> „… může to působit jako doorway pages a výkon takových stránek bývá slabý; v krajním případě to může vést i k zásahu proti doorway pages.“

---

### 5.8 „GBP embed mapa“
**Místo:**
Více míst:
> „GBP embed mapa“

**Problém:**
Terminologicky nejasné. Obvykle se embeduje Google mapa / place map, ne „GBP embed mapa“. Není to velká chyba, ale je to nepřesné.

**Návrh opravy:**
> „vložená Google mapa / mapa pobočky“

---

### 5.9 „GBP Insights“
**Místo:**
Metriky a jinde:
> „Google Business Profile Insights“

**Problém:**
Potenciálně zastaralé názvosloví rozhraní. Pokud chceš být přesný, držel bych se spíš neutrálního „statistiky v Google Business Profile“, protože pojmenování Google v UI měnil.

**Návrh opravy:**
> „statistiky v Google Business Profile“
nebo nechat, pokud vědomě používáš ustálený oborový termín.

---

### 5.10 „incognito a změna polohy v Chrome DevTools“ pro local pack
**Místo:**
Sekce měření:
> „měsíční manuální kontrola Local pack pozic přes incognito a změnu polohy v Chrome DevTools“

**Problém:**
Jako hrubý orientační test ano, ale pro běžného čtenáře to může znít přesněji, než to ve skutečnosti je. Personalizace a lokalizační signály se tím nemusí eliminovat ani věrně simulovat.

**Návrh opravy:**
> „… orientační manuální kontrola … Incognito a simulace polohy pomohou, ale nejsou plnohodnotnou náhradou specializovaného local rank trackingu.“

---

## 6. Co bych opravil prioritně

1. **Smazat/přepsat všechny výroky o „nejčastějším reálném dotazu