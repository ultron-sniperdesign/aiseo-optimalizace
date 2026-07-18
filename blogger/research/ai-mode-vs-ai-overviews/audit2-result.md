[BLOKER] Chybí přesná čísla 13,7 % a 16,3 %; text je zbytečně zhrubuje  
> „**Citované adresy se překrývaly zhruba ze 14 procent**, u prvních tří citací kolem 16 procent.“  
> „label: "shoda citovaných adres … **~14 %** …"“

Proč: Etalon uvádí 13,7 % a top‑3 16,3 %. Zaokrouhlení samo o sobě nemusí být problém, ale v tomto kole výslovně ověřujeme, zda oprava „nezanesla nové zaokrouhlení měnící význam“. Když už text pracuje i s 86 % a 16 %, je lepší držet přesné hodnoty tam, kde jsou jádrem teze článku. Zvlášť ve stats boxu je „~14 %“ slabší než etalon.

Návrh:  
- v odstavci: „Citované adresy se překrývaly z **13,7 procenta**, u prvních tří citací z **16,3 procenta**.“  
- ve stats: „**13,7 %**“ místo „~14 %“

---

[WARNING] Limit „jednotlivá vygenerování“ není dotažen přímo ke všem zkráceným číslům mimo hlavní odstavec  
> „label: "shoda citovaných adres v americkém snímku Ahrefs ze září 2025 — jde o snímek, ne stav v čase"“  
> FAQ a další zkratky pracují s čísly, ale ne vždy opakují limit stejně explicitně.

Proč: Hlavní odstavec už je v pořádku a splňuje požadavek trhu, data i limitu. Mimo něj ale některé zkratky používají číslo ve zjednodušené podobě. Není to blocker, protože limit v textu je přítomen a čtenář ho dostane i ve FAQ. Jen by šlo být ještě konzistentnější.

Návrh: U všech krátkých metrik držet stejný slovník: „USA, září 2025, snímek jednotlivých vygenerování“.

---

[OK] U hlavních čísel je trh, datum i limit uveden  
> „**V amerických datech ze září 2025, která zachycují jednotlivá vygenerování**, porovnal Ahrefs…“  
> „**Byla to americká data ze září 2025**… **Šlo o snímek jednotlivých vygenerování**…“

Proč: Tohle byl blocker v 1. kole a teď je opraven správně. U klíčových čísel je jasně řečeno trh, datum i metodický limit.

Návrh: Bez nutné opravy.

---

[OK] Počty párů odpovědí a dotazů souhlasí s etalonem  
> „zhruba **730 tisíc párů odpovědí** pro podobnost obsahu a **540 tisíc párů dotazů** pro citace“

Proč: Odpovídá 730 000 a 540 000. Zde „zhruba“ nemění význam.

Návrh: Bez nutné opravy.

---

[OK] Sémantická podobnost a Jaccard na úrovni slov souhlasí  
> „průměrná sémantická podobnost kolem **86 procent**, zatímco **shoda na úrovni konkrétních slov** vyšla kolem **16 procent**“

Proč: Odpovídá etalonu 86 % a 16 %.

Návrh: Bez nutné opravy.

---

[OK] Délka odpovědí souhlasí s etalonem  
> „AI Mode **~4× delší**“  
> „odpovědi v AI Mode bývaly ve stejné studii výrazně delší“

Proč: Odpovídá etalonu ~4× delší.

Návrh: Pokud chcete být úplně přesní, lze doplnit i entity 3,3 vs. 1,3 do hlavního textu nebo stats, ale není to povinnost.

---

[OK] Limit s proměnlivostí citací je uveden korektně  
> „…mění **zhruba 45 procent citací** v AI Overviews — takže skutečný překryv zdrojů může být vyšší…“

Proč: Odpovídá etalonu a je připsán jako dřívější výzkum uváděný studií, ne jako nový samostatný důkaz.

Návrh: Bez nutné opravy.

---

[OK] Nedoložená tvrzení třetích stran se v textu neobjevují  
Nevidím zde proklouznuté výroky typu 93 % bez kliknutí, 48 % dotazů, propad CTR, 2 % uživatelů.

Proč: Splněno.

Návrh: Bez nutné opravy.

---

[OK] Neslibuje výsledek ani nepřehání jistotu  
> „naznačuje“  
> „může být vyšší“  
> „jeden povrch za druhý ručit nemůže“  
> „Techniky … nebývá čím doložit“

Proč: Tvrzení jsou opatrná, nepůsobí absolutně a neslibují výsledek.

Návrh: Bez nutné opravy.

---

[OK] Vnitřní rozpory nevidím; answer sedí a začíná definicí  
> „AI Overviews je… AI Mode je…“

Proč: Answer má přibližně požadovanou délku, začíná definicí a je v souladu s tělem článku.

Návrh: Bez nutné opravy.

---

[DOPORUČENÍ] „entity“ z etalonu chybí v jednom konkrétním číselném vyjádření  
> „…s víc zmíněnými entitami“  
> „Ve zmíněné studii byly odpovědi v AI Mode výrazně delší a obsahovaly víc zmíněných entit…“

Proč: Věcně je to správně, ale etalon má přesné číslo 3,3 vs. 1,3. Není to blocker, protože text netvrdí jiné číslo. Jen když už jde o analytický článek, přesný údaj by zvýšil pevnost.

Návrh: Doplnit třeba jednou: „v průměru 3,3 entity oproti 1,3“.

---

[KOSMETIKA] Jazyk je čistý; anglicismy jsou vesměs odůvodněné  
> „query fan-out“

Proč: Jde o terminus technicus a je vysvětlen. Tón je střízlivý, CTA není v rozporu s tezí článku.

Návrh: Bez nutné opravy.

---

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Důvod: jediný finální problém je číselná přesnost u hlavní metriky citací. Není to věcný kolaps, ale podle zadání 2. kola je to BLOKER: etalon má 13,7 % a 16,3 %, text to zhrubuje na ~14 % a ~16 %. Po zpřesnění těchto dvou čísel bych text pustil.