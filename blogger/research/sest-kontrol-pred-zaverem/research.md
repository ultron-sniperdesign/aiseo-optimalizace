# Research — Šest kontrol, než z měření uděláte závěr

Datum: **13. 8. 2026** · typ: nový článek (analysis) · řádek plánu: `kde vsude uz nemam hadat` · slug po auditu změněn na `sest-kontrol-pred-zaverem` (článek ještě nebyl publikovaný)

⛔ **Psát jako metodiku pro čtenáře, ne jako zpověď.** Každý případ slouží jako doklad k pravidlu, které si čtenář odnese. Ne obráceně.

Všechny případy jsou doložené — jsou publikované jako opravy v článcích na tomhle webu, nebo je vidět v historii repozitáře.

## Případ 1 — odhadnutá adresa souboru (3× po sobě)

Zdroj: [kdo-publikuje-ip-rozsahy](/blog/kdo-publikuje-ip-rozsahy/), 11. 8. 2026.

- **Anthropic**: tipnul jsem `anthropic.com/claudebot.json` → 404. Soubor je na doméně `claude.com`.
- **ByteDance**: vymyšlená adresa vrátila **200, ale s HTML stránkou**, ne se seznamem.
- **Amazon**: hledal jsem `.json` na adresách odvozených z konvence ostatních → 404. Amazon publikuje **tři HTML stránky**.

**Pravidlo:** 404 na hádané adrese není doklad o tom, že provozovatel nic nepublikuje. Je to doklad o tom, že jsem hádal špatně.

## Případ 2 — stavový kód místo obsahu

Zdroj: [llms-txt-falesne-pozitivni](/blog/llms-txt-falesne-pozitivni/), 11. 8. 2026.

Zeptal jsem se 80 webů na soubor, který nemůže existovat. **Pět vrátilo 200 s HTML** místo 404. Naivní test podle stavového kódu proto napočítá 52 webů s `llms.txt`; neprázdný textový obsah mají **tři**.

**Pravidlo:** test podle stavového kódu měří dostupnost adresy, ne existenci obsahu. Vždycky se podívat na typ obsahu a na tělo.

## Případ 3 — co vyhodnotí skript, ještě není nález

Zdroj: [text-bez-javascriptu-mereni](/blog/text-bez-javascriptu-mereni/), 12. 8. 2026.

Automatika ve dvou kolech nahlásila **23 chybějících hlavních textů**. Po ruční kontrole nebyl pravý **ani jeden**: lišty se souhlasem jako nejdelší odstavec, hláška o vypršelém CSRF tokenu, kus JavaScriptu uvnitř `<p>`, text ze stránky 404.

**Pravidlo:** dokud se na nález někdo nepodíval, je to hypotéza.

## Případ 4 — chyba v mém nástroji vypadala jako chyba cizích webů

Zdroj: [kodovani-stranky-a-stroje](/blog/kodovani-stranky-a-stroje/), 13. 8. 2026.

Dva z těch 23 falešných nálezů způsobilo to, že jsem dekódoval natvrdo UTF-8. Weby posílají **windows-1250** a správně to deklarují. Následné měření na 80 doménách: **nula webů posílá jiné kódování, než deklaruje.**

**Pravidlo:** než obviním měřený objekt, mám vyloučit vlastní nástroj. Selhání jen u části vzorku je typický příznak chyby na straně čtenáře.

## Případ 5 — „nenašel jsem" napsané jako „neexistuje"

Dvě doložená místa:

- [overovani-ai-robotu](/blog/overovani-ai-robotu/): napsal jsem, že Common Crawl strojový seznam na obvyklé adrese nemá. **Má** — `commoncrawl.org/ccbot.json`. A že IPv6 publikuje jen Google; **CCBot má jeden prefix**. Opraveno 11. 8.
- [javascript-a-ai-roboti](/blog/javascript-a-ai-roboti/): na čtyřech místech stálo „jediné veřejné měření, které **existuje**". Opraveno 13. 8. na „které jsem našel", plus datum opakovaného hledání.

**Pravidlo:** rozdíl mezi „nenašel jsem" a „neexistuje" je celý rozdíl mezi doloženým a nedoloženým tvrzením.

## Případ 6 — přepis z dat do textu je taky krok, kde se chybuje

- [bytespider-ceska-media](/blog/bytespider-ceska-media/): v tabulce jsem měl u `Claude-Web` **5**, naměřeno **6**. Devět z deseti hodnot sedělo. Odhalila to až kontrola nového parseru proti starším datům.
- [gptbot-bez-oai-searchbot](/blog/gptbot-bez-oai-searchbot/): tabulka nadepsaná „Tři roboti OpenAI". Dokumentace jich popisuje **čtyři** — chyběl `OAI-AdsBot`.

**Pravidlo:** měření může být správné a článek přesto špatně. Čísla v textu porovnat se zdrojovými daty, ne s pamětí.

## Co článek NEDĚLÁ

- ⛔ Netvrdí, že takhle chybuje každý. Mluví za sebe a nabízí pravidla.
- ⛔ Nezobecňuje na „AI SEO obor". Data mám jen o vlastní práci.
- ⛔ Není to omluva ani sebemrskačství. Každý případ je už opravený a opravy jsou v článcích vidět.

## Zdroje

Publikované opravy na tomhle webu (odkazy výš) a historie repozitáře.
