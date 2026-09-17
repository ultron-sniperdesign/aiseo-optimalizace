# Research — Obsah za formulářem: co AI nepřečte a co zveřejnit

Run 17. 9. 2026 · tutorial · slug `obsah-za-formularem-a-ai` · kadence: první ze dvou nových článků
Bez agentů a workflow: curl na primární zdroje, jedno WebFetch, Marketing Miner (36 kreditů), 2× audit gpt-5.5, C6, 1 obrázek.

## Výběr tématu

- **První volný řádek plánu `produktovy feed pro ai` jsem nepsal** — kolizní kontrola 17. 9. 2026 ukázala, že celé zadání („co do feedu dát, jak ho udržet v souladu se stránkou, čemu se vyhnout“) už pokrývá `produktovy-feed-gtin` z 18. 7. 2026 včetně FAQ „Zajistí správný feed, že mě AI doporučí?“. Řádek uzavřen jako SLOUČENO s odkazem na existující článek.
- Vzat tedy další volný řádek: `gated obsah a ai` → „Obsah za formulářem a AI — co systémy neuvidí“.
- **Hledanost (Marketing Miner, cs, 17. 9. 2026):** „gated content“ 10/měs, „lead magnet“ 140, „paywall“ 330, „whitepaper“ 220, „případová studie“ 610; „obsah za formulářem“, „obsah za registrací“ a „formulář pro stažení“ bez dat. Titulek proto míří na běžnou českou formulaci, ne na anglický termín, a slovo „gated“ se v textu vůbec nepoužívá.
- **Vymezení proti korpusu:** cenu za formulářem řeší `ceny-na-webu-a-ai` (17. 7. 2026), znalosti uzavřené v chatbotu `chatbot-na-webu-a-ai-viditelnost`, roboty vyvolané uživatelem `roboti-vyvolani-uzivatelem`. Tenhle článek na ně odkazuje a řeší obecné pravidlo dělení obsahu.

## Ověřená fakta (17. 9. 2026, primární zdroje, doslovně)

**Google, Spam policies for Google web search (akt. 28. 8. 2026)**
- „Cloaking refers to the practice of presenting different content to users and search engines with the intent to manipulate search rankings and mislead users.“
- „If you operate a paywall or a content-gating mechanism, we don't consider this to be cloaking if Google can see the full content of what's behind the paywall just like any person who has access to the gated material and if you follow our Flexible Sampling general guidance.“ → dvě podmínky, ne jedna.

**Google, Flexible Sampling (akt. 10. 12. 2025)**
- „(„Paywall,“ in this context, applies equally to barriers that require either subscription or merely registration for content access.)“ → registrace bez platby spadá do stejné kategorie.
- „In general, we think that monthly, rather than daily metering provides more flexibility and a safer environment for testing.“
- „for most daily news publishers, we expect the value to fall between 6 and 10 articles per user per month“ · „As a starting point for your explorations, we encourage you to provide 10 articles per month to Google search users and iterate from there.“
- Lead-in: „some publishers show the first few sentences of an article „above the fold“ of their paywall after the meter has run out. We think this is a good practice.“

**Google, Structured data for subscription and paywalled content (akt. 8. 9. 2026)**
- „This structured data helps Google differentiate paywalled content from the practice of cloaking, which violates spam policies.“ → **pomáhají**, nikoli „odliší“.
- „This guide only applies to content that you want crawled and indexed.“
- V ukázce `isAccessibleForFree: false` a `hasPart` s `cssSelector` na část stránky.

**Google, Make your links crawlable (akt. 10. 12. 2025)**
- „Generally, Google can only crawl your link if it's an <a> HTML element … with an href attribute. Most links in other formats won't be parsed and extracted by Google's crawlers.“ → v textu zachováno „obecně“ a „většinu“.

**Nápověda Search Console, Kontrola adresy URL (česky, čteno 17. 9. 2026)**
- „Jestliže chcete zobrazit informace o požadavku, včetně požadavku a odpovědi HTTP a odeslaného kódu HTML, klikněte na Zobrazit procházenou stránku.“
- „Zobrazení vykreslené verze stránky: Prohlédněte si snímek stránky, jak ji vidí Google-InspectionTool.“
- „Pokud používáte paywall, přidejte strukturovaná data pro placený obsah, aby nedocházelo k problémům s procházením.“

**OpenAI, Bots (developers.openai.com, čteno 17. 9. 2026)**
- Tři identity: `OAI-SearchBot` (vyhledávání v ChatGPT), `GPTBot` (trénink), `ChatGPT-User` (stránka otevřená na žádost uživatele).
- „ChatGPT-User is not used for crawling the web in an automatic fashion. Because these actions are initiated by a user, robots.txt rules may not apply.“
- **O přihlašování, paywallu ani obsahu za bránou stránka nepíše nic.** V článku uvedeno jako náš nález, ne jako tvrzení OpenAI.

## Co článek netvrdí

- že AI systémy obsah za bránou „nikdy neuvidí“ — o bráně samotné dokumentace mlčí, jen se u samočinných robotů dá počítat s tím, že se nepřihlásí;
- že každá odlišnost mezi robotem a člověkem je maskování (chybí podmínka záměru);
- že strukturovaná data pro placený obsah cokoli zaručí;
- že test přes `curl` ukáže, co „nemá ani stroj“ — Google stránku vykreslit umí;
- kdo bude nebo nebude citovaný.

## Audity

- **Audit 1 (gpt-5.5):** 3× BLOCKER, 8× WARNING, 3× TIP. Blokující: zobecnění „u systémů s AI je to stejné“, závěr z testu bez JavaScriptu, chybějící podmínka záměru u maskování. Vše zapracováno; dál krátká odpověď začíná definicí, titulek na 50 znaků, „není citovaná“ → „snižuje šanci“, u odkazů doplněno „obecně/většinu“, strukturovaná data „pomáhají odlišit“, čísla z vzorkování upřesněna na denní zpravodajské vydavatele, CTA popisuje Pack jako PDF se sedmi drátěnými modely.
- **Audit 2 (gpt-5.5):** viz `audit2-result.md`.
- **C6:** mechanický checker 0 nálezů od prvního konceptu.

## Vedlejší nálezy → do plánu

1. `agregatorova jednotka ve vyhledavani` — dokumentace Googlu z 11. 9. 2026: agregátorová a dodavatelská jednotka pro dotazy na hotely, letenky, dálkové vlaky a produkty v zemích EHP (tedy i v Česku). V korpusu není ani zmínka.
2. `isaccessibleforfree placeny obsah` — celý postup pro strukturovaná data placeného obsahu; v tomhle článku je na to jeden odstavec.
3. `kontrola adresy url co google videl` — nástroj Kontrola adresy URL jako samostatný návod (procházená stránka, vykreslený snímek, Google-InspectionTool).

## Poznámka k obrázku

Poprvé podle nového pravidla: PNG posloužilo jako pracovní mezikrok, po odvození `.jpg` a `.webp` a kontrole ořezu (1200×669 z horní části) bylo smazané a do repa nešlo.
