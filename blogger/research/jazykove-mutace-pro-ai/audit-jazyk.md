# Jazykový audit C3 — jazykove-mutace-pro-ai

Datum: 15. září 2026. Kontrolovaný podklad: `clanek.mdx` a `marketing/05-messaging-a-tonalita.md`. Proveden mechanický checker a nezávislý redakční průchod podle zásad skillu `cestina-audit`; slovník byl čten pouze cíleným hledáním podezřelých vazeb. Článek ani slovník nebyly upraveny.

## Výsledek

Text převážně odpovídá věcnému edukativnímu hlasu webu. Nalezeno pět konkrétních vazeb nebo nejasností k opravě. Nejde o důvod k plošnému přepisování odborných termínů.

### 1. Chybějící předložka u cílení (ř. 28)

- **Pasáž:** „Region přidávejte tehdy, když verze opravdu cílí konkrétní zemi.“
- **Problém:** Kostrbatá vazba slovesa; pro zaměření na určitý trh je přirozené „cílit na“.
- **Přeformulování:** „Region přidávejte tehdy, když verze opravdu cílí na konkrétní zemi.“

### 2. Nejasný podmět otázky při kontrole jazyka (ř. 70)

- **Pasáž:** „Pro první kontrolu otevřete německou adresu přímo v novém okně. Zůstane německá i bez předchozí návštěvy české verze?“
- **Problém:** „Německá“ gramaticky odkazuje na adresu, kontrolovat se ale má jazyk zobrazeného obsahu. Pro majitele webu není pokyn přesný.
- **Přeformulování:** „Pro první kontrolu otevřete německou adresu přímo v novém okně. Zobrazí se obsah německy i bez předchozí návštěvy české verze?“

### 3. Kostrbatá vazba „u dvou … každá“ (ř. 84)

- **Pasáž:** „U dvou samostatných, plně přeložených produktových stránek tedy v našem příkladu každá odkazuje pomocí canonical sama na sebe.“
- **Problém:** Věta nejprve vyčlení stránky předložkovým spojením a pak je znovu neurčitě připojí jako podmět „každá“. Přímá vazba je jednoznačnější.
- **Přeformulování:** „Každá ze dvou samostatných, plně přeložených produktových stránek tedy v našem příkladu odkazuje pomocí canonical sama na sebe.“
- **Poznámka k formátování:** Při opravě zachovat zvýraznění obsahově důležité části věty.

### 4. „Použijte problém česky“ (ř. 148)

- **Pasáž:** „Použijte stejný zákaznický problém česky a německy.“
- **Problém:** Zákaznický problém se v jazyce „nepoužívá“; v daném kroku se formulují dotazy. Spojení „zákaznický problém“ samo o sobě vadou není.
- **Přeformulování:** „Formulujte dotaz ke stejnému zákaznickému problému česky i německy.“

### 5. Opakuje se test, nikoli výsledek (ř. 150)

- **Pasáž:** „Výsledek zopakujte“
- **Problém:** Nadpis kroku vybízí k zopakování výsledku, přestože navazující pokyn správně požaduje opakovat dotaz a pozorovat možné rozdíly.
- **Přeformulování:** „Test zopakujte“

## Mechanický průchod a platné výjimky

Checker: 1 449 slov, 273 pravidel, dva zásahy `default` na řádcích 33 a 34. Oba jsou součástí technické hodnoty `x-default` / `X-default` ve FAQ. **Neopravovat překladovým slovem.** Jde o platnou direktivu; podle zadání má následovat doložená výjimka v pravidle slovníku.

Bez jazykové námitky ponechávám zejména `hreflang`, `canonical`, `lang`, `inLanguage`, `noindex`, názvy vlastností schema.org, kódy jazyků, URL, JSON a HTML ukázky, názvy služeb a produktu. Přítomnost těchto termínů není hybridní čeština. „Indexaci“ zde předchází vysvětlení zařazení stránky do vyhledávání.

## Nové vady a slovník

Cílené hledání kořenů `cílí`, `zopak`, `návratov`, `návaznost`, `povinně`, `preferenc` a `zákaznick` neukázalo pravidlo zachycující výše uvedené konkrétní vadné vazby. Nálezy jsou především kontextové; nedoporučuji kvůli nim zakazovat jednotlivá slova „výsledek“, „problém“, „německá“ ani odborné sousloví „zákaznický problém“. Případné nové pravidlo musí být úzké a kontrolovat kontext. Tento report slovník nemění.
