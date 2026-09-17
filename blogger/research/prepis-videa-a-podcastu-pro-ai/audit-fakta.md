# C2 — Nezávislý audit faktů

## VERDIKT: PUBLIKOVAT

Článek je věcně připraven k publikaci. **0 zásadních nálezů, 1 drobný nález [TIP], 0 BLOCKER, 0 WARNING.** Doporučené zpřesnění jedné věty níže zlepší přesnost interpretace citací; nemění nosnou tezi ani redakční postup.

- Posuzovaný soubor: `src/content/articles/prepis-videa-a-podcastu-pro-ai.mdx`, 175 řádků; přečten celý včetně frontmatteru.
- Datum kontroly: **17. září 2026**.
- Přečteny také `blogger/auditor-system.md`, přidělený `research.md` a kanonická produktová data `src/content/pages/pack.ts`. Žádné jiné podsložky `research` nebyly čteny.
- Audit zahrnoval vlastní hledání primárních zdrojů i protidůkazů. Rešerše článku nebyla považována za nezávislé ověření.
- Článek nebyl upraven. Tento report neposuzuje úspěšnost buildu ani vizuální vykreslení komponent.

## 1. Doložený drobný nález

### F1 — [TIP] Přesněji pojmenovat, co dokládá nalezený odkaz

**Citace, ř. 166:** „Jedna nalezená citace ukazuje, že služba stránku v dané odpovědi použila.“

**Problém:** V kontextu měření je přímo pozorovatelným výsledkem to, že služba URL uvedla jako zdroj. Slovo „použila“ se může číst silněji: jako ověření, že konkrétní tvrzení skutečně čerpá z obsahu citované stránky. Citace takové ověření sama neposkytuje. Nejde o tvrzení, že každá citace je chybná, ani o nález nepravdivé citace v tomto článku. Jde o malé metodické zpřesnění; navazující věty o neprokázané příčině citace jsou správné.

**Důkaz:** Microsoft vymezuje citace jako odkazy zobrazené mezi zdroji a výslovně omezuje interpretaci jejich role v odpovědi: [Introducing AI Performance in Bing Webmaster Tools Public Preview](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview). Nezávislá primární studie [Evaluating Verifiability in Generative Search Engines](https://arxiv.org/abs/2304.09848) od Liu, Zhang a Liang přímo zkoumá nesoulad citací s tvrzeními, k nimž jsou přiřazeny. Jde o měření z roku 2023: potvrzuje existenci problému, **neposkytuje aktuální chybovost služeb v září 2026**. Žádná historická procenta proto nenavrhuji do článku přidávat.

**Konkrétní oprava:** „Jedna nalezená citace ukazuje, že služba stránku v dané odpovědi uvedla jako zdroj. Ověřte také, zda odkaz skutečně podporuje tvrzení v odpovědi. Sama citace nedokazuje, že ji způsobil přepis.“ Poslední větu o jedné odpovědi bez odkazu lze zachovat.

**Závažnost:** drobný / TIP. Publikaci neblokuje.

## 2. Kontrola tvrzení, čísel a funkcí

| Místo / tvrzení | Výsledek nezávislého ověření | Primární důkaz a mez |
|---|---|---|
| Answer a úvod: přepis je textová podoba mluveného obsahu, podle potřeby s relevantními zvuky a obrazem | Správně. Zahrnuje základní i popisný přepis; nezaměňuje video s pouhým přepisem řeči. | [W3C Transcripts](https://www.w3.org/WAI/media/av/transcripts/) rozlišuje zvukové informace a popis důležitých vizuálních informací. |
| Přepis dovolí číst a hledat obsah bez procházení celé nahrávky | Správně jako vlastnost čitelného textu. Nejde o slib pozice ve vyhledávání. | [W3C Transcripts](https://www.w3.org/WAI/media/av/transcripts/) podporuje členění, odkazy, nadpisy a snadné nalezení přepisu. |
| Ř. 63: AI nelze obecně označit za neschopnou zpracovat video | Správně a aktuálně ověřeno. | [Gemini API: Video understanding](https://ai.google.dev/gemini-api/docs/video-understanding) dokumentuje práci se zvukovou i obrazovou složkou. Článek správně neodvozuje automatické načtení každého videa vyhledávací službou. |
| Ř. 68: důležitý obsah textově; pro Google AI funkce žádný zvláštní soubor ani speciální strukturovaná data | Přímá shoda s dokumentací. Omezeno na AI Overviews a AI Mode. | [Google AI features](https://developers.google.com/search/docs/appearance/ai-features), oddíl SEO best practices. Není to zákaz běžných relevantních strukturovaných dat. |
| Ř. 71, 95: nelze slíbit nárůst návštěvnosti/citací; pět kroků není algoritmická podmínka lepších pozic | Přiměřené omezení. Článek nemá nepodložené procento, časovou garanci ani případovou studii. | [Google AI features](https://developers.google.com/search/docs/appearance/ai-features) negarantuje procházení, indexaci ani zobrazení. |
| Tabulka: titulky mají časování, přepis je samostatně čitelný text, shrnutí vybírá hlavní body | Správná praktická distinkce. Definice tabulky je zjednodušená, ale okolní text důležité informace zachovává. | [W3C Captions/Subtitles](https://www.w3.org/WAI/media/av/captions/) potvrzuje synchronizaci titulků se zvukem. |
| Ř. 89: časový kód nemusí být na každém řádku přepisu | Správně. | [W3C Transcripts](https://www.w3.org/WAI/media/av/transcripts/) doporučuje časové značky podle užitečnosti, bez nutnosti podrobnosti titulků. |
| Ř. 91 a FAQ 3: výběr několika odpovědí označit jako výňatek | Věcně správné redakční doporučení, nikoli vydávaný požadavek Googlu. | Rozdíl mezi přepisem obsahu a redakčně vybraným shrnutím; [W3C Transcribing](https://www.w3.org/WAI/media/av/transcribing/) požaduje věrnost a označení vypuštění relevantního kontextu. |
| Kroky 1–2: konečná nahrávka, ověření textu poslechem, názvy, čísla, zápory | Správně. Starší střih nemusí odpovídat zveřejněnému záznamu; kontrola automatického přepisu je oprávněná. | [W3C Transcribing](https://www.w3.org/WAI/media/av/transcribing/) varuje před významovými chybami a doporučuje automatický přepis opravovat. |
| Kroky 3–4: identifikace mluvčích, obrazový kontext, oddělení doplnění, tematické členění | Správně. Nejde o potichu přepsanou citaci. | [W3C Transcripts](https://www.w3.org/WAI/media/av/transcripts/) dovoluje vysvětlení, pokud je rozpoznatelné jako přidané. |
| Ř. 105 a FAQ 1–2: YouTube podporuje automatické titulky pro nahraná česká videa, jejich vytvoření není jisté | Ověřeno v české i anglické nápovědě; formulace je přesná. | [YouTube CS](https://support.google.com/youtube/answer/6373554?hl=cs), [YouTube EN](https://support.google.com/youtube/answer/6373554?hl=en). Podpora češtiny není přenesena na živé vysílání; nápověda u live titulků uvádí pouze angličtinu. |
| Ř. 107: Beey umožňuje nahrát soubor a pracovat s přepisem v editoru | Přímá shoda s rychlým návodem výrobce. | [Beey: Rychlý start](https://www.beey.io/cs/docs/manual/rychly-start/). Text nepřebírá žádnou cenu, procento přesnosti ani příslib bezplatného úplného přepisu. |
| Ř. 110, 131 a FAQ 4: neopravovat potichu chybu mluvčího; lze vynechat nepodstatné výplně | Správně v uvedeném kontextu běžného webového obsahu. | [W3C Transcribing](https://www.w3.org/WAI/media/av/transcribing/) odlišuje věrný přepis a nepodstatné výplně. Požadavek striktně doslovného právního přepisu článek nezobecňuje. |
| Modelový příklad: ztráta „ne-“ obrátí pokyn | Logicky správný, výslovně modelový. Čas 03:20 není tvrzením o existující nahrávce. | W3C na výše odkazované stránce uvádí obdobné riziko chybějícího záporu. Článek nepředstírá vlastní experiment. |
| Ř. 147–149 a FAQ 5: přepis poblíž přehrávače, obvykle stejná stránka; samostatnou stránku propojit | Správně. Pořadí prvků je označené za doporučení. | [W3C Transcripts](https://www.w3.org/WAI/media/av/transcripts/), oddíl Where to Put Transcripts. |
| Ř. 155: HTML, nenačítat až po kliknutí, Google Search nekliká pro získání obsahu | Správně. Text zakazuje načítání závislé na kliknutí, nikoli každý sbalený blok již přítomný v HTML. | [Google: Fix lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) výslovně uvádí absenci uživatelských interakcí. |
| Ř. 155: kontrola vykresleného HTML v Kontrole URL | Správně. | Stejný [návod Googlu](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading), oddíl Test, tento postup přímo doporučuje. Dostupnost textu ve vykresleném HTML není zárukou indexace — článek ji tak neprezentuje. |
| Ř. 157: video ve výsledcích má další požadavky a samotný přepis je nedokazuje | Správně. | [Google: Video SEO](https://developers.google.com/search/docs/appearance/video). Indexovaná stránka sama nezaručuje indexované video. |
| FAQ 6: supporting link v AIO/AI Mode vyžaduje indexaci a způsobilost ke snippetům | Přímá shoda. | [Google AI features](https://developers.google.com/search/docs/appearance/ai-features), Technical requirements. Text správně obsahuje „mimo jiné“ a nezaručuje výběr. |
| Ř. 161–169: kontrola stránky odděleně od sledování citací; jedna citace neprokazuje příčinu | Metodicky přiměřené, bez tvrzené statistické průkaznosti. | [Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) rozlišuje výskyt od významu stránky a dalších metrik. Drobné zpřesnění první věty uvádí F1. |
| CTA: AI SEO Wireframe Pack za 1 490 Kč, vzor blogového článku, textové šablony, strukturovaná data | Název, cena i uvedená součást souhlasí s požadovaným kanonickým souborem. | `src/content/pages/pack.ts`: `productJsonLd.name`, `offers.price=1490`, `priceCurrency=CZK`, FAQ 1, pageTypes a deliverables; také [produktová stránka](https://aiseo-optimalizace.cz/pack/). Netvrdí existenci specializované šablony přepisů. |

## 3. Aktivně hledané protidůkazy

1. **„Přepis je nutný, protože AI neumí video“:** mimo zdroje rešerše dohledán [Google: How Search Works](https://developers.google.com/search/docs/fundamentals/how-search-works), který popisuje analýzu textu, obrázků i videí. Rovněž [novější průvodce optimalizací pro AI Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) zahrnuje obrazové a video zdroje. Článek tyto schopnosti nepopírá; jeho oddělení modelových schopností od konkrétního získání obsahu je správné.
2. **„Všechna česká videa mají automatické titulky“:** YouTube uvádí řadu důvodů, proč titulky nevzniknou, a odlišný režim živého vysílání. Obě potenciální chyby článek výslovně ošetřuje.
3. **„Přepis musí být vždy absolutně doslovný“:** W3C výslovně připouští u běžného webového obsahu nepodstatné výplně vypustit. Proto nebyla tato možnost nesprávně označena jako faktická chyba.
4. **„HTML je jediný indexovatelný formát“:** [Google: Indexable file types](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types) uvádí i další formáty. Článek však HTML pouze doporučuje; výlučnost mu nepřipisuje.
5. **„Každá citace potvrzuje správné použití zdroje“:** nezávislé primární měření ukazuje, proč je vhodné rozlišit zobrazený odkaz a věcnou oporu tvrzení. Výsledkem je pouze drobný TIP F1, nikoli paušální odmítnutí měření citací.
6. **„Pět kroků, strukturovaná data nebo přepis zajistí AI viditelnost“:** Google negarantuje zobrazení ani po splnění požadavků. Článek takový slib nemá; jeho omezení jsou opakovaná a konzistentní.

## 4. Metadata, FAQ, struktura a odkazy

### Kontroly naměřené přímo ze zdroje

| Prvek | Výsledek |
|---|---|
| `title` | **56 znaků**, vyhovuje 50–60; klíčová fráze na začátku. |
| `seoTitle` | **45 znaků**, vyhovuje samostatnému pravidlu do 60. Dolní mez se neuplatňuje. |
| `description` | **140 znaků**, vyhovuje 70–160. |
| `answer` | **50 slov** při dělení mezerami; začíná kladnou definicí a dává samostatný smysl. |
| Začátek těla | Opakuje úplnou odpověď, poté navazuje konkrétní situací vlastníka webu. |
| Kategorie a HowTo | `tutorial`; `howto` má 5 kroků odpovídajících viditelnému Stepperu. Schema a šablona blogu tento klíč podporují a skládají z něj `HowTo`/`HowToStep`. |
| H2 | **6**, všechny mají `span.hl` i `strong`. |
| FAQ | **6 reálných praktických otázek**, každá odpověď samostatná. Není jim přisuzována naměřená hledanost. |
| Aktualizace | `published` a `updated` 2026-09-17; dokumentace ukotvena na 17. září 2026. Žádné neukotvené „letos“. |
| Čísla v těle | Pět kroků odpovídá postupu; hodinový rozhovor a 03:20 jsou ilustrace; 1 490 Kč potvrzeno produktovými daty. Žádná skrytá výkonnostní procenta. |

### Odkazy

- Všech devět různých externích odkazů v článku bylo otevřeno a jejich deklarovaný účel ověřen: Gemini, Google AI features, W3C captions/transcripts/transcribing, YouTube, Beey, Google lazy loading a Google video.
- Tři interní blogové odkazy mají odpovídající lokální MDX se souhlasným slugem. `/pack/` má produktová data a živou stránku.
- Webový nástroj načetl živé stránky VideoObject, test viditelnosti a Pack. U `/blog/ai-seo-content/` vrátil interní bezpečnostní chybu načítání; **není to důkaz 404**. Lokální cílový soubor existuje. Nemohu proto tímto během potvrdit živý HTTP stav tohoto jediného odkazu.
- Cíl VideoObject obsahuje starší zobecnění o neschopnosti strojů rozumět videu. To je samostatný publikační dluh již identifikovaný v rešerši; nový článek jej nepřebírá a odkazuje tam úzce kvůli značení. Nezapočítávám jej jako vlastní chybu nového článku. K jeho opravě ani k opravě ostatních cílových článků jsem nezasahoval.

## 5. Meze auditu

Audit ověřuje věcnou oporu zveřejněných tvrzení a přiměřenost doporučení. Nezahrnuje experiment s přepisem konkrétní nahrávky, test dostupnosti účtu Beey, ověření platebního procesu, skutečné citace budoucí stránky ani měření kauzálního vlivu přepisu. Doporučení členění a redakčního pořadí nejsou prezentována jako povinnosti W3C nebo ranking faktory. Článek rovněž nevyvozuje právní závěry o povinné přístupnosti, takže nebyly doplňovány právní podmínky mimo jeho záměr.

**Konečný součet: zásadní 0, drobné 1 (TIP F1). Doporučení: publikovat; formulaci F1 lze ještě zpřesnit.**
