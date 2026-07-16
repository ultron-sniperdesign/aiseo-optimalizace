# Research — Stránka služby optimalizovaná pro AI

**Datum:** 2026-07-11
**Cílová kategorie:** tutorial
**Slug:** `sluzby-stranka-pro-ai`
**Cílové KW:** stránka služby / service schema / seo pro služby / b2b stránka služby ai

## 1. Definice (krátká odpověď)

- **Stránka služby** = stránka popisující jednu konkrétní službu (ne e-shop produkt).
- Pro AI potřebuje odpovědět na to, co se lidé reálně ptají: **co to je, pro koho to je, co v tom je, kolik to zhruba stojí, jak to začne**.
- Technicky pomáhá typ **Service** ve strukturovaných datech + krátká odpověď nahoře.
- Rozdíl proti produktu: **nemá cenu ani SKU** v klasickém smyslu, často jde o rozsah a individuální nacenění → o to důležitější je popsat rozsah a cenový rámec slovy.

## 2. Proč jsou stránky služeb pro AI slabší než produkty

- Produktové stránky mají strukturovaná data (Product, cena, dostupnost, recenze) → AI z nich čerpá snadno.
- Stránky služeb bývají **marketingové bloby**: „jsme lídr, individuální přístup, kontaktujte nás" → nulová informační hodnota, nic k citaci.
- Chybí konkrétní odpověď na otázky, které AI dostává: „kolik stojí X", „co obsahuje X", „pro koho je X".
- Když odpověď na stránce není, AI ji vezme od konkurence — nebo neodpoví.

## 3. Co má stránka služby obsahovat (struktura)

1. **Krátká definice služby** nahoře (40–60 slov) — co to je, pro koho, co z toho zákazník má.
2. **Pro koho to je / pro koho ne** — vymezení je silný signál relevance a šetří čas oběma stranám.
3. **Co je v tom** — konkrétní rozsah: výstupy, kroky, co dostane.
4. **Jak to probíhá** — proces v krocích (pomáhá i uživateli).
5. **Kolik to stojí** — cena, cenové rozpětí, nebo aspoň rámec („od X", „podle rozsahu; typicky X–Y"). Skrytá cena = chybějící odpověď.
6. **Kdo to dělá** — autor/tým, doložitelná zkušenost (E-E-A-T).
7. **Výsledek / doklad** — případ z praxe, čísla, reference (bez vymýšlení).
8. **FAQ** — reálné otázky před nákupem.
9. **Jasný další krok** — co se stane, když se ozvu.

## 4. Service strukturovaná data (Schema.org)

- Typ **`Service`**; klíčové vlastnosti:
  - `name` — název služby
  - `description` — krátký popis
  - `provider` — kdo ji poskytuje (Organization)
  - `serviceType` — typ služby
  - `areaServed` — kde ji poskytujete (např. Česko)
  - `offers` (`Offer`) — cena nebo cenové rozpětí; u rozpětí lze `PriceSpecification`
  - `audience` — komu je určená
- Musí odpovídat viditelnému obsahu stránky (jinak nesoulad).
- Poznámka: `Service` **nemá** vlastní vzhled ve výsledcích jako Product; jde hlavně o strojovou srozumitelnost, ne o „rich results". Nepřeslibovat.

### Příklad (zjednodušený)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI SEO audit",
  "serviceType": "SEO konzultace",
  "description": "Revize webu z pohledu viditelnosti v AI odpovědích a ve vyhledávání.",
  "provider": { "@type": "Organization", "name": "Vaše firma s.r.o." },
  "areaServed": { "@type": "Country", "name": "Česko" },
  "audience": { "@type": "Audience", "audienceType": "E-shopy a B2B firmy" },
  "offers": {
    "@type": "Offer",
    "price": "9990",
    "priceCurrency": "CZK"
  }
}
```

## 5. Cena — nejcitlivější bod

- Nejčastější dotaz je „kolik to stojí". Když odpověď chybí, stránka na něj neodpovídá.
- Argument „ceny nedáváme, je to individuální" je pochopitelný, ale pro AI (i pro zákazníka) znamená prázdno.
- Řešení: **cenový rámec** — „od X Kč", „typicky X–Y Kč podle rozsahu", „hodinová sazba X". Pořád je to odpověď.
- Hedge: neslibovat, že uvedení ceny = víc poptávek. Jen: bez ceny nemá AI co odpovědět.

## 6. Nejčastější chyby

- **Marketingový blob** bez informací („individuální přístup", „lídr na trhu").
- **Žádná cena ani rámec** — chybí odpověď na nejčastější dotaz.
- **Nevymezené „pro koho"** — služba pro všechny = pro nikoho; slabá relevance.
- **Chybí rozsah** — zákazník ani AI neví, co v tom je.
- **Strukturovaná data neodpovídají stránce** — např. cena v datech, ale ne na stránce.
- **Jedna stránka na deset služeb** — nic z toho nejde dohledat; každá služba vlastní stránku.
- **Vymyšlené reference / čísla** — riziko.

## 7. CZ specifika

- Česká B2B praxe: ceny se často neuvádějí vůbec. Kdo uvede aspoň rámec, odpovídá na dotaz, na který ostatní neodpovídají.
- `areaServed` na Česko (nebo kraj) pomáhá u lokálních dotazů.
- Psát česky, bez anglických názvů služeb, které nikdo nehledá.

## 8. Brand voice notes

- „Service schema" → **strukturovaná data typu Service** (Service, Offer, provider, areaServed, audience ponechat jako technické názvy).
- „landing page" → prodejní stránka; „pricing" → ceny/ceník; „scope" → rozsah; „lead" → poptávka; „case study" → případ z praxe; „rich results" → ponechat jen v poznámce, že je Service nemá.
- Hedge: nikde neslibovat víc poptávek ani že Service data zajistí viditelnost.
- Answer + první odstavec = samostatná definice.

## 9. Interní odkazy (ověřeno, existují)

- `produktove-stranky-pro-ai` (párový článek — produkty vs. služby)
- `kategorie-texty-pro-ai` (další typ stránky)
- `strukturovana-data-pro-ai` (obecně strukturovaná data)
- `ai-seo-b2b` (B2B kontext)
- `e-e-a-t-pro-ai` (kdo to dělá / důvěryhodnost)
- `jak-ai-cituje-zdroje` (proč konkrétní odpověď)
- `ai-seo-content` (struktura obsahu)

## 10. CTA pozice

- Tutorial → primárně **Pack 1 490 Kč** (wireframy stránek včetně prodejní/služební stránky).
- Sekundárně **Audit 9 990 Kč** (revize stránek služeb).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Schema.org — Service, Offer, PriceSpecification, areaServed, audience
- Google Search Central — strukturovaná data (Service nemá vlastní rich result)
- Praxe: B2B stránky služeb a chybějící cenové rámce
