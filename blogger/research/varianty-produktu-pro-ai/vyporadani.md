# Vypořádání auditu — varianty-produktu-pro-ai

Pravidla Z17 (oprava se hledá v celém souboru včetně frontmatteru) a Z18. Grep po opravách
kola 1: `OpenAI|group_id u|jediná povinná|jediné řešení|dnes|Kontroly variant má` — zbývají
jen dva záměrné výskyty OpenAI v sekci o feedech (tabulka + odstavec), oba s výhradou.

## Vlastní opravy před 1. kolem (zachyceno při kontrole proti zdrojům)

| Místo | Bylo | Je | Proč |
|---|---|---|---|
| Checklist „Shodu všech míst“ | „OpenAI píše, že rozporné hodnoty za vás nesladí“ | (věta později vypuštěna celá, viz kolo 1) | Zdroj mluví o rozporu mezi atributy uvnitř řádku a `variant_dict`, ne o stránce × feedu |
| robots.txt | „Google u variant požaduje, aby je mohl procházet“ | „u variant Google chce adresy, přes které je může procházet a rozpoznat“ | doslovný účel zásady: „allows Google to crawl and identify each variant“ |
| `url` u ProductGroup | „Google ji nepoužívá“ | „podle Googlu ji neuvádějte“ | zdroj: „Don't use this property for multi-page websites“ |
| Merchant Center | „pravidla, která se v praxi porušují nejčastěji“ | „pravidla, na kterých seskupení stojí“ | četnost porušování nemám čím doložit |
| Chyba 03 | „Google varianty seskupuje nekonzistentně“ | „může to vést k nekonzistentnímu seskupení“ | zdroj: „could cause inconsistency“ |
| Shrnutí | „Na Shoptetu je slabé místo…“ | „Na stránkách Shoptetu, které jsem přeměřil…“ | vzorek 6 + 2 stránky |
| Odkaz na microdata | „data Shoptet zapisuje v microdatech, ne v JSON-LD“ | „v microdatech u všech 38, v JSON-LD navíc jen u šesti“ | srpnový research sám označil obecnou větu za příliš silnou |

## Kolo 1 (osa faktů) — zapracováno

| # | Nález | Rozhodnutí | Co se změnilo (Z17: kde všude) |
|---|---|---|---|
| B1 | OpenAI v `answer` bez podmínek dostupnosti | **Přijato** | `answer`: OpenAI a `group_id` vypuštěny. Checklist: OpenAI vypuštěn ze všech čtyř položek i z úvodní věty. Odstavec o OpenAI doplněn o „jen schválení partneři“ (developers.openai.com/commerce/guides/get-started, 3. 10. 2026). Tabulka: „dnes“ → „k 3. 10. 2026“. |
| B2 | Test rozšířených výsledků / Search Console jako tvrzení o UI | **Přijato zčásti** | Nejde o tvrzení o UI — je to oznámení Googlu (blog 20. 2. 2024) a doporučení v dokumentaci variant („Validate your code using the Rich Results Test“). Formulace ale zněla jako vlastní zkušenost, proto přepsáno s atribucí: „K ověření kódu Google doporučuje… Podle oznámení z února 2024 do něj kontroly variant přidal…“. Stepper: věta o reportech v Search Console vypuštěna. |
| B3 | „`name` je jediná povinná vlastnost“ svádí k závěru, že stačí | **Přijato** | Odrážka přepsána: povinná u samotného `ProductGroup`, ale pro variantní výsledky nestačí — povinné vlastnosti produktu a nabídky, identifikátor, adresa předvolby. |
| B5 | Zboží.cz: chybí výjimka variant určených výrobcem | **Přijato** | Tabulka feedů: doplněna výjimka „třeba kapacita a barva telefonu“ (zdroj: příklad Apple iPhone 5S, 16 GB stříbrný). FAQ ani jiné místo definici neopakuje (grep `cenov`). |
| W2 | Nadpis o Shoptetu zobecňuje | **Přijato** | H3: „Shoptet ve vzorku: adresa varianty fungovala, skupina v datech chyběla“. |
| T1 | „dnes“ bez data | **Přijato** | Úvod (vypuštěno), H2 sekce platforem („v praxi — přeměřeno 3. 10. 2026“), tabulka OpenAI („k 3. 10. 2026“). Grep `dnes` = 0. |

## Kolo 1 — nezapracováno + důvod

| # | Nález | Proč ne |
|---|---|---|
| B4 | Heureka: „jako jediné řešení“ je silnější než podklad | **Podklad to unese doslova.** Specifikace Heureky (sluzby.heureka.cz/napoveda/xml-feed/, 3. 10. 2026), tag URL: „Pokud máte varianty produktů na svém e-shopu na jedné stránce, pak je jediným řešením používat tzv. hashtagy.“ Auditor měl v briefu jen zkrácené „Heureka bere i fragment“. Formulaci jsem přesto zpřesnil: citace v uvozovkách + vysvětlení, že Heureka počítá se stránkou bez předvolby adresou, a že parametr dává unikátní adresu, kterou Heureka vyžaduje („URL adresa musí být u každého produktu unikátní“). |
| W1 | „neovlivní schválení stávajících produktů“ nedoloženo | **Doloženo.** Merchant Center, How to use conversational attributes (answer 17085370, 3. 10. 2026): „Including them won't impact the approval status of your existing products.“ V briefu ta věta chyběla. Doplněna atribuce „Podle nápovědy Merchant Center…“. |
| W3 | Upgates: sitemapa a XML feedy nedoložené | **Doloženo.** Upgates nápověda Varianty produktu (upgates.cz/a/varianty, 3. 10. 2026): „Každá varianta má vlastní URL adresu na webové části. Je vkládána samostatně do sitemap a XML feedů pro internetové srovnávače.“ Brief obsahoval jen první větu. Beze změny. |

## Jazykový průchod

- **Mechanický (`jazyk-check.py`)** po draftu: 0 nálezů (2 771 slov, 275 pravidel). Další průchody viz poslední sekce.

## Kolo 2 (osa jazyka a struktury) — zapracováno

Auditor ověřil všech devět vypořádání z kola 1 („oprava sedí“ / „důvod obstojí“), nový
zásadní nález nemá.

| # | Nález | Rozhodnutí | Co se změnilo (Z17) |
|---|---|---|---|
| W1 | Odpovědi ve FAQ nejsou sebestačné bez otázky | **Přijato** | Pět odpovědí začíná podmětem: „Každá varianta produktu musí…“, „Kanonická adresa u variant závisí…“, „item_group_id je atribut…“, „Znak # v adrese pro Google variantu nerozliší…“, „Heureka a Zboží.cz atribut item_group_id nepoužívají…“. Odpověď o Shoptetu podmět už měla. Grep `Ne pod tímhle|Pro Google ne\.|Záleží na tom` = 0. |
| W2 | H2 „Časté chyby“ a „Shrnutí“ jsou popisky, ne pointa | **Přijato, se změnou** | „Šest chyb při zápisu variant“ — návrh auditora „opakovaných chyb“ jsem nepřevzal, četnost nemám čím doložit. Závěr: „U variant produktu slaďte adresu, data a feed“. Kontrola formátu H2 prázdná. |
| T1 | Druhý odstavec úvodu je přeplněný | **Přijato** | Rozděleno: rozsah návodu / praktická část (Shoptet, MEGA DETAIL) / původ tvrzení. |

## Jazykový průchod

- **Mechanický (`jazyk-check.py`, slovník v72, 275 pravidel):** 0 nálezů v konceptu, po kole 1,
  po kole 2 i po jazykových opravách (2 851 slov).
- **LLM (gpt-5.4 + celý slovník, `_c6-result.md`):** 10 nálezů, 3 se překrývaly.
  - **Opraveno (6):** „pracují přes tři údaje“ → „pomocí tří údajů“ (krátká odpověď) · „zapsat přes“
    → „pomocí“ (popis) · „zakládají přes šablony“ → „pomocí šablon“ (FAQ + tělo, 2×) · „adresy,
    přes které je může procházet“ → „které může procházet a podle kterých varianty rozpozná“ ·
    „procházet méně spolehlivě“ → „nákupní procházení může být méně časté a méně spolehlivé“ ·
    „cílí na USA“ → „je určené pro USA“ (tabulka + odstavec) · „aby šla předvolit“ → „aby se
    dala předvolit“. Grep `\bpřes\b|cílí na|aby šla` po opravě = 0.
  - **Nezapracováno (2):** „zapsat do kódu“ — vazba „zapsat do + 2. pád“ je spisovná · slovosled
    „Podporu variant … zavedl Google v únoru 2024“ — téma na začátku věty, ne opis.
  - **Nová pravidla do slovníku:** žádná — viz `JAZYK_AUDIT_LOG.md` (falešná pozitiva u „přes“ a „cílit na“).

## Po nasazení — mobilní kontrola (D3), 3. 10. 2026

- **Strojové měření na 375 px:** 0 přetékajících prvků, stránka vodorovně neroluje.
- **Okem:** krátká odpověď, Checklist, CompareTable (ve vlastním rolovacím obalu), ukázka kódu,
  Stepper, MistakeGrid (čísla 01–06), CTA i FAQ v pořádku.
- **Nález:** čtyřsloupcová tabulka feedů měla kvůli dlouhým buňkám řádky vysoké kolem 300 px
  a třetí a čtvrtý sloupec šlo číst jen rolováním do strany. Nejde o přetečení komponenty, ale
  o můj text, proto **zkráceno v článku**: buňky jen klíčové údaje, podrobnosti přesunuty do
  odstavců pod tabulkou (pravidla Merchant Center jako výčet, nový odstavec o Zboží.cz s celou
  definicí varianty i výjimkou, věta o fragmentu `#` k odstavci o Heurece). Žádné tvrzení se
  nezměnilo ani neubylo; grep `čtyři pravidla|užší definice` = 0, checker 0 nálezů.
