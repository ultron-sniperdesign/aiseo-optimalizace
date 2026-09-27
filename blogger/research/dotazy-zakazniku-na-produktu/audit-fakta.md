# Audit faktů: Dotazy zákazníků na produktu

Datum ověření: 27. 9. 2026
Rozsah: věcná správnost tvrzení, čísel, dat a URL; zvláštní kontrola FAQ rich results, `QAPage`, moderace UGC a Baymard Institute
Verdikt: **OPRAVIT PŘED PUBLIKACÍ**

## Nálezy

### 1. [BLOCKER] Výčet podmínek `QAPage` je neúplný

**Citovaná pasáž:**

> „Pro `QAPage` platí tři podstatné podmínky: stránka se zaměřuje na **jednu otázku**, uživatelé mohou přidávat **alternativní odpovědi** a značení obsahuje úplný viditelný text.“

**Problém:** Text podává tři body jako podmínky Googlu, ale vynechává další podmínky způsobilosti pro Q&A rich result, které obsahuje i vlastní `research.md`: otázka musí mít nejméně jednu `acceptedAnswer` nebo `suggestedAnswer`; přesně jedna `Question` musí být v `mainEntity` přesně jednoho `QAPage`; `answerCount` musí odpovídat obsahu; přijatá odpověď musí být skutečně přijata na webu. Stránka zároveň musí být Googlem dostupná a nesmí ji blokovat `robots.txt`, `noindex` ani přihlášení. Existuje také výslovná výjimka pro vzdělávací Q&A, kde může jedinou odpověď dodat nebo vybrat interní odborník. Závěr, že běžný produktový detail s více otázkami podmínky nesplňuje, je správný, ale obecný výklad podmínek je neúplný.

**Důkaz:** Primární dokumentace Googlu uvádí neplatný případ „a product page where users can submit multiple questions and answers on a single page“, zakazuje více otázek na jedné stránce a vyžaduje, aby uživatelé mohli posílat odpovědi; současně uvádí vzdělávací výjimku. V definici vlastností požaduje jednu `Question`, `answerCount` a nejméně jednu odpověď pro způsobilost k rich result. V implementačním postupu navíc požaduje dostupnost stránky pro Google. Viz [Google Search Central: Q&A structured data](https://developers.google.com/search/docs/appearance/structured-data/qapage), zejména části „Content guidelines“, „QAPage“, „Question“ a kroky nasazení.

**Doporučená oprava:** Neuvádět zkrácený seznam jako úplné podmínky. Pro tento článek stačí přesná užší formulace: „Běžný produktový detail s více dotazy `QAPage` pro Google nesplňuje ze dvou samostatných důvodů: stránka obsahuje více otázek a u redakčního FAQ uživatelé nemohou přidávat alternativní odpovědi. Pro úplné podmínky způsobilosti, povinné vlastnosti a vzdělávací výjimku použijte aktuální dokumentaci Googlu.“ Pokud článek chce podmínky vyjmenovat, musí doplnit nejméně jednu odpověď, jednu `Question` v jednom `QAPage`, soulad počtů a skutečného obsahu, skutečně přijatou odpověď a dostupnost/indexovatelnost stránky. Stejnou korekci promítnout do FAQ odpovědi „Má produktová stránka používat QAPage?“

**Dopad:** zásadní. Jde o podmínky cizí platformy a článek je prezentuje jako praktické technické pravidlo.

### 2. [WARNING] „Anonymizace“ a uchování originálu jsou popsány příliš jednoduše

**Citované pasáže:**

> „E-shop je získá z podpory, chatu a formulářů, před zveřejněním je anonymizuje…“

> „U každého podnětu si ponechte **původní znění, dotčený produkt, datum a kanál**.“

> „Odstraňte jméno, e-mail, číslo objednávky a nepodstatné okolnosti…“

**Problém:** Odstranění jména, e-mailu a čísla objednávky nemusí znamenat anonymizaci. Osoba může zůstat identifikovatelná kombinací okolností nebo spojením s dalšími údaji, které e-shop drží. EDPB v aktuálním výkladu z roku 2026 posuzuje anonymitu také podle možnosti izolace záznamu, propojení a odvození informací. Pokyn uchovat přesné původní znění, datum a kanál navíc vytváří nebo rozšiřuje interní evidenci, která může dál obsahovat osobní údaje; článek neříká, že musí mít určený účel, odpovídající právní základ, přístupová pravidla a dobu uchování. Pozdější zákaz zveřejnit detail umožňující člověka poznat riziko snižuje, ale neřeší interní kopii originálu.

**Důkaz:** EDPB uvádí, že data jsou anonymní jen tehdy, pokud se nevztahují k identifikované nebo identifikovatelné osobě; identifikovatelnost se posuzuje podle prostředků rozumně použitelných v daném kontextu. Praktický rámec testuje izolaci záznamu, propojitelnost a možnost odvození. Viz [EDPB: Understanding anonymous data, 8. 7. 2026](https://www.edpb.europa.eu/news/edpb-sheds-light-on-anonymisation-and-web-scraping-for-generative-ai-and-adopts-final-version_en). Evropská komise shrnuje zásady GDPR tak, že organizace smí zpracovat pouze údaje nezbytné pro daný účel a uchovávat je jen po nezbytnou dobu. Viz [European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en).

**Doporučená oprava:** Rozlišit publikovaný text od interního záznamu. Například: „Pro publikaci vytvořte odosobněnou redakční kopii a ověřte, že zákazníka nelze rozumně určit ani nepřímo nebo propojením s jinými údaji. Originální komunikaci nekopírujte do nové obsahové evidence automaticky; pokud ji potřebujete dohledat, odkažte na řízený systém podpory a držte se jeho účelu, přístupů a retenční doby.“ V úvodu raději nepoužívat právně silné slovo „anonymizuje“, pokud proces zajišťuje jen odstranění přímých identifikátorů.

**Dopad:** zásadní. Článek dává provozní návod k práci s potenciálně osobními údaji.

### 3. [WARNING] `ugc` a `nofollow` nejsou dvě úrovně důvěry

**Citované pasáže:**

> „Google doporučuje podezřelé příspěvky schvalovat ručně a odkazy vložené uživateli označit `rel="ugc"`, případně `nofollow`, když jim nedůvěřujete.“

> „Odkazy od uživatelů jsou zkontrolované a podle důvěry označené ugc nebo nofollow.“

**Problém:** Ruční schvalování podezřelých interakcí je popsáno správně. Nepřesná je logika volby atributu: `ugc` označuje původ odkazu v uživatelském obsahu, zatímco `nofollow` Google doporučuje, když jiné hodnoty neplatí a provozovatel nechce, aby Google odkaz spojoval s jeho webem nebo jej z něj procházel. Hodnoty lze kombinovat (`rel="ugc nofollow"`); nejde o vzájemně výlučné stupně podle důvěry. Google dovoluje `ugc` u dlouhodobě důvěryhodných přispěvatelů odstranit.

**Důkaz:** [Google Search Central: Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links) doporučuje `rel="ugc"` pro odkazy v komentářích a fórech, popisuje zvláštní účel `nofollow` a výslovně ukazuje kombinaci `rel="ugc nofollow"`. [Google Search Central: Prevent user-generated spam](https://developers.google.com/search/docs/monitor-debug/prevent-abuse) doporučuje ruční schvalování podezřelých interakcí a u odkazů v nedůvěryhodném obsahu zvážit `nofollow` nebo `ugc`.

**Doporučená oprava:** Napsat: „Odkazy vložené uživateli označte `rel="ugc"`. Pokud nechcete, aby Google odkaz spojoval s vaším webem nebo jej z odkazu procházel, přidejte také `nofollow`; hodnoty lze kombinovat jako `rel="ugc nofollow"`.“ Stejně upravit položku checklistu.

**Dopad:** drobný. Jde o technickou přesnost; základní doporučení moderovat odkazy zůstává správné.

## Ověřeno bez nálezu

- **Konec FAQ rich results:** Google uvádí, že FAQ rich result se od **7. 5. 2026** přestal zobrazovat. V položce změn z **15. 6. 2026** oznámil odstranění dokumentace, protože funkce už ve výsledcích není. Tvrzení článku i FAQ odpověď jsou správné. Primární zdroj: [Google Search documentation updates](https://developers.google.com/search/updates).
- **Starší omezení FAQ:** Blog Googlu z roku 2023 skutečně omezil pravidelné zobrazování FAQ rich results na známé autoritativní vládní a zdravotnické weby. Článek správně popisuje tento stav jako starší. Primární zdroj: [Google: Changes to HowTo and FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes).
- **Baymard Institute:** Odkaz je funkční, článek byl publikován **4. 7. 2017** a rozlišuje redakční FAQ od komunitního Q&A. U komunitních sekcí skutečně popisuje prázdné bloky, nezodpovězené a duplicitní otázky i slabší odpovědi; zároveň uvádí, že v testování nejlépe vyšel hybrid obou přístupů. Auditovaný článek správně dodává, že jde o UX výzkum, nikoli důkaz lepšího pořadí nebo citací v AI. Zdroj: [Baymard: Product Page UX — FAQs and Community Q&As](https://baymard.com/research-articles/product-page-faq-and-qa).
- **Moderace UGC:** Doporučení ručně schvalovat podezřelé příspěvky odpovídá primární dokumentaci Googlu. Doporučení nevytvářet automaticky indexovatelnou stránku s nezodpovězenou otázkou je konzervativní redakční rada; Google navíc doporučuje zvážit `noindex` u příspěvků nových uživatelů bez reputace. Zdroj: [Google: Prevent user-generated spam](https://developers.google.com/search/docs/monitor-debug/prevent-abuse).
- **CTA a produktová fakta:** Kanonický datový modul `src/content/pages/pack.ts` potvrzuje název **AI SEO Wireframe Pack**, cenu **1 490 Kč včetně DPH**, sedm typů stránek, produktovou šablonu, textové šablony, ukázky strukturovaných dat a samostatnou aplikační kapitolu. CTA je věcně konzistentní.
- **Interní a externí URL:** Oba interní odkazy míří na existující slugy (`chatbot-na-webu-a-ai-viditelnost`, `pasazova-optimalizace-obsahu`). Všechny uvedené externí zdroje byly dostupné a tematicky odpovídají citovaným tvrzením.
- **Metadata a citovatelnost:** `description` má 141 znaků, `answer` 46 slov, začíná definicí a dává samostatný smysl. `seoTitle` existuje; délka `title` proto nebyla posuzována.

## Doověření zásadních oprav

### 1. `QAPage` — **NEOBSTÁLO**

První odstavec obstál: Google výslovně uvádí jako neplatný případ produktovou stránku s více otázkami a odpověďmi a samostatně zakazuje redakční FAQ, u něhož uživatelé nemohou přidávat alternativní odpovědi.

Druhý odstavec je z větší části správný, ale v navrženém znění ještě neobstál ze dvou konkrétních důvodů:

1. `answerCount` nemá pouze „odpovídat viditelnému obsahu“. Google požaduje **celkový počet odpovědí k otázce**. Při stránkování má být například hodnota 15 i tehdy, když je na právě zobrazené či označené stránce jen prvních 10 odpovědí. Pokud existují také komentáře, `answerCount + commentCount` má odpovídat celkovému počtu reakcí.
2. Obrat „úplné podmínky“ vzbuzuje dojem úplného výčtu, ale odstavec dál neuvádí povinnost dodržet obecné zásady strukturovaných dat a Search Essentials, vložit do značení úplný text každé označené otázky a odpovědi, nepoužívat `QAPage` pro reklamu a respektovat obsahová omezení rich result. Pokud článek nechce vypisovat celou dokumentaci, musí formulaci zúžit na „mezi další povinné podmínky patří“.

Ostatní body obstály: právě jeden `QAPage`, právě jedna `Question` v `mainEntity`, nejméně jedna `acceptedAnswer` nebo `suggestedAnswer` pro způsobilost k rich result, skutečně přijatá vrchní odpověď, dostupnost stránky Googlu i zmínka o vzdělávací výjimce odpovídají dokumentaci. Konkrétní oprava problematické věty: „Mezi další povinné podmínky patří `answerCount` udávající celkový počet odpovědí napříč případným stránkováním; spolu s `commentCount` má odpovídat celkovému počtu reakcí.“ Zdroj: [Google Search Central: Q&A structured data](https://developers.google.com/search/docs/appearance/structured-data/qapage).

### 2. Práce s původní komunikací — **OBSTÁLO**

Oprava řeší původní výhradu. Nekopíruje automaticky původní komunikaci do nové evidence, váže její uchování na účel, přístupová pravidla a dobu uchování a pro redakční práci omezuje rozsah údajů. To odpovídá zásadám účelového omezení, minimalizace údajů, omezení doby uložení a důvěrnosti. Veřejná verze navíc používá rozhodující test: osobu nesmí být možné rozumně určit přímo, nepřímo ani propojením s dalšími údaji. To odpovídá aktuálnímu výkladu EDPB.

Slovo „odosobněná“ je zde vhodnější než právně silné tvrzení „anonymní“. Interní redakční záznam s odkazem na původní komunikaci může být pro e-shop dál osobním údajem, protože jej lze zpětně propojit; navržená pasáž ale netvrdí opak a zachází s ním jako s řízeným záznamem. Zdroje: [EDPB: Understanding anonymous data, 8. 7. 2026](https://www.edpb.europa.eu/news/edpb-sheds-light-on-anonymisation-and-web-scraping-for-generative-ai-and-adopts-final-version_en) a [European Commission: Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en).
