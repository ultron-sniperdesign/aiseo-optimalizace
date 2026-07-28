## BLOKER

1. **Příliš tvrdé / definitivní v `answer`**
   > `Nejde je proto přes robots.txt selektivně řídit ani je odlišit podle user-agentu.`  
   „Odlišit podle user-agentu“ je v tomhle znění moc definitivní. Pro Atlas/Comet podle popsaných pozorování ano, ale text obecně mluví o „AI prohlížečích“. Bez omezení scope je to širší, než unese.  
   **Lepší:** „U dnes popsaných případů (Atlas, Comet) je podle user-agentu selektivně neodlišíte.“

2. **Absolutní tvrzení ve STATS**
   > `label: "kam v analytice spadne návštěva z AI prohlížeče, když chybí referrer"` + `value: "Direct"`  
   Moc tvrdé. V textu správně píšete „Direct, nebo (not set)“. Metadata to zplošťují na jistotu.  
   **Lepší:** `value: "Direct / (not set)"` nebo měkčí label.

3. **FAQ přehání u `Signature-Agent`**
   > `v agentním režimu podle podepsané hlavičky Signature-Agent. Spolehlivé to ale není`  
   Tady je vnitřní rozpor. Pokud je hlavička podepsaná a validovaná, právě to je nejspolehlivější část celé skládanky. Nespolehlivé je chování; ne podepsaná identita.  
   **Lepší:** „Nepřímo podle chování nespolehlivě; v agentním režimu naopak spolehlivěji podle podepsané hlavičky…“

4. **Reklamní sekce pořád lehce ujíždí k sugesti**
   > `umí na stránce klikat způsobem, který se od člověka nedá odlišit — včetně kliků na placenou reklamu`  
   „nedá odlišit“ je moc silné a technicky skoro neobhajitelné bez kvalifikace. Reklamní systémy dělají právě pokusy o odlišení podle širších signálů.  
   **Lepší:** „může na úrovni samotné stránky působit podobně jako člověk“ nebo „pro provozovatele webu může být těžko rozeznatelný“.

## DOPORUČENÍ

1. **Description je pořád ostřejší než článek**
   > `Proč na ně neplatí robots.txt`  
   Po textu už víme, že přesnější je „nejdou jím selektivně řídit/oddělit“. Metadata jsou tvrdší než tělo článku.  
   **Upravit**, jinak search snippet vrací starý problém.

2. **Článek už něco říká, ale místy se zbytečně brzdí opakováním opatrnosti**
   > `může`, `často`, `jedno z možných vysvětlení`, `není důkaz`, `ověřte si`, `chování se mění`  
   Opatrnost je správně, ale místy se vrství tak často, že oslabuje hlavní sdělení. To hlavní přitom konkrétní je a můžete si za tím stát:
   - Atlas/Comet se podle pozorování hlásí jako Chrome
   - selektivní blokace přes robots.txt nedává smysl
   - problém je hlavně v atribuci a interpretaci Directu
   - u agentního režimu existuje identifikační stopa
   Doporučení: v závěru a ANSWER ubrat hedging a nechat tvrdé jen to, co je opravdu doložené.

3. **Nová sekce s kontrolami je použitelná, ale ne úplně dotažená**
   > `Sledujte podíl Directu, ne jeho absolutní výši`  
   > `Porovnávejte Direct s brandovým vyhledáváním`  
   > `Oddělte si nové a vracející se návštěvníky`  
   To je praktické. Chybí ale minimální instrukce „za jaké období“ a „co je signál“. Jinak to zní dobře, ale junior neví, co udělat zítra.
   **Doplnit třeba jednou větou:** „Hledejte zlom proti 4–8 předchozím týdnům po očištění o sezónnost a kampaně.“

4. **„Jediná spolehlivá identifikace“ je moc silné**
   > `Jediná spolehlivá identifikace, kterou dnes máte`  
   Pokud zůstáváte opatrní všude jinde, tady je to zbytečně absolutní. Lepší „nejčistší dnes popsaná“ nebo „prakticky použitelná tam, kde je nasazená“.

## DROBNOST

1. **Lehký logický šev**
   > `Nejde je spočítat`  
   > `Jak to poznat, když to opravdu potřebujete`  
   Není to vyložený rozpor, ale první věta je moc kategorická vůči pozdější výjimce.  
   **Lepší:** „Nejde je spolehlivě spočítat plošně“ / „mimo agentní režim“.

2. **FAQ vs tělo článku – scope**
   > `AI prohlížeče jako ChatGPT Atlas a Perplexity Comet...`  
   > `AI prohlížeče ... v user-agentu se hlásí jako Chrome`  
   Scope občas klouže mezi „tyhle dva konkrétní“ a „AI prohlížeče obecně“. Držet konzistentně „u dnes popsaných Atlas/Comet“.

3. **Formulace o crawleru OpenAI je trochu moc přímočará**
   > `crawler, přes který běží objevování obsahu uvnitř ekosystému OpenAI`  
   Smysl je jasný, ale je to podané jako úplný a jediný kanál. Bezpečnější: „jedním z veřejně popsaných crawlerů…“ nebo „typicky přes…“, pokud nechcete tvrdit víc, než víte.

4. **Článek po zjemnění pořád říká něco konkrétního?**
   Ano. Hlavní teze drží: **není to SEO/obsahový problém, ale problém měření a interpretace dat**. To je dost konkrétní. Jen metadata a pár FAQ odpovědí jsou pořád tvrdší než tělo.  

## Verdikt

Po opravách je to **výrazně lepší** a už to není článek složený jen z „co netvrdit“. Ale **blokery zůstávají v metadatech, STATS a jedné FAQ odpovědi**, kde je formulace zase tvrdší než samotný text. Největší riziko teď není věcné jádro článku, ale **že snippet/FAQ budou slibovat větší jistotu, než pak článek poctivě unese**.