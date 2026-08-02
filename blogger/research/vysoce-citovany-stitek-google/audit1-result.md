1. **Absolutní tvrzení o nezveřejněných kritériích jsou místy přestřelená**
   - **Citace:** „**Žádný práh, žádný počet odkazů, žádná kritéria. Za čtyři roky ani jedno.**“
   - **Problém:** Tohle je nosná negativní teze, ale formulace míchá tři různé věci: explicitní práh, počet odkazů a obecná kritéria. Z podkladů plyne, že Google zveřejnil aspoň rámcový mechanismus („significant number of news stories are linking…“), takže tvrdit „žádná kritéria“ bez upřesnění je moc silné. To už není jen „Google neřekl práh“, ale skoro „neřekl nic“, což neodpovídá ani vašemu vlastnímu textu o pár vět výš.
   - **Návrh opravy:** „**Google zveřejnil jen obecný mechanismus: když na článek odkazuje významný počet zpravodajských textů, může ho označit jako vysoce citovaný. Konkrétní práh, počet odkazů ani podrobnější kritéria ale nezveřejnil.**“

2. **Stejný problém je ve statistikách, kde je negativní tvrzení podané jako nula**
   - **Citace:** `value: "0"` / `label: "zveřejněných kritérií nebo prahů — za čtyři roky ani jedno"`
   - **Problém:** Tohle je věcně sporné, protože Google minimálně zveřejnil rámcové kritérium/mechanismus. „0 kritérií“ je silnější tvrzení než „0 konkrétních prahů“. U negativních tvrzení je potřeba extrémní opatrnost; tady autor zaměňuje „není zveřejněná metodika“ s „nejsou zveřejněná žádná kritéria“.
   - **Návrh opravy:** `value: "0"` / `label: "zveřejněných konkrétních prahů nebo detailní metodiky"`  
     nebo lépe změnit metriku úplně, např. `value: "1 obecný princip"` / `label: "Google popsal mechanismus, ale ne konkrétní práh ani metodiku"`

3. **FAQ opakuje příliš absolutní negaci**
   - **Citace:** „**Google nezveřejnil žádný postup, práh ani kritéria** — ani při spuštění, ani teď.“
   - **Problém:** „žádná kritéria“ je znovu moc kategorické. Google zveřejnil aspoň obecné vodítko, podle čeho štítek přiděluje. Správné je tvrdit, že nezveřejnil **postup, threshold, detailní podmínky**; ne že nezveřejnil vůbec nic jako kritérium.
   - **Návrh opravy:** „**Google nezveřejnil žádný postup ani konkrétní práh a nepopsal detailní kritéria. Zveřejnil jen obecný princip: musí jít o obsah, na který odkazuje významný počet zpravodajských textů.**“

4. **Další absolutní negace bez dost opatrné formulace**
   - **Citace:** „**Google to nikde neuvedl** a my to netvrdíme.“
   - **Problém:** U tvrzení o neexistenci je „nikde“ rizikové, pokud není opřené o systematický průzkum všech relevantních vyjádření. Bezpečnější je psát „v námi dohledaných materiálech“ nebo „v oficiálním popisu“. Jinak to zní jako neobhajitelná univerzální negace.
   - **Návrh opravy:** „**V oficiálních materiálech, které jsme dohledali, Google neuvádí, že by štítek sám o sobě zlepšoval pozici.**“

5. **Tvrzení „Google žádné kroky neuvedl“ je v zásadě v pořádku, ale chce zpřesnit rozsah**
   - **Citace:** „…nikdo si neověří, že **Google žádné kroky neuvedl**.“
   - **Problém:** To je výrazně přesnější než „žádná kritéria“, ale i tady by pro auditní čistotu pomohlo vymezit, že jde o **oficiální návod/postup k získání štítku**. Jinak se to může číst jako „Google o tom neřekl nic“, což není pravda.
   - **Návrh opravy:** „…nikdo si neověří, že **Google neuvedl žádný oficiální návod ani postup, jak štítek cíleně získat**.“

6. **Datace spuštění 31. 3. 2022 není dost pevně ukotvená v tom, co je oficiální vs. mediální zdroj**
   - **Citace:** „**Štítek existuje od 31. března 2022.**“
   - **Problém:** Datace může sedět podle uvedeného research, ale stojí na TechCrunchi. V článku se to podává s vysokou jistotou a zároveň se z toho dělá klíčový korektiv vůči „novince 2026“. To je asi obhajitelné, ale bylo by čistší dodat kontext „Google ho tehdy spustil v Top Stories na mobilech v USA“ a nepůsobit, že od toho data existoval ve stejné podobě globálně všude.
   - **Návrh opravy:** „**Google štítek spustil 31. března 2022, nejprve v Top Stories na mobilech v USA; v roce 2026 ho rozšířil na další odkazy ve výsledcích.**“

7. **Formulace o „čtyřech letech“ lehce přehání přesnost**
   - **Citace:** „Za **čtyři roky** ani jedno.“ / „Štítek je **čtyři roky starý**…“
   - **Problém:** Od 31. 3. 2022 do 3. 8. 2026 je to přes čtyři roky, takže technicky to není chyba. Ale v kontextu textu, který je přísný na dataci jiných, by bylo lepší mluvit přesněji: „více než čtyři roky“ nebo „od jara 2022“. Jinak to působí jako rétorické zaokrouhlení ve chvíli, kdy jinde autor peskuje nepřesnost ostatních.
   - **Návrh opravy:** „**od jara 2022**“ nebo „**více než čtyři roky**“.

8. **Tvrzení o nedosažitelnosti pro běžný firemní web je z velké části autorův odhad, ne něco, co říká Google**
   - **Citace:** „**Pro běžný firemní web je prakticky nedosažitelný**…“ / „**Většinou ne, a je fér to říct rovnou.**“
   - **Problém:** Jako expertní interpretace to může být rozumné, ale text ji často podává skoro jako fakt přímo plynoucí od Googlu. Z podkladů plyne, že jde o signál navázaný na citace ze zpravodajství; z toho **lze usuzovat**, že běžné firemní weby mají malou šanci. Nelze to ale vydávat za oficiálně potvrzenou hranici způsobilosti.
   - **Návrh opravy:** „**Z Googlu to neplyne výslovně, ale z popsaného mechanismu vychází, že pro běžný firemní web bude štítek spíš výjimečný než realistický cíl.**“

9. **Tabulka „Má šanci / Prakticky nemá“ je příliš kategorická**
   - **Citace:** `rightLabel="Prakticky nemá"` + „e-shop, web služby, běžný firemní blog“
   - **Problém:** Tohle už není opatrná interpretace, ale tvrdé třídění bez opory v oficiálních pravidlech. Přitom sám text níž uznává výjimku u firem s vlastními daty. Tabulka tedy zjednodušuje víc, než je zdrávo.
   - **Návrh opravy:** změnit na `rightLabel="Spíš výjimečně"` a řádek „Typ webu“ třeba na „**běžný firemní web bez obsahu, který přebírá zpravodajství**“.

10. **Vnitřní rozpor mezi „nedá se nic dělat“ a pozdějšími doporučeními**
    - **Citace:** „**Protože zbytek internetu na tuhle otázku odpoví návodem.**“ / „**není to nastavení, je to důsledek**.“  
      vs.  
      „**publikovat data, o kterých se dá psát**“ a „obsah, který **něco nového přináší**“
    - **Problém:** Text správně odmítá falešný checklist, ale místy sklouzává k dojmu, že se nedá dělat vůbec nic. To pak není zcela v souladu s pozdějším praktickým závěrem, že existují aspoň nepřímé kroky: vlastní data, originální zjištění, práce se zdroji. Není to fatální rozpor, ale je to napětí mezi sekcemi.
    - **Návrh opravy:** Dřív explicitně napsat: „**Neexistuje přímý postup k získání štítku, ale lze zvyšovat šanci tím, že publikujete původní zjištění, která mohou převzít média.**“

11. **Článek je na hraně zbytečné demotivace, ale hlavně v jedné formulaci přehání**
    - **Citace:** „**Přehled toho, co už je jinde, tu šanci nemá nikdy, ať je napsaný sebelíp.**“
    - **Problém:** „nikdy“ je zbytečně absolutní. V textu, který kritizuje nepřesnost jiných, je to slabina. Navíc Google nikde neříká, že shrnující text nemůže být citován; jen z popsaného mechanismu plyne, že menší šanci má obsah, který není primárním zdrojem.
    - **Návrh opravy:** „**Přehled toho, co už je jinde, má na takové označení zpravidla mnohem menší šanci než původní zdroj.**“

12. **Věcně ne zcela podložené tvrzení o tom, čemu Google „přikládá váhu“**
    - **Citace:** „…ukazuje, **čemu Google přikládá váhu**.“ / „Google odlišuje původní zdroj od přepisu.“
    - **Problém:** Jako interpretace to dává smysl, ale je potřeba držet rozdíl mezi **UX označením ve výsledcích** a **rankingovým signálem**. Když současně správně píšete, že vliv na hodnocení není doložený, je lepší neznít, jako by Google tímto oficiálně deklaroval obecnou váhu v řazení.
    - **Návrh opravy:** „…ukazuje, **co Google chce ve výsledcích zvýraznit pro čtenáře**.“ a „Google se tím **snaží vizuálně odlišit pravděpodobný původní zdroj od přepisů**.“

13. **Tabulka se změnami v květnu 2026 obsahuje tvrzení, které by zasloužilo opatrnější formulaci**
    - **Citace:** „**Google ukáže, když článek na vysoce citovaný zdroj odkazuje**“
    - **Problém:** Pokud to vychází z oznámení, je to asi správně, ale formulace je příliš definitivní a obecná. Změna se nemusí zobrazovat univerzálně u každého takového článku a ve všech kontextech.
    - **Návrh opravy:** „**Google může nově zobrazit i indikaci, že článek odkazuje na vysoce citovaný zdroj.**“

14. **Jazyková drobnost: nejednotné české uvozovky a apostrofická přesnost**
    - **Citace:** „**„vysoce citovaný"**“
    - **Problém:** Otevírací a zavírací uvozovka nejsou spárované česky; v titulku i textu se opakuje česká otevírací dole a anglická zavírací nahoře. Není to obsahová chyba, ale je to typograficky špatně.
    - **Návrh opravy:** „**‚vysoce citovaný‘**“ nebo „**„vysoce citovaný“**“ konzistentně v celém textu.

15. **Jazyková drobnost: „významný počet zpravodajských příspěvků“ je kostrbaté a zbytečně doslovné**
    - **Citace:** „…když na určitý článek odkazuje **významný počet zpravodajských příspěvků**…“
    - **Problém:** V češtině to zní nepřirozeně; navíc jinde používáte „textů“, „článků“, „zpravodajství“. Stylově by pomohlo sjednocení.
    - **Návrh opravy:** „…když na určitý článek odkazuje **významný počet zpravodajských článků**…“

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**