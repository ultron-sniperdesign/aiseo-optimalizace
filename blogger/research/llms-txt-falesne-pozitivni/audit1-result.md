1. **KRITICKÉ — Závěr „Správná je ta poslední“ je neobhájený a podsouvá normativní definici**
   - **Citace:** „Na otázku ‚kolik z osmdesáti českých webů má llms.txt‘ jsou tři různé odpovědi… **Správná je ta poslední.**“
   - **Problém:** To je nejslabší místo textu. Z dat plyne:
     - 52 vrací `/llms.txt` s HTTP 200,
     - 47 vrací ne-HTML,
     - 3 vrací ne-HTML a neprázdné tělo.
     
     Ale z toho **neplyne**, že jen 3 weby „mají llms.txt“, pokud pojem „má“ není předem jasně definovaný jako „má neprázdný obsah“. U 44 e-shopů soubor **existuje a je servírovaný**, jen je prázdný. To může být bezcenné pro účel „má použitelný obsah“, ale není to totéž jako „nemá soubor“.
   - **Návrh:** Přepiš na něco poctivého:
     - „Podle HTTP 200 ho má 52 webů, po vyloučení HTML fallbacků zbude 47 servírovaných textových souborů a **jen 3 mají neprázdný obsah**.“
     - nebo „Pro otázku ‚kolik webů má **neprázdný** llms.txt‘ je odpověď 3.“
     - Vyhoď větu „Správná je ta poslední.“

2. **KRITICKÉ — Titulek je úderný, ale významově přehání**
   - **Citace:** „**52 webů má llms.txt. Po otevření zbydou tři**“
   - **Problém:** Titulek míchá tři různé kategorie: HTTP 200, textový soubor, neprázdný obsah. Je to clickbaitově přesné jen napůl. „Po otevření zbydou tři“ implikuje, že zbývajících 49 je falešných, což není pravda: 44 jsou reálně servírované prázdné soubory z platformního defaultu.
   - **Návrh:** Zpřesnit:
     - „HTTP 200 napočítá 52 llms.txt. Neprázdný obsah mají tři“
     - „Naivní sken napočítá 52 llms.txt, po kontrole obsahu zbydou tři neprázdné“

3. **VÁŽNÉ — Článek občas sklouzává k zobecnění platformního defaultu, i když se tomu jinde brání**
   - **Citace:** „Průzkumy typu ‚kolik procent webů už má llms.txt‘… **Pokud se ten sken opírá o stavový kód, nadhodnocuje. V mém vzorku by napočítal 52 z 80 tam, kde jsou tři.**“
   - **Problém:** Hlavní riziko přesně tady. Rozdíl 52 → 3 je z velké části dán tím, že **44/47 e-shopů je z jedné platformy**. To není obecná vlastnost „českého webu“, ale vlastnost konkrétní platformy ve vzorku. Autor to sice níže přiznává, ale tahle formulace je moc široká a čtenář si odnese obecný soud.
   - **Návrh:** Tvrdě svázat závěr se vzorkem:
     - „V tomhle vzorku nadhodnocuje dramaticky — hlavně kvůli platformnímu defaultu u 47 e-shopů z jedné platformy.“
     - „Nejde o odhad českého webu obecně, ale o ukázku, jak moc může číslo ujet, když se sejde soft 404 a platformní default.“

4. **VÁŽNÉ — Autor sice neobviňuje konkrétní průzkumy, ale pořád naznačuje víc, než má podložené**
   - **Citace:** „Průzkumy typu… se dělají plošným skenem. Pokud se ten sken opírá o stavový kód, nadhodnocuje.“
   - **Problém:** První půlka je spekulace o cizí metodice. Druhá je podmínková, to je lepší, ale stále to působí jako výpad proti „průzkumům adopce“, aniž by byl jediný rozebrán. Zadání výslovně varuje před obviňováním bez dokladu. Tohle je na hraně.
   - **Návrh:** Omezit ambici:
     - „Tenhle článek nehodnotí konkrétní průzkumy adopce llms.txt, protože jejich metodiku neznám.“
     - „Ukazuje jen, že samotný HTTP status může u podobných skenů vést k falešně vysokému číslu.“

5. **VÁŽNÉ — Praktická část s cURL neodpovídá tomu, co text doporučuje**
   - **Citace:** „Ověřte si i hlavičku Content-Type a délku těla.“ / „První musí vrátit 404. Druhý vám ukáže kód i hlavičky, takže hned uvidíte typ obsahu a délku.“
   - **Problém:** Uvedený postup:
     ```bash
     curl -sSI https://example.com/nahodny-nazev-souboru.txt | head -1
     curl -sS -D - -o /dev/null https://example.com/llms.txt
     ```
     **neukáže délku těla jako zjištěnou hodnotu**, jen případně `Content-Length` hlavičku, pokud ji server pošle. Jenže autor v metodice tvrdí, že zaznamenal délku těla, ne jen hlavičku. Navíc `-I`/HEAD se může chovat jinak než GET; pro test existence souboru to není vždy spolehlivé.
   - **Návrh:** Opravit na funkční minimum:
     ```bash
     curl -sS -D headers.txt -o body.txt https://example.com/llms.txt
     grep -i '^content-type:' headers.txt
     wc -c < body.txt
     head -c 200 body.txt
     ```
     A u neexistující cesty radši GET než HEAD:
     ```bash
     curl -sS -D - -o /dev/null https://example.com/nahodny-nazev-souboru.txt
     ```

6. **VÁŽNÉ — Text zaměňuje „soft 404“ jako interní zkratku za ověřenou klasifikaci**
   - **Citace:** „Server nic nenašel, ale odpověděl, jako by našel — tomu se říká soft 404.“
   - **Problém:** V článku se jako soft 404 označuje pět případů, kde na neexistující hashovanou cestu přišlo 200 + HTML. To je rozumná pracovní definice, ale pořád jde o **heuristiku autora**, ne o ověření třeba Googlem nebo logikou aplikace serveru. To je důležité, protože „soft 404“ je termín s konkrétním významem ve vyhledávání.
   - **Návrh:** Změkčit:
     - „Pro účely tohohle článku je beru jako soft 404: na prokazatelně neexistující cestu vrací 200 a HTML stránku.“
     - Tím se oddělí interní klasifikace od univerzálního verdiktu.

7. **DROBNÉ — „může web odpovědět 200 a poslat něco úplně jiného“ je u některých příkladů moc široké**
   - **Citace:** „Týká se to… ads.txt, klíče pro IndexNow i sitemap.“
   - **Problém:** Analogie je v principu správná, ale v textu není doložená měřením. U sitemap je navíc „prázdná sitemapa“ a „HTML fallback“ jiný problém než u čistě textového souboru. Článek by neměl předstírat, že tohle prokázal.
   - **Návrh:** Připsat, že jde o obecný technický princip, ne výsledek tohohle měření:
     - „Stejný typ chyby může nastat i u…“
     - Vyhnout se jistotě typu „čeká všude“.

8. **DROBNÉ — Frontmatter `answer` opět přestřeluje význam slova „skutečný“**
   - **Citace:** `answer: "... Skutečný obsah mají tři."`
   - **Problém:** Tohle je lepší než „skutečně mají soubor tři“, ale i tak je to rétoricky ostré. U 44 případů je skutečný soubor, jen prázdný.
   - **Návrh:** Zpřesnit:
     - „Neprázdný obsah mají tři.“
     - Stejně upravit `description` a případně OpenGraph summary, pokud se generuje z frontmatteru.

9. **DROBNÉ — `stats` jsou číselně správně, ale první label je významově kluzký**
   - **Citace:** `label: "kolik z 80 webů má llms.txt podle stavového kódu a kolik po otevření souboru"`
   - **Problém:** „po otevření souboru“ neříká, že jde o **neprázdný obsah**. Čtenář to může chápat jako „po ověření existence“.
   - **Návrh:** Přepsat:
     - „kolik z 80 webů vrátí `/llms.txt` s HTTP 200 a kolik má neprázdný textový obsah“

10. **DROBNÉ — FAQ je v zásadě konzistentní, ale jedna odpověď je moc kategorická**
    - **Citace:** „Pokud vám vrátí 200, testy existence souborů na tom webu nefungují…“
    - **Problém:** Nejsou nutně „nefunkční“, spíš **nestačí samotný status code**. Když web vrací 200 i na neexistující cestu, pořád můžete existenci testovat přes obsah, typ, porovnání odpovědí apod.
    - **Návrh:** „…samotný test podle stavového kódu na tom webu nefunguje…“

11. **DROBNÉ — Výrok o Google dokumentaci je poctivý, ale zaslouží přesnější ukotvení**
    - **Citace:** „stránka naposledy aktualizovaná 10. 7. 2026“
    - **Problém:** V podkladu je výslovně uvedeno, že třetí strany uvádějí jiné datum a autor bere datum ze stránky. V textu to chybí. Není to chyba, ale zbytečně to nechává prostor pro spor.
    - **Návrh:** Jedna věta navíc:
      - „Různé přehledy třetích stran uvádějí jiné datum; beru datum uvedené přímo na stránce.“

12. **DROBNÉ — Metodika 4 kB je v textu uvedena až pozdě, přitom ovlivňuje interpretaci „s obsahem“**
    - **Citace:** „Četl jsem jen první 4 kB těla. To stačí na rozlišení ‚prázdný / neprázdný‘…“
    - **Problém:** To mělo zaznít už v metodice, ne až v limitech. Ne proto, že by to měnilo čísla 0 B vs >0 B, ale protože čtenář dřív narazí na formulace jako „skutečný obsah mají tři“.
    - **Návrh:** Přidat do metodiky:
      - „Pro obsah jsem četl jen začátek těla; pro tohle srovnání řeším hlavně HTML fallback a prázdný vs. neprázdný soubor.“

13. **DROBNÉ — „Žádné z 33 měřených médií llms.txt reálně nemá“ je formulace na hraně**
    - **Citace:** „Žádné z 33 měřených médií llms.txt reálně nemá…“
    - **Problém:** Z toho, co je v článku, plyne jen, že žádné z těch 33 médií **nevrátilo neprázdný ne-HTML `/llms.txt`**. Slovo „reálně“ je zbytečně suverénní.
    - **Návrh:** „U žádného z 33 měřených médií jsem nenašel neprázdný textový `/llms.txt`.“

14. **DROBNÉ — Čísla sedí, ale článek by snesl explicitní mezikrok 52 → 47 → 3 v textu výsledků**
    - **Citace:** tabulky a shrnutí
    - **Problém:** Matematicky je to konzistentní:
      - 80 = 33 + 47
      - neexistující soubor: 74 + 5 + 1 = 80
      - `/llms.txt` 200 = 52 = 5 + 47
      - po odečtení HTML: 47
      - po odečtení 44 prázdných: 3
      - média: 5 HTML fallbacků, 0 obsah
      - e-shopy: 47 text/plain, 44 prázdných, 3 obsah
      Ale protože článek pracuje s údernou zkratkou, bylo by lepší ten řetězec jednou vyložit zcela explicitně v jedné větě.
    - **Návrh:** Přidat:
      - „Jinými slovy: 52 odpovědí 200 se rozpadá na 5 HTML fallbacků a 47 textových odpovědí; z těch 47 je 44 prázdných a 3 neprázdné.“

## Verdikt

**Publikovat po opravách.**

Data a základní argument drží. Největší průšvih není v číslech, ale v interpretaci: text několikrát vydává „neprázdný obsah“ za „skutečnou existenci souboru“ a místy zbytečně zobecňuje vzorek deformovaný jednou platformou. Oprav titulek, summary, shrnutí a praktický cURL postup. Pak to bude poctivý článek. Teď ještě ne.