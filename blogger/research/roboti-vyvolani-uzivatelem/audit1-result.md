1. **Vážné**  
   **Citace:** „OpenAI, Google i Perplexity mají kategorii, u které robots.txt podle vlastní dokumentace neplatí“  
   **Problém:** Zplošťuje rozdíl mezi „nemusí platit“ a „obvykle ignorují“. To research výslovně zakazuje.  
   **Návrh opravy:** „OpenAI, Google i Perplexity popisují kategorii fetcherů vyvolaných uživatelem, u níž robots.txt podle jejich dokumentace není spolehlivá řídicí vrstva: OpenAI píše ‚nemusí platit‘, Google a Perplexity ‚obvykle ignorují‘.“

2. **Vážné**  
   **Citace:** `answer: "… pravidla robots.txt na takový požadavek podle dokumentace nedopadají."`  
   **Problém:** Příliš silný závěr. U OpenAI je jen „nemusí platit“, u Google/Perplexity „obvykle ignorují“.  
   **Návrh opravy:** `answer: "… na takový požadavek se podle dokumentace nelze spolehnout přes robots.txt. OpenAI píše „nemusí platit“, Google a Perplexity „obvykle ignorují“."`

3. **Vážné**  
   **Citace:** „Blokovat na serveru, ne v robots.txt — to je jediná vrstva, která u téhle kategorie funguje…“ / „Jen na úrovni serveru — podle user agenta nebo IP adresy.“  
   **Problém:** Chybí limit bezpečnosti a vedlejších dopadů. Zadání výslovně chce doplnit, zda je bezpečné radit blokaci na serveru.  
   **Návrh opravy:** „Pokud blokaci zvažujete, dělejte ji opatrně a po ověření IP; blokace podle samotného user agentu je snadno obejitelná a i správně cílená blokace může odříznout návštěvy od uživatelů, které vám AI poslala.“

4. **Vážné**  
   **Citace:** „pravidlo podle user agenta nebo IP adresy ve webovém serveru či ochranné vrstvě je jediné, co na tenhle provoz dopadá.“  
   **Problém:** Míchá dohromady slabou a silnou variantu. Podle research je user agent podvrhnutelný; takto to zní jako rovnocenné možnosti.  
   **Návrh opravy:** „Technicky zasáhnout lze na serveru nebo ochranné vrstvě, ale spoléhat má smysl až na ověření IP/reverzního DNS; samotný user agent je podvrhnutelný.“

5. **Drobné**  
   **Citace:** `description: "… u všech tří dokumentace říká, že robots.txt na ně nemusí platit."`  
   **Problém:** Frontmatter je v rozporu s tělem i research; Google a Perplexity nemají „nemusí platit“, ale „obvykle ignorují“.  
   **Návrh opravy:** `description: "OpenAI, Google i Perplexity mají fetchery vyvolané uživatelem; OpenAI u nich píše, že robots.txt „nemusí platit“, Google a Perplexity, že ji „obvykle ignorují“."`

6. **Drobné**  
   **Citace:** `stats: ... "5 z 80" — "českých webů má pravidlo pro ChatGPT-User, na které se podle dokumentace nedá spolehnout"`  
   **Problém:** Formulace „na které se … nedá spolehnout“ je interpretace, ne čistý údaj. Ve stats je lepší držet se měřitelných faktů.  
   **Návrh opravy:** `label: "českých webů má v robots.txt pravidlo pro ChatGPT-User"` a interpretaci nechat do těla.

7. **Drobné**  
   **Citace:** „Za pozornost stojí poslední dva přírůstky logiky: agentní použití a poznámkový blok Gemini jsou v téhle kategorii.“  
   **Problém:** „poslední dva přírůstky logiky“ je nejasná a vatová formulace.  
   **Návrh opravy:** „Důležité je, že do téhle kategorie Google řadí i `Google-Agent` a `Google-GeminiNotebook`.“

8. **Drobné**  
   **Citace:** „… a je to tam napsané předem, ne jako výmluva po nějakém incidentu.“  
   **Problém:** Zbytečně expresivní a implikuje spor, který článek nepotřebuje. Nevěcný tón.  
   **Návrh opravy:** „… a dokumentace to popisuje předem.“

9. **Drobné**  
   **Citace:** „U celé jedné kategorie fetcherů to podle dokumentace není hranice, ale doporučení, se kterým se nepočítá.“  
   **Problém:** Přehání. Dokumentace neříká „doporučení, se kterým se nepočítá“.  
   **Návrh opravy:** „U celé jedné kategorie fetcherů podle dokumentace nejde o spolehlivou řídicí vrstvu.“

10. **Drobné**  
    **Citace:** „Kdo tuhle vrstvu chce řešit, musí na server; v robots.txt to podle dokumentace nedořeší.“  
    **Problém:** Chybí podmínka „pokud po zvážení dopadů vůbec chce blokovat“. Jinak článek končí příliš akčně.  
    **Návrh opravy:** „Kdo po zvážení dopadů chce tenhle provoz omezovat, musí to řešit na serveru; samotné robots.txt na to podle dokumentace nestačí.“

11. **Drobné**  
    **Citace:** „Jak ověřit robota podle IP místo podle jména…“ + FAQ „Podle IP adresy, ne podle jména.“  
    **Problém:** Absolutní formulace. U podkladu je konkrétně doložen Google; u ostatních tu v článku chybí stejně pevně popsaný ověřovací postup.  
    **Návrh opravy:** „Kde provozovatel publikuje IP rozsahy a ověřovací postup, ověřujte robota podle IP a reverzního DNS; samotné jméno user agentu nestačí.“

12. **Drobné**  
    **Citace:** „OpenAI tedy dnes popisuje čtyři user agenty, ne tři.“  
    **Problém:** Mimo hlavní linku článku a ruší fokus. Navíc odkazuje na interní opravu jiného textu.  
    **Návrh opravy:** Zkrátit na jednu větu v limitech nebo poznámce: „Seznamy user agentů se mění; i během přípravy článku přibyl v dokumentaci OpenAI další agent.“