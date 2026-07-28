Níže přísný audit jen podle dodaného textu.

## BLOKER

### 1. Míchání nesrovnatelných metrik v jedné tabulce
**Citace:** „| **68 %** vyhledávání v Googlu skončilo bez prokliku… | … | U dotazů **s AI Overviews** je zero-click kolem **83 %**… | … | CTR první pozice klesá… | … | S AIO klikne na organický výsledek **8 % uživatelů**… | Na odkaz **uvnitř** AI Overview klikne asi **1 %**…“

Problém:
- vedle sebe stojí:
  - podíl všech vyhledávání bez kliku,
  - podíl zero-click jen u dotazů s AIO,
  - pokles CTR 1. pozice,
  - podíl uživatelů, kteří klikli na organický výsledek,
  - podíl uživatelů, kteří klikli na link uvnitř AIO.
- To nejsou zaměnitelné ukazatele a tabulka k tomu nevede dost jasně.

Důsledek:
- čtenář snadno získá dojem, že všechna čísla měří „totéž z různých stran“, což není pravda.

Doporučení:
- rozdělit minimálně na 3 bloky:
  1. **Zero-click podíl**
  2. **Dopad AIO na organické CTR**
  3. **Klikání uvnitř AIO**
- ke každému řádku přidat sloupec **„co přesně metrika měří“**.

---

### 2. Neatribuuované tvrzení „83 % vs. 60 %“
**Citace:** „U dotazů **s AI Overviews** je zero-click kolem **83 %**, bez nich zhruba 60 % | analýzy 2026“

Problém:
- „analýzy 2026“ není zdroj.
- V refreshi měl být problém vágnosti odstraněn; tady zůstal.

Důsledek:
- nejvýraznější číslo v tabulce nemá ověřitelnou atribuci.
- oslabuje to důvěryhodnost celé sekce.

Doporučení:
- buď doplnit konkrétní studii, datum, trh, metodiku,
- nebo řádek vyhodit.

---

### 3. Přestřelený kauzální framing
**Citace:** „Zero-click roste i kvůli AI Overviews.“ / „AI Overviews ho zesilují“

Problém:
- článek to podává příčinně, ale předložená data jsou převážně observační srovnání SERPů „s AIO vs. bez AIO“.
- Z nich plyne asociace, ne čistě kauzální efekt. Do hry vstupuje typ dotazu; AIO se nezobrazuje náhodně.

Důsledek:
- článek místy vydává korelaci za příčinu.

Doporučení:
- zmírnit na:
  - „AIO jsou **spojené s** vyšším zero-click a nižším CTR“
  - „u části dotazů mohou zero-click **zvyšovat**“
- pokud chcete ponechat „kvůli“, musíte dodat silnější metodický disclaimer.

---

### 4. Vnitřní napětí kolem GSC metrik
**Citace:**  
- „Sledujte hlavně zobrazení a CTR.“  
- „Samostatně dokážete sledovat impressions a CTR v rámci segmentů AI Mode a AI Overviews…“  
- „CTR v segmentu AI Mode / AI Overviews berte jako orientační metriku… ne jako přesné oddělení každého prokliku.“

Problém:
- text současně říká „sledujte CTR“ a „CTR je jen orientační“, aniž jasně vysvětlí, co přesně ten segment znamená a jak moc je použitelný.
- Pro běžného čtenáře to může vyznít skoro rozporně.

Důsledek:
- metodická nejasnost: je to primární metrika, nebo jen hrubý signál?

Doporučení:
- zpřesnit:
  - „V GSC sledujte CTR v AI segmentech jako **trendový indikátor**, ne jako přesné měření podílu kliků z AIO.“
- totéž sjednotit v answer/FAQ/těle.

---

## DOPORUČENÍ

### 5. Staré vágní tvrzení v FAQ zůstalo vedle nového konkrétního
**Citace:** „Podle dostupných analýz se v roce 2026 podíl zero-click dotazů blíží dvěma třetinám.“

Problém:
- přesně tohle měl refresh odstranit.
- nahoře už máte konkrétní „68 %“, ale FAQ se vrací k neurčité formulaci.

Doporučení:
- nahradit za:
  - „Podle analýzy SparkToro skončilo v prvních čtyřech měsících 2026 bez prokliku asi 68 % vyhledávání v Googlu.“
- případně dodat „na zkoumaném trhu/vzorku“.

---

### 6. „Část zero-click dotazů zároveň posiluje značku přes citace“ je plausibilní, ale datově slabě podložené
**Citace:** „část zero-click dotazů zároveň posiluje značku přes citace“ / „Citace v AIO může posílit značku…“

Problém:
- to je strategická hypotéza, ne výsledek z čísel uvedených v článku.
- Uvádíte proti tomu tvrdé číslo 1 % kliků z AIO, ale pro „brand lift“ zde nemáte oporu.

Doporučení:
- formulovat opatrněji:
  - „Citace může mít brandingový efekt, ale ten se hůř měří a z uvedených studií přímo neplyne.“
- To by bylo poctivé a v souladu s deklarovaným tónem „bez hype“.

---

### 7. „Kompenzovat ztrátu“ je místy normativní víc, než data unesou
**Citace:** „Posilte značku přes AI citace… Investujte do střední části trychtýře…“

Problém:
- jako praktické doporučení OK, ale článek by měl jasněji oddělit:
  - co plyne z dat,
  - co je vaše expertní strategie.

Doporučení:
- přidat větu typu:
  - „Níže nejde o přímý závěr z jedné studie, ale o praktickou reakci na trend nižšího CTR.“

---

### 8. Similarweb věta potřebuje přesnější rámec
**Citace:** „u zpravodajských dotazů se podle Similarwebu zero-click po spuštění AI Overviews v USA zvedl z 56 % na 69 % během roku“

Problém:
- chybí datum studie a není jasné, zda jde o všechna news queries, jaký trh, jaká platforma.
- formulace „po spuštění AIO“ zase implikuje kauzalitu.

Doporučení:
- doplnit datum a rámec, nebo přeformulovat:
  - „v amerických datech Similarwebu byl v daném období u zpravodajských dotazů pozorován růst…“

---

### 9. „Google v polovině roku 2025 přidal do GSC samostatné AI segmenty“ chce oporu nebo zmírnění
**Citace:** „Google v polovině roku 2025 přidal do GSC samostatné AI segmenty.“

Problém:
- je to faktické tvrzení o produktu.
- Pokud není v článku zdroj/link na dokumentaci, je to zbytečně tvrdé.

Doporučení:
- buď odcitovat,
- nebo změkčit na „od roku 2025/2026 jsou v některých účtech dostupné…“, což ostatně sami dál říkáte.

---

### 10. „u značkových dotazů může citace v AIO CTR i zvyšovat“ je bez opory
**Citace:** „u značkových dotazů může citace v AIO CTR i zvyšovat — sledujte zvlášť.“

Problém:
- možné ano, ale v textu pro to není žádný zdroj ani vysvětlení.
- v kontextu jinak datového článku to působí jako nepodložené pravidlo.

Doporučení:
- označit jako hypotézu:
  - „může se stát, že…“
- nebo vyhodit.

---

## DROBNOSTI

### 11. Answer je přesnější než FAQ; sjednotit
**Citace:**  
- answer: „Podle analýzy SparkToro… zhruba 68 %…“  
- FAQ: „…blíží dvěma třetinám.“

Doporučení:
- všude použít stejnou konkrétní formulaci.

---

### 12. „Zero-click roste z hodnoty kolem 50 % v roce 2019“ je časová řada bez srovnatelnosti
**Citace:** „Zero-click roste z hodnoty kolem **50 % v roce 2019** | SparkToro, 2026“

Problém:
- není jasné, zda jde o metodicky srovnatelný údaj se 68 %.
- pokud ano, napište to. Pokud ne, řádek je slabý.

Doporučení:
- doplnit „ve srovnatelné / nesrovnatelné metodice“ nebo vypustit.

---

### 13. „dobrý vs. špatný“ ve stats není statistika
**Citace:** `stats: value: "dobrý vs. špatný"`

Problém:
- v sekci `stats` je to spíš teze než data.
- rozbíjí to očekávání, že „stats“ obsahují číselná zjištění.

Doporučení:
- přesunout mimo stats, třeba do key takeaways.

---

### 14. „nelze oddělit“ ve stats taky není statistika
**Citace:** `stats: value: "nelze oddělit"`

Problém:
- opět nejde o číselný údaj, ale metodické omezení.

Doporučení:
- dát do insight boxu nebo „omezení měření“.

---

## Použitelnost pro českého čtenáře

### Co funguje
- Poctivě říkáte: „žádné z těch čísel není měřené na českých datech.“
- Praktická část k GSC dává českému čtenáři aspoň akční rámec.

### Co chybí
1. **Jasnější převod do české praxe**
   - napište explicitně:
     - „Neberte 68 % jako český benchmark.“
     - „Použijte ho jen jako signál směru; benchmark si vytvořte z vlastních GSC dat.“

2. **Mini-postup pro lokální validaci**
   - např.:
     - export top dotazů,
     - oddělit brand/non-brand,
     - porovnat před/po výskytu AIO,
     - ručně ověřit vzorek SERPů,
     - sledovat konverzní dotazy zvlášť.

3. **Prioritizace podle byznysového dopadu**
   - český čtenář potřebuje vědět, že nemá řešit všechny dotazy, ale:
     - high-impression + falling CTR,
     - non-brand,
     - dotazy blízko konverzi,
     - landing pages s obchodní hodnotou.

---

## Co chybí celkově

### A. Sloupec „trh / zařízení / vzorek / co je jednotka“
Bez toho tabulka zůstává poloviční. Přesně to rozhoduje, jestli jsou čísla srovnatelná.

### B. Krátká metodická věta k Pew
„8 % klikne na organický výsledek“ a „1 % na odkaz uvnitř AIO“ jsou behaviorální metriky uživatelů, ne CTR stránky/webu. To je dobré explicitně napsat.

### C. Jasné oddělení „co víme“ vs. „co doporučujeme dělat“
Teď je to místy smíchané.

---

## Verdikt

**Celkově lepší než původní vágní verze, ale ještě ne čisté.**  
Hlavní problém je, že tabulka vedle sebe staví rozdílné metriky bez dost silného metodického rámce, a jedno klíčové číslo („83 %“) není řádně atribuované.

### Priorita oprav
1. **Vyhodit nebo plně odzdrojovat „83 % vs. 60 %“.**
2. **Rozdělit tabulku podle typu metrik.**
3. **Zmírnit kauzální formulace o AIO.**
4. **Sjednotit FAQ s konkrétním 68 %.**
5. **Přidat český návod: ne benchmark, ale vlastní baseline z GSC.**

Když chceš, udělám hned i **navržený přepis problematických vět a tabulky** ve formátu „původní → oprava“.