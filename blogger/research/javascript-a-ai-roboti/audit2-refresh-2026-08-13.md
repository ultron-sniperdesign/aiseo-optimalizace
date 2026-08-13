1. **Vážné — nová sekce rozbíjí hlavní úkol článku**
   - **Citace:** „## Kolik českých webů posílá hlavní text už v HTML“ … „Předchozí část je o robotech. Tahle je o webech — a na tu jsem si udělal vlastní měření.“
   - **Problém:** Čtenář z vyhledávání sem jde hlavně pro odpověď „vykreslují / nevykreslují“ a „jak to ověřím u sebe“. Nová sekce mezi vysvětlením problému a návodem odvádí pozornost do vedlejšího tématu. Pro majitele e-shopu s třemi minutami je to zdržení.
   - **Návrh:** Přesuňte celou sekci až za „Ověřte si to za pět minut“ nebo ji zkraťte na 2–3 věty v boxu „Kontext z českých webů“ s odkazem na samostatný článek.

2. **Blokující — článek dává málo akčního výstupu hned nahoře**
   - **Citace:** Úvod končí větou „Tenhle článek je o tom, jak zjistit, jak ta serverem vrácená verze vypadá.“ První konkrétní postup přichází až v sekci „## Ověřte si to za pět minut“.
   - **Problém:** Čtenář musí projít několik sekcí, než dostane odpověď „co teď udělat“. To je proti očekávání tutorialu.
   - **Návrh:** Hned pod úvod vložte krátký box „Rychlá odpověď“ se 3 body: 1) otevřete Ctrl+U nebo curl, 2) hledejte nadpis/cenu/odkazy, 3) pokud tam nejsou, robot bez vykreslování je neuvidí.

3. **Vážné — opatrnost začíná brzdit čtení a opakuje se**
   - **Citace:** „které se mi podařilo najít“, „Hledal jsem znovu 13. srpna 2026 a nic novějšího nenašel“, „To, že jsem novější měření nenašel, neznamená, že neexistuje“, „v textech z roku 2026, na které jsem narazil…“
   - **Problém:** Stejná pojistka je ve frontmatteru, FAQ, úvodním boxu i dál v textu. Čtenář ji pochopí napoprvé; pak už jen zpomaluje tok.
   - **Návrh:** Nechte plnou opatrnost na jednom místě — ideálně v úvodním warning boxu. V ostatních částech zkraťte na „Podle veřejného měření z 12/2024“. FAQ „Jak stará jsou ta data?“ může nést detail.

4. **Vážné — vlastní měření je zbytečně dlouhé vůči užitku v tomto článku**
   - **Citace:** „Automatické vyhodnocení mi falešné nálezy vyrobilo ve třech verzích po sobě. Dohromady jich bylo 23… Dva z nich vznikly tím, že jsem stránku ve windows-1250 dekódoval jako UTF-8…“
   - **Problém:** To je už metodický detail vedlejšího článku. Tady čtenáři stačí vědět jen to, že kontrola kódování je důležitá.
   - **Návrh:** Zkraťte na jednu větu: „Při kontrole pozor na kódování; špatné dekódování umí vyrobit falešný dojem, že text v HTML chybí.“ Zbytek nechte jen v odkazovaném článku.

5. **Drobné — kostrbatá a těžká věta v úvodním boxu**
   - **Citace:** „Ve zdrojích, které jsem k tématu našel, se opakovaně odkazuje na jedno veřejné měření ze 17. prosince 2024.“
   - **Problém:** Nepřímá, dlouhá konstrukce. Zdržuje hned na začátku.
   - **Návrh:** Přepsat na: „Veřejně dohledatelné závěry k tomuto tématu dnes stojí hlavně na měření z 17. prosince 2024.“

6. **Drobné — opakování stejné myšlenky o inspektoru**
   - **Citace:** „Pozor: ne inspektor prvků…“; dále „Inspektor totiž ukazuje aktuální stav stránky…“; a znovu v chybě „Ověřovat obsah v inspektoru prvků“.
   - **Problém:** Jedna z klíčových chyb je vysvětlená třikrát skoro stejnými slovy.
   - **Návrh:** Nechte plné vysvětlení jen jednou, ideálně ve Stepperu. V dalších místech jen stručně odkažte: „viz výše: ne inspektor“.

7. **Vážné — chybí rozhodovací pravidlo „kdy je to problém a kdy ne“**
   - **Citace:** „Co tam nenajdete, to roboti bez vykreslování nedostanou…“
   - **Problém:** Článek umí říct, jak něco ověřit, ale méně jasně říká, co je kritické a co lze nechat být. To je pro majitele e-shopu důležitější než samotná technika kontroly.
   - **Návrh:** Přidejte krátkou tabulku nebo box „Kdy zasahovat hned“:
     - chybí H1 / hlavní text / produktová cena / odkazy na položky = řešit hned,
     - chybí filtr / chat / mapa / recenze po scrollu = obvykle nevadí.

8. **Drobné — některé formulace jsou zbytečně hovorové nebo vatové**
   - **Citace:** „Tahle je o webech“, „pozor na to i u sebe, je to past popsaná níž“, „a na tu jsem si udělal vlastní měření“
   - **Problém:** Působí mluveně a rozmělňují odborný tón.
   - **Návrh:** Zpřesnit:
     - „Tato část se týká webů.“
     - „Pozor i při vlastní kontrole; špatné kódování umí výsledek zkreslit.“
     - „Pro tuto otázku jsem udělal vlastní měření.“

9. **Vážné — článek je po zásazích na jednu myšlenku už příliš široký**
   - **Citace:** Kombinace sekcí „Vykreslují AI roboti JavaScript?“, „Co robot uvidí…“, „Kolik českých webů…“, „Ověřte si…“, „Co má být v HTML…“, „Nejčastější chyby“, „Co s tím…“, „Kontrolní seznam“.
   - **Problém:** Původní jedna linka „co robot dostane a jak to ověřit“ se rozšířila o datový kontext, metodické chyby, implementační doporučení i strategii oprav. To už jsou skoro dva články.
   - **Návrh:** Zvažte rozdělení:
     - tento článek: odpověď + ověření + krátký checklist,
     - samostatný článek: české měření + metodika + falešné nálezy,
     - případně samostatný článek: jak to technicky opravit ve frameworku.

10. **Vážné — chybí jeden konkrétní příklad „špatně vs. správně“**
   - **Citace:** Celý text radí kontrolovat HTML, ale nikde neukazuje minimální vzor.
   - **Problém:** Vývojář i majitel e-shopu rychleji pochopí problém na krátkém úryvku než na obecném popisu.
   - **Návrh:** Přidejte krátký kódový příklad:
     - špatně: `<div id="app"></div>` + text se doplní až JS,
     - správně: HTML už obsahuje H1, cenu, popis a JS je jen vylepšuje.  
     Stačí 10–12 řádků; užitek bude větší než další odstavec opatrnosti.