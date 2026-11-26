# Vypořádání auditů — ai-act-pro-weby

## Audit 1 (Codex, osa fakta, 26. 11. 2026) — OPRAVIT PŘED PUBLIKACÍ

Každý nález jsem ověřil proti dodaným primárním textům (`aiact-cs-vyber.txt` čl. 3 a 50, `omnibus-cs.txt`,
`ec-guide.txt`, `ec-faq-cop.txt`). Všech 13 nálezů je věcně správných a přijímám je. Kde auditor navrhl přesné
znění, převzal jsem ho doslovně nebo s minimální úpravou slovosledu.

| # | Závažnost | Nález | Verdikt | Co se změnilo |
|---|---|---|---|---|
| 1 | BLOCKER | U AI textu chybí redakční odpovědnost; společná věta s deepfakem | přijato | úvod, FAQ 2, tabulka (samostatný řádek „4 — text“), Checklist „AI texty“ a shrnutí: (lidský přezkum **nebo** redakční kontrola) **a** redakční odpovědnost fyzické nebo právnické osoby; deepfake má vlastní větu i řádek tabulky, výjimka pro text se na něj nevztahuje |
| 2 | BLOCKER | U chatbotu chybí výjimka zřejmosti v úvodu a shrnutí, test je zkrácený | přijato | celý test (přiměřeně informovaná, pozorná a obezřetná osoba, okolnosti a kontext použití) v úvodu, tabulce, FAQ 1, Checklistu a shrnutí; v `answer` „podle okolností a kontextu“ kvůli limitu 60 slov |
| 3 | BLOCKER | Výjimky pro trestní řízení chybějí nebo jsou rozšířeny na „vymáhání práva“ | přijato | tabulka: u každého odstavce přesné znění (odst. 1 s návratem povinnosti u veřejného hlášení trestných činů, odst. 3 bez stíhání); souhrny v `answer`, úvodu, Checklistu a shrnutí odkazují na „další výjimky podle tabulky“; FAQ 1 a 2 výjimku vypisují |
| 4 | BLOCKER | Alternativní výjimky odst. 2 sloučeny; Checklist ukládá povinnost každému generátoru | přijato | tabulka: „asistenční funkci pro standardní editaci nebo podstatně nemění vstupní údaje … či jejich sémantiku (stačí jedna z obou podmínek)“ + trestní výjimka + lhůta 2. 12. 2026; Checklist „Vlastní generátor obsahu“ doslovně podle auditora; věta o technických řešeních za tabulkou doslovně |
| 5 | BLOCKER | Chybí obsah manipulovaný AI a zjistitelnost | přijato | odst. 2: „označeny ve strojově čitelném formátu a zjistitelné jako uměle vytvořené nebo manipulované“; odst. 4: „uměle vytvořen nebo manipulován“ / „umělé vytvoření či manipulaci s textem“ všude (úvod, FAQ 2 a 5, Checklist, shrnutí); definice deepfaku doslovně podle čl. 3 bodu 60 včetně „subjektům“ a „autentický nebo pravdivý“ |
| 6 | BLOCKER | Režim tvůrčích děl neúplný | přijato | tabulka a Checklist: zjevně umělecké, tvůrčí, satirické, fiktivní či obdobné dílo nebo program; povinnost omezena na zveřejnění existence obsahu vhodným způsobem, který nebrání zobrazení nebo užívání díla |
| 7 | BLOCKER | Odklad podán jako odklad všech povinností vysoce rizikových systémů | přijato | FAQ 3 a sekce Omnibus doslovně: kapitola III oddíly 1–3 s výjimkou čl. 6 odst. 5, „Nejde o odklad všech povinností těchto systémů“; nový odstavec o čl. 111 odst. 2 doslovně; shrnutí doslovně podle auditora |
| 8 | BLOCKER | „AI Act nesouvisí s DSA“ odporuje čl. 75 odst. 1 písm. b) | přijato | odstavec nahrazen zněním auditora (propojený dozor, výlučná příslušnost Úřadu pro AI, osobní rozsah); odkaz na článek o DSA s popisným textem odkazu |
| 9 | BLOCKER | Dozor a sankce přisouzeny jen členským státům | přijato | znění auditora + věta ze stránky Komise, kdo pravidla čl. 50 vymáhá (národní orgány dozoru nad trhem, Úřad pro AI, evropský inspektor ochrany údajů); H2 nově „Kdo dohlíží — Úřad pro AI a český dozor…“ |
| 10 | WARNING | Nadpis podává srpnový stav jako současný | přijato | H2: „…český dozor podle zprávy ze 4. 8. 2026“; FAQ 4 a odstavec: „tehdy procházel“, aktuální stav k 26. 11. 2026 se ověřit nepodařilo |
| 11 | WARNING | „Čtyři povinnosti, každou pro jinou roli“ | přijato | doslovně: „rozlišuje čtyři skupiny povinností: odstavce 1 a 2 pro poskytovatele a odstavce 3 a 4 pro zavádějící subjekty“; H2 „čtyři skupiny povinností“ |
| 12 | WARNING | Záměna platnosti a použitelnosti; „před srpnem“ | přijato | „vyhlášeno 24. 7. 2026 a vstoupilo v platnost 27. 7. 2026. Data použitelnosti … se liší“; FAQ 3 „vstoupilo v platnost“; všude „uvedených na trh před 2. 8. 2026“ |
| 13 | WARNING | Pokyny podány jako zdroj, který rozhoduje o povinnosti | přijato | Insight a poslední věta FAQ 2 doslovně podle auditora; shrnutí „posoudit podle nařízení a okolností se zohledněním pokynů Komise“; věta o pokynech „podle ní vyjasňují rozsah … a doplňují kodex“ (ec-guide), „povinnosti stanoví samotné nařízení“ |

**Doplněno nad rámec nálezů** (ověřeno v primárním zdroji, předloženo auditu 2 a C5b):
- nové znění čl. 50 odst. 7 (Omnibus, `omnibus-cs.txt` ř. 289–290): Komise posoudí, zda dodržování kodexů stačí pro
  soulad s odst. 2 a 4, jinak může prováděcím aktem stanovit společná pravidla. Důvod: původní věta „Pro článek 50
  přineslo jednu lhůtu“ by naznačovala, že Omnibus na čl. 50 nic jiného nezměnil — větu jsem přeformuloval;
- ze stránky pokynů (`ec-guide.txt` ř. 67): kdo kodex nedodržuje, prokazuje splnění povinností označování jinými,
  rovnocenně přiměřenými prostředky (sekce Kodex a FAQ 5);
- nové zákazy čl. 5 popsány přesně jako písm. ba) a bb) spolu s odst. 1a a 1b, bez popisu věcného rozsahu.

**Z17 grep po opravách** (celý soubor): „vymáhání práva“, „účinné od“, „před srpnem“, „každou pro jinou“,
„nesouvisí“, „v legislativním procesu“ (bez „tehdy“), „jen vhodné“, „AI vytvořila text“, „posoudí pokyny“,
„rozhoduje znění“, „pokud to není zřejmé“, „Hlavní výjimky“, „bez redakční kontroly“, „upravují členské státy“,
„jednu lhůtu“ — 0 výskytů. Každé „uměle vytvořen…“ stojí s „manipulován…“, každá „redakční kontrola“
s „redakční odpovědností“. `jazyk-check` 0, `kontrola-komponent` 0, `answer` 60 slov.

**Oprava po auditu 2:** řádek 1 původně tvrdil, že podmínka s redakční odpovědností je i v `answer` — nebyla. Auditor 2
to správně označil za nedokončené vypořádání; `answer` je teď nahrazený definicí bez kategorických příkazů (viz níže).

## Audit 2 (Codex, osa jazyk a struktura + kontrola vypořádání, 26. 11. 2026) — OPRAVIT PŘED PUBLIKACÍ

2 blockery (oba zbytky nálezů 1 a 3 z kola 1) a 4 varování. Kontrola vypořádání: 11 z 13 nálezů kola 1 plně
zapracováno, 2 částečně (`answer`, chatbot v Checklistu). Tři doplnění nad rámec kola 1 auditor proti zdrojům potvrdil.

| # | Závažnost | Nález | Verdikt | Co se změnilo |
|---|---|---|---|---|
| 1 | BLOCKER | `answer` dál nese neúplnou povinnost pro AI text a spojuje ji s deepfakem | přijato | `answer` = znění auditora (definice předpisu, rozsah čl. 50, závislost na roli, použití a výjimkách, odkaz na právníka) + „jeho“, „hlavně“ a „například deepfaků“; 58 slov, bez kategorického příkazu |
| 2 | BLOCKER | Chatbot v Checklistu bez odkazu na zákonnou výjimku | přijato doslovně | položka „Chatbot nebo AI asistent na webu“ zněním auditora („…uvádí přehled povinností výše u odstavce 1…“) |
| 3 | WARNING | Dlouhé buňky tabulky, dvě vadné větné vazby | přijato | tabulka → pět bloků pod H3 („Odstavec 1: komunikace s AI“ … „Odstavec 4: text o záležitostech veřejného zájmu“) s **Kdo / Povinnost / Výjimky**; odst. 2 a text doslovně podle auditora; u odst. 1, 3 a deepfaku doplněn výslovný podmět (u deepfaku znění auditora 1 z nálezu 5); výjimky beze změny obsahu, jen s podmětem „Povinnost neplatí / se nevztahuje“, aby se věta za „Výjimka se uplatní…“ nečetla jako výjimka z výjimky; věta o technických řešeních do bloku odst. 2, definice deepfaku do bloku deepfaku, věta o formě informace před bloky; „tabulka“ → „přehled“ |
| 4 | WARNING | Úvod a závěr opakují dlouhý právní výklad | přijato s úpravou | úvod už není tučně a má dva odstavce (šablona: lead nejvýš dva odstavce, `answer` neopakuje): tři situace (chatbot, deepfake, AI text) jako výčet situací, ne povinností, věta o rolích a „Úplné podmínky uvádí přehled níže“; druhý odstavec doslovně podle auditora + věta o zdrojích. Závěr doslovně podle auditora, jen s úvodním „Článek 50 AI Actu se použije od 2. 8. 2026 a jeho dopad…“. Celý test zřejmosti je teď 3× (FAQ 1, přehled, Checklist) místo 6× |
| 5 | WARNING | H2 „Co si web a e-shop prověřit“ bez slovesa; obecné „Shrnutí“ | přijato doslovně | „AI Act pro weby a e-shopy — co prověřit s právníkem“; „Článek 50 AI Actu — ověřte svou roli, použití a výjimky“ |
| 6 | WARNING | FAQ 2 začíná „Ne každý.“ | přijato s úpravou | první věta „Pro toho, kdo článek s pomocí AI zveřejňuje, je klíčový článek 50 odst. 4 AI Actu.“ Navržené „Označování článků napsaných s pomocí AI upravuje článek 50 odst. 4“ by vynechalo strojové označování výstupů podle odst. 2 (povinnost poskytovatele nástroje); zbytek odpovědi beze změny |

Po opravách: `jazyk-check` 0, `kontrola-komponent` 0, slovo „tabulka“ v článku 0×, `answer` 58 slov.

## C5b (auditor 1, navázané vlákno, 26. 11. 2026)

Všech 13 oprav z kola 1 **OBSTOJÍ** (i po přestavbě tabulky na bloky H3 a po novém `answer`, úvodu a závěru). Doplnění
„kdo kodex nedodržuje“, nové zákazy čl. 5 a nový úvod se třemi situacemi obstály. **Nový [BLOCKER] N1:** v doplnění
o čl. 50 odst. 7 chyběly procesní podmínky (maximální zřetel ke stanovisku rady, postup podle čl. 56 odst. 6, přezkumný
postup podle čl. 98 odst. 2). **Přijato doslovně** zněním auditora; navíc vysvětlivka „(Evropské rady pro umělou
inteligenci)“, kterou dokládá `omnibus-cs.txt` ř. 37 („Evropská rada pro umělou inteligenci (dále jen „rada“)“) — aby
čtenář „radu“ nezaměnil s Radou EU. Stejná podmínka doplněna do tabulky podmínek v `research.md`. Cílené ověření N1:
`c5b-2-result.md`.
