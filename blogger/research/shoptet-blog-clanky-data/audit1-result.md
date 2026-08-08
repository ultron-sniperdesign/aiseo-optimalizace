1. **[ZÁVAŽNOST střední] Frontmatter `answer` / FAQ „Má článek na Shoptetu pole pro autora?“ / tělo „Autor je vždycky e-shop“ → tvrzení je silnější, než data unesou**
   → Data říkají, že ve vzorku `meta name=author` obsahuje vždy název e-shopu a že `itemprop=author` je jen u 7/30. Neunesou absolutní tvrzení „autor je vždy uvedený e-shop“ bez upřesnění, že jde o zjištění z měření a konkrétně o `meta name=author`.
   → **Navržené znění:**  
   „Ve všech třiceti měřených článcích je v `meta name="author"` uveden název e-shopu, nikoli konkrétní člověk. `itemprop="author"` se objevil jen u 7 z 30 článků.“

2. **[ZÁVAŽNOST střední] Tělo, sekce „Hlavní nález: všechno, nebo nic“ → „Buď má článek strukturovaná data, datum vydání, datum aktualizace i canonical — nebo nemá z toho vůbec nic.“**
   → To je nepřesné vůči datům v části A. Jeden článek má typ `Article` a 18 nemá žádný z typů `NewsArticle/Article/BlogPosting`. Korelace „11 vs 19“ je vztažená jen k trojici **NewsArticle + canonical + datePublished/dateModified**, ne ke všem možným strukturovaným datům obecně.
   → **Navržené znění:**  
   „Ve vzorku se 11 článků seskupilo do jedné větve: mají `NewsArticle`, `datePublished`, `dateModified` a `rel=canonical`. Zbývajících 19 nemá tuto kombinaci ani její část; smíšený případ se v tomto měření neobjevil. Mimo to se u jednoho článku objevil typ `Article`.“

3. **[ZÁVAŽNOST kritická] Frontmatter `description` a `answer` → rozpor s daty o strukturovaných datech**
   → Obě formulace říkají, že 11 článků „má strukturovaná data, datum i canonical“ a 19 „nemá nic z toho“. Jenže data ukazují navíc `Article 1 / 30`. Tedy nejméně jeden z těch 19 má nějaká strukturovaná data, jen ne `NewsArticle`.
   → **Navržené znění:**  
   `description:` „Měření 30 článků na Shoptetu: 11 má kombinaci NewsArticle, datum vydání i aktualizace a canonical. U zbývajících 19 se tato kombinace neobjevila a smíšený případ v tomto vzorku nebyl ani jeden.“  
   `answer:` „Změřil jsem blogové články na e-shopech běžících na Shoptetu. Z třiceti měřených článků má jedenáct kombinaci `NewsArticle`, data vydání i aktualizace a `rel=canonical`. U zbývajících devatenácti se tato kombinace neobjevila a smíšený případ ve vzorku nebyl. Ve všech třiceti článcích bylo v `meta name="author"` jméno e-shopu, nikoli konkrétní osoby.“

4. **[ZÁVAŽNOST střední] Frontmatter `stats[0]` → nepřesný label**
   → „měřených článků, které mají strukturovaná data, datum i canonical“ je příliš široké. Podle dat jde o kombinaci `NewsArticle + canonical + datePublished/dateModified`, nikoli obecně „mají strukturovaná data“.
   → **Navržené znění:**  
   `label: "měřených článků s kombinací NewsArticle, data vydání i aktualizace a canonical"`

5. **[ZÁVAŽNOST střední] FAQ „Proč mají články NewsArticle a ne BlogPosting?“ → „NewsArticle je typ pro zpravodajství“ + implikace nepřesného zařazení**
   → Hodnoticí část je už interpretace nad rámec měření. Samotná data jen ukazují, že ve vzorku je `NewsArticle 11/30`, `BlogPosting 0/30`. Pokud to chcete ponechat, mělo by být jasně oddělené jako interpretační poznámka, ne jako závěr z naměřených dat.
   → **Navržené znění:**  
   „Ve vzorku se tam, kde strukturovaná data byla, objevil typ `NewsArticle`; `BlogPosting` jsem nenašel ani jednou. Jestli je to pro konkrétní obsah nejvýstižnější typ, tohle měření samo neřeší.“

6. **[ZÁVAŽNOST drobná] Tělo, „Cestou jsem narazil na cizí text, podle kterého mají blogové články na Shoptetu automaticky schema… Měření to nepotvrdilo — ukázalo se to jako pravda pro necelou třetinu.“**
   → „Pravda pro necelou třetinu“ je moc kategorické, protože ve vzorku je i 1 článek s typem `Article`. Tvrzení o „schema včetně data publikace, autora, publishera i obrázku“ jste ale ve vlastních datech plně nerozpadl na všechny jmenované položky; měřil jste hlavně typy a data, ne explicitně publisher/obrázek.
   → **Navržené znění:**  
   „Měření to v této podobě nepotvrdilo. Ve vzorku mělo 11 z 30 článků kombinaci `NewsArticle`, obou dat a canonical; jeden další nesl typ `Article`.“

7. **[ZÁVAŽNOST střední] FAQ „Jsou data v článku ve správném formátu?“ → číselný rozpor**
   → Text říká „Zbylých osm nese český zápis jako 22.3.2026“, ale seznam neISO hodnot v části A má **6 položek**, ne 8. Součet 23 − 15 = 8 sice sedí, ale předložený výčet neISO hodnot tomu neodpovídá. Je potřeba buď doplnit chybějící dvě hodnoty do podkladů, nebo text zmírnit, aby nestál na demonstrativním výčtu.
   → **Navržené znění:**  
   „… z 23 článků, které atribut `datetime` mají, začíná strojově čitelným datem jen 15. U zbývajících osmi jsem našel nevyhovující hodnoty, typicky český zápis typu `22.3.2026`.“

8. **[ZÁVAŽNOST drobná] Tělo, sekce „Datum: v datech dobře, v HTML někdy špatně“ → „Atribut datetime má nést strojově čitelné datum.“**
   → Formulace je zjednodušující. `datetime` nemusí nutně nést jen datum, může nést i čas. Není to věcná chyba jádra argumentu, ale je lepší být přesnější.
   → **Navržené znění:**  
   „Atribut `datetime` má nést strojově čitelnou hodnotu data nebo data a času.“

9. **[ZÁVAŽNOST střední] FAQ „Co jsou zbytky atributů z chatového rozhraní?“ / tělo „Tyhle atributy vznikají tak, že…“ → příliš jistý výklad mechanismu**
   → Část A dokládá přítomnost atributů `data-start`, `data-end`, `data-message-author-role`, `data-message-id`. To silně ukazuje na vložení obsahu z chatového rozhraní, ale absolutní tvrzení „vznikají tak, že…“ je o chlup silnější než data. Férovější je mluvit o velmi pravděpodobném původu.
   → **Navržené znění:**  
   „Tyto atributy velmi pravděpodobně pocházejí z vložení obsahu z chatového rozhraní přes schránku do editoru i s doprovodným kódem.“

10. **[ZÁVAŽNOST drobná] Tělo, sekce o stopách z chatu → „Je to desetina měřených článků.“**
    → Matematicky správně, ale stylisticky to zní tvrději než základní údaj 3/30. U tak citlivé pasáže je lepší držet se přímo podílu.
    → **Navržené znění:**  
    „Ve vzorku šlo o 3 z 30 článků.“

11. **[ZÁVAŽNOST střední] Tělo, „To přesně odpovídá nápovědě“ → tvrzení o souladu s částí B je o něco silnější**
    → Nápověda jen říká, že dokumentace neuvádí pole pro autora. Neříká, že se proto do HTML nebo metadat propíše název obchodu. To druhé je zjištění z měření, ne „přesná shoda“ s nápovědou.
    → **Navržené znění:**  
    „To je s nápovědou v souladu: dokumentace pole pro autora neuvádí a ve vzorku se jako autor v `meta name="author"` vždy propsal název e-shopu.“

12. **[ZÁVAŽNOST drobná] Tělo, „Stejných 47 e-shopů jako v předchozích dílech.“ / závěr „Měřil jsem jeden den, 8. srpna 2026.“ → metodická pasáž je věcná, ale blok „A zase chyba v prvním průchodu“ je už lehce sebezraňující**
    → Přiznání chyby je v pořádku a užitečné. Formulace „A zase chyba…“ a navazující „obě chyby…“ už může působit spíš jako sebemrskačství než věcné metodické omezení.
    → **Navržené znění:**  
    Label boxu změnit na: **„Metodická oprava prvního průchodu“**  
    Úvod boxu: „V prvním průchodu skript chybně zaměnil výpis rubriky za článek, protože obě stránky sdílejí stejnou třídu v `<body>`. Odhalila to až kontrola hloubky URL. Měření jsem opravil a celé zopakoval; čísla níž jsou už z opraveného průchodu.“

13. **[ZÁVAŽNOST drobná] Frontmatter `faq` „Vidí návštěvník datum aktualizace?“ → odpověď uhýbá od otázky**
    → Otázka míří na viditelnost pro návštěvníka, ale odpověď popisuje hlavně `dateModified` ve strukturovaných datech. To není totéž.
    → **Navržené znění:**  
    „Tohle měření neověřovalo, jestli návštěvník někde vidí zvlášť datum aktualizace. Zjistil jsem jen, že ve strukturovaných datech je `dateModified` u 11 z 30 článků a u 5 z nich se liší od data vydání.“

14. **[ZÁVAŽNOST drobná] Tělo „Zbytek struktury je v pořádku“ → hodnoticí soud**
    → U `h1` dat platí, že 3 z 30 článků mají víc než jeden `h1`. Označit „zbytek struktury je v pořádku“ je trochu příliš uklidňující. Lepší je popsat bez hodnotícího nadpisu.
    → **Navržené znění:**  
    Nadpis změnit na: **„Další naměřené signály“**  
    První věta: „Přesně jeden `h1` má 27 z 30 článků, tři články mají `h1` víc. `meta robots` je `index,follow` u všech třiceti.“

## 3 nejdůležitější věci

1. **Opravit všude formulaci „11 má všechno, 19 nemá nic“**, protože data zároveň obsahují **1/30 s typem `Article`**. To je největší věcná nekonzistence mezi textem/frontmatterem a podklady.
2. **Zpřesnit tvrzení o autorovi**: data bezpečně unesou „ve všech 30 bylo v `meta name=author` jméno e-shopu“, ne bezpodmínečné „autor je vždycky e-shop“.
3. **Zjemnit pasáž o stopách z chatu a metodické chybě**: u chatu mluvit o velmi pravděpodobném původu místo jistého mechanismu; u metodické opravy ubrat tón „a zase chyba“, aby text zůstal věcný.