# Audit kola 2 (jazyk, struktura, SEO + kontrola vypořádání) — refresh `seznam-cz-ai-vyhledavani` (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit2.md` (auditor-system + osa jazyk
> a struktura), Codex v limitu do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Podklady ve složce úkolu
> `Dokumenty/CODEX/z-clauda/2026-11-23-audit2-seznam-cz-ai-vyhledavani/`. Čísla řádků míří na verzi po kole 1.
> Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Shrnutí: 1× BLOCKER (zbytek nálezu 1 z kola 1 v Checklistu), 5× WARNING, 13× TIP. Fakta jsem znovu neprocházel a prokazatelně nepravdivé tvrzení jsem nenašel.

Hlavní problém jazyka je, kolik atribucí po kole 1 přibylo: slovo „nápověda“ se v článku objevuje 53×, z toho „podle nápovědy“ 16×. Úvod má 10 atribucí a výhrad na 137 slov.

## Nálezy

### [BLOCKER] 1: V Checklistu zůstala opravená vada z nálezu 1 (Firmy.cz jako zdroj „podle nápovědy“ bez výhrady stránky o betě)
- **Místo:** clanek.mdx ř. 148 (Checklist, položka „Jste lokální firma“): „Firmy.cz je katalog Seznamu a časté dotazy v nápovědě ho řadí mezi zdroje Seznam AI.“
- **Proč:**
  - Je to stejná formulace, jakou vypořádání nálezu 1 opravilo v kroku 3: ř. 125 dostal „(stránka o betě ho zatím vede mezi budoucími)“ a stejnou výhradu má odrážka na ř. 86.
  - Tady se tvrzení dál opírá o „nápovědu“, ačkoli stránka nápovědy o betě vede Firmy.cz mezi službami, které se teprve připojí (zdroje/ai-beta.txt ř. 29).
  - Právě kvůli tomuhle byl nález 1 BLOCKER.
- **Nové znění ř. 148:**
```
  { title: "Jste lokální firma", desc: "Firmy.cz je katalog Seznamu. Časté dotazy v nápovědě i tisková zpráva z 15. 10. 2026 ho řadí mezi zdroje Seznam AI, stránka o betě zatím mezi budoucí." },
```

### [WARNING] 2: Úvod je zahlcený atribucemi a druhá věta míchá dva podměty
- **Místo:** clanek.mdx ř. 43, věty za tučnou částí.
- **Proč:**
  - Věta „Týdně ho podle téže zprávy používají … a na Seznam podle StatCounteru … připadlo …, takže Seznam …“ má 40 slov. Spojuje uživatele Seznam AI s podílem vyhledávače Seznam a závěr „takže“ se váže k oběma.
  - Poslední věta má 44 slov a vsuvku zakončenou „—,“.
  - Tučnou část, tedy znění z kola 1, neměním. Všechny podmínky zůstávají.
- **Nové znění ř. 43:**
```
**Seznam AI, dřív Seznam Asistent, je konverzační asistent Seznamu, který je k listopadu 2026 v betě. Podle nápovědy kombinuje vlastní model SeLLMa s open-source modelem Gemma; podle tiskové zprávy z 15. 10. 2026 odpovídá z Vyhledávání a služeb Seznamu, jako jsou Firmy.cz nebo Sreality.cz (stránka nápovědy o betě je ještě vede mezi budoucími).** Podle téže zprávy ho týdně používají vyšší statisíce uživatelů. Na vyhledávač Seznam připadlo podle StatCounteru v říjnu 2026 v Česku 13,11 % prokliků z vyhledávačů (předběžná data, v září 14,96 %), takže Seznam pro většinu firem zůstává doplňkem ke Googlu. Článek shrnuje, co o Seznam AI tvrdí tiskové zprávy a co nápověda (v několika bodech si odporují a nápověda místy i sama se sebou), odkud asistent čerpá, kde se v něm objevuje reklama a co z toho plyne pro SEO na Seznam.cz.
```

### [WARNING] 3: ř. 61 má špatný podmět u slovesa „odbaví“ a matoucí slovosled hned na začátku sekce
- **Místo:** clanek.mdx ř. 61:
  - „Asistenta Seznam spustil 25. 11. 2025 …“
  - „podle ní ho každý týden používají vyšší statisíce uživatelů a odbaví nižší miliony konverzací“
- **Proč:**
  - Asistent stojí v předmětu („ho“), takže podmětem slovesa „odbaví“ jsou gramaticky „statisíce uživatelů“. Věta tak tvrdí, že konverzace odbavují uživatelé.
  - Začátek „Asistenta Seznam spustil“ se napoprvé čte jako jméno „Asistenta Seznam“.
- **Nové znění** (první dvě věty ř. 61, třetí věta zůstává):
```
Seznam spustil asistenta 25. 11. 2025 ve zkušebním provozu pro vybranou skupinu uživatelů a 25. 5. 2026 ho podle tiskové zprávy zpřístupnil v betě všem přihlášeným. Přejmenování potvrdila [tisková zpráva z 15. 10. 2026](https://blog.seznam.cz/2026/10/seznam-ai-propojuje-dalsi-sluzby-seznamu-vyuziva-ho-uz-vice-nez-pul-milionu-uzivatelu-tydne/), která službu uvádí jako „Seznam AI (dříve Seznam Asistent)“; podle ní ho každý týden používají vyšší statisíce uživatelů a asistent odbaví nižší miliony konverzací.
```

### [WARNING] 4: ř. 105 má chybnou vazbu „plochy nejde cílit“ a dvakrát „podle nápovědy“ v jednom odstavci
- **Místo:** clanek.mdx ř. 105:
  - „plochy v Seznam AI nejde zvlášť cílit ani vyloučit“
  - „Podle nápovědy Seznam AI …“ a hned potom „Seznam je podle nápovědy vydává …“
- **Proč:**
  - Sloveso „cílit“ chce v tomto významu předložku „na“. Stejné pravidlo má slovník u „cílí konkrétní zemi“ (JAZYK_SLOVNIK.md ř. 156) a FAQ 6 na ř. 32 to má správně: „na ně cílit“.
  - Odstavec otevírá „Podle nápovědy Seznam AI“, takže u druhého výskytu stačí „podle ní“.
  - Zůstává průběžné testování ploch, chybějící samostatná statistika i „Seznam tvrdí“.
- **Nové znění ř. 105:**
```
Podle nápovědy Seznam AI se v asistentovi objevuje i reklama: pod odpověďmi mohou být inzeráty Skliku z vyhledávacích a Chytrých kampaní, v sekci s nadpisem Sponzorované výsledky a nejvýš dva k dotazu. Seznam je podle ní vydává hlavně u dotazů, kde uživatel projeví zájem o zboží nebo službu. Na plochy v Seznam AI nejde zvlášť cílit ani je vyloučit, výkon se počítá do statistik kampaně a samostatně ho Sklik zatím nevykazuje. Podobu, umístění i označení ploch Seznam průběžně testuje. Nápověda dodává, že se v Seznam AI zobrazují i nabídky Seznam Nákupů. Seznam tvrdí, že inzerce odpověď neovlivňuje — zvenku se to ověřit nedá.
```

### [WARNING] 5: Odpovědi FAQ 3, 4 a 5 bez otázky nedávají smysl a FAQ 2 má nejasný podmět
- **Místo:**
  - **FAQ 3, ř. 26:** začíná „Podle častých dotazů v nápovědě (…) z webového a zpravodajského indexu…“. Věta nemá podmět ani sloveso.
  - **FAQ 4, ř. 28:** „…stačí v robots.txt pravidlo…“. K čemu to stačí, říká jen otázka.
  - **FAQ 5, ř. 30:** „Základ je podobný:“. Verze před kolem 1 měla „Základ SEO pro Seznam.cz i Google“, oprava podmět ztratila.
  - **FAQ 2, ř. 24:** „Je zdarma …“ stojí hned za větou s podmětem „Nápověda“, gramaticky tedy „nápověda je zdarma“.
- **Proč:**
  - Pravidlo tohoto kola: odpověď ve FAQ se musí číst i bez otázky nad ní.
  - První věta FAQ 5 navíc řetězí „… a nezahlcovat … a web musí být …“. Podmínka „web musí být dostupný“ se tak čte jako další rada z nápovědy.
  - FAQ 2, 3 a 5 mají 83 až 87 slov.
- **Nové znění:**
  - ř. 24, místo „Je zdarma s denním a týdenním limitem dotazů a podle častých dotazů v nápovědě (bez data, stav k 23. 11. 2026) kombinuje“:
```
Seznam AI je zdarma s denním a týdenním limitem dotazů. Podle častých dotazů v nápovědě (bez data, stav k 23. 11. 2026) kombinuje
```
  - ř. 26, první věta (zbytek beze změny):
```
Seznam AI podle častých dotazů v nápovědě (bez data, stav k 23. 11. 2026) odpovídá z webového a zpravodajského indexu Vyhledávání a z Počasí.cz, Firmy.cz, Sreality.cz, jízdních řádů a Sport.cz.
```
  - ř. 28, první věta (zbytek beze změny):
```
Web se z AI odpovědí Seznamu podle nápovědy Vyhledávání odhlásí pravidlem Disallow: / v robots.txt pro kterýkoli z user-agentů Seznam-Extended, AI nebo MachineLearning, případně meta značkou nosnippet pro SeznamBota.
```
  - ř. 30, první věta se mění na dvě, zbytek beze změny. Volitelně vypusť poslední větu o Heurece, kterou řeší už Insight a chyba 02.
```
Základ SEO pro Seznam.cz a pro Google je podobný: web musí být dostupný robotovi SeznamBot a v indexu. Seznam v nápovědě k optimalizaci radí psát přirozeně pro uživatele, nevkládat text do obrázků a nezahlcovat stránku klíčovými slovy.
```

### [WARNING] 6: Chybí odkaz na sesterský článek o Seznam-Extended, který tenhle článek označuje za hlavní
- **Místo:**
  - Odhlášení z AI Seznamu řeší krok 2 (ř. 121), FAQ 4 (ř. 28), chyba 03 (ř. 164) a řádek zdrojů na ř. 142.
  - Jediný interní odkaz k tématu vede na `/blog/ai-sumarizace-a-vydavatele/`.
- **Proč:**
  - Web má k tématu samostatný článek `/blog/seznam-asistent-sellma/` („Seznam-Extended: AI robot, co vám chybí v robots.txt“). Má FAQ „Jak web ze Seznam AI odhlásím?“ a nadpis „Z jakých zdrojů Seznam AI čerpá“.
  - Ten článek odkazuje na auditovaný jako na „hlavní článek o Seznamu“ (src/content/articles/seznam-asistent-sellma.mdx ř. 42 a 104). Zpětný odkaz chybí.
  - Oba články si tak konkurují ve stejných otázkách (odhlášení, zdroje).
  - Popisy kroků v komponentách Stepper a Checklist se vykreslují jako prostý text, odkaz v nich nebude klikatelný. FAQ odkazy vykreslí (Faq.astro umí jednoduchý markdown).
- **Nové znění:**
  - na konec FAQ 4 (ř. 28) přidej:
```
Jak Seznam-Extended zablokovat a co vás to bude stát, rozebírá [článek o robotovi Seznam-Extended](/blog/seznam-asistent-sellma/).
```
  - poslední věta ř. 142:
```
Jak IndexNow nasadit, ukazuje [článek o Bingu pro AI](/blog/bing-seo-pro-ai/); jak zablokovat robota Seznam-Extended a co vás to bude stát, rozebírá [článek o Seznam-Extended](/blog/seznam-asistent-sellma/); rozdíly mezi pravidly pro AI a měření českých médií má [článek o AI souhrnech a vydavatelích](/blog/ai-sumarizace-a-vydavatele/#odhlaseni-ze-seznam-ai-tri-user-agenty-a-dva-vyklady).
```

### [TIP] 7: Odrážka e-shopu je jedna dlouhá věta a u Sreality chybí výhrada, kterou sousední odrážky mají
- **Místo:** clanek.mdx ř. 84 (48 slov v jedné větě se závorkou) a ř. 87.
- **Proč:**
  - Odrážky e-shopu a Firmy.cz mají výhradu stránky o betě, odrážka Sreality ne.
  - Čtenář, který text jen přelétne, z toho vyčte, že u Sreality rozpor není. Stránka o betě je přitom řadí mezi budoucí (ai-beta.txt ř. 30).
- **Nové znění ř. 84:**
```
- **E-shop a Seznam Nákupy** — Zboží.cz vede mezi propojenými službami tisková zpráva z 15. 10. 2026; časté dotazy ho nejmenují a stránka o betě ho řadí mezi budoucí. Placené nabídky z produktového feedu ve formátu Zboží.cz se podle Seznamu zobrazují v Seznam AI od května 2026. Jak se na Zboží.cz dostat, popisuje [článek o Zboží.cz a Seznam AI](/blog/zbozi-cz-pro-ai/).
```
- **Nové znění ř. 87:**
```
- **Realitní kancelář a Sreality.cz** — s nabídkami ze Sreality.cz podle tiskové zprávy z 15. 10. 2026 nově pracuje Seznam AI, třeba když uživatel hledá bydlení (stránka o betě je zatím řadí mezi budoucí).
```

### [TIP] 8: Zájmeno „ho“ se gramaticky váže k jinému slovu, než se myslí
- **ř. 83:** „ho“ se váže ke slovu „web“, časté dotazy ale jmenují index.
```
- **Web v indexu Vyhledávání** — index Vyhledávání jmenují časté dotazy mezi zdroji jako první. Rozhoduje, jestli k webu pustíte SeznamBota a jestli je stránka v indexu (postup níž).
```
- **ř. 125 (krok 3):** „ho“ se váže ke slovu „zápis“ z titulku kroku, mezi zdroji je ale katalog.
```
      desc: "Časté dotazy v nápovědě i tisková zpráva z 15. 10. 2026 řadí katalog Firmy.cz mezi zdroje Seznam AI, stránka o betě ho zatím vede mezi budoucími. Pro lokální firmu je aktuální zápis základ bez ohledu na AI.",
```

### [TIP] 9: Kostrbatá vazba na ř. 111
- **Místo:** clanek.mdx ř. 111, „Nápověda Seznamu k optimalizaci k tomu radí“ (dvakrát „k“).
- **Nové znění druhé věty ř. 111:**
```
Seznam v nápovědě k optimalizaci radí psát přirozeně pro uživatele, nevkládat text do obrázků a nezahlcovat stránku klíčovými slovy.
```

### [TIP] 10: V kroku 1 má „je v betě“ po středníku podmět „Nápověda“
- **Místo:** clanek.mdx ř. 117.
- **Proč:** Kolo 1 navrhlo „nástroj je podle nápovědy v betě“, do textu se dostalo jen „je v betě“. Popis navíc obsahuje dvakrát „podle nápovědy“.
- **Nové znění:**
```
      desc: "Seznam Webmaster podle nápovědy ukazuje, kolik stránek navštívil robot, kolik jich je v indexu a kolik hlásí chybu. Nástroj je v betě, takže propad v grafu ještě nemusí znamenat vypadnutí z indexu. Web v něm ověříte meta značkou nebo souborem. Nové a změněné adresy můžete Seznamu hlásit i přes IndexNow; Seznam to ale bere jen jako informaci pro algoritmy a stažení ani zařazení do indexu nezaručuje.",
```

### [TIP] 11: Krok 2 a chyba 03: „Pro AI odpovědi“ říká opak toho, co se myslí, a krok neradí, jak se rozhodnout
- **Místo:** clanek.mdx ř. 121 a ř. 164 (atribut `fix`).
- **Proč:**
  - Popsaná pravidla slouží k zákazu AI odpovědí, ne k nim.
  - Firma, která chce být zdrojem, se z kroku nedozví, co na webu mít nesmí (ai-faq.txt ř. 46, vyh-zakaz-ai.txt ř. 16–24).
- **Nové znění ř. 121:**
```
      desc: "Chcete být zdrojem odpovědí Seznam AI? Pak v robots.txt nesmí být Disallow: / pro Seznam-Extended, AI ani MachineLearning a na stránkách meta značka nosnippet pro SeznamBota. Kdo AI odpovědi ze svého webu nechce, stačí mu podle nápovědy jedno z těch pravidel; nosnippet ale vypne i úryvky ve výsledcích. Rozdíly mezi pravidly rozebírá článek o AI souhrnech a vydavatelích.",
```
- **Nové znění ř. 164:**
```
fix="Pro zákaz AI odpovědí použijte user-agenty pro AI nebo nosnippet."
```

### [TIP] 12: Krok 6 obsahuje jen výhrady, žádný pokyn
- **Místo:** clanek.mdx ř. 137.
- **Nové znění:**
```
      desc: "Položte Seznam AI dotazy, které kladou vaši zákazníci, a zapište si, které weby uvádí mezi zdroji. Asistent vyžaduje přihlášení, standardní účet má 40 dotazů denně a 100 týdně a podle stránky o betě ho zatím nemusí mít každý účet. Zdroje podle nápovědy ukazují všechno, co měl model k dispozici, takže to, že je mezi nimi váš web, ještě neznamená, že z něj odpověď čerpala.",
```

### [TIP] 13: Položka Checklistu pro e-shop má tři atribuce ve dvou větách
- **Místo:** clanek.mdx ř. 149.
- **Nové znění:**
```
  { title: "Máte e-shop pro český trh", desc: "Nabídky Seznam Nákupů vznikají z XML feedu ve formátu Zboží.cz (nápověda Skliku) a podle nápovědy Seznam AI se zobrazují i v asistentovi, kde se vedle nich mohou objevit inzeráty Skliku z vyhledávacích a Chytrých kampaní." },
```

### [TIP] 14: Chyba 04 se dá číst dvojznačně
- **Místo:** clanek.mdx ř. 168. „Podle nápovědy Seznam AI uvádí…“ jde číst i jako „podle nápovědy Seznam AI [kdo?] uvádí“.
- **Nové znění:**
```
    Seznam AI podle své nápovědy uvádí všechno, co měl model k dispozici, a neoznačuje, co skutečně využil.
```

### [TIP] 15: ř. 177 má 47slovnou první větu a nelogický závěr „proto stav ověřujte přímo v ní“
- **Místo:** clanek.mdx ř. 177.
- **Proč:**
  - Z toho, že si nápověda odporuje, neplyne, že ji máte číst. Důvodem ověřovat je, že nemá datum.
  - Slovo „opravdu“ se opakuje dvakrát a vsuvka končí „—,“.
- **Nové znění:**
```
Nejisté zůstávají čtyři věci: kdy skončí beta, jestli Seznam AI opravdu mají všichni přihlášení (květnová tisková zpráva to tvrdí, nedatovaná stránka o betě slibuje rozšíření na všechny „v nejbližších měsících“), jestli do konce roku 2026 přibudou Mapy.com, Kupi.cz, Sauto.cz a Horoskopy a podle čeho asistent vybírá zdroje. Nápověda nemá datum a místy si odporuje (časté dotazy vedou Firmy.cz a Sreality.cz mezi napojenými službami, stránka o betě mezi budoucími), takže než se podle ní rozhodnete, ověřte si její aktuální znění. Pro většinu firem z toho plyne: mít v pořádku základ pro Seznam, sledovat vlastní data a strategii stavět na kanálech, které prokazatelně přinášejí návštěvy a konverze.
```

### [TIP] 16: Výzva k akci je jedna věta o 46 slovech a „robot Seznamu“ je dvojznačné
- **Místo:** clanek.mdx ř. 179.
- **Proč:**
  - Produkt, cena i rozsah sedí na audit.ts (ř. 99–100, 250, 486–487, 293) a cena stojí mimo text odkazu.
  - Stačí větu rozdělit a robota pojmenovat jako audit.ts (Seznam-Extended).
- **Nové znění:**
```
V **[Auditu AI viditelnosti](/audit/)** za **3 600 Kč bez DPH** projdeme, jestli k vám smějí roboti Seznamu včetně Seznam-Extended, které zákazy pro AI máte nastavené a jak vás Seznam AI zmiňuje na vzorku dotazů. Zkontrolujeme i údaje na Firmy.cz a viditelnost v ChatGPT, Perplexity a Přehledu od AI.
```

### [TIP] 17: ř. 45 a ř. 181 mají zbytek po nálezu 10 a nesouhlasí v datech čtení
- **Místo:** clanek.mdx ř. 45 a ř. 181.
- **Proč:**
  - Obě místa uvádějí „dokumentaci (protokolu) IndexNow“. Po nálezu 10 článek z indexnow.org nic necituje ani na něj neodkazuje; ř. 142 už vede jen na stránku nápovědy Seznamu „Protokol IndexNow“.
  - ř. 45 řadí všechny tiskové zprávy ke stavu k 23. 11. 2026. Patička na ř. 181 přitom uvádí, že zprávy z listopadu 2025 a května 2026 autor četl 14. 10. 2026.
  - „jsem četl k 14. 10. 2026“ je kostrbatá vazba.
- **Nové znění ř. 45:**
```
Vycházím z nápovědy Seznam AI, nápovědy Vyhledávání a Skliku, tiskové zprávy z 15. 10. 2026 a dat StatCounteru ve stavu k 23. 11. 2026; starší tiskové zprávy, blog Seznamu a smluvní podmínky Newsfeedu jsem četl 14. 10. 2026. Seznam AI jsem netestoval a do Seznam Webmasteru ani Skliku jsem se nepřihlašoval.
```
- **Nové znění ř. 181:**
```
*Transparentně: Stav k 23. 11. 2026 podle nápovědy Seznam AI, nápovědy Vyhledávání a Skliku, tiskové zprávy Seznamu z 15. 10. 2026 a dat StatCounteru; tiskové zprávy z listopadu 2025 a května 2026, blog z 25. 6. 2026 a smluvní podmínky Newsfeedu jsem četl 14. 10. 2026. Seznam AI jsem netestoval. Jak vzniká obsah tohoto webu, popisujeme na [stránce autora](/autor/kamil/).*
```

### [TIP] 18: Poslední věta krátké odpovědi má za podmět Seznam AI
- **Místo:** clanek.mdx ř. 4, „Pro většinu firem zůstává doplňkem ke Googlu.“
- **Proč:** Věta se gramaticky vztahuje k Seznam AI. Úvod na ř. 43 i data StatCounteru přitom mluví o vyhledávači Seznam. Po úpravě má odpověď 59 slov.
- **Nové znění poslední věty:**
```
Vyhledávač Seznam zůstává pro většinu firem doplňkem ke Googlu.
```

### [TIP] 19: Nadpis na ř. 77 nese v `<strong>` upoutávku místo pointy
- **Místo:** clanek.mdx ř. 77.
- **Proč:**
  - Na kotvy článku žádná stránka webu neodkazuje (grep `seznam-cz-ai-vyhledavani/#` v src/ nic nenašel), takže změna nadpisu je bezpečná.
  - Navržený nadpis nejmenuje zdroje, takže nevyrobí nový případ vady z nálezu 1.
- **Nové znění:**
```
## Odkud <span class="hl">Seznam AI</span> čerpá — <strong>firma ovlivní hlavně web, feed a zápisy ve službách Seznamu</strong>
```

## Co je v pořádku
- **Titulek, popis, krátká odpověď:** titulek má 39 znaků a klíčové slovo vepředu. Rozhodnutí ho neměnit (research.md ř. 8) je při pozici 7,9 rozumné. Description má 155 znaků. Krátká odpověď má 57 slov, začíná definicí a dává smysl sama o sobě.
- **Nadpisy:** všech 8 H2 má `<span class="hl">` i `<strong>`. Titulky kroků ve Stepperu se vykreslují jako H3 a jsou prostý text.
- **Jazyk:**
  - Regexy slovníku nenašly nic v textu pro čtenáře. Hlásí jen názvy komponent (`Insight`, atribut `fix`).
  - Uvozovky jsou všude české.
  - Seznam AI je všude v mužském rodě a nesklonné.
- **Nový nadpis a FAQ „SEO pro Seznam.cz“:** nadpis „SEO pro Seznam.cz a Seznam AI — šest kroků“ a FAQ „Je SEO pro Seznam.cz jiné než pro Google?“ sedí na dotazy typu „seo seznam.cz“. Téma článku nepřebíjejí, titulek, krátká odpověď a ostatní H2 zůstávají u Seznam AI. FAQ 5 potřebuje jen začátek, který dává smysl bez otázky (nález 5).
- **Výzva k akci:** název Audit AI viditelnosti, cena 3 600 Kč bez DPH a rozsah odpovídají audit.ts. Cena stojí mimo text odkazu.
- **Tón:** bez slibů. Formulace jako „kroky níž mohou zvýšit šanci, nic nezaručují“ a „Seznam tvrdí… zvenku se to ověřit nedá“ jsou v pořádku, stejně jako poctivý odstavec o tom, kdy Seznam prioritou není.

## Stav vypořádání kola 1
- **Ověření:** všech 18 nálezů označených „Zapracováno“ jsem prošel v clanek.mdx: frontmatter, krátká odpověď, FAQ, tělo, tabulka, Stepper, Checklist, Mistake a Insight.
- **Bez zbytku sedí 17 nálezů.**
  - Hledání starých formulací nic nenašlo: „hlavní zdroj“, „drží“, „kolem 13 %“, čísla 15,05 / 13,07 / 5,23, „oznámení z“, „lidí“, „do konce roku“ bez roku ani „od října“.
  - Čísla StatCounteru sedí s exportem CSV: srpen 15,79 %, září 14,96 %, říjen 13,11 % / 80,07 % / 5,19 %.
- **Nález 1:** zbytek zůstal v Checklistu na ř. 148, viz BLOCKER 1.
- **Nálezy 10 a 18** autor doložil jiným zdrojem, než navrhlo kolo 1. To přijímám: nápověda Seznamu je pro tvrzení o Seznamu silnější doklad a podmínku zachovává (stažení ani indexace nejsou zaručené). Zbývá jen „dokumentace (protokolu) IndexNow“ na ř. 45 a 181, která už nic nedokládá (TIP 17).
- **Nález 13:** nápověda Skliku je doložená a patička data čtení rozlišuje. ř. 45 ale dál řadí všechny tiskové zprávy ke stavu k 23. 11. 2026. Nejde o stejnou vadu, proto jen TIP 17.
- **Nález 15:** kolo 1 navrhlo „nástroj je v betě“, v textu zůstalo jen „je v betě“ a podmětem se gramaticky stala nápověda (TIP 10).
- **Nezapracované nálezy:** žádné. Prázdná tabulka ve vypořádání odpovídá skutečnosti.
- **Údaje ve vypořádání sedí:**
  - krátká odpověď 57 slov, description 155 znaků, 7 FAQ;
  - na kotvy článku žádná stránka v src/ neodkazuje;
  - řádek plánu `seznam ai nove sluzby do konce roku` existuje (obsahovy-plan.csv ř. 291).
