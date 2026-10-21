# Vypořádání refreshe — `kolik-stoji-ai-seo` (21. 10. 2026)

Pravidlo Z18. **Audity běží přes Codex** (skill `predat-codexu`, `codex exec`, úsilí high) — OpenAI API vrací 429
bez kreditů, rozhodnutí uživatele 21. 10. 2026. Codex dostal článek, research a **texty všech ceníků načtené 21. 10.**
a ceny ověřoval proti nim. Každá oprava dohledaná v celém souboru včetně frontmatteru (Z17) — grep na
`28 000|1 000 až|1 400|nejméně 743|nejnižší|většina|jediný ceník|9 PDF|hlavně jako součást|stojí podobně|první audit zdarma|kategorie od 18 Kč a produkty`.

## Kolo 1 — osa faktů (Codex, `audit1-refresh-2026-10-21.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 4× BLOCKER, 7× WARNING. Auditor zároveň potvrdil přepočtem většinu čísel
(rozpětí auditů 6 000–19 900, 3 + 5 = 8 u DPH, 4 ze 6, 125 × 4 = 500, 499 + 499 = 998, 3 600 × 1,21 = 4 356,
Upgates moduly 1 300–10 400).

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| Ceník balíčků hodin (20 h = 28 000 Kč) je na stránce v kategorii **„Služby, které jsme nahradili jinými“** | BLOCKER | ověřeno ve zdroji; ceník vyřazen. Měsíční správa teď **8 000–16 900 Kč** (tři poskytovatelé pro AI), řádek agentury s balíčky hodin uvádí 38 000 Kč bez DPH **bez počtu hodin**; hodinová sazba jen ze dvou konzultantů **1 600–2 500 Kč** — `answer`, úvod, FAQ 1, 3, 4, tabulka, sekce o hodinách |
| „Nejméně 743 Kč“ bez fakturační podmínky; Otterly a Semrush jen měsíční ceny | BLOCKER | „při měsíční platbě“ v úvodu, FAQ 5 a záhlaví tabulky; tarif Collabimu je při delším předplatném levnější; Otterly 25 $, Semrush 165,17 $ při roční platbě |
| Vlastní audit „nejnižší placená vstupní cena ve vzorku“ — konzultant H má videoaudit za 990 Kč | BLOCKER | „méně než vstupní ceny pěti placených auditů s AI vrstvou v tabulce výš; rozsah se liší“; u konzultantů doplněn videoaudit 990 Kč a „plný“ SEO audit |
| AI kredity Marketing Mineru platí 30 dní | BLOCKER | doplněno do tabulky nástrojů |
| „Počet hodin uvádí jediný ceník“ — konzultant H dává orientační odhad 8–10 h za 15 000 Kč | WARNING | „Počet hodin u ceny výslovně neuvádí žádný z ceníků“ + odhad konzultanta jako odhad; checklist: „jestli je počet hodin závazek, nebo odhad“ |
| „Většina poskytovatelů“ (4 z 8 = polovina) a „v Česku hlavně … stojí podobně“ | WARNING | FAQ 1: „Čtyři ze šesti poskytovatelů s nabídkou pro AI ji spojují s klasickým SEO“; závěr: „Ve vzorku se … účtuje stejnými formami jako SEO“; H2 „a jak se účtuje AI“ |
| Bezplatný vstup jen u jednoho poskytovatele — ve zdrojích jsou tři | WARNING | ověřeno (první audit, miniaudit do 48 h, test na třech dotazech); FAQ 2 a věta pod tabulkou auditů, „s placeným auditem ale nejde o totéž“ |
| Collabim: hlavní popis tři služby, FAQ stránky i Přehled od AI a režim AI | WARNING | ověřeno; řádek tabulky „v častých dotazech i Přehled od AI a režim AI“. Opravena i poznámka v plánu (ř. kde-se-meri) |
| „U zahraničních nástrojů ceník DPH neuvádí“ — Otterly u doplňků „excluding tax“ | WARNING | „Semrush daňový režim neuvádí, Otterly u doplňků píše, že ceny jsou bez daně“ |
| Obsah „kategorie od 18 Kč a produkty od 34 Kč“ bez rozsahu | WARNING | „krátké odpovědi do kategorií od 18 Kč … FAQ k produktům od 34 Kč … vstupní analýza od 1 300 Kč“ |
| Pack: „9 PDF a souhrnné PDF“ proti `pack.ts` („vše v jednom master PDF“) | WARNING | počet souborů z věty vypuštěn — v článku zůstalo jen ověřené: sedm typů stránek, 1 490 Kč včetně DPH. Rozpor Z3 × `pack.ts` × CLAUDE.md předán adminovi |

### Nezapracováno + důvod

Nic — všechny nálezy přijaty. Dvě opravy navíc jsem našel sám ještě před výsledkem auditu a kryjí se s nálezy 2 a 5
(minimum Collabimu bez fakturačního období, hodiny u konzultanta H).

## Kolo 2 — osa jazyka a struktury + kontrola vypořádání (Codex, `audit2-refresh-2026-10-21.md`)

Verdikt: OPRAVIT PŘED PUBLIKACÍ — 2× BLOCKER, 4× WARNING. Z 11 oprav kola 1 auditor potvrdil devět;
**oba blockery jsou moje nedotažené opravy z kola 1** (nález 4 a 5), ne nové vady.

### Zapracováno

| Nález | Úroveň | Co se změnilo |
|---|---|---|
| 30denní platnost kreditů Marketing Mineru je jen v tabulce, ne ve FAQ 5 | BLOCKER | FAQ 5: „AI kredity Marketing Mineru platí 30 dní“ |
| „Počet hodin u ceny výslovně neuvádí žádný z ceníků“ dál popírá výslovný (byť orientační) odhad konzultanta; totéž v checklistu | BLOCKER | „Žádný z ceníků nespojuje cenu se závazným počtem hodin.“; checklist: odhad 8 až 10 hodin za 15 000 Kč + „jestli jde o závazek, nebo odhad“ |
| Šest H2 oznamuje téma, ne pointu; „plyne“ jako klíčový pojem | WARNING | „o ceně rozhoduje rozsah práce“, „AI se ve vzorku účtuje stejnými formami“, „pevnou cenu má audit a obsah“ (shoda se `sluzby.ts`), „nechte si potvrdit rozsah, hodiny a DPH“, „částka bez rozsahu nic neřekne“, „Co srovnávat — rozsah, hodiny a DPH, ne samotnou částku“. Na článek nikdo neodkazuje s kotvou, změna id nevadí |
| FAQ 2, 3, 4, 6 bez předmětu při čtení bez otázky | WARNING | úvody pojmenovávají audit „zaměřený také na viditelnost v AI“, „měsíční správu SEO a viditelnosti v AI“, „konzultanty SEO“, „ceny SEO a péče o viditelnost v AI“ |
| Anglicismy „reportingem“, „meeting“, „FAQ k produktům“ ve vlastním výkladu | WARNING | „s pravidelným přehledem výsledků“, „schůzka 30–60 minut“, „odpovědi na časté dotazy k produktům“ |
| `answer` začíná metodikou, ne předmětem | WARNING | „Vstupní ceny auditů zaměřených také na viditelnost v AI se ve vzorku … pohybují od 6 000 do 19 900 Kč; měsíční správa …“ (56 slov); stejně první věta těla |

### Nezapracováno + důvod

Nic. U H2 jsem nepřevzal doslova navržená znění („Ceny Sniper Design — … technické úpravy naceníme podle rozsahu“,
„zveřejnili ji dva konzultanti ve vzorku“): první by v nadpisu slibovalo nacenění, které článek nerozebírá, druhé
je spíš popis vzorku než pointa. Použitá znění drží smysl nálezu a čísla v nadpisech nejsou.

## C5b — doověření zásadních oprav (Codex, vlákno kola 1, `c5b-refresh-2026-10-21.md`)

Poslány nálezy 1–5 kola 1 (čtyři blockery a nedotažený nález 5) včetně obou blockerů kola 2, se zdroji ve složce
auditu — poučení z 14. 10. (podklad ke každé větě posílané pasáže). **Všech pět OBSTOJÍ na první pokus.**

## Jazykový průchod (C6)

| Průchod | Výsledek |
|---|---|
| Mechanický checker (slovník v73) | **0 nálezů** ve všech verzích |
| Kontrola komponent (Z13) | **0 nálezů**, 7 použití komponent |
| LLM průchod (Codex místo gpt-5.4, celý slovník) | **3 nálezy, všechny přijaty** |

Opraveno: „s placeným auditem ale nejde o totéž“ → „nejde ale o totéž co placený audit“ (2×) · „Kolik práce je v ceně,
se proto vyplatí dát do poptávky“ → „V poptávce se proto vyplatí zeptat, kolik práce je v ceně“ · „účtuje stejnými
formami (jako SEO)“ → „účtuje stejným způsobem (jako SEO)“ (3× včetně H2) — místo navrženého „stejně jako SEO“, které
by se dalo číst jako stejná cena (to kolo 1 výslovně vyloučilo). **Nová pravidla do slovníku žádná.**
