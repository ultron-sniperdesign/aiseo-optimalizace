Níže je přísný audit po osách **BLOKERY / VAROVÁNÍ / DOPORUČENÍ**. Posuzuji hlavně právní riziko, ne „čtivost“.

---

# BLOKERY

## 1) Přepálený headline a answer: z jednoho procesního rozhodnutí dělá obecné pravidlo
**Citace:**
- `description: "Spory o AI data se nevedou o copyright, ale o podmínky přístupu."`
- `answer: "soudní spory se zatím nevedou o autorské právo, ale o podmínky přístupu k obsahu."`
- `## Co ukázal rok 2026: nejde o copyright`
- `Užitečnější než čísla dohod je to, na čem stojí spory: na podmínkách přístupu, ne na autorském právu`

**Problém:**
Tohle je právně nejrizikovější místo textu. Formulace neříká „v tomhle konkrétním sporu Reddit v. Anthropic“ ani „v některých aktuálních sporech“, ale zobecňuje na **„spory o AI data“**. To je přesně typ nebezpečného zkratkovitého závěru, který může laikovi vsugerovat, že copyright je vedlejší nebo irelevantní. Není.

I když níž disclaimer přibrzďuje, titulek, description i answer mají největší distribuční sílu. A právě tam je zobecnění nejtvrdší.

**Riziko závěru čtenáře:**
- „copyright mě nechrání“
- „stačí mít podmínky užití“
- „AI spory už se fakticky přesunuly mimo autorské právo“

To z článku bezpečně dovodit nejde.

**Návrh opravy:**
- `description`:  
  **Místo:** „Spory o AI data se nevedou o copyright, ale o podmínky přístupu.“  
  **Dejte:** „V jednom důležitém sporu z roku 2026 nešlo jádro procesní debaty o copyright, ale o podmínky přístupu k obsahu.“
- `answer`:  
  **Místo:** „soudní spory se zatím nevedou o autorské právo“  
  **Dejte:** „v popsaných amerických sporech se významná část argumentace vede i přes podmínky přístupu, ne jen přes autorské právo“
- Nadpis sekce:  
  **Místo:** `nejde o copyright`  
  **Dejte:** `v tomhle procesním kroku nešlo o copyrightové nároky`

---

## 2) „Páka leží v podmínkách užití a technických opatřeních“ je příliš kategorické
**Citace:**
- `Praktický důsledek pro majitele webu: páka v tomhle sporu neleží v tom, že jste autor. Leží v tom, za jakých podmínek k vám někdo přistupuje — tedy v podmínkách užití a v technických opatřeních.`

**Problém:**
Uvození „v tomhle sporu“ pomáhá, ale druhá věta je napsaná jako praktické pravidlo pro majitele webu. To je tvrdší, než unesou fakta. Z procesního rozhodnutí o preempci neplyne, že **reálná páka** pro web obecně „leží“ právě tam. Plyne jen, že **těchto pět uplatněných nároků nebylo shledáno rovnocennými autorským právům pro účely preempce**.

To není totéž jako:
- že podmínky užití budou vymahatelné,
- že budou vůči konkrétnímu subjektu závazné,
- že technická opatření založí silný nárok,
- že copyright nehraje roli.

**Návrh opravy:**
„**V tomhle sporu Reddit staví argumentaci hlavně na podmínkách přístupu a údajném obcházení pravidel, ne na autorskoprávních nárocích. Pro běžný web je to signál, že samotné autorství nemusí být jediná rovina sporu — ne že podmínky užití samy o sobě stačí.**“

---

## 3) Perplexity pasáž je podaná jako skoro hotový mechanismus, přitom jde jen o tvrzení žalobce
**Citace:**
- `Reddit tvrdí, že ... obsah se získával nepřímo přes indexované výsledky Googlu.`
- `pokud je v indexu vyhledávače, existuje obchvat.`
- `Obsah, který je v indexu vyhledávače, jde získat i bez přístupu na váš web.`

**Problém:**
První citace je v pořádku, protože říká „tvrdí“. Ale další dvě věty už posouvají žalobní tvrzení do roviny obecného faktu a funkčního návodu reality. To je příliš silné. Z toho, že to Reddit tvrdí v žalobě, neplyne, že:
- to tak bylo,
- že je to technicky běžná nebo stabilní cesta,
- že každý obsah v indexu „jde získat“ takto použitelně.

Navíc u věty `Obsah, který je v indexu vyhledávače, jde získat i bez přístupu na váš web.` chybí opora v opatrném rámci „může být“ / „žaloba tvrdí“.

**Návrh opravy:**
- `pokud je v indexu vyhledávače, existuje obchvat`  
  → „**pokud je obsah dostupný přes vyhledávač nebo jeho odvozené vrstvy, může existovat nepřímá cesta, kterou samotná blokace konkrétního bota neřeší**“
- `Obsah, který je v indexu vyhledávače, jde získat i bez přístupu na váš web.`  
  → „**Žaloba staví na tom, že dostupnost přes vyhledávač může oslabit účinek blokace přímého přístupu.**“

---

## 4) FAQ „Chrání mě autorské právo…?“ může laika svést k odpovědi „spíš ne“
**Citace:**
- `Chrání mě autorské právo před použitím obsahu v AI?`
- `Zajímavé ale je, na čem stojí velké americké spory: v Redditím sporu s Anthropicem soud konstatoval, že žádný z uplatněných nároků neodpovídá právům podle amerického autorského zákona.`

**Problém:**
Otázka je položená obecně, ale odpověď je procesně úzká a jurisdikčně cizí. Čtenář si z ní snadno odnese „odpověď je ne“ nebo „ochrana stojí jinde“. Přitom správná stručná odpověď by měla být: **může chránit, ale tohle rozhodnutí to neřeší**.

**Návrh opravy:**
Začněte odpověď takto:
„**Může, ale tenhle článek to nevyhodnocuje a jedno americké procesní rozhodnutí na to nedává obecnou odpověď. Zajímavé je jen to, že v konkrétním sporu Reddit v. Anthropic Reddit své nároky postavil jinak než na copyrightu.**“

---

# VAROVÁNÍ

## 5) Remand je vysvětlen slušně, ale ne úplně přesně v důsledcích
**Citace:**
- `Spor Redditu s Anthropicem byl v roce 2026 vrácen z federálního soudu zpět kalifornskému státnímu soudu.`
- `soud uzavřel, že žádný z uplatněných nároků neuplatňuje práva rovnocenná těm podle amerického autorského zákona, takže je autorský zákon nepředbíhá.`
- `Vrácení k jinému soudu ale není rozhodnutí ve věci samé a nedá se z něj vyvozovat, kdo vyhraje.`

**Co je dobře:**
Poslední věta je důležitá a správně míří.

**Co chybí:**
Chybí ještě explicitně dodat, že soud tím:
- nepotvrdil skutková tvrzení Redditu,
- nerozhodl, že podmínky užití byly porušeny,
- nerozhodl, že tyto nároky obstojí po meritorní stránce,
- nerozhodl nic obecného o všech AI sporech.

**Návrh doplnění jednou větou:**
„**Remand tady znamená jen to, že se spor má projednat u státního soudu a že federální copyright zatím tyto konkrétní nároky nevytlačil; neznamená to, že Reddit má pravdu po skutkové nebo hmotněprávní stránce.**“

---

## 6) „žádný trh“ / „Prakticky ne“ je zbytečně absolutní a fakticky hůř obhajitelné
**Citace:**
- `stats: "žádný trh" — "pro web s pár sty články licenční trh prakticky neexistuje"`
- `Můžu svůj obsah licencovat AI firmám? Prakticky ne...`
- `Pro web s pár sty články se neotevírá nic.`

**Problém:**
Marketingově srozumitelné, ale auditorsky přepálené. Vy nevíte, že „neexistuje“ nebo že se „neotevírá nic“. Přesnější je „není realistické s tím počítat jako s běžným distribučním kanálem“. Rozdíl je zásadní.

**Riziko:**
Zbytečné absolutno, které jde snadno napadnout jediným proti-příkladem.

**Návrh opravy:**
- „**Pro menší web není dnes realistické plánovat licenční příjem z AI jako běžný scénář.**“
- „**Veřejně známé dohody zatím ukazují trh pro velmi velké a jedinečné datasety, ne pro běžný firemní blog.**“

---

## 7) „Volba je mezi viditelností a uzavřením“ je falešně binární
**Citace:**
- `Volba je mezi viditelností a uzavřením`
- `Tři možnosti, které skutečně máte`
- `Většina obsahových webů skončí tady.`

**Problém:**
Text sice zmiňuje kombinaci, ale závěr zase celé pole zužuje na tvrdé dilema. To je příliš zkratkovité. Prakticky existuje víc vrstev:
- typy stránek,
- paywall / login,
- syndikace,
- snippet policy,
- smluvní režim API / feedů,
- monitoring citací / referralů,
- interní klasifikace obsahu.

Nejde jen o „otevřít vs. zavřít“.

**Návrh opravy:**
„**Pro většinu webů to není otázka jediné páky, ale kombinace distribuce, technických omezení a priorit podle typu obsahu.**“

---

## 8) Pasáž o podmínkách užití může přeceňovat jejich účinek
**Citace:**
- `Mají podmínky užití na webu vůbec nějaký smysl? ... právě ony jsou tím, co se má porušovat.`
- `Jako signál záměru ale stojí za to je mít formulované.`

**Problém:**
Druhá věta je opatrná. První ale stále může znít jako „podmínky jsou právní páka“. U laického článku bych byl přísnější v tom, aby se nepletla:
- existence textu na webu,
- jeho závaznost,
- prokazatelné seznámení druhé strany,
- vymahatelnost přes hranice.

**Návrh opravy:**
„**Podmínky užití mohou být jedna z vrstev argumentace, ale samy o sobě nezaručují závaznost ani vymahatelnost vůči každému, kdo na web přistoupí.**“

---

# KANIBALIZACE

## 9) Odlišení od `/blog/ai-citace-reddit/` je záměrné, ale ne úplně dotažené
**Citace:**
- `Konkrétní čísla velkých dohod ... má AI citace z Redditu. Tenhle článek se jimi nezabývá.`
- `Titulky o stamilionových dohodách svádějí k představě...`
- `Zprávy o licenčních dohodách jsou zprávy o platformách, ne o vašem webu.`

**Verdikt:**
Odlišení **existuje**, ale stále se článek tematicky vozí na stejném háčku: Reddit, velké dohody, co to znamená pro vydavatele. Pokud starší článek už vysvětluje licencování, citace a velké platformy, tenhle text musí být ještě ostřeji rámovaný jako:
- **procesní update ke sporu** +  
- **strategie pro malý web bez licenční páky**.

Teď je první půlka ještě dost „meta-komentář k licencím“.

**Kde se překrývá:**
- `Licenční trh s daty pro AI se týká platforem s miliardami příspěvků, ne běžných webů.`
- `Dohody se uzavírají s platformami, jejichž hodnota je v objemu a jedinečnosti dat`
- `Čekat, že se licenční trh otevře i malým webům`

To zní jako znovuodvyprávění stejné teze.

**Doporučení proti kanibalizaci:**
- zkrátit všechny obecné pasáže o „velkých dohodách“ na minimum,
- posílit unikátní klíč: **remand + nepřímá cesta přes index**,
- přejmenovat článek v duchu procesního a strategického update, ne „AI licence“.

Např. titul:
**„Reddit v. Anthropic: co procesní obrat říká malým webům o podmínkách přístupu“**

---

## 10) Překryv se čtyřmi články o blokaci je znatelný ve druhé polovině
**Citace:**
- `To přímo kvalifikuje běžnou radu „nechcete tam být, tak robota zablokujte“`
- `robots.txt je žádost, ne zámek`
- `Postupy k první i druhé variantě má web popsané: které AI crawlery povolit, blokace přes Cloudflare a přepínač v Search Console.`

**Problém:**
Druhá půlka článku sklouzává do shrnutí už existujícího clusteru o blokaci. To není nutně špatně, ale je to tenká hranice mezi interním propojením a kanibalizací.

**Překryvové pasáže:**
- „blokace jednoho robota nemusí stačit“
- „robots.txt je žádost, ne zámek“
- „otevřít / omezit / kombinovat“
- odkazy na konkrétní technické návody

To už je skoro rozcestník.

**Doporučení:**
Udržet technickou část jen jako **důsledek právního pointu**, ne jako vlastní mini-guide. Zkrátit tabulku a checklist „Tři možnosti“. Jinak si článek bere intent blokovacím textům.

---

# FAKTA

## 11) „0 z 5 nároků ... stojí na autorském právu“ je rétoricky efektní, ale zavádějící
**Citace:**
- `stats: 0 z 5 — nároků v Redditím sporu s Anthropicem stojí na autorském právu`

**Problém:**
Technicky to může vystihovat složení žalobních nároků, ale v grafickém „stat“ prvku to čtenář čte jako širší právní závěr. Navíc to sugeruje, že spor s autorským právem vůbec nesouvisí, což je moc hrubé zjednodušení.

**Návrh opravy:**
„**5 z 5 uplatněných nároků v této žalobě bylo posuzováno jako neekvivalentních federálním copyrightovým právům pro účely preempce**“

Je to delší, ale přesné. Pokud je to na „stats“ moc dlouhé, ten stat raději vyhoďte.

---

## 12) „obchvat“ jako stat je spíš interpretace než fakt
**Citace:**
- `stats: "obchvat" — blokace robota nemusí stačit — obsah jde získat i z indexu vyhledávače`

**Problém:**
Slovo „obchvat“ už obsahuje závěr. A druhá část zase mění žalobní tvrzení v konstatovaný mechanismus.

**Návrh:**
Stat úplně pryč, nebo:
„**Žaloba Redditu tvrdí nepřímou cestu přes vyhledávač**“

---

# UŽITEČNOST

## 13)