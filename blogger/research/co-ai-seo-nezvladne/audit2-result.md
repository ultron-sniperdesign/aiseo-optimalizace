## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

### Nálezy

[WARNING] **Příliš široké tvrzení o zdrojích hranic**  
> „většina těch hranic popsaná ve veřejné dokumentaci provozovatelů“  
> „Šest hranic je doložených veřejnou dokumentací, ne názorem“

Ne všech šest bodů je doložených veřejnou dokumentací provozovatelů. Proměnlivost výsledků stojí na měření SE Ranking, ne na dokumentaci Googlu.  
**Návrh opravy:**  
„Většina hranic vychází z veřejné dokumentace Googlu, proměnlivost výsledků dokládáme externím měřením SE Ranking.“

---

[WARNING] **Rozpor ve FAQ vs. tělo článku u reportu**  
> FAQ: „Samostatný report dává jen imprese…“  
> Checklist: „dává imprese, stránky, země a datum.“

FAQ zjednodušuje až nepřesně. Pokud report ukazuje i stránky, země a datum, není pravda, že dává „jen imprese“.  
**Návrh opravy:**  
„Samostatný report ukazuje imprese a základní dimenze, například stránky, země a datum; nerozlišuje ale Režim AI od AI Overviews.“

---

[WARNING] **„Návštěvnost“ vs. „kliky“ v Search Console**  
> „Návštěvy z AI funkcí Googlu jsou podle dokumentace zahrnuté do celkové návštěvnosti z vyhledávání v Search Console…“  
> „Search Console kliky z AI funkcí Googlu neodděluje.“

Search Console primárně reportuje kliky, imprese, CTR a pozici, ne návštěvnost v analytickém smyslu. V textu se míchají „návštěvy“ a „kliky“.  
**Návrh opravy:**  
Všude sjednotit na „kliky z Vyhledávání Google“ nebo „výkon ve Vyhledávání“. Např.:  
„Kliky z AI funkcí Googlu jsou v Search Console zahrnuté do celkových kliků z vyhledávání a nejsou samostatně oddělené.“

---

[WARNING] **Přehnaně absolutní formulace u opakovatelnosti**  
> „Stejný dotaz nedá dvakrát stejnou odpověď.“

To je příliš absolutní. Někdy může odpověď nebo sada odkazů vyjít podobně či stejně. Problém je nespolehlivá opakovatelnost, ne nemožnost shody.  
**Návrh opravy:**  
„Stejný dotaz nemusí dát dvakrát stejnou odpověď a často se liší i použité odkazy.“

---

[WARNING] **Nepřesně zobecněná statistika SE Ranking**  
> „18–20 % shoda odkazů mezi opakováními téhož dotazu v Režimu AI“  
> „u části testovaných lokálních dotazů byla shoda odkazů mezi běhy jen kolem pětiny“

Ve frontmatteru statistika působí obecněji než v textu. V těle se správně zužuje na obecné lokální dotazy.  
**Návrh opravy ve `stats`:**  
`label: "shoda odkazů u testovaných obecných lokálních dotazů v Režimu AI (SE Ranking, 2025)"`

---

[WARNING] **Sekundární zdroj pro přesné číslo nestačí**  
> „měření proměnlivosti SE Ranking z 29. 9. 2025 přebíráme z vlastního článku…“

Článek používá konkrétní procenta 18–20 % a 46–49 %. Nestačí odkázat jen na vlastní článek, pokud jde o data třetí strany.  
**Návrh opravy:**  
Do zdrojů přidat přímý odkaz na původní měření SE Ranking. Interní článek může zůstat jako doplňující rozbor.

---

[WARNING] **Příliš široké tvrzení o nakupovaných zmínkách**  
> „Nakupované zmínky Google ve svém průvodci řadí ke spamu.“  
> „Nákup je ale slepá ulička…“

Ne každá placená zmínka je automaticky spam — problém jsou neautentické, manipulační nebo maskované zmínky. Takhle formulované tvrzení může být věcně moc široké.  
**Návrh opravy:**  
„Nákup neautentických nebo manipulačních zmínek je slepá ulička: Google podobné shánění umělých zmínek řadí ke spamovému chování.“

---

[WARNING] **FAQ přehání, co jde „proti dokumentaci“**  
> „Všechny čtyři sliby jdou proti veřejné dokumentaci.“

Ze čtyř uvedených příkladů jdou proti dokumentaci hlavně garance zobrazení/citace a „přihlášení do AI odpovědí“. Jeden screenshot jako důkaz je metodicky slabý, ale sám o sobě „nejde proti dokumentaci“.  
**Návrh opravy:**  
„První dva sliby jdou přímo proti dokumentaci Googlu; zbylé dva jsou metodicky nedostatečné a bez opakovatelného měření zavádějící.“

---

[TIP] **Shoda podmětu a přísudku / kostrbatá věta**  
> „Google popisuje, že jeho modely během generování dohledávají další podpůrné stránky, aby mohl zobrazit širší a rozmanitější sadu odkazů.“

Podmět skáče mezi „modely“ a „Google“.  
**Návrh opravy:**  
„Google popisuje, že jeho modely během generování dohledávají další podpůrné stránky, aby systém mohl zobrazit širší a rozmanitější sadu odkazů.“

---

[TIP] **„Dohledatelnost bez JavaScriptu“ je moc zúžená**  
> „Dohledatelnost — jestli se k vám vyhledávací roboti dostanou a co vidí bez JavaScriptu.“

Google umí JavaScript zpracovat, i když renderování má limity. Formulace může vyznít, že JavaScript je automaticky problém.  
**Návrh opravy:**  
„Dohledatelnost — jestli se k vám vyhledávací roboti dostanou, co dokážou načíst a zda klíčový obsah není závislý na problematickém renderování.“

---

[TIP] **Věta může znít jako „u personalizace nejde dělat vůbec nic“**  
> „Pro web z toho neplyne žádný úkol — a právě to je ta hranice.“

To je srozumitelné, ale může to podporovat dojem, že AI SEO nemá v této oblasti smysl. Přesnější je říct, že nejde řídit osobní vrstvu, ale obecnou kvalitu ano.  
**Návrh opravy:**  
„Pro web z toho neplyne úkol řídit osobní data uživatele. Úkolem zůstává mít obsah srozumitelný a doložitelný pro případy, kdy se dostane mezi kandidátní zdroje.“

---

[TIP] **Divná kolokace „návštěvnost z AI do koruny“**  
> „Report ‚návštěvnost z AI‘ do koruny“

„Do koruny“ se hodí k penězům, ne k návštěvnosti.  
**Návrh opravy:**  
„Report ‚návštěvnost z AI‘ na jednotky přesně“  
nebo  
„Přesný report návštěvnosti z AI“

---

### Co je po opravách v pořádku

- Krátká odpověď začíná definicí a dává samostatný smysl.  
- Zakázané anglicismy a tvrdé garance se v textu prakticky neobjevují.  
- CTA je konkrétní a vede na Audit za 3 600 Kč.  
- Článek jako celek nezní proti AI SEO; dobře odděluje „nelze zaručit“ od „lze zlepšovat pravděpodobnost“.