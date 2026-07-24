## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je po 1. auditu výrazně lepší: zakázané termíny jsou většinou odstraněné, CTA míří na konkrétní produkty, title i description jsou použitelné a odpověď má správnou délku. Stále ale zůstává několik věcných a formulačních rizik — hlavně přisuzování E-E-A-T přímo AI systémům a nedostatečně ukotvené claims k QRG 2025/2026 a AI citacím.

---

## Nálezy a cílené opravy

### [BLOCKER] Frontmatter `answer` přisuzuje E-E-A-T přímo AI systémům

> „…ale rámec signálů, podle kterých Google i AI systémy odhadují, jestli zdroji věřit.“

**Problém:**  
E-E-A-T je koncept z Google Search Quality Rater Guidelines. U Googlu je potřeba být přesný: nejde o přímý hodnoticí faktor ani známý algoritmický mechanismus. U AI systémů je tvrzení ještě rizikovější — není doložené, že „podle E-E-A-T“ odhadují důvěryhodnost. Bezpečné je říct, že stejné typy signálů jim mohou pomáhat zdroj lépe vyhodnotit.

**Návrh opravy frontmatter `answer`:**

> „E-E-A-T je zkratka pro Experience, Expertise, Authoritativeness a Trust — zkušenost, odbornost, autoritativnost a důvěryhodnost. Pochází z Google Search Quality Rater Guidelines pro hodnotitele kvality výsledků. Není to skóre ani přímý hodnoticí faktor; je to rámec důvěry, jehož signály mohou pomáhat vyhledávačům i AI systémům lépe pochopit, komu a čemu věřit.“

Splňuje definici na začátku, je samostatná a drží se bezpečnějšího claimu.

---

### [WARNING] Stejný overclaim je i v prvním odstavci těla článku

> „…je to sada signálů, které pomáhají Googlu i AI systémům odhadnout důvěryhodnost zdroje.“

**Problém:**  
Opět to zní, jako by Google a AI systémy používaly E-E-A-T stejným způsobem. To není doložitelné. Prvních ~100 slov je přitom klíčových pro citovatelnost, takže musí být fakticky neprůstřelná.

**Návrh opravy:**

> „Není to přímý hodnoticí faktor ani skóre — je to veřejný rámec důvěry, který popisuje, jaké vlastnosti obsahu, autora a webu hodnotitelé Googlu sledují. Podobné ověřitelné signály mohou pomáhat i AI systémům lépe pochopit, kdo za obsahem stojí a proč mu věřit.“

---

### [WARNING] „Aktuální verze“ QRG není ukotvená k datu ověření

> „aktuální verze ze září 2025 má 182 stran“  
> `stats: value: "182 stran" label: "má aktuální verze Quality Rater Guidelines (září 2025)…"`

**Problém:**  
Článek je aktualizovaný 24. 7. 2026. Tvrzení „aktuální verze“ je časově citlivé. Pokud Google vydal mezi zářím 2025 a červencem 2026 novější PDF, bude článek fakticky špatně. I pokud je tvrzení správné, musí být ukotvené.

**Návrh opravy:**

V textu i ve `stats` změnit na:

> „nejnovější veřejně dostupná verze ověřená k 24. 7. 2026 má 182 stran“

nebo bezpečněji:

> „citovaná verze Search Quality Rater Guidelines ze září 2025 má 182 stran“

Pokud není ručně ověřeno k 24. 7. 2026, nepoužívat slovo „aktuální“.

---

### [WARNING] Změny QRG v lednu a září 2025 potřebují přesnější doložení

> „V lednu 2025 přibyla pravidla pro hodnocení AI generovaného obsahu — text vytvořený s minimální lidskou přidanou hodnotou spadá do nejnižší kvality — a verze ze září 2025 upravila kategorie YMYL.“

**Problém:**  
Jde o konkrétní historické tvrzení. Odkaz vede na aktuální PDF, ale čtenář nevidí, kde přesně se změna nachází ani jestli jde o změnu oproti předchozí verzi. Pro věcný článek o E-E-A-T je to důležitý claim.

**Návrh opravy:**

Doplnit za větu krátké ukotvení:

> „Viz část [doplnit přesnou část/stranu v QRG] a changelog / srovnání verzí [doplnit zdroj].“

Pokud nechcete doplňovat changelog, zjemnit formulaci:

> „V lednové verzi 2025 jsou výslovněji popsané případy obsahu s minimální lidskou přidanou hodnotou, včetně generovaného obsahu.“

---

### [WARNING] Přesný název YMYL kategorie ověřit proti QRG

> „Google rozšířil dřívější „YMYL Society“ na **„YMYL Government, Civics & Society“**…“

**Problém:**  
U oficiálních kategorií je potřeba držet přesný název z dokumentu. Formulace s ampersandem může být nepřesná, pokud QRG používá jiný zápis typu „Government, Civics, and Society“. Navíc „rozšířil“ je změnové tvrzení, které potřebuje oporu.

**Návrh opravy:**

Ověřit přesné znění v QRG a sjednotit. Bezpečnější varianta:

> „Ve verzi ze září 2025 je YMYL oblast veřejného života popsaná jako „Government, Civics, and Society“ [přesný název ověřit podle QRG]. Přibývá tím důraz na obsah, který může ovlivnit důvěru ve veřejné instituce.“

Pokud není doložené, že šlo o „rozšíření“, nepoužívat sloveso „rozšířil“.

---

### [WARNING] Nepodložený claim o recenzních webech a klesající lidské návštěvnosti

> „recenzní weby se v AI odpovědích objevují dál, i když jim lidská návštěvnost klesá“

**Problém:**  
To je dvojité tvrzení:  
1. recenzní weby se dál objevují v AI odpovědích,  
2. jejich lidská návštěvnost klesá.  

Bez odkazu na měření nebo zdroj je to nedoložené. Navíc „recenzní weby“ je široká kategorie — u některých to může být pravda, u jiných ne.

**Návrh opravy:**

Pokud máte vlastní data:

> „V našich testech vybraných dotazů se recenzní a srovnávací weby v AI odpovědích stále objevují; podrobnosti rozebírá samostatný článek.“

Pokud data nemáte:

> „Recenzní a srovnávací weby mohou být pro AI odpovědi užitečné tam, kde agregují zkušenosti, hodnocení a srovnání produktů.“

Odstranit část „i když jim lidská návštěvnost klesá“, pokud není doložená.

---

### [WARNING] Nepodložený claim o českém trhu

> „V českém prostředí je u řady témat stále méně obsahu s jasným autorem, vlastními daty a transparentním provozovatelem než v silně konkurenčních anglických výsledcích…“

**Problém:**  
Tvrzení může být pravdivé, ale v článku není doložené. „U řady témat“ a srovnání s anglickými výsledky působí jako závěr z analýzy, kterou čtenář nevidí.

**Návrh opravy:**

Pokud vychází z auditů Sniperdesign:

> „V auditech českých webů často vidíme, že u odborných témat chybí jasný autor, vlastní data a transparentní provozovatel. Právě tyto prvky proto mohou menší web odlišit.“

Pokud to není podložené:

> „Na menším českém trhu může být vlastní zkušenost, jasný autor a transparentní provozovatel výraznější odlišovací prvek než generický překladový obsah.“

---

### [WARNING] „Autoritu nemůžete vyrobit u sebe na webu“ je příliš absolutní

> „Třetí složka je jediná, kterou **nemůžete vyrobit u sebe na webu** — autorita je to, co o vás říkají ostatní.“

**Problém:**  
Směr je správný — autorita silně závisí na reputaci mimo web. Ale absolutní formulace je nepřesná. Autoritu částečně podporuje i kvalita vlastního publikačního portfolia, interní prolinkování, jasné tematické pokrytí a autorské stránky. Externí signály jsou zásadní, ale ne jediné.

**Návrh opravy:**

> „Třetí složka nejvíc závisí na tom, co o vás říkají ostatní. Vlastní web může autoritu podpořit kvalitním tematickým pokrytím a autorskými profily, ale nejsilnější signály vznikají mimo něj.“

---

### [WARNING] „Jeden z hlavních způsobů“ je silný, nedoložený claim

> „…jsou v roce 2026 právě tyhle signály jedním z hlavních způsobů, jak odlišit doložený obsah z praxe od zaměnitelných textů.“

**Problém:**  
„Jeden z hlavních způsobů“ je hodnoticí claim. Bez zdroje nebo interního výzkumu je bezpečnější zjemnit. Brand voice má vysvětlovat, ne tlačit silnými tvrzeními.

**Návrh opravy:**

> „…jsou v roce 2026 tyhle signály praktickým způsobem, jak odlišit doložený obsah z praxe od zaměnitelných textů.“

nebo:

> „…patří mezi signály, které pomáhají odlišit doložený obsah z praxe od zaměnitelných textů.“

---

### [TIP] FAQ odpověď naznačuje souvislost s ChatGPT víc, než je nutné

> „Druhé E — Experience — Google přidal v prosinci 2022, krátce po spuštění ChatGPT.“

**Problém:**  
Chronologicky to sedí, ale formulace může naznačovat kauzalitu: Google přidal Experience kvůli ChatGPT. Pokud to nechcete dokazovat zdrojem, lepší je neutrálnější formulace.

**Návrh opravy:**

> „Druhé E — Experience — Google přidal v prosinci 2022, ve stejné době, kdy rychle rostla pozornost kolem generovaného obsahu.“

nebo ponechat „krátce po spuštění ChatGPT“, ale nepřidávat žádné kauzální vysvětlení.

---

### [TIP] Neobratné/slovníkově rizikové slovo „korroborační“

> „Spoléhá na korroborační signály…“

**Problém:**  
Slovo je pro běžného čtenáře těžké a působí akademicky. Navíc zápis „korroborační“ je problematický; v češtině bude srozumitelnější „ověřovací“ nebo „podpůrné“.

**Návrh opravy:**

> „Spoléhá na ověřovací signály: podepsaný autor, ověřitelný provozovatel a tvrzení, která sedí s dalšími důvěryhodnými zdroji.“

---

### [TIP] Insight o jazykovém modelu zjednodušuje fungování AI systémů

> „Jazykový model nemá redakci, která by zdroj prověřila.“

**Problém:**  
Samotný jazykový model redakci nemá, ale AI vyhledávací systémy mohou mít retrieval, ranking, bezpečnostní vrstvy a produktová pravidla. Formulace je edukativně srozumitelná, ale technicky zjednodušuje.

**Návrh opravy:**

> „Samotný jazykový model nemá lidskou redakci, která by každý zdroj prověřila. AI vyhledávací systémy proto potřebují pracovat s ověřitelnými signály: podepsaný autor, transparentní provozovatel a tvrzení, která sedí s dalšími důvěryhodnými zdroji.“

---

### [TIP] CTA je relevantní, ale může lépe rozlišit, kdy zvolit audit a kdy pack

> „Pokud chcete odborně posoudit, jak si web stojí s důvěryhodností a viditelností v AI, pomůže produktový AI SEO audit za 9 990 Kč. Pokud chcete postupovat sami podle hotové předlohy, je tu AI SEO Wireframe Pack za 1 490 Kč.“

**Hodnocení:**  
Splňuje požadavek — CTA vede na konkrétní produkty, ne na generické „kontaktujte nás“.

**Návrh drobné opravy pro vyšší relevanci:**

> „Chcete nejdřív zjistit slabá místa důvěryhodnosti? Zvolte AI SEO audit za 9 990 Kč. Chcete si autorské profily, strukturu obsahu a signály důvěry projít sami podle předlohy? Použijte AI SEO Wireframe Pack za 1 490 Kč.“

---

## Co je dobře

- **Title:** 55 znaků, klíčové slovo „E-E-A-T“ je vepředu. SEO požadavek splněn.  
- **Meta description:** délka je v normě a dobře shrnuje obsah.  
- **Struktura H2:** logická, čitelná, odpovídá cílovému dotazu „co je E-E-A-T“.  
- **FAQ:** otázky jsou reálné a odpovědi většinou samostatné.  
- **Interní odkazy:** článek dobře zapadá do clusteru důvěryhodnosti a AI citací.  
- **Zakázané termíny:** „schema markup“, „answer block“, „hub-and-spoke“, „backlink profil“ se v problematické podobě nevyskytují.  
- **CTA:** vede na konkrétní produkty s cenou, požadavek splněn.