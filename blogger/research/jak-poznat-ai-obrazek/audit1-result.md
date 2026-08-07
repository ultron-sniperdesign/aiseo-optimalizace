Níže jen nálezy. Cituji místo a dávám návrh opravy.

---

## 1. Kde vydáváš úsudek nebo sekundární informaci za primárně doložené

### A. Frontmatter `answer`
> **„Původ obrázku dnes prozrazují tři vrstvy…“**

Problém: „prozrazují“ a obecné „původ obrázku“ je silnější, než co máš doložené. U SynthID máš doloženo značení AI-generovaného obsahu v ekosystému Googlu / nástrojích používajících SynthID, ne obecný původ libovolného obrázku. U IPTC jde navíc o sekundární vrstvu, ne primárně doloženou Googlem.

**Návrh opravy:**
„U některých obrázků lze o původu nebo způsobu vzniku zjistit informace ze tří vrstev: neviditelného vodoznaku SynthID, podepsaných C2PA Content Credentials a metadat podle IPTC. Google od I/O 2026 uvádí možnost ptát se na původ obrázku přímo — nejdřív v aplikaci Gemini, do Vyhledávání a Chromu má funkce teprve dorazit.“

---

### B. Frontmatter `description`
> **„co dnes o původu obrázku jde zjistit“**

To je ještě v pořádku, ale bez dovětku o limitech to zní obecněji, než text pak skutečně tvrdí.

**Lepší:**
„…co dnes u některých obrázků jde zjistit o jejich původu nebo úpravách…“

---

### C. FAQ: „Co je SynthID?“
> **„Nástroj Googlu na vkládání a rozpoznávání vodoznaků v obsahu vytvořeném AI.“**

To je interpretace, ne doslovné vymezení zdroje. DeepMind píše „to watermark and identify content generated through AI“. „Rozpoznávání vodoznaků“ je sice blízko, ale technicky to posouváš od identifikace označeného obsahu k obecné detekci vodoznaku.

**Návrh opravy:**
„Nástroj Googlu / DeepMindu pro označování a identifikaci obsahu vytvořeného AI.“

---

### D. FAQ: „Jak se v Googlu zeptám…“
> **„…ve funkcích jako Lens, AI Mode a Circle to Search a v Gemini v Chromu…“**  
> **„Podle téhož zdroje to začíná v aplikaci Gemini a do Vyhledávání a Chromu se to má dostat…“**

Tady mícháš dvě různé roviny:
- citace jmenuje Search features + Gemini in Chrome,
- rollout, jak ho cituješ z research, mluví o **Gemini app starting today**, Search a Chrome později.

V textu z toho není jasné, jestli „Gemini v Chromu“ už je dostupné, nebo ne. Vzniká vnitřní nejasnost.

**Návrh opravy:**
„Google uvádí, že se na původ obrázku půjde ptát ve funkcích Search, jako jsou Lens, AI Mode a Circle to Search, a také v Gemini v Chromu. Podle téhož oznámení se ale ověřování začíná zavádět v aplikaci Gemini; do Search a Chromu má dorazit v následujících měsících.“

---

### E. FAQ: „Co jsou C2PA Content Credentials?“
> **„Na rozdíl od vodoznaku jde o metadata, která se dají ze souboru odstranit.“**

To je zjednodušení, které sklouzává k technické nepřesnosti. Content Credentials nejsou prostě „metadata“ v běžném EXIF smyslu; jsou to podepsaná provenance data / manifesty. Prakticky se často přenášejí s daty souboru a mohou být odtržena, ale formulace „jde o metadata“ je moc hrubá.

**Návrh opravy:**
„Na rozdíl od vodoznaku jde o připojená, kryptograficky podepsaná provenance data, která se při dalším zpracování nebo publikaci často ztratí nebo odstraní.“

---

### F. FAQ: „Co z toho plyne pro můj web?“
> **„…resize, konverze do WebP nebo optimalizační plugin metadata většinou zahodí…“**

To je sekundární tvrzení podané dost jistě. Nemáš pro něj v článku primární zdroj a navíc „většinou“ je silné.

**Návrh opravy:**
„…resize, konverze do WebP nebo optimalizační pluginy metadata často zahazují; je proto potřeba ověřit konkrétní publikační pipeline.“

---

## 2. Technické nepřesnosti

### A. Tabulka: SynthID
> **„že obsah vytvořil model Googlu“**

To je největší technická chyba v článku.

SynthID z toho, co cituješ, nedokládá „model Googlu“ obecně. Dokládá, že obsah byl označen pomocí SynthID. To není totéž jako „vytvořil model Googlu“:
- může jít o obsah generovaný AI a označený v nástroji používajícím SynthID,
- tvrzení o „modelu Googlu“ je užší a bez opory v tvém zdroji.

**Návrh opravy do tabulky:**
„že obsah byl označen jako AI-generovaný pomocí SynthID“
nebo
„že obsah nese značení SynthID“

---

### B. Tabulka: IPTC metadata
> **„jak byl obsah podle popisu vytvořen“**

To je neurčité, ale použitelné. Problém je spíš, že v článku neříkáš, že jde o **deklarativní** údaj, nikoli důkaz. To je u IPTC podstatné.

**Návrh opravy:**
„jak byl obsah deklarativně popsán autorem nebo systémem“

---

### C. Sekce „Tři vrstvy…“
> **„C2PA Content Credentials jsou kryptograficky podepsaný záznam o tom, čím soubor vznikl a co s ním kdo dělal.“**

Příliš široké. C2PA může nést tvrzení o původu a úpravách, ale neznamená automaticky úplný záznam „co s ním kdo dělal“. Záleží na tom, co workflow zapisuje a co se zachová. Tvoje formulace zní jako úplná auditní stopa.

**Návrh opravy:**
„C2PA Content Credentials jsou kryptograficky podepsaná provenance data, která mohou doložit, v jakém nástroji nebo zařízení soubor vznikl a jaké deklarované úpravy byly v zaznamenaném řetězci provedeny.“

---

### D. Sekce „Jak si obrázek projít sami“
> **„Jakýkoli prohlížeč EXIF nebo nástroj na Content Credentials ukáže, co v souboru zbylo.“**

EXIF prohlížeč typicky neuvidí C2PA a už vůbec ne „jakýkoli“. Mícháš EXIF/IPTC/XMP s C2PA.

**Návrh opravy:**
„EXIF/IPTC prohlížeč ukáže běžná obrazová metadata; specializovaný nástroj pro Content Credentials ukáže případná C2PA data.“

---

### E. Checklist limitů
> **„Vodoznak je v pixelech, takže přežije úpravu obrázku.“**

To je technicky přehnané. Máš doloženo jen odolávání cropping, filters, compression. Ne obecné „přežije úpravu obrázku“. Řada úprav ho může zničit nebo oslabit.

**Návrh opravy:**
„Vodoznak je vložený do obrazových dat a podle DeepMindu má u obrázků odolávat oříznutí, filtrům a kompresi; neplyne z toho ale, že přežije libovolnou úpravu.“

Totéž platí níže v Mistake 02:
> **„Vodoznak je v pixelech, credentials vedle obrázku. Proto se chovají jinak: jedno přežije úpravu obrázku, druhé se dá smazat.“**

To je znovu příliš silné.

**Oprava:**
„…proto se chovají jinak: vodoznak může některé úpravy přežít, zatímco credentials se při exportu nebo publikaci často ztratí.“

---

### F. Shrnutí
> **„Původ obrázku dnes prozrazují tři různé vrstvy…“**

Znovu moc široké. SynthID neprozrazuje „původ obrázku“ v obecném forenzním smyslu, ale přítomnost konkrétního značení. C2PA může doložit původ/úpravy, pokud je řetězec zachován. IPTC je deklarace.

**Návrh opravy:**
„U některých obrázků lze o původu nebo způsobu vzniku číst ze tří různých vrstev…“

---

## 3. Vnitřní rozpory a nečistoty

### A. „Tři vrstvy, které o obrázku něco říkají“ vs. tabulka
> **„SynthID … dokládá, že obsah vytvořil model Googlu“**
vs.
> později **„Zachytí ale jen značení od modelů, které SynthID používají.“**

To je rozpor. Jednou tvrdíš „model Googlu“, podruhé obecně „modely, které SynthID používají“. Druhá formulace je méně chybná než první.

**Oprava:** sjednotit na „obsah označený pomocí SynthID“.

---

### B. Rollout Google funkcí
> V FAQ mluvíš o „Gemini v Chromu“ jako o místě dotazu,  
> v boxu „Kde to dnes reálně funguje“ píšeš, že se to rozjíždí v aplikaci Gemini a do Vyhledávání a Chromu to teprve míří.

To není úplně přímý rozpor, ale čtenář nepozná, zda „Gemini v Chromu“ už funguje. Potřebuješ to sjednotit jednou větou.

**Oprava:** výslovně odlišit „Google funkci oznámil pro tyto povrchy“ od „rollout začíná tady“.

---

### C. „Silná informace je jen ta opačná — když se značka najde.“
To je přehnané, zvlášť u IPTC. U deklarativních metadat to není „silná informace“ bez kvalifikace. U C2PA ano, ale jen pokud důvěřuješ podpisu a řetězci; u IPTC ne.

**Návrh opravy:**
„Absence značky je slabá informace. Nález podepsaných C2PA credentials nebo detekovatelného SynthID je silnější signál; u nepodepsaných IPTC metadat jde jen o deklaraci.“

---

## 4. Co chybí podstatného bez spekulace

Na 1 160 slov to **stačí**, ale dvě věci by šly doplnit a zpřesnily by článek bez spekulace:

### A. Jasné rozlišení tří odlišných kategorií
Teď to máš nazvané „tři vrstvy“, ale pro čtenáře by pomohlo explicitně říct:

- **watermark v signálu** = SynthID,
- **podepsaná provenance data** = C2PA,
- **nepodepsaná popisná metadata** = IPTC.

To je nejdůležitější technické rozlišení v celém tématu a zabrání směšování.

**Krátká věta, která chybí:**
„Nejde o tři verze téže věci: SynthID je značení v obrazových datech, C2PA je podepsaný řetězec původu a úprav a IPTC je běžný popisný metadata slovník.“

---

### B. Že Google oznámil **ověřování C2PA**, ne obecnou detekci AI
Článek to naznačuje, ale neříká dost ostře. Hodně čtenářů si z „Is this made with AI?“ odvodí, že Google umí spolehlivě detekovat AI obrázky obecně. Z tvých zdrojů to neplyne.

**Doplnit:**
„Z oznámení neplyne, že by Google sliboval obecnou a spolehlivou detekci všech AI obrázků. Primárně mluví o zjišťování původu a o ověřování C2PA credentials.“

To je důležitější než další příklady.

---

## 5. Titulek a krátká odpověď

### Titulek
> **„Je ten obrázek od AI? Tři vrstvy, ze kterých to jde poznat“**

Titulek je lehce přestřelený. Slibuje, že „to jde poznat“, ale článek správně vysvětluje, že:
- často to nejde,
- absence značky nic nedokazuje,
- IPTC je jen deklarace,
- Google nesdělil přesnost detekce.

**Lepší varianty:**
- „Jak lze někdy poznat AI obrázek: SynthID, C2PA a metadata“
- „Podle čeho lze u některých obrázků zjišťovat AI původ“
- „Ne podle jedné stopy: SynthID, C2PA a metadata u AI obrázků“

---

### Krátká odpověď (`answer`)
Je věcně blízko, ale opakuje stejný problém jako titulek: zní příliš obecně a příliš jistě.

**Lepší verze:**
„U některých obrázků lze původ nebo způsob vzniku zjišťovat ze tří rozdílných vrstev: ze značení SynthID v obrazových datech, z podepsaných C2PA Content Credentials a z běžných metadat podle IPTC. Google od I/O 2026 uvádí možnost ptát se na původ obrázku přímo; rollout začíná v aplikaci Gemini, do Search a Chromu má teprve dorazit.“

---

## 6. Nejproblematičtější věty v pořadí závažnosti

1. **„že obsah vytvořil model Googlu“**  
   — technicky neobhajitelné z tvých zdrojů.

2. **„Vodoznak je v pixelech, takže přežije úpravu obrázku.“**  
   — přehnané, zdroj říká jen některé typy odolnosti.

3. **„Jakýkoli prohlížeč EXIF … ukáže, co v souboru zbylo.“**  
   — směšuje EXIF/IPTC s C2PA.

4. **„Silná informace je jen ta opačná — když se značka najde.“**  
   — neplatí stejně pro všechny tři vrstvy.

5. **„Původ obrázku dnes prozrazují tři vrstvy…“**  
   — příliš široké a rétoricky jisté.

---

## 7. Stručný verdikt k délce

**Ano, 1 160 slov stačí.** Nechybí šířka, chybí spíš dvě technická zpřesnění:
- oddělit watermark / signed provenance / deklarativní metadata,
- výslovně říct, že Google neprokazuje obecnou detekci všech AI obrázků.

To doplníš v 80–120 slovech. Nepotřebuješ článek natahovat, potřebuješ ho utáhnout technicky.