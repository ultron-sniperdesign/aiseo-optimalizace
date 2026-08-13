1. **Blokující — článek je rozpolcený mezi dvě publika, takže majitel webu dlouho neví, proč má číst dál.**  
   **Citace:** „Chtěl jsem vědět dvě věci: jak je to časté a jestli za to weby můžou.“ / „## Co s tím, když web provozujete“ / „## Co s tím, když čtete weby strojově“  
   **Návrh:** Hned v úvodu oddělit dvě audience a dát prioritu majiteli webu. Např. po prvním odstavci vložit krátký blok: „Pro majitele webu: pokud máte správně `charset` v HTTP a `meta charset`, problém pravděpodobně není u vás. Pro autory nástrojů: nečtěte HTML natvrdo jako UTF‑8.“ Zároveň zkrátit technickou část pro autory nástrojů nebo ji přesunout níž / do rozbalovací sekce.

2. **Vážné — hlavní myšlenka není do deseti sekund dost jasná vzhledem k titulku „kdo za to opravdu může“.**  
   **Citace:** titulek „Windows-1250 na českém webu: kdo za to opravdu může“ a až později „Odpověď na druhou otázku je pro ten konkrétní problém jasná: nemohly.“  
   **Návrh:** První dvě věty přepsat na přímou odpověď. Např.: „Za problém v tomhle měření nemohly weby, ale nástroj, který ignoroval deklarované kódování. V 80 zkontrolovaných homepage jsem nenašel web, který by posílal jiné kódování, než uvádí.“ Tím titulek splní slib okamžitě.

3. **Vážné — pro majitele webu je příliš brzy moc nízkoúrovňové techniky, než dostane praktický dopad.**  
   **Citace:** „Servery posílají stránku ve **windows-1250** a já ji dekódoval natvrdo jako UTF-8 — text se rozsypal na otazníky a porovnání selhalo.“  
   **Návrh:** Ještě před technickým vysvětlením vložit větu s dopadem v byznysovém jazyce: „Pokud váš web správně hlásí kódování, tohle nejspíš není SEO problém vašeho webu, ale chyba konkrétního čteče.“ Až potom vysvětlit windows-1250 vs. UTF-8.

4. **Vážné — struktura je logická technicky, ale ne čtenářsky pro návštěvníka z vyhledávání s třemi minutami.**  
   **Citace:** pořadí „Jak se kódování deklaruje“ → „Co s tím, když web provozujete“ → „Co s tím, když čtete weby strojově“ → „Limity“  
   **Návrh:** Přehodit na: 1) krátká odpověď, 2) co to znamená pro majitele webu, 3) jak to rychle zkontrolovat, 4) až pak technické vysvětlení a část pro autory nástrojů, 5) limity nakonec. H2 „Jak se kódování deklaruje“ je teď příliš brzy; patří až za praktickou část.

5. **Vážné — opatrnost místy přehluší sdělení a zpomalí tempo.**  
   **Citace:** „v tomhle vzorku“, „u jiných klientů jsem to neměřil“, „O celém českém webu to neříká nic“, „Neměřil jsem, co s kódováním udělá konkrétní AI robot.“  
   **Návrh:** Opatrnost soustředit do jednoho kompaktního boxu „Co tohle měření neříká“ a v hlavním textu ji neopakovat po každém tvrzení. Stačí jednou jasně vymezit rozsah a dál psát přímo. U shrnutí nechat jednu formulaci, ne tři podobné.

6. **Drobné — tabulka je informačně užitečná, ale pro majitele webu nezačne tím nejdůležitějším.**  
   **Citace:** první řádky tabulky „deklaruje kódování v hlavičce HTTP | 79“, „deklaruje kódování značkou `meta` v HTML | 80“  
   **Návrh:** Přeskupit tabulku podle rozhodovací hodnoty pro čtenáře. Nahoře: „web posílá jiné kódování, než deklaruje | 0“, „posílá windows-1250 | 5“, teprve pak detaily o HTTP a `meta`. Nebo tabulku zkrátit na 3 řádky a zbytek nechat do textu.

7. **Drobné — H2 „Jak se kódování deklaruje“ neodpovídá primárnímu hledanému záměru čtenáře z titulku.**  
   **Citace:** „## Jak se kódování deklaruje“  
   **Návrh:** Přejmenovat na něco, co drží linku titulku a přínosu. Např. „Proč problém nevznikl na webech“ nebo „Jak poznat, že chyba není na straně webu“. Samotné vysvětlení HTTP a `meta` pak může zůstat uvnitř.

8. **Drobné — několik vět jde zkrátit, protože opakují stejnou pointu jinými slovy.**  
   **Citace:** „Všech pět webů ve windows-1250 deklaruje kódování správně, a to na obou místech. Ve vzorku není jediný web, který by posílal něco jiného, než o sobě tvrdí.“  
   **Návrh:** Sloučit do jedné věty: „Všech pět webů s windows-1250 deklaruje kódování správně v HTTP i HTML; ve vzorku jsem nenašel jediný rozpor mezi deklarací a skutečností.“ Podobně zkrátit i závěrečné shrnutí, kde se tatáž teze vrací znovu.

9. **Drobné — jazyk místy sklouzává k formulacím zajímavým pro autora nástroje, ne pro provozovatele webu.**  
   **Citace:** „Tahle část je pro každého, kdo si píše nebo pouští nástroj…“ / „tohle je postup, který u mě zabral.“  
   **Návrh:** Přepsat neutrálněji a stručněji, nebo oddělit jako technickou přílohu. Pro hlavní článek stačí jedna věta: „Pokud používáte crawler nebo parser, musí respektovat deklarované `charset`.“ Ukázku v Pythonu přesunout do boxu „Pro vývojáře“.

10. **Vážné — chybí jedna praktická věc, která by z článku udělala rychlý servisní návod pro majitele webu.**  
   **Citace:** „curl -sSI https://vasweb.cz/“ a „ve zdroji stránky hledejte meta charset.“  
   **Návrh:** Doplnit minisekci „Jak poznám problém za 60 sekund“ se třemi výsledky:  
   - `charset` v HTTP i `meta` souhlasí → pravděpodobně v pořádku,  
   - jedno z toho chybí → opravit,  
   - nesouhlasí → chyba webu / migrace.  
   Ideálně i s jedním konkrétním příkladem správné a chybné odpovědi. To je pro majitele webu užitečnější než samotná informace, že ve vzorku bylo 5 webů ve windows-1250.