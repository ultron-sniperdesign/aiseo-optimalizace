1. **Nepřesné tvrzení o „stejném dotazu“ v titulku, perexu i textu**
   - **Citace:** „**Stejný dotaz**, jiná odpověď. Kolikrát testovat“; „U **konkrétnějších dotazů** ale dvojnásobek.“; „**Stejný nástroj, stejné téma, jen přesněji položená otázka.**“
   - **Problém:** Studie podle podkladu neporovnávala tentýž dotaz ve dvou formulacích, ale **dvě různé skupiny dotazů**: 2 500 obecných lokálních („restaurants near me“) a 2 500 lokalizovaných („restaurants in New York“). Z toho nejde poctivě udělat návod „stačí tentýž dotaz zpřesnit a bude 2,5× stabilnější“.
   - **Návrh opravy:** Změnit formulace na opatrnější:
     - titul/claim: „Podobný dotaz, jiná odpověď. Kolikrát testovat“
     - v textu: „Ve studii byly **lokalizované dotazy jako skupina** stabilnější než obecné lokální dotazy.“
     - vypustit „stejné téma, jen přesněji položená otázka“.

2. **Přehnaná kauzalita: „Volatilita není vlastnost AI, je to funkce dotazu“**
   - **Citace:** „**Volatilita není vlastnost AI, je to funkce dotazu**“
   - **Problém:** To je silnější závěr, než zdroj unese. Studie ukazuje rozdíl mezi dvěma typy lokálních dotazů v AI Mode, ale neprokazuje, že volatilita „není vlastnost AI“. Nanejvýš že **ve zkoumaném setupu s formulací dotazu silně souvisela**.
   - **Návrh opravy:** „Volatilita v AI Mode **ve studii výrazně souvisela s typem dotazu**.“

3. **Výrok „zhruba dvaapůlkrát stabilnější“ je numericky hrubě přibližný a v textu je podán jako návod**
   - **Citace:** „Konkrétnější dotaz je v tom měření **zhruba dvaapůlkrát stabilnější** — z 18–20 % na 46–49 % shody.“
   - **Problém:** Poměr podle uvedených intervalů vychází přibližně:
     - 46 / 20,5 = **2,24×**
     - 49 / 18,3 = **2,68×**
     Středy intervalů dávají cca **2,49×**, takže „zhruba 2,5×“ jako hrubý popis středu ještě projde. Neprojde ale navazující interpretační skok k doporučení „když testujete, ptejte se tak konkrétně...“ jako by šlo o ověřený kauzální trik.
   - **Návrh opravy:** „Ve studii měla skupina dotazů s uvedeným městem asi **2,2–2,7× vyšší shodu URL** než skupina obecných lokálních dotazů (středově zhruba 2,5×). To ale **není důkaz**, že pouhé přeformulování téhož dotazu vždy přinese stejný efekt.“

4. **Tiché zobecnění z amerických lokálních dotazů na obecné testování AI viditelnosti**
   - **Citace:** „**Praktický důsledek pro test:** když se ptáte obecně, měříte hlavně šum.“; „**Většinu toho rozptylu si do testu zaneseme sami tím, že se ptáme obecně.**“
   - **Problém:** FAQ limit správně přiznává („jen na lokálních dotazech typu restaurace“), ale hlavní text pak mluví obecně o „testu AI viditelnosti“ a o „většině rozptylu“, což překračuje podklad. Studie byla:
     - USA
     - 5 měst
     - lokální dotazy
     - AI Mode
     Nelze z ní bez dalšího vyvozovat, že u českých webů a ne-lokálních dotazů je hlavní problém právě obecnost.
   - **Návrh opravy:** Doplnit omezení přímo k doporučení:
     - „**U lokálních dotazů v AI Mode v USA** platilo, že obecnější formulace měla vyšší rozptyl.“
     - „Pro české a informační dotazy je to **hypotéza k otestování, ne hotové pravidlo**.“

5. **Rada „ptejte se konkrétně“ je formulovaná příliš široce a příklad neodpovídá studii**
   - **Citace:** „Místo ‚nejlepší účetní software‘ raději ‚účetní software pro živnostníka v Česku‘. … podle měření to výrazně sníží rozptyl výsledků.“
   - **Problém:** Studie měřila **lokální restaurant queries**, ne software ani informačně-komerční B2B dotazy. Přenos na tento příklad je nepodložený.
   - **Návrh opravy:** „U jiných typů dotazů to může, ale nemusí platit podobně. U nelokálních témat berte konkrétnější formulaci jako **testovací hypotézu**, ne jistotu.“

6. **Statisticky neobhájené pravidlo o tom, co je a není „skutečná změna“**
   - **Citace:** „Když v jednom měření vyjde ‚**2 z 5**‘ a v dalším ‚**3 z 5**‘, **není to zlepšení** — je to v rozptylu. Za signál berte až … skok z ‚**0 z 5**‘ na ‚**4 z 5**‘.“
   - **Problém:** Tohle pravidlo studie nedodává a článek ho nepodpírá žádným výpočtem. U n=5 jsou intervaly nejistoty velmi široké; bez definice modelu, bez více vln měření a bez testu významnosti nelze takto kategoricky říct, že 2/5→3/5 není změna a 0/5→4/5 už je. To je intuitivní heuristika, ne statisticky obhájené pravidlo.
   - **Návrh opravy:** Označit to jako praktickou, konzervativní heuristiku:
     - „Při pěti opakováních **nepřeceňujte malé rozdíly** typu 2/5 vs. 3/5.“
     - „Za přesvědčivější signál považujte **větší a opakovaný posun** napříč více měřeními.“

7. **„Aspoň třikrát až pětkrát“ není opřeno o tuto studii**
   - **Citace:** „Kolikrát mám tedy dotaz zopakovat? **Aspoň třikrát až pětkrát**…“
   - **Problém:** Primární studie měla 15 spuštění na dotaz; doporučení 3–5 běhů pochází podle podkladu z jiného interního článku, ne z této studie. To je v pořádku jen pokud je jasně řečeno, že jde o **praktický kompromis**, ne závěr studie.
   - **Návrh opravy:** „Studie sama neurčuje minimální počet opakování; **3–5 běhů je praktický kompromis** pro ruční test, ne číslo převzaté ze studie.“

8. **Tvrzení „jeden běh… ze kterého se nedá usoudit vůbec nic“ je přehnané**
   - **Citace:** ve `stats`: „**1** — běh testu, ze kterého se nedá usoudit **vůbec nic**“
   - **Problém:** To je rétorické nadsazení. Z jednoho běhu lze usoudit třeba to, že jste se v konkrétním spuštění objevili/neobjevili; co z něj **nelze spolehlivě** usoudit, je stabilní viditelnost.
   - **Návrh opravy:** „1 — jeden běh testu, **ze kterého nelze spolehlivě usoudit stabilní viditelnost**.“

9. **Datum je místy nepřesně rozvolněné**
   - **Citace:** „měření SE Ranking **z konce září 2025**“
   - **Problém:** Primární datum v podkladu je přesné: **29. 9. 2025**. V článku je sice jinde uvedeno správně, ale zadání výslovně chce, aby autor nic nezaokrouhloval ani nerozvolňoval.
   - **Návrh opravy:** Všude sjednotit na „**29. září 2025**“.

10. **Shoda čísel je jinak dobrá, ale jeden popisek ve stats může mást metodiku**
    - **Citace:** „**5 000** — dotazů v měření, každý spuštěný patnáctkrát v pěti amerických městech“
    - **Problém:** Z podkladu plyne „každý dotaz 15× (tři běhy na město)“. Formulace „patnáctkrát v pěti městech“ může čtenář chápat jako 15× **v každém** z pěti měst. Není to vyloženě chybné, ale je nejednoznačné.
    - **Návrh opravy:** „5 000 dotazů v měření; **každý celkem 15×, tedy tři běhy v každém z pěti amerických měst**.“

11. **Vnitřní napětí mezi poctivým omezením ve FAQ a silnými tezemi v hlavním textu**
    - **Citace:** FAQ: „Pro české prostředí ani pro informační dotazy z ní čísla přenášet nelze.“ vs. hlavní text: „**Většinu toho rozptylu si do testu zaneseme sami tím, že se ptáme obecně.**“
    - **Problém:** FAQ je poctivé, ale hlavní text pak zjištění zobecňuje za hranici studie. To je obsahový rozpor.
    - **Návrh opravy:** Sjednotit tón celého článku na stejnou úroveň opatrnosti jako ve FAQ.

12. **Čeština: stylisticky neobratné „v AI“**
    - **Citace:** „Slibovat ‚první místo **v AI**‘…“
    - **Problém:** V češtině to zní kostrbatě.
    - **Návrh opravy:** „v odpovědích AI“, případně „v AI vyhledávání“.

13. **Čeština: slabší formulace „To už prakticky nejsou stejné výsledky“**
    - **Citace:** „To už prakticky nejsou stejné výsledky.“
    - **Problém:** Významově nevadí, ale při hodnotě 1,6–2 % je přesnější mluvit o **minimálním překryvu**, ne o „prakticky ne stejných výsledcích“.
    - **Návrh opravy:** „Překryv je tam už jen **minimální**.“

14. **Oprava původně špatně poznamenaného čísla 70 % je podaná poctivě a věcně správně**
    - **Citace:** „Sám jsem si to zpočátku poznamenal špatně a odhalilo se to až u zdroje.“
    - **Problém:** Tady naopak **není problém**; uvádím to jako ověřený pozitivní nález, protože to bylo výslovně požadováno. Oprava odpovídá podkladu: 70 % se týká **obměny stránek v AI Overviews za 2–3 měsíce**, ne variability téhož dotazu v AI Mode.
    - **Návrh opravy:** Není nutná, jen případně zkrátit formulaci pro větší údernost.

**Verdikt: PUBLIKOVAT PO ÚPRAVÁCH**

Číselně je článek z velké části přesný: hodnoty v tabulce, FAQ i metodice sedí na podklad **včetně měst, počtu dotazů, 15 opakování a data 29. 9. 2025**. Hlavní problém není v číslech, ale v **interpretaci**: článek místy zaměňuje srovnání dvou skupin dotazů za návod pro přeformulování téhož dotazu, příliš zobecňuje z **americké lokální studie** na obecné testování a přidává **statisticky nepodložené** praktické práhy typu 2/5 vs. 3/5. Po zpřesnění těchto míst je publikovatelný.