# Research — Autor a jeho profil jako signál důvěry pro AI (author entity)

**Datum:** 2026-06-11
**Cílová kategorie:** tutorial
**Slug:** `autorsky-profil-pro-ai`
**Cílové KW:** autorsky profil pro ai / author entity / autor jako signal duvery / person schema autor

## 1. Proč autor entity roste na významu

- AI systémy i Google ověřují **kdo obsah napsal** — ne jako abstraktní „autoritu", ale jako **konkrétní entitu** (person) s dohledatelnou identitou.
- Podle dostupných analýz 2026: obsah se **jmenovaným expertním autorem** bývá citovaný častěji než obsah s generickou bylinou nebo anonymní „Redakce/Team/Admin".
- **Uváděná čísla (POZOR: marketingové zdroje, nutno hedgovat):**
  - ~28 % citation lift u named-expert attribution vs. generic byline (nutno „podle dostupných analýz").
  - Person + Article schema má podle některých analýz 130–170 % dopad na AI Overviews citation rate (silně marketingové, nutno hedge).
  - E-E-A-T silné stránky #6–10 citovány 2,3× častěji než #1 se slabým E-E-A-T (podle některých analýz).
- **Klíčová logika (spolehlivá):** AI a Google se posouvají od keywords k **entitám** — verifikovaná identita autora je jeden z entity trust signálů.

## 2. Co je author entity

- **Author entity** = konkrétní osoba (ne jméno v textu), kterou vyhledávače a AI rozpoznají jako **jednoznačnou entitu** s propojenými profily.
- Skládá se z:
  1. **Viditelná bylina** (jméno autora na článku).
  2. **Autorská stránka** (bio, foto, kredencials, seznam článků).
  3. **Person strukturovaná data** (schema.org Person s `name`, `url`, `sameAs`, `jobTitle`, `image`).
  4. **sameAs propojení** na externí profily (LinkedIn, Wikidata, ORCID, publikace, univerzita).
  5. **Konzistence** — stejné jméno napříč všemi místy.

## 3. Klíčové technické prvky

### Person schema (JSON-LD)
```json
{
  "@type": "Person",
  "name": "Jan Novák",
  "url": "https://vasweb.cz/autori/jan-novak/",
  "image": "https://vasweb.cz/autori/jan-novak.jpg",
  "jobTitle": "SEO konzultant",
  "sameAs": [
    "https://www.linkedin.com/in/jan-novak/",
    "https://www.wikidata.org/wiki/Q...",
    "https://orcid.org/0000-..."
  ]
}
```
- Vnořeno do `Article` / `BlogPosting` jako `author`.

### sameAs pravidla
- **Minimum 2 verifikované externí profily** (podle analýz začíná měřitelný efekt).
- Funkční sameAs listy v polovině 2026: **5–12 verifikovaných URL**.
- Vhodné profily: LinkedIn (minimum), Wikidata, ORCID (akademici), Muck Rack (novináři), GitHub (vývojáři), vlastní web, univerzitní stránka, odborné organizace.
- **NE** sociální sítě bez identity (anonymní Twitter/X účet).

### Konzistence jména
- Jméno v schema **musí přesně sedět s viditelnou bylinou**.
- „Jan Novák" vs. „Jan M. Novák" = mismatch → oslabuje entity signal.
- Stejné jméno napříč webem, LinkedIn, Wikidata.

## 4. Autorská stránka (author page)

Co má obsahovat:
- **Full name** + role/pozice.
- **Headshot** (reálná foto, ne stock).
- **Bio** — konkrétní zkušenost, léta praxe, obor.
- **Kredencials** — tituly, certifikace, licence (u YMYL kriticky).
- **sameAs odkazy** — LinkedIn, publikace, profily.
- **Seznam článků** autora (interní prolinkování).
- **Person strukturovaná data** na této stránce.

## 5. YMYL specifika (Your Money Your Life)

- **YMYL témata** = zdraví, finance, právo, bezpečnost.
- U YMYL je laťka E-E-A-T **výrazně vyšší**.
- **Ověřitelné kredencials v sameAs jsou load-bearing:**
  - Lékař s ověřitelnou URL lékařské licence/registrace = výrazně vyšší E-E-A-T.
  - Advokát s odkazem na ČAK profil.
  - Finanční poradce s registrací ČNB.
- Bez ověřitelných kredencials u YMYL témat = nižší šance na citace.

## 6. Nejčastější chyby

- **Anonymní autor** („Redakce", „Admin", „Team") = nulový author entity signál pro AI.
- **Fake autoři se stock foto** = riziko demotion pod Google spam policies.
- **Mismatch jména** mezi bylinou a schema.
- **Prázdná autorská stránka** bez bio, kredencials, sameAs.
- **sameAs na nedohledatelné profily** (mrtvé odkazy, anonymní účty).
- **Person schema bez url** na autorskou stránku.
- **Autor bez publikační historie** — jeden článek nestačí, buduje se sérií.

## 7. Časový horizont

- Podle dostupných analýz: autoři s Person schema, verifikovanými sameAs (min. 2 platformy) a **5+ publikovanými články** na dané téma začínají vykazovat měřitelné zlepšení citací za **3 až 6 měsíců**.
- **Není to instant** — author entity je dlouhodobá investice.

## 8. Praktický postup

### Krok 1: Audit současného stavu
- Kdo je uvedený jako autor článků? (Anonymní? „Redakce"?)
- Existuje autorská stránka?
- Je Person schema?

### Krok 2: Základní autorská data pro každou bylinu
- Full name, role, headshot URL, one-sentence bio, min. 1 kanonický profil (LinkedIn).

### Krok 3: Autorská stránka
- Vytvořit `/autori/jmeno/` s bio, foto, kredencials, sameAs, seznamem článků.

### Krok 4: Person strukturovaná data
- JSON-LD Person vnořené do Article, `sameAs` s 2+ profily.
- Ověřit v Google Rich Results Test / Schema.org Validator.

### Krok 5: sameAs rozšíření
- LinkedIn (minimum), Wikidata položka (pokud entity notability stačí), ORCID, odborné profily.

### Krok 6: Konzistence
- Stejné jméno všude, headshot stejný, bio konzistentní.

### Krok 7: Publikační série
- 5+ článků na téma pod stejným autorem = buduje topical authority autora.

## 9. CZ specifika

- **LinkedIn** je v Česku silný pro B2B autory — minimum sameAs.
- **Wikidata** položka pro autora je realistická i pro menší experty (nižší notabilita než Wikipedie).
- **ČAK** (advokáti), **ČLK** (lékaři), **ČNB registr** (finanční poradci) = ověřitelné CZ kredencials pro YMYL.
- České akademické profily (univerzitní stránky, RIV, ORCID) pro odborné autory.

## 10. Brand voice notes

- "schema markup" → "strukturovaná data"
- "framework" → "rámec"
- "garantujeme" → "může pomoci", "podle dostupných analýz"
- "bot/crawler" → "vyhledávací robot"
- "AIO" → "Google AI Overviews"
- "byline" → "bylina" / "podpis autora" při prvním výskytu
- "author entity" → "autorská entita" / vysvětlit
- "headshot" → "portrétní foto"
- "credentials" → "kredencials" → "odborné doklady / kvalifikace"
- "citation lift" → "nárůst citací"
- "YMYL" → "citlivá témata (zdraví, finance, právo)" při prvním výskytu
- "sameAs" → ponechat (schema.org property), vysvětlit
- "load-bearing" → "klíčové / nosné"
- "topical authority" → "tematická autorita"

## 11. CTA pozice

- Tutorial → **primárně Pack 1 490 Kč** (DIY šablony autorské stránky + Person schema vzory).
- Sekundárně **Audit 9 990 Kč** (posoudí author entity stav webu).
- Transparentní: Sniperdesign + Upgates Gold partner — na Upgates lze autorské stránky a Person schema řešit přes šablony.
