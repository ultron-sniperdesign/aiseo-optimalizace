**BLOKERY: ANO**

## 1) Zbývá zobecnění jednoho rozhodnutí na pravidlo?
Ano. Není to už tak hrubé jako předtím, ale pár míst pořád překračuje to, co ten podklad unese.

### Bloker 1: z jednoho sporu děláte obecnější mapu „kde leží páka“
Nejslabší a nejrizikovější věta je tahle:

> „**Smyslem článku je ukázat, na čem ty spory stojí — protože to mění představu o tom, kde vůbec nějaká páka je.**“

Problém: „ty spory“ je už množné číslo a „kde vůbec nějaká páka je“ zní jako obecnější poučení pro weby. Přitom nosný právní základ článku je pořád velmi úzký: jedno procesní rozhodnutí v jednom sporu plus tvrzení z jiné žaloby. To nestačí na silnější tezi o „páce“.

Podobně:

> „**Druhá věc, kterou je z těch sporů vidět, je praktičtější.**“

A pak:

> „**Spory z let 2025 a 2026 tuhle větu jen doplňují o druhé patro** — i když žádost někdo respektuje, obsah může být dostupný cestou, kterou neřídíte.“

To už zní jako ustálený vzorec napříč spory. Z dodaného textu ale vidím jen:
- remand v Reddit v. Anthropic,
- tvrzení žalobce v žalobě na Perplexity.

To je pořád slabší než formulace „spory ukazují / doplňují“.

### Bloker 2: answer a závěr jsou pořád o chlup tvrdší než zbytek textu
V `answer`:

> „**podstatná část argumentace se vede přes podmínky přístupu, ne jen přes autorské právo**“

To je lepší než původní verze, ale stále to zní jako zobecnění k „AI sporům o data“. Uvnitř textu jste pečlivější; v answer zase přitvrzujete.

V závěru:

> „**Užitečnější než čísla dohod je to, na čem stojí spory: na podmínkách přístupu, ne na autorském právu**“

To je už skoro návrat k původnímu problému. Nejen že je to opět množné číslo, ale konstrukce „na X, ne na Y“ vytváří falešnou převahu jedné roviny nad druhou. Přitom sám text správně říká:

> „**samotné autorství nemusí být jediná rovina sporu**“

To je bezpečné. Ale závěr pak přepne do silnější, málo kryté verze.

## 2) Právní riziko — může si laik pořád odnést nebezpečný závěr?
Ano, menší než předtím, ale stále ano.

### Riziko A: „copyright je vedlejší / neřeší se“
Ačkoli FAQ je opravené dobře, čtenář si to stále může odnést z těchto míst:

> „**Spoléhat na copyright jako na hlavní ochranu**“  
> „**Sledujte spíš podmínky přístupu a technická opatření.**“

a

> „**Užitečnější než čísla dohod je to, na čem stojí spory: na podmínkách přístupu, ne na autorském právu**“

Tohle je pro laika nebezpečně blízko praktickému závěru: „copyright neřeš, dej si podmínky a techniku“. Přitom text jinde správně říká:

> „**Samy o sobě ale nezaručují závaznost ani vymahatelnost**“

Jenže ten korektiv je až v FAQ a nevyvažuje plně hlavní message článku.

### Riziko B: „když nemám velký web, licence vůbec nepřichází v úvahu“
Tady je to spíš obchodní než právní riziko, ale stále je to příliš kategorické:

> „**Licenční trh s daty pro AI se týká platforem s obrovskými datasety, ne běžných webů.**“

a

> „**licencování není váš scénář**“

a

> „**Pro menší web není realistické s takovým příjmem počítat.**“

To je jako orientační pravidlo asi použitelné, ale jazyk je dost definitivní. Pokud to má být analytický článek, chtělo by to o stupeň méně jistoty. Jinak to zní jako tržní pravidlo, ne redakční zkratka.

### Je disclaimer na správném místě?
**Ano, umístění je dobré.** Je brzy, je viditelný, a navíc konkrétní:

> „**České právo je jiné** a nic z toho tady neříká, jaké nároky má český web nebo jak by uspěl.“

To je správně. Problém není poloha disclaimeru, ale že některé pozdější formulace jsou silnější než disclaimer unese.

## 3) Nepřehedgoval to autor?
**Ne. Bloker za přehedgovanost nedávám.** Text je stále čitelný a má použitelné jádro.

Užitečné, konkrétní a srozumitelné jsou hlavně:
- „**vrácení k jinému soudu ale není rozhodnutí ve věci samé**“
- „**blokace konkrétního robota nemusí uzavřít všechny cesty**“
- checklist „**Tři možnosti, které skutečně máte**“

To je praktické.

Ale místy se opatrnost míchá s příliš silným shrnutím. Tedy ne problém „čtenář nic nedostane“, ale spíš „nejopatrnější pasáže a nejtvrdší shrnutí nejsou plně v souladu“.

## 4) Kanibalizace
### Vůči `/blog/ai-citace-reddit/`
**Střední riziko kanibalizace, ale ještě obhajitelné jako samostatný článek.**

Unikátní klíč tu je:
- **remand / preemption**
- **nepřímá cesta k obsahu přes index**
- **co z toho plyne pro web bez šance na licenci**

To je odlišné od článku o Reddit citacích a číslech dohod. Pomáhá i tahle věta:

> „**Tenhle článek se jimi nezabývá.**“

To je správné vymezení.

Ale samostatnost oslabují formulace, které sklouzávají do obecného „AI licence a spory o data“. Název i slug pořád trochu slibují širší mapu trhu, než článek skutečně dodává. Obsahově je to spíš:
- remand v Reddit v. Anthropic,
- plus dopad jedné procesní logiky na přemýšlení malého webu.

To na samostatný článek **je**, ale spíš jako úzce rámovaná analýza než obecný text o „AI licencích“.

### Vůči 4 článkům o blokaci robotů
Tady je riziko vyšší. Článek sám přiznává, že praktické kroky už jsou jinde:

> „**Postupy k první i druhé variantě má web popsané**: [které AI crawlery povolit]..., [blokace přes Cloudflare]..., [přepínač v Search Console]...“

To je v pořádku interně-linkově, ale znamená to, že tenhle článek musí obstát **jako interpretační vrstva**, ne jako další „jak blokovat AI“. A to obstojí jen tehdy, pokud zůstane přísně u svého unikátního klíče:  
**„procesní remand ukazuje, že spor může běžet přes podmínky přístupu; zároveň blokace přímého robota nemusí vyčerpat všechny cesty.“**

Takto je to **ještě nosné na samostatný článek**, ale jen těsně. Kdyby se měl dál rozšiřovat o obecné rady k robotům, už bych to raději řešil jako update nebo crosslink hub.

## 5) Zaujatost — CTA chybí úplně. Je to v pořádku?
**Ano. Tady je to v pořádku.**

Naopak by agresivní CTA typu „pomůžeme vám nastavit podmínky užití“ působilo v takhle citlivém právně-technickém textu nedůvěryhodně. Absence CTA pomáhá neutralitě.

Maximálně by šel nenápadný redakční most:
- „chcete-li řešit technické nastavení, pokračujte sem…“
- „konkrétní právní případ řešte s právníkem“

Ale to není nutné.

## 6) Co je nejslabší a co bych smazal?
### Nejslabší místo
Sekce **„Časté omyly“**, konkrétně bod 02:

> „**Spoléhat na copyright jako na hlavní ochranu**“  
> „**Sledujte spíš podmínky přístupu a technická opatření.**“

To je příliš normativní vzhledem k podkladům. Z procesního remandu nelze bezpečně dělat radu „sledujte spíš X než Y“ v takhle obecném tvaru.

### Co bych smazal nebo přepsal natvrdo
1. **Smazat / změkčit:**
   > „**Užitečnější než čísla dohod je to, na čem stojí spory: na podmínkách přístupu, ne na autorském právu**“

   To je nejnebezpečnější věta v článku. Přepis třeba na:
   - „Užitečné je sledovat i to, že v konkrétních sporech se vedle copyrightu řeší také podmínky přístupu a způsob získání obsahu.“

2. **Přepsat:**
   > „**Licenční trh s daty pro AI se týká platforem s obrovskými datasety, ne běžných webů.**“

   To je moc absolutní. Radši:
   - „Ve veřejně známých dohodách zatím dominují velké platformy s mimořádným objemem nebo jedinečností dat.“

3. **Přepsat:**
   > „**licencování není váš scénář**“

   Moc kategorické. Radši:
   - „pro většinu běžných webů dnes licencování není realistický základ strategie“

4. **Přepsat / stáhnout:**
   > „**Druhá věc, kterou je z těch sporů vidět**“

   Radši:
   - „Druhá věc, kterou naznačuje i související žalobní argumentace“

---

# VAROVÁNÍ

## Varování 1: title/description ještě pořád slibují širší článek, než ve skutečnosti je
Title:

> „**AI licence a spory o data: co z nich plyne pro web**“

Description:

> „**V jednom sporu z roku 2026 nešlo jádro procesní debaty o copyright, ale o podmínky přístupu. Co z toho plyne pro web, který licenci uzavřít nemůže.**“

Description je už poměrně dobrá, protože říká „v jednom sporu“. Ale title pořád sugeruje širší přehled AI licencí a sporů obecně. To zvyšuje riziko kanibalizace i přestřeleného očekávání.

## Varování 2: stat box „0 z 5“
> „**0 z 5 — nároků v Redditím sporu s Anthropicem stojí na autorském právu**“

To je chytlavé, ale i tady bych byl opatrný. V kontextu článku je jasné, co tím myslíte, ale pro rychlého čtenáře to může znít jako:
- „copyright v AI sporech není téma“
- nebo „Reddit to na copyright vůbec nemohl stavět“

Lepší by bylo výslovně uvést procesní rámec:
- „0 z 5 uplatněných nároků bylo soudem v tomto kroku posouzeno jako nároky odpovídající právům podle Copyright Act“

Je to méně sexy, ale přesnější.

## Varování 3: „Žalovat velkou AI firmu není reálná varianta“
> „**Žalovat velkou AI firmu není reálná varianta kvůli nákladům a jurisdikci.**“

Jako praktická orientace asi ano, ale je to hodně definitivní. Lepší:
- „Pro většinu menších českých webů to zpravidla nebude realistická varianta…“

---

# DOPORUČENÍ

## Pokud chcete článek pustit, opravte hlavně tyto 4 věci
1. **Všude nahradit množné „spory“ tam, kde stojíte hlavně na jednom remandu.**
   - „ty spory stojí“
   - „z těch sporů vidět“
   - „spory z let 2025 a 2026 doplňují“

2. **Změkčit opozici „podmínky přístupu, ne autorské právo“.**
   To je stále hlavní reziduální právní problém.

3. **Stáhnout kategorické obchodní závěry o licencování.**
   „není realistické s tím počítat“ je OK;  
   „licencování není váš scénář“ už je zbytečně tvrdé.

4. **Opravit nejslabší „Mistake 02“.**
   Teď zní jako návod preferovat jeden právní základ před druhým.

## Doporučené přepisy
- místo:
  > „**na čem ty spory stojí**“

  dejte:
  > „**na čem stojí argumentace v těchto konkrétních sporech**“

- místo:
  > „**podstatná část argumentace se vede přes podmínky přístupu, ne jen přes autorské právo**“

  dejte:
  > „**v těchto konkrétních sporech se část argumentace vede přes podmínky přístupu vedle autorského práva**“

- místo:
  > „**Užitečnější než čísla dohod je to, na čem stojí spory: na podmínkách přístupu, ne na autorském právu**“

  dejte:
  > „**Vedle čísel dohod stojí za pozornost i to, že se v konkrétních sporech řeší podmínky přístupu a způsob získání obsahu, nejen copyright.**“

- místo:
  > „**licencování není váš scénář**“

  dejte:
  > „**pro většinu běžných webů dnes licencování není realistický scénář**“

---

# Verdikt
**Blokery zůstávají, ale už jen 1 hlavní typ:** reziduální zobecnění a příliš tvrdé shrnutí vůči tomu, co skutečně nese podklad.

Není to už článek k zahození. Je to **o hodně lepší než první verze**. Ale pokud mám být přísný auditor výsledku:  
**ještě bych to bez dalšího kola nepustil**, protože několik klíčových vět stále vrací čtenáře k dojmu, že z jednoho procesního rozhodnutí už víme, kde se AI datové spory „ve skutečnosti“ vedou. To text pořád neunese.