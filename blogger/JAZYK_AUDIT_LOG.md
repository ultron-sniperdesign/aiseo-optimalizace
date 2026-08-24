# JAZYK_AUDIT_LOG.md — log jazykových auditů

> Vede skill `cestina-audit`. Pořadí: **od nejstaršího článku**, jeden článek na run, do hloubky.
> Sloupec „na 1 000 slov" je jediné číslo, které ukazuje, jestli audit zabírá — porovnává se stav **před** opravou.

| # | Datum | Článek | Publ. | Verze slovníku | Slov | Nálezů (stroj) | Nálezů LLM | na 1 000 slov | Opraveno | Nová pravidla |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-08-23 | `jak-vypnout-ai-overview` | 2026-04-29 | v1 → v2 | 2 296 | 15 | 29 | **6,6 → 0,0** | 46 | +21 |
| 2 | 2026-08-23 | `seo-audit-co-kontrolovat` | 2026-05-02 | v2 → v3 | 2 397 | 12+5 | 24 | **6,6 → 0,0** | 33 (+9 zpětně z v4) | +23 |
| 3 | 2026-08-23 | `seo-pro-eshopy-ai-era-2026` | 2026-05-02 | v3 → v4 | 2 796 | 20 | 32 | **7,3 → 0,0** | 61 | +27 |
| 4 | 2026-08-23 | `jak-strukturovat-pillar-content` | 2026-05-03 | v4 → v5 | 3 820 | 154 | 15 | **40,8 → 0,0 ⛔** | 90+ | +15 |
| 5 | 2026-08-23 | `local-seo-cesko-2026` | 2026-05-03 | v5 → v6 | 4 615 | 21 | 17 | **4,6 → 0,0** | 45 | +19 |
| 6 | 2026-08-23 | `mereni-seo-vykonu-2026` | 2026-05-03 | v6 → v7 | 4 189 | 94 | 12 | **22,7 → 0,0** | 110 | +12 |
| 7 | 2026-08-23 | `seo-nastroje-2026` | 2026-05-03 | v7 → v8 | 3 223 | 52 | 26 | **16,4 → 0,0** | 73 | +24 |
| 8 | 2026-08-23 | `caste-chyby-v-seo-2026-update` | 2026-05-06 | v8 → v9 | 3 958 | 98 | 8 | **24,9 → 0,5** | 62 | +9 |
| 9 | 2026-08-23 | `aeo-optimalizace-v-praxi` | 2026-05-08 | v9 → v10 | 4 970 | 113 | — | **22,7 → 0,0** | 92 | +4 |
| 10 | 2026-08-23 | `ai-search-trendy-cesko-2026` | 2026-05-08 | v10 → v11 | 6 101 | 101 | — | **16,5 → 0,2** | 84 | +5 |
| 11 | 2026-08-24 | `aio-strategie` | 2026-05-08 | v11 → v12 | 5 090 | 139 | — | **27,6 → 0,0** | 118 | +5 |

## Poznámky k jednotlivým článkům

### 1 · jak-vypnout-ai-overview (2026-08-23)

Nejstarší článek webu (29. 4. 2026), psaný před ustálením stylu. Podle očekávání nejhustší nález celého korpusu.

**Nejzávažnější nálezy:**
- **`answer block` 2×** — termín, který si projekt sám zakázal v glosáři `CLAUDE.md`. Opraveno na „krátká odpověď".
- **`podle podle dopadu`** — mechanický překlep, který přežil 4 měsíce v publikovaném textu.
- **„je minimum pilot na vybraném segmentu URL"** — rozbitá věta, nedotažený převod z angličtiny.
- **15 anglicko-českých hybridů**: `master switch`, `web-only`, `query-level`, `account-specific`, `business problém`, `AI Answer feature`, `Google features`, `test-first`, `privacy-first`, `web owner`, `hard limit`, `backup`, `baseline`, `impressions`, `publisher`.

**Co jsem nechal a proč:**
- Doslovné popisky menu prohlížeče (`Settings → Search engine`) — přeložit je znamená poslat čtenáře hledat položku, která v anglickém rozhraní neexistuje. Nově jsou v zpětných apostrofech, takže je checker přeskočí.
- `opt-in` u ovládání robotů — zavedený pár k `opt-out`, který má web ve slugu článku.
- `brand`/`brandový`, `snippet`, `e-shop`, `crawler`, `prompt` — ✅ zavedené v oboru.

**Chyba nástroje odhalená při práci:** plošný regex na dovření českých uvozovek přepsal uvozovku uvnitř HTML atributu (`class="hl"` → `class="hl“`) a rozbil tím kód stránky. Pravidlo ve slovníku je od té doby zúžené o `<>=` a skill má zákaz plošných náhrad bez masky.

### 2 · seo-audit-co-kontrolovat (2026-08-23)

Druhý nejstarší článek, tentokrát prošlý proti slovníku v2. Stejná hustota jako u prvního (6,6 na 1 000 slov), ale **jiná skladba**: zatímco jednička měla hlavně technické hybridy, dvojka je hustá agenturním slangem — je to text o službě.

**Nejzávažnější nálezy:**
- **`money pages`, `proof points`, `deliverable`, `handover`, `kickoff/debrief call`** — prodejní žargon, kterému zákazník bez SEO minulosti nerozumí; přitom článek má vysvětlovat, co si má od auditu koupit.
- **`Intent coverage pro buying-journey fáze`** — dvojitý kalk v jedné buňce tabulky.
- **`field data` vs `lab`, `tie-breaker`, `proxy indikátor`** — u Core Web Vitals se čtenáři naskládaly čtyři anglické termíny do jedné věty.
- **`organic traffic` i `organiku`** v jedné odrážce — dvě podoby téhož slangu vedle sebe.

**Nové jevy oproti článku 1:** slovník dostal celou vrstvu **obchodního žargonu** (dodávka služby, fáze nákupu, typy stránek). U prvního článku šlo hlavně o technické míchání jazyků.

**Chyby nástroje odhalené při práci:**
1. Checker hlásil **názvy komponent** (`<Insight>`) jako anglicismus → do masky přibyly JSX tagy.
2. Pravidlo na `content` hlásilo **`mixed content`** (technický termín HTTPS) → doplněna výjimka.
3. Normalizace uvozovek podruhé rozbila kód — tentokrát **uzavírací uvozovku JSX prop** `desc: "…"`, takže se nepřeložilo MDX. Zachytil to `npm run build`. Slovník i skill mají od té chvíle § 9 s povinným postupem.

### Oprava nástroje po článku 2: audit frontmatteru

Živá kontrola po nasazení ukázala, že slovo `deliverable` je pořád na stránce, ale checker hlásí nulu. Důvod: **přeskakoval celý frontmatter** — a v něm jsou `answer`, `description` a celé FAQ, tedy text, který čtenář vidí a který se dostává do vyhledávačů.

Checker teď audituje textová pole frontmatteru (`title`, `description`, `answer`, `q`, `a`, `label`, `desc`, `text`, `value`) a technické klíče (`slug`, `tags`, `keywords`, `category`) dál přeskakuje — anglická klíčová slova tam patří.

Okamžitý dopad: **+5 nálezů v článku 2 a +2 v článku 1**, všechny ve FAQ. Oba články mají po opravě 0.

### 3 · seo-pro-eshopy-ai-era-2026 (2026-08-23)

Nejhustší nález zatím: **7,3 na 1 000 slov** strojově, k tomu 32 dalších z LLM průchodu. Text pro e-shopy je psaný agenturním jazykem skoro celý.

**Nové jevy oproti článkům 1 a 2:** e-commerce a produktový slang — `listing`, `produktovka`, `custom úpravy`, `research fáze`, `basic audit`, `time-to-result`, `citation hook`, `brand exposure`, `citation rate`. Slovník tím dostal třetí vrstvu (po technické a obchodní).

**Nejzávažnější:**
- **`answer block` potřetí v korpusu** — a tentokrát i jako text odkazu na heslo ve slovníku.
- **`research fází` pětkrát** v jednom článku, včetně titulku persony.
- **`Tenhle format`** — nečeský pravopis, ne termín.
- **`citation hook`, `brand exposure`, `citation rate`** ve třech větách za sebou v sekci o strategii vůči AI Overviews.

**Zpětný dopad na starší články:** slovník v4 našel **9 dalších nálezů v článku 2** (`niche` 3×, `roadmapa` 3×, `na škálu`, `free nástroje`) a 0 v článku 1. Opraveno hned — jinak by se rozdíl mezi „projeto podle v2" a „projeto podle v4" tiše hromadil.

**Chyba nástroje odhalená při práci:** checker hlásil **názvy JSX atributů** (`fix="…"` v komponentě `<Mistake>`) jako anglicismus. Do masky přibyly názvy atributů; předtím maskoval jen názvy komponent.

### 4 · jak-strukturovat-pillar-content (2026-08-23)

**Rekord: 154 strojových nálezů, 40,8 na 1 000 slov** — šestkrát víc než u předchozích. Článek je zároveň nejdelší (3 800 slov) a je psaný pro obsahové stratégy, takže drží nejvíc oborového žargonu.

**Nejzávažnější: vlastní glosář porušený 23×**
- `answer block` **14×** (10 malým, 4 velkým písmenem)
- `schema markup` **5×**
- `hub-and-spoke` **4×**

To jsou tři termíny, které si projekt sám zakázal v `CLAUDE.md` — a v jednom článku jsou dohromady třiadvacetkrát.

**Další vrstva:** obsahový a redakční žargon — `blueprint`, `outline`, `wall of text`, `evergreen`, `body text`, `AI engines`, `thought leadership`, `ranking tracking`, `citation monitoring`, `next steps`, `update/outdated`, `timestamp`, `broken`, `step-by-step`.

**Rozhodnutí k termínu `pillar` (39 výskytů):** neměnit. Je to téma článku, má ho web ve slugu i v navigaci. Místo plošné náhrady jsem **doplnil definici k prvnímu užití v těle** („Pilířová stránka (anglicky *pillar*) je hlavní, nejobsáhlejší text k tématu…") — přesně to, co úroveň ⚠️ požaduje.

**Dvě opravy nástroje:**
1. **⚠️ pravidla se nově skládají na první výskyt** a hlásí, kolikrát se opakují (`+38x dál v textu`). Jejich smysl je „vysvětli při prvním použití", ne „nahraď všude" — bez toho tenhle článek generoval 68 hlášení o jednom slově.
2. **Maska na hodnoty technických atributů** (`class="pb-content"` hlásilo `content`) a výjimka pro název aktualizace `Helpful Content Update`.

**Čtvrtá chyba mého vlastního zásahu:** dávkové obalení názvů komponent do zpětných apostrofů zasáhlo i `import` řádky a rozbilo MDX. Chytil build. Slovník má nové pravidlo § 9.4: žádná dávková náhrada nesmí sáhnout na `import`, `export` a frontmatter klíče.

### 5 · local-seo-cesko-2026 (2026-08-23)

Nejdelší článek korpusu (4 615 slov), ale **nejnižší hustota zatím: 4,6 na 1 000 slov**. Důvod je vidět v textu — článek prošel refreshem v srpnu 2026, takže polovina je psaná už podle ustáleného stylu. Starší vrstva se pozná okamžitě.

**Nová vrstva slovníku: hybridní přívlastky.** Tenhle článek jich má nejvíc z celého korpusu — `per-pobočkové`, `service-area`, `service+lokalita`, `grid-based`, `geo-modifikované`, `single-location`, `multi-pobočkový`. Vzorec je pořád stejný: anglické přídavné jméno nalepené na české podstatné.

**Strojové obraty:** „Lokálnost odkazu **není binární definice**" (kalk), „**lokálně orientovaných** firem", „**rozeznatelnou** značku", „po **validaci přínosu**".

**Kontextová past:** `listingy` slovník překládal jako „výpis produktů" (z e-shopového článku), tady ale znamená **zápisy v katalozích**. Doklad, že náhrada ve slovníku je návrh, ne příkaz — každý výskyt se musí přečíst v kontextu.

**11 nedovřených uvozovek** — nejvíc z dosavadních článků, většinou v příkladech dotazů („instalatér Praha").

### 6 · mereni-seo-vykonu-2026 (2026-08-23)

Druhý nejhustší po pilíři: **94 strojových nálezů, 22,7 na 1 000 slov**. Článek o měření je logicky plný anglických názvů metrik.

**Nejčastější jednotlivá slova:** `share` 17× (většinou „citation share"), `traffic` 11×, `impressions` 7×, `sessions` 10×, `custom` 4×, `baseline` 4×.

**Nová vrstva: analytický žargon a anglická hodnocení.** Kromě metrik článek hodnotil česky-anglicky: „Pozice 4–10 = **solid**", „Rostoucí trend meziročně = **healthy**", „**mature web**", „**brand-conscious** dotazy", „**team view** + **management view**", „**stakeholder**", „**defaultní** KPI", „**dashboarding**".

**Rozhodnutí u názvů metrik:** české GA4 má vlastní překlady, takže `sessions` → **relace**, `impressions` → **zobrazení**. To není purismus — čtenář ta slova musí najít ve svém rozhraní, které je česky.

**Zpětný dopad v7:** `sessions` se objevilo i ve třech dřívějších článcích (pilíř 2×, měření, jak-vypnout). Opraveno.

### 7 · seo-nastroje-2026 (2026-08-23)

**16,4 na 1 000 slov.** Přehled nástrojů má vlastní typ znečištění: **popisy funkcí a ceníků přebrané z anglických stránek výrobců**.

**Nová vrstva: ceníkový a produktový žargon** — `credit-based`, `pull report`, `custom pricing`, `best value`, `industry-standard`, `difficulty score`, `vendor report`, `mention rate`, `sources cited`. Tyhle výrazy se do textu nedostaly z hlavy autora, ale kopírováním z produktových stránek.

**Nejčastější jednotlivé slovo:** `baseline` 13× — pokaždé ve významu „základní sada zdarma" nebo „výchozí stav".

**Kde jsem auditora neposlechl:** navrhoval hlásit i `importovat` a `validovat`. To jsou zavedená česká slovesa, ne anglicismy — nechal jsem je. Podobně `leady` v marketingovém významu.

**Oprava po připomínce (23. 8. 2026):** `industry-standard` jsem zařadil jako ⛔ a v článku nahradil za „oborový standard". **Chybně** — v marketingu a vývoji je to běžně používaný výraz i v Česku. Původní znění vráceno, pravidlo přepsáno na ✅ s odůvodněním, aby se to neřešilo znovu. Poučení pro další články: u výrazu, který se v oboru běžně používá **i v českém prostředí**, patří ✅, ne ⛔ — přísnost má mířit na kalky a strojové obraty, ne na zavedenou oborovou mluvu.

**Druhá revize téhož dne:** po dotazu na další kandidáty uživatel potvrdil jako v pořádku i **best practice, benchmark, deploy, dashboard (i dashboarding), use case**. Všech pět přepsáno na ✅, náhrady v článcích 2, 3, 6 a 7 vráceny do původního znění. Slovník má nově v hlavičce explicitní pravidlo: *zavedená oborová mluva není anglicismus*.

Vedlejší zjištění: moje náhrada „P1 podle **scénář použití**" byla navíc gramaticky rozbitá — dávková náhrada podstatného jména neupraví pád. Další důvod, proč se každý zásah musí přečíst v kontextu.

### 8 · caste-chyby-v-seo-2026-update (2026-08-23)

První článek projetý **podle nového postupu s povinnou kontrolou kontextu**. 98 strojových nálezů (24,9 na 1 000 slov), 62 oprav.

**Co nová povinná kontrola chytila:** při čtení diffu před commitem jsem našel vlastní chybu — náhrada `content gap` → „obsahové gap" (špatný rod). Opraveno na „mezery v obsahu" **ještě před zápisem**. U předchozích sedmi článků by to skončilo živě na webu a našlo se to až zpětnou kontrolou.

**Nové jevy:** `guest post farmy`, `link exchanges`, `fact-density`, `content depth`, `research-driven`, `recovery`, `merge`, `gatekeeper`.

**Dvě nové výjimky ve slovníku:**
- **názvy publikací** — `Search Engine Land` není anglicismus, regex dostal negativní lookahead
- **texty odkazů citující titulek vlastního článku** — „Jak strukturovat pillar content" se cituje tak, jak zní; měnit to by znamenalo měnit slug

Zbylé dva ⛔ nálezy jsou právě ty odkazy na vlastní titulek. Nejsou to chyby, ale checker je hlásit bude, dokud se nezmění titulek toho článku.

### 9 · aeo-optimalizace-v-praxi (2026-08-23)

Článek s nejvyšším počtem porušení vlastního glosáře: **`answer block` ve čtyřech pádech, dohromady 28× v jednom textu**, k tomu `schema markup` 2×.

**Skloňování bylo hlavní práce.** Náhrada nešla udělat jedním regexem — bylo potřeba namapovat tvary:

| Původní tvar | Náhrada |
|---|---|
| answer block | krátká odpověď |
| answer blocku | krátké odpovědi |
| answer blocků | krátkých odpovědí |
| answer blockem | krátkou odpovědí |
| ideálního answer blocku | ideální krátké odpovědi |
| strukturovaný answer block | strukturovaná krátká odpověď |

**Kontrola kontextu chytila tři chyby, které jsem vyrobil:** „bez **hustota faktů**" (chybí genitiv), „Anatomie **ideálního krátké odpovědi**" (neshoda rodu po náhradě) a tautologii „Krátká odpověď je **krátká** strukturovaná odpověď". Všechny opraveny před commitem.

**Devátá díra v nástroji: `<Dont>` bloky.** Checker hlásil frázi „V dnešní digitální éře je důležité…" jako strojový obrat — jenže je to **záměrná odstrašující ukázka** v bloku `<Dont>`, kterou článek uvádí jako příklad špatného textu. Opravit ji by zničilo smysl příkladu. Checker od článku 9 obsah `<Dont>` bloků přeskakuje.

### 10 · ai-search-trendy-cesko-2026 (2026-08-23)

Nejdelší text korpusu (6 100 slov) a zároveň ten, který jsem během srpna dvakrát refreshoval kvůli faktům — jazykově ale projetý nebyl. **101 nálezů, 16,5 na 1 000 slov.**

**Změna titulku.** Titulek i seoTitle obsahovaly „market share": *„AI search trendy 2026: data, market share a co to znamená pro CZ marketéry"* → *„…data, podíly na trhu a…"*. Slug zůstal beze změny. OG obrázek jsem předem zkontroloval — jeho headline zní „AI SEO trendy / Data a trendy 2026", takže se s novým titulkem nebije.

**Nejčastější:** `share` 12× (citation share, share-of-voice, market share) · `citation rate` 8× → míra citování · `traffic` 8× · `content` 6× · `fact-density` 4× · `baseline` 4×.

**Desátá díra v nástroji:** checker hlásil `icon: "content"` — **technickou hodnotu ve vlastnosti komponenty**, ne text. Maska nově pokrývá `icon`, `tone`, `variant`, `key`, `slug`.

**Zbylý ⛔ nález** je text odkazu citující titulek jiného našeho článku („Jak strukturovat pillar content") — doložená výjimka od článku 8.

**Nález mimo jazykový audit — přegenerovaný OG obrázek.** Původní obrázek nesl **vymyšlená čísla „+127 %" a „+64 %"**, která v článku ani v datech nemají oporu. Na kartě článku o datech působila jako údaj. Obrázek přegenerován (jas 235,6, v sadě): stejný headline „AI SEO TRENDY", podtitul aktualizovaný na „Data a podíly na trhu 2026", odznaky obsahují **jen ikony, žádné hodnoty**. Připomínka pro IMAGE_GUIDE: u vizuálů k datovým článkům platí zákaz číslic dvojnásob — čtenář je čte jako fakt.

### 11 · aio-strategie (2026-08-24)

**139 nálezů, 27,6 na 1 000 slov** — druhá nejvyšší hustota po pilíři. Strategický text plný manažerské angličtiny.

**Změna titulku i podtitulku.** Titulek nesl tři anglicismy najednou: *„AIO jako strategie: **maturity model**, **90-day plán** a **org chart** pro AI viditelnost"* → *„AIO jako strategie: model zralosti, plán na 90 dní a rozdělení rolí"*. OG obrázek předem zkontrolován — headline „SEO AIO / Strategie pro AI viditelnost" se s novým titulkem nebije.

**Nejčastější:** `content` 27× (včetně rolí v RACI tabulce) · `traffic` 12× · `share` 9× · `presence` 8× · `baseline` 6× · `answer block` 8× ve čtyřech pádech.

**Role v RACI matici** byly anglicky (`Content | Dev/SEO | Brand | Analytics`) — přeloženo na `Obsah | Vývoj a SEO | Značka | Analytika`. Tabulka rolí je něco, co si čtenář má překreslit k sobě do firmy; anglické popisky tomu překážejí.

### Poznámka k názvu vlastního frameworku

Článek 11 pracuje s **AIO Maturity Model™** — vlastním pojmenovaným frameworkem webu. Obecná spojení („maturity level", „maturity levelu") jsem přeložil na „úroveň zralosti", ale **samotný název jsem nechal** a zapsal ho ve slovníku jako ✅.

⛔ Vzniká tím ale nesoulad: **titulek článku už říká „model zralosti", tělo pořád „AIO Maturity Model™".** Přejmenovat framework je značkové rozhodnutí, ne jazykové — čeká na vyjádření uživatele.

## ⛔ Kontrola kontextu podruhé zachránila publikaci

Diff odhalil **systematickou chybu z dřívějších runů**: náhrada `organic traffic` → `organická návštěvnost` nechala v genitivních vazbách zbytek koncovky a vyrobila tvar **„organická návštěvnostu"**. Byl ve **třech článcích** (aio-strategie 2×, aeo-optimalizace-v-praxi 1×) a dva z nich jsem den předtím uzavřel jako čisté.

Slovník má nově v § 9.4 explicitní varování: **po každé náhradě podstatného jména projeď grep na okolní tvary.**

## ⛔ Kontrola kontextu je od 23. 8. 2026 povinná — a proč

Na pokyn uživatele jsem zavedl povinnou kontrolu kontextu u **každé** náhrady (`SKILL.md` krok 3, slovník § 9.4) a hned ji použil zpětně: nechal jsem gpt-5.4 projet **všech 430 řádků, které jsem během sedmi auditů změnil**.

**Výsledek: 35 gramatických chyb, které jsem sám vyrobil dávkovými náhradami a byly živě na webu.**

| Typ chyby | Příklad |
|---|---|
| **špatný pád po předložce** | „P1 podle **scénář použití**", „Bez **výchozí stav** nelze říct", „s lokálním **budování odkazůem**" |
| **neshoda rodu** | „krátká odpověď je **dobrý**", „krátká odpověď **schovaný**", „**Žádný** krátká odpověď", „**Jaké** strukturovaná data" |
| **neshoda čísla** | „1 000 **organické relace**/měsíc", „propad **organické relace**", „**vysoké zobrazení, nízký** CTR" |
| **rozbitá vazba** | „Pro **obsluhované území firmu**", „na **účtovaný po kreditech** systém", „nad vaším konkrétním **measurement nastavení**" |
| **zdvojení a překlepy** | „výpisem produktů **produktů**", „bez vlastního SEO **specialistya**", „**vydavately**" |

Všech 35 opraveno v šesti článcích. **Poučení je jednoznačné:** regex umí najít slovo, ale neumí ho ohnout. Dávková náhrada je návrh, ne úprava — a bez přečtení výsledné věty produkuje text horší než ten, který opravuje.

### Osmá díra v nástroji: položky seznamu ve frontmatteru

Živá kontrola po opravě gramatiky ukázala výraz `organic search` na stránce, který checker nehlásil. Důvod: regex na textová pole frontmatteru neuměl tvar **položky seznamu** — `  - q: "…"` a `  - a: "…"`. Viděl tedy `answer:` a `description:`, ale **ne jednotlivé otázky a odpovědi ve FAQ**.

Opraveno, checker nově chytá i položky seznamu. Okamžitý dopad: 2 nálezy ve dvou už uzavřených článcích.

Přehled dosud nalezených děr v nástroji — jedna na článek:

| Článek | Co nástroj neuměl |
|---|---|
| 1 | plošná náhrada uvozovek rozbila HTML atribut |
| 2 | neauditoval frontmatter, plošná náhrada rozbila JSX prop |
| 3 | hlásil názvy JSX atributů (`fix=`) |
| 4 | hlásil hodnoty technických atributů (`class="pb-content"`), ⚠️ pravidla zaplavila výstup |
| 5 | — (chyba byla v obsahu slovníku: kontextově špatná náhrada) |
| 6 | — |
| 7 | glosářové regexy nepokrývaly skloňování |
| po 7 | **neviděl položky seznamu ve frontmatteru (`- q:`, `- a:`)** |

## ⛔ Otevřený nález pro celý korpus: glosářové termíny

Rozšíření regexů o skloňované tvary (`answer blockem`, `schema markupu`) odhalilo, že jde o **plošný problém, ne jednotlivosti**:

| Termín | Výskytů |
|---|---|
| `answer block*` (block, blocku, bloky, bloků, blockem) | 55 |
| `schema markup*` | 20 |
| `hub-and-spoke*` | 4 |

**79 výskytů v 11 článcích.** Nejhorší: `aeo-optimalizace-v-praxi` (33), `aio-strategie` (17), `geo-optimalizace` (12).

Všechny tři termíny má projekt **zakázané ve vlastním glosáři v `CLAUDE.md`**. Nejde tedy o stylistickou preferenci, ale o rozpor s vlastním pravidlem.

⛔ **Neopravovat plošným sedem.** Skloňování vyžaduje mapování tvarů (blocku → krátké odpovědi, bloky → krátké odpovědi, blockem → krátkou odpovědí) a každá věta se musí přečíst. Vhodné jako **jeden vyhrazený sweep** s buildem a kontrolou po každém článku.
