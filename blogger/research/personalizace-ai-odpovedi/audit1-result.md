## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je celkově dobře zaměřený, opatrný vůči hlavnímu rozdílu mezi oznámením a nápovědou Googlu a má použitelnou strukturu pro SEO i AI citovatelnost. Před publikací ale potřebuje opravit několik formulací, které jsou příliš absolutní nebo jdou nad rámec doložených zdrojů.

---

# 1. Blokující nálezy

## 1) [BLOCKER] Titulek tvrdí víc, než je doložené

**Citace:**

```yaml
title: "Personalizace AI odpovědí: nikdo nevidí totéž"
```

**Problém:**  
„Nikdo nevidí totéž“ je absolutní tvrzení. Článek sám správně říká, že neexistují veřejná čísla o tom, jak moc se odpovědi mezi lidmi liší. Titulek ale sugeruje, že personalizace vždy způsobí odlišnou odpověď u každého člověka, což doložené není.

**Návrh opravy:**

```yaml
title: "Personalizace AI odpovědí: test závisí na účtu"
```

nebo

```yaml
title: "Personalizace AI odpovědí: proč účet mění test"
```

---

## 2) [BLOCKER] Příliš absolutní claim o ručním testování ChatGPT a Perplexity

**Citace:**

> Ruční test je pořád nejpoužitelnější nástroj, jak zjistit, co o vás AI říká — u ChatGPT a Perplexity dokonce jediný.

**Problém:**  
„Dokonce jediný“ je nedoložené a pravděpodobně příliš silné tvrzení. Existují různé nástroje, API přístupy, monitoringy nebo poloautomatizované postupy. Článek nemá zdroj, který by dokazoval, že ruční test je u ChatGPT a Perplexity jediná možnost.

**Návrh opravy:**

> Ruční test je pořád jeden z nejdostupnějších způsobů, jak zjistit, co o vás AI říká. U prostředí bez stabilních veřejných dat je ale nutné přesně zapsat metodiku, účet, nastavení a čas testu.

---

## 3) [BLOCKER] „Rozhoduje nápověda“ je moc široké a může zkreslit rozdíl mezi zdroji Googlu

**Citace:**

> Praktický důsledek: **číslo z oznámení není doklad dostupnosti u vás.** Rozhoduje nápověda…

a ve shrnutí:

> **Dva zdroje Googlu uvádějí jiný rozsah.** Oznámení bezmála 200 zemí a 98 jazyků, nápověda u paměti USA a angličtinu. Rozhoduje nápověda.

**Problém:**  
Článek jinak správně vysvětluje, že oznámení a nápověda nemluví o stejné dílčí funkci. Formulace „Rozhoduje nápověda“ ale může vyznít tak, že oznámení je méně pravdivé nebo že nápověda obecně přebíjí celé oznámení. To je přesně riziko uvedené v zadání.

**Návrh opravy:**

> Praktický důsledek: číslo z oznámení samo o sobě nedokládá dostupnost konkrétní paměti v Režimu AI u vás. Pro tuto dílčí funkci je potřeba ověřit aktuální nápovědu.

Ve shrnutí:

> Oznámení mluví o Personal Intelligence šířeji, nápověda omezuje konkrétní paměť v Režimu AI na USA a angličtinu. Pro ověření dostupnosti konkrétní funkce je potřeba pracovat s aktuální nápovědou.

---

## 4) [BLOCKER] Sekce „Co je doložené pro Česko“ obsahuje tvrzení, která nejsou všechna doložená přímo pro Česko

**Citace:**

```mdx
## Co je doložené pro Česko
```

a položka:

> Připojení Gmailu a Fotek: dobrovolné

**Problém:**  
Ověřený fakt říká, že oznámení I/O zmiňuje možnost připojit Gmail a Google Photos, brzy Calendar. Neříká ale v dodaném researchi samostatně, že tato část je doloženě dostupná v Česku. Pod nadpisem „Co je doložené pro Česko“ to může vyznít jako potvrzení české dostupnosti připojených aplikací.

**Návrh opravy nadpisu:**

```mdx
## Co je doložené a co ne pro českého čtenáře
```

**Návrh opravy položky:**

> Připojení Gmailu a Fotek: oznámení ho uvádí jako dobrovolné. Samotné oznámení ale nestačí jako důkaz dostupnosti každé dílčí funkce v konkrétním českém účtu.

---

## 5) [BLOCKER] FAQ může naznačovat dostupnost připojení Gmailu a Fotek bez omezení

**Citace:**

> K tomu jde dobrovolně připojit Gmail a Fotky Google.

**Problém:**  
V odpovědi na otázku „Co je Osobní inteligence v Režimu AI?“ to zní jako obecně platná funkcionalita. Podle research podkladu ale oznámení mluví o širší Personal Intelligence, zatímco nápověda řeší paměť v Režimu AI. Je potřeba jasně oddělit, co říká nápověda a co oznámení.

**Návrh opravy:**

> Podle české nápovědy využívá Osobní inteligence předchozí vyhledávání a aktivitu uloženou v historii vyhledávacích služeb. Oznámení z I/O 2026 navíc u širší Personal Intelligence zmiňuje možnost bezpečně připojit aplikace jako Gmail a Fotky Google.

---

# 2. Doporučení

## 1) [WARNING] Meta description používá příliš jisté „mění odpověď podle člověka“

**Citace:**

```yaml
description: "Osobní inteligence mění odpověď podle člověka..."
```

**Problém:**  
„Mění odpověď“ je silnější než doložené „využívá historii a aktivitu, aby mohla nabízet návrhy přizpůsobené vkusu a preferencím“. Bezpečnější je formulace „může měnit“ nebo „může ovlivnit“.

**Návrh opravy:**

```yaml
description: "Osobní inteligence může ovlivnit AI odpověď podle účtu. Google uvádí jiný rozsah u oznámení a u paměti v Režimu AI."
```

---

## 2) [WARNING] FAQ odpověď „Platí personalizace i v Česku?“ má problematickou větu „méně, než z oznámení vyplývá“

**Citace:**

> Doložené pro Česko je tedy méně, než z oznámení vyplývá.

**Problém:**  
Může to znít, že oznámení Googlu slibuje něco, co nápověda popírá. Přitom článek má správně vysvětlit, že zdroje mluví o jiné dílčí funkci.

**Návrh opravy:**

> Z oznámení samotného nejde odvodit dostupnost konkrétní paměti v Režimu AI v Česku. U této dílčí funkce nápověda uvádí USA a angličtinu.

---

## 3) [WARNING] „Do vrstvy, která patří konkrétnímu člověku, web nevstupuje“ je příliš kategorické

**Citace:**

> Do vrstvy, která patří konkrétnímu člověku, web nevstupuje.

**Problém:**  
Myšlenka je správná, ale formulace je absolutní. Web nemůže přímo nastavit osobní historii nebo paměť uživatele, ale může nepřímo ovlivňovat, co si člověk přečte, hledá nebo s čím interaguje.

**Návrh opravy:**

> Web tuto osobní vrstvu neumí přímo nastavit. Ovlivnitelné zůstává hlavně to, jestli je obsah srozumitelný, dohledatelný a dostatečně důvěryhodný, aby z něj AI měla z čeho vybírat.

---

## 4) [WARNING] Shrnutí spojuje vypnutí personalizace a ovládání paměti do jedné věty

**Citace:**

> Osobní inteligence staví odpověď i na historii vyhledávání konkrétního člověka; jde vypnout a paměti jde říct, ať detail zapomene.

**Problém:**  
Věta směšuje dvě věci: obecné zapnutí/vypnutí personalizace a konkrétní ovládání paměti. Research výslovně rozlišuje personalizaci a paměť v Režimu AI.

**Návrh opravy:**

> Osobní inteligence může využívat historii vyhledávání konkrétního člověka. Personalizaci lze podle nápovědy zapnout nebo vypnout; u paměti v Režimu AI může uživatel říct, co si má zapamatovat nebo zapomenout.

---

## 5) [TIP] Do první odpovědi přidejte datum ověření

**Citace:**

> Rozsah je u Googlu popsaný dvojím způsobem…

**Problém:**  
Krátká odpověď je jinak dobrá: má 57 slov, začíná definicí a dává smysl samostatně. Chybí jí ale časové ukotvení, což je u dostupnosti AI funkcí zásadní.

**Návrh opravy:**

> Osobní inteligence je funkce Režimu AI, která podle nápovědy Googlu využívá předchozí vyhledávání a aktivitu uloženou v historii. K 1. 9. 2026 Google popisuje rozsah dvojím způsobem: oznámení mluví o bezmála 200 zemích, nápověda u paměti o USA a angličtině. Pro měření proto platí, že účet je proměnná.

Pozor: po úpravě znovu zkontrolovat rozsah 40–60 slov.

---

## 6) [TIP] V tabulce „Kde je to rozebrané“ jsou názvy článků bez odkazů

**Citace:**

```mdx
{ icon: "📚", label: "Kde je to rozebrané", left: "proměnlivost AI odpovědí", right: "tenhle článek" },
```

**Problém:**  
V okolním textu odkazy jsou, ale v tabulce vypadají položky jako navigační prvky a nejsou klikatelné. Pokud komponenta podporuje markdown/HTML, je vhodné odkázat přímo. Pokud ne, raději řádek vypustit, protože odkaz je hned pod tabulkou.

**Návrh opravy:**  
Buď přidat skutečný odkaz, nebo řádek odstranit.

---

## 7) [TIP] Slovo „taky“ je zbytečně hovorové

**Citace:**

> Pod tím názvem ji taky najdete v nápovědě.

**Problém:**  
Brand voice má být věcný a srozumitelný, ne nutně hovorový.

**Návrh opravy:**

> Pod tím názvem ji najdete také v nápovědě.

---

## 8) [TIP] Kanibalizace je zvládnutá, ale Stepper se blíží článku o testu viditelnosti

**Citace:**

```mdx
<Stepper
  steps={[
    { title: "Zapište účet a nastavení", ... },
    { title: "Testujte i mimo vlastní účet", ... },
    { title: "Neopravujte si výsledek doptáváním", ... },
    { title: "Zapisujte podíl výskytů, ne dojem", ... },
    { title: "Do reportu napište metodiku", ... },
  ]}
/>
```

**Problém:**  
Sekce je užitečná, ale část kroků už patří spíš do `/blog/test-viditelnosti-v-ai/` nebo `/blog/mereni-ai-mode-limity/`. Tento článek má stát hlavně na personalizaci jako proměnné účtu.

**Návrh opravy:**  
Zachovat jen kroky specifické pro personalizaci:

- zapsat účet a nastavení,
- testovat mimo vlastní účet,
- neplést anonymní okno s reprezentativním uživatelem,
- do reportu uvést, že výsledek platí pro konkrétní účet/prostředí.

Obecnější metodiku měření nechat primárně v odkazovaných článcích.

---

# 3. Co je v pořádku

- Krátká odpověď ve frontmatteru má správnou délku, začíná definicí a dává samostatný smysl.
- Článek správně neříká, že v Česku personalizace neexistuje.
- Rozdíl mezi oznámením Googlu a nápovědou je většinou vysvětlen férově: nejde o lež, ale o jinou dílčí funkci.
- Článek neuvádí smyšlená procenta rozdílnosti odpovědí mezi lidmi.
- SEO title má vhodnou délku a klíčové slovo je vepředu.
- Slug je smysluplný: `personalizace-ai-odpovedi`.
- Interní odkazy na související články jsou relevantní a pomáhají proti kanibalizaci.
- CTA je konkrétní a vede na produkt `AI SEO audit za 3 600 Kč`, ne na generické „kontaktujte nás“.
- Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“, „backlink profil“ se v článku nevyskytují.