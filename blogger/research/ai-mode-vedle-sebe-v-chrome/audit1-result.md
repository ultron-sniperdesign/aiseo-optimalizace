Níže jen problémy: místo, proč je to problém, návrh opravy.

## 1) Úsudek vydaný za zjištění

### Frontmatter: `description`
> „Co to dělá s vaší stránkou, když vedle ní pořád svítí seznam jiných zdrojů.“

Problém: „pořád svítí seznam jiných zdrojů“ je silnější formulace, než říká zdroj. Z primárního zdroje plyne, že AI Mode zůstává otevřený vedle stránky. Ne že je vedle stránky nutně „seznam jiných zdrojů“ stále viditelný v té podobě, jak ji zná čtenář z jiných obrazovek.

Návrh:
- „…když vedle ní zůstává otevřený panel AI Mode.“
- případně „…když vedle ní zůstává otevřený panel s odpovědí a odkazy.“

---

### Frontmatter: `answer`
> „Vaše stránka se tedy zobrazí v užším okně a vedle ní zůstává seznam ostatních citovaných zdrojů.“

Problém: první půlka je v pořádku jako důsledek „side-by-side“. Druhá půlka už není jistá v této konkrétní podobě. Z oznámení neplyne, že vedle stránky je nutně „seznam ostatních citovaných zdrojů“ stále zobrazený jako seznam.

Návrh:
- „Vaše stránka se tedy zobrazí v užším okně a vedle ní zůstává otevřený AI Mode, takže uživatel může dál pracovat s odpovědí a přecházet k dalším zdrojům.“

---

### Úvod
> „Dosud platilo jednoduché pravidlo: buď je uživatel v AI odpovědi, nebo je u vás. Klik ho přenesl a panel zmizel.“

Problém: tohle je podané jako obecné zjištění bez opory ve zdroji. V článku auditujete jednu novou funkci v Chromu. Nemáte tu doložené, že „dosud platilo“ právě toto pravidlo jako obecný stav AI Mode/Chrome UX.

Návrh:
- „Nově Google popisuje chování, kdy po kliku panel nezmizí, ale zůstane vedle stránky.“
- nebo „Na rozdíl od běžného otevření stránky tady po kliku AI Mode nezmizí.“

---

### Sekce „Co Google oznámil“
> „Uživatel si otevře váš text, přečte ho a může se rovnou doptat dál, aniž by kamkoli přepínal.“

Problém: „přečte ho“ je zbytečné dotváření scénáře. Není to chyba věcně, ale stylově to podsouvá uživatelské chování jako očekávaný průběh. Doložené je jen to, že AI Mode zůstane otevřený a lze pokračovat.

Návrh:
- „Uživatel si otevře váš text a může se rovnou doptat dál, aniž by přepínal karty.“

---

### Sekce „Co se tím mění pro vaši stránku“
> „Ne jako odhad, ale jako důsledek toho, co Google popsal.“

Problém: následující první bod je hned formulovaný přehnaně jistě a navíc s nedoloženým poměrem.

> „Když si panel s odpovědí nechá polovinu obrazovky, zbývá na váš web zhruba polovina šířky.“

To je přesně to, co research zakazuje: konkrétní poměr rozdělení okna neznáte. Tady z neznámého poměru děláte kvazifakt.

Návrh:
- „Protože se stránka otevírá vedle AI Mode, bude mít pro obsah méně šířky než běžná karta. Přesný poměr rozdělení Google neuvádí.“
- a vypustit „polovinu obrazovky / zhruba polovina šířky“.

---

### Sekce „Co se tím mění pro vaši stránku“
> „Desktopová návštěva se najednou chová jako návštěva z tabletu — jen ji za tablet nikdo neoznačí.“

Problém: to už je interpretace, ne přímý důsledek. Může to být užší desktopové okno, ale nevíte jak úzké. „Chová jako tablet“ je zkratka a v této sekci je podaná moc tvrdě.

Návrh:
- „Desktopová návštěva se může chovat spíš jako užší layout než jako plná šířka desktopu.“
- nebo „…může se přiblížit šířkám, které web běžně řeší u tabletu.“

---

### Sekce „Co se tím mění pro vaši stránku“
> „Za druhé: vedle vás zůstává seznam ostatních zdrojů.“

Problém: stejné jako ve frontmatteru. Zůstává AI Mode. „Seznam ostatních zdrojů“ je odvození z typického rozhraní, ne jistota z citované věty.

Návrh:
- „Za druhé: vedle vás zůstává otevřený AI Mode, takže jiné zdroje a další dotazy jsou pořád po ruce.“

---

### Sekce „Vedle vás svítí konkurence“
> „Tady žádná není.“

Problém: absolutní tvrzení. Bariéra není nulová; je menší. Jedním klikem dostupná konkurence není totéž jako „žádná bariéra“.

Návrh:
- „Tady je ta bariéra menší.“
- nebo „Tady je přechod k jinému zdroji snazší.“

---

### Sekce „Vedle vás svítí konkurence“
> „Prakticky to zvedá laťku na první obrazovku vašeho textu.“

Problém: plausibilní úsudek, ale bez dat. V textu by to mělo být jasně jako doporučení/interpretace, ne jako zjištění.

Návrh:
- „Prakticky to nejspíš zvedá laťku na první obrazovku vašeho textu.“
- nebo „Jako pracovní závěr dává smysl počítat s tím, že první obrazovka bude důležitější.“

---

### Sekce „Dva výklady téže změny“
> „Vzato doslova, je to argument ve prospěch webů — snazší návštěva znamená víc návštěv.“

Problém: logický skok. „Easier to visit“ neznamená „víc návštěv“. To je přesně vydání interpretace za zjištění.

Návrh:
- „Vzato doslova, je to argument ve prospěch webů: Google to prezentuje jako snazší cestu k návštěvě relevantních webů.“
- případně doplnit: „Zda to skutečně znamená víc návštěv, z oznámení neplyne.“

---

### Sekce „V analytice to nepoznáte — pokud si to nenastavíte“
> „vestavěné rozlišení obrazovky v GA4 vám tohle neukáže“

Problém: velmi pravděpodobně pravda, ale formulace je kategorická a bez opory ve zdroji. Tady už nejste v režimu popisu Google, ale dáváte produktové tvrzení o GA4. Pokud ho chcete nechat, mělo by být jasně jako odborný úsudek mimo primární zdroj.

Návrh:
- „Ze standardní dimenze rozlišení obrazovky v GA4 to typicky nevyčtete…“
- nebo „Samotná metrika rozlišení obrazovky v GA4 nepopisuje šířku okna, ale displej zařízení.“

Druhá věta je přesnější a méně marketingová.

---

### Sekce „Co s tím udělat“
> „Přesnou šířku Google neuvádí, ale řádově se pohybujete kolem poloviny běžné obrazovky.“

Problém: zase nepodložený poměr. Research výslovně říká nepsat čísla/poměry jako fakt. „Řádově kolem poloviny“ je sice měkčí než „polovina“, ale pořád je to neověřený odhad, podaný jako pracovní parametr bez explicitního označení, že jde čistě o heuristiku autora.

Návrh:
- „Přesnou šířku Google neuvádí. Pro orientační test stačí okno výrazně zúžit oproti plné šířce desktopu.“
- případně „…můžete začít někde v pásmu užšího desktopu až tabletu, ale je to jen orientační simulace.“

---

### Sekce „Jak si to nasimulovat“
> „to podstatné — kolik vašeho obsahu se vejde do užšího okna — si ověříte za dvě minuty“

Problém: ještě v pořádku. Ale poslední věta už přechází do širší teze:

> „To je první, co návštěvník uvidí.“

To je znovu jistota o konkrétním průběhu zobrazení. Může, ale nemusí.

Návrh:
- „To může být první věc, kterou návštěvník v užším okně uvidí.“

---

### Závěr
> „Pro vaši stránku z toho plyne užší okno a konkurenční zdroj na dosah jednoho kliknutí.“

Problém: „konkurenční zdroj na dosah jednoho kliknutí“ je pořád odvození z předpokládaného rozhraní AI Mode, ne doslovné sdělení zdroje. Není to tak problematické jako „seznam ostatních zdrojů“, ale přesnější by bylo držet se AI Mode panelu.

Návrh:
- „Pro vaši stránku z toho plyne užší okno a to, že AI Mode zůstává vedle ní otevřený.“

---

## 2) Vnitřní rozpory

### Rozpor: „nevíme poměr okna“ vs. opakované „polovina“
Místa:
- „Když si panel s odpovědí nechá polovinu obrazovky…“
- „…zhruba polovina šířky.“
- „…okno kolem 700 pixelů“
- „…řádově se pohybujete kolem poloviny běžné obrazovky.“

Problém: v sekci „Co Google neřekl“ správně uvádíte, že poměr rozdělení neznáme. Jinde ale opakovaně stavíte doporučení na konkrétní představě „půlky“ a jednou ji převádíte i na cca 700 px. To je vnitřně nekonzistentní.

Oprava:
- všude vypustit polovinu / 700 px jako implicitní realitu funkce;
- nahradit formulacemi „výrazně užší než plná šířka“ nebo „zúžené desktopové okno“.

---

### Rozpor: „nevydáváme odhad za fakt“ vs. sekce „Ne jako odhad“
Místa:
- „Ne jako odhad, ale jako důsledek…“
- následně „polovina obrazovky“, „seznam ostatních zdrojů“, „jako tablet“.

Problém: tato sekce sama sebe přestřeluje. Kdybyste ji nadepsal jako „nejpravděpodobnější praktické důsledky“, byla by poctivější. V aktuální podobě slibuje vyšší jistotu, než pak skutečně drží.

Oprava:
- změnit úvod sekce na:
  - „Z popisu přímo plyne, že stránka nebude přes celou šířku a AI Mode zůstane otevřený. Praktické důsledky níže jsou odvození z tohohle uspořádání.“

---

## 3) Titulek a krátká odpověď

### Titulek
> „AI Mode v Chromu: web se otevře vedle odpovědi“

Sedí. Neslibuje víc, než zdroj říká.

---

### Krátká odpověď (`answer`)
Problém už výše: přestřeluje „seznam ostatních citovaných zdrojů“ jako jistotu.

Návrh:
- „Google od 16. dubna 2026 v AI Mode v Chromu na desktopu otevírá kliknutý odkaz vedle odpovědi — AI Mode zůstává otevřený a uživatel se může doptávat dál. Vaše stránka se tedy zobrazí v užším okně a vedle ní zůstává otevřený panel AI Mode. Zatím jen v USA.“

---

## 4) Je článek dost užitečný? Co v něm chybí bez spekulace

Na 1400 slov a jeden krátký zdroj tu chybí pár nespekulativních věcí, které by čtenář čekal:

### A) Jasné oddělení „co víme / co nevíme / co z toho doporučujeme“
Máte to rozptýlené, ale ne dost disciplinovaně. Článek by byl poctivější s krátkým blokem hned nahoře:

- Co víme z oznámení
- Co Google neřekl
- Co jsou naše odvozená doporučení

To by omezilo přesně ty sklouznutí, která v textu máte.

---

### B) Přesnější vypsání scope funkce
Ze zdroje plyne:
- AI Mode
- Chrome
- desktop
- USA

To v článku je, ale zasloužilo by si to krátký souhrnný box „Platí jen pokud…“. Čtenář si jinak snadno odnese moc obecný závěr pro „Google“ nebo „vyhledávání“.

Návrh boxu:
- Jen AI Mode, ne běžné výsledky
- Jen Chrome
- Jen desktop
- Při oznámení jen USA

To jde napsat bez spekulace a zvýší užitek.

---

### C) Co přesně je nového proti dřívějšímu chování, ale bez nedoložené historie
Teď to řešíte větou „Dosud platilo…“, která je slabá. Lepší by bylo napsat jen kontrast bez historického nároku:

- „Novinka není v tom, že AI Mode odkazuje na weby, ale v tom, že po kliku odpověď nezmizí a zůstane vedle stránky.“

To je pro čtenáře velmi užitečné a nepředstírá víc, než víte.

---

### D) Výslovná poznámka, že nevíte nic o atribuci, referreru a Search Console
Máte to v FAQ i těle, ale schované. U článku s praktickým dopadem je to jedna z prvních otázek. Patří výš, ideálně do krátkého seznamu „Google neřekl“.

---

## 5) Další drobnější přestřelení / formulace ke zjemnění

### FAQ
> „Kdo dnes tvrdí opak, dovozuje to stejně jako my — jen to nepíše.“

Problém: rétorická poznámka, ne věcné sdělení. Navíc může být nepravdivá; někdo může mít vlastní testy z USA. Nemůžete tvrdit, že každý „dovozuje stejně jako my“.

Návrh:
- „Bez vlastního testu nebo dalšího zdroje to z oznámení vyčíst nejde.“

---

### Sekce „Dva výklady téže změny“
> „Návštěva u vás pak není konec cesty, ale jeden z několika otevřených listů.“

Problém: metafora, ale ještě snesitelná. Jen podsouvá konkrétní uživatelský model. Když chcete být přísný na oddělení úsudku od zjištění, i tohle je lepší zjemnit.

Návrh:
- „Návštěva u vás pak nemusí být konec cesty, ale jen jedna z průběžných zastávek.“

---

### Závěrečná věta
> „Nic z toho není zbytečné ani v případě, že se funkce do Česka nedostane.“

To je už autorův obecný úsudek. Spíš v pořádku jako doporučení, ale můžete být přesnější:
- „Tyto úpravy dávají smysl i mimo tuto konkrétní funkci, protože pomáhají i u běžných úzkých desktopových oken.“

---

## Shrnutí nejdůležitějších oprav

1. Všude vyhoďte nebo jasně označte odhad „polovina obrazovky / 700 px“.
2. Nahraďte „seznam ostatních citovaných zdrojů“ formulací „otevřený panel AI Mode“, pokud to nemáte doložené screenshotem nebo citací.
3. Odstraňte historizující jistotu „Dosud platilo…“.
4. Zjemněte „snazší návštěva znamená víc návštěv“ — to je nepodložený skok.
5. Z FAQ vyhoďte větu o tom, že ostatní „dovozují stejně jako my“.
6. Přestavte klíčovou sekci tak, aby bylo vidět: co plyne přímo, co je odhadnutý praktický důsledek.

Největší problém textu není věcná chyba v popisu oznámen