1. **A — praktický box po opravě si stále odporuje s research i se zbytkem článku**
   - **Citace:** „**Změna výchozího nastavení se u části účtů provede sama.**“
   - **Problém:** To je přesně tvrzení, které měl článek opravovat. Primární zdroje mluví o **„new domains onboarding to Cloudflare“ / „For all new domains onboarding to Cloudflare“**, ne o „části účtů“. „Účet“ ≠ „doména“ a formulace znovu evokuje automatickou změnu u existujících zákazníků. Zároveň je to v rozporu s jinými místy téhož článku: „Existující doméně se 15. září nic samo nepřepne.“
   - **Konkrétní oprava:** Přepsat na: „**Změna výchozího nastavení se od 15. září týká jen nově zakládaných domén. Existujícím doménám se nic samo nepřepne.**“

2. **A — description je po refreshi obsahově mimo a slibuje víc, než článek skutečně dokládá**
   - **Citace:** „…co z toho dnes reálně jde, proč to českému webu nic nenese **a co se mění samo**.“
   - **Problém:** „Co se mění samo“ je po opravě zavádějící. Změna se podle zdrojů týká **výchozího nastavení nových domén**, ne obecně „samo“ u čtenářova webu. Po předchozí chybě je tahle zkratka zbytečně riziková.
   - **Konkrétní oprava:** „…co z toho dnes reálně jde, proč to českému webu nic nenese **a jaké nové výchozí nastavení čeká nově zakládané domény od 15. září 2026**.“

3. **A — FAQ používá nepřesnou a možná přestřelenou definici Agent**
   - **Citace:** „…zablokuje trénink a **použití agenty**.“
   - **Problém:** Jazykově je to kostrbaté; věcně také. Primární citace říká jen „Bots classified as Training or as Agent“. Z toho nelze bez opory dělat definici „použití agenty“. V článku B je lepší a střízlivější formulace „Agent je automatická činnost jednající v reálném čase za konkrétního člověka“, ale i ta už je interpretační. V A je to navíc nečesky.
   - **Konkrétní oprava:** „…se povolí vyhledávání, ale zablokují se roboti zařazení do kategorií **Training a Agent**.“ Případně bez výkladu, pokud není v článku potřeba.

4. **B — title slibuje akci „co nastavit do 15. září“, ale text současně říká, že existujícím doménám se nic samo nepřepne**
   - **Citace:** „**Cloudflare a AI roboti: co nastavit do 15. září**“
   - **Problém:** Není to přímý faktický rozpor, ale je to silnější a urgentnější framing, než dovolují citace. Z primárních zdrojů plyne změna defaultů pro **nové domény**, ne nutnost něco „do 15. září“ nastavit u stávajících. Pro čtenáře se stávající doménou to může vytvářet falešný deadline.
   - **Konkrétní oprava:** „**Cloudflare a AI roboti: jak nastavit Search, Agent a Training**“ nebo „**…co se mění od 15. září u nových domén**“.

5. **B — description opět trochu přepíná význam data 15. 9.**
   - **Citace:** „…co která volba znamená, kde je past se smíšenými roboty **a co se mění 15. září**.“
   - **Problém:** Změna se neděje obecně „15. září“, ale pro **nově zakládané domény** od tohoto data. Po opravě by bylo lepší být přesný i v meta popisu.
   - **Konkrétní oprava:** „…kde je past se smíšenými roboty **a jaké nové výchozí hodnoty od 15. září dostanou nově zakládané domény**.“

6. **B — jedna věta o starém přepínači je pravděpodobně silnější, než dovoluje dodaná citace**
   - **Citace:** „**Starý přepínač se přitom choval opačně: podle dokumentace smíšené roboty naopak vynechával.**“
   - **Problém:** V research je jen doloženo: „Mixed-purpose crawlers … will also be blocked by all configurations to block AI training, **including the legacy 'Block AI bots' option**.“ To dokládá současné chování legacy volby nebo její zahrnutí do blokace, ale **nedokládá samo o sobě předchozí stav** „dřív vynechával“. Pokud to autor ví z jiné části dokumentace, v dodaném research to chybí. V této podobě je tvrzení silnější než předložená citace.
   - **Konkrétní oprava:** Změnit na: „**Podle dokumentace pod legacy volbu nově spadají i smíšení roboti, takže nelze předpokládat stejný výsledek jako dřív.**“ Pokud má být zachováno „dřív vynechával“, doplnit doslovnou citaci z dokumentace pro staré chování.

7. **B — navazující závěr o rozdílu staré a nové volby je také moc kategorický bez přímé opory**
   - **Citace:** „**Stará a nová volba tedy nedělají totéž**, takže si nastavení nemůžete jen tak překlopit a předpokládat stejný výsledek.“
   - **Problém:** Směr je nejspíš správný, ale „nedělají totéž“ je široké tvrzení. Dodaná citace bezpečně kryje jen jeden konkrétní aspekt: **smíšené crawlers** spadají pod blokaci tréninku i u legacy volby. Ne celý funkční rozdíl mezi „starou a novou volbou“.
   - **Konkrétní oprava:** „**Nelze předpokládat stejný výsledek, zejména u smíšených robotů, které dokumentace nově zahrnuje i pod legacy volbu.**“

8. **A/B — kategorie Search/Agent/Training jsou sladěné, ale u Agent chybí opatrnost v obou článcích**
   - **Citace A:** „…zablokuje trénink a použití agenty.“
   - **Citace B:** „Agent je automatická činnost jednající v reálném čase za konkrétního člověka.“
   - **Problém:** Nejde o přímý rozpor mezi články, ale o nestejnou míru přesnosti. Primární citace, které jste dodal, jen potvrzují existenci kategorií **Search / Agent / Training** a jejich defaultní zacházení, ne jejich detailní definice. B ještě jde, A je horší. Po opravě sporné věci by bylo dobré sjednotit slovník a nepřidávat tvrdší výklad, než je nutné.
   - **Konkrétní oprava:** V obou článcích používat konzistentně „**kategorie Search, Agent a Training**“ a definice uvádět jen tam, kde je zdrojová opora. V A zcela bez výkladu; v B klidně dodat „Cloudflare je takto popisuje“ jen pokud je to opravdu citovatelné ze zdroje.

9. **A/B — smíšení roboti už si neodporují, ale A je méně přesný než B**
   - **Citace A:** „**Roboti, kteří vyhledávání od tréninku neoddělí, spadnou pod blokaci tréninku.**“
   - **Citace B:** „**Blokace Training zasáhne i roboty, kteří kombinují Search a Training zároveň.**“
   - **Problém:** Rozpor tu není; B je přesnější k citaci „multi-purpose crawlers that combine Search and Training“. A používá volnější parafrázi „neoddělí“, která může znít jako dobrovolné rozhodnutí robota, ne klasifikace chování. Není to chyba, ale po takové opravě bych zpřesnil.
   - **Konkrétní oprava:** V A nahradit za: „**Smíšení roboti, kteří kombinují Search a Training, spadnou pod blokaci tréninku.**“

10. **A — poznámka o opravě je poctivá, ale úvodní kontext researchi odporuje**
   - **Citace v kontextu:** „…ten mladší, který jsem publikoval 1. srpna, **měl pravdu ten starší**.“
   - **Problém:** To je zjevně rozbitá věta / převrácený význam. Hned o pár řádků níž research správně říká: „**Verdikt: starší článek měl pravdu.**“ Pokud je tato věta určena i k publikaci jako editorská poznámka, je to nová chyba zavedená opravou.
   - **Konkrétní oprava:** „…a ten mladší, který jsem publikoval 1. srpna, **se mýlil; pravdu měl starší článek**.“

11. **A — otevřená poznámka o opravě je poctivá a nepůsobí jako vymlouvání**
   - **Citace:** „**To bylo špatně.** Vzal jsem to ze shrnutí tiskové zprávy Cloudflare, aniž bych to ověřil…“
   - **Problém:** Tady problém není věcný, ale auditně: tohle je dobrá, přiměřená formulace. Nezlehčuje chybu, ale ani se teatrálně nemrská.
   - **Konkrétní oprava:** Jen drobná stylistika: „Vzal jsem to **z automatického shrnutí**…“ je ještě přesnější než „ze shrnutí tiskové zprávy“, protože právě automatické shrnutí bylo zdrojem artefaktu.

12. **B — poznámka o refreshi je také poctivá, ale poslední věta je lehce silnější než doložené minimum**
   - **Citace:** „…**píšou jen o nových výchozích hodnotách. Tvrzení proto z článku mizí. Co u starého přepínače doložené je: podle dokumentace pod něj spadají i smíšení roboti, takže se nechová stejně jako dřív.**“
   - **Problém:** První dvě věty jsou v pořádku. Poslední půlka „nechová stejně jako dřív“ už zase implikuje znalost minulého stavu, která v dodaném research není přímo ocitovaná. Je to malý, ale zbytečný přesah.
   - **Konkrétní oprava:** „…**podle dokumentace pod něj spadají i smíšení roboti; při použití legacy volby proto nepředpokládejte stejný výsledek bez ověření v aktuální dokumentaci.**“

13. **B — FAQ o dopadu na citace je užitečné, ale věta „co si robot nenačte, to nemůže použít v odpovědi“ je logická inference, ne citace**
   - **Citace:** „**Zbytek plyne z mechaniky: co si robot nenačte, to nemůže použít v odpovědi.**“
   - **Problém:** Není to nutně chyba, ale je to vlastní dedukce autora. Protože zadání výslovně chce hlídat tvrzení silnější než citace, tady bych jen lehce ubrzdil jistotu. Jsou možné scénáře s dříve načteným obsahem, sekundárními zdroji apod.
   - **Konkrétní oprava:** „**Praktický důsledek často bude ten, že robot z takového obsahu nebude moci čerpat pro odpovědi; nelze ale z toho bez dalšího odvodit přesný dopad na citace či návštěvnost.**“

14. **A — praktická hodnota se neztratila, ale jeden box ji naopak matl**
   - **Citace:** celý blok „Tohle je ta praktická část“.
   - **Problém:** Článek si jinak drží dobrou užitnost: odlišuje monetizaci od blokování a dává rozhodovací rámec. Jen tento box po opravě znovu zavádí chybný praktický takeaway. To je škoda, protože právě tahle část má čtenáři říct „co s tím“.
   - **Konkrétní oprava:** Box přepsat na jasný akční závěr: „**Prakticky: pokud máte existující doménu, zkontrolujte nastavení ručně; pokud budete nasazovat novou doménu po 15. 9. 2026, počítejte s jinými defaulty.**“

15. **Jazyk — několik drobných stylistických a gramatických vad**
   - **A — Citace:** „…zablokuje trénink a **použití agenty**.“
   - **Problém:** Neobratné / nečeské.
   - **Konkrétní oprava:** „…zablokují se kategorie Training a Agent.“
   - **A — Citace:** „Cloudflare od něj **posunul** důraz jinam…“
   - **Problém:** U značky/firmy v češtině spíš „posunulo“.
   - **Konkrétní oprava:** „Cloudflare od něj **posunulo** důraz jinam…“
   - **B — Citace:** „…Search je chování, které sbírá nebo indexuje obsah, aby na něj později umělo odpovídat“
   - **Problém:** Mírně neobratné zájmeno „na něj“.
   - **Konkrétní oprava:** „…aby z něj později umělo odpovídat“ nebo „…aby na jeho základě později umělo odpovídat“.
   - **Kontext/research — Citace:** „…ten mladší … měl pravdu ten starší.“
   - **Problém:** Rozbitá věta.
   - **Konkrétní oprava:** viz bod 10.

### 3 nejzávažnější
1. **A:** stále zůstala věta „Změna výchozího nastavení se u části účtů provede sama“, která vrací opravenou chybu zadními vrátky.  
2. **B:** tvrzení o starém přepínači („choval se opačně“, „nedělají totéž“) jsou v pár místech silnější než doslovné citace dodaného research.  
3. **B title / A description:** metadata pořád místy přehánějí význam data 15. 9. pro stávající domény a vytvářejí naléhavost, kterou primární zdroj nepotvrzuje.

**Publikovatelnost:** Po opravě 2–3 výše uvedených míst jsou oba články publikovatelné; teď bych je pustil až po ještě jednom přesném kole na metadata a formulace kolem „automatické“ změny a legacy přepínače.