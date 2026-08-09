1. **KRITICKÉ — Frontmatter `answer` dělá silnější závěr, než unesou data**
   - **Citace:** `Autorství a copyright tím z obrázku mizí.`
   - **Problém:** Data dokazují ztrátu metadatových segmentů ve zmenšeninách u 15/15 použitelných případů, ne obecně „zmizení autorství a copyrightu z obrázku“ jako takového. Autorství může být mimo soubor, v overlay, ve watermarku, v HTML kolem obrázku, v názvu souboru apod. Tohle je zkratka, která přehání.
   - **Návrh opravy:** Změnit na něco jako: `Ve zmenšenině typicky mizí metadata, která nesla údaje o autorovi, copyrightu nebo původu souboru.`

2. **KRITICKÉ — Úvodní věta „zpravidla zahodí všechno“ neodpovídá ani vlastní tabulce**
   - **Citace:** `... a ta při tom zpravidla zahodí všechno, co v souboru nebylo obrazovými daty.`
   - **Problém:** Ne, ani v textu samotném to není pravda. Pillow ve výchozím nastavení nechá JFIF a komentář, v provozu 109/124 zmenšenin mělo JFIF + komentář. Takže „zahodí všechno“ je fakticky špatně. Zahodí skoro všechna sledovaná metadata, ne všechno neobrazové.
   - **Návrh opravy:** `... a ta při tom zpravidla zahodí téměř všechna sledovaná metadata o původu, autorovi a licenci.`

3. **VÁŽNÉ — Tvrzení „obvykle nenese žádná metadata“ je příliš široké a neuhlídané**
   - **Citace:** `Zmenšenina, kterou návštěvník na webu vidí, obvykle nenese žádná metadata.`
   - **Problém:** V článku se jako metadata sledují EXIF, IPTC, XMP, ICC, JUMBF/C2PA a komentář. Jenže v provozu komentář často zůstal a JFIF také. Pokud autor používá „metadata“ v úzkém smyslu atribuce/původu, musí to říct. Jinak si protiřečí s vlastním zjištěním o komentáři.
   - **Návrh opravy:** `... obvykle nenese žádná zachovaná metadata o autorovi, licenci nebo původu.`

4. **VÁŽNÉ — Přechod od dat o ztrátě metadat k „doložitelnosti původu“ je z větší části oprávněný, ale u AI/C2PA už sklouzává k implikaci širšího dopadu**
   - **Citace:** `Platí to i pro Content Credentials, na kterých stojí odpověď na otázku, jak se dnes pozná AI obrázek.`
   - **Problém:** Tohle je zkratkovité a zavádějící. C2PA/Content Credentials nejsou obecná odpověď na to, „jak se dnes pozná AI obrázek“. Jsou jeden mechanismus původu/provenance, navíc ne plošně nasazený a snadno ztracený v pipeline, což článek právě dokazuje. Věta přisuzuje C2PA širší epistemickou roli, než je fér.
   - **Návrh opravy:** `Platí to i pro Content Credentials, které jsou jedním ze způsobů, jak doložit původ nebo zásah do souboru.`

5. **VÁŽNÉ — „Ve variantě, kterou dostane návštěvník i robot“ není z naměřených dat doloženo**
   - **Citace:** `Ve variantě, kterou dostane návštěvník i robot: hlavička o 14 bajtech a komentář o 57 bajtech.`
   - **Problém:** Návštěvník ano. Robot možná. Ale článek nikde neprokazuje, že vyhledávací robot nebo AI crawler skutečně stahuje tutéž variantu jako běžný návštěvník v daném kontextu. To je pravděpodobné, ne změřené.
   - **Návrh opravy:** `Ve variantě, kterou dostane návštěvník na stránce:` případně `typicky i robot, pokud stahuje stejnou URL.`

6. **VÁŽNÉ — `stats` ve frontmatter zjednodušují výsledek knihoven až na hranu nepřesnosti**
   - **Citace:** `2 z 2 — testované knihovny zahodí metadata už ve výchozím nastavení`
   - **Problém:** Sharp ve výchozím výstupu opravdu nenechal nic. Pillow ale ponechalo JFIF a komentář. Pokud autor myslí EXIF/IPTC/XMP/ICC, musí to být řečeno. Jinak to čtenář pochopí jako „soubor bez metadat“, což podle vlastní tabulky neplatí.
   - **Návrh opravy:** `2 z 2 — ve výchozím nastavení nepřenášejí sledovaná metadata o původu; sharp nenechal nic, Pillow jen JFIF a komentář.`

7. **VÁŽNÉ — Výrok „Ve zmenšeninách z toho nezůstalo ani jednou nic“ je v kontextu segmentů nejasný a bez definice přestřeluje**
   - **Citace:** `Ve zmenšeninách z toho nezůstalo ani jednou nic.`
   - **Problém:** „Z toho“ zde asi znamená z metadat přítomných v originálu. Jenže to není napsané dost přesně. Vzápětí sám autor přiznává, že zůstával JFIF a komentář. Bez explicitního omezení je věta nepřesná.
   - **Návrh opravy:** `Ze segmentů, které nesl originál navíc, se ve zmenšeninách nezachoval ani jeden.`

8. **VÁŽNÉ — Neuhlídané slovo „žádná výjimka“ na vzorku 15 případů**
   - **Citace:** `Patnáct z patnácti. Žádná varianta, žádný e-shop, žádná výjimka.`
   - **Problém:** V rámci těch 15 případů ano. Jazykově to ale zní univerzálněji, než by měl. U autora přesně ten typ rétoriky, který později dělá problémy při citaci mimo kontext.
   - **Návrh opravy:** `Patnáct z patnácti v tomto vzorku. V použitelných dvojicích jsem nenašel jedinou výjimku.`

9. **VÁŽNÉ — Popis vzorku v titulku a perexu zatajuje, že bylo 47 e-shopů, ale analyzovaných „reálných“ 38 a použitelných dvojic jen 31**
   - **Citace:** `Změřeno na 38 e-shopech` / `Porovnal jsem originál se zmenšeninou u 38 e-shopů`
   - **Problém:** Formálně to sedí s „reálnými“ e-shopy, ale hlavní výsledek 15/15 stojí jen na 31 použitelných dvojicích, z nichž 15 mělo metadata v originálu. Titulek i description tím nafukují robustnost. Není to lež, je to marketingová zkratka.
   - **Návrh opravy:** Titulek spíš `... Změřeno na 38 reálných e-shopech, 31 použitelných dvojic` nebo alespoň v perexu hned dodat `použitelných dvojic bylo 31`.

10. **DROBNÉ — Frontmatter `description` je poctivější než `answer`, ale stále by měl přiznat, že jde o podvzorek s metadaty**
   - **Citace:** `z 15 originálů, které nesly metadata, nepřežilo ani jedno`
   - **Problém:** Technicky správně. Ale bez dodatku, že použitelných dvojic bylo 31 a jen 15 mělo co ztratit, to čtenář snadno přečte jako „u 38 e-shopů se to stalo 15krát“. Chybí kontext základny.
   - **Návrh opravy:** `... z 31 použitelných dvojic mělo 15 originálů metadata a ve zmenšeninách z nich nepřežilo ani jedno.`

11. **VÁŽNÉ — V části o Pillow autor zaměňuje „nedokázal jsem běžným save()“ za obecnější implikaci „má smůlu“**
   - **Citace:** `Kdo tedy v Pythonu zmenšuje fotky a spoléhá, že „to jde nastavit", má u dvou ze čtyř formátů metadat smůlu.`
   - **Problém:** Data podle zadání stojí na běžném dokumentovaném API Pillow. To je v pořádku. Ale formulace „má smůlu“ zní absolutně i mimo běžné API — přitom existují jiné cesty, jiné knihovny, ruční práce se segmenty, případně post-processing. Článek by měl zůstat u toho, co měřil.
   - **Návrh opravy:** `... má v samotném běžném `save()` Pillow u IPTC a XMP omezení.`

12. **DROBNÉ — Insight se sharpem používá `withMetadata()`, zatímco tabulka a FAQ `keepMetadata()`**
   - **Citace:** `U withMetadata() navíc podstrčila vlastní ICC profil místo toho původního.`
   - **Problém:** To je přesně ten typ vnitřní nekonzistence, který kazí důvěru. V textu se jinde pracuje s `keepMetadata()`. Pokud jsou míněny dvě různé varianty API, musí to být vysvětlené. Pokud je to pozůstatek starší verze textu, je to chyba.
   - **Návrh opravy:** Sjednotit na jeden konkrétní API název a doplnit, co přesně bylo měřeno. Pokud šlo o jinou metodu nebo starší zápis, vysvětlit to jednou větou.

13. **VÁŽNÉ — FAQ o sharpu tvrdí víc, než je v těle transparentně vysvětleno**
   - **Citace:** `S keepMetadata() se vrátí EXIF, ICC, IPTC i XMP, ale zmizí komentář JPEG.`
   - **Problém:** V těle je to v tabulce, ale chybí dovysvětlení, že jde o výsledek na jednom konkrétním testovacím JPEG se zadanými segmenty a konkrétním volání. FAQ to podává skoro jako obecnou specifikaci knihovny. To je moc silné.
   - **Návrh opravy:** `V mém testu s jedním JPEGem a tímto voláním se vrátily EXIF, ICC, IPTC i XMP, ale ne komentář.`

14. **VÁŽNÉ — FAQ o Pillow má stejný problém s přehnanou obecností**
   - **Citace:** `Výchozí uložení nechá jen JFIF a komentář. EXIF a ICC profil jde vrátit parametrem, ale IPTC ani XMP se mi do JPEGu vrátit nepodařilo...`
   - **Problém:** První věta zní jako univerzální pravidlo Pillow pro každý vstup a kontext. Přitom je to výsledek jednoho kontrolovaného testu. Druhá věta už správně přiznává omezení „mně se nepodařilo“. Ten rozdíl v modalitě je neuhlídaný.
   - **Návrh opravy:** `V mém testu výchozí uložení nechalo jen JFIF a komentář...`

15. **DROBNÉ — „Nikdo to nemusel zapnout, tak to prostě je“ je rétorická vata, ne auditovatelný výrok**
   - **Citace:** `Nikdo to nemusel zapnout, tak to prostě je.`
   - **Problém:** Zbytečně hospodská formulace. Data říkají „výchozí chování je takové“. Nepotřebujete kolem toho pózu.
   - **Návrh opravy:** `Jde o výchozí chování bez dalších parametrů.`

16. **VÁŽNÉ — WordPress část je v zásadě poctivá, ale jedna věta už zase ujíždí od dat**
   - **Citace:** `Zpracovává to tedy stejný nástroj. Co dělá s metadaty, jsem u WordPressu nezměřil.`
   - **Problém:** To, že jedna odvozenina nese podpis GD, neznamená, že „to“ jako WordPress obecně zpracovává stejný nástroj. Znamená to, že na jednom z těch webů byla v jedné odvozenině stopa GD. Přesněji.
   - **Návrh opravy:** `Na jednom z těch webů odvozenina nese stopu knihovny GD. Co dělá WordPress nebo konkrétní hostingová pipeline s metadaty obecně, jsem z toho nezměřil.`

17. **DROBNÉ — Přiznání neúspěchu u WordPressu je poctivé, ne alibistické, ale zaslouží si kratší a tvrdší formulaci**
   - **Citace:** `Takže o WordPressu netvrdím nic. Je to neúspěšné měření, ne tichý výsledek.`
   - **Problém:** Obsahově správně. Jen je to zbytečně ukecané a trochu sebeobranné. Lepší je strohý auditní zápis.
   - **Návrh opravy:** `Vzorek pro WordPress neumožnil závěr. Výsledek nepublikuji jako zjištění, ale jako limit měření.`

18. **DROBNÉ — Článek většinou drží linii „nejde o ranking faktor“, ale jedna formulace kolem AI viditelnosti si koleduje o dezinterpretaci**
   - **Citace:** `Kdo si chce původ ověřit, nemá z čeho.`
   - **Problém:** Jako tvrzení o konkrétní zobrazené variantě je to v pořádku. Ale v kontextu blogu o AI SEO si to čtenář snadno spojí s viditelností v AI systémech. Článek by měl explicitně dodat, že to neznamená automaticky žádný dopad na indexaci, citace nebo ranking.
   - **Návrh opravy:** Doplnit větu typu: `To samo o sobě neříká nic o tom, jak to využije vyhledávač nebo AI systém; říká to jen, že z daného souboru původ neověříte.`

19. **VÁŽNÉ — Chybí explicitní oddělení „souborová metadata“ vs. „HTML/strukturovaná data“ už v úvodu, přitom právě to brání přestřelené interpretaci**
   - **Citace:** úvodní dvě sekce
   - **Problém:** Autor to doplní až později. Jenže první dojem je „web vám maže autora a copyright“. To je přesně ten typ čtení, které si pak žije vlastním životem. U AI/SEO tématu to je chyba struktury.
   - **Návrh opravy:** Už v prvním nebo druhém odstavci přidat větu: `Mluvím jen o metadatech uvnitř obrazového souboru, ne o údajích v HTML stránky.`

20. **DROBNÉ — Čtenářská hodnota je slušná, ale praktická část je krátká vzhledem k délce důkazní části**
   - **Citace:** sekce `Co s tím udělat u sebe`
   - **Problém:** Čtenář se dozví, co se stalo, ale méně už jak řešit priority. Chybí jednoduché rozhodovací schéma: kdy to ignorovat, kdy řešit, jaký je minimální postup pro e-shop vs. fotografa vs. značku.
   - **Návrh opravy:** Přidat 3 krátké podbody:
     - `Produktové fotky z feedu: obvykle stačí HTML popis a licence interně.`
     - `Vlastní foto / ilustrace: autor + licence i do stránky, archiv originálů.`
     - `Pokud je pro vás původ souboru zásadní: ověřte pipeline a počítejte s tím, že platforma metadata nejspíš zahodí.`

21. **DROBNÉ — Struktura je celkově dobrá, ale pořadí by šlo zpřesnit**
   - **Citace:** celek
   - **Problém:** Článek má spád, ale nejsilnější pojistka proti přestřelenému výkladu přichází pozdě. Nejdřív