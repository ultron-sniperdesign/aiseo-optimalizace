# Audit kola 1 (fakta) — refresh `seznam-cz-ai-vyhledavani` (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit1.md` (auditor-system + osa fakta),
> Codex v limitu do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Ověřoval proti textům stránek staženým
> 23. 11. 2026 ve složce úkolu `Dokumenty/CODEX/z-clauda/2026-11-23-audit1-seznam-cz-ai-vyhledavani/zdroje/`.
> Čísla řádků míří na verzi článku před opravami. Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

## Nálezy

### [BLOCKER] 1: Zdroje Seznam AI. Z krátké odpovědi, úvodu a FAQ vypadl rozpor mezi stránkami nápovědy
- **Místo:** clanek.mdx ř. 4 a ř. 43 („Podle nápovědy … odpovídá z indexu Vyhledávání a ze služeb Seznamu, jako jsou Firmy.cz nebo Sreality.cz“), clanek.mdx ř. 26 (FAQ „Z jakých zdrojů…“), okrajově ř. 125 (krok 3).
- **Zdroj:**
  - ai-faq.txt ř. 36 řadí Firmy.cz a Sreality.cz mezi napojené služby.
  - ai-beta.txt ř. 23–32 jako dnešní stav uvádí jen vyhledávač, zprávy a počasí. Zboží.cz, Firmy.cz, Sreality.cz i TV program teprve slibuje připojit.
  - tz-1510.txt ř. 62 je vede jako propojené.
  - Podmínka je v research.md ř. 45.
  - Ř. 4 a 43 navíc tvrzení připisují „nápovědě“, a přitom jiná stránka nápovědy říká opak.
- **Nové znění ř. 4:** 57 slov. Výhrada se do limitu nevejde, proto je tvrzení připsané datované tiskové zprávě, která obě služby jmenuje.
```
Seznam AI, dřív Seznam Asistent, je konverzační asistent Seznamu, který je k listopadu 2026 v betě. Podle nápovědy kombinuje vlastní model SeLLMa s open-source modelem Gemma. Podle tiskové zprávy z 15. 10. 2026 odpovídá z Vyhledávání a služeb Seznamu, třeba Firmy.cz nebo Sreality.cz, a týdně ho používají vyšší statisíce uživatelů. Pro většinu firem zůstává doplňkem ke Googlu.
```
- **Nové znění ř. 43, první dvě věty:** řeší i nález 3, zbytek odstavce zůstává.
```
**Seznam AI, dřív Seznam Asistent, je konverzační asistent Seznamu, který je k listopadu 2026 v betě. Podle nápovědy kombinuje vlastní model SeLLMa s open-source modelem Gemma; podle tiskové zprávy z 15. 10. 2026 odpovídá z Vyhledávání a služeb Seznamu, jako jsou Firmy.cz nebo Sreality.cz (stránka nápovědy o betě je ještě vede mezi budoucími).** Týdně ho podle téže zprávy používají vyšší statisíce uživatelů a na Seznam podle StatCounteru v říjnu 2026 připadlo 13,07 % prokliků z vyhledávačů v Česku (předběžná data, v září 15,05 %), takže Seznam pro většinu firem zůstává doplňkem ke Googlu.
```
- **Nové znění ř. 26:** řeší i nálezy 4, 8 a 9.
```
Podle častých dotazů v nápovědě (k 23. 11. 2026, nápověda nemá datum) z webového a zpravodajského indexu Vyhledávání a z Počasí.cz, Firmy.cz, Sreality.cz, jízdních řádů a Sport.cz. Tisková zpráva z 15. 10. 2026 jmenuje i Zboží.cz a TV program a do konce roku 2026 slibuje Mapy.com, Kupi.cz, Sauto.cz a Horoskopy. Stránka nápovědy o betě ale Zboží.cz, Firmy.cz, Sreality.cz i TV program pořád vede mezi službami, které se teprve připojí. Placené nabídky Seznam Nákupů se v Seznam AI podle Seznamu zobrazují od května 2026.
```
- **Ř. 125:** za první větu doplň „(stránka o betě ho zatím vede mezi budoucími)“.

### [BLOCKER] 2: FAQ 2. Modely bez časové kotvy, hned za datem 14. 10.
- **Místo:** clanek.mdx ř. 24: „…nový název používaly už 14. 10. 2026. Je zdarma … a podle nápovědy kombinuje vlastní model SeLLMa s open-source modelem Gemma.“
- **Zdroj:**
  - ai-faq.txt ř. 34 uvádí Gemmu a stránka nemá datum.
  - Podle research.md ř. 44 tam 14. 10. stály modely OpenAI přes Azure. Totéž říká clanek.mdx ř. 71.
  - FAQ se čte samostatně a obě podmínky vynechává. Věta s „už 14. 10. 2026“ těsně před ním svádí k závěru, že Gemmu nápověda uváděla už tehdy, a to je nepravda.
- **Nové znění celé odpovědi:** řeší i nález 12.
```
Seznam AI je nový název Seznam Asistenta, konverzačního asistenta Seznamu: [tisková zpráva z 15. 10. 2026](https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/) ho uvádí jako „Seznam AI (dříve Seznam Asistent)“. Nápověda k 23. 11. 2026 používá oba názvy: nadpisy mají Seznam AI, titulky stránek a část odpovědí pořád Seznam Asistent. Je zdarma s denním a týdenním limitem dotazů a podle častých dotazů v nápovědě (bez data, stav k 23. 11. 2026) kombinuje vlastní model SeLLMa s open-source modelem Gemma; ještě 14. 10. 2026 tam stály modely OpenAI přes Microsoft Azure.
```

### [BLOCKER] 3: Úvod uvádí podíl Seznamu bez měsíce a bez revize a „drží“ odporuje datům
- **Místo:** clanek.mdx ř. 43 („Seznam podle StatCounteru drží v Česku kolem 13 % prokliků z vyhledávání“). Méně závažně i H2 na ř. 47 („kolem 13 % prokliků“).
- **Zdroj:**
  - statcounter.txt ř. 15–19 má jediný údaj: říjen 2026, 13,07 %.
  - research.md ř. 48: data se ještě revidují, v září bylo 15,05 %.
  - Článek sám v ř. 49 píše, že StatCounter data 45 dní reviduje. Říjen je tedy při odečtu 23. 11. pořád v revizním okně, zhruba do 15. 12.
  - O měsíc dřív bylo 15 %. Slovo „drží“ tvrdí stabilitu, kterou jeden předběžný měsíc neunese.
- **Nové znění:** druhá věta ř. 43 je v nálezu 1. Doporučuju změnit i H2. Změna nadpisu mění kotvu, zkontroluj odkazy na ni.
```
## Jaký podíl má <span class="hl">Seznam</span> ve vyhledávání — <strong>13 % prokliků v říjnu 2026</strong>
```

### [BLOCKER] 4: Věty o tom, co je v rozhraní Seznam AI, se opírají jen o nápovědu (řádek UI je prázdný)
- **Místa v clanek.mdx:**
  - ř. 26 a ř. 129: nabídky Seznam Nákupů „se v Seznam AI zobrazují od května 2026“.
  - ř. 32: inzeráty pod odpověďmi v sekci Sponzorované výsledky, nejvýš dva; „Vedle toho se v Seznam AI zobrazují nabídky Seznam Nákupů“.
  - ř. 84: totéž o nabídkách.
  - ř. 105: „V Seznam AI se objevuje i reklama. Pod odpověďmi mohou být inzeráty…“ a „Vedle toho se v Seznam AI zobrazují…“.
  - ř. 137 a ř. 168: ve zdrojích uvádí všechno, co měl model k dispozici.
  - ř. 149, druhá věta.
- **Zdroj:**
  - Popis reklamních ploch, nabídek a zdrojů u odpovědi je jen v řádcích Dokumentace: research.md ř. 28 a ř. 30, tedy ai-sklik.txt ř. 12–22 a ai-jak.txt ř. 28. Řádek Rozhraní na ř. 37 je prázdný.
  - Věty jsou napsané jako pozorovaný fakt. Pocházejí z verze ze 14. 10., pravidlo ale platí i pro ně.
  - Chybí dvě podmínky z ai-sklik.txt: podobu, umístění i označení ploch Seznam průběžně testuje a může je změnit (ř. 23), a samostatná statistika plochy není (ř. 20).
  - Ř. 73 je v pořádku, stojí pod větou „Nápověda k tomu uvádí“.
- **Nové znění ř. 32:**
```
Podle nápovědy Seznam AI se pod odpověďmi mohou objevit inzeráty Skliku z vyhledávacích a Chytrých kampaní, v sekci s nadpisem Sponzorované výsledky a nejvýš dva k dotazu; podobu a umístění ploch Seznam podle ní průběžně testuje. Zvlášť na ně cílit ani je vyloučit nejde. Nápověda uvádí, že se v Seznam AI zobrazují i nabídky Seznam Nákupů z produktových feedů e-shopů.
```
- **Nové znění ř. 105:**
```
Podle nápovědy Seznam AI se v asistentovi objevuje i reklama: pod odpověďmi mohou být inzeráty Skliku z vyhledávacích a Chytrých kampaní, v sekci s nadpisem Sponzorované výsledky a nejvýš dva k dotazu. Seznam je podle nápovědy vydává hlavně u dotazů, kde uživatel projeví zájem o zboží nebo službu; plochy v Seznam AI nejde zvlášť cílit ani vyloučit a výkon se počítá do statistik kampaně, samostatně ho Sklik zatím nevykazuje. Podobu, umístění i označení ploch Seznam průběžně testuje. Nápověda dodává, že se v Seznam AI zobrazují i nabídky Seznam Nákupů. Seznam tvrdí, že inzerce odpověď neovlivňuje — zvenku se to ověřit nedá.
```
- **Ř. 84 a ř. 129:** „se v Seznam AI zobrazují od května 2026“ nahraď „se v Seznam AI podle Seznamu zobrazují od května 2026“. K ř. 84 viz i nález 8, ř. 26 je v nálezu 1.
- **Nové znění ř. 137:** řeší i nález 7.
```
Seznam AI vyžaduje přihlášení a má limit dotazů; podle stránky o betě ho navíc zatím nemusí mít každý účet. Ve zdrojích podle nápovědy uvádí všechno, co měl model k dispozici, takže uvedený web ještě neznamená, že z něj odpověď čerpala.
```
- **Nové znění ř. 168:**
```
Podle nápovědy Seznam AI uvádí všechno, co měl model k dispozici, a neoznačuje, co skutečně využil.
```
- **Ř. 149:** „Vedle nich tam mohou být…“ nahraď „Vedle nich tam podle téže nápovědy mohou být…“.

### [WARNING] 5: „Hlavní zdroj podle nápovědy“. Nápověda slovo „hlavní“ nepoužívá a stojí na tom nový nadpis o SEO
- **Místo:** clanek.mdx ř. 30 („Index Vyhledávání je podle nápovědy i hlavním zdrojem Seznam AI“), ř. 83 („hlavní zdroj“), ř. 111 (úvodní věta celé sekce SEO).
- **Zdroj:**
  - ai-faq.txt ř. 25: odpovědi vznikají z dat vyhledávání a dalších ověřených zdrojů Seznamu, výjimečně přímo z modelu.
  - ai-faq.txt ř. 36 jmenuje index jako první.
  - Podle čeho asistent vybírá konkrétní stránky, Seznam neuvádí (research.md ř. 38).
  - Nadpis na ř. 109 ani FAQ na ř. 30 jinak neslibují pozice ani viditelnost v Seznam AI. Chybí jen tahle výhrada.
- **Nové znění ř. 111:**
```
Odpovědi Seznam AI podle nápovědy vznikají z dat Vyhledávání a dalších zdrojů Seznamu, jen výjimečně přímo z jazykového modelu, takže příprava na Seznam AI začíná stejně jako klasické SEO pro Seznam.cz. Podle čeho asistent z indexu vybírá konkrétní stránky, Seznam nepopisuje; kroky níž mohou zvýšit šanci, nic nezaručují:
```
- **Ř. 30, věta o indexu:**
```
Odpovědi Seznam AI podle nápovědy vznikají z dat Vyhledávání a dalších zdrojů Seznamu, jen výjimečně přímo z jazykového modelu.
```
- **Ř. 83:** „— hlavní zdroj.“ nahraď „— časté dotazy ho jmenují mezi zdroji jako první.“

### [WARNING] 6: Věta „Tiskové zprávy modely nemají“ odporuje ř. 71 a ř. 181
- **Místo:** clanek.mdx ř. 69 tvrdí, že tiskové zprávy nemají tři věci z nápovědy, první z nich jsou modely. Jenže ř. 71 říká, že modely OpenAI přes Azure uvádělo „oznámení z listopadu 2025“, a ř. 181 ho počítá mezi tiskové zprávy.
- **Zdroj:** tz-1510.txt ř. 101–104. Příspěvek z 25. 11. 2025, stejný jako odkaz v ř. 75, má na blogu Seznamu štítek Tisková zpráva.
- **Nové znění ř. 69:**
```
Nápověda k tomu uvádí tři věci, které tiskové zprávy z května a října 2026 nemají:
```
- **Ř. 71 a ř. 75:** „oznámení z listopadu 2025“ a „oznámení z 25. 11. 2025“ nahraď „tisková zpráva z 25. 11. 2025“.

### [WARNING] 7: Kdo Seznam AI má. Časté dotazy si odporují samy a tabulka to zamlčuje
- **Místo:** clanek.mdx ř. 65, sloupec Časté dotazy („stačí být přihlášený“). Krok 6 na ř. 137 vyzývá k testování bez výhrady.
- **Zdroj:**
  - ai-faq.txt ř. 19 říká, že stačí přihlášení.
  - ai-faq.txt ř. 47 v odpovědi pro autory obsahu píše, že beta běží pro omezený počet uživatelů.
  - ai-beta.txt ř. 17–20 také uvádí omezený počet uživatelů.
  - research.md ř. 46 tenhle vnitřní rozpor častých dotazů nemá.
- **Nové znění buňky na ř. 65:**
```
stačí být přihlášený; v odpovědi pro autory obsahu ale beta jen pro omezený počet uživatelů
```
- Krok 6 je opravený v nálezu 4.

### [WARNING] 8: Rozpor se stránkou o betě se týká i Zboží.cz a TV programu
- **Místo:** clanek.mdx ř. 79 jmenuje jen Firmy.cz a Sreality.cz. Ř. 84 uvádí Zboží.cz jen podle tiskové zprávy.
- **Zdroj:**
  - ai-beta.txt ř. 28 a ř. 31 řadí Zboží.cz i TV program mezi budoucí.
  - ai-faq.txt ř. 36 nejmenuje ani jedno.
  - tz-1510.txt ř. 62 vede obojí jako propojené.
  - Tabulka na ř. 67 to ukazuje, text ne.
- **Nové znění ř. 79, poslední věta:**
```
Stránka o betě přitom Zboží.cz, Firmy.cz, Sreality.cz i TV program pořád řadí mezi služby, které se teprve připojí.
```
- **Nové znění ř. 84:**
```
- **E-shop a Seznam Nákupy** — Zboží.cz je podle tiskové zprávy z 15. 10. 2026 mezi propojenými službami (časté dotazy ho nejmenují, stránka o betě ho řadí mezi budoucí) a placené nabídky z produktového feedu ve formátu Zboží.cz se v Seznam AI podle Seznamu zobrazují od května 2026. Jak se na Zboží.cz dostat, popisuje [článek o Zboží.cz a Seznam AI](/blog/zbozi-cz-pro-ai/).
```

### [WARNING] 9: „Do konce roku“ bez roku a sekce „Co sledovat“ přebírá jen verzi stránky o betě
- **Místo:** clanek.mdx ř. 26, 67, 79 a 177.
  - Po 31. 12. 2026, tedy za pět týdnů, se „do konce roku“ bude číst jako rok 2027.
  - Ř. 177 („kdy Seznam AI dostanou všichni“) předpokládá, že ho všichni nemají. Tvrdí to jen nedatovaná stránka o betě, květnová zpráva citovaná v ř. 61 říká opak.
- **Zdroj:** tz-1510.txt ř. 62 (termín je z tiskové zprávy z října 2026), ai-beta.txt ř. 17–20.
- **Nové znění:** ve všech čtyřech místech „do konce roku“ nahraď „do konce roku 2026“. První věta ř. 177:
```
Nejisté zůstává, kdy skončí beta a jestli Seznam AI opravdu mají všichni přihlášení (květnová tisková zpráva to tvrdí, nedatovaná stránka o betě slibuje rozšíření na všechny „v nejbližších měsících“), jestli do konce roku 2026 opravdu přibudou Mapy.com, Kupi.cz, Sauto.cz a Horoskopy a podle čeho asistent vybírá zdroje.
```
- Do plánu: začátkem ledna 2027 ověřit, jestli ohlášené služby přibyly.

### [WARNING] 10: IndexNow bez podmínky z vlastní dokumentace protokolu
- **Místo:** clanek.mdx ř. 117 a ř. 30.
- **Zdroj:**
  - indexnow-faq.txt ř. 181: koncový bod Seznam.cz sedí.
  - ř. 232, 397 a 405: oznámení nezaručuje procházení ani indexaci a každý vyhledávač rozhoduje sám.
  - ř. 175–176: oznámení poslané na jeden zapojený koncový bod se sdílí s ostatními. Kdo hlásí změny Bingu, nemusí Seznamu posílat zvlášť.
  - Řádek research.md ř. 49 mluví jen o rychlosti zpracování.
- **Nové znění ř. 117, druhá věta:**
```
Nové a změněné adresy můžete Seznamu hlásit i přes IndexNow: Seznam.cz je podle indexnow.org mezi vyhledávači protokolu a oznámení poslané na kterýkoli zapojený koncový bod se sdílí s ostatními. Podle téže dokumentace ale oznámení nezaručuje, že robot stránku projde nebo zařadí do indexu.
```
- **Ř. 30:** „přijímá oznámení o nových a změněných stránkách přes IndexNow“ nahraď „přijímá přes IndexNow oznámení o nových a změněných stránkách (indexaci to nezaručuje)“.

### [WARNING] 11: Zářijová hodnota StatCounteru 15,05 % ve stažené stránce není
- **Místo:** clanek.mdx ř. 22, ř. 49 a nově i ř. 43.
- **Zdroj:**
  - statcounter.txt ř. 15–27 ukazuje jen říjen 2026.
  - Podle clanek-pred-refreshem.mdx ř. 48 se září odečetlo 14. 10. 2026. To bylo 14 dní po konci měsíce, tedy ještě v revizním okně.
  - K 23. 11. je září po 45 dnech konečné a hodnota se mohla posunout.
- **Návrh:** na téže stránce StatCounteru stáhni CSV za září a říjen 2026 (tlačítko Download Data, statcounter.txt ř. 32), ulož ho do zdrojů a hodnotu ve všech třech místech potvrď nebo oprav.

### [WARNING] 12: FAQ 2. Titulek asistent.seznam.cz a věta, že nápověda používala nový název
- **Místo:** clanek.mdx ř. 24: „nápověda i titulek stránky asistent.seznam.cz nový název používaly už 14. 10. 2026“.
- **Zdroj:**
  - Tabulka „Co je ověřeno a čím“ (Z16) pro titulek stránky služby nemá řádek. Jako pozorování stránky služby patří do řádku UI, který je prázdný (research.md ř. 37).
  - Nápověda k 23. 11. oba názvy míchá. Titulky stránek končí „Nápověda Seznam Asistent“ (ai-faq.txt, ai-beta.txt a ai-jak.txt, vždy ř. 2) a část odpovědí píše „Asistent“ (ai-faq.txt ř. 40–53).
  - Partnerská nápověda vede Seznam Asistenta s adresou asistent.seznam.cz (partner-ai.txt ř. 105–107), časté dotazy už uvádějí seznam.ai (ai-faq.txt ř. 23).
- **Nové znění:** celá odpověď je v nálezu 2.

### [WARNING] 13: „Stav k 23. 11. 2026“ zahrnuje i nápovědu Skliku, která se nečetla
- **Místo:** clanek.mdx ř. 45 a ř. 181.
- **Zdroj:** tabulka Z16 (research.md ř. 22–38) nemá řádek pro nápovědu Skliku a ve složce není. zadani-audit1.md ř. 95–97 ji řadí mezi neměněná tvrzení. Údaje v ř. 129 (registrace zdarma, nabídky jen s dobitým kreditem) proto k 23. 11. ověřené nejsou.
- **Návrh:** stránky Registrace provozovny a Specifikace feedu přečti a doplň do Z16, nebo je datuj zvlášť. Například ř. 45:
```
Vycházím z nápovědy Seznam AI a nápovědy Vyhledávání, tiskových zpráv Seznamu, dokumentace protokolu IndexNow a dat StatCounteru ve stavu k 23. 11. 2026 a z nápovědy Skliku ve stavu k 14. 10. 2026.
```
- Obdobně uprav ř. 181.

### [TIP] 14: Sumarizace. Doplň konkrétní údaj, který využije sekce SEO
- **Místo:** clanek.mdx ř. 99–100.
- **Zdroj:** vyh-vychytavky.txt ř. 64: souhrn výsledků bere obsah prvních pěti organických výsledků. Ř. 77: souhrn trendujících témat vzniká z titulků a perexů článků.
```
- **Sumarizace stránky s výsledky** — ozdrojovaný souhrn z obsahu prvních pěti organických výsledků.
- **Sumarizace trendujících témat** — souhrn tématu z titulků a perexů zpravodajských článků.
```

### [TIP] 15: Seznam Webmaster. Je v betě a ukazuje počty chyb, ne konkrétní stránky
- **Místo:** clanek.mdx ř. 117 („kolik jich je v indexu a které hlásí chybu“).
- **Zdroj:**
  - vyh-webmaster.txt ř. 16–20: grafy ukazují počty.
  - ř. 55: konkrétní chybové adresy jen jako vzorek přes API.
  - ř. 59: nástroj je v betě a graf může dočasně spadnout, aniž by stránky vypadly z indexu.
```
…kolik jich je v indexu a kolik hlásí chybu; nástroj je podle nápovědy v betě, takže propad v grafu ještě nemusí znamenat vypadnutí z indexu.
```

### [TIP] 16: Místo „lidí“ piš „uživatelů“
- **Místo:** clanek.mdx ř. 34 a ř. 61. Ř. 4 a 43 už opravuje nález 1.
- **Zdroj:** tz-1510.txt ř. 66 mluví o uživatelích. „Lidí“ je volnější výklad čísla, které uvádí Seznam.

### [TIP] 17: Sreality „od října 2026“
- **Místo:** clanek.mdx ř. 87.
- **Zdroj:** tz-1510.txt ř. 62 a 64 říkají jen „nově“, datum spuštění neuvádějí.
```
- **Realitní kancelář a Sreality.cz** — s nabídkami ze Sreality.cz podle tiskové zprávy z 15. 10. 2026 nově pracuje Seznam AI, třeba když uživatel hledá bydlení.
```

### [TIP] 18: U „SEO pro Seznam.cz“ cituj přímo Seznam
- **Místo:** clanek.mdx ř. 30 (věta „Základ SEO pro Seznam.cz i Google je stejný…“ nemá zdroj) a ř. 142.
- **Zdroj:** menu nápovědy Vyhledávání má sekci Optimalizace (SEO) (vyh-vychytavky.txt ř. 109) a v sekci SeznamBot stránku Protokol IndexNow (vyh-zakaz-ai.txt ř. 51). Jejich obsah ve složce není, před citací je přečti a zapiš do Z16. Pro dotaz „SEO pro Seznam.cz“ jsou silnější doklad než indexnow.org.

## Co je v pořádku
- Říjnová čísla StatCounteru sedí (statcounter.txt ř. 15–21). FAQ 1 má všechny výhrady: vzorek webů, prokliky místo hledání, revize dat a srovnání se zářím.
- Sedí modely v ř. 71 včetně jejich historie a limity v ř. 72 (ai-limity.txt ř. 17–28). Zdroje u odpovědi v ř. 73 jsou připsané nápovědě (ai-jak.txt ř. 28). Počet uživatelů a konverzací je uvedený jako údaj „podle Seznamu“ (tz-1510.txt ř. 66).
- Tabulka v ř. 63–67 a výčet v ř. 79 odpovídají ai-faq.txt ř. 19–36, ai-beta.txt ř. 17–32 a tz-1510.txt ř. 62, s výjimkou nálezů 7 a 8. Sedí i Firmy.cz a občanská vybavenost (tz-1510.txt ř. 64).
- Odhlášení (FAQ 4, krok 2) přesně odpovídá vyh-zakaz-ai.txt ř. 16–34 včetně toho, co vypne nosnippet. Sedí Seznam Webmaster (vyh-webmaster.txt ř. 16–27), strukturovaná data i s výhradou pro Seznam AI (vyh-strukt.txt ř. 18–19, 49–70) a tři prvky ve výsledcích s přechodem do Seznam AI (vyh-vychytavky.txt ř. 43, 59–60, 72).
- Tvrzení mají správnou sílu: „Seznam tvrdí, že inzerce odpověď neovlivňuje — zvenku se to ověřit nedá“ (ř. 105), Heureka „nemá doloženou roli“ (ř. 90), čtení strukturovaných dat Seznam AI „nápověda neuvádí“ (ř. 133). Prohlášení „Seznam AI jsem netestoval“ (ř. 45, 181) odpovídá prázdnému řádku UI.
- Refresh odstranil, co zdroje vyvracejí: OpenAI přes Azure jako dnešní stav, cíl běžet jen na SeLLMě, větu „nejisté, kolik lidí ho používá“ i Firmy.cz jen mezi budoucími službami.
- Blog Seznamu za listopad (do 19. 11.) o Seznam AI nic nového nepřináší (blog-2026-11.txt), novější zpráva tedy nechybí. V článku není žádné „letos“ a datum `updated` není v budoucnosti.
- Výzva k akci v ř. 179 odpovídá audit.ts:
  - název Audit AI viditelnosti a cena 3 600 Kč bez DPH (audit.ts ř. 64–70, 100);
  - rozsah: robot Seznam-Extended, zákazy pro AI, Firmy.cz a ruční test Seznam AI na vzorku dotazů (ř. 250, 486–487);
  - ChatGPT, Perplexity a Přehled od AI (ř. 293).

## Co chybí v tabulce podmínek (research.md ř. 40–50)
- **Kdo ho má:** časté dotazy si odporují samy (ai-faq.txt ř. 19 proti ř. 47).
- **Zdroje Seznam AI:** stránka o betě řadí mezi budoucí i Zboží.cz a TV program (ai-beta.txt ř. 28, 31), ne jen Firmy.cz a Sreality.cz. Tvrzení o Zboží.cz v ř. 84 tak podmínku nemá.
- **Index Vyhledávání jako zdroj Seznam AI:** řádek chybí. Nápověda neříká „hlavní“ (ai-faq.txt ř. 25) a nepopisuje, podle čeho vybírá stránky.
- **Reklama a nabídky v Seznam AI:** řádek chybí.
  - Vše je jen podle nápovědy, řádek UI je prázdný.
  - Podoba a umístění ploch se testují (ai-sklik.txt ř. 23) a samostatná statistika plochy není (ř. 20).
  - Datum „od května 2026“ je jen z blogu z 25. 6. 2026, který ve složce není.
- **Zdroje u odpovědi:** řádek chybí. Údaj je jen z nápovědy (ai-jak.txt ř. 28), v rozhraní neověřený.
- **IndexNow:** chybí, že oznámení nezaručuje indexaci a že se sdílí mezi koncovými body (indexnow-faq.txt ř. 175–176, 232, 405).
- **Seznam Webmaster:** chybí, že je v betě a data v grafu občas vypadnou (vyh-webmaster.txt ř. 59).
- **Podíl Seznamu:** zářijová hodnota ve stažené stránce není. Říjnová se reviduje zhruba do 15. 12. 2026.
- **Název:** nápověda k 23. 11. míchá Seznam AI a Seznam Asistent (titulky stránek, ai-faq.txt ř. 40–53). Titulek asistent.seznam.cz nemá řádek v Z16.
- **Termín ohlášených služeb:** konec roku 2026 (tz-1510.txt ř. 62). Po 31. 12. je třeba ho ověřit.
- **Nápověda Skliku:** registrace zdarma a nutnost kreditu nemají řádek v Z16, ř. 45 a 181 je přesto datují k 23. 11.
