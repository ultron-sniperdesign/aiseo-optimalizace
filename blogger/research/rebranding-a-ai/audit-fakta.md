# Audit faktů C2 — Rebranding a AI

**Datum ověření:** 17. 9. 2026  
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek má správně postavený základ: automatický výběr názvu webu v Googlu, neurčitá doba přechodu, nutnost trvalých přesměrování, riziko měkké chyby 404, doporučení držet přesměrování alespoň rok i cena CTA odpovídají dostupným zdrojům. Před publikací je ale nutné doplnit podmínky cizích platforem a opravit několik příliš širokých formulací.

## Nálezy

### 1. `alternateName` nelze popsat stejně pro `WebSite` a `Organization`

**Citovaná pasáž:** „Starý název ponechte jako `alternateName` jen tehdy, když je stále veřejně používaný a pomáhá rozpoznat tutéž firmu.“ Dále: „`alternateName` používejte pro skutečně užívanou alternativu, zkratku nebo starší jméno, které pomáhá identifikaci.“

**Problém:** Text slučuje dvě různá použití. U `Organization` Google popisuje `alternateName` jako jiný běžný název organizace. U `WebSite` je však `alternateName` náhradní kandidát na **zobrazený název webu**, který Google může zvolit, když nepoužije preferované `name`. Vložením staré značky do `WebSite.alternateName` tedy web Googlu výslovně nabízí starý název k dalšímu zobrazování. To může odporovat cíli rebrandingu. Podmínka „pomáhá identifikaci“ sama nestačí.

**Důkaz:** Google u `WebSite` říká, že `alternateName` umožňuje systému zvážit jiné možnosti, pokud preferovaný název nevybere; náhradní názvy se mají řadit podle preference: <https://developers.google.com/search/docs/appearance/site-names#alternative-names>. U `Organization` je význam užší: „another common name that your organization goes by“: <https://developers.google.com/search/docs/appearance/structured-data/organization#structured-data-type-definitions>. Obecná definice Schema.org je pouze „alias for the item“ a sama nedokládá, že historický název je vhodný pro každý účel: <https://schema.org/alternateName>.

**Oprava:** Rozdělit doporučení podle typu: „U `Organization` lze starý název uvést jako `alternateName`, pokud pod ním organizace stále běžně vystupuje. U `WebSite` je `alternateName` náhradní návrh názvu webu, který může Google zobrazit; starou značku sem dávejte jen tehdy, pokud ji stále chcete nabízet jako název webu. Jinak použijte variantu nového názvu nebo jeho běžnou zkratku.“

**Závažnost:** **zásadní**

### 2. U názvu webu chybějí technické podmínky Googlu

**Citovaná pasáž:** „Google doporučuje držet název na homepage konzistentně a u `WebSite` umožňuje volitelné `alternateName`. Po změně může nové projití a zpracování trvat několik dní až několik týdnů.“ Dále krok: „Změňte … relevantní bloky `WebSite` či `Organization`.“

**Problém:** Tvrzení o zpracování a implementaci neuvádí podmínky, za kterých Google preferenci názvu vůbec může použít. `WebSite` musí být na kořenové homepage domény nebo subdomény, homepage musí být pro Google procházetelná, duplicitní varianty homepage mají nést stejné značení a Google podporuje jen jeden název na doménu či subdoménu; názvy pro podadresáře nepodporuje. Bez těchto podmínek může čtenář správně změnit hodnotu, ale na nepodporovaném nebo nepřístupném místě.

**Důkaz:** Technické podmínky jsou uvedeny přímo v dokumentaci Google: jeden název na doménu/subdoménu, značení na kořenové homepage, procházetelná homepage a stejné značení na duplicitních homepage: <https://developers.google.com/search/docs/appearance/site-names#technical-guidelines>. Stejná stránka váže interval několika dnů až týdnů na opětovné projití a zpracování a dovoluje požádat o nové projití přes URL Inspection: <https://developers.google.com/search/docs/appearance/site-names#troubleshooting-site-names>.

**Oprava:** Za první doporučení k `WebSite` přidat: „Značení patří na procházetelnou kořenovou homepage domény nebo subdomény. Na všech duplicitních variantách homepage držte stejné hodnoty. Google podporuje jeden název na doménu či subdoménu, nikoli samostatný název podadresáře.“ Interval dnů až týdnů formulovat jako dobu po zveřejnění změny a opětovném projití homepage, nikoli jako očekávaný termín zobrazení.

**Závažnost:** **zásadní**

### 3. Podmínky přejmenování Firemního profilu jsou neúplné a důsledek je podaný příliš měkce

**Citovaná pasáž:** „Google dovoluje menší změnu názvu při zachování podstaty firmy a kategorie, ale může vyžadovat nové ověření. Pokud změna nesplní podmínky rebrandingu profilu, Google ji může považovat za novou firmu.“ V těle: „Menší změna může zůstat na stávajícím profilu … Zásadní změnu, která nesplní jeho kritéria, může považovat za novou firmu.“

**Problém:** „Zachování podstaty firmy“ není kritérium, které Google publikuje, a vynechává dvě konkrétní podmínky: beze změny musí zůstat vlastní jména a služby popsané v názvu; beze změny musí zůstat také kategorie firmy. Pokud změna podmínky nesplní, dokumentace nepíše jen „může“: považuje ji za novou firmu a nařizuje označit původní profil jako zavřený a vytvořit nový. Samostatnou výjimku Google uvádí u firmy s více pobočkami, když se mění název firmy.

**Důkaz:** Přesná definice způsobilého rebrandingu a následku nezpůsobilé změny je v pravidlech Firemního profilu: <https://support.google.com/business/answer/3038177?hl=en#rebranding>. Možné nové ověření po změně názvu potvrzuje návod k editaci profilu: <https://support.google.com/business/answer/3039617?hl=en#business-name>.

**Oprava:** Nahradit obě formulace přesným pravidlem: „Stávající profil lze přejmenovat jako rebranding při menší změně, pokud zůstanou beze změny vlastní jména a služby popsané v názvu i kategorie firmy; zvláštní způsobilost může platit také pro přejmenování firmy s více pobočkami. Google může vyžádat nové ověření. Pokud změna tato kritéria nesplní, Google ji považuje za novou firmu: původní profil se má označit jako zavřený a pro nový název vytvořit nový profil.“

**Závažnost:** **zásadní**

### 4. Ne každá stará URL má dostat nový protějšek a přesměrování

**Citovaná pasáž:** Frontmatter: „při změně domény navíc správně přesměrujte každou starou URL.“ Nadpis: „každá URL potřebuje protějšek“. Tělo: „Google doporučuje vytvořit mapu starých a nových URL, nastavit trvalé serverové přesměrování na odpovídající stránky…“

**Problém:** Absolutní formulace je chybná pro zrušený obsah, který se na nový web nepřenáší a nemá odpovídající náhradu. Google pro takové staré URL doporučuje správnou odpověď HTTP `404` nebo `410`. Přesměrování má dostat stará URL s relevantním novým cílem; sloučený obsah může vést na odpovídající konsolidovanou stránku.

**Důkaz:** Google výslovně požaduje `404` nebo `410` pro smazaný či sloučený obsah, který se na nový web nepřesouvá: <https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#general-best-practices>. U nerelevantních hromadných přesměrování varuje před měkkou chybou 404 a připouští přesměrování více starých URL na jednu skutečně konsolidovanou stránku: <https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#start-the-site-move>.

**Oprava:** Ve frontmatteru i nadpisu změnit absolutní tvrzení například na: „Každé staré URL určete správný osud.“ V těle doplnit: „URL s odpovídajícím nebo sloučeným obsahem přesměrujte trvale na relevantní nový cíl. Obsah bez náhrady nevoďte na homepage; vraťte `404` nebo `410`.“

**Závažnost:** **zásadní**

### 5. Nástroj Změna adresy nemůže použít každý přesun domény bez dalších podmínek

**Citovaná pasáž:** „U změny domény použijte také nástroj **Změna adresy** v Google Search Console…“

**Problém:** Doporučení vynechává podmínky nástroje. Používá se až po přesunu a zavedení přesměrování; uživatel musí být pod stejným účtem vlastníkem staré i nové služby Search Console. Nástroj pracuje jen s vlastnostmi na úrovni domény či subdomény, ne s přesunem cest, HTTP→HTTPS ani www↔non-www. Google navíc vyžaduje samostatné požadavky pro ověřené varianty staré domény včetně subdomén a www/non-www. Bez těchto podmínek může rada skončit neproveditelným nebo neúplným přesunem.

**Důkaz:** Rozsah, pořadí a požadavky nástroje popisuje přímo Google: <https://support.google.com/webmasters/answer/9370220?hl=en>. Souhrnný migrační návod potvrzuje, že nástroj je jen pro přesun domény nebo subdomény a že se mají podat požadavky pro všechny ověřené varianty staré domény: <https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#start-the-site-move>.

**Oprava:** Rozšířit větu: „Po zprovoznění přesměrování použijte při přesunu domény nebo subdomény nástroj Změna adresy. Pod stejným účtem musíte vlastnit starou i novou službu Search Console a změnu podat pro všechny ověřené varianty staré domény. Nástroj nepoužívejte pro změnu cest, HTTP→HTTPS ani www↔non-www.“

**Závažnost:** **zásadní**

### 6. Zobrazený odkaz u AI odpovědi není vždy důkazem zdroje konkrétního tvrzení

**Citovaná pasáž:** „AI nástroj může odpovědět ze starších naučených znalostí, použít aktuální webové vyhledávání nebo obě vrstvy zkombinovat. Proto nejdřív zkontrolujte, zda odpověď uvádí zdroje. Pokud cituje stránku se starým názvem, máte konkrétní místo k opravě.“

**Problém:** Podklad v rešerši dokládá tento režim pro ChatGPT, článek jej ale zobecňuje na neurčený „AI nástroj“. Platformy odkazují na zdroje různě. Google u Gemini výslovně uvádí, že odkazy mohou být jen související s částmi odpovědi; u funkce kontroly odpovědi nalezený odkaz nemusí být zdrojem, který Gemini při generování použil. Samotný odkaz na stránku se starým názvem proto není důkaz příčiny odpovědi ani automaticky místo, které je nutné opravit.

**Důkaz:** OpenAI rozlišuje ChatGPT bez vyhledávání, který vychází z naučených znalostí, a ChatGPT se Search/Deep Research, který může přistupovat k aktuálním webovým zdrojům a citovat je: <https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth>. Google u Gemini uvádí, že zdroje a související odkazy nejsou u každé odpovědi a že odkaz nalezený funkcí „double-check“ nemusí být zdrojem použitým při generování: <https://support.google.com/gemini/answer/14143489?hl=en>.

**Oprava:** Zúžit první tvrzení na doloženou službu a změkčit závěr: „ChatGPT bez vyhledávání odpovídá z toho, co se model naučil při trénování; se Search nebo Deep Research může použít aktuální webové zdroje a uvést citace. U jiných služeb se význam odkazů liší. Stránka se starým názvem je kandidát k prověření: nejdřív ověřte, zda skutečně obsahuje chybný či zastaralý údaj. Samotné zobrazení odkazu nedokazuje, že způsobil konkrétní tvrzení.“

**Závažnost:** **zásadní**

## Ověřeno bez nálezu

- Google vytváří název webu automaticky, bere v úvahu obsah homepage a odkazy či zmínky na webu; `WebSite` je nejdůležitější způsob vyjádření preference, nikoli záruka. Zdroj: <https://developers.google.com/search/docs/appearance/site-names>.
- Několik dnů až několik týdnů pro opětovné projití a zpracování změny názvu webu odpovídá dokumentaci Googlu; článek správně neaplikuje tento interval na jiné platformy. Zdroj: <https://developers.google.com/search/docs/appearance/site-names#troubleshooting-site-names>.
- `Organization` na homepage může Googlu pomoci rozlišit organizaci; Google u něj nemá povinné vlastnosti a doporučuje relevantní údaje. Zdroj: <https://developers.google.com/search/docs/appearance/structured-data/organization>.
- Změna názvu ověřeného Firemního profilu může vyvolat nové ověření. Zdroj: <https://support.google.com/business/answer/3039617?hl=en#business-name>.
- Mapa URL, trvalé serverové přesměrování (typicky 301/308), nové interní odkazy, nové kanonické adresy a nová sitemap jsou správná doporučení pro přesun domény. Zdroj: <https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes>.
- Hromadné přesměrování starých URL na nerelevantní homepage může Google vyhodnotit jako měkkou chybu 404. Zdroj: <https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#start-the-site-move>.
- Doporučení držet přesměrování obecně alespoň rok a pro uživatele případně déle odpovídá migrační dokumentaci Google. Zdroj: <https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#start-the-site-move>.
- U středně velkého webu mohou nové URL nahrazovat staré několik týdnů nebo déle a viditelnost může dočasně kolísat. Zdroj: <https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#expect-temporary-fluctuation>.
- Interní odkaz na článek o opravě chybné informace je funkční: <https://aiseo-optimalizace.cz/blog/chybna-informace-o-firme-v-ai/>.
- CTA vede na funkční stránku produktu. Cena 1 490 Kč a uváděné šablony pro homepage, produkt, článek a kontakt jsou na ní potvrzené: <https://aiseo-optimalizace.cz/pack/>.

## Aktivně hledaný protidůkaz

- Proti absolutnímu tvrzení „každá URL potřebuje protějšek“ stojí přímý pokyn Googlu vracet `404`/`410` u obsahu bez náhrady.
- Proti obecnému výkladu citací v AI odpovědích stojí dokumentace Gemini: zobrazený odkaz může být pouze související a odkaz z kontroly odpovědi nemusí být použitým zdrojem.
- Proti obecnému „menší přejmenování zachová profil“ stojí přesná podmínka Googlu, že se nesmějí změnit vlastní jména a služby popsané v názvu ani kategorie firmy.

## C5b — kontrola zapracovaných oprav

**Výsledek:** **VŠECH ŠEST OPRAV OBSTÁLO.** Původní zásadní nálezy jsou v kontrolovaných pasážích odstraněné; další kolo oprav z věcného hlediska není potřeba.

1. **`alternateName` — obstálo.** FAQ i tělo nyní správně rozlišují `Organization`, kde může jít o jiný běžně používaný název organizace, a `WebSite`, kde jde o náhradní návrh názvu, který může Google zobrazit. Text zároveň správně upozorňuje na důsledek vložení staré značky do `WebSite.alternateName`.
2. **Technické podmínky názvu webu — obstálo.** Odstavec za prvním SourceCardem uvádí kořenovou a procházetelnou homepage, shodu na duplicitních variantách, jeden název pro doménu či subdoménu a nepodporovaný název podadresáře. To odpovídá technickým podmínkám Googlu.
3. **Firemní profil na Googlu — obstálo.** FAQ i hlavní text uvádějí zachování vlastních názvů a služeb popsaných v názvu i kategorie firmy, možnost nového ověření, zvláštní případ více poboček a správný následek nezpůsobilé změny: zavření původního profilu a vytvoření nového.
4. **Přesměrování oproti `404`/`410` — obstálo.** Krátká odpověď, krok návodu, nadpis i migrační odstavec už rozlišují URL s relevantní náhradou od obsahu bez náhrady. Sloučený obsah směřuje na relevantní konsolidovaný cíl; obsah bez náhrady vrací `404` nebo `410`.
5. **Nástroj Změna adresy — obstálo.** Text jej správně řadí až po zprovoznění přesměrování, požaduje vlastnictví staré i nové služby pod stejným účtem a podání pro ověřené varianty staré domény. Správně vylučuje změny cest, HTTP→HTTPS a www↔non-www.
6. **AI odpovědi a odkazy — obstálo.** Text je zúžen na doložené chování ChatGPT bez vyhledávání a se Search/Deep Research. U jiných služeb výslovně připouští odlišný význam odkazů a stránku se starým názvem označuje pouze za kandidáta k prověření, nikoli za prokázanou příčinu tvrzení.
