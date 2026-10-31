# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

**Kolo 2, stav k 31. 10. 2026. Celkem 14 nálezů: 5 [BLOCKER], 8 [WARNING], 1 [TIP].**

Audit se týká jazyka, struktury, citovatelnosti, SEO, CTA a skutečného vypořádání kola 1. Věcnou kontrolu omezuji na zbytky nálezů kola 1 a nová tvrzení porovnaná s `zdroje/overeni-u-vyrobcu-2026-10-31.json`. Čísla řádků odkazují na dodaný `clanek.mdx`. Článek ani uzamčené `title` a `seoTitle` neměním a titulky neposuzuji.

## Nálezy

### 1. [BLOCKER] Oprava `udm=14` zůstala hlavně v těle; samostatně čtené odpovědi dál slibují obecně fungující řešení

**Citace a místa:** `answer`, ř. 5: „Dál pomůže neoficiální adresa s `&udm=14` jako výchozí vyhledávač prohlížeče“. FAQ 1, ř. 27: „Obejít ho jde […] neoficiální adresou s parametrem `&udm=14` jako výchozím vyhledávačem prohlížeče“. Shrnutí, ř. 235: „ho předvolí pro hledání z adresního řádku“. Persona, ř. 243: „adresa s `&udm=14` jako výchozí vyhledávač v Chromu nebo Firefoxu“. Také `description`, ř. 4, a úvodní tabulka, ř. 56.

**Problém:** Nález č. 2 kola 1 je označen za zapracovaný. Ř. 71 a 79 už správně omezují důkaz na převzatý test německého Googlu v odhlášeném Chromu a použití na adresní řádek. `answer` a FAQ omezení na adresní řádek stále nemají; shrnutí a persona zase ztrácejí omezenou platnost testu. Označení „neoficiální“ samo neříká, že české prostředí ani doporučená adresa `google.com` nebyly ověřeny. Ve shrnutí navíc zůstává nepodmíněné „předvolí“.

**Cílená oprava:** V krátké odpovědi a meta description tuto vedlejší možnost raději vypustit a soustředit je na filtr Web, telefon a režim AI. Ve FAQ ponechat nanejvýš: „Neoficiální `udm=14` je doložený převzatým testem na google.de v odhlášeném Chromu z 17. 10. 2026; pro český Google ani google.com vlastní ověření nemáme. Vlastní adresa se použije jen při hledání z adresního řádku.“ Ve shrnutí, tabulce a personě použít podmíněnou formulaci „neoficiální možnost pro hledání z adresního řádku; omezení viz část o `udm=14`“, případně opakování odstranit. Návod v těle i jeho výhrady zachovat.

**Podklad:** `audit1-vysledek.md`, nález 2; `research.md`, tabulka podmínek, řádek `udm=14`. Nejde o nové prověřování parametru, ale o nedokončené vypořádání.

### 2. [BLOCKER] Ve FAQ k režimu AI stále chybí podmínka dostupnosti obou funkcí

**Citace a místo:** FAQ, ř. 33: „Na mobilu do něj vede i doplňující otázka pod rozbaleným Přehledem od AI.“

**Problém:** Nález č. 6 kola 1 je označen za zapracovaný. Tělo na ř. 132 už obsahuje „tam, kde jsou dostupné obě funkce“, ale samostatná FAQ odpověď nikoli. Mobilní zařízení je pouze jedna ze dvou podmínek. Jde přesně o zbytkový výskyt vady, kterou mělo vypořádání odstranit.

**Cílená oprava:** V odpovědi nahradit uvedenou větu: „Na mobilu lze podle nápovědy přejít do režimu AI doplňující otázkou pod rozbaleným Přehledem od AI, pokud jsou v dané zemi a jazyce dostupné obě funkce.“

**Podklad:** `audit1-vysledek.md`, nález 6; `research.md`, tabulka podmínek; [nápověda Přehledu od AI](https://support.google.com/websearch/answer/14901683?hl=cs), jejíž dodaný text popisuje obě podmínky.

### 3. [BLOCKER] U Safari se částečné ověření stále mění v kategorický závěr

**Citace a místa:** Ř. 96: „Zadat vlastní adresu vyhledávání nápověda nepopisuje, takže `udm=14` v Safari nastavíte jen přes rozšíření třetí strany“. Ř. 126: „DuckDuckGo tam podle nápovědy DuckDuckGo vyberete“.

**Problém:** Nález č. 4 kola 1 je označen za zapracovaný, ale závěr „takže […] jen“ dál odvozuje výlučnost řešení z toho, co nápověda nepopisuje. Nové ověření dokládá existenci rozšíření, nikoli vyloučení všech ostatních cest. U výběru DuckDuckGo JSON výslovně hodnotí doklad jako částečný: aktuální nápověda Applu nabídku nevypisuje a načtená nápověda DuckDuckGo výslovně nepotvrzuje jeho přítomnost v seznamu. Věta článku jí připisuje silnější potvrzení.

**Cílená oprava:** Ř. 96 zúžit na: „Možnost zadat vlastní adresu nápověda Applu nepopisuje. Některá rozšíření třetích stran nabízejí přesměrování hledání na vlastní adresu; použití s `udm=14` jsme netestovali.“ Na ř. 126 psát: „Pokud v nabídce máte DuckDuckGo, vyberte ho a Search Assist vypněte v jeho nastavení.“ Nenutit autora odstraňovat správně doložené cesty nastavení iOS 18.2+ a iOS 17.

**Podklad:** `zdroje/overeni-u-vyrobcu-2026-10-31.json`, téma Safari, závěry o vlastní URL, rozšíření a DuckDuckGo; [příručka Applu](https://support.apple.com/cs-cz/guide/iphone/iphb719b43de/27/ios/27) a [nápověda DuckDuckGo pro Safari](https://duckduckgo.com/duckduckgo-help-pages/change-default-search-engine/safari). Přijímám nové ověření; výhrada míří na jeho nepřesný převod do článku.

### 4. [BLOCKER] Nové postupy pro prohlížeče vynechávají podmínky, které dodané ověření výslovně uvádí

**Citace a místa:** Ř. 92: „Firefox na počítači umí od verze 140 přidat vlastní vyhledávač“. Ř. 94: „Edge […] přidá vyhledávač do seznamu, když na jeho webu jednou vyhledáte z adresního řádku“. FAQ ř. 37: „doplněk […] pro Chrome a Edge“ a „V Edgi skryjete tlačítko Copilota“. Opakování doplňku v tabulce ř. 109 a na ř. 116.

**Problém:** Nové podklady obsahují omezení, která se do návodu nedostala. U Firefoxu může firemní či školní správce přidávání vyhledávačů zakázat; podmínka je i v tabulce `research.md`. Postup automatického přidání v Edgi je doložen pro počítač s Windows a web nabízející vyhledávač přes OpenSearch, nikoli libovolnou stránku. Návod pro tlačítko Copilota i doložený doplněk pro Chrome jsou pro počítač. Bez rozlišení zařízení může zejména čtenář hledající vypnutí AI na telefonu dostat neproveditelný postup. Omezení profilu a správy u Chromu je už doplněné správně; znovu je nehlásím.

**Cílená oprava:** U Firefoxu přidat jednu větu: „Ve spravované firemní nebo školní instalaci může přidávání vyhledávačů zakázat správce.“ Odstavec o Edgi začít „Edge na počítači s Windows“ a přidat „u webů, které prohlížeči nabízejí vyhledávač pomocí technologie OpenSearch“. U doplňku a Copilota ve FAQ i v přehledu označit rozsah „na počítači“. Při zkracování lze celý odstavec o Edgi z části `udm=14` vypustit: sám stejně končí přiznáním, že nápověda Microsoftu ruční adresu s `%s` nepopisuje.

**Podklad:** `zdroje/overeni-u-vyrobcu-2026-10-31.json`, témata Firefox (spravované instalace), Edge (platforma, OpenSearch, Copilot) a Bing (Chrome na počítači). Konkrétní doklady: [kód nastavení Firefoxu](https://github.com/mozilla-firefox/firefox/blob/release/browser/components/preferences/config/search.mjs), [nápověda Microsoftu k vyhledávači](https://support.microsoft.com/en-us/edge/change-your-default-search-engine-in-microsoft-edge), [řešení problémů s tlačítkem Copilota](https://learn.microsoft.com/en-us/troubleshoot/microsoft-edge/experience/copilot-icon-missing-sidebar).

### 5. [BLOCKER] Nově doložený přehled výkonu je popsaný bez výjimky pro Search Labs

**Citace a místo:** Ř. 210: „Podle jeho nápovědy ukazuje zobrazení v Přehledu od AI a v režimu AI dohromady“. Navazující Stepper, ř. 213: „V Přehledu výkonu v generativní AI si vypište stránky se zobrazeními.“

**Problém:** Nové ověření výslovně uvádí „Search Console doesn't include data from experiments in Search Labs“. Článek přitom Search Labs řeší jako jednu z hlavních situací, ale u měření nevymezuje, že tato zobrazení nejsou zahrnuta. Čtenář tak může přehledu připisovat úplnější rozsah, než dokládá nápověda. Podle zadání je vynechaná podmínka platnosti tvrzení o cizí platformě blocker. Původní nález č. 13 o nedoložených metrikách je novým zdrojem vyřešený; toto je nový nesoulad při kontrole doplněných faktů.

**Cílená oprava:** Bez rozšiřování návodu vložit za první popis rozsahu přehledu větu: „Data z experimentů v Search Labs Search Console nezahrnuje.“ Pokud se část přesune jinam, ponechat výjimku u zachovaného doporučení měření.

**Podklad:** `zdroje/overeni-u-vyrobcu-2026-10-31.json`, téma Přehled výkonu, závěr „Data z experimentů v Search Labs přehled nezahrnuje“; [nápověda přehledu](https://support.google.com/webmasters/answer/16984139?hl=en).

### 6. [WARNING] Šest ze čtrnácti H2 nesplňuje povinný formát; obecné nadpisy navíc nesdělují téma

**Citace a místa:** „Jiný vyhledávač — `<strong>bez AI ale nebývá ani ten</strong>`“ (ř. 98), „Na telefonu — `<strong>vypínač nemá ani aplikace Google</strong>`“ (119), „Než web z AI vyřadíte — `<strong>změřte, o co přijdete</strong>`“ (208), „Pro koho je `<strong>tento článek</strong>`“ (239), „Kde si nechat `<strong>poradit</strong>`“ (256), „`<strong>Související</strong>`“ (260).

**Problém:** Všem šesti chybí `<span class="hl">`. Poslední tři jsou bez konkrétního tématu či pointy i jako prostý seznam nadpisů. Samotné přidání značky kolem slova „článek“ čtenářské pravidlo nenapraví.

**Cílená oprava:** U ponechaných sekcí použít například:

- `## Jiný <span class="hl">vyhledávač</span> — <strong>AI odpovědi zkontrolujte i tam</strong>`
- `## <span class="hl">AI v Googlu na telefonu</span> — <strong>použijte filtr Web</strong>`
- `## <span class="hl">Vyřazení webu z AI</span> — <strong>nejdřív zkontrolujte data</strong>`
- `## <span class="hl">Audit AI viditelnosti</span> — <strong>plán úprav pro váš web</strong>`
- `## <span class="hl">AI ve vyhledávání</span> — <strong>další návody podle tématu</strong>`

Sekci „Pro koho je tento článek“ odstranit podle nálezu 10; pokud zůstane, potřebuje konkrétní rozcestník, například `## <span class="hl">Vypnutí AI</span> — <strong>vyberte postup pro sebe nebo svůj web</strong>`. Nadpis „Shrnutí v pěti bodech“ sice obě značky obsahuje, ale ani on nepojmenovává téma a hlavní sdělení; po přesunu uživatelského shrnutí lze použít `## <span class="hl">AI v Googlu</span> — <strong>hlavní možností je filtr Web</strong>`. H3 v dodaném článku nejsou, takže u nich porušení formátu nenacházím. Případné nové H3 pro prohlížeče a zařízení psát prostým textem.

### 7. [WARNING] Krátká odpověď má správnou délku, ale nezačíná definicí a míchá dva odlišné čtenáře

**Citace a místo:** `answer`, ř. 5: „Přehled od AI obejdete filtrem Web […] Majitel webu má přepínač v Search Console.“

**Problém:** Odpověď má **52 slov**, tedy splňuje rozsah 40–60 slov. První věta však rovnou doporučuje postup, aniž definuje funkci, a poslední věta náhle přepne od uživatelského zobrazení k vyřazení vlastního obsahu. Neříká, že rady platí také na telefonu. Chyba parametru `udm=14` je samostatně započtená v nálezu 1.

**Cílená oprava:** První větu začít „Přehled od AI je shrnutí nad výsledky Googlu…“, hned pokračovat možností filtru Web a výslovným „i na telefonu“. Zachovat rozdíl mezi nemožností vypnout Přehled od AI a nenalezením vypínače v nápovědě režimu AI. Větu pro majitele webu přesunout do rozcestníku pod úvodem; nesnažit se do 40–60 slov vměstnat i Search Console a omezený test `udm=14`.

### 8. [WARNING] Úvod odpovídá na zákaz vypnutí rychle, ale oddaluje samotný postup a cestu pro mobilní dotazy

**Citace a místa:** Ř. 50: „V Česku Google Přehled od AI spustil 20. 5. 2025.“ Ř. 52: „Než začnete něco nastavovat, ujasněte si, co vám vlastně vadí.“ Praktická instrukce „Po hledání vyberte filtr Web“ přijde až na ř. 65; mobil má vlastní sekci až na ř. 119.

**Problém:** První přibližně stovka slov těla obsahuje datování a přípravu na tabulku, ale ne jednoduchou instrukci k filtru a stručnou odpověď k režimu AI. Pro dotazy z GSC „jak vypnout ai v telefonu“ a „jak vypnout režim ai“ je hlavní cesta schovaná za dlouhou sekcí o parametru a alternativních vyhledávačích. „Co vám vlastně vadí“ zbytečně hodnotí čtenáře.

**Cílená oprava:** Datum českého spuštění přesunout ze začátku do zdrojového kontextu. Do prvního odstavce přidat konkrétní volbu „Po hledání vyberte filtr Web; nápověda tento postup uvádí pro počítač, Android i iPhone.“ Následující krátká věta má rozlišit režim AI a odkázat na příslušný oddíl. Pod úvod dát přímé odkazy na části „Telefon“, „Režim AI“, „Chrome a Firefox“ a „Vlastní web“, navázané na skutečně vytvořené kotvy. Mobilní část přesunout hned za filtr Web. Větu na ř. 52 změnit na „Vyberte, kterou funkci chcete omezit.“ Rozlišení Gemini zachovat jednou v tabulce; závěrečné „tenhle návod vám nepomůže“ na ř. 128 vypustit jako zbytečné opakování.

### 9. [WARNING] Některé FAQ odpovědi bez otázky nad nimi nedávají úplný smysl

**Citace a místa:** FAQ 1, ř. 27: „Ne. Nápověda Vyhledávání Google ho […] řadí…“; FAQ 2, ř. 29: „Ne. Přepínač v Search Labs…“; FAQ o Bingu, ř. 37: „U Bingu ano.“; FAQ o Seznamu, ř. 39: „Není.“

**Problém:** Nejvýraznější je první odpověď: objekt zájmena „ho“ zůstává jen v otázce. Ostatní začátky předpokládají ano/ne otázku, kterou samostatná citace nemusí obsahovat. Otázky samotné jsou relevantní; není důvod FAQ přestavovat ani přidávat další.

**Cílená oprava:** Začátky nahradit samostatnými tvrzeními: „Přehled od AI nelze podle nápovědy Googlu vypnout…“; „Vypnutí experimentů v Search Labs Přehled od AI nevypne…“; „AI odpovědi v Bingu lze podle popisu doplňku Microsoftu vypnout…“; „Vyhledávání Seznamu obsahuje také prvky s jazykovým modelem…“. Dále zachovat již opravené podmínky; u první a čtvrté otázky nejde o plošný zákaz negace ve FAQ, ale o doplnění pojmenovaného předmětu odpovědi.

### 10. [WARNING] Technický návod pro majitele webu přerušuje uživatelskou cestu a závěr opakuje rozcestník

**Citace a místa:** Od „Pro majitele webu: přepínač v Search Console“ (ř. 151) přes tři ukázky kódu a srovnávací tabulku až po pět kroků měření a `<AntiPersona>` (ř. 229). Teprve potom přijde „Shrnutí v pěti bodech“ (ř. 231), následované čtyřmi personami (ř. 239–254).

**Problém:** Mezi uživatelskými radami a shrnutím leží tři dlouhé sekce pro vlastníky webů: nastavení Search Console, technické omezení obsahu a plán měření. Persony na konci znovu opakují už existující rozcestník i shrnutí. To neodpovídá převaze uživatelských dotazů ani vlastnímu rozhodnutí v `research.md`, že část pro majitele má být zkrácená.

**Cílená oprava:** Uživatelské shrnutí přesunout před ř. 151 a ponechat v něm čtyři body pro hledajícího; bod pro majitele dát k jeho oddílu. `<PersonaGrid>` na ř. 241–254 odstranit celý — potřebné rozlišení už je v úvodu. Z části pro vlastníky ponechat jeden stručný oddíl s rozsahem přepínače, děděním/přepsáním podřízených vlastností, dopady a odkazem na `/blog/blokovat-ai-odpovedi-gsc/`. Výjimky pro jiné služby a dobu zpracování zachovat u tohoto vysvětlení. Podrobné příklady `nosnippet`, `max-snippet` a JavaScriptu na ř. 174–196, tabulku ř. 198–206 a celý Stepper s `<AntiPersona>` na ř. 212–229 přesunout do specializovaného návodu, který je už v článku odkazovaný. V tomto článku ponechat stručné upozornění, že direktivy mohou omezit také běžné úryvky a účinkují až po načtení a zpracování Googlem. Přesun musí zahrnout i příslušné podmínky a výjimky, aby se podrobné vysvětlení nezměnilo v nepodmíněný slib.

### 11. [WARNING] Nevysvětlené zkratky a technické formulace zhoršují srozumitelnost; jedna věta má chybný předmět

**Citace a místa:** Meta description, ř. 4: „Weby mají přepínač v GSC.“ FAQ, ř. 35: „Nastavuje se po vlastnostech“. Ř. 174: „direktivy úryvků“. Ř. 194: „Robot musí mít ke stránce přístup […] a změnu musí znovu projít a zpracovat.“ Ř. 198: „Páky vedle sebe“.

**Problém:** Zkratka GSC není v samostatné meta description vysvětlená a tonalita výslovně preferuje Google Search Console. „Vlastnost“ má v Search Console zvláštní význam, který FAQ nepřibližuje. „Direktivy úryvků“ je zhuštěný technický obrat. Robot znovu prochází stránku, nikoli změnu; zde nejde o stylistickou preferenci. „Páky vedle sebe“ neoznačuje obsah tabulky tak přesně jako popis ovládání.

**Cílená oprava:** Poslední větu meta description vypustit podle nálezu 1, případně použít celý název Search Console a znovu přeměřit délku. Při prvním výskytu v samostatném FAQ napsat „pro web nebo jeho část evidovanou v Search Console jako samostatná vlastnost“. „Direktivy úryvků“ změnit na „pravidla, kterými Googlu omezíte úryvky a použití textu“. Větu na ř. 194 opravit: „Vyhledávací robot musí mít ke stránce přístup, znovu ji projít a změnu zpracovat.“ Nad tabulkou použít „Porovnání možností omezení obsahu“. Tyto opravy se vztahují jen na části, které po škrtech zůstanou; do názvů rozhraní ani kódu nezasahovat.

### 12. [WARNING] Nadpis „Co nefunguje“ nesprávně sdružuje neúčinné vypínání a skutečné skrývání panelu

**Citace a místa:** H2, ř. 134: „Co nefunguje — Search Labs, rozšíření a soubor hosts“. Karta na ř. 143: „Rozšíření prohlížeče, které panel skrývá“. Následující text sám vysvětluje, že rozšíření panel skrývají úpravou stránky.

**Problém:** Čtenář, který skenuje jen nadpis, se dozví, že rozšíření nefungují. V kartě se ale řeší jejich oprávnění a možná poruchovost. Článek navíc jinde doporučuje doplněk DuckDuckGo a Bingu a uvádí možnost rozšíření Safari. Nadpis tak směšuje odlišné účely doplňků. Není třeba znovu ověřovat jejich funkčnost; rozpor vzniká už mezi nadpisem a vlastním vysvětlením.

**Cílená oprava:** Nadpis zúžit na `## <span class="hl">Search Labs a historie</span> — <strong>Přehled od AI nevypnou</strong>`. Kartu o rozšířeních pro skrývání panelu vyjmout z „nefungujících“ postupů a zkrátit ji na upozornění u neoficiálních možností: „Rozšíření mohou panel skrýt, ale vyžadují přístup ke stránce a po změnách Googlu mohou přestat fungovat.“ Ponechat jednoznačné rozlišení od doplňků pro jiné vyhledávače.

### 13. [WARNING] CTA začíná tlakem přes nenávratnou ztrátu; produkt samotný je uvedený správně

**Citace a místo:** Ř. 258: „Vyřazení z AI odpovědí jde vrátit, ale návštěvnost, o kterou mezitím přijdete, už ne. […] Přesně to zjišťuje Audit AI viditelnosti…“

**Problém:** Úvod CTA používá obavu z nenávratné ztráty místo věcného pojmenování služby. Dále zájmeno „to“ spojuje předchozí úvahu o přínosech a návštěvnosti s jednorázovým auditem, přestože kanonický `zdroje/audit.ts` službu vymezuje jako snímek viditelnosti a plán úprav. Závěr má rovnou říct, co kupující dostane. Název **Audit AI viditelnosti**, cena **3 600 Kč bez DPH**, odkaz `/audit/` i neskloňované **Sniper Design** jsou správně; cenu v nadpisu ani v textu odkazu nenacházím.

**Cílená oprava:** První dvě věty nahradit věcným spojením: „Zvažujete vyřazení vlastního webu z AI odpovědí? Audit AI viditelnosti zkontroluje jeho současnou viditelnost, přístup vyhledávacích robotů a mezery v obsahu a navrhne pořadí úprav.“ Následující správný název s odkazem, cenu a provozovatele ponechat. Nevytvářet nový slib měření ztracené návštěvnosti a nepřidávat generické „kontaktujte nás“.

### 14. [TIP] Zdroje tvoří jeden nepřehledný blok, který ztěžuje dohledání konkrétního postupu

**Citace a místo:** Ř. 270: jediný kurzivní odstavec začínající „Zdroje: nápověda Vyhledávání Google…“ a pokračující přes Google, prohlížeče, doplňky a Seznam.

**Problém:** Čtenář s konkrétním zařízením musí procházet dlouhý proud odkazů. Zvlášť důležité rozlišení dokumentace a sekundárního testu `udm=14` je vysvětlené v těle, ale příslušný převzatý test tu nemá samostatný odkaz. Není potřeba shánět další zdroj ani opakovat faktický audit.

**Cílená oprava:** Existující odkazy rozdělit do krátkého seznamu „Google pro uživatele“, „Nastavení prohlížečů“, „Jiné vyhledávače“ a „Vlastní web“. Datum načtení uvést jednou. U `udm=14` lze odkázat přímo na dodaný sekundární test, jehož URL je v `zdroje/sekundarni-test-udm14-2026-10-17.txt`; jasně jej označit jako test jiného webu. Bez načtení a ověření adresy zde nevymýšlím nový odkaz.

## Co je v tomto kole v pořádku

Meta description má **157 znaků**, takže splňuje rozsah 70–160. Krátká odpověď má **52 slov**. Slug je smysluplný a interní odkazy míří na relevantní vysvětlení funkcí i produkt. V běžné próze nezůstaly zakázané výrazy typu „schema markup“, „answer block“ nebo „backlink profil“. Anglické názvy rozhraní, názvy doplňků, kód a klíčová slova nepovažuji za jazykovou vadu. Jednotné číslo „Přehled od AI“ je v próze dodržené; počáteční velké písmeno v nadpisu režimu AI nehlásím jako chybu. Správně jsou odlišeny Přehled od AI, režim AI a Gemini. Nové podklady podporují Firefox od verze 140, uvedené cesty v iOS, rozdíl nové karty u doplňku pro Chrome, rozsah Google-Extended i základní popis metrik přehledu výkonu; tyto vyřešené věci znovu neotevírám.

## Stav vypořádání kola 1

Zkontrolováno všech **25 položek „Zapracováno“**, včetně frontmatteru, FAQ, tabulek, shrnutí a vlastností komponent. **22 položek přijímám jako vypořádané; 3 jen částečně: č. 2, 4 a 6.** Zbytkové vady jsou výše jako blockery 1–3. Nově zjištěné podmínky doplněných postupů jsou v nálezech 4–5, nikoli přepočítané mezi nevyřešené původní nálezy.

| Nález kola 1 | Stav a kontrola v dodaném článku |
|---|---|
| 1 — dokumentace versus ověřené UI | Přijato: společné vymezení ř. 61, atribuce postupů a přehledu; požadavek opakovat stejné upozornění u každého kroku nepřebírám. |
| 2 — `udm=14` a omezený test | Částečně: podmínky jsou v těle, ale chybějí v samostatných odpovědích a zkratkách; nález 1 tohoto kola. „Natrvalo“ už v souboru nezůstává. |
| 3 — Chrome a podmínky prostředí | Přijato: počítač, profil hosta i správce jsou na ř. 81 a 90. |
| 4 — Safari, Edge, Firefox a doklady | Částečně: nové primární podklady přijímám; silnější závěry u Safari přetrvaly, viz nález 3. Nové chybějící podmínky viz nález 4. |
| 5 — síla tvrzení o vypnutí režimu AI | Přijato: metadata, FAQ, tělo a shrnutí již rozlišují výslovné tvrzení Googlu o Přehledu od AI od nenalezené volby režimu AI. |
| 6 — přechod z přehledu do režimu AI | Částečně: tělo obsahuje obě podmínky, FAQ jen mobil; nález 2. |
| 7 — nedokonalé filtrování obrázků | Přijato: ř. 114 výslovně vylučuje záruku odstranění všech obrázků. |
| 8 — rozsah přepínače a dědění | Přijato: ř. 163–168 a FAQ doplňují podřízené vlastnosti, vlastníka a zpoždění; tělo vymezuje Merchant Center, Ads i ostatní využití ve Vyhledávání. |
| 9 — preferované zdroje | Přijato: tělo, tabulka i související odkaz ztrátu omezují na Přehled od AI a režim AI. |
| 10 — načtení a zpracování direktiv | Přijato: ř. 194, FAQ a časování ve Stepperu; jazykovou chybu v této větě řeší nález 11, nikoli nový faktický nález. |
| 11 — licence a strukturovaná data | Přijato: výjimky jsou na ř. 180 a 186. |
| 12 — kladný `max-snippet` versus nula | Přijato: rozlišení v textu i samostatném řádku tabulky. |
| 13 — doložení metrik přehledu | Přijato díky novému ověření nápovědy 16984139; nález 5 se týká nově zjištěné výjimky Search Labs. |
| 14 — chybějící přehled není nulový výskyt | Přijato: Stepper výslovně říká, že nezobrazení přehledu neznamená absenci obsahu; shrnutí používá „může stát návštěvnost“. |
| 15 — zachování filtru Web | Přijato: ř. 67 uvádí neznámé zachování volby, povinnost vybírat jej u každého dalšího dotazu už netvrdí. |
| 16 — doklad pro iPhone | Přijato: dodán samostatný soubor nápovědy pro iPhone se stejným tvrzením. |
| 17 — zobecnění Brave Search | Přijato: výchozí stav je v těle i shrnutí omezen na vzorek; FAQ původní univerzální tvrzení neobsahuje. |
| 18 — vypínač Seznamu | Přijato: absence vypínače se vztahuje k nápovědě, také ve shrnutí. |
| 19 — Bing a sekundární zpráva | Přijato: existence doplňku a rozdíl nové karty jsou nově doložené; `-ai` je ve FAQ i tabulce připsaný červnovým zprávám; „preview“ a „natrvalo“ odstraněny. |
| 20 — JavaScript a `data-nosnippet` | Přijato: ř. 186 rozlišuje existující a nově vytvářené prvky. |
| 21 — Google-Extended | Přijato: tabulka rozlišuje cesty v robots.txt, budoucí Gemini i podklad odpovědí v Gemini/Vertex AI; netvrdí vyřazení z Vyhledávání. |
| 22 — historická data | Přijato: nový primární doklad českého spuštění a changelog; formulace „mezi existující možnosti“ nepřipisuje říjnu vznik funkce. |
| 23 — Gemini jako přejmenovaný Asistent | Přijato: závorka „dřív Asistent Google“ odstraněna ze všech původních míst. |
| 24 — hosts a nedoložené škody | Přijato: komponenta i tělo mluví o chybějícím dokladu účinnosti, nikoli o rozbití služeb. |
| 25 — historie a data pro modely | Přijato: komponenta rozlišuje přihlášená hledání, agregovaná anonymizovaná data, nepřihlášené hledání a zachování staré historie. |

**Důvody u „Nezapracováno“:** U č. 4 přijímám ponechání postupu pro Firefox, protože poznámky k vydání a kód Mozilly jsou konkrétní primární doklady; nezávisle na tom je třeba doplnit podmínky v nálezu 4. U č. 22 přijímám ponechání českého data spuštění, protože nové ověření přináší český blog Googlu. U č. 1 přijímám jedno společné upozornění na dokumentační povahu návodů doplněné místní atribucí, protože opakovat plnou výhradu u každého kroku není nutné.

## Omezení a nejasnosti

Web nebylo nutné vyhledávat; kontrola stojí na dodaných snímcích a citacích. Stav uživatelského rozhraní jsem sám netestoval. Jazyk jsem posoudil přímo proti dodanému `JAZYK_SLOVNIK.md` v74 a tónu značky. Mechanický checker nebyl u dostupného skillu přítomen, proto tento výstup není potvrzením jeho běhu; externí API ani další model jsem nevolal. Součástí podkladů není aplikace ani komponenty, takže jsem neověřoval vykreslení FAQ, automatické kotvy nebo funkčnost interních odkazů a nehlásím je jako prokázané vady. Pro použitý produkt je dodán `zdroje/audit.ts`, který potvrzuje název, cenu a obsah služby; nepoužité produkty Pack a Free PDF není důvod přezkoumávat. Zjištěné nejasnosti není třeba řešit dotazem uživateli.

