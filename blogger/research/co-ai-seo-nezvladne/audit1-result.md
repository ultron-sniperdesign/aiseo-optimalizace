## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je koncepčně dobrý a neklouže do „AI SEO nefunguje“. Má ale několik faktických a formulačních přestřelů: hlavně příliš široké zobecnění poznatků z Googlu na celé „AI odpovědi“, nepodložené tvrzení o zmínkách značky a problematickou část o ChatGPT/Perplexity.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Zobecňujete fakta z Googlu na všechny „AI odpovědi“

**Citace:**

> „0 způsobů, jak se do AI odpovědí přihlásit“

> „Neovlivní personalizaci podle konkrétního uživatele a neukáže odděleně, kolik lidí přišlo právě z AI odpovědi.“

> „Přihlášení neexistuje. Pro AI Overviews ani Režim AI nejsou žádné zvláštní požadavky navíc.“

**Problém:**  
Ověřená fakta v zadání se týkají primárně Google AI Overviews / Režimu AI a Search Console. Text ale místy mluví obecně o „AI odpovědích“, což může zahrnovat ChatGPT, Perplexity, Copilot a další systémy. Pro ty v článku nejsou doložené stejné závěry.

**Návrh opravy:**  
Zúžit formulace tam, kde stojíte na dokumentaci Googlu.

Např.:

- místo:  
  > „0 způsobů, jak se do AI odpovědí přihlásit“

  použít:  
  > „0 zvláštních přihlášek do Google AI Overviews a Režimu AI“

- místo:  
  > „kolik lidí přišlo právě z AI odpovědi“

  použít:  
  > „kolik kliků v Google Search Console přišlo právě z AI Overviews nebo Režimu AI“

- místo:  
  > „Přihlášení neexistuje.“

  použít:  
  > „Google neuvádí žádné zvláštní přihlášení do AI Overviews ani Režimu AI.“

---

## 2. [BLOCKER] Nedoložené a příliš absolutní tvrzení o ChatGPT a Perplexity

**Citace:**

> „Cokoli z ChatGPT nebo Perplexity“

> „Oficiální report tam neexistuje. Zbývá ruční test a nepřímé ukazatele.“

**Problém:**  
V dodaných ověřených faktech není zdroj k reportingu ChatGPT ani Perplexity k datu 29. 8. 2026. Navíc „cokoli“ je příliš široké: některé návštěvy mohou být vidět v analytice podle referrerů nebo jiných nepřímých signálů, i když to není totéž co oficiální report impresí/citací.

**Návrh opravy:**  
Buď doplnit ověřený zdroj k roku 2026, nebo formulaci výrazně zúžit.

Bezpečnější verze:

> „U nástrojů mimo Google článek nepracuje s ověřeným oficiálním reportem impresí nebo citací. Některé návštěvy mohou být vidět nepřímo v analytice, ale nejde o spolehlivé měření toho, zda a kdy vás odpověď citovala.“

Nebo celou položku z checklistu odstranit, protože jádro článku je podle zadání hlavně Google AI Mode / AI Overviews.

---

## 3. [BLOCKER] Nepodložené tvrzení, že zmínky o značce „hrají roli“ pro AI citace

**Citace:**

> „Zmínky o značce v cizích zdrojích pro AI citace hrají roli.“

**Problém:**  
V ověřených faktech je doložené, že Google označuje shánění neautentických zmínek za spamové chování. Není tam ale doložené, že zmínky o značce obecně „hrají roli“ pro AI citace. To je silnější claim, který by potřeboval vlastní zdroj nebo opatrnější formulaci.

**Návrh opravy:**  
Změnit na opatrnější a doložitelnou formulaci:

> „Zmínky o značce v relevantních zdrojích mohou pomáhat důvěryhodnosti a pochopení značky. Neautentické shánění zmínek ale Google ve svém průvodci řadí ke spamovému chování.“

A nadpis sekce upravit z:

> „Nekoupíte si zmínky“

na přesnější:

> „Nevynutíte si AI viditelnost neautentickými zmínkami“

---

## 4. [BLOCKER] „Šest hranic, které se optimalizací posunout nedají“ neodpovídá všem šesti bodům

**Citace:**

> „6 hranic, které se optimalizací posunout nedají“

> „Nekoupíte si zmínky“

**Problém:**  
Ne všech šest bodů jsou hranice, které „se nedají posunout“. Například u zmínek lze legitimně ovlivňovat povědomí o značce, PR, odborné výstupy nebo citace v médiích. Problém není samotné ovlivňování zmínek, ale neautentické shánění/nákup spamových zmínek.

**Návrh opravy:**  
Změnit framing ze „vůbec nejde posunout“ na „nejde přímo řídit ani garantovat“.

Např. ve frontmatteru:

> `label: "věcí, které nelze přímo řídit ani garantovat"`

A v textu:

> „Šest hranic ukazuje, co AI SEO nemůže přímo řídit, garantovat ani přesně změřit.“

Tím se vyhnete dojmu, že legitimní práce na důvěryhodnosti, obsahu a značce nemá smysl.

---

## 5. [BLOCKER] Krátká odpověď začíná negací, ne definicí

**Citace z frontmatteru i úvodu:**

> „AI SEO nedokáže zaručit citaci, vybrat zdroje, které model pro odpověď použije, ani zopakovat stejný výsledek dvakrát.“

**Problém:**  
Zadání pro citovatelnost říká, že krátká odpověď má začínat definicí, ne negací. Délka je dobrá, odpověď je samostatná, ale začátek porušuje požadovaný formát.

**Návrh opravy:**  
Přeformulovat první větu definicí a teprve potom uvést hranice.

Např.:

> „AI SEO je práce na tom, aby byl web pro vyhledávací systémy dohledatelný, srozumitelný a doložitelný. Nedokáže ale zaručit citaci, vybrat zdroje použité modelem, zopakovat stejný výsledek dvakrát, ovlivnit personalizaci konkrétního uživatele ani v Search Console oddělit všechny kliky z AI funkcí.“

---

# 2. Doporučení

## 1. [WARNING] Cílové klíčové slovo není použité v titulku ani SEO titulku

**Citace:**

> `title: "Co AI SEO neumí: šest hranic, o kterých se mlčí"`

> `seoTitle: "Co AI SEO neumí: hranice disciplíny (2026)"`

**Problém:**  
Cílové klíčové slovo je **„co ai seo nezvladne“**, ale článek pracuje hlavně s variantou „co AI SEO neumí“. Slug je v pořádku, ale H1/SEO titulek nejdou po zadané frázi.

**Návrh opravy:**  
Použít cílovou frázi v titulku i SEO titulku.

Např.:

> `title: "Co AI SEO nezvládne: šest hranic optimalizace"`

> `seoTitle: "Co AI SEO nezvládne: 6 hranic optimalizace v roce 2026"`

Druhá varianta má přibližně správnou délku a klíčové slovo je vepředu.

---

## 2. [WARNING] H2 „Šest hranic“ je příliš obecná

**Citace:**

> `## Šest hranic`

**Problém:**  
Samotné H2 nenese klíčové slovo ani kontext. Pro člověka i AI je lepší, když nadpis říká, čeho se hranice týkají.

**Návrh opravy:**

> `## Co AI SEO nezvládne: šest hranic`

Tím se posílí hlavní dotaz bez přidávání nového obsahu.

---

## 3. [WARNING] Část o „žádných zvláštních optimalizacích“ se dotýká existujícího článku a hrozí kanibalizace

**Citace:**

> „Ke stejnému místu patří druhá věta — pro AI Overviews a Režim AI nejsou žádné zvláštní požadavky ani zvláštní optimalizace navíc.“

> „Co Google naopak výslovně označuje za zbytečné, rozebírá průvodce od Googlu a co v něm stojí.“

**Problém:**  
Existující článek `/blog/aeo-geo-je-porad-seo/` už má checklist toho, co podle Googlu **není potřeba dělat**. Tady má být těžiště na tom, co **nejde ovlivnit vůbec**. Současná pasáž je ještě přijatelná, ale stačí málo a začne kanibalizovat existující článek.

**Návrh opravy:**  
Zúžit tuto pasáž jen na „není přihlášení“ a „není nárok na zobrazení“.

Např.:

> „Pro tento článek je důležitý hlavně závěr: Google neuvádí žádné zvláštní přihlášení do AI Overviews ani Režimu AI a splnění doporučení není nárok na zobrazení. Seznam věcí, které Google označuje za zbytečné, rozebírá samostatný průvodce.“

---

## 4. [WARNING] Sekce o měření částečně kanibalizuje článek o limitech měření

**Citace:**

> „Měření je nejhůř propustná hranice ze všech:“

> „Kliky z AI odpovědí zvlášť… Dotazy, které k odpovědi vedly… Rozdíl mezi Režimem AI a AI Overviews…“

**Problém:**  
Téma je relevantní, protože zadání výslovně uvádí nemožnost izolovat AI Mode v GSC. Rozsah checklistu už ale začíná suplovat článek `/blog/mereni-ai-mode-limity/`.

**Návrh opravy:**  
Nechat jen tři body, které přímo podporují tento článek:

- GSC neoddělí kliky z AI funkcí od celkové návštěvnosti z vyhledávání.
- Samostatný report dává jen imprese.
- Report nerozliší AI Mode od AI Overviews.

Položku o ChatGPT/Perplexity buď odstranit, nebo dát do samostatné poznámky až po ověření.

---

## 5. [WARNING] Práce s číslem 18–20 % potřebuje přesnější kontext

**Citace:**

> „Při shodě odkazů kolem pětiny mezi běhy je jedna odpověď náhodný vzorek, ne výsledek.“

**Problém:**  
„Kolem pětiny“ platí podle dodaného researche pro opakování téhož **obecného lokálního dotazu** v AI Mode. U dotazů s uvedeným městem byla shoda vyšší, 46–49 %. V textu to jednou uvedeno je, ale v pozdějším shrnutí už zůstane jen silnější varianta.

**Návrh opravy:**  
Zpřesnit druhý výskyt:

> „U části testovaných lokálních dotazů byla shoda odkazů mezi běhy jen kolem pětiny. Jeden screenshot proto sám o sobě neprokazuje stabilní úspěch ani stabilní propad.“

Zároveň je vhodné ve zdrojích na konci přímo odkázat vlastní článek o volatilitě, ne jen napsat „přebíráme z vlastního článku“.

---

## 6. [WARNING] „Jeden screenshot nedokazuje nic“ je dobrá pointa, ale příliš absolutní

**Citace:**

> „jeden screenshot nedokazuje nic — ani úspěch, ani propad.“

**Problém:**  
Jeden screenshot může být slabý doklad konkrétního výskytu v konkrétní chvíli. Nedokazuje ale stabilní viditelnost. Současná formulace je úderná, ale přehání.

**Návrh opravy:**

> „Jeden screenshot dokazuje nanejvýš jeden konkrétní výskyt. Nedokazuje stabilní úspěch ani stabilní propad.“

---

## 7. [TIP] Nahraďte obecné „roboti“ přesnějším výrazem

**Citace:**

> „Dohledatelnost — jestli se k vám roboti dostanou a co vidí bez JavaScriptu.“

**Problém:**  
Slovník má preferovat vysvětlující termíny. „Roboti“ je srozumitelné, ale přesnější je „vyhledávací roboti“.

**Návrh opravy:**

> „Dohledatelnost — jestli se k vám vyhledávací roboti dostanou a co vidí bez JavaScriptu.“

---

## 8. [TIP] Změkčit lehce shazující formulaci v části „Proč se o hranicích mlčí“

**Citace:**

> „hranice jsou v anglické dokumentaci, kterou nikdo nečte celou.“

**Problém:**  
Tón je věcný, ale tahle věta zbytečně sklouzává k paušálnímu rýpnutí. Brand voice má vysvětlovat, ne shazovat.

**Návrh opravy:**

> „hranice jsou v anglické dokumentaci, která se často čte jen výběrově.“

---

## 9. [TIP] CTA je dobré, ale otázku lze zpřesnit na téma článku

**Citace:**

> „Chcete vědět, kde je váš web před hranicí a kde za ní?“

**Problém:**  
CTA míří na konkrétní produkt a cenu, což je správně. Jen formulace „před hranicí a za ní“ je trochu abstraktní.

**Návrh opravy:**

> „Chcete vědět, které části AI SEO u vás dávají smysl a kde by šlo jen o plané sliby?“

Zbytek CTA k auditu za 3 600 Kč ponechat.

---

# 3. Co je v pořádku

- Článek nepadá do vlastního gólu typu „AI SEO nefunguje“. Naopak jasně říká:  
  > „Není to argument proti optimalizaci.“

- Tón je převážně poctivý, neprodává tvrdě a neslibuje garance.

- FAQ je praktické, odpovědi jsou většinou samostatné a odpovídají reálným otázkám.

- Interní odkazy jsou relevantní: měření, volatilita, výběr dodavatele, zmínky o značce i propojené aplikace dávají smysl.

- Meta description je v dobré délce a shrnuje článek konkrétně.

- Slug `co-ai-seo-nezvladne` odpovídá cílovému dotazu.

- Publikační datum a zdrojové ověření jsou ukotvené k roku 2026; text nepoužívá problematické „letos“ nebo „příští rok“.

- Závěrečné CTA vede na konkrétní produkt **AI SEO audit za 3 600 Kč**, ne na obecné „kontaktujte nás“.