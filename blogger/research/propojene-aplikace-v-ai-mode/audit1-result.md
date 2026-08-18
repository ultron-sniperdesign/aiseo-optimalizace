Níže je přísný faktický audit jen proti dodanému podkladu.

# Verdikt

Článek je **věcně velmi disciplinovaný** a ve většině důležitých míst drží hranici mezi doloženým a vlastním čtením. **Žádný zjevný BLOCKING problém nevidím.**  
Našel jsem ale několik **MAJOR** a **MINOR** míst, kde text buď lehce posouvá význam, nebo by měl být přesnější, aby nesváděl čtenáře.

---

# BLOCKING

**Nenalezeno.**

Co je dobře:
- netvrdíte dopad na odkazy, návštěvnost ani výběr webových zdrojů jako fakt,
- pasáž o trénování je opatrná a výslovně neobviňuje Google ze lži,
- frontmatter je v zásadě v souladu s tělem,
- článek není příliš krátký vzhledem k titulku; naopak pokrývá přesně to, co slibuje.

---

# MAJOR

## 1) Nepřesná parafráze nápovědy: „sedm služeb“ vs. skutečný výčet

### Vadná pasáž
- `stats.label`:  
  > „**služeb, na které se souhlas vztahuje — nejen AI Mode, ale i Mapy, Nákupy, Letenky, Hotely, Překladač a Zprávy**“

- tělo:
  > „**Souhlas platí pro sedm služeb**, ne jen pro AI Mode.“

- checklist:
  > „**Sedm služeb, kterých se jeden souhlas týká**“

### Problém
Podklad cituje nápovědu takto:

> „Search services include **Google Search (incl. AI Mode, Discover), Maps (incl. Ask Maps), Shopping, Flights, Hotel, Translate, and News**.“

To je **sedm položek jen tehdy**, když jako jednu položku berete „Google Search“ a do něj schováte AI Mode a Discover, a zároveň jako jednu položku berete „Flights, Hotel“ zvlášť nebo dohromady podle interpretace. V článku ale:
- jednou mluvíte o „sedmi službách“,
- jinde výčtově přidáváte AI Mode a Discover,
- v checklistu máte navíc položku „Letenky a Hotely“ jako jednu kartu, ale uvnitř textu ji sami označíte za „dvě samostatné vertikály“.

To není tvrdá faktická chyba, ale je to **matoucí a zbytečně konstrukční**. Čtenář snadno nabude dojmu, že „sedm“ je oficiální Googlovo číslo, což z podkladu neplyne.

### Návrh opravy
Nejčistší je **vypustit číslo** a držet se doslovného výčtu.

Např.:
- místo  
  > „Souhlas platí pro sedm služeb, ne jen pro AI Mode.“
- použít  
  > „Souhlas se netýká jen AI Mode, ale širšího okruhu vyhledávacích služeb: Vyhledávání včetně AI Mode a Discoveru, Map, Nákupů, Letenek, Hotelů, Překladače a Zpráv.“

A ve `stats`:
- místo `7`
- raději něco jako:
  - `value: "víc než AI Mode"`
  - nebo `value: "Search + Maps + Shopping + Flights + Hotel + Translate + News"`

Pokud chcete číslo zachovat, musíte vysvětlit metodiku:
> „Google v nápovědě uvádí sedm kategorií Search services; do položky Google Search přitom zahrnuje i AI Mode a Discover.“

---

## 2) „Aplikace Google Workspace“ je silnější tvrzení, než podklad unese

### Vadná pasáž
FAQ:
> „Podle nápovědy Googlu **aplikace Google Workspace**, konkrétně Gmail a Kalendář, a Fotky Google.“

### Problém
Podklad říká:

> „all Search services will be permitted to access **Workspace (currently Gmail and Google Calendar)** and Google Photos.“

To neznamená, že uživatel „připojuje aplikace Google Workspace“ obecně. Naopak z podkladu plyne, že jde **aktuálně o Gmail a Google Calendar** plus Google Photos. Vaše formulace „aplikace Google Workspace“ může čtenáře svést k závěru, že rozsah je obecnější a že se to týká širší sady Workspace aplikací.

### Návrh opravy
FAQ přepsat úžeji:

> „Podle nápovědy Googlu jde aktuálně připojit **Gmail, Kalendář Google a Fotky Google**. U Kalendáře nápověda uvádí omezení jen na USA v angličtině.“

Případně:
> „Nápověda mluví o přístupu k Workspace **aktuálně v podobě Gmailu a Kalendáře Google** a k Fotkám Google.“

---

## 3) „Odpovídat s ohledem na to, co v nich je“ je o stupeň volnější než doložená formulace

### Vadná pasáž
Úvod:
> „Google nechá k AI Mode dobrovolně připojit vlastní aplikace — Gmail, Fotky, v USA i Kalendář — a **odpovídat s ohledem na to, co v nich je**.“

### Problém
Podklad má přesnější formulaci:

> „summaries, excerpts, generated media, and inferences from your relevant media, emails, and files may be used to help us answer your prompts“

Vaše věta je sice smyslově blízká, ale trochu zakrývá, že Google nemluví jen o „tom, co v nich je“, ale i o **souhrnech, úryvcích, generovaných médiích a odvozených informacích**. U tématu, kde později rozebíráte jemný rozdíl mezi „directly“ a „training“, je lepší být už v úvodu precizní.

### Návrh opravy
Např.:
> „Google nechá k AI Mode dobrovolně připojit Gmail, Fotky a v USA i Kalendář a použít z nich **souhrny, úryvky, generovaná média a odvozené informace** jako kontext pro odpověď.“

Nebo méně těžkopádně:
> „… a použít z nich relevantní souhrny a odvozené informace jako kontext pro odpověď.“

---

## 4) Jedna formulace už lehce implikuje dopad na to, „čí články uvidíte“

### Vadná pasáž
Checklist:
> „**Zprávy** — Zpravodajská plocha, **kde se rozhoduje o tom, čí články uvidíte**.“

### Problém
Podklad pouze dokládá, že souhlas platí i pro News. **Nedokládá**, jak přesně se v News projeví ani zda propojení ovlivní výběr článků. Tato formulace je sice obecně pravdivá o zpravodajské ploše jako takové, ale v kontextu článku může čtenář snadno číst:
- když propojím aplikace,
- ovlivní to, čí články v News uvidím.

To je přesně typ posunu, který zadání zakazuje.

### Návrh opravy
Zjemnit na čistě popisnou rovinu:
> „**Zprávy** — patří do stejného souhlasu, i když Google u této funkce nepopisuje konkrétní dopad na výběr zdrojů.“

Nebo stručně:
> „**Zprávy** — součást stejného souhlasu; konkrétní dopad na zobrazení článků Google v nápovědě nerozepisuje.“

---

# MINOR

## 1) „Všechny vyhledávací služby“ vs. české „vyhledávací služby“ může být terminologicky nejasné

### Vadná pasáž
> „Souhlas se podle nápovědy vztahuje na **všechny vyhledávací služby**…“

### Problém
To odpovídá EN citaci „all Search services“, ale v češtině „vyhledávací služby“ může znít užším dojmem než skutečný výčet, který zahrnuje i News, Translate apod. Není to chyba, jen terminologické riziko.

### Návrh opravy
Hned při prvním výskytu doplnit výčet:
> „… vztahuje na širší sadu služeb Search: Vyhledávání, Mapy, Nákupy, Letenky, Hotely, Překladač a Zprávy.“

---

## 2) „Vlastní aplikace“ může být stylisticky trochu vágní

### Vadná pasáž
> „Google nechá k AI Mode dobrovolně připojit **vlastní aplikace**…“

### Problém
Není to fakticky špatně, ale méně přesné než „Google content apps“ / konkrétní výčet.

### Návrh opravy
> „Google nechá k AI Mode dobrovolně připojit **Gmail, Fotky a v USA i Kalendář**…“

---

## 3) Drobné kolísání názvosloví: „Fotky“ / „Fotky Google“ / „Google Photos“

### Vadná místa
- „Fotky“
- „Fotky Google“
- v jiné části implicitně „Google Photos“

### Problém
Není to věcná chyba, jen konzistence.

### Návrh opravy
Zvolit jednu podobu:
- v češtině nejspíš **Fotky Google**
- a držet ji všude.

---

## 4) „Příslib Kalendáře“ je lehce publicistické

### Vadná pasáž
> „… a **příslib Kalendáře**“

### Problém
Fakticky to sedí na „and soon Google Calendar“, ale je to lehce hodnotící.

### Návrh opravy
> „… a oznámení, že **brzy přibude Kalendář Google**.“

---

## 5) „Dopad na návštěvnost webů z toho neplyne žádný“ je správně míněno, ale stylisticky by šlo zpřesnit

### Vadná pasáž
> „**Dopad na návštěvnost webů z toho neplyne žádný**, protože k němu neexistují data — ani Googlova, ani cizí.“

### Problém
Smysl z kontextu je jasný: **nelze doložit žádný dopad**. Doslovně ale věta zní, jako by bylo jisté, že dopad není žádný. To je drobný stylistický skluz proti vašemu jinak přísnému standardu.

### Návrh opravy
> „**K dopadu na návštěvnost webů z toho nelze vyvodit nic**, protože k němu neexistují data — ani Googlova, ani cizí.“

Nebo:
> „**Žádný doložený dopad na návštěvnost z toho neplyne**…“

---

# Kontrola frontmatteru a souladu s tělem

## `answer`
> „Google nechá k AI Mode dobrovolně připojit Gmail a Fotky, v USA i Kalendář, a čerpá z nich kontext o uživateli. Souhlas se přitom vztahuje na všechny vyhledávací služby včetně Map, Nákupů a Zpráv. Pro obsah webu z toho nový úkol neplyne; Google o dopadu na odkazy neuvádí nic.“

**Hodnocení:** V zásadě v pořádku.  
Jen bych zvážil drobné zpřesnění „čerpá z nich kontext“ na něco bližšího nápovědě.

Návrh:
> „… a může z nich použít relevantní souhrny a odvozené informace jako kontext o uživateli.“

## `description`
> „Gmail, Fotky a brzy Kalendář jde připojit k AI Mode. Souhlas ale platí i pro Mapy, Nákupy a Zprávy — a pro obsah webu z toho žádný nový úkol neplyne.“

**Hodnocení:** Sedí. Neslibuje víc, než článek dodá.

## `stats`
Nejslabší místo frontmatteru je první stat s číslem **7**. Viz MAJOR č. 1.

## FAQ
FAQ je z většiny v souladu s tělem.  
Nejslabší je první odpověď kvůli formulaci „aplikace Google Workspace“; viz MAJOR č. 2.

---

# Kontrola pasáže o dopadu na weby

**Vyhovuje zadání.**  
Text se většinou drží formulace:
- nic nového pro obsah,
- Google neuvádí nic o odkazech,
- příklady naznačují kontext o uživateli, ale je to označeno jako vaše čtení.

Jediné místo, které bych stáhl, je checklistové:
> „Zprávy — … kde se rozhoduje o tom, čí články uvidíte.“

To už příliš snadno sugeruje konkrétní dopad v rámci News.

---

# Kontrola pasáže o trénování

**Férová, nepřehání.**  
Silné stránky:
- uvádí obě věty vedle sebe,
- výslovně píše:
  > „Netvrdím, že si ty věty odporují.“
- korektně vysvětluje význam slova *directly*.

Tady je tón správně zdrženlivý a v souladu s podkladem.

---

# Doporučená priorita oprav

## Opravit určitě
1. vypustit nebo přesněji vysvětlit číslo **7 služeb**,
2. nahradit „aplikace Google Workspace“ přesným výčtem,
3. zjemnit pasáž o **Zprávách**, aby neimplikovala nedoložený dopad.

## Opravit pro vyšší preciznost
4. zpřesnit „odpovídat s ohledem na to, co v nich je“,
5. upravit větu o „dopadu na návštěvnost“, aby říkala „nelze doložit / neplyne doložený dopad“.

---

# Krátký závěr

Článek je **publikovatelný bez blokující faktické vady**.  
Největší riziko je **zbytečně tvrdé číslo „7 služeb“** a pár formulací, které mohou čtenáře vést o krok dál, než dovoluje podklad. Po těchto menších zpřesněních bude text velmi solidní.