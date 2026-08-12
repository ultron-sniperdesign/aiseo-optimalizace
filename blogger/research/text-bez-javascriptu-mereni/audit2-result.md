1. **Blokující — článek příliš dlouho zdržuje u autorova postupu, než doručí užitek čtenáři.**  
   **Citace:** „Napoprvé jsem porovnával počet slov… Napodruhé jsem bral nejdelší odstavec… Napotřetí jsem přidal tři pojistky…“  
   **Problém:** Čtenář z vyhledávání s tříminutovým limitem se rychle dozví výsledek, ale pak několik odstavců sleduje interní průběh autorovy práce. To funguje jako laboratorní deník, ne jako rychlá odpověď „co z toho plyne pro mě“.  
   **Návrh:** Zkraťte sekci o třech kolech měření na 4–5 vět a hned za tabulku vložte mezititulek typu **„Co z toho plyne pro majitele webu“** se třemi body:  
   - samotný hlavní text bývá v HTML častěji, než tvrdí zkratkovité titulky,  
   - problém může být jinde: navigace, výběr stránky, odlišná odpověď podle klienta,  
   - bez ruční kontroly jsou automatické závěry nespolehlivé.  

2. **Vážné — slib titulku je splněn jen napůl; článek víc vypráví o falešných nálezech než o „80 českých doménách“.**  
   **Citace:** titulek „**Text bez JavaScriptu: co ukázalo 80 českých domén**“ a velká část textu „**Automatické měření mi třikrát řeklo…**“, „**Dva z těch nálezů jsem si vyrobil sám**“.  
   **Problém:** Titulek slibuje poznatek o českých doménách, ale těžiště textu se přesouvá k metodickým omylům autora. To není nutně špatně, ale je to jiný článek.  
   **Návrh:** Buď upravit titulek směrem k metodické lekci, např. **„Text bez JavaScriptu: na 80 českých doménách jsem nenašel problém — a automatika mě 23× zmátla“**, nebo osekat metodickou autobiografii a přidat víc výsledků o samotných doménách: kolik vypadlo kvůli sitemapě, kolik kvůli přesměrování, jaké typy stránek byly testované.

3. **Vážné — struktura má duplicitní sekce se stejným sdělením.**  
   **Citace:** „**Co s tím, když čtete cizí procenta**“ a později „**Čtyři chyby, které se u takového měření dělají**“.  
   **Problém:** Obě sekce učí čtenáře, jak číst podobná měření. Obsahově se překrývají: ruční kontrola, falešné nálezy, neúspěšná měření. Při rychlém čtení to působí jako opakování.  
   **Návrh:** Sloučit do jedné sekce typu **„Jak nečíst podobná procenta“**. Zachovat tři otázky a pod ně vložit čtyři chyby jako stručný seznam. Ušetří se místo a argument bude soustředěnější.

4. **Vážné — hranice mezi metodickou lekcí a zpovědí je překročená v pasáži o vlastních omylech.**  
   **Citace:** „**Dva z těch nálezů jsem si vyrobil sám**“, „**Po opravě… oba případy přeskočily…**“, „**Proč to píšu**“.  
   **Problém:** Jedna konkrétní chyba s kódováním je užitečná. Dvě samostatné sekce o tom, co se autorovi nepovedlo, už posouvají text do režimu „podívejte, jak jsem málem publikoval chybu“. To je pro čtenáře méně cenné než obecné pravidlo.  
   **Návrh:** Zachovat jen stručnou verzi: **„Dva falešné nálezy způsobilo špatné dekódování windows-1250 jako UTF-8; kontrolujte hlavičku a meta charset.“** Celý osobní rámec zkrátit na jednu větu. Box „Proč to píšu“ lze vypustit.

5. **Vážné — chybí přímá odpověď na základní čtenářskou otázku „co mám zkontrolovat nejdřív na svém webu“.**  
   **Citace:** „**Jak si to ověříte u sebe za dvě minuty**“ obsahuje nástroje, ale ne prioritu problémů.  
   **Problém:** Čtenář dostane postup, ale ne pořadí rizik. Neví, co bývá skutečný problém častěji: chybějící obsah, navigace, odlišný HTML response, nebo chybně vybraná testovací stránka.  
   **Návrh:** Přidejte krátkou sekci nebo box **„Kde bývá problém častěji než v hlavním textu“** se 4 body:  
   1) odkazy a navigace generované až v JS,  
   2) různé HTML podle User-Agentu / ochrany,  
   3) špatně zvolená testovací stránka,  
   4) měřicí chyba.  
   Tím článek přestane být jen obhajobou jedné metody.

6. **Drobné — některé H2 míří na autora, ne na potřebu čtenáře.**  
   **Citace:** „**Automatické měření mi třikrát řeklo, že text chybí**“, „**Dva z těch nálezů jsem si vyrobil sám**“.  
   **Problém:** H2 v první osobě čtenáři nepomáhají skenovat obsah. Při rychlém průchodu není jasné, jestli jde o výsledek, varování, nebo osobní poznámku.  
   **Návrh:** Přepsat H2 do užitkové podoby:  
   - „Proč automatika hlásí chybějící text falešně“  
   - „Častá technická chyba: špatné kódování“  
   - „Jak číst procenta o AI nečitelnosti webů“

7. **Drobné — závěr opakuje už řečené místo aby převáděl poznatek do akce.**  
   **Citace:** „**Ve vzorku 80 českých domén jsem nenašel web…**“ a „**Když příště narazíte na procento… zeptejte se…**“  
   **Problém:** To už čtenář slyšel v answer, tabulce i v předchozích sekcích. Závěr neuzavírá text praktickým rozhodnutím.  
   **Návrh:** Nahradit shrnutí blokem **„Co udělat dnes“**:  
   - stáhnout 3 typy stránek přes curl,  
   - ověřit 1 větu z hlavního obsahu,  
   - zkontrolovat navigaci bez JS,  
   - nepovažovat chybu měření za důkaz nečitelnosti.

8. **Drobné — místy kostrbaté nebo efektní věty, které nesou spíš tón než informaci.**  
   **Citace:** „**Nula. Důležitější než ta nula je ale to, kolik falešných nálezů k ní cestou vyrobila automatika.**“ / „**Vypadalo to jako hotový článek.**“  
   **Problém:** Tyto věty budují dramatiku, ale nepřidávají faktickou hodnotu. V odborném textu zdržují.  
   **Návrh:** Zestručnit:  
   - „Výsledek byl 0 z 66. Výraznější zjištění je ale vysoký počet falešných nálezů v automatickém vyhodnocení.“  
   - „Druhé kolo dalo 15 podezřelých případů, ruční kontrola nepotvrdila ani jeden.“

9. **Drobné — opakování stejné výhrady v několika variantách.**  
   **Citace:** „**Neznamená to, že takový web na českém internetu není**“, „**O zbytku webu to neříká nic**“, „**Měřím odpověď, kterou dostal můj klient**“, „**Chrome není robot OpenAI**“.  
   **Problém:** Opatrnost je správná, ale zde se vrací příliš často. Čtenář si po třetí variantě nese spíš obranný tón než hlavní sdělení.  
   **Návrh:** Zkrátit limity na 3 body v jedné kompaktní sekci a z ostatních míst redundantní disclaimery vyškrtnout. Výsledný text bude jistější a čitelnější.

10. **Vážné — chybí stručný profil vyřazených 14 domén, přestože právě s nimi článek argumentačně pracuje.**  
   **Citace:** „**vyřazeno z měřicích důvodů | 14**“ a „**Neměly použitelnou sitemapu, přesměrovaly jinam, vrátily chybu při vykreslení…**“  
   **Problém:** Článek opakovaně zdůrazňuje, že vyřazené případy se nemají počítat jako nečitelné, ale neukazuje jejich rozpad. Čtenář tak neví, zda šlo hlavně o technický šum, nebo o systémový problém určitého typu webu.  
   **Návrh:** Přidejte malou tabulku **„Proč vypadlo 14 domén“** s počty podle důvodu. To je konkrétní informační zisk a současně opora pro argument, proč tyto případy neházet mezi „nečitelné“.