1. **blokující** — **Sebestředný rámec odporuje zadání metodiky.**  
   **Citace:** „Za poslední dva týdny jsem na tomhle webu publikoval několik měření a u každého jsem cestou vyrobil aspoň jeden nález, který nebyl pravda.“  
   **Problém:** Úvod začíná autorovou bilancí místo čtenářského problému a postupu.  
   **Návrh opravy:** „Při ověřování tvrzení o AI a webu vzniká šest opakovaných typů chyb. Níž je postup, jak je poznat a jak jim předejít; každý bod je doložený opraveným případem z publikované praxe.“

2. **vážné** — **Případ 1 je rozepsaný víc jako osobní selhání než jako přenositelný postup.**  
   **Citace:** „Třikrát po sobě jsem měl skoro hotový závěr ‚tenhle provozovatel nic nepublikuje‘. Nebyla to pravda ani v jednom případě.“  
   **Problém:** Důraz je na autorově omylu, ne na metodě ověření.  
   **Návrh opravy:** „Tři různé případy ukazují stejnou chybu: odhadnutá URL neříká nic o tom, zda zdroj existuje. Postup je nejdřív dohledat oficiální dokumentaci, teprve pak testovat konkrétní adresu.“

3. **vážné** — **Neunesené zobecnění na čtení cizích studií.**  
   **Citace:** „Stejná pravidla fungují i obráceně — když někdo publikuje tvrzení typu ‚X % webů něco nemá‘.“  
   **Problém:** Z vlastních šesti případů se bez opory přechází k obecnému tvrzení, že „stejná pravidla“ platí pro audit cizích studií.  
   **Návrh opravy:** „Část těchto kontrolních otázek lze použít i při čtení cizích studií, hlavně u tvrzení založených na automatickém měření.“

4. **vážné** — **FAQ zbytečně zobecňuje pravděpodobnost bez podkladu.**  
   **Citace:** „Když něco nefunguje na pěti webech z osmdesáti a na zbytku ano, je pravděpodobnější, že těch pět má jinou legitimní konfiguraci, než že jsou rozbité.“  
   **Problém:** „je pravděpodobnější“ je obecné tvrzení bez doložení; research mluví jen o jednom konkrétním případu kódování.  
   **Návrh opravy:** „Když něco nefunguje jen u malé části vzorku, je rozumné nejdřív prověřit vlastní nástroj a rozdíly v konfiguraci těchto webů.“

5. **blokující** — **Rozpor v číslech 52 / 3 není vysvětlený a může působit jako chyba.**  
   **Citace:** „Naivní test podle stavového kódu proto napočítá 52 webů se souborem `llms.txt`. Neprázdný textový obsah mají tři.“  
   **Problém:** Čtenář neví, jak se z „pět vrátilo 200 s HTML místo 404“ vztahuje k „52 webů se souborem“. Chybí vazba mezi falešně pozitivními odpověďmi a celkovým počtem nalezených 200.  
   **Návrh opravy:** „Ve vzorku vyšlo podle samotného status kódu 52 pozitivních odpovědí. Ruční kontrola ale ukázala, že pět z nich byly HTML stránky vrácené omylem; po odfiltrování zůstanou tři weby s neprázdným textovým `llms.txt`.“

6. **vážné** — **Rozpor mezi frontmatterem a tělem v míře zobecnění.**  
   **Citace (frontmatter):** „description: ‚Šest pravidel pro ověřování tvrzení o AI a webu…‘“  
   **Citace (tělo):** „Mluvím jen za svou práci na tomhle webu.“  
   **Problém:** Frontmatter slibuje obecná pravidla pro ověřování tvrzení, tělo limity výrazně zužuje na autorovu praxi.  
   **Návrh opravy:** Upravit frontmatter na: „Šest praktických kontrol pro ověřování tvrzení o AI a webu, odvozených z šesti doložených a opravených chyb v publikované praxi autora.“

7. **drobné** — **FAQ „Jaká je nejčastější chyba“ tvrdí pořadí bez podkladu.**  
   **Citace:** „Jaká je nejčastější chyba při ověřování? — Uvěřit stavovému kódu.“  
   **Problém:** Z podkladu neplyne, že jde o „nejčastější“ chybu. Je to jen jedna ze šesti.  
   **Návrh opravy:** „Jaká je jedna z častých chyb při ověřování? — Uvěřit stavovému kódu.“

8. **vážné** — **Pravidlo 4 je použitelné jen napůl; věta o „typickém příznaku“ je přestřelená.**  
   **Citace:** „Selhání jen u části vzorku je typický příznak chyby na straně čtenáře.“  
   **Problém:** Tohle není obecně bezpečné pravidlo; stejný vzorec může značit i skutečný problém menšiny webů.  
   **Návrh opravy:** „Selhání jen u části vzorku je signál k dvojí kontrole: nejdřív vlastního nástroje, potom společných vlastností postižených webů.“

9. **drobné** — **Klišé a vata v závěru.**  
   **Citace:** „Žádné z nich není objevné.“ / „ta rychlejší varianta vždycky vypadá dostatečně dobře“  
   **Problém:** Obecné, neinformační věty bez nové hodnoty.  
   **Návrh opravy:** Zkrátit na: „Společný vzorec je stejný: rychlá zkratka nahradí kontrolu zdroje, obsahu nebo hotového textu.“

10. **drobné** — **Falešná skromnost oslabuje metodický tón.**  
    **Citace:** „Tenhle text není omluva.“ / „Není to úplný seznam všeho, co se dá pokazit; je to seznam toho, co jsem si za dva týdny stihl pokazit sám.“  
    **Problém:** Obranné formulace vracejí text ke zpovědi, kterou mělo zadání potlačit.  
    **Návrh opravy:** „Text pokrývá šest doložených typů chyb z posledních dvou týdnů; nejde o úplnou taxonomii, ale o praktický kontrolní seznam.“

11. **vážné** — **Sekce „Tři chyby, které jsou pod tím vším“ není plnohodnotné pravidlo, ale interpretace bez nové opory.**  
    **Citace:** „Zaměnit nepřítomnost důkazu za důkaz nepřítomnosti“, „Věřit vrstvě, která je nejblíž po ruce“, „Kontrolovat data a nekontrolovat text“.  
    **Problém:** Po šesti pravidlech přidává další tři abstraktní rámce. To tříští metodiku a vrací text k autorově reflexi.  
    **Návrh opravy:** Buď sekci smazat, nebo ji převést na stručné „Společný vzorec šesti případů“ se dvěma větami bez karet a nového číslování.

12. **drobné** — **Title/slug/body nejsou úplně sladěné v orientaci na čtenáře.**  
    **Citace:** `title: "Šest míst, kde jsem hádal a měl se zeptat zdroje"` / `slug: "kde-jsem-hadal"`  
    **Problém:** Titulek i slug staví do popředí autora; to jde proti zadání „metodika pro čtenáře, ne zpověď“.  
    **Návrh opravy:** Title: „Šest kontrol, než z měření uděláte závěr“; slug: `sest-kontrol-pred-zaverem`.