## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je dobře strukturovaný, má použitelnou krátkou odpověď, logické FAQ, přirozené interní odkazy a relevantní CTA. Neprošel by ale bez úprav kvůli několika věcným a formulačním rizikům: hlavně příliš kategorické závěry o tom, „co se vybírá“, globální formulace rolloutů Googlu a nedostatečně doložený primární zdroj.

---

## Nálezy a opravy

### [BLOCKER] Chybí primární zdroj Googlu k hlavnímu tvrzení článku

**Problémové místo:**

> *Zdroje: [Google Updates AI Overviews and AI Mode to Drive More Clicks to Publishers](https://seohandbook.co.uk/seo-news-updates/google-ai-overviews-link-updates-may-2026/), SEO Handbook, oznámení Googlu z 6. 5. 2026...*

Článek tvrdí, že Google oznámil konkrétních pět změn. Ve zdrojích je ale uveden sekundární článek SEO Handbook, ne přímý Google blog / Google Search Central / oficiální oznámení.

**Proč je to problém:**  
Hlavní argument článku stojí na přesném znění oznámení Googlu. Zadání výslovně říká „ověřit přesné znění u Googlu“. Sekundární zdroj nestačí.

**Návrh opravy:**

- Doplnit přímý odkaz na oficiální oznámení Googlu.
- Pokud primární zdroj není dostupný, upravit formulaci na opatrnější:

> Podle květnového oznámení Googlu, které popisují i oborová média, se v AI Overviews a AI Mode začaly objevovat nové způsoby práce s odkazy…

A ve zdrojích jasně oddělit:

> Primární zdroj: Google, oznámení z 6. 5. 2026.  
> Sekundární shrnutí: SEO Handbook, Nieman Lab.

---

### [BLOCKER] Rozpor v datu oznámení oproti zadání plánu

**Problémové místo v článku:**

> Google oznámil 6. května 2026 pět úprav…

**Rozpor se zadáním z plánu:**

> mezi pěti změnami, které Google oznámil 27. 5. 2026…

**Proč je to problém:**  
V research části je uvedeno 6.–7. 5. 2026, článek používá 6. 5. 2026, ale plán uvádí 27. 5. 2026. Bez vysvětlení to vypadá jako chyba v datu.

**Návrh opravy:**

- Ověřit primární zdroj Googlu.
- Sjednotit datum ve všech podkladech.
- Pokud šlo o oznámení 6. 5. a pozdější přejímku / rozšíření 27. 5., uvést přesně:

> Google změny oznámil 6. 5. 2026; některá oborová média je dále rozebírala koncem května.

---

### [BLOCKER] Příliš kategorické tvrzení: „úhel je to, co se vybírá“

**Problémové místo ve frontmatteru:**

```yaml
stats:
  - value: "úhel"
    label: "je to, co se do téhle sekce vybírá — ne obecný přehled tématu"
```

**Problémové místo v textu:**

> Web, který má deset textů o deseti konkrétních věcech, má do ní co nabídnout. Web s jedním velkým článkem o všem nemá.

**Proč je to problém:**  
Google podle zadání neuvedl kritéria výběru. Článek z pozorování dělá pravidlo. To je overclaim.

**Návrh opravy:**

Změnit na opatrnější formulaci:

```yaml
stats:
  - value: "úhel"
    label: "může být praktický způsob, jak téma pro tuto plochu připravit"
```

A v textu:

> Web, který má více textů k různým konkrétním aspektům tématu, může mít pro tuto plochu vhodnější materiál než web s jedním obecným přehledem. Neznamená to ale jistotu zobrazení — Google kritéria výběru nezveřejnil.

---

### [BLOCKER] Tvrzení „nesoutěží se značkou“ je věcně přehnané

**Problémové místo ve shrnutí:**

> **Pro menší weby je to schůdnější pole** — nesoutěží se značkou, ale zpracováním jednoho úhlu.

**Problémové místo v tabulce:**

> S kým soutěžíte:  
> Hlavní citace: „S velkými značkami a zavedenými weby“  
> Návrh „kam dál“: „S kýmkoli, kdo zpracoval právě tenhle úhel“

**Proč je to problém:**  
I u dílčích návrhů může autorita značky, kvalita webu, důvěryhodnost a odkazové signály hrát roli. Článek to zjednodušuje na „hlavní citace = velké značky, návrhy = jen kvalita úhlu“.

**Návrh opravy:**

> Pro menší weby to může být schůdnější plocha, protože nemusí mířit jen na obecný přehled tématu. Stále ale soutěží s ostatními zdroji podle relevance, důvěryhodnosti a kvality zpracování.

V tabulce:

> Hlavní citace: „Často s obecnými a autoritativními zdroji k jádru dotazu“  
> Návrh „kam dál“: „Se zdroji, které dobře pokrývají konkrétní navazující úhel“

---

### [WARNING] Globální formulace „Google od května 2026 ukazuje“ ignoruje rollout USA/angličtina

**Problémové místo v description:**

> Google od května 2026 ukazuje na konci AI odpovědí odkazy na dílčí úhly tématu.

**Problémové místo v answer:**

> …kde Google od května 2026 nabízí odkazy…

**Problémové místo ve shrnutí:**

> Google od května 2026 ukazuje na konci AI odpovědí návrhy…

**Proč je to problém:**  
Research říká, že změny se zaváděly nejdřív v angličtině v USA. Článek sice později uvádí výhradu pro Česko, ale hlavní claimy znějí globálně.

**Návrh opravy:**

V description:

> Google v květnu 2026 začal zavádět návrhy na konci AI odpovědí: odkazy na související články a jiné úhly tématu.

V answer:

> Návrhy „kam dál“ jsou sekce na konci odpovědi v AI Overviews a AI Mode, kterou Google začal v květnu 2026 zavádět nejdřív v angličtině v USA.

Ve shrnutí:

> Google v květnu 2026 oznámil / začal zavádět návrhy na konci AI odpovědí…

---

### [WARNING] FAQ tvrdí rozšíření do dalších jazyků bez doložení

**Problémové místo:**

> Rozšíření do dalších jazyků oznámil bez konkrétního data, takže podobu v češtině je potřeba ověřit ručně.

**Proč je to problém:**  
V research části je doloženo jen „zavádělo se nejdřív v angličtině v USA“. Není doloženo, že Google oznámil rozšíření do dalších jazyků bez konkrétního data.

**Návrh opravy:**

Pokud není k dispozici zdroj:

> Google změny zaváděl nejdřív v angličtině v USA. Pro češtinu proto není bezpečné předpokládat stejnou podobu zobrazení; je potřeba ji ověřit ručním testem.

Pokud zdroj existuje, doplnit odkaz.

---

### [WARNING] Chybí povinná kolizní kontrola proti `/blog/jak-se-zobrazit-v-ai-mode/`

**Problémové místo:**

Článek odkazuje na:

> [jak se dostat do AI odpovědí](/blog/jak-se-dostat-do-ai-odpovedi/)

Ale zadání požaduje kolizní kontrolu proti:

> `/blog/jak-se-zobrazit-v-ai-mode/`  
> `/blog/co-rozhoduje-o-ai-citaci/`

Druhý odkaz je v článku splněn:

> [co rozhoduje o citaci v AI](/blog/co-rozhoduje-o-ai-citaci/)

**Proč je to problém:**  
Není jasné, zda článek nekoliduje s existujícím textem o zobrazování v AI Mode. Zadání výslovně označuje tuto kontrolu jako povinnou.

**Návrh opravy:**

Doplnit interní odkaz a vymezovací větu:

> Pokud řešíte hlavně samotné zobrazení zdrojů v AI Mode, začněte článkem [jak se zobrazit v AI Mode](/blog/jak-se-zobrazit-v-ai-mode/). Tento text řeší užší téma: návrhy na konci odpovědi jako jednu z odkazových ploch.

---

### [WARNING] Slovo „Cluster“ je zbytečný žargon mimo brand voice

**Problémové místo:**

> Cluster, ve kterém na sebe články odkazují, dává systému mapu úhlů, ze které může vybírat.

**Proč je to problém:**  
Brand voice má být srozumitelný a vysvětlovat, ne používat neukotvený odborný žargon. „Cluster“ navíc sousedí se zakázaným termínem „hub-and-spoke“, který má být nahrazován popisem prolinkování.

**Návrh opravy:**

> Skupina souvisejících článků, které na sebe dávají smysluplně odkazy, pomáhá vyhledávači pochopit, jak jednotlivé úhly tématu souvisejí.

Nebo kratší:

> Prolinkování mezi souvisejícími články dává systému mapu úhlů, ze které může lépe pochopit strukturu tématu.

---

### [WARNING] „Report generativních funkcí dává jen zobrazení“ potřebuje zdroj nebo zpřesnění

**Problémové místo:**

> Search Console neukáže, ze které části odpovědi proklik přišel, a report generativních funkcí dává jen zobrazení.

**Proč je to problém:**  
Jde o konkrétní tvrzení o měření v nástroji. Bez zdroje může být zastaralé nebo nepřesné, zvlášť v roce 2026.

**Návrh opravy:**

Buď doplnit zdroj / interní vysvětlení:

> Podrobněji to rozebírá článek o [limitech měření v režimu AI](/blog/mereni-ai-mode-limity/), včetně toho, jaké metriky jsou v dostupných reportech vidět.

Nebo formulovat opatrněji:

> V běžných datech obvykle neuvidíte, zda proklik přišel právě z návrhu na konci odpovědi. Search Console zatím nedává dostatečně jemné rozlišení této konkrétní plochy.

---

### [WARNING] FAQ odpověď „Proč je to zajímavé pro menší weby?“ je moc kategorická

**Problémové místo:**

> Protože se tam nesoutěží o obecný přehled tématu, kde vyhrávají velké značky. Konkrétní podtéma zpracované do hloubky má šanci i na malém webu.

**Proč je to problém:**  
„Vyhrávají velké značky“ je zobecnění bez dat. „Má šanci“ je bezpečné, ale první věta zní příliš definitivně.

**Návrh opravy:**

> Protože tato plocha může zvýhodnit konkrétní navazující úhel tématu, nejen obecný přehled. Menší web tak může mít šanci, pokud dané podtéma zpracuje přesně, doložitelně a užitečně.

---

### [WARNING] Krátká odpověď je formálně dobrá, ale potřebuje opatrnější claim

**Problémové místo:**

```yaml
answer: "Návrhy „kam dál“ jsou sekce na konci odpovědi v AI Overviews a v režimu AI, kde Google od května 2026 nabízí odkazy na související články a rozbory jiných úhlů tématu. Na rozdíl od hlavní citace se tam nesoutěží o obecný přehled, ale o konkrétní podtéma."
```

**Co je dobře:**  
Má cca 40–60 slov, začíná definicí a dává samostatný smysl.

**Co opravit:**  
„Google od května 2026 nabízí“ zní globálně. „Nesoutěží o obecný přehled“ je moc absolutní.

**Návrh opravy:**

> Návrhy „kam dál“ jsou sekce na konci odpovědi v AI Overviews a AI Mode, kterou Google začal v květnu 2026 zavádět pro odkazy na související články a jiné úhly tématu. Pro obsahovou strategii to znamená šanci připravovat přesnější texty k dílčím podtématům, ne jen obecné průvodce.

---

### [TIP] `seoTitle`, description a slug jsou v pořádku

**Kontrola:**

```yaml
seoTitle: "Návrhy na konci AI odpovědi: nová šance pro menší weby"
description: "Google od května 2026 ukazuje na konci AI odpovědí odkazy na dílčí úhly tématu. Proč je to jiná soutěž než hlavní citace a co s tím udělat."
slug: "navrhy-kam-dal-v-ai-odpovedi"
```

**Hodnocení:**

- `seoTitle` má přibližně 54 znaků a klíčové slovo je vepředu.
- Description je v limitu 70–160 znaků.
- Slug je srozumitelný a odpovídá tématu.

**Doporučená drobná úprava description kvůli přesnosti rolloutů:**

> Google v květnu 2026 začal zavádět návrhy na konci AI odpovědí. Co to znamená pro dílčí články a menší weby?

---

### [TIP] CTA je relevantní, ale může lépe zapojit placený Pack

**Problémové místo:**

> **Nevíte, které úhly vašeho tématu máte pokryté a které chybí?** [AI SEO audit za 3 600 Kč](/audit/) projde obsah i viditelnost v AI nástrojích a dá plán priorit. Kdo chce začít sám, má k dispozici [návod zdarma](/navod-zdarma/).

**Co je dobře:**  
CTA není generické „kontaktujte nás“. Směřuje na Audit za 3 600 Kč a Free PDF.

**Co chybí:**  
V kontextu webu je důležitý také AI SEO Wireframe Pack za 1 490 Kč. U článku o struktuře obsahu by byl velmi relevantní.

**Návrh opravy:**

> Nevíte, které úhly tématu máte pokryté a které chybí? [AI SEO audit za 3 600 Kč](/audit/) projde obsah i viditelnost v AI nástrojích a dá plán priorit. Pokud chcete strukturu článků navrhnout sami, použijte [AI SEO Wireframe Pack za 1 490 Kč](/ai-seo-wireframe-pack/) nebo začněte [návodem zdarma](/navod-zdarma/).

Použít jen pokud URL produktu odpovídá skutečné struktuře webu.

---

### [TIP] H2/H3 struktura je čistá a odpovídá zadání

**Co je dobře:**

- Článek postupuje logicky: změna → rozdíl proti citaci → dopad na obsah → měření → omyly → shrnutí.
- FAQ otázky jsou reálné a odpovědi jsou převážně sebestačné.
- Interní odkazy jsou tematicky relevantní.

**Bez nutné opravy.**

---

### [TIP] Zdroje na konci obsahují nevyužitou poznámku o CTR

**Problémové místo:**

> Údaje o dopadu na proklikovost pocházejí z přejímajících médií, ne z primární studie.

**Proč je to drobný problém:**  
Článek číslo o CTR přímo neuvádí. Poznámka působí jako zbytečný zbytek z research části.

**Návrh opravy:**

Buď odstranit:

> Stav k 26. 8. 2026.

Nebo pokud má zůstat kvůli internímu odkazu na propady, formulovat:

> Čísla o dopadu AI odpovědí na proklikovost tento článek nepřebírá; odkazuje na samostatnou analýzu propadů návštěvnosti.

---

## Krátké shrnutí nutných oprav

Před publikací opravit hlavně:

1. Doplnit primární Google zdroj.  
2. Sjednotit datum oznámení 6. 5. vs. 27. 5. 2026.  
3. Změnit globální „Google ukazuje“ na „Google začal zavádět“.  
4. Zjemnit overclaimy typu „úhel je to, co se vybírá“, „nesoutěží se značkou“, „web s jedním velkým článkem nemá“.  
5. Doplnit povinné vymezení / odkaz na `/blog/jak-se-zobrazit-v-ai-mode/`.  
6. Nahradit žargon „Cluster“ srozumitelným popisem prolinkování mezi souvisejícími články.