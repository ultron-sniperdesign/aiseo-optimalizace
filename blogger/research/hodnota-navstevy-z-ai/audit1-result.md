1. **„Jak si hodnotu návštěvy z AI odvodit ze čtyř čísel…“ / „Čtyři čísla a jedno násobení“**
   - **Problém:** Článek slibuje výpočet **hodnoty návštěvy**, ale fakticky počítá jen **hodnotu poptávky / leadu**. Chybí krok převodu z poptávky na návštěvu:  
     \[
     \text{hodnota návštěvy} = \text{hodnota poptávky} \times \frac{\text{počet poptávek}}{\text{počet návštěv}}
     \]
     V současném znění se zaměňují tři různé veličiny: **návštěva, poptávka, zakázka**. To je u návodu na výpočet zásadní chyba.
   - **Konkrétní oprava:** Buď:
     1. přejmenujte článek na **„Jak odvodit hodnotu poptávky z AI, když neprodáváte online“**, nebo  
     2. doplňte plný výpočet:
        - hodnota zakázky × podíl uzavřených = hodnota poptávky
        - hodnota poptávky × podíl poptávek z návštěv = hodnota návštěvy  
        Ideálně i ve vzorci a v závěrečném shrnutí.

2. **„Hodnotu návštěvy odvodíte přes hodnotu poptávky…“**
   - **Problém:** To je jen půlka postupu, ne celý výpočet. Věta tvrdí víc, než text reálně ukazuje. Čtenář se nedozví, jak z leadu dojít k návštěvě, a přitom title i answer box slibují právě to.
   - **Konkrétní oprava:** Přepsat na:  
     **„Nejdřív odvodíte hodnotu poptávky. Pokud chcete spočítat hodnotu jedné návštěvy, musíte ještě přidat podíl návštěv, které poptávku vytvoří.“**

3. **„4 čísla, ze kterých se hodnota návštěvy odvodí — všechna už nejspíš máte“**
   - **Problém:** Neodpovídá to samotnému textu ani matematice. V článku jsou ve skutečnosti jen tři vstupy pro hodnotu poptávky:  
     - podíl uzavřených,
     - hodnota zakázky,
     - počet poptávek jen pro dopočet celkové hodnoty kanálu.  
     Pro **hodnotu návštěvy** ale navíc potřebujete ještě **počet návštěv** a **konverzní poměr návštěva → poptávka**. Tvrzení „všechna už nejspíš máte“ je navíc nedoložené a u telefonátů často nepravdivé.
   - **Konkrétní oprava:** Změnit stat i text na něco přesného, například:  
     **„Na hodnotu poptávky stačí 2–3 čísla; na hodnotu návštěvy musíte přidat i počet návštěv a počet poptávek z nich.“**

4. **„Hodnota poptávky = hodnota zakázky × podíl uzavřených.“**
   - **Problém:** Vzorec je použitelný jen za určitých podmínek, které nejsou dořčené. Platí tehdy, když:
     - všechny poptávky mají přibližně stejnou kvalitu,
     - počítáte jednu zakázku na jednu uzavřenou poptávku,
     - neřešíte různé typy leadů,
     - pracujete se stejným obdobím a stejným obchodním procesem.  
     U B2B je běžné, že různé leady mají dramaticky odlišnou hodnotu i close rate.
   - **Konkrétní oprava:** Doplňte pod vzorec omezení:  
     **„Vzorec funguje jako průměrný odhad pro homogenní typ poptávky. Pokud máte různé typy leadů (např. servis, audit, velký projekt), počítejte hodnotu pro každý typ zvlášť.“**

5. **„Ukázka na vymyšlených, ale realistických číslech: řemeslník uzavře zhruba každou třetí poptávku… kolem osmi tisíc… Hodnota jedné poptávky je tedy zhruba 2 700 Kč.“**
   - **Problém:** Samotná aritmetika je zhruba správně:  
     \[
     8\,000 \times \frac{1}{3} = 2\,666{,}67
     \]
     zaokrouhleno na 2 700 Kč. Problém je jinde: článek výslovně podle research nemá **vymýšlet benchmarky** ani podsouvat „realistická čísla“. Označení „realistická“ zbytečně sugeruje obecnou plausibilitu pro českého řemeslníka bez opory v datech.
   - **Konkrétní oprava:** Změnit na:  
     **„Ukázka na čistě ilustračních číslech:“**  
     a explicitně dodat:  
     **„Nejde o benchmark pro obor ani doporučenou hodnotu.“**

6. **„Když z AI nástrojů přišly za měsíc tři poptávky, kanál přinesl řádově osm tisíc…“**
   - **Problém:** Výpočet sedí jen jako **očekávaná hodnota poptávek**, ne jako skutečně přinesená hodnota kanálu. Správně:
     \[
     3 \times 2\,666{,}67 \approx 8\,000
     \]
     Ale to je **hodnota tří poptávek**, ne automaticky „hodnota kanálu“. Chybí upozornění, že jde o modelový odhad přiřazený mikrokonverzím, ne o skutečně realizovaný zisk.
   - **Konkrétní oprava:** Přepsat na:  
     **„…můžete jim přiřadit očekávanou hodnotu zhruba osm tisíc korun. Není to účetně potvrzený výnos kanálu, ale odhad podle historické úspěšnosti poptávek.“**

7. **„Návštěva je pro tenhle výpočet špatná jednotka… Poptávka je první bod…“**
   - **Problém:** Tím článek sám popírá svůj titul. Pokud je návštěva „špatná jednotka“, pak nemá článek mluvit o „hodnotě návštěvy“, nebo má vysvětlit, že jde o odvozenou sekundární metriku. Teď to působí logicky rozpadle.
   - **Konkrétní oprava:** Ujasnit cíl článku už v úvodu:  
     **„Primárně počítáme hodnotu poptávky, protože je měřitelnější. Hodnotu návštěvy z ní lze dopočítat až následně.“**

8. **„Musí jít označit v analytice…“ / „Kliknutí na telefonní číslo se přitom jako událost změřit dá.“**
   - **Problém:** Proveditelnost je nedotažená. Článek říká, že něco „jde“, ale neříká **jak minimálně**. U tutorialu to nestačí. U telefonu je navíc klik na tel: odkaz jen slabá zástupná metrika:  
     - nepostihne ručně opsané číslo,
     - nepostihne hovory z desktopu bez kliku,
     - neříká nic o délce a kvalitě hovoru.
   - **Konkrétní oprava:** Doplňte stručné minimum:
     - v GA4 vytvořit event pro odeslání formuláře / klik na tel / klik na mail,
     - označit ho jako key event,
     - u telefonu napsat, že **klik na telefon je jen proxy**, přesnější je call tracking nebo alespoň evidence přijatých hovorů.

9. **„Když to nemáte, odhadněte a označte to jako odhad — obchodník obvykle tuší…“**
   - **Problém:** Tvrzení „obvykle tuší“ je měkké a nedoložené. Hlavně ale chybí ochrana proti sebeklamu: obchodníci a majitelé mají často systematicky zkreslený odhad close rate.
   - **Konkrétní oprava:** Přidat disciplínu odhadu:  
     **„Když nemáte CRM, vezměte posledních 20–50 poptávek nebo posledních 6–12 měsíců faktur a dopočítejte podíl ručně. Teprve když to nejde, použijte odhad.“**

10. **„Z CRM nebo z faktur za poslední rok.“**
    - **Problém:** Faktury samy o sobě nestačí k určení podílu uzavřených poptávek, pokud neznáte jmenovatel, tedy počet všech poptávek. Text zkracuje krok tak, že je prakticky matoucí.
    - **Konkrétní oprava:** Přepsat na:  
      **„Z CRM ideálně zjistěte počet poptávek i počet uzavřených. Pokud CRM nemáte, spojte evidenci poptávek (mail, formuláře, hovory) s fakturami a dopočítejte podíl ručně.“**

11. **„U malých objemů raději medián než průměr.“**
    - **Problém:** To je dobrá rada, ale je nedotažená. Když už medián místo průměru, musíte stejně řešit i to, že vzorec používá **close rate × hodnota zakázky**. U velmi malých vzorků je nejistý i close rate, ne jen hodnota zakázky.
    - **Konkrétní oprava:** Doplnit:  
      **„U malých vzorků počítejte raději rozpětí: pesimistický / střední / optimistický scénář pro close rate i hodnotu zakázky.“**

12. **„A stačí řád. Rozhodnutí zní investovat, nebo ne.“**
    - **Problém:** Příliš silné zjednodušení. Ne vždy jde o binární rozhodnutí. Často se rozhoduje i o rozsahu investice, prioritě oproti jiným kanálům nebo o tom, zda měřit dál. Tvrzení není opřené o nic jiného než autorský soud.
    - **Konkrétní oprava:** Zmírnit:  
      **„Pro první rozhodnutí, jestli kanál vůbec stojí za pozornost, obvykle stačí řádový odhad. Pro rozpočet a prioritizaci už ne.“**

13. **„Nezačínejte AI SEO. Začněte tím, že si zavedete měření…“**
    - **Problém:** Normativní soud bez kvalifikace. U malých firem může dávat smysl dělat základní obsah i bez dokonalého měření. Takhle formulované je to zbytečně absolutní.
    - **Konkrétní oprava:** Přepsat na:  
      **„Než začnete hodnotit návratnost AI SEO, zaveďte aspoň základní měření poptávek. Bez něj nepoznáte, jestli kanál funguje.“**

14. **„Firma, která neví ani řád, nemá problém s AI viditelností — má problém s měřením.“**
    - **Problém:** Efektní věta, ale přehnaná. Firma může mít současně problém s měřením i s AI viditelností. Je to rétorické zploštění, ne přesné tvrzení.
    - **Konkrétní oprava:**  
      **„Pokud firma neví ani řád hodnoty poptávky, je první praktický problém měření; bez něj AI viditelnost nevyhodnotí.“**

15. **„Část lidí obsah přečte v asistentovi a přijde později přímo…“ / „Atribuce takové cesty vidí jen část — v obou směrech.“**
    - **Problém:** Validní poznámka, ale chybí důsledek pro výpočet. To je přesně zamlčený předpoklad: metoda dává jen **spodní odhad přímě měřitelných návštěv**, ne hodnotu celého vlivu AI na poptávku.
    - **Konkrétní oprava:** Výslovně doplňte metodické omezení:  
      **„Výpočet oceňuje jen měřitelné návštěvy a měřitelné konverze. Vliv AI na asistované nebo později přímé návštěvy v něm zpravidla není.“**

16. **„Kliknutí na e-mail, kliknutí na telefon… musí opravdu předcházet zakázce.“**
    - **Problém:** Neřeší se kvalita události. Klik na mail ani telefon nemusí být poptávka. Může to být jen pokus o kontakt, omyl nebo servisní dotaz. To je důležitý metodický předpoklad.
    - **Konkrétní oprava:** Dodat:  
      **„Používejte jen takovou událost, která má rozumnou vazbu na obchod. Pokud je klik na telefon příliš šumový, měřte raději dokončený formulář, rezervaci nebo kvalifikovaný hovor.“**

17. **„…jakákoli mikrokonverze.“**
    - **Problém:** Anglicismus/žargon bez nutnosti. Pro majitele firem je to zbytečně oborové.
    - **Konkrétní oprava:** Nahradit třeba:  
      **„mezikrok před obchodem“** nebo **„dílčí konverze“**.

18. **„kanál přinesl řádově osm tisíc — a proti tomu se dá poměřit čas, který do něj šel.“**
    - **Problém:** Nedotažené místo s praktickou hodnotou. Když už článek navazuje na ROI, měl by aspoň jednou explicitně ukázat, **co je ve jmenovateli**: čas × hodinová sazba + náklady na obsah / distribuci / správu.
    - **Konkrétní oprava:** Doplňte krátký most:  
      **„Pak porovnejte očekávanou hodnotu s náklady: vlastní čas × interní hodinová sazba + externí práce + nástroje.“**

19. **„…všechna už nejspíš máte“ / „typicky jednotky až stovky“ / „obchodník obvykle tuší“**
    - **Problém:** Stylově je to plné měkkých výplní a neurčitých formulací. Nejsou fatálně špatné, ale na přísný tutorial zbytečně rozmazávají přesnost.
    - **Konkrétní oprava:** Krátit a zpřesnit:
      - „nejspíš máte“ → „můžete dohledat nebo odhadnout“
      - „typicky“ → „často“
      - „obvykle tuší“ → „může orientačně odhadnout“

20. **„Co je vám návštěva z AI, když neprodáváte online“**
    - **Problém:** Titul je jazykově efektní, ale významově vágní. U návodu na výpočet by měl být technicky přesnější, jinak zvyšuje očekávání, která text neplní.
    - **Konkrétní oprava:** Například:
      - **„Jak spočítat hodnotu poptávky z AI, když neprodáváte online“**
      - nebo pokud doplníte chybějící krok:
      - **„Jak spočítat hodnotu návštěvy z AI u služby, B2B a lokální firmy“**

## 3 nejzávažnější problémy
1. **Zásadní záměna hodnoty návštěvy za hodnotu poptávky.**
2. **Návod je matematicky nedokončený: chybí převod z leadu na návštěvu.**
3. **Ukázkový příklad podsouvá „realistická čísla“, přestože research výslovně zakazuje vytvářet benchmarkový dojem.**

**Publikovatelnost:** V této podobě bych článek **nepublikoval**; nejdřív je nutné opravit logiku výpočtu a jasně odlišit hodnotu poptávky od hodnoty návštěvy.