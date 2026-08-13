1. **Blokující**  
   **Citace:** „**kódování na českém webu není rozbité** — rozbité bývají nástroje, které ho čtou.“  
   **Problém:** Nepodložený přeskok z 80 homepage na „český web“. Research výslovně říká, že vzorek není náhodný a jde o 33 médií + 47 e-shopů z jedné platformy.  
   **Návrh opravy:** „**V tomhle vzorku 80 homepage jsem nenašel web, který by posílal jiné kódování, než deklaruje.** To neříká nic obecného o celém českém webu.“

2. **Vážné**  
   **Citace:** title: „**Kódování stránky: 80 českých webů, nula chyb**“  
   **Problém:** „Nula chyb“ je moc široké. Ve vzorku jsou 3 weby s `<meta charset>` za 1024 B, což článek sám označuje jako odchylku od specifikace. Navíc titul zní jako soud o webech obecně.  
   **Návrh opravy:** „**Kódování stránky: ve vzorku 80 homepage bez rozporu v deklaraci**“ nebo „**80 homepage: žádný rozpor mezi deklarací a obsahem**“.

3. **Vážné**  
   **Citace:** „**Odpověď na druhou otázku je tedy jasná: nemůžou.**“  
   **Problém:** Absolutní soud. Autor měřil jen deklaraci a dekódovatelnost homepage, ne jiné technické chyby kolem kódování ani chování různých klientů.  
   **Návrh opravy:** „**V tomhle vzorku za konkrétní problém nemohly weby: všech pět webů ve windows-1250 deklarovalo kódování správně.**“

4. **Vážné**  
   **Citace:** „**Tři weby mají značku `meta` až za hranicí 1024 bajtů… U všech tří ale kódování deklaruje i hlavička, takže to v praxi nevadí.**“  
   **Problém:** „Nevadí“ je moc jisté. Autor neměřil všechny klienty ani roboty. Může tvrdit jen to, že v jeho měření nezůstala informace o kódování nedostupná.  
   **Návrh opravy:** „**…takže v mém způsobu čtení to problém nezpůsobilo. U jiných klientů jsem to neměřil.**“

5. **Vážné**  
   **Citace:** FAQ: „**Hlavička má podle specifikace přednost. Značka meta má být v prvních 1024 bajtech dokumentu.**“ + tělo: „**Podle specifikace má přednost.**“  
   **Problém:** Technická formulace je příliš kategorická a bez opory v přesném režimu, který článek řeší. Pokud si autor není jistý rozsahem pravidla, má to přiznat.  
   **Návrh opravy:** „**Pro HTML je bezpečné řídit se nejdřív HTTP hlavičkou `Content-Type`; když chybí, použít `<meta charset>`. Specifikace zároveň požaduje, aby `<meta charset>` bylo brzy v dokumentu, typicky v prvních 1024 bajtech.**“

6. **Vážné**  
   **Citace:** „**Musí respektovat deklaraci: nejdřív hlavičku, pak značku meta, a teprve pak hádat.**“  
   **Problém:** Tvrzení o správném pořadí je podané jako univerzální pravidlo pro „nástroje“, ale článek neměří chování parserů ani neřeší MIME typy, sniffing a rozdíly implementací.  
   **Návrh opravy:** „**Pro jednoduchý strojový čteč HTML je rozumné nejdřív zkusit `charset` z HTTP hlavičky, pak `<meta charset>`, a až potom fallback.**“

7. **Drobné**  
   **Citace:** tabulka v těle končí u „**posílá windows-1250 | 5**“, ale frontmatter `stats` má ještě „**3 weby mají deklaraci v HTML až za hranicí 1024 bajtů**“.  
   **Problém:** Nejednotnost mezi shrnující tabulkou a frontmatterem. Čtenář dostane dvě různé sady „hlavních čísel“.  
   **Návrh opravy:** Doplňte do tabulky i řádek „**`<meta charset>` až za 1024 B | 3**“, nebo ten údaj z `stats` stáhněte do textu a neprezentujte ho jako hlavní metriku.

8. **Vážné**  
   **Citace:** „**Tři weby ve vzorku to mají dál a zachraňuje je jen hlavička.**“  
   **Problém:** „Zachraňuje“ je spekulativní a dramatizuje. Autor neměřil selhání klientů při pozdním `<meta charset>`.  
   **Návrh opravy:** „**Tři weby to mají dál než doporučuje specifikace; v tomto vzorku zároveň posílaly `charset` i v HTTP hlavičce.**“

9. **Drobné**  
   **Citace:** „**Rozdíl je pět řádků kódu a dva falešné nálezy, které jsem kvůli nim málem publikoval.**“  
   **Problém:** Sebestředný detail. Pro čtenáře je důležité chování nástroje, ne autorovo „málem publikoval“.  
   **Návrh opravy:** „**Rozdíl je pár řádků kódu, které zabrání falešným nálezům u webů mimo UTF-8.**“

10. **Drobné**  
    **Citace:** „**Tohle je celý příběh toho měření. Šel jsem hledat rozbité weby a našel rozbitý vlastní skript.**“  
    **Problém:** Vata a opakování motivu autorovy chyby. Už je řečeno v úvodu i limitech.  
    **Návrh opravy:** Zkrátit na jednu větu: „**Měření ukázalo, že problém byl v nástroji, který ignoroval deklarované kódování.**“

11. **Vážné**  
    **Citace:** „**Kontrola smysluplnosti: všech 80 domén má na homepage českou diakritiku, takže špatné čtení by bylo na čem poznat.**“  
    **Problém:** Chybí limit, že tahle kontrola zachytí jen část problémů. Web může mít diakritiku na homepage, ale ne nutně v každé části textu; chybné dekódování se také nemusí projevit stejně nápadně u všech znaků a všech parserů.  
    **Návrh opravy:** „**Všech 80 homepage obsahovalo českou diakritiku, takže hrubé chybné dekódování bylo možné odhalit. Neověřuje to ale všechny typy problémů ani jiné podstránky.**“

12. **Drobné**  
    **Citace:** „**windows-1250 nemusíte hned řešit**“  
    **Problém:** Praktická rada je příliš volná bez dovětku o omezení měření. Může znít jako obecné doporučení neřešit staré kódování.  
    **Návrh opravy:** „**Samotná přítomnost windows-1250 v tomhle měření neznamenala chybu. Pokud ale plánujete změny šablon, API nebo migraci, UTF-8 je dnes obvykle jednodušší a bezpečnější volba.**“