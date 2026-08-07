## Titulek a krátká odpověď

**Titulek:** Ještě tam zbylo pár technických přestřelení kolem C2PA a „původu“  
**Krátká odpověď:** Ano. Největší zbytky jsou: 1) C2PA místy pořád popisuješ moc úplně, 2) „původ obrázku“ a „způsob vzniku“ občas směšuješ se zjištěním AI značení, 3) v textu znovu sklouzáváš k příliš jistému tvrzení o ztrátě metadat v publikační pipeline, 4) jedna formulace o „modelu“ je pořád moc široká.

---

## 1. Frontmatter

### A. `title`
> **„SynthID, C2PA a metadata: co prozradí původ obrázku“**

Problém: titulkem znovu slibuješ obecný „původ obrázku“. To je širší než to, co článek fakticky dokládá:
- SynthID říká, že obsah nese konkrétní AI značení,
- C2PA může doložit zaznamenaný původ/úpravy,
- IPTC je deklarace.

„Původ obrázku“ je na titulku moc souhrnné a čtenář to snadno přečte jako obecnou forenzní odpověď.

**Lepší:**  
„SynthID, C2PA a metadata: co jde zjistit o původu nebo vzniku obrázku“  
nebo kratší  
„Jak poznat AI obrázek: SynthID, C2PA a metadata“

---

### B. `description`
> **„Tři vrstvy značení, které u části obrázků prozradí způsob vzniku.“**

To je lepší než dřív, ale „prozradí způsob vzniku“ je u C2PA pořád trochu moc jisté. C2PA může nést i informaci o úpravách, ne jen o vzniku, a jen v zaznamenaném řetězci.

**Přesnější:**  
„Tři vrstvy, ze kterých lze u části obrázků zjistit něco o vzniku, úpravách nebo AI značení.“

---

### C. `answer`
> **„U některých obrázků jde způsob vzniku zjišťovat ze tří rozdílných vrstev…“**

Problém: zase příliš sjednocuješ tři odlišné věci pod „způsob vzniku“.
- SynthID ≠ popis způsobu vzniku; je to značení AI-generovaného obsahu.
- IPTC ≠ zjištění; je to deklarativní popis.
- C2PA může nést informace o původu a úpravách, ne nutně úplný „způsob vzniku“.

**Přesnější:**  
„U některých obrázků lze ze tří rozdílných vrstev zjistit něco o AI značení, deklarovaném původu nebo zaznamenaných úpravách…“

---

### D. `stats`
> **„3 — vrstvy značení: vodoznak v pixelech, podepsané credentials a metadata“**

Technicky nepřesné slovo **„vrstvy značení“**. C2PA ani IPTC nejsou obecně „značení“ ve stejném smyslu jako vodoznak. U IPTC jde o popisná metadata, u C2PA o podepsaná provenance data.

**Lepší:**  
„3 — vrstvy informací: vodoznak SynthID, podepsaná C2PA provenance data a IPTC metadata“

---

## 2. Tělo článku — technické nepřesnosti

### A. Tabulka: C2PA je pořád napsané příliš úplně
> **„C2PA Content Credentials … dokládá: čím soubor vznikl a co ho upravilo“**

To je pořád moc kategorické. C2PA nedokládá automaticky vše, co soubor upravilo; dokládá to, co je v zachovaném a zaznamenaném řetězci tvrzení.

**Přesnější:**  
„co o vzniku a úpravách tvrdí zachovaný podepsaný řetězec“  
nebo  
„v jakém zařízení či nástroji vznikl a jaké zaznamenané úpravy jsou v credentials uvedené“

---

### B. Sekce „Jak si obrázek projít sami“
> **„První dva kroky odpovídají na otázku ‚vyrobil to model‘…“**

To je technicky moc silné hlavně u kroku 1:
- dotaz v Gemini / Search není v textu doložen jako spolehlivý verdict „vyrobil to model“,
- u kroku 2 detektor SynthID zachytí přítomnost značení, ne obecně to, že to „vyrobil model“.

Tahle věta vrací přesně ten typ zkratky, který jsi už dřív opravoval, jen jinými slovy.

**Přesnější:**  
„První dva kroky spíš hledají signály AI vzniku nebo AI značení…“

---

### C. Sekce „Proč ani jedna vrstva není důkaz“
> **„Mluví o zjišťování původu a o ověřování C2PA credentials — tedy o čtení toho, co v souboru je, ne o rozpoznávání podle vzhledu.“**

Tohle je v zásadě v pořádku, ale „co v souboru je“ je u C2PA zjednodušené. C2PA nemusí být vždy jen „v souboru“ v laickém smyslu; jsou to připojená/přenášená podepsaná data. Není to velká chyba, ale navazuje to na další zjednodušení níže.

Pokud chceš být čistý, drž se stejné terminologie jako jinde:
**„…o čtení přítomného značení a zachovaných credentials…“**

---

### D. Checklist limitů
> **„Metadata jsou vedle obrázku, takže se dají odstranit.“**

To je moc hrubé zjednodušení. U C2PA jsi dřív správně zpřesnil, že nejde prostě o „metadata“ v běžném EXIF smyslu. Tady ses k tomu částečně vrátil.

Navíc „vedle obrázku“ není technicky přesné jako obecný popis všech případů. C2PA manifest může být vložený, připojený nebo odkazovaný; nepsal bych to takhle kategoricky.

**Přesnější:**  
„Připojená metadata a credentials se při exportu, konverzi nebo publikaci často ztratí nebo odstraní.“

---

### E. Sekce „Co z toho plyne pro váš web“
> **„běžný resize, konverze do WebP nebo optimalizační plugin metadata většinou zahodí“**

Tohle je pořád stejný problém jako v prvním auditu, jen v těle místo FAQ. Nemáš pro „většinou“ oporu v předloženém výzkumu; v research máš jen:
> **„metadata typicky zahodí“**
a i to je formulované jako praktická poznámka, ne primárně doložené tvrzení.

Požadavek byl u sekundárních přehledů brzdit jistotu. Tady je to zase příliš rozhodné.

**Oprava:**  
„…metadata často zahodí“  
nebo  
„…metadata mohou zahodit; je potřeba ověřit konkrétní pipeline.“

Totéž v návazné větě:
> **„co z nich na webu opravdu zbude“**

Tady je „z nich“ nejasné — z metadat? z credentials? z EXIF?  
Lepší:
**„co z metadat a credentials na webu opravdu zbude“**

---

## 3. FAQ

### A. FAQ „Co jsou C2PA Content Credentials?“
> **„Kryptograficky podepsaný záznam o původu a úpravách souboru.“**

Pořád moc úplné. U C2PA není bezpečné slibovat obecný „záznam o původu a úpravách souboru“, protože to zní jako úplná historie.

**Přesnější:**  
„Kryptograficky podepsaná provenance data, která mohou nést tvrzení o původu a zaznamenaných úpravách souboru.“

---

### B. FAQ „Dokazuje C2PA, že je fotka pravdivá?“
> **„Doloží, co se se souborem dělo — že vznikl v konkrétním zařízení nebo že ho upravil konkrétní nástroj.“**

Zase moc jisté „doloží, co se se souborem dělo“. Máš tu stejnou přehnanost jako v tabulce a v těle. Bez dovětku o zaznamenaném řetězci to zní jako úplná auditní stopa.

**Přesnější:**  
„Může doložit, co o souboru tvrdí zachovaný podepsaný řetězec — například že vznikl v konkrétním zařízení nebo prošel konkrétním nástrojem.“

---

### C. FAQ „Co z toho plyne pro můj web?“
> **„…optimalizační pluginy metadata často zahazují…“**

To je přijatelné víc než „většinou“, ale pokud chceš být konzistentní s limity zdrojů, můžeš přidat:
**„…metadata a credentials často zahazují…“**
Jinak to zbytečně redukuje problém jen na metadata, i když článek řeší i C2PA.

---

## 4. Vnitřní rozpory a nově vzniklá nečistota

### A. „tři vrstvy značení“ vs. pozdější rozlišení
Frontmatter:
> **„Tři vrstvy značení…“**

Tělo:
> **„Nejsou to tři verze téže věci“**  
> **„IPTC je běžný popisný slovník…“**

Tohle není přímý rozpor, ale je to terminologicky nečisté. V titulku/frontmatter tomu říkáš „značení“, zatímco v těle správně vysvětluješ, že nejde o totéž. Lepší je už nahoře nepoužít zastřešující „značení“.

---

### B. „původ obrázku“ vs. „AI značení“
Na více místech:
> **„co prozradí původ obrázku“**  
> **„Jak se na původ zeptat“**  
> **„První dva kroky odpovídají na otázku ‚vyrobil to model‘“**

Místy říkáš „původ“, jinde „vyrobil to model“. To nejsou stejné otázky a článek to sice jednou správně rozlišuje, ale pak to zase smíchá. Nejvíc je to vidět právě v té větě o prvních dvou krocích.

---

## 5. Nesrozumitelnost po opravách

### A.
> **„Google v přehledu oznámení z I/O 2026 jmenuje funkce Lens, AI Mode a Circle to Search a Gemini v Chromu…“**

Je to technicky obhajitelné, ale stylisticky kostrbaté. „jmenuje funkce … a Gemini v Chromu“ míchá search features a produkt/plochu. Ne chyba, spíš nečisté podání.

Lepší:
**„Google uvádí Search funkce jako Lens, AI Mode a Circle to Search a také Gemini v Chromu…“**

### B.
> **„Tři vrstvy, které o obrázku něco říkají“**

To je sice opatrné, ale dost vágní. Když už jsi zpřesňoval techniku, tady by šlo být konkrétnější:
**„Tři vrstvy, ze kterých lze číst AI značení, zaznamenaný původ nebo deklarovaný popis“**

---

## Priorita oprav

### Nutně opravit
1. **„První dva kroky odpovídají na otázku ‚vyrobil to model‘“**
2. **C2PA v tabulce a FAQ pořád zní jako úplná historie souboru**
3. **„metadata většinou zahodí“ v těle**
4. **frontmatter „vrstvy značení“ / title s obecným „původ obrázku“**

### Méně kritické, ale vhodné
5. **„Metadata jsou vedle obrázku“**
6. **terminologické čištění kolem „původ“ vs. „AI značení“**
7. **upřesnit, že pipeline může zahodit metadata i credentials, ne jen metadata**