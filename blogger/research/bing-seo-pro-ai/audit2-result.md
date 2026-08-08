1. **VÁŽNÉ — frontmatter a tělo si odporují v počtu kroků**
   - **Citace:**  
     - `answer: "... Základní kroky jsou tři: ověřit web v Bing Webmaster Tools, odeslat sitemapu a zapnout IndexNow."`  
     - `stats: ... "4 kroky"`  
     - `howto.steps:` má **5 kroků**  
     - tělo má `## Krok 1` až `## Krok 4`, pak samostatně `## Ověřte indexaci` a `## A pak to změřte`
   - **Problém:** Po opravách se článek obsahově rozšířil, ale metadata to nedohnala. Pro čtenáře i pro rich snippets je to matoucí: jednou 3 kroky, podruhé 4, ve structured části 5.
   - **Návrh:** Sjednotit na jeden model. Nejčistší jsou dvě varianty:
     - buď všude **4 kroky** a „ověření indexace + měření“ sloučit do kroku 4 / závěrečné kontroly,
     - nebo všude **5 kroků** a v těle přejmenovat samostatné sekce na `## Krok 5: Ověřte indexaci a měřte citace`.
     Zároveň opravit `answer`, `stats`, `howto` i shrnutí dole.

2. **VÁŽNÉ — titulek pořád slibuje víc, než článek přesně dodává**
   - **Citace:** `title: "Bing SEO pro AI: indexace v Bingu krok za krokem 2026"`
   - **Problém:** Oproti první verzi je text výrazně poctivější a už nestaví na ChatGPT/Bing vztahu. To je dobře. Ale titulkové spojení **„Bing SEO pro AI“** pořád implikuje širší návod pro AI vyhledávání, zatímco článek fakticky pokrývá hlavně **technickou indexační vrstvu v ekosystému Microsoftu + IndexNow**. V těle je to vysvětlené korektně, titul je pořád na hraně.
   - **Návrh:** Pokud musí zůstat keyword i slug, pomůže aspoň zpřesnění v title nebo H1 ve stylu:
     - `Bing SEO pro AI: jak vyřešit indexaci v Bingu krok za krokem`
     - případně nechat slug, ale v titulku zúžit příslib.  
     Samotné rozšíření návodu ten problém zmírnilo, ale úplně nevyřešilo.

3. **DROBNÉ — vztah Copilot / Bing / AI citace je už většinou podaný správně, ale jedna formulace je moc zkratkovitá**
   - **Citace:** `answer: "... Bing — indexu, ke kterému Microsoft vztahuje své AI plochy Copilot a AI shrnutí."`
   - **Problém:** V těle je to formulované opatrněji a lépe: Microsoft v BWT reportuje citace v Copilotu a AI shrnutích v Bingu. Frontmatter `answer` to zase lehce ztvrdí do obecnější vazby na „index“. To není vyloženě chybně, ale je to silnější tvrzení než zbytek textu unese.
   - **Návrh:** Srovnat `answer` s tělem, např.:  
     `"... v prostředí Microsoftu, kde Bing Webmaster Tools reportuje citace v Copilotu a v AI shrnutích v Bingu."`  
     Tím odpadne zbytečně široká implikace o architektuře.

4. **DROBNÉ — formulace o Seznamu je v zásadě správná, ale jedna věta je přesnější, než ji dokládá uvedený důkaz**
   - **Citace:**  
     - FAQ: `"... Jedno oznámení se rozešle všem."`  
     - tělo: `"... jeho meta.json vrací HTTP 200 a živou konfiguraci včetně vlastního API endpointu..."`
   - **Problém:** To, že je Seznam v registru IndexNow a že jeho endpoint/konfigurace žije, je pro tvrzení **„Seznam je zapojený do IndexNow“** dostačující. Méně jisté je absolutnější tvrzení, že se každé jedno oznámení „rozešle všem“, pokud to v praxi závisí na implementaci klienta / hubu / endpointu. Není to velký problém, ale je to zbytečně absolutní.
   - **Návrh:** Změkčit na:
     - `Jedno oznámení lze přes IndexNow doručit všem zapojeným vyhledávačům`
     - nebo `protokol je určený k doručení zapojeným vyhledávačům`.
     Samotná pasáž o Seznamu jinak působí věcně a lépe než dřív.

5. **DROBNÉ — článek drží spád, ale závěr po „A pak to změřte“ už lehce přepíná do seznamového režimu**
   - **Citace:** sekvence `## Ověřte indexaci` → `## A pak to změřte` → `## Co Bing a IndexNow neudělají` → `## Časté chyby` → `## Co dál`
   - **Problém:** Není to rozpadlé, pořád je to čitelné. Jen po praktických krocích následují tři kratší bloky za sebou, které mají podobnou funkci „doplnění / varování / shrnutí“. To mírně oslabuje tah textu.
   - **Návrh:** Zvážit lehké zhuštění:
     - `Ověřte indexaci` a `A pak to změřte` spojit do jednoho finálního kroku,
     - `Co Bing a IndexNow neudělají` ponechat,
     - `Časté chyby` nechat jen pokud je to formátově standard webu.  
     Není to nutná oprava, spíš učesání.

6. **DROBNÉ — v textu zůstala jedna zjednodušující formulace o „AI plochách Microsoftu“**
   - **Citace:** `Pod AI plochami Microsoftu stojí Bing — a ty v odpovědích citují zdroje.`
   - **Problém:** To je v sekci častých chyb a je to opět o chlup tvrdší než zbytek článku. Po předchozích opravách je vidět snaha být přesný; tahle věta vrací zkratku, kterou jste jinde rozebrali opatrněji.
   - **Návrh:** Přepsat třeba na:  
     `V prostředí Microsoftu dává Bing smysl sledovat, protože Bing Webmaster Tools reportuje citace v Copilotu a v AI shrnutích v Bingu.`

## Verdikt

**Publikovat po opravách.**

Hlavní věcný posun po prvním auditu je vidět a většina oprav sedí. Nevidím už zásadní nepodložený argument typu „ChatGPT stojí na Bingu“. Největší zbývající problém je **vnitřní nesoulad frontmatteru a struktury kroků**; to je potřeba srovnat před publikací. Ostatní body jsou spíš zpřesnění formulací než důvod článek shodit.