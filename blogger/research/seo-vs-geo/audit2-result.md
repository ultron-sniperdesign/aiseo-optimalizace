## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou z velké části lepší, ale článek stále obsahuje nedoložené analytické claimy, několik absolutních formulací a zbytky žargonu. Publikaci bych pustil až po níže uvedených úpravách.

---

## Nálezy

### [BLOCKER] Nedoložené odkazy na „analýzy 2025–2026“

**Problémové místo:**

> „Některé analýzy z let 2025–2026 ukazují, že část stránek citovaných v AI odpovědích se zároveň umisťuje vysoko v organických výsledcích.“

> „Ve veřejně dostupných analýzách z let 2025–2026 tvoří referral návštěvnost z AI platforem u většiny webů zatím nízký podíl.“

> „Podle dostupných analýz tvoří přímý provoz z AI platforem zatím malý podíl…“

**Problém:**  
Tvrzení se opírá o „analýzy“, ale nejsou uvedené konkrétní zdroje, metodika, období ani kontext. U článku s datem 2026-05-24 je to věcně slabé a působí jako nepodložená autorita.

**Návrh opravy:**  
Buď doplnit konkrétní zdroje přímo do textu nebo poznámky pod článek: název analýzy, autor, měsíc/rok, typ datasetu. Pokud zdroje nechcete uvádět, zeslabit formulace:

- místo „analýzy ukazují“ → „v praxi se často sleduje překryv mezi citovanými zdroji a organickými výsledky“
- místo „u většiny webů“ → „u mnoha webů může být tento podíl zatím nízký; ověřte ho ve vlastních datech“

---

### [BLOCKER] Zůstaly absolutní formulace o tom, že GEO bez SEO „nefunguje“

**Problémové místo:**

> „Jinými slovy: kdo zanedbá SEO, nemá na čem GEO stavět.“

> „„GEO nahradí SEO" — nenahradí; staví na něm a bez SEO základů nefunguje.“

**Problém:**  
Tohle je příliš absolutní. GEO může být ovlivněné i zmínkami mimo vlastní web, brandovou autoritou, oborovými katalogy, recenzemi nebo externími zdroji. Bez silného SEO se šance snižuje, ale tvrdit „nefunguje“ je overclaim.

**Návrh opravy:**

- „kdo zanedbá SEO, nemá na čem GEO stavět“ → „kdo zanedbá SEO, má pro GEO slabší základ“
- „bez SEO základů nefunguje“ → „bez SEO základů má obvykle nižší šanci na stabilní citace“

---

### [WARNING] Frontmatter `answer` je dobrý délkou, ale nevyjasňuje zkratku GEO

**Problémové místo:**

> `answer: "SEO i GEO jsou dvě vrstvy viditelnosti..."`

**Problém:**  
Krátká odpověď má 58 slov, tedy splňuje rozsah 40–60 slov. Začíná definicí, což je dobře. Ale samostatně nevysvětluje, že GEO znamená Generative Engine Optimization a že nejde o geografické SEO. U dotazu „SEO vs GEO“ je to důležité, protože zkratka GEO může být dvojznačná.

**Návrh opravy:**  
Upravit answer tak, aby definoval obě zkratky a zároveň zůstal do 60 slov. Například:

> „SEO (optimalizace pro vyhledávače) a GEO (Generative Engine Optimization, ne geografické SEO) jsou dvě vrstvy viditelnosti. SEO řeší pozice a prokliky v klasickém vyhledávání, GEO zmínky a citace v odpovědích AI nástrojů s vyhledáváním. Nesoupeří; GEO obvykle staví na SEO základech. Prioritu určuje hlavně chování cílovky.“

---

### [WARNING] ChatGPT je místy uveden nepřesně bez „s vyhledáváním“

**Problémové místo:**

> „AI nástrojů jako ChatGPT, Perplexity nebo Google AI Overviews“

> „citace v ChatGPT nebo Perplexity“

> „ChatGPT, Perplexity, Google AI Overviews“

**Problém:**  
V leadu je správně uvedeno „ChatGPT s vyhledáváním“, ale ve FAQ a tabulce se zkracuje na „ChatGPT“. To je nepřesné, protože běžný ChatGPT nemusí vždy pracovat s aktuálním webem ani uvádět citace. U článku o GEO je potřeba rozlišovat AI nástroje obecně a AI nástroje s vyhledáváním/citacemi.

**Návrh opravy:**  
V celém článku sjednotit:

- „ChatGPT“ → „ChatGPT s vyhledáváním“
- případně „AI nástroje s vyhledáváním, například ChatGPT s vyhledáváním nebo Perplexity“

---

### [WARNING] V textu zůstal žargon, který měl být podle zadání odstraněn

**Problémové místo:**

> „Naopak u čistě transakčních a lokálních věcí bez research fáze…“

> „referral návštěvnost z AI platforem“

> „CTR“

> „0-click“

**Problém:**  
Článek má být srozumitelný, vysvětlující a bez zbytečného marketingového/analytického žargonu. „Research fáze“ je navíc přesně typ výrazu, který byl v zadání opravy nahrazen českou variantou.

**Návrh opravy:**

- „bez research fáze“ → „bez delšího hledání informací před nákupem“
- „referral návštěvnost“ → „návštěvnost přicházející z odkazů v AI platformách“
- „CTR“ → „míra prokliku (CTR)“
- „0-click“ ve stats → „bez prokliku“

---

### [WARNING] Titulek je těsně mimo požadovaný rozsah

**Problémové místo:**

> `title: "SEO vs GEO: kdy hrát o pozice a kdy o citace v AI vyhledávání"`

**Problém:**  
Titulek má přibližně 61 znaků, požadavek je 50–60. Je to těsné, ale u technického auditu pořád mimo zadání.

**Návrh opravy:**  
Zkrátit o pár znaků a zachovat klíčové slovo vpředu. Například:

> „SEO vs GEO: kdy řešit pozice a kdy citace v AI odpovědích“

---

### [WARNING] Některé segmenty jsou popsány příliš široce

**Problémové místo:**

> „Prémiové B2C s delší rozhodovací fází (elektronika, sport, hobby)“

**Problém:**  
Elektronika, sport ani hobby nejsou automaticky „prémiové B2C“. Je to příliš široké a může to působit nepřesně. GEO dává smysl hlavně u dražších, složitějších nebo srovnávaných nákupů, ne u celých kategorií.

**Návrh opravy:**

> „Dražší nebo specializované B2C produkty s delší rozhodovací fází, například vyšší řady elektroniky, sportovní vybavení nebo hobby produkty, které lidé před nákupem porovnávají.“

---

### [WARNING] Generalizace u běžných nákupů je moc silná

**Problémové místo:**

> „Impulzivní a běžné nákupy (drogerie, spotřební zboží) — lidé nehledají rady před nákupem.“

**Problém:**  
„Lidé nehledají rady“ je příliš plošné. I u drogerie nebo spotřebního zboží mohou lidé řešit složení, recenze, alergie, srovnání značek nebo cenu. Bezpečnější je mluvit o nižší pravděpodobnosti dlouhé rozhodovací fáze.

**Návrh opravy:**

> „Impulzivní a běžné nákupy — u části sortimentu rozhoduje hlavně cena, dostupnost nebo zvyk, takže delší rozhodovací fáze bývá slabší.“

---

### [TIP] Prvních 100 slov funguje, ale interní odkaz oslabuje citovatelnost leadu

**Problémové místo:**

> „Tenhle článek je užší dvojstrana — kdy hrát o pozice a kdy o citace; celý čtyřdílný obraz dává…“

**Problém:**  
Úvod začíná dobře a dává samostatný smysl. Vložená věta o „užší dvojstraně“ ale v prvních ~100 slovech snižuje hustotu odpovědi. Pro AI citovatelnost je lepší, když prvních 100 slov obsahuje jen definici, rozdíl a hlavní závěr.

**Návrh opravy:**  
Přesunout větu s interním odkazem až za hlavní myšlenku nebo na konec úvodu.

---

### [TIP] „Zero-click“ je vysvětlené, ale terminologie není jednotná

**Problémové místo:**

> `value: "0-click"`

> „zero-click“

> „viditelnost i bez prokliku“

**Problém:**  
Pojem je v textu vysvětlený, což je dobře. Jen je nejednotný zápis: 0-click / zero-click / bez prokliku. Pro český vzdělávací článek je lepší držet jednu formu.

**Návrh opravy:**  
Používat primárně české „bez prokliku“ a při prvním výskytu dodat anglický termín:

> „viditelnost bez prokliku (zero-click)“

Ve stats změnit:

> `value: "bez prokliku"`

---

## Co je v pořádku

- Meta description je v požadované délce a dobře shrnuje článek.
- Slug `seo-vs-geo` je smysluplný.
- Struktura H2 je logická a odpovídá analytickému článku.
- CTA je konkrétní a vede na relevantní produkty: Audit 9 990 Kč a Pack 1 490 Kč.
- Článek nepadá do tvrdého prodeje a celkově drží vysvětlující tón.
- Oprava „GEO ≠ geografické SEO“ v leadu je správná, jen by měla být i v krátké odpovědi.