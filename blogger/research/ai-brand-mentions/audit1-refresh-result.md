## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Fakticky je refresh výrazně lepší než původní verze: studie je pojmenovaná, limity jsou uvedené a kauzalita je většinou nahrazená souvislostí. Přesto v textu zůstává několik tvrzení, která jsou silnější než doložený podklad — z toho dvě zásadní.

---

## Nálezy

### [BLOCKER] Search Console není totéž co „zájem ve vyhledávání“ použitý ve studii

**Problémové místo:**

> „Měřte zájem ve vyhledávání“, desc: „nejsilnější signál, se kterým studie souvislost našla, a zároveň jediný z nich, který máte ve vlastní Search Console.“

**Proč je to problém:**

Tady se zaměňuje proměnná ze studie — **zájem ve vyhledávání / search interest** — s daty dostupnými ve **Google Search Console**. Search Console neukazuje celkový zájem uživatelů o značku nebo kategorii v Googlu. Ukazuje výkon vlastního webu ve výsledcích vyhledávání: dotazy, imprese, kliknutí a pozice pro danou ověřenou službu, navíc s omezeními a anonymizací části dotazů.

To je tvrzení o platformě Google a vynechává zásadní podmínku, za jakých data platí. Podle pravidel tohoto kola je to [BLOCKER].

**Doložitelný zdroj k opravě:**

Google Search Console Help — Performance report / Search results report: popisuje, že report ukazuje výkon vlastního webu ve Vyhledávání Google, ne celkový objem poptávky na Googlu.

**Návrh opravy:**

Nahradit formulaci například takto:

> „Měřte dostupné proxy pro zájem ve vyhledávání“, desc: „Studie našla nejsilnější souvislost se zájmem ve vyhledávání. Ve vlastní Search Console ale vidíte jen část reality — dotazy a imprese, kde se zobrazil váš web. Pro celkový trend je potřeba doplnit další zdroje, například Google Trends nebo data z nástrojů pro hledanost.“

---

### [BLOCKER] Tvrzení o českých dotazech je v FAQ silnější než dostupná evidence

**Problémové místo:**

> „U českých a úzce oborových dotazů bývá důležitější lokální oborový web nebo srovnávač než globální komunita.“

**Proč je to problém:**

Brief výslovně říká, že **není ověřené, jak to celé funguje v češtině a na českém trhu**. Studie pracovala s anglickými dotazy a globálními značkami. V hlavním textu je to napsané opatrněji:

> „může být důležitější… Doložit to neumíme“

Ale FAQ používá silnější formulaci **„bývá důležitější“**, která zní jako pozorované pravidlo. To dostupné podklady neunesou.

**Návrh opravy:**

V FAQ změnit na:

> „U českých a úzce oborových dotazů může být důležitější lokální oborový web, katalog nebo srovnávač než globální komunita. Veřejná česká data tohoto typu ale nejsou k dispozici, takže jde o praktickou hypotézu k ověření, ne doložené pravidlo.“

---

### [WARNING] „Google … signál zmínek nedokumentuje nikde“ je příliš absolutní

**Problémové místo:**

> „Google k funkcím s AI uvádí, že nad běžnou způsobilost ve Vyhledávání nevyžaduje nic navíc a žádné zvláštní značení; signál zmínek nedokumentuje nikde.“

**Proč je to problém:**

Podklad v briefu stojí na dokumentaci Google Search Central k AI features. Z ní bezpečně plyne:

- pro Přehled od AI ani režim AI Google neuvádí další požadavky nad běžnou způsobilost ve Vyhledávání,
- není potřeba zvláštní značení,
- v této dokumentaci není uvedený zvláštní signál zmínek.

Formulace **„nedokumentuje nikde“** je širší než doložený zdroj. Pokud článek nemá audit celé dokumentace Google a všech veřejných vyjádření, je bezpečnější držet se konkrétní dokumentace.

**Doložitelný zdroj:**

Google Search Central — AI features and your website: `developers.google.com/search/docs/appearance/ai-features`

**Návrh opravy:**

> „Google v dokumentaci Search Central k funkcím s AI neuvádí žádný zvláštní signál zmínek.“

Případně:

> „V dostupné dokumentaci Google Search Central k funkcím s AI není zvláštní signál zmínek uvedený.“

---

### [WARNING] Definice citace zdroje je příliš univerzální napříč platformami

**Problémové místo:**

> „Citace zdroje je odkaz, který systém přiloží k odpovědi, když si obsah dohledal na webu. Rozhoduje o ní to, co se najde a vybere v tu chvíli.“

**Proč je to problém:**

Jako zjednodušení pro AI vyhledávání je to pochopitelné, ale napsané je to jako obecná definice pro všechny systémy. Mechanismus citací se liší podle platformy: někde jde o webové dohledání v daném okamžiku, jinde o vlastní index, konektory, nahrané dokumenty nebo kombinaci více zdrojů. Článek přitom nepracuje s UI ani vlastním měřením konkrétních platforem.

Nejde o zásadní věcný omyl, ale tvrzení je silnější než podklad.

**Návrh opravy:**

> „V AI vyhledávání je citace zdroje obvykle odkaz přiložený k odpovědi na základě obsahu, který systém v daném režimu dohledal nebo vybral z dostupných zdrojů.“

A druhou větu zjemnit:

> „U odpovědí s webovým dohledáním proto záleží na tom, co se najde, vybere a použije v daném kontextu.“

---

### [WARNING] „Druhý nejsilnější signál“ může znít jako systémový signál modelu

**Problémové místo:**

> „online konverzace o značce je druhý nejsilnější signál, se kterým studie našla souvislost — nejde ji nakoupit, jde si ji zasloužit.“

**Proč je to problém:**

Studie podle briefu pracuje se signály / proměnnými v analytickém modelu. Zároveň autoři výslovně píšou, že vztahy jsou **observational**, ne kauzální. Slovo **„signál“** v marketingovém textu může čtenář chápat jako signál, který model nebo Google přímo používá k doporučování.

V článku je to jinde vysvětlené správně, ale v checklistu se opatrnost ztrácí.

**Návrh opravy:**

> „online konverzace o značce byla druhá nejsilnější proměnná, se kterou studie našla souvislost — nejde z toho ale vyvozovat, že sama o sobě doporučení způsobí.“

---

### [WARNING] „Tvrzení o sobě na vlastním webu nikdo nezávisle nepotvrdí“ je příliš absolutní

**Problémové místo:**

> „Tvrzení o sobě na vlastním webu nikdo nezávisle nepotvrdí.“

**Proč je to problém:**

Smysl je správný: vlastní web není nezávislý zdroj. Ale formulace je fakticky přepálená. Tvrzení z vlastního webu může být nezávisle potvrzené jinde — recenzemi, certifikacemi, oborovým médiem, katalogem, zákaznickými referencemi nebo veřejnými daty.

**Návrh opravy:**

> „Tvrzení na vlastním webu samo o sobě není nezávislé potvrzení. Důvěryhodnost zvyšuje, když stejnou informaci podporují i cizí zdroje.“

---

### [WARNING] „Zájem ve vyhledávání ani konverzaci … nevyrobíte za týden“ je zbytečně absolutní

**Problémové místo:**

> „Zájem ve vyhledávání ani konverzaci o značce nevyrobíte za týden.“

**Proč je to problém:**

Jako praktické varování to dává smysl, ale fakticky to není vždy pravda. Silná kampaň, mediální zásah nebo virální událost může krátkodobý zájem i konverzaci vytvořit rychle. Bezpečnější je mluvit o stabilním, důvěryhodném a udržitelném zájmu.

**Návrh opravy:**

> „Stabilní zájem ve vyhledávání ani dlouhodobou konverzaci o značce obvykle nevybudujete za týden.“

---

### [TIP] Popis studie je v hlavních bodech věcně správný

**Dobře:**

Článek správně drží klíčové limity studie:

- uvádí arXiv práci jménem a datem,
- popisuje šest modelů, pět kategorií a 1 200 + 1 200 seznamů doporučení,
- uvádí vypnuté webové vyhledávání,
- rozlišuje doporučení značky od citací zdrojů,
- opakovaně připomíná, že jde o souvislost, ne příčinu,
- výslovně říká, že studie neřeší český trh ani české dotazy.

To je pro refresh zásadní zlepšení.

---

### [TIP] Aktuálnost pro rok 2026 je obecně udržená

Článek nepoužívá neukotvené „letos“ ani „příští rok“. Data jsou ukotvená k roku 2026 a update k 22. 9. 2026 odpovídá zadání. Studie ze 14. 9. 2026 je v textu konzistentně označená jako zářijová studie, ne jako dlouhodobě potvrzený standard.