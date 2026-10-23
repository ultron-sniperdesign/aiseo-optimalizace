# Finální audit: Formát obsahu podle záměru dotazu

**Datum:** 23. 10. 2026
**Auditovaný soubor:** `src/content/articles/format-obsahu-podle-zameru-dotazu.mdx`
**Verdikt:** **OPRAVIT PŘED PUBLIKACÍ**

Článek je obsahově silný, dobře vystavěný a většina předchozích připomínek je skutečně zapracovaná. K publikaci jej zatím nedoporučuji: podmínky způsobilosti pro generativní funkce Googlu zůstávají neúplné oproti primárnímu zdroji i tabulce podmínek v rešerši. Jedna jazyková připomínka je ve vypořádání označená jako uzavřená, ale aktuální titulek ji řeší jen částečně. Tři další formulace potřebují menší zpřesnění.

## Nové a neuzavřené nálezy

### 1. [BLOCKER] V obou výčtech stále chybí běžné technické požadavky Vyhledávání

**Pasáž ve FAQ:**

> „Stránka ale musí být v indexu, způsobilá k zobrazení s úryvkem a web musí být zahrnutý do generativních funkcí v Search Console.“

**Pasáž v těle:**

> „Aby se stránka mohla v těchto funkcích zobrazit, musí být v indexu a způsobilá k zobrazení s úryvkem ve Vyhledávání. Web zároveň musí být zahrnutý do generativních funkcí v nastavení Search Console.“

Předchozí faktický audit požadoval indexaci, způsobilost k úryvku, zahrnutí v Search Console a upozornění, že zobrazení není zaručeno. Tyto čtyři části v aktuálním textu skutečně jsou. Jeho závěr „všechny podmínky“ je však širší než provedená oprava.

Aktuální průvodce Googlu uvádí, že stránka musí být indexovaná a způsobilá k zobrazení s úryvkem **při splnění technických požadavků Google Search**; zahrnutí webu v Search Console je další podmínkou. Totéž zachycuje tabulka podmínek v `research.md`. Zdroj: [Google Search Central — Optimizing your website for generative AI features, část Build and maintain a clear technical structure](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#build-and-maintain-a-clear-technical-structure).

Podle `auditor-system.md` je vynechaná podmínka u tvrzení o cizí platformě blocker.

**Konkrétní oprava:** v FAQ i těle doplnit „splňovat technické požadavky Vyhledávání“, například:

> „Stránka musí splňovat technické požadavky Vyhledávání Google, být v indexu a být způsobilá k zobrazení s úryvkem. Web zároveň musí být zahrnutý do generativních funkcí v Search Console. Ani splnění těchto podmínek zobrazení nezaručuje.“

Poznámka k předběžnému auditu: shoda strukturovaných dat s viditelným textem je podle dokumentace důležitá obecná SEO zásada, nikoli samostatná podmínka způsobilosti pro generativní funkce. Do opravy blockeru ji proto nezařazuji jako povinnou podmínku. Tvrzení článku, že nejsou potřeba zvláštní strukturovaná data pro AI funkce, je správné.

### 2. [WARNING] Titulkový nález jazykového auditu není plně vypořádaný

**Aktuální titulek:**

> „Formát obsahu podle záměru dotazu — kdy odpověď, návod, srovnání nebo stránka“

Jazykový audit vytkl, že obecná „stránka“ stojí vedle vnitřních formátů a rozmělňuje hlavní rozlišení článku. Navrhl „prodejní stránku“. `vyporadani.md` tvrdí, že neurčité „kdy stránka“ bylo odstraněno, aktuální titulek však stále končí slovy „nebo stránka“. Byla odstraněna jen část původní konstrukce, ne její věcný problém.

**Konkrétní oprava:** použít původně doporučené znění:

> „Formát obsahu podle záměru dotazu — kdy odpověď, návod, srovnání nebo prodejní stránka“

Případně zvolit jinou konkrétní stránku, ale nenechávat samotné „stránka“.

### 3. [WARNING] Přesných „padesát slov“ není v rešerši doloženo

**Pasáž:**

> „U jednoduchého faktu může stačit padesát slov.“

Rešerše podporuje stručnou definici, nikoli konkrétní hranici 50 slov. Číselná formulace může působit jako doporučená norma a oslabuje pozdější správné tvrzení, že počet slov má vyplynout z úlohy. Také aktuální průvodce Googlu výslovně říká, že neexistuje ideální délka stránky. Zdroj: [Google Search Central — Optimizing your website for generative AI features, část Avoid ineffective or manipulative practices](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#avoid-ineffective-practices).

**Konkrétní oprava:**

> „U jednoduchého faktu může stačit několik přesných vět.“

### 4. [WARNING] Příklad změny výsledků v čase končí nepodmíněnou předpovědí

**Pasáž:**

> „Při nové regulaci může dotaz na produkt dočasně přitáhnout zpravodajské výsledky; po odeznění události se vrátí nabídky a recenze.“

`audit-fakta.md` tuto myšlenku ověřil jako věcně možnou, „pokud zůstane formulována jako možnost“. První část podmínku splňuje, druhá nikoli: budoucí návrat nabídek a recenzí tvrdí jistě. Výsledky se mohou změnit jinak nebo změna může přetrvat.

**Konkrétní oprava:**

> „Při nové regulaci může dotaz na produkt dočasně přitáhnout zpravodajské výsledky; po odeznění události se mohou znovu prosadit nabídky a recenze.“

### 5. [TIP] Zdroj malé studie lze pojmenovat přímo

**Pasáž:**

> „Menší analýza citací v ChatGPT také zjistila, že zastoupení číslovaných seznamů se výrazně lišilo podle záměru dotazu.“

Faktický audit ověřil studii AIVO a navazující interní článek obsahuje rozbor i limity. Tvrzení tedy není nedoložené, ale pojmenování zdroje by zvýšilo transparentnost.

**Konkrétní oprava:**

> „Malá studie AIVO zaměřená na citace v ChatGPT zjistila…“

Odkaz na interní rozbor ponechat.

### 6. [TIP] „Homepage“ je jediný zbytečný anglicismus v rozhodovací matici

**Pasáž:**

> „homepage, přihlášení, kontakt, pobočka, nápověda“

**Konkrétní oprava:** nahradit „homepage“ výrazem „domovská stránka“ nebo „úvodní stránka“.

## Ověření vypořádání

### Faktický audit

| Nález z `audit-fakta.md` | Stav v aktuálním článku | Výsledek finální kontroly |
|---|---|---|
| Podmínky pro generativní funkce Googlu | Indexace, úryvek, zahrnutí v Search Console i absence garance jsou v FAQ a těle | **ČÁSTEČNĚ UZAVŘENO.** Chybí výslovná podmínka splnění technických požadavků Vyhledávání; viz blocker 1. |
| Výsledky nejsou důkazem úplného záměru | Text je popisuje jako vodítko k výběru z dostupného obsahu a výslovně uvádí jejich meze | **UZAVŘENO.** |
| Textová podoba informace byla připsána nesprávnému průvodci | Doporučení k textové podobě obrázků a videí je nyní samostatně připsáno obecnému vývojářskému průvodci | **UZAVŘENO.** |

CTA bylo znovu porovnáno s `src/content/pages/audit.ts`: název služby, cena 3 600 Kč bez DPH, kontrola obsahových mezer a technické připravenosti, seznam úprav podle priority i výstup do pěti pracovních dní od úhrady souhlasí.

### Jazykový audit

Z 21 položek `audit-jazyk.md` je **20 plně zapracovaných a 1 pouze částečně**:

- **Položka 1 — ČÁSTEČNĚ UZAVŘENA:** titulek už vyjmenovává odpověď, návod a srovnání, stále ale končí neurčitým „nebo stránka“; viz warning 2.
- **Položky 2–21 — UZAVŘENY:** aktuální text obsahuje deklarované náhrady. Původní problematické obraty jako `brief`, „odstranit tření“, „kurátorovaný přehled“, „servisní stránka“, „drobení textu“, „technická chuť modelu“ a „výsledky jsou důkazem“ se už v článku nevyskytují.
- Projektový checker skončil výsledkem: **2059 slov, 276 pravidel, 0 nálezů**.

## Ostatní ověřené body

- `seoTitle` má 53 znaků, začíná hlavním tématem a splňuje limit do 60 znaků.
- Meta description má 140 znaků a splňuje rozmezí 70–160 znaků.
- Pole `answer` má 48 slov, je samostatně srozumitelné a splňuje rozmezí 40–60 slov.
- H2 mají logickou hierarchii a používají projektové zvýraznění `<span class="hl">` i `<strong>`.
- Článek negarantuje pozici ani citaci, nepoužívá nátlak a rozlišuje typ stránky od vnitřního formátu.
- Datace je konkrétní; nejsou použité neukotvené výrazy „letos“ ani „příští rok“.
- CTA vede na konkrétní produkt a jeho parametry souhlasí s kanonickým datovým modulem.

## Meze kontroly

- Finální audit porovnal aktuální zdroj článku s `research.md`, `audit-fakta.md`, `audit-jazyk.md`, `vyporadani.md` a s předběžným nezávislým auditem.
- Zásadní platformní tvrzení bylo znovu ověřeno proti aktuální primární dokumentaci Google Search Central a nápovědě Search Console. Neproběhl nový úplný síťový audit všech odkazovaných zdrojů; u studie AIVO a obecných podkladů vychází kontrola také z dokladů zachycených ve faktickém auditu.
- CTA bylo ověřeno proti lokálnímu kanonickému souboru `src/content/pages/audit.ts`; živý objednávkový tok nebyl testován.
- Nebyl spuštěn build ani vizuální render stránky, protože článek nebyl upravován a zadání požadovalo obsahový audit. Kontrola proto neposuzuje výsledné rozložení tabulek a komponent v prohlížeči.
- `git status` v době auditu uváděl článek jako nový nesledovaný soubor. Před nasazením je nutné jej zahrnout do commitu; audit žádné soubory článku neupravoval.

## Podmínka publikace

Před publikací je nutné opravit blocker 1 a znovu zkontrolovat obě pasáže o podmínkách Googlu. Warningy 2–4 mají jasné lokální opravy a doporučuji je uzavřít ve stejném průchodu. Tipy 5–6 nejsou samy o sobě překážkou publikace.

## C5b — doověření finálního auditu

**Verdikt: PUBLIKOVAT**

Doověření bylo omezené na šest nálezů finálního auditu. Všechny jsou v aktuálním článku skutečně opravené a aktualizované `vyporadani.md` odpovídá zdrojovému textu:

1. **Technické požadavky — UZAVŘENO.** FAQ nyní uvádí, že stránka musí splňovat technické požadavky Vyhledávání Google, být v indexu a být způsobilá k zobrazení s úryvkem; doplňuje zahrnutí webu do generativních funkcí v Search Console a výslovně říká, že ani splnění podmínek zobrazení nezaručuje.
2. **Technické požadavky v těle — UZAVŘENO.** Hlavní pasáž obsahuje stejný úplný soubor podmínek a zachovává správné oddělení obecného vývojářského doporučení k textové podobě informací.
3. **Titulek — UZAVŘENO.** Titulek nyní končí konkrétním spojením „nebo prodejní stránka“.
4. **Nedoložených padesát slov — UZAVŘENO.** Číselná hranice byla nahrazena formulací „několik přesných vět“.
5. **Změna výsledků v čase — UZAVŘENO.** Návrat nabídek a recenzí je správně podmíněný formulací „mohou se znovu prosadit“.
6. **Pojmenování studie a anglicismus — UZAVŘENO.** Text přímo jmenuje studii AIVO a „homepage“ byla nahrazena „domovskou stránkou“.

V rozsahu C5b nezůstal žádný blocker ani warning. Článek nebyl při doověření upraven; změněn byl pouze tento auditní záznam.
