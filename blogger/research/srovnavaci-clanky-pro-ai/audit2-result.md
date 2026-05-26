## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Opravy po 1. auditu jsou lepší, ale stále zůstávají nedoložené generalizace, několik overclaimů a zbytky antropomorfizace AI. Největší problém je, že článek opakovaně tvrdí „AI cituje častěji / víc“, ale neuvádí konkrétní analýzy, dataset ani odkaz.

---

## Nálezy

### [BLOCKER] Nedoložené tvrzení o citovanosti formátů v letech 2025–2026

**Citace:**

> „Podle dostupných analýz AI citací z let 2025–2026 patří srovnávací články a číslované seznamy mezi formáty, které se v AI odpovědích objevují často.“

**Problém:**  
Tvrzení je centrální pro celý článek, ale není doložené žádným konkrétním zdrojem. „Dostupné analýzy“ je příliš vágní. Navíc není jasné, zda jde o Google AI Overviews, Perplexity, ChatGPT Search, Bing/Copilot nebo jiný systém. Bez zdroje je to věcně neověřitelné.

**Návrh opravy:**  
Buď doplnit konkrétní zdroje s názvem, datem a odkazem, nebo tvrzení změkčit.

Např.:

> „U dotazů typu „X vs Y“ nebo „nejlepší X pro Y“ bývají srovnávací formáty pro AI odpovědi dobře použitelné, protože odpovídají záměru dotazu a mají přehlednou strukturu.“

Pokud zdroj existuje, doplnit:

> „Podle [název analýzy, měsíc 2026] se u sledovaných dotazů typu X vs Y často objevovaly stránky se srovnávací strukturou…“

---

### [BLOCKER] Stále zůstává overclaim „získá víc důvěry i citací“

**Citace:**

> „Poctivé srovnání podle jasných kritérií získá víc důvěry i citací než skrytá reklama.“

A ve frontmatteru:

> `label: "poctivé srovnání získá víc důvěry i citací"`

**Problém:**  
Po 1. auditu bylo údajně změněno na opatrnější formulaci, ale v článku i ve `stats` zůstává tvrdé tvrzení „získá víc“. To slibuje výsledek bez důkazu. Navíc „citace“ u AI nejsou garantovatelné.

**Návrh opravy:**

> „Poctivé srovnání podle jasných kritérií může působit důvěryhodněji a zvýšit šanci, že bude použito jako zdroj.“

Ve frontmatteru:

> `label: "poctivé srovnání může zvýšit důvěru i šanci na citaci"`

---

### [BLOCKER] Tvrzení „číslované seznamy se citují víc než prosté odrážky“ je příliš konkrétní bez zdroje

**Citace:**

> „Číslované Top-N seznamy se podle analýz z let 2025–2026 citují víc než prosté odrážky.“

A ve frontmatteru:

> `label: "číslované seznamy se citují víc než prosté odrážky"`

**Problém:**  
To je konkrétní komparativní tvrzení, které vyžaduje data. Bez odkazu je nedoložitelné. Navíc je potřeba rozlišovat, zda se „citují“ celé stránky, nebo zda AI častěji extrahuje číslovanou strukturu.

**Návrh opravy bez zdroje:**

> „Číslované Top-N seznamy bývají pro čtenáře i AI přehlednější než volné odrážky, protože pořadí a kritéria jsou jasněji čitelné.“

Nebo se zdrojem:

> „Podle [konkrétní analýza, rok] se ve sledovaném vzorku číslované seznamy objevovaly v AI odpovědích častěji než nečíslované odrážky.“

---

### [WARNING] Titulek je na hraně brand voice a slibuje „sbírání citací“

**Citace:**

> `title: "Srovnávací články pro AI: proč X vs Y sbírá citace 2026"`

**Problém:**  
Délka titulku je v pořádku a klíčové slovo je vepředu. Problém je formulace „sbírá citace“, která zní příliš jistě a trochu clickbaitově. Navíc „2026“ je přilepené bez přirozené vazby.

**Návrh opravy:**

> `title: "Srovnávací články pro AI: jak psát X vs Y obsah"`

Nebo s rokem:

> `title: "Srovnávací články pro AI: jak psát X vs Y v roce 2026"`

---

### [WARNING] Meta description opakuje nedoložený claim „AI cituje častěji“

**Citace:**

> `description: "Proč AI cituje srovnávací články a Top-N seznamy častěji, jak napsat citovatelné a férové srovnání X vs Y a proč zaujatost stojí důvěru i citace."`

**Problém:**  
Délka je v pořádku, ale tvrzení „AI cituje … častěji“ je bez opory. Také „zaujatost stojí důvěru i citace“ je příliš absolutní.

**Návrh opravy:**

> `description: "Jak psát férové srovnání X vs Y, srovnávací tabulku a Top-N seznam tak, aby AI i čtenář snáz pochopili kritéria."`

---

### [WARNING] Frontmatter `stats` působí jako datová sekce, ale obsahuje nedoložené claimy

**Citace:**

```yaml
stats:
  - value: "X vs Y"
    label: "formát, po kterém AI u srovnávacích dotazů často sahá"
  - value: "Top-N"
    label: "číslované seznamy se citují víc než prosté odrážky"
  - value: "férovost"
    label: "poctivé srovnání získá víc důvěry i citací"
```

**Problém:**  
Sekce `stats` naznačuje faktická data, ale hodnoty nejsou statistiky. Navíc obsahuje antropomorfizaci „AI sahá“ a dva nedoložené komparativní claimy.

**Návrh opravy:**

```yaml
stats:
  - value: "X vs Y"
    label: "formát vhodný pro přímé porovnání dvou možností"
  - value: "tabulka"
    label: "přehled kritérií, který pomáhá AI lépe pochopit rozdíly"
  - value: "Top-N"
    label: "číslovaný seznam vhodný pro dotazy typu „nejlepší X pro Y“"
  - value: "férovost"
    label: "transparentní kritéria mohou zvýšit důvěryhodnost srovnání"
```

---

### [WARNING] Zůstává antropomorfizace AI

**Citace:**

> „po kterém AI u srovnávacích dotazů často sahá“

> „AI vytáhne bez zbytku stránky“

> „Zaujaté srovnání poznají čtenáři i AI“

> „Bez závěru si čtenář ani AI nevytáhnou jasnou odpověď.“

**Problém:**  
Po 1. auditu byla antropomorfizace zmírněna, ale stále zůstává. U čtenáře je „poznají“ v pořádku, u AI je lepší mluvit o vyhodnocení, extrakci nebo použitelnosti zdroje.

**Návrh opravy:**

Místo:

> „AI sahá“

Použít:

> „AI systémy mohou u těchto dotazů častěji využít“

Místo:

> „AI vytáhne bez zbytku stránky“

Použít:

> „AI systém může využít jako samostatný úsek odpovědi“

Místo:

> „Zaujaté srovnání poznají čtenáři i AI“

Použít:

> „Zaujaté srovnání čtenáři snáz zpochybní a pro AI systémy může být hůř použitelné jako neutrální zdroj.“

Místo:

> „Bez závěru si čtenář ani AI nevytáhnou jasnou odpověď.“

Použít:

> „Bez závěru je pro čtenáře i AI systémy obtížnější rychle pochopit hlavní rozdíl.“

---

### [WARNING] H2 „Férové srovnání = víc důvěry i citací“ je moc absolutní

**Citace:**

> `## Férové srovnání = víc důvěry i citací`

**Problém:**  
Nadpis opět slibuje výsledek. Bez dat nejde tvrdit, že férové srovnání automaticky znamená více citací.

**Návrh opravy:**

> `## Férové srovnání může zvýšit důvěru i šanci na citaci`

Nebo stručněji:

> `## Proč férovost zvyšuje použitelnost srovnání`

---

### [WARNING] FAQ odpověď stále obsahuje příliš jisté tvrzení o extrakci

**Citace:**

> „Tabulka, řádek nebo položka seznamu je samostatný, snadno extrahovatelný úsek, který umělá inteligence vytáhne bez zbytku stránky.“

**Problém:**  
Odpověď je už sebestačná, což je dobře. Problém je jistota „vytáhne“ a formulace „bez zbytku stránky“. AI systémy mohou úsek využít, ale není jisté, že ho vždy extrahují samostatně.

**Návrh opravy:**

> „Tabulka, řádek nebo položka seznamu může fungovat jako samostatný, snadno extrahovatelný úsek. AI systém ho pak snáz použije v odpovědi, pokud má jasný kontext, kritéria a srozumitelný verdikt.“

---

### [WARNING] FAQ otázka „Proč AI cituje srovnávací články častěji?“ předpokládá nedoložený fakt

**Citace:**

> `q: "Proč AI cituje srovnávací články častěji?"`

**Problém:**  
Otázka sama tvrdí, že AI tyto články cituje častěji. To je potřeba doložit, nebo formulovat opatrněji.

**Návrh opravy:**

> `q: "Proč jsou srovnávací články dobře použitelné pro AI odpovědi?"`

Případně:

> `q: "Kdy může AI častěji využít srovnávací článek jako zdroj?"`

---

### [WARNING] Claim „AI nejsnáz vytáhne odpověď“ je příliš jistý

**Citace:**

> „Tabulka do srovnávacího článku patří — tvoří jádro citovatelného srovnání. Dává přehled podle stejných kritérií a je to úsek, ze kterého AI nejsnáz vytáhne odpověď.“

**Problém:**  
„Nejsnáz“ je superlativ bez opory. Navíc není vždy pravda, že tabulka je pro AI nejlepší zdroj odpovědi — záleží na implementaci, HTML, kontextu a kvalitě textu kolem tabulky.

**Návrh opravy:**

> „Tabulka do srovnávacího článku často patří, protože přehledně ukazuje rozdíly podle stejných kritérií. AI systémům může pomoci rychleji pochopit strukturu srovnání, pokud je doplněná jasným textovým verdiktem.“

---

### [TIP] Krátká odpověď ve frontmatteru je strukturálně dobrá, ale upravil bych jeden claim

**Citace:**

> `answer: "Srovnávací článek je obsah typu X vs Y nebo „nejlepší X pro Y“, který vedle sebe staví možnosti podle stejných kritérií. AI vyhledávače takový formát citují často, protože je modulární a snadno se z něj vytahují odpovědi. Férové srovnání s jasnými kritérii může zvýšit důvěru i šanci na citaci — víc než skrytá reklama."`

**Co je dobře:**  
Má cca 53 slov, začíná definicí a dává samostatný smysl. To splňuje požadavky na krátkou odpověď.

**Problém:**  
„AI vyhledávače takový formát citují často“ je stále obecné tvrzení bez zdroje.

**Návrh opravy:**

> „Srovnávací článek je obsah typu X vs Y nebo „nejlepší X pro Y“, který vedle sebe staví možnosti podle stejných kritérií. Pro AI vyhledávání je dobře použitelný, protože má modulární strukturu a jasné rozhodovací body. Férové srovnání s kritérii může zvýšit důvěru i šanci na citaci.“

---

### [TIP] Prvních cca 100 slov těla funguje jako samostatná odpověď, jen obsahuje jeden overclaim

**Citace:**

> „Poctivé srovnání podle jasných kritérií získá víc důvěry i citací než skrytá reklama.“

**Co je dobře:**  
Úvod rychle vysvětluje, co je srovnávací článek a proč je užitečný. To je dobré pro AEO/GEO.

**Návrh opravy:**  
Stejný jako výše:

> „Poctivé srovnání podle jasných kritérií může působit důvěryhodněji a zvýšit šanci, že bude použito jako zdroj.“

---

### [TIP] Interní odkazy jsou relevantní

**Citace:**

> `[obsah pro AI éru](/blog/ai-seo-content/)`

> `[SEO vs GEO](/blog/seo-vs-geo/)`

> `[praktický checklist SEO pro AI](/blog/seo-pro-ai/)`

> `[E-E-A-T pro AI](/blog/e-e-a-t-pro-ai/)`

**Hodnocení:**  
Interní odkazy dávají smysl a vedou na související témata. Nekanibalizace `/audit/` je v pořádku — audit je zmíněn až v CTA jako produkt.

---

### [TIP] CTA je konkrétní a odpovídá zadání

**Citace:**

> „Když chcete celý web připravit na AI vyhledávání podle hotové předlohy, pomůže [AI SEO Wireframe Pack](/pack/) za 1 490 Kč. Pro plán na míru je tu produktový [AI SEO audit za 9 990 Kč](/audit/).“

**Hodnocení:**  
CTA je konkrétní, obsahuje produkty i ceny. Není to generické „kontaktujte nás“. Tady není nutná oprava.

---

## Shrnutí

Článek je po strukturální stránce použitelný: má dobrý slug, logickou H2 strukturu, relevantní interní odkazy, funkční FAQ i konkrétní CTA. Před publikací je ale nutné opravit nedoložené claimy o častější citovanosti, změkčit formulace „získá víc citací“ a odstranit zbytky antropomorfizace AI. Bez toho článek stále působí jistěji, než dovolují doložená data.