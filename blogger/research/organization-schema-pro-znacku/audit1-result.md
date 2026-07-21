- **BLOKER**  
  **Citace:** „**je to jediné místo, kde strojově řeknete, že vaše značka a vaše s.r.o. jsou tatáž věc**“  
  **Problém:** Nepodložené a absolutní tvrzení. Z dodaných zdrojů neplyne, že právě `Organization` je „jediné místo“. Vazbu lze strojově vyjádřit i jinak (jiné entity, jiné zdroje, jiné datové vrstvy), minimálně to není doloženo jako výlučné.  
  **Návrh opravy:** Změnit na „je to **jedno z přímých míst**, kde můžete strojově vyjádřit vazbu mezi značkou a právním subjektem“.

- **BLOKER**  
  **Citace:** „**Pro stroj jsou to dvě různé věci, dokud mu někdo neřekne, že nejsou. A přesně to `legalName` dělá**“  
  **Problém:** Přehnaný závěr. `legalName` je jen „official name“, ne explicitní mechanismus pro „spojení dvou entit“. Článek z definice názvu dělá silnější funkci, než zdroje unesou.  
  **Návrh opravy:** „`legalName` doplňuje oficiální název organizace; v kombinaci s `name`, `url`, `sameAs` a dalšími údaji může pomoci s jednoznačnou identifikací.“

- **VAROVÁNÍ**  
  **Citace:** „**Google a Microsoft u svých AI funkcí uvedli, že strukturovaná data přínos mají.**“  
  **Problém:** Příliš obecné. Není rozlišeno, pro které AI funkce, v jakém smyslu „přínos“, ani zda jde o citace, pochopení obsahu, nebo eligibility funkcí. V kontextu článku to může čtenář chápat jako podpůrný argument pro AI viditelnost, i když autor současně tvrdí opak.  
  **Návrh opravy:** Upřesnit: „Google a Microsoft uvedli přínos pro své vyhledávací/AI funkce, ale **bez veřejně doložené vazby na citace značek v odpovědích LLM**.“

- **VAROVÁNÍ**  
  **Citace:** „**Stojí to jednu stránku a dvacet minut.**“  
  **Problém:** Nepodložené číslo. V zadání je výslovně citlivost na nepodložené kvantifikace; tohle je časový slib bez opory. U řady webů může být zavádějící.  
  **Návrh opravy:** Vynechat časový odhad, nebo formulovat měkčeji: „Implementace bývá technicky jednoduchá, pokud web už nevypisuje konfliktní data.“

- **VAROVÁNÍ**  
  **Citace:** „**Za rozlišení identity to je levné**“  
  **Problém:** Hodnotový soud bez opory a navíc ve prospěch služby/oboru, který autor prodává. Není to fakt, ale prodejní rámec.  
  **Návrh opravy:** Nahradit neutrálně: „Implementace má nízkou technickou složitost ve srovnání s jinými úpravami webu.“

- **VAROVÁNÍ**  
  **Citace:** „**Riziko je malé — vyplníte-li identifikátor do vlastnosti, která mu odpovídá významem, nic se nerozbije.**“  
  **Problém:** Nepodložené uklidnění. Zdroje neříkají, že „riziko je malé“ ani že se „nic nerozbije“. Maximálně plyne, že mapování je výklad, ne pravidlo.  
  **Návrh opravy:** „Mapování je interpretace obecných definic. Pokud ho použijete, dělejte to konzistentně a bez tvrzení, že jde o oficiální pravidlo.“

- **VAROVÁNÍ**  
  **Citace:** „**tři udržované profily jsou lepší než deset opuštěných**“ / „**Tři aktivní profily… dávají smysl**“  
  **Problém:** Rada zní prakticky, ale číslo „tři“ není podložené žádným zdrojem. Je to autorův úsudek vydávaný skoro jako doporučení.  
  **Návrh opravy:** Vynechat číslo: „Menší počet jednoznačných a udržovaných profilů je lepší než mnoho opuštěných.“

- **VAROVÁNÍ**  
  **Citace:** „**Google doporučuje umístit tyhle informace na jednu stránku, ne na každou stránku webu.**“  
  **Problém:** Mírné přetažení zdroje. Primární zdroj říká homepage nebo jedna stránka popisující organizaci; z toho neplyne explicitní zákaz opakování ani „ne na každou stránku“ jako tvrdé pravidlo.  
  **Návrh opravy:** „Google doporučuje uvést je na domovské stránce nebo na jedné stránce popisující organizaci; plošné opakování napříč webem z této rady neplyne.“

- **VAROVÁNÍ**  
  **Citace:** „**ověřte, že se stejný blok neopakuje na dalších stránkách. Generátory v redakčních systémech to porušují běžně.**“  
  **Problém:** Bez zdroje. Tvrdí se běžný problém a implicitně i nežádoucnost duplicity, ale doložené je jen doporučené umístění, ne škodlivost duplicity ani četnost.  
  **Návrh opravy:** Změkčit: „zkontrolujte, zda se blok nevypisuje i jinde; některé pluginy to dělají automaticky.“

- **VAROVÁNÍ**  
  **Citace:** „**Nejsilnější argument pro Organization je český**“  
  **Problém:** Nepodložené hodnoticí pořadí. Článek nemá data, podle kterých by mohl rozhodnout, co je „nejsilnější argument“.  
  **Návrh opravy:** „V českém prostředí dává zvláštní smysl i to, že značka a právní subjekt často nesou různé názvy.“

- **VAROVÁNÍ**  
  **Citace:** „**`taxID a vatID` … Nejtvrdší identifikátor, jaký firma má**“  
  **Problém:** Nepřesné a nedoložené. „Nejtvrdší identifikátor“ je hodnoticí konstrukce bez opory. Navíc `taxID`/`vatID` v článku nejsou oficiálně potvrzené mapování pro ČR, takže tím spíš nelze takto silně tvrdit jejich roli.  
  **Návrh opravy:** „Jde o silné administrativní identifikátory firmy; v českém kontextu se obvykle vykládají jako IČO a DIČ.“

- **LOGICKÁ CHYBA / VAROVÁNÍ**  
  **Citace:** „**Co ukazuje proti:** analýza Search Atlas…“  
  **Problém:** Rétoricky podsouvá, že existuje evidence „proti“, ale o odstavec níž autor správně říká, že to není důkaz neúčinnosti. Nadpis sekce je tedy silnější než samotné vysvětlení.  
  **Návrh opravy:** Změnit na „Co zatím nenaznačuje přínos“ nebo „Co zatím neukázalo vztah“.

- **ZAUJATOST VE PROSPĚCH AUTORA — VAROVÁNÍ**  
  **Citace:** „**Tady je potřeba být konkrétní, protože se v tom obchoduje s nadějí.**“ + závěr s odkazem na vlastní test/audit  
  **Problém:** Autor se stylizuje do role poctivého korektora trhu, ale zároveň na konci směruje do vlastního funnelu. To je konflikt zájmů; kritika trhu funguje jako důvěrový most k vlastní nabídce.  
  **Návrh opravy:** Přiznat konflikt explicitně: „Protože sami prodáváme audit, držíme se zde jen toho, co je doložené…“ a CTA oddělit od edukativního závěru.

- **ZAUJATOST VE PROSPĚCH AUTORA — BLOKER**  
  **Citace:** „**AI SEO audit dává smysl až potom, když na tu kontrolu nemáte kapacitu.**“  
  **Problém:** Nenápadná prodejní vložka maskovaná jako neutrální rada. Není opřená o data z článku; jen převádí nejistotu do kvalifikace nákupu služby. Přesně typ biasu, který je třeba hlídat.  
  **Návrh opravy:** Z článku odstranit, nebo nahradit neutrálně: „Pokud interní kontrolu neuděláte, můžete přizvat externistu.“ Bez odkazu na vlastní službu v obsahové části.

- **ZAUJATOST VE PROSPĚCH AUTORA — VAROVÁNÍ**  
  **Citace:** „**začněte testem viditelnosti — je to práce na jedno odpoledne a řekne vám víc než jakékoli značkování**“  
  **Problém:** Nepodložené srovnání ve prospěch dalšího obsahu/funnelu autora. „Řekne vám víc než jakékoli značkování“ není doloženo.  
  **Návrh opravy:** „Chcete-li posoudit aktuální stav, udělejte nejdřív jednoduchý test viditelnosti; samotné značkování bez měření vám odpověď nedá.“

- **DOPORUČENÍ**  
  **Citace:** `category: "tutorial"` + silné „howto“ rámování  
  **Problém:** Struktura slibuje praktický návod s vysokou jistotou, ale podstatná část článku správně přiznává nejistotu a interpretační povahu mapování IČO/DIČ i vlivu na AI. To je napětí mezi formátem a evidencí.  
  **Návrh opravy:** Přerámovat jako „praktický minimum viable postup“ a u sporných bodů viditelně označit „interpretace, ne oficiální pravidlo“.

- **DOPORUČENÍ**  
  **Citace:** chybí rozhodovací hranice  
  **Problém:** Čtenář se dozví, že citace čekat nemá, ale nedostane jasné rozhodnutí „kdy ano / kdy stačí minimum / kdy neřešit“. To snižuje čtenářskou hodnotu.  
  **Návrh opravy:** Přidat krátké rozhodovací pravidlo: „Máte-li firmu se značkou odlišnou od právního názvu, veřejné profily a kontaktní údaje na webu, Organization dává smysl. Pokud jste OSVČ bez odlišné značky a bez profilů, stačí minimum.“

