## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek je celkově dobře postavený: má jasnou pointu, odpovídá plánované struktuře, CTA vede na konkrétní produkt a nepoužívá zakázaný prodejní overclaim. Před publikací ale potřebuje opravit několik faktických a aktuálnostních míst, hlavně kvůli nedoloženým tržním tvrzením, neukotvenému „loni/letos“ a nepřesným zdrojům.

---

## Nálezy a konkrétní opravy

### [WARNING] Neukotvené „loni“ a „letos“ porušuje pravidlo aktuálnosti

**Problémové místo:**

> „Loni na podzim se psalo, že AI prohlížeče přepíšou pravidla webu. Letos v srpnu jeden z nich zhasl.“

**Proč je to problém:**  
V zadání je aktuální rok 2026 a výslovně platí: žádné neukotvené „letos / příští rok“. Článek má zůstat srozumitelný i po archivaci nebo aktualizaci.

**Návrh opravy:**

> „Na podzim 2025 se psalo, že AI prohlížeče přepíšou pravidla webu. V srpnu 2026 jeden z nich skončil.“

---

### [WARNING] Nedoložené tvrzení o podílu Chromu na trhu

**Problémové místo:**

> „Chrome drží zhruba dvě třetiny trhu a Atlas na tom za deset měsíců nic nezměnil.“

**Proč je to problém:**  
Tvrzení o tržním podílu je číselný claim a v článku není uveden zdroj. Zadání navíc říká neuvádět čísla o podílech bez primárního zdroje. Druhá část věty („Atlas na tom nic nezměnil“) je také obtížně doložitelná.

**Návrh opravy — varianta bez čísla:**

> „Chrome má dlouhodobě dominantní pozici a samostatný AI prohlížeč musel uživatele přesvědčit, aby změnili každodenní návyk.“

**Nebo varianta se zdrojem:**

> „Podle StatCounteru měl Chrome v roce 2026 zhruba dvě třetiny globálního trhu prohlížečů. Atlas musel uživatele přesvědčit, aby změnili každodenní návyk — a podle dostupných zpráv se to nestalo v měřítku, které by samostatný produkt obhájilo.“

Nutné doplnit konkrétní zdroj a datum.

---

### [WARNING] Nepřesný údaj ve statistikách: „10 měsíců fungování“

**Problémové místo ve frontmatteru:**

```yaml
stats:
  - value: "10"
    label: "měsíců fungování — spuštěn v říjnu 2025, oznámení konce 9. 7. 2026"
```

**Proč je to problém:**  
Článek všude správně říká „necelých deset měsíců“. Statistika ale uvádí hodnotu „10“ a label váže fungování na datum oznámení konce, ne na datum vypnutí 9. 8. 2026. To může působit jako nepřesnost.

**Návrh opravy:**

```yaml
stats:
  - value: "necelých 10"
    label: "měsíců fungování — od spuštění v říjnu 2025 do vypnutí 9. 8. 2026"
```

---

### [WARNING] Zdroje k vypnutí Atlasu jsou uvedené příliš obecně

**Problémové místo:**

> „zpravodajství k datu vypnutí (Notebookcheck, MacRumors), červenec–srpen 2026“

**Proč je to problém:**  
Datum vypnutí 9. 8. 2026 je klíčový fakt článku. U zdrojů nestačí obecný výčet médií bez konkrétního odkazu a názvu článku. Pro vzdělávací web zaměřený na AI vyhledávání je to slabé i z hlediska citovatelnosti.

**Návrh opravy:**  
Doplnit konkrétní citace ve formátu:

> *Zdroje: TechCrunch, „OpenAI is shutting down Atlas, but its AI browser ambitions are still growing“, 9. 7. 2026 · Notebookcheck, „[název článku]“, 9. 8. 2026 · MacRumors, „[název článku]“, 9. 8. 2026 · Comet browser, Wikipedia, stav k 26. 8. 2026.*

Pokud konkrétní odkazy nejsou k dispozici, změkčit formulaci:

> „Podle dostupného zpravodajství z července a srpna 2026 přestal Atlas fungovat 9. 8. 2026.“

---

### [WARNING] Slabě doložené tvrzení o Cometu „zdarma pro všechny“

**Problémové místo:**

> „Comet od Perplexity funguje dál a od října 2025 je zdarma pro všechny.“

**Proč je to problém:**  
V researchi je jako zdroj uvedena Wikipedia a agregátory. To je u aktuální produktové dostupnosti slabé. Navíc formulace „zdarma pro všechny“ může být příliš absolutní, pokud existují regionální omezení, čekací listiny, placené funkce nebo změny podmínek.

**Návrh opravy:**

> „Comet od Perplexity podle dostupných informací funguje dál a od října 2025 byl otevřen bez původního placeného omezení.“

Nebo při doplnění primárního zdroje:

> „Comet od Perplexity funguje dál; Perplexity ho 2. 10. 2025 otevřela bez původního placeného omezení.“

---

### [TIP] Doplnit odkaz na článek o ověřování AI robotů

**Problémové místo:**

> „Rozebíráme to v článku o [robotech vyvolaných uživatelem](/blog/roboti-vyvolani-uzivatelem/).“

**Proč je to problém:**  
Podle plánu má článek navazovat také na `overovani-ai-robotu`. V části o robots.txt a identifikaci nástrojů je to relevantní interní odkaz. Teď chybí.

**Návrh opravy:**

> „Rozebíráme to v článku o [robotech vyvolaných uživatelem](/blog/roboti-vyvolani-uzivatelem/) a v navazujícím textu o [ověřování AI robotů](/blog/overovani-ai-robotu/).“

---

### [TIP] FAQ odpověď k robots.txt je dobrá, ale potřebuje časové ukotvení

**Problémové místo:**

> „Atlas ani jeho nástupci nemají vlastní řídicí token.“

**Proč je to problém:**  
Je to silné technické tvrzení. Vzhledem k rychlé změně AI nástrojů je lepší ho ukotvit k datu článku.

**Návrh opravy:**

> „K 26. 8. 2026 Atlas ani uvedení nástupci neměli veřejně popsaný vlastní řídicí token pro robots.txt.“

---

### [TIP] Formulace „AI prohlížeče přepíšou pravidla webu“ je trochu dramatická

**Problémové místo:**

> „Na podzim 2025 se psalo, že AI prohlížeče přepíšou pravidla webu.“

**Proč je to problém:**  
Není to zakázaný overclaim, ale působí lehce publicisticky a může být vnímáno jako zkratka bez zdroje.

**Návrh opravy:**

> „Na podzim 2025 se o AI prohlížečích psalo jako o možné změně v tom, jak lidé používají web.“

---

### [TIP] „Tenhle článek stojí za čtení“ je zbytečně sebestředné

**Problémové místo:**

> „Tady je pointa, kvůli které tenhle článek stojí za čtení, i když Atlas nikdy nepoužijete.“

**Proč je to problém:**  
Brand voice má vysvětlovat, ne prodávat text samotný. Věta je spíš redakční nadsázka než faktická informace.

**Návrh opravy:**

> „Pro většinu webů je důležitější praktický dopad než samotný konec produktu.“

---

### [TIP] SEO titulek je v pořádku, běžný title je kratší

**Problémové místo:**

```yaml
title: "Konec ChatGPT Atlasu: co to znamená pro weby"
seoTitle: "Konec ChatGPT Atlasu (2026): čím ho OpenAI nahradil"
```

**Hodnocení:**  
`seoTitle` je dobrý: má klíčové slovo vepředu a délku přibližně 51 znaků. Běžný `title` má přibližně 44 znaků, což není kritická chyba, ale je kratší než požadované rozmezí 50–60 znaků, pokud se používá jako H1 nebo fallback pro SEO.

**Návrh opravy title:**

```yaml
title: "Konec ChatGPT Atlasu: co se mění pro weby v roce 2026"
```

---

### [TIP] Meta description je dobrá

**Místo:**

```yaml
description: "OpenAI vypnul prohlížeč ChatGPT Atlas 9. 8. 2026 po necelých deseti měsících. Co ho nahradilo, co zbylo z konkurence a co to mění pro weby."
```

**Hodnocení:**  
Délka je v povoleném rozsahu 70–160 znaků, obsahuje hlavní fakt, datum i přínos článku. Bez nutné opravy.

---

### [TIP] Krátká odpověď splňuje požadavek

**Místo:**

```yaml
answer: "OpenAI oznámil 9. 7. 2026 konec samostatného prohlížeče ChatGPT Atlas..."
```

**Hodnocení:**  
Odpověď má zhruba požadovaných 40–60 slov, začíná definujícím faktem, dává samostatný smysl a obsahuje datum oznámení i vypnutí. Bez nutné opravy.

---

### [TIP] CTA je konkrétní a odpovídá zadání

**Místo:**

> „AI SEO audit za 3 600 Kč“  
> „návodem zdarma“

**Hodnocení:**  
CTA neříká generické „kontaktujte nás“, vede na konkrétní produkt a uvádí cenu auditu správně. Odpovídá zadání. Pokud chcete víc vytěžit komerční návaznost, lze doplnit i Pack za 1 490 Kč, ale není to nutné.

**Volitelná úprava:**

> „Kdo chce základ projít sám krok za krokem, může začít návodem zdarma nebo navázat AI SEO Wireframe Packem za 1 490 Kč.“

---

## Shrnutí oprav před publikací

Před vydáním doporučuji opravit hlavně:

1. Přepsat „loni / letos“ na konkrétní roky 2025 / 2026.  
2. Odstranit nebo doložit claim „Chrome drží dvě třetiny trhu“.  
3. Opravit statistiku „10 měsíců“ na „necelých 10“.  
4. Doplnit konkrétní zdroje k datu vypnutí Atlasu.  
5. Změkčit nebo doložit tvrzení o Cometu zdarma pro všechny.  
6. Doplnit interní odkaz na `overovani-ai-robotu`.

Po těchto úpravách je článek publikovatelný.