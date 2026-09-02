# Revize obsahového plánu — 2. 9. 2026

**Zadání:** ověřit, jestli témata čekající ve frontě nezastarala, když se plán plní
rychleji, než se zpracovává.
**Rozsah:** 147 nevydaných témat proti 157 vydaným článkům.
**Metoda:** ① automatická detekce duplicit (překryv tokenů zadání × vydané články),
② stáří řádku z `git blame`, ③ extrakce dat z textu zadání a stáří události,
④ křížová kontrola proti známým změnám z trend researchů 25. 8. a 2. 9.

---

## Souhrn: plán je zdravější, než se čekalo

| Kontrola | Výsledek |
|---|---|
| Duplicity vůči vydaným článkům | **žádná** (nejvyšší překryv 0,29 — témata jsou dobře odlišená) |
| Nejstarší čekající téma | **40 dní** (ne měsíce) |
| Rozložení stáří | 18× do 14 dní · 54× 15–30 dní · 75× 31–60 dní |
| Témata s konkrétním datem v zadání | 43 |
| **Vyžadují zásah** | **8** |

**Klíčové zjištění:** nejdéle čekající témata (40 dní) jsou bez výjimky **evergreeny** —
tabulky a seznamy pro AI, varianty produktu, stránka O nás, migrace URL, sezónní obsah.
Ty nestárnou. Riziko nese jiná skupina: témata vázaná na událost nebo na cizí měření.

## 8 témat se zásahem (anotace zapsány přímo do plánu)

**⏰ Termínované — hoří**
1. `zmena vychoziho nastaveni robotu zari 2026` — „Od 15. září se výchozí nastavení robotů
   mění samo". **Vydat do 15. 9. 2026**, jinak přepsat do minulého času.

**⚠️ Překonané událostmi**
2. `vstupni bod hledani na nove karte` — zadání z 5. 11. 2025 popisuje tlačítko AI na nové
   kartě jako budoucí slib. Mezitím: v ČR je tlačítko **nasazené** (ověřeno screenshotem
   25. 8.) a Google od září posouvá režim AI do **adresního řádku**. Zadání přepsáno na
   „posun vstupního bodu hledání", s mantinelem vůči už vydanému `rezim-ai-google`.

**⚠️ Zastaralá cizí data**
3. `applebot a apple viditelnost` — opřeno o měření Vercel/MERJ z 12/2024 (~21 měsíců).
   Ověřit novější zdroj, jinak explicitně datovat.
4. `stejny dotaz jine mesto` — SE Ranking 9/2025, americká města. Datovat, netvrdit platnost
   pro ČR; zvážit sloučení s `cesky vzorek dotazu s ai prehledem`.

**ℹ️ Novinkové rámování, které zestárlo (31–42 dní)**
5. `francouzsky model ai a vydavatele` — přepsat ze zpravodajství na výklad a zasadit do
   rámce CMA / DSA / licenčních dohod.
6. `ai act pro weby od srpna 2026` — držet u povinností pro weby; na klasifikaci ChatGPT
   jako VLOSE (31. 8.) jen odkázat.
7. `dma rozhodnuti a ai odpovedi` — doplnit vodítka Komise ze 16. 7. 2026.

**ℹ️ Nové sousedství**
8. `odkazovani na zdroje v clanku` — mezitím vyšel `vysoce-citovany-stitek-google`.
   Není to duplicita, ale musí na něj odkazovat a neopakovat výklad štítku.

## Co revize NEnašla

- Žádné téma k úplnému zrušení. (Čtyři duplicity jsem uzavřel už 26. 8.: vypínač v GSC,
  AI SEO agentura, měření AI viditelnosti, co je AI viditelnost.)
- Žádné téma starší 40 dní.
- Žádný článek s datem v budoucnosti (dřívější poplach byl chybou zastaralého data
  v mém kontextu, ne v datech).

## Doporučení do budoucna

1. **Termínovaná témata psát jako první** — jsou jediná, která opravdu propadají.
   Zvážit sloupec „platí do" v plánu pro řádky s datem.
2. **U cizích studií psát datum sběru rovnou do zadání** (většina to má; výjimky výše).
3. **Revizi opakovat s trend researchem**, ne samostatně — obojí čerpá ze stejného
   ověřování a vzájemně se doplňuje.
