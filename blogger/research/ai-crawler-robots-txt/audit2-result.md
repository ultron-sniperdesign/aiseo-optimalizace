## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z velké části správným směrem: titulek, meta description, úvodní odpověď, CTA i varování před limity robots.txt jsou výrazně lepší. Zůstávají ale věcné a formulační problémy hlavně ve FAQ a u Google-Extended / Bytespideru. Před publikací bych článek ještě upravil.

---

## Nálezy

### [BLOCKER] Ve FAQ zůstal původní přehnaný claim o Bytespideru + zakázaný žargon

**Citace:**

> „například Bytespider podle dat z roku 2024 tvořil většinu AI crawler trafficu a pravidla často nedodržoval.“

**Problém:**

- V kontextu zadání píšete, že claim byl opraven na „patřil mezi nejaktivnější“, ale ve FAQ zůstala starší tvrdší formulace „tvořil většinu“.
- „Většinu“ znamená >50 %, což je silný kvantitativní claim a bez přesné citace zdroje je rizikový.
- „AI crawler trafficu“ je anglický žargon a porušuje požadovaný slovník. Použijte „provoz AI robotů“ nebo „návštěvy AI robotů“.

**Návrh opravy:**

> „Ne. Robots.txt je dobrovolná žádost, ne technická zábrana. Slušní roboti pravidla respektují, ale někteří je mohou ignorovat — například Bytespider byl ve veřejně citovaných datech z roku 2024 uváděn mezi velmi aktivními AI roboty a objevovala se hlášení o nerespektování robots.txt. Pro spolehlivé blokování je potřeba server, firewall nebo CDN.“

Ideálně doplnit odkaz na konkrétní zdroj dat, jinak nechte formulaci obecnější.

---

### [BLOCKER] FAQ slibuje „zakázání tréninku“ přes robots.txt příliš tvrdě

**Citace:**

> „Jak zakázat AI robotům používat můj obsah pro trénink?“  
> „V robots.txt přidejte pro tréninkové roboty (GPTBot, Google-Extended, CCBot a další) direktivu Disallow: /.“

**Problém:**

- Robots.txt není vynutitelný zákaz. Je to signál / žádost pro provozovatele, kteří ho respektují.
- „Google-Extended“ není robot, ale řídicí token v robots.txt.
- Formulace „zakázat používat můj obsah pro trénink“ je overclaim. V článku to jinde vysvětlujete správně, ale FAQ musí být samostatně přesná.

**Návrh opravy otázky:**

> „Jak dát najevo, že nechci obsah využívat pro trénink modelů?“

**Návrh opravy odpovědi:**

> „V robots.txt můžete slušným provozovatelům dát signál pomocí `Disallow: /` pro konkrétní tréninkové roboty, například GPTBot nebo CCBot. Google-Extended řešte zvlášť jako řídicí token pro služby Google. Není to technická záruka ani ochrana soukromého obsahu; pro tvrdé blokování použijte server, firewall nebo CDN.“

---

### [WARNING] Google-Extended je popsaný lépe než minule, ale „trénink generativních modelů“ je stále zúžené

**Citace:**

> „Google-Extended ovládá využití obsahu pro trénink modelů Google“  
> „jestli Google smí váš obsah použít pro trénink generativních modelů“

**Problém:**

U Google-Extended je bezpečnější držet se formulace podle dokumentace Googlu: jde o řízení využití obsahu pro generativní AI produkty/služby Googlu, typicky Gemini Apps a Vertex AI generativní API. Redukce jen na „trénink“ může být nepřesná nebo příliš úzká.

**Návrh opravy:**

> „Google-Extended je řídicí token v robots.txt, kterým podle dokumentace Googlu ovlivňujete, zda může být obsah webu využíván pro vybrané generativní AI služby Googlu, například Gemini Apps a Vertex AI generativní API. Neřídí běžné procházení, indexaci ani pozice v Google Search.“

Tuto formulaci sjednotit v tabulce, how-to kroku, FAQ i hlavní sekci.

---

### [WARNING] How-to krok vytváří falešnou volbu „citace, nebo soukromí“

**Citace:**

> „Rozhodněte: chcete citace, nebo soukromí?“  
> „Pro citace v AI odpovědích nechte projít vyhledávací roboty. Pokud nechcete obsah do tréninku modelů, omezte tréninkové roboty.“

**Problém:**

- „Soukromí“ je u robots.txt nebezpečné slovo. Článek sice později správně říká, že robots.txt nechrání neveřejný obsah, ale how-to krok může čtenáře navést špatně.
- Nejde o volbu „citace vs. soukromí“, ale „citovatelnost vs. omezení tréninku / procházení“.

**Návrh opravy názvu kroku:**

> „Rozhodněte: citovatelnost, nebo omezení tréninku?“

**Návrh opravy textu:**

> „Pro vyšší šanci na citace v AI odpovědích nechte projít vyhledávací roboty. Pokud nechcete dávat obsah k využití pro trénink nebo generativní AI služby, nastavte pravidla pro tréninkové roboty a řídicí tokeny. Soukromý obsah chraňte přihlášením, serverem nebo firewallem, ne robots.txt.“

---

### [WARNING] Přehled user-agentů je užitečný, ale některé role jsou příliš zjednodušené

**Citace:**

> „Claude-SearchBot, Claude-User | Anthropic | vyhledávání / načtení na vyžádání“  
> „PerplexityBot | Perplexity | procházení pro indexaci a odpovědi“  
> Kód:  
> ```txt
> User-agent: PerplexityBot
> Allow: /
> ```

**Problém:**

Článek správně upozorňuje, že názvy se mění, ale tabulka míchá některé roboty do jedné řádky a u Perplexity nezmiňuje oddělení běžného procházení a načtení na vyžádání, pokud ho podle aktuální dokumentace řeší samostatný user-agent. U článku s rokem 2026 je potřeba být přesnější.

**Návrh opravy:**

- Rozdělit `Claude-SearchBot` a `Claude-User` do samostatných řádků.
- Ověřit aktuální dokumentaci Perplexity a případně doplnit `Perplexity-User` jako načtení na vyžádání.
- Přidat krátkou poznámku:

> „User-agenty před nasazením ověřte v aktuální dokumentaci provozovatele; názvy i účely se mohou měnit.“

Tuto poznámku máte, ale doporučuji ji posílit odkazem na dokumentace hlavních služeb.

---

### [WARNING] U pravidel robots.txt chybí přesnější vysvětlení vztahu ke `User-agent: *`

**Citace:**

> „Ověřte, že pravidla nejsou v konfliktu s obecným `User-agent: *`.“

**Problém:**

Tohle je srozumitelné, ale technicky zjednodušené. U robots.txt typicky rozhoduje nejkonkrétnější odpovídající skupina user-agentů; obecné pravidlo `User-agent: *` nemusí fungovat jako prostý „konflikt“. Pro tutorial je lepší to říct přesněji, aby si čtenář nevyložil pravidla špatně.

**Návrh opravy:**

> „Ověřte, která skupina pravidel se na daného robota skutečně použije. U běžných parserů má konkrétní `User-agent` přednost před obecným `User-agent: *`, ale chování vždy testujte pro konkrétního robota.“

---

### [WARNING] „Citace v ChatGPT“ může působit jistěji, než odpovídá realitě

**Citace:**

> „Pokud chcete zvýšit šanci, že vás AI nástroje najdou a ocitují, nechte projít hlavně vyhledávací roboty.“  
> „Pokud chcete zvýšit šanci na citace v ChatGPT a Perplexity, vyhledávací roboty pusťte.“

**Problém:**

Formulace „zvýšit šanci“ je správně opatrná. Riziko je v tom, že článek může budit dojem, že povolení těchto robotů je hlavní podmínka citací. Ve skutečnosti je to jen technická dostupnost; citace ovlivňuje i indexace, autorita zdroje, obsahová relevance, rychlost, struktura stránky a konkrétní režim odpovědi nástroje.

**Návrh drobného doplnění po prvním kódu:**

> „Povolení robotů samo o sobě citace nezajistí. Jen odstraňuje technickou překážku, aby se obsah mohl dostat do vyhledávacích nebo odpovědních vrstev daného nástroje.“

---

### [WARNING] FAQ odpověď o Google-Extended je příliš absolutní

**Citace:**

> „Jeho blokace nemá vliv na pozice ve standardním vyhledávání Googlu — to řeší Googlebot.“

**Problém:**

Směr je správný a odpovídá dokumentaci Googlu, ale bezpečnější je formulace „podle dokumentace Googlu“ a „neřídí“. Vyhnete se absolutnímu slibu v oblasti, kde se pravidla mohou měnit.

**Návrh opravy:**

> „Podle dokumentace Googlu Google-Extended neřídí běžné procházení, indexaci ani pozice ve standardním Google Search. Ty řeší Googlebot a další běžné vyhledávací systémy Googlu.“

---

### [TIP] Statistika „bez licence“ je matoucí

**Citace:**

```yaml
stats:
  - value: "bez licence"
    label: "robots.txt je veřejný textový soubor"
```

**Problém:**

„Bez licence“ u robots.txt působí nejasně. Může to znít jako právní tvrzení o licenci, ne jako informace, že nejde o placený nástroj.

**Návrh opravy:**

Například:

```yaml
- value: "veřejný"
  label: "robots.txt je veřejný textový soubor"
```

nebo:

```yaml
- value: "bez nástroje"
  label: "robots.txt upravíte jako textový soubor"
```

---

### [TIP] Slug je použitelný, ale neodpovídá hlavní české frázi

**Citace:**

```yaml
slug: "ai-crawler-robots-txt"
```

**Problém:**

Slug je smysluplný a odpovídá části zadání („ai crawler“), ale hlavní cílové KW je „robots.txt pro ai“. Z hlediska českého webu by byl přirozenější slug typu:

> `robots-txt-pro-ai`

Pokud je ale slug už součástí zadání a interní architektury, není to důvod k blokaci.

---

## Co je v pořádku

- Titulek má klíčové slovo vepředu a délkově je v cílovém rozmezí.
- Meta description je pod 160 znaky a jasně shrnuje přínos.
- `answer` má cca 40–60 slov, začíná definicí a dává samostatný smysl.
- Úvodních ~100 slov funguje jako samostatná odpověď.
- Článek správně varuje, že robots.txt není zámek a nechrání soukromý obsah.
- CTA je konkrétní a vede na Pack za 1 490 Kč i Audit za 9 990 Kč.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ ani „backlink profil“ se v těle článku nevyskytují. Zůstává ale problémové „AI crawler trafficu“ ve FAQ.