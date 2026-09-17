# Rešerše — Rebranding a AI

## Výběr a překryv

- Vybraný řádek plánu: `rebranding a zmena nazvu pro ai` (první způsobilý nový článek po přeskočení `produktovy feed pro ai`, který se překrývá s publikovaným článkem o produktovém feedu a GTIN).
- Jde o nový tutorial. Nejbližší články jsou `/blog/chybna-informace-o-firme-v-ai/` (oprava jednotlivého chybného údaje) a `/blog/organization-schema-pro-znacku/` (technický popis Organization). Nový text řeší řízený přechod identity, pořadí kroků a případnou změnu domény.
- Teze plánu byla zpřesněna: není doložená společná lhůta, po kterou „AI systémy“ drží starý název. Google dokumentuje vlastní opětovné procházení a zpracování; ChatGPT může odpovídat z naučených znalostí nebo s webovým vyhledáváním. Článek proto neslibuje jednotný termín.

## Klíčová slova a poptávka

Marketing Miner (17. 9. 2026):

| Dotaz | Měsíční hledanost | Meziročně |
|---|---:|---:|
| rebranding | 650 | −13 % |
| změna názvu firmy | 40 | +10 % |
| přejmenování firmy | 10 | −25 % |
| rebranding firmy | bez vrácených dat | — |
| rebranding a AI | bez vrácených dat | — |
| změna názvu webu | bez vrácených dat | — |

Suggestions pro `rebranding`: 124 deduplikovaných návrhů; věcně použitelné `rebranding význam`, `co je rebranding`, `rebranding firmy`. Právní dotazy typu cena a obchodní rejstřík nejsou záměrem článku.

Google Trends, CZ, 5 let: široký výraz `rebranding` má řídká data; rising dotazy `jaguar rebranding` a `rebranding význam`. První je událostní dotaz, druhý posloužil pro FAQ. Užší výrazy měly nulový/řídký normalizovaný index, proto z nich nevyvozujeme nezájem ani sezónnost. Suggest pro `rebranding a AI` byl převážně šum (`Airbnb`, aerolinky, AI logo); nepoužit.

## Primární zdroje

1. Google — názvy webů: https://developers.google.com/search/docs/appearance/site-names
   - Google skládá název automaticky z homepage a odkazů na web; `WebSite` je nejdůležitější způsob vyjádření preference.
   - `name` a `url` patří na homepage; `alternateName` je volitelné. Konzistence napříč homepage je doporučená.
   - Po změně Google uvádí několik dní až několik týdnů pro opětovné projití a zpracování, podle četnosti obnovování.
2. Google — Organization: https://developers.google.com/search/docs/appearance/structured-data/organization
   - Organization na homepage může pomoci rozlišit organizaci a její administrativní údaje. Nejsou povinné vlastnosti; přidávají se relevantní údaje.
3. Google — profil firmy: https://support.google.com/business/answer/3039617?hl=en a pravidla https://support.google.com/business/answer/3038177?hl=en
   - Název má odpovídat skutečnému označení firmy. Po změně může být vyžadováno nové ověření.
   - Menší přejmenování může zůstat na profilu, zásadní změna, která nesplní kritéria, je považována za novou firmu. Nelze tedy plošně radit „vždy jen přepište profil“.
4. Google — stěhování webu: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
   - Při změně domény: mapa URL, trvalé serverové přesměrování, vlastní canonical, nové interní odkazy, Change of Address a sitemap. Google doporučuje držet přesměrování alespoň rok.
   - U středních webů může přesun většiny stránek trvat týdny nebo déle; není pevná frekvence procházení.
5. OpenAI Help — aktuálnost odpovědí: https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
   - Bez vyhledávání odpověď vychází z naučených znalostí; s vyhledáváním může čerpat aktuální webové zdroje a uvádět citace. Výstup může být chybný a má se ověřovat.
6. Google — přesměrování: https://developers.google.com/search/docs/crawling-indexing/301-redirects
   - Staré URL se mohou dočasně objevovat i po zařazení nových URL do výsledků; Google je může považovat za alternativní název kanonické URL.

## Podmínky tvrzení o platformách

| Tvrzení | Podmínky | Výjimky | Primární zdroj |
|---|---|---|---|
| Google může převzít preferovaný název webu z `WebSite` | značení na homepage, správné `name`+`url`, přístupná homepage, konzistence dalších zdrojů na homepage | výběr je automatický a preferovaný název není zaručen; jeden název na doménu/subdoménu | Site names |
| Změna názvu se může propsat za dny až týdny | Google musí homepage znovu projít a zpracovat | podle četnosti obnovování; interní stránky mohou zaostávat; nejde o lhůtu pro jiné platformy | Site names |
| Google Business Profile lze přejmenovat | název odpovídá reálnému označení; uživatel má správu profilu; Google změnu posoudí | může být nutné nové ověření; zásadní změna může znamenat novou firmu a nový profil | Business Profile |
| Starou doménu lze převést na novou bez ztráty cesty uživatelů | URL mapa, 301/308 na odpovídající cíle, dostupný nový web, správné canonical a odkazy | přesun může dočasně kolísat; nevhodné hromadné přesměrování na homepage může působit jako soft 404 | Site move |
| ChatGPT může zachytit nový název z webu | odpověď skutečně použije Search/Deep Research a relevantní zdroj je dostupný | bez vyhledávání vychází z naučených znalostí; ani s vyhledáváním není správnost zaručená | OpenAI Help |

## FAQ — původ otázek

- Co je rebranding? — Google Suggest a Trends (`rebranding význam`).
- Jak dlouho trvá, než se nový název objeví ve vyhledávání? — Google Search dokumentace + praktická otázka.
- Mám ve strukturovaných datech nechat starý název? — praktická implementační otázka, ověřeno proti `WebSite`/`Organization`.
- Musím při rebrandingu měnit doménu? — praktická otázka, Google site move.
- Mám založit nový Firemní profil na Googlu? — podmínka z dokumentace Google Business Profile.
- Proč AI stále používá starý název? — praktický problém + OpenAI dokumentace k rozdílu odpovědí s/bez vyhledávání.

## A1 — trend research

Zachycená novinka o sponzorovaných výsledcích pod Seznam Asistentem nebyla v tomto běhu přidána jako nový řádek: dostupná rešerše zatím nedala dostatečně stabilní primární podklady pro samostatný článek a nejde o nezbytnou součást tématu rebrandingu. Další hodnotné neduplicitní téma nebylo nalezeno; kvótu A5 proto mechanicky neplním.

### Doplnění po faktickém auditu

7. Google Gemini — zdroje a kontrola odpovědí: https://support.google.com/gemini/answer/14143489?hl=en
   - Zobrazené odkazy mohou být pouze související; odkaz nalezený kontrolou odpovědi nemusí být zdrojem použitým při generování. Samotný odkaz proto není důkazem příčiny konkrétního tvrzení.
8. Google Search Console — Změna adresy: https://support.google.com/webmasters/answer/9370220?hl=en
   - Nástroj vyžaduje vlastnictví staré i nové služby pod stejným účtem, používá se po zprovoznění přesměrování a jen pro podporované přesuny domény/subdomény.
