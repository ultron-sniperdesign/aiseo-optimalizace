## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Refresh je fakticky výrazně lepší než stará verze: opravuje název Seznam Webmaster, zachází opatrně s rozporem tisková zpráva × nápověda, správně uvádí metodiku StatCounteru, nepočítá Heureku do Seznamu a upozorňuje, že zdroje u odpovědi Seznam AI nejsou důkazem použití. Přesto v článku zůstává několik věcných vad a příliš silných tvrzení.

---

## Nálezy

### [BLOCKER] Tvrzení o modelech vynechává podmínku „přes Microsoft Azure“

**Citace:**

> „…kombinuje vlastní model SeLLMa s modely OpenAI.“

Je to ve frontmatteru `answer` i v prvním odstavci těla článku.

**Problém:**  
Podklady uvádějí přesnější podmínku: Seznam AI kombinuje SeLLMu s modely OpenAI **přes Microsoft Azure**. U tvrzení o cizí platformě je vynechaná podmínka blocker, protože formulace „s modely OpenAI“ může vyznít jako přímé použití OpenAI služeb, zatímco dokumentace uvádí Azure.

**Návrh opravy:**  
Ve všech výskytech doplnit:

> „…kombinuje vlastní model SeLLMa s modely OpenAI přes Microsoft Azure.“

---

### [BLOCKER] Tvrzení o tom, co „ukáže“ Seznam Webmaster, stojí jen na dokumentaci, ne na UI

**Citace:**

> „Nástroj Seznamu ukáže, kolik stránek navštívil robot, kolik jich je v indexu a které hlásí chybu.“

**Problém:**  
Brief výslovně říká, že řádek **Rozhraní (UI)** je prázdný: autor se do Seznam Webmasteru nepřihlašoval. V tomto kole platí pravidlo, že tvrzení o tom, co uživatel uvidí na obrazovce, se nesmí opírat jen o dokumentaci.

**Návrh opravy:**  
Přepsat tak, aby bylo jasné, že jde o informaci z nápovědy, ne o ověřené UI:

> „Nápověda Seznam Webmasteru popisuje přehledy pro navštívené stránky, indexaci, přesměrování a chyby. Autor článku rozhraní netestoval.“

---

### [BLOCKER] „Přihlášení uživatelé z nich mohou pokračovat do Seznam AI“ je UI/flow tvrzení bez opory v ověřeném rozhraní

**Citace:**

> „Přihlášení uživatelé z nich mohou pokračovat do Seznam AI.“

**Problém:**  
Jde o tvrzení o uživatelském chování v rozhraní výsledků vyhledávání. Brief říká, že Seznam AI nebyl testován a řádek UI je prázdný. V dodané tabulce ověření je doloženo, že nápověda popisuje „Vychytávky“, ale nevidím v podkladech výslovně doložený tento konkrétní flow claim.

**Návrh opravy:**  
Buď doplnit přesnou oporu z nápovědy Seznamu, pokud tam věta skutečně je, nebo formulaci odstranit. Bez UI testu bezpečnější varianta:

> „Nápověda Vyhledávání tyto prvky popisuje jako součást výsledků vyhledávání.“

---

### [BLOCKER] „Feed pro Zboží.cz je jediná doložená cesta…“ přehlíží Sklik inzeráty v Seznam AI

**Citace:**

> „Feed pro Zboží.cz je jediná doložená cesta, jak se s nabídkou dostat do Seznam AI.“

**Problém:**  
Podle nápovědy Seznam AI se v něm zobrazují i **inzeráty Skliku** z vyhledávacích a Chytrých kampaní. Tvrzení „jediná doložená cesta“ je proto příliš silné, pokud „nabídka“ zahrnuje i placenou reklamní nabídku.

**Návrh opravy:**  
Zúžit tvrzení na produktové nabídky z feedu:

> „Feed pro Zboží.cz je doložená cesta, jak dostat produktové nabídky z feedu do Seznam AI. Reklamní zobrazení může vzniknout také přes vyhledávací nebo Chytré kampaně ve Skliku.“

---

### [BLOCKER] Doporučení k odhlášení z AI odpovědí neuvádí všechny doložené možnosti

**Citace:**

> `<Mistake num="03" title="Zakázat kvůli AI SeznamBota" fix="Pro AI odpovědi použijte některý z AI tokenů.">`

**Problém:**  
V textu článku jinde správně uvádíte i `nosnippet`, ale v této opravě zůstává jen „některý z AI tokenů“. Podmínky v briefu uvádějí čtyři možnosti: `Seznam-Extended`, `AI`, `MachineLearning` nebo `nosnippet` s dopadem na úryvky. Vynechání části podmínek u cizí platformy je blocker.

**Návrh opravy:**  
Upravit fix např.:

> `fix="Pro AI odpovědi použijte některý z AI tokenů, případně nosnippet s vědomím, že vypne i úryvky ve výsledcích."`

---

### [WARNING] Datum „od května 2026“ u Seznam Nákupů není v dodaných podkladech doložené

**Citace:**

> „Placené nabídky Seznam Nákupů se v Seznam AI zobrazují od května 2026.“

A podobně:

> „Placené nabídky Seznam Nákupů z feedu se v Seznam AI zobrazují od května 2026.“

**Problém:**  
Brief dokládá, že nabídky Seznam Nákupů se v Seznam AI zobrazují, ale nevidím v něm doložení přesného začátku „od května 2026“. Pokud to není přímo v nápovědě nebo tiskové zprávě, je datum navíc.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj Seznamu k datu, nebo bezpečně odstranit datum:

> „Placené nabídky Seznam Nákupů z feedu se podle nápovědy v Seznam AI zobrazují.“

---

### [WARNING] „Registrace je zdarma, zobrazení vyžaduje kredit“ potřebuje oporu ze Zboží.cz

**Citace:**

> „Registrace je zdarma, zobrazení vyžaduje kredit.“

**Problém:**  
Tohle je věcné tvrzení o podmínkách Zboží.cz / Seznam Nákupů. V podkladech pro tento článek je doloženo, že nabídky Seznam Nákupů se v Seznam AI zobrazují, ale nevidím zde doložení bezplatné registrace a kreditu.

**Návrh opravy:**  
Buď doplnit konkrétní zdroj z nápovědy Zboží.cz / Seznam Nákupů, nebo větu z článku odstranit. Bez doplnění zdroje doporučuji zkrátit na:

> „E-shop potřebuje funkční produktový feed pro Zboží.cz / Seznam Nákupy.“

---

### [WARNING] „Čísla se liší o víc než deset procentních bodů“ je číselné tvrzení bez viditelné opory v tomto článku

**Citace:**

> „Čísla o podílu Seznamu se proto mezi zdroji liší o víc než deset procentních bodů…“

**Problém:**  
Článek správně uvádí metodiku StatCounteru, ale konkrétní rozdíl „o víc než deset procentních bodů“ není v tomto textu doložený konkrétními porovnávanými zdroji. Interní odkaz může vysvětlení obsahovat, ale tady tvrzení stojí samostatně.

**Návrh opravy:**  
Buď přímo uvést porovnávané zdroje v článku, nebo tvrzení oslabit bez čísla:

> „Čísla o podílu Seznamu se proto mezi zdroji liší podle metodiky měření…“

---

### [WARNING] Některá „dnes“ jsou u rychle se měnící služby málo ukotvená

**Citace:**

> „Podle nápovědy dnes Seznam AI pracuje…“

> „Co z toho firma ovlivní už dnes…“

> „…nápověda a web asistent.seznam.cz dnes používají název Seznam AI…“

**Problém:**  
Článek jinak správně pracuje se stavem k 14. 10. 2026, ale u proměnlivých informací o betě je vhodnější nepoužívat volné „dnes“. V aktuálnostní ose má být obsah ukotvený k roku/datu.

**Návrh opravy:**  
Nahradit u faktických tvrzení:

> „k 14. 10. 2026“

Např.:

> „Podle nápovědy k 14. 10. 2026 Seznam AI pracuje…“

---

### [WARNING] Tvrzení o „webu asistent.seznam.cz“ může být problém, pokud nebylo ověřeno mimo UI

**Citace:**

> „…nápověda a web asistent.seznam.cz dnes používají název Seznam AI…“

**Problém:**  
Brief říká, že Seznam AI nebyl testován a UI řádek je prázdný. Pokud autor neověřoval webové rozhraní, bezpečně doložená část je hlavně „nápověda používá název Seznam AI“. Tvrzení o webu `asistent.seznam.cz` je nutné opřít o stažený text stránky nebo odstranit.

**Návrh opravy:**  
Bez UI ověření zúžit:

> „Nápověda Seznam AI k 14. 10. 2026 používá název Seznam AI; tisková zpráva z května 2026 ještě mluvila o Seznam Asistentovi.“

---

### [TIP] Formulace o Heurece je už dostatečně opatrná

**Citace:**

> „Heureka není služba Seznamu — podle Lupy.cz byly v květnu 2023 jejími jedinými akcionáři skupiny PPF a EC Investments.“

**Hodnocení:**  
Tady je formulace v pořádku. Je opřená o konkrétní zdroj a netvrdí víc, než doklad unese.

---

### [TIP] StatCounter je zpracovaný korektně

**Citace:**

> „StatCounter ale nepočítá hledání: měří prokliky na weby, které mají jeho měřicí kód, a data ještě 45 dní reviduje.“

**Hodnocení:**  
Tohle je fakticky správně vůči briefu. Článek správně neinterpretuje StatCounter jako podíl všech hledání.