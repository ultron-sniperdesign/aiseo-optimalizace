**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

## Nálezy

### 1) [BLOCKER] Nedoložené a místy příliš absolutní tvrzení o tom, co AI „nemůže“
> `AI nemůže vymyslet konkrétní čísla, takže původní průzkumy a vlastní data se stávají primárním zdrojem citací.`  
> `AI systémy nemohou vymyslet konkrétní čísla — buď najdou zdroj, nebo tvrzení nepřevezmou.`  
> `Velké jazykové modely (LLM) nemohou bezpečně vymýšlet konkrétní čísla.`

**Problém:** Formulace je věcně přestřelená. Modely konkrétní čísla halucinovat umí; správně má být, že je **nemají spolehlivě opírat o ověřitelný zdroj** a u citovaných odpovědí mají vyšší potřebu opory ve zdroji. V aktuální podobě je to fakticky napadnutelné.

**Návrh opravy:**  
Přepsat všude do bezpečnější podoby, např.:
- „AI modely si konkrétní čísla bez opory ve zdroji často pletou nebo je nedokážou spolehlivě doložit.“
- „U odpovědí s konkrétními čísly mívají originální data vyšší šanci stát se citovaným zdrojem.“
- „Pokud k tématu existuje málo ověřitelných čísel, vlastní data mohou zvýšit šanci na citaci.“

---

### 2) [BLOCKER] Nedoložený claim o „jediném zdroji“ a nutnosti citace
> `Pokud vlastní průzkum, A/B test nebo analýzu publikujete jako jediný relevantní zdroj k otázce, váš web se může stát primárním zdrojem citace.`  
> `Tím vlastní průzkum získává status primárního zdroje, který AI musí uvést, pokud chce odpovídat na související dotaz.`  
> `Pokud na ovězenou otázku existuje jediný zdroj, mívá v citacích výrazně silnější pozici`

**Problém:** „musí uvést“ je overclaim. AI přehledy ani jiné systémy negarantují citaci jediného zdroje. Navíc je tam překlep „ovězenou“.

**Návrh opravy:**  
- „…může se stát jedním z hlavních zdrojů, ze kterých AI odpověď čerpá.“
- „…mívá vyšší šanci být citován než stránka, která jen shrnuje cizí čísla.“
- Opravit `ovězenou` → `ověřenou` nebo lépe `ověřitelnou`.

---

### 3) [BLOCKER] GSC reporty pro generativní vyhledávání jsou popsány nepřesně a terminologicky chybně
> `od června 2026 jsou v GSC dedikované zprávy AI Search Generative (AI Overviews, AI Mode, generativní AI v Discoveru)`  
> `Google v Search Console publikuje dedikované zprávy AI Search Generative (AI Overviews, AI Mode, generativní AI v Discoveru)`  
> `s impresemi z AI Overviews a AI Mode`

**Problém:**  
- Název je neobratný a pravděpodobně chybný. V zadání je uvedeno: **Search Generative AI reporty**.  
- „imprese“ je zbytečný anglicismus.  
- Zadání výslovně říká: reporty obsahují **impressions**, ale **chybí query/click data**. To v článku chybí.  
- Tvrzení o „generativní AI v Discoveru“ je bez opory v zadání a působí jako přidaný detail navíc.

**Návrh opravy:**  
Nahradit jednou přesnou formulací, např.:
- „Od června 2026 Google Search Console zpřístupňuje dedikované reporty pro Search Generative AI. Podle dostupných informací ukazují zobrazení, ale neobsahují data na úrovni dotazů ani prokliků.“
A odstranit:
- `generativní AI v Discoveru`
- `AI Search Generative`
- `imprese`

---

### 4) [WARNING] Statistiky 2,3× / 3× / 37 % nejsou v textu dost opatrně ukotvené
> `Podle dostupných analýz citací z let 2025–2026...`  
> `bývají v některých analýzách AI citací citovány zhruba 2,3× častěji`  
> `mívají v některých analýzách výrazně vyšší riziko ztráty AI citací`  
> `kolem 37 % vyšší prokliky`

**Problém:** Samotná opatrnost „v některých analýzách“ je dobrý směr, ale článek nikde neříká, že jde o **orientační benchmarky z veřejných analýz**, ne o univerzální pravidla. U `~3×` navíc chybí číslo přímo v těle, zatímco ve `stats` je uvedeno.

**Návrh opravy:**  
U prvního výskytu doplnit krátkou brzdu:
- „Jde o orientační benchmarky z veřejných analýz 2025–2026, ne o garanci výsledku pro každý obor.“
A u druhé odrážky uvést i číslo:
- „…mívají podle některých analýz zhruba **3× vyšší riziko** ztráty AI citací.“
U CTR:
- „…na sociálních sítích jako X/Twitter a LinkedIn mívají podle některých veřejných analýz kolem 37 % vyšší míru prokliku.“

---

### 5) [WARNING] FAQ obsahuje jazykově i věcně problematickou odpověď o aktualizaci
> `Pages bez aktualizace v rozsahu zhruba čtvrtletí mívají...`

**Problém:** Míchání češtiny a angličtiny (`Pages`). Působí neprofesionálně. Navíc věta zní jako tvrdé pravidlo.

**Návrh opravy:**  
- „Stránky bez aktualizace přibližně čtvrt roku mívají podle některých analýz vyšší riziko ztráty AI citací.“
Ideálně doplnit:
- „Neplatí to stejně ve všech oborech; nejdůležitější je aktualizovat tam, kde se data rychle mění.“

---

### 6) [WARNING] Zakázaný nebo nevhodný slovník: anglicismy a nečeské termíny
> `primary source` / `first-party` se sice přímo nevyskytují, ale objevují se jiné problematické výrazy:  
> `LLM`  
> `survey`  
> `Public data analýza`  
> `embed-friendly grafy`  
> `pitch k podcastům`  
> `citation gain`  
> `multi-source datasety`  
> `multi-rok historie`  
> `mini-průzkum 50 až 200 respondentů na vlastním listu`  

**Problém:** Brand voice má být česky, věcně, bez zbytečných anglicismů. Některé výrazy působí jako pracovní poznámky, ne hotový článek.

**Návrh opravy:**  
- `LLM` → `velké jazykové modely` a zkratku případně nechat až v závorce jednou.
- `survey` → `průzkum`
- `Public data analýza` → `Analýza veřejných dat`
- `embed-friendly grafy` → `grafy, které lze snadno vložit do článků`
- `pitch k podcastům` → `nabídka tématu podcastům`
- `citation gain` → `krátkodobý přínos v citacích`
- `multi-source datasety` → `datové soubory z více zdrojů`
- `multi-rok historie` → `víceleté srovnání`
- `na vlastním listu` → `ve vlastní databázi kontaktů` nebo `na vlastních kontaktech`

---

### 7) [WARNING] Zakázaný/nevhodný termín „podle schématu“
> `strukturovaná data podle schématu Dataset nebo Article`

**Problém:** Není to přímo zakázané spojení „schema markup“, ale je to zbytečně technicistní a nejednotné vůči preferovanému slovníku.

**Návrh opravy:**  
- „strukturovaná data typu Dataset nebo Article“

---

### 8) [WARNING] Title je příliš dlouhý pro doporučený rozsah
> `Originální data jako tahák AI citací — návod pro rok 2026`

**Problém:** Titulek je SEO-validní významově, ale přesahuje doporučených 50–60 znaků. Klíčové slovo je sice na začátku, to je plus.

**Návrh opravy:**  
Zkrátit, např.:
- `Originální data pro AI citace: návod 2026`
- `Originální data pro AI: jak získat citace`
- `Originální data pro AI citace v roce 2026`

---

### 9) [TIP] Meta description je obsahově dobrý, ale šla by zkrátit a zpřesnit na cílové KW
> `AI nemůže vymyslet konkrétní čísla, takže původní průzkumy a vlastní data se stávají primárním zdrojem citací. Praktický návod, jak je vytvořit a publikovat.`

**Problém:** Není špatná, ale opakuje problematický absolutní claim „nemůže vymyslet“. Zároveň neobsahuje přesně hlavní frázi `originální data pro ai`.

**Návrh opravy:**  
Např.:
- `Originální data pro AI mohou zvýšit šanci na citace. Naučte se, jak sbírat vlastní data, publikovat metodiku a vytvořit použitelný zdroj.`

---

### 10) [WARNING] `answer` je funkční, ale je delší než ideálních 40–60 slov
> `Originální data jsou vlastní průzkum... pokud řešíte odpovídající dotaz.`

**Problém:** Začíná definicí, to je správně. Samostatný smysl také drží. Ale je zbytečně dlouhá a obsahuje znovu absolutní claim o tom, že modely „nemůžou vymyslet konkrétní čísla“.

**Návrh opravy:**  
Zkrátit na cca 45–55 slov, např.:
- „Originální data jsou vlastní průzkum, měření nebo analýza dat, které jste zveřejnili jako první. Pro AI jsou cenná, protože u konkrétních čísel zvyšují potřebu dohledatelného zdroje. Pokud data popíšete jasně a s metodikou, mohou zvýšit šanci na citaci.“

---

### 11) [TIP] Prvních ~100 slov těla je citovatelných, ale stále obsahuje přestřelený claim
> `AI systémy nemohou vymyslet konkrétní čísla — buď najdou zdroj, nebo tvrzení nepřevezmou.`

**Problém:** Struktura úvodu je dobrá a samostatně použitelná, ale kazí ji tentýž absolutní výrok.

**Návrh opravy:**  
Ponechat stavbu odstavce, jen nahradit jednu větu:
- „U konkrétních čísel AI systémy obvykle potřebují dohledatelný zdroj; bez něj je vyšší riziko chyby nebo necitovatelné odpovědi.“

---

### 12) [WARNING] Některé formulace zbytečně slibují příliš přímý dopad
> `aby AI mohla citovat`  
> `tak, aby je AI uměla použít`  
> `bez aktualizace stránka v čase přijde o AI citace`

**Problém:** Samy o sobě nejsou zakázané, ale opakovaně zní deterministicky. Lepší je držet slovník „může zvýšit šanci“.

**Návrh opravy:**  
- `aby AI mohla citovat` → `aby se zvýšila šance na citaci`
- `tak, aby je AI uměla použít` → `tak, aby byly pro AI snadno použitelné`
- `přijde o AI citace` → `může ztrácet podíl AI citací`

---

### 13) [TIP] Jedna faktická drobnost: „A/B test s reálným provozem“ není vždy realistický ani nutný
> `Pro dopad konkrétní změny A/B test s reálným provozem.`

**Problém:** Není to chyba, ale zní to příliš úzce. U menších firem může jít i o before/after experiment nebo kontrolované srovnání, ne nutně čistý A/B test.

**Návrh opravy:**  
- „Pro dopad konkrétní změny A/B test nebo jiné srovnání před a po s jasně popsanými podmínkami.“

---

### 14) [WARNING] V CTA je primární produkt správně, ale chybí jasnější vazba „pro koho je Pack“ a konkrétní akce
> `Můžete si pořídit AI SEO Wireframe Pack za 1 490 Kč... Pokud chcete situaci posoudit profesionálně, AI SEO audit za 9 990 Kč...`

**Problém:** CTA je relevantní a správně dává Pack jako první. To je plus. Ale závěr je dlouhý a produktový popis lehce splývá. U tutorialu by měl být Pack zřetelně jako DIY krok.

**Návrh opravy:**  
Zachovat oba odkazy, ale zpřesnit:
- Primární CTA: `Chcete si vlastní průzkum nebo case study připravit sami? AI SEO Wireframe Pack za 1 490 Kč obsahuje šablony pro benchmark, průzkum i případovou studii.`
- Sekundární CTA: `Pokud si nejste jistí výběrem tématu nebo metodikou, AI SEO audit za 9 990 Kč navrhne, z jakých dat u vás dává smysl vycházet.`

---

### 15) [TIP] Interní prolinkování je jen na produkty, chybí alespoň jeden kontextový interní odkaz v těle
> V těle článku nejsou žádné interní odkazy, pouze CTA na `/pack/` a `/audit/`.

**Problém:** Nejde o obecnou radu, ale konkrétně zde by se hodil odkaz z pasáže o publikaci dat nebo metodice na relevantní pilířový obsah, pokud na webu existuje. Bez toho článek funguje hůř jako součást celku.

**Návrh opravy:**  
Doplnit 1–2 interní odkazy přímo v těle na:
- pilíř k Google AI Overviews / AI citacím,
- článek o strukturovaných datech,
- článek o case studies nebo metodice obsahu pro AI.  
Pokud takový obsah neexistuje, tento bod ignorujte.

---

### 16) [TIP] Drobné jazykové a typografické vady
> `ovězenou otázku`  
> `Facebookové skupiny`  
> `Search Console publikuje`  
> `AI Search Generative`  
> `Pages`  
> `vlastním listu`

**Problém:** Některé výrazy působí neuhlazeně nebo jako překladový mezistupeň.

**Návrh opravy:**  
- `ovězenou` → `ověřitelnou`
- `Facebookové skupiny` → `facebookové skupiny`
- sjednotit názvy produktů/služeb Google
- odstranit anglicismy dle bodů výše

---

## Co je naopak dobře
- **Slug** `originalni-data-pro-ai` je smysluplný a odpovídá tématu.
- **Kategorie a formát tutorialu** sedí k záměru článku.
- **FAQ** pokrývá reálné otázky cílovky a většina odpovědí je samostatně použitelná.
- **CTA směřuje správně primárně na Pack a sekundárně na Audit.**
- **Použití termínu „strukturovaná data“** je v zásadě v souladu s brand slovníkem.

## Shrnutí priorit oprav
Nejdřív opravte:
1. absolutní tvrzení o tom, co AI „nemůže“,
2. nepřesnosti kolem GSC reportů z června 2026,
3. příliš tvrdé formulace „musí uvést“, „přijde o citace“,
4. anglicismy a nečeský slovník,
5. zkrácení title a answer.

Po těchto úpravách bude článek výrazně bezpečnější a publikačně připravený.