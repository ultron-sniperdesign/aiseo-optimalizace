1. **VÁŽNÉ — rozpor v dataci/stavu ověření nástrojů**
   - **Citace:** „**Konkrétní nástroje k červnu 2026**…“ + hned pod tím checklist „**stav k srpnu 2026**“. Dole navíc: „…k veřejně dostupným informacím **k červnu 2026** a při aktualizaci **v srpnu 2026 jsem je znovu neověřoval**.“
   - **Problém:** To je zmatek. Článek je aktualizovaný **11. 8. 2026**, ale jednou tvrdí „stav k srpnu 2026“, podruhé přiznává, že třetí strany v srpnu znovu neověřoval. Obojí zároveň být nemůže. U auditního návodu je to zbytečně nedůvěryhodné.
   - **Návrh:** Sjednotit na jednu formulaci. Např.: „**Oficiální reporty ověřeny k 11. 8. 2026, seznam nástrojů třetích stran vychází z veřejně dostupných informací k červnu 2026 a nemusí být aktuální.**“ A checklist přepsat z „stav k srpnu 2026“ na „orientační přehled, neověřováno k 11. 8. 2026“.

2. **VÁŽNÉ — howto frontmatter je po refreshe částečně nekonzistentní s tělem**
   - **Citace:** `howto.steps` začíná rovnou „**Sestavte 15 až 20 dotazů**“; v těle je nově samostatná sekce „**Než začnete testovat rukou: dvě plochy mají oficiální data**“ a explicitní doporučení „**otevřete oba reporty jako první**“.
   - **Problém:** Přesně ten typ rozjetí frontmatter vs. body, na který upozorňuješ. Autor změnil logiku článku, ale `howto` nechal starý. Výsledkem je dvojí začátek: structured data říká „začni dotazy“, tělo říká „začni reporty“. To není kosmetika, ale rozpor v instrukci.
   - **Návrh:** Upravit `howto` a vložit nový první krok, např. „**Nejdřív zkontrolujte oficiální reporty v Search Console a Bing Webmaster Tools**“. Teprve pak sestavení dotazů a ruční test.

3. **VÁŽNÉ — answer ve frontmatter je slabší než nové jádro článku**
   - **Citace:** `answer`: „**Test AI viditelnosti je ruční kontrola…** … **U ploch Googlu a Microsoftu si výsledek navíc ověřte** v jejich bezplatných reportech.“
   - **Problém:** Po refreshi už článek netvrdí jen „navíc ověřte“. Tvrdí silněji: „**otevřete oba reporty jako první**“. `answer` tedy zůstává ve starém gardu, kde reporty jsou dodatek až po testu. To není úplně protimluv, ale je to nekonzistence priorit.
   - **Návrh:** Přepsat `answer` tak, aby držel novou logiku: „**Začněte oficiálními reporty pro Google a Bing, pak ručně otestujte konkrétní dotazy a platformy bez oficiálních dat, hlavně ChatGPT a Perplexity.**“

4. **DROBNÉ — description je v pořádku, ale neodráží nové doporučené pořadí**
   - **Citace:** `description`: „Jak za hodinu ověřit AI viditelnost… — **a co k tomu zdarma dopoví oficiální reporty**.“
   - **Problém:** „Dopoví“ sugeruje doplněk, zatímco tělo nově říká „začněte jimi“. To je menší verze téhož problému jako u `answer`.
   - **Návrh:** Pokud chce autor držet novou logiku důsledně, přepsat třeba na: „**Jak za hodinu ověřit AI viditelnost ručním testem a jak předtím využít bezplatné oficiální reporty Google a Bingu.**“

5. **DROBNÉ — článek se nepřeklopil do extrému „reporty nahrazují test“, ale místy je tomu už nebezpečně blízko v pořadí argumentace**
   - **Citace:** „**U dvou z těch platforem nemusíte odpověď na otázku ‚jsem tam vůbec?‘ získávat ručním vzorkem. Provozovatelé ji dávají sami a zdarma.**“ a „**Praktické pořadí: otevřete oba reporty jako první**…“
   - **Problém:** Hlavní brzda tam je, takže průšvih jako minule to není. Autor ale tlačí reporty dost dopředu a zkratka „nemusíte… ručním vzorkem“ je zjednodušená. U Googlu report neodpoví na „jsem tam u tohoto typu dotazu / scénáře / formulace“, jen na impresní přítomnost URL v AI plochách. Tedy na „jsem tam vůbec“ jen velmi hrubě.
   - **Návrh:** Zpřesnit jednu větu, ne celou sekci. Např.: „**U Googlu a Microsoftu si nejdřív ověříte, zda se vaše URL nebo citace v AI plochách objevují aspoň na agregované úrovni; konkrétní dotazové situace pak stejně musíte otestovat ručně.**“

6. **DROBNÉ — naopak reporty článek neshazuje, tady je refresh věcně vyvážený**
   - **Citace:** „**jsou zdarma a jsou to data**“, „**k plochám Googlu a Microsoftu dají data**“, „**Nulové imprese jsou jiný problém než imprese bez zmínky v testu**“.
   - **Problém:** Tady spíš kontrola než chyba. Článek reporty už nedegraduje na alibi. Reálnou roli mají.
   - **Návrh:** Nechat. Maximálně doplnit 1 větu s praktickým use-casem, třeba „**Reporty jsou dobré na potvrzení, že problém je skutečně nulová přítomnost, ne jen smůla ve vzorku dotazů.**“

7. **DROBNÉ — funkce „test za hodinu“ se nerozpadla, ale článek už je na hraně přetížení**
   - **Citace:** title „**test za hodinu 2026**“, stats „**~1 hod.**“, tělo: „**Základní verzi zvládnete přibližně za hodinu**“.
   - **Problém:** Formálně to drží. Prakticky ale přibyly reporty, diagnostický krok 0, další FAQ, srovnávací vrstva nástrojů. Návod se ještě nerozpadl, ale už není tak přímočarý jako dřív. Pro začátečníka hrozí, že „hodina“ začne vypadat jako hodina jen na ruční část, ne na celý onboarding.
   - **Návrh:** Jedna věta by to spravila: „**Samotný ruční vzorek zvládnete za hodinu; první otevření GSC a Bingu je navíc otázka několika minut, pokud k nim už máte přístup.**“ Tím se udrží slib bez mlžení.

8. **DROBNÉ — FAQ a tělo jsou nově v lepším souladu, ale jedna formulace je pořád lehce dvojkolejná**
   - **Citace:** FAQ „**Pro první audit stačí ruční test zdarma. Nezapomeňte ale na dva bezplatné oficiální reporty**…“ vs. tělo „**začněte oficiálními reporty**“.
   - **Problém:** Není to tvrdý rozpor, ale stále dvě různé vstupní instrukce: v FAQ je ruční test výchozí a reporty doplněk; v těle jsou reporty první krok. To je přesně typ nekonzistence, který u autora bývá.
   - **Návrh:** FAQ přepsat na: „**Pro první audit kombinujte obojí: u Googlu a Microsoftu nejdřív otevřete jejich reporty, pak ručně otestujte konkrétní dotazy a platformy bez oficiálních dat.**“

9. **DROBNÉ — frontmatter stats jsou v zásadě v pořádku, ale čtvrtá položka je stylisticky neobratná**
   - **Citace:** `stats`: „**2 bezplatné oficiální reporty, které ruční vzorek doplní daty — v Search Console a v Bing Webmaster Tools**“
   - **Problém:** Ne chyba obsahu, spíš formulace. „v Search Console a v Bing Webmaster Tools“ je kostrbaté a méně přesné než názvy reportů, které už článek používá.
   - **Návrh:** Přepsat na: „**2 bezplatné oficiální reporty: Generativní AI funkce v Search Console a AI Performance v Bing Webmaster Tools**“.

10. **DROBNÉ — otevřená oprava je správně, ale formulace „oba tedy existovaly už při vydání článku i při jeho poslední aktualizaci“ by si zasloužila explicitní vazbu na data**
    - **Citace:** „**AI Performance… od 10. 2. 2026**“ a „**Generativní AI funkce… od 3. 6. 2026** — **oba tedy existovaly už při vydání článku i při jeho poslední aktualizaci**.“
    - **Problém:** Fakticky to sedí vůči `published: 2026-06-11`, dřívější aktualizaci 3. 8. i nové 11. 8. Jenže v těle není datum minulé aktualizace 3. 8. explicitně vidět, jen je v zadání a frontmatter má už jen 11. 8. Čtenář to sám neověří.
    - **Návrh:** Pokud chce autor hrát na transparentnost, ať to napíše úplně: „**…existovaly už při vydání 11. 6. 2026 i při minulé aktualizaci 3. 8. 2026.**“

11. **DROBNÉ — nový diagnostický krok 0 je užitečný, ale mohl by víc navazovat na dřívější tvrzení o nenahraditelnosti ručního testu**
    - **Citace:** „**Nulové imprese jsou jiný problém než imprese bez zmínky v testu.**“
    - **Problém:** Dobrá věta, ale zůstává osamocená. Přitom právě tady šlo elegantně ukázat rozdělení rolí: report = agregovaný signál, test = konkrétní situace.
    - **Návrh:** Přidat větu: „**První případ řešíte jako problém přítomnosti v AI plochách, druhý jako problém výběru značky u konkrétních dotazů.**“

12. **DROBNÉ — seznam platforem vs. oficiální reporty je věcně konzistentní, ale terminologicky by pomohlo oddělit ‘platformy’ a ‘plochy’**
    - **Citace:** „**U dvou z těch platforem** nemusíte…“ a později „…jen **pro plochy Googlu a Microsoftu**“.
    - **Problém:** Jednou se mluví o platformách, jindy o plochách. U Googlu navíc report není pro „platformu Google“ obecně, ale pro konkrétní AI plochy ve vyhledávání. U Microsoftu podobně. Terminologicky je to trochu rozvolněné.
    - **Návrh:** Sjednotit: „**U dvou ekosystémů — Google a Microsoft — máte navíc oficiální data pro jejich AI plochy.**“

## Verdikt

**Refresh je v jádru povedený a hlavní vadu opravdu opravuje.** Článek už konečně zmiňuje oba oficiální bezplatné reporty, dává jim reálnou roli a zároveň se **zatím nepřeklopil do opačného extrému**, že by reporty ruční test nahrazovaly. To je plus.

**Ale čisté to ještě není.** Největší problém je opět **nekonzistence mezi frontmatter a tělem**: hlavně `howto` a částečně `answer` zůstaly ve staré logice, zatímco tělo už prosazuje nové pořadí „nejdřív reporty, pak ruční test“. Druhý podstatný kaz je **zmatek v dataci/stavu ověření nástrojů třetích stran**.

**Celkově: publikovatelné po menších až středních opravách, ne bez výhrad.** Hlavní teze refreshe drží, ale metadata a formulace je potřeba dotáhnout, jinak tam zase zůstane typická autorova stopa: správný obsah, ale vnitřně ne úplně srovnaný.