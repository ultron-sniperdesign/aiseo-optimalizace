**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Níže jsou konkrétní nálezy k tomuto článku. Většina textu je použitelná a tón je převážně věcný, ale před publikací je potřeba opravit několik věcných a slovníkových problémů, hlavně kolem `Service`, formulací o ceně a anglicismů.

---

## 1) [BLOCKER] Zakázaný termín „schema.org / schema“ není problém, ale článek používá zakázaný pojem „strukturovaná data Service“ místy bez českého vysvětlení a v zadání je výslovně hlídaný slovník

**Citace:**
- `service strukturovaná data`
- `Doplňte strukturovaná data Service`
- `Service data ať sedí s obsahem`

**Problém:**
Samotné názvy typů `Service`, `Offer`, `Organization`, `Audience` jsou v pořádku jako technické názvy. Problém je formulace typu „Service data“, která je směsí češtiny a angličtiny a působí neuhlazeně. U webu s přísným slovníkem je to zbytečné.

**Návrh opravy:**
- „strukturovaná data typu `Service`“
- „doplňte strukturovaná data pro službu s typem `Service`“
- „strukturovaná data musí sedět s obsahem stránky“

---

## 2) [BLOCKER] Přehnané tvrzení o ceně: „bez ceny nebo aspoň rozpětí nemá AI co odpovědět“

**Citace:**
- ve `stats`: `bez ceny nebo aspoň rozpětí nemá AI co odpovědět na dotaz kolik to stojí`
- v textu: `Bez ceny ale vaše stránka na nejčastější dotaz neodpovídá vůbec, takže o možnost být v odpovědi přichází rovnou.`

**Problém:**
Tohle je příliš absolutní. AI může odpovědět i bez ceny z vaší stránky:
- shrnutím, že cena je individuální,
- citací jiných částí webu,
- nebo obecnou odpovědí bez konkrétní částky.
Tvrzení „nemá co odpovědět“ je overclaim. Zadání na to míří přímo.

**Návrh opravy:**
Mírnit formulace:
- místo `nemá AI co odpovědět` → `AI hůř najde konkrétní odpověď na dotaz o ceně`
- místo `přichází rovnou` → `snižuje to šanci, že vaše stránka poslouží jako zdroj konkrétní odpovědi`
- do stats:
  - `cenový rámec`
  - `bez ceny nebo aspoň rozpětí se hůř odpovídá na dotaz, kolik služba stojí`

---

## 3) [BLOCKER] Věcně sporné zjednodušení: „Service nemá ve výsledcích vyhledávání vlastní vzhled“

**Citace:**
- `typ strukturovaných dat pro služby — pomáhá strojové srozumitelnosti, ne vzhledu výsledku`
- `Na rozdíl od produktů ale Service nemá ve výsledcích vlastní vzhled`
- `Na rozdíl od produktů nemá Service ve výsledcích vyhledávání vlastní vzhled`

**Problém:**
V jádru je to skoro správně, ale formulace je příliš kategorická. Přesnější je:
- Google nemá běžně samostatný rich result typ specificky pro `Service` s garantovaným vizuálním výstupem jako u některých jiných schémat.
- Strukturovaná data `Service` mohou pomoci se strojovým pochopením obsahu, ale sama o sobě negenerují zvláštní vzhled výsledku.

Současná formulace „nemá vlastní vzhled“ může působit jako tvrdé pravidlo napříč vyhledávači i rozhraními, což je zbytečně široké.

**Návrh opravy:**
Použít přesnější formulaci:
- `Typ Service obvykle nevytváří samostatný rich result s vlastním vzhledem. Jeho hlavní přínos je strojová srozumitelnost obsahu, ne vizuální úprava výsledku.`

---

## 4) [DOPORUČENÍ] JSON-LD ukázka je v zásadě korektní, ale je příliš zjednodušená a bez upozornění může svádět k mechanickému kopírování

**Citace:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI SEO audit",
  "serviceType": "SEO konzultace",
  "description": "Revize webu z pohledu viditelnosti v AI odpovědích a ve vyhledávání.",
  "provider": { "@type": "Organization", "name": "Vaše firma s.r.o." },
  "areaServed": { "@type": "Country", "name": "Česko" },
  "audience": { "@type": "Audience", "audienceType": "E-shopy a B2B firmy" },
  "offers": {
    "@type": "Offer",
    "price": "9990",
    "priceCurrency": "CZK"
  }
}
```

**Problém:**
Použití vlastností je většinou správné:
- `serviceType` — použitelné
- `provider` — správně
- `areaServed` — správně
- `audience` — použitelné
- `offers` + `Offer` + `price` + `priceCurrency` — použitelné

Ale:
1. `offers` u služby není vždy to nejběžnější minimum a bez `url`, `availability` nebo aspoň jasné vazby na konkrétní nabídku je to dost strohé.
2. `areaServed` s `Country` a názvem `Česko` je srozumitelné, ale praktičtější bývá normalizovanější zápis (`Czech Republic` nebo kód země tam, kde to implementace podporuje).
3. `audience` není chyba, ale u běžné servisní stránky nebývá klíčové pole; text vytváří dojem, že je skoro povinné.
4. Článek neupozorňuje, že je to ilustrační minimum, ne univerzální šablona.

**Návrh opravy:**
Doplnit jednu větu nad nebo pod ukázku:
- `Ukázka je zjednodušené minimum. Konkrétní vlastnosti doplňte jen tehdy, pokud odpovídají viditelnému obsahu stránky.`

Případně upravit doprovodný text:
- místo `název, popis, poskytovatele, oblast působení, komu je určená a nabídku s cenou`  
  → `typicky název, popis, poskytovatele a případně oblast působení či cenovou nabídku, pokud jsou na stránce skutečně uvedené`

---

## 5) [DOPORUČENÍ] `serviceType` v ukázce neodpovídá plně názvu služby a může mást

**Citace:**
- `"name": "AI SEO audit"`
- `"serviceType": "SEO konzultace"`

**Problém:**
Není to vyloženě chybně podle Schema.org, ale významově to nesedí. „Audit“ a „konzultace“ nejsou totéž. U návodu pro začátečníky je lepší nepředvádět příklad, kde se název a typ mírně rozcházejí.

**Návrh opravy:**
Sjednotit význam:
- `"serviceType": "AI SEO audit"`
nebo
- `"name": "SEO konzultace pro AI vyhledávání"`

---

## 6) [DOPORUČENÍ] `audience` je prezentováno jako skoro povinná součást, což je zavádějící

**Citace:**
- `komu je určená`
- `JSON-LD s typem Service — název, popis, poskytovatele, oblast působení, komu je určená a nabídku s cenou`

**Problém:**
U `Service` je `audience` možné použít, ale není to „musí tam být“. Článek na několika místech splývá mezi:
- co má být na viditelné stránce kvůli srozumitelnosti,
- a co má být ve strukturovaných datech.

To není totéž.

**Návrh opravy:**
Zpřesnit:
- `Ve strukturovaných datech můžete doplnit i cílovou skupinu, pokud je na stránce jasně popsaná.`
- Neprezentovat `audience` jako povinné minimum.

---

## 7) [DOPORUČENÍ] Anglicismus „warning“ v komponentě nevadí technicky, ale v textu je zbytečně moc anglických výrazů kolem UX bloků a „stepperu“

**Citace:**
- `import Stepper`
- `import Checklist`
- `import CompareTable`
- `import Insight tone="warning"`

**Problém:**
V obsahu určeném k publikaci to čtenář nevidí, takže to není redakční problém samo o sobě. Pokud ale tento MDX někdo uvidí v repu nebo workflow, není to chyba článku. Z hlediska publikovaného textu je relevantní spíš anglicismus uvnitř textu.

**Návrh opravy:**
Bez zásahu do článku. Jen potvrzuji: importy nehodnotím jako problém publikovaného obsahu.

---

## 8) [BLOCKER] První odstavec i `answer` jsou dobré, ale nejsou úplně identické v důrazu a druhá věta obsahuje lehce normativní „musí“

**Citace:**
- `answer`: `Aby z ní AI mohla čerpat, musí odpovídat na to, co se lidé ptají...`
- první odstavec: totéž + `Tento návod ukazuje...`

**Problém:**
Na ose citovatelnosti je to skoro splněné velmi dobře. Problém je spíš v absolutnosti slova „musí“. AI může čerpat i z méně dobře strukturované stránky; jen je to méně pravděpodobné a méně přesné.

**Návrh opravy:**
- `Aby z ní AI mohla čerpat spolehlivěji, měla by odpovídat na to, co se lidé ptají...`
- nebo `Pokud z ní má AI čerpat přesněji, měla by odpovídat...`

Jinak je `answer` formálně dobrá:
- začíná definicí,
- dává samostatný smysl,
- má přibližně správnou délku.

---

## 9) [DOPORUČENÍ] Interní odkaz na produktové stránky je relevantní, ale odkaz na „jak AI cituje zdroje“ v závěru je tematicky slabší než přímý odkaz na službu / pilíř o stránkách služeb

**Citace:**
- `[produktové stránky pro AI](/blog/produktove-stranky-pro-ai/)`
- `[strukturovaná data pro AI](/blog/strukturovana-data-pro-ai/)`
- `[B2B kontext](/blog/ai-seo-b2b/)`
- `[jak AI cituje zdroje](/blog/jak-ai-cituje-zdroje/)`

**Problém:**
Odkazy jsou většinou smysluplné. Nejslabší je poslední odkaz v rekapitulaci — není špatně, ale není nejpřímější pokračování pro čtenáře řešící servisní stránku. Audit má být konkrétní: zde chybí odkaz na silnější pilíř k architektuře webu, službám nebo cenotvorbě, pokud takový existuje.

**Návrh opravy:**
Pokud existuje vhodnější interní článek, v závěru vyměnit nebo doplnit odkaz za:
- pilíř ke stránkám služeb,
- článek o cenách služeb,
- článek o obsahu pro B2B služby.

Pokud nic takového není, lze ponechat.

---

## 10) [KOSMETIKA] Meta description je v limitu, ale stylisticky je o něco slabší než titulek a zní lehce negativně

**Citace:**
- `Stránky služeb bývají pro AI prázdné: chybí rozsah i cena. Návod, co na stránku služby dát, jak použít strukturovaná data Service a pro koho ji vymezit.`

**Problém:**
Délka je v pořádku. Jen:
- „pro AI prázdné“ je trochu kostrbaté,
- znovu je tam nečeská vazba „data Service“.

**Návrh opravy:**
Např.:
- `Jak upravit stránku služby, aby z ní AI i vyhledávače lépe chápaly nabídku. Co uvést o rozsahu, ceně i strukturovaných datech typu Service.`

---

## 11) [KOSMETIKA] Slug je srozumitelný, ale neobsahuje hlavní frázi „stránka služby“

**Citace:**
- `slug: "sluzby-stranka-pro-ai"`

**Problém:**
Slug není špatný, ale pro cílové KW by byl přesnější tvar se slovosledem „stranka-sluzby“. Současný slug je méně přirozený.

**Návrh opravy:**
Zvážit:
- `stranka-sluzby-pro-ai`
nebo
- `stranka-sluzby-b2b-ai`

Pokud už je slug zavedený a nechcete měnit URL, není to blocker.

---

## 12) [DOPORUČENÍ] Tvrzení „jedna služba = jedna stránka“ je užitečné, ale podané příliš dogmaticky

**Citace:**
- `jedna služba = jedna stránka; deset služeb na jedné stránce se špatně dohledává`
- `Lepší je jedna služba na jednu stránku.`
- `Jedna služba, jedna stránka.`

**Problém:**
Obecně je to dobrá praxe, ale ne univerzální pravidlo bez výjimek. U velmi úzce souvisejících mikrovariant může dávat smysl společná stránka. V tutorialu je lepší nepůsobit jako absolutní norma.

**Návrh opravy:**
- `Ve většině případů pomáhá jedna hlavní služba na jednu stránku.`
- `Když je na jedné stránce mnoho různých služeb, hůř se z ní čerpá konkrétní odpověď.`

---

## 13) [DOPORUČENÍ] E-E-A-T je použito bez vysvětlení; to je na hraně zadaného slovníku

**Citace:**
- `Autor nebo tým s reálnou zkušeností; viz E-E-A-T`

**Problém:**
E-E-A-T je v zadání mezi povolenými technickými názvy, takže není zakázané. Ale bez krátkého dovysvětlení může být pro část čtenářů nesrozumitelné.

**Návrh opravy:**
- `Autor nebo tým s reálnou zkušeností; viz E-E-A-T (zkušenost, odbornost, důvěryhodnost)`

---

## 14) [KOSMETIKA] „Produktová stránka to má jednodušší“ je zkratka, ale věcně obstojí

**Citace:**
- `Produktová stránka to má jednodušší: má cenu, dostupnost, parametry, často i recenze...`

**Hodnocení:**
Tohle je v zásadě v pořádku jako edukativní zkratka. Není nutná oprava.

---

## 15) [DOPORUČENÍ] Riziko účelovosti kolem cen je částečně ošetřené, ale chce to ještě jednu pojistku

**Citace:**
- celý článek tlačí na uvádění cenových rámců
- CTA nabízí konkrétní ceny: `Pack za 1 490 Kč`, `Audit za 9 990 Kč`

**Problém:**
Není to pokrytecké, protože vlastní ceny uvádíte transparentně. To je plus. Přesto může článek působit účelově: „radíme uvádět ceny a sami tím prodáváme“. Chybí jedna explicitní věta, že cenový rámec není vždy vhodný pro každou službu a někdy je poctivější vysvětlit, proč je nacenění individuální.

**Návrh opravy:**
Do sekce o ceně přidat jednu vyvažující větu:
- `U složitých B2B služeb nemusí být pevná cena realistická; i tehdy ale pomůže aspoň orientační rámec nebo jasné vysvětlení, z čeho se cena skládá.`

Tím snížíte dojem, že jde jen o prodejní argument.

---

## 16) [KOSMETIKA] CTA je splněné dobře

**Citace:**
- `AI SEO Wireframe Pack za 1 490 Kč`
- `AI SEO audit za 9 990 Kč`

**Hodnocení:**
Tohle je správně. CTA je konkrétní, navazuje na téma článku a nejde o generické „kontaktujte nás“. Bez výtek.

---

## 17) [KOSMETIKA] Titulek je funkční a KW je na začátku

**Citace:**
- `Stránka služby pro AI: návod pro služby a B2B`

**Hodnocení:**
SEO základ je splněný:
- délka přibližně sedí,
- klíčová fráze je vpředu,
- titulek odpovídá obsahu.

Bez nutné opravy.

---

# Shrnutí k publikaci

Článek má dobrý základ:
- silný `answer`,
- rozumnou H2 strukturu,
- relevantní CTA,
- žádné agresivní prodejní sliby,
- JSON-LD ukázka je v zásadě validní jako ilustrační minimum.

**Před publikací ale opravte hlavně tyto 4 body:**
1. zmírnit absolutní tvrzení o ceně (`nemá AI co odpovědět`),
2. zpřesnit tvrzení o `Service` a vzhledu ve výsledcích,
3. uhladit smíšené formulace typu `Service data`,
4. doplnit, že ukázka JSON-LD je zjednodušené minimum, ne univerzální šablona.

Po těchto úpravách bych článek pustil.