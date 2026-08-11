1. **Střední — v úvodu ještě jednou klouže „má soubor“ vs. „má obsah“**
   - **Citace:** „Chtěl jsem vědět, kolik českých webů má soubor `llms.txt`.“
   - **Problém:** Hned další věty to sice opravují a článek už pak rozdíl drží dobře, ale první věta znovu otevírá přesně tu dvojznačnost, kvůli které se text opravoval. Zbytek článku fakticky měří tři různé věci: `200`, textový ne-HTML výstup a neprázdný obsah.
   - **Návrh:** Přepsat první větu na něco jako: „Chtěl jsem vědět, kolik českých webů na `/llms.txt` něco vrací — a kolik z toho je skutečně neprázdný obsah.“

2. **Nízká — jedna formulace v závěru zase spojuje existenci souboru s testem, který ověřuje spíš použitelnost odpovědi**
   - **Citace:** „Praktické pravidlo je jednoduché: **než uvěříte, že soubor existuje**, zeptejte se webu na soubor, o kterém víte, že neexistuje.“
   - **Problém:** Test s náhodnou neexistující cestou neprokazuje existenci souboru sám o sobě; ověřuje, že `200` na daném webu vůbec něco znamená. Existence se pak teprve posuzuje podle kombinace kódu, typu a těla. V kontextu článku je to jasné, ale tahle jedna věta je trochu silnější, než co bylo změřeno.
   - **Návrh:** „…než uvěříte, že `200` znamená existující soubor…“ nebo „…než začnete z `200` vyvozovat, že soubor opravdu je…“

3. **Nízká — drobný technický přesah v části o sitemaps**
   - **Citace:** „**sitemapy, kde soft 404 vypadá jako platná, ale prázdná sitemapa**“
   - **Problém:** To už je formulované konkrétněji než zbytek odstavce a míchá dva různé stavy: soft 404 s HTML fallbackem a skutečně prázdnou, ale validně servírovanou sitemapu. U předchozího textu autor správně drží obecný princip, tady věta zní, jako by šlo o totéž.
   - **Návrh:** Zůstat u obecnější formulace: „sitemapy, kde web může vrátit 200 a poslat něco jiného, než čekáte“ nebo rozlišit HTML fallback vs. prázdný XML soubor.

4. **Nízká — cURL blok není „dva řádky“, ale čtyři příkazy**
   - **Citace:** „V příkazové řádce to jsou dva řádky:“
   - **Problém:** Není to věcná chyba metodiky, ale formálně to nesedí s ukázkou pod tím. Jsou tam čtyři příkazy, byť prakticky dvě fáze.
   - **Návrh:** „V příkazové řádce je to tahle krátká sekvence:“ nebo „Ve dvou krocích:“

5. **Bez vady — čísla a vnitřní konzistence teď sedí**
   - **Citace:**  
     - „Vzorek: **33 … a 47 e-shopů**“  
     - „| 404 | 74 | / | **200 | 5** | / | 406 | 1 |“  
     - „| Média | 33 | 5 | 5 | 5 | 0 | 0 |“  
     - „| E-shopy | 47 | 0 | 47 | 0 | 44 | 3 |“  
     - „52 odpovědí s kódem 200 se rozpadá na 5 HTML fallbacků a 47 textových odpovědí; z těch 47 je 44 prázdných a 3 neprázdné.“
   - **Posouzení:**  
     - 80 = 33 + 47 ✔  
     - 80 = 74 + 5 + 1 ✔  
     - 52 = 5 + 47 ✔  
     - 47 = 44 + 3 ✔  
     - Frontmatter i tělo jsou teď v souladu ✔
   - **Návrh:** Není třeba opravovat.

6. **Bez vady — platformní default už článek nepřekračuje**
   - **Citace:** „**v mém vzorku ten rozdíl nafoukla jedna platforma**“; „**Není to odhad českého webu obecně**“; „47 e-shopů běží na jedné platformě“
   - **Posouzení:** Druhé kolo dopadlo dobře: text už výslovně omezuje dosah tvrzení na vzorek a jasně odděluje platformní chování od „adopce českého webu“. Tady nevidím přestřelení.

7. **Bez vady — cURL postup je teď technicky správný a proveditelný**
   - **Citace:**  
     - `curl -sS -o /dev/null -w '%{http_code}\n' https://example.com/nahodny-nazev-souboru.txt`  
     - `curl -sS -D hlavicky.txt -o telo.txt https://example.com/llms.txt`  
     - `grep -i '^content-type:' hlavicky.txt`  
     - `wc -c < telo.txt`  
     - `head -c 200 telo.txt`
   - **Posouzení:** Jako inženýrsky praktický postup to sedí. Ověří:
     - chování na neexistující cestě,
     - skutečný status první kontroly,
     - hlavičky z GETu, ne z HEADu,
     - délku skutečně staženého těla,
     - začátek obsahu pro rychlé odlišení HTML/textu.
     
     Také vysvětlení, proč tam není `curl -I`, je správné.
   - **Návrh:** Není nutná změna. Maximálně kosmeticky doplnit, že `Content-Type` je orientační a rozhoduje i tělo — ale to článek fakticky už říká.

8. **Bez vady — otázka „dělat llms.txt?“ zůstává otevřená**
   - **Citace:** „**Jestli llms.txt dělat, tenhle článek neřeší.** Řeší, jestli se dá věřit tvrzení, že ho někdo má.“; FAQ: „**Tenhle článek na tu otázku ale neodpovídá — měří něco jiného**“
   - **Posouzení:** Deklarace a obsah jsou v souladu. Autor dává kontext přes Google, ale neuzavírá normativní doporučení nad rámec měření.

## Verdikt

Opravy v zásadě **sedí** a hlavní problém z prvního kola je z většiny odstraněný. Článek už většinou důsledně rozlišuje mezi:
- odpovědí `200`,
- textovou ne-HTML odpovědí,
- prázdným souborem,
- neprázdným obsahem.

Technická metodika s cURL je teď **správná a proveditelná**. Čísla i frontmatter jsou **konzistentní**. Text také nově **nepřekračuje vzorek** a nenechává platformní default vydávat za obecný stav českého webu.

Zbyly jen **drobné formulace**, kde se sem tam vrací zkratka „má soubor“ / „soubor existuje“, i když článek ve skutečnosti hodnotí použitelnost a obsah odpovědi. To jsou ale už spíš **redakční dočištění než věcný problém**.

**Celkově: po druhém kole publikovatelné; doporučuji jen lehce dočistit 2–3 věty uvedené výše.**