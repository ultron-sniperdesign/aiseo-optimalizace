# Vypořádání auditů — refresh `cloudflare-ai-bot-blocking` (23. 11. 2026)

Audity přes nezávislé Claude subagenty (Codex měl vyčerpaný limit do 24. 11. 2026 15:01, rozhodnutí Kamila
23. 11. 2026). Kolo 1 = fakta a tvrzení (`auditor-osa-fakta.md`), kolo 2 = jazyk, struktura, SEO, čtenářská hodnota
a kontrola tohoto vypořádání. Výsledky: `audit1-refresh-2026-11-23.md`, `audit2-refresh-2026-11-23.md`.
Research a tabulka podmínek: `research-refresh-2026-11-23.md`.

## Kolo 1 — fakta

**Verdikt: OPRAVIT PŘED PUBLIKACÍ, 25 nálezů (8 BLOCKER, 10 WARNING, 7 TIP).** Sporné pasáže jsem před opravou
dohledal v textech zdrojů (spravovaný robots.txt, změnový log, blogy 1. 7. a 30. 9., nápověda Search Console) — nálezy
sedí. Po každé opravě grep přes celý soubor včetně frontmatteru (Z17).

### Zapracováno

| # | Nález | Co se změnilo |
|---|---|---|
| 1 | Googlebot bez podmínky „podle oznámení“ | description „může podle oznámení Cloudflare vzít i Googlebot“; answer a tučný úvod „podle oznámení z července 2026 i Googlebot“; sekce o Googlebotu „Z mých podkladů je jmenuje jen oznámení z 1. 7. 2026 … od 15. 9.“; vydělávat ř. 185 totéž |
| 2 | „odmítnout trénink“ bez výhrady ke smíšeným robotům | všude „omezit“ (description, answer, H2 „Jak trénink omezit a Googlebot nechat“, rozcestník, shrnutí); nový odstavec: smíšené roboty Cloudflare řadí i k tréninku, zůstává jim jen žádost v robots.txt (Google-Extended, Applebot-Extended), „omezíte, ne vyloučíte“; sekce robots.txt „u robotů, které Cloudflare rozpozná jako tréninkové, ho vynutí; smíšeným zůstane jen žádost“; FAQ 2; vydělávat FAQ ř. 29, ř. 125 a 185 („omezujte“ + výhrada) |
| 3 | blokace Search a „Block on pages with ads“ u Training vezme Googlebot | rozcestník Search „Pak Search nezavírejte. Podle oznámení … patří i Googlebot, Applebot a Bingbot“; rozcestník reklama „na stránkách, kde Cloudflare rozpozná reklamu, zasáhne i smíšené roboty“; krok 4; řádek Search v tabulce; v sekci o Googlebotu odstavec o nejpřísnějším pravidle |
| 4 | závěry k 15. 9. silnější než podklady | řádek 15. 9. „Ve změnovém logu Bots k tomuto dni záznam není \| potvrzení nasazení jsem v dokumentaci ani ve změnovém logu Bots nenašel“; FAQ 3 začíná „Doložit to neumím.“, „ve změnovém logu Bots“, věta o doporučeném nastavení při přidání domény podle blogu 4. 11.; H2 „a co z ohlášení dokumentace neuvádí“; chyba 02 doplněna o přidání domény |
| 5 | krok 5: blokace v logu serveru nebude vidět | věta o 200/403 v logu pryč; „V logu serveru zablokované požadavky neuvidíte, Cloudflare je zastaví dřív, než na server dojdou. Prudký pokles návštěv Googlebotu tam ale poznáte“ (návrh „pokles znamená blokaci“ zmírněn — pokles může mít i jiné příčiny); nová chyba 05 „Hledat zablokovaný Googlebot v logu serveru“ |
| 6 | Search Console bez atribuce a podmínky | krok 5 „Podle nápovědy Search Console … jen pro služby typu Doména nebo s předponou adresy URL na kořenové úrovni. V tabulce Odpověď má převažovat OK (200) a nemá přibývat Jiná chyba klienta (4XX)“ (název tabulky podle nápovědy); úvod a hranice „do administrace Cloudflare ani Search Console“ |
| 7 | „ne podle jmen robotů“ v rozporu s dokumentací | úvod „takový návod už nestačí … jednotlivé roboty jde podle dokumentace dál blokovat jménem v AI Crawl Control“; H2 „Tři chování vedle jmen robotů“; odstavec „Kategorie jsou vrstva nad jmény robotů, ne jejich náhrada“; FAQ 1; shrnutí „vedle rozhodování o jednotlivých robotech“; chyba 03 „Blokovat jen podle jména robota“ |
| 8 | CTA slibuje měření, které audit nemá | CTA přesně podle návrhu: přístup AI robotů a co o vás říkají AI odpovědi, prioritní seznam úprav |
| 9 | vynucení popsané absolutně | „Roboty, které Cloudflare jako tréninkové rozpozná, zablokuje…“; „Robot, kterého Cloudflare rozpozná, se k obsahu nedostane“; FAQ 6 |
| 10 | Disallow bez BPS — dokumentace si odporuje | „Bez zapnutého Bot Preference Sync se podle stránky o robots.txt spravované zákazy nepřidají, takže volbu Disallow vždy kombinujte s ním.“ |
| 11 | chybí Content Signals | nová odrážka: Content Signals `search=yes, ai-train=no, use=reference`, výhrada podle čl. 4 směrnice 2019/790, hlášení Search Console a pozorování Cloudflare |
| 12 | krok 3: starý přepínač | „ověřte, jestli je pořád zapnutý; … Kde ho dnes najdete, dokumentace aktualizovaná 2. 11. 2026 neuvádí. Výsledek ověří poslední krok.“ |
| 13 | Pay Per Use nepřesně | řádek tabulky: kupec nabídne cenu, vydavatel přijme, nebo odmítne, kupec hlásí použití, Cloudflare účtuje a platí měsíčně; beta přímo s kupci a přihlášenými vydavateli; „po dohodě“ pryč |
| 14 | chybí možnost odmítnout zářijovou změnu | řádek 1. 7. „do 15. 9. šlo změnu v nastavení odmítnout“; FAQ 3 |
| 15 | Cloudflare Radar | sekce o Googlebotu a hranice: adresář na Cloudflare Radar, kde Cloudflare zařazení zveřejňuje, „jsem ověřit nemohl“ (ochrana proti robotům, neobcházeno) |
| 16 | FAQ 2 připisuje dokumentaci doporučení | „…podle dokumentace smíšené roboty z blokace na Cloudflare vynechává, proto je pro weby, kterým záleží na Googlu, rozumnější než Block. Smíšeným robotům ale zůstane jen žádost v robots.txt.“ |
| 17 | vydělávat: rozpor s blogem z 30. 9. | ř. 125 „Pay Per Use je od 30. 9. 2026 teprve v betě“; ř. 116 neutrálně „Zatímco placení zatím běžně dostupné není…“ (místo navrženého „v betě“ — zbytek článku ještě píše o čekací listině, „v betě“ by v něm vytvořilo nový rozpor); článek o Cloudflare už neslibuje víc o Pay Per Use ve vydělávat; refresh vydělávat ve frontě (Refresh 7) se seznamem zastaralých míst |
| 18 | vydělávat ř. 121: co se 15. 9. stalo | „Blokace smíšených robotů se ale podle oznámení týká i existujících domén, pokud blokují Training (doplněno 23. 11. 2026).“ — tvrzení o tom, co se 15. 9. (ne)stalo, pryč |
| 19 | „celý rozdíl“ | „hlavní rozdíl“ |
| 20 (část) | „v menu“ | „v Security → Settings“ |
| 21 | datace dokumentace | „dokumentace aktualizované 2. 11. 2026, načtené 23. 11.“; řádek tabulky „2. 11. 2026 (aktualizace dokumentace)“ |
| 22 | FAQ 5 | spravovaný robots.txt podle dokumentace na všech plánech |
| 23 | FAQ 7 | změna celé kategorie Agent přepíše jednotlivé nastavení; zdůvodnění z changelogu pryč, zůstalo „Cloudflare doporučuje je povolit“ |
| 24 | „nejčastější stav“ | „častý stav“ |
| 25 | zdroje | doplněna dokumentace AI Crawl Control; stránka pojmenovaná „robots.txt setting (Bot Preference Sync)“ |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 20 (část) | psát název filtru „Bot traffic“ | anglický název filtru hlásí `jazyk-check.py` jako anglicismus; krok 1 říká „vyfiltrovat nastavení pro roboty“ a drží se názvu sekce, který je jednoznačný |
| 17 (část) | zbytek zastaralých tvrzení o Pay Per Use a Monetization Gateway ve vydělávat (answer ř. 4, FAQ ř. 21 a 25, tabulky ř. 57, 70, 90, chyby, závěr ř. 183) | jiná vada než 15. 9. (A6: refresh je jeden článek); zapsáno do `REFRESH_QUEUE.md` k Refreshi 7 |

### Jazykový průchod

- `jazyk-check.py` na obou článcích 0 nálezů, `kontrola-komponent.py` 0 nálezů. Build v pořádku, komponenty
  vykreslené (Stepper 5 kroků, 5 chyb, 7 FAQ v JSON-LD, žádné syrové `**` ani markdown odkazy v HTML).
- Ruční oprava: „ve Statistikách procházení“ (předložka před skupinou souhlásek).

## Kolo 2 — jazyk, struktura, SEO, CTA a kontrola vypořádání

**Verdikt: OPRAVIT PŘED PUBLIKACÍ, 22 nálezů (1 BLOCKER, 11 WARNING, 10 TIP).** Kontrola vypořádání kola 1: sedí #1, 2, 4,
5, 7, 8, 10, 11, 13, 14, 16, 17, 18, 19, 20 (část), 21, 22, 24, 25; s výhradou #3, 6, 9, 12, 15; nesedí #23 (krok 4).
Zbytky opravených formulací auditor v souboru nenašel. Po opravách grep přes celý soubor (Z17): 4. a 2. pád „Googlebota“,
staré nadpisy, „víceúčeloví“, „zkontrolujte to“, superlativy — zbývají jen tvary 1. pádu.

### Zapracováno

| # | Nález | Co se změnilo |
|---|---|---|
| 1 | krok 4 bez varování, že změna celé kategorie Agent přepíše osobní agenty (#23 jen napůl) | krok 4 „Nastavte Search a Agent“: „U Agent nejdřív zvolte nastavení celé kategorie a teprve potom případně nastavte zvlášť nejčastější osobní agenty: změna celé kategorie podle dokumentace jejich jednotlivé nastavení přepíše.“ Podmínka doplněna i do tabulky podmínek v researchi |
| 2 | krátká odpověď nevysvětluje smíšené roboty | answer a tučný úvod: „…zasáhne i smíšené roboty, kteří slouží zároveň vyhledávání, podle oznámení z července 2026 i Googlebota…“ (60 slov) |
| 3 | FAQ nejsou sebestačné | otázky „Zablokuje Cloudflare při blokaci Training i Googlebota?“, „Co se u Cloudflare změnilo 15. září 2026?“, „Je řízení AI robotů dostupné i na bezplatném plánu Cloudflare?“, „Nahradí nastavení AI robotů v Cloudflare soubor robots.txt?“; odpovědi začínají celou větou (FAQ 1, 2, 3, 4, 5, 6, 7), poslední věta FAQ 3 přestavěná („U každé domény přitom podle dokumentace platí…“; místo navrženého „ale“, které by bylo druhé za sebou) |
| 4 | nadpisy a popis | H2 „…a Googlebota nezablokovat“, „…jak ověřit, že Googlebot prochází“, „…podle toho, co od AI chcete“, „Časté chyby při blokování AI robotů — od Googlebota po log serveru“ (klíčové slovo ve viditelném textu); description „…vzít i Googlebota. Jak trénink omezit bez ztráty Googlu.“ (159 znaků) |
| 5 | gramatika a dvojznačnosti | „Na otázku … se odpovídá líp než na …“; hranice rozdělené na dvě věty; „Googlebota proto může zablokovat i blokace kategorie Search a u Training i volba Block on pages with ads, a to na stránkách…“; „Podle změnového logu Cloudflare zařazení robotů zveřejňuje…“; „přivádí návštěvníky zpátky na web, a že…“ (i v tabulce) |
| 6 | skloňování Googlebota | 4. a 2. pád životně („Googlebota“) v článku i ve vydělávat ř. 29 a 185; 1. pád beze změny |
| 7 | varování před blokací Search v odrážce pro ty, kdo citace chtějí | nová odrážka „Uvažujete o blokaci Search, protože nechcete být v AI odpovědích?“ podle návrhu |
| 8 | krok 3 bez akce | „Je-li zapnutý a záleží vám na Googlu, vypněte ho a zkontrolujte, že Training zůstal na Disallow se zapnutým Enable Bot Preference Sync. Kde přepínač dnes je, dokumentace neuvádí, výsledek proto ověřte posledním krokem.“ |
| 9 | „nejde o citace, ale o vyhledávání“ odporuje slovníku | „nejde jen o citace…, ale i o klasické vyhledávání“ (Insight i chyba 01); první zmínka Googlebota v těle odkazuje na `/slovnik/googlebot/` |
| 10 | výhrady text přetěžují | „dokumentace aktualizovaná 2. 11. 2026“ jen v úvodu, FAQ 2 a 3 a v hranicích (ze 7× na 4×); Insight přepsaný podle návrhu; odstavec o kategoriích končí „ne jejich náhrada“; „Cloudflare k tomu nabízí samostatnou volbu“; chyba 02 podle návrhu; navíc vypuštěno nadbytečné „podle dokumentace“ v odstavci o kategorii Agent a uvnitř výčtu, který už má úvod „Podle dokumentace se pak stane tohle“ |
| 11 | závěr a podmínka Statistik procházení | shrnutí začíná praktickou pointou o Googlebotovi; tři kontroly zahrnují starý přepínač, druhá je kontrola; chyby 01 a 05 „(postup v kroku 5)“ |
| 12 | vydělávat FAQ začíná zpochybněným ohlášením | „U Cloudflare doopravdy platí hlavně tohle: blokace Training zasáhne…; … Jiné výchozí nastavení nových domén od 15. září Cloudflare v červenci jen ohlásil…“ („U Cloudflare“ doplněno, aby odpověď nestála na otázce) |
| 13 | postup krok za krokem | krok 1 rozkazovací způsob a „(Bot traffic)“; krok 2 „Nastavte kategorii Training“ s uložením a kontrolou robots.txt („do několika sekund“ ověřeno ve zdroji); krok 5 se slovesem a s atribucí „Podle nápovědy Search Console otevřete…“ |
| 14 | odstavec pod postupem | rozdělen: log serveru zvlášť, rozhraní a AI Crawl Control zvlášť |
| 15 | odrážka o reklamě | „Volba Block on pages with ads je určená pro weby s reklamou…“ |
| 16 | rada „změřit“ bez návodu | odkaz na `/blog/ai-roboti-zatez-webu/` („změřte, jak často vás procházejí a kolik návštěv vám přivádějí zpátky“) |
| 17 | definice kategorií | Search a Agent podle dokumentace (ověřeno ve zdroji), FAQ 1 „slouží zároveň vyhledávání i tréninku“ |
| 18 | tabulka a terminologie | všude „smíšení“; řádky 1. 7., 15. 9., 30. 9. a 2. 11. podle návrhu; H2 „a co z ohlášení v dokumentaci není“ |
| 19 | stylistika | všech 11 drobností podle návrhu, „CDN“ vysvětlena u prvního výskytu („Cloudflare jako CDN (síť, přes kterou se web doručuje) je vynucení“) |
| 20 | interní odkazy | druhý odkaz na robots.txt článek → heslo `/slovnik/robots-txt/`; „patří k tomu článek [Blokovat AI odpovědi Googlu?]“; zdroj „o nových volbách a smíšených robotech z 1. 7. 2026“; nový odstavec o kategorii Agent s odkazem na `/blog/roboti-vyvolani-uzivatelem/` |
| 21 | CTA | „Pokud si nejste jistí, jestli k webu mají přístup AI roboti…“ |
| 22 (část) | vydělávat ř. 116 a 125 | „Placení zatím běžně dostupné není, jedna ohlášená změna ale měla konkrétní datum.“; souvětí za „Prakticky:“ rozdělené |
| #20 kola 1 | „Bot traffic“ | přijato: v závorce za českým popisem ho `jazyk-check.py` nehlásí (ověřeno), krok 1 ho teď uvádí |

### Nezapracováno + důvod

| # | Návrh | Proč ne |
|---|---|---|
| 22 (část) | nadpis „Co se naopak mění doopravdy“ a otázka FAQ ve vydělávat | mimo jedinou vadu; auditor sám řadí do Refreshe 7, zapsáno do `REFRESH_QUEUE.md` |
| 18 (detail) | třetí sloupec řádku 15. 9. | přijato; věta kola 1 „potvrzení nasazení jsem … nenašel“ tím z tabulky zmizela, totéž ale nese druhý sloupec („záznam není“) a FAQ 3 |

### Jazykový průchod

- `jazyk-check.py` na obou článcích 0 nálezů, `kontrola-komponent.py` 0 nálezů, build v pořádku; v HTML žádné syrové
  značky, 7 FAQ v JSON-LD, všech 10 interních odkazů vede na existující stránky, na staré kotvy článku nic neodkazuje.

### C5b — cílené ověření

Nový zásadní nález kola 2 (#1, vynechaná podmínka u osobních agentů) a místa, kde kolo 2 vidělo výhradu k opravě kola 1
(#3, 6, 9, 12, 15), poslány jednou zpátky auditorovi kola 2 (C5b, jedno kolo navíc). Výsledek níž.

**Výsledek C5b** (`c5b-refresh-2026-11-23.md`): všechny ověřované body OBSTOJÍ, včetně BLOCKERu #1 (krok 4) a výhrad #3, 6,
9, 12, 15. NEOBSTOJÍ jen poslední věta FAQ ve `vydelavat-na-ai-robotech` ř. 29 („…Cloudflare v červenci jen ohlásil“ —
naznačovala, že se změna nenasadila; auditor ji vnesl vlastním návrhem v kole 2) → opraveno přesně podle návrhu:
„Jiné výchozí nastavení nových domén od 15. září Cloudflare v červenci ohlásil; dokumentace aktualizovaná 2. 11. 2026 ale
u nových domén uvádí všechny kategorie povolené.“ Doporučené doplnění rozcestníku (ř. 126, aby čtenář nedal Block on pages
with ads i na Search) zapracováno podle návrhu: „…Cloudflare ji v ohlášených výchozích hodnotách chtěl u Agent a Training,
Search nechával povolený.“ Auditor: po úpravě ř. 29 lze oba články publikovat. Další kolo není potřeba (C5b = jedno kolo
navíc, oprava je doslovné znění auditora). Po opravách `jazyk-check.py` 0, `kontrola-komponent.py` 0, build v pořádku.
