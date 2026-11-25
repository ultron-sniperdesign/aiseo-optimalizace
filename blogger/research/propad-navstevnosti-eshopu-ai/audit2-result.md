**VERDIKT: OPRAVIT PŘED PUBLIKACÍ**

Audit k 26. 11. 2026, kolo 2: jazyk, struktura, citovatelnost, SEO, CTA a kontrola vypořádání kola 1. **3× [BLOCKER], 8× [WARNING].** Blockery představují nedokončené opravy nálezů 4, 7 a 12 z prvního kola; nové ověřování faktů neprobíhalo. Čísla nálezů níže patří tomuto kolu, odkazy na „kolo 1“ označují původní číslování.

Posouzen celý `clanek.mdx`, včetně frontmatteru, FAQ, tabulek a textových vlastností komponent. Řádky odkazují na dodanou verzi článku. Použity pouze místní podklady; bez webu a bez odesílání textu do externích služeb. Článek ani podklady nebyly změněny. Návrhy níže jsou cílené náhrady, nikoli nový článek.

**1. [BLOCKER] Podmínky vzorků nejsou dotažené do krátké odpovědi a samostatných shrnutí — kolo 1, nález 4**

**Citace:** `clanek.mdx:5`: „u více než stovky e-shopů s doplňkem Marketing Mineru“ a „Shoptet uvádí průměrný podíl kolem 0,3 % návštěv na své platformě“. `clanek.mdx:44`: „AI přivádí e-shopům — desetiny procenta, ale rostou“. `clanek.mdx:118`: „Návštěvnost z AI je dnes malá a v analytice podhodnocená“.

**Vada:** Vypořádání označuje nález za opravený (`vyporadani.md:16`), ale v samostatné krátké odpovědi stále chybí výhrada k Přehledu od AI a části Gemini i určení, že jde o doplněk Marketing Mineru **pro Shoptet**. Tyto podmínky původní audit výslovně požadoval i zde (`audit1-vysledek.md:36`); obsahuje je také tabulka v `research.md:34` a `research.md:35`. FAQ 1 už je má správně. Nadpis a závěr dál znějí jako soud o e-shopech obecně. Výhrady uvedené jinde samostatná shrnutí neopravují.

Současný `answer` se do 40–60 slov vejde, délka tedy vadou není. Začíná však hodnocením velikosti návštěvnosti místo definice. Následující náhrada řeší oba problémy a má 59 slov při dělení mezerami:

```yaml
answer: "Přímá návštěvnost z AI znamená prokliky z asistentů do e-shopu. Shoptet uvádí průměrný podíl kolem 0,3 % návštěv na své platformě, bez Přehledu od AI a části Gemini. Marketing Miner uvádí za červenec 2026 průměrně 0,6 % objednávek u více než stovky e-shopů s jeho doplňkem pro Shoptet. Oba vzorky zachycují jen doměřené prokliky; příčinu poklesu organické návštěvnosti neurčují."
```

**Nové znění H2 na ř. 44:**

```mdx
## <span class="hl">Návštěvy a objednávky z AI</span> — <strong>ve sledovaných vzorcích průměrně desetiny procenta</strong>
```

**Nové znění první věty na ř. 118:**

> U e-shopů sledovaných Shoptetem a Marketing Minerem tvoří doměřené průměrné podíly návštěv a objednávek z AI desetiny procenta. Měření nezachycuje celý vliv AI.

Nežádám nové číslo ani novou metodiku. Je potřeba zachovat již známé hranice použitých údajů.

**2. [BLOCKER] FAQ o konverzích stále zaměňuje konkrétní kanál za všechny návštěvy z AI — kolo 1, nález 7**

**Citace:** `clanek.mdx:31`: „Podle dat Shoptetu mají o 29 % vyšší konverzi než průměr a o 50 % vyšší než organika“ a „na našem e-shopu (15. 6.–30. 9. 2026) začínala polovina relací z AI rovnou na produktu […] na 26 a 31 nákupech“.

**Vada:** Období a malé počty přibyly, ale odpověď stále nejmenuje kanál **AI Assistant** ani metriku **nákupy na relaci**; srovnávací organické vyhledávání označuje jen slangovým „organika“. Přitom `vyporadani.md:19` tvrdí, že potřebné vymezení obsahuje text i FAQ. U Shoptetu navíc chybí výhrada o neuvedeném období, která v těle článku doplněna je. Začátek „mají“ nemá bez otázky vlastní podmět. Počty 26 a 31 nejsou přiřazeny ke kanálům. Jde o zbytek původní vady, ne o požadavek nového měření; rozhodující podmínky jsou v `research.md:37` a původním návrhu `audit1-vysledek.md:60`.

**Nové znění celé odpovědi na ř. 31:**

> Konverzi návštěv z AI ovlivňuje i vstupní stránka. Na e-shopu MEGA DETAIL měl kanál AI Assistant od 15. 6. do 30. 9. 2026 při vstupu na produkt necelý trojnásobek nákupů na relaci oproti organickému vyhledávání. Jde jen o 26 nákupů v AI Assistant a 31 v organickém vyhledávání jediného obchodu. Organické vyhledávání zahrnuje i neplacené prokliky z AI funkcí Googlu.

Záměrně zde ponechávám jeden výsledek s úplným vymezením. Údaje Shoptetu a srovnání celých kanálů mohou zůstat v těle; FAQ nemusí opakovat všechny statistiky.

**Související dooprava těla na ř. 55:** Kanál a metriku už odstavec uvádí správně. Chybí zde ale upozornění, že srovnávací organické vyhledávání zahrnuje i neplacené prokliky z AI funkcí Googlu, požadované původním návrhem. Zároveň je vazba „necelé trojnásobně — na 26 a 31 nákupech“ kostrbatá. První dvě věty o Shoptetu a závislosti na vstupní stránce ponechat; následující pasáž od „Na našem e-shopu“ po „jednoho e-shopu“ nahradit samostatným odstavcem:

> Na e-shopu MEGA DETAIL začínalo od 15. 6. do 30. 9. 2026 na produktu 51 % relací kanálu AI Assistant a 3 % relací organického vyhledávání. Poměr nákupů na relaci byl v celých kanálech u AI Assistant asi sedmnáctkrát vyšší; po omezení na vstupy na produkt šlo o necelý trojnásobek. Produktové srovnání stojí jen na 26 nákupech v AI Assistant a 31 v organickém vyhledávání jediného e-shopu. Organické vyhledávání zahrnuje i neplacené prokliky z AI funkcí Googlu.

Odkaz na rozbor konverzí ponechat za tímto odstavcem.

**3. [BLOCKER] „Nejčastěji citovaná“ zůstalo o odstavec dříve — kolo 1, nález 12**

**Citace:** `clanek.mdx:46`: „Čtyři nejčastěji citovaná česká čísla měří čtyři různé věci.“

**Vada:** Na ř. 63 je formulace opravena, zde ale zůstává nedoložené pořadí podle četnosti citování. `vyporadani.md:24` označuje nález za zapracovaný a úvodní kontrolní seznam vypořádání deklaruje nulu výskytů. Kontrola konkrétního původního tvaru nezachytila jiný rod a malé počáteční písmeno. K odstranění vady není potřeba hledat zdroj ani žebříček.

**Nové znění celého odstavce na ř. 46:**

> Následující čtyři české údaje měří různé věci. Dva popisují doměřené návštěvy a objednávky z AI, dva využití AI při nakupování.

**4. [WARNING] Popis a návod slibují určení vlivu AI silněji, než dovoluje výsledek článku**

**Citace:** `clanek.mdx:4`: „jak poznat, jestli za poklesem organiky stojí AI“. `clanek.mdx:40`: „ukazuje, jak vliv AI od ostatních příčin oddělit — a kde to nejde“. `clanek.mdx:79`: „Jak vliv AI ověřit na vlastních datech — pět kroků“.

**Vada:** Text nabízí prověření alternativ a omezení závěru, nikoli postup, který příčinu skutečně oddělí. Výhrada na konci úvodu už vzniklý příslib oslabuje až dodatečně. Jde o soulad redakčního příslibu s obsahem; znovu nerozporuji opravený nález 16 na ř. 118.

**Nové znění `description` na ř. 4 — 144 znaků:**

```yaml
description: "Propad návštěvnosti e-shopu v roce 2026: co ukazují data Shoptetu a Marketing Mineru a co při hledání příčiny poklesu prověřit na vlastním webu."
```

**Nové znění poslední věty úvodního odstavce na ř. 40:**

> Článek porovnává data Shoptetu, Marketing Mineru a APEK a na příkladu e-shopu MEGA DETAIL ukazuje, co při hledání příčiny poklesu prověřit a jaké závěry dostupná data neunesou.

**Nové znění H2 na ř. 79:**

```mdx
## <span class="hl">Propad návštěvnosti e-shopu</span> — <strong>pět kontrol před závěrem o vlivu AI</strong>
```

**5. [WARNING] Dvě odpovědi FAQ potřebují otázku nad sebou**

**Citace:** `clanek.mdx:27`: „Ze samotného poklesu to poznat nejde.“ `clanek.mdx:33`: „Z výroku jednatele české SEO agentury […] o tom, co vidí u některých e-shopů.“

**Vada:** První odpověď neříká, co nelze poznat; druhá začíná větným zlomkem a vůbec nejmenuje údaj 30–40 %. Při samostatné citaci chybí předmět odpovědi. Potřebné opatrnosti jsou věcně v pořádku a mají zůstat.

**Nové znění celé odpovědi na ř. 27:**

> Samotný pokles organické návštěvnosti e-shopu neprokazuje vliv AI. Porovnejte stejné měsíce meziročně, termíny aktualizací Googlu a změny na webu i v měření. Pokud při srovnatelných dotazech, stránkách, zařízeních a pozicích přibývá zobrazení a klesá míra prokliku, může to souviset s Přehledem od AI. Ani tento signál příčinu neprokazuje.

**Nové znění celé odpovědi na ř. 33:**

> Údaj o poklesu návštěvnosti některých e-shopů až o 30–40 % pochází z výroku jednatele české SEO agentury z června 2025, krátce po spuštění Přehledu od AI v češtině. Data, metodika ani počet e-shopů zveřejněny nebyly. Nejde tedy o veřejně doložené měření celého českého trhu.

**6. [WARNING] FAQ o GA4 spojuje tři různé situace do jednoho dlouhého souvětí**

**Citace:** `clanek.mdx:29`: „Návštěvy z mobilních aplikací asistentů se podle Marketing Mineru často zařadí mezi přímé, neplacené prokliky […] a u návštěvy […] vazbu na doporučení nepoznáte.“

**Vada:** Mezi situacemi se mění podmět i vysvětlení: chybějící zdroj, zařazení do jiného kanálu a samostatné dohledání obchodu. Věcné opravy kola 1, nálezu 3, jsou zapracované; neodstraňovat je při krácení. Pomůže rozdělení vět, nikoli vypuštění podmínek.

**Nové znění celé odpovědi:**

> GA4 rozpozná zdroj AI z odkazující adresy nebo označení zdroje v URL. Podle Marketing Mineru návštěvy z mobilních aplikací asistentů často skončí mezi přímými. Neplacené prokliky z Přehledu od AI a režimu AI patří v GA4 do organického vyhledávání. Když si zákazník obchod po doporučení AI dohledá sám, z těchto dat vazbu na doporučení nepoznáte.

**7. [WARNING] Jedna položka Checklistu se změnila v chronologii aktualizací**

**Citace:** `clanek.mdx:73`, `Checklist.items`, položka „Aktualizace Googlu“: „Podle stavového panelu […] dvě jádrové aktualizace […] a tři aktualizace proti spamu […]; u března pamatujte […] Panel k 26. 11. uvádí ještě […]“.

**Vada:** Mezi stručnými položkami stojí dlouhý soupis dat a výhrad. Čtenář při skenování hledá úkon, ale dostane historii. Doplnění z prvního kola je potřebné a správně zůstává; problémem je jeho umístění.

**Nové znění pouze vlastnosti `desc` této položky:**

> Porovnejte začátek poklesu s termíny aktualizací hodnocení Googlu. Časový souběh sám dopad na váš web nedokazuje.

**Údaje z původní položky přesunout hned za Checklist na ř. 77, v tomto znění:**

```md
### Aktualizace Googlu k 26. 11. 2026

Podle stavového panelu Vyhledávání Google:

- Od konce března do začátku října 2026 proběhly dvě jádrové aktualizace, od 27. 3. a 21. 5., a tři aktualizace proti spamu, od 24. 6., 18. 8. a 24. 9.
- Při rozboru března zohledněte také aktualizaci proti spamu od 24. 3. 2026.
- Panel k 26. 11. 2026 uvádí ještě jádrovou aktualizaci od 10. 11. a položku „December 2026 core update“ od 24. 11. Tyto listopadové události už do říjnového srovnání nezasahují.
```

Název poslední položky zdroje ponechat doslovně. H3 je prostý text, bez zvýrazňovacích značek. Přesun nevrací již vyřešenou neúplnost přehledu z kola 1.

**8. [WARNING] Stepper začíná poznámkou bez slovesa a u porovnání ztráty neříká, co spočítat**

**Citace:** `clanek.mdx:82`: „Organické relace i objednávky za stejné úplné měsíce loni a letos a k tomu průběh delší řady.“ `clanek.mdx:85`, název kroku: „Postavte vedle sebe ztrátu a přírůstek z AI“; popis pak pouze vymezuje zdroje a kanál.

**Vada:** První popis působí jako interní poznámka a zbytečně opakuje „vývoj / průběh / průběh“. U čtvrtého kroku je potřebná metodická podmínka, ale chybí vlastní úkon, který slibuje titulek: spočítat dvě změny a porovnat je. Opravy sezónnosti a data oznámení kanálu se nemají vracet zpět.

**Nové znění `desc` prvního kroku na ř. 82:**

> V GA4 porovnejte organické relace a objednávky za stejné úplné měsíce let 2025 a 2026. Prohlédněte i delší časovou řadu. Odlišný průběh dvou let sám sezónní vliv nevylučuje.

**Nové znění `title` čtvrtého kroku na ř. 85:**

> Porovnejte úbytek organických relací s přírůstkem ze zdrojů AI

**Nové znění jeho `desc`:**

> Spočítejte úbytek organických relací a přírůstek relací ze zdrojů AI mezi oběma obdobími. Zdroje, například chatgpt.com a gemini.google.com, vymezte v obou obdobích stejně; nepoužívejte jen kanál AI Assistant. Google ho oznámil 13. 5. 2026 a starší návštěvy z AI jsou v jiných kanálech. Početní srovnání změn neprokazuje nahrazení konkrétních návštěv.

**9. [WARNING] Klíčový rozbor má 127 slov v jednom odstavci a dvě kostrbaté vazby**

**Citace:** `clanek.mdx:100`: „kontrolou stejných výsledků vyhledávání to není“. `clanek.mdx:108`: „dotazů, za kterými se články zobrazují“ a dvakrát „neoddělíme“ v odstavci, který postupně vysvětluje články, omezení exportu i ostatní stránky.

**Vada:** Nejde o nadbytečné věcné výhrady, ale o jejich nahromadění. Závěr pro jednotlivé typy stránek se obtížně hledá. „Za dotazy“ je nepřirozená vazba a obrácený slovosled na ř. 100 ztěžuje čtení. Samotné slovo „podle“ ani opatrnost vůči kauzalitě za vadu nepovažuji.

**Nové znění druhé věty na ř. 100:**

> Jde o souhrnné údaje, ve kterých se může měnit skladba dotazů a stránek, nikoli o srovnání stejných výsledků vyhledávání.

**Nové členění a znění odstavce na ř. 108:**

```md
### Články: více zobrazení, nižší míra prokliku

U článků, které přivádějí většinu kliků, přibylo zobrazení o 22 % a míra prokliku klesla z 3,8 % na 2,35 %. Takový vývoj může souviset s častějším výskytem Přehledu od AI u informačních dotazů, ale také se změnou skladby dotazů, pro které se články zobrazují. Search Console podle [dokumentace Googlu](https://developers.google.com/search/docs/appearance/ai-features) zahrnuje zobrazení a kliky z Přehledu od AI a režimu AI do celkového výkonu ve vyhledávání na webu. Jejich příspěvek proto z tohoto exportu podle zařízení a stránek neoddělíme.

### Ostatní stránky: méně zobrazení, vyšší míra prokliku

U ostatních adres klesla zobrazení o 43 %, zatímco míra prokliku vzrostla z 1,01 % na 1,40 %. Tuto změnu tedy nižší míra prokliku nevysvětluje. Bez podrobnějšího rozkladu nelze určit, jak se na změně podílely poptávka, skladba dotazů a stránek či pozice a zda souvisí s AI.
```

Podmínky opravené v kole 1, nálezech 1 a 9, zůstávají zachované. Nejde o jejich opakované vytýkání.

**10. [WARNING] „Organika“ se opakuje i mimo SEO specialistům určený výklad**

**Citace:** `clanek.mdx:55`: „vyšší než organika“; `clanek.mdx:67`: „Proč propad organiky“; `clanek.mdx:110`: „Organika mezitím přišla“ a „organika navíc sama obsahuje“; `clanek.mdx:113`: „úbytku organiky“; `clanek.mdx:118`: „Při poklesu organiky“.

**Vada:** Místní slovník tento slang odmítá (`JAZYK_SLOVNIK.md:80`). V článku pro provozovatele e-shopu je přesnější uvádět návštěvnost nebo konkrétní kanál. Mechanický regex slovníku nepokrývá tyto skloňované tvary; nulový výsledek checkeru proto není potvrzením jejich souladu se slovníkem.

**Přesné náhrady dosud nepokryté návrhy výše:**

| Místo | Původní znění | Nové znění |
|---|---|---|
| ř. 55, srovnání Shoptetu | „o 50 % vyšší než organika“ | „o 50 % vyšší než návštěvy z organického vyhledávání“ |
| ř. 110, celá druhá věta | „Organika mezitím přišla o 2 967 relací a 13 objednávek.“ | „Z organického vyhledávání mezitím ubylo 2 967 relací a 13 objednávek.“ |
| ř. 110 | „organika navíc sama obsahuje“ | „organické vyhledávání navíc zahrnuje“ |
| ř. 113 | „úbytku organiky“ | „úbytku organické návštěvnosti“ |
| ř. 118, druhá původní věta | „Při poklesu organiky nejdřív projděte pět kroků výše.“ | „Při poklesu organické návštěvnosti nejdřív projděte pět kontrol výše.“ |

**Nové znění H2 na ř. 67:**

```mdx
## <span class="hl">Pokles organické návštěvnosti</span> — <strong>pět dalších vysvětlení k prověření</strong>
```

Další výskyty na ř. 4, 5 a 31 řeší již uvedené náhrady; nejde o další samostatné nálezy.

**11. [WARNING] Závěrečný H2 radí „škrtat“, ale text nevysvětluje co**

**Citace:** `clanek.mdx:116`: „Co z toho plyne pro e-shop — nejdřív měřit, pak škrtat“.

**Vada:** Není jasné, zda má čtenář škrtat rozpočet, články nebo jiné aktivity. Následující odstavec nic takového nedoporučuje; vede ke kontrole dat a sledování zmínek. Zvýrazněný pojem „e-shop“ je navíc pro samostatně čtený nadpis příliš obecný. Formát H2 už je správný, potřebuje zpřesnit obsah.

**Nové znění:**

```mdx
## <span class="hl">AI viditelnost e-shopu</span> — <strong>sledovat zmínky má smysl i bez prokázané příčiny poklesu</strong>
```

**Co je v pořádku**

- `seoTitle` má **53 znaků**, začíná klíčovou frází „Propad návštěvnosti e-shopu“ a vyhovuje. Délku `title` nehodnotím. Původní `description` má **158 znaků**, tedy také vyhovuje délce; nález 4 se týká jeho příslibu, nikoli limitu.
- Slug je srozumitelný a odpovídá tématu. Klíčová slova nepůsobí násilně. Přítomné interní odkazy na rozbor konverzí, propady vydavatelů, reklamu v AI a produkt mají k příslušným pasážím jasný vztah; jejich existenci na živém webu jsem neověřoval.
- Všechny H2 používají `<span class="hl">` a `<strong>`. Původní soubor nemá H3; jejich nepřítomnost sama není chyba. Doplnění výše řeší konkrétní dlouhé pasáže.
- Úvod dává čtenáři základní odpověď již v prvním odstavci. Definici krátké odpovědi a přesnější příslib řeší nálezy 1 a 4. FAQ otázky odpovídají potřebám provozovatele e-shopu; problémem je podoba některých odpovědí, nikoli výběr témat.
- Přehled od AI je v celém článku v jednotném čísle a příslušné pády jsou správně. České uvozovky v próze jsou v pořádku. Rovné uvozovky YAML, JSX a HTML jsou syntaxe, nikoli typografická vada. Zakázané výrazy typu „schema markup“, „answer block“ či „hub-and-spoke“, garance pozic ani nátlakové formulace článek neobsahuje.
- **CTA na ř. 120 odpovídá `zdroje/audit.ts`:** Audit AI viditelnosti, **3 600 Kč bez DPH**, kontrola zmínek, technického přístupu a obsahových mezer, prioritní seznam úprav do pěti pracovních dní od úhrady a online schůzka 30–60 minut v dohodnutém termínu. Opora: `zdroje/audit.ts:61`, `zdroje/audit.ts:98`, `zdroje/audit.ts:307`, `zdroje/audit.ts:354` a `zdroje/audit.ts:362`. Odkaz vede na `/audit/`, popisek neobsahuje cenu. Nejde o obecné „kontaktujte nás“. Výměnu produktu, ceny ani doplnění jiného produktu nenavrhuji.

**Stav vypořádání kola 1**

Kontrola zahrnovala všechny výskyty v aktuálním souboru, nejen místa jmenovaná ve vypořádání. Již opravené nálezy znovu neotevírám:

| Nález kola 1 | Stav po kontrole | Doklad v aktuální verzi |
|---|---|---|
| 1 — Search Console, dokumentace versus UI | Přijato | ř. 83 a 108; tvrzení je omezené na dokumentaci a export podle zařízení a stránek, původní obecné „neukáže“ v článku nezůstalo. |
| 2 — oznámení kanálu versus první vlastní data | Přijato | ř. 75 a 85 rozlišují oznámení 13. 5. 2026 a pozorování vlastního účtu; červen už není vydáván za spuštění celé platformy. |
| 3 — URL, neplacené prokliky, samostatné dohledání | Přijato | FAQ ř. 29 a Insight ř. 58 obsahují potřebné podmínky; stylistické rozdělení FAQ řeší nález 6 tohoto kola. |
| 4 — vymezení vzorků | **Nedokončeno** | FAQ ř. 25 a úvod ř. 40 jsou zúžené správně; `answer` ř. 5 podmínky stále postrádá, obecné shrnutí zůstává také na ř. 44 a 118. Viz blocker 1. |
| 5 — průměry skupin a odhad jiných metrik | Přijato | ř. 51 rozlišuje průměry, počet i podíl objednávek a odhad návštěv a tržeb; původní neurčité formulace jinde nezůstaly. |
| 6 — APEK a rozdíl šetření | Přijato | ř. 52 a 53 uvádějí internetový sběr, velikost vzorku APEK a omezení srovnání s jiným šetřením. |
| 7 — konverze, období, kanály a počty | **Nedokončeno** | ř. 55 je podstatně doplněn, ale FAQ ř. 31 stále postrádá kanál a metriku; vymezení organického srovnání není dotažené. Viz blocker 2. |
| 8 — sezónnost | Přijato | ř. 82 a 91 už sezónnost nevylučují; původní kategorické závěry jinde nejsou. |
| 9 — vyloučení AI u ostatních stránek | Přijato | ř. 105 a 108 zachovávají rozsah skupiny a nejistotu příčiny, AI není vyloučena. |
| 10 — náhrada ztráty návštěv | Přijato | ř. 110 a 113 omezují závěr na doměřený přírůstek a početní srovnání; původní závěr o celém vlivu AI nezůstal. |
| 11 — přehled aktualizací | Přijato | ř. 73 doplňuje březnovou i listopadové položky a výhradu k souběhu. Nález 7 tohoto kola řeší čitelnost, nikoli novou faktickou vadu. |
| 12 — nedoložená četnost citování | **Nedokončeno** | ř. 63 a 65 jsou opravené, ale na ř. 46 zůstalo „nejčastěji citovaná“. Viz blocker 3. |
| 13 — průměry versus stejné dotazy a stránky | Přijato | ř. 83, 98 a 100 připouštějí změnu skladby a nezaměňují souhrnné pozice za kontrolu stejných výsledků. |
| 14 — rozpor 417/418 | Nezapracování do článku přijímám: článek používá součet zdrojů 423, který původní audit potvrdil, a rozdíl jedné relace je zaznamenán v `research.md:39` bez dopadu na hlavní závěr. | ř. 110; čísla 417 a 418 se v článku nevyskytují. |
| 15 — +62 % versus publikované počty | Nezapracování do článku přijímám: údaj je výslovně připsán Shoptetu, podkladové počty článek nepřebírá a rozpor je zapsán v `research.md:23`; domněnku o zaokrouhlení ale nelze považovat za ověřené vysvětlení. | ř. 50; nejde o vlastní výpočet článku. |
| 16 — podmínka pro řešení AI viditelnosti | Přijato | ř. 118 odděluje diagnostický signál od rozhodnutí sledovat AI zmínky; konec `answer` už netvrdí, že vyloučení alternativ samo prokáže AI. |
| Doplňující řádek — tabulka podmínek a rozpory v research | Tabulka byla doplněna | `research.md:23` a ř. 35–40 obsahují opravy uvedené ve vypořádání; část starších shrnutí zůstává nejednotná, viz poznámka níže. |

Z **14 číslovaných nálezů označených za zapracované** je **11 uzavřeno a 3 zůstávají otevřené**. Důvody nezapracování nálezů 14 a 15 přijímám v rozsahu uvedeném výše. Před publikací je třeba doopravit i deklaraci vypořádání; samotný kontrolní seznam hledaných řetězců nyní neodpovídá textu článku.

**Omezení a nejasnosti**

- Tabulka podmínek v `research.md` existuje. Její aktualizované řádky ale nejsou plně sladěné se staršími shrnutími: například ř. 15 stále obsahuje obecné tvrzení o rozhraní Search Console, zatímco ř. 40 už omezuje závěr na dokumentaci a export; ř. 27 stále navrhuje „z výroku, ne z měření“. Tyto zbytky nepřebírat při další editaci. Nehlásím je jako další vady aktuálního článku.
- Mechanický průchod skillu `cestina-audit` byl proveden dostupným původním checkerem s výslovně předaným místním `JAZYK_SLOVNIK.md`, verze 74: **276 kontrolovaných pravidel, 0 mechanických nálezů**. Následoval ruční kontextový průchod. Externí model nebyl volán a slovník ani auditní log mimo tuto složku nebyly měněny.
- V dodané složce není vykreslená stránka ani zdroj komponent. Posouzena je struktura a obsah MDX; výslednou sazbu tabulek a komponent ani dostupnost odkazů v publikovaném webu z těchto podkladů potvrdit nelze.
