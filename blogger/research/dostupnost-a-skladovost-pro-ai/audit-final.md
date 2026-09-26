# Fáze 1 — samostatný audit

## Verdikt: OPRAVIT PŘED PUBLIKACÍ

Článek je po věcné i redakční stránce velmi blízko publikaci. Samostatná kontrola aktuálních primárních zdrojů ale odhalila jednu vynechanou povinnou podmínku OpenAI pro varianty. Bez ní je technický návod neúplný. Druhý nález je drobná syntaktická nejasnost v úvodu.

## Nálezy

### 1. [BLOCKER] Neúplné povinné podmínky pro varianty v nativním feedu OpenAI — zásadní

**Citace:**

> „OpenAI vyžaduje samostatný řádek každé varianty s vlastním `item_id`, URL, cenou a stavem; odkaz má variantu předvolit, pokud je to technicky možné.“

Stejné zjednodušení je ve FAQ:

> „OpenAI vyžaduje samostatný řádek a jedinečné `item_id`; odkaz má variantu předvolit, pokud je to technicky možné.“

**Problém:** Samostatný řádek a odlišné `item_id` nestačí k tomu, aby OpenAI řádky chápalo jako varianty jednoho produktu. V nativním formátu jsou pro varianty podmíněně povinné také společné `group_id`, hodnota `listing_has_variations=true` a `variant_dict` s vybranými možnostmi. Bez nich se skupina variant nevytvoří. Formulace navíc neříká, že názvy těchto polí platí pro nativní formát; Google kompatibilní profil používá jiné názvy.

**Důkaz:** Aktuální primární dokumentace OpenAI v části „Variants“ říká, že každá volba má být samostatný řádek s odlišným `item_id`, stejným `group_id`, `listing_has_variations=true` a `variant_dict`; každý řádek pak nese vlastní cenu, dostupnost, URL a obrázky. Tabulka zároveň označuje `group_id`, `listing_has_variations` a `variant_dict` jako podmíněně povinné. Bez `group_id` se použije `item_id`, což skupinu variant nezaloží. Viz [OpenAI Developers — Products, Variants](https://developers.openai.com/commerce/specs/file-upload/products#variants). Tato podmínka chybí i v `research.md`, jehož shrnutí uvádí jen samostatný řádek, adresu, cenu a dostupnost.

**Oprava:** V hlavním textu nahradit větu například takto:

> „V nativním formátu OpenAI pošlete pro každou variantu samostatný řádek s odlišným `item_id`, společným `group_id`, hodnotou `listing_has_variations=true` a `variant_dict` vybrané kombinace. Každý řádek nese vlastní cenu, dostupnost, URL a obrázek; URL má variantu předvolit, pokud je to možné. U Google kompatibilního profilu použijte pole potvrzená pro tento profil.“

Stejnou podmínku zkráceně doplnit do FAQ, aby jeho samostatná odpověď nezůstala technicky neúplná.

### 2. [WARNING] Nejasný podmět v úvodní odpovědi — drobný

**Citace:**

> „E-shop má obojí ukázat zákazníkovi. Stav dostupnosti musí správně promítnout do používaných produktových dat…“

**Problém:** Ve druhé větě se má nevyjádřený podmět „e-shop“ přenést z předchozí věty. Tvar „stav“ je ale v prvním i čtvrtém pádě stejný, takže čtenář jej nejprve přirozeně čte jako nový podmět. Správný význam se vyjasní až u slovesa a předložkové vazby. V klíčovém úvodu to zbytečně zpomaluje porozumění.

**Důkaz:** Věta zamýšlí konstrukci „e-shop promítne stav“, ale její povrchový slovosled začíná objektem, který lze bez kontextu číst jako podmět. Nejde o odborný termín ani citaci; je to čistě syntaktická nejasnost.

**Oprava:** Spojit věty a podmět ponechat výslovný:

> „E-shop má obojí ukázat zákazníkovi a stav dostupnosti správně promítnout do používaných produktových dat; dodací lhůtu doplní způsobem, který dané napojení podporuje.“

## Co samostatnou kontrolou prošlo

- Krátká odpověď má 56 slov, začíná definicí a funguje samostatně.
- První odstavec těla vysvětluje rozdíl skladovosti, režimu objednávky a dodací lhůty bez nutnosti číst zbytek článku.
- Meta popis má 127 znaků, odpovídá obsahu a slug je věcný. Délka `title` nebyla posuzována, protože článek má samostatný `seoTitle`.
- Hierarchie H2 je logická a každý H2 používá předepsané zvýraznění tématu i pointy.
- Podmínky Googlu pro `in_stock`, `out_of_stock`, `preorder`, `backorder`, `availability_date`, shodu stránky–pokladny–feedu, omezení doručení a variantové URL odpovídají aktuální dokumentaci.
- Příklad `OfferShippingDetails` obsahuje povinné údaje pro dopravní rozšíření: `deliveryTime`, `shippingDestination` a `shippingRate`; čas zpracování a přepravy je oddělený správně.
- Tvrzení o schvalování přímých feedů OpenAI, denním úplném feedu a průběžných aktualizacích přes API odpovídají aktuální dokumentaci.
- CTA vede na konkrétní AI SEO Wireframe Pack. Cena 1 490 Kč včetně DPH, sedm typů stránek a samostatná kapitola k nasazení odpovídají `src/content/pages/pack.ts`.
- Mechanický jazykový checker proti `JAZYK_SLOVNIK.md` našel 0 nálezů v 1 996 slovech. V textu nezůstaly zakázané výrazy ani zjevná typografická chyba.

## Primární zdroje použité mimo dodanou rešerši

- [OpenAI Developers — Products](https://developers.openai.com/commerce/specs/file-upload/products)
- [OpenAI Developers — Get Started](https://developers.openai.com/commerce/guides/get-started)
- [OpenAI Help — Shopping with ChatGPT Search](https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search)
- [Google Merchant Center — Availability](https://support.google.com/merchants/answer/6324448?hl=en)
- [Google Merchant Center — Availability date](https://support.google.com/merchants/answer/6324470?hl=en)
- [Google Search Central — Product variant structured data](https://developers.google.com/search/docs/appearance/structured-data/product-variants)
- [Google Search Central — Merchant listing structured data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)

## Poznámka k jazykovému průchodu

Mechanický checker proběhl lokálně. Doplňkový průchod přes externí OpenAI API nebyl proveden, protože automatická bezpečnostní kontrola odmítla odeslání dosud nepublikovaného článku a celého interního slovníku mimo pracovní prostředí. Jazykovou část proto uzavírá lokální checker a vlastní kontextový redakční průchod.

# C5b — doověření oprav a závěrečný verdikt

## Cílené doověření nového blokátoru z fáze 1

**Výsledek: OBSTÁLO.** Aktuální článek i `research.md` už správně rozlišují vlastní formát OpenAI od profilu kompatibilního s Google Merchant Center:

- článek v hlavním textu výslovně říká „ve vlastním formátu OpenAI“ a uvádí pro každou variantu samostatný řádek, odlišné `item_id`, společné `group_id`, `listing_has_variations=true`, `variant_dict` vybrané kombinace a vlastní cenu, dostupnost, URL i obrázek;
- tentýž odstavec odděluje profil kompatibilní s Google Merchant Center a odkazuje na pole, která OpenAI pro konkrétní profil potvrdilo;
- FAQ uvádí všechna čtyři identifikační a skupinová pole nativního formátu a správně ponechává předvolení varianty v URL jako podmínku „pokud je to technicky možné“;
- `research.md` obsahuje úplné podmínky v hlavních zjištěních i v tabulce podmínek a výslovně upozorňuje na jiné názvy polí Google kompatibilního profilu.

Tím je zásadní nález č. 1 z první fáze věcně uzavřen. Oprava odpovídá aktuální primární dokumentaci [OpenAI Developers — Products, Variants](https://developers.openai.com/commerce/specs/file-upload/products#variants).

## Kontrola faktického auditu

Všech sedm nálezů z `audit-fakta.md` bylo porovnáno s aktuálním článkem, nikoli jen s tvrzením ve `vyporadani.md`.

| # | Výsledek | Ověření v aktuálním článku |
|---|---|---|
| 1 | OBSTÁLO | `answer`, úvod i závěr oddělují fyzickou skladovost, režim objednávky a dodací lhůtu. |
| 2 | OBSTÁLO | Řádek `in_stock` zahrnuje nákup, včasné odeslání a doručení do všech podporovaných oblastí; následuje viditelnost omezení doručení. |
| 3 | OBSTÁLO | Použití profilu kompatibilního s Google Merchant Center je podmíněno výslovným potvrzením OpenAI pro registrovaný feed. |
| 4 | OBSTÁLO | `availability_date` je jedno datum v ISO 8601, nejvýše rok dopředu; rozsah je zakázán a rozpětí je omezeno na viditelný text. |
| 5 | OBSTÁLO | Úvod rozlišuje povinné promítnutí stavu od způsobu doplnění dodací lhůty podle konkrétního napojení. |
| 6 | OBSTÁLO | JSON-LD ukázka obsahuje `image`, `shippingRate`, `shippingDestination` i `deliveryTime` a vyžaduje náhradu ukázkových hodnot. |
| 7 | OBSTÁLO | Google má přímo předvolitelnou odlišnou URL; u OpenAI je předvolení omezeno formulací „pokud je to technicky možné“. Rozlišení je i ve FAQ. |

Čtyři dřívější blokátory, které už samostatně doověřil faktický auditor v dodatku svého auditu, obstály i v této závěrečné kontrole.

## Kontrola jazykového auditu

Všech 27 původních nálezů z `audit-jazyk.md` bylo znovu porovnáno s článkem. Cílené hledání všech původních problematických formulací nevrátilo žádný výskyt a navržené významové opravy jsou v textu skutečně přítomné.

| # | Výsledek | Ověřená oprava |
|---|---|---|
| 1 | OBSTÁLO | „jediný export za den“ |
| 2 | OBSTÁLO | „profil kompatibilní s Google Merchant Center“ |
| 3 | OBSTÁLO | „Jeden zdroj údajů“ a konkrétní pokyn ke generování výstupů |
| 4 | OBSTÁLO | načítání a zpracování dat vytvořených JavaScriptem |
| 5 | OBSTÁLO | konkrétní chyba odkazu na jinou variantu bez nedoloženého superlativu |
| 6 | OBSTÁLO | „součástí provozu“ |
| 7 | OBSTÁLO | proměnlivost data dodavatele, průběžné ověření a promítnutí změny |
| 8 | OBSTÁLO | konkrétní důsledek vágního „skladem u dodavatele“ |
| 9 | OBSTÁLO | „dostupnost nabídky“ místo abstraktní vrstvy |
| 10 | OBSTÁLO | české vysvětlení `availability` u typu `Offer` |
| 11 | OBSTÁLO | zásada téhož aktuálního údaje u ceny |
| 12 | OBSTÁLO | „objednávkový proces“ a „produktový feed“ |
| 13 | OBSTÁLO | „vlastní formát produktového feedu“ |
| 14 | OBSTÁLO | samostatný popis zpracování a přepravy |
| 15 | OBSTÁLO | pokyn nekopírovat příklad bez úprav |
| 16 | OBSTÁLO | změna skladového stavu a současná aktualizace |
| 17 | OBSTÁLO | e-shopové řešení a srozumitelně popsané HTML od serveru |
| 18 | OBSTÁLO | přirozený slovosled příkladu modrého a černého trička |
| 19 | OBSTÁLO | URL nebo odkaz místo nejasné adresy |
| 20 | OBSTÁLO | české pojmy s technickými názvy `Product`, `Offer` a `availability` |
| 21 | OBSTÁLO | ruční úprava údajů dodavatelem |
| 22 | OBSTÁLO | evidence doby a přístup k API |
| 23 | OBSTÁLO | krátkodobý nesoulad a pokud možno současná aktualizace |
| 24 | OBSTÁLO | přesná data výslovně nejsou zárukou zobrazení |
| 25 | OBSTÁLO | H2 říká, že přesná dostupnost dává všem stejný údaj |
| 26 | OBSTÁLO | údaj pro vyhledávač či nákupní službu a samostatné stavy variant |
| 27 | OBSTÁLO | CTA oslovuje zákazníky, vyhledávače a AI |

Také drobný nález č. 2 z první fáze závěrečného auditu obstál: úvod nyní drží výslovný podmět „e-shop“ ve spojené větě.

## Nový nález po zapracování opravy

### [WARNING] Technické názvy v odpovědi FAQ nejsou označené jako kód — drobný, ale před publikací povinný

**Citace:**

> „Ve vlastním formátu OpenAI potřebuje každý řádek odlišné item_id, společné group_id, listing_has_variations=true a variant_dict…“

**Problém:** Jde o oficiální názvy polí, takže se nemají překládat. V odpovědi FAQ ale nejsou označené jako technický zápis, na rozdíl od stejné pasáže v hlavním textu. Povinný projektový checker proto na řádku 32 hlásí `listing_has_variations` jako „Míchání jazyků v jednom sousloví“. Aktuální tvrzení ve `vyporadani.md`, že mechanický checker vrací 0 nálezů, už po doplnění FAQ neplatí.

**Důkaz:** Nový běh `jazyk-check.py` proti aktuálnímu článku a `JAZYK_SLOVNIK.md` vrátil 1 nález: 0× zakázaný výraz, 1× k řešení, hustota 0,5 nálezu na 1 000 slov. Projektové pravidlo před publikací požaduje nulu nebo doloženou výjimku ve slovníku; zde je přirozenější označit názvy polí jako kód.

**Konkrétní oprava:** V odpovědi FAQ uzavřít všechna čtyři pole do zpětných apostrofů:

> „Ve vlastním formátu OpenAI potřebuje každý řádek odlišné `item_id`, společné `group_id`, `listing_has_variations=true` a `variant_dict`; odkaz má variantu předvolit, pokud je to technicky možné.“

Po opravě znovu spustit jazykový checker a vyžadovat 0 nálezů. Věcný význam se nemění.

## Ostatní závěrečné kontroly

- Krátká odpověď má 56 slov a zůstává v požadovaném rozsahu 40–60 slov.
- Meta popis má 127 znaků. Délka `title` nebyla posuzována, protože existuje `seoTitle`.
- Všech šest H2 obsahuje `<span class="hl">` i `<strong>`.
- CTA, cena 1 490 Kč včetně DPH, sedm typů stránek a samostatná kapitola k nasazení zůstávají v souladu se zdrojem pravdy.
- Nezůstal žádný věcný blocker ani nevyřešený nález z předchozích auditů.

## Dodatek po opravě FAQ

**Nový drobný nález je vyřešený.** Aktuální odpověď FAQ označuje `item_id`, `group_id`, `listing_has_variations=true` a `variant_dict` jako inline kód. Vlastní opakovaný běh `jazyk-check.py` proti aktuálnímu článku a `JAZYK_SLOVNIK.md` potvrdil 2 031 slov, 0 zakázaných výrazů, 0 položek k řešení a hustotu 0,0 nálezu na 1 000 slov.

## Závěrečný verdikt: PUBLIKOVAT

Všechny nálezy faktického, jazykového i závěrečného auditu jsou vyřešené a doověřené v aktuálním článku. Nezůstává věcný blocker ani jazykový nález bránící publikaci.
