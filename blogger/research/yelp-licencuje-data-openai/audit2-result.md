Níže jen to, co po opravách ještě zlobí.

## 1. Zbytky právní domněnky / příliš tvrdé právní zkratky

### A. Frontmatter `answer`
> „**hodnocená firma nebývá smluvní stranou ani není o souhlas žádána**“

První půlka je v rámci článku obhajitelná jako typové tvrzení. Druhá je už moc tvrdá: z doloženého zdroje neplyne, zda je či není o souhlas žádána, jen že smluvní vztah je mezi platformou a OpenAI.  
Navrhni měkčeji:
- „…hodnocená firma nebývá smluvní stranou a o takové licenci typicky nerozhoduje.“

### B. Tělo — sekce „Proč je to zajímavější, než vypadá“
> „**o jeho dalším využití rozhoduje platforma** — pokud k tomu má… dost široká práva.“

To je skoro v pořádku, ale bez „může“ je to zbytečně kategorické. Lepší:
- „…o jeho dalším využití **může rozhodovat** platforma…“

### C. Shrnutí
> „**o licenci rozhoduje platforma** — a vy nejste smluvní stranou té dohody.“

Stejný problém: jako obecné pravidlo je to moc tvrdé. V článku jsi opatrnější jinde než tady.  
Lepší:
- „…o licenci **může rozhodovat platforma**, pokud k tomu má smluvní práva, a hodnocená firma typicky není smluvní stranou té dohody.“

## 2. Nová přestřelení / nesrozumitelnost po opravách

### D. Title
> „**Recenze o vaší firmě míří do ChatGPT. Bez vás**“

„Bez vás“ je úderné, ale nejasné: bez hodnocené firmy? bez autora recenze? bez návštěvy webu? Titulek znovu zamlžuje, kdo je „vy“.  
Přesnější:
- „Recenze o vaší firmě míří do ChatGPT. Hodnocená firma u dohody není“
- nebo kratší:
- „Yelp posílá recenze do ChatGPT. Hodnocená firma u dohody není“

### E. FAQ — „Týká se to i Česka?“
> „**Podobnou roli tu hrají hlavně firemní profily a recenzní vrstvy u Googlu a Seznamu a u zboží srovnávače.**“

Formulace „u zboží srovnávače“ je jazykově nedotažená a při rychlém čtení drhne.  
Lepší:
- „Podobnou roli tu hrají hlavně firemní profily a recenzní vrstvy Googlu a Seznamu, u zboží pak srovnávače.“

### F. Sekce „Kde se to doopravdy rozhoduje“
> „**Nemá smysl to studovat celé.**“

To je zbytečně paušální a prakticky slabé. Není to chyba faktu, ale po opatrnostních opravách to sklouzlo do rady bez opory.  
Lepší:
- „Pro běžnou orientaci není nutné číst celé podmínky; důležité je vědět, které pasáže hledat.“

### G. Sekce „Co s tím dělat“
> „**Konkrétní licenci mezi platformou a AI firmou tím neovlivníte.**“

Moc absolutní. Prakticky asi většinou ne, ale takhle napsané to zní jako kategorický právní závěr.  
Lepší:
- „Konkrétní licenci mezi platformou a AI firmou tím obvykle přímo neovlivníte.“

## 3. Vnitřní rozpory / napětí v textu

### H. `description` vs. text článku
> `description`: „**hodnocená firma u takové dohody nebývá smluvní stranou**“  
> Shrnutí: „**vy nejste smluvní stranou té dohody**“

V `description` správně držíš obecnější „nebývá“, ve shrnutí přecházíš do přímého „nejste“. U stejné teze drž jednu úroveň jistoty.

### I. Opatrnost kolem Česka vs. formulace „precedens“
V zapracovaném textu už slovo „precedens“ není, ale pořád zůstává konstrukce:
> „**Podstatný je ten vzorec**…“

To je v pořádku jako interpretace, jen by mělo být jasné, že jde o analytický závěr, ne doložený trend. V checklistu to máš opatrněji („sama o sobě širší trend nedokazuje“), ve shrnutí tvrději. Doporučuji sladit.

## 4. Kratší verze `answer` (40–60 slov)

Teď má 62 slov. Návrh na 51 slov:

**„Yelp 23. července 2026 licencoval OpenAI recenze, hodnocení, fotky a informace o firmách pro doporučení v ChatGPT. Dohoda není exkluzivní a její finanční podmínky nezveřejnili. Pro firmy je podstatné hlavně to, že o takové licenci obvykle nerozhodují samy: hodnocená firma nebývá smluvní stranou.“**

## 5. Věcné chyby / problematická místa, která první audit přehlédl

### J. „Yelp posílá / poskytuje data, aby z nich ChatGPT stavěl doporučení místních podniků“
> „**aby z nich ChatGPT stavěl doporučení místních podniků**“

To je rozumné zkrácení, ale je to už parafráze účelu. Pokud chceš být přísný, drž se blíž doloženému „for recommendations in ChatGPT“ a neimplikuj moc mechanismus „stavěl“.  
Bezpečněji:
- „…pro doporučení místních podniků v ChatGPT.“

### K. „Vaše vlastní stránky — jediná vrstva, kterou nikdo nelicencuje bez vás.“
> „**Jediná vrstva, kterou nikdo nelicencuje bez vás.**“

To je přestřelené. I u vlastního webu může být obsah licencovaný třetími stranami, embedded prvky, cizí recenze, UGC, agenturní materiály apod. Jako praktická zkratka to neobstojí.  
Lepší:
- „Vrstva, u které míváte největší kontrolu nad publikací i licencí.“

### L. „Atribuci řídí odběratel“
> „**Atribuci řídí odběratel**“

To je terminologicky trochu nepřesné. Nejde o „atribuci“ ve smyslu marketing attribution, ale o podobu zobrazení, značky a odkazů. Proto to v části o měření může mást.  
Lepší:
- „Podobu zobrazení a odkazování řídí odběratel dat“
- nebo
- „O tom, jak budou značka a odkazy zobrazené, rozhoduje OpenAI“

### M. „Absence zprávy není důkaz absence dohody“
To je logicky v pořádku, ale hned za tím:
> „**Navíc data o českých firmách drží globální hráč, který podobné smlouvy uzavírá jinde.**“

To už je nedoložený přísun implikace. Není řečeno který hráč, jaká smlouva, kde přesně „jinde“, a čtenář si snadno doplní Google/OpenAI. Pokud to nechceš dokládat, škrtni to.

---

## Priority oprav
1. Zjemnit kategorické formulace v `answer`, shrnutí a větách s „rozhoduje platforma“.
2. Opravit přestřelené „jediná vrstva, kterou nikdo nelicencuje bez vás“.
3. Vyčistit nejasné „Bez vás“ v titulku.
4. Zpřesnit „atribuci“ na „podobu zobrazení / odkazování“.
5. Vyhodit nedoložené „globální hráč… uzavírá jinde“.