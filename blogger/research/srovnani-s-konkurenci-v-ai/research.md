# Research — srovnání s konkurencí v AI

Datum: 2026-09-17

## Výběr a překryv

První volný řádek plánu, produktový feed a GTIN, byl přeskočen: již existuje nový článek `produktovy-feed-gtin.mdx`, takže by vznikla duplicita. Vybrán další způsobilý nový článek `srovnani s konkurenci v ai odpovedich` (analysis). Metadatový sken pokryl všechny články; H2 byly filtrovány na srovnání, konkurenci a značku. Celé přečteny blízké články `produktovy-feed-gtin`, `srovnavaci-clanky-pro-ai`, `ai-brand-mentions` a `volatilita-ai-odpovedi`.

Plán tvrdil, že srovnání často vzniká z cizích zdrojů a vlastní web má menší vliv. Zdroje tuto obecnou hierarchii **nepotvrdily**. Dokumentace ChatGPT uvádí u nákupních výsledků data první i třetí strany a u pořadí obchodníků data od obchodníků i třetích stran. Článek proto rozlišuje výběr produktu, pořadí obchodníků a běžné textové doporučení; netvrdí univerzální převahu cizích zdrojů.

Navazující články `srovnavaci-clanky-pro-ai` a `ai-brand-mentions` obsahují nedoložené kauzální formulace. Odkazy nebyly použity a nález byl předán do `REFRESH_QUEUE.md`. Článek odkazuje jen na sekci `/geo/` a produkt `/audit/`.

## Keyword research

Marketing Miner suggestions: seed `analýza konkurence` dal čtyři relevantní návrhy, seed `ai viditelnost` žádný. Cena 80 kreditů. První pokus o samostatnou hledanost skončil jednou chybou DNS a nevrátil data; po opakování se sítí uspěl za 27 kreditů. Modelované odhady měsíční hledanosti pro ČR: `analýza konkurence` 230, `ai seo` 130, `analýza konkurence seo` 10, `nejlepší e shop` 10. Přesná odborná spojení data neměla; to není nulová poptávka.

Google Trends pro ČR: `analýza konkurence` průměrný index posledních 12 měsíců 7,5; `ai seo` 11,5; `analýza konkurence seo` 0; `nejlepší e shop` 1,9. Relevantní rising queries k vybranému tématu nebyly. U `ai seo` vyšly `ai for seo` a `surfer seo`, které řeší jiné téma, proto nebyly použity. Druhý průchod přesnými dotazy (`srovnání s konkurencí v ai`, `ai viditelnost`, `chatgpt doporučení`, `chatgpt srovnání`) nepřinesl rising queries. Google Suggest dal jen `ai viditelnost` a produktové srovnání ChatGPT/Gemini; pro FAQ nebyly použitelné.

**Nástrojové selhání:** Marketing Miner search volume · 1 první pokus · DNS `NameResolutionError` · z tohoto pokusu nebylo možné použít žádné odhady; druhý pokus uspěl. Trends i Suggest proběhly bez chyby.

Cílové výrazy: srovnání s konkurencí v AI; analýza konkurence v AI odpovědích; ChatGPT doporučuje konkurenci; AI doporučení značek; ověření srovnání v ChatGPT; AI viditelnost.

## Primární zdroje a závěry

- OpenAI, Shopping with ChatGPT Search — https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search
  - Product results nejsou reklamy; reklamy jsou oddělené. Výběr zvažuje dotaz, Memory, Custom instructions, produktová data a další obsah. Hodnocení a štítky mohou být neověřené. Pořadí obchodníků je samostatná fáze s cenou, dostupností, kvalitou a rolí výrobce/hlavního prodejce.
- OpenAI, Using shopping research in ChatGPT — https://help.openai.com/en/articles/12911370-using-
  - Interaktivní nákupní rešerše pracuje s potřebami, veřejnými informacemi i daty obchodníků; u ceny, dostupnosti a podmínek doporučuje ověřit údaje u obchodníka. Některé weby automatizovaný přístup blokují.
- OpenAI, ChatGPT Search — https://help.openai.com/en/articles/9237897-chatgpt-search
  - Dotaz může být přepsán; paměť a přibližná lokalita mohou ovlivnit vyhledávání. Nový chat proto není dokumentovaný přepínač personalizace.
- Google Search Central, Optimizing for generative AI features — https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
  - AI funkce Googlu používají index a související dotazy. Způsobilost vyžaduje indexaci, možnost úryvku a zahrnutí webu v Search generative AI; zobrazení není zaručené. Stránky variant dotazů vytvořené primárně kvůli manipulaci porušují spam policy.
- Google Search Central, Write high quality reviews — https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews
  - Srovnání má doložit zkušenost, rozdíly, výhody a nevýhody a rozhodovací faktory; nejde o garanci výskytu v AI.
- Google Gemini Apps Help — https://support.google.com/gemini/answer/14143489?hl=en
  - Rozhraní může ukázat zdroje a související obsah; ne každá odpověď odkazy má. Odkaz je potřeba kontrolovat proti konkrétnímu tvrzení.
- Seznam, Sponzorované výsledky pod Asistentem — https://blog.seznam.cz/2026/06/novinka-v-seznam-asistentovi-pod-odpovedmi-se-zobrazuji-inzeraty-z-skliku/
  - Od 25. 6. 2026 se pod odpovědí mohou ukázat nejvýše dva Sklik inzeráty, jasně označené jako Sponzorované výsledky. Nejde o důkaz organického doporučení v textu.
- Malthouse et al., Evaluating Brand Retrieval and Ranking in Large Language Model Recommendations — https://arxiv.org/abs/2609.16304
  - Preprint podán 14. 9. 2026. Šest modelů, pět kategorií, 1 200 category-only seznamů; samostatná API volání bez vyhledávání. BRP měří četnost výskytu, MRR pořadí. Pozorované souvislosti s tržní viditelností nejsou kauzální. Detailní potřeby a diagnostické formulace mění výskyt značek, ale diagnostické dotazy nejsou běžné spotřebitelské dotazy. Nelze přenést čísla na česká nákupní rozhraní.

## Podmínky tvrzení o platformách

| Tvrzení | Podmínky | Konzistence | Výjimky | Primární zdroj |
|---|---|---|---|---|
| Nákupní výsledky ChatGPT zvažují produktová data a kontext | jde o nákupní výsledky; konkrétní dotaz a dostupný kontext | cena a popis mají odpovídat aktuální nabídce obchodníka | ne všechny produkty se zobrazí; štítky a recenze nejsou záruka | OpenAI Shopping |
| Pořadí obchodníků používá cenu, dostupnost, kvalitu a roli prodejce | uživatel otevřel konkrétní produkt a existuje více obchodníků | přímá produktová data mají odpovídat webu | pravidla se vyvíjejí; neplatí automaticky pro obecná textová doporučení | OpenAI Shopping |
| Shopping research může použít web obchodníka | funkce shopping research; stránka je veřejná a přístupná | cena, dostupnost a podmínky musí souhlasit na detailu | blokovaný přístup vede k přeskočení nebo jiným zdrojům; chyby jsou možné | OpenAI Shopping Research |
| Stránka se může objevit v AI funkcích Google Search | indexace; způsobilost k úryvku; zahrnutí webu v Search generative AI | strukturovaná data mají souhlasit s viditelným obsahem | crawl, indexace ani zobrazení nejsou zaručené | Google AI optimization guide |
| Gemini může ukázat odkaz u odpovědi | platforma odkazy poskytla | odkaz kontrolovat proti konkrétnímu tvrzení | může jít o související obsah; ne každá odpověď odkazy má | Gemini Apps Help |
| Seznam ukazuje reklamy pod Asistentem | odpověď obsahuje odpovídající Sklik reklamu | plocha má štítek Sponzorované výsledky | nejvýše dva inzeráty; oddělit od textu odpovědi | Seznam blog |

Prázdné konzistenční požadavky a výjimky byly hledány; relevantní požadavky jsou v tabulce vyplněné.

## FAQ původ

1. Proč ChatGPT doporučuje konkurenci — praktický problém + dokumentace OpenAI.
2. Změní vlastní srovnávací stránka doporučení — konkurence/častý obchodní dotaz; Google review guide a absence garance.
3. Dokazuje odkaz zdroj hodnocení — dokumentovaný praktický problém Gemini.
4. Stačí nový chat bez personalizace — dokumentace ChatGPT Search a praxe měření.
5. Je první firma sponzorovaný výsledek — Seznam oznámení placené plochy.
6. Za jak dlouho se oprava projeví — praktický problém; žádná univerzální lhůta ve zdrojích, proto odpověď limit výslovně přiznává.

## A5 trend research

Nový relevantní jev: řízená manipulace doporučení vloženým pokynem v nalezeném dokumentu. Preprint Paeng, *The Injection Paradox* (arXiv:2606.09204, 8. 6. 2026) měří potlačení značky v laboratorním RAG nastavení; výsledky nejsou univerzální napříč modely ani důkazem živých spotřebitelských rozhraní. Po kontrole plánu nebyla nalezena duplicita, proto byl přidán jeden nový analytický řádek s těmito omezeními.
