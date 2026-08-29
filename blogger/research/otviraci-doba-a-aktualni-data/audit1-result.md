## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Článek má dobrý vlastní úhel a není zásadně kanibalizační. Blokují ho ale hlavně **nepodložené absolutní formulace** a několik míst, kde se implementační doporučení prezentuje jako jistý fakt.

---

# 1. Blokující nálezy

## 1. [BLOCKER] Příliš kategorické tvrzení o nezveřejněných lhůtách

> `0` — „zveřejněných lhůt, za jak dlouho se změna promítne do AI odpovědi“

A dále:

> „Lhůty nikdo z provozovatelů nezveřejňuje.“

Problém: tvrzení je formulované absolutně pro všechny provozovatele a všechny typy AI odpovědí. To je těžko doložitelné. Bez přesného rozsahu je to příliš silný claim.

**Návrh opravy:**

Ve statistikách:

> `0` — „známých jednotných lhůt, na které se lze spolehnout u AI odpovědí“

Ve FAQ:

> „Jednotná a spolehlivá lhůta pro promítnutí změn do AI odpovědí není veřejně garantovaná. Počítejte s prodlevou a nespoléhejte na změnu zadanou den předem.“

---

## 2. [BLOCKER] Zápis zavřeno přes `00:00`–`00:00` je podán jako jistota

> „Zavřeno se zapisuje jako otevírací i zavírací čas `00:00` pro daný den.“

A ve FAQ:

> „Zavřeno se zapisuje jako otevírací i zavírací čas 00:00 pro daný den.“

Problém: v zadání je výslovně uvedeno, že jde o implementační přehledy, ne primární dokumentaci. Článek to sice zmiňuje až ve zdrojích, ale v hlavním textu a FAQ to zní jako pevné pravidlo.

**Návrh opravy:**

V hlavním textu:

> „V implementačních návodech se zavřeno často zapisuje jako otevírací i zavírací čas `00:00` pro daný den. Protože nejde o primární dokumentaci všech platforem, je vhodné výstup po nasazení ověřit.“

Ve FAQ:

> „Nejčastěji se používá výjimka s datem platnosti a časy. U zavřeného dne se v implementačních návodech často uvádí `opens: 00:00` a `closes: 00:00`, ale výsledek je potřeba ověřit v konkrétním systému.“

---

## 3. [BLOCKER] Nepodložené tvrzení, že rozpor je „běžný stav“

> „Rozpor mezi nimi je běžný stav, ne výjimka.“

Problém: zadání výslovně říká, že nemáme vlastní měření a nemáme si vymýšlet frekvenci rozcházení údajů. „Běžný stav“ naznačuje četnost, kterou článek nedokládá.

**Návrh opravy:**

> „Rozpor mezi nimi může vzniknout snadno — stačí, aby se jedno místo při aktualizaci vynechalo.“

---

## 4. [BLOCKER] Absolutní formulace „jediná cesta“

> „Ruční kontrola je jediná cesta, jak to ověřit.“

Problém: příliš absolutní. Existují i monitoringové nástroje, upozornění v profilech, validátory strukturovaných dat nebo kombinace ruční a automatické kontroly. Pro článek stačí bezpečnější formulace.

**Návrh opravy:**

> „Ruční kontrola dotazem zvenčí je nejpraktičtější způsob, jak zjistit, co systém skutečně odpovídá.“

---

## 5. [BLOCKER] Příliš silný kauzální claim o strukturovaných datech

> „Usnadní strojům práci a sníží pravděpodobnost, že si systém přečte starý text z patičky.“

Problém: „sníží pravděpodobnost“ je sice obecně bezpečnější než garance, ale konkrétní mechanismus „místo starého textu z patičky“ není doložený. Nevíme, jak daný AI systém zdroj vybere.

**Návrh opravy:**

> „Usnadní strojům čtení aktuálního údaje a mohou snížit riziko, že systém sáhne po méně přesném nebo zastaralém zápisu.“

---

# 2. Doporučení

## 1. [WARNING] SEO title je v pořádku délkou, ale nepracuje dost s cílovým klíčovým slovem „aktuální data“

> `seoTitle: "Otevírací doba v AI odpovědi: jak sjednotit údaje (2026)"`

Délka je dobrá, klíčové téma je vepředu. Chybí ale složka cílového klíčového slova „aktuální data“.

**Návrh opravy:**

> `seoTitle: "Otevírací doba a aktuální data firmy v AI (2026)"`

Případně:

> `seoTitle: "Otevírací doba a aktuální data: jak sjednotit údaje"`

---

## 2. [WARNING] První H2 nepoužívá cílový úhel článku

> `## Jeden údaj, pět míst, jedna odpověď`

Nadpis je srozumitelný, ale slabší pro SEO/GEO. Neobsahuje „otevírací doba“ ani „aktuální data“.

**Návrh opravy:**

> `## Otevírací doba a aktuální data: jeden údaj na více místech`

---

## 3. [WARNING] Nepřesná statistika „5+ míst“ vs. text mluví o pěti místech

> `5+` — „míst, kde otevírací doba o firmě obvykle žije zároveň“

A H2:

> „Jeden údaj, pět míst, jedna odpověď“

Problém: v checklistu je ve skutečnosti minimálně šest kategorií: web, strukturovaná data, Google, katalogy, mapy/sítě, rezervační systémy. „Pět míst“ působí jako zaokrouhlení, ale článek sám ho hned překračuje.

**Návrh opravy:**

Buď sjednotit na „šest“:

> `6` — „typických míst, kde se otevírací doba může objevit“

A H2:

> `## Jeden údaj, šest míst, jedna odpověď`

Nebo bezpečněji:

> `## Jeden údaj, více zdrojů, jedna odpověď`

---

## 4. [WARNING] „Obvykle“ ve statistice není doložené

> „míst, kde otevírací doba o firmě obvykle žije zároveň“

Problém: „obvykle“ implikuje znalost běžného stavu napříč firmami. To není doložené.

**Návrh opravy:**

> „míst, kde se otevírací doba o firmě může objevit zároveň“

---

## 5. [WARNING] Nepodložený absolutismus v checklistu

> „Často tři různé hodnoty na jednom webu.“

Problém: „často“ a „tři různé hodnoty“ působí jako pozorování z měření. Pokud nemáte data, zjemnit.

**Návrh opravy:**

> „Na jednom webu se mohou objevit různé hodnoty — třeba v patičce, kontaktu a na stránce pobočky.“

---

## 6. [WARNING] Nepodložené tvrzení o Googlu jako „nejviditelnějším zdroji“

> „Google Business Profile je pro místní dotazy nejviditelnější zdroj.“

Problém: „nejviditelnější“ je silný superlativ. Může být pravda v mnoha případech, ale článek to nedokládá.

**Návrh opravy:**

> „Google Business Profile bývá u místních dotazů velmi viditelný zdroj.“

Ještě lépe česky:

> „Firemní profil na Googlu bývá u místních dotazů velmi viditelný zdroj.“

---

## 7. [WARNING] Zbytečně tvrdé tvrzení o sociálních sítích

> „Údaj tam bývá nejstarší, protože se needituje.“

Problém: opět nedoložený zobecňující claim. Navíc „nejstarší“ je superlativ.

**Návrh opravy:**

> „Údaj tam může snadno zastarat, protože se po založení profilu často přehlédne.“

Pokud nemáte data ani pro „často“, bezpečněji:

> „Údaj tam může snadno zastarat, protože se po založení profilu nemusí pravidelně kontrolovat.“

---

## 8. [WARNING] Absolutní formulace „vždycky“

> „Bez seznamu se na jedno místo vždycky zapomene.“

Problém: zbytečně tvrdé. Manipulativní nádech není velký, ale jde mimo věcný tón.

**Návrh opravy:**

> „Bez seznamu se na některé místo snadno zapomene.“

---

## 9. [WARNING] Nepodložené tvrzení „klidně roky“

> „Profily a katalogy si drží starou hodnotu klidně roky…“

Problém: může to být pravda v praxi, ale bez doložení je to příliš konkrétní časové tvrzení.

**Návrh opravy:**

> „Profily a katalogy mohou držet starou hodnotu dlouho…“

Celá věta:

> „Profily a katalogy mohou držet starou hodnotu dlouho a u místních dotazů mohou být viditelnější než samotný web.“

---

## 10. [WARNING] Slovo „přebíjí“ je srozumitelné, ale chce jednou vysvětlit přesněji

> „Pro svátky a dočasné změny slouží samostatná výjimka, která běžnou dobu přebíjí.“

Je to věcně v pořádku, ale pro méně technického čtenáře je vhodné jednou doplnit význam.

**Návrh opravy:**

> „Pro svátky a dočasné změny slouží samostatná výjimka, která má pro uvedené datum přednost před běžnou otevírací dobou.“

---

## 11. [WARNING] JSON ukázka může být nejasná jako kopírovatelný kód

> ```json
> "openingHoursSpecification": [{
> ...
> }]
> ```

Problém: ukázka je jen fragment, ne kompletní JSON-LD. Čtenář ji může zkopírovat jako neplatný kód.

**Návrh opravy:**

Před ukázku doplnit:

> „Níže je zjednodušený fragment zápisu v rámci objektu `LocalBusiness`, ne kompletní JSON-LD blok.“

Nebo rovnou uvést kompletní minimální ukázku s `@context`, `@type`, `name`, `url`.

---

## 12. [WARNING] U `specialOpeningHoursSpecification` chybí upozornění na podporu jednotlivými systémy

> „Pro svátky a dočasné změny slouží samostatná výjimka…“

Problém: vlastnost existuje ve schema.org, ale článek by neměl naznačovat, že ji všechny AI systémy nebo všechny vyhledávače stejně využijí.

**Návrh opravy:**

> „Ve slovníku schema.org pro to existuje `specialOpeningHoursSpecification`. Podpora a využití se ale může lišit podle systému, proto je potřeba výsledek ověřit.“

---

## 13. [TIP] Interní odkazy jsou až v závěru; u dvou míst by měly být kontextové

> „Firmy.cz a oborové katalogy — rozebírá to článek o profilu na Firmy.cz.“

Problém: text odkaz slibuje, ale není prokliknutý přímo v místě, kde čtenář řeší katalog.

**Návrh opravy:**

> „Firmy.cz a oborové katalogy — podrobněji viz [profil na Firmy.cz jako zdroj pro AI](/blog/firmy-cz-pro-ai/).“

Druhé vhodné místo:

> „stejná logika jako u [proměnlivosti AI odpovědí](/blog/volatilita-ai-odpovedi/)“

Tady odkaz je správně. Nesahat.

---

## 14. [TIP] Zbytečný anglicismus v závěrečném odkazu

> „širší kontext místní viditelnosti [Local SEO v Česku](/blog/local-seo-cesko-2026/)“

Pokud je to přesný název článku, dá se tolerovat. V běžném textu je ale lepší česky.

**Návrh opravy:**

> „širší kontext místní viditelnosti řeší článek [místní SEO v Česku](/blog/local-seo-cesko-2026/).“

---

## 15. [WARNING] Zakázaný/nevhodný slovník: „Organization schema“

> „identitu firmy ve strukturovaných datech [Organization schema](/blog/organization-schema-pro-znacku/)“

Problém: nejde přesně o zakázaný termín „schema markup“, ale je to zbytečný anglicismus a koliduje s preferovaným slovníkem webu. Navíc v češtině už věta obsahuje lepší formulaci.

**Návrh opravy:**

> „identitu firmy ve strukturovaných datech řeší [článek o organizaci ve strukturovaných datech](/blog/organization-schema-pro-znacku/).“

---

## 16. [TIP] CTA je konkrétní, ale chybí druhý placený produkt z briefu

> „[AI SEO audit za 3 600 Kč](/audit/)… Kdo chce začít sám, má k dispozici [návod zdarma](/navod-zdarma/).“

CTA splňuje požadavek — nejde o generické „kontaktujte nás“. Pokud ale chcete zapojit i druhý produkt z briefu, lze doplnit Wireframe Pack.

**Návrh opravy:**

> „Pokud chcete rovnou upravit strukturu kontaktní stránky nebo stránky pobočky, použijte [AI SEO Wireframe Pack za 1 490 Kč](/wireframe-pack/).“

Pozor: přidat jen pokud je URL a produktová stránka skutečně existující.

---

## 17. [TIP] Meta description je dobrá, ale může přesněji obsahovat „aktuální data“

> „Otevírací doba žije na webu, v mapách i v katalogu. Když se údaje rozejdou, systém si vybere jeden. Jak je sjednotit a ověřit, co o vás říkají.“

Délka je v pořádku. Pro cílové klíčové slovo bych doplnil „aktuální data“.

**Návrh opravy:**

> „Otevírací doba a aktuální data firmy žijí na webu, v mapách i katalozích. Jak je sjednotit a ověřit, co říká AI.“

---

# 3. Co je v pořádku

- **Vlastní úhel článku je jasný:** prevence rozporů u časově citlivých údajů. Nekryje se zásadně s články o Firmy.cz, místním SEO ani opravě chybné AI odpovědi.
- **Krátká odpověď ve frontmatteru má správnou délku a dává samostatný smysl.** Začíná definicí problému, ne negací.
- **Prvních zhruba 100 slov těla funguje jako samostatná odpověď.**
- **Tón je převážně věcný a neprodává tvrdě.** Nejsou tam zakázané sliby typu „garantujeme #1“ ani „AI vás začne zaručeně doporučovat“.
- **Struktura tutorialu je logická:** problém → místa výskytu → důvod chyby → postup → strukturovaná data → ověření → chyby → CTA.
- **CTA je konkrétní:** vede na AI SEO audit za 3 600 Kč a návod zdarma.
- **Slug je smysluplný:** `otviraci-doba-a-aktualni-data`.
- **Zdroje jsou uvedené a časově ukotvené k roku 2026.** Stačí jen zpřesnit místa, kde se implementační doporučení tváří jako primární pravidlo.