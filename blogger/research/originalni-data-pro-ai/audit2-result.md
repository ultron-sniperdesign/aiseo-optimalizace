**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k této opravené verzi. Oproti 1. auditu je text výrazně lepší: zmizely hlavní absolutní sliby, title/description/answer jsou použitelnější a slovník je z větší části v souladu s brand voice. Přesto zůstává několik **věcných a citačně rizikových míst**, hlavně kolem **GSC/Search Generative AI reportů**, několika **nedoložených benchmarků** a jedné až dvou formulací, které jsou pořád příliš silné.

---

## Nálezy

### 1) [BLOCKER] Tvrzení o dostupnosti a podobě GSC reportů je stále příliš konkrétní a nedoložené
**Citace:**
- FAQ: „**od června 2026 jsou v GSC k dispozici dedikované reporty pro Search Generative AI**“
- Tělo: „**od června 2026 navíc Google v Search Console publikuje dedikované reporty pro Search Generative AI. Podle dostupných informací ukazují zobrazení v AI Overviews a AI Mode, ale neobsahují data na úrovni dotazů ani prokliků.**“

**Problém:**
Tohle je formulované jako hotový, ověřený stav produktu v přesném čase a s přesně popsaným rozsahem dat. Bez citace oficiální dokumentace Google je to na hraně. Navíc pojmenování „Search Generative AI“ nepůsobí jako veřejně ustálený oficiální název reportu; i kdyby interně/komunitně kolovalo, v článku to zní jako potvrzená terminologie Google.

**Návrh opravy:**
Změkčit a oddělit potvrzené od nepotvrzeného. Např.:
- „V Google Search Console se v roce 2026 objevují/reportují funkce a reporty související s AI vyhledáváním; jejich dostupnost a detail dat se může lišit podle trhu a účtu.“
- Pokud chcete zachovat konkrétnost, **doplňte zdroj** a používejte přesný oficiální název z dokumentace Google.
- Pokud zdroj nemáte, vynechat přesný měsíc, přesný název i detail „bez query/click dat“.

---

### 2) [BLOCKER] Článek opakovaně stojí na číselných benchmarkách bez uvedení zdroje
**Citace:**
- Frontmatter `stats`:
  - „**~2,3×** vyšší míra citací…“
  - „**~3×** vyšší riziko ztráty AI citací…“
  - „**~37 %** vyšší prokliky…“
- Tělo:
  - „Podle dostupných analýz citací z let 2025–2026…“
  - „bývají v některých analýzách… **2,3×** častěji“
  - „mívají podle některých analýz zhruba **3×** vyšší riziko“
  - „podle některých veřejných analýz **kolem 37 % vyšší míru prokliku**“

**Problém:**
Brzda „orientační benchmarky“ pomáhá, ale neřeší hlavní problém: článek uvádí velmi konkrétní čísla bez toho, aby čtenář mohl ověřit, z čeho přesně vycházejí. U textu o „originálních datech“ je to reputačně citlivé.

**Návrh opravy:**
- U každého benchmarku přidejte **konkrétní odkaz / poznámku pod čarou / sekci Zdroje**.
- Pokud zdroje nemáte dost pevné, převést na obecnější formulaci:
  - místo „2,3×“ → „v některých analýzách častěji“
  - místo „3×“ → „v některých analýzách častěji ztrácejí podíl citací“
  - místo „37 %“ → „na sociálních sítích často fungují lépe než obecné claimy bez čísel“
- Nechat čísla bez zdrojů v tomto tématu je slabina.

---

### 3) [WARNING] Úvodní claim je pořád trochu přestřelený
**Citace:**
„**Originální data jsou jedním z mála prostředků, kterými malá nebo střední firma může v roce 2026 reálně ovlivnit, co o jejím tématu AI říká.**“

**Problém:**
„jedním z mála prostředků“ je silné a těžko doložitelné zúžení. Ve skutečnosti AI výstupy ovlivňuje i kvalita obsahu, značka, technická dostupnost, autorita tématu, citovanost jinde, interní struktura webu atd.

**Návrh opravy:**
Např.:
- „Originální data jsou jedním z účinných způsobů, jak může malá nebo střední firma v roce 2026 zvýšit šanci, že se její web stane zdrojem pro AI odpovědi.“
- Tím se odstraní přehnané „z mála“.

---

### 4) [WARNING] Formulace „AI systémy … potřebují zdroj“ je stále místy příliš kategorická
**Citace:**
- „**AI systémy u konkrétních čísel obvykle potřebují dohledatelný zdroj**“
- „**AI model bez konkrétního podkladu takový údaj často nezopakuje nebo ho označí jako neověřitelný.**“

**Problém:**
První část s „obvykle“ je už relativně v pořádku. Druhá část ale popisuje chování modelů příliš jednotně. Různé systémy se liší: někdy číslo zopakují, někdy zkreslí, někdy necitují nic.

**Návrh opravy:**
- „…takový údaj často nedokáže spolehlivě doložit a může ho vynechat, zkreslit nebo uvést bez opory.“
To je věcně bezpečnější.

---

### 5) [WARNING] „Každá firma má dostatek vlastních dat“ je absolutní a nepravdivé
**Citace:**
„Realistický rozsah se liší podle velikosti, ale **každá firma má dostatek vlastních dat**, ze kterých se dá udělat výzkumný materiál.“

**Problém:**
Nemá. Nové firmy, malé B2B služby, nízké objemy poptávek nebo málo měřitelných interakcí dostatek dat mít nemusí.

**Návrh opravy:**
- „Mnoho firem už nějaká využitelná data má…“
- nebo „I menší firma často najde alespoň omezený datový základ…“

---

### 6) [WARNING] Doporučené počty respondentů jsou použitelné, ale znějí příliš univerzálně
**Citace:**
- „Pro orientační průzkum minimum **100 respondentů**, pro publikovatelnou studii **300 až 500**, pro silný marketingový dopad **1 000 a více**.“
- Frontmatter stats: „**100–1 000** realistický rozsah respondentů pro publikovatelný průzkum malé až střední firmy“

**Problém:**
Tohle jsou rozumné heuristiky pro marketingovou použitelnost, ale ne obecné pravidlo důvěryhodnosti. Záleží na velikosti populace, výběru vzorku, oboru a typu tvrzení.

**Návrh opravy:**
Doplnit brzdu přímo tam, kde čísla zazní:
- „…orientačně“
- „…pro marketingově využitelný průzkum bývá častý rozsah“
- „…nejde o statistické pravidlo pro všechny obory“

---

### 7) [WARNING] „Formáty, které se počítají jako primární zdroj“ je místy příliš jisté
**Citace:**
`<Checklist title="Formáty, které se počítají jako primární zdroj" … />`

**Problém:**
Ne každý uvedený formát je automaticky primární zdroj. Třeba případová studie bez metodiky nebo analýza veřejných dat bez vlastního přínosu primárním zdrojem být nemusí.

**Návrh opravy:**
Změnit nadpis například na:
- „Formáty, které se **mohou stát** primárním zdrojem“
- nebo „Formáty, ze kterých lze vytvořit primární zdroj“

---

### 8) [WARNING] V části „Jak to využít prakticky v Česku“ jsou dva široké claimy bez opory
**Citace:**
1. „**Konkurence je menší.**“
2. „**Veřejné datové soubory jsou málo využívané.**“

**Problém:**
Může to být prakticky pravda, ale takto obecně je to nepodložené. Zní to jako intuitivní tvrzení autora, ne jako auditovatelný fakt.

**Návrh opravy:**
- „V řadě českých oborů bývá konkurence menší než u anglických témat.“
- „Veřejná data se v marketingovém obsahu v Česku zatím často využívají méně, než by jejich potenciál odpovídal.“
Tím se z toho stane opatrnější expertní pozorování.

---

### 9) [WARNING] Citovatelnost: první odstavec je dobrý, ale stále trochu přetížený marketingovou tezí
**Citace:**
„Originální data jsou jedním z mála prostředků…“

**Problém:**
Prvních ~100 slov má fungovat jako samostatná odpověď. Tady to skoro funguje, ale první věta je hodnoticí a druhá už jde do mechaniky AI. Pro AI citovatelnost by šlo úvod ještě víc opřít o definici a postup.

**Návrh opravy:**
Začít definicí podobně jako ve frontmatter `answer`, třeba:
- „Originální data jsou vlastní průzkum, měření nebo analýza zveřejněná s jasnou metodikou…“
Pak teprve přejít k tomu, proč zvyšují šanci na citaci.
Není to blocker, ale pořád je tam prostor.

---

### 10) [TIP] Frontmatter `answer` je už v zásadě správně
**Citace:**
„Originální data jsou vlastní průzkum, měření nebo analýza…“

**Hodnocení:**
Tohle je oproti minulé verzi **dobré**: začíná definicí, má samostatný smysl, nepoužívá absolutní slib. Délka i struktura sedí.

**Návrh:**
Beze změny, maximálně sladit jemně s úvodem článku, aby nezačínaly dvě různé logiky.

---

### 11) [TIP] Zakázaný slovník je téměř vyčištěný, ale zůstává jedno místo s potenciálně nejasnou terminologií
**Citace:**
„**AI Mode**“, „**AI Overviews**“

**Problém:**
Není to zakázaný slovník, ale pro část českého publika je to bez vysvětlení interní produktová terminologie Google. V článku pro širší publikum by pomohlo jednou vysvětlit, co tím myslíte.

**Návrh opravy:**
Při prvním výskytu doplnit stručný český kontext:
- „…v přehledech AI ve výsledcích vyhledávání (AI Overviews) a v konverzačním režimu hledání (AI Mode)…“
Pokud to ponecháte.

---

### 12) [TIP] SEO metadata jsou v pořádku
**Citace:**
- Title: „Originální data pro AI citace: návod pro rok 2026“
- Description: „Originální data mohou zvýšit šanci…“
- Slug: `originalni-data-pro-ai`

**Hodnocení:**
- **Title**: dobrý, klíčové slovo je vpředu a délka je rozumná.
- **Description**: v limitu, bez přestřelení.
- **Slug**: smysluplný.
Tady není co vytýkat.

---

### 13) [TIP] H2/H3 struktura je logická, ale chybí interní odkazy v těle na související pilíře
**Citace:**
Článek má jen CTA odkazy na `/pack/` a `/audit/`.

**Problém:**
Zadání chce interní odkazy na relevantní sekce / pilíř / produkty. Produkty v CTA jsou splněné, ale v těle článku chybí provázání na související edukativní obsah, pokud takový web má.

**Návrh opravy:**
Pouze pokud tyto stránky existují, doplnit 1–3 interní odkazy v textu:
- na pilíř o AI citacích / AEO / GEO,
- na článek o strukturovaných datech,
- na článek o případových studiích nebo metodice průzkumu.
Není to blocker, ale článek by tím zesílil.

---

### 14) [TIP] CTA je tentokrát konkrétní a odpovídá zadání
**Citace:**
„**AI SEO Wireframe Pack za 1 490 Kč** … šablony pro benchmark, průzkum i případovou studii…“
„**AI SEO audit za 9 990 Kč** … navrhne, z jakých dat…“

**Hodnocení:**
Tohle je **správně**. CTA není generické a produkt je navázaný na téma článku.

**Návrh:**
Beze změny.

---

## Shrnutí
Po prvním auditu je článek **výrazně čistší a bezpečnější**, ale před publikací bych ještě opravil hlavně tyto body:

1. **GSC / Search Generative AI reporty** — zjemnit nebo doložit oficiálním zdrojem.  
2. **Benchmarky 2,3× / 3× / 37 %** — doplnit konkrétní zdroje, nebo převést na méně přesná tvrzení.  
3. **Absolutní formulace** typu „jedním z mála prostředků“, „každá firma má dostatek vlastních dat“ — zmírnit.  
4. **Počty respondentů** označit jasně jako orientační marketingovou heuristiku, ne obecné pravidlo.

Po těchto úpravách by článek byl velmi blízko stavu **PUBLIKOVAT**.