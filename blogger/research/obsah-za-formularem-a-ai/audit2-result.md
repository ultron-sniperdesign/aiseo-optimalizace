## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po 1. auditu výrazně lepší, ale pořád v něm zůstávají technické zkratky u Googlu a několik absolutních formulací. Největší problém: některé části zmiňují jen jednu podmínku pro „není to maskování“, i když zdroj Googlu uvádí dvě.

---

## Nálezy

### [BLOCKER] Krátká odpověď vynechává druhou podmínku Googlu pro bránu bez maskování

**Problémové místo:**

> „Google takovou bránu nepovažuje za maskování, dokud vidí totéž co člověk s přístupem.“

Podle dodaného podkladu Google uvádí dvě podmínky:  
1. Google vidí celý obsah za bránou stejně jako člověk s přístupem.  
2. Web se drží obecných pravidel Flexible Sampling.

V krátké odpovědi druhá podmínka chybí. U tvrzení o Google pravidlech je to věcně významné zkreslení.

**Návrh opravy krátké odpovědi:**

> Obsah za formulářem je část webu dostupná až po registraci, přihlášení nebo odeslání údajů. Roboti, kteří web procházejí sami, ji bez zvláštního zpřístupnění běžně nepřečtou. Google bránu nepovažuje za maskování, pokud vidí totéž co člověk s přístupem a web dodržuje pravidla pro vzorkování.

Má 43 slov, začíná definicí a drží se doložených podmínek.

---

### [BLOCKER] Statistika ve frontmatteru tvrdí „jen tehdy“, ale uvádí jen jednu ze dvou podmínek

**Problémové místo:**

```yaml
- value: "totéž co člověk"
  label: "Google nepovažuje bránu za maskování jen tehdy, když vidí celý obsah za ní stejně jako člověk s přístupem..."
```

Formulace „jen tehdy“ je nepravdivě zúžená. Google podle dodaného zdroje vyžaduje také dodržení Flexible Sampling guidance.

**Návrh opravy:**

```yaml
- value: "totéž + vzorkování"
  label: "Google nepovažuje bránu za maskování, pokud vidí celý obsah za ní stejně jako člověk s přístupem a web dodržuje obecná pravidla pro vzorkování obsahu."
```

---

### [BLOCKER] FAQ o crawlable links dělá příliš silný závěr: „nemá jak najít“

**Problémové místo:**

> „Google navíc uvádí, že běžně projde jen odkaz zapsaný jako `<a href>` — co je dostupné až po odeslání formuláře, tedy nemá jak najít.“

Tohle je příliš absolutní. Google obecně extrahuje odkazy hlavně z `<a href>`, ale adresa může být dohledatelná i jinak: z interního odkazu jinde, sitemap, externího odkazu nebo už známé URL. Správný problém není vždy „nemá jak najít adresu“, ale často „najde adresu, ale bez přístupu neuvidí obsah“.

**Návrh opravy:**

> Google uvádí, že obecně dokáže procházet hlavně odkazy zapsané jako `<a href>`. Pokud se adresa materiálu objeví až po odeslání formuláře a není odkazovaná jinak, Google ji nemusí najít. A pokud ji najde, ale bez přístupu vidí jen formulář, obsah za bránou z ní nezíská.

---

### [BLOCKER] Search Console FAQ zaměňuje HTML za celkový pohled Googlu

**Problémové místo:**

> „Když je v kódu jen upoutávka a formulář, víc z té stránky nemá ani Google, ani nástroje, které z webu čerpají.“

To je technicky nebezpečné zjednodušení. Google stránku renderuje; rozhodující není jen stažený HTML kód, ale také vykreslená verze v Kontrole adresy URL. Článek to v těle vysvětluje lépe, ale FAQ opět sklouzává k absolutnímu tvrzení.

**Návrh opravy:**

> Když je ve staženém HTML i ve vykreslené verzi jen upoutávka a formulář, Google z té stránky nevidí samotný obsah za bránou. Proto je potřeba porovnat kód i snímek vykreslené stránky v Kontrole adresy URL.

---

### [BLOCKER] Kontrolní seznam a oprava chyby 02 opět vynechávají Flexible Sampling

**Problémové místo v checklistu:**

> „Dostává Google totéž co člověk s přístupem? Pokud ne, není to brána podle pravidel.“

**Problémové místo v Mistake 02:**

> `fix="Ukázat robotovi totéž co člověku s přístupem; u placeného obsahu to označit daty."`

Obě místa dávají praktický návod, ale neuvádějí kompletní podmínky z Google dokumentace. U návodu je to horší než v teorii: čtenář si může odnést, že stačí pustit Google k plnému obsahu.

**Návrh opravy checklistu:**

> Dostává Google totéž co člověk s přístupem a držíte se pravidel pro vzorkování? Pokud ne, nejde o bránu podle podmínek, které Google popisuje jako výjimku z maskování.

**Návrh opravy Mistake 02 fixu:**

> Ukázat Googlu totéž co člověku s přístupem, dodržet pravidla pro vzorkování a u placeného obsahu určeného k indexaci doplnit strukturovaná data.

---

### [WARNING] FAQ u strukturovaných dat znovu slibuje víc než zdroj

**Problémové místo:**

> „Pro placený obsah k tomu Google dokumentuje strukturovaná data s vlastností `isAccessibleForFree`, kterými bránu od maskování odliší.“

Zdroj říká, že strukturovaná data Googlu **pomáhají odlišit** paywalled content od maskování. Ne že ho vždy „odliší“. Navíc popis je neúplný: v dokumentaci je důležitá i část `hasPart` / `cssSelector`, ne jen `isAccessibleForFree`.

**Návrh opravy:**

> Pro placený obsah k tomu Google dokumentuje strukturovaná data, která mu pomáhají odlišit placenou část od maskování. Typicky se označuje, že obsah není zdarma přístupný, a pomocí `hasPart` / `cssSelector` se vyznačí část stránky za bránou.

---

### [WARNING] Úvod obsahuje nedoložené srovnání „častěji“

**Problémové místo:**

> „Systém se častěji opře o veřejnou stránku, která tu samou otázku vysvětluje dostupně.“

„Častěji“ zní jako měřený fakt, ale v článku není doložené číslo ani metodika. Claim je pravděpodobný, ale má být formulovaný opatrněji.

**Návrh opravy:**

> Systém se pak může opřít spíš o veřejnou stránku, která stejnou otázku vysvětluje dostupně.

Nebo ještě bezpečněji:

> Zvyšuje se tím riziko, že odpověď nevznikne z vašeho zdroje, ale z dostupnější stránky jinde.

---

### [WARNING] Některé formulace tvrdí „odpověď si vezmou odjinud“ příliš jistě

**Problémové místo:**

> „Pro stroje je to prázdné místo a odpověď si vezmou odjinud.“

To je srozumitelné, ale absolutní. Ne vždy systém odpoví odjinud; někdy neodpoví, někdy necituje nikoho, někdy použije starší data.

**Návrh opravy:**

> Pro stroje je to prázdné místo a odpověď se může opřít o dostupnější zdroje jinde.

---

### [WARNING] „Za obecný text nikdo e-mail nedá“ je moc kategorické

**Problémové místo:**

> „Za obecný text nikdo e-mail nedá — a vy si jím zavřete i cestu do odpovědí.“

Tohle je marketingově úderné, ale příliš absolutní. Není doložitelné, že „nikdo“. Navíc článek jinak drží věcný tón.

**Návrh opravy:**

> Za obecný text dostupný na mnoha jiných webech lidé obvykle e-mail nedávají rádi — a vy si tím zároveň zhoršujete cestu do odpovědí.

---

### [WARNING] FAQ o cenách je příliš tvrdé: „přenechá odpověď cizím zdrojům“

**Problémové místo:**

> „Kdo cenu schová, přenechá odpověď cizím zdrojům — a systém může sáhnout po zastaralém čísle odjinud.“

První část je absolutní. Schovaná cena zvyšuje riziko, ale nepřenechává odpověď vždy a nutně.

**Návrh opravy:**

> Kdo cenu schová, zvyšuje riziko, že systém použije cizí zdroje — a může sáhnout i po zastaralém čísle odjinud.

---

### [WARNING] „Robot si nevytvoří účet“ je dobré pro běžné procházení, ale chce přesnější subjekt

**Problémové místo:**

> „Robot si nevytvoří účet a neodešle formulář.“

V kontextu je to pochopitelné, ale technicky přesnější je mluvit o robotech, kteří web procházejí automaticky. Článek později správně rozlišuje `OAI-SearchBot`, `GPTBot` a `ChatGPT-User`, takže by první věta neměla působit plošně.

**Návrh opravy:**

> Vyhledávací robot při běžném automatickém procházení nevytvoří účet a neodešle formulář.

---

### [TIP] U `curl` testu chybí varianta pro netechnického majitele webu

**Problémové místo:**

> „Odhlášeně a bez JavaScriptu, třeba příkazem curl.“

Po 1. auditu je tvrzení už technicky správně opatrné. Pro B2B majitele nebo e-shopaře bez technika ale pořád není jasné, co má přesně chtít po dodavateli.

**Návrh doplnění do stejného kroku:**

> Pokud `curl` nepoužíváte, požádejte správce webu o stažený HTML výstup stránky pro odhlášeného návštěvníka a porovnejte ho s vykreslenou verzí v Search Console.

---

### [TIP] Vysvětlit „vzorkování“ jednou lidsky hned při prvním výskytu

**Problémové místo:**

> „web se musí držet obecných pravidel pro vzorkování obsahu“

Termín je správný, ale pro netechnické čtenáře může být nejasný. Později jsou příklady 6–10 článků a měsíční měření, ale první výskyt by mohl být srozumitelnější.

**Návrh opravy:**

> …web se musí držet obecných pravidel pro vzorkování obsahu, tedy řízeného zpřístupnění části obsahu uživatelům z Vyhledávání.

---

### [TIP] SEO metadata jsou v pořádku, jen title počítat podle znaků v CMS

**Kontrola:**

- `title`: klíčové slovo je vepředu, délka cca 50 znaků — v pořádku.
- `seoTitle`: cca 53 znaků — v pořádku.
- `description`: cca 150 znaků — v pořádku.
- `slug`: smysluplný a odpovídá tématu.
- Interní odkazy: relevantní (`ceny-na-webu-a-ai`, `chatbot-na-webu-a-ai-viditelnost`, `test-viditelnosti-v-ai`, `roboti-vyvolani-uzivatelem`).

Jen doporučuji ověřit skutečné počítání znaků ve vašem CMS/build pipeline, protože české znaky a dvojtečka někdy v nástrojích vycházejí mírně jinak.

---

### [TIP] CTA je relevantní a odpovídá pravidlům webu

**Dobře:**

> „AI SEO Wireframe Pack za 1 490 Kč je PDF se sedmi drátěnými modely typů stránek.“

CTA míří na konkrétní produkt, používá cenu a správně popisuje Pack jako PDF se sedmi drátěnými modely. Pro tutorial je to vhodnější než tlačit audit. Tady není potřeba měnit nic zásadního.

---

## Krátké shrnutí priorit oprav

1. Opravit `answer` a `stats`, aby vždy obsahovaly obě Google podmínky: stejný obsah pro Google jako pro člověka s přístupem + Flexible Sampling.  
2. Opravit FAQ o `<a href>` a Search Console, protože teď technicky přestřelují.  
3. V checklistu a Mistake 02 doplnit Flexible Sampling, jinak praktický návod svádí k neúplné implementaci.  
4. Změkčit absolutní marketingové formulace typu „odpověď si vezmou odjinud“, „nikdo e-mail nedá“, „přenechá odpověď cizím zdrojům“.