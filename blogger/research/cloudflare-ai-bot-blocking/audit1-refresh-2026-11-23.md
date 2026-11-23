# Audit kola 1 (fakta) — refresh `cloudflare-ai-bot-blocking` (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit1.md` (auditor-system + osa fakta),
> protože Codex měl vyčerpaný limit do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Ověřoval jen proti
> textům zdrojů ve složce úkolu `Dokumenty/CODEX/z-clauda/2026-11-23-audit1-cloudflare-ai-bot-blocking/`
> (dokumentace a změnový log Cloudflare, blogy 1. 7., 30. 9. a 4. 11. 2026, nápověda Search Console, `audit.ts`).
> Čísla řádků „ř.“ míří na verzi článku před opravami. Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Data, názvy a mechanika Disallow + Bot Preference Sync (BPS) odpovídají podkladům v `zdroje/`. Problém je ve slibech a závěrech, které jdou dál, než podklady unesou: trénink se prý „odmítne“, Googlebot „zůstane“ a 15. 9. se prý „změnilo méně“. Druhý problém je kontrolní krok 5: blokaci Googlebotu v logu serveru neodhalí. Odkazy „ř.“ míří na řádky souborů ve složce auditu. Cizí zdroje jsou parafrázované, v závorce je soubor a řádek.

## BLOCKERY

**1. [BLOCKER] Googlebot jako smíšený robot bez podmínky „podle oznámení“ (bod b)**
- **Místo:** `clanek.mdx` ř. 4 (answer) a ř. 44: „blokace podle Cloudflare zasáhne i smíšené roboty, mezi které řadí Googlebot“. `vydelavat-na-ai-robotech.mdx` ř. 185: „blokace Training podle Cloudflare zasáhne i smíšené roboty včetně Googlebotu“. Slaběji ř. 3 (description): „může podle Cloudflare zasáhnout i Googlebot“.
- **Proč:** Googlebot, Applebot a Bingbot jmenuje jen blog z 1. 7. 2026, a to jako změnu ohlášenou na 15. 9. (blog-cid.txt ř. 865). Dokumentace (docs-block-ai-bots.txt ř. 21, 45) i změnový log (changelog-bots.txt ř. 212) mluví jen obecně o smíšených robotech. Tabulka podmínek v research.md tuto podmínku má. Přítomné „řadí“ v krátké odpovědi, kterou AI cituje samostatně, vydává ohlášení za ověřený současný stav. Jinde v článku je podmínka v pořádku: FAQ 2, ř. 81, 84, 133, 150, ve vydělávat FAQ a ř. 118.
- **Oprava answer a ř. 44 (60 slov):** „Cloudflare řídí AI roboty podle chování: Search, Agent a Training. U každého zvolíte, jestli ho blokovat všude, jen na stránkách s reklamou, nebo povolit. Blokace Training zasáhne i smíšené roboty, podle oznámení z července 2026 i Googlebot. Kdo chce trénink omezit a Googlebot pustit, zvolí u Training Disallow se zapnutým Bot Preference Sync; smíšeným robotům zůstane jen žádost v robots.txt.“
- **Oprava description (156 znaků):** „Cloudflare dělí AI roboty na Search, Agent a Training. Blokace Training může podle oznámení Cloudflare vzít i Googlebot. Jak trénink omezit a Google nechat.“
- **Oprava vydělávat ř. 185:** „…zasáhne i smíšené roboty, podle oznámení z července 2026 i Googlebot…“
- **Ř. 81:** doplnit, že oznámení to ohlásilo od 15. 9. U výchozích hodnot článek o stejném datu pochybuje, u jmen robotů ne. Dokumentace potvrzuje mechanismus, ne jména.

**2. [BLOCKER] „Odmítnout trénink“ přes Disallow + BPS: chybí, že smíšení roboti projdou a zákaz je pro ně jen dobrovolný (bod c)**
- **Místo:** ř. 3 „Jak trénink odmítnout“; ř. 4/44 „Kdo chce odmítnout trénink a zůstat v Googlu…“; ř. 25 „Kdo o trénink nestojí…“; ř. 60; H2 ř. 87; ř. 127 „zákaz zapíše do robots.txt a zároveň ho vynutí na Cloudflare“; ř. 158. Ve vydělávat ř. 29, 125 a 185 („trénink odmítejte…“).
- **Proč:**
  - Disallow s BPS blokuje na hraně jen tréninkové roboty a smíšené vynechává (docs ř. 35, managed-robots-txt.txt ř. 88).
  - Tytéž smíšené roboty ale Cloudflare sám řadí i k tréninku (docs ř. 21).
  - U nich tedy zbývá jen robots.txt (Google-Extended, Applebot-Extended, Content-signal ai-train=no), který je podle dokumentace dobrovolný (docs ř. 35, managed ř. 14).
  - Tabulka podmínek tuto podmínku uvádí, článek ji ale vztahuje jen na případ bez BPS (ř. 95).
  - Věta na ř. 127 „vynutí na Cloudflare“ pro smíšené roboty neplatí.
- **Oprava:**
  - „Odmítnout“ nahradit slovem „omezit“, jak už to dělá ř. 115.
  - Na ř. 93 doplnit: „Cloudflare je přitom řadí i k tréninku, takže u nich zůstává jen žádost v robots.txt (v ukázce tokeny Google-Extended a Applebot-Extended), kterou dodržet nemusí.“
  - Ř. 127: „…a u čistě tréninkových robotů ho vynutí na Cloudflare; smíšeným zůstane jen žádost.“
  - Stejnou úpravu udělat ve vydělávat ř. 29, 125 a 185.

**3. [BLOCKER] Rozcestník a krok 4: chybí, že Googlebot zasáhne i blokace Search a volba „Block on pages with ads“ u Training (bod c)**
- **Místo:** ř. 116 „Záleží vám, aby vás AI nástroje mohly citovat? Pak je Search ta kategorie…“; ř. 117 „Vyděláváte hlavně reklamou? Volba „blokovat jen na stránkách s reklamou“ existuje přesně pro tenhle případ.“; krok 4 na ř. 104; definice Search na ř. 23 a 71.
- **Proč:**
  - Podle oznámení Googlebot, Applebot a Bingbot kombinují Search a Training a posuzují se podle nejpřísnějšího pravidla (blog-cid.txt ř. 865).
  - Do Search podle Cloudflare patří i procházení pro výsledky vyhledávačů (blog-cid.txt ř. 875). Každá politika platí pro roboty s daným chováním (docs ř. 22).
  - Kdo podle rozcestníku zavře Search, protože o AI citace nestojí, zablokuje podle oznámení i Googlebot.
  - „Block on pages with ads“ u Training zasáhne smíšené roboty právě na stránkách, které vydělávají (docs ř. 29–30, 45). Krok 2 (ř. 102) tento stav správně označuje k nápravě, rozcestník ho bez výhrady doporučuje.
  - Dokumentace navíc mluví o stránkách, kde reklamu rozpozná Cloudflare.
- **Oprava ř. 116:** „…Pak Search nezavírejte. Podle oznámení z července 2026 do něj patří i Googlebot, Applebot a Bingbot, takže blokace Search může vzít i klasické vyhledávání.“
- **Oprava ř. 117:** „…u Training ale tato volba na stránkách, kde Cloudflare rozpozná reklamu, zasáhne i smíšené roboty (podle oznámení i Googlebot). Training řešte volbou Disallow s Bot Preference Sync.“
- **Krok 4:** doplnit stejnou větu o Search.

**4. [BLOCKER] Závěry k 15. 9. jsou silnější, než podklady unesou (bod a)**
- **Místo:** ř. 54 „nasazení ohlášených výchozích hodnot Cloudflare nepotvrdil“; ř. 27 (FAQ 3) „Méně, než Cloudflare v červenci ohlásil.“; H2 ř. 48 „a co z ohlášení neplatí“; na ř. 27 a 54 chybí upřesnění, o který změnový log jde.
- **Proč:**
  - Fakta sedí: dokumentace (aktualizace 2. 11.) uvádí u nových domén Allow pro všechny tři kategorie (docs ř. 44). Změnový log Bots k 15. 9. záznam nemá (mezi 31. 8. a 16. 9. nic není).
  - Z toho ale neplyne, že to „Cloudflare nepotvrdil“. Autor prošel jen dokumentaci a změnový log Bots. AI Crawl Control má vlastní změnový log (docs-aicc.txt ř. 94), který v podkladech není.
  - Neplyne z toho ani, co se 15. 9. stalo: dokumentace z 2. 11. popisuje dnešní stav.
  - Proti „méně“ mluví blog ze 4. 11.: při přidání nové zóny se Cloudflare ptá, jestli web vydělává reklamou, a podle odpovědi upraví doporučené politiky (blog-personal-agents.txt ř. 851, docs ř. 48).
  - Věta „ohlášené výchozí hodnoty v dokumentaci nejsou“ (ř. 56, 136) naopak sedí.
- **Oprava ř. 54:** „Ve změnovém logu Bots k tomuto dni záznam není | potvrzení nasazení jsem v dokumentaci ani ve změnovém logu Bots nenašel“.
- **Oprava FAQ 3:** začít „Doložit to neumím.“, psát „ve změnovém logu Bots“ a doplnit větu o onboardingu podle blogu ze 4. 11.
- **H2:** „…a co z ohlášení dokumentace neuvádí“.
- **Chyba 02 (ř. 136):** doplnit, že novou doménu může nastavit už onboarding.

**5. [BLOCKER] Krok 5: v logu serveru se blokace Googlebotu neukáže (bod e)**
- **Místo:** ř. 105 „…nebo v logu serveru zkontrolujte, že Googlebot dostává odpověď 200, ne 403.“ Navazuje ř. 109 s odkazem na článek o serverových lozích.
- **Proč:**
  - Cloudflare blokuje na hraně (docs ř. 35), tedy dřív, než požadavek dojde na server. Článek to sám říká na ř. 92 a 125.
  - Zablokovaný požadavek proto v logu serveru nebude s kódem 403, bude chybět úplně. Stejný princip popisuje nápověda (crawlstats-cs.txt ř. 134).
  - Čtenář tak dostane falešné „v pořádku“ právě u chyby, před kterou článek varuje.
  - Že blokace vrací 403, v podkladech není.
- **Oprava:** „V logu serveru zablokované požadavky neuvidíte, Cloudflare je zastaví dřív. Hlídejte tam, jestli Googlebot chodí stejně často; prudký pokles znamená blokaci.“

**6. [BLOCKER] Search Console: tvrzení o rozhraní bez označení, že jde o nápovědu, a bez podmínky dostupnosti (bod e)**
- **Místo:** ř. 105 „V Search Console v přehledu Statistiky procházení (Nastavení služby)…“; také ř. 132 a 158.
- **Proč:**
  - Řádek „Rozhraní (UI)“ je prázdný, autor se nepřihlašoval ani do Search Console (research.md ř. 34).
  - Výhrady na ř. 46 a 152 se týkají jen administrace Cloudflare, takže u Search Console čtenář nepozná, že popis pochází z nápovědy.
  - Chybí podmínka: přehled je jen pro služby na kořenové úrovni (crawlstats-cs.txt ř. 22).
  - Kód 403 tam není samostatná položka, spadá pod „Jiná chyba klienta (4XX)“ (ř. 130).
- **Oprava ř. 105:** „Podle nápovědy Search Console je přehled Statistiky procházení v Nastavení služby, jen pro služby typu Doména nebo s předponou URL na kořenové úrovni. V Odpovědích při procházení má převažovat OK (200) a nemá přibývat Jiná chyba klienta (4XX).“
- **Oprava ř. 152:** „…do administrace Cloudflare ani Search Console jsem se nepřihlašoval.“

**7. [BLOCKER] „Ne podle jednotlivých jmen robotů“ je v rozporu s dokumentací**
- **Místo:** ř. 46 „návod ve stylu „zablokujte Bytespider a povolte GPTBot“, je zastaralý… ne podle jednotlivých jmen robotů“; ř. 52 „ne o jménech robotů“; ř. 23 „místo jmen robotů“; H2 ř. 63.
- **Proč:** AI Crawl Control dál umožňuje povolit nebo blokovat jednotlivé roboty, a to na všech plánech (docs-aicc.txt ř. 11, 17). Stránka robots.txt setting z 2. 11. ho k vynucení blokace jednotlivých robotů výslovně doporučuje (managed-robots-txt.txt ř. 19). Verze z 2. 8. tuto možnost sama popisovala. Věta stojí v prvních sto slovech.
- **Oprava ř. 46:** „…takový návod už nestačí. Cloudflare dnes nabízí i řízení podle kategorií chování; jednotlivé roboty jde podle dokumentace dál blokovat v AI Crawl Control.“ Ř. 52 a 23 upravit podle toho („vedle jmen“, „nejen jména“).

**8. [BLOCKER] CTA slibuje u placeného auditu obsah, který podle kanonického popisu nemá**
- **Místo:** ř. 162 „…jestli vám z AI nástrojů vůbec někdo chodí… projde měření i viditelnost…“
- **Proč:** Název a cena sedí (audit.ts ř. 56, 64–70). Podle audit.ts ř. 230–231 ale měření v auditu od 16. 9. 2026 záměrně není a prodává ho monitoring (ř. 491). Návštěvnost z AI nástrojů není ani ve vrstvách auditu (ř. 233–279), ani v popisu služby (ř. 61). Přístup AI robotů v auditu je. Formulace zůstala z verze 2. 8., tedy z doby před změnou produktu.
- **Oprava:** „Pokud nejdřív potřebujete zjistit, jestli k webu mají přístup AI roboti a co o vás dnes říkají AI odpovědi, **[Audit AI viditelnosti](/audit/)** za 3 600 Kč bez DPH to projde a dá vám prioritní seznam úprav.“

## WARNINGY

**9. [WARNING] Vynucení na Cloudflare je popsané absolutně**
- **Místo:** ř. 92 „nedostanou, ani když robots.txt ignorují“; ř. 125 „Robot se k obsahu nedostane…“.
- **Proč:** Politiky platí pro ověřené roboty s daným chováním a pro odpovídající neověřené (docs ř. 22). Robot, kterého Cloudflare nerozpozná, projde. Článek sám v chybě 03 píše, že user-agent si napíše kdokoli.
- **Oprava:** „…zablokuje roboty, které Cloudflare jako tréninkové rozpozná…“.

**10. [WARNING] Disallow bez BPS: dvě stránky dokumentace si odporují**
- **Místo:** ř. 95 „Bez zapnutého Bot Preference Sync je Disallow jen žádost v robots.txt…“
- **Proč:** Podle stránky robots.txt setting se spravované direktivy přidají jen se zapnutým BPS, jinak zůstane robots.txt beze změny (managed ř. 13, 16). Stránka policies to formuluje jinak (docs ř. 33).
- **Oprava:** napsat, že Disallow má podle stránky o robots.txt smysl jen se zapnutým BPS, nebo větu vypustit.

**11. [WARNING] Co přesně se přidá do robots.txt: chybí Content Signals (bod c)**
- **Místo:** ř. 91, 33.
- **Proč:** Cloudflare před robots.txt vkládá i Content-signal (search=yes, ai-train=no, use=reference) s textem o výhradě práv podle čl. 4 směrnice EU 2019/790 (managed ř. 23, 31–54, 114). Search Console u toho může hlásit nerozpoznanou syntaxi; Cloudflare podle dokumentace dopad na procházení nepozoroval (ř. 116).
- **Oprava:** doplnit k ř. 91 jednu odrážku.

**12. [WARNING] Krok 3: starý přepínač nemusí být vidět v nastavení Training**
- **Místo:** ř. 103 „…ověřte, jak je dnes nastavený Training.“
- **Proč:** Oznámení uvádí Block AI bots jako samostatnou cestu vedle nových voleb (blog-cid.txt ř. 865). Dokumentace z 2. 11. ho nezmiňuje.
- **Oprava:** „Ověřte, jestli je pořád zapnutý; podle oznámení blokuje smíšené roboty i on. Kde ho dnes najdete, dokumentace k 2. 11. neuvádí. Výsledek ověří krok 5.“

**13. [WARNING] Pay Per Use je popsaný nepřesně (bod d)**
- **Místo:** ř. 55 „vydavatel ji přijme“; „po dohodě s jednotlivými kupci“.
- **Proč:** Vydavatel nabídku přijme, nebo odmítne. Cenu stanoví kupec, použití sám hlásí a Cloudflare mu účtuje a vydavateli platí měsíčně (blog-ppu.txt ř. 836, 858, 860). Protinávrh ceny je teprve v plánu (ř. 870). V betě Cloudflare pracuje přímo s kupci a s přihlášenými vydavateli (ř. 868).
- **Oprava:** přepsat podle toho a slova „po dohodě“ vypustit.

**14. [WARNING] Chybí možnost odmítnout zářijovou změnu**
- **Místo:** ř. 53, 60, FAQ 3.
- **Proč:** Do 15. 9. šlo změnu v nastavení odmítnout a potvrdit, že majitel nechce změny u smíšených robotů (changelog ř. 212, blog-cid.txt ř. 866). research.md to má v hlavičce „Co je ověřeno a čím“ (Z16), článek ani tabulka podmínek ne.
- **Oprava:** doplnit závorku do ř. 53 a jednu větu do FAQ 3.

**15. [WARNING] „Jmenuje jen červencové oznámení“**
- **Místo:** ř. 150.
- **Proč:** Cloudflare podle změnového logu zveřejňuje zařazení robotů v adresáři robotů a agentů na Cloudflare Radar (changelog ř. 217). Autor ho kvůli ochraně proti robotům neověřil (research.md ř. 35).
- **Oprava:** „…z mých podkladů jmenuje jen červencové oznámení; adresář na Cloudflare Radar, kde Cloudflare zařazení zveřejňuje, jsem ověřit nemohl.“ Čtenář si tam zařazení Googlebotu může ověřit sám.

**16. [WARNING] FAQ 2 připisuje dokumentaci doporučení, které v ní není**
- **Místo:** ř. 25 „má podle dokumentace volit…“.
- **Proč:** Dokumentace jen popisuje, co volba dělá. O Googlu ani o tom, kdo má co volit, nepíše.
- **Oprava:** „Podle dokumentace tato volba smíšené roboty z blokace na hraně vynechává, proto je pro weby, kterým záleží na Googlu, rozumnější než Block; smíšeným robotům ale zůstane jen žádost v robots.txt.“

**17. [WARNING] Vydělávat: opravy k 15. 9. sedí, ale změněné řádky a nové `updated` jsou v rozporu s blogem z 30. 9. (bod f)**
- **Místo:** `vydelavat-na-ai-robotech.mdx` ř. 11 `updated: "2026-11-23"`; ř. 125 „a zatím nikam nevede“ (zůstalo ve změněném řádku); ř. 116 „placení je zatím na čekací listině“ (uvádí změněný ř. 118); nezměněný answer na ř. 4 („na čekací listině“, „testuje s pěti partnery“, „ve stablecoinech“). `clanek.mdx` ř. 55 sem nově posílá čtenáře kvůli Pay Per Use.
- **Proč:** Podle blogu z 30. 9. je Pay Per Use v betě a vydavatel dostává peníze měsíčně přes připojený platební účet; stablecoiny blog u Pay Per Use nezmiňuje. Monetization Gateway je od téhož dne v betě (blog-ppu.txt ř. 835–836, 860, 874).
- **Oprava:**
  - Ř. 125: „…a Pay Per Use je od 30. 9. 2026 teprve v betě“.
  - Ř. 116: „Zatímco placení je zatím v betě…“.
  - Refresh článku vydělávat zapsat do fronty.
  - Do té doby v `clanek.mdx` ř. 55 neslibovat, že tam čtenář najde víc o Pay Per Use.

**18. [WARNING] Vydělávat ř. 121: tvrzení, co se 15. 9. stalo**
- **Místo:** „Existující doméně se 15. září výchozí hodnoty samy nepřepnuly“.
- **Proč:** Autor to nepozoroval, podklady nesou jen rozsah oznámení (changelog ř. 212).
- **Oprava:** „Ohlášené výchozí hodnoty se podle oznámení existujících domén netýkaly; …“

## TIPY

19. **[TIP]** ř. 93 „To je celý rozdíl proti volbě Block“: lépe „hlavní rozdíl“. Se zapnutým BPS zapisuje direktivy do robots.txt i volba Block (managed ř. 13).
20. **[TIP]** Krok 1 (ř. 101): filtr se podle dokumentace jmenuje „Bot traffic“ (docs ř. 40). Na ř. 57 místo „v menu“ psát „v Security → Settings“.
21. **[TIP]** Datace dokumentace: ř. 46 uvádí „k 23. 11.“, jinde „k 2. 11.“. Lépe „dokumentace aktualizovaná 2. 11., načtená 23. 11.“ Řádek tabulky 2. 11. (ř. 56) je datum úpravy stránky, ne událost.
22. **[TIP]** FAQ 5: doplnit, že spravovaný robots.txt, tedy doporučená cesta, je na všech plánech (managed ř. 132).
23. **[TIP]** FAQ 7 a krok 4: změna celé kategorie Agent přepíše nastavení jednotlivých osobních agentů (docs ř. 47). Zdůvodnění „aby návštěvníci…“ je ve změnovém logu smysl nového nastavení (ř. 133), ne důvod doporučit Allow.
24. **[TIP]** ř. 118 „Tohle je nejčastější stav“ nemá podklad; stačí „častý stav“.
25. **[TIP]** Ve zdrojích (ř. 164) chybí dokumentace AI Crawl Control, i když ji ř. 109 zmiňuje. Stránka o robots.txt se ve skutečnosti jmenuje „robots.txt setting“.

## Co je v pořádku

- Data a názvy sedí:
  - 1. 7.: tři chování pro všechny plány včetně Free.
  - 30. 9.: Pay Per Use v betě.
  - 4. 11.: přejmenování z Configure AI bot policies a nastavení osobních agentů.
  - Cesta Security → Settings odpovídá dokumentaci.
- Výchozí Allow u nových domén podle dokumentace a chybějící záznam k 15. 9. ve změnovém logu Bots jsou fakta.
- Formulace „u každé domény“ stojí na obecné definici Training (docs ř. 21), ne jen na ř. 45 pod nadpisem o nových doménách.
- Mechanika Disallow + BPS sedí: spravované zákazy, ukázka tokenů, blokace na hraně, vynechání smíšených robotů.
- Osobní agenti přebírají politiku Agent a Cloudflare doporučuje Allow. Ověřeno.
- Budoucí čas k 15. 9. zmizel, rok je ukotvený a žádné neukotvené „letos“ v textu není. Cena 3 600 Kč bez DPH sedí.
- Cesta (Nastavení služby) > Statistiky procházení odpovídá nápovědě.

## Co chybí v tabulce podmínek (research.md)

- Blokace Search a volba Block on pages with ads u Training zasáhnou podle oznámení Googlebot.
- Onboarding nových zón (blog 4. 11.).
- Možnost odmítnout změnu do 15. 9.
- Spravovaný robots.txt jen se zapnutým BPS.
- Vynucení platí jen pro roboty, které Cloudflare rozpozná.
- Statistiky procházení jsou jen pro služby na kořenové úrovni.
- Blokace na hraně se v logu serveru neukáže.
- AI Crawl Control dál umožňuje blokovat jednotlivé roboty.

## Mapa k bodům (a)–(f)

- **(a)** Body 4 a 18. Závěr „Cloudflare nepotvrdil“ přestřelil. Věta „ohlášené výchozí hodnoty v dokumentaci nejsou“ sedí.
- **(b)** Bod 1, k tomu bod 15. Jména robotů stojí jen na blogu z 1. 7. Podmínka „podle oznámení“ chybí v answer, v úvodu a ve vydělávat ř. 185.
- **(c)** Body 2, 3, 9, 10, 11 a 19. Doslovné „určitě projde“ v článku není a krok 5 má ověření. Answer s „zůstat v Googlu“ a ř. 127 ale slibují víc. Googlebot navíc může zablokovat i blokace Search a starý přepínač.
- **(d)** Body 13, 20, 22 a 23. Free plán, přejmenování 4. 11. a cesta v nastavení sedí.
- **(e)** Body 5 a 6.
- **(f)** Body 1, 2, 17 a 18. Věcně je oprava ve vydělávat v souladu s novým zněním článku.
