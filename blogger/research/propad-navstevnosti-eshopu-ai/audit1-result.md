**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Audit k 26. 11. 2026, kolo 1: věcná správnost a aktuálnost. Posouzen článek včetně frontmatteru, komponent a FAQ proti `research.md` a dodaným souborům v `zdroje/`. Web nebyl použit. Čísla MEGA DETAIL jsem nezávisle přepočítal. Článek ani podklady nebyly změněny. Řádky odkazují na původní dodané soubory.

Základní výpočty převážně souhlasí. Publikaci brání hlavně zobecnění vybraných vzorků na české e-shopy, chybějící podmínky některých čísel, tvrzení o neověřeném rozhraní a příliš silné závěry o sezónnosti a vyloučení vlivu AI. Níže odděluji chyby článku od rozporů uvnitř podkladů.

**1. [BLOCKER] Tvrzení o tom, co Search Console neukáže, nemá ověření rozhraním**

- **Citace:** `clanek.mdx:108`: „Search Console neukáže, u kterých dotazů se Přehled od AI zobrazil.“ Související pokyn v `clanek.mdx:83`: „V Search Console oddělte zobrazení, kliky a pozici“.
- **Zdroj:** `research.md:13` výslovně uvádí, že autor do rozhraní Search Console ani GA4 nevstoupil. `research.md:14` dokládá měření přes API; `zdroje/megadetail-export.txt:33–42` obsahuje agregace podle zařízení a stránek. `research.md:15` opakuje tvrzení o možnostech reportu, ale není samostatným ověřením. Obdobné tvrzení v `zdroje/audit.ts:495` je další text vlastního webu, nikoli doklad z UI.
- **Vada:** Export dokládá, jaká data jsou v exportu, nikoli všechny možnosti aktuálního rozhraní. Podle výslovného pravidla tohoto kola jde o blocker i tehdy, kdyby tvrzení o rozhraní věcně platilo. Nevytýkám tabulky vypočtené z API; ty mají odpovídající druh dokladu.
- **Nové znění pro ř. 108:** „V dodaných exportech podle zařízení a stránek nemáme údaj o tom, u kterých dotazů se zobrazil Přehled od AI. Z těchto podkladů proto jeho příspěvek k poklesu neoddělíme.“
- **Nové znění pokynu pro ř. 83:** „V datech Search Console porovnejte zobrazení, kliky a průměrnou pozici; zde vycházíme z exportu API.“ Tím se doporučení opře o skutečně použitou datovou vrstvu a nebude popisovat neověřenou obrazovku.

**2. [BLOCKER] Červen 2026 je první výskyt kanálu na vlastním e-shopu, nikoli doložené datum jeho zavedení v GA4**

- **Citace:** `clanek.mdx:75`: „nový kanál AI Assistant v GA4, který od června 2026 přesouvá relace z jiných kanálů“; `clanek.mdx:85`: „Ten v GA4 funguje až od června 2026“.
- **Zdroj:** `zdroje/ga4-whatsnew.txt:140–146`: oznámení „New AI Assistant traffic measurement“ je datováno 13. 5. 2026. `zdroje/megadetail-export.txt:20–21` dokládá 0 relací v květnu a 93 v červnu pouze u MEGA DETAIL. Rozdíl výslovně rozlišuje i `research.md:39` a interní článek `zdroje/clanek-webu-ai-navstevnost-konverze.mdx:58–65`.
- **Vada:** Pozorování jedné vlastnosti GA4 je povýšeno na podmínku fungování celé platformy. Ani květnové oznámení samo nedokládá den skutečného nasazení ve všech účtech.
- **Nové znění pro ř. 75:** „Změny třídění návštěv: Google oznámil kanál AI Assistant 13. 5. 2026; v našem měsíčním exportu má tento kanál první relace až v červnu 2026. Zlom v kanálové řadě proto nemusí znamenat změnu počtu návštěv.“
- **Nové znění pro ř. 85:** „Pro meziroční srovnání použijte stejné vymezení zdrojů AI v obou obdobích. Kanál AI Assistant Google oznámil 13. 5. 2026, ale na našem e-shopu evidujeme první relace v tomto kanálu až v červnu; starší návštěvy jsou v jiných kanálech.“

**3. [BLOCKER] Výklad měření vynechává parametry v URL a podmínku neplaceného odkazu**

- **Citace:** `clanek.mdx:29`: „GA4 vidí jen proklik z AI s rozpoznanou odkazující stránkou“ a „prokliky z Přehledu od AI a režimu AI počítá do organického vyhledávání“; stejně `clanek.mdx:58`. V témže odstavci: doporučení následované samostatným dohledáním „se nepromítne vůbec“.
- **Zdroj:** `zdroje/ga4-channels-en.txt:92–93` a `zdroje/ga4-channels-cs.txt:90–91` definují Organic Search jako návštěvy z **nereklamních** odkazů, včetně AI funkcí Googlu. `zdroje/ga4-channels-en.txt:252–254` připouští médium `ai-assistant` a popisuje automatické přiřazení podle rozpoznaného referreru. Interní podklad `zdroje/clanek-webu-ai-navstevnost-konverze.mdx:55–62` výslovně rozlišuje referrer, parametry v adrese a připsání poslednímu nepřímému zdroji; na ř. 62 obsahuje konkrétní odkaz na vysvětlení `utm_source` od OpenAI. Samotná tato externí stránka ve složce stažena není; tvrzení o URL parametrech zde má interní sekundární doklad.
- **Vada:** „Jen s odkazující stránkou“ je příliš úzké: zdroj může zůstat v parametru URL. U zařazení do organiky vypadla explicitní podmínka „nereklamní“. Samostatně dohledaná návštěva může být zaznamenána, jen bez doložené vazby na předchozí doporučení AI. Nejde o její úplnou nepřítomnost v analytice. Formulace o mobilních aplikacích musí zůstat připsaná Marketing Mineru, nikoli vystupovat jako univerzální pravidlo GA4.
- **Nové znění pro FAQ i blok na ř. 58:** „Zdroj AI lze v návštěvnosti rozpoznat, pokud se zachová odpovídající odkazující adresa nebo označení zdroje v URL. Podle Marketing Mineru se návštěvy z mobilních aplikací asistentů často k AI nepřiřadí. Podle nápovědy GA4 patří návštěvy z nereklamních odkazů v Přehledu od AI a režimu AI do Organic Search, nikoli AI Assistant. Když si zákazník obchod po doporučení AI vyhledá sám, návštěva se může zaznamenat, ale vliv předchozího doporučení z těchto dat nepoznáme.“

**4. [BLOCKER] Úvod a FAQ zobecňují omezené vzorky a vypouštějí známé podmínky čísel**

- **Citace:** `clanek.mdx:40`: „Přímé návštěvy a objednávky z AI asistentů tvoří u českých e-shopů v roce 2026 desetiny procenta a rychle rostou.“ `clanek.mdx:5` uvádí 0,6 % bez velikosti a výběru vzorku. `clanek.mdx:25` uvádí více než stovku e-shopů, ale vynechává doplněk pro Shoptet a obě konkrétní výhrady k datům Shoptetu.
- **Zdroj:** `zdroje/mg-shoptet.txt:116–117,135` vymezuje platformu Shoptet, průměrný podíl kolem 0,3 % a chybějící Přehledy od AI / část Gemini. `zdroje/mg-objednavky.txt:122–125` vymezuje více než stovku uživatelů doplňku Marketing Mineru pro Shoptet. Totéž stanoví tabulka podmínek `research.md:34–35`.
- **Vada:** Nejde o reprezentativní měření všech českých e-shopů. „Průměrný podíl“ také bez znalosti metodiky nelze zaměnit za podíl ze všech návštěv celé platformy. U Shoptetu +62 % vyjadřuje růst **počtu obchodů evidujících návštěvy**, nikoli doložené tempo růstu návštěvnosti či jejího podílu. Výhrady v těle neodstraňují věcně širší tvrzení v úvodu a samostatném FAQ.
- **Nové znění úvodu:** „Shoptet na konferenci v říjnu 2026 uvedl průměrný podíl přímých návštěv z AI kolem 0,3 %; nezahrnuje Přehled od AI ani část návštěv z Gemini. U více než stovky e-shopů s doplňkem Marketing Mineru pro Shoptet činil v červenci 2026 průměrný doměřený podíl objednávek z AI 0,6 %. Tato čísla nepopisují celý český trh.“
- **Cílené opravy dalších výskytů:** V `answer` na ř. 5 výslovně doplnit „u více než stovky e-shopů s jeho doplňkem pro Shoptet“ a výhrady k Shoptetu. FAQ na ř. 25 začít „Shoptet v říjnu 2026 uvedl průměrný podíl kolem 0,3 % přímých návštěv z AI na své platformě, u některých obchodů až 15 %; bez Přehledu od AI a části Gemini“ a 0,6 % podmínit stejným vzorkem a obdobím jako v úvodu. Nepřidávat odhad podílu pro celý trh.

**5. [BLOCKER] Marketing Miner: z průměrů skupin se stávají neupřesněné hodnoty a odhad jiných metrik vypadá jako korekce objednávek**

- **Citace:** `clanek.mdx:51`: „průměrný e-shop 0,6 %, čtvrtina nejviditelnějších 1,9 %, desetina 3 %; od ledna dvojnásobek“ a „skutečnost firma odhaduje na dvoj- až trojnásobek“.
- **Zdroj:** `zdroje/lupa-mm.txt:29–33` a `zdroje/mg-objednavky.txt:122–125`. Lupa výslovně říká, že nejviditelnější desetina byla **průměrně** na 3 %. MediaGuru vztahuje odhad 2–3× ke skutečným **návštěvám a tržbám**, nikoli k objednávkám. Dvojnásobek se týká počtu objednávek i jejich podílu od ledna do července 2026.
- **Vada:** Vypadly podmínky agregace; nejde o hranici pro zařazení do horní čtvrtiny/desetiny ani o stejný podíl každého obchodu. Odhad návštěv a tržeb je zasazen do řádku objednávek bez rozlišení metrik. Z něj nelze násobit 0,6 % na „skutečný“ podíl objednávek.
- **Nové znění číselné buňky:** „Červenec 2026: průměrný e-shop 0,6 % objednávek z AI; průměr horní čtvrtiny podle viditelnosti 1,9 %, horní desetiny 3 %. Počet objednávek i jejich podíl se podle firmy od ledna do července zdvojnásobily.“
- **Nové znění výhrady:** „Pouze doměřené přímé prokliky. Odhad 2–3× firma uvádí pro skutečné návštěvy a tržby přivedené AI; nejde o ověřený násobitel podílu objednávek.“

**6. [BLOCKER] APEK: chybí způsob sběru; rozdíl mezi 50 % a 31 % nemá prokázané jediné vysvětlení**

- **Citace:** `clanek.mdx:52`: „průzkum na 1 504 respondentech; AI hlavně jako rádce“; `clanek.mdx:53`: „jiná otázka než u APEK, proto jiné číslo“.
- **Zdroj:** `zdroje/lupa-apek.txt:26–30`: 50 % českých online nakupujících už AI **nějakým způsobem využilo** při výběru zboží či e-shopu; internetový sběr, 1 504 respondentů. `research.md:36` podmínku internetového sběru obsahuje. `zdroje/mg-shoptet.txt:120,131`: 31 % českých online nakupujících uvádělo používání AI před nákupem v průzkumu z počátku léta 2026. Velikost tohoto vzorku ani přesné znění dotazníku v dodaném zdroji není.
- **Vada:** APEK má známou, ale vynechanou podmínku sběru. Rozdíl nelze kauzálně připsat jen formulaci otázky: jde také o jiná šetření a období, jejichž plnou metodiku nemáme. „Už někdy využilo“ navíc není totéž jako pravidelné používání.
- **Nové znění řádku APEK:** „50 % českých online nakupujících uvedlo, že už nějakým způsobem využilo AI při výběru zboží nebo e-shopu; E-commerce Study 2026, internetový sběr, 1 504 respondentů, nejčastěji AI jako rádce.“
- **Nové znění výhrady u 31 %:** „Průzkum Shoptetu z počátku léta 2026; 31 % českých online nakupujících uvedlo používání AI před nákupem. Velikost vzorku zdroj neuvádí. Jde o jiné šetření než APEK; bez úplných dotazníků a metodiky nelze určit, co přesně rozdíl vysvětluje.“

**7. [BLOCKER] Srovnání konverzí vlastního e-shopu ztratilo období, vymezení kanálu a malý počet nákupů**

- **Citace:** `clanek.mdx:55`: „Na našem e-shopu začíná polovina relací z AI rovnou na produktu, z organiky jen 3 %; po srovnání stejného typu stránek se náskok AI zmenšil ze sedmnáctinásobku na necelý trojnásobek.“ Obdobně FAQ `clanek.mdx:31`.
- **Zdroj:** `zdroje/clanek-webu-ai-navstevnost-konverze.mdx:103–122`: období 15. 6.–30. 9. 2026, relační výchozí skupina kanálů, konkrétně **AI Assistant**, míra definovaná jako nákupy na relaci. Celkem 794 relací / 32 nákupů proti 42 789 / 100; vstup na produkt 408 / 26 proti 1 355 / 31. Zdroj upozorňuje na jeden e-shop, nejistotu malých počtů a zahrnutí AI funkcí Googlu v Organic Search.
- **Vada:** Čísla jsou početně správná, ale v listopadovém článku vedle říjnových exportů vypadají jako aktuální říjnové údaje o všech zdrojích AI. Odkaz nenahrazuje uvedení podstatných podmínek. „Stejný typ stránek“ je zde konkrétně **vstup na produkt**, nikoli úplné očištění rozdílu mezi kanály.
- **Nové znění pro ř. 55 a obdobně FAQ:** „Na MEGA DETAIL za 15. 6.–30. 9. 2026 začínalo na produktu 51 % relací kanálu AI Assistant a 3 % relací Organic Search. Poměr nákupů na relaci byl v celých kanálech asi 17× vyšší u AI Assistant; při omezení obou kanálů na vstup na produkt asi 2,8×. Produktové srovnání stojí jen na 26 a 31 nákupech v jednom e-shopu; Organic Search zahrnuje i nereklamní prokliky z AI funkcí Googlu.“

**8. [BLOCKER] Meziroční porovnání samo nevylučuje sezónnost; popis průběhu je příliš jednoznačný**

- **Citace:** `clanek.mdx:82`: „Když loni ve stejném období návštěvnost rostla a letos klesá, sezónou to nevysvětlíte.“ `clanek.mdx:91`: „Na sezónu to nevypadá: v roce 2025 organika od května do listopadu rostla, v roce 2026 od března klesá.“
- **Zdroj:** `zdroje/megadetail-export.txt:8–25`: v roce 2025 je mimo jiné pokles květen → červen 9 233 → 8 934 a srpen → září 10 417 → 10 229; v roce 2026 růst duben → květen 14 956 → 15 044 a červen → červenec 13 031 → 13 469. `research.md:26` sám uzavírá „ani sezónnost, ani AI z dat jednoznačně neplyne“.
- **Vada:** Celkový trend v obou letech je popsán přibližně správně, ale není souvislý. Hlavně lze mít současně sezónní vliv i jiný trend. Jedna meziroční dvojice ani opačný průběh dvou let sezonní složku nevylučují. To je metodická mez závěru, nikoli požadavek na novou statistiku.
- **Nové znění ř. 82:** „Porovnejte stejné úplné měsíce meziročně a průběh delší řady. Rozdílný vývoj dvou let ukazuje, že se neopakuje stejný celkový průběh; sám ale sezónní vliv nevylučuje.“
- **Nové znění ř. 91:** „Od května do listopadu 2025 organické relace celkově vzrostly z 9 233 na 13 743; od března do října 2026 celkově klesly ze 17 751 na 9 243. Průběh obou let se tedy liší, ale podíl sezónnosti na poklesu z této řady neurčíme.“

**9. [BLOCKER] Pokles zobrazení produktů není důkaz, že souvislost s AI lze vyloučit**

- **Citace:** `clanek.mdx:108`: „U produktů a kategorií naopak klesla zobrazení o 43 % — to je ztráta viditelnosti, ne nižší míra prokliku, a s AI odpověďmi ji spojit nejde.“
- **Zdroj:** `zdroje/megadetail-export.txt:38–41` dokládá zobrazení a kliky skupiny **ostatní**, zahrnující produkty, kategorie i jazykové verze. Obsahuje pokles zobrazení z 91 962 na 52 743 a růst CTR z 1,01 % na 1,40 %. Neobsahuje poptávku, pozice po dotazech ani údaj o výskytu AI odpovědí. `research.md:15` příčinu poklesu uvádí mezi neověřitelnými.
- **Vada:** Správně lze odmítnout vysvětlení této agregace samotným poklesem CTR, protože CTR vzrostlo. Nelze ale vyloučit vliv AI či určit, že jde právě o ztrátu pozic: nižší počet zobrazení připouští i změnu poptávky a skladby stránek/dotazů. Článek navíc užívá užší název skupiny než export.
- **Nové znění:** „U ostatních adres, které zahrnují produkty, kategorie i jazykové verze, klesla zobrazení o 43 %, zatímco CTR vzrostlo z 1,01 % na 1,40 %. Tuto změnu tedy nevysvětluje nižší CTR celé skupiny. Bez podrobnějšího rozkladu ale neoddělíme změnu poptávky, skladby dotazů a stránek či pozic ani případnou souvislost s AI.“

**10. [BLOCKER] Závěr o nevyrovnání ztráty musí zůstat omezený na doměřený přírůstek relací**

- **Citace:** `clanek.mdx:113`: „Jde říct, že kliky z Googlu klesly při vyšším počtu zobrazení článků a že AI asistenti ztrátu zdaleka nevyrovnávají.“ Výpočet v `clanek.mdx:110` je naproti tomu vymezen podstatně lépe.
- **Zdroj:** `zdroje/megadetail-export.txt:13,25,27,29–31`: doměřené zdroje AI +279 relací a +8 objednávek, Organic Search −2 967 relací a −13 objednávek. `zdroje/ga4-channels-en.txt:79,93` vymezuje AI Assistant a zahrnutí nereklamních prokliků z AI funkcí Googlu do Organic Search. `zdroje/mg-objednavky.txt:123–124` vysvětluje neúplné zachycení vlivu AI.
- **Vada:** Výrok bez upřesnění rozsahu zní jako závěr o celkovém vlivu AI a všech ztrátách. Doklad unese účetní porovnání dvou změn doměřených relací. Nejde o důkaz, které návštěvy či objednávky AI nahradila, a porovnávaná organika sama obsahuje i AI funkce Googlu. U objednávek je poměr změn úplně jiný a počty malé.
- **Nové znění pro ř. 113:** „Mezi říjnem 2025 a říjnem 2026 klesly kliky z Googlu při vyšším počtu zobrazení článků. Přírůstek doměřených relací z vyjmenovaných zdrojů AI, 279 relací, početně odpovídá 9,4 % úbytku 2 967 relací Organic Search. To nevyjadřuje celý vliv AI ani neprokazuje nahrazení konkrétních návštěv; Organic Search zahrnuje i nereklamní prokliky z AI funkcí Googlu.“

**11. [WARNING] Přehled aktualizací není úplný k deklarovanému datu 26. 11. 2026**

- **Citace:** `clanek.mdx:73` končí „10. 11. začala další jádrová“; `clanek.mdx:113` pracuje se dvěma jádrovými a třemi spamovými aktualizacemi.
- **Zdroj:** `zdroje/status-ranking.txt:16–39`: 24. 11. je uvedena další položka **„December 2026 core update“**, 10. 11. listopadová s délkou 13 dní a 20 hodin; panel obsahuje také spamovou aktualizaci od 24. 3. `research.md:38` listopadovou položku z 24. 11. zná.
- **Vada:** Data dvou jádrových a tří spamových aktualizací **od 27. 3. do začátku října** jsou správná. Nejde tedy o chybný počet v tomto přesně vymezeném okně. Článek ale připojuje listopad a přitom vynechává nejnovější záznam, ačkoli deklaruje stav k 26. 11. Neobvyklý prosincový název u listopadového data není oprávnění zdroj potichu opravovat. Listopadové aktualizace nemohou vysvětlovat říjnové výsledky.
- **Nové znění pro ř. 73:** „Pro říjnové srovnání zvažte jádrové aktualizace od 27. 3. a 21. 5. 2026 a spamové aktualizace od 24. 6., 18. 8. a 24. 9. Při rozboru března nezapomeňte ani na spamovou aktualizaci od 24. 3. Panel k 26. 11. dále uvádí listopadovou jádrovou aktualizaci od 10. 11. a položku nazvanou ‚December 2026 core update‘ od 24. 11.; ty už do říjnového srovnání nezasahují. Časový souběh sám nedokazuje dopad na tento e-shop.“

**12. [WARNING] „Nenašel jsem“ se mění v „nikdo nedoložil“; frekvence citování není doložena**

- **Citace:** `clanek.mdx:65`: „znamená to, že číslo pro celý trh nikdo nedoložil“. `clanek.mdx:40`: „Čísla o ‚propadu kvůli AI‘ většinou pocházejí z výroků, ne z měření“; `clanek.mdx:63`: „Nejčastěji citované číslo…“ a nadpis na ř. 61 „z výroků, ne z měření“.
- **Zdroj:** `zdroje/mg-pokles2025.txt:111–115` obsahuje jeden konkrétní výrok a zahraniční údaj bez uvedeného zdroje. `research.md:27` uvádí výsledek autorova hledání, nikoli vyčerpávající inventuru českých studií či četnosti citací. **Bez zdroje ve složce:** tvrzení, že nikdo nic nedoložil nebo že jde o nejčastější citaci.
- **Vada:** Absence nalezeného dokladu není důkaz univerzální absence. Nezveřejněná metodika také neprokazuje, že původní výrok nevycházel z nějakého interního měření. Článek může zpochybnit ověřitelnost a reprezentativnost výroku, ne doložit, že žádné měření neexistovalo.
- **Nové znění pro ř. 65:** „V podkladech použitých pro tento článek nemám veřejné české měření, které by oddělilo příspěvek AI k poklesu návštěvnosti e-shopů. To není důkaz nulového vlivu ani důkaz, že jiné podklady neexistují.“
- **Nové znění souvisejících míst:** Ř. 40: „Citovaný údaj o propadu o 30–40 % je ve zdroji výrokem bez zveřejněné metodiky a dat.“ Ř. 63 začít „Jeden z citovaných údajů…“. Druhou část nadpisu na ř. 61 nahradit „výrok bez zveřejněných dat“.

**13. [WARNING] Průměrné pozice po zařízeních nejsou kontrolou stejných dotazů a stránek**

- **Citace:** `clanek.mdx:98`: „mobil beze změny, počítač lépe“; `clanek.mdx:100`: „pozice zůstala stejná nebo se zlepšila: lidé web ve výsledcích viděli častěji, ale klikali méně“; `clanek.mdx:83`: „pozice stejná a kliky nižší: lidé klikají méně“.
- **Zdroj:** `zdroje/megadetail-export.txt:34–35`: mobil 5,5 → 5,7, počítač 11,2 → 6,1. Jde o průměry přes celé skupiny zařízení; export neobsahuje stejné dvojice dotaz–stránka ani jejich pozice. Článek změnu skladby dotazů na ř. 108 správně připouští, ale předchozí formulace jsou jistější.
- **Vada:** Mobilní průměr není přesně beze změny. Změna průměrů neříká, zda se udržely pozice stejných stránek pro stejné dotazy, ani že stejní lidé web viděli častěji. Počet zobrazení není počet unikátních lidí. Tato omezení vyplývají z agregace dodaných dat, nikoli z dodatečné domněnky o funkcích platformy.
- **Nové znění pro ř. 98–100:** „Průměrná pozice na mobilu se mírně zhoršila z 5,5 na 5,7 a na počítači se zlepšila z 11,2 na 6,1. Celkem přibylo evidovaných zobrazení a ubylo kliků. Jde však o agregované údaje s možnou změnou skladby dotazů a stránek, nikoli o kontrolu stejných výsledků vyhledávání.“
- **Nové znění části ř. 83:** „Pokud při srovnatelných dotazech, stránkách a zařízeních zůstávají zobrazení i pozice podobné, ale ubývají kliky, klesá míra prokliku. Samotné souhrnné průměry takovou srovnatelnost nezaručují.“

**14. [WARNING] Podklad má rozpor 417 versus 418 relací AI Assistant; správný součet zdrojů je přesto 423**

- **Citace:** `clanek.mdx:110`: „423 relací a 14 objednávek“. Samotná tato čísla odpovídají rozpisu zdrojů, ale článek neuvádí omezení konzistence podkladů.
- **Zdroj:** `zdroje/megadetail-export.txt:25` uvádí pro kanál AI Assistant 417 relací. Na ř. 31 jsou však pod tímto kanálem 389 z ChatGPT + 28 z Gemini + 1 z Claude = **418**. Včetně 2 relací ChatGPT a 3 Perplexity v Unassigned je součet zdrojů **423**. Rozpor přebírá `research.md:48`.
- **Vada:** Jde o rozpor dvou dodaných výstupů, nikoli o prokázanou chybu součtu v článku. Podklady neumožňují určit příčinu a není správné přepsat 423 na 422 ani zdrojový řádek svévolně upravit. Odchylka jedné relace závěr o 9,4 % materiálně nemění.
- **Nové znění poznámky za odstavcem na ř. 110:** „Součty zdrojů AI vycházejí z jejich rozpisu. Dodaný souhrn kanálu AI Assistant se v říjnu 2026 od součtu jeho zdrojových řádků liší o jednu relaci (417 oproti 418); důvod z podkladů neurčíme. Celkem 423 relací ze zdrojů AI odpovídá jejich rozpisu.“

**15. [WARNING] +62 % souhlasí s publikovaným tvrzením, ale není reprodukovatelné z publikovaných počtů obchodů**

- **Citace:** `clanek.mdx:50`: „obchodů s takovými návštěvami meziročně o 62 % víc“.
- **Zdroj:** `zdroje/mg-shoptet.txt:116,136` uvádí +62 %, ale také 11 600 obchodů proti 7 100. Výpočet z těchto publikovaných počtů je `(11 600 / 7 100 − 1) × 100 = 63,38 %`.
- **Vada:** Článek zdroj cituje správně; nekonzistence je uvnitř mediálního podkladu. Není doloženo, zda ji způsobilo zaokrouhlení vstupních počtů, jiný základ nebo chyba. Proto není oprávněné bez výhrady vydávat +62 % za nezávisle ověřený výpočet ani ho „opravit“ na přesný růst 63,38 %.
- **Nové znění buňky:** „Podle citovaného výstupu Shoptetu přibylo meziročně 62 % obchodů evidujících návštěvy z AI. Publikované počty 11 600 a 7 100 s tímto procentem přesně nesouhlasí; výpočet z nezaokrouhlených dat není k dispozici.“

**16. [WARNING] Pokles CTR informačních stránek není doloženou nutnou podmínkou pro řešení AI viditelnosti**

- **Citace:** `clanek.mdx:118`: „Teprve když míra prokliku klesá u informačních stránek při stejných pozicích, má smysl řešit, jak se dostat do samotných AI odpovědí.“ Související `clanek.mdx:5`: „Propad organiky jde AI přičíst jen po vyloučení sezóny, aktualizací Googlu a změn na webu.“
- **Zdroj:** Dodané exporty ukazují souběh změn, nikoli nutnou podmínku přínosu práce na AI viditelnosti. `research.md:15,26` připouští neoddělenou příčinu. **Bez zdroje ve složce:** uvedená nutná podmínka i kauzální připsání po pouhém vyloučení několika alternativ.
- **Vada:** Z pracovního diagnostického signálu vzniká univerzální rozhodovací pravidlo. AI viditelnost může být relevantní i pro obchod bez informačních stránek nebo bez poklesu CTR; doložení příčiny poklesu a rozhodnutí sledovat AI viditelnost jsou dvě různé otázky. Ani vyloučení vyjmenovaných alternativ samo není důkazem vlivu AI.
- **Nové znění pro ř. 118:** „Pokles CTR informačních stránek při srovnatelných pozicích je důvod prověřit změny ve výsledcích vyhledávání včetně AI odpovědí, nikoli důkaz jejich vlivu. Zájem o vlastní AI viditelnost na tomto signálu nezávisí.“
- **Nové znění konce `answer`:** „Ze samotného poklesu organiky nelze určit vliv AI; porovnání sezóny, aktualizací Googlu a změn na webu pomůže prověřit další vysvětlení, ale samo příčinu neprokáže.“

**Kontrola čísel, která jsou v pořádku**

| Údaj článku | Nezávislý přepočet / opora | Výsledek |
|---|---|---|
| Organic Search 12 210 → 9 243 relací | `zdroje/megadetail-export.txt:13,25` | −2 967; −24,30 %, zaokrouhlení na −24 % správné |
| Organické objednávky 35 → 22 | tentýž soubor, ř. 27 | −13; −37,14 %; článek správně uvádí absolutní úbytek |
| Search Console 9 993 → 7 586 kliků | tentýž soubor, ř. 34–35; souhlasí i součty zařízení | −24,09 %, uvedených −24 % správně |
| Zobrazení 304 429 → 334 685 | tentýž soubor, ř. 34–35 | +9,94 %, uvedených +10 % správně |
| Celkové CTR 3,28 % → 2,27 % | kliky / zobrazení | 3,28254 % → 2,26661 %, rozdíl −1,01593 p. b.; uvedených −1,0 p. b. správně |
| Články: kliky −25 %, zobrazení +22 % | tentýž soubor, ř. 39 | −24,66 % a +21,93 %; správně |
| Články: CTR 3,80 % → 2,35 % | 8 922 / 234 656 a 6 722 / 286 124 | 3,80216 % → 2,34933 %; správně |
| Ostatní: kliky −20 %, zobrazení −43 % | tentýž soubor, ř. 40 | −19,89 % a −42,65 %; správně |
| Ostatní: CTR 1,01 % → 1,40 % | 925 / 91 962 a 741 / 52 743 | 1,00585 % → 1,40493 %; správně |
| Domovská stránka: kliky −27 %, zobrazení −40 % | tentýž soubor, ř. 41 | −27,46 % a −39,84 %; správně |
| Domovská stránka: CTR 2,15 % → 2,60 % | 193 / 8 956 a 140 / 5 388 | 2,15498 % → 2,59837 %; správně |
| Zdroje AI 2025 | tentýž soubor, ř. 30 | 87 + 50 + 5 + 1 + 1 = 144 relací; 3 + 3 = 6 objednávek |
| Zdroje AI 2026 | tentýž soubor, ř. 31 | 389 + 2 + 28 + 3 + 1 = 423 relací; 13 + 1 = 14 objednávek; kanálový rozpor řeší nález 14 |
| „Zhruba desetina“ ztracených relací | (423 − 144) / (12 210 − 9 243) | 279 / 2 967 = 9,4034 %; správně, pokud jde jen o početní porovnání doměřených změn |
| 17× → necelé 3× po omezení vstupů na produkt | `zdroje/clanek-webu-ai-navstevnost-konverze.mdx:103–122` | (32/794)/(100/42 789) = 17,24×; (26/408)/(31/1 355) = 2,785×; 408/794 = 51,39 %, 1 355/42 789 = 3,17 %; chybějící podmínky řeší nález 7 |

Další ověřené body:

- **Shoptet:** 0,3 %, až 15 %, relativní konverze +29 % proti průměru a +50 % proti organice i 76 % nových zákazníků odpovídají `zdroje/mg-shoptet.txt:116–118,135–140`. Nejde o procentní body. Období a přesný vzorek konverzních údajů ani definici „nového zákazníka“ mediální zdroj nedodává; nelze je domýšlet. Obecná výhrada k dostupnosti metodiky na `clanek.mdx:42` je užitečná. Výhrady bez Přehledu od AI / část Gemini jsou v hlavní tabulce správně.
- **Marketing Miner:** 0,6 / 1,9 / 3 % i zdvojnásobení odpovídají oběma mediálním zdrojům; jejich rozsah a odhad 2–3× je nutné opravit podle nálezu 5. Údaj **až 5 %** je ve zdrojích (`zdroje/lupa-mm.txt:30`, `zdroje/mg-objednavky.txt:125`), ale článek ho nepoužívá; jeho vynechání není chyba a není důvod ho povinně doplňovat.
- **APEK:** 50 % a 1 504 respondentů odpovídají `zdroje/lupa-apek.txt:26,30`. Je správné nezaměňovat použití AI při výběru s přímým proklikem či objednávkou z AI.
- **Výrok z roku 2025:** 30–40 % je skutečně citovaný výrok, nikoli publikované měření trhu (`zdroje/mg-pokles2025.txt:113`). Zahraničních −25 % je na ř. 114 uvedeno bez konkrétního zdroje a navíc s podmínkou „webů, které včas nezareagovaly“. Článek údaj nepředkládá jako ověřený benchmark; tento odstup je správný. Pokud by jej rozváděl, musí zachovat i onu podmínku a označit ji za tvrzení původního textu, nikoli za doloženou příčinu.
- **Neúplný listopad 2026:** Článek jej nepoužívá jako celý měsíc pro meziroční výpočet. To odpovídá výhradě v `zdroje/megadetail-export.txt:26`.
- **Rozdíl agregací Search Console:** Upozornění na odlišné součty po stránkách odpovídá exportu na ř. 38–42. Článek tyto součty neslévá s celkem vlastnosti.
- **Pravidlo anonymizace:** V článku nejsou uvedena jména osob ani konkrétních cizích měřených e-shopů. Vlastní MEGA DETAIL je v zadání výslovně povolen. Zdroje dat Shoptet, Marketing Miner a APEK jsou pojmenovány oprávněně.
- **CTA — kontrola pouze na blocker:** Název Audit AI viditelnosti, 3 600 Kč bez DPH, výstup do pěti pracovních dní od úhrady a schůzka 30–60 minut v dohodnutém termínu souhlasí se `zdroje/audit.ts:61,98–100,293,348–362,433–439`. Tady není rozpor ani neexistující produkt.

**Co doplnit či opravit v tabulce podmínek a co zůstává nejasné**

Tabulka podmínek **existuje** (`research.md:30–39`); není správné tvrdit, že chybí celá. Ne všechny její podmínky však přešly do článku. Hlavně APEK / internetový sběr a rozdíl oznámení kanálu / první vlastní data jsou už v briefu, ale článek je nerespektuje.

- **Shoptet:** Doplnit samostatné vymezení +62 % jako růstu počtu obchodů evidujících AI návštěvy, nikoli růstu samotných návštěv. Zaznamenat vnitřní nesoulad s 11 600 / 7 100. U 0,3 % zachovat „průměrný podíl“, přesné vážení a období označit za neuvedené, pokud nejsou v podkladu. Pro 76 % nových zákazníků doplnit zdroj a neznámou definici/období. Pro 31 % doplnit české online nakupující, počátek léta 2026 a nezveřejněnou velikost vzorku. Nevyžaduji doplnění neexistujícího přesného čísla.
- **Marketing Miner:** Doplnit, že 1,9 a 3 % jsou průměry vybraných skupin; rozlišit zdvojnásobení počtu a podílu objednávek od ledna do července. Řádek 35 opravit tak, aby 2–3× označoval firemní odhad návštěv a tržeb podle MediaGuru, nikoli neurčené „skutečnosti“ nebo podílu objednávek.
- **Konverze MEGA DETAIL:** Stávající řádek 37 odkazuje na výsledek, ale postrádá období 15. 6.–30. 9. 2026, kanál AI Assistant, definici nákupy/relace, omezení na vstup na produkt a počty 26 / 31. Jde o samostatný vzorek odlišný od říjnového srovnání; podklad je interní článek, nikoli detailní surový export konverzí v této složce.
- **GA4:** Rozšířit řádek 39 o možnost zdroje z URL parametrů, alternativu média `ai-assistant`, podmínku nereklamních prokliků pro Organic Search a rozlišení dokumentace od pozorování konkrétního účtu. Pro úplnější popis připsání návštěv bez referreru lze použít již konkrétně uvedený odkaz v interním podkladu: `https://support.google.com/analytics/answer/11080067`; jeho cílový obsah nebyl v tomto auditu otevírán a stažená primární stránka ve složce není. Bez tohoto rozšíření je bezpečnější zůstat u užšího znění z nálezu 3.
- **Search Console / UI:** Tabulka nemá samostatný řádek o tvrzené absenci údajů po dotazech. Nepřebírat tvrzení z vlastní prodejní stránky jako ověření rozhraní. V aktuální verzi lze problém uzavřít omezením tvrzení na obsah dodaných exportů; není nutné předstírat, že UI někdo zkontroloval.
- **Aktualizace Googlu:** Řádek 38 chybně shrnuje spamové aktualizace jako přibližně čtrnáctidenní. Dodaný panel uvádí 24. 3. 19 h 30 min, 24. 6. 2 dny 1 h, 18. 8. 2 dny 16 h a 24. 9. 13 dní 16 h (`zdroje/status-ranking.txt:22–39`). Článek tyto délky nepřebírá, proto nejde o samostatný nález proti článku. Zachovat odlišné časové okno říjnové analýzy a aktuální listopadový stav.
- **Další rozpor v research:** `research.md:23` tvrdí, že podíl ChatGPT „přes 90 %“ není ve staženém článku Shoptetu; v `zdroje/mg-shoptet.txt:138` ale uveden je. V článku tento údaj není, takže nejde o vadu jeho znění. Brief je v tomto bodě potřeba opravit, nikoli přidávat další číslo do článku.
- **Konzistence exportů:** Důvod rozdílu 417 / 418 relací AI Assistant není z dodaných agregací zjistitelný. Součet zdrojů 423 i poměr 9,4 % se reprodukovat dají. Stejně nelze z těchto podkladů určit reprezentativní tržní podíl, úplný vliv AI ani příčinu změny CTR. Závěr má tato omezení otevřeně zachovat; žádné náhradní procento pro celý trh nenavrhuji.

Po cílených opravách může zůstat hlavní přínos článku: oddělení doporučení při výběru, doměřených prokliků a objednávek a ukázka, že z agregovaných dat jednoho e-shopu nelze doložit příčinu poklesu. Stylistika, délky titulků, struktura a prodejní tón nejsou předmětem tohoto kola.
