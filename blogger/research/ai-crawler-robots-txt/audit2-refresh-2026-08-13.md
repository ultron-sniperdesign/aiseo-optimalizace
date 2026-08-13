1. **Vážné — hub odpoví pozdě, dřív začne rozvádět výjimky a odbočky**  
   **Citace:** „**Přístup slušných veřejných AI robotů řídíte hlavně přes soubor robots.txt**…“ + až v další H2: „**Krátká odpověď: pokud chcete být citovaní, pusťte vyhledávací a on-demand roboty; u tréninkových se rozhodněte podle sebe.**“  
   **Návrh:** Dejte hlavní rozhodnutí hned pod perex jako 3řádkový box „Pokud chcete citace / pokud nechcete trénink / pokud chcete tvrdou blokaci“. Uživatel z vyhledávání na dotaz „ai roboti robots.txt“ má dostat odpověď ještě před prvním delším odstavcem.

2. **Vážné — jako hub už článek místy funguje spíš jako rozcestník než jako vstupní odpověď**  
   **Citace:** „…rozebírá [samostatný článek](/blog/roboti-vyvolani-uzivatelem/)“, „…u [blokování AI botů přes Cloudflare](/blog/cloudflare-ai-bot-blocking/)“, „…[ověřením podle IP rozsahů](/blog/overovani-ai-robotu/)“, „…[samostatný článek o tom měření](/blog/gptbot-bez-oai-searchbot/)“  
   **Návrh:** U navazujících článků doplňte jednotný pattern: 1 věta odpovědi tady, 1 odkaz „podrobně“. Např. „Fetchery vyvolané uživatelem robots.txt často nerespektují; pokud je chcete omezit, musíte jít na server/CDN. Podrobně: …“ Teď odkazy přicházejí dřív, než je dořečený závěr.

3. **Vážné — H2 „Kteří AI roboti a řídicí tokeny se v robots.txt řeší“ je přerostlá do katalogu, který zpomaluje cestu k rozhodnutí**  
   **Citace:** celá tabulka 15 položek + vložený Insight „Co z toho čeští správci reálně nastavují“  
   **Návrh:** V hubu nechte zkrácený operativní seznam „co řešit jako první“: OAI-SearchBot, Claude-SearchBot, PerplexityBot, GPTBot, ClaudeBot, CCBot, Google-Extended. Zbytek přesuňte do rozbalovací sekce nebo samostatného katalogu robotů. Pro tříminutového čtenáře je současná tabulka moc široká a Insight ho odvede do sekundárního tématu.

4. **Drobné — pořadí H2 je skoro logické, ale `llms.txt` je už mimo hlavní úkol článku**  
   **Citace:** „## A co llms.txt?“  
   **Návrh:** Přesuňte `llms.txt` níž jako FAQ nebo krátký box „Související, ale jiné téma“. V článku o `robots.txt pro AI roboty` je to odbočka, ne nosná kapitola. Hub má držet osu: koho pustit, koho omezit, co robots.txt neumí.

5. **Vážné — rozpor v tom, zda mají on-demand / user fetchers být v hlavním doporučení**  
   **Citace:**  
   - answer: „Kvůli citacím neblokujte vyhledávací roboty (OAI-SearchBot, Claude-SearchBot, PerplexityBot).“  
   - H2 tabulka: „**Povolit.**“ i pro „**Na vyžádání | ChatGPT-User, Claude-User**“  
   - text níž: „OpenAI u `ChatGPT-User` píše, že pravidla ‚nemusí platit‘…“  
   **Návrh:** Sjednoťte rozhodovací rovinu. Např.: „Pro citace řešte primárně vyhledávací roboty. User fetchery můžete v robots.txt uvést, ale neberte to jako spolehlivou páku.“ Tím bude jasné, co je core rada článku a co jen doplňková nuance.

6. **Drobné — některé věty jsou těžké na první přečtení a zpomalují skenování**  
   **Citace:** „Jakmile tedy dáte robotovi vlastní skupinu, skupina `User-agent: *` se na něj **přestane vztahovat**. Nedoplní se, nahradí se.“  
   **Návrh:** Rozsekat do kratších vět a převést na příklad. Např.: „Vlastní skupina přepíše `User-agent: *`. Nezdědí ji. Když tedy přidáte jen `Allow: /`, můžete robotovi omylem otevřít i košík nebo interní vyhledávání.“

7. **Drobné — opakuje se stejná hlavní teze v několika variantách**  
   **Citace:**  
   - „robots.txt je dobrovolná žádost, ne technická zábrana“  
   - „robots.txt berte jako první vrstvu pro slušné roboty, ne jako záruku“  
   - „Skutečné blokování… řešte na serveru, firewallu nebo CDN“  
   - FAQ: „Ne. Robots.txt je dobrovolná žádost…“  
   **Návrh:** Jednu plnou formulaci nechat v hlavní H2, v dalších místech zkrátit na odkazovací znění. Teď se argument vrací moc často a ubírá prostor hubové orientaci.

8. **Vážné — chybí explicitní rozcestník „kam jít dál podle cíle“, což je pro hub po rozšíření sítě klíčové**  
   **Citace:** článek obsahuje řadu inline odkazů, ale nemá centrální navigační blok podle úkolu čtenáře.  
   **Návrh:** Přidejte před závěr nebo hned za úvod blok typu:  
   - „Chci být citovaný v ChatGPT/Perplexity“ → tento článek + SEO pro ChatGPT  
   - „Chci zakázat trénink, ale ne citace“ → tento článek + co vypne který opt-out  
   - „Chci roboty opravdu zastavit“ → Cloudflare / ověřování IP  
   - „Chci pochopit user fetchery“ → roboti vyvolaní uživatelem  
   - „Řeším Google-Extended / Seznam-Extended“ → samostatné články  
   Tím bude jasné, co vyřeší hub a co navazující texty.

9. **Drobné — některé vložené insighty jsou obsahově zajímavé, ale pro vstupní hub zvyšují kognitivní zátěž**  
   **Citace:** „Vlastní měření 80 českých domén…“ a „Otevřená oprava (8. 8. 2026)“  
   **Návrh:** Zkraťte je na 1–2 věty a zbytek schovejte za „Jak jsme to měřili / případová studie“. Hub má prioritně rozhodnout, ne rozebírat metodické odbočky a redakční historii opravy.

10. **Vážné — závěr článku odchází od role hubu k prodeji dřív, než uzavře navigaci tématu**  
   **Citace:** „## Co dál: nastavte to v rámci celého webu“ + komerční odkazy na pack a audit  
   **Návrh:** Nejdřív dejte nekomerční tematický rozcestník k celému clusteru, až pod něj komerční CTA. V aktuální podobě článek uzavírá obchodní nabídka, ale neuzavírá mapu tématu „AI roboti × robots.txt“. To je u hubu promarněné místo.