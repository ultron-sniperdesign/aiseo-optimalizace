# Research — YMYL obsah pro AI

**Slug:** `ymyl-obsah-pro-ai`
**Kategorie:** **analysis** (bez howto → 4/4) · **Tagy:** duveryhodnost + obsah
**Řádek plánu:** `ymyl obsah pro ai`
**Datum:** 2026-07-24

---

## 🔴 JÁDRO: teorie říká „vyšší laťka", realita AI citací je nekonzistentní

Zadání: *„u YMYL témat AI i Google vyžadují vyšší E-E-A-T; ověřitelné kredencials
autora (licence, tituly v sameAs) jsou load-bearing."*

**První půlka je doložená (Google guidelines). Druhá půlka — že AI ověřitelnost
skutečně odměňuje — se s realitou rozchází.** A přesně tenhle rozpor je jádro
článku, ne poznámka:
- **teorie:** Google u YMYL drží vyšší laťku, udržuje „trusted source pool"
- **realita:** studie ukazují, že AI citace u zdravotních dotazů jsou nekonzistentní
  (YouTube nad lékařskými weby, 36 % citovaných stránek ani v top 10)

**Poctivý závěr:** dělejte E-E-A-T a ověřitelné kredencials proto, že je to **správné
a je to vaše nejlepší šance** — ne proto, že to citaci zaručí. A protože je AI u YMYL
nespolehlivá, o to víc záleží na **faktické přesnosti** (špatně shrnutý obsah u zdraví
nebo financí může reálně uškodit).

---

## Kolizní kontrola (2026-07-24)

YMYL je na webu **9× jako jednořádková zmínka** (checklist položka, odrážka, jedna FAQ
odpověď v `autorsky-profil-pro-ai`), ale **žádný článek to nemá jako téma.**

| Existující článek | Co má | Hranice |
|---|---|---|
| `e-e-a-t-pro-ai` | E-E-A-T obecně (4 písmena, Trust, jak doložit) | **rodič** — YMYL je jeho spoke, neopakovat obecné E-E-A-T |
| `autorsky-profil-pro-ai` | FAQ zmiňuje ČLK/ČAK/ČNB u citlivých témat | **mechanika Person/sameAs** — rozšířit, ne opakovat |
| `person-data-pro-autora` | @id, sameAs technicky | technika značkování |
| `jak-ai-cituje-zdroje` | jak platformy vybírají zdroje | výběr zdrojů obecně |

→ Čistý spoke. Uvnitř **odkazovat**, jádro (YMYL vyšší laťka + nekonzistence AI +
CZ registry) je nové.

## ✅ OVĚŘENO — Google QRG a definice YMYL

- **YMYL = obsah, který může ovlivnit zdraví, bezpečnost, finanční jistotu nebo
  blahobyt člověka.** Od září 2025 nově i **vláda, občanská témata, volby**.
- Aktuální Search Quality Rater Guidelines: **vydané 11. 9. 2025, platné i v 2026**,
  182 stran, veřejné PDF.
- U YMYL raters aplikují **„very high PQ standards"** — nízká kvalita může poškodit
  zdraví, finance nebo bezpečnost lidí.
- Google u YMYL očekává: **ověřitelné autorské kredencials, citace autoritativních
  zdrojů, faktickou přesnost, jasný redakční proces.**
- E-E-A-T = Experience, Expertise, Authoritativeness, **Trust jako základ**.
  „Druhé E" (Experience) přidané 12/2022.

## 🔴 OVĚŘENO — realita AI citací u YMYL je nekonzistentní

(Search Engine Land, SE Ranking, Guardian investigation, arXiv — 2026)

- **>82 % zdravotních dotazů** spouští AI Overviews → velký dosah, velká odpovědnost.
- **YouTube je nejcitovanější zdroj** v německých AI Overviews u zdravotních dotazů —
  objevuje se **2–3× častěji** než důvěryhodné zdravotní platformy.
- **Jen 36 %** stránek citovaných v AI se vůbec objevilo v Google top 10 organic.
- Mnoho AI zdravotních odpovědí **nebylo plně podloženo** zdroji, které citovaly —
  AI je zjednodušila, dezinterpretovala nebo si protiřečila.
- Guardian vyšetřoval **zdravotní dezinformace v AI Overviews**.

→ Z toho plyne: „trusted source pool" v praxi neznamená, že se ověřená autorita
spolehlivě dostane do citace. Model si vybírá i jinak a někdy špatně.

⚠️ **Čísla jsou z anglických/německých studií** → v článku uvádět jako „studie ukázaly",
NE „v Česku platí". Ilustrují mechanismus, ne český stav.

## 🇨🇿 CZ ÚHEL — ověřitelné kredencials v českém prostředí (přidaná hodnota)

Rozšíření FAQ z `autorsky-profil-pro-ai`, ne opakování:
- **Lékaři** → registrace v **ČLK** (Česká lékařská komora), dohledatelná.
- **Advokáti** → **ČAK** (Česká advokátní komora), veřejný seznam.
- **Finanční zprostředkovatelé/poradci** → registr **ČNB**.
- **Daňoví poradci** → **KDP ČR**; **auditoři** → **KA ČR**.
- Princip: kredencial má být **dohledatelný u nezávislé autority** a v `sameAs`
  odkazovat na ten veřejný záznam, ne na vlastní „o mně".
- ⚠️ NEtvrdit, že konkrétní registr = záruka citace (viz nekonzistence výše).

## ⚠️ BEZPEČNOST OBSAHU
Článek je o **strategii viditelnosti u YMYL témat**, NE o poskytování zdravotních,
finančních nebo právních rad. Jednou větou to v článku říct — a rovnou z toho udělat
argument: když ani my tady nedáváme odbornou radu, tím spíš má u skutečného YMYL obsahu
stát za jménem někdo doložitelně kvalifikovaný.

## Struktura (analysis, bez howto)
1. Krátká odpověď (co je YMYL + že laťka je vyšší, ale AI ji nedrží spolehlivě)
2. Co je YMYL a proč vyšší laťka (Google QRG, definice, září 2025 rozšíření)
3. Čím se YMYL obsah liší (CompareTable: běžné téma × YMYL)
4. Realita: AI u YMYL cituje nekonzistentně (Insight warning + čísla ze studií)
5. Co s tím dělat, když to citaci nezaručí (dělat správně = nejlepší šance)
6. CZ: ověřitelné kredencials (ČLK/ČAK/ČNB…) 
7. Faktická přesnost jako YMYL priorita č. 1 (protože AI zjednodušuje)
8. Chyby (MistakeGrid 4×)
9. Závěr = rozhodnutí (jste YMYL? pak kredencials + přesnost napřed)

## ⛔ NETVRDIT
- že ověřitelné kredencials zaručí citaci v AI (studie ukazují opak — nekonzistence)
- že čísla (82 %, 2–3×, 36 %) platí pro český trh (jsou z EN/DE studií)
- že AI aplikuje YMYL laťku jako změřený fakt (je to Google guideline + mechanismus,
  a citační realita ho čistě nepotvrzuje)
- jakoukoli konkrétní zdravotní/finanční/právní radu
- vymyšlené detaily o registrech nad rámec ověřeného (ČLK/ČAK/ČNB jsou zavedené)
- vlastní čísla o českém YMYL

## Hranice
- **Neřeší E-E-A-T obecně** → [e-e-a-t-pro-ai](/blog/e-e-a-t-pro-ai/)
- **Neřeší autorskou entitu technicky** → [autorsky-profil-pro-ai](/blog/autorsky-profil-pro-ai/) + [person-data-pro-autora](/blog/person-data-pro-autora/)
- **Neřeší, jak platformy vybírají zdroje** → [jak-ai-cituje-zdroje](/blog/jak-ai-cituje-zdroje/)
- **Nedává odbornou YMYL radu** — je o strategii viditelnosti, ne o medicíně/financích/právu

## Brand voice
- „YMYL" nechat (zavedená zkratka), poprvé rozepsat „Your Money or Your Life"
- „credentials" → **kredencials/kvalifikace/doklady**; „trusted source pool" → **skupina důvěryhodných zdrojů**
- čísla česky: 82 %, 2–3×, 36 %, 11. 9. 2025
- answer 40–60 slov, začíná definicí

## Interní odkazy (ověřeno 2026-07-24, všech 5 existuje)
`/blog/e-e-a-t-pro-ai/` · `/blog/autorsky-profil-pro-ai/` · `/blog/person-data-pro-autora/` ·
`/blog/jak-ai-cituje-zdroje/` · `/blog/znacka-na-wikipedii-pro-ai/`

## CTA
Žádná prodejní. Analysis o citlivém tématu nesmí končit prodejem. Nanejvýš odkaz
na E-E-A-T článek. Přiznat, že článek sám není odborná rada.
