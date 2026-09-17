# Vypořádání auditů — přepis videa a podcastu

17. 9. 2026. C2: 0 zásadních, 1 drobný TIP. C3: 12 jazykových připomínek (4 střední, 8 nižší priority). Všechny přijaty, žádné odmítnutí. C5 dostane tento soubor až po nezávislé první fázi.

| ID | Stav | Konkrétní řešení |
|---|---|---|
| F1 | Opraveno | „služba stránku použila“ → „uvedla jako zdroj“. Přidána kontrola, zda text stránky podporuje tvrzení, ke kterému odkaz patří. Zůstala výhrada o neprokázané kauzalitě a jednorázovém negativním pozorování. |
| J1 | Opraveno | „o kolik zvýší“ nahrazeno výslovným nezaručením vyšší návštěvnosti a citací, bez předpokladu pozitivního účinku. |
| J2 | Opraveno | Description i úvod nyní slibují porovnání s nahrávkou, zachování významu a kontrolu textu Googlu; ne obecné opravy české gramatiky. |
| J3 | Opraveno | HowTo „Označte mluvčí a doplňte údaje z obrazu“, Stepper „Označte mluvčí a popište důležité dění v obraze“, modelový popisek „Redakční poznámka“. Záměna doplnění obrazu za doplnění informací odstraněna ve všech třech místech. |
| J4 | Opraveno | Kontrola stránky oddělena do vlastní věty: v Search Console ověřit, zda Google stránku má v indexu. |
| J5 | Opraveno | „Nejasné místo si poslechněte znovu. Pokud mu stále nerozumíte, označte ho v přepisu jako nesrozumitelné.“ |
| J6 | Opraveno | Vágní oddělení volby nástroje od kontroly nahrazeno přímým pokynem porovnat výsledný text s nahrávkou u kteréhokoli nástroje. |
| J7 | Opraveno | „Výplně“ upřesněny na zvuky váhání, příklad „ehm“, s podmínkou zachování významu. Je to užší příklad, ne nový univerzální zákaz. |
| J8 | Opraveno | U prvního VideoObject se před názvem uvádí „Strukturovaná data pro video“. |
| J9 | Opraveno | Štítek „Mez výsledku“ → „Co z citace nepoznáte“. |
| J10 | Opraveno | Zájmena k epizodě nahrazena výslovným „její přepis“ a „jeho členění“ pro další přepisy. |
| J11 | Opraveno | „Uchovejte vazbu“ → konkrétní poznamenání odkazu na konečnou nahrávku nebo názvu souboru v HowTo. |
| J12 | Opraveno | Poslední H2 nyní „Nejprve zkontrolujte zveřejněný přepis, potom sledujte AI citace“, zachováno span.hl i strong. |

## C5b a C6

C2 neoznačil žádný zásadní nález; C3 jsou opravy jazyka a rozsahu formulací. Zpětné doověření zásadních faktických oprav není v této fázi nutné. Mechanický checker po opravách: 1 801 slov podle skriptu, 275 aktivních pravidel, **0 nálezů včetně varování**. Po třech drobných úpravách C5 checker znovu spuštěn: 1 849 slov, 275 pravidel, 0 nálezů včetně varování.

Slovník v70 beze změny. Nálezy jsou převážně významové a jednorázové redakční formulace. Ani „místo vraťte k poslechu“ nezobecňujeme na zákaz slovesa vrátit nebo sousloví k poslechu; zde byla potřeba znalost toho, co má čtenář udělat. Všech 12 nálezů a F1 zaneseny do jazykového logu.

## C5 — nálezy první nezávislé fáze

| ID | Stav | Konkrétní řešení |
|---|---|---|
| C5-01 | Opraveno | Výslovně test aktuální publikované URL v Search Console, zobrazení testované stránky, vyhledání věty v HTML; živý test neprokazuje indexaci. Doplněn přímý odkaz https://support.google.com/webmasters/answer/9012289?hl=cs, otevřen a ověřen. |
| C5-02 | Opraveno | Relevantní zvuky doplněny do třetího kroku v HowTo i Stepperu; příklad potvrzovací tón, žádný plošný požadavek na přepis veškeré zvukové kulisy. |
| C5-03 | Opraveno | CTA nyní „AI SEO Wireframe Pack za 1 490 Kč bez DPH“, podle `pack.ts:157` priceDetail. Nejde o samostatný právní výklad. |

Všechny tři označil auditor jako drobné; žádný zásadní nález, C5b není potřeba. Druhá fáze prověří i skutečné promítnutí těchto úprav.

## C5 — uzavření druhé fáze

Nezávislý auditor ověřil všech 16 oprav v konečném článku. Verdikt PUBLIKOVAT, 0 otevřených a 0 nových nálezů. Kontrolní hash článku odpovídá reportu.
