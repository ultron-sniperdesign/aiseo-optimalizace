# Jazykový audit: AI roboti v serverových logách

Auditováno 22. 10. 2026 proti tonalitě v `marketing/05-messaging-a-tonalita.md` a cíleným heslům ve slovníku `blogger/JAZYK_SLOVNIK.md`. Mechanický checker našel 0 pravidlových nálezů; níže jsou nálezy z ruční kontroly. Kód, názvy robotů, názvy nástrojů, direktivy, URL a doslovné technické identifikátory nejsou hodnoceny jako stylistické chyby.

## Zásadní nálezy

1. **„Velikost odpovědi a doba zpracování se hodí při hledání nákladů“** → Spojení „hledání nákladů“ je významově nejasné a slibuje víc, než tyto dva údaje samy dokládají. Ukazují náročnost požadavků, ne skutečné finanční náklady. → **„Velikost odpovědi a doba zpracování se hodí při hledání náročných požadavků; skutečné náklady z nich ale bez dalších údajů nespočítáte.“**

2. **„Log může obsahovat IP adresy, parametry URL i vstup dodaný cizím klientem.“** → „Cizí klient“ může čtenář chápat jako zákazníka. V bezpečnostním upozornění není jasné, že jde o libovolný program, který poslal požadavek, ani co přesně znamená „vstup“. → **„Log může obsahovat IP adresy, parametry URL i text vložený do požadavku návštěvníkem nebo cizím programem.“**

3. **„Prázdný výsledek neznamená, že vás žádný AI systém nepoužívá. […] platforma používá jiný způsob získání zdroje.“** → Zájmeno „vás“ i slovo „zdroj“ mají nejasný význam. Formulace navíc směšuje návštěvu webu s pozdějším použitím jeho obsahu. → **„Prázdný výsledek neznamená, že žádný systém AI nezískává nebo nepoužívá obsah vašeho webu. […] platforma mohla obsah získat jiným způsobem.“**

4. **„Z výpisu spočítejte čtyři řezy“** → „Řez“ je analytický kalk a bez vysvětlení působí jako interní žargon. Následující odstavec přitom stejnou věc srozumitelně nazývá „čtyřmi pohledy“. → **„Na výpis se podívejte čtyřmi způsoby“** nebo **„Z výpisu spočítejte čtyři přehledy“**.

5. **„Takové adresy mohou tvořit velký prostor bez nové informační hodnoty.“** → Abstraktní spojení neříká, zda jde o počet URL, spotřebu kapacity, nebo duplicitní obsah. Zní jako strojový převod. → **„Takových adres mohou vzniknout tisíce, přestože zobrazují stejný nebo téměř stejný obsah.“**

6. **„Naopak požadavky na důležité články a produktové stránky potvrzují, že robot chodí tam, kam má.“** → „Potvrzují“ a „tam, kam má“ vydávají interní prioritu webu za objektivní správný stav. Log dokládá jen to, které adresy robot vyžádal. → **„Požadavky na články a produktové stránky, které považujete za důležité, naopak ukazují, že robot tyto části webu navštěvuje.“**

7. **„Když robot plýtvá na filtrech a chybách, opravte odkazy a pravidla pro procházení. Když jsou požadavky drahé, nejdřív změřte cache a dobu obsluhy“** → „Plýtvá na filtrech“ je kostrbaté, „drahé požadavky“ nejsou vymezené a „změřte cache“ není měřitelný úkon. Věta proto nedává jednoznačný postup. → **„Když velkou část provozu tvoří kombinace filtrů a chybové adresy, opravte odkazy a pravidla pro procházení. Když požadavky výrazně zatěžují server, změřte dobu obsluhy a podíl odpovědí z mezipaměti.“**

## Drobné nálezy

1. **„Pro analýzu si vyžádejte nejméně 30 dní včetně otočených a komprimovaných souborů.“ / „Stáhněte nejméně 30 dní přístupových logů, včetně otočených a komprimovaných souborů.“** → Dny se nestahují a „otočené soubory“ nevysvětlují rotaci logů. Pro méně technického čtenáře je pokyn nejednoznačný. → **„Pro analýzu si vyžádejte přístupové logy alespoň za 30 dní, včetně starších souborů vytvořených rotací logu a komprimovaných archivů.“**

2. **„server ji ale musí správně obnovit nebo výslovně zalogovat“** → „Obnovit adresu“ je doslovný převod technické dokumentace a „zalogovat“ je zbytečný anglicismus. → **„server ji však musí z této hlavičky převzít nebo ji výslovně zapisovat do logu“**.

3. **„Samotný počet požadavků neřekne, jestli robot stahuje důležité články, honí nekonečné filtry, nebo opakuje chyby.“** → „Honí nekonečné filtry“ je obrazné, ale nepřesné: nekonečné nejsou filtry, nýbrž množství jejich kombinací a vznikajících URL. → **„Samotný počet požadavků neřekne, jestli robot stahuje důležité články, prochází stále nové kombinace filtrů, nebo opakovaně žádá chybové adresy.“**

4. **„provozovatelé roboty rozkládají mezi více sítí a datových center“** → Vazba „rozkládat roboty mezi“ je nepřirozená a spojení sítí s datovými centry se čte kostrbatě. → **„provozovatelé mohou požadavky obsluhovat z více sítí a datových center“**.

5. **„Podrobnější rozdíl mezi ověřením a blokováním popisuje návod“** → Přívlastek „podrobnější“ se neváže přirozeně ke slovu „rozdíl“; podrobnější je jeho vysvětlení. → **„Rozdíl mezi ověřením a blokováním podrobněji vysvětluje návod“**.

6. **„A do reportu napište období, přesná jména a způsob ověření“** → „Report“ není nutný oborový termín a ve věcném edukativním textu je přirozenější český výraz. „Přesná jména“ navíc může znamenat jména lidí. → **„Do přehledu výsledků uveďte období, přesná označení robotů a způsob ověření.“**

7. **„podle referreru či kampaně“** → Anglický termín se objevuje bez vysvětlení, přestože FAQ má fungovat samostatně. → **„podle odkazující stránky (referreru) či kampaně“**.

8. **„Součet ‚AI provoz‘ zakryje právě rozdíl, podle kterého se rozhodujete.“** → Konstrukce „součet ‚AI provoz‘“ je mluvnicky neúplná a „právě rozdíl“ zbytečně zdůrazňuje samozřejmou pointu. → **„Jediný součet označený jako ‚provoz AI‘ zakryje rozdíly, podle kterých se potřebujete rozhodovat.“**

9. **„čtyři chyby převrátí výsledek“** → Nadpis používá absolutní slib, který text nedokládá: uvedené chyby mohou výsledek zkreslit, ale nemusí ho pokaždé obrátit. → **„čtyři chyby zkreslí výsledek“**.

10. **„Když převládají užitečné URL“** → „Užitečné URL“ nejsou definované; užitečnost závisí na cíli webu a analýzy. → **„Když převládají adresy stránek, které chcete robotům zpřístupnit“**.

## Celkové hodnocení

Text drží věcný edukativní hlas, nestraší a většinu technických pojmů vysvětluje při prvním použití. Nejslabší jsou překladové technické vazby („čtyři řezy“, „obnovit / zalogovat“, „změřte cache“) a několik tvrzení, která z logu vyvozují více, než log přímo dokládá. Typograficky je text čistý; uvozovky, pomlčky, zápis procent i sazba kódu jsou v pořádku.
