# Rešerše: Odkazování na zdroje v obsahu

Datum rešerše: 2026-09-22
Typ: nový článek, tutorial
Řádek plánu: `odkazovani na zdroje v obsahu` — „Odkazování na zdroje v obsahu — co z toho mají čtenáři i AI“

## Záměr článku

Praktický redakční postup pro majitele webu a autory: jak dohledat původní podklad tvrzení, co uvést u čísla nebo studie, kam vložit odkaz a jak popsat vlastní měření. Článek nemá suplovat akademické citační normy ani slibovat, že odchozí odkazy zajistí citaci v odpovědi AI.

Hlavní teze: **Zdroj není ozdoba na konci odstavce. Vymezuje, co smí věta pravdivě tvrdit.**

## Kolizní kontrola

Prohledány názvy, slugy, metadata a obsah všech článků. Nejbližší texty byly přečteny celé:

- `originalni-data-pro-ai` řeší tvorbu vlastních dat; obsahuje však nedoložená čísla a neaktuální produktové tvrzení. Do nového článku na něj neodkazovat, nález zapsán do `REFRESH_QUEUE.md`.
- `e-e-a-t-pro-ai` řeší důvěryhodnost jako širší rámec.
- `jak-cist-studie-o-ai-viditelnosti` učí hodnotit metodiku studií, jmenovatel a kauzalitu. Je vhodný jako navazující interní odkaz.
- `jak-ai-cituje-zdroje` popisuje výběr zdrojů AI službami. Nový článek se naopak soustředí na práci autora s odchozími zdroji.

Výsledek: téma je samostatné a má vzniknout jako nový článek.

## Keyword research

### Marketing Miner

Seedy: `odkazování na zdroje`, `citování zdrojů`, `jak citovat zdroje`, `primární zdroj`, `uvádění zdrojů`.

Deep dive (24 kreditů) potvrdil nízkou, převážně akademickou hledanost:

| Dotaz | Měsíční hledanost | Meziroční změna | Poznámka k záměru |
|---|---:|---:|---|
| jak citovat internetové zdroje | 60 | −40 % | hlavně školní a akademické citace |
| jak citovat elektronické zdroje | 50 | 0 % | akademický záměr |
| jak citovat online zdroje | 50 | +8 700 % | extrém z nízké základny; nelze převzít jako tržní trend |
| primární a sekundární zdroje | 50 | −38 % | směs informačního a energetického záměru |
| primární zdroje | 40 | −40 % | směs informací, historie a energetiky |
| primární zdroj | 30 | −40 % | obecný vzdělávací záměr |

Google Suggest doplňuje zejména `v textu`, `APA`, `pod čarou` a `harvardský systém`, což potvrzuje akademickou převahu. Článek proto necílí formální citační normu. Hledané formulace používá jen tam, kde odpovídají redakční práci na webu.

Google Trends měl u všech osmi dotazů za posledních 12 měsíců průměrný index 0 a žádné rostoucí související dotazy. Regionální hodnoty jsou při tomto objemu příliš řídké pro obsahové závěry. Česká Wikipedie zaznamenala za 12 měsíců 1 320 zobrazení hesla „Primární zdroj informace“ a 194 zobrazení hesla „Primární zdroje“; jde jen o orientační vzdělávací zájem.

Technická poznámka: první izolovaný pokus o Marketing Miner selhal na DNS. Opakování s povoleným přístupem k síti proběhlo úspěšně; datová mezera nezůstala.

### Širší kontrola témat

Širší rešerše (`AI vyhledávání`, `ChatGPT vyhledávání`, `Google AI Mode`, `SEO 2026`) našla pouze dva použitelné kandidáty: `google ai mode` (SV 630) a `ai vyhledávání` (SV 70). Oba jsou už pokryté publikovanými články a plánem. Aktualizace dokumentace Googlu z 22. 9. 2026 o textu v CSS `content` patří spíše do existujícího technického článku než do samostatného nového tématu. Do obsahového plánu proto tento run nový řádek nepřidává.

## Primární zdroje a co z nich lze tvrdit

### Google: helpful content

Zdroj: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), ověřeno 22. 9. 2026, stránka naposledy aktualizována 10. 12. 2025.

- Google mezi otázkami k důvěryhodnosti výslovně uvádí jasné zdrojování, doklady odbornosti a informace o autorovi.
- U produktových recenzí Google jako příklad uvádí počet testovaných produktů, výsledky a způsob testování. Obecně doporučuje vysvětlit, jak obsah vznikl, pokud je postup pro posouzení důležitý.
- Jde o sebehodnoticí vodítko pro užitečný obsah. Není to samostatný potvrzený hodnoticí faktor ani záruka pozice nebo citace.

### Google: odkazy

Zdroj: [Link best practices for Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), ověřeno 22. 9. 2026, stránka naposledy aktualizována 10. 12. 2025.

- Google doporučuje běžný odkaz `<a href>` a popisný, stručný text odkazu.
- Text kolem odkazu dává kontext; řada odkazů nalepených vedle sebe čtenáři nepomáhá.
- Google výslovně píše, že odkazování na jiné weby může pomoci podpořit důvěryhodnost, například při citování zdrojů.
- Z toho nelze vyvodit, že počet odchozích odkazů je přímý hodnoticí faktor nebo že citování cizích zdrojů zajistí citaci vlastního článku AI službou.

Zdroj: [Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links), ověřeno 22. 9. 2026.

- Běžný redakční zdroj nepotřebuje zvláštní `rel` hodnotu.
- Placený odkaz má být označen `sponsored`, uživatelský obsah `ugc`; `nofollow` se používá v příslušných situacích, ne plošně na všechny externí zdroje.

### Crossref a DOI

Zdroje:

- [Crossref: References](https://www.crossref.org/documentation/principles-practices/best-practices/references/)
- [Crossref: How do I find and create reference links?](https://www.crossref.org/documentation/reference-linking/how-do-i-create-reference-links/), aktualizováno 15. 8. 2025
- [Crossref: Constructing your DOIs](https://www.crossref.org/documentation/member-setup/constructing-your-dois)

Použitelné tvrzení: u odborné práce je vhodné odkazovat přes DOI, pokud existuje. DOI poskytuje trvalý identifikátor konkrétní práce; funkční přesměrování po změně umístění závisí na tom, že vydavatel aktualizuje cílovou adresu a metadata. Crossref zároveň upozorňuje, že DOI samo o sobě neříká nic o kvalitě nebo správnosti práce.

## Doporučený redakční postup

1. Najít tvrzení, ne pouze stránku, která ho opakuje.
2. Dostat se k původnímu dokumentu, datové sadě, metodice nebo oficiální dokumentaci.
3. Ověřit přesnou větu, tabulku, období, vzorek a jmenovatel.
4. Zúžit vlastní formulaci na rozsah, který zdroj skutečně dokládá.
5. Přidat přímý odkaz s popisným textem a u proměnlivého podkladu datum ověření.
6. U vlastního měření uvést období, vzorek, postup a omezení.

## Tabulka podmínek pro platformní tvrzení

| Tvrzení | Platforma / povrch | Země / jazyk | Účet / tarif | Zařízení | Datum ověření | Co je doloženo | Co doloženo není |
|---|---|---|---|---|---|---|---|
| Jasné zdrojování patří mezi otázky, podle nichž má autor posoudit důvěryhodnost obsahu | Google Search Central | globální dokumentace, anglicky | bez účtu | web | 2026-09-22 | formulace v sebehodnoticím návodu | samostatný hodnoticí faktor, vyšší pozice, citace AI |
| Externí odkazy mohou čtenáři a Googlu dát kontext a podpořit důvěryhodnost při citování zdrojů | Google Search Central | globální dokumentace, anglicky | bez účtu | web | 2026-09-22 | doporučení v pravidlech pro odkazy | ideální počet odkazů, automatický růst pozic |
| Běžný odkaz má být `<a href>` s popisným textem | Google Search Central | globální dokumentace, anglicky | bez účtu | web | 2026-09-22 | technický a obsahový formát odkazu | výhoda konkrétního redakčního systému |

## FAQ: původ otázek

- „Musím uvádět zdroj u každého tvrzení?“ — praktická námitka redaktorů; odpověď rozlišuje ověřitelný fakt od obecného doporučení.
- „Je lepší odkázat na původní studii, nebo na článek, který ji vysvětluje?“ — přímo navazuje na téma primárního a sekundárního zdroje.
- „Pomůže citování zdrojů tomu, aby článek citovala AI?“ — hlavní očekávatelný dotaz publika tohoto webu; odpověď musí zabránit přehnanému slibu.
- „Jak citovat vlastní data z GA4 nebo Search Console?“ — praktická varianta vlastního měření; čísla se musí segmentovat podle kanálu.
- „Co dělat, když je původní studie za přihlášením?“ — častý okrajový případ; autor má uvést, co skutečně četl.
- „Mám dávat externím odkazům nofollow?“ — vychází z oficiální dokumentace Googlu o kvalifikaci odkazů.

## Interní odkazy

- `/blog/jak-cist-studie-o-ai-viditelnosti/` — navazující kontrola metodiky a kauzality.
- `/blog/jak-ai-cituje-zdroje/` — rozdíly mezi výběrem zdrojů AI službami; odlišný záměr článku.
- `/pack/` — závěrečné CTA pro tutorial; aktuální název a cena ověřeny v `src/content/pages/pack.ts`.

## Meze rešerše

- Hledanost je nízká a převážně akademická; nelze ji prezentovat jako silnou poptávku majitelů webů.
- Veřejná dokumentace nedokládá kauzální pravidlo „odchozí citace zvyšují AI citovanost“. Článek takové tvrzení nepoužije.
- Článek neřeší konkrétní citační normy ani podrobný právní výklad citační licence.
