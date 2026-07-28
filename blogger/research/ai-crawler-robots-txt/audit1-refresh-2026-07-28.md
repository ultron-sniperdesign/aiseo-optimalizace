Níže přísný audit po bodech.

## BLOKER

### 1) Nevydávat AIPREF/Web Bot Auth za skoro-hotovou věc
> „V IETF běží pracovní skupina **AIPREF**, která standardizuje slovník…“  
> „Připojit se to má buď HTTP hlavičkou, nebo pravidlem přímo v `robots.txt`.“  
> „Souběžně vzniká **Web Bot Auth** — návrh, aby robot každý požadavek kryptograficky podepisoval.“

Problém: tohle zní jistěji, než je bezpečné. U draftů je potřeba tvrdě oddělit:
- co je **návrh v draftu**,
- co je **adoptovaný working group item**,
- a co je **schválený standard**.

Formulace „standardizuje“ a „připojit se to má“ je na hraně. Bez citace konkrétního draftu a jeho stavu je to moc definitivní. Doporučení:
- všude přepsat na „**navrhuje**“, „**v draftu se počítá**“, „**jedna z navržených cest**“;
- výslovně říct, že **syntax i mechanismus se mohou změnit**;
- nepůsobit dojmem, že `Content-Usage` už je stabilní jméno hlavičky.

### 2) Příklad s `Google-Extended` v `robots.txt` je zavádějící
> ```txt
> User-agent: Google-Extended
> Disallow: /
> ```

Tohle je slabé místo článku. `Google-Extended` není klasický crawler, ale token/policy identifikátor. Pro čtenáře je matoucí ukazovat ho ve stejném tvaru jako běžné crawlers bez výhrady, že jde o **specifický mechanismus Googlu**, ne univerzální precedent pro jiné „Extended“ tokeny.

Navíc v textu střídáte „řídicí token“ a pak ho zapisujete jako `User-agent`. To je sice u Googlu prakticky ten mechanismus, ale bez vysvětlení to vypadá jako běžný bot. Doplnit:
- „u Googlu se to nastavuje přes identifikátor používaný v robots directives, i když nejde o crawler v běžném smyslu“;
- oddělit to vizuálně od botů.

### 3) `Applebot-Extended` je rizikové tvrzení bez opory
> „Applebot-Extended | Apple | řídicí token | využití obsahu v generativních službách Apple“

Tohle je na BLOKER, pokud nemáte velmi solidní aktuální primární zdroj od Apple. Je to přesně typ tvrzení, kde refresh může přidat entitu, která není široce doložená nebo není standardně dokumentovaná stejně jako `Google-Extended`. Pokud nemáte primární dokumentaci:
- odstranit z tabulek i z `stats`,
- nebo označit jako „**pokud/je-li dokumentován provozovatelem**“ a nedávat vedle Google jako rovnocenně ustálenou věc.

### 4) „Blokace tréninkových robotů citace nezhorší“ je moc silné
> „Blokace tréninkových robotů (GPTBot, ClaudeBot, CCBot) vaše citace v AI odpovědích nezhorší.“

To je příliš absolutní. Bezpečnější je:
- „**neměla by přímo omezit citace tam, kde jsou pro citace používáni oddělení search/user boti**“
- a dodat, že **ekosystémy se mění** a někteří poskytovatelé mohou interně kombinovat více zdrojů.

U OpenAI je rozlišení botů obhajitelné, ale jako obecné pravidlo pro celý trh je to přestřelené.

---

## DOPORUČENÍ

### 5) Kategorie botů jsou užitečné, ale místy moc normativní
> „Vyhledávací / Na vyžádání / Tréninkové / Řídicí tokeny / Sběrači bez zjevného přínosu“

Jako zjednodušení dobré. Ale:
- `PerplexityBot` „vyhledávací“ je OK jen s dovětkem „**podle deklarace provozovatele**“.
- `Amazonbot`, `Meta-ExternalAgent`, `Diffbot` pod „sběrači bez zjevného přínosu“ je hodnotový soud. Pro některé weby přínos zjevný být může, nebo účel nemusí být jen „bez přínosu“.  
Lepší: „**sběrači s nejasným/omezeným přímým přínosem pro citace**“.

### 6) Chybí důležitá výhrada k účinnosti `Allow`
> „přidejte pravidla … s direktivou Allow“

Důležitá výhrada: explicitní `Allow: /` je často jen redundantní, pokud není nadřazené `Disallow` nebo obecné blokování. Pro čtenáře doplnit:
- „Pokud nemáte `User-agent: *` s blokací nebo kolizní pravidla, explicitní `Allow: /` obvykle nic nemění.“

Teď to článek naznačuje, ale měl by to říct přímo u ukázky.

### 7) Chybí výhrada k identitě bota
> „… kombinujte s ověřením IP rozsahů…“

Správně, ale u AI botů to není vždy snadno nebo veřejně ověřitelné. Doplnit:
- „u části AI botů není robustní reverzní ověření identity tak dobře zdokumentované jako třeba u hlavních vyhledávačů“.

Jinak čtenář může nabýt dojmu, že ověření IP je vždy snadný standard.

### 8) Čísla o podílu provozu jsou hraničně podložená
> „Podle agenturních přehledů z roku 2026 přitom tvoří tři roboti OpenAI zhruba polovinu až tři pětiny…“

Dobře, že píšete „sekundární data“. Ale je to pořád slabé:
- není jasné **jaké vzorky**, **jaké trhy**, **jaká metodika**;
- „nejaktivnější bývá `ChatGPT-User`“ může být silně závislé na konkrétním souboru webů.

Doporučení:
- buď přidat metodickou výhradu přímo do věty,
- nebo tu pasáž úplně zjemnit na „**v některých zveřejněných souborech webů**“.

### 9) Bytespider: opatrněji s formulací
> „opakovaně hlášeno nerespektování robots.txt“  
> „pravidla robots.txt často nedodržoval“

„Často nedodržoval“ je silnější než „objevovala se hlášení“. Pokud nemáte tvrdá měření, vraťte to na:
- „**existují opakovaná veřejná hlášení/spory o nerespektování**“.

### 10) FAQ a hlavní text nejsou plně konzistentní ve výčtu „co pustit“
> answer: „OAI-SearchBot, Claude-SearchBot, PerplexityBot, ChatGPT-User“  
> ukázka k citacím: „OAI-SearchBot, PerplexityBot, ChatGPT-User“

V ukázce chybí `Claude-SearchBot`, přestože nahoře tvrdíte, že ho pustit máte. Doplnit nebo vysvětlit, proč není v příkladu.

### 11) Rozhodovací tabulka potřebuje podmínku „pokud je cílem citovatelnost“
> „Povolit. Tudy vedou citace v AI odpovědích.“

Tohle platí jen při cíli „chci být citován“. Pro některé weby je správné blokovat i search/on-demand boty. Stačí doplnit sloupec/předvětu:
- „**Pokud chcete šanci na citace**“.

### 12) `ClaudeBot` jako čistě „tréninkový“ může být časově křehké
> „ClaudeBot | tréninkový | trénink modelů“

U takových rolí je lepší psát „**podle aktuální dokumentace provozovatele**“. Refresh článku přesně na tomhle může rychle zestárnout.

---

## DROBNOSTI

### 13) Nepřesnost v absolutním tvrzení o robots.txt
> „Přístup AI robotů řídíte hlavně přes soubor robots.txt“

Pro veřejný web ano, ale formulace je moc univerzální. Přesnější:
- „**u slušných veřejných crawlerů** řídíte přístup hlavně přes robots.txt“.

### 14) „Načítají stránku proto, že se na ni někdo konkrétní zeptal“
> „Na vyžádání … proto, že se na ni někdo konkrétní zeptal.“

V zásadě OK, ale je to zjednodušení. Lepší „**typicky** na přímý podnět uživatele/služby“.

### 15) „Plošná blokace obětuje … AI přestanou citovat“
> „takže vás AI přestanou citovat“

Moc absolutní. Může existovat citace z jiných cest, z dříve načtených dat, sekundárních indexů apod. Lepší:
- „**výrazně tím snížíte nebo vyloučíte šanci na nové citace přes tyto cesty**“.

### 16) „13+ AI robotů a řídicích tokenů, které dnes řešíte“
Marketingově OK, technicky nic zásadního, ale když část seznamu stojí na slabší opoře (`Applebot-Extended`), je to zbytečné riziko.

---

## Rozhodovací tabulka: verdikt

**V zásadě obhajitelná**, ale jen po doplnění dvou výhrad:

1. **Výhrada k cíli**
   - „Povolit vyhledávací a on-demand boty“ platí, **pokud chcete citovatelnost**.
2. **Výhrada k nejistotě rolí**
   - role botů jsou **podle aktuální dokumentace provozovatelů** a mohou se změnit.

Také bych upravil poslední řádek:
> „Sběrači bez zjevného přínosu“

na
> „Sběrači s nejasným přímým přínosem pro citace / s vyšším rizikem zátěže“

---

## Použitelnost: ví čtenář, co napsat?

**Ano, skoro.** Ale chybí jeden hotový kombinovaný příklad pro běžný scénář:
- pustit search + on-demand,
- blokovat training,
- zvlášť uvést Google-Extended,
- případně obecný `User-agent: *` bez konfliktu.

Doporučuji přidat finální blok „nejběžnější nastavení“:

```txt
# Chci citace, nechci trénink
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-User
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

A pod to větu:
- „Pokud nemáte jiné blokující pravidlo, `Allow: /` je hlavně pro přehlednost.“

---

## Konzistence po refreshi

**Menší rozpory jsou:**

1. **Claude-SearchBot**
   - v rozhodovací tabulce ano,
   - v ukázce pro citace chybí.

2. **Claude-User**
   - v tabulce a seznamu ano,
   - v answer nahoře chybí.

3. **AIPREF sekce vs. starší zbytek článku**
   - nová sekce správně říká „nic podle draftu nepřestavujte“,
   - ale jazyk v ní je místy moc definitivní a neodpovídá té opatrnosti.

---

## Shrnutí

**Největší problémy k opravě před publikací:**
1. zjemnit a zpřesnit AIPREF/Web Bot Auth, aby to nepůsobilo jako hotový standard;
2. prověřit nebo odstranit `Applebot-Extended`;
3. zeslabit absolutní tvrzení „blokace tréninkových robotů citace nezhorší“;
4. sjednotit seznamy a příklady (`Claude-SearchBot`, `Claude-User`);
5. zpřesnit formulace u Bytespider a u čísel o podílu provozu.

Když tohle opravíte, článek bude technicky výrazně pevnější.