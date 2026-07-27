## BLOKERY

### 1. Kanibalizace je pořád vysoká. Tohle má blíž k výraznému updatu stávajícího článku než k obhajitelně samostatné URL.
Nový text sice deklaruje odlišení, ale tematicky pořád stojí uvnitř stejného intentu: „co je WebMCP, v jakém je stavu, musím něco dělat?“. To už stávající `/blog/lighthouse-ai-check/` podle zadání pokrývá.

**Citace:**
- „**Co WebMCP je a proč ho Lighthouse kontroluje, má Lighthouse Agentic Browsing. Tenhle článek neopakuje definici ani audit — zajímá ho něco jiného**“
- „**Co s tím dnes dělat**“
- FAQ: „**Musím WebMCP implementovat?**“
- FAQ: „**Je to opravdu tak náročné na implementaci?**“

To jsou přesně otázky, které už podle kontextu starý článek řeší:
- definice,
- experimentální stav,
- pro koho to je,
- musím implementovat?,
- priorita implementace.

Nový článek přidává jen tři nové vrstvy: standardizační timeline, deklarativní/imperativní rozdělení a kontrast se screenshot-click režimem. To je obsah na **novou silnou sekci** ve starém článku, ne nutně na novou URL.

**Natvrdo:** v aktuální podobě je to **hraniční kanibalizace**. Pokud nechcete dva články soupeřící o „WebMCP“, „musím implementovat WebMCP“, „co je WebMCP“, udělal bych jedno z toho:

- **Varianta A — lepší:** sloučit do `/blog/lighthouse-ai-check/` jako novou sekci „Stav standardu WebMCP k 7/2026“ a samostatnou URL nepouštět.
- **Varianta B — pokud URL chcete zachovat:** brutálně zpřesnit záběr a odstranit vše, co leze do definice / „musím implementovat“. Udělat z toho čistě:
  - standardizační stav,
  - architektura návrhu,
  - dopad na roadmapu.
  Bez FAQ typu „musím implementovat?“, bez znovuvysvětlování basics.

**Konkrétní oprava titulku a scope:**
- místo `WebMCP: kde ten standard je a co s ním dnes dělat`
- raději něco jako:  
  **`WebMCP v létě 2026: stav návrhu, dvě části specifikace a proč to ještě není implementační téma`**

Tím zúžíte intent a snížíte překryv.

---

### 2. Formulace o W3C jsou místy nepřesné až zavádějící.
Největší problém je, že text míchá „pracovní skupinu W3C“ a podklad mluví o **W3C Web Machine Learning Community Group**. To není totéž a u standardizačního článku je to zásadní.

**Citace problematických míst:**
- answer: „**draft zprávy pracovní skupiny W3C**“
- FAQ: „**Specifikaci formálně přijala pracovní skupina W3C pro strojové učení na webu**“
- body: „**Pracovní skupina publikovala draft své zprávy**“
- závěr: „**přijatý pracovní skupinou**“

Podle podkladu je správně:
- **Community Group**, ne obecně „pracovní skupina“,
- **Community Group Report**, ne neurčitě „zpráva pracovní skupiny“.

To není slovíčkaření. „Pracovní skupina W3C“ čtenář snadno přečte jako něco blíž formálnímu standardizačnímu procesu, než ve skutečnosti je.

**Konkrétní oprava:**
- všude nahradit:
  - „pracovní skupina W3C“ → **„W3C Web Machine Learning Community Group“**
  - „draft zprávy pracovní skupiny“ → **„draft Community Group Report“**
  - „přijato W3C“ → **„přijato v rámci W3C Community Group“**

**Příklad přepisu věty:**
- původně: „**K červenci 2026 je to draft zprávy pracovní skupiny W3C**“
- lépe: **„K červenci 2026 je to draft Community Group Report ve W3C Web Machine Learning Community Group, nikoli ratifikovaný standard W3C.“**

Tohle je pro mě blocker, protože článek stojí právě na přesnosti stavu standardu.

---

## VAROVÁNÍ

### 3. Korekce vlastní starší rady je v principu poctivá, ale opírá se o odhad, který text někde prodává moc jistě.
Pozitivum: článek dává brzdu.

**Citace:**
- „**Pro imperativní půlku to platí. Pro deklarativní nemusí**“
- „**Je to zpřesnění vlastní dřívější rady na základě novějšího návrhu, ne obrat: dokud standard není hotový, je i tenhle odhad předběžný.**“
- FAQ: „**Odhad nákladů se proto může ukázat jako nižší, než jsme dřív psali — ale dokud standard není hotový, je i tenhle odhad předběžný.**“

To je férovější než dělat, že jste se nikdy nesekli. Ale problém je v tom, že jinde text podsouvá skoro přímou implikaci:
- „**Ta druhá staví na běžných prvcích stránky, které dobře napsaný web už má.**“
- tabulka: „**Nižší — část práce je dobře napsané HTML**“

To už je o chlup víc než podklad. Podklad říká, že deklarativní část staví na běžných HTML prvcích a formulářích. Neříká automaticky, že náklady budou nízké u reálných webů. Mezi „staví na existujících prvcích“ a „není to náročné“ je kus neověřené reality:
- jak přesně bude browser/agent interpretovat,
- jak přísné budou požadavky,
- jak moc dnešní weby skutečně mají kvalitní semantiku,
- co všechno se bude muset upravit.

**Doporučení k tónu:**
změkčit tvrzení z „nižší“ na „potenciálně nižší“ a z „není to nový projekt“ na „nemusí to být nový projekt“.

**Konkrétní opravy:**
- „**Nižší — část práce je dobře napsané HTML**“  
  → **„Potenciálně nižší — pokud web už má kvalitní semantické HTML a formuláře“**
- „**není to nový projekt, ale důsledek pořádného HTML**“  
  → **„u části webů to nemusí být nový projekt, ale spíš důsledek už existujícího kvalitního HTML“**

Takto zůstane korekce poctivá a nebude to spekulace převlečená za závěr.

---

### 4. „Agenti dnes weby většinou obsluhují naslepo“ je užitečná zkratka, ale je zjednodušená.
Podklad ji podporuje, takže není vyloženě špatně. Jen text místy přehání jednotnost dnešního stavu.

**Citace:**
- FAQ: „**Dnes agenti weby většinou obsluhují naslepo: udělají si obrázek stránky a simulují kliknutí**“
- tabulka: „**Udělá si obrázek stránky a odhaduje z něj**“
- „**Dnešní režim je jednostranný: agent si vezme, co uvidí.**“

To je validní jako kontrast, ale pořád zkratka. U technického článku bych aspoň jednou explicitně přiznal, že jde o dominantní, ne jediný způsob interakce.

**Navržená mikrooprava:**
- „**Dnes agenti weby většinou obsluhují naslepo**“  
  → **„Dnes mnoho agentických nástrojů web obsluhuje nepřímo: z vizuální reprezentace stránky a simulovanými interakcemi.“**

Je to přesnější a méně buldozerové.

---

### 5. Užitečnost je obhájená, ale článek balancuje na hraně „jen shrnutí stavu bez akce“.
Silná stránka: neslibuje návod, když by byl brzo zastaralý. To je správně.

**Citace:**
- „**Návod na implementaci psaný v červenci 2026 by zastaral dřív, než by ho někdo použil, a proto tady žádný není.**“
- „**sledovat, neimplementovat, a mezitím dělat přístupnost**“

To je legitimní redakční rozhodnutí. Problém je, že „dělat přístupnost“ je příliš obecné a na webu, který prodává audit, je to až nezvykle bezzubé. Čtenář dostane správný závěr, ale málo konkrétního postupu.

**Chybí minimálně mini-checklist typu:**
- zkontrolovat accessible names u CTA a formulářů,
- ověřit labely a názvy tlačítek,
- porovnat vizuálně viditelné názvy se stromem přístupnosti,
- projít Lighthouse Agentic Browsing,
- neplánovat dedikovaný WebMCP projekt do roadmapy před stabilní podporou.

To už by byla skutečná akce bez rizika zastarání.

**Doporučený doplněk:**
přidejte na konec box „Co udělat tento týden“ s 4–5 body. Pak článek nebude jen status update.

---

### 6. CTA může chybět, ale chybí i jakýkoli produktový most. To je redakčně čisté, obchodně promarněné.
Na otázku „CTA chybí. OK?“ — **ano, z hlediska zaujatosti OK**. Dokonce je to plus: text nepůsobí jako sales přepadovka.

Ale současně máte v textu přirozené místo pro nenásilné navázání:
- „Kde si ověřím, jak je na tom můj web?“
- „V Lighthouse má kategorie Agentic Browsing…“

Tady by šel jemný most:
- interní odkaz na audit,
- nebo CTA až pod článkem, ne v těle.

Takže:
- **pro audit nezaujatosti: OK**
- **pro výkon obsahu: spíš promarněná příležitost**

---

## DOPORUČENÍ

### 1. Nejprve rozhodnout, jestli to má být nová URL vůbec.
Moje doporučení: **pokud nemáte jasný SEO důvod na samostatné rankování pro „WebMCP“, sloučit.**  
Jestli samostatnou URL držet chcete, musíte ji ještě víc odlišit.

**Co bych smazal, aby se snížila kanibalizace:**
- FAQ „**Musím WebMCP implementovat?**“
- FAQ „**Kde si ověřím, jak je na tom můj web?**“
- větu „**Co WebMCP je a proč ho Lighthouse kontroluje...**“
- závěrečný odkaz zpět na Lighthouse audit v takto silné podobě

To všechno vrací článek do stejného clustru jako starší URL.

**Místo toho přidat:**
- sekci „Co by se muselo stát, aby to bylo implementační téma“
- sekci „Jak poznat, že z cíle je skutečná podpora“
- sekci „Co je v návrhu ještě otevřené / nejisté“

Tím se z toho stane skutečně „stav standardu“, ne duplicita „co s WebMCP“.

---

### 2. Opravit terminologii standardizace všude, bez výjimky.
Tohle je nejkonkrétnější sada oprav.

**Nahradit přesné pasáže:**
- „**draft zprávy pracovní skupiny W3C**“
- „**pracovní skupina W3C pro strojové učení na webu**“
- „**Pracovní skupina publikovala draft své zprávy**“
- „**přijatý pracovní skupinou**“

**Za:**
- „**draft Community Group Report**“
- „**W3C Web Machine Learning Community Group**“
- „**publikován draft Community Group Report**“
- „**přijatý v rámci W3C Community Group**“

A ideálně jednou explicitně:
- **„Nejde o Recommendation ani ratifikovaný W3C standard.“**

---

### 3. Zjemnit odhad náročnosti deklarativní části.
**Citace k úpravě:**
- „**Nižší — část práce je dobře napsané HTML**“
- „**není to nový projekt, ale důsledek pořádného HTML**“

**Lepší verze:**
- „**Potenciálně nižší — pokud web už používá kvalitní semantické HTML a formuláře**“
- „**u dobře postavených webů to nemusí být samostatný projekt, ale spíš využití už existující struktury**“

To drží přesnost a zároveň pořád opravuje starší přepálenou radu.

---

### 4. Přidat konkrétní akční minimum, jinak závěr zůstane moc obecný.
Navržený box:

**Co udělat teď bez ohledu na WebMCP**
1. Projít v Lighthouse kategorii Agentic Browsing.  
2. Zkontrolovat názvy tlačítek, odkazů a formulářových prvků.  
3. Ověřit, že viditelný text akce odpovídá accessible name.  
4. Opravit chybějící labely, nejednoznačné CTA a rozbité formulářové toky.  
5. Nedávat WebMCP do roadmapy jako samostatný projekt, dokud nebude stabilní podpora a ustálenější spec.

To je použitelné a nevyžaduje spekulaci.

---

### 5. Zkrátit nebo smazat nejslabší místo: „Co má nahradit“ v současné podobě.
Není to špatná sekce, ale je nejslabší v poměru novost / přesnost / užitek. Kontrast „screenshot a click vs deklarované akce“ je užitečný jednou větou, ale tabulka to nafukuje a zvyšuje podobnost s vysvětlujícím evergreenem.

**Citace:**
- „**Dnešní režim je jednostranný: agent si vezme, co uvidí.**“
- „**Web říká, co nabízí a co ne.**“

To už je skoro interpretační esej, ne audit stavu standardu. Pokud potřebujete něco škrtat, šel bych nejdřív sem.

**Co bych udělal:**
- z tabulky udělat 1 odstavec,
- nechat jen jednu pointu:  
  **„Dnešní agentické ovládání webu je často nepřímé;