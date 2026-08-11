1. **VÁŽNÉ — sklouzávání od „nenašel jsem“ k „u čtyř dalších ne“**
   - **Citace:** „**Ověřit AI robota proti oficiálnímu seznamu IP jde u osmi provozovatelů, u Amazonu s trochou ruční práce navíc a u čtyř dalších ne.**“
   - **Problém:** Tohle už není opatrné „nenašel jsem“. Je to výrok o stavu reality: „u čtyř dalších ne“. Přitom v textu jinde správně říkáte, že u ByteDance, Mety, Mistralu a Cohere jste seznam **nenašel**, ne že neexistuje. Tady si vlastní metodickou opatrnost shazujete jednou větou ve shrnutí.
   - **Návrh:** Přepsat natvrdo. Např.: „…u osmi provozovatelů přímo jde, u Amazonu s ruční prací nad HTML také, a **u čtyř dalších jsem v tomto měření použitelný seznam nenašel**.“

2. **VÁŽNÉ — frontmatter `description` opakuje stejný přehmat**
   - **Citace:** `description: "Prošel jsem 13 provozovatelů. Osm dává strojově čitelný soubor, Amazon jen HTML stránku, **u čtyř jsem nenašel nic**. A stáří se liší o tři roky."`
   - **Problém:** „Nenašel nic“ je příliš široké. Nenalezl jste strojově čitelný nebo dokumentovaný seznam IP rozsahů v rámci svého postupu, ne „nic“. Zvlášť u Mety sám uvádíte, že jste našel dokumentaci a doporučení k allow-listu. Tvrzení je tedy zkratkové až zavádějící.
   - **Návrh:** „…u čtyř jsem **nenašel veřejně dostupný seznam IP rozsahů**“ nebo „…u čtyř jsem **v tomto měření seznam IP rozsahů nenašel**“.

3. **VÁŽNÉ — Meta: závěr je rétoricky ostřejší, než dovoluje podklad**
   - **Citace:** „**Doporučí tedy postup, ke kterému sama nedá podklad.**“
   - **Problém:** Z podkladu plyne: Meta v dokumentaci doporučuje allow-listovat IP adresy místo user-agentů a veřejný seznam neuvádí, odkazuje na kontakt. Z toho poctivě plyne „nedává veřejně dostupný podklad přímo v dokumentaci“. Ne nutně „nedá podklad“ vůbec. Ten e-mail může být právě mechanismus, jak podklad získat. Vy z jedné věty děláte silnější soud, než měření unese.
   - **Návrh:** Zjemnit na něco, co odpovídá zjištění. Např.: „…ale **v dokumentaci k tomu neposkytuje veřejný seznam adres** a odkazuje jen na kontaktní e-mail.“ To je tvrdé dost a zároveň poctivé.

4. **DROBNÉ — FAQ o Metě je formulované přesněji než tělo; vnitřní nekonzistence stylu**
   - **Citace v FAQ:** „…**žádný seznam adres ale neuvádí**.“
   - **Citace v těle:** „…**nedá podklad**.“
   - **Problém:** FAQ je korektnější než hlavní text. To je přesně ten typ frontmatter/tělo/FAQ rozjíždění, na který je u autora potřeba být přísný. Nejde o faktický rozpor, ale o rozdílnou sílu tvrzení.
   - **Návrh:** Sjednotit na slabší, doloženou verzi ve všech částech.

5. **DROBNÉ — „Jediná praktická cesta“ je zbytečně absolutní**
   - **Citace:** „**Jediná praktická cesta, jak identitu ověřit, vede přes seznam IP rozsahů od provozovatele.**“
   - **Problém:** Pro běžnou síťovou kontrolu je to prakticky pravda, ale je to absolutní formulace. Existují i jiné mechanismy důvěryhodného ověření identity robota, byť ne běžně dostupné nebo ne univerzální. Článek je o IP allowlistingu, ne o vyčerpávajícím přehledu autentizačních metod.
   - **Návrh:** „**Nejběžnější praktická cesta**…“ nebo „**V praxi je to obvykle jediná použitelná cesta pro správce cizího webu**…“

6. **DROBNÉ — stáří souborů je většinou podané fér, ale jedno místo zbytečně podsouvá „důvěru“**
   - **Citace:** „…**podle něj se rozhodnout, jak moc mu věřit**.“ a v checklistu „…rozdíl mezi denní aktualizací a rokem 2023 je zásadní pro to, jak výsledku věřit.“
   - **Problém:** Pozor na interpretaci. Sám správně píšete, že starý soubor nemusí být vadný. Pak ale posouváte téma k „jak moc mu věřit“, což už skoro sugeruje nižší spolehlivost starého seznamu. To z měření neplyne. Plyne jen, že stáří je vlastnost, kterou má smysl vzít v úvahu.
   - **Návrh:** Přepsat na neutrálnější: „…**abyste věděli, jak aktuální podklad právě používáte**.“ V checklistu totéž.

7. **DROBNÉ — nadpis „Stáří se liší o skoro tři roky“ je na hraně, ale ještě obhajitelné**
   - **Citace:** „**Stáří se liší o skoro tři roky**“
   - **Problém:** Samo o sobě to není chyba, protože jde o popis rozptylu. Problém by byl, kdybyste z toho dělal vadu. To naštěstí explicitně neděláte. Jen je to clickbaitovější, než by muselo být.
   - **Návrh:** Nemusí se měnit, ale věcnější by bylo „**Data v seznamech mají výrazně různé datum**“.

8. **DROBNÉ — čísla v tabulce sedí, ale text by měl výslovně odlišit „soubory“ od „stránek“**
   - **Citace:** „**Nalezeno 13 souborů u 8 provozovatelů**…“ versus Amazon jako tři HTML stránky.
   - **Problém:** V článku to ve výsledku rozlišujete, ale místy se míchá „soubor“, „seznam“, „stránka“ a „publikuje“. To je přesně místo, kde vznikají nepřesnosti.
   - **Kontrola čísel:** Tabulka dává součet **2 512 prefixů** správně. Počty položek jsou **13 řádků / 13 souborů** a provozovatelů s nalezeným strojově čitelným seznamem je **8**. Sedí i „13 z 18“ a „1 IPv6 prefix mimo Google“.
   - **Návrh:** V úvodu jednou explicitně definovat: „Ve vzorku bylo 18 kandidátních adres strojově čitelných seznamů; Amazon do této osmnáctky nepatřil, protože publikuje HTML dokumentaci, ne JSON.“ Pokud to tak skutečně bylo metodicky.

9. **VÁŽNÉ — metodika 18 kandidátních souborů není v textu dost vysvětlená**
   - **Citace:** „Tak jsem si prošel třináct provozovatelů a osmnáct souborů…“
   - **Problém:** Čtenář neví, co přesně je těch 18. Dokumentované adresy? Odhadnuté adresy? Směs obojího? V limitách pak píšete, že u nenalezených jste zkoušel konvenční adresy a u Mety i dokumentaci. To je důležité, ale v článku je to rozeseté. U textu, jehož hlavní pointa je „neházej z nenalezení závěr o neexistenci“, musíte mít metodiku hledání neprůstřelně vysvětlenou.
   - **Návrh:** Přidat krátký metodický odstavec hned na začátek: co bylo 18 kandidátů, jak vznikly, co znamená „nalezeno“, co znamená „nenalezeno“, zda Amazon byl mimo tuto množinu.

10. **DROBNÉ — Amazonova chyba je přiznaná poctivě, ale formulace „hlavní praktický nález“ je nafouknutá**
    - **Citace:** „**Tohle je hlavní praktický nález**…“
    - **Problém:** Není to nález o trhu, ale oprava vlastního hledacího postupu. To je užitečné, ale nepleťte metodickou sebekorekci s externím zjištěním. Jinak to zavání sebeinscenací.
    - **Návrh:** „**Tohle je hlavní metodické poučení**…“ To je přesnější.

11. **DROBNÉ — oprava starších tvrzení je spíš poctivá než sebechvalná, ale jedna věta je zbytečně teatrální**
    - **Citace:** „**Oprava dvou mých starších tvrzení**“ + „**Opravu jsem doplnil i přímo do toho staršího článku.**“
    - **Hodnocení:** Tady je to v zásadě fér. Konkrétně uvádíte, co bylo špatně a proč. To je správně. Sebechvála by byla, kdybyste se plácal po zádech za transparentnost. To se neděje.
    - **Slabší místo:** „**Potřetí za tři články**“ a „**zachránilo**“ jsou už lehce autorské divadlo.
    - **Návrh:** Nechat opravu, ale zkrátit sebepříběh. Fakta unesou text sama.

12. **DROBNÉ — „většina provozovatelů dává JSON na adrese typu…“ je nedoložená zobecňující zkratka**
    - **Citace z FAQ:** „**Většina provozovatelů dává JSON na adrese typu domena.cz/nazevbota.json**…“
    - **Problém:** Ve vašem vzorku ano-ish, ale zrovna pointa článku je, že konvence selhává a domény se liší (`claude.com`, `commoncrawl.org`, dokumentační sekce atd.). Tahle věta čtenáře zase učí špatný reflex.
    - **Návrh:** „**Často jde o JSON, ale adresa ani doména nejsou jednotné**…“

13. **DROBNÉ — v části o IPv6 je závěr přiměřený, ale „prakticky neexistuje“ je expresivní**
    - **Citace:** „**IPv6 prakticky neexistuje**“
    - **Problém:** Ve vzorku seznamů skoro neexistuje, ne obecně. V textu to dál vysvětlujete správně, takže nejde o faktickou chybu, jen o zkratku v nadpisu.
    - **Návrh:** „**IPv6 se v publikovaných seznamech skoro nevyskytuje**“.

14. **DROBNÉ — „u čtyř jsem nenašel nic“ vs. limity**
    - **Citace:** `answer` a `faq` jsou opatrné, ale `description` je hrubší; v limitách pak „**nemůžu vyloučit, že seznam je jinde**.“
    - **Problém:** Není to vyložený rozpor, ale znovu ten samý autorův zlozvyk: opatrnost v metodice, ostrost v marketingových zkratkách.
    - **Návrh:** Sjednotit všechny krátké formáty (`description`, `answer`, shrnutí) na přesnou formulaci „v tomto měření jsem nenašel“.

## Verdikt

**Celkově: věcně solidní, ale ne čisté.** Největší problém není v číslech — ta **sedí** — ani v opravě starších chyb, ta je převážně **poctivá**. Slabina je jinde a přesně v tom, na co jste upozornil: autor se **opakovaně překlápí z „nenašel jsem“ do silnějšího závěru**, hlavně ve shrnutí, metadescription a u interpretace Mety.

Kdybych to měl seříznout jednou větou: **měření je použitelné, formulace místy přestřelují to, co z něj opravdu plyne**.

Za publikovatelné ano, ale **po úpravě formulací u čtyř nenalezených a u Mety**. Bez toho článek podkopává vlastní metodickou pointu.