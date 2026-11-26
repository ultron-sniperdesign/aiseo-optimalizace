# VERDIKT: OPRAVIT PŘED PUBLIKACÍ

Audit osy 1 (věcná správnost) a osy 5 (aktuálnost), stav posuzovaný k **26. 11. 2026**. Zjištěno **6 nálezů [BLOCKER], 4 [WARNING] a 1 [TIP]**. Opakování stejné vady v úvodu, frontmatteru a shrnutí počítám jako jeden nález.

Ověření vychází výhradně z dodaných souborů; web jsem neprohledával. Datum stažení zdroje není potvrzením, že jeho starší oznámení stále popisuje aktuální provoz. Dokumentace, sekundární zpráva, ověření rozhraní a měření jsou odlišné druhy dokladu. Prázdné UI a měření v Z16 respektuji. Návrhy níže jsou cílené náhrady jednotlivých míst, nikoli přepis článku.

## 1. [BLOCKER] Podpora UCP a platforma Shopify nejsou doloženou vstupenkou do testu

**Citace:** „Zapojit se zatím mohou e-shopy, které umějí protokol UCP — v Česku například obchody na Shopify.“ (`clanek.mdx:40`). Dále „Shopify ano“ (`clanek.mdx:50`), „agentní nákup na Zboží.cz stojí na dvou věcech“ (`clanek.mdx:86`) a „U vlastního řešení počítejte s implementací specifikace UCP“ (`clanek.mdx:91`). FAQ odpovídá na možnost zapojení Shoptetu „Zatím jen v pilotu“ (`clanek.mdx:27`).

**Zdroj a rozpor:** `zdroje/mg-seznam.txt:114–116` potvrzuje test pro přihlášené uživatele a účast technologicky připravených e-shopů, mezi nimi například Shopify. Neuvádí úplné podmínky přijetí ani právo libovolného obchodu s UCP do testu vstoupit. `zdroje/mg-shoptet.txt:129` dokládá první obchodníky v pilotu, nikoli otevřený nábor dalších. `research.md:14` výslovně přiznává chybějící nápovědu k zapojení. Opatrná formulace u vlastního řešení v `clanek.mdx:59` je správná, ale úvod a checklist její omezení nedodržují.

Jde o záměnu popisu účastníků za postačující podmínku přijetí. Samotné Shopify ani implementace UCP podle podkladů zapojení nezaručují. V samostatné `description` (`clanek.mdx:4`: „Seznam od září 2026 testuje na Zboží.cz nákup na dvě kliknutí přes protokol UCP“) navíc chybí podmínka přihlášení uživatele, kterou zdroj výslovně uvádí. Také běžné zobrazení nabídky má další podmínky: interní podklad `zdroje/clanek-webu-zbozi-cz-pro-ai.mdx:66–84` uvádí registraci, odpovídající feed a kredit. Tyto podmínky běžné inzerce ovšem nelze bez dalšího vydávat za úplná pravidla agentního pilotu.

**Konkrétní nové znění úvodu / závěru:**

> Podle MediaGuru z 1. 9. 2026 se do první fáze testu zapojily technologicky připravené e-shopy, v Česku například některé obchody na Shopify. Úplné podmínky přijetí do testu dodané zdroje neuvádějí; samotná podpora UCP ani použití Shopify zapojení nezaručují.

**Náhrada samostatné description:**

> Seznam podle zprávy z 1. 9. 2026 testuje na Zboží.cz nákup na dvě kliknutí pro přihlášené uživatele u zapojených e-shopů s UCP.

**Náhrada odpovědi o Shoptetu:**

> Shoptet podle MediaGuru z 20. 10. 2026 oznámil pilot s prvními obchodníky. Z této zprávy nelze určit, zda a za jakých podmínek může vstoupit další e-shop. Termíny širšího zpřístupnění si ve zdroji odporují.

**Náhrada kategorického závěru v ř. 86 a rady pro vlastní řešení:**

> Z oznámení plyne použití UCP; nejde však o úplný seznam podmínek zapojení. Pro běžné zobrazení nabídek na Zboží.cz odkazovaný návod uvádí registraci, odpovídající feed a kredit. U vlastního řešení si nejprve ověřte možnost přijetí do testu a požadavky Seznamu; otevřená specifikace UCP sama přijetí nepotvrzuje.

Stejné omezení promítnout do ř. 5, 52, 56, 89, 91 a 103. Neznámé podmínky nevymýšlet.

## 2. [BLOCKER] „Upgates zatím ne“ zaměňuje absenci v oznámeních za prokázanou nepodporu

**Citace:** „Shopify ano, Shoptet v pilotu, **Upgates zatím ne**“ (`clanek.mdx:50`).

**Zdroj a rozpor:** Oznámení `zdroje/aktualizace-systemu-verze-37.txt` a `zdroje/aktualizace-systemu-verze-37-1.txt` agentní nákup ani UCP neuvádějí. To je skutečně doložitelný závěr, který článek správně používá v ř. 29 a 58. Není to však důkaz neexistence podpory v celé platformě, individuální integrace nebo pilotu mimo tyto aktualizace. Doklad o celkové nepodpoře: **bez zdroje ve složce**. Závažnost je vysoká, protože jde o přímou odpověď na hlavní otázku článku, která může ovlivnit rozhodování o platformě.

**Konkrétní nové znění dané části nadpisu:**

> Shopify v oznámeném testu, Shoptet v pilotu, Upgates bez zmínky o UCP v oznámeních 37 a 37.1

Případné další zkratky o Upgates vždy omezit na prověřená oznámení. Nepsat ani opačné tvrzení, že Upgates podporu má.

## 3. [BLOCKER] Článek popisuje neověřený průběh objednávky a její reakce na chybu

**Citace:** „Když se nákup dokončuje přes předvyplněnou objednávku, rozdíl v ceně, dostupnosti nebo dopravě se ukáže hned.“ (`clanek.mdx:86`). „Předvyplněná objednávka přebírá údaje z nabídky; nesoulad s webem nákup zastaví nebo zákazníka zmate.“ (`clanek.mdx:90`). Řádek platformové tabulky představuje „výběr … dokončení přes předvyplněnou objednávku“ jako popis provozu (`clanek.mdx:57`).

**Zdroj a rozpor:** `research.md:12–13` má prázdné ověření rozhraní i měření. `zdroje/mg-shoptet.txt:129` říká, že řešení takový postup **má umožnit**. To dokládá oznámený záměr, ne pozorování pilotního rozhraní. Žádný dodaný zdroj nedokládá přesný původ předvyplněných údajů, okamžik zobrazení rozdílu ani reakci na nesoulad. Pro tyto tři konkrétní mechanismy: **bez zdroje ve složce**. Dokumentace UCP je rovněž nepotvrzuje pro implementaci Seznamu.

Také věta „Seznam popisuje zkrácení cesty k nákupu, který uživatel potvrzuje“ (`clanek.mdx:48`) rozšiřuje doložená dvě kliknutí o závěr o autorizaci. Zpráva `zdroje/mg-seznam.txt:114–116` přesný potvrzovací krok ani míru autonomie AI nepopisuje. `research.md:21` ostatně samostatnou tezi o schvalování platby označuje jako nenalezenou. Nelze z toho vyvodit ani opačný závěr, že nákup probíhá bez souhlasu.

**Konkrétní nové znění řádku Shoptetu:**

> Shoptet podle MediaGuru z 20. 10. 2026 oznámil pilot UCP s prvními obchodníky. Oznámené řešení má umožnit zahájit výběr například na Zboží.cz a dokončit nákup přes předvyplněnou objednávku na e-shopu; skutečný průběh v rozhraní zde ověřen není.

**Náhrada neověřeného mechanismu v ř. 86 a 90:**

> Udržujte cenu, dostupnost a dopravu ve feedu v souladu s webem. Jak pilot reaguje na rozdílné údaje a odkud přesně objednávku předvyplňuje, použité zdroje nepopisují.

**Náhrada ř. 48:**

> Seznam podle MediaGuru popisuje zjednodušené dokončení nákupu na dvě kliknutí pro přihlášeného uživatele. Přesnou roli AI a průběh autorizace nákupu použité zdroje nepopisují; rozhraní jsem neověřoval.

## 4. [BLOCKER] U Instant Checkoutu vypadly podmínky původního spuštění

**Citace:** „Nákup v ChatGPT (Instant Checkout), při spuštění pro uživatele v USA a prodejce na Etsy.“ (`clanek.mdx:76`).

**Zdroj a rozpor:** `zdroje/oai-buy.txt:32` výslovně uvádí **uživatele ChatGPT Plus, Pro a Free v USA**, **americké prodejce Etsy** a **nákup jedné položky**. `zdroje/oai-buy.txt:38` navíc omezuje postup na produkt podporující Instant Checkout. Americké prodejce potvrzuje i `zdroje/stripe-acp.txt:291–294`. Podmínky amerického prodejce a jedné položky jsou již v `research.md:37`, ale do článku se nedostaly. Jde o vynechané podmínky, proto [BLOCKER].

Tabulka současně používá přítomné „Kde se používá“. Ačkoli dovětek „při spuštění“ správně naznačuje historii, oznámení ze září 2025 nepotvrzuje celou podobu produktu k listopadu 2026. Interní podklad `zdroje/clanek-webu-nakupovani-pres-ai.mdx:43–54, 114–123` popisuje podle zpravodajství změny od března 2026. Externí články, na které interní text odkazuje, ve složce nejsou; nelze je zde považovat za přímo ověřené.

**Konkrétní nové znění buňky:**

> Původní Instant Checkout, oznámený 29. 9. 2025: pro uživatele ChatGPT Plus, Pro a Free v USA, u podporovaných produktů zapojených amerických prodejců Etsy, pouze pro nákup jedné položky. Jde o podmínky tehdejšího spuštění, nikoli ověření dostupnosti k 26. 11. 2026.

Odkaz v ř. 82 ponechat jako odkaz na interní přehled dalšího vývoje; nedělat z něj přímý důkaz dnešní dostupnosti. Ve FAQ (`clanek.mdx:33`) zároveň nahradit „vyvinuly … v září 2025“ přesnějším „společně představily 29. 9. 2025“: oznámení dokládá datum zveřejnění, nikoli dobu celého vývoje protokolu.

## 5. [BLOCKER] Mapování UCP na MCP neznamená automatickou dostupnost nástrojů pro asistenta

**Citace:** „Schopnosti UCP odpovídají nástrojům protokolu MCP, takže je může používat i AI asistent.“ (`clanek.mdx:82`).

**Zdroj a rozpor:** `zdroje/ucp-overview.txt:1062–1068` uvádí mapování 1:1, ale současně říká, že obchod **MAY** vystavit MCP server obalující jeho implementaci UCP. Jde o volitelnou cestu přístupu. Primární REST transport je popsán v ř. 1054–1061. Článek vynechává podmínku zpřístupnění odpovídajícího rozhraní, takže může budit dojem, že podpora UCP sama poskytne asistentovi MCP nástroje. Upgates MCP určené ke správě e-shopu přitom podle `zdroje/aktualizace-systemu-verze-37.txt:461–468` není dokladem implementace nákupního UCP.

**Konkrétní nové znění:**

> Schopnosti UCP se mapují 1:1 na nástroje MCP. Obchod může svou implementaci UCP zpřístupnit také přes MCP server; tuto cestu pak může použít asistent s odpovídajícím přístupem. Samotná podpora UCP ještě neznamená, že obchod takový MCP server nabízí.

## 6. [BLOCKER] Google je uveden jako další použití UCP bez podmínek jeho implementace

**Citace:** „Test agentního nakupování na Zboží.cz; podle zpráv i nákupní funkce Googlu.“ (`clanek.mdx:76`, levá buňka).

**Zdroj a rozpor:** `zdroje/gdev-ucp.txt:184–192` popisuje konkrétní referenční implementaci pro AI Mode ve Vyhledávání a Gemini, nákup od **způsobilých obchodníků**, **aktivní účet Merchant Center**, **produkty způsobilé pro checkout**, formulář zájmu a dokončení integrace UCP podle pokynů Googlu. Obecný protokol a zpřístupnění konkrétního nákupního produktu Googlu nejsou totéž. Tyto podmínky chybějí i v tabulce briefu, přestože primární zdroj ve složce je. Podle pravidla tohoto kola je vynechání podmínek [BLOCKER].

**Konkrétní nové znění levé buňky:**

> Test na Zboží.cz. Google v lednovém oznámení popsal vlastní implementaci pro AI Mode ve Vyhledávání a Gemini: zapojení vyžaduje aktivní Merchant Center, produkty způsobilé pro checkout, formulář zájmu a dokončení integrace UCP podle jeho pokynů. Nejde o automatické zpřístupnění každému e-shopu s UCP.

Zdroj připsat přímo jako Google Developers Blog z 11. 1. 2026. Není potřeba se zde opírat o sekundární Lupu. Tato náhrada shrnuje oznámené požadavky; nepotvrzuje vlastní kontrolu rozhraní ani dnešní územní dostupnost Googlu.

## 7. [WARNING] Datum zprávy se zaměňuje s počátkem a pokračováním testu; termín Shoptetu potřebuje ukotvit

**Citace:** „Seznam od září 2026 testuje…“ (`clanek.mdx:4`, opakováno v ř. 5, 25, 40 a 103); „Stav podle platforem k 26. 11. 2026“ (`clanek.mdx:52`); „pilot běží, datum pro všechny obchodníky zveřejněné není“ a „v příštím roce spustí“ (`clanek.mdx:62`, také ř. 27).

**Zdroj a rozpor:** `zdroje/mg-seznam.txt:99, 114–116` je zpráva z 1. 9. 2026, že Seznam **začal** testovat. Přesné datum zahájení z ní neplyne; `research.md:20` navíc zmiňuje plán odkazující na tiskovou zprávu z 31. 8., jejíž primární znění není dodáno. `zdroje/mg-shoptet.txt:101, 129` dokládá oznámený pilot v říjnu. Stažení obou článků 26. 11. neověřuje, zda pilot stále běží ve stejném rozsahu, zda mezitím nebyl rozšířen ani zda nebyl někde zveřejněn nový termín.

Rozpor termínů Shoptetu článek zachytil správně. Citované „v příštím roce“ však znamená **2027 vzhledem k říjnovému článku z roku 2026**, nikoli neurčité příští období při budoucím čtení. Z časového odhadu „v řádu týdnů“ nelze vypočítat jisté datum spuštění.

**Konkrétní nové znění opakovaného úvodního tvrzení:**

> MediaGuru 1. 9. 2026 informovalo, že Seznam začal na Zboží.cz testovat agentní nakupování.

**Náhrada uvedení tabulky:**

> Přehled vychází z oznámení dostupných v použitých podkladech k 26. 11. 2026; jejich zářijový a říjnový provozní stav jsem nezávisle neověřoval.

**Náhrada časového závěru o Shoptetu:**

> Článek MediaGuru z 20. 10. 2026 uvádí současně spuštění v roce 2027 a širší zpřístupnění v řádu týdnů od říjnového vystoupení. Potvrzuje tehdejší pilot s prvními obchodníky, ale spolehlivý termín plošného spuštění z něj určit nelze. Další ověřené oznámení v použitých podkladech nemáme.

## 8. [WARNING] „Reklamy v ChatGPT“ jsou užší a silnější závěr než oznámení Upgates

**Citace:** „Upgates verze 37 mezitím přinesla podporu reklam v ChatGPT“ (`clanek.mdx:95`).

**Zdroj a rozpor:** `zdroje/aktualizace-systemu-verze-37.txt:422–425` skutečně oznamuje **podporu OpenAI Ads a OpenAI Pixelu** a možnost připravit e-shop na kampaně „v prostředí OpenAI“. Neupřesňuje konkrétní plochu ChatGPT, dostupnost reklamního účtu, země ani podmínky spuštění kampaně českým obchodníkem. Tuto větu proto nelze používat jako důkaz, že český e-shop už může reklamu v ChatGPT spustit. Takový doklad je **bez zdroje ve složce**. Předchozí formulace v ř. 29 a 58 jsou přesnější.

**Konkrétní nové znění:**

> Upgates v oznámení verze 37 uvádí podporu OpenAI Ads a OpenAI Pixelu. Samotné oznámení neupřesňuje, kde a za jakých podmínek může český obchodník kampaň spustit.

## 9. [WARNING] Universal Cart: zpráva o spuštění v USA neprokazuje dnešní nedostupnost v Česku

**Citace:** „Universal Cart od Googlu jen v USA“ (`clanek.mdx:97`); „Google 15. 10. 2026 podle zpráv zpřístupnil… V Česku dostupný není“ (`clanek.mdx:99`).

**Zdroj a rozpor:** `zdroje/tc-cart.txt:68–73` potvrzuje, že TechCrunch 15. 10. 2026 informoval o dostupnosti pro uživatele v USA, ukládání a sledování produktů z více obchodů napříč Vyhledáváním a Gemini, květnovém představení a vazbě checkoutu na UCP. Neobsahuje úplný seznam nepodporovaných zemí ani aktualizaci dostupnosti k 26. 11. 2026. Aktuální výslovný doklad o nedostupnosti v Česku: **bez zdroje ve složce**. Nedoložená česká dostupnost není důkazem její neexistence.

TechCrunch je připsán v závěrečné transparentní poznámce (`clanek.mdx:107`), takže atribuce nechybí úplně. Přímo v odstavci ale stojí jen neurčité „podle zpráv“.

**Konkrétní nové znění nadpisu a odstavce:**

> Universal Cart od Googlu — říjnové oznámení pro USA

> TechCrunch 15. 10. 2026 uvedl, že Google zpřístupnil Universal Cart uživatelům v USA. Nástroj umožňuje ukládat a sledovat produkty z více obchodů nalezené ve Vyhledávání a v aplikaci Gemini; Google ho poprvé představil na I/O v květnu 2026. Dostupnost pro uživatele v Česku použité podklady nepotvrzují.

## 10. [WARNING] Chybějící popis předávaných dat není důkazem, že veřejný popis neexistuje

**Citace:** „Jaká data o zákazníkovi Seznam obchodníkovi předává, veřejné zdroje nepopisují.“ (`clanek.mdx:31`); „veřejně popsané to není“ (`clanek.mdx:92`). V briefu je dokonce „jaká data Seznam předává, neveřejné“ (`research.md:33`).

**Zdroj a rozpor:** `research.md:14` dokládá, že autor podmínky a popis dat **nenašel**. `zdroje/mg-seznam.txt:114–118` je nepopisuje. Z toho neplyne neveřejnost ani absence ve všech veřejných zdrojích. Pro takto všeobecný negativní závěr: **bez zdroje ve složce**. O tom, jaké konkrétní údaje se předávají nebo nepředávají, proto nelze rozhodnout.

**Konkrétní nové znění pro FAQ i checklist:**

> V použitých zdrojích jsem nenašel úplný popis předávaných zákaznických a objednávkových údajů ani podmínek jejich předávání. Před zapojením si je vyžádejte od Seznamu a své platformy.

V tabulce briefu nahradit „neveřejné“ formulací „v použitých zdrojích nezjištěno“.

## 11. [TIP] Přehled transportů UCP může uvést také Embedded Protocol; discovery popsat přesněji

**Citace:** „přenos přes REST, MCP nebo A2A“ (`clanek.mdx:78`); „platforma nejdřív načte profil obchodu“ (`clanek.mdx:82`).

**Zdroj:** `zdroje/ucp-overview.txt:1051–1072` uvádí vedle REST, MCP a A2A také **Embedded Protocol (EP)**. Stávající výčet není označen za úplný, a uvedené možnosti jsou správně, proto samo vynechání EP není blocker. `zdroje/ucp-overview.txt:453–461` potvrzuje adresu discovery, ale ř. 231–235 a 646–648 dovolují cache a nevyžadují nové načtení před každým požadavkem. O společných schopnostech rozhoduje obchod výběrem z průniku podporovaných schopností.

**Konkrétní nové znění technické buňky a první části ř. 82:**

> Profil obchodu na `/.well-known/ucp`; primární transport REST, dále možnosti MCP, A2A a Embedded Protocol podle implementace.

> Obchod zveřejňuje profil UCP na `/.well-known/ucp`. Profil slouží ke zjištění podporovaných služeb a schopností a lze jej ukládat do cache. Obchod vybírá verzi protokolu a aktivní schopnosti z průniku toho, co podporují obě strany.

Tato technická úprava nenahrazuje povinnou opravu podmínky pro MCP v nálezu 5.

## Co je v pořádku

- Test, přihlášení uživatele, dvě kliknutí, využití UCP a transakce u obchodníka odpovídají **popisu Seznamu zprostředkovanému MediaGuru** (`zdroje/mg-seznam.txt:114–116`). Lze je uvádět jako takto připsané oznámení; nejsou vlastním ověřením rozhraní ani měřením.
- Shoptet skutečně oznámil pilot s prvními obchodníky a stejný článek skutečně obsahuje protichůdné časové údaje (`zdroje/mg-shoptet.txt:129`). Článek správně nevybírá jeden z nich jako jistý termín.
- Data oznámení Upgates **11. 11. 2026** a **24. 11. 2026** sedí (`zdroje/aktualizace-systemu-verze-37.txt:393–398`; `zdroje/aktualizace-systemu-verze-37-1.txt:393–397`). Verze 37 skutečně uvádí OpenAI Ads, Pixel a změny MCP; 37.1 mimo jiné zabezpečení API/FTP a změny Editoru kódu. Absence zmínky o UCP v obou oznámeních je správně popsána v tabulce a FAQ článku.
- UCP: Google a lednové představení odpovídají `zdroje/gdev-ucp.txt:14, 26–28`; zdroj zároveň uvádí spolupráci s Shopify a dalšími partnery. Označení obchodu za Merchant of Record s finanční odpovědností a vlastnictvím objednávky i licence Apache 2.0 odpovídají `zdroje/ucp-overview.txt:1227–1251`. Rozdíl mezi obecným pravidlem protokolu a tvrzením Seznamu je v ř. 31 článku vhodně naznačen.
- ACP: společné představení OpenAI a Stripe **29. 9. 2025**, otevřenost a zachování role obchodníka dokládají `zdroje/oai-buy.txt:18, 33–48` a `zdroje/stripe-acp.txt:290–304`. Článek neslibuje automatické zapojení všech obchodníků Shopify do ChatGPT ani nepožaduje výhradně Stripe jako platební procesor.
- MediaGuru je připsáno v úvodu, platformové tabulce i závěru, TechCrunch v závěru. Sekundární Lupa není v článku výslovně použita jako zdroj tvrzení, které by vyžadovalo její doplnění; její výklad není náhradou primární specifikace.
- Není použito nenalezené tvrzení o tisících zapojených e-shopů do konce roku ani nedoložené statistiky konverzí. Nežádám doplňovat žádná nová čísla.
- **CTA bez blockeru:** název Audit AI viditelnosti, cena **3 600 Kč bez DPH**, obsah služby, prioritizace dopad × náročnost, výstup do pěti pracovních dní od úhrady a schůzka 30–60 minut v dohodnutém termínu odpovídají `zdroje/audit.ts:55–73, 99–100, 305–307, 348–362`.

## Co chybí nebo je nepřesné v tabulce podmínek

Tabulka **existuje** (`research.md:28–38`), ale není úplná. Následující doplnění se týkají podkladů; tento audit je v `research.md` neprovádí.

| Oblast | Co doplnit nebo opravit | Co podklady skutečně unesou |
|---|---|---|
| Seznam / Shopify / Shoptet | Oddělit doložené účastníky od podmínek přijetí dalších e-shopů; přidat datum oznámeného stavu. | Účast některých obchodníků a technologická připravenost jsou doložené. Úplná pravidla vstupu ani otevřený nábor nikoli. |
| Běžné nabídky na Zboží.cz | Samostatně uvést registraci, odpovídající feed a kredit podle interního článku a jím citované nápovědy. | Jde o podmínky běžné inzerce, nikoli doložený úplný seznam podmínek agentního pilotu. Dohledatelný primární odkaz již je v interním podkladu: https://napoveda.sklik.cz/inzerce-nakupy/registrace-provozovny/ — v tomto auditu neotevřen. |
| Upgates | „v37 a 37.1 bez agentního nákupu“ změnit na „oznámení v37 a 37.1 agentní nákup ani UCP nezmiňují“. | Absence zmínky není doložená nepodpora celé platformy. MCP v37 je popsáno pro správu e-shopu. |
| UCP / MCP | Doplnit volitelné vystavení MCP serveru, primární REST a další možnost EP. | Mapování schopností na MCP není samo zpřístupněním nástrojů každému asistentovi. |
| Google / UCP | Chybí samostatný řádek konkrétní implementace Googlu. | Doplnit aktivní Merchant Center, produkty způsobilé pro checkout, formulář zájmu a integraci podle `zdroje/gdev-ucp.txt:184–192`. |
| ACP / Instant Checkout | Stávající podmínky USA, američtí prodejci Etsy a jedna položka zachovat a přidat tarify Plus/Pro/Free a podporovaný produkt. | Podmínky patří ke spuštění 29. 9. 2025. Oddělit je od následného vývoje produktu a od možností obecného protokolu ACP. |
| Předávání dat | „neveřejné“ nahradit „v použitých zdrojích nezjištěno“. | Není doložena ani úplná podoba předávaných dat, ani neexistence veřejných podmínek. |
| Universal Cart | „uživatelé v USA od 15. 10. 2026“ omezit na zprávu o tehdejším spuštění; doplnit neověřený listopadový stav. | TechCrunch potvrzuje oznámenou dostupnost v USA, nikoli kompletní aktuální seznam podporovaných a nepodporovaných zemí. |
| Druh dokladu | Ve sloupci „Primární zdroj“ odlišit MediaGuru a TechCrunch jako sekundární zdroje. | Primární znění tiskové zprávy Seznamu v podkladech chybí; není možné jej nahradit označením MediaGuru za primární zdroj. |

**Zbývající nejistoty:** úplná pravidla přijetí do testu, dostupnost vstupu pro další obchodníky, aktuální rozsah pilotů k 26. 11. 2026, přesná autorizace a chování objednávky, předávání zákaznických dat a listopadová regionální dostupnost Universal Cart nejsou dodanými podklady rozhodnuté. Přímé externí podklady ke změnám nákupu v ChatGPT během roku 2026 jsou ve složce zastoupeny pouze odkazujícím interním článkem. Opravy lze provést omezením tvrzení na doložená oznámení a výslovným přiznáním neověřených bodů; není nutné vymýšlet čísla, domýšlet podmínky ani tvrdit opačný stav.
