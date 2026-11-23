# Audit kola 2 (jazyk, struktura, SEO, CTA + kontrola vypořádání) — refresh `cloudflare-ai-bot-blocking` (23. 11. 2026)

> Auditor: nezávislý Claude subagent (čerstvý kontext) se zadáním `zadani-audit2.md` (auditor-system + osa jazyk a struktura),
> protože Codex měl vyčerpaný limit do 24. 11. 2026 15:01 — rozhodnutí Kamila 23. 11. 2026. Podklady ve složce úkolu
> `Dokumenty/CODEX/z-clauda/2026-11-23-audit2-cloudflare-ai-bot-blocking/` (článek po kole 1, výsledek kola 1, vypořádání,
> research, zdroje, slovník, tón značky). Čísla řádků míří na verzi článku po kole 1. Níže je výstup auditora beze změny.

VERDIKT: OPRAVIT PŘED PUBLIKACÍ

1 BLOCKER, 11 WARNING, 10 TIP. Řádky odkazují na aktuální clanek.mdx.

## BLOCKER

**1. [BLOCKER] Krok 4 nevaruje, že změna celé kategorie Agent přepíše nastavení osobních agentů. Vypořádání #23 je hotové jen napůl** (clanek.mdx ř. 109)
- Kolo 1 (#23) chtělo upozornění „FAQ 7 a krok 4“. Vypořádání uvádí jen FAQ 7, kde oprava sedí (ř. 35).
- Nejvíc na tom záleží právě v postupu krok za krokem. Kdo nejdřív nastaví jednotlivé osobní agenty a pak přepne celou kategorii, o jejich nastavení přijde. Dokumentace (docs-block-ai-bots.txt ř. 47): změna politiky Agents přepíše každého osobního agenta a jednotlivě je pak jde nastavit znovu.
- Tento řádek chybí i v tabulce podmínek v research.md, proto zřejmě vypadl.
- Nové znění kroku: `{ title: "Nastavte Search a Agent", desc: "Search nezavírejte, pokud vám záleží na vyhledávání: podle oznámení do něj patří i Googlebot, Applebot a Bingbot. U Agent nejdřív zvolte nastavení celé kategorie a teprve potom případně nastavte zvlášť nejčastější osobní agenty: změna celé kategorie podle dokumentace jejich jednotlivé nastavení přepíše." }`
- Původní název „Rozhodněte Search a Agent“ má navíc chybnou vazbu: rozhoduje se o něčem.

## WARNING

**2. [WARNING] Krátká odpověď bez zbytku článku nedává smysl, protože v ní není vysvětlené, co jsou „smíšené roboty“** (clanek.mdx ř. 4, totožně ř. 44)
- Pojem vysvětluje až ř. 81. Když AI odpověď cituje samostatně, čtenář nepochopí ani její konec „smíšeným robotům zůstane jen žádost“.
- Nové znění, 60 slov (přepočteno): „Cloudflare řídí AI roboty podle chování: Search, Agent a Training. U každého zvolíte blokaci všude, jen na stránkách s reklamou, nebo povolení. Blokace Training zasáhne i smíšené roboty, kteří slouží zároveň vyhledávání, podle oznámení z července 2026 i Googlebota. Kdo chce trénink omezit a Googlebota pustit, zvolí u Training Disallow s Bot Preference Sync; smíšeným zůstane jen žádost v robots.txt.“
- Ř. 44 upravit stejně.

**3. [WARNING] Odpovědi ve FAQ nejsou sebestačné** (clanek.mdx ř. 22–35)
FAQ jde samostatně do JSON-LD i do citací AI. Čtyři odpovědi začínají útržkem, který bez otázky nedává smysl, a dvě otázky stojí na „to/tohle“.
- Ř. 23: „Tři chování: Search, Agent a Training.“ → „Cloudflare u AI robotů rozlišuje tři chování: Search, Agent a Training.“
- Ř. 24: „Zablokuje blokace Training i Googlebot?“ („zablokuje blokace“ je pleonasmus) → „Zablokuje Cloudflare při blokaci Training i Googlebota?“
- Ř. 25: „Může.“ → „Blokace Training u Cloudflare může zasáhnout i Googlebota.“ Zbytek odpovědi beze změny.
- Ř. 26 → „Co se u Cloudflare změnilo 15. září 2026?“
- Ř. 27, začátek: „Doložit to neumím.“ → „Co se u Cloudflare 15. září 2026 skutečně změnilo, doložit neumím.“
- Ř. 27, poslední věta: „Že akce pro Training platí i pro smíšené roboty, dokumentace uvádí u každé domény.“ Vedlejší věta je vytčená dopředu, „uvádí u každé domény“ zní jako výčet a chybí, proč na tom čtenáři záleží → „Podle dokumentace ale u každé domény platí, že akce pro Training se týká i smíšených robotů; podle oznámení mezi ně patří i Googlebot.“
- Ř. 29: „Při volbě Block můžete přijít o víc než o citace.“ → „Při volbě Block u kategorie Training můžete přijít o víc než o citace v AI odpovědích.“
- Ř. 32: „Nahradí tohle nastavení robots.txt?“ → „Nahradí nastavení AI robotů v Cloudflare soubor robots.txt?“
- Ř. 33: „Ne, ale umí ho doplnit.“ → „Nastavení AI robotů v Cloudflare robots.txt nenahradí, ale umí ho doplnit.“
- Drobnější:
  - ř. 30 → „Je řízení AI robotů dostupné i na bezplatném plánu Cloudflare?“
  - ř. 35: „Ano, od 4. 11. 2026. U kategorie Agent jde…“ → „Od 4. 11. 2026 jde u kategorie Agent podle změnového logu nastavit zvlášť…“

**4. [WARNING] Nadpisy a popis** (clanek.mdx ř. 3, 89, 102, 116, 134)
- Ř. 89: „a <strong>Googlebot nechat</strong>“ je nedokončená vazba. Krátká odpověď má „pustit“, Insight na ř. 60 „nezablokovat“ → `Jak <span class="hl">trénink omezit</span> a <strong>Googlebota nezablokovat</strong>`
- Ř. 3: stejný problém v „Jak trénink omezit a Google nechat.“ → „Cloudflare dělí AI roboty na Search, Agent a Training. Blokace Training může podle oznámení Cloudflare vzít i Googlebota. Jak trénink omezit bez ztráty Googlu.“ (159 znaků)
- Ř. 102: „jak ověřit Googlebot“ se čte jako ověření pravosti robota. Přesně o tom je článek odkazovaný v chybě 03 → `Postup — <span class="hl">kde to v Cloudflare najdete</span> a <strong>jak ověřit, že Googlebot prochází</strong>`
- Ř. 116: „— rozcestník“ je štítek, ne pointa → `Jak se u každé <span class="hl">kategorie</span> rozhodnout — <strong>podle toho, co od AI chcete</strong>`
- Ř. 134: nadpis nemá klíčový pojem ani pointu. Hlavní klíčové slovo „cloudflare blokování ai robotů“ (ř. 13) navíc není nikde ve viditelném textu → `Časté <span class="hl">chyby</span> při blokování AI robotů — <strong>od Googlebota po log serveru</strong>`

**5. [WARNING] Gramatické chyby a věty, které jdou číst dvojím způsobem**
- Ř. 164: „Otázka „…“ se odpovídá líp než „…“.“ má chybnou vazbu, odpovídá se na otázku → „Na otázku „chci, aby si mě někdo mohl načíst a odpovědět na dotaz?“ se odpovídá líp než na „mám blokovat CCBot?“.“
- Ř. 158: věta se čte jako „jmenuje … jen červencové oznámení a adresář na Cloudflare Radar“ a význam se obrátí až na konci → „Z mých podkladů jmenuje Googlebota, Applebota a Bingbota jako smíšené roboty jen červencové oznámení. Adresář na Cloudflare Radar, kde Cloudflare zařazení robotů zveřejňuje, jsem ověřit nemohl.“
- Ř. 83: „Googlebot proto může zablokovat i blokace kategorie Search a volba Block on pages with ads u Training, ta na stránkách…“ Podmět i předmět mají stejný tvar a „ta na stránkách“ visí → „Googlebota proto může zablokovat i blokace kategorie Search a u Training i volba Block on pages with ads, a to na stránkách, kde Cloudflare rozpozná reklamu.“
- Ř. 81: „Zařazení robotů Cloudflare podle změnového logu zveřejňuje…“ se čte jako „roboti Cloudflaru“ → „Podle změnového logu Cloudflare zařazení robotů zveřejňuje i v adresáři na Cloudflare Radar; ten jsem ověřit nemohl.“
- Ř. 77, dvě vady:
  - chybí čárka za vloženou vedlejší větou před „a že“;
  - „vrací návštěvníky zpět“ je doslovný převod a pleonasmus (blog Cloudflare mluví o chování, které návštěvníky přivádí zpátky).
  → „…Cloudflare uvedl, že je to chování, které nejpřirozeněji přivádí návštěvníky zpátky na web, a že je v zájmu většiny majitelů webů ho povolit.“
- Ř. 71 vpravo: stejný převod, a „Podle Cloudflare chování…“ se navíc čte jako „podle chování Cloudflaru“ → „Podle Cloudflare nejpřirozeněji přivádí návštěvníky zpátky na web; blokace může podle oznámení vzít i Googlebota“.

**6. [WARNING] Skloňování „Googlebot“ nesedí se zbytkem webu**
- Článek skloňuje neživotně („vzít i Googlebot“, „návštěv Googlebotu“). Web jinde skloňuje životně: 10× „Googlebota“ v článcích i v hesle /slovnik/googlebot/. Robot je v češtině životný.
- Životný tvar zároveň odstraní dvojznačnost na ř. 83.
- Opravit 4. a 2. pád na těchto místech:
  - ř. 3; ř. 4 a 44 (2×); ř. 24; ř. 60 (2×); ř. 71, 79, 83, 86, 89;
  - ř. 114 („návštěv Googlebota“); ř. 122;
  - ř. 137 („nehlídat Googlebota“);
  - ř. 149 („Hledat zablokovaného Googlebota v logu serveru“);
  - ř. 158;
  - ve vydelavat-na-ai-robotech.mdx ř. 29 a 185.
- První pád (ř. 25, 81, 109, 121, 166) zůstává.
- Návrhy v tomto auditu už životné tvary používají.

**7. [WARNING] Varování před blokací Search je v rozcestníku v odrážce pro ty, kdo citace chtějí** (clanek.mdx ř. 121)
- Ohrožený je čtenář, který citace nechce a Search by zablokoval. Na otázku „Záleží vám, aby vás AI nástroje mohly citovat?“ odpoví ne a při skenování odrážku přeskočí.
- Nové znění: „- **Uvažujete o blokaci Search, protože nechcete být v AI odpovědích?** Podle oznámení z července 2026 do něj patří i Googlebot, Applebot a Bingbot, takže blokace Search může vzít i klasické vyhledávání. Kdo chce, aby ho AI nástroje citovaly, nechá Search povolený tak jako tak.“

**8. [WARNING] Krok 3 nejde provést, protože neříká, co dělat, když je přepínač zapnutý** (clanek.mdx ř. 108)
- Nové znění: „Pokud jste dřív zapnuli Block AI bots, zjistěte, jestli je pořád zapnutý; podle červencového oznámení blokuje smíšené roboty i on. Je-li zapnutý a záleží vám na Googlu, vypněte ho a zkontrolujte, že Training zůstal na Disallow se zapnutým Enable Bot Preference Sync. Kde přepínač dnes je, dokumentace neuvádí, výsledek proto ověřte posledním krokem.“

**9. [WARNING] Věta „nejde o citace v AI odpovědích, ale o klasické vyhledávání“ odporuje slovníku webu** (clanek.mdx ř. 86 a 138)
- Heslo googlebot v src/content/pages/slovnik.ts říká, že zablokovat Googlebota znamená zmizet z vyhledávání i z odpovědí AI od Googlu (Přehled od AI, režim AI).
- Konstrukce „ne X, ale Y“ tak X popírá neprávem. FAQ 4 to má správně („o víc než o citace“).
- Ř. 86 → „Pak nejde jen o citace v AI odpovědích, ale i o klasické vyhledávání Googlu.“
- Ř. 138 → „Pak nejde jen o AI citace, ale i o klasické vyhledávání.“
- K prvnímu výskytu Googlebota v těle článku (ř. 81) přidat odkaz na /slovnik/googlebot/.

**10. [WARNING] Výhrady přidané po opravách text přetěžují**
- Počty: „podle dokumentace“ 11×; „dokumentace aktualizovaná 2. 11. 2026“ 7× v textu (ř. 25, 27, 46, 60, 108, 141, 160); blokace jménem v AI Crawl Control 4× (ř. 23, 46, 77, 114).
- Datum stačí v úvodu (ř. 46), v tabulce, ve FAQ 2 a 3 (musí být sebestačné) a v hranicích (ř. 160).
- Ř. 60 rozdělit a zkrátit → „To byla jen polovina pravdy. Ohlášené výchozí hodnoty se týkaly nových domén (a dokumentace je neuvádí ani pro ně). **Blokace smíšených robotů se ale podle dokumentace týká každé domény, která Training blokuje.** Podle červencového oznámení to platí i pro starý přepínač Block AI bots. Proto teď článek jmenuje Googlebota a ukazuje, jak trénink omezit a Googlebota nezablokovat.“
- Ř. 77 ukončit za „…ne jejich náhrada.“ Kde je AI Crawl Control, říká ř. 46 i 114.
- Ř. 91: „Dokumentace k tomu nabízí samostatnou volbu.“ → „Cloudflare k tomu nabízí samostatnou volbu.“ Volby nabízí Cloudflare, ne dokumentace, a o dvě věty dál stojí „Podle dokumentace“ znovu.
- Ř. 141 → „Nové domény mají podle dokumentace všechno povolené a Cloudflare jim doporučené nastavení může nabídnout už při přidání domény; starší domény mají, co si kdo kdy zvolil.“
- Ř. 108 vyřeší nové znění z nálezu 8.

**11. [WARNING] Závěr potlačuje hlavní pointu refreshe a Statistiky procházení jsou mimo krok 5 uvedené bez podmínky (zbytek nálezu #6)** (clanek.mdx ř. 164, 166, 137, 149)
- Věta „Změna je hlavně pojmová“ zůstala z verze z 2. 8. Refresh přitom existuje kvůli praktickému riziku s Googlebotem.
- Tři kontroly vynechávají starý přepínač, kterému článek věnuje Insight i krok 3. Druhá „kontrola“ je navíc pokyn, ne kontrola.
- Podmínku dostupnosti Statistik procházení uvádí jen krok 5.
- Ř. 164 začít praktickou pointou: „Hlavní poučení je praktické: **blokace Training může podle oznámení Cloudflare vzít i Googlebota.** Pojmově se navíc vedle rozhodování o jednotlivých robotech rozhodujete o třech chováních.“ Pak pokračovat větou s otázkou, opravenou podle nálezu 5.
- Ř. 166 → „Prakticky si odneste tři kontroly. Podívejte se, jak má váš web nastavený Training a Search a jestli nemá zapnutý starý přepínač Block AI bots. Pokud trénink omezujete, zkontrolujte, že je to volbou Disallow se zapnutým Bot Preference Sync, ne volbou Block. A podle posledního kroku postupu si ve Statistikách procházení v Search Console ověřte, že Googlebot dál prochází.“
- Do vlastnosti `fix` na ř. 137 a 149 doplnit „(postup v kroku 5)“.

**12. [WARNING] Ve vedlejším článku začíná odpověď FAQ ohlášením, které článek sám zpochybňuje** (vydelavat-na-ai-robotech.mdx ř. 28–29)
- Pod otázkou „Co se tedy mění doopravdy?“ je první větou ohlášená změna výchozího nastavení, kterou dokumentace neuvádí. AI, která vezme první větu, ji podá jako skutečnou změnu.
- Odpověď navíc nevysvětluje, co jsou „smíšené roboty“.
- Nové znění: „Doopravdy platí hlavně tohle: blokace Training u Cloudflare zasáhne u každé domény i smíšené roboty, kteří slouží zároveň vyhledávání, podle oznámení z července 2026 i Googlebota. Trénink proto omezujte volbou Disallow se zapnutým Bot Preference Sync, která smíšené roboty z blokace na Cloudflare vynechává; u nich zůstane jen žádost v robots.txt. Jiné výchozí nastavení nových domén od 15. září Cloudflare v červenci jen ohlásil; dokumentace aktualizovaná 2. 11. 2026 u nových domén uvádí všechny kategorie povolené.“

## TIP

**13. [TIP] Postup krok za krokem** (ř. 106, 107, 110)
- Ř. 106: popis je v infinitivech, název kroku v rozkazovacím způsobu → „Podle dokumentace: v Security → Settings vyfiltrujte nastavení pro roboty (Bot traffic) a otevřete sekci AI Crawler and Agent access policies. Do 4. 11. 2026 se jmenovala Configure AI bot policies. Nastavuje se zvlášť pro každý web.“
- Ř. 107: krok počítá jen s přepnutím z Block a chybí uložení i kontrola výsledku. Podle dokumentace se spravovaný obsah v robots.txt objeví do několika sekund (managed-robots-txt.txt ř. 17).
  - název → „Nastavte kategorii Training“;
  - popis → „Chcete-li trénink omezit, zvolte u Training Disallow, zapněte Enable Bot Preference Sync a uložte. Je-li Training teď na Block nebo Block on pages with ads a záleží vám na Googlu, přepněte ho tak v každém případě. Pak otevřete soubor robots.txt svého webu: spravovaný blok se v něm podle dokumentace objeví do několika sekund.“
- Ř. 110: chybí sloveso pokynu → „V Search Console otevřete Nastavení služby → Statistiky procházení; podle nápovědy je přehled jen pro služby typu Doména nebo s předponou adresy URL na kořenové úrovni. V tabulce Odpověď má převažovat OK (200) a nemá přibývat Jiná chyba klienta (4XX).“

**14. [TIP] Odstavec pod postupem** (ř. 114)
- Míchá čtyři témata.
- „Držte se spíš názvu sekce v Security → Settings než konkrétní cesty“ si odporuje, protože Security → Settings je cesta.
- První odstavec o logu nechat, druhý napsat zvlášť: „Rozhraní Cloudflare se průběžně mění; když cestu z kroku 1 nenajdete, hledejte podle názvu sekce AI Crawler and Agent access policies. Přehled AI robotů, kteří k vám chodí, a blokaci jednotlivých robotů jménem najdete v AI Crawl Control.“

**15. [TIP] Odrážka o reklamě v rozcestníku** (ř. 122)
- Název volby je česky v uvozovkách, ačkoli článek názvy voleb drží v originále (krok 2, ř. 83).
- „Míří přesně na vás“ hned další věta vyvrací.
- Nové znění: „**Vyděláváte hlavně reklamou?** Volba Block on pages with ads je určená pro weby s reklamou. U Training ale na stránkách, kde Cloudflare rozpozná reklamu, zasáhne i smíšené roboty, podle oznámení i Googlebota, takže Training řešte raději volbou Disallow s Bot Preference Sync.“

**16. [TIP] Rada „změřit“ bez návodu** (ř. 123)
- Rada nemá odkaz a „nejlepší první krok“ je nedoložený superlativ.
- Nové znění: „**Nevíte, co vám AI kanál nese?** To je častý stav. Než začnete AI roboty blokovat, změřte, kolik vás procházejí a kolik návštěv vám přivádějí zpátky: [AI roboti: kolik vás projdou na jednu návštěvu zpět](/blog/ai-roboti-zatez-webu/).“
- Článek existuje. Odkaz zároveň zabrání dojmu, že měření dělá audit z CTA, které ho podle audit.ts nemá.

**17. [TIP] Definice kategorií** (ř. 71–72 vlevo, FAQ ř. 23)
- „Chování, které sbírá … aby z něj umělo odpovídat“ a „činnost jednající“ jsou nepřesné převody. Dokumentace u Search mluví o robotech, kteří obsah sbírají, aby se z něj později odpovídalo.
- Search → „Procházení, při kterém roboti sbírají nebo indexují obsah, aby z něj AI mohla později odpovídat“.
- Agent → „Automatický přístup, kterým AI v reálném čase jedná za konkrétního člověka“.
- Ve FAQ 1 totéž; navíc „slouží zároveň Search i Training“ → „slouží zároveň vyhledávání i tréninku“.

**18. [TIP] Tabulka a terminologie**
- Ř. 25 a 53 píšou „víceúčeloví roboti“, zbytek článku 23× „smíšení“. Ve FAQ 2 je obojí v jedné odpovědi, takže čtenář může myslet, že jde o dvě skupiny → všude „smíšení“.
- Ř. 53 vpravo mluví o „pasti“, která ještě nebyla zmíněná → „blokace smíšených robotů se týká každé domény s blokací Training, ne jen nové“.
- Ř. 54: třetí sloupec opakuje druhý → „na ohlášené výchozí hodnoty nespoléhejte a nastavení si zkontrolujte sami“.
- Ř. 55: střídá se „AI firma“ a „kupec“ a věta je řetěz spojení „a … a“ → „Pay Per Use v betě: AI firma (kupec) nabídne cenu za konkrétní použití obsahu, vydavatel ji přijme, nebo odmítne. Kupec pak použití sám hlásí, Cloudflare mu ho účtuje a vydavateli platí měsíčně (blog Cloudflare)“.
- Ř. 48 a 56: „z ohlášení dokumentace neuvádí“ se čte jako „ohlášení dokumentace“.
  - H2 → `… — <strong>a co z ohlášení v dokumentaci není</strong>`
  - ř. 56 → „ohlášené výchozí hodnoty v dokumentaci nejsou, past se smíšenými roboty ano“ (tuto formulaci kolo 1 výslovně přijalo).

**19. [TIP] Drobná stylistika**
- Ř. 46: „Pokud jste někdy četli návod ve stylu „…“, takový návod už nestačí.“ → „Návody ve stylu „zablokujte Bytespider a povolte GPTBot“ už nestačí.“
- Ř. 77: „Rozdíl mezi nimi není akademický.“ je kalk → „Rozdíl mezi nimi má praktický dopad.“
- Ř. 85: štítek „Pro e-shop nejdražší chyba“ je nedoložený superlativ → „Riziko pro e-shop: Googlebot“.
- Ř. 86: „zkontrolujte to“ → „projděte postup níže“.
- Ř. 98: „tytéž smíšené roboty Cloudflare řadí“ → „Cloudflare tytéž smíšené roboty řadí“.
- Ř. 127: „Nijak se to nevylučuje“ → „Nastavení v Cloudflare a robots.txt se nevylučují“.
- Ř. 130: „Robot, kterého Cloudflare rozpozná, se k obsahu nedostane“ platí jen pro zablokovaného robota; oprava #9 přestřelila na druhou stranu → „Robot, kterého Cloudflare rozpozná a zablokuje, se k obsahu nedostane“. Zkratku „CDN“ u prvního výskytu (ř. 130) jednou vysvětlit.
- Ř. 132: „stačí zapamatovat si“ → „stačí si zapamatovat“.
- Ř. 140: „Nechat výchozí nastavení a nevědět jaké“ → „Nechat výchozí nastavení a nevědět, jaké je“.
- Ř. 31: „všichni zákazníci včetně bezplatného plánu“ → „…včetně těch na bezplatném plánu“.
- Ř. 35: „Cloudflare doporučuje je povolit“ → „Cloudflare je doporučuje povolit“.

**20. [TIP] Interní odkazy**
- Ř. 129 je druhý odkaz na /blog/ai-crawler-robots-txt/ (první je na ř. 100) → nahradit heslem /slovnik/robots-txt/, nebo vypustit.
- Ř. 118: text odkazu „rozhodovací rámec kolem odhlášení“ („kolem“ je kalk; cílový článek se jmenuje „Blokovat AI odpovědi Googlu? Přepínač a co neumí“) → „patří k tomu článek [Blokovat AI odpovědi Googlu?](/blog/blokovat-ai-odpovedi-gsc/)“.
- Ř. 172: text odkazu „z 1. 7. 2026“ nic neříká, ostatní odkazy na blog mají popis → „[o nových volbách a smíšených robotech z 1. 7. 2026]“.
- Ke kategorii Agent se hodí /blog/roboti-vyvolani-uzivatelem/, vložit do souvislého textu (např. za ř. 77).

**21. [TIP] CTA** (ř. 170)
- Obsah, název i cena sedí s audit.ts: přístup AI robotů, co říkají AI odpovědi, prioritní seznam úprav, 3 600 Kč bez DPH, cena mimo text odkazu.
- Jen „Pokud nejdřív potřebujete zjistit“ na úplném konci po třech kontrolách nesedí → „Pokud si nejste jistí, jestli k webu mají přístup AI roboti a co o vás dnes říkají AI odpovědi, **[Audit AI viditelnosti](/audit/)** za 3 600 Kč bez DPH to projde a dá vám prioritní seznam úprav.“

**22. [TIP] Vedlejší článek, změněná místa** (vydelavat-na-ai-robotech.mdx)
- Ř. 116: „Zatímco placení zatím…“ – ozvěna „zatímco/zatím“ a změna byla jen ohlášená → „Placení zatím běžně dostupné není, jedna ohlášená změna ale měla konkrétní datum.“
- Ř. 125: souvětí za „Prakticky:“ má přes 40 slov → „Prakticky: máte-li web na Cloudflare, zkontrolujte, jak máte nastavený Training. Trénink omezujte volbou Disallow se zapnutým Bot Preference Sync; ta smíšené roboty z blokace na Cloudflare vynechává, takže u nich zůstane jen žádost v robots.txt.“
- Nezměněný H2 na ř. 114 („Co se naopak mění doopravdy“) a otázka na ř. 28 už po opravě s obsahem nesedí. Patří do Refreshe 7.

## Co je v pořádku
- `title` má 48 znaků a „Cloudflare“ vepředu (`seoTitle` není). `description` má 156 znaků. Krátká odpověď má 60 slov a začíná definicí. Prvních ~100 slov těla dává samostatnou odpověď.
- Všech 10 H2 má `hl` i `strong`, H3 v článku nejsou. Sled postup → rozcestník → chyby → hranice drží článek jako návod.
- CTA odpovídá produktu a ceně v audit.ts a neslibuje měření.
- Všech 6 cílů interních odkazů existuje.
- `jazyk-check.py` dává u obou článků 0 nálezů (spuštěno znovu).
- České uvozovky sedí. Názvy voleb jsou v originále, s výjimkou ř. 122.
- Zbytky opravených formulací v souboru nejsou nikde, ani ve frontmatteru a ve vlastnostech komponent: „odmítnout trénink“, „zůstat v Googlu“, „nepotvrdil“, „Méně, než“, „200, ne 403“, „ne podle jmen“, „v menu“, „celý rozdíl“, „k 2. 11.“.

## Stav vypořádání kola 1
- **Sedí:** #1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17 (změněná místa ve vedlejším článku; ř. 55 už na něj neodkazuje), 18, 19, 20 (část „v menu“, ř. 57 a 114), 21, 22, 24, 25.
- **Sedí, s výhradou z tohoto kola:**
  - #3: umístění v rozcestníku (nález 7);
  - #9: ř. 130 (TIP 19);
  - #12: oprava doslova podle návrhu, krok ale nemá akci (nález 8);
  - #15: dvojznačná věta na ř. 158 (nález 5).
- **Nesedí:** #23 – chybí v kroku 4 (nález 1, BLOCKER).
- **Částečně:** #6 – krok 5, úvod i hranice sedí, podmínka dostupnosti chybí na ř. 137, 149 a 166 (nález 11). Dávám WARNING, ne BLOCKER: kolo 1 navrhlo opravu jen pro krok 5 a hranice a uvedení nápovědy jako zdroje nesou úvod i hranice.
- **Nezapracováno #20 (část „Bot traffic“):** důvod neobstojí.
  - Slovník v § 8 počítá s anglickým originálem v závorce za českým termínem a `jazyk-check.py` takovou závorku maskuje.
  - Ověřil jsem, že „vyfiltrujte nastavení pro roboty (Bot traffic)“ projde bez nálezu, holé „Bot traffic“ ne.
  - Zadání navíc chce názvy z rozhraní v originále. Doplnit podle TIP 13.
- **Nezapracováno #17 (zbytek vedlejšího článku):** přijímám – jde o jinou vadu, platí A6 a je ve frontě k Refreshi 7. Jen pozor: `updated: "2026-11-23"` (ř. 11) teď dává punc aktuálnosti i nezměněné krátké odpovědi na ř. 4 a FAQ na ř. 21 a 25. Refresh 7 by proto neměl čekat dlouho.
