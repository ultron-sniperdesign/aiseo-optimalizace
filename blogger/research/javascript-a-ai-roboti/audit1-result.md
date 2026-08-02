Níže je přísný faktický audit se zaměřením na přehánění, nedoložená tvrzení, technické nepřesnosti a vnitřní rozpory.

1. **Příliš jisté tvrzení v `answer`**
   - **Citace:** „**Vidí tedy jen to, co server pošle v HTML. Googlebot, Gemini a AppleBot ho naopak vykreslují.**“
   - **Problém:** Metadata `answer` mluví v přítomném čase jako o dnešním ověřeném stavu, přestože text sám jinde správně přiznává, že jde o jediné veřejné měření z 12/2024. To je přesně typ nekonzistence, na který je potřeba být přísný. Navíc „vidí tedy jen…“ je u skupiny botů silný závěr odvozený z omezeného měření.
   - **Navrhované znění:** „**Podle jediného veřejného měření z prosince 2024 roboti spojovaní s ChatGPT, Claude a Perplexity JavaScript stahovali, ale nespouštěli, takže zřejmě pracovali hlavně se serverem vráceným HTML. Ve stejném měření Googlebot, AppleBot a zřejmě i Gemini JavaScript vykreslovali.**“

2. **Příliš kategorické tvrzení v titulkové odpovědi a FAQ o `curl`**
   - **Citace:** „**curl … stáhne stránku bez prohlížeče, tedy přesně tak, jak ji dostane robot bez vykreslování.**“
   - **Problém:** „Přesně tak“ je technicky přehnané. `curl` vrátí serverovou odpověď bez vykreslení, ale nemusí být „přesně“ totožná s tím, co dostane konkrétní robot: může se lišit podle user-agentu, hlaviček, geolokace, cookies, A/B testu, anti-bot ochrany nebo SSR větvení. Pro netechnického čtenáře je to užitečná zkratka, ale fakticky je to moc silné.
   - **Navrhované znění:** „**curl vám ukáže základní serverovou odpověď bez spuštění JavaScriptu, tedy dobré přiblížení toho, co uvidí robot, který nevykresluje. Pokud web mění odpověď podle user-agentu nebo jiných podmínek, může se výsledek lišit.**“

3. **Příliš jisté tvrzení v hlavním textu**
   - **Citace:** „**Roboti, kteří sbírají obsah pro ChatGPT, Claude a Perplexity, soubory JavaScriptu stahují, ale nespouštějí. Googlebot, Gemini a AppleBot ho naopak vykreslují.**“
   - **Problém:** Zase present tense bez časového ukotvení přímo v klíčové větě. Úvodní varování o stáří dat to částečně zachraňuje, ale jádro článku by mělo být konzistentněji formulované jako „ve veřejném měření z 12/2024“. Zvlášť u Gemini je to odvozené nepřímo.
   - **Navrhované znění:** „**V jediném veřejném měření z prosince 2024 roboti spojovaní s ChatGPT, Claude a Perplexity JavaScript stahovali, ale nespouštěli. Ve stejném měření Googlebot a AppleBot JavaScript vykreslovaly; u Gemini se to vyvozovalo z toho, že používá infrastrukturu Googlu.**“

4. **Neopatrné tvrzení „Podle měření ho jen uloží“**
   - **Citace:** „**Podle měření ho jen uloží.**“
   - **Problém:** Studie podle podkladů dokládá fetch vs execute, ne nutně „jen uloží“. To je interpretace navíc. Pokud článek neví, co přesně crawler s fetched JS dělá dál interně, nemá tvrdit „jen uloží“.
   - **Navrhované znění:** „**Podle měření si skript sice vyžádají, ale nespustí ho.**“

5. **Tabulka používá kategorické „ano/ne“, i když text zdůrazňuje omezenost důkazů**
   - **Citace:** řádky tabulky „**Googlebot | ano**“, „**Gemini | ano**“, „**AppleBot | ano**“, „**GPTBot | ne**“ atd.
   - **Problém:** Tabulka působí jako definitivní současný stav. To je v rozporu s opatrnějšími pasážemi FAQ („Pravděpodobně ano, ale doložit to současnými daty nedokážeme“). U Gemini je navíc „ano“ odvozené, ne přímo změřené stejným způsobem jako u Googlebotu/AppleBotu.
   - **Navrhované znění:** Přidejte do hlavičky sloupec nebo poznámku „**Stav podle veřejného měření z 12/2024**“. U Gemini zvažte „**pravděpodobně ano**“ nebo „**ve studii uvedeno jako ano na základě Google infrastruktury**“.

6. **Gemini je podáno jistěji, než dovoluje zdroj**
   - **Citace:** „**Gemini vykresluje taky, protože sdílí infrastrukturu s Googlem.**“
   - **Problém:** To je odvození ze zdroje, ne nezávislé přímé ověření. Pro auditovaný článek je vhodné rozlišit „bylo přímo změřeno“ vs „zdroj to dovozuje“. Jinak se z nepřímého tvrzení stává tvrdý fakt.
   - **Navrhované znění:** „**Gemini bylo ve zdroji popsané jako robot se stejnými vykreslovacími schopnostmi díky infrastruktuře Googlu; nejde ale o samostatně doložené veřejné měření chování Gemini na více webech.**“

7. **AppleBot je tvrzen příliš obecně**
   - **Citace:** „**AppleBot | ano — přes prohlížečový crawler**“
   - **Problém:** Pokud jediný zdroj říká, že AppleBot renderuje přes browser-based crawler podobně jako Googlebot, je fér to uvést jako tvrzení té studie, ne jako bezpodmínečný obecný fakt k roku 2026.
   - **Navrhované znění:** „**AppleBot | ve studii ano — zdroj ho popisuje jako browser-based crawler podobný Googlebotu**“

8. **„PerplexityBot | ne“ je příliš tvrdé bez stejné úrovně detailu jako u GPTBot/Claude**
   - **Citace:** „**PerplexityBot | ne | vidí jen serverem vrácené HTML**“
   - **Problém:** U GPTBot a Claude uvádíte konkrétní fetch sazby JS a „nespustí“. U PerplexityBotu chybí obdobná opora v textu a z tabulky není poznat, na základě čeho je závěr stejně tvrdý. To zhoršuje doloženost.
   - **Navrhované znění:** „**PerplexityBot | ve studii bez důkazu o vykreslování JavaScriptu | pro jistotu počítejte se serverovým HTML**“

9. **Převrácení „nepodařilo se doložit“ do „neplatí“ u kontrolní pomůcky**
   - **Citace:** „**Co nenajdete, to většina AI robotů nedostane.**“
   - **Problém:** To je příliš široké. Pokud obsah není v initial HTML, některé roboty ho stále mohou získat vykreslením. Váš vlastní text říká, že Googlebot, AppleBot a zřejmě Gemini vykreslují. Tedy „většina AI robotů“ je navíc nedoložené počítání většiny podle počtu druhů robotů, ne podle provozu či významu.
   - **Navrhované znění:** „**Co v serverem vráceném HTML nenajdete, roboti bez vykreslování to nedostanou a ani u vykreslujících robotů na to není spoleh.**“

10. **Vypnutí JavaScriptu v prohlížeči není „přesně ta verze“**
    - **Citace:** „**Uvidíte přesně tu verzi, se kterou robot pracuje — tentokrát vizuálně, ne v kódu.**“
    - **Problém:** Opět „přesně“ neplatí. Browser s vypnutým JS pořád dělá spoustu věcí jinak než crawler; navíc může načítat CSS, obrázky, posílat jiné hlavičky a narazit na jiné podmínky než bot. Jako orientační test je to dobré, jako přesná simulace ne.
    - **Navrhované znění:** „**Uvidíte přibližnou vizuální verzi stránky bez JavaScriptu. Je to užitečná kontrola, ale ne dokonalá simulace konkrétního robota.**“

11. **Technická nepřesnost u strukturovaných dat**
    - **Citace:** „**Strukturovaná data vkládaná skriptem | left: nevidí | right: nevidí, ale nepotřebuje je**“
    - **Problém:** Tohle je matoucí a technicky špatně formulované. Strukturovaná data ve formátu JSON-LD jsou běžně právě ve `<script type="application/ld+json">`, tedy „ve skriptu“, ale to neznamená vykonávaný JavaScript. Robot bez vykreslování takový `<script>` v HTML obvykle vidí. Věta směšuje „skriptový tag“ a „data dopsaná do DOM až běžícím JS“. Pro netechnického čtenáře tohle vyrobí zmatek.
    - **Navrhované znění:** Změňte řádek třeba na:
     „**Strukturovaná data dopsaná do stránky až běžícím JavaScriptem | robot bez vykreslování je neuvidí | návštěvník je běžně neřeší**“
     a ideálně doplňte vysvětlení:
     „**Pozor: JSON-LD vložené už v HTML uvnitř `<script type="application/ld+json">` je v pořádku; problém je až tehdy, když ho do stránky přidá až spuštěný JavaScript nebo správce značek.**“

12. **Nevhodná formulace „v inspektoru všechno vypadá naprosto v pořádku“ bez vysvětlení zdroj vs DOM**
    - **Citace:** „**… v prohlížeči i v inspektoru všechno vypadá naprosto v pořádku.**“
    - **Problém:** Sama věta není špatně, ale chybí krátké vysvětlení rozdílu „zdroj HTML“ vs „aktuální DOM“. Pro netechnického čtenáře by stálo za to jednou explicitně říct, že inspektor ukazuje živý stav stránky po úpravách skripty.
    - **Navrhované znění:** „**… v prohlížeči i v inspektoru všechno vypadá v pořádku, protože inspektor ukazuje aktuální DOM po úpravách skripty, ne původní HTML odpověď ze serveru.**“

13. **Příliš široké tvrzení o odkazech a tlačítkách**
    - **Citace:** „**Prvek, který se tváří jako odkaz, ale ve skutečnosti je to tlačítko obsluhované skriptem, robot bez vykreslování nenásleduje.**“
    - **Problém:** V zásadě správný směr, ale je to zbytečně absolutní. Některé systémy mohou mít fallback URL jinde, některé crawlers mohou získat URL i z jiných zdrojů, a i vykreslující roboti mohou po interakcích postupovat omezeně. Pro výukový text je lepší vysvětlit princip bez absolutna.
    - **Navrhované znění:** „**Pokud je přechod na další stránku řešený jen tlačítkem a JavaScriptem, robot bez vykreslování se na cílovou URL obvykle nedostane. Pro důležité cesty proto používejte skutečné odkazy `<a href=...>`.**“

14. **„Počítejte s tím, že nepočká“ je směšování dvou mechanismů**
    - **Citace:** „**U robotů, kteří skripty nespouštějí, nejde o čas — obsah se nedorenderuje ani za hodinu.**“
    - **Problém:** Smysl je správný, ale formulace „ani za hodinu“ je rétorická a budí dojem experimentálního testu. Přesnější je říct, že bez vykonání JS k dorenderování nedojde vůbec, ne že „robot nepočká dost dlouho“.
    - **Navrhované znění:** „**U robotů, kteří skripty nespouštějí, nejde o čekání: bez vykonání JavaScriptu se ten obsah prostě nevytvoří.**“

15. **Neopřená generalizace o šablonách a výpisech**
    - **Citace:** „**Nejčastěji selže výpis, protože ho hodně šablon skládá až v prohlížeči.**“
    - **Problém:** To může být praktická zkušenost autora, ale v článku není doložená. U auditovaného textu bych podobné „nejčastěji“ bez opory tlumil.
    - **Navrhované znění:** „**Častým problémem bývá výpis nebo kategorie, protože některé šablony skládají položky až v prohlížeči.**“

16. **„Skoro vždy“ a „přesně tam, kde jsou peníze“ jsou rétoricky silné a nedoložené**
    - **Citace:** „**Problém se skoro vždy schovává na šablonách… — tedy přesně tam, kde jsou peníze.**“
    - **Problém:** Pro tutorial je to zbytečně efektní a méně přesné. Není to faktický důkaz, spíš komentář.
    - **Navrhované znění:** „**Problém se často objeví až na šablonách, které skládají obsah z databáze — typicky u produktů, kategorií nebo výpisů.**“

17. **FAQ o AI Overviews / AI Mode je podané jako jistota**
    - **Citace:** „**Ty stojí na Googlebotovi, který JavaScript vykresluje, takže tenhle konkrétní problém tam nehrozí.**“
    - **Problém:** To je přehnané. I kdyby AI Overviews čerpaly z Google infrastruktury, tvrdit, že problém „nehrozí“, je moc silné. U Googlu existují limity, zpoždění renderingu, edge cases, indexační odlišnosti a ne vše, co se vykreslí, se musí promítnout do použití v AI výstupech.
   - **Navrhované znění:** „**AI Overviews a AI Mode se opírají o Google infrastrukturu, takže problém s nevykonaným JavaScriptem je tam menší než u robotů bez vykreslování. Neznamená to ale, že je bezpečné spoléhat jen na obsah dopsaný až klientským JavaScriptem.**“

18. **Vnitřní rozpor mezi opatrnou FAQ a jistým tělem článku**
   - **Citace 1:** „**Platí to tvrzení ještě dnes? Pravděpodobně ano, ale doložit to současnými daty nedokážeme.**“
   - **Citace 2:** „**Googlebot, Gemini a AppleBot ho naopak vykreslují.**“
   - **Problém:** FAQ je opatrná, tělo a metadata jsou jistá. To je nekonzistentní tonalita i epistemická jistota.
   - **Navrhované znění:** Sjednotit celý článek na rámec „**podle veřejného měření z prosince 2024**“ a tam, kde jde o doporučení, psát kategoricky spíš doporučení než aktuální stav robotů.

19. **„Většina AI robotů JavaScript nespouští“ v description je nedoložené**
   - **Citace:** „**Většina AI robotů JavaScript nespouští — ale ne všichni.**“
   - **Problém:** „Většina“ není v textu podložená reprezentativním vzorkem ani podílem provozu. Máte několik jmen, z nichž některé renderují a některé ne. Bez definice „většiny“ je to marketingová zkratka.
   - **Navrhované znění:** „**Někteří AI roboti JavaScript podle veřejného měření z roku 2024 nespouštěli, jiní ano. Jak si ověřit, co z vaší stránky dostane robot bez vykreslování.**“

20