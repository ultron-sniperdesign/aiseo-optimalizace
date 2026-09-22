# Vypořádání auditů — refresh `ai-brand-mentions` (22. 9. 2026)

## Kolo 1 — osa faktů (3 × BLOCKER, 5 × WARNING, 2 × TIP)

### Zapracováno

- **[BLOCKER] Search Console není „zájem ve vyhledávání“ ze studie.** Věcná chyba na mé straně:
  v kontrolním seznamu stálo, že zájem ve vyhledávání „máte ve vlastní Search Console“. Search
  Console ukazuje výkon **vlastního webu** (dotazy a imprese, kde se zobrazil), ne celkovou
  poptávku po značce nebo kategorii. Přepsáno: proměnná se jmenuje, Search Console je popsaná
  tím, co umí, a pro celkový zájem text posílá jinam (Trends, nástroje na hledanost).
- **[BLOCKER] FAQ tvrdilo o českých dotazech víc než tělo.** V těle „může být důležitější…
  doložit to neumíme“, ve FAQ „**bývá** důležitější“, což zní jako pozorované pravidlo.
  Sjednoceno na „může být“ + výslovně „hypotéza k ověření, ne doložené pravidlo“.
- **[WARNING] „signál zmínek nedokumentuje nikde“** bylo širší než ověřený zdroj (kontroloval jsem
  dokumentaci Search Central k funkcím s AI, ne všechna veřejná vyjádření Googlu). Zúženo na
  „v dokumentaci Search Central k funkcím s AI“ — na **třech místech** (krátká odpověď, tělo, FAQ);
  ve FAQ navíc padlo „nikdo z provozovatelů“, protože jsem ověřoval jen Google.
- **[WARNING] Definice citace zdroje byla univerzální pro všechny systémy.** Mechanismus se liší
  (webové dohledání, vlastní index, konektory, nahrané dokumenty). Přeformulováno na „v AI
  vyhledávání obvykle“ a „z dostupných zdrojů“.
- **[WARNING] Slovo „signál“ v kontrolním seznamu** mohlo znít jako signál, který model používá.
  Nahrazeno „proměnná“ + věta, že z toho nejde vyvozovat příčinu.
- **[WARNING] „Tvrzení o sobě na vlastním webu nikdo nezávisle nepotvrdí“** — přepálené;
  tvrzení z vlastního webu potvrzené jinde být může. Přepsáno na „samo o sobě není nezávislé
  potvrzení“.
- **[WARNING] „nevyrobíte za týden“** — kampaň nebo virální událost krátkodobý zájem vyrobit umí.
  Zúženo na „stabilní zájem … dlouhodobou konverzaci … obvykle nevybudujete“.

### Nezapracováno

Žádný nález nebyl odmítnut. Dva TIPy byly potvrzení, že popis studie a ukotvení na rok 2026
sedí — bez zásahu.

## Kolo 2 — osa jazyka a struktury (2 × BLOCKER, 2 × WARNING, 3 × TIP)

**Oba blockery jsou znovu nedotažené opravy z kola 1** — stejný vzorec jako u předchozího runu,
proto to tady píšu natvrdo: opravím formulaci v těle a zapomenu na `answer` a FAQ.

### Zapracováno

- **[BLOCKER] Zúžení „dokumentace Search Central“ nedošlo do `answer` a FAQ.** V těle opraveno,
  na dvou dalších místech zůstala širší formulace „v dokumentaci k funkcím s AI“. Doplněno.
- **[BLOCKER] Náhrada „signál“ → „proměnná“ zůstala jen v kontrolním seznamu.** Tělo i FAQ dál
  psaly o „signálech viditelnosti“, což je přesně ten dojem, kvůli kterému se to měnilo. Opraveno
  v obou.
- **[WARNING] Dva H2 měly `hl` na slově, které není pojem** („nedělat“, „odnést“). Přepsáno na
  „zmínek o značce“ a „viditelnosti značky v AI“, pointa zůstala v `strong`.
- **[WARNING] Dvě odpovědi ve FAQ nebyly sebestačné** („Odpovědi s citacemi…“, „Nedá se to
  takhle srovnat…“). První věty doplněny o předmět.
- **[TIP] „off-page“ přeloženo při prvním použití** („vrstva mimo vlastní web“) a v druhém
  výskytu nahrazeno českou formulací.
- **[TIP] Anglické citace dostaly český překlad před sebe** — u „limited evidence“ i u dlouhé
  citace o pozorovaných vztazích. Originál zůstává v závorce jako doklad.
- **[TIP] Popisek odkazu „Organization schema“** → „typ Organization“ (název typu je vlastní
  jméno, zbytek česky).

### Nezapracováno

Žádný nález nebyl odmítnut.

## Jazykový průchod

- **Mechanický checker:** **0 nálezů** hned na první průchod (2 025 slov, slovník v72).
- **LLM průchod (gpt-5.4):** 6 nálezů, všech 6 zapracováno — „prominenci nevysvětluje“
  → „pořadí v doporučeních nevysvětluje“, „které značky se vytáhnou“ → „které značky model
  vybere“, shoda přísudku „uchází → ucházejí dva zdroje“, „proměnná, se kterou studie našla
  souvislost“ → „u které“, „doplnit odjinud“ → „zjistit odjinud“, „aby zmínky měly na co
  navázat“ → „z čeho vycházet“.
- **Nové pravidlo do slovníku: žádné.** Všech 6 nálezů závisí na významu věty a neprojde testem
  „poznám vadu bez toho, abych rozuměl zbytku věty?“. Slovník zůstává na **v72**.
