## VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Nový blocker nevidím, ale zůstalo několik rozporů a kostrbatých formulací po přepisu.

---

## Nálezy

### 1. [WARNING] Nepřirozená formulace v krátké odpovědi i úvodu

> „Otevírací doba o vaší firmě existuje na několika místech zároveň…“

Česky je to kostrbaté: otevírací doba není „o firmě“.

**Návrh opravy:**

> „Údaj o otevírací době vaší firmy existuje na několika místech zároveň…“

Platí pro `answer` i první odstavec těla.

---

### 2. [TIP] Chybí čárka ve větě opakované v answeru i úvodu

> „…systém použije některou z nich a vy nevíte kterou.“

**Návrh opravy:**

> „…systém použije některou z nich a vy nevíte, kterou.“

---

### 3. [WARNING] Rozpor v počtu míst: statistika říká 6, postup fakticky vyjmenovává 7

> `value: "6"`  
> „typických míst, kde se otevírací doba o firmě může objevit zároveň“

vs.

> „Web, strukturovaná data, Google Business Profile, Firmy.cz, mapy, sociální sítě, rezervační systém.“

To je sedm položek, pokud jsou strukturovaná data samostatné místo. Checklist naopak spojuje „Mapy a sociální sítě“ do jedné položky, takže taxonomie není stabilní.

**Návrh opravy:** sjednotit všude jednu logiku. Např. buď:

> „7 typických míst…“

nebo v postupu sloučit položky:

> „Web včetně strukturovaných dat, firemní profil na Googlu, katalogy, mapy a sociální sítě, rezervační systém.“

---

### 4. [WARNING] Titulek a meta slibují „aktuální data firmy“, tělo řeší skoro jen otevírací dobu

> `seoTitle: "Otevírací doba a aktuální data firmy v AI (2026)"`

Článek odpovídá dobře na otevírací dobu, ale „aktuální data firmy“ jsou širší: adresa, telefon, URL, pobočky, služby, dočasná uzavření, kontaktní údaje.

**Návrh opravy:** buď zúžit slib v titulku, nebo doplnit krátký blok, např.:

> „Stejný postup použijte i pro další aktuální údaje: adresu, telefon, URL webu, názvy poboček, služby a dočasná uzavření. Otevírací doba je jen nejviditelnější příklad, protože má přímý dopad na návštěvu provozovny.“

---

### 5. [WARNING] Absolutní a těžko doložitelná formulace „nikdo nezveřejnil“

> „…kritéria výběru zdroje nikdo nezveřejnil.“

„Nikdo“ je příliš absolutní a nedoložitelné. Stačí bezpečnější formulace.

**Návrh opravy:**

> „…u hlavních systémů nejsou kritéria výběru zdroje veřejně popsaná do té míry, aby se na ně dalo spolehnout.“

---

### 6. [WARNING] „Výběr zdrojů kolísá“ je příliš široké tvrzení pro mapy i vyhledávání

> „Výběr zdrojů kolísá, takže jeden test nestačí…“

U AI odpovědí je proměnlivost uvěřitelná, ale věta zahrnuje i mapy a vyhledávání. Tam se výsledky také mohou lišit, ale ne vždy stejným způsobem.

**Návrh opravy:**

> „U AI odpovědí se výsledek může měnit podle dotazu a času. U map a vyhledávání zase ověřte, co se skutečně zobrazuje uživateli, ne jen co vidíte v administraci.“

---

### 7. [WARNING] Znovu se objevuje absolutismus „jediná pojistka“

> „Garantovaná lhůta neexistuje, takže předstih je jediná pojistka.“

To je zbytečně kategorické. Předstih je důležitý, ale ne jediný kontrolní mechanismus — patří k němu i ověření dotazem.

**Návrh opravy:**

> „Garantovaná lhůta neexistuje, takže předstih a následné ověření jsou nejbezpečnější postup.“

---

### 8. [WARNING] Nepřesnost u strukturovaných dat: „zapisuje se jako objekt“ je moc úzké

> „Ve strukturovaných datech se otevírací doba zapisuje jako objekt s dny a časy, ne jako věta.“

Pro `openingHoursSpecification` ano, ale obecně schema.org zná i textovější zápisy typu `openingHours`. Věta může působit jako absolutní pravidlo.

**Návrh opravy:**

> „Pro přesnější strojově čitelný zápis se u místních firem používá `openingHoursSpecification`: objekt s dny a časy, ne jen volná věta v textu stránky.“

---

### 9. [TIP] Display title je hovorový a lehce nejasný

> `title: "Otevírací doba v AI odpovědi: proč tam svítí stará"`

„Svítí stará“ je hovorové a bez podstatného jména trochu nedotažené.

**Návrh opravy:**

> `title: "Otevírací doba v AI odpovědi: proč se zobrazuje starý údaj"`

---

### 10. [TIP] FAQ obsahuje kostrbaté „Projděte dotaz“

> „Projděte dotaz na otevírací dobu v AI nástroji…“

Lépe česky:

> „Vyzkoušejte dotaz na otevírací dobu v AI nástroji, v mapách i ve vyhledávání…“

---

### 11. [TIP] Nesjednocené pojmenování Google profilu

> „Profil na Googlu“  
> „Google Business Profile“  
> „Firemní profil na Googlu“

V textu se střídají tři varianty. Není to věcná chyba, ale zhoršuje srozumitelnost.

**Návrh opravy:** při prvním výskytu:

> „Firemní profil na Googlu (Google Business Profile)“

Dál používat už jen:

> „firemní profil na Googlu“

---

### 12. [WARNING] Článek má fakticky dvě CTA, i když zadání říká jedno

> „[AI SEO audit za 3 600 Kč](/audit/)… Kdo chce začít sám, má k dispozici [návod zdarma](/navod-zdarma/).“

To jsou dvě akční výzvy v závěru. Pokud má článek mít jedno CTA, druhou větu přesuňte mimo CTA nebo ji odstraňte.

**Návrh opravy:**

> „Chcete vědět, jestli se údaje o vaší firmě někde nerozcházejí? [AI SEO audit za 3 600 Kč](/audit/) projde strukturovaná data, profily i viditelnost v AI nástrojích a dá plán priorit.“

Nebo pokud má být hlavní CTA free PDF, ponechat jen návod zdarma.