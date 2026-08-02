1. **Rozpor v přítomném čase vs. ukotvení k 12/2024**
   - Citace: „**AppleBot a Gemini vykreslují.**“ (Mistake 04)
   - Problém: V těle i FAQ je u Gemini správně opatrné „zdroj to dovozuje / pravděpodobně“, ale tady je z toho tvrdé aktuální tvrzení. Navíc přítomný čas zní jako stav dnes, ne jako výsledek měření z 12/2024.
   - Návrh opravy: „**AppleBot v měření z 12/2024 vykresloval a u Gemini to zdroj dovozuje.**“

2. **Překlopení z „zdroj dovozuje“ na jistotu**
   - Citace: „stats: … **Googlebot, AppleBot a odvozeně Gemini**“
   - Problém: „u kterých zdroj uvádí vykreslování“ neplatí pro Gemini; tam ho zdroj neuvádí jako přímo změřený, jen ho dovozuje. Formulace statu to stírá.
   - Návrh opravy: „**2 přímo změřené případy vykreslování: Googlebot a AppleBot; u Gemini to zdroj dovozuje**“ nebo zkrátit na 2.

3. **Další překlopení na jistotu v krátké odpovědi**
   - Citace: „**Googlebot a AppleBot ho ve stejném měření vykreslovaly, Gemini podle zdroje také.**“
   - Problém: „také“ je silnější než zbytek textu; čtenář snadno přečte jako potvrzený fakt. Jinde je správněji „zdroj to dovozuje… / pravděpodobně“.
   - Návrh opravy: „**Googlebot a AppleBot ho ve stejném měření vykreslovaly; u Gemini to zdroj dovozuje.**“

4. **Technická nepřesnost u JSON-LD v tabulce**
   - Citace: „**Strukturovaná data dopsaná až běžícím skriptem | left: nevidí | right: nevidí, ale nepotřebuje je**“
   - Problém: Druhá půlka je chybná/rušivá. Návštěvník je opravdu „nevidí“, ale „nepotřebuje je“ je irelevantní k porovnání a po následném vysvětlení o JSON-LD mate. Strukturovaná data nejsou pro návštěvníka; jde o stroje.
   - Návrh opravy: „**right: nevidí — jsou určená robotům, ne návštěvníkovi**“ nebo celý řádek přepsat na kontrast „robot bez vykreslování / robot či systém, který čte serverové HTML“.

5. **JSON-LD oprava je v jádru správně, ale formulace je moc kategorická**
   - Citace: „**Pokud jsou v HTML od serveru, přečte si je bez problémů.**“
   - Problém: Technicky ano: JSON-LD ve `<script type="application/ld+json">` obsažený v serverem vráceném HTML lze číst bez vykreslování. „Bez problémů“ je ale zbytečně absolutní; problém může být jinde (chybné umístění, invalidní JSON, escapování, blokace, ořezaná odpověď ap.).
   - Návrh opravy: „**Pokud jsou v serverem vráceném HTML, robot je obvykle přečte i bez vykreslování, protože nemusí spouštět JavaScript — stačí mu přečíst obsah značky `<script type="application/ld+json">`.**“

6. **Věcně příliš silné tvrzení o crawleru bez vykreslování**
   - Citace: „**Když je přechod na další stránku řešený jen tlačítkem a skriptem, robot bez vykreslování se na cílovou adresu obvykle nedostane.**“
   - Problém: „obvykle“ je asi pravda, ale článek jinde staví na jediné studii o vykreslování, ne o schopnosti extrahovat URL z různých JS vzorů. Tady by bylo lepší držet se praktičtějšího doporučení bez domněnky o chování všech robotů.
   - Návrh opravy: „**…nemá spolehlivou cestu na cílovou adresu; proto má být navigace jako odkaz `<a href>`.**“

7. **Místy už příliš vágní doporučení, chybí priorita**
   - Citace: „**Stačí, aby v serverem vráceném HTML byl hlavní obsah…**“ / „**Jde o to rozdělit, co má robot dostat rovnou.**“
   - Problém: Doporučení je rozumné, ale po všech zmírněních by pomohla jedna jasná prioritizační věta typu „co opravit jako první“. Teď je to rozptýlené v checklistu a tabulce.
   - Návrh opravy: Přidat jednu větu hned pod nadpis „Co má být v HTML…“: „**Když máte opravit jen tři věci, začněte tímto pořadím: (1) hlavní text a nadpis, (2) odkazy na další stránky, (3) cena/dostupnost a FAQ.**“

8. **Drobná čeština/styl**
   - Citace: „**A robot, který JavaScript nespouští, dostane jen tu první verzi. Tenhle článek je o tom, jak zjistit, jak vypadá.**“
   - Problém: Závěrečné „jak vypadá“ má nejasný podmět.
   - Návrh opravy: „**…jak zjistit, jak vypadá ta serverem vrácená verze stránky.**“

9. **Drobná terminologická nepřesnost**
   - Citace: „**Googlebot a AppleBot je naopak vykreslovaly.**“ / „**Vykreslují AI roboti JavaScript?**“
   - Problém: „vykreslovat JavaScript“ není úplně přesné; vykresluje se stránka / spouští se skripty. V textu se to střídá, ale nadpis i některé věty to zjednodušují až moc.
   - Návrh opravy: Sjednotit na „**spouštějí JavaScript a vykreslují stránku**“; např. „**Googlebot a AppleBot ve stejném měření JavaScript spouštěly a stránku vykreslovaly.**“

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**