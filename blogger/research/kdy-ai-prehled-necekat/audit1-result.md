## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je obsahově dobře nasměrovaný a většinou respektuje zadání, ale má několik blokujících problémů: hlavně pracuje s „podílem výskytů“ navzdory výslovnému zákazu, obsahuje nedoložené tvrzení o Search Console a používá příliš silné formulace typu „nikdy nebude“. Před publikací opravit.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Porušení zákazu: článek pracuje s „podílem výskytů“ panelu

**Citace:**

> „Zapisujte podíl výskytů“

> „Ne ano/ne, ale kolikrát z kolika pokusů se panel objevil.“

> „AI SEO audit za 3 600 Kč projde vzorek vašich dotazů, zapíše podíl výskytů…“

**Problém:**  
Zadání výslovně říká, že článek nesmí uvádět procenta ani **podíly zobrazení panelu**. I když zde nejsou konkrétní procenta, výraz „podíl výskytů“ a formulace „kolikrát z kolika“ přesouvají článek do tématu měření četnosti, které je vyhrazené článkům `/blog/jak-casto-se-zobrazuje-ai-prehled/` a `/blog/aeo-optimalizace-v-praxi/`.

**Návrh opravy:**

V kroku Stepperu změnit na:

> **Zapisujte výsledek kontroly**  
> U každého průchodu si poznamenejte datum, prostředí, zda se panel zobrazil a jaké zdroje použil. Nevyvozujte závěr z jednoho testu.

CTA upravit na:

> **Nevíte, u kterých vašich dotazů se AI přehled objevuje a jestli v něm jste?** [AI SEO audit za 3 600 Kč](/audit/) projde vybraný vzorek dotazů, ověří výskyt panelu a doporučí, které stránky upravit pro shrnutí i pro proklik.

---

## 2. [BLOCKER] Nedoložené tvrzení o Search Console / „Přehledu výkonu v generativní AI“

**Citace:**

> „Report v Search Console vám to neřekne: ukazuje imprese ve funkcích s generativní AI, ne to, u kterých dotazů se panel objevil.“

FAQ:

> „Report Přehled výkonu v generativní AI ukazuje imprese ve funkcích s generativní AI, ale neřekne, u kterých dotazů se panel objevil ani proč.“

**Problém:**  
V dodaném researchi toto není ověřené. Zároveň je formulace velmi konkrétní — jmenuje report a tvrdí, co přesně ukazuje. Bez doložení aktuální dokumentací Googlu k 30. 8. 2026 je to fakticky rizikové.

Navíc se zde míchá širší „generativní AI“ s konkrétním tématem článku, tedy AI přehledem ve Vyhledávání.

**Návrh opravy:**

Buď doplnit přesný zdroj k danému reportu, nebo formulaci změkčit a oddělit od neověřeného názvu reportu:

> Search Console sama o sobě nevysvětluje, proč se AI přehled u konkrétního dotazu spustil nebo nespustil. Pro posouzení je potřeba kombinovat dostupná data s ruční kontrolou vybraných dotazů.

FAQ upravit stejně:

> Ne spolehlivě. Search Console nevysvětluje důvod spuštění AI přehledu u konkrétního dotazu. Pro praktické rozhodnutí je potřeba opakovaná ruční kontrola vybraných dotazů a zdrojů, které se v panelu objevují.

---

## 3. [BLOCKER] Nepodložená predikce „uzavřený seznam nikdy nebude“

**Citace:**

> „## Proč uzavřený seznam nikdy nebude“

**Problém:**  
Tohle nelze doložit. Research říká pouze to, že Google k ověřenému datu žádný seznam nezveřejnil. Nelze tvrdit, že „nikdy nebude“. Je to zbytečně absolutní a fakticky neobhajitelné.

**Návrh opravy:**

Nadpis změnit například na:

> ## Proč s uzavřeným seznamem dnes nejde pracovat

A první větu sekce upravit takto:

> Google k 30. 8. 2026 nezveřejnil seznam dotazů, u kterých se AI přehled nespustí. Proto je bezpečnější pracovat s principem užitečnosti než s domnělým výčtem typů dotazů.

---

## 4. [BLOCKER] Nedoložené signály spuštění jsou podané příliš jistě

**Citace:**

> „Do stejného dotazu vstupuje zařízení, jazyk, region i to, co systém považuje v dané chvíli za užitečné.“

**Problém:**  
Google v dodaném researchi říká, že rozhodují „systémy“ a že AI může být užitečná například při porozumění informacím z různých zdrojů. Neuvádí zde konkrétní signály jako zařízení, jazyk nebo region. Takto napsaná věta působí jako znalost interních pravidel Googlu.

**Návrh opravy:**

Změkčit a přiznat limit:

> Stejný dotaz se může chovat odlišně podle kontextu hledání. Google ale nezveřejňuje přesný seznam signálů, které rozhodují o spuštění AI přehledu, proto z jednoho testu nejde dělat obecné pravidlo.

---

## 5. [BLOCKER] Kanibalizace tématu měření četnosti

**Citace:**

> „Proto se stejný dotaz může chovat jinak dnes a za měsíc — a proto se veřejná čísla o četnosti panelu tak rozcházejí, jak rozebírá [jak často se zobrazuje AI přehled]…“

> „Zapisujte podíl výskytů“

> „Přepočítejte to za čtvrt roku“

**Problém:**  
Článek měl být o tom, co spouštění mění v praxi a kdy panel nečekat. Sekce „Jak si to zjistit u svých dotazů“ jde už poměrně hluboko do metodiky měření a četnosti, což koliduje s články:

- `/blog/jak-casto-se-zobrazuje-ai-prehled/`
- `/blog/aeo-optimalizace-v-praxi/`
- `/blog/mereni-ai-mode-limity/`

**Návrh opravy:**  
Sekci zkrátit. Nechat jen praktické minimum bez podílů a bez metodiky četnosti:

> ## Jak si to ověřit bez přeceňování jednoho testu  
> Vyberte několik značkových, informačních a nákupních dotazů. Zkontrolujte je opakovaně s odstupem a zapisujte, zda se panel zobrazil a jaké zdroje použil. Závěry o četnosti a limitech měření řeší samostatný článek o měření AI funkcí.

---

# 2. Doporučení

## 1. [WARNING] SEO title nepracuje dostatečně se záměrem „kdy se spustí AI přehled“

**Citace:**

```yaml
seoTitle: "Kdy se AI přehled nezobrazí: co to znamená (2026)"
```

**Problém:**  
Cílové klíčové slovo je „ai overviews trigger kdy“, tedy hlavní záměr je „kdy se AI přehled spustí / nespustí“. SEO titulek řeší jen nezobrazení. Je dobrý, ale mohl by lépe pokrýt trigger/spuštění.

**Návrh opravy:**

```yaml
seoTitle: "Kdy se spustí AI přehled a kdy ho nečekat (2026)"
```

Případně:

```yaml
seoTitle: "Kdy se spustí AI přehled: princip Googlu (2026)"
```

---

## 2. [WARNING] Slug je srozumitelný, ale slabší vůči hlavnímu záměru

**Citace:**

```yaml
slug: "kdy-ai-prehled-necekat"
```

**Problém:**  
Slug odpovídá článku, ale neobsahuje „spustí“ ani „zobrazí“, tedy hlavní vyhledávací záměr.

**Návrh opravy před publikací:**

```yaml
slug: "kdy-se-spusti-ai-prehled"
```

Nebo pokud chcete zachovat úhel „nečekat“:

```yaml
slug: "kdy-se-ai-prehled-nezobrazi"
```

---

## 3. [WARNING] Meta description obsahuje nepodložené „často hraje pro vás“

**Citace:**

```yaml
description: "Google seznam dotazů bez AI přehledu nezveřejnil, popsal jen princip. Co z toho plyne pro práci se stránkou a proč chybějící panel často hraje pro vás."
```

**Problém:**  
„Často hraje pro vás“ je silnější claim, než článek dokládá. Bez dat o četnosti je bezpečnější formulace „může být výhoda“.

**Návrh opravy:**

```yaml
description: "Google seznam dotazů bez AI přehledu nezveřejnil, popsal jen princip. Co z toho plyne pro obsah a kdy může být chybějící panel výhoda."
```

---

## 4. [WARNING] „Kde panel obvykle nedává smysl“ zní jako pravidlo

**Citace:**

> „## Kde panel obvykle nedává smysl“

> „Z principu užitečnosti se dá odvodit, kdy shrnutí z více zdrojů nemá co nabídnout.“

**Problém:**  
Článek sice správně říká, že nejde o seznam od Googlu, ale nadpis a formulace „nemá co nabídnout“ jsou příliš kategorické. Zadání výslovně upozorňuje, že pozorování nebo odvození nesmí znít jako pravidlo Googlu.

**Návrh opravy:**

Nadpis:

> ## Situace, kde panel nemusí přidat hodnotu

Úvod:

> Z principu užitečnosti se dá opatrně odvodit, kde shrnutí z více zdrojů může dávat menší smysl. Není to pravidlo Googlu, ale praktická pomůcka pro plánování obsahu.

---

## 5. [WARNING] „Panel je doma“ je příliš hovorové a ne přesné

**Citace:**

> „Naopak tam, kde se odpověď skládá z několika zdrojů — srovnání, výběr, ‚jak na to‘, vysvětlení pojmu — je panel doma.“

**Problém:**  
„Je panel doma“ je publicistické, ale pro vzdělávací článek na agenturním webu zbytečně neformální. Navíc to zní jistěji, než dovoluje research.

**Návrh opravy:**

> Naopak u dotazů, kde člověk potřebuje rychle porozumět informacím z více zdrojů, může AI přehled dávat větší smysl. Typicky jde o vysvětlení, srovnání nebo postupy — ale nejde o pravidlo z dokumentace Googlu.

---

## 6. [WARNING] FAQ obsahuje dobré otázky, ale jedna odpověď opakuje nedoložené měření

**Citace:**

```yaml
q: "Dá se spouštění vyčíst ze Search Console?"
a: "Ne. Report Přehled výkonu v generativní AI ukazuje imprese ve funkcích s generativní AI..."
```

**Problém:**  
Viz blocker k Search Console. V FAQ je problém ještě viditelnější, protože odpovědi často přebírají AI systémy samostatně.

**Návrh opravy:**

```yaml
q: "Dá se spouštění AI přehledu vyčíst ze Search Console?"
a: "Ne spolehlivě. Search Console nevysvětluje, proč se AI přehled u konkrétního dotazu zobrazil nebo nezobrazil. Pro praktické rozhodnutí je potřeba opakovaná kontrola vybraných dotazů a zdrojů v panelu."
```

---

## 7. [TIP] Přidejte přímý odkaz ke Google citaci už v sekci „Co Google doopravdy říká“

**Citace:**

> „Česká nápověda Vyhledávání to formuluje jednou větou:“

Zdroj je až úplně dole.

**Problém:**  
Pro čtenáře i AI citovatelnost je lepší mít zdroj přímo u citace. Závěrečný seznam zdrojů je v pořádku, ale nestačí optimálně.

**Návrh opravy:**

> Česká nápověda Vyhledávání Google k AI přehledům uvádí:

a za citaci doplnit odkaz:

> Zdroj: [Nápověda Vyhledávání Google – AI Overviews](https://support.google.com/websearch/answer/14901683?hl=cs), ověřeno 30. 8. 2026.

---

## 8. [TIP] Nadpis „Co to mění na práci se stránkou“ je dobrý, ale šel by zpřesnit na hlavní přínos

**Citace:**

> „## Co to mění na práci se stránkou“

**Problém:**  
Sekce je důležitá a odpovídá zadání. Nadpis by mohl lépe říct, že nejde o měření, ale o rozhodnutí, jak stránku stavět pro oba scénáře.

**Návrh opravy:**

> ## Jak připravit stránku pro panel i klasický výsledek

---

## 9. [TIP] Opatrně s formulací „získat proklik navíc“

**Citace z tabulky:**

> „být použitelným podkladem pro shrnutí a získat proklik navíc“

**Problém:**  
„Získat proklik navíc“ může znít jako příslib výsledku. Bezpečnější je formulovat to jako šanci.

**Návrh opravy:**

> být použitelným podkladem pro shrnutí a zvýšit šanci na proklik

---

## 10. [TIP] Závěrečný CTA je konkrétní, ale po opravě nesmí slibovat „podíl výskytů“

**Citace:**

> „AI SEO audit za 3 600 Kč projde vzorek vašich dotazů, zapíše podíl výskytů…“

**Problém:**  
Produkt a cena jsou správně. Vadí jen „podíl výskytů“.

**Návrh opravy:**

> [AI SEO audit za 3 600 Kč](/audit/) projde vzorek vašich dotazů, ověří výskyt AI přehledu, zkontroluje zdroje v panelu a doporučí stránky, které mají upravit odpověď, strukturu i důvod k prokliku.

---

# 3. Co je v pořádku

- **Krátká odpověď ve frontmatteru má správnou délku a smysl.** Má cca 46 slov, začíná definicí a funguje samostatně.
- **Prvních ~100 slov těla článku dobře odpovídá na hlavní otázku.**
- **Článek správně říká, že Google nezveřejnil uzavřený seznam dotazů bez panelu.**
- **Pozorování třetích stran jsou většinou označená jako pozorování, ne jako pravidlo Googlu.**
- **Nejsou zde konkrétní procenta výskytu AI přehledu.** Problém je ale práce s „podílem výskytů“, viz blocker.
- **Brand voice je převážně věcný a neprodává agresivně.**
- **Zakázané termíny typu „schema markup“, „answer block“, „hub-and-spoke“ se v textu nevyskytují.**
- **CTA vede na konkrétní produkt s cenou, což odpovídá zadání.**
- **Interní odkazy jsou tematicky relevantní, jen sekci měření je potřeba zkrátit, aby nekanibalizovala měřicí články.**