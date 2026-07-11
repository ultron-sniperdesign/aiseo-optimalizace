# Research — Person strukturovaná data pro autora

**Datum:** 2026-07-11
**Cílová kategorie:** tutorial
**Slug:** `person-data-pro-autora` (změněno z `person-schema-pro-autora` po auditu — „schema" anglicismus)
**Cílové KW:** person schema autor / autor strukturovaná data / person json-ld / sameas autor ai

## 1. Co je Person a proč (definice + kontext)

- **Person** je typ ze slovníku Schema.org, kterým strojově čitelně popíšete autora (jméno, role, profily, oblasti expertízy).
- Pomáhá Googlu i AI **rozpoznat autora jako entitu** a propojit signály o něm napříč webem.
- V AI éře váží důvěryhodnost autora (E-E-A-T); Person data ji technicky deklarují.
- AI modely chápou svět přes **entity a vztahy**, ne jen klíčová slova → jasně popsaná entita autora pomáhá.

## 2. Klíčové vlastnosti Person

- `name` — celé jméno autora (musí sedět s bylinou na stránce).
- `url` — kanonická stránka autora (autorský profil na webu).
- `image` — fotka autora.
- `jobTitle` — role/pozice.
- `worksFor` — organizace (napojení na Organization).
- `sameAs` — **NEJdůležitější** pro AI: pole URL na profily, které jednoznačně identifikují autora (LinkedIn, Wikidata, X, osobní web).
- `description` — krátký popis.
- `knowsAbout` — oblasti expertízy (témata, kterým autor rozumí). → nový řádek knowsabout.

## 3. sameAs — srdce disambiguace

- `sameAs` = URL referenčních stránek, které **jednoznačně** identifikují autora.
- Tím Google/AI odliší vašeho autora od kohokoli jiného se stejným jménem.
- Čím autoritativnější profily (Wikidata, LinkedIn, oborové profily), tím silnější disambiguace.
- Doporučení: minimálně jeden kanonický profil (ideálně LinkedIn + Wikidata + osobní web).

## 4. @id pattern — jedna entita napříč články

- Autorovi přiřaďte stabilní **`@id`** (např. `https://vasweb.cz/#autor-jmeno`).
- Ten **@id opakujte** v každém článku, který napsal → Google/AI je sloučí do jedné entity.
- Article odkazuje na autora přes `author` s `@id`, na vydavatele přes `publisher` s `@id`.
- Konzistentní @id > definovat autora znovu na každé stránce.

## 5. Kam a jak JSON-LD vložit

- JSON-LD do `<script type="application/ld+json">` na stránce.
- Buď na autorský profil (definice Person), a v článcích jen odkaz přes `@id`.
- Astro/CMS: obvykle v šabloně článku / autora.

### Příklad (zjednodušený)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://vasweb.cz/#autor-jan-novak",
  "name": "Jan Novák",
  "url": "https://vasweb.cz/o-nas/jan-novak/",
  "jobTitle": "AI SEO konzultant",
  "worksFor": { "@type": "Organization", "name": "Vaše firma s.r.o." },
  "knowsAbout": ["AI SEO", "strukturovaná data", "e-commerce"],
  "sameAs": [
    "https://www.linkedin.com/in/jan-novak/",
    "https://www.wikidata.org/wiki/Q000000",
    "https://vasweb.cz/o-nas/jan-novak/"
  ]
}
```

## 6. Konzistence markup ↔ viditelný obsah (KRITICKÉ)

- Person data musí odpovídat tomu, co je na stránce **reálně vidět** (jméno, role, profil).
- Nevymýšlet tituly ani profily, které autor nemá.
- Nesoulad = riziko (a u YMYL témat obzvlášť).

## 7. Nejčastější chyby

- **Chybí sameAs** — bez něj AI/Google těžko odliší autora od jmenovců.
- **Odkazy na neexistující/cizí profily** — nesoulad.
- **Různý @id na každém článku** — entity se nesloučí.
- **Jméno v datech ≠ bylina na stránce** — nekonzistence.
- **Person bez viditelného autorského profilu** — data bez opory.
- **Fake E-E-A-T** — vymyšlené kredencials.

## 8. CZ specifika

- sameAs na český LinkedIn profil + případně Wikidata (i česká položka).
- Autorský profil česky, jméno bez překlepů/diakritiky konzistentně.
- Napojení na znacka-na-wikipedii-pro-ai (Wikidata pro entitu), autorsky-profil-pro-ai (strategie), linkedin-pro-ai-citace (LinkedIn profil).

## 9. Brand voice notes

- „schema markup" → „strukturovaná data" (Person, sameAs, knowsAbout, @id ponechat jako technické názvy)
- „author entity" → „entita autora"
- „disambiguation" → „odlišení / jednoznačná identifikace"
- „byline" → „bylina (jméno autora u článku)"
- „crawler" → „vyhledávací robot"
- „E-E-A-T" ponechat (zavedená zkratka), vysvětlit
- Čísla (40 % citace z Princeton studie) hedge „podle studie / orientačně".

## 10. Interní odkazy (ověřeno, existují)

- `autorsky-profil-pro-ai` (strategie autorského profilu — párový článek)
- `e-e-a-t-pro-ai` (E-E-A-T kontext)
- `strukturovana-data-pro-ai` (obecně strukturovaná data)
- `linkedin-pro-ai-citace` (LinkedIn jako sameAs profil)
- `znacka-na-wikipedii-pro-ai` (Wikidata jako sameAs)
- `jak-ai-cituje-zdroje` (proč autorita pomáhá citaci)
- `test-viditelnosti-v-ai` (měření)

## 11. CTA pozice

- Tutorial → primárně **Pack 1 490 Kč** (wireframy + struktura včetně autorského profilu).
- Sekundárně **Audit 9 990 Kč** (revize strukturovaných dat a autorských entit).
- Transparentně: Sniperdesign Zlatý partner Upgates od 2016.

## Zdroje
- Schema.org — Person, sameAs
- jsonld.com — Person JSON-LD examples
- esseeoo.com — E-E-A-T & JSON-LD (Person, Organization, @id)
- Princeton GEO study (kontext: strukturovaná data + citace + statistiky → vyšší AI citace)
