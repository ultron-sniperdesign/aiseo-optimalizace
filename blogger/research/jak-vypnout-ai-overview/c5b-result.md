# VERDIKT: OPRAVIT

Kontrola `clanek-c5b.mdx` proti `audit2-vysledek.md` a dodaným zdrojům, stav k 31. 10. 2026. **Zůstává 1 [BLOCKER]; 0 [WARNING], 0 [TIP]. Nové věcné vady v kontrolovaných úpravách: 0.** Jde o nedokončené vypořádání původního blockeru 1, nikoli o nový nález. Čísla řádků níže patří souboru `clanek-c5b.mdx`.

## Stav blockerů 1–5

| Blocker kola 2 | Stav | Ověření v opraveném souboru |
|---|---|---|
| 1 — `udm=14` a zobecnění omezeného testu | **Částečně vyřešený; zůstává [BLOCKER].** | Z `answer` odstraněn. FAQ 1 uvádí adresní řádek, převzatý německý test a absenci vlastního českého ověření (ř. 27); podrobné prostředí testu a neověření `google.com` jsou v těle (78, 86). Shrnutí už mluví o neoficiální možnosti doložené německým testem (148), persona zmizela. V meta description ale přetrvává nepodmíněné „Pomůže“ (4); stejná formulace je i v přechodu k návodu (65). Viz jediný zbývající nález níže. |
| 2 — podmínky přechodu do režimu AI | **Vyřešený.** | FAQ i tělo obsahují mobilní zařízení a dostupnost obou funkcí v dané zemi a jazyce (33, 128). |
| 3 — Safari a síla dokladu | **Vyřešený.** | Safari už nemá kategorické „jen přes rozšíření“; rozlišuje nepopisovanou vlastní adresu, nabídku rozšíření a netestované použití s `udm=14` (101). Výběr DuckDuckGo je podmíněn jeho přítomností v nabídce (74). |
| 4 — podmínky nových postupů pro prohlížeče | **Vyřešený.** | Firefox uvádí možnost zákazu správcem (99). Nedostatečně vymezený postup přidání vyhledávače v Edgi byl odstraněn. U doplňku Bingu a tlačítka Copilota je výslovně počítač, také ve FAQ a tabulce (37, 116, 123). |
| 5 — data Search Labs v přehledu výkonu | **Vyřešený.** | Výjimka „Data z experimentů v Search Labs Search Console nezahrnuje“ je přímo v popisu přehledu, před Stepperem (195). |

## Zbývající nález

### 1. [BLOCKER] `udm=14` je v meta description dál slíben jako fungující pomoc

**Citace:** Ř. 4: „Pomůže filtr Web, neoficiální adresa s &udm=14 nebo jiný vyhledávač.“ Ř. 65: „Pokud ho chcete mít předvolený, pomůže neoficiální adresa s udm=14.“

**Problém:** Slovo „neoficiální“ vymezuje podporu Googlu, ale neomezuje tvrzení o funkčnosti. „Pomůže“ dál přenáší omezený test na prostředí čtenáře. U meta description musí sdělení obstát samostatně; podmínky z těla článku tuto formulaci nedoplňují. Na ř. 65 je sice přímý odkaz na vysvětlení, ale také zde lze zbytkový slib odstranit drobnou úpravou. Důvod o třech způsobech v uzamčeném `seoTitle` ani hledanost parametru nemění rozsah doloženého testu. Ponechat zmínku o parametru je přijatelné; není nutné ji spojovat s jistým výsledkem.

**Cílená oprava:** Meta description lze nahradit tímto textem o **145 znacích**, který ponechává všechny tři možnosti i parametr:

> Přehled od AI v Googlu vypnout nejde a vypínač režimu AI nápověda neuvádí. Použijte filtr Web či jiný vyhledávač; neoficiální &udm=14 lze zkusit.

„Lze zkusit“ neslibuje ověřenou funkčnost v českém prostředí, takže není nutné do meta description vtěsnat celý popis testu. Na ř. 65 stačí: „Neoficiální možnost předvolby popisuje část o adrese s udm=14; uvádí i omezení jejího ověření.“ Odkaz zachovat. `title` ani `seoTitle` neměnit.

**Doklad:** Původní nález 1 v `audit2-vysledek.md`; `research.md`, tabulka podmínek; `zdroje/sekundarni-test-udm14-2026-10-17.txt`. Nevyžaduji nové měření ani nový zdroj.

## Posouzení odchylek

**Odchylka 1 — parametr v meta description:** Přijímám ponechání parametru, **nepřijímám současnou nepodmíněnou formulaci**. Po výše uvedené úpravě je odchylka přijatelná. Samotné neodstranění parametru není důvodem k blokaci.

**Odchylka 2 — část pro majitele zůstává v tomto článku:** Přijímám. Uživatelské shrnutí je před technickou částí (144–149), mobilní postup se přesunul nahoru (67–74), persony i AntiPersona zmizely a ukázky i Stepper jsou kratší. Běžný uživatel dostane odpověď a shrnutí před částí pro vlastníky. Přesun do jiného článku byl navržený způsob opravy, nikoli podmínka publikace; není nutné kvůli němu rozšiřovat tento refresh.

**Odchylka 3 — bez odkazu na sekundární test:** Přijímám jako vědomé redakční rozhodnutí u původního [TIP]. Dohledatelnost pro veřejného čtenáře je slabší, ale článek otevřeně označuje převzatý test, tělo uvádí datum a prostředí a audit má konkrétní podklad. Seskupení zdrojů do čtyř oblastí a jediné datum načtení jsou zapracované. Nevyvozuji z absence veřejného odkazu nepravdivost testu ani nový blocker.

**Přesun data českého spuštění:** Přijímám. V úvodu nepřekáží; zůstává u souvisejícího odkazu a v primárním zdroji (212, 223).

## Kontrola nově formulovaných pasáží

- **Úvod a `answer` (47, 5):** Bez nové věcné vady. Rozlišují Přehled od AI a režim AI, uvádějí filtr Web i telefon. `answer` začíná definicí a má **51 slov**. Současná meta description má **143 znaků**; její problém je význam, nikoli délka.
- **Sloučené volby přepínače (155–164):** Odpovídají dodané nápovědě Search Console. Rozdílný výchozí stav podřízených vlastností je výslovně uveden; hned následuje rozsah dědění, možnost přepsání vlastníkem, výjimky pro další služby a zpoždění účinku.
- **`max-snippet` a `data-nosnippet` (176–181):** Zkrácení zachovalo rozdíl mezi nulou a kladným limitem, zvláštní povolení obsahu, omezení na podporované prvky, pravidlo JavaScriptu, použitelnost strukturovaných dat a podmínku načtení i zpracování. Porovnáno s `zdroje/google-robots-meta-spec.txt`; novou vadu nenacházím.
- **Přehled výkonu a závěr vyřazení (195–204):** Výjimka Search Labs odpovídá novému ověření u výrobců. „Vyřazení může stát návštěvnost“ nevrací původní nepodmíněný slib ztráty. Text dál rozlišuje souběh poklesu a příčinu a nepředstírá zmizení konkurence.
- **CTA (206–208):** Odpovídá rozsahu produktu v `zdroje/audit.ts`: současná viditelnost, přístup robotů, mezery v obsahu a pořadí úprav. Název, cena **3 600 Kč bez DPH**, odkaz a **Sniper Design** jsou správně; tlak přes nenávratnou ztrátu je odstraněn.

Kontrola vychází z dodaných dokumentů a JSON, bez nového vyhledávání webu. Neověřoval jsem živé rozhraní ani sestavení webu a funkčnost automatických kotev. Opravený článek jsem neměnil.

