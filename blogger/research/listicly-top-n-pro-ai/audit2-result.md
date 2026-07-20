Níže druhý audit se zaměřením na čtenáře, řemeslo a užitek.

---

## Nálezy

### [BLOKER] Krok 3 a 4 lezou přímo do řemesla rodičovského článku
**Citace:**  
- „**Když seznam, tak s kritérii**“  
- „**Každá položka jako samostatný celek**“  
- „Řemeslo psaní samotného seznamu — **kritéria, tabulka nahoře, poctivé pro a proti** — rozebírá článek o srovnávacích textech.“

**Proč:**  
Tohle je přesně kolizní zóna se starším `/blog/srovnavaci-clanky-pro-ai/`. Nejen tematicky, ale i slovníkem. Tady už neřešíte „jestli formát použít“, ale „jak ho udělat dobře“. U Stepperu je to obzvlášť problém, protože how-to struktura dává těmto bodům váhu hlavního návodu. Čtenář si z článku odnese i kus checklistu řemesla, takže starší článek oslabujete.

Navíc si tím sami podkopáváte deklaraci „Tenhle text řeší krok před tím“. Neřeší. Reálně řeší i kus řemesla.

**Konkrétní návrh:**  
- **Vyhoďte Stepper krok 3 a 4 úplně.**
- Stepper zkraťte na rozhodovací minimum, např.:
  1. Jaký je záměr dotazu?
  2. Opravdu jde o porovnávání více možností?
  3. Máte kapacitu seznam průběžně udržovat?
  4. Pokud ne, zvolte jiný formát.
- Vše o kritériích, modularitě, tabulce, „samostatném celku“ nechte výhradně rodičovskému článku.
- V MistakeGrid smažte nebo přepište i chybu „Napsat výčet bez kritérií“, protože znovu přeléváte řemeslo sem.

---

### [BLOKER] Na jednu malou studii je z článku pořád až moc tutorialu a pravidel
**Citace:**  
- „## Jak se rozhodnout, jestli seznam vůbec psát“  
- „**U porovnávání seznam sedí. U dotazu na fakt patří odpověď nahoru… U navigačních nepomůže vůbec.**“  
- „**Prakticky to znamená obrátit pořadí… Nejdřív záměr dotazu, teprve pak formát.**“

**Proč:**  
Podklad je úzký: 138 dotazů, jedna platforma, USA, angličtina. To stačí na rozumný korektiv přehnané rady, ale je to slabé na tutorialovou autoritu ve stylu „dělejte to takto“. Článek sice opakovaně varuje před limity dat, ale kompozice je agresivnější než podklad: srovnávací tabulka, insighty, stepper, chyby, závěr s imperativy. To dohromady z jedné malé studie dělá skoro metodiku.

Jinými slovy: disclaimery jsou správně, ale zbytek textu je přehluší.

**Konkrétní návrh:**  
- Rozhodněte se, co to je:
  - buď **krátký korektiv** k přepálené radě,
  - nebo **tutorial** s robustnějším podkladem.
- Pokud zůstává podklad jen tenhle, **uberte tutorialový aparát**:
  - zkrátit Stepper,
  - zredukovat MistakeGrid,
  - nepsat silné normativní věty typu „patří odpověď přímo nahoru“ bez českého ověření.
- Formulace změkčit z pravidel na heuristiky:
  - místo „u navigačních nepomůže vůbec“ raději „v této studii se u navigačních neobjevoval“;
  - místo „patří odpověď nahoru“ raději „spíš dává smysl přímá odpověď než žebříček“.

---

### [WARNING] Korektiv je správný, ale pořád moc opatrně zabalený do autorského výkladu
**Citace:**  
- „Rada „dělejte listicly" není špatná, jen je **useknutá v půlce věty.**“
- „To je v jejich datech přesný opak toho, jak se rada o listiclech šíří.“
- „Náš závěr z toho: **není to trik… Je to formát, který odpovídá určitému typu otázky**“

**Proč:**  
Hlavní pointa článku je dobrá, ale není vytažená dost tvrdě a jednoduše. Článek ji rozebírá několikrát jinými slovy, ale čtenář typu majitel webu si potřebuje odnést jednu větu bez mlhy. Tady se to ztrácí mezi hypotézou autorů, citací studie a průvodními jevy.

„Useknutá v půlce věty“ je hezké, ale trochu rétorické. Potřebujete méně autorské formule a víc provozní věty: **listicle není univerzální SEO formát pro AI; funguje hlavně tam, kde člověk vybírá z možností.**

**Konkrétní návrh:**  
Hned po úvodu přidejte tvrdý, civilní odstavec ve stylu:
> Z téhle studie pro praxi plyne jediná jistější věc: číslovaný žebříček není univerzální formát pro AI. Dává smysl hlavně u dotazů, kde člověk porovnává možnosti. U dotazů na fakt nebo konkrétní web z těchto dat nevyplývá důvod ho tlačit všude.

A stejnou větu pak nenuťte čtenáři ještě třikrát v obměnách.

---

### [WARNING] Převod do české praxe je zatím slabý
**Citace:**  
- „Jak se to chová u českých dotazů, nikdo neměřil; nejblíž se k odpovědi dostanete testem na vlastních dotazech.“
- „Nejdřív záměr dotazu, teprve pak formát.“

**Proč:**  
Pro českého netechnického čtenáře je to pořád dost abstraktní. Ví, že studie je US/EN/ChatGPT, ale neví přesně, co má udělat v pondělí ráno na svém webu. Článek říká princip, ne převod. To je na tutorial málo.

Chybí aspoň velmi konkrétní české situace:
- e-shop s kategorií „nejlepší...“,
- služba typu „účetní Brno“,
- informační článek typu „jak dlouho vydrží...“,
- brandový dotaz na konkrétní firmu.

**Konkrétní návrh:**  
Přidejte krátký blok „Jak to převést na český web“ se 3–4 minipříklady bez zabíhání do řemesla:
- **Porovnávací dotaz:** „nejlepší účetní software pro malé firmy“ → seznam smysl mít může.
- **Faktický dotaz:** „jaká je sazba DPH na knihy“ → radši přímá odpověď než Top 10.
- **Navigační dotaz:** „Shoptet přihlášení“ → seznam nedává smysl.
- **Lokální dotaz:** „zubní pohotovost Brno“ → studie naznačuje, že seznam někdy být může, ale český SERP a mapy to mohou převážit.

Tím čtenář dostane použitelný překlad bez předstírání jistoty.

---

### [WARNING] Struktura je na tak krátký a opatrný text přestavěná
**Citace:**  
- CompareTable  
- 2× Insight  
- Stepper  
- MistakeGrid  
- FAQ v metadatech  
- závěrečné CTA

**Proč:**  
Na článek, jehož hlavní sdělení je v zásadě jedno („netlačte listicly všude“), je toho moc. Výsledek působí nafouknutě. Ne že by jednotlivé bloky byly samy o sobě špatně, ale dohromady vytvářejí dojem robustnějšího know-how, než článek skutečně má.

Zvlášť:
- CompareTable je užitečná.
- Stepper je sporný kvůli tutorializaci a kanibalizaci.
- MistakeGrid opakuje to samé v jiné formě.
- Insighty dělají dvě různé poznámky, ale článek už je krátký.

**Konkrétní návrh:**  
- **Nechat:** CompareTable, 1 varovný Insight, stručný závěr.
- **Omezit nebo smazat:** Stepper nebo MistakeGrid; ideálně ne obojí.
- Pokud má zůstat tutorial kategorie, udělat z toho spíš **rozhodovací rámeček**, ne plnohodnotný how-to.

---

### [WARNING] H2 „Studie vyvrátila vlastní hypotézu — a to je ta nejcennější část“ je spíš autorské mrknutí než služba čtenáři
**Citace:**  
- „## Studie vyvrátila vlastní hypotézu — a to je ta nejcennější část“

**Proč:**  
Nadpis není nepravdivý, ale pro majitele webu není dost informační. Vyjadřuje vaše zaujetí nad metodickou poctivostí autorů, ne čtenářův problém. Čtenář spíš potřebuje vědět, co z toho plyne pro volbu formátu.

**Konkrétní návrh:**  
Přejmenovat na něco věcnějšího, např.:
- „Proč z té studie neplyne ‚pište listicly všude‘“
- „Co z výsledků opravdu plyne pro volbu formátu“
- „Listicle není univerzální formát, jen odpověď na část dotazů“

---

### [WARNING] Vnitřní logika místy drhne: současně varujete před malým vzorkem a mluvíte v absolutnech
**Citace:**  
- „To není změřený zákon…“
- „**U navigačních nepomůže vůbec.**“
- „**Formát tam nepomáhá.**“
- „**patří odpověď přímo nahoru**“

**Proč:**  
Tohle je přesně místo, kde si článek odporuje tónem. Jednou správně říkáte „neberte to jako zákon“, jinde z týchž dat děláte ostré provozní soudy. U 0 % ve vzorku z jedné studie si o absolutní formulace koledujete.

**Konkrétní návrh:**  
Projít a odstranit absolutna:
- „nepomůže vůbec“ → „v této studii nepomáhal“
- „formát tam nepomáhá“ → „z těchto dat nevyplývá, že by tam pomáhal“
- „patří odpověď přímo nahoru“ → „větší smysl má přímá odpověď než žebříček“

---

### [DOPORUČENÍ] V části o „průvodních jevech“ je užitek omezený a hrozí, že si čtenář odnese šum
**Citace:**  
- „## Dva průvodní jevy citovaných seznamů“
- „Medián 10 položek…“
- „92 procent citovaných listiclů mělo v titulku aktuální rok.“

**Proč:**  
Tohle jsou nejsnazší věci, které si čtenář začne pamatovat špatně. Přestože je poctivě rámujete jako popis, ne recept, pořád tím otevíráte dvě zkratky:
- „tak udělám 10 položek“
- „tak dám do titulku 2026“

Obojí je přesně ten typ škodlivého zjednodušení, proti kterému článek jinak bojuje.

**Konkrétní návrh:**  
- Buď tu sekci **výrazně zkraťte** na jednu větu typu „studie si všimla i dalších společných znaků, ale nejsou použitelné jako samostatný návod“.
- Nebo ji nechte, ale přidejte hned úvodní větu:
  > Pokud z článku hledáte jednu praktickou věc, není to počet položek ani rok v titulku. Důležitý je záměr dotazu.
- Ještě lepší je přesunout tyto detaily do FAQ a nechat hlavní tělo čistší.

---

### [DOPORUČENÍ] „Časté chyby“ zbytečně opakují už řečené a znovu vracejí řemeslo
**Citace:**  
- „Udělat seznam ze všeho“
- „Napsat výčet bez kritérií“
- „Dát do titulku rok a zapomenout na něj“
- „Brát malý vzorek jako zákon“

**Proč:**  
Funkčně je to recap. Jenže článek už recap má v závěru. Druhý bod navíc opět kanibalizuje řemeslný článek. Na krátkém textu je to duplicitní modul.

**Konkrétní návrh:**  
- Smazat celý MistakeGrid, nebo ho zredukovat na 2 body:
  1. Nedělat seznam ze všeho.
  2. Nečíst malou studii jako univerzální pravidlo.
- Řemeslo a rok v titulku případně nechat v FAQ.

---

### [DOPORUČENÍ] CTA navazuje jen napůl a je moc dvojité
**Citace:**  
- „Nevíte, na jaké typy dotazů vás lidé hledají… **AI SEO audit**… Hotové vzory stránek najdete v **AI SEO Wireframe Packu**.“

**Proč:**  
Audit ještě navazuje: článek řeší rozhodnutí podle typu dotazu, audit slibuje zjistit typy dotazů a strukturu. To sedí. Wireframe Pack už méně. V tomhle textu je hlavní message „nevolte formát podle módy“, takže prodávat hned potom šablony stránek lehce tahá jinam.

**Konkrétní návrh:**  
- Nechte jen **jedno CTA**, ideálně audit.
- CTA zkraťte:
  > Nejste si jistí, které vaše stránky mají být srovnání a které ne? [AI SEO audit](/audit/) projde dotazy i formáty obsahu a ukáže, kde dává seznam smysl a kde ne.
- Wireframe Pack dejte maximálně sekundárně jinam, ne do hlavního závěru.

---

### [KOSMETIKA] Některé formulace jsou vatové nebo zbytečně efektní
**Citace:**  
- „patří k nejopakovanějším radám roku 2026“
- „rozpadá“
- „hroutí se“
- „vzali závazek“
- „doklad o tom, že vás obor přestal zajímat“

**Proč:**  
Text občas sklouzává k publicistickému tónu. Nevadí to všude, ale u článku, který stojí na úzkém podkladu, by střízlivější jazyk pomohl důvěryhodnosti. Poslední věta je zbytečně soudná a moralizující.

**Konkrétní návrh:**  
- „rozpadá / hroutí se“ → „nevychází / neukazuje se“
- „doklad o tom, že vás obor přestal zajímat“ → „signál zastaralého obsahu“
- Celkově méně dramatických sloves, víc věcných.

---

### [KOSMETIKA] Úvod by mohl rychleji dojít k užitku
**Citace:**  
- „Číslovaný seznam typu Top-N je obsah, kde jsou možnosti seřazené a očíslované.“

**Proč:**  
Definice je v pořádku, ale pro cílovku asi zbytečně školní. Čtenář spíš potřebuje hned vědět, co má přehodnotit. Zvlášť když už v titulku i description je jasné, o čem je řeč.

**Konkrétní návrh:**  
Zkrátit definici a posunout pointu dopředu:
> Číslované žebříčky typu „Top 10“ nejsou univerzální formát pro AI. Podle malé studie na ChatGPT se silně objevovaly hlavně u dotazů, kde člověk porovnává možnosti.

---

## VERDIKT
**OPRAVIT PŘED PUBLIKACÍ**

## 4 prioritní zásahy
1. **Vyhodit nebo přepsat Stepper krok 3 a 4** a odstranit další řemeslné přesahy do rodičovského článku.  
2. **Zmenšit tutorialový aparát** (Stepper/MistakeGrid), protože jedna malá studie neunesе tak silnou metodiku.  
3. **Zpřesnit tón absolutních tvrzení** tak, aby odpovídal slabšímu podkladu.  
4. **Doplnit konkrétní převod do české praxe** na 3–4 běžných typech dotazů.

Pokud tohle neuděláte, článek bude zároveň kanibalizovat starší text a přehánět sílu svého podkladu.